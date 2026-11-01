import { prisma } from "@/lib/prisma";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { guideUrl, tourPackagesUrl } from "@/lib/urls";

// llms.txt (llmstxt.org): a plain-markdown map of the site for AI assistants.
// Lists only READY pages, the same set the sitemap exposes.
export const revalidate = 3600;

export async function GET() {
  const [destinations, cities] = await Promise.all([
    prisma.destination.findMany({
      where: { contentStatus: "READY", kind: { not: "CIRCUIT" } },
      orderBy: [{ tier: "asc" }, { name: "asc" }],
      select: { slug: true, name: true },
    }),
    prisma.city.findMany({
      where: { contentStatus: "READY" },
      orderBy: { name: "asc" },
      select: { slug: true, name: true, destination: { select: { slug: true, name: true } } },
    }),
  ]);

  const u = (path: string) => `${SITE_URL}${path}`;
  const lines = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `${SITE_NAME} is a holiday planning marketplace. A traveller shares trip details once (destination, dates, group size, budget) and up to 3 verified local travel agents send customised itineraries and quotes. Quotes are free for travellers; agents are reviewed before they can receive enquiries. Destination guides are written by the ${SITE_NAME} Editorial Team.`,
    "",
    "## About",
    `- [About ${SITE_NAME}](${u("/about-us")}): what the service does and how agents are checked`,
    `- [Editorial policy](${u("/editorial-policy")}): sources, fact-checking and update process for guides`,
    `- [Contact](${u("/contact-us")})`,
    "",
    "## Tour packages",
    `- [All tour packages](${u("/tour-packages")})`,
    ...destinations.map((d) => `- [${d.name} tour packages](${u(tourPackagesUrl(d.slug))})`),
    "",
    "## Travel guides",
    ...destinations.map((d) => `- [${d.name} tourism guide](${u(guideUrl(d.slug))})`),
    ...cities.map((c) => `- [${c.name}, ${c.destination.name} travel guide](${u(guideUrl(c.destination.slug, c.slug))})`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
