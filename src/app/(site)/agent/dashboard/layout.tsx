import Link from "next/link";
import { requireAgent } from "@/lib/auth";
import LogoutButton from "@/components/agent/LogoutButton";

export default async function AgentDashboardLayout({ children }: { children: React.ReactNode }) {
  const agent = await requireAgent();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
        <div>
          <p className="text-sm text-zinc-500">Welcome back,</p>
          <p className="font-semibold text-zinc-900">{agent.companyName}</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/agent/dashboard/wallet" className="text-right">
            <p className="text-xs text-zinc-500">Credit balance</p>
            <p className="text-lg font-bold text-blue-700">{agent.credits}</p>
          </Link>
          <LogoutButton />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[180px_1fr]">
        <nav className="flex gap-4 border-b border-zinc-200 pb-3 text-sm font-medium text-zinc-600 md:flex-col md:border-b-0 md:border-r md:pb-0 md:pr-4">
          <Link href="/agent/dashboard" className="hover:text-blue-700">
            Overview
          </Link>
          <Link href="/agent/dashboard/leads" className="hover:text-blue-700">
            Browse Leads
          </Link>
          <Link href="/agent/dashboard/packages" className="hover:text-blue-700">
            My Packages
          </Link>
          <Link href="/agent/dashboard/wallet" className="hover:text-blue-700">
            Wallet
          </Link>
        </nav>
        <div>{children}</div>
      </div>
    </div>
  );
}
