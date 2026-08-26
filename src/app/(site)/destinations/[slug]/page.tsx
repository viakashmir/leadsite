import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getDestinationsWithCities } from "@/lib/data";
import PackageCard from "@/components/PackageCard";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

async function getDestination(slug: string) {
  return prisma.destination.findUnique({
    where: { slug },
    include: {
      cities: { orderBy: { name: "asc" } },
      packages: { where: { published: true }, orderBy: { createdAt: "desc" } },
      _count: { select: { leads: true, agentLinks: true } },
    },
  });
}

export async function generateStaticParams() {
  const destinations = await prisma.destination.findMany({ select: { slug: true } });
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getDestination(slug);
  if (!destination) return {};

  const title = `${destination.name} Tour Packages — Best Holiday Deals`;
  return {
    title,
    description: destination.summary,
    alternates: { canonical: `/destinations/${destination.slug}` },
    openGraph: { title, description: destination.summary, url: `/destinations/${destination.slug}` },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = await getDestination(slug);
  if (!destination) notFound();

  const allDestinations = await getDestinationsWithCities();

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Destinations", item: `${SITE_URL}/destinations` },
            {
              "@type": "ListItem",
              position: 3,
              name: destination.name,
              item: `${SITE_URL}/destinations/${destination.slug}`,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: destination.name,
          description: destination.summary,
          url: `${SITE_URL}/destinations/${destination.slug}`,
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 to-blue-500 py-10 text-white">
        {destination.heroImage.startsWith("http") && (
          <Image
            src={destination.heroImage}
            alt={destination.name}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/75 to-blue-700/75" />
        <div className="relative mx-auto max-w-6xl px-4">
          <nav className="text-xs text-blue-100">
            <Link href="/">Home</Link> / <Link href="/destinations">Destinations</Link> /{" "}
            {destination.name}
          </nav>
          <h1 className="mt-2 text-3xl font-bold">{destination.name} Tour Packages</h1>
          <p className="mt-2 max-w-2xl text-blue-100">{destination.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full bg-white/15 px-3 py-1">
              {destination._count.leads} traveler enquiries
            </span>
            {destination._count.agentLinks > 0 && (
              <span className="rounded-full bg-white/15 px-3 py-1">
                {destination._count.agentLinks} agents ready to quote
              </span>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {destination.cities.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {destination.cities.map((c) => (
                <Link
                  key={c.id}
                  href={`/leads/${destination.slug}/${c.slug}`}
                  className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 hover:border-blue-600 hover:text-blue-700"
                >
                  {c.name} leads
                </Link>
              ))}
            </div>
          )}

          <h2 className="text-lg font-semibold text-zinc-900">
            {destination.packages.length} Tour Packages in {destination.name}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {destination.packages.map((p) => (
              <PackageCard
                key={p.id}
                slug={p.slug}
                title={p.title}
                summary={p.summary}
                durationDays={p.durationDays}
                durationNights={p.durationNights}
                price={p.price}
                destinationName={destination.name}
                theme={p.theme}
                heroImage={p.heroImage}
              />
            ))}
            {destination.packages.length === 0 && (
              <p className="text-sm text-zinc-500">
                No packages listed yet — submit an enquiry and our agents will build a custom
                itinerary for you.
              </p>
            )}
          </div>
        </div>

        <div>
          <EnquiryForm destinations={allDestinations} defaultDestinationId={destination.id} />
        </div>
      </div>
    </div>
  );
}
