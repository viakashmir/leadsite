const STYLES: Record<string, string> = {
  NEW: "bg-amber-50 text-amber-700 ring-amber-200",
  VERIFIED: "bg-green-50 text-green-700 ring-green-200",
  BOOKED: "bg-blue-50 text-blue-700 ring-blue-200",
  STALE: "bg-zinc-100 text-zinc-500 ring-zinc-200",
};
const LABELS: Record<string, string> = { NEW: "New", VERIFIED: "Verified", BOOKED: "Booked", STALE: "Stale" };

export default function LeadStatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${STYLES[status] ?? STYLES.STALE}`}>
      {LABELS[status] ?? status}
    </span>
  );
}
