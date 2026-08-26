import { prisma } from "@/lib/prisma";

/**
 * Credits a PaymentOrder exactly once. Safe to call from both the client-side
 * verify endpoint and the server-to-server webhook, since either (or both)
 * may fire for the same payment.
 */
export async function fulfillPaymentOrder(razorpayOrderId: string, razorpayPaymentId: string) {
  const order = await prisma.paymentOrder.findUnique({ where: { razorpayOrderId } });
  if (!order) return { ok: false as const, reason: "Order not found" };
  if (order.status === "PAID") return { ok: true as const, alreadyProcessed: true };

  await prisma.$transaction([
    prisma.paymentOrder.update({
      where: { id: order.id },
      data: { status: "PAID", razorpayPaymentId },
    }),
    prisma.agent.update({
      where: { id: order.agentId },
      data: { credits: { increment: order.creditsToApply } },
    }),
    prisma.creditTransaction.create({
      data: {
        agentId: order.agentId,
        amount: order.creditsToApply,
        type: "TOPUP",
        note: `Razorpay payment ${razorpayPaymentId} — ₹${order.amountINR}`,
      },
    }),
    prisma.agentActivity.create({
      data: {
        agentId: order.agentId,
        type: "TOPUP",
        actor: "System",
        detail: `Wallet topped up by ${order.creditsToApply} credits (₹${order.amountINR} via Razorpay)`,
      },
    }),
  ]);

  return { ok: true as const, alreadyProcessed: false };
}
