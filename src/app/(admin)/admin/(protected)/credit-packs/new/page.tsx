import CreditPackForm from "@/components/admin/CreditPackForm";
import { createCreditPack } from "@/lib/adminActions";

export default function NewCreditPackPage() {
  return (
    <div>
      <h1 className="text-lg font-semibold text-zinc-900">New Credit Pack</h1>
      <div className="mt-4">
        <CreditPackForm action={createCreditPack} />
      </div>
    </div>
  );
}
