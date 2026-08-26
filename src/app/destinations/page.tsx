import type { Metadata } from "next";
import { getDestinationsWithCitiesAndLeadCounts } from "@/lib/data";
import DestinationCard from "@/components/DestinationCard";
import { SITE_NAME } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Tour Destinations — India & International Holiday Packages",
  description:
    "Browse tour destinations across India and worldwide. Compare packages and get free quotes from verified travel agents.",
};

export default async function DestinationsPage() {
  const destinations = await getDestinationsWithCitiesAndLeadCounts();
  const domestic = destinations.filter((d) => !d.isInternational);
  const international = destinations.filter((d) => d.isInternational);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-zinc-900">Tour Destinations</h1>
      <p className="mt-1 text-sm text-zinc-600">
        Explore India&apos;s top holiday destinations and popular international getaways, all on{" "}
        {SITE_NAME}.
      </p>

      <h2 className="mt-8 text-lg font-semibold text-zinc-900">India</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {domestic.map((d) => (
          <DestinationCard
            key={d.id}
            slug={d.slug}
            name={d.name}
            summary={d.summary}
            leadCount={d._count.leads}
          />
        ))}
      </div>

      {international.length > 0 && (
        <>
          <h2 className="mt-10 text-lg font-semibold text-zinc-900">International</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {international.map((d) => (
              <DestinationCard
                key={d.id}
                slug={d.slug}
                name={d.name}
                summary={d.summary}
                leadCount={d._count.leads}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
