"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import EnquiryForm, { type DestinationOption } from "@/components/EnquiryForm";
import { OPEN_QUOTE_EVENT, QUOTE_TARGET_EVENT, type QuoteTargetDetail } from "@/components/QuoteButton";

// Paths where travellers are not the audience.
const HIDDEN = /^\/(agent|admin|leads)(\/|$)/;

// Destination or city slugs, most specific first, to a form pre-fill.
function resolveSlugs(slugs: string[], options: DestinationOption[]) {
  for (const slug of slugs.filter(Boolean)) {
    const dest = options.find((d) => d.slug === slug);
    if (dest) return { destinationId: dest.id, cityId: undefined, name: dest.name };
    for (const d of options) {
      const city = d.cities.find((c) => c.slug === slug);
      if (city) return { destinationId: d.id, cityId: city.id, name: city.name };
    }
  }
  return null;
}

// Guess the trip from the URL so the form opens pre-filled:
// /{dest}-tourism/{city}/..., /tour-packages/{slug}, /{theme}-packages/{slug}.
function inferTarget(pathname: string, options: DestinationOption[]) {
  const parts = pathname.split("/").filter(Boolean);
  const guide = /^([a-z0-9-]+)-tourism$/.exec(parts[0] ?? "");
  const slugs = guide
    ? [guide[1], parts[1]]
    : parts[0] === "tour-packages" || parts[0]?.endsWith("-packages")
      ? [parts[1]?.replace(/^from-[a-z]+-to-/, "")]
      : [];
  // Most specific first: the city in /{dest}-tourism/{city}, then the destination.
  return resolveSlugs(slugs.filter((x): x is string => Boolean(x)).reverse(), options);
}

// Phones: a slim bar fixed to the bottom of every traveller page that opens
// the enquiry form as a sheet. Desktop uses the sidebar form instead.
export default function MobileQuoteBar({ options }: { options: DestinationOption[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Pages whose URL does not name the place (blog posts) announce it instead.
  const [pageTarget, setPageTarget] = useState<QuoteTargetDetail | null>(null);
  useEffect(() => {
    const read = () => setPageTarget((window as { __tpQuoteTarget?: QuoteTargetDetail }).__tpQuoteTarget ?? null);
    read();
    window.addEventListener(QUOTE_TARGET_EVENT, read);
    return () => window.removeEventListener(QUOTE_TARGET_EVENT, read);
  }, []);
  // QuoteButton asks for the sheet on phones instead of jumping down the page.
  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(OPEN_QUOTE_EVENT, show);
    return () => window.removeEventListener(OPEN_QUOTE_EVENT, show);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (HIDDEN.test(pathname)) return null;
  const target =
    (pageTarget && pageTarget.path === pathname ? resolveSlugs(pageTarget.slugs, options) : null) ??
    inferTarget(pathname, options);

  return (
    <>
      <div className="fixed inset-x-3 bottom-3 z-40 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex w-full items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-white py-2.5 pl-4 pr-2.5 text-left shadow-lg"
        >
          <span className="min-w-0 text-sm font-semibold text-ink">
            {target ? `Planning your ${target.name} trip?` : "Need help planning?"}
            <span className="block truncate text-xs font-normal text-ink-soft">Free quotes from up to 3 verified agents</span>
          </span>
          <span className="shrink-0 rounded-lg bg-brand px-3.5 py-2 text-xs font-semibold text-white">Get Quotes</span>
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Get free quotes">
          <button type="button" aria-label="Close" className="absolute inset-0 bg-royal/60" onClick={() => setOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[92vh] overflow-y-auto rounded-t-3xl bg-white px-4 pb-6 pt-3">
            <div className="mb-2 flex items-center justify-between">
              <span aria-hidden className="mx-auto h-1 w-10 rounded-full bg-zinc-300" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 rounded-full px-2 text-xl leading-none text-ink-soft"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <EnquiryForm
              bare
              destinations={options}
              defaultDestinationId={target?.destinationId}
              defaultCityId={target?.cityId}
              title={target ? `Plan your ${target.name} trip` : "Plan your trip"}
            />
          </div>
        </div>
      )}
    </>
  );
}
