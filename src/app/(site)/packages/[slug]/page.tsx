import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { isPhoto } from "@/lib/media";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getDestinationsWithCities } from "@/lib/data";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { formatINR } from "@/lib/format";
import { SITE_URL } from "@/lib/site";
import TrustTicks from "@/components/TrustTicks";

export const revalidate = 3600;

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
  // Lines are usually "Day 1: ..."; split the label off so it can be styled.
  const itineraryDays = pkg.itinerary
    .split("\n")
    .filter(Boolean)
    .map((line, i) => {
      const m = /^\s*(Day\s*\d+)\s*[:.-]\s*(.*)$/i.exec(line);
      return m ? { label: m[1], text: m[2] } : { label: `Day ${i + 1}`, text: line };
    });

  return (
    <div>
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
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: pkg.price,
            availability: "https://schema.org/InStock",
          },
        }}
      />

      <section className="relative overflow-hidden bg-zinc-800 py-8">
        {isPhoto(pkg.heroImage) && (
          <Image src={pkg.heroImage} alt={pkg.title} fill sizes="100vw" priority className="object-cover" />
        )}
        <div className="absolute inset-0 bg-zinc-900/60" />
        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="text-xs text-zinc-300">
            <Link href="/">Home</Link> / <Link href="/tour-packages">Tour Packages</Link> /{" "}
            <Link href={`/tour-packages/${pkg.destination.slug}`}>{pkg.destination.name}</Link>
          </nav>
          <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{pkg.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-200">{pkg.summary}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span className="rounded-full bg-white px-3 py-1 font-medium text-zinc-700 shadow-sm">
              {pkg.durationNights}N / {pkg.durationDays}D
            </span>
            <span className="rounded-full bg-white px-3 py-1 font-medium text-zinc-700 shadow-sm">
              {pkg.destination.name}
              {pkg.city ? ` · ${pkg.city.name}` : ""}
            </span>
            <span className="rounded-full bg-gold px-3 py-1 font-semibold text-royal shadow-sm">
              Starting from {formatINR(pkg.price)}
            </span>
          </div>
          <TrustTicks dark className="mt-4" />
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-zinc-900">Itinerary</h2>
          <ol className="mt-4 space-y-2">
            {itineraryDays.map((day, i) => (
              <li key={i} className="flex gap-3 rounded-xl border border-zinc-200 bg-white p-3 text-sm text-ink">
                <span className="w-12 shrink-0 font-bold text-gold">{day.label}</span>
                <span className="leading-relaxed">{day.text}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-2">
            {pkg.theme
              .split(",")
              .filter(Boolean)
              .map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-tint px-3 py-1 text-xs font-medium text-brand"
                >
                  {tag}
                </span>
              ))}
          </div>

          {pkg.agent && (
            <p className="mt-6 text-xs text-zinc-500">
              This package is listed by {pkg.agent.companyName}.
            </p>
          )}
        </div>

        <div id="get-quotes" className="scroll-mt-20 lg:sticky lg:top-20 lg:self-start">
          <div className="mb-3 flex items-center justify-between rounded-2xl border border-gold-soft bg-ivory px-4 py-3">
            <div className="leading-tight">
              <p className="text-[11px] text-ink-soft">Starting from</p>
              <p className="text-2xl font-bold text-ink">{formatINR(pkg.price)}</p>
            </div>
            <p className="text-right text-xs leading-snug text-ink-soft">
              {pkg.durationNights}N / {pkg.durationDays}D
              <br />
              Customise hotels &amp; days
            </p>
          </div>
          <EnquiryForm
            destinations={allDestinations}
            defaultDestinationId={pkg.destinationId}
            defaultCityId={pkg.cityId ?? undefined}
            sourcePackageId={pkg.id}
            title="Get a Custom Quote for this Package"
          />
        </div>
      </div>
    </div>
  );
}
