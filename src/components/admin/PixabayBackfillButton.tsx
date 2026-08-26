"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function PixabayBackfillButton({
  action,
}: {
  action: () => Promise<{ done: number; failed: number }>;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<{ done: number; failed: number } | null>(null);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        disabled={pending}
        onClick={() => {
          setResult(null);
          startTransition(async () => {
            const r = await action();
            setResult(r);
            router.refresh();
          });
        }}
        className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 disabled:opacity-60"
      >
        {pending ? "Fetching photos..." : "Backfill all photos from Pixabay"}
      </button>
      {result && (
        <span className="text-xs text-zinc-500">
          {result.done} updated{result.failed > 0 ? `, ${result.failed} failed` : ""}
        </span>
      )}
    </div>
  );
}
