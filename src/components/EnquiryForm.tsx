"use client";

import { useState } from "react";

type DestinationOption = {
  id: string;
  name: string;
  cities: { id: string; name: string }[];
};

export default function EnquiryForm({
  destinations,
  defaultDestinationId,
  defaultCityId,
  sourcePackageId,
  title = "Get Free Quotes from Verified Travel Agents",
}: {
  destinations: DestinationOption[];
  defaultDestinationId?: string;
  defaultCityId?: string;
  sourcePackageId?: string;
  title?: string;
}) {
  const [destinationId, setDestinationId] = useState(
    defaultDestinationId ?? destinations[0]?.id ?? "",
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const selectedDestination = destinations.find((d) => d.id === destinationId);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const payload = {
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      originCity: form.get("originCity"),
      destinationId: form.get("destinationId"),
      cityId: form.get("cityId"),
      sourcePackageId: sourcePackageId ?? "",
      travelDate: form.get("travelDate"),
      durationDays: form.get("durationDays") || undefined,
      adults: form.get("adults") || 2,
      children: form.get("children") || 0,
      budgetBand: form.get("budgetBand"),
      message: form.get("message"),
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

  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-300 bg-green-50 p-6 text-center">
        <p className="text-lg font-semibold text-green-800">Thanks! Your request is in.</p>
        <p className="mt-1 text-sm text-green-700">
          Our verified travel agents will contact you shortly with quotes.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
    >
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>

      <div className="grid grid-cols-2 gap-3">
        <input
          name="name"
          required
          placeholder="Full name"
          className="col-span-2 rounded-md border border-zinc-300 px-3 py-2 text-sm sm:col-span-1"
        />
        <input
          name="phone"
          required
          placeholder="Mobile number"
          className="col-span-2 rounded-md border border-zinc-300 px-3 py-2 text-sm sm:col-span-1"
        />
        <input
          name="email"
          type="email"
          placeholder="Email (optional)"
          className="col-span-2 rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <input
          name="originCity"
          placeholder="Traveling from (city)"
          className="col-span-2 rounded-md border border-zinc-300 px-3 py-2 text-sm sm:col-span-1"
        />
        <select
          name="destinationId"
          required
          value={destinationId}
          onChange={(e) => setDestinationId(e.target.value)}
          className="col-span-2 rounded-md border border-zinc-300 px-3 py-2 text-sm sm:col-span-1"
        >
          {destinations.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
        {selectedDestination && selectedDestination.cities.length > 0 && (
          <select
            name="cityId"
            defaultValue={defaultCityId ?? ""}
            className="col-span-2 rounded-md border border-zinc-300 px-3 py-2 text-sm sm:col-span-1"
          >
            <option value="">Any city</option>
            {selectedDestination.cities.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        )}
        <input
          name="travelDate"
          type="date"
          className="col-span-2 rounded-md border border-zinc-300 px-3 py-2 text-sm sm:col-span-1"
        />
        <input
          name="durationDays"
          type="number"
          min={1}
          placeholder="No. of days"
          className="col-span-2 rounded-md border border-zinc-300 px-3 py-2 text-sm sm:col-span-1"
        />
        <input
          name="adults"
          type="number"
          min={1}
          defaultValue={2}
          placeholder="Adults"
          className="col-span-1 rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <input
          name="children"
          type="number"
          min={0}
          defaultValue={0}
          placeholder="Children"
          className="col-span-1 rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <select
          name="budgetBand"
          defaultValue=""
          className="col-span-2 rounded-md border border-zinc-300 px-3 py-2 text-sm"
        >
          <option value="">Budget (optional)</option>
          <option value="Economy (0-2 Star)">Economy (0-2 Star)</option>
          <option value="Standard (3-4 Star)">Standard (3-4 Star)</option>
          <option value="Luxury (3 Star & Above)">Luxury (3 Star & Above)</option>
        </select>
        <textarea
          name="message"
          placeholder="Any specific requirements?"
          rows={2}
          className="col-span-2 rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
      </div>

      {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-orange-500 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Get Free Quotes"}
      </button>
      <p className="text-center text-xs text-zinc-500">
        Up to 3 verified travel agents will contact you with custom quotes — compare and save.
      </p>
    </form>
  );
}
