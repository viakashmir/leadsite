"use client";

import { useActionState, useState } from "react";
import { createAgentPackage } from "@/lib/actions";

type Destination = { id: string; name: string; cities: { id: string; name: string }[] };

export default function PackageForm({ destinations }: { destinations: Destination[] }) {
  const [state, formAction, pending] = useActionState(
    async (_prev: { error?: string }, formData: FormData) => createAgentPackage(formData),
    {} as { error?: string },
  );
  const [destinationId, setDestinationId] = useState(destinations[0]?.id ?? "");
  const selected = destinations.find((d) => d.id === destinationId);

  return (
    <form action={formAction} className="max-w-xl space-y-3 rounded-lg border border-zinc-200 bg-white p-5">
      <input
        name="title"
        required
        placeholder="Package title, e.g. 6 Days Kerala Family Tour"
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <textarea
        name="summary"
        required
        placeholder="Short summary"
        rows={2}
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <textarea
        name="itinerary"
        placeholder="Day-wise itinerary (one line per day)"
        rows={4}
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <div className="grid grid-cols-2 gap-3">
        <select
          name="destinationId"
          value={destinationId}
          onChange={(e) => setDestinationId(e.target.value)}
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        >
          {destinations.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
        {selected && selected.cities.length > 0 && (
          <select name="cityId" className="rounded-md border border-zinc-300 px-3 py-2 text-sm">
            <option value="">Any city</option>
            {selected.cities.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        )}
        <input
          name="durationDays"
          type="number"
          min={1}
          required
          placeholder="Days"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <input
          name="durationNights"
          type="number"
          min={0}
          required
          placeholder="Nights"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <input
          name="price"
          type="number"
          min={1}
          required
          placeholder="Starting price (INR)"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <input
          name="theme"
          placeholder="Tags, e.g. Honeymoon,Family"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
      </div>

      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-orange-500 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-60"
      >
        {pending ? "Publishing..." : "Publish Package"}
      </button>
    </form>
  );
}
