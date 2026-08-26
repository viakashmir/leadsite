import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatDate, formatINR } from "@/lib/format";

export default async function AdminProposalsPage() {
  const proposals = await prisma.proposal.findMany({
    include: { preparedBy: true, agent: true },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-lg font-semibold text-zinc-900">Proposals</h1>
        <Link
          href="/admin/proposals/new"
          className="rounded-md bg-blue-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800"
        >
          + New Proposal
        </Link>
      </div>

      <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase text-zinc-500">
            <tr>
              <th className="px-4 py-3">Number</th>
              <th className="px-4 py-3">Prospect</th>
              <th className="hidden px-4 py-3 md:table-cell">Plan</th>
              <th className="px-4 py-3">Total</th>
              <th className="hidden px-4 py-3 lg:table-cell">Prepared By</th>
              <th className="px-4 py-3">Status</th>
              <th className="hidden px-4 py-3 lg:table-cell">Valid Till</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {proposals.map((p) => (
              <tr key={p.id} className="hover:bg-zinc-50">
                <td className="px-4 py-3 font-medium text-blue-700">
                  <Link href={`/admin/proposals/${p.id}`}>{p.proposalNumber}</Link>
                </td>
                <td className="px-4 py-3">
                  {p.prospectName}
                  {p.agent && <span className="text-xs text-zinc-400"> · {p.agent.companyName}</span>}
                </td>
                <td className="hidden px-4 py-3 md:table-cell">{p.planName}</td>
                <td className="px-4 py-3">{formatINR(p.totalPayable)}</td>
                <td className="hidden px-4 py-3 text-xs text-zinc-500 lg:table-cell">{p.preparedBy.name}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      p.status === "ACCEPTED"
                        ? "bg-green-50 text-green-700"
                        : p.status === "EXPIRED"
                          ? "bg-red-50 text-red-700"
                          : p.status === "SENT"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="hidden px-4 py-3 text-xs text-zinc-500 lg:table-cell">{formatDate(p.validTill)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {proposals.length === 0 && (
          <p className="p-6 text-center text-sm text-zinc-500">No proposals yet.</p>
        )}
      </div>
    </div>
  );
}
