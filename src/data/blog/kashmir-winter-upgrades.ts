import type { BlogPost } from "./types";

// Full rewrite of the Kashmir New Year post as a money page for "Kashmir New
// Year packages", keyed by its existing slug so the URL keeps its history.
// No em dashes, no invented prices.

export const KASHMIR_WINTER_UPGRADES: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = {
  "kashmir-christmas-new-year-trip": {
    intro:
      "A Kashmir New Year package is one of the most requested winter trips in India: snow in Gulmarg, a warm hotel dinner on New Year's Eve and a shikara on Dal Lake the next morning. The classic plan is 5 nights between Srinagar, Gulmarg and Pahalgam, timed so that 31 December falls in Gulmarg. It is also the hardest week of the year to book. Gulmarg has a limited number of rooms, many hotels sell New Year stays only as a minimum-night package with a compulsory gala dinner, and flights to Srinagar fill early. Plan by October or early November, choose heated rooms, and keep one buffer day for snow.",
    sections: [
      {
        h: "Where to spend New Year's Eve in Kashmir",
        list: [
          "Gulmarg: the first choice for snow. Most resorts host a gala dinner with music and a bonfire, and the Gulmarg Gondola and ski slopes are a short walk away. Rooms are fewest and sell out first.",
          "Pahalgam: snowy pine forests along the Lidder river, more hotels than Gulmarg and a quieter, family-friendly New Year. Snow is common by late December but less certain than in Gulmarg.",
          "Srinagar: a houseboat or lake-view hotel on Dal Lake, the easiest option for older parents. Snow in the city itself is not guaranteed in late December, so pair Srinagar with a day in Gulmarg.",
          "Sonamarg: a snowy day trip rather than a New Year base. The Z-Morh tunnel has made winter access easier, but heavy snow can still close the road for a day.",
        ],
      },
      {
        h: "Kashmir New Year packages: 4, 5 and 6 night plans",
        p: [
          "The 5 night plan below suits most couples and families. It puts New Year's Eve in Gulmarg and keeps every drive under three hours.",
        ],
        days: [
          "28 December: arrive in Srinagar, check into a heated hotel or houseboat, evening shikara ride if the lake is calm.",
          "29 December: drive to Pahalgam (about 95 km) through the saffron town of Pampore. Afternoon by the snowy Lidder river.",
          "30 December: Pahalgam valleys by local union taxi, subject to snow and road conditions on the day.",
          "31 December: drive to Gulmarg via Srinagar (about 140 km). Snow play in the afternoon, New Year's Eve gala dinner at your resort.",
          "1 January: Gulmarg Gondola Phase 1, and Phase 2 to Apharwat if the weather allows. A ski or snowboard lesson for beginners.",
          "2 January: drive back to Srinagar (about 50 km) for your flight, keeping time for snow delays.",
        ],
      },
      {
        h: "Shorter and longer New Year plans",
        list: [
          "4 nights: 1 night Srinagar, 2 nights Gulmarg (including 31 December), 1 night Srinagar. Best when flights are tight; Pahalgam is dropped.",
          "6 nights: add Sonamarg as a day trip from Srinagar, or a second Gulmarg night for skiing. Good for families who want slower days.",
          "Honeymoon version: 2 nights Gulmarg in a resort with a view of the slopes, 1 night on a deluxe houseboat, and a private candlelight dinner instead of the crowded gala.",
        ],
      },
      {
        h: "Will there be snow for New Year?",
        p: [
          "Gulmarg usually has snow by late December, and Apharwat, at the top of Gondola Phase 2, almost always does. Pahalgam is often snowy, while Srinagar may or may not see snowfall that week. Snow arrives with western disturbances, so it varies from year to year.",
          "A good agent watches the forecast in the week before you travel and can swap the order of Gulmarg and Pahalgam to follow the snow. If fresh snow is late, Phase 2 of the gondola is the most reliable way to stand in deep snow on New Year's Day.",
        ],
      },
      {
        h: "New Year's Eve in Gulmarg: what to expect",
        list: [
          "Celebrations are mostly hotel based: gala dinners, bonfires, music and a midnight countdown.",
          "Many resorts make the gala dinner compulsory for anyone staying on 31 December and charge it separately, so ask whether it is included in the package price.",
          "Minimum-stay rules over New Year are common in Gulmarg. Ask agents for the exact nights the hotel requires.",
          "Nights fall well below freezing. Choose a resort with central heating or heated rooms, and confirm power backup.",
        ],
      },
      {
        h: "When to book a Kashmir New Year package",
        list: [
          "September to October: shortlist hotels and ask for quotes. The best Gulmarg resorts start filling now.",
          "October to early November: confirm hotels and flights. Fares to Srinagar for 28 December to 2 January rise steeply after this.",
          "Late November: share every traveller's ID details for flights and gondola bookings.",
          "Week of travel: final weather check and any change to the order of stops.",
        ],
      },
      {
        h: "Kashmir in Chillai Kalan: weather and packing",
        p: [
          "Chillai Kalan, the coldest 40 days of the Kashmiri winter, begins on 21 December, so a New Year trip falls right in it. Srinagar nights are below freezing, Gulmarg is colder still, and parts of Dal Lake can freeze in a cold spell.",
          "Pack thermal innerwear, a heavy down jacket, woollen socks, gloves, a cap and waterproof boots with grip. Snow boots and long coats can be hired in Gulmarg. Sunglasses and sunscreen matter more than people expect, because the glare off fresh snow is strong.",
        ],
      },
      {
        h: "Getting there and around over New Year",
        list: [
          "Flights: direct flights to Srinagar from Delhi and Mumbai, with one-stop options from other cities. Winter fog in North India and snow in Srinagar can delay flights, so do not plan a tight connection.",
          "Train: trains run from Delhi to Katra and on to Srinagar over the Chenab Bridge, a scenic alternative when flights are expensive.",
          "Roads: the Tangmarg to Gulmarg road needs snow chains after fresh snow, and drivers handle this. Outside cabs are not allowed for some local sightseeing in Pahalgam and Gulmarg, where union taxis and ponies are used.",
        ],
      },
      {
        h: "What decides the price of a New Year package",
        list: [
          "The Gulmarg hotel on 31 December, which is the single biggest part of the cost.",
          "Whether the gala dinner is included or charged at the hotel.",
          "Hotel category and room heating: winter is when the difference between categories matters most.",
          "Flight dates: 29 to 31 December arrivals cost the most.",
          "Vehicle type: an SUV is worth it in snow for families with luggage.",
          "Local extras paid on the spot: gondola tickets, union taxis, ponies, sledges and ski equipment.",
        ],
      },
      {
        h: "How to get the best New Year quote",
        p: [
          "Share your exact dates, number of travellers, the hotel category you want and whether 31 December should be in Gulmarg. Up to 3 verified Kashmir agents send itemised quotes for the same plan, so you can compare the New Year hotel, the gala dinner, flights and extras side by side before you pay anything. The earlier you ask, the more Gulmarg rooms are still available.",
        ],
      },
    ],
    faqs: [
      { q: "Is Kashmir good for New Year?", a: "Yes. Gulmarg usually has snow by late December, and resorts host New Year's Eve dinners with music and bonfires. Book early, as it is the busiest week of the winter." },
      { q: "Where is the best place to celebrate New Year in Kashmir?", a: "Gulmarg for snow and resort celebrations, Pahalgam for a quieter snowy stay, and Srinagar for a houseboat New Year close to the airport." },
      { q: "Is the gala dinner compulsory in Gulmarg on 31 December?", a: "At many resorts, yes, for guests staying that night, and it is often charged separately. Ask agents whether it is included in the package." },
      { q: "When should we book a Kashmir New Year package?", a: "By October or early November. Gulmarg rooms and Srinagar flights for the New Year week sell out and rise in price after that." },
      { q: "Will it snow in Srinagar on New Year?", a: "It may, but it is not guaranteed. Gulmarg and Apharwat are far more reliable for snow that week." },
      { q: "Is Kashmir safe for families over New Year?", a: "Tourist areas such as Srinagar, Gulmarg and Pahalgam welcome large numbers of families every New Year. Choose heated rooms, keep a buffer day for snow, and travel with a local agent who tracks road and weather updates." },
    ],
  },
};
