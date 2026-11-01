import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { getDestinationsWithCitiesAndLeadCounts, getSiteStats } from "@/lib/data";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import PlaceCard from "@/components/PlaceCard";
import CardRow from "@/components/CardRow";
import QuoteButton from "@/components/QuoteButton";
import TrustTicks from "@/components/TrustTicks";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { maskName, maskPhone } from "@/lib/mask";
import { formatDate } from "@/lib/format";
import { isPhoto, packagePhoto } from "@/lib/media";
import { tourPackagesUrl } from "@/lib/urls";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import { ORG_ID, webPageSchema } from "@/lib/schema";

export const revalidate = 300;

export default async function Home() {
  const [destinations, packages, recentLeads, stats] = await Promise.all([
    getDestinationsWithCitiesAndLeadCounts({ tier: 1 }),
    prisma.package.findMany({
      where: { published: true },
      include: { destination: true, city: true },
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

  // Destination rows: destinations with at least 3 photographed cities.
  const rows = destinations
    .map((d) => ({ ...d, photoCities: d.cities.filter((c) => isPhoto(c.heroImage)) }))
    .filter((d) => d.photoCities.length >= 3)
    .slice(0, 4);
  const strip = destinations.filter((d) => isPhoto(d.heroImage));
  const statLine = [
    [stats.leadCount, "travel enquiries"],
    [stats.agentCount, "verified agents"],
    [stats.packageCount, "tour packages"],
    [stats.destinationCount, "destinations"],
  ].filter(([n]) => Number(n) > 0);

  const row = (d: (typeof rows)[number]) => (
    <CardRow key={d.id} title={`${d.name} Tour Packages`} href={tourPackagesUrl(d.slug)} limit={3}>
      {d.photoCities.slice(0, 6).map((c) => (
        <PlaceCard key={c.id} href={tourPackagesUrl(c.slug)} name={c.name} summary={c.summary} heroImage={c.heroImage} />
      ))}
    </CardRow>
  );

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

      <section className="bg-[#fdf8f3]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-6 sm:py-10 lg:grid-cols-[1fr_390px] lg:items-center">
          <div>
            <p className="text-xs font-semibold text-brand">India &amp; worldwide holidays</p>
            <h1 className="mt-2 max-w-2xl font-display text-[26px] font-bold leading-tight tracking-tight text-ink sm:text-4xl">
              Tour Packages, Planned by Verified Local Experts
            </h1>
            <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Share your trip once. Up to 3 verified agents who know the destination send customised
              itineraries and quotes, and you choose the one you like.
            </p>
            <TrustTicks className="mt-4" />
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <QuoteButton className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
                Get Free Quotes
              </QuoteButton>
              <Link
                href="/tour-packages"
                className="rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-zinc-400"
              >
                Explore Destinations
              </Link>
              <Link href="/agent/register" className="ml-1 text-sm font-semibold text-ink-soft underline-offset-4 hover:text-brand hover:underline">
                I&apos;m a Travel Agent
              </Link>
            </div>
            {statLine.length > 0 && (
              <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {statLine.map(([n, label]) => (
                  <div key={label} className="flex items-baseline gap-1.5">
                    <dd className="text-lg font-bold text-ink">{n}+</dd>
                    <dt className="text-xs font-medium text-ink-soft">{label}</dt>
                  </div>
                ))}
              </dl>
            )}
          </div>
          <div id="get-quotes" className="hidden scroll-mt-20 lg:block">
            <EnquiryForm destinations={destinations} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        {strip.length > 0 && (
          <nav aria-label="Popular destinations" className="border-b border-zinc-100 py-4">
            <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 sm:gap-5">
              {strip.map((d) => (
                <Link
                  key={d.id}
                  href={tourPackagesUrl(d.slug)}
                  className="group flex w-[68px] shrink-0 flex-col items-center gap-1.5 text-center sm:w-20"
                >
                  <span className="relative h-14 w-14 overflow-hidden rounded-full border border-zinc-200 sm:h-16 sm:w-16">
                    <Image src={d.heroImage} alt={d.name} fill sizes="64px" className="object-cover" />
                  </span>
                  <span className="text-xs font-medium leading-tight text-ink group-hover:text-brand">{d.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}

        {rows.slice(0, 2).map(row)}

        <section className="py-5 sm:py-6">
          <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
            Explore the Best Tourist Destinations
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            Experience the magic of India&apos;s rich heritage and top holiday destinations worldwide.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
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
          <section className="py-5 sm:py-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">Popular Tour Packages</h2>
            <p className="mt-1 text-sm text-ink-soft">
              Hand-picked packages with starting prices. Every one can be customised by a verified agent.
            </p>
            <div className="no-scrollbar -mx-4 mt-3 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-7 sm:overflow-visible sm:px-0 lg:grid-cols-3">
              {packages.map((p) => (
                <div key={p.id} className="w-[82%] shrink-0 snap-start sm:w-auto">
                  <PackageCard
                    slug={p.slug}
                    title={p.title}
                    summary={p.summary}
                    durationDays={p.durationDays}
                    durationNights={p.durationNights}
                    price={p.price}
                    destinationName={p.destination.name}
                    theme={p.theme}
                    heroImage={packagePhoto(p)}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {rows.slice(2).map(row)}

        <section className="py-5 sm:py-6">
          <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
            Latest Travel Leads &amp; Popular Destinations
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            Real trip requirements posted by travelers, matched with verified travel agents.
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="rounded-xl border border-zinc-200 bg-white p-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-ink">{maskName(lead.name)}</span>
                  {lead.verified && (
                    <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                      Verified
                    </span>
                  )}
                </div>
                <p className="mt-1 text-ink-soft">
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
            className="mt-4 inline-block rounded-lg border border-brand px-4 py-2 text-sm font-semibold text-brand hover:bg-brand-tint"
          >
            View More Leads <span aria-hidden>&rarr;</span>
          </Link>
        </section>

        <section className="my-6 rounded-[14px] bg-[#fdf8f3] px-5 py-8 text-center sm:py-10">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">Grow Your Travel Business</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-ink-soft sm:text-base">
            Join free, tell us the destinations you deal in, and start buying verified travel
            leads today.
          </p>
          <Link
            href="/agent/register"
            className="mt-5 inline-block rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Join as a Travel Agent, Free
          </Link>
        </section>
      </div>
    </div>
  );
}
