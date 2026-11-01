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

// Facts about the business, used in Organization schema and the About/Contact
// pages. Only real, owner-confirmed details go here: an empty value is left
// out of the page and the schema rather than filled with a guess.
export const ORG = {
  legalName: "",
  email: "",
  phone: "", // E.164, e.g. "+919876543210"
  address: null as null | {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  },
  foundingDate: "", // YYYY or YYYY-MM-DD
  sameAs: [] as string[], // official social profiles
};

export const EDITORIAL_TEAM = `${SITE_NAME} Editorial Team`;
