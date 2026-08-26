"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export default function Header() {
  const [signedIn, setSignedIn] = useState<boolean | null>(null);

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
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3">
        <Link href="/" className="text-xl font-bold text-blue-700">
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
          <Link href="/destinations" className="hover:text-blue-700">
            Destinations
          </Link>
          <Link href="/packages" className="hover:text-blue-700">
            Packages
          </Link>
          <Link href="/leads" className="hover:text-blue-700">
            Travel Leads
          </Link>
          <Link href="/agents" className="hover:text-blue-700">
            Find Agents
          </Link>
        </nav>

        <div className="flex items-center gap-3 text-sm font-semibold">
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
      </div>
    </header>
  );
}
