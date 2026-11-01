import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ContactLink from "@/components/admin/ContactLink";
import NoteForm from "@/components/admin/NoteForm";
import Timeline from "@/components/admin/Timeline";
import ConfirmDeleteForm from "@/components/admin/ConfirmDeleteForm";
import LeadStatusBadge from "@/components/admin/LeadStatusBadge";
import { formatDate } from "@/lib/format";
import { properCase, sentenceCase } from "@/lib/text";
import { addLeadNote, deleteLead, updateLeadStatus } from "@/lib/adminActions";

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-zinc-50 px-3 py-2">
      <dt className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">{label}</dt>
      <dd className="mt-0.5 text-sm font-medium text-zinc-900">{children}</dd>
    </div>
  );
}

export default async function AdminLeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [lead, notes, activities, unlocks] = await Promise.all([
    prisma.lead.findUnique({
      where: { id },
      include: { destination: true, city: true, sourcePackage: true },
    }),
    prisma.leadNote.findMany({ where: { leadId: id }, include: { author: true } }),
    prisma.leadActivity.findMany({ where: { leadId: id } }),
    prisma.leadUnlock.findMany({ where: { leadId: id }, include: { agent: true }, orderBy: { unlockedAt: "desc" } }),
  ]);

  if (!lead) notFound();

  const timelineItems = [
    ...notes.map((n) => ({ id: n.id, type: "TALKED", actor: n.author.name, detail: n.body, createdAt: n.createdAt })),
    ...activities.map((a) => ({ id: a.id, type: a.type, actor: a.actor, detail: a.detail, createdAt: a.createdAt })),
  ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const boundAddNote = addLeadNote.bind(null, lead.id);
  const boundUpdateStatus = updateLeadStatus.bind(null, lead.id);
  const boundDelete = deleteLead.bind(null, lead.id, "list");
  const place = `${lead.city ? `${lead.city.name}, ` : ""}${lead.destination.name}`;
  const travellers = `${lead.adults} adult${lead.adults === 1 ? "" : "s"}${
    lead.children ? `, ${lead.children} child${lead.children === 1 ? "" : "ren"}` : ""
  }`;

  return (
    <div className="max-w-5xl">
      <Link href="/admin/leads" className="text-xs text-blue-700">
        ← All leads
      </Link>

      <div className="mt-2 flex flex-col gap-3 rounded-lg border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="truncate text-lg font-bold text-zinc-900">{properCase(lead.name)}</h1>
            <LeadStatusBadge status={lead.status} />
          </div>
          <p className="text-sm text-zinc-600">
            {lead.originCity ? `${properCase(lead.originCity)} → ` : ""}
            <span className="font-medium text-zinc-900">{place}</span>
            <span className="text-zinc-400"> · #{lead.id.slice(-6)} · {formatDate(lead.createdAt)}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* key: remount after save so the select shows the stored status */}
          <form key={lead.status} action={boundUpdateStatus} className="flex gap-1.5">
            <select name="status" defaultValue={lead.status} className="rounded-md border border-zinc-300 px-2 py-1 text-sm">
              <option value="NEW">New</option>
              <option value="VERIFIED">Verified</option>
              <option value="BOOKED">Booked</option>
              <option value="STALE">Stale</option>
            </select>
            <button type="submit" className="rounded-md bg-zinc-900 px-3 py-1 text-xs font-semibold text-white">
              Save
            </button>
          </form>
          <ConfirmDeleteForm
            action={boundDelete}
            label="Delete lead"
            confirmText={`Delete the lead from ${properCase(lead.name)}? Its notes and timeline are removed too. This can't be undone.${
              unlocks.length ? ` ${unlocks.length} agent(s) unlocked it; their credits are not refunded.` : ""
            }`}
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <section className="rounded-lg border border-zinc-200 bg-white p-4">
            <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Fact label="Travel date">{lead.travelDate ? formatDate(lead.travelDate) : "Flexible"}</Fact>
              <Fact label="Duration">{lead.durationDays ? `${lead.durationDays} days` : "—"}</Fact>
              <Fact label="Travellers">{travellers}</Fact>
              <Fact label="Budget">{lead.budgetBand ?? "—"}</Fact>
            </dl>
            <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
              <div className="flex justify-between gap-3 border-b border-zinc-100 pb-1.5">
                <dt className="text-zinc-500">Mobile</dt>
                <dd>
                  <ContactLink value={lead.phone} />
                </dd>
              </div>
              <div className="flex justify-between gap-3 border-b border-zinc-100 pb-1.5">
                <dt className="text-zinc-500">Email</dt>
                <dd className="truncate">{lead.email ? <ContactLink value={lead.email} /> : "—"}</dd>
              </div>
              {lead.sourcePackage && (
                <div className="flex justify-between gap-3 border-b border-zinc-100 pb-1.5 sm:col-span-2">
                  <dt className="text-zinc-500">Via package</dt>
                  <dd className="truncate text-right">{lead.sourcePackage.title}</dd>
                </div>
              )}
            </dl>
            {lead.message && (
              <p className="mt-3 border-l-2 border-amber-400 pl-3 text-sm italic text-zinc-700">{sentenceCase(lead.message)}</p>
            )}
          </section>

          <section className="rounded-lg border border-zinc-200 bg-white p-4">
            <h2 className="text-sm font-semibold text-zinc-900">Timeline</h2>
            <div className="mt-2">
              <NoteForm action={boundAddNote} />
            </div>
            <div className="mt-3">
              <Timeline items={timelineItems} />
            </div>
          </section>
        </div>

        <section className="h-fit rounded-lg border border-zinc-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-zinc-900">
            Unlocked by <span className="font-normal text-zinc-500">({unlocks.length}/{lead.maxUnlocks})</span>
          </h2>
          <ul className="mt-2 divide-y divide-zinc-100 text-sm">
            {unlocks.map((u) => (
              <li key={u.id} className="py-1.5">
                <Link href={`/admin/agents/${u.agentId}`} className="font-medium text-blue-700">
                  {u.agent.companyName}
                </Link>
                <p className="text-xs text-zinc-500">
                  {u.creditsSpent} credits · {formatDate(u.unlockedAt)}
                </p>
              </li>
            ))}
          </ul>
          {unlocks.length === 0 && <p className="mt-2 text-sm text-zinc-500">No agent has unlocked this lead yet.</p>}
        </section>
      </div>
    </div>
  );
}
