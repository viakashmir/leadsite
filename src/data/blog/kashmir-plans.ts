import type { BlogPost, BlogSection } from "./types";

// Kashmir itineraries and combination trips (2026-11-10). Distances match the
// other Kashmir guides on the site (rounded). No prices typed in, no em dashes.

const DATE = "2026-11-10";

const BASE: BlogPost[] = [
  {
    slug: "kashmir-3-day-itinerary",
    title: "Kashmir 3-Day Itinerary: Srinagar, Gulmarg and Sonamarg or Pahalgam",
    description: "A 3-day Kashmir itinerary that works: Srinagar and Dal Lake, a Gulmarg day trip and Sonamarg, plus a Pahalgam version, timings, season tips and what to skip.",
    category: "Itineraries",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Three days in Kashmir is enough for Srinagar and two day trips if you keep Srinagar as your base. Day 1 covers Dal Lake, a shikara and the Mughal gardens; day 2 is Gulmarg and the Gondola; day 3 is Sonamarg and Thajiwas Glacier, then the airport. If Pahalgam matters more to you than Sonamarg, swap day 3, but expect about six hours of driving that day. Do not try to fit all of Gulmarg, Sonamarg and Pahalgam into three days.",
    sections: [
      {
        h: "The plan",
        days: [
          "Arrive in Srinagar by a morning flight or the Vande Bharat. Check in near Dal Lake or on a houseboat. Afternoon at Nishat Bagh, Shalimar Bagh and Pari Mahal, then a sunset shikara ride on Dal.",
          "Leave by 8 am for Gulmarg, about 50 km and 2 hours. Gondola to Kongdoori, and Apharwat if Phase 2 is open; walk on the meadow or sledge in winter. Back in Srinagar by evening; dinner on Boulevard Road.",
          "Leave by 7.30 am for Sonamarg, about 80 km. Pony or walk to Thajiwas Glacier, back by 2 pm and head to the airport for an evening flight, or stay another night if your flight is the next morning.",
        ],
      },
      {
        h: "Pahalgam version",
        p: [
          "If you prefer Pahalgam to Sonamarg, swap day 3 for a Pahalgam day: leave at 7 am, stop briefly at Pampore and Awantipora, take a union taxi to Betaab Valley and Aru, and return by evening. It is about 95 km each way, so the day is long. A better option, if your dates allow, is to stay one night in Pahalgam and fly out the next day.",
        ],
      },
      {
        h: "3 days by season",
        list: [
          "March and April: add the Tulip Garden on day 1 and expect snow at Gulmarg's Phase 2.",
          "May to August: long days make the Sonamarg day comfortable; book the Gondola online early.",
          "September to November: golden chinars in Srinagar, clear skies and quieter roads.",
          "December to February: Gulmarg is the snow highlight; Sonamarg is reachable through the Z-Morh tunnel on most days, but keep day 3 flexible.",
        ],
      },
      {
        h: "What to skip with only 3 days",
        p: [
          "Skip Gurez, Doodhpathri, Yusmarg and south Kashmir springs like Kokernag and Verinag: they are lovely but need extra days. Skip shopping marathons on the first evening; Lal Chowk and Polo View are best on the last morning if you have time. Skip a second houseboat night unless you are not doing day trips.",
        ],
      },
      {
        h: "Practical tips",
        list: [
          "Book the Gulmarg Gondola online on the official portal as soon as your dates are fixed.",
          "Take a morning flight in: afternoon arrivals lose half of day 1.",
          "Use one cab for all three days; a package usually includes it.",
          "Leave Srinagar for the airport at least 3 hours before your flight because of the security gate.",
          "Carry warm layers even in summer for Gulmarg and Sonamarg.",
        ],
      },
      {
        h: "Is 3 days enough for Kashmir?",
        p: [
          "Three days gives you a real taste of Kashmir: the lake, the gardens, one snow point and one valley. It suits weekend travellers from Delhi, Chandigarh, Mumbai or Bengaluru, business travellers adding a short break, and anyone combining Kashmir with Vaishno Devi. For Pahalgam with a night's stay, and a slower pace, 5 to 6 days is the sweet spot. A 3-day package lists hotels, the cab and the shikara, and can be extended later by a day or two.",
        ],
      },
      {
        h: "Where to stay for 3 days",
        p: [
          "Stay in one place in Srinagar for all three nights. Boulevard Road on Dal Lake is the easiest base; Rajbagh is quieter. A single houseboat night on arrival is a good way to begin, then move to a hotel for the day trips so you can leave early with the car at the door.",
        ],
      },
    ],
    faqs: [
      { q: "Can I cover Gulmarg, Pahalgam and Sonamarg in 3 days?", a: "Not comfortably. Pick two of the three, with Srinagar as your base. Pahalgam is best with a night's stay." },
      { q: "Is 3 days enough for Kashmir?", a: "For Srinagar plus two day trips, yes. For a more relaxed trip with Pahalgam, plan 5 to 6 days." },
      { q: "Which is the best 3-day route in winter?", a: "Srinagar, a Gulmarg snow day and Sonamarg or a second Gulmarg day, with Srinagar as the base." },
      { q: "Should I stay on a houseboat on a 3-day trip?", a: "One night is a good idea. For early starts to Gulmarg and Sonamarg, a hotel on Boulevard Road is more practical." },
      { q: "Can I do a 3-day Kashmir trip by train?", a: "Yes. Take the Vande Bharat from Katra to Srinagar, then follow the same plan, returning by train or flight." },
    ],
  },
  {
    slug: "kashmir-7-day-itinerary",
    title: "Kashmir 7-Day Itinerary: Srinagar, Gulmarg, Pahalgam, Sonamarg and a Free Day",
    description: "A 7-day Kashmir itinerary with day-by-day timings: Srinagar, Gulmarg, Sonamarg, two nights in Pahalgam, a houseboat night and options for winter and spring.",
    category: "Itineraries",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Seven days is the ideal length for a first Kashmir trip. It covers Srinagar and Dal Lake, day trips to Gulmarg and Sonamarg, two unhurried nights in Pahalgam, and a spare day for Doodhpathri, Yusmarg or simply a slow morning on a houseboat. The plan below keeps drives short, avoids changing hotels every night and builds in a buffer for weather, which matters most in winter.",
    sections: [
      {
        h: "Day by day",
        days: [
          "Arrive in Srinagar. Check into a houseboat on Dal or Nigeen. Afternoon rest, then a sunset shikara ride.",
          "Srinagar: Nishat Bagh, Shalimar Bagh, Chashme Shahi, Pari Mahal and Hazratbal. Move to a hotel in the evening. Tulip Garden in late March and April.",
          "Day trip to Gulmarg: Gondola to Kongdoori and Apharwat, the meadow, St Mary's Church. Back to Srinagar.",
          "Day trip to Sonamarg: Thajiwas Glacier by pony or on foot; Zero Point by union taxi when the road is open.",
          "Drive to Pahalgam via Pampore saffron fields, Awantipora ruins and the cricket bat workshops. Evening by the Lidder.",
          "Pahalgam: union taxi to Betaab Valley, Aru Valley and Chandanwari. Optional rafting or a pony ride.",
          "Return to Srinagar. Old city and shopping at Lal Chowk or Polo View if time allows. Fly out, or stay a final night.",
        ],
      },
      {
        h: "Why this order works",
        p: [
          "Starting with a houseboat night gives you the Kashmir moment on arrival, when you are tired and want to sit still. Gulmarg and Sonamarg are both easy day trips from Srinagar, so you keep one hotel for three nights. Pahalgam is the furthest, so it comes with two nights and you return to Srinagar only on the last day, close to the airport and railway station. In winter, swap the Gulmarg and Sonamarg days if snow closes one road.",
        ],
      },
      {
        h: "Swaps and add-ons",
        list: [
          "Replace Sonamarg with Doodhpathri or Yusmarg in deep winter, or if you prefer quiet meadows.",
          "Add a Gulmarg night instead of the day trip if you want to ski or see the meadow at sunrise.",
          "Add Gurez as a 2-night extension from June to October.",
          "Add Vaishno Devi at the start with two nights in Katra and the Vande Bharat to Srinagar.",
          "Add a day in south Kashmir for Achabal, Kokernag and Verinag on the way to or from Pahalgam.",
        ],
      },
      {
        h: "7 days by season",
        list: [
          "Spring (March to May): tulips and blossom, snow higher up. Book the Tulip Garden day early in the week.",
          "Summer (June to August): green valleys, rafting, the Amarnath Yatra on the Pahalgam and Sonamarg roads in July and August.",
          "Autumn (September to November): golden chinars, saffron harvest at Pampore in late October and early November.",
          "Winter (December to February): snow in Gulmarg and Pahalgam, skiing, heated hotels essential; keep one buffer day.",
        ],
      },
      {
        h: "Honeymoon and family variations",
        p: [
          "For a honeymoon, add a second houseboat night at the end and ask for a decorated shikara, a candlelight dinner and a riverside room in Pahalgam. For families with elderly parents, keep the Sonamarg day short with a pony to Thajiwas, use an Innova Crysta for comfort, and choose ground-floor rooms. For families with young children, add sledging in Gulmarg and the Pahalgam parks, and avoid the earliest starts.",
        ],
      },
      {
        h: "Practical tips",
        list: [
          "Book the Gulmarg Gondola online in advance.",
          "Keep cash for union taxis, ponies and the shikara.",
          "Use postpaid SIMs: prepaid connections from outside J&K do not work there.",
          "Carry layers year-round; nights are cool even in summer.",
          "Plan your airport drop for 3 hours before the flight.",
        ],
      },
      {
        h: "What a 7-day package should include",
        p: [
          "A good 7-day Kashmir package names the hotels and houseboat in each town, the cab model for all days, the airport or station transfers, one shikara ride and meal plans. Gondola tickets, union taxis in Pahalgam and Sonamarg, ponies and rafting are usually extra, so check what is included. Compare at least two quotes side by side with the same hotels and cab.",
        ],
      },
    ],
    faqs: [
      { q: "Is 7 days enough for Kashmir?", a: "Yes. Seven days covers Srinagar, Gulmarg, Sonamarg and two nights in Pahalgam at a comfortable pace, with time for a houseboat night." },
      { q: "Should I stay in Gulmarg or do a day trip in a 7-day plan?", a: "A day trip works for most travellers. Stay a night if you want to ski, take the first Gondola or see the meadow at sunrise." },
      { q: "Can I add Gurez to a 7-day trip?", a: "Yes, but you would drop Sonamarg or a Pahalgam night. Gurez needs two nights and is open from about June to October." },
      { q: "What is the best month for a 7-day Kashmir trip?", a: "April for tulips, June for green valleys, October for autumn colour and January for snow. Each month offers something different." },
      { q: "Can I start the 7-day itinerary from Jammu?", a: "Yes. Take the Vande Bharat from Katra or a taxi from Jammu to Srinagar on day 1, then follow the same plan." },
    ],
  },
  {
    slug: "how-to-plan-a-kashmir-trip",
    title: "How to Plan a Kashmir Trip: Dates, Days, Route, Stays, Budget and Booking",
    description: "How to plan a Kashmir trip step by step: picking the month, how many days, the best route, where to stay, getting there, what it costs and how to compare packages.",
    category: "Planning",
    destination: "kashmir",
    date: DATE,
    intro:
      "Planning a Kashmir trip comes down to six decisions: when to go, how many days, which places, where to stay, how to get there and how to book. Most first-timers do best with 5 to 7 days, Srinagar as the base, day trips to Gulmarg and Sonamarg, and two nights in Pahalgam. Fix your month first, because it decides what you see: tulips in April, green meadows in June, golden chinars in October and snow in January.",
    sections: [
      {
        h: "Step 1: Pick the month",
        list: [
          "March and April: tulips, blossom and fresh green; snow still on the high slopes.",
          "May and June: peak summer season with green valleys and long days; busiest and most booked.",
          "July and August: lush meadows and treks; the Amarnath Yatra affects the Pahalgam and Sonamarg roads.",
          "September to November: clear skies, autumn colours and the saffron harvest; excellent value.",
          "December to February: snow, skiing and winter scenery; colder, with occasional road and flight disruption.",
        ],
      },
      {
        h: "Step 2: Decide how many days",
        p: [
          "Three days covers Srinagar and two day trips. Five days adds a Pahalgam night. Seven days is the classic first trip with Srinagar, Gulmarg, Sonamarg, two Pahalgam nights and a houseboat. Nine to ten days lets you add Gurez, Doodhpathri, Yusmarg or Vaishno Devi. If you plan to combine Kashmir with Ladakh, allow 10 to 14 days.",
        ],
      },
      {
        h: "Step 3: Choose the route",
        p: [
          "Use Srinagar as your hub. Gulmarg (about 50 km), Sonamarg (about 80 km), Doodhpathri (about 42 km) and Yusmarg (about 47 km) are day trips. Pahalgam (about 95 km) is best with one or two nights. Gurez (about 125 km over Razdan Pass) needs two nights and is open from about June to October. Never plan two of Gulmarg, Sonamarg and Pahalgam on the same day.",
        ],
      },
      {
        h: "Step 4: Choose where to stay",
        p: [
          "In Srinagar, pick Boulevard Road on Dal Lake for views, Rajbagh for calm, or a houseboat on Dal or Nigeen for one or two nights. In Pahalgam, stay by the Lidder. In Gulmarg, stay near the Gondola if you ski. In winter, heating and power backup matter more than views.",
        ],
      },
      {
        h: "Step 5: Get there",
        list: [
          "Fly to Srinagar (SXR) from Delhi, Mumbai, Bengaluru, Hyderabad, Kolkata, Chandigarh and other cities.",
          "Take a train to Katra and the Vande Bharat to Srinagar, about 3 hours over the Chenab bridge.",
          "Drive or take a taxi from Jammu on NH 44, about 250 km and 6 to 8 hours.",
        ],
      },
      {
        h: "Step 6: Budget and booking",
        p: [
          "The cost of a Kashmir trip depends on the month, the number of days, the hotel category, the cab and how many people share it. Peak weeks in May, June and over Christmas and New Year cost the most. A package bundles hotels, the cab and transfers; booking yourself works if you are comfortable arranging each piece. Either way, compare at least two quotes with the same named hotels, the same cab model and the same inclusions.",
          "Book flights and the Gulmarg Gondola as soon as your dates are fixed. For peak months, book hotels 6 to 8 weeks ahead.",
        ],
      },
      {
        h: "Step 7: Prepare",
        list: [
          "Carry original photo IDs for every traveller; foreign visitors carry passports and visas.",
          "Use a postpaid SIM; prepaid connections from outside J&K do not work.",
          "Pack layers for every season and waterproof shoes in winter.",
          "Carry cash for union taxis, ponies and shikaras.",
          "Check the latest travel updates the week before you leave.",
        ],
      },
      {
        h: "Common planning mistakes",
        list: [
          "Too many places in too few days.",
          "Booking a sedan for winter snow days.",
          "Forgetting that Pahalgam and Sonamarg sightseeing need union taxis.",
          "Planning hill trips on the departure day.",
          "Not booking the Gondola in advance in peak season.",
          "Choosing an agent only on the lowest price without comparing hotels and the cab.",
        ],
      },
    ],
    faqs: [
      { q: "How many days are enough for a Kashmir trip?", a: "Five to seven days for most first-time visitors. Three days covers Srinagar and two day trips." },
      { q: "What is the best month to visit Kashmir?", a: "It depends on what you want: April for tulips, June for green valleys, October for autumn and January for snow." },
      { q: "Is it better to book a Kashmir package or plan myself?", a: "A package is simpler, especially for first-timers and families. Planning yourself works if you are comfortable booking hotels, cabs and activities separately." },
      { q: "How far in advance should I book a Kashmir trip?", a: "Six to eight weeks ahead for peak months, and earlier for Christmas, New Year and the tulip season." },
      { q: "What documents do I need for Kashmir?", a: "Original photo IDs for Indian travellers; passports and visas for foreign visitors. Gurez and some border areas have extra checks." },
    ],
  },
  {
    slug: "kashmir-distance-chart",
    title: "Kashmir Distance Chart: Srinagar to Gulmarg, Pahalgam, Sonamarg, Gurez and More",
    description: "Kashmir distance chart: road distance and driving time from Srinagar to Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg, Gurez, Jammu, Katra, Leh and more.",
    category: "Planning",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Kashmir distances look short on a map but take longer on mountain roads. From Srinagar: Gulmarg is about 50 km (1.5 to 2 hours), Sonamarg about 80 km (2.5 to 3 hours), Pahalgam about 95 km (2.5 to 3 hours), Doodhpathri about 42 km, Yusmarg about 47 km and Gurez about 125 to 140 km (5 to 6 hours). Jammu is about 250 km by road and Leh about 420 km over two days. Use these figures to plan days, not as exact odometer readings.",
    sections: [
      {
        h: "From Srinagar: the main tourist places",
        list: [
          "Gulmarg: about 50 km, 1.5 to 2 hours via Tangmarg.",
          "Sonamarg: about 80 km, 2.5 to 3 hours via Ganderbal and Kangan.",
          "Pahalgam: about 95 km, 2.5 to 3 hours via Pampore and Anantnag.",
          "Doodhpathri: about 42 km, 1.5 to 2 hours via Budgam and Khansahib.",
          "Yusmarg: about 47 to 50 km, 1.5 hours via Charar-e-Sharief.",
          "Tangmarg and Drung waterfall: about 40 km, on the Gulmarg road.",
        ],
      },
      {
        h: "From Srinagar: south Kashmir",
        list: [
          "Pampore: about 15 km, saffron fields.",
          "Awantipora ruins: about 30 km.",
          "Achabal garden: about 56 to 65 km.",
          "Kokernag: about 80 km via Anantnag.",
          "Verinag: about 80 km via Anantnag and Qazigund.",
          "Aharbal waterfall: about 65 to 75 km via Shopian or Kulgam.",
          "Daksum: about 100 km, past Kokernag.",
        ],
      },
      {
        h: "From Srinagar: north Kashmir",
        list: [
          "Manasbal Lake: about 30 km.",
          "Wular Lake viewpoints near Bandipora: about 55 to 60 km.",
          "Gurez (Dawar): about 125 to 140 km over Razdan Pass, 5 to 6 hours.",
          "Keran: about 120 to 145 km via Kupwara, 5 to 6 hours.",
          "Bangus Valley: published figures range widely by route; plan 4 to 5 hours.",
        ],
      },
      {
        h: "Within Pahalgam and Gulmarg",
        list: [
          "Pahalgam to Aru Valley: about 12 km by union taxi.",
          "Pahalgam to Betaab Valley: about 15 km.",
          "Pahalgam to Chandanwari: about 16 km.",
          "Gulmarg to Khilanmarg: about 6 km by pony or on foot.",
          "Tangmarg to Gulmarg: about 13 km of hairpin bends.",
        ],
      },
      {
        h: "Jammu, Katra and beyond",
        list: [
          "Srinagar to Jammu: about 250 km on NH 44, 6 to 8 hours.",
          "Srinagar to Katra: about 240 km by road, or about 3 hours by Vande Bharat.",
          "Jammu to Katra: about 50 km, 1.5 hours.",
          "Jammu to Patnitop: about 110 km.",
          "Srinagar to Kargil: about 205 km over Zojila, 7 to 8 hours.",
          "Srinagar to Leh: about 420 km, two days via Kargil.",
          "Srinagar airport to Dal Lake: about 12 to 15 km.",
        ],
      },
      {
        h: "Between the hill stations",
        p: [
          "Gulmarg, Sonamarg and Pahalgam are all reached from Srinagar on different roads, so going directly from one to another usually means driving back through Srinagar. Gulmarg to Pahalgam is about 140 to 150 km, Gulmarg to Sonamarg about 120 to 130 km, and Sonamarg to Pahalgam about 170 km via Srinagar. That is why itineraries use Srinagar as the hub and give each hill station its own day.",
        ],
      },
      {
        h: "How long drives really take",
        p: [
          "Driving times above are for normal conditions. Add time for snow in winter, Amarnath Yatra security in July and August, army convoys on the Sonamarg and Gurez roads, weekend traffic at Tangmarg and Pahalgam, and stops for photos, tea and shopping. A good rule: plan no more than about 6 hours of driving in a sightseeing day.",
        ],
      },
      {
        h: "Using the chart to plan",
        list: [
          "Day trips from Srinagar: Gulmarg, Sonamarg, Doodhpathri, Yusmarg, Manasbal and Pampore.",
          "Overnight stays: Pahalgam, Gurez, Keran and Daksum.",
          "Combine on the way: Pampore and Awantipora with Pahalgam; Achabal and Kokernag with Pahalgam or Verinag; Manasbal with Sonamarg.",
          "Never combine Gulmarg, Sonamarg and Pahalgam in one day.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Gulmarg from Srinagar?", a: "About 50 km, 1.5 to 2 hours by road via Tangmarg." },
      { q: "How far is Pahalgam from Srinagar?", a: "About 95 km, 2.5 to 3 hours via Pampore and Anantnag." },
      { q: "How far is Sonamarg from Srinagar?", a: "About 80 km, 2.5 to 3 hours via Ganderbal and Kangan." },
      { q: "What is the distance from Gulmarg to Pahalgam?", a: "About 140 to 150 km, driving back through Srinagar, roughly 4 to 5 hours." },
      { q: "How far is Srinagar from Jammu?", a: "About 250 km by road on NH 44, 6 to 8 hours." },
    ],
  },
  {
    slug: "kashmir-ladakh-combo-trip",
    title: "Kashmir and Ladakh Combo Trip: 10 to 12 Days from Srinagar to Leh",
    description: "Plan a Kashmir and Ladakh combo trip: Srinagar, Gulmarg and Pahalgam, then Sonamarg, Kargil and Leh by road, with Nubra and Pangong, the season and acclimatisation.",
    category: "Itineraries",
    destination: "kashmir",
    date: DATE,
    intro:
      "A Kashmir and Ladakh combo trip is the best way to see both regions in one holiday: green valleys and lakes in Kashmir, then high deserts and monasteries in Ladakh, linked by the Srinagar to Leh road over Zojila. Plan 10 to 12 days, travel between June and September when the road and high passes are reliably open, and fly home from Leh. Climbing by road from Srinagar helps you acclimatise better than flying straight into Leh.",
    sections: [
      {
        h: "11-day itinerary",
        days: [
          "Arrive in Srinagar. Houseboat night and a sunset shikara.",
          "Srinagar: Mughal gardens, Hazratbal and the old city.",
          "Day trip to Gulmarg for the Gondola and meadow.",
          "Drive to Pahalgam via Pampore and Awantipora.",
          "Pahalgam: Betaab, Aru and Chandanwari by union taxi.",
          "Drive to Sonamarg; Thajiwas Glacier in the afternoon.",
          "Sonamarg to Kargil over Zojila, with the Drass war memorial on the way.",
          "Kargil to Leh via Mulbekh, Lamayuru and Magnetic Hill.",
          "Rest day in Leh: Shanti Stupa, Leh Palace and the market. Apply for inner line permits.",
          "Leh to Nubra via Khardung La; Diskit monastery and Hunder dunes.",
          "Nubra to Pangong via the Shyok road; night by the lake. Next day back to Leh and fly home.",
        ],
      },
      {
        h: "When to go",
        p: [
          "The Srinagar to Leh road over Zojila usually opens around April or May and closes around November or December. The high passes in Ladakh, including Khardung La and Chang La, are most reliable from June to September. That makes June to September the best window for a combo trip. In June, snow is still visible on the passes; in July and August the Amarnath Yatra adds traffic near Sonamarg; September brings clear skies and fewer crowds.",
        ],
      },
      {
        h: "Changing vehicles in Leh",
        p: [
          "Ladakh's taxi unions do not allow outside commercial vehicles to do local sightseeing. Your Kashmir cab drops you in Leh, and a Ladakh-registered vehicle takes you to Nubra, Pangong and the monasteries. A combo package arranges this handover. Bikers usually rent in Leh for the same reason.",
        ],
      },
      {
        h: "Acclimatisation",
        p: [
          "Leh is at about 3,500 m, Khardung La at about 5,300 m and Pangong at about 4,250 m. Coming by road from Srinagar, with nights in Sonamarg and Kargil, helps your body adjust gradually. Still, keep the first day in Leh for rest, drink water, avoid alcohol and climb slowly. Anyone with heart or lung conditions should check with a doctor before travelling.",
        ],
      },
      {
        h: "Permits",
        p: [
          "Indian travellers need inner line permits for Nubra, Pangong, Tso Moriri and other protected areas in Ladakh, issued online or in Leh. Foreign nationals need a Protected Area Permit for the same areas. The Srinagar to Leh highway itself does not need a permit. Carry several copies at checkposts.",
        ],
      },
      {
        h: "Shorter and longer versions",
        list: [
          "8 days: Srinagar, Sonamarg, Kargil, Leh, Nubra and Pangong, skipping Gulmarg and Pahalgam.",
          "10 days: as above with Gulmarg added.",
          "12 to 14 days: add Tso Moriri, Hanle or Turtuk in Ladakh, or a Gurez extension in Kashmir.",
          "Reverse: fly into Leh, acclimatise, drive to Srinagar and fly home. This works, but you start at high altitude.",
        ],
      },
      {
        h: "What to pack for both regions",
        list: [
          "Layers: warm days in Srinagar, freezing nights at Pangong.",
          "Sunscreen, sunglasses and lip balm for Ladakh's strong sun.",
          "Medicines including any your doctor recommends for altitude.",
          "A postpaid SIM: prepaid connections from outside J&K and Ladakh do not work.",
          "Cash for Ladakh, where ATMs are only in Leh and a few towns.",
        ],
      },
    ],
    faqs: [
      { q: "How many days are needed for a Kashmir and Ladakh combo trip?", a: "10 to 12 days is ideal. Eight days is possible if you skip Gulmarg and Pahalgam." },
      { q: "When is the best time for a Kashmir Ladakh combo trip?", a: "June to September, when the Srinagar to Leh road and Ladakh's high passes are reliably open." },
      { q: "Should I start in Kashmir or Ladakh?", a: "Starting in Kashmir and driving to Leh is better for acclimatisation, because altitude rises gradually." },
      { q: "Can my Kashmir taxi go to Nubra and Pangong?", a: "No. Local sightseeing in Ladakh is done in Ladakh-registered vehicles. Your package arranges the change in Leh." },
      { q: "Do I need permits for a Kashmir Ladakh trip?", a: "Inner line permits for Nubra, Pangong and other protected areas in Ladakh. Foreign nationals need a Protected Area Permit." },
    ],
  },
  {
    slug: "vaishno-devi-and-kashmir-trip-plan",
    title: "Vaishno Devi and Kashmir Trip: 7 to 9 Day Plan from Katra to Srinagar",
    description: "Vaishno Devi with Kashmir in one trip: two nights in Katra, the yatra or helicopter, the Vande Bharat to Srinagar, then Gulmarg and Pahalgam, day by day.",
    category: "Pilgrimage",
    destination: "kashmir",
    city: "katra",
    date: DATE,
    intro:
      "Vaishno Devi and Kashmir fit together naturally. Start in Katra with two nights for the yatra to the Bhawan, then take the Vande Bharat from Katra to Srinagar, about 3 hours over the Chenab bridge, and spend five to six days in Kashmir. The whole trip takes 7 to 9 days. Book the yatra registration, any helicopter seats and the train as soon as your dates are fixed, because all three sell out in peak months.",
    sections: [
      {
        h: "8-day plan",
        days: [
          "Arrive in Katra by train, or by road from Jammu (about 50 km). Collect your yatra RFID card; rest.",
          "Vaishno Devi yatra: walk, pony, palki or helicopter to Sanjichhat; darshan at the Bhawan, ropeway to Bhairon temple; return to Katra.",
          "Morning Vande Bharat to Srinagar. Afternoon shikara ride on Dal Lake.",
          "Srinagar: Mughal gardens, Shankaracharya temple, Hazratbal and Kheer Bhawani at Tulmulla.",
          "Day trip to Gulmarg for the Gondola.",
          "Drive to Pahalgam via Pampore and Awantipora.",
          "Pahalgam: Betaab, Aru and Chandanwari by union taxi.",
          "Return to Srinagar and fly home.",
        ],
      },
      {
        h: "Temples to add in Kashmir",
        list: [
          "Shankaracharya temple: on a hill above Dal Lake, reached by about 240 steps.",
          "Kheer Bhawani temple at Tulmulla, about 25 km from Srinagar, with its sacred spring.",
          "Martand Sun temple ruins near Anantnag, on the way to Pahalgam.",
          "Mamaleshwar temple in Pahalgam, one of the oldest in the valley.",
          "Awantipora temple ruins, built in the 9th century.",
        ],
      },
      {
        h: "When to go",
        p: [
          "The yatra runs all year. The most comfortable months for the combined trip are March to June and September to November. Navratri brings big crowds to Katra, and the summer holidays fill both Katra and Kashmir. In July and August the Amarnath Yatra adds security and traffic on the Pahalgam and Sonamarg roads. In winter, Kashmir is snowy and beautiful, and the Vande Bharat keeps running when the highway closes.",
        ],
      },
      {
        h: "Travelling with elderly parents",
        p: [
          "For elderly pilgrims, book the helicopter early and plan a pony or palki from Sanjichhat to the Bhawan, or use the battery car on the newer route from Adhkuwari. Keep a full rest day after the yatra before travelling to Srinagar if needed. In Kashmir, choose ground-floor rooms, an Innova Crysta and short sightseeing days.",
        ],
      },
      {
        h: "Food and stays",
        p: [
          "Katra is a vegetarian town with plenty of North and South Indian food. In Kashmir, vegetarian food is easy to find in Srinagar, Gulmarg and Pahalgam: Kashmiri dum aloo, rajma, haak saag and nadru (lotus stem) dishes are all vegetarian. Jain food can be arranged with notice at many hotels.",
        ],
      },
      {
        h: "What to book first",
        list: [
          "Flights or trains to Katra or Jammu.",
          "Yatra registration and any Shrine Board rooms or helicopter seats.",
          "The Katra to Srinagar Vande Bharat on IRCTC.",
          "Kashmir hotels and the cab, ideally as one package.",
          "The Gulmarg Gondola on the official portal.",
        ],
      },
    ],
    faqs: [
      { q: "How many days are needed for Vaishno Devi and Kashmir?", a: "Seven to nine days: two nights in Katra and five to six in Kashmir." },
      { q: "How do I go from Katra to Srinagar?", a: "By the Vande Bharat train, about 3 hours, or by road, about 6 to 8 hours." },
      { q: "Should I do Vaishno Devi first or Kashmir first?", a: "Most pilgrims do Vaishno Devi first, then relax in Kashmir. Either works if you book the train both ways." },
      { q: "Is vegetarian food easy to find in Kashmir?", a: "Yes. Srinagar and the hill stations have vegetarian restaurants and Kashmiri vegetarian dishes." },
    ],
  },
  {
    slug: "kashmir-tulip-festival-trip",
    title: "Kashmir Tulip Festival Trip: When the Tulip Garden Opens and a 6-Day Spring Plan",
    description: "Plan a Kashmir tulip festival trip: when Srinagar's Tulip Garden usually opens, peak bloom, tickets, crowds, almond blossom and a 6-day spring itinerary.",
    category: "Itineraries",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Srinagar's Indira Gandhi Memorial Tulip Garden, on the slopes of the Zabarwan hills above Dal Lake, is Asia's largest tulip garden, with well over a million tulips in dozens of varieties. It usually opens in late March and stays open for about three to four weeks, with peak bloom in the first half of April. J&K Tourism holds a tulip festival around the peak. A 6-day spring trip combines the garden with Mughal gardens in bloom, Gulmarg's late snow and Pahalgam.",
    sections: [
      {
        h: "When the Tulip Garden opens",
        p: [
          "Opening dates depend on the weather and are announced by the Floriculture Department a few weeks ahead, usually for late March. Early varieties bloom first, and the full display peaks around the first two weeks of April. A warm spell can bring the peak forward and shorten the season; a cold spring can delay it. Plan your trip for the first half of April and keep your dates flexible if you can.",
        ],
      },
      {
        h: "Tickets and timings",
        list: [
          "Entry tickets are sold at the gate and, in recent seasons, online through the official J&K Floriculture or tourism channels.",
          "The garden opens in the morning and closes in the evening; check current timings before you go.",
          "Weekends and holidays bring large crowds; go on a weekday, early morning.",
          "Professional photography may need permission; casual photography is fine.",
        ],
      },
      {
        h: "Spring around the Tulip Garden",
        list: [
          "Badamwari almond garden near Hari Parbat: almond blossom in March, often just before the tulips.",
          "Botanical Garden, next to the Tulip Garden: spring flowers and lakes.",
          "Nishat and Shalimar Bagh: terraces filling with spring colour.",
          "Cherry and apple blossom in orchards around the valley in April.",
          "Gulmarg: snow still on the upper slopes and the Gondola's Phase 2.",
        ],
      },
      {
        h: "6-day spring plan",
        days: [
          "Arrive in Srinagar. Afternoon at Badamwari or the Botanical Garden; sunset shikara on Dal.",
          "Tulip Garden at opening time, then Nishat, Shalimar and Chashme Shahi.",
          "Day trip to Gulmarg for spring snow on Apharwat.",
          "Drive to Pahalgam via Pampore and Awantipora.",
          "Pahalgam: Betaab and Aru by union taxi; spring rivers in full flow.",
          "Return to Srinagar; a second Tulip Garden visit in the late afternoon light, then fly home.",
        ],
      },
      {
        h: "Weather and packing",
        p: [
          "Spring days in Srinagar are mild and pleasant, often 15 to 22 degrees Celsius in April, but mornings and nights are cool and spring showers are common. Gulmarg and Pahalgam are colder, with snow still higher up. Pack layers, a light waterproof jacket, comfortable walking shoes and something warm for the hills.",
        ],
      },
      {
        h: "Booking tips",
        list: [
          "Book flights and hotels 6 to 8 weeks ahead for the tulip weeks.",
          "Keep the Tulip Garden visit early in the trip, with a second chance later in case of rain.",
          "Stay near Boulevard Road or the gardens side for easy access.",
          "Book the Gulmarg Gondola online in advance; spring is a busy season.",
          "Ask your agent about the tulip festival dates when they are announced.",
        ],
      },
      {
        h: "Is the tulip trip right for you?",
        p: [
          "The tulip season is one of the best times for photography, families and couples: mild weather, colour everywhere and snow still on the hills. It is also busy, so if you prefer quiet, choose late April after the peak, when the Mughal gardens and orchards are still blooming, or October for golden chinars.",
        ],
      },
    ],
    faqs: [
      { q: "When does the Tulip Garden in Srinagar open?", a: "Usually in late March, with dates announced each year. It stays open for about three to four weeks." },
      { q: "When is peak tulip bloom in Kashmir?", a: "Usually in the first half of April, depending on the weather." },
      { q: "How many tulips are in the Srinagar Tulip Garden?", a: "Well over a million, in dozens of varieties, making it Asia's largest tulip garden." },
      { q: "How many days are needed for a tulip festival trip?", a: "Five to six days covers the Tulip Garden, Mughal gardens, Gulmarg and Pahalgam." },
      { q: "Can I book Tulip Garden tickets online?", a: "In recent seasons, tickets have been available online through official channels as well as at the gate. Check before you go." },
    ],
  },
];

const MORE: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "kashmir-3-day-itinerary": {
    sections: [
      { h: "A 3-day winter itinerary", p: ["In December, January and February, plan the three days around snow and short daylight. Day 1: arrive, see the Mughal gardens in their winter quiet, and take a short shikara ride on a calm afternoon. Day 2: Gulmarg early for the Gondola, sledging and snow walks, back before the road freezes after 4 pm. Day 3: Sonamarg through the Z-Morh tunnel for snow at Thajiwas, or a slower morning in the old city and a Pampore stop on the way to the airport.", "Use an Innova or another vehicle with chains, choose a centrally heated hotel and keep a buffer: winter flights at Srinagar sometimes run late after fog or snow."] },
      { h: "A 3-day honeymoon version", p: ["For couples, start with a houseboat night on Dal or Nigeen, a decorated shikara at sunset and dinner on the deck. Spend day 2 in Gulmarg, staying overnight near the Gondola instead of returning, so you have the meadow in the evening. On day 3, take the first Gondola cabin, then drive back to Srinagar for the flight. This drops Sonamarg but makes the trip slower and more romantic."] },
    ],
    faqs: [
      { q: "What is the best 3-day Kashmir itinerary from Delhi?", a: "Fly into Srinagar on the earliest flight, follow the Srinagar, Gulmarg and Sonamarg plan, and take an evening flight back on day 3. Book the Gondola before you leave Delhi." },
    ],
  },
  "kashmir-7-day-itinerary": {
    sections: [
      { h: "Getting the timing right each day", p: ["Most days in this plan start between 7.30 and 8.30 am. On the Gulmarg day, an early start beats the Gondola queues; on the Sonamarg day, it gives you the glacier before the crowds; and on the Pahalgam drive, it leaves time for the saffron, temple and bat stops. Evenings are free: the shikara on day 1, Boulevard Road walks in Srinagar, and the Lidder riverbank in Pahalgam."] },
    ],
    faqs: [
      { q: "Can I do the 7-day plan with small children?", a: "Yes. Keep starts a little later, use ponies or sledges instead of long walks, and add rest time in the afternoons. Pahalgam's parks and the Gulmarg meadow are good for children." },
    ],
  },
  "how-to-plan-a-kashmir-trip": {
    sections: [
      { h: "Sample plans by trip length", p: ["Three days: Srinagar, a Gulmarg day trip and Sonamarg. Five days: Srinagar, Gulmarg, Sonamarg and one Pahalgam night. Seven days: Srinagar with a houseboat night, Gulmarg, Sonamarg and two Pahalgam nights. Ten days: add Doodhpathri or Yusmarg and two nights in Gurez in summer, or Vaishno Devi at the start. Fourteen days: add Ladakh by road from Srinagar."] },
      { h: "Planning for families, couples and groups", p: ["Families with elderly parents should choose fewer places, a comfortable cab such as an Innova Crysta and ground-floor rooms. Couples can slow the pace with extra houseboat and Pahalgam nights. Groups of nine or more should book a tempo traveller and plan union taxis in Pahalgam and Sonamarg in advance. Solo travellers can join shared cabs from Srinagar's taxi stands or book a small-group tour."] },
    ],
    faqs: [

    ],
  },
  "kashmir-distance-chart": {
    sections: [
      { h: "Distance from major Indian cities to Srinagar", p: ["By road, Delhi to Srinagar is roughly 800 to 850 km via Ambala, Jalandhar, Pathankot and Jammu, usually driven over two days with a night in Jammu or Pathankot. Chandigarh to Srinagar is about 550 to 600 km, Amritsar to Srinagar about 450 km via Pathankot and Jammu. Most travellers from further away fly directly to Srinagar or take a train to Katra and the Vande Bharat on to Srinagar."] },
      { h: "Flight times to Srinagar", p: ["Direct flights take roughly 1.5 hours from Delhi and Chandigarh, around 3 hours from Mumbai, and about 3 to 3.5 hours from Bengaluru, Hyderabad and Kolkata where direct flights operate. Many other cities connect through Delhi. Flights land and leave in daylight hours, so plan your first and last sightseeing days around them."] },
    ],
    faqs: [
      { q: "How far is Doodhpathri from Srinagar?", a: "About 42 km, 1.5 to 2 hours via Budgam and Khansahib." },
      { q: "How far is Gurez from Srinagar?", a: "About 125 to 140 km over Razdan Pass depending on the route, 5 to 6 hours." },
    ],
  },
  "kashmir-ladakh-combo-trip": {
    sections: [
      { h: "Highlights of the Srinagar to Leh drive", p: ["The drive is one of the great road journeys in India. You climb from the green Sindh valley through Sonamarg to Zojila, where the landscape changes from forest to bare rock and snow. Drass, one of the coldest inhabited places in India, has the Kargil War Memorial. Kargil sits on the Suru river, and beyond it the road passes Mulbekh's rock-cut Maitreya Buddha, the Namik La and Fotu La passes and the eroded moonland around Lamayuru monastery before following the Indus to Leh."] },
      { h: "Budget and booking", p: ["A combo trip costs more than Kashmir alone because of the longer distances, two sets of vehicles and Ladakh's shorter season. The price depends on hotel category, the number of travellers sharing vehicles, the month and whether you add Tso Moriri or Turtuk. Book 6 to 8 weeks ahead for June to August, and check that the quote names hotels in each town, both vehicles and the permits."] },
    ],
    faqs: [

    ],
  },
  "vaishno-devi-and-kashmir-trip-plan": {
    sections: [
      { h: "Reaching Katra", p: ["Katra is reached by train at Shri Mata Vaishno Devi Katra station, with direct trains from Delhi and other cities, or by road from Jammu airport and Jammu Tawi station, about 50 km away. Arriving by an overnight train lets you rest in Katra on day 1 and start the yatra early on day 2."] },
      { h: "A 9-day version", p: ["Add Sonamarg as a day trip from Srinagar and one more night in Pahalgam to the 8-day plan, or add Patnitop on the way if you travel by road from Katra. Families often prefer the 9-day version because it gives a rest day after the yatra and slower days in Kashmir."] },
      { h: "What to carry for the yatra", p: ["Carry your RFID yatra card, photo ID, water, a light raincoat and a warm layer for the Bhawan. Leave leather items, phones and cameras in the lockers before the cave area. Comfortable walking shoes and a small backpack make the climb easier, and a torch helps for night walks."] },
    ],
    faqs: [
      { q: "Is the Vande Bharat from Katra to Srinagar daily?", a: "It runs on a regular schedule; check current days and timings on IRCTC when you book." },
    ],
  },
  "kashmir-tulip-festival-trip": {
    sections: [
      { h: "About the Tulip Garden", p: ["The Indira Gandhi Memorial Tulip Garden, earlier known as Siraj Bagh, was opened in 2007 on terraced slopes between the Zabarwan hills and Dal Lake. It is laid out in seven terraces, with long beds of tulips in red, yellow, pink, purple and white, alongside hyacinths, daffodils and other spring bulbs. It is managed by the J&K Floriculture Department and has become one of Kashmir's most visited spring attractions."] },
      { h: "Photography tips", p: ["Arrive at opening time for soft light and fewer people in your frames. Use the terraces to frame the Zabarwan hills behind the flowers. Overcast days give rich, even colours. Stay on the paths: walking into the beds damages the flowers and is not allowed. A short lens for wide terraces and a longer one for single blooms cover most shots."] },
    ],
    faqs: [

    ],
  },
};

export const KASHMIR_PLANS: BlogPost[] = BASE.map((p) => {
  const m = MORE[p.slug];
  return m ? { ...p, sections: [...p.sections, ...m.sections], faqs: [...p.faqs, ...m.faqs] } : p;
});

const EXTRA_1: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "how-to-plan-a-kashmir-trip": {
    sections: [

    ],
    faqs: [
      { q: "Do I need a guide in Kashmir?", a: "Not for the main towns: drivers know the routes. A local guide helps in the old city of Srinagar, for treks and for Mughal garden history." },
    ],
  },
  "kashmir-distance-chart": {
    sections: [

    ],
    faqs: [
      { q: "How far is Katra from Srinagar?", a: "About 240 km by road, 6 to 8 hours, or about 3 hours on the Vande Bharat train." },
      { q: "Can I visit Doodhpathri and Gulmarg on the same day?", a: "It is not practical. They are on different roads from Srinagar, so give each its own day." },
    ],
  },
  "kashmir-ladakh-combo-trip": {
    sections: [

    ],
    faqs: [
      { q: "Is a Kashmir Ladakh combo trip suitable for families?", a: "Yes, with care for altitude: build in rest days in Kargil and Leh, keep Khardung La and Pangong days unhurried, and check with a doctor for elderly members or anyone with heart or lung conditions." },
    ],
  },
  "vaishno-devi-and-kashmir-trip-plan": {
    sections: [
      { h: "Vaishno Devi and Kashmir in winter", p: ["From December to February, Katra is cold at night and the Bhawan can see snow, but the yatra continues. The Vande Bharat to Srinagar is the most reliable way into the valley in winter, when NH 44 can close after snow at Banihal. In Kashmir, Gulmarg and Pahalgam are under snow, Sonamarg is reachable on most days through the Z-Morh tunnel, and hotels with central heating make the trip comfortable. Carry thermal layers for both parts of the trip."] },
      { h: "Combining with Amarnath or Shiv Khori", p: ["Some pilgrims add the Amarnath Yatra in July or August, which needs separate registration, a medical certificate and fixed dates, and is usually done from Baltal near Sonamarg or Pahalgam. Others add Shiv Khori, a cave shrine in Reasi district a few hours from Katra. Each adds one to three days, and Amarnath dates must be fixed before the rest of the plan."] },
    ],
    faqs: [
      { q: "Can I do the Vaishno Devi yatra in one day?", a: "Many pilgrims do the round trip in one long day of 12 to 16 hours on foot. The helicopter, ponies or an overnight stay at the Bhawan make it easier." },
    ],
  },
  "kashmir-tulip-festival-trip": {
    sections: [
      { h: "Where to stay for the tulip season", p: ["Hotels on Boulevard Road and the Nishat side of Dal Lake are closest to the Tulip Garden, which sits on the Zabarwan slopes near the Botanical Garden and Chashme Shahi. Rajbagh is a quieter option about 15 to 20 minutes away. Houseboats on Dal are also convenient. Rooms for the first half of April book out early, so confirm at least 6 to 8 weeks ahead."] },
    ],
    faqs: [
      { q: "Is the Tulip Garden suitable for elderly visitors?", a: "Yes. The terraces have paved paths and gentle slopes, with benches along the way. Go early on a weekday to avoid crowds." },
    ],
  },
};
for (const p of KASHMIR_PLANS) {
  const e = EXTRA_1[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_2: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "kashmir-distance-chart": {
    sections: [

    ],
    faqs: [
      { q: "How far is Sonamarg from Gulmarg?", a: "About 120 to 130 km, driving back through Srinagar, roughly 4 hours. Plan separate days from a Srinagar base." },
    ],
  },
  "kashmir-ladakh-combo-trip": {
    sections: [

    ],
    faqs: [
      { q: "Can I fly back from Leh at the end of the combo trip?", a: "Yes. Leh has daily flights to Delhi and some other cities, mostly in the morning. Keep a buffer day in case weather delays flights." },
    ],
  },
  "kashmir-tulip-festival-trip": {
    sections: [

    ],
    faqs: [
      { q: "Is the tulip season crowded in Srinagar?", a: "Yes, especially on weekends in early April. Go to the garden at opening time on a weekday and book hotels early." },
    ],
  },
};
for (const p of KASHMIR_PLANS) {
  const e = EXTRA_2[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_3: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "kashmir-ladakh-combo-trip": {
    sections: [

    ],
    faqs: [
      { q: "What does a Kashmir Ladakh combo tour package include?", a: "Usually hotels in Srinagar, Pahalgam or Gulmarg, Sonamarg, Kargil, Leh, Nubra and Pangong, a Kashmir vehicle to Leh, a Ladakh vehicle for sightseeing, inner line permits and some meals. Check flights and activities separately." },
    ],
  },
  "vaishno-devi-and-kashmir-trip-plan": {
    sections: [

    ],
    faqs: [
      { q: "What does a Vaishno Devi Kashmir tour package include?", a: "Typically a Katra hotel, help with yatra registration, the transfer or train to Srinagar, Kashmir hotels and a houseboat, a private cab and a shikara ride. Helicopter seats are booked separately on the Shrine Board website." },
    ],
  },
  "kashmir-tulip-festival-trip": {
    sections: [

    ],
    faqs: [
      { q: "What does a Kashmir tulip festival tour package include?", a: "Usually Srinagar hotels near Dal Lake, Tulip Garden and Mughal garden visits, a Gulmarg day, a Pahalgam stay, a private cab and a shikara ride. Garden tickets and the Gondola are often extra." },
    ],
  },
};
for (const p of KASHMIR_PLANS) {
  const e = EXTRA_3[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}
