import type { BlogPost } from "./types";

// Full rewrites of thin Kashmir posts, keyed by their existing slug. Title,
// description, category and dates stay as published; intro, sections and FAQs
// are replaced (see blog/index.ts). No em dashes, no invented prices.

export const KASHMIR_UPGRADES: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = {
  "best-time-to-visit-kashmir": {
    intro:
      "The best time to visit Kashmir depends on what you want: March to May for spring blossom and the tulip garden, June to August for green meadows and cool days, September to November for clear skies and golden chinar trees, and December to February for snow in Gulmarg and Sonamarg. For a first trip, April to June and late September to October give the most reliable weather, with every road and attraction usually open.",
    sections: [
      {
        h: "Kashmir season by season",
        list: [
          "Spring (March to May): blossom, the Indira Gandhi Memorial Tulip Garden in late March and April, pleasant days in Srinagar",
          "Summer (June to August): green meadows in Pahalgam, Gulmarg and Sonamarg; Srinagar can be warm in the afternoons; the Amarnath Yatra runs in July and August",
          "Autumn (September to November): clear, dry weather and golden chinar leaves from late October; quieter and good value",
          "Winter (December to February): snow and skiing in Gulmarg, frozen landscapes, and Chillai Kalan, the coldest 40 days, from late December to the end of January",
        ],
      },
      {
        h: "Kashmir weather month by month",
        p: [
          "In January Srinagar's days are around 5 to 8°C with nights below freezing, and Gulmarg is under deep snow. February is similar, with sunnier spells late in the month. March warms to the mid-teens, with almond blossom in Badamwari and the first tulips at the end of the month. April and May bring days of about 18 to 26°C, the tulip garden and the busiest spring season.",
          "June to August are the warmest months in Srinagar, with afternoon highs often around 30°C, while Gulmarg, Pahalgam and Sonamarg stay cool. September is dry and clear, October brings crisp mornings and the first chinar colours, and November turns cold, with the first snowfall in the higher resorts.",
        ],
      },
      {
        h: "Best time for snow in Kashmir",
        p: [
          "For snow, go between mid-December and February. Gulmarg is the most reliable, with skiing from about December to March. Sonamarg and Pahalgam also get heavy snow, though roads to Sonamarg can close after heavy falls. In March and April, snow usually remains at higher points such as Apharwat (by the Gulmarg Gondola Phase 2) and Thajiwas Glacier.",
        ],
      },
      {
        h: "Best time for a Kashmir honeymoon",
        p: [
          "Couples who want snow choose December to February and stay in Gulmarg and on a heated houseboat. Couples who want flowers and sightseeing choose April and May, and those who want quieter, golden scenery choose October. Avoid the Amarnath Yatra weeks in July and August if you want Pahalgam and Sonamarg without crowds.",
        ],
      },
      {
        h: "Best time to visit by place",
        list: [
          "Srinagar: March to June and September to November; winter is cold but scenic",
          "Gulmarg: December to March for snow, May to October for meadows and the gondola",
          "Pahalgam: April to October; December to February for snow",
          "Sonamarg: May to October; access in winter depends on road clearance",
          "Gurez: May to October, when Razdan Pass is open",
          "Katra and Vaishno Devi: March to June and September to November; avoid the hottest weeks",
        ],
      },
      {
        h: "Months to plan around",
        p: [
          "Peak weeks bring higher hotel and houseboat rates and sold-out gondola tickets: the tulip season in April, school holidays in May and June, and Christmas to New Year. July and August bring Amarnath Yatra traffic on the Pahalgam and Sonamarg roads. Book these periods early, and keep a buffer day in winter in case snow closes the Jammu to Srinagar highway or flights are delayed.",
        ],
      },
      {
        h: "Festivals and events by month",
        list: [
          "March: Navroz, the spring new year, and almond blossom at Badamwari in Srinagar",
          "Late March to April: the tulip festival at the Indira Gandhi Memorial Tulip Garden",
          "May or June: the Kheer Bhawani mela at Tulmulla on Jyeshtha Ashtami",
          "July and August: the Amarnath Yatra through Pahalgam and Baltal",
          "Late October and November: golden chinar season across the valley",
          "Eid ul-Fitr and Eid ul-Adha move with the lunar calendar; markets close for parts of these days",
        ],
      },
      {
        h: "What to pack for each season",
        list: [
          "Spring and autumn: light layers for the day, a fleece or jacket for evenings and Gulmarg",
          "Summer: cotton clothes for Srinagar, a warm layer for Gulmarg, Pahalgam and Sonamarg",
          "Winter: thermals, a heavy down jacket, gloves, woollen cap and waterproof boots; snow gear can be rented in Gulmarg",
          "Always: sunglasses and sunscreen, modest clothing for shrines and the old city, and a postpaid phone connection",
        ],
      },
    ],
    faqs: [
      { q: "Is October a good time to visit Kashmir?", a: "Yes. October is dry and clear with crisp mornings, the first golden chinar leaves and fewer crowds than spring. Nights are cold, so carry warm layers." },
      { q: "Is Kashmir crowded in May and June?", a: "Yes. May and June are peak months with school holidays, so book hotels, houseboats and gondola tickets early, and start sightseeing days early." },
      { q: "Which is the best month to visit Kashmir?", a: "April, May and October give the most reliable weather with every attraction open. Choose January or February if you want snow." },
      { q: "When does it snow in Kashmir?", a: "Snowfall is most reliable from mid-December to February. Gulmarg usually keeps snow until March, and higher points into spring." },
      { q: "Is Kashmir good in July?", a: "Yes. Meadows are green and the hill resorts are cool, though Srinagar is warm and the Amarnath Yatra brings traffic to Pahalgam and Sonamarg." },
      { q: "When is the Srinagar tulip garden open?", a: "Usually from late March for about three to four weeks, depending on the bloom. Dates are announced each year." },
      { q: "Is it too cold to visit Kashmir in January?", a: "It is very cold, with Srinagar nights below freezing during Chillai Kalan, but hotels and houseboats provide heating and the snow scenery is at its best." },
    ],
  },

  "kashmir-itinerary-4-and-5-days": {
    intro:
      "A 4-day Kashmir itinerary covers Srinagar, Gulmarg and Pahalgam; a 5-day plan adds Sonamarg. Base yourself in Srinagar for two nights (one on a houseboat), then spend a night in Pahalgam, or do Gulmarg and Sonamarg as day trips. Fly into Srinagar, or take the Vande Bharat train from Katra, and allow a rest morning on arrival.",
    sections: [
      {
        h: "4-day Kashmir itinerary",
        days: [
          "Arrive in Srinagar. Shikara ride on Dal Lake, the Mughal gardens (Nishat, Shalimar, Chashme Shahi) and a night on a houseboat.",
          "Day trip to Gulmarg (about 50 km): Gulmarg Gondola Phase 1, and Phase 2 to Apharwat if open; back to Srinagar.",
          "Drive to Pahalgam (about 95 km) via the Pampore saffron fields and Awantipora ruins. Afternoon by the Lidder River.",
          "Betaab Valley or Aru Valley by Pahalgam union taxi in the morning, then back to Srinagar for your flight.",
        ],
      },
      {
        h: "5-day Kashmir itinerary",
        days: [
          "Arrive in Srinagar; Dal Lake shikara ride, Mughal gardens, houseboat night.",
          "Day trip to Sonamarg (about 80 km) and Thajiwas Glacier.",
          "Day trip to Gulmarg and the gondola.",
          "Drive to Pahalgam; Betaab Valley and Chandanwari by union taxi.",
          "Aru Valley in the morning, then back to Srinagar and depart.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Two nights in Srinagar are standard, one of them on a Dal or Nigeen Lake houseboat. A night in Pahalgam saves a long return drive and lets you see the valleys in the morning light. Gulmarg and Sonamarg are usually day trips, but a night in Gulmarg is worth it in winter for snow and skiing.",
        ],
      },
      {
        h: "Getting around Kashmir",
        list: [
          "One cab from Srinagar covers the whole trip, with the same driver",
          "In Pahalgam, Betaab, Aru and Chandanwari are visited in local union taxis, not your outstation cab",
          "At Gulmarg, the gondola tickets are booked online; ponies and guides are hired locally",
          "At Sonamarg, ponies go to Thajiwas Glacier, and in summer local taxis go to Zero Point beyond Zojila",
        ],
      },
      {
        h: "Best time for this itinerary",
        p: [
          "April to June and September to October suit this plan best. In winter, keep Gulmarg as the snow day and check whether the Sonamarg road is open. In July and August, start early on Pahalgam days to stay ahead of Amarnath Yatra traffic.",
        ],
      },
      {
        h: "Adding Vaishno Devi, Gurez or Doodhpathri",
        p: [
          "Add two days for Mata Vaishno Devi at Katra, now linked to Srinagar by Vande Bharat trains. Add a day for Doodhpathri or Yusmarg, quiet meadows near Srinagar. Add two days for the remote Gurez valley between May and October. Agents on Tavel Package can quote any of these as a customised plan.",
        ],
      },
      {
        h: "Kashmir itinerary from Delhi by train",
        p: [
          "Travellers who prefer rail can take a train from Delhi to Shri Mata Vaishno Devi Katra, then the Vande Bharat train from Katra to Srinagar across the Chenab Bridge. This adds about a day each way compared with flying, and pairs naturally with a Vaishno Devi visit at the start or end of the trip.",
        ],
      },
      {
        h: "Adjusting the plan for families and couples",
        p: [
          "Families with small children or older parents should keep Gulmarg to Phase 1 of the gondola, add a rest afternoon in Srinagar, and choose a hotel over a houseboat for most nights. Honeymooners often swap the Sonamarg day for a second houseboat night on Nigeen Lake, a candle-light dinner, or an overnight stay in Gulmarg. Agents can tailor either version and include the local taxis and gondola guidance.",
        ],
      },
      {
        h: "Driving distances on this itinerary",
        list: [
          "Srinagar airport to Dal Lake: about 15 km",
          "Srinagar to Gulmarg: about 50 km, 1.5 to 2 hours",
          "Srinagar to Sonamarg: about 80 km, 2.5 to 3 hours",
          "Srinagar to Pahalgam: about 95 km, 2.5 to 3 hours",
          "Pahalgam to Betaab Valley: about 15 km by union taxi",
        ],
      },
      {
        h: "Budget and premium versions",
        p: [
          "The same route works at very different budgets. A budget plan uses standard hotels, a B or C category houseboat and a sedan cab. A premium plan uses deluxe houseboats, boutique hotels in Pahalgam and Gulmarg, an SUV and private guides. Prices depend on season, hotel category and group size, so share yours and compare up to 3 itemised quotes.",
        ],
      },
    ],
    faqs: [
      { q: "Can I do this itinerary in winter?", a: "Yes. Keep Gulmarg as the snow day, check each morning whether the Sonamarg road is open, and add a buffer day for possible flight delays or highway closures after heavy snow." },
      { q: "Which airport should I fly into for this itinerary?", a: "Srinagar (SXR). It has direct flights from Delhi, Mumbai, Bengaluru, Kolkata and other cities, and is about 15 km from Dal Lake." },
      { q: "Is Kashmir safe for tourists?", a: "Lakhs of tourists visit Srinagar, Gulmarg, Pahalgam and Sonamarg every year. Check current government advisories before travel, use registered hotels and taxis, and follow local guidance on any day of restrictions." },
      { q: "What does a 5-day Kashmir package usually include?", a: "Hotel and houseboat stays with breakfast and often dinner, a private cab for Srinagar, Gulmarg, Sonamarg and Pahalgam, airport transfers and a shikara ride. Gondola tickets and Pahalgam union taxis are often extra; check the quote." },
      { q: "Is 4 days enough for Kashmir?", a: "Four days cover Srinagar, Gulmarg and Pahalgam at a steady pace. Take five or six days to add Sonamarg and slower mornings." },
      { q: "Should I stay in Pahalgam or do it as a day trip?", a: "Stay a night if you can. Pahalgam is about 95 km from Srinagar, and staying lets you see Betaab, Aru and Chandanwari without rushing." },
      { q: "Which is better for a short trip, Gulmarg or Sonamarg?", a: "Gulmarg, for the gondola and snow for more of the year. Add Sonamarg if you have a fifth day." },
      { q: "Do I need separate taxis in Pahalgam?", a: "Yes. Sightseeing beyond Pahalgam town is done in local union taxis at fixed rates." },
    ],
  },

  "srinagar-houseboat-guide": {
    intro:
      "A night on a Srinagar houseboat is the classic Kashmir experience: a carved wooden boat moored on Dal Lake, Nigeen Lake or the Jhelum, reached by shikara, with meals cooked on board. Houseboats are graded by category by the J&K Tourism department, from deluxe down to basic, so the category in your quote matters more than the photos. Most travellers stay one night on a houseboat and the rest in hotels.",
    sections: [
      {
        h: "Dal Lake, Nigeen Lake or the Jhelum?",
        list: [
          "Dal Lake: the most famous, close to the Boulevard, markets and Mughal gardens; busier and livelier",
          "Nigeen Lake: quieter and greener, further from the traffic, popular with couples",
          "Jhelum river: fewer boats, simpler stays, close to the old city",
        ],
      },
      {
        h: "Houseboat categories explained",
        p: [
          "The J&K Tourism department classifies houseboats into categories such as deluxe and A to D, based on rooms, furnishing, bathrooms and service. Deluxe boats have carved walnut panelling, larger rooms and attached modern bathrooms; lower categories are simpler. When comparing quotes, check the category, the number of bedrooms on the boat, whether heating is provided in winter, and which meals are included.",
        ],
      },
      {
        h: "What a houseboat stay includes",
        list: [
          "Shikara transfer between the ghat and the houseboat",
          "A bedroom with attached bathroom, a sitting room and a sun deck",
          "Breakfast and dinner on many plans; Kashmiri dishes on request",
          "Heating (electric blankets or heaters) in winter on better categories",
          "Vendors arrive by shikara selling flowers, saffron and crafts; buying is optional",
        ],
      },
      {
        h: "Tips for a good houseboat stay",
        list: [
          "Book through a registered agent or the owner's association, and confirm the category in writing",
          "Ask whether the boat is on the open lake or in a back channel; views differ a lot",
          "In winter, confirm heating and hot water",
          "Keep valuables with you; most boats have no locker",
          "Agree on any extra shikara rides and their rate before you go",
        ],
      },
      {
        h: "One night or more?",
        p: [
          "One night gives you the sunset, the quiet evening on the water and the morning floating market. Families with small children and older travellers often prefer one night, then a hotel with lifts and larger bathrooms. Couples on a honeymoon often choose two nights on a Nigeen Lake boat.",
        ],
      },
      {
        h: "Houseboats in winter",
        p: [
          "Dal Lake's surface can partially freeze during Chillai Kalan, from late December to January. Houseboats stay open but are cold; choose a higher-category boat with heating, or stay in a heated hotel and take a daytime shikara ride instead.",
        ],
      },
      {
        h: "A short history of Srinagar houseboats",
        p: [
          "Houseboats became a Srinagar tradition in the late 19th century. Under the Dogra rulers, outsiders were not allowed to own land in Kashmir, so British and other visitors had large wooden boats built to live on Dal Lake and the Jhelum. Local craftsmen decorated them with walnut carving and khatamband ceilings, and the style has been passed down in owning families since.",
        ],
      },
      {
        h: "Houseboat or hotel: which suits you?",
        list: [
          "Choose a houseboat for the lake views, the quiet evenings and a unique Kashmiri stay",
          "Choose a hotel for lifts, larger bathrooms, central heating and easier access by road",
          "Many itineraries mix both: one houseboat night, the rest in hotels in Srinagar and Pahalgam",
        ],
      },
      {
        h: "Shikara rides on Dal Lake",
        p: [
          "Shikara rides are charged by the hour at rates displayed at the ghats. A one-hour ride covers the lake in front of the Boulevard; two to three hours take in Char Chinar island, the floating gardens and the lanes of the lake villages. Sunset rides are the most popular, and early-morning rides catch the floating market.",
        ],
      },
      {
        h: "The floating vegetable market",
        p: [
          "At dawn, farmers from the lake villages trade vegetables from their shikaras in the inner Dal, a scene that lasts only an hour or two. Ask your houseboat owner to arrange an early shikara; you need to be on the water by around 5 to 6 am in summer.",
        ],
      },
      {
        h: "Getting to and from your houseboat",
        p: [
          "Houseboats on Dal and Nigeen Lake are reached only by shikara from a numbered ghat on the shore. Your owner sends a shikara to meet you, usually included in the stay. Carry a small overnight bag if you can; large suitcases are fine but awkward on the shikara. Note your ghat number for evening returns after dinner in the city.",
        ],
      },
    ],
    faqs: [
      { q: "Can families with children stay on a houseboat?", a: "Yes. Choose a higher-category boat with several bedrooms, keep children supervised on the open deck and shikara, and consider one houseboat night with the rest in a hotel." },
      { q: "How much time should I spend on a shikara ride?", a: "One hour for a short ride in front of the Boulevard; two to three hours to see Char Chinar, the floating gardens and the lake villages." },
      { q: "What time is check-in on a houseboat?", a: "Usually around noon, with a shikara pick-up from the ghat. Tell the owner your arrival time so the boat is ready." },
      { q: "Is food included on a Srinagar houseboat?", a: "Many plans include breakfast and dinner cooked on board. Confirm the meal plan, and ask for Kashmiri dishes if you want to try them." },
      { q: "Is a houseboat stay in Srinagar safe?", a: "Yes, when booked through registered owners or agents. Confirm the category and the boat's location before you arrive." },
      { q: "Which is better, Dal Lake or Nigeen Lake?", a: "Dal Lake is livelier and closer to the city; Nigeen Lake is quieter and greener. Couples often prefer Nigeen." },
      { q: "Do houseboats have heating in winter?", a: "Higher-category houseboats provide heaters or electric blankets. Confirm heating and hot water when booking a winter stay." },
      { q: "How many nights should I stay on a houseboat?", a: "One night is enough for most travellers. Choose two on a quieter lake for a slower, more romantic stay." },
    ],
  },

  "gulmarg-gondola-guide": {
    intro:
      "The Gulmarg Gondola runs in two phases: Phase 1 from Gulmarg to Kongdoori, and Phase 2 from Kongdoori up to the Apharwat ridge, close to 4,000 m, making it one of the highest cable cars in the world. Tickets are sold online by the Jammu and Kashmir Cable Car Corporation and often sell out in peak months, so book before you travel and carry the ID used for booking. Phase 2 closes in strong wind or bad weather.",
    sections: [
      {
        h: "Phase 1 and Phase 2: what you see",
        list: [
          "Phase 1, Gulmarg to Kongdoori: a gentler ride over the forest to a meadow and snow bowl; good for families and first-timers",
          "Phase 2, Kongdoori to Apharwat: a steep climb to the high ridge with snow for most of the year and wide views of the Pir Panjal",
          "In winter, Phase 2 serves Gulmarg's high ski runs; in summer, visitors walk on the ridge and snow patches",
        ],
      },
      {
        h: "How to book Gulmarg Gondola tickets",
        p: [
          "Book on the official J&K Cable Car Corporation website for your chosen date and phase, using the name and ID of each passenger. Print or save the e-ticket and carry the same ID. Tickets for peak weeks (spring, May and June, Christmas and New Year) can sell out days ahead. Avoid unofficial resellers; prices are fixed by the corporation.",
        ],
      },
      {
        h: "Best time to ride the gondola",
        p: [
          "Go early in the morning. Queues build from mid-morning, and clouds and wind often roll in after midday, which can stop Phase 2. In winter, the first cabins carry skiers to Apharwat. From May to October, Apharwat keeps snow patches while Gulmarg's meadow is green.",
        ],
      },
      {
        h: "What to wear and carry",
        list: [
          "Warm layers, gloves and a cap: Apharwat is far colder than Gulmarg even in summer",
          "Waterproof shoes or rented snow boots in winter and spring",
          "Sunglasses and sunscreen for the glare off the snow",
          "Water and a snack; facilities at the top are limited",
        ],
      },
      {
        h: "Altitude and health",
        p: [
          "Apharwat is close to 4,000 m. Walk slowly at the top, drink water and come down if you feel unwell. Travellers with heart or breathing conditions, and pregnant women, should take medical advice before going to Phase 2; Phase 1 is a gentler option.",
        ],
      },
      {
        h: "Gulmarg Gondola in a Kashmir trip",
        p: [
          "Most visitors do Gulmarg as a day trip from Srinagar, about 50 km away. Keep a flexible day in your itinerary so that the gondola can move if weather closes Phase 2. Agents on Tavel Package can build the Gulmarg day into a customised Kashmir package; gondola tickets are personal and usually booked by the traveller.",
        ],
      },
      {
        h: "Skiing at Gulmarg",
        p: [
          "Gulmarg is India's best-known ski resort, with the season usually from about December to March. Beginners learn on the gentle slopes near Gulmarg with instructors and rented equipment, while experienced skiers use Phase 2 of the gondola to reach the high, ungroomed runs from Apharwat. Off-piste skiing there carries avalanche risk, so go only with a qualified local guide.",
        ],
      },
      {
        h: "Other things to do in Gulmarg",
        list: [
          "Walk or ride a pony to Khilanmarg, a meadow above Gulmarg",
          "Visit St. Mary's Church, built in 1902",
          "See the golf course, one of the highest in the world",
          "In summer, walk to Alpather Lake below Apharwat",
          "In winter, sledge rides and snow play on the meadow",
        ],
      },
      {
        h: "The gondola in each season",
        list: [
          "Winter (December to March): snow on both phases, ski runs from Apharwat, and the biggest crowds around Christmas and New Year",
          "Spring (April to May): snow remains at Kongdoori and Apharwat while Gulmarg turns green",
          "Summer (June to August): green meadows below, snow patches on the ridge, and clear mornings",
          "Autumn (September to November): the clearest views and the quietest queues",
        ],
      },
      {
        h: "Combining Gulmarg with other places",
        p: [
          "Gulmarg is usually a day trip from Srinagar, but staying a night lets you catch the first gondola before the crowds. It pairs with Doodhpathri or Yusmarg, quiet meadows on the same side of the valley, or with a winter ski week. Agents on Tavel Package can arrange the transfers, stays and ski instruction.",
        ],
      },
      {
        h: "Getting to the gondola base",
        p: [
          "The gondola base station is a short walk or pony ride from Gulmarg's main meadow and car park. In snow, the path can be icy, so wear boots with grip. Arrive about 30 minutes before your ticket time with the ID used for booking, and keep the e-ticket ready at the gate.",
        ],
      },
    ],
    faqs: [
      { q: "How long does the Gulmarg Gondola ride take?", a: "Each phase takes only a few minutes in the cabin, but allow two to four hours in total for queues, time at Kongdoori and Apharwat, and the ride down." },
      { q: "What if Phase 2 is closed on my day?", a: "Ride Phase 1 to Kongdoori instead, or keep a flexible second day in Gulmarg. Phase 2 often reopens once wind or weather improves." },
      { q: "Can children ride the Gulmarg Gondola?", a: "Yes. Children ride with a ticket like adults; Phase 1 is the easier choice for small children, and Phase 2 is very cold and high." },
      { q: "Is it necessary to book Gulmarg Gondola tickets online?", a: "Yes. Tickets are sold online by the J&K Cable Car Corporation and often sell out in peak season." },
      { q: "Which phase of the Gulmarg Gondola is better?", a: "Phase 2 for snow and the highest views; Phase 1 for families, older travellers and days when Phase 2 is closed." },
      { q: "Does the Gulmarg Gondola run in summer?", a: "Yes. It runs most of the year, though Phase 2 can close in strong wind or bad weather." },
      { q: "How high is the Gulmarg Gondola?", a: "Phase 2 reaches the Apharwat ridge close to 4,000 m, one of the highest cable car points in the world." },
    ],
  },

  "pahalgam-itinerary-guide": {
    intro:
      "Two days in Pahalgam is ideal: arrive from Srinagar (about 95 km) via the Pampore saffron fields and spend the afternoon by the Lidder River, then use the second day for Betaab Valley, Chandanwari and Aru Valley in Pahalgam's local union taxis. One day is possible but rushed. Pahalgam is at about 2,130 m and is best from April to October, with snow from December to February.",
    sections: [
      {
        h: "2-day Pahalgam itinerary",
        days: [
          "Srinagar to Pahalgam via Pampore saffron fields and the Awantipora temple ruins. Afternoon walk along the Lidder River and Pahalgam market.",
          "Morning union taxi to Betaab Valley and Chandanwari; afternoon to Aru Valley for meadow walks or a pony ride. Evening back in Pahalgam or drive to Srinagar.",
        ],
      },
      {
        h: "Places to see in Pahalgam",
        list: [
          "Betaab Valley, about 15 km away on the Chandanwari road, named after the 1983 film shot there",
          "Chandanwari, about 16 km away, the start of the Amarnath Yatra trek, with a snow bridge that often lasts into summer",
          "Aru Valley, about 12 km up the western Lidder, base for Kolahoi glacier and Tarsar Marsar treks",
          "The Lidder River, for walks, picnics and trout fishing with a licence",
        ],
      },
      {
        h: "How Pahalgam union taxis work",
        p: [
          "Outstation cabs from Srinagar drop you in Pahalgam, but the sightseeing points beyond town are served by the Pahalgam taxi union at fixed, displayed rates per point or per package. Ask your agent whether these local taxis are included in your quote. Ponies are available for meadow rides and are hired locally.",
        ],
      },
      {
        h: "Where to stay in Pahalgam",
        p: [
          "Hotels line the Lidder on both sides of town, from simple guest houses to riverside resorts. Rooms with river views fill first in May and June. In winter, choose a hotel with central heating; many smaller places close.",
        ],
      },
      {
        h: "Pahalgam during the Amarnath Yatra",
        p: [
          "The Amarnath Yatra usually runs in July and August, with Pahalgam and Chandanwari on one of its two routes. Expect heavy security, traffic and restricted access to Chandanwari on some days. If you are not a yatri, plan Pahalgam for other months or start very early.",
        ],
      },
      {
        h: "Pahalgam in winter",
        p: [
          "From December to February Pahalgam is under snow and much quieter. Betaab and Aru may be reachable only partly, depending on snow clearance. It suits travellers who want snow walks and a calm stay; carry heavy woollens and plan for short daylight hours.",
        ],
      },
      {
        h: "Stops on the way from Srinagar to Pahalgam",
        list: [
          "Pampore, known for its GI-tagged saffron fields, which flower around October and November",
          "Awantipora, with the ruins of temples from the 9th century",
          "Bijbehara and Anantnag, with the cricket bat workshops along the highway",
          "The Martand Sun Temple ruins near Anantnag, an 8th-century site worth a short detour",
        ],
      },
      {
        h: "Treks that start from Pahalgam",
        p: [
          "Pahalgam is a base for some of Kashmir's best-known treks: Kolahoi glacier and the Tarsar Marsar lakes from Aru, and the Amarnath route via Chandanwari and Sheshnag during the yatra. These are multi-day treks that need a registered guide, permits where required and proper gear, and are usually done between July and September.",
        ],
      },
      {
        h: "Pahalgam for families",
        p: [
          "Pahalgam suits families well: drives to the valleys are short, pony rides are gentle, and riverside hotels give children space to play. Keep children away from the fast-flowing Lidder, carry warm layers for the evenings, and plan Betaab and Aru as separate half days so that little ones are not tired out.",
        ],
      },
      {
        h: "Food in Pahalgam",
        p: [
          "Pahalgam's restaurants serve Kashmiri dishes such as rogan josh, yakhni and Kashmiri pulao, along with North Indian and vegetarian food. Trout from the Lidder valley is a local speciality, and roadside stalls serve kahwa and noon chai.",
        ],
      },
      {
        h: "Best time of day for each valley",
        list: [
          "Betaab Valley: morning, before tour groups arrive and when the light is soft",
          "Chandanwari: late morning, after the snow bridge area warms and the road is clear",
          "Aru Valley: afternoon, for meadow walks and a relaxed pony ride",
          "Lidder River: early evening walks along the riverbank in town",
        ],
      },
    ],
    faqs: [
      { q: "Which is better in Pahalgam, Betaab Valley or Aru Valley?", a: "Betaab is the classic green valley with a stream and easy paths, best in the morning. Aru is quieter and more open, with meadow walks, pony rides and access to longer treks. With time, see both on the same day." },
      { q: "Can I see Pahalgam in one day from Srinagar?", a: "Yes, but it is rushed: about 5 to 6 hours of driving plus union taxi time. Stay a night if you can." },
      { q: "Is Pahalgam good for a honeymoon?", a: "Yes. Riverside hotels, meadow walks in Aru and Betaab, and quieter evenings than Srinagar make it a popular honeymoon stop, usually for one or two nights." },
      { q: "What should I buy in Pahalgam?", a: "Woollens, Kashmiri shawls, dry fruit and saffron are sold in the main market. For high-value items such as pashmina, prefer government emporiums in Srinagar." },
      { q: "What are the best treks near Pahalgam?", a: "Tarsar Marsar and Kolahoi glacier from Aru Valley, usually between July and September with a registered guide." },
      { q: "How many days are enough for Pahalgam?", a: "Two days: one for the drive and the Lidder, one for Betaab, Chandanwari and Aru by union taxi." },
      { q: "How far is Pahalgam from Srinagar?", a: "About 95 km, around 2.5 to 3 hours by road via Anantnag." },
      { q: "Can I use my own cab for Pahalgam sightseeing?", a: "No. Points beyond town are served by Pahalgam's local union taxis at fixed rates." },
      { q: "Is Pahalgam good in winter?", a: "Yes, for snow and quiet stays, though some valleys are only partly reachable and many small hotels close." },
    ],
  },

  "sonamarg-day-trip-guide": {
    intro:
      "Sonamarg is an easy day trip from Srinagar: about 80 km on the Srinagar to Leh highway, 2.5 to 3 hours each way through the Sindh valley. The main sight is Thajiwas Glacier, a short pony ride or walk from the town, and in summer local taxis go up to Zero Point beyond Zojila Pass. The best months are May to October; in winter the road can stop short of Sonamarg after snowfall.",
    sections: [
      {
        h: "Sonamarg day trip plan",
        days: [
          "Leave Srinagar by 8 am, drive through Ganderbal and Kangan along the Sindh river. Reach Sonamarg by about 10:30, take a pony or walk to Thajiwas Glacier, and in summer continue by local taxi to Zojila and Zero Point. Leave Sonamarg by 3 or 4 pm to reach Srinagar before dark.",
        ],
      },
      {
        h: "Things to do in Sonamarg",
        list: [
          "Thajiwas Glacier by pony or on foot, with snow usually lasting into summer",
          "Zojila Pass and Zero Point by local taxi in summer",
          "River rafting on the Sindh in summer, with registered operators",
          "The start of the Kashmir Great Lakes trek, for trekkers with more days",
          "Walks in the meadows along the Sindh",
        ],
      },
      {
        h: "Ponies and local taxis",
        p: [
          "Ponies to Thajiwas are run by local pony owners at rates set by the local authority; agree on the route and price before starting. Trips beyond Sonamarg to Zojila and Zero Point are done in local taxis in season. Ask your agent which of these are included in your package.",
        ],
      },
      {
        h: "Sonamarg in winter",
        p: [
          "Sonamarg gets heavy snow from about December to March. Tourist access depends on road clearance, and the highway is often closed beyond a point for days after snowfall. If you plan a winter visit, check with your driver or the local police on the morning, and keep Gulmarg as a backup snow day.",
        ],
      },
      {
        h: "Day trip or overnight?",
        p: [
          "Most visitors go for the day. Stay a night if you are trekking, rafting, or continuing to Ladakh over Zojila, and choose a hotel with heating outside summer. An overnight stay also lets you see the glacier valley in the quiet morning light.",
        ],
      },
      {
        h: "Sonamarg on the way to Ladakh",
        p: [
          "Sonamarg is the last Kashmir stop before Zojila on the road to Drass, Kargil and Leh. Travellers on a Srinagar to Leh road trip often spend their first night here or in Kargil. The road over Zojila is usually open from about May to November.",
        ],
      },
      {
        h: "The Kashmir Great Lakes trek",
        p: [
          "The Kashmir Great Lakes trek starts near Sonamarg and crosses high passes past a chain of alpine lakes, including Vishansar, Kishansar, Gadsar and Gangabal, before ending near Naranag. It usually takes about a week and is done between July and September with a registered operator. It is one of the most scenic treks in India and needs good fitness.",
        ],
      },
      {
        h: "What to wear for Sonamarg",
        list: [
          "Warm layers even in summer; Thajiwas and Zojila are cold and windy",
          "Waterproof shoes or rented snow boots in spring and early summer",
          "Sunglasses and sunscreen for the snow glare",
          "Heavy woollens and gloves from October to April",
        ],
      },
      {
        h: "Road conditions and checkpoints",
        p: [
          "The road from Srinagar to Sonamarg is a good highway along the Sindh, with army and police checkpoints on the way. Carry ID for every traveller. Beyond Sonamarg, the road to Zojila is narrow and unpaved in parts and is used by heavy trucks, which is why local taxis with experienced drivers are used for Zero Point.",
        ],
      },
      {
        h: "Food and facilities in Sonamarg",
        p: [
          "Sonamarg has dhabas and restaurants serving Kashmiri and North Indian food near the taxi stand and market, plus hotels and a few camps. Facilities at Thajiwas and Zero Point are basic, so carry water and snacks and use washrooms in Sonamarg before starting.",
        ],
      },
      {
        h: "Best time of day to visit",
        p: [
          "Leave Srinagar early. The drive is smoother before mid-morning traffic, Thajiwas is calmer before tour groups arrive, and clouds often build over the glacier in the afternoon. Aim to start back by 3 or 4 pm, as the road through the Sindh valley is better driven in daylight.",
        ],
      },
    ],
    faqs: [
      { q: "How long should I spend at Thajiwas Glacier?", a: "Plan two to three hours, including the pony ride or walk each way and time on the snow. In summer, add another two to three hours if you also go to Zojila and Zero Point by local taxi." },
      { q: "Do I need a permit for Zojila Pass?", a: "Indian tourists do not need a permit for Zojila itself, but access depends on the road being open and on local taxi rules from Sonamarg. Foreign nationals should check current rules." },
      { q: "Is Sonamarg good for families?", a: "Yes, as a day trip. The pony ride to Thajiwas is gentle, but it gets cold near the glacier, so carry warm layers for children." },
      { q: "What is the best month to visit Sonamarg?", a: "May to October, when the road is reliably open and Thajiwas still has snow. June and September are the most comfortable." },
      { q: "Is Sonamarg worth a day trip from Srinagar?", a: "Yes. The drive along the Sindh and Thajiwas Glacier make a full, scenic day, especially from May to October." },
      { q: "How far is Sonamarg from Srinagar?", a: "About 80 km, around 2.5 to 3 hours each way on the Srinagar to Leh highway." },
      { q: "Can I visit Zojila Pass from Sonamarg?", a: "Yes, in summer, by local taxi from Sonamarg up to Zojila and Zero Point, when the road is open." },
      { q: "Is there snow in Sonamarg in summer?", a: "Snow usually remains near Thajiwas Glacier and on the higher slopes into summer, though the valley floor is green." },
    ],
  },
};
