import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { z } from "zod";
import { getAgentSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { fulfillPaymentOrder } from "@/lib/paymentFulfillment";

const schema = z.object({
  razorpay_order_id: z.string(),
  razorpay_payment_id: z.string(),
  razorpay_signature: z.string(),
});

export async function POST(req: NextRequest) {
  const session = await getAgentSession();
  if (!session) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const body = await req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = parsed.data;

  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Payments are not configured" }, { status: 500 });
  }

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return NextResponse.json({ error: "Signature verification failed" }, { status: 400 });
  }

  const order = await prisma.paymentOrder.findUnique({ where: { razorpayOrderId: razorpay_order_id } });
  if (!order || order.agentId !== session.agentId) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  const result = await fulfillPaymentOrder(razorpay_order_id, razorpay_payment_id);
  if (!result.ok) {
    return NextResponse.json({ error: result.reason }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
