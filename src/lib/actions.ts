"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAgent } from "@/lib/auth";
import { slugify } from "@/lib/slug";

export async function unlockLead(leadId: string): Promise<{ error?: string }> {
  const agent = await requireAgent();

  // Only agents an admin has approved can see contacts; the public site
  // promises travellers "verified" agents.
  if (agent.status !== "ACTIVE") {
    return { error: "Your account is awaiting verification. You can unlock leads once it is approved." };
  }

  const result = await prisma.$transaction(async (tx) => {
    // Row lock so concurrent unlocks of the same lead are serialised and the
    // 3-agent cap holds.
    await tx.$queryRaw`SELECT id FROM "Lead" WHERE id = ${leadId} FOR UPDATE`;

    const lead = await tx.lead.findUnique({
      where: { id: leadId },
      include: { _count: { select: { unlocks: true } } },
    });
    if (!lead) return { error: "Lead not found" };

    const already = await tx.leadUnlock.findUnique({
      where: { agentId_leadId: { agentId: agent.id, leadId } },
    });
    if (already) return {};

    if (lead._count.unlocks >= lead.maxUnlocks) {
      return { error: "This lead has already been unlocked by the maximum number of agents" };
    }

    // Conditional decrement: fails instead of going negative if two unlocks race.
    const charged = await tx.agent.updateMany({
      where: { id: agent.id, credits: { gte: lead.unlockPrice } },
      data: { credits: { decrement: lead.unlockPrice } },
    });
    if (charged.count === 0) return { error: "Not enough credits. Please top up your wallet." };

    await tx.leadUnlock.create({
      data: { agentId: agent.id, leadId, creditsSpent: lead.unlockPrice },
    });
    await tx.creditTransaction.create({
      data: {
        agentId: agent.id,
        amount: -lead.unlockPrice,
        type: "UNLOCK_SPEND",
        note: `Unlocked lead ${leadId}`,
      },
    });
    await tx.leadActivity.create({
      data: {
        leadId,
        type: "UNLOCKED",
        actor: agent.companyName,
        detail: `Contact unlocked for ${lead.unlockPrice} credits`,
      },
    });
    return {};
  });
  if (result.error) return result;

  revalidatePath("/agent/dashboard/leads");
  revalidatePath("/agent/dashboard");
  return {};
}

export async function createAgentPackage(formData: FormData): Promise<{ error?: string }> {
  const agent = await requireAgent();

  const title = String(formData.get("title") ?? "").trim();
  const destinationId = String(formData.get("destinationId") ?? "");
  const cityId = String(formData.get("cityId") ?? "") || undefined;
  const summary = String(formData.get("summary") ?? "").trim();
  const itinerary = String(formData.get("itinerary") ?? "").trim();
  const durationDays = Number(formData.get("durationDays"));
  const durationNights = Number(formData.get("durationNights"));
  const price = Number(formData.get("price"));
  const theme = String(formData.get("theme") ?? "").trim();

  if (!title || !destinationId || !summary || !durationDays || !durationNights || !price) {
    return { error: "Please fill in all required fields" };
  }

  const destination = await prisma.destination.findUnique({ where: { id: destinationId } });
  if (!destination) return { error: "Unknown destination" };

  const baseSlug = slugify(title);
  const slug = `${baseSlug}-${Math.random().toString(36).slice(2, 7)}`;

  await prisma.package.create({
    data: {
      slug,
      title,
      summary,
      itinerary: itinerary || summary,
      heroImage: "/images/packages/placeholder.jpg",
      durationDays,
      durationNights,
      price,
      theme: theme || "General",
      destinationId,
      cityId,
      agentId: agent.id,
    },
  });

  revalidatePath("/agent/dashboard/packages");
  revalidatePath("/tour-packages");
  redirect("/agent/dashboard/packages");
}
