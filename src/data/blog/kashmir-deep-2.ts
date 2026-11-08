import type { BlogPost } from "./types";

// Second batch of full rewrites of thin Kashmir posts, keyed by existing slug
// (see blog/index.ts). No em dashes, no invented prices; timings, fees and
// yatra rules change, so posts point readers to the official source.

export const KASHMIR_UPGRADES_2: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = {
  "kashmir-in-winter-snow-trip-guide": {
    intro:
      "Kashmir in winter means snow from about mid-December to February: Gulmarg becomes a ski resort, Sonamarg and Pahalgam turn white, and Srinagar goes through Chillai Kalan, the coldest 40 days, from late December to the end of January. A 5 to 6 day winter trip from Srinagar with Gulmarg as the main snow stop works best, with heated hotels, proper winter clothing and a buffer day for snow-related road or flight delays.",
    sections: [
      {
        h: "When does it snow in Kashmir?",
        p: [
          "Gulmarg usually has snow from December to March and keeps it longest. Pahalgam and Sonamarg get heavy snow in the same months, though the Sonamarg road can close after big falls. Srinagar city gets a few snowfalls in most winters, usually between late December and February. For the best chance of a snow-covered trip, travel between the last week of December and mid-February.",
        ],
      },
      {
        h: "6-day Kashmir winter itinerary",
        days: [
          "Arrive in Srinagar. Heated hotel or a higher-category houseboat with heating; short shikara ride if the lake is open.",
          "Srinagar: Mughal gardens under snow, Shankaracharya Temple viewpoint and the old city.",
          "Drive to Gulmarg (about 50 km). Gondola Phase 1, and Phase 2 if open; snow play or a beginner ski lesson.",
          "Gulmarg: skiing, sledging or a pony ride to Khilanmarg; overnight in a heated hotel.",
          "Back to Srinagar via Tangmarg, or a day trip to Pahalgam if the road is clear.",
          "Depart, keeping a morning buffer in case of fog or snow delays.",
        ],
      },
      {
        h: "Skiing in Gulmarg",
        p: [
          "Gulmarg is India's best-known ski resort. Beginners take lessons with certified instructors on the gentle slopes near the village, renting skis, boots and clothing locally. Experienced skiers use Gondola Phase 2 to reach the high, ungroomed runs from Apharwat; off-piste skiing there carries avalanche risk and should only be done with a qualified local guide. The ski season usually runs from about December to March.",
        ],
      },
      {
        h: "Chillai Kalan: the coldest weeks",
        p: [
          "Chillai Kalan runs from about 21 December to 31 January. Srinagar's nights fall well below freezing, parts of Dal Lake can freeze, and daylight is short. It is also when the valley looks most dramatic. Choose a hotel with central heating and hot water, plan sightseeing for the middle of the day, and keep evenings indoors.",
        ],
      },
      {
        h: "Roads and flights in winter",
        list: [
          "Flights into Srinagar can be delayed by fog in North India or by snow at Srinagar airport; keep a buffer day before onward travel",
          "The Jammu to Srinagar highway (NH44) can close for a day or more after heavy snow or landslides near Banihal",
          "The Gulmarg road from Tangmarg may need chains or 4x4 vehicles after snowfall",
          "Sonamarg access depends on snow clearance; check each morning",
          "Trains between Katra and Srinagar give an alternative to the highway when they are running",
        ],
      },
      {
        h: "What to pack for Kashmir in winter",
        list: [
          "Thermal inner wear for everyone, top and bottom",
          "A heavy down jacket, woollen cap, gloves and warm socks",
          "Waterproof boots with grip; snow boots and suits can be rented in Gulmarg",
          "Sunglasses and sunscreen for snow glare",
          "Lip balm and moisturiser for the dry cold",
          "A power bank: cold drains batteries quickly",
        ],
      },
      {
        h: "Where to stay in winter",
        p: [
          "In Srinagar, a hotel with central heating is the most comfortable choice; if you want a houseboat night, choose a higher-category boat with heaters. In Gulmarg, stay at least one night to enjoy the snow before day-trippers arrive and after they leave. Book Christmas and New Year dates well ahead; Gulmarg hotels fill early.",
        ],
      },
      {
        h: "Kashmir winter for families and couples",
        p: [
          "Families should keep snow days short for small children, choose Gondola Phase 1 over Phase 2, and plan warm indoor breaks. Couples often book two Gulmarg nights and a heated houseboat night for a snow honeymoon. Agents on Tavel Package can build either plan with heated stays, winter-ready cabs and ski instruction.",
        ],
      },
      {
        h: "Food to keep warm in a Kashmir winter",
        p: [
          "Winter is the season for harissa, a slow-cooked mutton dish served for breakfast in Srinagar's old city, and for endless cups of kahwa and noon chai. Wazwan dishes such as rogan josh and yakhni are hearty in the cold, and bakeries sell fresh girda and kulcha every morning.",
        ],
      },
    ],
    faqs: [
      { q: "Is Pahalgam worth visiting in winter?", a: "Yes, for quiet snow stays and walks by the frozen Lidder. Some side valleys are only partly reachable and many small hotels close, so book a heated hotel in advance." },
      { q: "Do I need a 4x4 to reach Gulmarg in winter?", a: "Not always. After heavy snowfall, authorities may require chains or 4x4 vehicles beyond Tangmarg. Ask your agent for a winter-ready cab." },
      { q: "Which month is best for snow in Kashmir?", a: "January is the most reliable, followed by February and the last week of December. Gulmarg usually keeps snow until March." },
      { q: "Is Kashmir safe to visit in winter?", a: "Yes, with warm clothing, heated stays and a buffer day. Roads can close after heavy snow, so follow local advisories and drivers' advice." },
      { q: "Is Gulmarg open in winter?", a: "Yes. Winter is Gulmarg's main ski season, from about December to March. Gondola Phase 2 can close in strong wind or heavy snowfall." },
      { q: "Is Dal Lake frozen in winter?", a: "Parts of Dal Lake can freeze during Chillai Kalan, from late December to January, especially near the edges. Shikara rides run where the water is open." },
      { q: "How cold is Srinagar in January?", a: "Days are typically around 5 to 8°C and nights below freezing, often several degrees below zero during Chillai Kalan." },
      { q: "Can beginners ski in Gulmarg?", a: "Yes. Beginners take lessons on gentle slopes near Gulmarg village with certified instructors and rented equipment." },
    ],
  },

  "gulmarg-vs-pahalgam-vs-sonamarg": {
    intro:
      "Choose Gulmarg for snow, skiing and the gondola; Pahalgam for green river valleys, gentle walks and a longer stay; and Sonamarg for a glacier day trip and the road to Ladakh. If you have five days or more, see all three: Gulmarg and Sonamarg as day trips from Srinagar and a night in Pahalgam. With only three days, pick Gulmarg plus either Pahalgam or Sonamarg depending on the season.",
    sections: [
      {
        h: "Gulmarg at a glance",
        list: [
          "About 50 km from Srinagar, at about 2,650 m",
          "Best for: snow from December to March, skiing, the Gulmarg Gondola, meadows in summer",
          "Time needed: a day trip or one night",
          "Getting around: gondola, ponies and walks from the meadow",
        ],
      },
      {
        h: "Pahalgam at a glance",
        list: [
          "About 95 km from Srinagar, at about 2,130 m on the Lidder River",
          "Best for: Betaab, Aru and Chandanwari valleys, river walks, families and honeymooners, treks",
          "Time needed: one or two nights",
          "Getting around: Pahalgam's local union taxis to the valleys, ponies for meadows",
        ],
      },
      {
        h: "Sonamarg at a glance",
        list: [
          "About 80 km from Srinagar, at about 2,800 m on the Sindh river",
          "Best for: Thajiwas Glacier, Zojila Pass in summer, the Kashmir Great Lakes trek, rafting",
          "Time needed: usually a day trip",
          "Getting around: ponies to Thajiwas, local taxis to Zojila and Zero Point in season",
        ],
      },
      {
        h: "Which is best in each season?",
        list: [
          "Winter (December to February): Gulmarg first, for reliable snow and skiing; Pahalgam for quiet snow stays; Sonamarg depends on road clearance",
          "Spring (March to May): Gulmarg for late snow on Apharwat, Pahalgam for blossom and green valleys",
          "Summer (June to August): all three; Sonamarg and Pahalgam at their greenest, Gulmarg meadows and gondola",
          "Autumn (September to November): Pahalgam and Gulmarg for clear skies and autumn colours",
        ],
      },
      {
        h: "Which is best for families, couples and adventure?",
        list: [
          "Families: Pahalgam for short drives, safe meadows and riverside hotels; Gulmarg Phase 1 for a snow outing",
          "Honeymooners: Pahalgam for riverside stays, Gulmarg for snow nights",
          "Adventure: Gulmarg for skiing, Sonamarg for rafting and the Great Lakes trek, Pahalgam for Tarsar Marsar and Kolahoi treks",
          "Short trips: Gulmarg, the closest to Srinagar",
        ],
      },
      {
        h: "Day trip or overnight?",
        p: [
          "Gulmarg and Sonamarg work well as day trips from Srinagar. Pahalgam is the one worth staying in: it is the furthest, and its valleys are best seen in the morning. In winter, a night in Gulmarg is worth it for snow before and after day-trippers.",
        ],
      },
      {
        h: "Combining all three in one trip",
        days: [
          "Srinagar: Dal Lake and the Mughal gardens.",
          "Day trip to Gulmarg and the gondola.",
          "Day trip to Sonamarg and Thajiwas Glacier.",
          "Drive to Pahalgam; Betaab Valley and Chandanwari.",
          "Aru Valley, then back to Srinagar and depart.",
        ],
      },
      {
        h: "Getting quotes for your plan",
        p: [
          "Tell agents which of the three you want, your dates and your group, and they will balance drive times, local taxis and stays. Up to 3 verified agents send customised Kashmir itineraries and prices on Tavel Package.",
        ],
      },
      {
        h: "Distances and drive times from Srinagar",
        list: [
          "Gulmarg: about 50 km, 1.5 to 2 hours via Tangmarg",
          "Sonamarg: about 80 km, 2.5 to 3 hours via Ganderbal and Kangan",
          "Pahalgam: about 95 km, 2.5 to 3 hours via Pampore and Anantnag",
        ],
      },
      {
        h: "Main sights in each",
        list: [
          "Gulmarg: Gondola Phase 1 and 2, Apharwat, Khilanmarg, Alpather Lake, St. Mary's Church, the golf course",
          "Pahalgam: Betaab Valley, Aru Valley, Chandanwari, the Lidder River",
          "Sonamarg: Thajiwas Glacier, Zojila Pass and Zero Point, the Sindh river",
        ],
      },
      {
        h: "Local transport rules to know",
        p: [
          "Each resort has its own local transport. In Pahalgam, the valleys are reached only by local union taxis. In Sonamarg, ponies go to Thajiwas and local taxis to Zojila in summer. In Gulmarg, the gondola and ponies take you up from the meadow. Ask your agent which of these are included in your package so there are no surprises.",
        ],
      },
      {
        h: "Where to stay for each",
        p: [
          "Most travellers base themselves in Srinagar and visit Gulmarg and Sonamarg as day trips, staying in Pahalgam for one or two nights. Gulmarg is worth a night in winter for skiing and snow before day-trippers arrive. Sonamarg has hotels and camps for trekkers and travellers heading to Ladakh, but few people stay otherwise.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need permits for Gulmarg, Pahalgam or Sonamarg?", a: "No permits are needed for Indian tourists. Gondola tickets in Gulmarg are booked online, and Pahalgam and Sonamarg use local taxis and ponies at fixed rates." },
      { q: "Which is best in summer?", a: "All three are at their best from May to September. Pahalgam's valleys and Sonamarg's glacier are greenest in June and July, while Gulmarg combines green meadows with snow on Apharwat reached by the gondola." },
      { q: "Which is best for a honeymoon?", a: "Pahalgam for riverside stays and quiet valleys, Gulmarg for a snow honeymoon in winter. Many couples include both, with a houseboat night in Srinagar." },
      { q: "Which is closest to Srinagar?", a: "Gulmarg, at about 50 km. Sonamarg is about 80 km and Pahalgam about 95 km." },
      { q: "Which is better, Gulmarg or Pahalgam?", a: "Gulmarg for snow, skiing and the gondola; Pahalgam for green valleys, river walks and a relaxed stay. Many trips include both." },
      { q: "Is Sonamarg worth visiting if I have seen Gulmarg?", a: "Yes. Sonamarg's glacier valley and the road towards Zojila are very different from Gulmarg's meadow and gondola." },
      { q: "Which is best for a family trip?", a: "Pahalgam, for short drives, gentle meadows and riverside hotels, with a Gulmarg day for snow." },
      { q: "Which has snow in winter?", a: "All three, but Gulmarg is the most reliable and accessible. Sonamarg can be cut off after heavy snow." },
      { q: "Can I see Gulmarg, Pahalgam and Sonamarg in 4 days?", a: "Yes, but it is busy: Gulmarg and Sonamarg as day trips and one night in Pahalgam. Five days is more comfortable." },
    ],
  },

  "tulip-garden-srinagar-guide": {
    intro:
      "The Indira Gandhi Memorial Tulip Garden in Srinagar, on the foothills of the Zabarwan range above Dal Lake, is one of the largest tulip gardens in Asia. It opens for only a few weeks each spring, usually from late March, and is at its best in the first half of April when most tulips are in bloom. Exact opening dates are announced each year by J&K Floriculture and Tourism.",
    sections: [
      {
        h: "When does the tulip garden open?",
        p: [
          "The garden opens in mid to late March (16 March in 2026, 26 March in 2025) and stays open for about three to four weeks, while the tulips bloom. Peak bloom typically falls in the first two weeks of April, though a cold or warm spring can move it by a week or more. Plan your Srinagar days around early April for the best chance, and check the announced dates before booking.",
        ],
      },
      {
        h: "What you will see",
        p: [
          "Terraced beds of tulips in many colours and varieties run down the slope towards Dal Lake, with the Zabarwan hills behind. Hyacinths, daffodils and other spring flowers bloom alongside. The garden sits next to the Botanical Garden and close to Cheshma Shahi, so it is easy to combine with the Mughal gardens.",
        ],
      },
      {
        h: "Tips for visiting",
        list: [
          "Go early in the morning on a weekday to avoid crowds and harsh light for photos",
          "Buy tickets at the gate or through the official channel announced for the season",
          "Wear comfortable shoes; the garden is terraced and involves some walking",
          "Carry a light jacket; April mornings in Srinagar are cool",
          "Do not step into the beds or pick flowers",
        ],
      },
      {
        h: "Combining the tulip garden with Srinagar sightseeing",
        days: [
          "Morning: tulip garden, then Chashme Shahi and Pari Mahal nearby.",
          "Afternoon: Nishat Bagh and Shalimar Bagh along Dal Lake, and a sunset shikara ride.",
        ],
      },
      {
        h: "A spring Kashmir itinerary around the tulip season",
        days: [
          "Arrive in Srinagar; shikara ride and houseboat night.",
          "Tulip garden and Mughal gardens.",
          "Day trip to Gulmarg, where snow usually remains at higher points in April.",
          "Drive to Pahalgam for blossom and green valleys.",
          "Pahalgam valleys, then back to Srinagar and depart.",
        ],
      },
      {
        h: "Booking hotels in tulip season",
        p: [
          "Late March and April are among Srinagar's busiest weeks, with the tulip festival drawing domestic and international visitors. Book hotels and houseboats early, and expect higher rates than in March or May. Agents on Tavel Package can align your dates with the expected bloom and quote stays near the gardens.",
        ],
      },
      {
        h: "Other spring flowers in Kashmir",
        p: [
          "Before the tulips, almond trees blossom at Badamwari in Srinagar in March. Through April and May, orchards around Srinagar, Pahalgam and Gulmarg flower, and meadows fill with wildflowers by late spring. Spring is one of the best times for photography in the valley.",
        ],
      },
      {
        h: "How to reach the tulip garden",
        p: [
          "The garden is on the road above the Boulevard on the eastern side of Dal Lake, a short taxi ride from most Srinagar hotels and houseboat ghats. Parking near the gate fills quickly in peak weeks, so arrive early or take a taxi and arrange a pickup time.",
        ],
      },
      {
        h: "Photography tips",
        list: [
          "Early morning gives soft light and fewer people",
          "Use the terraces to frame rows of colour with the Zabarwan hills behind",
          "Overcast days are good for even colour without harsh shadows",
          "Respect other visitors and do not step into the beds for a shot",
        ],
      },
      {
        h: "Weather in Srinagar during tulip season",
        p: [
          "Late March and April in Srinagar bring cool mornings around 5 to 10°C and pleasant afternoons in the high teens to low twenties, with occasional spring showers. Carry a light jacket and an umbrella. Gulmarg and Sonamarg are much colder and may still have snow.",
        ],
      },
      {
        h: "Is the tulip season worth planning a trip around?",
        p: [
          "Yes, if you enjoy gardens and photography. April combines the tulips with blossom across the valley, snow still visible on the higher slopes, and comfortable temperatures. The trade-off is crowds and higher hotel rates. If you prefer quieter travel, May still has green valleys and pleasant weather after the tulips have finished.",
        ],
      },
    ],
    faqs: [
      { q: "What are the tulip garden timings?", a: "The garden usually opens from morning to early evening during the season. Timings are announced each year, so check them before you go." },
      { q: "Should I book hotels early for tulip season?", a: "Yes. Late March and April are among Srinagar's busiest weeks, so hotels and houseboats near Dal Lake fill early and rates are higher. Book as soon as your dates are fixed." },
      { q: "What else can I see in Srinagar in April?", a: "The Mughal gardens, Shankaracharya Temple, Hazratbal Shrine, the old city and a sunset shikara ride on Dal Lake, all close to the tulip garden." },
      { q: "Can I visit the tulip garden with children and elderly parents?", a: "Yes. The garden is suitable for all ages, though it is terraced; elderly visitors can stay on the lower, flatter paths near the entrance." },
      { q: "When is the best time to see tulips in Srinagar?", a: "Usually the first two weeks of April, when most tulips are in full bloom. The garden typically opens in late March." },
      { q: "Is there an entry fee for the tulip garden?", a: "Yes, a ticket is charged per visitor. Check the current fee and booking method announced for the season." },
      { q: "How long should I spend at the tulip garden?", a: "One to two hours is enough for most visitors, more if you are photographing." },
      { q: "Is the tulip garden open in May?", a: "Usually not. It closes once the bloom ends, typically by late April." },
      { q: "Where is the tulip garden in Srinagar?", a: "On the foothills of the Zabarwan range above Dal Lake, near the Botanical Garden and Cheshma Shahi." },
    ],
  },

  "kashmir-by-train-from-delhi": {
    intro:
      "You can now travel from Delhi to Srinagar by train: take a train from Delhi to Shri Mata Vaishno Devi Katra, then a Vande Bharat train from Katra to Srinagar across the Chenab Bridge, the world's highest railway arch bridge. The Katra to Srinagar leg takes about three hours through the Pir Panjal tunnels and the Kashmir valley, and the journey pairs naturally with a Vaishno Devi visit at the start or end of a trip.",
    sections: [
      {
        h: "How the route works",
        list: [
          "Delhi to Shri Mata Vaishno Devi Katra by express or Vande Bharat train",
          "Katra to Srinagar by Vande Bharat on the Udhampur-Srinagar-Baramulla line",
          "Change trains at Katra; plan time between arrival and departure",
          "Book both legs on IRCTC as early as possible in peak seasons",
        ],
      },
      {
        h: "Highlights of the Katra to Srinagar line",
        p: [
          "The line crosses the Chenab Bridge, the highest railway arch bridge in the world, and the Anji Khad cable-stayed bridge, then runs through a series of long tunnels, including the Pir Panjal rail tunnel near Banihal, before emerging into the Kashmir valley. Sit on the side away from the morning sun for the best views of the gorges.",
        ],
      },
      {
        h: "Sample 7-day plan by train",
        days: [
          "Train from Delhi to Katra; overnight in Katra.",
          "Vaishno Devi yatra (optional), or rest and an evening train to Srinagar.",
          "Vande Bharat to Srinagar; shikara ride and Mughal gardens.",
          "Day trip to Gulmarg.",
          "Drive to Pahalgam; Betaab Valley and Chandanwari.",
          "Back to Srinagar; old city and markets.",
          "Train back to Katra and on to Delhi, or fly out of Srinagar.",
        ],
      },
      {
        h: "Train vs flight vs road",
        list: [
          "Flight: fastest, about an hour and a half from Delhi to Srinagar",
          "Train: a scenic journey with the Chenab Bridge, ideal if you also want Vaishno Devi",
          "Road: about 850 km from Delhi via Jammu on NH44; long, and the Jammu to Srinagar stretch can close in bad weather",
        ],
      },
      {
        h: "Tips for the train journey",
        list: [
          "Book early on IRCTC, especially in summer and around school holidays",
          "Carry ID for every traveller; security checks at Katra and Srinagar stations are thorough",
          "Keep warm layers handy in winter; Srinagar is much colder than Katra",
          "Pre-book a cab at Srinagar station or ask your agent for a pickup",
        ],
      },
      {
        h: "Winter and monsoon considerations",
        p: [
          "Trains offer an alternative to the Jammu to Srinagar highway when it closes after snow or landslides, but services can also be adjusted in severe weather. Check the running status on the day of travel and keep a buffer day in winter.",
        ],
      },
      {
        h: "Getting a package with train travel",
        p: [
          "Tell agents on Tavel Package that you want to travel by train, and they will plan stays in Katra and Srinagar, station pickups and sightseeing around your train times. You book the train tickets on IRCTC yourself, as rail tickets are personal.",
        ],
      },
      {
        h: "Stations in the Kashmir valley",
        p: [
          "Beyond the Pir Panjal tunnel, the line runs through the Kashmir valley with stations including Banihal, Qazigund, Anantnag, Srinagar and Baramulla. Srinagar station is on the city's southern edge at Nowgam; allow time for the drive into the city or to Dal Lake. Anantnag station is convenient for travellers heading straight to Pahalgam.",
        ],
      },
      {
        h: "Train travel with family",
        list: [
          "Choose daytime trains so children and elderly parents can see the bridges and rest at night in Katra or Srinagar",
          "Carry snacks and water; food is available on Vande Bharat trains",
          "Keep luggage manageable; station platforms and transfers involve walking",
          "Pre-arrange wheelchair assistance through the railway if needed",
        ],
      },
      {
        h: "Booking tips for peak seasons",
        p: [
          "Seats on the Delhi to Katra trains and the Katra to Srinagar Vande Bharat fill quickly during Navratri, school holidays and the summer peak. Book as soon as your dates are fixed, consider flexible trains on the Delhi to Katra leg, and keep a gap of a few hours at Katra so a delay does not make you miss the onward train.",
        ],
      },
    ],
    faqs: [
      { q: "How long does the Delhi to Katra train take?", a: "It depends on the train: the fastest services take around eight hours, while express trains take longer. Check IRCTC for current timings." },
      { q: "Can I see the Chenab Bridge from the train?", a: "Yes. The Katra to Srinagar train crosses the bridge high above the Chenab gorge. Daytime trains give the best views, and the crossing takes only a few minutes." },
      { q: "Which station is best for Pahalgam?", a: "Anantnag, which is closer to Pahalgam than Srinagar. Arrange a cab from the station for the drive up the Lidder valley." },
      { q: "Do trains to Srinagar run in winter?", a: "Yes, they are planned to run through the year and offer an alternative to the highway, but services can be adjusted in severe weather. Check the running status on the day." },
      { q: "Is there a direct train from Delhi to Srinagar?", a: "Most travellers change at Shri Mata Vaishno Devi Katra: a train from Delhi to Katra, then a Vande Bharat from Katra to Srinagar. Check IRCTC for current through services." },
      { q: "How long is the Katra to Srinagar train journey?", a: "About three hours on the Vande Bharat, through tunnels and across the Chenab Bridge." },
      { q: "Is the train better than flying to Kashmir?", a: "Flying is faster. The train is more scenic, avoids the highway, and suits travellers combining Kashmir with Vaishno Devi." },
      { q: "Where is the Chenab Bridge?", a: "On the Katra to Srinagar line in the Reasi district, crossing the Chenab river gorge. It is the world's highest railway arch bridge." },
      { q: "Can I book train tickets through a travel agent?", a: "Agents plan the trip around your trains, but train tickets are personal and are usually booked by the traveller on IRCTC." },
    ],
  },

  "vaishno-devi-yatra-plan": {
    intro:
      "The Vaishno Devi yatra starts at Katra, about 50 km from Jammu: pilgrims register with the Shri Mata Vaishno Devi Shrine Board, collect an RFID yatra card and walk about 12 to 13 km from Banganga to the Bhawan, with Ardhkuwari halfway. Fit walkers take 5 to 7 hours up; ponies, palkis, battery cars and a helicopter from Katra to Sanjichhat make it easier. Most pilgrims plan two nights in Katra.",
    sections: [
      {
        h: "Registration and the RFID yatra card",
        p: [
          "Every pilgrim must register with the Shrine Board, online on its official website or at registration counters in Katra, and carry the RFID yatra card issued for the trip. The card is checked at the start of the track at Banganga. Carry original photo ID for each pilgrim, and register as early as possible during Navratri and summer holidays.",
        ],
      },
      {
        h: "The trek route",
        list: [
          "Katra to Banganga: about 1.5 km, the start of the track and the RFID check",
          "Banganga to Ardhkuwari: the first half of the climb, with the Garbh Joon cave temple at Ardhkuwari",
          "Ardhkuwari to the Bhawan: via the older route through Himkoti, or the newer Tarakote Marg; battery cars run on the new track",
          "Bhawan to Bhairon Temple: about 2 km further uphill, or by ropeway",
        ],
      },
      {
        h: "Ways to reach the Bhawan",
        list: [
          "On foot: about 12 to 13 km each way, 5 to 7 hours up for most pilgrims",
          "Pony or palki: hired at Banganga at rates displayed by the Shrine Board",
          "Battery car: from Ardhkuwari towards the Bhawan, booked through the Shrine Board",
          "Helicopter: Katra helipad to Sanjichhat, about 2.5 km from the Bhawan, booked through the Shrine Board's official channel",
          "Ropeway: Bhawan to Bhairon Temple",
        ],
      },
      {
        h: "2-day Vaishno Devi plan",
        days: [
          "Arrive in Katra by train or road, register and collect the RFID card. Start the trek in the afternoon or evening; many pilgrims walk overnight.",
          "Darshan at the Bhawan, Bhairon Temple by ropeway, then descend to Katra and rest, or continue to Jammu or Srinagar.",
        ],
      },
      {
        h: "Best time for the yatra",
        p: [
          "The yatra runs all year. March to June and September to November are the most comfortable. Navratri in spring and autumn and the summer holidays are the busiest, with long queues. Winter (December to February) is cold and may bring snow near the Bhawan, but crowds are smaller.",
        ],
      },
      {
        h: "Rules and practical tips",
        list: [
          "Mobile phones, cameras and leather items are not allowed inside the Bhawan; use the Shrine Board's cloak rooms",
          "Wear comfortable shoes; the track is paved but long and steep in parts",
          "Carry a light jacket even in summer; nights at the Bhawan are cool",
          "Use only Shrine Board counters and official websites for helicopter, battery car and accommodation bookings",
          "Food and water are available all along the track at Shrine Board outlets",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Katra has hotels of every category close to the bus stand and the track. The Shrine Board runs accommodation in Katra and along the track, bookable through its official website. Many pilgrims stay one night before and one after the yatra.",
        ],
      },
      {
        h: "Combining Vaishno Devi with Kashmir",
        p: [
          "Vande Bharat trains now link Katra with Srinagar, so many families combine the yatra with a Kashmir holiday: two days in Katra, then Srinagar, Gulmarg and Pahalgam. Agents on Tavel Package can plan the full trip with hotels and pickups around your train times.",
        ],
      },
      {
        h: "Fitness and health on the trek",
        p: [
          "The climb is steady rather than steep, but 12 to 13 km each way is long. Walk at your own pace, rest at the Shrine Board shelters, and drink water regularly. Pilgrims with heart conditions, recent surgery or breathing problems should take medical advice and consider the helicopter or battery car. Medical aid posts are available along the track.",
        ],
      },
      {
        h: "Vaishno Devi with children and elderly pilgrims",
        p: [
          "Families with small children often hire a pony or palki for part of the way, or book the helicopter to Sanjichhat. Elderly pilgrims can use the battery car on the new track from Ardhkuwari, subject to availability. Book these options early through the Shrine Board, carry snacks and warm layers, and plan rest stops at the Shrine Board shelters.",
        ],
      },
    ],
    faqs: [
      { q: "How much time does Vaishno Devi darshan take?", a: "It depends on the crowd. On quiet days, darshan at the Bhawan can take an hour or less; during Navratri and summer peaks, queues can take several hours. Plan a full day for the trek and darshan." },
      { q: "Can I do the Vaishno Devi yatra at night?", a: "Yes. The track is lit and open round the clock, and many pilgrims walk overnight to reach the Bhawan by morning." },
      { q: "How long is the Vaishno Devi trek?", a: "About 12 to 13 km each way from Banganga in Katra to the Bhawan, plus about 2 km more to Bhairon Temple." },
      { q: "Is registration compulsory for Vaishno Devi?", a: "Yes. Every pilgrim registers with the Shrine Board and carries an RFID yatra card." },
      { q: "How can elderly pilgrims reach the Bhawan?", a: "By pony, palki, battery car on the new track, or helicopter from Katra to Sanjichhat, all booked through official Shrine Board channels." },
      { q: "Can I carry my phone to the Bhawan?", a: "Phones are allowed on the track but not inside the Bhawan; deposit them in the Shrine Board cloak room." },
      { q: "What is the best time for Vaishno Devi?", a: "March to June and September to November for comfortable weather; avoid Navratri if you want shorter queues." },
      { q: "How do I reach Katra?", a: "By train to Shri Mata Vaishno Devi Katra station, by road from Jammu (about 50 km), or by flight to Jammu airport." },
    ],
  },
};
