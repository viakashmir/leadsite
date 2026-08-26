import Link from "next/link";
import { requireAdmin } from "@/lib/adminAuth";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import { SITE_NAME } from "@/lib/site";

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();

  return (
    <div className="flex min-h-screen">
      <aside className="print-hide flex w-56 flex-col bg-zinc-900 text-zinc-100">
        <div className="border-b border-zinc-800 px-5 py-4">
          <p className="text-sm font-bold text-white">{SITE_NAME}</p>
          <p className="text-xs text-zinc-500">Admin Panel</p>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4 text-sm">
          <Link href="/admin/agents" className="block rounded-md px-3 py-2 hover:bg-zinc-800">
            Agents CRM
          </Link>
          <Link href="/admin/leads" className="block rounded-md px-3 py-2 hover:bg-zinc-800">
            Leads CRM
          </Link>
          <Link href="/admin/proposals" className="block rounded-md px-3 py-2 hover:bg-zinc-800">
            Proposals
          </Link>
        </nav>
        <div className="flex items-center justify-between border-t border-zinc-800 px-5 py-4">
          <span className="truncate text-xs text-zinc-400">{admin.name}</span>
          <AdminLogoutButton />
        </div>
      </aside>
      <main className="flex-1 overflow-x-auto bg-zinc-50 p-6">{children}</main>
    </div>
  );
}
