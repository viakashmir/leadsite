import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import JsonLd from "@/components/JsonLd";
import { ChipLinks, PageHero } from "@/components/location/blocks";
import { isPhoto } from "@/lib/media";
import { SITE_URL } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import {
  BLOG_PATH,
  FEATURED_DESTINATION,
  allPosts,
  postUrl,
  postsByCategory,
  readMinutes,
} from "@/lib/blog";
import { guideUrl, tourPackagesUrl } from "@/lib/urls";

// No timed rebuilds: every timed ISR rebuild is a billed ISR write, and
// crawlers hitting thousands of pages hourly blocked the Vercel account.
// Pages refresh on deploy and on demand (admin edits, new leads, unlocks).
export const revalidate = false;

const TITLE = `Tour Package Guides & Itineraries ${new Date().getFullYear()}`;
const DESCRIPTION =
  "Day-by-day itineraries, honeymoon and family trip plans, and best-time guides for India and abroad, each with free quotes from verified local agents.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: BLOG_PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: BLOG_PATH },
};

const anchor = (h: string) =>
  h
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default async function BlogIndex() {
  const groups = postsByCategory();
  const posts = allPosts();
  const featured = posts.filter(
    (p) => p.destination === FEATURED_DESTINATION.slug,
  );
  const [destinations, cities] = await Promise.all([
    prisma.destination.findMany({
      select: { slug: true, name: true, heroImage: true, contentStatus: true },
    }),
    prisma.city.findMany({
      select: { slug: true, name: true, heroImage: true },
    }),
  ]);
  const destBySlug = new Map(destinations.map((d) => [d.slug, d]));
  const cityBySlug = new Map(cities.map((c) => [c.slug, c]));
  const photoFor = (destination: string, city?: string) =>
    [
      city ? cityBySlug.get(city)?.heroImage : null,
      destBySlug.get(destination)?.heroImage,
    ].find((s) => isPhoto(s)) ?? null;
  // Topic clusters: each destination's articles are listed on its travel
  // guide (the pillar page), so the blog index routes readers there.
  const clusterCounts = new Map<string, number>();
  for (const p of posts) clusterCounts.set(p.destination, (clusterCounts.get(p.destination) ?? 0) + 1);
  const clusters = [...clusterCounts.entries()]
    .map(([slug, n]) => ({ d: destBySlug.get(slug), n }))
    .filter((c): c is { d: NonNullable<typeof c.d>; n: number } => Boolean(c.d))
    .sort((a, b) => b.n - a.n || a.d.name.localeCompare(b.d.name));
  const placeFor = (destination: string, city?: string) =>
    (city ? cityBySlug.get(city)?.name : undefined) ??
    destBySlug.get(destination)?.name ??
    "";

  return (
    <div>
      <JsonLd
        data={webPageSchema({
          path: BLOG_PATH,
          name: TITLE,
          description: DESCRIPTION,
          type: "CollectionPage",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: TITLE,
          numberOfItems: posts.length,
          itemListElement: posts.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}${postUrl(p.slug)}`,
            name: p.title,
          })),
        }}
      />
      <PageHero
        crumbs={[{ name: "Travel Blog", href: BLOG_PATH }]}
        title="Travel Blog"
        subtitle="Trip plans you can book: day-by-day itineraries, honeymoon and family ideas and best-time guides. Every guide ends with free quotes from verified local agents."
      >
        <div className="mt-4">
          <ChipLinks
            scroll
            links={[
              {
                label: `${FEATURED_DESTINATION.name} (${featured.length})`,
                href: `#${anchor(FEATURED_DESTINATION.name)}`,
                active: true,
              },
              ...groups.map((g) => ({
                label: `${g.category} (${g.posts.length})`,
                href: `#${anchor(g.category)}`,
              })),
            ]}
          />
        </div>
      </PageHero>

      <div className="mx-auto max-w-7xl px-4 pb-8">
        {clusters.length > 0 && (
          <section className="pt-5 sm:pt-6">
            <h2 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">Guides by destination</h2>
            <div className="mt-3">
              <ChipLinks
                links={clusters.map(({ d, n }) => ({
                  label: `${d.name} (${n})`,
                  href: d.contentStatus === "READY" ? `${guideUrl(d.slug)}#travel-guides` : tourPackagesUrl(d.slug),
                }))}
              />
            </div>
          </section>
        )}
        {featured.length > 0 && (
          <section
            id={anchor(FEATURED_DESTINATION.name)}
            className="scroll-mt-20 py-5 sm:py-6"
          >
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {FEATURED_DESTINATION.name} Travel Guides
                </h2>
                <p className="mt-1 text-sm text-ink-soft">
                  {featured.length} guides to plan Srinagar, Gulmarg, Pahalgam,
                  Sonamarg and beyond, each with free quotes from verified
                  Kashmir agents.
                </p>
              </div>
              <Link
                href={tourPackagesUrl(FEATURED_DESTINATION.slug)}
                className="shrink-0 rounded-full border border-brand px-3 py-1 text-[13px] font-semibold text-brand hover:bg-brand-tint"
              >
                {FEATURED_DESTINATION.name} tour packages{" "}
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
            <div className="mt-3 grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((p) => card(p))}
            </div>
          </section>
        )}
        {groups.map((g) => (
          <section
            key={g.category}
            id={anchor(g.category)}
            className="scroll-mt-20 py-5 sm:py-6"
          >
            <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
              {g.category} Guides
            </h2>
            <div className="mt-3 grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {g.posts.map((p) => card(p))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );

  function card(p: (typeof posts)[number]) {
    const photo = photoFor(p.destination, p.city);
    const place = placeFor(p.destination, p.city);
    return (
      <Link key={p.slug} href={postUrl(p.slug)} className="group flex flex-col">
        <span className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-royal to-royal-2">
          {photo ? (
            <Image
              src={photo}
              alt={place}
              fill
              sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white/50">
              {place}
            </span>
          )}
          <span className="absolute left-2.5 top-2.5 rounded-md bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-brand">
            {place}
          </span>
        </span>
        <span className="mt-2.5 line-clamp-2 text-[15px] font-semibold leading-snug text-ink group-hover:text-brand">
          {p.title}
        </span>
        <span className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-ink-soft">
          {p.description}
        </span>
        <span className="mt-1.5 text-xs text-ink-soft">
          {readMinutes(p)} min read
        </span>
      </Link>
    );
  }
}
