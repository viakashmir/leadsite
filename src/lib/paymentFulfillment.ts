import crypto from "crypto";
import { after } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyCreditPurchase } from "@/lib/email/agentNotifications";

/** Constant-time comparison of two hex HMAC signatures. */
export function signaturesMatch(expectedHex: string, receivedHex: string): boolean {
  const a = Buffer.from(expectedHex, "utf8");
  const b = Buffer.from(receivedHex, "utf8");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

/**
 * Credits a PaymentOrder exactly once. Safe to call from both the client-side
 * verify endpoint and the server-to-server webhook, since either (or both)
 * may fire for the same payment — even at the same moment.
 *
 * `paidAmountPaise`, when known (webhook), must match what the order charged.
 */
export async function fulfillPaymentOrder(
  razorpayOrderId: string,
  razorpayPaymentId: string,
  paidAmountPaise?: number,
) {
  const order = await prisma.paymentOrder.findUnique({ where: { razorpayOrderId } });
  if (!order) return { ok: false as const, reason: "Order not found" };
  if (order.status === "PAID") return { ok: true as const, alreadyProcessed: true };
  if (paidAmountPaise !== undefined && paidAmountPaise !== order.amountINR * 100) {
    return { ok: false as const, reason: "Paid amount does not match the order" };
  }

  const result = await prisma.$transaction(async (tx) => {
    // Claim the order with a conditional update: of two concurrent callers
    // only one flips it to PAID, so credits can never be applied twice.
    const claimed = await tx.paymentOrder.updateMany({
      where: { id: order.id, status: { not: "PAID" } },
      data: { status: "PAID", razorpayPaymentId },
    });
    if (claimed.count === 0) return { ok: true as const, alreadyProcessed: true };

    await tx.agent.update({
      where: { id: order.agentId },
      data: { credits: { increment: order.creditsToApply } },
    });
    await tx.creditTransaction.create({
      data: {
        agentId: order.agentId,
        amount: order.creditsToApply,
        type: "TOPUP",
        note: `Razorpay payment ${razorpayPaymentId} — ₹${order.amountINR}`,
      },
    });
    await tx.agentActivity.create({
      data: {
        agentId: order.agentId,
        type: "TOPUP",
        actor: "System",
        detail: `Wallet topped up by ${order.creditsToApply} credits (₹${order.amountINR} via Razorpay)`,
      },
    });
    return { ok: true as const, alreadyProcessed: false };
  });

  // Receipt to the agent + payment alert to admins, only for the call that
  // actually credited the order (verify and webhook can both arrive).
  if (result.ok && !result.alreadyProcessed) after(() => notifyCreditPurchase(order.id));
  return result;
}
