export const SITE_NAME = "WanderLeads";

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
  "Compare verified tour packages across India and abroad, get quotes from trusted travel agents, and plan your next holiday.";
