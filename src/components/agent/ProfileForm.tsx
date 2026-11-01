"use client";

import { startTransition, useActionState } from "react";
import { updateAgentProfile, type FormResult } from "@/lib/profileActions";
import { SERVICE_OPTIONS } from "@/lib/validation";

const COMPANY_TYPES = [
  { value: "PROPRIETORSHIP", label: "Proprietorship" },
  { value: "PARTNERSHIP", label: "Partnership" },
  { value: "PRIVATE_LIMITED", label: "Private Limited Firm" },
  { value: "LLP", label: "LLP" },
  { value: "OTHER", label: "Other" },
] as const;

const input = "w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-brand focus:outline-none";
const label = "mb-1 block text-xs font-medium text-zinc-600";
const section = "rounded-lg border border-zinc-200 bg-white p-5";

export type ProfileData = {
  email: string;
  contactName: string;
  companyName: string;
  phone: string;
  servicesWanted: string[];
  destinationIds: string[];
  dailyLeadTarget: number;
  officeAddress: string;
  officeCity: string;
  officeState: string;
  gstNumber: string;
  companySince: string;
  teamSize: string;
  companyType: string;
  facebookUrl: string;
  instagramUrl: string;
};

export default function ProfileForm({
  profile,
  destinations,
}: {
  profile: ProfileData;
  destinations: { id: string; name: string }[];
}) {
  const [state, action, pending] = useActionState<FormResult, FormData>(updateAgentProfile, {});
  // Submitting through onSubmit (not the form's action prop) stops React from
  // resetting the fields, so typed values survive a validation error.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    startTransition(() => action(data));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <section className={section}>
        <h2 className="font-semibold text-zinc-900">Contact</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="contactName">Your name</label>
            <input id="contactName" name="contactName" required defaultValue={profile.contactName} className={input} />
          </div>
          <div>
            <label className={label} htmlFor="companyName">Company name</label>
            <input id="companyName" name="companyName" required defaultValue={profile.companyName} className={input} />
          </div>
          <div>
            <label className={label} htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" required defaultValue={profile.phone} className={input} />
          </div>
          <div>
            <label className={label}>Email (sign-in)</label>
            <p className="px-1 py-2 text-sm text-zinc-700">{profile.email}</p>
          </div>
        </div>
      </section>

      <section className={section}>
        <h2 className="font-semibold text-zinc-900">Destinations you deal in</h2>
        <p className="mt-1 text-xs text-zinc-500">You see and can unlock leads only for these.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {destinations.map((d) => (
            <label key={d.id} className="cursor-pointer">
              <input
                type="checkbox"
                name="destinationIds"
                value={d.id}
                defaultChecked={profile.destinationIds.includes(d.id)}
                className="peer sr-only"
              />
              <span className="inline-block rounded-full border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-brand/40">
                {d.name}
              </span>
            </label>
          ))}
        </div>
        <div className="mt-4 max-w-xs">
          <label className={label} htmlFor="dailyLeadTarget">Leads you want per day</label>
          <input id="dailyLeadTarget" name="dailyLeadTarget" type="number" min={1} max={1000} defaultValue={profile.dailyLeadTarget} className={input} />
        </div>
      </section>

      <section className={section}>
        <h2 className="font-semibold text-zinc-900">Services you want from us</h2>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {SERVICE_OPTIONS.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm text-zinc-700">
              <input type="checkbox" name="servicesWanted" value={opt.value} defaultChecked={profile.servicesWanted.includes(opt.value)} className="h-4 w-4" />
              {opt.label}
            </label>
          ))}
        </div>
      </section>

      <section className={section}>
        <h2 className="font-semibold text-zinc-900">About your company</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={label} htmlFor="officeAddress">Office address</label>
            <textarea id="officeAddress" name="officeAddress" maxLength={300} defaultValue={profile.officeAddress} className={input} />
          </div>
          <div>
            <label className={label} htmlFor="officeCity">City</label>
            <input id="officeCity" name="officeCity" defaultValue={profile.officeCity} className={input} />
          </div>
          <div>
            <label className={label} htmlFor="officeState">State</label>
            <input id="officeState" name="officeState" defaultValue={profile.officeState} className={input} />
          </div>
          <div>
            <label className={label} htmlFor="gstNumber">GST number</label>
            <input id="gstNumber" name="gstNumber" defaultValue={profile.gstNumber} className={input} />
          </div>
          <div>
            <label className={label} htmlFor="companyType">Company type</label>
            <select id="companyType" name="companyType" defaultValue={profile.companyType} className={input}>
              <option value="">Select</option>
              {COMPANY_TYPES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={label} htmlFor="companySince">In business since (year)</label>
            <input id="companySince" name="companySince" type="number" min={1950} max={2030} defaultValue={profile.companySince} className={input} />
          </div>
          <div>
            <label className={label} htmlFor="teamSize">Team size</label>
            <input id="teamSize" name="teamSize" type="number" min={1} defaultValue={profile.teamSize} className={input} />
          </div>
          <div>
            <label className={label} htmlFor="facebookUrl">Facebook page</label>
            <input id="facebookUrl" name="facebookUrl" defaultValue={profile.facebookUrl} placeholder="facebook.com/yourpage" className={input} />
          </div>
          <div>
            <label className={label} htmlFor="instagramUrl">Instagram</label>
            <input id="instagramUrl" name="instagramUrl" defaultValue={profile.instagramUrl} placeholder="instagram.com/yourhandle" className={input} />
          </div>
        </div>
      </section>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={pending} className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60">
          {pending ? "Saving…" : "Save profile"}
        </button>
        {state.ok && !pending && <p className="text-sm text-green-700">Saved.</p>}
        {state.error && <p className="text-sm text-red-600">{state.error}</p>}
      </div>
    </form>
  );
}
