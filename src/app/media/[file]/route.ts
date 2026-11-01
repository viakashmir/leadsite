import { prisma } from "@/lib/prisma";

// Serves MediaAsset images. URLs are content-addressed by slug and rewritten
// on change, so responses can be cached by the CDN for a year.
export async function GET(_req: Request, ctx: { params: Promise<{ file: string }> }) {
  const { file } = await ctx.params;
  const m = /^([a-z0-9-]+)\.webp$/.exec(file);
  if (!m) return new Response("Not found", { status: 404 });
  const asset = await prisma.mediaAsset.findUnique({ where: { slug: m[1] }, select: { bytes: true, mime: true } });
  if (!asset) return new Response("Not found", { status: 404 });
  return new Response(new Uint8Array(asset.bytes), {
    headers: {
      "Content-Type": asset.mime,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
