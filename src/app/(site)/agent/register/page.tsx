import type { Metadata } from "next";
import { redirect } from "next/navigation";
import SignInPanel from "@/components/auth/SignInPanel";
import { getSignedInAgent } from "@/lib/auth";
import { isGoogleConfigured } from "@/lib/googleOAuth";

export const metadata: Metadata = {
  alternates: { canonical: "/agent/register" },
  title: "Join Free as a Travel Agent",
  description:
    "Register free as a travel agent with Google or email, then add the destinations you deal in and start buying verified travel leads.",
};

export default async function AgentRegisterPage() {
  if (await getSignedInAgent()) redirect("/agent/dashboard/profile");

  return (
    <div className="px-4 py-14">
      <SignInPanel mode="signup" googleEnabled={isGoogleConfigured()} />
    </div>
  );
}
