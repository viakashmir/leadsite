import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DestinationIndex from "@/components/location/DestinationIndex";
import GuidePage, { guideMetadata, resolveGuide } from "@/components/location/GuidePages";
import TargetPackagesPage, { packagesPageMetadata } from "@/components/location/TargetPackagesPage";
import { THEMES } from "@/data/locations";
import { getThemeSliceSlugs, resolveTarget } from "@/lib/locations";
import { themeUrl, tourPackagesUrl } from "@/lib/urls";

// No timed rebuilds: every timed ISR rebuild is a billed ISR write, and
// crawlers hitting thousands of pages hourly blocked the Vercel account.
// Pages refresh on deploy and on demand (admin edits, new leads, unlocks).
export const revalidate = false;

// Empty list = nothing prerendered at build; each page is rendered on its first
// visit and then cached (ISR) instead of hitting the database on every request.
export async function generateStaticParams() {
  return [];
}

// One dynamic route for two TravelTriangle-style URL families that can't be
// expressed as folders:
//   /{theme}-packages[/{destination-or-city}]   e.g. /honeymoon-packages/kashmir
//   /{destination}-tourism[/...]                e.g. /kashmir-tourism/gulmarg/places-to-visit
// Static routes (/tour-packages, /packages, /agent, /leads...) always win over this.
type Resolved =
  | { type: "themeIndex"; theme: (typeof THEMES)[number] }
  | { type: "theme"; theme: (typeof THEMES)[number]; target: NonNullable<Awaited<ReturnType<typeof resolveTarget>>> }
  | { type: "guide"; route: NonNullable<Awaited<ReturnType<typeof resolveGuide>>> };

async function resolve(section: string, path: string[] = []): Promise<Resolved | null> {
  const theme = THEMES.find((t) => t.prefix === section);
  if (theme) {
    if (path.length === 0) return { type: "themeIndex", theme };
    if (path.length !== 1) return null;
    const target = await resolveTarget(path[0]);
    return target ? { type: "theme", theme, target } : null;
  }
  const m = /^([a-z0-9-]+)-tourism$/.exec(section);
  if (m) {
    const route = await resolveGuide(m[1], path);
    return route ? { type: "guide", route } : null;
  }
  return null;
}

export async function generateMetadata({ params }: PageProps<"/[section]/[[...path]]">): Promise<Metadata> {
  const { section, path } = await params;
  const r = await resolve(section, path);
  if (!r) return {};
  if (r.type === "themeIndex") {
    return {
      title: `${r.theme.name} Tour Packages: India & International`,
      description: `Browse ${r.theme.name.toLowerCase()} holiday packages by destination and get up to 3 customised quotes from verified local travel agents.`,
      alternates: { canonical: themeUrl(r.theme.prefix) },
    };
  }
  if (r.type === "theme") return packagesPageMetadata(r.target, { theme: r.theme });
  return guideMetadata(r.route);
}

export default async function Page({ params }: PageProps<"/[section]/[[...path]]">) {
  const { section, path } = await params;
  const r = await resolve(section, path);
  if (!r) notFound();

  if (r.type === "themeIndex") {
    return (
      <DestinationIndex
        crumbs={[
          { name: "Tour Packages", href: tourPackagesUrl() },
          { name: `${r.theme.name} Packages`, href: themeUrl(r.theme.prefix) },
        ]}
        title={`${r.theme.name} Tour Packages`}
        subtitle={`Pick a destination for ${r.theme.name.toLowerCase()} packages. Every trip is customised by a verified local agent.`}
        linkFor={(slug) => themeUrl(r.theme.prefix, slug)}
        only={await getThemeSliceSlugs(r.theme)}
        showThemes
      />
    );
  }
  if (r.type === "theme") return <TargetPackagesPage target={r.target} variant={{ theme: r.theme }} />;
  return <GuidePage route={r.route} />;
}
