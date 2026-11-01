export const SITE_NAME = "Tavel Package";

function normalizeSiteUrl(value: string | undefined): string {
  if (!value) return "http://localhost:3000";
  // A bare domain (e.g. "example.vercel.app", no protocol) is a common env
  // var mistake — new URL() throws on it, which would otherwise take down
  // the whole build.
  const withProtocol = /^https?:\/\//.test(value) ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, "");
}

export const SITE_URL = normalizeSiteUrl(process.env.SITE_URL);
export const SITE_DESCRIPTION =
  "Tell us your trip once and get up to 3 customised quotes from verified local travel agents, for every state in India and top international destinations.";
