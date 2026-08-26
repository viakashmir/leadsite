import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import LeadCard from "@/components/LeadCard";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const revalidate = 300;

async function getData(destinationSlug: string) {
  const destination = await prisma.destination.findUnique({
    where: { slug: destinationSlug },
    include: { cities: { orderBy: { name: "asc" } } },
  });
  if (!destination) return null;

  const leads = await prisma.lead.findMany({
    where: { destinationId: destination.id },
    include: { destination: true, city: true },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return { destination, leads };
}

export async function generateStaticParams() {
  const destinations = await prisma.destination.findMany({ select: { slug: true } });
  return destinations.map((d) => ({ destinationSlug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ destinationSlug: string }>;
}): Promise<Metadata> {
  const { destinationSlug } = await params;
  const data = await getData(destinationSlug);
  if (!data) return {};

  const title = `${data.destination.name} Travel Leads — Verified Traveler Enquiries`;
  const description = `Browse ${data.leads.length}+ verified travel leads for ${data.destination.name}. Real trip requirements from travelers, updated daily.`;
  return {
    title,
    description,
    alternates: { canonical: `/leads/${data.destination.slug}` },
    openGraph: { title, description, url: `/leads/${data.destination.slug}` },
  };
}

export default async function DestinationLeadsPage({
  params,
}: {
  params: Promise<{ destinationSlug: string }>;
}) {
  const { destinationSlug } = await params;
  const data = await getData(destinationSlug);
  if (!data) notFound();
  const { destination, leads } = data;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Travel Leads", item: `${SITE_URL}/leads` },
            {
              "@type": "ListItem",
              position: 3,
              name: destination.name,
              item: `${SITE_URL}/leads/${destination.slug}`,
            },
          ],
        }}
      />

      <h1 className="text-2xl font-bold text-zinc-900">{destination.name} Travel Leads</h1>
      <p className="mt-1 text-sm text-zinc-600">
        {leads.length} verified traveler enquiries for {destination.name}. Sign up free to unlock
        contact details.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 border-b border-zinc-200 pb-4">
        <span className="rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold text-white">
          All
        </span>
        {destination.cities.map((c) => (
          <Link
            key={c.id}
            href={`/leads/${destination.slug}/${c.slug}`}
            className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 hover:border-blue-600 hover:text-blue-700"
          >
            {c.name}
          </Link>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {leads.map((lead) => (
          <LeadCard
            key={lead.id}
            lead={{
              id: lead.id,
              name: lead.name,
              phone: lead.phone,
              email: lead.email,
              originCity: lead.originCity,
              destinationName: lead.destination.name,
              cityName: lead.city?.name ?? null,
              travelDate: lead.travelDate,
              durationDays: lead.durationDays,
              adults: lead.adults,
              children: lead.children,
              budgetBand: lead.budgetBand,
              message: lead.message,
              verified: lead.verified,
              status: lead.status,
              createdAt: lead.createdAt,
            }}
          />
        ))}
        {leads.length === 0 && (
          <p className="text-sm text-zinc-500">No leads for this destination yet.</p>
        )}
      </div>
    </div>
  );
}
