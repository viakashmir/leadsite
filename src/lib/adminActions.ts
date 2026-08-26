"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/adminAuth";
import { setAgentSessionCookie } from "@/lib/auth";
import { redirect } from "next/navigation";
import { generateProposalNumber } from "@/lib/proposals";
import { slugify } from "@/lib/slug";
import bcrypt from "bcryptjs";
import {
  DEFAULT_KYC_CHECKLIST,
  DEFAULT_REFUND_POLICY_TEXT,
  DEFAULT_REVERSAL_POLICY_TEXT,
  DEFAULT_TERMS_TEXT,
  getProposalPlan,
} from "@/lib/proposalPlans";

export async function grantAgentCredits(agentId: string, formData: FormData): Promise<{ error?: string }> {
  const admin = await requireAdmin();
  const amount = Number(formData.get("amount"));
  const note = String(formData.get("note") ?? "").trim();

  if (!Number.isFinite(amount) || amount === 0) return { error: "Enter a non-zero amount" };
  if (!note) return { error: "Add a reason for this adjustment" };

  await prisma.$transaction([
    prisma.agent.update({ where: { id: agentId }, data: { credits: { increment: amount } } }),
    prisma.creditTransaction.create({
      data: {
        agentId,
        amount,
        type: amount > 0 ? "BONUS" : "REFUND",
        note: `${note} (by ${admin.name})`,
      },
    }),
    prisma.agentActivity.create({
      data: {
        agentId,
        type: "CREDIT_ADJUSTMENT",
        actor: admin.name,
        detail: `${amount > 0 ? "+" : ""}${amount} credits — ${note}`,
      },
    }),
  ]);

  revalidatePath(`/admin/agents/${agentId}`);
  return {};
}

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

export async function createCreditPack(formData: FormData): Promise<{ error?: string }> {
  await requireAdmin();
  const name = String(formData.get("name") ?? "").trim();
  const amountINR = Number(formData.get("amountINR"));
  const baseCredits = Number(formData.get("baseCredits"));
  const bonusCredits = Number(formData.get("bonusCredits") ?? 0);
  const sortOrder = Number(formData.get("sortOrder") ?? 0);
  const tagline = String(formData.get("tagline") ?? "").trim() || undefined;

  if (!name || !amountINR || !baseCredits) return { error: "Fill in name, price, and credits" };

  await prisma.creditPack.create({
    data: { name, tagline, amountINR, baseCredits, bonusCredits, sortOrder },
  });

  revalidatePath("/admin/credit-packs");
  redirect("/admin/credit-packs");
}

export async function updateCreditPack(packId: string, formData: FormData): Promise<{ error?: string }> {
  await requireAdmin();
  const name = String(formData.get("name") ?? "").trim();
  const amountINR = Number(formData.get("amountINR"));
  const baseCredits = Number(formData.get("baseCredits"));
  const bonusCredits = Number(formData.get("bonusCredits") ?? 0);
  const sortOrder = Number(formData.get("sortOrder") ?? 0);
  const tagline = String(formData.get("tagline") ?? "").trim() || undefined;
  const active = formData.get("active") === "on";

  if (!name || !amountINR || !baseCredits) return { error: "Fill in name, price, and credits" };

  await prisma.creditPack.update({
    where: { id: packId },
    data: { name, tagline, amountINR, baseCredits, bonusCredits, sortOrder, active },
  });

  revalidatePath("/admin/credit-packs");
  redirect("/admin/credit-packs");
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

// ---------- Content CMS: Destinations / Cities / Packages ----------

export async function createDestination(formData: FormData): Promise<{ error?: string }> {
  await requireAdmin();
  const name = String(formData.get("name") ?? "").trim();
  const summary = String(formData.get("summary") ?? "").trim();
  if (!name || !summary) return { error: "Name and summary are required" };

  const state = String(formData.get("state") ?? "").trim() || undefined;
  const country = String(formData.get("country") ?? "India").trim();
  const isInternational = formData.get("isInternational") === "on";
  const heroImage = String(formData.get("heroImage") ?? "").trim() || "/images/destinations/placeholder.jpg";

  const slug = `${slugify(name)}-${Math.random().toString(36).slice(2, 6)}`;

  const destination = await prisma.destination.create({
    data: { slug, name, state, country, isInternational, summary, heroImage },
  });

  revalidatePath("/admin/destinations");
  redirect(`/admin/destinations/${destination.id}`);
}

export async function updateDestination(destinationId: string, formData: FormData): Promise<{ error?: string }> {
  await requireAdmin();
  const name = String(formData.get("name") ?? "").trim();
  const summary = String(formData.get("summary") ?? "").trim();
  if (!name || !summary) return { error: "Name and summary are required" };

  const state = String(formData.get("state") ?? "").trim() || undefined;
  const country = String(formData.get("country") ?? "India").trim();
  const isInternational = formData.get("isInternational") === "on";
  const heroImage = String(formData.get("heroImage") ?? "").trim() || undefined;

  await prisma.destination.update({
    where: { id: destinationId },
    data: { name, summary, state, country, isInternational, heroImage },
  });

  revalidatePath("/admin/destinations");
  revalidatePath(`/admin/destinations/${destinationId}`);
  revalidatePath("/destinations");
  revalidatePath(`/destinations/${destinationId}`);
  return {};
}

export async function createCity(destinationId: string, formData: FormData): Promise<{ error?: string }> {
  await requireAdmin();
  const name = String(formData.get("cityName") ?? "").trim();
  if (!name) return { error: "City name is required" };

  const slug = `${slugify(name)}-${Math.random().toString(36).slice(2, 6)}`;
  await prisma.city.create({ data: { slug, name, destinationId } });

  revalidatePath(`/admin/destinations/${destinationId}`);
  revalidatePath("/destinations");
  return {};
}

export async function deleteCity(cityId: string): Promise<void> {
  await requireAdmin();
  const city = await prisma.city.findUnique({ where: { id: cityId } });
  if (!city) return;
  await prisma.city.delete({ where: { id: cityId } });
  revalidatePath(`/admin/destinations/${city.destinationId}`);
}

export async function createAdminPackage(formData: FormData): Promise<{ error?: string }> {
  await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const destinationId = String(formData.get("destinationId") ?? "");
  const cityId = String(formData.get("cityId") ?? "") || undefined;
  const summary = String(formData.get("summary") ?? "").trim();
  const itinerary = String(formData.get("itinerary") ?? "").trim();
  const durationDays = Number(formData.get("durationDays"));
  const durationNights = Number(formData.get("durationNights"));
  const price = Number(formData.get("price"));
  const theme = String(formData.get("theme") ?? "").trim();
  const heroImage = String(formData.get("heroImage") ?? "").trim() || "/images/packages/placeholder.jpg";
  const published = formData.get("published") === "on";

  if (!title || !destinationId || !summary || !durationDays || !durationNights || !price) {
    return { error: "Please fill in all required fields" };
  }

  const slug = `${slugify(title)}-${Math.random().toString(36).slice(2, 6)}`;

  const pkg = await prisma.package.create({
    data: {
      slug,
      title,
      summary,
      itinerary: itinerary || summary,
      heroImage,
      durationDays,
      durationNights,
      price,
      theme: theme || "General",
      destinationId,
      cityId,
      published,
    },
  });

  revalidatePath("/admin/packages");
  revalidatePath("/packages");
  redirect(`/admin/packages/${pkg.id}`);
}

export async function updateAdminPackage(packageId: string, formData: FormData): Promise<{ error?: string }> {
  await requireAdmin();

  const title = String(formData.get("title") ?? "").trim();
  const destinationId = String(formData.get("destinationId") ?? "");
  const cityId = String(formData.get("cityId") ?? "") || null;
  const summary = String(formData.get("summary") ?? "").trim();
  const itinerary = String(formData.get("itinerary") ?? "").trim();
  const durationDays = Number(formData.get("durationDays"));
  const durationNights = Number(formData.get("durationNights"));
  const price = Number(formData.get("price"));
  const theme = String(formData.get("theme") ?? "").trim();
  const heroImage = String(formData.get("heroImage") ?? "").trim() || undefined;
  const published = formData.get("published") === "on";

  if (!title || !destinationId || !summary || !durationDays || !durationNights || !price) {
    return { error: "Please fill in all required fields" };
  }

  const pkg = await prisma.package.update({
    where: { id: packageId },
    data: {
      title,
      summary,
      itinerary: itinerary || summary,
      heroImage,
      durationDays,
      durationNights,
      price,
      theme: theme || "General",
      destinationId,
      cityId,
      published,
    },
  });

  revalidatePath("/admin/packages");
  revalidatePath("/packages");
  revalidatePath(`/packages/${pkg.slug}`);
  return {};
}

export async function deletePackage(packageId: string): Promise<void> {
  await requireAdmin();
  // Leads sourced from this package (and any agent unlocks paid for on them)
  // must survive the package being removed — only detach the reference.
  await prisma.lead.updateMany({ where: { sourcePackageId: packageId }, data: { sourcePackageId: null } });
  await prisma.package.delete({ where: { id: packageId } });
  revalidatePath("/admin/packages");
  revalidatePath("/packages");
  redirect("/admin/packages");
}

// ---------- Team ----------

export async function createAdminUser(formData: FormData): Promise<{ error?: string }> {
  await requireAdmin();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!name || !email) return { error: "Name and email are required" };
  if (password.length < 6) return { error: "Password must be at least 6 characters" };

  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) return { error: "An admin with this email already exists" };

  await prisma.adminUser.create({
    data: { name, email, passwordHash: await bcrypt.hash(password, 10) },
  });

  revalidatePath("/admin/team");
  return {};
}
