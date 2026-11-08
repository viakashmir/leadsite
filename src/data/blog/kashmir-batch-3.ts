import type { BlogPost } from "./types";

// Kashmir competitor-gap batch 3 (2026-11-08): Srinagar places, offbeat
// valleys, treks and the Amarnath helicopter.
// Facts checked 2026-11-08:
// - Shankaracharya Temple: about 243 stone steps; about 1,000 ft above the city;
//   phones, cameras and gadgets not allowed past the security check; open
//   roughly morning to evening.
// - Keran: Kupwara district on the Kishanganga (Neelum), about 120 to 145 km
//   from Srinagar via Kupwara, Kralpora and Pharkian; permit online or from the
//   Kralpora police station.
// - Peer Ki Gali: about 3,490 m on the Mughal Road between Shopian and
//   Bafliaz/Poonch; roughly 95 to 100 km from Srinagar; open about May to
//   November, closed in winter.
// - Kashmir Great Lakes: about 68 to 76 km over 7 to 8 days, Sonamarg
//   (Shitkadi) to Naranag; Gadsar Pass about 4,190 m; July to mid-September.
// - Amarnath helicopters: book only through official channels linked from the
//   Shri Amarnathji Shrine Board site; valid only with yatra registration;
//   Baltal and Pahalgam routes to Panjtarni.
// Rules: no fares or timetables typed in, no em dashes.

const D = "2026-11-08";

export const KASHMIR_BATCH_3: BlogPost[] = [
  {
    slug: "srinagar-sunset-points",
    title: "Best Sunset Points in Srinagar: Dal Lake, Pari Mahal, Hari Parbat and More",
    description:
      "The best sunset points in Srinagar: Dal Lake by shikara, Pari Mahal, Zabarwan views, Hari Parbat, Nigeen Lake, Hazratbal and Char Chinar, with timings and tips.",
    category: "Weekend Trips",
    destination: "kashmir",
    city: "srinagar",
    date: D,
    intro:
      "Srinagar's sunsets are at their best over water. The classic way to watch one is from a shikara on Dal Lake, drifting towards Char Chinar or Nehru Park as the sky turns orange behind the houseboats and the Zabarwan hills go purple. For a view from above, Pari Mahal's terraces look straight down over the lake, and Hari Parbat (Koh-e-Maran) gives a sweep across the old city. Nigeen Lake is quieter, Hazratbal adds the white dome of the shrine to the scene, and in winter the low sun and mist make even the Boulevard magical. Sunset is roughly 5:15 pm in December and around 7:45 pm in June, so plan the evening around the season.",
    sections: [
      { h: "1. Dal Lake by shikara", p: ["Take a shikara from any of the numbered ghats on Boulevard Road about an hour before sunset. Ask for a route towards Char Chinar island, the floating gardens or Nehru Park, and stop the boat as the light turns. The reflections of houseboats, lotus beds in late summer and the mountains behind make this the single best sunset in Kashmir. Shikaras are charged by the hour at the official rates shown at the ghats."] },
      { h: "2. Pari Mahal", p: ["Pari Mahal, the 'palace of fairies', is a terraced Mughal garden on the slopes of the Zabarwan hills above Chashme Shahi. Its arches frame wide views of Dal Lake and the city below, and it is lit up in the evening. Gates close at a fixed hour set by the Floriculture Department, so arrive in good time and check the closing time on the day."] },
      { h: "3. Hari Parbat (Koh-e-Maran)", p: ["The hill crowned by Hari Parbat fort rises over Srinagar's old city. From its slopes, near the Makhdoom Sahib shrine and the Sharika Devi temple, you see the old city's rooftops, the Jhelum and Dal Lake with the sun dropping behind the Pir Panjal range. Access to the fort itself can be restricted, so go with a local driver who knows the current timings."] },
      { h: "4. Nigeen Lake", p: ["Nigeen is the quieter, northern extension of Dal Lake, ringed by willows and poplars. A sunset shikara here is calmer than on the main Dal, with fewer boats and vendors. If you are staying on a Nigeen houseboat, the deck itself is a sunset point."] },
      { h: "5. Hazratbal Shrine and the lakeside", p: ["The white marble Hazratbal shrine stands on the north-western shore of Dal Lake. The lakeside promenade beside it is a lovely place at sunset, with pigeons, families and the dome glowing against the hills. Dress modestly and respect prayer times."] },
      { h: "6. Char Chinar", p: ["Char Chinar is a tiny island in Dal Lake with four chinar trees, reached only by shikara. It is especially beautiful in October and November, when the chinars turn red and the sunset sets them glowing. Combine it with your sunset shikara route."] },
      { h: "7. Zabarwan Park and the Boulevard", p: ["Zabarwan Park, near the Botanical Garden and the Tulip Garden, has wide lawns and views across Dal Lake. The Boulevard itself, running along the lake, is a simple and free sunset walk, busy with families and tea stalls in the evening."] },
      { h: "Sunset times by season", list: ["December and January: around 5:15 to 5:30 pm.", "March and April: around 6:30 to 7:00 pm.", "June: around 7:45 pm, the latest of the year.", "September and October: around 6:00 to 6:45 pm.", "Times are approximate; check a weather app on the day."] },
      { h: "Photography tips", list: ["Arrive 45 to 60 minutes early; the best colour often comes after the sun dips.", "Use the houseboats and shikaras as foreground for scale.", "On a shikara, ask the boatman to stop so the boat is still for photos.", "In winter, mist on the lake gives soft, layered light."] },
    ],
    faqs: [
      { q: "Which is the best sunset point in Srinagar?", a: "A shikara on Dal Lake towards Char Chinar or Nehru Park. For a view from above, Pari Mahal's terraces." },
      { q: "What time is sunset in Srinagar?", a: "Roughly 5:15 pm in December and around 7:45 pm in June, the latest of the year." },
      { q: "Is Pari Mahal good for sunset?", a: "Yes, its terraces look straight over Dal Lake. Check the closing time on the day." },
      { q: "Can I watch the sunset from a houseboat?", a: "Yes. Houseboat decks on Dal and Nigeen Lake are lovely sunset spots." },
      { q: "Is a sunset shikara ride safe?", a: "Yes. Shikaras run until after dark in season; agree the duration and route at the ghat first." },
      { q: "Is the sunset better on Dal Lake or Nigeen Lake?", a: "Dal Lake has the classic views and more activity; Nigeen is quieter and calmer." },
    ],
  },
  {
    slug: "shankaracharya-temple-srinagar-guide",
    title: "Shankaracharya Temple Srinagar: Steps, Timings, Rules, History and Views",
    description:
      "Shankaracharya Temple guide: the 243 steps, how to reach the hilltop, timings, phone and camera rules, history, the view over Dal Lake and tips for visiting.",
    category: "Pilgrimage",
    destination: "kashmir",
    city: "srinagar",
    date: D,
    intro:
      "The Shankaracharya Temple is an ancient Shiva temple on top of Shankaracharya hill (also called Takht-e-Sulaiman), about 1,000 ft above Srinagar. A road winds up through the forest to a parking area and security check, and from there you climb about 243 stone steps to the shrine. The reward is the widest view of Srinagar in the city: Dal Lake, the Boulevard, Nagin, Hari Parbat and the Zabarwan range. Mobile phones, cameras, smartwatches and other gadgets are not allowed past the security check, so leave them in your car or hotel. The temple is open from morning to evening, with vehicle entry to the parking closing earlier in the afternoon.",
    sections: [
      { h: "History of the Shankaracharya Temple", p: ["The temple is one of the oldest in Kashmir. Its stone base and plinth are believed to date back many centuries, and the hill has been sacred for much longer. It is associated with the philosopher Adi Shankaracharya, who is said to have visited Kashmir and meditated here, which gave the temple its present name. The shrine houses a Shiva lingam and is especially busy during Mahashivratri and the Amarnath Yatra season, when the holy mace (Chhari Mubarak) procession visits.", "The hill is also called Takht-e-Sulaiman, the 'throne of Solomon', a name used in older Persian accounts."] },
      { h: "How to reach the temple", p: ["The road to the temple starts near the Boulevard and Dalgate and climbs through a forested reserve to the parking area below the steps. Your Srinagar cab can drive up when the gate is open; there is no public bus to the top. From the parking area, after the security check, the climb of about 243 steps takes 10 to 20 minutes with rests on the landings."] },
      { h: "Timings and best time to visit", p: ["The temple is generally open from about 7 or 8 am to the early evening, but vehicle entry to the parking area closes earlier, often around mid to late afternoon. Morning is the best time: cooler for the climb, clearer views and fewer people. Check timings on the day with your driver or hotel, as security rules can change."] },
      { h: "Rules: phones, cameras and dress", list: ["No mobile phones, cameras, smartwatches or electronic gadgets beyond the security check; leave them in the car or hotel, as there may be no counter to store them.", "Bags may be checked or not allowed; carry only essentials.", "Remove shoes before entering the shrine.", "Dress modestly and maintain silence inside the temple.", "Drones are not allowed."] },
      { h: "The view from the top", p: ["From the platform around the temple you see Dal Lake laid out below, with the Boulevard, the houseboats, Nehru Park and the floating gardens; Nigeen Lake further north; Hari Parbat fort over the old city; and the Zabarwan and Pir Panjal ranges on the horizon. Because cameras are not allowed, many visitors simply sit for a while and take it in."] },
      { h: "Is the climb difficult?", p: ["The 243 steps are steep in places but have landings to rest on. Most healthy adults and children manage easily. Older travellers or anyone with knee or heart problems should go slowly, or enjoy the view from the lower part of the hill. There are no ponies or lifts on the steps."] },
      { h: "Combining with other Srinagar sights", list: ["Morning: Shankaracharya Temple.", "Late morning: Chashme Shahi and Pari Mahal on the Zabarwan slopes.", "Afternoon: Nishat Bagh and Shalimar Bagh.", "Evening: a sunset shikara on Dal Lake from the Boulevard."] },
    ],
    faqs: [
      { q: "How many steps are there at Shankaracharya Temple?", a: "About 243 stone steps from the parking area to the shrine." },
      { q: "Are mobile phones allowed at Shankaracharya Temple?", a: "No. Phones, cameras, smartwatches and gadgets are not allowed past the security check. Leave them in your car or hotel." },
      { q: "What are the Shankaracharya Temple timings?", a: "Generally from morning to early evening; vehicle entry to the parking area closes earlier in the afternoon. Check on the day." },
      { q: "How do I reach Shankaracharya Temple?", a: "By cab up the hill road from near the Boulevard to the parking area, then about 243 steps on foot." },
      { q: "Is Shankaracharya Temple suitable for elderly visitors?", a: "The climb is steep in places with rest landings. Go slowly, or enjoy the views from lower down if you have knee or heart problems." },
      { q: "What is the other name of Shankaracharya hill?", a: "Takht-e-Sulaiman, the throne of Solomon." },
    ],
  },
  {
    slug: "floating-market-srinagar-dal-lake",
    title: "Floating Vegetable Market on Dal Lake, Srinagar: Timing, How to Go and What You See",
    description:
      "Srinagar's floating vegetable market on Dal Lake: what it is, best timing at dawn, how to book a shikara, what you see, photography tips and what to combine.",
    category: "Weekend Trips",
    destination: "kashmir",
    city: "srinagar",
    date: D,
    intro:
      "Srinagar's floating vegetable market is a dawn gathering of farmers from the lake villages who trade vegetables from their shikaras in the inner Dal Lake. Boats laden with lotus stems, kohlrabi, collard greens (haak), tomatoes, pumpkins and seasonal produce gather in the narrow channels, and wholesalers bargain boat to boat. It lasts only about an hour or two after first light, so you need to be on the water by about 5:30 to 6 am in summer, later in winter. Book a shikara the evening before through your houseboat or hotel; the ride from the Boulevard ghats takes about 30 to 45 minutes.",
    sections: [
      { h: "What the floating market is", p: ["Dal Lake is not just a tourist lake: thousands of people live on it, and its floating gardens (radh), built from layers of weeds and soil, grow vegetables all summer. Before roads and trucks reach the city each morning, the lake farmers bring their harvest by boat to an open stretch in the inner lake, where buyers from Srinagar's markets meet them. The market is a working wholesale market first and a tourist sight second, which is part of its charm."] },
      { h: "Best time and season", list: ["Summer (May to September): the busiest and most colourful; be there by about 5:30 to 6 am.", "Spring and autumn: smaller, with seasonal produce; start a little later.", "Winter: much smaller, and the cold and fog make dawn rides tough; some days there is little activity.", "Sundays and holidays can be quieter; ask your boatman the evening before."] },
      { h: "How to visit", p: ["Ask your houseboat owner or hotel to book a shikara for about 5 am. Boatmen know where the market is gathering that week and take you through the narrow channels of the inner lake, past houses, vegetable gardens and lotus beds. Dress warmly, even in summer, because the lake is chilly before sunrise."] },
      { h: "What you will see", list: ["Shikaras stacked with lotus stem (nadru), kohlrabi, haak, carrots, tomatoes, squash and herbs.", "Farmers and buyers bargaining boat to boat.", "Floating gardens and lake villages waking up.", "Kingfishers and herons in the reeds at dawn.", "Hawkers selling saffron, kahwa and handicrafts from their boats as tourists arrive."] },
      { h: "Photography tips", list: ["Bring a jacket and a small towel for spray; mornings are cold.", "Ask before photographing people up close; most farmers are fine with it if you are polite.", "Use the low dawn light and mist for atmosphere.", "Keep your phone or camera secure in the boat."] },
      { h: "What to combine with the floating market", p: ["After the market, ask your boatman to continue through the lake villages to the Mughal gardens' shoreline, Char Chinar and the Nehru Park area, then return for breakfast. It is a perfect first activity on the morning after a houseboat night, and leaves the rest of the day free for the gardens or a day trip."] },
      { h: "Responsible visiting", list: ["Do not throw anything into the lake.", "Keep voices low; it is a workplace.", "Buy something if you can: fresh lotus stem or seasonal fruit from a farmer helps the lake economy."] },
    ],
    faqs: [
      { q: "What time does the floating market in Srinagar start?", a: "At first light. Be on the water by about 5:30 to 6 am in summer; it lasts about an hour or two." },
      { q: "Where is the floating market in Srinagar?", a: "In the inner Dal Lake among the lake villages, reached by shikara from the Boulevard ghats in about 30 to 45 minutes." },
      { q: "How do I book a shikara for the floating market?", a: "Ask your houseboat or hotel the evening before; boatmen know where the market is gathering." },
      { q: "Is the floating market open in winter?", a: "It is much smaller in winter and some days there is little activity. Summer is best." },
      { q: "Is the floating market worth it?", a: "Yes, for a unique look at Dal Lake's working life, especially after a houseboat night." },
      { q: "What is sold at the floating market?", a: "Vegetables from the floating gardens: lotus stem, kohlrabi, haak, tomatoes, squash, herbs and seasonal produce." },
    ],
  },
  {
    slug: "keran-valley-kashmir-guide",
    title: "Keran Valley Kashmir: Permit, Route from Srinagar, Best Time and What to Expect",
    description:
      "Keran Valley in Kupwara on the Kishanganga: how to get the permit, route via Kupwara and Pharkian, distance from Srinagar, best time, stays and safety tips.",
    category: "Adventure",
    destination: "kashmir",
    date: D,
    intro:
      "Keran is a border village in Kupwara district on the banks of the Kishanganga river (called the Neelum across the Line of Control), opened to domestic tourists in recent years under the border tourism push. Its appeal is the river valley itself: green slopes, wooden houses, walnut and apple trees, and the striking sight of villages on the far bank across the LoC. Keran is roughly 120 to 145 km from Srinagar depending on the route, via Sopore, Kupwara, Kralpora and the Pharkian pass, about 5 to 6 hours by road. A permit is needed, either online through the Kupwara district process or from the Kralpora police station, and rules can change, so plan with an agent who works there.",
    sections: [
      { h: "Why visit Keran", p: ["Keran offers something no resort does: a quiet riverside village at the edge of the country, far from tourist crowds. The Kishanganga flows fast and clear through the valley, the hills are covered in pine and fir, and the people are welcoming to the few visitors who make the trip. It suits travellers who have already seen Srinagar, Gulmarg and Pahalgam and want an offbeat experience."] },
      { h: "Route from Srinagar", list: ["Srinagar to Sopore and on to Kupwara town via Drugmulla (about 89 km to Kupwara).", "Kupwara to Kralpora, the permit checkpoint.", "Kralpora over the Pharkian Gali pass (Pharkian Top) and down to Keran.", "The last stretch includes mountain roads that may be rough or under repair; a sturdy SUV and an experienced local driver are recommended.", "Allow 5 to 6 hours from Srinagar."] },
      { h: "Permit and rules", p: ["Visitors need a permit to enter the Keran area. It can be applied for through the Kupwara district's online process or obtained in person at the Kralpora police station with original ID and copies. Timings for entry and exit, photography rules and the areas you may visit are set by the administration and security forces. Follow every instruction at checkpoints, do not photograph security installations and carry ID at all times. Foreign nationals should confirm in advance whether access is allowed."] },
      { h: "Best time to visit", list: ["May to October: roads open, green valley, pleasant days.", "Pharkian pass can close after snow in late autumn and winter.", "Avoid periods of heavy rain, when landslides can block the road."] },
      { h: "Where to stay", p: ["Accommodation is limited to a few homestays, guesthouses and tourism facilities that have come up with border tourism. Many travellers stay in Kupwara and visit Keran as a long day trip, though an overnight stay lets you see the valley at dawn and dusk. Book through an agent who can confirm what is open."] },
      { h: "Nearby: Pharkian Top, Bangus and Lolab", p: ["Pharkian Top, the pass on the way to Keran, has wide views and snow into early summer. Bangus Valley and Lolab Valley are also in Kupwara district and can be combined into a 3 to 4 day north Kashmir loop with an agent who knows the area."] },
      { h: "Safety tips", list: ["Travel only in daylight and keep to the permitted areas and timings.", "Carry original ID, permit copies and cash; ATMs are scarce.", "Mobile signal may be weak or limited to some networks.", "Do not fly drones.", "Respect local customs and ask before photographing people."] },
    ],
    faqs: [
      { q: "Where is Keran Valley?", a: "In Kupwara district in north Kashmir, on the Kishanganga (Neelum) river along the Line of Control." },
      { q: "How far is Keran from Srinagar?", a: "Roughly 120 to 145 km depending on the route, about 5 to 6 hours via Kupwara and the Pharkian pass." },
      { q: "Do I need a permit for Keran?", a: "Yes. Apply online through the Kupwara district process or at the Kralpora police station with original ID." },
      { q: "When is the best time to visit Keran?", a: "May to October, when the Pharkian pass road is open." },
      { q: "Can I stay overnight in Keran?", a: "Yes, in a few homestays and guesthouses, though many visitors stay in Kupwara." },
      { q: "Is Keran safe for tourists?", a: "Domestic tourists visit with permits under the border tourism programme. Follow all rules and timings, and plan with a local agent." },
    ],
  },
  {
    slug: "peer-ki-gali-mughal-road-guide",
    title: "Peer Ki Gali and the Mughal Road: Altitude, Open Months, Route and What to See",
    description:
      "Peer Ki Gali on the Mughal Road: altitude about 3,490 m, open months, route from Srinagar via Shopian, distance, snow, sights like Aliabad Sarai and travel tips.",
    category: "Adventure",
    destination: "kashmir",
    date: D,
    intro:
      "Peer Ki Gali (also written Pir Ki Gali) is the highest point on the historic Mughal Road, a mountain pass at about 3,490 m in the Pir Panjal range between Shopian in Kashmir and Bafliaz and Poonch in the Jammu region. It is roughly 95 to 100 km from Srinagar via Shopian, about 3 to 3.5 hours by road. The pass is known for its snowfields into early summer, high meadows, the shrine of a Sufi saint that gives it its name, and sweeping Pir Panjal views. The Mughal Road is usually open from about May to late November and closed by snow through winter, so check its status before you go.",
    sections: [
      { h: "The Mughal Road and its history", p: ["The Mughal Road follows the route used by Mughal emperors to travel between Lahore and Kashmir, with sarais (rest houses) built along the way. The modern road was opened to traffic in 2009 and is an alternative link between the Kashmir valley and the Poonch and Rajouri districts of the Jammu region. It is a mountain road with sharp bends and steep sections, and it closes each winter under heavy snow."] },
      { h: "What to see at Peer Ki Gali", list: ["The pass itself, with snowfields and snow walls in late spring and early summer.", "The shrine of the Sufi saint Sheikh Ahmad Karim, after whom the pass is named.", "Aliabad Sarai, an old Mughal rest house on the Kashmir side below the pass.", "High meadows with Gujjar and Bakarwal herders in summer.", "Wide views over the Pir Panjal range."] },
      { h: "Route from Srinagar", list: ["Srinagar to Shopian, about 55 to 60 km, through apple country.", "Shopian to Peer Ki Gali, about 40 km up the Mughal Road via Heerpora.", "Allow about 3 to 3.5 hours from Srinagar.", "Continue to Bafliaz and Poonch on the other side if your plan includes the Jammu region."] },
      { h: "When is the Mughal Road open?", p: ["The Mughal Road is usually open from around May to late November, depending on snowfall, and closed for four to five months in winter. Even in the open season, it can close for a day after fresh snow or landslides, and traffic may be regulated with fixed timings. Check the current status with the traffic police control room or your agent before setting out."] },
      { h: "Best time to visit", list: ["May to June: snowfields at the pass, cool and dramatic.", "July to August: green meadows and herders' camps.", "September to October: clear skies and autumn colours.", "November: cold; closures possible after the first snow."] },
      { h: "Tips for the drive", list: ["Start early and return before dark; there are few facilities on the pass.", "Carry warm layers even in summer; the pass is cold and windy.", "Altitude: walk slowly at the top; about 3,490 m is higher than Gulmarg's Gondola Phase 1.", "Carry snacks, water and cash.", "Use an experienced local driver; the road has steep, winding sections."] },
      { h: "Combining Peer Ki Gali with south Kashmir", p: ["A day to Peer Ki Gali pairs well with Shopian's orchards and Aharbal waterfall on the way back. With more time, cross the Mughal Road to Poonch and Rajouri, then return to Jammu, turning it into a loop through both regions."] },
    ],
    faqs: [
      { q: "What is the altitude of Peer Ki Gali?", a: "About 3,490 m (around 11,450 ft), the highest point on the Mughal Road." },
      { q: "How far is Peer Ki Gali from Srinagar?", a: "Roughly 95 to 100 km via Shopian, about 3 to 3.5 hours by road." },
      { q: "When is the Mughal Road open?", a: "Usually from about May to late November, depending on snow. It is closed in winter." },
      { q: "Is there snow at Peer Ki Gali in summer?", a: "Yes, snowfields usually remain at the pass into early summer." },
      { q: "Can I visit Peer Ki Gali on a day trip from Srinagar?", a: "Yes, with an early start, returning before dark." },
      { q: "What is Aliabad Sarai?", a: "An old Mughal rest house on the Kashmir side of the Mughal Road, below Peer Ki Gali." },
    ],
  },
  {
    slug: "yusmarg-travel-guide",
    title: "Yusmarg Travel Guide: Distance from Srinagar, Nilnag Lake, Best Time and Day Plan",
    description:
      "Yusmarg, Budgam's pine-ringed meadow: distance from Srinagar, the walk or pony ride to Nilnag lake, Doodh Ganga river, best time, food and a day plan.",
    category: "Weekend Trips",
    destination: "kashmir",
    city: "yusmarg",
    date: D,
    intro:
      "Yusmarg is a quiet meadow at about 2,400 m in Budgam district, about 50 km south-west of Srinagar, 1.5 hours by road via Budgam and Chrar-e-Sharif. Ringed by pine and fir forest with the Pir Panjal peaks behind, it is one of the easiest and calmest day trips from Srinagar. The highlights are the walk or pony ride to Nilnag lake (about 4 km), the Doodh Ganga river flowing over rocks below the meadow, and long picnics on the grass. Local tradition links the name to Jesus (Yus), adding a layer of legend to the place.",
    sections: [
      { h: "How to reach Yusmarg", p: ["Drive from Srinagar via Budgam to Chrar-e-Sharif, home of the shrine of the Sufi saint Sheikh Noor-ud-Din Noorani, and on up to Yusmarg: about 50 km, 1.5 hours. A private cab for the day is the easiest option. Srinagar airport is about 45 km away; Budgam is the nearest railway station."] },
      { h: "Things to do in Yusmarg", list: ["Nilnag lake: a forest lake about 4 km from the meadow, by pony or on foot.", "Doodh Ganga: the river runs fast and white below the meadow; good for riverside walks and picnics.", "Meadow walks and photography with the Pir Panjal behind.", "Pony rides at association rates.", "Visit the Chrar-e-Sharif shrine on the way."] },
      { h: "Best time to visit", list: ["April to June: green meadows, cool air, snow on the peaks.", "July to September: lush and quiet; occasional rain.", "October: autumn colours and crisp days.", "December to February: snow-covered; the road may close after heavy snowfall."] },
      { h: "A Yusmarg day plan", days: ["Leave Srinagar at 8:30 am; stop at Chrar-e-Sharif.", "Reach Yusmarg by about 10:30 am; walk or ride to Nilnag lake.", "Picnic lunch by the Doodh Ganga.", "Afternoon walk on the meadow; leave by 4 pm for Srinagar."] },
      { h: "Where to stay and eat", p: ["Yusmarg has tourism department huts and a few small stays; most visitors return to Srinagar the same day. Food is simple: tea stalls, Maggi and rice meals in season. Carry snacks and water, especially outside summer."] },
      { h: "Yusmarg or Doodhpathri?", p: ["Both are Budgam meadows about 40 to 50 km from Srinagar. Doodhpathri is wider and greener with the Shaliganga running through it; Yusmarg is more enclosed by forest and has the Nilnag lake walk. If you have time for one, choose Doodhpathri for open meadows or Yusmarg for forest and a lake."] },
      { h: "Tips", list: ["Agree pony rates and the Nilnag route before starting.", "Wear walking shoes; the forest path can be muddy.", "Carry a jacket; the meadow is cool even in summer.", "Mobile signal is patchy."] },
    ],
    faqs: [
      { q: "How far is Yusmarg from Srinagar?", a: "About 50 km, 1.5 hours by road via Budgam and Chrar-e-Sharif." },
      { q: "Is Yusmarg worth visiting?", a: "Yes, for a quiet forest meadow and the Nilnag lake walk close to Srinagar." },
      { q: "How far is Nilnag lake from Yusmarg?", a: "About 4 km, on foot or by pony." },
      { q: "What is the best time to visit Yusmarg?", a: "April to October; winter brings snow but the road can close." },
      { q: "Can I visit Yusmarg and Doodhpathri on the same day?", a: "It is possible but rushed. Both are better on separate days." },
      { q: "Why is it called Yusmarg?", a: "Local tradition links the name to Jesus (Yus), meaning the meadow of Jesus." },
    ],
  },
  {
    slug: "things-to-do-in-gurez-valley",
    title: "Things to Do in Gurez Valley: Habba Khatoon Peak, Kishanganga, Villages and Treks",
    description:
      "Things to do in Gurez: Habba Khatoon peak, Kishanganga river, Dawar, Tulail and Chakwali villages, Razdan Pass, trout fishing, camping, treks, permits and timing.",
    category: "Adventure",
    destination: "kashmir",
    city: "gurez",
    date: D,
    intro:
      "Gurez is a remote valley on the Kishanganga river, about 141 km north of Srinagar over the 3,300 m Razdan Pass. It is home to the Dard-Shina community, with log-built wooden houses, terraced fields and the pyramid-shaped Habba Khatoon peak rising above Dawar, the main village. The best things to do are slow ones: walks along the Kishanganga, visits to villages such as Tulail and Chakwali, the drive over Razdan, trout fishing with a permit, camping and short treks. Gurez is open from about late May to October, needs a permit, and is best with two or three nights.",
    sections: [
      { h: "Habba Khatoon peak and spring", p: ["The pyramid-shaped peak above Dawar is named after Habba Khatoon, the 16th-century Kashmiri poet-queen who, according to local legend, wandered these hills. A spring at the foot of the peak bears her name. It is the defining view of Gurez, especially at sunrise and sunset."] },
      { h: "The Kishanganga river", p: ["The Kishanganga flows through the length of the valley, clear and fast, before crossing the Line of Control as the Neelum. Riverside walks, picnics and simply sitting by the water are among the best things to do. Trout fishing is possible in season with a permit from the fisheries department."] },
      { h: "Villages: Dawar, Tulail and Chakwali", list: ["Dawar: the main village, with markets, guesthouses and Habba Khatoon peak.", "Tulail: further up the valley, with wide fields and traditional log houses; the road is slower.", "Chakwali and other hamlets: wooden villages and farming life, best seen with a local guide.", "Ask before photographing homes and people; Gurez is conservative and hospitable."] },
      { h: "Razdan Pass", p: ["The drive from Bandipora over Razdan Pass (about 3,300 m) is a highlight in itself, with views back over Wular Lake and the valley and snow on the pass into early summer. The road closes with the first heavy snow, usually in November, and reopens around late May or June."] },
      { h: "Camping and treks", list: ["Riverside camping near Dawar with local operators.", "Short walks to viewpoints above the villages.", "Longer treks into side valleys, only with registered local guides and permissions.", "Stargazing: very little light pollution."] },
      { h: "Permits, stays and practicalities", p: ["A permit or registration is needed for Gurez, arranged by agents with copies of ID in advance, and checked at the checkpoint on the way. Accommodation is in guesthouses, homestays, Hotel Grand Gurez and similar small hotels, tourism huts and camps, mostly in and around Dawar. Mobile coverage is limited; power can be intermittent. Carry cash."] },
      { h: "A 3-day Gurez plan", days: ["Srinagar to Gurez via Bandipora and Razdan Pass; evening at Dawar.", "Habba Khatoon spring, riverside walk, villages and sunset over the peak.", "Morning by the Kishanganga; drive back to Srinagar over Razdan."] },
    ],
    faqs: [
      { q: "What are the best things to do in Gurez?", a: "See Habba Khatoon peak, walk along the Kishanganga, visit Dawar, Tulail and Chakwali villages, cross Razdan Pass and camp by the river." },
      { q: "How far is Gurez from Srinagar?", a: "About 141 km over Razdan Pass, roughly 5 to 6 hours by road." },
      { q: "Do I need a permit for Gurez?", a: "Yes. Agents arrange it with copies of your ID before the trip." },
      { q: "When is Gurez open?", a: "From about late May or June to October; Razdan Pass closes with heavy snow." },
      { q: "How many days do I need in Gurez?", a: "Two to three nights to see the valley at a relaxed pace." },
      { q: "Is there fishing in Gurez?", a: "Yes, trout fishing in season with a fisheries department permit." },
    ],
  },
  {
    slug: "kashmir-great-lakes-trek-guide",
    title: "Kashmir Great Lakes Trek: Route, Distance, Difficulty, Season and How to Prepare",
    description:
      "Kashmir Great Lakes trek guide: Sonamarg to Naranag, about 70 km in 7 to 8 days, Gadsar Pass, the lakes, difficulty, best season, permits, fitness and packing.",
    category: "Adventure",
    destination: "kashmir",
    date: D,
    intro:
      "The Kashmir Great Lakes (KGL) trek is one of India's most beautiful high-altitude treks: about 68 to 76 km over 7 to 8 days from Sonamarg (Shitkadi) to Naranag, past a string of alpine lakes, Vishansar, Krishansar, Gadsar, Satsar, Gangabal and Nundkol, across flower-filled meadows and three high passes, the highest being Gadsar Pass at about 4,190 m. It is a moderate to difficult trek for fit beginners and experienced walkers, run from about July to mid-September. Go with a registered operator who handles permits, camps, food and safety.",
    sections: [
      { h: "Route and day-by-day plan", days: ["Srinagar to Sonamarg; camp at Shitkadi.", "Shitkadi to Nichnai over Shekdur ridge.", "Nichnai to Vishansar lake over Nichnai Pass.", "Vishansar to Gadsar via Gadsar Pass (about 4,190 m), passing Krishansar lake.", "Gadsar to Satsar lakes.", "Satsar to Gangabal twin lakes (Gangabal and Nundkol) over Zaj Pass.", "Gangabal to Naranag, a steep descent through forest; drive to Srinagar."] },
      { h: "The lakes", list: ["Vishansar and Krishansar: twin lakes below Gadsar Pass, often reflecting the peaks.", "Gadsar: a long lake fed by snowfields, wildflowers in August.", "Satsar: a chain of small lakes in a rocky valley.", "Gangabal and Nundkol: large twin lakes at the foot of Mount Harmukh, a classic final camp."] },
      { h: "Difficulty and fitness", p: ["KGL is rated moderate to difficult: long walking days of 6 to 8 hours, three passes above 4,000 m, rocky descents and the final steep descent to Naranag. Start training six to eight weeks before: walk or jog 5 km in under 35 to 40 minutes, climb stairs with a loaded backpack, and do leg and core strength work. Anyone with heart, lung or knee problems should consult a doctor."] },
      { h: "Best time to do the trek", list: ["July: wildflowers begin; some snow on the passes early in the month.", "August: peak flowers, full lakes, best overall conditions.", "Early to mid-September: clearer skies, colder nights, fewer trekkers.", "Outside July to mid-September: closed or unsafe due to snow."] },
      { h: "Permits, operators and safety", p: ["The trek passes through forest and border-adjacent areas, so permits and registration are required; operators handle them with your ID. Choose a registered operator with trained trek leaders, oxygen and first-aid kits, and good camp equipment. Weather can turn quickly; a spare day and a clear turnaround policy matter."] },
      { h: "Packing list", list: ["Trekking shoes with good grip, broken in before the trek.", "Layers: thermals, fleece, down jacket, waterproof shell.", "Warm cap, gloves, sunglasses and sunscreen.", "Backpack (40 to 50 litres) and a day pack if offloading.", "Water bottles, personal medicines and a headlamp."] },
      { h: "Getting there and back", p: ["Fly to Srinagar a day before the trek starts to rest. Operators usually pick up from Srinagar for the drive to Sonamarg and drop back from Naranag, about 2 hours from Srinagar. Build in a buffer day before your return flight."] },
    ],
    faqs: [
      { q: "How long is the Kashmir Great Lakes trek?", a: "About 68 to 76 km over 7 to 8 days, from Sonamarg (Shitkadi) to Naranag." },
      { q: "What is the highest point of the Kashmir Great Lakes trek?", a: "Gadsar Pass at about 4,190 m." },
      { q: "When is the best time for the Kashmir Great Lakes trek?", a: "July to mid-September, with August the best for flowers and full lakes." },
      { q: "Is the Kashmir Great Lakes trek difficult?", a: "Moderate to difficult: long days, three high passes and steep descents. Fit beginners can do it with training." },
      { q: "Do I need a permit for the Kashmir Great Lakes trek?", a: "Yes. Registered operators arrange permits and registration with your ID." },
      { q: "Which lakes do you see on the KGL trek?", a: "Vishansar, Krishansar, Gadsar, Satsar, Gangabal and Nundkol." },
    ],
  },
  {
    slug: "amarnath-helicopter-booking-guide",
    title: "Amarnath Helicopter Booking: Baltal and Pahalgam Routes, How to Book and Avoid Scams",
    description:
      "Amarnath helicopter booking guide: Baltal and Pahalgam to Panjtarni, booking only via official Shrine Board channels, registration rules, weather and scams.",
    category: "Pilgrimage",
    destination: "kashmir",
    date: D,
    intro:
      "During the Amarnath Yatra, helicopters fly pilgrims from Baltal (near Sonamarg) and from Pahalgam to Panjtarni, from where the holy cave is about 6 km on foot, by pony or by palanquin. Helicopter seats must be booked only through the official channels linked from the Shri Amarnathji Shrine Board (SASB) website, and a helicopter ticket is valid only with a confirmed yatra registration for the same date. Fake booking websites are common every year, so never pay through a link from social media, a search ad or an unofficial site. Fares and booking dates are announced by the Shrine Board each year.",
    sections: [
      { h: "Helicopter routes", list: ["Baltal to Panjtarni: the shorter, more popular route; Baltal is about 15 km from Sonamarg.", "Pahalgam (Neelgrath or Pahalgam helipad) to Panjtarni: from the Pahalgam side.", "From Panjtarni, the cave is about 6 km on foot, by pony or palanquin; allow several hours for the return.", "Some pilgrims fly one way and walk the other."] },
      { h: "How to book safely", list: ["Start from the Shri Amarnathji Shrine Board's official website and follow its links to authorised helicopter booking.", "Register for the yatra first; helicopter tickets need a valid registration for the same date.", "Use the same name and ID on both registration and ticket.", "Pay only on the official portal; never through WhatsApp, phone calls or social media ads.", "Save the e-ticket and carry a printout with original ID."] },
      { h: "Spotting helicopter booking scams", list: ["Websites with names that look official but are not linked from the Shrine Board site.", "Agents promising guaranteed seats for extra money or bank transfers.", "Discounts or 'last seats' offers on social media.", "Requests to pay to a personal UPI ID or bank account.", "If in doubt, check the Shrine Board website and helpline before paying."] },
      { h: "When booking opens", p: ["Helicopter booking usually opens some weeks before the yatra, after the Shrine Board announces the yatra dates and registration. Seats on the Baltal route sell out fastest. Watch the Shrine Board's announcements rather than third-party sites, which often publish guessed dates."] },
      { h: "Weather and cancellations", p: ["Helicopters fly only in good weather. Low cloud, rain or wind at Baltal, Pahalgam or Panjtarni can delay or cancel flights, sometimes for the whole day. Keep a buffer day in your plan, and check the cancellation and refund terms on the official booking page."] },
      { h: "Health and preparation", list: ["Get the Compulsory Health Certificate from an authorised doctor before registering.", "Panjtarni is at high altitude; walk slowly to the cave and stay hydrated.", "Carry warm clothes and rain gear; the weather changes quickly.", "Age limits apply as set by the Shrine Board (13 to 70 years)."] },
      { h: "Combining the yatra with Kashmir", p: ["Many pilgrims add Srinagar, Gulmarg and Sonamarg before or after the yatra. Keep sightseeing for after the yatra if possible, so weather delays do not cost you a darshan day. Agents can book hotels in Srinagar, Sonamarg or Pahalgam and transport to the helipads around your yatra date."] },
    ],
    faqs: [
      { q: "How do I book an Amarnath helicopter ticket?", a: "Only through the official channels linked from the Shri Amarnathji Shrine Board website, after registering for the yatra on the same date." },
      { q: "Which helicopter route is better, Baltal or Pahalgam?", a: "Baltal to Panjtarni is shorter and more popular; Pahalgam suits pilgrims staying on that side. Both land at Panjtarni, about 6 km from the cave." },
      { q: "Is yatra registration needed for the helicopter?", a: "Yes. A helicopter ticket is valid only with a confirmed yatra registration for the same date." },
      { q: "How far is the Amarnath cave from Panjtarni?", a: "About 6 km, on foot, by pony or by palanquin." },
      { q: "How can I avoid Amarnath helicopter booking fraud?", a: "Book only via links on the official Shrine Board site, never pay to personal accounts, and ignore social media offers." },
      { q: "What happens if the helicopter is cancelled due to weather?", a: "Flights are delayed or cancelled in bad weather. Keep a buffer day and check the refund terms on the official booking page." },
    ],
  },
];
