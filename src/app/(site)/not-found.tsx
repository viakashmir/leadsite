import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-extrabold text-ink">Page not found</h1>
      <p className="mt-3 text-ink-soft">This page has moved or never existed. Try one of these instead.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold">
        <Link href="/tour-packages" className="rounded-md bg-brand px-4 py-2 text-white hover:bg-brand-dark">
          Browse tour packages
        </Link>
        <Link href="/" className="rounded-md border border-zinc-300 px-4 py-2 text-ink hover:text-brand">
          Home
        </Link>
      </div>
    </div>
  );
}
