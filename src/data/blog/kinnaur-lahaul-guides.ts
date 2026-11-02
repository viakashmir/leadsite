import type { BlogPost, BlogSection } from "./types";

// Kinnaur and Lahaul guides: Kalpa weather, Kinnaur in winter and October,
// Chitkul in winter, Sissu weather. Facts: Kalpa about 2,960 m, Reckong Peo
// about 2,290 m, Sangla about 2,700 m, Chitkul about 3,450 m, Kinner Kailash
// about 6,050 m; Sissu about 3,100 m, a short drive beyond the Atal Tunnel's
// north portal, about 40 km from Manali. Monthly temperatures are typical
// approximate ranges for planning, not forecasts. Foreign nationals need an
// Inner Line Permit for the Kinnaur border stretch. No em dashes, no invented
// prices.

const KINNAUR_PERMIT: BlogSection = {
  h: "Permits and practical tips",
  list: [
    "Indian nationals do not need a permit for Kinnaur.",
    "Foreign nationals need an Inner Line Permit for the border stretch beyond Reckong Peo towards Nako and Spiti.",
    "Reckong Peo has banks, ATMs, fuel and the district hospital. Carry cash for villages beyond.",
    "BSNL and Jio have the best coverage; signal is patchy in Sangla valley and beyond Chitkul.",
    "Drive in daylight: the Hindustan Tibet road has rockfall-prone stretches, especially after rain or snow.",
  ],
};

const SHIMLA_TO_KINNAUR: BlogSection = {
  h: "How to reach Kinnaur",
  list: [
    "From Shimla: about 230 km to Reckong Peo and Kalpa via Narkanda, Rampur and Karcham, 8 to 9 hours.",
    "To Sangla and Chitkul: turn off at Karcham. Sangla is about 18 km from Karcham, and Chitkul about 24 km beyond Sangla.",
    "From Delhi or Chandigarh: reach Shimla first (about 350 km and 115 km), then continue to Kinnaur the next day.",
    "HRTC buses run from Shimla to Reckong Peo, and local buses run to Kalpa, Sangla and Chitkul.",
    "Nearest airports: Chandigarh (best connected) and Shimla (limited flights). Nearest railhead: Kalka or Shimla.",
  ],
};

export const KINNAUR_LAHAUL_GUIDES: BlogPost[] = [
  {
    slug: "kalpa-weather-guide",
    title: "Kalpa Weather: Month by Month Temperature, Snowfall and Best Time to Visit",
    description:
      "Kalpa weather month by month: temperatures, snowfall months, monsoon rain, apple season, best time for Kinner Kailash views and what to pack for each season.",
    category: "Planning",
    destination: "himachal",
    city: "kinnaur",
    date: "2026-11-03",
    intro:
      "Kalpa, at about 2,960 m above Reckong Peo in Kinnaur, has cold, snowy winters and mild, pleasant summers. From December to February, days are around 2 to 8°C, nights fall to minus 5 to minus 10°C and snow covers the village and orchards. From May to September, days are a comfortable 17 to 25°C and nights cool. The best time for clear views of the Kinner Kailash range is October to November and March to May, with snow-covered peaks against blue sky. Monsoon rain in July and August is lighter than in lower Himachal but can trigger landslides on the road. This guide gives typical month-by-month weather, snowfall timing, the apple season and what to pack.",
    sections: [
      {
        h: "Kalpa weather at a glance",
        list: [
          "Winter (December to February): cold and snowy. Days 2 to 8°C, nights minus 5 to minus 10°C.",
          "Spring (March to April): cool, with snowmelt and blossom. Days 8 to 18°C.",
          "Summer (May to June): pleasant and sunny. Days 17 to 25°C, nights 6 to 13°C.",
          "Monsoon (July to August): mild, with some rain and landslide risk on the roads. Days 20 to 25°C.",
          "Autumn (September to November): clear, crisp and colourful, with the apple harvest. Days 9 to 22°C.",
        ],
      },
      {
        h: "Kalpa weather month by month",
        list: [
          "January: days about 2 to 6°C, nights about minus 6 to minus 10°C. Snowy and very cold.",
          "February: days about 4 to 8°C, nights about minus 4 to minus 8°C. Snow spells continue.",
          "March: days about 8 to 13°C, nights about minus 1 to minus 4°C. Snow melting, cold nights.",
          "April: days about 13 to 18°C, nights about 2 to 5°C. Apple blossom season begins.",
          "May: days about 17 to 22°C, nights about 6 to 9°C. Pleasant and clear.",
          "June: days about 20 to 25°C, nights about 10 to 13°C. The warmest stretch before the monsoon.",
          "July: days about 21 to 25°C, nights about 12 to 15°C. Some monsoon showers.",
          "August: days about 20 to 24°C, nights about 12 to 14°C. Showers and landslide risk on the roads.",
          "September: days about 18 to 22°C, nights about 8 to 11°C. Clearing skies and apple harvest.",
          "October: days about 14 to 18°C, nights about 3 to 6°C. Crisp, clear and golden.",
          "November: days about 9 to 13°C, nights about minus 1 to minus 4°C. Cold, clear, first snow possible.",
          "December: days about 4 to 8°C, nights about minus 4 to minus 8°C. Winter snow begins in earnest.",
        ],
      },
      {
        h: "When does it snow in Kalpa?",
        p: [
          "Snow usually falls in Kalpa from December to February, with occasional spells in late November and March. Heavy snowfall can cover the village and orchards for days and close the road from Reckong Peo for a while. The Kinner Kailash range above Kalpa stays snow-capped for most of the year.",
          "For snow in the village, January and February are the most reliable. For snow on the peaks with clear skies and easier roads, choose March, April, October or November.",
        ],
      },
      {
        h: "Best time to visit Kalpa",
        list: [
          "For views of Kinner Kailash: October to November and March to May, when skies are clearest.",
          "For apples: September to October, when Kinnaur's orchards are harvested.",
          "For snow: January and February, with warm clothing and flexible plans.",
          "For a Spiti trip via Shimla: May to October, using Kalpa as an acclimatisation stop.",
          "Months to plan carefully: July and August (landslides) and mid-winter (snow closures).",
        ],
      },
      {
        h: "Things to do in Kalpa",
        list: [
          "Watch sunrise on the Kinner Kailash range from your hotel or the village.",
          "Visit the Kinner Kailash Shivling viewpoint area and the old village temples and Buddhist monastery.",
          "Walk to Roghi village, about 8 km away, along a road cut into the cliffs.",
          "Explore the apple orchards, especially at harvest time.",
          "Use Kalpa as a base for day trips to Reckong Peo and, by road, to Sangla and Chitkul.",
        ],
      },
      SHIMLA_TO_KINNAUR,
      {
        h: "What to pack for Kalpa",
        list: [
          "Winter: thermals, a down jacket, gloves, a woollen cap and waterproof snow boots.",
          "Spring and autumn: a warm fleece or jacket for evenings, layers for the day.",
          "Summer: light layers and a sweater for nights.",
          "Monsoon: a rain jacket and waterproof shoes.",
          "All year: sunglasses and sunscreen for the strong mountain sun.",
        ],
      },
      KINNAUR_PERMIT,
    ],
    faqs: [
      { q: "What is the weather like in Kalpa?", a: "Cold and snowy in winter, with nights of minus 5 to minus 10°C, and mild in summer, with days of 17 to 25°C." },
      { q: "When does it snow in Kalpa?", a: "Usually from December to February, with occasional snow in late November and March." },
      { q: "What is the best time to visit Kalpa?", a: "October to November and March to May for clear views of Kinner Kailash, September to October for apples and January to February for snow." },
      { q: "How cold is Kalpa in January?", a: "Days are around 2 to 6°C and nights around minus 6 to minus 10°C." },
      { q: "Does it rain in Kalpa during the monsoon?", a: "Yes, though less than in lower Himachal. Showers in July and August can cause landslides on the road." },
      { q: "How do I check Kalpa weather today?", a: "Use a weather app or the IMD forecast for Kinnaur, and ask your hotel about road conditions before driving." },
      { q: "What is the altitude of Kalpa?", a: "About 2,960 m, above Reckong Peo in Kinnaur district." },
      { q: "How far is Kalpa from Shimla?", a: "About 230 km, or 8 to 9 hours by road via Narkanda, Rampur and Reckong Peo." },
    ],
  },
  {
    slug: "kinnaur-in-winter",
    title: "Kinnaur in Winter: Snow in Kalpa, Sangla and Chitkul, Roads and Stays",
    description:
      "Kinnaur in winter: snow in Kalpa, Sangla and Chitkul, temperatures, road closures on the Hindustan Tibet road, which hotels stay open and a 5-day winter plan.",
    category: "Itineraries",
    destination: "himachal",
    city: "kinnaur",
    date: "2026-11-03",
    intro:
      "Kinnaur in winter, from December to February, is a quiet, snowy valley of apple orchards, wooden temples and the Kinner Kailash range. Kalpa, at about 2,960 m, usually gets regular snow, and Sangla and Chitkul higher up the Baspa valley can be deep in it. The Hindustan Tibet road from Shimla stays open for most of the winter but closes after heavy snow or rockfall, and the road to Chitkul is often cut off for days. Many hotels close, but some in Kalpa, Reckong Peo and Sangla stay open with heating. This guide covers weather, snow, roads, stays and a 5-day winter plan.",
    sections: [
      {
        h: "Kinnaur weather in winter",
        list: [
          "Reckong Peo (about 2,290 m): days around 5 to 10°C, nights around minus 2 to minus 5°C.",
          "Kalpa (about 2,960 m): days around 2 to 8°C, nights around minus 5 to minus 10°C, with regular snow.",
          "Sangla (about 2,700 m): similar to Kalpa, with heavy snow in some years.",
          "Chitkul (about 3,450 m): the coldest, with deep snow and nights often below minus 10°C.",
          "Nako (about 3,600 m): very cold, with a frozen lake in mid-winter.",
        ],
      },
      {
        h: "Roads in winter",
        list: [
          "Shimla to Reckong Peo (NH 5): open on most days, but closes after heavy snow around Narkanda or rockfall beyond Rampur.",
          "Reckong Peo to Kalpa: a short climb that can close briefly after snow.",
          "Karcham to Sangla: usually open, with delays after snow.",
          "Sangla to Chitkul: often closed for days after heavy snow.",
          "Beyond Reckong Peo towards Nako and Spiti: open on most days, with closures after snow around Malling.",
          "Use a 4x4 or a car with chains, and drive in daylight.",
        ],
      },
      {
        h: "What is open in winter",
        list: [
          "Open: Kalpa, Reckong Peo and Sangla, with some hotels and homestays operating with heating.",
          "Often cut off: Chitkul after heavy snow; most of its guesthouses close for winter.",
          "Open with care: Nako and the road on to Spiti, for winter Spiti trips.",
          "Services: Reckong Peo has banks, ATMs, fuel and the district hospital.",
        ],
      },
      {
        h: "5-day Kinnaur winter itinerary",
        days: [
          "Shimla or Chandigarh to Narkanda and on to Sarahan, with the Bhimakali temple.",
          "Sarahan to Kalpa via Rampur and Reckong Peo. Evening view of the snowy Kinner Kailash range.",
          "Kalpa: walk to Roghi, explore the village temples and orchards under snow.",
          "Day trip to Sangla, and Chitkul only if the road is open. Kamru fort and village in Sangla.",
          "Kalpa to Shimla, or continue to Nako and Spiti for a winter Spiti trip.",
        ],
      },
      {
        h: "Kinnaur in winter vs Spiti in winter",
        list: [
          "Kinnaur is lower, less extreme and easier, with more open hotels and shorter drives from Shimla.",
          "Spiti is higher and harsher, with homestays only and nights of minus 20°C or below.",
          "Many winter trips combine both: Kinnaur first for acclimatisation, then Spiti.",
        ],
      },
      {
        h: "Mistakes to avoid",
        list: [
          "Planning Chitkul without a backup in case the road is closed.",
          "Booking a hotel without confirming it is open and heated in winter.",
          "Driving after dark on icy roads.",
          "Leaving no buffer day for snow closures.",
        ],
      },
      {
        h: "What to pack",
        list: [
          "Thermal inners, a fleece and a down jacket.",
          "Waterproof snow boots, gloves, a woollen cap and warm socks.",
          "Sunglasses and sunscreen.",
          "Power bank and head torch for power cuts.",
          "Cash and personal medicines.",
        ],
      },
      KINNAUR_PERMIT,
    ],
    faqs: [
      { q: "Is Kinnaur open in winter?", a: "Yes. The Shimla to Reckong Peo road and Kalpa are open on most days, with closures after heavy snow. Chitkul is often cut off." },
      { q: "Does it snow in Kalpa in winter?", a: "Yes. Kalpa usually gets regular snow from December to February." },
      { q: "Can I visit Chitkul in winter?", a: "Only when the road from Sangla is open. It often closes for days after heavy snow, and most guesthouses shut for winter." },
      { q: "How cold is Kinnaur in winter?", a: "Kalpa nights are around minus 5 to minus 10°C, and Chitkul is colder still." },
      { q: "Are hotels open in Kinnaur in winter?", a: "Some hotels and homestays in Kalpa, Reckong Peo and Sangla stay open with heating. Confirm before booking." },
      { q: "Is Kinnaur better than Spiti in winter?", a: "Kinnaur is easier and less extreme, with more open hotels. Spiti is harsher but more dramatic. Many trips combine both." },
      { q: "How many days are enough for Kinnaur in winter?", a: "Four to five days from Shimla covers Sarahan, Kalpa and Sangla, with Chitkul if the road is open." },
    ],
  },
  {
    slug: "kinnaur-in-october",
    title: "Kinnaur in October: Apple Harvest, Autumn Colours and Clear Kinner Kailash Views",
    description:
      "Kinnaur in October: apple harvest, golden autumn colours, Kalpa and Chitkul weather, clear Kinner Kailash views, roads, crowds and a 5-day Kinnaur itinerary.",
    category: "Itineraries",
    destination: "himachal",
    city: "kinnaur",
    date: "2026-11-03",
    intro:
      "October is one of the most beautiful months in Kinnaur. The apple harvest is finishing, the orchards and poplars turn gold, the monsoon has gone and the skies over the Kinner Kailash range are clear almost every day. Kalpa has crisp days of around 14 to 18°C and cold nights, Sangla and Chitkul in the Baspa valley glow with autumn colour, and roads are at their most stable. It is quieter than summer but busier than winter, so book good rooms in Kalpa and Chitkul a little ahead. This guide covers weather, the harvest, what to see and a 5-day plan.",
    sections: [
      {
        h: "Kinnaur weather in October",
        list: [
          "Kalpa: days around 14 to 18°C, nights around 3 to 6°C, colder late in the month.",
          "Sangla: similar to Kalpa, with frosty mornings by late October.",
          "Chitkul: days around 10 to 14°C, nights near or below freezing.",
          "Rain: rare; October is one of the driest months.",
          "Visibility: excellent, with clear views of Kinner Kailash and the Baspa valley peaks.",
        ],
      },
      {
        h: "Apple harvest and autumn colours",
        p: [
          "Kinnaur's apples, grown at high altitude, ripen later than those of lower Himachal. Harvest runs through September and into October, and the roads are busy with trucks carrying crates down to the plains. Many orchards sell apples directly, and some homestays let guests walk through the orchards.",
          "By mid to late October the poplars, willows and orchards turn gold and red, especially in the Baspa valley around Sangla, Rakchham and Chitkul.",
        ],
      },
      {
        h: "Places to visit in October",
        list: [
          "Kalpa: sunrise on Kinner Kailash, the old village, Roghi and the orchards.",
          "Sangla: Kamru fort and village, the Baspa river and the Bering Nag temple.",
          "Rakchham: a riverside village with meadows and autumn colour between Sangla and Chitkul.",
          "Chitkul (about 3,450 m): the last village of the Baspa valley, with the Mathi temple and wide views.",
          "Sarahan: the Bhimakali temple, on the way from Shimla.",
          "Nako: for those continuing to Spiti.",
        ],
      },
      {
        h: "5-day Kinnaur itinerary for October",
        days: [
          "Shimla to Sarahan via Narkanda and Rampur. Evening at the Bhimakali temple.",
          "Sarahan to Sangla via Karcham. Kamru fort in the afternoon.",
          "Day trip to Rakchham and Chitkul. Walk by the Baspa river and the Mathi temple.",
          "Sangla to Kalpa. Sunset over Kinner Kailash and a walk to Roghi.",
          "Kalpa to Shimla, or continue to Nako and Spiti.",
        ],
      },
      SHIMLA_TO_KINNAUR,
      {
        h: "Tips for October",
        list: [
          "Book Chitkul and Kalpa rooms with views a little ahead, especially on weekends.",
          "Expect harvest trucks on the Hindustan Tibet road; drive patiently.",
          "Carry warm layers: nights are cold, especially in Chitkul.",
          "Buy apples directly from orchards, and ask before entering private land.",
          "If you plan to continue to Spiti, the Manali side over Kunzum usually closes late in the month, so exit via Shimla.",
        ],
      },
      {
        h: "What to pack",
        list: [
          "Light layers for the day and a warm fleece or jacket for nights.",
          "Thermal inners for Chitkul.",
          "Comfortable walking shoes.",
          "Sunglasses and sunscreen.",
          "Cash for orchards and village shops.",
        ],
      },
      KINNAUR_PERMIT,
    ],
    faqs: [
      { q: "Is October a good time to visit Kinnaur?", a: "Yes. It is one of the best months, with clear skies, autumn colours, the end of the apple harvest and stable roads." },
      { q: "What is the weather in Kinnaur in October?", a: "Kalpa days are around 14 to 18°C and nights around 3 to 6°C. Chitkul is colder, with nights near freezing." },
      { q: "When is apple season in Kinnaur?", a: "Harvest runs through September and into October, later than in lower Himachal." },
      { q: "Is Chitkul open in October?", a: "Yes. Roads are open and guesthouses operate, though nights are cold." },
      { q: "How many days are enough for Kinnaur?", a: "Four to five days from Shimla covers Sarahan, Sangla, Chitkul and Kalpa." },
      { q: "Can I combine Kinnaur and Spiti in October?", a: "Yes. Enter via Kinnaur and exit via Shimla; the Manali side over Kunzum usually closes late in the month." },
    ],
  },
  {
    slug: "chitkul-in-winter",
    title: "Chitkul in Winter: Snow, Road Status, Stays and Is It Worth Visiting",
    description:
      "Chitkul in winter: snowfall months, temperatures, whether the Sangla to Chitkul road is open, which stays operate, what to see and how to plan a safe winter visit.",
    category: "Adventure",
    destination: "himachal",
    city: "kinnaur",
    date: "2026-11-03",
    intro:
      "Chitkul, at about 3,450 m at the head of the Baspa valley in Kinnaur, is often called the last village on the Indian side of the old trade route to Tibet. In winter it turns into a snowbound hamlet of wooden houses and slate roofs, with the frozen Baspa river and white peaks all around. It is also hard to reach: the 24 km road from Sangla often closes for days after heavy snow, most guesthouses shut from about November to March, and nights fall well below minus 10°C. A winter visit is worth it for prepared travellers with a flexible plan. This guide covers snow, roads, stays and how to plan.",
    sections: [
      {
        h: "Chitkul weather in winter",
        list: [
          "November: cold and clear, with nights around minus 3 to minus 8°C. First snow possible.",
          "December: snow becomes regular. Days around 0 to 5°C, nights minus 8 to minus 12°C.",
          "January: the coldest month, with deep snow and nights often below minus 12°C.",
          "February: still snowy and very cold, with heavy snowfall in some years.",
          "March: slowly warming, with snow lingering into April.",
        ],
      },
      {
        h: "Is the road to Chitkul open in winter?",
        list: [
          "The road runs from Karcham to Sangla (about 18 km) and on to Chitkul (about 24 km) via Rakchham.",
          "In winter, the Sangla to Chitkul stretch often closes after heavy snow and can stay shut for days until it is cleared.",
          "On clear days between snow spells, the road is usually open, sometimes only for 4x4s or vehicles with chains.",
          "Ask your Sangla hotel or the local police the evening before. Do not attempt the road during snowfall.",
        ],
      },
      {
        h: "Where to stay",
        list: [
          "Most Chitkul guesthouses close from about November to March.",
          "A few homestays may stay open; confirm directly before you go.",
          "The safer plan is to stay in Sangla, which has more open, heated hotels, and visit Chitkul as a day trip when the road is clear.",
          "Rakchham, between Sangla and Chitkul, has a few stays that may operate in early winter.",
        ],
      },
      {
        h: "What to see in Chitkul in winter",
        list: [
          "The village itself: wooden houses, slate roofs and stacked firewood under snow.",
          "The Mathi temple, the village's main shrine, with carved wooden architecture.",
          "The frozen edges of the Baspa river and the snowfields beyond the village.",
          "Views towards the peaks at the head of the valley; the road beyond the village is controlled by the ITBP and closed to tourists.",
          "Rakchham's meadows and river on the way.",
        ],
      },
      {
        h: "How to plan a winter visit",
        days: [
          "Shimla to Sarahan or Rampur.",
          "Rampur to Sangla via Karcham. Check road status to Chitkul in the evening.",
          "Day trip to Chitkul if the road is open, back to Sangla by mid-afternoon. If closed, explore Kamru fort and Sangla instead.",
          "Sangla to Kalpa for the Kinner Kailash views.",
          "Kalpa to Shimla.",
        ],
      },
      {
        h: "Is Chitkul worth visiting in winter?",
        list: [
          "Yes, if you love snow, solitude and photography, and can accept that the road may be closed.",
          "Go with a 4x4 and an experienced local driver.",
          "Keep Chitkul as a flexible day trip, not a fixed overnight.",
          "If you want guaranteed access and open stays, visit from April to November instead.",
        ],
      },
      {
        h: "What to pack",
        list: [
          "Thermal inners, a down jacket rated for minus 15°C or colder and a woollen cap.",
          "Insulated waterproof boots, gloves and warm socks.",
          "Sunglasses and sunscreen for snow glare.",
          "Snacks, water and cash: very little is open in Chitkul in winter.",
        ],
      },
      SHIMLA_TO_KINNAUR,
    ],
    faqs: [
      { q: "Is Chitkul open in winter?", a: "The village is inhabited, but the road from Sangla often closes after heavy snow and most guesthouses shut from about November to March." },
      { q: "When does it snow in Chitkul?", a: "Usually from December to February, with snow possible in November and lingering into March and April." },
      { q: "How cold is Chitkul in winter?", a: "Days are around 0 to 5°C in December and nights can drop below minus 12°C in January." },
      { q: "Where should I stay to visit Chitkul in winter?", a: "Stay in Sangla, which has more open and heated hotels, and visit Chitkul as a day trip when the road is clear." },
      { q: "How far is Chitkul from Sangla?", a: "About 24 km via Rakchham, usually around an hour in good conditions." },
      { q: "Can I go beyond Chitkul?", a: "No. The road beyond the village towards the border is controlled by the ITBP and closed to tourists." },
      { q: "Is Chitkul worth visiting in winter?", a: "Yes for prepared travellers with a flexible plan. For guaranteed access, visit between April and November." },
    ],
  },
  {
    slug: "sissu-weather-guide",
    title: "Sissu Weather: Month by Month Temperature, Snowfall and Best Time to Visit",
    description:
      "Sissu weather month by month: Lahaul temperatures, snow from December to March, best time for snow or green valleys, Atal Tunnel access and packing tips.",
    category: "Planning",
    destination: "himachal",
    city: "lahaul",
    date: "2026-11-03",
    intro:
      "Sissu, at about 3,100 m in the Lahaul valley, is the first village beyond the Atal Tunnel and one of the easiest places from Manali to see deep snow. From December to March it is snowbound, with daytime temperatures around freezing and nights of minus 10 to minus 18°C. From May to September it turns green, with the Sissu waterfall in full flow, the Chandra river and pleasant days of 13 to 22°C. Because Lahaul lies partly in the rain shadow, monsoon rain is lighter than in Manali. This guide gives typical month-by-month weather, when to see snow, road access through the Atal Tunnel and what to pack.",
    sections: [
      {
        h: "Sissu weather at a glance",
        list: [
          "Winter (December to February): deep snow. Days around minus 3 to plus 4°C, nights minus 10 to minus 18°C.",
          "Spring (March to April): snow melting, still cold. Days 3 to 13°C.",
          "Summer (May to June): pleasant and green. Days 13 to 22°C, nights 2 to 9°C.",
          "Monsoon (July to August): mild, lighter rain than Manali. Days 18 to 23°C.",
          "Autumn (September to November): clear and crisp, cold by November. Days 4 to 20°C.",
        ],
      },
      {
        h: "Sissu weather month by month",
        list: [
          "January: days about minus 3 to 3°C, nights about minus 12 to minus 18°C. Deep snow.",
          "February: days about minus 2 to 4°C, nights about minus 10 to minus 16°C. Snowbound.",
          "March: days about 3 to 8°C, nights about minus 6 to minus 10°C. Snow starting to melt.",
          "April: days about 8 to 13°C, nights about minus 2 to minus 4°C. Snowmelt and slush.",
          "May: days about 13 to 18°C, nights about 2 to 5°C. Green slopes return.",
          "June: days about 17 to 22°C, nights about 6 to 9°C. The waterfall in full flow.",
          "July: days about 18 to 23°C, nights about 9 to 12°C. Some showers.",
          "August: days about 18 to 22°C, nights about 9 to 11°C. Green and mild.",
          "September: days about 15 to 20°C, nights about 4 to 7°C. Clear and pleasant.",
          "October: days about 10 to 14°C, nights about minus 1 to minus 3°C. Crisp and golden.",
          "November: days about 4 to 8°C, nights about minus 6 to minus 9°C. First snow possible.",
          "December: days about minus 1 to 4°C, nights about minus 10 to minus 14°C. Snow sets in.",
        ],
      },
      {
        h: "When does it snow in Sissu?",
        p: [
          "Snow usually arrives in late November or December and stays until March, with the deepest snow in January and February. Early spring, March and early April, can still bring snow and has thick snow cover. For green valleys and the waterfall, visit from late May to September.",
        ],
      },
      {
        h: "Getting to Sissu: Atal Tunnel and winter access",
        list: [
          "Sissu is about 40 km from Manali via Solang and the Atal Tunnel, normally 1.5 to 2 hours.",
          "The Atal Tunnel, about 9 km long, keeps Lahaul reachable in winter, so Sissu is accessible for most of the year.",
          "After heavy snow, the police may restrict tourist vehicles beyond the tunnel or near Sissu until the road is cleared.",
          "Use a 4x4 or a car with chains in winter, and drive back before dark when the road ices.",
          "In winter, Manali taxis run to Sissu for snow trips; ask about current restrictions before you set out.",
        ],
      },
      {
        h: "Best time to visit Sissu",
        list: [
          "For snow: December to March, with January and February the snowiest.",
          "For green meadows and the waterfall: late May to September.",
          "For clear skies and golden colours: late September to October.",
          "For a Spiti or Leh road trip: June to October, with Sissu as a stop on the way.",
        ],
      },
      {
        h: "Things to do in Sissu",
        list: [
          "See the Sissu waterfall cascading down the cliffs opposite the village.",
          "Walk to Sissu lake, a small seasonal lake near the village.",
          "Play in the snow in winter, with sledges and snow scooters run by locals.",
          "Walk along the Chandra river and enjoy views of the Lahaul peaks.",
          "Continue to Keylong, Jispa or, in summer, towards Chandratal and Spiti.",
        ],
      },
      {
        h: "What to pack for Sissu",
        list: [
          "Winter: thermals, a down jacket, waterproof snow boots, gloves and a woollen cap.",
          "Spring and autumn: a warm jacket and layers.",
          "Summer: light layers and a sweater for evenings.",
          "All year: sunglasses and sunscreen for the strong sun at altitude.",
        ],
      },
    ],
    faqs: [
      { q: "What is the weather in Sissu?", a: "Snowbound in winter, with nights of minus 10 to minus 18°C, and mild and green in summer, with days of 13 to 22°C." },
      { q: "When does it snow in Sissu?", a: "Usually from late November or December to March, with the deepest snow in January and February." },
      { q: "Is Sissu open in winter?", a: "Usually yes, through the Atal Tunnel. After heavy snow, tourist vehicles may be restricted until the road is cleared." },
      { q: "How far is Sissu from Manali?", a: "About 40 km via the Atal Tunnel, normally 1.5 to 2 hours." },
      { q: "What is the best time to visit Sissu?", a: "December to March for snow, late May to September for green valleys and the waterfall." },
      { q: "How cold is Sissu in January?", a: "Days are around minus 3 to 3°C and nights around minus 12 to minus 18°C." },
      { q: "Does it rain in Sissu?", a: "Lahaul gets lighter monsoon rain than Manali, with some showers in July and August." },
      { q: "What is the altitude of Sissu?", a: "About 3,100 m in the Lahaul valley." },
    ],
  },
];
