// Kashmir place pages, batch 2 part 1 (2026-11-15): Srinagar places that
// trailed travelcoffee.in, sotc.in and pandatoursandtravels.com in the
// five-competitor study (docs/competitors/kashmir-5-competitors-2026-11-15.md).
// Merged additively into PLACE_CONTENT by data/content/index.ts and pushed to
// the live database by the one-time kashmir-places-push endpoint.
// Rules: real, checkable facts only; no typed prices or fares (entry fees and
// timings change, so readers are told to check at the gate); no em dashes.

import type { GuideContent, MonthGuide } from "@/lib/locations";

// Srinagar's climate by month (typical day and night ranges at about 1,585 m,
// from long-term IMD normals, rounded). Each place adds its own "good for" line.
const SRINAGAR_CLIMATE: [string, string, string][] = [
  ["January", "Day 3 to 7°C, night -4 to -1°C", "Coldest month, inside Chillai Kalan; frost most mornings, snow spells and short grey days."],
  ["February", "Day 6 to 10°C, night -2 to 1°C", "Still cold, with snow some years and the first sunny, thawing afternoons late in the month."],
  ["March", "Day 11 to 15°C, night 2 to 5°C", "Spring starts: almond blossom at Badamwari, showers, fresh green and cool evenings."],
  ["April", "Day 17 to 21°C, night 6 to 9°C", "Peak spring: tulips, blossom and gardens at their best; some rain."],
  ["May", "Day 22 to 25°C, night 10 to 13°C", "Warm, bright days and cool nights; the busiest month for Srinagar sightseeing."],
  ["June", "Day 26 to 30°C, night 13 to 16°C", "Early summer; long days, school-holiday crowds and warm afternoons."],
  ["July", "Day 29 to 32°C, night 17 to 19°C", "Warmest and most humid month, with occasional heavy showers."],
  ["August", "Day 28 to 31°C, night 16 to 18°C", "Hot afternoons, green gardens, some rain; quieter after mid-month."],
  ["September", "Day 25 to 28°C, night 11 to 14°C", "Clear skies and settled weather return; pleasant days and cool nights."],
  ["October", "Day 19 to 23°C, night 4 to 7°C", "Crisp, dry and sunny; chinars start to turn late in the month."],
  ["November", "Day 12 to 16°C, night -1 to 2°C", "Golden chinars early in the month, then cold mornings and bare trees."],
  ["December", "Day 6 to 9°C, night -3 to 0°C", "Cold and clear; Chillai Kalan, the hardest 40 days of winter, starts on 21 December."],
];

const srinagarMonths = (goodFor: string[]): MonthGuide[] =>
  SRINAGAR_CLIMATE.map(([month, tempC, weather], i) => ({ month, tempC, weather, goodFor: goodFor[i] }));

export const KASHMIR_PLACES_1: Record<string, Partial<GuideContent>> = {
  "srinagar/places-to-visit/shalimar-bagh": {
    facts: [
      { label: "Built", value: "1619, by Emperor Jahangir for Nur Jahan" },
      { label: "Where", value: "North-eastern shore of Dal Lake, about 15 km from Lal Chowk" },
      { label: "Size", value: "About 12 hectares (31 acres) on three terraces" },
      { label: "Time needed", value: "1 to 1.5 hours" },
      { label: "Best season", value: "April to May for flowers; late October to mid November for chinar colour" },
      { label: "Managed by", value: "Department of Floriculture, Jammu and Kashmir" },
      { label: "Entry", value: "Small ticket at the gate; timings change by season" },
    ],
    blocks: [
      {
        heading: "What is Shalimar Bagh?",
        body: "Shalimar Bagh is the largest of the royal Mughal gardens on the shore of Dal Lake in Srinagar. Emperor Jahangir laid it out in 1619 for his wife Nur Jahan, on the site of an older garden, and his son Shah Jahan extended it in the 1630s. It is a classic Persian-style charbagh: a long central water channel runs down the slope from the Zabarwan hills towards the lake, with fountains, cascades and stone pavilions set on three rising terraces, all shaded by old chinar trees.\n\nFor travellers, it is the one Mughal garden to see if you only have time for one. It is bigger and more formal than Chashme Shahi, quieter than Nishat Bagh on most days, and it keeps the original Mughal plan more clearly than any other garden in the valley. Most Srinagar sightseeing tours include it with Nishat Bagh, Chashme Shahi and Pari Mahal in a half-day loop along the Boulevard and the eastern shore of the lake.",
      },
      {
        heading: "History of Shalimar Bagh",
        body: "The Mughal emperors loved Kashmir and came up from the plains almost every summer. Jahangir, who wrote at length about the valley's flowers, springs and saffron in his memoirs, ordered a garden on this spot in 1619 and called it Farah Bakhsh, the delightful. Shah Jahan later added the upper terrace, which was named Faiz Bakhsh, the bountiful, and the black marble pavilion that is still the garden's centrepiece. The name Shalimar was used for the whole garden over time, and the same name was given to gardens in Lahore and elsewhere that copied its plan.\n\nUnder the later Mughals, Afghans, Sikhs and Dogras, the garden was used for royal visits and official receptions. The Dogra rulers added electric lighting in the twentieth century. Today it is a protected heritage garden run by the state Floriculture Department, which looks after the fountains, the flower beds and the chinars.",
      },
      {
        heading: "How is Shalimar Bagh laid out?",
        body: "The garden rises in three terraces from the lake road towards the hills, each one a little more private than the one below.\n\nThe lowest terrace was the public garden, where the emperor met his officials. Its pavilion, the Diwan-e-Aam, sits over the water channel, and a black stone throne once stood above the waterfall here. The middle terrace was the emperor's private garden, with the Diwan-e-Khas, used for meetings with nobles and guests. The upper terrace, the Zenana garden, was reserved for the royal women. It holds the black marble pavilion built by Shah Jahan, surrounded on all sides by fountains and a pool, with chini khanas, small arched niches behind the cascades where oil lamps once burned behind falling water.\n\nThe central channel, the Shah Nahar, carries water fed from springs in the hills down through the terraces and on towards Dal Lake. Walk up the channel rather than across the lawns: the views back down the cascades towards the lake are the reason the garden was built this way.",
      },
      {
        heading: "When is the best time to visit Shalimar Bagh?",
        body: "Spring, from early April to the end of May, is the most colourful season. Tulips, pansies, daffodils and other bedding plants fill the flower beds, the chinars come into fresh leaf and the fountains usually run. The garden is busy in April, when it is visited together with the Tulip Garden a short drive away.\n\nSummer, from June to August, is green and shaded, and the garden is a cool place to spend an hour in the afternoon. Autumn, from late October to mid November, is the photographers' season: the chinar leaves turn red, copper and gold and fall in thick carpets on the lawns. Winter, from December to February, is quiet and often frosty or under snow; the fountains are switched off and the garden is mostly bare, but the stone pavilions under snow have their own beauty.\n\nAt any season, go in the morning, before the tour buses arrive, or in the last hour before closing, when the light on the terraces is soft.",
      },
      {
        heading: "Shalimar Bagh timings and tickets",
        body: "The garden is open every day. It usually opens in the morning around 9 am and closes around sunset, a little earlier in winter and a little later in summer. There is a small entry ticket for adults, with lower rates for children; foreign visitors may pay a different rate. Tickets are sold at the gate, and the Floriculture Department revises timings and fees from time to time, so check at the counter or with your hotel on the day.\n\nCameras and phones are allowed for personal photography. Professional shoots, including pre-wedding shoots with crew and equipment, usually need permission from the department.",
      },
      {
        heading: "How to reach Shalimar Bagh",
        body: "Shalimar Bagh is on the north-eastern side of Dal Lake, about 15 km from Lal Chowk and about 11 km from Dal Gate along the Boulevard and the lake road. By cab it takes 25 to 40 minutes from the city centre, depending on traffic. Most visitors come as part of a Mughal gardens tour in their package cab, which drops them at the gate and waits in the parking area.\n\nYou can also take an auto-rickshaw from Dal Gate or the Boulevard, or arrive by shikara: some shikara routes on Dal Lake end at a ghat near the garden, though the walk from the water's edge is short but not signposted. Local buses and shared cabs run along the lake road towards Harwan and stop near the garden.",
      },
      {
        heading: "How to fit Shalimar Bagh into a Srinagar day",
        body: "Most Srinagar sightseeing plans cover the Mughal gardens in one half day. A comfortable order, starting from a hotel near Dal Gate, is: Chashme Shahi and Pari Mahal on the hillside first, then Nishat Bagh, then Shalimar Bagh, which is the furthest along the lake. In April, add the Indira Gandhi Memorial Tulip Garden at the start, since it sits just below Chashme Shahi.\n\nIf you have a full day, add Hazratbal Shrine on the northern shore after Shalimar, then return along the western side of the lake through Nigeen. End the day with a sunset shikara ride from the Boulevard. Allow 60 to 90 minutes inside Shalimar Bagh itself, more if you enjoy photography or if the chinars are turning.",
      },
      {
        heading: "Shalimar Bagh, Nishat Bagh or Chashme Shahi: which should you see?",
        body: "Shalimar Bagh is the most formal and best preserved, with the finest pavilions and the clearest Mughal plan. Nishat Bagh, built by Nur Jahan's brother Asaf Khan in 1633, is larger, with twelve terraces rising steeply from the lake, and has the best views straight across Dal Lake to the Pir Panjal range. Chashme Shahi is the smallest, built around a natural spring whose water people still drink, and is a short stop rather than a long walk.\n\nIf you have time for one, choose Shalimar for history and architecture, or Nishat for views. Most travellers see all three, since they are only a few kilometres apart and each takes under an hour.",
      },
      {
        heading: "Photography tips for Shalimar Bagh",
        body: "The classic shot is from the upper terrace looking down the central channel through the pavilions towards the lake, ideally when the fountains are running. Morning light falls along the channel; late afternoon light catches the chinars from the side. In autumn, the best leaf colour usually comes in the first half of November, but it varies by a week or two each year. Tripods are generally fine for personal use away from paths; ask the staff if you are unsure. Respect other visitors, especially families who come for a quiet afternoon, and avoid stepping on flower beds for a picture.",
      },
      {
        heading: "Tips for visiting Shalimar Bagh",
        body: "Wear comfortable shoes: the terraces are linked by steps and the stone can be slippery after rain. Carry water and a light layer, since the shade under the chinars is cool even in summer. There are toilets near the entrance and small food stalls outside the gate selling tea, snacks and corn; there is no proper restaurant inside. Photography is welcome, but do not climb on the pavilions or stand in the water channels. The garden is popular with local families on Fridays and Sundays and on public holidays, so weekdays are calmer. If you are travelling with elderly relatives, note that the upper terrace involves a gentle climb of a few flights of steps; benches along the way make it manageable.",
      },
      {
        heading: "Shalimar Bagh for families, couples and older travellers",
        body: "Families like the open lawns, where children can run safely away from the road, and the fountains. Couples come for photographs among the pavilions and for the slow walk up the terraces. Older travellers can see the lower and middle terraces with almost no climbing and sit on the benches under the chinars; the path is wide and mostly level between the steps. Wheelchair users can reach the lower terrace from the entrance but will find the steps between the terraces difficult without help.",
      },
      {
        heading: "What is near Shalimar Bagh?",
        body: "Nishat Bagh is about 4 km back towards the city along the lake. Harwan, about 3 km further north, has a small garden, a reservoir and the remains of a Buddhist site with patterned terracotta tiles. Dachigam National Park, home of the Kashmir stag or hangul, lies in the hills behind Harwan and can be visited with permission from the Wildlife Department. Hazratbal Shrine and the University of Kashmir are across the lake on the northern shore, about 20 minutes by road.",
      },
      {
        heading: "Shalimar Bagh in winter and in snow",
        body: "From December to February the garden is quiet, the flower beds are empty and the fountains are off to protect the pipes from frost. After a snowfall, though, the black pavilion, the stone cascades and the bare chinars under snow make some of the most striking pictures in Srinagar. Paths can be icy, so wear shoes with good grip, and check with your driver that the lake road is clear. Winter visitors usually combine Shalimar with Nishat Bagh and a shikara ride on the partly frozen lake.",
      },
      {
        heading: "Why do Mughal gardens look like this?",
        body: "The Mughal gardens of Kashmir follow the Persian charbagh, a garden divided into four parts by water channels, an idea that stood for the four rivers of paradise in Persian and Islamic tradition. In Kashmir, the Mughals adapted the flat Persian plan to the hillside: instead of a level square, the garden became a series of terraces climbing the slope, so that water could fall from one level to the next in cascades and fountains without pumps. Spring water from the hills was led into a main channel down the centre, pavilions were placed across the channel so that people sat above running water, and chinar trees, which the Mughals planted widely across the valley, gave shade. The result is a garden designed to be walked uphill and looked at downhill, with the lake and the mountains beyond as part of the view.",
      },
      {
        heading: "The black pavilion and the verse on paradise",
        body: "The black marble pavilion on the upper terrace, built for Shah Jahan, is the finest building in any Kashmir garden. It stands in the middle of a square pool with fountains on every side, and its polished dark stone pillars reflect in the water. A Persian couplet often linked to Shalimar and other Mughal buildings says: if there is paradise on earth, it is this, it is this, it is this. Whether or not the words were written for this spot, they explain what the garden was meant to feel like for an emperor arriving from the heat of the plains.",
      },
      {
        heading: "Shalimar Bagh in poetry and song",
        body: "Shalimar became famous in English through Thomas Moore's long poem Lalla Rookh (1817), whose section The Light of the Haram is set in the garden, and later through the popular Kashmiri Song, often called Pale Hands I Loved Beside the Shalimar, by Laurence Hope. In Kashmir, the garden appears in Kashmiri and Urdu poetry and has been a backdrop for many Hindi films shot in the valley since the 1960s. Visitors who know these songs often come for that reason alone.",
      },
      {
        heading: "Food, toilets and facilities at Shalimar Bagh",
        body: "There are public toilets near the entrance and drinking water points inside, though carrying your own bottle is easier. Stalls outside the gate sell tea, kahwa, soft drinks, roasted corn and snacks. For a proper meal, most visitors eat back in the city, around Dal Gate, the Boulevard or Lal Chowk, where Kashmiri, North Indian and vegetarian restaurants are easy to find. The garden is not suitable for picnics with cooking; light snacks are fine as long as you take your rubbish with you.",
      },
      {
        heading: "Rules and etiquette at Shalimar Bagh",
        body: "Do not pick flowers, walk on the flower beds or stand in the water channels and fountains. Do not climb on the pavilions or the old stone walls. Smoking and loud music are discouraged. Dress is casual, but modest clothing is appreciated in Kashmir, especially for women visiting with local families around. Drones need permission and are generally not allowed over the Dal Lake area without clearance from the authorities.",
      },
      {
        heading: "A 90-minute walk through Shalimar Bagh",
        body: "Start at the main gate on the lake road and walk straight to the lowest pavilion, the Diwan-e-Aam, which sits over the central channel. Stand on its upstream side to see the first cascade and the line of fountains leading up the slope. Follow the channel uphill on the side path, stopping at each small waterfall; the stone slopes are carved in a fish-scale pattern so that the water ripples and catches the light.\n\nAt the middle terrace, look at the Diwan-e-Khas and the wider lawns on either side, where the old chinars are largest. Then climb the short flight of steps into the upper, walled Zenana garden. Walk around the black marble pavilion on all four sides, look into the chini khana niches behind the cascade, and take the classic picture looking back down the channel towards the lake. Return down the side lawns rather than the central path to see the flower beds and the boundary walls. Allow extra time in April and November, when you will stop more often.",
      },
      {
        heading: "Is Shalimar Bagh worth visiting?",
        body: "Yes, for almost every traveller. It is the best place in Kashmir to understand how the Mughals shaped the valley, it is easy to reach, it takes about an hour, and it looks different in every season. The only people who may skip it are travellers on a very short trip who have already seen Nishat Bagh on the same day and prefer to spend the time on a shikara ride; even then, Shalimar is the one most worth adding if you can. If you visit in April, combine it with the Tulip Garden; in November, plan your Srinagar day around it for the chinar colour.",
      },
    ],
    months: srinagarMonths([
      "Quiet, often frosty or under snow; fountains off. Good for snow photographs of the pavilions.",
      "Still bare and quiet; a short visit on a sunny afternoon.",
      "First bulbs and blossom; the garden wakes up late in the month.",
      "Peak flower season and busy; combine with the Tulip Garden nearby.",
      "Flower beds still full, fountains running, chinars in fresh leaf.",
      "Green and shaded; go in the morning or late afternoon to avoid the heat and crowds.",
      "Lush and cool under the chinars; showers can make the steps slippery.",
      "Green and quieter after mid-month; good for a slow walk.",
      "Clear light and fewer visitors; one of the best months for photographs.",
      "Dry and sunny; chinars start turning in the last week.",
      "Best chinar colour in the first half of the month; cold by late afternoon.",
      "Bare and cold; worth it after a snowfall.",
    ]),
    routes: [
      { from: "Dal Gate", to: "Shalimar Bagh", distanceKm: "about 11 km", time: "25 to 35 minutes", how: "Along the Boulevard past Nehru Park, Nishat Bagh and the lake road. Cabs and autos run this route all day." },
      { from: "Lal Chowk", to: "Shalimar Bagh", distanceKm: "about 15 km", time: "35 to 45 minutes", how: "Through Dalgate to the Boulevard, then along the eastern shore of Dal Lake." },
      { from: "Srinagar Airport", to: "Shalimar Bagh", distanceKm: "about 25 km", time: "50 to 70 minutes", how: "Via the city and the Boulevard; easier on the day you leave by keeping the garden for the morning." },
      { from: "Nishat Bagh", to: "Shalimar Bagh", distanceKm: "about 4 km", time: "10 minutes", how: "Straight along the lake road; most tours visit the two one after the other." },
    ],
    faqs: [
      { q: "Who built Shalimar Bagh in Srinagar?", a: "Mughal Emperor Jahangir laid it out in 1619 for his wife Nur Jahan. His son Shah Jahan later extended it and added the black marble pavilion on the upper terrace." },
      { q: "How far is Shalimar Bagh from Dal Gate?", a: "About 11 km along the Boulevard and the lake road, usually 25 to 40 minutes by cab depending on traffic." },
      { q: "What are Shalimar Bagh's timings?", a: "It usually opens around 9 am and closes around sunset, every day. Timings change by season, so check at the gate or with your hotel." },
      { q: "Is there an entry fee for Shalimar Bagh?", a: "Yes, a small ticket for adults, with lower rates for children. Fees are set by the Floriculture Department and can change, so check at the counter." },
      { q: "How much time do you need at Shalimar Bagh?", a: "About an hour to walk up the three terraces and back, or 90 minutes if you enjoy photography or visit in tulip or chinar season." },
      { q: "When are the fountains on at Shalimar Bagh?", a: "Usually from spring to autumn during opening hours. They are switched off in winter to protect the pipes from frost." },
      { q: "When do the chinar leaves turn colour at Shalimar Bagh?", a: "Usually from late October to mid November, with the best colour often in the first half of November. It varies by a week or two each year." },
      { q: "Can you do a photoshoot at Shalimar Bagh?", a: "Personal photography is welcome. Professional or pre-wedding shoots with crew and equipment usually need permission from the Floriculture Department." },
      { q: "Is Shalimar Bagh the same as the Shalimar gardens in Lahore?", a: "No. Srinagar's Shalimar Bagh came first, in 1619; Shah Jahan's Shalimar Gardens in Lahore were built in the 1640s and borrowed the name and plan." },
      { q: "Which is better, Shalimar Bagh or Nishat Bagh?", a: "Shalimar is the best preserved, with the finest pavilions. Nishat is larger, with twelve terraces and better views across Dal Lake. Most visitors see both on the same half day." },
      { q: "Is Shalimar Bagh worth visiting in winter?", a: "Yes, if you like quiet places and snow scenes. The flower beds are bare and the fountains off, but the pavilions under snow are beautiful." },
      { q: "Can you reach Shalimar Bagh by shikara?", a: "Some shikara routes end near the garden on the eastern shore, but most visitors come by road. If you want both, take a shikara ride from the Boulevard and visit the garden by cab." },
      { q: "Is Shalimar Bagh suitable for elderly visitors?", a: "Yes. The lower and middle terraces are almost level, with benches under the chinars. The upper terrace needs a few flights of steps, which most visitors manage slowly." },
      { q: "Are drones allowed at Shalimar Bagh?", a: "Not without permission. The Dal Lake area is sensitive and drone flights need clearance from the authorities." },
      { q: "What does the name Shalimar mean?", a: "It is usually explained as abode of love or a name of Sanskrit origin used for gardens in Kashmir before the Mughals. Jahangir called his garden Farah Bakhsh, the delightful, and Shah Jahan's upper terrace was named Faiz Bakhsh." },
    ],
  },

  "srinagar/places-to-visit/mughal-gardens": {
    facts: [
      { label: "The four in Srinagar", value: "Shalimar Bagh, Nishat Bagh, Chashme Shahi and Pari Mahal" },
      { label: "Built", value: "1619 to the 1650s, under Jahangir and Shah Jahan" },
      { label: "Where", value: "Along the Zabarwan hills on the eastern side of Dal Lake" },
      { label: "Time needed", value: "Half a day for all four" },
      { label: "Best seasons", value: "April to May for flowers; late October to mid November for chinars" },
      { label: "Managed by", value: "Department of Floriculture, Jammu and Kashmir" },
      { label: "Entry", value: "Separate small ticket at each garden; check timings on the day" },
    ],
    blocks: [
      {
        heading: "What are the Mughal gardens of Kashmir?",
        body: "The Mughal gardens are the terraced royal gardens that the Mughal emperors and their nobles built in Kashmir in the first half of the seventeenth century. The emperors spent summers in the valley to escape the heat of Agra, Delhi and Lahore, and they turned springs and hillsides around Dal Lake into formal gardens with water channels, cascades, fountains, stone pavilions and avenues of chinar trees.\n\nFour of them are in Srinagar and are visited on almost every Kashmir trip: Shalimar Bagh, Nishat Bagh, Chashme Shahi and Pari Mahal. Three more famous Mughal gardens lie in south Kashmir: Achabal, Verinag, where the Jhelum is said to rise, and Kokernag. Together they are among the best surviving examples of Mughal garden design anywhere, and the Srinagar gardens have been proposed for UNESCO World Heritage status.",
      },
      {
        heading: "How do you visit the Mughal gardens in one half day?",
        body: "The four Srinagar gardens lie within about 12 km of each other along the Boulevard and the lake road, so a cab can cover them in three to four hours including time inside. A practical order from Dal Gate is: Chashme Shahi first, then Pari Mahal just above it on the hillside, then down to Nishat Bagh and finally Shalimar Bagh, the furthest along the lake. In April, start with the Indira Gandhi Memorial Tulip Garden, which is next to Chashme Shahi, and add the Botanical Garden opposite if you have time.\n\nMost package itineraries include the gardens on the Srinagar sightseeing day, together with a shikara ride on Dal Lake in the late afternoon. If you have a full day, add Hazratbal Shrine on the northern shore after Shalimar. Each garden sells its own ticket at the gate.",
      },
      {
        heading: "Nishat Bagh: the garden of joy",
        body: "Nishat Bagh, the garden of joy, is the largest Mughal garden in Kashmir. It was built in 1633 by Asaf Khan, the brother of Empress Nur Jahan and father of Mumtaz Mahal, on the eastern shore of Dal Lake between the water and the Zabarwan hills. Its twelve terraces rise steeply from the lake road, traditionally linked to the twelve signs of the zodiac, with a broad water channel and cascades running down the centre.\n\nNishat is the best of the gardens for views: from the upper terraces you look straight across Dal Lake to Hari Parbat and, on clear days, to the snow peaks of the Pir Panjal range. The lawns are wide and the chinars huge, and on weekends it fills with local families. A popular story says Shah Jahan was so jealous of the garden that he cut off its water supply for a time. Allow about an hour.",
      },
      {
        heading: "Chashme Shahi: the royal spring",
        body: "Chashme Shahi, the royal spring, is the smallest of the Srinagar gardens and the closest to the city. It was laid out around 1632 by Ali Mardan Khan, a governor under Shah Jahan, around a natural spring on the hillside above the lake. The spring still flows from a small stone pavilion at the top of the garden, and many visitors fill a bottle with its cold water, which local people believe is good for digestion.\n\nThe garden has three terraces, a central channel, a cascade and fountains, all on a small, intimate scale. It sits next to the Raj Bhavan, so security checks at the approach road are normal. Chashme Shahi needs only 30 to 45 minutes and is easy to combine with Pari Mahal and the Tulip Garden, which are both a few minutes away.",
      },
      {
        heading: "Pari Mahal: the palace of fairies",
        body: "Pari Mahal is a ruined garden-palace on a spur of the Zabarwan hills above Chashme Shahi. It was built in the mid-seventeenth century by Prince Dara Shikoh, Shah Jahan's eldest son, for his Sufi teacher Mulla Shah, and is believed to have been used as a school of astronomy and astrology. Seven terraces of arched stone walls step down the hillside, with small gardens in front of them.\n\nPari Mahal is less a flower garden than a viewpoint. From its terraces you see the whole of Dal Lake, the houseboats, the Boulevard and the city, and it is one of the best sunset points in Srinagar. The terraces are lit up in the evening. The approach road passes through a security area near the Raj Bhavan, so carry ID. Allow 45 minutes, longer at sunset.",
      },
      {
        heading: "Shalimar Bagh: the emperor's garden",
        body: "Shalimar Bagh is the garden Emperor Jahangir laid out in 1619 for Nur Jahan, extended by Shah Jahan with a black marble pavilion on its upper terrace. It is the most formal and best preserved of the four, with three terraces, a long central channel and fountains under old chinars. Read the full Shalimar Bagh guide for its history, layout and a walking route.",
      },
      {
        heading: "Which Mughal garden should you see if you have little time?",
        body: "With one hour, choose Shalimar Bagh for history and architecture or Nishat Bagh for views. With two hours, see Nishat and Shalimar, which are 4 km apart on the same road. With three to four hours, see all four in the order Chashme Shahi, Pari Mahal, Nishat, Shalimar. In April, give the Tulip Garden priority over one of the smaller gardens, because it is only open for about a month each year.",
      },
      {
        heading: "How are the Mughal gardens designed?",
        body: "The Mughal gardens are based on the Persian charbagh, a garden divided into four parts by water channels that stood for the four rivers of paradise. In Kashmir, the Mughals placed this plan on a hillside: the garden climbs in terraces, spring water flows down a central channel from the top, and it drops from terrace to terrace in cascades over carved stone slopes, called chadars, that make the water shimmer. Pavilions are built across the channel so that visitors sit above running water. Fountains are fed by gravity rather than pumps, and the gardens are aligned so that the lake and mountains form the view from the top. Chinar trees, planted by the Mughals across the valley, give shade and the famous autumn colour.",
      },
      {
        heading: "When is the best time to visit the Mughal gardens?",
        body: "April and May are the most colourful months, when the flower beds are full of tulips, pansies and other spring flowers, the fountains run and the Tulip Garden next door is open. June to August are green, shaded and busy with summer visitors; go in the morning to avoid the afternoon heat. Late October to mid November is chinar season, when the gardens turn red and gold and photographers come from across India. Winter, from December to February, is quiet: the fountains are off, the beds are bare, but snow on the terraces is beautiful after a fresh fall.\n\nThe gardens are busiest on Sundays, public holidays and Eid, when local families come for picnics. Weekday mornings are the calmest.",
      },
      {
        heading: "Mughal garden timings and tickets",
        body: "Each garden opens every day, usually from about 9 am to sunset, with slightly shorter hours in winter. There is a separate small entry ticket for adults at each garden, with lower rates for children, sold at the gate. Pari Mahal and Chashme Shahi are reached through a security zone near the Raj Bhavan, which can close at short notice for VIP movement. Timings and fees are set by the Floriculture Department and change from time to time, so confirm on the day with your driver or hotel.",
      },
      {
        heading: "How to get to the Mughal gardens",
        body: "All four gardens are on the eastern side of Dal Lake. From Dal Gate, Chashme Shahi is about 7 km, Pari Mahal about 9 km, Nishat Bagh about 9 km and Shalimar Bagh about 11 km. The easiest way to see them is with the cab included in your Kashmir package, or a local taxi hired for half a day from the stands at Dal Gate and the Boulevard. Autos are fine for one or two gardens. The road to Pari Mahal is steep and narrow and buses cannot go up; cabs and autos can.",
      },
      {
        heading: "Tips for visiting the Mughal gardens",
        body: "Carry ID for the security checks near Chashme Shahi and Pari Mahal. Wear shoes with grip for the stone steps and cascades. Take water and a light jacket, as the shade is cool even in summer. Keep cash for tickets and tea stalls, since card machines are not always available. Do not pick flowers, walk on the beds or climb on old walls. Photography is welcome; professional shoots and drones need permission. Visit Pari Mahal late in the day for sunset and the evening lights.",
      },
      {
        heading: "The Mughal gardens of south Kashmir",
        body: "If you enjoy the Srinagar gardens, three more are worth a detour on the road to Pahalgam or as a day trip. Achabal, about 60 km from Srinagar, was laid out by Nur Jahan around a powerful spring, with cascades and a pavilion on terraces. Verinag, about 80 km away, has an octagonal stone tank built by Jahangir around the spring traditionally seen as the source of the Jhelum; Jahangir loved it above all his Kashmir gardens; he died in 1627 on the way back from the valley and was buried in Lahore. Kokernag, famous for its branching spring and its trout, is about 70 km from Srinagar. All three are quieter than the Srinagar gardens and make a good half day with Aharbal waterfall or Daksum.",
      },
      {
        heading: "Why did the Mughals build gardens in Kashmir?",
        body: "Babur, the founder of the dynasty, loved gardens and running water, and his descendants carried that love into India. Akbar brought Kashmir into the empire in 1586, and from then on the valley became the Mughals' summer retreat. Jahangir visited many times and wrote in his memoirs about its springs, flowers, saffron fields and climate; he and Nur Jahan built or remodelled gardens across the valley. Shah Jahan, his nobles and his son Dara Shikoh added more. The gardens were places to hold court in the cool air, to receive guests, to relax with the royal household and to show the power and taste of the empire. When the Mughal court stopped coming to Kashmir in the eighteenth century, the gardens were kept up by later rulers for their own use.",
      },
      {
        heading: "What to see at Nishat Bagh, terrace by terrace",
        body: "Nishat's lowest terraces open on to the lake road, with a pavilion over the channel where the water enters the lake. As you climb, the channel widens into pools with rows of fountains, and stone seats, or takht, are set right across the cascades so that you can sit with water flowing beneath you. The middle terraces have the widest lawns and the biggest chinars, popular with families. The top terrace, closed off by a high wall with small corner towers, was the women's garden; from here you get the best view of the whole garden falling away to the lake, with Hari Parbat fort on the far shore. Walking up and down at an easy pace takes 45 minutes to an hour.",
      },
      {
        heading: "The Tulip Garden and the Botanical Garden next door",
        body: "The Indira Gandhi Memorial Tulip Garden lies at the foot of the Zabarwan hills just below Chashme Shahi, and the Jawaharlal Nehru Memorial Botanical Garden is across the road. The Tulip Garden, one of the largest in Asia, opens for about a month each spring, usually from late March to late April, when its terraces are covered with more than a million tulips in dozens of varieties. The Botanical Garden is open through the season, with a lake, rose garden and shaded lawns. In April, start your Mughal gardens tour at the Tulip Garden as soon as it opens, before the crowds, then continue to Chashme Shahi and Pari Mahal.",
      },
      {
        heading: "The Mughal gardens for photographers",
        body: "For Shalimar, shoot down the central channel from the upper terrace in the morning, when the light runs along the water. For Nishat, the top terrace in late afternoon gives the lake and Hari Parbat in warm side light. Pari Mahal is the place for sunset and blue hour, with the city lights coming on across the lake. In autumn, check the chinar colour with your driver or hotel; it usually peaks in the first half of November and can change within days after a cold night. In spring, the best flowers in the gardens follow the Tulip Garden by a week or two. Tripods for personal use are generally fine away from busy paths.",
      },
      {
        heading: "Can you see the Mughal gardens from a shikara?",
        body: "Only partly. Nishat Bagh and Shalimar Bagh face the lake, and some longer shikara rides from the Boulevard pass close to the eastern shore, so you see the gardens from the water with the hills behind. You cannot enter the gardens from the boat at most points, though, so the usual plan is to visit the gardens by road in the morning and take a shikara ride in the late afternoon or at sunset. Ask your shikara owner for a route along the eastern shore if you want the garden views.",
      },
      {
        heading: "Protecting the gardens: conservation and the UNESCO bid",
        body: "The Mughal gardens are protected heritage sites looked after by the Department of Floriculture with conservation work on the old stone, water systems and trees. In 2010, the Mughal Gardens of Kashmir were placed on India's tentative list for UNESCO World Heritage status. Visitors help by keeping off flower beds and walls, not throwing litter in the channels and not carving names into the chinars. The chinars themselves are protected by law in Jammu and Kashmir and cannot be cut without permission.",
      },
      {
        heading: "Where to eat near the Mughal gardens",
        body: "There are no restaurants inside the gardens, only tea and snack stalls at the gates selling kahwa, soft drinks, roasted corn and biscuits. For lunch on a gardens day, most drivers stop on the Boulevard or around Dal Gate, where restaurants serve Kashmiri dishes such as rogan josh, yakhni and haak, along with North Indian and vegetarian food. Some lakeside cafes near Nishat and on the Boulevard have terraces overlooking the water. If you are touring all four gardens, a late lunch after Shalimar on the way back works well.",
      },
      {
        heading: "A sample half day: timings that work",
        body: "Leave Dal Gate at 9 am. Chashme Shahi from 9.20 to 10, Pari Mahal from 10.10 to 10.50, Nishat Bagh from 11.10 to 12.10, Shalimar Bagh from 12.20 to 1.30, then lunch on the way back. In April, add the Tulip Garden from 9 to 10 and shift the rest by an hour. In November, reverse the order and end at Pari Mahal around sunset, which comes early, around 5.15 pm. Security closures near the Raj Bhavan can change the order on the day, so let your driver adjust it.",
      },
      {
        heading: "After the gardens: Hari Parbat and the old city",
        body: "If you finish the gardens by lunch, the afternoon suits the older side of Srinagar across the lake. Hari Parbat, the hill with the Durrani-era fort, has the Makhdoom Sahib shrine and Sharika Devi temple on its slopes and views back over Dal Lake to the gardens you saw in the morning. Below it, the old city has the Jamia Masjid, the wooden Khanqah-e-Moula on the Jhelum and the lanes of craft workshops. Return to the Boulevard for a sunset shikara ride.",
      },
      {
        heading: "Are the Mughal gardens worth visiting?",
        body: "Yes. Along with Dal Lake itself, they are the defining sight of Srinagar and the clearest picture of how the Mughals shaped Kashmir. They are easy to reach, inexpensive, suitable for all ages and different in every season. On a short trip, give them half a day; on a longer trip, return in a different light, for example Pari Mahal at sunset or Shalimar early in the morning. If you are visiting in late October or November, make the chinar colour in the gardens a main reason to stay an extra day in Srinagar.",
      },
      {
        heading: "The Mughal gardens with children and older travellers",
        body: "Children enjoy the open lawns and fountains, especially at Nishat and Shalimar, where there is room to run away from the road. Keep an eye on them near the channels and cascades, which can be slippery. Older travellers can see the lower terraces of every garden with few steps; Nishat's upper terraces and Pari Mahal involve more climbing, which most people manage slowly with breaks on the many benches. Chashme Shahi is the most compact and the easiest to see in full.",
      },
    ],
    months: srinagarMonths([
      "Quiet and frosty; fountains off. Visit after a snowfall for photographs.",
      "Still bare; a short sunny visit, with Pari Mahal for the view.",
      "Blossom and first bulbs; gardens wake up late in the month.",
      "Peak flower month, with the Tulip Garden open next to Chashme Shahi.",
      "Flower beds full and fountains running; busy but beautiful.",
      "Green and shaded; go early or late in the day.",
      "Lush and cool under the chinars; afternoon showers possible.",
      "Green and quieter after mid-month.",
      "Clear light and fewer crowds; good for photographs.",
      "Dry and sunny; chinars begin to turn late in the month.",
      "Peak chinar colour in the first half of the month.",
      "Bare and cold; best after fresh snow.",
    ]),
    routes: [
      { from: "Dal Gate", to: "Chashme Shahi", distanceKm: "about 7 km", time: "15 to 25 minutes", how: "Along the Boulevard, then up the road towards the Raj Bhavan; security check on the approach." },
      { from: "Chashme Shahi", to: "Pari Mahal", distanceKm: "about 2 km", time: "10 minutes", how: "A steep, narrow road up the hill; cabs and autos only." },
      { from: "Pari Mahal", to: "Nishat Bagh", distanceKm: "about 7 km", time: "15 to 20 minutes", how: "Back down to the Boulevard and along the eastern shore of Dal Lake." },
      { from: "Nishat Bagh", to: "Shalimar Bagh", distanceKm: "about 4 km", time: "10 minutes", how: "Straight along the lake road." },
    ],
    faqs: [
      { q: "How many Mughal gardens are there in Srinagar?", a: "Four are usually visited: Shalimar Bagh, Nishat Bagh, Chashme Shahi and Pari Mahal. Achabal, Verinag and Kokernag are further Mughal gardens in south Kashmir." },
      { q: "Which is the largest Mughal garden in Kashmir?", a: "Nishat Bagh, with twelve terraces rising from the shore of Dal Lake. Shalimar Bagh is the second largest and the best preserved." },
      { q: "Which is the smallest Mughal garden in Srinagar?", a: "Chashme Shahi, built around a natural spring next to the Raj Bhavan. It takes 30 to 45 minutes to see." },
      { q: "Can you see all the Mughal gardens in one day?", a: "Yes. The four Srinagar gardens fit easily into half a day by cab, leaving time for a shikara ride or Hazratbal Shrine." },
      { q: "Who built Nishat Bagh?", a: "Asaf Khan, the brother of Empress Nur Jahan and father of Mumtaz Mahal, in 1633." },
      { q: "Who built Pari Mahal?", a: "Prince Dara Shikoh, Shah Jahan's eldest son, in the mid-seventeenth century, for his Sufi teacher Mulla Shah." },
      { q: "Is the water at Chashme Shahi safe to drink?", a: "Many visitors and local people drink from the spring, which is believed to aid digestion. If you have a sensitive stomach, carry bottled water instead." },
      { q: "Do you need ID for Pari Mahal and Chashme Shahi?", a: "Carry one. Both are reached through a security area near the Raj Bhavan, and checks are routine." },
      { q: "What are the Mughal garden timings?", a: "Usually about 9 am to sunset every day, a little shorter in winter. Each garden has its own ticket counter; confirm timings on the day." },
      { q: "Which Mughal garden is best for sunset?", a: "Pari Mahal, high above Dal Lake, with the terraces lit up after dark." },
      { q: "Are the Mughal gardens open in winter?", a: "Yes, but the fountains are off and the flower beds bare. They are quiet and very beautiful after snow." },
      { q: "When are the Mughal gardens most colourful?", a: "April and May for flowers, and late October to mid November for the red and gold chinar leaves." },
      { q: "Is the Tulip Garden one of the Mughal gardens?", a: "No. The Indira Gandhi Memorial Tulip Garden is a modern garden that opened in 2007, below Chashme Shahi. Most April tours combine it with the Mughal gardens." },
      { q: "Are the Mughal gardens a UNESCO World Heritage Site?", a: "Not yet. The Mughal Gardens of Kashmir have been on India's tentative list for UNESCO World Heritage status since 2010." },
      { q: "What should I wear to the Mughal gardens?", a: "Comfortable shoes with grip for the stone steps, and a light jacket, since the shade is cool. Modest clothing is appreciated in Kashmir." },
    ],
  },

  "srinagar/places-to-visit/hazratbal-shrine": {
    facts: [
      { label: "What it is", value: "Srinagar's most revered Muslim shrine, holding the Moi-e-Muqaddas relic" },
      { label: "Where", value: "North-western shore of Dal Lake, about 9 km from Dal Gate" },
      { label: "Present building", value: "White marble mosque with a dome, completed in the late 1970s" },
      { label: "Time needed", value: "45 minutes to 1 hour" },
      { label: "Dress", value: "Modest clothing; women cover their heads; shoes off inside" },
      { label: "Entry", value: "Free" },
      { label: "Best time of day", value: "Morning or late afternoon, outside Friday prayers" },
    ],
    blocks: [
      {
        heading: "What is Hazratbal Shrine?",
        body: "Hazratbal is a white marble mosque and shrine on the north-western shore of Dal Lake, and the most important Muslim place of worship in Kashmir. It houses the Moi-e-Muqaddas, a relic believed by the faithful to be a hair of the Prophet Muhammad. The name comes from Hazrat, the respected one, and bal, Kashmiri for a place by the water.\n\nFor visitors, Hazratbal is both a working place of prayer and one of Srinagar's most beautiful buildings: a gleaming white dome and minaret set against the lake, with the Zabarwan hills behind and pigeons circling the courtyard. It is open to visitors of all faiths who come respectfully, and it is the most visited sight on the northern side of the lake.",
      },
      {
        heading: "The history of Hazratbal and the relic",
        body: "According to tradition, the relic was brought from Medina to India in the seventeenth century and reached Kashmir in 1699, during the reign of Aurangzeb, through a Kashmiri merchant family. It was first kept at the Naqshbandi shrine in the old city and then moved to this spot on the lake, where a garden and pavilion built in the Mughal period had become a prayer hall. Over the centuries the shrine grew in importance as the faithful gathered here on holy days.\n\nIn December 1963 the relic disappeared from the shrine, setting off huge protests across the valley; it was recovered in early January 1964. The present marble building, designed in a style that mixes Mughal and Kashmiri elements with a single dome, was built between 1968 and 1979 under the Muslim Auqaf Trust, which still manages the shrine.",
      },
      {
        heading: "When is the relic displayed at Hazratbal?",
        body: "The Moi-e-Muqaddas is not on daily view. It is shown to the congregation on important Islamic days, including the Prophet's birthday (Eid-e-Milad un-Nabi), Shab-e-Miraj, and the anniversaries of the Prophet's companions, as well as on some Fridays after these days. On these occasions tens of thousands of people come from across Kashmir, the roads around the lake fill with pilgrims and the shrine is lit up at night. If you visit on such a day, expect crowds, heavy security and road closures; if you prefer a quiet visit, avoid these dates.",
      },
      {
        heading: "Hazratbal visiting rules and etiquette",
        body: "Hazratbal is a place of worship first. Dress modestly: long trousers or skirts and covered shoulders for everyone, and a scarf or dupatta for women to cover their hair. Shoes are removed before entering the prayer areas; there are shoe racks at the entrance. Women pray in a separate section and some inner areas of the shrine are reserved for men. Speak quietly, do not walk in front of people praying and avoid the main prayer times, especially the Friday noon prayer, when the shrine and courtyard are full. Photography of the building from outside and in the courtyard is generally accepted; do not photograph people praying without permission, and put your camera away inside the prayer hall.",
      },
      {
        heading: "When is the best time to visit Hazratbal?",
        body: "Any time of year works, since Hazratbal is a building rather than a garden. Morning, after the early prayer and before noon, is calm, and late afternoon gives warm light on the white marble with the hills behind. Fridays around midday are the busiest time of the week. Spring and autumn are the most pleasant seasons for walking along the waterfront; in winter, the courtyard can be very cold, but the building under snow is striking.\n\nDuring Ramadan, the shrine is busy in the evenings, and the night prayers are a moving experience for respectful visitors who keep to the side.",
      },
      {
        heading: "How to reach Hazratbal Shrine",
        body: "Hazratbal is on the north-western shore of Dal Lake, about 9 km from Dal Gate and about 7 km from Lal Chowk, near the University of Kashmir. By cab it takes 20 to 30 minutes through Nowhatta or along the western lake road via Nigeen. Autos and local buses run from Lal Chowk and Dal Gate. Some longer shikara rides cross the lake towards the Hazratbal side, which is a peaceful way to arrive, but most visitors come by road.\n\nParking is near the main gate; on Fridays and holy days it fills early, and the police may stop vehicles some distance away.",
      },
      {
        heading: "What to see around the shrine",
        body: "The waterfront promenade in front of the shrine looks across the lake to the Zabarwan hills, Nishat and Shalimar, and is a popular place for local families in the evening. Pigeons gather in the courtyard and people feed them with grain sold by vendors. Along the approach are stalls selling prayer caps, rosaries, dry fruit, Kashmiri bread and snacks. The University of Kashmir campus is next door. On the lake nearby you will see vegetable gardens and the lotus beds of the northern part of Dal, which flower pink in July and August.",
      },
      {
        heading: "Food near Hazratbal",
        body: "Hazratbal is known for its fried fish and the stalls near the shrine selling it, along with Kashmiri breads, kebabs and plates of nadru (lotus stem) snacks. Small eateries along the approach road serve tea and simple Kashmiri meals. Food stalls are busiest after Friday prayers and on festival days. Vegetarians will find tea, bread and snacks but fewer full meals; restaurants with vegetarian food are easier to find back in the city around Dal Gate and the Boulevard.",
      },
      {
        heading: "How to fit Hazratbal into your Srinagar sightseeing",
        body: "Hazratbal fits best after the Mughal gardens: from Shalimar Bagh, it is about 20 minutes across the northern end of the lake. A full Srinagar day can run Chashme Shahi, Pari Mahal, Nishat Bagh, Shalimar Bagh, then Hazratbal, and back along the western side of the lake past Nigeen in time for a sunset shikara. Alternatively, combine Hazratbal with Nigeen Lake and the old city in a separate half day. Allow 45 minutes to an hour at the shrine.",
      },
      {
        heading: "Hazratbal for non-Muslim visitors",
        body: "Visitors of every faith are welcome at Hazratbal if they come respectfully, dress modestly and follow the rules on shoes, head covering and photography. Many Indian tourists visit as part of their Srinagar sightseeing. If you are unsure about an area, ask a caretaker or simply stay in the courtyard and on the waterfront, from where the building is best seen anyway. Avoid visiting during the main Friday prayer and on the days the relic is displayed, when the crowds are made up of worshippers.",
      },
      {
        heading: "Hazratbal for families and older travellers",
        body: "The shrine and its courtyard are on level ground, with the parking close to the gate, so it is one of the easiest Srinagar sights for older visitors. There are steps at some entrances but no long climbs. Children enjoy the pigeons and the waterfront; keep them close near the water and in crowds. The courtyard stone can be very hot in summer afternoons and very cold in winter when you are barefoot or in socks, so plan for that.",
      },
      {
        heading: "Before the mosque: the Mughal garden at Hazratbal",
        body: "Long before the relic arrived, this stretch of shore was a Mughal pleasure garden. In 1623, Sadiq Khan, a noble at Shah Jahan's court, laid out a garden here with a pavilion called Ishrat Mahal, the house of pleasure. When Shah Jahan visited in 1634, he ordered that the pavilion be turned into a prayer house. That change of use is why the shrine sits on a waterfront that still feels like a garden, with open ground and views across the lake rather than the closed lanes around the old city mosques.",
      },
      {
        heading: "The architecture of Hazratbal",
        body: "The present building is the only domed mosque of its kind in Srinagar, where the older mosques, such as the Jamia Masjid and Khanqah-e-Moula, have pyramid-shaped wooden roofs in the Kashmiri style. Hazratbal's white marble walls, single large dome and slender minaret echo Mughal architecture, while the arched windows, wooden ceilings and calligraphy inside follow Kashmiri craft traditions. The building faces the lake on one side and a large courtyard and garden on the other, with separate halls for men and women. In clear weather, the white dome is visible from much of Dal Lake and is one of the landmarks shikara boatmen point out.",
      },
      {
        heading: "Festivals and holy days at Hazratbal",
        body: "Eid-e-Milad un-Nabi, the Prophet's birthday, is the largest gathering of the year, with prayers through the night and the relic shown to the crowd. Shab-e-Miraj, the night of the Prophet's ascension, brings a similar gathering. During Ramadan, the shrine is busy at the evening prayers and the late-night taraweeh, and Eid-ul-Fitr and Eid-ul-Adha mornings see large congregations. On these days the lake roads are closed to traffic for long stretches and buses bring pilgrims from across Kashmir. Tourists can watch from a respectful distance, but expect long walks from where vehicles are stopped.",
      },
      {
        heading: "The northern side of Dal Lake around Hazratbal",
        body: "Hazratbal sits on the quieter northern part of Dal Lake, away from the houseboat lines of the Boulevard. Here the lake is broken up by floating vegetable gardens, willow-lined channels and lotus beds, and the water villages of the lake people, who farm and fish from boats. A shikara ride on this side, starting from Hazratbal or Nigeen, shows a side of the lake many visitors miss: farmers tending tomatoes and gourds on floating plots, kingfishers on the willows and, in July and August, the pink lotus in flower. Ask your boatman for a route through these channels rather than the usual houseboat circuit.",
      },
      {
        heading: "What else is near Hazratbal?",
        body: "Nigeen Lake, with its quieter houseboats, is about 4 km south along the western shore. Naseem Bagh, a chinar garden planted in Mughal times and now part of the University of Kashmir campus, lies next to the shrine. The Kashmir University campus itself runs along the lake. Across the water are the Mughal gardens of Shalimar and Nishat. The road north continues towards Ganderbal and Sonamarg, so Hazratbal can also be a short stop at the start of a Sonamarg day trip if you leave early.",
      },
      {
        heading: "Photographing Hazratbal",
        body: "The best view of the shrine is from the water or from the promenade to its side, with the white dome reflected in the lake in still morning conditions. Late afternoon light warms the marble. In autumn, chinars around Naseem Bagh frame the dome in gold. Keep photography respectful: no close portraits of worshippers without asking, no photography inside the prayer halls, and no drones without permission from the authorities.",
      },
      {
        heading: "A half day: Hazratbal, Nigeen and the old city",
        body: "Start at Hazratbal at about 9 am, when the courtyard is calm and the light is soft on the lake. Spend 45 minutes at the shrine and on the waterfront, then drive 10 minutes south to Nigeen Lake for an hour-long shikara ride through the quieter channels and lotus beds. Continue to the old city for the Jamia Masjid with its 378 wooden pillars and the Khanqah-e-Moula on the Jhelum, and finish with lunch in Lal Chowk or at a Kashmiri restaurant near Dal Gate. This plan avoids the crowds of the Boulevard and shows Srinagar's religious and lake life together.",
      },
      {
        heading: "Visiting Hazratbal on a Friday",
        body: "Friday is the busiest day at Hazratbal, especially around the noon prayer, when the courtyard and the lawns fill with worshippers and the approach roads are crowded. If Friday is your only Srinagar day, visit in the early morning or late afternoon instead, or see the shrine from the water during a shikara ride. If you want to see the Friday gathering, stand back near the outer gate or on the promenade, keep your camera away and let the crowd pass.",
      },
      {
        heading: "Security at Hazratbal",
        body: "Like most important places in Srinagar, Hazratbal has a police and security presence, especially on holy days. Bags may be checked at the gate. Carry ID, avoid large bags and follow instructions from the police and the shrine's volunteers. On normal days the atmosphere is relaxed and family-friendly, with children playing on the lawns and families feeding the pigeons.",
      },
      {
        heading: "Shopping near Hazratbal",
        body: "The stalls on the approach to the shrine sell prayer caps, rosaries, attar perfumes, religious books, dry fruit and walnuts, and Kashmiri breads and sweets. Prices are fixed and modest. For crafts such as pashmina, papier mache, walnut wood or carpets, it is better to shop in the old city or at government emporiums in the city, where you can compare quality.",
      },
      {
        heading: "Is Hazratbal worth visiting?",
        body: "Yes. It is the spiritual heart of Muslim Kashmir and one of the most beautiful buildings in Srinagar, with a setting on the lake that is hard to match. Even travellers with little interest in religious sites enjoy the view, the evening life on the waterfront and the food stalls. Visit with respect, choose a quiet time and combine it with the gardens or Nigeen Lake to make the most of the northern side of Dal.",
      },
    ],
    months: srinagarMonths([
      "Cold but calm; the courtyard is icy, so wear warm socks.",
      "Quiet visits in sunny late mornings.",
      "Spring light on the white marble; pleasant waterfront walks.",
      "Busy spring season; mornings are calmest.",
      "Pleasant and lively; evenings on the waterfront are popular.",
      "Warm; visit early or late, as the courtyard stone heats up.",
      "Lotus beds flower near the shrine; showers possible.",
      "Lotus season continues; warm afternoons.",
      "Clear and pleasant; good light for photographs.",
      "Crisp mornings and golden light on the dome.",
      "Cold mornings; chinars turn on the approach roads.",
      "Cold and quiet; the shrine is beautiful after snow.",
    ]),
    routes: [
      { from: "Dal Gate", to: "Hazratbal", distanceKm: "about 9 km", time: "20 to 30 minutes", how: "By the western lake road via Nigeen, or through the city; cabs, autos and buses." },
      { from: "Lal Chowk", to: "Hazratbal", distanceKm: "about 7 km", time: "20 to 30 minutes", how: "Through Nowhatta and the university road; frequent local buses and autos." },
      { from: "Shalimar Bagh", to: "Hazratbal", distanceKm: "about 8 km", time: "20 minutes", how: "Around the northern end of Dal Lake; easy to combine after the Mughal gardens." },
      { from: "Srinagar Airport", to: "Hazratbal", distanceKm: "about 20 km", time: "40 to 60 minutes", how: "Through the city; leave extra time on Fridays." },
    ],
    faqs: [
      { q: "What is kept at Hazratbal Shrine?", a: "The Moi-e-Muqaddas, a relic believed by the faithful to be a hair of the Prophet Muhammad. It is shown to the public only on important Islamic days." },
      { q: "Can non-Muslims visit Hazratbal?", a: "Yes. Visitors of all faiths are welcome if they dress modestly, remove shoes in the prayer areas, and avoid prayer times and holy days." },
      { q: "Can women enter Hazratbal?", a: "Yes. Women should cover their heads and dress modestly. They pray in a separate section, and some inner areas are reserved for men." },
      { q: "What are Hazratbal Shrine's timings?", a: "It is open from early morning until after the evening prayer. Avoid the Friday noon prayer and holy days if you want a quiet visit." },
      { q: "Is there an entry fee at Hazratbal?", a: "No. Entry is free." },
      { q: "Is photography allowed at Hazratbal?", a: "Photographs of the building from outside and in the courtyard are generally fine. Do not photograph people praying, and put cameras away inside the prayer hall." },
      { q: "How far is Hazratbal from Dal Gate?", a: "About 9 km, usually 20 to 30 minutes by cab." },
      { q: "When was the Hazratbal mosque built?", a: "The present white marble building was built between 1968 and 1979. The shrine itself dates from the late seventeenth century, when the relic reached Kashmir." },
      { q: "When is the relic shown at Hazratbal?", a: "On important days such as Eid-e-Milad un-Nabi and Shab-e-Miraj, and some Fridays after them. Expect very large crowds on those days." },
      { q: "What food is Hazratbal famous for?", a: "Fried fish, Kashmiri breads, kebabs and nadru (lotus stem) snacks from the stalls near the shrine." },
      { q: "How much time do you need at Hazratbal?", a: "45 minutes to an hour for the shrine, courtyard and waterfront, longer if you stop to eat." },
      { q: "Can you combine Hazratbal with the Mughal gardens?", a: "Yes. From Shalimar Bagh it is about 20 minutes around the northern end of Dal Lake, making a natural full-day loop." },
      { q: "Is Hazratbal crowded on Fridays?", a: "Yes, especially around the noon prayer. Visit early in the morning or late in the afternoon for a calm visit." },
      { q: "Can you reach Hazratbal by shikara?", a: "Some longer shikara rides cross to the northern shore near Hazratbal, and rides from Nigeen pass close by. Most visitors come by road and see the shrine from the water separately." },
      { q: "Do I need to cover my head at Hazratbal?", a: "Women should cover their hair with a scarf or dupatta. Men often wear a cap in the prayer hall, but it is not required in the courtyard." },
      { q: "Is Hazratbal safe to visit?", a: "Yes. It is a busy family place with a security presence. On holy days, expect crowds and road closures, and follow police instructions." },
    ],
  },

  "srinagar/places-to-visit/shankaracharya-temple": {
    facts: [
      { label: "Deity", value: "Lord Shiva (Jyeshteshwara)" },
      { label: "Where", value: "Top of Takht-e-Sulaiman (Gopadri) hill, above the Boulevard and Dal Lake" },
      { label: "Height", value: "About 300 m above the city" },
      { label: "Climb", value: "About 240 steps from the parking at the end of the hill road" },
      { label: "Time needed", value: "1.5 to 2 hours including the drive up" },
      { label: "Phones and cameras", value: "Usually not allowed beyond the security check; leave them in the car" },
      { label: "Entry", value: "Free; open in daytime only, hours set by security" },
    ],
    blocks: [
      {
        heading: "What is the Shankaracharya Temple?",
        body: "The Shankaracharya Temple is a small stone Shiva temple on the summit of the hill that rises straight out of the city between Dal Lake and the Jhelum. It is one of the oldest temple sites in Kashmir and the most famous viewpoint in Srinagar: from the platform around the shrine you see the whole of Dal Lake with its houseboats and floating gardens, the Boulevard, the old city, Hari Parbat fort, the Jhelum winding through Srinagar and, on clear days, the snow peaks of the Pir Panjal range.\n\nThe hill is known as Takht-e-Sulaiman, the throne of Solomon, in Persian and Kashmiri, and as Gopadri in older Sanskrit texts. The temple takes its present name from Adi Shankaracharya, the eighth-century philosopher who, according to tradition, stayed and meditated here on his journey to Kashmir.",
      },
      {
        heading: "History and legends of the temple",
        body: "Kashmiri tradition holds that a temple stood on this hill more than two thousand years ago, built by a king named Gopaditya, which is why the hill was called Gopadri. Historians date the present stone temple to roughly the ninth century, though it has been repaired many times since. Adi Shankaracharya is believed to have visited Kashmir and stayed on this hill, where some traditions say he composed the hymn Saundarya Lahari; a small cave below the temple is shown as the place where he meditated.\n\nIn the Dogra period, Maharaja Gulab Singh is credited with building the stone stairway to the summit, and the Dogra rulers later added electric lighting. A Shiva lingam with a snake coiled around it stands in the sanctum. Today the temple is managed by a local Hindu trust, and the hill is a protected forest and security area.",
      },
      {
        heading: "What does the temple look like?",
        body: "The temple stands on a high octagonal plinth of grey stone, reached by a flight of steps. The shrine itself is square, built in the old Kashmiri style of heavy dressed stone, with a modern roof added over the original. Inside is a small, dimly lit sanctum with the Shiva lingam, where the priest performs aarti. Around the plinth runs a stone platform with railings, which is where everyone stands to take in the view. The temple is small; the reason to come is the setting and the panorama as much as the building.",
      },
      {
        heading: "Shankaracharya Temple timings and rules",
        body: "The temple is open in daylight hours only, usually from about 7 or 8 am to about 5 pm, with the hill road closing a little earlier. Timings are set by the security forces who guard the hill and can change with the season or the security situation, so check with your driver or hotel. Entry is free.\n\nMobile phones, cameras and electronic items are usually not allowed beyond the security check at the base of the stairs. Leave them in your car or with your driver; there is no reliable locker. Leather items such as belts may be refused near the sanctum, and shoes are removed at the top of the stairs. Large bags are not allowed. Dress modestly and keep your voice down near the shrine.",
      },
      {
        heading: "How to reach the Shankaracharya Temple",
        body: "The temple is reached by a winding road that climbs the hill from the Boulevard side, near Durganag and Sonawar, about 5 km from Dal Gate. Taxis and private cars can drive up to the parking area near the top; autos usually do not. The drive up takes 15 to 20 minutes, with a security check on the way. From the parking area, a stone staircase of about 240 steps leads to the temple. The climb takes 10 to 20 minutes at an easy pace, with railings and a few landings to rest on.\n\nThere is no public transport up the hill, so come by cab. Most Srinagar sightseeing itineraries include the temple on the first or second day, often combined with the Mughal gardens or a shikara ride.",
      },
      {
        heading: "Is the climb difficult?",
        body: "The 240 or so steps are steady but not steep, with handrails on both sides and places to pause. Most people, including children and many older travellers, manage the climb slowly in 15 to 20 minutes. The altitude is only a little above Srinagar's, so breathing is not a problem for healthy visitors. People with heart conditions, knee problems or difficulty with stairs should think carefully: there is no lift or ramp, and the steps can be slippery in rain or snow. Wear shoes that are easy to remove and put back on at the top.",
      },
      {
        heading: "When is the best time to visit the Shankaracharya Temple?",
        body: "Clear days give the best view, so choose a morning after rain or a dry day in spring, autumn or winter. In April and May, the city below is green and the Zabarwan hills are fresh; September and October bring the clearest air and the longest views to the Pir Panjal. In winter, snow on the city roofs, the frozen edges of Dal Lake and the white peaks make the view especially dramatic, but the hill road can close after heavy snow and the steps can be icy.\n\nMorning is generally better than afternoon: the light falls on the lake and the city, the air is clearer and the hill is less crowded. On Mondays, Shivratri and during the Amarnath Yatra season, the temple is busier with pilgrims.",
      },
      {
        heading: "Festivals at the Shankaracharya Temple",
        body: "Mahashivratri, known in Kashmir as Herath, is the most important festival at the temple, with prayers through the day and many Kashmiri Pandit families visiting. During the Amarnath Yatra in July and August, the Chhari Mubarak, the holy mace of Lord Shiva, is taken to the Shankaracharya Temple for prayers before it begins its journey to the Amarnath cave. Mondays in the month of Shravan are also busy. On these days, expect queues at the security check and plan more time.",
      },
      {
        heading: "What you see from the top",
        body: "Facing north, the whole of Dal Lake lies below you: the houseboat lines along the Boulevard, the floating gardens and the islands of Char Chinar and Nehru Park, with Hazratbal's white dome far across the water. To the north-west, Hari Parbat fort rises over the old city. To the west, the Jhelum curves through Srinagar past its old bridges. To the east and north-east, the Zabarwan hills shelter Chashme Shahi, Nishat and Shalimar. On clear days, the Pir Panjal range is a white line to the south and west, and the mountains towards Sonamarg rise in the north-east. Even without a camera, it is the best way to understand the shape of Srinagar.",
      },
      {
        heading: "How to fit the temple into your Srinagar day",
        body: "The temple works well as the first stop of a Srinagar sightseeing day: go up at 8 or 9 am for the clearest view, come down by 10.30 and continue to the Mughal gardens along the Boulevard. Alternatively, visit after the gardens in the early afternoon, then take a shikara ride from the Boulevard at sunset. Because phones are not allowed at the top, plan any pictures of the lake for Pari Mahal, which has a similar, slightly lower viewpoint where cameras are welcome.",
      },
      {
        heading: "Shankaracharya Temple or Pari Mahal for the view?",
        body: "Both give wide views over Dal Lake. The Shankaracharya Temple is higher and more central, with the lake, the old city and the river all in one view, but phones and cameras are usually not allowed. Pari Mahal is lower and further east, with a closer view of the lake and the gardens, cameras are welcome and the terraces are lit in the evening. If you want photographs, choose Pari Mahal; if you want the full panorama and a visit to one of Kashmir's oldest temples, choose Shankaracharya. Many travellers do both on the same day.",
      },
      {
        heading: "Tips for visiting",
        body: "Carry ID for the security checks. Leave phones, cameras, power banks and large bags in the car. Wear shoes that slip on and off easily and socks, since the stone at the top can be very hot in summer or icy in winter. Carry a small bottle of water, as there are no shops at the top. If you have an offering, flowers and sweets are usually bought at the stalls near the base or in the city before you go up. Go early to avoid queues at the security check, and allow extra time on Mondays and festivals.",
      },
      {
        heading: "Shankaracharya Temple for families and older travellers",
        body: "Families with children usually manage the climb without trouble; hold small children's hands on the steps and at the railings at the top. Grandparents who walk slowly can take the stairs in stages with rest at the landings. People who cannot climb stairs can still enjoy the drive up through the forest and the views from the road and parking area, which are good though not as complete as from the summit.",
      },
      {
        heading: "The temple and Kashmiri Shaivism",
        body: "Kashmir has one of the oldest Shaiva traditions in India. Kashmir Shaivism, the school of thought developed by teachers such as Vasugupta, Abhinavagupta and Lalleshwari (Lal Ded) between the ninth and fourteenth centuries, sees Shiva as pure consciousness present in everything. The hill temple, dedicated to Shiva as Jyeshteshwara, has been a focus of that tradition for centuries. For Kashmiri Pandits, the temple is part of a sacred landscape that includes the Sharika Devi shrine on Hari Parbat, Kheer Bhawani at Tulmulla and the Amarnath cave, and many families who now live outside Kashmir make a point of climbing the steps when they return.",
      },
      {
        heading: "Kashmir's ancient stone temples",
        body: "The Shankaracharya Temple belongs to a family of old Kashmiri stone temples built between roughly the seventh and twelfth centuries, with heavy dressed stone, trefoil arches and steep pyramidal roofs. If it interests you, three more are on the road south of Srinagar. Pandrethan, on the outskirts of the city, is a small Shiva temple standing in a tank. Avantipora, about 30 km away on the Pahalgam road, has the ruins of two temples built by King Avantivarman in the ninth century, with carved stone pillars and gateways. Martand, near Anantnag, is the grandest: the ruins of an eighth-century sun temple built by King Lalitaditya on a plateau with views of the valley. Each makes a short stop on the way to Pahalgam.",
      },
      {
        heading: "Visiting the Shankaracharya Temple in winter",
        body: "From December to February, the view from the hill is at its most dramatic: snow on the roofs of the city, ice along the edges of Dal Lake, and the Pir Panjal and Zabarwan ranges white against a blue sky on clear days. The hill road is cleared after snowfall but can stay closed for a day or two after heavy falls, and the steps are often icy in the morning. Wear boots with grip and warm socks, since you remove your shoes at the top, and go in the late morning when the sun has softened the ice. Chillai Kalan, from 21 December to the end of January, brings the coldest days, so dress in layers.",
      },
      {
        heading: "A morning plan: the temple, the Boulevard and a shikara",
        body: "Leave your hotel at 8 am, drive up the hill and reach the parking by 8.30. Climb the steps, spend half an hour at the top for the view and the darshan, and be back at the car by about 9.45. Drive down to the Boulevard for kahwa at a lakeside cafe, then take a one-hour shikara ride to Char Chinar and Nehru Park while the lake is calm. Continue to the Mughal gardens before lunch. This plan gives you Srinagar's best view and the lake at its quietest before the midday crowds.",
      },
      {
        heading: "The forest on the hill",
        body: "The hill is covered with a protected forest of pine, deodar and broadleaf trees, and the drive up feels far from the busy Boulevard below. The forest is a reserved and security area, so do not stop on the road, wander off it or leave litter. In autumn, the trees on the lower slopes turn gold, and in winter the forest is often under snow, which makes the drive one of the prettiest short journeys in Srinagar.",
      },
      {
        heading: "What to wear at the Shankaracharya Temple",
        body: "Wear comfortable clothes for the climb and shoes or sandals that are easy to take off at the top. Socks help on the stone, which is cold in winter and hot on summer afternoons. Modest clothing is appreciated at a temple; there is no strict dress code for tourists. Carry a light jacket even in summer, as it is breezy at the summit. Avoid leather belts and bags if you want to go near the sanctum.",
      },
      {
        heading: "Is the Shankaracharya Temple worth visiting?",
        body: "Yes. It combines one of the oldest sacred sites in Kashmir with the single best view of Srinagar, and it takes under two hours. Pilgrims come for the temple and its link to Adi Shankaracharya; other travellers come for the panorama. The only drawback is that you cannot take photographs, which many visitors end up enjoying, since it means looking rather than shooting.",
      },
      {
        heading: "Nearby: Durganag, the Boulevard and Dal Lake",
        body: "At the foot of the hill, the Durganag temple and the Sonawar area lie along the road towards the Boulevard. The Boulevard itself, with its houseboats, shikara ghats, cafes and shops, is a few minutes away. Nehru Park and the Char Chinar island are easy shikara stops from here. The Mughal gardens are 15 to 30 minutes along the lake, and the old city and Hari Parbat are across the city to the north-west.",
      },
    ],
    months: srinagarMonths([
      "Snow views from the summit on clear days; the hill road can close after heavy snow.",
      "Cold, clear mornings with snow on the peaks; steps can be icy.",
      "Fresh green hills and first blossom below; changeable weather.",
      "Spring haze can soften the view; go after rain for clarity.",
      "Pleasant climb and green views; busy at weekends.",
      "Warm; climb early, before the stone heats up.",
      "Hazy at times; Amarnath season brings more pilgrims.",
      "Shravan Mondays are busy; showers possible.",
      "Clearest air of the year begins; long views to the Pir Panjal.",
      "Crisp, clear days and golden chinars below.",
      "Cold mornings; very clear on dry days.",
      "Cold and quiet; best views on bright days after snow.",
    ]),
    routes: [
      { from: "Dal Gate", to: "Shankaracharya Temple", distanceKm: "about 5 km by road, then about 240 steps", time: "15 to 20 minutes to the parking, 15 minutes up the steps", how: "Along the Boulevard to the hill road near Durganag and Sonawar, then up through the forest with a security check." },
      { from: "Lal Chowk", to: "Shankaracharya Temple", distanceKm: "about 6 km", time: "20 to 25 minutes", how: "Via Sonawar to the hill road; cabs only, no public transport up the hill." },
      { from: "Srinagar Airport", to: "Shankaracharya Temple", distanceKm: "about 18 km", time: "40 to 50 minutes", how: "Through the city to the Boulevard side of the hill." },
    ],
    faqs: [
      { q: "How many steps are there at the Shankaracharya Temple?", a: "About 240 stone steps from the parking area at the end of the hill road. Most people take 10 to 20 minutes to climb them." },
      { q: "Can you drive up to the Shankaracharya Temple?", a: "Yes, cabs and private cars can drive up the hill road to a parking area near the top. The last part is on foot up the steps." },
      { q: "Are mobile phones allowed at the Shankaracharya Temple?", a: "Usually not. Phones, cameras and electronic items are generally not allowed beyond the security check, so leave them in your car." },
      { q: "What are the Shankaracharya Temple timings?", a: "Daylight hours only, usually about 7 or 8 am to about 5 pm. Timings are set by security and can change, so check on the day." },
      { q: "Is there an entry fee for the Shankaracharya Temple?", a: "No, entry is free." },
      { q: "Who built the Shankaracharya Temple?", a: "Tradition credits an ancient king, Gopaditya, with the first temple on the hill. The present stone temple is generally dated to around the ninth century and has been repaired many times." },
      { q: "Why is it called the Shankaracharya Temple?", a: "Because Adi Shankaracharya is believed to have stayed and meditated on the hill during his visit to Kashmir in the eighth century." },
      { q: "What is Takht-e-Sulaiman?", a: "The Persian name of the hill on which the temple stands, meaning the throne of Solomon. In older texts it is called Gopadri." },
      { q: "Is the Shankaracharya Temple climb hard for seniors?", a: "The steps are steady with handrails and rest points, and many seniors manage them slowly. People with heart or knee problems should be careful, as there is no lift." },
      { q: "When is the best time to visit the Shankaracharya Temple?", a: "On a clear morning, ideally in spring, autumn or winter after rain or snow, when the views over Dal Lake and to the mountains are sharpest." },
      { q: "Can I take photos from the Shankaracharya Temple?", a: "Usually no, because cameras and phones are not allowed at the top. For photographs of the same kind of view, visit Pari Mahal." },
      { q: "How long does a visit to the Shankaracharya Temple take?", a: "About 1.5 to 2 hours from the Boulevard, including the drive up, the security check, the climb and time at the top." },
      { q: "Is the Shankaracharya Temple open in winter?", a: "Yes, in daylight hours, but the road can close after heavy snow and the steps can be icy. Check with your driver on the day." },
      { q: "Can autos go up to the Shankaracharya Temple?", a: "Usually not. Take a cab or private car up the hill road; there is no public transport." },
      { q: "Is the Shankaracharya Temple visited during the Amarnath Yatra?", a: "Yes. The Chhari Mubarak, the holy mace of Lord Shiva, is taken to the temple for prayers before it sets off for the Amarnath cave." },
      { q: "How old is the Shankaracharya Temple?", a: "The site is believed to be very ancient. The present stone temple is generally dated to around the ninth century, with later repairs and a modern roof." },
    ],
  },

  "srinagar/places-to-visit/indira-gandhi-tulip-garden": {
    facts: [
      { label: "Opened", value: "2007, on the old Siraj Bagh" },
      { label: "Area", value: "About 30 hectares (74 acres), laid out in terraces" },
      { label: "Tulips", value: "Over a million bulbs of about 70 varieties in recent seasons" },
      { label: "Time needed", value: "1.5 to 2 hours" },
      { label: "Managed by", value: "Department of Floriculture, Jammu and Kashmir" },
      { label: "Distance from Dal Gate", value: "About 6 km" },
    ],
    blocks: [
      {
        heading: "What is the Indira Gandhi Memorial Tulip Garden?",
        body: "The Indira Gandhi Memorial Tulip Garden is a spring flower garden on the lower slopes of the Zabarwan hills, between Chashme Shahi and the Boulevard, overlooking Dal Lake. It was created on the site of the old Siraj Bagh and opened in 2007 to extend Kashmir's tourist season into early spring, when visitors used to stay away. It has since become one of the biggest draws of the Kashmir year and is widely described as the largest tulip garden in Asia.\n\nFor about three to four weeks between late March and late April, its terraces are covered with long, straight rows of tulips in every colour, framed by the hills behind and the lake in front. Daffodils, hyacinths, ranunculus and other spring bulbs fill the gaps. The garden is closed for the rest of the year while the bulbs are lifted, stored and replanted.",
      },
      {
        heading: "When does the Tulip Garden open each year?",
        body: "The opening date depends on the weather that spring, so it moves by a week or two from year to year. In recent seasons the garden has opened between mid and late March: on 26 March in 2025 and on 16 March in 2026. It usually stays open until about the third week of April, when the last late-flowering varieties fade. The Floriculture Department and J&K Tourism announce the date a few days in advance, so if your trip depends on the tulips, follow their announcements and keep your dates flexible by a few days.",
      },
      {
        heading: "When is the best time to see the tulips?",
        body: "The peak is usually the first two weeks of April, when the early, mid-season and late varieties overlap and most beds are in full colour. The first days after opening can be patchy, with many beds still in bud, and the last week often looks tired after rain or warm days. A cold March can push the peak later; a warm March brings it forward. If you can choose, plan your Srinagar nights around 1 to 15 April and keep one spare day.\n\nWithin a day, go when the gates open in the morning. The light is soft, the flowers are fresh after the cool night and the garden is far less crowded than at midday. Late afternoon is the second-best time.",
      },
      {
        heading: "How many tulips and which varieties?",
        body: "The garden plants well over a million bulbs each season, with recent seasons reported at around 1.5 to 1.7 million, in about 70 varieties. You will see single and double tulips, fringed and parrot types with ragged petals, lily-flowered tulips with pointed petals, and tall Darwin hybrids, in red, yellow, orange, pink, purple, white, near-black and striped forms. Beds are usually planted in single colours, which gives the famous long stripes of colour running down the slope. The bulbs are imported and grown under the Floriculture Department's care, and the mix of varieties changes a little each year.",
      },
      {
        heading: "How the tulip season works: early, mid and late varieties",
        body: "Tulips do not all flower at once. Early varieties open first, often in the last week of March, followed by the mid-season types in the first half of April and the late varieties in mid to late April. The garden plants all three groups to stretch the season. This is why visitors at the start of the season see some beds in full bloom and others still green, and why the garden stays colourful for three to four weeks rather than a few days. Rain and sudden warm spells shorten the life of open flowers, so the exact peak shifts each year.",
      },
      {
        heading: "The Tulip Festival",
        body: "J&K Tourism usually holds a Tulip Festival during the bloom, with cultural programmes, Kashmiri music, handicraft and food stalls, and sometimes evening events in and around the garden. Dates are announced each spring and follow the bloom, usually in the first half of April. The festival makes the garden busier, so if you want quiet photographs, go early in the morning even on festival days.",
      },
      {
        heading: "How to reach the Tulip Garden",
        body: "The garden is on the eastern side of Dal Lake, about 6 km from Dal Gate and 8 km from Lal Chowk, on the road up to Chashme Shahi. By cab it takes 15 to 25 minutes from the Boulevard, longer at peak hours in April, when traffic to the garden is heavy. Most visitors come in their package cab or a local taxi; autos also run from Dal Gate. Parking fills quickly on weekends, and the police sometimes stop vehicles short of the gate, so be ready for a short walk.\n\nBecause the garden sits next to Chashme Shahi, Pari Mahal and the Botanical Garden, it is easy to combine them in one morning.",
      },
      {
        heading: "A tulip morning: the garden, Chashme Shahi and Pari Mahal",
        body: "Arrive at the Tulip Garden when it opens and spend about two hours walking up the terraces. Then drive two minutes up the hill to Chashme Shahi to see its spring and fountains, and continue to Pari Mahal for the view over Dal Lake, where the tulip beds below are visible as stripes of colour. Return to the Boulevard for lunch and finish with Nishat and Shalimar in the afternoon, or with a shikara ride. If the Jawaharlal Nehru Memorial Botanical Garden across the road is open, its lake and rose garden make a quieter extra stop.",
      },
      {
        heading: "How crowded is the Tulip Garden?",
        body: "Very, at the peak. The garden draws visitors from across India and many local families, and recent seasons have seen hundreds of thousands of visitors in a few weeks. Weekends, public holidays and the festival days are busiest, and midday is the worst time. To enjoy it, go on a weekday morning at opening time, walk to the upper terraces first while most people stay near the entrance, and leave the lower beds for the way out. Hold on to children's hands in the crowds and agree a meeting point.",
      },
      {
        heading: "How to plan a Kashmir tulip trip",
        body: "A spring trip built around the tulips usually spends three nights in Srinagar, with the garden on the first full morning and a spare day in case of rain, plus one or two nights in Pahalgam or Gulmarg. In early April, Gulmarg often still has snow on the upper slopes, so you can see tulips and snow on the same trip. Book flights and hotels early: Srinagar is full in the first half of April and prices rise. Keep your dates flexible if you can, and ask your agent to watch the opening announcement before you lock your plan.",
      },
      {
        heading: "What else is in bloom in Kashmir in spring?",
        body: "The tulips are part of a longer spring. In March, the almond trees flower at Badamwari below Hari Parbat, a festival of pink and white blossom that usually peaks before the tulips. In April, the Mughal gardens fill with spring flowers, mustard fields turn the countryside yellow on the way to Pahalgam, and apple, cherry and pear orchards flower across the valley. In May, the meadows at Gulmarg, Pahalgam and Sonamarg turn green with wild flowers as the snow melts. Spring is short in Kashmir, so each week looks different.",
      },
      {
        heading: "Rules inside the Tulip Garden",
        body: "Do not pick flowers or step into the beds, even for a photograph. Stay on the paths and terraces. Do not climb on the walls or fences. Drones are not allowed without permission. Pets are generally not allowed. Smoking and littering are prohibited. Professional shoots need permission from the Floriculture Department. The rules are enforced by garden staff, and with so many visitors they matter: a few careless steps can ruin a bed for the rest of the season.",
      },
      {
        heading: "What if the tulips have not bloomed or are over?",
        body: "If you arrive early in the season and many beds are still in bud, visit anyway: the early varieties will be out, and the garden looks different every few days. Spend more time at the Mughal gardens and Badamwari, and return to the Tulip Garden later in your trip if you can. If you arrive after the garden has closed, the Mughal gardens and the Botanical Garden still have spring flowers, and the meadows at Pahalgam and Gulmarg are coming into green. Ask your agent to plan your Srinagar day last if your trip starts before the opening date.",
      },
      {
        heading: "The Tulip Garden for families and older travellers",
        body: "The garden is on a slope, but the paths are wide and the gradient is gentle. Older visitors can stay on the lower and middle terraces, where there are benches, and still see most of the colour. Wheelchair users can manage the lower paths with help. Children love the colours but should be kept out of the beds. Toilets, drinking water and food stalls are near the entrance; carry water and a hat, as there is little shade.",
      },
      {
        heading: "Why tulips grow so well in Kashmir",
        body: "Tulips come from the mountains of Central Asia, where they need a long, cold winter to set their flowers and a cool, bright spring to open them. Kashmir has exactly that: freezing winters that chill the bulbs in the ground, followed by mild, sunny days in March and April with cold nights that keep the flowers fresh. The valley's fertile soil and abundant water help too. That is why the Floriculture Department chose Kashmir for a large tulip garden, and why the flowers here last longer and look brighter than tulips grown in warmer parts of India.",
      },
      {
        heading: "How the garden is laid out",
        body: "The garden climbs the slope below the Zabarwan hills in a series of terraces, much like the Mughal gardens next door, with long straight beds running across each level. Paths and steps link the terraces, and a water channel with fountains runs down part of the garden. From the top terraces you look down over the stripes of colour to Dal Lake and the city, and the best wide pictures are taken from there. Benches and shaded spots are few, so plan to rest at the upper levels before walking down.",
      },
      {
        heading: "Weather in tulip season and what to wear",
        body: "Late March and April in Srinagar bring days of about 15 to 21°C and nights of 3 to 9°C. Mornings are fresh and can be cold; afternoons are pleasant in the sun. Spring showers are common, and a wet spell can last a day or two. Wear layers you can take off as the day warms up, a light waterproof jacket, and comfortable shoes with grip, since paths can be muddy after rain. Sunglasses and a hat help on bright days, as there is little shade. If you are going on to Gulmarg or Sonamarg, pack a proper warm jacket, as there may still be snow.",
      },
      {
        heading: "Where to stay for the tulip season",
        body: "Hotels along the Boulevard and in Rajbagh and Sonawar are the most convenient, 10 to 20 minutes from the garden. Houseboats on Dal Lake put you on the water with the gardens across the lake, and Nigeen Lake houseboats are quieter but a little further away. Book early: the first half of April is one of Srinagar's busiest periods, and good rooms fill weeks in advance. If you can, stay three nights in Srinagar so that you can choose the best weather morning for the garden.",
      },
      {
        heading: "A 4-day spring plan with the tulips",
        body: "Day 1: fly into Srinagar, check in, take a sunset shikara ride on Dal Lake. Day 2: the Tulip Garden at opening time, then Chashme Shahi, Pari Mahal, Nishat Bagh and Shalimar Bagh. Day 3: day trip to Gulmarg for the gondola and late snow on the upper slopes, or to Pahalgam through the mustard fields and blossom of south Kashmir. Day 4: Badamwari if the almond blossom is still out, the old city and Hari Parbat, then fly out. A longer trip adds a night in Pahalgam and a day in Sonamarg.",
      },
      {
        heading: "Entry, queues and getting in faster",
        body: "Tickets are sold at counters at the entrance and, in recent seasons, online as well; check the Floriculture Department's notice for the current season. At peak times, queues form at both the ticket counter and the gate, so buying online where available and arriving at opening time saves the most time. Bags may be checked at the entrance. Keep your ticket until you leave, and note that re-entry is not usually allowed on the same ticket.",
      },
      {
        heading: "Photography at the Tulip Garden",
        body: "Wide shots from the top terraces show the stripes of colour with the lake beyond; a moderate telephoto lens compresses the rows into bands of colour. For close-ups, look for single flowers backlit by low morning sun. Overcast days are good for even colour without harsh shadows. Never step into the beds for a shot: the staff will stop you, and the beds will not recover that season. Tripods are generally fine on the paths early in the day when it is quiet.",
      },
      {
        heading: "Badamwari: the almond garden before the tulips",
        body: "Badamwari is a historic almond orchard on the slopes below Hari Parbat in the old city, restored as a public garden. Its almond trees flower in pink and white in March, usually a week or more before the tulips peak. If your spring trip starts in late March, visit Badamwari first and the Tulip Garden a few days later; in a cold year, you may catch both in the same week. Badamwari has a small entry ticket and makes a good start to an old-city walk.",
      },
      {
        heading: "Is the Tulip Garden worth visiting?",
        body: "Yes, if your dates fall in the season. It is one of the most beautiful sights in India in spring, and a strong reason to visit Kashmir in April rather than later. The crowds are the main drawback, and an early-morning visit solves most of that. If your trip is outside the late March to April window, do not plan around it: the garden is closed and Kashmir has many other gardens and seasons to enjoy.",
      },
    ],
    routes: [
      { from: "Dal Gate", to: "Tulip Garden", distanceKm: "about 6 km", time: "15 to 25 minutes", how: "Along the Boulevard and up the road towards Chashme Shahi; heavy traffic at peak hours in April." },
      { from: "Lal Chowk", to: "Tulip Garden", distanceKm: "about 8 km", time: "20 to 30 minutes", how: "Through Dalgate to the Boulevard, then towards Cheshma Shahi." },
      { from: "Srinagar Airport", to: "Tulip Garden", distanceKm: "about 20 km", time: "45 to 60 minutes", how: "Through the city; many visitors go straight from the airport on arrival day in April." },
    ],
    faqs: [
      { q: "Is the Srinagar Tulip Garden the largest in Asia?", a: "It is widely described as Asia's largest tulip garden, at about 30 hectares with over a million bulbs in recent seasons." },
      { q: "How many tulips are there in the Tulip Garden?", a: "Recent seasons have had around 1.5 to 1.7 million bulbs in about 70 varieties. The numbers change a little each year." },
      { q: "How long does it take to see the Tulip Garden?", a: "About 1.5 to 2 hours to walk the terraces at an easy pace, more if you are photographing." },
      { q: "Is the Tulip Garden open in May?", a: "Usually not. The garden typically closes around the third week of April, when the late varieties fade." },
      { q: "How far is the Tulip Garden from Dal Lake?", a: "It overlooks Dal Lake and is about 6 km from Dal Gate, 15 to 25 minutes by cab." },
      { q: "Can I see tulips and snow on the same Kashmir trip?", a: "Often yes. In early April, Gulmarg's upper slopes and Sonamarg usually still have snow while the tulips bloom in Srinagar." },
      { q: "Are drones allowed in the Tulip Garden?", a: "No, not without permission from the authorities." },
      { q: "What should I do if the tulips have not bloomed yet?", a: "Visit anyway for the early varieties, spend more time at the Mughal gardens and Badamwari, and return later in your trip if possible." },
      { q: "Which is the least crowded time at the Tulip Garden?", a: "Weekday mornings at opening time. Weekends, holidays and festival days around midday are the busiest." },
      { q: "Who manages the Tulip Garden?", a: "The Department of Floriculture, Jammu and Kashmir, which plants, maintains and sells tickets for the garden." },
      { q: "When was the Tulip Garden opened?", a: "In 2007, on the site of the old Siraj Bagh, to bring visitors to Kashmir in early spring." },
      { q: "What should I wear to the Tulip Garden?", a: "Layers for cool mornings and pleasant afternoons, a light rain jacket and comfortable shoes with grip. Days are about 15 to 21°C in April." },
      { q: "Can I buy Tulip Garden tickets online?", a: "In recent seasons tickets have been sold online as well as at the gate. Check the Floriculture Department's notice for the current season." },
      { q: "Where should I stay to visit the Tulip Garden?", a: "On the Boulevard, in Rajbagh or Sonawar, or on a Dal Lake houseboat, all 10 to 20 minutes away. Book early for the first half of April." },
      { q: "How many days do I need in Kashmir for a tulip trip?", a: "Four to six days: three nights in Srinagar for the garden and the Mughal gardens, plus Gulmarg or Pahalgam." },
    ],
  },

  "srinagar/places-to-visit/dal-lake": {
    facts: [
      { label: "Shoreline road", value: "The Boulevard (south and east) and the Foreshore Road (north)" },
      { label: "Time needed", value: "Half a day for a shikara ride and the shore; a night on a houseboat to really know it" },
      { label: "Best months", value: "April to June and September to November; July and August for lotus" },
      { label: "Main ghats", value: "Along the Boulevard from Dal Gate towards Nehru Park and beyond" },
    ],
    blocks: [
      {
        heading: "Why is Dal Lake so famous?",
        body: "Few lakes anywhere have a city, a royal garden landscape and a working community of farmers and boatmen all on the same water. Dal Lake has all three. Mughal emperors built their gardens along its eastern shore, the British and other visitors who were not allowed to own land in Kashmir built houseboats on its water in the late nineteenth century, and thousands of families still live on the lake, farming floating gardens and running shikaras, shops and boats. With the Zabarwan hills behind and the Pir Panjal peaks in the distance, it became the image of Kashmir in films, postcards and memories. A shikara ride at sunset is the one experience almost every visitor shares.",
      },
      {
        heading: "How to plan your time on Dal Lake",
        body: "On a short trip, plan one shikara ride of one to two hours in the late afternoon, ending at sunset, and if possible one night on a houseboat. On a longer trip, add an early-morning ride to the floating vegetable market, which starts around dawn, and a walk along the Boulevard in the evening. Combine the lake with the Mughal gardens on the eastern shore and Hazratbal on the northern shore. If you stay on a houseboat, your host can arrange a shikara to the ghat whenever you want to go ashore, so the lake becomes your base rather than a single sight.",
      },
      {
        heading: "The ghats along the Boulevard explained",
        body: "Shikaras and houseboat boats start from numbered ghats, landing steps along the Boulevard from Dal Gate eastwards. Each ghat has a stand of registered shikaras, and the official rates for standard routes are usually displayed on boards at the larger ghats. Your houseboat will tell you which ghat it uses for pick-ups. If you are booking a ride on the spot, choose a busy ghat with displayed rates, agree the route and duration before you set off, and pay at the end. Houseboat hosts and hotel staff can also book a trusted boatman for you.",
      },
      {
        heading: "Dal Lake at night",
        body: "After dark, the houseboats along the Boulevard light up, their carved wooden fronts glowing over the water, and the Boulevard fills with families walking, eating roasted corn and kebabs and buying from the stalls. Short evening shikara rides are popular in summer, with the lights of the houseboats reflected in the lake. Pari Mahal's terraces are lit on the hillside. In winter, the evenings are cold and quiet, and most visitors watch the lights from the warmth of a houseboat deck or a lakeside restaurant.",
      },
      {
        heading: "Where to eat around Dal Lake",
        body: "The Boulevard and the streets behind Dal Gate have the widest choice of restaurants, from Kashmiri wazwan dishes such as rogan josh, rista and gushtaba to North Indian, Chinese and vegetarian food. Lakeside cafes serve kahwa, noon chai and Kashmiri breads with views of the water. Floating vendors in shikaras sell kahwa, snacks and roasted corn during rides, and houseboats serve home-cooked Kashmiri meals to their guests. On Fridays and in the evenings, the food stalls along the Boulevard are busy with local families.",
      },
      {
        heading: "Shopping on and around Dal Lake",
        body: "Floating shops in shikaras visit houseboats and approach tourist shikaras with shawls, papier mache, jewellery, saffron, dry fruit and flowers. In the lake's Meena Bazaar area, shops on stilts sell the same. Prices vary widely and bargaining is normal; buy only what you like at a price you are comfortable with, and check pashmina claims carefully. For more certainty about quality, the government emporium in the city and established shops in Lal Chowk and the old city are better places for expensive crafts.",
      },
      {
        heading: "Dal Lake from above: the best viewpoints",
        body: "To see the lake as a whole, go up. Pari Mahal, above Chashme Shahi, gives a close view of the lake, the houseboats and the gardens, and allows photography. The Shankaracharya Temple, higher and more central, shows the whole lake, the old city and the river, though phones and cameras are usually not allowed at the top. Nishat Bagh's upper terraces look straight across the water to Hari Parbat. From Hari Parbat itself, on the far side, you see the lake with the Zabarwan hills behind.",
      },
      {
        heading: "Dal Lake on your arrival and departure day",
        body: "Dal Lake is about 20 to 25 km from Srinagar airport, 45 minutes to an hour by road. If you fly in by early afternoon, you can check in and take a sunset shikara ride on the same day, which is why so many itineraries start this way. On your last day, an early-morning ride to the floating market fits before a late-morning or afternoon flight. Leave at least two and a half hours before departure, as the airport has several security checks and the city traffic can be slow.",
      },
    ],
    months: srinagarMonths([
      "Cold and still; edges of the lake freeze in cold spells. Heated houseboats and short midday rides.",
      "Cold, with the first thaw late in the month; quiet lake and low prices.",
      "Spring arrives; rides are pleasant in the afternoon sun.",
      "Tulip season brings crowds; book houseboats early.",
      "Ideal shikara weather; long evenings on the water.",
      "Busy summer season; rides are best early or at sunset.",
      "Lotus beds start to flower in the northern basins; warm and humid.",
      "Lotus season at its best; afternoon showers possible.",
      "Clear skies and calm water; one of the best months for photographs.",
      "Crisp, sunny days and golden chinars on the shore.",
      "Cold mornings with mist on the water; chinar colour early in the month.",
      "Cold and quiet; heated houseboats and short, sunny rides.",
    ]),
    routes: [
      { from: "Srinagar Airport", to: "Dal Lake (Dal Gate)", distanceKm: "about 20 km", time: "45 to 60 minutes", how: "Through the city to Dal Gate and the Boulevard; prepaid taxis at the airport." },
      { from: "Lal Chowk", to: "Dal Lake (Dal Gate)", distanceKm: "about 2 km", time: "10 minutes", how: "A short drive or auto ride; you can also walk." },
      { from: "Srinagar railway station", to: "Dal Lake (Dal Gate)", distanceKm: "about 15 km", time: "35 to 45 minutes", how: "From Nowgam station through the city by cab." },
      { from: "Jammu", to: "Dal Lake", distanceKm: "about 250 km", time: "6 to 8 hours by road", how: "Via the Jammu to Srinagar highway through the Banihal tunnel, or by train via Katra." },
    ],
    faqs: [
      { q: "How far is Dal Lake from Srinagar airport?", a: "About 20 km, usually 45 minutes to an hour by road to Dal Gate and the Boulevard." },
      { q: "Can you visit Dal Lake on your arrival day?", a: "Yes. If you land by early afternoon, a sunset shikara ride on the same day is a popular start to a Kashmir trip." },
      { q: "Where is the best view of Dal Lake?", a: "From Pari Mahal (cameras allowed) or the Shankaracharya Temple (usually no cameras). Nishat Bagh's top terrace also looks across the lake." },
      { q: "What is there to do on Dal Lake at night?", a: "Walk the lit-up Boulevard, eat at the food stalls, take a short evening shikara ride in summer, or watch the lights from a houseboat deck." },
      { q: "Is it safe to buy from floating shops on Dal Lake?", a: "Yes, but prices vary widely and bargaining is normal. For expensive crafts like pashmina, compare quality at established shops in the city." },
      { q: "Which ghat should I use for a shikara ride?", a: "A busy ghat on the Boulevard with displayed rates, or the ghat your houseboat or hotel recommends. Agree the route and duration before setting off." },
    ],
  },
};
