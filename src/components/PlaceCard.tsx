import Link from "next/link";
import Image from "next/image";
import { isPhoto } from "@/lib/media";

// Photo card for a city or destination: square photo, name, one line about it
// and a link to its packages page.
export default function PlaceCard({
  href,
  name,
  summary,
  heroImage,
  meta,
}: {
  href: string;
  name: string;
  summary?: string | null;
  heroImage?: string | null;
  meta?: string;
}) {
  return (
    <Link href={href} className="group flex h-full flex-col">
      <span className="relative block aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-royal to-royal-2">
        {isPhoto(heroImage) ? (
          <Image
            src={heroImage}
            alt={name}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white/50">{name}</span>
        )}
        {meta && (
          <span className="absolute left-2.5 top-2.5 rounded-md bg-brand px-2 py-1 text-[11px] font-semibold text-white">
            {meta}
          </span>
        )}
      </span>
      <span className="mt-2.5 text-[15px] font-semibold leading-snug text-ink group-hover:text-brand">{name}</span>
      {summary && <span className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-ink-soft">{summary}</span>}
      <span className="mt-auto pt-2.5">
        <span className="block rounded-lg border border-brand py-2 text-center text-sm font-semibold text-brand transition group-hover:bg-brand group-hover:text-white">
          View packages
        </span>
      </span>
    </Link>
  );
}
