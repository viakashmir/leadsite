import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Small max pool size: serverless functions spin up many short-lived
// instances, and a low per-instance connection cap keeps total connections
// to the database well under Supabase's connection limit.
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
  // PG_POOL_MAX=1 lets local dev run against a single-connection Postgres.
  max: Number(process.env.PG_POOL_MAX) || 5,
});

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
