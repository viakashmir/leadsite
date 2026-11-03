"use client";

import { useId, useState } from "react";
import { titleCase } from "@/lib/text";
import { trackEvent } from "@/components/Analytics";

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

// Place chips shown before "+N more".
const PLACES_SHOWN = 6;

// Destination pre-selected on forms that don't already know the place.
const DEFAULT_DESTINATION_SLUG = "kashmir";

const HOTEL_BANDS = [
  { value: "Economy (0-2 Star)", label: "Budget" },
  { value: "Standard (3-4 Star)", label: "3-4 Star" },
  { value: "Luxury (4-5 Star)", label: "Luxury" },
];

const fieldBase =
  "w-full border border-zinc-200 bg-white text-ink outline-none transition placeholder:text-zinc-400 focus:border-brand focus:ring-2 focus:ring-brand-tint";
const label = "mb-0.5 block text-[11px] font-semibold text-ink-soft";

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
  const tight = compact || dense;
  const field = `${fieldBase} ${tight ? "h-9 rounded-md px-2 text-[13px]" : "h-10 rounded-lg px-2.5 text-sm"}`;
  // Grid spans: 6 columns normally, 12 in the tight layouts.
  const span = (normal: string, tightSpan: string) => (tight ? tightSpan : normal);
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
  const [allPlaces, setAllPlaces] = useState(false);
  const toggleCity = (cid: string) => setCityIds((cur) => (cur.includes(cid) ? cur.filter((x) => x !== cid) : [...cur, cid]));
  const [hotel, setHotel] = useState(HOTEL_BANDS[1].value);
  // Free text, so travellers can write their own budget ("₹50,000 for two");
  // the bands are offered as suggestions.
  const [budget, setBudget] = useState("");
  const budgetPlaceholder = tight ? "Type, e.g. ₹30,000 pp" : "e.g. ₹30,000 per person";
  const [dialCode, setDialCode] = useState("+91");
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
    setStatus("submitting");
    setErrorMessage(null);

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
        ? "rounded-xl border border-zinc-200 bg-white p-3.5 shadow-sm"
        : "rounded-[14px] border border-zinc-200 bg-white p-4 shadow-sm sm:p-5";

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
  // First few places, plus any already picked (e.g. the page's own place).
  const visiblePlaces = (selectedDestination?.cities ?? []).filter(
    (c, i) => allPlaces || i < PLACES_SHOWN || cityIds.includes(c.id),
  );
  const hiddenPlaces = (selectedDestination?.cities.length ?? 0) - visiblePlaces.length;

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
      <p className={`font-display font-extrabold leading-tight tracking-tight text-ink ${compact ? "text-base" : "text-lg"}`}>
        {titleCase(title)}
      </p>
      <p className="mt-0.5 text-[11px] text-ink-soft">
        <span className="font-semibold text-brand">Free</span> · No booking fee · {brand ? "Fully customisable" : "Up to 3 quotes"}
      </p>

      <div className={`grid gap-x-2 ${tight ? "mt-2.5 grid-cols-12 gap-y-2" : "mt-3 grid-cols-6 gap-y-2"}`}>
        <div className={span("col-span-6", "col-span-12")}>
          <label className={label} htmlFor={id("dest")}>
            Destination
          </label>
          <select
            id={id("dest")}
            name="destinationId"
            required
            value={destinationId}
            onChange={(e) => {
              setDestinationId(e.target.value);
              setCityIds([]);
              setAllPlaces(false);
            }}
            className={field}
          >
            <option value="" disabled>
              Choose
            </option>
            {destinations.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        {hasCities && (
          <div className={span("col-span-6", "col-span-12")} role="group" aria-labelledby={id("places")}>
            <p id={id("places")} className={label}>
              Places <span className="font-normal">(pick any, or leave for anywhere)</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {visiblePlaces.map((c) => {
                const on = cityIds.includes(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggleCity(c.id)}
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${
                      on ? "border-brand bg-brand text-white" : "border-zinc-200 bg-white text-ink hover:border-brand/40"
                    }`}
                  >
                    {on ? "✓ " : ""}
                    {c.name}
                  </button>
                );
              })}
              {hiddenPlaces > 0 && (
                <button
                  type="button"
                  onClick={() => setAllPlaces(true)}
                  className="rounded-full px-2 py-1 text-xs font-semibold text-brand hover:underline"
                >
                  +{hiddenPlaces} more
                </button>
              )}
            </div>
          </div>
        )}

        <div className={span("col-span-3", "col-span-7")}>
          <label className={label} htmlFor={id("date")}>
            Travel date
          </label>
          <input id={id("date")} name="travelDate" type="date" required min={todayIso()} className={field} />
        </div>
        <div className={span("col-span-3", "col-span-5")}>
          <label className={label} htmlFor={id("days")}>
            Days
          </label>
          <select id={id("days")} name="durationDays" defaultValue="5" className={field}>
            {[2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15].map((n) => (
              <option key={n} value={n}>
                {n} days
              </option>
            ))}
          </select>
        </div>

        <div className={span("col-span-2", "col-span-3")}>
          <label className={label} htmlFor={id("adults")}>
            Adults
          </label>
          <select id={id("adults")} name="adults" defaultValue="2" className={field}>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className={span("col-span-2", "col-span-3")}>
          <label className={label} htmlFor={id("children")}>
            Kids
          </label>
          <select id={id("children")} name="children" defaultValue="0" className={field}>
            {Array.from({ length: 7 }, (_, i) => i).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        {compact ? (
          // Hero: one tap for hotel, budget on its own row.
          <>
          <div className="col-span-6" role="radiogroup" aria-labelledby={id("hotel")}>
            <span id={id("hotel")} className={label}>
              Hotel
            </span>
            <div className="grid h-9 grid-cols-3 gap-0.5 rounded-md bg-zinc-100 p-0.5">
              {HOTEL_BANDS.map((b) => (
                <button
                  key={b.value}
                  type="button"
                  role="radio"
                  aria-checked={hotel === b.value}
                  onClick={() => setHotel(b.value)}
                  className={`whitespace-nowrap rounded px-0.5 text-[11px] font-semibold transition ${
                    hotel === b.value ? "bg-white text-brand shadow-sm" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-12">
            <label className={label} htmlFor={id("budget")}>
              Your budget
            </label>
            <input
              id={id("budget")}
              list={id("budget-options")}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              maxLength={60}
              autoComplete="off"
              placeholder={budgetPlaceholder}
              className={field}
            />
          </div>
          </>
        ) : dense ? (
          <>
          <div className="col-span-6">
            <label className={label} htmlFor={id("hotel")}>
              Hotel
            </label>
            <select id={id("hotel")} value={hotel} onChange={(e) => setHotel(e.target.value)} className={field}>
              {HOTEL_BANDS.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-12">
            <label className={label} htmlFor={id("budget")}>
              Your budget
            </label>
            <input
              id={id("budget")}
              list={id("budget-options")}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              maxLength={60}
              autoComplete="off"
              placeholder={budgetPlaceholder}
              className={field}
            />
          </div>
          </>
        ) : (
          <>
          <div className="col-span-2">
            <label className={label} htmlFor={id("hotel")}>
              Hotel
            </label>
            <select id={id("hotel")} value={hotel} onChange={(e) => setHotel(e.target.value)} className={field}>
              {HOTEL_BANDS.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-6">
            <label className={label} htmlFor={id("budget")}>
              Your budget
            </label>
            <input
              id={id("budget")}
              list={id("budget-options")}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              maxLength={60}
              autoComplete="off"
              placeholder={budgetPlaceholder}
              className={field}
            />
          </div>
          </>
        )}

        <div className={span("col-span-3", "col-span-5")}>
          <label className={label} htmlFor={id("name")}>
            Name
          </label>
          <input id={id("name")} name="name" required minLength={2} autoComplete="name" placeholder="Your name" className={field} />
        </div>
        <div className={span("col-span-3", "order-last col-span-12")}>
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

        <div className={span("col-span-6", "col-span-7")}>
          <label className={label} htmlFor={id("phone")}>
            Mobile (WhatsApp)
          </label>
          <div className="flex">
            <select
              name="dialCode"
              aria-label="Country code"
              value={dialCode}
              onChange={(e) => setDialCode(e.target.value)}
              className={`${field.replace("w-full ", "")} ${tight ? "w-[66px]" : "w-[92px]"} shrink-0 rounded-r-none border-r-0 bg-zinc-50 px-2`}
            >
              {DIAL_CODES.map(([code, country]) => (
                <option key={`${country}${code}`} value={code}>
                  {tight ? code : `${country} ${code}`}
                </option>
              ))}
            </select>
            <input
              id={id("phone")}
              name="phone"
              required
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              pattern={dialCode === "+91" ? "[0-9\\s\\-]{10,13}" : "[0-9\\s\\-]{6,16}"}
              title={dialCode === "+91" ? "10-digit mobile number" : "Mobile number without the country code"}
              placeholder={dialCode === "+91" ? (tight ? "Mobile" : "10-digit mobile") : "Mobile number"}
              className={`${field} min-w-0 flex-1 rounded-l-none`}
            />
          </div>
        </div>

        {more ? (
          <>
            <input name="originCity" placeholder="Travelling from (city)" className={`${field} ${span("col-span-6", "order-last col-span-12")}`} />
            <textarea
              name="message"
              rows={2}
              placeholder="Anything else? e.g. honeymoon, senior citizens"
              className={`${field} ${span("col-span-6", "order-last col-span-12")} h-auto py-2`}
            />
          </>
        ) : (
          <button
            type="button"
            onClick={() => setMore(true)}
            className={`${span("col-span-6", "order-last col-span-12")} justify-self-start text-[11px] font-semibold text-brand hover:underline`}
          >
            + Departure city or a note (optional)
          </button>
        )}
      </div>

      <datalist id={id("budget-options")}>
        {BUDGET_BANDS.filter((b) => b.value).map((b) => (
          <option key={b.value} value={b.value} />
        ))}
      </datalist>

      {errorMessage && <p className="mt-2 text-sm text-red-700">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`w-full rounded-lg bg-brand text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60 ${compact ? "mt-2.5 py-2.5" : "mt-3 py-2.5"}`}
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
