import Link from "next/link";
import { Section } from "@/components/location/blocks";
import type { TopicPost } from "@/lib/topicLinks";

// Article links on guide, attraction and package pages: the hub-to-spoke half
// of a topic cluster (see src/lib/topicLinks.ts).

function ArticleGrid({ posts }: { posts: TopicPost[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {posts.map((p) => (
        <li key={p.slug}>
          <Link
            href={p.href}
            className="group flex h-full flex-col rounded-xl border border-zinc-200 bg-white px-3.5 py-3 transition hover:border-brand/30 hover:shadow-sm"
          >
            <span className="text-[11px] font-semibold uppercase tracking-wide text-gold">{p.category}</span>
            <span className="mt-0.5 font-semibold leading-snug text-ink group-hover:text-brand">{p.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** A short list of the most relevant articles for this page. */
export function TopicArticles({ title, posts, moreHref, moreLabel }: { title: string; posts: TopicPost[]; moreHref?: string; moreLabel?: string }) {
  if (posts.length === 0) return null;
  return (
    <Section title={title}>
      <ArticleGrid posts={posts} />
      {moreHref && (
        <Link href={moreHref} className="mt-3 inline-block text-sm font-semibold text-brand hover:underline">
          {moreLabel ?? "All travel guides"} →
        </Link>
      )}
    </Section>
  );
}

/** A destination's or city's whole article cluster, grouped by category: the pillar page's library. */
export function ArticleCluster({
  title,
  groups,
  id = "travel-guides",
}: {
  title: string;
  groups: [string, TopicPost[]][];
  id?: string;
}) {
  if (groups.length === 0) return null;
  return (
    <Section id={id} title={title}>
      <div className="space-y-5">
        {groups.map(([category, posts]) => (
          <div key={category}>
            <h3 className="mb-2 text-sm font-bold text-ink">
              {category} <span className="font-normal text-ink-soft">({posts.length})</span>
            </h3>
            <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
              {posts.map((p) => (
                <li key={p.slug} className="flex gap-2 text-sm leading-snug">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                  <Link href={p.href} className="text-ink hover:text-brand hover:underline">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
