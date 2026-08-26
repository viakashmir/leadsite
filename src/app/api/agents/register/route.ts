import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { agentRegisterSchema } from "@/lib/validation";
import { setAgentSessionCookie } from "@/lib/auth";

const SIGNUP_BONUS_CREDITS = 500;

export async function POST(req: NextRequest) {
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

  const existing = await prisma.agent.findUnique({ where: { email: data.email } });
  if (existing) {
    return NextResponse.json({ error: "An account with this email already exists" }, { status: 409 });
  }

  const destinations = await prisma.destination.findMany({
    where: { id: { in: data.destinationIds } },
    select: { id: true },
  });
  if (destinations.length === 0) {
    return NextResponse.json({ error: "Select at least one valid destination" }, { status: 400 });
  }

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
          detail: `Registered via free signup. Destinations: ${destinations.length}. Daily lead target: ${data.dailyLeadTarget}.`,
        },
      },
    },
  });

  await setAgentSessionCookie({ agentId: agent.id, email: agent.email });

  return NextResponse.json({ ok: true, agentId: agent.id }, { status: 201 });
}
