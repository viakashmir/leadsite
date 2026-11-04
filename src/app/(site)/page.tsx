import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { getDestinationsWithCitiesAndLeadCounts, getSiteStats } from "@/lib/data";
import TripCard from "@/components/TripCard";
import ScrollRow from "@/components/ScrollRow";
import GetawayTiles, { type Getaway } from "@/components/GetawayTiles";
import HeroSearch from "@/components/HeroSearch";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { BLOG_POSTS } from "@/data/blog";
import { formatINR } from "@/lib/format";
import { isPhoto, packagePhoto } from "@/lib/media";
import { themeUrl, tourPackagesUrl } from "@/lib/urls";
import { THEMES } from "@/data/locations";
import { SITE_NAME, WHATSAPP_DIGITS, WHATSAPP_NUMBER } from "@/lib/site";
import { ORG_ID, webPageSchema } from "@/lib/schema";

// No timed rebuilds: every timed ISR rebuild is a billed ISR write, and
// crawlers hitting thousands of pages hourly blocked the Vercel account.
// Pages refresh on deploy and on demand (admin edits, new leads, unlocks).
export const revalidate = false;

// Kashmir's snow season (November to March, India time): the hero shows a
// real Gulmarg winter photo (Pexels, free licence) and links to winter trips.
const WINTER_HERO = "/media/kashmir-winter-gulmarg-snow-meadow.webp";
function isKashmirSnowSeason(now = new Date()) {
  const month = Number(new Intl.DateTimeFormat("en-IN", { month: "numeric", timeZone: "Asia/Kolkata" }).format(now));
  return month >= 11 || month <= 3;
}

// Homepage strategy: a holiday store for travellers, nothing else, laid out
// as rounded photo cards with plenty of white space.
//   1. Rounded hero card with the promise and a destination search.
//   2. Real catalogue numbers, holiday moods, then real packages.
//   3. Who plans the trip, how, and places told as stories.
//   4. Traveller-only FAQ (FAQPage schema), then one form on a photo banner.

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

// How every trip is planned; shown on the principle cards.
const PRINCIPLES = [
  { title: "Planned by people who know the place", body: "Hotels, roads, seasons and the small spots worth the detour, chosen first-hand." },
  { title: "Built entirely around you", body: "Your dates, your pace, your budget. Change any day of the plan you like." },
  { title: "Clear prices, no surprises", body: "See exactly what is included and the full price before you pay anything." },
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
    "Handcrafted holiday packages for Kashmir, Ladakh, Kerala, Goa, the Maldives, Dubai and more. Every itinerary tailored day by day; talk to a trip expert on call or WhatsApp.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const [destinations, packages, stats, cityGuideCount] = await Promise.all([
    getDestinationsWithCitiesAndLeadCounts({ tier: 1 }),
    getHomePackages(),
    getSiteStats(),
    prisma.city.count({ where: { contentStatus: "READY" } }),
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

  // Real catalogue numbers, rounded down so every "+" stays true.
  const roundDown = (n: number) => (n >= 20 ? Math.floor(n / 10) * 10 : n);
  const statTiles = [
    { n: stats.destinationCount, label: "destinations across India and abroad", photo: photoOf("ladakh"), href: "/tour-packages" },
    { n: stats.packageCount, label: "holiday packages, each one customisable", photo: photoOf("kerala"), href: "/tour-packages" },
    { n: cityGuideCount, label: "cities and hill towns with full guides", photo: photoOf("rajasthan") ?? photoOf("goa"), href: "/tour-packages" },
    { n: BLOG_POSTS.length, label: "travel guides written by our editors", photo: photoOf("kashmir"), href: "/blog" },
  ].filter((t) => t.n >= 10 && t.photo);

  const escapes = moods.slice(0, 4);
  const aboutPhotos = ["kashmir", "maldives", "kerala"].flatMap((s) => photoOf(s) ?? []);
  const principlePhotos = [photoOf("uttarakhand"), photoOf("himachal"), photoOf("andaman")];
  const bannerPhoto = photoOf("ladakh") ?? heroPhoto;

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
    <div className="pb-10">
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: `${SITE_NAME}: Holiday Packages for India and Abroad`,
          description: metadata.description as string,
          breadcrumb: false,
          about: { "@id": ORG_ID },
        })}
      />

      {/* 1. HERO: one rounded photo card, the promise in the middle, the next step below. */}
      <section className="mx-auto max-w-7xl px-4 pt-4">
        <div className="relative isolate flex min-h-[560px] flex-col overflow-hidden rounded-[28px] bg-royal text-white sm:min-h-[640px]">
          {heroPhoto && (
            <Image src={heroPhoto} alt="" fill priority sizes="(min-width: 1280px) 1248px, 100vw" className="-z-20 object-cover object-[center_45%]" />
          )}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/15 to-black/60" />
          <div className="flex flex-1 flex-col items-center justify-center px-5 pt-12 text-center">
            <h1 className="[text-shadow:0_2px_24px_rgb(0_0_0/0.35)]">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-white/85 sm:text-sm">
                Holiday packages for India and abroad
              </span>
              <span className="mt-3 block text-[44px] font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-[104px]">
                Your perfect escape
              </span>
            </h1>
            <div className="mt-8 flex w-full justify-center">
              <HeroSearch destinations={destinations.map((d) => ({ name: d.name, href: tourPackagesUrl(d.slug) }))} />
            </div>
          </div>
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8">
            <p className="max-w-sm text-sm leading-relaxed text-white/90 [text-shadow:0_1px_8px_rgb(0_0_0/0.5)]">
              Handcrafted holidays across India and the world, planned day by day around you by trip experts who know
              these places by heart.
            </p>
            <PillLink href="#get-quotes" light>
              Plan my trip
            </PillLink>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-14 px-4 pt-14 sm:space-y-20 sm:pt-20">
        {/* 2. NUMBERS: the real size of the catalogue, on photos. */}
        {statTiles.length >= 2 && (
          <section>
            <SectionHead title="Where we can take you" href="/tour-packages" label="All destinations" />
            <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${statTiles.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {statTiles.map((t) => (
                <Link key={t.label} href={t.href} className="group relative isolate flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-3xl p-4 text-white sm:p-5">
                  <Image src={t.photo!} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="-z-20 object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/5 to-black/65" />
                  <p className="text-4xl font-extrabold tracking-tight sm:text-6xl">{roundDown(t.n)}+</p>
                  <p className="max-w-[14rem] text-[13px] font-medium leading-snug sm:text-[15px]">{t.label}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 3. ESCAPES: pick the kind of holiday first. */}
        {escapes.length === 4 && (
          <section>
            <SectionHead title="Which escape is yours?" href="/tour-packages" label="All holidays" />
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {escapes.map((m) => (
                <Link key={m.tag} href={m.href} className="group relative isolate flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-3xl p-4 text-white sm:aspect-[16/9] sm:p-6">
                  <Image src={m.photo} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" className="-z-20 object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xl font-bold sm:text-2xl">{m.name}</p>
                      <p className="mt-1 text-[13px] text-white/85 sm:text-sm">{m.line}</p>
                    </div>
                    <PillSpan light>Explore</PillSpan>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 4. LEAD PACKAGES: real trips with real prices. */}
        {leadRow && <div>{packageRow(leadRow)}</div>}

        {/* 5. ABOUT: who plans the trip, on one soft panel. */}
        <section className="grid gap-5 rounded-[28px] bg-brand-tint p-4 sm:p-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-[32px]">Who we are, and what drives us</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {aboutPhotos.map((src, i) => (
                <div key={src} className={`relative overflow-hidden rounded-2xl ${i === 0 ? "row-span-2 aspect-[3/4] sm:aspect-auto" : "aspect-[4/3]"}`}>
                  <Image src={src} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-white p-5 sm:p-7">
            <div className="space-y-4 text-[15px] leading-relaxed text-ink-soft">
              <p className="text-lg font-semibold leading-snug text-ink">
                We believe a holiday should feel like it was made for you, because it was.
              </p>
              <p>
                {SITE_NAME} plans holidays across {roundDown(stats.destinationCount)}+ destinations in India and abroad, from
                Kashmir&apos;s houseboats and Ladakh&apos;s high passes to Kerala&apos;s backwaters, the Maldives and Dubai.
              </p>
              <p>
                Every trip is planned by a trip expert who runs holidays in that destination, so hotels, roads and seasons are
                chosen by people who know them first-hand. Our editorial team writes and fact-checks the travel guides on
                this site, so you plan with real information.
              </p>
              <p>You see the day-by-day plan and the full price before you pay anything, and you can change any part of it.</p>
            </div>
            <PillLink href="/about-us">Read our story</PillLink>
          </div>
        </section>

        {/* 6. PRINCIPLES: how every trip is planned. */}
        <section>
          <SectionHead title="How we plan every trip" />
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {PRINCIPLES.map((p, i) => {
              const photo = principlePhotos[i];
              return (
                <div key={p.title} className="relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-3xl bg-royal p-3 sm:aspect-[4/5]">
                  {photo && <Image src={photo} alt="" fill sizes="(min-width: 640px) 33vw, 100vw" className="-z-10 object-cover" />}
                  <div className="rounded-2xl bg-white/95 p-4 backdrop-blur-sm">
                    <p className="font-bold text-ink">{p.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. STORIES: sell the place, then the package. */}
        {stories.length > 0 && (
          <section>
            <SectionHead title="Places that stay with you" href="/tour-packages" label="All destinations" />
            <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
              {stories.map((s) => (
                <article key={s.slug} className="flex flex-col rounded-3xl bg-brand-tint p-3 sm:p-4">
                  <Link href={s.href} tabIndex={-1} className="relative block aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image src={s.photo} alt={`${s.kicker} holiday`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  </Link>
                  <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{s.kicker}</p>
                    <h3 className="mt-1 text-xl font-bold leading-tight text-ink">{s.title}</h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft">{s.body}</p>
                    <Link href={s.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark">
                      {s.from ? `${s.kicker} holidays from ${formatINR(s.from)} / person` : `Explore ${s.kicker} holidays`}
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 8. MORE PACKAGES and every destination. */}
        {moreRows.length > 0 && <div>{moreRows.map(packageRow)}</div>}

        {getaways.length >= 3 && (
          <section>
            <SectionHead title="Where will you wake up next?" href="/tour-packages" label="All destinations" />
            <GetawayTiles items={getaways} />
          </section>
        )}

        {/* 9. FAQ: two columns, answer-ready for search and AI. */}
        <section>
          <SectionHead title="Answers before you ask" />
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            }}
          />
          <div className="grid items-start gap-3 md:grid-cols-2">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white px-5 py-4 ring-1 ring-zinc-200 open:bg-brand-tint open:ring-transparent">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span aria-hidden className="mt-0.5 shrink-0 text-lg leading-none text-brand transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 10. PLAN: the page's one form, on a photo banner. */}
        <section id="get-quotes" className="relative isolate scroll-mt-20 overflow-hidden rounded-[28px] bg-royal text-white">
          {bannerPhoto && <Image src={bannerPhoto} alt="" fill sizes="(min-width: 1280px) 1248px, 100vw" className="-z-20 object-cover" />}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
          <div className="grid gap-8 p-5 sm:p-10 lg:grid-cols-[1fr_420px] lg:items-center lg:gap-14">
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                Tell us the trip you have been dreaming of. We will make it real.
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/85">
                Share where you want to go and when. A trip expert gets back to you with a day-by-day plan, the hotels and
                the price, and shapes it with you until it feels exactly right.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(`Hi ${SITE_NAME}, I'd like help planning a holiday.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10"
              >
                Prefer to chat? WhatsApp {WHATSAPP_NUMBER}
              </a>
            </div>
            <EnquiryForm destinations={destinations} brand title="Plan My Holiday" />
          </div>
        </section>
      </div>
    </div>
  );
}

const ARROW = (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

function SectionHead({ title, href, label }: { title: string; href?: string; label?: string }) {
  return (
    <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-[32px]">{title}</h2>
      {href && (
        <Link
          href={href}
          aria-label={label ?? title}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-ink ring-1 ring-zinc-300 transition hover:bg-brand hover:text-white hover:ring-brand"
        >
          {ARROW}
        </Link>
      )}
    </div>
  );
}

function PillInner({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <>
      <span className="pl-2">{children}</span>
      <span className={`grid h-9 w-9 place-items-center rounded-full ${light ? "bg-brand text-white" : "bg-white text-brand"}`}>{ARROW}</span>
    </>
  );
}

const pillClass = (light?: boolean) =>
  `inline-flex w-fit shrink-0 items-center gap-3 rounded-full py-1 pl-3 pr-1 text-sm font-semibold transition ${
    light ? "bg-white text-ink hover:bg-brand-tint" : "bg-brand text-white hover:bg-brand-dark"
  }`;

function PillLink({ href, children, light }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <Link href={href} className={pillClass(light)}>
      <PillInner light={light}>{children}</PillInner>
    </Link>
  );
}

function PillSpan({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={pillClass(light)}>
      <PillInner light={light}>{children}</PillInner>
    </span>
  );
}
