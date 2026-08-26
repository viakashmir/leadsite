import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret-change-in-production-please";
const COOKIE_NAME = "agent_session";

export type AgentSessionPayload = {
  agentId: string;
  email: string;
};

export function signAgentSession(payload: AgentSessionPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "30d" });
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
    return jwt.verify(token, JWT_SECRET) as AgentSessionPayload;
  } catch {
    return null;
  }
}

export async function requireAgent() {
  const session = await getAgentSession();
  if (!session) redirect("/agent/login?next=/agent/dashboard");

  const agent = await prisma.agent.findUnique({ where: { id: session.agentId } });
  if (!agent) redirect("/agent/login?next=/agent/dashboard");

  return agent;
}
