// Loads the 100 original Kashmir packages (src/data/packages/kashmir.ts) into
// the database, priced from prisma/kashmir-package-prices.csv.
//
//   npm run db:seed:kashmir-catalog            create missing, update prices
//   npm run db:seed:kashmir-catalog -- --force also rewrite title/summary/itinerary
//
// Pricing: fill `competitor_price` (INR, per person) for each slug in the CSV,
// e.g. MakeMyTrip's price for a comparable package. Our price is set
// PERCENT_BELOW (default 2) percent lower and the package is published.
// Rows left blank stay unpublished (hidden from the site) until priced.
// Edits made in Admin -> Packages are kept unless --force is passed.
import { readFileSync, existsSync } from "fs";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { KASHMIR_PACKAGES } from "../src/data/packages/kashmir";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL, max: Number(process.env.PG_POOL_MAX) || 5 });
const prisma = new PrismaClient({ adapter });

const CSV = "prisma/kashmir-package-prices.csv";
const PERCENT_BELOW = Number(process.env.PERCENT_BELOW ?? 2);

// Minimal CSV line split that respects "quoted, fields" (as Excel/Sheets export).
function splitCsv(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (quoted) {
      if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (ch === '"') quoted = false;
      else cur += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") { out.push(cur); cur = ""; }
    else cur += ch;
  }
  out.push(cur);
  return out;
}

function readPrices(): Map<string, { price: number; source: string }> {
  const out = new Map<string, { price: number; source: string }>();
  if (!existsSync(CSV)) return out;
  const [header, ...rows] = readFileSync(CSV, "utf8").split(/\r?\n/).filter((l) => l.trim());
  const cols = splitCsv(header).map((c) => c.trim());
  const iSlug = cols.indexOf("slug");
  const iPrice = cols.indexOf("competitor_price");
  const iSource = cols.indexOf("competitor");
  for (const row of rows) {
    const cells = splitCsv(row);
    const price = Number((cells[iPrice] ?? "").replace(/[^\d]/g, ""));
    if (cells[iSlug] && price > 0) out.set(cells[iSlug].trim(), { price, source: cells[iSource]?.trim() || "MakeMyTrip" });
  }
  return out;
}

async function main() {
  const force = process.argv.includes("--force");
  const prices = readPrices();
  const dest = await prisma.destination.findUnique({ where: { slug: "kashmir" }, include: { cities: true } });
  if (!dest) throw new Error('No "kashmir" destination: run db:seed:locations first');
  const cityId = (slug: string) => dest.cities.find((c) => c.slug === slug)?.id ?? null;

  let created = 0, updated = 0, priced = 0, hidden = 0;
  for (const p of KASHMIR_PACKAGES) {
    const ref = prices.get(p.slug);
    const pricing = ref
      ? { referencePrice: ref.price, referenceSource: ref.source, price: Math.round(ref.price * (1 - PERCENT_BELOW / 100)), published: true }
      : null;
    const text = { title: p.title, summary: p.summary, itinerary: p.itinerary, theme: p.theme, durationDays: p.durationDays, durationNights: p.durationNights };
    const existing = await prisma.package.findUnique({ where: { slug: p.slug }, select: { id: true } });
    if (!existing) {
      await prisma.package.create({
        data: {
          slug: p.slug,
          ...text,
          heroImage: "", // falls back to the city or destination photo
          destinationId: dest.id,
          cityId: cityId(p.city),
          ...(pricing ?? { price: 0, published: false }),
        },
      });
      created += 1;
    } else {
      await prisma.package.update({ where: { slug: p.slug }, data: { ...(force ? text : {}), ...(pricing ?? {}) } });
      updated += 1;
    }
    if (pricing) priced += 1;
    else hidden += 1;
  }
  console.log(`Kashmir packages: ${created} created, ${updated} updated. ${priced} priced ${PERCENT_BELOW}% below competitor and published, ${hidden} waiting for a price (unpublished).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
