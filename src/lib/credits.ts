import { prisma } from "@/lib/prisma";

// 1 credit = INR 1 of lead-buying power. Packs live in the CreditPack table so
// admins can create/edit/retire them from /admin/credit-packs without a code change.

// Credits every new agent account starts with. The homepage quotes this
// number, so change it here only.
export const WELCOME_CREDITS = 500;

export async function getActiveCreditPacks() {
  return prisma.creditPack.findMany({
    where: { active: true },
    orderBy: { sortOrder: "asc" },
  });
}

export async function getCreditPack(id: string) {
  return prisma.creditPack.findUnique({ where: { id } });
}
