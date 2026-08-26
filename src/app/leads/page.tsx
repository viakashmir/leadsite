import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Travel Leads — Browse Verified Traveler Enquiries",
  description:
    "Browse verified travel leads by destination. Real trip requirements from travelers, updated daily.",
};

export default async function LeadsIndexPage() {
  const destinations = await prisma.destination.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { leads: true } } },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-zinc-900">Travel Leads by Destination</h1>
      <p className="mt-1 text-sm text-zinc-600">
        Browse verified traveler enquiries. Sign up free as a travel agent to unlock contact
        details and respond.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => (
          <Link
            key={d.id}
            href={`/leads/${d.slug}`}
            className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 shadow-sm hover:border-blue-400"
          >
            <span className="font-medium text-zinc-900">{d.name}</span>
            <span className="text-sm text-zinc-500">{d._count.leads} leads</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
