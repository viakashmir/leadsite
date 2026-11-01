import type { GUIDE_SECTIONS } from "@/data/locations";
import { cache } from "react";
import { prisma } from "@/lib/prisma";
import { ZONES, type Zone } from "@/data/locations";
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
      cities: { orderBy: { name: "asc" }, select: { id: true, slug: true, name: true } },
    },
  });
  return rows;
});

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
