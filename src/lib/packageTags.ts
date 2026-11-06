// Package theme tags and route parsing shared by the package cards.

// Theme tag -> hotel category shown. "Premium" is 4-star, only "Luxury" is
// 5-star; a package must be priced to pay for the category it is tagged with.
export const TIER_LABEL: Record<string, string> = { Budget: "Budget stay", "Mid-Range": "3 star", Premium: "4 star", Luxury: "5 star" };
export const TIERS = Object.keys(TIER_LABEL);
export const STYLE_TAGS = ["Honeymoon", "Family", "Friends", "Adventure", "Winter", "Pilgrimage", "Offbeat", "Weekend", "Classic"];

// "5 nights across Srinagar 3N, Pahalgam 1N, Srinagar 1N." -> stops
export function routeFromSummary(summary: string): { place: string; nights: number }[] {
  const m = /nights across ([^.]+)\./.exec(summary);
  if (!m) return [];
  return m[1]
    .split(",")
    .map((s) => /^\s*(.+?)\s+(\d+)N\s*$/.exec(s))
    .filter((x): x is RegExpExecArray => Boolean(x))
    .map((x) => ({ place: x[1], nights: Number(x[2]) }));
}
