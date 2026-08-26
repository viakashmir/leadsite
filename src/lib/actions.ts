"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAgent } from "@/lib/auth";
import { slugify } from "@/lib/slug";

export async function unlockLead(leadId: string): Promise<{ error?: string }> {
  const agent = await requireAgent();

  const lead = await prisma.lead.findUnique({
    where: { id: leadId },
    include: { _count: { select: { unlocks: true } } },
  });
  if (!lead) return { error: "Lead not found" };

  const already = await prisma.leadUnlock.findUnique({
    where: { agentId_leadId: { agentId: agent.id, leadId } },
  });
  if (already) return {};

  if (lead._count.unlocks >= lead.maxUnlocks) {
    return { error: "This lead has already been unlocked by the maximum number of agents" };
  }

  if (agent.credits < lead.unlockPrice) {
    return { error: "Not enough credits. Please top up your wallet." };
  }

  await prisma.$transaction([
    prisma.agent.update({
      where: { id: agent.id },
      data: { credits: { decrement: lead.unlockPrice } },
    }),
    prisma.leadUnlock.create({
      data: { agentId: agent.id, leadId, creditsSpent: lead.unlockPrice },
    }),
    prisma.creditTransaction.create({
      data: {
        agentId: agent.id,
        amount: -lead.unlockPrice,
        type: "UNLOCK_SPEND",
        note: `Unlocked lead ${leadId}`,
      },
    }),
    prisma.leadActivity.create({
      data: {
        leadId,
        type: "UNLOCKED",
        actor: agent.companyName,
        detail: `Contact unlocked for ${lead.unlockPrice} credits`,
      },
    }),
  ]);

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
  revalidatePath("/packages");
  redirect("/agent/dashboard/packages");
}
