import Link from "next/link";
import { requireAgent } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { maskContactsInText, maskEmail, maskName, maskPhone } from "@/lib/mask";
import UnlockButton from "@/components/agent/UnlockButton";
import { buyersLeft, HiddenContact, SoldOutBadge } from "@/components/LeadContact";
import { LeadCardShell, LeadPerson } from "@/components/LeadCard";
import { getLeadPricing, isHotLead, leadPrice } from "@/lib/leadPricing";

export default async function AgentLeadsPage({ searchParams }: { searchParams: Promise<{ lead?: string }> }) {
  const agent = await requireAgent();
  const { lead: focusId } = await searchParams;

  const destinationLinks = await prisma.agentDestination.findMany({
    where: { agentId: agent.id },
    select: { destinationId: true },
  });
  const destinationIds = destinationLinks.map((d) => d.destinationId);

  const pricing = await getLeadPricing();
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

  const focusedLead = focusId ? leads.find((l) => l.id === focusId) : undefined;

  // Came from "Buy Now" on a public lead page: explain if that lead isn't in
  // this agent's destinations (they can't see or buy it until they add it).
  const focusMissing =
    focusId && !leads.some((l) => l.id === focusId)
      ? await prisma.lead.findUnique({ where: { id: String(focusId).slice(0, 64) }, select: { destination: { select: { name: true } } } })
      : null;

  return (
    <div>
      <h1 className="text-lg font-semibold text-zinc-900">Leads Matching Your Destinations</h1>
      <p className="mt-1 text-sm text-zinc-500">
        {leads.length} leads found. Buy a lead to see the traveller&apos;s phone and email. Each lead is sold to at
        most {leads[0]?.maxUnlocks ?? 3} agents, then it&apos;s sold out.
      </p>

      {agent.status !== "ACTIVE" && (
        <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-800">
          Your account is awaiting verification. You can buy leads once our team approves it.
        </p>
      )}
      {focusMissing && (
        <p className="mt-3 rounded-md bg-blue-50 px-3 py-2 text-sm text-blue-800">
          That lead is for {focusMissing.destination.name}, which isn&apos;t in your destinations.{" "}
          <Link href="/agent/dashboard/profile" className="font-medium underline">
            Add it in your profile
          </Link>{" "}
          to buy it.
        </p>
      )}
      {destinationIds.length === 0 && (
        <p className="mt-3 text-sm text-zinc-600">
          You haven&apos;t selected any destinations yet.{" "}
          <Link href="/agent/dashboard/profile" className="font-medium text-brand underline">
            Choose them in your profile
          </Link>{" "}
          to see matching leads.
        </p>
      )}

      <div className="mt-5 space-y-3">
        {leads.map((lead) => {
          const purchased = lead.unlocks.length > 0;
          const left = buyersLeft(lead._count.unlocks, lead.maxUnlocks);
          const soldOut = left === 0 && !purchased;
          const focused = lead.id === focusId;

          const trip = {
            destinationName: lead.destination.name,
            cityName: lead.city?.name ?? null,
            originCity: lead.originCity,
            travelDate: lead.travelDate,
            durationDays: lead.durationDays,
            adults: lead.adults,
            children: lead.children,
            budgetBand: lead.budgetBand,
            message: lead.message ? (purchased ? lead.message : maskContactsInText(lead.message)) : null,
            status: lead.status,
            createdAt: lead.createdAt,
          };
          const tel = lead.phone.replace(/[^\d+]/g, "");

          return (
            <LeadCardShell key={lead.id} id={`lead-${lead.id}`} focused={focused} hot={isHotLead(lead, pricing)} lead={trip}>
              {purchased ? (
                <>
                  <LeadPerson name={lead.name} lines={[lead.phone, lead.email]} verified={lead.verified} highlight />
                  <div className="flex shrink-0 items-center gap-1.5">
                    <a href={`tel:${tel}`} className="rounded-full bg-green-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-green-700">
                      Call
                    </a>
                    <a
                      href={`https://wa.me/${tel.replace(/^\+/, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full px-3 py-1.5 text-xs font-semibold text-green-700 ring-1 ring-inset ring-green-200 hover:bg-green-50"
                    >
                      WhatsApp
                    </a>
                  </div>
                </>
              ) : (
                <>
                  {/* Only masked values are rendered; the real ones never leave the server. */}
                  <HiddenContact
                    name={maskName(lead.name)}
                    phone={maskPhone(lead.phone)}
                    email={lead.email ? maskEmail(lead.email) : null}
                  />
                  {soldOut ? (
                    <SoldOutBadge />
                  ) : (
                    <div className="flex flex-col items-end gap-1">
                      <UnlockButton leadId={lead.id} price={leadPrice(lead, pricing)} />
                      <span className="text-[10px] text-zinc-400">
                        {left} of {lead.maxUnlocks} left
                      </span>
                    </div>
                  )}
                </>
              )}
            </LeadCardShell>
          );
        })}
      </div>
      {focusedLead && (
        // Id comes from the database (cuid: letters and digits), never from the URL.
        <script
          dangerouslySetInnerHTML={{
            __html: `document.getElementById("lead-${focusedLead.id.replace(/[^a-z0-9]/gi, "")}")?.scrollIntoView({block:"center"})`,
          }}
        />
      )}
    </div>
  );
}
