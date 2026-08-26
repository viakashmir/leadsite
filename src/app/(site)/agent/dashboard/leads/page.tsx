import { requireAgent } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { maskName, maskPhone } from "@/lib/mask";
import { formatDate } from "@/lib/format";
import UnlockButton from "@/components/agent/UnlockButton";

export default async function AgentLeadsPage() {
  const agent = await requireAgent();

  const destinationLinks = await prisma.agentDestination.findMany({
    where: { agentId: agent.id },
    select: { destinationId: true },
  });
  const destinationIds = destinationLinks.map((d) => d.destinationId);

  const leads = await prisma.lead.findMany({
    where: { destinationId: { in: destinationIds } },
    include: {
      destination: true,
      city: true,
      unlocks: { where: { agentId: agent.id } },
      _count: { select: { unlocks: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  if (destinationIds.length === 0) {
    return (
      <p className="text-sm text-zinc-600">
        You haven&apos;t selected any destinations yet. Update your profile to see matching leads.
      </p>
    );
  }

  return (
    <div>
      <h1 className="text-lg font-semibold text-zinc-900">Leads Matching Your Destinations</h1>
      <p className="mt-1 text-sm text-zinc-500">
        {leads.length} leads found. Unlock a lead to reveal full contact details — each lead is
        shared with up to {leads[0]?.maxUnlocks ?? 3} agents.
      </p>

      <div className="mt-5 space-y-3">
        {leads.map((lead) => {
          const unlocked = lead.unlocks.length > 0;
          const soldOut = lead._count.unlocks >= lead.maxUnlocks && !unlocked;

          return (
            <div key={lead.id} className="rounded-lg border border-zinc-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-zinc-900">
                  {lead.durationDays ?? "Multi"}-day {lead.destination.name}
                  {lead.city ? ` (${lead.city.name})` : ""} for {lead.adults} adult
                  {lead.adults > 1 ? "s" : ""}
                </p>
                {lead.verified && (
                  <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                    Verified
                  </span>
                )}
              </div>
              {lead.message && <p className="mt-1 text-xs text-zinc-500">{lead.message}</p>}
              <p className="mt-1 text-xs text-zinc-400">
                Posted {formatDate(lead.createdAt)}
                {lead.budgetBand ? ` · Budget: ${lead.budgetBand}` : ""}
                {lead.originCity ? ` · From ${lead.originCity}` : ""}
              </p>

              <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-3">
                {unlocked ? (
                  <div className="text-sm">
                    <p className="font-medium text-zinc-900">{lead.name}</p>
                    <p className="text-zinc-700">{lead.phone}</p>
                    {lead.email && <p className="text-zinc-700">{lead.email}</p>}
                  </div>
                ) : (
                  <div className="text-sm text-zinc-500">
                    <p>{maskName(lead.name)}</p>
                    <p>{maskPhone(lead.phone)}</p>
                  </div>
                )}

                {unlocked ? (
                  <span className="text-xs font-medium text-green-700">Unlocked</span>
                ) : soldOut ? (
                  <span className="text-xs font-medium text-zinc-400">Fully claimed</span>
                ) : (
                  <UnlockButton leadId={lead.id} price={lead.unlockPrice} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
