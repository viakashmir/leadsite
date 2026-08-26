"use client";

import { useState } from "react";
import { useActionState } from "react";
import { createProposal } from "@/lib/adminActions";
import {
  DEFAULT_KYC_CHECKLIST,
  DEFAULT_REFUND_POLICY_TEXT,
  DEFAULT_REVERSAL_POLICY_TEXT,
  DEFAULT_TERMS_TEXT,
  PROPOSAL_PLANS,
} from "@/lib/proposalPlans";

type Agent = { id: string; companyName: string; contactName: string; email: string; phone: string };

export default function ProposalForm({
  agents,
  defaultAgentId,
}: {
  agents: Agent[];
  defaultAgentId?: string;
}) {
  const [state, formAction, pending] = useActionState(
    async (_prev: { error?: string }, formData: FormData) => createProposal(formData),
    {} as { error?: string },
  );

  const [planId, setPlanId] = useState(PROPOSAL_PLANS[0].id);
  const plan = PROPOSAL_PLANS.find((p) => p.id === planId)!;

  const [agentId, setAgentId] = useState(defaultAgentId ?? "");
  const selectedAgent = agents.find((a) => a.id === agentId);

  return (
    <form action={formAction} className="max-w-3xl space-y-6">
      <section className="rounded-lg border border-zinc-200 bg-white p-5">
        <h2 className="font-semibold text-zinc-900">Prospect</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <select
            name="agentId"
            value={agentId}
            onChange={(e) => setAgentId(e.target.value)}
            className="col-span-2 rounded-md border border-zinc-300 px-3 py-2 text-sm"
          >
            <option value="">Not an existing agent (new prospect)</option>
            {agents.map((a) => (
              <option key={a.id} value={a.id}>
                {a.companyName} — {a.contactName}
              </option>
            ))}
          </select>
          <input
            name="prospectName"
            required
            defaultValue={selectedAgent?.contactName ?? ""}
            key={`name-${agentId}`}
            placeholder="Contact name"
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            name="prospectCompany"
            defaultValue={selectedAgent?.companyName ?? ""}
            key={`company-${agentId}`}
            placeholder="Company name"
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            name="prospectEmail"
            defaultValue={selectedAgent?.email ?? ""}
            key={`email-${agentId}`}
            placeholder="Email"
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            name="prospectPhone"
            defaultValue={selectedAgent?.phone ?? ""}
            key={`phone-${agentId}`}
            placeholder="Phone"
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </div>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-5">
        <h2 className="font-semibold text-zinc-900">Plan</h2>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {PROPOSAL_PLANS.map((p) => (
            <button
              type="button"
              key={p.id}
              onClick={() => setPlanId(p.id)}
              className={`rounded-lg border p-3 text-left text-sm ${
                p.id === planId ? "border-blue-600 bg-blue-50" : "border-zinc-200"
              }`}
            >
              <p className="font-semibold text-zinc-900">{p.name}</p>
              <p className="text-xs text-zinc-500">₹{p.priceINR.toLocaleString("en-IN")}</p>
            </button>
          ))}
        </div>
        <input type="hidden" name="planId" value={planId} />

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <label className="text-xs text-zinc-500">
            Price (INR)
            <input
              name="priceINR"
              type="number"
              key={`price-${planId}`}
              defaultValue={plan.priceINR}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-zinc-500">
            Wallet Credits
            <input
              name="walletCredits"
              type="number"
              key={`credits-${planId}`}
              defaultValue={plan.walletCredits}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-zinc-500">
            Validity (months)
            <input
              name="validityMonths"
              type="number"
              key={`validity-${planId}`}
              defaultValue={plan.validityMonths}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-zinc-500">
            Domestic Lead Price
            <input
              name="domesticLeadPrice"
              type="number"
              key={`dom-${planId}`}
              defaultValue={plan.domesticLeadPrice}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-zinc-500">
            International Lead Price
            <input
              name="internationalLeadPrice"
              type="number"
              key={`intl-${planId}`}
              defaultValue={plan.internationalLeadPrice}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-zinc-500">
            GST %
            <input
              name="gstPercent"
              type="number"
              defaultValue={18}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>
          <label className="text-xs text-zinc-500">
            Valid for (days)
            <input
              name="validDays"
              type="number"
              defaultValue={7}
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>
        </div>

        <label className="mt-3 block text-xs text-zinc-500">
          Features (one per line)
          <textarea
            name="features"
            key={`features-${planId}`}
            defaultValue={plan.features.join("\n")}
            rows={6}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-5">
        <h2 className="font-semibold text-zinc-900">Payment &amp; Policies</h2>
        <label className="mt-3 block text-xs text-zinc-500">
          Payment instructions (bank / UPI details, shown on the proposal)
          <textarea
            name="paymentInstructions"
            rows={3}
            placeholder="e.g. Bank transfer to Account Name / Number / IFSC, or UPI ID"
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
        <label className="mt-3 block text-xs text-zinc-500">
          KYC checklist (one per line)
          <textarea
            name="kycChecklist"
            defaultValue={DEFAULT_KYC_CHECKLIST.join("\n")}
            rows={5}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
        <label className="mt-3 block text-xs text-zinc-500">
          Terms
          <textarea
            name="termsText"
            defaultValue={DEFAULT_TERMS_TEXT}
            rows={4}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
        <label className="mt-3 block text-xs text-zinc-500">
          Lead Reversal Policy
          <textarea
            name="reversalPolicyText"
            defaultValue={DEFAULT_REVERSAL_POLICY_TEXT}
            rows={3}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
        <label className="mt-3 block text-xs text-zinc-500">
          Refund Policy
          <textarea
            name="refundPolicyText"
            defaultValue={DEFAULT_REFUND_POLICY_TEXT}
            rows={3}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
      </section>

      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
      >
        {pending ? "Generating..." : "Generate Proposal"}
      </button>
    </form>
  );
}
