"use server";

import { prisma } from "@/lib/prisma";
import { requireAgent } from "@/lib/auth";
import { getRazorpayClient, isRazorpayConfigured } from "@/lib/razorpay";

export type CreateOrderResult =
  | {
      ok: true;
      keyId: string;
      razorpayOrderId: string;
      amountPaise: number;
      agentName: string;
      agentEmail: string;
      agentPhone: string;
    }
  | { ok: false; error: string };

export async function createRazorpayOrder(packId: string): Promise<CreateOrderResult> {
  const agent = await requireAgent();

  if (!isRazorpayConfigured()) {
    return { ok: false, error: "Payments are not configured yet. Please contact support." };
  }

  const pack = await prisma.creditPack.findUnique({ where: { id: packId } });
  if (!pack || !pack.active) {
    return { ok: false, error: "This credit pack is no longer available." };
  }

  const amountPaise = pack.amountINR * 100;

  const paymentOrder = await prisma.paymentOrder.create({
    data: {
      agentId: agent.id,
      packId: pack.id,
      razorpayOrderId: `pending-${crypto.randomUUID()}`,
      amountINR: pack.amountINR,
      creditsToApply: pack.baseCredits + pack.bonusCredits,
    },
  });

  try {
    const razorpay = getRazorpayClient();
    const order = await razorpay.orders.create({
      amount: amountPaise,
      currency: "INR",
      receipt: paymentOrder.id,
      notes: { agentId: agent.id, packId: pack.id },
    });

    await prisma.paymentOrder.update({
      where: { id: paymentOrder.id },
      data: { razorpayOrderId: order.id },
    });

    return {
      ok: true,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? process.env.RAZORPAY_KEY_ID!,
      razorpayOrderId: order.id,
      amountPaise,
      agentName: agent.contactName,
      agentEmail: agent.email,
      agentPhone: agent.phone,
    };
  } catch {
    await prisma.paymentOrder.update({
      where: { id: paymentOrder.id },
      data: { status: "FAILED" },
    });
    return { ok: false, error: "Could not start payment. Please try again." };
  }
}
