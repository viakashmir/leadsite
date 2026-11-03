import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import LeadCard from "@/components/LeadCard";
import { getLeadPricing, leadPrice } from "@/lib/leadPricing";
import { maskContactsInText, maskEmail, maskName, maskPhone } from "@/lib/mask";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

// No timed rebuilds: every timed ISR rebuild is a billed ISR write, and
// crawlers hitting thousands of pages hourly blocked the Vercel account.
// Pages refresh on deploy and on demand (admin edits, new leads, unlocks).
export const revalidate = false;

async function getData(destinationSlug: string, citySlug: string) {
  const destination = await prisma.destination.findUnique({
    where: { slug: destinationSlug },
    include: { cities: { orderBy: { name: "asc" } } },
  });
  if (!destination) return null;

  const city = destination.cities.find((c) => c.slug === citySlug);
  if (!city) return null;

  const leads = await prisma.lead.findMany({
    where: { cityId: city.id },
    include: { destination: true, city: true, _count: { select: { unlocks: true } } },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return { destination, city, leads };
}

// ~350 destination/city combinations: render each on first visit, then cache (ISR).
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ destinationSlug: string; citySlug: string }>;
}): Promise<Metadata> {
  const { destinationSlug, citySlug } = await params;
  const data = await getData(destinationSlug, citySlug);
  if (!data) return {};

  const title = `${data.city.name} Travel Leads — Verified Traveler Enquiries`;
  const description = `Browse verified travel leads for ${data.city.name}, ${data.destination.name}. Real trip requirements from travelers, updated daily.`;
  return {
    title,
    description,
    alternates: { canonical: `/leads/${data.destination.slug}/${data.city.slug}` },
    // No leads yet: a thin page, kept out of search until enquiries arrive.
    ...(data.leads.length === 0 ? { robots: { index: false, follow: true } } : {}),
    openGraph: { title, description, url: `/leads/${data.destination.slug}/${data.city.slug}` },
  };
}

export default async function CityLeadsPage({
  params,
}: {
  params: Promise<{ destinationSlug: string; citySlug: string }>;
}) {
  const pricing = await getLeadPricing();
  const { destinationSlug, citySlug } = await params;
  const data = await getData(destinationSlug, citySlug);
  if (!data) notFound();
  const { destination, city, leads } = data;

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
            {
              "@type": "ListItem",
              position: 4,
              name: city.name,
              item: `${SITE_URL}/leads/${destination.slug}/${city.slug}`,
            },
          ],
        }}
      />

      <nav className="text-xs text-zinc-500">
        <Link href="/leads">Travel Leads</Link> /{" "}
        <Link href={`/leads/${destination.slug}`}>{destination.name}</Link> / {city.name}
      </nav>
      <h1 className="mt-2 text-2xl font-bold text-zinc-900">{city.name} Travel Leads</h1>
      <p className="mt-1 text-sm text-zinc-600">
        {leads.length} verified traveler enquiries for {city.name}. Sign up free to unlock contact
        details.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 border-b border-zinc-200 pb-4">
        <Link
          href={`/leads/${destination.slug}`}
          className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 hover:border-brand hover:text-brand"
        >
          All
        </Link>
        {destination.cities.map((c) => (
          <Link
            key={c.id}
            href={`/leads/${destination.slug}/${c.slug}`}
            className={
              c.slug === city.slug
                ? "rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white"
                : "rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 hover:border-brand hover:text-brand"
            }
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
              maskedName: maskName(lead.name),
              maskedPhone: maskPhone(lead.phone),
              maskedEmail: lead.email ? maskEmail(lead.email) : null,
              originCity: lead.originCity,
              destinationName: lead.destination.name,
              cityName: lead.city?.name ?? null,
              travelDate: lead.travelDate,
              durationDays: lead.durationDays,
              adults: lead.adults,
              children: lead.children,
              budgetBand: lead.budgetBand,
              message: lead.message ? maskContactsInText(lead.message) : null,
              verified: lead.verified,
              status: lead.status,
              createdAt: lead.createdAt,
              unlockPrice: leadPrice(lead, pricing),
              unlockCount: lead._count.unlocks,
              maxUnlocks: lead.maxUnlocks,
            }}
          />
        ))}
        {leads.length === 0 && (
          <p className="text-sm text-zinc-500">No leads for {city.name} yet.</p>
        )}
      </div>
    </div>
  );
}
