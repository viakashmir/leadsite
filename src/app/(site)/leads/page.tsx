import JsonLd from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/location/blocks";
import { webPageSchema } from "@/lib/schema";
import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import LeadCard from "@/components/LeadCard";
import { getLeadPricing, leadPrice } from "@/lib/leadPricing";
import { maskContactsInText, maskEmail, maskName, maskPhone } from "@/lib/mask";

// No timed rebuilds: every timed ISR rebuild is a billed ISR write, and
// crawlers hitting thousands of pages hourly blocked the Vercel account.
// Pages refresh on deploy and on demand (admin edits, new leads, unlocks).
export const revalidate = false;

export const metadata: Metadata = {
  alternates: { canonical: "/leads" },
  title: "Travel Leads — Browse Verified Traveler Enquiries",
  description:
    "Browse verified travel leads by destination. Real trip requirements from travelers, updated daily.",
};

export default async function LeadsIndexPage() {
  const [destinations, latestLeads, pricing] = await Promise.all([
    prisma.destination.findMany({
      orderBy: { name: "asc" },
      include: { _count: { select: { leads: true } } },
    }),
    // New enquiries from every destination, so a fresh lead shows here on
    // arrival rather than only behind its destination tile.
    prisma.lead.findMany({
      include: { destination: true, city: true, _count: { select: { unlocks: true } } },
      orderBy: { createdAt: "desc" },
      take: 20,
    }),
    getLeadPricing(),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={webPageSchema({
          path: "/leads",
          name: "Travel Leads by Destination",
          description: "Verified traveller enquiries by destination for travel agents.",
          type: "CollectionPage",
        })}
      />
      <Breadcrumbs items={[{ name: "Travel Leads", href: "/leads" }]} />
      <h1 className="text-2xl font-bold text-zinc-900">Travel Leads by Destination</h1>
      <p className="mt-1 text-sm text-zinc-600">
        Browse verified traveler enquiries. Sign up free as a travel agent to unlock contact
        details and respond.
      </p>
      {latestLeads.length > 0 && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold text-zinc-900">Latest Leads</h2>
          <div className="mt-3 space-y-3">
            {latestLeads.map((lead) => (
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
          </div>
        </section>
      )}
      <h2 className="mt-8 text-lg font-semibold text-zinc-900">Browse by Destination</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => (
          <Link
            key={d.id}
            href={`/leads/${d.slug}`}
            className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 shadow-sm hover:border-gold"
          >
            <span className="font-medium text-zinc-900">{d.name}</span>
            <span className="text-sm text-zinc-500">{d._count.leads} {d._count.leads === 1 ? "lead" : "leads"}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
