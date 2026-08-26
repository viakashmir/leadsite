import Link from "next/link";
import { requireAgent } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { SERVICE_OPTIONS } from "@/lib/validation";

export default async function AgentDashboardOverview() {
  const agent = await requireAgent();

  const destinationLinks = await prisma.agentDestination.findMany({
    where: { agentId: agent.id },
    include: { destination: true },
  });
  const destinationIds = destinationLinks.map((d) => d.destinationId);

  const [unlockedCount, packageCount, availableLeadCount] = await Promise.all([
    prisma.leadUnlock.count({ where: { agentId: agent.id } }),
    prisma.package.count({ where: { agentId: agent.id } }),
    prisma.lead.count({ where: { destinationId: { in: destinationIds } } }),
  ]);

  const services = JSON.parse(agent.servicesWanted) as string[];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-xs text-zinc-500">Credit Balance</p>
          <p className="mt-1 text-2xl font-bold text-blue-700">{agent.credits}</p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-xs text-zinc-500">Leads Unlocked</p>
          <p className="mt-1 text-2xl font-bold text-zinc-900">{unlockedCount}</p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-xs text-zinc-500">Packages Posted</p>
          <p className="mt-1 text-2xl font-bold text-zinc-900">{packageCount}</p>
        </div>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
        <p className="text-sm font-medium text-blue-900">
          {availableLeadCount} leads available across your destinations.
        </p>
        <Link
          href="/agent/dashboard/leads"
          className="mt-2 inline-block rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Browse & Unlock Leads
        </Link>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-4">
        <h2 className="font-semibold text-zinc-900">Your Profile</h2>
        <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-zinc-500">Destinations</dt>
            <dd>{destinationLinks.map((d) => d.destination.name).join(", ")}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">Services</dt>
            <dd>
              {services
                .map((s) => SERVICE_OPTIONS.find((o) => o.value === s)?.label ?? s)
                .join(", ")}
            </dd>
          </div>
          <div>
            <dt className="text-zinc-500">Daily lead target</dt>
            <dd>{agent.dailyLeadTarget}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">Status</dt>
            <dd>{agent.status}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
