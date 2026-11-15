// Second layer for the Kashmir pages (2026-11-15): plans for different
// travellers, getting there, common mistakes and extra questions.

import type { PageDepthEntry } from "./index";

const GETTING_THERE =
  "Srinagar airport (SXR) has direct flights from Delhi (about 1.5 hours), Mumbai, Bengaluru, Hyderabad, Kolkata, Ahmedabad, Chandigarh, Amritsar, Jammu and Leh, and one-stop connections from most other cities. By rail, trains from across India reach Jammu Tawi and Shri Mata Vaishno Devi Katra, and the Vande Bharat trains that started in June 2025 run from Katra to Srinagar in about 3 hours. By road, Jammu to Srinagar on NH44 is about 250 km and 7 to 8 hours through the Banihal tunnel.";

const SECURITY =
  "Srinagar airport has a security check at the outer gate, where vehicles stop and bags are screened, and another inside the terminal. In peak season the queue at the gate can be long, so plan to reach the airport two to three hours before departure, and do not book a tight connection in Delhi on the way home.";

export const KASHMIR_PAGE_DEPTH_2: Record<string, PageDepthEntry> = {
  "/tour-packages/kashmir/3-nights-4-days": {
    sections: [
      {
        h: "3 nights 4 days plans for different travellers",
        list: [
          "Honeymoon: houseboat 1N and Srinagar 1N, then Gulmarg 1N. Sunset shikara on day 1, Mughal gardens on day 2, the gondola on day 3 and a slow morning in Gulmarg before the airport.",
          "Family with young children: Srinagar 3N in one hotel, with a Gulmarg day trip and a gentle Srinagar day of gardens and a shikara. Skip Sonamarg to keep drives short.",
          "Winter snow: Srinagar 1N and Gulmarg 2N from about late December to March, with sledging, a beginner ski lesson and the gondola on whichever morning is clearest.",
          "Tulip season: Srinagar 3N from about late March to mid-April, with the Tulip Garden, Badamwari's almond blossom, Nishat Bagh and a Gulmarg or Doodhpathri day trip.",
        ],
      },
      { h: "Getting to Srinagar", p: [GETTING_THERE, SECURITY] },
      {
        h: "Common mistakes on a short Kashmir trip",
        list: [
          "Trying to see Gulmarg, Pahalgam and Sonamarg in four days, which means about 12 hours in a car.",
          "Booking an afternoon arrival and a morning departure, which leaves two real days.",
          "Not booking gondola tickets ahead in peak weeks.",
          "Assuming the package cab can drive to Aru and Betaab; only Pahalgam union taxis can.",
        ],
      },
    ],
    faqs: [
      { q: "Can I do a 3 nights 4 days Kashmir trip from Delhi by train?", a: "Yes. Take an overnight train to Jammu or Katra, then the Vande Bharat to Srinagar or a cab on NH44. It uses part of a day each way, so flying is easier on a short trip." },
    ],
  },

  "/tour-packages/kashmir/4-nights-5-days": {
    sections: [
      {
        h: "4 nights 5 days plans for different travellers",
        list: [
          "Honeymoon: houseboat 1N, Gulmarg 1N and Pahalgam 2N. The houseboat night comes first while you have energy for the lake; the trip ends by the Lidder river.",
          "Family: Srinagar 2N and Pahalgam 2N, with Gulmarg as a day trip. One hotel change, short drives, and Pahalgam's riverside for children and grandparents.",
          "Friends and groups: Srinagar 2N, Gulmarg 1N and Pahalgam 1N, with an ATV ride in Gulmarg and rafting on the Lidder near Yanner in season, in a tempo traveller for six or more.",
          "Winter: Srinagar 1N, Gulmarg 2N and Srinagar 1N, with Pahalgam as a long day trip if roads are clear. Snow sports and sledging in Gulmarg; heated rooms throughout.",
          "Vaishno Devi add-on: Katra 1N for the darshan, then the Vande Bharat to Srinagar and 3 nights in Kashmir. Tight but popular; 5 or 6 nights is easier.",
        ],
      },
      { h: "Getting there and back", p: [GETTING_THERE, SECURITY] },
      {
        h: "Packing for a 5-day Kashmir trip",
        list: [
          "Summer (May to August): light cottons for Srinagar, a fleece or light jacket for Gulmarg, Pahalgam and evenings on the lake, walking shoes and sunscreen.",
          "Spring and autumn (March, April, September to November): layers, a warm jacket, a woollen cap for mornings, and a scarf for chilly shikara rides.",
          "Winter (December to February): thermals, a down jacket, waterproof boots, gloves and sunglasses for snow glare. Snow boots and long coats can be rented in Gulmarg.",
          "Every season: original photo ID for each traveller, some cash for shikaras, ponies and union taxis, and a postpaid SIM.",
        ],
      },
      {
        h: "Common mistakes on a 4 nights 5 days trip",
        list: [
          "Putting Pahalgam on the last night with a morning flight, which means leaving at dawn for a 3-hour drive.",
          "Choosing a hotel on the city outskirts to save money and losing an hour every day in traffic.",
          "Not checking whether the quote includes a shikara, the decorated room on honeymoon trips, and which meals are included.",
          "Leaving gondola tickets until you reach Gulmarg in June or December.",
        ],
      },
    ],
    faqs: [
      { q: "Is it better to stay in Srinagar or on a houseboat?", a: "Both, ideally: one night on a houseboat for the experience and the rest in a hotel for space and convenience. Families with small children often prefer hotels." },
      { q: "Can I do Sonamarg instead of Pahalgam on a 4 nights 5 days trip?", a: "Yes, especially from June to October when Zero Point is open. Sonamarg works as a day trip or a night stay, and Pahalgam can be skipped or done as a long day trip." },
    ],
  },

  "/tour-packages/kashmir/5-nights-6-days": {
    sections: [
      {
        h: "5 nights 6 days plans for different travellers",
        list: [
          "Honeymoon: houseboat 1N, Srinagar 1N, Gulmarg 1N and Pahalgam 2N, with a candle-light dinner in Pahalgam and a sunset shikara on the first evening.",
          "Family: Srinagar 3N with Gulmarg and Sonamarg as day trips, then Pahalgam 2N. Only one hotel change, and ponies or the gondola for the higher points.",
          "Senior citizens: Srinagar 3N and Pahalgam 2N, with ground-floor rooms, an SUV, the Gulmarg Gondola instead of long walks, and no day longer than about 3 hours of driving.",
          "Winter snow: Srinagar 2N, Gulmarg 2N and Pahalgam 1N, with skiing or sledging in Gulmarg and the snowy pine forests of Pahalgam.",
          "Offbeat: Srinagar 4N with day trips to Gulmarg, Doodhpathri and Yusmarg, and Pahalgam 1N, for quieter meadows away from the crowds.",
        ],
      },
      { h: "Getting there and back", p: [GETTING_THERE, SECURITY] },
      {
        h: "How to read a 5 nights 6 days quote",
        list: [
          "Hotel names for each night, the room type, and whether the houseboat is deluxe or standard category.",
          "Meal plan: breakfast and dinner (MAP) is standard; check whether lunches are included anywhere.",
          "Cab type: a sedan for two, an SUV for four, a tempo traveller for six or more, and whether the cab is with you every day.",
          "Which day trips are included: Gulmarg, Sonamarg, Doodhpathri, and whether Zero Point taxis or Pahalgam union taxis are mentioned.",
          "Honeymoon or family extras, written out.",
          "The payment schedule and cancellation terms.",
        ],
      },
      {
        h: "Common mistakes on a 6-day trip",
        list: [
          "Doing Sonamarg and Gulmarg day trips back to back in July, when yatra convoys slow the Sonamarg road; keep a gap day.",
          "Ending in Pahalgam with an early flight.",
          "Booking the houseboat for the last night before a dawn flight; the shikara to shore and the airport drive take time.",
          "Ignoring the weather: keep one flexible day for the gondola in case Phase 2 is closed.",
        ],
      },
    ],
    faqs: [
      { q: "How many hotel changes are there on a 5 nights 6 days Kashmir trip?", a: "One to three, depending on the plan. The Srinagar 3N and Pahalgam 2N plan has one change; a Gulmarg night and a houseboat night add two more." },
      { q: "Can I include the Tulip Garden on a 6-day trip?", a: "Yes, if you travel from about late March to mid-April, when the garden is open. It takes half a day in Srinagar." },
    ],
  },

  "/tour-packages/kashmir/6-nights-7-days": {
    sections: [
      {
        h: "6 nights 7 days plans for different travellers",
        list: [
          "Honeymoon: houseboat 1N, Srinagar 1N, Gulmarg 2N and Pahalgam 2N. Two nights in Gulmarg give a slow morning on the meadow and a second chance at Apharwat.",
          "Family with grandparents: Srinagar 4N in one hotel with day trips to Gulmarg, Doodhpathri and Sonamarg, then Pahalgam 2N. One hotel change in a week.",
          "Friends: Srinagar 2N, Sonamarg 1N, Gulmarg 1N and Pahalgam 2N, with Zero Point, ATV rides and rafting, in a tempo traveller.",
          "Winter: Srinagar 2N, Gulmarg 3N and Pahalgam 1N, for a full ski course or several days of snow.",
          "Pilgrim and valley: Katra 2N for Vaishno Devi, then the Vande Bharat to Srinagar, Srinagar 2N and Pahalgam 2N.",
        ],
      },
      { h: "Getting there and back", p: [GETTING_THERE, SECURITY] },
      {
        h: "Day trips that fit a week in Kashmir",
        list: [
          "Doodhpathri: about 42 km, 1.5 hours; open meadows and the Shaliganga stream.",
          "Yusmarg: about 47 km; pine forest, Nilnag Lake and the Charar-e-Sharief shrine on the way.",
          "Sonamarg: about 80 km, 2.5 to 3 hours; Thajiwas Glacier and, from June, Zero Point.",
          "Gulmarg: about 50 km, 1.5 to 2 hours; the gondola and the meadow.",
          "Wular Lake and Manasbal Lake: north of Srinagar, quiet lakes with lotus in summer.",
        ],
      },
      {
        h: "Common mistakes on a week-long trip",
        list: [
          "Changing hotels every night; one or two bases with day trips is more restful.",
          "Leaving Zero Point to the last Sonamarg day: if Zojila is closed that day, you miss it.",
          "Not allowing for yatra traffic in July and August on the Pahalgam and Sonamarg roads.",
        ],
      },
    ],
    faqs: [
      { q: "Can we stay 2 nights in Gulmarg on a 7-day trip?", a: "Yes. It suits honeymoons and winter trips, and gives a second chance at the gondola's Phase 2 if the weather closes it on the first day." },
      { q: "Is a 6 nights 7 days Kashmir trip good for senior citizens?", a: "Yes, it is one of the best lengths for them. Fewer hotel changes, shorter driving days and a rest morning make the trip comfortable." },
    ],
  },

  "/tour-packages/gulmarg": {
    sections: [
      {
        h: "Things to do in Gulmarg beyond the gondola",
        list: [
          "Walk or ride a pony to Khilanmarg, about 6 km, for views to Nanga Parbat on clear days.",
          "Visit St. Mary's Church (1902) and the Maharani Temple (1915) on the meadow.",
          "Play a round on the Gulmarg golf course, one of the highest in the world, from about May to October.",
          "Trek from Kongdoori towards Alpather Lake with a guide from about late June, when the snow has cleared.",
          "In winter, take a beginner ski lesson with a certified instructor or a sledge ride on the meadow.",
        ],
      },
    ],
    faqs: [
      { q: "Can I ski in Gulmarg as a beginner?", a: "Yes. Beginners learn on the gentle slopes near the gondola base and at Kongdoori with a certified instructor, from about mid-December to March." },
    ],
  },

  "/tour-packages/doodhpathri": {
    sections: [
      {
        h: "Getting to Doodhpathri",
        p: [
          "From Srinagar, the road runs south-west through Budgam town and Khansahib, then climbs through forest to the meadow. It is about 42 km and 1.5 hours in a private cab, slower after rain on the last forest stretch. There is no public bus that suits a day trip, so it is always done in your package cab or a hired taxi. Leave Srinagar by about 9 am to have four or five hours on the meadow and be back before dark.",
        ],
      },
      {
        h: "Doodhpathri plans for different travellers",
        list: [
          "Families: a half-day on the flat meadow by the stream, a short pony ride for children over about five, and a picnic. Combine with a gentle Srinagar afternoon.",
          "Couples: a quieter alternative to Gulmarg for photographs, especially in October when the grass turns gold.",
          "Photographers: early morning light on the Shaliganga and the forest edge, and herders moving flocks in summer.",
          "Friends: a pony ride to the upper meadows and a long walk along the stream.",
        ],
      },
      {
        h: "What to pack for Doodhpathri",
        list: [
          "Water and a packed lunch or snacks; eateries are few and simple.",
          "A warm layer and a light rain jacket; showers are common in July and August.",
          "Comfortable shoes for wet grass and stones by the stream.",
          "Sunscreen and sunglasses; the sun is strong at 2,730 m.",
          "Cash for the entry fee and ponies.",
        ],
      },
    ],
    faqs: [
      { q: "Is there snow in Doodhpathri?", a: "Yes, in winter, but snow usually closes the road from about December to March, so Doodhpathri is visited from April to November." },
    ],
  },

  "/tour-packages/gurez": {
    sections: [
      {
        h: "Gurez Valley highlights",
        list: [
          "Dawar, the main village, with its log-and-timber houses, the market and views of Habba Khatoon peak.",
          "Habba Khatoon spring at the base of the peak, named after the 16th-century Kashmiri poet queen.",
          "The Kishanganga river, which runs the length of the valley.",
          "Tulail valley, upstream of Dawar, with villages such as Badwan and Chakwali, when access is allowed that day.",
          "Razdan Pass at about 3,300 m, with views back over the Kashmir valley and Wular Lake.",
          "Wular Lake near Bandipora on the way, one of the largest freshwater lakes in Asia.",
        ],
      },
      {
        h: "Shorter Gurez plans",
        list: [
          "4 nights 5 days: Srinagar 1N, Gurez 2N and Srinagar 1N, with Dal Lake on the first evening and a Srinagar morning before the flight.",
          "5 nights 6 days: Srinagar 2N, Gurez 2N and Srinagar 1N, adding the Mughal gardens and a Gulmarg day trip.",
          "6 nights 7 days: Srinagar 2N, Gurez 2N, Srinagar 1N and Gulmarg 1N.",
        ],
      },
      {
        h: "Best time to visit Gurez",
        p: [
          "June to September is the best time, with green meadows, open roads and pleasant days. Late May and October are possible if Razdan Pass is open, with cooler nights and autumn colour in October. From about November, snow closes the pass and the valley is cut off by road for months.",
        ],
      },
      {
        h: "What to pack for Gurez",
        list: [
          "Original photo ID for every traveller, plus photocopies.",
          "Cash for the whole stay.",
          "A power bank and a torch; electricity is limited.",
          "Warm layers for cold nights even in summer.",
          "Motion-sickness tablets if you need them for the mountain road.",
        ],
      },
    ],
    faqs: [
      { q: "Can foreigners visit Gurez?", a: "No. Gurez is a restricted border area open to Indian nationals only." },
      { q: "Is Gurez safe for tourists?", a: "Indian tourists visit every summer. Follow the instructions at check posts, carry ID and avoid photographing army installations." },
    ],
  },
};
