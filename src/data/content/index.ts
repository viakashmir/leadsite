import type { GuideContent } from "@/lib/locations";
import { INDIA_NORTH } from "./india-north";
import { INDIA_WEST_SOUTH } from "./india-west-south";
import { INDIA_EAST_ISLANDS } from "./india-east-islands";
import { MANALI_CITIES, MANALI_PLACES } from "./himachal-manali";
import { HIMACHAL_CITIES, HIMACHAL_PLACES } from "./himachal-other";
import { DESTINATION_EXTRAS, LADAKH_CITIES, LADAKH_PLACES } from "./ladakh";
import {
  CIRCUIT_CONTENT,
  CITY_SUPPLEMENTS,
  DESTINATION_SUPPLEMENTS,
  LADAKH_CITY_SUPPLEMENTS,
  PLACE_SUPPLEMENTS,
} from "./supplements-north";
import { CULTURE_CITIES, CULTURE_DESTINATIONS } from "./culture-north";
import { GOA_CITIES, GOA_DESTINATION, GOA_PLACES } from "./goa";
import { SOUTH_CITIES, SOUTH_DESTINATIONS, SOUTH_PLACES } from "./south-ka-kl";
import { RJ_CITIES, RJ_DESTINATIONS, RJ_ORIGIN_COPY, RJ_PLACES } from "./rajasthan-delhi";
import { TN_MH_CITIES, TN_MH_DESTINATIONS, TN_MH_PLACES } from "./tn-mh";
import { INTL_CITIES, INTL_DESTINATIONS } from "./international";
import { FINAL_CITIES, FINAL_DESTINATIONS, FINAL_NEW_CITIES, FINAL_PLACES } from "./final-gaps";
import { REST_CITIES, REST_CITY_FAQS, REST_DESTINATIONS, REST_PLACES } from "./remaining-states";
import { EAST_CITIES, EAST_DESTINATIONS, EAST_PLACES } from "./east-ne";
import { GUP_CITIES, GUP_CITY_FAQS, GUP_DESTINATION_FAQS, GUP_DESTINATIONS, GUP_PLACES } from "./gj-uk-up";
import { KASHMIR_CITIES, KASHMIR_PLACES } from "./kashmir";
import { KASHMIR_ORIGIN_DESTINATION } from "./kashmir-origins";
import { KASHMIR_WINTER_DESTINATION } from "./kashmir-winter";
import { KASHMIR_PACKAGES_DESTINATION } from "./kashmir-packages-hub";
import { STATES_BATCH_1 } from "./states-batch-1";
import { PG1_CITIES, PG1_PLACES } from "./places-gaps-1";
import { KASHMIR_KW_DESTINATION } from "./kashmir-keywords";
import { KASHMIR_KW_CITIES, KASHMIR_KW_PLACES } from "./kashmir-keywords-towns";
import { KASHMIR_DEPTH_DESTINATIONS, KASHMIR_DEPTH_CITIES, KASHMIR_DEPTH_PLACES } from "./kashmir-depth";
import { KASHMIR_DEPTH_2_DESTINATIONS, KASHMIR_DEPTH_2_CITIES, KASHMIR_DEPTH_2_PLACES } from "./kashmir-depth-2";
import { mergeEach } from "@/lib/content-merge";

// Supplements add FAQs, blocks and section copy on top of base content:
// lists are appended, sections and packages are merged one level deep.
function mergeContent(base: GuideContent, extra?: Partial<GuideContent>): GuideContent {
  if (!extra) return base;
  const sections = { ...base.sections };
  for (const [k, v] of Object.entries(extra.sections ?? {}) as [keyof NonNullable<GuideContent["sections"]>, NonNullable<GuideContent["sections"]>[keyof NonNullable<GuideContent["sections"]>]][]) {
    const b = sections[k];
    sections[k] = { ...b, ...v, faqs: [...(b?.faqs ?? []), ...(v?.faqs ?? [])], blocks: [...(b?.blocks ?? []), ...(v?.blocks ?? [])] };
  }
  return {
    ...base,
    ...extra,
    faqs: [...(base.faqs ?? []), ...(extra.faqs ?? [])],
    blocks: [...(base.blocks ?? []), ...(extra.blocks ?? [])],
    sections,
    packages:
      base.packages || extra.packages
        ? {
            ...base.packages,
            ...extra.packages,
            // Per-origin and per-theme copy from different files add up rather than replace.
            fromOrigins: { ...base.packages?.fromOrigins, ...extra.packages?.fromOrigins },
            themes: { ...base.packages?.themes, ...extra.packages?.themes },
          }
        : undefined,
  };
}

const mergeAll = (base: Record<string, GuideContent>, extra: Record<string, Partial<GuideContent>>) =>
  Object.fromEntries(Object.entries(base).map(([k, c]) => [k, mergeContent(c, extra[k])]));

// Destination slug -> guide content. Loaded by prisma/seed-content.ts.
const BASE: Record<string, GuideContent> = {
  ...INDIA_NORTH,
  ...INDIA_WEST_SOUTH,
  ...INDIA_EAST_ISLANDS,
  ...STATES_BATCH_1,
};

const DESTINATION_CONTENT_BASE: Record<string, GuideContent> = Object.fromEntries(
  Object.entries({ ...Object.fromEntries([...Object.keys(RJ_DESTINATIONS), ...Object.keys(TN_MH_DESTINATIONS), ...Object.keys(GUP_DESTINATIONS), ...Object.keys(EAST_DESTINATIONS), ...Object.keys(INTL_DESTINATIONS), ...Object.keys(REST_DESTINATIONS)].map((k) => [k, {}])), ...BASE, ...CIRCUIT_CONTENT } as Record<string, GuideContent>).map(([slug, c]) => [
    slug,
    [DESTINATION_EXTRAS, DESTINATION_SUPPLEMENTS, { ...CULTURE_DESTINATIONS, goa: GOA_DESTINATION }, SOUTH_DESTINATIONS, RJ_DESTINATIONS, TN_MH_DESTINATIONS, KASHMIR_ORIGIN_DESTINATION, KASHMIR_WINTER_DESTINATION, KASHMIR_PACKAGES_DESTINATION, GUP_DESTINATIONS, GUP_DESTINATION_FAQS, EAST_DESTINATIONS, INTL_DESTINATIONS, REST_DESTINATIONS, FINAL_DESTINATIONS].reduce(
      (acc: GuideContent, extra: Record<string, Partial<GuideContent>>) => mergeContent(acc, extra[slug]),
      c,
    ),
  ]),
);

// City slug -> guide content for /{dest}-tourism/{city} and its sections.
const CITY_CONTENT_BASE: Record<string, GuideContent> = mergeAll( mergeAll(
  mergeAll(
  mergeAll(
  mergeAll(
    mergeAll({ ...MANALI_CITIES, ...HIMACHAL_CITIES, ...LADAKH_CITIES, ...GOA_CITIES, ...SOUTH_CITIES, ...RJ_CITIES, ...TN_MH_CITIES, ...KASHMIR_CITIES, ...GUP_CITIES, ...EAST_CITIES, ...INTL_CITIES, ...REST_CITIES, ...FINAL_NEW_CITIES }, { ...CITY_SUPPLEMENTS, ...LADAKH_CITY_SUPPLEMENTS }),
    CULTURE_CITIES,
  ),
  { ...RJ_ORIGIN_COPY, ...GUP_CITY_FAQS },
  ),
  REST_CITY_FAQS,
  ),
  FINAL_CITIES,
  ),
  PG1_CITIES,
);

// Place path (e.g. "manali/places-to-visit/rohtang-pass") -> place page content.
const PLACE_CONTENT_BASE: Record<string, GuideContent> = mergeAll(
  mergeAll(
  mergeAll(
  { ...MANALI_PLACES, ...HIMACHAL_PLACES, ...LADAKH_PLACES, ...GOA_PLACES, ...SOUTH_PLACES, ...RJ_PLACES, ...TN_MH_PLACES, ...KASHMIR_PLACES, ...GUP_PLACES, ...EAST_PLACES, ...REST_PLACES },
  PLACE_SUPPLEMENTS,
  ),
  FINAL_PLACES,
  ),
  PG1_PLACES,
);

// Keyword passes merged additively (src/lib/content-merge.ts): they only add
// FAQs, blocks, months, routes and missing text, the same way
// scripts/push-kashmir-keywords.ts adds them to the live database.
export const DESTINATION_CONTENT: Record<string, GuideContent> = mergeEach(mergeEach(mergeEach(DESTINATION_CONTENT_BASE, KASHMIR_KW_DESTINATION), KASHMIR_DEPTH_DESTINATIONS), KASHMIR_DEPTH_2_DESTINATIONS);
export const CITY_CONTENT: Record<string, GuideContent> = mergeEach(mergeEach(mergeEach(CITY_CONTENT_BASE, KASHMIR_KW_CITIES), KASHMIR_DEPTH_CITIES), KASHMIR_DEPTH_2_CITIES);
export const PLACE_CONTENT: Record<string, GuideContent> = mergeEach(mergeEach(mergeEach(PLACE_CONTENT_BASE, KASHMIR_KW_PLACES), KASHMIR_DEPTH_PLACES), KASHMIR_DEPTH_2_PLACES);
