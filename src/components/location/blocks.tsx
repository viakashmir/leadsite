import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import EnquiryForm from "@/components/EnquiryForm";
import TripCard from "@/components/TripCard";
import TrustTicks from "@/components/TrustTicks";
import QuoteButton from "@/components/QuoteButton";
import { EDITORIAL_TEAM, SITE_URL } from "@/lib/site";
import { formatDate } from "@/lib/format";
import { packagePhoto } from "@/lib/media";
import { titleCase } from "@/lib/text";
import {
  getEnquiryOptions,
  type ContentBlock,
  type GuideContent,
  type Itinerary,
  type MonthGuide,
  type RouteGuide,
} from "@/lib/locations";
import type { Prisma } from "@/generated/prisma/client";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": `${SITE_URL}${all[all.length - 1].href === "/" ? "" : all[all.length - 1].href}#breadcrumb`,
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-ink-soft">
        {all.map((c, i) => (
          <span key={c.href}>
            {i > 0 && <span className="mx-1.5 text-zinc-300">/</span>}
            {i === all.length - 1 ? (
              <span className="text-ink">{c.name}</span>
            ) : (
              <Link href={c.href} className="hover:text-brand">
                {c.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}

export function PageHero({
  crumbs,
  title,
  subtitle,
  badges,
  updated,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  subtitle?: string;
  badges?: string[];
  updated?: Date;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-1 pt-4 sm:pt-6">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-[28px]">{titleCase(title)}</h1>
        {subtitle && <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-ink-soft sm:text-[15px]">{subtitle}</p>}
        {updated && <Byline updated={updated} />}
        {badges && badges.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {badges.map((b) => (
              <span key={b} className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-semibold text-ink">
                {b}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

// Who wrote the page and when it was last checked: shown to readers and
// mirrored in the page's Article schema (author + dateModified).
export function Byline({ updated }: { updated: Date }) {
  return (
    <p className="mt-2 text-xs text-ink-soft">
      By{" "}
      <Link href="/editorial-policy" rel="author" className="font-semibold text-ink hover:text-brand">
        {EDITORIAL_TEAM}
      </Link>
      <span className="mx-1.5 text-zinc-300">·</span>
      Updated <time dateTime={updated.toISOString()}>{formatDate(updated)}</time>
      <span className="mx-1.5 text-zinc-300">·</span>
      <Link href="/editorial-policy" className="hover:text-brand">
        How we research
      </Link>
    </p>
  );
}

// Soft panel colours for sections that should stand out (itinerary, inclusions).
const TINTS = {
  warm: "rounded-[14px] bg-[#fdf8f3] p-4 sm:p-6",
  green: "rounded-[14px] bg-emerald-50/70 p-4 sm:p-6",
} as const;

export function Section({
  title,
  subtitle,
  children,
  id,
  tint,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
  tint?: keyof typeof TINTS;
}) {
  return (
    <section id={id} className={`scroll-mt-20 ${tint ? `my-4 ${TINTS[tint]}` : "py-4 sm:py-5"}`}>
      <h2 className="font-display text-xl font-bold leading-tight tracking-tight text-ink sm:text-2xl">{titleCase(title)}</h2>
      {subtitle && <p className="mt-1 text-sm text-ink-soft">{subtitle}</p>}
      <div className="mt-3">{children}</div>
    </section>
  );
}

// scroll: one swipeable row on phones (section navigation), wrapping on larger screens.
export function ChipLinks({
  links,
  scroll = false,
}: {
  links: { label: string; href: string; active?: boolean }[];
  scroll?: boolean;
}) {
  if (links.length === 0) return null;
  return (
    <div
      className={
        scroll
          ? "no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
          : "flex flex-wrap gap-2"
      }
    >
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          aria-current={l.active ? "page" : undefined}
          className={`shrink-0 whitespace-nowrap rounded-lg border px-3 py-1.5 text-[13px] font-medium transition ${
            l.active
              ? "border-brand bg-brand text-white"
              : "border-zinc-200 bg-white text-ink hover:border-zinc-300 hover:text-brand"
          }`}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export function CardLinks({
  items,
}: {
  items: { title: string; href: string; meta?: string; description?: string }[];
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          className="group rounded-xl border border-zinc-200 bg-white px-3.5 py-3 transition hover:border-zinc-300 hover:shadow-sm"
        >
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-bold text-ink group-hover:text-brand">
              <span className="mr-1.5 text-zinc-400">{i + 1}.</span>
              {item.title}
            </h3>
            {item.meta && <span className="shrink-0 text-xs text-ink-soft">{item.meta}</span>}
          </div>
          {item.description && <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{item.description}</p>}
        </Link>
      ))}
    </div>
  );
}

type PackageWithDestination = Prisma.PackageGetPayload<{ include: { destination: true; city: true } }>;

export function PackageGrid({
  packages,
  emptyText,
  compact = false,
}: {
  packages: PackageWithDestination[];
  emptyText: string;
  /** Phones: one swipeable row instead of a long stack, so the page's own copy stays near the top. */
  compact?: boolean;
}) {
  if (packages.length === 0) {
    return (
      <div className="flex flex-col gap-4 rounded-[14px] bg-brand p-5 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-extrabold leading-tight tracking-tight sm:text-xl">Get a package built around your trip</p>
          <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/80">{emptyText}</p>
          <TrustTicks dark className="mt-3" />
        </div>
        <QuoteButton
          className="shrink-0 rounded-lg bg-white px-5 py-2.5 text-center text-sm font-semibold text-brand hover:bg-zinc-100"
        >
          Get Free Quotes
        </QuoteButton>
      </div>
    );
  }
  return (
    <div
      className={
        compact
          ? "no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-7 sm:overflow-visible sm:px-0 [&>*]:w-[82%] [&>*]:shrink-0 [&>*]:snap-start sm:[&>*]:w-auto"
          : "grid gap-x-4 gap-y-7 sm:grid-cols-2"
      }
    >
      {packages.map((p) => (
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
    </div>
  );
}

const durationLabel = (days: number) => (days > 1 ? `${days - 1}N / ${days}D` : `${days}D`);

export function DayList({ days, start = 0 }: { days: string[]; start?: number }) {
  return (
    <ol className="space-y-1.5 text-sm leading-relaxed text-ink">
      {days.map((day, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-0.5 shrink-0 rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
            Day {start + i + 1}
          </span>
          <span>{day}</span>
        </li>
      ))}
    </ol>
  );
}

// Sample itineraries as compact plan cards: first 3 days visible, the rest
// one tap away (still in the HTML for crawlers), and a quote action per plan.
export function ItineraryCards({ itineraries }: { itineraries: Itinerary[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {itineraries.map((it) => {
        const rest = it.days.slice(3);
        return (
          <article key={it.title} className="flex flex-col rounded-xl border border-zinc-200 bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[17px] font-bold leading-snug text-ink">{it.title}</h3>
              <span className="shrink-0 rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-semibold text-ink">
                {durationLabel(it.days.length)}
              </span>
            </div>
            <div className="mt-3">
              <DayList days={it.days.slice(0, 3)} />
            </div>
            {rest.length > 0 && (
              <details className="group/d mt-1.5">
                <summary className="cursor-pointer list-none text-[13px] font-semibold text-brand group-open/d:hidden">
                  + {rest.length} more {rest.length === 1 ? "day" : "days"}
                </summary>
                <DayList days={rest} start={3} />
              </details>
            )}
            <div className="mt-auto pt-3">
              <div className="flex items-center justify-between gap-2 border-t border-zinc-100 pt-3">
                <span className="text-xs text-ink-soft">Agents tailor hotels, days and stops</span>
                <QuoteButton
                  className="shrink-0 rounded-lg bg-brand px-3.5 py-2 text-xs font-semibold text-white hover:bg-brand-dark"
                >
                  Get Quotes
                </QuoteButton>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export async function QuoteBox({
  destinationId,
  cityId,
  title,
}: {
  destinationId?: string;
  cityId?: string;
  title: string;
}) {
  const options = await getEnquiryOptions();
  return (
    <div id="get-quotes" className="scroll-mt-20 lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
      <EnquiryForm
        destinations={options}
        defaultDestinationId={destinationId}
        defaultCityId={cityId}
        title={title}
        dense
      />
    </div>
  );
}

export function TwoColumn({ main, side }: { main: React.ReactNode; side: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-6 lg:grid-cols-3">
      <div className="min-w-0 lg:col-span-2">{main}</div>
      <aside>{side}</aside>
    </div>
  );
}

// Shown where a guide section has no reviewed copy yet. These pages are
// noindex until the content is written (see robotsFor).
export function ContentPending({ topic }: { topic: string }) {
  return (
    <div className="rounded-xl border border-dashed border-zinc-300 bg-surface p-5 text-sm text-ink-soft">
      Our {topic} guide is being written by local experts. Meanwhile, share your plan and a verified
      agent will answer it in your quote.
    </div>
  );
}

export function GuideBody({ content, topic }: { content: GuideContent; topic: string }) {
  if (!content.intro && !content.highlights?.length) return <ContentPending topic={topic} />;
  return (
    <div className="space-y-3 text-ink">
      {content.intro?.split("\n\n").map((para, i) => (
        <p key={i} className="leading-relaxed">
          {para}
        </p>
      ))}
      {content.highlights && content.highlights.length > 0 && (
        <ul className="list-disc space-y-1 pl-5">
          {content.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Seasons({ seasons }: { seasons?: GuideContent["seasons"] }) {
  if (!seasons || seasons.length === 0) return null;
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {seasons.map((s) => (
        <div key={s.name} className="rounded-xl border border-zinc-200 bg-white p-4">
          <p className="font-bold text-ink">{s.name}</p>
          <p className="text-xs font-semibold tracking-wide text-brand">{s.months}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.note}</p>
        </div>
      ))}
    </div>
  );
}

export function HowToReach({ howToReach }: { howToReach?: GuideContent["howToReach"] }) {
  const rows = (
    [
      ["By air", howToReach?.air],
      ["By train", howToReach?.rail],
      ["By road", howToReach?.road],
      ["Getting around", howToReach?.local],
    ] as const
  ).filter(([, v]) => v);
  if (rows.length === 0) return null;
  return (
    <dl className="space-y-3">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt className="font-bold text-ink">{k}</dt>
          <dd className="leading-relaxed text-ink-soft">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function QuickFacts({ facts }: { facts: { label: string; value?: string }[] }) {
  const shown = facts.filter((f) => f.value);
  if (shown.length === 0) return null;
  return (
    <dl className="grid gap-3 rounded-[14px] bg-[#fdf8f3] p-4 sm:grid-cols-3">
      {shown.map((f) => (
        <div key={f.label}>
          <dt className="text-xs font-bold tracking-wide text-ink-soft">{f.label}</dt>
          <dd className="mt-0.5 text-sm font-semibold text-ink">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Faqs({ faqs }: { faqs?: { q: string; a: string }[] }) {
  if (!faqs || faqs.length === 0) return null;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <div className="divide-y divide-zinc-200 overflow-hidden rounded-xl border border-zinc-200 bg-white">
        {faqs.map((f) => (
          <details key={f.q} className="group px-4 py-3 open:bg-[#fdf8f3]">
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
    </>
  );
}

const paras = (text: string) =>
  text.split("\n\n").map((p, i) => (
    <p key={i} className="leading-relaxed text-ink">
      {p}
    </p>
  ));

export function Prose({ text }: { text?: string }) {
  return text ? <div className="space-y-3">{paras(text)}</div> : null;
}

export function Blocks({ blocks }: { blocks?: ContentBlock[] }) {
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((b) => (
        <Section key={b.heading} title={b.heading}>
          <div className="space-y-3">
            {b.body && paras(b.body)}
            {b.items && b.items.length > 0 && (
              <ul className="list-disc space-y-1 pl-5 text-ink">
                {b.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            )}
          </div>
        </Section>
      ))}
    </>
  );
}

// Month-by-month weather. Each month is its own H3 so "{place} in {month}",
// "{place} weather in {month}" and "{place} temperature in {month}" all have a
// heading that answers them.
export function Months({ where, months }: { where: string; months?: MonthGuide[] }) {
  if (!months?.length) return null;
  return (
    <div className="space-y-5">
      {months.map((m) => (
        <div key={m.month}>
          <h3 className="text-lg font-bold text-ink">
            {titleCase(`${where} in ${m.month}: weather and temperature`)}
          </h3>
          {m.tempC && (
            <p className="mt-1 text-sm font-semibold text-ink-soft">Temperature: {m.tempC}</p>
          )}
          <p className="mt-1 leading-relaxed text-ink">{m.weather}</p>
          {m.goodFor && <p className="mt-1 leading-relaxed text-ink-soft">{m.goodFor}</p>}
        </div>
      ))}
      <p className="text-xs text-ink-soft">
        Temperatures are typical ranges for each month, not forecasts. Check a live forecast before you travel.
      </p>
    </div>
  );
}

// Route distances. Each route is an H3 "{from} to {to} distance".
export function Routes({ routes }: { routes?: RouteGuide[] }) {
  if (!routes?.length) return null;
  return (
    <div className="space-y-5">
      {routes.map((r) => (
        <div key={`${r.from}-${r.to}`}>
          <h3 className="text-lg font-bold text-ink">
            {titleCase(`${r.from} to ${r.to} distance`)}
          </h3>
          <p className="mt-1 text-sm font-semibold text-ink-soft">
            {r.distanceKm}
            {r.time && ` · ${r.time}`}
          </p>
          <p className="mt-1 leading-relaxed text-ink">{r.how}</p>
        </div>
      ))}
    </div>
  );
}

// Answer-first price guide built from live package prices (see getPriceGuide).
// One short paragraph a search engine or AI assistant can quote, then tables.
export function PriceGuideBlock({ name, guide }: { name: string; guide: import("@/lib/locations").PriceGuide }) {
  const inr = (n: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
  const popular = [...guide.byNights].sort((a, b) => b.count - a.count)[0];
  return (
    <div className="space-y-4">
      <p className="rounded-lg border-l-4 border-gold bg-[#fdf8f3] px-4 py-3 text-sm leading-relaxed text-ink">
        <strong>{name} tour packages start from {inr(guide.from)} per person</strong> on Tavel Package, across {guide.count} ready
        packages. The middle price is {inr(guide.median)} per person.
        {popular ? ` The most common length is ${popular.nights} nights, from ${inr(popular.from)} per person.` : ""} Prices are
        starting prices per person; your final quote depends on dates, hotels and group size.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <table className="w-full overflow-hidden rounded-lg border border-zinc-200 bg-white text-sm">
          <caption className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-ink-soft">By trip length</caption>
          <thead className="bg-zinc-50 text-xs text-ink-soft">
            <tr>
              <th className="px-3 py-2 text-left font-medium">Duration</th>
              <th className="px-3 py-2 text-right font-medium">From</th>
              <th className="px-3 py-2 text-right font-medium">Typical</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {guide.byNights.map((r) => (
              <tr key={r.nights}>
                <td className="px-3 py-2 text-ink">
                  {r.nights}N / {r.nights + 1}D <span className="text-xs text-ink-soft">({r.count})</span>
                </td>
                <td className="px-3 py-2 text-right font-semibold text-ink">{inr(r.from)}</td>
                <td className="px-3 py-2 text-right text-ink-soft">{inr(r.median)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {guide.byTier.length > 0 && (
          <table className="h-fit w-full overflow-hidden rounded-lg border border-zinc-200 bg-white text-sm">
            <caption className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-ink-soft">By hotel category</caption>
            <thead className="bg-zinc-50 text-xs text-ink-soft">
              <tr>
                <th className="px-3 py-2 text-left font-medium">Stay</th>
                <th className="px-3 py-2 text-right font-medium">From</th>
                <th className="px-3 py-2 text-right font-medium">Typical</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {guide.byTier.map((r) => (
                <tr key={r.tier}>
                  <td className="px-3 py-2 text-ink">
                    {r.tier === "Luxury" ? "5 star" : r.tier === "Premium" ? "4 star" : r.tier === "Mid-Range" ? "3 star" : "Budget"}{" "}
                    <span className="text-xs text-ink-soft">({r.count})</span>
                  </td>
                  <td className="px-3 py-2 text-right font-semibold text-ink">{inr(r.from)}</td>
                  <td className="px-3 py-2 text-right text-ink-soft">{inr(r.median)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <p className="text-xs text-ink-soft">
        &quot;From&quot; is the lowest listed price and &quot;Typical&quot; the median, per person, from packages live on this page&apos;s
        destination. Flights are not included unless a package says so.
      </p>
    </div>
  );
}

// Price questions answered from the same live numbers, for the FAQ block.
export function priceFaqs(name: string, guide: import("@/lib/locations").PriceGuide): { q: string; a: string }[] {
  const inr = (n: number) => `₹${new Intl.NumberFormat("en-IN").format(n)}`;
  const popular = [...guide.byNights].sort((a, b) => b.count - a.count)[0];
  const budget = guide.byTier.find((t) => t.tier === "Budget");
  // Highest category actually on sale, named for what it is.
  const lux = guide.byTier.find((t) => t.tier === "Luxury") ?? guide.byTier.find((t) => t.tier === "Premium");
  const luxLabel = lux?.tier === "Luxury" ? "5 star" : "4 star";
  const faqs = [
    {
      q: `How much does a ${name} tour package cost?`,
      a: `${name} packages on Tavel Package start from ${inr(guide.from)} per person, and the typical (median) price is ${inr(guide.median)} per person across ${guide.count} packages. Hotel category, trip length, season and group size decide the final quote.`,
    },
  ];
  if (popular)
    faqs.push({
      q: `What is the price of a ${popular.nights} nights ${popular.nights + 1} days ${name} package?`,
      a: `${popular.nights}-night ${name} packages start from ${inr(popular.from)} per person, with a typical price of ${inr(popular.median)} per person.`,
    });
  if (budget && lux)
    faqs.push({
      q: `What is the difference between a budget and a ${luxLabel} ${name} package?`,
      a: `Budget packages use simple, clean hotels or guesthouses and start from ${inr(budget.from)} per person. Packages with ${luxLabel} hotels start from ${inr(lux.from)} per person, typically ${inr(lux.median)}. The route and sightseeing are often the same; the hotels, houseboat category and vehicle make the difference. Prices are per person with two sharing a room; peak dates cost more.`,
    });
  faqs.push({
    q: `Are flights included in ${name} package prices?`,
    a: "Usually not. Listed prices cover the land part of the trip (hotels, transfers and sightseeing as described in each package). Ask for flights in your quote request and agents will add them.",
  });
  return faqs;
}
