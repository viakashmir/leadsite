import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getDestinationsWithCitiesAndLeadCounts, getSiteStats } from "@/lib/data";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import TrustTicks from "@/components/TrustTicks";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { maskName, maskPhone } from "@/lib/mask";
import { formatDate } from "@/lib/format";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import { ORG_ID, webPageSchema } from "@/lib/schema";

export const revalidate = 300;

export default async function Home() {
  const [destinations, packages, recentLeads, stats] = await Promise.all([
    getDestinationsWithCitiesAndLeadCounts({ tier: 1 }),
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
        data={webPageSchema({
          path: "/",
          name: `${SITE_NAME}: Customised Holiday Packages from Verified Local Agents`,
          description: SITE_DESCRIPTION,
          breadcrumb: false,
          about: { "@id": ORG_ID },
        })}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-royal via-royal to-royal-2 text-white">
        <div className="mx-auto max-w-6xl px-4 pb-9 pt-8 sm:pb-14 sm:pt-14">
          <p className="text-xs font-semibold text-gold-soft">
            India &amp; worldwide holidays
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Tour Packages, Planned by Verified Local Experts
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base">
            Share your trip once. Up to 3 verified agents who know the destination send customised
            itineraries and quotes, and you choose the one you like.
          </p>
          <TrustTicks dark className="mt-4" />
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <a
              href="#get-quotes"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-royal shadow-sm hover:bg-gold-soft"
            >
              Get Free Quotes
            </a>
            <Link
              href="/tour-packages"
              className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explore Destinations
            </Link>
            <Link href="/agent/register" className="ml-1 text-sm font-semibold text-white/75 underline-offset-4 hover:text-white hover:underline">
              I&apos;m a Travel Agent
            </Link>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      <section className="bg-ivory">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-4 px-4 py-6 text-center sm:grid-cols-4">
          {[
            [stats.leadCount, "Travel enquiries"],
            [stats.agentCount, "Verified agents"],
            [stats.packageCount, "Tour packages"],
            [stats.destinationCount, "Destinations"],
          ]
            .filter(([n]) => Number(n) > 0)
            .map(([n, label]) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="text-xs font-semibold text-ink-soft">{label}</dt>
                <dd className="font-display text-2xl font-extrabold text-ink">{n}+</dd>
              </div>
            ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-display text-xl font-extrabold leading-tight tracking-tight text-ink sm:text-2xl">Explore the Best Tourist Destinations</h2>
        <p className="mt-1 text-sm text-zinc-600">
          Experience the magic of India&apos;s rich heritage and top holiday destinations worldwide.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
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

      {packages.length > 0 && (
      <section className="bg-ivory py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-xl font-extrabold leading-tight tracking-tight text-ink sm:text-2xl">Popular Tour Packages</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Hand-picked packages with starting prices. Every one can be customised by a verified agent.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
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
      )}

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-xl font-extrabold leading-tight tracking-tight text-ink sm:text-2xl">
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
            className="mt-5 inline-block rounded-full border border-brand px-5 py-2 text-sm font-semibold text-brand hover:bg-brand-tint"
          >
            View More Leads →
          </Link>
        </div>

        <div id="get-quotes" className="scroll-mt-20 lg:sticky lg:top-20 lg:self-start">
          <EnquiryForm destinations={destinations} />
        </div>
      </section>

      <section className="bg-royal py-12 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">Grow Your Travel Business</h2>
          <p className="mt-2 text-white/80">
            Join free, tell us the destinations you deal in, and start buying verified travel
            leads today.
          </p>
          <Link
            href="/agent/register"
            className="mt-5 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-royal hover:bg-gold-soft"
          >
            Join as a Travel Agent, Free
          </Link>
        </div>
      </section>
    </div>
  );
}
