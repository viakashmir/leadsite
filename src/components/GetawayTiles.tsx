"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export type Getaway = { id: string; name: string; href: string; image: string; tagline: string; international: boolean };

const FILTERS = [
  { key: "all", label: "All" },
  { key: "india", label: "India" },
  { key: "abroad", label: "International" },
] as const;

// Tall photo tiles with the destination name in large type, filterable by
// India / International. One swipeable row, four tiles visible on desktop.
export default function GetawayTiles({ items }: { items: Getaway[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const hasAbroad = items.some((d) => d.international);
  const shown = items.filter((d) => filter === "all" || (filter === "abroad") === d.international);

  return (
    <>
      {hasAbroad && (
        <div className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0" role="tablist" aria-label="Filter destinations">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition ${
                filter === f.key ? "border-brand bg-brand text-white" : "border-zinc-200 bg-white text-ink hover:border-brand/40"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}
      <div className="no-scrollbar -mx-4 mt-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:scroll-px-0 sm:gap-5 sm:px-0">
        {shown.map((d) => (
          <Link
            key={d.id}
            href={d.href}
            className="group relative aspect-[4/5] w-[62%] shrink-0 snap-start overflow-hidden rounded-2xl bg-zinc-200 sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-3.75rem)/4)]"
          >
            <Image
              src={d.image}
              alt={`${d.name} tour packages`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 62vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-center text-white">
              <p className="text-[11px] font-medium text-white/85">{d.tagline}</p>
              <p className="mt-0.5 text-2xl font-extrabold uppercase leading-none tracking-tight sm:text-3xl">{d.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
