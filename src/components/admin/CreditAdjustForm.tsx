"use client";

import { useActionState, useRef } from "react";

export default function CreditAdjustForm({
  action,
}: {
  action: (formData: FormData) => Promise<{ error?: string }>;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    async (_prev: { error?: string }, formData: FormData) => {
      const result = await action(formData);
      if (!result.error) formRef.current?.reset();
      return result;
    },
    {} as { error?: string },
  );

  return (
    <form ref={formRef} action={formAction} className="space-y-2">
      <div className="flex gap-2">
        <input
          name="amount"
          type="number"
          placeholder="+/- credits"
          className="w-28 rounded-md border border-zinc-300 px-2 py-1.5 text-sm"
        />
        <input
          name="note"
          placeholder="Reason (e.g. refund, comp)"
          className="flex-1 rounded-md border border-zinc-300 px-2 py-1.5 text-sm"
        />
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-white disabled:opacity-60"
        >
          {pending ? "Saving..." : "Adjust"}
        </button>
      </div>
      {state?.error && <p className="text-xs text-red-600">{state.error}</p>}
    </form>
  );
}
