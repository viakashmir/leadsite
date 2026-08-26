"use client";

import { useActionState, useState } from "react";
import FetchPhotoButton from "@/components/admin/FetchPhotoButton";

type Destination = { id: string; name: string; cities: { id: string; name: string }[] };

type PackageInitial = {
  title: string;
  summary: string;
  itinerary: string;
  heroImage: string;
  durationDays: number;
  durationNights: number;
  price: number;
  theme: string;
  destinationId: string;
  cityId: string | null;
  published: boolean;
};

export default function AdminPackageForm({
  action,
  destinations,
  initial,
  defaultDestinationId,
  fetchPhotoAction,
}: {
  action: (formData: FormData) => Promise<{ error?: string }>;
  destinations: Destination[];
  initial?: PackageInitial;
  defaultDestinationId?: string;
  fetchPhotoAction?: () => Promise<{ error?: string }>;
}) {
  const [state, formAction, pending] = useActionState(
    async (_prev: { error?: string }, formData: FormData) => action(formData),
    {} as { error?: string },
  );
  const [destinationId, setDestinationId] = useState(
    initial?.destinationId ?? defaultDestinationId ?? destinations[0]?.id ?? "",
  );
  const selected = destinations.find((d) => d.id === destinationId);

  return (
    <form action={formAction} className="max-w-xl space-y-3 rounded-lg border border-zinc-200 bg-white p-5">
      <input
        name="title"
        required
        defaultValue={initial?.title}
        placeholder="Package title, e.g. 6 Days Kerala Family Tour"
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <textarea
        name="summary"
        required
        defaultValue={initial?.summary}
        placeholder="Short summary"
        rows={2}
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <textarea
        name="itinerary"
        defaultValue={initial?.itinerary}
        placeholder="Day-wise itinerary (one line per day)"
        rows={5}
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
        <select
          name="cityId"
          defaultValue={initial?.cityId ?? ""}
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        >
          <option value="">Any city</option>
          {selected?.cities.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <input
          name="durationDays"
          type="number"
          min={1}
          required
          defaultValue={initial?.durationDays}
          placeholder="Days"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <input
          name="durationNights"
          type="number"
          min={0}
          required
          defaultValue={initial?.durationNights}
          placeholder="Nights"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <input
          name="price"
          type="number"
          min={1}
          required
          defaultValue={initial?.price}
          placeholder="Starting price (INR)"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <input
          name="theme"
          defaultValue={initial?.theme}
          placeholder="Tags, e.g. Honeymoon,Family"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
      </div>
      <input
        name="heroImage"
        defaultValue={initial?.heroImage ?? ""}
        placeholder="Hero image URL (optional)"
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      {fetchPhotoAction && <FetchPhotoButton action={fetchPhotoAction} />}
      <label className="flex items-center gap-2 text-sm text-zinc-700">
        <input type="checkbox" name="published" defaultChecked={initial?.published ?? true} className="h-4 w-4" />
        Published (visible on the public site)
      </label>

      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-blue-700 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
      >
        {pending ? "Saving..." : "Save Package"}
      </button>
    </form>
  );
}
