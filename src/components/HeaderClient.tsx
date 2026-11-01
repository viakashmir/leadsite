"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_NAME } from "@/lib/site";

export type NavMenu = {
  label: string;
  href: string;
  columns: { title: string; links: { label: string; href: string }[] }[];
};

export default function HeaderClient({ menus }: { menus: NavMenu[] }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileSection, setMobileSection] = useState<number | null>(null);

  // Close any open menu after navigating (state adjusted during render, not in an effect).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenMenu(null);
    setMenuOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-40 border-b border-zinc-200 bg-white"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:py-3">
        <Link href="/" aria-label={SITE_NAME} className="shrink-0 font-display text-xl font-extrabold leading-none tracking-tight text-ink">
          Tavel <span className="text-brand">Package</span>
        </Link>

        <nav className="hidden items-center gap-0.5 whitespace-nowrap text-sm font-semibold text-ink lg:flex">
          {menus.map((menu, i) => (
            <div key={menu.label} onMouseEnter={() => setOpenMenu(i)}>
              <button
                type="button"
                onClick={() => setOpenMenu(openMenu === i ? null : i)}
                aria-expanded={openMenu === i}
                className={`flex items-center gap-1 rounded-md px-3 py-2 hover:text-brand ${
                  openMenu === i ? "text-brand" : ""
                }`}
              >
                {menu.label}
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden>
                  <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </button>
            </div>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 text-ink lg:hidden"
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

      {openMenu !== null && menus[openMenu] && (
        <div className="absolute inset-x-0 top-full hidden max-h-[75vh] overflow-y-auto border-b border-zinc-200 bg-white shadow-lg lg:block">
          <div className="mx-auto max-w-7xl px-4 py-6">
            <div className="grid grid-cols-4 gap-x-8 gap-y-6 xl:grid-cols-5">
              {menus[openMenu].columns.map((col) => (
                <div key={col.title}>
                  <p className="text-xs font-bold tracking-wide text-ink-soft">{col.title}</p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-ink hover:text-brand">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href={menus[openMenu].href}
              className="mt-6 inline-block text-sm font-semibold text-brand hover:underline"
            >
              View all {menus[openMenu].label.toLowerCase()} →
            </Link>
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-zinc-200 px-4 py-3 lg:hidden">
          <nav className="flex flex-col text-sm font-semibold text-ink">
            {menus.map((menu, i) => (
              <div key={menu.label} className="border-b border-zinc-100">
                <button
                  type="button"
                  onClick={() => setMobileSection(mobileSection === i ? null : i)}
                  aria-expanded={mobileSection === i}
                  className="flex w-full items-center justify-between py-3"
                >
                  {menu.label}
                  <span aria-hidden>{mobileSection === i ? "−" : "+"}</span>
                </button>
                {mobileSection === i && (
                  <div className="pb-3">
                    {menu.columns.map((col) => (
                      <div key={col.title} className="mt-2">
                        <p className="text-xs font-bold tracking-wide text-ink-soft">{col.title}</p>
                        <div className="mt-1 flex flex-wrap gap-1.5">
                          {col.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-ink"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
