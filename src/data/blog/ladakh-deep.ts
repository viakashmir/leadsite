import type { BlogPost } from "./types";

// Full-length Ladakh guides. Leh temperatures are IMD climate normals; permit
// rules and fees change, so posts send readers to the LAHDC Leh portal
// (lahdclehpermit.in). No em dashes, no invented prices.

export const LADAKH_DEEP: BlogPost[] = [
  {
    slug: "ladakh-permit-guide",
    title: "Ladakh Permit Guide: Inner Line Permit, Fees, How to Apply Online",
    description: "Ladakh permits explained: which places need registration, how Indians and foreigners apply on the LAHDC portal, the fees involved and what to carry.",
    category: "Planning",
    destination: "ladakh",
    city: "leh",
    date: "2026-11-01",
    intro:
      "Leh town needs no permit, but Ladakh's protected areas, including Nubra Valley, Pangong Tso, Tso Moriri, Hanle and the routes near the Line of Actual Control, need online registration and fees paid on the LAHDC Leh portal, lahdclehpermit.in. The fee covers an environmental (green) fee, a Red Cross fund contribution and a wildlife fee. Foreign nationals need a Protected Area Permit arranged through a registered travel agent. Rules have changed several times, so check the portal before you travel.",
    sections: [
      {
        h: "Which places need a permit in Ladakh?",
        list: [
          "Nubra Valley, including Diskit, Hunder and Turtuk, over Khardung La",
          "Pangong Tso via Chang La, and the Shyok road between Nubra and Pangong",
          "Tso Moriri and Tso Kar in the Changthang region",
          "Hanle and other areas near the Line of Actual Control",
          "Leh town, the Indus valley monasteries (Thiksey, Hemis, Shey) and Magnetic Hill do not need one",
        ],
      },
      {
        h: "Permits for Indian citizens",
        p: [
          "Indian citizens register online on the LAHDC portal with each traveller's ID, the areas to be visited and the dates, and pay the applicable fees. The 2021 order removed the old inner line permit requirement for Indians in several protected areas, but visitors still register and pay fees through the portal, and check posts verify them. Keep printed or digital copies of the registration and original ID for every traveller.",
        ],
      },
      {
        h: "Permits for foreign nationals",
        p: [
          "Foreign nationals need a Protected Area Permit (PAP) to visit the same areas. It is usually applied for through a registered travel agent in Leh, often for a minimum of two travellers, with passport and visa copies. Some nationalities face additional restrictions; check with the agent and the district administration in Leh before planning.",
        ],
      },
      {
        h: "How to apply online, step by step",
        list: [
          "Open the official LAHDC Leh permit portal, lahdclehpermit.in",
          "Enter details for every traveller, including ID numbers",
          "Select the protected areas you will visit and your travel dates",
          "Pay the fees online; the portal lists the current amounts",
          "Download and print the permit, or keep it on your phone, and carry the original IDs",
        ],
        p: ["Many hotels and local travel agents in Leh apply on your behalf; the portal notes a discount when permits are arranged through a local agent."],
      },
      {
        h: "What the permit fee includes",
        p: [
          "The permit fee is made up of an environmental or green fee used for conservation and waste management, a contribution to the Red Cross fund, and a wildlife protection fee charged per day in some areas. Amounts are revised from time to time, so rely on the figure shown on the portal at the time you apply rather than older blog posts.",
        ],
      },
      {
        h: "Validity and check posts",
        p: [
          "Permits are issued for the areas and dates you choose. Check posts on the routes to Nubra, Pangong and Tso Moriri verify them, so keep several printed copies, as some check posts keep one. If your plan changes, for example adding Tso Moriri, apply for the extra area before you set out.",
        ],
      },
      {
        h: "Permits on a road trip from Manali or Srinagar",
        p: [
          "The Manali to Leh and Srinagar to Leh highways themselves do not need a Ladakh protected area permit for Indian travellers. Vehicles entering Lahaul from Manali register on the separate, free e-Aagman portal. Apply for the Ladakh permit before you reach Leh, so you can go to Nubra or Pangong straight after acclimatising.",
        ],
      },
      {
        h: "Common mistakes",
        list: [
          "Assuming no registration is needed because the inner line permit rule changed",
          "Carrying only one copy of the permit",
          "Forgetting to add Tso Moriri or Hanle and being turned back",
          "Using old fee figures from blogs instead of the portal",
          "Foreign nationals planning to travel solo without checking PAP group rules",
        ],
      },
      {
        h: "Planning a Ladakh trip around permits",
        p: [
          "Apply for every protected area you might visit at once, so a change of plan in Leh does not cost you a day. A typical first trip registers for Nubra and Pangong; add Tso Moriri or Hanle if you have eight days or more. Agents on Tavel Package usually arrange permits as part of a Ladakh package.",
        ],
      },
    ],
    faqs: [
      { q: "Is the Ladakh permit fee charged per person?", a: "Yes. The environmental fee and Red Cross contribution are charged per traveller, and the wildlife fee per traveller per day in some areas. The portal calculates the total for your group and dates." },
      { q: "Can I get a Ladakh permit after reaching Leh?", a: "Yes. You can apply online from Leh or through a hotel or local agent, but applying before arrival saves time on your acclimatisation days." },
      { q: "Do Indians need an inner line permit for Ladakh?", a: "Leh town needs none. For Nubra, Pangong, Tso Moriri and other protected areas, Indian visitors register and pay fees on the LAHDC portal, lahdclehpermit.in. Check the portal for current rules." },
      { q: "How do I apply for a Ladakh permit online?", a: "On lahdclehpermit.in: enter each traveller's details, choose the areas and dates, pay online and download the permit. Hotels and local agents in Leh can also apply for you." },
      { q: "Is a permit needed for Pangong Lake?", a: "Yes. Pangong Tso is a protected area, so register and pay the fees on the LAHDC portal before you go." },
      { q: "Do foreigners need a permit for Ladakh?", a: "Yes. Foreign nationals need a Protected Area Permit for Nubra, Pangong, Tso Moriri and similar areas, usually arranged through a registered travel agent in Leh." },
      { q: "How many copies of the permit should I carry?", a: "Carry several printed copies plus a digital copy and your original IDs; some check posts keep a copy." },
      { q: "Do I need a permit for Khardung La?", a: "Khardung La is on the road to Nubra, which is a protected area, so register for Nubra on the LAHDC portal before crossing it." },
    ],
  },

  {
    slug: "pangong-lake-travel-guide",
    title: "Pangong Lake Travel Guide: How to Reach, Best Time, Stay and Tips",
    description: "Pangong Tso guide: the route from Leh over Chang La, travel time, where to stay at Spangmik or Merak, the best months, the frozen lake in winter and altitude tips.",
    category: "Adventure",
    destination: "ladakh",
    city: "pangong-lake",
    date: "2026-11-01",
    intro:
      "Pangong Tso is a high-altitude lake at about 4,225 m, about 160 km east of Leh over Chang La, stretching around 134 km into Tibet. Most travellers drive from Leh in 5 to 6 hours, stay one night in camps or homestays at Spangmik, Man or Merak, and return the next day or continue to Nubra along the Shyok road. The best months are May to September; from about January to March the lake freezes.",
    sections: [
      {
        h: "How to reach Pangong from Leh",
        p: [
          "The road leaves Leh through Karu on the Manali highway, climbs to Chang La at about 5,360 m, then descends past Durbuk and Tangtse to the lake at Lukung and Spangmik. It is about 160 km and takes 5 to 6 hours with stops. Leh taxi union cabs and self-drive vehicles both make the trip; register for Pangong on the LAHDC permit portal before you go.",
        ],
      },
      {
        h: "Pangong from Nubra via the Shyok road",
        p: [
          "From Nubra, a road runs along the Shyok river through Agham and Durbuk to Pangong, avoiding a return to Leh. It is a long day, and its condition varies with the season and river levels, so ask locally before choosing it. It allows a loop of Leh, Nubra, Pangong and back to Leh.",
        ],
      },
      {
        h: "Where to stay at Pangong",
        list: [
          "Lukung: the first stop by the lake, close to the viewpoints",
          "Spangmik: the main cluster of camps and cottages",
          "Man and Merak: quieter villages further along the shore with homestays",
          "All stays are seasonal and basic to mid-range; nights are cold even in summer",
        ],
      },
      {
        h: "Best time to visit Pangong",
        list: [
          "May to June: the lake thaws and camps reopen; nights are very cold",
          "July and August: the warmest months and most reliable roads",
          "September: clear skies and the best colours on the lake, with fewer visitors",
          "October to December: very cold, many camps close",
          "January to March: the lake freezes; winter visits are for prepared travellers",
        ],
      },
      {
        h: "Altitude and health at Pangong",
        p: [
          "Pangong is higher than Leh, and Chang La is one of the highest passes on the route. Spend at least two nights acclimatising in Leh before going, drink plenty of water, avoid alcohol, and do not stay long at the top of Chang La. Headache, nausea or breathlessness at night are signs of altitude sickness; descend if they worsen. Travellers with heart or lung conditions should take medical advice before staying overnight.",
        ],
      },
      {
        h: "Day trip or overnight?",
        p: [
          "A day trip from Leh means 10 to 12 hours of driving and little time at the lake. Staying one night lets you see sunset and sunrise, when the lake's colours change, and the clear night sky. Most itineraries include one night at Pangong.",
        ],
      },
      {
        h: "Things to do at Pangong",
        list: [
          "Watch the lake change colour through the day",
          "Walk along the shore at Spangmik or Merak",
          "Stargaze; the sky is exceptionally clear at night",
          "Photograph the lake from the Lukung viewpoints",
          "In winter, see the frozen lake with experienced local operators",
        ],
      },
      {
        h: "Practical tips",
        list: [
          "Carry warm layers, a down jacket, cap and gloves even in July",
          "Mobile coverage is limited; postpaid connections work best",
          "Carry cash; there are no ATMs at the lake",
          "Fill fuel in Leh; there are few pumps on the route",
          "Carry your plastic and waste back; the lake is ecologically fragile",
        ],
      },
      {
        h: "What a Pangong trip costs depends on",
        list: [
          "Leh taxi union rates for the Pangong route, or self-drive vehicle rental",
          "Camp or cottage category at Spangmik, Man or Merak",
          "Whether you return to Leh or continue to Nubra along the Shyok road",
          "The season: July and August are the busiest",
        ],
        p: ["Share your dates and group to compare up to 3 itemised Ladakh quotes on Tavel Package."],
      },
      {
        h: "Pangong for families and older travellers",
        p: [
          "Families with small children and older parents should acclimatise fully in Leh, choose a cottage with heating or extra blankets, and consider a shorter stay at the lake if anyone sleeps poorly at altitude. Keep Chang La stops brief, and carry snacks, water and warm layers for the long drive.",
        ],
      },
    ],
    faqs: [
      { q: "Where should I stay at Pangong, Spangmik or Merak?", a: "Spangmik has the most camps and is closer to the viewpoints; Merak and Man are quieter villages further along the shore with homestays. Choose Spangmik for convenience and Merak for quiet." },
      { q: "Why does Pangong change colour?", a: "The lake shifts between shades of blue, turquoise and green with the angle of the sun, the depth of the water and cloud cover, which is why sunrise and sunset stays are popular." },
      { q: "Which is better, Pangong or Tso Moriri?", a: "Pangong is closer to Leh with more places to stay; Tso Moriri is higher, more remote and quieter. With eight days or more, see both." },
      { q: "How far is Pangong Lake from Leh?", a: "About 160 km over Chang La, 5 to 6 hours by road." },
      { q: "Can I do Pangong as a day trip from Leh?", a: "It is possible but long, 10 to 12 hours of driving. Staying one night at Spangmik or Merak is far more comfortable." },
      { q: "Is Pangong Lake frozen in winter?", a: "Yes, usually from about January to March. Many camps close and nights are extremely cold." },
      { q: "What is the best month to visit Pangong?", a: "June to September, with July, August and September giving the most reliable weather and roads." },
      { q: "Do I need a permit for Pangong?", a: "Yes. Register and pay the fees on the LAHDC Leh portal, lahdclehpermit.in, before you go." },
      { q: "Is there mobile network at Pangong?", a: "Coverage is limited and patchy. Postpaid connections from major networks work best near Spangmik." },
    ],
  },

  {
    slug: "nubra-valley-travel-guide",
    title: "Nubra Valley Travel Guide: Khardung La, Hunder, Diskit and Turtuk",
    description: "Plan Nubra Valley from Leh: the drive over Khardung La, Diskit Monastery, the Hunder dunes and Bactrian camels, Turtuk village, where to stay and how many days.",
    category: "Adventure",
    destination: "ladakh",
    city: "nubra-valley",
    date: "2026-11-01",
    intro:
      "Nubra Valley lies about 120 km north of Leh across Khardung La, where the Shyok and Nubra rivers meet. Plan two nights: one at Hunder or Diskit for the sand dunes, Bactrian camels and Diskit Monastery, and one more to reach the Balti village of Turtuk or to continue to Pangong along the Shyok road. Nubra is a protected area, so register on the LAHDC permit portal before you go.",
    sections: [
      {
        h: "Leh to Nubra over Khardung La",
        p: [
          "The road climbs about 40 km from Leh to Khardung La, whose signboard claims 5,602 m though surveyed heights are around 5,350 m. Stops at the top should be short because of the altitude. The road then descends through North Pullu and Khalsar into the valley, reaching Diskit and Hunder in about 5 to 6 hours from Leh. The pass is kept open through most of the year but can close for hours or days after snow.",
        ],
      },
      {
        h: "Places to see in Nubra",
        list: [
          "Diskit Monastery and its large Maitreya Buddha statue overlooking the valley",
          "The Hunder sand dunes, with double-humped Bactrian camels for short rides",
          "Turtuk, a Balti village about 90 km beyond Diskit, opened to tourists in 2010",
          "Sumur and Panamik on the Nubra river side of the valley",
          "The confluence of the Shyok and Nubra rivers",
        ],
      },
      {
        h: "2-night Nubra plan",
        days: [
          "Leh to Hunder over Khardung La. Afternoon at the sand dunes and a camel ride at sunset.",
          "Diskit Monastery in the morning, then a day trip to Turtuk along the Shyok, back to Hunder.",
          "Return to Leh over Khardung La, or continue to Pangong along the Shyok road.",
        ],
      },
      {
        h: "Turtuk: the Balti village",
        p: [
          "Turtuk sits on the Shyok river close to the Line of Control and keeps a distinct Balti culture, with stone houses, apricot orchards and its own language. It was opened to tourists in 2010. Walk through the village, visit the small museum and the old royal house, and try local apricot products. Respect village customs and ask before photographing people.",
        ],
      },
      {
        h: "Where to stay in Nubra",
        p: [
          "Hunder has camps and guest houses near the dunes, and Diskit has hotels and homestays close to the monastery. Turtuk has simple homestays and guest houses. Most stays are seasonal; in winter only a few remain open.",
        ],
      },
      {
        h: "Best time to visit Nubra",
        list: [
          "May to September: all roads open and stays operating",
          "June to August: warmest days, busiest season",
          "September and October: clear and quieter, with golden colours",
          "November to April: very cold; Khardung La can close after snowfall",
        ],
      },
      {
        h: "Altitude and acclimatisation",
        p: [
          "Nubra itself is lower than Leh, at around 3,000 m to 3,200 m in Hunder and Diskit, but the drive crosses Khardung La. Spend at least two nights acclimatising in Leh before going, keep stops at the pass short, and drink plenty of water. Many travellers sleep better in Nubra than in Leh because of its lower altitude.",
        ],
      },
      {
        h: "Practical tips",
        list: [
          "Register for Nubra on lahdclehpermit.in before leaving Leh",
          "Carry several printed copies of the permit for check posts",
          "Fuel is limited; fill up in Leh and ask about the pump at Diskit",
          "Postpaid mobile connections work in parts of the valley",
          "Carry warm layers for Khardung La even in summer",
        ],
      },
      {
        h: "Bactrian camel rides at Hunder",
        p: [
          "The double-humped Bactrian camels at Hunder are a reminder of the old trade caravans that crossed Nubra on the Silk Road. Short rides on the dunes are run by local operators at fixed rates, usually best at sunset when the light turns the sand golden. Rides are gentle and suit most ages; follow the handlers' instructions.",
        ],
      },
      {
        h: "Nubra for families and older travellers",
        p: [
          "Nubra's lower altitude makes it one of the more comfortable overnight stops in Ladakh, and the dunes and camels are popular with children. The only hard part is Khardung La: keep the stop short, and travel with an experienced Leh taxi union driver. Choose a hotel or camp with good bedding, as nights are cold even in summer.",
        ],
      },
    ],
    faqs: [
      { q: "Where should I stay in Nubra, Hunder or Diskit?", a: "Hunder is best for the dunes and camel rides; Diskit is better for the monastery and a wider choice of hotels. They are only about 10 km apart." },
      { q: "When are the Bactrian camel rides available?", a: "Mainly in the tourist season, from about May to October, with sunset rides on the Hunder dunes the most popular." },
      { q: "Is Nubra Valley good for families?", a: "Yes. It is lower than Leh, the dunes and camel rides are popular with children, and there are comfortable camps and hotels. Keep the stop at Khardung La short." },
      { q: "How many days are enough for Nubra Valley?", a: "Two nights: one for Hunder and Diskit, and a second for Turtuk or to continue to Pangong." },
      { q: "How far is Nubra Valley from Leh?", a: "About 120 km to Diskit and Hunder over Khardung La, around 5 to 6 hours." },
      { q: "Is Turtuk worth visiting?", a: "Yes. It is a Balti village with a culture distinct from the rest of Ladakh, apricot orchards and views of the Shyok, about 90 km beyond Diskit." },
      { q: "How high is Khardung La?", a: "The signboard says 5,602 m; surveyed heights are around 5,350 m. Keep stops at the top short." },
      { q: "Can I go from Nubra to Pangong directly?", a: "Yes, along the Shyok road through Agham and Durbuk, but conditions vary. Ask locally before choosing this route." },
      { q: "Do I need a permit for Nubra Valley?", a: "Yes. Register and pay the fees on the LAHDC Leh portal before you go, and carry copies for check posts." },
    ],
  },

  {
    slug: "best-time-to-visit-ladakh",
    title: "Best Time to Visit Ladakh: Month by Month Weather and Road Guide",
    description: "When to visit Ladakh: month by month weather in Leh (IMD normals), when the Manali and Srinagar roads open, best months for Pangong and Nubra, and winter trips.",
    category: "Planning",
    destination: "ladakh",
    city: "leh",
    date: "2026-11-01",
    intro:
      "The best time to visit Ladakh is May to September. Leh is warm by day in these months, with average highs of about 20 to 28°C and very little rain, and both highways from Manali and Srinagar are usually open from June. September has the clearest skies and fewer crowds. Winter, from November to March, is very cold but Leh stays reachable by air for snow, frozen lakes and festivals.",
    sections: [
      {
        h: "Ladakh month by month (Leh, IMD normals)",
        list: [
          "January: average high about 1.5°C, low about -13°C; frozen streams, winter festivals",
          "February: high about 4°C, low about -9°C; Losar around February or March",
          "March: high about 10°C, low about -4°C; quiet off-season trips by air",
          "April: high about 15°C, low about 2°C; spring in Leh, passes still snowbound",
          "May: high about 20°C, low about 6°C; the Srinagar road usually opens",
          "June: high about 24°C, low about 11°C; both highways usually open",
          "July: high about 28.5°C, low about 16°C; the warmest month, very little rain in Leh",
          "August: high about 28°C, low about 15°C; all circuits open",
          "September: high about 23°C, low about 9°C; the clearest skies, the Ladakh Festival",
          "October: high about 17°C, low about 0°C; golden poplars, early snow on passes",
          "November: high about 11°C, low about -7°C; the Manali road closes",
          "December: high about 4.5°C, low about -12°C; very cold and dry",
        ],
      },
      {
        h: "When do the roads to Ladakh open?",
        p: [
          "The Srinagar to Leh road over Zojila usually opens in May, and the Manali to Leh road over Baralacha La and Tanglang La between late May and June. Both usually stay open until October or early November. Opening dates change every year with the snowfall, so check Border Roads Organisation and police updates before a road trip. Leh is reachable by air all year.",
        ],
      },
      {
        h: "Best time for Pangong, Nubra and Tso Moriri",
        list: [
          "Pangong: June to September; frozen from about January to March",
          "Nubra: May to October; Khardung La can close after snow",
          "Tso Moriri: late June to September",
          "Zanskar and Hanle: June to September",
        ],
      },
      {
        h: "Ladakh in winter",
        p: [
          "From November to March, Ladakh is very cold and dry, with nights far below freezing in Leh. The Manali highway is closed, but flights to Leh run year-round. Winter brings the Chadar trek on the frozen Zanskar, frozen lakes, snow-leopard trips in some valleys and monastery festivals. Choose heated hotels and travel with an operator experienced in winter conditions.",
        ],
      },
      {
        h: "Festivals by month",
        list: [
          "February or March: Losar celebrations in some communities",
          "June or July: Hemis Tsechu with masked cham dances",
          "June: Sindhu Darshan on the Indus near Leh",
          "September: the Ladakh Festival in Leh, with dances, archery and polo",
          "Winter: monastery festivals such as Thiksey Gustor and Spituk Gustor, dates set by the Tibetan calendar",
        ],
      },
      {
        h: "Best time for road trips and bike trips",
        p: [
          "For a Manali to Leh to Srinagar road or bike trip, late June to mid-September is the most reliable window, when both highways are open and water crossings are lower in the mornings. July and August are busiest, while September is calmer with excellent visibility. Avoid the very first days after a road opens, when stretches can still be rough.",
        ],
      },
      {
        h: "Packing by season",
        list: [
          "Summer: light layers for the day, a fleece and down jacket for nights and passes, sun hat and UV sunglasses",
          "September and October: add thermal inner wear; nights are near freezing",
          "Winter: heavy down jacket, thermals, gloves, cap and insulated boots",
          "Always: sunscreen, lip balm, a water bottle and basic medicines for altitude",
        ],
      },
      {
        h: "Planning around acclimatisation",
        p: [
          "Whatever the month, plan at least 24 to 48 hours of rest in Leh after arriving by air before going higher. Road trips from Manali or Srinagar acclimatise you gradually, but still take it easy on the first day in Leh. Agents on Tavel Package can build the right pace into a customised Ladakh itinerary for your dates.",
        ],
      },
      {
        h: "Best time by type of trip",
        list: [
          "First-time sightseeing trip by air: June to September",
          "Road or bike trip from Manali or Srinagar: late June to mid-September",
          "Photography and clear skies: September",
          "Festivals: June or July for Hemis, September for the Ladakh Festival",
          "Winter adventure (Chadar trek, frozen lakes): January to February with specialist operators",
        ],
      },
    ],
    faqs: [
      { q: "Is October a good time to visit Ladakh?", a: "Early October can be beautiful, with golden poplars and clear skies, but nights are near freezing and high passes may get early snow. Most camps at Pangong and Tso Moriri start closing." },
      { q: "Is May a good time for Ladakh?", a: "Yes, for Leh and the Indus valley by air, with pleasant days and fewer visitors. The Manali highway may still be closed, and some high areas can have snow." },
      { q: "Which is the best month to visit Ladakh?", a: "June to September. September is often the best balance of clear weather, open roads and fewer crowds." },
      { q: "Is Ladakh cold in summer?", a: "Leh is warm by day in July and August, with average highs around 28°C, but nights are cool and high passes and lakes such as Pangong are cold." },
      { q: "When does the Manali to Leh road open?", a: "Usually between late May and June, depending on snowfall, and it stays open until October or early November." },
      { q: "Can I visit Ladakh in winter?", a: "Yes, by air to Leh. Expect very cold weather, closed highways and limited stays, but frozen lakes and festivals." },
      { q: "Does it rain in Ladakh during the monsoon?", a: "Very little. Leh lies in the Himalayan rain shadow and gets only about 15 mm in July on average, though landslides can affect the approach roads." },
      { q: "When is Pangong Lake frozen?", a: "Usually from about January to March." },
    ],
  },
];
