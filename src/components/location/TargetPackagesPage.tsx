import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
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
} from "@/components/location/blocks";
import { GUIDE_SECTIONS, ORIGIN_CITIES, THEMES } from "@/data/locations";
import {
  getPackagesFor,
  readContent,
  robotsFor,
  targetName,
  targetSlug,
  type Target,
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

export async function packagesPageMetadata(t: Target, v: PackagesPageVariant): Promise<Metadata> {
  const title = `${packagesPageTitle(t, v)} ${year()}: Customise & Compare Quotes`;
  const isSlice = Boolean(v.theme || v.origin);
  const own = readContent(t.type === "city" ? t.city.content : t.destination.content);
  const sliceReady =
    !isSlice ||
    (await getPackagesFor(t, { themeTag: v.theme?.tag, take: MIN_PACKAGES_FOR_SLICE })).length >=
      MIN_PACKAGES_FOR_SLICE;
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
  const isCircuit = t.type === "circuit";

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

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name,
          url: `${SITE_URL}${packagesPagePath(t, v)}`,
          ...(t.type === "city"
            ? { containedInPlace: { "@type": "Place", name: dest.officialName ?? dest.name } }
            : {}),
        }}
      />
      <PageHero
        crumbs={crumbs}
        title={heading}
        subtitle={`Share your dates, group and budget once. Up to 3 verified local agents send customised ${name} quotes, you compare and book the one you like.`}
        badges={[
          dest.isInternational ? "International" : "India",
          ...(dest.premium ? ["Premium destination"] : []),
          `${packages.length} ready packages`,
        ]}
      >
        {!isCircuit && (
          <div className="mt-5">
            <ChipLinks links={[{ label: "All", href: tourPackagesUrl(slug), active: !v.theme }, ...themeLinks]} />
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
                packages={packages}
                emptyText={`No ready-made ${heading.toLowerCase()} are listed yet. Tell us your plan in the form and agents will build one for you.`}
              />
            </Section>

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
                  links={ORIGIN_CITIES.filter((o) => o.slug !== slug).map((o) => ({
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
                    ...GUIDE_SECTIONS.map((s) => ({
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

            <Section title="How booking works on TavelPackage">
              <ol className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Share your plan", `Tell us your ${name} dates, group size, hotel category and budget in the form. It takes about a minute.`],
                  ["Compare up to 3 quotes", "Up to 3 verified travel agents who operate this destination call you and send customised itineraries with prices."],
                  ["Customise and book", "Change hotels, days or activities with the agent you prefer and book directly with them. You are never obliged to book."],
                ].map(([title, body], i) => (
                  <li key={title} className="rounded-xl border border-zinc-200 bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-brand">Step {i + 1}</p>
                    <p className="mt-1 font-bold text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{body}</p>
                  </li>
                ))}
              </ol>
            </Section>

            {!v.theme && !v.origin && content.faqs && content.faqs.length > 0 && (
              <Section title={`${name} tour FAQs`}>
                <Faqs faqs={content.faqs} />
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
