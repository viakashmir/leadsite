"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/components/Analytics";

const ERRORS: Record<string, string> = {
  google_unavailable: "Google sign-in isn't set up yet. Please use your email and password.",
  google_cancelled: "Google sign-in was cancelled.",
  google_state: "That sign-in link expired. Please try again.",
  google_failed: "Google sign-in didn't work. Please try again.",
  too_many: "Too many attempts. Please wait a few minutes and try again.",
};

const input = "w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm focus:border-brand focus:outline-none";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export default function SignInPanel({
  mode,
  next,
  googleEnabled,
  error: initialError,
  suspended,
}: {
  mode: "signin" | "signup";
  next?: string;
  googleEnabled: boolean;
  error?: string;
  suspended?: boolean;
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(
    suspended ? "This account has been suspended. Please contact support." : (initialError && ERRORS[initialError]) || null,
  );
  const [submitting, setSubmitting] = useState(false);
  const signup = mode === "signup";
  const googleHref = `/api/auth/google${next ? `?next=${encodeURIComponent(next)}` : ""}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = new FormData(e.currentTarget);

    try {
      const res = signup
        ? await fetch("/api/agents/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contactName: form.get("contactName"),
              companyName: form.get("companyName"),
              phone: form.get("phone"),
              email: form.get("email"),
              password: form.get("password"),
            }),
          })
        : await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: form.get("email"), password: form.get("password"), next }),
          });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? (signup ? "Could not create your account" : "Invalid email or password"));
        setSubmitting(false);
        return;
      }
      if (signup) trackEvent("sign_up", { method: "email" });
      router.push(data.redirect ?? "/agent/dashboard/profile");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h1 className="text-xl font-bold text-zinc-900">{signup ? "Join free as a travel agent" : "Sign in"}</h1>
      <p className="mt-1 text-sm text-zinc-500">
        {signup
          ? "Takes a minute. Add your services and destinations later from your profile."
          : "Travel agents and admins sign in here."}
      </p>

      {googleEnabled && (
        <>
          <a
            href={googleHref}
            onClick={() => trackEvent(signup ? "sign_up" : "login", { method: "google" })}
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-md border border-zinc-300 bg-white py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
          >
            <GoogleIcon />
            Continue with Google
          </a>
          <div className="my-5 flex items-center gap-3 text-xs text-zinc-400">
            <span className="h-px flex-1 bg-zinc-200" />
            or with email
            <span className="h-px flex-1 bg-zinc-200" />
          </div>
        </>
      )}

      <form onSubmit={handleSubmit} className={`space-y-3 ${googleEnabled ? "" : "mt-5"}`}>
        {signup && (
          <>
            <input name="contactName" required minLength={2} maxLength={100} placeholder="Your name" autoComplete="name" className={input} />
            <input name="companyName" required minLength={2} maxLength={150} placeholder="Company name" autoComplete="organization" className={input} />
            <input name="phone" required type="tel" placeholder="Phone number" autoComplete="tel" className={input} />
          </>
        )}
        <input name="email" type="email" required placeholder="Email" autoComplete="email" className={input} />
        <input
          name="password"
          type="password"
          required
          minLength={signup ? 8 : 1}
          placeholder={signup ? "Password (8+ characters)" : "Password"}
          autoComplete={signup ? "new-password" : "current-password"}
          className={input}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-brand py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
        >
          {submitting ? "Please wait…" : signup ? "Create account" : "Sign in"}
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-zinc-500">
        {signup ? (
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-brand">
              Sign in
            </Link>
          </>
        ) : (
          <>
            Travel agent and new here?{" "}
            <Link href="/agent/register" className="font-medium text-brand">
              Join free
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
