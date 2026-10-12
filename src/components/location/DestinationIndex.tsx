import Link from "next/link";
import { ChipLinks, PageHero, QuoteBox, Section, TwoColumn, type Crumb } from "@/components/location/blocks";
import { THEMES } from "@/data/locations";
import { getCircuits, getDestinationsByZone } from "@/lib/locations";
import { themeUrl, tourPackagesUrl } from "@/lib/urls";

// Zone-by-zone list of destinations. Used by /tour-packages, /tour-packages/india,
// /tour-packages/international and the theme indexes (/honeymoon-packages...).
export default async function DestinationIndex({
  crumbs,
  title,
  subtitle,
  scope,
  linkFor = (slug) => tourPackagesUrl(slug),
  showThemes = true,
}: {
  crumbs: Crumb[];
  title: string;
  subtitle: string;
  scope?: "india" | "international";
  linkFor?: (slug: string) => string;
  showThemes?: boolean;
}) {
  const [zones, circuits] = await Promise.all([getDestinationsByZone(), getCircuits()]);
  const shownZones = scope ? zones.filter((z) => z.scope === scope) : zones;
  const shownCircuits = circuits.filter(
    (c) => !scope || (scope === "international") === c.isInternational,
  );

  return (
    <div>
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
                        <span className="ml-2 rounded-full bg-brand-tint px-2 py-0.5 text-[10px] font-bold uppercase text-brand">
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
          </>
        }
        side={<QuoteBox title="Not sure where to go? Ask our experts" />}
      />
    </div>
  );
}
