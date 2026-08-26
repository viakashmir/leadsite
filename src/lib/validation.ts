import { z } from "zod";

export const createLeadSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{8,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email().optional().or(z.literal("")),
  originCity: z.string().trim().max(100).optional().or(z.literal("")),
  destinationId: z.string().min(1),
  cityId: z.string().optional().or(z.literal("")),
  sourcePackageId: z.string().optional().or(z.literal("")),
  travelDate: z.string().optional().or(z.literal("")),
  durationDays: z.coerce.number().int().positive().optional(),
  adults: z.coerce.number().int().min(1).max(30).default(2),
  children: z.coerce.number().int().min(0).max(20).default(0),
  budgetBand: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type CreateLeadInput = z.infer<typeof createLeadSchema>;

export const agentRegisterSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  companyName: z.string().trim().min(2).max(150),
  contactName: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{8,15}$/, "Enter a valid phone number"),
  servicesWanted: z.array(z.string()).min(1, "Select at least one service"),
  destinationIds: z.array(z.string()).min(1, "Select at least one destination"),
  dailyLeadTarget: z.coerce.number().int().min(1).max(1000).default(10),
  officeAddress: z.string().trim().max(300).optional().or(z.literal("")),
  officeCity: z.string().trim().max(100).optional().or(z.literal("")),
  officeState: z.string().trim().max(100).optional().or(z.literal("")),
  gstNumber: z.string().trim().max(30).optional().or(z.literal("")),
  companySince: z.coerce.number().int().min(1950).max(2030).optional(),
  teamSize: z.coerce.number().int().min(1).max(100000).optional(),
  companyType: z
    .enum(["PROPRIETORSHIP", "PARTNERSHIP", "PRIVATE_LIMITED", "LLP", "OTHER"])
    .optional(),
  facebookUrl: z.string().trim().max(300).optional().or(z.literal("")),
  instagramUrl: z.string().trim().max(300).optional().or(z.literal("")),
});

export type AgentRegisterInput = z.infer<typeof agentRegisterSchema>;

export const agentLoginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1),
});

export const SERVICE_OPTIONS = [
  { value: "TRAVEL_LEADS", label: "Travel Leads" },
  { value: "TRAVEL_CRM", label: "Travel CRM" },
  { value: "TRAVEL_WEBSITE", label: "Travel Website" },
  { value: "ITINERARY_BUILDER", label: "Itinerary Builder" },
  { value: "B2B_FLIGHTS", label: "B2B Flights" },
  { value: "B2B_HOTEL", label: "B2B Hotel" },
  { value: "CHAT_CALL_LEADS", label: "Chat/Call Leads" },
  { value: "B2B_PROMOTION", label: "B2B Promotion" },
  { value: "PAYMENT_GATEWAY", label: "Payment Gateway" },
] as const;
