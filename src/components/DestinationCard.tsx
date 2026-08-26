import Link from "next/link";
import Image from "next/image";

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
  const hasPhoto = heroImage?.startsWith("http");

  return (
    <Link
      href={`/destinations/${slug}`}
      className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative flex h-32 items-end overflow-hidden bg-gradient-to-br from-blue-600 to-blue-400 p-4">
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
          <span className="absolute right-2 top-2 z-10 rounded-full bg-red-600 px-2 py-0.5 text-[11px] font-bold text-white shadow">
            {leadCount >= 10 ? `${leadCount}+` : leadCount} Travel Leads
          </span>
        )}
        <span className="relative z-10 text-lg font-bold text-white drop-shadow">{name}</span>
      </div>
      <div className="p-4">
        <p className="line-clamp-2 text-sm text-zinc-600">{summary}</p>
        <span className="mt-2 inline-block text-sm font-semibold text-blue-700 group-hover:underline">
          Explore packages →
        </span>
      </div>
    </Link>
  );
}
