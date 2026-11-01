// Thin posts replaced by a full guide on the same topic; their URLs 301 to
// the new post (next.config.ts redirects) so the two never compete in search.
// Kept in its own file so next.config.ts doesn't load every blog post (and
// their JSON/data imports) just to build the redirect list.
export const SUPERSEDED_POSTS: Record<string, string> = {
  "manali-to-leh-road-trip-plan": "manali-to-leh-road-trip-guide",
};
