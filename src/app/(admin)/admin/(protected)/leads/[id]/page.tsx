import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import RevealField from "@/components/admin/RevealField";
import NoteForm from "@/components/admin/NoteForm";
import Timeline from "@/components/admin/Timeline";
import { formatDate } from "@/lib/format";
import { addLeadNote, updateLeadStatus } from "@/lib/adminActions";

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

  return (
    <div className="max-w-5xl">
      <Link href="/admin/leads" className="text-sm text-blue-700">
        ← All leads
      </Link>

      <div className="mt-2 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-zinc-900">{lead.name}</h1>
          <p className="text-sm text-zinc-500">
            #{lead.id.slice(-6)} · {lead.originCity ?? "Unknown"} →{" "}
            {lead.city ? lead.city.name : lead.destination.name}
          </p>
        </div>
        <form action={boundUpdateStatus} className="flex gap-2">
          <select name="status" defaultValue={lead.status} className="rounded-md border border-zinc-300 px-2 py-1.5 text-sm">
            <option value="NEW">New</option>
            <option value="VERIFIED">Verified</option>
            <option value="BOOKED">Booked</option>
            <option value="STALE">Stale</option>
          </select>
          <button type="submit" className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-semibold text-white">
            Update Status
          </button>
        </form>
      </div>

      <div className="mt-5 rounded-lg border border-blue-200 bg-blue-50 p-4">
        <p className="text-xs font-medium uppercase text-blue-700">Route</p>
        <p className="mt-1 text-lg font-bold text-zinc-900">
          {lead.originCity ?? "Unknown origin"}
          <span className="mx-2 text-blue-400">→</span>
          {lead.city ? `${lead.city.name}, ` : ""}
          {lead.destination.name}
        </p>
        <p className="mt-1 text-sm text-zinc-600">
          {lead.travelDate ? `Travel date: ${formatDate(lead.travelDate)}` : "Travel date not specified"}
          {lead.durationDays ? ` · ${lead.durationDays} days` : ""} · {lead.adults} adult
          {lead.adults > 1 ? "s" : ""}
          {lead.children ? ` + ${lead.children} children` : ""}
          {lead.budgetBand ? ` · Budget: ${lead.budgetBand}` : ""}
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <section className="rounded-lg border border-zinc-200 bg-white p-5">
            <h2 className="font-semibold text-zinc-900">Identity</h2>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-zinc-500">Name</dt>
                <dd>{lead.name}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Mobile</dt>
                <dd>
                  <RevealField value={lead.phone} />
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">Email</dt>
                <dd>{lead.email ? <RevealField value={lead.email} /> : "—"}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Posted</dt>
                <dd>{formatDate(lead.createdAt)}</dd>
              </div>
              {lead.sourcePackage && (
                <div className="col-span-2">
                  <dt className="text-zinc-500">Enquired via package</dt>
                  <dd>{lead.sourcePackage.title}</dd>
                </div>
              )}
              {lead.message && (
                <div className="col-span-2">
                  <dt className="text-zinc-500">Message</dt>
                  <dd>{lead.message}</dd>
                </div>
              )}
            </dl>
          </section>

          <section className="rounded-lg border border-zinc-200 bg-white p-5">
            <h2 className="font-semibold text-zinc-900">Timeline</h2>
            <div className="mt-3">
              <NoteForm action={boundAddNote} />
            </div>
            <div className="mt-4">
              <Timeline items={timelineItems} />
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-lg border border-zinc-200 bg-white p-5">
            <h2 className="font-semibold text-zinc-900">
              Unlocked By ({unlocks.length}/{lead.maxUnlocks})
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {unlocks.map((u) => (
                <li key={u.id}>
                  <Link href={`/admin/agents/${u.agentId}`} className="text-blue-700">
                    {u.agent.companyName}
                  </Link>
                  <span className="text-zinc-500"> · {u.creditsSpent} credits · {formatDate(u.unlockedAt)}</span>
                </li>
              ))}
              {unlocks.length === 0 && <p className="text-zinc-500">Not unlocked by any agent yet.</p>}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
