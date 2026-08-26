import Link from "next/link";
import { prisma } from "@/lib/prisma";
import RevealField from "@/components/admin/RevealField";
import { formatDate } from "@/lib/format";

export default async function AdminAgentsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; rm?: string; q?: string }>;
}) {
  const { status, rm, q } = await searchParams;

  const admins = await prisma.adminUser.findMany({ orderBy: { name: "asc" } });

  const agents = await prisma.agent.findMany({
    where: {
      status: status ? (status as never) : undefined,
      assignedRmId: rm === "__unassigned" ? null : rm ? rm : undefined,
      ...(q
        ? {
            OR: [
              { companyName: { contains: q } },
              { contactName: { contains: q } },
              { officeCity: { contains: q } },
            ],
          }
        : {}),
    },
    include: { assignedRm: true, destinations: { include: { destination: true } } },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-zinc-900">Travel Agents CRM</h1>
        <span className="text-sm text-zinc-500">{agents.length} agents</span>
      </div>

      <form className="mt-4 flex flex-wrap gap-2" method="get">
        <input
          name="q"
          defaultValue={q}
          placeholder="Search company, contact, city..."
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <select name="status" defaultValue={status ?? ""} className="rounded-md border border-zinc-300 px-3 py-2 text-sm">
          <option value="">All statuses</option>
          <option value="PENDING">Pending</option>
          <option value="ACTIVE">Active</option>
          <option value="SUSPENDED">Suspended</option>
        </select>
        <select name="rm" defaultValue={rm ?? ""} className="rounded-md border border-zinc-300 px-3 py-2 text-sm">
          <option value="">All RMs</option>
          <option value="__unassigned">Unassigned</option>
          {admins.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
        </select>
        <button type="submit" className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-semibold text-white">
          Filter
        </button>
      </form>

      <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase text-zinc-500">
            <tr>
              <th className="px-4 py-3">Company</th>
              <th className="hidden px-4 py-3 md:table-cell">Contact</th>
              <th className="px-4 py-3">Mobile</th>
              <th className="hidden px-4 py-3 lg:table-cell">Destinations</th>
              <th className="hidden px-4 py-3 md:table-cell">RM</th>
              <th className="px-4 py-3">Credits</th>
              <th className="px-4 py-3">Status</th>
              <th className="hidden px-4 py-3 lg:table-cell">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {agents.map((agent) => (
              <tr key={agent.id} className="hover:bg-zinc-50">
                <td className="px-4 py-3 font-medium text-blue-700">
                  <Link href={`/admin/agents/${agent.id}`}>{agent.companyName}</Link>
                </td>
                <td className="hidden px-4 py-3 md:table-cell">{agent.contactName}</td>
                <td className="px-4 py-3">
                  <RevealField value={agent.phone} />
                </td>
                <td className="hidden px-4 py-3 text-xs text-zinc-500 lg:table-cell">
                  {agent.destinations.map((d) => d.destination.name).join(", ")}
                </td>
                <td className="hidden px-4 py-3 md:table-cell">{agent.assignedRm?.name ?? "—"}</td>
                <td className="px-4 py-3">{agent.credits}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      agent.status === "ACTIVE"
                        ? "bg-green-50 text-green-700"
                        : agent.status === "SUSPENDED"
                          ? "bg-red-50 text-red-700"
                          : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {agent.status}
                  </span>
                </td>
                <td className="hidden px-4 py-3 text-xs text-zinc-500 lg:table-cell">{formatDate(agent.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {agents.length === 0 && <p className="p-6 text-center text-sm text-zinc-500">No agents found.</p>}
      </div>
    </div>
  );
}
