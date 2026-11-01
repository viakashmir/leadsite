import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import { ORG, SITE_NAME } from "@/lib/site";

const title = `Contact ${SITE_NAME}`;
const description = `Plan a trip, ask about an enquiry or join as a travel agent. Ways to reach the ${SITE_NAME} team.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  const a = ORG.address;
  return (
    <InfoPage updated="2026-11-01" path="/contact-us" title={title} description={description} type="ContactPage">
      {(ORG.email || ORG.phone || a) && (
        <section>
          <h2>Reach Us</h2>
          <address className="not-italic">
            <ul>
              {ORG.email && (
                <li>
                  Email: <a href={`mailto:${ORG.email}`}>{ORG.email}</a>
                </li>
              )}
              {ORG.phone && (
                <li>
                  Phone: <a href={`tel:${ORG.phone}`}>{ORG.phone}</a>
                </li>
              )}
              {a && (
                <li>
                  {a.streetAddress}, {a.addressLocality}, {a.addressRegion} {a.postalCode}
                </li>
              )}
            </ul>
          </address>
        </section>
      )}
      <section>
        <h2>Planning a Trip?</h2>
        <p>Send your trip details with the form on this page and up to 3 verified local agents will reply with customised quotes.</p>
      </section>
      <section>
        <h2>Travel Agents</h2>
        <p>
          Run trips in India or abroad? <Link href="/agent/register">Join {SITE_NAME} free</Link> or{" "}
          <Link href="/agent/login">sign in</Link> to your agent account.
        </p>
      </section>
    </InfoPage>
  );
}
