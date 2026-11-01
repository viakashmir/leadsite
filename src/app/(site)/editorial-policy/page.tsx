import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "@/components/InfoPage";
import { EDITORIAL_TEAM, SITE_NAME } from "@/lib/site";

const title = "Editorial Policy";
const description = `How the ${EDITORIAL_TEAM} researches, writes, fact-checks and updates ${SITE_NAME} travel guides.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPolicyPage() {
  return (
    <InfoPage path="/editorial-policy" title={title} description={description} type="WebPage">
      <section>
        <h2>Who writes our guides</h2>
        <p>
          Every destination, place and travel guide on {SITE_NAME} is written and reviewed by the {EDITORIAL_TEAM}.
          Each guide shows the date it was last updated at the top of the page.
        </p>
      </section>
      <section>
        <h2>Sources we use</h2>
        <ul>
          <li>Official state and national tourism department websites for attractions, timings and permits.</li>
          <li>Indian Railways, airport operators and state transport corporations for routes and connections.</li>
          <li>The India Meteorological Department for seasonal weather and climate.</li>
          <li>Government notices for entry permits, fees and road openings, such as high mountain passes.</li>
          <li>Feedback from the local travel agents who operate trips at each destination.</li>
        </ul>
      </section>
      <section>
        <h2>Accuracy and updates</h2>
        <ul>
          <li>We state distances, timings and fees only when an official or primary source supports them.</li>
          <li>Prices change by season and operator, so guides link to live agent quotes instead of quoting fixed package prices.</li>
          <li>Guides are reviewed when seasons, rules or routes change, and the updated date changes with them.</li>
          <li>Pages stay hidden from search engines until their content has been written and reviewed.</li>
        </ul>
      </section>
      <section>
        <h2>Independence</h2>
        <p>
          Agents pay to receive traveller enquiries, but they do not write or approve our guides, and no agent can pay
          to change what a guide says about a destination.
        </p>
      </section>
      <section>
        <h2>Corrections</h2>
        <p>
          Found something wrong or out of date? <Link href="/contact-us">Tell us</Link> and we will check it and
          update the guide.
        </p>
      </section>
    </InfoPage>
  );
}
