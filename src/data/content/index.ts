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
import { KASHMIR_CITIES, KASHMIR_PLACES } from "./kashmir";

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
    packages: base.packages || extra.packages ? { ...base.packages, ...extra.packages } : undefined,
  };
}

const mergeAll = (base: Record<string, GuideContent>, extra: Record<string, Partial<GuideContent>>) =>
  Object.fromEntries(Object.entries(base).map(([k, c]) => [k, mergeContent(c, extra[k])]));

// Destination slug -> guide content. Loaded by prisma/seed-content.ts.
const BASE: Record<string, GuideContent> = {
  ...INDIA_NORTH,
  ...INDIA_WEST_SOUTH,
  ...INDIA_EAST_ISLANDS,
};

export const DESTINATION_CONTENT: Record<string, GuideContent> = Object.fromEntries(
  Object.entries({ ...Object.fromEntries([...Object.keys(RJ_DESTINATIONS), ...Object.keys(TN_MH_DESTINATIONS)].map((k) => [k, {}])), ...BASE, ...CIRCUIT_CONTENT } as Record<string, GuideContent>).map(([slug, c]) => [
    slug,
    [DESTINATION_EXTRAS, DESTINATION_SUPPLEMENTS, { ...CULTURE_DESTINATIONS, goa: GOA_DESTINATION }, SOUTH_DESTINATIONS, RJ_DESTINATIONS, TN_MH_DESTINATIONS].reduce(
      (acc: GuideContent, extra: Record<string, Partial<GuideContent>>) => mergeContent(acc, extra[slug]),
      c,
    ),
  ]),
);

// City slug -> guide content for /{dest}-tourism/{city} and its sections.
export const CITY_CONTENT: Record<string, GuideContent> = mergeAll(
  mergeAll(
    mergeAll({ ...MANALI_CITIES, ...HIMACHAL_CITIES, ...LADAKH_CITIES, ...GOA_CITIES, ...SOUTH_CITIES, ...RJ_CITIES, ...TN_MH_CITIES, ...KASHMIR_CITIES }, { ...CITY_SUPPLEMENTS, ...LADAKH_CITY_SUPPLEMENTS }),
    CULTURE_CITIES,
  ),
  RJ_ORIGIN_COPY,
);

// Place path (e.g. "manali/places-to-visit/rohtang-pass") -> place page content.
export const PLACE_CONTENT: Record<string, GuideContent> = mergeAll(
  { ...MANALI_PLACES, ...HIMACHAL_PLACES, ...LADAKH_PLACES, ...GOA_PLACES, ...SOUTH_PLACES, ...RJ_PLACES, ...TN_MH_PLACES, ...KASHMIR_PLACES },
  PLACE_SUPPLEMENTS,
);
