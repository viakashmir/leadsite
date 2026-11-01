import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import EnquiryForm from "@/components/EnquiryForm";
import PackageCard from "@/components/PackageCard";
import { EDITORIAL_TEAM, SITE_URL } from "@/lib/site";
import { formatDate } from "@/lib/format";
import { titleCase } from "@/lib/text";
import { getEnquiryOptions, type ContentBlock, type GuideContent, type MonthGuide, type RouteGuide } from "@/lib/locations";
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
    <section className="border-b border-gold-soft bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-9">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-3 font-display text-[32px] font-bold leading-[1.1] text-ink sm:text-[44px]">{titleCase(title)}</h1>
        {subtitle && <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-ink-soft sm:text-base">{subtitle}</p>}
        {updated && <Byline updated={updated} />}
        {badges && badges.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span key={b} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink shadow-sm">
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
    <p className="mt-3 text-xs text-ink-soft">
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

export function Section({
  title,
  subtitle,
  children,
  id,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-5 sm:py-7">
      <h2 className="font-display text-[26px] font-bold leading-tight text-ink sm:text-[30px]">{titleCase(title)}</h2>
      <span aria-hidden className="mt-2 block h-0.5 w-10 rounded-full bg-gold" />
      {subtitle && <p className="mt-2 text-sm text-ink-soft">{subtitle}</p>}
      <div className="mt-4">{children}</div>
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
          className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition ${
            l.active
              ? "border-royal bg-royal text-white"
              : "border-gold-soft bg-white text-ink hover:border-gold hover:text-brand"
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
          className="group rounded-2xl border border-zinc-200 bg-white p-4 transition hover:border-gold hover:shadow-sm"
        >
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-bold text-ink group-hover:text-brand">
              <span className="mr-1.5 font-display text-gold">{i + 1}.</span>
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

type PackageWithDestination = Prisma.PackageGetPayload<{ include: { destination: true } }>;

export function PackageGrid({
  packages,
  emptyText,
}: {
  packages: PackageWithDestination[];
  emptyText: string;
}) {
  if (packages.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-300 bg-surface p-6 text-sm text-ink-soft">
        {emptyText}
      </div>
    );
  }
  return (
    <div className="grid gap-4 sm:grid-cols-2">
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
    <div id="get-quotes" className="scroll-mt-20 lg:sticky lg:top-20">
      <EnquiryForm
        destinations={options}
        defaultDestinationId={destinationId}
        defaultCityId={cityId}
        title={title}
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
    <dl className="grid gap-3 rounded-xl bg-panel p-4 sm:grid-cols-3">
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
      <div className="divide-y divide-gold-soft overflow-hidden rounded-2xl border border-gold-soft bg-white">
        {faqs.map((f) => (
          <details key={f.q} className="group px-4 py-3.5 open:bg-ivory">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-semibold text-ink [&::-webkit-details-marker]:hidden">
              <span>{f.q}</span>
              <span aria-hidden className="mt-0.5 shrink-0 text-lg leading-none text-gold transition group-open:rotate-45">
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
