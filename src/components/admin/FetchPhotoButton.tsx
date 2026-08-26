"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function FetchPhotoButton({
  action,
}: {
  action: () => Promise<{ error?: string }>;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        disabled={pending}
        onClick={() => {
          setError(null);
          startTransition(async () => {
            const result = await action();
            if (result?.error) {
              setError(result.error);
            } else {
              router.refresh();
            }
          });
        }}
        className="whitespace-nowrap rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100 disabled:opacity-60"
      >
        {pending ? "Fetching..." : "Fetch photo from Pixabay"}
      </button>
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
