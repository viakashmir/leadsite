import Link from "next/link";
import { requireAdmin } from "@/lib/adminAuth";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import AdminMobileNav from "@/components/admin/AdminMobileNav";
import { SITE_NAME } from "@/lib/site";

const NAV_LINKS = [
  { href: "/admin/agents", label: "Agents CRM" },
  { href: "/admin/leads", label: "Leads CRM" },
  { href: "/admin/proposals", label: "Proposals" },
  { href: "/admin/credit-packs", label: "Credit Packs" },
  { href: "/admin/destinations", label: "Destinations" },
  { href: "/admin/packages", label: "Packages" },
  { href: "/admin/team", label: "Team" },
];

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

        <AdminMobileNav />

        <nav className="hidden text-sm md:flex md:flex-1 md:flex-col md:space-y-1 md:py-4 md:px-3">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 hover:bg-zinc-800">
              {link.label}
            </Link>
          ))}
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
