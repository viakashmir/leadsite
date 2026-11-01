import Link from "next/link";
import Image from "next/image";
import { isPhoto } from "@/lib/media";

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
      className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative flex h-28 items-end overflow-hidden bg-gradient-to-br from-royal to-royal-2 p-3 sm:h-32 sm:p-4">
        {hasPhoto && (
          <Image
            src={heroImage!}
            alt={name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {typeof leadCount === "number" && leadCount > 0 && (
          <span className="absolute right-2 top-2 z-10 rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white shadow sm:text-[11px]">
            {leadCount >= 10 ? `${leadCount}+` : leadCount} Travel Leads
          </span>
        )}
        <span className="relative z-10 text-base font-bold text-white drop-shadow sm:text-lg">{name}</span>
      </div>
      <div className="p-3 sm:p-4">
        <p className="hidden text-sm text-zinc-600 sm:line-clamp-2">{summary}</p>
        <span className="inline-block text-[13px] font-semibold text-brand group-hover:underline sm:mt-2 sm:text-sm">
          View packages →
        </span>
      </div>
    </Link>
  );
}
