// Second layer for the Ladakh pages (2026-11-15).

import type { PageDepthEntry } from "./index";

const GETTING_TO_LEH =
  "Leh's Kushok Bakula Rimpochee airport (IXL) has direct flights from Delhi (about 1 hour 15 minutes) all year, and in season from Mumbai, Bengaluru, Srinagar, Jammu and Chandigarh. The approach over the Himalaya is one of the most spectacular flights in the world; sit on the left side from Delhi for the best views. By road, the Srinagar to Leh highway (about 420 km, two days with a night in Kargil) is usually open from about April or May to November, and the Manali to Leh highway (about 430 km, two days with a night at Sarchu or Jispa) from about June to October.";

const PACKING =
  "Pack layers for days that can be warm in the sun and nights near freezing: thermals, a fleece, a down or padded jacket, a woollen cap and gloves, even in July. Add sunglasses with UV protection, high-SPF sunscreen, lip balm, a refillable water bottle, any prescription medicines, and a basic first-aid kit with something for headaches. Shoes with good grip matter more than hiking boots for most packages. Carry printed copies of your permits and ID, cash for beyond Leh, and a power bank, as camps may have electricity only in the evening.";

const COSTS =
  "Costs paid on the ground and usually not in the package: monastery and palace entry tickets, the Hall of Fame museum, camel and ATV rides at Hunder, rafting on the Indus or Zanskar, river crossings and hot springs at Chumathang, tips for drivers and camp staff, and oxygen cylinders if anyone needs them. Fuel, tolls and the driver's stay are part of the taxi rate.";

const HEALTH =
  "Altitude sickness is the most common problem in Ladakh and is largely preventable. Most travellers feel a mild headache or shortness of breath for the first day or two, which passes with rest and water. Serious symptoms, such as a severe headache, vomiting, confusion, breathlessness at rest or a wet cough, mean you must descend and get medical help: Leh has a district hospital, and larger hotels keep oxygen. Some doctors prescribe acetazolamide (Diamox) for prevention; take it only on medical advice. Travel insurance that covers high altitude and evacuation is worth having.";

export const LADAKH_PAGE_DEPTH_2: Record<string, PageDepthEntry> = {
  "/tour-packages/ladakh/4-nights-5-days": {
    sections: [
      { h: "Getting to Leh", p: [GETTING_TO_LEH] },
      { h: "Health at altitude", p: [HEALTH] },
      {
        h: "Short Ladakh plans for different travellers",
        list: [
          "Couples: Leh 2N, Pangong 1N in a lake-side camp, Leh 1N. Sunrise and sunset at the lake are the highlights.",
          "Families with older parents: Leh 2N, Nubra 1N in Hunder (lower than Leh, so the night is easier), Leh 1N.",
          "Monastery lovers: Leh 4N with day trips to Thiksey, Hemis, Alchi, Likir and Lamayuru, and no high pass at all.",
          "Bikers: Leh 2N to acclimatise and rent a bike, then a one-night loop to Pangong or Nubra with a backup vehicle.",
        ],
      },
      { h: "What to pack for Ladakh", p: [PACKING] },
      { h: "Costs to budget for", p: [COSTS] },
      {
        h: "Leh sights for the acclimatisation days",
        list: [
          "Shanti Stupa: a white stupa above Changspa, best at sunset, reached by road or a long flight of steps.",
          "Leh Palace: a 17th-century, nine-storey palace built for King Sengge Namgyal, overlooking the old town.",
          "Thiksey Monastery: on a hill about 19 km from Leh, often compared to the Potala Palace, with a large Maitreya statue.",
          "Shey Palace: the old summer palace with a large seated Buddha.",
          "Hall of Fame: a museum on the airport road honouring soldiers who served in Ladakh.",
          "Leh market and the old town lanes, for apricots, pashmina, prayer flags and cafes.",
        ],
      },
    ],
    faqs: [
      { q: "Is Diamox necessary for Ladakh?", a: "Not for everyone. Some doctors prescribe it for prevention; take it only on medical advice. Rest, water and a slow start matter most." },
      { q: "Can I go to Khardung La on a 4-night trip?", a: "Yes, on day 3 as part of a Nubra trip or as a short trip to the top and back, after two full days in Leh." },
    ],
  },

  "/tour-packages/ladakh/5-nights-6-days": {
    sections: [
      { h: "Getting to Leh", p: [GETTING_TO_LEH] },
      { h: "Health at altitude", p: [HEALTH] },
      {
        h: "Nubra Valley in brief",
        p: [
          "Nubra lies north of Leh across Khardung La, where the Shyok and Nubra rivers meet in a wide valley at about 3,100 m. Diskit Monastery, the oldest in the valley, has a 32 m Maitreya Buddha facing the Shyok. The sand dunes between Diskit and Hunder are home to double-humped Bactrian camels, a reminder of the old Silk Route caravans. Further west, the road continues to Turtuk, a Balti village near the Line of Control. Nubra is greener and lower than Leh, with apricot and apple orchards, and its camps are the most comfortable outside Leh.",
        ],
      },
      {
        h: "Pangong Tso in brief",
        p: [
          "Pangong is a long, narrow lake at about 4,225 m on the border with Tibet, about 134 km long, with roughly a third of it in India. Its colour shifts from turquoise to deep blue to grey with the light and clouds. Camps line the shore at Spangmik, Lukung and Man-Merak. Sunrise is the time to be at the water; by afternoon the wind picks up and it turns very cold. The lake begins to freeze in December and is solid ice by January.",
        ],
      },
      {
        h: "Variations on the 5-night plan",
        list: [
          "Return via Leh instead of the Shyok road: Leh 2N, Nubra 1N, Leh 1N, Pangong 1N. Same length, easier road, more driving over Khardung La.",
          "Turtuk added: Leh 2N, Nubra 2N with a Turtuk day, Leh 1N, skipping Pangong.",
          "Gentler: Leh 3N, Nubra 1N, Leh 1N, for older travellers, skipping Pangong.",
          "Lakes: Leh 2N, Pangong 1N, Leh 1N, Tso Moriri 1N; long drives, for travellers comfortable at altitude.",
        ],
      },
      { h: "What to pack", p: [PACKING] },
      { h: "Costs to budget for", p: [COSTS] },
    ],
    faqs: [
      { q: "Is Nubra or Pangong better?", a: "Nubra for dunes, camels, Diskit and a milder night; Pangong for the famous lake. On 5 nights you can see both." },
      { q: "Can I see Turtuk on a 5 nights 6 days trip?", a: "Only by skipping Pangong or adding a night. Turtuk is about 90 km beyond Hunder." },
    ],
  },

  "/tour-packages/ladakh/8-nights-9-days": {
    sections: [
      { h: "Getting to Leh", p: [GETTING_TO_LEH] },
      { h: "Health at altitude", p: [HEALTH] },
      {
        h: "Monasteries worth a day of the trip",
        list: [
          "Hemis: the largest and richest monastery in Ladakh, about 45 km from Leh, home of the Hemis festival in June or July.",
          "Thiksey: a 12-storey complex on a hill, best at the morning prayer.",
          "Alchi: 11th-century temples with some of the oldest surviving murals in the Himalaya, about 65 km west of Leh.",
          "Likir: a hilltop monastery with a large golden Maitreya, on the way to Alchi.",
          "Lamayuru: one of the oldest monasteries in Ladakh, above the eroded moonland, about 125 km west of Leh.",
          "Diskit: in Nubra, with its 32 m Maitreya Buddha.",
          "Korzok: the small monastery above Tso Moriri.",
        ],
      },
      {
        h: "Turtuk in brief",
        p: [
          "Turtuk is a Balti village at about 2,900 m on the Shyok river near the Line of Control, the last village before the border. It was opened to tourists in 2010. Its stone houses, apricot orchards, a small museum in the old royal house and a friendly, Balti-speaking community make it very different from the rest of Ladakh. It is about 90 km from Hunder, so it can be a long day trip or an overnight stay in a homestay.",
        ],
      },
      {
        h: "Variations on 8 nights",
        list: [
          "With Hanle instead of Turtuk: Leh 3N, Nubra 1N, Pangong 1N, Hanle 1N, Tso Moriri 1N and Leh 1N, for stargazing at the Dark Sky Reserve.",
          "With Sham valley trek: Leh 3N with a two-day village walk between Likir and Temisgam, then Nubra and Pangong.",
          "Road trip in: fly to Srinagar, drive to Kargil 1N and Leh, then the Leh loop, flying out of Leh.",
          "Road trip out: fly to Leh, do the loop, and drive out to Manali over two days with a night at Jispa or Sarchu.",
        ],
      },
      {
        h: "Where the nights are spent and how high they are",
        list: [
          "Leh: about 3,500 m.",
          "Hunder and Diskit in Nubra: about 3,100 to 3,200 m.",
          "Turtuk: about 2,900 m.",
          "Pangong (Spangmik): about 4,225 m.",
          "Korzok, Tso Moriri: about 4,520 m.",
          "Hanle: about 4,500 m.",
        ],
      },
      { h: "What to pack", p: [PACKING] },
      { h: "Costs to budget for", p: [COSTS] },
      {
        h: "Festivals worth timing a trip for",
        list: [
          "Hemis Tsechu: masked dances at Hemis Monastery in June or July, dates set by the Tibetan calendar.",
          "Sindhu Darshan: on the banks of the Indus near Shey, usually in June.",
          "Ladakh Festival: cultural events in Leh and villages, usually in September.",
          "Losar: the Ladakhi new year in December or January, a winter festival.",
        ],
      },
    ],
    faqs: [
      { q: "Can we see Hemis festival on an 8-night trip?", a: "Yes, if your dates match. Hemis Tsechu is held in June or July on dates set by the Tibetan calendar; book early, as Leh fills up." },
      { q: "Is it better to see Pangong before or after Nubra?", a: "Either works. Many plans go Nubra first, because it is lower, then Pangong by the Shyok road." },
    ],
  },

  "/tour-packages/tso-moriri/4-nights-5-days": {
    sections: [
      { h: "Getting to Leh", p: [GETTING_TO_LEH] },
      { h: "Health at altitude", p: [HEALTH] },
      {
        h: "The road from Leh to Tso Moriri",
        p: [
          "The drive follows the Indus upstream past Thiksey and Upshi, where the Manali highway turns off, to Kiari and Chumathang, known for its hot springs. At Mahe bridge you cross the Indus and show your permits at the check post, then climb through Sumdo onto the plateau to Korzok. It is about 6 to 7 hours with stops. There are few places to eat after Chumathang, so drivers usually stop there for lunch.",
          "The return can retrace the route, or cross west to Tso Kar, a salt lake surrounded by grazing grounds, then climb over Taglang La at about 5,300 m to the Manali highway and down to Leh. That route is longer but shows more of the Changthang.",
        ],
      },
      {
        h: "Wildlife and birds on the Changthang",
        list: [
          "Kiang, the Tibetan wild ass, often seen in herds near Tso Kar and on the plains.",
          "Marmots near the roadside in summer, sunning outside their burrows.",
          "Bar-headed geese and brown-headed gulls on Tso Moriri in summer.",
          "Black-necked cranes, rare and protected, breeding in the marshes of the Changthang.",
          "Pashmina goats and yak in Changpa nomad camps.",
        ],
      },
      {
        h: "Variations on the plan",
        list: [
          "Tso Moriri and Tso Kar: Leh 2N, Tso Moriri 1N, Leh 1N, returning via Tso Kar.",
          "Tso Moriri and Hanle: Leh 2N, Hanle 1N, Tso Moriri 1N, Leh 1N, as a 5 nights 6 days plan.",
          "Tso Moriri and Pangong: Leh 2N, Pangong 1N, Leh 1N, Tso Moriri 1N, Leh 1N, as a 6 nights 7 days plan.",
          "Gentler: Leh 3N, Tso Moriri 1N, Leh 1N, for travellers who want an extra rest day first.",
        ],
      },
      { h: "What to pack", p: [PACKING] },
      { h: "Costs to budget for", p: [COSTS] },
      {
        h: "Leh sights for the first two days",
        list: [
          "Shanti Stupa at sunset.",
          "Leh Palace and the old town lanes below it.",
          "Thiksey and Shey in the Indus valley, on the way out of Leh.",
          "The Hall of Fame war museum.",
          "Leh main bazaar for dried apricots, woollens and cafes.",
        ],
      },
    ],
    faqs: [
      { q: "Are there hot springs on the way to Tso Moriri?", a: "Yes, at Chumathang on the Indus, a usual lunch stop on the drive." },
      { q: "How cold is Tso Moriri at night?", a: "Close to freezing even in July, and well below in June and September. Homestays provide heavy blankets." },
    ],
  },

  "/tour-packages/kargil": {
    sections: [
      { h: "Health and altitude on the Srinagar to Leh road", p: [HEALTH] },
      {
        h: "Kargil plans for different travellers",
        list: [
          "Road trip to Leh: Srinagar 1N, Kargil 1N, Leh 3N, Nubra 1N, Pangong 1N, Leh 1N, flying out of Leh.",
          "War memorial visit: Srinagar 1N, Sonamarg 1N, Drass and Kargil 1N, back to Srinagar.",
          "Suru valley: Kargil 2N with a day into the Suru valley for the Nun and Kun views, on the way to Zanskar or back to Srinagar.",
          "Bikers: Srinagar to Kargil to Leh on the classic western approach, before or after the Manali highway opens.",
        ],
      },
      {
        h: "The drive from Srinagar to Kargil",
        p: [
          "Leaving Srinagar, the road follows the Sindh valley to Sonamarg, then climbs over Zojila at about 3,500 m, a dramatic, unpaved stretch carved into the mountainside, into Ladakh. Beyond the pass, the landscape turns bare and brown. Drass, about 60 km before Kargil, has the Kargil War Memorial. Allow 7 to 8 hours with stops. Military convoys and road works can slow the Zojila section; drivers start early.",
        ],
      },
      {
        h: "The drive from Kargil to Leh",
        p: [
          "From Kargil the road crosses into the Buddhist part of Ladakh at Mulbekh, with its rock-carved Maitreya, then climbs over Namika La and Fotu La, the highest point on the highway at about 4,108 m, before dropping to Lamayuru. It follows the Indus past Khalatse and Nimmu, where the Zanskar joins it, to Leh. Allow 6 to 7 hours, plus time at Lamayuru and Alchi if you stop.",
        ],
      },
      { h: "What to pack", p: [PACKING] },
      { h: "Getting to and from Kargil", p: [GETTING_TO_LEH] },
    ],
    faqs: [
      { q: "When is Zojila open?", a: "Usually from about April or May to November or December, depending on snow. Check the road status before planning a road trip." },
      { q: "How high is Fotu La?", a: "About 4,108 m, the highest point on the Srinagar to Leh highway." },
      { q: "Can I fly to Kargil?", a: "Commercial flights to Kargil are rare. Most travellers fly to Srinagar or Leh and drive." },
    ],
  },

  "/tour-packages/tso-moriri": {
    sections: [
      { h: "Getting to Leh", p: [GETTING_TO_LEH] },
      { h: "Health at altitude", p: [HEALTH] },
      {
        h: "Tso Moriri plans for different travellers",
        list: [
          "Short: Leh 2N, Tso Moriri 1N, Leh 1N, flying in and out of Leh.",
          "With Hanle: Leh 2N, Hanle 1N, Tso Moriri 1N, Leh 1N, for stargazing and the lake together.",
          "Grand loop: Leh, Nubra, Pangong and Tso Moriri over 7 or 8 nights, with Tso Moriri last.",
          "Manali road trip: Manali to Leh over two days, Leh 2N, then Tso Moriri on the way back towards Tso Kar and the Manali highway.",
        ],
      },
      {
        h: "Korzok village",
        p: [
          "Korzok sits on the north-western shore of the lake and is one of the highest permanently inhabited villages in the world. Its monastery, belonging to the Drukpa lineage, is a short walk above the houses and has a small prayer hall with old paintings. In summer, the Changpa nomads who graze their flocks on the plateau come and go from the village, and the Korzok Gustor festival brings masked dances, usually in July or August, on dates set by the Tibetan calendar.",
        ],
      },
      { h: "What to pack", p: [PACKING] },
      { h: "Costs to budget for", p: [COSTS] },
    ],
    faqs: [
      { q: "How far is Tso Moriri from Pangong?", a: "There is a route via Chushul and the Changthang plateau when open, but most itineraries go back via Leh or Chumathang. Ask your agent which route is planned." },
      { q: "Is Tso Moriri a Ramsar site?", a: "Yes. It is protected as a Ramsar wetland for its high-altitude birdlife." },
    ],
  },

  "/tour-packages/zanskar": {
    sections: [
      { h: "Health and altitude in Zanskar", p: [HEALTH] },
      {
        h: "Shorter and longer Zanskar plans",
        list: [
          "10 nights: Srinagar 1N, Kargil 1N, Rangdum 1N, Padum 3N, Kargil 1N, Leh 3N.",
          "12 nights: as above with Phugtal, Stongde and Zangla, and a rest day in Padum.",
          "Rangdum only: Kargil 2N with a long day to Rangdum and the Pensi La viewpoint for the Drang Drung glacier, for travellers short on time.",
          "Trekkers: a Padum to Phugtal or Padum to Lamayuru trek with a local outfitter, which is a different trip from a tour package.",
        ],
      },
      {
        h: "The Suru valley on the way",
        p: [
          "South of Kargil, the Suru valley is green with fields and willow trees in summer, and the road passes Sankoo and Panikhar before the twin peaks of Nun (about 7,135 m) and Kun (about 7,077 m) come into view near Parkachik, where a glacier reaches almost to the road. Beyond, the valley opens into the high, empty basin of Rangdum, with its monastery on a hillock, the last stop before Pensi La.",
        ],
      },
      {
        h: "Padum and the central valley",
        p: [
          "Padum, the administrative centre of Zanskar, has a mixed Buddhist and Muslim population, a small bazaar, guesthouses and a few restaurants. Karsha Monastery faces it across the valley, and Sani, Stongde and Zangla are within an hour or two by road. The Zanskar river flows north from here through a deep gorge towards the Indus, the route of the winter Chadar trek.",
        ],
      },
      { h: "What to pack", p: [PACKING] },
      { h: "Getting to Leh and back", p: [GETTING_TO_LEH] },
      { h: "Costs to budget for", p: [COSTS] },
    ],
    faqs: [
      { q: "When is the best time to visit Zanskar?", a: "July to mid-September, when Pensi La is clear and the valley is green. June can still have snow at the pass; late September brings the first snow." },
      { q: "Can I see Phugtal Monastery on a tour package?", a: "Yes, if you are fit for a walk of a few hours each way from the road head. It is built into a cliff cave above the Tsarap river." },
      { q: "Where do you stay in Zanskar?", a: "In guesthouses and small hotels in Padum, camps at Rangdum, and homestays elsewhere. All are simple." },
    ],
  },
};
