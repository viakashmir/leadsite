import Link from "next/link";
import { requireAdmin } from "@/lib/adminAuth";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import { SITE_NAME } from "@/lib/site";

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin();

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <aside className="print-hide flex flex-col bg-zinc-900 text-zinc-100 md:w-56">
        <div className="flex items-center justify-between px-4 py-3 md:block md:border-b md:border-zinc-800 md:px-5 md:py-4">
          <div>
            <p className="text-sm font-bold text-white">{SITE_NAME}</p>
            <p className="text-xs text-zinc-500">Admin Panel</p>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <span className="max-w-[8rem] truncate text-xs text-zinc-400">{admin.name}</span>
            <AdminLogoutButton />
          </div>
        </div>
        <nav className="flex gap-1 overflow-x-auto border-t border-zinc-800 px-3 py-2 text-sm md:flex-1 md:flex-col md:gap-0 md:space-y-1 md:border-t-0 md:py-4">
          <Link href="/admin/agents" className="shrink-0 rounded-md px-3 py-2 hover:bg-zinc-800">
            Agents CRM
          </Link>
          <Link href="/admin/leads" className="shrink-0 rounded-md px-3 py-2 hover:bg-zinc-800">
            Leads CRM
          </Link>
          <Link href="/admin/proposals" className="shrink-0 rounded-md px-3 py-2 hover:bg-zinc-800">
            Proposals
          </Link>
        </nav>
        <div className="hidden items-center justify-between border-t border-zinc-800 px-5 py-4 md:flex">
          <span className="truncate text-xs text-zinc-400">{admin.name}</span>
          <AdminLogoutButton />
        </div>
      </aside>
      <main className="min-w-0 flex-1 overflow-x-auto bg-zinc-50 p-4 md:p-6">{children}</main>
    </div>
  );
}
