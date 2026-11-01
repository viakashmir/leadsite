// Pings IndexNow (Bing, Copilot, DuckDuckGo via Bing, Yandex, Seznam, Naver)
// with every URL in the live sitemap. Run after each production deploy.
//
//   npx tsx scripts/indexnow-submit.ts [https://www.tavelpackage.in]
import { INDEXNOW_KEY } from "../src/lib/site";

const site = (process.argv[2] ?? "https://www.tavelpackage.in").replace(/\/$/, "");

async function main() {
  const xml = await (await fetch(`${site}/sitemap.xml`)).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (urls.length === 0) throw new Error("No URLs found in sitemap");
  const host = new URL(site).host;
  for (let i = 0; i < urls.length; i += 10000) {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host, key: INDEXNOW_KEY, keyLocation: `${site}/indexnow.txt`, urlList: urls.slice(i, i + 10000) }),
    });
    console.log(`IndexNow: ${Math.min(i + 10000, urls.length)}/${urls.length} URLs -> HTTP ${res.status}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
