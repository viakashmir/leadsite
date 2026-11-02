import type { BlogPost } from "./types";

// Fourth batch of full rewrites of thin Kashmir posts, keyed by existing slug
// (see blog/index.ts). No em dashes, no invented prices.

export const KASHMIR_UPGRADES_4: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = {
  "kashmir-in-summer": {
    intro:
      "Summer in Kashmir runs from May to August and is the valley's busiest season: green meadows, long daylight, open high roads and cool mountain nights while the plains swelter. Srinagar is warm by day, Gulmarg, Pahalgam and Sonamarg are fresh and green, the road over Zojila to Ladakh is open, and the great alpine treks begin in July. Book early for May and June school holidays, and plan around Amarnath Yatra traffic on the Pahalgam and Sonamarg roads in July and August.",
    sections: [
      {
        h: "What Kashmir is like in summer",
        p: [
          "By May the snow has retreated from the valley floor and stays only on the higher slopes and passes. Srinagar's days are warm and pleasant, often reaching the high twenties or low thirties Celsius in July, while Gulmarg, Pahalgam and Sonamarg stay noticeably cooler. Evenings everywhere need a light jacket, and nights at the hill stations can be chilly. Rain comes as short showers and afternoon thunderstorms rather than a full monsoon, though July can be wetter than May or June.",
        ],
      },
      {
        h: "Month by month",
        list: [
          "May: the season opens fully, roads to Sonamarg and Gurez reopen, wildflowers start, snow still visible at Gulmarg's Apharwat",
          "June: the busiest month with school holidays, green meadows, long days and full hotels",
          "July: alpine treks open, the Amarnath Yatra begins, occasional rain showers",
          "August: lush and green, the yatra continues until Raksha Bandhan, fewer family tourists after holidays end",
        ],
      },
      {
        h: "7-day summer itinerary",
        days: [
          "Arrive in Srinagar. Evening shikara ride and a houseboat night.",
          "Mughal gardens, Hazratbal, Shankaracharya Temple and the old city.",
          "Day trip to Sonamarg; pony or walk to Thajiwas Glacier where snow lingers into summer.",
          "Day trip to Gulmarg; gondola to Apharwat for summer snow and wide views.",
          "Drive to Pahalgam via Pampore and Awantipora.",
          "Betaab Valley, Aru Valley and the Lidder riverside walks. (Baisaran meadow has been closed to visitors since April 2025; check its status locally.)",
          "Return to Srinagar and depart.",
        ],
      },
      {
        h: "Best summer experiences",
        list: [
          "Snow at Thajiwas Glacier and Apharwat even in June",
          "Picnics in the meadows of Aru and Betaab Valley",
          "Lotus blooms on Dal Lake from July",
          "White-water rafting on the Lidder at Pahalgam and the Sindh at Sonamarg, in season",
          "Trout fishing with a permit from the Fisheries Department",
          "Golf at Gulmarg, one of the highest green golf courses in the world",
        ],
      },
      {
        h: "Summer treks in Kashmir",
        list: [
          "Kashmir Great Lakes from Sonamarg, usually July to mid-September, about 7 days",
          "Tarsar Marsar from Aru, July to September",
          "Kolahoi Glacier from Aru, a long day or overnight trek",
          "Alpather Lake from Gulmarg, a high day hike in July and August",
          "Go with a registered trekking operator, and carry ID for checks along the routes",
        ],
      },
      {
        h: "Combining Kashmir with Ladakh in summer",
        p: [
          "From June to September the Srinagar to Leh road over Zojila Pass is usually open, so many travellers continue from Sonamarg to Drass, Kargil and Leh over two days. This makes a 10 to 12 day Kashmir and Ladakh circuit, ending with a flight from Leh. Acclimatise properly on arrival in Leh, even after the gradual road ascent.",
        ],
      },
      {
        h: "The Amarnath Yatra and your summer trip",
        p: [
          "The Amarnath Yatra usually runs from early July to Raksha Bandhan in August. During this period, traffic on the Pahalgam and Sonamarg roads is heavier, security convoys may set timings, and hotels in Pahalgam and Sonamarg fill with pilgrims. Non-pilgrim tourists can still visit both places, but book early and allow extra time on the road.",
        ],
      },
      {
        h: "Where to stay in summer",
        list: [
          "Srinagar: houseboats on Dal and Nigeen lakes, or hotels on the Boulevard and in Rajbagh",
          "Pahalgam: riverside hotels on the Lidder, in high demand in June",
          "Gulmarg: hotels near the gondola, quieter in summer than in winter",
          "Sonamarg: hotels and camps along the Sindh, popular before treks",
        ],
      },
      {
        h: "What to pack for a summer trip",
        list: [
          "Cotton clothes for Srinagar days and a light fleece or jacket for evenings",
          "A rain jacket or umbrella for showers",
          "Comfortable walking shoes for meadows and glacier walks",
          "Sunscreen, sunglasses and a cap; the sun is strong at altitude",
          "A postpaid mobile connection, as prepaid SIMs from other states do not work in Jammu and Kashmir",
        ],
      },
      {
        h: "Booking tips for peak summer",
        p: [
          "May and June are the most booked months of the year. Reserve flights, houseboats and Pahalgam hotels well in advance, and book gondola tickets online as soon as your dates are fixed. Share your dates and hotel category on Tavel Package to get up to 3 itemised quotes from verified Kashmir agents.",
        ],
      },
      {
        h: "Summer food in Kashmir",
        p: [
          "Summer is the season for fresh cherries in June, followed by apricots, plums and early apples, sold along the roads near Srinagar and Shopian. Try a wazwan meal, kahwa and bakery breads in Srinagar, and fresh trout in Pahalgam or Kokernag. Vegetarian North Indian food is easy to find everywhere.",
        ],
      },
    ],
    faqs: [
      { q: "Is summer a good time to visit Kashmir?", a: "Yes. May to August brings green meadows, open roads and cool hill stations, and it is the most popular season." },
      { q: "How hot is Srinagar in summer?", a: "Days are warm, often in the high twenties to low thirties Celsius in July, while Gulmarg, Pahalgam and Sonamarg are cooler." },
      { q: "Can I see snow in Kashmir in summer?", a: "Yes. Thajiwas Glacier at Sonamarg and Apharwat above Gulmarg usually hold snow into June and sometimes later." },
      { q: "Which is the best summer month for Kashmir?", a: "May and early June for green valleys with lingering snow; July and August for treks and the Ladakh road." },
      { q: "Does the Amarnath Yatra affect tourist trips?", a: "It brings heavier traffic and busier hotels in Pahalgam and Sonamarg in July and August, so book early and allow extra road time." },
      { q: "Is the Srinagar to Leh road open in summer?", a: "Usually from about June to September, over Zojila Pass, Drass and Kargil." },
    ],
  },

  "amarnath-yatra-plan": {
    intro:
      "The Amarnath Yatra is the annual summer pilgrimage to the Amarnath cave shrine, at about 3,888 m in the mountains of south Kashmir, where an ice lingam forms each year. It runs for about six to eight weeks in July and August, ending on Raksha Bandhan. Pilgrims must register with the Shri Amarnathji Shrine Board (SASB) with a Compulsory Health Certificate, then walk from Baltal (the short, steep route) or from Pahalgam via Chandanwari (the longer, traditional route), or take a helicopter for part of the way.",
    sections: [
      {
        h: "Registration and health certificate",
        list: [
          "Register for a specific date and route through the Shri Amarnathji Shrine Board, online or at designated bank branches",
          "Obtain a Compulsory Health Certificate (CHC) from a doctor or medical institution authorised by the Board",
          "Collect your RFID card at the designated centres before reaching the base camp; it is checked along the route",
          "Age limits and medical conditions are set by the Board each year; check the current rules before planning",
          "Pregnant women beyond the early weeks are not permitted to undertake the yatra",
        ],
      },
      {
        h: "The two routes compared",
        list: [
          "Baltal route: about 14 km one way from Baltal near Sonamarg, steep and narrow, usually done up and back in one or two days",
          "Pahalgam route: the traditional route from Chandanwari via Pissu Top, Sheshnag and Panchtarni, about 32 km one way and usually done over three to four days",
          "The Pahalgam route is more gradual and scenic; the Baltal route is shorter but harder on the legs",
          "Ponies, palkis (palanquins) and porters are available on both routes through registered service providers",
        ],
      },
      {
        h: "Baltal route plan",
        days: [
          "Reach Srinagar, then drive to Baltal base camp near Sonamarg (about 95 km).",
          "Start early from Baltal via Domel and Sangam to the cave; darshan and return to Baltal, or stay overnight at a camp near the shrine if needed.",
          "Rest day at Baltal or Sonamarg, then return to Srinagar.",
        ],
      },
      {
        h: "Pahalgam route plan",
        days: [
          "Reach Pahalgam and the Nunwan base camp.",
          "Chandanwari to Sheshnag via Pissu Top, staying at Sheshnag camp beside the lake.",
          "Sheshnag to Panchtarni over Mahagunas Pass, the highest point of the trek at about 4,276 m.",
          "Panchtarni to the cave for darshan, then return via Sangam towards Baltal or back the same way.",
        ],
      },
      {
        h: "Helicopter services",
        p: [
          "Helicopters run during the yatra from Baltal and from Pahalgam (Neelgrath and Pahalgam helipads) to Panchtarni, from where the cave is about 6 km on foot or by pony. Helicopter tickets are booked only through the Shrine Board's official channels; beware of fake websites and agents selling tickets. Flights depend on weather and can be suspended at short notice.",
        ],
      },
      {
        h: "Physical preparation",
        list: [
          "Start walking 4 to 5 km every morning at least a month before the yatra, adding stairs or hill walks",
          "Practise deep breathing and yoga for stamina at altitude",
          "Arrive a day early and rest to help acclimatisation",
          "Walk slowly, drink water frequently and avoid alcohol and smoking",
          "Descend immediately if you have a severe headache, breathlessness or confusion",
        ],
      },
      {
        h: "What to carry",
        list: [
          "Woollen clothes, a windproof jacket, gloves and a cap; nights at Sheshnag and Panchtarni are near freezing",
          "Waterproof rain gear, as weather changes quickly",
          "Sturdy, broken-in trekking shoes with good grip",
          "A walking stick, torch, water bottle and dry fruits",
          "Personal medicines, your health certificate, RFID card and photo ID",
        ],
      },
      {
        h: "Langars, camps and facilities",
        p: [
          "Along both routes, langars run by volunteer organisations serve free meals, and tented camps offer paid shelter at base camps and halts. Medical posts and oxygen points are set up at intervals. Facilities are basic and crowded on peak days, so carry your own essentials and keep to the camp areas designated by the authorities.",
        ],
      },
      {
        h: "Security and convoy timings",
        p: [
          "The yatra has heavy security, and vehicle movement on the Jammu to Srinagar highway and to the base camps follows set convoy timings. Gates on the trek routes open and close at fixed hours. Follow instructions from officials and keep your RFID card on you at all times.",
        ],
      },
      {
        h: "Combining the yatra with Kashmir sightseeing",
        p: [
          "Many pilgrims add Srinagar, Gulmarg and Sonamarg before or after the yatra. Keep sightseeing for after the yatra if possible, so a delay in the trek does not cost you a flight. Agents on Tavel Package can arrange Srinagar hotels, cabs to Baltal or Pahalgam, and sightseeing days around your registered yatra date.",
        ],
      },
      {
        h: "Getting to the base camps",
        p: [
          "Pilgrims reach Jammu by train or air, or fly straight to Srinagar. From Srinagar, Baltal is about 95 km and Pahalgam about 95 km, each roughly three to four hours by road. From Jammu, registered pilgrims can travel in official convoys to the base camps. Plan to reach the base camp a day before your registered date.",
        ],
      },
    ],
    faqs: [
      { q: "When does the Amarnath Yatra take place?", a: "Every year in July and August, for about six to eight weeks, ending on Raksha Bandhan (Shravan Purnima). The Shrine Board announces exact dates each year." },
      { q: "Which route is easier for Amarnath, Baltal or Pahalgam?", a: "The Pahalgam route is longer but more gradual; Baltal is short but steep. Fit trekkers often choose Baltal, while many prefer Pahalgam's gentler climb." },
      { q: "Is registration compulsory for the Amarnath Yatra?", a: "Yes. Every pilgrim must register with the Shri Amarnathji Shrine Board with a Compulsory Health Certificate and carry an RFID card." },
      { q: "Can I go to Amarnath by helicopter?", a: "Yes. Helicopters fly from Baltal and Pahalgam to Panchtarni, about 6 km from the cave. Book only through the Shrine Board's official channels." },
      { q: "How high is the Amarnath cave?", a: "About 3,888 m above sea level. The highest point on the Pahalgam route is Mahagunas Pass at about 4,276 m." },
      { q: "What should I carry for the Amarnath Yatra?", a: "Warm and waterproof clothing, trekking shoes, a torch, water, medicines, your health certificate, RFID card and photo ID." },
    ],
  },

  "offbeat-kashmir-doodhpathri-yusmarg-daksum": {
    intro:
      "Beyond Gulmarg, Pahalgam and Sonamarg, Kashmir has quieter meadows and valleys within a few hours of Srinagar. Doodhpathri and Yusmarg in Budgam district are easy day trips with streams and pine-ringed meadows; Daksum, in the forests beyond Kokernag in south Kashmir, leads up to Sinthan Top; and Aharbal, Verinag and Kokernag add waterfalls and springs. Most roads are open from about April to November, and the best time is May to October.",
    sections: [
      {
        h: "Doodhpathri",
        p: [
          "Doodhpathri, the 'valley of milk', is a wide meadow at about 2,700 m in Budgam district, roughly 42 km from Srinagar, about 1.5 to 2 hours by road. The Shaliganga stream runs over white stones through the grassland, framed by pine and fir forest. Visitors walk or ride ponies across the meadow to the stream and viewpoints. Facilities are simple, with tourism department huts and small eateries, so most people visit as a day trip.",
        ],
      },
      {
        h: "Yusmarg",
        p: [
          "Yusmarg is a meadow at about 2,400 m, roughly 47 km south-west of Srinagar, also in Budgam. Local tradition links its name to Jesus (Yus), and it is surrounded by pine forest with the Pir Panjal range behind. A short pony ride or walk leads to Nilnag lake and to the Doodh Ganga river. Yusmarg has a few tourist huts and is a good half-day or full-day trip.",
        ],
      },
      {
        h: "Daksum and Sinthan Top",
        p: [
          "Daksum is a forested valley at about 2,400 m in Anantnag district, past Kokernag on the road to Kishtwar, roughly 100 km from Srinagar. The Bringi river runs through pine and fir woods, and there is a small tourism department lodge. Beyond Daksum the road climbs to Sinthan Top at about 3,700 m, where snow lingers into early summer. The Sinthan road is usually open from about May to October, depending on snow.",
        ],
      },
      {
        h: "Aharbal, Kokernag and Verinag",
        list: [
          "Aharbal: a waterfall on the Veshaw river in Kulgam district, reached by a short walk from the road",
          "Kokernag: a botanical garden built around freshwater springs, with a trout farm",
          "Verinag: an octagonal Mughal spring pool, traditionally seen as the source of the Jhelum",
          "Achabal: a Mughal garden fed by a spring, near Anantnag",
        ],
      },
      {
        h: "Other offbeat places in Kashmir",
        list: [
          "Lolab Valley in Kupwara, with apple orchards and villages",
          "Bangus Valley, high meadows in Kupwara",
          "Gurez, on the Kishanganga, over Razdan Pass",
          "Tosa Maidan, a vast meadow in Budgam",
          "Naranag temple ruins near Kangan, on the way to Sonamarg",
        ],
      },
      {
        h: "Sample offbeat plan",
        days: [
          "Day trip from Srinagar to Doodhpathri; walk along the Shaliganga.",
          "Day trip to Yusmarg and Nilnag lake.",
          "Drive to south Kashmir: Achabal, Kokernag and Daksum; overnight in Daksum.",
          "Sinthan Top if the road is open, then Verinag and Aharbal, and back to Srinagar or on to Pahalgam.",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "April to May: snow melting, meadows turning green, some roads still clearing",
          "June to August: green and pleasant, best for picnics and walks",
          "September to October: clear skies and autumn colours in the forests",
          "November to March: snowy and quiet; Sinthan Top and some high roads close",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Doodhpathri and Yusmarg are best done as day trips from Srinagar, though both have a few tourism department huts. Daksum and Kokernag have government lodges and small hotels, and Pahalgam is a good base for Aharbal and the south Kashmir springs. Book government huts through the J&K tourism booking channels or ask your agent to arrange them.",
        ],
      },
      {
        h: "Practical tips",
        list: [
          "Use a cab from Srinagar for the day; local transport is limited",
          "Carry snacks and water, as eateries are few",
          "Agree pony rates before setting out",
          "Mobile coverage is patchy in Daksum and at Sinthan Top",
          "Respect local villages and do not litter the meadows",
        ],
      },
      {
        h: "Adding offbeat days to a Kashmir package",
        p: [
          "An offbeat day or two fits easily into a standard Srinagar, Gulmarg and Pahalgam trip: Doodhpathri or Yusmarg as a day trip from Srinagar, and Kokernag, Daksum or Aharbal on the drive to or from Pahalgam. Share your interests on Tavel Package and up to 3 verified agents will build them into your itinerary.",
        ],
      },
      {
        h: "Why choose offbeat Kashmir",
        p: [
          "In peak weeks, Gulmarg, Pahalgam and Sonamarg can be crowded, with long queues for the gondola and union taxis. The offbeat meadows and valleys give you the same mountain scenery with far fewer people, cleaner streams and a closer look at village life. They suit repeat visitors, photographers, families who want unhurried picnics, and anyone who prefers walking over ticked-off sightseeing. Facilities are simpler, so plan meals and transport ahead and start each day early.",
        ],
      },
      {
        h: "Photography in the offbeat valleys",
        p: [
          "Early morning light is best at Doodhpathri and Yusmarg, before day-trippers arrive and while mist still hangs over the forest. Autumn turns the Daksum woods gold and red, and spring brings wildflowers across the meadows. Ask before photographing villagers or nomadic Bakarwal and Gujjar families.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Doodhpathri from Srinagar?", a: "About 42 km, roughly 1.5 to 2 hours by road, in Budgam district." },
      { q: "Is Yusmarg worth visiting?", a: "Yes, for a quiet meadow ringed by pine forest, with a pony ride or walk to Nilnag lake. It is about 47 km from Srinagar." },
      { q: "Where is Daksum?", a: "In Anantnag district, past Kokernag on the road to Kishtwar, about 100 km from Srinagar." },
      { q: "When is Sinthan Top open?", a: "Usually from about May to October; snow closes the road in winter." },
      { q: "Can I visit Doodhpathri and Yusmarg in one day?", a: "It is possible but rushed. Most travellers do each as a separate day trip from Srinagar." },
      { q: "What is the best time for offbeat Kashmir?", a: "May to October, when roads are open and the meadows are green or golden." },
    ],
  },
};
