import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import RevealField from "@/components/admin/RevealField";
import NoteForm from "@/components/admin/NoteForm";
import Timeline from "@/components/admin/Timeline";
import { formatINR } from "@/lib/format";
import { SERVICE_OPTIONS } from "@/lib/validation";
import { addAgentNote, assignAgentRm, loginAsAgent, updateAgentStatus } from "@/lib/adminActions";

export default async function AdminAgentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [agent, admins, notes, activities, transactions, proposals] = await Promise.all([
    prisma.agent.findUnique({
      where: { id },
      include: { destinations: { include: { destination: true } }, assignedRm: true },
    }),
    prisma.adminUser.findMany({ orderBy: { name: "asc" } }),
    prisma.agentNote.findMany({ where: { agentId: id }, include: { author: true } }),
    prisma.agentActivity.findMany({ where: { agentId: id } }),
    prisma.creditTransaction.findMany({ where: { agentId: id }, orderBy: { createdAt: "desc" }, take: 20 }),
    prisma.proposal.findMany({ where: { agentId: id }, orderBy: { createdAt: "desc" } }),
  ]);

  if (!agent) notFound();

  const services = JSON.parse(agent.servicesWanted) as string[];

  const timelineItems = [
    ...notes.map((n) => ({ id: n.id, type: "TALKED", actor: n.author.name, detail: n.body, createdAt: n.createdAt })),
    ...activities.map((a) => ({ id: a.id, type: a.type, actor: a.actor, detail: a.detail, createdAt: a.createdAt })),
  ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const boundAddNote = addAgentNote.bind(null, agent.id);
  const boundUpdateStatus = updateAgentStatus.bind(null, agent.id);
  const boundAssignRm = assignAgentRm.bind(null, agent.id);
  const boundLoginAs = loginAsAgent.bind(null, agent.id);

  return (
    <div className="max-w-5xl">
      <Link href="/admin/agents" className="text-sm text-blue-700">
        ← All agents
      </Link>

      <div className="mt-2 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-zinc-900">{agent.companyName}</h1>
          <p className="text-sm text-zinc-500">#{agent.id.slice(-6)} · {agent.contactName}</p>
        </div>
        <form action={boundLoginAs}>
          <button
            type="submit"
            className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
          >
            Login as Agent
          </button>
        </form>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-4">
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-xs text-zinc-500">Credits</p>
          <p className="text-xl font-bold text-blue-700">{agent.credits}</p>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-xs text-zinc-500">Status</p>
          <form action={boundUpdateStatus} className="mt-1 flex gap-2">
            <select name="status" defaultValue={agent.status} className="rounded-md border border-zinc-300 px-2 py-1 text-sm">
              <option value="PENDING">Pending</option>
              <option value="ACTIVE">Active</option>
              <option value="SUSPENDED">Suspended</option>
            </select>
            <button type="submit" className="rounded-md bg-zinc-900 px-2 py-1 text-xs font-semibold text-white">
              Save
            </button>
          </form>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-xs text-zinc-500">Relationship Manager</p>
          <form action={boundAssignRm} className="mt-1 flex gap-2">
            <select name="rmId" defaultValue={agent.assignedRmId ?? ""} className="rounded-md border border-zinc-300 px-2 py-1 text-sm">
              <option value="">Unassigned</option>
              {admins.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
            <button type="submit" className="rounded-md bg-zinc-900 px-2 py-1 text-xs font-semibold text-white">
              Save
            </button>
          </form>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-4">
          <p className="text-xs text-zinc-500">Daily Lead Target</p>
          <p className="text-xl font-bold text-zinc-900">{agent.dailyLeadTarget}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <section className="rounded-lg border border-zinc-200 bg-white p-5">
            <h2 className="font-semibold text-zinc-900">Identity</h2>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-zinc-500">Email</dt>
                <dd>
                  <RevealField value={agent.email} />
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">Mobile</dt>
                <dd>
                  <RevealField value={agent.phone} />
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">Office</dt>
                <dd>
                  {agent.officeCity ?? "—"}
                  {agent.officeState ? `, ${agent.officeState}` : ""}
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">GST</dt>
                <dd>{agent.gstNumber ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Company Type</dt>
                <dd>{agent.companyType ?? "—"}</dd>
              </div>
              <div>
                <dt className="text-zinc-500">Team Size</dt>
                <dd>{agent.teamSize ?? "—"}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-zinc-500">Destinations</dt>
                <dd>{agent.destinations.map((d) => d.destination.name).join(", ") || "—"}</dd>
              </div>
              <div className="col-span-2">
                <dt className="text-zinc-500">Services</dt>
                <dd>
                  {services.map((s) => SERVICE_OPTIONS.find((o) => o.value === s)?.label ?? s).join(", ")}
                </dd>
              </div>
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
            <h2 className="font-semibold text-zinc-900">Credit Ledger</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {transactions.map((t) => (
                <li key={t.id} className="flex items-center justify-between">
                  <span className="text-zinc-600">{t.note}</span>
                  <span className={t.amount >= 0 ? "text-green-600" : "text-red-600"}>
                    {t.amount >= 0 ? "+" : ""}
                    {t.amount}
                  </span>
                </li>
              ))}
              {transactions.length === 0 && <p className="text-zinc-500">No transactions yet.</p>}
            </ul>
          </section>

          <section className="rounded-lg border border-zinc-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-zinc-900">Proposals</h2>
              <Link href={`/admin/proposals/new?agentId=${agent.id}`} className="text-xs font-medium text-blue-700">
                + New
              </Link>
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              {proposals.map((p) => (
                <li key={p.id}>
                  <Link href={`/admin/proposals/${p.id}`} className="text-blue-700">
                    {p.proposalNumber}
                  </Link>{" "}
                  <span className="text-zinc-500">
                    · {p.planName} · {formatINR(p.totalPayable)} · {p.status}
                  </span>
                </li>
              ))}
              {proposals.length === 0 && <p className="text-zinc-500">No proposals sent yet.</p>}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
