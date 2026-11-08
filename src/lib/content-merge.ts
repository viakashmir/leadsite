// Additive merge for guide content (Destination/City/Place JSON).
//
// Used both when building content from src/data/content and when pushing new
// copy into the live database, so the two always agree. It never removes or
// rewrites anything already there:
//   - lists get the new items whose key is not present yet (FAQ question,
//     block heading, itinerary title, route from+to, month, fact label);
//   - objects (sections, packages, themes, fromOrigins) are merged key by key;
//   - text fields are filled only when empty.

type Json = unknown;

const KEYS = ["q", "heading", "title", "month", "label", "name"] as const;

function itemKey(item: Json): string {
  if (typeof item === "string") return item;
  if (item && typeof item === "object") {
    const o = item as Record<string, unknown>;
    if (typeof o.from === "string" && typeof o.to === "string") return `route:${o.from.toLowerCase()}>${o.to.toLowerCase()}`;
    for (const k of KEYS) if (typeof o[k] === "string") return `${k}:${(o[k] as string).toLowerCase().trim()}`;
  }
  return JSON.stringify(item);
}

function appendUnique(base: Json[], extra: Json[]): Json[] {
  const seen = new Set(base.map(itemKey));
  const out = [...base];
  for (const item of extra) {
    const k = itemKey(item);
    if (!seen.has(k)) {
      seen.add(k);
      out.push(item);
    }
  }
  return out;
}

export function additiveMerge<T>(base: T, extra: unknown): T {
  if (extra === undefined || extra === null) return base;
  if (base === undefined || base === null || base === "") return extra as T;
  if (Array.isArray(base) && Array.isArray(extra)) return appendUnique(base, extra) as T;
  if (typeof base === "object" && typeof extra === "object" && !Array.isArray(base) && !Array.isArray(extra)) {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [k, v] of Object.entries(extra as Record<string, unknown>)) out[k] = additiveMerge(out[k], v);
    return out as T;
  }
  // Both set and not mergeable (e.g. two strings): keep what is already there.
  return base;
}

export function mergeEach<T>(base: Record<string, T>, extra: Record<string, unknown>): Record<string, T> {
  const out = { ...base };
  for (const [k, v] of Object.entries(extra)) out[k] = additiveMerge(out[k], v);
  return out;
}
