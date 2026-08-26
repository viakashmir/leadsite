"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SERVICE_OPTIONS } from "@/lib/validation";

type Destination = { id: string; name: string };

const STEPS = ["Sign Up", "Services", "Destinations", "About Company"] as const;

const COMPANY_TYPES = [
  { value: "PROPRIETORSHIP", label: "Proprietorship" },
  { value: "PARTNERSHIP", label: "Partnership" },
  { value: "PRIVATE_LIMITED", label: "Private Limited Firm" },
  { value: "LLP", label: "LLP" },
  { value: "OTHER", label: "Other" },
] as const;

export default function RegisterWizard({ destinations }: { destinations: Destination[] }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    companyName: "",
    contactName: "",
    phone: "",
    servicesWanted: [] as string[],
    destinationIds: [] as string[],
    dailyLeadTarget: 10,
    officeAddress: "",
    officeCity: "",
    officeState: "",
    gstNumber: "",
    companySince: "",
    teamSize: "",
    companyType: "" as string,
    facebookUrl: "",
    instagramUrl: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleInArray(key: "servicesWanted" | "destinationIds", value: string) {
    setForm((f) => {
      const arr = f[key];
      return {
        ...f,
        [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  }

  function validateStep(): string | null {
    if (step === 0) {
      if (!form.email || !form.password || !form.companyName || !form.contactName || !form.phone) {
        return "Please fill in all required fields";
      }
      if (form.password.length < 6) return "Password must be at least 6 characters";
    }
    if (step === 1 && form.servicesWanted.length === 0) {
      return "Select at least one service";
    }
    if (step === 2 && form.destinationIds.length === 0) {
      return "Select at least one destination";
    }
    return null;
  }

  function handleNext() {
    const err = validateStep();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/agents/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          companySince: form.companySince ? Number(form.companySince) : undefined,
          teamSize: form.teamSize ? Number(form.teamSize) : undefined,
          companyType: form.companyType || undefined,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      router.push("/agent/dashboard");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                i <= step ? "bg-blue-700 text-white" : "bg-zinc-200 text-zinc-500"
              }`}
            >
              {i + 1}
            </div>
            {i < STEPS.length - 1 && (
              <div className={`mx-2 h-0.5 flex-1 ${i < step ? "bg-blue-700" : "bg-zinc-200"}`} />
            )}
          </div>
        ))}
      </div>
      <div className="mb-4 flex justify-between text-xs font-medium text-zinc-500">
        {STEPS.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      {step === 0 && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">Create your free agent account</h2>
          <input
            placeholder="Company name"
            value={form.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            placeholder="Your name"
            value={form.contactName}
            onChange={(e) => update("contactName", e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </div>
      )}

      {step === 1 && (
        <div>
          <h2 className="text-lg font-semibold text-zinc-900">Services you want from us?</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {SERVICE_OPTIONS.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 text-sm text-zinc-700">
                <input
                  type="checkbox"
                  checked={form.servicesWanted.includes(opt.value)}
                  onChange={() => toggleInArray("servicesWanted", opt.value)}
                  className="h-4 w-4"
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-lg font-semibold text-zinc-900">Destinations you deal in?</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {destinations.map((d) => (
              <button
                type="button"
                key={d.id}
                onClick={() => toggleInArray("destinationIds", d.id)}
                className={`rounded-full border px-3 py-1.5 text-sm ${
                  form.destinationIds.includes(d.id)
                    ? "border-blue-700 bg-blue-700 text-white"
                    : "border-zinc-300 text-zinc-700"
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
          <label className="mt-5 block text-sm font-medium text-zinc-700">
            How many leads do you need daily?
          </label>
          <input
            type="number"
            min={1}
            value={form.dailyLeadTarget}
            onChange={(e) => update("dailyLeadTarget", Number(e.target.value))}
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">About your company</h2>
          <textarea
            placeholder="Office address"
            value={form.officeAddress}
            onChange={(e) => update("officeAddress", e.target.value)}
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              placeholder="Office city"
              value={form.officeCity}
              onChange={(e) => update("officeCity", e.target.value)}
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="Office state"
              value={form.officeState}
              onChange={(e) => update("officeState", e.target.value)}
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="GST number (optional)"
              value={form.gstNumber}
              onChange={(e) => update("gstNumber", e.target.value)}
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="Company since (year)"
              value={form.companySince}
              onChange={(e) => update("companySince", e.target.value)}
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="Team size"
              value={form.teamSize}
              onChange={(e) => update("teamSize", e.target.value)}
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
            <select
              value={form.companyType}
              onChange={(e) => update("companyType", e.target.value)}
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
            >
              <option value="">Company type</option>
              {COMPANY_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            <input
              placeholder="Facebook URL (optional)"
              value={form.facebookUrl}
              onChange={(e) => update("facebookUrl", e.target.value)}
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
            <input
              placeholder="Instagram URL (optional)"
              value={form.instagramUrl}
              onChange={(e) => update("instagramUrl", e.target.value)}
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </div>
        </div>
      )}

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(s - 1, 0))}
          disabled={step === 0}
          className="rounded-md px-4 py-2 text-sm font-medium text-zinc-600 disabled:opacity-0"
        >
          Back
        </button>
        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="rounded-md bg-blue-700 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Next →
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="rounded-md bg-orange-500 px-5 py-2 text-sm font-semibold text-white hover:bg-orange-600 disabled:opacity-60"
          >
            {submitting ? "Creating account..." : "Finish & Get 500 Free Credits"}
          </button>
        )}
      </div>
    </div>
  );
}
