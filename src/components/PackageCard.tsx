import Link from "next/link";
import { formatINR } from "@/lib/format";

export default function PackageCard({
  slug,
  title,
  summary,
  durationDays,
  durationNights,
  price,
  destinationName,
  theme,
}: {
  slug: string;
  title: string;
  summary: string;
  durationDays: number;
  durationNights: number;
  price: number;
  destinationName: string;
  theme: string;
}) {
  const tags = theme.split(",").filter(Boolean);

  return (
    <Link
      href={`/packages/${slug}`}
      className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="flex h-28 items-center justify-center bg-zinc-100 text-sm font-medium text-zinc-400">
        {destinationName}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-2 font-semibold text-zinc-900">{title}</h3>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-zinc-600">{summary}</p>
        <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-3 text-sm">
          <span className="text-zinc-500">
            {durationDays}D / {durationNights}N
          </span>
          <span className="font-semibold text-zinc-900">
            {formatINR(price)}{" "}
            <span className="font-normal text-zinc-500">onwards</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
