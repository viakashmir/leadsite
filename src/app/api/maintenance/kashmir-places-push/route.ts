// ONE-TIME maintenance endpoint (2026-11-15): adds the batch 2 Kashmir place
// copy (src/data/content/kashmir-places*.ts, the five-competitor study) to the
// live database, additively (src/lib/content-merge.ts: new list items only,
// objects merged key by key, nothing removed or rewritten, so admin edits are
// kept). Remove after use.
//
// POST with header x-push-token (checked against a SHA-256 hash). ?dry=1
// reports without writing. A real run returns the content it replaced and
// refreshes the written place pages.
import { createHash, timingSafeEqual } from "node:crypto";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import type { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { additiveMerge } from "@/lib/content-merge";
import { KASHMIR_PLACES_BATCH_2 } from "@/data/content/kashmir-places";
import { placeUrl } from "@/lib/urls";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const TOKEN_SHA256 = "3d1e30755c628e5a68841952f6110ab55e678c4809fa84c4de536b620bbbb60f";

function authorised(token: string | null): boolean {
  if (!token) return false;
  const a = Buffer.from(createHash("sha256").update(token).digest("hex"));
  const b = Buffer.from(TOKEN_SHA256);
  return a.length === b.length && timingSafeEqual(a, b);
}

function size(v: unknown): number {
  if (Array.isArray(v)) return v.length;
  if (v && typeof v === "object") return Object.values(v).reduce((n: number, x) => n + size(x), 0);
  return typeof v === "string" && v ? 1 : 0;
}

export async function POST(req: Request) {
  if (!authorised(req.headers.get("x-push-token"))) return NextResponse.json({ error: "not found" }, { status: 404 });
  const dry = new URL(req.url).searchParams.get("dry") === "1";
  const report: string[] = [];
  const backup: Record<string, unknown> = {};
  const writes: (() => Promise<unknown>)[] = [];

  for (const [path, extra] of Object.entries(KASHMIR_PLACES_BATCH_2)) {
    const row = await prisma.place.findUnique({ where: { path }, select: { id: true, content: true } });
    if (!row) {
      report.push(`place ${path}: NOT FOUND`);
      continue;
    }
    const cur = (row.content ?? {}) as Record<string, unknown>;
    const next = additiveMerge(cur, extra);
    backup[`place:${path}`] = cur;
    report.push(`place ${path}: +${size(next) - size(cur)} items`);
    writes.push(() => prisma.place.update({ where: { id: row.id }, data: { content: next as Prisma.InputJsonValue } }));
  }

  // Public pages are static: refresh only the place pages written here (an
  // on-demand rebuild of 36 paths, not a timed revalidate), so the copy shows
  // without a redeploy.
  if (!dry) {
    for (const w of writes) await w();
    for (const path of Object.keys(KASHMIR_PLACES_BATCH_2)) revalidatePath(placeUrl("kashmir", path));
  }
  return NextResponse.json({ dry, report, written: dry ? 0 : writes.length, backup: dry ? undefined : backup });
}
