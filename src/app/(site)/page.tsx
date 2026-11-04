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
    const prices = packages.filter((p) => hasTag(p, m.tag)).map((p) => p.price);
    const from = prices.length ? Math.min(...prices) : undefined;
    return theme && photo ? [{ ...m, name: theme.name, href: themeUrl(theme.prefix), photo, from }] : [];
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
    { n: stats.destinationCount, label: "Destinations", sub: "India and abroad", photo: photoOf("ladakh"), href: "/tour-packages" },
    { n: stats.packageCount, label: "Holiday packages", sub: "All customisable", photo: photoOf("kerala"), href: "/tour-packages" },
    { n: cityGuideCount, label: "City guides", sub: "Hill towns to beaches", photo: photoOf("rajasthan") ?? photoOf("goa"), href: "/tour-packages" },
    { n: BLOG_POSTS.length, label: "Travel guides", sub: "Written by our editors", photo: photoOf("kashmir"), href: "/blog" },
  ].filter((t) => t.n >= 10 && t.photo);

  const escapes = moods.slice(0, 4);
  const popular = photoDestinations.filter((d) => ["kashmir", "ladakh", "goa", "kerala", "maldives", "dubai"].includes(d.slug));
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
    <div className="pb-8">
      <JsonLd
        data={webPageSchema({
          path: "/",
          name: `${SITE_NAME}: Holiday Packages for India and Abroad`,
          description: metadata.description as string,
          breadcrumb: false,
          about: { "@id": ORG_ID },
        })}
      />

      {/* 1. HERO: compact photo card, the promise and the search. */}
      <section className="mx-auto max-w-7xl px-4 pt-3 sm:pt-4">
        <div className="relative isolate overflow-hidden rounded-3xl bg-royal text-white">
          {heroPhoto && (
            <Image src={heroPhoto} alt="" fill priority sizes="(min-width: 1280px) 1248px, 100vw" className="-z-20 object-cover object-[center_45%]" />
          )}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/25 to-black/55" />
          <div className="flex min-h-[380px] flex-col items-center justify-center px-4 py-10 text-center sm:min-h-[420px] sm:py-12">
            <h1 className="[text-shadow:0_2px_20px_rgb(0_0_0/0.35)]">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.25em] text-white/85 sm:text-xs">
                Holiday packages for India and abroad
              </span>
              <span className="mt-2 block text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-6xl">
                Your perfect escape
              </span>
            </h1>
            <p className="mt-3 max-w-lg text-sm text-white/90 sm:text-base">
              Handcrafted holidays, planned day by day around you by trip experts who know these places by heart.
            </p>
            <div className="mt-6 flex w-full justify-center">
              <HeroSearch destinations={destinations.map((d) => ({ name: d.name, href: tourPackagesUrl(d.slug) }))} />
            </div>
            {popular.length > 0 && (
              <div className="mt-4 flex flex-wrap justify-center gap-2 text-[13px]">
                {popular.map((d) => (
                  <Link key={d.id} href={tourPackagesUrl(d.slug)} className="rounded-full bg-white/15 px-3 py-1 font-medium backdrop-blur-sm transition hover:bg-white hover:text-ink">
                    {d.name}
                    {fromPrice.has(d.slug) && <span className="font-bold"> from {formatINR(fromPrice.get(d.slug)!)}</span>}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-4 pt-6 sm:space-y-12 sm:pt-8">
        {/* 2. NUMBERS: the real size of the catalogue, one slim row. */}
        {statTiles.length >= 2 && (
          <section className={`grid grid-cols-2 gap-2.5 sm:gap-3 ${statTiles.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {statTiles.map((t) => (
              <Link key={t.label} href={t.href} className="group relative isolate flex h-24 items-end overflow-hidden rounded-2xl p-3 text-white sm:h-28 sm:p-4">
                <Image src={t.photo!} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="-z-20 object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 to-black/20" />
                <div>
                  <p className="text-2xl font-extrabold leading-none tracking-tight sm:text-3xl">{roundDown(t.n)}+</p>
                  <p className="mt-1 text-[13px] font-semibold leading-tight">{t.label}</p>
                  <p className="text-[11px] leading-tight text-white/80">{t.sub}</p>
                </div>
              </Link>
            ))}
          </section>
        )}

        {/* 3. ESCAPES: pick the kind of holiday, priced. */}
        {escapes.length === 4 && (
          <section>
            <SectionHead title="Which escape is yours?" subtitle="Holidays by mood, with real starting prices." href="/tour-packages" />
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
              {escapes.map((m) => (
                <Link key={m.tag} href={m.href} className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl p-3 text-white sm:aspect-[4/3] sm:p-4">
                  <Image src={m.photo} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="-z-20 object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  {m.from && (
                    <span className="absolute left-3 top-3 rounded-md bg-white px-2 py-0.5 text-[11px] font-bold text-ink shadow-sm">
                      From {formatINR(m.from)}
                    </span>
                  )}
                  <p className="text-lg font-bold leading-tight sm:text-xl">{m.name}</p>
                  <p className="mt-0.5 line-clamp-1 text-[12px] text-white/85">{m.line}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 4. LEAD PACKAGES: real trips with real prices. */}
        {leadRow && <div>{packageRow(leadRow)}</div>}

        {/* 5. ABOUT: who plans the trip, kept short. */}
        <section className="grid items-center gap-4 rounded-3xl bg-brand-tint p-4 sm:grid-cols-[1fr_1.3fr] sm:gap-6 sm:p-6">
          <div className="grid grid-cols-3 gap-2">
            {aboutPhotos.map((src) => (
              <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src={src} alt="" fill sizes="(min-width: 640px) 15vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">Who we are, and what drives us</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {SITE_NAME} plans holidays across {roundDown(stats.destinationCount)}+ destinations in India and abroad. Every
              trip is planned by a trip expert who runs holidays in that destination, so hotels, roads and seasons are
              chosen first-hand. You see the day-by-day plan and the full price before you pay anything.
            </p>
            <Link href="/about-us" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark">
              Read our story <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* 6. PRINCIPLES: how every trip is planned, one compact row. */}
        <section>
          <SectionHead title="How we plan every trip" />
          <div className="grid gap-2.5 sm:grid-cols-3 sm:gap-3">
            {PRINCIPLES.map((p, i) => {
              const photo = principlePhotos[i];
              return (
                <div key={p.title} className="flex items-center gap-3 rounded-2xl bg-white p-2.5 ring-1 ring-zinc-200">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-brand-tint">
                    {photo && <Image src={photo} alt="" fill sizes="64px" className="object-cover" />}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-snug text-ink">{p.title}</p>
                    <p className="mt-0.5 text-[12px] leading-snug text-ink-soft">{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. STORIES: sell the place, then the price. */}
        {stories.length > 0 && (
          <div>
            <ScrollRow title="Places that stay with you" subtitle="What these trips feel like, and where they start." href="/tour-packages">
              {stories.map((s) => (
                <Link key={s.slug} href={s.href} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-zinc-200">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={s.photo} alt={`${s.kicker} holiday`} fill sizes="(min-width: 1024px) 33vw, 82vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-md bg-white px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-brand">{s.kicker}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-base font-bold leading-snug text-ink">{s.title}</h3>
                    <p className="mt-1 line-clamp-3 flex-1 text-[13px] leading-relaxed text-ink-soft">{s.body}</p>
                    <div className="mt-3 flex items-end justify-between gap-2 border-t border-zinc-100 pt-3">
                      {s.from ? (
                        <p className="text-[11px] text-ink-soft">
                          Starting <span className="block text-lg font-extrabold leading-none text-ink">{formatINR(s.from)}</span>per person
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="rounded-lg bg-brand px-3 py-2 text-[13px] font-semibold text-white transition group-hover:bg-brand-dark">View packages</span>
                    </div>
                  </div>
                </Link>
              ))}
            </ScrollRow>
          </div>
        )}

        {/* 8. MORE PACKAGES and every destination. */}
        {moreRows.length > 0 && <div>{moreRows.map(packageRow)}</div>}

        {getaways.length >= 3 && (
          <section>
            <SectionHead title="Where will you wake up next?" href="/tour-packages" />
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
          <div className="grid items-start gap-2.5 md:grid-cols-2">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl bg-white px-4 py-3 ring-1 ring-zinc-200 open:bg-brand-tint open:ring-transparent">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span aria-hidden className="shrink-0 text-lg leading-none text-brand transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 10. PLAN: the page's one form, on a photo banner. */}
        <section id="get-quotes" className="relative isolate scroll-mt-20 overflow-hidden rounded-3xl bg-royal text-white">
          {bannerPhoto && <Image src={bannerPhoto} alt="" fill sizes="(min-width: 1280px) 1248px, 100vw" className="-z-20 object-cover" />}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
          <div className="grid gap-6 p-4 sm:p-8 lg:grid-cols-[1fr_400px] lg:items-center lg:gap-12">
            <div>
              <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-4xl">Tell us the trip you are dreaming of. We will make it real.</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-[15px]">
                Share where and when. A trip expert gets back to you with a day-by-day plan, the hotels and the price, and
                shapes it with you until it feels right.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(`Hi ${SITE_NAME}, I'd like help planning a holiday.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold transition hover:bg-white/10"
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

// Section title in the same style as the package rows, with a View All link.
function SectionHead({ title, subtitle, href }: { title: string; subtitle?: string; href?: string }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3 sm:mb-4">
      <div className="min-w-0">
        <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{title}</h2>
        {subtitle && <p className="mt-0.5 text-[13px] text-ink-soft sm:text-sm">{subtitle}</p>}
      </div>
      {href && (
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-1 rounded-full border border-brand px-3 py-1 text-[13px] font-semibold text-brand hover:bg-brand-tint"
        >
          View All <span aria-hidden>&rarr;</span>
        </Link>
      )}
    </div>
  );
}
