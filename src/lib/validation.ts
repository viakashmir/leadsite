import { z } from "zod";

export const createLeadSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\-\s]{7,18}$/, "Enter a valid phone number"),
  email: z.string().trim().toLowerCase().email("Enter a valid email").max(200),
  originCity: z.string().trim().max(100).optional().or(z.literal("")),
  destinationId: z.string().min(1, "Choose a destination").max(64),
  cityId: z.string().max(64).optional().or(z.literal("")),
  sourcePackageId: z.string().max(64).optional().or(z.literal("")),
  travelDate: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine((v) => !v || !Number.isNaN(new Date(v).getTime()), "Enter a valid travel date"),
  durationDays: z.coerce.number().int().positive().max(90).optional(),
  adults: z.coerce.number().int().min(1).max(30).default(2),
  children: z.coerce.number().int().min(0).max(20).default(0),
  budgetBand: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  // Honeypot: hidden from people, filled in by bots.
  website: z.string().optional(),
});

export type CreateLeadInput = z.infer<typeof createLeadSchema>;

// Profile links are shown as clickable links in the admin CRM, so only
// http(s) URLs are stored; a bare "facebook.com/x" gets https:// added.
const socialUrl = z
  .string()
  .trim()
  .max(300)
  .transform((v) => (v && !/^[a-z][a-z0-9+.-]*:/i.test(v) ? `https://${v}` : v))
  .refine((v) => !v || /^https?:\/\/[^\s]+$/i.test(v), "Enter a valid link")
  .optional();

export const agentRegisterSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(200),
  // bcrypt only uses the first 72 bytes of a password.
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(72, "Password must be at most 72 characters"),
  companyName: z.string().trim().min(2).max(150),
  contactName: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{8,15}$/, "Enter a valid phone number"),
  servicesWanted: z
    .array(z.string().refine((v) => SERVICE_OPTIONS.some((o) => o.value === v), "Unknown service"))
    .min(1, "Select at least one service")
    .max(20),
  destinationIds: z.array(z.string().max(64)).min(1, "Select at least one destination").max(200),
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
  facebookUrl: socialUrl,
  instagramUrl: socialUrl,
});

export type AgentRegisterInput = z.infer<typeof agentRegisterSchema>;

export const agentLoginSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(200),
  password: z.string().min(1).max(200),
});

export const agentPackageSchema = z.object({
  title: z.string().trim().min(3).max(150),
  destinationId: z.string().min(1).max(64),
  cityId: z.string().max(64).optional().or(z.literal("")),
  summary: z.string().trim().min(10).max(1000),
  itinerary: z.string().trim().max(10000).optional().or(z.literal("")),
  durationDays: z.coerce.number().int().min(1).max(60),
  durationNights: z.coerce.number().int().min(0).max(60),
  price: z.coerce.number().int().min(100).max(10_000_000),
  theme: z.string().trim().max(100).optional().or(z.literal("")),
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
