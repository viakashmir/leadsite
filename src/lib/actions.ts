"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAgent } from "@/lib/auth";
import { slugify } from "@/lib/slug";
import { agentPackageSchema } from "@/lib/validation";

export async function unlockLead(leadId: string): Promise<{ error?: string }> {
  const agent = await requireAgent();
  if (typeof leadId !== "string" || !leadId || leadId.length > 64) return { error: "Lead not found" };

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

    // Agents only buy leads for destinations they serve; the leads page only
    // lists those, but the action itself is callable with any lead id.
    const serves = await tx.agentDestination.findUnique({
      where: { agentId_destinationId: { agentId: agent.id, destinationId: lead.destinationId } },
      select: { id: true },
    });
    if (!serves) return { error: "This lead is outside the destinations you serve." };

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

  const parsed = agentPackageSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please fill in all required fields" };
  }
  const { title, destinationId, summary, itinerary, durationDays, durationNights, price, theme } = parsed.data;
  if (durationNights > durationDays) return { error: "Nights can't be more than days" };

  const destination = await prisma.destination.findUnique({ where: { id: destinationId } });
  if (!destination) return { error: "Unknown destination" };

  const city = parsed.data.cityId
    ? await prisma.city.findFirst({ where: { id: parsed.data.cityId, destinationId }, select: { id: true } })
    : null;
  if (parsed.data.cityId && !city) return { error: "That city isn't part of the chosen destination" };

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
      cityId: city?.id,
      agentId: agent.id,
      // Packages from agents an admin hasn't verified yet stay off the public
      // site until approved; admins can publish them from /admin/packages.
      published: agent.status === "ACTIVE",
    },
  });

  revalidatePath("/agent/dashboard/packages");
  revalidatePath("/tour-packages");
  redirect("/agent/dashboard/packages");
}
