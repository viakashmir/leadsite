import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { requireAgentAccount } from "@/lib/auth";
import { agentNeedsOnboarding, AGENT_HOME } from "@/lib/signIn";
import OnboardingForm from "@/components/agent/OnboardingForm";

export const metadata: Metadata = { title: "Finish Signing Up", robots: { index: false, follow: false } };

export default async function OnboardingPage() {
  const agent = await requireAgentAccount();
  if (!agentNeedsOnboarding(agent)) redirect(AGENT_HOME);
  return (
    <div className="px-4 py-14">
      <OnboardingForm contactName={agent.contactName} />
    </div>
  );
}
