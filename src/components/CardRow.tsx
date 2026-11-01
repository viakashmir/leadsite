import Link from "next/link";

// A titled row of cards: swipeable on phones (next card peeks in), a grid on
// larger screens. Used for the homepage destination rows.
export default function CardRow({
  title,
  href,
  children,
  cols = 3,
  limit,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
  cols?: 3 | 4;
  limit?: 3 | 4; // cards shown on tablet/desktop; phones swipe through all
}) {
  return (
    <section className="py-5 sm:py-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">{title}</h2>
        {href && (
          <Link
            href={href}
            className="shrink-0 rounded-full border border-brand px-3 py-1 text-[13px] font-semibold text-brand hover:bg-brand-tint"
          >
            View All <span aria-hidden>&rarr;</span>
          </Link>
        )}
      </div>
      <div
        className={`no-scrollbar -mx-4 mt-3 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:gap-5 sm:overflow-visible sm:px-0 ${
          cols === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"
        } ${limit === 3 ? "sm:[&>*:nth-child(n+4)]:hidden" : limit === 4 ? "sm:[&>*:nth-child(n+5)]:hidden" : ""} [&>*]:w-[82%] [&>*]:shrink-0 [&>*]:snap-start sm:[&>*]:w-auto`}
      >
        {children}
      </div>
    </section>
  );
}
