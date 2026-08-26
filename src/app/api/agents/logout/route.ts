import { NextResponse } from "next/server";
import { clearAgentSessionCookie } from "@/lib/auth";

export async function POST() {
  await clearAgentSessionCookie();
  return NextResponse.json({ ok: true });
}
