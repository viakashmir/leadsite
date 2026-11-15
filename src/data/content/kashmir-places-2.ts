// Kashmir place pages, batch 2 part 2 (2026-11-15): Gulmarg places. See
// kashmir-places-1.ts for the rules. No typed prices or fares; gondola and
// activity rates change each season and are set by the operators.

import type { GuideContent, MonthGuide } from "@/lib/locations";

// Gulmarg's climate by month at about 2,650 m (typical day and night ranges,
// rounded). Each place adds its own "good for" line.
const GULMARG_CLIMATE: [string, string, string][] = [
  ["January", "Day -2 to 3°C, night -11 to -6°C", "Deep winter: heavy snow cover, the core of the ski season, short and often brilliant days between storms."],
  ["February", "Day -1 to 4°C, night -10 to -5°C", "Still deep snow and excellent skiing; the Khelo India Winter Games have been held in Gulmarg in recent Februaries and Marches."],
  ["March", "Day 3 to 8°C, night -5 to -1°C", "Snow on the slopes, longer days and spring sun; late-season skiing continues."],
  ["April", "Day 8 to 13°C, night -1 to 3°C", "Snow melts from the town meadow; upper slopes stay white."],
  ["May", "Day 13 to 17°C, night 3 to 6°C", "Green meadow below, snow patches on Apharwat; flowers start."],
  ["June", "Day 17 to 21°C, night 6 to 9°C", "Summer season: green meadows, golf, pony rides and clear mornings."],
  ["July", "Day 19 to 23°C, night 9 to 12°C", "Warmest month, with afternoon showers and wild flowers on the slopes."],
  ["August", "Day 18 to 22°C, night 8 to 11°C", "Green and showery; quieter after mid-month."],
  ["September", "Day 15 to 20°C, night 4 to 8°C", "Clear, settled weather and long views; one of the best months for walks."],
  ["October", "Day 11 to 16°C, night 0 to 4°C", "Crisp, golden meadows and cold nights; first snow on the peaks late in the month."],
  ["November", "Day 5 to 10°C, night -4 to 0°C", "Cold and quiet; the first snowfall often comes in late November."],
  ["December", "Day 0 to 5°C, night -8 to -3°C", "Snow settles; the winter season and skiing begin, usually from mid to late December."],
];

const gulmargMonths = (goodFor: string[]): MonthGuide[] =>
  GULMARG_CLIMATE.map(([month, tempC, weather], i) => ({ month, tempC, weather, goodFor: goodFor[i] }));

export const KASHMIR_PLACES_2: Record<string, Partial<GuideContent>> = {
  "gulmarg/places-to-visit/gulmarg-gondola": {
    facts: [
      { label: "Operator", value: "Jammu and Kashmir Cable Car Corporation (JKCCC)" },
      { label: "Opened", value: "Phase 1 in 1998, Phase 2 in 2005" },
      { label: "Ride time", value: "About 9 to 12 minutes per phase" },
      { label: "Season", value: "All year, weather permitting; Phase 2 closes most often" },
      { label: "Booking", value: "Online on the official JKCCC portal, with ID; limited counter tickets" },
      { label: "Time needed", value: "Half a day for both phases with time at the top" },
    ],
    blocks: [
      {
        heading: "What is the Gulmarg Gondola?",
        body: "The Gulmarg Gondola is a two-stage cable car that carries visitors from the meadow resort of Gulmarg up the slopes of Mount Apharwat. It is one of the highest and longest cable cars in the world and the single most popular activity in Gulmarg. Phase 1 runs from the Gulmarg base station to Kongdoori, a bowl in the forest above the town. Phase 2 continues from Kongdoori to a station just below the Apharwat ridge, close to 4,000 m, where there is snow for most of the year.\n\nIn winter, the gondola is the main lift for skiers, and Phase 2 opens some of the best powder skiing in Asia. In summer, it takes families, pilgrims on the way to Alpather and day visitors from Srinagar up to the snow patches, wild flowers and mountain views that they would otherwise need a long trek to reach.",
      },
      {
        heading: "Phase 1 and Phase 2: what is the difference?",
        body: "Phase 1 goes from Gulmarg to Kongdoori in about 9 to 10 minutes. Kongdoori is a broad, sheltered bowl with snow from December to March, small food stalls, and in winter sledging, snow scooters and beginner ski slopes. It is the easier choice for families with small children, older travellers and anyone worried about the cold or altitude.\n\nPhase 2 goes from Kongdoori up to the Apharwat station in about 10 to 12 minutes, climbing steeply over rock and snow. At the top you step out into thin, cold air with wide views over the Pir Panjal and, in clear weather, distant Himalayan peaks to the north. Phase 2 is the experience most visitors remember, but it is also the phase most often closed by wind, snow or poor visibility. Tickets for each phase are sold separately, and you can only board Phase 2 at Kongdoori.",
      },
      {
        heading: "How to book Gulmarg Gondola tickets",
        body: "Tickets are sold online on the official portal of the Jammu and Kashmir Cable Car Corporation, the government company that runs the gondola. You choose the date, the phase and a time slot, and you need a valid photo ID for each passenger, which is checked at the station. In the busy months, especially April to June and the Christmas and New Year weeks, online slots for Phase 2 sell out days or weeks ahead, so book as soon as your Gulmarg date is fixed. A limited number of tickets may be sold at the counter on the day, but queues can be long and there is no guarantee.\n\nUse only the official portal or a trusted agent. Fake websites and touts selling gondola tickets at a premium have been reported, so check the website address carefully and never pay a stranger in Gulmarg for a ticket.",
      },
      {
        heading: "Gondola timings and when to go",
        body: "The gondola usually runs from about 10 am to 5 pm, with the last ride up earlier than the last ride down, and the timings vary by season. Arrive at the base station at least 30 minutes before your slot for the security and ID check. Mornings are generally the best time: the air is clearer for views, the wind is lighter, and if the weather closes in later, you will already have been up. In winter, morning snow conditions are best for skiers. Afternoon clouds are common in summer, so a morning slot is also better for photographs from Phase 2.",
      },
      {
        heading: "What happens if the gondola closes because of weather?",
        body: "High winds, heavy snowfall, storms and poor visibility can close Phase 2, and sometimes Phase 1, for hours or whole days. Closures are decided on the spot for safety. If your ride is cancelled, ask at the counter about the refund or rescheduling rules that apply to your booking, which are set by the operator. To reduce the risk, plan two nights in Gulmarg or a flexible day in your Srinagar stay, so that you can try again, and keep Phase 1 as a fallback if Phase 2 is closed. Do not be tempted by anyone offering to take you up when the gondola is officially shut.",
      },
      {
        heading: "Gulmarg Gondola in winter",
        body: "From mid December to March, the gondola serves Gulmarg's ski area. Phase 1 gives access to Kongdoori's gentler slopes, used for ski lessons and sledging. Phase 2 opens the high bowls and long off-piste runs off Apharwat that bring skiers and snowboarders from around the world, with descents of over a thousand metres back towards Gulmarg. Snow at the top is deep and cold, and the views across a white Pir Panjal are spectacular.\n\nNon-skiers come for the snow and the views, but should dress for real cold: at the top of Phase 2, temperatures can be well below minus ten degrees, with wind. Thermal layers, a heavy jacket, gloves, a warm cap, snow boots and sunglasses are essential. Ski equipment and snow boots can be rented in Gulmarg.",
      },
      {
        heading: "Gulmarg Gondola in summer",
        body: "From May to October, the gondola is the fastest way up the mountain. Kongdoori is green, with forest around it and snow patches lingering into June. At the Phase 2 station, there is usually snow in May and June and on the shaded slopes even later, and the views over the valley are at their clearest in September and October. Summer visitors walk on the snow, take pictures on the ridge and, if fit and properly equipped, walk or take a pony towards Alpather Lake. Even in summer, it is cold and windy at the top, so carry a warm jacket.",
      },
      {
        heading: "Altitude and health at the top",
        body: "The Phase 2 station is close to 4,000 m, high enough for many people to feel short of breath, light-headed or tired, especially if they came up from Srinagar the same morning. Move slowly, do not run on the snow, drink water and avoid heavy exertion. Most people are fine for an hour or two at the top. People with heart or lung conditions, high blood pressure, pregnant women, infants and anyone who has felt unwell at altitude before should talk to a doctor and consider staying at Phase 1. Come down if you develop a headache, nausea or dizziness.",
      },
      {
        heading: "Snow activities at Kongdoori and the top",
        body: "In winter, Kongdoori and the Gulmarg meadow are busy with sledges pulled by local operators, snow scooters, ATVs on snow and ski lessons. Rates for these are set by the local unions and the tourism authorities and are usually displayed; agree the price, route and time before you start. At the Phase 2 area, there are fewer activities and more open snow, which suits walking, photographs and skiing. Stay within the marked or patrolled areas: beyond them, slopes can be avalanche-prone, and parts of the ridge lie in a restricted security zone near the Line of Control.",
      },
      {
        heading: "How to reach the Gulmarg Gondola base station",
        body: "The base station is a short walk or pony ride from the Gulmarg bus stand and the main hotel area, about 1 km. Gulmarg itself is about 50 km from Srinagar, usually one and a half to two hours by road through Tangmarg. Outside cabs from Srinagar drop visitors in Gulmarg, and local ponies or a walk cover the last stretch to the gondola. In winter, after heavy snow, vehicles may need chains between Tangmarg and Gulmarg, and the police can restrict traffic, so leave early.",
      },
      {
        heading: "A Gulmarg gondola day trip from Srinagar",
        body: "Leave Srinagar at 7 or 7.30 am to reach Gulmarg by about 9.30, before the crowds. Take your booked Phase 1 slot around 10 am, then Phase 2 from Kongdoori. Spend 45 minutes to an hour at the top, come down by early afternoon, have lunch in Gulmarg, and walk or ride a pony around the meadow, St Mary's Church and the Maharani Temple. Leave by 4 pm to reach Srinagar before dark. In winter, start earlier, as the days are short and the road can be slow in snow.",
      },
      {
        heading: "Gondola with children and older travellers",
        body: "Children enjoy the ride and the snow at Kongdoori. For young children and older travellers, Phase 1 is usually enough: it gives snow in winter, forest views in summer and no serious altitude. If you take Phase 2 with family, keep the visit short, dress everyone warmly and watch for signs of altitude sickness. There is a walk and some steps at each station, and queues can involve standing for a while, so plan breaks. Wheelchair access is limited; ask at the base station about help with boarding.",
      },
      {
        heading: "A short history of the gondola",
        body: "Gulmarg has been a ski resort since the British era, when a ski club was formed in the 1920s, but for decades skiers had to climb or use small rope tows. The Jammu and Kashmir Cable Car Corporation built the gondola with French lift technology to change that. Phase 1 to Kongdoori opened in 1998, and Phase 2 to the Apharwat ridge followed in 2005, opening the high slopes to skiers and sightseers alike and putting Gulmarg on the map of international powder skiing. A chairlift from Kongdoori was added later for skiers.",
      },
      {
        heading: "Skiing from Apharwat: what to know",
        body: "The terrain off Phase 2 is big-mountain, ungroomed terrain, not a resort of marked pistes. Snow can be deep and excellent, but avalanches are a real risk, and the area has limited rescue services compared with Alpine resorts. Ski off Apharwat only if you are an experienced off-piste skier, with avalanche equipment (transceiver, shovel, probe) and preferably with a certified local guide who knows the day's conditions. Beginners and intermediates should stay on the slopes served by Phase 1 and the chairlift, where lessons are available from the Indian Institute of Skiing and Mountaineering and private instructors. Check the avalanche warnings issued for the area and the ski patrol's advice before going up.",
      },
      {
        heading: "What to wear for the gondola, season by season",
        body: "December to March: thermal inner layers, a fleece, a heavy insulated jacket, waterproof trousers, snow boots, gloves, a warm cap and sunglasses or goggles. Snow boots and jackets can be rented in Gulmarg if you did not bring them. April to June: a warm jacket and closed shoes, plus sunglasses, as the snow at the top is bright. July to October: a fleece or light down jacket for Phase 2, even when it is warm in Gulmarg, and a rain layer for afternoon showers. In every season, sunscreen matters at altitude.",
      },
      {
        heading: "Food, toilets and facilities at the stations",
        body: "The base station and Kongdoori have small cafeterias and stalls serving tea, kahwa, coffee, Maggi and simple snacks, and toilets. Facilities at the Phase 2 station are more basic. Carry water and a snack, especially in winter, when queues and weather delays can stretch the day. There are no proper restaurants up the mountain; plan lunch in Gulmarg before or after the ride.",
      },
      {
        heading: "Photography from the gondola",
        body: "The best pictures from the cabin come on Phase 2, as the car climbs over the treeline and the valley opens below. Sit on the downhill-facing side for the view back towards Gulmarg and the Kashmir valley. At the top, the ridge gives wide views over the Pir Panjal; on very clear days, people look north for distant high peaks. Snow glare is strong, so adjust exposure and protect your phone from the cold, which drains batteries quickly. Respect any signs restricting photography near security installations on the ridge.",
      },
      {
        heading: "Common mistakes on a gondola day",
        body: "Arriving in Gulmarg late in the morning and finding Phase 2 sold out or closed by afternoon cloud. Not booking online in the busy season. Going up Phase 2 in light clothing in summer. Planning Gulmarg as a single day with no flexibility when the weather is unsettled. Buying tickets from touts. Taking infants or people with heart conditions to Phase 2. Wandering beyond the patrolled area on the ridge. Each of these is avoidable with a morning slot, an online booking, warm layers and a spare day.",
      },
      {
        heading: "If you cannot take the gondola",
        body: "If tickets are sold out or the gondola is closed, Gulmarg still has plenty to see. In summer, ride a pony or walk to Khilanmarg, a high meadow above the town with views of the Pir Panjal, or around the meadow to the Maharani Temple, St Mary's Church, Strawberry Valley and the golf course. In winter, sledging, snow scooters and ski lessons on the lower slopes give a full day of snow, and the drive back through Tangmarg's snow-covered forest is beautiful in itself.",
      },
      {
        heading: "Is the Gulmarg Gondola worth it?",
        body: "Yes, for most visitors it is the highlight of Gulmarg and one of the great experiences of a Kashmir trip. Phase 1 alone is worth it for families and in winter; Phase 2 is worth it on a clear day for the views and the feeling of being high on a Himalayan ridge. The keys to a good gondola day are booking early, going in the morning, dressing warmly and keeping a spare day in case the weather closes the upper phase.",
      },
    ],
    months: gulmargMonths([
      "Peak ski month; Phase 2 often closes in storms, so keep a spare day.",
      "Excellent snow; dress for well below freezing at the top.",
      "Late-season skiing and bright sun; long queues in school holidays.",
      "Snow at Kongdoori early in the month, then melting; Phase 2 still white.",
      "Snow patches at the top, green below; busy summer season starts.",
      "Clear mornings and snow on shaded slopes; book Phase 2 well ahead.",
      "Showers and afternoon cloud; ride in the morning.",
      "Green and showery; quieter after mid-month.",
      "Clearest views of the year from Phase 2.",
      "Crisp air, golden meadows and first snow on the ridge.",
      "Quiet; cold at the top and occasional early snow.",
      "Ski season opens; the first good snow is usually mid to late December.",
    ]),
    routes: [
      { from: "Srinagar", to: "Gulmarg Gondola base", distanceKm: "about 50 km", time: "1.5 to 2 hours", how: "By road through Tangmarg, then a short walk or pony ride from the Gulmarg bus stand." },
      { from: "Gulmarg base", to: "Kongdoori (Phase 1)", distanceKm: "cable car", time: "about 9 to 10 minutes", how: "Phase 1 of the gondola; separate ticket." },
      { from: "Kongdoori", to: "Apharwat station (Phase 2)", distanceKm: "cable car", time: "about 10 to 12 minutes", how: "Phase 2 of the gondola; boarding only at Kongdoori." },
    ],
    faqs: [
      { q: "Who runs the Gulmarg Gondola?", a: "The Jammu and Kashmir Cable Car Corporation (JKCCC), a government company, which also sells tickets on its official online portal." },
      { q: "How long is the Gulmarg Gondola ride?", a: "About 9 to 10 minutes for Phase 1 to Kongdoori and 10 to 12 minutes for Phase 2 to the Apharwat station." },
      { q: "Do you need ID for the Gulmarg Gondola?", a: "Yes. A valid photo ID is needed for each passenger and is checked at the station." },
      { q: "What if Phase 2 is closed on my day?", a: "Ask at the counter about refund or rescheduling under the operator's rules, ride Phase 1 if it is open, and try Phase 2 again on a spare day if you have one." },
      { q: "Which phase is better for families?", a: "Phase 1 to Kongdoori suits most families with small children and older travellers. Phase 2 is higher, colder and more often closed." },
      { q: "Is there snow at the top of the gondola in summer?", a: "Usually in May and June and on shaded slopes later. The Phase 2 area is cold and windy all year, so carry a jacket." },
      { q: "What is the best time of day to ride the Gulmarg Gondola?", a: "The morning, when the air is clearer, winds are lighter and closures are less likely." },
      { q: "Can I get altitude sickness on the Gulmarg Gondola?", a: "Some people feel breathless or light-headed at Phase 2, close to 4,000 m. Move slowly, drink water and come down if you feel unwell." },
      { q: "How do I avoid fake gondola ticket websites?", a: "Book only on the official JKCCC portal or through a trusted agent, check the web address carefully, and never buy tickets from strangers in Gulmarg." },
      { q: "Can skiers use the Gulmarg Gondola?", a: "Yes. In winter, the gondola is Gulmarg's main ski lift; skiers can buy passes for multiple rides and carry their equipment." },
      { q: "How early should I reach the gondola base station?", a: "At least 30 minutes before your slot, for the ID and security checks and any queue." },
      { q: "Is the Gulmarg Gondola open in winter?", a: "Yes, it runs through the winter and is busiest then, but heavy snow and wind close it more often, especially Phase 2." },
      { q: "When was the Gulmarg Gondola built?", a: "Phase 1 to Kongdoori opened in 1998 and Phase 2 to the Apharwat ridge in 2005." },
      { q: "Is skiing off Apharwat safe for beginners?", a: "No. The Phase 2 terrain is ungroomed and avalanche-prone. Beginners should ski on the Phase 1 and chairlift slopes with an instructor." },
      { q: "What should I wear on the Gulmarg Gondola in summer?", a: "A warm jacket or fleece for Phase 2, closed shoes, sunglasses and sunscreen. It is cold and windy at the top even in July." },
      { q: "What can I do in Gulmarg if the gondola is closed?", a: "Pony rides or walks to Khilanmarg, the Maharani Temple, St Mary's Church and Strawberry Valley in summer, or sledging and ski lessons in winter." },
    ],
  },

  "gulmarg/places-to-visit/apharwat-peak": {
    facts: [
      { label: "Height", value: "The ridge rises above 4,000 m; the gondola's Phase 2 station is close to 4,000 m" },
      { label: "Range", value: "Pir Panjal, above Gulmarg" },
      { label: "How to reach", value: "Gulmarg Gondola Phase 1 to Kongdoori, then Phase 2" },
      { label: "Snow", value: "Most of the year on the upper slopes; reliably December to May" },
      { label: "Time needed", value: "1 to 2 hours at the top; half a day with the gondola" },
      { label: "Restrictions", value: "Stay in the permitted area; parts of the ridge are a security zone" },
    ],
    blocks: [
      {
        heading: "What is Apharwat Peak?",
        body: "Apharwat is the mountain ridge that rises behind Gulmarg, the highest point that ordinary visitors reach in the Gulmarg area. It is part of the Pir Panjal range, which forms the western and southern wall of the Kashmir valley. Thanks to the second phase of the Gulmarg Gondola, you can go from Gulmarg's meadow at about 2,650 m to a station near the top of Apharwat, close to 4,000 m, in under half an hour, without trekking.\n\nAt the top, the world changes: snow for most of the year, thin and cold air, bare rock and a sweeping view over the Pir Panjal and down to Gulmarg, Tangmarg and the Kashmir valley. In winter, Apharwat is the start of the long off-piste ski runs that made Gulmarg famous among skiers. In summer, it is a place to stand on snow in June and look across the mountains.",
      },
      {
        heading: "How to reach Apharwat",
        body: "The only practical way up for visitors is the Gulmarg Gondola. Take Phase 1 from the Gulmarg base station to Kongdoori, then Phase 2 from Kongdoori to the Apharwat station. Each phase has its own ticket, booked online on the official Jammu and Kashmir Cable Car Corporation portal with photo ID; in busy months, Phase 2 sells out well ahead. Gulmarg is about 50 km from Srinagar, 1.5 to 2 hours by road, so a day trip from Srinagar is possible if you leave early.\n\nIn summer, some fit trekkers walk up from Kongdoori with a local guide, but most of the ridge beyond the station area is a restricted security zone, and walking off the marked area is not allowed.",
      },
      {
        heading: "What you see from Apharwat",
        body: "From the station area, the view opens in every direction. Below you, the gondola line drops to the forested bowl of Kongdoori and the green or white meadow of Gulmarg. Beyond lies the Kashmir valley, with Srinagar and Wular Lake sometimes visible as hazy shapes on clear days. Along the ridge, the Pir Panjal peaks run east and west under snow. On very clear mornings, visitors look north for distant high Himalayan peaks across the region. Alpather Lake lies in a bowl below the ridge, frozen white until early summer.",
      },
      {
        heading: "When is the best time to visit Apharwat?",
        body: "December to March is the snow season, when the whole ridge is white and skiers ride Phase 2 for the powder. It is very cold, often well below minus ten at the top with wind, and storms close the gondola regularly. April to June brings the best combination for sightseers: lots of snow still on the ridge, longer days and less extreme cold, though May and June are the busiest months for the gondola. July and August are greener and showery, with snow only in patches. September and October have the clearest air and the best long views.\n\nWhatever the month, go up in the morning. Clouds often build over the ridge after midday, the wind picks up and the gondola may close.",
      },
      {
        heading: "How cold is it on Apharwat?",
        body: "Much colder than Gulmarg. Air cools by roughly 6 degrees for every 1,000 m of height, so the top of the gondola is usually 7 to 9 degrees colder than the Gulmarg meadow, before you add the wind. In January and February, temperatures at the top can drop below minus 15. Even on a warm July day, when Gulmarg is in the low twenties, the ridge can be in single digits with a strong breeze. Dress in layers and carry a proper jacket, gloves and cap whatever the season.",
      },
      {
        heading: "Altitude at Apharwat",
        body: "At close to 4,000 m, Apharwat is higher than most places Indian travellers have ever been. Many people feel breathless when they walk on the snow, and some get a mild headache. Because you rise so fast on the gondola, there is no time to acclimatise, so keep your visit relaxed: walk slowly, avoid running or snowball fights that leave you gasping, drink water and keep the visit to an hour or two. People with heart or lung conditions, high blood pressure, pregnant women and very young children should consider staying at Kongdoori instead.",
      },
      {
        heading: "Skiing on Apharwat",
        body: "Apharwat's bowls and gullies are one of the reasons skiers from around the world come to Gulmarg. From the Phase 2 station, long off-piste descents run back towards Kongdoori and Gulmarg through open snowfields and then forest, with vertical drops of over a thousand metres. Snow is often deep and dry in January and February. This is serious mountain terrain, not a groomed resort: avalanches are a real risk and rescue is limited. Ski here only with avalanche equipment, experience and preferably a certified local guide, and follow the ski patrol's daily advice.",
      },
      {
        heading: "Alpather Lake below the ridge",
        body: "Alpather is a high lake in a bowl below Apharwat, at about 3,800 m, that stays frozen until around June and is ringed by snowfields into summer. It is reached on foot or by pony from Gulmarg, a long and tiring round trip, or by walking from the upper gondola area where permitted in summer. Most visitors who want to see it hire a pony and guide from Gulmarg and make a full day of it. See our Alpather Lake guide for details.",
      },
      {
        heading: "Security and the Line of Control",
        body: "Apharwat lies not far from the Line of Control, and the army maintains positions on the ridge. Visitors are allowed in the area around the Phase 2 station but not beyond the marked limits. Follow all signs and instructions from security personnel, do not walk off towards the far side of the ridge, and do not photograph security installations. Within the permitted area, the atmosphere is relaxed and busy with tourists, and there is no reason for concern if you stay within the rules.",
      },
      {
        heading: "Things to do at the top",
        body: "Walk on the snow and take photographs of the ridge and the valley below. Sit on the snow for a picture against the peaks. Build a small snowman with the children if you are well enough. Watch skiers set off down the bowls in winter. Have a hot kahwa or tea if the stall is open. In early summer, look for the first alpine flowers on the slopes where the snow has melted. There are no rides or organised activities at the top, which is part of its charm.",
      },
      {
        heading: "What to wear and carry",
        body: "Winter: thermals, a fleece, a heavy insulated jacket, waterproof trousers, snow boots with grip, thick socks, gloves, a woollen cap and sunglasses. Rent snow boots and jackets in Gulmarg if needed. Summer: a warm jacket or fleece, closed shoes with grip, sunglasses, sunscreen and a cap. All year: water, a small snack, your photo ID and gondola tickets, and a fully charged phone in an inner pocket, since cold drains batteries fast.",
      },
      {
        heading: "A half-day plan for Apharwat",
        body: "Reach the Gulmarg base station by 9.30 am with your online tickets. Ride Phase 1 to Kongdoori around 10, then Phase 2 straight away while the weather is clear. Spend an hour on the ridge, ride down to Kongdoori and stop for tea and the snow, then return to Gulmarg by about 1 pm. Spend the afternoon on the meadow, at the Maharani Temple and St Mary's Church. If Phase 2 is closed when you arrive, wait at Kongdoori for an hour if the staff expect it to reopen, or keep your Phase 2 hopes for the next morning if you are staying overnight.",
      },
      {
        heading: "Apharwat with children and older travellers",
        body: "Older children usually enjoy Apharwat, as long as they are dressed warmly and keep the visit short. For infants, toddlers and older travellers with health concerns, Kongdoori gives snow and views with far less altitude. If grandparents want to see the top, ride up early, stay for 30 to 45 minutes, sit down often and come down at the first sign of breathlessness or headache.",
      },
      {
        heading: "Kongdoori: the halfway stop",
        body: "Kongdoori, the top of Phase 1 and the start of Phase 2, sits in a wide bowl at about 3,000 m, surrounded by forest. In winter, it is a snowfield busy with sledges, snow scooters and ski lessons; in summer, it is a green meadow with views up to the ridge. You must change cars here to go on to Apharwat, and it is worth stopping for tea and a walk on the way back down. If Phase 2 is closed or the altitude worries you, Kongdoori alone gives snow in winter and a mountain setting in summer.",
      },
      {
        heading: "Apharwat, Kongdoori or Khilanmarg?",
        body: "Apharwat is the highest and most dramatic, with snow most of the year, but it is cold, high and often closed by weather. Kongdoori is lower, sheltered and family-friendly, with snow from December to March and easy access by Phase 1. Khilanmarg is a quiet meadow above Gulmarg reached by pony or on foot, with no tickets or queues and fine views. On a two-night Gulmarg stay, do Apharwat on the clearest morning and Khilanmarg or a meadow loop on the other day.",
      },
      {
        heading: "Food, toilets and facilities",
        body: "The Apharwat station area has very limited facilities, sometimes a tea stall in the busy season and basic toilets at the station. Kongdoori has more choice, with stalls and a cafeteria. Eat in Gulmarg before or after the ride, and carry water and a snack. Keep your rubbish with you; litter at this height takes years to break down and spoils the snow for everyone.",
      },
      {
        heading: "Common mistakes at Apharwat",
        body: "Going up in the afternoon, when clouds and wind are most likely to close the gondola. Not booking Phase 2 in advance in the busy season. Wearing light clothes in summer. Rushing around in the snow and getting breathless at close to 4,000 m. Walking beyond the marked area towards the far side of the ridge. Taking very young children or relatives with heart conditions to the top. All are easy to avoid with planning.",
      },
      {
        heading: "Is Apharwat worth visiting?",
        body: "Yes, on a clear day it is one of the most memorable places a visitor can reach in Kashmir with no trekking at all. The views, the snow and the sense of height are exceptional. Its weak points are the weather, which can close the gondola, the cold and the altitude. Book Phase 2 in advance, go in the morning, dress properly and keep a spare day, and Apharwat will probably be the highlight of your Gulmarg visit.",
      },
    ],
    months: gulmargMonths([
      "Deep snow and extreme cold at the top; frequent gondola closures in storms.",
      "Powder snow for skiers; well below freezing at the top.",
      "Snow and bright sun; late skiing and sightseeing.",
      "Full snow cover on the ridge with milder air; good for first-timers.",
      "Plenty of snow at the top and green below; very busy.",
      "Snow patches and clear mornings; book well ahead.",
      "Patchy snow, flowers and afternoon cloud.",
      "Showery; go up early in the day.",
      "Clearest long views of the year.",
      "Crisp and clear, first fresh snow late in the month.",
      "Cold and quiet; occasional early snow.",
      "Ridge turns white; skiing starts when snow is deep enough.",
    ]),
    faqs: [
      { q: "How high is Apharwat Peak?", a: "The Apharwat ridge rises above 4,000 m, and the Gulmarg Gondola's Phase 2 station is close to 4,000 m." },
      { q: "How do you reach Apharwat?", a: "By the Gulmarg Gondola: Phase 1 to Kongdoori, then Phase 2 to the Apharwat station. Book both online with photo ID." },
      { q: "Is there snow on Apharwat in summer?", a: "Usually in May and June and in patches into July. From December to May the ridge is fully snow-covered." },
      { q: "How cold is Apharwat?", a: "Usually 7 to 9 degrees colder than Gulmarg, plus wind. In mid-winter it can fall below minus 15 at the top." },
      { q: "Can you trek to Apharwat?", a: "Some fit trekkers walk up from Kongdoori with a guide in summer, but much of the ridge is a restricted security area. Most visitors use the gondola." },
      { q: "Is Apharwat safe for children?", a: "Older children are usually fine if dressed warmly and kept to a short visit. Infants and toddlers are better at Kongdoori, which is lower." },
      { q: "Can you see Alpather Lake from Apharwat?", a: "The lake lies in a bowl below the ridge. In summer, visitors reach it by pony or on foot from Gulmarg or the upper slopes where allowed." },
      { q: "Why is Phase 2 to Apharwat often closed?", a: "High wind, snowfall and poor visibility on the ridge. Closures are made for safety, more often in winter and on afternoons." },
      { q: "Is Apharwat near the Line of Control?", a: "It lies not far from it, and parts of the ridge are a security zone. Visitors must stay within the marked area near the gondola station." },
      { q: "Is skiing on Apharwat for beginners?", a: "No. It is ungroomed, avalanche-prone terrain for experienced off-piste skiers with equipment and a guide. Beginners should ski on the lower slopes." },
      { q: "How long should I spend at the top of Apharwat?", a: "An hour or two is ideal. Longer stays at close to 4,000 m make altitude symptoms more likely." },
    ],
  },
  "gulmarg/places-to-visit/khilanmarg": {
    facts: [
      { label: "Where", value: "A high meadow above Gulmarg, about 5 to 6 km from the town" },
      { label: "Height", value: "Roughly 3,000 m" },
      { label: "How to reach", value: "Pony ride or uphill walk from Gulmarg, 1.5 to 2 hours one way on foot" },
      { label: "Best months", value: "June to October for flowers and views; December to March for snow" },
      { label: "Time needed", value: "Half a day from Gulmarg" },
    ],
    blocks: [
      {
        heading: "What is Khilanmarg?",
        body: "Khilanmarg is a broad meadow on the slopes above Gulmarg, reached by an uphill track through pine and fir forest. It sits several hundred metres above the Gulmarg bowl, so it feels wilder and higher, with open slopes, scattered huts of herders in summer and a wide view back over Gulmarg to the Kashmir valley. In summer, it is green and full of wild flowers; in winter, it is deep in snow and used for skiing and sledging. On clear days, the view north and east across the mountains is one of the best near Gulmarg.",
      },
      {
        heading: "How to reach Khilanmarg",
        body: "Most visitors hire a pony from the authorised pony stands in Gulmarg; the ride takes about an hour to an hour and a half up and a little less down. Rates are fixed by the pony union and the tourism authorities and are usually displayed; agree the route, waiting time and total before you start. Fit walkers can hike up in one and a half to two hours on a steady track. In winter, the track is deep in snow and the climb becomes a snowshoe or ski outing, best done with a local guide. Start early, as clouds often build in the afternoon.",
      },
      {
        heading: "When is the best time to visit Khilanmarg?",
        body: "June to early September is the flower season, when the meadow is green and alpine flowers cover the slopes. September and October bring the clearest views and golden grass. From December to March, Khilanmarg is under deep snow and is visited by skiers and those who want a quieter snow experience than the busy areas around the gondola. April and May are transitional, with melting snow and muddy tracks. In every season, the morning is best.",
      },
      {
        heading: "Khilanmarg or the gondola?",
        body: "The gondola is faster and takes you higher, but it is crowded, depends on tickets and closes in bad weather. Khilanmarg is an alternative that gives a real mountain meadow, a quiet ride or walk through forest and big views, and it works on days when the gondola is sold out. Many visitors do the gondola one day and Khilanmarg the next. If you only have one day and the gondola is open, take the gondola; if not, Khilanmarg is the best way to get above Gulmarg.",
      },
      {
        heading: "Tips for visiting Khilanmarg",
        body: "Wear shoes with grip and carry a warm layer, water and a snack; there are few or no stalls on the meadow outside the busy season. Use only registered pony handlers and keep your receipt. Stay on the main track, especially in fog, and turn back if the weather closes in. In winter, do not go beyond the area your guide is comfortable with, since avalanche risk rises on steeper slopes. Carry cash for the pony and tips.",
      },
      {
        heading: "Khilanmarg in winter",
        body: "In winter, Khilanmarg becomes a snowfield above the forest. Skiers use it for touring and runs back towards Gulmarg, and some visitors take a pony or snowshoe up for a quieter day in the snow. It is cold and exposed, and the track can be hard to see after fresh snowfall, so go with a local guide and turn back early if the weather changes.",
      },
      {
        heading: "Is Khilanmarg worth visiting?",
        body: "Yes, especially for travellers spending a night or two in Gulmarg who want more than the gondola and the main meadow. It is one of the best half-day trips in Gulmarg, and it shows the mountain landscape at walking pace, away from the crowds.",
      },
    ],
    months: gulmargMonths([
      "Deep snow; ski touring and guided snowshoe outings only.",
      "Snowbound and cold; for skiers and guided groups.",
      "Snow and sun; skiers on the slopes.",
      "Melting snow and muddy track; check conditions.",
      "Snow patches and fresh grass; ponies start running regularly.",
      "Green meadow and first flowers.",
      "Flower season at its peak; afternoon showers.",
      "Green and flowery; go early.",
      "Clear views and golden grass.",
      "Crisp mornings and long views; cold by afternoon.",
      "Cold and quiet; first snow possible.",
      "Snow returns; winter conditions.",
    ]),
    faqs: [
      { q: "How far is Khilanmarg from Gulmarg?", a: "About 5 to 6 km uphill from the town: 1 to 1.5 hours by pony or 1.5 to 2 hours on foot." },
      { q: "Can you reach Khilanmarg by gondola?", a: "No. Khilanmarg is reached by pony or on foot from Gulmarg. The gondola goes to Kongdoori and Apharwat." },
      { q: "Is there snow at Khilanmarg?", a: "Yes, from about December to April. In summer, it is a green meadow with wild flowers." },
      { q: "Is Khilanmarg suitable for children?", a: "Yes on a pony with an adult and a registered handler, or for older children on foot. Carry warm clothes and water." },
      { q: "What is the best time to visit Khilanmarg?", a: "June to October for flowers and views, and December to March for snow with a guide. Mornings are best." },
      { q: "How much does a pony to Khilanmarg cost?", a: "Rates are fixed by the pony union and tourism authorities and change by season. Check the displayed rate and agree the total before you start." },
      { q: "Is Khilanmarg better than the gondola?", a: "It is quieter and gives a real meadow at walking pace, while the gondola goes higher. Many visitors do both on different days." },
      { q: "What can you see from Khilanmarg?", a: "Gulmarg below, the Kashmir valley beyond and, on clear days, wide views across the mountains to the north and east." },
    ],
  },
  "gulmarg/places-to-visit/alpather-lake": {
    facts: [
      { label: "Height", value: "About 3,800 m, below the Apharwat ridge" },
      { label: "Distance", value: "About 13 km from Gulmarg by trail" },
      { label: "Frozen", value: "Usually until about June" },
      { label: "How to reach", value: "Full-day pony ride or trek from Gulmarg with a guide" },
      { label: "Best months", value: "July to September" },
    ],
    blocks: [
      {
        heading: "What is Alpather Lake?",
        body: "Alpather, also called Alpathri, is a high mountain lake in a bowl at the foot of Apharwat, above Gulmarg. Snow and ice cover it for much of the year, and even in midsummer it is ringed by snowfields, with the bare peaks of the ridge rising above. It is one of the few high-altitude lakes near Gulmarg that visitors can reach in a day, and it feels remote and wild compared with the busy meadow below.",
      },
      {
        heading: "How to reach Alpather Lake",
        body: "Alpather is about 13 km from Gulmarg by trail. Most visitors hire a pony and a registered guide from Gulmarg and make a full day of it, riding up through Khilanmarg and over open slopes to the lake, then returning the same way. The ride takes several hours each way, and the last part is steep and rocky. Fit trekkers can walk it in a long day with a guide. In summer, when allowed, some people walk to the lake from the upper gondola area, which shortens the climb but requires gondola tickets and careful timing. Always check the current rules in Gulmarg, as access can be restricted for security reasons.",
      },
      {
        heading: "When is the best time to visit?",
        body: "July to September, when the snow on the trail has mostly melted, the lake begins to thaw and the weather is most settled. June can still have snow on the route and a frozen lake. From October, early snow and short days make the trip harder, and in winter the area is snowbound and not suitable for casual visitors. Start early in the morning in any season, as weather on the ridge changes quickly in the afternoon.",
      },
      {
        heading: "What to expect on the way",
        body: "The route climbs from the Gulmarg meadow through forest to Khilanmarg, then above the treeline across open slopes with snow patches and streams. The air thins as you climb, and the last stretch to the lake is steep. On the way you see herders' huts in summer, alpine flowers and wide views back over Gulmarg. At the lake, there are no facilities: bring water, food and warm layers. The trip is tiring for riders as well as walkers, since several hours on a pony on steep ground is hard on the back and knees.",
      },
      {
        heading: "Safety on the Alpather trip",
        body: "Go only with a registered guide and pony handler. Check the weather forecast and turn back if clouds build or it starts to snow. Watch for altitude symptoms, since the lake is close to 4,000 m. Do not walk on the frozen lake or snow bridges over streams. Stay on the route your guide uses and follow any security restrictions. This is not a trip for small children, older travellers with health concerns or anyone not used to long days outdoors.",
      },
      {
        heading: "A day plan for Alpather Lake",
        body: "Meet your guide and pony at the Gulmarg pony stand at about 7 am, after an early breakfast. Ride up through the forest to Khilanmarg by about 8.30, rest briefly, then continue across the open slopes towards the lake, arriving late in the morning. Spend 45 minutes to an hour at the lake, eat your packed lunch and start back by 1 pm at the latest, before the afternoon clouds. You should be back in Gulmarg by mid to late afternoon. Agree the full day's pony and guide charges, the stops and the return time before setting off.",
      },
      {
        heading: "What to wear and carry",
        body: "Wear layers: a thermal or quick-dry base, a fleece and a windproof, waterproof jacket. Trekking shoes with grip are essential, even if you are riding, because you will walk the steepest stretches. Carry a cap, gloves, sunglasses and sunscreen, since snow glare at this height is strong. Pack at least two litres of water per person, a packed lunch from your hotel, energy snacks, a basic first-aid kit and any personal medicines. Keep your phone and ID in an inner pocket.",
      },
      {
        heading: "Is Alpather Lake worth it?",
        body: "For fit, adventurous travellers with a spare day in Gulmarg in summer, yes: it is one of the most beautiful and least crowded places around Gulmarg. For families, older travellers and anyone on a tight schedule, the gondola to Apharwat and a pony ride to Khilanmarg give similar mountain scenery with far less effort.",
      },
    ],
    months: gulmargMonths([
      "Snowbound; the lake and trail are not open to casual visitors.",
      "Snowbound and very cold.",
      "Deep snow on the route; skiers only, with guides.",
      "Snow on most of the trail; the lake is frozen.",
      "Snowfields on the upper route; the lake still frozen.",
      "Trail opens in stages; the lake starts to thaw late in the month.",
      "Best month to go: thawing lake, flowers and long days.",
      "Good conditions; afternoon showers, start early.",
      "Clear and settled; the lake at its most open.",
      "Cold, short days; early snow possible on the ridge.",
      "Snow returns; not advised.",
      "Snowbound.",
    ]),
    faqs: [
      { q: "How far is Alpather Lake from Gulmarg?", a: "About 13 km by trail, a full day on pony or foot for the round trip." },
      { q: "When does Alpather Lake thaw?", a: "Usually from about June, with the best conditions from July to September. It is frozen for most of the rest of the year." },
      { q: "Can you reach Alpather Lake by gondola?", a: "Not directly. In summer, some people walk from the upper gondola area where allowed, but most go by pony or on foot from Gulmarg with a guide." },
      { q: "How high is Alpather Lake?", a: "About 3,800 m, below the Apharwat ridge." },
      { q: "Is the Alpather trek difficult?", a: "It is a long, steep day at high altitude. It suits fit travellers with a guide, not small children or people with health concerns." },
      { q: "Do you need permission to visit Alpather Lake?", a: "Access can be restricted for security reasons. Check the current rules in Gulmarg and go with a registered guide." },
      { q: "What should I carry to Alpather Lake?", a: "Water, food, warm layers, rain gear, sunscreen and sunglasses. There are no facilities at the lake." },
      { q: "Is Alpather Lake worth it?", a: "Yes for fit, adventurous travellers in summer. Others will enjoy the gondola and Khilanmarg with far less effort." },
    ],
  },
  "gulmarg/places-to-visit/st-marys-church": {
    facts: [
      { label: "Built", value: "1902, during the British period" },
      { label: "Where", value: "On a small rise near the Gulmarg meadow and market" },
      { label: "Style", value: "Victorian stone and timber church" },
      { label: "Time needed", value: "15 to 30 minutes" },
      { label: "Open", value: "Usually seen from outside; open for services on some days" },
    ],
    blocks: [
      {
        heading: "What is St Mary's Church, Gulmarg?",
        body: "St Mary's Church is a small stone church with a steep roof, built in 1902 when Gulmarg was a summer retreat for British officials and families from the plains. It stands on a low rise near the main meadow, with pine forest and the Apharwat slopes behind, and is one of the most photographed buildings in Gulmarg, especially under snow. It is one of the oldest churches in Kashmir and a reminder of Gulmarg's past as a colonial hill resort, when the town had a golf club, a ski club and summer houses for visitors from across British India.",
      },
      {
        heading: "Gulmarg's colonial past",
        body: "The British discovered Gulmarg's meadow in the late nineteenth century and turned it into a summer resort, with a golf course, lodges and cottages, and later a ski club formed in the 1920s. Because the rules of the princely state did not allow outsiders to own land in Kashmir, visitors stayed in leased cottages and hotels, much as they took to houseboats in Srinagar. St Mary's served the summer congregation. Today, the golf course, the church and the old Nedous Hotel name are among the few traces of that period.",
      },
      {
        heading: "Visiting St Mary's Church",
        body: "Most visitors see the church from outside, on a walk or pony ride around the Gulmarg meadow, and take photographs of its stone walls and roof against the mountains. The church is used for services on some Sundays and at Christmas, when the interior may be open; at other times the doors are often closed. Visit respectfully, stay on the paths, and do not climb on the walls. In winter, the church under snow, with the meadow white around it, is one of the classic Gulmarg images.",
      },
      {
        heading: "Christmas in Gulmarg",
        body: "Christmas and New Year are among the busiest weeks in Gulmarg, when the town fills with visitors hoping for snow. If you are in Gulmarg on Christmas Eve or Christmas Day, the church is often the focus of a small celebration. Ask at your hotel about service times. Book rooms, gondola tickets and transport early for these weeks, and be ready for snow on the Tangmarg road.",
      },
      {
        heading: "What else is nearby?",
        body: "The Maharani Temple, a Shiva temple built in 1915 by Maharani Mohini Bai Sisodia, wife of Maharaja Hari Singh, stands on a hillock across the meadow and is visible from most of Gulmarg; it became famous after appearing in a 1970s Hindi film song. The Gulmarg golf course, one of the highest green golf courses in the world, surrounds the meadow. Strawberry Valley and the gondola base station are a short walk or pony ride away. Most visitors combine all of these in a gentle half-day loop.",
      },
      {
        heading: "A gentle Gulmarg meadow loop",
        body: "Start at the gondola base station after your ride, or at the bus stand if you are not taking the gondola. Walk or ride a pony across the meadow to St Mary's Church, then to the Maharani Temple on its hillock, where the view takes in the whole bowl of Gulmarg. Continue around the golf course, keeping to the paths, to Strawberry Valley and back to the market for tea and lunch. The whole loop takes two to three hours on foot at an easy pace, less on a pony, and is the best way to see Gulmarg's buildings and meadow together.",
      },
      {
        heading: "Photographing the church",
        body: "The classic view is from the meadow below, with the church on its rise and the forest and Apharwat slopes behind it. Morning light from the east falls on the front of the building. In winter, fresh snow on the roof and the meadow makes the picture; go soon after a snowfall, before footprints cover the slope. Respect the building and any services taking place, and do not fly drones without permission.",
      },
      {
        heading: "Is St Mary's Church worth visiting?",
        body: "It is worth a short stop on your Gulmarg meadow loop, especially for photographs and for anyone interested in the history of the hill stations. It is not a destination in itself, but it adds a different layer to a Gulmarg day, between the gondola and the meadow.",
      },
    ],
    months: gulmargMonths([
      "The church under deep snow; one of the classic Gulmarg winter pictures.",
      "Snow on the roof and meadow; paths can be icy.",
      "Snow melting around the church late in the month.",
      "Patchy snow and fresh grass on the meadow.",
      "Green meadow around the church; pleasant walks.",
      "Summer season; the meadow loop is busy.",
      "Green and showery; walk the loop in the morning.",
      "Wild flowers on the slopes behind the church.",
      "Clear skies and good light for photographs.",
      "Golden meadow and cold evenings.",
      "Quiet, with the first snow possible.",
      "Christmas week brings visitors and, often, snow.",
    ]),
    faqs: [
      { q: "When was St Mary's Church in Gulmarg built?", a: "In 1902, when Gulmarg was a summer resort for British officials and families." },
      { q: "Is St Mary's Church open to visitors?", a: "It is usually seen from outside. The interior may be open for services on some Sundays and at Christmas." },
      { q: "Where is St Mary's Church in Gulmarg?", a: "On a low rise near the main meadow and market, within walking or pony distance of the gondola base and the Maharani Temple." },
      { q: "Is there a Christmas service at St Mary's Church?", a: "The church is often the focus of Christmas celebrations in Gulmarg. Ask at your hotel for service times that year." },
      { q: "What is near St Mary's Church?", a: "The Maharani Temple, the golf course, Strawberry Valley and the gondola base station, all on the Gulmarg meadow loop." },
      { q: "How long do you need at St Mary's Church?", a: "15 to 30 minutes for photographs and a look around, as part of a half-day meadow loop." },
      { q: "Is St Mary's Church beautiful in winter?", a: "Yes. The stone church under snow, with the white meadow around it, is one of the classic Gulmarg pictures." },
      { q: "Who built the Maharani Temple near St Mary's Church?", a: "Maharani Mohini Bai Sisodia, wife of Maharaja Hari Singh, in 1915." },
    ],
  },
};
