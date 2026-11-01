// Curated Kashmir packages. Idempotent: upserts by slug, so re-running updates
// prices and copy in place. Run against production with:
//   DATABASE_URL="postgresql://..." npx tsx prisma/seed-kashmir-packages.ts
// (scripts/deploy-db.sh runs it too.)
//
// Prices are "from" prices per person on twin sharing; verified agents send
// the final quote. heroImage is left empty so each card uses the city's own
// photo until an admin fetches a package photo from /admin/packages.

import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL, max: Number(process.env.PG_POOL_MAX) || 2 }),
});

type Pkg = {
  slug: string;
  title: string;
  city: string; // base city slug, used for the card photo and city pages
  days: number;
  nights: number;
  price: number;
  theme: string;
  summary: string;
  itinerary: string[];
};

const FROM = "Price is per person on twin sharing; verified Kashmir agents confirm the final quote for your dates.";

export const KASHMIR_PACKAGES: Pkg[] = [
  {
    slug: "kashmir-valley-trio-srinagar-gulmarg-pahalgam-5-days",
    title: "Kashmir Valley Trio: Srinagar, Gulmarg & Pahalgam in 5 Days",
    city: "srinagar",
    days: 5,
    nights: 4,
    price: 11269,
    theme: "Family,Friends",
    summary: `The three places most first-timers want, paced so you are not in a car all day: three nights in Srinagar by Dal Lake, a full day in the meadows of Gulmarg and a day out in Pahalgam's Lidder valley. Includes hotel stays with breakfast and dinner, a private cab for all sightseeing and airport transfers. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar. Check in, then an evening shikara ride on Dal Lake past the floating vegetable gardens and Char Chinar.",
      "Day 2: Srinagar to Gulmarg day trip (about 50 km, 1.5–2 hours). Ride the Gulmarg Gondola to Kongdori (around 2,650 m), with Phase 2 to Apharwat if open. Back to Srinagar.",
      "Day 3: Srinagar to Pahalgam (about 90 km). Stop at the Pampore saffron fields and the 9th-century Awantipora ruins. Overnight in Pahalgam by the Lidder river.",
      "Day 4: Morning in Betaab Valley and Aru Valley by local cab, then drive back to Srinagar. Evening walk on the Boulevard.",
      "Day 5: Mughal gardens (Nishat Bagh and Shalimar Bagh) if your flight allows, then airport drop.",
    ],
  },
  {
    slug: "kashmir-grand-circuit-sonamarg-gulmarg-pahalgam-6-days",
    title: "Kashmir Grand Circuit: 6 Days with Sonamarg, Gulmarg & Pahalgam",
    city: "srinagar",
    days: 6,
    nights: 5,
    price: 13719,
    theme: "Family,Friends",
    summary: `All four classic valleys in one trip: Srinagar, Sonamarg's glacier country, Gulmarg and Pahalgam. Good for travellers who want to see the whole of Kashmir once without rushing. Includes hotels with breakfast and dinner, a private cab and transfers. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar. Afternoon at Shankaracharya Temple for views over the city, evening shikara on Dal Lake.",
      "Day 2: Sonamarg day trip (about 80 km along the Sindh river). Pony ride or walk to Thajiwas Glacier; Zero Point only when the road is open.",
      "Day 3: Gulmarg day trip. Gondola ride, meadow walk and the St. Mary's church. Return to Srinagar.",
      "Day 4: Drive to Pahalgam via Pampore saffron fields. Evening by the Lidder river.",
      "Day 5: Betaab Valley, Aru Valley and Chandanwari by local cab. Drive back to Srinagar.",
      "Day 6: Nishat Bagh or Hazratbal shrine on the way to the airport.",
    ],
  },
  {
    slug: "kashmir-weekend-escape-srinagar-gulmarg-4-days",
    title: "Kashmir Weekend Escape: 4 Days in Srinagar & Gulmarg",
    city: "srinagar",
    days: 4,
    nights: 3,
    price: 8999,
    theme: "Budget,Friends",
    summary: `The shortest sensible Kashmir trip for a long weekend: Dal Lake, the Mughal gardens and a full day in Gulmarg. Simple, clean budget hotels with breakfast and dinner, a shared or private cab, transfers included. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar. Shikara ride on Dal Lake at sunset.",
      "Day 2: Gulmarg day trip with the Gondola to Kongdori. Snow from December to March, flower meadows from May to August.",
      "Day 3: Nishat Bagh, Shalimar Bagh and Chashme Shahi gardens, then shopping for pashmina and dry fruit at Lal Chowk.",
      "Day 4: Airport drop.",
    ],
  },
  {
    slug: "kashmir-honeymoon-houseboat-gulmarg-pahalgam-5-days",
    title: "Kashmir Honeymoon: Houseboat Night, Gulmarg Snow & Pahalgam Meadows",
    city: "srinagar",
    days: 5,
    nights: 4,
    price: 14209,
    theme: "Honeymoon",
    summary: `Built for couples: one night on a Dal Lake houseboat, a private sunset shikara, a day in the snow at Gulmarg and a night by the river in Pahalgam. Includes stays with breakfast and dinner, a private cab, and a simple room decoration on request. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar and check in to a Dal Lake houseboat. Private shikara ride at sunset.",
      "Day 2: Gulmarg day trip: Gondola, snow play in season, and kahwa at a mountain-side café. Hotel in Srinagar.",
      "Day 3: Drive to Pahalgam along the saffron fields of Pampore. Evening by the Lidder river.",
      "Day 4: Betaab Valley and Aru Valley, then back to Srinagar. Optional Kashmiri wazwan dinner.",
      "Day 5: Shalimar Bagh, the Mughal garden built for Empress Nur Jahan, before the airport drop.",
    ],
  },
  {
    slug: "slow-kashmir-overnight-gulmarg-pahalgam-7-days",
    title: "Slow Kashmir: 7 Days with Overnight Stays in Gulmarg & Pahalgam",
    city: "gulmarg",
    days: 7,
    nights: 6,
    price: 24499,
    theme: "Family,Mid-Range",
    summary: `Instead of day trips, you sleep in the mountains: two nights in Gulmarg, two in Pahalgam and two in Srinagar. Quieter mornings, less driving and better weather windows for the Gondola. Standard 3-star hotels with breakfast and dinner, private cab, transfers. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar. Dal Lake shikara and the Boulevard.",
      "Day 2: Drive to Gulmarg (about 50 km via Tangmarg). Afternoon free in the meadow.",
      "Day 3: Gulmarg Gondola Phase 1 and Phase 2 early, before queues build. Skiing lessons in winter, pony rides in summer.",
      "Day 4: Gulmarg to Pahalgam (about 140 km), stopping at Pampore and Awantipora.",
      "Day 5: Full day in Pahalgam: Betaab Valley, Aru Valley and Chandanwari.",
      "Day 6: Back to Srinagar. Mughal gardens and Hazratbal shrine.",
      "Day 7: Airport drop.",
    ],
  },
  {
    slug: "kashmir-family-holiday-2-nights-pahalgam-6-days",
    title: "Kashmir Family Holiday: Unhurried 6 Days with 2 Nights in Pahalgam",
    city: "pahalgam",
    days: 6,
    nights: 5,
    price: 13719,
    theme: "Family",
    summary: `Paced for children and grandparents: short drives, two nights in Pahalgam so nobody is packing every morning, and plenty of time in parks and meadows. Family rooms on request, breakfast and dinner, private cab and transfers. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar, rest, then a gentle evening shikara ride.",
      "Day 2: Gulmarg day trip with the Gondola; snow play for children in winter.",
      "Day 3: Drive to Pahalgam with a stop at the saffron fields.",
      "Day 4: Betaab Valley (the film location) and Aru Valley at an easy pace.",
      "Day 5: Morning by the Lidder river, then back to Srinagar for the Mughal gardens.",
      "Day 6: Airport drop.",
    ],
  },
  {
    slug: "kashmir-group-departure-friends-5-days",
    title: "Kashmir Group Departure: 5 Days for Friends & Small Groups",
    city: "srinagar",
    days: 5,
    nights: 4,
    price: 9799,
    theme: "Group,Friends,Budget",
    summary: `A value trip for groups of friends or colleagues, with shared tempo traveller and triple or quad rooms to keep costs down. Srinagar, Gulmarg and Pahalgam with breakfast and dinner, transfers and sightseeing. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar. Group shikara ride and evening at the Boulevard.",
      "Day 2: Gulmarg day trip: Gondola, snow or meadow games, ATV rides as an add-on.",
      "Day 3: Pahalgam via Pampore. Bonfire evening at the hotel where allowed.",
      "Day 4: Betaab and Aru valleys, river-side lunch, back to Srinagar.",
      "Day 5: Airport drop.",
    ],
  },
  {
    slug: "kashmir-winter-group-trip-gulmarg-sonamarg-snow-6-days",
    title: "Kashmir Winter Group Trip: 6 Days of Snow in Gulmarg & Sonamarg",
    city: "gulmarg",
    days: 6,
    nights: 5,
    price: 11759,
    theme: "Group,Adventure,Friends",
    summary: `For December to March, when Kashmir is under snow: Gulmarg's slopes, Sonamarg's frozen landscape and Srinagar in winter. Shared transport for the group, heated rooms with breakfast and dinner, and snow-chain cars where roads need them. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar. Warm up with kahwa and an evening by Dal Lake.",
      "Day 2: Gulmarg: Gondola to Kongdori, sledging and a beginner ski lesson (optional).",
      "Day 3: Sonamarg in snow, as far as the road is open. Snow-scooter rides are an add-on.",
      "Day 4: Pahalgam for snowy pine forests and the frozen Lidder banks.",
      "Day 5: Back to Srinagar. Local market for pherans and walnut-wood souvenirs.",
      "Day 6: Airport drop.",
    ],
  },
  {
    slug: "gulmarg-snow-stay-ski-village-5-days",
    title: "Gulmarg Snow Stay: 5 Days with 2 Nights in the Ski Village",
    city: "gulmarg",
    days: 5,
    nights: 4,
    price: 21559,
    theme: "Adventure,Honeymoon,Mid-Range",
    summary: `Two nights inside Gulmarg itself, so you get the slopes at first light and the quiet after day-trippers leave. Good for first-time skiers and couples who want snow. Standard 3-star hotels in Gulmarg and Srinagar with breakfast and dinner, private cab. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar. Dal Lake shikara.",
      "Day 2: Drive to Gulmarg. Afternoon sledging or a walk to the old St. Mary's church.",
      "Day 3: Early Gondola to Apharwat (close to 4,000 m) for the views; beginner ski or snowboard session on the lower slopes.",
      "Day 4: Back to Srinagar via Tangmarg. Mughal gardens.",
      "Day 5: Airport drop.",
    ],
  },
  {
    slug: "kashmir-in-winter-frozen-lakes-snowfields-6-days",
    title: "Kashmir in Winter: 6 Days of Frozen Lakes, Snowfields & Kahwa",
    city: "srinagar",
    days: 6,
    nights: 5,
    price: 16659,
    theme: "Adventure,Family",
    summary: `A full winter itinerary for families and couples: Dal Lake in the cold, Gulmarg and Sonamarg in snow, Pahalgam's white forests and an evening of Kashmiri food. Heated rooms, breakfast and dinner, private cab with snow chains. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar. Evening shikara with blankets and kangri warmers.",
      "Day 2: Gulmarg in snow with the Gondola.",
      "Day 3: Sonamarg, road permitting, for snow play.",
      "Day 4: Pahalgam and Betaab Valley under snow.",
      "Day 5: Back to Srinagar, Hazratbal shrine and a wazwan dinner.",
      "Day 6: Airport drop.",
    ],
  },
  {
    slug: "kashmir-beyond-the-usual-doodhpathri-yusmarg-6-days",
    title: "Kashmir Beyond the Usual: 6 Days with Doodhpathri & Yusmarg",
    city: "doodhpathri",
    days: 6,
    nights: 5,
    price: 17149,
    theme: "Family,Friends",
    summary: `For travellers who want the famous places and two quieter meadows most tours skip: Doodhpathri, the "valley of milk", and Yusmarg's pine-ringed grasslands. Comfortable hotels with breakfast and dinner, private cab, transfers. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar. Dal Lake shikara.",
      "Day 2: Doodhpathri day trip (about 42 km): streams, meadows and pony rides, far fewer crowds.",
      "Day 3: Gulmarg day trip with the Gondola.",
      "Day 4: Yusmarg day trip (about 47 km) for the Doodh Ganga river and Nilnag lake walk.",
      "Day 5: Pahalgam and Betaab Valley, back to Srinagar.",
      "Day 6: Airport drop.",
    ],
  },
  {
    slug: "short-kashmir-break-gulmarg-gondola-4-days",
    title: "Short Kashmir Break: 4 Days with the Gulmarg Gondola",
    city: "gulmarg",
    days: 4,
    nights: 3,
    price: 9799,
    theme: "Friends,Honeymoon",
    summary: `Three nights, two of them in Srinagar and one in Gulmarg, so you see the Gondola and the meadow without a long return drive the same day. Hotels with breakfast and dinner, private cab and transfers. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar. Shikara ride and Mughal gardens.",
      "Day 2: Drive to Gulmarg and take the Gondola. Overnight in Gulmarg.",
      "Day 3: Morning in Gulmarg, then back to Srinagar for Shankaracharya Temple and the old city.",
      "Day 4: Airport drop.",
    ],
  },
  {
    slug: "kashmir-premium-retreat-heritage-houseboat-5-days",
    title: "Kashmir Premium Retreat: 5 Days with 4-Star Hotels & a Deluxe Houseboat",
    city: "srinagar",
    days: 5,
    nights: 4,
    price: 24009,
    theme: "Premium,Honeymoon",
    summary: `A more comfortable Kashmir: a deluxe houseboat on Dal Lake, 4-star hotels in Gulmarg and Pahalgam, a dedicated driver and slower days. Breakfast and dinner, airport transfers and all sightseeing included. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar and check in to a deluxe Dal Lake houseboat. Private sunset shikara.",
      "Day 2: Gulmarg with both Gondola phases, lunch with a view of the Pir Panjal range.",
      "Day 3: Drive to Pahalgam; afternoon at leisure by the Lidder.",
      "Day 4: Betaab and Aru valleys, back to Srinagar; Mughal gardens at golden hour.",
      "Day 5: Airport drop.",
    ],
  },
  {
    slug: "gulmarg-luxury-ski-resort-stay-5-days",
    title: "Gulmarg Luxury Stay: 5 Days at a Ski Resort with Srinagar",
    city: "gulmarg",
    days: 5,
    nights: 4,
    price: 61999,
    theme: "Luxury,Honeymoon",
    summary: `Two nights at one of Gulmarg's top 5-star resorts with the slopes outside your window, plus two nights in a 5-star Srinagar hotel. Resort rates peak from late December to March, so winter dates cost more. Private SUV, breakfast and dinner, and Gondola tickets arranged in advance. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar. Private shikara and dinner at the hotel.",
      "Day 2: Drive to Gulmarg and check in to the resort. Spa or snow walk.",
      "Day 3: Gondola to Apharwat; private ski instructor available in season.",
      "Day 4: Back to Srinagar via Tangmarg. Nishat and Shalimar gardens.",
      "Day 5: Airport drop.",
    ],
  },
  {
    slug: "kashmir-luxury-long-weekend-4-days",
    title: "Kashmir Luxury Long Weekend: 4 Days in Srinagar & Gulmarg",
    city: "srinagar",
    days: 4,
    nights: 3,
    price: 43499,
    theme: "Luxury,Honeymoon",
    summary: `A short trip without compromises: a 5-star lakeside hotel in Srinagar, a day in Gulmarg in a private car and unhurried evenings. Breakfast and dinner, private cab and transfers. ${FROM}`,
    itinerary: [
      "Day 1: Arrive in Srinagar. 5-star lakeside hotel, private shikara at sunset.",
      "Day 2: Gulmarg with the Gondola; lunch in Gulmarg.",
      "Day 3: Mughal gardens, Hazratbal shrine and a walk through the old city's handicraft lanes.",
      "Day 4: Airport drop.",
    ],
  },
];

async function main() {
  const destination = await prisma.destination.findUnique({ where: { slug: "kashmir" }, select: { id: true } });
  if (!destination) throw new Error('Destination "kashmir" not found. Run the location seed first.');
  const cities = await prisma.city.findMany({ where: { destinationId: destination.id }, select: { id: true, slug: true } });
  const cityId = new Map(cities.map((c) => [c.slug, c.id]));

  for (const p of KASHMIR_PACKAGES) {
    const data = {
      title: p.title,
      summary: p.summary,
      itinerary: p.itinerary.join("\n"),
      durationDays: p.days,
      durationNights: p.nights,
      price: p.price,
      theme: p.theme,
      destinationId: destination.id,
      cityId: cityId.get(p.city) ?? null,
      published: true,
    };
    // heroImage only on create, so a photo an admin picked later is kept.
    await prisma.package.upsert({ where: { slug: p.slug }, update: data, create: { ...data, slug: p.slug, heroImage: "" } });
  }
  console.log(`Kashmir packages: ${KASHMIR_PACKAGES.length} upserted.`);
}

if (require.main === module) {
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(() => prisma.$disconnect());
}
