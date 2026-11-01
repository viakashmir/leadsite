import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import BusinessDetails from "@/components/BusinessDetails";
import { SITE_NAME } from "@/lib/site";

const title = "Shipping and Delivery Policy";
const description = `${SITE_NAME} sells no physical goods. How agent credits and leads are delivered after payment.`;
const path = "/shipping-and-delivery-policy";

export const metadata: Metadata = { title, description, alternates: { canonical: path } };

export default function DeliveryPage() {
  return (
    <InfoPage updated="2026-11-01" path={path} title={title} description={description} type="WebPage">
      <section>
        <h2>Nothing Is Shipped</h2>
        <p>{SITE_NAME} is an online service. We do not sell or ship physical products.</p>
      </section>
      <section>
        <h2>Agent Credits</h2>
        <p>
          Credits from a credit pack are added to your wallet as soon as Razorpay confirms the payment, usually within
          a minute. You can see them under Wallet in your agent dashboard along with the payment ID.
        </p>
      </section>
      <section>
        <h2>Leads</h2>
        <p>
          When you buy a lead with credits, the traveller&apos;s full phone number and email appear on your Leads page
          at once. You also get an email confirming the purchase.
        </p>
      </section>
      <section>
        <h2>Trips</h2>
        <p>
          Holidays are delivered by the agent the traveller books with, on the dates and terms they agree. See our{" "}
          <Link href="/terms-and-conditions">terms</Link>.
        </p>
      </section>
      <BusinessDetails />
    </InfoPage>
  );
}
