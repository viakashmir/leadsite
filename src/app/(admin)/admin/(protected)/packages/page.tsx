import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatINR } from "@/lib/format";

export default async function AdminPackagesPage({
  searchParams,
}: {
  searchParams: Promise<{ source?: string }>;
}) {
  const { source } = await searchParams;

  const packages = await prisma.package.findMany({
    where: source === "agent" ? { agentId: { not: null } } : source === "curated" ? { agentId: null } : undefined,
    include: { destination: true, agent: true },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-zinc-900">Packages</h1>
          <p className="mt-1 text-sm text-zinc-500">Curated and agent-submitted tour packages.</p>
        </div>
        <Link
          href="/admin/packages/new"
          className="rounded-md bg-blue-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800"
        >
          + New Package
        </Link>
      </div>

      <div className="mt-4 flex gap-2 text-sm">
        <Link
          href="/admin/packages"
          className={`rounded-full px-3 py-1 ${!source ? "bg-blue-700 text-white" : "border border-zinc-300 text-zinc-700"}`}
        >
          All
        </Link>
        <Link
          href="/admin/packages?source=curated"
          className={`rounded-full px-3 py-1 ${source === "curated" ? "bg-blue-700 text-white" : "border border-zinc-300 text-zinc-700"}`}
        >
          Curated
        </Link>
        <Link
          href="/admin/packages?source=agent"
          className={`rounded-full px-3 py-1 ${source === "agent" ? "bg-blue-700 text-white" : "border border-zinc-300 text-zinc-700"}`}
        >
          Agent-submitted
        </Link>
      </div>

      <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase text-zinc-500">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="hidden px-4 py-3 md:table-cell">Destination</th>
              <th className="px-4 py-3">Price</th>
              <th className="hidden px-4 py-3 lg:table-cell">Source</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {packages.map((p) => (
              <tr key={p.id} className="hover:bg-zinc-50">
                <td className="px-4 py-3 font-medium text-blue-700">
                  <Link href={`/admin/packages/${p.id}`}>{p.title}</Link>
                </td>
                <td className="hidden px-4 py-3 text-xs text-zinc-500 md:table-cell">{p.destination.name}</td>
                <td className="px-4 py-3">{formatINR(p.price)}</td>
                <td className="hidden px-4 py-3 text-xs text-zinc-500 lg:table-cell">
                  {p.agent ? p.agent.companyName : "Curated"}
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium ${p.published ? "text-green-600" : "text-zinc-400"}`}>
                    {p.published ? "Published" : "Unpublished"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {packages.length === 0 && <p className="p-6 text-center text-sm text-zinc-500">No packages found.</p>}
      </div>
    </div>
  );
}
