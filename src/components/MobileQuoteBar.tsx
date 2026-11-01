"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import EnquiryForm, { type DestinationOption } from "@/components/EnquiryForm";

// Paths where travellers are not the audience.
const HIDDEN = /^\/(agent|admin|leads)(\/|$)/;

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
  for (const slug of slugs.filter(Boolean).reverse()) {
    const dest = options.find((d) => d.slug === slug);
    if (dest) return { destinationId: dest.id, cityId: undefined, name: dest.name };
    for (const d of options) {
      const city = d.cities.find((c) => c.slug === slug);
      if (city) return { destinationId: d.id, cityId: city.id, name: city.name };
    }
  }
  return null;
}

// Phones: a slim bar fixed to the bottom of every traveller page that opens
// the enquiry form as a sheet. Desktop uses the sidebar form instead.
export default function MobileQuoteBar({ options }: { options: DestinationOption[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (HIDDEN.test(pathname)) return null;
  const target = inferTarget(pathname, options);

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold-soft bg-white/95 px-4 py-2.5 backdrop-blur lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex w-full items-center justify-between rounded-full bg-brand py-3 pl-5 pr-2 text-left text-white shadow-sm"
        >
          <span className="text-sm font-semibold">
            {target ? `Plan Your ${target.name} Trip` : "Plan Your Trip"}
            <span className="block text-[11px] font-normal text-white/75">Free quotes from up to 3 verified agents</span>
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold">Get Quotes</span>
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
