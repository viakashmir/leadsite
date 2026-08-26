export type ProposalPlan = {
  id: string;
  name: string;
  tagline: string;
  priceINR: number;
  walletCredits: number;
  validityMonths: number;
  domesticLeadPrice: number;
  internationalLeadPrice: number;
  features: string[];
};

export const PROPOSAL_PLANS: ProposalPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For agents just getting started with inbound leads",
    priceINR: 12000,
    walletCredits: 12000,
    validityMonths: 2,
    domesticLeadPrice: 100,
    internationalLeadPrice: 150,
    features: [
      "12,000 wallet credits for buying leads",
      "2 months credit validity",
      "Domestic leads at ₹100 each",
      "International leads at ₹150 each",
      "Free listing in the agent directory",
      "Unlimited package uploads",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For agencies scaling their booking volume",
    priceINR: 25000,
    walletCredits: 27500,
    validityMonths: 3,
    domesticLeadPrice: 90,
    internationalLeadPrice: 135,
    features: [
      "25,000 credits + 2,500 bonus credits",
      "3 months credit validity",
      "Domestic leads at ₹90 each",
      "International leads at ₹135 each",
      "Priority placement in destination lead pools",
      "Unlimited package uploads + featured catalog page",
      "Dedicated relationship manager",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For established agencies buying leads at volume",
    priceINR: 50000,
    walletCredits: 60000,
    validityMonths: 6,
    domesticLeadPrice: 80,
    internationalLeadPrice: 120,
    features: [
      "50,000 credits + 10,000 bonus credits",
      "6 months credit validity",
      "Domestic leads at ₹80 each",
      "International leads at ₹120 each",
      "First-look access to high-intent leads before general release",
      "Unlimited package uploads + featured catalog page",
      "Dedicated relationship manager + monthly performance review",
    ],
  },
];

export function getProposalPlan(id: string): ProposalPlan | undefined {
  return PROPOSAL_PLANS.find((p) => p.id === id);
}

export const DEFAULT_KYC_CHECKLIST = [
  "Business PAN card",
  "GST registration certificate",
  "Proprietor / Director Aadhaar or address proof",
  "Cancelled cheque or bank statement",
  "Business registration certificate (if applicable)",
];

export const DEFAULT_TERMS_TEXT = [
  "This proposal is valid until the date shown above; prices may change after that.",
  "Wallet credits are activated within 24 hours of payment and KYC verification.",
  "Credits are non-transferable and expire at the end of the plan's validity period.",
  "Lead pricing for long-haul / low-volume destinations may vary from the rates above.",
].join("\n");

export const DEFAULT_REVERSAL_POLICY_TEXT = [
  "A lead is automatically credited back to your wallet if the traveler's number is invalid or unreachable after 3 attempts.",
  "Leads are also reversed if the traveler confirms, on first contact, that they never submitted an enquiry.",
  "Reversal requests must be raised within 48 hours of unlocking the lead.",
].join("\n");

export const DEFAULT_REFUND_POLICY_TEXT = [
  "Unused wallet credits are refundable within 7 days of purchase, minus credits already spent.",
  "Refunds are processed to the original payment method within 7-10 working days of approval.",
  "No refund is issued once a plan's validity period has ended.",
].join("\n");
