import { prisma } from "@/lib/prisma";
import { isPhoto, packagePhoto } from "@/lib/media";
import { ADMIN_EMAILS, CUSTOMER_REPLY_TO, sendEmail } from "./resend";

type Sent = { who: string; result: Awaited<ReturnType<typeof sendEmail>> };

// "arfatshah.qa@gmail.com" -> "ar***@gmail.com", for the activity log.
const maskEmail = (e: string) => e.replace(/^(.{2})[^@]*/, "$1***");

// One alert per admin address, sent in parallel, so a rejected address or a
// mailbox problem on one recipient never stops the others from getting it.
function adminAlerts(email: { subject: string; html: string; text: string }, replyTo: string | null, tag: string) {
  return ADMIN_EMAILS.map((to) =>
    sendEmail({
      to,
      subject: email.subject,
      html: email.html,
      text: email.text,
      replyTo: replyTo ?? undefined,
      tags: [{ name: "type", value: tag }],
    }).then((result): Sent => ({ who: `admin ${maskEmail(to)}`, result })),
  );
}
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

    const jobs: Promise<{ who: string; result: Awaited<ReturnType<typeof sendEmail>> }>[] = adminAlerts(
      adminNewLeadEmail(data),
      lead.email,
      "admin_new_lead",
    );

    // At most one acknowledgement per address per day, so the public form
    // can't be used to flood a stranger's inbox from our domain.
    const recentlyEmailed = lead.email
      ? await prisma.lead.count({
          where: {
            id: { not: lead.id },
            email: lead.email,
            createdAt: { gte: new Date(Date.now() - 24 * 60 * 60_000) },
          },
        })
      : 0;

    if (lead.email && !recentlyEmailed) {
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
          replyTo: CUSTOMER_REPLY_TO,
          tags: [{ name: "type", value: "customer_ack" }],
        }).then((result) => ({ who: "customer", result })),
      );
    }

    const results = await Promise.all(jobs);
    const detail = [
      ...results.map(({ who, result }) => (result.ok ? `${who} email sent` : `${who} email failed (${result.error})`)),
      ...(recentlyEmailed ? ["customer email skipped (address already emailed in the last 24h)"] : []),
    ].join("; ");
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

// The same person (same phone, same destination) submitted the form again
// within 24 hours. No new lead is created, so agents are not sold the same
// trip twice, but the lead desk is still alerted with what was just submitted,
// since dates or group size may have changed. No second customer email.
export async function notifyRepeatLead(
  leadId: string,
  submitted: {
    name: string;
    email: string | null;
    phone: string;
    originCity: string | null;
    cityId: string | null;
    sourcePackageId: string | null;
    travelDate: Date | null;
    durationDays: number | null;
    adults: number;
    children: number;
    budgetBand: string | null;
    message: string | null;
  },
): Promise<void> {
  try {
    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
      include: { destination: { select: { name: true, slug: true, heroImage: true } } },
    });
    if (!lead) return;
    const [city, pkg] = await Promise.all([
      submitted.cityId ? prisma.city.findUnique({ where: { id: submitted.cityId }, select: { name: true, heroImage: true } }) : null,
      submitted.sourcePackageId
        ? prisma.package.findUnique({ where: { id: submitted.sourcePackageId }, select: { title: true, slug: true, heroImage: true } })
        : null,
    ]);

    const data: LeadEmailData = {
      id: lead.id,
      name: submitted.name,
      email: submitted.email,
      phone: submitted.phone,
      originCity: submitted.originCity,
      destinationName: lead.destination.name,
      destinationSlug: lead.destination.slug,
      destinationImage: [pkg?.heroImage, city?.heroImage, lead.destination.heroImage].find((src) => isPhoto(src)) ?? null,
      cityName: city?.name ?? null,
      packageTitle: pkg?.title ?? null,
      packageSlug: pkg?.slug ?? null,
      travelDate: submitted.travelDate,
      durationDays: submitted.durationDays,
      adults: submitted.adults,
      children: submitted.children,
      budgetBand: submitted.budgetBand,
      message: submitted.message,
      createdAt: new Date(),
    };
    const base = adminNewLeadEmail(data);
    const email = {
      subject: base.subject.replace(/^New lead:/, "Repeat enquiry:"),
      html: base.html.replace("New lead received", "Repeat enquiry (same phone and destination within 24 hours)"),
      text: `REPEAT ENQUIRY: same phone and destination as lead #${lead.id.slice(-6)} within 24 hours.\n\n${base.text}`,
    };

    const results = await Promise.all(adminAlerts(email, submitted.email, "admin_repeat_lead"));
    for (const { who, result } of results) {
      if (!result.ok) console.error(`[lead-email] ${who} repeat email for lead ${leadId} failed: ${result.error}`);
    }
    const detail = results.map(({ who, result }) => (result.ok ? `${who} sent` : `${who} failed (${result.error})`)).join("; ");
    await prisma.leadActivity.create({
      data: { leadId, type: "EMAIL", actor: "System", detail: `Repeat enquiry submitted; ${detail}`.slice(0, 500) },
    });
  } catch (err) {
    console.error(`[lead-email] repeat notification for lead ${leadId} failed`, err);
  }
}
