// Adds the Kashmir keyword-pass copy to the live database, additively.
//
//   npx tsx --env-file=.env.production.local scripts/push-kashmir-keywords.ts --dry-run
//   npx tsx --env-file=.env.production.local scripts/push-kashmir-keywords.ts
//
// What it adds (src/lib/content-merge.ts rules: new list items only, objects
// merged key by key, text filled only when empty; nothing is removed or rewritten,
// so admin edits are kept):
//   - Destination "kashmir": the package hub copy from kashmir-packages-hub.ts
//     (written 2026-11-01, never pushed), then kashmir-keywords.ts.
//   - Cities and places: kashmir-keywords-towns.ts.
// The current live content of every row it touches is saved to ../backups first.
// Public pages are static (revalidate = false): redeploy after running this.
import { mkdirSync, writeFileSync } from "node:fs";
import { PrismaClient, type Prisma } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { additiveMerge } from "../src/lib/content-merge";
import { KASHMIR_PACKAGES_DESTINATION } from "../src/data/content/kashmir-packages-hub";
import { KASHMIR_KW_DESTINATION } from "../src/data/content/kashmir-keywords";
import { KASHMIR_KW_CITIES, KASHMIR_KW_PLACES } from "../src/data/content/kashmir-keywords-towns";

const dryRun = process.argv.includes("--dry-run");
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL, max: 2 }) });

type Json = Record<string, unknown>;

// Count list items and filled text fields, to report what a merge adds.
function size(v: unknown): number {
  if (Array.isArray(v)) return v.length;
  if (v && typeof v === "object") return Object.values(v).reduce((n: number, x) => n + size(x), 0);
  return typeof v === "string" && v ? 1 : 0;
}

async function main() {
  const backup: Json = {};
  const report: string[] = [];
  const writes: (() => Promise<unknown>)[] = [];

  const dest = await prisma.destination.findUnique({ where: { slug: "kashmir" }, select: { id: true, content: true, contentStatus: true } });
  if (!dest) throw new Error('no destination "kashmir"');
  const live = (dest.content ?? {}) as Json;
  const next = additiveMerge(additiveMerge(live, KASHMIR_PACKAGES_DESTINATION.kashmir), KASHMIR_KW_DESTINATION.kashmir);
  backup["destination:kashmir"] = live;
  report.push(`destination kashmir (${dest.contentStatus}): +${size(next) - size(live)} items`);
  writes.push(() => prisma.destination.update({ where: { id: dest.id }, data: { content: next as Prisma.InputJsonValue } }));

  for (const [slug, extra] of Object.entries(KASHMIR_KW_CITIES)) {
    const city = await prisma.city.findUnique({ where: { slug }, select: { id: true, content: true, contentStatus: true } });
    if (!city) { report.push(`city ${slug}: NOT FOUND, skipped`); continue; }
    const cur = (city.content ?? {}) as Json;
    const merged = additiveMerge(cur, extra);
    backup[`city:${slug}`] = cur;
    report.push(`city ${slug} (${city.contentStatus}): +${size(merged) - size(cur)} items`);
    writes.push(() => prisma.city.update({ where: { id: city.id }, data: { content: merged as Prisma.InputJsonValue } }));
  }

  for (const [path, extra] of Object.entries(KASHMIR_KW_PLACES)) {
    const place = await prisma.place.findUnique({ where: { path }, select: { id: true, content: true, contentStatus: true } });
    if (!place) { report.push(`place ${path}: NOT FOUND, skipped`); continue; }
    const cur = (place.content ?? {}) as Json;
    const merged = additiveMerge(cur, extra);
    backup[`place:${path}`] = cur;
    report.push(`place ${path} (${place.contentStatus}): +${size(merged) - size(cur)} items`);
    writes.push(() => prisma.place.update({ where: { id: place.id }, data: { content: merged as Prisma.InputJsonValue } }));
  }

  report.forEach((l) => console.log(l));
  if (dryRun) {
    console.log("Dry run: nothing written.");
    return;
  }
  mkdirSync("../backups", { recursive: true });
  const file = `../backups/kashmir-keywords-before-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  writeFileSync(file, JSON.stringify(backup, null, 1));
  console.log(`Backup: ${file}`);
  for (const w of writes) await w();
  console.log(`Written: ${writes.length} rows. Redeploy so the static pages pick it up.`);
}

main().finally(() => prisma.$disconnect());
