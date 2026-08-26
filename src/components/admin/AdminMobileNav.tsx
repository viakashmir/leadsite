"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/admin/agents", label: "Agents CRM" },
  { href: "/admin/leads", label: "Leads CRM" },
  { href: "/admin/proposals", label: "Proposals" },
  { href: "/admin/credit-packs", label: "Credit Packs" },
  { href: "/admin/destinations", label: "Destinations" },
  { href: "/admin/packages", label: "Packages" },
  { href: "/admin/team", label: "Team" },
];

export default function AdminMobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-zinc-800 md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-zinc-100"
      >
        Menu
        <svg
          viewBox="0 0 24 24"
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-zinc-800 px-3 pb-3 pt-2 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-zinc-100 hover:bg-zinc-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
