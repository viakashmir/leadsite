import type { GuideContent } from "@/lib/locations";

// Manali, Lahaul and the Rohtang / Atal Tunnel side of Himachal.
// Rules: fact-based, no invented prices, no em dashes. Temperatures are typical
// ranges, not forecasts. Re-check permit rules and pass openings each season:
// rohtangpermits.hp.gov.in (Rohtang), e-Aagman (Lahaul entry), BRO/HP police advisories.

export const MANALI_CITIES: Record<string, GuideContent> = {
  manali: {
    intro:
      "Manali is a hill town at about 2,050 m at the head of the Kullu valley in Himachal Pradesh, on the Beas river. It is the base for Solang Valley, Rohtang Pass, the Atal Tunnel and Sissu in Lahaul, and the start of the Manali to Leh highway. Most trips spend 3 to 5 nights here.\n\nThe town has two sides: the Mall Road area with hotels, shops and the Hadimba Temple, and Old Manali and Vashisht across the river, with cafes, homestays and hot springs. Kullu is 40 km south, and Kasol and the Parvati valley are about 75 km away, so many itineraries combine them.",
    highlights: [
      "Snow at Solang Valley in winter, and paragliding, ropeway and ATV rides in other months",
      "Rohtang Pass (3,978 m), open roughly May to November with an online permit",
      "Atal Tunnel to Sissu and Lahaul, open through most of the year",
      "Hadimba Devi Temple, built in 1553 in a cedar forest",
      "Old Manali cafes and Vashisht hot springs",
      "Starting point of the Manali to Leh road trip and the Spiti circuit via Kunzum La",
    ],
    idealDuration: "3 to 5 days",
    bestMonths: "March to June for pleasant weather, December to February for snow",
    gateway: "Bhuntar airport (KUU), 50 km; Chandigarh by road",
    facts: [
      { label: "Altitude", value: "About 2,050 m" },
      { label: "District", value: "Kullu, Himachal Pradesh" },
      { label: "Distance from Delhi", value: "About 540 km by road" },
    ],
    bestTimeToVisit:
      "Manali has two peak seasons. March to June brings clear days of 15 to 25°C, apple blossom in April, and the opening of Rohtang Pass, usually in May. December to February is the snow season: Manali town gets snowfall in most winters, and Solang Valley and Sissu are reliably white.\n\nJuly to mid September is monsoon, with landslide risk on the Kullu to Manali highway and on the roads to Rohtang and Lahaul. Late September to November is dry, cool and less crowded, and a good time for road trips before the high passes close.",
    seasons: [
      { name: "Spring and summer", months: "March to June", note: "Sightseeing weather, Rohtang opens around May, peak crowds in May and June." },
      { name: "Monsoon", months: "July to mid September", note: "Green but rainy; landslides can block roads. Keep a buffer day." },
      { name: "Autumn", months: "Late September to November", note: "Clear skies, cool nights, fewer people. Good for Lahaul and Spiti road trips until passes close." },
      { name: "Winter", months: "December to February", note: "Snowfall in town in most years, snow play at Solang and Sissu. Some roads close after heavy snow." },
    ],
    months: [
      { month: "January", tempC: "Day 5 to 10°C, night -5 to 0°C", weather: "The coldest month, with regular snowfall in Manali and heavy snow at Solang and Sissu.", goodFor: "Snow lovers and families who want snow play; carry heavy woollens." },
      { month: "February", tempC: "Day 6 to 11°C, night -4 to 1°C", weather: "Still snowy, with sunnier spells late in the month.", goodFor: "Good for snow at Solang; roads beyond the Atal Tunnel may close after fresh snowfall." },
      { month: "March", tempC: "Day 10 to 15°C, night 0 to 4°C", weather: "Snow melts in town but stays at Solang and higher; occasional late snowfall.", goodFor: "Quieter month with snow still visible at higher points." },
      { month: "April", tempC: "Day 15 to 20°C, night 4 to 8°C", weather: "Spring with apple blossom and mostly clear days. Snow remains at Solang top, Atal Tunnel north portal and Sissu.", goodFor: "Pleasant sightseeing; Rohtang is usually still closed in April." },
      { month: "May", tempC: "Day 18 to 25°C, night 8 to 12°C", weather: "Warm days and cool nights. Rohtang Pass usually reopens in the middle of May with snow walls along the road.", goodFor: "Families and honeymooners; book permits and hotels early, it is peak season." },
      { month: "June", tempC: "Day 20 to 27°C, night 11 to 15°C", weather: "The busiest month. Snow at Rohtang patches and Baralacha La; the Manali to Leh road and Kunzum La usually open.", goodFor: "Road trips to Lahaul, Spiti and Leh." },
      { month: "July", tempC: "Day 20 to 26°C, night 14 to 17°C", weather: "Monsoon rain, lush valleys and landslide risk.", goodFor: "Travellers who do not mind rain; Lahaul beyond the tunnel stays drier." },
      { month: "August", tempC: "Day 20 to 25°C, night 14 to 16°C", weather: "Wettest period, with the highest risk of road closures.", goodFor: "Keep flexible dates and a buffer day." },
      { month: "September", tempC: "Day 18 to 24°C, night 9 to 13°C", weather: "Rain eases from mid month; clear mountain views return.", goodFor: "Good value and fewer crowds, apple harvest begins." },
      { month: "October", tempC: "Day 15 to 21°C, night 4 to 8°C", weather: "Dry, sunny and cold at night, with golden autumn colours.", goodFor: "Photography, Kasol and Lahaul trips; high passes start closing late in the month." },
      { month: "November", tempC: "Day 10 to 16°C, night 0 to 4°C", weather: "Cold and dry; first snowfall at higher points. Rohtang closes during the month.", goodFor: "Budget trips before the winter rush." },
      { month: "December", tempC: "Day 7 to 12°C, night -3 to 2°C", weather: "Winter sets in; snowfall usually begins in late December.", goodFor: "Christmas and New Year snow holidays; book early." },
    ],
    howToReach: {
      air: "Bhuntar airport (KUU) near Kullu, about 50 km away, has limited flights from Delhi. Chandigarh airport, about 300 km away, has many more flights.",
      rail: "There is no railway to Manali. The nearest practical railheads are Chandigarh and Kalka, about 300 km away, followed by a bus or taxi.",
      road: "Overnight Volvo buses from Delhi (Kashmere Gate, Majnu ka Tilla) take 12 to 14 hours. By car, Delhi to Manali is about 540 km via Chandigarh, Bilaspur, Mandi and Kullu.",
      local: "Local taxis from the Manali taxi union run fixed-rate sightseeing to Solang, Atal Tunnel, Sissu and Rohtang. Private outstation cabs need the same permits for Rohtang.",
    },
    routes: [
      { from: "Delhi", to: "Manali", distanceKm: "About 540 km by road", time: "12 to 14 hours", how: "Via Chandigarh, Kiratpur, Bilaspur, Mandi and Kullu on NH 205 and NH 3. Overnight Volvo buses leave Delhi in the evening and reach Manali next morning." },
      { from: "Shimla", to: "Manali", distanceKm: "About 250 km by road", time: "7 to 9 hours", how: "Via Mandi and Kullu. Most Shimla Manali packages drive this in one day with stops at Sundernagar lake and Pandoh dam." },
      { from: "Chandigarh", to: "Manali", distanceKm: "About 300 km by road", time: "7 to 9 hours", how: "Via Kiratpur, Bilaspur and Mandi through the four-lane highway and the Kiratpur to Ner Chowk tunnels." },
      { from: "Manali", to: "Sissu", distanceKm: "About 40 km by road", time: "1.5 to 2 hours", how: "Through the Atal Tunnel (south portal about 25 km from Manali). No Rohtang permit is needed for the tunnel route." },
      { from: "Manali", to: "Chandratal", distanceKm: "About 120 km by road", time: "5 to 6 hours", how: "Through the Atal Tunnel to Gramphu, then the rough Chhatru and Batal road; the lake is 14 km from Batal. Open roughly mid June to early October." },
      { from: "Manali", to: "Kaza (Spiti)", distanceKm: "About 200 km by road", time: "8 to 10 hours", how: "Via Atal Tunnel, Gramphu, Batal and Kunzum La (4,551 m). Usually open from June to October; otherwise reach Spiti from Shimla through Kinnaur." },
      { from: "Manali", to: "Lahaul (Keylong)", distanceKm: "About 70 km by road", time: "2 to 3 hours", how: "Through the Atal Tunnel and along the Chandra and Bhaga rivers. Keylong is the district headquarters of Lahaul and Spiti." },
      { from: "Manali", to: "McLeodganj", distanceKm: "About 230 km by road", time: "7 to 8 hours", how: "Via Mandi, Baijnath and Palampur. Overnight HRTC and private buses also run to Dharamshala." },
      { from: "Manali", to: "Rohtang Pass", distanceKm: "About 51 km by road", time: "2 to 3 hours each way", how: "Via Kothi and Marhi, with a vehicle permit. The pass is usually open from May to November." },
    ],
    thingsToKnow: [
      "Rohtang Pass needs an online vehicle permit with a daily limit; Solang, the Atal Tunnel and Sissu do not.",
      "Vehicles entering Lahaul register on the free e-Aagman portal; check current advisories in snow season.",
      "Weekend traffic between Manali, Solang and the Atal Tunnel can be heavy; leave by 7 am.",
      "Snow clothing and boots can be rented at Solang and on the Rohtang road.",
      "Keep a buffer day in monsoon and after heavy snowfall.",
    ],
    blocks: [
      {
        heading: "What Manali is famous for",
        body: "Manali is famous for snow in winter, the drive to Rohtang Pass and the Atal Tunnel, adventure sports at Solang Valley, the Hadimba Temple, apple orchards and the cafe culture of Old Manali. It is also known as the gateway to Lahaul, Spiti and Leh.",
      },
      {
        heading: "Famous food in Manali: local dishes to try",
        items: [
          "Siddu: steamed wheat bread stuffed with walnut, poppy seed or lentil, eaten with ghee",
          "Trout from the Beas and local fish farms, usually grilled or fried",
          "Babru and patande, Kullu-style fried bread and pancakes",
          "Himachali dham dishes such as madra (chickpeas in yoghurt) and sepu vadi",
          "Tibetan thukpa and momos from the Tibetan quarter near the Mall",
          "Fresh apple juice, cider and jams from the orchards in season",
        ],
      },
      {
        heading: "Shopping in Manali: things to buy",
        items: [
          "Kullu shawls and caps woven in the valley, sold at the Mall and the Bhuttico showrooms",
          "Pashmina and woollen stoles; buy from government or cooperative stores to be sure of quality",
          "Tibetan handicrafts, prayer wheels and thangkas at the Tibetan Market on Mall Road",
          "Dry fruit, apple products, walnuts and local honey",
          "Hand-knitted socks, gloves and woollens for the snow",
        ],
      },
      {
        heading: "Snow in Manali: when and where to find it",
        body: "Manali town usually gets snowfall between late December and February. When there is no snow in town, the nearest snow points are Solang Valley (14 km), the Atal Tunnel north portal and Sissu (about 40 km), and from mid May Marhi and Rohtang Pass. In April snow is usually still found at Solang top and around Sissu.",
      },
      {
        heading: "Offbeat places near Manali",
        items: [
          "Sethan village, 12 km from Manali, for snow and igloo stays in winter",
          "Jana waterfall and Naggar Castle on the left bank of the Beas",
          "Hamta village and the Hamta Pass trek trailhead",
          "Jispa and Sissu in Lahaul through the Atal Tunnel",
          "Gulaba and Kothi on the old Rohtang road",
        ],
      },
    ],
    faqs: [
      { q: "How many days are enough for a Manali trip?", a: "Three to four days cover Manali, Solang Valley and either Rohtang Pass or the Atal Tunnel and Sissu. Add one or two days for Kasol or Kullu, or three to four for Lahaul or Spiti." },
      { q: "Which is the best month for snow in Manali?", a: "January and February are the most reliable months for snow in Manali town. From March to May you will usually find snow at Solang top, Sissu and, once it opens, Rohtang Pass." },
      { q: "Do I need a permit to go to Solang Valley or the Atal Tunnel?", a: "No. Permits are needed only for vehicles crossing Rohtang Pass. Lahaul entry through the tunnel needs free e-Aagman registration of the vehicle." },
      { q: "What is the total cost of a Manali trip?", a: "It depends on travel mode from your city, hotel category, cab type and whether Rohtang is included. Share your dates and budget and up to 3 agents will send itemised quotes you can compare." },
      { q: "Is Kullu and Manali the same place?", a: "No. Kullu is the district headquarters 40 km south of Manali, known for river rafting and the Dussehra festival. Manali is at the top of the same valley, and trips usually cover both." },
    ],
    sections: {
      "things-to-do": {
        intro: "Adventure activities in Manali are run by registered operators at Solang Valley, on the Beas and around Kullu. Paragliding at Solang and Dobhi, river rafting near Kullu, skiing in winter and ATV and zorbing rides are the most booked. Ask your agent to include them or book on the spot with a registered operator.",
        blocks: [
          {
            heading: "Adventure sports in Kullu Manali",
            items: [
              "Paragliding at Solang Valley and Dobhi near Kullu, short and long flights",
              "River rafting on the Beas between Pirdi and Jhiri near Kullu, usually April to June and September to October",
              "Skiing and snowboarding at Solang in January and February",
              "Ropeway and ATV rides at Solang Valley",
              "Treks to Hampta Pass, Bhrigu Lake and Beas Kund",
              "Camping in Sethan, Jispa and Sissu",
            ],
          },
        ],
      },
      "travel-guide-tips": {
        intro: "The total cost of a Manali trip depends on how you reach (bus, train plus taxi, or flight), hotel category, cab type and whether you include Rohtang Pass, Lahaul or adventure activities. Peak weeks around May, June, Christmas and New Year cost noticeably more than March, September or November.",
      },
    },
    packages: {
      intro: "Manali packages are usually 4 to 6 days, starting with an overnight Volvo or a cab from Delhi or Chandigarh. Most cover Hadimba Temple, Old Manali, Vashisht, a full day at Solang Valley and a day trip through the Atal Tunnel to Sissu, or to Rohtang Pass in season. Longer packages add Kasol, Kullu, or a road trip to Lahaul and Spiti.",
      itineraries: [
        {
          title: "4-day Manali itinerary",
          days: [
            "Arrive in Manali, check in, visit Hadimba Temple, Manu Temple and the Mall Road.",
            "Solang Valley for snow, the ropeway, paragliding or ATV rides.",
            "Atal Tunnel and Sissu in Lahaul, or Rohtang Pass with a permit in season.",
            "Old Manali and Vashisht hot springs, then depart.",
          ],
        },
        {
          title: "Manali to Lahaul and Spiti tour plan (7 days)",
          days: [
            "Manali sightseeing.",
            "Manali to Jispa through the Atal Tunnel and Keylong.",
            "Jispa to Chandratal via Gramphu and Batal; overnight in camps near the lake.",
            "Chandratal to Kaza over Kunzum La.",
            "Kaza local: Key Monastery, Kibber, Langza and Hikkim.",
            "Kaza to Manali over Kunzum La.",
            "Depart from Manali.",
          ],
        },
      ],
      themes: {
        "honeymoon-packages": {
          intro: "Manali honeymoon tours usually include a stay in Old Manali or a riverside resort, a candle-light dinner, snow at Solang or Sissu, and a day in Naggar or Kasol. December to February suits couples who want snow; March to June suits those who want sightseeing weather.",
        },
      },
      faqs: [
        { q: "What does a Manali budget package include?", a: "Usually travel from Delhi by Volvo, 3 nights in a standard hotel with breakfast, a cab for local sightseeing and Solang Valley, and a day trip to Sissu or Rohtang. Adventure activities and Rohtang permits are often extra." },
        { q: "Is Rohtang Pass included in Manali tour packages?", a: "Only in season, roughly mid May to November, and subject to the daily permit limit. Outside that window packages include the Atal Tunnel and Sissu instead." },
      ],
    },
    packagesDescription:
      "Customised Manali tour packages with Solang Valley, Atal Tunnel, Sissu and Rohtang Pass. Compare up to 3 quotes from verified local agents.",
    guideDescription:
      "Manali travel guide: best time for snow, month-by-month weather, distances from Delhi and Shimla, famous food, shopping and adventure activities.",
  },

  kullu: {
    intro:
      "Kullu is the district headquarters of the Kullu valley, about 40 km south of Manali on the Beas river, at roughly 1,220 m. It is known for river rafting, shawl weaving, the Bijli Mahadev and Raghunath temples, and the Kullu Dussehra festival held each October. The Bhuntar airport that serves Manali is 10 km from Kullu town.\n\nMost visitors pass through Kullu on the way to Manali or Kasol and stop for rafting, shawl factories and the temples. Quieter valleys such as Shangarh in the Sainj valley are reached from here.",
    highlights: [
      "River rafting on the Beas near Kullu",
      "Kullu Dussehra in October, when village deities gather at Dhalpur maidan",
      "Bijli Mahadev temple on a ridge above the valley",
      "Kullu shawl weaving centres",
      "Shangarh meadow in the Sainj valley",
    ],
    idealDuration: "1 to 2 days",
    bestMonths: "March to June, September to November",
    gateway: "Bhuntar airport (KUU), 10 km",
    faqs: [
      { q: "What is Kullu famous for?", a: "River rafting, Kullu shawls, the Dussehra festival in October, and temples such as Bijli Mahadev and Raghunath Temple." },
      { q: "How far is Kullu from Manali?", a: "About 40 km, roughly 1.5 hours by road along the Beas." },
    ],
  },

  lahaul: {
    intro:
      "Lahaul is the high valley on the north side of the Pir Panjal range, in the Lahaul and Spiti district of Himachal Pradesh. Since the Atal Tunnel opened in October 2020, Sissu, Keylong and Jispa are reached from Manali in one to three hours through most of the year. The valley follows the Chandra and Bhaga rivers, which meet at Tandi to form the Chenab.\n\nLahaul is the first leg of the Manali to Leh highway, which climbs past Darcha and Zingzingbar to Baralacha La. In winter the valley is under snow and access beyond Sissu depends on road clearance.",
    highlights: [
      "Sissu village and waterfall, 13 km from the Atal Tunnel north portal",
      "Keylong, the district headquarters, and Kardang Monastery",
      "Camping at Jispa on the Bhaga river",
      "Baralacha La (4,890 m) on the road to Leh",
      "Snow from December to March, reachable through the tunnel",
    ],
    idealDuration: "1 to 3 days",
    bestMonths: "May to October; December to March for snow at Sissu",
    gateway: "Manali through the Atal Tunnel",
    howToReach: {
      road: "From Manali through the Atal Tunnel: about 40 km to Sissu, 70 km to Keylong and 90 km to Jispa. The old route over Rohtang Pass is only open in summer.",
      local: "Manali taxis run day trips to Sissu. Vehicles entering Lahaul register on the free e-Aagman portal; snowfall can close the road beyond the tunnel.",
    },
    routes: [
      { from: "Manali", to: "Lahaul", distanceKm: "About 40 km to Sissu, 70 km to Keylong", time: "1.5 to 3 hours", how: "Through the 9.02 km Atal Tunnel, which saves about 45 km and 3 to 4 hours compared with the old Rohtang route." },
      { from: "Keylong", to: "Leh", distanceKm: "About 350 km", time: "Two days with a night stop", how: "Via Jispa, Darcha, Baralacha La, Sarchu, Nakee La, Lachulung La and Tanglang La. Usually open from June to October." },
    ],
  },

  "spiti-valley": {
    intro:
      "Spiti Valley is a cold desert valley in the Lahaul and Spiti district of Himachal Pradesh, between about 3,200 m and 4,500 m, bordering Tibet. Its main town is Kaza. The valley is known for old Buddhist monasteries such as Key, Dhankar and Tabo, high villages like Kibber, Langza and Hikkim, and Chandratal lake on the Lahaul side.\n\nSpiti is reached two ways: from Shimla through Kinnaur and Nako, which is open most of the year, or from Manali over Kunzum La, which is open only from about June to October. A full circuit enters by one route and leaves by the other, taking 7 to 10 days.",
    highlights: [
      "Key Monastery above the Spiti river near Kaza",
      "Chandratal lake at about 4,300 m",
      "Dhankar Monastery and the Dhankar lake walk",
      "Tabo Monastery, founded in 996",
      "Kibber, Langza, Hikkim and Komic, among the highest villages reachable by road",
      "Pin Valley National Park, habitat of the Himalayan ibex and snow leopard",
    ],
    idealDuration: "7 to 10 days",
    bestMonths: "June to September for the full circuit; winter trips from Shimla only",
    gateway: "Shimla or Manali by road",
    facts: [
      { label: "Main town", value: "Kaza, about 3,800 m" },
      { label: "Entry routes", value: "Shimla via Kinnaur (most of the year), Manali via Kunzum La (about June to October)" },
    ],
    bestTimeToVisit:
      "June to September is the best time to visit Spiti Valley. Both routes are usually open, Chandratal camps operate, and day temperatures in Kaza are around 15 to 25°C. Kunzum La on the Manali side normally opens between late May and June and closes after the first heavy snow in October or November.\n\nFrom November to April Spiti can be visited only from Shimla through Kinnaur, and temperatures fall well below freezing. Winter trips, including February snow trips, are for prepared travellers with experienced drivers and homestays that stay open.",
    months: [
      { month: "February", tempC: "Day -5 to 5°C, night -20 to -10°C", weather: "Deep winter. The Manali side is closed; the Shimla and Kinnaur road stays open with care.", goodFor: "Snow-leopard and winter homestay trips with experienced operators only." },
      { month: "May", tempC: "Day 8 to 18°C, night -2 to 5°C", weather: "Spring with snow on the passes. Kunzum La may still be closed.", goodFor: "Enter from Shimla and Kinnaur." },
      { month: "June", tempC: "Day 15 to 22°C, night 3 to 8°C", weather: "The Manali route and Chandratal usually open during June.", goodFor: "The start of the full circuit season." },
      { month: "July", tempC: "Day 18 to 25°C, night 7 to 12°C", weather: "Spiti itself gets little rain, but Kinnaur and the Manali side can have landslides.", goodFor: "Monasteries, villages and Chandratal camping." },
      { month: "September", tempC: "Day 14 to 22°C, night 0 to 6°C", weather: "Dry and clear, with harvest colours.", goodFor: "Photography and clear skies for stargazing." },
      { month: "October", tempC: "Day 8 to 16°C, night -6 to 2°C", weather: "Cold nights; Chandratal camps wind up and Kunzum La can close after early snow.", goodFor: "Quiet trips from the Shimla side." },
    ],
    howToReach: {
      air: "The nearest airports are Bhuntar near Kullu and Shimla's Jubbarhatti, both with limited flights, or Chandigarh with many flights.",
      rail: "The nearest railheads are Shimla (narrow gauge from Kalka) and Chandigarh or Kalka on the broad gauge.",
      road: "From Shimla via Narkanda, Rampur, Reckong Peo, Nako and Tabo to Kaza (about 420 km, two days). From Manali via the Atal Tunnel, Batal and Kunzum La to Kaza (about 200 km, one long day, about June to October).",
      local: "HRTC buses link Kaza with Reckong Peo and, in summer, Manali. Most travellers hire a cab for the circuit.",
    },
    routes: [
      { from: "Delhi", to: "Spiti Valley", distanceKm: "About 730 km to Kaza via Shimla", time: "Two to three days", how: "Delhi to Shimla or Narkanda on day 1, Kinnaur (Kalpa or Sangla) on day 2, Kaza on day 3. In summer you can also go via Manali (about 740 km)." },
      { from: "Manali", to: "Spiti Valley", distanceKm: "About 200 km to Kaza", time: "8 to 10 hours", how: "Through the Atal Tunnel, Gramphu, Chhatru, Batal and Kunzum La. Open roughly June to October; the road is rough between Gramphu and Losar." },
      { from: "Shimla", to: "Spiti Valley", distanceKm: "About 420 km to Kaza", time: "Two days", how: "On the Hindustan-Tibet road (NH 5) through Narkanda, Rampur and Reckong Peo, then along the Spiti river via Nako and Tabo." },
      { from: "Chandigarh", to: "Spiti Valley", distanceKm: "About 530 km to Kaza via Shimla", time: "Two to three days", how: "HRTC buses run Chandigarh to Reckong Peo; change there for Kaza." },
      { from: "Mumbai", to: "Spiti Valley", distanceKm: "No direct route", how: "Fly or take a train to Chandigarh or Delhi, then continue by road via Shimla or Manali." },
    ],
    thingsToKnow: [
      "Rest a night at Kalpa or Nako on the way up from Shimla to help with acclimatisation.",
      "Carry cash; ATMs are few and only in Kaza and Reckong Peo.",
      "Postpaid BSNL and Jio connections have the best coverage.",
      "Foreign nationals need an inner line permit for the stretch near the border, available at Reckong Peo or Kaza.",
      "Fuel is available at Kaza; the Kaza petrol pump is among the highest in India.",
    ],
    faqs: [
      { q: "What is the best time to visit Spiti Valley?", a: "June to September, when both the Shimla and Manali routes are usually open and Chandratal is accessible. Winter trips are possible only via Shimla and Kinnaur." },
      { q: "How do I go to Spiti Valley from Delhi?", a: "Travel to Shimla, then take the Kinnaur route via Rampur, Reckong Peo and Nako to Kaza. In summer you can also go via Manali and Kunzum La. HRTC buses run Delhi to Reckong Peo and Manali to Kaza." },
      { q: "Is Spiti Valley in Ladakh?", a: "No. Spiti Valley is in the Lahaul and Spiti district of Himachal Pradesh. It borders Ladakh to the north and Tibet to the east, and has a similar high-desert landscape." },
      { q: "What is Spiti Valley famous for?", a: "Ancient monasteries (Key, Dhankar, Tabo), Chandratal lake, high-altitude villages such as Kibber, Langza and Hikkim, fossils at Langza and clear night skies." },
      { q: "Is Lahaul and Spiti Valley the same?", a: "They are two valleys in one district. Lahaul is the Chandra and Bhaga valley reached through the Atal Tunnel; Spiti is the Spiti river valley around Kaza. Kunzum La connects them." },
    ],
    sections: {
      "places-to-visit": {
        intro: "Spiti Valley tourist places are spread along the Spiti river from Tabo to Losar and up into the side valleys. Plan at least two nights in Kaza to cover Key, Kibber, Langza, Hikkim and Komic, a night at Tabo or Dhankar, and a night at Chandratal if you enter or leave via Manali. The valley's lakes include Chandratal and the smaller Dhankar lake above the monastery.",
      },
      "best-time-to-visit": {
        faqs: [
          { q: "Can I visit Spiti Valley in February?", a: "Yes, but only from Shimla through Kinnaur. Expect temperatures far below freezing, frozen water lines and limited homestays. Go with an experienced local driver and check road status daily." },
        ],
      },
    },
    packages: {
      intro: "Spiti Valley tours run 7 to 10 days and are usually done as a circuit from Delhi or Chandigarh: up through Shimla and Kinnaur, and out through Kunzum La and Manali, or the other way around. Packages normally include a cab with a mountain-experienced driver, homestays or hotels with breakfast and dinner, and inner line permits for foreign nationals.",
      itineraries: [
        {
          title: "8-day Spiti Valley tour plan from Delhi",
          days: [
            "Delhi or Chandigarh to Narkanda or Shimla.",
            "Narkanda to Kalpa via Rampur and Reckong Peo.",
            "Kalpa to Nako and Tabo.",
            "Tabo to Kaza via Dhankar Monastery.",
            "Kaza local: Key Monastery, Kibber, Chicham bridge, Langza, Hikkim, Komic.",
            "Kaza to Chandratal over Kunzum La.",
            "Chandratal to Manali through Batal and the Atal Tunnel.",
            "Manali to Delhi or Chandigarh.",
          ],
        },
      ],
      blocks: [
        {
          heading: "Spiti Valley trip cost and budget: what decides the price",
          items: [
            "Number of days and whether you do the full circuit or return the same way",
            "Cab type (SUV recommended) and whether the driver is from the region",
            "Homestays versus hotels and camps at Chandratal",
            "Starting city: Delhi, Chandigarh, Mumbai or Kolkata changes the travel cost",
            "Bike trips need fuel, spares and a backup vehicle",
          ],
        },
        {
          heading: "Choosing the best tour operators for Spiti Valley",
          items: [
            "Ask whether drivers have done the Kunzum La and Kinnaur roads before",
            "Check the acclimatisation plan: a night at Kalpa or Nako before Kaza",
            "Confirm what happens if a road closes: buffer day and refund terms",
            "Compare up to 3 itemised quotes on Tavel Package before you book",
          ],
        },
      ],
      fromOrigins: {
        delhi: {
          intro: "Spiti Valley tour packages from Delhi usually run 8 to 10 days by road, entering via Shimla and Kinnaur and returning via Manali when Kunzum La is open (about June to October). Outside that window the trip goes and returns through Kinnaur.",
        },
        chandigarh: {
          intro: "A Spiti Valley trip from Chandigarh saves about a day on each side compared with Delhi. Most groups drive to Narkanda or Sarahan on day one and reach Kaza on day three.",
        },
        mumbai: {
          intro: "Spiti Valley tour packages from Mumbai start with a flight or train to Chandigarh or Delhi, followed by the road circuit. Allow 9 to 11 days in total.",
        },
        kolkata: {
          intro: "Spiti Valley tour packages from Kolkata usually begin with a flight to Chandigarh or Delhi. Most groups add 2 travel days to an 8-day circuit.",
        },
        bangalore: {
          intro: "Spiti Valley packages from Bangalore begin with a flight to Chandigarh or Delhi; the road circuit takes 8 to 10 days from there.",
        },
        pune: {
          intro: "Spiti Valley tour packages from Pune start with a flight to Chandigarh or Delhi and then follow the Shimla, Kinnaur, Kaza and Manali circuit.",
        },
        ahmedabad: {
          intro: "Spiti Valley packages from Ahmedabad usually fly to Chandigarh or Delhi, then drive the 8 to 10 day circuit via Kinnaur and Manali.",
        },
      },
    },
    packagesDescription:
      "Spiti Valley tour packages from Delhi, Chandigarh and other cities: Kinnaur, Kaza, Chandratal and Manali circuits. Compare up to 3 quotes.",
    guideDescription:
      "Spiti Valley travel guide: best time, routes from Delhi, Shimla and Manali, distances, tourist places, lakes and monasteries.",
  },
};

export const MANALI_PLACES: Record<string, GuideContent> = {
  "manali/places-to-visit/rohtang-pass": {
    intro:
      "Rohtang Pass is a high mountain pass at 3,978 m on the Pir Panjal range, about 51 km from Manali on the old Manali to Leh highway. It links the Kullu valley with Lahaul and is the most visited snow point near Manali from May to November. Since the Atal Tunnel opened under it in 2020, travellers to Lahaul and Leh no longer need to cross the pass, and Rohtang is now visited mainly as a sightseeing trip.\n\nVehicles need an online permit from the Himachal Pradesh government to go to the pass, with a daily limit on numbers. The road climbs past Kothi, Gulaba and Marhi, where most visitors stop for food and snow gear.",
    facts: [
      { label: "Rohtang Pass height", value: "3,978 m (13,051 ft)" },
      { label: "Distance from Manali", value: "About 51 km, 2 to 3 hours each way" },
      { label: "Open", value: "Usually May to November" },
      { label: "Permit", value: "Online vehicle permit, rohtangpermits.hp.gov.in" },
    ],
    blocks: [
      {
        heading: "Rohtang Pass permit: online application, price and rules",
        body: "Tourist vehicles going to Rohtang Pass need a permit issued online on the Himachal Pradesh government portal (rohtangpermits.hp.gov.in). The portal lists a permit fee of ₹500 per vehicle plus a congestion charge at Gulaba bridge of ₹50 for cars, jeeps and MUVs and ₹100 for buses, valid for one day, to and fro. Permits can be booked only a couple of days ahead and are limited per day, so in May and June they sell out quickly.\n\nThe portal asks for the vehicle registration, a valid pollution certificate, the driver and passenger ID and the date of travel, and a printout of the permit must be carried. Most travellers let their Manali taxi operator or agent apply. Rules and fees are revised from time to time, so check the portal before you go.",
        items: [
          "Is a permit required for Rohtang Pass? Yes, for every vehicle crossing Gulaba towards the pass.",
          "No permit is needed for Solang Valley, the Atal Tunnel or Sissu.",
          "Separate permits apply to vehicles going beyond Rohtang towards Lahaul on the old road.",
        ],
      },
      {
        heading: "Is Rohtang Pass open today? How to check",
        body: "Rohtang Pass usually reopens in the middle of May after snow clearance and closes in November after heavy snowfall. On any given day it can close for snow, rain, landslides or a weekly maintenance day announced on the permit portal. To check if Rohtang Pass is open today, look at the permit portal (permits are issued only for open days), Manali police and Kullu district updates, or ask your Manali taxi operator the evening before.",
      },
      {
        heading: "Why is Rohtang Pass closed in winter?",
        body: "Snow buries the road under several metres from roughly November to April and avalanche risk is high, so the pass is closed. In which month is Rohtang Pass closed? Usually from November to the middle of May. The Atal Tunnel keeps Lahaul reachable during this time.",
      },
      {
        heading: "Rohtang Pass temperature and snow",
        body: "Rohtang is far colder than Manali. Even in May and June, days are usually around 5 to 15°C with freezing nights and strong wind, and in April the pass is still under deep snow and closed. Snow walls line the road after it opens in May; by June snow remains in patches near the top, and fresh snow can fall at any time. Carry warm layers, sunglasses and sunscreen.",
      },
      {
        heading: "Rohtang Pass visit time and timings",
        body: "Vehicles leave Manali early, usually by 5 or 6 am, to cross the Gulaba check post within permit timings and avoid traffic jams. Plan 2 to 3 hours at the top and be back before the afternoon, when weather often turns.",
      },
    ],
    months: [
      { month: "April", tempC: "Day -5 to 5°C", weather: "Rohtang Pass is normally closed in April and buried under snow.", goodFor: "Go to Solang Valley or Sissu through the Atal Tunnel instead." },
      { month: "May", tempC: "Day 0 to 10°C, nights below freezing", weather: "The pass usually opens mid May, with high snow walls on the road. Temperature in Rohtang Pass in May drops sharply after noon.", goodFor: "The best snow at Rohtang; heavy demand for permits." },
      { month: "June", tempC: "Day 5 to 15°C, nights near freezing", weather: "Snow in patches near the top, mostly clear mornings.", goodFor: "Families; book permits as early as the portal allows." },
      { month: "October", tempC: "Day 0 to 8°C", weather: "Dry and very cold, with the first snowfall possible late in the month.", goodFor: "Clear views and fewer crowds. Is Rohtang Pass open in October? Usually yes, until the first heavy snowfall." },
    ],
    routes: [
      { from: "Manali", to: "Rohtang Pass", distanceKm: "About 51 km", time: "2 to 3 hours each way", how: "Via Kothi (about 12 km before Gulaba), Gulaba check post and Marhi. The same road brings you back from Rohtang Pass to Manali." },
    ],
    faqs: [
      { q: "What is the best time to visit Rohtang Pass?", a: "Mid May to June for snow, and late September to October for clear skies. July and August are rainy, and from November to April the pass is closed." },
      { q: "Is there snow in Rohtang Pass today?", a: "From mid May to early June there is snow along the road and at the top. Later in summer snow is in patches, and fresh snowfall can happen any time. Check with your taxi operator the day before." },
      { q: "In which month does Rohtang Pass open?", a: "Usually in the middle of May, after the Border Roads Organisation clears the snow. The exact date changes every year." },
      { q: "How much is the Rohtang Pass permit price?", a: "The government portal lists ₹500 permit fee plus ₹50 congestion charge for cars and jeeps (₹550), and ₹100 congestion charge for buses. Taxi operators add their own fare." },
      { q: "Can I go to Rohtang Pass in my own car?", a: "Yes, with an online permit for your vehicle on the HP portal and a valid pollution certificate. The portal limits vehicle age and the number of petrol and diesel vehicles per day." },
      { q: "Is there a map of the Rohtang Pass route?", a: "The road runs north from Manali via Palchan, Kothi, Gulaba and Marhi to the pass. Google Maps shows it as the old Leh-Manali highway; the Atal Tunnel route branches off at Palchan towards Solang." },
    ],
  },

  "manali/places-to-visit/solang-valley": {
    intro:
      "Solang Valley is a side valley 14 km from Manali, at about 2,500 m, known for snow in winter and adventure sports all year. It has a ropeway to Mount Phatru, skiing slopes, paragliding and ATV rides. The road to the Atal Tunnel south portal runs past it.",
    facts: [
      { label: "Distance from Manali", value: "About 14 km" },
      { label: "Altitude", value: "About 2,500 m" },
      { label: "Permit", value: "Not required" },
    ],
    blocks: [
      {
        heading: "Is there snow in Solang Valley now?",
        body: "Solang Valley usually has snow from late December to early March. In March there is often snow at the top station of the ropeway even when the base is clear, and fresh snowfall can still happen. From April to November the valley is green, and the nearest snow is at Sissu, the Atal Tunnel north portal or Rohtang Pass.",
      },
    ],
    faqs: [
      { q: "Is there snow in Solang Valley in March?", a: "Often yes in early March, especially at the ropeway top. Late March is usually patchy. Check with your hotel the day before." },
      { q: "Do I need a permit for Solang Valley?", a: "No. Solang Valley does not need a permit." },
    ],
  },

  "manali/places-to-visit/atal-tunnel": {
    intro:
      "The Atal Tunnel is a 9.02 km road tunnel under Rohtang Pass, at about 3,000 m, opened on 3 October 2020. Its south portal is about 25 km from Manali beyond Solang, and the north portal opens into the Lahaul valley near Sissu. It cuts the Manali to Keylong drive by about 45 km and 3 to 4 hours, and keeps Lahaul reachable most of the year.",
    facts: [
      { label: "Length", value: "9.02 km" },
      { label: "Opened", value: "3 October 2020" },
      { label: "Permit", value: "No permit; vehicles entering Lahaul register on e-Aagman" },
    ],
    blocks: [
      {
        heading: "Is the Atal Tunnel open?",
        body: "The Atal Tunnel is open to all vehicles through most of the year. After heavy snowfall, the approach roads on either side can be closed for clearing, and authorities may restrict night travel or allow only 4x4 vehicles. Check Kullu and Lahaul police updates or ask your driver before leaving Manali.",
      },
    ],
  },

  "manali/places-to-visit/hadimba-temple": {
    intro:
      "The Hadimba Devi Temple in Manali is a wooden pagoda-style temple built in 1553 by Raja Bahadur Singh, in the Dhungri cedar forest about 2 km from the Mall Road. It is dedicated to Hadimba, wife of Bhima from the Mahabharata. The temple's carved doorway and four-tier roof make it Manali's best-known landmark.",
    facts: [
      { label: "Built", value: "1553" },
      { label: "Distance from Mall Road", value: "About 2 km" },
    ],
    faqs: [
      { q: "Where is the Hadimba temple of Manali?", a: "In the Dhungri forest, about 2 km uphill from the Manali Mall Road. You can walk or take a local taxi." },
    ],
  },

  "lahaul/places-to-visit/sissu": {
    intro:
      "Sissu is a village in the Lahaul valley at about 3,100 m, about 13 km beyond the north portal of the Atal Tunnel and roughly 40 km from Manali. It has a waterfall, a small lake and wide views of the Chandra river, and is the most visited snow point on the Lahaul side.",
    facts: [
      { label: "Distance from Manali", value: "About 40 km via the Atal Tunnel" },
      { label: "Altitude", value: "About 3,100 m" },
      { label: "Permit", value: "Not required; vehicle e-Aagman registration" },
    ],
    blocks: [
      {
        heading: "Sissu weather",
        body: "Sissu is colder and drier than Manali because it lies in the rain shadow of the Pir Panjal. Expect snow from December to March, cool summers, and freezing nights from October.",
      },
      {
        heading: "Sissu lake, Himachal Pradesh",
        body: "Sissu lake is a small lake beside the village, fed by snowmelt and frozen in winter. It is a short walk from the main road.",
      },
    ],
    months: [
      { month: "May", tempC: "Day 10 to 18°C, night 0 to 5°C", weather: "Snow lingers on slopes; clear sunny days.", goodFor: "Sissu in May combines snow views with open roads." },
      { month: "July", tempC: "Day 15 to 22°C, night 7 to 12°C", weather: "Mild and much drier than Manali.", goodFor: "Greenery, waterfalls and the Chandra valley." },
    ],
    faqs: [
      { q: "How far is Sissu from Manali?", a: "About 40 km through the Atal Tunnel, around 1.5 to 2 hours depending on traffic." },
    ],
  },

  "lahaul/places-to-visit/baralacha-la": {
    intro:
      "Baralacha La is a high pass at about 4,890 m on the Manali to Leh highway, about 75 km beyond Keylong. It is the watershed of the Bhaga, Chandra and Yunam rivers, and Suraj Tal lake lies just below it. The pass usually opens in late May or June and closes in October or November.",
    facts: [
      { label: "Altitude", value: "About 4,890 m" },
      { label: "Open", value: "Usually June to October" },
    ],
    months: [
      { month: "May", weather: "Usually still closed or opening late in the month, with high snow walls.", goodFor: "Check BRO updates before planning." },
      { month: "June", weather: "Open in most years, with snow on both sides of the road.", goodFor: "Manali to Leh road trips." },
    ],
  },
};
