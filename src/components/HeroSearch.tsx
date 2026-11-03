"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";

export type SearchDestination = { name: string; href: string };

// Homepage hero search: type a destination, land on its packages page.
// A name we don't cover goes to the full destinations list instead.
export default function HeroSearch({ destinations }: { destinations: SearchDestination[] }) {
  const router = useRouter();
  const listId = useId();
  const [q, setQ] = useState("");

  const go = (e: React.FormEvent) => {
    e.preventDefault();
    const term = q.trim().toLowerCase();
    const hit =
      destinations.find((d) => d.name.toLowerCase() === term) ??
      (term ? destinations.find((d) => d.name.toLowerCase().startsWith(term)) : undefined);
    router.push(hit ? hit.href : "/tour-packages");
  };

  return (
    <form
      onSubmit={go}
      role="search"
      className="flex w-full max-w-xl items-center gap-2 rounded-2xl bg-white p-2 pl-4 shadow-2xl shadow-black/30"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      </svg>
      <label className="min-w-0 flex-1">
        <span className="block text-[11px] font-semibold uppercase tracking-wider text-ink-soft">Where to?</span>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          list={listId}
          placeholder="Kashmir, Kerala, Maldives..."
          className="block w-full bg-transparent text-[15px] font-semibold text-ink outline-none placeholder:font-normal placeholder:text-zinc-400"
        />
      </label>
      <datalist id={listId}>
        {destinations.map((d) => (
          <option key={d.href} value={d.name} />
        ))}
      </datalist>
      <button type="submit" className="shrink-0 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark sm:px-6">
        Search<span className="hidden sm:inline"> Holidays</span>
      </button>
    </form>
  );
}
