// Depth pass 2, part 3 (2026-11-13): further sections for the Kashmir posts
// in kashmir-depth-2.ts and -3.ts that still sat below the competing
// tdiholidayventures.com pages. Appended by withAdditions in blog/index.ts.
// No typed fares or prices, no em dashes.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const KASHMIR_DEPTH_4_ADDITIONS: Record<string, Addition> = {
  "best-time-to-visit-kashmir": {
    sections: [
      {
        h: "Best time for Gulmarg, Pahalgam and Sonamarg individually",
        p: [
          "Gulmarg is best from late December to early March for snow and skiing, and from May to September for green meadows, golf and the Gondola without the cold. Pahalgam is best from April to October, when Aru, Betaab and Chandanwari are reachable and the Lidder runs full; it is quieter but still lovely under snow in winter. Sonamarg is best from May to October for the Thajiwas glacier and Zero Point, and it now works as a winter snow day too because the Z-Morh tunnel keeps it reachable.",
          "Srinagar itself has something in every month: tulips in April, Mughal gardens in full bloom in May and June, long shikara evenings in summer, chinar colour in autumn and frozen edges on Dal Lake and harissa breakfasts in winter.",
        ],
      },
    ],
    faqs: [
      { q: "Is Kashmir open all year?", a: "Yes. Srinagar, Gulmarg, Pahalgam and Sonamarg are visited in every month, although some higher valleys and passes close in winter." },
    ],
  },

  "kashmir-in-june": {
    sections: [
      {
        h: "Shikara evenings in June",
        p: [
          "Long June evenings are ideal for a shikara ride on Dal or Nigeen Lake. Go about an hour before sunset, agree the route and duration at an official ghat, and include the floating vegetable market only if you can get up early the next morning.",
        ],
      },
      {
        h: "Rain and road advisories to check in June",
        p: [
          "Before each long drive in June, check the Jammu to Srinagar highway status issued by the traffic police, especially on the Ramban and Banihal stretch, and the Amarnath Yatra convoy timings if you are heading to Pahalgam or Sonamarg after the yatra begins. Your agent or driver will usually know the day's advisories; ask them the evening before.",
        ],
      },
      {
        h: "A 5-day June plan if you have less time",
        days: [
          "Arrive in Srinagar; Mughal gardens in the afternoon and a sunset shikara ride on Dal Lake.",
          "Day trip to Gulmarg for both Gondola phases and the snow at Apharwat; back to Srinagar.",
          "Drive to Pahalgam via the Pampore saffron fields and Awantipora ruins; evening by the Lidder.",
          "Union taxi to Aru and Betaab valleys, or rafting on the Lidder; overnight in Pahalgam.",
          "Return to Srinagar for the old city and shopping, then fly home.",
        ],
      },
      {
        h: "Crowds and how to avoid the worst of them",
        p: [
          "June brings the year's largest crowds, driven by school holidays in north and west India. Gulmarg's Gondola queues are longest between 10 am and 2 pm, Pahalgam's union taxi stand is busiest mid-morning, and the Thajiwas pony stand in Sonamarg fills by late morning.",
          "Three habits make a big difference: start each day by 8 am, book Gondola tickets online the moment your date is fixed, and stay a night in Pahalgam or Gulmarg rather than doing everything as day trips. If your dates allow, the first ten days of June are noticeably calmer than the last two weeks, when Amarnath Yatra preparations also begin.",
        ],
      },
      {
        h: "June for families with children",
        p: [
          "June suits families well: the weather is mild, every sightseeing point is open and there is plenty for children to do, from pony rides and snow at Apharwat to boat rides on Dal Lake and the playground lawns of the Mughal gardens. Plan shorter driving days, keep warm layers handy for the Gondola summit, and choose hotels with family rooms and lifts.",
          "If anyone in the group is prone to altitude discomfort, spend only a short time at Apharwat and keep the Gulmarg visit as a return day trip from Srinagar.",
        ],
      },
      {
        h: "Weather risks in June",
        p: [
          "June is mostly dry in the valley, but afternoon thunderstorms are common in Gulmarg, Pahalgam and Sonamarg, sometimes with hail. They usually pass within an hour or two. The Gondola stops in strong wind or lightning, so keep a fallback afternoon. Towards the end of the month, pre-monsoon showers can reach the Jammu side and the Banihal stretch, occasionally causing landslides that slow the highway; check road status before long drives.",
        ],
      },
    ],
    faqs: [
      { q: "Is June good for a Kashmir honeymoon?", a: "Yes. Gardens, meadows and lakes are at their best, though popular spots are busy. Book a quiet houseboat on Nigeen and a riverside room in Pahalgam." },
      { q: "Can I see the tulips in June?", a: "No. The Tulip Garden season ends in late April or early May, but roses and other flowers bloom in the Mughal gardens in June." },
    ],
  },

  "kashmir-in-march": {
    sections: [
      {
        h: "A note on prices in March",
        p: [
          "March is often good value: many hotels and houseboats offer lower rates before the April rush, and flights are cheaper outside Holi weekend. Ask agents for a quote in early March and another for late March; the difference can be noticeable.",
        ],
      },
      {
        h: "Who should skip March",
        p: [
          "Skip March if you need guaranteed green meadows, warm evenings on a houseboat deck or open high roads to Gurez and Ladakh; April to June suits you better. Also skip it if your dates are fixed and you cannot handle a day lost to rain or snow on the highway.",
        ],
      },
      {
        h: "Is Pahalgam worth visiting in March?",
        p: [
          "Yes, if you want snow-dusted pine forest and quiet lanes, but expect limits. Pahalgam town is open, the Lidder runs clear and cold, and many hotels offer good value before the season starts. Aru and Betaab can still be snowbound early in the month, and Chandanwari is usually not reachable until later in spring. Union taxis will tell you on the day how far the road is open.",
          "If you travel in late March, the lower meadows start to green and Betaab Valley often opens up. A single night in Pahalgam with a slow riverside walk is more rewarding than a rushed day trip at this time of year.",
        ],
      },
      {
        h: "Navreh and spring festivals in March",
        p: [
          "Navreh, the Kashmiri Pandit new year, falls on the first day of the bright half of the month of Chaitra, usually in March or early April. Families prepare a thali with rice, walnuts, a mirror, flowers and a new almanac, and visit temples such as Kheer Bhawani and Hari Parbat's Sharika Devi shrine. Visitors who respect the occasion are welcome to observe.",
          "Some years, the Tulip Festival starts at the end of March, with cultural programmes, Kashmiri music and local food stalls near the Tulip Garden.",
        ],
      },
      {
        h: "March for families and senior citizens",
        p: [
          "March suits families who want snow without the deep cold of January. Gulmarg still has snow on the slopes, Srinagar is mild by day and hotels are less crowded, which makes it easier to get family rooms and flexible check-in. Senior citizens should keep the Gulmarg visit short, wear warm layers and avoid long evenings outdoors when temperatures drop.",
          "Keep the plan unhurried: one sightseeing block in the morning, a rest after lunch and a gentle evening. A heated houseboat or hotel near the Boulevard keeps transfers short.",
        ],
      },
    ],
    faqs: [
      { q: "Should I book Kashmir early for late March?", a: "Yes, if your dates may overlap with the Tulip Garden opening, since hotels near Dal Lake fill quickly once the dates are announced." },
      { q: "What should I wear in Kashmir in March?", a: "Layers: thermal innerwear, a sweater or fleece and a waterproof jacket, plus snow boots for Gulmarg." },
    ],
  },

  "kashmir-in-may": {
    sections: [
      {
        h: "Is May or June better for Kashmir?",
        p: [
          "May is slightly cooler, with more snow on the high slopes and blossom lingering in the gardens; June is warmer, greener and the better month for rafting and Gurez. May's first half is usually less crowded than any part of June, while late June brings Amarnath Yatra traffic. For snow and gardens choose May; for warm evenings, rafting and the border valleys choose June.",
        ],
      },
      {
        h: "What a Kashmir package for May usually includes",
        p: [
          "A typical May package includes airport transfers, hotels with breakfast and dinner, a private cab for sightseeing and transfers between Srinagar, Gulmarg, Pahalgam and Sonamarg, and often a shikara ride. Gondola tickets, union taxis in Pahalgam and Sonamarg, pony rides and entry fees are usually paid locally. In May, check that your hotel nights are confirmed by name, since overbooking is more common in peak weeks.",
        ],
      },
      {
        h: "Sonamarg or Gulmarg for snow in May?",
        p: [
          "Both usually have snow in May, but in different places. In Gulmarg, the snow is high up at Apharwat, reached by Gondola Phase 2, while the meadow itself is green. In Sonamarg, snow lies on the slopes around Thajiwas glacier, reached on foot or by pony, and beyond Zoji La at Zero Point once the pass opens. Families with small children often find Gulmarg easier, because the Gondola does the climbing; active travellers enjoy the walk to Thajiwas. With enough days, do both: Gulmarg on one day and Sonamarg on another, from a Srinagar base.",
        ],
      },
      {
        h: "Early May versus late May",
        p: [
          "Early May is the sweet spot: tulips have usually finished, but gardens are full of colour, Gulmarg and Sonamarg still carry snow on the upper slopes, and the school holiday crowds have not fully arrived. Prices are high but rooms are still available.",
          "Late May is warmer and greener, with Gurez and Zoji La more likely to be open and longer daylight for sightseeing. It is also the busiest time of the spring, with families from across India, so book early and keep your schedule flexible.",
        ],
      },
      {
        h: "Kheer Bhawani mela and other May events",
        p: [
          "The Mela Kheer Bhawani at Tulmulla, near Ganderbal, is held on Jyeshtha Ashtami, which falls in late May or June. Devotees gather at the temple in the sacred spring, and the colour of the spring's water is traditionally watched as an omen. Visitors who respect the occasion can observe the gathering.",
          "Gardens in Srinagar host flower shows and cultural programmes through the spring, and some years see the Tulip Festival extend into the first days of May.",
        ],
      },
      {
        h: "Planning around the crowds in May",
        list: [
          "Visit the Gulmarg Gondola early in the morning, before 9 am if possible.",
          "Stay a night in Pahalgam to see Aru and Betaab before the day-trippers arrive.",
          "Book houseboats on Nigeen Lake for a quieter stay than central Dal.",
          "Do the old city of Srinagar on a weekday morning, when the lanes are calmer.",
          "Keep evenings free for shikara rides, when the lake is at its prettiest and less crowded.",
        ],
      },
      {
        h: "A 6-day plan for the second half of May",
        days: [
          "Arrive in Srinagar, check in, sunset shikara ride on Dal Lake.",
          "Srinagar gardens and the old city, with lunch at a wazwan restaurant.",
          "Gulmarg for both Gondola phases, staying the night.",
          "Drive to Pahalgam via Srinagar; evening walk by the Lidder.",
          "Aru, Betaab and Chandanwari by union taxi, or rafting on the Lidder.",
          "Return to Srinagar and fly home, or take a day trip to Sonamarg if your flight is late.",
        ],
      },
    ],
    faqs: [
      { q: "Is May good for senior citizens in Kashmir?", a: "Yes. Days are mild, though the crowds can be tiring; book hotels with lifts and avoid peak hours at the Gondola." },
    ],
  },

  "gulmarg-skiing-and-snow-activities": {
    sections: [
      {
        h: "Ski passes and Gondola tickets",
        p: [
          "Skiers using the Gondola buy tickets for each phase, and multi-ride or day passes for skiers have been offered in some seasons. Check the current options on the official Gondola booking portal before you arrive, and carry ID.",
        ],
      },
      {
        h: "Skiing in Gulmarg with children",
        p: [
          "Children from about six years old can start on the gentle slopes near the Gondola base with an instructor who is used to teaching kids. Book short sessions of one to two hours, dress them in waterproof layers, and keep a warm cafe nearby for breaks.",
        ],
      },
      {
        h: "What to rent and what to bring",
        p: [
          "Ski and snowboard equipment, boots and poles can be hired from shops near the Gondola base and from some hotels. Check that boots fit snugly without pressure points, that bindings are adjusted to your weight and ability, and that the skis are suitable for the snow on the day. Helmets are strongly recommended, especially for beginners and children.",
          "Bring your own waterproof jacket and trousers, thermal base layers, ski socks, gloves, a neck gaiter and goggles; these are harder to hire and matter most for comfort. Sunscreen and lip balm are essential at this altitude, as snow glare burns quickly even in cloudy weather.",
        ],
      },
      {
        h: "A beginner's progression, day by day",
        list: [
          "Day 1: balance, walking on skis, the snowplough stop and gentle slides on the nursery slope.",
          "Day 2: snowplough turns, using the button lift, and linking turns on gentle terrain.",
          "Day 3: more confident turns, controlling speed, and longer runs near the base.",
          "Day 4: parallel turns begin for some; first runs at Kongdoori with an instructor if ready.",
          "Day 5 onwards: building confidence on Kongdoori's wider slopes.",
        ],
      },
    ],
  },

  "tulip-garden-srinagar-guide": {
    sections: [
      {
        h: "Getting tickets for the Tulip Garden",
        p: [
          "Tickets are sold at the entrance counters, and the Floriculture Department announces each season's ticketing, including any online or QR booking, when it sets the opening date. Check that announcement before you go, carry photo ID and keep some cash in case card or UPI payment at the counter is slow on busy days.",
        ],
      },
      {
        h: "Tulip Garden with children and elderly visitors",
        p: [
          "The garden is laid out on gentle terraces with paved paths, so it is easy for families with children and for older visitors who can manage a few steps. Wheelchair users can reach the lower terraces, though upper levels involve slopes and steps. There are benches, drinking water and toilets near the entrance.",
          "Children enjoy the colour and space, but keep them on the paths: picking flowers and walking in the beds is not allowed. Go at opening time on a weekday to avoid the busiest periods, and carry water and a light snack, since food stalls inside are limited outside festival days.",
        ],
      },
    ],
  },

  "golf-in-kashmir-royal-springs-gulmarg-pahalgam": {
    sections: [
      {
        h: "Planning golf around the weather",
        p: [
          "Mornings are calm and clear in most months, which makes early tee times the best choice. Afternoon showers are common in Gulmarg and Pahalgam from May to August. Spring rounds in April can be cool and damp, while September and October bring crisp, dry weather and some of the best playing conditions of the year.",
        ],
      },
    ],
  },

  "kashmir-in-january": {
    sections: [
      {
        h: "Flight delays in January and how to plan for them",
        p: [
          "Snow and fog occasionally delay or cancel flights into and out of Srinagar in January. Keep at least one buffer day before an international connection, book morning flights when possible, and choose fares that allow changes. The Vande Bharat train from Srinagar to Katra is a useful backup if flights are disrupted for more than a day.",
        ],
      },
    ],
  },

  "kashmir-tour-packages-from-bangladesh": {
    faqs: [
      { q: "Can Bangladeshi citizens visit Gurez or Keran?", a: "No. Border areas such as Gurez, Keran and Machil are restricted for foreign nationals." },
      { q: "Is a Kashmir package from Bangladesh better than booking separately?", a: "For a first visit, a package from a Kashmir agent simplifies hotel registration for foreigners, cabs and local permits, and agents can advise on what is open to foreign visitors." },
    ],
  },

  "kashmir-tour-packages-from-malaysia": {
    faqs: [
      { q: "Can Malaysian citizens visit Gurez or Keran?", a: "No. Border areas such as Gurez, Keran and Machil are restricted for foreign nationals." },
      { q: "Do Malaysians need a visa for India?", a: "Yes. Malaysian citizens are eligible for the Indian e-Visa, which should be approved before you fly." },
    ],
  },

  "kashmir-tour-packages-from-uk": {
    faqs: [
      { q: "Can British citizens visit Gurez or Keran?", a: "No. Border areas such as Gurez, Keran and Machil are restricted for foreign nationals." },
      { q: "Will my UK travel insurance cover Kashmir?", a: "Some policies exclude areas where the FCDO advises against travel. Read the policy wording and ask the insurer before you book." },
    ],
  },

  "kashmir-trip-with-friends": {
    faqs: [
      { q: "What is the best vehicle for a group of eight friends in Kashmir?", a: "A Tempo Traveller fits eight with luggage comfortably; two Innova cabs also work and give more flexibility." },
      { q: "Is a houseboat good for a group of friends?", a: "Yes. Many houseboats have three to five bedrooms, so a group can take a whole boat with a shared sitting room." },
    ],
  },

  "kashmir-vs-ladakh": {
    faqs: [
      { q: "Is Ladakh more expensive than Kashmir?", a: "Usually, per day, for the same comfort level, because distances are longer and the season is shorter. Both have budget and luxury options." },
    ],
  },

  "kashmiri-kahwa-noon-chai-and-bakeries": {
    sections: [
      {
        h: "How to brew kahwa at home",
        p: [
          "Boil about two cups of water with two or three crushed green cardamom pods, a small piece of cinnamon and a pinch of saffron threads for a few minutes. Add one to two teaspoons of Kashmiri green tea leaves, simmer for a minute, then turn off the heat and let it steep. Strain into cups, sweeten with sugar or honey, and top with slivered almonds. Some families add a few rose petals or a clove.",
        ],
      },
    ],
    faqs: [
      { q: "Is kahwa caffeinated?", a: "Yes, lightly, since it is made from green tea. Caffeine-free versions use only spices and saffron." },
      { q: "What do Kashmiris eat with noon chai?", a: "Breads from the kandur, such as girda, lavasa, kulcha and bakarkhani, often with butter." },
    ],
  },

  "kashmiri-wazwan-guide": {
    sections: [
      {
        h: "Vegetarian dishes for mixed groups at a wazwan meal",
        p: [
          "Wazwan is meat-centred, but restaurants and caterers can add vegetarian dishes from the wider Kashmiri kitchen so that vegetarian guests can share the meal. Good choices are dum aloo, nadru yakhni (lotus stem in yoghurt gravy), paneer in a red or yellow gravy, haak and rajma. Ask in advance so the kitchen can prepare them separately.",
        ],
      },
    ],
    faqs: [
      { q: "Is wazwan spicy?", a: "It is aromatic rather than very hot, using Kashmiri chilli for colour, fennel, dried ginger and cardamom. Restaurants can adjust spice levels." },
      { q: "Can I order wazwan for delivery in Srinagar?", a: "Yes. Many restaurants deliver wazwan dishes and sets within Srinagar, often to hotels and houseboats." },
    ],
  },

  "katra-to-srinagar-taxi-or-train": {
    faqs: [
      { q: "How far is Srinagar railway station from Dal Lake?", a: "About 10 to 15 km, depending on your hotel; the station is at Nowgam on the city's southern side." },
      { q: "Can I break the taxi journey from Katra at Patnitop?", a: "Yes. Patnitop is on the way and makes a pleasant lunch or overnight stop." },
    ],
  },

  "luxury-hotels-in-kashmir": {
    faqs: [
      { q: "Which month is best for a luxury Kashmir trip?", a: "Spring and autumn for gardens and colour; winter if you want a snow escape, where good heating makes luxury hotels worthwhile." },
      { q: "Are there luxury houseboats in Srinagar?", a: "Yes. Deluxe houseboats on Dal and Nigeen have carved interiors, heated rooms and private shikaras." },
    ],
  },

  "solo-female-travel-in-kashmir": {
    faqs: [
      { q: "Is it safe for women to take a shikara alone?", a: "Generally yes during daylight with a registered shikara from an official ghat. Agree the route and time first." },
      { q: "Are there women guides in Kashmir?", a: "A few women work as guides and trek leaders; ask your agent or hotel if you would prefer one." },
    ],
  },

  "vaishno-devi-and-kashmir-trip-plan": {
    sections: [
      {
        h: "Vaishno Devi yatra options compared",
        list: [
          "On foot: about 12 to 13 km from Banganga to the Bhawan on a paved track, usually six to eight hours one way.",
          "Pony or palki: registered ponies and palkis from Banganga, with rates displayed by the Shrine Board.",
          "Battery car: runs between Adhkuwari and the Bhawan on the newer track, useful for elderly pilgrims.",
          "Helicopter: from Katra to Sanjichhat, about 2.5 km from the Bhawan, booked only on the Shrine Board's official site or app.",
          "Ropeway: links the Bhawan with Bhairon temple, saving a steep climb.",
        ],
      },
    ],
    faqs: [
      { q: "Which is better from Katra to Srinagar, train or road?", a: "The Vande Bharat train is faster and more comfortable, about three hours. A taxi is better with heavy luggage or for stops at Patnitop." },
      { q: "How many days should I keep for Vaishno Devi and Kashmir?", a: "Seven to nine days: two for Katra and the yatra, and five to seven for Kashmir." },
    ],
  },

  "vegetarian-and-jain-food-in-kashmir": {
    sections: [
      {
        h: "Vegetarian food on Gondola and sightseeing days",
        p: [
          "On long sightseeing days in Gulmarg, Pahalgam and Sonamarg, choices narrow to dhabas and tea stalls that serve rajma rice, dal, paratha, Maggi and omelettes. Carry vegetarian snacks, fruit and dry fruits, and ask your driver to stop at a known vegetarian restaurant on the way back to Srinagar.",
        ],
      },
      {
        h: "Vegetarian food on a houseboat or in a hotel package",
        p: [
          "Houseboats cook meals in their own kitchens, so tell the owner your diet the day before you arrive. Most can cook a simple vegetarian Kashmiri menu: dal, rajma, dum aloo, haak, rice and rotis. If you need a separate kitchen or utensils, ask whether that is possible; some families keep separate pots for vegetarian guests.",
          "Hotels in Srinagar, Pahalgam and Gulmarg that host many Indian tour groups usually have vegetarian buffets, and many can prepare Jain food with notice. Ask your agent to put your diet in the booking for every hotel, not just the first one.",
        ],
      },
    ],
    faqs: [
      { q: "Is it easy to be vegetarian in Kashmir?", a: "Yes. Every town has vegetarian options and many restaurants serving north Indian vegetarian food, though traditional wazwan is meat-based." },
    ],
  },

  "where-to-stay-in-gulmarg": {
    faqs: [
      { q: "Is Gulmarg or Tangmarg better for a budget stay?", a: "Tangmarg has more budget options, though you will need to drive up to Gulmarg each day." },
      { q: "Can I walk from my Gulmarg hotel to the Gondola?", a: "From hotels near the base station, yes; from hotels on the far side of the meadow, it is a longer walk or a short drive." },
    ],
  },

  "where-to-stay-in-pahalgam": {
    sections: [
      {
        h: "Why one or two nights in Pahalgam beat a day trip",
        p: [
          "Pahalgam is about two and a half to three hours from Srinagar, so a day trip leaves only a few hours for sightseeing after the drive. Staying one or two nights lets you visit Aru, Betaab and Chandanwari by union taxi in a full day, walk by the Lidder in the evening when the day visitors have left and start early the next morning. It also breaks the trip into calmer driving days.",
        ],
      },
    ],
    faqs: [
      { q: "Are Pahalgam hotels open in winter?", a: "Many are, with heating, though some smaller ones close. Confirm before booking." },
    ],
  },

  "where-to-stay-in-sonamarg": {
    sections: [
      {
        h: "Sonamarg stays by season",
        p: [
          "From May to October, most hotels, huts and camps are open, and rooms fill quickly in June and during the Amarnath Yatra, when Baltal near Sonamarg is a base camp. From November to April, fewer properties stay open, and those that do need reliable heating. Since the Z-Morh tunnel opened, Sonamarg has become a winter snow destination, but check that your hotel is open and ploughed before you book.",
        ],
      },
    ],
    faqs: [
      { q: "Is Sonamarg good for a night in winter?", a: "Yes, if your hotel is heated and open. The tunnel now keeps the road reachable most days, but heavy snow can still block it briefly." },
    ],
  },
};
