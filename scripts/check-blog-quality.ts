// Blog quality gate: every post must be a full guide, not a thin page.
// Fails (exit 1) when any post misses the bar, and prints posts per
// destination against the 20-post target.
//
//   npx tsx scripts/check-blog-quality.ts [--destination=himachal]
import { BLOG_POSTS } from "../src/data/blog";
import { DESTINATIONS } from "../src/data/locations";

const MIN_WORDS = 900;
const MIN_INTRO_WORDS = 40;
const MIN_SECTIONS = 5;
const MIN_FAQS = 4;
const TARGET_PER_DESTINATION = 20;

const only = process.argv.find((a) => a.startsWith("--destination="))?.split("=")[1];
const words = (s: string) => s.split(/\s+/).filter(Boolean).length;

const failures: string[] = [];
const counts = new Map<string, { total: number; full: number }>();
const slugs = new Set<string>();

for (const p of BLOG_POSTS) {
  if (only && p.destination !== only) continue;
  if (slugs.has(p.slug)) failures.push(`${p.slug}: duplicate slug`);
  slugs.add(p.slug);
  const body = [p.intro, ...p.sections.flatMap((s) => [s.h, ...(s.p ?? []), ...(s.list ?? []), ...(s.days ?? [])]), ...p.faqs.flatMap((f) => [f.q, f.a])].join(" ");
  const problems = [
    words(body) < MIN_WORDS && `${words(body)} words (min ${MIN_WORDS})`,
    words(p.intro) < MIN_INTRO_WORDS && `intro ${words(p.intro)} words`,
    p.sections.length < MIN_SECTIONS && `${p.sections.length} sections`,
    p.faqs.length < MIN_FAQS && `${p.faqs.length} FAQs`,
    (p.description.length < 120 || p.description.length > 165) && `description ${p.description.length} chars`,
    /—/.test(body + p.title + p.description) && "em dash",
  ].filter(Boolean);
  const c = counts.get(p.destination) ?? { total: 0, full: 0 };
  c.total += 1;
  if (problems.length === 0) c.full += 1;
  else failures.push(`${p.destination}/${p.slug}: ${problems.join(", ")}`);
  counts.set(p.destination, c);
}

const dests = DESTINATIONS.filter((d) => !only || d.slug === only);
console.log(`Posts meeting the bar per destination (target ${TARGET_PER_DESTINATION}):`);
for (const d of dests) {
  const c = counts.get(d.slug) ?? { total: 0, full: 0 };
  console.log(`  ${d.slug.padEnd(20)} ${String(c.full).padStart(2)} full / ${String(c.total).padStart(2)} total`);
}
console.log(`\n${failures.length} posts below the bar.`);
if (process.argv.includes("--list")) failures.forEach((f) => console.log("  - " + f));
process.exit(failures.length === 0 ? 0 : 1);
