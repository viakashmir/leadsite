"use client";

import { startTransition, useActionState } from "react";
import { completeOnboarding, type FormResult } from "@/lib/profileActions";

const input = "w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm focus:border-brand focus:outline-none";

export default function OnboardingForm({ contactName }: { contactName: string }) {
  const [state, action, pending] = useActionState<FormResult, FormData>(completeOnboarding, {});
  // Submitting through onSubmit (not the form's action prop) stops React from
  // resetting the fields, so typed values survive a validation error.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(() => action(data));
  };
  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-sm space-y-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h1 className="text-xl font-bold text-zinc-900">One last step</h1>
      <p className="text-sm text-zinc-500">So travellers and our team can reach you. Everything else can wait.</p>
      <input name="contactName" required minLength={2} maxLength={100} defaultValue={contactName} placeholder="Your name" className={input} />
      <input name="companyName" required minLength={2} maxLength={150} placeholder="Company name" autoComplete="organization" className={input} />
      <input name="phone" required type="tel" placeholder="Phone number" autoComplete="tel" className={input} />
      {state.error && <p className="text-sm text-red-600">{state.error}</p>}
      <button type="submit" disabled={pending} className="w-full rounded-md bg-brand py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60">
        {pending ? "Saving…" : "Continue"}
      </button>
    </form>
  );
}
