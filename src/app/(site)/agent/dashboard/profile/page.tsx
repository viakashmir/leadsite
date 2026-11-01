import type { Metadata } from "next";
import { requireAgent } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ProfileForm from "@/components/agent/ProfileForm";

export const metadata: Metadata = { title: "My Profile", robots: { index: false, follow: false } };

function parseServices(raw: string): string[] {
  try {
    const v = JSON.parse(raw);
    return Array.isArray(v) ? v.map(String) : [];
  } catch {
    return [];
  }
}

export default async function AgentProfilePage() {
  const agent = await requireAgent();
  const [links, destinations] = await Promise.all([
    prisma.agentDestination.findMany({ where: { agentId: agent.id }, select: { destinationId: true } }),
    prisma.destination.findMany({ orderBy: { name: "asc" }, select: { id: true, name: true } }),
  ]);

  return (
    <div>
      <h1 className="text-lg font-semibold text-zinc-900">My Profile</h1>
      {agent.status === "PENDING" && (
        <p className="mt-2 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-800">
          Your account is awaiting verification by our team. Completing your profile helps us approve it faster.
        </p>
      )}
      {links.length === 0 && (
        <p className="mt-2 rounded-md bg-blue-50 px-3 py-2 text-sm text-blue-800">
          Choose the destinations you deal in below to start seeing matching leads.
        </p>
      )}
      <div className="mt-5">
        <ProfileForm
          destinations={destinations}
          profile={{
            email: agent.email,
            contactName: agent.contactName,
            companyName: agent.companyName,
            phone: agent.phone,
            servicesWanted: parseServices(agent.servicesWanted),
            destinationIds: links.map((l) => l.destinationId),
            dailyLeadTarget: agent.dailyLeadTarget,
            officeAddress: agent.officeAddress ?? "",
            officeCity: agent.officeCity ?? "",
            officeState: agent.officeState ?? "",
            gstNumber: agent.gstNumber ?? "",
            companySince: agent.companySince?.toString() ?? "",
            teamSize: agent.teamSize?.toString() ?? "",
            companyType: agent.companyType ?? "",
            facebookUrl: agent.facebookUrl ?? "",
            instagramUrl: agent.instagramUrl ?? "",
          }}
        />
      </div>
    </div>
  );
}
