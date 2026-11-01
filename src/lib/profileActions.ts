"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireAgent, requireAgentAccount } from "@/lib/auth";
import { agentOnboardingSchema, agentProfileSchema } from "@/lib/validation";
import { after } from "next/server";
import { AGENT_HOME, SIGNUP_BONUS_CREDITS, agentNeedsOnboarding } from "@/lib/signIn";
import { notifyAgentRegistered } from "@/lib/email/agentNotifications";

export type FormResult = { error?: string; ok?: boolean };

const str = (fd: FormData, k: string) => String(fd.get(k) ?? "");

export async function completeOnboarding(_prev: FormResult, fd: FormData): Promise<FormResult> {
  const agent = await requireAgentAccount();
  const parsed = agentOnboardingSchema.safeParse({
    contactName: str(fd, "contactName"),
    companyName: str(fd, "companyName"),
    phone: str(fd, "phone"),
  });
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Please check the form" };

  const firstTime = agentNeedsOnboarding(agent);
  await prisma.agent.update({ where: { id: agent.id }, data: parsed.data });
  // Google sign-ups get their welcome + admin signup alert here, once the
  // company name and phone the emails need are filled in.
  if (firstTime) after(() => notifyAgentRegistered(agent.id, SIGNUP_BONUS_CREDITS));
  redirect(AGENT_HOME);
}

export async function updateAgentProfile(_prev: FormResult, fd: FormData): Promise<FormResult> {
  const agent = await requireAgent();
  const parsed = agentProfileSchema.safeParse({
    contactName: str(fd, "contactName"),
    companyName: str(fd, "companyName"),
    phone: str(fd, "phone"),
    servicesWanted: fd.getAll("servicesWanted").map(String),
    destinationIds: fd.getAll("destinationIds").map(String),
    dailyLeadTarget: str(fd, "dailyLeadTarget") || 10,
    officeAddress: str(fd, "officeAddress"),
    officeCity: str(fd, "officeCity"),
    officeState: str(fd, "officeState"),
    gstNumber: str(fd, "gstNumber"),
    companySince: str(fd, "companySince") || undefined,
    teamSize: str(fd, "teamSize") || undefined,
    companyType: str(fd, "companyType") || undefined,
    facebookUrl: str(fd, "facebookUrl"),
    instagramUrl: str(fd, "instagramUrl"),
  });
  if (!parsed.success) return { error: parsed.error.issues[0]?.message ?? "Please check the form" };
  const d = parsed.data;

  const destinations = d.destinationIds.length
    ? await prisma.destination.findMany({ where: { id: { in: d.destinationIds } }, select: { id: true } })
    : [];

  await prisma.$transaction([
    prisma.agent.update({
      where: { id: agent.id },
      data: {
        contactName: d.contactName,
        companyName: d.companyName,
        phone: d.phone,
        servicesWanted: JSON.stringify(d.servicesWanted),
        dailyLeadTarget: d.dailyLeadTarget,
        officeAddress: d.officeAddress || null,
        officeCity: d.officeCity || null,
        officeState: d.officeState || null,
        gstNumber: d.gstNumber || null,
        companySince: d.companySince ?? null,
        teamSize: d.teamSize ?? null,
        companyType: d.companyType ?? null,
        facebookUrl: d.facebookUrl || null,
        instagramUrl: d.instagramUrl || null,
      },
    }),
    prisma.agentDestination.deleteMany({ where: { agentId: agent.id } }),
    prisma.agentDestination.createMany({
      data: destinations.map((x) => ({ agentId: agent.id, destinationId: x.id })),
    }),
  ]);

  revalidatePath("/agent/dashboard", "layout");
  return { ok: true };
}
