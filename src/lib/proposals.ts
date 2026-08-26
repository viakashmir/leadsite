import { prisma } from "@/lib/prisma";

export async function generateProposalNumber(): Promise<string> {
  const year = new Date().getFullYear();
  const count = await prisma.proposal.count();
  return `WL-${year}-${String(count + 1).padStart(4, "0")}`;
}
