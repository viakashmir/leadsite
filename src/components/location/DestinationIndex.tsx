import Link from "next/link";
import { ChipLinks, Faqs, PageHero, QuoteBox, Section, TwoColumn, type Crumb } from "@/components/location/blocks";
import { THEMES } from "@/data/locations";
import { HUB_FAQS } from "@/data/hub-faqs";
import JsonLd from "@/components/JsonLd";
import { webPageSchema } from "@/lib/schema";
import { getCircuits, getDestinationsByZone } from "@/lib/locations";
import { themeUrl, tourPackagesUrl } from "@/lib/urls";
import { linkableTest } from "@/lib/indexable";

// Zone-by-zone list of destinations. Used by /tour-packages, /tour-packages/india,
// /tour-packages/international and the theme indexes (/honeymoon-packages...).
export default async function DestinationIndex({
  crumbs,
  title,
  subtitle,
  scope,
  linkFor = (slug) => tourPackagesUrl(slug),
  showThemes = true,
  only,
}: {
  crumbs: Crumb[];
  title: string;
  subtitle: string;
  scope?: "india" | "international";
  linkFor?: (slug: string) => string;
  showThemes?: boolean;
  // When set, list only these slugs (theme indexes: slices that are real pages).
  only?: Set<string>;
}) {
  const faqs = HUB_FAQS[crumbs[crumbs.length - 1].href];
  const [zones, circuits] = await Promise.all([getDestinationsByZone(), getCircuits()]);
  // Only destinations whose page is indexable (noindex pages are never linked).
  const linkable = await linkableTest();
  const shownZones = (scope ? zones.filter((z) => z.scope === scope) : zones)
    .map((z) => ({ ...z, destinations: z.destinations.filter((d) => (!only || only.has(d.slug)) && linkable(linkFor(d.slug))) }))
    .filter((z) => z.destinations.length > 0);
  const shownCircuits = circuits.filter(
    (c) => (!scope || (scope === "international") === c.isInternational) && (!only || only.has(c.slug)),
  );

  return (
    <div>
      <JsonLd
        data={webPageSchema({ path: crumbs[crumbs.length - 1].href, name: title, description: subtitle, type: "CollectionPage" })}
      />
      <PageHero crumbs={crumbs} title={title} subtitle={subtitle}>
        {!scope && (
          <div className="mt-5 flex flex-wrap gap-2">
            <ChipLinks
              links={[
                { label: "India", href: tourPackagesUrl("india") },
                { label: "International", href: tourPackagesUrl("international") },
              ]}
            />
          </div>
        )}
      </PageHero>
      <TwoColumn
        main={
          <>
            {shownZones.map((z) => (
              <Section key={z.zone} title={z.name}>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {z.destinations.map((d) => (
                    <Link
                      key={d.slug}
                      href={linkFor(d.slug)}
                      className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
                    >
                      {d.name}
                      {d.premium && (
                        <span className="ml-2 rounded-full bg-brand-tint px-2 py-0.5 text-[10px] font-bold text-brand">
                          Premium
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </Section>
            ))}
            {shownCircuits.length > 0 && (
              <Section title="Popular circuits">
                <ChipLinks links={shownCircuits.map((c) => ({ label: c.name, href: linkFor(c.slug) }))} />
              </Section>
            )}
            {showThemes && (
              <Section title="Browse by holiday theme">
                <ChipLinks links={THEMES.map((t) => ({ label: `${t.name} Packages`, href: themeUrl(t.prefix) }))} />
              </Section>
            )}
            {faqs && (
              <Section title={`${title} FAQs`}>
                <Faqs faqs={faqs} />
              </Section>
            )}
          </>
        }
        side={<QuoteBox title="Not sure where to go? Ask our experts" />}
      />
    </div>
  );
}
