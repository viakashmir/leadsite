import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import BusinessDetails from "@/components/BusinessDetails";
import { SITE_NAME } from "@/lib/site";

const title = "Privacy Policy";
const description = `What ${SITE_NAME} collects when you ask for quotes or join as an agent, who sees it and how to have it removed.`;
const path = "/privacy-policy";

export const metadata: Metadata = { title, description, alternates: { canonical: path } };

export default function PrivacyPage() {
  return (
    <InfoPage updated="2026-11-01" path={path} title={title} description={description} type="WebPage">
      <section>
        <h2>What We Collect</h2>
        <ul>
          <li>
            <strong>Travellers:</strong> the details you type into a quote form: name, mobile number, email,
            destination, travel date, trip length, number of travellers, hotel category, where you travel from and any
            note.
          </li>
          <li>
            <strong>Agents:</strong> business and contact details given at registration, the destinations you serve,
            your wallet and lead purchases. Card and bank details are entered on Razorpay&apos;s checkout and never
            reach our servers.
          </li>
          <li>
            <strong>Everyone:</strong> pages visited and buttons clicked, through Google Analytics, so we can see what
            helps people plan trips.
          </li>
        </ul>
      </section>
      <section>
        <h2>Who Sees Your Trip Request</h2>
        <ul>
          <li>Your phone number and email go to at most 3 verified agents who serve your destination and buy the lead.</li>
          <li>
            Trip details (destination, dates, trip length, group size, budget and your note) appear on our public
            Travel Leads pages so agents can find them. Your name is shortened, and your phone number and email are
            hidden, including any typed into your note.
          </li>
          <li>Our team sees the full request to check it is genuine and to help you.</li>
        </ul>
      </section>
      <section>
        <h2>Services We Use</h2>
        <ul>
          <li>Vercel hosts the website; Supabase stores our database.</li>
          <li>Resend sends our emails, such as your request confirmation.</li>
          <li>Razorpay processes agent payments.</li>
          <li>Google provides analytics and the optional &quot;Continue with Google&quot; sign-in.</li>
        </ul>
        <p>We do not sell personal data, and we do not share it with anyone else for advertising.</p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>
          We use a cookie to keep agents and admins signed in, and Google Analytics cookies to measure visits. You can
          block cookies in your browser; the quote form still works without them.
        </p>
      </section>
      <section>
        <h2>Your Choices</h2>
        <p>
          You can ask us to show you, correct or delete the details we hold about you, or to stop agents from
          receiving your request. <Link href="/contact-us">Contact us</Link> with the phone number you used and we
          will act on it. Agents who already bought your request keep the copy they received, and our terms forbid
          them from using it for anything other than your trip.
        </p>
      </section>
      <BusinessDetails />
    </InfoPage>
  );
}
