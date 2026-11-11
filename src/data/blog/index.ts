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
import { SPITI_DEEP } from "./spiti-deep";
import { SPITI_DEEP_2 } from "./spiti-deep-2";
import { LADAKH_DEEP_5 } from "./ladakh-deep-5";
import { withSpitiLadakhExtras } from "./spiti-ladakh-extras";
import { SPITI_MONTHS } from "./spiti-months";
import { KINNAUR_LAHAUL_GUIDES } from "./kinnaur-lahaul-guides";
import { withSpitiKinnaurExtras } from "./spiti-kinnaur-extras";
import { KASHMIR_WINTER_MONTHS } from "./kashmir-winter-months";
import { KASHMIR_MONTHS_DEEP } from "./kashmir-months-deep";
import { KASHMIR_PLACES_DEEP } from "./kashmir-places-deep";
import { withDeepMore } from "./kashmir-deep-more";
import { KASHMIR_BATCH_2 } from "./kashmir-batch-2";
import { KASHMIR_BATCH_3 } from "./kashmir-batch-3";
import { KASHMIR_BATCH_4 } from "./kashmir-batch-4";
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
import { KASHMIR_WINTER_UPGRADES } from "./kashmir-winter-upgrades";
import { KASHMIR_KW_BLOG_ADDITIONS } from "./kashmir-keyword-additions";
import { KASHMIR_DEPTH_ADDITIONS } from "./kashmir-depth";

import { KASHMIR_ROUTES } from "./kashmir-routes";
import { KASHMIR_STAYS } from "./kashmir-stays";
import { KASHMIR_ACTIVITIES } from "./kashmir-activities";
import { KASHMIR_PLANS } from "./kashmir-plans";
import { KASHMIR_CULTURE } from "./kashmir-culture";
import { KASHMIR_WORLD } from "./kashmir-world";

import { SUPERSEDED_POSTS } from "./superseded";
export { SUPERSEDED_POSTS };

const ALL_POSTS: BlogPost[] = [
  ...KASHMIR_CORE,
  ...withKashmirExtras([...KASHMIR_WINTER_MONTHS, ...withDeepMore([...KASHMIR_MONTHS_DEEP, ...KASHMIR_PLACES_DEEP, ...KASHMIR_BATCH_2, ...KASHMIR_BATCH_3, ...KASHMIR_BATCH_4]), ...KASHMIR_PLANNING_DEEP, ...KASHMIR_LOCAL_GUIDES]),
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
  ...withSpitiLadakhExtras([...LADAKH_DEEP_5, ...SPITI_DEEP, ...SPITI_DEEP_2]),
  ...withSpitiKinnaurExtras([...SPITI_MONTHS, ...KINNAUR_LAHAUL_GUIDES]),
  ...KASOL_GUIDES,
  ...KASHMIR_ROUTES,
  ...KASHMIR_STAYS,
  ...KASHMIR_ACTIVITIES,
  ...KASHMIR_PLANS,
  ...KASHMIR_CULTURE,
  ...KASHMIR_WORLD,
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
  [KASHMIR_WINTER_UPGRADES, "2026-11-06"],
];
const UPGRADES: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs" | "updated">> = Object.fromEntries(
  UPGRADE_BATCHES.flatMap(([batch, updated]) => Object.entries(batch).map(([slug, u]) => [slug, { ...u, updated }])),
);

// Additions append sections and FAQs to a post (after any rewrite) without
// replacing its body; the batch date becomes the post's updated date.
const ADDITION_BATCHES: [Record<string, Partial<Pick<BlogPost, "sections" | "faqs">>>, string][] = [
  [KASHMIR_KW_BLOG_ADDITIONS, "2026-11-07"],
  [KASHMIR_DEPTH_ADDITIONS, "2026-11-11"],
];

function withAdditions(p: BlogPost): BlogPost {
  let out = p;
  for (const [batch, updated] of ADDITION_BATCHES) {
    const a = batch[p.slug];
    if (!a) continue;
    const heads = new Set(out.sections.map((s) => s.h.toLowerCase()));
    const qs = new Set(out.faqs.map((f) => f.q.toLowerCase()));
    out = {
      ...out,
      sections: [...out.sections, ...(a.sections ?? []).filter((s) => !heads.has(s.h.toLowerCase()))],
      faqs: [...out.faqs, ...(a.faqs ?? []).filter((f) => !qs.has(f.q.toLowerCase()))],
      updated: updated > (out.updated ?? out.date) ? updated : out.updated,
    };
  }
  return out;
}

export const BLOG_POSTS: BlogPost[] = ALL_POSTS.filter((p) => !(p.slug in SUPERSEDED_POSTS)).map((p) => {
  const u = UPGRADES[p.slug];
  if (!u) return withAdditions(p);
  return withAdditions({ ...p, ...u, updated: u.updated && u.updated > p.date ? u.updated : undefined });
});
