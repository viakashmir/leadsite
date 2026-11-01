import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { ChipLinks, Faqs, PackageGrid, PageHero, Prose, QuoteBox, Section, TwoColumn } from "@/components/location/blocks";
import { getPackagesFor, readContent, resolveTarget, robotsFor, targetName, type Target } from "@/lib/locations";
import { durationBySlug, durationsFor, type Duration } from "@/lib/durations";
import { webPageSchema } from "@/lib/schema";
import { guideUrl, tourPackagesUrl } from "@/lib/urls";

export const revalidate = 3600;

export async function generateStaticParams() {
  return [];
}

async function resolve(slug: string, durationSlug: string) {
  const target = await resolveTarget(slug);
  const duration = durationBySlug(durationSlug);
  if (!target || !duration || target.type === "circuit") return null;
  const content = readContent(target.type === "city" ? target.city.content : target.destination.content);
  if (!durationsFor(content).some((d) => d.slug === duration.slug)) return null;
  return { target, duration, content };
}

const title = (t: Target, d: Duration) => `${targetName(t)} ${d.nights} Nights ${d.days} Days Tour Package`;
const path = (t: Target, d: Duration) =>
  `${tourPackagesUrl(t.type === "city" ? t.city.slug : t.destination.slug)}/${d.slug}`;

export async function generateMetadata({ params }: PageProps<"/tour-packages/[slug]/[duration]">): Promise<Metadata> {
  const { slug, duration } = await params;
  const r = await resolve(slug, duration);
  if (!r) return {};
  const t = `${title(r.target, r.duration)} (${r.duration.label})`;
  const description = `Plan a ${r.duration.nights} nights ${r.duration.days} days ${targetName(r.target)} trip: how to split the days, what a ${r.duration.label} package includes, and up to 3 quotes from verified local agents.`;
  const status = r.target.type === "city" ? r.target.city.contentStatus : r.target.destination.contentStatus;
  return {
    title: t,
    description,
    alternates: { canonical: path(r.target, r.duration) },
    openGraph: { title: t, description, url: path(r.target, r.duration) },
    robots: robotsFor(status),
  };
}

export default async function DurationPage({ params }: PageProps<"/tour-packages/[slug]/[duration]">) {
  const { slug, duration } = await params;
  const r = await resolve(slug, duration);
  if (!r) notFound();
  const { target: t, duration: d, content } = r;
  const name = targetName(t);
  const dest = t.destination;
  const all = await getPackagesFor(t);
  const fitting = all.filter((p) => p.durationNights === d.nights);
  const itinerary = content.packages?.itineraries?.find((it) => it.title.startsWith(`${d.days}-day`));
  const places =
    t.type === "city" ? t.city.places.filter((p) => p.kind === "PLACE").map((p) => p.name) : dest.cities.map((c) => c.name);
  const others = durationsFor(content).filter((o) => o.slug !== d.slug);
  const updated = t.type === "city" ? t.city.updatedAt : dest.updatedAt;

  const faqs = [
    {
      q: `Is ${d.nights} nights enough for ${name}?`,
      a: content.idealDuration
        ? `Most ${name} trips run ${content.idealDuration}. A ${d.nights} nights ${d.days} days plan ${
            d.days < Number((content.idealDuration.match(/\d+/) ?? ["0"])[0]) ? "covers the highlights at a quick pace" : "covers the main sights comfortably"
          }${d.days >= 7 ? ", with time to add nearby places" : ""}.`
        : `It depends on how much you want to see; agents will suggest a plan for ${d.days} days.`,
    },
    {
      q: `What does a ${name} ${d.label} package include?`,
      a: `Usually ${d.nights} nights of hotels with breakfast, a private cab for transfers and sightseeing, and the main entry or permit arrangements. Flights or trains from your city are quoted separately or included on request.`,
    },
    {
      q: `When is the best time for a ${d.nights} nights ${name} trip?`,
      a: content.bestMonths ? `${content.bestMonths}.` : `Ask the agents for the best dates for your plan.`,
    },
  ];

  return (
    <article>
      <JsonLd
        data={webPageSchema({
          path: path(t, d),
          name: title(t, d),
          type: "CollectionPage",
          dateModified: updated,
          about: { "@type": "TouristDestination", name },
        })}
      />
      <PageHero
        crumbs={[
          { name: "Tour Packages", href: tourPackagesUrl() },
          { name: `${name} Tour Packages`, href: tourPackagesUrl(t.type === "city" ? t.city.slug : dest.slug) },
          { name: d.label, href: path(t, d) },
        ]}
        title={title(t, d)}
        subtitle={`A ${d.nights} nights ${d.days} days (${d.label}) ${name} trip, customised by up to 3 verified local agents.`}
        updated={updated}
      >
        {others.length > 0 && (
          <div className="mt-5">
            <ChipLinks
              scroll
              links={[d, ...others]
                .sort((a, b) => a.nights - b.nights)
                .map((o) => ({ label: o.label, href: path(t, o), active: o.slug === d.slug }))}
            />
          </div>
        )}
      </PageHero>
      <TwoColumn
        main={
          <>
            <Section title={`${d.nights} Nights ${d.days} Days ${name} Plan`}>
              {itinerary ? (
                <ol className="space-y-1.5">
                  {itinerary.days.map((day, i) => (
                    <li key={i} className="leading-relaxed text-ink">
                      <span className="font-semibold">Day {i + 1}:</span> {day}
                    </li>
                  ))}
                </ol>
              ) : (
                <Prose
                  text={`${content.packages?.intro ?? content.intro?.split("\n\n")[0] ?? ""}\n\nWith ${d.days} days, plan the first and last days for travel and spend the rest on ${
                    places.slice(0, 5).join(", ") || name
                  }. Agents adjust the order to your arrival point and season.`}
                />
              )}
            </Section>
            <Section title={`${name} ${d.label} Packages`}>
              <PackageGrid
                packages={fitting}
                emptyText={`No ready-made ${d.label} ${name} packages are listed yet. Share your dates and agents will build one for ${d.days} days.`}
              />
            </Section>
            <Section title={`Plan Your ${name} Trip`}>
              <p className="text-ink">
                See all{" "}
                <Link href={tourPackagesUrl(t.type === "city" ? t.city.slug : dest.slug)} className="font-semibold text-brand hover:underline">
                  {name} tour packages
                </Link>{" "}
                and the{" "}
                <Link href={guideUrl(dest.slug, t.type === "city" ? t.city.slug : undefined)} className="font-semibold text-brand hover:underline">
                  {name} travel guide
                </Link>
                .
              </p>
            </Section>
            <Section title={`${name} ${d.label} Package FAQs`}>
              <Faqs faqs={faqs} />
            </Section>
          </>
        }
        side={
          <QuoteBox
            destinationId={dest.id}
            cityId={t.type === "city" ? t.city.id : undefined}
            title={`Get ${d.label} ${name} quotes`}
          />
        }
      />
    </article>
  );
}
