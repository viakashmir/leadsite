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
    include: { destination: true },
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
    select: {
      id: true,
      name: true,
      cities: { orderBy: { name: "asc" }, select: { id: true, name: true } },
    },
  });
  return rows;
});

// Pages stay out of the index until their copy has been written and reviewed.
export function robotsFor(status: "DRAFT" | "READY") {
  return status === "READY" ? undefined : { index: false, follow: true };
}

export type GuideContent = {
  intro?: string;
  highlights?: string[];
  bestTimeToVisit?: string;
  howToReach?: { air?: string; rail?: string; road?: string; local?: string };
  thingsToKnow?: string[];
  faqs?: { q: string; a: string }[];
};

export function readContent(value: Prisma.JsonValue | null | undefined): GuideContent {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as GuideContent)
    : {};
}
