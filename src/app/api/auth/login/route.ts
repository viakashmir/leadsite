import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { agentLoginSchema } from "@/lib/validation";
import { DUMMY_PASSWORD_HASH } from "@/lib/password";
import { clientIp, hit, tooManyRequests } from "@/lib/rateLimit";
import { agentNeedsOnboarding, findAdminByEmail, findAgentByEmail, landingFor, startSession } from "@/lib/signIn";

// Email + password sign-in for both roles. The account the email belongs to
// decides the role (admin accounts first); the response says where to go.
export async function POST(req: NextRequest) {
  if (!hit(`login:${clientIp(req)}`, 20, 10 * 60_000)) return tooManyRequests();

  const body = await req.json().catch(() => null);
  const parsed = agentLoginSchema.safeParse(body ?? {});
  if (!parsed.success) {
    return NextResponse.json({ error: "Enter a valid email and password" }, { status: 400 });
  }
  const { email, password } = parsed.data;
  if (!hit(`login:${email}`, 8, 10 * 60_000)) return tooManyRequests();
  const next = typeof body?.next === "string" ? body.next : null;

  const admin = await findAdminByEmail(email);
  if (admin) {
    if (!(await bcrypt.compare(password, admin.passwordHash))) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }
    await startSession("admin", admin);
    return NextResponse.json({ ok: true, redirect: landingFor("admin", next) });
  }

  const agent = await findAgentByEmail(email);
  const valid = await bcrypt.compare(password, agent?.passwordHash ?? DUMMY_PASSWORD_HASH);
  if (!agent || !valid) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }
  if (agent.status === "SUSPENDED") {
    return NextResponse.json({ error: "This account has been suspended. Please contact support." }, { status: 403 });
  }

  await startSession("agent", agent);
  return NextResponse.json({
    ok: true,
    redirect: landingFor("agent", next, { needsOnboarding: agentNeedsOnboarding(agent) }),
  });
}
