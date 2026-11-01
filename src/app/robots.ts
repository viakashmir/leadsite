import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Search engines and AI answer engines are all welcome on public pages.
// Named groups make that explicit for crawlers that only read their own
// group; private areas stay closed to everyone.
const PRIVATE = ["/agent/dashboard", "/admin", "/api/"];

const AI_AND_SEARCH_BOTS = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",
  "Applebot-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "YandexBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      { userAgent: AI_AND_SEARCH_BOTS, allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
