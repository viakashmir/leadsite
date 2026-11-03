import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { packagePhoto } from "@/lib/media";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getDestinationsWithCities } from "@/lib/data";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { formatDate, formatINR } from "@/lib/format";
import { EDITORIAL_TEAM, SITE_URL } from "@/lib/site";
import { ORG_ID, webPageSchema } from "@/lib/schema";
import TrustTicks from "@/components/TrustTicks";
import { Faqs } from "@/components/location/blocks";

// No timed rebuilds: every timed ISR rebuild is a billed ISR write, and
// crawlers hitting thousands of pages hourly blocked the Vercel account.
// Pages refresh on deploy and on demand (admin edits, new leads, unlocks).
export const revalidate = false;

async function getPackage(slug: string) {
  // Unpublished packages (e.g. from agents awaiting verification) stay hidden.
  // Only the agent's public name is loaded — never their account row.
  return prisma.package.findFirst({
    where: { slug, published: true },
    include: { destination: true, city: true, agent: { select: { companyName: true } } },
  });
}

export async function generateStaticParams() {
  const packages = await prisma.package.findMany({ where: { published: true }, select: { slug: true } });
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getPackage(slug);
  if (!pkg) return {};

  return {
    title: pkg.title,
    description: pkg.summary,
    alternates: { canonical: `/packages/${pkg.slug}` },
    openGraph: { title: pkg.title, description: pkg.summary, url: `/packages/${pkg.slug}` },
  };
}

export default async function PackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = await getPackage(slug);
  if (!pkg) notFound();

  const allDestinations = await getDestinationsWithCities();
  const photo = packagePhoto(pkg);
  const tags = pkg.theme.split(",").map((t) => t.trim()).filter(Boolean);
  // Lines are usually "Day 1: ..."; split the label off so it can be styled.
  const itineraryDays = pkg.itinerary
    .split("\n")
    .filter(Boolean)
    .map((line, i) => {
      const m = /^\s*(Days?\s*\d+(?:\s*[-\u2013]\s*\d+)?)\s*[:.]\s*(.*)$/i.exec(line);
      return m ? { label: m[1], text: m[2] } : { label: `Day ${i + 1}`, text: line };
    });

  // Answer-style FAQ built only from this package's own data, so it is always
  // accurate. Search and AI answer engines quote this format directly.
  const place = pkg.city?.name ?? pkg.destination.name;
  const faqs = [
    {
      q: `How much does the ${pkg.title} cost?`,
      a: `It starts from ${formatINR(pkg.price)} per person for ${pkg.durationNights} nights and ${pkg.durationDays} days. The final price depends on your dates, hotel category and group size; up to 3 verified agents send you quotes to compare.`,
    },
    {
      q: `How many days do I need for this ${pkg.destination.name} trip?`,
      a: `This plan is ${pkg.durationDays} days and ${pkg.durationNights} nights, based around ${place}. Agents can add or remove days to suit your travel dates.`,
    },
    {
      q: "What does the day-by-day plan cover?",
      a: itineraryDays.map((d) => `${d.label}: ${d.text}`).join(" "),
    },
    ...(tags.length
      ? [{ q: "Who is this package best for?", a: `It suits ${tags.join(", ").toLowerCase()} travellers. Tell the agents about your group and they adjust hotels and pace.` }]
      : []),
  ];

  return (
    <article>
      <JsonLd
        data={webPageSchema({
          path: `/packages/${pkg.slug}`,
          name: pkg.title,
          description: pkg.summary,
          dateModified: pkg.updatedAt,
          datePublished: pkg.createdAt,
          breadcrumb: false,
          about: { "@type": "TouristDestination", name: pkg.city?.name ?? pkg.destination.name },
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Packages", item: `${SITE_URL}/packages` },
            { "@type": "ListItem", position: 3, name: pkg.title, item: `${SITE_URL}/packages/${pkg.slug}` },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: pkg.title,
          description: pkg.summary,
          url: `${SITE_URL}/packages/${pkg.slug}`,
          touristType: pkg.theme.split(",").filter(Boolean),
          image: photo ? (photo.startsWith("http") ? photo : `${SITE_URL}${photo}`) : undefined,
          itinerary: {
            "@type": "ItemList",
            numberOfItems: itineraryDays.length,
            itemListElement: itineraryDays.map((d, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: d.label,
              description: d.text,
            })),
          },
          provider: pkg.agent
            ? { "@type": "TravelAgency", name: pkg.agent.companyName }
            : { "@id": ORG_ID },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: pkg.price,
            availability: "https://schema.org/InStock",
            url: `${SITE_URL}/packages/${pkg.slug}`,
            description: "Starting price per person",
          },
        }}
      />

      {photo && (
        <div className="mx-auto max-w-6xl px-4 pt-4 sm:pt-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-zinc-100 sm:aspect-[21/8]">
            <Image src={photo} alt={pkg.title} fill sizes="(min-width: 1152px) 1120px, 100vw" priority className="object-cover" />
            {tags[0] && (
              <span className="absolute left-3 top-3 rounded-md bg-brand px-2 py-1 text-xs font-semibold text-white">{tags[0]}</span>
            )}
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-5 lg:grid-cols-3">
        <div className="min-w-0 lg:col-span-2">
          <h1 className="font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-[28px]">{pkg.title}</h1>
          <div className="mt-2.5 flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold text-white">
              {pkg.durationNights}N/{pkg.durationDays}D
            </span>
            <span className="text-ink-soft">
              {pkg.destination.name}
              {pkg.city ? ` · ${pkg.city.name}` : ""}
            </span>
          </div>
          <p className="mt-2 text-xs text-ink-soft">
            Listed by <span className="font-semibold text-ink">{pkg.agent?.companyName ?? EDITORIAL_TEAM}</span>
            <span className="mx-1.5 text-zinc-300">·</span>
            Updated <time dateTime={pkg.updatedAt.toISOString()}>{formatDate(pkg.updatedAt)}</time>
          </p>
          <nav aria-label="Breadcrumb" className="mt-2.5 text-xs text-ink-soft">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span className="mx-1.5 text-zinc-300">/</span>
            <Link href="/tour-packages" className="hover:text-brand">Tour Packages</Link>
            <span className="mx-1.5 text-zinc-300">/</span>
            <Link href={`/tour-packages/${pkg.destination.slug}`} className="hover:text-brand">{pkg.destination.name}</Link>
          </nav>

          <section className="mt-5 rounded-[14px] bg-[#fdf8f3] p-4 sm:p-6">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">Overview</h2>
            <p className="mt-2 leading-relaxed text-ink">{pkg.summary}</p>
            <TrustTicks className="mt-3" />
          </section>

          <section className="mt-4 rounded-[14px] bg-[#fdf8f3] p-4 sm:p-6">
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">Itinerary</h2>
            <ol className="mt-3 space-y-2">
              {itineraryDays.map((day, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-3 text-sm text-ink">
                  <span className="mt-0.5 shrink-0 rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                    {day.label}
                  </span>
                  <span className="leading-relaxed">{day.text}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-4">
            <h2 className="mb-3 text-xl font-bold tracking-tight text-ink sm:text-2xl">Questions About This Package</h2>
            <Faqs faqs={faqs} />
          </section>

          {tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-ink">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {pkg.agent && (
            <p className="mt-5 text-xs text-ink-soft">This package is listed by {pkg.agent.companyName}.</p>
          )}
        </div>

        <div id="get-quotes" className="scroll-mt-20 lg:sticky lg:top-20 lg:self-start">
          <div className="mb-3 rounded-[14px] bg-zinc-50 p-4">
            <p className="flex items-center gap-3 text-xs text-ink-soft">
              <span>{pkg.durationNights}N/{pkg.durationDays}D</span>
              <span>{pkg.destination.name}</span>
            </p>
            <p className="mt-1.5 text-ink">
              <span className="text-2xl font-bold">{formatINR(pkg.price)}</span>{" "}
              <span className="text-sm text-ink-soft">per person, starting price</span>
            </p>
            <p className="mt-0.5 text-xs text-ink-soft">Agents tailor hotels, days and transport to your plan.</p>
          </div>
          <EnquiryForm
            destinations={allDestinations}
            defaultDestinationId={pkg.destinationId}
            defaultCityId={pkg.cityId ?? undefined}
            sourcePackageId={pkg.id}
            dense
            title="Get a Custom Quote for this Package"
          />
        </div>
      </div>
    </article>
  );
}
