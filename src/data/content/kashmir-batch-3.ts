// Batches 3 and 4 of the five-competitor Kashmir study (2026-11-15): trip-length
// pages, town package hubs and city-specific "from {city}" copy. Destination and city copy, merged
// additively by data/content/index.ts and pushed by the one-time
// kashmir-places-push endpoint.
import { mergeEach } from "@/lib/content-merge";
import type { GuideContent } from "@/lib/locations";
import { KASHMIR_DURATIONS_DESTINATION } from "./kashmir-durations";
import { KASHMIR_ORIGINS_DEEP_1 } from "./kashmir-origins-deep-1";
import { KASHMIR_ORIGINS_DEEP_2 } from "./kashmir-origins-deep-2";

type Rows = Record<string, Partial<GuideContent>>;
const all = (...parts: Rows[]): Rows => parts.reduce((acc, p) => mergeEach(acc, p), {} as Rows);

export const KASHMIR_BATCH_3_DESTINATIONS: Rows = all(KASHMIR_DURATIONS_DESTINATION, KASHMIR_ORIGINS_DEEP_1, KASHMIR_ORIGINS_DEEP_2);
export const KASHMIR_BATCH_3_CITIES: Rows = all();
