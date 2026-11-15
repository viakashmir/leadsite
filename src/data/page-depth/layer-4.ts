// Fourth layer (2026-11-15): the questions travellers ask most for each
// page, plus a few last sections, to clear the TDI bar with a margin.

import type { PageDepthEntry } from "./index";

const SHOPPING =
  "Kashmir's crafts make the best souvenirs: pashmina and Kani shawls (ask for a certificate for genuine pashmina), crewel-embroidered cushions and curtains, papier-mache boxes, walnut-wood carvings, copperware from old Srinagar, carpets, saffron from Pampore, dried apricots, walnuts and almonds. Polo View Market and Residency Road have fixed-price government and private emporiums; Lal Chowk and the old city are better for bargaining. Buy saffron and dry fruit in sealed packs with a bill, and be wary of shops your driver insists on.";

export const LAYER_4: Record<string, PageDepthEntry> = {
  "/tour-packages/kashmir/3-nights-4-days": {
    sections: [],
    faqs: [{ q: "Is a houseboat or hotel better for a 3-night trip?", a: "Do both if you can: one night on a houseboat for the experience, the other two in a hotel for space and an easy start to the day trips." }],
  },
  "/tour-packages/kashmir/4-nights-5-days": {
    sections: [{ h: "Shopping in Srinagar", p: [SHOPPING] }],
    faqs: [],
  },
  "/tour-packages/kashmir/5-nights-6-days": {
    sections: [{ h: "Shopping in Srinagar", p: [SHOPPING] }],
    faqs: [],
  },
  "/tour-packages/kashmir/6-nights-7-days": {
    sections: [{ h: "Shopping in Srinagar", p: [SHOPPING] }],
    faqs: [],
  },
  "/tour-packages/gulmarg": {
    sections: [],
    faqs: [
      { q: "What is the best month for a Gulmarg package?", a: "January and February for snow and skiing, April to June for flowers and the golf course, and September to October for clear, quiet days. June and late December are busiest." },
      { q: "How many nights should we stay in Gulmarg?", a: "One night is enough for the gondola and the meadow; two nights suit honeymoons, winter trips and anyone who wants Khilanmarg or a full day of skiing." },
    ],
  },
  "/tour-packages/doodhpathri": {
    sections: [],
    faqs: [
      { q: "How many hours do you need at Doodhpathri?", a: "Four to five hours is enough to walk the meadow and the stream, take a pony ride and have a picnic. Leave Srinagar by about 9 am." },
      { q: "Is Doodhpathri crowded?", a: "Far less than Gulmarg or Pahalgam. Summer weekends bring local families, but weekdays and autumn are very quiet." },
      { q: "Are there toilets and food at Doodhpathri?", a: "There are basic toilets and a few tea stalls near the entry. Carry water and a packed lunch." },
    ],
  },
  "/tour-packages/gurez": {
    sections: [],
    faqs: [
      { q: "How many days are needed for Gurez?", a: "At least 2 nights in Gurez itself, plus the days before and after in Srinagar. A 4 nights 5 days trip is the shortest comfortable plan." },
      { q: "Are there hotels in Gurez?", a: "Guesthouses, homestays, a tourist bungalow and seasonal camps, mostly around Dawar. All are simple; there are no luxury hotels." },
      { q: "Which mobile network works in Gurez?", a: "Only a few networks work, with weak data. Expect to be out of reach for much of the stay." },
    ],
  },
  "/tour-packages/kargil": {
    sections: [],
    faqs: [
      { q: "What is the best time to visit Kargil?", a: "June to September, when Zojila is open, days are pleasant and the Suru valley is green. Winters are very cold." },
      { q: "Where should we stay in Kargil?", a: "Hotels along the main road and near the Suru river. One night is usual on a Srinagar to Leh road trip." },
      { q: "Is Lamayuru on the way from Kargil to Leh?", a: "Yes. Lamayuru Monastery and its moonland landscape lie just below Fotu La, about 100 km from Kargil." },
      { q: "Can we visit the Kargil War Memorial on a package?", a: "Yes. It is at Drass on the Srinagar to Kargil road, an easy stop on the first day of a road trip into Ladakh." },
    ],
  },
  "/tour-packages/tso-moriri": {
    sections: [],
    faqs: [
      { q: "How many days do you need for Tso Moriri?", a: "One night at the lake after at least two nights in Leh, so a 4 nights 5 days trip at the shortest. Adding Hanle or Tso Kar needs one more night." },
      { q: "What is the best time to visit Tso Moriri?", a: "June to September. July and August are warmest; September is clearest. The lake begins to freeze from about December." },
      { q: "Is Tso Moriri better than Pangong?", a: "It is quieter, higher and wilder; Pangong is easier to reach and has more camps. Choose by what you want, or see both on a longer trip." },
      { q: "Is there electricity at Korzok?", a: "Usually in the evening only, from solar or a generator. Carry a power bank and a torch." },
      { q: "What wildlife can we see near Tso Moriri?", a: "Kiang (Tibetan wild ass), marmots, bar-headed geese and, with luck, black-necked cranes in summer." },
    ],
  },
  "/tour-packages/ladakh/8-nights-9-days": {
    sections: [
      {
        h: "Leh's old town and markets",
        p: [
          "Below Leh Palace, the old town's mud-brick houses, chortens and narrow lanes have been restored in parts, and a walk through them in the morning, before the main bazaar wakes up, is one of the best things to do on an acclimatisation day. The main bazaar has shops for pashmina, Tibetan crafts, prayer flags, turquoise jewellery and dried apricots, plus a vegetable market where Ladakhi women sell produce from their villages. Evenings on the rooftop cafes look across to Stok Kangri, the snow peak above the Indus valley.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need travel insurance for Ladakh?", a: "It is strongly recommended. Choose a policy that covers high altitude and medical evacuation." },
      { q: "Can children go on an 8-night Ladakh trip?", a: "Many families travel with children over about five, with a doctor's advice, two rest days in Leh and lower overnight stops such as Nubra." },
    ],
  },
  "/tour-packages/ladakh/5-nights-6-days": {
    sections: [],
    faqs: [
      { q: "What is the best 5 nights 6 days Ladakh itinerary?", a: "Leh 2 nights, Nubra 1 night, Pangong 1 night via the Shyok road, and Leh 1 night before a morning flight." },
      { q: "Is oxygen available in Ladakh hotels?", a: "Many larger hotels and some camps keep oxygen cylinders. Ask your agent to confirm for each stop if anyone in the group is concerned." },
      { q: "Can we drive to Ladakh instead of flying for a 6-day trip?", a: "Not comfortably. The road from Manali or Srinagar takes two days each way, which leaves too little time. Fly in for a 6-day trip." },
    ],
  },
  "/tour-packages/ladakh/4-nights-5-days": {
    sections: [],
    faqs: [
      { q: "What is the cheapest way to see Ladakh in 5 days?", a: "Fly into Leh outside July and August, stay in family-run guesthouses, share a Leh taxi with other travellers if you are a small group, and choose Nubra or Pangong rather than both." },
      { q: "Is May a good month for a short Ladakh trip?", a: "Yes, for Leh, the monasteries and Nubra. Pangong is very cold and the passes can have snow; the lake may still be partly frozen early in the month." },
      { q: "Can I book a 4 nights 5 days Ladakh trip at short notice?", a: "Usually, outside July and August. In peak months flights and Pangong camps fill early." },
    ],
  },
  "/tour-packages/tso-moriri/4-nights-5-days": {
    sections: [
      {
        h: "What a Tso Moriri package includes",
        list: [
          "4 nights of hotels in Leh and a homestay or camp at Korzok, usually with breakfast and dinner.",
          "A Leh taxi union cab for the airport, sightseeing and the Tso Moriri trip.",
          "Protected area registration and environment fees, when listed.",
          "Not included: flights, monastery entries, hot spring visits, oxygen if needed, lunches and tips.",
        ],
      },
    ],
    faqs: [
      { q: "Is a 4 nights 5 days Tso Moriri trip too short?", a: "It is the shortest safe plan: two nights in Leh, one at the lake and one back in Leh. A sixth day for Hanle or a rest day makes it easier." },
      { q: "Do I need a 4x4 for Tso Moriri?", a: "Not usually in summer; Leh taxi union SUVs make the trip. Snow early or late in the season can make a 4x4 useful." },
      { q: "Can we stay two nights at Tso Moriri?", a: "Yes, if you want a quieter, slower trip, with a day for walking by the lake and visiting nomad camps." },
    ],
  },
  "/tour-packages/zanskar": {
    sections: [
      {
        h: "What a Zanskar package includes",
        list: [
          "Hotels, camps and homestays for every night, with breakfast and dinner in most places.",
          "A Kargil or Leh taxi union SUV for the whole trip, including fuel and the driver's stay.",
          "Monastery visits by road; ponies and guides for treks such as Phugtal are extra.",
          "Not included: flights, entry fees, pony or porter hire, lunches, tips and oxygen if needed.",
        ],
      },
    ],
    faqs: [
      { q: "Is Zanskar suitable for families?", a: "For families comfortable with long drives, simple stays and altitude, yes. The road days are long, so plan rest days." },
      { q: "How long is the drive from Kargil to Padum?", a: "About 9 to 11 hours for 230 km, usually broken with a night at Rangdum." },
      { q: "Can Zanskar be combined with Leh and Nubra?", a: "Yes, on 14 nights or more: Srinagar to Kargil and Zanskar, then Kargil to Leh, Nubra and Pangong." },
    ],
  },
  "/honeymoon-packages": {
    sections: [
      {
        h: "Honeymoon by region of India",
        list: [
          "North: Kashmir's lakes and meadows, Himachal's Manali, Shimla and Dharamshala, Uttarakhand's Mussoorie, Nainital and Auli, and Ladakh for adventurous couples.",
          "West: Goa's beaches, Udaipur's lakes and palaces, Jaipur and Jodhpur, and the hill station of Mount Abu.",
          "South: Kerala's backwaters, hills and beaches, Coorg's coffee estates, Ooty and Kodaikanal, and Pondicherry's French quarter.",
          "East and North East: Darjeeling and Sikkim, Meghalaya's waterfalls and living root bridges, and the Andaman Islands.",
        ],
      },
    ],
    faqs: [
      { q: "Which is the best honeymoon destination in South India?", a: "Kerala for backwaters, tea hills and beaches, then Coorg, Ooty, Kodaikanal and Pondicherry." },
      { q: "Is the Andaman Islands good for a honeymoon?", a: "Yes, from November to May. Havelock's Radhanagar beach, snorkelling and diving, and quiet Neil Island are the highlights." },
      { q: "Which honeymoon destination is best in October?", a: "Kashmir for autumn colour, Rajasthan as the heat eases, Himachal and Sikkim for clear mountain views, and Turkey abroad." },
      { q: "Can we combine two destinations on a honeymoon?", a: "Yes, on 8 days or more: Kashmir with Goa, Kerala's hills with its beaches, or Bali's Ubud with its coast are popular pairs." },
    ],
  },
};
