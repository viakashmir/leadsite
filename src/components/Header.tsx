import HeaderClient, { type NavMenu } from "@/components/HeaderClient";
import { getCircuits, getDestinationsByZone } from "@/lib/locations";
import { THEMES } from "@/data/locations";
import { guideUrl, themeUrl, tourPackagesUrl } from "@/lib/urls";

export default async function Header() {
  const [zones, circuits] = await Promise.all([getDestinationsByZone(), getCircuits()]);

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
          links: z.destinations.map((d) => ({ label: d.name, href: tourPackagesUrl(d.slug) })),
        })),
        {
          title: "Popular circuits",
          links: circuits
            .filter((c) => !c.isInternational)
            .map((c) => ({ label: c.name, href: tourPackagesUrl(c.slug) })),
        },
      ],
    },
    {
      label: "International",
      href: tourPackagesUrl("international"),
      columns: [
        ...abroad.map((z) => ({
          title: z.name,
          links: z.destinations.map((d) => ({ label: d.name, href: tourPackagesUrl(d.slug) })),
        })),
        {
          title: "Multi-country",
          links: circuits
            .filter((c) => c.isInternational)
            .map((c) => ({ label: c.name, href: tourPackagesUrl(c.slug) })),
        },
      ],
    },
    {
      label: "Honeymoon",
      href: themeUrl("honeymoon-packages"),
      columns: [
        {
          title: "India",
          links: top("india", 12).map((d) => ({ label: d.name, href: themeUrl("honeymoon-packages", d.slug) })),
        },
        {
          title: "International",
          links: top("international", 12).map((d) => ({
            label: d.name,
            href: themeUrl("honeymoon-packages", d.slug),
          })),
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
