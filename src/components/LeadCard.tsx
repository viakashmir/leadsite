import Link from "next/link";
import { maskEmail, maskName, maskPhone } from "@/lib/mask";
import { formatDate } from "@/lib/format";

type LeadCardData = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  originCity: string | null;
  destinationName: string;
  cityName: string | null;
  travelDate: Date | null;
  durationDays: number | null;
  adults: number;
  children: number;
  budgetBand: string | null;
  message: string | null;
  verified: boolean;
  status: string;
  createdAt: Date;
};

export default function LeadCard({ lead }: { lead: LeadCardData }) {
  const booked = lead.status === "BOOKED";

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
      {booked && (
        <span className="mb-2 inline-block rounded bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500">
          Tickets Already Booked
        </span>
      )}
      <p className="text-sm font-medium text-zinc-900">
        {lead.durationDays ? `${lead.durationDays} days` : "Multi-day"} {lead.cityName ?? lead.destinationName}{" "}
        tour package{lead.originCity ? ` required from ${lead.originCity}` : ""} for {lead.adults} adult
        {lead.adults > 1 ? "s" : ""}
        {lead.children ? ` and ${lead.children} children` : ""}
      </p>
      {lead.message && <p className="mt-1 text-xs text-zinc-500">{lead.message}</p>}

      <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-zinc-600 sm:grid-cols-4">
        {lead.travelDate && (
          <div>
            <dt className="text-zinc-400">Plan to travel on</dt>
            <dd>{formatDate(lead.travelDate)}</dd>
          </div>
        )}
        {lead.durationDays && (
          <div>
            <dt className="text-zinc-400">No. of Days</dt>
            <dd>{lead.durationDays}</dd>
          </div>
        )}
        {lead.budgetBand && (
          <div>
            <dt className="text-zinc-400">Budget</dt>
            <dd>{lead.budgetBand}</dd>
          </div>
        )}
        <div>
          <dt className="text-zinc-400">Posted Date</dt>
          <dd>{formatDate(lead.createdAt)}</dd>
        </div>
      </dl>

      <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-3">
        <div className="text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span className="font-medium text-zinc-700">{maskName(lead.name)}</span>
            {lead.verified && (
              <span className="rounded-full bg-green-50 px-1.5 py-0.5 text-[10px] font-medium text-green-700">
                Verified
              </span>
            )}
          </div>
          <div>{maskPhone(lead.phone)}</div>
          {lead.email && <div>{maskEmail(lead.email)}</div>}
        </div>
        <Link
          href={`/agent/login?next=/agent/dashboard/leads&lead=${lead.id}`}
          className="rounded-md bg-blue-700 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-800"
        >
          Request a Call for Free Contact
        </Link>
      </div>
    </div>
  );
}
