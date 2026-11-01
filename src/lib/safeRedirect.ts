// Only same-site relative paths are allowed as post-login destinations, so a
// crafted ?next=https://evil.example link can't bounce users off-site.
export function safeNextPath(next: string | undefined | null, fallback: string): string {
  if (!next) return fallback;
  let value = next;
  try {
    value = decodeURIComponent(next);
  } catch {
    return fallback;
  }
  if (!value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) return fallback;
  if (/[\r\n\t]/.test(value)) return fallback;
  return value;
}
