// Loads the 50 Kashmir value packages (src/data/packages/kashmir-value.ts),
// each priced 1% below a comparable market listing (benchmark stored as the
// package's competitor price, so Admin -> Packages shows the comparison).
//
//   npm run db:seed:kashmir-value                create missing, update prices
//   npm run db:seed:kashmir-value -- --force     also rewrite title/summary/itinerary
//   npm run db:seed:kashmir-value -- --publish-unverified
//                                                also publish the few packages whose
//                                                benchmark price was hard to read
//
// Admin edits are kept unless --force is passed.
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { KASHMIR_VALUE_PACKAGES } from "../src/data/packages/kashmir-value";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL, max: Number(process.env.PG_POOL_MAX) || 5 });
const prisma = new PrismaClient({ adapter });

async function main() {
  const force = process.argv.includes("--force");
  const publishUnverified = process.argv.includes("--publish-unverified");
  const dest = await prisma.destination.findUnique({ where: { slug: "kashmir" }, include: { cities: true } });
  if (!dest) throw new Error('No "kashmir" destination: run db:seed:locations first');
  const cityId = (slug: string) => dest.cities.find((c) => c.slug === slug)?.id ?? null;

  let created = 0, updated = 0, live = 0;
  for (const p of KASHMIR_VALUE_PACKAGES) {
    const published = !p.verify || publishUnverified;
    const pricing = { price: p.price, referencePrice: p.referencePrice, referenceSource: p.referenceSource };
    const text = { title: p.title, summary: p.summary, itinerary: p.itinerary, theme: p.theme, durationDays: p.durationDays, durationNights: p.durationNights };
    const existing = await prisma.package.findUnique({ where: { slug: p.slug }, select: { id: true } });
    if (!existing) {
      await prisma.package.create({
        data: { slug: p.slug, ...text, ...pricing, heroImage: "", destinationId: dest.id, cityId: cityId(p.city), published },
      });
      created += 1;
    } else {
      await prisma.package.update({ where: { slug: p.slug }, data: { ...(force ? text : {}), ...pricing, ...(published ? { published } : {}) } });
      updated += 1;
    }
    if (published) live += 1;
  }
  const waiting = KASHMIR_VALUE_PACKAGES.length - live;
  console.log(`Kashmir value packages: ${created} created, ${updated} updated, ${live} published.${waiting ? ` ${waiting} wait for a price check (see verify: true in kashmir-value.ts).` : ""}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
