"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/adminAuth";
import { setAgentSessionCookie } from "@/lib/auth";
import { redirect } from "next/navigation";
import { generateProposalNumber } from "@/lib/proposals";
import {
  DEFAULT_KYC_CHECKLIST,
  DEFAULT_REFUND_POLICY_TEXT,
  DEFAULT_REVERSAL_POLICY_TEXT,
  DEFAULT_TERMS_TEXT,
  getProposalPlan,
} from "@/lib/proposalPlans";

export async function addAgentNote(agentId: string, formData: FormData): Promise<{ error?: string }> {
  const admin = await requireAdmin();
  const body = String(formData.get("body") ?? "").trim();
  if (!body) return { error: "Note can't be empty" };

  await prisma.$transaction([
    prisma.agentNote.create({ data: { agentId, authorId: admin.id, body } }),
    prisma.agentActivity.create({
      data: { agentId, type: "TALKED", actor: admin.name, detail: body },
    }),
  ]);

  revalidatePath(`/admin/agents/${agentId}`);
  return {};
}

export async function updateAgentStatus(agentId: string, formData: FormData): Promise<void> {
  const admin = await requireAdmin();
  const status = String(formData.get("status") ?? "");
  if (!["PENDING", "ACTIVE", "SUSPENDED"].includes(status)) return;

  await prisma.$transaction([
    prisma.agent.update({ where: { id: agentId }, data: { status: status as never } }),
    prisma.agentActivity.create({
      data: { agentId, type: "STATUS_CHANGE", actor: admin.name, detail: `Status changed to ${status}` },
    }),
  ]);

  revalidatePath(`/admin/agents/${agentId}`);
  revalidatePath("/admin/agents");
}

export async function assignAgentRm(agentId: string, formData: FormData): Promise<void> {
  const admin = await requireAdmin();
  const rmId = String(formData.get("rmId") ?? "") || null;

  const rm = rmId ? await prisma.adminUser.findUnique({ where: { id: rmId } }) : null;

  await prisma.$transaction([
    prisma.agent.update({ where: { id: agentId }, data: { assignedRmId: rmId } }),
    prisma.agentActivity.create({
      data: {
        agentId,
        type: "RM_ASSIGNED",
        actor: admin.name,
        detail: rm ? `Assigned RM: ${rm.name}` : "RM unassigned",
      },
    }),
  ]);

  revalidatePath(`/admin/agents/${agentId}`);
  revalidatePath("/admin/agents");
}

export async function loginAsAgent(agentId: string) {
  const admin = await requireAdmin();
  const agent = await prisma.agent.findUnique({ where: { id: agentId } });
  if (!agent) return;

  await prisma.agentActivity.create({
    data: { agentId, type: "LOGIN", actor: admin.name, detail: `Impersonated by admin ${admin.name}` },
  });

  await setAgentSessionCookie({ agentId: agent.id, email: agent.email });
  redirect("/agent/dashboard");
}

export async function addLeadNote(leadId: string, formData: FormData): Promise<{ error?: string }> {
  const admin = await requireAdmin();
  const body = String(formData.get("body") ?? "").trim();
  if (!body) return { error: "Note can't be empty" };

  await prisma.$transaction([
    prisma.leadNote.create({ data: { leadId, authorId: admin.id, body } }),
    prisma.leadActivity.create({
      data: { leadId, type: "TALKED", actor: admin.name, detail: body },
    }),
  ]);

  revalidatePath(`/admin/leads/${leadId}`);
  return {};
}

export async function updateLeadStatus(leadId: string, formData: FormData): Promise<void> {
  const admin = await requireAdmin();
  const status = String(formData.get("status") ?? "");
  if (!["NEW", "VERIFIED", "BOOKED", "STALE"].includes(status)) return;

  await prisma.$transaction([
    prisma.lead.update({
      where: { id: leadId },
      data: { status: status as never, verified: status === "VERIFIED" || status === "BOOKED" },
    }),
    prisma.leadActivity.create({
      data: { leadId, type: "STATUS_CHANGE", actor: admin.name, detail: `Status changed to ${status}` },
    }),
  ]);

  revalidatePath(`/admin/leads/${leadId}`);
  revalidatePath("/admin/leads");
}

export async function createProposal(formData: FormData): Promise<{ error?: string }> {
  const admin = await requireAdmin();

  const planId = String(formData.get("planId") ?? "");
  const plan = getProposalPlan(planId);
  if (!plan) return { error: "Select a plan" };

  const agentId = String(formData.get("agentId") ?? "") || null;
  const prospectName = String(formData.get("prospectName") ?? "").trim();
  if (!prospectName) return { error: "Prospect name is required" };

  const walletCredits = Number(formData.get("walletCredits") ?? plan.walletCredits);
  const priceINR = Number(formData.get("priceINR") ?? plan.priceINR);
  const validityMonths = Number(formData.get("validityMonths") ?? plan.validityMonths);
  const domesticLeadPrice = Number(formData.get("domesticLeadPrice") ?? plan.domesticLeadPrice);
  const internationalLeadPrice = Number(
    formData.get("internationalLeadPrice") ?? plan.internationalLeadPrice,
  );
  const gstPercent = Number(formData.get("gstPercent") ?? 18);
  const validDays = Number(formData.get("validDays") ?? 7);

  const featuresRaw = String(formData.get("features") ?? plan.features.join("\n"));
  const features = featuresRaw.split("\n").map((f) => f.trim()).filter(Boolean);

  const kycRaw = String(formData.get("kycChecklist") ?? DEFAULT_KYC_CHECKLIST.join("\n"));
  const kycChecklist = kycRaw.split("\n").map((f) => f.trim()).filter(Boolean);

  const subtotal = priceINR;
  const gstAmount = Math.round((subtotal * gstPercent) / 100);
  const totalPayable = subtotal + gstAmount;

  const proposalNumber = await generateProposalNumber();
  const validTill = new Date(Date.now() + validDays * 24 * 60 * 60 * 1000);

  const proposal = await prisma.proposal.create({
    data: {
      proposalNumber,
      agentId,
      prospectName,
      prospectCompany: String(formData.get("prospectCompany") ?? "") || undefined,
      prospectEmail: String(formData.get("prospectEmail") ?? "") || undefined,
      prospectPhone: String(formData.get("prospectPhone") ?? "") || undefined,
      preparedById: admin.id,
      planName: plan.name,
      planTagline: plan.tagline,
      walletCredits,
      validityMonths,
      domesticLeadPrice,
      internationalLeadPrice,
      features: JSON.stringify(features),
      subtotal,
      gstPercent,
      totalPayable,
      paymentInstructions: String(formData.get("paymentInstructions") ?? "") || undefined,
      kycChecklist: JSON.stringify(kycChecklist),
      termsText: String(formData.get("termsText") ?? DEFAULT_TERMS_TEXT),
      reversalPolicyText: String(formData.get("reversalPolicyText") ?? DEFAULT_REVERSAL_POLICY_TEXT),
      refundPolicyText: String(formData.get("refundPolicyText") ?? DEFAULT_REFUND_POLICY_TEXT),
      validTill,
    },
  });

  if (agentId) {
    await prisma.agentActivity.create({
      data: {
        agentId,
        type: "PROPOSAL_SENT",
        actor: admin.name,
        detail: `Proposal ${proposalNumber} (${plan.name}) generated`,
      },
    });
  }

  redirect(`/admin/proposals/${proposal.id}`);
}

export async function updateProposalStatus(
  proposalId: string,
  formData: FormData,
): Promise<{ error?: string }> {
  await requireAdmin();
  const status = String(formData.get("status") ?? "");
  if (!["DRAFT", "SENT", "ACCEPTED", "EXPIRED"].includes(status)) return { error: "Invalid status" };

  await prisma.proposal.update({ where: { id: proposalId }, data: { status: status as never } });
  revalidatePath(`/admin/proposals/${proposalId}`);
  revalidatePath("/admin/proposals");
  return {};
}
