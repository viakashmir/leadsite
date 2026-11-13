// Depth pass 2 (2026-11-13): guide copy for the Kashmir and Ladakh database
// pages that still trailed tdiholidayventures.com (Katra, Tso Moriri, Aru
// Valley, four Kashmir from-city pages and the family and honeymoon themes).
// Merged after kashmir-depth.ts by data/content/index.ts and by the one-time
// kashmir-depth-push endpoint, additively (new blocks and FAQs only).
// No typed fares or prices, no em dashes.

import type { GuideContent } from "@/lib/locations";

export const KASHMIR_DEPTH_2_DESTINATIONS: Record<string, Partial<GuideContent>> = {
  kashmir: {
    packages: {
      themes: {
        "family-packages": {
          blocks: [
            {
              heading: "How to pace a Kashmir family trip",
              body: "Families enjoy Kashmir most with two or three bases rather than a new hotel every night. A common pattern is three nights in Srinagar (with one on a houseboat), one or two in Pahalgam and one in Gulmarg, with Sonamarg as a day trip. Keep drives under three hours where possible, start sightseeing after breakfast rather than at dawn, and leave the afternoon after a long drive free for rest. Children and grandparents tire at altitude, so plan the Gondola and Apharwat as a short morning visit and spend the afternoon on the Gulmarg meadow.",
            },
          ],
          faqs: [
            { q: "What age is suitable for a Kashmir family trip?", a: "Any age, with planning. Toddlers and grandparents do best on slower trips with two or three bases, short drives and heated rooms in winter." },
          ],
        },
        "honeymoon-packages": {
          blocks: [
            {
              heading: "Small touches couples ask for",
              body: "Couples often ask agents to add a decorated room or houseboat on arrival, a private shikara ride at sunset, a candlelight dinner, a professional photoshoot in the Mughal gardens or on the Gulmarg meadow, and a night in a room with a lake or river view. Ask which of these are included, which cost extra and which depend on the hotel, and get them listed in the confirmation. In winter, a heated room with good insulation matters more than any decoration, so check that first.",
            },
          ],
        },
      },
      fromOrigins: {
        amritsar: {
          blocks: [
            {
              heading: "Amritsar to Kashmir by road: what the drive is like",
              body: "The road from Amritsar runs through Pathankot to Jammu, then climbs the Jammu to Srinagar highway through Udhampur, the Chenani-Nashri tunnel and the Banihal tunnel to the Kashmir valley. It is a long day, usually 10 to 12 hours for about 450 km, so many families break the journey in Jammu, Katra or Patnitop. The highway can slow down after rain or snow on the Ramban stretch, so check the road status before leaving.",
            },
          ],
          faqs: [
            { q: "Can I combine the Golden Temple and Kashmir in one trip?", a: "Yes. Many travellers spend a day in Amritsar for the Golden Temple and Wagah border, then fly to Srinagar or drive via Jammu." },
          ],
        },
        indore: {
          blocks: [
            {
              heading: "Best months for travellers from Indore",
              body: "Travellers from Indore often choose May and June, when school holidays line up with the best of Kashmir's summer, or October for clear skies and fewer crowds. For snow, December to February works well, but pack proper winter clothing, since Kashmir's winter is far colder than Malwa's. Diwali week and the Navratri period are popular for combined Vaishno Devi and Kashmir trips, so book Katra and Srinagar stays early in those weeks.",
            },
          ],
        },
        kochi: {
          blocks: [
            {
              heading: "Best months for travellers from Kochi",
              body: "Kerala's school holidays in April and May match Kashmir's spring, when the Tulip Garden and Mughal gardens are in bloom and the hill stations are green. October and November suit travellers who want quieter roads after the summer rush. Many Malayali travellers go in December or January for their first snow; if you do, carry proper woollens, thermals and waterproof shoes, which are easier to buy at home than in Srinagar.",
            },
          ],
        },
        nagpur: {
          blocks: [
            {
              heading: "Nagpur to Kashmir by train",
              body: "A few long-distance trains from south and central India pass through Nagpur on their way to Jammu Tawi or Katra, and the rest of the options mean changing in Delhi; check current schedules on IRCTC. With the Vande Bharat now running from Katra to Srinagar, a train journey to Katra lets you add Vaishno Devi on the way. Flights via Delhi or Mumbai are quicker, and many travellers fly in and take the train out, or the other way round.",
            },
            {
              heading: "Best months for travellers from Nagpur",
              body: "Nagpur's hot summer makes April to June the most popular time to escape to Kashmir, with cool days in Pahalgam and Gulmarg. October suits travellers who want clear weather and thinner crowds. For snow, plan for January and February, and allow a buffer day around flights, since connections via Delhi or Mumbai can be affected by fog or weather in winter.",
            },
          ],
        },
      },
    },
  },
};

export const KASHMIR_DEPTH_2_CITIES: Record<string, Partial<GuideContent>> = {
  katra: {
    blocks: [
      {
        heading: "How many days to keep for Katra",
        body: "Keep two nights: one to arrive, register and rest, and one after the yatra so you are not rushing back down to catch a train or flight the same night. Add a third day for Shiv Khori or a relaxed start towards Patnitop or Srinagar.",
      },
      {
        heading: "Katra in winter",
        body: "From December to February, Katra itself stays cool rather than freezing, but the Bhawan and Bhairon are cold at night and sometimes get snow. The track remains open, and winter brings shorter queues outside holiday weeks. Carry warm clothes, gloves and a cap, start the climb in daylight if you dislike the cold, and expect occasional helicopter and ropeway suspensions in bad weather.",
      },
      {
        heading: "Hotels near the railway station versus the bazaar",
        body: "Hotels near Shri Mata Vaishno Devi Katra station suit pilgrims arriving by an early or late train and those leaving for Srinagar on the Vande Bharat. Hotels in the main bazaar and near the bus stand are closer to restaurants, shops and the registration counters, and a short drive or walk from Banganga. The Shrine Board's own accommodation in Katra and along the track is good value and booked on its official site.",
      },
      {
        heading: "Navratri at Vaishno Devi",
        body: "Navratri, held twice a year in spring (Chaitra) and autumn (Ashwin), is the busiest time at Vaishno Devi. The Bhawan is decorated, special prayers are held and the track is crowded day and night. If you plan to travel during Navratri, register online early, book Katra hotels and the helicopter well in advance, and expect longer waits for darshan. The weeks just before and after Navratri are calmer while the weather stays pleasant.",
      },
      {
        heading: "Bhairon temple and the ropeway",
        body: "Tradition holds that the yatra is complete only after a visit to Bhairon temple, about 1.5 km above the Bhawan. The path is steep, so many pilgrims use the passenger ropeway that links the Bhawan area with Bhairon in a few minutes. Tickets are sold by the Shrine Board at the ropeway station and online. In winter, Bhairon can get snow, and the ropeway may stop in high wind, so check before setting out.",
      },
      {
        heading: "What to carry for the climb",
        body: "Carry your RFID card and ID, a light jacket or shawl (the Bhawan is cool at night even in summer, and cold in winter), comfortable walking shoes, a water bottle, any regular medicines, a small torch and some cash. Leave valuables, large bags, leather goods and electronics other than a phone at your hotel or in the cloakrooms. Rain gear is useful from July to September.",
      },
      {
        heading: "Linking Katra with a Kashmir holiday",
        body: "Katra is the natural first stop for pilgrims who also want to see Kashmir. The Vande Bharat from Katra reaches Srinagar in about three hours, so you can finish the yatra, rest a night and be in Srinagar by the next afternoon. By road, the drive via the Jammu to Srinagar highway takes six to eight hours, with Patnitop as a pleasant break. Plan the yatra first, while you are fresh, and keep the Kashmir days relaxed.",
      },
      {
        heading: "How to reach Katra",
        body: "By train: Shri Mata Vaishno Devi Katra station has direct trains from Delhi, including the Vande Bharat, and from many other cities, and the Vande Bharat from Katra to Srinagar now links the yatra with the Kashmir valley in about three hours. By air: the nearest airport is Jammu, about 50 km away, roughly 1.5 to 2 hours by taxi. By road: Katra is about 50 km from Jammu via Domel, and buses and shared taxis run from the Jammu bus stand and railway station through the day.",
      },
      {
        heading: "Yatra registration and the RFID card",
        body: "Every pilgrim must register and carry an RFID yatra card, which is checked at Banganga before the climb. You can register online on the Shri Mata Vaishno Devi Shrine Board website or app, then collect the card at the counters in Katra (near the bus stand, at the railway station and at the Niharika complex), or register directly at those counters with an original photo ID. The card is valid for a fixed number of hours from issue, so collect it shortly before you start the climb.",
      },
      {
        heading: "Ways to reach the Bhawan",
        body: "On foot: about 12 to 13 km from Banganga on a paved, lit track with shelters, water points and food stalls; most pilgrims take six to eight hours up and four to five down. Pony, palki or pithu: registered with the Shrine Board, with rates displayed at the counters. Battery car: runs on the newer track from Adhkuwari to near the Bhawan, mainly for elderly and differently-abled pilgrims, booked at Adhkuwari. Helicopter: from Katra to Sanjichhat, about 2.5 km from the Bhawan, booked only through the Shrine Board's official website or app. Ropeway: links the Bhawan with Bhairon temple, saving a steep climb.",
      },
      {
        heading: "Where pilgrims stop along the track",
        body: "Banganga, at the start, is where pilgrims traditionally take a dip in the stream. Charan Paduka, about 1.5 km on, has the footprints of the Goddess. Adhkuwari, about halfway, has the Garbh Joon cave, where pilgrims crawl through a narrow passage after waiting their turn. Sanjichhat is the highest point near the helipad. After darshan at the Bhawan, many pilgrims continue about 1.5 km uphill, or take the ropeway, to Bhairon temple, completing the yatra.",
      },
      {
        heading: "Darshan timings and the best time to climb",
        body: "Darshan at the Bhawan usually runs through the day and night, apart from short closures for the morning and evening aarti. Many pilgrims start the climb in the evening or at night to avoid the heat and the day crowds, and reach the Bhawan by early morning. In summer, the lower track can be hot in the afternoon; in winter, the upper section is cold at night and Bhairon can get snow. Navratri and summer holidays bring the biggest crowds, so registration counters and the track are busiest then.",
      },
      {
        heading: "Day trips from Katra",
        body: "Shiv Khori, a cave shrine of Lord Shiva in Reasi district, is about 80 km away, a popular full-day trip with a short walk to the cave. Baba Dhansar, a spring and waterfall shrine, is about 15 km away. Nau Devi temple is close to town. The Chenab rail bridge near Reasi, the world's highest railway arch bridge, can be seen on the train to Srinagar. Patnitop, a pine-forested hill resort, is about 85 km away and makes a good stop on the road to Kashmir.",
      },
      {
        heading: "Food, shopping and rules in Katra",
        body: "Katra is a pilgrimage town: only vegetarian food is served, and the sale of alcohol and meat is not allowed. Restaurants serve north Indian thalis, South Indian dishes and Rajma Chawal, a Jammu favourite. Shops near the main bazaar sell prasad, chunris, dry fruits such as walnuts and almonds, kalari cheese from the Jammu hills and woollens. Leather goods, mobile phones, bags and electronics are not allowed beyond a point on the track; use the cloakrooms near Banganga.",
      },
      {
        heading: "Katra for elderly and differently-abled pilgrims",
        body: "Elderly pilgrims usually take the helicopter to Sanjichhat, or a pony or palki from Banganga, and the battery car from Adhkuwari on the newer track. Wheelchairs can be hired along the track. Book the helicopter early, carry medicines and warm clothes, and keep the yatra day free of other plans. Hotels near the bus stand and Banganga road keep transfers short.",
      },
    ],
    faqs: [
      { q: "Can I store luggage in Katra during the yatra?", a: "Yes. Your hotel will usually keep bags, and the Shrine Board runs cloakrooms near the registration counters and at Banganga, where bags, phones beyond the allowed limit and leather items can be left." },
      { q: "Is Katra crowded during Navratri?", a: "Yes. Navratri in spring and autumn is the busiest time; book stays, registration and helicopter tickets early." },
      { q: "Is there a ropeway to Bhairon temple?", a: "Yes. A ropeway links the Bhawan area with Bhairon temple, saving a steep 1.5 km climb." },
      { q: "How far is Katra from Jammu?", a: "About 50 km, roughly 1.5 to 2 hours by road." },
      { q: "Is there a direct train from Delhi to Katra?", a: "Yes, several, including the Vande Bharat, to Shri Mata Vaishno Devi Katra station." },
      { q: "Can I do the Vaishno Devi yatra in one day?", a: "Yes. Many pilgrims climb, take darshan and return within a day, especially by helicopter, pony or the battery car." },
      { q: "Is the RFID card mandatory?", a: "Yes. Every pilgrim needs a valid RFID yatra card, checked at Banganga." },
      { q: "What is the best time to visit Katra?", a: "March to June and September to November for comfortable weather; Navratri and summer holidays are the busiest." },
      { q: "How far is Shiv Khori from Katra?", a: "About 80 km, a full-day trip by road." },
    ],
  },

  "tso-moriri": {
    blocks: [
      {
        heading: "Tso Moriri checklist",
        body: "Two or more nights in Leh before going, plus a trip to Nubra or Pangong if possible. Inner Line Permit (Indians) or Protected Area Permit (foreigners), with several printed copies and original ID. Full fuel tank from Leh or Karu. Cash, warm clothing, sunscreen, sunglasses, a torch and a power bank. A booked homestay or camp at Korzok, confirmed by phone. A plan to descend quickly if anyone feels unwell.",
      },
      {
        heading: "Where Tso Moriri fits in a Ladakh trip",
        body: "Most travellers add Tso Moriri to a 7 to 9 day Ladakh trip after Leh sightseeing, Nubra and Pangong, when they are best acclimatised. It suits travellers who want quiet, birds and wide open landscapes rather than famous film locations. If time is short, Pangong is the easier lake; if you have two extra days and want fewer crowds, choose Tso Moriri.",
      },
      {
        heading: "Tso Moriri month by month",
        body: "May: the lake is still partly frozen, the road may be snowy beyond Sumdo and few camps are open. June: ice melts, birds arrive and homestays reopen; nights are close to freezing. July: the warmest month, with green marshes, nesting birds and the most visitors. August: still warm by day, with occasional rain on the way through the Indus valley. September: clear skies, fewer people and colder nights, an excellent month for photographs. October: very cold nights, most camps closing and the first snow possible. November to April: the lake freezes, the village is snowbound and only well-equipped winter travellers go.",
      },
      {
        heading: "Birdwatching at Tso Moriri",
        body: "The lake and the marshes around it are among the best high-altitude birding spots in India. Bar-headed geese and great crested grebes nest on the shores and islands in summer, brown-headed gulls are common, and the rare black-necked crane breeds in the wetlands of the wider Changthang plateau. Walk quietly along the shore in the early morning, keep a respectful distance from nesting birds, and use binoculars or a long lens rather than approaching. Local guides in Korzok know where birds are feeding on any given day.",
      },
      {
        heading: "Tso Moriri for families and older travellers",
        body: "Tso Moriri is possible for families and older travellers who acclimatise properly in Leh first, but its altitude, long drive and basic facilities make it harder than Pangong. If anyone in the group has heart, lung or blood pressure conditions, consult a doctor first and consider Pangong instead. Children should be watched for signs of altitude sickness, which they may not describe clearly. Carry a portable oxygen can, keep the day easy and drive back down if anyone feels unwell.",
      },
      {
        heading: "Permits for Tso Moriri, step by step",
        body: "Indian visitors apply online for the Inner Line Permit through the Ladakh administration's permit portal, paying the environment and wildlife fees, and print several copies; most agents and hotels in Leh can help. Foreign nationals need a Protected Area Permit arranged through a registered travel agent in Leh, usually for a group of two or more. Permits are checked at Mahe bridge, so carry the printouts and original ID.",
      },
      {
        heading: "A 2-day trip from Leh to Tso Moriri",
        body: "Day 1: leave Leh early, drive along the Indus via Upshi, Kiari and Chumathang, stop at the hot springs, cross Mahe bridge for the permit check and reach Korzok by afternoon; walk by the lake before sunset. Day 2: early morning by the lake for birds and still water, visit Korzok monastery, then return to Leh, or continue to Tso Kar and Puga if you have a third day.",
      },
      {
        heading: "Packing for Tso Moriri",
        body: "Pack a down jacket, thermal layers, a warm cap, gloves, sunglasses, high-SPF sunscreen and lip balm, even in summer. Nights drop below freezing. Carry cash, since there are no ATMs at Korzok, and basic medicines for headaches and stomach upsets. Power can be limited to a few evening hours, so bring a power bank and a torch.",
      },
      {
        heading: "Food and facilities at Korzok",
        body: "Homestays and camps serve simple meals: rice, dal, vegetables, thukpa and momos, with butter tea or black tea. Running hot water and electricity are limited. Mobile coverage is weak, so tell family you will be out of reach for a day or two. There is a basic health centre in the village; serious cases go back to Leh.",
      },
      {
        heading: "Why Tso Moriri is protected",
        body: "Tso Moriri and its wetlands are a Ramsar site, a wetland of international importance, and lie within the Changthang Wildlife Sanctuary. The lake is a breeding ground for bar-headed geese and great crested grebes, and black-necked cranes breed in the marshes nearby. Kiang (Tibetan wild ass), marmots and blue sheep are seen on the plateau, and Himalayan wolves and snow leopards live in the surrounding mountains. Camping on the lake shore, driving off the roads and leaving waste are not allowed; stay at registered camps and homestays.",
      },
      {
        heading: "Altitude and acclimatisation",
        body: "At about 4,500 m, Tso Moriri is higher than Pangong, and nights are cold even in July and August. Visit only after at least two nights in Leh and ideally a trip to Nubra or Pangong first. Drink plenty of water, avoid alcohol, walk slowly and sleep with enough layers. If you develop a severe headache, breathlessness at rest, confusion or vomiting, descend immediately and seek medical help; there are basic medical facilities at Korzok and larger ones in Leh.",
      },
      {
        heading: "The route from Leh, stop by stop",
        body: "The usual route leaves Leh past Upshi along the Indus, through Kiari and Chumathang, known for its hot springs, then to Mahe bridge, where permits are checked. From there the road climbs past Sumdo and up to the Changthang plateau, reaching Korzok on the western shore. It is about 220 to 240 km and takes six to seven hours. Fuel is scarce beyond Upshi, so fill up in Leh or Karu.",
      },
      {
        heading: "Combining Tso Moriri with Tso Kar and Pangong",
        body: "Tso Moriri can be combined with Tso Kar, a smaller salt lake about 2 to 3 hours away via Polokongka La, and with Puga, a valley known for its hot springs and sulphur deposits. Travellers coming from Manali on the Leh highway sometimes detour to Tso Kar and Tso Moriri before reaching Leh. Some itineraries link Pangong and Tso Moriri via Chushul and Hanle; this route depends on permits and road conditions, so ask a Leh agent before planning it.",
      },
      {
        heading: "Korzok monastery",
        body: "Korzok Gompa, about 300 years old, belongs to the Drukpa lineage of Tibetan Buddhism and overlooks the lake from the village. Visitors are welcome in the main prayer hall, where photography may not be allowed. The annual Korzok Gustor festival, with masked cham dances, is held in summer; its date follows the Tibetan calendar, so check locally.",
      },
      {
        heading: "Best time to visit Tso Moriri",
        body: "June to September is the main season, when the road is open, camps and homestays are working and the lake is ice-free. July and August bring migratory birds and the warmest days, though nights are still near freezing. May and October are possible with warm clothing, but some facilities are closed. From November to April, the lake freezes, temperatures drop far below zero and very few travellers go.",
      },
      {
        heading: "Responsible travel at Tso Moriri",
        body: "Carry your waste back to Leh, avoid plastic bottles by refilling water, keep away from bird nesting areas and do not feed wildlife. Ask before photographing people in Korzok, and support homestays and local guides to keep tourism money in the village.",
      },
    ],
    faqs: [
      { q: "Can I camp on the shore of Tso Moriri?", a: "No. Camping on the lake shore is not allowed to protect the wetland and nesting birds; stay at the registered camps and homestays in Korzok instead." },
      { q: "Can foreigners visit Tso Moriri?", a: "Yes, with a Protected Area Permit arranged through a registered Leh travel agent." },
      { q: "How long should I stay at Tso Moriri?", a: "One night is the usual plan; two nights suit birdwatchers and photographers." },
      { q: "Is Tso Moriri a Ramsar site?", a: "Yes. Tso Moriri and its wetlands are designated a wetland of international importance under the Ramsar Convention." },
      { q: "Can I stay overnight at Tso Moriri?", a: "Yes, at camps and homestays in Korzok. Nights are very cold, so carry warm clothing." },
      { q: "Is there mobile network at Tso Moriri?", a: "Limited. Some postpaid networks work around Korzok, but expect weak or no signal." },
      { q: "Which is better, Pangong or Tso Moriri?", a: "Pangong is closer and easier; Tso Moriri is higher, quieter and better for wildlife and solitude." },
      { q: "When does Tso Moriri freeze?", a: "Usually from November or December until April." },
    ],
  },
};

export const KASHMIR_DEPTH_2_PLACES: Record<string, Partial<GuideContent>> = {
  "pahalgam/places-to-visit/aru-valley": {
    blocks: [
      {
        heading: "Is Aru Valley worth visiting?",
        body: "Yes, for most travellers it is the most rewarding of Pahalgam's three valleys. Betaab is prettier in a landscaped way and Chandanwari has the snow, but Aru gives you the widest open meadow, a working village, river views framed by forest and snow peaks, and real trails leading on into the mountains. It is calmer than Betaab on busy days and works for every kind of visitor, from small children on ponies to trekkers heading for Lidderwat and Tarsar. If you can only spend a few hours beyond Pahalgam town, spend them in Aru.",
      },
      {
        heading: "Planning checklist for Aru",
        body: "Confirm with your hotel that Aru is open on your date, especially in spring, late autumn and winter. Hire the union taxi from the stand in Pahalgam and agree the waiting time. Carry water, snacks, sunscreen and a warm layer. Agree pony routes and rates at the start. Keep children away from the river. Carry cash for tea, ponies and the taxi. If you plan to walk towards Lidderwat, take a registered guide and start early.",
      },
      {
        heading: "Who lives in Aru",
        body: "Aru is a small village of Kashmiri families and, in summer, of Gujjar and Bakarwal herders who bring sheep, goats and buffalo to the high pastures around the valley. Their seasonal camps and log huts are part of the landscape. Be respectful: ask before photographing people or homes, keep away from the animals and buy tea or snacks from local stalls.",
      },
      {
        heading: "Aru Valley or Lidderwat: how far should you go?",
        body: "Most visitors spend their time on the main meadow at Aru, which is open, gentle and easy for all ages. Fit walkers with a full day can go on towards Lidderwat, about 11 km each way, but it is a long round trip and is better done as an overnight with a guide. A pony ride for an hour or two to the viewpoints above Aru is a good middle ground for families and older visitors.",
      },
      {
        heading: "Getting from Srinagar to Pahalgam for Aru",
        body: "Aru is visited from Pahalgam, about 90 to 95 km from Srinagar, usually two and a half to three hours by road. The route runs south-east along the Jhelum via Pampore's saffron fields, the Awantipora temple ruins and Anantnag, then up the Lidder valley through Bijbehara and Aishmuqam. Your Srinagar cab drops you at your Pahalgam hotel; from there, a local union taxi takes you the last 12 km to Aru. Most visitors stay at least one night in Pahalgam so that Aru, Betaab and Chandanwari can be seen at an easy pace.",
      },
      {
        heading: "Aru Valley month by month",
        body: "April and May: snow melts from the meadow, the river runs high and the peaks stay white; mornings are cold. June: green grass, first wildflowers and the start of trekking season. July and August: the warmest, busiest months, with herders' camps on the slopes and occasional afternoon showers. September: clear skies and fewer visitors, often the best month for treks. October: golden meadow and crisp air. November to March: snow, with the road open only on cleared days.",
      },
      {
        heading: "Lidderwat and the Kolahoi glacier in more detail",
        body: "The walk from Aru to Lidderwat follows the West Lidder upstream through pine and birch forest and open meadows, gaining a few hundred metres over about 11 km. Lidderwat sits where the Kolahoi and Tarsar streams meet, with a forest rest house and camping grounds. The Kolahoi glacier base, below Kolahoi peak, is a long day further up the valley and is usually done as an overnight from Lidderwat. These are proper treks, not casual walks: go with a registered guide, carry warm clothing and check the current rules and weather in Pahalgam first.",
      },
      {
        heading: "What to wear and carry at Aru",
        body: "Wear comfortable walking shoes with grip, since the meadow can be wet and the river banks are rocky. Carry a warm layer even in summer, a rain jacket from June to August, sunglasses and sunscreen, water and snacks. In winter, wear snow boots, gloves and a warm jacket. Cash is useful for pony rides, tea and the union taxi.",
      },
      {
        heading: "Food and facilities at Aru",
        body: "Aru has a handful of tea stalls, small dhabas and simple guest houses that serve tea, Maggi, rice and dal and basic Kashmiri dishes in season. Toilets are basic. Mobile signal is patchy, so arrange your return time with the union taxi driver before setting off on a walk or pony ride.",
      },
      {
        heading: "Safety at Aru Valley",
        body: "The river is cold and fast, especially from April to June, so stay back from the banks and never let children paddle alone. Weather changes quickly; head back if clouds build over the peaks. Black bears live in the surrounding forests, so do not walk into the forest alone at dawn or dusk and do not leave food out. Follow the instructions of local authorities and security personnel, and check in Pahalgam that Aru is open before you go.",
      },
      {
        heading: "Aru in a 2-night Pahalgam plan",
        body: "Night 1: arrive in Pahalgam from Srinagar by early afternoon and walk along the Lidder. Day 2: union taxi round to Aru in the morning, Betaab Valley around midday and Chandanwari in the afternoon. Night 2 in Pahalgam. Day 3: optional pony ride to Baisaran or a morning at Aru again, then drive back to Srinagar or on to your next stop.",
      },
      {
        heading: "How the Pahalgam union taxi system works for Aru",
        body: "Outside cabs and private cars from Srinagar are not allowed to run sightseeing trips beyond Pahalgam town. Visitors hire a local union taxi from the stand near the main market for Aru, Betaab Valley and Chandanwari. Rates are fixed by the union for each route and displayed at the stand. You can take Aru alone, or a round covering two or three valleys in a day. Keep your ticket or slip, agree the waiting time at each stop, and ask how long the driver will wait at Aru before returning.",
      },
      {
        heading: "Treks that start from Aru",
        body: "Aru is the trailhead for some of Kashmir's best-known treks. Lidderwat, about 11 km away, is a meadow at the meeting of streams, reached in four to five hours. From Lidderwat, the trail continues to the Kolahoi glacier base, a long day. The Tarsar Marsar trek, one of the most popular in Kashmir, also starts at Aru and takes five to seven days. Trekkers need a registered local guide, and some routes need permission from the authorities; check the current rules in Pahalgam.",
      },
      {
        heading: "Overa-Aru Wildlife Sanctuary",
        body: "Aru lies within the Overa-Aru Wildlife Sanctuary, a protected forest and alpine area. The sanctuary is home to Himalayan black bears, musk deer and many birds. Keep to trails, avoid feeding animals and carry your rubbish out.",
      },
      {
        heading: "A half-day and a full-day plan for Aru",
        body: "Half day: leave Pahalgam by union taxi after breakfast, walk across the meadow and along the river, take a short pony ride, have tea in the village and return for lunch. Full day: combine Aru with Betaab Valley in the morning and Chandanwari in the afternoon, using a union taxi round. For a quiet experience, go early, before the day visitors from Srinagar reach Pahalgam.",
      },
      {
        heading: "Aru Valley in winter",
        body: "In winter, Aru is covered in snow, and the road from Pahalgam may close after heavy snowfall. On clear days when it is open, Aru is a beautiful place for snow walks and has been used for cross-country skiing and winter sports events. Ask the union stand in Pahalgam whether the road is open before planning a winter visit, and carry snow boots and warm layers.",
      },
      {
        heading: "Ponies in Aru",
        body: "Pony owners at Aru offer rides to viewpoints, nearby meadows and towards Lidderwat. Rates are set for standard routes; agree the route, duration and price before starting. Ponies suit children and older visitors who want to see more than the main meadow, but riders should hold on firmly on steep or rocky stretches.",
      },
      {
        heading: "Photography tips for Aru",
        body: "Morning light from the east lights up the meadow and peaks, while late afternoon gives warm light on the slopes. Spring brings fresh green grass and snow on the peaks; autumn turns the meadow golden. Ask before photographing herders and their families. A wide-angle lens captures the valley; a telephoto lens helps for wildlife and distant peaks.",
      },
      {
        heading: "Aru Valley for families",
        body: "Aru suits families with children of all ages: the meadow is wide and gentle, there is space to run and picnic, and pony rides are a highlight. Keep children away from the river, which is cold and fast, especially in spring and early summer. Toilets and food are basic, so carry snacks, water and wet wipes.",
      },
      {
        heading: "Aru compared with Betaab and Chandanwari",
        body: "Betaab Valley is a landscaped park with paths and a river, easiest for elderly visitors and small children. Aru is a working village and meadow, more open and natural, with trekking trails. Chandanwari is higher, with a snow bridge in early summer, and is the start of the Amarnath Yatra route. If you have time for only one, choose Aru for open space and views, Betaab for easy walking and Chandanwari for snow.",
      },
    ],
    faqs: [
      { q: "Is there a fee to enter Aru Valley?", a: "Aru is an open village meadow; what visitors mainly pay for is the Pahalgam union taxi, pony rides and any guide. If an entry or parking fee applies in your season, it is collected locally, so carry some cash." },
      { q: "How do I get from Srinagar to Aru Valley?", a: "Drive to Pahalgam (about 90 to 95 km, two and a half to three hours), then take a Pahalgam union taxi for the last 12 km." },
      { q: "What is the best month to visit Aru Valley?", a: "June to October for green meadows and treks; September is often the clearest and least crowded." },
      { q: "Can private cabs go to Aru Valley?", a: "No. Visitors must hire a Pahalgam union taxi for Aru, Betaab and Chandanwari." },
      { q: "How long should I spend in Aru Valley?", a: "Two to three hours for a relaxed visit, or a full day if you add a pony ride or a walk towards Lidderwat." },
      { q: "Which treks start from Aru?", a: "Lidderwat, the Kolahoi glacier trek and the Tarsar Marsar trek all start from Aru." },
      { q: "Is Aru Valley good for children?", a: "Yes, it is wide and gentle, with pony rides and space to play; keep children away from the river." },
      { q: "Is Aru Valley a wildlife sanctuary?", a: "Aru lies within the Overa-Aru Wildlife Sanctuary." },
    ],
  },
};
