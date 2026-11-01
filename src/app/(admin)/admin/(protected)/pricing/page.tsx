import { prisma } from "@/lib/prisma";
import PricingForm from "@/components/admin/PricingForm";
import { getLeadPricing, isHotLead } from "@/lib/leadPricing";
import { formatDate } from "@/lib/format";

export default async function AdminPricingPage() {
  const pricing = await getLeadPricing();

  // Open leads (not booked, still below the agent cap) in each price band.
  const open = await prisma.lead.findMany({
    where: { status: { not: "BOOKED" } },
    select: { adults: true, children: true, maxUnlocks: true, _count: { select: { unlocks: true } } },
    take: 5000,
  });
  const available = open.filter((l) => l._count.unlocks < l.maxUnlocks);
  const hot = available.filter((l) => isHotLead(l, pricing)).length;

  return (
    <div className="max-w-3xl">
      <h1 className="text-lg font-semibold text-zinc-900">Lead Pricing</h1>
      <p className="mt-1 text-sm text-zinc-500">
        What an agent pays, in credits (1 credit = ₹1), to unlock a lead&apos;s contact details. Credits are deducted from
        the agent&apos;s wallet at the moment they unlock, at the price set here.
      </p>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-white px-3 py-1 text-zinc-600 ring-1 ring-inset ring-zinc-200">
          Open standard leads: <strong className="text-zinc-900">{available.length - hot}</strong>
        </span>
        <span className="rounded-full bg-white px-3 py-1 text-zinc-600 ring-1 ring-inset ring-zinc-200">
          Open hot leads: <strong className="text-orange-700">{hot}</strong>
        </span>
        {pricing.updatedAt && (
          <span className="px-1 py-1 text-zinc-400">
            Last changed {formatDate(pricing.updatedAt)}
            {pricing.updatedBy ? ` by ${pricing.updatedBy}` : ""}
          </span>
        )}
      </div>

      <div className="mt-4">
        <PricingForm
          initial={{
            standardPrice: pricing.standardPrice,
            hotPrice: pricing.hotPrice,
            hotMinTravellers: pricing.hotMinTravellers,
          }}
        />
      </div>
    </div>
  );
}
