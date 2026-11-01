import type { BlogPost } from "./types";

// Full-length Himachal guides (900+ words each). Facts checked against the HP
// Rohtang permit portal, BRO/HP road advisories and IMD climate data; permit
// fees, road openings and rules change, so posts tell readers to re-check.
// No em dashes, no invented prices.

export const HIMACHAL_DEEP: BlogPost[] = [
  {
    slug: "rohtang-pass-permit-guide",
    title: "Rohtang Pass Permit 2026: How to Apply Online, Fees, Timings and Rules",
    description: "How to get a Rohtang Pass permit online: the official portal, fee for cars and buses, booking window, documents, closure days and what to do if permits are sold out.",
    category: "Planning",
    destination: "himachal",
    city: "manali",
    date: "2026-11-01",
    intro:
      "Every vehicle going to Rohtang Pass needs an online permit from the Himachal Pradesh government portal, rohtangpermits.hp.gov.in. The portal lists a fee of ₹500 per vehicle plus a congestion charge of ₹50 for cars, jeeps and MUVs (₹100 for buses), valid for one day. Permits open only a couple of days ahead and are capped per day, so in May and June they sell out fast. No permit is needed for Solang Valley, the Atal Tunnel or Sissu.",
    sections: [
      {
        h: "Who needs a Rohtang Pass permit?",
        p: [
          "Any tourist vehicle that crosses the Gulaba check post towards Rohtang Pass needs a permit for that day. This includes private cars driven up from Delhi or Chandigarh and Manali taxis. The permit is issued for the vehicle, not for each passenger, so a family in one car needs one permit.",
          "You do not need a Rohtang permit to visit Solang Valley, to drive through the Atal Tunnel, or to visit Sissu, Keylong and Jispa in Lahaul. Vehicles entering Lahaul register on the separate e-Aagman portal instead, which is free.",
        ],
      },
      {
        h: "How to apply for the Rohtang permit online",
        list: [
          "Open the official portal, rohtangpermits.hp.gov.in, and choose the tourist (Rohtang Pass) permit.",
          "Pick the date of travel. The portal only offers the next couple of days, not weeks ahead.",
          "Enter the vehicle registration number, fuel type and the driver's details.",
          "Upload or enter the vehicle's valid Pollution Under Control (PUC) certificate details. The portal also limits the age of vehicles allowed.",
          "Pay online and download the permit. Carry a printout; it is checked at Gulaba.",
        ],
        p: [
          "Most visitors let their Manali taxi operator or travel agent apply, because the operator already holds the vehicle documents and knows how quickly the day's quota fills.",
        ],
      },
      {
        h: "Rohtang permit fee for cars and buses",
        p: [
          "The portal lists two charges per vehicle per day: a permit fee of ₹500 and a congestion charge collected for the Gulaba bridge, ₹50 for cars, jeeps and MUVs and ₹100 for buses and heavy vehicles. A car therefore pays ₹550 for the round trip on one day. Taxi fares from Manali to Rohtang are separate and set by the Manali taxi union.",
          "Fees are revised from time to time. Always check the amount shown on the portal on the day you apply.",
        ],
      },
      {
        h: "When is Rohtang Pass open?",
        p: [
          "Rohtang usually reopens around the middle of May after the Border Roads Organisation clears the snow, and closes in November after heavy snowfall. On any given day it can close for fresh snow, rain or landslides, and the portal announces a weekly maintenance day when no vehicles are allowed. If the portal is not issuing permits for a date, the pass is not open to tourists that day.",
          "Vehicles leave Manali early, usually by 5 or 6 in the morning, to cross Gulaba within the permitted timings and to beat traffic. Plan two to three hours at the top and be back down by early afternoon, when the weather often turns.",
        ],
      },
      {
        h: "What if Rohtang permits are sold out?",
        p: [
          "In peak weeks the daily quota can go within minutes of opening. If you miss it, the best alternatives need no permit at all:",
        ],
        list: [
          "Solang Valley, 14 km from Manali, with snow from about December to March and the ropeway all year",
          "The Atal Tunnel and Sissu in Lahaul, about 40 km from Manali, usually with snow well into spring",
          "Marhi and Gulaba, below the pass, which still have snow walls in May (Gulaba is before the permit check)",
        ],
      },
      {
        h: "Rohtang Pass in May and June: what to expect",
        p: [
          "In May, Rohtang has high walls of snow along the road and temperatures near freezing even at midday. By June, snow lies in patches near the top and days are clearer. Carry layered woollens, gloves, sunglasses and sunscreen; snow suits and boots can be rented at Marhi and in Manali. People with heart or breathing conditions should speak to a doctor first, as the pass is at about 3,978 m.",
        ],
      },
      {
        h: "Planning Rohtang into a Manali trip",
        p: [
          "Keep Rohtang for the middle of your Manali stay so that one bad-weather day does not cancel it. A typical four-day Manali trip uses one day for Rohtang or the Atal Tunnel, one for Solang Valley and one for Hadimba Temple, Old Manali and Vashisht. Agents on Tavel Package can arrange the taxi and permit as part of a customised package.",
        ],
      },
      {
        h: "Rohtang permit vs Atal Tunnel: which should you choose?",
        p: [
          "If your aim is snow and big mountain views, the Atal Tunnel and Sissu give much of the Rohtang experience without the permit lottery, and they are open through more of the year. Rohtang is the better choice in May and June for the snow walls and the view down into Lahaul from the top of the pass.",
        ],
      },
    ],
    faqs: [
      { q: "How much is the Rohtang Pass permit fee?", a: "The official portal lists ₹500 per vehicle plus a ₹50 congestion charge for cars and jeeps (₹100 for buses), valid for one day. Check the portal for the current amount." },
      { q: "Can I get a Rohtang permit on the spot?", a: "No. Permits are issued online through rohtangpermits.hp.gov.in, usually only for the next couple of days." },
      { q: "Is a permit needed for the Atal Tunnel?", a: "No. The Atal Tunnel and Sissu need no Rohtang permit; vehicles entering Lahaul register free on the e-Aagman portal." },
      { q: "Which day is Rohtang Pass closed?", a: "The portal announces a weekly maintenance day with no vehicles allowed, and the pass also closes for bad weather. Check the portal before planning your day." },
      { q: "Can I take my own car to Rohtang?", a: "Yes, with a permit for your vehicle, a valid PUC certificate and a vehicle within the portal's age limit." },
    ],
  },

  {
    slug: "kasol-itinerary-3-days",
    title: "Kasol Itinerary: 3 Days in Kasol, Tosh and Kheerganga from Delhi",
    description: "A 3-day Kasol itinerary from Delhi with Manikaran, Chalal, Tosh and the Kheerganga trek, plus how to reach, best months, budget tips and the local rules to know.",
    category: "Itineraries",
    destination: "himachal",
    city: "kasol",
    date: "2026-11-01",
    intro:
      "Three days in Kasol is enough to see the Parvati valley properly: a first day around Kasol, Chalal and Manikaran Sahib, a second day for the Kheerganga trek or the village of Tosh, and a third for Malana or a slow day by the river before the overnight bus back to Delhi. Kasol is about 520 km from Delhi, most easily reached by overnight Volvo to Bhuntar or Kasol.",
    sections: [
      {
        h: "How to reach Kasol from Delhi",
        p: [
          "Overnight Volvo buses leave Delhi's Kashmere Gate and Majnu ka Tilla in the evening and reach Bhuntar or Kasol the next morning. From Bhuntar, local buses and taxis cover the last 30 km up the Parvati valley. Bhuntar airport (KUU) has limited flights from Delhi; Chandigarh, about 280 km away, has many more.",
          "By car, Delhi to Kasol is about 520 km via Chandigarh, Bilaspur, Mandi and Bhuntar, roughly 11 to 13 hours with stops.",
        ],
      },
      {
        h: "3-day Kasol itinerary",
        days: [
          "Arrive in Kasol in the morning. Walk across the bridge to Chalal village and along the Parvati. In the afternoon visit Manikaran Sahib, 4 km away, with its gurdwara, hot springs and langar.",
          "Kheerganga trek from Barshaini (about 12 km one way, 5 to 6 hours up), or a day trip to Tosh village and its waterfall at the head of the valley road.",
          "Morning walk to Rasol or a visit to Malana (follow the village's rules strictly), then the evening Volvo to Delhi.",
        ],
      },
      {
        h: "The Kheerganga trek in brief",
        p: [
          "Kheerganga is a meadow at about 2,950 m above the Parvati valley with a natural hot spring. The trek starts at Barshaini, at the end of the road beyond Manikaran, and climbs through forest and the villages of Nakthan or Kalga. Fit beginners manage it in 5 to 6 hours up. Rules on overnight camping at the top have changed in recent years, so check the current position with a local guide or your agent before planning a night there.",
        ],
      },
      {
        h: "Best time to visit Kasol",
        list: [
          "March to June: pleasant days of about 15 to 30°C and the main trekking season",
          "July and August: monsoon, landslide risk on the valley road and slippery trails",
          "September to November: clear skies and cool nights, a good time for Kheerganga",
          "December to February: cold, with snow at Tosh and Kheerganga; Kasol itself is quiet",
        ],
      },
      {
        h: "Kasol on a budget",
        p: [
          "A Kasol trip can be done cheaply: the overnight bus both ways, a guest house or riverside camp, local buses to Manikaran and Barshaini, and treks instead of paid activities. Costs rise mainly with the bus class, the type of stay and whether you hire a taxi for the valley. Share your budget and dates and up to 3 agents will send itemised quotes.",
        ],
      },
      {
        h: "Rules to know in the Parvati valley",
        list: [
          "Possession of cannabis or charas is a criminal offence under the NDPS Act; police checks are common in the valley",
          "In Malana, do not touch houses, temples or residents, and follow the signboards",
          "Carry cash: ATMs are few beyond Bhuntar and mobile coverage is patchy above Manikaran",
          "Keep a buffer day in the monsoon in case the valley road closes",
        ],
      },
      {
        h: "Kasol with Manali or Jibhi",
        p: [
          "Kasol combines easily with Manali (about 75 km) for a 5 to 6 day trip, or with Jibhi and the Tirthan valley (about 90 km via Aut) for a quieter mountain stay. Agents can build either combination with one cab for the whole trip.",
        ],
      },
      {
        h: "Where to stay in Kasol",
        p: [
          "Kasol has guest houses and small hotels in the main market, quieter riverside stays across the bridge in Chalal, and camps along the Parvati towards Manikaran. Families usually prefer the hotels near the market for easy access to food and transport; backpackers prefer Chalal and the camps. Tosh and Kalga have simple guest houses for those who want to stay higher up the valley.",
        ],
      },
      {
        h: "Food in Kasol",
        p: [
          "Kasol's cafes are known for Israeli dishes such as shakshuka, hummus and falafel, alongside Himachali food, trout and thukpa. The langar at Manikaran Sahib serves free meals to all visitors, and cafes in Chalal and Tosh open on the riverbank in season.",
        ],
      },
      {
        h: "Getting around the Parvati valley",
        p: [
          "Local buses run regularly between Bhuntar, Kasol, Manikaran and Barshaini, and are the cheapest way to move along the valley. Taxis wait at Kasol and Manikaran for day hire to Tosh, Barshaini or Malana's road head. Most of Kasol, Chalal and Rasol is reached on foot, and walking between them is part of the charm. Carry a torch for the evening walk back across the bridge from Chalal.",
        ],
      },
    ],
    faqs: [
      { q: "Can I visit Kasol in winter?", a: "Yes. Kasol stays open in winter and is quiet, with cold nights and snow at Tosh and Kheerganga. Some cafes close, and treks above the valley need proper gear and a local guide." },
      { q: "Is Kasol safe for families?", a: "Yes. Stay near the main market or in a hotel, keep to daylight walks, and follow the valley's rules on drugs and on Malana village." },
      { q: "How many days are enough for Kasol?", a: "Two to three days: one for Kasol, Chalal and Manikaran, one for Kheerganga or Tosh, and a half day for Malana or Rasol." },
      { q: "How far is Kasol from Delhi?", a: "About 520 km by road, 11 to 13 hours. Overnight Volvo buses run from Delhi to Bhuntar and Kasol." },
      { q: "Is the Kheerganga trek difficult?", a: "It is moderate: about 12 km one way from Barshaini with a steady climb. Fit beginners usually take 5 to 6 hours up." },
      { q: "What is the best month to visit Kasol?", a: "March to June and September to November, when the weather is dry and the trails are open." },
    ],
  },

  {
    slug: "jibhi-tirthan-valley-itinerary",
    title: "Jibhi and Tirthan Valley Itinerary: 3 to 4 Days of Homestays, Jalori Pass and Serolsar",
    description: "Plan Jibhi and the Tirthan Valley in 3 or 4 days: reaching from Delhi, Jalori Pass, Serolsar Lake, Raghupur Fort, the national park and when to go.",
    category: "Itineraries",
    destination: "himachal",
    city: "jibhi",
    date: "2026-11-01",
    intro:
      "Jibhi and the Tirthan Valley make a quiet 3 to 4 day trip from Delhi: wooden homestays by a stream, a day at Jalori Pass with walks to Serolsar Lake and Raghupur Fort, and a day in the Tirthan Valley at the edge of the Great Himalayan National Park, a UNESCO World Heritage Site. Jibhi is about 490 km from Delhi; most travellers take an overnight bus to Aut and a taxi for the last 35 km.",
    sections: [
      {
        h: "How to reach Jibhi",
        p: [
          "Overnight Volvo buses towards Manali stop at Aut, where the road to Banjar and Jibhi leaves the highway through the Aut tunnel. Taxis and local buses cover Aut to Jibhi, about 35 km. By car from Delhi, the drive is about 490 km via Chandigarh, Mandi and Aut. Bhuntar airport, about 60 km away, has limited flights from Delhi.",
        ],
      },
      {
        h: "4-day Jibhi and Tirthan itinerary",
        days: [
          "Arrive at Aut in the morning and transfer to Jibhi. Walk to the Jibhi waterfall and settle into a stream-side homestay.",
          "Drive up to Jalori Pass (about 12 km), walk 5 km through oak forest to Serolsar Lake, and in the afternoon walk about 3 km the other way to the meadows of Raghupur Fort.",
          "Tirthan Valley: Gushaini and Nagini along the Tirthan river, a short walk into the edge of the Great Himalayan National Park, and Chehni Kothi tower on the way back.",
          "Slow morning in Jibhi or a visit to Shoja, then back to Aut for the bus to Delhi.",
        ],
      },
      {
        h: "Jalori Pass, Serolsar Lake and Raghupur Fort",
        p: [
          "Jalori Pass, at about 3,120 m, links the Kullu and Shimla sides of the Seraj region. From the top, one trail leads east to Serolsar Lake, a small sacred lake with a Budhi Nagin temple, and another climbs west to the ruins and wide meadows of Raghupur Fort. The road to the pass can close after snowfall from about December to March.",
        ],
      },
      {
        h: "Tirthan Valley and the Great Himalayan National Park",
        p: [
          "The Tirthan river is known for trout and clear water, and its villages are the main gateway to the Great Himalayan National Park, inscribed by UNESCO in 2014. Entry into the park itself needs a permit from the park office, and longer treks need a registered guide.",
        ],
      },
      {
        h: "Best time to visit Jibhi",
        list: [
          "March to June: pleasant days and the best time for Jalori and Serolsar",
          "July to mid September: monsoon greenery but landslide risk",
          "Late September to November: clear skies and autumn colours",
          "December to February: snow at Jibhi in most winters; Jalori may be closed",
        ],
      },
      {
        h: "Where to stay in Jibhi",
        p: [
          "Most stays are family-run wooden homestays and cottages along the Jibhi stream, in Jibhi village and up towards Shoja. Choose stream-side stays for walks to the waterfall, or Shoja for views and quick access to Jalori Pass.",
        ],
      },
      {
        h: "Things to do in Jibhi and Tirthan",
        list: [
          "Walk to the Jibhi waterfall and the small pools below it",
          "Hike from Jalori Pass to Serolsar Lake and to Raghupur Fort",
          "Visit Chehni Kothi, an old multi-storey stone and wood tower in the Banjar valley",
          "Trout fishing in the Tirthan with a licence from the Fisheries Department",
          "Village walks to Bahu and Ghiyagi, and short walks into the edge of the national park",
          "Bonfires and slow evenings at the homestays",
        ],
      },
      {
        h: "What a Jibhi trip costs depends on",
        list: [
          "How you travel from your city: overnight bus to Aut or a private cab",
          "Homestay or cottage category, and whether meals are included",
          "Local taxi days for Jalori Pass and the Tirthan Valley",
          "Season: May, June and the winter holidays are busiest",
        ],
        p: ["Share your dates and budget, and up to 3 verified agents will send itemised quotes."],
      },
      {
        h: "Jibhi with Kasol or Manali",
        p: [
          "Jibhi pairs well with Kasol (about 90 km via Aut and Bhuntar) for a 6-day trip, or with Manali (about 100 km) for families who want both a quiet valley and the classic sights. A single cab can cover the whole loop.",
        ],
      },
      {
        h: "Jibhi in winter",
        p: [
          "In most winters Jibhi gets snow between late December and February, and the homestays stay open with heaters and bonfires. The road up to Jalori Pass is often closed after heavy snowfall, so plan Serolsar and Raghupur for spring or autumn. Pack proper winter clothing and keep a buffer day for the drive back to Aut if roads are being cleared.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a permit for the Great Himalayan National Park?", a: "Short walks at the park's edge need none, but entering the park for treks needs a permit from the park office in Shamshi or Sai Ropa, and longer treks need a registered guide." },
      { q: "Is Jibhi good for a family trip?", a: "Yes. Homestays are family-run, walks are short, and Jalori Pass is reachable by car. Choose a stay near the road if you travel with elderly parents or small children." },
      { q: "How many days are enough for Jibhi?", a: "Three days cover Jibhi, Jalori Pass, Serolsar Lake and the Tirthan Valley; add a day for a slower trip or Chehni Kothi." },
      { q: "How do I reach Jibhi from Delhi?", a: "Take an overnight Volvo towards Manali to Aut, then a taxi or local bus about 35 km via Banjar to Jibhi." },
      { q: "Is Jibhi better than Kasol?", a: "Jibhi is quieter, with homestays and forest walks; Kasol is livelier, with cafes and treks. They are about 90 km apart and easy to combine." },
      { q: "Is there snow in Jibhi?", a: "Jibhi usually gets snowfall in winter, from about late December to February, and Jalori Pass above it has snow for longer." },
    ],
  },

  {
    slug: "manali-to-leh-road-trip-guide",
    title: "Manali to Leh Road Trip: Route, Distance, Stops, Passes and Best Time",
    description: "Manali to Leh highway explained: route via Atal Tunnel, Baralacha La and Tanglang La, distance, stops at Jispa or Sarchu, fuel, altitude and opening months.",
    category: "Adventure",
    destination: "ladakh",
    city: "leh",
    date: "2026-11-01",
    intro:
      "The Manali to Leh highway is about 430 to 470 km and normally takes two days, with a night at Jispa or Sarchu. It runs through the Atal Tunnel into Lahaul, over Baralacha La, the Gata Loops and Tanglang La, one of the highest motorable passes on the route, before descending to Leh. The road is usually open from about June to October.",
    sections: [
      {
        h: "Manali to Leh route and distances",
        list: [
          "Manali to the Atal Tunnel south portal: about 25 km",
          "Through the tunnel to Keylong and Jispa in Lahaul: about 90 km from Manali",
          "Jispa to Darcha, Zingzingbar and Baralacha La (about 4,890 m)",
          "Down to Sarchu on the Himachal and Ladakh border",
          "The Gata Loops, a series of hairpin bends, then Nakee La and Lachulung La",
          "Pang and the More Plains, then Tanglang La and the descent to Upshi and Leh",
        ],
      },
      {
        h: "Two-day plan",
        days: [
          "Manali to Jispa through the Atal Tunnel and Keylong. Short day, which helps acclimatisation; stay in Jispa camps or hotels by the Bhaga river.",
          "Jispa to Leh over Baralacha La, Sarchu, the Gata Loops, Pang and Tanglang La. Long day of 10 to 12 hours; start by 5 am.",
        ],
        p: [
          "Riders and slower groups often split the journey into three days with nights at Jispa and Sarchu or Pang. Sleeping at Sarchu or Pang is cold and high, so it suits people already acclimatised.",
        ],
      },
      {
        h: "When is the Manali to Leh highway open?",
        p: [
          "The road usually opens between late May and June, after snow clearance on Baralacha La and Tanglang La, and stays open until October or early November. Opening dates change each year with the snowfall. Check Border Roads Organisation and Lahaul and Leh police updates before you go.",
        ],
      },
      {
        h: "Altitude and acclimatisation",
        p: [
          "Much of the route is above 4,000 m. Drink plenty of water, avoid alcohol, and do not rush. Headache, nausea and breathlessness are signs of acute mountain sickness; the cure is to descend. Spend at least 24 to 48 hours resting in Leh after arrival before going higher to Khardung La, Nubra or Pangong. Anyone with heart or lung conditions should take medical advice before the trip.",
        ],
      },
      {
        h: "Fuel, network and supplies",
        list: [
          "Fill up at Tandi near Keylong; it is the last petrol pump on the route for a long stretch, so carry spare fuel if riding",
          "Mobile coverage is patchy beyond Keylong; postpaid BSNL and Jio work best",
          "Carry cash, snacks, water, warm layers and basic medicines",
          "Dhabas and seasonal tent stays operate at Zingzingbar, Sarchu and Pang",
        ],
      },
      {
        h: "Manali to Leh by bus, taxi or bike",
        p: [
          "HRTC runs a seasonal Manali to Leh bus, usually from June to September, with an overnight halt. Shared and private taxis run from Manali in season. Many riders rent a 350 to 500 cc motorcycle in Manali; check the rental's rules before planning Nubra and Pangong, where local rules can restrict outside rental vehicles.",
        ],
      },
      {
        h: "Combining the road trip with Ladakh",
        p: [
          "A classic circuit drives Manali to Leh, spends four or five days on Leh, Nubra and Pangong, and returns via Kargil and Srinagar, or flies out of Leh. Agents on Tavel Package can quote the full loop with a cab and driver who know the route.",
        ],
      },
      {
        h: "Where to stay on the Manali to Leh highway",
        list: [
          "Jispa: hotels and camps by the Bhaga river at about 3,300 m, the most comfortable first night",
          "Sarchu: seasonal camps at about 4,300 m; cold and high, best for acclimatised travellers",
          "Pang: basic tent stays used by riders and trucks",
          "Leh: hotels and guest houses of every category; rest here for 24 to 48 hours",
        ],
      },
      {
        h: "Common mistakes on the Manali to Leh drive",
        list: [
          "Doing the whole route in one day without acclimatising, which raises the risk of altitude sickness",
          "Starting late and crossing the high passes in the afternoon, when streams swell and weather turns",
          "Skipping the full tank at Tandi",
          "Travelling in thin clothing; nights at Sarchu and Pang can drop below freezing even in July",
          "Going higher to Khardung La or Pangong straight after reaching Leh",
        ],
      },
      {
        h: "Best month for the Manali to Leh drive",
        p: [
          "July and August have the warmest days and every stop open, but monsoon rain can trigger landslides on the Manali side. Many experienced drivers prefer late June or September, when the road is drier and crowds are smaller.",
        ],
      },
    ],
    faqs: [
      { q: "Can I do Manali to Leh in one day?", a: "It is possible in a long day, but not advised: crossing several passes above 4,500 m without a night in between raises the risk of altitude sickness. Break the journey at Jispa or Sarchu." },
      { q: "Do I need a permit for the Manali to Leh highway?", a: "Indian travellers need no inner line permit for the highway itself. Vehicles entering Lahaul register free on e-Aagman, and protected areas beyond Leh such as Nubra and Pangong need registration and fees on the LAHDC portal." },
      { q: "How long does Manali to Leh take?", a: "Two days with a night at Jispa or Sarchu. Riders and slower groups often take three days." },
      { q: "What is the distance from Manali to Leh?", a: "About 430 to 470 km depending on the exact route and start point." },
      { q: "When does the Manali to Leh road open?", a: "Usually between late May and June, staying open until October or early November, depending on snowfall." },
      { q: "Where is the last petrol pump on the Manali to Leh highway?", a: "Tandi, near Keylong in Lahaul, is the last pump for a long stretch. Carry spare fuel if riding." },
      { q: "Is the Manali to Leh road safe?", a: "It is a high-altitude mountain road with rough stretches and water crossings. With an experienced driver, an early start, acclimatisation and a buffer day, it is done safely by thousands of travellers every season." },
    ],
  },

  {
    slug: "triund-trek-guide",
    title: "Triund Trek Guide: Distance, Starting Point, Time, Difficulty and Best Season",
    description: "Everything for the Triund trek above McLeodganj: start at Galu Devi temple, distance and time, difficulty, best months, what to carry, camping and where to go after.",
    category: "Adventure",
    destination: "himachal",
    city: "dharamshala",
    date: "2026-11-01",
    intro:
      "Triund is a grassy ridge at about 2,850 m above McLeodganj, facing the Dhauladhar range. The usual trek starts at the Galu Devi temple above Dharamkot and covers about 7 km one way, or about 9 km from McLeodganj, taking 4 to 5 hours up for fit beginners. It is easy to moderate, open most of the year, and best from March to June and September to November.",
    sections: [
      {
        h: "Triund trek distance and starting point",
        p: [
          "Most trekkers take a taxi from McLeodganj to the Galu Devi temple trailhead above Dharamkot and start walking there, which makes the trek about 7 km each way. Walking from McLeodganj itself adds about 2 km. A steeper path also starts from Bhagsu. The trail is well marked, with tea stalls along the way.",
        ],
      },
      {
        h: "How long does the Triund trek take?",
        p: [
          "Fit walkers reach the top in about 4 to 5 hours and come down in 3. Start by 8 or 9 in the morning for a day trip, so you are back before dark. The last kilometre, known locally as the 22 curves, is the steepest part.",
        ],
      },
      {
        h: "Best time for the Triund trek",
        list: [
          "March to June: clear days and the busiest season",
          "July and August: heavy monsoon rain in Dharamshala; slippery and often cloudy",
          "September to November: the clearest views of the Dhauladhar",
          "December to February: snow at the top in most winters; for experienced trekkers with proper gear",
        ],
      },
      {
        h: "What to carry",
        list: [
          "Comfortable trekking shoes with grip",
          "Two litres of water, snacks and a rain jacket",
          "A warm layer, even in summer, for the top",
          "Sunscreen, a cap and a torch if you may finish late",
          "Carry your waste back down; the ridge has no bins",
        ],
      },
      {
        h: "Camping at Triund and going beyond",
        p: [
          "Overnight stays on the ridge give sunset and sunrise over the Dhauladhar. Rules on camping at Triund are set by the forest department and have changed over the years, so confirm the current position with a registered local operator before planning a night. Experienced trekkers continue to the Snowline area and, with a guide, to Indrahar Pass, a much harder multi-day trek.",
        ],
      },
      {
        h: "Triund in a Dharamshala trip",
        p: [
          "Add Triund as one full day of a three or four day Dharamshala and McLeodganj trip, alongside the Dalai Lama temple, Bhagsu and Dharamkot. Agents can include a guide and the trailhead taxi in the package.",
        ],
      },
      {
        h: "Triund trek route, stage by stage",
        list: [
          "Galu Devi temple to the first tea stalls: a gentle climb through oak and rhododendron forest",
          "Middle section: steady switchbacks with views back over the Kangra valley",
          "The last kilometre, the 22 curves: the steepest part, mostly stone steps",
          "The ridge: open grassland facing the Dhauladhar, with Moon Peak and the Indrahar ridge ahead",
        ],
      },
      {
        h: "Where to stay before the Triund trek",
        p: [
          "Stay in McLeodganj, Dharamkot or Bhagsu the night before so you can start early. Dharamkot is closest to the trailhead and has guest houses and cafes; McLeodganj has the widest choice of hotels; Bhagsu suits budget travellers.",
        ],
      },
      {
        h: "Safety tips for Triund",
        list: [
          "Check the weather the evening before; thunderstorms are common on summer afternoons",
          "Do not attempt the trek after dark, and avoid the steep Bhagsu route if you are new to trekking",
          "In winter, hire a local guide; ice on the last stretch can be dangerous",
          "Tell your hotel your plan and expected return time",
        ],
      },
      {
        h: "How fit do you need to be for Triund?",
        p: [
          "You do not need trekking experience, but you should be able to walk uphill for four to five hours with short breaks. If you rarely walk long distances, practise with a few long walks or stair climbs in the weeks before your trip. Take the climb slowly, drink water at every tea stall and turn back if you feel unwell; the trail is busy, so help is never far away in season.",
        ],
      },
      {
        h: "Triund compared with other Dharamshala walks",
        list: [
          "Bhagsu waterfall: an easy 2 km walk from McLeodganj, good for families and a rest day",
          "Dharamkot and Galu Devi: a short uphill walk with cafes and views, the start of the Triund trail",
          "Naddi viewpoint: a drive or walk for sunset over the Dhauladhar without a climb",
          "Triund: the full day hike with the biggest views, for anyone reasonably fit",
          "Indrahar Pass: a demanding multi-day trek beyond Triund, only with an experienced guide",
        ],
      },
    ],
    faqs: [
      { q: "Is there a fee for the Triund trek?", a: "The forest department may charge an entry or eco fee at the start of the trail, and overnight stays have their own rules. Check the current amount at the trailhead or with your guide." },
      { q: "What is the best time of day to start Triund?", a: "Start between 7 and 9 am. You reach the ridge before the afternoon clouds and have time to come down in daylight." },
      { q: "Can kids do the Triund trek?", a: "Children who are used to walking can usually manage it with breaks. Start early, carry snacks and water, and turn back if the weather changes." },
      { q: "How long is the Triund trek?", a: "About 7 km one way from the Galu Devi temple trailhead, or about 9 km from McLeodganj." },
      { q: "Is the Triund trek difficult?", a: "It is easy to moderate. The last stretch is steep, but fit beginners usually manage it in 4 to 5 hours up." },
      { q: "Where does the Triund trek start?", a: "Most trekkers start at the Galu Devi temple above Dharamkot, reached by taxi from McLeodganj." },
      { q: "Can I do the Triund trek in winter?", a: "Yes, but the top often has snow from about December to February. Go with proper boots, warm clothing and ideally a local guide." },
    ],
  },

  {
    slug: "kinnaur-road-trip-sangla-chitkul-kalpa",
    title: "Kinnaur Road Trip: Sangla, Chitkul and Kalpa in 4 to 5 Days from Shimla",
    description: "A 4 to 5 day Kinnaur road trip from Shimla to Sarahan, Sangla, Chitkul and Kalpa on the Hindustan-Tibet road, with distances, best months, road conditions and tips.",
    category: "Itineraries",
    destination: "himachal",
    city: "kinnaur",
    date: "2026-11-01",
    intro:
      "Kinnaur is best seen on a 4 to 5 day road trip from Shimla along the Hindustan-Tibet road: Narkanda and Sarahan on day one, the Baspa valley at Sangla and Chitkul, then Kalpa facing the Kinner Kailash range. Kalpa is about 230 km from Shimla. The best months are April to June and September to October, when the roads are open and apples or blossom are in season.",
    sections: [
      {
        h: "Kinnaur route from Shimla",
        list: [
          "Shimla to Narkanda (about 65 km), apple country and views of the Himalaya",
          "Down to the Sutlej at Rampur, then up to Sarahan and the Bhimakali temple",
          "Along the Sutlej to Karcham, then up the Baspa valley to Sangla",
          "Sangla to Chitkul, the last village on the road near the Tibet border (about 25 km)",
          "Back to Karcham and on to Reckong Peo and Kalpa",
        ],
      },
      {
        h: "5-day Kinnaur itinerary",
        days: [
          "Shimla or Chandigarh to Sarahan via Narkanda and Rampur. Evening at the Bhimakali temple.",
          "Sarahan to Sangla. Kamru Fort and village walk along the Baspa.",
          "Day trip to Chitkul and Rakchham; walk along the river towards the ITBP post.",
          "Sangla to Kalpa via Karcham. Sunset over the Kinner Kailash range, and Roghi village.",
          "Kalpa to Shimla or Narkanda, or continue to Nako and Spiti.",
        ],
      },
      {
        h: "Road conditions on the Hindustan-Tibet road",
        p: [
          "The road follows the Sutlej through steep gorges with sections cut into rock. Landslides are common in the monsoon and after heavy rain, so July and August are the riskiest months. Drive in daylight, keep a buffer day, and travel with a driver who knows the route. Snow can close the Sangla and Kalpa roads for periods in winter.",
        ],
      },
      {
        h: "Best time to visit Kinnaur",
        list: [
          "April to June: blossom, clear days and comfortable temperatures",
          "July and August: monsoon, landslide risk",
          "September and October: apple harvest and the clearest skies",
          "November to March: cold with snow; for experienced travellers",
        ],
      },
      {
        h: "Kinnaur culture and what to look for",
        p: [
          "Kinnaur mixes Hindu and Buddhist traditions, with temples and gompas side by side, kath-kuni wooden architecture, Kinnauri caps with green velvet bands and the GI-tagged Kinnauri shawl. Phulaich, the flower festival, is held in autumn. Respect village shrines and ask before photographing people.",
        ],
      },
      {
        h: "Kinnaur with Spiti",
        p: [
          "Kinnaur is the first half of the year-round route into Spiti: from Kalpa the road continues to Nako, Tabo and Kaza. A combined Kinnaur and Spiti circuit takes 8 to 10 days and returns via Manali when Kunzum La is open. Agents can quote either version with a mountain-experienced driver.",
        ],
      },
      {
        h: "Where to stay in Kinnaur",
        list: [
          "Sarahan: a few hotels and guest houses near the Bhimakali temple",
          "Sangla: hotels and riverside camps along the Baspa",
          "Chitkul: simple guest houses in the village; cold at night even in summer",
          "Kalpa: hotels facing the Kinner Kailash range, the best base for sunrise views",
        ],
      },
      {
        h: "Permits and practical tips",
        list: [
          "Indian travellers need no permit for Sangla, Chitkul and Kalpa; foreign nationals need an inner line permit for some areas near the border, issued at Reckong Peo",
          "Fuel is available at Rampur, Karcham and Reckong Peo; fill up before Sangla",
          "Postpaid BSNL and Jio work best; coverage drops in the gorges",
          "Carry cash: ATMs are mainly in Rampur and Reckong Peo",
          "Apples are harvested from about August to October; buy directly from orchards in season",
        ],
      },
      {
        h: "Food and apples in Kinnaur",
        p: [
          "Kinnaur is famous for its apples, grown in orchards around Kalpa, Sangla and Reckong Peo and harvested from about August to October. Dried apricots, walnuts and chilgoza pine nuts from the region's forests are sold in local markets. Meals in guest houses are simple Himachali and Tibetan fare: rajma, rice, rotis, thukpa and momos, with local dishes on request in village homestays.",
        ],
      },
      {
        h: "Kinnaur or Spiti: which should you choose?",
        p: [
          "Choose Kinnaur if you have four to five days, want greener valleys, orchards and wooden villages, and prefer lower altitudes for children or older parents. Choose Spiti if you have eight days or more and want the high cold desert, old monasteries and Chandratal. Many travellers combine them in one circuit, with Kinnaur on the way in.",
        ],
      },
      {
        h: "Kinnaur for families and older travellers",
        p: [
          "Kinnaur's main stops sit between about 2,000 and 3,450 m, lower than Spiti and Ladakh, which makes it a gentler high-mountain trip for families and older parents. Break long drives with a night at Sarahan, keep Chitkul as a day trip from Sangla, and choose hotels with heating if travelling in April or October.",
        ],
      },
    ],
    faqs: [
      { q: "Is the road to Kinnaur safe?", a: "The Hindustan-Tibet road is a well-used highway with some narrow, rock-cut sections. Travel in daylight, avoid the peak monsoon months, keep a buffer day and use a driver experienced on the route." },
      { q: "Can I go from Kinnaur to Spiti?", a: "Yes. From Kalpa or Reckong Peo the road continues to Nako, Tabo and Kaza, and it is open most of the year. A combined Kinnaur and Spiti trip takes 8 to 10 days." },
      { q: "Where should I stay for the best view of Kinner Kailash?", a: "Kalpa, above Reckong Peo. Hotels on the hillside face the Kinner Kailash range directly, best seen at sunrise." },
      { q: "How many days are enough for Kinnaur?", a: "Four to five days from Shimla cover Sarahan, Sangla, Chitkul and Kalpa without rushing." },
      { q: "How far is Kalpa from Shimla?", a: "About 230 km by road, 8 to 9 hours via Narkanda and Rampur." },
      { q: "Is Chitkul worth visiting?", a: "Yes. It is the last inhabited village on the road in the Baspa valley, with wooden houses, the river and wide mountain views." },
      { q: "When is the best time for a Kinnaur road trip?", a: "April to June and September to October. Avoid the monsoon months of July and August because of landslides." },
    ],
  },
];
