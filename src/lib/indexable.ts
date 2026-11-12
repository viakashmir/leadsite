import { unstable_cache } from "next/cache";
import sitemap from "@/app/sitemap";

// The sitemap is the one list of indexable pages (READY content, slices with
// their own copy or enough packages, lead pages with leads). Internal links to
// location/package pages are filtered against it so we never link noindex
// pages: those links put thousands of "Excluded by noindex" URLs in Search
// Console and waste crawl budget.
//
// The sitemap query is heavy, so it must not run per render: on-demand renders
// on cold serverless instances exhausted DB connections (500s under crawl).
// Shared data cache, one rebuild an hour, plus a per-instance memo.
const cachedPaths = unstable_cache(
  async () => (await sitemap()).map((e) => new URL(e.url).pathname),
  ["indexable-paths-v1"],
  { revalidate: 3600, tags: ["indexable-paths"] },
);

let memo: { at: number; paths: Promise<Set<string>> } | null = null;

export function indexablePaths(): Promise<Set<string>> {
  if (!memo || Date.now() - memo.at > 10 * 60 * 1000) {
    const paths = cachedPaths().then((list) => new Set(list));
    paths.catch(() => {
      memo = null;
    });
    memo = { at: Date.now(), paths };
  }
  return memo.paths;
}

export async function onlyIndexable<T extends { href: string }>(links: T[]): Promise<T[]> {
  const paths = await indexablePaths();
  return links.filter((l) => paths.has(l.href.split(/[?#]/)[0]));
}

// Location, package and lead URLs are only real pages when they are in the
// sitemap; everything else (blog, policies, home) is always linkable.
const GATED = /^\/(tour-packages\/|packages\/|leads\/|[a-z0-9-]+-tourism(\/|$)|[a-z0-9-]+-packages(\/|$))/;

/** Returns a test: may this internal href be linked (not a noindex location page)? */
export async function linkableTest(): Promise<(href: string) => boolean> {
  const paths = await indexablePaths();
  return (href) => {
    const path = href.split(/[?#]/)[0];
    return !GATED.test(path) || paths.has(path);
  };
}
