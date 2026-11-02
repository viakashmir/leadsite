import type { BlogPost } from "./types";

// Kashmir winter month guides: November, December, January, February.
// Facts checked 2026-11-03: Chillai Kalan 21 December to 31 January, Chillai
// Khurd to about 19 February, Chillai Bachha to about 1 March; Srinagar and
// Gulmarg temperatures are typical IMD-range values, not forecasts. Z-Morh
// (Sonamarg) tunnel open since 13 January 2025; Zojila and Mughal Road shut in
// winter. Baisaran meadow closed since April 2025 (Anantnag list, July 2026).
// Gondola tickets are sold online by the J&K Cable Car Corporation; fares
// change, so none are quoted. No em dashes, no invented prices.

const SNOW_POINTS_WINTER =
  "Gulmarg is the surest snow in the valley, followed by Sonamarg and the upper parts of Pahalgam. Srinagar gets snow on a few days each winter, but it rarely lies for long in the city.";

export const KASHMIR_WINTER_MONTHS: BlogPost[] = [
  {
    slug: "kashmir-in-december",
    title: "Kashmir in December: Snow, Weather, Christmas Crowds and a 5-Day Plan",
    description:
      "Kashmir in December: Srinagar and Gulmarg temperatures, where it snows, Christmas and New Year crowds, Chillai Kalan, what is open and a 5-day snow plan.",
    category: "Itineraries",
    destination: "kashmir",
    date: "2026-11-03",
    intro:
      "December is when Kashmir turns into a snow destination. Gulmarg usually has a proper snow cover by the middle of the month, Sonamarg and Pahalgam turn white after the first big spells, and Srinagar is cold, clear and still, with days around 6 to 9°C and nights below freezing. Chillai Kalan, the hardest 40 days of winter, starts on 21 December. The second half of the month, Christmas to New Year, is the busiest and most expensive week of the whole Kashmir winter, so book flights and Gulmarg rooms early. If you can travel in the first fortnight or right after 2 January, you get the same snowy valleys with far fewer people.",
    sections: [
      {
        h: "Kashmir weather in December",
        p: [
          "December weather in Kashmir is cold and mostly dry, broken by Western Disturbances that bring two or three snowfall spells in a normal year. Between those spells the sky is clear and the sun is strong, which makes daytime sightseeing pleasant if you are dressed for it.",
          "Temperatures vary a lot by altitude, so plan clothing for the coldest place on your route, not for Srinagar.",
        ],
        list: [
          "Srinagar (about 1,585 m): days typically 6 to 9°C, nights around minus 1 to minus 4°C, colder after 21 December.",
          "Gulmarg (about 2,650 m): days around 0 to 4°C, nights often minus 6 to minus 10°C. Snow on the ground for most of the month in a normal year.",
          "Pahalgam (about 2,130 m): days around 3 to 6°C, nights minus 4 to minus 8°C. Snow in the pine forests and along the Lidder after big spells.",
          "Sonamarg (about 2,700 m): the coldest of the four, with snow that stays once it falls. The town is reachable in winter since the Z-Morh tunnel opened, though fresh snow can close the road for a day or two.",
        ],
      },
      {
        h: "Will it snow in Kashmir in December?",
        p: [
          SNOW_POINTS_WINTER,
          "In most recent winters Gulmarg has had usable snow by mid-December, but the timing of the first heavy spell shifts by a week or two from year to year, and some Decembers have been dry until late in the month. If seeing snow is the main reason for your trip, the second half of December is safer than the first, and a Gulmarg day or overnight should be on the plan whatever happens in Srinagar.",
          "If there is no fresh snow when you arrive, the Gondola to Kongdori and, when it runs, Apharwat almost always gets you onto snow, because the upper slopes hold it from late November.",
        ],
      },
      {
        h: "Chillai Kalan: what the 21 December start means for you",
        p: [
          "Kashmiris divide the deep winter into Chillai Kalan (21 December to 31 January, the harshest 40 days), Chillai Khurd (the next 20 days) and Chillai Bachha (the last 10). During Chillai Kalan the valley sees its lowest temperatures and most of its heavy snow. Water pipes freeze on cold nights, the edges of Dal Lake can freeze in a long cold spell, and people wear pherans with a kangri (a small fire pot) underneath.",
          "For a traveller, this mostly means three things: book rooms with reliable heating, expect shorter sightseeing days because the light fades by about 5 pm, and keep a buffer day at the end of the trip in case snow delays a flight or closes a road.",
        ],
      },
      {
        h: "Christmas and New Year in Kashmir",
        p: [
          "The week from about 22 December to 2 January is peak season. Gulmarg hotels fill first, followed by heated Srinagar hotels and the better houseboats. Many hotels set minimum stays and add a compulsory gala dinner on 31 December, so ask about both when you compare quotes.",
          "Gondola slots also sell out in this week. Book them online on the J&K Cable Car Corporation portal as soon as your Gulmarg date is fixed, and carry the same photo ID you used to book.",
          "If your dates are flexible, the first ten days of December and the period after 3 January give you the same snow at clearly lower prices and with much shorter queues.",
        ],
      },
      {
        h: "What is open and what is closed in December",
        list: [
          "Open: Srinagar sightseeing (Mughal gardens are bare but open, Shankaracharya Temple, Hazratbal, the old city), shikara rides on calm days, Gulmarg and the Gondola (weather permitting), Pahalgam town and Betaab Valley, Sonamarg up to Thajiwas when the road is clear, Doodhpathri on clear days.",
          "Often closed or limited: Aru and Chandanwari after heavy snow, Gondola Phase 2 in high wind or poor visibility, high treks, and the Zojila pass to Ladakh.",
          "Closed for the season: Mughal Road (Shopian to Poonch) and the Srinagar to Leh road over Zojila.",
          "Not open to visitors: Baisaran meadow above Pahalgam has been closed since April 2025. Check its status locally before you plan around it.",
        ],
      },
      {
        h: "5-day Kashmir itinerary for December",
        days: [
          "Arrive in Srinagar. Check in to a heated hotel or houseboat. Afternoon shikara ride on Dal Lake if the water is calm, and kahwa at sunset.",
          "Day trip or move to Gulmarg (about 50 km, 1.5 to 2 hours; chains are fitted at Tangmarg after fresh snow). Gondola to Kongdori, snow play, sledge or a beginner ski lesson. Stay overnight in Gulmarg if you can.",
          "Morning in Gulmarg for Phase 2 to Apharwat if it is running, then return to Srinagar.",
          "Day trip to Sonamarg through the Z-Morh tunnel, or to Pahalgam and Betaab Valley. Ask the driver the evening before which road is clear.",
          "Srinagar old city, Jamia Masjid, a harissa breakfast, shopping for pashmina and walnut wood, then the airport. Leave at least 2.5 hours for the airport, because there is a security check at the entry gate.",
        ],
      },
      {
        h: "What to pack for Kashmir in December",
        list: [
          "Thermal inner layers (top and bottom), a fleece or woollen sweater and a down or padded jacket rated for minus 10°C.",
          "Waterproof, insulated shoes with good grip. Sports shoes get soaked in snow; snow boots can also be hired in Gulmarg.",
          "Woollen cap, gloves (a waterproof pair for snow), scarf or neck warmer and woollen socks, with a spare pair for every day.",
          "Sunglasses and sunscreen: snow glare at Gulmarg and Sonamarg is strong even on cold days.",
          "Lip balm and a heavy moisturiser, because the winter air is very dry.",
          "A postpaid SIM, or plan to buy a local SIM on arrival, as prepaid connections from outside J&K generally do not work there.",
        ],
      },
      {
        h: "December trip costs: what drives the price",
        p: [
          "December prices are set by three things: the week you travel, whether you sleep in Gulmarg, and the heating standard of your rooms. The Christmas to New Year week is the most expensive of the season, and a Gulmarg night costs more than a Srinagar night at the same star rating.",
          "Things that are usually paid locally and not in the package: Gondola tickets, sledge and pony rides, ski equipment and instructors, union taxis for Pahalgam and Sonamarg sightseeing, and the 31 December gala dinner if a hotel makes it compulsory. Ask each agent to list these clearly so you can compare quotes on equal terms.",
        ],
      },
      {
        h: "Who December suits, and who should pick another month",
        list: [
          "Suits: honeymooners who want snow and cosy evenings, families with school winter breaks, first-time skiers, photographers who like clear winter light.",
          "Think twice: travellers with heart or breathing problems at altitude, people who cannot handle sub-zero nights, and anyone on a fixed return flight with no buffer.",
          "Better alternatives: early March if you want snow with milder nights, or late March to April if you want tulips and blossom instead of snow.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is December a good time to visit Kashmir?",
        a: "Yes, if you want snow and can handle cold. Gulmarg usually has snow by mid-December, Srinagar is clear and cold, and the valley is festive around Christmas and New Year. Book early for the last ten days of the month.",
      },
      {
        q: "Does it snow in Srinagar in December?",
        a: "Sometimes. Srinagar gets snow on a few days in most winters, more often in late December and January, but it rarely lies for long in the city. Gulmarg and Sonamarg are where you reliably find snow.",
      },
      {
        q: "How cold is Kashmir in December?",
        a: "Srinagar days are typically 6 to 9°C with nights below freezing. Gulmarg days hover around freezing with nights of minus 6 to minus 10°C, and it gets colder after 21 December when Chillai Kalan begins.",
      },
      {
        q: "Can I go to Sonamarg in December?",
        a: "Usually yes. The Z-Morh tunnel has kept Sonamarg reachable in winter since January 2025. Heavy snow can still close the road for a day or two, so keep Sonamarg flexible in your plan.",
      },
      {
        q: "Is the Gulmarg Gondola open in December?",
        a: "Phase 1 to Kongdori usually runs through December. Phase 2 to Apharwat depends on wind and visibility and can close at short notice. Book online on the J&K Cable Car Corporation portal and carry your ID.",
      },
      {
        q: "Is Kashmir crowded for New Year?",
        a: "Yes. 25 December to 1 January is the busiest week of the winter, especially in Gulmarg. Expect higher room rates, minimum stays and sold-out Gondola slots unless you book well ahead.",
      },
      {
        q: "How many days do I need for Kashmir in December?",
        a: "Five days covers Srinagar, Gulmarg and one of Sonamarg or Pahalgam. Six days lets you add a buffer for snow delays, which is wise in winter.",
      },
      {
        q: "Are flights to Srinagar delayed in December?",
        a: "Flights run all winter, but heavy snow or poor visibility can delay or cancel them. Avoid tight onward connections on the day you fly out, and keep one spare day if your return date matters.",
      },
    ],
  },
  {
    slug: "kashmir-in-january",
    title: "Kashmir in January: Peak Snow, Chillai Kalan Weather and How to Plan",
    description:
      "Kashmir in January: the coldest, snowiest month. Temperatures in Srinagar and Gulmarg, frozen Dal Lake, skiing, road closures and a safe 6-day snow itinerary.",
    category: "Itineraries",
    destination: "kashmir",
    date: "2026-11-03",
    intro:
      "January is Kashmir's deepest winter and its most reliable month for snow. The whole month falls inside Chillai Kalan, the 40-day cold spell that runs from 21 December to 31 January, so Srinagar nights are regularly below minus 4°C and Gulmarg sits under a thick snow cover. This is the month for skiing, snow-covered houseboats and empty Mughal gardens dusted white. The trade-off is that roads and flights are disrupted more often than in any other month, so a January trip needs warmer clothing, properly heated rooms and at least one buffer day. After the New Year rush ends around 3 January, prices and crowds drop sharply until the ski peak in February.",
    sections: [
      {
        h: "Kashmir weather in January",
        p: [
          "January is the coldest month in most years. Western Disturbances bring heavy snowfall spells, and between them come still, very cold nights with clear skies. Fog can settle over Srinagar on some mornings.",
        ],
        list: [
          "Srinagar: days typically 4 to 7°C, nights around minus 2 to minus 6°C, and colder in a hard spell. The coldest nights of recent decades have been close to minus 9°C.",
          "Gulmarg: days around minus 2 to 2°C, nights often minus 8 to minus 12°C. Snow depth is usually good from early January.",
          "Pahalgam: days around 1 to 4°C, nights minus 6 to minus 10°C, with the pine forests and Betaab Valley under snow.",
          "Sonamarg: very cold, with deep snow. The road through the Z-Morh tunnel stays open on most days, but closes after heavy falls until it is cleared.",
        ],
      },
      {
        h: "Snow in January: where and how reliable",
        p: [
          SNOW_POINTS_WINTER,
          "January is the month when snow is most likely to fall in Srinagar itself. A snowy morning on Dal Lake, with shikaras parked along the boulevard and chinar branches outlined in white, is one of the classic Kashmir winter sights. It is not guaranteed, but the odds are better in January than in any other month.",
        ],
      },
      {
        h: "Does Dal Lake freeze in January?",
        p: [
          "Parts of Dal Lake, mostly the shallower edges and inner channels, freeze during long cold spells in Chillai Kalan. A complete freeze strong enough to walk on is rare and has happened only in exceptional winters. Do not walk on the ice.",
          "Shikara rides usually continue in January on calm days, with blankets and a kangri in the boat. If the edges are frozen, boatmen launch from open water near the ghats.",
        ],
      },
      {
        h: "Skiing and snow activities in January",
        list: [
          "Gulmarg is India's best-known ski resort. In January the snow is deep and the lower slopes near Kongdori are good for beginners.",
          "Beginner lessons and equipment hire are easy to arrange in Gulmarg. Use instructors registered with the local ski associations or J&K Tourism, and agree the rate and duration first.",
          "The Indian Institute of Skiing and Mountaineering (IISM) in Gulmarg runs structured ski courses through the winter. Apply early, because seats fill up.",
          "Experienced skiers ride the Gondola to Apharwat for off-piste runs, but only with a qualified local guide and after checking the avalanche advisory.",
          "Sledges, snow scooters and ATV rides run in Gulmarg, Sonamarg and Pahalgam. Prices are set locally, so confirm them before you start.",
        ],
      },
      {
        h: "Road and flight disruptions in January",
        p: [
          "January brings more disruption than any other month. Plan for it rather than hoping it will not happen.",
        ],
        list: [
          "Jammu to Srinagar highway (NH 44): closes for a day or more after heavy snow or landslides near Banihal and Ramban. The Katra to Srinagar Vande Bharat train is the usual fallback and is built for sub-zero running.",
          "Srinagar airport: flights run through winter but can be delayed or cancelled by snow or low visibility.",
          "Tangmarg to Gulmarg: chains are compulsory after fresh snow, and drivers fit them at Tangmarg.",
          "Zojila and Mughal Road: closed for the season, so you cannot drive from Kashmir to Ladakh or to Poonch in January.",
          "Keep one buffer day at the end of the trip and avoid non-refundable onward bookings on your departure day.",
        ],
      },
      {
        h: "6-day Kashmir itinerary for January",
        days: [
          "Arrive in Srinagar and settle into a heated room. Short shikara ride if the lake is calm, then an early night.",
          "Srinagar in snow: Shankaracharya Temple, Nishat and Shalimar gardens, Hazratbal, and a harissa breakfast in the old city.",
          "Drive to Gulmarg (chains at Tangmarg). Gondola Phase 1, snow play, beginner ski lesson. Overnight in Gulmarg.",
          "Gulmarg morning for Phase 2 or a half-day ski lesson, then back to Srinagar.",
          "Day trip to Pahalgam for Betaab Valley in snow, or to Sonamarg through the Z-Morh tunnel. Decide the evening before based on road status.",
          "Buffer and shopping day: pashmina, papier mache, dry fruits and saffron, then fly out. Use this day for any sightseeing missed due to snow.",
        ],
      },
      {
        h: "Heating: the single most important thing to check",
        p: [
          "In January, a cold room ruins a trip faster than anything else. Power cuts still happen in the valley in winter, so ask every hotel what heating it actually uses and what happens when the power goes.",
        ],
        list: [
          "Best: central heating or underfloor heating backed by a generator.",
          "Good: wall-mounted oil or gas heaters, or a bukhari (wood stove) in the room.",
          "Ask: whether there is a generator, whether hot water runs all day, and whether the electric blanket is included or extra.",
          "Houseboats: choose a deluxe category boat with heating and insulated walls in January, and check that the bathroom is heated too.",
        ],
      },
      {
        h: "Is January right for you?",
        list: [
          "Great for: snow lovers, skiers, honeymooners who want a white Kashmir, and photographers.",
          "Fine with care: families with children over about five who are used to cold, with heated rooms and short days.",
          "Not ideal for: elderly travellers with heart or lung problems, infants, and anyone on a tight schedule with no buffer.",
          "If January feels too harsh, February has nearly the same snow with slightly longer, milder days.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is January the best month for snow in Kashmir?",
        a: "January and February are the most reliable months. January is colder and has a higher chance of snow in Srinagar itself, and Gulmarg's snow cover is deep for the whole month.",
      },
      {
        q: "How cold is Srinagar in January?",
        a: "Days are typically 4 to 7°C and nights minus 2 to minus 6°C, colder during a hard spell in Chillai Kalan. Gulmarg is much colder, with nights often below minus 8°C.",
      },
      {
        q: "Is it safe to travel to Kashmir in January?",
        a: "The main risks are weather related: road closures, flight delays and icy surfaces. With heated rooms, a local driver experienced in snow, chains on the car and a buffer day, January trips are routine.",
      },
      {
        q: "Can I ski in Gulmarg in January?",
        a: "Yes. January has deep snow and the full range of beginner lessons and equipment hire. The IISM in Gulmarg runs longer courses if you want structured training.",
      },
      {
        q: "Will the Jammu Srinagar highway be open in January?",
        a: "On most days, but it closes after heavy snow or landslides near Banihal. If you are travelling overland, keep the Katra to Srinagar Vande Bharat train as a backup.",
      },
      {
        q: "Does Dal Lake freeze in January?",
        a: "The edges and shallow channels can freeze in long cold spells, but a full freeze is rare. Shikara rides normally continue on calm days.",
      },
      {
        q: "What should I wear in Kashmir in January?",
        a: "Thermal inners, a woollen sweater, a down jacket rated for minus 10°C or lower, waterproof insulated boots, gloves, cap and woollen socks. Buy or hire a pheran locally for evenings.",
      },
      {
        q: "Is January cheaper than December in Kashmir?",
        a: "After the New Year week ends, around 3 January, room rates usually fall clearly below late December levels and stay lower until the February ski peak.",
      },
    ],
  },
  {
    slug: "kashmir-in-february",
    title: "Kashmir in February: Deep Snow, Ski Season and a Calmer Winter Trip",
    description:
      "Kashmir in February: Gulmarg ski peak, snow in Sonamarg and Pahalgam, weather by town, Valentine's honeymoons, road tips and a 5-day February itinerary.",
    category: "Itineraries",
    destination: "kashmir",
    date: "2026-11-03",
    intro:
      "February is the best winter month for most travellers to Kashmir. Snow is still deep in Gulmarg, Sonamarg and the upper reaches of Pahalgam, but the brutal Chillai Kalan cold ends on 31 January, days get longer and the sun has more warmth in it. This is Gulmarg's peak ski month, and the valley is busy with skiers and honeymooners around Valentine's Day, yet it is calmer than the Christmas to New Year rush. Srinagar warms slowly through the month, so late February can bring rain in the city while the hill resorts get fresh snow. If you want a white Kashmir without the hardest cold, February is the month to pick.",
    sections: [
      {
        h: "Kashmir weather in February",
        p: [
          "February sits in Chillai Khurd (the small cold, about 31 January to 19 February) and then Chillai Bachha (the baby cold, about 20 February to 1 March). Snowfall spells continue, but cold waves are shorter and less severe than in January.",
        ],
        list: [
          "Srinagar: days typically 8 to 11°C, nights around minus 1 to plus 1°C. Late February can be wet, with rain in the city.",
          "Gulmarg: days around 0 to 4°C, nights minus 6 to minus 10°C, with the season's deepest snow base in many years.",
          "Pahalgam: days around 4 to 7°C, nights minus 4 to minus 6°C; snow in the forests and at Betaab Valley.",
          "Sonamarg: cold with deep snow; the road through the Z-Morh tunnel is open on most days.",
        ],
      },
      {
        h: "Snow in February: is it guaranteed?",
        p: [
          "In Gulmarg, as close to guaranteed as anything in mountain weather gets. February usually has the deepest snow base of the season, which is why skiers favour it. Sonamarg also holds snow throughout the month.",
          "Srinagar gets occasional snow in early February, but by the second half rain is more likely than snow in the city. If you want snowy streets in Srinagar, January is the better bet; if you want snow sports and snowy meadows with milder days, February wins.",
        ],
      },
      {
        h: "February is Gulmarg's ski month",
        list: [
          "The snow base is deep and stable, and days are long enough for full ski days.",
          "National winter sports events have been held in Gulmarg in February and March in recent years. Check the dates for your year, because they fill hotels quickly.",
          "Beginners: lessons on the lower slopes near the Gulmarg bowl and Kongdori. Two or three sessions are enough to start linking turns.",
          "Intermediate and advanced: Gondola Phase 2 to Apharwat for long runs and off-piste, with a certified guide and the avalanche advisory checked.",
          "Hire skis, boots and snow clothing in Gulmarg rather than carrying them, and check bindings and boot fit before you pay.",
        ],
      },
      {
        h: "Valentine's Day and February honeymoons",
        p: [
          "February is one of Kashmir's most popular honeymoon months. Couples get snow, cosy heated rooms and quieter roads than in December. Rooms around 14 February sell faster, especially Gulmarg hotels with a valley view and deluxe houseboats on Nigeen and Dal.",
          "For a honeymoon, the most rewarding split is two nights in Srinagar (one on a heated houseboat), two nights in Gulmarg and one in Pahalgam. That way you wake up in the snow twice instead of only seeing it on day trips.",
        ],
      },
      {
        h: "What is open in February",
        list: [
          "Srinagar: all main sights, shikara rides, old city walks and markets. Mughal gardens are open but bare until blossom season.",
          "Gulmarg: the Gondola (Phase 2 weather permitting), ski slopes, sledge and snow scooter rides, St Mary's Church and the Maharani temple.",
          "Pahalgam: the town, the Lidder riverside and Betaab Valley. Aru and Chandanwari depend on road clearance after snow. Baisaran meadow has been closed to visitors since April 2025.",
          "Sonamarg: reachable on most days through the tunnel. Thajiwas glacier is a snow walk or sledge ride from the town.",
          "Closed for the season: Zojila (to Ladakh) and Mughal Road.",
        ],
      },
      {
        h: "5-day Kashmir itinerary for February",
        days: [
          "Arrive in Srinagar. Afternoon shikara ride and an evening on a heated houseboat.",
          "Drive to Gulmarg. Gondola Phase 1, snow play, first ski lesson. Overnight in Gulmarg.",
          "Full morning in Gulmarg: second ski lesson or Phase 2 to Apharwat, then drive to Srinagar or straight to Pahalgam (about 140 km via Srinagar).",
          "Pahalgam: Betaab Valley in snow, a walk along the Lidder, and Aru if the road is cleared. Overnight in Pahalgam or return to Srinagar.",
          "Back to Srinagar via the saffron fields of Pampore and the Awantipora ruins, then fly out.",
        ],
      },
      {
        h: "Practical tips for a February trip",
        list: [
          "Book Gulmarg hotels and Gondola slots early for weekends and the week around 14 February.",
          "Pack for snow in Gulmarg and rain in Srinagar: a waterproof outer layer is as useful as a down jacket in late February.",
          "Chains are still needed from Tangmarg to Gulmarg after fresh snow.",
          "Keep a buffer day: February snowfalls can still close the Jammu Srinagar highway or delay flights.",
          "Start Pahalgam and Sonamarg day trips early, because the light goes by about 5.30 pm and roads ice up after dark.",
        ],
      },
      {
        h: "February vs January vs March",
        list: [
          "January: the coldest month, the best odds of snow in Srinagar city, the lowest prices after New Year.",
          "February: deep snow in the resorts, milder days, peak skiing, busy around Valentine's Day.",
          "March: snow lingers in Gulmarg and Sonamarg, Srinagar warms up, almond blossom starts, and the Tulip Garden usually opens in the second half of the month.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is February a good time to visit Kashmir?",
        a: "Yes. February has deep snow in Gulmarg, Sonamarg and upper Pahalgam, milder days than January and the best skiing of the season. It is one of the most balanced winter months.",
      },
      {
        q: "Will I see snow in Kashmir in February?",
        a: "In Gulmarg and Sonamarg, almost certainly. Srinagar may get occasional snow early in the month, but rain is more likely in the city in late February.",
      },
      {
        q: "How cold is Kashmir in February?",
        a: "Srinagar days are typically 8 to 11°C with nights around freezing. Gulmarg days stay around 0 to 4°C with nights of minus 6 to minus 10°C.",
      },
      {
        q: "Is February good for a Kashmir honeymoon?",
        a: "It is one of the most popular honeymoon months, with snow, heated rooms and quieter roads than December. Book early for the days around Valentine's Day.",
      },
      {
        q: "Is skiing good in Gulmarg in February?",
        a: "February is the peak ski month, with the deepest snow base of the season in most years and longer days than January.",
      },
      {
        q: "Can I visit Sonamarg in February?",
        a: "Usually yes, through the Z-Morh tunnel. Heavy snow can close the road for a day or two, so keep Sonamarg as a flexible day in your plan.",
      },
      {
        q: "Is Kashmir crowded in February?",
        a: "Gulmarg is busy with skiers, and the week around 14 February is popular with couples, but overall February is far calmer than the Christmas to New Year week.",
      },
    ],
  },
];
