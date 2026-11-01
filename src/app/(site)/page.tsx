import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { getDestinationsWithCitiesAndLeadCounts, getMarketplaceStats, getSiteStats } from "@/lib/data";
import PackageCard from "@/components/PackageCard";
import PlaceCard from "@/components/PlaceCard";
import CardRow from "@/components/CardRow";
import QuoteButton from "@/components/QuoteButton";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { Faqs } from "@/components/location/blocks";
import { buyersLeft, HiddenContact, SoldOutBadge } from "@/components/LeadContact";
import { maskEmail, maskName, maskPhone } from "@/lib/mask";
import { formatINR } from "@/lib/format";
import { isPhoto, packagePhoto } from "@/lib/media";
import { tourPackagesUrl } from "@/lib/urls";
import { WELCOME_CREDITS } from "@/lib/credits";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import { ORG_ID, webPageSchema } from "@/lib/schema";

export const revalidate = 300;

// Homepage strategy (two-sided marketplace):
//   1. Travellers are the supply: one obvious action above the fold, and the
//      privacy promise that removes the main reason people don't share a number.
//   2. Real proof only: live counts and a stream of real (masked) trip requests.
//   3. Agents are the buyers: the live stream is the product sample, with
//      genuine scarcity (max 3 buyers), transparent pricing and welcome credits.
//   4. Answer-ready FAQ for both audiences (FAQPage schema) for search and AI.

function timeAgo(d: Date) {
  const mins = Math.max(1, Math.round((Date.now() - d.getTime()) / 60000));
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs} hr${hrs > 1 ? "s" : ""} ago`;
  const days = Math.round(hrs / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

const gold = "text-[#d9b779]";

export default async function Home() {
  const [destinations, packages, recentLeads, stats, market] = await Promise.all([
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
      include: { destination: true, city: true, _count: { select: { unlocks: true } } },
    }),
    getSiteStats(),
    getMarketplaceStats(),
  ]);

  // Leads agents can still buy first; sold-out ones after (they still show demand).
  const liveLeads = [...recentLeads].sort(
    (a, b) => Number(a._count.unlocks >= a.maxUnlocks) - Number(b._count.unlocks >= b.maxUnlocks),
  );

  const photoDestinations = destinations.filter((d) => isPhoto(d.heroImage));
  const heroPhoto = photoDestinations[0]?.heroImage;
  // Ordered by real demand so "most-requested" stays true.
  const mosaic = [...photoDestinations].sort((a, b) => b._count.leads - a._count.leads).slice(0, 5);
  const quickPicks = destinations.slice(0, 6);
  const rows = destinations
    .map((d) => ({ ...d, photoCities: d.cities.filter((c) => isPhoto(c.heroImage)) }))
    .filter((d) => d.photoCities.length >= 3)
    .slice(0, 2);

  // Only the destination count is shown; live enquiry and agent counts are
  // hidden for now (owner's call). Real numbers only, and only once
  // persuasive: a "1" reads as an empty marketplace.
  const proof = [{ n: stats.destinationCount, min: 10, label: "destinations covered" }].filter((x) => x.n >= x.min);

  const faqs = [
    {
      q: `How does ${SITE_NAME} work for travellers?`,
      a: "Tell us where you want to go, your dates, group and budget in one short form. Up to 3 verified local travel agents who operate that destination send you customised itineraries and quotes. You compare them and book only if you like one.",
    },
    {
      q: "Is it free to get tour package quotes?",
      a: "Yes. Getting quotes is free for travellers and there is no booking fee. You pay the agent you choose, directly, only if you decide to book.",
    },
    {
      q: "Who sees my phone number and email?",
      a: "Only verified travel agents who buy your request can see your contact details, and each request is shared with at most 3 agents. Your number is never shown on a public page.",
    },
    {
      q: "How do travel agents buy leads here?",
      a: `Agents join free, choose the destinations they serve and receive ${WELCOME_CREDITS} welcome credits. Each lead shows the trip details with the contact hidden; buying it reveals the traveller's phone and email. One credit is one rupee, and leads start from ${formatINR(market.minLeadPrice)}.`,
    },
    {
      q: "Are the travel leads exclusive?",
      a: "Each lead is sold to a maximum of 3 agents, then it is marked sold out. That keeps competition fair for agents and stops travellers getting flooded with calls.",
    },
  ];

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

      {/* 1. HERO: one job, start a trip request. */}
      <section className="relative isolate overflow-hidden bg-royal text-white">
        {heroPhoto && (
          <Image src={heroPhoto} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-45" />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-royal via-royal/85 to-royal/30" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-8 sm:pb-14 sm:pt-12 lg:grid-cols-[1fr_400px] lg:items-center">
          <div className="min-w-0">
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${gold}`}>Customised tour packages · India &amp; abroad</p>
            <h1 className="mt-3 max-w-2xl font-display text-[32px] font-bold leading-[1.08] tracking-tight sm:text-5xl">
              Describe your trip once.
              <span className={`block ${gold}`}>Three local experts compete to plan it.</span>
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-base">
              Verified agents who live and work in your destination send custom itineraries and prices. You compare,
              ask questions and book only the one you love.
            </p>

            <ul className="mt-5 grid max-w-xl gap-2 text-sm text-white/90 sm:grid-cols-3">
              {["Free, no booking fee", "Max 3 agents see your number", "Only agents for your destination"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className={`text-base ${gold}`} aria-hidden>
                    ✦
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <QuoteButton className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:bg-brand-dark">
                Plan My Trip, Free
              </QuoteButton>
              <Link href="#live-leads" className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                I&apos;m a Travel Agent →
              </Link>
            </div>

            {/* Phones: one tap from a destination to its pre-filled form. */}
            <div className="mt-6 lg:hidden">
              <p className="text-xs text-white/60">Or start with a destination</p>
              <div className="no-scrollbar -mx-4 mt-2 flex gap-2 overflow-x-auto px-4">
                {quickPicks.map((d) => (
                  <Link
                    key={d.id}
                    href={`${tourPackagesUrl(d.slug)}#get-quotes`}
                    className="shrink-0 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur hover:bg-white/20"
                  >
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div id="get-quotes" className="hidden scroll-mt-20 text-ink lg:block">
            <EnquiryForm destinations={destinations} />
          </div>
        </div>

        {proof.length > 0 && (
          <div className="border-t border-white/10 bg-black/20">
            <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-4 sm:grid-cols-4">
              {proof.map((p) => (
                <div key={p.label}>
                  <dd className={`font-display text-2xl font-bold sm:text-3xl ${gold}`}>{p.n.toLocaleString("en-IN")}</dd>
                  <dt className="text-xs text-white/70">{p.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        )}
      </section>

      <div className="mx-auto max-w-7xl px-4">
        {/* 2. HOW IT WORKS + PRIVACY PROMISE: removes the doubt before sharing a number. */}
        <section className="grid gap-6 py-10 sm:py-14 lg:grid-cols-[1fr_380px] lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">How it works</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Better than one agency&apos;s fixed package
            </h2>
            <ol className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Share your plan", "Destination, dates, group and hotel budget. Takes under a minute."],
                ["Get up to 3 quotes", "Local agents who run trips there send custom itineraries and prices."],
                ["Compare and choose", "Ask questions, negotiate, and book only the one that fits you."],
              ].map(([t, d], i) => (
                <li key={t} className="rounded-[14px] border border-zinc-200 bg-white p-5">
                  <span className="font-display text-3xl font-bold text-gold">0{i + 1}</span>
                  <p className="mt-2 font-semibold text-ink">{t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{d}</p>
                </li>
              ))}
            </ol>
          </div>
          <aside className="rounded-[14px] bg-[#fdf8f3] p-6">
            <p className="text-2xl" aria-hidden>
              🔒
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-ink">Our privacy promise</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>Your number is never shown on a public page.</li>
              <li>At most 3 verified agents can see it, never more.</li>
              <li>Only agents who serve your destination are matched.</li>
              <li>No booking fee, no obligation to book.</li>
            </ul>
            <QuoteButton className="mt-5 inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
              Get My Free Quotes
            </QuoteButton>
          </aside>
        </section>

        {/* 3. DESTINATION MOSAIC: inspiration + internal links into the money pages. */}
        {mosaic.length >= 3 && (
          <section className="pb-10 sm:pb-14">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Where travellers are heading</p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">Most-requested destinations</h2>
              </div>
              <Link href="/tour-packages" className="shrink-0 text-sm font-semibold text-brand hover:underline">
                All destinations →
              </Link>
            </div>
            <div className="mt-5 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4">
              {mosaic.map((d, i) => (
                <Link
                  key={d.id}
                  href={tourPackagesUrl(d.slug)}
                  className={`group relative overflow-hidden rounded-[14px] bg-zinc-200 ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                >
                  <Image
                    src={d.heroImage}
                    alt={`${d.name} tour packages`}
                    fill
                    sizes={i === 0 ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 640px) 25vw, 50vw"}
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                    <p className={`font-display font-bold ${i === 0 ? "text-2xl sm:text-3xl" : "text-lg"}`}>{d.name}</p>
                    {d._count.leads > 0 && (
                      <p className="text-xs text-white/80">{d._count.leads.toLocaleString("en-IN")} trip requests</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* 4. LIVE LEADS FOR AGENTS: the product sample, real and masked. */}
      {liveLeads.length > 0 && (
        <section id="live-leads" className="scroll-mt-16 bg-royal py-12 text-white sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[340px_1fr] lg:gap-12">
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${gold}`}>For travel agents</p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Real travellers. Real dates. Ready to book.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                These are the latest trip requests from travellers on this site. Buy the ones that fit your
                destinations and call them while they are still comparing.
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  ["Max 3 agents per lead", "then it's sold out. No crowded bidding wars."],
                  ["Pay per lead, no subscription", `from ${formatINR(market.minLeadPrice)}; 1 credit = ₹1.`],
                  [`${WELCOME_CREDITS} welcome credits`, "when you join free."],
                  ["Only your destinations", "you see leads for the places you serve."],
                ].map(([b, t]) => (
                  <li key={b} className="flex gap-2.5">
                    <span className={gold} aria-hidden>
                      ✦
                    </span>
                    <span>
                      <span className="font-semibold">{b}</span> <span className="text-white/70">{t}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/agent/register" className="rounded-lg bg-[#d9b779] px-5 py-3 text-sm font-bold text-royal hover:bg-[#e6c890]">
                  Join Free, Get {WELCOME_CREDITS} Credits
                </Link>
                <Link href="/leads" className="rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">
                  Browse All Leads
                </Link>
              </div>
            </div>

            <div className="grid content-start gap-3 sm:grid-cols-2">
              {liveLeads.map((lead) => {
                const left = buyersLeft(lead._count.unlocks, lead.maxUnlocks);
                return (
                  <article key={lead.id} className="flex flex-col rounded-[14px] bg-white p-4 text-ink shadow-xl shadow-black/20">
                    <div className="flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                        {timeAgo(lead.createdAt)}
                      </span>
                      <span className="text-ink-soft">{left > 0 ? `${left} of ${lead.maxUnlocks} left` : ""}</span>
                    </div>
                    <p className="mt-2 font-semibold leading-snug">
                      {lead.durationDays ? `${lead.durationDays}-day` : "Multi-day"} {lead.city?.name ?? lead.destination.name} trip
                      {lead.originCity ? ` from ${lead.originCity}` : ""}
                    </p>
                    <p className="mt-0.5 text-xs text-ink-soft">
                      {lead.adults} adult{lead.adults > 1 ? "s" : ""}
                      {lead.children ? ` + ${lead.children} ${lead.children === 1 ? "child" : "children"}` : ""}
                      {lead.budgetBand ? ` · ${lead.budgetBand}` : ""}
                    </p>
                    <div className="mt-3 flex flex-1 items-end justify-between gap-3 border-t border-zinc-100 pt-3">
                      <HiddenContact
                        name={maskName(lead.name)}
                        phone={maskPhone(lead.phone)}
                        email={lead.email ? maskEmail(lead.email) : null}
                      />
                      {left === 0 ? (
                        <SoldOutBadge />
                      ) : (
                        <Link
                          href={`/login?next=/agent/dashboard/leads&lead=${lead.id}`}
                          className="shrink-0 rounded-md bg-brand px-3 py-2 text-xs font-semibold text-white hover:bg-brand-dark"
                        >
                          Buy · {formatINR(lead.unlockPrice)}
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <div className="mx-auto max-w-7xl px-4">
        {/* 5. PACKAGES: price anchors that pull travellers into the form. */}
        {packages.length > 0 && (
          <section className="py-10 sm:py-14">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Starting points</p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">Popular tour packages</h2>
                <p className="mt-1 text-sm text-ink-soft">Use one as a starting point; agents tailor hotels, days and price.</p>
              </div>
              <Link href="/tour-packages" className="hidden shrink-0 text-sm font-semibold text-brand hover:underline sm:block">
                See all →
              </Link>
            </div>
            <div className="no-scrollbar -mx-4 mt-5 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-7 sm:overflow-visible sm:px-0 lg:grid-cols-3">
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

        {/* Deeper internal links to city pages (SEO). */}
        {rows.map((d) => (
          <CardRow key={d.id} title={`${d.name} Tour Packages`} href={tourPackagesUrl(d.slug)} limit={3}>
            {d.photoCities.slice(0, 6).map((c) => (
              <PlaceCard key={c.id} href={tourPackagesUrl(c.slug)} name={c.name} summary={c.summary} heroImage={c.heroImage} />
            ))}
          </CardRow>
        ))}

        {/* 6. FAQ: answer-ready for search and AI engines, both audiences. */}
        <section className="py-10 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Good to know</p>
          <h2 className="mb-5 mt-2 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">Questions, answered</h2>
          <Faqs faqs={faqs} />
        </section>

        {/* 7. CLOSING: two doors, one per audience. */}
        <section className="mb-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[14px] bg-[#fdf8f3] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Travelling soon?</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink">Get 3 custom quotes, free</h2>
            <p className="mt-2 text-sm text-ink-soft">One form. Local experts. You stay in control of who calls you.</p>
            <QuoteButton className="mt-5 inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">
              Plan My Trip
            </QuoteButton>
          </div>
          <div className="rounded-[14px] bg-royal p-6 text-white sm:p-8">
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${gold}`}>Run tours?</p>
            <h2 className="mt-2 font-display text-2xl font-bold">Turn these requests into bookings</h2>
            <p className="mt-2 text-sm text-white/75">Join free, pick your destinations and start with {WELCOME_CREDITS} credits.</p>
            <Link href="/agent/register" className="mt-5 inline-block rounded-lg bg-[#d9b779] px-5 py-2.5 text-sm font-bold text-royal hover:bg-[#e6c890]">
              Join as a Travel Agent
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
