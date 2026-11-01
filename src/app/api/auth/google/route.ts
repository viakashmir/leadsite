import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { GOOGLE_STATE_COOKIE, googleAuthUrl, googleRedirectUri, isGoogleConfigured } from "@/lib/googleOAuth";
import { safeNextPath } from "@/lib/safeRedirect";
import { clientIp, hit } from "@/lib/rateLimit";

// GET /api/auth/google?next=/agent/dashboard/leads  → Google's account chooser.
export async function GET(req: NextRequest) {
  if (!isGoogleConfigured()) {
    return NextResponse.redirect(new URL("/login?error=google_unavailable", req.url));
  }
  if (!hit(`google-start:${clientIp(req)}`, 30, 10 * 60_000)) {
    return NextResponse.redirect(new URL("/login?error=too_many", req.url));
  }

  const state = crypto.randomBytes(24).toString("hex");
  const nonce = crypto.randomBytes(24).toString("hex");
  const next = safeNextPath(req.nextUrl.searchParams.get("next"), "");

  const res = NextResponse.redirect(
    googleAuthUrl({ redirectUri: googleRedirectUri(req.nextUrl.origin), state, nonce }),
  );
  // Ties the callback to this browser (CSRF) and carries where to go after.
  res.cookies.set(GOOGLE_STATE_COOKIE, JSON.stringify({ state, nonce, next }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/api/auth/google",
    maxAge: 10 * 60,
  });
  return res;
}
