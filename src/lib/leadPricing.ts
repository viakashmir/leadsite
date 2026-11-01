import { prisma } from "@/lib/prisma";

export type LeadPricing = { standardPrice: number; hotPrice: number; hotMinTravellers: number; updatedBy?: string | null; updatedAt?: Date | null };

export const DEFAULT_PRICING: LeadPricing = { standardPrice: 100, hotPrice: 200, hotMinTravellers: 4 };

/** Current prices from Admin -> Pricing (defaults until the table exists or is saved). */
export async function getLeadPricing(): Promise<LeadPricing> {
  try {
    const row = await prisma.leadPricing.findUnique({ where: { id: "default" } });
    return row ?? DEFAULT_PRICING;
  } catch {
    // Migration not applied yet: keep unlocks working at the default prices.
    return DEFAULT_PRICING;
  }
}

export const travellerCount = (lead: { adults: number; children: number }) => lead.adults + lead.children;

export const isHotLead = (lead: { adults: number; children: number }, p: LeadPricing) =>
  travellerCount(lead) >= p.hotMinTravellers;

/** Credits an agent pays to unlock this lead. */
export const leadPrice = (lead: { adults: number; children: number }, p: LeadPricing) =>
  isHotLead(lead, p) ? p.hotPrice : p.standardPrice;
