import sitemap from "@/app/sitemap";

// Pages to prerender at build: every public URL in the sitemap.
//
// Why: on Vercel a page rendered on demand runs a function, and every byte it
// sends counts as Fast Origin Transfer. Each deploy empties that cache, so
// crawlers re-rendered thousands of pages after every push, and the Hobby team
// was blocked for FAIR_USE_LIMITS_EXCEEDED (fastOriginTransfer) on 2026-11-12.
// Prerendered pages are part of the deployment and are served from the CDN.
//
// Pages not listed here (noindex drafts, new slugs) still render on first visit.
// SKIP_PRERENDER=1 turns this off for quick local builds. If the database is
// unreachable the build carries on and pages render on demand as before.

let paths: Promise<string[]> | null = null;

function sitemapPaths(): Promise<string[]> {
  if (process.env.SKIP_PRERENDER === "1") return Promise.resolve([]);
  paths ??= sitemap()
    .then((entries) => [...new Set(entries.map((e) => new URL(e.url).pathname.replace(/\/$/, "") || "/"))])
    .catch((err) => {
      console.warn(`[prerender] sitemap failed, pages will render on demand: ${err}`);
      return [];
    });
  return paths;
}

/** Sitemap paths split into segments, keeping those for which `match` returns params. */
export async function prerenderParams<T>(match: (segments: string[]) => T | null): Promise<T[]> {
  const out: T[] = [];
  for (const p of await sitemapPaths()) {
    const params = match(p.split("/").filter(Boolean));
    if (params) out.push(params);
  }
  return out;
}
