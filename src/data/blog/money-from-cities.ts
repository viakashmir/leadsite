import type { BlogPost, BlogSection } from "./types";
import distances from "@/data/route-distances.json";

// "Trip from {city}" money posts for Shimla, Kasol and Goa: one per
// origin city, each a full plan (how to reach, days needed, itinerary, best
// time for that city's holidays, cost drivers, local tips, FAQs). Road
// distances are OSRM figures from route-distances.json; flight and train
// notes stay general because schedules change. No fares, no em dashes.
// Kashmir is left out on purpose: /tour-packages/from-{city}-to-kashmir
// already carries full per-city copy for 33 cities (content/kashmir-origins),
// and blog posts on the same queries would compete with those pages.

type Origin = {
  slug: string;
  name: string;
  region: string; // "Maharashtra", "Delhi NCR"
  airport: string;
  stations: string;
  zone: "north" | "west" | "south" | "east";
  holidays: string; // when families from here usually travel
  climate: string; // how home weather compares
  food: string; // food note for travellers from here
};

const ORIGINS: Origin[] = [
  { slug: "delhi", name: "Delhi", region: "Delhi NCR", airport: "Delhi (DEL)", stations: "New Delhi, Hazrat Nizamuddin and Anand Vihar", zone: "north", holidays: "school summer holidays in May and June, the Diwali week, and the winter break around Christmas and New Year", climate: "Delhi's summers are very hot and its winters cold and smoggy, so hill trips are popular in both seasons", food: "North Indian food is easy to find almost everywhere you will travel" },
  { slug: "mumbai", name: "Mumbai", region: "Maharashtra", airport: "Mumbai (BOM)", stations: "Mumbai CSMT, Bandra Terminus, Lokmanya Tilak Terminus and Mumbai Central", zone: "west", holidays: "the May school holidays, the Diwali break, and Christmas to New Year", climate: "Mumbai is warm and humid all year, so most travellers underestimate how cold hill evenings get", food: "Gujarati and Maharashtrian vegetarian food is limited in the hills, but North Indian vegetarian meals are easy to find" },
  { slug: "bangalore", name: "Bangalore", region: "Karnataka", airport: "Bengaluru (BLR)", stations: "KSR Bengaluru and Yesvantpur", zone: "south", holidays: "the April and May school holidays, the Dasara break in October, and Christmas", climate: "Bangalore's mild weather is nothing like a Himalayan winter, so pack properly warm layers", food: "South Indian breakfasts are available in bigger towns; rice is served everywhere, but expect North Indian menus" },
  { slug: "chennai", name: "Chennai", region: "Tamil Nadu", airport: "Chennai (MAA)", stations: "Chennai Central and Chennai Egmore", zone: "south", holidays: "the April and May school holidays, the Pongal break in January, and the Diwali and Christmas weeks", climate: "Chennai is hot and humid for most of the year, so the cold in the hills is a real change; carry thermals even in spring", food: "South Indian vegetarian restaurants exist in the bigger towns, and hotels will usually make curd rice or plain rice on request" },
  { slug: "kolkata", name: "Kolkata", region: "West Bengal", airport: "Kolkata (CCU)", stations: "Howrah and Sealdah", zone: "east", holidays: "the Durga Puja holidays in September or October, which are Bengal's biggest travel window, plus May and June and the Christmas week", climate: "Kolkata's humid summers and mild winters make a hill holiday a welcome contrast, especially in October", food: "Fish and rice are easy to find in Goa; in the hills, expect North Indian food, with rice available at most hotels" },
  { slug: "hyderabad", name: "Hyderabad", region: "Telangana", airport: "Hyderabad (HYD)", stations: "Secunderabad, Hyderabad Deccan (Nampally) and Kacheguda", zone: "south", holidays: "the April and May school holidays, the Dasara and Sankranti breaks, and Christmas", climate: "Hyderabad's hot, dry summers make May and June the most popular months for a cool hill trip", food: "Biryani lovers will find good versions in Srinagar and Goa; in smaller hill towns menus are mostly North Indian" },
  { slug: "pune", name: "Pune", region: "Maharashtra", airport: "Pune (PNQ)", stations: "Pune Junction", zone: "west", holidays: "the May school holidays, the Diwali break, and Christmas to New Year", climate: "Pune's pleasant weather is far warmer than a Himalayan winter, so plan layers for the hills", food: "Maharashtrian thalis are rare outside the state, but vegetarian food is easy to find in every destination here" },
  { slug: "ahmedabad", name: "Ahmedabad", region: "Gujarat", airport: "Ahmedabad (AMD)", stations: "Ahmedabad Junction and Sabarmati", zone: "west", holidays: "the long Diwali vacation, which is Gujarat's biggest travel window, plus the May school holidays", climate: "Ahmedabad's hot summers and dry winters make a cool hill trip especially welcome in May and June", food: "Pure vegetarian and Jain meals are available in Srinagar, Shimla and Goa, and many hotels prepare Jain food on request; tell your agent in advance" },
  { slug: "jaipur", name: "Jaipur", region: "Rajasthan", airport: "Jaipur (JAI)", stations: "Jaipur Junction", zone: "north", holidays: "school summer holidays in May and June, the Diwali week, and the winter break", climate: "Jaipur's desert heat in May and June is the main reason families from Rajasthan head to the hills then", food: "Vegetarian food is easy to find, and North Indian dishes are on every menu" },
  { slug: "lucknow", name: "Lucknow", region: "Uttar Pradesh", airport: "Lucknow (LKO)", stations: "Lucknow Charbagh and Lucknow Junction", zone: "north", holidays: "school summer holidays in May and June, the Diwali and Holi weeks, and the winter break", climate: "Lucknow's hot summers and cold, foggy winters make hill trips popular in both seasons, though fog can delay winter trains and flights", food: "North Indian food is easy to find everywhere you will travel" },
  { slug: "chandigarh", name: "Chandigarh", region: "Punjab and Haryana (Tricity)", airport: "Chandigarh (IXC)", stations: "Chandigarh and Kalka", zone: "north", holidays: "school summer holidays in May and June, long weekends, and the winter break", climate: "Chandigarh sits at the foot of the hills, so short weekend escapes are easy all year", food: "Punjabi and North Indian food is available everywhere you will go" },
  { slug: "kochi", name: "Kochi", region: "Kerala", airport: "Kochi (COK)", stations: "Ernakulam Junction and Ernakulam Town", zone: "south", holidays: "the April and May school holidays, the Onam break in August or September, and Christmas", climate: "Kerala's tropical weather is very different from the Himalayan cold; carry real winter wear", food: "Kerala meals are rare outside the state, but rice and fish are easy to find in Goa, and rice is served in hill hotels on request" },
];

type Dest = {
  key: "shimla" | "kasol" | "goa";
  name: string;
  destination: string;
  city: string;
  distKey?: string; // route-distances.json target
  hub: string;
  skip?: string[];
  nights: string;
  intro: (o: Origin, how: string) => string;
  reach: (o: Origin, km?: number, hours?: number) => BlogSection;
  plan: (o: Origin) => BlogSection;
  bestTime: (o: Origin) => BlogSection;
  cost: (o: Origin) => BlogSection;
  tips: (o: Origin) => BlogSection;
  stay: BlogSection;
  beyond: BlogSection;
  faqs: (o: Origin, km?: number, hours?: number) => { q: string; a: string }[];
};

const near = (km?: number) => km !== undefined && km <= 700;
const kmText = (km?: number, h?: number) => (km ? `about ${km.toLocaleString("en-IN")} km by road (roughly ${Math.round(h ?? 0)} hours of driving)` : "");

const DESTS: Dest[] = [
  // ------------------------------------------------------------ SHIMLA
  {
    key: "shimla",
    name: "Shimla",
    destination: "himachal",
    city: "shimla",
    distKey: "shimla",
    hub: "Chandigarh (IXC)",
    nights: "3 to 4 nights",
    intro: (o, how) =>
      `A Shimla trip from ${o.name} needs 4 to 6 days: ${how}, then the Ridge and Mall Road, Kufri and Mashobra, and a day at Chail. Many travellers from ${o.region} add Manali for a 7-day Himachal holiday. Below: how to reach Shimla from ${o.name}, the days you need, an itinerary, the best time to go and what decides the cost.`,
    reach: (o, km, h) => ({
      h: `How to reach Shimla from ${o.name}`,
      p: [
        km ? `Shimla is ${kmText(km, h)} from ${o.name}.` : "",
        near(km)
          ? `By road: driving or taking an overnight Volvo bus is the most practical option from ${o.name}; HRTC and private Volvo buses run to Shimla from Delhi and Chandigarh.`
          : `By air: fly from ${o.airport} to Chandigarh (IXC), about 115 km and 3 to 4 hours by road from Shimla. Shimla's own Jubbarhatti airport has very limited flights, so Chandigarh or Delhi is the usual gateway from ${o.name}.`,
        `By train: trains from ${o.stations} reach Kalka or Chandigarh${o.slug === "kolkata" ? " (the Howrah to Kalka Mail runs directly)" : o.slug === "delhi" ? " (the Kalka Shatabdi is the fastest)" : ", directly on some routes or via Delhi"}. From Kalka, the UNESCO-listed toy train climbs to Shimla in about 5 to 6 hours, or a taxi takes about 3 hours.`,
      ].filter(Boolean),
    }),
    plan: (o) => ({
      h: `A 5-day Shimla itinerary from ${o.name}`,
      days: [
        near(DIST(o.slug, "shimla")) ? `Start early from ${o.name} and drive or ride to Shimla; evening walk on the Mall Road.` : `Fly from ${o.name} to Chandigarh and drive to Shimla (3 to 4 hours); evening walk on the Mall Road.`,
        "The Ridge, Christ Church, Lakkar Bazaar and Jakhu Temple by ropeway.",
        "Kufri (about 16 km) for the Mahasu peak viewpoint, or snow play in winter, and Mashobra's orchards.",
        "Day trip to Chail for the palace and its cricket ground, or Narkanda for Hatu Peak.",
        near(DIST(o.slug, "shimla")) ? `Return to ${o.name}.` : `Drive to Chandigarh and fly back to ${o.name}.`,
      ],
      p: [`With two more days, continue from Shimla to Manali (about 250 km, 8 to 10 hours) and fly home from Chandigarh or Kullu-Bhuntar.`],
    }),
    bestTime: (o) => ({
      h: `Best time to visit Shimla from ${o.name}`,
      p: [
        `Families from ${o.region} usually travel during ${o.holidays}. In Shimla, March to June is pleasant and busy, July to September brings monsoon rain and landslide risk, October and November are clear and quiet, and December to February is cold, with snow on some days in Shimla and more in Kufri and Narkanda.`,
        `${o.climate}. Weekdays are far less crowded than weekends, when traffic from Delhi and Chandigarh fills the town.`,
      ],
    }),
    cost: (o) => ({
      h: `What decides the cost of a Shimla trip from ${o.name}`,
      list: [
        near(DIST(o.slug, "shimla")) ? "Your own car, a hired cab or a Volvo bus for the journey" : `Flights from ${o.airport} to Chandigarh or Delhi, and the taxi up to Shimla`,
        "Hotel location: near the Mall Road costs more but saves daily taxi rides",
        "Peak weekends and holiday weeks, when rates rise",
        "Local sightseeing cab for Kufri, Chail and Narkanda",
        "Adding Manali, which adds a long drive and two or three nights",
      ],
    }),
    tips: (o) => ({
      h: `Tips for travellers from ${o.name}`,
      list: [
        `${o.food}.`,
        "Private vehicles are restricted on the Mall Road and Ridge; use the public lift from the cart road.",
        "Watch your glasses and bags around Jakhu Temple, where monkeys are bold.",
        o.zone === "south" || o.zone === "east" ? "Carry winter wear from November to March; Shimla can drop below freezing at night." : "Pack a jacket for evenings even in summer.",
      ],
    }),
    stay: {
      h: "Where to stay in Shimla",
      p: [
        "Stay near the Mall Road for walkable evenings, the Ridge and Lakkar Bazaar; hotels here sit on steep slopes, so ask about road access and porters. For quiet and views, Mashobra, Kufri and Naldehra are 15 to 25 km out and suit families who want space and parking.",
        "With older parents, choose a hotel close to the public lift or with direct road access, since the lanes between the cart road and the Mall are steep.",
        "In winter, confirm that rooms have heaters and hot water through the night.",
      ],
    },
    beyond: {
      h: "Beyond Shimla town",
      p: [
        "Narkanda, about 65 km beyond Shimla, has Hatu Peak's viewpoint and skiing slopes in winter. Chail's palace and deodar forest make a quiet day trip. With more time, the Kinnaur valley's Sangla and Chitkul are reached through Narkanda and Rampur, and Manali is a full day's drive away for a classic Himachal circuit.",
        "The Kalka to Shimla toy train is worth riding one way for its tunnels and bridges, even if you return by road.",
      ],
    },
    faqs: (o, km) => [
      { q: `How far is Shimla from ${o.name}?`, a: km ? `About ${km.toLocaleString("en-IN")} km by road.${near(km) ? "" : " Most travellers fly to Chandigarh and drive the last 115 km."}` : "Check the route options above." },
      { q: `How many days do I need for Shimla from ${o.name}?`, a: near(km) ? "Three to four days, including travel." : "Five days including flights, or seven with Manali." },
      { q: "Which is the nearest airport to Shimla?", a: "Shimla's Jubbarhatti airport has limited flights; Chandigarh (IXC), about 115 km away, is the main gateway." },
      { q: `When does it snow in Shimla?`, a: "Usually between late December and February, though not every week. Kufri and Narkanda get more snow than Shimla town." },
    ],
  },

  // ------------------------------------------------------------ KASOL
  {
    key: "kasol",
    name: "Kasol",
    destination: "himachal",
    city: "kasol",
    distKey: "kasol",
    hub: "Bhuntar (KUU) or Chandigarh (IXC)",
    nights: "3 to 4 nights",
    intro: (o, how) =>
      `A Kasol trip from ${o.name} takes 5 to 6 days: ${how}, then the Parvati valley's riverside cafes, the Manikaran Sahib gurudwara, the village of Tosh and the Kheerganga trek. This guide explains how to get to Kasol from ${o.name}, how many days to plan, a day-by-day itinerary, the best season for travellers from ${o.region}, and what decides the cost.`,
    reach: (o, km, h) => ({
      h: `How to reach Kasol from ${o.name}`,
      p: [
        km ? `Kasol is ${kmText(km, h)} from ${o.name}, in the Parvati valley about 30 km beyond Bhuntar.` : "",
        o.slug === "delhi" || o.slug === "chandigarh"
          ? `By bus: overnight HRTC and private Volvo buses run from ${o.name} to Bhuntar and Kasol, the most popular way to get there. A self-drive or taxi via Mandi and Aut is the other option.`
          : `By air: fly from ${o.airport} to Delhi or Chandigarh, then take an overnight Volvo bus or a taxi to Kasol. Kullu-Bhuntar airport (KUU), about 30 km from Kasol, has a few flights from Delhi and Chandigarh that are weather dependent.`,
        `By train: there is no broad-gauge railway near Kasol. From ${o.name}, take a train to Chandigarh or Kalka (or Delhi) and continue by bus or taxi.`,
      ].filter(Boolean),
    }),
    plan: (o) => ({
      h: `A 5-day Kasol itinerary from ${o.name}`,
      days: [
        o.slug === "delhi" || o.slug === "chandigarh" ? `Take the overnight Volvo from ${o.name}.` : `Fly from ${o.name} to Delhi or Chandigarh and board the overnight Volvo to Kasol.`,
        "Arrive in Kasol, check in by the Parvati river, and walk to Chalal village across the bridge.",
        "Manikaran Sahib (about 4 km): the gurudwara, hot springs and langar; continue to Barshaini and walk up to Tosh.",
        "Kheerganga trek: about 10 to 12 km each way from Barshaini via Nakthan, with hot springs at the top; stay overnight at the camps or return the same day if fit.",
        o.slug === "delhi" || o.slug === "chandigarh" ? `Return by overnight bus to ${o.name}.` : `Overnight bus back to Delhi or Chandigarh, then fly home to ${o.name}.`,
      ],
      p: ["With a day more, add Malana's viewpoint walk or a night in Tosh, or continue to Manali, about 80 km away."],
    }),
    bestTime: (o) => ({
      h: `Best time to visit Kasol from ${o.name}`,
      p: [
        `Travellers from ${o.region} usually plan around ${o.holidays}. In Kasol, March to June is the main season, with warm days and cool nights; the monsoon (July to September) brings heavy rain and road blocks; October and November are clear and great for treks; and winter is cold with snow at Tosh and higher villages.`,
        `${o.climate}. The Kheerganga trek is best from May to June and September to November.`,
      ],
    }),
    cost: (o) => ({
      h: `What decides the cost of a Kasol trip from ${o.name}`,
      list: [
        o.slug === "delhi" || o.slug === "chandigarh" ? "Volvo bus versus a private cab for the journey" : `Flights from ${o.airport} to Delhi or Chandigarh, plus the Volvo or taxi to Kasol`,
        "Riverside cottages and boutique stays versus hostels and campsites",
        "A local guide and camping at Kheerganga",
        "Weekend and long-weekend demand, when buses and stays fill up",
        "Adding Manali or Tirthan valley to the trip",
      ],
    }),
    tips: (o) => ({
      h: `Tips for travellers from ${o.name}`,
      list: [
        `${o.food}. Kasol's cafes also serve Israeli and continental food.`,
        "Mobile networks are patchy beyond Kasol; carry some cash, as ATMs are few.",
        "Respect village rules in Malana and Tosh: some areas ask visitors not to touch walls or temples.",
        "Wear proper trekking shoes for Kheerganga and start early.",
      ],
    }),
    stay: {
      h: "Where to stay in the Parvati valley",
      p: [
        "Kasol itself has riverside cottages, guesthouses and hostels within walking distance of the cafes. Chalal, a short walk across the bridge, is quieter and greener. Manikaran, 4 km on, is convenient for the gurudwara and hot springs and suits families. Tosh and the Kheerganga campsites are basic but memorable for a night.",
        "In peak weekends, book ahead: rooms by the river fill first, and the last buses from Bhuntar can be crowded.",
      ],
    },
    beyond: {
      h: "Beyond Kasol",
      p: [
        "Tirthan and Jibhi valleys, about 3 hours away via Aut, are quieter places for a few more days of forest walks and river stays. Manali is about 80 km north for snow points and Solang, and the Kullu valley's apple orchards line the road between them.",
        "Malana's old village has its own customs and governance; visit with a guide, follow local rules, and do not touch walls, people or temples without permission.",
      ],
    },
    faqs: (o, km) => [
      { q: `How far is Kasol from ${o.name}?`, a: km ? `About ${km.toLocaleString("en-IN")} km by road.` : "See the route options above." },
      { q: `What is the best way to reach Kasol from ${o.name}?`, a: o.slug === "delhi" || o.slug === "chandigarh" ? "The overnight Volvo bus to Bhuntar or Kasol." : "Fly to Delhi or Chandigarh, then take the overnight Volvo bus or a taxi." },
      { q: "Is Kasol safe for families?", a: "Yes, with sensible planning. Families usually stay in cottages near Kasol or Manikaran and skip the late-night cafe scene." },
      { q: "How difficult is the Kheerganga trek?", a: "It is a moderate trek of about 10 to 12 km each way from Barshaini. Fit beginners manage it in 4 to 6 hours uphill." },
    ],
  },

  // ------------------------------------------------------------ GOA
  {
    key: "goa",
    name: "Goa",
    destination: "goa",
    city: "north-goa",
    distKey: "north-goa",
    hub: "Mopa (GOX) or Dabolim (GOI)",
    nights: "3 to 5 nights",
    intro: (o, how) =>
      `A Goa trip from ${o.name} works well in 4 to 6 days: ${how}, then North Goa's beaches and forts, Old Goa's churches and a slower day or two in South Goa. Here is how to reach Goa from ${o.name}, how many days to plan, a day-by-day itinerary, when to go around ${o.region}'s holidays, and what decides the cost.`,
    reach: (o, km, h) => ({
      h: `How to reach Goa from ${o.name}`,
      p: [
        km ? `North Goa is ${kmText(km, h)} from ${o.name}.` : "",
        `By air: Goa has two airports, Mopa (GOX) in the north and Dabolim (GOI) in the south. Flights from ${o.airport} reach one or both, nonstop on most routes from major cities. Pick the airport closer to your hotel.`,
        `By train: Goa is on the Konkan Railway. Trains from ${o.stations} reach Madgaon (South Goa) or Thivim and Karmali (North Goa), directly on some routes or with a change.`,
        near(km)
          ? `By road: the drive from ${o.name} is practical for a long weekend, and overnight sleeper buses run to Panaji, Mapusa and Margao.`
          : `By road: driving from ${o.name} takes more than a day, so most travellers fly or take the train.`,
      ].filter(Boolean),
    }),
    plan: (o) => ({
      h: `A 5-day Goa itinerary from ${o.name}`,
      days: [
        near(DIST(o.slug, "north-goa")) ? `Drive or take the overnight bus or train from ${o.name}; check in near Candolim or Calangute.` : `Fly from ${o.name} to Mopa or Dabolim; check in near Candolim or Calangute.`,
        "North Goa: Fort Aguada, Baga and Calangute, and an evening at Anjuna or Vagator.",
        "Old Goa's Basilica of Bom Jesus and Se Cathedral, Panaji's Fontainhas quarter and a Mandovi river cruise at sunset.",
        "Move to South Goa via the Ponda spice farms; a beach afternoon at Colva or Benaulim.",
        near(DIST(o.slug, "north-goa")) ? `Head back to ${o.name}.` : `Fly back to ${o.name} from the nearer airport.`,
      ],
      p: ["With two more days, add Palolem and Cabo de Rama in the far south, or Dudhsagar Falls after the monsoon."],
    }),
    bestTime: (o) => ({
      h: `Best time to visit Goa from ${o.name}`,
      p: [
        `Travellers from ${o.region} usually plan around ${o.holidays}. In Goa, November to February is the dry, pleasant peak, with Christmas and New Year the busiest; March to May is hot and humid; and June to September is the monsoon, with rough seas and closed shacks but green countryside and low hotel rates.`,
        `${o.climate}. For beach weather and fewer crowds, aim for November, late January or February.`,
      ],
    }),
    cost: (o) => ({
      h: `What decides the cost of a Goa trip from ${o.name}`,
      list: [
        near(DIST(o.slug, "north-goa")) ? "Driving, bus or train versus flying" : `Flights from ${o.airport}, which spike around Christmas and New Year`,
        "North Goa guesthouses versus South Goa beach resorts",
        "Scooter or self-drive car versus taxis",
        "Peak weeks: Christmas to New Year and long weekends",
        "Water sports, cruises and dinners, usually paid locally",
      ],
    }),
    tips: (o) => ({
      h: `Tips for travellers from ${o.name}`,
      list: [
        `${o.food}.`,
        "Swim only in the lifeguard-marked zones; currents can be strong.",
        "Carry your driving licence and wear a helmet if you rent a scooter.",
        "Book stays early for the Christmas to New Year week.",
      ],
    }),
    stay: {
      h: "Where to stay in Goa",
      p: [
        "For a first trip, Candolim, Calangute and Baga in North Goa keep you close to the beaches, nightlife and forts. Ashwem, Mandrem and Morjim further north are quieter. Panaji suits travellers who want heritage, restaurants and easy taxis.",
        "In South Goa, Colva and Benaulim have long beaches, while Varca, Cavelossim and Mobor have the big resorts. Palolem and Agonda in the far south are crescent bays with beach huts and calm water in season.",
      ],
    },
    beyond: {
      h: "Beyond the beaches",
      p: [
        "Old Goa's churches, including the Basilica of Bom Jesus, are a UNESCO World Heritage site. The spice farms around Ponda serve traditional lunches, the Portuguese-era houses of Chandor and Loutolim show Goa's colonial past, and Dudhsagar Falls on the Karnataka border is at its best after the monsoon. Evening river cruises on the Mandovi from Panaji are an easy family outing.",
        "For wildlife and nature, the Bhagwan Mahavir sanctuary near Mollem and the Cotigao sanctuary near Palolem have forest trails and birdlife, and dolphin-spotting boat trips leave from Sinquerim, Coco Beach and Palolem in the dry season.",
      ],
    },
    faqs: (o, km) => [
      { q: `How far is Goa from ${o.name}?`, a: km ? `About ${km.toLocaleString("en-IN")} km by road to North Goa.` : "See the route options above." },
      { q: `Which Goa airport should I fly into from ${o.name}?`, a: "Mopa (GOX) for North Goa and Dabolim (GOI) for South and central Goa." },
      { q: `How many days are enough for Goa from ${o.name}?`, a: near(km) ? "Three to four days, or a long weekend." : "Four to six days including flights." },
      { q: "Is Goa good in the monsoon?", a: "For green landscapes and low prices, yes; for beaches and water sports, wait until November." },
    ],
  },
];

const DIST = (origin: string, target: string) => (distances as Record<string, { km: number; hours: number }>)[`${origin}-to-${target}`]?.km;

function howPhrase(d: Dest, o: Origin, km?: number): string {
  if (d.key === "kasol") return o.slug === "delhi" || o.slug === "chandigarh" ? "an overnight Volvo bus" : "a flight to Delhi or Chandigarh and an overnight bus";
  if (d.key === "shimla") return near(km) ? "a drive or overnight bus" : "a flight to Chandigarh and a 3 to 4 hour drive";
  return near(km) ? "a drive, bus or overnight train" : `a flight from ${o.airport}`;
}

function family(d: Dest, o: Origin): BlogSection {
  const high = d.key !== "goa";
  const zoneNote: Record<Origin["zone"], string> = {
    north: high
      ? `From ${o.name}, many families travel by road. Start early, break long drives with a night halt, and avoid driving hill roads after dark.`
      : `From ${o.name}, flying is quicker than the train for a short holiday; book early around the winter break, when North Indian families head to Goa in large numbers.`,
    west: high
      ? `Travellers from ${o.name} are used to warm weather, so the first evening in the mountains can feel very cold. Pack layers in your hand luggage and keep the first day light.`
      : `From ${o.name}, Goa is close enough for a long weekend; avoid the Friday evening rush on the highway and the last-minute fares on holiday weekends.`,
    south: high
      ? `Coming from ${o.name}, give children and older parents an easy first day after the long journey, keep warm clothes handy, and drink plenty of water at altitude.`
      : `From ${o.name}, Goa is a short flight or an overnight train, so it suits a long weekend with children as well as a longer beach holiday.`,
    east: high
      ? `From ${o.name}, the journey is long, so plan at least a week. During the Durga Puja holidays the hills are busy with travellers from Bengal; book early.`
      : `From ${o.name}, fly rather than take the train for a short holiday, and book early for the Durga Puja and Christmas weeks.`,
  };
  return {
    h: `Travelling with family or a group from ${o.name}`,
    p: [
      zoneNote[o.zone],
      `For groups of six or more, a tempo traveller is usually more comfortable and better value than two cars. Ask your agent for rooms close together, and for vegetarian or Jain meals in advance if anyone needs them.`,
    ],
  };
}

function post(d: Dest, o: Origin): BlogPost {
  const km = d.distKey ? DIST(o.slug, d.distKey) : undefined;
  const r = d.distKey ? (distances as Record<string, { km: number; hours: number }>)[`${o.slug}-to-${d.distKey}`] : undefined;
  const title = `${d.name} Trip from ${o.name}: How to Reach, Itinerary, Best Time and Cost Tips`;
  const description = `Planning a ${d.name} trip from ${o.name}? How to reach by flight, train or road, days needed, a day-wise plan, best time and cost tips.`;
  return {
    slug: `${d.key}-trip-from-${o.slug}`,
    title,
    description,
    category: "Itineraries",
    destination: d.destination,
    city: d.city,
    date: "2026-11-02",
    intro: d.intro(o, howPhrase(d, o, km)),
    sections: [
      d.reach(o, r?.km, r?.hours),
      {
        h: `How many days you need from ${o.name}`,
        p: [
          `Plan ${d.nights} in ${d.name} itself, plus travel time from ${o.name}. ${
            km && !near(km)
              ? `At ${km.toLocaleString("en-IN")} km, driving is not practical for a short holiday, so a flight or train keeps travel to the first and last day.`
              : km
                ? `At ${km.toLocaleString("en-IN")} km, you can reach ${d.name} in a day by road or overnight, which makes a long weekend possible.`
                : "Flying in keeps travel to the first and last day."
          }`,
          `If you have fewer days, cut the side trips rather than the core stops; if you have more, slow the pace rather than adding long drives.`,
        ],
      },
      d.plan(o),
      d.bestTime(o),
      d.cost(o),
      d.stay,
      d.beyond,
      d.tips(o),
      family(d, o),
      {
        h: `Getting a ${d.name} package from ${o.name}`,
        p: [
          `Tell us your dates, the number of travellers and whether you want flights included from ${o.name}. Up to three verified local agents send customised quotes, so you can compare hotels, cab, meal plan and inclusions side by side and book with the one you like. There is no booking fee.`,
        ],
      },
    ],
    faqs: d.faqs(o, r?.km, r?.hours),
  };
}

export const MONEY_FROM_CITIES: BlogPost[] = DESTS.flatMap((d) =>
  ORIGINS.filter((o) => !d.skip?.includes(o.slug) && !(d.key === "goa" && o.slug === "goa")).map((o) => post(d, o)),
);
