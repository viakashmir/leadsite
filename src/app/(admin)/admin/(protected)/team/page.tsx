import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/format";
import CreateAdminForm from "@/components/admin/CreateAdminForm";

export default async function AdminTeamPage() {
  const admins = await prisma.adminUser.findMany({
    orderBy: { createdAt: "asc" },
    include: { _count: { select: { managedAgents: true, proposals: true } } },
  });

  return (
    <div>
      <h1 className="text-lg font-semibold text-zinc-900">Team</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Staff accounts who can sign in to this Admin Panel and be assigned as an agent&apos;s RM.
      </p>

      <div className="mt-4 rounded-lg border border-zinc-200 bg-white p-5">
        <CreateAdminForm />
      </div>

      <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase text-zinc-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="hidden px-4 py-3 md:table-cell">Agents Managed</th>
              <th className="hidden px-4 py-3 lg:table-cell">Proposals Sent</th>
              <th className="hidden px-4 py-3 lg:table-cell">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {admins.map((a) => (
              <tr key={a.id}>
                <td className="px-4 py-3 font-medium text-zinc-900">{a.name}</td>
                <td className="px-4 py-3 text-zinc-600">{a.email}</td>
                <td className="hidden px-4 py-3 md:table-cell">{a._count.managedAgents}</td>
                <td className="hidden px-4 py-3 lg:table-cell">{a._count.proposals}</td>
                <td className="hidden px-4 py-3 text-xs text-zinc-500 lg:table-cell">{formatDate(a.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
