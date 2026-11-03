import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Fraunces } from "next/font/google";
import { prisma } from "@/lib/prisma";
import { getDestinationsWithCitiesAndLeadCounts, getSiteStats } from "@/lib/data";
import TripCard from "@/components/TripCard";
import ScrollRow from "@/components/ScrollRow";
import GetawayTiles, { type Getaway } from "@/components/GetawayTiles";
import HeroSearch from "@/components/HeroSearch";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { Faqs } from "@/components/location/blocks";
import { formatINR } from "@/lib/format";
import { isPhoto, packagePhoto } from "@/lib/media";
import { themeUrl, tourPackagesUrl } from "@/lib/urls";
import { THEMES } from "@/data/locations";
import { SITE_NAME, WHATSAPP_DIGITS, WHATSAPP_NUMBER } from "@/lib/site";
import { ORG_ID, webPageSchema } from "@/lib/schema";

export const revalidate = 300;

// Editorial serif for the homepage's emotional headlines only; the rest of
// the site stays on Plus Jakarta Sans.
const fraunces = Fraunces({ variable: "--font-serif", subsets: ["latin"], style: ["normal", "italic"], display: "swap" });
const serif = "[font-family:var(--font-serif)]";

// Kashmir's snow season (November to March, India time): the hero shows a
// real Gulmarg winter photo (Pexels, free licence) and links to winter trips.
const WINTER_HERO = "/media/kashmir-winter-gulmarg-snow-meadow.webp";
function isKashmirSnowSeason(now = new Date()) {
  const month = Number(new Intl.DateTimeFormat("en-IN", { month: "numeric", timeZone: "Asia/Kolkata" }).format(now));
  return month >= 11 || month <= 3;
}

// Homepage strategy: a holiday store for travellers, nothing else.
//   1. Full-bleed hero that sells the feeling, with a destination search.
//   2. Real packages first, then moods (themes) and places told as stories.
//   3. One conversion point (trip form) inside a single dark band.
//   4. Traveller-only FAQ (FAQPage schema) for search and AI answers.

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

// Holiday moods: theme page + the destination whose photo carries the feeling.
const MOODS: { tag: string; photo: string; line: string }[] = [
  { tag: "Honeymoon", photo: "maldives", line: "Slow mornings, just the two of you" },
  { tag: "Family", photo: "kerala", line: "Trips the kids will still talk about" },
  { tag: "Winter", photo: "kashmir-winter", line: "Snow, kahwa and frozen lakes" },
  { tag: "Adventure", photo: "ladakh", line: "High passes and endless roads" },
  { tag: "Friends", photo: "goa", line: "Beaches, music and late nights" },
  { tag: "Beach", photo: "andaman", line: "Clear water and soft white sand" },
  { tag: "Pilgrimage", photo: "uttarakhand", line: "Journeys that calm the mind" },
  { tag: "Luxury", photo: "switzerland", line: "Stays worth the journey itself" },
];

// Places told as stories: what the trip feels like, all of it true on the ground.
const STORIES: { slug: string; kicker: string; title: string; body: string }[] = [
  {
    slug: "kashmir",
    kicker: "Kashmir",
    title: "Wake up on Dal Lake",
    body: "A cedar houseboat, a shikara gliding past the floating vegetable market at dawn, saffron kahwa in your hands. By afternoon you are in Gulmarg's meadows or Pahalgam's pine valleys, and every view looks painted.",
  },
  {
    slug: "ladakh",
    kicker: "Ladakh",
    title: "Where the sky comes closer",
    body: "Drive over some of the highest motorable passes on earth, watch Pangong Lake turn from blue to green, and hear nothing but prayer flags in the wind at a monastery above the Indus.",
  },
  {
    slug: "kerala",
    kicker: "Kerala",
    title: "Let the backwaters slow you down",
    body: "Float through Alleppey's palm-lined canals on a kettuvallam, walk Munnar's misty tea hills, and end the day with fresh seafood as the sun sets over the Arabian Sea.",
  },
];

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME}: Holiday Packages for India and Abroad, Planned Around You` },
  description:
    "Handcrafted holiday packages for Kashmir, Ladakh, Kerala, Goa, the Maldives, Dubai and more. Every itinerary tailored day by day, no booking fee, talk to a trip expert on call or WhatsApp.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const [destinations, packages, stats] = await Promise.all([
    getDestinationsWithCitiesAndLeadCounts({ tier: 1 }),
    getHomePackages(),
    getSiteStats(),
  ]);

  const snowSeason = isKashmirSnowSeason();
  const photoDestinations = destinations.filter((d) => isPhoto(d.heroImage));
  const heroPhoto = snowSeason ? WINTER_HERO : photoDestinations[0]?.heroImage;
  const photoOf = (slug: string) =>
    slug === "kashmir-winter" ? WINTER_HERO : destinations.find((d) => d.slug === slug && isPhoto(d.heroImage))?.heroImage;

  // Lowest real package price per destination, for "from" lines.
  const fromPrice = new Map<string, number>();
  for (const p of packages) {
    const s = p.destination.slug;
    if (!fromPrice.has(s) || p.price < fromPrice.get(s)!) fromPrice.set(s, p.price);
  }

  // Package rows: a mixed lead row, one row per destination with a real
  // catalogue, and theme rows (winter, honeymoon, family...) for the biggest
  // one. Rows need 3+ packages so none looks empty.
  const byDestination = new Map<string, HomePackage[]>();
  for (const p of packages) byDestination.set(p.destinationId, [...(byDestination.get(p.destinationId) ?? []), p]);
  const groups = [...byDestination.values()].sort((a, b) => b.length - a.length);
  type Row = { key: string; title: string; subtitle?: string; href: string; items: HomePackage[] };
  const rows: Row[] = [];
  // Each row leads with packages no earlier row has shown.
  const seen = new Set<string>();
  const pick = (list: HomePackage[], n = 10) => {
    const items = [...list.filter((p) => !seen.has(p.id)), ...list.filter((p) => seen.has(p.id))].slice(0, n);
    items.forEach((p) => seen.add(p.id));
    return items;
  };
  for (const g of groups.filter((g) => g.length >= 3).slice(0, 3)) {
    const d = g[0].destination;
    rows.push({
      key: d.slug,
      title: `${d.name} Tour Packages`,
      subtitle: "Our most-booked itineraries, tailored to your dates and hotel choice.",
      href: tourPackagesUrl(d.slug),
      items: pick(g),
    });
  }
  if (groups.length > 1)
    rows.unshift({ key: "trending", title: "Trending holidays", href: "/tour-packages", items: pick(interleave(groups, 10)) });
  const biggest = groups[0];
  if (biggest && biggest.length >= 12) {
    const d = biggest[0].destination;
    const order = snowSeason ? ["Winter", "Honeymoon", "Family", "Friends"] : ["Honeymoon", "Family", "Friends", "Winter"];
    for (const tag of order) {
      const theme = THEMES.find((t) => t.tag === tag);
      const tagged = biggest.filter((p) => hasTag(p, tag));
      if (theme && tagged.length >= 4 && rows.length < 3)
        rows.push({ key: `${d.slug}-${tag}`, title: `${d.name} ${theme.name} Packages`, href: themeUrl(theme.prefix, d.slug), items: pick(tagged) });
    }
  }
  const [leadRow, ...moreRows] = rows;

  const moods = MOODS.flatMap((m) => {
    const theme = THEMES.find((t) => t.tag === m.tag);
    const photo = photoOf(m.photo);
    return theme && photo ? [{ ...m, name: theme.name, href: themeUrl(theme.prefix), photo }] : [];
  });

  const stories = STORIES.flatMap((s) => {
    const photo = photoOf(s.slug);
    return photo ? [{ ...s, photo, href: tourPackagesUrl(s.slug), from: fromPrice.get(s.slug) }] : [];
  });

  const getaways: Getaway[] = photoDestinations.slice(0, 16).map((d) => ({
    id: d.id,
    name: d.name,
    href: tourPackagesUrl(d.slug),
    image: d.heroImage,
    tagline: fromPrice.has(d.slug) ? `From ${formatINR(fromPrice.get(d.slug)!)} / person` : d.isInternational ? "International" : "India",
    international: d.isInternational,
  }));

  const popular = photoDestinations.filter((d) => ["kashmir", "ladakh", "kerala", "goa", "maldives", "dubai"].includes(d.slug));

  const promises = [
    ...(stats.destinationCount >= 10
      ? [{ big: `${stats.destinationCount}+`, label: "destinations", sub: "Across India and abroad" }]
      : []),
    { big: "Tailor-made", label: "", sub: "Every day planned around you" },
    { big: "₹0", label: "booking fee", sub: "Planning your trip is free" },
    { big: "Real people", label: "", sub: "Call or WhatsApp a trip expert" },
  ];

  const faqs = [
    {
      q: `How do I book a holiday package with ${SITE_NAME}?`,
      a: "Pick a package you like, or simply tell us where and when you want to travel. A trip expert for that destination calls or WhatsApps you with a day-by-day itinerary and price. Change anything you want, and book once it feels right.",
    },
    {
      q: "Can I customise a tour package?",
      a: "Yes, every package is a starting point. You can add or remove days, change hotels, switch the cab, add experiences like a shikara ride or a backwater cruise, and plan around your own dates and budget.",
    },
    {
      q: "Is there a booking fee?",
      a: "No. Planning your trip and getting a price is free, and there is no booking fee. You pay only after you have confirmed the final itinerary.",
    },
    {
      q: "Are the package prices final?",
      a: "Prices on packages are per-person starting prices. The final price depends on your dates, hotel category and group size, and it is shared with you in full before you pay anything.",
    },
    {
      q: "Who sees my phone number?",
      a: "Only the trip experts planning your holiday for that destination. Your number is never shown on a public page and is used only for this trip.",
    },
    {
      q: "Which destinations do you cover?",
      a: "Every state in India, from Kashmir, Ladakh and Himachal to Kerala, Goa, Rajasthan, Sikkim and the Andamans, plus international holidays to the Maldives, Dubai, Thailand, Bali, Singapore, Vietnam, Sri Lanka, Bhutan, Mauritius and Switzerland.",
    },
  ];

  const packageRow = (row: Row) => (
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
  );

  return (
    <div className={fraunces.variable}>
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: `${SITE_NAME}: Holiday Packages for India and Abroad`,
          description: metadata.description as string,
          breadcrumb: false,
          about: { "@id": ORG_ID },
        })}
      />

      {/* 1. HERO: full-bleed photo, the feeling first, then a search. */}
      <section className="relative isolate overflow-hidden bg-royal text-white">
        {heroPhoto && (
          <Image src={heroPhoto} alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[center_40%]" />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/25 to-black/70 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/35 sm:to-black/10" />
        <div className="mx-auto flex min-h-[540px] max-w-7xl flex-col justify-end px-4 pb-20 pt-16 sm:min-h-[600px] sm:justify-center sm:pb-24">
          {snowSeason && (
            <Link
              href={themeUrl("winter-tour-packages", "kashmir")}
              className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition hover:bg-white/25"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden />
              Kashmir is turning white. See winter holidays
              <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
          <h1 className={`${serif} max-w-4xl text-[38px] font-semibold leading-[1.02] tracking-tight [text-shadow:0_2px_18px_rgb(0_0_0/0.35)] sm:text-6xl lg:text-7xl`}>
            Some places you visit.
            <span className="block font-normal italic text-[#f3e6cf]">Some stay with you forever.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/90 [text-shadow:0_1px_8px_rgb(0_0_0/0.5)] sm:text-lg">
            Handcrafted holiday packages across India and the world, planned day by day around you by trip experts
            who know these places by heart.
          </p>
          <div className="mt-7">
            <HeroSearch destinations={destinations.map((d) => ({ name: d.name, href: tourPackagesUrl(d.slug) }))} />
          </div>
          {popular.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px]">
              <span className="text-white/75">Popular:</span>
              {popular.map((d) => (
                <Link
                  key={d.id}
                  href={tourPackagesUrl(d.slug)}
                  className="rounded-full border border-white/30 px-3 py-1 font-medium backdrop-blur-sm transition hover:bg-white hover:text-ink"
                >
                  {d.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        {/* 2. PROMISES: four plain facts, overlapping the hero edge. */}
        <ul className="relative z-10 -mt-12 grid grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_-12px_rgb(20_33_61/0.25)] ring-1 ring-zinc-100 lg:grid-cols-4">
          {promises.slice(0, 4).map((p, i) => (
            <li
              key={p.sub}
              className={`px-4 py-4 sm:px-6 sm:py-5 ${i % 2 ? "border-l border-zinc-100" : ""} ${i > 1 ? "border-t border-zinc-100 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <p className="text-lg font-extrabold leading-tight tracking-tight text-brand sm:text-xl">
                {p.big} {p.label && <span className="text-sm font-semibold text-ink">{p.label}</span>}
              </p>
              <p className="mt-0.5 text-[12px] leading-snug text-ink-soft sm:text-[13px]">{p.sub}</p>
            </li>
          ))}
        </ul>

        {/* 3. LEAD PACKAGE ROW: real packages right away. */}
        <div className="mt-4 sm:mt-6">{leadRow && packageRow(leadRow)}</div>

        {/* 4. MOODS: browse by the kind of holiday you want. */}
        {moods.length >= 4 && (
          <section className="py-6 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Holidays by mood</p>
            <h2 className={`${serif} mt-1.5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl`}>What kind of escape are you craving?</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {moods.map((m) => (
                <Link key={m.tag} href={m.href} className="group relative isolate aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[5/4]">
                  <Image
                    src={m.photo}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="-z-20 object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4">
                    <p className={`${serif} text-xl font-semibold leading-none sm:text-2xl`}>{m.name}</p>
                    <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-white/85 sm:line-clamp-1 sm:text-[13px]">{m.line}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 5. STORIES: sell the place, then the package. */}
        {stories.length > 0 && (
          <section className="py-6 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Places that stay with you</p>
            <h2 className={`${serif} mt-1.5 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl`}>
              Not just a trip. A feeling you bring home.
            </h2>
            <div className="no-scrollbar -mx-4 mt-6 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0">
              {stories.map((s) => (
                <article key={s.slug} className="group flex w-[84%] shrink-0 snap-start flex-col sm:w-[46%] lg:w-auto">
                  <Link href={s.href} tabIndex={-1} className="relative block aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image src={s.photo} alt={`${s.kicker} holiday`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </Link>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{s.kicker}</p>
                  <h3 className={`${serif} mt-1 text-2xl font-semibold leading-tight text-ink`}>{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
                  <Link href={s.href} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark">
                    {s.from ? `${s.kicker} holidays from ${formatINR(s.from)} / person` : `Explore ${s.kicker} holidays`}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 6. MORE PACKAGES: per destination and per theme. */}
        {moreRows.map(packageRow)}

        {/* 7. DESTINATIONS: India and international, filterable. */}
        {getaways.length >= 3 && (
          <section className="py-6 sm:py-10">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">India and beyond</p>
                <h2 className={`${serif} mt-1.5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl`}>Where will you wake up next?</h2>
              </div>
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
      </div>

      {/* 8. PLAN WITH US: why us + the page's one form, in one dark band. */}
      <section className="mt-6 bg-royal py-12 text-white sm:mt-10 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_420px] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b779]">Plan your holiday</p>
            <h2 className={`${serif} mt-2 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl`}>
              Tell us the trip you have been dreaming of.
              <span className="block italic font-normal text-[#f3e6cf]">We will make it real.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/80">
              Share where you want to go and when. A trip expert gets back to you with a day-by-day plan, the hotels and
              the price, and shapes it with you until it feels exactly right.
            </p>
            <ul className="mt-7 grid gap-5 sm:grid-cols-2">
              {[
                ["Planned by people who know the place", "Hotels, roads, seasons and the small spots worth the detour."],
                ["Built entirely around you", "Your dates, your pace, your budget. Change any day you like."],
                ["Clear prices, no surprises", "See exactly what is included before you pay a rupee."],
                ["Someone to talk to", "A real person on call and WhatsApp, from first question to final booking."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-[#d9b779]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 12.5 4 4 8-9" />
                  </svg>
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-white/70">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(`Hi ${SITE_NAME}, I'd like help planning a holiday.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/25 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10"
            >
              Prefer to chat? WhatsApp {WHATSAPP_NUMBER}
            </a>
          </div>
          <div id="get-quotes" className="scroll-mt-20">
            <EnquiryForm destinations={destinations} brand title="Plan My Holiday" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4">
        {/* 9. FAQ: traveller questions, answer-ready for search and AI. */}
        <section className="py-10 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Good to know</p>
          <h2 className={`${serif} mb-5 mt-1.5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl`}>Before you pack your bags</h2>
          <Faqs faqs={faqs} />
        </section>
      </div>
    </div>
  );
}
