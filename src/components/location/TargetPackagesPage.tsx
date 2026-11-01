import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { webPageSchema } from "@/lib/schema";
import type { GuideContent, Itinerary } from "@/lib/locations";
import {
  CardLinks,
  ChipLinks,
  Faqs,
  GuideBody,
  HowToReach,
  PackageGrid,
  QuickFacts,
  Seasons,
  PageHero,
  QuoteBox,
  Section,
  TwoColumn,
  type Crumb,
  Blocks,
  ItineraryCards,
  Prose,
} from "@/components/location/blocks";
import TrustTicks from "@/components/TrustTicks";
import { formatINR } from "@/lib/format";
import { GUIDE_SECTIONS, ORIGIN_CITIES, THEMES } from "@/data/locations";
import {
  getPackagesFor,
  readContent,
  robotsFor,
  targetName,
  targetSlug,
  type Target,
  availableSections,
} from "@/lib/locations";
import { SITE_URL } from "@/lib/site";
import { fromToUrl, guideUrl, themeUrl, tourPackagesUrl } from "@/lib/urls";

type Theme = (typeof THEMES)[number];
type Origin = (typeof ORIGIN_CITIES)[number];

// One template for every "packages" landing page:
//   /tour-packages/{target}                 (no theme, no origin)
//   /{theme-prefix}/{target}                (theme)
//   /tour-packages/from-{origin}-to-{target} (origin)
export type PackagesPageVariant = { theme?: Theme; origin?: Origin };

const year = () => new Date().getFullYear();

export function packagesPageTitle(t: Target, v: PackagesPageVariant) {
  const name = targetName(t);
  if (v.theme) return `${name} ${v.theme.name} Packages`;
  if (v.origin) return `${name} Tour Packages from ${v.origin.name}`;
  return `${name} Tour Packages`;
}

export function packagesPagePath(t: Target, v: PackagesPageVariant) {
  const slug = targetSlug(t);
  if (v.theme) return themeUrl(v.theme.prefix, slug);
  if (v.origin) return fromToUrl(v.origin.slug, slug);
  return tourPackagesUrl(slug);
}

function statusOf(t: Target) {
  return t.type === "city" ? t.city.contentStatus : t.destination.contentStatus;
}

// Theme/origin slices reuse the base page's copy, so they are only indexable
// once they have enough of their own packages to be a distinct page.
const MIN_PACKAGES_FOR_SLICE = 3;

// The packages-page copy that applies to this variant: the base page's, or a
// theme/origin slice's own.
function sliceContent(c: GuideContent, v: PackagesPageVariant) {
  if (v.origin) return c.packages?.fromOrigins?.[v.origin.slug];
  if (v.theme) return c.packages?.themes?.[v.theme.prefix];
  return c.packages;
}

export async function packagesPageMetadata(t: Target, v: PackagesPageVariant): Promise<Metadata> {
  const title = `${packagesPageTitle(t, v)} ${year()}: Customise & Compare Quotes`;
  const isSlice = Boolean(v.theme || v.origin);
  const own = readContent(t.type === "city" ? t.city.content : t.destination.content);
  const sliceCopy = sliceContent(own, v);
  const sliceReady =
    !isSlice ||
    Boolean(sliceCopy?.intro) ||
    // Minor departure cities are indexable only with their own copy.
    (!(v.origin && !v.origin.major) && (await getPackagesFor(t, { themeTag: v.theme?.tag, take: MIN_PACKAGES_FOR_SLICE })).length >=
      MIN_PACKAGES_FOR_SLICE);
  const fallbackDescription = `Plan your ${targetName(t)} trip${
    v.origin ? ` from ${v.origin.name}` : ""
  } with verified local travel agents. Share your dates and budget, get up to 3 customised${
    v.theme ? ` ${v.theme.name.toLowerCase()}` : ""
  } package quotes and book the one that fits.`;
  const description = (!isSlice && own.packagesDescription) || fallbackDescription;
  const path = packagesPagePath(t, v);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
    robots: sliceReady ? robotsFor(statusOf(t)) : { index: false, follow: true },
  };
}

export default async function TargetPackagesPage({
  target: t,
  variant: v,
}: {
  target: Target;
  variant: PackagesPageVariant;
}) {
  const name = targetName(t);
  const slug = targetSlug(t);
  const dest = t.destination;
  const content = readContent(t.type === "city" ? t.city.content : dest.content);
  const packages = await getPackagesFor(t, { themeTag: v.theme?.tag });
  const heading = packagesPageTitle(t, v);
  const copy = sliceContent(content, v);
  const itineraries = (copy as { itineraries?: Itinerary[] } | undefined)?.itineraries;
  const faqs = copy?.faqs ?? (!v.theme && !v.origin ? content.faqs : undefined);
  const isCircuit = t.type === "circuit";
  const fromPrice = packages.length > 0 ? Math.min(...packages.map((p) => p.price)) : null;
  // Last change to this page's copy or to any package listed on it.
  const updated = new Date(
    Math.max(
      (t.type === "city" ? t.city.updatedAt : dest.updatedAt).getTime(),
      ...packages.map((p) => p.updatedAt.getTime()),
    ),
  );

  const crumbs: Crumb[] = [{ name: "Tour Packages", href: tourPackagesUrl() }];
  if (t.type === "city") crumbs.push({ name: dest.name, href: tourPackagesUrl(dest.slug) });
  if (v.theme) {
    crumbs.push({ name, href: tourPackagesUrl(slug) });
    crumbs.push({ name: `${v.theme.name} Packages`, href: packagesPagePath(t, v) });
  } else if (v.origin) {
    crumbs.push({ name, href: tourPackagesUrl(slug) });
    crumbs.push({ name: `From ${v.origin.name}`, href: packagesPagePath(t, v) });
  } else {
    crumbs.push({ name, href: tourPackagesUrl(slug) });
  }

  // "Places to explore": cities of a destination, stops of a circuit, places of a city.
  const explore =
    t.type === "destination"
      ? dest.cities.length > 0
        ? dest.cities.map((c) => ({
            title: c.name,
            href: tourPackagesUrl(c.slug),
            meta: "Packages",
          }))
        : dest.places.map((p) => ({ title: p.name, href: guideUrl(dest.slug, p.path) }))
      : t.type === "circuit"
        ? dest.circuitStops.flatMap((s) =>
            s.city
              ? [{ title: s.city.name, href: tourPackagesUrl(s.city.slug), meta: s.city.destination.name }]
              : s.destination
                ? [{ title: s.destination.name, href: tourPackagesUrl(s.destination.slug) }]
                : [],
          )
        : t.city.places
            .filter((p) => p.kind === "PLACE")
            .map((p) => ({ title: p.name, href: guideUrl(dest.slug, p.path) }));

  const themeLinks = THEMES.map((th) => ({
    label: `${th.name}`,
    href: themeUrl(th.prefix, slug),
    active: v.theme?.prefix === th.prefix,
  }));

  const guideCity = t.type === "city" ? t.city.slug : undefined;
  const guideSections = isCircuit
    ? new Set<string>()
    : await availableSections(dest.id, t.type === "city" ? t.city.id : null, t.type === "city" ? t.city.content : dest.content);

  return (
    <div>
      <JsonLd
        data={webPageSchema({
          path: packagesPagePath(t, v),
          name: heading,
          type: "CollectionPage",
          dateModified: updated,
          about: {
            "@type": "TouristDestination",
            name,
            ...(t.type === "city" && { containedInPlace: { "@type": "Place", name: dest.officialName ?? dest.name } }),
          },
        })}
      />
      {packages.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: heading,
            numberOfItems: packages.length,
            itemListElement: packages.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE_URL}/packages/${p.slug}`,
              name: p.title,
            })),
          }}
        />
      )}
      <PageHero
        crumbs={crumbs}
        title={heading}
        updated={updated}
        subtitle={`Share your dates, group and budget once. Up to 3 verified local agents send customised ${name} quotes, you compare and book the one you like.`}
        badges={[
          dest.isInternational ? "International" : "India",
          ...(dest.premium ? ["Premium destination"] : []),
          ...(packages.length > 0 ? [`${packages.length} ready packages`] : []),
          ...(fromPrice ? [`From ${formatINR(fromPrice)}`] : []),
        ]}
      >
        <TrustTicks className="mt-3" />
        {!isCircuit && (
          <div className="mt-5">
            <ChipLinks links={[{ label: "All", href: tourPackagesUrl(slug), active: !v.theme }, ...themeLinks]} scroll />
          </div>
        )}
      </PageHero>

      <TwoColumn
        main={
          <>
            <Section
              title={`${packages.length > 0 ? `Showing ${packages.length} ` : ""}${heading}`}
              subtitle="Every package can be customised: hotels, days, transport and activities."
            >
              <PackageGrid
                compact={Boolean(v.origin)}
                packages={packages}
                emptyText={`No ready-made ${name}${heading.slice(name.length).toLowerCase()} are listed yet. Share your dates, group and budget, and up to 3 verified local agents build one for you${
                  itineraries?.length ? ", or start from a sample plan below" : ""
                }.`}
              />
            </Section>

            {itineraries && itineraries.length > 0 && (
              <Section tint="warm" title={`${name} itinerary`} subtitle="Sample plans agents start from. Ask for quotes on any of them.">
                <ItineraryCards itineraries={itineraries} />
              </Section>
            )}

            {!v.theme && !v.origin && (content.intro || content.highlights) && (
              <Section title={`About ${name} tour packages`}>
                <GuideBody content={content} topic={name} />
                <div className="mt-4">
                  <QuickFacts
                    facts={[
                      { label: "Ideal trip length", value: content.idealDuration },
                      { label: "Best months", value: content.bestMonths },
                      { label: "Main gateway", value: content.gateway },
                    ]}
                  />
                </div>
              </Section>
            )}

            {copy?.intro && (
              <Section
                title={
                  v.origin
                    ? `About ${name} tour packages from ${v.origin.name}`
                    : v.theme
                      ? `Planning your ${heading.replace(/ Packages?$/, "").replace(/ Tour$/, "")} trip`
                      : `${name} holiday packages, tours and trip plans`
                }
              >
                <Prose text={copy.intro} />
              </Section>
            )}
            <Blocks blocks={copy?.blocks} />

            {explore.length > 0 && (
              <Section
                title={
                  t.type === "city" ? `Places to visit in ${name}` : `Places to explore on your ${name} tour`
                }
              >
                <CardLinks items={explore} />
              </Section>
            )}

            {!v.origin && !isCircuit && t.type === "destination" && (
              <Section title={`${name} tour packages from top cities`}>
                <ChipLinks
                  links={ORIGIN_CITIES.filter(
                    (o) => o.slug !== slug && (o.major || Boolean(content.packages?.fromOrigins?.[o.slug])),
                  ).map((o) => ({
                    label: `From ${o.name}`,
                    href: fromToUrl(o.slug, slug),
                  }))}
                />
              </Section>
            )}

            {!isCircuit && (
              <Section title={`${name} travel guide`}>
                <ChipLinks
                  links={[
                    { label: `${name} Tourism`, href: guideUrl(dest.slug, guideCity) },
                    ...GUIDE_SECTIONS.filter((s) => guideSections.has(s.slug)).map((s) => ({
                      label: s.name,
                      href: guideUrl(dest.slug, guideCity, s.slug),
                    })),
                  ]}
                />
              </Section>
            )}

            {!v.theme && !v.origin && content.seasons && content.seasons.length > 0 && (
              <Section title={`Best time for a ${name} tour`}>
                <Seasons seasons={content.seasons} />
              </Section>
            )}

            {!v.theme && !v.origin && content.howToReach && (
              <Section title={`How to reach ${name}`}>
                <HowToReach howToReach={content.howToReach} />
              </Section>
            )}

            <Section tint="green" title="How booking works on Tavel Package">
              <ol className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Share your plan", `Tell us your ${name} dates, group size, hotel category and budget in the form. It takes about a minute.`],
                  ["Compare up to 3 quotes", "Up to 3 verified travel agents who operate this destination call you and send customised itineraries with prices."],
                  ["Customise and book", "Change hotels, days or activities with the agent you prefer and book directly with them. You are never obliged to book."],
                ].map(([title, body], i) => (
                  <li key={title} className="rounded-xl bg-white p-4">
                    <p className="inline-block rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">Step {i + 1}</p>
                    <p className="mt-1 font-bold text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{body}</p>
                  </li>
                ))}
              </ol>
            </Section>

            {faqs && faqs.length > 0 && (
              <Section title={`${heading} FAQs`}>
                <Faqs faqs={faqs} />
              </Section>
            )}

            {t.type === "city" && (
              <p className="py-4 text-sm text-ink-soft">
                Planning more of {dest.name}?{" "}
                <Link href={tourPackagesUrl(dest.slug)} className="font-semibold text-brand hover:underline">
                  See all {dest.name} tour packages
                </Link>
              </p>
            )}
          </>
        }
        side={
          <QuoteBox
            destinationId={dest.id}
            cityId={t.type === "city" ? t.city.id : undefined}
            title={`Get ${name} quotes from verified agents`}
          />
        }
      />
    </div>
  );
}
