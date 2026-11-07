import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import TrustTicks from "@/components/TrustTicks";
import { Breadcrumbs } from "@/components/location/blocks";
import { getEnquiryOptions, toEnquiryOptions } from "@/lib/locations";
import { webPageSchema } from "@/lib/schema";
import { SITE_NAME, WHATSAPP_DIGITS, WHATSAPP_NUMBER } from "@/lib/site";

// Refreshed on deploy only, like the homepage (timed rebuilds are billed ISR writes).
export const revalidate = false;

const title = "Plan My Trip";
const description = `Tell ${SITE_NAME} where and when you want to travel. A trip expert replies with a day-by-day plan, hotels and the price, and shapes it with you.`;

export const metadata: Metadata = {
  title: `${title}: Get a Custom Holiday Plan`,
  description,
  alternates: { canonical: "/plan-my-trip" },
};

const STEPS = [
  { title: "Share your trip", text: "Where you want to go, when, for how many days, and who is travelling." },
  { title: "Get your plan", text: "A trip expert gets back to you with a day-by-day plan, the hotels and the price." },
  { title: "Shape it together", text: "Change places, hotels or days until the trip feels right, then book." },
];

export default async function PlanMyTripPage() {
  const destinations = await getEnquiryOptions();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
      <JsonLd data={webPageSchema({ path: "/plan-my-trip", name: title, description, type: "WebPage" })} />
      <Breadcrumbs items={[{ name: title, href: "/plan-my-trip" }]} />
      <div className="mt-3 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-12">
        <div>
          <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Plan My Trip
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">{description}</p>
          <TrustTicks className="mt-4" />

          <ol className="mt-8 space-y-5">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h2 className="font-semibold text-ink">{step.title}</h2>
                  <p className="mt-0.5 text-sm text-ink-soft">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href={`https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(`Hi ${SITE_NAME}, I'd like help planning a holiday.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
          >
            Prefer to chat? WhatsApp {WHATSAPP_NUMBER}
          </a>
        </div>

        <div id="get-quotes" className="scroll-mt-20">
          <EnquiryForm destinations={toEnquiryOptions(destinations)} brand title="Plan My Trip" />
        </div>
      </div>
    </div>
  );
}
