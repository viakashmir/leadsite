import Link from "next/link";
import Image from "next/image";
import { isPhoto } from "@/lib/media";

// Photo tile: the destination photo fills the card with its name over it.
export default function DestinationCard({
  slug,
  name,
  summary,
  leadCount,
  heroImage,
}: {
  slug: string;
  name: string;
  summary: string;
  leadCount?: number;
  heroImage?: string | null;
}) {
  const hasPhoto = isPhoto(heroImage);

  return (
    <Link
      href={`/tour-packages/${slug}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-xl bg-gradient-to-br from-royal to-royal-2 p-3 sm:aspect-[4/3] sm:p-4"
    >
      {hasPhoto && (
        <Image
          src={heroImage!}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition duration-300 group-hover:scale-[1.04]"
        />
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
      {typeof leadCount === "number" && leadCount > 0 && (
        <span className="absolute right-2 top-2 z-10 rounded-md bg-white/95 px-2 py-0.5 text-[10px] font-bold text-brand sm:text-[11px]">
          {leadCount >= 10 ? `${leadCount}+` : leadCount} Travel Leads
        </span>
      )}
      <span className="relative z-10 text-lg font-bold leading-tight text-white sm:text-xl">{name}</span>
      {summary && (
        <span className="relative z-10 mt-0.5 line-clamp-2 text-xs leading-snug text-white/80">{summary}</span>
      )}
      <span className="relative z-10 mt-1.5 text-xs font-semibold text-white/90 group-hover:underline">
        View packages <span aria-hidden>&rarr;</span>
      </span>
    </Link>
  );
}
