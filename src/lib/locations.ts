import type { GUIDE_SECTIONS } from "@/data/locations";
import { cache } from "react";
import { prisma } from "@/lib/prisma";
import { ZONES, type Zone } from "@/data/locations";
import { routesTo } from "@/data/routes";
import type { Prisma } from "@/generated/prisma/client";

const destinationInclude = {
  cities: { orderBy: [{ tier: "asc" }, { sortOrder: "asc" }] },
  places: { where: { cityId: null }, orderBy: { sortOrder: "asc" } },
  circuitStops: {
    orderBy: { sortOrder: "asc" },
    include: { city: { include: { destination: true } }, destination: true },
  },
} satisfies Prisma.DestinationInclude;

export type DestinationWithTree = Prisma.DestinationGetPayload<{
  include: typeof destinationInclude;
}>;

const cityInclude = {
  destination: true,
  places: { orderBy: [{ kind: "asc" }, { sortOrder: "asc" }] },
} satisfies Prisma.CityInclude;

export type CityWithPlaces = Prisma.CityGetPayload<{ include: typeof cityInclude }>;

export type Target =
  | { type: "destination"; destination: DestinationWithTree }
  | { type: "circuit"; destination: DestinationWithTree }
  | { type: "city"; destination: DestinationWithTree; city: CityWithPlaces };

export const getDestination = cache(async (slug: string) =>
  prisma.destination.findUnique({ where: { slug }, include: destinationInclude }),
);

export const getCity = cache(async (slug: string) =>
  prisma.city.findUnique({ where: { slug }, include: cityInclude }),
);

// Resolves a /tour-packages/{slug} or /{theme}/{slug} target.
export const resolveTarget = cache(async (slug: string): Promise<Target | null> => {
  const destination = await getDestination(slug);
  if (destination) {
    return destination.kind === "CIRCUIT"
      ? { type: "circuit", destination }
      : { type: "destination", destination };
  }
  const city = await getCity(slug);
  if (!city) return null;
  const parent = await getDestination(city.destination.slug);
  return parent ? { type: "city", destination: parent, city } : null;
});

export function targetName(t: Target) {
  return t.type === "city" ? t.city.name : t.destination.name;
}

export function targetSlug(t: Target) {
  return t.type === "city" ? t.city.slug : t.destination.slug;
}

// Destination-or-city ids whose packages belong on this target's page.
function packageScope(t: Target): Prisma.PackageWhereInput {
  if (t.type === "city") return { cityId: t.city.id };
  if (t.type === "destination") return { destinationId: t.destination.id };
  const stops = t.destination.circuitStops;
  return {
    OR: [
      { destinationId: t.destination.id },
      { cityId: { in: stops.flatMap((s) => (s.cityId ? [s.cityId] : [])) } },
      { destinationId: { in: stops.flatMap((s) => (s.destinationId ? [s.destinationId] : [])) } },
    ],
  };
}

export async function getPackagesFor(t: Target, opts: { themeTag?: string; take?: number } = {}) {
  return prisma.package.findMany({
    where: {
      published: true,
      ...packageScope(t),
      ...(opts.themeTag ? { theme: { contains: opts.themeTag, mode: "insensitive" } } : {}),
    },
    include: { destination: true, city: true },
    orderBy: { createdAt: "desc" },
    take: opts.take ?? 24,
  });
}

// Published packages in scope per theme tag (case-insensitive substring match,
// same as getPackagesFor's themeTag filter), for deciding which theme slices
// are real pages worth linking.
export async function getThemeCounts(t: Target, tags: readonly string[]) {
  const rows = await prisma.package.findMany({
    where: { published: true, ...packageScope(t) },
    select: { theme: true },
  });
  const counts = new Map<string, number>();
  for (const tag of tags)
    counts.set(tag, rows.filter((r) => r.theme?.toLowerCase().includes(tag.toLowerCase())).length);
  return counts;
}

// Destination and circuit slugs whose theme slice (/{theme}/{slug}) is an
// indexable page: READY, and its own slice copy or MIN 3 themed packages
// (mirrors packagesPageMetadata). Theme indexes link only these.
export async function getThemeSliceSlugs(theme: { tag: string; prefix: string }) {
  const [dests, pkgs] = await Promise.all([
    prisma.destination.findMany({
      where: { contentStatus: "READY" },
      select: { id: true, slug: true, kind: true, content: true, circuitStops: { select: { cityId: true, destinationId: true } } },
    }),
    prisma.package.findMany({
      where: { published: true, theme: { contains: theme.tag, mode: "insensitive" } },
      select: { destinationId: true, cityId: true },
    }),
  ]);
  const slugs = new Set<string>();
  for (const d of dests) {
    if (readContent(d.content).packages?.themes?.[theme.prefix]?.intro) {
      slugs.add(d.slug);
      continue;
    }
    const destIds = new Set([d.id]);
    const cityIds = new Set<string>();
    if (d.kind === "CIRCUIT")
      for (const s of d.circuitStops) {
        if (s.destinationId) destIds.add(s.destinationId);
        if (s.cityId) cityIds.add(s.cityId);
      }
    const n = pkgs.filter((p) => destIds.has(p.destinationId) || (p.cityId !== null && cityIds.has(p.cityId))).length;
    if (n >= 3) slugs.add(d.slug);
  }
  return slugs;
}

// Titles and links of the published packages in scope that the main grid
// (newest 24) does not show, so every package page has an internal link.
export async function getMorePackageLinks(t: Target, opts: { themeTag?: string; skip?: number } = {}) {
  return prisma.package.findMany({
    where: {
      published: true,
      ...packageScope(t),
      ...(opts.themeTag ? { theme: { contains: opts.themeTag, mode: "insensitive" } } : {}),
    },
    select: { slug: true, title: true },
    orderBy: { createdAt: "desc" },
    skip: opts.skip ?? 24,
  });
}

// Live price guide for a packages page, from every published package in
// scope (not just the cards shown). Prices are per person, as listed.
export type PriceGuide = {
  count: number;
  from: number;
  median: number;
  byNights: { nights: number; count: number; from: number; median: number }[];
  byTier: { tier: "Budget" | "Mid-Range" | "Premium" | "Luxury"; count: number; from: number; median: number }[];
};

const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
};
const stats = (xs: number[]) => ({ count: xs.length, from: Math.min(...xs), median: median(xs) });

export async function getPriceGuide(t: Target, opts: { themeTag?: string } = {}): Promise<PriceGuide | null> {
  const rows = await prisma.package.findMany({
    where: {
      published: true,
      price: { gt: 0 },
      ...packageScope(t),
      ...(opts.themeTag ? { theme: { contains: opts.themeTag, mode: "insensitive" } } : {}),
    },
    select: { price: true, durationNights: true, theme: true },
  });
  if (rows.length < 3) return null; // too few to say anything useful
  const nights = [...new Set(rows.map((r) => r.durationNights))].sort((a, b) => a - b);
  const tierOf = (theme: string) => {
    const tags = theme.split(",").map((x) => x.trim().toLowerCase());
    // "Luxury" means 5-star and "Premium" 4-star; kept apart so a 4-star
    // price is never shown as a 5-star one.
    if (tags.includes("luxury")) return "Luxury" as const;
    if (tags.includes("premium")) return "Premium" as const;
    if (tags.includes("budget")) return "Budget" as const;
    if (tags.includes("mid-range")) return "Mid-Range" as const;
    return null;
  };
  const tiers = (["Budget", "Mid-Range", "Premium", "Luxury"] as const)
    .map((tier) => ({ tier, prices: rows.filter((r) => tierOf(r.theme) === tier).map((r) => r.price) }))
    .filter((x) => x.prices.length > 0)
    .map((x) => ({ tier: x.tier, ...stats(x.prices) }));
  return {
    ...stats(rows.map((r) => r.price)),
    byNights: nights
      .map((n) => ({ nights: n, ...stats(rows.filter((r) => r.durationNights === n).map((r) => r.price)) }))
      .filter((x) => x.count > 0),
    byTier: tiers,
  };
}

// Zone -> destinations, for menus and index pages. Circuits excluded.
export const getDestinationsByZone = cache(async () => {
  const all = await prisma.destination.findMany({
    where: { kind: { not: "CIRCUIT" } },
    orderBy: [{ tier: "asc" }, { sortOrder: "asc" }],
    select: { slug: true, name: true, zone: true, tier: true, premium: true, isInternational: true },
  });
  return (Object.keys(ZONES) as Zone[])
    .map((zone) => ({
      zone,
      ...ZONES[zone],
      destinations: all.filter((d) => d.zone === zone),
    }))
    .filter((z) => z.destinations.length > 0);
});

export const getCircuits = cache(async () =>
  prisma.destination.findMany({
    where: { kind: "CIRCUIT" },
    orderBy: [{ tier: "asc" }, { sortOrder: "asc" }],
    select: { slug: true, name: true, tier: true, isInternational: true },
  }),
);

// Options for the enquiry form's destination picker.
export const getEnquiryOptions = cache(async () => {
  const rows = await prisma.destination.findMany({
    orderBy: [{ isInternational: "asc" }, { name: "asc" }],
    where: { kind: { not: "CIRCUIT" } },
    select: {
      id: true,
      slug: true,
      name: true,
      // Most-visited places first (tier, then editorial order), so the quote
      // form's place chips lead with Srinagar, Gulmarg, Pahalgam...
      cities: { orderBy: [{ tier: "asc" }, { sortOrder: "asc" }, { name: "asc" }], select: { id: true, slug: true, name: true } },
    },
  });
  return rows;
});

// The quote form only needs ids and names. Passing whole destination rows
// (summaries, FAQs, page content) to it puts hundreds of KB into every page.
export function toEnquiryOptions(
  rows: { id: string; slug: string; name: string; cities: { id: string; slug: string; name: string }[] }[],
) {
  return rows.map((d) => ({
    id: d.id,
    slug: d.slug,
    name: d.name,
    cities: d.cities.map((c) => ({ id: c.id, slug: c.slug, name: c.name })),
  }));
}

// Pages stay out of the index until their copy has been written and reviewed.
export function robotsFor(status: "DRAFT" | "READY") {
  return status === "READY" ? undefined : { index: false, follow: true };
}

// Shape of Destination.content / City.content / Place.content (JSON).
// Written in src/data/content/*.ts and loaded by prisma/seed-content.ts.
export type Faq = { q: string; a: string };

// A free-standing H2 block, e.g. "Famous food in Manali" or "Is Rohtang Pass open?".
export type ContentBlock = { heading: string; body?: string; items?: string[] };

// One month of a best-time guide; rendered as an H3 like "Leh in July: weather and temperature".
export type MonthGuide = {
  month: string; // "July"
  tempC?: string; // "Day 25 to 30°C, night 10 to 15°C"
  weather: string; // what the month is like
  goodFor?: string; // who it suits / what is open
};

// One route of a how-to-reach guide; rendered as an H3 like "Delhi to Manali distance".
export type RouteGuide = {
  from: string;
  to: string;
  distanceKm: string; // "about 540 km by road"
  time?: string; // "12 to 14 hours"
  how: string; // route, transport options, notes
};

// Copy that belongs to one guide section page (/{dest}-tourism/{city}/{section}).
export type SectionContent = { intro?: string; blocks?: ContentBlock[]; faqs?: Faq[] };

// A sample day-by-day plan; rendered as an H3 like "5-day Kasol itinerary".
export type Itinerary = { title: string; days: string[] };

// Copy for /tour-packages/{slug} and its theme/origin slices. A slice with its
// own copy here is a distinct page and becomes indexable.
export type PackagesContent = SectionContent & {
  itineraries?: Itinerary[];
  fromOrigins?: Record<string, SectionContent & { itineraries?: Itinerary[] }>; // key: origin slug, e.g. "delhi"
  themes?: Record<string, SectionContent>; // key: theme prefix, e.g. "honeymoon-packages"
};

export type GuideContent = {
  intro?: string; // paragraphs separated by a blank line; first one answers "what is X like"
  highlights?: string[]; // why go
  idealDuration?: string; // e.g. "5 to 7 days"
  bestMonths?: string; // short form for quick facts, e.g. "March to October"
  gateway?: string; // main arrival point, e.g. "Srinagar airport (SXR)"
  bestTimeToVisit?: string;
  seasons?: { name: string; months: string; note: string }[];
  howToReach?: { air?: string; rail?: string; road?: string; local?: string };
  thingsToKnow?: string[];
  faqs?: Faq[];
  facts?: { label: string; value: string }[]; // quick facts (altitude, timings, permit...)
  blocks?: ContentBlock[]; // extra H2 sections on the overview/place page
  months?: MonthGuide[]; // month-by-month weather (best-time page, or place page)
  monthsWhere?: string; // name used in month headings when searchers use another one, e.g. "Leh Ladakh"
  routes?: RouteGuide[]; // distances and routes (how-to-reach page, or place page)
  packages?: PackagesContent;
  sections?: Partial<Record<(typeof GUIDE_SECTIONS)[number]["slug"], SectionContent>>;
  packagesDescription?: string; // meta description for /tour-packages/{slug}
  guideDescription?: string; // meta description for /{slug}-tourism
};

export function readContent(value: Prisma.JsonValue | null | undefined): GuideContent {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as GuideContent)
    : {};
}

// Which guide sections of a destination or city have something real to show.
// Tabs, links, the sitemap and routing all use this, so no visitor or crawler
// is ever sent to an empty "being written" page.
export async function availableSections(
  destinationId: string,
  cityId: string | null,
  content: Prisma.JsonValue | null | undefined,
): Promise<Set<(typeof GUIDE_SECTIONS)[number]["slug"]>> {
  const c = readContent(content);
  const intro = (s: keyof NonNullable<GuideContent["sections"]>) => Boolean(c.sections?.[s]?.intro);
  const where = cityId ? { cityId } : { destinationId };
  const [places, activities, city] = await Promise.all([
    prisma.place.count({ where: { ...where, kind: "PLACE" } }),
    prisma.place.count({ where: { ...where, kind: "ACTIVITY" } }),
    cityId ? prisma.city.findUnique({ where: { id: cityId }, select: { slug: true } }) : null,
  ]);
  // A city with "Delhi to X" route pages always gets the How to Reach page
  // that lists them (their breadcrumbs link to it).
  const hasRoutePages = Boolean(city && routesTo(city.slug).length > 0);
  const has = {
    "places-to-visit": places > 0 || intro("places-to-visit"),
    "things-to-do": activities > 0 || intro("things-to-do"),
    "best-time-to-visit": Boolean(c.bestTimeToVisit || c.months?.length || intro("best-time-to-visit")),
    "how-to-reach": Boolean(
      c.howToReach?.air || c.howToReach?.rail || c.howToReach?.road || c.routes?.length || intro("how-to-reach") || hasRoutePages,
    ),
    "travel-guide-tips": Boolean(c.thingsToKnow?.length || intro("travel-guide-tips")),
    "local-food": intro("local-food"),
    "culture-and-heritage": intro("culture-and-heritage"),
  } as const;
  return new Set((Object.keys(has) as (keyof typeof has)[]).filter((k) => has[k]));
}
