import { prisma } from "@/lib/prisma";
import ProposalForm from "@/components/admin/ProposalForm";

export default async function NewProposalPage({
  searchParams,
}: {
  searchParams: Promise<{ agentId?: string }>;
}) {
  const { agentId } = await searchParams;
  const agents = await prisma.agent.findMany({
    orderBy: { companyName: "asc" },
    select: { id: true, companyName: true, contactName: true, email: true, phone: true },
  });

  return (
    <div>
      <h1 className="text-lg font-semibold text-zinc-900">New Proposal</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Pick a plan, customize it, and generate a shareable, printable proposal.
      </p>
      <div className="mt-5">
        <ProposalForm agents={agents} defaultAgentId={agentId} />
      </div>
    </div>
  );
}
