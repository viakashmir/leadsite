import Link from "next/link";
import { prisma } from "@/lib/prisma";
import RevealField from "@/components/admin/RevealField";
import { formatDate } from "@/lib/format";

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; destinationId?: string }>;
}) {
  const { status, destinationId } = await searchParams;

  const destinations = await prisma.destination.findMany({ orderBy: { name: "asc" } });

  const leads = await prisma.lead.findMany({
    where: {
      status: status ? (status as never) : undefined,
      destinationId: destinationId || undefined,
    },
    include: { destination: true, city: true, _count: { select: { unlocks: true } } },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-zinc-900">Travel Leads CRM</h1>
        <span className="text-sm text-zinc-500">{leads.length} leads</span>
      </div>

      <form className="mt-4 flex flex-wrap gap-2" method="get">
        <select name="destinationId" defaultValue={destinationId ?? ""} className="rounded-md border border-zinc-300 px-3 py-2 text-sm">
          <option value="">All destinations</option>
          {destinations.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
        <select name="status" defaultValue={status ?? ""} className="rounded-md border border-zinc-300 px-3 py-2 text-sm">
          <option value="">All statuses</option>
          <option value="NEW">New</option>
          <option value="VERIFIED">Verified</option>
          <option value="BOOKED">Booked</option>
          <option value="STALE">Stale</option>
        </select>
        <button type="submit" className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white">
          Filter
        </button>
      </form>

      <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase text-zinc-500">
            <tr>
              <th className="px-4 py-3">Traveler</th>
              <th className="px-4 py-3">Mobile</th>
              <th className="px-4 py-3">Route (A → B)</th>
              <th className="px-4 py-3">Travel Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Unlocks</th>
              <th className="px-4 py-3">Posted</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-zinc-50">
                <td className="px-4 py-3 font-medium text-blue-700">
                  <Link href={`/admin/leads/${lead.id}`}>{lead.name}</Link>
                </td>
                <td className="px-4 py-3">
                  <RevealField value={lead.phone} />
                </td>
                <td className="px-4 py-3 text-xs text-zinc-600">
                  {lead.originCity ?? "—"} → {lead.city ? lead.city.name : lead.destination.name}
                </td>
                <td className="px-4 py-3 text-xs text-zinc-500">
                  {lead.travelDate ? formatDate(lead.travelDate) : "—"}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      lead.status === "BOOKED"
                        ? "bg-zinc-100 text-zinc-500"
                        : lead.status === "VERIFIED"
                          ? "bg-green-50 text-green-700"
                          : lead.status === "STALE"
                            ? "bg-red-50 text-red-700"
                            : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-zinc-500">
                  {lead._count.unlocks}/{lead.maxUnlocks}
                </td>
                <td className="px-4 py-3 text-xs text-zinc-500">{formatDate(lead.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {leads.length === 0 && <p className="p-6 text-center text-sm text-zinc-500">No leads found.</p>}
      </div>
    </div>
  );
}
