// Depth pass 2 (2026-11-13): the Kashmir posts that still trailed the
// competing tdiholidayventures.com pages on depth (season, month, skiing,
// tulip and golf guides). Appended by withAdditions in blog/index.ts.
// Same rules as the rest of the blog: no typed fares or prices, no em dashes,
// facts a traveller can check.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const KASHMIR_DEPTH_2_ADDITIONS: Record<string, Addition> = {
  "best-time-to-visit-kashmir": {
    sections: [
      {
        h: "The short answer: which month should you pick?",
        p: [
          "Pick April to June for green meadows, open roads and the widest choice of sightseeing; September and October for clear skies, autumn colour and thinner crowds; and late December to February for snow. March and November are shoulder months that suit flexible travellers who want lower demand and do not mind changeable weather. July and August are pleasant in the hills but bring monsoon showers to Jammu and the Banihal stretch, plus Amarnath Yatra traffic on the Pahalgam and Baltal roads.",
          "If you can only travel in school holidays, May and June work well as long as you book stays and cabs early. If you want snow and are not a skier, January and February are the most reliable months, with Gulmarg the surest place to find it.",
        ],
      },
      {
        h: "Average temperatures in Srinagar by month",
        p: [
          "Srinagar sits at about 1,585 m, and these are typical daytime highs and night lows. Gulmarg (about 2,650 m) and Sonamarg (about 2,800 m) run roughly 6 to 10 degrees colder, and Pahalgam (about 2,200 m) about 4 to 6 degrees colder.",
        ],
        list: [
          "January: around 6 to 8°C by day, below freezing at night.",
          "February: around 9 to 11°C by day, near freezing at night.",
          "March: around 13 to 15°C by day, 2 to 4°C at night.",
          "April: around 18 to 20°C by day, 6 to 8°C at night.",
          "May: around 23 to 25°C by day, 10 to 12°C at night.",
          "June: around 28 to 30°C by day, 14 to 16°C at night.",
          "July and August: around 29 to 31°C by day, 17 to 18°C at night, with some humid days.",
          "September: around 27 to 28°C by day, 12 to 13°C at night.",
          "October: around 21 to 23°C by day, 5 to 7°C at night.",
          "November: around 14 to 16°C by day, near freezing at night.",
          "December: around 7 to 9°C by day, below freezing at night.",
        ],
      },
      {
        h: "When are the roads and high places open?",
        p: [
          "Access matters as much as weather in Kashmir, because several popular places depend on mountain roads that close in winter. Gulmarg and Pahalgam stay open all year, although the last stretch to Gulmarg from Tangmarg can need snow chains or a 4x4 after fresh snow. Sonamarg now has year-round road access through the Z-Morh tunnel, but heavy snow can still stop traffic for a day or two at a time.",
          "Higher places open later. The Zoji La pass to Kargil and Leh usually reopens between April and May and closes again in November or December. Gurez, over the Razdan Pass, usually opens around May or June and closes with the first heavy snow in November. Aru, Betaab and Chandanwari near Pahalgam are reachable from spring once the snow is cleared, with Chandanwari the last to open. Gondola Phase 2 in Gulmarg runs most of the year but stops in high wind or bad weather.",
        ],
      },
      {
        h: "Best time by traveller type",
        list: [
          "Honeymoon couples: April to June for gardens and meadows, or January and February for a snow honeymoon in Gulmarg or a heated houseboat.",
          "Families with young children: May, June, September and October, when nights are mild and every sightseeing point is open.",
          "Senior citizens: April, May, September and October, avoiding deep winter cold and the busiest summer weeks.",
          "Skiers and snowboarders: mid-January to early March, when the base on Apharwat is deepest.",
          "Photographers: April for blossom and tulips, October and early November for chinar colour and clear light.",
          "Trekkers: July to mid-September for the Great Lakes and Tarsar Marsar routes, when the high passes are free of snow.",
          "Budget travellers: March, early April, late October and November, when demand and hotel rates ease.",
        ],
      },
      {
        h: "Peak, shoulder and low seasons explained",
        p: [
          "Peak season runs from mid-April to June and again over Christmas and New Year, when hotels, houseboats and cabs are in the highest demand and the best rooms sell out weeks ahead. Expect queues at the Gulmarg Gondola and busy pony stands in Pahalgam.",
          "Shoulder season covers March, early April, September, October and early December. Most places are open, rooms are easier to find and agents have more room to negotiate. Low season is the stretch of late November and the snowless parts of winter, and the monsoon weeks of July and August for Jammu-side travel. Value is best then, but check heating, road status and what is open before you commit.",
        ],
      },
      {
        h: "Which months to avoid, and why",
        p: [
          "No month is closed, but some suit fewer people. Late November and early December can be grey, cold and snowless at the same time, which disappoints travellers who come for either green meadows or snow. July and August are fine in the valley, but landslides on the Jammu to Srinagar highway and Amarnath Yatra convoys can slow road journeys, so fly or take the Vande Bharat train from Katra if you can.",
          "Deep winter, from late December to the end of January, is Chillai Kalan, the coldest forty days. It is magical for snow lovers, but flights can be delayed by fog or snow, some roads close for a day after a storm and unheated rooms are uncomfortable. Travellers with heart or breathing conditions should talk to their doctor before a winter trip.",
        ],
      },
      {
        h: "How weather changes the cost of a Kashmir trip",
        p: [
          "Prices follow demand rather than the calendar alone. The same hotel can cost noticeably more in May or over New Year than in March or November, and houseboats on Dal Lake follow the same pattern. Flights to Srinagar rise sharply around school holidays and long weekends.",
          "Cabs are the steadiest part of the bill, but winter can add a 4x4 or snow-chain charge for the Tangmarg to Gulmarg stretch. If your dates are flexible, ask agents for two quotes a week or two apart; the difference often pays for an extra night. Our tour package pages show live prices from agents rather than typed figures that go out of date.",
        ],
      },
      {
        h: "How far ahead should you book?",
        p: [
          "For April to June, and for Christmas and New Year, book flights and stays six to ten weeks ahead, and earlier for named luxury hotels, Gulmarg rooms near the Gondola and good houseboats. For shoulder months, three to four weeks is usually enough. Ski weeks in January and February need early bookings in Gulmarg because ski lodges are small and fill with repeat guests.",
          "Whatever the month, confirm in writing what the package includes: heating in winter, the type of cab, union taxi or pony charges, Gondola tickets and houseboat transfers.",
        ],
      },
    ],
    faqs: [
      { q: "What is the cheapest time to visit Kashmir?", a: "March, early April, late October and November usually have the lowest demand, so hotels and houseboats are easier to negotiate. Avoid school holidays and New Year for value." },
      { q: "Which month has the best weather in Kashmir?", a: "May, September and early October have mild days, cool nights and settled weather, with most places open." },
      { q: "Is September a good time to visit Kashmir?", a: "Yes. Skies are clear, crowds thin after the summer holidays, apple orchards are ripening and all the main valleys are open." },
      { q: "When does Zoji La open for Ladakh?", a: "Usually between April and May, depending on snow, and it closes again in November or December." },
      { q: "When is the best time to see autumn colours in Kashmir?", a: "Late October to mid-November, when the chinar leaves turn red and gold in Srinagar's gardens." },
      { q: "Is Kashmir good in November?", a: "Yes for quiet sightseeing and chinar colour in the first half of the month; nights are cold, and snow is possible later in the month in Gulmarg." },
    ],
  },

  "kashmir-in-june": {
    sections: [
      {
        h: "Quick answer: should you go to Kashmir in June?",
        p: [
          "Yes, June is one of the most reliable months for Kashmir. Every main valley is open, days in Srinagar are warm, nights in the hills are cool, and snowfields still sit above Sonamarg and at the top of Gulmarg's Gondola. The trade-offs are crowds, higher prices and Amarnath Yatra traffic from late June, so book early and plan your Pahalgam and Sonamarg days around the yatra dates.",
        ],
      },
      {
        h: "Day and night temperatures in June, place by place",
        list: [
          "Srinagar (about 1,585 m): warm days around 28 to 30°C, nights around 14 to 16°C.",
          "Pahalgam (about 2,200 m): pleasant days in the low to mid 20s, cool nights near 10°C.",
          "Gulmarg (about 2,650 m): mild days around 18 to 22°C, chilly nights in single digits.",
          "Sonamarg (about 2,800 m): days around 18 to 20°C, cold nights, with snow patches on the slopes.",
          "Gondola Phase 2 at Apharwat (about 3,980 m): cold, windy and often snowy even in June.",
          "Gurez (about 2,400 m): mild days and cold nights once the Razdan Pass is open.",
        ],
      },
      {
        h: "Where you can still touch snow in June",
        p: [
          "June snow is found high up, not in the towns. The most dependable spot is Apharwat, reached by Gulmarg Gondola Phase 2, where snow usually lingers into June. In Sonamarg, a pony ride or walk to the Thajiwas glacier brings you to old snow and ice fields. Zero Point beyond Zoji La, on the Ladakh side, is another snow stop that taxis from Sonamarg offer once the pass is open.",
          "Near Pahalgam, Chandanwari often keeps a snow bridge into early summer, although access can be limited as the Amarnath Yatra approaches. Ask your agent which of these is open on your dates, since snow cover varies a lot from year to year.",
        ],
      },
      {
        h: "River rafting and outdoor activities in June",
        p: [
          "Snowmelt keeps the rivers full in June, which makes it a strong month for rafting. The Lidder near Pahalgam, with stretches starting around Yanner, and the Sindh at Sonamarg both run commercial rafting with local operators. Choose a registered operator, wear the helmet and life jacket provided and avoid rafting right after heavy rain.",
          "Other June favourites include pony rides to Baisaran, Aru and Thajiwas, short hikes to Lidderwat from Aru, trout fishing with a permit from the Fisheries Department, golf at Gulmarg and Pahalgam, and long shikara rides on Dal and Nigeen in the evening.",
        ],
      },
      {
        h: "June events: Kheer Bhawani and the start of the Amarnath Yatra",
        p: [
          "The Mela Kheer Bhawani at Tulmulla, near Ganderbal, is held on Jyeshtha Ashtami, which falls in late May or June. Thousands of Kashmiri Pandit devotees gather at the spring temple, and visitors are welcome to observe respectfully.",
          "The Amarnath Yatra usually begins in late June or early July from the Pahalgam (Nunwan and Chandanwari) and Baltal (near Sonamarg) base camps. During the yatra, convoys move on fixed schedules and some roads see restrictions, so tourists heading to Pahalgam or Sonamarg should keep timings loose and check the latest advisories.",
        ],
      },
      {
        h: "Getting to Kashmir in June",
        p: [
          "Srinagar airport has direct flights from Delhi, Mumbai, Bengaluru, Hyderabad, Kolkata, Chandigarh, Amritsar and other cities, but fares climb sharply in June, so book early. The Vande Bharat train from Katra to Srinagar is a strong option for travellers who want to combine Vaishno Devi with Kashmir, or who find June flights expensive. By road, the Jammu to Srinagar highway through the Banihal tunnel usually takes six to eight hours.",
        ],
      },
      {
        h: "Gurez and the Mughal Road in June",
        p: [
          "June is often the first comfortable month for Gurez, the border valley on the Kishanganga reached over the Razdan Pass. Foreign nationals cannot visit Gurez; Indian visitors should carry original photo ID for the checkposts. Stays are simple guest houses, homestays and camps, so book through someone who has called the property.",
          "The Mughal Road between Shopian and Poonch, over Peer Ki Gali, is usually open by June and makes a scenic alternative route to or from Jammu for travellers with an extra day.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need woollens in Kashmir in June?", a: "Yes, a light jacket or fleece for evenings in Pahalgam, Gulmarg and Sonamarg, and a warm layer for the Gondola Phase 2 summit." },
      { q: "When is Kheer Bhawani mela in June?", a: "It is held on Jyeshtha Ashtami at Tulmulla near Ganderbal, which falls in late May or June depending on the lunar calendar." },
      { q: "Does the Amarnath Yatra affect tourists in June?", a: "From late June, yatra convoys and security arrangements can slow travel to Pahalgam and Sonamarg. Keep a flexible schedule." },
      { q: "Is the Gulmarg Gondola open in June?", a: "Yes, both phases usually run in June, though Phase 2 stops in high wind or bad weather." },
    ],
  },

  "kashmir-in-march": {
    sections: [
      {
        h: "Quick answer: is March a good month for Kashmir?",
        p: [
          "March is a good month if you want late-season snow in Gulmarg, almond blossom in Srinagar and lower prices before the April rush. Days warm up through the month, and the Tulip Garden can open in the last week in some years. The catch is changeable weather: rain in Srinagar can fall as snow in Gulmarg, and some higher roads are still closed.",
        ],
      },
      {
        h: "Early, mid and late March compared",
        list: [
          "Early March: still wintry. Gulmarg usually has good snow and the ski season continues, Srinagar is cold and grey on some days, and Sonamarg is reachable through the Z-Morh tunnel but deep in snow.",
          "Mid-March: almond trees begin to flower at Badamwari below Hari Parbat, Navreh (the Kashmiri Pandit new year) often falls around now, and daytime temperatures in Srinagar climb into the low teens.",
          "Late March: blossom peaks, the Tulip Garden may open if the season is early, and Pahalgam's lower meadows start to clear. It is the most comfortable part of the month for families.",
        ],
      },
      {
        h: "Badamwari and the almond blossom",
        p: [
          "Badamwari is a restored almond garden on the slopes below Hari Parbat fort in old Srinagar. In March its trees flower white and pale pink, and it becomes one of the first signs of spring in the valley. Locals come for picnics on sunny weekends, and it is a quieter, more local experience than the Tulip Garden.",
          "Combine Badamwari with the Hari Parbat fort area, the Makhdoom Sahib shrine and a walk through the old city lanes. Mornings are best for photographs before the crowds arrive.",
        ],
      },
      {
        h: "Skiing and snow in Gulmarg in March",
        p: [
          "The Gulmarg ski season usually continues into March, with spring snow that softens by afternoon. Beginners can still take lessons on the gentle slopes near the Gondola base and the Kongdoori bowl, while experienced skiers should check the snowpack and avalanche advisories before going off-piste from Apharwat.",
          "Non-skiers can still enjoy sledging, snowshoe walks and the Gondola ride in most of March. Snow on the main meadow thins by the end of the month, so for guaranteed snow underfoot, plan the first half.",
        ],
      },
      {
        h: "Getting there and around in March",
        p: [
          "Flights to Srinagar are less crowded than in April and May, and the Vande Bharat train from Katra is a dependable alternative if weather delays flights. On the road, the Jammu to Srinagar highway through the Banihal tunnel can still close for a day after heavy snow or landslides, so keep a buffer.",
          "Inside the valley, standard cabs reach Pahalgam and Tangmarg easily. For the final stretch to Gulmarg after fresh snow, drivers may need snow chains, and some agents switch to a 4x4 for that stretch. Ask whether this is included.",
        ],
      },
      {
        h: "Heating, rooms and houseboats in March",
        p: [
          "Nights in March are still cold, especially in Gulmarg and Pahalgam, so heating remains the most important thing to check. Ask whether rooms have central heating, electric heaters or a bukhari, whether there is power backup, and whether hot water is available all day.",
          "Houseboats are comfortable in March if they are heated; ask for a room on the warmer side away from the deck. Many hotels offer lower rates until the end of the month, before the April tulip season.",
        ],
      },
      {
        h: "A relaxed 4-day March plan",
        days: [
          "Arrive in Srinagar, check into a heated houseboat or hotel, and take a sunset shikara ride on Dal Lake.",
          "Morning at Badamwari for the almond blossom, then Hari Parbat, the Mughal gardens of Nishat and Shalimar, and the Tulip Garden if it has opened.",
          "Day trip to Gulmarg for the Gondola, snow play or a ski lesson, returning to Srinagar in the evening.",
          "Old city walk, Jamia Masjid and Shah-e-Hamdan, shopping for pashmina and papier-mache, then depart.",
        ],
      },
    ],
    faqs: [
      { q: "Is the Tulip Garden open in March?", a: "Only in some years, when the season is early. It usually opens in the last week of March or the first week of April and stays open for about three to four weeks." },
      { q: "Where can I see almond blossom in Srinagar?", a: "At Badamwari, the almond garden below Hari Parbat fort in old Srinagar, usually from mid to late March." },
      { q: "Is March good for skiing in Gulmarg?", a: "Yes, especially in the first half of the month, though spring snow softens in the afternoon." },
      { q: "Does it rain in Kashmir in March?", a: "Yes, March has frequent showers in Srinagar, which often fall as snow in Gulmarg and Sonamarg." },
    ],
  },

  "kashmir-in-may": {
    sections: [
      {
        h: "Quick answer: is May the best month for Kashmir?",
        p: [
          "For many travellers, yes. May brings warm days, cool nights, green meadows and open roads to Gulmarg, Pahalgam, Sonamarg and usually Gurez and Zoji La. It is also one of the busiest months because of Indian school holidays, so hotels, houseboats and Gondola tickets need early booking. If you dislike crowds, travel in the first ten days of May.",
        ],
      },
      {
        h: "May temperatures by place",
        list: [
          "Srinagar: days around 23 to 25°C, nights around 10 to 12°C.",
          "Pahalgam: days around 18 to 22°C, nights around 6 to 8°C.",
          "Gulmarg: days around 14 to 18°C, cold nights near freezing early in the month.",
          "Sonamarg: days around 13 to 17°C, cold nights, snow on the surrounding slopes.",
          "Apharwat (Gondola Phase 2): cold and often snowy, with wind chill well below freezing.",
        ],
      },
      {
        h: "Gondola tickets in May",
        p: [
          "The Gulmarg Gondola is at its busiest in May. Tickets are sold online through the official booking portal run by the Jammu and Kashmir Cable Car Corporation, and same-day counter tickets can run out early. Book as soon as your Gulmarg date is fixed, carry the ID used for booking and arrive early to avoid the longest queues.",
          "Phase 1 goes from Gulmarg to Kongdoori, and Phase 2 continues to Apharwat, where snow usually lies through May. Phase 2 can stop in high wind, so keep the Gulmarg day flexible if possible.",
        ],
      },
      {
        h: "Pahalgam's valleys in May",
        p: [
          "May is when Pahalgam's three side valleys are at their freshest. Betaab Valley, about 15 km from town, has river meadows and pine forest; Aru, about 12 km away, is a wide meadow and the trailhead for Lidderwat and Kolahoi; and Chandanwari, about 16 km away, often still has a snow bridge in May. They are visited by local union taxis from the Pahalgam stand, not by outside cabs.",
          "Baisaran, the meadow above Pahalgam, is reached on foot or by pony. Check the current access status locally, since access to some points can change at short notice.",
        ],
      },
      {
        h: "Sonamarg, Zoji La and Zero Point in May",
        p: [
          "Sonamarg is fully in season in May. The Thajiwas glacier walk or pony ride is the main excursion, and the river Sindh runs fast with snowmelt. Once the Zoji La pass opens, usually in April or May, taxis from Sonamarg run to Zero Point and the snowfields on the Ladakh side. Access depends on road clearance and permission on the day, so ask the Sonamarg taxi union rather than relying on a promise made weeks earlier.",
        ],
      },
      {
        h: "May for honeymoon couples",
        p: [
          "May suits a honeymoon well: Mughal gardens are in bloom, evenings on a houseboat are comfortable, and Gulmarg and Pahalgam are green without being cold. Book a houseboat on Nigeen or a quiet part of Dal for a calmer stay, ask for a riverside room in Pahalgam, and spend one night in Gulmarg rather than a day trip so you can enjoy the meadow after the day visitors leave.",
        ],
      },
      {
        h: "Booking checklist for May",
        list: [
          "Book flights to Srinagar early, or consider the Vande Bharat train from Katra.",
          "Reserve houseboats and Gulmarg rooms six to eight weeks ahead.",
          "Book Gondola tickets online as soon as your Gulmarg date is set.",
          "Ask whether union taxi and pony charges in Pahalgam and Sonamarg are included or paid locally.",
          "Keep one flexible day for weather, Gondola closures or traffic.",
          "Carry a warm layer for Gulmarg, Sonamarg and the Gondola summit.",
        ],
      },
    ],
    faqs: [
      { q: "Is Kashmir hot in May?", a: "No. Srinagar is warm by day but rarely hot, and the hill stations are cool, with cold nights in Gulmarg and Sonamarg." },
      { q: "Is Gurez open in May?", a: "Often from late May, once the Razdan Pass is cleared, but in heavy snow years it opens in June. Check before booking." },
      { q: "How early should I book Gulmarg Gondola tickets in May?", a: "As soon as your Gulmarg date is fixed. May is a peak month and online slots often sell out." },
    ],
  },

  "gulmarg-skiing-and-snow-activities": {
    sections: [
      {
        h: "Quick answer: is Gulmarg good for skiing?",
        p: [
          "Yes. Gulmarg is India's best-known ski resort, with beginner slopes near the Gondola base, intermediate runs around Kongdoori and long, steep off-piste terrain from Apharwat, reached by Gondola Phase 2 at about 3,980 m. The season usually runs from mid-December to March, with the deepest snow in January and February. Beginners can learn in a few days with an instructor; experts come for powder but must take avalanche risk seriously.",
        ],
      },
      {
        h: "The ski areas, from bottom to top",
        list: [
          "Gondola base and the main meadow (about 2,650 m): gentle slopes for first lessons, with button lifts and the ski school area.",
          "Kongdoori (about 3,080 m, Gondola Phase 1): a wide bowl with intermediate runs, a chairlift and space for improving skiers.",
          "Apharwat (about 3,980 m, Gondola Phase 2): high, open terrain for confident skiers and snowboarders, with long descents back towards Kongdoori and the base.",
          "Backcountry and ski touring routes beyond the lift system: for experts with a qualified guide, avalanche gear and current snow information only.",
        ],
      },
      {
        h: "Learning to ski: courses and instructors",
        p: [
          "The Indian Institute of Skiing and Mountaineering (IISM) in Gulmarg runs structured ski and snowboard courses each winter, with dates, durations and eligibility published on its official site. These courses include equipment and accommodation and are popular, so apply early.",
          "Private instructors work from the Gondola base and through hotels. Ask for an instructor with a recognised certification, agree the hours and what equipment is included before you start, and book half-days for the first two or three days so your legs can adjust. Most first-timers can make controlled turns on the nursery slopes within three to five days of lessons.",
        ],
      },
      {
        h: "Avalanche safety in Gulmarg",
        p: [
          "Gulmarg's off-piste terrain is famous, and so is its avalanche risk. Fatal avalanches have occurred on Apharwat, including to experienced skiers. Before leaving marked areas, check the official avalanche advisories issued for the region, ski with a qualified local guide, and carry a transceiver, probe and shovel that you know how to use.",
          "Beginners and intermediates should stay on the slopes near the base and Kongdoori. Never ski alone, avoid steep slopes after heavy snowfall or strong wind, and turn back if conditions feel uncertain.",
        ],
      },
      {
        h: "Snow activities for families and non-skiers",
        list: [
          "Gondola ride to Kongdoori and, weather permitting, to Apharwat for snow views.",
          "Sledge rides pulled by local sledge operators on the meadow; agree the route and rate first.",
          "Snowshoe walks and short winter treks with a local guide.",
          "Snowmobile rides on designated areas of the meadow.",
          "Building snowmen, snowball fights and photographs at St Mary's Church and the frozen meadow.",
          "Warm drinks and kahwa at cafes near the Gondola base.",
        ],
      },
      {
        h: "Khelo India Winter Games and events",
        p: [
          "Gulmarg has hosted the Khelo India Winter Games several times since 2020, with alpine skiing, snowboarding, Nordic skiing and snowshoe events. When the games are on, rooms fill early and parts of the slopes may be reserved for competition. If your dates overlap, it is a great chance to watch, but book stays well in advance.",
        ],
      },
      {
        h: "How to plan a ski week in Gulmarg",
        days: [
          "Fly to Srinagar and drive to Gulmarg via Tangmarg, about two hours in snow. Collect equipment and rest.",
          "First lesson on the nursery slopes near the Gondola base; short session to adjust to altitude.",
          "Second and third lessons, practising turns and stopping; try the button lifts.",
          "Gondola Phase 1 to Kongdoori for wider intermediate runs with your instructor.",
          "Free skiing on familiar slopes, or a snowshoe walk if you need a rest day.",
          "If confident and conditions allow, Phase 2 to Apharwat with a guide; otherwise more practice at Kongdoori.",
          "Return to Srinagar for a final evening on a houseboat before flying home.",
        ],
      },
      {
        h: "Getting to Gulmarg in winter",
        p: [
          "Gulmarg is about 50 km from Srinagar airport, usually two hours by road in winter. The last 13 km from Tangmarg climbs through hairpin bends that can be icy; after fresh snow, police may require snow chains or 4x4 vehicles. Many skiers arrive by the morning flight and drive up the same day. Keep a buffer day at the end of the trip in case snow delays flights out of Srinagar.",
        ],
      },
    ],
    faqs: [
      { q: "What is the IISM in Gulmarg?", a: "The Indian Institute of Skiing and Mountaineering, a government institute in Gulmarg that runs ski and snowboard courses each winter. Check its official site for dates and fees." },
      { q: "Is off-piste skiing safe in Gulmarg?", a: "Only with a qualified guide, avalanche gear and current snow information. Apharwat has a history of serious avalanches." },
      { q: "Can children learn skiing in Gulmarg?", a: "Yes, with an instructor on the gentle slopes near the Gondola base. Keep sessions short and dress them in waterproof layers." },
      { q: "When is the best snow in Gulmarg for skiing?", a: "January and February usually have the deepest base, with March bringing softer spring snow." },
    ],
  },

  "tulip-garden-srinagar-guide": {
    sections: [
      {
        h: "Tulip Garden facts at a glance",
        list: [
          "Official name: Indira Gandhi Memorial Tulip Garden, formerly known as Siraj Bagh.",
          "Location: the foothills of the Zabarwan range, between Cheshma Shahi and the Dal Lake boulevard, overlooking the lake.",
          "Size: about 30 hectares, often described as the largest tulip garden in Asia.",
          "Blooms: more than a million tulips in dozens of varieties, plus hyacinths, daffodils and ranunculus, planted in terraces.",
          "Season: usually opens in late March or early April for about three to four weeks, depending on the weather.",
          "Managed by: the Floriculture Department of Jammu and Kashmir, which announces opening dates each year.",
        ],
      },
      {
        h: "How to time your visit within the season",
        p: [
          "Tulips bloom in waves. Early varieties open in the first week, the main colour peaks in the second and third weeks, and late varieties carry the garden into the fourth week. A warm spell shortens the season; a cold spell stretches it. If you are booking flights weeks in advance, aim for the first half of April, when the chances of good bloom are highest.",
          "Within the day, arrive at opening time for soft light, fewer people and fresh flowers. Afternoons on weekends are the busiest, especially during the Tulip Festival, when cultural programmes and local food stalls draw large local crowds.",
        ],
      },
      {
        h: "Other gardens to pair with the Tulip Garden",
        p: [
          "The Tulip Garden sits along the same road as several of Srinagar's best gardens, so it is easy to combine them in one day. Cheshma Shahi, a small Mughal garden with a natural spring, is next door. Pari Mahal, the terraced ruin above it, has wide views of Dal Lake. The Botanical Garden is close by, and Nishat and Shalimar Bagh are a short drive along the boulevard.",
          "A comfortable plan is the Tulip Garden at opening time, then Cheshma Shahi and Pari Mahal, lunch, and Nishat and Shalimar in the afternoon, ending with a shikara ride at sunset.",
        ],
      },
    ],
    faqs: [
      { q: "What is the old name of the Tulip Garden in Srinagar?", a: "Siraj Bagh. It was renamed the Indira Gandhi Memorial Tulip Garden." },
      { q: "How many tulips are in the Srinagar Tulip Garden?", a: "More than a million in a typical season, across dozens of varieties, with numbers announced by the Floriculture Department each year." },
    ],
  },

  "golf-in-kashmir-royal-springs-gulmarg-pahalgam": {
    sections: [
      {
        h: "Which Kashmir golf course should you play?",
        p: [
          "Play Royal Springs in Srinagar for a championship-style 18 holes with views of Dal Lake and the Zabarwan hills, Gulmarg for the thrill of high-altitude golf on a meadow surrounded by pine forest, and Pahalgam for a relaxed round beside the Lidder valley. Golfers with a week can play all three, staying in Srinagar, Gulmarg and Pahalgam in turn, with non-golfers sightseeing while the round is on.",
          "Visitors usually pay a green fee and can hire clubs and caddies at the courses, but rules for non-members, tee times and dress codes change, so confirm the day before through your hotel or agent. The season runs roughly from April to October; Gulmarg's course lies under snow in winter.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a handicap certificate to play golf in Kashmir?", a: "Requirements vary by course and season. Carry your handicap card if you have one, and ask your hotel to confirm the current rules when booking a tee time." },
    ],
  },
};
