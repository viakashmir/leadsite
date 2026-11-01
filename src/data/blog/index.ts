import type { BlogPost } from "./types";
import { KASHMIR_CORE } from "./kashmir-core";
import { KASHMIR_GUIDES } from "./kashmir-guides";
import { KASHMIR_LADAKH } from "./kashmir-ladakh";
import { HIMACHAL_UTTARAKHAND } from "./himachal-uttarakhand";
import { RAJASTHAN_NORTH } from "./rajasthan-north";
import { GOA_WEST_CENTRAL } from "./goa-west-central";
import { SOUTH_INDIA } from "./south-india";
import { EAST_ISLANDS } from "./east-islands";
import { INTERNATIONAL_ASIA } from "./international-asia";
import { INTERNATIONAL_WORLD } from "./international-world";
import { WORLD_AND_ROUNDUPS } from "./world-and-roundups";
import { PLANNING_GUIDES } from "./planning-guides";
import { HIMACHAL_DEEP } from "./himachal-deep";
import { KASHMIR_UPGRADES } from "./kashmir-deep";

// Thin posts replaced by a full guide on the same topic; their URLs 301 to
// the new post (next.config.ts redirects) so the two never compete in search.
export const SUPERSEDED_POSTS: Record<string, string> = {
  "manali-to-leh-road-trip-plan": "manali-to-leh-road-trip-guide",
};

const ALL_POSTS: BlogPost[] = [
  ...KASHMIR_CORE,
  ...KASHMIR_GUIDES,
  ...KASHMIR_LADAKH,
  ...HIMACHAL_UTTARAKHAND,
  ...RAJASTHAN_NORTH,
  ...GOA_WEST_CENTRAL,
  ...SOUTH_INDIA,
  ...EAST_ISLANDS,
  ...INTERNATIONAL_ASIA,
  ...INTERNATIONAL_WORLD,
  ...WORLD_AND_ROUNDUPS,
  ...PLANNING_GUIDES,
  ...HIMACHAL_DEEP,
];

// Full rewrites keep the published slug, title and description and replace
// the body, so the URL keeps its history while the page stops being thin.
const UPGRADES: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = { ...KASHMIR_UPGRADES };

export const BLOG_POSTS: BlogPost[] = ALL_POSTS.filter((p) => !(p.slug in SUPERSEDED_POSTS)).map((p) =>
  UPGRADES[p.slug] ? { ...p, ...UPGRADES[p.slug] } : p,
);
