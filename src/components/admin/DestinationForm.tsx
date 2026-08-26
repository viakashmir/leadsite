"use client";

import { useActionState } from "react";
import FetchPhotoButton from "@/components/admin/FetchPhotoButton";

type Destination = {
  name: string;
  state: string | null;
  country: string;
  isInternational: boolean;
  summary: string;
  heroImage: string;
};

export default function DestinationForm({
  action,
  initial,
  fetchPhotoAction,
}: {
  action: (formData: FormData) => Promise<{ error?: string }>;
  initial?: Destination;
  fetchPhotoAction?: () => Promise<{ error?: string }>;
}) {
  const [state, formAction, pending] = useActionState(
    async (_prev: { error?: string }, formData: FormData) => action(formData),
    {} as { error?: string },
  );

  return (
    <form action={formAction} className="max-w-xl space-y-3 rounded-lg border border-zinc-200 bg-white p-5">
      <input
        name="name"
        required
        defaultValue={initial?.name}
        placeholder="Destination name, e.g. Kerala"
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <textarea
        name="summary"
        required
        defaultValue={initial?.summary}
        placeholder="Summary shown on destination pages"
        rows={3}
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          name="state"
          defaultValue={initial?.state ?? ""}
          placeholder="State (India destinations)"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <input
          name="country"
          defaultValue={initial?.country ?? "India"}
          placeholder="Country"
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
        <input type="checkbox" name="isInternational" defaultChecked={initial?.isInternational} className="h-4 w-4" />
        International destination
      </label>

      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-blue-700 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
      >
        {pending ? "Saving..." : "Save Destination"}
      </button>
    </form>
  );
}
