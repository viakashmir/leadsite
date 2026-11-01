"use client";

export default function ConfirmDeleteForm({
  action,
  confirmText,
  label = "Delete",
  compact = false,
}: {
  action: () => Promise<void>;
  confirmText: string;
  label?: string;
  compact?: boolean;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(confirmText)) e.preventDefault();
      }}
    >
      <button
        type="submit"
        className={
          compact
            ? "rounded px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
            : "rounded-md border border-red-300 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
        }
      >
        {label}
      </button>
    </form>
  );
}
