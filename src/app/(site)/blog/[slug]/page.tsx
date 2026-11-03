import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import JsonLd from "@/components/JsonLd";
import QuoteButton, { QuoteTarget } from "@/components/QuoteButton";
import TrustTicks from "@/components/TrustTicks";
import { Breadcrumbs, Byline, ChipLinks, DayList, Faqs, QuoteBox, Section, TwoColumn } from "@/components/location/blocks";
import { isPhoto } from "@/lib/media";
import { absoluteUrl } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import { guideUrl, themeUrl, tourPackagesUrl } from "@/lib/urls";
import { BLOG_PATH, CATEGORY_THEME, getPost, metaTitle, postUrl, readMinutes, relatedPosts } from "@/lib/blog";
import { createLinker, entitiesFor } from "@/lib/entityLinks";

export const revalidate = 3600;

// Rendered on first visit, then cached (ISR), like the location pages.
export async function generateStaticParams() {
  return [];
}

const anchor = (h: string) =>
  h
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

async function placeFor(destinationSlug: string, citySlug?: string) {
  const [destination, city] = await Promise.all([
    prisma.destination.findUnique({
      where: { slug: destinationSlug },
      select: { id: true, slug: true, name: true, heroImage: true, contentStatus: true },
    }),
    citySlug
      ? prisma.city.findFirst({
          where: { slug: citySlug },
          select: { id: true, slug: true, name: true, heroImage: true, contentStatus: true },
        })
      : null,
  ]);
  return { destination, city };
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = postUrl(post.slug);
  const title = metaTitle(post);
  return {
    // Absolute: the keyword-led title uses the full width Google shows, without the site suffix.
    title: { absolute: title },
    description: post.description,
    alternates: { canonical: path },
    openGraph: { type: "article", title, description: post.description, url: path, publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { destination, city } = await placeFor(post.destination, post.city);
  const place = city ?? destination;
  const placeName = place?.name ?? post.destination;
  const photo = [city?.heroImage, destination?.heroImage].find((src) => isPhoto(src)) ?? null;
  const published = new Date(`${post.date}T00:00:00+05:30`);
  const modified = post.updated ? new Date(`${post.updated}T00:00:00+05:30`) : published;
  const minutes = readMinutes(post);
  const related = relatedPosts(post, 6);
  const theme = CATEGORY_THEME[post.category];

  const moneyLinks = [
    ...(city ? [{ label: `${city.name} tour packages`, href: tourPackagesUrl(city.slug) }] : []),
    ...(destination ? [{ label: `${destination.name} tour packages`, href: tourPackagesUrl(destination.slug) }] : []),
    ...(destination && theme
      ? [{ label: `${destination.name} ${post.category.toLowerCase()} packages`, href: themeUrl(theme, destination.slug) }]
      : []),
    ...(destination ? [{ label: `${destination.name} travel guide`, href: guideUrl(destination.slug, city?.slug) }] : []),
  ];

  // Topic cluster, spoke to hub: the article sits under its place's guide in
  // the breadcrumb, and the first mention of each place links to its guide.
  const destinationGuide = destination?.contentStatus === "READY" ? guideUrl(destination.slug) : null;
  const cityGuide = destination && city?.contentStatus === "READY" ? guideUrl(destination.slug, city.slug) : null;
  const crumbs = [
    ...(destination && destinationGuide ? [{ name: `${destination.name} Travel Guide`, href: destinationGuide }] : [{ name: "Travel Blog", href: BLOG_PATH }]),
    ...(city && cityGuide ? [{ name: city.name, href: cityGuide }] : []),
    { name: post.title, href: postUrl(post.slug) },
  ];
  const linker = createLinker(await entitiesFor(post.destination));
  const intro = linker.link(post.intro);
  const body = (
    <>
    {post.sections.map((s, i) => (
      <div key={s.h}>
        <Section id={anchor(s.h)} title={s.h} tint={s.days ? "warm" : undefined}>
          <div className="space-y-3 leading-relaxed text-ink">
            {s.p?.map((para, j) => <p key={j}>{linker.link(para)}</p>)}
            {s.list && (
              <ul className="list-disc space-y-1.5 pl-5">
                {s.list.map((item, j) => (
                  <li key={j}>{linker.link(item)}</li>
                ))}
              </ul>
            )}
            {s.days && <DayList days={s.days} />}
          </div>
        </Section>
        {i === 1 && (
          <aside className="my-4 flex flex-col gap-3 rounded-[14px] bg-brand p-5 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-bold leading-snug">Want this {placeName} trip planned for you?</p>
              <p className="mt-1 text-sm text-white/80">
                Share your dates and budget once. Up to 3 verified local agents send customised quotes.
              </p>
            </div>
            <QuoteButton className="shrink-0 rounded-lg bg-white px-5 py-2.5 text-center text-sm font-semibold text-brand hover:bg-zinc-100">
              Get Free Quotes
            </QuoteButton>
          </aside>
        )}
      </div>
    ))}
    </>
  );
  const mentions = linker.linked().map((e) => ({ "@type": e.type, name: e.name, url: absoluteUrl(e.href) }));

  return (
    <article>
      <JsonLd
        data={webPageSchema({
          path: postUrl(post.slug),
          name: post.title,
          description: post.description,
          type: "Article",
          datePublished: published,
          dateModified: modified,
          image: photo ? absoluteUrl(photo) : undefined,
          about: {
            "@type": "TouristDestination",
            name: placeName,
            ...((cityGuide ?? destinationGuide) && { url: absoluteUrl((cityGuide ?? destinationGuide)!) }),
          },
          ...(mentions.length > 0 && { mentions }),
        })}
      />
      <QuoteTarget slugs={[post.city ?? "", post.destination].filter(Boolean)} />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-1 pt-4 sm:pt-6">
          <Breadcrumbs items={crumbs} />
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <Link
              href={`${BLOG_PATH}#${anchor(post.category)}`}
              className="rounded-md bg-brand px-2 py-0.5 font-semibold text-white hover:bg-brand-dark"
            >
              {post.category}
            </Link>
            <span className="text-ink-soft">{minutes} min read</span>
          </div>
          <h1 className="mt-2 max-w-4xl font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-[30px]">
            {post.title}
          </h1>
          <Byline updated={modified} />
        </div>
      </section>

      <TwoColumn
        main={
          <>
            {photo && (
              <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-[14px] bg-zinc-100">
                <Image src={photo} alt={placeName} fill priority sizes="(min-width: 1024px) 800px, 100vw" className="object-cover" />
              </div>
            )}
            <p className="text-[17px] leading-relaxed text-ink">{intro}</p>

            <nav aria-label="In this guide" className="mt-5 rounded-[14px] bg-zinc-50 p-4">
              <p className="text-sm font-bold text-ink">In this guide</p>
              <ol className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
                {post.sections.map((s) => (
                  <li key={s.h}>
                    <a href={`#${anchor(s.h)}`} className="text-ink-soft hover:text-brand">
                      {s.h}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {body}
            {post.faqs.length > 0 && (
              <Section title={`${placeName} trip FAQs`}>
                <Faqs faqs={post.faqs} />
              </Section>
            )}

            <section className="my-5 rounded-[14px] bg-[#fdf8f3] p-5 sm:p-6">
              <h2 className="text-xl font-bold tracking-tight text-ink">Ready to plan your {placeName} trip?</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                Tell us your dates, group size and hotel category. Verified agents who run {placeName} trips send
                customised itineraries with prices, and you book only if you like one.
              </p>
              <TrustTicks className="mt-3" />
              <QuoteButton className="mt-4 inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
                Get Free Quotes
              </QuoteButton>
              {moneyLinks.length > 0 && (
                <div className="mt-5">
                  <p className="mb-2 text-sm font-semibold text-ink">Compare packages</p>
                  <ChipLinks links={moneyLinks} />
                </div>
              )}
            </section>

            {related.length > 0 && (
              <Section title={`More ${placeName} travel guides`}>
                <ul className="grid gap-3 sm:grid-cols-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={postUrl(r.slug)}
                        className="block h-full rounded-xl border border-zinc-200 p-3.5 transition hover:border-zinc-300 hover:shadow-sm"
                      >
                        <span className="text-xs font-semibold text-brand">{r.category}</span>
                        <span className="mt-1 block font-semibold leading-snug text-ink">{r.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Section>
            )}
          </>
        }
        side={
          <QuoteBox
            destinationId={destination?.id}
            cityId={city?.id}
            title={`Get ${placeName} quotes from verified agents`}
          />
        }
      />
    </article>
  );
}
