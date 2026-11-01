import sharp from "sharp";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/data/locations";

// Site images are stored once as WebP in MediaAsset and served from our own
// domain at /media/{slug}.webp. Remote photos (Pixabay) are downloaded and
// converted here instead of being hotlinked: their URLs expire, and image
// search and schema need stable, crawlable URLs on our host.

const MAX_WIDTH = 1600;
const QUALITY = 78;

export const mediaUrl = (slug: string) => `/media/${slug}.webp`;

// Card and hero components render a photo for our own media and for any
// absolute URL still stored from before the migration.
export const isPhoto = (src?: string | null): src is string => Boolean(src && /^(https?:\/\/|\/media\/)/.test(src));

export async function storeImageAsWebp(opts: {
  sourceUrl: string;
  slugHint: string;
  alt: string;
  credit?: string;
}): Promise<string> {
  const res = await fetch(opts.sourceUrl, { headers: { "User-Agent": "TavelPackageBot/1.0 (+https://www.tavelpackage.in)" } });
  if (!res.ok) throw new Error(`Image download failed (${res.status}): ${opts.sourceUrl}`);
  const input = Buffer.from(await res.arrayBuffer());
  const { data, info } = await sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toBuffer({ resolveWithObject: true });

  const slug = slugify(opts.slugHint);
  await prisma.mediaAsset.upsert({
    where: { slug },
    create: { slug, width: info.width, height: info.height, bytes: data, alt: opts.alt, sourceUrl: opts.sourceUrl, credit: opts.credit ?? "" },
    update: { width: info.width, height: info.height, bytes: data, alt: opts.alt, sourceUrl: opts.sourceUrl, credit: opts.credit ?? "" },
  });
  return mediaUrl(slug);
}
