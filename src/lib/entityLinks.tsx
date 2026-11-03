import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { guideUrl } from "@/lib/urls";

// In-text links from an article to the guide pages of the places it names:
// the first mention of each city or attraction links to its guide, once per
// article and capped, so the copy stays readable. Only guides that are
// published (READY, so indexable) are linked, and an attraction name is
// linked only when it is unique within the destination ("Mall Road" exists
// in several towns, so it is never linked).

export type Entity = { name: string; href: string; type: "City" | "TouristAttraction" | "TouristDestination" };

const MAX_LINKS = 8;

export async function entitiesFor(destinationSlug: string, selfHref?: string): Promise<Entity[]> {
  const destination = await prisma.destination.findUnique({
    where: { slug: destinationSlug },
    select: {
      slug: true,
      name: true,
      contentStatus: true,
      cities: { where: { contentStatus: "READY" }, select: { slug: true, name: true } },
      places: { where: { contentStatus: "READY" }, select: { path: true, name: true } },
    },
  });
  if (!destination) return [];
  const counts = new Map<string, number>();
  for (const p of destination.places) counts.set(p.name.toLowerCase(), (counts.get(p.name.toLowerCase()) ?? 0) + 1);
  const cityNames = new Set(destination.cities.map((c) => c.name.toLowerCase()));
  const out: Entity[] = [
    ...(destination.contentStatus === "READY"
      ? [{ name: destination.name, href: guideUrl(destination.slug), type: "TouristDestination" as const }]
      : []),
    ...destination.cities.map((c) => ({ name: c.name, href: guideUrl(destination.slug, c.slug), type: "City" as const })),
    ...destination.places
      .filter((p) => counts.get(p.name.toLowerCase()) === 1 && !cityNames.has(p.name.toLowerCase()) && p.name.length >= 5)
      .map((p) => ({ name: p.name, href: guideUrl(destination.slug, p.path), type: "TouristAttraction" as const })),
  ];
  return out.filter((e) => e.href !== selfHref);
}

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** A per-article linker: call `link(text)` on each paragraph in reading order. */
export function createLinker(entities: Entity[]) {
  // Longest names first, so "Gulmarg Gondola" wins over "Gulmarg".
  const sorted = [...entities].sort((a, b) => b.name.length - a.name.length);
  const byName = new Map(sorted.map((e) => [e.name.toLowerCase(), e]));
  const re = sorted.length ? new RegExp(`\\b(${sorted.map((e) => escape(e.name)).join("|")})\\b`, "gi") : null;
  const used = new Set<string>();
  const linked: Entity[] = [];

  function link(text: string): React.ReactNode {
    if (!re || used.size >= MAX_LINKS) return text;
    const parts: React.ReactNode[] = [];
    let last = 0;
    for (const m of text.matchAll(re)) {
      const e = byName.get(m[0].toLowerCase());
      if (!e || used.has(e.href) || used.size >= MAX_LINKS) continue;
      used.add(e.href);
      linked.push(e);
      parts.push(text.slice(last, m.index));
      parts.push(
        <Link key={`${e.href}-${m.index}`} href={e.href} className="font-medium text-brand underline decoration-brand/30 underline-offset-2 hover:decoration-brand">
          {m[0]}
        </Link>,
      );
      last = m.index + m[0].length;
    }
    if (parts.length === 0) return text;
    parts.push(text.slice(last));
    return parts;
  }

  return { link, linked: () => linked };
}
