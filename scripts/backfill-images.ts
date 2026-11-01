// Fills hero photos for destinations, cities and packages with real,
// place-specific photos stored as WebP (MediaAsset, /media/{slug}.webp).
//
// Strict relevance rule: a Pixabay/Pexels photo is accepted only when its own
// tags, title or page slug name the place (e.g. "kerala" for Kerala). Photos
// tagged as AI-generated are skipped. Anything without a confident match is
// left empty and listed at the end for manual sourcing; nothing is guessed.
//
//   npx tsx --env-file=.env.production.local scripts/backfill-images.ts [--force] [--only=destinations,cities,packages]
//   (needs PIXABAY_API_KEY and/or PEXELS_API_KEY in the environment)
import { prisma } from "../src/lib/prisma";
import { storeImageAsWebp } from "../src/lib/media";

const force = process.argv.includes("--force");
const only = (process.argv.find((a) => a.startsWith("--only="))?.split("=")[1] ?? "destinations,cities,packages").split(",");
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Words too generic to prove a photo shows a specific place.
const GENERIC = new Set(["valley", "lake", "pass", "hills", "hill", "island", "islands", "city", "beach", "north", "south", "east", "west", "nagar", "fort", "temple", "the", "and", "tso"]);
const AI = /\b(ai|ai[- ]generated|generated|midjourney|stable diffusion|digital art|render|3d)\b/i;

type Hit = { url: string; text: string; pageUrl: string; width: number; height: number };

// A hero photo must show the place: scenery, landmarks or streets. Tags that
// mean the subject is something else (people, animals, objects, maps) reject it.
const SCENIC = /\b(landscape|mountains?|himalayas?|beach|coast|sea|ocean|island|lake|river|valley|waterfall|desert|dunes?|hills?|snow|forest|tea garden|backwaters?|houseboat|temple|palace|fort|castle|monastery|stupa|mosque|church|cathedral|monument|landmark|architecture|building|skyline|city|cityscape|tower|bridge|street|market|old town|village|harbou?r|port|sunset|sunrise|panorama|scenery|travel|tourism|heritage|ruins|gardens?)\b/i;
const OFF_SUBJECT = /\b(woman|man|girl|boy|child|children|people|person|portrait|face|model|fashion|selfie|bird|insect|bug|cat|dog|macaque|monkey|fish|deer|pelican|mushroom|food|dish|map|globe|world map|flag|computer|keyboard|typing|pliers|tool|text|logo|currency|money)\b/i;

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[^a-z0-9 ]/g, " ");
// The distinctive words of a place name, e.g. "Spiti Valley" -> ["spiti"].
const keyWords = (name: string) => norm(name).split(/\s+/).filter((w) => w.length >= 3 && !GENERIC.has(w));

// Countries a photo's tags may name; a photo naming a different one than the
// destination's (e.g. "krabi thailand" for Andaman) is the wrong place.
const COUNTRIES = ["india", "thailand", "indonesia", "malaysia", "singapore", "vietnam", "sri lanka", "maldives", "nepal", "bhutan", "china", "japan", "australia", "new zealand", "france", "italy", "switzerland", "germany", "spain", "turkey", "greece", "egypt", "uae", "usa", "united states", "canada", "mexico", "brazil", "peru", "philippines", "cambodia", "myanmar", "bangladesh", "pakistan", "mauritius", "seychelles", "azerbaijan", "united kingdom", "england", "scotland", "austria", "norway", "iceland", "croatia", "portugal"];

function wrongCountry(hit: Hit, country: string) {
  const tags = ` ${norm(hit.text)} `;
  return COUNTRIES.some((c) => c !== country && tags.includes(` ${c} `) && !(country === "united kingdom" && ["england", "scotland"].includes(c)));
}

// Higher is better: the place named early in the tags, plus landmark/scenery tags.
function score(hit: Hit, name: string) {
  const first = norm(hit.text.split(",").slice(0, 3).join(" "));
  const lead = keyWords(name).every((w) => ` ${first} `.includes(` ${w}`)) ? 5 : 0;
  const scenic = hit.text.split(",").filter((t) => SCENIC.test(t)).length;
  return lead + Math.min(scenic, 4);
}

function relevant(hit: Hit, name: string) {
  const tags = ` ${norm(hit.text)} `;
  const words = keyWords(name);
  return (
    words.length > 0 &&
    words.every((w) => tags.includes(` ${w}`)) && // the photo's own tags name the place
    SCENIC.test(hit.text) &&
    !OFF_SUBJECT.test(hit.text) &&
    !AI.test(hit.text) &&
    hit.width >= hit.height * 1.2 // landscape, fits the cards and heroes
  );
}

async function pixabay(q: string): Promise<Hit[]> {
  const key = process.env.PIXABAY_API_KEY;
  if (!key) return [];
  const u = new URL("https://pixabay.com/api/");
  Object.entries({ key, q, image_type: "photo", orientation: "horizontal", safesearch: "true", per_page: "30", order: "popular" }).forEach(([k, v]) => u.searchParams.set(k, v));
  await sleep(700);
  const res = await fetch(u);
  if (!res.ok) return [];
  const data = (await res.json()) as {
    hits?: { largeImageURL?: string; tags?: string; pageURL?: string; imageWidth?: number; imageHeight?: number }[];
  };
  return (data.hits ?? [])
    .filter((h) => h.largeImageURL)
    .map((h) => ({ url: h.largeImageURL!, text: h.tags ?? "", pageUrl: h.pageURL ?? "", width: h.imageWidth ?? 0, height: h.imageHeight ?? 0 }));
}

async function pexels(q: string): Promise<Hit[]> {
  const key = process.env.PEXELS_API_KEY;
  if (!key) return [];
  const u = new URL("https://api.pexels.com/v1/search");
  Object.entries({ query: q, orientation: "landscape", per_page: "30" }).forEach(([k, v]) => u.searchParams.set(k, v));
  await sleep(400);
  const res = await fetch(u, { headers: { Authorization: key } });
  if (!res.ok) return [];
  const data = (await res.json()) as {
    photos?: { url?: string; alt?: string; width?: number; height?: number; src?: { large2x?: string } }[];
  };
  return (data.photos ?? [])
    .filter((p) => p.src?.large2x)
    .map((p) => ({ url: p.src!.large2x!, text: p.alt ?? "", pageUrl: p.url ?? "", width: p.width ?? 0, height: p.height ?? 0 }));
}

async function findPhoto(name: string, queries: string[], country: string) {
  const ok: Hit[] = [];
  for (const q of queries) {
    for (const source of [pixabay, pexels]) {
      ok.push(...(await source(q)).filter((h) => relevant(h, name) && !wrongCountry(h, country)));
    }
    if (ok.some((h) => score(h, name) >= 6)) break; // a strong match; no need to search further
  }
  return ok.sort((a, b) => score(b, name) - score(a, name))[0] ?? null;
}

async function main() {
  const missing: string[] = [];
  let stored = 0;
  const run = async (
    kind: string,
    slug: string,
    name: string,
    region: string,
    country: string,
    current: string,
    queries: string[],
    save: (url: string) => Promise<unknown>,
  ) => {
    if (!force && current.startsWith("/media/")) return;
    const hit = await findPhoto(name, queries, country);
    if (!hit) {
      missing.push(`${kind}: ${name}`);
      if (current) await save(""); // never keep an old photo that failed the rules
      return;
    }
    const tags = hit.text.split(",").map((t) => t.trim()).filter(Boolean).slice(0, 3).join(", ");
    const alt = `${name}${region ? `, ${region}` : ""}${tags ? `: ${tags}` : ""}`;
    try {
      await save(await storeImageAsWebp({ sourceUrl: hit.url, slugHint: `${kind}-${slug}`, alt, credit: hit.pageUrl }));
      stored += 1;
      console.log(`  ok ${kind} ${name}`);
    } catch (e) {
      missing.push(`${kind}: ${name} (${(e as Error).message})`);
    }
  };

  if (only.includes("destinations")) {
    for (const d of await prisma.destination.findMany({ where: { kind: { not: "CIRCUIT" } }, orderBy: { tier: "asc" } })) {
      const region = d.isInternational ? "" : "India";
      const country = d.isInternational ? norm(d.name).trim().replace(/^dubai$/, "uae").replace(/^bali$/, "indonesia") : "india";
      await run("destination", d.slug, d.name, region, country, d.heroImage, [`${d.name} landscape`, `${d.name} travel`, d.isInternational ? d.name : `${d.name} India`, d.name], (heroImage) =>
        prisma.destination.update({ where: { id: d.id }, data: { heroImage } }),
      );
    }
  }
  if (only.includes("cities")) {
    for (const c of await prisma.city.findMany({ include: { destination: true }, orderBy: { tier: "asc" } })) {
      const country = c.destination.isInternational ? norm(c.destination.name).trim() : "india";
      await run("city", c.slug, c.name, c.destination.name, country, c.heroImage, [`${c.name} ${c.destination.name}`, `${c.name} landscape`, c.name], (heroImage) =>
        prisma.city.update({ where: { id: c.id }, data: { heroImage } }),
      );
    }
  }
  if (only.includes("packages")) {
    for (const p of await prisma.package.findMany({ include: { destination: true, city: true } })) {
      const place = p.city?.name ?? p.destination.name;
      await run("package", p.slug, place, p.destination.name, p.destination.isInternational ? norm(p.destination.name).trim() : "india", p.heroImage, [`${place} ${p.theme ?? ""}`.trim(), place], (heroImage) =>
        prisma.package.update({ where: { id: p.id }, data: { heroImage } }),
      );
    }
  }

  console.log(`\nStored ${stored} photos as WebP. No confident match for ${missing.length}:`);
  missing.forEach((m) => console.log(`  - ${m}`));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
