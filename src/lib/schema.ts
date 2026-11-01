// Shared schema.org graph pieces. Organization and WebSite are emitted once per
// page by the site layout; page-level nodes point at them by @id so Google and
// AI crawlers see one consistent publisher behind every guide and package page.
import { EDITORIAL_TEAM, ORG, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_URL = `${SITE_URL}/logo.png`;

const ref = (id: string) => ({ "@id": id });

export function organizationSchema() {
  return {
    "@type": "TravelAgency",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
    image: LOGO_URL,
    areaServed: "India",
    knowsAbout: ["India tour packages", "International holiday packages", "Honeymoon packages", "Travel planning"],
    ...(ORG.legalName && { legalName: ORG.legalName }),
    ...(ORG.email && { email: ORG.email }),
    ...(ORG.phone && { telephone: ORG.phone }),
    ...(ORG.foundingDate && { foundingDate: ORG.foundingDate }),
    ...(ORG.address && { address: { "@type": "PostalAddress", ...ORG.address } }),
    ...(ORG.sameAs.length > 0 && { sameAs: ORG.sameAs }),
    ...((ORG.email || ORG.phone) && {
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
        ...(ORG.email && { email: ORG.email }),
        ...(ORG.phone && { telephone: ORG.phone }),
      },
    }),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-IN",
    publisher: ref(ORG_ID),
  };
}

export function siteGraph() {
  return { "@context": "https://schema.org", "@graph": [organizationSchema(), websiteSchema()] };
}

export function editorialAuthor() {
  return { "@type": "Organization", name: EDITORIAL_TEAM, url: `${SITE_URL}/editorial-policy`, parentOrganization: ref(ORG_ID) };
}

// The page node: an Article for guides (written, dated, attributed content),
// a CollectionPage for package listings, a plain WebPage otherwise.
export function webPageSchema(opts: {
  path: string;
  name: string;
  description?: string;
  type?: "WebPage" | "Article" | "CollectionPage" | "AboutPage" | "ContactPage";
  dateModified?: Date;
  datePublished?: Date;
  about?: Record<string, unknown>;
  image?: string;
  breadcrumb?: boolean;
}) {
  const url = `${SITE_URL}${opts.path === "/" ? "" : opts.path}`;
  const type = opts.type ?? "WebPage";
  const isArticle = type === "Article";
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    ...(isArticle && { headline: opts.name.slice(0, 110) }),
    ...(opts.description && { description: opts.description }),
    inLanguage: "en-IN",
    isPartOf: ref(WEBSITE_ID),
    publisher: ref(ORG_ID),
    ...(isArticle && { author: editorialAuthor(), mainEntityOfPage: url }),
    ...(opts.datePublished && { datePublished: opts.datePublished.toISOString() }),
    ...(opts.dateModified && { dateModified: opts.dateModified.toISOString() }),
    ...(opts.about && { about: opts.about }),
    ...(opts.image && { image: opts.image }),
    ...(opts.breadcrumb !== false && { breadcrumb: ref(`${url}#breadcrumb`) }),
  };
}
