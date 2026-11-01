"use client";

export const OPEN_QUOTE_EVENT = "tp:open-quote";

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
