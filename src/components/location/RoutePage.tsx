import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { Faqs, PageHero, QuoteBox, Section, TwoColumn, type Crumb } from "@/components/location/blocks";
import { webPageSchema } from "@/lib/schema";
import { fromToUrl, guideUrl, tourPackagesUrl } from "@/lib/urls";
import { routesTo, type getRoute } from "@/data/routes";

type Route = NonNullable<ReturnType<typeof getRoute>>;

// Hubs with frequent overnight buses into the Himachal and Ladakh routes.
const BUS_HUBS = new Set(["delhi", "chandigarh"]);

export function routeTitle(r: Route) {
  return `${r.origin.name} to ${r.target.name}`;
}

export function routeDescription(r: Route) {
  return `${routeTitle(r)} distance is about ${r.dist.km.toLocaleString("en-IN")} km by road. Compare flight, train, bus and road options, the nearest airport and railhead, and the best way to travel.`;
}

// The quickest sensible way in, from road distance alone.
function bestWay(r: Route) {
  const km = r.dist.km;
  if (km <= 450) return `By road: a cab or an overnight bus is the simplest option for about ${km} km.`;
  if (km <= 900)
    return `By overnight bus or by train plus taxi for about ${km} km; fly to ${r.target.hub} if you want to save time.`;
  return `By air: fly from ${r.originInfo.airport} to ${r.target.hub} (direct or with one stop), then continue by road.`;
}

export default function RoutePage({
  route: r,
  path,
  crumbs,
  updated,
  destinationId,
  cityId,
  hasOriginPackages,
}: {
  route: Route;
  path: string;
  crumbs: Crumb[];
  updated: Date;
  destinationId: string;
  cityId?: string;
  hasOriginPackages: boolean;
}) {
  const title = routeTitle(r);
  const { origin, target, dist } = r;
  const km = dist.km.toLocaleString("en-IN");
  const busHub = BUS_HUBS.has(origin.slug);

  const faqs = [
    { q: `What is the distance from ${origin.name} to ${target.name}?`, a: `About ${km} km by road on the route OpenStreetMap finds from central ${origin.name}. The exact figure depends on your start point and the route you take.` },
    { q: `How long does it take to travel from ${origin.name} to ${target.name}?`, a: `About ${dist.hours} hours of non-stop driving by OpenStreetMap's estimate. With traffic, meal stops and mountain roads, plan for longer.${target.season ? ` ${target.season}` : ""}` },
    { q: `What is the best way to go from ${origin.name} to ${target.name}?`, a: bestWay(r) },
    {
      q: `Is there a direct bus from ${origin.name} to ${target.name}?`,
      a: busHub
        ? (target.bus ?? `Check HRTC and private operators for current services from ${origin.name}.`)
        : `Long-distance buses from ${origin.name} are limited; most travellers reach Delhi or Chandigarh first and take an HRTC or private bus from there.`,
    },
    { q: `Which is the nearest airport to ${target.name}?`, a: target.air },
  ];

  const others = routesTo(target.city).filter((o) => o.origin.slug !== origin.slug);

  return (
    <article>
      <JsonLd
        data={webPageSchema({
          path,
          name: `${title} Distance and How to Reach`,
          type: "Article",
          description: routeDescription(r),
          dateModified: updated,
          about: { "@type": "TouristDestination", name: target.name },
        })}
      />
      <PageHero
        crumbs={crumbs}
        title={`${title} Distance and How to Reach`}
        subtitle={`Road distance, drive time and the best flight, train and bus options from ${origin.name} to ${target.name}.`}
        updated={updated}
      >
        <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-4">
          {[
            ["Road distance", `${km} km`],
            ["Driving time", `~${dist.hours} hrs non-stop`],
            ["Fly into", target.hub],
            ["Best way", dist.km <= 450 ? "Road" : dist.km <= 900 ? "Bus or train" : "Flight"],
          ].map(([k, v]) => (
            <div key={k} className="bg-white px-3 py-2.5">
              <dt className="text-[11px] font-bold uppercase tracking-wider text-ink-soft">{k}</dt>
              <dd className="mt-0.5 text-sm font-semibold leading-snug text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </PageHero>
      <TwoColumn
        main={
          <>
            <Section title={`${title} distance`}>
              <p className="leading-relaxed text-ink">
                The road distance from {origin.name} to {target.name} is about {km} km, roughly {dist.hours} hours of
                non-stop driving (OpenStreetMap route from central {origin.name}). {bestWay(r)}
              </p>
              {target.season && <p className="mt-2 leading-relaxed text-ink-soft">{target.season}</p>}
            </Section>
            <Section title={`${title} by flight`}>
              <p className="leading-relaxed text-ink">
                {origin.slug === "delhi" || origin.slug === "chandigarh"
                  ? target.air
                  : `Fly from ${r.originInfo.airport} to ${target.hub}, direct or with one stop depending on the day. ${target.air}`}
              </p>
            </Section>
            <Section title={`${title} by train`}>
              <p className="leading-relaxed text-ink">
                {target.rail} Trains from {origin.name} to the railhead may be direct or need a change, often at Delhi;
                check IRCTC for current trains.
              </p>
            </Section>
            <Section title={`${title} by road`}>
              <p className="leading-relaxed text-ink">
                About {km} km by road. {target.road}
              </p>
            </Section>
            <Section title={`${title} by bus`}>
              <p className="leading-relaxed text-ink">
                {busHub
                  ? target.bus
                  : `Direct buses from ${origin.name} are limited. Reach Delhi or Chandigarh by train or flight first. ${target.bus ?? ""}`}
              </p>
            </Section>
            {others.length > 0 && (
              <Section title={`How to reach ${target.name} from other cities`}>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={guideUrl(target.destination, target.city, "how-to-reach", o.slug)}
                        className="block rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
                      >
                        {o.origin.name} to {target.name}
                        <span className="block text-xs font-normal text-ink-soft">{o.dist.km.toLocaleString("en-IN")} km</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Section>
            )}
            <Section title={`${target.name} trip from ${origin.name}`}>
              <p className="text-ink">
                Plan the whole trip, not just the journey:{" "}
                {hasOriginPackages && (
                  <>
                    <Link href={fromToUrl(origin.slug, target.city)} className="font-semibold text-brand hover:underline">
                      {target.name} packages from {origin.name}
                    </Link>
                    ,{" "}
                  </>
                )}
                <Link href={tourPackagesUrl(target.city)} className="font-semibold text-brand hover:underline">
                  all {target.name} tour packages
                </Link>{" "}
                and the{" "}
                <Link href={guideUrl(target.destination, target.city)} className="font-semibold text-brand hover:underline">
                  {target.name} travel guide
                </Link>
                .
              </p>
            </Section>
            <Section title={`${title} FAQs`}>
              <Faqs faqs={faqs} />
            </Section>
          </>
        }
        side={<QuoteBox destinationId={destinationId} cityId={cityId} title={`Plan your ${target.name} trip from ${origin.name}`} />}
      />
    </article>
  );
}
