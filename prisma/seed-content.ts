// Writes destination guide content from src/data/content/* into the database
// and marks those destinations READY (indexable).
//
//   npm run db:seed:content            only fills destinations with no content yet
//   npm run db:seed:content -- --force overwrite existing content (e.g. after edits here)
//
// Content edited later in the admin is kept unless --force is passed.
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { CITY_CONTENT, DESTINATION_CONTENT, PLACE_CONTENT } from "../src/data/content";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
  max: Number(process.env.PG_POOL_MAX) || 10,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  const force = process.argv.includes("--force");
  let written = 0;
  let skipped = 0;
  for (const [slug, content] of Object.entries(DESTINATION_CONTENT)) {
    const dest = await prisma.destination.findUnique({ where: { slug } });
    if (!dest) {
      console.warn(`  ! no destination "${slug}", run seed-locations first`);
      continue;
    }
    if (dest.content && !force) {
      skipped += 1;
      continue;
    }
    await prisma.destination.update({
      where: { id: dest.id },
      data: {
        content,
        summary: content.intro?.split("\n\n")[0] ?? dest.summary,
        contentStatus: "READY",
      },
    });
    written += 1;
  }
  console.log(`Destination content: ${written} written, ${skipped} kept (use --force to overwrite).`);

  const firstPara = (c: { intro?: string }) => c.intro?.split("\n\n")[0];
  let cities = 0;
  for (const [slug, content] of Object.entries(CITY_CONTENT)) {
    const city = await prisma.city.findUnique({ where: { slug } });
    if (!city) {
      console.warn(`  ! no city "${slug}", run seed-locations first`);
      continue;
    }
    if (city.content && !force) continue;
    await prisma.city.update({
      where: { id: city.id },
      data: { content, summary: firstPara(content) ?? city.summary, contentStatus: "READY" },
    });
    cities += 1;
  }
  let places = 0;
  for (const [path, content] of Object.entries(PLACE_CONTENT)) {
    const place = await prisma.place.findUnique({ where: { path } });
    if (!place) {
      console.warn(`  ! no place "${path}", run seed-locations first`);
      continue;
    }
    if (place.content && !force) continue;
    await prisma.place.update({
      where: { id: place.id },
      data: { content, summary: firstPara(content) ?? place.summary, contentStatus: "READY" },
    });
    places += 1;
  }
  console.log(`City content: ${cities} written. Place content: ${places} written.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
