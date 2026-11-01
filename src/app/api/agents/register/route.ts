import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { agentRegisterSchema } from "@/lib/validation";
import { AGENT_HOME, findAdminByEmail, startSession } from "@/lib/signIn";
import { clientIp, hit, tooManyRequests } from "@/lib/rateLimit";

const SIGNUP_BONUS_CREDITS = 500;

export async function POST(req: NextRequest) {
  // Each signup carries bonus credits, so throttle mass account creation.
  if (!hit(`register:${clientIp(req)}`, 5, 60 * 60_000)) return tooManyRequests();

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = agentRegisterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Please check the form and try again" },
      { status: 400 },
    );
  }

  const data = parsed.data;

  const existing = await prisma.agent.findFirst({
    where: { email: { equals: data.email, mode: "insensitive" } },
    select: { id: true },
  });
  if (existing || (await findAdminByEmail(data.email))) {
    return NextResponse.json({ error: "An account with this email already exists" }, { status: 409 });
  }

  const destinations = data.destinationIds.length
    ? await prisma.destination.findMany({ where: { id: { in: data.destinationIds } }, select: { id: true } })
    : [];

  const passwordHash = await bcrypt.hash(data.password, 10);

  const agent = await prisma.agent.create({
    data: {
      email: data.email,
      passwordHash,
      companyName: data.companyName,
      contactName: data.contactName,
      phone: data.phone,
      servicesWanted: JSON.stringify(data.servicesWanted),
      dailyLeadTarget: data.dailyLeadTarget,
      officeAddress: data.officeAddress || undefined,
      officeCity: data.officeCity || undefined,
      officeState: data.officeState || undefined,
      gstNumber: data.gstNumber || undefined,
      companySince: data.companySince,
      teamSize: data.teamSize,
      companyType: data.companyType,
      facebookUrl: data.facebookUrl || undefined,
      instagramUrl: data.instagramUrl || undefined,
      credits: SIGNUP_BONUS_CREDITS,
      destinations: {
        create: destinations.map((d) => ({ destinationId: d.id })),
      },
      transactions: {
        create: {
          amount: SIGNUP_BONUS_CREDITS,
          type: "BONUS",
          note: "Welcome bonus credits",
        },
      },
      activities: {
        create: {
          type: "REGISTRATION",
          actor: "System",
          detail: `Registered with email. Destinations: ${destinations.length}.`,
        },
      },
    },
  });

  await startSession("agent", agent);

  return NextResponse.json({ ok: true, agentId: agent.id, redirect: AGENT_HOME }, { status: 201 });
}
