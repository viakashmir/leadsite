"use client";

import { usePathname } from "next/navigation";
import { SITE_NAME, WHATSAPP_DIGITS } from "@/lib/site";

// The number lives in src/lib/site.ts (WHATSAPP_NUMBER) — change it there.
const NUMBER = WHATSAPP_DIGITS;

// Agents and admins aren't the audience for a traveller chat button.
const HIDDEN = /^\/(agent|admin)(\/|$)/;

export default function WhatsAppButton() {
  const pathname = usePathname();
  if (!NUMBER || HIDDEN.test(pathname)) return null;

  // The message names the page, so you know what they were looking at.
  // Clicks are counted as `whatsapp_click` by the site-wide listener in Analytics.
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const text = `Hi ${SITE_NAME}, I'd like a quote for a trip. I was looking at: ${window.location.href}`;
    e.currentTarget.href = `https://wa.me/${NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <a
      href={`https://wa.me/${NUMBER}`}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="print-hide fixed bottom-[88px] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe5b] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 lg:bottom-6 lg:right-6"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C8.82 3 3 8.82 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.7A12.95 12.95 0 0 0 16.004 29C23.18 29 29 23.18 29 16S23.18 3 16.004 3Zm0 23.6c-2.02 0-4-.54-5.72-1.57l-.41-.24-3.96 1.01 1.06-3.86-.27-.4A10.56 10.56 0 0 1 5.4 16c0-5.85 4.76-10.6 10.6-10.6 5.85 0 10.6 4.75 10.6 10.6 0 5.85-4.75 10.6-10.6 10.6Zm5.82-7.94c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.43 5.45 4.81.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
