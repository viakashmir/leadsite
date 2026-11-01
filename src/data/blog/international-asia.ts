import type { BlogPost } from "./types";

const date = "2026-11-01";

export const INTERNATIONAL_ASIA: BlogPost[] = [
  {
    slug: "dubai-5-days-family",
    title: "Dubai Family Trip: 5 Days with Theme Parks, Desert Safari and the Burj Khalifa",
    description:
      "A 5-day Dubai family itinerary with the Burj Khalifa, Dubai Mall aquarium, a desert safari, theme parks and an Abu Dhabi day, plus visa and season tips.",
    category: "Family",
    destination: "dubai",
    city: "dubai-city",
    date,
    intro:
      "Dubai is one of the easiest international family holidays from India: flights of about 3 to 4 hours from most metros, hotels used to families, and attractions for every age. Five days covers the Burj Khalifa, Dubai Mall, a desert safari, a theme park day and a trip to Abu Dhabi.",
    sections: [
      {
        h: "5-day family plan",
        days: [
          "Arrive. Evening dhow cruise at Dubai Marina or the Creek.",
          "Burj Khalifa observation deck, Dubai Mall aquarium, Dubai Fountain show.",
          "Theme park day: IMG Worlds, Dubai Parks or a waterpark such as Aquaventure.",
          "Abu Dhabi: Sheikh Zayed Grand Mosque and Ferrari World or Yas Waterworld.",
          "Morning at Global Village (in season) or souks, afternoon desert safari, depart next day.",
        ],
      },
      {
        h: "Visa",
        p: [
          "Indian passport holders generally need a UAE visa arranged before travel, though some travellers with certain other visas or residence permits qualify for visa on arrival. Agents usually process the tourist visa along with the package. Confirm current rules before booking.",
        ],
      },
      {
        h: "Best time",
        p: [
          "November to March is pleasant. Global Village is usually open from around late October to April. Summer (June to August) is very hot, but hotel rates drop and indoor attractions stay open.",
        ],
      },
      {
        h: "Compare family quotes",
        p: [
          "Check whether the quote includes the visa, airport transfers, attraction tickets on fixed dates, private or shared transfers, and the hotel area (Downtown, Marina or Deira). Ask for the same plan from up to 3 agents.",
        ],
      },
    ],
    faqs: [
      { q: "Is Dubai good for a family trip with kids?", a: "Yes. Theme parks, aquariums, beaches and the desert safari suit all ages." },
      { q: "How many days are enough for Dubai?", a: "Four to five days, plus one for Abu Dhabi." },
      { q: "Do Indians need a visa for Dubai?", a: "Generally yes, arranged in advance through agents or airlines. Check the current rules." },
    ],
  },
  {
    slug: "dubai-honeymoon",
    title: "Dubai Honeymoon: Luxury Stays, Desert Dinners and a 5-Day Plan",
    description:
      "Plan a Dubai honeymoon with a Palm Jumeirah stay, a private desert dinner, Burj Khalifa at sunset and a Marina yacht, plus the best months to go.",
    category: "Honeymoon",
    destination: "dubai",
    city: "dubai-city",
    date,
    intro:
      "Dubai suits couples who want a short-haul luxury honeymoon: beach resorts on the Palm Jumeirah, sunset at the top of the Burj Khalifa, a private desert dinner and a yacht cruise along the Marina. Five days covers the highlights at a relaxed pace.",
    sections: [
      {
        h: "5-day honeymoon plan",
        days: [
          "Arrive, check into a Palm Jumeirah or JBR beach resort.",
          "Burj Khalifa at sunset, Dubai Fountain, dinner overlooking the show.",
          "Private yacht cruise at the Marina, evening at Bluewaters and Ain Dubai.",
          "Desert safari with a private dinner in the dunes.",
          "Souks of Old Dubai and an abra ride across the Creek, depart.",
        ],
      },
      {
        h: "Where to stay",
        list: [
          "Palm Jumeirah: private beaches and resort pools.",
          "Downtown: views of the Burj Khalifa and fountains.",
          "Dubai Marina and JBR: walkable promenade and beach clubs.",
        ],
      },
      {
        h: "Best time",
        p: ["November to March for outdoor plans. Summer is very hot, but luxury hotels offer strong deals."],
      },
      {
        h: "What to ask agents",
        p: [
          "A sea-view room, the type of desert dinner (private or shared camp), the yacht duration, and whether the visa is included. Compare up to 3 quotes.",
        ],
      },
    ],
    faqs: [
      { q: "Is Dubai good for a honeymoon?", a: "Yes for couples who enjoy luxury hotels, beaches, shopping and the desert." },
      { q: "Which area is best for couples in Dubai?", a: "Palm Jumeirah for beach resorts, Downtown for city views." },
      { q: "Can we combine Dubai with another country?", a: "Yes, Abu Dhabi or the Maldives are common add-ons." },
    ],
  },
  {
    slug: "dubai-abu-dhabi-itinerary",
    title: "Dubai and Abu Dhabi Itinerary: 6 Days in the UAE",
    description:
      "A 6-day Dubai and Abu Dhabi plan covering the Burj Khalifa, desert safari, Sheikh Zayed Grand Mosque, Louvre Abu Dhabi and Yas Island theme parks.",
    category: "Itineraries",
    destination: "dubai",
    city: "abu-dhabi",
    date,
    intro:
      "Abu Dhabi is about 140 km from Dubai, so the two cities combine easily. Six days gives four in Dubai and two in Abu Dhabi, with the Sheikh Zayed Grand Mosque, the Louvre Abu Dhabi and Yas Island's theme parks.",
    sections: [
      {
        h: "6-day UAE plan",
        days: [
          "Arrive Dubai, dhow cruise dinner.",
          "Burj Khalifa, Dubai Mall, Dubai Frame.",
          "Desert safari, evening at Global Village in season.",
          "Old Dubai souks and the Museum of the Future, drive to Abu Dhabi.",
          "Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, Qasr Al Watan.",
          "Yas Island: Ferrari World or Warner Bros. World, then fly out of Abu Dhabi or Dubai.",
        ],
      },
      {
        h: "Mosque etiquette",
        p: [
          "The Grand Mosque requires modest clothing covering arms and legs, and a headscarf for women. Visits are free but timed entry may need booking.",
        ],
      },
      {
        h: "Best time",
        p: ["November to March."],
      },
      {
        h: "Quotes",
        p: [
          "Ask agents to split hotels between both cities, include intercity transfers and confirm theme park tickets.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Abu Dhabi from Dubai?", a: "About 140 km, roughly 1.5 hours by road." },
      { q: "Is one day enough for Abu Dhabi?", a: "One day covers the mosque and Louvre. Add a second for Yas Island." },
      { q: "Do we need a separate visa for Abu Dhabi?", a: "No, a UAE tourist visa covers all emirates." },
    ],
  },
  {
    slug: "thailand-honeymoon-phuket-krabi",
    title: "Thailand Honeymoon: 7 Days in Phuket and Krabi",
    description:
      "A 7-day Thailand honeymoon in Phuket and Krabi with the Phi Phi islands, James Bond Island, Railay Beach and the best areas for couples to stay.",
    category: "Honeymoon",
    destination: "thailand",
    city: "phuket",
    date,
    intro:
      "Phuket and Krabi are Thailand's classic honeymoon pair: island-hopping to Phi Phi and Phang Nga Bay, quiet beaches in Krabi and resorts with private pools. Seven days gives four nights in Phuket and three in Krabi, linked by road or ferry.",
    sections: [
      {
        h: "7-day honeymoon plan",
        days: [
          "Arrive Phuket, sunset at Promthep Cape.",
          "Phi Phi Islands and Maya Bay by speedboat.",
          "Phang Nga Bay and James Bond Island.",
          "Phuket Old Town, Big Buddha, spa afternoon.",
          "Transfer to Krabi (Ao Nang). Evening on the beach.",
          "Four Islands tour or Railay Beach by longtail boat.",
          "Fly out from Krabi or Phuket.",
        ],
      },
      {
        h: "Where to stay",
        list: [
          "Phuket: Kata and Karon for calmer beaches, Patong for nightlife.",
          "Krabi: Ao Nang for convenience, Railay for cliffs and seclusion.",
        ],
      },
      {
        h: "Best time",
        p: ["November to April on the Andaman coast. May to October brings rain and rougher seas, with some boat trips cancelled."],
      },
      {
        h: "Visa and quotes",
        p: [
          "Thailand's entry rules for Indian travellers have changed several times in recent years, so confirm the current visa-exempt or visa-on-arrival rules before booking. Ask agents for pool villa options and whether island tours are private or shared.",
        ],
      },
    ],
    faqs: [
      { q: "Is Phuket or Krabi better for a honeymoon?", a: "Both. Phuket has more variety, Krabi is calmer. Most couples split the stay." },
      { q: "When is the best time for Phuket?", a: "November to April, the dry season." },
      { q: "Is Maya Bay open?", a: "It reopened with visitor limits after a closure. Check the latest status, as it can close seasonally." },
    ],
  },
  {
    slug: "bangkok-pattaya-first-trip",
    title: "Bangkok and Pattaya Trip: A 5-Day Plan for First-Time Visitors",
    description:
      "A 5-day Bangkok and Pattaya plan with the Grand Palace, floating market, Coral Island and Safari World, ideal for a first international trip.",
    category: "International",
    destination: "thailand",
    city: "pattaya",
    date,
    intro:
      "Bangkok and Pattaya are the most booked first international trip from India: short flights, food Indians enjoy, and a mix of temples, shopping and beaches. Five days gives two nights in Pattaya (about 150 km from Bangkok) and three in Bangkok.",
    sections: [
      {
        h: "5-day plan",
        days: [
          "Arrive Bangkok, transfer to Pattaya. Evening Alcazar show.",
          "Coral Island (Koh Larn) speedboat trip, Walking Street at night.",
          "Nong Nooch Garden or Sanctuary of Truth, transfer to Bangkok.",
          "Grand Palace, Wat Pho and Wat Arun, evening Chao Phraya river cruise.",
          "Safari World and Marine Park or a floating market, shopping at Pratunam or MBK, depart.",
        ],
      },
      {
        h: "Tips",
        list: [
          "Dress modestly for temples: covered shoulders and knees.",
          "Use metered taxis or ride-hailing apps.",
          "Indian restaurants are easy to find in both cities.",
        ],
      },
      {
        h: "Best time",
        p: ["November to February is coolest. March to May is hot; June to October is rainy."],
      },
      {
        h: "Compare quotes",
        p: [
          "Check whether tours are private or seat-in-coach, which hotels are used (central Bangkok near BTS is best), and whether visa requirements are covered.",
        ],
      },
    ],
    faqs: [
      { q: "Is 5 days enough for Bangkok and Pattaya?", a: "Yes for the main sights. Add Phuket or Krabi for a beach extension." },
      { q: "How far is Pattaya from Bangkok?", a: "About 150 km, 2 to 2.5 hours by road." },
      { q: "Is Thailand good for a first international trip?", a: "Yes. Short flights, familiar food and easy sightseeing make it popular." },
    ],
  },
  {
    slug: "bali-honeymoon-6-days",
    title: "Bali Honeymoon: 6 Days in Ubud, Nusa Penida and Seminyak",
    description:
      "A 6-day Bali honeymoon with Ubud's rice terraces and private pool villas, a Nusa Penida day trip, Uluwatu sunset and Seminyak beach clubs.",
    category: "Honeymoon",
    destination: "bali",
    city: "ubud",
    date,
    intro:
      "Bali is one of the most loved honeymoon destinations for Indian couples: private pool villas, jungle swings, temples and beaches. Six days lets you stay three nights in Ubud and three by the sea in Seminyak or Jimbaran, with a day trip to Nusa Penida.",
    sections: [
      {
        h: "6-day honeymoon plan",
        days: [
          "Arrive, transfer to an Ubud pool villa.",
          "Tegallalang rice terraces, a Bali swing, Tirta Empul temple.",
          "Kintamani volcano view or a sunrise trek on Mount Batur, spa afternoon.",
          "Move to Seminyak. Tanah Lot temple at sunset.",
          "Nusa Penida day trip: Kelingking Beach, Broken Beach and Crystal Bay.",
          "Uluwatu temple and Kecak dance, depart.",
        ],
      },
      {
        h: "Visa",
        p: [
          "Indian passport holders can usually get a visa on arrival or an e-visa on arrival for Indonesia, plus a tourist levy for Bali. Confirm the current rules and fees before you travel.",
        ],
      },
      {
        h: "Best time",
        p: ["April to October is the dry season. December to February is wet but green and less crowded."],
      },
      {
        h: "What to ask for",
        p: [
          "A private pool villa in Ubud, a sea-facing room for the beach part, private transfers and whether the Nusa Penida trip is private or shared. Compare up to 3 quotes.",
        ],
      },
    ],
    faqs: [
      { q: "How many days are enough for a Bali honeymoon?", a: "Six to seven days, split between Ubud and the coast." },
      { q: "Is Nusa Penida worth it?", a: "Yes for dramatic cliffs. It is a long day with a fast boat and rough roads." },
      { q: "Which area of Bali is best for couples?", a: "Ubud for villas and nature, Seminyak or Jimbaran for beaches." },
    ],
  },
  {
    slug: "bali-family-trip",
    title: "Bali Family Trip: 6 Days with Kids, Beaches and Culture",
    description:
      "A 6-day Bali family plan with Nusa Dua's calm beaches, Bali Safari Park, Ubud's monkey forest and rice terraces, and family-friendly areas to stay.",
    category: "Family",
    destination: "bali",
    date,
    intro:
      "Bali works well for families who choose the right base: Nusa Dua or Sanur for calm beaches and resorts with kids' clubs, plus two nights in Ubud for culture and nature. Six days is enough without tiring drives.",
    sections: [
      {
        h: "6-day family plan",
        days: [
          "Arrive, transfer to Nusa Dua or Sanur.",
          "Beach and pool day, evening at the resort.",
          "Bali Safari Park and a waterpark visit.",
          "Move to Ubud via Tegallalang rice terraces.",
          "Sacred Monkey Forest, Ubud market, Balinese dance.",
          "Return to the airport via Tanah Lot.",
        ],
      },
      {
        h: "Family tips",
        list: [
          "Nusa Dua and Sanur have calmer water than Kuta or Seminyak.",
          "Keep food and bags closed near monkeys in Ubud.",
          "Traffic is heavy; plan one main outing per day.",
        ],
      },
      {
        h: "Best time",
        p: ["April to October, with July and August busiest. Indian summer holidays fall in the dry season."],
      },
      {
        h: "Quotes",
        p: ["Ask for family rooms or villas, a private car with child seats if needed, and which tickets are included."],
      },
    ],
    faqs: [
      { q: "Is Bali good for kids?", a: "Yes, with a resort base in Nusa Dua or Sanur and gentle day trips." },
      { q: "Which part of Bali is best for families?", a: "Nusa Dua and Sanur for calm beaches and resorts." },
      { q: "How long is the flight from India to Bali?", a: "Usually via Singapore or Kuala Lumpur, about 8 to 10 hours including the connection." },
    ],
  },
  {
    slug: "singapore-with-kids",
    title: "Singapore with Kids: A 5-Day Family Itinerary",
    description:
      "A 5-day Singapore family plan with Universal Studios, the Night Safari, Gardens by the Bay, Sentosa beaches and the S.E.A. Aquarium, plus visa tips.",
    category: "Family",
    destination: "singapore",
    date,
    intro:
      "Singapore is one of the best family destinations in Asia: safe, clean, easy to get around and full of attractions built for children. Five days covers Sentosa and Universal Studios, the zoo and Night Safari, Gardens by the Bay and the city.",
    sections: [
      {
        h: "5-day family plan",
        days: [
          "Arrive. Gardens by the Bay and the Supertree light show.",
          "Universal Studios Singapore on Sentosa.",
          "S.E.A. Aquarium, Sentosa beaches, Wings of Time show.",
          "Singapore Zoo or River Wonders, Night Safari in the evening.",
          "Marina Bay Sands area, Chinatown or Little India, depart.",
        ],
      },
      {
        h: "Visa",
        p: [
          "Indian passport holders apply for a Singapore visa in advance through authorised agents. It is usually processed within a few working days. Check current requirements.",
        ],
      },
      {
        h: "Getting around",
        list: ["The MRT reaches most attractions.", "Use taxis or ride-hailing for Night Safari late returns.", "Sentosa is linked by monorail, cable car and boardwalk."],
      },
      {
        h: "Compare quotes",
        p: ["Ask whether tickets are dated, whether transfers are private or seat-in-coach, and the hotel location (near an MRT station is best)."],
      },
    ],
    faqs: [
      { q: "Is Singapore good for small children?", a: "Very. Clean, safe and with attractions designed for kids." },
      { q: "How many days are enough for Singapore?", a: "Four to five days." },
      { q: "Can we combine Singapore with Malaysia?", a: "Yes, Kuala Lumpur is a short flight or a scenic coach ride away." },
    ],
  },
  {
    slug: "singapore-malaysia-7-days",
    title: "Singapore and Malaysia Itinerary: 7 Days with Kuala Lumpur and Genting",
    description:
      "A 7-day Singapore and Malaysia plan with Sentosa, Gardens by the Bay, the Petronas Towers, Batu Caves and Genting Highlands, plus how to travel between them.",
    category: "Itineraries",
    destination: "malaysia",
    city: "kuala-lumpur",
    date,
    intro:
      "Singapore and Malaysia combine naturally: four nights in Singapore and three in Kuala Lumpur, with a short flight or coach in between. The trip mixes Singapore's attractions with KL's Petronas Towers, Batu Caves and a day at Genting Highlands.",
    sections: [
      {
        h: "7-day plan",
        days: [
          "Arrive Singapore. Gardens by the Bay.",
          "Sentosa and Universal Studios.",
          "City tour and Night Safari.",
          "Marina Bay, then fly or coach to Kuala Lumpur.",
          "KL city tour: Petronas Towers, Merdeka Square, Batu Caves.",
          "Genting Highlands by cable car.",
          "Depart from Kuala Lumpur.",
        ],
      },
      {
        h: "Travelling between them",
        list: ["Flight: about 1 hour.", "Coach: about 5 to 6 hours with border checks.", "Plan visas for both countries; Malaysia's entry rules for Indians have changed recently, so confirm them."],
      },
      {
        h: "Best time",
        p: ["Year-round destinations with short tropical showers. February to April is often drier."],
      },
      {
        h: "Quotes",
        p: ["Ask agents to include the intercity flight or coach and confirm visa assistance for both countries."],
      },
    ],
    faqs: [
      { q: "Is 7 days enough for Singapore and Malaysia?", a: "Yes for Singapore and Kuala Lumpur. Add Langkawi or Penang for 9 to 10 days." },
      { q: "Should we fly or take the coach to KL?", a: "Fly to save time; the coach suits groups who want to save money." },
      { q: "What is Genting Highlands?", a: "A hill resort near KL with a casino, theme park and cooler weather." },
    ],
  },
  {
    slug: "maldives-honeymoon-water-villa-guide",
    title: "Maldives Honeymoon: Choosing a Water Villa, Atoll and Meal Plan",
    description:
      "How to plan a Maldives honeymoon: water villa vs beach villa, speedboat vs seaplane resorts, all-inclusive meal plans, the best season and visa on arrival.",
    category: "Honeymoon",
    destination: "maldives",
    date,
    intro:
      "A Maldives honeymoon means choosing a resort island, and that choice drives everything else: water villa or beach villa, speedboat or seaplane transfer, and meal plan. Most couples stay 4 nights, often split across two villa types. Indian passport holders get a free 30-day visa on arrival with confirmed bookings.",
    sections: [
      {
        h: "Water villa or beach villa",
        list: [
          "Water villa: built over the lagoon, with direct ladder access to the sea. The classic honeymoon choice.",
          "Beach villa: on the sand, more privacy and garden space, usually better value.",
          "Many couples split their stay: 2 nights beach, 2 nights water.",
        ],
      },
      {
        h: "Transfers",
        p: [
          "Resorts in North and South Male Atolls are usually reached by speedboat from the airport. Further atolls such as Baa and Ari need a seaplane or domestic flight, which adds cost and only runs in daylight.",
        ],
      },
      {
        h: "Meal plans",
        list: [
          "Half board: breakfast and dinner.",
          "Full board: all three meals.",
          "All-inclusive: meals and most drinks, often the best value on resort islands where everything else is expensive.",
        ],
      },
      {
        h: "Best time and quotes",
        p: [
          "December to April is the dry season. May to November is wetter but cheaper. Ask agents to quote the same resort with two meal plans and transfer types, so the full cost is clear before you book.",
        ],
      },
    ],
    faqs: [
      { q: "Do Indians need a visa for the Maldives?", a: "No advance visa. Indian passport holders get a free 30-day visa on arrival with a return ticket and hotel booking." },
      { q: "How many nights are ideal in the Maldives?", a: "Four nights for most couples, five if you split two resorts." },
      { q: "Is a seaplane resort worth it?", a: "For remote, quieter atolls yes, but speedboat resorts near Male save cost and time." },
    ],
  },
];
