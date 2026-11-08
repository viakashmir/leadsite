// ONE-TIME maintenance endpoint (2026-11-08). Runs the additive Kashmir
// keyword-pass push (same logic as scripts/push-kashmir-keywords.ts) on Vercel,
// where the production DATABASE_URL lives. Remove after use.
//
// POST with header x-push-token (checked against a SHA-256 hash, the token is
// not in the code). ?dry=1 reports without writing. The response includes the
// live content before the push, as a backup.
import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import type { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { additiveMerge } from "@/lib/content-merge";
import { KASHMIR_PACKAGES_DESTINATION } from "@/data/content/kashmir-packages-hub";
import { KASHMIR_KW_DESTINATION } from "@/data/content/kashmir-keywords";
import { KASHMIR_KW_CITIES, KASHMIR_KW_PLACES } from "@/data/content/kashmir-keywords-towns";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const TOKEN_SHA256 = "66d577e22914b006b3b755f52f56be8ff2b1045168a48730c3685a4ab0695c7b";

function authorised(token: string | null): boolean {
  if (!token) return false;
  const a = Buffer.from(createHash("sha256").update(token).digest("hex"));
  const b = Buffer.from(TOKEN_SHA256);
  return a.length === b.length && timingSafeEqual(a, b);
}

type Json = Record<string, unknown>;
const size = (v: unknown): number =>
  Array.isArray(v) ? v.length : v && typeof v === "object" ? Object.values(v).reduce((n: number, x) => n + size(x), 0) : typeof v === "string" && v ? 1 : 0;

export async function POST(req: Request) {
  if (!authorised(req.headers.get("x-push-token"))) return NextResponse.json({ error: "not found" }, { status: 404 });
  const dry = new URL(req.url).searchParams.get("dry") === "1";

  const backup: Json = {};
  const report: string[] = [];
  const writes: Prisma.PrismaPromise<unknown>[] = [];

  const dest = await prisma.destination.findUnique({ where: { slug: "kashmir" }, select: { id: true, content: true, contentStatus: true } });
  if (!dest) return NextResponse.json({ error: 'no destination "kashmir"' }, { status: 500 });
  const live = (dest.content ?? {}) as Json;
  const next = additiveMerge(additiveMerge(live, KASHMIR_PACKAGES_DESTINATION.kashmir), KASHMIR_KW_DESTINATION.kashmir);
  backup["destination:kashmir"] = live;
  report.push(`destination kashmir (${dest.contentStatus}): +${size(next) - size(live)} items`);
  writes.push(prisma.destination.update({ where: { id: dest.id }, data: { content: next as Prisma.InputJsonValue } }));

  for (const [slug, extra] of Object.entries(KASHMIR_KW_CITIES)) {
    const city = await prisma.city.findUnique({ where: { slug }, select: { id: true, content: true, contentStatus: true } });
    if (!city) { report.push(`city ${slug}: NOT FOUND, skipped`); continue; }
    const cur = (city.content ?? {}) as Json;
    const merged = additiveMerge(cur, extra);
    backup[`city:${slug}`] = cur;
    report.push(`city ${slug} (${city.contentStatus}): +${size(merged) - size(cur)} items`);
    writes.push(prisma.city.update({ where: { id: city.id }, data: { content: merged as Prisma.InputJsonValue } }));
  }

  for (const [path, extra] of Object.entries(KASHMIR_KW_PLACES)) {
    const place = await prisma.place.findUnique({ where: { path }, select: { id: true, content: true, contentStatus: true } });
    if (!place) { report.push(`place ${path}: NOT FOUND, skipped`); continue; }
    const cur = (place.content ?? {}) as Json;
    const merged = additiveMerge(cur, extra);
    backup[`place:${path}`] = cur;
    report.push(`place ${path} (${place.contentStatus}): +${size(merged) - size(cur)} items`);
    writes.push(prisma.place.update({ where: { id: place.id }, data: { content: merged as Prisma.InputJsonValue } }));
  }

  if (!dry) await prisma.$transaction(writes);
  return NextResponse.json({ dry, written: dry ? 0 : writes.length, report, backup });
}
