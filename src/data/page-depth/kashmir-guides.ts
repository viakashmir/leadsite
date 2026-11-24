// Written depth for the thin Kashmir guide pages (section, city and state
// guide pages) that trailed tdiholidayventures.com in the 24 November study
// (docs/competitors/tdi-very-deep-study-2026-11-24.md). Keyed by page path,
// rendered by PageDepth on guide pages. Code only, no database copy.
// Rules: checkable facts, no typed fares or prices, no em dashes; every FAQ
// question is specific to its page.

import type { PageDepthEntry } from "./index";

export const KASHMIR_GUIDES_DEPTH: Record<string, PageDepthEntry> = {
  "/kashmir-tourism/how-to-reach": {
    sections: [
      {
        h: "How do you reach Kashmir? The short answer",
        p: [
          "Most travellers fly into Srinagar, the summer capital and the base for almost every Kashmir trip. Srinagar International Airport has direct flights from Delhi in about 1.5 hours and from Mumbai, Bengaluru and several other Indian cities. Since 2025, you can also go all the way by train: fast trains from Delhi reach Shri Mata Vaishno Devi Katra in about 8 hours, and trains from Katra cross the Pir Panjal to Srinagar in about 3 hours. By road, the Jammu to Srinagar highway (NH44) takes 6 to 8 hours through the Chenani-Nashri and Banihal tunnels.",
          "Which one suits you depends on where you start, how much time you have and whether you want to add Vaishno Devi, Amritsar or Ladakh to the trip. The sections below compare the three, with the practical details that change the plan.",
        ],
      },
      {
        h: "Flying to Srinagar",
        p: [
          "Srinagar International Airport (SXR) is about 12 to 14 km from Dal Lake and the city centre, 30 to 45 minutes by road depending on traffic. Delhi has the most flights, with several airlines flying non-stop through the day. Mumbai has direct flights of about 2.5 to 3 hours. Bengaluru, Hyderabad, Chandigarh, Amritsar, Kolkata, Ahmedabad and other cities have direct flights on some days or seasons; otherwise, connect through Delhi. Jammu to Srinagar is a short hop of about 35 to 40 minutes, and there are flights between Srinagar and Leh in summer.",
          "Security at Srinagar airport is tighter than at most Indian airports. Vehicles are checked at a barrier on the approach road and passengers and bags are screened before entering the terminal, so allow at least two and a half to three hours before departure. Morning flights are less affected by afternoon weather in spring and winter. In winter, fog in Delhi can delay connections, so leave a long gap between flights or book both legs on one ticket.",
        ],
      },
      {
        h: "Going by train: Katra, the Chenab bridge and Srinagar",
        p: [
          "The Udhampur-Srinagar-Baramulla rail link, finished in 2025, connects the Kashmir valley to the national rail network. Trains from Shri Mata Vaishno Devi Katra run through a series of long tunnels under the Pir Panjal and over the Chenab bridge, the highest railway arch bridge in the world, and the Anji Khad bridge, India's first cable-stayed rail bridge, to reach Srinagar in about 3 hours. From Srinagar, local trains continue up the valley to Baramulla and down to Banihal.",
          "To reach Katra, fast trains including the Vande Bharat run from New Delhi in about 8 hours, and long-distance trains run from many cities to Katra and Jammu Tawi. Check current trains, days and timings on IRCTC, since services are still being added. The train suits travellers who want to visit Vaishno Devi, prefer not to fly, or want the scenery of the new line; book early in the summer holidays and around festivals.",
        ],
      },
      {
        h: "Driving to Kashmir: the Jammu to Srinagar highway",
        p: [
          "The main road into the valley is NH44 from Jammu to Srinagar, about 250 to 270 km. Two long tunnels have shortened it: the Chenani-Nashri tunnel (about 9 km, opened in 2017) bypasses Patnitop, and the Banihal tunnel (about 8.5 km, opened in 2021) takes the road under the Pir Panjal to Qazigund. The drive usually takes 6 to 8 hours. The Ramban stretch is prone to landslides and slow traffic after heavy rain, and snow can close the road for a day or two in winter; check the traffic advisory issued by the Jammu and Kashmir traffic police before setting out.",
          "From Delhi, Srinagar is about 800 km via Ambala, Jalandhar, Pathankot and Jammu, usually two days with a night in Jammu, Katra or Patnitop. From Punjab and Himachal, the same highway joins at Pathankot and Jammu. Buses run by the Jammu and Kashmir State Road Transport Corporation and private operators link Jammu and Srinagar, and shared taxis leave from Jammu in the morning.",
        ],
      },
      {
        h: "Other roads into Kashmir: Mughal Road and Zojila",
        p: [
          "The Mughal Road links Shopian in south Kashmir with Bufliaz and Poonch over Peer Ki Gali, at about 3,490 m. It is open only in the warmer months, usually from about May to November, and is closed for long periods after snow. It is a scenic alternative for travellers coming from Poonch and Rajouri, not a faster route from Jammu.",
          "From Ladakh, the Srinagar to Leh highway (NH1) crosses Zojila, about 3,528 m, and is usually open from about April or May to November or December. Travellers on a Kashmir and Ladakh trip often fly into one and drive out of the other, with nights in Kargil on the way.",
        ],
      },
      {
        h: "Distances from Srinagar to the main places",
        list: [
          "Gulmarg: about 50 km, 1.5 to 2 hours via Tangmarg",
          "Pahalgam: about 95 km, 2.5 to 3 hours via Anantnag",
          "Sonamarg: about 80 km, 2.5 to 3 hours via Ganderbal and Kangan",
          "Doodhpathri: about 42 km, 1.5 to 2 hours via Budgam",
          "Yusmarg: about 47 km, 1.5 to 2 hours via Charar-e-Sharif",
          "Gurez (Dawar): about 125 km, 5 to 6 hours via Bandipora and Razdan Pass",
          "Jammu: about 250 to 270 km, 6 to 8 hours by road, or about 3 hours by train to Katra plus the drive to Jammu",
          "Kargil: about 205 km, 6 to 7 hours over Zojila",
          "Leh: about 420 km, usually two days with a night in Kargil",
        ],
      },
      {
        h: "Getting around once you arrive",
        p: [
          "Most visitors hire a private cab with driver for the whole trip, usually included in a package. Two local rules shape every plan. In Pahalgam, outside cabs may not run sightseeing to Aru, Betaab or Chandanwari; you hire a union taxi from the Pahalgam stand at fixed rates. In Sonamarg, trips beyond the town towards Zojila and Zero Point are also by local union taxi. In Gulmarg, the drive ends in the town and ponies or the gondola take you higher.",
          "Inside Srinagar, autos and local taxis are easy to find, and the new trains run between Srinagar, Budgam and Baramulla and south to Anantnag and Banihal, useful for a day out but not for the main sightseeing places, which have no station. Self-drive cars are available in Srinagar for experienced drivers, but local permit and union rules still apply in Pahalgam and Sonamarg.",
        ],
      },
      {
        h: "Which way in is best for you?",
        list: [
          "Short trip from Delhi or Mumbai: fly direct to Srinagar.",
          "Trip with Vaishno Devi: train or fly to Katra or Jammu, do the yatra, then take the train from Katra to Srinagar.",
          "Family with a car from Punjab, Haryana or Delhi: drive via Jammu, breaking the journey for a night.",
          "Kashmir and Ladakh together: fly into Srinagar and out of Leh, or the reverse, driving over Zojila.",
          "From south or east India: fly with a connection in Delhi, or take a long-distance train to Katra if you want to see Vaishno Devi.",
        ],
      },
      {
        h: "Reaching Kashmir in winter",
        p: [
          "Flights to Srinagar run all winter, though snow and low cloud can delay or cancel some, especially in January. The Katra to Srinagar train runs through the winter and is often the most reliable link when the highway is affected by snow. The Jammu to Srinagar highway can close for a day or two after heavy snowfall near the Banihal tunnel and Qazigund. Keep a buffer day before your flight home, and check road and flight status the evening before you travel. Inside Kashmir, Gulmarg's last stretch from Tangmarg may need chains or a 4x4 after fresh snow, and Sonamarg is now reachable year-round through the Z-Morh tunnel.",
        ],
      },
      {
        h: "Documents and checks on the way",
        p: [
          "Indian travellers need a government photo ID, which is checked at the airport, hotels and some check posts. Prepaid mobile SIMs issued outside Jammu and Kashmir do not work in the valley, so carry a postpaid number or buy a local connection with ID. Foreign nationals need a valid Indian visa and passport; hotels register foreign guests with the police, and some border areas such as Gurez are not open to them. For Ladakh, an inner line permit is needed for areas such as Nubra and Pangong.",
        ],
      },
    ],
    faqs: [
      { q: "What is the nearest airport to Kashmir's tourist places?", a: "Srinagar International Airport (SXR). It is about 12 to 14 km from Dal Lake and is the starting point for Gulmarg, Pahalgam and Sonamarg." },
      { q: "How long does a non-stop Delhi to Srinagar flight take?", a: "About 1.5 hours non-stop. Delhi has the most daily flights to Srinagar of any city." },
      { q: "Is there a direct train to Srinagar from Delhi?", a: "Travellers change at Shri Mata Vaishno Devi Katra. Delhi to Katra takes about 8 hours on fast trains, and Katra to Srinagar about 3 hours. Check IRCTC for current trains." },
      { q: "When did the train to Srinagar start?", a: "The rail link from Katra to Srinagar opened in 2025, completing the Udhampur-Srinagar-Baramulla line across the Pir Panjal." },
      { q: "What is the Chenab bridge on the Kashmir railway?", a: "The highest railway arch bridge in the world, carrying the Katra to Srinagar line high above the Chenab river." },
      { q: "How long does the Jammu to Srinagar drive take?", a: "Usually 6 to 8 hours for about 250 to 270 km on NH44, through the Chenani-Nashri and Banihal tunnels." },
      { q: "How many days does a Delhi to Srinagar road trip take?", a: "About 800 km via Jammu, usually two days with a night in Jammu, Katra or Patnitop." },
      { q: "Does snow close NH44 between Jammu and Srinagar?", a: "Mostly, but snow near Banihal and Qazigund and landslides around Ramban can close it for a day or two. Check the traffic advisory before travelling." },
      { q: "How early should I reach Srinagar airport for a flight?", a: "At least two and a half to three hours before departure, because vehicles and passengers go through extra security checks." },
      { q: "What is the Mughal Road and when is it open?", a: "A mountain road from Shopian to Poonch over Peer Ki Gali, at about 3,490 m. It usually opens around May and closes with snow around November." },
      { q: "Can I reach Kashmir from Ladakh by road?", a: "Yes, by the Srinagar to Leh highway over Zojila, usually open from about April or May to November or December. Plan a night in Kargil." },
      { q: "Which is cheaper, flying or taking the train to Kashmir?", a: "It depends on dates and how early you book. Trains are usually cheaper but slower; flights save a day or more from most cities." },
      { q: "How do I get from Srinagar airport to Dal Lake?", a: "By prepaid taxi or your package cab, 30 to 45 minutes depending on traffic. Houseboat guests are taken across by shikara from the ghat." },
      { q: "Do outside cabs go to Aru and Betaab Valley from Pahalgam?", a: "No. Only Pahalgam union taxis are allowed to Aru, Betaab and Chandanwari, at fixed rates paid locally." },
      { q: "Can I drive my own car to Kashmir?", a: "Yes, via Jammu. Local union rules still apply in Pahalgam and Sonamarg, where sightseeing beyond the towns is by local taxi." },
      { q: "Are there buses from Jammu to Srinagar?", a: "Yes, state transport and private buses run daily, and shared taxis leave Jammu in the morning." },
      { q: "Is the Katra to Srinagar train open in winter?", a: "Yes. It runs through the winter and is often the most reliable link when snow affects the highway." },
      { q: "What are the options for travelling from Mumbai to Kashmir?", a: "By direct flight to Srinagar, about 2.5 to 3 hours, or one-stop through Delhi. Long-distance trains run to Jammu and Katra in about 30 to 36 hours." },
      { q: "How do I reach Kashmir from Bengaluru or Chennai?", a: "Usually by air with a connection in Delhi, 5 to 7 hours in total; some direct flights operate on certain days or seasons." },
      { q: "Which documents do I need to travel into Kashmir?", a: "Indian travellers need only a photo ID. Some border areas and parts of Ladakh need permits, and foreign nationals may not visit Gurez." },
      { q: "Will my prepaid SIM work after I reach Kashmir?", a: "No. Prepaid SIMs issued outside Jammu and Kashmir do not work there. Carry a postpaid number or buy a local connection with ID." },
      { q: "Can I combine Vaishno Devi with reaching Kashmir?", a: "Yes. Go to Katra first, do the yatra, then take the train from Katra to Srinagar in about 3 hours." },
      { q: "How long is the drive from Srinagar airport straight to Gulmarg?", a: "About 55 to 60 km, roughly 2 hours by road via Tangmarg." },
      { q: "How long is the drive from Srinagar airport straight to Pahalgam?", a: "About 100 km, roughly 3 hours by road via Anantnag." },
      { q: "What is the best way to reach Kashmir for a short trip?", a: "Fly direct to Srinagar in the morning, so the first afternoon can be spent on Dal Lake." },
    ],
  },

  "/kashmir-tourism/gulmarg/best-time-to-visit": {
    sections: [
      {
        h: "When is the best time to visit Gulmarg? It depends on what you want",
        p: [
          "Gulmarg has two seasons that feel like different places. From late December to early March, it is a snow resort: the meadow is buried, the gondola carries skiers to Apharwat and the Tangmarg road may need chains. From late April to October, it is a high green meadow with wild flowers, pony rides, golf and the gondola up to the snow patches. Spring and late autumn are the quiet in-between weeks, cheaper and calmer, but with fewer things running.",
          "So the best month depends on your trip: January and February for reliable snow and skiing; March for snow with longer, sunnier days; May and June for green meadows and lingering snow at the top of the gondola; September and October for the clearest views and the fewest crowds.",
        ],
      },
      {
        h: "Gulmarg season by season",
        list: [
          "Winter (late December to February): deep snow, ski lessons and sledging, gondola to Apharwat when wind allows. Days around freezing, nights well below. Busiest around Christmas, New Year and the school winter break.",
          "Late winter (March): snow still good on the upper slopes, more sunshine, longer days. The Khelo India Winter Games have been held in Gulmarg in recent years in February or March.",
          "Spring (April to mid May): snow melts from the town meadow; slushy paths early in the season, then fresh green grass. Quiet and good value.",
          "Summer (late May to August): green meadow, flowers on the slopes, golf, pony rides to Khilanmarg, snow at Apharwat into June. June is the busiest summer month; July and August bring afternoon showers.",
          "Autumn (September to November): clear skies, golden grass and the best long views from the gondola. Cold nights; the first snowfall often comes in late November.",
        ],
      },
      {
        h: "When does it snow in Gulmarg?",
        p: [
          "The first snow usually falls on the upper slopes in November, and the town meadow is reliably white from about mid to late December. The deepest snow and most consistent skiing come in January and February, during Chillai Kalan, the coldest 40 days of the Kashmir winter, from 21 December to the end of January, and the weeks after it. Snow lingers on the meadow into March and on Apharwat well into June. Each winter is different: a dry December can delay the season, and a late storm can bring fresh powder in March.",
        ],
      },
      {
        h: "Best time for skiing in Gulmarg",
        p: [
          "For skiing, January and February are the most reliable months, with cold, dry powder on the upper slopes reached by the gondola's second phase. Beginners do well from late December to early March on the gentle slopes near the gondola base and at Kongdoori, with certified instructors or the courses run by the Indian Institute of Skiing and Mountaineering. Experienced off-piste skiers watch the daily avalanche advisories; storms can close Phase 2 for days, so ski weeks are planned with spare days.",
        ],
      },
      {
        h: "Best time for the Gulmarg Gondola",
        p: [
          "The gondola runs all year, weather permitting. For views, September and October are best, with clear air from the Apharwat station. For snow at the top in summer, go in May or June. For snow everywhere, go from late December to March, but expect closures of Phase 2 in high wind and heavy snow. In every season, book tickets online as soon as your dates are fixed and take a morning slot, when the weather is most often clear.",
        ],
      },
      {
        h: "Best time for flowers, golf and walks",
        p: [
          "Late May to July is the flower season, when the slopes above the meadow and the walk to Khilanmarg are dotted with alpine flowers. The Gulmarg golf course, one of the highest green courses in the world, is open in the snow-free months, roughly May to October. For walks to Khilanmarg and towards Alpather Lake with a guide, July to September is best, when the snow has cleared from the higher trails.",
        ],
      },
      {
        h: "When to avoid Gulmarg, or plan carefully",
        p: [
          "Christmas, New Year and the first half of January are the most crowded and expensive weeks; book rooms and gondola slots well ahead. Mid April can be muddy as the snow melts. July and August bring afternoon showers. In very heavy snow spells, the Tangmarg to Gulmarg road may be limited to vehicles with chains or four-wheel drive for a day. None of these makes a visit a bad idea, but each changes the plan.",
        ],
      },
      {
        h: "What to pack for each season",
        list: [
          "December to March: thermals, a down or heavy jacket, waterproof trousers, snow boots, gloves, a warm cap, sunglasses. Boots and coats can be rented in the market.",
          "April and May: a warm jacket, waterproof shoes for slushy paths, layers.",
          "June to August: a fleece and a rain jacket; it is cold at the top of the gondola even in July.",
          "September to November: a warm jacket for mornings and evenings, sunglasses and sunscreen.",
        ],
      },
      {
        h: "Day trip or overnight: does the season change it?",
        p: [
          "In summer, a day trip from Srinagar works well, leaving early and returning by evening. In winter, an overnight stay is better: roads are slower, the days are short and the snow is at its best early in the morning, before day visitors arrive. Gulmarg rooms are limited and fill quickly in the snow season and in June, so book them first.",
        ],
      },
    ],
    faqs: [
      { q: "Which month has the most snow in Gulmarg?", a: "January and February usually have the deepest and most reliable snow." },
      { q: "Is there snow in Gulmarg in March?", a: "Usually yes, on the meadow early in the month and on the upper slopes throughout, with sunnier, longer days." },
      { q: "Is there snow in Gulmarg in April?", a: "The town meadow usually melts during April, but Kongdoori and Apharwat keep snow." },
      { q: "Can I see snow in Gulmarg in May or June?", a: "Yes, at the top of the gondola near Apharwat. The town meadow is green by then." },
      { q: "When does the snow season start in Gulmarg?", a: "The first snow usually falls in November, and the meadow is reliably white from about mid to late December." },
      { q: "What is the best month for skiing in Gulmarg?", a: "January and February, for cold, dry powder. Beginners can learn from late December to early March." },
      { q: "When is Gulmarg green?", a: "From about late May to September, with flowers on the slopes in June and July." },
      { q: "Is Gulmarg worth visiting in October?", a: "Yes. The skies are clear, the meadow is golden and the gondola views are at their best, with fewer visitors." },
      { q: "Is Gulmarg crowded in December?", a: "Yes around Christmas and New Year. Book rooms and gondola slots well in advance." },
      { q: "How cold is Gulmarg in January?", a: "Days are around freezing and nights often fall to minus 10 or lower, colder at the top of the gondola." },
      { q: "What is the weather like in Gulmarg in July?", a: "Mild days in the high teens to low twenties, cool nights and afternoon showers." },
      { q: "When is the Gulmarg golf course open?", a: "In the snow-free months, roughly May to October." },
      { q: "When can I walk to Alpather Lake from Gulmarg?", a: "Usually July to September, with a guide, once the snow has cleared from the trail." },
      { q: "Is the Tangmarg to Gulmarg road open in winter?", a: "Yes, but after fresh snow it may be limited to vehicles with chains or four-wheel drive for a time." },
      { q: "Should I stay overnight in Gulmarg in winter?", a: "Yes if you can. The snow is best early in the morning, and the drive from Srinagar is slower in winter." },
      { q: "When were the Khelo India Winter Games held in Gulmarg?", a: "Recent editions have been held in Gulmarg in February or March." },
      { q: "Is the Gulmarg Gondola open in all seasons?", a: "Yes, weather permitting. Phase 2 to Apharwat closes most often in winter storms and high wind." },
      { q: "When is the cheapest time to visit Gulmarg?", a: "Usually April, early May and November, the quiet weeks between the main seasons." },
      { q: "What should I wear in Gulmarg in summer?", a: "Layers, a fleece and a rain jacket. It is cold at the top of the gondola even in July." },
      { q: "Can I visit Gulmarg during Chillai Kalan?", a: "Yes. Chillai Kalan, from 21 December to the end of January, brings the coldest weather and some of the best snow." },
      { q: "What is the best month for a Gulmarg honeymoon?", a: "January and February for snow, or September and October for clear, quiet days." },
      { q: "Is Gulmarg good in November?", a: "It is quiet and cold, often with the first snow late in the month, but skiing has not started." },
    ],
  },
  "/kashmir-tourism/pahalgam/best-time-to-visit": {
    sections: [
      {
        h: "When is the best time to visit Pahalgam?",
        p: [
          "Pahalgam is at its best from April to June and again in September and October. In spring and early summer, the Lidder runs high with snowmelt, the side valleys of Aru, Betaab and Chandanwari reopen as the snow clears, and the meadows turn bright green. In autumn, the skies clear, the willows and birches turn gold and the crowds thin out. July and August are warm and green but busy, with the Amarnath Yatra passing through. Winter turns Pahalgam into a quiet snow town, with the side valleys mostly closed.",
        ],
      },
      {
        h: "Pahalgam month by month",
        list: [
          "January and February: snow in town, frozen streams, very cold nights. Side valleys usually closed; a quiet, beautiful snow stay for a night or two.",
          "March: thaw begins; snow still in the valleys; few visitors.",
          "April: the road to Betaab, Aru and Chandanwari reopens as it is cleared; river high and fast; blossom on the way from Srinagar.",
          "May: green meadows, snow at Chandanwari, pleasant days; the season fills up.",
          "June: peak season with school holidays; warm days, cool evenings; rafting on the Lidder.",
          "July and August: the Amarnath Yatra starts from Chandanwari; roads busy and some access restricted; afternoon showers.",
          "September: clear, settled weather and fewer people; one of the best months.",
          "October: golden autumn, crisp air, cold nights.",
          "November and December: cold and quiet; first snow; side valleys start to close.",
        ],
      },
      {
        h: "Best time for Aru, Betaab and Chandanwari",
        p: [
          "The three side valleys are reached only by Pahalgam union taxi. Betaab and Aru usually reopen in April and are lovely from May to October. Chandanwari, the highest, has snow and its famous snow bridge from about late April to June, and then becomes the base of the Amarnath Yatra in July and August, when tourist access can be restricted. For all three in one day with snow at Chandanwari, May and early June are the best weeks.",
        ],
      },
      {
        h: "Pahalgam and the Amarnath Yatra",
        p: [
          "The Amarnath Yatra usually runs from late June or early July to August, with one of its two routes starting at Chandanwari above Pahalgam. During the yatra, the town is busy with pilgrims, security is tight, convoys use the road from Srinagar and access to Chandanwari for ordinary visitors can be restricted. If you are not on the yatra, plan Pahalgam for May, June, September or October; if you are, book stays early and register with the Shri Amarnathji Shrine Board.",
        ],
      },
      {
        h: "Is Pahalgam good in winter?",
        p: [
          "Yes, for a quiet snow stay. Pahalgam usually has snow from late December to February, and the town, the Lidder and the pine forest under snow are beautiful. Many hotels close or run with a reduced service, side valleys are mostly shut, and the cold is serious, so choose a hotel with good heating and confirm it is open. Gulmarg has more to do in snow; Pahalgam is for those who want calm.",
        ],
      },
      {
        h: "Best time for rafting and trout fishing",
        p: [
          "Rafting on the Lidder usually runs from about May to September with registered operators, paused when the river is too high in late spring. Trout fishing needs a licence from the Fisheries Department and is allowed in designated beats during the season the department sets; ask at the Pahalgam office.",
        ],
      },
      {
        h: "What Baisaran's closure means for planning",
        p: [
          "Baisaran meadow, the pony-ride meadow above Pahalgam, has been closed to visitors since April 2025. Plans built around Pahalgam now focus on the Lidder riverside, Aru, Betaab and Chandanwari. Check locally whether access has changed before your trip.",
        ],
      },
      {
        h: "What to pack for Pahalgam",
        list: [
          "April to June: layers, a light jacket, comfortable shoes, a warm layer for Chandanwari's snow.",
          "July and August: light clothes, a rain jacket, a fleece for evenings.",
          "September and October: a warm jacket for mornings and nights.",
          "December to February: thermals, a heavy jacket, snow boots, gloves and a cap.",
        ],
      },
    ],
    faqs: [
      { q: "Which is the best month to visit Pahalgam?", a: "May and September are often the best: green or golden valleys, open side valleys and pleasant days, without the July crowds." },
      { q: "Is there snow in Pahalgam in May?", a: "Not usually in town, but Chandanwari keeps snow and its snow bridge into May and often June." },
      { q: "In which month do union taxis start running to Chandanwari?", a: "Usually in April or May, once the road beyond Pahalgam is cleared of snow." },
      { q: "Is Pahalgam crowded in June?", a: "Yes, June is peak season with school holidays. Book stays early." },
      { q: "Can tourists visit Pahalgam during the Amarnath Yatra?", a: "Yes, but the town is busy and access to Chandanwari can be restricted. Check rules for July and August." },
      { q: "When is the Amarnath Yatra from Pahalgam?", a: "Usually from late June or early July to August, starting at Chandanwari." },
      { q: "Does it snow in Pahalgam in December?", a: "Often, especially late in the month. January and February are the most reliable snow months." },
      { q: "Are Aru and Betaab open in winter?", a: "Mostly not. Snow usually closes the roads beyond Pahalgam from about December to March or April." },
      { q: "What is the weather in Pahalgam in October?", a: "Crisp, sunny days and cold nights, with golden autumn colours along the Lidder." },
      { q: "When can I go rafting in Pahalgam?", a: "Usually from about May to September, with registered operators, when the Lidder is safe." },
      { q: "Is Baisaran open in Pahalgam?", a: "Baisaran has been closed to visitors since April 2025. Check locally for any change." },
      { q: "Is Pahalgam good for a honeymoon in winter?", a: "Yes for a quiet snow stay, if the hotel has good heating and is open. Gulmarg has more snow activities." },
      { q: "How cold is Pahalgam in January?", a: "Days are a few degrees above freezing and nights often fall to minus 5 to minus 9." },
      { q: "Is September a good time for Pahalgam?", a: "Yes, clear skies, fewer visitors and all side valleys open." },
      { q: "What is the cheapest time to visit Pahalgam?", a: "Usually March, early April and November, outside the main seasons." },
      { q: "When is trout fishing allowed in Pahalgam?", a: "In the season set by the Fisheries Department, in designated beats, with a licence." },
      { q: "How many days should I spend in Pahalgam in summer?", a: "Two nights: one day for Aru, Betaab and Chandanwari by union taxi, and one for the river and the town." },
      { q: "Do hotels in Pahalgam stay open in winter?", a: "Some close or run a reduced service. Confirm your hotel is open and heated before booking." },
      { q: "What should I pack for Pahalgam in April?", a: "Layers, a warm jacket for the evenings and Chandanwari's snow, and waterproof shoes." },
      { q: "Is Pahalgam better in spring or autumn?", a: "Spring for snowmelt, full rivers and snow at Chandanwari; autumn for clear skies, golden colours and fewer people." },
    ],
  },

  "/kashmir-tourism/srinagar/places-to-visit": {
    sections: [
      {
        h: "What are the top places to visit in Srinagar?",
        p: [
          "Srinagar's sights cluster around Dal Lake and the old city on the Jhelum. The lake itself comes first: a shikara ride past the houseboats, Char Chinar and the floating gardens. Along the eastern shore are the Mughal gardens, Shalimar Bagh, Nishat Bagh and Chashme Shahi, with Pari Mahal on the hill above them and the Tulip Garden open each spring. Hazratbal Shrine stands on the northern shore. On the hill in the middle of the city is the Shankaracharya Temple. Across town, the old city has the Jamia Masjid, the Khanqah-e-Moula, Hari Parbat fort and the craft lanes. Two full days cover the main sights at an easy pace.",
        ],
      },
      {
        h: "Srinagar sights by area",
        list: [
          "Dal Lake and the Boulevard: shikara rides, houseboats, Char Chinar, Nehru Park, the floating vegetable market at dawn, the lakeside promenade.",
          "Eastern shore (Zabarwan hills): Chashme Shahi, Pari Mahal, the Tulip Garden and Botanical Garden, Nishat Bagh, Shalimar Bagh, Harwan.",
          "Northern shore: Hazratbal Shrine, Naseem Bagh, the University of Kashmir, Nigeen Lake.",
          "Central hill: the Shankaracharya Temple, reached by road and about 240 steps.",
          "Old city: Jamia Masjid, Khanqah-e-Moula on the Jhelum, Hari Parbat fort with the Makhdoom Sahib shrine and Sharika Devi temple, Badamwari almond garden, craft workshops around Zaina Kadal.",
          "Further out: Dachigam National Park behind Harwan (with permission), Wular and Manasbal lakes, and the saffron fields of Pampore on the Pahalgam road.",
        ],
      },
      {
        h: "A two-day Srinagar plan",
        list: [
          "Day 1 morning: Chashme Shahi, Pari Mahal, Nishat Bagh and Shalimar Bagh (add the Tulip Garden from late March to April).",
          "Day 1 afternoon: Hazratbal Shrine and a slow drive back via Nigeen Lake; sunset shikara ride from the Boulevard.",
          "Day 2 morning: the Shankaracharya Temple for the view, then the old city: Jamia Masjid, Khanqah-e-Moula and the craft lanes.",
          "Day 2 afternoon: Hari Parbat and Badamwari, then shopping on Polo View or Residency Road.",
          "Optional dawn: the floating vegetable market by shikara, which starts around 5.30 am.",
        ],
      },
      {
        h: "Which Srinagar sights need tickets or rules?",
        p: [
          "The Mughal gardens, Pari Mahal, the Tulip Garden and Badamwari sell small entry tickets at the gate, with timings set by the Floriculture Department. Hazratbal and Jamia Masjid are free but are places of worship: dress modestly, cover your head where asked and avoid Friday prayer times. At the Shankaracharya Temple, phones and cameras are usually not allowed beyond the security check. Pari Mahal and Chashme Shahi are reached through a security area near the Raj Bhavan, so carry ID. Shikara rides are charged by the hour at rates displayed at the larger ghats.",
        ],
      },
      {
        h: "Best season for Srinagar's sights",
        p: [
          "March brings almond blossom at Badamwari. Late March to April is tulip season and the gardens are full of flowers. May and June are warm and busy. July and August bring lotus flowers on the northern Dal. Late October to mid November is chinar season, when the gardens turn red and gold. Winter is cold and quiet, with snow on the gardens and a partly frozen lake in the coldest spells.",
        ],
      },
      {
        h: "Srinagar sights for families and older travellers",
        p: [
          "The gardens, Hazratbal, the Boulevard and a shikara ride involve little walking and suit every age. The Shankaracharya Temple needs a climb of about 240 steps; Pari Mahal and the upper terraces of Nishat have some steps. In the old city, lanes are narrow and busy, so a guide helps. Children enjoy the floating market, the shikara rides and the open lawns of Nishat and Shalimar.",
        ],
      },
    ],
    faqs: [
      { q: "How many days do you need to see Srinagar?", a: "Two full days cover the main sights at an easy pace: the lake and Mughal gardens on one day, the old city and Shankaracharya Temple on the other." },
      { q: "What is the most famous place in Srinagar?", a: "Dal Lake, with its houseboats and shikaras, followed by the Mughal gardens of Shalimar and Nishat." },
      { q: "Which Mughal gardens are in Srinagar?", a: "Shalimar Bagh, Nishat Bagh, Chashme Shahi and Pari Mahal, all on the eastern side of Dal Lake." },
      { q: "Is the floating market in Srinagar worth it?", a: "Yes if you can get up early. It runs on the inner lake from about 5.30 to 7 am and is reached by shikara." },
      { q: "Which Srinagar places are good in winter?", a: "Dal Lake, Hazratbal, the old city and the Shankaracharya Temple. The gardens are bare but beautiful after snow." },
      { q: "Can you visit Hazratbal and the Mughal gardens on the same day?", a: "Yes. Hazratbal is about 20 minutes from Shalimar Bagh around the northern end of the lake." },
      { q: "What is there to see in old Srinagar?", a: "Jamia Masjid, the Khanqah-e-Moula, Hari Parbat fort, Badamwari and the craft lanes around Zaina Kadal." },
      { q: "When is the Tulip Garden in Srinagar open?", a: "For about three to four weeks each spring, usually from late March to around the third week of April." },
      { q: "Where is the best view of Srinagar?", a: "From the Shankaracharya Temple (no cameras) or Pari Mahal (cameras allowed), both above Dal Lake." },
      { q: "Do Srinagar's gardens have entry fees?", a: "Yes, small tickets at each gate, set by the Floriculture Department. Hazratbal and Jamia Masjid are free." },
      { q: "What is Badamwari in Srinagar?", a: "A historic almond orchard below Hari Parbat, restored as a garden, with blossom in March." },
      { q: "Can I visit Dachigam National Park from Srinagar?", a: "Yes, it lies behind Harwan, about 22 km from the city, and visits need permission from the Wildlife Department." },
      { q: "Is Nigeen Lake different from Dal Lake?", a: "Nigeen is a quieter, greener basin north of Dal, with fewer shikaras and a calmer houseboat stay." },
      { q: "When do the chinar trees turn red in Srinagar?", a: "Usually from late October to mid November, best in the first half of November." },
      { q: "Is Srinagar sightseeing suitable for seniors?", a: "Yes. The gardens, Hazratbal and shikara rides need little walking. The Shankaracharya Temple has about 240 steps." },
      { q: "What is the best order to see Srinagar's gardens?", a: "Chashme Shahi, Pari Mahal, Nishat Bagh, then Shalimar Bagh, the furthest along the lake." },
      { q: "Is Hari Parbat open to visitors?", a: "The hill and its shrines are visited regularly; access to the fort itself can be limited, so check locally." },
      { q: "Can I see lotus flowers on Dal Lake?", a: "Yes, in July and August on the northern parts of the lake near Hazratbal and Nigeen." },
      { q: "What should I wear to Srinagar's mosques and shrines?", a: "Modest clothes covering arms and legs; women should cover their heads. Remove shoes in the prayer areas." },
      { q: "Can I photograph inside the Shankaracharya Temple?", a: "Usually not. Phones and cameras are generally left at the security check." },
    ],
  },
  "/kashmir-tourism/things-to-do": {
    sections: [
      {
        h: "What are the best things to do in Kashmir?",
        p: [
          "A first Kashmir trip usually combines water, meadows and snow: a shikara ride and a houseboat night on Dal Lake, the Gulmarg Gondola, a union taxi round of Pahalgam's valleys, a pony ride or walk to Thajiwas Glacier in Sonamarg, and an afternoon in the Mughal gardens. Beyond those, Kashmir offers skiing, river rafting, trekking, golf, trout fishing, food walks, craft shopping and some of India's most beautiful drives. The list below is grouped by type, with the season and place for each.",
        ],
      },
      {
        h: "On the water",
        list: [
          "Shikara ride on Dal or Nigeen Lake: all year, best at sunset; an hour or more from the Boulevard ghats.",
          "Houseboat night: all year; heated boats in winter; Dal is livelier, Nigeen quieter.",
          "Floating vegetable market at dawn: all year, around 5.30 to 7 am on the inner Dal.",
          "River rafting: the Lidder near Pahalgam and the Sindh near Sonamarg, roughly May to September with registered operators.",
          "Kayaking and water sports on Dal: offered seasonally by tourism operators on the lake.",
        ],
      },
      {
        h: "In the snow",
        list: [
          "Gulmarg Gondola to Kongdoori and Apharwat: all year, snow at the top into June.",
          "Skiing and snowboarding in Gulmarg: late December to early March, with certified instructors or Institute of Skiing and Mountaineering courses.",
          "Sledging and snow scooters: Gulmarg in winter, Chandanwari and Thajiwas in spring and early summer.",
          "Snow at Zero Point beyond Zojila: from Sonamarg by union taxi when the pass is open, usually June to October.",
        ],
      },
      {
        h: "Meadows, valleys and walks",
        list: [
          "Pahalgam's Aru, Betaab and Chandanwari by union taxi: April or May to October.",
          "Pony ride or walk to Khilanmarg above Gulmarg: summer flowers, winter snow.",
          "Thajiwas Glacier from Sonamarg on foot or pony: May to October.",
          "Doodhpathri and Yusmarg: quiet meadow day trips from Srinagar, April to November.",
          "Gurez valley overnight: May to October, over Razdan Pass.",
        ],
      },
      {
        h: "Treks",
        list: [
          "Kashmir Great Lakes (about 7 days from near Sonamarg): July to mid September.",
          "Tarsar Marsar (5 to 7 days from Aru): July to September.",
          "Aru to Lidderwat and Kolahoi glacier base: June to September.",
          "Gangabal from Naranag, and shorter day hikes around Gulmarg and Pahalgam. Go with registered operators and guides.",
        ],
      },
      {
        h: "Culture, food and shopping",
        list: [
          "A wazwan meal: rista, gushtaba, rogan josh and more, in a Srinagar restaurant or on order.",
          "Kahwa and noon chai with Kashmiri breads from an old-city bakery in the morning.",
          "Old Srinagar: Jamia Masjid, Khanqah-e-Moula, Hari Parbat and the craft lanes.",
          "Watching craftspeople: pashmina spinning, carpet knotting, papier mache painting and walnut-wood carving.",
          "Saffron fields of Pampore in flower in late October and November.",
          "Shopping: pashmina and other shawls, carpets, papier mache, walnut wood, saffron and dry fruit.",
        ],
      },
      {
        h: "Other experiences",
        list: [
          "Golf at Gulmarg or Srinagar's Royal Springs course in the warmer months.",
          "Trout fishing with a Fisheries Department licence in Pahalgam, Kokernag and other designated beats.",
          "Paragliding near Sonamarg and Patnitop in season with registered operators.",
          "The Katra to Srinagar train over the Chenab and Anji bridges, for the scenery alone.",
          "Pilgrimages: Vaishno Devi from Katra, the Amarnath Yatra in summer, Kheer Bhawani at Tulmulla.",
        ],
      },
      {
        h: "Things to do by season",
        p: [
          "Spring (March to May): almond blossom, the Tulip Garden, snow at Chandanwari and Thajiwas, gardens in flower. Summer (June to August): meadows, rafting, treks, golf, lotus on Dal. Autumn (September to November): clear views, chinar colours, saffron harvest, treks into September. Winter (December to February): skiing, sledging, snow stays in Gulmarg and Pahalgam, warm wazwan meals and heated houseboats.",
        ],
      },
    ],
    faqs: [
      { q: "What are the top 10 things to do in Kashmir?", a: "A shikara ride, a houseboat night, the Gulmarg Gondola, Pahalgam's valleys, Thajiwas Glacier, the Mughal gardens, a wazwan meal, the old city, skiing in winter and rafting in summer." },
      { q: "What can you do in Kashmir in winter?", a: "Ski or sledge in Gulmarg, ride the gondola in snow, stay in a heated houseboat, and enjoy snow stays in Pahalgam." },
      { q: "What adventure activities are there in Kashmir?", a: "Skiing, snowboarding, river rafting, trekking, paragliding, ATV and snow scooter rides, and mountain biking in season." },
      { q: "Where can I go rafting in Kashmir?", a: "On the Lidder near Pahalgam and the Sindh near Sonamarg, roughly May to September, with registered operators." },
      { q: "Which treks are popular in Kashmir?", a: "Kashmir Great Lakes, Tarsar Marsar, Aru to Lidderwat and Kolahoi, and Gangabal from Naranag, mostly July to September." },
      { q: "Can I play golf in Kashmir?", a: "Yes, at Gulmarg and at the Royal Springs course in Srinagar, mainly in the warmer months." },
      { q: "Where can I see the saffron fields of Kashmir?", a: "In Pampore, on the road from Srinagar to Pahalgam. The flowers bloom in late October and November." },
      { q: "Which Kashmiri crafts are worth buying, and where?", a: "Pashmina and other shawls, carpets, papier mache, walnut wood, saffron and dry fruit, from shops you trust." },
      { q: "Is there paragliding in Kashmir?", a: "Yes, near Sonamarg and in the Patnitop area, in good weather with registered operators." },
      { q: "Can I go trout fishing in Kashmir?", a: "Yes, with a Fisheries Department licence, in designated beats on the Lidder, at Kokernag and elsewhere." },
      { q: "What is a wazwan?", a: "Kashmir's traditional multi-course feast of slow-cooked meat dishes such as rista, gushtaba and rogan josh, served at weddings and in restaurants." },
      { q: "What are the best things to do in Kashmir with kids?", a: "Shikara rides, the gondola's first phase, sledging, pony rides on the meadows and the open lawns of the Mughal gardens." },
      { q: "What can couples do in Kashmir?", a: "A sunset shikara, a houseboat night, a Gulmarg overnight, riverside evenings in Pahalgam and a photoshoot in the gardens." },
      { q: "Is the Katra to Srinagar train worth taking for the views?", a: "Yes. It crosses the Chenab and Anji bridges and runs through the Pir Panjal, one of India's most dramatic rail journeys." },
      { q: "What can I do in Kashmir in two days?", a: "Srinagar's lake and gardens on day one and a day trip to Gulmarg on day two." },
      { q: "What is unique about Kashmir compared to other hill stations?", a: "Houseboats and shikaras on a city lake, Mughal gardens, the Gulmarg Gondola and an old city with living craft traditions." },
      { q: "Can I see crafts being made in Kashmir?", a: "Yes, in old Srinagar's workshops: pashmina spinning, carpet knotting, papier mache painting and walnut-wood carving." },
      { q: "What are the best things to do in Kashmir in autumn?", a: "See the chinars in the Mughal gardens, the saffron fields in Pampore and clear views from the gondola." },
      { q: "Where can I see snow in Kashmir in summer?", a: "At the top of the Gulmarg Gondola in May and June, at Thajiwas Glacier and Zero Point near Sonamarg, and at Chandanwari above Pahalgam." },
      { q: "Is Kashmir good for a food trip?", a: "Yes: wazwan, harissa in winter, kahwa, noon chai, Kashmiri breads, trout and nadru (lotus stem) dishes." },
    ],
  },

  "/kashmir-tourism/culture-and-heritage": {
    sections: [
      {
        h: "Kashmir's heritage at a glance",
        list: [
          "Ancient temples: Martand sun temple (8th century), Avantipora (9th century), Pandrethan and the Shankaracharya Temple in Srinagar.",
          "Buddhist past: Harwan's patterned terracotta tiles and the long tradition linking Kashmir to Buddhist learning.",
          "Sufi shrines: Hazratbal, the Khanqah-e-Moula, Makhdoom Sahib on Hari Parbat and Charar-e-Sharif, the shrine of Sheikh Noor-ud-Din Noorani.",
          "Wooden mosques: Jamia Masjid with its 378 deodar pillars, and the Khanqah-e-Moula on the Jhelum.",
          "Mughal gardens: Shalimar, Nishat, Chashme Shahi, Pari Mahal, Achabal and Verinag.",
          "Living crafts: pashmina, kani and sozni shawls, carpets, papier mache, walnut-wood carving, copperware.",
        ],
      },
      {
        h: "Kashmir's poets and saints",
        p: [
          "Kashmiri culture is shaped by its poet-saints. Lal Ded, or Lalleshwari, a fourteenth-century Shaiva mystic, wrote short verses called vakhs that every Kashmiri knows. Sheikh Noor-ud-Din Noorani, known as Nund Rishi, founded the Rishi order of Sufis; his shrine at Charar-e-Sharif is revered by people of all faiths. Habba Khatoon, the sixteenth-century poet queen, gave Kashmiri its great love songs. Visitors hear their words in music, at shrines and in everyday speech.",
        ],
      },
      {
        h: "Festivals worth planning around",
        list: [
          "Eid-ul-Fitr and Eid-ul-Adha: city-wide celebrations, prayers at Hazratbal and Jamia Masjid.",
          "Eid-e-Milad un-Nabi: night-long prayers and the display of the relic at Hazratbal.",
          "Herath (Mahashivratri): the most important festival for Kashmiri Pandits, in February or March.",
          "Kheer Bhawani mela at Tulmulla: on Jyeshtha Ashtami, usually in May or June.",
          "Tulip Festival: in the Tulip Garden in early April.",
          "Navroz and spring blossom: almond trees flower at Badamwari in March.",
        ],
      },
      {
        h: "Etiquette for visitors",
        p: [
          "Dress modestly, especially at shrines and in the old city. Remove shoes and cover your head in mosques and shrines. Ask before photographing people, particularly women. During Ramadan, avoid eating in public in the old city during the day as a courtesy. Kashmiris are famously hospitable: accepting a cup of kahwa or noon chai is part of any visit to a shop or home.",
        ],
      },
    ],
    faqs: [
      { q: "Who was Lal Ded?", a: "A fourteenth-century Kashmiri Shaiva mystic and poet whose short verses, called vakhs, are still widely quoted in Kashmir." },
      { q: "Who was Nund Rishi?", a: "Sheikh Noor-ud-Din Noorani, founder of the Rishi order of Sufis. His shrine at Charar-e-Sharif is revered across faiths." },
      { q: "What is the oldest temple in Kashmir to visit?", a: "The ruins of Martand sun temple near Anantnag, from the eighth century, and the Shankaracharya Temple site in Srinagar are among the oldest." },
      { q: "What is special about Jamia Masjid in Srinagar?", a: "Its courtyard is ringed by 378 deodar wood pillars, and the mosque was first built around 1400." },
      { q: "How do Kashmiri Pandits celebrate Herath?", a: "Mahashivratri as celebrated by Kashmiri Pandits, their most important festival, in February or March." },
      { q: "Which day is the Kheer Bhawani mela at Tulmulla held?", a: "On Jyeshtha Ashtami, usually in May or June, at the Kheer Bhawani temple in Tulmulla." },
      { q: "What are the famous crafts of Kashmir?", a: "Pashmina, kani and sozni shawls, hand-knotted carpets, papier mache, walnut-wood carving and copperware." },
      { q: "What should visitors wear in Kashmir?", a: "Modest clothes covering arms and legs, and a head covering for women at shrines and mosques." },
      { q: "Can non-Muslims visit Kashmir's shrines?", a: "Yes, respectfully, outside prayer times, with shoes off and heads covered. Some inner areas are restricted." },
      { q: "What language is spoken in Kashmir?", a: "Kashmiri is the main language in the valley; Urdu, Hindi and English are widely understood in tourist areas." },
      { q: "What are the Rishi shrines of Kashmir?", a: "Shrines of the Rishi order of Sufis founded by Nund Rishi, such as Charar-e-Sharif, known for simplicity and tolerance." },
      { q: "Can I see Harwan's ancient tiles?", a: "Harwan, near Shalimar Bagh, has the remains of a Buddhist site known for patterned terracotta tiles; check access locally." },
    ],
  },
  "/kashmir-tourism/local-food": {
    sections: [
      {
        h: "Kashmiri food at a glance",
        list: [
          "Wazwan: the multi-course feast of slow-cooked meat, with rista, gushtaba, rogan josh, tabak maaz, kebabs and yakhni.",
          "Vegetarian classics: dum aloo, haak (collard greens), nadru yakhni (lotus stem in yoghurt), rajma with Kashmiri rice, chaman (paneer) dishes.",
          "Breads: girda, lavasa, bakarkhani, kulcha and tsot from neighbourhood bakeries, eaten with tea in the morning.",
          "Drinks: kahwa, sweet green tea with saffron and almonds, and noon chai, the pink salt tea.",
          "Winter specials: harissa, slow-cooked mutton sold in the old city from about November to March.",
          "Sweets and snacks: phirni, shufta, roasted corn by the lake, and dry fruit and walnuts.",
        ],
      },
      {
        h: "Where to eat in Srinagar",
        p: [
          "For wazwan, choose an established Kashmiri restaurant on the Boulevard, in Lal Chowk or around Residency Road, or order through your houseboat or hotel. For breads and noon chai, go to an old-city bakery early in the morning. Harissa shops in the old city open before dawn in winter and sell out by mid morning. Lakeside cafes on the Boulevard serve kahwa and snacks with a view. Vegetarian, North Indian and South Indian food is easy to find near the Boulevard and Dal Gate.",
        ],
      },
      {
        h: "Food for different diets",
        p: [
          "Halal food is the norm across Kashmir. Vegetarians eat well: Kashmiri Pandit cuisine is rich in vegetarian dishes, and most hotels cook vegetarian meals on request. Jain meals without onion, garlic or root vegetables can be arranged with notice. Mention dietary needs when you book, especially for houseboats, Pahalgam hotels and Gurez homestays, where kitchens are small.",
        ],
      },
    ],
    faqs: [
      { q: "What is rista and gushtaba?", a: "Two wazwan dishes of pounded meatballs: rista in a red, spiced gravy and gushtaba in a white yoghurt gravy, usually served last." },
      { q: "How is Kashmiri noon chai made, and when is it drunk?", a: "Kashmir's pink salt tea, made with tea leaves, milk, salt and baking soda, drunk with breads in the morning." },
      { q: "Should I order kahwa or noon chai, and how do they differ?", a: "Kahwa is a sweet green tea with saffron, cardamom and almonds; noon chai is a salty pink milk tea." },
      { q: "When can I eat harissa in Srinagar?", a: "In winter, roughly November to March, from old-city shops that open before dawn and sell out by mid morning." },
      { q: "Which Kashmiri dishes can vegetarians order?", a: "Yes. Kashmiri Pandit cuisine has many vegetarian dishes, and hotels cook vegetarian meals on request." },
      { q: "How do I arrange Jain meals on a Kashmir trip?", a: "Yes, with advance notice to your hotel or agent." },
      { q: "How is nadru (lotus stem) cooked in Kashmir?", a: "Lotus stem from the lakes, cooked in yoghurt as nadru yakhni or fried as a snack." },
      { q: "Where can I eat a wazwan in Srinagar?", a: "At established Kashmiri restaurants on the Boulevard, in Lal Chowk or Residency Road, or by order through your hotel or houseboat." },
      { q: "What breads are eaten in Kashmir?", a: "Girda, lavasa, bakarkhani, kulcha and tsot, bought fresh from neighbourhood bakeries." },
      { q: "Is the food in Kashmir spicy?", a: "Kashmiri dishes are aromatic rather than very hot; Kashmiri chilli gives colour more than heat." },
      { q: "Is halal food available everywhere in Kashmir?", a: "Yes, halal food is the norm across the valley." },
      { q: "What sweets are famous in Kashmir?", a: "Phirni, shufta (dry fruit in syrup) and the sweet breads from local bakeries." },
    ],
  },
};
