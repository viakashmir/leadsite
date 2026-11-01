import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { agentLoginSchema } from "@/lib/validation";
import { setAgentSessionCookie } from "@/lib/auth";
import { DUMMY_PASSWORD_HASH } from "@/lib/password";
import { clientIp, hit, tooManyRequests } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  if (!hit(`agent-login:${ip}`, 20, 10 * 60_000)) return tooManyRequests();

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = agentLoginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Enter a valid email and password" }, { status: 400 });
  }
  if (!hit(`agent-login:${parsed.data.email}`, 10, 10 * 60_000)) return tooManyRequests();

  // Emails used to be stored as typed, so match case-insensitively.
  const agent = await prisma.agent.findFirst({
    where: { email: { equals: parsed.data.email, mode: "insensitive" } },
  });

  const valid = await bcrypt.compare(parsed.data.password, agent?.passwordHash ?? DUMMY_PASSWORD_HASH);
  if (!agent || !valid) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }

  if (agent.status === "SUSPENDED") {
    return NextResponse.json({ error: "This account has been suspended. Please contact support." }, { status: 403 });
  }

  await setAgentSessionCookie({ agentId: agent.id, email: agent.email });

  return NextResponse.json({ ok: true });
}
