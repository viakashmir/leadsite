// ONE-TIME maintenance endpoint (2026-11-11, third run: city, place, theme, origin and Ladakh depth; 2026-11-13 adds kashmir-depth-2.ts). Adds the depth-pass copy in
// src/data/content/kashmir-depth.ts (Kashmir and Ladakh destinations, cities
// and places) to the live database, additively (src/lib/content-merge.ts:
// new list items only, objects merged key by key, nothing removed or
// rewritten, so admin edits are kept). Remove after use.
//
// POST with header x-push-token (checked against a SHA-256 hash). ?dry=1
// reports without writing. A real run returns the content it replaced.
import { createHash, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import type { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { additiveMerge, mergeEach } from "@/lib/content-merge";
import { KASHMIR_DEPTH_CITIES as D1_CITIES, KASHMIR_DEPTH_DESTINATIONS as D1_DESTINATIONS, KASHMIR_DEPTH_PLACES as D1_PLACES } from "@/data/content/kashmir-depth";
import { KASHMIR_DEPTH_2_CITIES, KASHMIR_DEPTH_2_DESTINATIONS, KASHMIR_DEPTH_2_PLACES } from "@/data/content/kashmir-depth-2";

// Both depth passes (2026-11-11 and 2026-11-13), merged the same way the site
// build merges them (data/content/index.ts).
const KASHMIR_DEPTH_DESTINATIONS = mergeEach(D1_DESTINATIONS, KASHMIR_DEPTH_2_DESTINATIONS);
const KASHMIR_DEPTH_CITIES = mergeEach(D1_CITIES, KASHMIR_DEPTH_2_CITIES);
const KASHMIR_DEPTH_PLACES = mergeEach(D1_PLACES, KASHMIR_DEPTH_2_PLACES);

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const TOKEN_SHA256 = "a35d43d7ef4324dc03969137a0d04dc0f73de0216417a7b1fe1b4a3d960f9579";

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

  for (const [slug, extra] of Object.entries(KASHMIR_DEPTH_DESTINATIONS)) {
    const row = await prisma.destination.findUnique({ where: { slug }, select: { id: true, content: true } });
    if (!row) { report.push(`destination ${slug}: NOT FOUND`); continue; }
    const cur = (row.content ?? {}) as Record<string, unknown>;
    const next = additiveMerge(cur, extra);
    backup[`destination:${slug}`] = cur;
    const pk = (cur.packages ?? {}) as { themes?: Record<string, unknown>; fromOrigins?: Record<string, unknown> };
    const ex = (extra as { packages?: { themes?: Record<string, unknown>; fromOrigins?: Record<string, unknown> } }).packages ?? {};
    const fresh = [
      ...Object.keys(ex.themes ?? {}).filter((k) => !pk.themes?.[k]).map((k) => `theme:${k}`),
      ...Object.keys(ex.fromOrigins ?? {}).filter((k) => !pk.fromOrigins?.[k]).map((k) => `origin:${k}`),
    ];
    report.push(`destination ${slug}: +${size(next) - size(cur)} items${fresh.length ? ` NEW KEYS ${fresh.join(",")}` : ""}`);
    writes.push(() => prisma.destination.update({ where: { id: row.id }, data: { content: next as Prisma.InputJsonValue } }));
  }
  for (const [slug, extra] of Object.entries(KASHMIR_DEPTH_CITIES)) {
    const row = await prisma.city.findUnique({ where: { slug }, select: { id: true, content: true } });
    if (!row) { report.push(`city ${slug}: NOT FOUND`); continue; }
    const cur = (row.content ?? {}) as Record<string, unknown>;
    const next = additiveMerge(cur, extra);
    backup[`city:${slug}`] = cur;
    report.push(`city ${slug}: +${size(next) - size(cur)} items`);
    writes.push(() => prisma.city.update({ where: { id: row.id }, data: { content: next as Prisma.InputJsonValue } }));
  }
  for (const [path, extra] of Object.entries(KASHMIR_DEPTH_PLACES)) {
    const row = await prisma.place.findUnique({ where: { path }, select: { id: true, content: true } });
    if (!row) { report.push(`place ${path}: NOT FOUND`); continue; }
    const cur = (row.content ?? {}) as Record<string, unknown>;
    const next = additiveMerge(cur, extra);
    backup[`place:${path}`] = cur;
    report.push(`place ${path}: +${size(next) - size(cur)} items`);
    writes.push(() => prisma.place.update({ where: { id: row.id }, data: { content: next as Prisma.InputJsonValue } }));
  }

  if (!dry) for (const w of writes) await w();
  return NextResponse.json({ dry, report, written: dry ? 0 : writes.length, backup: dry ? undefined : backup });
}
