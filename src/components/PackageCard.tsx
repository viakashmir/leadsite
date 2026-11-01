import Link from "next/link";
import Image from "next/image";
import { isPhoto } from "@/lib/media";
import { formatINR } from "@/lib/format";

// Selling card: photo with duration, the route with nights per stop, stay
// tier, trip style, per-person price and two actions (see the plan, get
// quotes). Everything shown comes from the package itself; nothing is
// invented on the card.

const TIERS = ["Budget", "Mid-Range", "Luxury", "Premium"];
const STYLE_TAGS = ["Honeymoon", "Family", "Friends", "Adventure", "Winter", "Pilgrimage", "Offbeat", "Weekend", "Classic"];

// "5 nights across Srinagar 3N, Pahalgam 1N, Srinagar 1N." -> stops
function routeFromSummary(summary: string): { place: string; nights: number }[] {
  const m = /nights across ([^.]+)\./.exec(summary);
  if (!m) return [];
  return m[1]
    .split(",")
    .map((s) => /^\s*(.+?)\s+(\d+)N\s*$/.exec(s))
    .filter((x): x is RegExpExecArray => Boolean(x))
    .map((x) => ({ place: x[1], nights: Number(x[2]) }));
}

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
);
const PIN = "M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z";
const BED = "M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7M3 14h18M7 9V6h4v3";
const BOAT = "M3 17c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0M5 14l1.5-5h11L19 14M12 9V4";

export default function PackageCard({
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
  const houseboat = tags.includes("Houseboat");
  const route = routeFromSummary(summary);
  const valuePick = Boolean(referencePrice && referencePrice > price);
  const hasPhoto = isPhoto(heroImage);
  const href = `/packages/${slug}`;
  // Route summaries start with the stops; show the rest as the pitch line.
  const pitch = route.length ? summary.replace(/^[^.]*nights across [^.]+\.\s*/, "") : summary;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:border-brand/30 hover:shadow-md">
      <Link href={href} tabIndex={-1} className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-royal to-royal-2">
        {hasPhoto ? (
          <Image
            src={heroImage!}
            alt={title}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white/50">{destinationName}</span>
        )}
        <span className="absolute bottom-2.5 left-2.5 rounded-md bg-black/65 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {durationNights}N / {durationDays}D
        </span>
        <span className="absolute left-2.5 top-2.5 flex gap-1.5">
          {style && <span className="rounded-md bg-brand px-2 py-1 text-[11px] font-semibold text-white">{style}</span>}
          {valuePick && <span className="rounded-md bg-gold px-2 py-1 text-[11px] font-semibold text-white">Value pick</span>}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-3.5">
        <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-ink">
          <Link href={href} className="hover:text-brand">
            {title}
          </Link>
        </h3>

        {route.length > 0 ? (
          <p className="mt-1.5 flex flex-wrap items-center gap-x-1 gap-y-0.5 text-xs text-ink-soft" aria-label="Route">
            <Icon d={PIN} />
            {route.map((r, i) => (
              <span key={i} className="whitespace-nowrap">
                {i > 0 && <span className="mx-0.5 text-zinc-300">→</span>}
                <span className="font-medium text-ink">{r.place}</span> {r.nights}N
              </span>
            ))}
          </p>
        ) : (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-ink-soft">
            <Icon d={PIN} />
            {destinationName}
          </p>
        )}

        <div className="mt-2 flex flex-wrap gap-1.5 text-[11px]">
          {tier && (
            <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 font-medium text-ink">
              <Icon d={BED} />
              {tier === "Luxury" ? "4-5 star" : tier}
            </span>
          )}
          {houseboat && (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-tint px-2 py-0.5 font-medium text-ink">
              <Icon d={BOAT} />
              Houseboat night
            </span>
          )}
        </div>

        <p className="mt-2 line-clamp-2 text-xs italic text-ink-soft">{pitch}</p>

        <div className="mt-auto flex items-end justify-between gap-2 border-t border-zinc-100 pt-2.5">
          <p className="leading-tight text-ink">
            <span className="block text-[10px] uppercase tracking-wide text-ink-soft">Starting from</span>
            <span className="text-lg font-bold">{formatINR(price)}</span>
            <span className="text-xs text-ink-soft"> /person</span>
          </p>
          <div className="flex shrink-0 items-center gap-1.5">
            <Link href={href} className="rounded-full px-3 py-1.5 text-xs font-semibold text-brand ring-1 ring-inset ring-brand/30 hover:bg-brand-tint">
              View plan
            </Link>
            <Link href={`${href}#get-quotes`} className="rounded-full bg-brand px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-dark">
              Get Quotes
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
