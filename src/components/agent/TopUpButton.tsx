"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createRazorpayOrder } from "@/lib/paymentActions";
import { formatINR } from "@/lib/format";
import { SITE_NAME } from "@/lib/site";

declare global {
  interface Window {
    // The Razorpay Checkout script attaches this constructor; no official
    // browser types are published for it.
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

type Pack = {
  id: string;
  name: string;
  tagline: string | null;
  amountINR: number;
  baseCredits: number;
  bonusCredits: number;
};

export default function TopUpButton({ pack, highlight }: { pack: Pack; highlight?: boolean }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy() {
    setPending(true);
    setError(null);

    const order = await createRazorpayOrder(pack.id);
    if (!order.ok) {
      setError(order.error);
      setPending(false);
      return;
    }

    if (typeof window.Razorpay !== "function") {
      setError("Payment widget failed to load. Please refresh and try again.");
      setPending(false);
      return;
    }

    const razorpay = new window.Razorpay({
      key: order.keyId,
      amount: order.amountPaise,
      currency: "INR",
      order_id: order.razorpayOrderId,
      name: SITE_NAME,
      description: `${pack.name} credit pack`,
      prefill: {
        name: order.agentName,
        email: order.agentEmail,
        contact: order.agentPhone,
      },
      handler: async (response: {
        razorpay_order_id: string;
        razorpay_payment_id: string;
        razorpay_signature: string;
      }) => {
        const res = await fetch("/api/razorpay/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });
        if (!res.ok) {
          setError("Payment succeeded but crediting failed — contact support with your payment ID.");
          setPending(false);
          return;
        }
        router.refresh();
        setPending(false);
      },
      modal: {
        ondismiss: () => setPending(false),
      },
      theme: { color: "#1d4ed8" },
    });

    razorpay.open();
  }

  return (
    <div
      className={`flex flex-col items-center gap-2 rounded-lg border p-5 text-center ${
        highlight ? "border-orange-400 bg-orange-50" : "border-zinc-200 bg-white"
      }`}
    >
      <p className="text-lg font-semibold text-zinc-900">{pack.name}</p>
      {pack.tagline && <p className="text-xs text-zinc-500">{pack.tagline}</p>}
      <p className="text-2xl font-bold text-zinc-900">{pack.baseCredits + pack.bonusCredits}</p>
      <p className="text-xs text-zinc-500">credits</p>
      {pack.bonusCredits > 0 && (
        <p className="text-xs font-medium text-green-600">incl. {pack.bonusCredits} bonus</p>
      )}
      <button
        type="button"
        onClick={handleBuy}
        disabled={pending}
        className="mt-2 w-full rounded-md bg-blue-700 py-2 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-60"
      >
        {pending ? "Processing..." : `Buy for ${formatINR(pack.amountINR)}`}
      </button>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
