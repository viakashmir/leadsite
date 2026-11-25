// TDI depth pass 1, part 2 (2026-11-25): stay and place posts that pair with
// tdiholidayventures.com hotel and tourism pages. Appended by withAdditions in
// blog/index.ts. Rules: facts a traveller can check, no typed fares or
// prices, no em dashes, no question already asked elsewhere.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const TDI_DEPTH_2_ADDITIONS: Record<string, Addition> = {
  "where-to-stay-in-gulmarg": {
    sections: [
      {
        h: "Choose a location for the outing you will actually make",
        p: [
          "Gulmarg is small, but where you sleep decides what your mornings look like. If the gondola is the reason for your trip, stay close to the Kongdori base so you can join the queue at opening time without a taxi. If you want quiet walks, the golf course, St Mary's Church and the old Maharani temple, the hotels around the main meadow put all of them within an easy stroll. If you are on a tight budget or arriving late, Tangmarg, lower down the hill, has cheaper rooms and better food choices, but every morning starts with a drive up the hairpins.",
          "Families with small children and older parents should think about walking distance first. The meadow looks flat in photographs but it is uneven, often muddy in spring and snow-covered in winter, and pony owners will offer rides for every short distance. A hotel near the road saves a lot of effort.",
        ],
      },
      {
        h: "Compare Gulmarg hotels by location and facilities",
        list: [
          "Near the gondola base: walk to the queue, ski hire shops and the instructors' huts. Busy in the day, quiet at night.",
          "Around the main meadow and golf course: views of Apharwat, walks to the church and temple, a short drive or pony ride to the gondola.",
          "On the upper ridge and towards Khilanmarg road: quieter, often more expensive, good views, and a steeper walk in snow.",
          "Tangmarg and Drung road: the cheapest rooms, a 30 to 40 minute drive to Gulmarg, more restaurants and shops.",
          "Government huts run by the tourism department: basic but well placed, booked through the official portal.",
        ],
      },
      {
        h: "Choose the room for the person using it",
        p: [
          "In Gulmarg the type of room matters more than the hotel's star rating. A ground-floor room saves older guests the stairs, since many smaller hotels have no lift. A room with a wooden floor and a carpet is warmer than one with tiles. Rooms at the back of hotels that face the forest are quieter than those on the road, where snowmobiles and taxis start early in winter. Couples often prefer an upper-floor room with a view of the meadow; skiers want a room near the boot room and drying area.",
          "Ask for a photo of the actual room category you are booking, not the hotel's best suite, and ask how many beds it has. Extra beds in Gulmarg are often folding beds or mattresses on the floor, which matters for a family of four.",
        ],
      },
      {
        h: "Ask how the room works in cold weather",
        p: [
          "Heating in Gulmarg comes in several forms. Larger hotels run central heating from a boiler, smaller ones use electric oil-filled heaters, and some older properties still have the traditional wood-burning bukhari in the room or the lounge. Each has a catch. Central heating is best but sometimes runs only at fixed hours. Electric heaters fail during power cuts, which are common in winter, so ask whether the hotel runs a generator for heating and for how many hours. A bukhari is warm but needs feeding with wood, which may be charged extra.",
          "Ask about hot water too: some hotels have geysers in every bathroom, others supply buckets of hot water at fixed times. Electric blankets are common in better hotels and make a big difference on a January night. Get the heating terms in writing, because complaints about cold rooms are the most common problem guests report in winter.",
        ],
      },
      {
        h: "Choose a warm-season stay by the walking routes",
        p: [
          "From May to October, Gulmarg's appeal is walking: to Khilanmarg on foot or pony, to the Strawberry Valley, around the golf course and through the pine forest towards Ningle Nallah and Alpather if you are fit and guided. Hotels on the upper side of the meadow cut the distance to the Khilanmarg trail. Monsoon showers in July and August can make the meadow muddy, so a hotel near the road is easier on those weeks.",
        ],
      },
      {
        h: "Compare an overnight stay with a day trip",
        p: [
          "Most visitors see Gulmarg as a day trip from Srinagar, arriving mid-morning, queuing for the gondola and leaving by late afternoon. That works, but the day is dominated by traffic on the Tangmarg road and by the gondola queue. An overnight stay lets you take the first gondola cabin before the day crowds arrive, walk the meadow in the empty evening and see the snow peaks at sunrise. In winter, when the road can close after fresh snow, staying over also protects your gondola booking from a missed morning.",
        ],
      },
      {
        h: "Compare the whole reservation before paying",
        list: [
          "The meal plan: room only, breakfast only, or breakfast and dinner. Gulmarg has few restaurants, so a dinner plan makes sense.",
          "Heating terms, generator hours and hot water.",
          "Taxes and service charges, which are often added on top of the room rate.",
          "Cancellation and change rules, especially around Christmas and New Year, when many hotels sell fixed-night packages.",
          "Whether the room rate includes the extra bed or mattress for a child.",
          "Whether the driver's room is available and what it costs, if you are on a package with a cab.",
          "Check-in and check-out times, and whether an early arrival can get the room or at least a place to change.",
        ],
      },
      {
        h: "Busy weeks in Gulmarg you should book around",
        p: [
          "The Christmas and New Year week is the busiest time of the year, followed by the Khelo India Winter Games when they are held in Gulmarg, usually in February or March, and the snow weeks of January. In summer, school holidays in May and June fill the hotels with families. If your dates fall in any of these periods, book rooms and gondola tickets early and expect fixed-night packages rather than single nights.",
        ],
      },
      {
        h: "Gulmarg hotels and the Gulmarg Wildlife Sanctuary",
        p: [
          "Gulmarg sits inside a protected landscape, and the forests around it form the Gulmarg Wildlife Sanctuary. Building here is controlled, which is why there are fewer large hotels than in Srinagar and why new rooms are slow to appear. It also means wildlife, including Himalayan black bears, can come close to hotels in autumn. Keep food in your room sealed, do not walk alone into the forest at dusk, and follow the hotel's advice.",
        ],
      },
    ],
    faqs: [
      { q: "Which Gulmarg hotels are best for older parents?", a: "Hotels close to the road with ground-floor rooms, since many smaller hotels have no lift and the meadow is uneven." },
      { q: "Do Gulmarg hotels have a generator for heating during power cuts?", a: "Many do, for limited hours. Ask how many hours the generator runs and whether it powers room heaters." },
      { q: "What is a bukhari in a Gulmarg hotel?", a: "A traditional wood-burning stove used for heating rooms or lounges. Wood may be charged separately." },
      { q: "Should I take a meal plan in Gulmarg?", a: "Usually yes. Gulmarg has few restaurants, so breakfast and dinner at the hotel is practical, especially in winter." },
      { q: "Are there government huts to stay in Gulmarg?", a: "Yes. The tourism department runs huts in Gulmarg, booked through its official portal." },
      { q: "When are Gulmarg hotels busiest?", a: "Christmas and New Year week, the winter games weeks, January snow weeks, and the May to June school holidays." },
      { q: "Can I stay in Gulmarg for the first gondola of the day?", a: "Yes. Staying near the Kongdori base lets you join the gondola queue at opening without a drive up from Srinagar." },
      { q: "Are bears a concern near Gulmarg hotels?", a: "Himalayan black bears can come near in autumn. Keep food sealed and avoid walking alone into the forest at dusk." },
      { q: "Do Gulmarg hotels charge for extra beds?", a: "Usually yes, and extra beds are often folding beds or floor mattresses. Confirm the bed type for children." },
    ],
  },

  "where-to-stay-in-pahalgam": {
    sections: [
      {
        h: "Start with the part of Pahalgam that fits your plan",
        p: [
          "Pahalgam is spread along the Lidder river, with the main market and taxi stand at its centre and two roads leaving it: one towards Aru and one towards Chandanwari past Betaab Valley. If your plan is a day of union taxi sightseeing, a hotel within walking distance of the taxi stand is the easiest. If you want to sit by the river and do little, the riverside hotels on the Laripora side and along the Aru road are quieter. If you are going on to the Amarnath Yatra, stay on the Chandanwari side or near Nunwan.",
        ],
      },
      {
        h: "Compare stay types by location and room",
        list: [
          "Riverside hotels: the sound of the Lidder and lawn views. Rooms facing the river cost more and sell out first.",
          "Market hotels: walk to restaurants, shops and the taxi stand. Busier and noisier in the day.",
          "Aru road resorts: pine forests and quieter nights, with a short drive into town.",
          "Cottages: separate units with their own sitting area, good for families and honeymooners.",
          "Government huts and the tourism department's hotel: good locations, simpler rooms, booked through the official portal.",
          "Homestays in villages like Laripora: local food and a family welcome, with more basic bathrooms.",
        ],
      },
      {
        h: "Choose what you want from a resort or riverside stay",
        p: [
          "A Pahalgam resort usually means a large lawn, a restaurant, a bonfire area and rooms in several blocks. Ask which block your room is in, since some face the river and others the car park. Riverside rooms are wonderful in summer, but the river is loud at night in May and June when the snowmelt is high, which some guests love and light sleepers do not. In autumn, when the river is lower and the poplars turn gold, riverside lawns are at their best.",
        ],
      },
      {
        h: "Check the details of a cottage or a room",
        p: [
          "Cottages vary widely. Ask whether yours has a separate bedroom, how many beds, and whether the bathroom has a geyser or bucket hot water. Check the heating if you travel between October and April, since Pahalgam is cold at night outside summer. In a hotel, ask for a room away from the kitchen and the generator. Ask for photos of the actual room category, not the best suite.",
        ],
      },
      {
        h: "Check the room and approach for the season",
        p: [
          "In winter, some smaller Pahalgam hotels close, and those that stay open heat only part of the building. Roads inside the town are cleared, but approaches to riverside and Aru road properties can be icy, so ask whether a car can reach the door. In spring, the riverside lawns may still be muddy from snowmelt. In the July and August yatra season, rooms on the Chandanwari side fill with pilgrims and the town is busy with security movement, so allow extra time on the roads.",
        ],
      },
      {
        h: "Plan valley access separately from the booking",
        p: [
          "Your hotel booking does not cover Aru, Betaab or Chandanwari. These are reached by local union taxis that run fixed routes from the taxi stand, or by pony on certain trails. Outside cabs stop in Pahalgam. Ask your hotel to arrange union taxis the evening before, especially for groups and in peak season. Baisaran meadow was closed to visitors after the April 2025 attack, so check its current status locally before planning a pony ride there.",
        ],
      },
      {
        h: "Compare the actual reservations before paying",
        list: [
          "The meal plan and whether dinner is a buffet or set menu.",
          "Heating, generator backup and hot water for your dates.",
          "Taxes added on the room rate.",
          "Cancellation rules, especially for the yatra months and long weekends.",
          "The driver's room, if you are on a package with a cab.",
          "Whether river-view rooms are guaranteed or only requested.",
        ],
      },
      {
        h: "Pahalgam beyond the hotel: what is nearby",
        p: [
          "From most Pahalgam hotels you can walk to the Mamaleshwar temple, a small old Shiva temple on the far bank of the Lidder, and to the Pahalgam Club area and the golf course. River rafting runs on the Lidder from points near Yannar, below town, in summer. The trout fishing season on the Lidder needs a permit from the fisheries department. These are good things to plan on the afternoon of arrival or the morning you leave.",
        ],
      },
      {
        h: "Pahalgam hotels for the long drive from Jammu",
        p: [
          "Travellers who come up from Jammu or Katra by road sometimes go straight to Pahalgam via Anantnag instead of stopping in Srinagar first. That turns a long highway day into an arrival at the hotel by evening. If you do this, tell the hotel your arrival time, ask for dinner to be held, and choose a property with easy car access. Stop for lunch near Qazigund after the Navyug tunnel, where there are dhabas.",
        ],
      },
    ],
    faqs: [
      { q: "Which Pahalgam area is quietest at night?", a: "The Aru road resorts and riverside hotels on the Laripora side, away from the market and taxi stand." },
      { q: "Is the Lidder river loud at night in Pahalgam hotels?", a: "In May and June, when snowmelt is high, riverside rooms can be loud. Light sleepers should ask for a room facing away from the river." },
      { q: "Do Pahalgam hotels arrange union taxis to Aru and Betaab?", a: "Most do. Ask the evening before, especially for groups or peak season." },
      { q: "Are Pahalgam cottages good for families?", a: "Yes, if the cottage has a separate bedroom and enough beds. Ask for photos and the bed count." },
      { q: "Can I drive straight from Jammu to Pahalgam without stopping in Srinagar?", a: "Yes, via Anantnag. Tell the hotel your arrival time and ask for dinner to be held." },
      { q: "Is the Mamaleshwar temple near Pahalgam hotels?", a: "Yes. It is a short walk from the town centre, across the Lidder." },
      { q: "Do I need a permit for trout fishing in Pahalgam?", a: "Yes. Fishing on the Lidder needs a permit from the fisheries department, and the season is fixed." },
      { q: "Are river-view rooms guaranteed in Pahalgam?", a: "Only if the booking says so. Ask whether the river view is guaranteed or only requested." },
      { q: "Are approaches to Pahalgam hotels icy in winter?", a: "Some are. Ask whether a car can reach the door, especially for riverside and Aru road properties." },
      { q: "Where should Amarnath pilgrims stay in Pahalgam?", a: "On the Chandanwari side or near the Nunwan base camp, close to the yatra route." },
    ],
  },

  "aharbal-waterfall-kokernag-verinag-guide": {
    sections: [
      {
        h: "Can you visit Aharbal, Kokernag and Verinag now?",
        p: [
          "After the April 2025 attack in Pahalgam, the Jammu and Kashmir administration closed a number of tourist spots for a period and reopened them in stages over the following months. South Kashmir's sites were among those reviewed. Before you set out, ask your hotel, driver or the tourism office in Srinagar whether Aharbal, Kokernag and Verinag are open that day, and carry ID, since there may be checks on the way.",
        ],
      },
      {
        h: "What is Aharbal known for?",
        p: [
          "Aharbal is a waterfall on the Vishav river in Kulgam district, where the river drops through a narrow gorge of rock in a pine forest. It is often called the Niagara of Kashmir, which overstates it, but the falls are powerful, the gorge is deep and the setting is fine. The surrounding area is a quiet hill landscape with shepherds' huts and meadows, much less visited than Gulmarg or Pahalgam. Aharbal is also the starting point for the trek to Kounsarnag, a high lake below the Pir Panjal ridge.",
        ],
      },
      {
        h: "How do you get to Aharbal from Srinagar?",
        p: [
          "Aharbal is about 75 km from Srinagar, a drive of about two to two and a half hours. The usual route goes south on the national highway to Pampore and Awantipora, then turns west towards Pulwama or Shopian, passing through apple orchards before climbing to Aharbal. Another route goes via Kulgam. There is no public transport worth relying on for tourists, so most visitors hire a cab for the day. The last stretch climbs through forest and can be icy in winter.",
        ],
      },
      {
        h: "What is worth seeing in Kokernag?",
        p: [
          "Kokernag, in Anantnag district, is known for its freshwater springs, which emerge at several points in a garden at the foot of a forested hill. The water is clear and cold and locals consider it good for digestion. The garden has lawns, flower beds and paths under chinar and willow trees. Kokernag also has a large trout farm run by the fisheries department, where you can see the breeding ponds and sometimes buy fresh trout. It is a calm stop, best for an hour or two.",
        ],
      },
      {
        h: "What makes Verinag special?",
        p: [
          "Verinag is the spring traditionally regarded as the source of the Jhelum. The Mughal emperor Jahangir enclosed it in an octagonal stone tank with arched recesses around the edge in 1620, and his son Shah Jahan added a garden and water channels. The tank holds deep blue-green water full of fish. Jahangir loved the place and wished to be buried here, although he was buried at Lahore. Verinag is near Qazigund, close to where the Jammu highway enters the valley, so it can be visited on the way in or out of Kashmir.",
        ],
      },
      {
        h: "How do you plan the drive from Srinagar?",
        p: [
          "Verinag and Kokernag lie close to each other in the southern end of the valley, about two hours from Srinagar. Aharbal is on a separate road to the west. One way to see all three is to leave Srinagar early, drive to Aharbal for the morning, then cross to Kokernag and Verinag in the afternoon and return to Srinagar by evening. It is a long day of eight to ten hours. An easier plan is to see Kokernag, Verinag and Achabal in one day and Aharbal on another, combined with Shopian's orchards.",
        ],
      },
      {
        h: "When should you add another stop?",
        list: [
          "Achabal garden near Anantnag: a Mughal garden with a spring and terraced water channels. It fits with Kokernag.",
          "Daksum and Sinthan Top: beyond Kokernag, a forest valley and a high pass, possible as an extension in summer when the Sinthan road is open.",
          "Martand Sun Temple ruins near Anantnag: an 8th-century temple ruin on a plateau, close to the Pahalgam road.",
          "Awantipora temple ruins: two 9th-century temples on the highway near Pampore, a short stop on the way back.",
          "Pampore saffron fields: in flower in late October and early November.",
        ],
      },
      {
        h: "What should you check at the gardens?",
        p: [
          "The gardens at Kokernag, Verinag and Achabal are run by the floriculture department and charge a small entry fee. They usually open in the morning and close around sunset. Check the opening times and whether any part is closed for repairs. Picnics are allowed in some areas but not on the lawns. Respect the springs: do not wash, swim or throw anything into the water.",
        ],
      },
      {
        h: "Where should you stay?",
        p: [
          "Most visitors stay in Srinagar and visit south Kashmir on day trips. Pahalgam is another base, about an hour from Kokernag and Verinag. Kokernag and Aharbal have tourism department huts and a few small guesthouses, which suit travellers who want a quiet night. Daksum has a government rest house and forest huts. Book these in advance, especially in summer.",
        ],
      },
      {
        h: "Where does south Kashmir fit in a longer trip?",
        p: [
          "If you come from Jammu by road, Verinag is the first major sight inside the valley, so you can stop there before reaching Srinagar or Pahalgam. On a trip with three nights in Srinagar, one day can be spent in the south. On a longer trip with Pahalgam, you can visit Kokernag, Verinag and Achabal on the way from Srinagar to Pahalgam and leave Aharbal for another day. South Kashmir also suits second-time visitors who have already seen Gulmarg and Sonamarg.",
        ],
      },
      {
        h: "What should you know about access and safety?",
        p: [
          "The road to Aharbal is narrow and steep in parts, and the forest can hold snow from December to March. Rocks near the falls are wet and slippery all year. Keep children back from the edge and do not climb on the rocks for photos. Mobile coverage is weaker at Aharbal than in the towns, so download maps before you go. At Kokernag and Verinag, the gardens are busy on Sundays and holidays with local families, which makes them lively but crowded.",
        ],
      },
      {
        h: "Other day trips from Srinagar",
        p: [
          "If south Kashmir is not open or not your style, the other common day trips from Srinagar are Gulmarg, Sonamarg, Pahalgam, Doodhpathri and Yusmarg. Doodhpathri and Yusmarg are closest in feel to Aharbal: quiet meadows and forests with fewer tourists. Wular Lake and Manasbal Lake to the north make a gentle half-day.",
        ],
      },
    ],
    faqs: [
      { q: "Is Aharbal in Kulgam or Shopian district?", a: "Aharbal is in Kulgam district, close to the Shopian border, on the Vishav river." },
      { q: "Why is Aharbal called the Niagara of Kashmir?", a: "Because of its powerful falls through a rocky gorge, although it is much smaller than Niagara." },
      { q: "Who built the tank at Verinag?", a: "The Mughal emperor Jahangir built the octagonal tank in 1620, and Shah Jahan added the garden." },
      { q: "Can I buy trout at Kokernag?", a: "Sometimes. The fisheries department runs a trout farm there, and fresh trout is often sold nearby." },
      { q: "Is there an entry fee for Kokernag and Verinag gardens?", a: "Yes, a small entry fee charged by the floriculture department." },
      { q: "Can I visit Verinag on the way from Jammu to Srinagar?", a: "Yes. Verinag is near Qazigund, where the Jammu highway enters the valley." },
      { q: "Is Achabal close to Kokernag?", a: "Yes. Both are in Anantnag district and fit into one day." },
      { q: "Can I stay overnight at Aharbal?", a: "Yes, in tourism department huts or a few small guesthouses. Book ahead in summer." },
      { q: "Where does the Kounsarnag trek start?", a: "From Aharbal. It is a multi-day trek to a high lake below the Pir Panjal ridge and needs a guide." },
      { q: "Is the road to Aharbal open in winter?", a: "Usually, but it can be icy and snow-covered between December and March, so check conditions before you go." },
      { q: "How long should I spend at Kokernag?", a: "An hour or two is enough for the springs, the garden and the trout farm." },
      { q: "Can I combine Aharbal with Shopian's apple orchards?", a: "Yes. The road to Aharbal passes through Shopian's orchards, which are at their best at harvest in autumn." },
      { q: "Is Martand Sun Temple near Kokernag?", a: "It is near Anantnag, about half an hour from Kokernag, and fits into a south Kashmir day." },
    ],
  },

  "hanle-stargazing-travel-guide": {
    sections: [
      {
        h: "Why do people go to Hanle?",
        p: [
          "Hanle is a small settlement in the Changthang plateau of eastern Ladakh, close to the border with Tibet. It is famous for the darkness of its night sky. The air is dry, the altitude is about 4,500 m, the sky is clear on most nights outside the monsoon and there are almost no artificial lights for hundreds of kilometres. In December 2022, the area was declared India's first Dark Sky Reserve. By day, the wide valley, the monastery on its hill, wild horses and nomads' camps make Hanle worth the long drive.",
        ],
      },
      {
        h: "The observatories on Mount Saraswati",
        p: [
          "The Indian Astronomical Observatory, run by the Indian Institute of Astrophysics, stands on Mount Saraswati above Hanle. Its best-known instrument is the 2-metre Himalayan Chandra Telescope, operated since 2001 and controlled remotely from Bengaluru. The site also hosts the GROWTH-India telescope built with IIT Bombay, which watches for short-lived events like supernovae, and the MACE gamma-ray telescope, inaugurated in 2024 and one of the largest of its kind in Asia. Visits are not always allowed and depend on the observatory's rules at the time, so ask locally.",
        ],
      },
      {
        h: "Astro ambassadors: stargazing with local guides",
        p: [
          "When the reserve was set up, people from Hanle's villages were trained to guide visitors and given telescopes. These local astro ambassadors run night sessions from homestays, pointing out constellations, planets, star clusters and the Milky Way. Booking a session through your homestay is the best way to make sense of what you see, and it puts money into the villages that protect the dark sky.",
        ],
      },
      {
        h: "How should Hanle fit between other Ladakh stops?",
        p: [
          "Hanle is about 250 km from Leh via Upshi, Chumathang and Nyoma, a drive of seven to nine hours. Do not go there on your first or second day in Ladakh. Spend at least two nights in Leh to acclimatise, then fit Hanle into a loop. A common plan is Leh to Tso Moriri, Tso Moriri to Hanle, Hanle to Pangong via the Chushul road, then back to Leh over Chang La. This needs good roads, a permit for each area and an experienced driver. Check whether the Hanle to Chushul stretch is open before you commit.",
        ],
      },
      {
        h: "How should you plan for altitude in Hanle?",
        p: [
          "At about 4,500 m, Hanle is higher than Leh and Pangong. Nights are cold all year and below freezing in most months. The thin air makes walking up to the monastery or observatory tiring, and staying up late in the cold adds to the strain. Arrive acclimatised, drink plenty of water, avoid alcohol, eat light and go to bed after the stargazing session rather than staying out all night. Carry warm clothes for minus temperatures even in summer.",
        ],
      },
      {
        h: "What else can you do at Hanle?",
        list: [
          "Hanle Monastery: a 17th-century monastery of the Drukpa lineage, on a ridge above the village.",
          "Wildlife: kiang, the Tibetan wild ass, and birds like the black-necked crane in the wetlands around Hanle in summer.",
          "Nomads' camps: Changpa herders graze yaks, sheep and pashmina goats on the plateau.",
          "Umling La: a high motorable road beyond Hanle, opened to visitors in some seasons with permits. Check the current rules.",
          "Photography: the plains, the river and the monastery at sunrise make good day photographs.",
        ],
      },
      {
        h: "What are the permit and access rules?",
        p: [
          "Indian visitors register online through the Leh administration's portal, or through a registered travel agent, and pay the environment fee for the protected areas, with Hanle listed on the permit. Foreigners need a Protected Area Permit through a registered agent and face stricter rules near the border, so check the current position before planning. Carry several copies of your permit and ID, since there are checkposts on the road. Inside the Dark Sky Reserve, do not use bright torches or headlights near the stargazing sites.",
        ],
      },
      {
        h: "When should you go to Hanle?",
        p: [
          "The clearest skies are from October to May, with the best nights around the new moon. October and November are a good balance of clear skies and bearable cold. Winter brings the darkest, clearest nights but temperatures well below freezing and few homestays open. July and August can have more clouds. Plan your dates around the moon: a week either side of the new moon is ideal for the Milky Way.",
        ],
      },
    ],
    faqs: [
      { q: "What is the Himalayan Chandra Telescope?", a: "A 2-metre optical telescope at the Indian Astronomical Observatory on Mount Saraswati in Hanle, operated since 2001." },
      { q: "What is the MACE telescope at Hanle?", a: "A large gamma-ray telescope inaugurated in 2024 at Hanle, one of the largest of its kind in Asia." },
      { q: "Who are the astro ambassadors in Hanle?", a: "Local villagers trained to guide night sky sessions with telescopes, usually booked through homestays." },
      { q: "Can I see wild animals around Hanle?", a: "Yes. Kiang, the Tibetan wild ass, and birds like the black-necked crane can be seen in summer." },
      { q: "Can I drive from Hanle to Pangong?", a: "Yes, via the Chushul road when it is open. Check road conditions and permits before planning." },
      { q: "What is the best moon phase for Hanle?", a: "Around the new moon, when the sky is darkest and the Milky Way stands out." },
      { q: "Can foreigners visit Hanle?", a: "Rules for foreigners in border areas are stricter and change over time. Check the current position before planning." },
      { q: "Is Umling La reached from Hanle?", a: "Yes, Umling La is beyond Hanle. Access depends on current permit rules and road conditions." },
    ],
  },

  "keran-valley-kashmir-guide": {
    sections: [
      {
        h: "How does a Keran Valley trip work in practice?",
        p: [
          "A Keran trip usually starts early from Srinagar. You drive north to Kupwara, where permits and ID checks take place, then climb over Pharkian Gali and descend into the Kishanganga valley. Most visitors spend the afternoon walking along the river and the village, stay overnight in a homestay or guest house, and return to Srinagar the next day. Day trips are possible but leave little time in Keran itself.",
        ],
      },
      {
        h: "What should you bring for the overnight?",
        list: [
          "Original photo ID and photocopies for each checkpoint.",
          "Warm clothes, since nights are cool even in summer.",
          "Cash, because ATMs and card payments are limited.",
          "Basic medicines and any prescriptions.",
          "A torch and a power bank, since electricity may be intermittent.",
          "Snacks and drinking water for the drive.",
        ],
      },
      {
        h: "What can you do in Keran?",
        p: [
          "Keran is for people who enjoy quiet villages and big landscapes. You can walk along the Kishanganga, watch village life, see the houses and fields on the other bank across the Line of Control, and take photographs in the evening light. There are no rides, shops or tourist sights in the usual sense. The drive over Pharkian Gali, with its forests and meadows, is part of the experience.",
        ],
      },
      {
        h: "Rules for photography near the border",
        p: [
          "Photography of army posts, bunkers, bridges and people in uniform is not allowed. Ask before photographing villagers, especially women. Do not use drones; they are banned near the border. Follow instructions from security personnel without argument, and if you are told to put the camera away, do so. Keep your photos to landscapes, the river and the village scenes you have been allowed to photograph.",
        ],
      },
      {
        h: "Who Keran is not for",
        p: [
          "Keran is not a good choice for travellers who want comfort, shopping or activities, or for anyone uncomfortable with security checks and a border atmosphere. It is also not ideal for very young children or travellers with health problems, since the drive is long and medical facilities are limited. For those travellers, Gulmarg, Pahalgam or Sonamarg are better.",
        ],
      },
    ],
    faqs: [
      { q: "Where do Keran permits and checks take place?", a: "Mainly at Kupwara and checkpoints on the road. Carry original ID and copies." },
      { q: "Can I fly a drone in Keran?", a: "No. Drones are banned near the border." },
      { q: "Is there electricity in Keran homestays?", a: "Yes, but it can be intermittent, so carry a torch and a power bank." },
      { q: "Can I photograph the border at Keran?", a: "You can photograph the landscape and river, but not army posts, bunkers or people in uniform." },
      { q: "What is Pharkian Gali?", a: "A pass on the road from Kupwara to Keran, crossing forests and meadows before the descent to the Kishanganga." },
      { q: "Is a day trip to Keran worth it?", a: "It is possible but tiring. An overnight stay gives you time to enjoy the village and river." },
      { q: "Is card payment accepted in Keran?", a: "Rarely. Carry enough cash for food, stays and small purchases." },
      { q: "Who should skip Keran?", a: "Travellers who want comfort, shopping or activities, very young children and anyone with serious health problems." },
    ],
  },

  "turtuk-travel-guide": {
    sections: [
      {
        h: "What makes Turtuk different from the rest of Ladakh?",
        p: [
          "Most of Ladakh is Buddhist and Tibetan in culture. Turtuk is Balti, with its own language, architecture and food, closer to the culture of Baltistan across the border. The village is green in summer, with fields of barley and buckwheat, apricot orchards and stone houses along channels of glacier water. People here are mostly Muslim, and the mosque and the old royal house are among the main sights. Visiting Turtuk shows a very different side of Ladakh.",
        ],
      },
      {
        h: "What should you know about Turtuk's recent history?",
        p: [
          "Turtuk was part of Pakistan-administered Baltistan until the 1971 war, when the Indian Army took control of it and nearby villages. Families were divided by the new line, and some still have relatives across the border. The village opened to tourists in 2010. This history is still personal for many residents, so listen if people want to talk about it, and do not push questions.",
        ],
      },
      {
        h: "Natural cold storage in Turtuk",
        p: [
          "Turtuk has small stone structures called nang chung, used for generations as natural refrigerators. Cool air from gaps in the rocks keeps food fresh in summer. Some homestays and guides show visitors these structures and explain how they work. They are a small but memorable sight, showing how villagers adapted to the climate.",
        ],
      },
      {
        h: "Day trip or overnight in Turtuk?",
        p: [
          "Turtuk is about 90 km from Diskit in Nubra, two and a half to three hours each way. A day trip from Hunder or Diskit is possible, but you will see the village in the heat of the day when many people are in the fields. An overnight stay lets you walk the village in the morning and evening, eat Balti food and talk to your hosts. Most travellers who stay a night say it was the highlight of their Nubra trip.",
        ],
      },
      {
        h: "Balti food to try in Turtuk",
        list: [
          "Kisir: a buckwheat flatbread, often served with butter or walnut chutney.",
          "Apricot dishes: fresh apricots in July and August, and dried apricots and apricot oil all year.",
          "Balti tea and salty butter tea.",
          "Apricot kernel oil, used in cooking and for skin.",
          "Mulberries in early summer.",
        ],
      },
      {
        h: "What are the permit and conduct rules?",
        p: [
          "Indian visitors register online through the Leh administration's portal, or through an agent in Leh, with Nubra and Turtuk listed on the permit, and pay the environment fee. Foreigners need a Protected Area Permit through a registered travel agent. Carry copies for checkpoints. In the village, dress modestly, with arms and legs covered. Ask before photographing people, especially women, and do not walk into fields or private courtyards. Alcohol should not be consumed in public.",
        ],
      },
      {
        h: "Which Ladakh packages include Turtuk?",
        p: [
          "Turtuk is added to Ladakh packages that spend at least two nights in Nubra. A common plan is Leh to Hunder or Diskit on day one, Turtuk and back or a night in Turtuk on day two, and Pangong via the Shyok road on day three. Packages of six nights or more usually include it. Ask the agent whether the package includes a Turtuk overnight or only a day visit.",
        ],
      },
    ],
    faqs: [
      { q: "What language is spoken in Turtuk?", a: "Balti, a Tibetic language. Many people also speak Urdu, Hindi and some English." },
      { q: "What are nang chung in Turtuk?", a: "Small stone structures used as natural refrigerators, cooled by air from gaps in the rocks." },
      { q: "Is Turtuk worth an overnight stay?", a: "Yes. Staying the night lets you see the village in the morning and evening and enjoy Balti food." },
      { q: "What is kisir?", a: "A buckwheat flatbread from Balti cuisine, often served with butter or walnut chutney." },
      { q: "What should I wear in Turtuk?", a: "Modest clothes covering arms and legs, out of respect for local customs." },
      { q: "Do foreigners need a permit for Turtuk?", a: "Yes, a Protected Area Permit arranged through a registered travel agent in Leh." },
      { q: "Are there natural springs and water channels in Turtuk?", a: "Yes. Glacier water runs through stone channels between the fields and houses, and villagers use it for irrigation and mills." },
      { q: "Which Ladakh packages include Turtuk?", a: "Packages with at least two nights in Nubra, usually six nights or longer." },
    ],
  },
};
