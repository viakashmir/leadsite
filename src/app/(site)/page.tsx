import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getDestinationsWithCitiesAndLeadCounts, getSiteStats } from "@/lib/data";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { maskName, maskPhone } from "@/lib/mask";
import { formatDate } from "@/lib/format";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const revalidate = 300;

export default async function Home() {
  const [destinations, packages, recentLeads, stats] = await Promise.all([
    getDestinationsWithCitiesAndLeadCounts(),
    prisma.package.findMany({
      where: { published: true },
      include: { destination: true },
      orderBy: { createdAt: "desc" },
      take: 6,
    }),
    prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 6,
      include: { destination: true, city: true },
    }),
    getSiteStats(),
  ]);

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          description: SITE_DESCRIPTION,
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_URL}/packages?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />

      <section className="bg-gradient-to-b from-blue-700 to-blue-500 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Discover &amp; Book Your Perfect Holiday
          </h1>
          <p className="mt-3 max-w-xl text-blue-100">
            Compare verified tour packages, get quotes from trusted travel agents, across India
            and worldwide.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/destinations"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              Browse Destinations
            </Link>
            <Link
              href="/agent/register"
              className="rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              I&apos;m a Travel Agent
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-100 bg-white py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 text-center sm:grid-cols-4">
          <div>
            <p className="text-2xl font-bold text-blue-700">{stats.leadCount}+</p>
            <p className="text-xs text-zinc-500">Verified Travel Leads</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-700">{stats.agentCount}+</p>
            <p className="text-xs text-zinc-500">Travel Agents Onboard</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-700">{stats.packageCount}+</p>
            <p className="text-xs text-zinc-500">Tour Packages Listed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-700">{stats.destinationCount}+</p>
            <p className="text-xs text-zinc-500">Destinations Covered</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-xl font-bold text-zinc-900">Explore the Best Tourist Destinations</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Experience the magic of India&apos;s rich heritage and top holiday destinations worldwide.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <DestinationCard
              key={d.id}
              slug={d.slug}
              name={d.name}
              summary={d.summary}
              leadCount={d._count.leads}
              heroImage={d.heroImage}
            />
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-xl font-bold text-zinc-900">Popular Tour Packages</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Hand-picked packages with starting prices — get a custom quote from a verified agent.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => (
              <PackageCard
                key={p.id}
                slug={p.slug}
                title={p.title}
                summary={p.summary}
                durationDays={p.durationDays}
                durationNights={p.durationNights}
                price={p.price}
                destinationName={p.destination.name}
                theme={p.theme}
                heroImage={p.heroImage}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-zinc-900">
            Latest Travel Leads &amp; Popular Destinations
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            Real trip requirements posted by travelers, matched with verified travel agents.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="rounded-lg border border-zinc-200 bg-white p-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-900">{maskName(lead.name)}</span>
                  {lead.verified && (
                    <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                      Verified
                    </span>
                  )}
                </div>
                <p className="mt-1 text-zinc-600">
                  Looking for a {lead.durationDays ?? "multi"}-day {lead.destination.name}
                  {lead.city ? ` (${lead.city.name})` : ""} tour for {lead.adults} adult
                  {lead.adults > 1 ? "s" : ""}
                  {lead.children ? ` & ${lead.children} children` : ""}.
                </p>
                <div className="mt-2 flex items-center justify-between text-xs text-zinc-400">
                  <span>{maskPhone(lead.phone)}</span>
                  <span>Posted {formatDate(lead.createdAt)}</span>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/leads"
            className="mt-5 inline-block rounded-full border border-orange-500 px-5 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-50"
          >
            View More Leads →
          </Link>
        </div>

        <div>
          <EnquiryForm destinations={destinations} />
        </div>
      </section>

      <section className="bg-blue-900 py-12 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold">Grow Your Travel Business</h2>
          <p className="mt-2 text-blue-100">
            Join free, tell us the destinations you deal in, and start buying verified travel
            leads today.
          </p>
          <Link
            href="/agent/register"
            className="mt-5 inline-block rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold hover:bg-orange-600"
          >
            Join as a Travel Agent — Free
          </Link>
        </div>
      </section>
    </div>
  );
}
