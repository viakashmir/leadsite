import type { BlogPost } from "./types";

// Ladakh batch 2: full rewrites of two thin posts (by slug) and three new
// guides. Facts: IMD normals for Leh, BRO road seasons, LAHDC permit portal.
// No em dashes, no invented prices.

type Body = Pick<BlogPost, "intro" | "sections" | "faqs">;

export const LADAKH_UPGRADES: Record<string, Body> = {
  "leh-ladakh-itinerary-7-days-by-flight": {
    intro:
      "A 7-day Leh Ladakh trip by flight works only with acclimatisation built in: two easy days around Leh, then Nubra Valley over Khardung La, Pangong Tso over the Shyok road or Chang La, and back to Leh before flying out. Leh airport (IXL) has year-round flights from Delhi, and the best months for this plan are May to September, when every road and stay is open. Register for Nubra and Pangong on the LAHDC permit portal before you go.",
    sections: [
      {
        h: "7-day Leh Ladakh itinerary",
        days: [
          "Fly into Leh (about 3,500 m). Rest completely: no climbing stairs or sightseeing. Drink water and eat light.",
          "Leh local at an easy pace: Shanti Stupa, Leh Palace, the market and the Hall of Fame war museum.",
          "Indus valley: Thiksey and Hemis monasteries, Shey Palace, or the Sham valley with Magnetic Hill, the Indus and Zanskar confluence, Likir and Alchi.",
          "Leh to Nubra over Khardung La (about 120 km). Diskit Monastery and the Hunder dunes with Bactrian camel rides at sunset.",
          "Nubra to Pangong along the Shyok road via Agham and Durbuk, if open; otherwise return to Leh and go to Pangong the next morning.",
          "Pangong sunrise, then back to Leh over Chang La (about 160 km).",
          "Fly back to Delhi in the morning.",
        ],
      },
      {
        h: "Why the first two days matter",
        p: [
          "Flying straight into Leh takes you from near sea level to about 3,500 m in an hour and a half. Most altitude sickness in Ladakh happens to people who go higher, to Khardung La, Chang La or the lakes, before their bodies adjust. A full rest day, then a gentle sightseeing day, makes the rest of the trip far more comfortable. Travellers with heart or lung conditions should take medical advice before booking.",
        ],
      },
      {
        h: "Permits and paperwork",
        p: [
          "Nubra and Pangong are protected areas. Register all travellers for both on the LAHDC Leh portal, lahdclehpermit.in, and carry printed copies and original IDs for check posts. Foreign nationals need a Protected Area Permit through a registered agent. Hotels and local agents in Leh can apply for you.",
        ],
      },
      {
        h: "Getting around Ladakh",
        list: [
          "Leh taxi union cabs run all circuits at fixed rates and are the usual choice",
          "Self-drive cars and motorcycles are rented in Leh; check the rules for Nubra and Pangong",
          "Outside commercial vehicles face restrictions on local sightseeing in Ladakh",
          "Drivers know the passes, permits and fuel stops; leave the planning of timings to them",
        ],
      },
      {
        h: "Where to stay",
        list: [
          "Leh: hotels and guest houses of every category; choose one with good heating outside summer",
          "Nubra: camps and hotels at Hunder and Diskit",
          "Pangong: camps and cottages at Spangmik, Man and Merak; very cold at night",
        ],
      },
      {
        h: "Best time for this itinerary",
        p: [
          "May to September is ideal, with average highs in Leh around 20 to 28°C and very little rain. June to August is the busiest; September has the clearest skies. From October nights fall near freezing, Pangong camps start closing, and Khardung La can close briefly after snowfall.",
        ],
      },
      {
        h: "What to pack",
        list: [
          "Layers: light clothes for Leh days, a fleece and down jacket for passes and nights",
          "Sun hat, UV sunglasses, sunscreen and lip balm",
          "A refillable water bottle; drink three to four litres a day",
          "Basic medicines and any prescriptions",
          "Cash: ATMs are scarce outside Leh",
        ],
      },
      {
        h: "Adding Tso Moriri or Turtuk",
        p: [
          "With an eighth day, add Turtuk from Nubra, a Balti village near the Line of Control. With two extra days, add Tso Moriri in Changthang, a higher and quieter lake than Pangong. Agents on Tavel Package can extend the plan and handle permits for the extra areas.",
        ],
      },
      {
        h: "What a 7-day Ladakh package costs depends on",
        list: [
          "Flight fares to Leh, which rise sharply in June, July and around holidays",
          "Hotel category in Leh and camp or cottage category in Nubra and Pangong",
          "The Leh taxi union cab type for the circuits",
          "Permit fees for Nubra and Pangong",
          "Extras such as rafting, camel rides and festival days",
        ],
        p: ["Share your dates and group to compare up to 3 itemised quotes from verified agents on Tavel Package."],
      },
    ],
    faqs: [
      { q: "Should I book the Ladakh cab in advance?", a: "Yes, in June to August. Leh taxi union cabs are in high demand in peak months; booking through your hotel or agent before arrival secures the vehicle for the Nubra and Pangong days." },
      { q: "Can I skip the rest day if I feel fine?", a: "It is not advisable. Altitude sickness often appears after the first night, and going higher too soon is the most common reason Ladakh trips go wrong." },
      { q: "Is 7 days enough for Leh Ladakh?", a: "Yes, for Leh, Nubra and Pangong with two acclimatisation days. Add one or two days for Turtuk or Tso Moriri." },
      { q: "Why rest on the first day in Leh?", a: "Leh is at about 3,500 m. Resting for the first day lets your body adjust and greatly reduces the risk of altitude sickness later in the trip." },
      { q: "Can I go to Pangong from Nubra directly?", a: "Yes, along the Shyok road through Agham and Durbuk when it is open. Ask your driver about current conditions." },
      { q: "Which permits do I need for this itinerary?", a: "Register for Nubra and Pangong on the LAHDC Leh portal, lahdclehpermit.in, and carry copies. Leh town needs no permit." },
      { q: "What is the best month for a Leh Ladakh trip by flight?", a: "June to September. September has the clearest skies and fewer crowds." },
      { q: "Are flights to Leh available all year?", a: "Yes. Leh airport has year-round flights from Delhi, with more routes in the summer season." },
    ],
  },

  "ladakh-trip-with-family-and-parents": {
    intro:
      "Ladakh is possible with children and older parents if the plan puts altitude first: three nights in Leh before going higher, Nubra Valley (lower than Leh) as the main overnight trip, and Pangong only if everyone is comfortable, with a heated cottage or a return the same day. Fly into Leh rather than driving over the high passes, travel between June and September, and take medical advice in advance for anyone with heart, lung or blood pressure conditions.",
    sections: [
      {
        h: "A gentle 7-day family plan",
        days: [
          "Fly into Leh. Full rest day at the hotel.",
          "Short outing: Shanti Stupa by car, Leh market in the evening.",
          "Indus valley by car: Thiksey and Shey, with plenty of rest.",
          "Leh to Nubra over Khardung La with a very short stop at the top. Hunder dunes and camel rides.",
          "Nubra: Diskit Monastery and a slow morning; stay a second night in Nubra's lower altitude.",
          "Back to Leh over Khardung La. Easy afternoon.",
          "Fly back to Delhi.",
        ],
      },
      {
        h: "Altitude safety for children and older parents",
        list: [
          "Take medical advice before the trip for anyone with heart, lung or blood pressure conditions, and for children under five",
          "Ask your doctor about altitude medication; do not self-medicate",
          "Rest fully on the first day and avoid stairs and exertion",
          "Watch for headache, vomiting, unusual tiredness or breathlessness, especially in children who may not say how they feel",
          "Descend if symptoms worsen; Nubra is lower than Leh",
          "Choose hotels that can arrange oxygen and a doctor on call",
        ],
      },
      {
        h: "Should families go to Pangong?",
        p: [
          "Pangong is higher than Leh and the road crosses Chang La at about 5,360 m. Families with older children who have acclimatised well usually manage one night in a heated cottage at Spangmik. With infants, toddlers or elderly parents, many families skip the overnight stay or skip Pangong altogether and spend the time in Nubra instead. Decide on the day based on how everyone feels.",
        ],
      },
      {
        h: "Best time for a family trip to Ladakh",
        p: [
          "June to September is the best window: the roads are open, days in Leh are warm, and hotels and camps are fully operating. Avoid winter with small children and older parents; nights are far below freezing and many services close.",
        ],
      },
      {
        h: "Choosing hotels and transport",
        list: [
          "A Leh hotel with lifts or ground-floor rooms, heating and good food",
          "A private Leh taxi union cab for the whole trip, so you can stop whenever needed",
          "In Nubra, a hotel or camp with attached bathrooms and warm bedding",
          "Avoid long same-day drives over two passes",
        ],
      },
      {
        h: "What to pack for children and parents",
        list: [
          "Warm layers, caps and gloves for evenings and passes, even in July",
          "Sunscreen, sunglasses and sun hats; the sun is strong at altitude",
          "Snacks, a thermos and refillable water bottles",
          "Prescription medicines plus basic medicines for fever, nausea and colds",
          "Moisturiser and lip balm for the very dry air",
        ],
      },
      {
        h: "Getting quotes for a family plan",
        p: [
          "Tell agents the ages in your group, any health conditions and your dates. Up to 3 verified agents on Tavel Package will suggest an altitude-safe pace, hotels with the facilities you need and a cab for the whole trip.",
        ],
      },
      {
        h: "Food and comfort",
        p: [
          "Leh hotels serve familiar North Indian, Chinese and continental food, which helps children and older travellers who prefer simple meals. Light, warm meals and plenty of fluids help with acclimatisation; avoid heavy food and alcohol on the first days. In Nubra and Pangong, camps serve set meals, so mention dietary needs in advance.",
        ],
      },
      {
        h: "Easy sights for all ages",
        list: [
          "Shanti Stupa by car, with a short walk at the top",
          "Thiksey Monastery and Shey Palace in the Indus valley",
          "Magnetic Hill and the Sangam on a short drive west of Leh",
          "The Hunder dunes and Bactrian camels in Nubra",
          "Leh market in the evening for handicrafts and apricots",
        ],
      },
    ],
    faqs: [
      { q: "Which month is best for a Ladakh family trip?", a: "June to September, when roads, hotels and camps are fully open and days in Leh are warm. Avoid winter with small children and older parents." },
      { q: "Do hotels in Leh have oxygen?", a: "Many hotels keep oxygen cylinders or concentrators for guests and can call a doctor. Confirm this when booking if you are travelling with older parents or children." },
      { q: "Is the drive over Khardung La safe for families?", a: "Yes, with an experienced Leh taxi union driver and a short stop at the top. Make sure everyone has acclimatised in Leh for at least two to three nights first." },
      { q: "Can children ride the camels in Nubra?", a: "Yes. The Bactrian camel rides at Hunder are short and gentle, and children usually ride with an adult or under the handlers' supervision." },
      { q: "Is Ladakh safe for elderly parents?", a: "It can be, with medical advice beforehand, three nights in Leh to acclimatise, a slow pace and hotels that can arrange oxygen. People with serious heart or lung conditions should avoid high altitude." },
      { q: "What is the minimum age for children to visit Ladakh?", a: "There is no official minimum, but doctors often advise caution for very young children at high altitude. Take advice from your paediatrician before booking." },
      { q: "Is Nubra Valley better than Pangong for families?", a: "Often yes. Nubra is lower than Leh, so many families sleep better there, and the dunes and camel rides are popular with children." },
      { q: "Should we fly or drive to Ladakh with family?", a: "Fly into Leh. The road trips from Manali and Srinagar cross very high passes and involve long days, which are hard on young children and older parents." },
      { q: "How many days should a family spend in Ladakh?", a: "Seven to eight days, with three nights in Leh at the start for acclimatisation." },
    ],
  },
};

export const LADAKH_DEEP_2: BlogPost[] = [
  {
    slug: "tso-moriri-lake-guide",
    title: "Tso Moriri Lake Guide: Route from Leh, Korzok, Best Time and Stay",
    description: "Tso Moriri trip planner: the route from Leh via Chumathang, Korzok village and monastery, Tso Kar, best months, where to stay, permits and altitude tips.",
    category: "Adventure",
    destination: "ladakh",
    city: "tso-moriri",
    date: "2026-11-01",
    intro:
      "Tso Moriri is a high-altitude lake at about 4,520 m in the Changthang region of Ladakh, about 220 km south-east of Leh. The drive takes 6 to 7 hours via Upshi, the Chumathang hot springs and Mahe. It is quieter and higher than Pangong, a protected Ramsar wetland, with Korzok village and its monastery on the western shore. Go between late June and September, register on the LAHDC permit portal, and acclimatise well in Leh first.",
    sections: [
      {
        h: "Route from Leh to Tso Moriri",
        list: [
          "Leh to Upshi along the Indus (about 50 km)",
          "Upshi to Chumathang, known for its hot springs",
          "Chumathang to Mahe bridge, the turn towards Tso Moriri",
          "Up through Sumdo to the lake and Korzok village",
          "Total: about 220 km, 6 to 7 hours",
        ],
      },
      {
        h: "Korzok and the lake",
        p: [
          "Korzok is a small village on the western shore with an old Buddhist monastery and simple homestays. The surrounding Changthang plateau is home to Changpa herders, whose goats produce the fine wool used in pashmina. The lake and its wetlands are protected as a Ramsar site, and birdlife includes bar-headed geese and other high-altitude species in summer.",
        ],
      },
      {
        h: "Tso Kar on the way",
        p: [
          "Tso Kar, a salt lake on the plateau, can be visited on an alternative route between Tso Moriri and the Manali highway, or as part of a loop back to Leh. Its wetlands are a known summer habitat for the black-necked crane. The route is rough in places; travel with an experienced local driver.",
        ],
      },
      {
        h: "Best time to visit Tso Moriri",
        list: [
          "Late June to August: the warmest weeks, with camps and homestays open",
          "September: clear and calm, very cold nights",
          "October to May: extremely cold; most stays close and the lake freezes in winter",
        ],
      },
      {
        h: "Altitude: why Tso Moriri needs care",
        p: [
          "Tso Moriri is higher than Pangong and one of the highest places in Ladakh where visitors stay overnight. Visit only after at least three days in Leh and an easier high trip such as Nubra. Sleep can be difficult at this height; drink plenty of water, avoid alcohol and descend if headache, nausea or breathlessness worsen. People with heart or lung conditions should take medical advice before planning a night here.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Stays are seasonal homestays and camps around Korzok. Facilities are basic, with limited electricity and hot water, and nights are cold even in July. Book in advance through a local agent in peak weeks.",
        ],
      },
      {
        h: "Permits and practical tips",
        list: [
          "Register for Tso Moriri on the LAHDC Leh portal and carry printed copies",
          "Fill fuel in Leh; there are no reliable pumps on the route",
          "Mobile coverage is very limited; postpaid connections work in patches",
          "Carry cash, snacks, water and warm layers",
          "Take your waste back to Leh; the wetland is fragile",
        ],
      },
      {
        h: "Tso Moriri or Pangong?",
        p: [
          "Pangong is closer to Leh, busier and has more places to stay. Tso Moriri is higher, more remote and much quieter, with a strong sense of the Changthang plateau. With eight or more days in Ladakh, see both; with fewer, choose Pangong unless you want solitude and are well acclimatised.",
        ],
      },
      {
        h: "A 3-day Tso Moriri trip from Leh",
        days: [
          "Leh to Tso Moriri via Upshi, Chumathang hot springs and Mahe; evening walk around Korzok.",
          "Sunrise by the lake, Korzok Monastery, and a short walk along the shore.",
          "Back to Leh via the same route, or via Tso Kar and the Manali highway if road conditions allow.",
        ],
      },
      {
        h: "Wildlife and the Changthang plateau",
        p: [
          "The plateau around Tso Moriri is one of the best places in Ladakh to see high-altitude wildlife from the road, including kiang (the Tibetan wild ass), marmots and, in summer, migratory birds on the wetlands. Keep a respectful distance, do not feed animals and stay on existing tracks; driving across the grasslands damages them.",
        ],
      },
    ],
    faqs: [
      { q: "Is Tso Moriri better in July or September?", a: "July is warmer with more birdlife on the wetlands; September is clearer and calmer but much colder at night. Both are good if you are well acclimatised." },
      { q: "Are there hot springs on the way to Tso Moriri?", a: "Yes, at Chumathang on the Indus, a common stop on the drive from Leh. The hot water springs up beside the river near the village." },
      { q: "Is there electricity and network at Korzok?", a: "Electricity is limited, often from solar power or generators for a few hours, and mobile coverage is very patchy. Carry a power bank and tell family you may be out of contact." },
      { q: "What wildlife can I see near Tso Moriri?", a: "Kiang (Tibetan wild ass), marmots and, in summer, migratory birds on the wetlands. Tso Kar nearby is a known summer habitat of the black-necked crane." },
      { q: "Can families visit Tso Moriri?", a: "Only families who are well acclimatised and healthy. At about 4,520 m it is very high; families with small children or elderly parents usually choose Nubra or Pangong instead." },
      { q: "How far is Tso Moriri from Leh?", a: "About 220 km, 6 to 7 hours by road via Upshi, Chumathang and Mahe." },
      { q: "Is a permit required for Tso Moriri?", a: "Yes. Register and pay the fees on the LAHDC Leh portal before you go." },
      { q: "When is the best time to visit Tso Moriri?", a: "Late June to September, when stays are open and the road is reliable." },
      { q: "Is Tso Moriri higher than Pangong?", a: "Yes. Tso Moriri is at about 4,520 m, while Pangong is at about 4,225 m." },
      { q: "Can I do Tso Moriri as a day trip from Leh?", a: "It is possible but very long, 12 to 14 hours of driving. Most travellers stay a night at Korzok." },
      { q: "What is Korzok?", a: "The village on Tso Moriri's western shore, with an old monastery and homestays." },
    ],
  },

  {
    slug: "srinagar-to-leh-road-trip-guide",
    title: "Srinagar to Leh Road Trip: Route via Zojila, Kargil and Lamayuru",
    description: "Drive Srinagar to Leh in two days via Sonamarg, Zojila, Drass, Kargil, Fotu La and Lamayuru: distance, stops, best months, permits and acclimatisation tips.",
    category: "Adventure",
    destination: "ladakh",
    city: "leh",
    date: "2026-11-01",
    intro:
      "The Srinagar to Leh road is about 420 km and takes two days with a night in Kargil. It runs from the Kashmir valley through Sonamarg, over Zojila Pass, past Drass and the Kargil War Memorial, then over Namik La and Fotu La to Lamayuru's moonland and down the Indus to Leh. It is usually open from about May to November, and because it climbs gradually it is easier on the body than flying straight into Leh.",
    sections: [
      {
        h: "Route and stops",
        list: [
          "Srinagar to Sonamarg along the Sindh river (about 80 km)",
          "Zojila Pass into Ladakh; the road is narrow and unpaved in parts",
          "Drass, one of the coldest inhabited places in India, and the Kargil War Memorial nearby",
          "Kargil, the usual overnight stop, on the Suru river",
          "Mulbekh, with its rock-carved Maitreya Buddha",
          "Namik La and Fotu La, the highest pass on this route",
          "Lamayuru monastery and the eroded moonland landscape",
          "Alchi's ancient temple paintings, Magnetic Hill and the Indus and Zanskar confluence before Leh",
        ],
      },
      {
        h: "Two-day plan",
        days: [
          "Srinagar to Kargil (about 200 km) via Sonamarg, Zojila and Drass, with a stop at the Kargil War Memorial. Start early to cross Zojila in the morning.",
          "Kargil to Leh (about 220 km) via Mulbekh, Namik La, Fotu La, Lamayuru, Alchi and Magnetic Hill.",
        ],
        p: ["With a third day, stay at Lamayuru or Alchi to see the monasteries without rushing."],
      },
      {
        h: "When is the road open?",
        p: [
          "Zojila is usually open from about May to November and closes after heavy snow. Opening dates and daily timings are managed by the authorities, and one-way traffic windows sometimes apply on Zojila. Check Border Roads Organisation and police updates before setting out, and keep a buffer day.",
        ],
      },
      {
        h: "Why this route helps acclimatisation",
        p: [
          "Srinagar is at about 1,585 m, Kargil at about 2,700 m and Leh at about 3,500 m, so the climb is spread over two days. The highest point, Fotu La, is crossed on day two and descended quickly. Travellers still rest on the first afternoon in Leh, but altitude sickness is less common than after flying in directly.",
        ],
      },
      {
        h: "Practical tips",
        list: [
          "Indian travellers need no Ladakh permit for this highway; register for Nubra or Pangong separately on the LAHDC portal",
          "Fuel up in Srinagar or Sonamarg, and again in Kargil",
          "Carry warm layers; Zojila and Fotu La are cold even in summer",
          "Mobile coverage is patchy between Sonamarg and Kargil",
          "Respect the Kargil War Memorial; photography rules are posted",
        ],
      },
      {
        h: "Srinagar to Leh by taxi, bike or bus",
        p: [
          "Shared and private taxis run from Srinagar to Kargil and Leh in season, and J&K transport buses run on the route. Many riders do the loop Srinagar to Leh to Manali on motorcycles, which is one of India's classic road trips. Check rules for outside rental vehicles before planning Nubra and Pangong.",
        ],
      },
      {
        h: "Combining with Kashmir and the Manali road",
        p: [
          "A popular circuit flies into Srinagar, spends three days in Kashmir, drives to Leh via Kargil, spends four or five days in Ladakh, and returns by flight or over the Manali highway. Agents on Tavel Package can plan the whole loop with one cab and the right overnight stops.",
        ],
      },
      {
        h: "Food and stays on the way",
        list: [
          "Sonamarg: dhabas and hotels for a breakfast stop",
          "Drass: simple eateries near the market and memorial",
          "Kargil: hotels of several categories and restaurants on the Suru river",
          "Lamayuru and Alchi: guest houses and cafés for a night or lunch",
          "Leh: the full range of hotels and cafés",
        ],
      },
      {
        h: "Best month for the drive",
        p: [
          "June and September are the most comfortable months: Zojila is open, the weather is settled and traffic is lighter than in July and August. In May, the road may have just opened with snow walls on Zojila; in October and November, nights are very cold and early snow can close the pass.",
        ],
      },
    ],
    faqs: [
      { q: "Is there network on the Srinagar to Leh road?", a: "Coverage is good in Srinagar, Sonamarg, Kargil and Leh, but patchy on Zojila and the high passes. Postpaid connections work best." },
      { q: "Is the Kargil War Memorial on the route?", a: "Yes, near Drass on the Srinagar to Leh highway. It honours soldiers who died in the 1999 conflict, and most travellers stop for an hour." },
      { q: "Can I ride a motorcycle from Srinagar to Leh?", a: "Yes. It is one of India's classic rides, usually combined with the Manali highway as a loop. Carry spares, start early on Zojila and check rental rules." },
      { q: "Where should I stop overnight between Srinagar and Leh?", a: "Kargil is the usual overnight stop, about halfway. Lamayuru or Alchi make a good extra night for a slower trip." },
      { q: "How long does Srinagar to Leh take?", a: "Two days, with a night in Kargil. A third day at Lamayuru or Alchi makes it more relaxed." },
      { q: "What is the distance from Srinagar to Leh?", a: "About 420 km via Sonamarg, Zojila, Drass and Kargil." },
      { q: "When is the Srinagar to Leh highway open?", a: "Usually from about May to November, depending on snow on Zojila." },
      { q: "Which is better, Srinagar to Leh or Manali to Leh?", a: "Srinagar to Leh is lower and better for acclimatisation, with Kargil as a comfortable stop. Manali to Leh is higher and more remote, with dramatic passes." },
      { q: "Is the Zojila road safe?", a: "It is a narrow mountain road with unpaved stretches and heavy trucks. With an experienced driver, an early start and good weather, it is crossed by thousands of vehicles every season." },
      { q: "Do I need a permit for the Srinagar to Leh road?", a: "No Ladakh permit is needed for the highway itself. Register for Nubra, Pangong and other protected areas on the LAHDC portal." },
    ],
  },

  {
    slug: "things-to-do-in-leh",
    title: "Things to Do in Leh: Monasteries, Palaces, Viewpoints and Day Trips",
    description: "The best things to do in Leh: Shanti Stupa, Leh Palace, Thiksey and Hemis, Magnetic Hill, the Sangam, rafting, markets and food, with an easy 2-day plan.",
    category: "Itineraries",
    destination: "ladakh",
    city: "leh",
    date: "2026-11-01",
    intro:
      "Leh has enough to fill two or three gentle days while you acclimatise: Shanti Stupa and Leh Palace above the old town, the Indus valley monasteries of Thiksey, Shey and Hemis, Magnetic Hill and the Indus and Zanskar confluence to the west, and the bazaar, cafés and Tibetan food in town. Keep the first day for rest, and save Khardung La, Nubra and Pangong for after that.",
    sections: [
      {
        h: "In and around Leh town",
        list: [
          "Shanti Stupa: a white stupa on a hill above Leh, built in 1991, best at sunrise or sunset",
          "Leh Palace: the 17th-century royal palace of the Namgyal dynasty, with views over the old town",
          "Namgyal Tsemo: a monastery and fort ruins above the palace",
          "The old town lanes and Leh main bazaar for handicrafts, pashmina and dried apricots",
          "Hall of Fame: the army museum on the Kargil road",
          "Sankar Monastery, a quiet gompa close to town",
        ],
      },
      {
        h: "East: the Indus valley monasteries",
        list: [
          "Shey Palace, with its large seated Buddha",
          "Thiksey Monastery, built in tiers on a hill above the Indus",
          "Hemis Monastery, the largest and wealthiest in Ladakh, home of the Hemis Tsechu festival",
          "Stok Palace, the residence of the former royal family, across the river",
        ],
      },
      {
        h: "West: the Sham valley",
        list: [
          "Gurudwara Pathar Sahib on the Kargil road",
          "Magnetic Hill, where vehicles appear to roll uphill",
          "The Sangam at Nimmu, where the Indus and Zanskar meet in two colours",
          "Likir Monastery and its large golden Maitreya",
          "Alchi, with temple paintings from around the 11th to 12th centuries",
        ],
      },
      {
        h: "An easy 2-day Leh plan",
        days: [
          "Morning rest. Late afternoon: Shanti Stupa for sunset and a walk in the bazaar.",
          "Indus valley: Shey, Thiksey and Hemis, back by mid-afternoon. Evening at Leh Palace or in the old town.",
        ],
        p: ["On a third day, do the Sham valley: Pathar Sahib, Magnetic Hill, the Sangam, Likir and Alchi."],
      },
      {
        h: "Adventure from Leh",
        list: [
          "River rafting on the Zanskar and Indus, usually June to September, with registered operators",
          "Motorcycle and cycle rentals for day trips once acclimatised",
          "Short treks such as the Sham valley village walks",
          "Monastery festivals, with dates set by the Tibetan calendar",
        ],
      },
      {
        h: "Food and cafés in Leh",
        p: [
          "Leh's cafés serve Ladakhi and Tibetan dishes such as thukpa, momos, skyu and tingmo bread, alongside Indian and international food. Try butter tea, seabuckthorn juice and the apricot products sold in the bazaar. Many cafés close or shorten hours in winter.",
        ],
      },
      {
        h: "Etiquette in monasteries",
        list: [
          "Walk clockwise around stupas, prayer wheels and mani walls",
          "Dress modestly and remove shoes in prayer halls",
          "Ask before photographing monks and inside temples",
          "Do not touch religious objects or sit with feet pointing at altars",
        ],
      },
      {
        h: "Best time for sightseeing in Leh",
        p: [
          "May to September has warm days and every site open. September gives the clearest views. In winter, Leh is cold but sunny, many monasteries stay open, and festivals such as Losar and monastery celebrations are held, while many hotels and cafés close.",
        ],
      },
      {
        h: "Shopping in Leh",
        list: [
          "Pashmina shawls and woollens; buy from established shops and check labels",
          "Tibetan and Ladakhi handicrafts: thangkas, prayer flags, singing bowls and jewellery",
          "Dried apricots, apricot oil and seabuckthorn products",
          "Ladakhi tea and local herbs",
        ],
      },
      {
        h: "Getting around Leh",
        p: [
          "Leh's centre, the bazaar and the old town are best explored on foot, though some lanes are steep. For Shanti Stupa, the monasteries and the Sham valley, hire a Leh taxi union cab by the day or use the fixed point-to-point rates. Self-drive scooters and cars are available for confident drivers once acclimatised.",
        ],
      },
      {
        h: "Leh in winter",
        p: [
          "From November to March Leh is very cold but sunny, with few tourists. Monasteries such as Thiksey and Spituk hold winter festivals, the Chadar trek on the frozen Zanskar runs from about January to February, and Leh's streets are quiet. Many hotels and cafés close, so book a heated hotel that stays open and travel with an operator who knows winter conditions.",
        ],
      },
    ],
    faqs: [
      { q: "What is the best time of day to visit Thiksey Monastery?", a: "Early morning, when monks gather for morning prayers and the light over the Indus valley is softest. Arrive by about 6 to 7 am in summer to see the prayers." },
      { q: "Is the Leh Palace open to visitors?", a: "Yes, usually daily with an entry ticket. It is a short, steep walk up from the old town, so take it slowly while acclimatising." },
      { q: "Is Leh worth visiting without going to Pangong or Nubra?", a: "Yes. Leh's palace, stupa, monasteries and the Sham valley fill two to three days, and are ideal for travellers with limited time or those who prefer to stay at lower altitude." },
      { q: "What is the best viewpoint in Leh?", a: "Shanti Stupa at sunset gives the widest view over Leh and the Stok range; Leh Palace and Namgyal Tsemo look down over the old town." },
      { q: "What are the must-see places in Leh?", a: "Shanti Stupa, Leh Palace, Thiksey and Hemis monasteries, Magnetic Hill and the Indus and Zanskar Sangam." },
      { q: "How many days are enough for Leh sightseeing?", a: "Two to three days, which also gives your body time to acclimatise before Nubra and Pangong." },
      { q: "Is Magnetic Hill real?", a: "It is an optical illusion: the slope of the road and the surrounding land make vehicles appear to roll uphill." },
      { q: "When is the Hemis festival?", a: "Hemis Tsechu falls in June or July on dates set by the Tibetan calendar. Check the year's dates before planning." },
      { q: "Can I do river rafting in Leh?", a: "Yes, usually from June to September on the Zanskar and Indus, with registered operators." },
      { q: "Is Leh good for a family trip?", a: "Yes, with a slow pace. Most of Leh's sights are a short drive away, and families can rest between outings while acclimatising." },
    ],
  },
];
