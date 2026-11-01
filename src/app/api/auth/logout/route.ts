import { NextResponse } from "next/server";
import { clearAgentSessionCookie } from "@/lib/auth";
import { clearAdminSessionCookie } from "@/lib/adminAuth";

export async function POST() {
  await clearAgentSessionCookie();
  await clearAdminSessionCookie();
  return NextResponse.json({ ok: true });
}
