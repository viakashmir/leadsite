import crypto from "crypto";
import bcrypt from "bcryptjs";
import { WELCOME_CREDITS } from "@/lib/credits";
import { prisma } from "@/lib/prisma";
import { setAgentSessionCookie, clearAgentSessionCookie } from "@/lib/auth";
import { setAdminSessionCookie, clearAdminSessionCookie } from "@/lib/adminAuth";
import { safeNextPath } from "@/lib/safeRedirect";

// One sign-in for everyone. The role is decided here on the server, from the
// email address, never chosen by the person signing in:
//   - an AdminUser row with that email, or an address listed in ADMIN_EMAILS,
//     signs in as Admin;
//   - anyone else signs in as a Travel Agent (created on first Google sign-in).

export type Role = "admin" | "agent";

export const ADMIN_HOME = "/admin/agents";
export const AGENT_HOME = "/agent/dashboard/profile";
export const AGENT_ONBOARDING = "/agent/onboarding";

export const SIGNUP_BONUS_CREDITS = WELCOME_CREDITS;

/** Comma-separated ADMIN_EMAILS, lower-cased. */
export function adminEmailAllowlist(): string[] {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

export function findAdminByEmail(email: string) {
  return prisma.adminUser.findFirst({ where: { email: { equals: email, mode: "insensitive" } } });
}

export function findAgentByEmail(email: string) {
  return prisma.agent.findFirst({ where: { email: { equals: email, mode: "insensitive" } } });
}

/** Admin pages only; agent `next` paths are ignored for admins and vice versa. */
export function landingFor(role: Role, next: string | null | undefined, opts: { needsOnboarding?: boolean } = {}) {
  if (role === "admin") {
    const target = safeNextPath(next, ADMIN_HOME);
    return target.startsWith("/admin") ? target : ADMIN_HOME;
  }
  if (opts.needsOnboarding) return AGENT_ONBOARDING;
  const target = safeNextPath(next, AGENT_HOME);
  return target.startsWith("/agent/dashboard") ? target : AGENT_HOME;
}

/** Signing in as one role ends any session of the other role in this browser. */
export async function startSession(role: Role, user: { id: string; email: string; passwordHash: string }) {
  if (role === "admin") {
    await clearAgentSessionCookie();
    await setAdminSessionCookie({ adminId: user.id, email: user.email });
  } else {
    await clearAdminSessionCookie();
    await setAgentSessionCookie(user);
  }
}

/** Agents created by Google sign-in fill in phone and company on first visit. */
export function agentNeedsOnboarding(agent: { phone: string; companyName: string }) {
  return !agent.phone.trim() || !agent.companyName.trim();
}

/**
 * Resolves a Google-verified email to an admin or agent, creating the agent
 * (or an allowlisted admin) on first sign-in.
 */
export async function resolveGoogleUser(profile: { email: string; name: string }) {
  const email = profile.email.toLowerCase();

  const admin = await findAdminByEmail(email);
  if (admin) return { role: "admin" as const, user: admin, needsOnboarding: false, suspended: false };

  if (adminEmailAllowlist().includes(email)) {
    const created = await prisma.adminUser.create({
      data: {
        email,
        name: profile.name || email.split("@")[0]!,
        // Google-only admin: no usable password until one is set by another admin.
        passwordHash: await bcrypt.hash(crypto.randomBytes(32).toString("hex"), 10),
      },
    });
    return { role: "admin" as const, user: created, needsOnboarding: false, suspended: false };
  }

  let existing = await findAgentByEmail(email);
  if (existing) {
    // Password sign-up never proves the email belongs to the person, so anyone
    // could have registered this address first. Google has now proved who owns
    // it: the first time it is used on this account, replace the password and
    // end every older session, so a squatter loses access.
    const linked = await prisma.agentActivity.findFirst({
      where: { agentId: existing.id, type: "GOOGLE_LINKED" },
      select: { id: true },
    });
    if (!linked) {
      existing = await prisma.agent.update({
        where: { id: existing.id },
        data: {
          passwordHash: await bcrypt.hash(crypto.randomBytes(32).toString("hex"), 10),
          activities: {
            create: {
              type: "GOOGLE_LINKED",
              actor: "System",
              detail: "Signed in with Google. Password replaced and older sessions ended.",
            },
          },
        },
      });
    }
    return {
      role: "agent" as const,
      user: existing,
      needsOnboarding: agentNeedsOnboarding(existing),
      suspended: existing.status === "SUSPENDED",
    };
  }

  const agent = await prisma.agent.create({
    data: {
      email,
      // Google-only account: random password nobody knows.
      passwordHash: await bcrypt.hash(crypto.randomBytes(32).toString("hex"), 10),
      companyName: "",
      contactName: profile.name || email.split("@")[0]!,
      phone: "",
      servicesWanted: "[]",
      credits: SIGNUP_BONUS_CREDITS,
      transactions: { create: { amount: SIGNUP_BONUS_CREDITS, type: "BONUS", note: "Welcome bonus credits" } },
      activities: {
        create: [
          { type: "REGISTRATION", actor: "System", detail: "Registered with Google sign-in." },
          { type: "GOOGLE_LINKED", actor: "System", detail: "Account created with Google." },
        ],
      },
    },
  });
  return { role: "agent" as const, user: agent, needsOnboarding: true, suspended: false };
}
