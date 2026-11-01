// Short, true selling points of the platform, shown next to prices and CTAs.
export const TRUST_POINTS = ["Free quotes", "No booking fee", "Verified local agents", "Fully customisable"];

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TrustTicks({
  items = TRUST_POINTS,
  dark = false,
  className = "",
}: {
  items?: string[];
  dark?: boolean;
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-1 text-[13px] font-medium ${dark ? "text-white/85" : "text-ink"} ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-1.5">
          <CheckIcon className={`h-3.5 w-3.5 shrink-0 ${dark ? "text-gold-soft" : "text-emerald-600"}`} />
          {item}
        </li>
      ))}
    </ul>
  );
}
