export function maskPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length <= 2) return "*".repeat(digits.length);
  return "*".repeat(Math.max(digits.length - 2, 4)) + digits.slice(-2);
}

export function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!domain) return "*".repeat(email.length);
  const visible = local.slice(0, 1);
  return `${visible}${"*".repeat(Math.max(local.length - 1, 3))}@${domain}`;
}

export function maskName(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0];
  const last = parts[parts.length - 1];
  return `${parts[0]} ${last[0]}.`;
}
