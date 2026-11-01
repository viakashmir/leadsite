import { prisma } from "@/lib/prisma";
import { isPhoto, packagePhoto } from "@/lib/media";
import { ADMIN_EMAIL, sendEmail } from "./resend";
import { adminNewLeadEmail, customerAcknowledgementEmail, type LeadEmailData } from "./templates";

// Sends the admin alert and the customer "thanks for contacting us" email for
// a newly created lead. Never throws: a mail outage must not lose a lead, so
// failures are logged and recorded on the lead's activity timeline instead.
export async function notifyNewLead(leadId: string): Promise<void> {
  try {
    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
      include: {
        destination: { select: { id: true, name: true, slug: true, heroImage: true } },
        city: { select: { name: true, heroImage: true } },
        sourcePackage: { select: { title: true, slug: true, heroImage: true } },
      },
    });
    if (!lead) return;

    const data: LeadEmailData = {
      id: lead.id,
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      originCity: lead.originCity,
      destinationName: lead.destination.name,
      destinationSlug: lead.destination.slug,
      destinationImage:
        [lead.sourcePackage?.heroImage, lead.city?.heroImage, lead.destination.heroImage].find((s) => isPhoto(s)) ?? null,
      cityName: lead.city?.name ?? null,
      packageTitle: lead.sourcePackage?.title ?? null,
      packageSlug: lead.sourcePackage?.slug ?? null,
      travelDate: lead.travelDate,
      durationDays: lead.durationDays,
      adults: lead.adults,
      children: lead.children,
      budgetBand: lead.budgetBand,
      message: lead.message,
      createdAt: lead.createdAt,
    };

    const admin = adminNewLeadEmail(data);
    const jobs: Promise<{ who: string; result: Awaited<ReturnType<typeof sendEmail>> }>[] = [
      sendEmail({
        to: ADMIN_EMAIL,
        subject: admin.subject,
        html: admin.html,
        text: admin.text,
        replyTo: lead.email ?? undefined,
        tags: [{ name: "type", value: "admin_new_lead" }],
      }).then((result) => ({ who: "admin", result })),
    ];

    if (lead.email) {
      const suggestions = await prisma.package
        .findMany({
          where: {
            destinationId: lead.destination.id,
            published: true,
            ...(lead.sourcePackageId ? { id: { not: lead.sourcePackageId } } : {}),
          },
          orderBy: { createdAt: "desc" },
          take: 3,
          select: {
            title: true,
            slug: true,
            heroImage: true,
            durationDays: true,
            durationNights: true,
            price: true,
            city: { select: { heroImage: true } },
            destination: { select: { heroImage: true } },
          },
        })
        .catch(() => []);

      const customer = customerAcknowledgementEmail(
        data,
        suggestions.map((p) => ({ ...p, image: packagePhoto(p) })),
      );
      jobs.push(
        sendEmail({
          to: lead.email,
          subject: customer.subject,
          html: customer.html,
          text: customer.text,
          replyTo: ADMIN_EMAIL,
          tags: [{ name: "type", value: "customer_ack" }],
        }).then((result) => ({ who: "customer", result })),
      );
    }

    const results = await Promise.all(jobs);
    const detail = results
      .map(({ who, result }) => (result.ok ? `${who} email sent` : `${who} email failed (${result.error})`))
      .join("; ");
    for (const { who, result } of results) {
      if (!result.ok) console.error(`[lead-email] ${who} email for lead ${leadId} failed: ${result.error}`);
    }

    await prisma.leadActivity.create({
      data: { leadId, type: "EMAIL", actor: "System", detail: detail.slice(0, 500) },
    });
  } catch (err) {
    console.error(`[lead-email] notifying lead ${leadId} failed`, err);
  }
}
