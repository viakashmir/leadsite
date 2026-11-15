// Batch 3 of the five-competitor Kashmir study (2026-11-15): trip-length
// pages and thin town package hubs. Destination and city copy, merged
// additively by data/content/index.ts and pushed by the one-time
// kashmir-places-push endpoint.
import { mergeEach } from "@/lib/content-merge";
import type { GuideContent } from "@/lib/locations";
import { KASHMIR_DURATIONS_DESTINATION } from "./kashmir-durations";

type Rows = Record<string, Partial<GuideContent>>;
const all = (...parts: Rows[]): Rows => parts.reduce((acc, p) => mergeEach(acc, p), {} as Rows);

export const KASHMIR_BATCH_3_DESTINATIONS: Rows = all(KASHMIR_DURATIONS_DESTINATION);
export const KASHMIR_BATCH_3_CITIES: Rows = all();
