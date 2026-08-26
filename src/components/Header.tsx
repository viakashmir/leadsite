"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const NAV_LINKS = [
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Packages" },
  { href: "/leads", label: "Travel Leads" },
  { href: "/agents", label: "Find Agents" },
];

export default function Header() {
  const [signedIn, setSignedIn] = useState<boolean | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/agents/me")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setSignedIn(Boolean(data.agent));
      })
      .catch(() => {
        if (!cancelled) setSignedIn(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="shrink-0 text-xl font-bold text-blue-700">
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-blue-700">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 text-sm font-semibold md:flex">
          {signedIn ? (
            <Link
              href="/agent/dashboard"
              className="rounded-full bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
            >
              Agent Dashboard
            </Link>
          ) : (
            <>
              <Link href="/agent/login" className="text-zinc-700 hover:text-blue-700">
                Agent Sign In
              </Link>
              <Link
                href="/agent/register"
                className="rounded-full bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
              >
                Join Free as Agent
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 md:hidden"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-zinc-200 px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1 text-sm font-medium text-zinc-700">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2.5 hover:bg-zinc-50 hover:text-blue-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-zinc-100 pt-3 text-sm font-semibold">
            {signedIn ? (
              <Link
                href="/agent/dashboard"
                onClick={() => setMenuOpen(false)}
                className="rounded-md bg-blue-700 px-4 py-2.5 text-center text-white"
              >
                Agent Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/agent/login"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md border border-zinc-200 px-4 py-2.5 text-center text-zinc-700"
                >
                  Agent Sign In
                </Link>
                <Link
                  href="/agent/register"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md bg-orange-500 px-4 py-2.5 text-center text-white"
                >
                  Join Free as Agent
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
