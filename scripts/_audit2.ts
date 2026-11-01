import { BLOG_POSTS } from "../src/data/blog";
import { DESTINATIONS } from "../src/data/locations";
import { metaTitle } from "../src/lib/blog";
import { CITY_CONTENT, DESTINATION_CONTENT, PLACE_CONTENT } from "../src/data/content";
const dests = new Map((DESTINATIONS as any[]).map((d) => [d.slug, d]));
const issues: Record<string, string[]> = {};
const add = (k: string, v: string) => ((issues[k] ??= []).push(v));
const titles = new Map<string, string>();
for (const p of BLOG_POSTS) {
  const d = dests.get(p.destination);
  if (!d) add("blog: unknown destination", `${p.slug} -> ${p.destination}`);
  else if (p.city && !(d.cities ?? []).some((c: any) => c.slug === p.city) && !(d.covers ?? []).includes(p.city)) add("blog: city not in destination", `${p.slug} -> ${p.destination}/${p.city}`);
  const mt = metaTitle(p);
  if (mt.length > 65) add("meta title > 65 chars (truncated in Google)", `${mt.length}  ${mt}`);
  if (titles.has(mt)) add("duplicate meta title", `${p.slug} = ${titles.get(mt)}`); titles.set(mt, p.slug);
  if (p.description.length < 120 || p.description.length > 165) add("description length", `${p.description.length} ${p.slug}`);
}
// hard-coded internal links inside content
const linkRe = /\]\((\/[^)\s]+)\)|href=\\?"(\/[^"\\]+)/g;
const blob = JSON.stringify({ DESTINATION_CONTENT, CITY_CONTENT, PLACE_CONTENT, BLOG_POSTS });
const links = new Set<string>(); let m; while ((m = linkRe.exec(blob))) links.add(m[1] ?? m[2]);
for (const [k, v] of Object.entries(issues)) { console.log(`\n## ${k} (${v.length})`); v.slice(0, 12).forEach((x) => console.log("  " + x)); if (v.length > 12) console.log(`  ... ${v.length - 12} more`); }
console.log("\nhard-coded internal links in content:", links.size, [...links].slice(0, 20));
console.log("posts:", BLOG_POSTS.length);
