"use client";

import { useId, useState } from "react";
import { titleCase } from "@/lib/text";

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
  "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-zinc-400 focus:border-gold focus:ring-2 focus:ring-gold-soft";
const label = "mb-1 block text-xs font-semibold text-ink-soft";

const todayIso = () => new Date().toISOString().slice(0, 10);

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
    const phone = String(form.get("phone") ?? "").replace(/\s+/g, "");
    const payload = {
      name: form.get("name"),
      phone: /^\d{10}$/.test(phone) ? `+91${phone}` : phone,
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
      setStatus("success");
      formEl.reset();
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  const card = bare ? "" : "rounded-2xl border border-gold-soft bg-white p-4 shadow-sm sm:p-5";

  if (status === "success") {
    return (
      <div className={`${card} text-center`}>
        <p className="font-display text-2xl font-bold text-ink">Your request is in</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Up to 3 verified agents who operate {placeName ?? "this destination"} will call or
          WhatsApp you with customised itineraries and quotes. Compare them and book only if you like one.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={card} aria-label="Get free quotes">
      <p className="font-display text-[22px] font-bold leading-tight text-ink">{titleCase(title)}</p>
      <p className="mt-1 text-xs text-ink-soft">
        <span className="font-semibold text-brand">Free</span> · No booking fee · Up to 3 quotes
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <div className={selectedDestination?.cities.length ? "" : "col-span-2"}>
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
              Choose a destination
            </option>
            {destinations.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        {selectedDestination && selectedDestination.cities.length > 0 && (
          <div>
            <label className={label} htmlFor={id("city")}>
              Place
            </label>
            <select id={id("city")} name="cityId" value={cityId} onChange={(e) => setCityId(e.target.value)} className={field}>
              <option value="">Anywhere</option>
              {selectedDestination.cities.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className={label} htmlFor={id("date")}>
            Travel date
          </label>
          <input id={id("date")} name="travelDate" type="date" required min={todayIso()} className={field} />
        </div>
        <div>
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

        <div>
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
        <div>
          <label className={label} htmlFor={id("children")}>
            Children
          </label>
          <select id={id("children")} name="children" defaultValue="0" className={field}>
            {Array.from({ length: 7 }, (_, i) => i).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="col-span-2">
          <legend className={label}>Hotel</legend>
          <div className="grid grid-cols-3 gap-1.5">
            {HOTEL_BANDS.map((b) => (
              <button
                key={b.value}
                type="button"
                aria-pressed={hotel === b.value}
                onClick={() => setHotel(b.value)}
                className={`rounded-lg border px-2 py-2 text-[13px] font-semibold transition ${
                  hotel === b.value
                    ? "border-royal bg-royal text-white"
                    : "border-zinc-300 bg-white text-ink hover:border-gold"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="col-span-2">
          <label className={label} htmlFor={id("name")}>
            Your name
          </label>
          <input id={id("name")} name="name" required minLength={2} autoComplete="name" placeholder="Full name" className={field} />
        </div>
        <div className="col-span-2">
          <label className={label} htmlFor={id("phone")}>
            Mobile (WhatsApp)
          </label>
          <div className="flex">
            <span className="flex items-center rounded-l-lg border border-r-0 border-zinc-300 bg-ivory px-2.5 text-sm text-ink-soft">
              +91
            </span>
            <input
              id={id("phone")}
              name="phone"
              required
              inputMode="tel"
              autoComplete="tel-national"
              pattern="[0-9+\-\s]{8,15}"
              placeholder="10-digit mobile"
              className={`${field} rounded-l-none`}
            />
          </div>
        </div>

        <div className="col-span-2">
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
            placeholder="For your itineraries and quotes"
            className={field}
          />
        </div>

        {more ? (
          <>
            <input name="originCity" placeholder="Travelling from (city)" className={`${field} col-span-2`} />
            <textarea
              name="message"
              rows={2}
              placeholder="Anything else? e.g. honeymoon, senior citizens, specific hotels"
              className={`${field} col-span-2`}
            />
          </>
        ) : (
          <button
            type="button"
            onClick={() => setMore(true)}
            className="col-span-2 justify-self-start text-xs font-semibold text-brand hover:underline"
          >
            + Add departure city or a note
          </button>
        )}
      </div>

      {errorMessage && <p className="mt-3 text-sm text-red-700">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 w-full rounded-full bg-brand py-3 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Get Free Quotes"}
      </button>
      <p className="mt-2 text-center text-[11px] leading-snug text-ink-soft">
        Your number is shared only with up to 3 verified agents for this trip.
      </p>
    </form>
  );
}
