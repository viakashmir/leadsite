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
import { KASHMIR_UPGRADES_2 } from "./kashmir-deep-2";
import { KASHMIR_UPGRADES_3 } from "./kashmir-deep-3";
import { KASHMIR_UPGRADES_4 } from "./kashmir-deep-4";
import { LADAKH_DEEP } from "./ladakh-deep";
import { LADAKH_DEEP_2, LADAKH_UPGRADES } from "./ladakh-deep-2";
import { LADAKH_DEEP_3 } from "./ladakh-deep-3";
import { FOCUS_BATCH_1 } from "./focus-batch-1";
import { MONEY_FROM_CITIES } from "./money-from-cities";
import { SHIMLA_GUIDES } from "./shimla-guides";
import { MANALI_GUIDES } from "./manali-guides";
import { KASOL_GUIDES } from "./kasol-guides";
import { HIMACHAL_UPGRADES } from "./himachal-upgrades";

import { SUPERSEDED_POSTS } from "./superseded";
export { SUPERSEDED_POSTS };

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
  ...FOCUS_BATCH_1,
  ...MONEY_FROM_CITIES,
  ...SHIMLA_GUIDES,
  ...MANALI_GUIDES,
  ...LADAKH_DEEP,
  ...LADAKH_DEEP_2,
  ...LADAKH_DEEP_3,
  ...KASOL_GUIDES,
];

// Full rewrites keep the published slug, title and description and replace
// the body, so the URL keeps its history while the page stops being thin.
const UPGRADES: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = { ...KASHMIR_UPGRADES, ...KASHMIR_UPGRADES_2, ...KASHMIR_UPGRADES_3, ...KASHMIR_UPGRADES_4, ...HIMACHAL_UPGRADES, ...LADAKH_UPGRADES };

export const BLOG_POSTS: BlogPost[] = ALL_POSTS.filter((p) => !(p.slug in SUPERSEDED_POSTS)).map((p) =>
  UPGRADES[p.slug] ? { ...p, ...UPGRADES[p.slug] } : p,
);
