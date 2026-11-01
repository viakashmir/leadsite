// Travel Blog posts. Each post is a buying guide for one place: it answers the
// planning question first, links to that place's package pages and ends in a
// quote request pre-filled with the same place.

export const BLOG_CATEGORIES = [
  "Honeymoon",
  "Family",
  "Itineraries",
  "Weekend Trips",
  "Pilgrimage",
  "Adventure",
  "International",
  "Planning",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogSection = {
  h: string; // H2
  p?: string[]; // paragraphs
  list?: string[]; // bullet points
  days?: string[]; // day-by-day plan, rendered with DAY pills
};

export type BlogPost = {
  slug: string;
  title: string; // H1 and <title>
  description: string; // meta description, 140-160 chars
  category: BlogCategory;
  destination: string; // destination slug: photo fallback, package links, form pre-fill
  city?: string; // city slug when the post is about one town
  date: string; // YYYY-MM-DD first published
  intro: string; // answer-first opening paragraph
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
};
