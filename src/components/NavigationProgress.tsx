"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// A thin brand-coloured bar at the top of the page that starts the moment an
// internal link is clicked and completes when the new page renders, so every
// click gets instant feedback even when the next page is still loading.
export default function NavigationProgress() {
  const pathname = usePathname();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  // Finish when the route changes (state adjusted during render, not in an effect).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (state === "loading") setState("done");
  }

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest("a");
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      // Same page (including #anchor links): nothing to load.
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      setState("loading");
    }
    // Capture phase: runs before next/link handles (and prevents) the click.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (state !== "done") return;
    const t = window.setTimeout(() => setState("idle"), 300);
    return () => window.clearTimeout(t);
  }, [state]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        className="h-full bg-brand"
        style={{
          width: state === "idle" ? "0%" : state === "loading" ? "85%" : "100%",
          opacity: state === "idle" ? 0 : 1,
          transition:
            state === "loading"
              ? "width 6s cubic-bezier(0.1, 0.7, 0.2, 1), opacity 0.1s"
              : state === "done"
                ? "width 0.2s ease-out, opacity 0.3s ease 0.15s"
                : "none",
        }}
      />
    </div>
  );
}
