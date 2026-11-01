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
  Object.entries({ ...BASE, ...CIRCUIT_CONTENT }).map(([slug, c]) => [
    slug,
    mergeContent(mergeContent(mergeContent(c, DESTINATION_EXTRAS[slug]), DESTINATION_SUPPLEMENTS[slug]), { ...CULTURE_DESTINATIONS, goa: GOA_DESTINATION }[slug]),
  ]),
);

// City slug -> guide content for /{dest}-tourism/{city} and its sections.
export const CITY_CONTENT: Record<string, GuideContent> = mergeAll(
  mergeAll({ ...MANALI_CITIES, ...HIMACHAL_CITIES, ...LADAKH_CITIES, ...GOA_CITIES }, { ...CITY_SUPPLEMENTS, ...LADAKH_CITY_SUPPLEMENTS }),
  CULTURE_CITIES,
);

// Place path (e.g. "manali/places-to-visit/rohtang-pass") -> place page content.
export const PLACE_CONTENT: Record<string, GuideContent> = mergeAll(
  { ...MANALI_PLACES, ...HIMACHAL_PLACES, ...LADAKH_PLACES, ...GOA_PLACES },
  PLACE_SUPPLEMENTS,
);
