import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { backfillAllPhotos } from "@/lib/adminActions";
import PixabayBackfillButton from "@/components/admin/PixabayBackfillButton";

export default async function AdminDestinationsPage() {
  const destinations = await prisma.destination.findMany({
    orderBy: { name: "asc" },
    include: { _count: { select: { cities: true, packages: true, leads: true } } },
  });

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-zinc-900">Destinations</h1>
          <p className="mt-1 text-sm text-zinc-500">
            The destinations that power SEO landing pages, leads, and packages sitewide.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <PixabayBackfillButton action={backfillAllPhotos} />
          <Link
            href="/admin/destinations/new"
            className="rounded-md bg-blue-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800"
          >
            + New Destination
          </Link>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase text-zinc-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="hidden px-4 py-3 md:table-cell">Type</th>
              <th className="px-4 py-3">Cities</th>
              <th className="px-4 py-3">Packages</th>
              <th className="hidden px-4 py-3 lg:table-cell">Leads</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {destinations.map((d) => (
              <tr key={d.id} className="hover:bg-zinc-50">
                <td className="px-4 py-3 font-medium text-blue-700">
                  <Link href={`/admin/destinations/${d.id}`}>{d.name}</Link>
                </td>
                <td className="hidden px-4 py-3 text-xs text-zinc-500 md:table-cell">
                  {d.isInternational ? "International" : "Domestic"}
                </td>
                <td className="px-4 py-3">{d._count.cities}</td>
                <td className="px-4 py-3">{d._count.packages}</td>
                <td className="hidden px-4 py-3 lg:table-cell">{d._count.leads}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {destinations.length === 0 && (
          <p className="p-6 text-center text-sm text-zinc-500">No destinations yet.</p>
        )}
      </div>
    </div>
  );
}
