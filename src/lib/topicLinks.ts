import { allPosts, postUrl } from "@/lib/blog";
import type { BlogCategory, BlogPost } from "@/data/blog/types";

// Topic clusters: every guide, attraction and package page links to the
// articles written about the same place, and every article links back up to
// its place's guide. Search engines read that two-way linking as one deep,
// connected topic instead of hundreds of loose pages, and readers always have
// a next step. Matching uses only what each post already states (its
// destination, city, category and title), so nothing here is guessed.

export type TopicPost = { slug: string; href: string; title: string; category: BlogCategory; city?: string };

const toTopic = (p: BlogPost): TopicPost => ({ slug: p.slug, href: postUrl(p.slug), title: p.title, category: p.category, city: p.city });

// Title patterns per guide section, so "Best Time to Visit Gulmarg" lists
// the month and weather articles, "How to Reach" lists the route articles...
export const SECTION_TOPICS: Record<string, RegExp> = {
  "best-time-to-visit": /\b(best time|weather|month|season|monsoon|winter|summer|spring|autumn|snow|january|february|march|april|may|june|july|august|september|october|november|december)\b/i,
  "how-to-reach": /\b(how to reach|route|road trip|drive|driving|flight|train|bus|distance|from (delhi|mumbai|bangalore|chennai|kolkata|hyderabad|pune|chandigarh|jammu|ahmedabad))\b/i,
  "things-to-do": /\b(things to do|activities|activity|trek|trekking|ski|skiing|rafting|paragliding|adventure|camping|safari|dive|diving|snorkel)/i,
  "places-to-visit": /\b(places|sightseeing|itinerary|days|day trip|attractions|hidden|offbeat)\b/i,
  "local-food": /\b(food|cuisine|eat|dishes|restaurants|wazwan|cafe|cafes)\b/i,
  "culture-and-heritage": /\b(culture|heritage|temple|monaster|festival|history|shrine|pilgrimage|yatra)/i,
  "travel-guide-tips": /\b(tips|permit|cost|budget|packing|mistakes|safety|safe|guide to|things to know|cab|taxi|currency|visa)\b/i,
};

// Package-page variants map to the matching article categories.
export const THEME_CATEGORIES: Record<string, BlogCategory[]> = {
  Honeymoon: ["Honeymoon"],
  Family: ["Family"],
  Pilgrimage: ["Pilgrimage"],
  Adventure: ["Adventure"],
  Trekking: ["Adventure"],
  Friends: ["Adventure", "Weekend Trips"],
  Solo: ["Adventure", "Planning"],
  Budget: ["Planning"],
};

/** Every article in a destination's cluster, newest first. */
export const postsForDestination = (destinationSlug: string) =>
  allPosts().filter((p) => p.destination === destinationSlug);

/**
 * Articles for a page about a place. City articles first, then the rest of
 * the destination; `topic` (a section pattern, theme categories or a place
 * name) floats matching articles to the top without dropping the others.
 */
export function postsForPlace(opts: {
  destination: string;
  city?: string | null;
  section?: string;
  categories?: BlogCategory[];
  mention?: string; // an attraction name: articles that name it in the title or body
  limit?: number;
  strict?: boolean; // only articles that match the topic
}): TopicPost[] {
  const { destination, city, section, categories, mention, limit = 6, strict = false } = opts;
  const pattern = section ? SECTION_TOPICS[section] : undefined;
  const mentionRe = mention ? new RegExp(`\\b${mention.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i") : undefined;
  const scored = postsForDestination(destination)
    .map((p) => {
      const body = mentionRe ? `${p.title} ${p.intro} ${p.sections.map((s) => `${s.h} ${(s.p ?? []).join(" ")}`).join(" ")}` : "";
      const topicHit =
        (pattern ? pattern.test(p.title) : false) ||
        (categories ? categories.includes(p.category) : false) ||
        (mentionRe ? mentionRe.test(body) : false);
      const cityHit = Boolean(city && p.city === city);
      return { p, topicHit, score: (topicHit ? 4 : 0) + (cityHit ? 2 : 0) + (city && p.city && p.city !== city ? -1 : 0) };
    })
    // Attraction pages and strict lists show matches only; others fill up
    // with the rest of the destination's cluster.
    .filter((x) => (strict || mentionRe ? x.topicHit : true));
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => toTopic(x.p));
}

/** A destination's whole cluster, grouped by category, for its guide hub. */
export function clusterByCategory(destinationSlug: string, city?: string | null) {
  const posts = postsForDestination(destinationSlug)
    .filter((p) => !city || p.city === city)
    .map(toTopic);
  const groups = new Map<BlogCategory, TopicPost[]>();
  for (const p of posts) groups.set(p.category, [...(groups.get(p.category) ?? []), p]);
  return { total: posts.length, groups: [...groups.entries()].sort((a, b) => b[1].length - a[1].length) };
}
