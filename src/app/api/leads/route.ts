import { NextRequest, NextResponse, after } from "next/server";
import { prisma } from "@/lib/prisma";
import { createLeadSchema } from "@/lib/validation";
import type { Lead } from "@/generated/prisma/client";

// Mirror new leads into the ViaItinerary CRM so agency staff see them without
// checking this site separately. Scheduled via `after()` so it runs once the
// response has already been sent — it can never add latency to, or fail, the
// visitor's actual enquiry submission. A missing/unreachable CRM just means
// this one lead isn't mirrored; it's logged and otherwise ignored.
const VIAITINERARY_INQUIRY_URL =
  process.env.VIAITINERARY_INQUIRY_URL || "https://crm.viakashmir.in/api/public-inquiries";

async function notifyViaItinerary(lead: Lead, destinationName: string) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(VIAITINERARY_INQUIRY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_name: lead.name,
        client_email: lead.email || undefined,
        client_phone: lead.phone,
        destination: destinationName,
        adults: lead.adults,
        // The CRM splits kids into CNB / 5-12 buckets; this site only tracks
        // a single child count, so it's folded into the 5-12 bucket rather
        // than dropped or guessed at.
        kids5to12: lead.children,
        startDate: lead.travelDate ? lead.travelDate.toISOString().slice(0, 10) : undefined,
        duration: lead.durationDays != null ? String(lead.durationDays) : undefined,
        specialRequests:
          [lead.budgetBand ? `Budget: ${lead.budgetBand}` : null, lead.message || null]
            .filter(Boolean)
            .join(" — ") || undefined,
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) {
      console.error(
        "[viaitinerary-sync] CRM rejected lead",
        lead.id,
        res.status,
        await res.text().catch(() => ""),
      );
    }
  } catch (err) {
    console.error("[viaitinerary-sync] failed to sync lead", lead.id, err);
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = createLeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const data = parsed.data;

  const destination = await prisma.destination.findUnique({ where: { id: data.destinationId } });
  if (!destination) {
    return NextResponse.json({ error: "Unknown destination" }, { status: 400 });
  }

  const lead = await prisma.lead.create({
    data: {
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      originCity: data.originCity || undefined,
      destinationId: data.destinationId,
      cityId: data.cityId || undefined,
      sourcePackageId: data.sourcePackageId || undefined,
      travelDate: data.travelDate ? new Date(data.travelDate) : undefined,
      durationDays: data.durationDays,
      adults: data.adults,
      children: data.children,
      budgetBand: data.budgetBand || undefined,
      message: data.message || undefined,
    },
  });

  await prisma.leadActivity.create({
    data: {
      leadId: lead.id,
      type: "CREATED",
      actor: "System",
      detail: data.sourcePackageId
        ? "Enquiry submitted from a package page"
        : `Enquiry submitted for ${destination.name}`,
    },
  });

  after(() => notifyViaItinerary(lead, destination.name));

  return NextResponse.json({ ok: true, leadId: lead.id }, { status: 201 });
}
