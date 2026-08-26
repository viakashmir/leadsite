import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { SERVICE_OPTIONS } from "@/lib/validation";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Find Top Travel Agents",
  description: "Browse verified travel agents and tour operators to plan your next holiday.",
};

export default async function AgentsDirectoryPage() {
  const agents = await prisma.agent.findMany({
    where: { status: "ACTIVE" },
    include: { destinations: { include: { destination: true } } },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold text-zinc-900">Find Top Travel Agents</h1>
      <p className="mt-1 text-sm text-zinc-600">
        Verified travel agents and tour operators ready to plan your dream vacation.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => {
          const services = JSON.parse(agent.servicesWanted) as string[];
          return (
            <div key={agent.id} className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
              <p className="font-semibold text-zinc-900">{agent.companyName}</p>
              <p className="mt-1 text-xs text-zinc-500">
                {agent.officeCity ? `${agent.officeCity}, ` : ""}
                {agent.officeState ?? ""}
              </p>
              <p className="mt-2 text-xs text-zinc-600">
                Destinations: {agent.destinations.map((d) => d.destination.name).join(", ")}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {services.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700"
                  >
                    {SERVICE_OPTIONS.find((o) => o.value === s)?.label ?? s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
        {agents.length === 0 && (
          <p className="text-sm text-zinc-500">
            No agents listed yet. Be the first to{" "}
            <a href="/agent/register" className="text-blue-700 underline">
              join free
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
