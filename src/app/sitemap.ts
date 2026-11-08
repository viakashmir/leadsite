import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { isPhoto, packagePhoto } from "@/lib/media";
import { allRoutes } from "@/data/routes";
import { durationsFor } from "@/lib/durations";
import { ORIGIN_CITIES, THEMES } from "@/data/locations";
import { fromToUrl, guideUrl, themeUrl, tourPackagesUrl } from "@/lib/urls";
import { readContent } from "@/lib/locations";
import { BLOG_PATH, allPosts, postUrl } from "@/lib/blog";

export const revalidate = 86400; // daily: each rebuild is a billed ISR write

// Only pages whose content is READY are listed; DRAFT location pages render but
// are noindex (see robotsFor in lib/locations.ts), so they stay out of here too.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [destinations, cities, places, packages, leadDestinations, leadCities] = await Promise.all([
    prisma.destination.findMany({
      where: { contentStatus: "READY" },
      select: {
        slug: true,
        kind: true,
        updatedAt: true,
        heroImage: true,
        content: true,
        _count: { select: { places: true } },
      },
    }),
    prisma.city.findMany({
      where: { contentStatus: "READY" },
      select: {
        slug: true,
        updatedAt: true,
        content: true,
        heroImage: true,
        destination: { select: { slug: true } },
        _count: { select: { places: true } },
      },
    }),
    prisma.place.findMany({
      where: { contentStatus: "READY" },
      select: { path: true, updatedAt: true, heroImage: true, destination: { select: { slug: true } } },
    }),
    prisma.package.findMany({
      where: { published: true },
      select: {
        slug: true,
        updatedAt: true,
        heroImage: true,
        theme: true,
        city: { select: { slug: true, heroImage: true } },
        destination: { select: { slug: true, heroImage: true } },
      },
    }),
    // Lead marketplace pages, only where there are leads (empty ones are noindex).
    prisma.destination.findMany({
      where: { leads: { some: {} } },
      select: { slug: true, leads: { select: { createdAt: true }, orderBy: { createdAt: "desc" }, take: 1 } },
    }),
    prisma.city.findMany({
      where: { leads: { some: {} } },
      select: {
        slug: true,
        destination: { select: { slug: true } },
        leads: { select: { createdAt: true }, orderBy: { createdAt: "desc" }, take: 1 },
      },
    }),
  ]);

  const url = (path: string) => `${SITE_URL}${path}`;
  // Image sitemap entries for our own WebP photos (Google Images, Bing Images).
  const images = (src?: string | null) => (isPhoto(src) ? { images: [absoluteUrl(src)] } : {});

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), changeFrequency: "daily", priority: 1 },
    { url: url(tourPackagesUrl()), changeFrequency: "daily", priority: 0.9 },
    { url: url(tourPackagesUrl("india")), changeFrequency: "daily", priority: 0.9 },
    { url: url(tourPackagesUrl("international")), changeFrequency: "daily", priority: 0.9 },
    ...THEMES.map((t) => ({ url: url(themeUrl(t.prefix)), changeFrequency: "weekly" as const, priority: 0.7 })),
    { url: url(BLOG_PATH), changeFrequency: "weekly", priority: 0.7 },
    ...allPosts().map((p) => ({
      url: url(postUrl(p.slug)),
      lastModified: new Date(`${p.updated ?? p.date}T00:00:00+05:30`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: url("/leads"), changeFrequency: "hourly", priority: 0.6 },
    { url: url("/agents"), changeFrequency: "daily", priority: 0.5 },
    { url: url("/agent/register"), changeFrequency: "monthly", priority: 0.5 },
    { url: url("/about-us"), changeFrequency: "yearly", priority: 0.3 },
    { url: url("/contact-us"), changeFrequency: "yearly", priority: 0.3 },
    { url: url("/plan-my-trip"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("/editorial-policy"), changeFrequency: "yearly", priority: 0.3 },
    { url: url("/terms-and-conditions"), changeFrequency: "yearly", priority: 0.2 },
    { url: url("/privacy-policy"), changeFrequency: "yearly", priority: 0.2 },
    { url: url("/refund-and-cancellation-policy"), changeFrequency: "yearly", priority: 0.2 },
    { url: url("/shipping-and-delivery-policy"), changeFrequency: "yearly", priority: 0.2 },
  ];

  // Guide sections are listed only when they have content (mirrors indexable()
  // in GuidePages.tsx).
  const guideSections = (content: Parameters<typeof readContent>[0], placeCount: number) => {
    const c = readContent(content);
    const intro = (s: keyof NonNullable<typeof c.sections>) => Boolean(c.sections?.[s]?.intro);
    return [
      (placeCount > 0 || intro("places-to-visit")) && "places-to-visit",
      intro("things-to-do") && "things-to-do",
      (c.bestTimeToVisit || c.months?.length || intro("best-time-to-visit")) && "best-time-to-visit",
      (c.howToReach?.air || c.howToReach?.rail || c.howToReach?.road || c.routes?.length || intro("how-to-reach")) &&
        "how-to-reach",
      (c.thingsToKnow?.length || intro("travel-guide-tips")) && "travel-guide-tips",
      intro("local-food") && "local-food",
      intro("culture-and-heritage") && "culture-and-heritage",
    ].filter((x): x is string => typeof x === "string");
  };

  // Published packages per destination or city slug, overall and per theme tag,
  // to mirror packagesPageMetadata(): a theme slice, or a major departure city,
  // is also indexable without its own copy once it has MIN_SLICE packages.
  const MIN_SLICE = 3;
  const pkgCount = new Map<string, number>();
  const bump = (key: string) => pkgCount.set(key, (pkgCount.get(key) ?? 0) + 1);
  for (const p of packages) {
    // "d:" and "c:" keys: a destination and a city can share a slug.
    const scopes = [p.destination?.slug && `d:${p.destination.slug}`, p.city?.slug && `c:${p.city.slug}`].filter(Boolean) as string[];
    for (const scope of scopes) {
      bump(scope);
      for (const t of THEMES) if (p.theme?.toLowerCase().includes(t.tag.toLowerCase())) bump(`${scope}|${t.tag}`);
    }
  }

  // Theme and origin slices that have their own copy, or enough packages, are distinct, indexable pages.
  const slices = (slug: string, content: Parameters<typeof readContent>[0], lastModified: Date, isCity = false) => {
    const p = readContent(content).packages;
    const themes = new Set(Object.keys(p?.themes ?? {}));
    const origins = new Set(Object.keys(p?.fromOrigins ?? {}));
    const key = `${isCity ? "c" : "d"}:${slug}`;
    for (const t of THEMES) if ((pkgCount.get(`${key}|${t.tag}`) ?? 0) >= MIN_SLICE) themes.add(t.prefix);
    // Origin pages for a city exist only with the city's own copy.
    if (!isCity && (pkgCount.get(key) ?? 0) >= MIN_SLICE)
      for (const o of ORIGIN_CITIES) if (o.major && o.slug !== slug) origins.add(o.slug);
    return [
      ...[...origins].map((o) => fromToUrl(o, slug)),
      ...[...themes].map((t) => themeUrl(t, slug)),
      ...durationsFor(readContent(content)).map((d) => `${tourPackagesUrl(slug)}/${d.slug}`),
    ].map((path) => ({ url: url(path), lastModified, changeFrequency: "weekly" as const, priority: 0.7 }));
  };

  // A guide hub lists its place's articles, so a new or rewritten article
  // changes the hub too: its date is the later of the two.
  const latestPost = new Map<string, Date>();
  for (const p of allPosts()) {
    const at = new Date(`${p.updated ?? p.date}T00:00:00+05:30`);
    for (const key of [p.destination, p.city && `${p.destination}/${p.city}`].filter(Boolean) as string[])
      if (!latestPost.has(key) || latestPost.get(key)! < at) latestPost.set(key, at);
  }
  const hubDate = (updatedAt: Date, key: string) => {
    const post = latestPost.get(key);
    return post && post > updatedAt && post.getTime() <= Date.now() ? post : updatedAt;
  };

  const destinationRoutes: MetadataRoute.Sitemap = destinations.flatMap((d) => [
    { url: url(tourPackagesUrl(d.slug)), lastModified: d.updatedAt, changeFrequency: "weekly" as const, priority: 0.9, ...images(d.heroImage) },
    ...slices(d.slug, d.content, d.updatedAt),
    ...(d.kind === "CIRCUIT"
      ? []
      : [
          { url: url(guideUrl(d.slug)), lastModified: hubDate(d.updatedAt, d.slug), changeFrequency: "monthly" as const, priority: 0.7, ...images(d.heroImage) },
          ...guideSections(d.content, d._count.places).map((section) => ({
            url: url(guideUrl(d.slug, section)),
            lastModified: d.updatedAt,
            changeFrequency: "monthly" as const,
            priority: 0.6,
          })),
        ]),
  ]);

  const cityRoutes: MetadataRoute.Sitemap = cities.flatMap((c) => [
    { url: url(tourPackagesUrl(c.slug)), lastModified: c.updatedAt, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: url(guideUrl(c.destination.slug, c.slug)), lastModified: hubDate(c.updatedAt, `${c.destination.slug}/${c.slug}`), changeFrequency: "monthly" as const, priority: 0.6, ...images(c.heroImage) },
    ...guideSections(c.content, c._count.places).map((section) => ({
      url: url(guideUrl(c.destination.slug, c.slug, section)),
      lastModified: c.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...slices(c.slug, c.content, c.updatedAt, true),
  ]);

  const placeRoutes: MetadataRoute.Sitemap = places.map((p) => ({
    url: url(guideUrl(p.destination.slug, p.path)),
    lastModified: p.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.5,
    ...images(p.heroImage),
  }));

  const packageRoutes: MetadataRoute.Sitemap = packages.map((p) => ({
    url: url(`/packages/${p.slug}`),
    lastModified: p.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
    // The page shows the city or destination photo when the package has none.
    ...images(packagePhoto(p)),
  }));

  const leadRoutes: MetadataRoute.Sitemap = [
    ...leadDestinations.map((d) => ({
      url: url(`/leads/${d.slug}`),
      lastModified: d.leads[0]?.createdAt,
      changeFrequency: "daily" as const,
      priority: 0.5,
    })),
    ...leadCities.map((c) => ({
      url: url(`/leads/${c.destination.slug}/${c.slug}`),
      lastModified: c.leads[0]?.createdAt,
      changeFrequency: "daily" as const,
      priority: 0.4,
    })),
  ];

  // Origin-to-city route pages, for cities whose guide is READY.
  const readyCities = new Map(cities.map((c) => [c.slug, c.updatedAt]));
  const routeRoutes: MetadataRoute.Sitemap = allRoutes()
    .filter((r) => readyCities.has(r.target.city))
    .map((r) => ({
      url: url(guideUrl(r.target.destination, r.target.city, "how-to-reach", r.slug)),
      lastModified: readyCities.get(r.target.city),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  return [...staticRoutes, ...destinationRoutes, ...cityRoutes, ...placeRoutes, ...routeRoutes, ...packageRoutes, ...leadRoutes];
}
