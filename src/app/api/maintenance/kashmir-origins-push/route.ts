// ONE-TIME maintenance endpoint (2026-11-08). Adds the "Kashmir tour packages
// from {city}" copy for the 15 departure cities added on 2026-11-08 to the live
// Kashmir destination content, additively. Remove after use.
//
// POST with header x-push-token (checked against a SHA-256 hash). ?dry=1
// reports without writing. The response includes the content before the push.
import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import type { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { additiveMerge } from "@/lib/content-merge";
import { KASHMIR_FROM_ORIGINS } from "@/data/content/kashmir-origins";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const TOKEN_SHA256 = "ad0b1ad103a4f56b34093e4ab72084b72dc7324a7775616d1a94fb1dafb3798e";
const NEW_ORIGINS = ["surat", "vadodara", "nagpur", "bhopal", "noida", "kanpur", "varanasi", "agra", "ludhiana", "jalandhar", "nashik", "coimbatore", "madurai", "thiruvananthapuram", "mysuru"];

function authorised(token: string | null): boolean {
  if (!token) return false;
  const a = Buffer.from(createHash("sha256").update(token).digest("hex"));
  const b = Buffer.from(TOKEN_SHA256);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(req: Request) {
  if (!authorised(req.headers.get("x-push-token"))) return NextResponse.json({ error: "not found" }, { status: 404 });
  const dry = new URL(req.url).searchParams.get("dry") === "1";

  const dest = await prisma.destination.findUnique({ where: { slug: "kashmir" }, select: { id: true, content: true } });
  if (!dest) return NextResponse.json({ error: 'no destination "kashmir"' }, { status: 500 });
  const live = (dest.content ?? {}) as Record<string, unknown> & { packages?: { fromOrigins?: Record<string, unknown> } };
  const extra = Object.fromEntries(NEW_ORIGINS.filter((o) => KASHMIR_FROM_ORIGINS[o]).map((o) => [o, KASHMIR_FROM_ORIGINS[o]]));
  const before = Object.keys(live.packages?.fromOrigins ?? {});
  const next = additiveMerge(live, { packages: { fromOrigins: extra } }) as typeof live;
  const after = Object.keys(next.packages?.fromOrigins ?? {});
  const added = after.filter((o) => !before.includes(o));

  if (!dry) await prisma.destination.update({ where: { id: dest.id }, data: { content: next as Prisma.InputJsonValue } });
  return NextResponse.json({ dry, originsBefore: before.length, originsAfter: after.length, added, backup: dry ? undefined : live });
}
