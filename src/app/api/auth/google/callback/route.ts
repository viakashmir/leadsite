import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { GOOGLE_STATE_COOKIE, exchangeGoogleCode, googleRedirectUri, isGoogleConfigured } from "@/lib/googleOAuth";
import { landingFor, resolveGoogleUser, startSession } from "@/lib/signIn";
import { signaturesMatch } from "@/lib/paymentFulfillment";

// The browser arrives here from Google (a cross-site navigation). The final
// hop is a same-site page redirect rather than an HTTP redirect, so the
// SameSite=Strict admin cookie is sent on the very next request.
function continueTo(path: string) {
  const safe = path.replace(/[<>"'&]/g, "");
  return new NextResponse(
    `<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=${safe}"><title>Signing in…</title><p style="font-family:sans-serif">Signing you in… <a href="${safe}">Continue</a></p>`,
    { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } },
  );
}

function fail(code: string) {
  return continueTo(`/login?error=${code}`);
}

export async function GET(req: NextRequest) {
  if (!isGoogleConfigured()) return fail("google_unavailable");

  const store = await cookies();
  const raw = store.get(GOOGLE_STATE_COOKIE)?.value;
  store.delete({ name: GOOGLE_STATE_COOKIE, path: "/api/auth/google" });

  const params = req.nextUrl.searchParams;
  if (params.get("error")) return fail("google_cancelled");

  let saved: { state?: string; nonce?: string; next?: string } = {};
  try {
    saved = raw ? JSON.parse(raw) : {};
  } catch {
    saved = {};
  }
  const state = params.get("state") ?? "";
  const code = params.get("code") ?? "";
  if (!saved.state || !saved.nonce || !code || !signaturesMatch(saved.state, state)) {
    return fail("google_state");
  }

  let profile: { email: string; name: string };
  try {
    profile = await exchangeGoogleCode({ code, redirectUri: googleRedirectUri(req.nextUrl.origin), nonce: saved.nonce });
  } catch (err) {
    console.error("Google sign-in failed:", err instanceof Error ? err.message : err);
    return fail("google_failed");
  }

  const result = await resolveGoogleUser(profile);
  if (result.suspended) return continueTo("/login?suspended=1");

  await startSession(result.role, result.user);
  return continueTo(landingFor(result.role, saved.next, { needsOnboarding: result.needsOnboarding }));
}
