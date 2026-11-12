// Build step: writes every MediaAsset photo to public/media/{slug}.webp, so the
// deployment serves photos as static files from Vercel's CDN.
//
// Why: /media/[file] reads the image bytes from Postgres in a function, and
// every byte a function sends counts as Fast Origin Transfer. Crawlers, link
// previews (og:image), image search and next/image all fetch these photos, and
// the CDN cache empties on each deploy. That traffic helped get the Hobby team
// blocked for FAIR_USE_LIMITS_EXCEEDED (fastOriginTransfer) on 2026-11-12.
//
// Static files take precedence over the /media/[file] route, which stays as
// the fallback for photos uploaded after the last deploy. Never fails the
// build: with no database the route simply serves everything, as before.
//
//   npx tsx scripts/export-media.ts        (runs inside `npm run build`)
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const OUT = join(process.cwd(), "public", "media");
const BATCH = 25; // photos are up to ~400 KB each; keep each query small

async function main() {
  if (!process.env.DATABASE_URL || process.env.SKIP_MEDIA_EXPORT === "1") {
    console.log("[export-media] skipped (no DATABASE_URL or SKIP_MEDIA_EXPORT=1)");
    return;
  }
  const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL, max: 1 }) });
  try {
    mkdirSync(OUT, { recursive: true });
    let cursor: string | undefined;
    let files = 0;
    let bytes = 0;
    for (;;) {
      const rows = await prisma.mediaAsset.findMany({
        select: { id: true, slug: true, mime: true, bytes: true },
        orderBy: { id: "asc" },
        take: BATCH,
        ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
      });
      if (rows.length === 0) break;
      for (const r of rows) {
        // URLs are always /media/{slug}.webp; leave anything else to the route,
        // which sends the stored Content-Type.
        if (r.mime !== "image/webp" || !/^[a-z0-9-]+$/.test(r.slug)) continue;
        writeFileSync(join(OUT, `${r.slug}.webp`), r.bytes);
        files++;
        bytes += r.bytes.length;
      }
      cursor = rows[rows.length - 1].id;
    }
    console.log(`[export-media] wrote ${files} photos (${(bytes / 1048576).toFixed(1)} MB) to public/media`);
  } catch (err) {
    console.warn(`[export-media] failed, /media will be served by the route: ${err}`);
  } finally {
    await prisma.$disconnect();
  }
}

main();
