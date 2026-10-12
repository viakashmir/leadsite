// URL builders for the TravelTriangle-style location pages. Keep every public
// location link going through these so the URL scheme lives in one place.

export const tourPackagesUrl = (slug?: string) =>
  slug ? `/tour-packages/${slug}` : "/tour-packages";

export const themeUrl = (prefix: string, slug?: string) =>
  slug ? `/${prefix}/${slug}` : `/${prefix}`;

export const fromToUrl = (origin: string, target: string) =>
  `/tour-packages/from-${origin}-to-${target}`;

// /{destination}-tourism[/city][/section][/place]
export const guideUrl = (destinationSlug: string, ...rest: (string | null | undefined)[]) =>
  ["", `${destinationSlug}-tourism`, ...rest.filter(Boolean)].join("/");

export const placeUrl = (destinationSlug: string, placePath: string) =>
  guideUrl(destinationSlug, placePath);

export function parseFromTo(slug: string): { origin: string; target: string } | null {
  const m = /^from-([a-z0-9-]+?)-to-([a-z0-9-]+)$/.exec(slug);
  return m ? { origin: m[1], target: m[2] } : null;
}
