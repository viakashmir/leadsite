import Link from "next/link";
import Image from "next/image";
import { isPhoto } from "@/lib/media";
import { formatINR } from "@/lib/format";

// Compact selling card: square photo, duration, price and one clear action.
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
    <article className="group flex h-full flex-col">
      <Link
        href={href}
        tabIndex={-1}
        className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-royal to-royal-2"
      >
        {hasPhoto ? (
          <Image
            src={heroImage!}
            alt={title}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white/50">
            {destinationName}
          </span>
        )}
        {tags[0] && (
          <span className="absolute left-2.5 top-2.5 rounded-md bg-brand px-2 py-1 text-[11px] font-semibold text-white">
            {tags[0]}
          </span>
        )}
      </Link>
      <div className="mt-2.5 flex items-center justify-between gap-2">
        <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-ink">
          {durationNights}N/{durationDays}D
        </span>
        <span className="truncate text-xs text-ink-soft">{destinationName}</span>
      </div>
      <h3 className="mt-1.5 line-clamp-2 text-[15px] font-semibold leading-snug text-ink">
        <Link href={href} className="hover:text-brand">
          {title}
        </Link>
      </h3>
      <p className="mt-1.5 line-clamp-1 rounded-md bg-[#fdf8f3] px-2 py-1 text-xs text-ink-soft">{summary}</p>
      <p className="mt-auto pt-2 text-ink">
        <span className="text-lg font-bold">{formatINR(price)}</span>{" "}
        <span className="text-xs text-ink-soft">starting price</span>
      </p>
      <Link
        href={`${href}#get-quotes`}
        className="mt-2 block rounded-lg bg-brand py-2 text-center text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Get Free Quotes
      </Link>
    </article>
  );
}
