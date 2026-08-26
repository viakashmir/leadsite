import { NextResponse } from "next/server";
import { getAgentSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getAgentSession();
  if (!session) return NextResponse.json({ agent: null });

  const agent = await prisma.agent.findUnique({
    where: { id: session.agentId },
    select: { companyName: true },
  });
  return NextResponse.json({ agent: agent ? { companyName: agent.companyName } : null });
}
