// Batch 2 of the five-competitor Kashmir study (2026-11-15): deep copy for
// Kashmir place pages, split across files by area. Merged additively into
// PLACE_CONTENT (data/content/index.ts) and into the live database by the
// one-time kashmir-places-push endpoint.
import { mergeEach } from "@/lib/content-merge";
import type { GuideContent } from "@/lib/locations";
import { KASHMIR_PLACES_1 } from "./kashmir-places-1";
import { KASHMIR_PLACES_2 } from "./kashmir-places-2";
import { KASHMIR_PLACES_3 } from "./kashmir-places-3";
import { KASHMIR_PLACES_4 } from "./kashmir-places-4";
import { KASHMIR_PLACES_5 } from "./kashmir-places-5";

export const KASHMIR_PLACES_BATCH_2: Record<string, Partial<GuideContent>> = [KASHMIR_PLACES_1, KASHMIR_PLACES_2, KASHMIR_PLACES_3, KASHMIR_PLACES_4, KASHMIR_PLACES_5].reduce(
  (acc, part) => mergeEach(acc, part),
  {} as Record<string, Partial<GuideContent>>,
);
