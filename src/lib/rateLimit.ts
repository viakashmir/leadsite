import { NextRequest, NextResponse } from "next/server";

// Fixed-window, in-memory rate limiter. Each server instance keeps its own
// counters, so on serverless this is a per-instance brake rather than a
// global quota — enough to stop naive password guessing and form flooding.
// Put a shared store (e.g. Redis/Upstash) behind this for a hard global limit.
type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

export function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

/** Returns true when the call is allowed, false when the limit is hit. */
export function hit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  if (buckets.size > 10_000) {
    for (const [k, b] of buckets) if (b.resetAt <= now) buckets.delete(k);
  }
  const b = buckets.get(key);
  if (!b || b.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  b.count++;
  return b.count <= limit;
}

export function tooManyRequests() {
  return NextResponse.json(
    { error: "Too many attempts. Please wait a few minutes and try again." },
    { status: 429, headers: { "Retry-After": "600" } },
  );
}
