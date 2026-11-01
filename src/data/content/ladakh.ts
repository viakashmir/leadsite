import type { GuideContent } from "@/lib/locations";

// Ladakh cities and places, plus additions to the Himachal and Ladakh
// destination guides. Leh temperatures are IMD climate normals (mean daily
// max / min, Leh observatory). Permit rules change: confirm on
// lahdclehpermit.in before each season. No em dashes, no invented prices.

const LEH_MONTHS: NonNullable<GuideContent["months"]> = [
  { month: "January", tempC: "Average high 1.5°C, low -13°C", weather: "The coldest month; frozen streams and very dry air.", goodFor: "Winter festivals and the Chadar trek season; roads to Nubra and Pangong stay open with care." },
  { month: "February", tempC: "Average high 4°C, low -9°C", weather: "Still deep winter, clear blue skies.", goodFor: "Losar (Tibetan new year) falls around February or March." },
  { month: "March", tempC: "Average high 10°C, low -4°C", weather: "Cold but sunnier; snow on the passes.", goodFor: "Quiet off-season trips by air." },
  { month: "April", tempC: "Average high 15°C, low 2°C", weather: "Spring arrives in Leh; high passes still snowbound.", goodFor: "Monasteries and Leh sightseeing by air." },
  { month: "May", tempC: "Average high 20°C, low 6°C", weather: "Pleasant days, cold nights. The Srinagar road usually opens; the Manali road may still be closed.", goodFor: "Start of the main season." },
  { month: "June", tempC: "Average high 24°C, low 11°C", weather: "Warm days and clear skies; both highways normally open during June.", goodFor: "Road trips, Pangong, Nubra and Hemis festival (dates follow the Tibetan calendar)." },
  { month: "July", tempC: "Average high 28.5°C, low 16°C", weather: "The warmest month. Leh gets very little rain (about 15 mm in the month on average) because it lies in the Himalayan rain shadow, though landslides on the Manali and Srinagar routes are possible.", goodFor: "Peak season for bikers and families." },
  { month: "August", tempC: "Average high 28°C, low 15°C", weather: "Warm and dry in Leh, with occasional showers.", goodFor: "All circuits open; book flights early around Independence Day." },
  { month: "September", tempC: "Average high 23°C, low 9°C", weather: "Clear, crisp and calm; the best visibility of the year.", goodFor: "The Ladakh Festival is usually held in September." },
  { month: "October", tempC: "Average high 17°C, low 0°C", weather: "Cold nights and golden poplars; high passes can get early snow.", goodFor: "Last month for the Manali highway in most years." },
  { month: "November", tempC: "Average high 11°C, low -7°C", weather: "Winter begins; the Manali road is closed.", goodFor: "Quiet trips by air." },
  { month: "December", tempC: "Average high 4.5°C, low -12°C", weather: "Very cold and dry.", goodFor: "Winter Ladakh with heated stays." },
];

export const LADAKH_CITIES: Record<string, GuideContent> = {
  leh: {
    intro:
      "Leh is the main town of Ladakh at about 3,500 m, in the Indus valley. It has the airport, most hotels and the taxi union, and is the base for day trips to Shanti Stupa, Leh Palace, Thiksey and Hemis monasteries and Magnetic Hill, and for overnight trips to Nubra Valley, Pangong Tso and Tso Moriri.\n\nEveryone arriving by air should rest for 24 to 48 hours in Leh before going higher.",
    highlights: [
      "Shanti Stupa and Leh Palace",
      "Thiksey and Hemis monasteries in the Indus valley",
      "Magnetic Hill and the Indus Zanskar confluence at Nimmu",
      "Leh market and the old town",
    ],
    idealDuration: "2 to 3 days in Leh, 6 to 8 days for Ladakh",
    bestMonths: "May to September",
    gateway: "Leh airport (IXL)",
    bestTimeToVisit:
      "May to September is the main season for Leh. Days are warm and Leh itself gets little rain even in July and August, while the plains have monsoon. June and September are the most comfortable months for road trips to Nubra and Pangong. Winter (November to February) is very cold but Leh stays reachable by air.",
    months: LEH_MONTHS,
    howToReach: {
      air: "Leh airport (IXL) has year-round flights from Delhi and seasonal flights from Mumbai, Srinagar, Jammu and other cities. It is the fastest way to get to Leh.",
      road: "Srinagar to Leh is about 420 km via Zojila and Kargil; Manali to Leh is about 470 km via the Atal Tunnel, Baralacha La and Tanglang La. Both take two days and are usually open from May or June to October.",
      local: "Leh taxi union cabs run all local sightseeing and circuits. Self-drive and bike rentals are available in Leh.",
    },
    routes: [
      { from: "Delhi", to: "Leh", distanceKm: "About 1,000 km by road via Manali", time: "Three to four days by road, about 1.5 hours by air", how: "Fly direct, or drive via Chandigarh and Manali, or via Jammu and Srinagar." },
    ],
    sections: {
      "travel-guide-tips": {
        intro: "Leh permits: Indian visitors to protected areas such as Nubra Valley, Pangong Tso and Tso Moriri register and pay fees online on the LAHDC Leh portal (lahdclehpermit.in). The fee includes an environmental (green) fee, a Red Cross fund contribution and a wildlife fee; local agents and hotels can apply for you. Foreign nationals need a Protected Area Permit through a registered travel agent. Rules have changed several times, so check the portal before you travel.",
        faqs: [
          { q: "How do I apply for a Leh permit online?", a: "Apply on lahdclehpermit.in with ID details of each traveller, the areas you will visit and dates, and pay the fees online. Keep printed copies for check posts." },
          { q: "Do Indians need an inner line permit for Leh Ladakh?", a: "Leh town does not need a permit. For protected areas such as Nubra, Pangong and Tso Moriri, register and pay fees on the LAHDC portal; check current rules there before travelling." },
        ],
      },
      "how-to-reach": {
        intro: "How to reach Leh: fly from Delhi in about 1.5 hours, or drive in two days from Srinagar or Manali between roughly June and October. Flying is easier for families; driving helps acclimatisation.",
      },
    },
  },

  "pangong-lake": {
    intro:
      "Pangong Tso is a high-altitude lake at about 4,225 m, about 160 km east of Leh, stretching around 134 km into Tibet. It is famous for its changing shades of blue. The road from Leh crosses Chang La (about 5,360 m), and most visitors stay a night in camps or homestays at Spangmik, Man or Merak.",
    highlights: ["Spangmik, Man and Merak villages on the lakeshore", "Chang La pass", "Sunrise and stargazing at the lake"],
    idealDuration: "1 night",
    bestMonths: "May to September",
    gateway: "Leh",
  },

  "tso-moriri": {
    intro:
      "Tso Moriri is a high-altitude lake at about 4,520 m in the Changthang region of Ladakh, about 220 km south-east of Leh. It is a Ramsar wetland, quieter than Pangong, with the village and Korzok Monastery on its western shore. Tso Kar lake is on a common route nearby.",
    idealDuration: "1 to 2 nights",
    bestMonths: "June to September",
    gateway: "Leh",
    months: [
      { month: "July", tempC: "Day 12 to 20°C, night 0 to 5°C", weather: "The mildest month; nights are still cold.", goodFor: "Tso Moriri weather is most stable from late June to August." },
    ],
    routes: [
      { from: "Leh", to: "Tso Moriri", distanceKm: "About 220 km", time: "6 to 7 hours", how: "Via Upshi and the Indus valley to Chumathang and Mahe bridge, then up to Korzok. Tso Moriri to Leh is the same route back, or via Tso Kar and the Manali highway." },
    ],
    blocks: [
      {
        heading: "Tso Moriri vs Pangong",
        body: "Pangong is closer to Leh, busier and has more stay options. Tso Moriri is higher, more remote and quieter, with fewer tourists and more wildlife. With 8 days or more, see both; with less, choose Pangong.",
      },
    ],
  },

  "nubra-valley": {
    intro:
      "Nubra Valley lies north of Leh across Khardung La, where the Shyok and Nubra rivers meet. It is known for the sand dunes and double-humped Bactrian camels at Hunder, Diskit Monastery, and the Balti village of Turtuk near the Line of Control.",
    idealDuration: "2 nights",
    bestMonths: "May to October",
    gateway: "Leh, about 120 km",
  },
};

export const LADAKH_PLACES: Record<string, GuideContent> = {
  "nubra-valley/places-to-visit/turtuk": {
    intro:
      "Turtuk is a Balti village on the Shyok river in Nubra Valley, about 90 km beyond Diskit and close to the Line of Control. It was opened to tourists in 2010 and is known for apricot orchards, stone houses and Balti culture.",
    routes: [
      { from: "Nubra", to: "Turtuk", distanceKm: "About 90 km from Diskit", time: "2.5 to 3 hours", how: "Along the Shyok river road via Hunder and Bogdang." },
      { from: "Turtuk", to: "Pangong", distanceKm: "About 250 km via the Shyok road", time: "8 to 9 hours", how: "Back to Diskit and then along the Shyok river road to Durbuk and Tangtse; road condition varies, ask locally." },
    ],
  },

  "nubra-valley/places-to-visit/khardung-la": {
    intro:
      "Khardung La is the high mountain pass on the road from Leh to Nubra Valley, about 40 km from Leh. The signboard at the top claims 5,602 m; surveyed heights are around 5,350 m. Stops at the top are kept short because of the altitude.",
    facts: [
      { label: "Khardung La pass height", value: "About 5,350 m (signboard 5,602 m)" },
      { label: "Distance from Leh", value: "About 40 km" },
    ],
  },
};

// Additions to the existing Himachal and Ladakh destination guides.
export const DESTINATION_EXTRAS: Record<string, Partial<GuideContent>> = {
  himachal: {
    months: [
      { month: "May", tempC: "Shimla and Manali: day 20 to 28°C, night 10 to 15°C", weather: "Warm days in the hills and the opening of Rohtang Pass. The plains are hot, so this is peak holiday season.", goodFor: "Weather in Himachal Pradesh in May suits families, honeymooners and road trips." },
    ],
    sections: {
      "places-to-visit": {
        intro: "Places in Himachal Pradesh range from the hill stations of Shimla, Manali, Dharamshala, Dalhousie and Kasauli to the cold deserts of Spiti and Lahaul, the Kinnaur valleys and quieter villages such as Jibhi, Sissu, Chail and Palampur. Most first trips cover Shimla and Manali; the coolest places in Himachal Pradesh in summer are Spiti, Lahaul and Kinnaur.",
      },
      "how-to-reach": {
        intro: "Places to visit in Himachal Pradesh are reached by road from Delhi and Chandigarh: Shimla and Kinnaur along NH 5, Manali and Lahaul via Mandi, and Dharamshala and Dalhousie via Una or Pathankot. Delhi to Kinnaur in Himachal Pradesh takes two days via Shimla.",
      },
    },
  },
  ladakh: {
    thingsToKnow: [
      "Rest for at least 24 to 48 hours in Leh before going higher; altitude sickness is the most common trip problem.",
      "Nubra, Pangong, Tso Moriri and other protected areas need online registration and fees on lahdclehpermit.in, usually arranged by your agent or hotel.",
      "Postpaid connections work best; prepaid connections from other states often do not work.",
      "ATMs and fuel are limited outside Leh; carry cash and plan fuel stops.",
      "Carry warm layers even in summer; nights at Pangong are cold.",
    ],
    monthsWhere: "Leh Ladakh",
    months: LEH_MONTHS.filter((m) => ["June", "July", "August", "September"].includes(m.month)),
    blocks: [
      {
        heading: "Festival of Ladakh",
        body: "The Ladakh Festival is held in Leh, usually in September, with cultural performances, archery and polo. Monastery festivals such as Hemis Tsechu (June or July) and Thiksey Gustor (October or November) follow the Tibetan calendar, so dates change each year.",
      },
      {
        heading: "Bikes for a Ladakh trip",
        body: "Most riders rent a 350 to 500 cc motorcycle in Leh or Manali, such as a Royal Enfield Classic or Himalayan. Bikes rented in Leh can be used on local circuits; check rules for outside-registered rental bikes before planning Nubra and Pangong. Carry spares, riding gear and fuel planning for the long stretches.",
      },
      {
        heading: "Clothes to wear in Leh Ladakh: packing essentials",
        items: [
          "June: light layers for the day, a fleece and a down jacket for nights and passes",
          "July and August: cotton layers, a warm jacket, sun hat and UV sunglasses",
          "September: thermal inner layers and a down jacket, nights are near freezing",
          "Always: sunscreen, lip balm, sturdy shoes, a water bottle and basic medicines for altitude",
        ],
      },
    ],
    sections: {
      "best-time-to-visit": {
        intro: "Ladakh in June is the start of the full road-trip season; Ladakh in June end has both highways open and long, warm days. Ladakh temperature in July peaks around 28°C in Leh by day. Ladakh in September has the clearest weather and cooler nights. Climate in Leh Ladakh is a high-altitude cold desert: low rain, strong sun and big day to night swings.",
      },
      "how-to-reach": {
        intro: "How to reach Ladakh: fly to Leh, or drive or ride via Manali or Srinagar between about June and October. A Delhi to Ladakh bike trip usually takes 8 to 12 days, going up via Manali and returning via Srinagar or the other way round.",
        blocks: [
          {
            heading: "Best places to see in Leh Ladakh and things to do",
            items: [
              "Leh: Shanti Stupa, Leh Palace, Hall of Fame, Leh market",
              "Indus valley: Thiksey, Hemis, Shey Palace, Magnetic Hill, Sangam at Nimmu",
              "Nubra: Khardung La, Diskit, Hunder dunes, Turtuk",
              "Pangong Tso via Chang La",
              "Tso Moriri and Tso Kar in Changthang",
              "Activities: river rafting on the Zanskar, camel rides at Hunder, motorbike tours and monastery festivals",
            ],
          },
        ],
      },
    },
  },
};
