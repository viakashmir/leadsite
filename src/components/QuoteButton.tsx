"use client";

import { useEffect } from "react";

export const OPEN_QUOTE_EVENT = "tp:open-quote";
export const QUOTE_TARGET_EVENT = "tp:quote-target";
export type QuoteTargetDetail = { path: string; slugs: string[] };

// Tells the phone quote sheet which place this page is about (most specific
// slug first), for pages whose URL does not name it.
export function QuoteTarget({ slugs }: { slugs: string[] }) {
  const key = slugs.join(",");
  useEffect(() => {
    const detail: QuoteTargetDetail = { path: window.location.pathname, slugs: key.split(",") };
    (window as { __tpQuoteTarget?: QuoteTargetDetail }).__tpQuoteTarget = detail;
    window.dispatchEvent(new Event(QUOTE_TARGET_EVENT));
  }, [key]);
  return null;
}

// "Get quotes" action: on phones it opens the quote sheet (MobileQuoteBar);
// on larger screens, or without JS, it jumps to the page's #get-quotes form.
export default function QuoteButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#get-quotes"
      className={className}
      onClick={(e) => {
        if (window.matchMedia("(max-width: 1023px)").matches) {
          e.preventDefault();
          window.dispatchEvent(new Event(OPEN_QUOTE_EVENT));
        }
      }}
    >
      {children}
    </a>
  );
}
