// One-off: copies every hotlinked hero image (absolute http URL stored on a
// destination, city, place or package) into MediaAsset as WebP and points the
// row at /media/{slug}.webp. Safe to re-run; rows already on /media are skipped.
//
//   npx tsx --env-file=.env scripts/migrate-images-to-webp.ts
import { prisma } from "../src/lib/prisma";
import { storeImageAsWebp } from "../src/lib/media";

async function main() {
  const isRemote = (s: string) => /^https?:\/\//.test(s);
  let done = 0;
  let failed = 0;
  const run = async (kind: string, slug: string, name: string, src: string, save: (url: string) => Promise<unknown>) => {
    if (!isRemote(src)) return;
    try {
      await save(await storeImageAsWebp({ sourceUrl: src, slugHint: `${kind}-${slug}`, alt: name }));
      done += 1;
    } catch (e) {
      failed += 1;
      console.warn(`  ! ${kind} ${slug}: ${(e as Error).message}`);
    }
  };
  for (const d of await prisma.destination.findMany())
    await run("destination", d.slug, d.name, d.heroImage, (heroImage) => prisma.destination.update({ where: { id: d.id }, data: { heroImage } }));
  for (const c of await prisma.city.findMany())
    await run("city", c.slug, c.name, c.heroImage, (heroImage) => prisma.city.update({ where: { id: c.id }, data: { heroImage } }));
  for (const p of await prisma.place.findMany())
    await run("place", p.path, p.name, p.heroImage, (heroImage) => prisma.place.update({ where: { id: p.id }, data: { heroImage } }));
  for (const p of await prisma.package.findMany())
    await run("package", p.slug, p.title, p.heroImage, (heroImage) => prisma.package.update({ where: { id: p.id }, data: { heroImage } }));
  console.log(`Images converted to WebP: ${done}, failed: ${failed}.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
