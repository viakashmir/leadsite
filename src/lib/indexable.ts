import sitemap from "@/app/sitemap";

// The sitemap is the one list of indexable pages (READY content, slices with
// their own copy or enough packages, lead pages with leads). Internal links to
// location/package pages are filtered against it so we never link noindex
// pages: those links put thousands of "Excluded by noindex" URLs in Search
// Console and waste crawl budget. Memoised per server process for 10 minutes,
// since a build renders thousands of pages that all need it.
let memo: { at: number; paths: Promise<Set<string>> } | null = null;

export function indexablePaths(): Promise<Set<string>> {
  if (!memo || Date.now() - memo.at > 10 * 60 * 1000) {
    const paths = sitemap().then((entries) => new Set(entries.map((e) => new URL(e.url).pathname)));
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
