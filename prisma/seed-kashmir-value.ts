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
    // A price that can't cover a cab and the cheapest hotel is never published.
    const published = p.realistic && (!p.verify || publishUnverified);
    const pricing = { price: p.price, referencePrice: p.referencePrice, referenceSource: p.referenceSource };
    const text = { title: p.title, summary: p.summary, itinerary: p.itinerary, theme: p.theme, durationDays: p.durationDays, durationNights: p.durationNights };
    const existing = await prisma.package.findUnique({ where: { slug: p.slug }, select: { id: true } });
    if (!existing) {
      await prisma.package.create({
        data: { slug: p.slug, ...text, ...pricing, heroImage: "", destinationId: dest.id, cityId: cityId(p.city), published },
      });
      created += 1;
    } else {
      // Title, summary and theme carry the hotel category, so they are always
      // refreshed: a stale "5-star" claim must not survive a re-run.
      const claims = { title: p.title, summary: p.summary, theme: p.theme };
      await prisma.package.update({
        where: { slug: p.slug },
        data: { ...(force ? text : claims), ...pricing, ...(published ? { published } : p.realistic ? {} : { published: false }) },
      });
      updated += 1;
    }
    if (published) live += 1;
  }
  const waiting = KASHMIR_VALUE_PACKAGES.length - live;
  const unrealistic = KASHMIR_VALUE_PACKAGES.filter((p) => !p.realistic).length;
  console.log(`Kashmir value packages: ${created} created, ${updated} updated, ${live} published, ${unrealistic} hidden as unrealistic.${waiting - unrealistic > 0 ? ` Others wait for a price check (verify: true in kashmir-value.ts).` : ""}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
