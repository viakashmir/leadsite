import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { fulfillPaymentOrder } from "@/lib/paymentFulfillment";

// Configure this URL in the Razorpay Dashboard under Settings -> Webhooks,
// subscribed to the "payment.captured" event, with RAZORPAY_WEBHOOK_SECRET
// as the webhook secret.
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
  if (expected !== signature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(rawBody);

  if (event.event === "payment.captured") {
    const payment = event.payload?.payment?.entity;
    if (payment?.order_id && payment?.id) {
      await fulfillPaymentOrder(payment.order_id, payment.id);
    }
  }

  return NextResponse.json({ ok: true });
}
