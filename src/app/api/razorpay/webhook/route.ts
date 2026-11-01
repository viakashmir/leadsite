import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";
import { fulfillPaymentOrder, signaturesMatch } from "@/lib/paymentFulfillment";

// Configure this URL in the Razorpay Dashboard under Settings -> Webhooks,
// subscribed to "payment.captured", "order.paid" and "payment.failed",
// with RAZORPAY_WEBHOOK_SECRET as the webhook secret.
export async function POST(req: NextRequest) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get("x-razorpay-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  if (!signaturesMatch(expected, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  let event: {
    event?: string;
    payload?: { payment?: { entity?: { id?: string; order_id?: string; amount?: number; currency?: string; status?: string } } };
  };
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (event.event === "payment.captured" || event.event === "order.paid") {
    const payment = event.payload?.payment?.entity;
    if (payment?.order_id && payment?.id && payment.status === "captured" && payment.currency === "INR") {
      const result = await fulfillPaymentOrder(payment.order_id, payment.id, payment.amount);
      if (!result.ok && result.reason !== "Order not found") {
        // Logged for support; still 200 so Razorpay doesn't retry forever.
        console.error(`Razorpay webhook: ${result.reason} (order ${payment.order_id}, payment ${payment.id})`);
      }
    }
  }

  // A failed attempt: mark the order so admins see it; Checkout lets the agent retry.
  if (event.event === "payment.failed") {
    const orderId = event.payload?.payment?.entity?.order_id;
    if (orderId) {
      await prisma.paymentOrder.updateMany({ where: { razorpayOrderId: orderId, status: "CREATED" }, data: { status: "FAILED" } });
    }
  }

  return NextResponse.json({ ok: true });
}
