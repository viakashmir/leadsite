import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DestinationIndex from "@/components/location/DestinationIndex";
import TargetPackagesPage, {
  packagesPageMetadata,
  type PackagesPageVariant,
} from "@/components/location/TargetPackagesPage";
import { ORIGIN_CITIES } from "@/data/locations";
import { readContent, resolveTarget } from "@/lib/locations";
import { parseFromTo, tourPackagesUrl } from "@/lib/urls";

export const revalidate = 3600;

// Empty list = nothing prerendered at build; each page is rendered on its first
// visit and then cached (ISR) instead of hitting the database on every request.
export async function generateStaticParams() {
  return [];
}

const SCOPES = {
  india: {
    title: "India Tour Packages",
    subtitle:
      "All 36 states and union territories, grouped by region. Choose a destination to see packages and get customised quotes.",
  },
  international: {
    title: "International Tour Packages",
    subtitle:
      "Premium international holidays from India: beaches, cities and mountains. Choose a destination to compare agent quotes.",
  },
} as const;

async function resolve(slug: string) {
  const fromTo = parseFromTo(slug);
  if (fromTo) {
    const origin = ORIGIN_CITIES.find((o) => o.slug === fromTo.origin);
    const target = origin ? await resolveTarget(fromTo.target) : null;
    // Origin pages exist for destinations and circuits, and for a city only
    // when that city has its own copy for the origin (no thin duplicates).
    if (!origin || !target) return null;
    // Cities, and the non-major departure cities everywhere, need their own
    // copy for this pairing.
    const own = readContent(target.type === "city" ? target.city.content : target.type === "destination" ? target.destination.content : null);
    const hasCopy = Boolean(own.packages?.fromOrigins?.[origin.slug]);
    if ((target.type === "city" || !origin.major) && !hasCopy) return null;
    return { target, variant: { origin } satisfies PackagesPageVariant };
  }
  const target = await resolveTarget(slug);
  return target ? { target, variant: {} satisfies PackagesPageVariant } : null;
}

export async function generateMetadata({ params }: PageProps<"/tour-packages/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (slug in SCOPES) {
    const s = SCOPES[slug as keyof typeof SCOPES];
    return { title: s.title, description: s.subtitle, alternates: { canonical: tourPackagesUrl(slug) } };
  }
  const r = await resolve(slug);
  return r ? packagesPageMetadata(r.target, r.variant) : {};
}

export default async function Page({ params }: PageProps<"/tour-packages/[slug]">) {
  const { slug } = await params;
  if (slug === "india" || slug === "international") {
    const s = SCOPES[slug];
    return (
      <DestinationIndex
        crumbs={[
          { name: "Tour Packages", href: tourPackagesUrl() },
          { name: s.title, href: tourPackagesUrl(slug) },
        ]}
        title={s.title}
        subtitle={s.subtitle}
        scope={slug}
      />
    );
  }
  const r = await resolve(slug);
  if (!r) notFound();
  return <TargetPackagesPage target={r.target} variant={r.variant} />;
}
