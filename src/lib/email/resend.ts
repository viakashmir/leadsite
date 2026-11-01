// Minimal Resend client over its REST API (https://resend.com/docs/api-reference/emails/send-email).
// No SDK: one POST is all we need, and it keeps the serverless bundle small.

export type SendEmailInput = {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  tags?: { name: string; value: string }[];
};

export type SendEmailResult = { ok: true; id: string } | { ok: false; error: string };

// Resend only accepts a "from" on a domain verified in the Resend dashboard.
// Until one is verified, onboarding@resend.dev works, but Resend will then
// deliver ONLY to the email address that owns the Resend account.
export const EMAIL_FROM = process.env.EMAIL_FROM || "Tavel Package <onboarding@resend.dev>";
// New-lead alerts go to every address here (comma-separated in the env var).
export const ADMIN_EMAILS = (process.env.ADMIN_NOTIFY_EMAIL || "arfatshah.qa@gmail.com,aribanigar034@gmail.com")
  .split(",")
  .map((e) => e.trim())
  .filter(Boolean);
// Where customers' replies to their thank-you email land.
export const CUSTOMER_REPLY_TO = process.env.CUSTOMER_REPLY_TO || "aribanigar034@gmail.com";

export async function sendEmail(input: SendEmailInput): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: "RESEND_API_KEY is not set" };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: Array.isArray(input.to) ? input.to : [input.to],
        subject: input.subject,
        html: input.html,
        text: input.text,
        reply_to: input.replyTo,
        tags: input.tags,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    const body = (await res.json().catch(() => null)) as { id?: string; message?: string } | null;
    if (!res.ok || !body?.id) return { ok: false, error: `Resend ${res.status}: ${body?.message ?? "unknown error"}` };
    return { ok: true, id: body.id };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
