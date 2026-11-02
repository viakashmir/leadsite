import type { BlogPost } from "./types";
import { KASHMIR_CORE } from "./kashmir-core";
import { KASHMIR_GUIDES } from "./kashmir-guides";
import { KASHMIR_LADAKH } from "./kashmir-ladakh";
import { HIMACHAL_UTTARAKHAND } from "./himachal-uttarakhand";
import { RAJASTHAN_NORTH } from "./rajasthan-north";
import { GOA_WEST_CENTRAL } from "./goa-west-central";
import { GOA_DEEP, GOA_UPGRADES } from "./goa-deep";
import { UTTARAKHAND_DEEP, UTTARAKHAND_UPGRADES } from "./uttarakhand-deep";
import { UTTARAKHAND_DEEP_2 } from "./uttarakhand-deep-2";
import { KERALA_DEEP, KERALA_UPGRADES } from "./kerala-deep";
import { KERALA_DEEP_2 } from "./kerala-deep-2";
import { RAJASTHAN_DEEP, RAJASTHAN_UPGRADES } from "./rajasthan-deep";
import { RAJASTHAN_DEEP_2 } from "./rajasthan-deep-2";
import { SOUTH_WEST_GUIDES } from "./south-west-guides";
import { SIKKIM_DEEP, SIKKIM_UPGRADES } from "./sikkim-deep";
import { SIKKIM_DEEP_2 } from "./sikkim-deep-2";
import { ANDAMAN_DEEP, ANDAMAN_UPGRADES } from "./andaman-deep";
import { ANDAMAN_DEEP_2 } from "./andaman-deep-2";
import { THAILAND_DEEP, THAILAND_UPGRADES } from "./thailand-deep";
import { THAILAND_DEEP_2 } from "./thailand-deep-2";
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
import { KASHMIR_UPGRADES_5 } from "./kashmir-deep-5";
import { KASHMIR_WINTER_MONTHS } from "./kashmir-winter-months";
import { KASHMIR_PLANNING_DEEP } from "./kashmir-planning-deep";
import { KASHMIR_LOCAL_GUIDES } from "./kashmir-local-guides";
import { withKashmirExtras } from "./kashmir-extras";
import { LADAKH_DEEP } from "./ladakh-deep";
import { LADAKH_DEEP_2, LADAKH_UPGRADES } from "./ladakh-deep-2";
import { LADAKH_DEEP_3 } from "./ladakh-deep-3";
import { LADAKH_DEEP_4 } from "./ladakh-deep-4";
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
  ...withKashmirExtras([...KASHMIR_WINTER_MONTHS, ...KASHMIR_PLANNING_DEEP, ...KASHMIR_LOCAL_GUIDES]),
  ...KASHMIR_GUIDES,
  ...KASHMIR_LADAKH,
  ...HIMACHAL_UTTARAKHAND,
  ...RAJASTHAN_NORTH,
  ...GOA_WEST_CENTRAL,
  ...GOA_DEEP,
  ...UTTARAKHAND_DEEP,
  ...UTTARAKHAND_DEEP_2,
  ...KERALA_DEEP,
  ...KERALA_DEEP_2,
  ...RAJASTHAN_DEEP,
  ...RAJASTHAN_DEEP_2,
  ...SOUTH_WEST_GUIDES,
  ...SIKKIM_DEEP,
  ...SIKKIM_DEEP_2,
  ...ANDAMAN_DEEP,
  ...ANDAMAN_DEEP_2,
  ...THAILAND_DEEP,
  ...THAILAND_DEEP_2,
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
  ...LADAKH_DEEP_4,
  ...KASOL_GUIDES,
];

// Full rewrites keep the published slug, title and description and replace
// the body, so the URL keeps its history while the page stops being thin.
// Each rewrite batch, with the day it went live (sets the post's updated date,
// so the sitemap, Article dateModified and byline reflect the rewrite).
const UPGRADE_BATCHES: [Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">>, string][] = [
  [KASHMIR_UPGRADES, "2026-11-01"],
  [KASHMIR_UPGRADES_2, "2026-11-01"],
  [KASHMIR_UPGRADES_3, "2026-11-01"],
  [HIMACHAL_UPGRADES, "2026-11-01"],
  [LADAKH_UPGRADES, "2026-11-01"],
  [KASHMIR_UPGRADES_4, "2026-11-02"],
  [GOA_UPGRADES, "2026-11-02"],
  [UTTARAKHAND_UPGRADES, "2026-11-02"],
  [KERALA_UPGRADES, "2026-11-02"],
  [RAJASTHAN_UPGRADES, "2026-11-02"],
  [SIKKIM_UPGRADES, "2026-11-02"],
  [KASHMIR_UPGRADES_5, "2026-11-03"],
  [ANDAMAN_UPGRADES, "2026-11-02"],
  [THAILAND_UPGRADES, "2026-11-02"],
];
const UPGRADES: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs" | "updated">> = Object.fromEntries(
  UPGRADE_BATCHES.flatMap(([batch, updated]) => Object.entries(batch).map(([slug, u]) => [slug, { ...u, updated }])),
);

export const BLOG_POSTS: BlogPost[] = ALL_POSTS.filter((p) => !(p.slug in SUPERSEDED_POSTS)).map((p) => {
  const u = UPGRADES[p.slug];
  if (!u) return p;
  return { ...p, ...u, updated: u.updated && u.updated > p.date ? u.updated : undefined };
});
