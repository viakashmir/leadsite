import type { Metadata } from "next";
import { redirect } from "next/navigation";
import SignInPanel from "@/components/auth/SignInPanel";
import { getSignedInAgent } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/adminAuth";
import { isGoogleConfigured } from "@/lib/googleOAuth";
import { landingFor } from "@/lib/signIn";
import { safeNextPath } from "@/lib/safeRedirect";

export const metadata: Metadata = {
  title: "Sign In",
  robots: { index: false, follow: true },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; lead?: string; error?: string; suspended?: string }>;
}) {
  const { next, lead, error, suspended } = await searchParams;
  const base = safeNextPath(next, "");
  const target = base && lead ? `${base}${base.includes("?") ? "&" : "?"}lead=${encodeURIComponent(lead)}` : base;

  // Already signed in: go straight to that role's pages. Checked against the
  // database, so a cookie for a deleted account shows the form instead of
  // looping back here from the dashboard.
  if (!suspended) {
    const adminSession = await getAdminSession();
    if (adminSession && (await prisma.adminUser.findUnique({ where: { id: adminSession.adminId }, select: { id: true } }))) {
      redirect(landingFor("admin", target));
    }
    const agent = await getSignedInAgent();
    if (agent && agent.status !== "SUSPENDED") redirect(landingFor("agent", target));
  }

  return (
    <div className="px-4 py-14">
      <SignInPanel
        mode="signin"
        next={target || undefined}
        googleEnabled={isGoogleConfigured()}
        error={error}
        suspended={Boolean(suspended)}
      />
    </div>
  );
}
