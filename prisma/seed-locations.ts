// Loads the location structure from src/data/locations.ts into the database.
// Safe to re-run: upserts by slug and only touches structural fields, so
// summaries, images and guide content edited in the admin are kept.
//
// Also migrates the original 5 sample destinations (WanderLeads era) into the
// new structure without dropping their leads, packages or agent links.
//
//   npx tsx --env-file=.env prisma/seed-locations.ts
import { PrismaClient } from "../src/generated/prisma/client";
import type { DestinationKind } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import {
  CIRCUITS,
  DESTINATIONS,
  PREMIUM_LEAD_PRICE,
  slugify,
  type DestinationDef,
} from "../src/data/locations";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
  max: Number(process.env.PG_POOL_MAX) || 10,
});
const prisma = new PrismaClient({ adapter });

// Old destination slug -> new slug. The row is renamed in place (same id), so
// everything pointing at it keeps working; the old slug is kept for redirects.
const DESTINATION_RENAMES: Record<string, string> = {
  "jammu-and-kashmir": "kashmir",
  "golden-triangle-india": "golden-triangle",
};

// Old city slug -> what replaces it. References move to the target, then the
// old city row is deleted.
const CITY_REPLACEMENTS: Record<string, { city?: string; destination: string }> = {
  "jaipur-raj": { city: "jaipur", destination: "rajasthan" },
  delhi: { destination: "delhi" }, // Delhi is now a destination, not a city
};

// Place paths dropped from src/data/locations.ts. Listed explicitly (rather
// than deleting anything not in the data) so admin-added places survive.
const REMOVED_PLACES = [
  "pahalgam/places-to-visit/baisaran", // closed to visitors after April 2025; not promoted
];

const KIND: Record<DestinationDef["kind"], DestinationKind> = {
  state: "STATE",
  "union-territory": "UNION_TERRITORY",
  country: "COUNTRY",
  region: "REGION",
};

async function renameLegacyDestinations() {
  for (const [from, to] of Object.entries(DESTINATION_RENAMES)) {
    const old = await prisma.destination.findUnique({ where: { slug: from } });
    if (!old) continue;
    const clash = await prisma.destination.findUnique({ where: { slug: to } });
    if (clash) {
      console.warn(`  ! cannot rename ${from} -> ${to}: ${to} already exists, left as is`);
      continue;
    }
    await prisma.destination.update({
      where: { id: old.id },
      data: { slug: to, legacySlugs: { set: [...new Set([...old.legacySlugs, from])] } },
    });
    console.log(`  renamed destination ${from} -> ${to}`);
  }
}

async function upsertDestination(def: DestinationDef, sortOrder: number) {
  const structural = {
    name: def.name,
    officialName: def.officialName ?? null,
    kind: KIND[def.kind],
    zone: def.zone,
    tier: def.tier,
    premium: def.premium ?? false,
    sortOrder,
    isInternational: def.scope === "international",
    country: def.scope === "india" ? "India" : (def.officialName ?? def.name),
    state: def.scope === "india" ? (def.officialName ?? def.name) : null,
  };
  const existing = await prisma.destination.findUnique({ where: { slug: def.slug } });
  if (existing) {
    return prisma.destination.update({
      where: { id: existing.id },
      data: {
        ...structural,
        leadUnlockPrice:
          existing.leadUnlockPrice ?? (def.premium ? PREMIUM_LEAD_PRICE : null),
      },
    });
  }
  return prisma.destination.create({
    data: {
      slug: def.slug,
      ...structural,
      leadUnlockPrice: def.premium ? PREMIUM_LEAD_PRICE : null,
    },
  });
}

async function upsertPlaces(
  names: string[],
  destinationId: string,
  cityId: string | null,
  pathPrefix: string,
) {
  for (const [i, name] of names.entries()) {
    const slug = slugify(name);
    const path = `${pathPrefix}places-to-visit/${slug}`;
    await prisma.place.upsert({
      where: { path },
      update: { name, slug, sortOrder: i, destinationId, cityId },
      create: { path, name, slug, sortOrder: i, destinationId, cityId, kind: "PLACE" },
    });
  }
}

async function seedDestinations() {
  let cityCount = 0;
  let placeCount = 0;
  for (const [i, def] of DESTINATIONS.entries()) {
    const dest = await upsertDestination(def, i);
    if (def.places) {
      await upsertPlaces(def.places, dest.id, null, "");
      placeCount += def.places.length;
    }
    for (const [j, cityDef] of def.cities.entries()) {
      const data = {
        name: cityDef.name,
        kind: cityDef.kind,
        tier: cityDef.tier,
        sortOrder: j,
        destinationId: dest.id,
      };
      const city = await prisma.city.upsert({
        where: { slug: cityDef.slug },
        update: data,
        create: { slug: cityDef.slug, ...data },
      });
      await upsertPlaces(cityDef.places, dest.id, city.id, `${cityDef.slug}/`);
      cityCount += 1;
      placeCount += cityDef.places.length;
    }
  }
  console.log(`  ${DESTINATIONS.length} destinations, ${cityCount} cities, ${placeCount} places`);
}

async function seedCircuits() {
  for (const [i, def] of CIRCUITS.entries()) {
    const data = {
      name: def.name,
      kind: "CIRCUIT" as const,
      zone: null,
      tier: def.tier,
      premium: def.premium ?? false,
      sortOrder: 1000 + i,
      isInternational: def.scope === "international",
      country: def.scope === "india" ? "India" : "International",
    };
    const existing = await prisma.destination.findUnique({ where: { slug: def.slug } });
    const circuit = existing
      ? await prisma.destination.update({ where: { id: existing.id }, data })
      : await prisma.destination.create({
          data: { slug: def.slug, ...data, leadUnlockPrice: def.premium ? PREMIUM_LEAD_PRICE : null },
        });

    await prisma.circuitStop.deleteMany({ where: { circuitId: circuit.id } });
    for (const [j, slug] of def.covers.entries()) {
      const [city, dest] = await Promise.all([
        prisma.city.findUnique({ where: { slug } }),
        prisma.destination.findUnique({ where: { slug } }),
      ]);
      await prisma.circuitStop.create({
        data: {
          circuitId: circuit.id,
          cityId: city?.id ?? null,
          destinationId: city ? null : (dest?.id ?? null),
          sortOrder: j,
        },
      });
    }
  }
  console.log(`  ${CIRCUITS.length} circuits`);
}

async function replaceLegacyCities() {
  for (const [slug, target] of Object.entries(CITY_REPLACEMENTS)) {
    const old = await prisma.city.findUnique({ where: { slug } });
    if (!old) continue;
    const dest = await prisma.destination.findUniqueOrThrow({ where: { slug: target.destination } });
    const city = target.city
      ? await prisma.city.findUniqueOrThrow({ where: { slug: target.city } })
      : null;
    const oldDest = await prisma.destination.findUniqueOrThrow({ where: { id: old.destinationId } });
    // Rows filed under a circuit stay on the circuit; only their city hint moves.
    const keepCircuit = oldDest.kind === "CIRCUIT";
    const data = keepCircuit
      ? { cityId: city?.id ?? null }
      : { cityId: city?.id ?? null, destinationId: dest.id };
    const [leads, packages] = await Promise.all([
      prisma.lead.updateMany({ where: { cityId: old.id }, data }),
      prisma.package.updateMany({ where: { cityId: old.id }, data }),
    ]);
    await prisma.city.delete({ where: { id: old.id } });
    console.log(
      `  replaced legacy city ${slug} -> ${target.city ?? target.destination} (${leads.count} leads, ${packages.count} packages)`,
    );
  }
}

// A lead/package's destination must match its city's destination (e.g. Leh
// moved from Kashmir to Ladakh). Circuit rows are left on their circuit.
async function realignToCityDestination() {
  const rows = await prisma.city.findMany({ select: { id: true, destinationId: true } });
  let moved = 0;
  for (const city of rows) {
    const where = {
      cityId: city.id,
      destinationId: { not: city.destinationId },
      destination: { kind: { not: "CIRCUIT" as const } },
    };
    const [l, p] = await Promise.all([
      prisma.lead.updateMany({ where, data: { destinationId: city.destinationId } }),
      prisma.package.updateMany({ where, data: { destinationId: city.destinationId } }),
    ]);
    moved += l.count + p.count;
  }
  if (moved) console.log(`  realigned ${moved} leads/packages to their city's destination`);
}

async function main() {
  console.log("Renaming legacy destinations...");
  await renameLegacyDestinations();
  console.log("Destinations, cities, places...");
  await seedDestinations();
  console.log("Circuits...");
  await seedCircuits();
  const removed = await prisma.place.deleteMany({ where: { path: { in: REMOVED_PLACES } } });
  if (removed.count) console.log(`  removed ${removed.count} retired places`);
  console.log("Legacy cities...");
  await replaceLegacyCities();
  await realignToCityDestination();
  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
