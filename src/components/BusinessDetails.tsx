import Link from "next/link";
import { ORG, SITE_NAME, WHATSAPP_DIGITS, WHATSAPP_NUMBER } from "@/lib/site";

// Who runs the site and how to reach them, for the legal pages. Only
// owner-confirmed details from ORG are shown; blanks are left out.
export default function BusinessDetails() {
  const a = ORG.address;
  return (
    <section>
      <h2>Contact</h2>
      <p>
        {SITE_NAME}
        {ORG.legalName ? ` is operated by ${ORG.legalName}` : ""}.
        {a ? ` Registered address: ${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}, India.` : ""}
      </p>
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
        <li>
          WhatsApp: <a href={`https://wa.me/${WHATSAPP_DIGITS}`}>{WHATSAPP_NUMBER}</a>
        </li>
        <li>
          Or use our <Link href="/contact-us">contact page</Link>.
        </li>
      </ul>
    </section>
  );
}
