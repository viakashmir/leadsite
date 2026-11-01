import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createLeadSchema } from "@/lib/validation";
import { clientIp, hit, tooManyRequests } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  // Agents pay to unlock leads, so junk leads cost them real money.
  if (!hit(`lead:${clientIp(req)}`, 5, 60 * 60_000)) return tooManyRequests();

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = createLeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Please check the form and try again", issues: parsed.error.issues },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot filled in: pretend success so the bot moves on, store nothing.
  if (data.website) return NextResponse.json({ ok: true }, { status: 201 });

  const destination = await prisma.destination.findUnique({ where: { id: data.destinationId } });
  if (!destination) {
    return NextResponse.json({ error: "Unknown destination" }, { status: 400 });
  }

  // City and source package must belong to the chosen destination; otherwise
  // the lead would show up to agents under the wrong place (or 500 on a
  // dangling foreign key).
  const city = data.cityId
    ? await prisma.city.findFirst({ where: { id: data.cityId, destinationId: destination.id }, select: { id: true } })
    : null;
  const sourcePackage = data.sourcePackageId
    ? await prisma.package.findFirst({
        where: { id: data.sourcePackageId, destinationId: destination.id },
        select: { id: true },
      })
    : null;

  // Same phone + destination within a day is a double submit, not a new lead;
  // don't let it be sold to agents twice.
  const duplicate = await prisma.lead.findFirst({
    where: {
      phone: data.phone,
      destinationId: destination.id,
      createdAt: { gte: new Date(Date.now() - 24 * 60 * 60_000) },
    },
    select: { id: true },
  });
  if (duplicate) {
    return NextResponse.json({ ok: true, leadId: duplicate.id, duplicate: true }, { status: 200 });
  }

  const travelDate = data.travelDate ? new Date(data.travelDate) : undefined;

  const lead = await prisma.lead.create({
    data: {
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      originCity: data.originCity || undefined,
      destinationId: destination.id,
      cityId: city?.id,
      sourcePackageId: sourcePackage?.id,
      travelDate,
      durationDays: data.durationDays,
      adults: data.adults,
      children: data.children,
      budgetBand: data.budgetBand || undefined,
      message: data.message || undefined,
      // Premium destinations (Kashmir, Ladakh, international...) carry their own price.
      ...(destination.leadUnlockPrice ? { unlockPrice: destination.leadUnlockPrice } : {}),
      activities: {
        create: {
          type: "CREATED",
          actor: "System",
          detail: sourcePackage ? "Enquiry submitted from a package page" : `Enquiry submitted for ${destination.name}`,
        },
      },
    },
  });

  return NextResponse.json({ ok: true, leadId: lead.id }, { status: 201 });
}
