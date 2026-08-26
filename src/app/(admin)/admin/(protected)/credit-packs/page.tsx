import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatINR } from "@/lib/format";

export default async function AdminCreditPacksPage() {
  const packs = await prisma.creditPack.findMany({ orderBy: { sortOrder: "asc" } });

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-zinc-900">Credit Packs</h1>
          <p className="mt-1 text-sm text-zinc-500">
            The wallet top-up plans agents see on their Wallet page and pay for via Razorpay.
          </p>
        </div>
        <Link
          href="/admin/credit-packs/new"
          className="rounded-md bg-blue-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-blue-800"
        >
          + New Pack
        </Link>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {packs.map((pack) => (
          <Link
            key={pack.id}
            href={`/admin/credit-packs/${pack.id}`}
            className={`rounded-lg border p-4 ${pack.active ? "border-zinc-200 bg-white" : "border-zinc-200 bg-zinc-100 opacity-60"}`}
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-zinc-900">{pack.name}</p>
              {!pack.active && (
                <span className="rounded-full bg-zinc-200 px-2 py-0.5 text-[10px] font-medium text-zinc-600">
                  Inactive
                </span>
              )}
            </div>
            {pack.tagline && <p className="text-xs text-zinc-500">{pack.tagline}</p>}
            <p className="mt-2 text-xl font-bold text-blue-700">
              {pack.baseCredits + pack.bonusCredits}
              <span className="ml-1 text-xs font-normal text-zinc-500">credits</span>
            </p>
            <p className="text-sm text-zinc-600">{formatINR(pack.amountINR)}</p>
          </Link>
        ))}
        {packs.length === 0 && (
          <p className="text-sm text-zinc-500 sm:col-span-2 lg:col-span-4">
            No credit packs yet — create one so agents can top up their wallet.
          </p>
        )}
      </div>
    </div>
  );
}
