"use client";

import Link from "next/link";
import { Children, useRef } from "react";

// Item widths per row type; literal strings so Tailwind generates them.
const ITEM = {
  card: "w-[82%] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]",
  tile: "w-[46%] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-3.75rem)/4)]",
};

// A titled, horizontally scrolling row of cards (catalogue style): swipe on
// phones with the next card peeking in, arrow buttons on larger screens.
export default function ScrollRow({
  title,
  subtitle,
  href,
  hrefLabel = "View All",
  children,
  size = "card",
}: {
  title: string;
  subtitle?: string;
  href?: string;
  hrefLabel?: string;
  children: React.ReactNode;
  size?: keyof typeof ITEM;
}) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <section className="py-5 sm:py-7">
      <div className="flex items-end justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{title}</h2>
          {subtitle && <p className="mt-0.5 text-[13px] text-ink-soft sm:text-sm">{subtitle}</p>}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {href && (
            <Link
              href={href}
              className="inline-flex items-center gap-1 rounded-full border border-brand px-3 py-1 text-[13px] font-semibold text-brand hover:bg-brand-tint"
            >
              {hrefLabel} <span aria-hidden>&rarr;</span>
            </Link>
          )}
          {[-1, 1].map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => scroll(dir as 1 | -1)}
              aria-label={dir < 0 ? `Scroll ${title} back` : `Scroll ${title} forward`}
              className="hidden h-8 w-8 place-items-center rounded-full border border-zinc-200 bg-white text-ink shadow-sm hover:border-brand/40 hover:text-brand sm:grid"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={dir < 0 ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"} />
              </svg>
            </button>
          ))}
        </div>
      </div>
      <div
        ref={track}
        className="no-scrollbar -mx-4 mt-3 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-4 sm:scroll-px-0 sm:gap-5 sm:px-0"
      >
        {Children.map(children, (child) =>
          child ? <div className={`shrink-0 snap-start ${ITEM[size]}`}>{child}</div> : null,
        )}
      </div>
    </section>
  );
}
