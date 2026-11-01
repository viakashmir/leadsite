import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { webPageSchema } from "@/lib/schema";
import {
  CardLinks,
  ChipLinks,
  ContentPending,
  Faqs,
  GuideBody,
  HowToReach,
  PageHero,
  QuickFacts,
  Seasons,
  QuoteBox,
  Section,
  TwoColumn,
  type Crumb,
  Blocks,
  Months,
  Prose,
  Routes,
} from "@/components/location/blocks";
import { GUIDE_SECTIONS } from "@/data/locations";
import { prisma } from "@/lib/prisma";
import {
  getCity,
  getDestination,
  readContent,
  type CityWithPlaces,
  type DestinationWithTree,
} from "@/lib/locations";
import { guideUrl, themeUrl, tourPackagesUrl } from "@/lib/urls";

type SectionSlug = (typeof GUIDE_SECTIONS)[number]["slug"];

export type GuideRoute =
  | { kind: "overview"; destination: DestinationWithTree; city: CityWithPlaces | null }
  | { kind: "section"; destination: DestinationWithTree; city: CityWithPlaces | null; section: SectionSlug }
  | {
      kind: "place";
      destination: DestinationWithTree;
      city: CityWithPlaces | null;
      place: NonNullable<Awaited<ReturnType<typeof getPlace>>>;
    };

const isSection = (s: string | undefined): s is SectionSlug =>
  GUIDE_SECTIONS.some((g) => g.slug === s);

const getPlace = (path: string) => prisma.place.findUnique({ where: { path } });

// /{dest}-tourism/[city]/[section]/[place]
export async function resolveGuide(destSlug: string, path: string[]): Promise<GuideRoute | null> {
  const destination = await getDestination(destSlug);
  if (!destination || destination.kind === "CIRCUIT") return null;

  let city: CityWithPlaces | null = null;
  let rest = path;
  if (rest.length > 0 && !isSection(rest[0])) {
    city = await getCity(rest[0]);
    if (!city || city.destinationId !== destination.id) return null;
    rest = rest.slice(1);
  }

  if (rest.length === 0) return { kind: "overview", destination, city };
  if (!isSection(rest[0])) return null;
  if (rest.length === 1) return { kind: "section", destination, city, section: rest[0] };
  if (rest.length === 2 && (rest[0] === "places-to-visit" || rest[0] === "things-to-do")) {
    const placePath = [city?.slug, rest[0], rest[1]].filter(Boolean).join("/");
    const place = await getPlace(placePath);
    if (!place || place.destinationId !== destination.id) return null;
    return { kind: "place", destination, city, place };
  }
  return null;
}

function names(r: GuideRoute) {
  const where = r.city ? r.city.name : r.destination.name;
  const sectionName = (s: SectionSlug) => GUIDE_SECTIONS.find((g) => g.slug === s)!.name;
  if (r.kind === "overview") {
    return { where, title: `${r.city ? r.city.name : (r.destination.officialName ?? r.destination.name)} Tourism` };
  }
  if (r.kind === "section") {
    const t =
      r.section === "how-to-reach"
        ? `How to Reach ${where}`
        : r.section === "travel-guide-tips"
          ? `${where} Travel Tips`
          : `${sectionName(r.section)} in ${where}`;
    return { where, title: r.section === "best-time-to-visit" ? `Best Time to Visit ${where}` : t };
  }
  return { where, title: `${r.place.name}, ${where}` };
}

// A guide page is indexable when its entity is READY and, for section pages,
// when that section actually has something to show.
async function indexable(r: GuideRoute) {
  const status = r.kind === "place" ? r.place.contentStatus : r.city ? r.city.contentStatus : r.destination.contentStatus;
  if (status !== "READY") return false;
  if (r.kind !== "section") return true;
  const c = readContent(r.city ? r.city.content : r.destination.content);
  switch (r.section) {
    case "best-time-to-visit":
      return Boolean(c.bestTimeToVisit || c.months?.length || c.sections?.["best-time-to-visit"]?.intro);
    case "how-to-reach":
      return Boolean(
        c.howToReach?.air || c.howToReach?.rail || c.howToReach?.road || c.routes?.length || c.sections?.["how-to-reach"]?.intro,
      );
    case "travel-guide-tips":
      return Boolean(c.thingsToKnow?.length || c.sections?.["travel-guide-tips"]?.intro);
    case "places-to-visit":
    case "things-to-do": {
      const kind = r.section === "places-to-visit" ? "PLACE" : "ACTIVITY";
      if (c.sections?.[r.section]?.intro) return true;
      const where = r.city ? { cityId: r.city.id } : { destinationId: r.destination.id };
      return (await prisma.place.count({ where: { ...where, kind } })) > 0;
    }
  }
}

function pathOf(r: GuideRoute) {
  const d = r.destination.slug;
  if (r.kind === "place") return guideUrl(d, r.place.path);
  if (r.kind === "section") return guideUrl(d, r.city?.slug, r.section);
  return guideUrl(d, r.city?.slug);
}

const SECTION_DESCRIPTIONS: Record<SectionSlug, (where: string) => string> = {
  "places-to-visit": (w) => `Top places to visit in ${w}, what each is known for and how to fit them into your trip, with customised packages from verified local agents.`,
  "things-to-do": (w) => `Things to do in ${w}: activities, experiences and day trips, with customised packages from verified local agents.`,
  "best-time-to-visit": (w) => `Best time to visit ${w}: season-by-season weather, festivals and what each part of the year is good for.`,
  "how-to-reach": (w) => `How to reach ${w} by air, train and road, with nearest airports, railheads, distances and local transport.`,
  "travel-guide-tips": (w) => `${w} travel tips: permits, local rules, connectivity and practical advice to know before you go.`,
};

export async function guideMetadata(r: GuideRoute): Promise<Metadata> {
  const { title, where } = names(r);
  const own = readContent(r.city ? r.city.content : r.destination.content);
  const description =
    r.kind === "place"
      ? `${r.place.name} in ${where}: what to see, when to go, how to get there, and tour packages that include it.`
      : r.kind === "section"
        ? SECTION_DESCRIPTIONS[r.section](where)
        : own.guideDescription ||
          `${title}: places to visit, best time to go, how to reach and travel tips for ${where}, plus customised packages from verified local agents.`;
  return {
    title: `${title} ${new Date().getFullYear()}`,
    description,
    alternates: { canonical: pathOf(r) },
    openGraph: { title, description, url: pathOf(r) },
    robots: (await indexable(r)) ? undefined : { index: false, follow: true },
  };
}

function crumbsFor(r: GuideRoute): Crumb[] {
  const d = r.destination;
  const crumbs: Crumb[] = [{ name: `${d.name} Tourism`, href: guideUrl(d.slug) }];
  if (r.city) crumbs.push({ name: r.city.name, href: guideUrl(d.slug, r.city.slug) });
  if (r.kind === "section" || r.kind === "place") {
    const sec = r.kind === "section" ? r.section : r.place.kind === "ACTIVITY" ? "things-to-do" : "places-to-visit";
    const label = GUIDE_SECTIONS.find((g) => g.slug === sec)!.name;
    crumbs.push({ name: label, href: guideUrl(d.slug, r.city?.slug, sec) });
  }
  if (r.kind === "place") crumbs.push({ name: r.place.name, href: pathOf(r) });
  return crumbs;
}

// Places shown for a destination or city, optionally filtered by kind.
function placesOf(r: GuideRoute, kind: "PLACE" | "ACTIVITY") {
  if (r.city) return r.city.places.filter((p) => p.kind === kind);
  return r.destination.places.filter((p) => p.kind === kind);
}

async function destinationWidePlaces(destinationId: string, kind: "PLACE" | "ACTIVITY") {
  return prisma.place.findMany({
    where: { destinationId, kind },
    include: { city: true },
    orderBy: [{ city: { tier: "asc" } }, { city: { sortOrder: "asc" } }, { sortOrder: "asc" }],
  });
}

export default async function GuidePage({ route: r }: { route: GuideRoute }) {
  const d = r.destination;
  const { title, where } = names(r);
  const content = readContent(r.kind === "place" ? r.place.content : r.city ? r.city.content : d.content);
  const packagesSlug = r.city ? r.city.slug : d.slug;
  const updated = r.kind === "place" ? r.place.updatedAt : r.city ? r.city.updatedAt : d.updatedAt;
  const published = r.kind === "place" ? r.place.createdAt : r.city ? r.city.createdAt : d.createdAt;
  const subject =
    r.kind === "place"
      ? {
          "@type": "TouristAttraction",
          name: r.place.name,
          containedInPlace: { "@type": "Place", name: where },
          ...(r.place.heroImage && { image: r.place.heroImage }),
        }
      : {
          "@type": "TouristDestination",
          name: where,
          ...(r.city && { containedInPlace: { "@type": "Place", name: d.officialName ?? d.name } }),
        };
  const sectionBase = [d.slug, r.city?.slug] as const;

  const sectionLinks = [
    { label: "Overview", href: guideUrl(...sectionBase), active: r.kind === "overview" },
    ...GUIDE_SECTIONS.map((s) => ({
      label: s.name,
      href: guideUrl(...sectionBase, s.slug),
      active: r.kind === "section" && r.section === s.slug,
    })),
  ];

  let main: React.ReactNode;

  if (r.kind === "overview") {
    const places =
      r.city || d.cities.length === 0
        ? placesOf(r, "PLACE").map((p) => ({ title: p.name, href: guideUrl(d.slug, p.path) }))
        : (await destinationWidePlaces(d.id, "PLACE")).slice(0, 12).map((p) => ({
            title: p.name,
            href: guideUrl(d.slug, p.path),
            meta: p.city?.name,
          }));
    main = (
      <>
        <Section title={`About ${where}`}>
          <GuideBody content={content} topic={where} />
          <div className="mt-4">
            <QuickFacts
              facts={[
                { label: "Ideal trip length", value: content.idealDuration },
                { label: "Best months", value: content.bestMonths },
                { label: "Main gateway", value: content.gateway },
                ...(content.facts ?? []),
              ]}
            />
          </div>
        </Section>
        <Blocks blocks={content.blocks} />
        {!r.city && d.cities.length > 0 && (
          <Section title={`Cities in ${d.name}`}>
            <CardLinks
              items={d.cities.map((c) => ({ title: c.name, href: guideUrl(d.slug, c.slug), meta: c.kind?.replace(/-/g, " ") }))}
            />
          </Section>
        )}
        {places.length > 0 && (
          <Section title={`Places to visit in ${where}`}>
            <CardLinks items={places} />
            <Link
              href={guideUrl(...sectionBase, "places-to-visit")}
              className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
            >
              All places to visit in {where} →
            </Link>
          </Section>
        )}
        {r.city && (
          <Section title={`More in ${d.name}`}>
            <ChipLinks
              links={d.cities
                .filter((c) => c.id !== r.city!.id)
                .map((c) => ({ label: c.name, href: guideUrl(d.slug, c.slug) }))}
            />
          </Section>
        )}
      </>
    );
  } else if (r.kind === "section") {
    const sec = content.sections?.[r.section];
    if (r.section === "places-to-visit" || r.section === "things-to-do") {
      const kind = r.section === "places-to-visit" ? "PLACE" : "ACTIVITY";
      const items =
        r.city || d.cities.length === 0
          ? placesOf(r, kind).map((p) => ({ title: p.name, href: guideUrl(d.slug, p.path), description: p.summary || undefined }))
          : (await destinationWidePlaces(d.id, kind)).map((p) => ({
              title: p.name,
              href: guideUrl(d.slug, p.path),
              meta: p.city?.name,
              description: p.summary || undefined,
            }));
      main = (
        <Section title={title}>
          <Prose text={sec?.intro} />
          <div className={sec?.intro ? "mt-4" : undefined}>
            {items.length > 0 ? <CardLinks items={items} /> : <ContentPending topic={title.toLowerCase()} />}
          </div>
        </Section>
      );
    } else if (r.section === "best-time-to-visit") {
      main = (
        <>
          <Section title={title}>
            {content.bestTimeToVisit || sec?.intro ? (
              <div className="space-y-4">
                <Prose text={sec?.intro} />
                <Prose text={content.bestTimeToVisit} />
                <Seasons seasons={content.seasons} />
              </div>
            ) : (
              <ContentPending topic={`best time to visit ${where}`} />
            )}
          </Section>
          {content.months && content.months.length > 0 && (
            <Section title={`${content.monthsWhere ?? where} weather and temperature by month`}>
              <Months where={content.monthsWhere ?? where} months={content.months} />
            </Section>
          )}
        </>
      );
    } else if (r.section === "how-to-reach") {
      const h = content.howToReach;
      main = (
        <>
          <Section title={title}>
            {h && (h.air || h.rail || h.road) ? (
              <div className="space-y-4">
                <Prose text={sec?.intro} />
                <HowToReach howToReach={h} />
              </div>
            ) : sec?.intro ? (
              <Prose text={sec.intro} />
            ) : (
              <ContentPending topic={`how to reach ${where}`} />
            )}
          </Section>
          {content.routes && content.routes.length > 0 && (
            <Section title={`Distances and routes to ${where}`}>
              <Routes routes={content.routes} />
            </Section>
          )}
        </>
      );
    } else {
      main = (
        <Section title={title}>
          <Prose text={sec?.intro} />
          {content.thingsToKnow && content.thingsToKnow.length > 0 ? (
            <ul className="list-disc space-y-1 pl-5 text-ink">
              {content.thingsToKnow.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          ) : sec?.intro ? null : (
            <ContentPending topic={`${where} travel tips`} />
          )}
        </Section>
      );
    }
    main = (
      <>
        {main}
        <Blocks blocks={sec?.blocks} />
      </>
    );
  } else {
    const siblings = (r.city ? r.city.places : d.places).filter(
      (p) => p.kind === r.place.kind && p.id !== r.place.id,
    );
    main = (
      <>
        <Section title={`About ${r.place.name}`}>
          <GuideBody content={content} topic={r.place.name} />
          {content.facts && content.facts.length > 0 && (
            <div className="mt-4">
              <QuickFacts facts={content.facts} />
            </div>
          )}
        </Section>
        <Blocks blocks={content.blocks} />
        {content.months && content.months.length > 0 && (
          <Section title={`${r.place.name} weather and temperature by month`}>
            <Months where={r.place.name} months={content.months} />
          </Section>
        )}
        {content.routes && content.routes.length > 0 && (
          <Section title={`How to reach ${r.place.name}`}>
            <Routes routes={content.routes} />
          </Section>
        )}
        {siblings.length > 0 && (
          <Section title={`More places in ${where}`}>
            <CardLinks items={siblings.map((p) => ({ title: p.name, href: guideUrl(d.slug, p.path) }))} />
          </Section>
        )}
      </>
    );
  }

  const faqs = r.kind === "section" ? content.sections?.[r.section]?.faqs : content.faqs;

  return (
    <article>
      <JsonLd
        data={webPageSchema({
          path: pathOf(r),
          name: title,
          type: "Article",
          description: (await guideMetadata(r)).description ?? undefined,
          datePublished: published,
          dateModified: updated,
          about: subject,
        })}
      />
      <PageHero
        crumbs={crumbsFor(r)}
        title={title}
        updated={updated}
        subtitle={
          r.kind === "place"
            ? `Part of a ${where} trip? Get customised packages that include ${r.place.name}.`
            : `Everything you need to plan ${where}: places, seasons, routes and tips, plus quotes from verified local agents.`
        }
      >
        <div className="mt-5">
          <ChipLinks links={sectionLinks} />
        </div>
      </PageHero>
      <TwoColumn
        main={
          <>
            {main}
            <Section title={`Plan your ${where} trip`}>
              <ChipLinks
                links={[
                  { label: `${where} Tour Packages`, href: tourPackagesUrl(packagesSlug) },
                  { label: `${where} Honeymoon Packages`, href: themeUrl("honeymoon-packages", packagesSlug) },
                  { label: `${where} Family Packages`, href: themeUrl("family-packages", packagesSlug) },
                ]}
              />
            </Section>
            {faqs && faqs.length > 0 && (
              <Section title={`${r.kind === "place" ? r.place.name : title} FAQs`}>
                <Faqs faqs={faqs} />
              </Section>
            )}
          </>
        }
        side={
          <QuoteBox
            destinationId={d.id}
            cityId={r.city?.id}
            title={`Plan your ${where} trip with a local expert`}
          />
        }
      />
    </article>
  );
}
