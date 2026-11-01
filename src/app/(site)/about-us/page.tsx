import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import { ORG, SITE_NAME } from "@/lib/site";

const title = `About ${SITE_NAME}`;
const description = `${SITE_NAME} connects travellers with verified local travel agents. Share your trip once and get up to 3 customised quotes to compare.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about-us" },
};

export default function AboutPage() {
  return (
    <InfoPage updated="2026-11-01" path="/about-us" title={title} description={description} type="AboutPage">
      <section>
        <h2>What {SITE_NAME} Does</h2>
        <p>
          {SITE_NAME} is a holiday planning marketplace for trips across every Indian state and union territory and
          selected international destinations. You describe your trip once: where, when, how many people and your
          budget. Up to 3 local travel agents who operate that destination send you customised itineraries and
          prices. You compare them and book directly with the agent you choose.
        </p>
      </section>
      <section>
        <h2>How We Check Agents and Enquiries</h2>
        <ul>
          <li>Every agent account starts as pending and is reviewed by our team before it can see or buy any enquiry.</li>
          <li>Agents tell us the destinations they operate, so enquiries go to people who run trips there.</li>
          <li>Each enquiry is shared with at most 3 agents, so you are not flooded with calls.</li>
          <li>Our team reviews enquiries and marks genuine ones as verified before agents act on them.</li>
        </ul>
      </section>
      <section>
        <h2>What It Costs</h2>
        <p>
          Getting quotes is free for travellers. Agents pay us to receive enquiries, and you pay the agent you book
          with. We do not add a booking fee to your trip.
        </p>
      </section>
      <section>
        <h2>Our Travel Guides</h2>
        <p>
          Destination guides on {SITE_NAME} are written and fact-checked by the {SITE_NAME} Editorial Team. Read our{" "}
          <Link href="/editorial-policy">editorial policy</Link> to see how we research, which sources we use and how
          we keep guides up to date.
        </p>
      </section>
      {(ORG.legalName || ORG.foundingDate) && (
        <section>
          <h2>Company Details</h2>
          <ul>
            {ORG.legalName && <li>Registered name: {ORG.legalName}</li>}
            {ORG.foundingDate && <li>Founded: {ORG.foundingDate}</li>}
          </ul>
        </section>
      )}
      <p>
        Questions? <Link href="/contact-us">Contact us</Link>.
      </p>
    </InfoPage>
  );
}
