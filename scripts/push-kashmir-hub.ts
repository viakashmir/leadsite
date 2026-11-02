// Pushes the Kashmir package hub copy (src/data/content/kashmir-packages-hub.ts)
// into the live database without touching anything else, and removes the old
// Baisaran pony-ride line from curated package itineraries.
//
//   npx tsx --env-file=.env.production.local scripts/push-kashmir-hub.ts --dry-run
//   npx tsx --env-file=.env.production.local scripts/push-kashmir-hub.ts
//
// Additive: only packages.intro/blocks/itineraries/faqs and the honeymoon and
// family theme copy are set; every other key of the live content (including
// admin edits) is kept. The live content is saved to ../backups first.
import { mkdirSync, writeFileSync } from "node:fs";
import { PrismaClient, type Prisma } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { KASHMIR_PACKAGES_DESTINATION } from "../src/data/content/kashmir-packages-hub";

const OLD_BAISARAN = " Pony rides to Baisaran meadow are optional.";
const NEW_BAISARAN = " Baisaran meadow has been closed to visitors since April 2025 and is not included.";

const dryRun = process.argv.includes("--dry-run");
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL, max: 2 }) });

async function main() {
  const dest = await prisma.destination.findUnique({ where: { slug: "kashmir" } });
  if (!dest) throw new Error('no destination "kashmir"');
  const live = (dest.content ?? {}) as Record<string, unknown> & { packages?: Record<string, unknown> & { themes?: Record<string, unknown> } };
  const hub = KASHMIR_PACKAGES_DESTINATION.kashmir.packages!;

  const next = {
    ...live,
    packages: {
      ...live.packages,
      intro: hub.intro,
      blocks: hub.blocks,
      itineraries: hub.itineraries,
      faqs: hub.faqs,
      themes: { ...live.packages?.themes, ...hub.themes },
    },
  };

  const pkgs = await prisma.package.findMany({
    where: { itinerary: { contains: "Baisaran" } },
    select: { id: true, title: true, itinerary: true },
  });
  const fixable = pkgs.filter((p) => p.itinerary.includes(OLD_BAISARAN));
  const other = pkgs.filter((p) => !p.itinerary.includes(OLD_BAISARAN) && !p.itinerary.includes(NEW_BAISARAN));

  console.log(`Kashmir content keys kept: ${Object.keys(live).join(", ")}`);
  console.log(`Package hub: intro ${hub.intro ? "yes" : "no"}, ${hub.blocks?.length} blocks, ${hub.itineraries?.length} itineraries, ${hub.faqs?.length} FAQs`);
  console.log(`Themes after push: ${Object.keys(next.packages.themes).join(", ")}`);
  console.log(`Curated packages with the old Baisaran line: ${fixable.length}`);
  if (other.length) {
    console.log(`Other packages mentioning Baisaran (not changed, review in admin):`);
    other.forEach((p) => console.log(`  - ${p.id} ${p.title}`));
  }
  if (dryRun) {
    console.log("Dry run: nothing written.");
    return;
  }

  mkdirSync("../backups", { recursive: true });
  const file = `../backups/kashmir-content-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  writeFileSync(file, JSON.stringify({ content: live, packages: fixable }, null, 2));
  console.log(`Backup written: ${file}`);

  await prisma.destination.update({ where: { id: dest.id }, data: { content: next as Prisma.InputJsonValue } });
  for (const p of fixable) {
    await prisma.package.update({ where: { id: p.id }, data: { itinerary: p.itinerary.replace(OLD_BAISARAN, NEW_BAISARAN) } });
  }
  console.log(`Done: Kashmir hub copy written, ${fixable.length} package itineraries updated.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
