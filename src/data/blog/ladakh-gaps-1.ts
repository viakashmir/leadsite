import type { BlogPost, BlogSection } from "./types";

// Ladakh gap guides (2026-11-15): itineraries and places TDI has pages for
// and we did not. Altitudes and distances are rounded; road status and
// permit rules change, so the posts say to check them before travel.

const DATE = "2026-11-15";

const acclimatise: BlogSection = {
  h: "Altitude: the rule that shapes every Ladakh plan",
  p: [
    "Leh is at about 3,500 m, and every trip from it climbs higher: Khardung La and Chang La are both above 5,300 m, Pangong is about 4,250 m, Tso Moriri about 4,500 m and Hanle about 4,300 m. If you fly into Leh, spend the first full day resting and the second day on easy sightseeing in and around the town before sleeping anywhere higher. Drink plenty of water, avoid alcohol for the first days, and walk slowly. Headache, poor sleep and breathlessness are common on the first night; vomiting, confusion or breathlessness at rest are warning signs to go down and see a doctor.",
    "Talk to your doctor before the trip if you have heart or lung conditions, and ask about acetazolamide (Diamox) for prevention. Hotels and many cabs carry oxygen cylinders, and Leh has a hospital with experience of altitude sickness. Coming by road from Srinagar or Manali spreads the climb over days and helps acclimatisation, but the high passes and Sarchu still need care.",
  ],
};

const permits: BlogSection = {
  h: "Permits and fees",
  p: [
    "Indian citizens no longer need an Inner Line Permit for most of Ladakh, but visitors to protected areas such as Nubra, Pangong, Tso Moriri, Hanle and Turtuk are registered and pay an environment and wildlife fee, handled online through the Leh district administration's portal or by your agent or hotel. Carry the printout or screenshot and several photocopies of your ID, because check posts on the way ask for them.",
    "Foreign nationals need a Protected Area Permit for these areas, applied for through a registered Leh travel agent, usually for a group of two or more. Some areas close to the border may be closed to foreigners or open only on certain routes; rules change, so ask your agent for the current position before you fix the route.",
  ],
};

export const LADAKH_GAPS_1: BlogPost[] = [
  {
    slug: "ladakh-9-nights-10-days-itinerary",
    title: "Ladakh 9 Nights 10 Days Itinerary: Leh, Nubra, Turtuk, Pangong, Hanle and Tso Moriri",
    description: "A 9 nights 10 days Ladakh itinerary: two rest days in Leh, Nubra and Turtuk, Pangong, and Hanle or Tso Moriri, with drive times, permits, stays and seasons.",
    category: "Itineraries",
    destination: "ladakh",
    city: "leh",
    date: DATE,
    intro:
      "Ten days is the length that lets you see the best of Ladakh without the rush that spoils shorter trips. It gives you two days to acclimatise in Leh, two nights in Nubra so Turtuk gets its own day, a night at Pangong Lake, and two nights in the far east of Ladakh at Hanle and Tso Moriri, the quietest and highest stays of the trip, before you return to Leh. The plan below assumes you fly into Leh; it works from mid May to late September, when all the roads are usually open. A second version drops Hanle for a gentler route that suits families and anyone worried about the altitude.",
    sections: [
      {
        h: "The 10 day plan at a glance",
        days: [
          "Arrive Leh (3,500 m). Rest all day. Short evening walk only.",
          "Leh: Shanti Stupa, Leh Palace, the old town and Main Bazaar, at an easy pace.",
          "Sham valley day trip: Hall of Fame, Gurudwara Pathar Sahib, Magnetic Hill, the Indus and Zanskar confluence at Nimmu, Likir or Alchi monastery. Back to Leh.",
          "Leh to Nubra over Khardung La, about 5 to 6 hours. Diskit monastery and the Maitreya statue, Hunder sand dunes and Bactrian camels at sunset. Night in Hunder or Diskit.",
          "Day trip to Turtuk, about 90 km and 2.5 hours each way along the Shyok river. Balti village walk, apricot orchards, the old royal house. Night in Nubra.",
          "Nubra to Pangong via the Shyok road (when open), about 6 to 7 hours. Sunset on the lake. Night at Spangmik, Man or Merak.",
          "Pangong to Hanle via Chushul and the eastern road, about 6 to 7 hours. Hanle monastery and the observatory hill. Night in Hanle under a dark sky.",
          "Hanle to Tso Moriri via Nyoma and Mahe, about 5 to 6 hours. Korzok village and the lake shore. Night at Korzok.",
          "Tso Moriri to Leh, about 6 hours, with a stop at Tso Kar or the Puga hot springs area if time allows. Night in Leh.",
          "Fly out of Leh. Morning flights are the most reliable.",
        ],
      },
      {
        h: "Days 1 to 3: acclimatisation in and around Leh",
        p: [
          "The first two days are the most important of the trip, even if they feel slow. On day 1, check in, drink water and tea, sleep, and resist the urge to explore. On day 2, the sights of Leh town are perfect for light walking: Shanti Stupa on its hill for the view over the valley (go by car and walk down), Leh Palace above the old town, the lanes of Old Leh, and Main Bazaar for shopping and food.",
          "Day 3 heads west along the Indus to the Sham valley, which stays at or below Leh's altitude, so it is a safe acclimatisation day. The Hall of Fame museum tells the story of the army in Ladakh, Gurudwara Pathar Sahib is a short stop, Magnetic Hill is the famous 'car rolls uphill' illusion, and at Nimmu the green Indus meets the darker Zanskar. Likir or Alchi monastery, with Alchi's 11th century wall paintings, completes the day.",
        ],
      },
      {
        h: "Days 4 and 5: Nubra and Turtuk",
        p: [
          "The road to Nubra climbs from Leh to Khardung La, one of the highest motorable passes in the world at about 5,350 m. Do not stay at the top for more than 15 to 20 minutes. The road then drops to the Nubra valley at about 3,100 m, which feels much easier. Diskit monastery sits on a hill above the valley with a 32 m Maitreya Buddha statue facing the river. In the late afternoon, the sand dunes at Hunder and the two-humped Bactrian camels are the classic Nubra picture.",
          "On day 5, drive west along the Shyok river to Turtuk, a Balti village that opened to visitors in 2010 and was part of Pakistan-administered territory until 1971. It feels different from the rest of Ladakh: green barley fields, apricot trees, stone houses, a small museum in the old royal house and a friendly, Muslim Balti culture. Thang, a little further, is the last village before the Line of Control and has a viewpoint. Return to Nubra for the night.",
        ],
      },
      {
        h: "Day 6: Pangong Lake",
        p: [
          "From Nubra, the Shyok road via Agham reaches Pangong without going back to Leh. It is a rough but scenic road, and it is sometimes closed by water crossings or repairs; if it is shut, you drive back towards Leh and take the Chang La road instead, which adds hours. Ask your driver the evening before.",
          "Pangong Tso is about 134 km long, at about 4,250 m, and its colour changes from turquoise to deep blue with the light. Most camps and homestays are at Spangmik; Man and Merak, further along, are quieter. The night is cold even in summer, and the altitude is higher than Leh, so dress warmly and take it easy. Sunset and sunrise are the best times on the shore.",
        ],
      },
      {
        h: "Days 7 and 8: Hanle and Tso Moriri",
        p: [
          "The road from Pangong south through Chushul towards Hanle runs along the eastern edge of Ladakh, through wide valleys with herds of yaks and wild horses and almost no traffic. Hanle sits at about 4,300 m, with its 17th century monastery on a hill and the Indian Astronomical Observatory on a ridge above. It is part of the Hanle Dark Sky Reserve, and on a clear night the stars and the Milky Way are astonishing. Homestays in Hanle are simple and warm.",
          "On day 8, the route continues through Nyoma and Mahe to Tso Moriri, a high lake at about 4,500 m with the village of Korzok and its monastery on the shore. The lake is a protected wetland, home to bar-headed geese and black-necked cranes in summer. Accommodation is in homestays and camps at Korzok. It is the highest night of the trip, so this plan saves it for after you have been in Ladakh a week.",
        ],
      },
      {
        h: "Day 9 and 10: back to Leh and departure",
        p: [
          "The road back from Tso Moriri to Leh follows the Indus through Mahe, Chumathang (with hot springs by the river) and Upshi. If you have time, a detour to Tso Kar, a smaller salt lake, adds an hour or two. Back in Leh, the lower altitude feels easy. Use the evening for last shopping in Main Bazaar.",
          "Leh flights leave mostly in the morning, because afternoon winds can disrupt flights. Keep the last morning free and do not book a tight connection in Delhi.",
        ],
      },
      {
        h: "Version 2: a gentler 10 days without Hanle",
        days: [
          "Arrive Leh, rest.",
          "Leh town sights.",
          "Sham valley day trip.",
          "Leh to Nubra over Khardung La.",
          "Turtuk day trip, night in Nubra.",
          "Nubra to Pangong.",
          "Pangong to Leh via Chang La, with Thiksey and Shey on the way.",
          "Leh to Tso Moriri via Upshi and Chumathang.",
          "Tso Moriri to Leh.",
          "Fly out.",
        ],
      },
      acclimatise,
      permits,
      {
        h: "Best time to do this itinerary",
        list: [
          "Mid May to June: roads opening, snow on the passes, cold nights. Pangong may still be partly frozen in May.",
          "July and August: the warmest months and the busiest; occasional rain can affect roads near Nubra and Chang La.",
          "September: clear, cool and quieter. One of the best months.",
          "October: very cold nights, many camps at Pangong and Tso Moriri close. Possible with homestays.",
          "Winter: a different trip, with frozen lakes, very cold nights and many places closed; the Hanle and Tso Moriri roads are hard.",
        ],
      },
      {
        h: "Where to stay each night",
        list: [
          "Leh: hotels and guesthouses in Changspa, Fort Road, Main Bazaar or quieter Skara and Sankar.",
          "Nubra: camps and hotels in Hunder and Diskit; Turtuk has homestays if you want a night there instead.",
          "Pangong: camps and homestays at Spangmik, Man and Merak.",
          "Hanle: homestays in the village.",
          "Tso Moriri: homestays and camps at Korzok.",
        ],
      },
    ],
    faqs: [
      { q: "Is 10 days enough for Ladakh?", a: "Yes. Ten days covers Leh, Nubra, Turtuk, Pangong, and Hanle or Tso Moriri, with two days to acclimatise in Leh." },
      { q: "What is the best route for a 10 day Ladakh trip?", a: "Leh for acclimatisation, then Nubra and Turtuk, Pangong via the Shyok road, Hanle and Tso Moriri in the east, and back to Leh." },
      { q: "Do I need a permit for Nubra, Pangong and Hanle?", a: "Indian citizens register and pay an environment and wildlife fee through the Leh administration's portal. Foreigners need a Protected Area Permit through a registered agent." },
      { q: "Can I go from Nubra to Pangong directly?", a: "Yes, via the Shyok road through Agham, when it is open. If it is closed, you go back towards Leh and take the Chang La road." },
      { q: "Is Hanle worth adding to a Ladakh trip?", a: "Yes, for the dark skies, the observatory and the quiet. It needs an extra night or two and good acclimatisation." },
      { q: "When is the best time for a 10 day Ladakh trip?", a: "June to September, when all roads are usually open. September is clear and quieter." },
      { q: "Is the 10 day Ladakh trip suitable for families?", a: "Yes, in the gentler version without Hanle, with careful acclimatisation and a comfortable vehicle." },
      { q: "Can I do this itinerary by bike?", a: "Yes, with an experienced rider, a backup vehicle on rough stretches, and good acclimatisation. Rent bikes in Leh from established shops." },
    ],
  },
  {
    slug: "hanle-and-tso-moriri-itinerary",
    title: "Hanle and Tso Moriri Itinerary: Ladakh Dark Sky and High Lake Route, 7 to 8 Days",
    description: "How to plan a Ladakh trip with Hanle and Tso Moriri: a 7 to 8 day route from Leh, Pangong to Hanle via Chushul, stays, permits, stargazing tips and altitude care.",
    category: "Adventure",
    destination: "ladakh",
    city: "tso-moriri",
    date: DATE,
    intro:
      "Hanle and Tso Moriri are the two quietest highlights of Ladakh, in the Changthang plateau in the far east, and they fit together into one route. Hanle, at about 4,300 m, is home to the Indian Astronomical Observatory and the Hanle Dark Sky Reserve, with some of the darkest night skies in Asia. Tso Moriri, at about 4,500 m, is a long, still lake with the village of Korzok on its shore and nesting birds in summer. A 7 to 8 day trip from Leh can include both, usually combined with Pangong Lake, and sometimes with Nubra. This guide gives the route, the night-by-night plan, the stays and what to know about permits and altitude.",
    sections: [
      {
        h: "The 8 day route at a glance",
        days: [
          "Arrive Leh, rest and acclimatise.",
          "Leh town and the Indus valley monasteries (Shey, Thiksey), at an easy pace.",
          "Leh to Pangong via Chang La, about 5 to 6 hours. Night at Spangmik or Man.",
          "Pangong to Hanle via Merak, Chushul and the eastern road, about 6 to 7 hours. Night in Hanle.",
          "Hanle: monastery, observatory hill, villages of the valley; stargazing at night.",
          "Hanle to Tso Moriri via Nyoma and Mahe, about 5 to 6 hours. Night at Korzok.",
          "Tso Moriri to Leh via Chumathang, about 6 hours, or via Tso Kar. Night in Leh.",
          "Fly out of Leh.",
        ],
      },
      {
        h: "A 7 day version without Pangong",
        days: [
          "Arrive Leh, rest.",
          "Leh sights and monasteries.",
          "Leh to Tso Moriri via Upshi, Chumathang and Mahe. Night at Korzok.",
          "Tso Moriri to Hanle via Mahe and Nyoma. Night in Hanle.",
          "Hanle: monastery, observatory, stargazing. Second night in Hanle.",
          "Hanle to Leh via Nyoma and Chumathang.",
          "Fly out.",
        ],
      },
      {
        h: "Hanle: the observatory and the dark sky",
        p: [
          "Hanle is a small village in a wide valley, with a monastery from the 17th century on a hill above it. On a ridge nearby, the Indian Astronomical Observatory, run by the Indian Institute of Astrophysics, operates telescopes at about 4,500 m, chosen for the dry air and clear skies. In 2022, the area was declared the Hanle Dark Sky Reserve, with rules to keep light pollution low. Villagers have been trained as astronomy ambassadors and some homestays offer telescope sessions.",
          "Visits to the observatory are limited and controlled; ask locally what is open, and do not drive up to the domes without permission. The real experience is the night sky itself: on a clear moonless night the Milky Way is bright enough to cast shadows. Plan your trip close to a new moon if stargazing is your main reason for going.",
        ],
      },
      {
        h: "Tso Moriri and Korzok",
        p: [
          "Tso Moriri is about 26 km long, deep blue, surrounded by brown and snow-capped mountains. It is a protected wetland and a Ramsar site, with bar-headed geese, brown-headed gulls and black-necked cranes in summer, and the Changpa nomads graze their herds of goats and yaks nearby. Korzok, on the western shore, has a monastery and a handful of homestays and camps. There is no development on the rest of the shore, and swimming or boating is not allowed.",
          "Walk along the shore in the evening and at dawn, when the water is still. Respect the bird nesting areas and keep to paths. Nights are very cold, even in July.",
        ],
      },
      {
        h: "The Pangong to Hanle road",
        p: [
          "The road from Pangong south through Merak, Chushul and the eastern valleys to Hanle is one of the most remote drives open to visitors in Ladakh. It runs close to the Line of Actual Control, with army posts and check points; carry your permits and IDs, and follow instructions. The landscape is wide and empty, with herds of kiang (wild ass), marmots and nomad camps. There is very little fuel or food on the way; fill up in Leh or Pangong and carry snacks and water.",
          "Some stretches are unpaved or rough, and after rain or snowmelt, water crossings can be deep. A good driver who knows the route is essential. If the road is closed, the alternative is back through Leh to Hanle via Upshi and Nyoma.",
        ],
      },
      acclimatise,
      permits,
      {
        h: "Where to stay",
        list: [
          "Hanle: village homestays with simple rooms and home-cooked meals; some offer telescopes and night sessions.",
          "Tso Moriri: homestays and camps at Korzok; camps operate mainly from June to September.",
          "Pangong: camps and homestays at Spangmik, Man and Merak.",
          "Leh: hotels and guesthouses in Changspa, Fort Road or Skara.",
        ],
      },
      {
        h: "Stargazing tips",
        list: [
          "Travel close to a new moon; a full moon washes out the Milky Way.",
          "Carry a warm down jacket, gloves and a cap; nights can be below zero even in summer.",
          "Let your eyes adjust for 20 to 30 minutes without phone screens.",
          "Use a red torch and avoid car headlights near observation areas.",
          "A tripod and a camera with a wide lens and manual settings give the best photos.",
          "Ask your homestay about a telescope session with a trained local guide.",
        ],
      },
      {
        h: "Best time to go",
        p: [
          "June to September is the season for this route, with the roads open and the lakes free of ice. July and August are the warmest, with occasional clouds. September and early October give the clearest skies and very cold nights, ideal for stargazing. In winter, Hanle is reached by some determined travellers for snow and the clearest skies, but it is extremely cold and services are minimal; Tso Moriri freezes over.",
        ],
      },
    ],
    faqs: [
      { q: "Can I visit Hanle and Tso Moriri in one trip?", a: "Yes. They are linked by the road through Nyoma and Mahe, and a 7 to 8 day trip from Leh covers both, often with Pangong." },
      { q: "How far is Hanle from Leh?", a: "About 255 to 270 km via Upshi, Chumathang and Nyoma, roughly 7 to 8 hours by road." },
      { q: "Do I need a permit for Hanle?", a: "Yes. Indians register and pay the environment fee through the Leh administration. Foreigners need a Protected Area Permit, and access to some areas may be restricted." },
      { q: "Can I visit the Hanle observatory?", a: "Access is limited and controlled. Ask locally about any open visits, and do not approach the domes without permission." },
      { q: "Where do I stay in Hanle?", a: "In village homestays, which offer simple rooms, home-cooked meals and sometimes telescope sessions." },
      { q: "When is the best time for stargazing in Hanle?", a: "September and early October around the new moon, when the skies are clearest." },
      { q: "Is Tso Moriri higher than Pangong?", a: "Yes. Tso Moriri is about 4,500 m, Pangong about 4,250 m. Acclimatise in Leh first." },
      { q: "Can I drive from Pangong to Hanle?", a: "Yes, via Merak and Chushul, when the road is open. It is remote, with little fuel or food, and needs an experienced driver." },
    ],
  },
  {
    slug: "turtuk-ladakh-itinerary",
    title: "Turtuk Ladakh Itinerary: Nubra Valley and Turtuk in 6 to 7 Days from Leh",
    description: "A 6 to 7 day Ladakh plan with Turtuk: acclimatise in Leh, Khardung La to Nubra, a night in the Balti village, Pangong via the Shyok road, stays and permits.",
    category: "Adventure",
    destination: "ladakh",
    city: "nubra-valley",
    date: DATE,
    intro:
      "Turtuk is the last village in the Nubra valley before the Line of Control, a green Balti village of apricot orchards and stone houses on the Shyok river, about 205 km from Leh. A Ladakh trip built around Turtuk usually takes 6 to 7 days: two to acclimatise in Leh, a night in Nubra, a night in Turtuk itself (which is the best way to see it), and then either back to Leh or on to Pangong via the Shyok road. This guide gives the plan, explains why staying a night in Turtuk is worth it, and covers permits, stays and the best season.",
    sections: [
      {
        h: "The 7 day plan at a glance",
        days: [
          "Arrive Leh (3,500 m). Rest.",
          "Leh town sights at an easy pace: Shanti Stupa, Leh Palace, Old Leh.",
          "Leh to Nubra over Khardung La. Diskit monastery, Hunder dunes. Night in Hunder.",
          "Hunder to Turtuk, about 2.5 hours. Village walk, museum, apricot orchards, Thang viewpoint. Night in a Turtuk homestay.",
          "Turtuk back through Nubra, and on to Pangong via Agham and Shyok (when open). Night at Pangong.",
          "Pangong to Leh via Chang La, with Thiksey and Shey monasteries on the way.",
          "Fly out of Leh.",
        ],
      },
      {
        h: "A shorter 6 day version",
        days: [
          "Arrive Leh, rest.",
          "Leh sights.",
          "Leh to Nubra, night in Hunder.",
          "Turtuk day trip or night in Turtuk.",
          "Back to Leh over Khardung La.",
          "Fly out.",
        ],
      },
      {
        h: "What makes Turtuk different",
        p: [
          "Turtuk is part of Baltistan, a region that was divided after 1947. The village was under Pakistani control until 1971, when it came under India, and it opened to tourists only in 2010. Its people are Balti, speak Balti, and are mostly Noorbakhshi Muslims, with a culture closer to Skardu and the Karakoram than to Buddhist Ladakh. The village sits at about 2,900 m, lower than Leh, and feels green and warm in summer, with barley fields, apricots, walnuts and mulberries.",
          "Walk across the suspension bridge to the old village, see the wooden mosque, and visit the small museum in the house of the Yabgo family, the former rulers. In summer, apricots dry on the rooftops. A few kilometres on, Thang village is the last point visitors can reach, with a viewpoint over the valley towards the Line of Control.",
        ],
      },
      {
        h: "Why stay a night in Turtuk",
        p: [
          "Most visitors see Turtuk as a day trip from Hunder, about 2.5 hours each way, and spend only two or three hours in the village. That is enough for a quick walk but misses the evening and the early morning, when the village is quiet and the light on the Karakoram peaks is beautiful. Staying a night in a homestay or guesthouse lets you eat Balti food, walk the fields at sunrise and see the village without day-trippers.",
          "Turtuk homestays are simple, clean and family-run, with home-cooked meals. A few small guesthouses and camps offer more comfort. Book ahead in July and August.",
        ],
      },
      {
        h: "Nubra on the way",
        p: [
          "The road from Leh climbs to Khardung La at about 5,350 m before dropping into the Nubra valley. Diskit monastery, the oldest in Nubra, has a large Maitreya Buddha statue above the valley. Hunder has sand dunes and two-humped Bactrian camels, with short rides in the late afternoon. Panamik, on the Siachen side of the valley, has hot springs. Most visitors stay one or two nights in Hunder or Diskit.",
        ],
      },
      {
        h: "Turtuk to Pangong via the Shyok road",
        p: [
          "From Nubra, the road via Agham and Shyok village reaches Pangong without going back to Leh, saving a long day. The road is rough in places and can close because of water crossings or landslides. If it is open, it makes a natural loop: Leh, Nubra, Turtuk, Pangong, Leh. If it is closed, the loop becomes Leh, Nubra, Turtuk, Leh, then Pangong and back.",
        ],
      },
      acclimatise,
      permits,
      {
        h: "Best time to visit Turtuk",
        list: [
          "May and June: the valley turns green, apricot blossom in spring, roads opening.",
          "July and August: apricot harvest, warm days; the busiest months.",
          "September: harvest colours, clear skies and fewer visitors.",
          "October: cold and quiet; homestays may close.",
          "Winter: very cold; Khardung La can close and the village is quiet.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Turtuk from Leh?", a: "About 205 km, roughly 7 to 8 hours by road via Khardung La and Diskit." },
      { q: "Can I visit Turtuk as a day trip?", a: "From Hunder or Diskit in Nubra, yes, about 2.5 hours each way. From Leh, it is too far for a day trip." },
      { q: "Is it worth staying a night in Turtuk?", a: "Yes. A night in a homestay lets you see the village in the evening and morning, without the day-trip crowds." },
      { q: "Do I need a permit for Turtuk?", a: "Yes. Indians register and pay the environment fee through the Leh administration; foreigners need a Protected Area Permit." },
      { q: "What is Turtuk famous for?", a: "Its Balti culture, apricot orchards, the old royal house museum and its history as a village that came under India in 1971." },
    ],
  },
  {
    slug: "srinagar-leh-manali-road-trip-itinerary",
    title: "Srinagar to Leh to Manali Road Trip: 10 to 12 Day Ladakh Circuit Itinerary",
    description: "The Srinagar to Leh to Manali road trip: a 10 to 12 day plan via Zoji La, Kargil, Leh, Sarchu and the Atal Tunnel, the right direction and the season.",
    category: "Adventure",
    destination: "ladakh",
    city: "leh",
    date: DATE,
    intro:
      "The road trip from Srinagar to Leh and on to Manali crosses the whole of the western Himalaya: Kashmir's meadows, the Zoji La pass, the Kargil and Drass valleys, the monasteries of Ladakh, the high plains of the Changthang edge, the passes of Tanglang La and Baralacha La, and finally the green Lahaul and Kullu valleys through the Atal Tunnel. It is about 900 km of mountain roads, open roughly from June to September. The best direction is Srinagar to Leh to Manali, because the climb from Srinagar is gradual and you reach Leh already partly acclimatised. A comfortable version takes 10 to 12 days. This guide lays out the days, the stops and what to plan for.",
    sections: [
      {
        h: "The 11 day plan at a glance",
        days: [
          "Arrive Srinagar. Dal Lake, Mughal gardens, a houseboat night.",
          "Srinagar to Sonamarg, about 80 km. Thajiwas glacier. Night in Sonamarg, a good first step in altitude.",
          "Sonamarg to Kargil via Zoji La and Drass, about 125 km. Kargil War Memorial at Drass. Night in Kargil.",
          "Kargil to Leh via Mulbekh, Namik La, Fotu La and Lamayuru, about 220 km. Night in Leh.",
          "Leh: rest and easy sightseeing.",
          "Leh: Sham valley or Indus valley monasteries.",
          "Leh to Nubra over Khardung La. Night in Hunder.",
          "Nubra to Pangong via the Shyok road, or back to Leh. Night at Pangong.",
          "Pangong to Leh via Chang La. Night in Leh.",
          "Leh to Jispa or Sarchu via Tanglang La, More plains and Baralacha La. Night in Jispa (lower) or Sarchu (higher).",
          "Jispa to Manali via the Atal Tunnel. Night in Manali.",
        ],
      },
      {
        h: "Why go from Srinagar to Manali, not the other way",
        p: [
          "The Srinagar side climbs slowly: Srinagar at about 1,600 m, Sonamarg about 2,800 m, Kargil about 2,700 m, and Leh about 3,500 m, with only Zoji La (about 3,500 m) and Fotu La (about 4,100 m) as passes on the way. By the time you reach Leh, you have spent three nights gaining height gradually. The Manali side is much steeper: from Manali at about 2,000 m, the road climbs over Baralacha La (about 4,900 m) and Tanglang La (about 5,300 m), and most travellers sleep at Sarchu (about 4,300 m) on the way. Going up that side means a big jump in altitude on the first nights.",
          "Leaving Ladakh via Manali, you are fully acclimatised, so the high passes and a night at Sarchu or Jispa are much easier.",
        ],
      },
      {
        h: "Srinagar to Kargil: Zoji La and Drass",
        p: [
          "From Sonamarg, the road climbs to Zoji La, the pass between Kashmir and Ladakh, on a narrow, often unpaved road with steep drops. It is the toughest stretch of the Srinagar side, and it can be slow with army convoys and trucks. A tunnel under Zoji La is being built; until it opens, the pass road is what you drive. On the other side, Drass is one of the coldest inhabited places in India, and the Kargil War Memorial is a moving stop.",
          "Kargil is a town on the Suru river, with simple hotels. It is also the junction for the Suru valley and Zanskar if you want to extend the trip.",
        ],
      },
      {
        h: "Kargil to Leh: monasteries and moonscapes",
        p: [
          "The road from Kargil to Leh is one of the most beautiful in Ladakh. Mulbekh has a 9 m Maitreya Buddha carved into the rock. Namik La and Fotu La are the two passes. Lamayuru monastery sits above the eroded 'moonland' landscape. After Khalsi, the road follows the Indus past Alchi and Likir, with the Magnetic Hill and the confluence of the Indus and Zanskar at Nimmu before Leh.",
        ],
      },
      {
        h: "Leh to Manali: the high road",
        p: [
          "The Leh to Manali highway is about 430 km and crosses some of the highest passes in the world. From Leh, the road follows the Indus to Upshi and climbs to Tanglang La, then crosses the More plains, a high flat plateau, to Pang. The Lachulung La and Nakee La passes follow, then the 21 hairpin Gata Loops down to Sarchu, on the border between Ladakh and Himachal. Baralacha La leads into Lahaul, and the road drops to Jispa and Keylong.",
          "Since the Atal Tunnel opened in 2020, the last stretch from Lahaul to Manali goes under the Rohtang Pass in a few minutes instead of over it. Many travellers split the Leh to Manali drive into two days, with a night at Sarchu or Jispa. Jispa, at about 3,200 m, is lower and more comfortable than Sarchu.",
        ],
      },
      {
        h: "Season and road status",
        p: [
          "The Srinagar to Leh road via Zoji La usually opens between April and May and closes in November or December. The Manali to Leh road via Baralacha La and Tanglang La usually opens in late May or June and closes in October. Both dates depend on snow. The best window for the full circuit is from mid June to mid September. July and August bring occasional rain on the Manali side and landslides in Lahaul; September is clear and quieter.",
          "Check road status a day ahead with your driver or local authorities, and keep one buffer day in the plan for closures.",
        ],
      },
      acclimatise,
      permits,
      {
        h: "Cab, self-drive or bike?",
        list: [
          "Cab: the easiest and safest. Kashmir and Ladakh have union rules, so you may change vehicles at Leh; the Ladakh taxi union usually handles travel within Ladakh, and Himachal cabs pick up for Manali.",
          "Self-drive: possible with an experienced mountain driver and a 4x4 or a high-clearance car. Some sections, like Zoji La and parts of the Manali road, are rough.",
          "Bike: the classic Ladakh road trip, with bikes rented in Srinagar, Leh or Manali. Rental bikes from outside Ladakh may face restrictions on local roads; ask before you rent.",
        ],
      },
      {
        h: "Where to stay along the route",
        list: [
          "Srinagar: houseboats on Dal or Nigeen Lake, hotels on the Boulevard.",
          "Sonamarg: hotels and camps near the market.",
          "Kargil: hotels in the town.",
          "Leh: hotels and guesthouses in Changspa, Fort Road, Skara.",
          "Nubra and Pangong: camps and homestays.",
          "Sarchu: seasonal tented camps. Jispa: hotels and camps, lower and warmer.",
          "Manali: hotels in Old Manali, the Mall area or along the river.",
        ],
      },
    ],
    faqs: [
      { q: "How many days do I need for the Srinagar to Leh to Manali trip?", a: "Ten to twelve days for a comfortable trip, including two days to acclimatise in Leh and a night in Sonamarg and Kargil." },
      { q: "Is it better to go from Srinagar to Manali or Manali to Srinagar?", a: "Srinagar to Manali. The climb from Srinagar is gradual, so you reach Leh partly acclimatised, and the high passes near Manali are easier at the end." },
      { q: "When is the Srinagar Leh Manali road open?", a: "Usually from mid June to mid September for the full circuit. Zoji La opens earlier and the Manali road later, depending on snow." },
      { q: "How long is the Srinagar to Leh to Manali road trip?", a: "About 900 km: around 420 km from Srinagar to Leh and around 430 km from Leh to Manali." },
      { q: "Should I stay in Sarchu or Jispa?", a: "Jispa if you can. It is lower at about 3,200 m, warmer and has better hotels. Sarchu is at about 4,300 m, with seasonal camps." },
      { q: "Can I do this trip in a Kashmir taxi?", a: "Partly. Within Ladakh, local taxi union rules usually apply, so many trips change vehicle in Leh. Ask your agent how the cab will work across the route." },
      { q: "Is the Srinagar Leh Manali road safe?", a: "It is a well-used route in season, with army and BRO maintenance. Narrow stretches, altitude and weather are the risks; use an experienced driver and keep a buffer day." },
    ],
  },
  {
    slug: "sarchu-travel-guide",
    title: "Sarchu Travel Guide: Leh-Manali Highway Camps, Altitude and Whether to Stay",
    description: "Sarchu on the Leh-Manali highway: why travellers sleep there, what the tented camps are like, altitude risks, the season, and when Jispa is the better stop.",
    category: "Adventure",
    destination: "ladakh",
    date: DATE,
    intro:
      "Sarchu is a high plain on the Leh to Manali highway, at about 4,300 m, on the border between Himachal Pradesh and Ladakh. It is not a village but a stretch of tented camps that open only in summer, from about June to September, and it exists as a stop because the drive between Leh and Manali is too long for one day. Many travellers sleep a night there, often their highest night of the trip. Sarchu is wide, beautiful and very cold at night, and the altitude is its main challenge. This guide explains what it is like, who should stay and who should choose Jispa, about 3,200 m, instead.",
    sections: [
      {
        h: "Where Sarchu is",
        p: [
          "Sarchu lies about 220 km from Manali and about 250 km from Leh, roughly in the middle of the highway. Coming from Manali, you cross the Atal Tunnel, pass Keylong and Jispa in Lahaul, and climb over Baralacha La (about 4,900 m) to reach the Sarchu plains. Coming from Leh, you cross Tanglang La (about 5,300 m), the More plains and Pang, then Lachulung La and Nakee La, and descend the 21 hairpin bends of the Gata Loops to Sarchu.",
          "The Tsarap river runs along the plain, with eroded cliffs and mountains around it. There is a police and army check post and the camps; there is no real village, no hospital and only limited mobile signal.",
        ],
      },
      {
        h: "Why people sleep at Sarchu",
        p: [
          "The Leh to Manali drive is about 430 km over very high passes and rough stretches, and takes 12 to 15 hours or more if you do it in one go. Splitting it into two days is safer and more pleasant. Sarchu is the natural middle point, which is why the camps are there. Bikers and road trippers often choose it for the experience of a night in the high plains.",
          "The other choice is to stop at Jispa or Keylong on the Lahaul side, about 85 to 100 km closer to Manali and more than 1,000 m lower. That makes the Leh to Jispa day long, but the night much easier.",
        ],
      },
      {
        h: "What a night in a Sarchu camp is like",
        p: [
          "Sarchu camps are canvas tents with beds, blankets, and in most camps attached toilets with limited hot water. Meals are simple, served in a dining tent: dal, rice, roti, a vegetable and tea. Electricity usually comes from a generator for a few hours in the evening. The night is cold, often near or below zero even in July, and wind picks up in the afternoon. The skies are clear and the stars are spectacular.",
          "Comfort is basic, and some travellers sleep badly because of the altitude. Carry a warm sleeping layer, a down jacket, a cap and gloves, and your own water bottle.",
        ],
      },
      {
        h: "The altitude: who should not stay at Sarchu",
        p: [
          "Sarchu is the most common place for altitude sickness on the Leh to Manali road, because many travellers reach it on their first or second day from Manali, having climbed from about 2,000 m to 4,300 m in a day. Headache, nausea, poor sleep and breathlessness are common. In severe cases, people need oxygen and must go down, which at night is difficult because the nearest lower place is hours away.",
          "If you are coming from Manali without acclimatising, choose Jispa. If you have heart or lung conditions, are elderly, travelling with small children, or have had altitude sickness before, avoid sleeping at Sarchu. If you are coming from Leh after a week in Ladakh, you are acclimatised, and Sarchu is much easier.",
        ],
      },
      {
        h: "When to go",
        list: [
          "June: the road opens, snow walls near Baralacha La, very cold nights. Camps open as the road allows.",
          "July and August: the main season; warmer days, still cold nights, occasional rain and landslides on the Lahaul side.",
          "September: clear skies, cold nights, quieter; camps begin closing by the end of the month.",
          "October to May: the road is closed or unreliable and the camps are shut.",
        ],
      },
      {
        h: "Driving tips for the Sarchu stretch",
        list: [
          "Leave early from Leh or Manali so you reach Sarchu before dark; the Gata Loops and Baralacha La are best in daylight.",
          "Fill fuel in Leh, Karu, Tandi or Keylong; there is no regular fuel pump between Tandi and Karu.",
          "Carry water, snacks and warm layers in the car.",
          "Watch for water crossings near Baralacha La and Pang in the afternoon, when snowmelt is highest.",
          "Carry ID and permits for check posts.",
        ],
      },
      {
        h: "Sarchu or Jispa: a quick comparison",
        list: [
          "Altitude: Sarchu about 4,300 m, Jispa about 3,200 m.",
          "Stays: Sarchu has seasonal tented camps; Jispa has hotels, guesthouses and camps.",
          "Comfort: Jispa is warmer, with better power and water.",
          "Scenery: Sarchu has high open plains and stars; Jispa has a green valley by the Bhaga river.",
          "Best for: Sarchu suits acclimatised travellers coming from Leh; Jispa suits those coming up from Manali.",
        ],
      },
    ],
    faqs: [
      { q: "Where is Sarchu?", a: "On the Leh to Manali highway, about 220 km from Manali and 250 km from Leh, on the border of Himachal Pradesh and Ladakh." },
      { q: "What is the altitude of Sarchu?", a: "About 4,300 m, higher than Leh. It is the highest night stop on the Leh to Manali highway." },
      { q: "Is it safe to stay at Sarchu?", a: "For acclimatised travellers, yes. Coming straight up from Manali, the altitude can cause sickness; Jispa is the safer stop then." },
      { q: "When are the Sarchu camps open?", a: "Roughly from June to September, when the Leh to Manali road is open." },
      { q: "Is Sarchu in Ladakh or Himachal?", a: "It lies on the border; the camps and check post sit where the two regions meet on the highway." },
      { q: "What are the alternatives to Sarchu?", a: "Jispa or Keylong in Lahaul, lower and more comfortable, at the cost of a longer drive from Leh." },
    ],
  },
  {
    slug: "rangdum-travel-guide",
    title: "Rangdum Travel Guide: Suru Valley Monastery, Pensi La and the Road to Zanskar",
    description: "Rangdum in the Suru valley: how to reach it from Kargil, Rangdum monastery, Nun Kun views, Pensi La and Drang Drung glacier, where to stay, season and altitude care.",
    category: "Adventure",
    destination: "ladakh",
    city: "kargil",
    date: DATE,
    intro:
      "Rangdum is a remote high valley in the Suru region of Ladakh, at about 3,650 m, roughly halfway between Kargil and Padum on the road to Zanskar. It is known for its 18th century monastery on a small hill in the middle of a wide valley, for the views of the Nun and Kun peaks on the way, and as the last stop before Pensi La and the Drang Drung glacier. There is no town, only a scattering of villages, guesthouses and camps. Most travellers see Rangdum on the way to Zanskar, but it is also a destination in its own right for those who want space and silence. This guide covers how to get there, what to see, stays and when to go.",
    sections: [
      {
        h: "How to get to Rangdum",
        p: [
          "Rangdum lies about 130 km from Kargil, along the Suru river through Sankoo, Panikhar and Parkachik. The drive takes about 5 to 6 hours. The road is paved in parts and rough in others, especially after Parkachik. There is no public transport worth relying on; most travellers come by private taxi from Kargil, by self-drive, or by bike.",
          "From Leh, you first drive to Kargil (about 220 km), so most trips spend a night in Kargil. From Srinagar, Kargil is about 205 km via Sonamarg and Zoji La. Beyond Rangdum, Pensi La leads to Zanskar and Padum, about 100 km further.",
        ],
      },
      {
        h: "What to see in and around Rangdum",
        list: [
          "Rangdum monastery: a Gelugpa monastery from the 18th century, built on a hillock in the valley, with views in every direction.",
          "Nun and Kun: the two highest peaks of the Zanskar range, visible from Panikhar and Parkachik on the way.",
          "Parkachik glacier: a glacier that comes down close to the road near Parkachik.",
          "The valley itself: wide, open meadows with streams, grazing animals and colourful mountains.",
          "Pensi La: the pass to Zanskar, about 25 km beyond Rangdum, at about 4,400 m.",
          "Drang Drung glacier: one of the largest glaciers in Ladakh, visible from Pensi La.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Accommodation in Rangdum is limited: a few guesthouses, homestays and seasonal camps. Facilities are basic, with limited electricity and no reliable mobile signal. Book ahead in July and August if you can, though many travellers find rooms on arrival outside peak weeks. For more comfort, stay in Kargil and do Rangdum as a long day, or continue to Padum, which has more guesthouses.",
        ],
      },
      {
        h: "When to go",
        list: [
          "June: the road opens as snow clears; cold nights.",
          "July and August: the best months, with green meadows and open roads.",
          "September: clear, quieter, colder.",
          "October onwards: very cold, with snow possible; the road to Zanskar can close.",
          "Winter: the Suru road beyond Panikhar and Pensi La are usually closed.",
        ],
      },
      {
        h: "Altitude and practical tips",
        p: [
          "At about 3,650 m, Rangdum is a little higher than Leh, and Pensi La is about 4,400 m. If you are coming from Srinagar via Kargil, you are partly acclimatised; still, take it slowly on the first evening. Carry warm clothes, a torch, snacks and water. Fuel up in Kargil; there are no fuel pumps in the Suru valley beyond Sankoo.",
          "Mobile signal is patchy or absent. Inform someone of your plans, and carry cash; there are no ATMs.",
        ],
      },
      {
        h: "Adding Rangdum to a Ladakh trip",
        p: [
          "The simplest plan is a loop: Srinagar to Kargil, Kargil to Rangdum, Rangdum to Padum, two nights in Zanskar, and back to Kargil or on to Leh via the new Zanskar to Nimmu road where open. A shorter option is Kargil to Rangdum and back. For Ladakh trips that start in Leh, add two to three days for Kargil and Rangdum.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Rangdum from Kargil?", a: "About 130 km, roughly 5 to 6 hours by road through the Suru valley." },
      { q: "What is the altitude of Rangdum?", a: "About 3,650 m, a little higher than Leh." },
      { q: "Is there accommodation in Rangdum?", a: "Yes, a few basic guesthouses, homestays and seasonal camps." },
      { q: "When is the best time to visit Rangdum?", a: "July and August, when the road is open and the valley is green. September is quieter and colder." },
      { q: "Is Rangdum on the way to Zanskar?", a: "Yes. Rangdum is the last stop before Pensi La and the road to Padum, the main town of Zanskar." },
      { q: "Is there mobile network in Rangdum?", a: "Signal is patchy or absent. Plan to be offline and carry cash." },
      { q: "Can I see the Drang Drung glacier from Rangdum?", a: "From Pensi La, about 25 km beyond Rangdum. It is one of the largest glaciers in Ladakh." },
    ],
  },
  {
    slug: "where-to-stay-in-leh",
    title: "Where to Stay in Leh: Best Areas, Hotel Types and What to Check Before Booking",
    description: "Where to stay in Leh: Changspa, Fort Road, Main Bazaar, Skara and Old Leh compared, hotel and guesthouse types, heating and oxygen, winter stays and how to book.",
    category: "Planning",
    destination: "ladakh",
    city: "leh",
    date: DATE,
    intro:
      "The best area to stay in Leh depends on what you want from your first, most important nights in Ladakh. Changspa and Fort Road are close to the cafes, shops and Main Bazaar and suit first-time visitors. Skara, Sankar and the Sheynam area are quieter and greener, a little further out. Old Leh has heritage homestays and character. Because you spend your first two nights in Leh resting and acclimatising, a comfortable, quiet room with good heating and hot water matters more than being close to the action. This guide compares the areas, explains hotel and guesthouse types, and lists what to check before you book.",
    sections: [
      {
        h: "Leh's main areas compared",
        list: [
          "Changspa: the busy area below Shanti Stupa, with cafes, guesthouses, hotels and travel agents. Lively and convenient.",
          "Fort Road and Main Bazaar: the central area, close to shops, restaurants and taxis. Can be noisy.",
          "Old Leh: the lanes below Leh Palace, with old houses and a few heritage homestays. Atmospheric, with steep walks.",
          "Skara and Sankar: quieter residential areas with gardens and views, a few minutes by car from the centre.",
          "Sheynam and the airport road: larger hotels, quieter, closer to the airport.",
          "Choglamsar and the Indus side: further out, calmer, with some resorts.",
        ],
      },
      {
        h: "Hotels, guesthouses and homestays",
        p: [
          "Leh has a wide range of stays: family guesthouses with a few rooms and a garden, mid-range hotels with heating and attached bathrooms, boutique hotels built in Ladakhi style, and a few larger luxury hotels and resorts. Guesthouses are often run by Ladakhi families and are warm and friendly, with home-cooked breakfasts. Mid-range and upper hotels have better heating, reliable hot water and room service.",
          "For the first nights, choose a stay with easy access (no long staircases or steep lanes), good heating, reliable hot water and a quiet room. You will spend a lot of time resting.",
        ],
      },
      {
        h: "Your first nights: rest and acclimatisation",
        p: [
          "Leh is at about 3,500 m. Book at least two nights at the start of the trip, and plan to rest on the first day. Ask the hotel whether they have oxygen cylinders on site (many do), whether a doctor can be called, and how far they are from the main hospital. A room on the ground floor or with a lift helps if anyone in the group is older or unwell.",
          "Hotels that arrange the environment fee and permits, local taxis and early check-in for morning flights save a lot of effort on arrival.",
        ],
      },
      {
        h: "Heating, water and power",
        p: [
          "Leh's nights are cold, even in summer, and freezing from October onwards. Ask about the type of heating: central heating, electric heaters or a bukhari (wood stove). Ask whether hot water is from solar panels (which may be lukewarm in the early morning) or geysers. Leh has occasional power cuts; most hotels have generator backup, but ask whether it covers heating.",
        ],
      },
      {
        h: "Staying in Leh in winter",
        p: [
          "From November to March, many hotels and guesthouses in Leh close for the season. Those that stay open have heating, and some run winter packages for the Chadar trek, snow leopard tours and the frozen Pangong. Water pipes can freeze, so ask how the hotel handles hot water in deep winter. Book in advance and confirm the hotel is open on your dates.",
        ],
      },
      {
        h: "What to check before you book",
        list: [
          "Exact area and how far it is from Main Bazaar on foot.",
          "Heating type and whether it is included or charged extra.",
          "Hot water source and timing.",
          "Generator backup for power cuts.",
          "Oxygen on site and access to a doctor.",
          "Stairs, steep lanes and parking.",
          "Help with permits, local taxis and airport transfers.",
          "Meal plan: breakfast only or breakfast and dinner.",
        ],
      },
      {
        h: "Leh as a base for day trips",
        p: [
          "Most Ladakh trips come back to Leh more than once: after Nubra, after Pangong, before the flight out. Staying in the same hotel each time lets you leave luggage there and travel light to the camps. Ask whether the hotel stores luggage and whether it gives a lower rate for split stays.",
        ],
      },
    ],
    faqs: [
      { q: "Which is the best area to stay in Leh?", a: "Changspa and Fort Road for convenience and cafes, Skara and Sankar for quiet, and Old Leh for heritage homestays." },
      { q: "How many nights should I stay in Leh?", a: "At least two at the start, for acclimatisation, plus nights between trips to Nubra, Pangong and Tso Moriri." },
      { q: "Do Leh hotels have oxygen?", a: "Many mid-range and upper hotels keep oxygen cylinders. Ask before booking, especially with older travellers or children." },
      { q: "Are Leh hotels open in winter?", a: "Some are. Many close from November to March. Confirm your hotel is open and heated for winter dates." },
      { q: "Is a guesthouse or hotel better in Leh?", a: "Guesthouses are warm and personal; hotels have better heating and services. For the first nights, choose comfort and heating." },
      { q: "Can my Leh hotel arrange permits and taxis?", a: "Most hotels and guesthouses help with the environment fee, permits and local taxis through Leh agents." },
    ],
  },
  {
    slug: "where-to-stay-at-pangong-lake",
    title: "Where to Stay at Pangong Lake: Spangmik, Lukung, Man and Merak Camps and Homestays",
    description: "Where to stay at Pangong Lake: Lukung, Spangmik, Man and Merak compared, camps vs homestays, cold nights, power, meals and why not to sleep there first.",
    category: "Planning",
    destination: "ladakh",
    city: "pangong-lake",
    date: DATE,
    intro:
      "Pangong Lake has no town, only a string of small villages along the western shore, and where you stay changes your night a lot. Lukung is the first point you reach from Leh, with camps and the busiest stretch of shore. Spangmik, a few kilometres on, has the most camps, cottages and homestays and is where most travellers sleep. Man and Merak, further south, are quieter, with homestays and a few camps, and are on the road to Chushul and Hanle. All of them are at about 4,250 m, higher than Leh, and cold at night even in summer. This guide compares the villages and stay types and tells you what to check before you book.",
    sections: [
      {
        h: "The villages along the shore",
        list: [
          "Lukung: the first village after the Chang La road reaches the lake, with camps and the most day visitors.",
          "Spangmik: about 7 km further, the main stay area, with camps, cottages and homestays along the shore.",
          "Man: about 10 km beyond Spangmik, quieter, with homestays and some camps.",
          "Merak: further still, a village with homestays and a few camps, on the road towards Chushul.",
        ],
      },
      {
        h: "Camps, cottages and homestays",
        p: [
          "Camps are the most common stay: tents on platforms with beds and attached toilets, from basic to deluxe 'Swiss tents' with wooden floors. Cottages and prefab rooms offer more warmth and solid walls. Homestays, mainly in Man and Merak, are rooms in village houses, with home-cooked meals and a family atmosphere.",
          "Camps are closest to the shore and have the classic view. Cottages are warmer. Homestays are quieter and support local families. Choose by comfort and how cold you mind being.",
        ],
      },
      {
        h: "Cold, power and water",
        p: [
          "Nights at Pangong are cold in every month, often near or below zero even in July, and very cold in May, September and October. Most camps do not have room heating; you get thick blankets and sometimes electric blankets or hot water bottles. Electricity usually comes from solar panels or a generator for a few hours in the evening. Hot water may be available only at certain times.",
          "Pack a down jacket, thermals, a cap, gloves and warm socks for the night, and a power bank for your phone.",
        ],
      },
      {
        h: "Do not make Pangong your first night",
        p: [
          "Pangong is at about 4,250 m and the road from Leh crosses Chang La at about 5,360 m. Sleeping there on your first or second night in Ladakh is the most common reason travellers get altitude sickness. Spend at least two nights in Leh first. If anyone in your group feels unwell at Pangong, descend; there is limited medical help at the lake.",
        ],
      },
      {
        h: "Meals at the lake",
        p: [
          "Camps and homestays usually include dinner and breakfast: dal, rice, vegetables, roti, tea, sometimes Maggi and momos. Choice is limited and fresh food has to come from Leh. Carry snacks and water. In homestays, the food is home-cooked and often better than the camp buffet.",
        ],
      },
      {
        h: "When the camps are open",
        list: [
          "May: some camps open; the lake may still be partly frozen, nights very cold.",
          "June to August: all camps open; the busiest months.",
          "September: clear and calm; camps begin closing by the end of the month.",
          "October to April: most camps closed; homestays in Man and Merak may open for winter visitors to the frozen lake.",
        ],
      },
      {
        h: "What to check before you book",
        list: [
          "Which village the stay is in, and how close to the shore.",
          "Tent or cottage, and whether there is a heater or electric blanket.",
          "Toilet attached or shared, and hot water timing.",
          "Electricity hours and charging points.",
          "Meals included (usually dinner and breakfast).",
          "Permit registration: carry your environment fee receipt and IDs.",
        ],
      },
      {
        h: "Day trip or overnight?",
        p: [
          "A day trip from Leh to Pangong is possible but long, about 5 to 6 hours each way, and it gives you only a short time at the lake in the middle of the day, when the light is flat. Staying a night lets you see the lake at sunset and sunrise, when its colours change most. If you can acclimatise first, stay a night.",
        ],
      },
    ],
    faqs: [
      { q: "Where should I stay at Pangong Lake?", a: "Spangmik for the most choice and the classic view, Man or Merak for quiet homestays, and Lukung if you want to be first on the shore." },
      { q: "Are there hotels at Pangong Lake?", a: "There are camps, cottages and homestays, but no large hotels. Comfort is basic to mid-range." },
      { q: "Is it very cold at Pangong at night?", a: "Yes. Nights are near or below zero even in summer. Pack warm clothes for the night." },
      { q: "Is there electricity at Pangong camps?", a: "Usually from solar panels or a generator for a few hours in the evening. Carry a power bank." },
      { q: "Can I stay at Pangong on my first night in Ladakh?", a: "No. Spend at least two nights in Leh first to acclimatise; Pangong is higher and has limited medical help." },
      { q: "When are Pangong camps open?", a: "Mainly from May or June to September. Most close from October to April." },
    ],
  },
];
