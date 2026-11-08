// Kashmir keyword pass (2026-11-07): copy for the Kashmir guide and package
// pages that answers the searches in docs/keyword-research/keyword-map.csv
// (tripmore.in and ajaymodi.com exports). Merged additively (src/lib/content-merge.ts)
// in code and in the live database (scripts/push-kashmir-keywords.ts).
//
// Facts checked 2026-11-07:
// - Road distances from OpenStreetMap routing (OSRM): Srinagar to Gulmarg 51 km,
//   Pahalgam 98 km, Sonamarg 79 km, Yusmarg 50 km, Doodhpathri 41 km, Gurez (Dawar)
//   141 km, Leh 417 km; Jammu to Srinagar 237 km; Katra to Srinagar 215 km;
//   Gulmarg to Sonamarg 120 km; Pahalgam to Gulmarg 147 km. Drive times are
//   real-world estimates, longer than the router's.
// - No direct Delhi to Srinagar train as of November 2026: change at Katra.
//   Katra to Srinagar Vande Bharat since 7 June 2025, about 3 hours, stops at Banihal.
// - Gulmarg Gondola tickets are sold online through the J&K Cable Car
//   Corporation; on-the-spot sales were stopped in 2025; a next-day Tatkal quota
//   is released online. Phase 1 to Kongdori (about 3,050 m), Phase 2 to
//   Apharwat (about 3,980 m).
// - Prepaid SIMs from outside J&K do not work in J&K; postpaid does; local
//   prepaid SIMs can be bought with ID.
// - The Khyber Himalayan Resort and Spa is in Gulmarg (85 rooms, opened 2012,
//   a short walk from the Gondola). There is no Khyber property in Pahalgam.
// Site rules: no fares, ticket prices or timetables typed in (they change),
// no em dashes, brand name as author.

import type { GuideContent } from "@/lib/locations";

const C = (s: string) => s; // marks copy; keeps lines short

export const KASHMIR_KW_DESTINATION: Record<string, Partial<GuideContent>> = {
  kashmir: {
    monthsWhere: "Kashmir",
    months: [
      {
        month: "January",
        tempC: "Srinagar day 4 to 8°C, night minus 2 to minus 6°C; Gulmarg below freezing all day",
        weather: C("The heart of Chillai Kalan, the coldest 40 days. Gulmarg, Pahalgam and Sonamarg are deep in snow and Srinagar gets snowfall on some days. Skies are often clear and crisp between snow spells."),
        goodFor: C("Snow trips, skiing in Gulmarg, heated houseboat nights. Keep a buffer day for flight or road delays."),
      },
      {
        month: "February",
        tempC: "Srinagar day 6 to 10°C, night minus 2 to 1°C; Gulmarg minus 8 to 2°C",
        weather: C("Still full winter in the hills, with the best snow cover of the season in Gulmarg. Days in Srinagar slowly warm up towards the end of the month."),
        goodFor: C("Skiing and snow play with fewer crowds than December and January."),
      },
      {
        month: "March",
        tempC: "Srinagar day 12 to 16°C, night 2 to 5°C",
        weather: C("Spring arrives in Srinagar: almond blossom at Badamwari in the first half of the month, rain showers and cool evenings. Gulmarg and Sonamarg keep their snow, and fresh snowfall is still possible in the hills."),
        goodFor: C("Snow in Gulmarg plus blossom in Srinagar on the same trip; the Tulip Garden usually opens in the last week of March."),
      },
      {
        month: "April",
        tempC: "Srinagar day 17 to 21°C, night 6 to 9°C",
        weather: C("Mild, fresh and green. Tulips peak in the first half of April, the Mughal gardens fill with flowers, and snow stays on the high slopes above Gulmarg and around Sonamarg."),
        goodFor: C("Tulip season, honeymoons and families. One of the most photographed months of the year."),
      },
      {
        month: "May",
        tempC: "Srinagar day 22 to 26°C, night 10 to 13°C",
        weather: C("Warm, sunny days and cool nights. Meadows turn green, Gondola Phase 2 still has snow at Apharwat, and the Thajiwas glacier in Sonamarg has snow to walk on."),
        goodFor: C("Classic sightseeing across Srinagar, Gulmarg, Pahalgam and Sonamarg. Book early: school holidays make it busy."),
      },
      {
        month: "June",
        tempC: "Srinagar day 26 to 30°C, night 14 to 17°C; Gulmarg and Pahalgam day 18 to 24°C",
        weather: C("Peak summer season. Lowlands are warm, the hill resorts are pleasant, and snow is left only at high points such as Apharwat, Thajiwas and Zojila."),
        goodFor: C("Escaping the plains heat, family trips, river rafting in Pahalgam and Sonamarg."),
      },
      {
        month: "July",
        tempC: "Srinagar day 28 to 32°C, night 17 to 19°C",
        weather: C("The warmest month, with occasional rain. The Amarnath Yatra runs from Pahalgam and Baltal, so roads and hotels near the base camps are busy and security is heavy."),
        goodFor: C("Green meadows, treks and lakes. Plan Pahalgam and Sonamarg around yatra convoy timings."),
      },
      {
        month: "August",
        tempC: "Srinagar day 27 to 31°C, night 16 to 18°C",
        weather: C("Warm with some rain spells. Apples start to ripen in the orchards later in the month and the high meadows are at their greenest."),
        goodFor: C("Treks such as the Kashmir Great Lakes, and quieter hotels once the yatra ends."),
      },
      {
        month: "September",
        tempC: "Srinagar day 24 to 28°C, night 10 to 13°C",
        weather: C("Clear skies, settled weather and the apple harvest in full swing. One of the best months for views and photography."),
        goodFor: C("Sightseeing with fewer crowds, road trips to Gurez and over Zojila to Ladakh."),
      },
      {
        month: "October",
        tempC: "Srinagar day 17 to 23°C, night 3 to 7°C",
        weather: C("Autumn: chinar leaves turn red and gold from the middle of the month, saffron flowers bloom in Pampore at the end of October, and mornings are cold. The first snow can dust the high peaks late in the month."),
        goodFor: C("Autumn colours, photography and couples. Pack warm layers for the evenings."),
      },
      {
        month: "November",
        tempC: "Srinagar day 10 to 15°C, night minus 2 to 2°C",
        weather: C("Late autumn turning to winter. Chinars drop their leaves, mornings are foggy and frosty, and first snowfall usually reaches Gulmarg and Sonamarg during the month."),
        goodFor: C("Quiet, good-value trips and the first snow in the hills."),
      },
      {
        month: "December",
        tempC: "Srinagar day 5 to 9°C, night minus 3 to minus 5°C",
        weather: C("Winter sets in. Snowfall becomes regular in Gulmarg, Pahalgam and Sonamarg, and Chillai Kalan begins on 21 December. Christmas and New Year are the busiest weeks of winter."),
        goodFor: C("White Christmas and New Year trips, snow honeymoons and the start of the ski season."),
      },
    ],
    sections: {
      "best-time-to-visit": {
        intro: C("The best time to visit Kashmir depends on what you want to see. April to June is the most popular season, with tulips, green meadows and pleasant weather. September to November brings clear skies and autumn colours. December to February is for snow, when Gulmarg becomes a ski resort. July and August are warm and green, with some rain and the Amarnath Yatra.\n\nThe month-by-month guide below gives the weather and temperature in Srinagar, what is open in Gulmarg, Pahalgam and Sonamarg, and who each month suits. It covers both Jammu and Kashmir: Jammu and Katra are much warmer than the Kashmir valley, hot from April to June and mild in winter."),
        blocks: [
          {
            heading: "Kashmir seasons at a glance",
            items: [
              "Spring (March to April): blossom, tulips, cool nights. Snow stays in Gulmarg.",
              "Summer (May to August): the main tourist season; warm in Srinagar, pleasant in the hills.",
              "Autumn (September to November): clear weather, red chinars, saffron and apple harvests.",
              "Winter (December to February): snow, skiing and Chillai Kalan, the coldest 40 days.",
            ],
          },
          {
            heading: "Places to visit in Kashmir by month",
            items: [
              "December and January: Gulmarg for snow and the Gondola, a heated houseboat night in Srinagar, Pahalgam under snow.",
              "March and April: the Tulip Garden and Badamwari almond garden in Srinagar, Gulmarg for spring snow, Doodhpathri as meadows turn green.",
              "May and June: all four classic places (Srinagar, Gulmarg, Pahalgam, Sonamarg), plus Aru Valley and the Thajiwas glacier.",
              "July and August: Sonamarg, Yusmarg and Doodhpathri meadows; treks; Gurez once the road is open.",
              "October and November: Srinagar's chinar gardens, Pampore saffron fields, Pahalgam autumn forests.",
            ],
          },
          {
            heading: "Kashmir flower season",
            body: C("Kashmir's flower season starts with almond blossom at Badamwari in early to mid March, followed by tulips at the Indira Gandhi Memorial Tulip Garden from the last week of March to about the third week of April. The Mughal gardens are in full bloom in April and May, wildflowers cover the high meadows of Gulmarg, Sonamarg and Pahalgam in June and July, and purple saffron flowers bloom in Pampore from late October into early November."),
          },
          {
            heading: "Kashmir winter season: what to expect",
            body: C("Winter in Kashmir runs from December to February, with snow from late November into March in Gulmarg. Srinagar nights fall below freezing, especially during Chillai Kalan (21 December to the end of January), and the Jammu to Srinagar highway and Srinagar flights can be delayed after heavy snow. Choose heated hotels or higher-category houseboats with heaters, and keep a buffer day in your plan."),
          },
        ],
        faqs: [
          { q: "What is the best time to visit Kashmir?", a: C("April to June for tulips, green meadows and pleasant weather; September to November for clear skies and autumn colours; December to February for snow. For a first trip covering Srinagar, Gulmarg, Pahalgam and Sonamarg, April to June and September to October are the easiest months.") },
          { q: "Which is the best season and month to visit Jammu and Kashmir?", a: C("For the Kashmir valley, May is the best single month for sightseeing, April for tulips and January for snow. Jammu and Katra are best from October to March, when the plains are cool; they are hot from April to June. A Vaishno Devi and Kashmir trip works well in March to May or September to November.") },
          { q: "What is the best time to go to Kashmir for a tour with snow?", a: C("Late December to February has the most reliable snow in Gulmarg, Pahalgam and Sonamarg. In March you still find snow in Gulmarg, and from April to June snow is left only at high points such as Gondola Phase 2 and the Thajiwas glacier.") },
          { q: "What is the climate of Kashmir in April and July?", a: C("April is mild: Srinagar days around 17 to 21°C and cool nights near 6 to 9°C, with spring showers. July is the warmest month: Srinagar days around 28 to 32°C, with cooler air in Gulmarg and Pahalgam and some rain.") },
          { q: "Is April a good time to visit Kashmir for photos?", a: C("Yes. April is tulip month, the gardens are in bloom, and snow is still visible on the slopes above Gulmarg. It is one of the best months for photos. Carry a jacket for the evenings.") },
          { q: "Is it good to travel to Kashmir in July?", a: C("Yes, if you want green meadows and treks. It is warm in Srinagar, some days are rainy, and the Amarnath Yatra makes Pahalgam and Sonamarg busier, so plan with an agent who knows the convoy timings.") },
          { q: "What is Kashmir like in October, and at the end of October?", a: C("October is crisp and clear. Chinar trees turn red and gold from mid-month and by the end of October the saffron fields of Pampore bloom. Days are around 17 to 23°C and nights drop to 3 to 7°C, colder in Gulmarg.") },
          { q: "What is the weather in Kashmir in November?", a: C("Cold and dry, turning wintry. Srinagar days are around 10 to 15°C with frosty mornings, and the first snow usually reaches Gulmarg and Sonamarg during November.") },
          { q: "Is visiting Kashmir in January a good idea?", a: C("Yes, for snow. January is the coldest month and the best for a snow trip and skiing in Gulmarg. Choose heated rooms, pack thermals and keep a spare day for weather delays.") },
          { q: "What is the temperature in Kashmir in March and February?", a: C("In February Srinagar is around 6 to 10°C by day and near freezing at night. In March days rise to about 12 to 16°C and nights to 2 to 5°C. Gulmarg is several degrees colder in both months and keeps its snow.") },
          { q: "What is Kashmir tourism like in April and May?", a: C("It is the busiest spring season: tulips and gardens in Srinagar, snow on the high slopes, and all main sightseeing roads open. Hotels and Gondola tickets fill early, so book ahead.") },
        ],
      },
      "places-to-visit": {
        intro: C("The best places to visit in Kashmir are Srinagar (Dal Lake, the Mughal gardens and the old city), Gulmarg (the Gondola and snow), Pahalgam (Betaab and Aru valleys on the Lidder river) and Sonamarg (the Thajiwas glacier). Add Doodhpathri, Yusmarg and Gurez for quieter valleys, and Katra for Vaishno Devi.\n\nKashmir is famous for its lakes, meadows, snow and gardens, its houseboats and shikaras, and crafts such as pashmina and papier-mache. The list below groups the main tourist places and sightseeing spots by town, with the distance from Srinagar, so you can see what fits into your trip."),
        blocks: [
          {
            heading: "Top 10 tourist places in Kashmir",
            items: [
              "Dal Lake, Srinagar: shikara rides, houseboats and the floating vegetable market.",
              "Mughal gardens, Srinagar: Nishat Bagh, Shalimar Bagh and Chashme Shahi.",
              "Indira Gandhi Memorial Tulip Garden, Srinagar: open from late March to April.",
              "Gulmarg Gondola: Phase 1 to Kongdori and Phase 2 to Apharwat, about 51 km from Srinagar.",
              "Betaab Valley and Aru Valley, Pahalgam: about 98 km from Srinagar.",
              "Thajiwas glacier, Sonamarg: about 79 km from Srinagar.",
              "Doodhpathri: a wide meadow about 41 km from Srinagar.",
              "Yusmarg: pine-ringed meadows about 50 km from Srinagar.",
              "Gurez Valley: on the Kishanganga, about 141 km from Srinagar over Razdan Pass.",
              "Shankaracharya Temple and Hazratbal Shrine, Srinagar: the city's best-known places of worship.",
            ],
          },
          {
            heading: "Bangus Valley, Kupwara",
            body: C("Bangus Valley is a wide high meadow in Kupwara district in north Kashmir, ringed by forested hills. It is roughly 120 km from Srinagar, about 4 to 5 hours by road via Kupwara town (Kupwara itself is about 89 km from Srinagar). Facilities are basic and the road is usually open from late spring to autumn, so most visitors go with a local agent and stay in Kupwara or on simple campsites. It suits travellers who want an untouched meadow rather than a resort."),
          },
          {
            heading: "Best view points in Kashmir",
            items: [
              "Shankaracharya hill, Srinagar: the whole of Dal Lake and the city from above.",
              "Pari Mahal, Srinagar: terraced garden with sunset views over Dal Lake.",
              "Apharwat ridge, Gulmarg (Gondola Phase 2): snow peaks and, on clear days, Nanga Parbat.",
              "Kongdori, Gulmarg (Gondola Phase 1): the meadow and pine forest below.",
              "Betaab Valley, Pahalgam: the Lidder river framed by pine slopes.",
              "Thajiwas, Sonamarg: glacier views from the meadow.",
            ],
          },
        ],
        faqs: [
          { q: "What are the best tourist places and sightseeing spots in Kashmir?", a: C("Dal Lake and the Mughal gardens in Srinagar, the Gulmarg Gondola, Betaab and Aru valleys in Pahalgam, and the Thajiwas glacier in Sonamarg are the essentials. Doodhpathri, Yusmarg and Gurez are the best quieter places.") },
          { q: "What is Kashmir famous for?", a: C("Its lakes and houseboats, snow and skiing in Gulmarg, Mughal gardens and tulips, meadows such as Pahalgam and Sonamarg, and crafts such as pashmina shawls, carpets and papier-mache. Saffron, apples, walnuts and Kashmiri food, especially Wazwan, are famous too.") },
          { q: "What is there to see in Kashmir? A list of the places that must be seen on a first tour", a: C("Srinagar (Dal Lake, a shikara ride and the Mughal gardens), Gulmarg (the Gondola), Pahalgam (Betaab and Aru valleys) and Sonamarg (Thajiwas glacier). Five to six days covers all four comfortably.") },
          { q: "What are the names of the main places in Kashmir?", a: C("Srinagar, Gulmarg, Pahalgam and Sonamarg are the main tourist places. Others include Doodhpathri, Yusmarg, Gurez, Kokernag, Daksum, Aharbal, Bangus and Lolab, plus Jammu, Katra and Patnitop in the Jammu region.") },
          { q: "Why is Kashmir called the most beautiful place in India?", a: C("Few places in India combine a lake city, Mughal gardens, alpine meadows, glaciers and snow peaks within a few hours of each other. The Mughal emperor Jahangir is said to have called it paradise on earth, and the name stuck.") },
          { q: "Which tourist places are near Kashmir?", a: C("Ladakh (Leh via Sonamarg and Zojila, about 417 km from Srinagar), Vaishno Devi at Katra, Patnitop and Jammu are the usual add-ons. Many trips combine Kashmir with Ladakh or with Vaishno Devi.") },
          { q: "What is the distance of Bangus Valley from Srinagar?", a: C("Roughly 120 km, about 4 to 5 hours by road via Kupwara. Go with a local agent, as the last stretch is remote and facilities are limited.") },
          { q: "Which are the top 5 places to visit in Kashmir for a short trip?", a: C("Dal Lake, the Mughal gardens, Gulmarg, Pahalgam and Sonamarg. With only three or four days, base in Srinagar and do Gulmarg and Sonamarg as day trips.") },
          { q: "Which Kashmir tourism destinations and points of interest suit families?", a: C("Dal Lake and the gardens in Srinagar, Gulmarg's Gondola Phase 1, Betaab Valley in Pahalgam and the Sonamarg meadow are all easy with children and older parents. Keep long walks and Phase 2 optional.") },
        ],
      },
      "things-to-do": {
        intro: C("The best things to do in Kashmir are a shikara ride on Dal Lake, the Gulmarg Gondola, skiing or snow play in winter, pony rides and walks in the meadows of Gulmarg, Pahalgam and Sonamarg, river rafting on the Lidder and Sindh, and paragliding in season. Add a Wazwan meal, the floating market at dawn and shopping for pashmina and dry fruit in Srinagar.\n\nMost activities are run by registered operators and union associations with displayed rate cards, and prices are set locally for each season, so agree the price and duration before you start."),
        blocks: [
          {
            heading: "Activities in Kashmir by place",
            items: [
              "Srinagar: shikara rides, the floating market, Mughal gardens, old city walks, paragliding at Astanmarg above Dal Lake in season.",
              "Gulmarg: Gondola rides, skiing and snowboarding in winter, sledges, ATV and snow-scooter rides, pony rides, golf in summer.",
              "Pahalgam: river rafting on the Lidder, pony rides, walks in Betaab and Aru valleys, trout fishing with a permit.",
              "Sonamarg: pony rides or a walk to the Thajiwas glacier, rafting on the Sindh, sledging on summer snow patches.",
              "Doodhpathri and Yusmarg: picnics, short walks and pony rides in the meadows.",
            ],
          },
          {
            heading: "Paragliding in Kashmir",
            body: C("Tandem paragliding runs in season at sites near Srinagar (Astanmarg, above Dal Lake), in Gulmarg and in Sonamarg, with registered operators and trained pilots. Flights depend on wind and weather and usually last a few minutes. The cost of paragliding is set by each operator for the season; ask for the current rate and check that the operator is registered with J&K Tourism."),
          },
          {
            heading: "River rafting in Kashmir",
            body: C("Rafting runs on the Lidder in Pahalgam and on the Sindh near Sonamarg, mostly from May to August when the rivers are full. Stretches are short and graded easy to moderate, so first-timers can join. Life jackets and helmets are provided by the operators."),
          },
          {
            heading: "Horse riding and pony rides",
            body: C("Pony and horse rides are the usual way to reach the higher points of Gulmarg, Pahalgam and Sonamarg. Ponywallas belong to local associations with official rate cards for each route. Agree the route, the stops and the price before you set off, and note that Baisaran meadow above Pahalgam has been closed to visitors since April 2025."),
          },
          {
            heading: "Hot air balloon and photoshoot",
            body: C("Kashmir has no regular hot air balloon service; tethered balloon rides have been offered only at times, during tourism events. A popular alternative is a photoshoot in traditional Kashmiri dress (pheran and jewellery) on a shikara or in the Mughal gardens, offered by photographers at Dal Lake."),
          },
        ],
        faqs: [
          { q: "What are the best activities in Kashmir?", a: C("A shikara ride on Dal Lake, the Gulmarg Gondola, skiing in winter, rafting in Pahalgam or Sonamarg, pony rides in the meadows and paragliding in season.") },
          { q: "What are the activities in Gulmarg?", a: C("The Gondola, skiing and snowboarding from December to March, sledges and snow scooters, ATV rides on the meadow, pony rides to Khilanmarg and the viewpoints, and golf in summer.") },
          { q: "What are the activities in Pahalgam?", a: C("River rafting on the Lidder, pony rides, walks in Betaab and Aru valleys, and visits to Chandanwari. Local sightseeing is done in Pahalgam union taxis.") },
          { q: "Is paragliding available in Srinagar and Kashmir, and what does it cost?", a: C("Yes, in season, at Astanmarg above Dal Lake and in Gulmarg and Sonamarg. Flights depend on weather. The cost of paragliding in Srinagar is set by the operators each season.") },
          { q: "Is there a hot air balloon ride in Kashmir or Srinagar?", a: C("Not as a regular service. Tethered balloon rides have been run occasionally at tourism events in Srinagar and the resorts; ask your agent whether one is running during your dates.") },
          { q: "Where can I do horse riding in Kashmir?", a: C("In Gulmarg, Pahalgam and Sonamarg, with ponies from the local associations at official rates. Agree the route and price first.") },
          { q: "Where can I do a photoshoot in Kashmir?", a: C("On a shikara on Dal Lake, in the Mughal gardens and the Tulip Garden in spring, and on the snow in Gulmarg in winter. Photographers at the Dal Lake ghats offer shoots in Kashmiri dress.") },
        ],
      },
      "travel-guide-tips": {
        intro: C("Kashmir is easy to travel once you know a few local rules: prepaid SIM cards from other states do not work here, local union taxis run the sightseeing in Pahalgam and Sonamarg, hotels quote breakfast and dinner, and weather can change plans in winter. These tips cover mobile networks, money, permits, clothing and how to plan the trip step by step."),
        blocks: [
          {
            heading: "Mobile network and SIM cards in Jammu and Kashmir",
            items: [
              "Prepaid SIM cards from outside J&K do not work in Jammu and Kashmir, for any operator, including Jio, Airtel and Vi.",
              "Postpaid connections from anywhere in India work in Jammu, Katra, Srinagar and the resorts.",
              "You can buy a local J&K prepaid SIM with ID proof and a local reference; your hotel or agent can help.",
              "Jio, Airtel and BSNL have the widest coverage. Signal is weak or absent in Gurez, Daksum, Sinthan Top and parts of Aru and Thajiwas.",
            ],
          },
          {
            heading: "Kashmir trip planner: step by step",
            items: [
              "Pick the season: tulips (April), summer (May to June), autumn (October) or snow (December to February).",
              "Choose the length: 4 nights for Srinagar, Gulmarg and Pahalgam; 5 to 6 nights to add Sonamarg and a houseboat night.",
              "Decide how to arrive: fly to Srinagar, or take the train to Katra and the Vande Bharat to Srinagar.",
              "Book Gondola tickets online as soon as your dates are fixed; they sell out in peak season.",
              "Ask agents for quotes with the same hotel category and meal plan so you can compare them fairly.",
            ],
          },
          {
            heading: "Kashmir travel brochure: what to keep with you",
            body: C("J&K Tourism publishes brochures and maps for Srinagar, Gulmarg, Pahalgam and Sonamarg at its tourist reception centres in Srinagar and Jammu. Most travellers now keep a digital copy of their itinerary, hotel vouchers, Gondola tickets and ID on their phone, and carry printed copies as a back-up because mobile data can drop in the hills."),
          },
        ],
        faqs: [
          { q: "Does a prepaid SIM work in Jammu, Katra and Srinagar?", a: C("No. Prepaid SIMs issued outside Jammu and Kashmir do not work anywhere in J&K, including Jammu, Katra and Srinagar. Carry a postpaid SIM or buy a local prepaid SIM with ID after you arrive.") },
          { q: "Does a Jio prepaid SIM work in Jammu and Kashmir?", a: C("Not if it was issued outside J&K. A Jio postpaid connection works, and a Jio prepaid SIM bought in J&K works.") },
          { q: "Which mobile network works best in Jammu and Kashmir?", a: C("Jio, Airtel and BSNL have the widest coverage in the main towns and on the highways. All networks are weak in remote valleys such as Gurez and Daksum.") },
          { q: "Is there a Kashmir trip planner or travel brochure I can use?", a: C("Use the step-by-step planner above, then share your dates on Tavel Package to get day-by-day plans from up to 3 verified agents. J&K Tourism also hands out free brochures and maps at its reception centres.") },
          { q: "Do I need a permit to visit Kashmir?", a: C("Indian travellers need no permit for Srinagar, Gulmarg, Pahalgam or Sonamarg. Gurez and some border areas need a permit, which agents arrange. Foreign nationals register at their hotel through the Form C process.") },
        ],
      },
      "culture-and-heritage": {
        blocks: [
          {
            heading: "What to buy in Kashmir: famous products, shopping and special items",
            items: [
              "Pashmina shawls: look for the GI (Geographical Indication) label, which certifies hand-spun, hand-woven Kashmir pashmina.",
              "Kani shawls and Sozni embroidered shawls, also GI-tagged crafts.",
              "Hand-knotted Kashmiri carpets in wool and silk.",
              "Papier-mache boxes and ornaments, and walnut wood carving (both GI-tagged).",
              "Kashmiri saffron (kesar) from Pampore, GI-tagged since 2020.",
              "Dry fruit: walnuts, almonds and dried apricots; kahwa tea blends.",
              "Pherans, copperware (samovars) and willow wicker baskets.",
            ],
          },
          {
            heading: "Kashmiri saffron (kesar or kesari): the plant and the harvest",
            body: C("Kashmiri saffron, kesar in Hindi, comes from the purple flowers of the saffron crocus grown on the karewa plateaus around Pampore, about 15 km from Srinagar. The plants flower for a few weeks from late October into early November, when families pick the flowers by hand at dawn and separate the red stigmas. Kashmir saffron received a GI tag in 2020; buy it in sealed, labelled packs from government emporiums or established shops."),
          },
          {
            heading: "Kashmiri apples and apple orchards (apple bagan)",
            body: C("Kashmir grows most of India's apples. The harvest runs from August to November, peaking in September and October, when orchards around Sopore, Shopian, Baramulla and the Srinagar to Gulmarg road are heavy with fruit. Common varieties include Delicious (red), American, Maharaji and the native Ambri, alongside newer high-density varieties such as Gala and Fuji. Many drivers stop at an apple bagan (orchard) on the way to Gulmarg or Pahalgam in season, where you can walk among the trees and buy fresh fruit."),
          },
          {
            heading: "Kashmiri handicrafts and wood work",
            body: C("Kashmir's handicrafts are some of India's finest: walnut wood carving, khatamband ceilings made of interlocking wooden panels, papier-mache painted in fine detail, hand-knotted carpets and shawls embroidered in Sozni and crewel stitch. Srinagar's old city and the government emporium on Residency Road are good places to see craftsmen at work and to buy certified pieces."),
          },
          {
            heading: "Famous movies shot in Kashmir",
            items: [
              "Kashmir Ki Kali and Jab Jab Phool Khile, the 1960s classics filmed around Dal Lake and Gulmarg.",
              "Bobby and Kabhi Kabhie in the 1970s, with scenes in Gulmarg and Pahalgam.",
              "Betaab (1983), which gave Betaab Valley near Pahalgam its name.",
              "Jab Tak Hai Jaan, Rockstar, Yeh Jawaani Hai Deewani, Haider and Bajrangi Bhaijaan in more recent years.",
            ],
          },
        ],
        faqs: [
          { q: "What are the famous things to buy in Kashmir?", a: C("Pashmina and Kani shawls, carpets, papier-mache, walnut wood carving, saffron, dry fruit and kahwa. Buy GI-labelled shawls and saffron from government emporiums or established shops.") },
          { q: "What is the speciality of Jammu and Kashmir?", a: C("Kashmir's speciality is its crafts (pashmina, carpets, papier-mache), saffron, apples and Wazwan cuisine. Jammu is known for its temples, Kalari cheese, Rajma from Bhaderwah and Basohli paintings.") },
          { q: "What are the best gift items from Kashmir?", a: C("A small pashmina stole, a papier-mache box, a pack of saffron, walnut wood coasters or a box of dry fruit and kahwa travel well and are genuinely Kashmiri.") },
          { q: "What is the pashmina shawl price in Srinagar?", a: C("Price depends on the purity of the wool, the weave and the embroidery: a plain machine-made blend costs a fraction of a hand-spun, hand-woven GI pashmina with Sozni work. Ask to see the GI label and buy from government emporiums or shops that give a written receipt.") },
          { q: "What are the arts and crafts of Jammu and Kashmir?", a: C("Pashmina, Kani and Sozni shawls, carpets, papier-mache, walnut wood carving, khatamband ceilings, copperware and willow wicker in Kashmir, and Basohli miniature painting in the Jammu region.") },
          { q: "What are the main festivals of Jammu and Kashmir?", a: C("Eid and Muharram across the valley, the Tulip Festival in April, Kheer Bhawani mela at Tulmulla in May or June, the Amarnath Yatra in July and August, and Lohri, Baisakhi and Navratri in Jammu and at Vaishno Devi.") },
          { q: "When and where does the saffron plant bloom in Kashmir?", a: C("In the Pampore fields near Srinagar, from late October into early November. The purple kesar flowers are picked by hand at dawn.") },
          { q: "Which are the main Kashmiri apple varieties?", a: C("Delicious (red), American, Maharaji and the native Ambri, plus high-density varieties such as Gala and Fuji. The best time to see the apple harvest is September and October.") },
        ],
      },
      "local-food": {
        faqs: [
          { q: "Which are the best restaurants in Kashmir for Wazwan?", a: C("Srinagar's Residency Road, the old city and the Boulevard have long-running Wazwan restaurants, and most good hotels can arrange a full Wazwan meal for a group. For vegetarian food, Srinagar has well-known vegetarian dhabas near Durganag. Ask your hotel which kitchens are open in the season you travel.") },
          { q: "What does Kashmiri food look like? Images of the main dishes", a: C("Rogan josh is a deep red mutton curry coloured with Kashmiri chilli and cockscomb flower; yakhni is a pale yoghurt curry; gushtaba and rista are smooth meatballs in white and red gravies; dum aloo comes in a red gravy; and kahwa is a golden green tea with saffron and almonds served in small cups.") },
        ],
      },
    },
    packages: {
      blocks: [
        {
          heading: "Kashmir tour operators and travel agents: how to choose",
          items: [
            "Pick a tour operator or travel agency registered with J&K Tourism, with an office in Srinagar or a named local partner.",
            "Ask for the hotel and houseboat names and categories in writing, not just 'deluxe' or 'standard'.",
            "Check what the quote leaves out: Pahalgam and Sonamarg union taxis, ponies, Gondola tickets and entry fees.",
            "Compare two or three quotes for the same dates, hotel category and meal plan before you pay an advance.",
            "On Tavel Package, up to 3 verified agents who operate in Kashmir send customised itineraries and prices, so you can compare the best operators without calling around.",
          ],
        },
      ],
      itineraries: [
        { title: "8-day Kashmir itinerary (7 nights)", days: ["Arrive in Srinagar; sunset shikara ride on Dal Lake.", "Srinagar: Mughal gardens, Shankaracharya Temple and the old city.", "Drive to Gulmarg (about 51 km); Gondola ride; overnight in Gulmarg.", "Gulmarg to Pahalgam (about 147 km) via Srinagar; evening by the Lidder.", "Pahalgam: Aru Valley, Betaab Valley and Chandanwari by union taxi.", "Pahalgam to Srinagar; night on a houseboat.", "Day trip to Sonamarg (Sonmarg) and the Thajiwas glacier.", "Floating market at dawn, shopping and departure."] },
        { title: "10-day Kashmir itinerary (9 nights)", days: ["Arrive in Srinagar; shikara ride.", "Srinagar gardens and old city.", "Day trip to Doodhpathri.", "Gulmarg: Gondola and overnight.", "Gulmarg to Pahalgam.", "Pahalgam: Aru and Betaab valleys.", "Pahalgam: rafting or Chandanwari, with Kokernag or Daksum on request.", "Pahalgam to Srinagar; houseboat night.", "Day trip to Sonamarg.", "Departure from Srinagar."] },
      ],
      faqs: [
        { q: "Who are the best tour operators and travel agents in Kashmir?", a: "The best Kashmir tour operators are registered with J&K Tourism, name the hotels in writing and explain local costs upfront. Tavel Package connects you with up to 3 verified Kashmir travel agents who send customised quotes, so you can compare them before choosing." },
        { q: "How do I choose a travel agency for a Kashmir tour?", a: "Compare quotes for the same dates, hotel category and meal plan, check what is excluded (union taxis, ponies, Gondola tickets) and prefer agents with a local office or partner in Srinagar." },
        { q: "Is there a Kashmir itinerary for 7 or 8 days, or 10 days?", a: "Yes. The sample 8-day (7 nights) itinerary covers Srinagar, Gulmarg, Pahalgam and Sonamarg with a houseboat night; the 10-day (9 nights) plan adds Doodhpathri and more time in Pahalgam." },
        { q: "Can a Kashmir package include Sonamarg (Sonmarg)?", a: "Yes. Sonamarg is usually a day trip from Srinagar (about 80 km), or an overnight stay in summer." },
        { q: "Can I combine a Kashmir yatra with Vaishno Devi or Amarnath?", a: "Yes. Vaishno Devi fits before or after Kashmir via Katra, and Amarnath Yatra pilgrims often add Srinagar, Gulmarg and Sonamarg. Tell agents your yatra dates when you ask for quotes." },
      ],
      fromOrigins: {
        ahmedabad: {
          faqs: [
            { q: "Are there Kashmir holiday packages from Ahmedabad with flights?", a: "Yes. Agents quote Kashmir holiday packages from Ahmedabad with or without flights; Ahmedabad has direct and one-stop flights to Srinagar, and you can ask for flights to be included in the quote." },
          ],
        },
      },
      themes: {
        "honeymoon-packages": {
          faqs: [
            { q: "Which Kashmir package is best for a couple?", a: "A 5 or 6 night couple package with a deluxe houseboat night, a lake-view hotel in Srinagar, a night in Gulmarg and a riverside room in Pahalgam. Ask agents for candlelight dinners or a private shikara as add-ons." },
          ],
        },
        "budget-tour-packages": {
          intro: C("Budget Kashmir packages keep the classic Srinagar, Gulmarg and Pahalgam route but use clean budget or 2-star hotels, breakfast and dinner, and a shared or economy private cab. They are the cheapest way to see Kashmir without cutting the main sights.\n\nThe cheapest Kashmir tour packages save money in three places: hotel category, the season and the length of the trip. Travel in March, early April, October or November, keep the trip to 4 or 5 nights, and stay in Srinagar for most nights, with Gulmarg and Sonamarg as day trips."),
          blocks: [
            {
              heading: "How to find the cheapest Kashmir package",
              items: [
                "Travel off peak: March, October, November and early December are cheaper than April to June and New Year.",
                "Base in Srinagar and do Gulmarg and Sonamarg as day trips instead of paying hill-resort rates.",
                "Choose a budget or 2-star hotel with breakfast and dinner (MAP) rather than room only.",
                "Share a cab with your group; a sedan costs less than an Innova or a tempo traveller.",
                "Remember that Pahalgam union taxis, ponies and Gondola tickets are paid locally on top.",
              ],
            },
          ],
          faqs: [
            { q: "What is the cheapest Kashmir package?", a: C("A 3 or 4 night Srinagar-based trip in a budget hotel, outside peak season, with Gulmarg and Sonamarg as day trips. Compare quotes from agents with the same hotel category to find the cheapest genuine offer.") },
            { q: "Are cheap Kashmir packages worth it?", a: C("Yes, if the hotel is clean and heated in winter and the cab is private or shared as promised. Check what is excluded: Pahalgam union taxis, ponies and Gondola tickets are paid locally on most cheap packages.") },
          ],
        },
        "group-tour-packages": {
          intro: C("Kashmir group tour packages are planned for families travelling together, friends and corporate or school groups. Agents arrange group-rate hotels, a tempo traveller or several cabs, Gondola tickets booked together, and a group Wazwan dinner on request.\n\nGroups of 8 to 20 travellers usually move in a 12 to 17 seat tempo traveller, while smaller groups take two or three cabs. Pahalgam and Sonamarg sightseeing is done in local union vehicles, which agents book in advance for the whole group."),
          blocks: [
            {
              heading: "What a Kashmir group package includes",
              items: [
                "Hotels or houseboats with rooms on one floor or one boat where possible.",
                "A tempo traveller or several cabs for transfers and sightseeing.",
                "Gondola tickets booked online in advance for the whole group.",
                "Group meals, a Wazwan dinner and a shikara ride for everyone on request.",
              ],
            },
          ],
          faqs: [
            { q: "Can I book a Kashmir group tour package for 10 or more people?", a: C("Yes. Share your group size and dates and up to 3 verified agents send group quotes with hotels, a tempo traveller and sightseeing.") },
            { q: "Is a tempo traveller good for a group tour in Kashmir?", a: C("Yes, for groups of about 8 to 17 between Srinagar, Gulmarg and Pahalgam. In winter, agents may switch to smaller 4x4 vehicles for the snowy stretch to Gulmarg.") },
          ],
        },
        "solo-tour-packages": {
          intro: C("A Kashmir solo trip is very doable on the main circuit. Most solo travellers base in Srinagar, take a houseboat night, and join day trips to Gulmarg, Sonamarg and Pahalgam, either in a private cab or on shared departures that agents run in season.\n\nSolo packages cost more per person than shared trips because the cab and room are not split. Agents can pair you with a small group departure on the same dates to bring the cost down."),
          faqs: [
            { q: "Is a Kashmir solo trip safe?", a: C("The main circuit of Srinagar, Gulmarg, Sonamarg and Pahalgam town is busy and heavily guarded, and many solo travellers visit every month. Stay in registered hotels, use known cabs and keep your agent informed of your plans.") },
            { q: "How can I save money on a solo Kashmir trip?", a: C("Travel off peak, stay in a budget hotel or a houseboat in Srinagar, and join shared day trips or a small group departure instead of a private cab.") },
          ],
        },
        "luxury-tour-packages": {
          intro: C("Luxury Kashmir packages pair 5 star hotels in Srinagar, a deluxe houseboat on Nigeen or Dal Lake, a resort in Gulmarg and a riverside hotel in Pahalgam with a private Innova or SUV and an experienced driver.\n\nThey suit honeymooners, families celebrating an occasion and anyone who wants heated rooms, lake views and fewer compromises. Book well ahead for April to June and Christmas to New Year, when the best rooms sell out."),
          faqs: [
            { q: "Which are the 5 star hotels used in luxury Kashmir packages?", a: C("Agents commonly use 5 star hotels on the Zabarwan hills and Boulevard in Srinagar, the Khyber Himalayan Resort and Spa in Gulmarg and riverside luxury hotels in Pahalgam, plus deluxe-category houseboats. Ask agents to name the hotel in the quote.") },
            { q: "Is a luxury Kashmir package worth it in winter?", a: C("Yes. Central heating, heated pools and reliable hot water make a big difference in December to February, especially in Gulmarg.") },
          ],
        },
      },
    },
  },
};
