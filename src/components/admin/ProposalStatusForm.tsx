"use client";

import { useActionState } from "react";

export default function ProposalStatusForm({
  action,
  currentStatus,
}: {
  action: (formData: FormData) => Promise<{ error?: string }>;
  currentStatus: string;
}) {
  const [state, formAction, pending] = useActionState(
    async (_prev: { error?: string }, formData: FormData) => action(formData),
    {} as { error?: string },
  );

  return (
    <form action={formAction} className="print-hide flex items-center gap-2">
      <select name="status" defaultValue={currentStatus} className="rounded-md border border-zinc-300 px-2 py-1.5 text-sm">
        <option value="DRAFT">Draft</option>
        <option value="SENT">Sent</option>
        <option value="ACCEPTED">Accepted</option>
        <option value="EXPIRED">Expired</option>
      </select>
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {pending ? "Saving..." : "Update"}
      </button>
      {state?.error && <span className="text-xs text-red-600">{state.error}</span>}
    </form>
  );
}
