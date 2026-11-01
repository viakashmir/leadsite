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
  referencePrice?: number | null;
  referenceSource?: string | null;
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

  // Competitor reference: our price follows it, a set % below, while ticked.
  const [refPrice, setRefPrice] = useState<number>(initial?.referencePrice ?? 0);
  const [pct, setPct] = useState(2);
  const [follow, setFollow] = useState(Boolean(initial?.referencePrice));
  const [price, setPrice] = useState<number>(initial?.price ?? 0);
  const shownPrice = follow && refPrice > 0 ? Math.round(refPrice * (1 - pct / 100)) : price;

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
          value={shownPrice || ""}
          readOnly={follow && refPrice > 0}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Starting price (INR)"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm read-only:bg-zinc-50"
        />
        <input
          name="theme"
          defaultValue={initial?.theme}
          placeholder="Tags, e.g. Honeymoon,Family"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
      </div>
      <fieldset className="space-y-2 rounded-md border border-zinc-200 bg-zinc-50 p-3">
        <legend className="px-1 text-xs font-semibold text-zinc-700">Competitor price (optional)</legend>
        <div className="flex flex-wrap items-center gap-2">
          <select
            name="referenceSource"
            defaultValue={initial?.referenceSource ?? "MakeMyTrip"}
            className="rounded-md border border-zinc-300 px-2 py-1.5 text-sm"
          >
            <option>MakeMyTrip</option>
            <option>TravelTriangle</option>
            <option>Thrillophilia</option>
            <option>Other</option>
          </select>
          <input
            name="referencePrice"
            type="number"
            min={1}
            value={refPrice || ""}
            onChange={(e) => setRefPrice(Number(e.target.value))}
            placeholder="Their price (INR)"
            className="w-36 rounded-md border border-zinc-300 px-2 py-1.5 text-sm"
          />
        </div>
        <label className="flex flex-wrap items-center gap-2 text-sm text-zinc-700">
          <input
            type="checkbox"
            name="priceBelowReference"
            checked={follow}
            onChange={(e) => setFollow(e.target.checked)}
            className="h-4 w-4"
          />
          Set our price
          <input
            name="percentBelow"
            type="number"
            min={0}
            max={50}
            step={0.5}
            value={pct}
            onChange={(e) => setPct(Number(e.target.value))}
            className="w-16 rounded-md border border-zinc-300 px-2 py-1 text-sm"
          />
          % below theirs
          {follow && refPrice > 0 && (
            <span className="text-xs text-green-700">
              = ₹{new Intl.NumberFormat("en-IN").format(shownPrice)} (saves ₹
              {new Intl.NumberFormat("en-IN").format(refPrice - shownPrice)})
            </span>
          )}
        </label>
      </fieldset>
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
