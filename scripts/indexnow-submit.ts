// Pings IndexNow (Bing, Copilot, DuckDuckGo via Bing, Yandex, Seznam, Naver)
// with the URLs that CHANGED, after a production deploy.
//
//   npx tsx scripts/indexnow-submit.ts --since 2026-11-12        sitemap URLs with lastmod on/after that day
//   npx tsx scripts/indexnow-submit.ts /blog/a /tour-packages/b   just these paths
//   npx tsx scripts/indexnow-submit.ts --all                      every sitemap URL (rarely: site-wide change)
//   --site https://www.tavelpackage.in                            (default)
//
// Submit only what changed. Each pinged URL is re-crawled, and re-crawling the
// whole site after every deploy is traffic Vercel bills (the Hobby team was
// blocked for Fast Origin Transfer on 2026-11-12 after many full submits).
import { INDEXNOW_KEY } from "../src/lib/site";

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : undefined;
}

async function main() {
  const site = (arg("--site") ?? "https://www.tavelpackage.in").replace(/\/$/, "");
  const since = arg("--since");
  const all = process.argv.includes("--all");
  const paths = process.argv.slice(2).filter((a, i, list) => a.startsWith("/") && list[i - 1] !== "--site");

  let urls: string[];
  if (paths.length) {
    urls = paths.map((p) => `${site}${p}`);
  } else if (since || all) {
    if (since && !/^\d{4}-\d{2}-\d{2}$/.test(since)) throw new Error("--since needs YYYY-MM-DD");
    const xml = await (await fetch(`${site}/sitemap.xml`)).text();
    const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
      loc: /<loc>([^<]+)<\/loc>/.exec(m[1])?.[1].trim(),
      lastmod: /<lastmod>([^<]+)<\/lastmod>/.exec(m[1])?.[1].trim(),
    }));
    urls = entries
      .filter((e) => e.loc && (all || (e.lastmod && e.lastmod.slice(0, 10) >= since!)))
      .map((e) => e.loc!);
  } else {
    throw new Error("Say what changed: --since YYYY-MM-DD, a list of /paths, or --all");
  }
  if (urls.length === 0) {
    console.log("Nothing to submit.");
    return;
  }

  const host = new URL(site).host;
  for (let i = 0; i < urls.length; i += 10000) {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host, key: INDEXNOW_KEY, keyLocation: `${site}/${INDEXNOW_KEY}.txt`, urlList: urls.slice(i, i + 10000) }),
    });
    console.log(`IndexNow: ${Math.min(i + 10000, urls.length)}/${urls.length} URLs -> HTTP ${res.status}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
