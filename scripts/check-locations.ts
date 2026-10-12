// Validates src/data/locations.ts: unique slugs across destinations, cities and
// circuits; unique place slugs per city; valid circuit targets. Prints page counts.
import {
  CIRCUITS,
  DESTINATIONS,
  GUIDE_SECTIONS,
  ORIGIN_CITIES,
  THEMES,
  slugify,
} from "../src/data/locations";

const RESERVED = new Set(["india", "international"]);
const seen = new Map<string, string>();
const errors: string[] = [];

const claim = (slug: string, owner: string) => {
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) errors.push(`bad slug "${slug}" (${owner})`);
  if (RESERVED.has(slug)) errors.push(`reserved slug "${slug}" (${owner})`);
  if (slug.startsWith("from-")) errors.push(`slug "${slug}" clashes with from-X-to-Y pages (${owner})`);
  if (seen.has(slug)) errors.push(`duplicate slug "${slug}": ${seen.get(slug)} and ${owner}`);
  seen.set(slug, owner);
};

const uniquePlaces = (places: string[], owner: string) => {
  const slugs = new Set<string>();
  for (const p of places) {
    const s = slugify(p);
    if (!s) errors.push(`place "${p}" in ${owner} has an empty slug`);
    if (slugs.has(s)) errors.push(`place slug "${s}" repeated in ${owner}`);
    slugs.add(s);
  }
};

for (const d of DESTINATIONS) {
  claim(d.slug, `destination ${d.name}`);
  if (d.cities.length === 0 && !d.places?.length)
    errors.push(`destination ${d.slug} has neither cities nor places`);
  if (d.cities.length > 0 && d.places?.length)
    errors.push(`destination ${d.slug} has both cities and destination-level places`);
  if (d.places) uniquePlaces(d.places, d.slug);
  for (const city of d.cities) {
    claim(city.slug, `city ${city.name} (${d.slug})`);
    uniquePlaces(city.places, `${d.slug}/${city.slug}`);
  }
}

for (const c of CIRCUITS) {
  claim(c.slug, `circuit ${c.name}`);
  for (const t of c.covers)
    if (!seen.has(t) || seen.get(t)!.startsWith("circuit"))
      errors.push(`circuit ${c.slug} covers unknown slug "${t}"`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const cities = DESTINATIONS.flatMap((d) => d.cities);
const india = DESTINATIONS.filter((d) => d.scope === "india");
const abroad = DESTINATIONS.filter((d) => d.scope === "international");
const places =
  cities.reduce((n, c) => n + c.places.length, 0) +
  DESTINATIONS.reduce((n, d) => n + (d.places?.length ?? 0), 0);
const packageTargets = DESTINATIONS.length + cities.length + CIRCUITS.length;

console.log(`Destinations: ${DESTINATIONS.length} (India ${india.length}, international ${abroad.length}, premium ${DESTINATIONS.filter((d) => d.premium).length})`);
console.log(`Cities: ${cities.length}`);
console.log(`Places: ${places}`);
console.log(`Circuits: ${CIRCUITS.length}`);
console.log("");
console.log("Possible pages (indexed only once content/packages exist):");
console.log(`  /tour-packages/{slug}:            ${packageTargets}`);
console.log(`  /{theme}/{dest-or-city}:          ${(DESTINATIONS.length + cities.length) * THEMES.length}`);
console.log(`  /tour-packages/from-X-to-Y:       ${ORIGIN_CITIES.length * DESTINATIONS.length}`);
console.log(`  /{dest}-tourism (+sections):      ${DESTINATIONS.length * (1 + GUIDE_SECTIONS.length)}`);
console.log(`  /{dest}-tourism/{city} (+sections): ${cities.length * (1 + GUIDE_SECTIONS.length)}`);
console.log(`  .../places-to-visit/{place}:      ${places}`);
