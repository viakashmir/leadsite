import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { SITE_URL } from "@/lib/site";
import { THEMES } from "@/data/locations";
import { guideUrl, themeUrl, tourPackagesUrl } from "@/lib/urls";
import { readContent } from "@/lib/locations";

export const revalidate = 3600;

// Only pages whose content is READY are listed; DRAFT location pages render but
// are noindex (see robotsFor in lib/locations.ts), so they stay out of here too.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [destinations, cities, places, packages] = await Promise.all([
    prisma.destination.findMany({
      where: { contentStatus: "READY" },
      select: {
        slug: true,
        kind: true,
        updatedAt: true,
        content: true,
        _count: { select: { places: true } },
      },
    }),
    prisma.city.findMany({
      where: { contentStatus: "READY" },
      select: { slug: true, destination: { select: { slug: true } } },
    }),
    prisma.place.findMany({
      where: { contentStatus: "READY" },
      select: { path: true, destination: { select: { slug: true } } },
    }),
    prisma.package.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    }),
  ]);

  const url = (path: string) => `${SITE_URL}${path}`;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), changeFrequency: "daily", priority: 1 },
    { url: url(tourPackagesUrl()), changeFrequency: "daily", priority: 0.9 },
    { url: url(tourPackagesUrl("india")), changeFrequency: "daily", priority: 0.9 },
    { url: url(tourPackagesUrl("international")), changeFrequency: "daily", priority: 0.9 },
    ...THEMES.map((t) => ({ url: url(themeUrl(t.prefix)), changeFrequency: "weekly" as const, priority: 0.7 })),
    { url: url("/leads"), changeFrequency: "hourly", priority: 0.6 },
    { url: url("/agents"), changeFrequency: "daily", priority: 0.5 },
    { url: url("/agent/register"), changeFrequency: "monthly", priority: 0.5 },
  ];

  // Guide sections are listed only when they have content (mirrors guideMetadata).
  const guideSections = (d: (typeof destinations)[number]) => {
    const c = readContent(d.content);
    return [
      d._count.places > 0 && "places-to-visit",
      c.bestTimeToVisit && "best-time-to-visit",
      (c.howToReach?.air || c.howToReach?.rail || c.howToReach?.road) && "how-to-reach",
      c.thingsToKnow?.length && "travel-guide-tips",
    ].filter((x): x is string => typeof x === "string");
  };

  const destinationRoutes: MetadataRoute.Sitemap = destinations.flatMap((d) => [
    { url: url(tourPackagesUrl(d.slug)), lastModified: d.updatedAt, changeFrequency: "weekly" as const, priority: 0.9 },
    ...(d.kind === "CIRCUIT"
      ? []
      : [
          { url: url(guideUrl(d.slug)), lastModified: d.updatedAt, changeFrequency: "monthly" as const, priority: 0.7 },
          ...guideSections(d).map((section) => ({
            url: url(guideUrl(d.slug, section)),
            lastModified: d.updatedAt,
            changeFrequency: "monthly" as const,
            priority: 0.6,
          })),
        ]),
  ]);

  const cityRoutes: MetadataRoute.Sitemap = cities.flatMap((c) => [
    { url: url(tourPackagesUrl(c.slug)), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: url(guideUrl(c.destination.slug, c.slug)), changeFrequency: "monthly" as const, priority: 0.6 },
  ]);

  const placeRoutes: MetadataRoute.Sitemap = places.map((p) => ({
    url: url(guideUrl(p.destination.slug, p.path)),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const packageRoutes: MetadataRoute.Sitemap = packages.map((p) => ({
    url: url(`/packages/${p.slug}`),
    lastModified: p.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...destinationRoutes, ...cityRoutes, ...placeRoutes, ...packageRoutes];
}
