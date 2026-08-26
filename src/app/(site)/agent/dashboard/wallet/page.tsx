import Script from "next/script";
import { requireAgent } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getActiveCreditPacks } from "@/lib/credits";
import { formatDate } from "@/lib/format";
import TopUpButton from "@/components/agent/TopUpButton";

export default async function AgentWalletPage() {
  const agent = await requireAgent();
  const [transactions, packs] = await Promise.all([
    prisma.creditTransaction.findMany({
      where: { agentId: agent.id },
      orderBy: { createdAt: "desc" },
      take: 30,
    }),
    getActiveCreditPacks(),
  ]);

  return (
    <div>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      <h1 className="text-lg font-semibold text-zinc-900">Wallet</h1>
      <p className="mt-1 text-sm text-zinc-500">
        Current balance: <span className="font-semibold text-blue-700">{agent.credits} credits</span>.
        Each lead unlock deducts credits from this balance — 1 credit = ₹1 of buying power.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-4">
        {packs.map((pack, i) => (
          <TopUpButton key={pack.id} pack={pack} highlight={i === 1} />
        ))}
        {packs.length === 0 && (
          <p className="text-sm text-zinc-500 sm:col-span-4">
            No credit packs are configured yet. An admin can add one in the Admin Panel.
          </p>
        )}
      </div>

      <h2 className="mt-8 text-sm font-semibold text-zinc-900">Transaction History</h2>
      <div className="mt-3 divide-y divide-zinc-100 rounded-lg border border-zinc-200 bg-white">
        {transactions.map((t) => (
          <div key={t.id} className="flex items-center justify-between px-4 py-3 text-sm">
            <div>
              <p className="text-zinc-900">{t.note}</p>
              <p className="text-xs text-zinc-400">{formatDate(t.createdAt)}</p>
            </div>
            <span className={`font-semibold ${t.amount >= 0 ? "text-green-600" : "text-red-600"}`}>
              {t.amount >= 0 ? "+" : ""}
              {t.amount}
            </span>
          </div>
        ))}
        {transactions.length === 0 && (
          <p className="px-4 py-6 text-center text-sm text-zinc-500">No transactions yet.</p>
        )}
      </div>
    </div>
  );
}
