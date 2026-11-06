import Link from "next/link";
import Image from "next/image";
import { isPhoto } from "@/lib/media";
import { formatINR } from "@/lib/format";
import { absoluteUrl, SITE_NAME, WHATSAPP_DIGITS, WHATSAPP_NUMBER } from "@/lib/site";
import { routeFromSummary, STYLE_TAGS, TIER_LABEL, TIERS } from "@/lib/packageTags";

// Package card used everywhere (homepage rows and listing pages): photo, duration chip, title, the
// route as a compact "2N Srinagar • 1N Gulmarg +2" strip, per-person price,
// and three quick actions (call, WhatsApp, request quotes). Everything shown
// comes from the package itself.

export default function TripCard({
  slug,
  title,
  summary,
  durationDays,
  durationNights,
  price,
  referencePrice,
  destinationName,
  theme,
  heroImage,
}: {
  slug: string;
  title: string;
  summary: string;
  durationDays: number;
  durationNights: number;
  price: number;
  referencePrice?: number | null;
  destinationName: string;
  theme: string;
  heroImage?: string | null;
}) {
  const tags = theme.split(",").map((t) => t.trim()).filter(Boolean);
  const tier = tags.find((t) => TIERS.includes(t));
  const style = tags.find((t) => STYLE_TAGS.includes(t)) ?? tags[0];
  const valuePick = Boolean(referencePrice && referencePrice > price);
  const route = routeFromSummary(summary);
  const shown = route.slice(0, 2);
  const more = route.length - shown.length;
  const href = `/packages/${slug}`;
  const waText = `Hi ${SITE_NAME}, I'd like a quote for "${title}" (${absoluteUrl(href)})`;

  return (
    <article className="group flex h-full flex-col">
      <Link href={href} tabIndex={-1} className="relative block aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-royal to-royal-2">
        {isPhoto(heroImage) ? (
          <Image
            src={heroImage}
            alt={title}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 82vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white/50">{destinationName}</span>
        )}
        <span className="absolute left-2.5 top-2.5 flex gap-1.5">
          {style && <span className="rounded-md bg-brand px-2 py-1 text-[11px] font-semibold text-white shadow-sm">{style}</span>}
          {valuePick && <span className="rounded-md bg-gold px-2 py-1 text-[11px] font-semibold text-white shadow-sm">Value pick</span>}
        </span>
      </Link>

      <div className="mt-2.5 flex items-center gap-2 text-xs">
        <span className="rounded-md bg-zinc-100 px-2 py-1 font-semibold text-ink">
          {durationDays}D/{durationNights}N
        </span>
        {tier && <span className="text-ink-soft">{TIER_LABEL[tier]}</span>}
      </div>

      <h3 className="mt-1.5 line-clamp-2 min-h-[2.6em] text-[15px] font-semibold leading-snug text-ink">
        <Link href={href} className="hover:text-brand">
          {title}
        </Link>
      </h3>

      <p className="mt-2 truncate rounded-md bg-brand-tint px-2 py-1 text-xs text-ink-soft">
        {shown.length > 0 ? (
          <>
            {shown.map((r, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-1 text-brand" aria-hidden>•</span>}
                <b className="font-semibold text-ink">{r.nights}N</b> {r.place}
              </span>
            ))}
            {more > 0 && <span className="ml-1 font-semibold text-brand">+{more}</span>}
          </>
        ) : (
          destinationName
        )}
      </p>

      <p className="mt-2 text-ink">
        <span className="text-[11px] text-ink-soft">From </span>
        <span className="text-lg font-bold">{formatINR(price)}</span>
        <span className="text-xs text-ink-soft"> / person</span>
      </p>

      <div className="mt-auto flex items-center gap-2 pt-2.5">
        <a
          href={`tel:${WHATSAPP_NUMBER.replace(/\s/g, "")}`}
          aria-label="Call us"
          title="Call us"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-brand/40 text-brand hover:bg-brand-tint"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
          </svg>
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(waText)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ask on WhatsApp"
          title="Ask on WhatsApp"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[#25D366] hover:bg-[#25D366]/10"
        >
          <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M16.004 3C8.82 3 3 8.82 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.7A12.95 12.95 0 0 0 16.004 29C23.18 29 29 23.18 29 16S23.18 3 16.004 3Zm0 23.6c-2.02 0-4-.54-5.72-1.57l-.41-.24-3.96 1.01 1.06-3.86-.27-.4A10.56 10.56 0 0 1 5.4 16c0-5.85 4.76-10.6 10.6-10.6 5.85 0 10.6 4.75 10.6 10.6 0 5.85-4.75 10.6-10.6 10.6Zm5.82-7.94c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.43 5.45 4.81.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
          </svg>
        </a>
        <Link
          href={`${href}#get-quotes`}
          className="flex h-9 flex-1 items-center justify-center rounded-lg bg-brand px-3 text-[13px] font-semibold text-white hover:bg-brand-dark"
        >
          Enquire Now
        </Link>
      </div>
    </article>
  );
}
