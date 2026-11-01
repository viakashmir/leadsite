import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ADMIN_AUDIENCE, getJwtSecret } from "@/lib/jwtSecret";

const COOKIE_NAME = "admin_session";

export type AdminSessionPayload = {
  adminId: string;
  email: string;
};

export async function setAdminSessionCookie(payload: AdminSessionPayload) {
  const token = jwt.sign({ adminId: payload.adminId, email: payload.email }, getJwtSecret(), {
    expiresIn: "12h",
    audience: ADMIN_AUDIENCE,
  });
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
}

export async function clearAdminSessionCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function getAdminSession(): Promise<AdminSessionPayload | null> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, getJwtSecret(), { audience: ADMIN_AUDIENCE }) as AdminSessionPayload;
    return typeof decoded.adminId === "string" ? decoded : null;
  } catch {
    return null;
  }
}

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) redirect("/login");

  const admin = await prisma.adminUser.findUnique({ where: { id: session.adminId } });
  if (!admin) redirect("/login");

  return admin;
}
