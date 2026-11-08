// Kashmir keyword pass (2026-11-07), part 2: towns (City content) and places
// (Place content). Facts and rules as in kashmir-keywords.ts.

import type { GuideContent } from "@/lib/locations";

export const KASHMIR_KW_CITIES: Record<string, Partial<GuideContent>> = {
  srinagar: {
    monthsWhere: "Srinagar",
    months: [
      { month: "January", tempC: "Day 4 to 8°C, night minus 2 to minus 6°C", weather: "The coldest month, in the middle of Chillai Kalan. Snowfall on some days, frosty mornings and short, clear days between spells. The edges of Dal Lake can freeze in a long cold spell.", goodFor: "Snow views, heated houseboats and harissa breakfasts in the old city." },
      { month: "February", tempC: "Day 6 to 10°C, night minus 2 to 1°C", weather: "Still cold, with snow possible early in the month. Days get longer and sunnier towards the end.", goodFor: "Quiet sightseeing and day trips to Gulmarg's snow." },
      { month: "March", tempC: "Day 12 to 16°C, night 2 to 5°C", weather: "Early spring with showers. Almond trees blossom at Badamwari in the first half of the month and the Tulip Garden opens in mid to late March (16 March in 2026).", goodFor: "Blossom, Navroz and the start of tulip season." },
      { month: "April", tempC: "Day 17 to 21°C, night 6 to 9°C", weather: "Mild and fresh, the city's prettiest month: tulips, flowering Mughal gardens and snow on the surrounding peaks.", goodFor: "Tulip Festival, gardens, honeymoons and families." },
      { month: "May", tempC: "Day 22 to 26°C, night 10 to 13°C", weather: "Warm days and cool evenings, long light for shikara rides and garden visits.", goodFor: "All sightseeing; busy with school holidays." },
      { month: "June", tempC: "Day 26 to 30°C, night 14 to 17°C", weather: "Warm and sunny, the peak of the summer season. Evenings on Dal Lake are pleasant.", goodFor: "Escaping the plains heat; day trips to Sonamarg and Gulmarg." },
      { month: "July", tempC: "Day 28 to 32°C, night 17 to 19°C", weather: "The warmest month, humid on some days, with occasional showers.", goodFor: "Shikara rides at sunrise and sunset; the hill resorts are cooler." },
      { month: "August", tempC: "Day 27 to 31°C, night 16 to 18°C", weather: "Warm with some rain. Lotus flowers cover parts of Dal Lake.", goodFor: "Lotus fields on Dal Lake and quieter hotels after the yatra." },
      { month: "September", tempC: "Day 24 to 28°C, night 10 to 13°C", weather: "Clear, settled and comfortable. Apple season begins in the orchards outside the city.", goodFor: "Sightseeing, photography and apple orchards." },
      { month: "October", tempC: "Day 17 to 23°C, night 3 to 7°C", weather: "Autumn: chinars turn red and gold in Naseem Bagh and Nishat, mornings are cold and skies are clear.", goodFor: "Autumn colours and the saffron bloom in Pampore at month end." },
      { month: "November", tempC: "Day 10 to 15°C, night minus 2 to 2°C", weather: "Late autumn: leaves fall, mornings are foggy and frosty, and the first snow reaches the nearby hills.", goodFor: "Quiet, good-value city breaks." },
      { month: "December", tempC: "Day 5 to 9°C, night minus 3 to minus 5°C", weather: "Winter arrives; snowfall is possible in the second half of the month and Chillai Kalan starts on 21 December.", goodFor: "Christmas and New Year trips with Gulmarg snow." },
    ],
    routes: [
      { from: "Jammu", to: "Srinagar", distanceKm: "about 240 km by road (NH44)", time: "6 to 8 hours", how: "The Jammu to Srinagar highway runs via Udhampur, the Chenani-Nashri and Banihal-Qazigund tunnels and Anantnag. Taxis, JKRTC and private buses and shared cabs run daily; the road can close for a day or more after heavy snow or landslides. Flights from Jammu take under an hour, and Vande Bharat trains now link Katra and Srinagar." },
      { from: "Katra", to: "Srinagar", distanceKm: "about 215 km by road; about 3 hours by Vande Bharat train", time: "6 to 7 hours by road", how: "Since June 2025 Vande Bharat trains run from Shri Mata Vaishno Devi Katra station to Srinagar across the Chenab Bridge, stopping at Banihal. By road, Katra joins the Jammu to Srinagar highway at Udhampur." },
      { from: "Delhi", to: "Srinagar", distanceKm: "about 800 km by road; about 1.5 hours by direct flight", time: "14 to 16 hours by road", how: "Most travellers fly direct to Srinagar (SXR). By train there is no direct Delhi to Srinagar service yet: take a train to Katra, then the Vande Bharat to Srinagar." },
      { from: "Srinagar airport", to: "Dal Lake", distanceKm: "about 15 km", time: "30 to 45 minutes", how: "Prepaid taxis and hotel pickups run from the airport to Dalgate and Boulevard Road. Allow extra time when leaving for a flight: there is a security check at the airport entrance." },
      { from: "Srinagar railway station", to: "Dal Lake", distanceKm: "about 9 to 10 km", time: "25 to 40 minutes", how: "Srinagar station is at Nowgam on the southern edge of the city. Taxis and hotel pickups wait outside; book one in advance for late trains." },
    ],
    sections: {
      "places-to-visit": {
        faqs: [
          { q: "Where is Badamwari garden in Srinagar, and when does it bloom?", a: "Badamwari is an almond garden at the foot of Hari Parbat (Koh-e-Maran) in Srinagar's old city. The almond trees blossom pink and white in early to mid March, the first sign of spring in Kashmir." },
        ],
      },
      "best-time-to-visit": {
        intro: "The best time to visit Srinagar is April to June for tulips, gardens and pleasant weather, and September to October for clear skies and autumn chinars. Winter (December to February) is cold, with snow on some days, and suits travellers who want a snowy Kashmir trip with heated hotels. Below is Srinagar's weather and temperature month by month.",
        faqs: [
          { q: "How cold is Srinagar in Jan (January)?", a: "Days are about 4 to 8°C and nights fall to minus 2 to minus 6°C, colder in a long cold spell during Chillai Kalan. Pack thermals, a down jacket, gloves and a woollen cap." },
          { q: "Does Srinagar get snow in winter?", a: "Yes, on some days from late December to February. Gulmarg, about 51 km away, has far more reliable snow." },
          { q: "What is the weather in Srinagar in March?", a: "Cool and changeable: days about 12 to 16°C, nights 2 to 5°C, with spring showers. Almond blossom is out in the first half of the month." },
          { q: "What is Srinagar like in October?", a: "Clear and crisp, with chinar trees turning red and gold from mid-month. Days about 17 to 23°C, cold mornings and nights." },
        ],
      },
      "how-to-reach": {
        intro: "Srinagar is reached by air (Srinagar International Airport, SXR, with direct flights from Delhi, Mumbai, Bengaluru, Jammu and other cities), by train (Vande Bharat from Katra, connecting with trains from Delhi) and by road on NH44 from Jammu. The routes and distances below cover Jammu, Katra, Delhi, the airport and the railway station.",
        faqs: [
          { q: "What is the distance from Jammu to Srinagar?", a: "About 240 km by road on NH44, usually 6 to 8 hours. Jammu Tawi railway station to Srinagar is a similar distance." },
          { q: "Are there buses from Jammu Tawi to Srinagar, and what is the bus fare?", a: "Yes. JKRTC and private buses leave Jammu's general bus stand, close to Jammu Tawi station, early in the morning for Srinagar. Fares depend on the bus type (ordinary, deluxe or Volvo) and are set by the operator; buy tickets at the bus stand or from authorised counters the day before." },
          { q: "What is the Jammu to Srinagar flight price and time?", a: "Direct flights take under an hour. Fares change with the date and demand, so check airline sites; they are often cheapest on weekdays outside school holidays." },
          { q: "What is the distance from Katra to Srinagar by road?", a: "About 215 km, 6 to 7 hours. The Vande Bharat train covers it in about 3 hours." },
          { q: "How far is Dal Lake from Srinagar airport?", a: "About 15 km, 30 to 45 minutes by taxi." },
          { q: "How do I reach Srinagar from Jammu by road if the highway is closed?", a: "Wait for it to reopen or switch to a flight or the train from Katra or Jammu. Your agent or the traffic police control room has the latest status." },
        ],
      },
    },
    packages: {
      itineraries: [
        { title: "6-day Srinagar itinerary (5 nights)", days: ["Arrive in Srinagar, check in and take a sunset shikara ride on Dal Lake.", "Mughal gardens (Nishat, Shalimar, Chashme Shahi) and Pari Mahal; evening on Boulevard Road.", "Day trip to Gulmarg with the Gondola.", "Day trip to Sonamarg and the Thajiwas glacier.", "Old city walk, Jamia Masjid, Hazratbal and shopping; a night on a houseboat.", "Floating market at dawn, then transfer to the airport."] },
      ],
      faqs: [
        { q: "Which is the best travel agency, tour operator or travel agent in Srinagar?", a: "The best Srinagar travel agencies are registered with J&K Tourism, quote a named hotel and houseboat category, and explain local costs such as Pahalgam union taxis and Gondola tickets. On Tavel Package, up to 3 verified local operators send you customised quotes so you can compare them side by side." },
        { q: "Can I book a Srinagar local tour package for one day?", a: "Yes. A Srinagar local tour covers the Mughal gardens, Shankaracharya Temple, Hazratbal and a shikara ride in one day, usually in a private cab with your driver." },
        { q: "Is a Srinagar itinerary of 5 nights enough?", a: "Yes. Five nights in Srinagar covers the city and day trips to Gulmarg, Sonamarg, Doodhpathri or Yusmarg, with one night on a houseboat." },
      ],
    },
  },
  gulmarg: {
    faqs: [
      { q: "What is the location of Gulmarg in Jammu and Kashmir, and what is its height?", a: "Gulmarg is in Baramulla district, about 51 km west of Srinagar, at about 2,650 m above sea level. The Gondola climbs to Kongdori (about 3,050 m) and Apharwat (about 3,980 m)." },
      { q: "What is Gulmarg famous for, and which are its tourist spots?", a: "Gulmarg is famous for snow, skiing and the Gulmarg Gondola. Its tourist spots include Kongdori, Apharwat peak, Khilanmarg, Alpather lake, St Mary's Church, the golf course and the frozen Drung waterfall near Tangmarg in winter." },
    ],
    monthsWhere: "Gulmarg",
    months: [
      { month: "January", tempC: "Day minus 2 to 3°C, night minus 8 to minus 12°C", weather: "Deep snow, regular snowfall and the heart of the ski season.", goodFor: "Skiing, snow play and Gondola rides when the weather allows." },
      { month: "February", tempC: "Day minus 1 to 4°C, night minus 7 to minus 10°C", weather: "The best snow cover of the year and more sunny days than January.", goodFor: "Skiing and snowboarding; Khelo India winter games are often held around this time." },
      { month: "March", tempC: "Day 3 to 8°C, night minus 5 to 0°C", weather: "Spring snow, with fresh falls still possible early in the month.", goodFor: "Late-season skiing and snow with milder days." },
      { month: "April", tempC: "Day 8 to 13°C, night minus 1 to 3°C", weather: "Snow melts from the meadow but stays on Kongdori and Apharwat.", goodFor: "Snow at Gondola Phase 1 and 2 with green patches below." },
      { month: "May", tempC: "Day 13 to 18°C, night 3 to 6°C", weather: "Pleasant, with the meadow turning green and snow on Apharwat.", goodFor: "Gondola, pony rides and walks." },
      { month: "June", tempC: "Day 17 to 22°C, night 7 to 10°C", weather: "Mild and bright, wildflowers on the meadow; snow left only at the top of Phase 2.", goodFor: "Families, golf and the walk to Alpather lake from Apharwat." },
      { month: "July", tempC: "Day 20 to 24°C, night 10 to 12°C", weather: "The warmest month, green and lush with some afternoon showers.", goodFor: "Escaping the heat, pony rides and picnics." },
      { month: "August", tempC: "Day 19 to 23°C, night 10 to 12°C", weather: "Green with occasional rain; fewer crowds than June.", goodFor: "Walks and the Gondola." },
      { month: "September", tempC: "Day 16 to 20°C, night 5 to 7°C", weather: "Clear skies and crisp air; one of the best months for views from Apharwat.", goodFor: "Photography and walks." },
      { month: "October", tempC: "Day 11 to 15°C, night 0 to 3°C", weather: "Autumn colours in the forests, golden meadows and cold nights; first snow can dust Apharwat late in the month.", goodFor: "Photos of autumn colours and quiet stays." },
      { month: "November", tempC: "Day 5 to 9°C, night minus 3 to minus 6°C", weather: "Cold, with the first snowfall usually during the month.", goodFor: "First snow and good-value hotels." },
      { month: "December", tempC: "Day 0 to 4°C, night minus 6 to minus 9°C", weather: "Snow arrives in earnest and the ski season opens.", goodFor: "White Christmas and New Year." },
    ],
    routes: [
      { from: "Srinagar", to: "Gulmarg", distanceKm: "about 51 km by road", time: "1.5 to 2 hours", how: "The road runs via Magam and Tangmarg; the last 13 km from Tangmarg climb through pine forest. After fresh snow, cabs fit chains at Tangmarg. Srinagar cabs can drive you to Gulmarg; inside Gulmarg, ponies and sledges run at union rates." },
      { from: "Srinagar airport", to: "Gulmarg", distanceKm: "about 60 km", time: "1.5 to 2 hours", how: "Direct by cab from the airport via Magam and Tangmarg, without entering the city centre." },
      { from: "Dal Lake", to: "Gulmarg", distanceKm: "about 55 km", time: "1.5 to 2 hours", how: "From Dalgate or Boulevard Road through the city to the Tangmarg road. Leave early in peak season to beat the traffic and the Gondola queue." },
      { from: "Sonamarg (Sonmarg)", to: "Gulmarg", distanceKm: "about 120 km", time: "3.5 to 4 hours", how: "Back towards Srinagar via Ganderbal, then on to Tangmarg. Most travellers break this into two day trips from Srinagar instead." },
      { from: "Katra", to: "Gulmarg", distanceKm: "about 265 km by road", time: "8 to 9 hours", how: "By road via the Jammu to Srinagar highway, or faster: the Vande Bharat train from Katra to Srinagar (about 3 hours), then about 1.5 to 2 hours to Gulmarg." },
    ],
    sections: {
      "places-to-visit": {
        faqs: [
          { q: "Where is Drung (Drang) waterfall near Gulmarg?", a: "Drung waterfall is in a small village off the Tangmarg road, a short detour on the way to Gulmarg. It is a pretty stream fall in summer and becomes a frozen ice fall in the coldest weeks of winter, when it is one of the most photographed winter spots in Kashmir." },
        ],
      },
      "best-time-to-visit": {
        intro: "The best time to visit Gulmarg is December to March for snow and skiing, and May to June for green meadows, flowers and mild weather. April has snow at the Gondola stations above the melting meadow, and September to October brings clear skies and autumn colours. Below is Gulmarg's weather and temperature month by month.",
        faqs: [
          { q: "What is the weather in Gulmarg in May and June?", a: "Pleasant: days about 13 to 22°C and cool nights, with snow left on Apharwat at the top of Gondola Phase 2." },
          { q: "Is Gulmarg in Kashmir worth visiting in July?", a: "Yes. It is the warmest month, green and full of wildflowers, with snow only at the very top of the Gondola." },
          { q: "What do Gulmarg photos in October look like?", a: "Golden meadows, red and yellow trees along the forest edge and clear blue skies, sometimes with the first snow on Apharwat." },
        ],
      },
      "how-to-reach": {
        intro: "Gulmarg is about 51 km from Srinagar by road, 1.5 to 2 hours via Tangmarg. The nearest airport is Srinagar (SXR) and the nearest railway station is Srinagar (Nowgam), with Vande Bharat trains from Katra. Routes and distances are below.",
        faqs: [
          { q: "What is the distance from Srinagar to Gulmarg by road?", a: "About 51 km, 1.5 to 2 hours via Magam and Tangmarg." },
          { q: "How far is Gulmarg from Srinagar airport?", a: "About 60 km, 1.5 to 2 hours by cab." },
          { q: "Can I do Srinagar to Gulmarg and back in one day?", a: "Yes. It is the most popular day trip from Srinagar: leave by 8 am, ride the Gondola and be back by evening." },
          { q: "What is the Sonamarg (Sonmarg) to Gulmarg distance?", a: "About 120 km, 3.5 to 4 hours via Srinagar." },
        ],
      },
      "things-to-do": {
        intro: "The best things to do in Gulmarg are the Gondola ride to Kongdori and Apharwat, skiing and snowboarding from December to March, sledging and snow-scooter rides, ATV rides on the meadow, pony rides to Khilanmarg and the viewpoints, and golf in summer. Activities run through local associations and registered operators; prices are set each season and shown on rate cards.",
        blocks: [
          { heading: "Skiing in Gulmarg: cost, season and packages", body: "Gulmarg's ski season runs from about mid-December to March. Beginners learn on the gentle slopes near the Gondola base with certified instructors, either privately or through courses run by the Indian Institute of Skiing and Mountaineering (IISM) and J&K Tourism; experienced skiers ride Gondola Phase 2 to Apharwat. The cost of skiing in Gulmarg depends on equipment hire (skis, boots, poles and clothing from shops at the Gondola base), instructor hours and lift tickets. Agents can build a Gulmarg skiing package with a ski-friendly hotel, lessons and gear." },
          { heading: "ATV and pony rides in Gulmarg", body: "ATV rides run on set tracks around the meadow in summer, and snow scooters in winter. Ponies take visitors to Khilanmarg, the Strawberry Valley viewpoint and the Gondola base. Both are run by local associations with displayed rates; agree the route and price before you start." },
          { heading: "Paragliding and helicopter rides in Gulmarg", body: "Tandem paragliding runs in Gulmarg in season with registered operators, depending on wind and weather. Helicopters in Gulmarg are used for heli-skiing by specialist operators for expert skiers in winter; there is no regular short sightseeing helicopter ride." },
          { heading: "The Gulmarg ski hill resorts", body: "Gulmarg's ski area is the Apharwat slope served by the Gondola, with beginner slopes and a short chairlift near the base. Hotels near the Gondola base, including the Khyber Himalayan Resort and Spa, suit skiers who want to walk to the lifts." },
        ],
        faqs: [
          { q: "What is the cost of skiing in Gulmarg?", a: "It depends on equipment hire, instructor time and Gondola tickets, all priced locally for the season. Ask agents for a skiing package that lists each item." },
          { q: "Is there a pony ride in Gulmarg?", a: "Yes. Ponies run to Khilanmarg, viewpoints and the Gondola base at association rates." },
          { q: "What are the prices of Gulmarg activities like ATV and sledging?", a: "They are set by the local associations and displayed on rate cards. Agree the price and duration before you start." },
        ],
      },
    },
  },
  pahalgam: {
    faqs: [
      { q: "Where is Pahalgam in Jammu and Kashmir?", a: "Pahalgam is in Anantnag district in south Kashmir, on the Lidder river, about 98 km from Srinagar by road." },
    ],
    monthsWhere: "Pahalgam",
    months: [
      { month: "January", tempC: "Day 0 to 5°C, night minus 7 to minus 10°C", weather: "Under snow, quiet and very cold; Aru and Chandanwari are reached only when the roads are cleared.", goodFor: "Snow scenery along the Lidder." },
      { month: "February", tempC: "Day 2 to 6°C, night minus 6 to minus 9°C", weather: "Snow-covered pine forests, slowly warming late in the month.", goodFor: "Winter walks near the town." },
      { month: "March", tempC: "Day 7 to 11°C, night minus 3 to 1°C", weather: "Snow melting in the valley, still deep at Aru and Chandanwari.", goodFor: "Snow and early spring." },
      { month: "April", tempC: "Day 12 to 16°C, night 1 to 4°C", weather: "Spring: green meadows, snow on the peaks and rising rivers.", goodFor: "Betaab Valley, Aru Valley and the river." },
      { month: "May", tempC: "Day 16 to 21°C, night 5 to 8°C", weather: "Pleasant and green, with snow at Chandanwari.", goodFor: "Rafting, pony rides and all sightseeing." },
      { month: "June", tempC: "Day 20 to 25°C, night 8 to 11°C", weather: "Peak season, warm days and cool nights.", goodFor: "Families and rafting on the full Lidder." },
      { month: "July", tempC: "Day 22 to 27°C, night 10 to 13°C", weather: "Warm and green; the Amarnath Yatra starts from Chandanwari, so the town is busy and security is heavy.", goodFor: "Yatra pilgrims and meadow walks." },
      { month: "August", tempC: "Day 21 to 26°C, night 10 to 13°C", weather: "Green with some rain; busy until the yatra ends.", goodFor: "Treks and riverside stays." },
      { month: "September", tempC: "Day 18 to 23°C, night 5 to 8°C", weather: "Clear and settled, quieter after the yatra.", goodFor: "Sightseeing and photography." },
      { month: "October", tempC: "Day 13 to 18°C, night 0 to 4°C", weather: "Autumn colours along the river and cold nights.", goodFor: "Autumn photos and calm stays." },
      { month: "November", tempC: "Day 7 to 12°C, night minus 4 to 0°C", weather: "Cold, with the first snow in the higher valleys.", goodFor: "Off-season value." },
      { month: "December", tempC: "Day 2 to 7°C, night minus 6 to minus 9°C", weather: "Winter sets in and snow falls in the town.", goodFor: "A snowy add-on to a Gulmarg winter trip." },
    ],
    routes: [
      { from: "Srinagar", to: "Pahalgam", distanceKm: "about 95 to 100 km by road", time: "2.5 to 3 hours", how: "Via NH44 past Pampore and Awantipora to Khanabal near Anantnag, then up the Lidder valley. Many trips stop at Pampore's saffron fields and Awantipora's temple ruins." },
      { from: "Srinagar airport", to: "Pahalgam", distanceKm: "about 100 km", time: "2.5 to 3 hours", how: "Direct by cab from the airport, joining NH44 south of the city." },
      { from: "Pahalgam", to: "Gulmarg", distanceKm: "about 147 km", time: "4.5 to 5 hours", how: "Back towards Srinagar on NH44, around the city and on via Magam and Tangmarg. Start early, as the drive takes most of the morning." },
      { from: "Jammu", to: "Pahalgam", distanceKm: "about 225 km", time: "6 to 7 hours", how: "On the Jammu to Srinagar highway to Qazigund and Anantnag, then up to Pahalgam without entering Srinagar." },
    ],
    sections: {
      "best-time-to-visit": {
        intro: "The best time to visit Pahalgam is April to June for green meadows and mild weather, September to October for clear skies and autumn colours, and December to February for snow. In July and August the Amarnath Yatra makes the town busy. Below is Pahalgam's weather and temperature month by month.",
        faqs: [
          { q: "What is the temperature in Pahalgam in April and May?", a: "In April days are about 12 to 16°C and nights near freezing; in May days are about 16 to 21°C and nights 5 to 8°C." },
          { q: "Is Pahalgam good to visit in May?", a: "Yes. May is green, pleasant and fully open, with snow still at Chandanwari." },
        ],
      },
      "how-to-reach": {
        intro: "Pahalgam is about 95 to 100 km from Srinagar by road, 2.5 to 3 hours via Anantnag. The nearest airport is Srinagar (SXR) and the nearest railway station on the valley line is Anantnag. Routes and distances are below.",
        faqs: [
          { q: "What is the distance from Srinagar to Pahalgam?", a: "About 95 to 100 km by road, 2.5 to 3 hours." },
          { q: "Is there a bus from Srinagar to Pahalgam?", a: "Yes. JKRTC and private buses and minibuses run from Srinagar towards Anantnag and Pahalgam, and shared cabs leave from the Srinagar taxi stands. A private taxi is the most flexible option." },
          { q: "How long does a taxi from Srinagar to Pahalgam take?", a: "About 2.5 to 3 hours for the 95 to 100 km drive, longer with stops at Pampore and Awantipora. Your Srinagar taxi can drop you in Pahalgam; local sightseeing there is in union taxis." },
          { q: "How far is Pahalgam from Srinagar airport?", a: "About 100 km, 2.5 to 3 hours by taxi." },
          { q: "What is the Pahalgam to Gulmarg distance?", a: "About 147 km, 4.5 to 5 hours via Srinagar." },
        ],
      },
      "things-to-do": {
        intro: "The best things to do in Pahalgam are river rafting on the Lidder, pony and horse rides, walks in Betaab and Aru valleys, a visit to Chandanwari and riverside picnics. Local sightseeing to Aru, Betaab and Chandanwari is done in Pahalgam union taxis, and ponies and rafting run at association rates. Baisaran meadow has been closed to visitors since April 2025.",
        blocks: [
          { heading: "River rafting in Pahalgam: the rafting point", body: "Rafting on the Lidder starts from rafting points a few kilometres below the town towards Yanner, with short, easy to moderate stretches suited to first-timers. The season runs from about May to August, when the river is full. Operators provide life jackets and helmets; rates are set by the rafting association." },
          { heading: "Pony and horse riding in Pahalgam", body: "Ponies from the Pahalgam pony association take visitors along the river and up to viewpoints and meadows that are open. Horse riding charges follow the association's rate card for each route: check the card, agree the route and stops, and pay at the end." },
        ],
        faqs: [
          { q: "What is the pony ride price and horse riding charge in Pahalgam?", a: "Pony ride charges are fixed per route by the Pahalgam pony association and shown on its rate card. Ask to see the card and agree the route before you set off." },
          { q: "Where is the rafting point in Pahalgam?", a: "On the Lidder below the town, towards Yanner. Rafting runs from about May to August." },
        ],
      },
    },
    packages: {
      faqs: [
        { q: "What does a Pahalgam tour package include?", a: "Usually hotel nights in Pahalgam with breakfast and dinner, a cab from Srinagar and back, and help booking union taxis for Aru, Betaab and Chandanwari. Most Pahalgam tour packages are part of a Srinagar, Gulmarg and Pahalgam trip." },
      ],
    },
  },
  sonamarg: {
    faqs: [
      { q: "What is Sonamarg like in January?", a: "Snowbound and very cold. Since the Z-Morh (Sonamarg) tunnel opened in January 2025 the town can be reached in winter, but heavy snow can still close the road for a day or two. Check with your agent the day before." },
    ],
    routes: [
      { from: "Srinagar", to: "Sonamarg (Sonmarg)", distanceKm: "about 80 km by road", time: "2.5 to 3 hours", how: "On NH1, the Srinagar to Leh highway, via Ganderbal and Kangan along the Sindh river." },
      { from: "Dal Lake", to: "Sonamarg (Sonmarg)", distanceKm: "about 80 km", time: "2.5 to 3 hours", how: "From Dalgate along the Foreshore Road to Ganderbal, then up the Sindh valley." },
      { from: "Srinagar airport", to: "Sonamarg (Sonmarg)", distanceKm: "about 93 km", time: "3 hours", how: "Around the city to Ganderbal and on along NH1." },
    ],
    sections: {
      "how-to-reach": {
        faqs: [
          { q: "What is the Srinagar to Sonmarg distance?", a: "About 80 km by road, 2.5 to 3 hours on NH1 via Ganderbal and Kangan." },
          { q: "How far is Sonmarg from Srinagar airport?", a: "About 93 km, around 3 hours by cab." },
        ],
      },
      "places-to-visit": {
        faqs: [
          { q: "What are the tourist places and sightseeing points in Sonamarg (Sonmarg)?", a: "The Thajiwas glacier, the Sindh river meadows, Zojila Pass and Zero Point when the road is open, and the trailheads for Vishansar and Krishansar lakes. Sightseeing beyond the town is done in local union vehicles." },
        ],
      },
    },
  },
  yusmarg: {
    routes: [
      { from: "Srinagar", to: "Yusmarg (Yousmarg)", distanceKm: "about 50 km", time: "1.5 hours", how: "Via Budgam and Chrar-e-Sharif. Easy as a day trip from Srinagar, often combined with Doodhpathri." },
    ],
    faqs: [
      { q: "What is the distance from Srinagar to Yusmarg (Yousmarg)?", a: "About 50 km, 1.5 hours by road via Budgam and Chrar-e-Sharif." },
    ],
  },
  gurez: {
    faqs: [
      { q: "Which hotels are there in Gurez Valley?", a: "Gurez has a small number of hotels, guesthouses and homestays, mostly in and around Dawar, including Hotel Grand Gurez, plus tourism department huts and seasonal camps. Rooms are limited and simple, so book ahead and confirm heating and hot water. A permit is needed, which agents arrange." },
      { q: "Is Hotel Grand Gurez a good place to stay?", a: "It is one of the larger hotels in the Dawar area. As listings give different addresses and rates, ask your agent to confirm the location, room type and current price before you book." },
    ],
  },
  katra: {
    packages: {
      intro: "Katra packages are built around the Mata Vaishno Devi yatra, and most travellers add Kashmir: Vaishno Devi and Kashmir tour packages combine one or two nights in Katra with Srinagar, Gulmarg and Pahalgam. Since June 2025 the Vande Bharat train links Katra and Srinagar in about 3 hours, so the two fit easily into one holiday.",
      blocks: [
        { heading: "Vaishno Devi and Kashmir tour packages", items: ["7 days: Katra (yatra) 2 nights, then Srinagar 3 nights and Pahalgam 1 night.", "9 days: Katra 2 nights, Srinagar 3, Gulmarg 1 and Pahalgam 2.", "Travel Katra to Srinagar by Vande Bharat train or by road (about 215 km)."] },
        { heading: "Vaishno Devi (Vaishnodevi) yatra packages", items: ["Hotel in Katra near the Banganga yatra start or the bus stand.", "Help with free yatra registration (RFID card) and helicopter booking on the Shrine Board website.", "Optional add-ons: Shiv Khori cave, Patnitop and Jammu temples."] },
        { heading: "Vaishno Devi tour packages from Ahmedabad and other cities", body: "From Ahmedabad and most of Gujarat, travellers fly to Jammu or take a train to Jammu Tawi or Katra, then continue to the yatra. Agents on Tavel Package build holiday packages from Ahmedabad that start at Jammu or Katra, with Kashmir added if you want it." },
        { heading: "Adding Shiv Khori to a Katra trip", body: "Shiv Khori, a cave shrine of Lord Shiva in Reasi district, is a day trip from Katra: about 80 km by road to Ransoo, then a walk of about 3 km to the cave. Groups often go in a tempo traveller; the fare is a fixed rate per vehicle for the day, set by local operators." },
      ],
      faqs: [
        { q: "Can I book a Kashmir tour package with Vaishno Devi?", a: "Yes. A Vaishno Devi and Kashmir package usually spends 2 nights in Katra for the yatra and 4 to 6 nights in Srinagar, Gulmarg and Pahalgam, linked by the Katra to Srinagar Vande Bharat train or by road." },
        { q: "Is there a Vaishno Devi yatra package from Ahmedabad?", a: "Yes. Agents plan Vaishno Devi tours from Ahmedabad with flights to Jammu or trains to Katra, a hotel in Katra and help with registration, and can add Kashmir." },
        { q: "What is the tempo traveller fare from Katra to Shiv Khori?", a: "It is a per-vehicle day rate set by local operators and changes with the season and group size. Ask agents to include it in the quote." },
        { q: "Is a Katra to Kashmir holiday package better by train or road?", a: "By train: the Vande Bharat takes about 3 hours from Katra to Srinagar and avoids highway delays. By road it takes 6 to 7 hours but lets you stop on the way." },
      ],
    },
  },
};

export const KASHMIR_KW_PLACES: Record<string, Partial<GuideContent>> = {
  "srinagar/places-to-visit/dal-lake": {
    blocks: [
      { heading: "Shikara ride on Dal Lake: price, cost and timings", body: "Shikara rides on Dal Lake are charged per hour at official rates set by J&K Tourism and displayed at the numbered ghats along Boulevard Road. A one-hour ride covers the lake in front of the Boulevard; two to three hours take in Char Chinar, the floating gardens and Nehru Park. Shikaras run from early morning to after sunset; sunrise and sunset are the most popular times. Agree the duration and stops before you set off, and book at any ghat or through your hotel or houseboat." },
      { heading: "The floating market on Dal Lake", body: "At dawn, farmers from the lake villages trade vegetables from their shikaras in the inner Dal for an hour or two. Ask your houseboat or hotel to arrange an early shikara so you are on the water by about 5:30 to 6 am in summer." },
      { heading: "Shikara and houseboat in Kashmir", body: "Houseboats on Dal and Nigeen Lake are reached by shikara from the ghats, and the transfer is usually included in the stay. Many travellers combine one houseboat night with a long shikara ride the next morning." },
    ],
    faqs: [
      { q: "What is the shikara ride price and cost on Dal Lake?", a: "Shikara rides are charged per hour at the official J&K Tourism rate, shown on boards at the ghats. Longer routes cost more. Check the board and agree the duration and stops before you start." },
      { q: "What are the Dal Lake and shikara ride timings?", a: "Dal Lake is open all day. Shikaras run from early morning until after sunset; the floating market is only at dawn." },
      { q: "How does shikara booking work in Srinagar?", a: "Walk to any numbered ghat on Boulevard Road, or ask your hotel or houseboat to arrange one. Pay at the end of the ride." },
      { q: "What is a shikara boat?", a: "A shikara is a long, narrow wooden boat with a canopy and cushioned seats, paddled from the back. It is the classic way to see Dal Lake and to reach houseboats." },
      { q: "Is there a floating market in Kashmir?", a: "Yes, the floating vegetable market on Dal Lake in Srinagar, at dawn in the inner lake." },
    ],
  },
  "srinagar/places-to-visit/indira-gandhi-tulip-garden": {
    facts: [
      { label: "Season", value: "Mid to late March to about the third week of April (opened 16 March in 2026)" },
      { label: "Location", value: "Siraj Bagh, foothills of the Zabarwan range, near Dal Lake" },
    ],
    blocks: [
      { heading: "Indira Gandhi Memorial Tulip Garden: Kashmir season and opening dates", body: "The Indira Gandhi Memorial Tulip Garden in Srinagar, Asia's largest tulip garden, opens to the public for a few weeks each spring, from mid to late March to about the third week of April; it opened on 16 March in 2026 and on 26 March in 2025. Exact opening dates are announced by the Floriculture Department each year depending on the bloom; the peak is usually the first two weeks of April. The J&K Tourism Tulip Festival is held in the garden during the bloom." },
      { heading: "Tulip Garden ticket price, entry fee and timings", body: "Entry is by ticket, sold at the entrance counters and, in recent seasons, also online. The entry fee is set by the Floriculture Department for each season, with separate rates for adults and children. The garden is open in daytime hours, from morning to early evening. Arrive early on weekends to avoid queues." },
      { heading: "Tulip Garden images and pictures: the best photo spots", body: "The best pictures are from the terraces with the Zabarwan hills behind and from the long rows of red and yellow tulips near the centre. Morning light is softest; weekdays are less crowded." },
    ],
    faqs: [
      { q: "When is the best time to visit the Tulip Garden in Kashmir?", a: "The first two weeks of April, when most of the tulips are in bloom. The garden opens in mid to late March (16 March in 2026) and stays open until about the third week of April." },
      { q: "What is the Tulip Garden Srinagar ticket price and entry fee?", a: "A per-person entry ticket, priced by the Floriculture Department for each season. Buy it at the gate or online when available." },
      { q: "What are the Tulip Garden Srinagar timings and opening time?", a: "It is open in daytime, from morning to early evening, during the tulip season. Check the season's notice for exact hours." },
      { q: "Is online booking available for the Tulip Garden?", a: "In recent seasons tickets have been sold online as well as at the gate. Check the J&K Floriculture or Tourism announcement for the current season." },
      { q: "When is the tulip flower season in India and Kashmir?", a: "Late March to April. Srinagar's Indira Gandhi Memorial Tulip Garden is India's best-known tulip garden." },
      { q: "When is the Tulip Festival in Kashmir?", a: "During the bloom, usually in the first half of April, organised by J&K Tourism in and around the Tulip Garden." },
    ],
  },
  "srinagar/places-to-visit/mughal-gardens": {
    faqs: [
      { q: "Which Kashmiri gardens are the Mughal gardens?", a: "Nishat Bagh, Shalimar Bagh, Chashme Shahi and Pari Mahal on the banks of Dal Lake, plus Verinag and Achabal in south Kashmir." },
    ],
  },
  "gulmarg/places-to-visit/gulmarg-gondola": {
    blocks: [
      { heading: "Gulmarg Gondola booking: how to book the ride online", body: "Gulmarg Gondola tickets are sold online through the official J&K Cable Car Corporation (JKCCL) booking portal; on-the-spot ticket sales at the base were stopped in 2025. Book as soon as your dates are fixed: tickets for April to June and the winter holidays sell out days or weeks ahead. A limited Tatkal quota for the next day is released online each day. Carry the ID used for booking." },
      { heading: "Gulmarg Gondola ticket price: Phase 1 and Phase 2", body: "Each phase has its own ticket price, set by the J&K Cable Car Corporation and shown on the booking portal; Phase 2 costs more than Phase 1 and needs a Phase 1 ticket. Prices are revised from time to time, so check the portal rather than older blog posts." },
      { heading: "Gulmarg Gondola height: Kongdori and Apharwat", body: "Phase 1 rises from the Gulmarg base (about 2,650 m) to Kongdori (about 3,050 m) in roughly 10 minutes. Phase 2 continues from Kongdori to Apharwat ridge (about 3,980 m), making it one of the highest cable car rides in the world. Phase 2 closes in high wind or heavy snow." },
      { heading: "Gulmarg Gondola in summer", body: "The Gondola runs in summer too. Phase 1 gives views over the green meadow and forest, and Phase 2 still has snow at Apharwat into June, with a walk to Alpather lake for fit visitors when it is open." },
    ],
    faqs: [
      { q: "How do I book the Gulmarg Gondola ride online?", a: "On the official J&K Cable Car Corporation booking portal. Choose the date and phase, pay online and carry the same ID. Tickets are not sold at the base." },
      { q: "What is the Gulmarg Gondola ticket price for Phase 1 and Phase 2?", a: "Each phase has a separate price set by the Cable Car Corporation and shown on its booking portal; Phase 2 is more expensive and requires a Phase 1 ticket." },
      { q: "What is the height of Gulmarg Gondola Phase 1 and Phase 2?", a: "Phase 1 reaches Kongdori at about 3,050 m; Phase 2 reaches Apharwat at about 3,980 m." },
      { q: "Is the Gulmarg cable car (ropeway) open in summer?", a: "Yes. Both phases run in summer when the weather allows, and Phase 2 still has snow into June." },
      { q: "Is there a gondola in Srinagar?", a: "No. The famous Gondola is in Gulmarg, about 51 km from Srinagar; most visitors do it as a day trip from Srinagar." },
      { q: "What is Kongdori in Gulmarg?", a: "Kongdori is the meadow at the top of Gondola Phase 1, at about 3,050 m, with snow play in winter and views of Gulmarg below." },
    ],
  },
  "katra/places-to-visit/mata-vaishno-devi-shrine": {
    blocks: [
      { heading: "The way to Vaishno Devi: route and new route map", body: "The yatra starts at Banganga in Katra. The traditional route climbs about 12 to 13 km via Charan Paduka, Ardhkuwari and Sanjichhat to the Bhawan. From Ardhkuwari a newer, gentler track runs to the Bhawan with battery car services, and the Tarakote Marg offers an alternative path from Katra to Ardhkuwari. Ponies, palanquins and porters are available at fixed rates, the helicopter runs from Katra to Sanjichhat, and a ropeway links the Bhawan with Bhairon temple. The official route map is on the Shrine Board website and on boards along the track." },
      { heading: "Vaishno Devi katha: the story of Maa Vaishno Devi", body: "According to tradition, the goddess was born as Vaishnavi and devoted herself to meditation in the Trikuta hills. Bhairon Nath pursued her, and she rested and meditated for nine months in the cave now called Ardhkuwari (Garbh Joon) before going on to the holy cave at the Bhawan, where she slew him. Repenting, Bhairon was granted that every pilgrim's yatra would be complete only after visiting his temple, which is why pilgrims climb on to Bhairon temple after darshan. The shrine is said to have been found by Pandit Shridhar, a devotee from a nearby village." },
      { heading: "Shri Mata Vaishno Devi online services", body: "The Shri Mata Vaishno Devi Shrine Board's official website (maavaishnodevi.org) offers online yatra registration, helicopter tickets, accommodation at Katra and the Bhawan, battery car and ropeway bookings and puja services. Yatra registration (an RFID card) is free and compulsory; book helicopter tickets only on the official site." },
    ],
    faqs: [
      { q: "Is maavaishnodevi.org the official Shri Mata Vaishno Devi Shrine Board website?", a: "Yes. Use it for yatra registration, helicopter tickets, rooms and other online services, and avoid unofficial booking sites." },
      { q: "Is there online booking for Vaishno Devi darshan and helicopter tickets?", a: "Darshan needs only the free yatra registration, done online or at Katra. Helicopter tickets are booked online on the Shrine Board's official website. The helicopter flies from Katra to Sanjichhat, about 2.5 km from the Bhawan. Tickets open a set number of days ahead and sell out quickly in peak season." },
      { q: "How do I book a helicopter ticket for Vaishno Devi?", a: "Book it on the Shrine Board's official website (maavaishnodevi.org) once the booking window opens for your date. The helicopter flies Katra to Sanjichhat; carry the same ID and your yatra registration." },
      { q: "Is there a ticket for Vaishno Devi darshan?", a: "No. Darshan is free and yatra registration (RFID card) is free. Only services such as the helicopter, battery car, ropeway and rooms are paid." },
      { q: "What are the Vaishno Devi darshan timings?", a: "The Bhawan is open round the clock, with darshan paused during the morning and evening aarti. Queues are shortest late at night and early in the morning outside festivals." },
      { q: "How long does Vaishno Devi ke darshan take?", a: "Plan a full day: 6 to 8 hours to walk up, time in the queue, and 4 to 6 hours down, plus Bhairon temple. With the helicopter it can be done in half a day." },
      { q: "Is Vaishno Devi in Jammu or in Kashmir?", a: "It is in Jammu and Kashmir, in the Trikuta hills near Katra in Reasi district, in the Jammu region rather than the Kashmir valley. Srinagar is about 215 km away by road, or about 3 hours by Vande Bharat train." },
      { q: "Who is Vaishnavi, and which temple is she worshipped in?", a: "Vaishnavi is another name of Mata Vaishno Devi, worshipped in the holy cave at the Bhawan above Katra." },
      { q: "What should I know before going to visit Vaishno Devi?", a: "Register for the yatra and collect your RFID card, carry ID, wear good walking shoes, avoid leather items, and keep warm clothes for the night. Mobile phones and bags go into the lockers before darshan." },
      { q: "What is the Vaishno Devi kahani for children?", a: "The story of a devotee girl, Vaishnavi, who meditated in the Trikuta hills, hid for nine months in the Ardhkuwari cave and defeated Bhairon Nath at the holy cave, where she is worshipped today." },
      { q: "Is there a new route map for the Vaishno Devi trek?", a: "Yes. Besides the old route via Sanjichhat, a newer track runs from Ardhkuwari to the Bhawan with battery cars, and the Tarakote Marg is an alternative start from Katra. Maps are on the Shrine Board website and on boards along the way." },
    ],
  },
};
