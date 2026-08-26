import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getAgentSession } from "@/lib/auth";
import RegisterWizard from "@/components/agent/RegisterWizard";

export const metadata: Metadata = {
  title: "Join Free as a Travel Agent",
  description:
    "Register free as a travel agent, tell us the destinations you deal in, and start buying verified travel leads.",
};

export default async function AgentRegisterPage() {
  const session = await getAgentSession();
  if (session) redirect("/agent/dashboard");

  const destinations = await prisma.destination.findMany({
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-zinc-900">Welcome! Grow Your Travel Business</h1>
        <p className="mt-1 text-sm text-zinc-600">3 quick steps and you&apos;re good to go.</p>
      </div>
      <RegisterWizard destinations={destinations} />
    </div>
  );
}
