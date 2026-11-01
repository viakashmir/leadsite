import crypto from "crypto";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { AGENT_AUDIENCE, getJwtSecret } from "@/lib/jwtSecret";

const COOKIE_NAME = "agent_session";

export type AgentSessionPayload = {
  agentId: string;
  email: string;
  // Fingerprint of the password hash the session was issued against. When the
  // password changes (e.g. the real owner claims the email with Google), every
  // older session stops working.
  pv?: string;
};

export function passwordVersion(passwordHash: string): string {
  return crypto.createHash("sha256").update(passwordHash).digest("hex").slice(0, 16);
}

export function signAgentSession(agent: { id: string; email: string; passwordHash: string }): string {
  const payload: AgentSessionPayload = { agentId: agent.id, email: agent.email, pv: passwordVersion(agent.passwordHash) };
  return jwt.sign(payload, getJwtSecret(), {
    expiresIn: "30d",
    audience: AGENT_AUDIENCE,
  });
}

export async function setAgentSessionCookie(agent: { id: string; email: string; passwordHash: string }) {
  const token = signAgentSession(agent);
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function clearAgentSessionCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function getAgentSession(): Promise<AgentSessionPayload | null> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, getJwtSecret(), { audience: AGENT_AUDIENCE }) as AgentSessionPayload;
    return typeof decoded.agentId === "string" ? decoded : null;
  } catch {
    return null;
  }
}

/**
 * The agent behind the session cookie, checked against the database: null if
 * the account is gone or its password changed after the session was issued.
 * Pages that redirect signed-in visitors must use this, not the bare cookie,
 * or a stale cookie bounces between /login and the dashboard forever.
 */
export async function getSignedInAgent() {
  const session = await getAgentSession();
  if (!session) return null;
  const agent = await prisma.agent.findUnique({ where: { id: session.agentId } });
  if (!agent || session.pv !== passwordVersion(agent.passwordHash)) return null;
  return agent;
}

/** Signed-in, non-suspended agent, whether or not onboarding is finished. */
export async function requireAgentAccount() {
  const agent = await getSignedInAgent();
  if (!agent) redirect("/login?next=/agent/dashboard");
  // Suspension takes effect immediately, even for sessions issued before it.
  if (agent.status === "SUSPENDED") redirect("/login?suspended=1");

  return agent;
}

/** Agent pages: also sends Google sign-ups to add their phone and company first. */
export async function requireAgent() {
  const agent = await requireAgentAccount();
  if (!agent.phone.trim() || !agent.companyName.trim()) redirect("/agent/onboarding");
  return agent;
}
