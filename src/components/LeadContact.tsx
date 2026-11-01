// Contact details on a lead card. Before purchase only the server-masked
// value (stars) ever reaches the browser; the blur and strike-through are
// just the look. The real phone/email is never sent until the agent buys.

const HIDDEN = "select-none line-through decoration-zinc-400 blur-[2px]";

export function HiddenContact({ name, phone, email }: { name: string; phone: string; email: string | null }) {
  return (
    <div className="text-xs" aria-label="Contact details hidden until purchased">
      <div className="font-medium text-zinc-700">{name}</div>
      <div className="flex items-center gap-1 text-zinc-500" aria-hidden="true">
        <span>📞</span>
        <span className={HIDDEN}>{phone}</span>
      </div>
      {email && (
        <div className="flex items-center gap-1 text-zinc-500" aria-hidden="true">
          <span>✉️</span>
          <span className={HIDDEN}>{email}</span>
        </div>
      )}
    </div>
  );
}

export function SoldOutBadge() {
  return (
    <span className="inline-flex items-center rounded-md bg-zinc-200 px-3 py-2 text-xs font-bold uppercase tracking-wide text-zinc-600">
      Sold out
    </span>
  );
}

export function buyersLeft(unlockCount: number, maxUnlocks: number) {
  return Math.max(maxUnlocks - unlockCount, 0);
}
