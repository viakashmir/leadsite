import Link from "next/link";
import { requireAgent } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { formatINR } from "@/lib/format";

export default async function AgentPackagesPage() {
  const agent = await requireAgent();
  const packages = await prisma.package.findMany({
    where: { agentId: agent.id },
    include: { destination: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-zinc-900">My Packages</h1>
        <Link
          href="/agent/dashboard/packages/new"
          className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
        >
          + Post a Package (Free)
        </Link>
      </div>
      <p className="mt-1 text-sm text-zinc-500">
        Packages you post here appear on {`the site's`} public pages and receive their own
        enquiries.
      </p>

      <div className="mt-5 space-y-3">
        {packages.map((p) => (
          <Link
            key={p.id}
            href={`/packages/${p.slug}`}
            className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 hover:border-blue-400"
          >
            <div>
              <p className="font-medium text-zinc-900">{p.title}</p>
              <p className="text-xs text-zinc-500">
                {p.destination.name} · {p.durationDays}D/{p.durationNights}N
              </p>
            </div>
            <span className="text-sm font-semibold text-zinc-900">{formatINR(p.price)}</span>
          </Link>
        ))}
        {packages.length === 0 && (
          <p className="text-sm text-zinc-500">
            You haven&apos;t posted any packages yet.
          </p>
        )}
      </div>
    </div>
  );
}
