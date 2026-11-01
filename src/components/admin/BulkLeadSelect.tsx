"use client";

import { useEffect, useState, useTransition } from "react";

// Bulk selection for the admin leads table. Row checkboxes live in the table
// (outside this form) and join it through the HTML `form` attribute, so the
// per-row Delete forms don't end up nested inside this one.
const rowBoxes = (formId: string) =>
  Array.from(document.querySelectorAll<HTMLInputElement>(`input[type="checkbox"][name="ids"][form="${formId}"]`));

export function SelectAllCheckbox({ formId }: { formId: string }) {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    const sync = () => {
      const boxes = rowBoxes(formId);
      setChecked(boxes.length > 0 && boxes.every((b) => b.checked));
    };
    document.addEventListener("change", sync);
    return () => document.removeEventListener("change", sync);
  }, [formId]);

  return (
    <input
      type="checkbox"
      aria-label="Select all leads"
      checked={checked}
      onChange={(e) => {
        for (const b of rowBoxes(formId)) b.checked = e.target.checked;
        setChecked(e.target.checked);
        document.dispatchEvent(new Event("change"));
      }}
      className="h-4 w-4 rounded border-zinc-300 accent-zinc-900"
    />
  );
}

export function BulkDeleteBar({
  formId,
  action,
}: {
  formId: string;
  action: (fd: FormData) => Promise<{ deleted: number }>;
}) {
  const [count, setCount] = useState(0);
  const [pending, startTransition] = useTransition();
  const [done, setDone] = useState<number | null>(null);

  useEffect(() => {
    const sync = () => setCount(rowBoxes(formId).filter((b) => b.checked).length);
    document.addEventListener("change", sync);
    sync();
    return () => document.removeEventListener("change", sync);
  }, [formId]);

  return (
    <form
      id={formId}
      onSubmit={(e) => {
        e.preventDefault();
        if (!count || !confirm(`Delete ${count} selected lead${count === 1 ? "" : "s"}? This can't be undone. Agents' credits are not refunded.`)) return;
        const fd = new FormData(e.currentTarget);
        startTransition(async () => {
          const { deleted } = await action(fd);
          setDone(deleted);
          setCount(0);
        });
      }}
      className={`flex items-center gap-3 rounded-md px-3 py-1.5 text-sm ${count ? "bg-red-50 ring-1 ring-inset ring-red-200" : ""}`}
    >
      {count > 0 ? (
        <>
          <span className="font-medium text-red-800">{count} selected</span>
          <button
            type="submit"
            disabled={pending}
            className="rounded-md bg-red-600 px-3 py-1 text-xs font-semibold text-white hover:bg-red-700 disabled:opacity-60"
          >
            {pending ? "Deleting..." : "Delete selected"}
          </button>
        </>
      ) : (
        <span className="text-xs text-zinc-500">
          {done !== null ? `Deleted ${done} lead${done === 1 ? "" : "s"}.` : "Tick leads to delete several at once."}
        </span>
      )}
    </form>
  );
}
