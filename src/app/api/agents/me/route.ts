import { NextResponse } from "next/server";
import { getSignedInAgent } from "@/lib/auth";

export async function GET() {
  const agent = await getSignedInAgent();
  return NextResponse.json({ agent: agent ? { companyName: agent.companyName } : null });
}
