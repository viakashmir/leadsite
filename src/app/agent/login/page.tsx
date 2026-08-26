import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAgentSession } from "@/lib/auth";
import LoginForm from "@/components/agent/LoginForm";

export const metadata: Metadata = {
  title: "Agent Sign In",
};

export default async function AgentLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; lead?: string }>;
}) {
  const session = await getAgentSession();
  const { next, lead } = await searchParams;
  const target = next ? decodeURIComponent(next) + (lead ? `?lead=${lead}` : "") : "/agent/dashboard";

  if (session) redirect(target);

  return (
    <div className="px-4 py-14">
      <LoginForm next={target} />
    </div>
  );
}
