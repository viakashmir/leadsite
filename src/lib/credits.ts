export type CreditPack = {
  id: string;
  amountINR: number;
  baseCredits: number;
  bonusCredits: number;
};

// 1 credit = INR 1 of lead-buying power. Bonus % mirrors the "15-20% bonus
// on first payments" pattern used by Holidify/TripCrafters to reward top-ups.
export const CREDIT_PACKS: CreditPack[] = [
  { id: "starter", amountINR: 500, baseCredits: 500, bonusCredits: 0 },
  { id: "growth", amountINR: 1000, baseCredits: 1000, bonusCredits: 100 },
  { id: "pro", amountINR: 2500, baseCredits: 2500, bonusCredits: 375 },
  { id: "scale", amountINR: 5000, baseCredits: 5000, bonusCredits: 1000 },
];

export function getCreditPack(id: string): CreditPack | undefined {
  return CREDIT_PACKS.find((p) => p.id === id);
}
