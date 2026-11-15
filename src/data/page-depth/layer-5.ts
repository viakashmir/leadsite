// Fifth layer (2026-11-15): margin above the TDI bar on every page.

import type { PageDepthEntry } from "./index";

const LADAKH_RESPONSIBLE = [
  "Carry a refillable bottle: Leh has water refill points in many cafes and shops, which saves thousands of plastic bottles every season.",
  "Use the dry toilets in homestays as shown; water is scarce in Ladakh.",
  "Walk clockwise around chortens and mani walls, and do not touch religious objects in monasteries.",
  "Ask before photographing people, especially in villages and at prayers.",
  "Stay on existing tracks with vehicles; the high desert takes decades to recover from tyre marks.",
  "Bring your batteries and plastic waste back to Leh or home.",
];

export const LAYER_5: Record<string, PageDepthEntry> = {
  "/tour-packages/gulmarg": {
    sections: [],
    faqs: [{ q: "Is Gulmarg open in winter?", a: "Yes. Gulmarg is Kashmir's winter sports resort and stays open all winter, though the road from Tangmarg can need snow chains or a 4x4 after fresh snow." }],
  },
  "/tour-packages/kashmir/6-nights-7-days": {
    sections: [],
    faqs: [{ q: "Can we add a houseboat to a 6 nights 7 days package?", a: "Yes. Swap one Srinagar hotel night for a houseboat on Dal or Nigeen Lake; most agents do this at little or no extra cost for standard boats." }],
  },
  "/tour-packages/doodhpathri": {
    sections: [],
    faqs: [
      { q: "Can we see Doodhpathri on a 4 nights 5 days package?", a: "Yes, by replacing one day trip, usually Sonamarg in spring or autumn when its high points are closed." },
      { q: "Are ponies at Doodhpathri safe for children?", a: "Ponies are led by their handlers at a walking pace. Agree the route and rate first, and keep small children on a parent's lap or walking." },
    ],
  },
  "/tour-packages/gurez": {
    sections: [],
    faqs: [
      { q: "Is the road to Gurez difficult?", a: "It is paved most of the way but narrow, with tight bends over Razdan Pass. It is fine in a good cab with an experienced driver; avoid driving after dark." },
      { q: "Can we combine Gurez with Gulmarg and Pahalgam?", a: "Yes, on an 8 nights 9 days plan: Srinagar, Gurez 2 nights, a Gulmarg day trip and Pahalgam 2 nights." },
    ],
  },
  "/tour-packages/kargil": {
    sections: [],
    faqs: [
      { q: "Is the Srinagar to Leh road scenic?", a: "Yes. Sonamarg, Zojila, Drass, Mulbekh and Lamayuru make it one of the most varied mountain drives in India." },
      { q: "How long does Srinagar to Leh take by road?", a: "Two days, about 420 km, with a night in Kargil. Driving it in one day is possible but very tiring." },
    ],
  },
  "/tour-packages/ladakh/4-nights-5-days": {
    sections: [],
    faqs: [
      { q: "Is Ladakh cold in summer?", a: "Days in Leh are warm in July and August, around 24 to 28°C in the sun, but nights are cool and Pangong drops close to freezing. Pack warm layers." },
      { q: "Can we see Magnetic Hill on a short trip?", a: "Yes, on the Sham valley day with the Hall of Fame, Gurudwara Pathar Sahib and the Indus and Zanskar confluence." },
    ],
  },
  "/tour-packages/ladakh/5-nights-6-days": {
    sections: [{ h: "Travelling responsibly in Ladakh", list: LADAKH_RESPONSIBLE }],
    faqs: [],
  },
  "/tour-packages/ladakh/8-nights-9-days": {
    sections: [{ h: "Travelling responsibly in Ladakh", list: LADAKH_RESPONSIBLE }],
    faqs: [
      { q: "Is September a good month for an 8-night Ladakh trip?", a: "Yes, one of the best. Skies are clear, crowds are thinner and all circuits are normally open, though nights are colder by the end of the month." },
    ],
  },
  "/tour-packages/tso-moriri": {
    sections: [{ h: "Travelling responsibly in Ladakh", list: LADAKH_RESPONSIBLE }],
    faqs: [],
  },
  "/tour-packages/tso-moriri/4-nights-5-days": {
    sections: [{ h: "Travelling responsibly on the Changthang", list: LADAKH_RESPONSIBLE }],
    faqs: [
      { q: "How do we reach Leh for a Tso Moriri trip?", a: "By direct flight from Delhi (about 1 hour 15 minutes) all year, or by road from Manali or Srinagar in two days during the summer season." },
      { q: "Is Tso Moriri open in October?", a: "Usually in early October, with very cold nights. Many homestays close later in the month as the season ends." },
    ],
  },
  "/tour-packages/zanskar": {
    sections: [{ h: "Travelling responsibly in Zanskar", list: LADAKH_RESPONSIBLE }],
    faqs: [
      { q: "Is Zanskar more remote than Nubra or Pangong?", a: "Yes. It has fewer hotels, very limited mobile coverage and longer drives, which is a large part of its appeal." },
      { q: "What is the Drang Drung glacier?", a: "One of the largest glaciers in Ladakh outside the Siachen region, seen from the road just beyond Pensi La on the way to Padum." },
    ],
  },
  "/honeymoon-packages": {
    sections: [
      {
        h: "Honeymoon in the hills versus abroad: what really changes",
        p: [
          "An Indian hill honeymoon usually means more time on the road and simpler hotels outside the big towns, but shorter flights, no visas and food you know. An international beach honeymoon usually means one resort, little travel once you arrive, and more planning for visas, currency and documents. Both can be excellent; the right one depends on whether you want to explore or to rest.",
          "Many couples who cannot decide take a shorter Indian trip now, such as Kashmir or Kerala, and plan an international trip for their first anniversary.",
        ],
      },
    ],
    faqs: [
      { q: "Which is the best honeymoon destination in North East India?", a: "Sikkim for monasteries and mountain lakes, Darjeeling for tea gardens, and Meghalaya for waterfalls and living root bridges. March to June and October to December are best." },
      { q: "Is Goa good for a honeymoon?", a: "Yes, from November to February. North Goa is lively, South Goa quieter with better resorts for couples." },
    ],
  },
};

// Last questions for the pages with the thinnest margin.
export const LAYER_6: Record<string, PageDepthEntry> = {
  "/tour-packages/kashmir": {
    sections: [],
    faqs: [{ q: "Are there Kashmir tour packages by city of departure?", a: "Yes. This page links Kashmir packages from major Indian cities such as Delhi, Mumbai, Bengaluru, Kolkata and Chennai, each with flight or train options, how many nights fit and sample plans." }],
  },
  "/honeymoon-packages": {
    sections: [],
    faqs: [
      { q: "Is Kerala good for a honeymoon in the monsoon?", a: "It can be, for couples who like rain and green hills: Munnar and the backwaters are beautiful and quiet from June to August, though beaches are rough and some activities stop. Hotels are cheaper in these months." },
      { q: "Which is better for a honeymoon, Kashmir or Himachal?", a: "Kashmir for houseboats, shikaras, the Gulmarg Gondola and Pahalgam's valleys; Himachal for Manali's adventure, Shimla's colonial charm and easier road access from Delhi and Chandigarh. Both have snow in winter." },
      { q: "Which honeymoon destinations need no visa for Indians?", a: "Every Indian destination, plus Nepal and Bhutan by road or air. Mauritius, the Maldives and several others give Indians a visa on arrival or visa-free entry; rules change, so check before booking." },
      { q: "Can we book flights with a honeymoon package?", a: "Yes. Ask the agents to include flights in the quote, or book them yourself and share the timings so the transfers match." },
    ],
  },
  "/tour-packages/tso-moriri/4-nights-5-days": {
    sections: [],
    faqs: [
      { q: "Which is the best route back from Tso Moriri?", a: "Via Tso Kar and Taglang La for more scenery and wildlife, or back through Chumathang for a shorter, familiar road. Both take about 6 to 7 hours." },
      { q: "What should we eat at Korzok?", a: "Homestays serve thukpa, momos, dal and rice, with butter tea and fresh bread. Carry snacks for the long drive." },
      { q: "Can we see black-necked cranes at Tso Moriri?", a: "Sometimes, in summer, in the marshes of the Changthang. They are rare and protected, so watch from a distance." },
    ],
  },
  "/tour-packages/zanskar": {
    sections: [],
    faqs: [
      { q: "How high is Pensi La?", a: "About 4,400 m, the pass between the Suru valley and Zanskar, with views of the Drang Drung glacier just beyond it." },
      { q: "Is Padum the best base in Zanskar?", a: "Yes. It has the most guesthouses and restaurants, and Karsha, Sani, Stongde and Zangla are within an easy drive." },
      { q: "Can we see Zanskar and Kargil on one trip?", a: "Yes. Every road trip to Zanskar passes through Kargil, and most plans spend a night there in each direction." },
    ],
  },
  "/tour-packages/ladakh/8-nights-9-days": {
    sections: [],
    faqs: [
      { q: "How many nights in Leh should an 8-night Ladakh trip have?", a: "Usually 3 or 4: two at the start to acclimatise, and one or two between circuits or before the flight." },
      { q: "Can we include Hanle on an 8 nights 9 days trip?", a: "Yes, in place of Turtuk, with a night at Hanle between Pangong and Tso Moriri or on the way to Tso Moriri from Leh." },
    ],
  },
  "/tour-packages/tso-moriri": {
    sections: [],
    faqs: [{ q: "How long is the drive from Leh to Tso Moriri?", a: "About 6 to 7 hours for 220 to 240 km, via Upshi, Chumathang's hot springs and Mahe bridge." }],
  },
  "/tour-packages/doodhpathri": {
    sections: [],
    faqs: [{ q: "Can we visit Doodhpathri in October?", a: "Yes, and it is one of the best months: the grass turns golden, skies are clear and there are very few visitors. Carry a warm layer." }],
  },
  "/tour-packages/gurez": {
    sections: [],
    faqs: [{ q: "Is there an ATM in Gurez?", a: "There are very few, and they are not reliable. Carry enough cash from Srinagar or Bandipora for the whole stay." }],
  },
  "/tour-packages/kargil": {
    sections: [],
    faqs: [{ q: "Is Kargil safe for tourists?", a: "Kargil is a busy town on the main highway, visited by thousands of travellers every summer. Follow local advice near the Line of Control." }],
  },
};
