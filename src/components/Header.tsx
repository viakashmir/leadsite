import HeaderClient, { type NavMenu } from "@/components/HeaderClient";
import { getCircuits, getDestinationsByZone } from "@/lib/locations";
import { THEMES } from "@/data/locations";
import { guideUrl, themeUrl, tourPackagesUrl } from "@/lib/urls";
import { prisma } from "@/lib/prisma";

export default async function Header() {
  const [zones, circuits, prices] = await Promise.all([
    getDestinationsByZone(),
    getCircuits(),
    // Cheapest published package per place, so the menu shows a live
    // "from" price instead of a typed one.
    prisma.package.groupBy({ by: ["destinationId"], where: { published: true }, _min: { price: true } }),
  ]);
  const ids = await prisma.destination.findMany({ select: { id: true, slug: true } });
  const idBySlug = new Map(ids.map((d) => [d.slug, d.id]));
  const minById = new Map(prices.map((p) => [p.destinationId, p._min.price]));
  const fromPrice = (slug: string) => minById.get(idBySlug.get(slug) ?? "") ?? undefined;
  const pkg = (d: { slug: string; name: string; tier: number }, href = tourPackagesUrl(d.slug), suffix = "Packages") => ({
    label: `${d.name} ${suffix}`,
    href,
    price: fromPrice(d.slug),
    popular: d.tier === 1,
  });

  const india = zones.filter((z) => z.scope === "india");
  const abroad = zones.filter((z) => z.scope === "international");
  const top = (scope: "india" | "international", n: number) =>
    zones
      .filter((z) => z.scope === scope)
      .flatMap((z) => z.destinations)
      .filter((d) => d.tier === 1)
      .slice(0, n);

  const menus: NavMenu[] = [
    {
      label: "India",
      href: tourPackagesUrl("india"),
      columns: [
        ...india.map((z) => ({
          title: z.name,
          links: z.destinations.map((d) => pkg(d)),
        })),
        {
          title: "Popular circuits",
          links: circuits
            .filter((c) => !c.isInternational)
            .map((c) => pkg(c)),
        },
      ],
    },
    {
      label: "International",
      href: tourPackagesUrl("international"),
      columns: [
        ...abroad.map((z) => ({
          title: z.name,
          links: z.destinations.map((d) => pkg(d)),
        })),
        {
          title: "Multi-country",
          links: circuits
            .filter((c) => c.isInternational)
            .map((c) => pkg(c)),
        },
      ],
    },
    {
      label: "Honeymoon",
      href: themeUrl("honeymoon-packages"),
      columns: [
        {
          title: "India",
          links: top("india", 12).map((d) => pkg(d, themeUrl("honeymoon-packages", d.slug), "Honeymoon Packages")),
        },
        {
          title: "International",
          links: top("international", 12).map((d) =>
            pkg(d, themeUrl("honeymoon-packages", d.slug), "Honeymoon Packages"),
          ),
        },
      ],
    },
    {
      label: "Holiday Themes",
      href: tourPackagesUrl(),
      columns: [
        {
          title: "Browse by theme",
          links: THEMES.map((t) => ({ label: `${t.name} Packages`, href: themeUrl(t.prefix) })),
        },
      ],
    },
    {
      label: "Travel Guides",
      href: tourPackagesUrl(),
      columns: [
        {
          title: "India",
          links: top("india", 16).map((d) => ({ label: `${d.name} Tourism`, href: guideUrl(d.slug) })),
        },
        {
          title: "International",
          links: top("international", 12).map((d) => ({
            label: `${d.name} Tourism`,
            href: guideUrl(d.slug),
          })),
        },
      ],
    },
  ];

  return <HeaderClient menus={menus} />;
}
