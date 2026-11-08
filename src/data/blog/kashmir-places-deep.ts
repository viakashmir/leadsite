import type { BlogPost } from "./types";

// Kashmir place guides, competitor-gap batch 1 (2026-11-08).
// Facts checked 2026-11-08 (OpenStreetMap routing for drives from Srinagar;
// district sites and news reports for the rest):
// - Doodhpathri: Budgam district, Khansahib tehsil, about 2,730 m; about 41 to
//   45 km from Srinagar via Budgam and Khansahib (or via Raiyar); Shaliganga
//   river; Tangnar, Mujpathri and Palmaidan on the way; name linked to Sheikh
//   Noor-ud-Din Noorani (Nund Rishi) in folklore.
// - Achabal: Mughal garden about 8 km from Anantnag town, roughly 56 to 65 km
//   from Srinagar; built around 1620 under Nur Jahan around a large spring;
//   also known as Begumabad and Sahebabad.
// - Aharbal: waterfall on the Veshaw river, Kulgam district, a drop of about
//   25 m; about 25 km from Kulgam town and roughly 65 to 75 km from Srinagar;
//   Kongwattan meadow about 8 km beyond on the Kounsarnag trek route.
// - Drung: near Drung village about 3 km off the Gulmarg road at Tangmarg,
//   about 13 to 16 km below Gulmarg; freezes only in a hard cold spell.
// - Bangus: Kupwara district, meadow at about 3,000 m; approached from Handwara
//   (via Mawer, Rajwar and Reshwari) or from Kupwara (via Chowkibal); published
//   distances from Srinagar range from about 80 to 150 km depending on the route.
// Rules: no fares, tickets or timetables typed in; no em dashes.

export const KASHMIR_PLACES_DEEP: BlogPost[] = [
  {
    slug: "doodhpathri-travel-guide",
    title: "Doodhpathri Travel Guide: Distance, Best Time, Sightseeing and a Day Plan",
    description:
      "Doodhpathri, Kashmir's valley of milk: distance from Srinagar, how to reach, best time, Shaliganga river, Tangnar and Mujpathri, ponies, snow and a day plan.",
    category: "Weekend Trips",
    destination: "kashmir",
    city: "doodhpathri",
    date: "2026-11-08",
    intro:
      "Doodhpathri is a wide alpine meadow at about 2,730 m in Budgam district, roughly 42 km south-west of Srinagar, where the Shaliganga river runs fast and white over stones between pine forest and open grassland. It is the easiest high meadow to reach from Srinagar: about 1.5 to 2 hours by road via Budgam and Khansahib, so it works as a relaxed day trip. Go from late April to October for green meadows and picnics, or in winter for snow when the road is open. Expect simple food stalls, ponies at association rates and very few hotels, and keep half a day for the meadow itself.",
    sections: [
      {
        h: "Where is Doodhpathri and why is it called the valley of milk?",
        p: [
          "Doodhpathri lies in the Khansahib area of Budgam district, in the Pir Panjal foothills south-west of Srinagar. 'Doodh' means milk and 'pathri' means meadow, and the name is usually explained by the Shaliganga, whose water looks milky white as it froths over the rocks.",
          "Local folklore links the name to the Kashmiri saint Sheikh Noor-ud-Din Noorani, also called Nund Rishi, who is said to have struck the ground with his staff while looking for water for prayers, and milk flowed out. Whatever the origin, the scene matches the name: white water, green grass and dark forest under the snow peaks.",
        ],
      },
      {
        h: "How to reach Doodhpathri from Srinagar",
        p: [
          "Doodhpathri is about 42 km from Srinagar, roughly 1.5 to 2 hours by road. The usual route runs from Srinagar to Budgam town and on to Khansahib, then climbs through Raiyar and the Tangnar forest to the meadow. Srinagar airport is the closest airport, about 40 km away, and Budgam is the nearest railway station on the valley line.",
          "Most visitors take a private cab from Srinagar for the day. There is no reliable public transport to the meadow itself; shared cabs run only as far as Khansahib. The last stretch climbs steadily but is a normal paved mountain road in summer. In winter, after fresh snow, the road may close or need chains, so check with your driver the evening before.",
        ],
      },
      {
        h: "Sightseeing on the way: Tangnar, Mujpathri and Palmaidan",
        list: [
          "Tangnar: a forested gorge below the meadow with pine and deodar trees, a good first photo stop.",
          "Mujpathri: a small village about 3 km before the main meadow, along the Shaliganga.",
          "Palmaidan: a quieter stretch of meadow beyond the main area, reached on foot or by pony.",
          "The Shaliganga riverbank: the main picnic area, with the river running through the middle of the meadow.",
          "Forest walks on the meadow's edge: short, easy loops in the pine woods.",
        ],
      },
      {
        h: "Best time to visit Doodhpathri",
        list: [
          "April to May: snow melting on the high slopes, meadows turning green, cool air. Some years the road opens fully only in late April.",
          "June to August: the greenest months and the best time for picnics, pony rides and walks. Busy on weekends with local families.",
          "September to October: clear skies, golden grass and the quietest season, with cold mornings.",
          "November to March: snow on the meadow. It is beautiful but the road can close after heavy snowfall, and stalls shut. Go only after your driver confirms the road.",
        ],
      },
      {
        h: "Things to do in Doodhpathri",
        p: [
          "Doodhpathri is about space and quiet rather than activities. Walk along the Shaliganga, picnic on the grass, take a pony to the far meadows and viewpoints, and photograph the river against the forest. In winter there is sledging and snow play near the parking area when the road is open.",
          "Ponies are run by the local association with fixed rates for set routes. Ask to see the rate card, agree the route and the number of stops, and pay at the end. Carry cash, as card payments and mobile data are unreliable.",
        ],
      },
      {
        h: "Where to stay and food",
        p: [
          "Most travellers do Doodhpathri as a day trip and stay in Srinagar. The meadow has a few tourism department huts and small private stays, which are simple and need advance booking. Food is basic: tea stalls, Maggi, kahwa and simple rice meals in season. Carry water and snacks, especially outside the summer months.",
        ],
      },
      {
        h: "A one-day Doodhpathri plan from Srinagar",
        days: [
          "Leave Srinagar by 8 am and drive via Budgam and Khansahib.",
          "Stop at Tangnar for photos, then reach Doodhpathri by about 10 am.",
          "Walk along the Shaliganga, or take a pony to Palmaidan and the viewpoints.",
          "Picnic lunch by the river, then a slow afternoon on the meadow.",
          "Leave by 3:30 pm to reach Srinagar before dark.",
        ],
      },
      {
        h: "Doodhpathri, Yusmarg or Gulmarg?",
        p: [
          "Doodhpathri is greener and wider than Yusmarg and much quieter than Gulmarg, but it has no gondola and few facilities. Choose Gulmarg for snow, the Gondola and hotels; Doodhpathri for a calm meadow day close to Srinagar; Yusmarg (about 50 km) for pine forest and the walk to Nilnag lake. Doodhpathri and Yusmarg are in the same district and can be combined in one long day, though most people prefer one at a relaxed pace.",
        ],
      },
      {
        h: "Practical tips",
        list: [
          "Carry a jacket even in summer; the meadow is windy and cool.",
          "Wear shoes with grip; the riverbank stones are slippery.",
          "Keep cash; ATMs and card machines are not available on the meadow.",
          "Mobile signal is weak; download your maps before leaving Srinagar.",
          "Do not wade into the Shaliganga; the current is strong and the water is very cold.",
          "Take your litter back; the meadow has very limited waste collection.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Doodhpathri from Srinagar?", a: "About 42 km, 1.5 to 2 hours by road via Budgam and Khansahib." },
      { q: "Is Doodhpathri worth visiting?", a: "Yes, for a quiet, green meadow close to Srinagar. It is less crowded than Gulmarg and Pahalgam and suits families, couples and photographers." },
      { q: "What is the best time to visit Doodhpathri?", a: "June to August for green meadows, September to October for clear skies and fewer people, and December to February for snow when the road is open." },
      { q: "Is Doodhpathri open in winter?", a: "Yes, when the road is clear. After heavy snow it can close for a day or more, so confirm with your driver the evening before." },
      { q: "Can I stay overnight in Doodhpathri?", a: "There are a few simple huts and small stays, but most travellers return to Srinagar. Book ahead if you want to stay." },
      { q: "What is the altitude of Doodhpathri?", a: "About 2,730 m above sea level." },
      { q: "Can I visit Doodhpathri and Yusmarg in one day?", a: "It is possible with an early start, but both are better at a relaxed pace on separate days." },
    ],
  },
  {
    slug: "achabal-garden-kashmir-guide",
    title: "Achabal Garden Kashmir: History, Distance from Srinagar and How to Visit",
    description:
      "Achabal Mughal Garden near Anantnag: Nur Jahan's spring garden, history, distance from Srinagar, timings, best season and how to combine it with Kokernag.",
    category: "Planning",
    destination: "kashmir",
    date: "2026-11-08",
    intro:
      "Achabal Garden is a terraced Mughal garden built around a powerful natural spring at Achabal, about 8 km from Anantnag town and roughly 56 to 65 km south of Srinagar, depending on the route. It was laid out around 1620 under Empress Nur Jahan, Jahangir's wife, and is one of the oldest and most atmospheric of Kashmir's Mughal gardens. The spring water gushes out at the top, fills long channels and cascades over stone chutes past chinar trees and pavilions. Most travellers visit it for an hour or two on the drive between Srinagar and Pahalgam, or on a south Kashmir day trip with Kokernag and Verinag.",
    sections: [
      {
        h: "History of Achabal Garden",
        p: [
          "The Mughals chose Achabal for its spring, one of the strongest in the valley. The garden is usually credited to Nur Jahan around 1620 and was known as Begumabad in her honour; it was also called Sahebabad, after Emperor Jahangir. Later accounts say it was remodelled in the 1630s under Jahanara, Shah Jahan's daughter, and a small mosque in the garden is attributed to Prince Dara Shikoh.",
          "Like Nishat and Shalimar in Srinagar, Achabal follows the Persian char bagh idea of water as the spine of the garden, with terraces, a central channel and fountains. Because it is smaller and further from Srinagar, it feels calmer and closer to how the Mughals used these gardens: as cool retreats beside running water.",
        ],
      },
      {
        h: "What to see in Achabal",
        list: [
          "The spring at the top of the garden, where water rises out of the hillside.",
          "The main channel and its stone chutes (chadars), where water slides in white sheets between terraces.",
          "The fountains and pools along the central axis, fed only by the spring's natural pressure.",
          "Chinar trees, which turn red and gold from mid-October.",
          "The pavilions and old stone walls along the terraces.",
        ],
      },
      {
        h: "How to reach Achabal from Srinagar",
        p: [
          "Drive south on NH44 past Pampore and Awantipora to Anantnag (Khanabal), then about 8 km on to Achabal. The drive from Srinagar takes about 1.5 to 2 hours. The nearest railway station is Anantnag on the valley line; taxis are available from Anantnag town.",
          "Achabal is on the way to Kokernag (about 20 km further) and close to the Pahalgam road, so it fits neatly into a south Kashmir day or into the transfer between Srinagar and Pahalgam.",
        ],
      },
      {
        h: "Timings, entry and best time to visit",
        p: [
          "Achabal is run by the J&K Floriculture Department, which sets the entry ticket and opening hours each season; it is open in daylight hours. Spring (April and May) brings flowerbeds and fresh green, summer gives cool shade beside the water, and October is the most photogenic month, when the chinars turn. In winter the garden is bare but quiet, and the spring still runs.",
        ],
      },
      {
        h: "A south Kashmir day: Achabal, Kokernag, Verinag and Martand",
        days: [
          "Leave Srinagar at 8 am; stop at the Pampore saffron fields and the Awantipora temple ruins.",
          "Achabal Garden around 10:30 am.",
          "Kokernag botanical garden and its springs, about 20 km from Achabal.",
          "Lunch, then Verinag, the octagonal Mughal spring pool at the source of the Jhelum.",
          "Optional stop at the Martand Sun Temple ruins near Mattan, then back to Srinagar by evening, or on to Pahalgam.",
        ],
      },
      {
        h: "Achabal compared with Srinagar's Mughal gardens",
        p: [
          "Nishat and Shalimar are larger and set against Dal Lake, but busy, especially in spring. Achabal is smaller, greener and quieter, with stronger water flow from its spring. If you have only one day for Mughal gardens, do the Srinagar gardens; if you are driving to Pahalgam or Kokernag, add Achabal for a calmer version of the same idea.",
        ],
      },
      {
        h: "Tips for visiting",
        list: [
          "Go in the morning for soft light on the water and fewer people.",
          "Weekends and public holidays are busy with local families.",
          "The stone edges of the channels are slippery; watch small children.",
          "Combine with Kokernag and Verinag rather than making a separate trip.",
          "Agents can add Achabal to a Pahalgam package at little extra driving time.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Achabal Garden from Srinagar?", a: "About 56 to 65 km depending on the route, roughly 1.5 to 2 hours by road via Anantnag." },
      { q: "Who built Achabal Garden?", a: "It is credited to Empress Nur Jahan, around 1620, and was later remodelled under Jahanara, Shah Jahan's daughter." },
      { q: "What is Achabal famous for?", a: "Its powerful natural spring, which feeds the garden's channels, cascades and fountains, and its old chinar trees." },
      { q: "What is the best time to visit Achabal?", a: "April to May for flowers and October for autumn chinars. Summer is pleasant for the shade by the water." },
      { q: "Can I visit Achabal on the way to Pahalgam?", a: "Yes. It is about 8 km from Anantnag, close to the Pahalgam road, and takes an hour or two." },
    ],
  },
  {
    slug: "aharbal-waterfall-kokernag-verinag-guide",
    title: "Aharbal Waterfall, Kokernag and Verinag: South Kashmir Day Trip Guide",
    description:
      "Aharbal waterfall on the Veshaw river, Kokernag springs and Verinag, the Jhelum's source: distances from Srinagar, best time, routes and a full day plan.",
    category: "Weekend Trips",
    destination: "kashmir",
    date: "2026-11-08",
    intro:
      "Aharbal is a waterfall on the Veshaw river in Kulgam district, where the river drops about 25 m into a narrow rocky gorge surrounded by pine forest. It is roughly 65 to 75 km from Srinagar, about 2.5 hours by road, and about 25 km from Kulgam town. Together with the spring gardens of Kokernag and Verinag, the source of the Jhelum, it makes the best day trip in south Kashmir, away from the crowds of Gulmarg and Pahalgam. Go from May to October when the river is full and the roads are clear; in winter the falls partly freeze and the road may close after snow.",
    sections: [
      {
        h: "Aharbal waterfall",
        p: [
          "The Veshaw river, flowing down from Kounsarnag lake in the Pir Panjal, crashes through a granite gorge at Aharbal in a drop of about 25 m. A short walk from the road leads to viewpoints above the falls. The spray, the roar and the pine forest make it one of the most dramatic natural sights in the valley.",
          "Above the falls, the meadow of Kongwattan lies about 8 km further up the valley. It is the start of the multi-day trek to Kounsarnag lake, which needs a local guide and is done only in mid-summer.",
        ],
      },
      {
        h: "Kokernag: springs and a botanical garden",
        p: [
          "Kokernag, in Anantnag district, is a botanical garden built around a group of freshwater springs that bubble up in clear pools. The garden has lawns, flowerbeds and a trout farm run by the fisheries department. Its name is often explained as the 'spring shaped like a hen's claw', after the way the springs branch. It is about 20 km beyond Achabal and on the road towards Daksum and Sinthan Top.",
        ],
      },
      {
        h: "Verinag: the source of the Jhelum",
        p: [
          "Verinag is an octagonal stone pool fed by a deep spring, built under Emperor Jahangir, who loved the place; the arcade around the pool and the long channel leading from it were added by his successors. The spring is considered the source of the Jhelum river. It is about 80 km from Srinagar and close to the Jawahar Tunnel and the Banihal side of the highway.",
        ],
      },
      {
        h: "How to reach Aharbal, Kokernag and Verinag",
        list: [
          "Aharbal: from Srinagar via Pulwama or Shopian and Kulgam, roughly 65 to 75 km, about 2.5 hours.",
          "Kokernag: from Srinagar via Anantnag, about 80 km, about 2.5 hours.",
          "Verinag: from Srinagar via Anantnag and Qazigund, about 80 km, about 2.5 hours.",
          "Nearest railway stations: Anantnag and Qazigund on the valley line.",
          "Use a private cab from Srinagar for the day; public transport between the three is limited.",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "May to June: the river is full of snowmelt and the falls are at their most powerful.",
          "July to August: green and lush, with occasional rain.",
          "September to October: clear weather and autumn colours in the forests and gardens.",
          "Winter: the falls can partly freeze; roads to Aharbal and the upper valleys may close after snow.",
        ],
      },
      {
        h: "A south Kashmir day plan",
        days: [
          "Leave Srinagar at 7:30 am and drive via Pulwama and Shopian to Aharbal (about 2.5 hours).",
          "Walk to the viewpoints above the falls; tea at the stalls by the road.",
          "Drive across to Kokernag for lunch near the springs and the botanical garden.",
          "Continue to Verinag, the Jhelum's spring pool.",
          "Return to Srinagar on NH44 via Anantnag by evening, or end the day in Pahalgam.",
        ],
      },
      {
        h: "Adding Daksum and Sinthan Top",
        p: [
          "Beyond Kokernag the road climbs through the forested Bringi valley to Daksum (about 2,400 m) and on over Sinthan Top (about 3,700 m) towards Kishtwar. Sinthan Top is usually open from about May or June to October, depending on snow. Staying a night in Kokernag or Daksum lets you combine Aharbal, the springs and Sinthan Top without rushing.",
        ],
      },
      {
        h: "Safety and practical tips",
        list: [
          "Stay behind the railings at Aharbal; the rocks near the water are wet and the current is deadly.",
          "Carry warm layers; the falls and Daksum are cool even in summer.",
          "Mobile signal is patchy around Aharbal and Daksum.",
          "Weekends bring many local visitors; weekdays are calmer.",
          "Gardens are run by the Floriculture Department with seasonal entry tickets.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Aharbal waterfall from Srinagar?", a: "Roughly 65 to 75 km depending on the route, about 2.5 hours by road via Shopian or Kulgam." },
      { q: "How high is Aharbal waterfall?", a: "The main drop is about 25 m into a narrow rocky gorge on the Veshaw river." },
      { q: "What is the best time to visit Aharbal?", a: "May to June when the river is fullest, and September to October for clear weather. Roads can close after winter snow." },
      { q: "Can I visit Aharbal, Kokernag and Verinag in one day?", a: "Yes, with an early start from Srinagar. Staying a night in Kokernag or Pahalgam makes it more relaxed." },
      { q: "Where is the source of the Jhelum?", a: "The spring at Verinag, held in an octagonal Mughal pool built under Jahangir, is considered the source of the Jhelum." },
    ],
  },
  {
    slug: "drung-waterfall-kashmir-guide",
    title: "Drung Waterfall Kashmir: Frozen Falls Near Gulmarg, Location and When to Go",
    description:
      "Drung (Drang) waterfall near Tangmarg on the Gulmarg road: location, distance from Srinagar and Gulmarg, when it freezes, road conditions and how to visit.",
    category: "Weekend Trips",
    destination: "kashmir",
    city: "gulmarg",
    date: "2026-11-08",
    intro:
      "Drung, also spelt Drang, is a small waterfall near Drung village, about 3 km off the Gulmarg road at Tangmarg and roughly 13 to 16 km below Gulmarg. In a hard winter cold spell it freezes into a wall of ice, and photos of the frozen falls have made it one of Kashmir's most searched winter spots. It is an easy 20 to 30 minute detour on the way to or from Gulmarg, about an hour and a half from Srinagar. The ice is never guaranteed: it forms only after several very cold nights, usually during Chillai Kalan from late December to January, so treat it as a bonus rather than the goal of the day.",
    sections: [
      {
        h: "Where is Drung waterfall?",
        p: [
          "The road to Drung branches off the main Srinagar to Gulmarg road near Tangmarg, the last town before the climb to Gulmarg. From the turn it is about 3 km through a village and fields to the falls. Srinagar to Tangmarg is about 38 km, so the whole drive from Srinagar is about 1.5 hours in normal conditions.",
        ],
      },
      {
        h: "When does Drung waterfall freeze?",
        p: [
          "The falls freeze only after a run of very cold nights, which usually happens during Chillai Kalan, the coldest 40 days from 21 December to the end of January, and sometimes in early February. In a mild winter they may only partly freeze, or not at all. No one can promise ice on a given date, so ask your driver or hotel the day before; local drivers know whether the falls are frozen that week.",
          "In spring and summer the falls are a pleasant stream cascade among willows and fields, worth a short stop but not a destination on their own.",
        ],
      },
      {
        h: "How to visit Drung on a Gulmarg day",
        days: [
          "Leave Srinagar by 8 am; in winter your driver fits chains at Tangmarg if needed.",
          "Stop at Drung on the way up, while the light is still soft on the ice.",
          "Continue to Gulmarg for the Gondola and the snow.",
          "Return via Tangmarg to Srinagar in the late afternoon.",
        ],
      },
      {
        h: "Road and safety in winter",
        list: [
          "The approach road is narrow and icy after snow; let a local driver judge whether to go.",
          "Wear boots with grip; the path near the falls turns to sheet ice.",
          "Do not climb on the frozen falls or stand under hanging ice.",
          "Keep children away from the edges of the frozen stream.",
          "On busy winter weekends the lane can jam; go early.",
        ],
      },
      {
        h: "Other frozen and snowy sights near Gulmarg",
        p: [
          "If Drung is not frozen, Gulmarg itself has snow from December to March, and the Gondola to Kongdori and Apharwat gives the best snowscapes. Ferozpora nallah near Tangmarg and the forest road up from Tangmarg are also beautiful after fresh snow.",
        ],
      },
      {
        h: "Planning tips",
        list: [
          "Do not plan a trip only for the frozen falls; plan Gulmarg and add Drung.",
          "Check the forecast for cold nights in the week before your trip.",
          "Carry thermals, gloves and a warm cap; the gorge is colder than the road.",
          "Local stalls sell tea and snacks in season; carry water.",
        ],
      },
    ],
    faqs: [
      { q: "Where is Drung waterfall located?", a: "Near Drung village, about 3 km off the Gulmarg road at Tangmarg and roughly 13 to 16 km below Gulmarg." },
      { q: "When is Drung waterfall frozen?", a: "Only after several very cold nights, usually during Chillai Kalan in late December and January. It is not frozen every winter." },
      { q: "How far is Drung from Srinagar?", a: "About 40 km, roughly 1.5 hours by road via Magam and Tangmarg." },
      { q: "Is Drung and Drang the same place?", a: "Yes. Drung and Drang are two spellings of the same village and waterfall near Tangmarg." },
      { q: "Can I visit Drung and Gulmarg on the same day?", a: "Yes. Drung is a short detour from Tangmarg on the way to or from Gulmarg." },
    ],
  },
  {
    slug: "bangus-valley-kashmir-guide",
    title: "Bangus Valley Kashmir: Routes, Distance from Srinagar, Best Time and Permits",
    description:
      "Bangus Valley in Kupwara: high meadows at about 3,000 m, routes via Handwara or Kupwara, distance from Srinagar, best time, stays and what to carry.",
    category: "Adventure",
    destination: "kashmir",
    date: "2026-11-08",
    intro:
      "Bangus Valley is a vast high-altitude meadow at about 3,000 m in Kupwara district, north Kashmir, ringed by forested ridges and cut by meandering streams. It has two parts, Bod Bangus (the larger) and Lokut Bangus (the smaller). Bangus is still largely undeveloped: no resorts, few shops and patchy mobile signal, which is exactly its appeal. It is usually reached from Handwara via Rajwar and Reshwari, or from Kupwara via Chowkibal, and published distances from Srinagar range from about 80 to 150 km depending on the route and where you count from. Plan a full day each way, go between June and September, and travel with a local agent who knows the current road and access rules.",
    sections: [
      {
        h: "What Bangus Valley is like",
        p: [
          "Bangus is one of the largest meadows in Kashmir: rolling grassland dotted with wildflowers in summer, shepherds' huts, horses grazing and streams winding through the middle, with pine and fir forest on the slopes. The air is cool even in July, and nights are cold. Compared with Gulmarg or Sonamarg it feels remote and untouched.",
        ],
      },
      {
        h: "Routes to Bangus Valley",
        list: [
          "Via Handwara: Srinagar to Handwara, then via Mawer and Rajwar to Reshwari, the base with a tourism guest house, and on to the meadow.",
          "Via Kupwara: Srinagar to Kupwara (about 89 km), then via Chowkibal towards the valley. The last stretch may need walking, depending on the current state of the road.",
          "Allow about 4 to 5 hours from Srinagar to the meadow, more if road works or weather slow you down.",
        ],
      },
      {
        h: "Best time to visit Bangus",
        list: [
          "June to September: the meadows are green, flowers bloom and the roads are open. July and August are the warmest.",
          "May and October: possible in good years, with cold nights and the chance of snow at the edges of the season.",
          "November to April: snowbound and closed to normal tourist travel.",
        ],
      },
      {
        h: "Permits, rules and safety",
        p: [
          "Bangus is in a border district close to the Line of Control. Access rules, timings and any registration requirements are set by the district administration and security forces and can change. Indian travellers usually visit with an agent who checks the current rules; foreign nationals should confirm in advance whether they are allowed. Carry original ID and follow instructions at checkpoints.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Facilities are limited. The usual options are the tourism department guest house at Reshwari, simple guesthouses in Handwara or Kupwara, and organised camping on the meadow through local operators. Book through an agent who can confirm what is open for your dates.",
        ],
      },
      {
        h: "A 2-day Bangus plan",
        days: [
          "Leave Srinagar early, drive via Handwara and Rajwar to Reshwari; afternoon walk on the lower meadows; overnight at Reshwari or in camp.",
          "Full morning on the Bod Bangus meadows, then drive back to Srinagar by evening.",
        ],
      },
      {
        h: "What to carry",
        list: [
          "Warm layers, a rain jacket and a cap; weather changes fast at 3,000 m.",
          "Snacks, water and basic medicines; shops are few.",
          "Cash; there are no ATMs near the meadow.",
          "Original ID for checkpoints.",
          "Power bank; mobile signal is weak or absent.",
        ],
      },
    ],
    faqs: [
      { q: "Where is Bangus Valley?", a: "In Kupwara district in north Kashmir, at about 3,000 m, reached via Handwara or Kupwara." },
      { q: "How far is Bangus Valley from Srinagar?", a: "Published figures range from about 80 to 150 km depending on the route; plan for 4 to 5 hours each way." },
      { q: "Do I need a permit for Bangus Valley?", a: "Access rules are set locally because it is a border area. Go with an agent who checks the current requirements, and carry original ID." },
      { q: "When is the best time to visit Bangus?", a: "June to September, when the meadows are green and the roads are open." },
      { q: "Can I stay overnight in Bangus?", a: "Yes, at the tourism guest house in Reshwari or in organised camps, booked in advance." },
    ],
  },
];
