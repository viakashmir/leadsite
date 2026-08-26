"use client";

export default function ConfirmDeleteForm({
  action,
  confirmText,
  label = "Delete",
}: {
  action: () => Promise<void>;
  confirmText: string;
  label?: string;
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
        className="rounded-md border border-red-300 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
      >
        {label}
      </button>
    </form>
  );
}
