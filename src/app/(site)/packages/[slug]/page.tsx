import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getDestinationsWithCities } from "@/lib/data";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { formatINR } from "@/lib/format";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

async function getPackage(slug: string) {
  return prisma.package.findUnique({
    where: { slug },
    include: { destination: true, city: true, agent: true },
  });
}

export async function generateStaticParams() {
  const packages = await prisma.package.findMany({ select: { slug: true } });
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
  const itineraryDays = pkg.itinerary.split("\n").filter(Boolean);

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

      <section className="bg-zinc-50 py-8">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="text-xs text-zinc-500">
            <Link href="/">Home</Link> / <Link href="/packages">Packages</Link> /{" "}
            <Link href={`/destinations/${pkg.destination.slug}`}>{pkg.destination.name}</Link>
          </nav>
          <h1 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">{pkg.title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-zinc-600">{pkg.summary}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span className="rounded-full bg-white px-3 py-1 font-medium text-zinc-700 shadow-sm">
              {pkg.durationDays}D / {pkg.durationNights}N
            </span>
            <span className="rounded-full bg-white px-3 py-1 font-medium text-zinc-700 shadow-sm">
              {pkg.destination.name}
              {pkg.city ? ` · ${pkg.city.name}` : ""}
            </span>
            <span className="rounded-full bg-orange-50 px-3 py-1 font-semibold text-orange-700 shadow-sm">
              {formatINR(pkg.price)} onwards
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-zinc-900">Itinerary</h2>
          <ol className="mt-4 space-y-3 border-l-2 border-blue-100 pl-4">
            {itineraryDays.map((day, i) => (
              <li key={i} className="text-sm text-zinc-700">
                {day}
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
                  className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
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

        <div>
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
