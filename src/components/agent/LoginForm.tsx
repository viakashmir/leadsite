"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm({ next }: { next: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/agents/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Invalid email or password");
        setSubmitting(false);
        return;
      }
      router.push(next);
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-sm space-y-3 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <h1 className="text-lg font-semibold text-zinc-900">Agent Sign In</h1>
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      <input
        name="password"
        type="password"
        required
        placeholder="Password"
        className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-md bg-blue-700 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
      >
        {submitting ? "Signing in..." : "Sign In"}
      </button>
      <p className="text-center text-xs text-zinc-500">
        New here?{" "}
        <Link href="/agent/register" className="font-medium text-blue-700">
          Join free
        </Link>
      </p>
    </form>
  );
}
