import type { BlogPost } from "./types";

// Full Andaman guides: rewrites of thin posts keyed by slug (same URL and
// title) plus new guides. Factual, no em dashes, no invented prices.

const QUOTE =
  "Share your dates, group size and preferred hotels on Tavel Package. Up to 3 verified Andaman agents send itemised quotes with ferries, transfers, stays and activities, so you can compare them side by side before you book.";
const p = (h: string, ...text: string[]) => ({ h, p: text });

const NAMES = p(
  "New island names",
  "Several places in the Andaman Islands have been renamed. Havelock Island is officially Swaraj Dweep, Neil Island is Shaheed Dweep, and Ross Island is Netaji Subhas Chandra Bose Dweep, renamed in 2018. Port Blair, the capital, was renamed Sri Vijaya Puram in 2024. The old names are still widely used by travellers, ferries and hotels.",
);
const FERRIES = p(
  "Ferries between the islands",
  "Inter-island travel is by government ferries and private catamarans. Port Blair to Havelock takes about 1.5 to 2.5 hours, Havelock to Neil about 1 hour, and Neil to Port Blair about 1 to 1.5 hours. Private catamarans are faster and more comfortable; government ferries are cheaper but sell out quickly. Book ahead in peak season, carry ID, and keep a buffer, as sailings can be cancelled in rough weather.",
);
const SEASON = p(
  "Best time to visit Andaman",
  "October to May is the main season, with calm seas and clear water; December to March is the busiest period. The southwest monsoon, from about mid-May to September, brings heavy rain, rough seas, ferry cancellations and limits on water sports, although the islands are green and quiet. For diving and snorkelling, November to April usually offers the best visibility.",
);
const SAFETY = p(
  "Beach and sea safety",
  "Swim only at beaches with lifeguards and in flagged areas, and follow instructions from the coast guard and local staff. Saltwater crocodiles live in some creeks and mangroves, and warning signs are posted at a few beaches; never swim where swimming is prohibited. Do not touch or stand on coral, and wear reef-safe sunscreen.",
);
const RESPONSIBLE = p(
  "Responsible travel",
  "The Andaman Islands have fragile coral reefs, mangroves and protected tribal reserves. Do not collect shells or coral, avoid plastic in marine parks, and never try to see or photograph protected tribes such as the Jarawa, which is illegal. Use registered operators for water sports, and keep beaches clean.",
);
const FOOD = p(
  "Food to try",
  "Andaman food leans on fresh seafood: grilled fish, crab and prawn curries, lobster, and fish cooked in coconut. Bengali and South Indian dishes are common, reflecting the islands' settlers, and vegetarian thalis are easy to find. Port Blair's Aberdeen Bazaar and beach shacks on Havelock are good places to eat.",
);

const HISTORY = p(
  "A short history of the Andamans",
  "The Andaman and Nicobar Islands have been home to indigenous peoples such as the Great Andamanese, Onge, Jarawa and Sentinelese for thousands of years. The British set up a penal settlement at Port Blair after 1857, later building the Cellular Jail to hold freedom fighters. Japan occupied the islands during World War II, and Netaji Subhas Chandra Bose raised the Indian flag at Port Blair in 1943. Today the islands are a Union Territory of India with a mix of settler communities from Bengal, Tamil Nadu, Kerala and elsewhere.",
);
const GETTING_THERE = p(
  "Getting to the Andamans",
  "Most visitors fly to Port Blair's Veer Savarkar International Airport from Chennai, Kolkata, Delhi, Bengaluru, Hyderabad and other cities; the flight from Chennai or Kolkata takes about two hours. Passenger ships also sail from Chennai, Kolkata and Visakhapatnam, taking about three days, and suit travellers with time. From Port Blair, ferries connect to Havelock and Neil.",
);
const PERMITS = p(
  "Permits and entry rules",
  "Indian travellers do not need a permit to visit Port Blair, Havelock, Neil and most tourist islands, though entry fees and permits apply to marine national parks such as Jolly Buoy and to some protected areas. Rules for foreign nationals were relaxed in 2018 for most islands, but some areas remain restricted; check current requirements before travelling. Tribal reserves are strictly off limits.",
);
const PLAN = p(
  "Planning your Andaman trip",
  "Most Andaman trips last 5 to 7 days, starting and ending in Port Blair, with two or three nights on Havelock and one or two on Neil. Book flights, ferries and resorts early for December to March, keep a buffer day before your flight home in case a ferry is cancelled, and carry cash, as card acceptance and ATMs are limited on smaller islands.",
);

export const ANDAMAN_UPGRADES: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = {
  "andaman-6-day-itinerary": {
    intro:
      "A 6-day Andaman itinerary covers Port Blair's history, two nights on Havelock (Swaraj Dweep) for Radhanagar and Elephant beaches, one night on Neil (Shaheed Dweep), and a return to Port Blair with an optional Ross Island and North Bay day. Fly into Port Blair, travel between October and May for calm seas, and book inter-island ferries in advance, especially from December to March.",
    sections: [
      { h: "6-day Andaman itinerary", days: [
        "Arrive in Port Blair. Corbyn's Cove beach, then the Cellular Jail and its evening light and sound show.",
        "Ferry to Havelock; afternoon at Radhanagar Beach for sunset.",
        "Elephant Beach for snorkelling or a sea walk, or a scuba dive; evening at Kalapathar Beach.",
        "Ferry to Neil; Laxmanpur Beach and the natural rock bridge, sunset at Laxmanpur.",
        "Sunrise at Sitapur Beach, Bharatpur Beach, then ferry to Port Blair.",
        "Ross Island and North Bay by boat, or Chidiya Tapu, then depart.",
      ] },
      p("Port Blair", "Port Blair is the capital and entry point, with the Cellular Jail national memorial, where freedom fighters were imprisoned during British rule, Ross Island's colonial ruins, North Bay's coral and Corbyn's Cove beach. Spend at least a day here at the start or end of the trip."),
      p("Havelock Island", "Havelock, officially Swaraj Dweep, is the most popular island, with Radhanagar Beach, often ranked among Asia's best beaches, Elephant Beach for snorkelling and sea walks, and Kalapathar Beach. It is the main base for scuba diving, with dive centres for beginners and certified divers."),
      p("Neil Island", "Neil, officially Shaheed Dweep, is smaller and quieter, with Laxmanpur Beach for sunsets and a natural rock bridge, Sitapur Beach for sunrises, and Bharatpur Beach for swimming and glass-bottom boats. It is easy to explore by bicycle or auto-rickshaw."),
      p("Ross Island and North Bay", "Ross Island, officially Netaji Subhas Chandra Bose Dweep, was the British administrative headquarters, and its ruined church, bakery and officers' quarters are now overgrown, with deer and peacocks roaming. North Bay, nearby, offers coral viewing by glass-bottom boat, snorkelling and sea walks. Both are visited by boat from Port Blair."),
      NAMES,
      FERRIES,
      SEASON,
      p("Where to stay", "Port Blair has hotels near Aberdeen Bazaar and Corbyn's Cove. Havelock has beach resorts and cottages, from simple to luxury, near Radhanagar and Govind Nagar. Neil has smaller resorts and guest houses. Book early for December to March."),
      FOOD,
      HISTORY,
      GETTING_THERE,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "Is 6 days enough for Andaman?", a: "Yes, for Port Blair, Havelock and Neil at a comfortable pace." },
      { q: "What is the new name of Havelock Island?", a: "Swaraj Dweep; Neil Island is Shaheed Dweep." },
      { q: "How do I travel between the Andaman islands?", a: "By government ferry or private catamaran, booked in advance." },
      { q: "When is the best time to visit Andaman?", a: "October to May, with December to March the busiest." },
      { q: "Is Radhanagar Beach worth visiting?", a: "Yes, it is often ranked among Asia's best beaches." },
      { q: "What is Port Blair's new name?", a: "Sri Vijaya Puram, since 2024." },
    ],
  },

  "andaman-honeymoon": {
    intro:
      "Andaman is one of India's favourite honeymoon destinations, with white-sand beaches, turquoise water, coral reefs and quiet island resorts. A 6 to 7 day honeymoon usually spends three nights on Havelock (Swaraj Dweep), one or two on Neil (Shaheed Dweep) and a night in Port Blair. October to May is the best season, with calm seas for snorkelling and diving.",
    sections: [
      { h: "7-day Andaman honeymoon itinerary", days: [
        "Arrive in Port Blair; Cellular Jail light and sound show.",
        "Ferry to Havelock; sunset at Radhanagar Beach.",
        "Elephant Beach snorkelling or a couple's try dive.",
        "A slow day at your resort, a spa session, and a candle-lit beach dinner.",
        "Ferry to Neil; sunset at Laxmanpur Beach.",
        "Sunrise at Sitapur, cycling around Neil, then ferry to Port Blair.",
        "Depart from Port Blair.",
      ] },
      p("Romantic experiences", "Watch the sunset at Radhanagar Beach, try scuba diving or snorkelling together over coral, kayak through mangroves, take a night kayak to see bioluminescent plankton in season, enjoy a candle-lit dinner on the beach, and cycle around Neil Island's quiet lanes."),
      p("Where couples stay", "Havelock has the widest choice of honeymoon resorts, from beachfront cottages to luxury villas near Radhanagar and Vijaynagar. Neil has smaller, quieter resorts. Ask for sea-view rooms and honeymoon extras such as decoration, a cake or a private dinner."),
      p("Diving for couples", "Couples who cannot swim can try a supervised introductory dive at Havelock or Neil. Certified divers can explore sites such as the Wall, Nemo Reef and Dixon's Pinnacle. Choose registered dive centres with certified instructors."),
      NAMES,
      FERRIES,
      SEASON,
      SAFETY,
      FOOD,
      GETTING_THERE,
      PLAN,
      PERMITS,
      RESPONSIBLE,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "Is Andaman good for a honeymoon?", a: "Yes, for beaches, coral reefs, diving and quiet island resorts." },
      { q: "How many days are ideal for an Andaman honeymoon?", a: "Six to seven days." },
      { q: "Which island is best for a honeymoon?", a: "Havelock (Swaraj Dweep) for resorts and beaches; Neil for quiet." },
      { q: "Can non-swimmers try scuba diving in Andaman?", a: "Yes, with a supervised introductory dive." },
      { q: "When is the best time for an Andaman honeymoon?", a: "October to May." },
      { q: "What is bioluminescence kayaking?", a: "A night kayak trip to see glowing plankton in the water, offered in season on Havelock." },
    ],
  },
};

export const ANDAMAN_DEEP: BlogPost[] = [
  {
    slug: "port-blair-travel-guide",
    title: "Port Blair Travel Guide: Cellular Jail, Ross Island, North Bay and Beaches",
    description: "Port Blair (Sri Vijaya Puram) guide: the Cellular Jail and light and sound show, Ross Island, North Bay, Corbyn's Cove, Chidiya Tapu, Jolly Buoy and museums.",
    category: "Itineraries",
    destination: "andaman",
    city: "port-blair",
    date: "2026-11-02",
    intro:
      "Port Blair, renamed Sri Vijaya Puram in 2024, is the capital of the Andaman and Nicobar Islands and the gateway for every visitor. It is worth at least a day for the Cellular Jail, where freedom fighters were imprisoned, the colonial ruins of Ross Island, coral at North Bay, the beaches of Corbyn's Cove and Chidiya Tapu, and day trips to Jolly Buoy in the marine national park. It is also the base for Baratang.",
    sections: [
      { h: "2-day Port Blair plan", days: [
        "Cellular Jail in the morning, Samudrika naval museum and the Anthropological Museum, Corbyn's Cove in the afternoon, and the evening light and sound show at the jail.",
        "Ross Island and North Bay by boat, then Chidiya Tapu for sunset.",
      ] },
      p("Cellular Jail", "The Cellular Jail, built between 1896 and 1906, held political prisoners from India's freedom struggle in solitary cells arranged along wings radiating from a central tower. It is now a national memorial with a museum and galleries. The evening light and sound show tells its story. It is usually closed on certain days, so check timings."),
      p("Ross Island", "Ross Island, officially Netaji Subhas Chandra Bose Dweep, was the British headquarters until an earthquake in 1941 and the Japanese occupation in World War II. Its ruined church, bakery, officers' quarters and cemetery are overgrown with roots, and deer and peacocks roam freely. Boats run from Port Blair's Rajiv Gandhi Water Sports Complex."),
      p("North Bay", "North Bay, across the harbour, is known for coral reefs close to the shore. Visitors view coral from glass-bottom boats or semi-submarines, snorkel, or try a sea walk. Its lighthouse appears on an old Indian banknote."),
      p("Beaches near Port Blair", "Corbyn's Cove is the city's main beach, with palm trees and water sports. Chidiya Tapu, about 25 km south, is known for birdwatching and sunsets, with the Munda Pahar beach and a short trek. Wandoor beach is the starting point for Jolly Buoy."),
      p("Jolly Buoy and Red Skin islands", "Jolly Buoy and Red Skin islands, in the Mahatma Gandhi Marine National Park near Wandoor, are known for clear water and coral, seen by glass-bottom boat and snorkelling. Permits are required, plastic is banned, and the islands open alternately depending on the season. They usually close during the monsoon."),
      p("Museums", "The Samudrika naval museum covers marine life and the islands' geography, and the Anthropological Museum explains the islands' indigenous communities. Both give useful background before exploring further."),
      NAMES,
      SEASON,
      p("Getting there", "Veer Savarkar International Airport at Port Blair has flights from Chennai, Kolkata, Delhi, Bengaluru and other cities. Passenger ships run from Chennai, Kolkata and Visakhapatnam, taking about three days. Within Port Blair, taxis and auto-rickshaws are available."),
      p("Where to stay", "Port Blair has hotels near Aberdeen Bazaar, the main market area, and quieter hotels near Corbyn's Cove. Most travellers spend one night at the start and one at the end of their trip."),
      FOOD,
      HISTORY,
      PERMITS,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "What is Port Blair's new name?", a: "Sri Vijaya Puram, renamed in 2024." },
      { q: "When was the Cellular Jail built?", a: "Between 1896 and 1906." },
      { q: "How do I reach Ross Island?", a: "By boat from the Rajiv Gandhi Water Sports Complex in Port Blair." },
      { q: "Do I need a permit for Jolly Buoy?", a: "Yes, as it lies in a marine national park." },
      { q: "How many days are needed in Port Blair?", a: "One to two days." },
      { q: "How do I reach Port Blair?", a: "By flight from major Indian cities, or by ship from Chennai, Kolkata or Visakhapatnam." },
    ],
  },

  {
    slug: "havelock-island-swaraj-dweep-guide",
    title: "Havelock Island (Swaraj Dweep) Guide: Radhanagar, Elephant Beach, Diving",
    description: "Havelock Island guide: Radhanagar Beach, Elephant Beach, Kalapathar, scuba diving, mangrove and night kayaking, stays, ferries and the best time to visit.",
    category: "Itineraries",
    destination: "andaman",
    city: "havelock-island",
    date: "2026-11-02",
    intro:
      "Havelock Island, officially Swaraj Dweep, is the Andaman Islands' most popular destination, known for Radhanagar Beach, the snorkelling and sea walks at Elephant Beach, and some of India's best scuba diving. Plan at least two or three nights to enjoy the beaches, a dive or snorkel, and kayaking through mangroves. It is about 1.5 to 2.5 hours by ferry from Port Blair.",
    sections: [
      { h: "3-day Havelock plan", days: [
        "Arrive by ferry; afternoon and sunset at Radhanagar Beach.",
        "Elephant Beach by boat or trek for snorkelling and a sea walk; evening at Kalapathar.",
        "Scuba dive or mangrove kayaking in the morning, and a night bioluminescence kayak in season.",
      ] },
      p("Radhanagar Beach", "Radhanagar Beach, also called Beach No. 7, is a long curve of white sand backed by forest, with calm turquoise water in season. It is often ranked among the best beaches in Asia, and its sunsets are famous. Lifeguards patrol the swimming area."),
      p("Elephant Beach", "Elephant Beach is reached by boat from the main jetty or by a forest trek of about 2 km. It has coral reefs close to the shore, ideal for snorkelling, sea walks and glass-bottom boat rides. Water sports operate in season, weather permitting."),
      p("Kalapathar Beach", "Kalapathar Beach, named after the black rocks along its shore, is a quiet beach on the east coast, known for sunrises and calm water. It is less crowded than Radhanagar."),
      p("Scuba diving", "Havelock is the main diving hub of the Andamans, with registered centres offering introductory dives for non-swimmers and certification courses. Popular dive sites include the Wall, Nemo Reef, Johnny's Gorge and Dixon's Pinnacle, with coral, turtles, rays and reef fish."),
      p("Kayaking", "Guided kayaking trips explore mangrove creeks during the day, and night kayaking in season reveals bioluminescent plankton that glows with each paddle stroke. Book through registered operators."),
      p("Where to stay", "Havelock has resorts and cottages from simple to luxury, many near Radhanagar Beach or along the east coast at Govind Nagar and Vijaynagar. Book early for December to March."),
      NAMES,
      FERRIES,
      SEASON,
      SAFETY,
      FOOD,
      GETTING_THERE,
      PLAN,
      HISTORY,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "What is Havelock Island's new name?", a: "Swaraj Dweep." },
      { q: "How far is Havelock from Port Blair?", a: "About 1.5 to 2.5 hours by ferry." },
      { q: "How do I reach Elephant Beach?", a: "By boat from the jetty or a forest trek of about 2 km." },
      { q: "Can I scuba dive in Havelock without experience?", a: "Yes, with a supervised introductory dive." },
      { q: "How many days are enough for Havelock?", a: "Two to three nights." },
      { q: "Is Radhanagar Beach good for swimming?", a: "Yes, in season and in the lifeguard-patrolled area." },
    ],
  },

  {
    slug: "neil-island-shaheed-dweep-guide",
    title: "Neil Island (Shaheed Dweep) Guide: Laxmanpur, Bharatpur, Sitapur Beaches",
    description: "Neil Island guide: Laxmanpur Beach and the natural rock bridge, Bharatpur Beach, Sitapur sunrise, snorkelling, cycling, stays, ferries and best time.",
    category: "Itineraries",
    destination: "andaman",
    city: "neil-island",
    date: "2026-11-02",
    intro:
      "Neil Island, officially Shaheed Dweep, is a small, quiet island about an hour by ferry from Havelock, with village lanes, paddy fields and beaches for sunrise, sunset and snorkelling. One or two nights are enough to see Laxmanpur's natural rock bridge, Bharatpur Beach and the sunrise at Sitapur, ideally by bicycle.",
    sections: [
      { h: "1 to 2 day Neil plan", days: [
        "Arrive by ferry; Bharatpur Beach for swimming and glass-bottom boats; sunset at Laxmanpur Beach.",
        "Sunrise at Sitapur Beach, the natural rock bridge at low tide, and cycling around the island.",
      ] },
      p("Laxmanpur Beach and the natural bridge", "Laxmanpur Beach 1 is known for wide white sand and sunsets. Laxmanpur Beach 2 has the natural rock bridge, a coral rock formation sometimes called the Howrah Bridge, best seen at low tide when you can walk across the rocky reef. Wear sturdy footwear and watch the tide."),
      p("Bharatpur Beach", "Bharatpur Beach, near the jetty, has calm, shallow water ideal for swimming, glass-bottom boats and snorkelling over coral. Water sports operate in season."),
      p("Sitapur Beach", "Sitapur Beach, at the eastern tip of the island, is known for its sunrise. It has limestone formations and rougher water, so swimming is not advised."),
      p("Cycling around Neil", "Neil is only a few kilometres across, and cycling through its villages, banana plantations and paddy fields is a highlight. Bicycles and scooters can be rented near the jetty and market."),
      p("Snorkelling and diving", "Neil has good snorkelling at Bharatpur and dive centres for introductory and certified dives, with quieter sites than Havelock."),
      p("Where to stay", "Neil has smaller resorts, beach cottages and guest houses, many near Laxmanpur and Bharatpur. Facilities are simpler than on Havelock, which adds to its charm."),
      NAMES,
      FERRIES,
      SEASON,
      SAFETY,
      FOOD,
      RESPONSIBLE,
      GETTING_THERE,
      PLAN,
      HISTORY,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "What is Neil Island's new name?", a: "Shaheed Dweep." },
      { q: "How far is Neil from Havelock?", a: "About 1 hour by ferry." },
      { q: "Where is the natural bridge on Neil Island?", a: "At Laxmanpur Beach 2, best seen at low tide." },
      { q: "Which Neil beach is best for sunrise?", a: "Sitapur Beach." },
      { q: "How many days are enough for Neil Island?", a: "One to two nights." },
      { q: "Can I rent a bicycle on Neil Island?", a: "Yes, near the jetty and market." },
    ],
  },

  {
    slug: "baratang-limestone-caves-guide",
    title: "Baratang Island Guide: Limestone Caves, Mud Volcano, Parrot Island, Rules",
    description: "Baratang guide: the road through the Jarawa reserve and its rules, mangrove boat ride to the limestone caves, mud volcano, Parrot Island, timings and tips.",
    category: "Adventure",
    destination: "andaman",
    city: "baratang",
    date: "2026-11-02",
    intro:
      "Baratang, about 100 km north of Port Blair, is known for limestone caves reached by a speedboat ride through mangrove creeks, a mud volcano and Parrot Island's sunset flights. The road passes through the Jarawa Tribal Reserve, where vehicles travel in convoys at fixed times and strict rules apply. It is a long day trip starting before dawn from Port Blair.",
    sections: [
      { h: "Baratang day trip", days: [
        "Leave Port Blair around 3 to 4 am to join the morning convoy through the Jarawa reserve; cross by vehicle ferry to Baratang; speedboat through mangroves to the limestone caves; visit the mud volcano; return to Port Blair in the evening, or stay overnight for Parrot Island at sunset.",
      ] },
      p("The Jarawa reserve and its rules", "The Andaman Trunk Road passes through the Jarawa Tribal Reserve, home to the Jarawa, a protected indigenous community. Vehicles travel in convoys at fixed times, and stopping, photographing, filming, feeding or interacting with the Jarawa is strictly prohibited and a punishable offence. Respect these rules completely."),
      p("Limestone caves", "From Baratang's Nilambur jetty, speedboats run through narrow mangrove creeks to a landing point, followed by a walk of about 1.5 km to the limestone caves, with stalactites and stalagmites formed over thousands of years. The boat ride through the mangroves is a highlight in itself. Carry water and wear comfortable shoes."),
      p("Mud volcano", "Baratang has small mud volcanoes, where natural gas pushes mud to the surface, forming small mounds. They are a short drive from the jetty, and are interesting more for their rarity than their size."),
      p("Parrot Island", "Parrot Island, near Baratang, is visited by boat at sunset, when thousands of parrots return to roost on the island's trees. This requires an overnight stay in Baratang, as the convoy timings do not allow a same-day return."),
      p("North Andaman beyond Baratang", "The Andaman Trunk Road continues north to Rangat, Mayabunder and Diglipur, where Ross and Smith islands are joined by a sandbar and Saddle Peak, the highest point in the islands, can be trekked. These areas suit travellers with more time."),
      p("Practical tips", "Book the trip through a registered operator who knows the convoy timings, carry ID, snacks and water, and expect a long day. Facilities are basic in Baratang. Check whether boat services are running, as they may be affected by weather."),
      NAMES,
      SEASON,
      RESPONSIBLE,
      FOOD,
      HISTORY,
      PERMITS,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "How far is Baratang from Port Blair?", a: "About 100 km by road, through the Jarawa reserve." },
      { q: "Can I take photos of the Jarawa tribe?", a: "No. Photographing or interacting with the Jarawa is illegal." },
      { q: "How do I reach the Baratang limestone caves?", a: "By speedboat through mangrove creeks and a walk of about 1.5 km." },
      { q: "Can I see Parrot Island on a day trip?", a: "It needs an overnight stay, as the parrots return at sunset." },
      { q: "What time does the Baratang trip start?", a: "Around 3 to 4 am from Port Blair to join the convoy." },
      { q: "What is the mud volcano in Baratang?", a: "A small mound where natural gas pushes mud to the surface." },
    ],
  },

  {
    slug: "andaman-scuba-diving-guide",
    title: "Scuba Diving in Andaman: Try Dives, PADI Courses, Dive Sites and Season",
    description: "Andaman scuba guide: try dives for non-swimmers, PADI courses, Havelock and Neil dive sites, the best season, safety rules, medical checks and booking tips.",
    category: "Adventure",
    destination: "andaman",
    city: "havelock-island",
    date: "2026-11-02",
    intro:
      "The Andaman Islands offer India's best scuba diving, with coral reefs, turtles, rays and schools of reef fish in clear water. Havelock (Swaraj Dweep) is the main hub, followed by Neil (Shaheed Dweep) and North Bay near Port Blair. Non-swimmers can try a supervised introductory dive, and certification courses take three to four days. The best season is November to April.",
    sections: [
      p("Try dives for beginners", "An introductory or try dive lets beginners, including non-swimmers, dive with an instructor in shallow water after a short briefing and pool or shallow-water practice. It is the most popular option for first-timers in Havelock, Neil and North Bay."),
      p("Certification courses", "Open Water courses, usually taking three to four days, include theory, confined-water practice and open-water dives, leading to an internationally recognised certification. Advanced and specialty courses are also available. Choose centres affiliated with recognised agencies such as PADI or SSI."),
      p("Popular dive sites", "Havelock's well-known sites include the Wall, Nemo Reef, Johnny's Gorge, Dixon's Pinnacle and the Aquarium, with coral gardens, pinnacles and big fish. Neil has quieter reefs, and North Bay suits beginners near Port Blair."),
      p("Marine life", "Divers commonly see coral gardens, reef fish, turtles, rays, moray eels, and occasionally reef sharks and dolphins. Visibility is best from about November to April."),
      p("Medical and safety rules", "Divers complete a medical declaration, and some conditions such as heart problems, asthma or recent surgery may need a doctor's clearance. Do not fly within about 18 to 24 hours after diving. Dive only with registered centres using certified instructors and well-maintained equipment."),
      p("Snorkelling and sea walks", "For those who prefer to stay near the surface, snorkelling at Elephant Beach, Bharatpur Beach and North Bay shows coral and fish in shallow water. Sea walks let you walk on the seabed wearing a helmet, without swimming."),
      p("Age limits", "Most agencies set a minimum age for courses, often 10 years for junior certifications, and try dives may have their own age limits. Check with the dive centre."),
      SEASON,
      FERRIES,
      RESPONSIBLE,
      NAMES,
      GETTING_THERE,
      PLAN,
      FOOD,
      HISTORY,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "Can non-swimmers scuba dive in Andaman?", a: "Yes, with a supervised introductory try dive." },
      { q: "Where is the best scuba diving in Andaman?", a: "Havelock (Swaraj Dweep), followed by Neil and North Bay." },
      { q: "How long is an Open Water course?", a: "Usually three to four days." },
      { q: "When is the best time for diving in Andaman?", a: "November to April." },
      { q: "Can I fly after diving?", a: "Wait about 18 to 24 hours after diving before flying." },
      { q: "What will I see diving in Andaman?", a: "Coral, reef fish, turtles, rays and sometimes reef sharks." },
    ],
  },

  {
    slug: "andaman-ferry-guide",
    title: "Andaman Ferry Guide: Port Blair, Havelock and Neil Ferries and Booking",
    description: "Andaman ferry guide: government ferries and private catamarans between Port Blair, Havelock and Neil, travel times, booking, luggage, cancellations and tips.",
    category: "Planning",
    destination: "andaman",
    city: "port-blair",
    date: "2026-11-02",
    intro:
      "Getting between Port Blair, Havelock (Swaraj Dweep) and Neil (Shaheed Dweep) means taking a ferry. Private catamarans are faster and more comfortable, while government ferries are cheaper but sell out quickly and have fewer sailings. Book ahead for December to March, carry ID, and leave a buffer in your plan, as sailings can be cancelled in rough weather.",
    sections: [
      p("Main routes and times", "Port Blair to Havelock takes about 1.5 to 2.5 hours, Havelock to Neil about 1 hour, and Neil to Port Blair about 1 to 1.5 hours. Most itineraries follow a loop: Port Blair to Havelock, Havelock to Neil, and Neil back to Port Blair."),
      p("Private catamarans", "Private operators run air-conditioned catamarans with assigned seats, cafes on board and several classes. They are faster and more comfortable, and tickets can be booked online or through agents."),
      p("Government ferries", "The Directorate of Shipping Services runs government ferries, which are cheaper but have fewer sailings and sell out quickly, especially in peak season. They are also used by islanders, so book early."),
      p("Booking tips", "Book ferries as soon as your dates are fixed, especially from December to March. Agents usually book ferries as part of a package and adjust if sailings change. Carry the ID used for booking."),
      p("Luggage and check-in", "Arrive at the jetty about an hour before departure. Luggage limits apply, and large bags are stored in a separate area. Keep valuables, medicines and ID with you."),
      p("Cancellations and weather", "Sailings can be cancelled or rescheduled in rough weather, especially in the monsoon. Keep a buffer day before your flight home, and follow the operator's instructions."),
      p("Seasickness", "If you get seasick, take medicine before boarding, choose a seat in the middle of the vessel and look at the horizon. Seas are calmer in the main season."),
      p("Other routes", "Ferries and boats also connect Port Blair with Ross Island, North Bay, Baratang (via vehicle ferry) and Long Island, and longer routes serve the northern and southern islands."),
      SEASON,
      NAMES,
      SAFETY,
      GETTING_THERE,
      PLAN,
      PERMITS,
      FOOD,
      RESPONSIBLE,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "How long is the ferry from Port Blair to Havelock?", a: "About 1.5 to 2.5 hours." },
      { q: "Should I book Andaman ferries in advance?", a: "Yes, especially from December to March." },
      { q: "Are private ferries better than government ferries?", a: "Private catamarans are faster and more comfortable; government ferries are cheaper." },
      { q: "Can Andaman ferries be cancelled?", a: "Yes, in rough weather; keep a buffer day." },
      { q: "How long is the ferry from Havelock to Neil?", a: "About 1 hour." },
      { q: "What should I carry on an Andaman ferry?", a: "ID, valuables, medicines and seasickness tablets if needed." },
    ],
  },

  {
    slug: "best-time-to-visit-andaman",
    title: "Best Time to Visit Andaman: Season, Monsoon, Diving and Month by Month",
    description: "When to visit Andaman: October to May season, December to March peak, the best months for diving, monsoon ferry cancellations, and festivals like Island Tourism.",
    category: "Planning",
    destination: "andaman",
    city: "port-blair",
    date: "2026-11-02",
    intro:
      "The best time to visit the Andaman Islands is October to May, when seas are calm, water is clear and ferries run reliably. December to March is the peak season, with the best weather and the highest prices. November to April is ideal for diving. The southwest monsoon, from about mid-May to September, brings heavy rain, rough seas and ferry cancellations, but the islands are green and quiet.",
    sections: [
      p("Andaman month by month", "October brings the end of the monsoon and the start of the season. November to February is pleasant and dry, with calm seas. March and April are warmer, with excellent visibility for diving. May is hot and humid, with the monsoon approaching. June to September is the monsoon, with heavy rain and rough seas."),
      p("Peak season: December to March", "This is the busiest period, especially around Christmas and New Year, when hotels and ferries sell out and prices are highest. Book flights, ferries and resorts well in advance."),
      p("Diving season", "November to April offers the clearest water and calmest seas, making it the best time for scuba diving and snorkelling. Dive centres operate fully in this season."),
      p("Monsoon: June to September", "The southwest monsoon brings heavy rain and strong winds. Ferries may be cancelled, water sports are limited, and some marine parks close. Prices are lower, and the islands are lush, but plans must be flexible."),
      p("Shoulder months", "October and May can be good value, with fewer tourists and lower prices, though weather can be less predictable."),
      p("Festivals", "The Island Tourism Festival, usually held in January, celebrates the islands' culture with music, dance and food. Subhas Mela and other local festivals add colour."),
      p("What to pack", "Pack light cotton clothes, swimwear, a hat, sunglasses, reef-safe sunscreen, insect repellent and a light rain jacket for showers. Carry ID for ferries and permits."),
      FERRIES,
      SAFETY,
      NAMES,
      FOOD,
      GETTING_THERE,
      PLAN,
      HISTORY,
      RESPONSIBLE,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "What is the best time to visit Andaman?", a: "October to May, with December to March the peak season." },
      { q: "When is the best time for scuba diving in Andaman?", a: "November to April." },
      { q: "Is Andaman good in the monsoon?", a: "It is green and quiet, but ferries and water sports can be disrupted." },
      { q: "When is Andaman cheapest?", a: "During the monsoon and the shoulder months of October and May." },
      { q: "When is the Island Tourism Festival?", a: "Usually in January." },
      { q: "Is Andaman crowded at New Year?", a: "Yes, book well in advance." },
    ],
  },

  {
    slug: "andaman-family-trip-guide",
    title: "Andaman Family Trip Guide: 6-Day Plan, Kid-Friendly Beaches and Tips",
    description: "Plan an Andaman family trip: a 6-day Port Blair, Havelock and Neil plan, safe beaches for kids, glass-bottom boats and sea walks, ferries, stays and safety.",
    category: "Family",
    destination: "andaman",
    city: "port-blair",
    date: "2026-11-02",
    intro:
      "The Andaman Islands are great for families: calm beaches, glass-bottom boats, sea walks that need no swimming, a history lesson at the Cellular Jail and easy island hopping. A 6-day family plan covers Port Blair, Havelock and Neil, with time to rest. October to May is the best season, and families should choose lifeguard-patrolled beaches and registered operators.",
    sections: [
      { h: "6-day Andaman family itinerary", days: [
        "Arrive in Port Blair; Corbyn's Cove and the Cellular Jail light and sound show.",
        "Ross Island and North Bay: deer and peacocks, glass-bottom boats and a sea walk.",
        "Ferry to Havelock; Radhanagar Beach.",
        "Elephant Beach for snorkelling and glass-bottom boats.",
        "Ferry to Neil; Bharatpur Beach and the natural bridge.",
        "Ferry to Port Blair and depart.",
      ] },
      p("Kid-friendly activities", "Children enjoy glass-bottom boat rides, sea walks, which let them walk on the seabed wearing a helmet, the deer on Ross Island, the light and sound show at the Cellular Jail, and the shallow water at Bharatpur Beach. Older children can try snorkelling or a supervised try dive."),
      p("Safe beaches for families", "Radhanagar, Corbyn's Cove and Bharatpur have lifeguards and calm water in season. Keep children within flagged areas and avoid beaches where swimming is prohibited."),
      p("Where to stay", "Choose resorts with family rooms, pools and easy beach access on Havelock, and hotels near Aberdeen Bazaar or Corbyn's Cove in Port Blair. Book early for school holidays."),
      p("Ferries with children", "Book seats on private catamarans for comfort, carry snacks, water and seasickness medicine, and arrive early at the jetty."),
      p("Health and packing", "Carry sunscreen, hats, insect repellent, swimwear, basic medicines and ORS. The sun is strong, so keep children hydrated and in the shade at midday."),
      SEASON,
      SAFETY,
      FOOD,
      NAMES,
      RESPONSIBLE,
      GETTING_THERE,
      PLAN,
      PERMITS,
      HISTORY,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "Is Andaman good for a family trip?", a: "Yes, with calm beaches, glass-bottom boats and sea walks." },
      { q: "Can children do a sea walk?", a: "Many operators allow children above a minimum age; check with them." },
      { q: "Which Andaman beaches are safe for kids?", a: "Radhanagar, Corbyn's Cove and Bharatpur, in lifeguard zones." },
      { q: "How many days are good for an Andaman family trip?", a: "Six days for Port Blair, Havelock and Neil." },
      { q: "What is the best time for an Andaman family trip?", a: "October to May." },
      { q: "Are ferries comfortable for children?", a: "Private catamarans are the most comfortable option." },
    ],
  },
];
