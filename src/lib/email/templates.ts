// HTML email templates for lead notifications, in the site's own look:
// maroon brand, navy ink, gold accents on ivory. Email clients ignore <style>
// blocks and flexbox unevenly, so everything is table layout with inline styles.

import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

const C = {
  brand: "#7a1f2b",
  brandDark: "#5e1621",
  ink: "#14213d",
  inkSoft: "#55607a",
  gold: "#a8834a",
  goldSoft: "#e9dcc4",
  ivory: "#fbf8f2",
  panel: "#f4eee4",
  line: "#e7dfd2",
};
const FONT = "'Plus Jakarta Sans','Segoe UI',Helvetica,Arial,sans-serif";

export function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type LeadEmailData = {
  id: string;
  name: string;
  email: string | null;
  phone: string;
  originCity: string | null;
  destinationName: string;
  destinationSlug: string;
  destinationImage: string | null;
  cityName: string | null;
  packageTitle: string | null;
  packageSlug: string | null;
  travelDate: Date | null;
  durationDays: number | null;
  adults: number;
  children: number;
  budgetBand: string | null;
  message: string | null;
  createdAt: Date;
};

export type SuggestedPackage = {
  title: string;
  slug: string;
  image: string | null;
  durationDays: number;
  durationNights: number;
  price: number;
};

const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
const date = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata" });
const dateTime = (d: Date) =>
  d.toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit", timeZone: "Asia/Kolkata" }) + " IST";

// Email images must be absolute; relative /media paths become site URLs.
const img = (src: string | null) => (src ? absoluteUrl(src) : null);
const firstName = (name: string) => name.trim().split(/\s+/)[0] || name;
const tripPlace = (l: LeadEmailData) => (l.cityName ? `${l.cityName}, ${l.destinationName}` : l.destinationName);
const travellers = (l: LeadEmailData) =>
  `${l.adults} adult${l.adults === 1 ? "" : "s"}${l.children ? `, ${l.children} child${l.children === 1 ? "" : "ren"}` : ""}`;

function button(href: string, label: string, bg = C.brand, color = "#ffffff") {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;"><tr>
<td align="center" bgcolor="${bg}" style="border-radius:999px;">
<a href="${esc(href)}" target="_blank" style="display:inline-block;padding:14px 30px;font-family:${FONT};font-size:15px;font-weight:700;color:${color};text-decoration:none;border-radius:999px;">${label}</a>
</td></tr></table>`;
}

function detailRows(rows: [string, string | null | undefined][]) {
  return rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) => `<tr>
<td style="padding:11px 0;border-bottom:1px solid ${C.line};font-family:${FONT};font-size:13px;color:${C.inkSoft};width:38%;vertical-align:top;">${esc(k)}</td>
<td style="padding:11px 0;border-bottom:1px solid ${C.line};font-family:${FONT};font-size:14px;color:${C.ink};font-weight:600;vertical-align:top;">${v}</td>
</tr>`,
    )
    .join("");
}

function layout(opts: { preheader: string; body: string; footerNote: string }) {
  const year = new Date().getFullYear();
  return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light">
<title>${esc(SITE_NAME)}</title>
<style>
@media (max-width:620px){.container{width:100%!important}.px{padding-left:22px!important;padding-right:22px!important}.stack{display:block!important;width:100%!important}.hero-title{font-size:26px!important;line-height:34px!important}}
a{color:${C.brand}}
</style>
</head>
<body style="margin:0;padding:0;background:${C.panel};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(opts.preheader)}&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.panel}" style="background:${C.panel};">
<tr><td align="center" style="padding:28px 12px;">
<table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid ${C.line};">

<!-- header -->
<tr><td class="px" bgcolor="${C.ink}" style="background:${C.ink};padding:20px 36px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td style="vertical-align:middle;"><a href="${esc(SITE_URL)}" target="_blank" style="text-decoration:none;">
<img src="${esc(absoluteUrl("/logo.png"))}" width="36" height="36" alt="" style="vertical-align:middle;border:0;border-radius:8px;">
<span style="vertical-align:middle;margin-left:10px;font-family:${FONT};font-size:19px;font-weight:800;color:#ffffff;letter-spacing:.2px;">${esc(SITE_NAME)}</span></a></td>
<td align="right" style="vertical-align:middle;font-family:${FONT};font-size:12px;color:${C.goldSoft};letter-spacing:1.5px;text-transform:uppercase;">Verified local agents</td>
</tr></table>
</td></tr>
<tr><td height="4" bgcolor="${C.gold}" style="background:${C.gold};line-height:4px;font-size:0;">&nbsp;</td></tr>

${opts.body}

<!-- footer -->
<tr><td class="px" bgcolor="${C.ink}" style="background:${C.ink};padding:28px 36px;text-align:center;">
<p style="margin:0 0 10px;font-family:${FONT};font-size:14px;font-weight:700;color:#ffffff;">${esc(SITE_NAME)}</p>
<p style="margin:0 0 14px;font-family:${FONT};font-size:13px;line-height:20px;color:#b9c0d0;">
<a href="${esc(absoluteUrl("/tour-packages"))}" style="color:${C.goldSoft};text-decoration:none;">Tour Packages</a> &nbsp;·&nbsp;
<a href="${esc(absoluteUrl("/blog"))}" style="color:${C.goldSoft};text-decoration:none;">Travel Blog</a> &nbsp;·&nbsp;
<a href="${esc(absoluteUrl("/contact-us"))}" style="color:${C.goldSoft};text-decoration:none;">Contact Us</a></p>
<p style="margin:0;font-family:${FONT};font-size:12px;line-height:18px;color:#8e97ad;">${opts.footerNote}<br>© ${year} ${esc(SITE_NAME)}. All rights reserved.</p>
</td></tr>

</table>
</td></tr></table>
</body></html>`;
}

// ---------------------------------------------------------------- customer

export function customerAcknowledgementEmail(lead: LeadEmailData, suggestions: SuggestedPackage[]) {
  const place = tripPlace(lead);
  const hero = img(lead.destinationImage);
  const guide = absoluteUrl(`/${lead.destinationSlug}-tourism`);
  const packagesLink = absoluteUrl(`/tour-packages/${lead.destinationSlug}`);

  const heroBlock = hero
    ? `<tr><td background="${esc(hero)}" bgcolor="${C.brand}" style="background:${C.brand} url('${esc(hero)}') center/cover no-repeat;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td class="px" style="padding:70px 36px 40px;background:linear-gradient(180deg,rgba(20,33,61,0) 0%,rgba(20,33,61,.85) 75%);">`
    : `<tr><td bgcolor="${C.brand}" style="background:${C.brand};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td class="px" style="padding:48px 36px 40px;">`;

  const steps = [
    ["1", "We review your trip", "Our team checks your enquiry so only genuine, matching agents see it."],
    ["2", "Up to 3 local experts", `Verified agents who know ${esc(lead.destinationName)} prepare a plan for you.`],
    ["3", "Compare &amp; choose", "Pick the quote you like. No booking fee, no obligation."],
  ];

  const stepCells = steps
    .map(
      ([n, t, d]) => `<td class="stack" width="33%" style="padding:8px;vertical-align:top;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.ivory};border:1px solid ${C.line};border-radius:14px;"><tr><td style="padding:18px 16px;">
<div style="width:30px;height:30px;line-height:30px;border-radius:50%;background:${C.brand};color:#fff;text-align:center;font-family:${FONT};font-weight:800;font-size:14px;">${n}</div>
<p style="margin:12px 0 6px;font-family:${FONT};font-size:15px;font-weight:700;color:${C.ink};">${t}</p>
<p style="margin:0;font-family:${FONT};font-size:13px;line-height:19px;color:${C.inkSoft};">${d}</p>
</td></tr></table></td>`,
    )
    .join("");

  const cards = suggestions
    .slice(0, 3)
    .map((p) => {
      const href = absoluteUrl(`/packages/${p.slug}`);
      const pic = img(p.image);
      return `<td class="stack" width="33%" style="padding:8px;vertical-align:top;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${C.line};border-radius:14px;overflow:hidden;background:#fff;">
${pic ? `<tr><td><a href="${esc(href)}" target="_blank"><img src="${esc(pic)}" width="100%" alt="${esc(p.title)}" style="display:block;width:100%;height:120px;object-fit:cover;border:0;"></a></td></tr>` : ""}
<tr><td style="padding:14px;">
<p style="margin:0 0 4px;font-family:${FONT};font-size:11px;font-weight:700;color:${C.gold};text-transform:uppercase;letter-spacing:1px;">${p.durationNights}N / ${p.durationDays}D</p>
<a href="${esc(href)}" target="_blank" style="font-family:${FONT};font-size:14px;font-weight:700;line-height:19px;color:${C.ink};text-decoration:none;">${esc(p.title)}</a>
<p style="margin:8px 0 0;font-family:${FONT};font-size:12px;color:${C.inkSoft};">from <strong style="font-size:15px;color:${C.brand};">${inr(p.price)}</strong></p>
</td></tr></table></td>`;
    })
    .join("");

  const body = `
<!-- hero -->
${heroBlock}
<p style="margin:0 0 10px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${C.goldSoft};">Enquiry received ✓</p>
<h1 class="hero-title" style="margin:0 0 12px;font-family:${FONT};font-size:32px;line-height:40px;font-weight:800;color:#ffffff;">Thank you, ${esc(firstName(lead.name))}!<br>${esc(place)} is calling.</h1>
<p style="margin:0;font-family:${FONT};font-size:15px;line-height:23px;color:#e8ebf2;">We've got your trip details. Trusted local travel experts will reach out shortly with handpicked, customised quotes.</p>
</td></tr></table></td></tr>

<!-- intro -->
<tr><td class="px" style="padding:34px 36px 8px;">
<p style="margin:0 0 14px;font-family:${FONT};font-size:16px;line-height:25px;color:${C.ink};">Hi ${esc(firstName(lead.name))},</p>
<p style="margin:0;font-family:${FONT};font-size:15px;line-height:24px;color:${C.inkSoft};">Thanks for contacting <strong style="color:${C.ink};">${esc(SITE_NAME)}</strong>. Your enquiry for <strong style="color:${C.brand};">${esc(place)}</strong> is with us, and you'll hear from up to 3 verified agents, usually within a few hours, on <strong style="color:${C.ink};">${esc(lead.phone)}</strong>. Compare their plans and prices, then book with whoever you like best.</p>
</td></tr>

<!-- trip summary -->
<tr><td class="px" style="padding:22px 36px 6px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.ivory};border:1px solid ${C.line};border-left:4px solid ${C.gold};border-radius:12px;"><tr><td style="padding:18px 22px;">
<p style="margin:0 0 6px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.gold};">Your trip summary</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
${detailRows([
  ["Destination", esc(place)],
  ["Package", lead.packageTitle ? esc(lead.packageTitle) : null],
  ["Travelling from", lead.originCity ? esc(lead.originCity) : null],
  ["Travel date", lead.travelDate ? esc(date(lead.travelDate)) : "Flexible"],
  ["Duration", lead.durationDays ? `${lead.durationDays} days` : null],
  ["Travellers", esc(travellers(lead))],
  ["Budget", lead.budgetBand ? esc(lead.budgetBand) : null],
])}
</table>
</td></tr></table>
</td></tr>

<!-- how it works -->
<tr><td class="px" style="padding:30px 28px 6px;">
<p style="margin:0 8px 8px;font-family:${FONT};font-size:20px;font-weight:800;color:${C.ink};">What happens next</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>${stepCells}</tr></table>
</td></tr>

${
  cards
    ? `<!-- packages -->
<tr><td class="px" style="padding:26px 28px 6px;">
<p style="margin:0 8px 4px;font-family:${FONT};font-size:20px;font-weight:800;color:${C.ink};">Popular ${esc(lead.destinationName)} packages</p>
<p style="margin:0 8px 8px;font-family:${FONT};font-size:13px;color:${C.inkSoft};">Get inspired while our experts plan yours.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>${cards}</tr></table>
</td></tr>`
    : ""
}

<!-- promo band -->
<tr><td class="px" style="padding:26px 36px 34px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.brand}" style="background:${C.brand};border-radius:16px;"><tr><td style="padding:28px 26px;text-align:center;">
<p style="margin:0 0 6px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${C.goldSoft};">Plan smarter</p>
<p style="margin:0 0 8px;font-family:${FONT};font-size:22px;line-height:29px;font-weight:800;color:#ffffff;">Explore the best of ${esc(lead.destinationName)}</p>
<p style="margin:0 0 20px;font-family:${FONT};font-size:14px;line-height:21px;color:#f3e3e5;">Top places, the best time to visit and how to get there, all in our free travel guide.</p>
${button(guide, `Read the ${esc(lead.destinationName)} guide &rarr;`, "#ffffff", C.brand)}
<p style="margin:16px 0 0;font-family:${FONT};font-size:13px;"><a href="${esc(packagesLink)}" target="_blank" style="color:${C.goldSoft};font-weight:700;text-decoration:underline;">Browse all ${esc(lead.destinationName)} tour packages</a></p>
</td></tr></table>
</td></tr>

<!-- trust -->
<tr><td class="px" bgcolor="${C.ivory}" style="background:${C.ivory};padding:22px 36px;border-top:1px solid ${C.line};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td class="stack" align="center" style="padding:6px;font-family:${FONT};font-size:13px;font-weight:700;color:${C.ink};">✔ Verified local agents</td>
<td class="stack" align="center" style="padding:6px;font-family:${FONT};font-size:13px;font-weight:700;color:${C.ink};">✔ Up to 3 free quotes</td>
<td class="stack" align="center" style="padding:6px;font-family:${FONT};font-size:13px;font-weight:700;color:${C.ink};">✔ No booking fee</td>
</tr></table>
</td></tr>`;

  const html = layout({
    preheader: `Thanks ${firstName(lead.name)}! Local experts for ${place} will contact you shortly with custom quotes.`,
    body,
    footerNote: `You're receiving this email because you requested a trip quote for ${esc(place)} on ${esc(SITE_NAME)}.`,
  });

  const text = [
    `Hi ${firstName(lead.name)},`,
    ``,
    `Thanks for contacting ${SITE_NAME}! We've received your enquiry for ${place}.`,
    `Up to 3 verified local travel agents will contact you on ${lead.phone} with customised quotes, usually within a few hours.`,
    ``,
    `Your trip: ${place}${lead.travelDate ? `, ${date(lead.travelDate)}` : ""}, ${travellers(lead)}${lead.budgetBand ? `, budget ${lead.budgetBand}` : ""}.`,
    ``,
    `Explore ${lead.destinationName}: ${guide}`,
    `Tour packages: ${packagesLink}`,
    ``,
    `Team ${SITE_NAME}`,
  ].join("\n");

  return { subject: `Thanks ${firstName(lead.name)}! Your ${lead.destinationName} trip enquiry is received ✈️`, html, text };
}

// ------------------------------------------------------------------- admin

export function adminNewLeadEmail(lead: LeadEmailData) {
  const place = tripPlace(lead);
  const adminLink = absoluteUrl(`/admin/leads/${lead.id}`);
  const tel = lead.phone.replace(/[^\d+]/g, "");
  const wa = tel.replace(/^\+/, "");

  const body = `
<!-- hero -->
<tr><td class="px" bgcolor="${C.brand}" style="background:${C.brand};padding:34px 36px 30px;">
<p style="margin:0 0 8px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${C.goldSoft};">🔔 New lead received</p>
<h1 class="hero-title" style="margin:0 0 8px;font-family:${FONT};font-size:28px;line-height:36px;font-weight:800;color:#ffffff;">${esc(lead.name)} wants to visit ${esc(place)}</h1>
<p style="margin:0;font-family:${FONT};font-size:14px;color:#f3e3e5;">Received ${esc(dateTime(lead.createdAt))}${lead.packageTitle ? ` · from package “${esc(lead.packageTitle)}”` : ""}</p>
</td></tr>

<!-- quick stats -->
<tr><td class="px" style="padding:24px 28px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
${[
  ["Travel date", lead.travelDate ? date(lead.travelDate) : "Flexible"],
  ["Travellers", travellers(lead)],
  ["Budget", lead.budgetBand || "Not given"],
]
  .map(
    ([k, v]) => `<td class="stack" width="33%" style="padding:8px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.ivory};border:1px solid ${C.line};border-radius:12px;"><tr><td style="padding:14px 16px;">
<p style="margin:0 0 4px;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${C.gold};">${esc(k)}</p>
<p style="margin:0;font-family:${FONT};font-size:15px;font-weight:700;color:${C.ink};">${esc(v)}</p></td></tr></table></td>`,
  )
  .join("")}
</tr></table>
</td></tr>

<!-- contact -->
<tr><td class="px" style="padding:22px 36px 4px;">
<p style="margin:0 0 6px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.gold};">Customer</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
${detailRows([
  ["Name", esc(lead.name)],
  ["Phone", `<a href="tel:${esc(tel)}" style="color:${C.brand};text-decoration:none;">${esc(lead.phone)}</a>`],
  ["Email", lead.email ? `<a href="mailto:${esc(lead.email)}" style="color:${C.brand};text-decoration:none;">${esc(lead.email)}</a>` : null],
  ["Travelling from", lead.originCity ? esc(lead.originCity) : null],
])}
</table>
</td></tr>

<!-- trip -->
<tr><td class="px" style="padding:22px 36px 4px;">
<p style="margin:0 0 6px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.gold};">Trip</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
${detailRows([
  ["Destination", esc(lead.destinationName)],
  ["City", lead.cityName ? esc(lead.cityName) : null],
  ["Package", lead.packageTitle && lead.packageSlug ? `<a href="${esc(absoluteUrl(`/packages/${lead.packageSlug}`))}" style="color:${C.brand};">${esc(lead.packageTitle)}</a>` : null],
  ["Duration", lead.durationDays ? `${lead.durationDays} days` : null],
])}
</table>
</td></tr>

${
  lead.message
    ? `<tr><td class="px" style="padding:22px 36px 4px;">
<p style="margin:0 0 8px;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.gold};">Message</p>
<div style="background:${C.ivory};border-left:4px solid ${C.gold};border-radius:8px;padding:14px 18px;font-family:${FONT};font-size:14px;line-height:22px;color:${C.ink};white-space:pre-wrap;">${esc(lead.message)}</div>
</td></tr>`
    : ""
}

<!-- actions -->
<tr><td class="px" style="padding:30px 36px 36px;" align="center">
${button(adminLink, "Open lead in admin &rarr;")}
<p style="margin:16px 0 0;font-family:${FONT};font-size:13px;color:${C.inkSoft};">
<a href="tel:${esc(tel)}" style="color:${C.brand};font-weight:700;text-decoration:none;">Call</a> &nbsp;·&nbsp;
<a href="https://wa.me/${esc(wa)}" style="color:${C.brand};font-weight:700;text-decoration:none;">WhatsApp</a>${
    lead.email ? ` &nbsp;·&nbsp; <a href="mailto:${esc(lead.email)}" style="color:${C.brand};font-weight:700;text-decoration:none;">Email</a>` : ""
  }</p>
</td></tr>`;

  const html = layout({
    preheader: `${lead.name} · ${place} · ${lead.travelDate ? date(lead.travelDate) : "flexible dates"} · ${travellers(lead)}`,
    body,
    footerNote: `Admin notification for lead ${esc(lead.id)}.`,
  });

  const text = [
    `New lead: ${lead.name} → ${place}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "",
    lead.originCity ? `From: ${lead.originCity}` : "",
    lead.packageTitle ? `Package: ${lead.packageTitle}` : "",
    `Travel date: ${lead.travelDate ? date(lead.travelDate) : "Flexible"}`,
    lead.durationDays ? `Duration: ${lead.durationDays} days` : "",
    `Travellers: ${travellers(lead)}`,
    lead.budgetBand ? `Budget: ${lead.budgetBand}` : "",
    lead.message ? `\nMessage:\n${lead.message}` : "",
    `\nOpen in admin: ${adminLink}`,
  ]
    .filter(Boolean)
    .join("\n");

  return { subject: `🔔 New lead: ${lead.name} → ${place}`, html, text };
}
