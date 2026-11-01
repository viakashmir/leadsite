// Emails around travel agents: signup, approval, credit purchases and lead
// unlocks, plus the "meet your travel expert" email to the traveller.
// Same look as the lead emails (layout/button/detailRows from ./templates).

import { SITE_NAME, absoluteUrl } from "@/lib/site";
import { C, FONT, button, date, detailRows, esc, firstName as safeFirstName, inr, layout } from "./templates";

// First name when it looks like one, otherwise a neutral greeting.
const firstName = (name: string) => safeFirstName(name) || "there";

type Email = { subject: string; html: string; text: string };

// One section of a transactional email: hero band, intro, optional detail
// table, optional extra block and a call-to-action button.
function card(opts: {
  preheader: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  heroBg?: string;
  intro: string[]; // already-escaped HTML paragraphs
  detailsTitle?: string;
  details?: [string, string | null | undefined][]; // values already escaped
  extra?: string;
  cta?: { href: string; label: string };
  footerNote: string;
}): string {
  const body = `
<tr><td class="px" bgcolor="${opts.heroBg ?? C.brand}" style="background:${opts.heroBg ?? C.brand};padding:34px 36px 30px;">
<p style="margin:0 0 8px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${C.goldSoft};">${opts.eyebrow}</p>
<h1 class="hero-title" style="margin:0;font-family:${FONT};font-size:28px;line-height:36px;font-weight:800;color:#ffffff;">${opts.title}</h1>
${opts.subtitle ? `<p style="margin:10px 0 0;font-family:${FONT};font-size:15px;line-height:23px;color:#f3e3e5;">${opts.subtitle}</p>` : ""}
</td></tr>
<tr><td class="px" style="padding:30px 36px 6px;">
${opts.intro.map((p) => `<p style="margin:0 0 14px;font-family:${FONT};font-size:15px;line-height:24px;color:${C.inkSoft};">${p}</p>`).join("")}
</td></tr>
${
  opts.details
    ? `<tr><td class="px" style="padding:6px 36px 6px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.ivory};border:1px solid ${C.line};border-left:4px solid ${C.gold};border-radius:12px;"><tr><td style="padding:18px 22px;">
${opts.detailsTitle ? `<p style="margin:0 0 6px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.gold};">${opts.detailsTitle}</p>` : ""}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${detailRows(opts.details)}</table>
</td></tr></table></td></tr>`
    : ""
}
${opts.extra ?? ""}
${opts.cta ? `<tr><td class="px" align="center" style="padding:26px 36px 36px;">${button(opts.cta.href, opts.cta.label)}</td></tr>` : `<tr><td style="padding:12px;"></td></tr>`}`;
  return layout({ preheader: opts.preheader, body, footerNote: opts.footerNote });
}

function steps(items: [string, string][]): string {
  return `<tr><td class="px" style="padding:18px 36px 0;">
<p style="margin:0 0 10px;font-family:${FONT};font-size:18px;font-weight:800;color:${C.ink};">Your next steps</p>
${items
  .map(
    ([t, d], i) => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;"><tr>
<td width="40" style="vertical-align:top;"><div style="width:30px;height:30px;line-height:30px;border-radius:50%;background:${C.brand};color:#fff;text-align:center;font-family:${FONT};font-weight:800;font-size:14px;">${i + 1}</div></td>
<td style="vertical-align:top;font-family:${FONT};"><p style="margin:4px 0 2px;font-size:15px;font-weight:700;color:${C.ink};">${t}</p><p style="margin:0;font-size:13px;line-height:19px;color:${C.inkSoft};">${d}</p></td>
</tr></table>`,
  )
  .join("")}
</td></tr>`;
}

const text = (lines: (string | false | null | undefined)[]) => lines.filter((l) => l !== false && l != null).join("\n");
const tel = (phone: string) => phone.replace(/[^\d+]/g, "");
const telLink = (phone: string) => `<a href="tel:${esc(tel(phone))}" style="color:${C.brand};text-decoration:none;">${esc(phone)}</a>`;
const mailLink = (email: string) => `<a href="mailto:${esc(email)}" style="color:${C.brand};text-decoration:none;">${esc(email)}</a>`;

export type AgentEmailData = {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  officeCity: string | null;
  officeState: string | null;
  credits: number;
  destinations: string[];
  services: string[];
};

const agentPlace = (a: AgentEmailData) => [a.officeCity, a.officeState].filter(Boolean).join(", ");

// ------------------------------------------------------------ signup

export function agentWelcomeEmail(a: AgentEmailData, bonusCredits: number): Email {
  const dash = absoluteUrl("/agent/dashboard");
  return {
    subject: `Welcome to ${SITE_NAME}, ${firstName(a.contactName)}! Your agent account is under review`,
    html: card({
      preheader: `${bonusCredits} free credits are waiting. We're verifying your profile now.`,
      eyebrow: "Welcome aboard",
      title: `Welcome to ${esc(SITE_NAME)}, ${esc(firstName(a.contactName))}!`,
      subtitle: `${esc(a.companyName)} is now registered as a travel partner. Real traveller enquiries, delivered to you.`,
      intro: [
        `Thanks for signing up. Our team is <strong style="color:${C.ink};">verifying your profile</strong>, which usually takes less than a working day. We'll email you the moment it's approved.`,
        `We've added <strong style="color:${C.brand};">${bonusCredits} free credits</strong> to your wallet so you can start unlocking leads right after approval.`,
      ],
      detailsTitle: "Your account",
      details: [
        ["Company", esc(a.companyName)],
        ["Login email", esc(a.email)],
        ["Destinations", esc(a.destinations.join(", ")) || null],
        ["Welcome credits", `${bonusCredits}`],
        ["Status", `<span style="color:#b45309;">Under review</span>`],
      ],
      extra: steps([
        ["We verify your profile", "A quick check so travellers only meet genuine agents."],
        ["Browse matching leads", "See enquiries for the destinations you serve, with trip details and budgets."],
        ["Unlock and win the booking", "Unlock a lead to get the traveller's phone and email. Each lead goes to at most 3 agents."],
        ["List your packages", "Add your own tour packages. They go live on the site once you're approved."],
      ]),
      cta: { href: dash, label: "Go to your dashboard &rarr;" },
      footerNote: `You're receiving this because you created a travel agent account on ${esc(SITE_NAME)}.`,
    }),
    text: text([
      `Hi ${firstName(a.contactName)},`,
      ``,
      `Welcome to ${SITE_NAME}! ${a.companyName} is registered and our team is verifying your profile. We'll email you once it's approved.`,
      `${bonusCredits} free credits are in your wallet.`,
      ``,
      `Dashboard: ${dash}`,
    ]),
  };
}

export function adminAgentSignupEmail(a: AgentEmailData): Email {
  const review = absoluteUrl(`/admin/agents/${a.id}`);
  return {
    subject: `New agent signup: ${a.companyName} (needs approval)`,
    html: card({
      preheader: `${a.contactName} · ${agentPlace(a) || "location not given"} · ${a.destinations.join(", ")}`,
      eyebrow: "New agent signup",
      title: `${esc(a.companyName)} wants to join`,
      subtitle: "Review the profile and approve it so they can start unlocking leads.",
      intro: [],
      detailsTitle: "Agent",
      details: [
        ["Company", esc(a.companyName)],
        ["Contact", esc(a.contactName)],
        ["Phone", telLink(a.phone)],
        ["Email", mailLink(a.email)],
        ["Office", esc(agentPlace(a)) || null],
        ["Destinations", esc(a.destinations.join(", ")) || null],
        ["Services", esc(a.services.join(", ")) || null],
      ],
      cta: { href: review, label: "Review &amp; approve &rarr;" },
      footerNote: `Admin notification for agent ${esc(a.id)}.`,
    }),
    text: text([
      `New agent signup: ${a.companyName}`,
      `Contact: ${a.contactName}, ${a.phone}, ${a.email}`,
      agentPlace(a) && `Office: ${agentPlace(a)}`,
      `Destinations: ${a.destinations.join(", ")}`,
      ``,
      `Review & approve: ${review}`,
    ]),
  };
}

// ------------------------------------------------------------ approval

export function agentApprovedEmail(a: AgentEmailData): Email {
  const leads = absoluteUrl("/agent/dashboard/leads");
  return {
    subject: `Your ${SITE_NAME} profile is approved. Start unlocking leads!`,
    html: card({
      preheader: `You're verified. ${a.credits} credits ready to use on traveller leads.`,
      eyebrow: "Profile approved ✓",
      heroBg: "#166534",
      title: `You're verified, ${esc(firstName(a.contactName))}!`,
      subtitle: `${esc(a.companyName)} is now a verified ${esc(SITE_NAME)} travel partner.`,
      intro: [
        `Great news: your profile has been approved. You can now unlock traveller enquiries and get their phone number and email instantly.`,
        `Your packages are live on the site as well, so travellers can find you directly.`,
      ],
      details: [
        ["Status", `<span style="color:#166534;">Verified ✓</span>`],
        ["Wallet balance", `${a.credits} credits`],
        ["Destinations", esc(a.destinations.join(", ")) || null],
      ],
      extra: `<tr><td class="px" style="padding:18px 36px 0;"><p style="margin:0;font-family:${FONT};font-size:14px;line-height:22px;color:${C.inkSoft};"><strong style="color:${C.ink};">Tip:</strong> travellers book with whoever calls first with a good plan. Unlock fresh leads quickly and call within the hour.</p></td></tr>`,
      cta: { href: leads, label: "Browse leads now &rarr;" },
      footerNote: `You're receiving this because you have a travel agent account on ${esc(SITE_NAME)}.`,
    }),
    text: text([
      `Hi ${firstName(a.contactName)},`,
      ``,
      `Your ${SITE_NAME} profile for ${a.companyName} is approved. You can now unlock leads.`,
      `Wallet balance: ${a.credits} credits.`,
      ``,
      `Browse leads: ${leads}`,
    ]),
  };
}

// ------------------------------------------------------------ credit purchase

export type PurchaseEmailData = {
  orderId: string;
  packName: string;
  amountINR: number;
  creditsAdded: number;
  paymentId: string | null;
  paidAt: Date;
};

export function agentPurchaseEmail(a: AgentEmailData, p: PurchaseEmailData): Email {
  const leads = absoluteUrl("/agent/dashboard/leads");
  return {
    subject: `Payment received: ${p.creditsAdded} credits added to your wallet`,
    html: card({
      preheader: `${p.packName} · ${inr(p.amountINR)} · new balance ${a.credits} credits`,
      eyebrow: "Payment successful ✓",
      title: `${p.creditsAdded} credits added`,
      subtitle: `Thanks for your purchase, ${esc(firstName(a.contactName))}. Your wallet is topped up and ready.`,
      intro: [`Here's your receipt. Keep it for your records.`],
      detailsTitle: "Receipt",
      details: [
        ["Plan", esc(p.packName)],
        ["Amount paid", inr(p.amountINR)],
        ["Credits added", `${p.creditsAdded}`],
        ["New balance", `<span style="color:${C.brand};">${a.credits} credits</span>`],
        ["Date", esc(date(p.paidAt))],
        ["Payment ID", p.paymentId ? esc(p.paymentId) : null],
        ["Order ID", esc(p.orderId)],
      ],
      cta: { href: leads, label: "Use your credits &rarr;" },
      footerNote: `Receipt for ${esc(a.companyName)}.`,
    }),
    text: text([
      `Payment received. ${p.creditsAdded} credits added to your wallet.`,
      `Plan: ${p.packName}`,
      `Amount: ${inr(p.amountINR)}`,
      `New balance: ${a.credits} credits`,
      p.paymentId && `Payment ID: ${p.paymentId}`,
      ``,
      `Browse leads: ${leads}`,
    ]),
  };
}

export function adminPurchaseEmail(a: AgentEmailData, p: PurchaseEmailData): Email {
  const link = absoluteUrl(`/admin/agents/${a.id}`);
  return {
    subject: `${a.companyName} bought ${p.packName}: ${inr(p.amountINR)}`,
    html: card({
      preheader: `${p.creditsAdded} credits · ${inr(p.amountINR)} via Razorpay`,
      eyebrow: "New payment",
      heroBg: "#166534",
      title: `${inr(p.amountINR)} from ${esc(a.companyName)}`,
      intro: [],
      details: [
        ["Agent", esc(a.companyName)],
        ["Contact", `${esc(a.contactName)} · ${telLink(a.phone)}`],
        ["Plan", esc(p.packName)],
        ["Amount", inr(p.amountINR)],
        ["Credits added", `${p.creditsAdded}`],
        ["Agent balance", `${a.credits} credits`],
        ["Payment ID", p.paymentId ? esc(p.paymentId) : null],
      ],
      cta: { href: link, label: "Open agent &rarr;" },
      footerNote: `Admin notification for order ${esc(p.orderId)}.`,
    }),
    text: text([
      `${a.companyName} bought ${p.packName}: ${inr(p.amountINR)}, ${p.creditsAdded} credits.`,
      p.paymentId && `Payment ID: ${p.paymentId}`,
      `Agent: ${link}`,
    ]),
  };
}

// ------------------------------------------------------------ lead unlock

export type UnlockLeadData = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  place: string;
  travelDate: Date | null;
  durationDays: number | null;
  adults: number;
  children: number;
  budgetBand: string | null;
  message: string | null;
  creditsSpent: number;
};

const people = (l: UnlockLeadData) =>
  `${l.adults} adult${l.adults === 1 ? "" : "s"}${l.children ? `, ${l.children} child${l.children === 1 ? "" : "ren"}` : ""}`;

export function agentLeadUnlockedEmail(a: AgentEmailData, l: UnlockLeadData): Email {
  const leads = absoluteUrl("/agent/dashboard/leads");
  const wa = tel(l.phone).replace(/^\+/, "");
  return {
    subject: `Lead unlocked: ${l.name} → ${l.place}. Call now!`,
    html: card({
      preheader: `${l.phone} · ${l.place} · ${people(l)}`,
      eyebrow: "Lead unlocked ✓",
      title: `${esc(l.name)} is planning ${esc(l.place)}`,
      subtitle: "Here are the traveller's contact details. Agents who call first win most bookings.",
      intro: [],
      detailsTitle: "Traveller",
      details: [
        ["Name", esc(l.name)],
        ["Phone", telLink(l.phone)],
        ["Email", l.email ? mailLink(l.email) : null],
        ["Destination", esc(l.place)],
        ["Travel date", l.travelDate ? esc(date(l.travelDate)) : "Flexible"],
        ["Duration", l.durationDays ? `${l.durationDays} days` : null],
        ["Travellers", esc(people(l))],
        ["Budget", l.budgetBand ? esc(l.budgetBand) : null],
        ["Message", l.message ? esc(l.message) : null],
        ["Credits used", `${l.creditsSpent} (balance ${a.credits})`],
      ],
      extra: `<tr><td class="px" align="center" style="padding:18px 36px 0;font-family:${FONT};font-size:14px;">
<a href="tel:${esc(tel(l.phone))}" style="color:${C.brand};font-weight:700;text-decoration:none;">Call</a> &nbsp;·&nbsp;
<a href="https://wa.me/${esc(wa)}" style="color:${C.brand};font-weight:700;text-decoration:none;">WhatsApp</a>${
        l.email ? ` &nbsp;·&nbsp; <a href="mailto:${esc(l.email)}" style="color:${C.brand};font-weight:700;text-decoration:none;">Email</a>` : ""
      }</td></tr>`,
      cta: { href: leads, label: "View in dashboard &rarr;" },
      footerNote: `Sent to ${esc(a.companyName)} for lead ${esc(l.id)}.`,
    }),
    text: text([
      `Lead unlocked: ${l.name} → ${l.place}`,
      `Phone: ${l.phone}`,
      l.email && `Email: ${l.email}`,
      `Travel date: ${l.travelDate ? date(l.travelDate) : "Flexible"}, ${people(l)}`,
      l.budgetBand && `Budget: ${l.budgetBand}`,
      l.message && `Message: ${l.message}`,
      `Credits used: ${l.creditsSpent} (balance ${a.credits})`,
    ]),
  };
}

export function adminLeadUnlockedEmail(a: AgentEmailData, l: UnlockLeadData, unlockCount: number, maxUnlocks: number): Email {
  const link = absoluteUrl(`/admin/leads/${l.id}`);
  return {
    subject: `${a.companyName} unlocked ${l.name} → ${l.place} (${unlockCount}/${maxUnlocks})`,
    html: card({
      preheader: `${l.creditsSpent} credits spent · ${unlockCount} of ${maxUnlocks} agents`,
      eyebrow: "Lead purchased",
      title: `${esc(a.companyName)} unlocked a lead`,
      subtitle: `${esc(l.name)} → ${esc(l.place)}`,
      intro: [],
      details: [
        ["Agent", esc(a.companyName)],
        ["Agent contact", `${esc(a.contactName)} · ${telLink(a.phone)}`],
        ["Lead", `${esc(l.name)} · ${telLink(l.phone)}`],
        ["Destination", esc(l.place)],
        ["Credits spent", `${l.creditsSpent}`],
        ["Agent balance", `${a.credits} credits`],
        ["Agents on this lead", `${unlockCount} of ${maxUnlocks}`],
      ],
      cta: { href: link, label: "Open lead &rarr;" },
      footerNote: `Admin notification for lead ${esc(l.id)}.`,
    }),
    text: text([
      `${a.companyName} unlocked ${l.name} → ${l.place} for ${l.creditsSpent} credits (${unlockCount}/${maxUnlocks}).`,
      `Lead: ${link}`,
    ]),
  };
}

export function customerAgentAssignedEmail(a: AgentEmailData, l: UnlockLeadData, maxUnlocks: number): Email {
  const place = agentPlace(a);
  return {
    subject: `Meet your ${l.place} travel expert: ${a.companyName}`,
    html: card({
      preheader: `${a.companyName} will contact you shortly with a custom plan for ${l.place}.`,
      eyebrow: "Your travel expert is assigned ✓",
      title: `Meet ${esc(a.companyName)}`,
      subtitle: `A verified local expert for your ${esc(l.place)} trip.`,
      intro: [
        `Hi ${esc(firstName(l.name))}, good news! <strong style="color:${C.ink};">${esc(a.companyName)}</strong> has picked up your ${esc(l.place)} enquiry and will contact you shortly with a customised plan and quote.`,
        `Save their details below so you recognise their call.`,
      ],
      detailsTitle: "Your travel expert",
      details: [
        ["Company", `<span style="font-size:16px;color:${C.brand};">${esc(a.companyName)}</span>`],
        ["Contact person", esc(a.contactName)],
        ["Phone", telLink(a.phone)],
        ["Email", mailLink(a.email)],
        ["Based in", esc(place) || null],
        ["Verified", `<span style="color:#166534;">✓ Verified by ${esc(SITE_NAME)}</span>`],
      ],
      extra: `<tr><td class="px" style="padding:18px 36px 0;"><p style="margin:0;font-family:${FONT};font-size:14px;line-height:22px;color:${C.inkSoft};">
To give you the best price, up to <strong style="color:${C.ink};">${maxUnlocks} verified agents</strong> may contact you. Compare their plans and book with whoever you like. There's no obligation and no booking fee.</p></td></tr>`,
      footerNote: `You're receiving this because you requested a trip quote for ${esc(l.place)} on ${esc(SITE_NAME)}.`,
    }),
    text: text([
      `Hi ${firstName(l.name)},`,
      ``,
      `${a.companyName} has picked up your ${l.place} enquiry and will contact you shortly.`,
      `Contact person: ${a.contactName}`,
      `Phone: ${a.phone}`,
      `Email: ${a.email}`,
      place && `Based in: ${place}`,
      ``,
      `Up to ${maxUnlocks} verified agents may contact you. Compare and book with whoever you like.`,
      `Team ${SITE_NAME}`,
    ]),
  };
}
