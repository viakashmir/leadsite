import type { GuideContent } from "@/lib/locations";

// Fixed-length package pages: /tour-packages/{slug}/{n}-nights-{n+1}-days.
// A length is offered only where it suits the place (from idealDuration),
// so there is no "8 nights in Ooty" page.
export const DURATIONS = [
  { nights: 3, days: 4, slug: "3-nights-4-days", label: "3N4D" },
  { nights: 4, days: 5, slug: "4-nights-5-days", label: "4N5D" },
  { nights: 5, days: 6, slug: "5-nights-6-days", label: "5N6D" },
  { nights: 6, days: 7, slug: "6-nights-7-days", label: "6N7D" },
  { nights: 8, days: 9, slug: "8-nights-9-days", label: "8N9D" },
] as const;

export type Duration = (typeof DURATIONS)[number];

// "5 to 7 days" -> [5, 7]; "3 days" -> [3, 3]; missing -> null.
function idealRange(c: GuideContent): [number, number] | null {
  const nums = (c.idealDuration ?? "").match(/\d+/g)?.map(Number) ?? [];
  if (nums.length === 0) return null;
  return [Math.min(...nums), Math.max(...nums)];
}

// Lengths from one day shorter than the shortest ideal trip to three days
// longer than the longest (a place plus nearby add-ons).
export function durationsFor(c: GuideContent): Duration[] {
  const r = idealRange(c);
  if (!r) return [];
  return DURATIONS.filter((d) => d.days >= r[0] - 1 && d.days <= r[1] + 3);
}

export const durationBySlug = (slug: string) => DURATIONS.find((d) => d.slug === slug);
