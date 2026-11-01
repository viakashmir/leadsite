import Link from "next/link";
import Image from "next/image";
import { isPhoto } from "@/lib/media";
import { formatINR } from "@/lib/format";
import TrustTicks from "@/components/TrustTicks";

// Compact selling card: photo with duration and theme, price up front and a
// direct "Get Free Quotes" action next to it.
export default function PackageCard({
  slug,
  title,
  summary,
  durationDays,
  durationNights,
  price,
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
  destinationName: string;
  theme: string;
  heroImage?: string | null;
}) {
  const tags = theme.split(",").map((t) => t.trim()).filter(Boolean);
  const hasPhoto = isPhoto(heroImage);
  const href = `/packages/${slug}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={href} tabIndex={-1} className="relative block h-36 overflow-hidden bg-gradient-to-br from-royal to-royal-2">
        {hasPhoto ? (
          <Image
            src={heroImage!}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center font-display text-xl font-extrabold text-white/50">
            {destinationName}
          </span>
        )}
        <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        {tags[0] && (
          <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-brand shadow-sm">
            {tags[0]}
          </span>
        )}
        <span className="absolute bottom-2 left-2 rounded-md bg-royal/90 px-2 py-0.5 text-[11px] font-bold text-white">
          {durationNights}N / {durationDays}D
        </span>
        {hasPhoto && (
          <span className="absolute bottom-2 right-2 text-[11px] font-semibold text-white drop-shadow">{destinationName}</span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-3.5">
        <h3 className="line-clamp-2 font-semibold leading-snug text-ink">
          <Link href={href} className="hover:text-brand">
            {title}
          </Link>
        </h3>
        <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-ink-soft">{summary}</p>
        <TrustTicks items={["Customisable", "Up to 3 quotes"]} className="mb-3 mt-2 !text-xs" />
        <div className="mt-auto flex items-end justify-between gap-2 border-t border-zinc-100 pt-3">
          <div className="leading-tight">
            <p className="text-[11px] text-ink-soft">Starting from</p>
            <p className="text-lg font-bold text-ink">{formatINR(price)}</p>
          </div>
          <Link
            href={`${href}#get-quotes`}
            className="shrink-0 rounded-full bg-brand px-3.5 py-2 text-xs font-semibold text-white hover:bg-brand-dark"
          >
            Get Free Quotes
          </Link>
        </div>
      </div>
    </article>
  );
}
