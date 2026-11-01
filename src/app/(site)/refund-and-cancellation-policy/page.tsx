import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import BusinessDetails from "@/components/BusinessDetails";
import { SITE_NAME } from "@/lib/site";

const title = "Refund and Cancellation Policy";
const description = `When ${SITE_NAME} refunds agent credit purchases, how lead reversals work, and how trip cancellations are handled.`;
const path = "/refund-and-cancellation-policy";

export const metadata: Metadata = { title, description, alternates: { canonical: path } };

export default function RefundPage() {
  return (
    <InfoPage updated="2026-11-01" path={path} title={title} description={description} type="WebPage">
      <section>
        <h2>Travellers</h2>
        <p>
          Travellers pay {SITE_NAME} nothing, so there is nothing to refund on our side. You pay the agent you choose
          for your trip, and that agent&apos;s own cancellation and refund terms apply. Ask for them in writing before
          you pay. If an agent does not honour their terms, <Link href="/contact-us">tell us</Link>.
        </p>
      </section>
      <section>
        <h2>Agents: Credit Packs</h2>
        <ul>
          <li>Unused wallet credits are refundable within 7 days of purchase, minus credits already spent.</li>
          <li>Bonus and welcome credits are free and are not refundable for cash.</li>
          <li>Approved refunds go back to the original payment method within 7 to 10 working days.</li>
          <li>
            To ask for a refund, <Link href="/contact-us">contact us</Link> with your registered email and the
            Razorpay payment ID shown in your wallet.
          </li>
        </ul>
      </section>
      <section>
        <h2>Agents: Lead Reversals</h2>
        <ul>
          <li>A lead is credited back to your wallet if the traveller&apos;s number is invalid or unreachable after 3 attempts.</li>
          <li>A lead is also reversed if the traveller says, on first contact, that they never sent an enquiry.</li>
          <li>Reversal requests must be raised within 48 hours of buying the lead. We check each one before crediting it back.</li>
        </ul>
      </section>
      <section>
        <h2>Failed or Double Payments</h2>
        <p>
          If money left your account but credits did not reach your wallet, the payment is either credited within a
          few minutes once Razorpay confirms it, or refunded to you automatically by Razorpay. Contact us with the
          payment ID if neither has happened within 24 hours.
        </p>
      </section>
      <BusinessDetails />
    </InfoPage>
  );
}
