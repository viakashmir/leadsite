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

// Hotel category doubles as the budget signal agents price from.
const HOTEL_BANDS = [
  { value: "Economy (0-2 Star)", label: "Budget" },
  { value: "Standard (3-4 Star)", label: "3-4 Star" },
  { value: "Luxury (3 Star & Above)", label: "Luxury" },
];

const field =
  "h-10 w-full rounded-lg border border-zinc-200 bg-white px-2.5 text-sm text-ink outline-none transition placeholder:text-zinc-400 focus:border-brand focus:ring-2 focus:ring-brand-tint";
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
}: {
  destinations: DestinationOption[];
  defaultDestinationId?: string;
  defaultCityId?: string;
  sourcePackageId?: string;
  title?: string;
  bare?: boolean; // no card chrome, for use inside a sheet
}) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  // No default on general pages: the traveller must pick, so the lead names a real destination.
  const [destinationId, setDestinationId] = useState(defaultDestinationId ?? "");
  const [cityId, setCityId] = useState(defaultCityId ?? "");
  const [hotel, setHotel] = useState(HOTEL_BANDS[1].value);
  const [dialCode, setDialCode] = useState("+91");
  const [more, setMore] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedDestination = destinations.find((d) => d.id === destinationId);
  const placeName = selectedDestination?.cities.find((c) => c.id === cityId)?.name ?? selectedDestination?.name;

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
      cityId: form.get("cityId") ?? "",
      sourcePackageId: sourcePackageId ?? "",
      travelDate: form.get("travelDate"),
      durationDays: form.get("durationDays") || undefined,
      adults: form.get("adults") || 2,
      children: form.get("children") || 0,
      budgetBand: hotel,
      message: form.get("message") ?? "",
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

  const card = bare ? "" : "rounded-[14px] border border-zinc-200 bg-white p-4 shadow-sm sm:p-5";

  if (status === "success") {
    return (
      <div className={`${card} text-center`}>
        <p className="font-display text-xl font-extrabold tracking-tight text-ink">Your request is in</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Up to 3 verified agents who operate {placeName ?? "this destination"} will call or
          WhatsApp you with customised itineraries and quotes. Compare them and book only if you like one.
        </p>
      </div>
    );
  }

  const hasCities = Boolean(selectedDestination && selectedDestination.cities.length > 0);

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
      <p className="font-display text-lg font-extrabold leading-tight tracking-tight text-ink">{titleCase(title)}</p>
      <p className="mt-0.5 text-[11px] text-ink-soft">
        <span className="font-semibold text-brand">Free</span> · No booking fee · Up to 3 quotes
      </p>

      <div className="mt-3 grid grid-cols-6 gap-x-2 gap-y-2">
        <div className={hasCities ? "col-span-3" : "col-span-6"}>
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
              setCityId("");
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
          <div className="col-span-3">
            <label className={label} htmlFor={id("city")}>
              Place
            </label>
            <select id={id("city")} name="cityId" value={cityId} onChange={(e) => setCityId(e.target.value)} className={field}>
              <option value="">Anywhere</option>
              {selectedDestination!.cities.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="col-span-3">
          <label className={label} htmlFor={id("date")}>
            Travel date
          </label>
          <input id={id("date")} name="travelDate" type="date" required min={todayIso()} className={field} />
        </div>
        <div className="col-span-3">
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

        <div className="col-span-2">
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
        <div className="col-span-2">
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

        <div className="col-span-3">
          <label className={label} htmlFor={id("name")}>
            Name
          </label>
          <input id={id("name")} name="name" required minLength={2} autoComplete="name" placeholder="Your name" className={field} />
        </div>
        <div className="col-span-3">
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

        <div className="col-span-6">
          <label className={label} htmlFor={id("phone")}>
            Mobile (WhatsApp)
          </label>
          <div className="flex">
            <select
              name="dialCode"
              aria-label="Country code"
              value={dialCode}
              onChange={(e) => setDialCode(e.target.value)}
              className={`${field.replace("w-full ", "")} w-[92px] shrink-0 rounded-r-none border-r-0 bg-zinc-50 px-2`}
            >
              {DIAL_CODES.map(([code, country]) => (
                <option key={`${country}${code}`} value={code}>
                  {country} {code}
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
              placeholder={dialCode === "+91" ? "10-digit mobile" : "Mobile number"}
              className={`${field} min-w-0 flex-1 rounded-l-none`}
            />
          </div>
        </div>

        {more ? (
          <>
            <input name="originCity" placeholder="Travelling from (city)" className={`${field} col-span-6`} />
            <textarea
              name="message"
              rows={2}
              placeholder="Anything else? e.g. honeymoon, senior citizens"
              className={`${field} col-span-6 h-auto py-2`}
            />
          </>
        ) : (
          <button
            type="button"
            onClick={() => setMore(true)}
            className="col-span-6 justify-self-start text-[11px] font-semibold text-brand hover:underline"
          >
            + Departure city or a note (optional)
          </button>
        )}
      </div>

      {errorMessage && <p className="mt-2 text-sm text-red-700">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-3 w-full rounded-lg bg-brand py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Get Free Quotes"}
      </button>
      <p className="mt-1.5 text-center text-[11px] leading-snug text-ink-soft">
        Shared only with up to 3 verified agents for this trip.
      </p>
    </form>
  );
}
