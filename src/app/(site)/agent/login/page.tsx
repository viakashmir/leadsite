import { redirect } from "next/navigation";

// Old agent sign-in URL: everyone now signs in at /login.
export default async function AgentLoginRedirect({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(await searchParams)) if (v && ["next", "lead", "suspended"].includes(k)) params.set(k, v);
  const qs = params.toString();
  redirect(`/login${qs ? `?${qs}` : ""}`);
}
