import type { BlogPost } from "./types";

// Third batch of full rewrites of thin Kashmir posts, keyed by existing slug
// (see blog/index.ts). No em dashes, no invented prices.

export const KASHMIR_UPGRADES_3: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = {
  "kashmir-honeymoon-itinerary-6-days": {
    intro:
      "A 6-day Kashmir honeymoon covers Srinagar, Gulmarg and Pahalgam at a relaxed pace: a houseboat night on Dal or Nigeen Lake, two nights in Pahalgam by the Lidder River, a night in Gulmarg for snow or meadows, and a final night back in Srinagar. Fly into Srinagar, keep drive days short, and choose the season by the mood you want: snow from December to February, blossom and tulips in spring, golden chinars in October.",
    sections: [
      {
        h: "6-day Kashmir honeymoon itinerary",
        days: [
          "Arrive in Srinagar. Check in to a Dal or Nigeen Lake houseboat, sunset shikara ride, dinner on board.",
          "Mughal gardens (Nishat, Shalimar, Chashme Shahi), then drive to Pahalgam (about 95 km) via the Pampore saffron fields.",
          "Pahalgam: Betaab Valley and Aru Valley by local union taxi, an evening walk by the Lidder.",
          "Pahalgam to Gulmarg via Srinagar (about 150 km in total). Evening on the Gulmarg meadow.",
          "Gulmarg Gondola to Kongdoori, and Apharwat if open. Snow play, a ski lesson in winter, or a pony ride to Khilanmarg in summer.",
          "Back to Srinagar for a last stroll in the old city or a final shikara ride, then depart.",
        ],
      },
      {
        h: "Choosing the right season for your honeymoon",
        list: [
          "December to February: snow in Gulmarg and Pahalgam, cosy heated rooms, Chillai Kalan cold from late December",
          "March to May: almond blossom, the tulip garden in late March and April, pleasant days",
          "June to August: green meadows and long days; Amarnath Yatra traffic on Pahalgam roads in July and August",
          "September to November: clear skies, autumn colours and golden chinar leaves from late October",
        ],
      },
      {
        h: "Where couples like to stay",
        list: [
          "Srinagar: a deluxe houseboat on Nigeen Lake for quiet, or on Dal Lake for views and convenience",
          "Pahalgam: a riverside hotel with Lidder views",
          "Gulmarg: a hotel close to the gondola, with heating in winter",
          "Ask for honeymoon touches such as flower decoration, a cake or a candle-light dinner when booking",
        ],
      },
      {
        h: "Romantic experiences in Kashmir",
        list: [
          "A sunset or early-morning shikara ride and the floating vegetable market",
          "A photo shoot in traditional Kashmiri dress (pheran) at a Mughal garden",
          "The Gulmarg Gondola to snow on Apharwat",
          "A riverside walk in Pahalgam's Aru Valley",
          "Kahwa by the lake and a wazwan dinner",
          "Shopping for pashmina, papier-mache and saffron in Srinagar",
        ],
      },
      {
        h: "Getting around",
        p: [
          "One private cab from Srinagar covers the whole trip. In Pahalgam, Betaab, Aru and Chandanwari are visited in local union taxis at fixed rates, and in Gulmarg the gondola is booked online. Your agent can include the union taxis and arrange the gondola guidance so the days run smoothly.",
        ],
      },
      {
        h: "Honeymoon in winter: what to know",
        p: [
          "A snow honeymoon is magical but needs planning: choose heated hotels and a higher-category houseboat with heaters, pack thermals and proper boots, and keep a buffer day because snow can delay flights or close the Jammu to Srinagar highway. Gulmarg is the most reliable snow, and Gondola Phase 2 can close in strong wind.",
        ],
      },
      {
        h: "What a Kashmir honeymoon costs depends on",
        list: [
          "Flights to Srinagar from your city, which rise around holidays",
          "Houseboat and hotel categories, and peak weeks such as Christmas, New Year and tulip season",
          "Private cab days and Pahalgam union taxis",
          "Gondola tickets, activities and honeymoon extras",
        ],
        p: ["Share your dates and budget to compare up to 3 itemised honeymoon quotes from verified agents on Tavel Package."],
      },
      {
        h: "Adding Sonamarg or a slower pace",
        p: [
          "With a seventh day, add a day trip to Sonamarg and Thajiwas Glacier. Couples who prefer a slower trip often drop Gulmarg's overnight stay and do it as a day trip, or swap a Pahalgam night for a second houseboat night on Nigeen Lake.",
        ],
      },
      {
        h: "Day-by-day pacing tips for couples",
        list: [
          "Keep the arrival day light; flights often land around midday and a sunset shikara ride is the perfect first evening",
          "Start the Pahalgam drive by mid-morning so you reach the Lidder in time for a riverside walk",
          "Leave Pahalgam early on day 4; the drive to Gulmarg via Srinagar takes most of the day",
          "Book the first gondola slot in Gulmarg to beat queues and catch the clearest views of the peaks",
          "Plan the departure flight for the afternoon so the last morning can be spent on the lake or in the old city",
        ],
      },
      {
        h: "Food to try together",
        list: [
          "Wazwan dishes such as rogan josh, gushtaba and rista at a traditional restaurant in Srinagar",
          "Kahwa, the saffron and almond green tea, served in a samovar on the houseboat",
          "Noon chai, the pink salt tea, with fresh girda bread from a local bakery in the morning",
          "Vegetarian Kashmiri dishes such as dum aloo, nadru yakhni and haak saag",
          "Harissa, a slow-cooked winter breakfast dish sold in Srinagar's old city from November to March",
        ],
      },
      {
        h: "Shopping and souvenirs for newlyweds",
        p: [
          "Srinagar's Polo View, Lal Chowk and the old city lanes are the places for genuine pashmina shawls, crewel and chain-stitch embroidery, papier-mache boxes, walnut-wood carving and Kashmiri saffron from Pampore. Buy pashmina from government emporiums or shops that explain the weave and offer a certificate, and buy saffron in sealed packs. Avoid buying from boats or touts who quote prices without showing quality.",
        ],
      },
    ],
    faqs: [
      { q: "Is Kashmir good for a honeymoon?", a: "Yes. Houseboat stays, snow in winter, flowers in spring and riverside valleys make Kashmir one of India's most popular honeymoon destinations." },
      { q: "How many days are ideal for a Kashmir honeymoon?", a: "Six days covers Srinagar, Pahalgam and Gulmarg comfortably; add a day for Sonamarg." },
      { q: "Which is the best month for a Kashmir honeymoon?", a: "December to February for snow, April for tulips and blossom, and October for autumn colours." },
      { q: "Should we stay on a houseboat for our honeymoon?", a: "Most couples stay at least one night on a deluxe houseboat, often on quieter Nigeen Lake, and the rest in hotels." },
      { q: "Is Gulmarg or Pahalgam better for couples?", a: "Gulmarg for snow and the gondola, Pahalgam for riverside stays and quiet valleys. A 6-day plan includes both." },
      { q: "Do honeymoon packages include a candle-light dinner?", a: "Many do, or can add one on request. Mention the extras you want when asking for quotes." },
    ],
  },

  "kashmir-trip-from-delhi-7-days": {
    intro:
      "A 7-day Kashmir trip from Delhi usually flies to Srinagar (about 1.5 hours) and covers Srinagar, Gulmarg, Sonamarg and Pahalgam with a houseboat night. Travellers who prefer rail can take a train to Katra and the Vande Bharat to Srinagar, adding Vaishno Devi. Driving the whole way is about 850 km via Jammu and suits only those who want a road trip.",
    sections: [
      {
        h: "7-day Kashmir itinerary from Delhi",
        days: [
          "Fly Delhi to Srinagar. Shikara ride on Dal Lake and a houseboat night.",
          "Srinagar: Mughal gardens, Shankaracharya Temple and the old city.",
          "Day trip to Gulmarg and the gondola.",
          "Day trip to Sonamarg and Thajiwas Glacier.",
          "Drive to Pahalgam via Pampore saffron fields and Awantipora ruins.",
          "Pahalgam: Betaab Valley, Aru Valley and Chandanwari by union taxi.",
          "Back to Srinagar and fly to Delhi.",
        ],
      },
      {
        h: "Delhi to Kashmir: flight, train or road",
        list: [
          "Flight: Delhi to Srinagar in about 1.5 hours, with many daily flights",
          "Train: Delhi to Shri Mata Vaishno Devi Katra, then Vande Bharat to Srinagar across the Chenab Bridge",
          "Road: about 850 km via Ambala, Jalandhar, Pathankot, Jammu and the Banihal tunnels; two days with a night in Jammu",
        ],
      },
      {
        h: "Adding Vaishno Devi from Delhi",
        p: [
          "Many travellers from Delhi combine Kashmir with Mata Vaishno Devi: train to Katra, a day for the yatra, then the Vande Bharat to Srinagar. This turns the trip into 8 or 9 days and replaces the return flight with a train, or keeps the flight back to Delhi from Srinagar.",
        ],
      },
      {
        h: "Best time for a Kashmir trip from Delhi",
        p: [
          "April to June is the most popular window, coinciding with Delhi's summer heat, when Kashmir's valleys are cool and green. September to November is clear and quieter. December to February brings snow; flights from Delhi can be delayed by North Indian fog, so keep a buffer day.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Plan two or three nights in Srinagar (one on a houseboat), two in Pahalgam and the rest in Srinagar or Gulmarg. A night in Gulmarg is worth it in winter. Hotels near the Boulevard make Srinagar sightseeing easy.",
        ],
      },
      {
        h: "Local transport in Kashmir",
        list: [
          "One cab from Srinagar for the whole trip, with the same driver",
          "Pahalgam union taxis for Betaab, Aru and Chandanwari",
          "Ponies at Sonamarg for Thajiwas Glacier",
          "Gulmarg Gondola tickets booked online in advance",
        ],
      },
      {
        h: "What to pack from Delhi",
        list: [
          "Warmer clothes than you expect, even in summer, for Gulmarg, Sonamarg and evenings",
          "Heavy woollens, thermals and boots from November to March",
          "Sunscreen and sunglasses for snow and high altitude glare",
          "A postpaid mobile connection; prepaid SIMs from other states do not work in Jammu and Kashmir",
        ],
      },
      {
        h: "Getting a quote",
        p: [
          "Share your Delhi travel dates, how you want to travel and your hotel category. Up to 3 verified Kashmir agents on Tavel Package send customised itineraries and itemised prices.",
        ],
      },
      {
        h: "Day trips from Srinagar explained",
        p: [
          "Gulmarg is about 50 km from Srinagar, roughly 1.5 to 2 hours by road through Tangmarg, and the gondola runs in two phases: Phase 1 to Kongdoori at about 3,050 m and Phase 2 to Apharwat at about 3,980 m. Sonamarg is about 80 km away along the Sindh river, roughly 2.5 to 3 hours, and Thajiwas Glacier is reached by pony, on foot or by local vehicle from the town. Both are comfortable day trips, which lets you keep the same Srinagar hotel for several nights and avoid packing every day.",
        ],
      },
      {
        h: "Pahalgam sightseeing in detail",
        list: [
          "Betaab Valley, about 15 km from Pahalgam, a green meadow along the Lidder named after a Bollywood film shot there",
          "Aru Valley, about 12 km from Pahalgam, a quiet village and base for treks to Kolahoi Glacier and Tarsar Lake",
          "Chandanwari, about 16 km from Pahalgam, known for snow bridges and the start of the Amarnath Yatra route",
          "Baisaran, often called mini Switzerland, above Pahalgam: closed to visitors since the April 2025 attack, so confirm with the local administration before planning it",
          "Evening walks along the Lidder river and Pahalgam's small market",
        ],
      },
      {
        h: "Food stops on the way",
        p: [
          "On the Srinagar to Pahalgam road, stop at Pampore for saffron and kahwa, and at Awantipora for the 9th-century temple ruins. Many drivers suggest a lunch stop at roadside dhabas serving Kashmiri and North Indian food. In Srinagar, try wazwan at a traditional restaurant, and pick up bakery breads and kulcha for the morning. Vegetarian travellers from Delhi will find plenty of options in every town.",
        ],
      },
      {
        h: "Common mistakes to avoid",
        list: [
          "Doing Pahalgam as a same-day trip from Srinagar; it is about 95 km each way and deserves at least one night",
          "Booking the last flight out on the day you come back from Pahalgam or Gulmarg",
          "Not pre-booking gondola tickets in peak season",
          "Underpacking warm clothes because Delhi is hot",
        ],
      },
    ],
    faqs: [
      { q: "How do I go to Kashmir from Delhi?", a: "Fly to Srinagar in about 1.5 hours, or take a train to Katra and the Vande Bharat to Srinagar." },
      { q: "Is 7 days enough for Kashmir from Delhi?", a: "Yes. Seven days covers Srinagar, Gulmarg, Sonamarg and Pahalgam with a houseboat night." },
      { q: "What is the distance from Delhi to Srinagar by road?", a: "About 850 km via Jammu, usually driven over two days." },
      { q: "Can I combine Vaishno Devi with a Kashmir trip from Delhi?", a: "Yes. Take a train to Katra, do the yatra, then the Vande Bharat to Srinagar." },
      { q: "Will my prepaid SIM work in Kashmir?", a: "Prepaid connections from other states do not work in Jammu and Kashmir. Use a postpaid connection or buy a local one with ID." },
      { q: "What is the best month to visit Kashmir from Delhi?", a: "April to June, when Delhi is hot and Kashmir is cool and green, or December to February for snow." },
    ],
  },

  "kashmir-family-trip-plan": {
    intro:
      "Kashmir is one of the easiest mountain holidays for families: short drives from Srinagar, gentle meadows, pony rides, snow in Gulmarg and boat rides on Dal Lake. A 6-day family plan stays in Srinagar and Pahalgam, does Gulmarg as a day trip, and keeps afternoons free for rest. Book family rooms or connecting rooms, choose hotels over houseboats for most nights, and travel between April and October for the easiest weather.",
    sections: [
      {
        h: "6-day Kashmir family itinerary",
        days: [
          "Arrive in Srinagar. Short shikara ride on Dal Lake; early dinner.",
          "Mughal gardens in the morning; rest in the afternoon; evening on the Boulevard.",
          "Day trip to Gulmarg: Gondola Phase 1 to Kongdoori and snow play or a pony ride.",
          "Drive to Pahalgam with a stop at the Pampore saffron fields.",
          "Pahalgam: Betaab Valley and Aru Valley by union taxi, with pony rides for children.",
          "Back to Srinagar and depart.",
        ],
      },
      {
        h: "Why Kashmir works for families",
        list: [
          "Main sights are within 50 to 95 km of Srinagar",
          "Altitudes of about 1,600 to 2,650 m for overnight stays, gentle for children and older parents",
          "Snow, boats, ponies and gardens keep children engaged",
          "Plenty of vegetarian and familiar North Indian food",
        ],
      },
      {
        h: "Houseboat or hotel with children",
        p: [
          "A houseboat night is a highlight, but decks and shikaras need close supervision with small children. Many families stay one night on a larger, higher-category houseboat and the rest in hotels with lifts, larger bathrooms and heating. Ask for connecting rooms or family suites when booking.",
        ],
      },
      {
        h: "Best time for a family trip",
        list: [
          "April to June: pleasant weather, school holidays, the busiest season",
          "September to October: clear skies and fewer crowds",
          "December to February: snow, but very cold; plan short outings and heated stays",
          "July and August: green and cool, with Amarnath Yatra traffic near Pahalgam",
        ],
      },
      {
        h: "Safety tips for children and older parents",
        list: [
          "Keep children away from river edges in Pahalgam and Sonamarg",
          "Choose Gondola Phase 1 with small children; Phase 2 is very high and cold",
          "Agree pony rates and routes before starting, and keep rides short for young children",
          "Carry warm layers, snacks and basic medicines on every day trip",
          "Avoid long same-day drives; Pahalgam is worth an overnight stay",
        ],
      },
      {
        h: "Food for families",
        p: [
          "Srinagar and Pahalgam have many restaurants with North Indian, Chinese and vegetarian food alongside Kashmiri dishes. Try kahwa and Kashmiri bread from the local bakery, and a mild Kashmiri dish such as yakhni. Tell your agent about dietary needs so hotels can plan meals.",
        ],
      },
      {
        h: "What to pack",
        list: [
          "Layers for everyone, including jackets for evenings even in summer",
          "Snow wear for winter; boots and suits can be rented in Gulmarg",
          "Sunscreen, sunglasses and caps",
          "Medicines, motion-sickness tablets and a small first-aid kit",
          "ID for every adult and child for hotel check-in and security points",
        ],
      },
      {
        h: "Getting quotes for a family trip",
        p: [
          "Share the number of adults and children, their ages, your dates and preferred hotel category. Up to 3 verified agents on Tavel Package suggest family-friendly stays, a spacious cab and a comfortable pace.",
        ],
      },
      {
        h: "Activities children enjoy in Kashmir",
        list: [
          "A shikara ride on Dal Lake to see the floating gardens, kingfishers and the lotus beds in summer",
          "Pony rides at Gulmarg, Pahalgam and Sonamarg, with a handler walking alongside",
          "Snow play, sledging and snowmen in Gulmarg from December to March",
          "Running around the terraced lawns and fountains of Nishat and Shalimar Bagh",
          "Spotting trout at the Kokernag or Pahalgam trout farms",
          "Ice-skating on the frozen rinks at Gulmarg in deep winter, where available",
        ],
      },
      {
        h: "Adding Sonamarg for a 7-day family trip",
        p: [
          "With an extra day, add Sonamarg as a day trip from Srinagar: about 80 km along the Sindh river, with the Thajiwas Glacier reached by pony or a short walk from the town. In summer there is often snow at the glacier, which children love. The Sonamarg road can close after fresh snow in winter, so it fits best between April and November.",
        ],
      },
      {
        h: "Room and transport tips for larger families",
        list: [
          "A Tempo Traveller or Innova Crysta suits families of five to twelve; mention luggage and child seats when booking",
          "Ask hotels for extra beds, cribs or interconnecting rooms in advance, as these sell out in peak weeks",
          "Choose ground-floor or lift-access rooms for grandparents",
          "Keep one day of the trip unplanned for rest or a change of weather",
        ],
      },
      {
        h: "Planning around school holidays",
        p: [
          "Summer school holidays from mid-May to June are the busiest weeks in Kashmir, so book flights, Pahalgam hotels and gondola tickets early. Diwali and October breaks bring autumn colours and fewer crowds, and the December break suits families who want snow. Short weekend-plus-holiday trips of four or five days can cover Srinagar, Gulmarg and Sonamarg without Pahalgam.",
        ],
      },
    ],
    faqs: [
      { q: "Is Kashmir safe for a family trip?", a: "Lakhs of families visit Kashmir every year. Check current advisories, use registered hotels and taxis, and follow local guidance on any day of restrictions." },
      { q: "How many days are enough for a Kashmir family trip?", a: "Six days covers Srinagar, Gulmarg and Pahalgam at a family-friendly pace." },
      { q: "Is a houseboat safe for small children?", a: "Yes, with close supervision on the deck and shikara. Choose a larger, higher-category boat and consider one night only." },
      { q: "Which month is best for Kashmir with kids?", a: "April to June and September to October for comfortable weather; December to February if the family wants snow." },
      { q: "Can elderly parents ride the Gulmarg Gondola?", a: "Phase 1 to Kongdoori is usually comfortable. Phase 2 reaches about 4,000 m and is better avoided by anyone with heart or breathing problems." },
      { q: "Do we need separate taxis in Pahalgam?", a: "Yes. Sightseeing beyond Pahalgam town is done in local union taxis at fixed rates." },
    ],
  },

  "kashmir-christmas-new-year-trip": {
    intro:
      "Christmas and New Year in Kashmir mean a white holiday: Gulmarg is usually snow-covered, Srinagar is cold and festive, and hotels host New Year dinners and bonfires. It is also the busiest week of the winter, so book flights, hotels and Gulmarg stays early, choose heated rooms, and keep a buffer day in case snow or fog delays flights. A 5 to 6 day plan between about 24 December and 2 January works best.",
    sections: [
      {
        h: "5-day Christmas and New Year plan",
        days: [
          "Arrive in Srinagar. Heated hotel or higher-category houseboat; short shikara ride if the lake is open.",
          "Srinagar sightseeing; visit the Holy Family Catholic Church or All Saints Church for Christmas if you wish.",
          "Drive to Gulmarg (about 50 km); snow play, gondola Phase 1, and a ski lesson.",
          "Gulmarg: Gondola Phase 2 if open, sledging, and New Year's Eve at your hotel.",
          "Back to Srinagar and depart, keeping a buffer for weather delays.",
        ],
      },
      {
        h: "Will there be snow at Christmas?",
        p: [
          "Gulmarg usually has snow by late December, and it is the most reliable place for a white Christmas in Kashmir. Srinagar city may or may not have snow on the ground; snowfall is more likely from late December to February. Pahalgam and Sonamarg usually have snow too, but the Sonamarg road can close after heavy falls.",
        ],
      },
      {
        h: "Booking early is essential",
        list: [
          "Flights to Srinagar around 24 to 31 December fill early and prices rise",
          "Gulmarg hotels are the first to sell out; book months ahead if you want a New Year night there",
          "Gondola tickets sell out on peak days; book online as soon as dates open",
          "Heated houseboats and hotels with central heating are in the highest demand",
        ],
      },
      {
        h: "Weather and Chillai Kalan",
        p: [
          "Chillai Kalan, the coldest period, begins around 21 December. Srinagar's nights drop well below freezing, and Gulmarg is colder still. Days can be sunny and crisp. Pack thermals, a heavy down jacket, gloves, a woollen cap and waterproof boots, and plan outdoor activities for the middle of the day.",
        ],
      },
      {
        h: "New Year's Eve in Kashmir",
        p: [
          "Most celebrations are hotel-based: gala dinners, bonfires and music, especially in Gulmarg and Pahalgam. Ask your agent which hotels include a New Year's Eve dinner in the room rate and which charge separately. Public nightlife is limited, so the hotel you choose shapes the evening.",
        ],
      },
      {
        h: "Travel delays and buffer days",
        list: [
          "Fog in North India can delay morning flights from Delhi in late December and January",
          "Snow at Srinagar airport can cause delays or cancellations",
          "The Jammu to Srinagar highway can close after heavy snow",
          "Keep the last day free and avoid tight onward connections",
        ],
      },
      {
        h: "Christmas and New Year with family",
        p: [
          "Families should keep snow time short for small children, use Gondola Phase 1, and choose hotels with good heating and indoor space. Couples often book two Gulmarg nights for a snow-honeymoon feel. Agents on Tavel Package can plan either with winter-ready cabs and heated stays.",
        ],
      },
      {
        h: "Skiing and snow activities at Christmas",
        list: [
          "Beginner ski lessons on the gentle slopes near the Gulmarg gondola base, with certified instructors and rented gear",
          "Sledging pulled by local sledge operators; agree the rate and distance first",
          "Snowshoeing and short snow walks around Gulmarg meadow",
          "Gondola Phase 2 to Apharwat for experienced skiers and the highest views, weather permitting",
          "Snowmobile rides at Gulmarg and Sonamarg where allowed",
        ],
      },
      {
        h: "Winter food to warm up with",
        p: [
          "Winter is harissa season in Srinagar: slow-cooked mutton and rice pounded overnight and eaten hot with bread at old-city shops. Kahwa and noon chai are served everywhere, and hotels add bonfires and barbecues in the evening. Vegetarians can enjoy dum aloo, rajma and haak saag. Carry a flask for hot drinks on Gulmarg days.",
        ],
      },
      {
        h: "What to pack for a Kashmir New Year",
        list: [
          "Thermal inner layers, fleece, and a heavy down or padded jacket",
          "Waterproof gloves, woollen socks, a cap and a scarf",
          "Waterproof boots with a good grip; snow boots and suits can be rented in Gulmarg",
          "Sunscreen and dark sunglasses for snow glare",
          "A power bank, as cold drains phone batteries quickly",
          "Moisturiser and lip balm for the dry, cold air",
        ],
      },
      {
        h: "Alternatives if Gulmarg is full",
        p: [
          "If Gulmarg hotels are sold out, stay in Tangmarg or Srinagar and visit Gulmarg as a day trip, about 1.5 to 2 hours each way in winter conditions. Pahalgam is another snowy, quieter base with hotels by the frozen Lidder, and Sonamarg is good for a day of snow when the road is open.",
        ],
      },
      {
        h: "Getting quotes for a Christmas and New Year trip",
        p: [
          "Share your exact dates, the number of travellers, whether you want New Year's Eve in Gulmarg or Srinagar, and your hotel category. Up to 3 verified Kashmir agents on Tavel Package send itemised quotes that show heated rooms, gala dinner charges, winter cabs and gondola guidance, so you can compare like for like before the peak week sells out.",
        ],
      },
    ],
    faqs: [
      { q: "Is Kashmir good for Christmas and New Year?", a: "Yes. Gulmarg is usually snow-covered and hotels host festive dinners, but it is the busiest week of the winter, so book early." },
      { q: "Is there snow in Gulmarg in late December?", a: "Usually yes. Gulmarg is the most reliable snow destination in Kashmir from late December to March." },
      { q: "Where should we celebrate New Year in Kashmir?", a: "Gulmarg for snow and hotel celebrations, or Srinagar for a quieter evening and houseboat stay." },
      { q: "How cold is Kashmir at New Year?", a: "Very cold: Srinagar nights are well below freezing during Chillai Kalan, and Gulmarg is colder." },
      { q: "When should we book a Kashmir New Year trip?", a: "As early as possible, ideally two to three months ahead for flights and Gulmarg hotels." },
      { q: "Are churches open for Christmas in Srinagar?", a: "Srinagar has historic churches such as the Holy Family Catholic Church and All Saints Church. Check service times locally." },
    ],
  },

  "gurez-valley-trip": {
    intro:
      "Gurez is a remote valley on the Kishanganga river, about 125 km north of Srinagar over Razdan Pass, close to the Line of Control. It is known for the pyramid-shaped Habba Khatoon peak, log-wood villages and the Dard-Shin culture of its people. The road is usually open from about May to October; plan two nights at Dawar, carry ID, and expect simple homestays and limited mobile coverage.",
    sections: [
      {
        h: "How to reach Gurez",
        p: [
          "From Srinagar, the road runs to Bandipora on Wular Lake, then climbs over Razdan Pass at about 3,300 m and descends into the Gurez valley to Dawar, its main village. The drive is about 125 km and takes 5 to 6 hours. Visitors register at check posts along the way, so carry original ID for everyone. Snow closes Razdan Pass for much of winter.",
        ],
      },
      {
        h: "3-day Gurez plan",
        days: [
          "Srinagar to Dawar via Bandipora and Razdan Pass. Evening walk by the Kishanganga.",
          "Habba Khatoon peak and spring, Dawar village, and a drive along the river towards Tulail where allowed.",
          "Return to Srinagar, with a stop at Wular Lake viewpoints near Bandipora.",
        ],
      },
      {
        h: "Things to see in Gurez",
        list: [
          "Habba Khatoon peak, named after the 16th-century Kashmiri poet queen",
          "The Habba Khatoon spring at the base of the peak",
          "Dawar village and its wooden houses",
          "The Kishanganga river and its valley",
          "Razdan Pass views on the way in",
          "Tulail valley further east, where access is permitted",
        ],
      },
      {
        h: "Best time to visit Gurez",
        list: [
          "May to June: the road reopens, with snow on the higher slopes",
          "July to September: the best months, green and settled",
          "October: crisp and clear, the last weeks before snow",
          "November to April: Razdan Pass is usually closed by snow",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Gurez has simple homestays, a few guest houses and tourism department accommodation around Dawar. Facilities are basic, electricity can be limited, and nights are cold even in summer. Book through a local agent in peak months.",
        ],
      },
      {
        h: "Rules and practical tips",
        list: [
          "Carry original ID for every traveller; registration at check posts is required",
          "Follow instructions in border areas, and do not photograph security installations",
          "Mobile coverage is limited; postpaid BSNL works best",
          "Carry cash; there are few ATMs in the valley",
          "Fuel up in Bandipora before Razdan Pass",
        ],
      },
      {
        h: "Gurez culture",
        p: [
          "Gurez is home to the Dard-Shin people, who speak Shina and keep traditions distinct from the rest of the Kashmir valley, including log-wood houses built to withstand heavy snow. Respect local customs, dress modestly and ask before photographing people.",
        ],
      },
      {
        h: "Combining Gurez with a Kashmir trip",
        p: [
          "Add two or three days for Gurez to a Srinagar-based trip, ideally between June and September. Agents on Tavel Package can arrange an experienced driver, homestay bookings and the paperwork for check posts.",
        ],
      },
      {
        h: "The drive over Razdan Pass",
        p: [
          "The road beyond Bandipora climbs through pine forest and switchbacks to Razdan Pass, often with snow walls in early summer. On a clear day the views stretch back over Wular Lake. The descent leads to Kanzalwan and then along the Kishanganga to Dawar. Roads are narrow in places and some stretches are unpaved, so travel in daylight with a driver who knows the route, and keep the return day free of tight plans in case of landslides or road work.",
        ],
      },
      {
        h: "Food in Gurez",
        p: [
          "Food in Gurez is simple and home-cooked: rice, rajma, local greens, eggs, chicken and fresh trout where available, with butter tea and kahwa. Homestays usually serve meals with the stay. There are very few restaurants, so tell your host about dietary needs in advance, and carry snacks for the long drive.",
        ],
      },
      {
        h: "What to pack for Gurez",
        list: [
          "Warm layers, as nights are cold even in July and August",
          "A rain jacket and sturdy walking shoes",
          "Cash, a torch and a power bank because electricity can be limited",
          "Basic medicines, including for motion sickness on the mountain road",
          "Photocopies and originals of ID for every traveller",
        ],
      },
      {
        h: "Gurez compared with other offbeat Kashmir valleys",
        list: [
          "Gurez: remote, culturally distinct and on the Kishanganga, best for two or three nights",
          "Bangus Valley: high meadows in Kupwara district, mainly a day trip or camping",
          "Keran and Teetwal: Kishanganga villages near the LoC, also with check post registration",
          "Doodhpathri and Yusmarg: meadows within two hours of Srinagar, easy day trips",
        ],
      },
      {
        h: "Is Gurez right for you?",
        p: [
          "Gurez suits travellers who enjoy long mountain drives, simple stays and quiet villages more than sightseeing checklists. It is less suited to small children, older travellers with health concerns or anyone on a short trip, because the road takes most of a day each way and facilities are basic. First-time Kashmir visitors usually see Srinagar, Gulmarg and Pahalgam first, then return for Gurez on a second trip between June and September.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Gurez from Srinagar?", a: "About 125 km via Bandipora and Razdan Pass, 5 to 6 hours by road." },
      { q: "When is the best time to visit Gurez?", a: "July to September, when the road is reliably open and the valley is green. The road usually opens around May and closes with snow after October." },
      { q: "Do I need a permit for Gurez?", a: "Visitors register at check posts on the way; carry original ID for every traveller and follow instructions in this border area." },
      { q: "Where should I stay in Gurez?", a: "In homestays or guest houses around Dawar, the main village. Facilities are simple." },
      { q: "Is there mobile network in Gurez?", a: "Coverage is limited. Postpaid BSNL works best, and you may be out of contact for parts of the trip." },
      { q: "What is Habba Khatoon peak?", a: "A pyramid-shaped peak above Dawar, named after the 16th-century Kashmiri poet queen Habba Khatoon." },
    ],
  },
};
