import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { AGENT_AUDIENCE, getJwtSecret } from "@/lib/jwtSecret";

const COOKIE_NAME = "agent_session";

export type AgentSessionPayload = {
  agentId: string;
  email: string;
};

export function signAgentSession(payload: AgentSessionPayload): string {
  return jwt.sign({ agentId: payload.agentId, email: payload.email }, getJwtSecret(), {
    expiresIn: "30d",
    audience: AGENT_AUDIENCE,
  });
}

export async function setAgentSessionCookie(payload: AgentSessionPayload) {
  const token = signAgentSession(payload);
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

export async function requireAgent() {
  const session = await getAgentSession();
  if (!session) redirect("/agent/login?next=/agent/dashboard");

  const agent = await prisma.agent.findUnique({ where: { id: session.agentId } });
  if (!agent) redirect("/agent/login?next=/agent/dashboard");
  // Suspension takes effect immediately, even for sessions issued before it.
  if (agent.status === "SUSPENDED") redirect("/agent/login?suspended=1");

  return agent;
}
