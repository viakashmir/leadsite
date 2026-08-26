"use client";

import { useState } from "react";

function maskValue(value: string): string {
  if (value.includes("@")) {
    const [local, domain] = value.split("@");
    return `${local.slice(0, 2)}${"*".repeat(Math.max(local.length - 2, 2))}@${domain}`;
  }
  const digits = value.replace(/\D/g, "");
  return value.replace(digits.slice(0, -2), "*".repeat(Math.max(digits.length - 2, 4)));
}

export default function RevealField({ value }: { value: string }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <span className="inline-flex items-center gap-2">
      <span>{revealed ? value : maskValue(value)}</span>
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        className="text-xs font-medium text-blue-700 hover:underline"
      >
        {revealed ? "Hide" : "Reveal"}
      </button>
    </span>
  );
}
