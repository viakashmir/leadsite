import { BLOG_POSTS } from "@/data/blog";
import { META_TITLES } from "@/data/blog/meta-titles";
import { BLOG_CATEGORIES, type BlogCategory, type BlogPost } from "@/data/blog/types";

export const BLOG_PATH = "/blog";

// The region the blog leads with: shown first on /blog and listed first in categories.
export const FEATURED_DESTINATION = { slug: "kashmir", name: "Kashmir" };
export const postUrl = (slug: string) => `${BLOG_PATH}/${slug}`;

const bySlug = new Map(BLOG_POSTS.map((p) => [p.slug, p]));
export const getPost = (slug: string) => bySlug.get(slug);

// Search title for a post, with {year} filled in; falls back to the H1.
export const metaTitle = (post: BlogPost) =>
  (META_TITLES[post.slug] ?? post.title).replace("{year}", String(new Date().getFullYear()));

// Newest first; on the same date the featured region's guides come first.
const featuredFirst = (p: { destination: string }) => (p.destination === FEATURED_DESTINATION.slug ? 0 : 1);
export const allPosts = () =>
  [...BLOG_POSTS].sort(
    (a, b) => b.date.localeCompare(a.date) || featuredFirst(a) - featuredFirst(b) || a.title.localeCompare(b.title),
  );

export const postsByCategory = () =>
  BLOG_CATEGORIES.map((category) => ({ category, posts: allPosts().filter((p) => p.category === category) })).filter(
    (g) => g.posts.length > 0,
  );

export function readMinutes(post: BlogPost) {
  const text = [
    post.intro,
    ...post.sections.flatMap((s) => [s.h, ...(s.p ?? []), ...(s.list ?? []), ...(s.days ?? [])]),
    ...post.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return Math.max(3, Math.round(text.split(/\s+/).length / 200));
}

// Same place first, then same category.
export function relatedPosts(post: BlogPost, n = 3) {
  const score = (p: BlogPost) =>
    (p.city && p.city === post.city ? 4 : 0) + (p.destination === post.destination ? 2 : 0) + (p.category === post.category ? 1 : 0);
  return allPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, s: score(p) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => x.p);
}

// Theme package page that matches a post's category, where one exists.
export const CATEGORY_THEME: Partial<Record<BlogCategory, string>> = {
  Honeymoon: "honeymoon-packages",
  Family: "family-packages",
  Pilgrimage: "pilgrimage-tour-packages",
  Adventure: "adventure-tour-packages",
};
