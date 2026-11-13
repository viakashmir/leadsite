// Depth pass 2, part 2 (2026-11-13): closing sections for Kashmir posts that
// were level with, or just behind, the matching tdiholidayventures.com pages.
// Each addition is a summary, checklist or decision aid that the post did not
// have yet. Appended by withAdditions in blog/index.ts. No typed fares or
// prices, no em dashes.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const KASHMIR_DEPTH_3_ADDITIONS: Record<string, Addition> = {
  "gulmarg-vs-pahalgam-vs-sonamarg": {
    sections: [
      {
        h: "Summary: the one-line verdict for each",
        list: [
          "Gulmarg: choose it for the Gondola, snow from December to March, skiing and a single high meadow with big views.",
          "Pahalgam: choose it for river scenery, three side valleys (Aru, Betaab, Chandanwari), easy walks and the widest range of stays.",
          "Sonamarg: choose it for glaciers, the Thajiwas walk, Zero Point beyond Zoji La and the start of the Ladakh road.",
          "Only one day to spare: Gulmarg as a day trip from Srinagar is the easiest to fit.",
          "Two nights to spare: Pahalgam, because its valleys need a full day and the drive is longer.",
        ],
      },
      {
        h: "How the three fit a 5, 6 or 7-day trip",
        p: [
          "With five days, most travellers base in Srinagar for three nights and Pahalgam for one or two, visiting Gulmarg and Sonamarg as day trips. With six days, add a night in Gulmarg so you can enjoy the meadow after the day crowds leave. With seven days, a night in Sonamarg lets you reach Thajiwas early and, in season, add Zero Point without rushing.",
          "Order matters less than direction: Sonamarg and Gulmarg are north and west of Srinagar, Pahalgam is south-east on the way to Jammu. If you leave Kashmir by road or by the Vande Bharat from Srinagar towards Katra, end the trip in Pahalgam or Srinagar.",
        ],
      },
    ],
    faqs: [
      { q: "Which is closest to Srinagar: Gulmarg, Pahalgam or Sonamarg?", a: "Gulmarg and Sonamarg are each about 50 to 80 km away, roughly two to two and a half hours; Pahalgam is about 90 to 95 km, around two and a half to three hours." },
    ],
  },

  "how-to-plan-a-kashmir-trip": {
    sections: [
      {
        h: "Your planning checklist in one place",
        list: [
          "Month chosen, with a back-up week if your dates can move.",
          "Number of nights decided, with nights split between Srinagar, Pahalgam and Gulmarg or Sonamarg.",
          "Flights or the Vande Bharat train from Katra booked, with arrival before mid-day.",
          "Stays booked with heating, hot water and power backup confirmed in writing for winter.",
          "Cab type agreed, with union taxi, pony and Gondola charges clear.",
          "Gondola tickets booked online once your Gulmarg date is fixed.",
          "Postpaid SIM or a plan to buy a local postpaid connection, since prepaid SIMs from other states do not work in Jammu and Kashmir.",
          "Travel insurance, ID copies and a buffer day before your flight home.",
        ],
      },
      {
        h: "How our quote process fits into your plan",
        p: [
          "Once you know your month, nights and budget, send one request through the form on this page. Up to three verified agents who work in Kashmir reply with their own itinerary and price, so you can compare stays, cab types and inclusions side by side instead of calling around. You choose one, or none, and pay the agent directly; there is no booking fee.",
        ],
      },
    ],
  },

  "kashmir-3-day-itinerary": {
    sections: [
      {
        h: "The 3-day plan at a glance",
        days: [
          "Srinagar: Mughal gardens (Nishat, Shalimar, Cheshma Shahi), Shankaracharya or Hazratbal, and a sunset shikara ride, with the night on a houseboat.",
          "Gulmarg day trip: Gondola Phase 1 and, weather permitting, Phase 2, St Mary's Church and the meadow, back to Srinagar for the night.",
          "Sonamarg day trip for Thajiwas glacier, or Pahalgam for Betaab and Aru, then fly home in the evening or stay one more night.",
        ],
      },
      {
        h: "Who a 3-day trip suits, and who should add days",
        p: [
          "Three days suits first-time visitors on a long weekend, business travellers adding leisure days, and pilgrims combining Kashmir with Vaishno Devi. It does not suit families with small children or older travellers, who find two long day trips back to back tiring; for them, four or five days with one night in Pahalgam or Gulmarg is far more comfortable.",
        ],
      },
    ],
    faqs: [
      { q: "Can I see Gulmarg, Pahalgam and Sonamarg in 3 days?", a: "Not comfortably. In three days choose Srinagar plus two of them, usually Gulmarg and either Sonamarg or Pahalgam." },
    ],
  },

  "kashmir-in-january": {
    sections: [
      {
        h: "January at a glance",
        list: [
          "Weather: the heart of Chillai Kalan, the coldest forty days from 21 December to 31 January; Srinagar days around 6 to 8°C, nights below freezing.",
          "Snow: most reliable in Gulmarg, Sonamarg and Pahalgam; Srinagar gets snow on some days but it does not always stay.",
          "Open: Gulmarg (Gondola weather permitting), Pahalgam town, Srinagar, Sonamarg via the Z-Morh tunnel. Closed: Gurez, Zoji La, the Mughal Road, Aru and Chandanwari beyond the snowline.",
          "Best for: skiers, snow lovers, couples on a snow honeymoon and photographers.",
          "Not ideal for: travellers with breathing or heart conditions, or anyone who cannot handle a delayed flight.",
        ],
      },
      {
        h: "A January day, hour by hour",
        p: [
          "Mornings start late: fog and frost often hang over Srinagar until 9 or 10 am, and roads to Gulmarg are cleared and sanded before traffic moves freely. Most day trips leave between 8 and 9 am, reach Gulmarg by late morning and head back by 3 pm, before the light fades and the hairpin bends from Tangmarg refreeze.",
          "Evenings are for staying warm: kahwa, a bukhari or heater, harissa for breakfast in the old city, and early dinners. Plan indoor time in the late afternoon rather than packing sightseeing into the dark.",
        ],
      },
      {
        h: "Your January packing list",
        list: [
          "Thermal base layers, a fleece and a down or heavy padded jacket.",
          "Waterproof snow boots with good grip, plus woollen socks.",
          "Waterproof gloves, a woollen cap and a scarf or neck gaiter.",
          "Sunglasses and sunscreen for snow glare in Gulmarg.",
          "Lip balm, moisturiser and any regular medicines.",
          "A power bank, as cold drains phone batteries quickly.",
        ],
      },
    ],
    faqs: [
      { q: "Is January better than February for snow in Kashmir?", a: "Both are reliable. January is colder; February often has a deeper accumulated base in Gulmarg and slightly longer days." },
    ],
  },

  "kashmir-tour-packages-from-bangladesh": {
    sections: [
      {
        h: "Before you book from Bangladesh: a short checklist",
        list: [
          "Valid Indian visa or e-Visa for your purpose of travel, with passport valid for at least six months.",
          "Flights from Dhaka or Chittagong to Delhi or Kolkata, and a domestic connection to Srinagar on the same or next day.",
          "Hotel or houseboat registration details ready, since foreign guests are registered by the property.",
          "Travel insurance that covers mountain areas.",
          "A plan for mobile data, since foreign SIMs and prepaid SIMs from other Indian states do not work in Jammu and Kashmir.",
          "An agent who has hosted international guests and can confirm which places foreigners may visit.",
        ],
      },
    ],
  },

  "kashmir-tour-packages-from-malaysia": {
    sections: [
      {
        h: "Before you book from Malaysia: a short checklist",
        list: [
          "Indian e-Visa approved before you fly, with a passport valid for at least six months.",
          "Flights from Kuala Lumpur to Delhi or another Indian hub, then a domestic flight to Srinagar.",
          "Travel insurance that covers mountain areas and winter activities.",
          "Halal meals and prayer time arrangements confirmed with your agent, which is straightforward in Kashmir.",
          "Warm clothing for the season, since Kashmir is far colder than Malaysia from October to April.",
          "A plan for mobile data, since foreign SIMs and prepaid SIMs from other states do not work in Jammu and Kashmir.",
        ],
      },
    ],
  },

  "kashmir-tour-packages-from-uk": {
    sections: [
      {
        h: "Before you book from the UK: a short checklist",
        list: [
          "Read the current FCDO travel advice for Jammu and Kashmir and check that your travel insurance remains valid for the areas you plan to visit.",
          "Apply for the Indian e-Visa well ahead and keep the approval printout with your passport.",
          "Book flights from London or Manchester to Delhi, Mumbai or Amritsar, then a domestic flight or the train to Srinagar.",
          "Ask your agent which places are open to foreign nationals; some border valleys such as Gurez are not.",
          "Plan for data: UK roaming and Indian prepaid SIMs from other states do not work in Jammu and Kashmir.",
          "Pack for a big temperature range between Srinagar days and Gulmarg nights.",
        ],
      },
    ],
  },

  "kashmir-trip-with-friends": {
    sections: [
      {
        h: "Group trip checklist",
        list: [
          "Agree the budget range and the trip style (adventure, food, relaxed) before anyone books.",
          "Pick a cab that fits people and luggage: an Innova or Crysta for up to six, a Tempo Traveller for larger groups.",
          "Ask for rooms with twin beds and an extra bed option, and check how many people each room allows.",
          "Book Gondola tickets for everyone together, using correct ID details for each person.",
          "Keep one shared expense app and one person responsible for paying the agent.",
          "Carry a postpaid SIM in the group, since prepaid SIMs from outside Jammu and Kashmir do not work there.",
        ],
      },
    ],
  },

  "kashmir-vs-ladakh": {
    sections: [
      {
        h: "Side-by-side summary",
        list: [
          "Altitude: Srinagar is about 1,585 m; Leh is about 3,500 m, high enough to need two days of rest on arrival.",
          "Landscape: Kashmir is green valleys, lakes, forests and meadows; Ladakh is high desert, bare mountains, blue lakes and monasteries.",
          "Best months: Kashmir is good almost all year, with snow in winter; Ladakh's main season is May to September.",
          "Getting there: both have direct flights; Kashmir also has the Vande Bharat train from Katra, and Ladakh has the Srinagar to Leh and Manali to Leh roads in summer.",
          "Permits: Kashmir's main tourist circuit needs no permit for Indians; many Ladakh areas such as Nubra, Pangong and Tso Moriri need an Inner Line Permit.",
          "Pace: Kashmir suits relaxed trips with families and seniors; Ladakh suits travellers comfortable with altitude and long drives.",
        ],
      },
      {
        h: "Altitude: the factor most people underestimate",
        p: [
          "Flying straight into Leh means landing at about 3,500 m, where the air has roughly a third less oxygen than at sea level. Doctors and the Ladakh administration advise resting completely for the first 24 to 48 hours, drinking water, avoiding alcohol and going higher only after acclimatising. Travellers with heart, lung or blood pressure conditions should talk to their doctor first.",
          "Kashmir's highest regular sightseeing point is Apharwat at about 3,980 m, but visitors spend only an hour or two there by Gondola before returning to Gulmarg at about 2,650 m. That is why Kashmir is the easier choice for older travellers, small children and first-time mountain visitors.",
          "If you want both, travel by road from Srinagar to Leh via Sonamarg, Zoji La and Kargil. The gradual climb over two days is the gentlest way to acclimatise, and it turns Kashmir and Ladakh into one connected trip.",
        ],
      },
      {
        h: "What each region costs more or less for",
        p: [
          "Ladakh trips usually cost more per day than Kashmir for the same comfort level, because distances are longer, the season is shorter, Inner Line Permits and environment fees add up, and cabs for Nubra, Pangong and Tso Moriri are full-day hires on mountain roads. Kashmir has a wider range of budget stays and more competition among cabs and houseboats. In both regions, peak months and holiday weeks raise prices; our package pages show current prices from agents rather than typed figures.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a permit for Kashmir or Ladakh?", a: "Indian tourists need no permit for Kashmir's main circuit. In Ladakh, Inner Line Permits are needed for Nubra, Pangong, Tso Moriri and other protected areas, and foreign nationals need Protected Area Permits." },
    ],
  },

  "kashmiri-kahwa-noon-chai-and-bakeries": {
    sections: [
      {
        h: "Kahwa or noon chai: which should you try first?",
        p: [
          "Start with kahwa if you prefer something light and fragrant: a clear green tea brewed with saffron, cardamom and cinnamon, sweetened with sugar or honey and topped with crushed almonds. It is served to guests in homes, hotels and houseboats, and suits any time of day.",
          "Try noon chai once you are ready for something unusual. It is a salted pink tea made by boiling green tea leaves with a pinch of baking soda, then adding milk and salt, which turns it rose pink. Locals drink it with breakfast breads, often several cups in the morning and again in the afternoon. Many visitors find the salt surprising at first and then come to like it with a crisp girda or kulcha.",
        ],
      },
      {
        h: "A morning tea and bread trail in Srinagar",
        days: [
          "Early morning: visit a neighbourhood kandur (bread maker) in the old city to see girda and lavasa coming out of the tandoor.",
          "Breakfast: noon chai with girda and butter, or kahwa with a sweet kulcha, at a local bakery or tea stall.",
          "Mid-morning: walk to a well-known bakery on the Boulevard or in Lal Chowk for bakarkhani, sheermal and Kashmiri cookies.",
          "Late morning: buy kahwa mix, saffron from a trusted shop and a small tin of local biscuits to take home.",
        ],
      },
      {
        h: "Tips for buying tea and saffron to take home",
        list: [
          "Buy saffron from government emporiums or established shops, and look for long, deep red threads with a strong aroma.",
          "Avoid saffron sold very cheaply on the street; it may be mixed with dyed fibres.",
          "Kahwa blends travel well; check the packing date and keep them in an airtight container.",
          "Bakery goods like kulcha and bakarkhani last a few days; buy them on your last morning.",
          "Ask the shop to seal tea and spices well if you are carrying them in checked luggage.",
        ],
      },
    ],
    faqs: [
      { q: "Why is noon chai pink?", a: "Boiling the green tea leaves with a pinch of baking soda for a long time changes the colour; adding milk then turns it pink." },
    ],
  },

  "kashmiri-wazwan-guide": {
    sections: [
      {
        h: "Wazwan for first-timers: what to order",
        p: [
          "If you are trying wazwan for the first time in a restaurant rather than at a wedding, order a small set or a trami for two to four people. It usually brings rice with a selection of the signature dishes. Start with seekh kebab and tabak maaz, the crisp fried ribs; move on to rista, meatballs in a red gravy; then rogan josh and yakhni, a mild yoghurt curry; and finish with gushtaba, the large meatballs in white yoghurt gravy that traditionally end the meal.",
          "Ask for the dishes one at a time if you want to taste each properly, and keep space for phirni or a cup of kahwa at the end. Most restaurants will adjust spice levels on request, although wazwan relies on aromatic spices like fennel, dried ginger and Kashmiri chilli more than on heat.",
        ],
      },
      {
        h: "Wazwan etiquette in a nutshell",
        list: [
          "Wash your hands before the meal; at traditional feasts, a tash-t-nari (basin and jug) is brought round.",
          "Eat with your right hand from your side of the shared trami.",
          "Do not start until the host or elders begin.",
          "Take only what you will eat from the shared dishes.",
          "Gushtaba is the last meat dish; it signals the end of the feast.",
          "Thank the waza (cook) or host if you can.",
        ],
      },
      {
        h: "How to book a wazwan meal on your trip",
        p: [
          "Restaurants in Srinagar serve wazwan dishes all year, and some offer full tramis with advance notice. Houseboats and some hotels can arrange a wazwan dinner if you ask a day or two ahead; this is popular with families and groups. Ask your agent to include it on your Srinagar night and to confirm the number of dishes, whether vegetarian dishes are available for mixed groups and whether it is served traditionally on the floor or at a table.",
        ],
      },
    ],
    faqs: [
      { q: "How many dishes are in a full wazwan?", a: "A traditional wedding wazwan can have up to thirty or more courses, though restaurant sets are much smaller." },
    ],
  },

  "katra-to-srinagar-taxi-or-train": {
    sections: [
      {
        h: "Summary: train or taxi in one minute",
        list: [
          "Choose the Vande Bharat if you want the fastest, most comfortable journey, about three hours, and can book a seat in advance.",
          "Choose a taxi if you have heavy luggage, elderly travellers who need door-to-door transfers, or want to stop at Patnitop or the Banihal side.",
          "In winter, the train is less affected by snow on the highway, but check for weather disruptions either way.",
          "Book train tickets on IRCTC as soon as your yatra date is fixed; seats sell out in peak months.",
        ],
      },
      {
        h: "After the Vande Bharat: transfers from Srinagar station",
        p: [
          "Srinagar railway station is at Nowgam, on the southern side of the city, about 10 to 15 km from Dal Lake depending on your hotel. Pre-book a pickup or ask your agent to send the cab you will use for sightseeing, so the driver can meet you outside the station with your luggage. Taxis and app cabs are available, but at busy arrival times a pre-arranged pickup saves waiting.",
        ],
      },
    ],
  },

  "luxury-hotels-in-kashmir": {
    sections: [
      {
        h: "Luxury hotel checklist before you pay",
        list: [
          "Room category and view in writing: lake view, garden view or mountain view.",
          "Heating type for winter (central heating, radiators or heaters) and power backup.",
          "Whether meals are included, and whether the meal plan covers dinner at the main restaurant.",
          "Airport transfer car and whether it is the hotel's own vehicle or an outside cab.",
          "Spa, pool or activity access, and which are seasonal.",
          "Cancellation terms for flights delayed by weather, which matters in winter.",
          "Honeymoon or celebration extras, and whether they are complimentary or charged.",
        ],
      },
      {
        h: "When luxury makes the biggest difference",
        p: [
          "Luxury pays off most in winter, when central heating, reliable power and good insulation turn a cold trip into a comfortable one; in Gulmarg, where a good resort near the Gondola saves time each morning; and on honeymoons, where the room and view become part of the experience. In summer, many mid-range stays are pleasant, so travellers on a budget can spend on one luxury night in Srinagar or Gulmarg rather than the whole trip.",
        ],
      },
    ],
  },

  "solo-female-travel-in-kashmir": {
    sections: [
      {
        h: "Solo female travel checklist",
        list: [
          "Book your first night in advance and share the address with someone at home.",
          "Arrange an airport pickup through your hotel or agent rather than taking a random taxi at night.",
          "Get a postpaid SIM or keep your home postpaid roaming on; prepaid SIMs from other states do not work in Jammu and Kashmir.",
          "Save local emergency numbers: 112 for emergencies and the tourist police help desks in Srinagar.",
          "Dress modestly in the old city and at shrines; carry a scarf for mosques.",
          "Agree routes and rates for ponies and taxis before starting.",
          "Share your live location when travelling between towns.",
        ],
      },
      {
        h: "Choosing a women-friendly stay",
        p: [
          "Read recent reviews from women travellers, ask whether the property has women staff, and choose places in well-lit, busy areas such as the Boulevard, Rajbagh or near the main market in Pahalgam. On a houseboat, choose one run by a family with good reviews, and check that your room door locks from inside and that the boat has a reliable way to reach the shore at night.",
        ],
      },
    ],
  },

  "vaishno-devi-and-kashmir-trip-plan": {
    sections: [
      {
        h: "The plan at a glance",
        days: [
          "Arrive in Jammu or Katra, register for the yatra and rest.",
          "Vaishno Devi yatra: walk, pony, battery car or helicopter, darshan, and Bhairon temple if you can.",
          "Rest morning in Katra, then Vande Bharat or cab to Srinagar; evening shikara ride.",
          "Srinagar sightseeing: Mughal gardens, Hazratbal, Shankaracharya temple.",
          "Day trip to Gulmarg for the Gondola.",
          "Drive to Pahalgam via the saffron fields of Pampore; Betaab and Aru valleys by union taxi.",
          "Sonamarg day trip or Kheer Bhawani temple at Tulmulla.",
          "Return to Srinagar and fly home.",
        ],
      },
      {
        h: "Temples and shrines along the way",
        p: [
          "Pilgrims often add temples in Kashmir to the trip. The Shankaracharya temple on a hill above Dal Lake is reached by a road and about 240 steps. The Kheer Bhawani temple at Tulmulla, near Ganderbal, sits in a sacred spring and is about an hour from Srinagar. The Martand Sun Temple ruins near Anantnag are on the way to Pahalgam, and Mamleshwar temple is in Pahalgam itself. On the Jammu side, the Raghunath temple in Jammu and the Shiv Khori cave near Reasi are popular additions.",
          "Dress modestly, remove shoes where required, and check whether photography is allowed inside each temple.",
        ],
      },
      {
        h: "Practical tips for this combined trip",
        list: [
          "Do the yatra first, while you are fresh, and keep the Kashmir days relaxed.",
          "Book the Vande Bharat from Katra to Srinagar early, especially in summer and during Navratri.",
          "Carry vegetarian snacks, since Katra is fully vegetarian and Kashmir menus are more mixed.",
          "Keep one buffer day; weather can delay helicopter flights at Katra and flights out of Srinagar.",
          "Pack light for the yatra day and leave the main luggage at your Katra hotel.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Kheer Bhawani from Srinagar?", a: "About 25 to 30 km, roughly an hour by road, at Tulmulla near Ganderbal." },
    ],
  },

  "vegetarian-and-jain-food-in-kashmir": {
    sections: [
      {
        h: "Vegetarian dishes to order: a quick list",
        list: [
          "Dum aloo: whole potatoes in a rich, spiced Kashmiri gravy.",
          "Nadru yakhni: lotus stem in yoghurt gravy with fennel and cardamom.",
          "Haak: collard greens cooked simply with mustard oil and Kashmiri chilli.",
          "Rajma: Kashmiri red kidney beans, often served with rice.",
          "Chaman: paneer in a turmeric or red gravy, called lyodur chaman or ruwangan chaman.",
          "Monji haak: kohlrabi cooked with its greens.",
          "Nadru monje: crisp fried lotus stem fritters, a favourite snack.",
          "Phirni: rice pudding set in clay bowls, often with saffron and nuts.",
        ],
      },
      {
        h: "Jain food: what to ask and where it is easiest",
        p: [
          "Strict Jain food, without onion, garlic, potatoes or other root vegetables, is easiest to find in Katra and Jammu, which have many vegetarian and Jain-friendly restaurants. In Srinagar, Pahalgam and Gulmarg, larger hotels and restaurants used to Indian tour groups can usually prepare Jain meals with notice. Ask your agent to inform each hotel in advance, and repeat the request at every meal.",
          "Useful phrases include 'no onion, no garlic', 'no root vegetables' and 'cooked in a separate pan'. Kashmiri Pandit cooking traditionally avoids onion and garlic, using asafoetida, fennel and dried ginger, so some Pandit-style dishes suit Jain diners with small changes, but potatoes and lotus stem are root vegetables and need to be avoided.",
        ],
      },
      {
        h: "Vegetarian travel checklist",
        list: [
          "Tell your agent your exact diet (vegetarian, eggless, Jain) before booking.",
          "Ask houseboats and hotels to confirm a separate vegetarian kitchen or utensils if this matters to you.",
          "Carry dry snacks for long sightseeing days in Sonamarg and Gulmarg.",
          "Look for pure vegetarian restaurants in Srinagar's Lal Chowk and Boulevard areas.",
          "Try kahwa, which is always vegetarian, after meals.",
        ],
      },
    ],
  },

  "where-to-stay-in-gulmarg": {
    sections: [
      {
        h: "Summary: where to stay in Gulmarg by trip type",
        list: [
          "Skiers: near the Gondola base, so you can walk to the lift with gear each morning.",
          "Honeymoon couples: a resort on the meadow edge with views and good heating.",
          "Families with children: a hotel on the main meadow close to the market and church, with easy walking.",
          "Budget travellers: Tangmarg or simple stays in Gulmarg, with day visits to the meadow.",
          "Day trippers: stay in Srinagar and visit Gulmarg for the day.",
        ],
      },
      {
        h: "What to confirm about heating in a Gulmarg hotel",
        p: [
          "Winter nights in Gulmarg fall well below freezing, so heating is the single most important thing to confirm. Ask whether the room has central heating or radiators, electric heaters, or a bukhari, whether heating runs through the night, and whether there is a generator for power cuts. Also ask about hot water hours and whether bathrooms are heated. A cheaper room without reliable heating is a false saving in January and February.",
        ],
      },
    ],
  },

  "where-to-stay-in-pahalgam": {
    sections: [
      {
        h: "Summary: where to stay in Pahalgam by trip type",
        list: [
          "Couples: a riverside hotel on the Lidder, for the sound of the river and the views.",
          "Families: near the main market, so meals, shops and the union taxi stand are close.",
          "Nature lovers and trekkers: on the Aru road or in Aru itself, closer to trailheads.",
          "Budget travellers: guest houses near the market or in the town's side lanes.",
          "Pilgrims for the Amarnath Yatra: near the Nunwan base camp or the Chandanwari road.",
        ],
      },
      {
        h: "Pahalgam hotel booking: questions to ask",
        list: [
          "Is the room river-facing or road-facing?",
          "How far is the union taxi stand, and is parking available for our cab?",
          "Is heating available in spring and autumn, not just winter?",
          "Are meals included, and is there a vegetarian kitchen?",
          "Is the hotel open in winter, and what does it offer then?",
        ],
      },
    ],
  },

  "where-to-stay-in-sonamarg": {
    sections: [
      {
        h: "Summary: when an overnight in Sonamarg makes sense",
        list: [
          "You want an early start for the Thajiwas glacier walk before the day trippers arrive.",
          "You plan to go on to Zero Point or Kargil the next morning.",
          "You are a trekker starting the Great Lakes route from Shitkadi or Nichnai.",
          "You are visiting in winter and want the snow without a long return drive.",
          "You want a quiet night by the Sindh river, away from Srinagar.",
        ],
      },
      {
        h: "Sonamarg booking: questions to ask",
        list: [
          "Is the property open in your month, and does it have heating?",
          "How far is it from the Thajiwas pony stand and the taxi union stand?",
          "Does it have power backup and hot water?",
          "Are meals included, since there are few restaurants outside the main market?",
          "Is the road to it ploughed in winter?",
        ],
      },
    ],
  },
};
