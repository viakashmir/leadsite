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
import { GUP_CITIES, GUP_CITY_FAQS, GUP_DESTINATION_FAQS, GUP_DESTINATIONS, GUP_PLACES } from "./gj-uk-up";
import { KASHMIR_CITIES, KASHMIR_PLACES } from "./kashmir";
import { KASHMIR_ORIGIN_DESTINATION } from "./kashmir-origins";
import { KASHMIR_WINTER_DESTINATION } from "./kashmir-winter";
import { STATES_BATCH_1 } from "./states-batch-1";

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

export const DESTINATION_CONTENT: Record<string, GuideContent> = Object.fromEntries(
  Object.entries({ ...Object.fromEntries([...Object.keys(RJ_DESTINATIONS), ...Object.keys(TN_MH_DESTINATIONS), ...Object.keys(GUP_DESTINATIONS)].map((k) => [k, {}])), ...BASE, ...CIRCUIT_CONTENT } as Record<string, GuideContent>).map(([slug, c]) => [
    slug,
    [DESTINATION_EXTRAS, DESTINATION_SUPPLEMENTS, { ...CULTURE_DESTINATIONS, goa: GOA_DESTINATION }, SOUTH_DESTINATIONS, RJ_DESTINATIONS, TN_MH_DESTINATIONS, KASHMIR_ORIGIN_DESTINATION, KASHMIR_WINTER_DESTINATION, GUP_DESTINATIONS, GUP_DESTINATION_FAQS].reduce(
      (acc: GuideContent, extra: Record<string, Partial<GuideContent>>) => mergeContent(acc, extra[slug]),
      c,
    ),
  ]),
);

// City slug -> guide content for /{dest}-tourism/{city} and its sections.
export const CITY_CONTENT: Record<string, GuideContent> = mergeAll(
  mergeAll(
    mergeAll({ ...MANALI_CITIES, ...HIMACHAL_CITIES, ...LADAKH_CITIES, ...GOA_CITIES, ...SOUTH_CITIES, ...RJ_CITIES, ...TN_MH_CITIES, ...KASHMIR_CITIES, ...GUP_CITIES }, { ...CITY_SUPPLEMENTS, ...LADAKH_CITY_SUPPLEMENTS }),
    CULTURE_CITIES,
  ),
  { ...RJ_ORIGIN_COPY, ...GUP_CITY_FAQS },
);

// Place path (e.g. "manali/places-to-visit/rohtang-pass") -> place page content.
export const PLACE_CONTENT: Record<string, GuideContent> = mergeAll(
  { ...MANALI_PLACES, ...HIMACHAL_PLACES, ...LADAKH_PLACES, ...GOA_PLACES, ...SOUTH_PLACES, ...RJ_PLACES, ...TN_MH_PLACES, ...KASHMIR_PLACES, ...GUP_PLACES },
  PLACE_SUPPLEMENTS,
);
