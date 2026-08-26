"use client";

import { useActionState } from "react";
import { topUpCredits } from "@/lib/actions";
import type { CreditPack } from "@/lib/credits";
import { formatINR } from "@/lib/format";

export default function TopUpButton({ pack, highlight }: { pack: CreditPack; highlight?: boolean }) {
  const [state, formAction, pending] = useActionState(
    async () => topUpCredits(pack.id),
    {} as { error?: string },
  );

  return (
    <form
      action={formAction}
      className={`flex flex-col items-center gap-2 rounded-lg border p-5 text-center ${
        highlight ? "border-orange-400 bg-orange-50" : "border-zinc-200 bg-white"
      }`}
    >
      <p className="text-2xl font-bold text-zinc-900">{pack.baseCredits + pack.bonusCredits}</p>
      <p className="text-xs text-zinc-500">credits</p>
      {pack.bonusCredits > 0 && (
        <p className="text-xs font-medium text-green-600">
          incl. {pack.bonusCredits} bonus
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="mt-2 w-full rounded-md bg-blue-700 py-2 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
      >
        {pending ? "Processing..." : `Buy for ${formatINR(pack.amountINR)}`}
      </button>
      {state?.error && <p className="text-xs text-red-600">{state.error}</p>}
    </form>
  );
}
