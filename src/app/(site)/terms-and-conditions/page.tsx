import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import BusinessDetails from "@/components/BusinessDetails";
import { SITE_NAME } from "@/lib/site";
import { WELCOME_CREDITS } from "@/lib/credits";

const title = "Terms and Conditions";
const description = `The rules for travellers asking for quotes and for travel agents buying leads on ${SITE_NAME}.`;
const path = "/terms-and-conditions";

export const metadata: Metadata = { title, description, alternates: { canonical: path } };

export default function TermsPage() {
  return (
    <InfoPage updated="2026-11-01" path={path} title={title} description={description} type="WebPage">
      <section>
        <h2>What {SITE_NAME} Does</h2>
        <p>
          {SITE_NAME} connects travellers with independent local travel agents. A traveller describes a trip once and
          up to 3 verified agents who operate that destination contact them with their own itinerary and price. We are
          a marketplace: we do not run tours, book hotels or sell holiday packages ourselves, and any booking is a
          contract between the traveller and the agent they choose.
        </p>
      </section>
      <section>
        <h2>For Travellers</h2>
        <ul>
          <li>Asking for quotes is free. We charge travellers no fee and take no booking commission.</li>
          <li>Give real details: your own name, a number you can be reached on and a genuine trip plan.</li>
          <li>Your phone number and email are shared with at most 3 agents who serve your destination.</li>
          <li>
            Package prices on the site are starting prices per person with two sharing a room. The final price comes
            from the agent and depends on dates, hotels and group size.
          </li>
          <li>
            Before you pay an agent, check their quote, inclusions, cancellation terms and payment schedule. Payments
            for a trip are made to the agent, not to {SITE_NAME}.
          </li>
        </ul>
      </section>
      <section>
        <h2>For Travel Agents</h2>
        <ul>
          <li>Agents register with their business details and can buy leads only after our team verifies the account.</li>
          <li>
            Leads are bought with wallet credits. 1 credit is worth ₹1. New accounts receive {WELCOME_CREDITS} welcome
            credits. Credits are added by buying a credit pack, paid online through Razorpay.
          </li>
          <li>Each lead is sold to at most 3 agents. The price of a lead is shown before you buy it.</li>
          <li>
            Use a traveller&apos;s contact details only to quote for the trip they asked about. Do not resell them,
            add them to marketing lists or contact them about anything else.
          </li>
          <li>Quote honestly: real hotels, real inclusions and prices you will honour.</li>
          <li>
            We may suspend an agent who misuses traveller data, misleads travellers or receives repeated genuine
            complaints. Unused purchased credits are then handled under our{" "}
            <Link href="/refund-and-cancellation-policy">refund policy</Link>.
          </li>
        </ul>
      </section>
      <section>
        <h2>Content and Prices on the Site</h2>
        <p>
          Our travel guides are written by our editorial team (see the <Link href="/editorial-policy">editorial
          policy</Link>). We work to keep facts and prices current, but timings, fees and road conditions change, so
          confirm them with your agent before you travel.
        </p>
      </section>
      <section>
        <h2>Liability</h2>
        <p>
          Agents are independent businesses. {SITE_NAME} is not a party to the contract between a traveller and an
          agent and is not responsible for the services an agent provides. We verify agents before they can buy leads
          and act on complaints, and we will help where we can if something goes wrong.
        </p>
      </section>
      <section>
        <h2>Changes</h2>
        <p>We may update these terms. The date at the top shows when they last changed.</p>
      </section>
      <BusinessDetails />
    </InfoPage>
  );
}
