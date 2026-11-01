import Link from "next/link";
import { formatDate } from "@/lib/format";
import { properCase, sentenceCase } from "@/lib/text";
import { buyersLeft, SoldOutBadge } from "@/components/LeadContact";

// Contact fields arrive already masked: this is a client component, so any
// raw value passed in would be readable in the page payload.
type LeadCardData = {
  id: string;
  maskedName: string;
  maskedPhone: string;
  maskedEmail: string | null;
  originCity: string | null;
  destinationName: string;
  cityName: string | null;
  travelDate: Date | null;
  durationDays: number | null;
  adults: number;
  children: number;
  budgetBand: string | null;
  message: string | null;
  verified: boolean;
  status: string;
  createdAt: Date;
  unlockPrice: number;
  unlockCount: number;
  maxUnlocks: number;
};

const ICONS = {
  calendar: "M8 2v3M16 2v3M3.5 9h17M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V6A1.5 1.5 0 0 1 5 4.5Z",
  clock: "M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  users: "M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM21 19v-1a4 4 0 0 0-3-3.9M15.5 4.1a3 3 0 0 1 0 5.8",
  wallet: "M3 7.5A2.5 2.5 0 0 1 5.5 5H18v3M3 7.5V18a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-3M3 7.5A2 2 0 0 0 5 9.5h15v6.5h-4a2 2 0 0 1 0-4h4",
};

function Chip({ icon, children }: { icon: keyof typeof ICONS; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-brand-tint px-2.5 py-1 text-xs font-medium text-ink">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d={ICONS[icon]} />
      </svg>
      {children}
    </span>
  );
}

const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

// Masked value only; the blur and strike-through are just the look.
const HIDDEN = "select-none line-through decoration-zinc-400 blur-[2px]";

export default function LeadCard({ lead }: { lead: LeadCardData }) {
  const booked = lead.status === "BOOKED";
  const left = buyersLeft(lead.unlockCount, lead.maxUnlocks);
  const soldOut = left === 0;
  const place = lead.cityName ?? lead.destinationName;
  const title = `${lead.durationDays ? `${lead.durationDays}-Day ` : ""}${place} Tour${
    lead.originCity ? ` from ${properCase(lead.originCity)}` : ""
  }`;
  const travellers =
    plural(lead.adults, "Adult", "Adults") + (lead.children ? ` · ${plural(lead.children, "Child", "Children")}` : "");
  const name = properCase(lead.maskedName);

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:border-brand/30 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[15px] font-semibold leading-snug text-ink">{title}</h3>
        <div className="flex shrink-0 items-center gap-2">
          {booked && (
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-500">Booked</span>
          )}
          <span className="text-[11px] text-ink-soft">{formatDate(lead.createdAt)}</span>
        </div>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        <Chip icon="calendar">{lead.travelDate ? formatDate(lead.travelDate) : "Flexible Dates"}</Chip>
        {lead.durationDays ? <Chip icon="clock">{plural(lead.durationDays, "Day", "Days")}</Chip> : null}
        <Chip icon="users">{travellers}</Chip>
        {lead.budgetBand && <Chip icon="wallet">{lead.budgetBand}</Chip>}
      </div>

      {lead.message && (
        <p className="mt-2 line-clamp-2 border-l-2 border-gold pl-2 text-xs italic text-ink-soft">
          {sentenceCase(lead.message)}
        </p>
      )}

      <div className="mt-3 flex items-center justify-between gap-3 border-t border-zinc-100 pt-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            {name.charAt(0)}
          </span>
          <div className="min-w-0 text-xs" aria-label="Contact details hidden until purchased">
            <p className="flex items-center gap-1.5 font-semibold text-ink">
              {name}
              {lead.verified && (
                <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[10px] font-medium text-green-700">✓ Verified</span>
              )}
            </p>
            <p className="truncate text-ink-soft" aria-hidden="true">
              <span className={HIDDEN}>{lead.maskedPhone}</span>
              {lead.maskedEmail ? (
                <>
                  {" · "}
                  <span className={HIDDEN}>{lead.maskedEmail}</span>
                </>
              ) : null}
            </p>
          </div>
        </div>
        {soldOut ? (
          <SoldOutBadge />
        ) : (
          <div className="flex shrink-0 flex-col items-end gap-1">
            <Link
              href={`/login?next=/agent/dashboard/leads&lead=${lead.id}`}
              className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-dark"
            >
              Buy Now · ₹{lead.unlockPrice}
            </Link>
            <span className="text-[10px] text-ink-soft">
              {left} of {lead.maxUnlocks} left
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
