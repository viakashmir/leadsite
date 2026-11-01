"use client";

import { useActionState, useState } from "react";
import { updateLeadPricing } from "@/lib/adminActions";

type Pricing = { standardPrice: number; hotPrice: number; hotMinTravellers: number };

const inr = (n: number) => `₹${new Intl.NumberFormat("en-IN").format(n)}`;

export default function PricingForm({ initial }: { initial: Pricing }) {
  const [state, action, pending] = useActionState(updateLeadPricing, {});
  const [v, setV] = useState(initial);
  const set = (k: keyof Pricing) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setV((p) => ({ ...p, [k]: Number(e.target.value) }));
  const smallest = Math.max(1, v.hotMinTravellers - 1);

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-lg border border-zinc-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900">Standard lead</h2>
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600">
              {smallest === 1 ? "1 traveller" : `1 to ${smallest} travellers`}
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-500">Couples and small groups.</p>
          <label className="mt-3 block text-xs font-medium text-zinc-700" htmlFor="standardPrice">
            Price per unlock
          </label>
          <div className="mt-1 flex items-center gap-2">
            <input
              id="standardPrice"
              name="standardPrice"
              type="number"
              min={1}
              max={100000}
              required
              value={v.standardPrice || ""}
              onChange={set("standardPrice")}
              className="w-32 rounded-md border border-zinc-300 px-3 py-1.5 text-sm"
            />
            <span className="text-sm text-zinc-600">credits</span>
            <span className="text-xs text-zinc-400">= {inr(v.standardPrice || 0)}</span>
          </div>
        </section>

        <section className="rounded-lg border border-orange-200 bg-orange-50/40 p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-zinc-900">Hot lead</h2>
            <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[11px] font-semibold text-orange-700">
              {v.hotMinTravellers || "?"}+ travellers
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-500">Families and big groups: bigger bookings, higher price.</p>
          <label className="mt-3 block text-xs font-medium text-zinc-700" htmlFor="hotPrice">
            Price per unlock
          </label>
          <div className="mt-1 flex items-center gap-2">
            <input
              id="hotPrice"
              name="hotPrice"
              type="number"
              min={1}
              max={100000}
              required
              value={v.hotPrice || ""}
              onChange={set("hotPrice")}
              className="w-32 rounded-md border border-zinc-300 px-3 py-1.5 text-sm"
            />
            <span className="text-sm text-zinc-600">credits</span>
            <span className="text-xs text-zinc-400">= {inr(v.hotPrice || 0)}</span>
          </div>
        </section>
      </div>

      <section className="flex flex-wrap items-center gap-2 rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
        <label htmlFor="hotMinTravellers">A lead is hot when it has at least</label>
        <input
          id="hotMinTravellers"
          name="hotMinTravellers"
          type="number"
          min={2}
          max={50}
          required
          value={v.hotMinTravellers || ""}
          onChange={set("hotMinTravellers")}
          className="w-20 rounded-md border border-zinc-300 px-2 py-1 text-sm"
        />
        <span>travellers (adults + children).</span>
      </section>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
        >
          {pending ? "Saving..." : "Save prices"}
        </button>
        {state.ok && <span className="text-sm font-medium text-green-700">Saved. New prices apply to the next unlock.</span>}
        {state.error && <span className="text-sm text-red-600">{state.error}</span>}
      </div>
    </form>
  );
}
