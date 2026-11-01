"use client";

import { useActionState } from "react";
import Link from "next/link";
import { unlockLead } from "@/lib/actions";

export default function UnlockButton({ leadId, price }: { leadId: string; price: number }) {
  const [state, formAction, pending] = useActionState(
    async () => unlockLead(leadId),
    {} as { error?: string },
  );

  return (
    <form action={formAction} className="inline-flex flex-col items-end gap-1">
      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
      >
        {pending ? "Buying…" : `Buy Now · ${price} credits`}
      </button>
      {state?.error && (
        <span className="text-xs text-red-600">
          {state.error}
          {state.error.includes("credits") && (
            <>
              {" "}
              <Link href="/agent/dashboard/wallet" className="underline">
                Top up
              </Link>
            </>
          )}
        </span>
      )}
    </form>
  );
}
