// One place to read the JWT signing secret. In production a missing or
// short secret is a hard error: falling back to a known string would let
// anyone forge admin and agent session cookies.
const DEV_FALLBACK = "dev-secret-change-in-production-please";

export function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (secret && secret.length >= 32) return secret;
  if (process.env.NODE_ENV === "production") {
    throw new Error("JWT_SECRET must be set to a random string of at least 32 characters in production.");
  }
  return secret || DEV_FALLBACK;
}

// Agent and admin tokens are signed with the same secret, so each carries an
// audience and is only accepted by the matching verifier.
export const AGENT_AUDIENCE = "agent";
export const ADMIN_AUDIENCE = "admin";
