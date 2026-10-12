import type { Metadata } from "next";
import DestinationIndex from "@/components/location/DestinationIndex";
import { tourPackagesUrl } from "@/lib/urls";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Tour Packages for Every State in India & Top International Destinations",
  description:
    "Browse holiday packages by state, city and theme across India and abroad. Share your plan once and get up to 3 customised quotes from verified local agents.",
  alternates: { canonical: tourPackagesUrl() },
};

export default function TourPackagesIndex() {
  return (
    <DestinationIndex
      crumbs={[{ name: "Tour Packages", href: tourPackagesUrl() }]}
      title="Tour Packages"
      subtitle="Every state and union territory in India, plus premium international destinations. Pick a place to see packages, or tell us your plan and get quotes."
    />
  );
}
