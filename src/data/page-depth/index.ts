// Written depth for single pages that compete head to head with
// tdiholidayventures.com package pages (scoreboard 2026-11-15): duration
// pages, place package hubs and the honeymoon index. Keyed by page path.
// Code, not database copy, so it ships with a deploy and needs no DB push.
// Rules: facts a traveller can check, no typed fares or prices, no em dashes.

import type { BlogSection } from "@/data/blog/types";
import { KASHMIR_PAGE_DEPTH } from "./kashmir";
import { LADAKH_PAGE_DEPTH } from "./ladakh";
import { HUB_PAGE_DEPTH } from "./hubs";
import { KASHMIR_PAGE_DEPTH_2 } from "./kashmir-2";
import { LADAKH_PAGE_DEPTH_2 } from "./ladakh-2";
import { HUB_PAGE_DEPTH_2 } from "./hubs-2";
import { LAYER_3 } from "./layer-3";
import { LAYER_4 } from "./layer-4";
import { LAYER_5, LAYER_6 } from "./layer-5";
import { KASHMIR_GUIDES_DEPTH } from "./kashmir-guides";
import { KASHMIR_GUIDES_DEPTH_2 } from "./kashmir-guides-2";
import { KASHMIR_GUIDES_DEPTH_3 } from "./kashmir-guides-3";

export type Faq = { q: string; a: string };
export type PageDepthEntry = { sections: BlogSection[]; faqs: Faq[] };

// Later layers add sections and FAQs to the same path (headings and
// questions already present are skipped).
const LAYERS: Record<string, PageDepthEntry>[] = [
  KASHMIR_PAGE_DEPTH,
  LADAKH_PAGE_DEPTH,
  HUB_PAGE_DEPTH,
  KASHMIR_PAGE_DEPTH_2,
  LADAKH_PAGE_DEPTH_2,
  HUB_PAGE_DEPTH_2,
  LAYER_3,
  LAYER_4,
  LAYER_5,
  LAYER_6,
  KASHMIR_GUIDES_DEPTH,
  KASHMIR_GUIDES_DEPTH_2,
  KASHMIR_GUIDES_DEPTH_3,
];
const ALL: Record<string, PageDepthEntry> = {};
for (const layer of LAYERS) {
  for (const [path, e] of Object.entries(layer)) {
    const cur = ALL[path];
    if (!cur) {
      ALL[path] = { sections: [...e.sections], faqs: [...e.faqs] };
      continue;
    }
    const heads = new Set(cur.sections.map((x) => x.h.toLowerCase()));
    const qs = new Set(cur.faqs.map((x) => x.q.toLowerCase()));
    cur.sections.push(...e.sections.filter((x) => !heads.has(x.h.toLowerCase())));
    cur.faqs.push(...e.faqs.filter((x) => !qs.has(x.q.toLowerCase())));
  }
}

export function pageDepth(path: string): PageDepthEntry | undefined {
  return ALL[path];
}

// The page's own FAQs first, then the written ones it does not already ask.
export function withDepthFaqs(path: string, faqs: Faq[] | undefined): Faq[] {
  const base = faqs ?? [];
  const extra = ALL[path]?.faqs ?? [];
  const seen = new Set(base.map((f) => f.q.toLowerCase()));
  return [...base, ...extra.filter((f) => !seen.has(f.q.toLowerCase()))];
}

export const PAGE_DEPTH_PATHS = Object.keys(ALL);
