import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ContactLink from "@/components/admin/ContactLink";
import ConfirmDeleteForm from "@/components/admin/ConfirmDeleteForm";
import LeadStatusBadge from "@/components/admin/LeadStatusBadge";
import { formatDate } from "@/lib/format";
import { properCase } from "@/lib/text";
import { deleteLead, deleteLeads } from "@/lib/adminActions";
import { BulkDeleteBar, SelectAllCheckbox } from "@/components/admin/BulkLeadSelect";

const BULK_FORM = "bulk-delete-leads";

const STATUSES = [
  ["", "All"],
  ["NEW", "New"],
  ["VERIFIED", "Verified"],
  ["BOOKED", "Booked"],
  ["STALE", "Stale"],
] as const;

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; destinationId?: string; q?: string }>;
}) {
  const { status, destinationId, q } = await searchParams;
  const search = q?.trim().slice(0, 100);

  const [destinations, leads, counts] = await Promise.all([
    prisma.destination.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true } }),
    prisma.lead.findMany({
      where: {
        status: status ? (status as never) : undefined,
        destinationId: destinationId || undefined,
        ...(search
          ? {
              OR: [
                { name: { contains: search, mode: "insensitive" } },
                { phone: { contains: search } },
                { email: { contains: search, mode: "insensitive" } },
                { originCity: { contains: search, mode: "insensitive" } },
              ],
            }
          : {}),
      },
      include: { destination: true, city: true, _count: { select: { unlocks: true } } },
      orderBy: { createdAt: "desc" },
      take: 200,
    }),
    prisma.lead.groupBy({ by: ["status"], _count: { _all: true } }),
  ]);

  const countFor = (s: string) =>
    s ? (counts.find((c) => c.status === s)?._count._all ?? 0) : counts.reduce((n, c) => n + c._count._all, 0);
  const tabHref = (s: string) => {
    const p = new URLSearchParams();
    if (s) p.set("status", s);
    if (destinationId) p.set("destinationId", destinationId);
    if (search) p.set("q", search);
    const qs = p.toString();
    return `/admin/leads${qs ? `?${qs}` : ""}`;
  };

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <h1 className="text-lg font-semibold text-zinc-900">Leads</h1>
        <span className="text-xs text-zinc-500">{leads.length} shown</span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1">
        {STATUSES.map(([value, label]) => {
          const active = (status ?? "") === value;
          return (
            <Link
              key={value}
              href={tabHref(value)}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                active ? "bg-zinc-900 text-white" : "bg-white text-zinc-600 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50"
              }`}
            >
              {label} <span className={active ? "text-zinc-300" : "text-zinc-400"}>{countFor(value)}</span>
            </Link>
          );
        })}
      </div>

      <form className="mt-3 flex flex-wrap gap-2" method="get">
        {status && <input type="hidden" name="status" value={status} />}
        <input
          name="q"
          defaultValue={search}
          placeholder="Search name, phone, email, city"
          className="min-w-0 flex-1 rounded-md border border-zinc-300 px-3 py-1.5 text-sm sm:max-w-xs"
        />
        <select name="destinationId" defaultValue={destinationId ?? ""} className="rounded-md border border-zinc-300 px-2 py-1.5 text-sm">
          <option value="">All destinations</option>
          {destinations.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
        <button type="submit" className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold text-white">
          Filter
        </button>
      </form>

      <div className="mt-3">
        <BulkDeleteBar formId={BULK_FORM} action={deleteLeads} />
      </div>

      <div className="mt-2 overflow-x-auto rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-[11px] uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="w-8 py-2 pl-3">
                <SelectAllCheckbox formId={BULK_FORM} />
              </th>
              <th className="px-3 py-2">Traveller</th>
              <th className="px-3 py-2">Trip</th>
              <th className="hidden px-3 py-2 md:table-cell">Travel</th>
              <th className="px-3 py-2">Status</th>
              <th className="hidden px-3 py-2 lg:table-cell">Unlocks</th>
              <th className="hidden px-3 py-2 lg:table-cell">Posted</th>
              <th className="px-3 py-2 text-right">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {leads.map((lead) => (
              <tr key={lead.id} className="align-top hover:bg-zinc-50 has-[:checked]:bg-red-50/40">
                <td className="py-2.5 pl-3">
                  <input
                    type="checkbox"
                    name="ids"
                    value={lead.id}
                    form={BULK_FORM}
                    aria-label={`Select lead from ${properCase(lead.name)}`}
                    className="h-4 w-4 rounded border-zinc-300 accent-zinc-900"
                  />
                </td>
                <td className="px-3 py-2">
                  <Link href={`/admin/leads/${lead.id}`} className="font-medium text-zinc-900 hover:text-blue-700">
                    {properCase(lead.name)}
                  </Link>
                  <div className="text-xs">
                    <ContactLink value={lead.phone} />
                  </div>
                  {lead.email && (
                    <div className="max-w-[14rem] truncate text-xs">
                      <ContactLink value={lead.email} className="text-zinc-500" />
                    </div>
                  )}
                </td>
                <td className="px-3 py-2 text-xs text-zinc-600">
                  <span className="font-medium text-zinc-800">{lead.city ? `${lead.city.name}, ` : ""}{lead.destination.name}</span>
                  {lead.originCity && <div className="text-zinc-500">from {properCase(lead.originCity)}</div>}
                </td>
                <td className="hidden px-3 py-2 text-xs text-zinc-600 md:table-cell">
                  {lead.travelDate ? formatDate(lead.travelDate) : "Flexible"}
                  <div className="text-zinc-500">
                    {lead.durationDays ? `${lead.durationDays}D · ` : ""}
                    {lead.adults}A{lead.children ? ` ${lead.children}C` : ""}
                  </div>
                </td>
                <td className="px-3 py-2">
                  <LeadStatusBadge status={lead.status} />
                </td>
                <td className="hidden px-3 py-2 text-xs text-zinc-600 lg:table-cell">
                  {lead._count.unlocks}/{lead.maxUnlocks}
                </td>
                <td className="hidden whitespace-nowrap px-3 py-2 text-xs text-zinc-500 lg:table-cell">{formatDate(lead.createdAt)}</td>
                <td className="px-3 py-2">
                  <div className="flex items-center justify-end gap-1">
                    <Link href={`/admin/leads/${lead.id}`} className="rounded px-2 py-1 text-xs font-medium text-blue-700 hover:bg-blue-50">
                      Open
                    </Link>
                    <ConfirmDeleteForm
                      compact
                      action={deleteLead.bind(null, lead.id, undefined)}
                      confirmText={`Delete the lead from ${properCase(lead.name)}? This can't be undone.${
                        lead._count.unlocks ? ` ${lead._count.unlocks} agent(s) unlocked it; their credits are not refunded.` : ""
                      }`}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {leads.length === 0 && <p className="p-6 text-center text-sm text-zinc-500">No leads found.</p>}
      </div>
    </div>
  );
}
