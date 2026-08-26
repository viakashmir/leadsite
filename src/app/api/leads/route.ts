import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createLeadSchema } from "@/lib/validation";

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

  return NextResponse.json({ ok: true, leadId: lead.id }, { status: 201 });
}
