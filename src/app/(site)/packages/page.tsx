import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import PackageCard from "@/components/PackageCard";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Tour Packages — Compare & Get Free Quotes",
  description:
    "Browse tour packages across India and worldwide, compare prices and durations, and get free quotes from verified travel agents.",
};

export default async function PackagesPage() {
  const packages = await prisma.package.findMany({
    where: { published: true },
    include: { destination: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-zinc-900">Tour Packages</h1>
      <p className="mt-1 text-sm text-zinc-600">
        {packages.length} packages available. Prices shown are starting prices — get a custom
        quote from a verified agent.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((p) => (
          <PackageCard
            key={p.id}
            slug={p.slug}
            title={p.title}
            summary={p.summary}
            durationDays={p.durationDays}
            durationNights={p.durationNights}
            price={p.price}
            destinationName={p.destination.name}
            theme={p.theme}
            heroImage={p.heroImage}
          />
        ))}
      </div>
    </div>
  );
}
