import jwt from "jsonwebtoken";
import { SITE_URL } from "@/lib/site";

// "Continue with Google" using the OAuth 2.0 authorization-code flow, with no
// extra library. Needs GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.
//
// Register this redirect URI on the OAuth client in Google Cloud Console:
//   {SITE_URL}/api/auth/google/callback

const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

export const GOOGLE_STATE_COOKIE = "google_oauth_state";

export function isGoogleConfigured(): boolean {
  return Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
}

/** Uses SITE_URL in production so the URI always matches the one registered with Google. */
export function googleRedirectUri(requestOrigin: string): string {
  const base = SITE_URL.startsWith("http://localhost") ? requestOrigin : SITE_URL;
  return `${base}/api/auth/google/callback`;
}

export function googleAuthUrl(opts: { redirectUri: string; state: string; nonce: string }): string {
  const url = new URL(AUTH_URL);
  url.searchParams.set("client_id", process.env.GOOGLE_CLIENT_ID!);
  url.searchParams.set("redirect_uri", opts.redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", "openid email profile");
  url.searchParams.set("state", opts.state);
  url.searchParams.set("nonce", opts.nonce);
  url.searchParams.set("prompt", "select_account");
  return url.toString();
}

type IdTokenClaims = {
  iss?: string;
  aud?: string;
  exp?: number;
  email?: string;
  email_verified?: boolean | string;
  name?: string;
  nonce?: string;
};

/**
 * Exchanges the code for tokens. The ID token comes straight from Google's
 * token endpoint over TLS, authenticated with our client secret, so (per
 * OpenID Connect Core §3.1.3.7) its claims are checked rather than its
 * signature: issuer, audience, expiry, nonce and a verified email.
 */
export async function exchangeGoogleCode(opts: { code: string; redirectUri: string; nonce: string }) {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code: opts.code,
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      redirect_uri: opts.redirectUri,
      grant_type: "authorization_code",
    }),
  });
  if (!res.ok) throw new Error(`Google token exchange failed (${res.status})`);
  const body = (await res.json()) as { id_token?: string };
  if (!body.id_token) throw new Error("Google did not return an ID token");

  const claims = jwt.decode(body.id_token) as IdTokenClaims | null;
  if (!claims) throw new Error("Unreadable Google ID token");
  if (claims.iss !== "https://accounts.google.com" && claims.iss !== "accounts.google.com") {
    throw new Error("Wrong token issuer");
  }
  if (claims.aud !== process.env.GOOGLE_CLIENT_ID) throw new Error("Token was issued for another app");
  if (!claims.exp || claims.exp * 1000 < Date.now()) throw new Error("Token expired");
  if (claims.nonce !== opts.nonce) throw new Error("Nonce mismatch");
  if (!claims.email || !(claims.email_verified === true || claims.email_verified === "true")) {
    throw new Error("Google account email is not verified");
  }
  return { email: claims.email.toLowerCase(), name: (claims.name ?? "").slice(0, 100) };
}
