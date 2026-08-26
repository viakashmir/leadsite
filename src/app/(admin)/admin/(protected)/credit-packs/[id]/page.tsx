import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CreditPackForm from "@/components/admin/CreditPackForm";
import { updateCreditPack } from "@/lib/adminActions";

export default async function EditCreditPackPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pack = await prisma.creditPack.findUnique({ where: { id } });
  if (!pack) notFound();

  const boundUpdate = updateCreditPack.bind(null, pack.id);

  return (
    <div>
      <h1 className="text-lg font-semibold text-zinc-900">Edit Credit Pack</h1>
      <div className="mt-4">
        <CreditPackForm action={boundUpdate} initial={pack} showActiveToggle />
      </div>
    </div>
  );
}
