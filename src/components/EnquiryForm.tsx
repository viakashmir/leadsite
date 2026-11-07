"use client";

import { useId, useState } from "react";
import { titleCase } from "@/lib/text";
import { trackEvent } from "@/components/Analytics";
import { CheckIcon } from "@/components/TrustTicks";
import { BrandDatePicker, BrandSelect, BrandSuggestInput, fieldClass } from "@/components/form/BrandPickers";

export type DestinationOption = {
  id: string;
  slug?: string;
  name: string;
  cities: { id: string; slug?: string; name: string }[];
};

// Hotel category and per-person budget: agents price from both.
const BUDGET_BANDS = [
  { value: "", label: "Flexible" },
  { value: "Under ₹15,000 per person", label: "Under 15k" },
  { value: "₹15,000 to ₹25,000 per person", label: "15k to 25k" },
  { value: "₹25,000 to ₹40,000 per person", label: "25k to 40k" },
  { value: "₹40,000 to ₹60,000 per person", label: "40k to 60k" },
  { value: "Above ₹60,000 per person", label: "60k+" },
];

// Destination pre-selected on forms that don't already know the place.
const DEFAULT_DESTINATION_SLUG = "kashmir";

const HOTEL_BANDS = [
  { value: "Economy (0-2 Star)", label: "Budget" },
  { value: "Standard (3-4 Star)", label: "3-4 Star" },
  { value: "Luxury (4-5 Star)", label: "Luxury" },
];

const label = "mb-1 block text-[11px] font-semibold tracking-wide text-ink-soft";
const DAY_OPTIONS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15].map((n) => ({ value: String(n), label: `${n} days` }));
const ADULT_OPTIONS = Array.from({ length: 12 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) }));
const KID_OPTIONS = Array.from({ length: 7 }, (_, i) => ({ value: String(i), label: String(i) }));

const todayIso = () => new Date().toISOString().slice(0, 10);

// Country calling codes, India first (the default). Travellers abroad pick theirs.
const DIAL_CODES: [string, string][] = [
  ["+91", "IN"], ["+971", "AE"], ["+966", "SA"], ["+974", "QA"], ["+968", "OM"], ["+965", "KW"], ["+973", "BH"],
  ["+1", "US"], ["+1", "CA"], ["+44", "UK"], ["+61", "AU"], ["+64", "NZ"], ["+65", "SG"], ["+60", "MY"],
  ["+66", "TH"], ["+62", "ID"], ["+977", "NP"], ["+975", "BT"], ["+880", "BD"], ["+94", "LK"], ["+960", "MV"],
  ["+49", "DE"], ["+33", "FR"], ["+39", "IT"], ["+31", "NL"], ["+41", "CH"], ["+353", "IE"], ["+81", "JP"],
  ["+82", "KR"], ["+86", "CN"], ["+852", "HK"], ["+27", "ZA"], ["+254", "KE"], ["+230", "MU"],
];

// Compact, high-intent enquiry form: trip first (destination, date, length,
// group, hotel), contact last, optional details folded away. Travel date is
// required so every lead carries a real plan.
export default function EnquiryForm({
  destinations,
  defaultDestinationId,
  defaultCityId,
  sourcePackageId,
  title = "Get Free Quotes from Verified Travel Agents",
  bare = false,
  compact = false,
  dense = false,
  brand = false,
}: {
  destinations: DestinationOption[];
  defaultDestinationId?: string;
  defaultCityId?: string;
  sourcePackageId?: string;
  title?: string;
  bare?: boolean; // no card chrome, for use inside a sheet
  compact?: boolean; // tighter layout with the glass card, for the homepage hero
  dense?: boolean; // the same tight layout on a plain card, for page sidebars
  brand?: boolean; // traveller-facing homepage copy: our trip experts, no quotes/agents talk
}) {
  const field = fieldClass;
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  // Pages about a place pre-select it; everywhere else Kashmir is the default
  // for now (owner's call). Change DEFAULT_DESTINATION_SLUG to switch.
  const [destinationId, setDestinationId] = useState(
    defaultDestinationId ?? destinations.find((d) => d.slug === DEFAULT_DESTINATION_SLUG)?.id ?? "",
  );
  // Places within the destination: travellers can pick several (or none =
  // anywhere). The first is the lead's main place; agents get the full list.
  const [cityIds, setCityIds] = useState<string[]>(defaultCityId ? [defaultCityId] : []);
  const toggleCity = (cid: string) => setCityIds((cur) => (cur.includes(cid) ? cur.filter((x) => x !== cid) : [...cur, cid]));
  const [hotel, setHotel] = useState(HOTEL_BANDS[1].value);
  // Free text, so travellers can write their own budget ("₹50,000 for two");
  // the bands are offered as suggestions.
  const [budget, setBudget] = useState("");
  const [dialCode, setDialCode] = useState("+91");
  const [travelDate, setTravelDate] = useState("");
  const [days, setDays] = useState("5");
  const [adults, setAdults] = useState("2");
  const [kids, setKids] = useState("0");
  const [more, setMore] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedDestination = destinations.find((d) => d.id === destinationId);
  const pickedNames = cityIds
    .map((cid) => selectedDestination?.cities.find((c) => c.id === cid)?.name)
    .filter((n): n is string => Boolean(n));
  const placeName = pickedNames.length ? pickedNames.join(", ") : selectedDestination?.name;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    // The branded date picker is not a native required field, so check it here.
    if (!travelDate) {
      setErrorMessage("Choose your travel date.");
      setStatus("error");
      return;
    }
    setStatus("submitting");

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    // Full international number: chosen country code + the number without
    // spaces, dashes or a leading trunk 0 (a typed "+..." number is kept as is).
    const typed = String(form.get("phone") ?? "").trim();
    const digits = typed.replace(/\D/g, "").replace(/^0+/, "");
    if (dialCode === "+91" && !typed.startsWith("+") && digits.length !== 10) {
      setErrorMessage("Enter a 10-digit Indian mobile number, or choose your country code.");
      setStatus("error");
      return;
    }
    const phone = typed.startsWith("+") ? `+${typed.replace(/\D/g, "")}` : `${dialCode}${digits}`;
    const payload = {
      name: form.get("name"),
      phone,
      email: form.get("email") ?? "",
      originCity: form.get("originCity") ?? "",
      destinationId: form.get("destinationId"),
      cityId: cityIds[0] ?? "",
      sourcePackageId: sourcePackageId ?? "",
      travelDate: form.get("travelDate"),
      durationDays: form.get("durationDays") || undefined,
      adults: form.get("adults") || 2,
      children: form.get("children") || 0,
      // e.g. "₹15,000 to ₹25,000 per person · Standard (3-4 Star)"
      budgetBand: budget.trim() ? `${budget.trim()} · ${hotel}` : hotel,
      message: [pickedNames.length > 1 ? `Places: ${pickedNames.join(", ")}.` : "", String(form.get("message") ?? "").trim()]
        .filter(Boolean)
        .join(" "),
      website: form.get("website") ?? "",
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      trackEvent("generate_lead", {
        destination: selectedDestination?.name,
        place: placeName,
        source_package: sourcePackageId || undefined,
        page_path: window.location.pathname,
      });
      setStatus("success");
      formEl.reset();
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  const card = bare
    ? ""
    : compact
      ? "rounded-2xl bg-white/95 p-4 shadow-2xl shadow-black/30 ring-1 ring-white/40 backdrop-blur"
      : dense
        ? "rounded-xl border border-gold-soft bg-white p-3.5 shadow-sm"
        : "rounded-[14px] border border-gold-soft bg-white p-4 shadow-sm";

  if (status === "success") {
    return (
      <div className={`${card} text-center`}>
        <p className="font-display text-xl font-extrabold tracking-tight text-ink">Your request is in</p>
        {brand ? (
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Our {placeName ?? "trip"} experts will call or WhatsApp you shortly with a day-by-day plan and
            price. Change anything you like; you book only when it feels right.
          </p>
        ) : (
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Up to 3 verified agents who operate {placeName ?? "this destination"} will call or
            WhatsApp you with customised itineraries and quotes. Compare them and book only if you like one.
          </p>
        )}
      </div>
    );
  }

  const hasCities = Boolean(selectedDestination && selectedDestination.cities.length > 0);
  // All places in one swipeable row, the picked ones (e.g. the page's own place) first.
  const placesInOrder = [...(selectedDestination?.cities ?? [])].sort(
    (a, b) => Number(cityIds.includes(b.id)) - Number(cityIds.includes(a.id)),
  );

  // Five short rows, sized so the whole form (and its button) fits beside the
  // content on a laptop screen and inside one phone screen.
  return (
    <form onSubmit={handleSubmit} className={card} aria-label="Get free quotes">
      {/* Honeypot for spam bots: visually hidden and skipped by keyboard and screen readers. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>
      <p className="font-display text-base font-extrabold leading-tight tracking-tight text-ink">
        {titleCase(title)}
      </p>
      <p className="mt-0.5 text-[11px] text-ink-soft">
        <span className="font-semibold text-brand">Free</span> · {brand ? "Fully customisable" : "No booking fee · Up to 3 quotes"}
      </p>

      {/* One 12-column grid for every variant: five short rows plus an
          optional row, so the form and its button fit beside page content. */}
      <div className="mt-2.5 grid grid-cols-12 gap-x-2 gap-y-2">
        <div className="col-span-12">
          <label className={label} htmlFor={id("dest")}>
            Destination
          </label>
          <BrandSelect
            id={id("dest")}
            name="destinationId"
            value={destinationId}
            onChange={(v) => {
              setDestinationId(v);
              setCityIds([]);
            }}
            options={destinations.map((d) => ({ value: d.id, label: d.name }))}
            placeholder="Where to?"
            searchable
          />
        </div>
        {hasCities && (
          <div className="col-span-12 min-w-0" role="group" aria-labelledby={id("places")}>
            <p id={id("places")} className={label}>
              Places <span className="font-normal">(optional, pick any)</span>
            </p>
            {/* One swipeable row; picked places first. */}
            <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-0.5">
              {placesInOrder.map((c) => {
                const on = cityIds.includes(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleCity(c.id)}
                    className={`flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium transition ${
                      on ? "border-brand bg-brand text-white" : "border-gold-soft bg-ivory text-ink hover:border-gold"
                    }`}
                  >
                    {on && <CheckIcon className="h-3 w-3" />}
                    {c.name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="col-span-7">
          <label className={label} htmlFor={id("date")}>
            Travel date
          </label>
          <BrandDatePicker id={id("date")} name="travelDate" value={travelDate} onChange={setTravelDate} min={todayIso()} />
        </div>
        <div className="col-span-5">
          <label className={label} htmlFor={id("days")}>
            Days
          </label>
          <BrandSelect id={id("days")} name="durationDays" value={days} onChange={setDays} options={DAY_OPTIONS} />
        </div>

        <div className="col-span-2">
          <label className={label} htmlFor={id("adults")}>
            Adults
          </label>
          <BrandSelect id={id("adults")} name="adults" value={adults} onChange={setAdults} options={ADULT_OPTIONS} minWidth={72} tight />
        </div>
        <div className="col-span-2">
          <label className={label} htmlFor={id("children")}>
            Kids
          </label>
          <BrandSelect id={id("children")} name="children" value={kids} onChange={setKids} options={KID_OPTIONS} minWidth={72} tight />
        </div>
        <div className="col-span-4">
          <label className={label} htmlFor={id("hotel")}>
            Hotel
          </label>
          <BrandSelect
            id={id("hotel")}
            value={hotel}
            onChange={setHotel}
            options={HOTEL_BANDS.map((b) => ({ value: b.value, label: b.label, hint: b.value.match(/\((.+)\)/)?.[1] }))}
            minWidth={170}
            tight
          />
        </div>
        <div className="col-span-4">
          <label className={label} htmlFor={id("budget")}>
            Budget
          </label>
          <BrandSuggestInput
            id={id("budget")}
            value={budget}
            onChange={setBudget}
            maxLength={60}
            placeholder="₹ /person"
            suggestions={BUDGET_BANDS.filter((b) => b.value).map((b) => ({
              value: b.value,
              label: b.value.replace(" per person", ""),
            }))}
          />
        </div>

        <div className="col-span-5">
          <label className={label} htmlFor={id("name")}>
            Name
          </label>
          <input id={id("name")} name="name" required minLength={2} autoComplete="name" placeholder="Your name" className={field} />
        </div>
        <div className="col-span-7">
          <label className={label} htmlFor={id("phone")}>
            Mobile (WhatsApp)
          </label>
          <div className="flex">
            <div className="w-[68px] shrink-0">
              <BrandSelect
                ariaLabel="Country code"
                value={dialCode}
                onChange={setDialCode}
                options={DIAL_CODES.map(([code, country]) => ({ value: code, label: `${code} ${country}` }))}
                display={(o) => o.value}
                minWidth={140}
                searchable
                joinedRight
                tight
              />
            </div>
            <input
              id={id("phone")}
              name="phone"
              required
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              pattern={dialCode === "+91" ? "[0-9\\s\\-]{10,13}" : "[0-9\\s\\-]{6,16}"}
              title={dialCode === "+91" ? "10-digit mobile number" : "Mobile number without the country code"}
              placeholder={dialCode === "+91" ? "10 digits" : "Mobile number"}
              className={`${field} min-w-0 flex-1 rounded-l-none`}
            />
          </div>
        </div>

        <div className="col-span-12">
          <label className={label} htmlFor={id("email")}>
            Email
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            className={field}
          />
        </div>

        {more ? (
          <>
            <input name="originCity" placeholder="Travelling from (city)" className={`${field} col-span-12`} />
            <textarea
              name="message"
              rows={2}
              placeholder="Anything else? e.g. honeymoon, senior citizens"
              className={`${field} col-span-12 h-auto resize-none py-2`}
            />
          </>
        ) : (
          <button
            type="button"
            onClick={() => setMore(true)}
            className="col-span-12 justify-self-start text-[11px] font-semibold text-brand hover:underline"
          >
            + Departure city or a note (optional)
          </button>
        )}
      </div>

      {errorMessage && <p className="mt-2 rounded-lg bg-brand-tint px-2.5 py-1.5 text-[13px] font-medium text-brand">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-3 w-full rounded-lg bg-brand py-2.5 text-sm font-semibold tracking-wide text-white transition hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand/30 focus:ring-offset-2 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : brand ? "Plan My Trip" : "Get Free Quotes"}
      </button>
      <p className="mt-1.5 text-center text-[11px] leading-snug text-ink-soft">
        {brand
          ? "Your number stays private and is used only to plan this trip."
          : "Shared only with up to 3 verified agents for this trip."}
      </p>
    </form>
  );
}
