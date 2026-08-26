import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [destinations, packages, cities] = await Promise.all([
    prisma.destination.findMany({ select: { slug: true, updatedAt: true } }),
    prisma.package.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    }),
    prisma.city.findMany({ select: { slug: true, destination: { select: { slug: true } } } }),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/destinations`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/packages`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/leads`, changeFrequency: "hourly", priority: 0.8 },
    { url: `${SITE_URL}/agents`, changeFrequency: "daily", priority: 0.6 },
    { url: `${SITE_URL}/agent/register`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const destinationRoutes: MetadataRoute.Sitemap = destinations.flatMap((d) => [
    {
      url: `${SITE_URL}/destinations/${d.slug}`,
      lastModified: d.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/leads/${d.slug}`,
      changeFrequency: "hourly" as const,
      priority: 0.7,
    },
  ]);

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${SITE_URL}/leads/${c.destination.slug}/${c.slug}`,
    changeFrequency: "hourly" as const,
    priority: 0.6,
  }));

  const packageRoutes: MetadataRoute.Sitemap = packages.map((p) => ({
    url: `${SITE_URL}/packages/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...destinationRoutes, ...cityRoutes, ...packageRoutes];
}
