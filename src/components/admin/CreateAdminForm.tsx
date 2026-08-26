"use client";

import { useActionState, useRef } from "react";
import { createAdminUser } from "@/lib/adminActions";

export default function CreateAdminForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    async (_prev: { error?: string }, formData: FormData) => {
      const result = await createAdminUser(formData);
      if (!result.error) formRef.current?.reset();
      return result;
    },
    {} as { error?: string },
  );

  return (
    <form ref={formRef} action={formAction} className="grid gap-2 sm:grid-cols-4">
      <input name="name" placeholder="Name" required className="rounded-md border border-zinc-300 px-3 py-2 text-sm" />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
      >
        {pending ? "Adding..." : "Add Team Member"}
      </button>
      {state?.error && <p className="text-xs text-red-600 sm:col-span-4">{state.error}</p>}
    </form>
  );
}
