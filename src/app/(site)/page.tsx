import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { getDestinationsWithCitiesAndLeadCounts, getMarketplaceStats, getSiteStats } from "@/lib/data";
import { getLeadPricing, leadPrice } from "@/lib/leadPricing";
import TripCard from "@/components/TripCard";
import ScrollRow from "@/components/ScrollRow";
import GetawayTiles, { type Getaway } from "@/components/GetawayTiles";
import QuoteButton from "@/components/QuoteButton";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { Faqs } from "@/components/location/blocks";
import { buyersLeft, HiddenContact, SoldOutBadge } from "@/components/LeadContact";
import { maskEmail, maskName, maskPhone } from "@/lib/mask";
import { formatINR } from "@/lib/format";
import { isPhoto, packagePhoto } from "@/lib/media";
import { themeUrl, tourPackagesUrl } from "@/lib/urls";
import { WELCOME_CREDITS } from "@/lib/credits";
import { THEMES } from "@/data/locations";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import { ORG_ID, webPageSchema } from "@/lib/schema";

export const revalidate = 300;

// Kashmir's snow season (November to March, India time): the hero shows a
// real Gulmarg winter photo (Pexels, free licence) and links to winter trips.
const WINTER_HERO = "/media/kashmir-winter-gulmarg-snow-meadow.webp";
function isKashmirSnowSeason(now = new Date()) {
  const month = Number(new Intl.DateTimeFormat("en-IN", { month: "numeric", timeZone: "Asia/Kolkata" }).format(now));
  return month >= 11 || month <= 3;
}

// Homepage strategy (two-sided marketplace), laid out as a travel catalogue:
//   1. Travellers browse first: a strip of destinations, a compact banner with
//      one action (get quotes), then rows of real packages per destination.
//   2. The quote form and the privacy promise sit right after the catalogue.
//   3. Agents are the buyers: the live stream of real (masked) trip requests is
//      the product sample, with genuine scarcity (max 3 buyers) and pricing.
//   4. Answer-ready FAQ for both audiences (FAQPage schema) for search and AI.

type HomePackage = Awaited<ReturnType<typeof getHomePackages>>[number];

function getHomePackages() {
  return prisma.package.findMany({
    where: { published: true },
    select: {
      id: true,
      slug: true,
      title: true,
      summary: true,
      durationDays: true,
      durationNights: true,
      price: true,
      referencePrice: true,
      theme: true,
      heroImage: true,
      destinationId: true,
      destination: { select: { name: true, slug: true, heroImage: true } },
      city: { select: { heroImage: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 400,
  });
}

// Takes one package from each destination in turn, so a mixed row is not all
// from the destination with the biggest catalogue.
function interleave(groups: HomePackage[][], n: number) {
  const out: HomePackage[] = [];
  for (let i = 0; out.length < n && groups.some((g) => i < g.length); i++)
    for (const g of groups) if (i < g.length && out.length < n) out.push(g[i]);
  return out;
}

const hasTag = (p: HomePackage, tag: string) => p.theme.split(",").some((t) => t.trim() === tag);

function timeAgo(d: Date) {
  const mins = Math.max(1, Math.round((Date.now() - d.getTime()) / 60000));
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.round(mins / 60);
  if (hrs < 24) return `${hrs} hr${hrs > 1 ? "s" : ""} ago`;
  const days = Math.round(hrs / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

const gold = "text-[#d9b779]";
// Hero only: no gold over the photo. White plus a soft frost blue that sits
// with the snow and sky instead of fighting them.
const frost = "text-[#d7e7f7]";


// Canonical for the homepage; title and description come from the root layout.
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default async function Home() {
  const [destinations, packages, recentLeads, stats, market] = await Promise.all([
    getDestinationsWithCitiesAndLeadCounts({ tier: 1 }),
    getHomePackages(),
    prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 6,
      include: { destination: true, city: true, _count: { select: { unlocks: true } } },
    }),
    getSiteStats(),
    getMarketplaceStats(),
  ]);
  const pricing = await getLeadPricing();

  // Leads agents can still buy first; sold-out ones after (they still show demand).
  const liveLeads = [...recentLeads].sort(
    (a, b) => Number(a._count.unlocks >= a.maxUnlocks) - Number(b._count.unlocks >= b.maxUnlocks),
  );

  const photoDestinations = destinations.filter((d) => isPhoto(d.heroImage));
  const snowSeason = isKashmirSnowSeason();
  const heroPhoto = snowSeason ? WINTER_HERO : photoDestinations[0]?.heroImage;

  // Package rows: a mixed "trending" row, one row per destination with a
  // real catalogue, and theme rows (winter, honeymoon, family...) for the
  // biggest one. Rows need 3+ packages so none looks empty.
  const byDestination = new Map<string, HomePackage[]>();
  for (const p of packages) byDestination.set(p.destinationId, [...(byDestination.get(p.destinationId) ?? []), p]);
  const groups = [...byDestination.values()].sort((a, b) => b.length - a.length);
  const packageRows: { key: string; title: string; subtitle?: string; href: string; items: HomePackage[] }[] = [];
  // Each row leads with packages no earlier row has shown, so the rows don't
  // all open on the same card.
  const seen = new Set<string>();
  const pick = (list: HomePackage[], n = 10) => {
    const items = [...list.filter((p) => !seen.has(p.id)), ...list.filter((p) => seen.has(p.id))].slice(0, n);
    items.forEach((p) => seen.add(p.id));
    return items;
  };
  if (groups.length > 1)
    packageRows.push({
      key: "trending",
      title: "Trending tour packages",
      subtitle: "Starting points; local agents tailor the hotels, days and price.",
      href: "/tour-packages",
      items: pick(interleave(groups, 10)),
    });
  for (const g of groups.filter((g) => g.length >= 3).slice(0, 3)) {
    const d = g[0].destination;
    packageRows.push({ key: d.slug, title: `${d.name} Tour Packages`, href: tourPackagesUrl(d.slug), items: pick(g) });
  }
  const biggest = groups[0];
  if (biggest && biggest.length >= 12) {
    const d = biggest[0].destination;
    const order = snowSeason ? ["Winter", "Honeymoon", "Family", "Friends"] : ["Honeymoon", "Family", "Friends", "Winter"];
    for (const tag of order) {
      const theme = THEMES.find((t) => t.tag === tag);
      const tagged = biggest.filter((p) => hasTag(p, tag));
      if (theme && tagged.length >= 4 && packageRows.length < 5)
        packageRows.push({ key: `${d.slug}-${tag}`, title: `${d.name} ${theme.name} Packages`, href: themeUrl(theme.prefix, d.slug), items: pick(tagged) });
    }
  }

  const getaways: Getaway[] = photoDestinations.slice(0, 12).map((d) => ({
    id: d.id,
    name: d.name,
    href: tourPackagesUrl(d.slug),
    image: d.heroImage,
    tagline: d.cities.length >= 3 ? `${d.cities.length} places to explore` : "Tour packages",
    international: d.isInternational,
  }));

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

      <div className="mx-auto max-w-7xl px-4">
        {/* 1. DESTINATION STRIP: one tap into any top destination. */}
        <nav aria-label="Popular destinations" className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-3 pb-1 pt-3 sm:gap-2 sm:pt-4">
          <Link href="/tour-packages" className="group flex w-[72px] shrink-0 flex-col items-center gap-1.5 text-center sm:w-20">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-tint text-brand ring-2 ring-brand ring-offset-2 sm:h-16 sm:w-16">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </span>
            <span className="text-[11px] font-semibold text-brand sm:text-xs">Explore</span>
          </Link>
          {destinations.map((d) => (
            <Link key={d.id} href={tourPackagesUrl(d.slug)} className="group flex w-[72px] shrink-0 flex-col items-center gap-1.5 text-center sm:w-20">
              {isPhoto(d.heroImage) ? (
                <Image
                  src={d.heroImage}
                  alt=""
                  width={64}
                  height={64}
                  className="h-14 w-14 rounded-full object-cover ring-1 ring-zinc-200 ring-offset-2 transition group-hover:ring-2 group-hover:ring-brand sm:h-16 sm:w-16"
                />
              ) : (
                <span className="grid h-14 w-14 place-items-center rounded-full bg-zinc-100 text-lg font-bold text-ink-soft ring-1 ring-zinc-200 ring-offset-2 sm:h-16 sm:w-16" aria-hidden>
                  {d.name[0]}
                </span>
              )}
              <span className="line-clamp-1 text-[11px] font-medium text-ink group-hover:text-brand sm:text-xs">{d.name}</span>
            </Link>
          ))}
        </nav>

        {/* 2. BANNER: compact, one job, start a trip request. */}
        <section className="relative isolate mt-3 overflow-hidden rounded-2xl bg-royal text-white sm:mt-4 sm:rounded-3xl">
          {heroPhoto && (
            <Image src={heroPhoto} alt="" fill priority sizes="(min-width: 1280px) 1248px, 100vw" className="-z-20 object-cover object-[center_35%]" />
          )}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/40 to-black/5" />
          <div className="max-w-2xl px-5 py-7 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            {snowSeason && (
              <Link
                href={themeUrl("winter-tour-packages", "kashmir")}
                className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/25"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 2v20M4.9 6l14.2 12M19.1 6 4.9 18M9 4l3 2 3-2M9 20l3-2 3 2" />
                </svg>
                Snow season in Kashmir: winter packages
                <span aria-hidden="true">→</span>
              </Link>
            )}
            <h1 className="text-[28px] font-extrabold leading-[1.08] tracking-tight [text-shadow:0_2px_14px_rgb(0_0_0/0.45)] sm:text-[42px]">
              Describe your trip once.
              <span className={`block font-bold ${frost}`}>Three local experts compete to plan it.</span>
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 [text-shadow:0_1px_8px_rgb(0_0_0/0.5)] sm:text-base">
              Free customised tour package quotes from up to 3 verified local travel agents. Book only the one you love.
            </p>

            <QuoteButton className="mt-5 flex w-full max-w-lg items-center gap-3 rounded-2xl bg-white p-2 pl-4 text-left shadow-xl shadow-black/25">
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-ink">Where do you want to go?</span>
                <span className="block truncate text-[11px] text-ink-soft">Dates, group and budget in under a minute</span>
              </span>
              <span className="shrink-0 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white">
                Get Quotes<span className="hidden sm:inline">, Free</span>
              </span>
            </QuoteButton>

            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] font-medium text-white sm:text-[13px]">
              {["Free, no booking fee", "Max 3 agents see your number", "Only agents for your destination"].map((t) => (
                <li key={t} className="flex items-center gap-1.5 [text-shadow:0_1px_6px_rgb(0_0_0/0.6)]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 12.5 4 4 8-9" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {proof.length > 0 && (
            <div className="absolute bottom-4 right-5 hidden text-right sm:block">
              {proof.map((p) => (
                <p key={p.label} className="[text-shadow:0_1px_8px_rgb(0_0_0/0.6)]">
                  <span className="block text-2xl font-bold">{p.n.toLocaleString("en-IN")}</span>
                  <span className="text-xs text-white/80">{p.label}</span>
                </p>
              ))}
            </div>
          )}
        </section>

        {/* 3. PACKAGE ROWS: real packages as price anchors, per destination. */}
        <div className="mt-3 sm:mt-5">
          {packageRows.map((row) => (
            <ScrollRow key={row.key} title={row.title} subtitle={row.subtitle} href={row.href}>
              {row.items.map((p) => (
                <TripCard
                  key={p.id}
                  slug={p.slug}
                  title={p.title}
                  summary={p.summary}
                  durationDays={p.durationDays}
                  durationNights={p.durationNights}
                  price={p.price}
                  referencePrice={p.referencePrice}
                  destinationName={p.destination.name}
                  theme={p.theme}
                  heroImage={packagePhoto(p)}
                />
              ))}
            </ScrollRow>
          ))}
        </div>

        {/* 4. HOW IT WORKS: a compact strip between the catalogue rows. */}
        <section className="my-6 rounded-2xl bg-brand-tint p-5 sm:my-8 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
            <div className="lg:w-64 lg:shrink-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">How it works</p>
              <h2 className="mt-1.5 text-xl font-bold tracking-tight text-ink sm:text-2xl">Better than one agency&apos;s fixed package</h2>
            </div>
            <ol className="grid flex-1 gap-3 sm:grid-cols-3 sm:gap-5">
              {[
                ["Share your plan", "Destination, dates, group and hotel budget. Takes under a minute."],
                ["Get up to 3 quotes", "Local agents who run trips there send custom itineraries and prices."],
                ["Compare and choose", "Ask questions, negotiate, and book only the one that fits you."],
              ].map(([t, d], i) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-sm font-bold text-brand shadow-sm">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-ink">{t}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-ink-soft">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. FIND YOUR GETAWAY: inspiration + internal links into the money pages. */}
        {getaways.length >= 3 && (
          <section className="py-5 sm:py-7">
            <div className="flex items-end justify-between gap-3">
              <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">Find your perfect getaway</h2>
              <Link
                href="/tour-packages"
                className="inline-flex shrink-0 items-center gap-1 rounded-full border border-brand px-3 py-1 text-[13px] font-semibold text-brand hover:bg-brand-tint"
              >
                All destinations <span aria-hidden>&rarr;</span>
              </Link>
            </div>
            <GetawayTiles items={getaways} />
          </section>
        )}

        {/* 6. QUOTE FORM + PRIVACY PROMISE: the page's one conversion point. */}
        <section className="grid gap-6 py-8 sm:py-12 lg:grid-cols-[1fr_400px] lg:items-start lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Plan your trip</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Get 3 custom quotes, free</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
              Tell us where and when. Up to 3 verified agents who live and work in your destination send their own itinerary
              and price. You compare and book only if you like one.
            </p>
            <div className="mt-5 max-w-xl rounded-2xl border border-zinc-200 p-5">
              <h3 className="flex items-center gap-2 font-bold text-ink">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                Our privacy promise
              </h3>
              <ul className="mt-3 grid gap-2 text-sm text-ink-soft sm:grid-cols-2">
                {[
                  "Your number is never shown on a public page.",
                  "At most 3 verified agents can see it, never more.",
                  "Only agents who serve your destination are matched.",
                  "No booking fee, no obligation to book.",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-brand" aria-hidden>
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div id="get-quotes" className="scroll-mt-20">
            <EnquiryForm destinations={destinations} dense title="Get 3 Free Quotes" />
          </div>
        </section>
      </div>

      {/* 7. LIVE LEADS FOR AGENTS: the product sample, real and masked. */}
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

            <div className="grid content-start gap-3 sm:grid-cols-2 max-sm:[&>*:nth-child(n+4)]:hidden">
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
                          Buy · {formatINR(leadPrice(lead, pricing))}
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
        {/* 8. FAQ: answer-ready for search and AI engines, both audiences. */}
        <section className="py-10 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Good to know</p>
          <h2 className="mb-5 mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Questions, answered</h2>
          <Faqs faqs={faqs} />
        </section>

      </div>
    </div>
  );
}
