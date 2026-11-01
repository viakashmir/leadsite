// Sends the agent-lifecycle emails. Each function is meant to be called from
// next/server `after()`, never throws, and writes what happened to the
// agent's (and, for unlocks, the lead's) activity timeline.

import { prisma } from "@/lib/prisma";
import { SERVICE_OPTIONS } from "@/lib/validation";
import { ADMIN_EMAILS, CUSTOMER_REPLY_TO, sendEmail, type SendEmailResult } from "./resend";
import {
  adminAgentSignupEmail,
  adminLeadUnlockedEmail,
  adminPurchaseEmail,
  agentApprovedEmail,
  agentLeadUnlockedEmail,
  agentPurchaseEmail,
  agentWelcomeEmail,
  customerAgentAssignedEmail,
  type AgentEmailData,
} from "./agentTemplates";

type Outgoing = { who: string; to: string | string[]; replyTo?: string; tag: string; email: { subject: string; html: string; text: string } };

async function sendAll(list: Outgoing[]): Promise<{ who: string; result: SendEmailResult }[]> {
  return Promise.all(
    list.map(async (o) => ({
      who: o.who,
      result: await sendEmail({
        to: o.to,
        subject: o.email.subject,
        html: o.email.html,
        text: o.email.text,
        replyTo: o.replyTo,
        tags: [{ name: "type", value: o.tag }],
      }),
    })),
  );
}

function summary(results: { who: string; result: SendEmailResult }[], context: string): string {
  for (const { who, result } of results) {
    if (!result.ok) console.error(`[email] ${context}: ${who} email failed: ${result.error}`);
  }
  return results
    .map(({ who, result }) => (result.ok ? `${who} email sent` : `${who} email failed (${result.error})`))
    .join("; ")
    .slice(0, 500);
}

async function logAgent(agentId: string, what: string, detail: string) {
  await prisma.agentActivity.create({ data: { agentId, type: "EMAIL", actor: "System", detail: `${what}: ${detail}`.slice(0, 500) } });
}

async function loadAgent(agentId: string): Promise<AgentEmailData | null> {
  const a = await prisma.agent.findUnique({
    where: { id: agentId },
    include: { destinations: { include: { destination: { select: { name: true } } } } },
  });
  if (!a) return null;
  let services: string[] = [];
  try {
    services = (JSON.parse(a.servicesWanted) as string[]).map((v) => SERVICE_OPTIONS.find((o) => o.value === v)?.label ?? v);
  } catch {}
  return {
    id: a.id,
    companyName: a.companyName,
    contactName: a.contactName,
    email: a.email,
    phone: a.phone,
    officeCity: a.officeCity,
    officeState: a.officeState,
    credits: a.credits,
    destinations: a.destinations.map((d) => d.destination.name),
    services,
  };
}

/** New agent signed up: welcome/onboarding email to the agent, alert to admins. */
export async function notifyAgentRegistered(agentId: string, bonusCredits: number): Promise<void> {
  try {
    const a = await loadAgent(agentId);
    if (!a) return;
    const results = await sendAll([
      { who: "agent welcome", to: a.email, replyTo: CUSTOMER_REPLY_TO, tag: "agent_welcome", email: agentWelcomeEmail(a, bonusCredits) },
      { who: "admin", to: ADMIN_EMAILS, replyTo: a.email, tag: "admin_agent_signup", email: adminAgentSignupEmail(a) },
    ]);
    await logAgent(agentId, "Signup emails", summary(results, `agent ${agentId} signup`));
  } catch (err) {
    console.error(`[email] agent ${agentId} signup emails failed`, err);
  }
}

/** Agent approved by an admin. */
export async function notifyAgentApproved(agentId: string): Promise<void> {
  try {
    const a = await loadAgent(agentId);
    if (!a) return;
    const results = await sendAll([
      { who: "agent", to: a.email, replyTo: CUSTOMER_REPLY_TO, tag: "agent_approved", email: agentApprovedEmail(a) },
    ]);
    await logAgent(agentId, "Approval email", summary(results, `agent ${agentId} approval`));
  } catch (err) {
    console.error(`[email] agent ${agentId} approval email failed`, err);
  }
}

/** Credit pack paid: receipt to the agent, alert to admins. */
export async function notifyCreditPurchase(paymentOrderId: string): Promise<void> {
  try {
    const order = await prisma.paymentOrder.findUnique({ where: { id: paymentOrderId }, include: { pack: { select: { name: true } } } });
    if (!order) return;
    const a = await loadAgent(order.agentId);
    if (!a) return;
    const p = {
      orderId: order.razorpayOrderId,
      packName: order.pack.name,
      amountINR: order.amountINR,
      creditsAdded: order.creditsToApply,
      paymentId: order.razorpayPaymentId,
      paidAt: order.updatedAt,
    };
    const results = await sendAll([
      { who: "agent receipt", to: a.email, replyTo: CUSTOMER_REPLY_TO, tag: "agent_purchase", email: agentPurchaseEmail(a, p) },
      { who: "admin", to: ADMIN_EMAILS, replyTo: a.email, tag: "admin_purchase", email: adminPurchaseEmail(a, p) },
    ]);
    await logAgent(a.id, "Purchase emails", summary(results, `order ${paymentOrderId}`));
  } catch (err) {
    console.error(`[email] purchase emails for order ${paymentOrderId} failed`, err);
  }
}

/**
 * Agent unlocked (bought) a lead: contact details to the agent, alert to
 * admins, and a "meet your travel expert" email to the traveller.
 */
export async function notifyLeadUnlocked(agentId: string, leadId: string): Promise<void> {
  try {
    const [a, lead, unlock] = await Promise.all([
      loadAgent(agentId),
      prisma.lead.findUnique({
        where: { id: leadId },
        include: { destination: { select: { name: true } }, city: { select: { name: true } }, _count: { select: { unlocks: true } } },
      }),
      prisma.leadUnlock.findUnique({ where: { agentId_leadId: { agentId, leadId } }, select: { creditsSpent: true } }),
    ]);
    if (!a || !lead || !unlock) return;

    const l = {
      id: lead.id,
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      place: lead.city ? `${lead.city.name}, ${lead.destination.name}` : lead.destination.name,
      travelDate: lead.travelDate,
      durationDays: lead.durationDays,
      adults: lead.adults,
      children: lead.children,
      budgetBand: lead.budgetBand,
      message: lead.message,
      creditsSpent: unlock.creditsSpent,
    };

    const list: Outgoing[] = [
      { who: "agent", to: a.email, replyTo: lead.email ?? undefined, tag: "agent_lead_unlocked", email: agentLeadUnlockedEmail(a, l) },
      {
        who: "admin",
        to: ADMIN_EMAILS,
        replyTo: a.email,
        tag: "admin_lead_unlocked",
        email: adminLeadUnlockedEmail(a, l, lead._count.unlocks, lead.maxUnlocks),
      },
    ];
    if (lead.email) {
      // Replies from the traveller go straight to the agent they're about.
      list.push({ who: "customer", to: lead.email, replyTo: a.email, tag: "customer_agent_assigned", email: customerAgentAssignedEmail(a, l, lead.maxUnlocks) });
    }

    const results = await sendAll(list);
    const detail = summary(results, `lead ${leadId} unlock by ${agentId}`);
    await Promise.all([
      logAgent(agentId, `Lead unlock emails (${lead.name})`, detail),
      prisma.leadActivity.create({
        data: { leadId, type: "EMAIL", actor: "System", detail: `Unlock by ${a.companyName}: ${detail}`.slice(0, 500) },
      }),
    ]);
  } catch (err) {
    console.error(`[email] unlock emails for lead ${leadId} / agent ${agentId} failed`, err);
  }
}
