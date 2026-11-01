import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAgentSession } from "@/lib/auth";
import LoginForm from "@/components/agent/LoginForm";
import { safeNextPath } from "@/lib/safeRedirect";

export const metadata: Metadata = {
  title: "Agent Sign In",
};

export default async function AgentLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; lead?: string; suspended?: string }>;
}) {
  const session = await getAgentSession();
  const { next, lead, suspended } = await searchParams;
  const base = safeNextPath(next, "/agent/dashboard");
  const target = lead ? `${base}${base.includes("?") ? "&" : "?"}lead=${encodeURIComponent(lead)}` : base;

  // A suspended agent still holds a valid cookie; don't bounce them back into
  // the dashboard (which would redirect here again in a loop).
  if (session && !suspended) redirect(target);

  return (
    <div className="px-4 py-14">
      {suspended && (
        <p className="mx-auto mb-4 max-w-md rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          This account has been suspended. Please contact support.
        </p>
      )}
      <LoginForm next={target} />
    </div>
  );
}
