"use client";

import { useActionState } from "react";

type Pack = {
  name: string;
  tagline: string | null;
  amountINR: number;
  baseCredits: number;
  bonusCredits: number;
  sortOrder: number;
  active?: boolean;
};

export default function CreditPackForm({
  action,
  initial,
  showActiveToggle,
}: {
  action: (formData: FormData) => Promise<{ error?: string }>;
  initial?: Pack;
  showActiveToggle?: boolean;
}) {
  const [state, formAction, pending] = useActionState(
    async (_prev: { error?: string }, formData: FormData) => action(formData),
    {} as { error?: string },
  );

  return (
    <form action={formAction} className="max-w-md space-y-3 rounded-lg border border-zinc-200 bg-white p-5">
      <input
        name="name"
        required
        defaultValue={initial?.name}
        placeholder="Pack name, e.g. Growth"
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <input
        name="tagline"
        defaultValue={initial?.tagline ?? ""}
        placeholder="Tagline (optional)"
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <div className="grid grid-cols-2 gap-3">
        <label className="text-xs text-zinc-500">
          Price (INR)
          <input
            name="amountINR"
            type="number"
            required
            defaultValue={initial?.amountINR}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
        <label className="text-xs text-zinc-500">
          Sort order
          <input
            name="sortOrder"
            type="number"
            defaultValue={initial?.sortOrder ?? 0}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
        <label className="text-xs text-zinc-500">
          Base credits
          <input
            name="baseCredits"
            type="number"
            required
            defaultValue={initial?.baseCredits}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
        <label className="text-xs text-zinc-500">
          Bonus credits
          <input
            name="bonusCredits"
            type="number"
            defaultValue={initial?.bonusCredits ?? 0}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
      </div>

      {showActiveToggle && (
        <label className="flex items-center gap-2 text-sm text-zinc-700">
          <input type="checkbox" name="active" defaultChecked={initial?.active ?? true} className="h-4 w-4" />
          Active (visible to agents)
        </label>
      )}

      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-blue-700 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
      >
        {pending ? "Saving..." : "Save Pack"}
      </button>
    </form>
  );
}
