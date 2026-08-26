"use client";

import { useActionState, useRef } from "react";

export default function NoteForm({
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
    <form ref={formRef} action={formAction} className="flex gap-2">
      <input
        name="body"
        placeholder="Add a follow-up note (e.g. call outcome)..."
        className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60"
      >
        {pending ? "Adding..." : "Add"}
      </button>
      {state?.error && <span className="self-center text-xs text-red-600">{state.error}</span>}
    </form>
  );
}
