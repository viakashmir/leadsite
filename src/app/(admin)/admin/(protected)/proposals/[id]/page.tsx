import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatDate, formatINR } from "@/lib/format";
import { SITE_NAME } from "@/lib/site";
import PrintButton from "@/components/admin/PrintButton";
import ProposalStatusForm from "@/components/admin/ProposalStatusForm";
import { updateProposalStatus } from "@/lib/adminActions";

export default async function ProposalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const proposal = await prisma.proposal.findUnique({
    where: { id },
    include: { preparedBy: true, agent: true },
  });
  if (!proposal) notFound();

  const features = JSON.parse(proposal.features) as string[];
  const kycChecklist = JSON.parse(proposal.kycChecklist) as string[];
  const gstAmount = proposal.totalPayable - proposal.subtotal;
  const boundUpdateStatus = updateProposalStatus.bind(null, proposal.id);

  return (
    <div>
      <div className="print-hide mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/admin/proposals" className="text-sm text-blue-700">
          ← All proposals
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <ProposalStatusForm action={boundUpdateStatus} currentStatus={proposal.status} />
          <PrintButton />
        </div>
      </div>

      <div className="print-area mx-auto max-w-3xl overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
        <div className="bg-blue-700 px-8 py-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-2xl font-bold">{SITE_NAME}</p>
              <p className="text-sm text-blue-100">Connecting travel agents with verified leads</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">{proposal.proposalNumber}</p>
              <p className="text-blue-100">Prepared for {proposal.prospectName}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 bg-zinc-50 px-8 py-4 text-sm">
          <div>
            <p className="text-xs uppercase text-zinc-400">Prepared By</p>
            <p className="font-medium text-zinc-900">{proposal.preparedBy.name}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-zinc-400">Prepared For</p>
            <p className="font-medium text-zinc-900">
              {proposal.prospectCompany || proposal.prospectName}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase text-zinc-400">Date</p>
            <p className="font-medium text-zinc-900">{formatDate(proposal.createdAt)}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-zinc-400">Valid Till</p>
            <p className="font-medium text-zinc-900">{formatDate(proposal.validTill)}</p>
          </div>
        </div>

        <div className="px-8 py-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Plan Offered
          </h2>
          <div className="mt-3 rounded-lg border-l-4 border-orange-500 bg-orange-50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-zinc-900">
                  {proposal.planName}{" "}
                  <span className="ml-1 rounded bg-orange-500 px-2 py-0.5 text-xs font-semibold text-white">
                    {proposal.validityMonths} month{proposal.validityMonths > 1 ? "s" : ""}
                  </span>
                </p>
                {proposal.planTagline && <p className="text-sm text-zinc-500">{proposal.planTagline}</p>}
              </div>
              <p className="text-xl font-bold text-zinc-900">{formatINR(proposal.subtotal)}</p>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-zinc-700">
              {features.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-orange-500">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Pricing Breakdown
          </h2>
          <table className="mt-3 w-full text-sm">
            <tbody>
              <tr className="border-b border-zinc-100">
                <td className="py-2 text-zinc-600">{proposal.planName} plan</td>
                <td className="py-2 text-right font-medium">{formatINR(proposal.subtotal)}</td>
              </tr>
              <tr className="border-b border-zinc-100">
                <td className="py-2 text-zinc-600">GST ({proposal.gstPercent}%)</td>
                <td className="py-2 text-right font-medium">{formatINR(gstAmount)}</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="py-3 pl-2 font-bold text-blue-900">Total Payable</td>
                <td className="py-3 pr-2 text-right text-lg font-bold text-blue-900">
                  {formatINR(proposal.totalPayable)}
                </td>
              </tr>
            </tbody>
          </table>

          {proposal.paymentInstructions && (
            <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm">
              <p className="font-semibold text-blue-900">Payment Instructions</p>
              <p className="mt-1 whitespace-pre-line text-zinc-700">{proposal.paymentInstructions}</p>
            </div>
          )}

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            KYC Documents Required
          </h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-zinc-700">
            {kycChecklist.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ol>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-500">Terms</h2>
          <p className="mt-2 whitespace-pre-line text-sm text-zinc-600">{proposal.termsText}</p>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Lead Reversal Policy
          </h2>
          <p className="mt-2 whitespace-pre-line text-sm text-zinc-600">{proposal.reversalPolicyText}</p>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Refund Policy
          </h2>
          <p className="mt-2 whitespace-pre-line text-sm text-zinc-600">{proposal.refundPolicyText}</p>
        </div>

        <div className="border-t border-zinc-100 bg-zinc-50 px-8 py-4 text-center text-xs text-zinc-400">
          <p className="font-semibold text-zinc-600">{SITE_NAME}</p>
          <p>
            Prepared by {proposal.preparedBy.name}
            {proposal.agent ? ` · CRM record: ${proposal.agent.companyName}` : ""}
          </p>
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
