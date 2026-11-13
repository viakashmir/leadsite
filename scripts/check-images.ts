// Missing-image audit: crawls every sitemap page and reports
//   1. image sources that do not load (our /media photos, the source behind
//      each /_next/image URL, og:image, twitter:image and JSON-LD "image"),
//   2. pages with no photo at all inside <main> (a blog post or package
//      whose hero resolved to nothing renders no image),
//   3. photo slots that fell back to the coloured gradient with the place name
//      because the package, city and destination all lack a photo
//      (lib/media.ts packagePhoto / isPhoto).
//
//   npx tsx scripts/check-images.ts                         live site
//   npx tsx scripts/check-images.ts --base http://localhost:3311 --site https://www.tavelpackage.in
//
// Each source image is fetched once (not every /_next/image size), so a run
// does not trigger image optimisations on Vercel. Exit 1 when anything is missing.

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i > -1 ? process.argv[i + 1] : undefined;
}

const SITE = (arg("--site") ?? "https://www.tavelpackage.in").replace(/\/$/, "");
const BASE = (arg("--base") ?? SITE).replace(/\/$/, "");
const CONCURRENCY = 4;

const local = (u: string) => (u.startsWith(SITE) ? BASE + u.slice(SITE.length) : u.startsWith("/") ? BASE + u : u);

async function pool<T, R>(items: T[], fn: (t: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i]);
      }
    }),
  );
  return out;
}

function decode(s: string) {
  return s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
}

// Every image source a page points at, normalised to the original file.
function imageSources(html: string): string[] {
  const found = new Set<string>();
  const add = (raw: string) => {
    let u = decode(raw.trim().split(/\s+/)[0]);
    if (!u || u.startsWith("data:")) return;
    if (u.includes("/_next/image")) {
      const q = new URL(u, BASE).searchParams.get("url");
      if (!q) return;
      u = q;
    }
    found.add(u);
  };
  for (const m of html.matchAll(/<img\b[^>]*?\ssrc="([^"]+)"/g)) add(m[1]);
  for (const m of html.matchAll(/\ssrcset="([^"]+)"/g)) for (const part of m[1].split(",")) add(part);
  for (const m of html.matchAll(/<meta[^>]+(?:property|name)="(?:og:image|twitter:image)"[^>]+content="([^"]+)"/g)) add(m[1]);
  for (const m of html.matchAll(/"image"\s*:\s*"([^"]+)"/g)) add(m[1]);
  for (const m of html.matchAll(/"image"\s*:\s*\[([^\]]+)\]/g)) for (const s of m[1].matchAll(/"([^"]+)"/g)) add(s[1]);
  return [...found].filter((u) => !u.includes("/og?") && !u.startsWith(`${SITE}/og`) && !u.startsWith("/og"));
}

// Photo slots rendered without a photo: the gradient placeholder with no <img>.
function placeholders(html: string): number {
  let n = 0;
  for (const m of html.matchAll(/class="[^"]*from-royal to-royal-2[^"]*"[^>]*>([\s\S]{0,400}?)<\/(?:a|div)>/g)) {
    if (!/<img\b/.test(m[1])) n++;
  }
  return n;
}

async function main() {
  const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
  const pages = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()).filter((u) => !/\.(webp|jpe?g|png)$/.test(u));
  console.log(`Pages in sitemap: ${pages.length}`);

  const usedOn = new Map<string, string[]>();
  const noPhoto: { page: string; slots: number }[] = [];
  const bare: string[] = [];
  const pageErrors: string[] = [];
  await pool(pages, async (page) => {
    const path = page.replace(SITE, "") || "/";
    try {
      const res = await fetch(local(page), { redirect: "manual" });
      if (res.status !== 200) return void pageErrors.push(`${res.status} ${path}`);
      const html = await res.text();
      for (const src of imageSources(html)) usedOn.set(src, [...(usedOn.get(src) ?? []), path]);
      const main = /<main[\s\S]*?<\/main>/.exec(html)?.[0] ?? html;
      if (!/<img\b/.test(main)) bare.push(path);
      const slots = placeholders(html);
      if (slots) noPhoto.push({ page: path, slots });
    } catch (e) {
      pageErrors.push(`ERR ${path} ${(e as Error).message}`);
    }
  });

  const sources = [...usedOn.keys()];
  console.log(`Unique image sources: ${sources.length}`);
  const broken: string[] = [];
  await pool(sources, async (src) => {
    try {
      const res = await fetch(local(src), { method: "GET", redirect: "follow" });
      const type = res.headers.get("content-type") ?? "";
      await res.body?.cancel();
      if (res.status !== 200 || !type.startsWith("image/")) {
        const pages = usedOn.get(src)!;
        broken.push(`${res.status} ${type || "-"} ${src}  (on ${pages.length} pages, e.g. ${pages.slice(0, 3).join(", ")})`);
      }
    } catch (e) {
      broken.push(`ERR ${src} ${(e as Error).message}`);
    }
  });

  console.log(`\nBroken image sources: ${broken.length}`);
  broken.sort().forEach((b) => console.log("  " + b));
  console.log(`\nPages with photo slots showing the no-photo placeholder: ${noPhoto.length} (${noPhoto.reduce((n, p) => n + p.slots, 0)} slots)`);
  noPhoto.sort((a, b) => b.slots - a.slots).slice(0, 60).forEach((p) => console.log(`  ${p.slots}  ${p.page}`));
  console.log(`\nPages with no photo at all in <main>: ${bare.length}`);
  bare.sort().slice(0, 80).forEach((p) => console.log("  " + p));
  if (pageErrors.length) {
    console.log(`\nPages that did not return 200: ${pageErrors.length}`);
    pageErrors.slice(0, 30).forEach((p) => console.log("  " + p));
  }
  process.exit(broken.length || noPhoto.length || bare.length || pageErrors.length ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
