"use client";

import Script from "next/script";
import { useEffect } from "react";

export const GA_MEASUREMENT_ID = "G-TGHQBFWSSV";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

const WHATSAPP_HREF = /^(https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com|chat\.whatsapp\.com)\/|whatsapp:)/i;

function labelOf(el: HTMLElement): string {
  const text =
    el.getAttribute("aria-label") ||
    el.getAttribute("title") ||
    (el instanceof HTMLInputElement ? el.value : "") ||
    el.textContent ||
    "";
  return text.replace(/\s+/g, " ").trim().slice(0, 100);
}

// Google tag (gtag.js) plus one document-level click listener, so every link
// and button click on every page is measured without touching each component.
// Events sent:
//   whatsapp_click  – any wa.me / api.whatsapp.com / whatsapp: link
//   phone_click     – tel: links
//   email_click     – mailto: links
//   ui_click        – every other link or button (label, url, page)
// Outbound-link clicks and page views (including client-side navigations)
// are also covered by GA4 enhanced measurement, which is on by default.
export default function Analytics() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const el = target?.closest<HTMLElement>("a, button, [role='button'], input[type='submit'], input[type='button'], summary");
      if (!el) return;

      const href = el instanceof HTMLAnchorElement ? el.href : "";
      const rawHref = el instanceof HTMLAnchorElement ? el.getAttribute("href") ?? "" : "";
      const base = {
        link_text: labelOf(el),
        link_url: href || undefined,
        element: el.tagName.toLowerCase(),
        element_id: el.id || undefined,
        page_path: window.location.pathname,
      };

      if (WHATSAPP_HREF.test(rawHref) || WHATSAPP_HREF.test(href)) {
        trackEvent("whatsapp_click", base);
      } else if (rawHref.startsWith("tel:")) {
        trackEvent("phone_click", { ...base, phone: rawHref.slice(4) });
      } else if (rawHref.startsWith("mailto:")) {
        trackEvent("email_click", base);
      } else {
        trackEvent("ui_click", base);
      }
    }
    // Capture phase so clicks are seen even if a handler stops propagation.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
