import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { webPageSchema } from "@/lib/schema";
import RoutePage, { routeDescription, routeTitle } from "@/components/location/RoutePage";
import { getRoute, routeSlug, routesTo } from "@/data/routes";
import { isPhoto } from "@/lib/media";
import { absoluteUrl } from "@/lib/site";
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
  availableSections,
} from "@/lib/locations";
import { guideUrl, themeUrl, tourPackagesUrl } from "@/lib/urls";
import { clusterByCategory, postsForDestination, postsForPlace } from "@/lib/topicLinks";
import { ArticleCluster, TopicArticles } from "@/components/location/TopicArticles";
import { ogImages } from "@/lib/og";

type SectionSlug = (typeof GUIDE_SECTIONS)[number]["slug"];

export type GuideRoute =
  | { kind: "overview"; destination: DestinationWithTree; city: CityWithPlaces | null }
  | { kind: "section"; destination: DestinationWithTree; city: CityWithPlaces | null; section: SectionSlug }
  | {
      kind: "route";
      destination: DestinationWithTree;
      city: CityWithPlaces;
      route: NonNullable<ReturnType<typeof getRoute>>;
    }
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
  if (rest.length === 1) {
    // Empty sections 404 rather than showing a placeholder.
    const sections = await availableSections(destination.id, city?.id ?? null, city ? city.content : destination.content);
    return sections.has(rest[0]) ? { kind: "section", destination, city, section: rest[0] } : null;
  }
  if (rest.length === 2 && rest[0] === "how-to-reach" && city) {
    const route = getRoute(city.slug, rest[1]);
    return route ? { kind: "route", destination, city, route } : null;
  }
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
    if (r.section === "best-time-to-visit") return { where, title: `Best Time to Visit ${where}` };
    if (r.section === "local-food") return { where, title: `Famous Food of ${where}: Local Dishes to Try` };
    if (r.section === "culture-and-heritage") return { where, title: `Culture and Heritage of ${where}` };
    return { where, title: t };
  }
  if (r.kind === "route") return { where, title: `${routeTitle(r.route)} Distance and How to Reach` };
  return { where, title: `${r.place.name}, ${where}` };
}

// A guide page is indexable when its entity is READY and, for section pages,
// when that section actually has something to show.
async function indexable(r: GuideRoute) {
  const status = r.kind === "place" ? r.place.contentStatus : r.city ? r.city.contentStatus : r.destination.contentStatus;
  if (r.kind === "route") return status === "READY";
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
    case "local-food":
    case "culture-and-heritage":
      return Boolean(c.sections?.[r.section]?.intro);
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
  if (r.kind === "route") return guideUrl(d, r.city.slug, "how-to-reach", routeSlug(r.route.origin.slug, r.city.slug));
  if (r.kind === "section") return guideUrl(d, r.city?.slug, r.section);
  return guideUrl(d, r.city?.slug);
}

const SECTION_DESCRIPTIONS: Record<SectionSlug, (where: string) => string> = {
  "places-to-visit": (w) => `Top places to visit in ${w}, what each is known for and how to fit them into your trip, with customised packages from verified local agents.`,
  "things-to-do": (w) => `Things to do in ${w}: activities, experiences and day trips, with customised packages from verified local agents.`,
  "best-time-to-visit": (w) => `Best time to visit ${w}: season-by-season weather, festivals and what each part of the year is good for.`,
  "how-to-reach": (w) => `How to reach ${w} by air, train and road, with nearest airports, railheads, distances and local transport.`,
  "local-food": (w) => `Famous food of ${w}: local dishes, street food, sweets and drinks to try, and where to eat them.`,
  "culture-and-heritage": (w) => `Culture and heritage of ${w}: history, festivals, people, languages, crafts, monuments and customs to respect.`,
  "travel-guide-tips": (w) => `${w} travel tips: permits, local rules, connectivity and practical advice to know before you go.`,
};

export async function guideMetadata(r: GuideRoute): Promise<Metadata> {
  const { title, where } = names(r);
  const own = readContent(r.city ? r.city.content : r.destination.content);
  if (r.kind === "route") {
    const t = `${routeTitle(r.route)} Distance, Route, Bus, Train & Flight`;
    const desc = routeDescription(r.route);
    return {
      title: t,
      description: desc,
      alternates: { canonical: pathOf(r) },
      openGraph: { title: t, description: desc, url: pathOf(r), images: ogImages(t, r.city.heroImage, r.destination.heroImage) },
      robots: (await indexable(r)) ? undefined : { index: false, follow: true },
    };
  }
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
    openGraph: {
      title,
      description,
      url: pathOf(r),
      images: ogImages(title, r.kind === "place" ? r.place.heroImage : null, r.city?.heroImage, r.destination.heroImage),
    },
    robots: (await indexable(r)) ? undefined : { index: false, follow: true },
  };
}

function crumbsFor(r: GuideRoute): Crumb[] {
  const d = r.destination;
  const crumbs: Crumb[] = [{ name: `${d.name} Tourism`, href: guideUrl(d.slug) }];
  if (r.city) crumbs.push({ name: r.city.name, href: guideUrl(d.slug, r.city.slug) });
  if (r.kind === "section" || r.kind === "place" || r.kind === "route") {
    const sec =
      r.kind === "section"
        ? r.section
        : r.kind === "route"
          ? "how-to-reach"
          : r.place.kind === "ACTIVITY"
            ? "things-to-do"
            : "places-to-visit";
    const label = GUIDE_SECTIONS.find((g) => g.slug === sec)!.name;
    crumbs.push({ name: label, href: guideUrl(d.slug, r.city?.slug, sec) });
  }
  if (r.kind === "place") crumbs.push({ name: r.place.name, href: pathOf(r) });
  if (r.kind === "route") crumbs.push({ name: routeTitle(r.route), href: pathOf(r) });
  return crumbs;
}

// Places shown for a destination or city, optionally filtered by kind.
function placesOf(r: GuideRoute, kind: "PLACE" | "ACTIVITY") {
  if (r.city) return r.city.places.filter((p) => p.kind === kind);
  return r.destination.places.filter((p) => p.kind === kind);
}

// Link text for a guide section of a place, matching how people search it.
function sectionLabel(section: SectionSlug, where: string) {
  switch (section) {
    case "places-to-visit":
      return `Places to visit in ${where}`;
    case "things-to-do":
      return `Things to do in ${where}`;
    case "best-time-to-visit":
      return `Best time to visit ${where}`;
    case "how-to-reach":
      return `How to reach ${where}`;
    case "travel-guide-tips":
      return `${where} travel tips`;
    case "local-food":
      return `Food of ${where}`;
    case "culture-and-heritage":
      return `Culture of ${where}`;
  }
}

const listNames = (names: string[]) =>
  names.length <= 1 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;

// A short, factual intro built from the location data we hold, used until a
// written guide exists, so no page shows an empty "being written" box.
function autoIntro(r: GuideRoute): string | undefined {
  const d = r.destination;
  if (r.kind === "place") {
    const where = r.city ? `${r.city.name}, ${d.name}` : d.name;
    const others = (r.city ? r.city.places : d.places).filter((p) => p.id !== r.place.id && p.kind === "PLACE").slice(0, 4);
    return `${r.place.name} is one of the places to visit in ${where}. Most travellers see it as part of a ${r.city?.name ?? d.name} trip${
      others.length ? `, together with ${listNames(others.map((p) => p.name))}` : ""
    }. Local agents on Tavel Package can add it to a customised itinerary.`;
  }
  if (r.city) {
    const kind = r.city.kind ? r.city.kind.replace(/-/g, " ") : "destination";
    const places = r.city.places.filter((p) => p.kind === "PLACE").slice(0, 5);
    return `${r.city.name} is a ${kind} in ${d.officialName ?? d.name}.${
      places.length ? ` Places to visit include ${listNames(places.map((p) => p.name))}.` : ""
    } Verified local agents can plan a ${r.city.name} trip around your dates, group and budget.`;
  }
  if (d.cities.length) {
    return `${d.officialName ?? d.name} is a travel destination whose most visited places include ${listNames(
      d.cities.slice(0, 6).map((c) => c.name),
    )}. Verified local agents can plan a customised ${d.name} trip around your dates, group and budget.`;
  }
  return undefined;
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
  if (r.kind === "route") {
    return (
      <RoutePage
        route={r.route}
        path={pathOf(r)}
        crumbs={crumbsFor(r)}
        updated={r.city.updatedAt}
        destinationId={d.id}
        cityId={r.city.id}
        hasOriginPackages={Boolean(readContent(r.city.content).packages?.fromOrigins?.[r.route.origin.slug])}
      />
    );
  }
  const { title, where } = names(r);
  const raw = readContent(r.kind === "place" ? r.place.content : r.city ? r.city.content : d.content);
  // Pages without written copy get a factual intro from our location data.
  const content = raw.intro || raw.highlights?.length ? raw : { ...raw, intro: autoIntro(r) };
  const packagesSlug = r.city ? r.city.slug : d.slug;
  const updated = r.kind === "place" ? r.place.updatedAt : r.city ? r.city.updatedAt : d.updatedAt;
  const published = r.kind === "place" ? r.place.createdAt : r.city ? r.city.createdAt : d.createdAt;
  const subject =
    r.kind === "place"
      ? {
          "@type": "TouristAttraction",
          name: r.place.name,
          containedInPlace: { "@type": "Place", name: where },
          ...(isPhoto(r.place.heroImage) && { image: absoluteUrl(r.place.heroImage) }),
        }
      : {
          "@type": "TouristDestination",
          name: where,
          ...(r.city && { containedInPlace: { "@type": "Place", name: d.officialName ?? d.name } }),
        };
  const sectionBase = [d.slug, r.city?.slug] as const;

  const available = await availableSections(d.id, r.city?.id ?? null, r.city ? r.city.content : d.content);
  const sectionLinks = [
    { label: "Overview", href: guideUrl(...sectionBase), active: r.kind === "overview" },
    ...GUIDE_SECTIONS.filter((s) => available.has(s.slug)).map((s) => ({
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
          {r.city && routesTo(r.city.slug).length > 0 && (
            <Section title={`How to reach ${where} from your city`}>
              <ChipLinks
                links={routesTo(r.city.slug).map((o) => ({
                  label: `${o.origin.name} to ${where} (${o.dist.km.toLocaleString("en-IN")} km)`,
                  href: guideUrl(d.slug, r.city!.slug, "how-to-reach", o.slug),
                }))}
              />
            </Section>
          )}
        </>
      );
    } else if (r.section === "local-food" || r.section === "culture-and-heritage") {
      main = (
        <Section title={title}>
          {sec?.intro ? <Prose text={sec.intro} /> : <ContentPending topic={title.toLowerCase()} />}
        </Section>
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
    // Lateral links: the same guide for the other places in this destination
    // (only where that guide has content), so long-tail pages link to each other.
    const section = r.section;
    const siblings = (
      await Promise.all(
        d.cities
          .filter((c) => c.id !== r.city?.id)
          .map(async (c) => ((await availableSections(d.id, c.id, c.content)).has(section) ? c : null)),
      )
    ).filter((c): c is NonNullable<typeof c> => c !== null);
    main = (
      <>
        {main}
        <Blocks blocks={sec?.blocks} />
        {siblings.length > 0 && (
          <Section title={`${GUIDE_SECTIONS.find((g) => g.slug === section)!.name}: More Places in ${d.name}`}>
            <ChipLinks
              links={siblings.map((c) => ({ label: sectionLabel(section, c.name), href: guideUrl(d.slug, c.slug, section) }))}
            />
          </Section>
        )}
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

  // Topic cluster: link this page down to the articles about the same place.
  let articles: React.ReactNode = null;
  if (r.kind === "overview" && !r.city) {
    const { groups } = clusterByCategory(d.slug);
    articles = <ArticleCluster title={`${d.name} travel guides and itineraries`} groups={groups} />;
  } else if (r.kind === "overview" && r.city) {
    const { groups, total } = clusterByCategory(d.slug, r.city.slug);
    const more = postsForDestination(d.slug).filter((p) => p.city !== r.city!.slug).length;
    articles = (
      <>
        <ArticleCluster title={`${r.city.name} travel guides`} groups={groups} />
        <TopicArticles
          title={total > 0 ? `More ${d.name} guides` : `${d.name} travel guides`}
          posts={postsForPlace({ destination: d.slug, limit: 4 }).filter((p) => p.city !== r.city!.slug)}
          moreHref={more > 4 ? `${guideUrl(d.slug)}#travel-guides` : undefined}
          moreLabel={`All ${d.name} guides`}
        />
      </>
    );
  } else if (r.kind === "section") {
    const posts = postsForPlace({ destination: d.slug, city: r.city?.slug, section: r.section, strict: true });
    articles = <TopicArticles title={`${title}: in-depth guides`} posts={posts} moreHref={`${guideUrl(d.slug)}#travel-guides`} moreLabel={`All ${d.name} guides`} />;
  } else if (r.kind === "place") {
    const posts = postsForPlace({ destination: d.slug, city: r.city?.slug, mention: r.place.name, limit: 4 });
    articles = <TopicArticles title={`Guides that cover ${r.place.name}`} posts={posts} />;
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
          <ChipLinks links={sectionLinks} scroll />
        </div>
      </PageHero>
      <TwoColumn
        main={
          <>
            {main}
            {articles}
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
