// Third layer (2026-11-15): food, history, self-drive, nearby places and
// photography for the pages still short of the TDI bar.

import type { PageDepthEntry } from "./index";

const KASHMIR_FOOD = [
  "Kashmiri food is a reason to travel in itself. Wazwan is the formal multi-course feast cooked by a waza (master chef), with dishes such as rogan josh, rista, gushtaba (meatballs in a yoghurt gravy), tabak maaz (fried ribs) and yakhni; vegetarians can ask for dum aloo, nadru yakhni (lotus stem in yoghurt) and haak (collard greens). Kahwa, green tea with saffron, cardamom and almonds, is served everywhere, and noon chai, a salty pink tea, comes with bakarkhani and girda breads from neighbourhood bakeries in the morning.",
  "In winter, harissa, a slow-cooked mutton and rice dish, is sold from early morning in old Srinagar. Most packages include breakfast and dinner at the hotel, so ask your driver for a wazwan restaurant one evening, and try the trout in Pahalgam or on the Sindh road near Sonamarg.",
];

const LADAKH_SELF_DRIVE = [
  "Self-drive in Ladakh is possible in your own vehicle, driven from home over the Manali or Srinagar highway. Rented cars and bikes from outside Ladakh face restrictions on local sightseeing, so most travellers who want to ride rent a bike in Leh, where rental shops offer Royal Enfields and other bikes with the required papers. Riders should acclimatise for two days before starting, ride in pairs, carry spares, and fuel up in Leh, Diskit or Karu, as pumps are few.",
  "For most travellers, a Leh taxi union cab with a local driver is the safer and more relaxed option. Drivers know the passes, the weather and the check posts, and you can look at the view instead of the road.",
];

const LADAKH_FOOD = "Ladakhi food is simple and warming: thukpa (noodle soup), momos, skyu (a pasta stew), chhutagi, and tingmo bread, with butter tea (gur gur cha) and apricot jam. Leh has cafes and restaurants serving everything from Tibetan and Kashmiri food to wood-fired pizza and Israeli breakfasts. In camps and homestays, dinner is usually a set meal of dal, rice, a vegetable and roti; tell your agent about any dietary needs in advance.";

export const LAYER_3: Record<string, PageDepthEntry> = {
  "/tour-packages/kashmir/5-nights-6-days": {
    sections: [{ h: "What to eat in Kashmir", p: KASHMIR_FOOD }],
    faqs: [],
  },
  "/tour-packages/kashmir/6-nights-7-days": {
    sections: [{ h: "What to eat in Kashmir", p: KASHMIR_FOOD }],
    faqs: [{ q: "Is wazwan included in Kashmir packages?", a: "Not usually. Packages include breakfast and dinner at the hotel; ask your driver or agent to book a wazwan meal at a restaurant one evening." }],
  },
  "/tour-packages/doodhpathri": {
    sections: [
      {
        h: "Places near Doodhpathri",
        list: [
          "Tosamaidan: a high meadow in Budgam district, reopened to visitors after decades as an army firing range, now a quiet trekking and camping meadow.",
          "Yusmarg: about 47 km from Srinagar, a pine-ringed meadow with a walk to Nilnag Lake.",
          "Charar-e-Sharief: the shrine of Sheikh Noor-ud-din Noorani, Kashmir's patron saint, on the Yusmarg road.",
          "Budgam town: on the way, with orchards and paddy fields on either side of the road.",
        ],
      },
      {
        h: "Doodhpathri through the year",
        list: [
          "April and May: snow melting on the edges, the meadow turning green, the stream full and cold.",
          "June to August: the greenest months, with wild flowers and herders' flocks; the busiest weekends.",
          "September and October: clear skies, the grass turning gold, and the fewest visitors.",
          "November: cold and quiet, with the first snow possible late in the month.",
          "December to March: the road is usually closed by snow.",
        ],
      },
      { h: "What to eat on a Kashmir trip", p: [KASHMIR_FOOD[0]] },
    ],
    faqs: [{ q: "Is Tosamaidan near Doodhpathri?", a: "Yes. Both are in Budgam district, south-west of Srinagar. Tosamaidan is a high meadow used for treks and camping; ask your agent about road and access conditions." }],
  },
  "/tour-packages/gurez": {
    sections: [
      {
        h: "History and people of Gurez",
        p: [
          "Gurez was a stop on the old route from the Kashmir valley to Gilgit and Central Asia, and its people, the Dard-Shina, speak Shina rather than Kashmiri. Their wooden houses with carved balconies and steep roofs are built for heavy snow, which cuts the valley off for months each winter. The Kishanganga river, called the Neelum on the other side of the Line of Control, divides the valley, and the Kishanganga hydroelectric project near Bandipora draws water from it.",
          "Habba Khatoon, the 16th-century poet and queen of Yusuf Shah Chak, is said to have wandered these hills, and the peak above Dawar carries her name. Her songs of longing are still sung in Kashmir.",
        ],
      },
      {
        h: "The road to Gurez",
        p: [
          "From Srinagar, the road goes north through Sumbal and Bandipora along the edge of Wular Lake, then climbs in tight bends through the forest at Tragbal to Razdan Pass. Beyond the pass it descends through meadows to Kanzalwan and follows the Kishanganga to Dawar. The road is paved most of the way but narrow; landslides and snow can close it at the ends of the season. Leave Srinagar by 7 or 8 am.",
        ],
      },
      { h: "What to eat on a Kashmir trip", p: KASHMIR_FOOD },
    ],
    faqs: [{ q: "What language is spoken in Gurez?", a: "Shina is the main language of the Dard-Shina people of Gurez; Kashmiri, Urdu and Hindi are also understood." }],
  },
  "/tour-packages/kargil": {
    sections: [
      {
        h: "Kargil's history and culture",
        p: [
          "Kargil was an important town on the trade routes between Kashmir, Ladakh, Baltistan and Central Asia, and the Munshi Aziz Bhat museum in the bazaar holds goods from those caravan days: textiles, saddles, utensils and trade papers. Most of Kargil's people are Shia Muslims of Balti and Purig descent, and the town's mosques and imambaras are its main landmarks. To most Indians the name recalls the 1999 conflict, remembered at the war memorial in Drass.",
          "The district also includes the Buddhist villages around Mulbekh and the whole of Zanskar, so Kargil is where the Muslim and Buddhist halves of Ladakh meet.",
        ],
      },
      { h: "What to eat in Ladakh", p: [LADAKH_FOOD] },
    ],
    faqs: [],
  },
  "/tour-packages/tso-moriri": {
    sections: [
      {
        h: "Tso Kar and Hanle with Tso Moriri",
        p: [
          "Tso Kar, about 80 km west of Tso Moriri on the Changthang plateau, is a salt lake whose shores turn white with salt crust, with grazing grounds and kiang herds around it. It is a natural stop on the way back to Leh via Taglang La.",
          "Hanle, south-east of Tso Moriri, is home to the Indian Astronomical Observatory and the Hanle Dark Sky Reserve. With one extra night, Hanle and Tso Moriri make a superb high-plateau trip, best between September and March for night skies, and June to September for roads and comfort.",
        ],
      },
      {
        h: "Photography at Tso Moriri",
        list: [
          "Sunrise from the western shore, when the lake is still and the peaks catch the first light.",
          "Late afternoon, when the light warms and the wind ripples the water.",
          "The Milky Way on moonless nights, with almost no light pollution.",
          "Carry spare batteries: cold drains them fast. Keep them in an inner pocket.",
          "Do not fly drones without permission; the area is close to the border and drone rules are strict.",
        ],
      },
      { h: "What to eat in Ladakh", p: [LADAKH_FOOD] },
    ],
    faqs: [{ q: "Can I fly a drone at Tso Moriri?", a: "Not without permission. The area is close to the border and drone rules in Ladakh are strict." }],
  },
  "/tour-packages/ladakh/8-nights-9-days": {
    sections: [
      { h: "Self-drive or taxi?", p: LADAKH_SELF_DRIVE },
      { h: "What to eat in Ladakh", p: [LADAKH_FOOD] },
    ],
    faqs: [{ q: "Can I rent a bike in Leh?", a: "Yes. Rental shops in Leh offer Royal Enfields and other bikes with the papers needed for local riding. Acclimatise for two days before riding over the passes." }],
  },
  "/tour-packages/ladakh/5-nights-6-days": {
    sections: [
      { h: "Self-drive or taxi?", p: LADAKH_SELF_DRIVE },
      { h: "What to eat in Ladakh", p: [LADAKH_FOOD] },
    ],
    faqs: [],
  },
  "/tour-packages/ladakh/4-nights-5-days": {
    sections: [
      { h: "Self-drive or taxi?", p: LADAKH_SELF_DRIVE },
      { h: "What to eat in Ladakh", p: [LADAKH_FOOD] },
    ],
    faqs: [],
  },
  "/tour-packages/tso-moriri/4-nights-5-days": {
    sections: [
      {
        h: "The Changpa nomads",
        p: [
          "The Changthang plateau around Tso Moriri is home to the Changpa, semi-nomadic herders who move with their flocks of yak, sheep and pashmina goats between summer and winter pastures, living in black yak-hair tents called rebo. The fine underwool of their goats is the raw pashmina later spun into shawls in Kashmir. Some families now live in Korzok and other villages for part of the year. Visits to nomad camps should be arranged with a local guide, and always with permission.",
        ],
      },
      {
        h: "Photography at Tso Moriri",
        list: [
          "Sunrise from the western shore at Korzok, when the lake is still.",
          "The Milky Way on moonless nights, with almost no light around.",
          "Kiang herds and marmots on the drive, from inside the car where possible.",
          "Spare batteries kept warm in an inner pocket, as cold drains them fast.",
          "No drones without permission, as the area is close to the border.",
        ],
      },
      { h: "Self-drive or taxi?", p: LADAKH_SELF_DRIVE },
      { h: "What to eat in Ladakh", p: [LADAKH_FOOD] },
    ],
    faqs: [],
  },
  "/tour-packages/zanskar": {
    sections: [
      {
        h: "Buddhism and history in Zanskar",
        p: [
          "Zanskar was once a small kingdom with two royal houses, at Padum and Zangla, and its monasteries belong mainly to the Gelugpa and Drukpa schools of Tibetan Buddhism. Phugtal, founded in the early 15th century around a cave where hermits are said to have meditated much earlier, is the most remarkable, its buildings stacked like a honeycomb across the cliff face. Karsha, Stongde and Bardan are active monasteries with daily prayers that visitors can attend quietly.",
          "Because the valley was cut off for most of the year until the road arrived, Zanskar kept its traditions longer than much of Ladakh. Changes are coming quickly with new roads, so a visit now still shows a way of life that is fading elsewhere.",
        ],
      },
      {
        h: "Rafting and adventure in Zanskar",
        list: [
          "Rafting on the lower Zanskar river from Chilling to Nimmu, a popular day trip from Leh in July and August.",
          "Multi-day rafting expeditions on the Zanskar gorge with specialist outfitters, for experienced paddlers.",
          "Trekking from Padum towards Phugtal, Lamayuru or Darcha with local outfitters and ponies.",
          "The Chadar trek on the frozen river in January and February, regulated and permit-based.",
        ],
      },
      { h: "Self-drive or taxi?", p: LADAKH_SELF_DRIVE },
      { h: "What to eat in Ladakh", p: [LADAKH_FOOD] },
    ],
    faqs: [{ q: "Can I raft the Zanskar river?", a: "Yes. The Chilling to Nimmu stretch is a popular day trip from Leh in July and August; longer gorge expeditions are run by specialist outfitters." }],
  },
  "/honeymoon-packages": {
    sections: [
      {
        h: "Honeymoon on a smaller budget",
        list: [
          "Travel in the shoulder season: March and October in Kashmir and Himachal, September and March in Kerala, and October in Goa.",
          "Pick one destination reached by a direct flight or overnight train, and cut the number of hotel changes.",
          "Choose a well-rated 3-star hotel in a good location over a 5-star far from the sights.",
          "Keep one special splurge, such as a houseboat night, a palace dinner or a beach villa, and keep the rest simple.",
          "Travel mid-week where possible; weekend hotel rates are higher in places close to big cities.",
          "Ask agents to quote the same plan at two hotel categories so you can see the difference.",
        ],
      },
      {
        h: "Luxury honeymoon ideas",
        list: [
          "A deluxe heritage houseboat on Nigeen Lake and a lake-view suite above Dal Lake in Srinagar.",
          "A palace hotel on Lake Pichola in Udaipur, with a private boat ride at sunset.",
          "A private pool villa in Havelock or a beach resort on Neil Island in the Andamans.",
          "An overwater villa in the Maldives reached by seaplane.",
          "A cliff-top villa in Uluwatu or a jungle villa in Ubud in Bali.",
          "A luxury tented camp in the dunes near Jaisalmer, or a private houseboat on the Kerala backwaters.",
        ],
      },
    ],
    faqs: [{ q: "How can we save money on a honeymoon package?", a: "Travel in the shoulder season, choose one destination with a direct flight, stay in well-located 3-star hotels with one special splurge, and compare quotes from several agents." }],
  },
};
