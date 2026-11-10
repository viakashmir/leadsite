import type { BlogPost, BlogSection } from "./types";

// Kashmir stay guides (2026-11-10): where to stay in each town, houseboats,
// luxury and budget stays. Hotels are named only where they are long-standing
// and well known; no star ratings or room rates typed in. No em dashes.

const DATE = "2026-11-10";

const roomChecks = (town: string): BlogSection => ({
  h: `What to check before you book a room in ${town}`,
  list: [
    "Heating: ask whether rooms have central heating, electric heaters or a bukhari (wood or kerosene stove), and whether it is included or charged per night in winter.",
    "Hot water: ask whether it is from a geyser in the room or a central boiler, and at what hours.",
    "Power backup: cuts happen, especially in winter. A generator or inverter makes a big difference.",
    "Location: confirm the distance to the main sightseeing point and whether the road to the hotel is passable after snow.",
    "Meal plan: most hill hotels quote with breakfast and dinner, because there are few restaurants open late.",
    "Photos: ask for recent photos of the exact room category, not the best suite.",
  ],
});

const BASE_STAYS: BlogPost[] = [
  {
    slug: "where-to-stay-in-gulmarg",
    title: "Where to Stay in Gulmarg: Meadow, Gondola Side or Tangmarg, by Season",
    description: "Where to stay in Gulmarg: hotels near the Gondola, on the golf course meadow or down in Tangmarg, what changes in ski season and what to check before booking.",
    category: "Planning",
    destination: "kashmir",
    city: "gulmarg",
    date: DATE,
    intro:
      "In Gulmarg, stay near the Gondola base if you want to ski or catch the first cabin, on the main meadow around the golf course for views and walks, or in Tangmarg, 13 km downhill, for lower rates. Most travellers do Gulmarg as a day trip from Srinagar, but one night here shows you the meadow at sunrise and sunset without the day crowds. In winter, heating and power backup matter more than anything else.",
    sections: [
      {
        h: "The three areas",
        list: [
          "Near the Gondola base: walk to the cable car and ski slopes, ideal in ski season. Rooms book out early for December to February.",
          "On and around the main meadow: the historic part of Gulmarg, with the golf course, St Mary's Church and wide views. Good for summer walks and first-time visitors.",
          "Tangmarg: the market town at the foot of the climb. More guest houses and budget hotels, but you drive up each morning, which can be slow after snow.",
        ],
      },
      {
        h: "Well-known stays",
        p: [
          "Khyber Himalayan Resort and Spa near the Gondola is Gulmarg's best-known luxury resort, with heated rooms, a spa and views over the meadow. The Hotel Highlands Park is a heritage hotel on the meadow with wooden cottages. Nedou's is one of the oldest hotels in Gulmarg. JKTDC runs huts and cottages on the meadow. Beyond these, Gulmarg has a range of mid-range hotels along the main loop road and around the bus stand.",
          "Gulmarg has a fixed number of hotels because building is restricted on the meadow, which is why rooms are scarce in ski season and over Christmas and New Year. Book 6 to 8 weeks ahead for those dates.",
        ],
      },
      {
        h: "Gulmarg stays by season",
        list: [
          "December to March: ski season. Book heated rooms with power backup; ask about ski storage and boot dryers.",
          "April to June: the meadow turns green while snow lingers higher up. Easy to find rooms on weekdays.",
          "July to September: golf, pony rides and walks to Alpather and Khilanmarg; weekends are busy with day visitors.",
          "October and November: quiet, golden and cold at night. Good value, with many hotels offering lower rates.",
        ],
      },
      {
        h: "Day trip or stay over",
        p: [
          "A day trip is enough for most summer visitors who want the Gondola and a walk. Stay over if you plan to ski, want to be in the first Gondola cabins before the queues, are travelling in winter when the road can close in the afternoon, or simply want an evening on the meadow after the day trippers leave. Many packages include one Gulmarg night between Srinagar and Pahalgam.",
        ],
      },
      roomChecks("Gulmarg"),
      {
        h: "Eating in Gulmarg",
        p: [
          "Restaurants in Gulmarg are mostly inside hotels, with a few cafes near the Gondola and the bus stand. In winter, many close by early evening, which is why hotels quote meals included. Try kahwa and noon chai after a cold day on the slopes, and ask your hotel whether it can arrange a wazwan dinner.",
        ],
      },
    ],
    faqs: [
      { q: "Is it better to stay in Gulmarg or Tangmarg?", a: "Gulmarg if you want to ski, catch the first Gondola or enjoy the meadow in the evening. Tangmarg if you want lower rates and do not mind a daily 13 km drive up." },
      { q: "How early should I book Gulmarg hotels for winter?", a: "6 to 8 weeks ahead for December to February, and earlier for Christmas and New Year." },
      { q: "Are Gulmarg hotels open in winter?", a: "Yes. Winter is Gulmarg's main ski season and most hotels stay open, unlike Sonamarg." },
      { q: "Do Gulmarg hotels have heating?", a: "Most do, through central heating, heaters or bukharis. Ask whether it is included and whether there is power backup." },
      { q: "Can I walk from my hotel to the Gondola?", a: "From hotels near the Gondola base, yes. From the main meadow it is a 10 to 20 minute walk or a short taxi ride." },
    ],
  },
  {
    slug: "where-to-stay-in-pahalgam",
    title: "Where to Stay in Pahalgam: Riverside, Main Market or Aru Road",
    description: "Where to stay in Pahalgam: riverside hotels on the Lidder, the main market area, the Aru and Chandanwari roads and the villages down valley, with season tips.",
    category: "Planning",
    destination: "kashmir",
    city: "pahalgam",
    date: DATE,
    intro:
      "Pahalgam is best experienced with one or two nights rather than a day trip. Stay on the Lidder riverbank for the sound of the river and mountain views, near the main market for easy access to the union taxi stand and restaurants, or on the quieter Aru or Chandanwari roads for space and pine forest. Rooms fill up in May, June and during the Amarnath Yatra, so book early for those months.",
    sections: [
      {
        h: "Areas to stay",
        list: [
          "Lidder riverside: the classic Pahalgam stay, with river views and walks along the bank. Many mid-range and upscale hotels are here.",
          "Main market and bus stand: walk to restaurants, shops and the union taxi stand for Aru, Betaab and Chandanwari.",
          "Aru road: quieter hotels in pine forest, a few minutes' drive from town.",
          "Chandanwari road: close to the Betaab Valley and Chandanwari turn-off; busy during the Amarnath Yatra.",
          "Villages down valley, such as Aishmuqam and Mattan: cheaper guest houses and homestays, about 30 to 45 minutes from town.",
        ],
      },
      {
        h: "Well-known stays",
        p: [
          "Welcomhotel Pine N Peak, run by ITC, is one of Pahalgam's best-known upscale hotels, on the riverside near the town. The Pahalgam Hotel is a long-established family-run hotel in the town. JKTDC runs huts and a tourist complex. Many mid-range hotels line the Lidder and the main road, and there are homestays and riverside camps in summer.",
        ],
      },
      {
        h: "Pahalgam by season",
        list: [
          "April to June: green valleys, rafting on the Lidder, snow still near Chandanwari. The busiest months with families.",
          "July and August: the Amarnath Yatra starts from Chandanwari; security is tighter and traffic slower, and many rooms are booked by pilgrims.",
          "September and October: clear skies, autumn colour and good value.",
          "November to March: snowy and quiet. Many hotels stay open but some close; heating is essential.",
        ],
      },
      {
        h: "How many nights",
        p: [
          "Two nights lets you see Aru Valley, Betaab Valley and Chandanwari by union taxi, walk along the Lidder and visit the old Mamaleshwar temple. One night is the minimum to avoid six hours of driving in a day. Add a third night for rafting, pony treks or a slow, quiet stay, which is how many honeymooners and older travellers like to spend Pahalgam.",
          "Note: Baisaran meadow has been closed to visitors since April 2025. Check its current status locally.",
        ],
      },
      roomChecks("Pahalgam"),
      {
        h: "Getting around from your hotel",
        p: [
          "Your Srinagar taxi can drop you at the hotel, but Pahalgam's sightseeing points are reached by local union taxis from the taxi stand. Hotels can call one for you. Ponies for the meadow walks are hired at the start points at rates set by the local authority.",
        ],
      },
    ],
    faqs: [
      { q: "Which is the best area to stay in Pahalgam?", a: "The Lidder riverside for views and atmosphere, the main market for convenience, or the Aru road for quiet. All are within a few minutes of the union taxi stand." },
      { q: "Should I book Pahalgam hotels early for the Amarnath Yatra months?", a: "Yes. In July and August many rooms are booked by pilgrims, and security can slow traffic." },
      { q: "Are Pahalgam hotels open in winter?", a: "Many are, but not all. Choose one with heating and power backup, and confirm it is open on your dates." },
      { q: "Is Baisaran open?", a: "It has been closed to visitors since April 2025. Ask locally for the current status." },
    ],
  },
  {
    slug: "where-to-stay-in-sonamarg",
    title: "Where to Stay in Sonamarg: Hotels, Huts and Camps, and When They Open",
    description: "Where to stay in Sonamarg: hotels on the main road, JKTDC huts and summer camps near Thajiwas, open months, winter closures and day trip versus overnight.",
    category: "Planning",
    destination: "kashmir",
    city: "sonamarg",
    date: DATE,
    intro:
      "Sonamarg has a short season for stays. Hotels along the main road, JKTDC huts and summer camps near Thajiwas Glacier open from about April or May to October or November, and most close in winter. Most travellers visit Sonamarg as a day trip from Srinagar, but a night here makes sense if you are going on to Ladakh, starting the Great Lakes trek, or want the glacier valley without the day crowds.",
    sections: [
      {
        h: "Types of stay",
        list: [
          "Hotels on the main road: mid-range hotels in the town, with views across the Sindh river towards the glacier valley.",
          "JKTDC huts and tourist complex: simple, well located and good value; book ahead in summer.",
          "Camps and tents: summer camps near Thajiwas and along the river, popular with trekkers and groups.",
          "Baltal: the base for the Amarnath Yatra's Baltal route, with seasonal tent camps for pilgrims.",
        ],
      },
      {
        h: "When to stay overnight",
        list: [
          "On a Srinagar to Leh road trip: Sonamarg is the natural first night before Zojila.",
          "Before the Kashmir Great Lakes trek, which starts from Sonamarg (Shitkadi).",
          "For river rafting and slow walks to Thajiwas in the morning, before the day trippers arrive.",
          "During the Amarnath Yatra, if you are taking the Baltal route.",
        ],
      },
      {
        h: "Sonamarg in winter",
        p: [
          "Since the Z-Morh tunnel opened in January 2025, Sonamarg is reachable on most winter days. However, most hotels still close from around November to March, and the few that stay open have limited services. Treat winter Sonamarg as a snow day trip from Srinagar unless your agent confirms an open hotel with heating.",
        ],
      },
      {
        h: "Sonamarg by month",
        list: [
          "April and May: snow walls and fresh meadows; hotels reopening.",
          "June to August: peak season with trekkers, rafting and the Amarnath Yatra.",
          "September and October: quiet, clear and beautiful; hotels begin to close by late October.",
          "November to March: day trips only for most travellers.",
        ],
      },
      roomChecks("Sonamarg"),
      {
        h: "Eating and facilities",
        p: [
          "Sonamarg's restaurants are dhabas along the main road and hotel dining rooms. There are a few ATMs and pharmacies in the town, but signal and power can be patchy. Carry cash for ponies and union taxis to Zero Point, and warm layers even in summer: nights at about 2,800 m are cold.",
        ],
      },
    ],
    faqs: [
      { q: "Is it worth staying overnight in Sonamarg?", a: "For a Ladakh road trip, the Great Lakes trek or a quieter glacier visit, yes. Otherwise most people do it as a day trip from Srinagar." },
      { q: "Are Sonamarg hotels open in winter?", a: "Most close from around November to March. A few may stay open with limited services; confirm before booking." },
      { q: "Are there camps in Sonamarg?", a: "Yes, in summer, near Thajiwas and along the Sindh river, and at Baltal during the Amarnath Yatra." },
      { q: "How far is Sonamarg from Srinagar?", a: "About 80 km, 2.5 to 3 hours by road." },
    ],
  },
  {
    slug: "best-areas-to-stay-in-srinagar",
    title: "Best Areas to Stay in Srinagar: Dal Lake, Rajbagh, Lal Chowk, Nishat or Nigeen",
    description: "Best areas to stay in Srinagar compared: Boulevard Road on Dal Lake, Rajbagh, Lal Chowk, Nishat and the gardens side, Gupkar, and houseboats on Dal or Nigeen.",
    category: "Planning",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Where you stay in Srinagar shapes your trip. Boulevard Road on Dal Lake puts you on the water with shikaras at the door but is busy; Rajbagh is quiet and central on the Jhelum; Lal Chowk and Residency Road are best for shopping and food; Nishat and the gardens side are calm and close to the Mughal gardens; and a houseboat on Dal or Nigeen lake is the stay most visitors remember. Many trips combine one houseboat night with hotel nights.",
    sections: [
      {
        h: "Boulevard Road and Dal Lake",
        p: [
          "The lakeside road with views over Dal, the numbered shikara ghats and many hotels. Walk out of your hotel to a shikara, the floating market or a sunset by the water. It is the most convenient area for first-time visitors, but traffic is heavy in the evening and peak season, and rooms facing the lake cost more than rooms facing the road behind.",
        ],
      },
      {
        h: "Rajbagh and the Jhelum riverfront",
        p: [
          "A residential area on the Jhelum, a few minutes from both Dal Lake and Lal Chowk. Quieter than Boulevard Road, with good mid-range hotels and some upscale stays on the riverfront. A good base for families who want calm evenings and easy access to the city.",
        ],
      },
      {
        h: "Lal Chowk and Residency Road",
        p: [
          "The commercial heart of Srinagar: shops, restaurants, bakeries and the Government Arts Emporium in the old Residency building. Best for travellers who want to shop and eat, and who do not mind noise. It is also close to the old city for the Jamia Masjid and Khanqah-e-Moula.",
        ],
      },
      {
        h: "Nishat, Brein and the gardens side",
        p: [
          "Along the eastern shore of Dal, near Nishat Bagh, Shalimar Bagh and Harwan. Calmer, greener and closer to the Mughal gardens, with resorts set back from the road. Further from Lal Chowk, so you rely on taxis for evenings in town.",
        ],
      },
      {
        h: "Gupkar Road and the Zabarwan foothills",
        p: [
          "Above the southern end of Dal, where The LaLiT Grand Palace sits in its old palace grounds and Taj Dal View looks over the lake from Kralsangri. Quiet, upscale and with the best views over the city, but you need a car for everything.",
        ],
      },
      {
        h: "Houseboats on Dal and Nigeen",
        p: [
          "Dal Lake houseboats are reached by shikara from the Boulevard ghats and are closest to the classic Kashmir picture. Nigeen Lake houseboats, to the north, are quieter and often reached directly from the shore. One or two nights is enough for most travellers; the rest of the trip is easier from a hotel.",
        ],
      },
      {
        h: "Quick picker",
        list: [
          "First visit, want lake views and shikaras: Boulevard Road.",
          "Family, want calm and central: Rajbagh.",
          "Shopping and food: Lal Chowk or Residency Road.",
          "Gardens and quiet: Nishat or Brein.",
          "Luxury and views: Gupkar or the Zabarwan foothills.",
          "Once in a lifetime: a night on a houseboat on Dal or Nigeen.",
        ],
      },
      roomChecks("Srinagar"),
    ],
    faqs: [
      { q: "Which is the best area to stay in Srinagar for first-time visitors?", a: "Boulevard Road on Dal Lake, for the lake, shikaras and sunsets right outside. Rajbagh is the quieter alternative." },
      { q: "Is it better to stay on a houseboat or in a hotel in Srinagar?", a: "Most travellers do both: one or two houseboat nights for the experience, then a hotel for easier access, heating and space." },
      { q: "Is Lal Chowk a good place to stay?", a: "For shopping, food and the old city, yes. It is busier and noisier than Rajbagh or the gardens side." },
      { q: "How far is Dal Lake from Srinagar airport?", a: "About 12 to 15 km, 30 to 45 minutes by taxi." },
    ],
  },
  {
    slug: "nigeen-lake-houseboats",
    title: "Nigeen Lake Houseboats in Srinagar: Why Choose Nigeen, Categories and Booking",
    description: "Nigeen Lake houseboats explained: why Nigeen is quieter than Dal, how houseboat categories work, access from the shore, what to check and when to go.",
    category: "Honeymoon",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Nigeen Lake is the quieter, greener northern arm of Srinagar's lake system, joined to Dal by channels and surrounded by willows, chinars and old residential neighbourhoods. Its houseboats are fewer and more spread out than on Dal, many can be reached directly from the shore without a shikara, and the water is calmer. Honeymooners, families with children and anyone who wants a peaceful night on the water often prefer Nigeen to Dal.",
    sections: [
      {
        h: "Nigeen vs Dal",
        list: [
          "Atmosphere: Nigeen is calm and residential; Dal is lively, with vendors in shikaras and the Boulevard Road lights.",
          "Access: many Nigeen boats are moored by the shore and reached on foot; Dal boats are usually reached by shikara from the ghats.",
          "Views: Nigeen looks towards Hari Parbat and the Zabarwan hills; Dal has the classic wide-lake views and the Boulevard.",
          "Convenience: Dal is closer to Boulevard restaurants and shopping; Nigeen is about 15 to 20 minutes from Lal Chowk by taxi.",
          "Shikara rides: from Nigeen you can take a long shikara ride through the channels into Dal and the floating market.",
        ],
      },
      {
        h: "Houseboat categories",
        p: [
          "Srinagar houseboats are graded by the J&K Tourism Department into categories, from Deluxe at the top down to lower classes, based on size, furnishing and facilities. Deluxe boats have carved walnut panelling, a sitting room, dining room and two to four bedrooms with attached bathrooms. The category sets the expected facilities, but quality varies, so recent reviews and photos matter.",
        ],
      },
      {
        h: "Well-known Nigeen boats",
        p: [
          "WelcomHeritage Gurkha Houseboats is one of the best-known groups on Nigeen, with several boats and a long history. Many family-owned Deluxe boats moor along the same shore. Ask your agent for the boat's name, so you can check reviews and photos before you confirm.",
        ],
      },
      {
        h: "What to check before booking",
        list: [
          "Whether the boat is reached by shikara or on foot from the shore.",
          "Heating in the bedrooms in winter, and hot water hours.",
          "Whether meals are included: most houseboats include breakfast and dinner cooked on board.",
          "Whether the shikara ride is included or charged separately.",
          "Wi-Fi and power backup, if you need to work.",
        ],
      },
      {
        h: "Best time for a Nigeen houseboat",
        list: [
          "April and May: blossom and green willows, pleasant days and cool nights.",
          "June to August: warm days and lively lake life; book early.",
          "September to November: clear skies and golden chinars, the most beautiful season on the water.",
          "December to February: cold and misty, sometimes with snow on the boat roofs. Choose a boat with good heating.",
        ],
      },
      {
        h: "How many nights",
        p: [
          "One or two nights on a houseboat is the usual choice, either at the start of the trip for the Kashmir welcome, or at the end to slow down. Longer stays are lovely but less practical for day trips to Gulmarg, Pahalgam and Sonamarg, which are easier from a hotel.",
        ],
      },
    ],
    faqs: [
      { q: "Is Nigeen Lake better than Dal Lake for a houseboat?", a: "For quiet, yes. Nigeen is calmer and more residential. Dal is livelier, with more views and easier access to Boulevard Road." },
      { q: "Do I need a shikara to reach a Nigeen houseboat?", a: "Many Nigeen boats can be reached on foot from the shore. Some still need a short shikara crossing." },
      { q: "Are meals included on Nigeen houseboats?", a: "Usually breakfast and dinner are included and cooked on board. Confirm when you book." },
      { q: "Can I take a shikara from Nigeen to Dal Lake?", a: "Yes. A long shikara ride through the channels connects Nigeen with Dal and the floating market." },
    ],
  },
  {
    slug: "houseboat-vs-hotel-in-srinagar",
    title: "Houseboat vs Hotel in Srinagar: Which to Choose and How to Mix Them",
    description: "Houseboat or hotel in Srinagar? Compare comfort, heating, access, privacy, food and price feel, and how most travellers mix one houseboat night with hotels.",
    category: "Planning",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "A houseboat gives you the Kashmir moment: a carved walnut boat on Dal or Nigeen lake, kahwa on the deck and the call to prayer drifting across the water. A hotel gives you easier access, more space, stronger heating and a quick start for day trips. The answer for most travellers is both: one or two nights on a houseboat and the rest of the Srinagar stay in a hotel.",
    sections: [
      {
        h: "Comparison at a glance",
        list: [
          "Experience: houseboats win, with the lake at your doorstep and old-world interiors.",
          "Access: hotels win, with car access to the door. Dal houseboats need a shikara for every trip ashore.",
          "Space: hotel rooms are usually larger; houseboat bedrooms are cosy and share a common sitting room.",
          "Heating in winter: hotels are more reliable; good houseboats have heaters or central heating, but older boats can be cold.",
          "Food: houseboats serve home-style Kashmiri meals; hotels have menus and room service.",
          "Privacy: a full houseboat booked for your family is very private; shared boats have other guests in the common rooms.",
        ],
      },
      {
        h: "Who should choose a houseboat",
        p: [
          "Honeymooners and couples love the romance. Families with older children enjoy the novelty. Photographers want the sunrise on the lake. Anyone visiting from April to October, when the weather on the water is at its best, will remember it. One night is enough to get the feeling; two nights lets you relax.",
        ],
      },
      {
        h: "Who should choose a hotel",
        p: [
          "Elderly travellers who find the shikara steps difficult, families with toddlers, people visiting in deep winter who want strong heating, and those with lots of luggage or early-morning day trips. Lakeside hotels on Boulevard Road give you the view without the boat.",
        ],
      },
      {
        h: "How to mix them",
        list: [
          "Arrival night on a houseboat, then hotels for the rest of the trip.",
          "Hotels for the busy Gulmarg and Sonamarg days, then a last night on a houseboat to slow down before you fly home.",
          "In winter, a single houseboat night in a well-heated Deluxe boat and hotels elsewhere.",
        ],
      },
      {
        h: "Dal or Nigeen for the houseboat night",
        p: [
          "Choose Dal for the classic view, the Boulevard nearby and a lively lake. Choose Nigeen for quiet, a residential feel and boats that are often reached on foot. Both have Deluxe category boats; the category matters less than recent reviews and photos.",
        ],
      },
      {
        h: "Questions to ask before you book either",
        list: [
          "Is heating included in winter, and what kind?",
          "Are breakfast and dinner included?",
          "Is the shikara transfer to the houseboat included at any hour?",
          "How far is the hotel from the lake or the old city?",
          "Is there power backup and hot water at all hours?",
        ],
      },
    ],
    faqs: [
      { q: "Is a houseboat in Srinagar safe?", a: "Registered houseboats are a long-established, regulated stay. Choose a graded boat with recent reviews, and keep valuables locked as you would in any hotel." },
      { q: "How many nights should I stay on a houseboat?", a: "One or two nights for most travellers, combined with hotel nights for day trips." },
      { q: "Are houseboats cold in winter?", a: "Older boats can be. Deluxe boats with heaters or central heating are comfortable; ask before booking." },
      { q: "Is a houseboat suitable for elderly parents?", a: "Choose a Nigeen boat reached from the shore, or a lakeside hotel, if stepping in and out of a shikara is difficult." },
    ],
  },
  {
    slug: "luxury-hotels-in-kashmir",
    title: "Luxury Hotels in Kashmir: Srinagar Palaces, Gulmarg Resorts and Pahalgam Stays",
    description: "Luxury hotels in Kashmir: The LaLiT Grand Palace, Taj Dal View, Radisson Collection Riverfront, Khyber in Gulmarg, Pine N Peak in Pahalgam and deluxe houseboats.",
    category: "Honeymoon",
    destination: "kashmir",
    date: DATE,
    intro:
      "Kashmir's luxury stays are a mix of history and views: a Maharaja's palace on Gupkar Road, a hill-top hotel looking over Dal Lake, riverfront hotels on the Jhelum, a ski resort beside the Gulmarg Gondola, riverside hotels on the Lidder in Pahalgam and Deluxe houseboats on Dal and Nigeen. Supply at the top end is limited, so for May, June and the winter holidays book two to three months ahead.",
    sections: [
      {
        h: "Srinagar",
        list: [
          "The LaLiT Grand Palace: built in 1910 as a palace for the Maharaja of Kashmir, set in large lawns with old chinar trees above Dal Lake on Gupkar Road.",
          "Taj Dal View: on Kralsangri hill above the southern end of Dal, with lake views from most rooms.",
          "Radisson Collection Hotel and Spa, Riverfront: a newer upscale hotel on the Jhelum.",
          "Four Points by Sheraton and Radisson Hotel Srinagar: international brands with dependable rooms and heating.",
          "Fortune Resort Heevan: a well-known upscale hotel in the city.",
        ],
      },
      {
        h: "Gulmarg",
        list: [
          "Khyber Himalayan Resort and Spa: Gulmarg's best-known luxury resort, near the Gondola, with a spa and heated pool.",
          "The Hotel Highlands Park: a heritage property with wooden cottages on the meadow.",
        ],
      },
      {
        h: "Pahalgam",
        list: [
          "Welcomhotel Pine N Peak by ITC: an upscale riverside hotel near the town.",
          "Riverside upscale hotels along the Lidder, many with mountain-view rooms and good heating.",
        ],
      },
      {
        h: "Luxury houseboats",
        p: [
          "Deluxe houseboats on Dal and Nigeen, with carved walnut interiors, private sun decks and butler-style service, are a luxury stay of their own. Sukoon is a well-known luxury boat on Dal, and WelcomHeritage Gurkha Houseboats is a long-established group on Nigeen. Book a full boat for privacy.",
        ],
      },
      {
        h: "A 6-night luxury Kashmir plan",
        days: [
          "Arrive in Srinagar. Check into a palace or lake-view hotel and take a private sunset shikara.",
          "Mughal gardens, Pari Mahal and an evening wazwan dinner.",
          "Drive to Gulmarg. Stay near the Gondola; spa in the evening.",
          "Gondola to Phase 2 in the morning; afternoon on the meadow.",
          "Drive to Pahalgam via Pampore. Riverside hotel on the Lidder.",
          "Aru and Betaab by private union taxi; quiet riverside evening.",
          "Return to Srinagar for a final night on a Deluxe houseboat, then fly home.",
        ],
      },
      {
        h: "What makes a Kashmir stay truly luxury",
        list: [
          "Reliable central heating and power backup in winter.",
          "Views: Dal Lake, the Gulmarg meadow or the Lidder river from the room.",
          "Quiet locations away from the busiest roads.",
          "Private transfers in an Innova Crysta or premium SUV.",
          "Private shikara and Gondola timings arranged so you avoid queues.",
        ],
      },
    ],
    faqs: [
      { q: "Which is the best luxury hotel in Srinagar?", a: "The LaLiT Grand Palace for heritage and lawns, Taj Dal View for lake views. Both book out early in peak months." },
      { q: "Is there a luxury resort in Gulmarg?", a: "Yes. Khyber Himalayan Resort and Spa near the Gondola is the best known, alongside the heritage Highlands Park." },
      { q: "When should I book luxury hotels in Kashmir?", a: "Two to three months ahead for May, June and the Christmas to New Year period." },
      { q: "Is a luxury houseboat worth it?", a: "For one or two nights, yes. A Deluxe boat booked for your group gives privacy, home-cooked meals and the lake at your door." },
    ],
  },
  {
    slug: "budget-hotels-in-srinagar",
    title: "Budget Hotels and Guest Houses in Srinagar: Where to Look and What to Check",
    description: "Budget stays in Srinagar: guest houses near Dal Gate and Boulevard back lanes, Rajbagh and Lal Chowk, lower category houseboats, and what to check before you pay.",
    category: "Planning",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Srinagar has plenty of budget stays: guest houses and small hotels in the lanes behind Boulevard Road and Dal Gate, around Rajbagh and Lal Chowk, family-run homestays, and lower category houseboats. The trade-off for a lower rate is usually a room without a lake view, simpler heating and fewer facilities. Off-season months like March, October and November bring the best value.",
    sections: [
      {
        h: "Where to look",
        list: [
          "Dal Gate and the lanes behind Boulevard Road: walk to the lake and shikara ghats; rooms away from the road are cheaper than lake-view rooms.",
          "Rajbagh: quiet residential area with small hotels and guest houses.",
          "Lal Chowk and Residency Road: central, good for food and shopping.",
          "Homestays in residential areas: a home-cooked Kashmiri meal and local advice.",
          "Lower category houseboats on Dal and Nigeen: simpler boats with the lake experience.",
        ],
      },
      {
        h: "What to check",
        list: [
          "Heating in winter: electric heaters may be charged extra; ask.",
          "Hot water hours and power backup.",
          "Recent photos of the exact room, and reviews from the last few months.",
          "Whether the price includes breakfast and taxes.",
          "Road access for your taxi and luggage.",
          "Safety basics: a lockable door, a reception desk at night and a contact number.",
        ],
      },
      {
        h: "Best months for value",
        p: [
          "March, early April before the tulip rush, October and November are the best months for budget travellers: rates drop, the weather is pleasant and the city is quieter. May, June and the Christmas to New Year week are the most expensive; budget rooms sell out quickly then.",
        ],
      },
      {
        h: "Budget tips for the whole trip",
        list: [
          "Use Srinagar as a base and do Gulmarg, Sonamarg, Doodhpathri and Yusmarg as day trips to avoid paying for hill hotels.",
          "Share a cab: Kashmir taxis are priced per vehicle.",
          "Eat at local restaurants and bakeries; a Kashmiri breakfast of bread and noon chai is cheap and filling.",
          "Book the Gulmarg Gondola online on the official portal to avoid agents' margins.",
          "Travel mid-week in peak season; weekends bring local tourists too.",
        ],
      },
      {
        h: "When a budget package beats booking yourself",
        p: [
          "A budget Kashmir package bundles hotels, a shared or private cab and transfers at agent rates, which often works out cheaper than booking each night separately in peak season. Compare at least two quotes, and check the hotel names and the cab model in each.",
        ],
      },
    ],
    faqs: [
      { q: "Where can I find cheap hotels in Srinagar near Dal Lake?", a: "In the lanes behind Boulevard Road and around Dal Gate. Rooms without a lake view are much cheaper." },
      { q: "Are budget hotels in Srinagar heated in winter?", a: "Many use electric heaters, sometimes charged extra. Confirm before you book a winter stay." },
      { q: "When is Srinagar cheapest?", a: "March, October and November, outside the tulip season and winter holidays." },
      { q: "Is a homestay in Srinagar a good budget option?", a: "Yes. Homestays offer local food and advice; check reviews and location." },
    ],
  },
  {
    slug: "hotels-in-katra-near-vaishno-devi",
    title: "Hotels in Katra Near Vaishno Devi: Best Areas, Shrine Board Stays and Tips",
    description: "Where to stay in Katra for Vaishno Devi: hotels near the bus stand and Banganga, near the railway station, Shrine Board rooms and what to check before booking.",
    category: "Pilgrimage",
    destination: "kashmir",
    city: "katra",
    date: DATE,
    intro:
      "Katra is the base town for the Mata Vaishno Devi yatra, with hundreds of hotels and guest houses. Stay near the main market and bus stand to walk to the yatra start at Banganga, near the railway station for early trains to Srinagar, or in the Shrine Board's own accommodation, booked on its official website. Most pilgrims stay two nights: one before the yatra and one to rest after it.",
    sections: [
      {
        h: "Best areas in Katra",
        list: [
          "Main market and bus stand: walk to Banganga and the Yatra Registration counters; restaurants and shops around you.",
          "Banganga road: closest to the start of the trek, quieter at night.",
          "Near Katra railway station: convenient for the Vande Bharat to Srinagar and trains from Delhi; a short taxi ride to the yatra start.",
          "Along the Jammu road: newer hotels with parking, suited to families travelling by car.",
        ],
      },
      {
        h: "Shrine Board accommodation",
        p: [
          "The Shri Mata Vaishno Devi Shrine Board runs rooms and dormitories in Katra and at points on the route including Adhkuwari and the Bhawan. They are basic, clean and close to the yatra, and are booked only on the Shrine Board's official website. Book early for Navratri and summer holidays.",
        ],
      },
      {
        h: "Planning around the yatra",
        p: [
          "The trek from Banganga to the Bhawan is about 12 to 13 km on a paved path, with ponies, palkis, battery cars on part of the route and a helicopter from Katra to Sanjichhat. Many pilgrims start in the evening and return the next morning, or start before dawn to avoid the heat. Keep the day after the yatra free of long drives.",
          "Yatra registration is compulsory: collect your RFID yatra card at the counters in Katra or register online, and carry it throughout.",
        ],
      },
      {
        h: "What to check before booking",
        list: [
          "Distance to Banganga or the railway station, depending on your plan.",
          "Lift access if you are travelling with elderly parents.",
          "Hot water and heating from November to February, when Katra nights are cold.",
          "Early check-in or late check-out for night yatras.",
          "Cloakroom for luggage while you climb.",
        ],
      },
      {
        h: "Katra to Kashmir",
        p: [
          "After the yatra, the Vande Bharat from Katra to Srinagar takes about 3 hours, compared with 6 to 8 hours by road. Book it as soon as your dates are fixed. A Vaishno Devi and Kashmir package can cover the Katra hotel, the yatra day and transfers to Srinagar together.",
        ],
      },
      {
        h: "Food in Katra",
        p: [
          "Katra is a vegetarian town: hotels and restaurants serve vegetarian food, with plenty of North Indian, South Indian and Gujarati options, and no alcohol. Rajma chawal, kaladi cheese and local sweets are worth trying.",
        ],
      },
    ],
    faqs: [
      { q: "Which is the best area to stay in Katra?", a: "Near the main market and bus stand to walk to Banganga, or near the railway station for early trains to Srinagar." },
      { q: "How do I book Shrine Board rooms in Katra?", a: "Only on the official Shri Mata Vaishno Devi Shrine Board website. Book early for Navratri and summer holidays." },
      { q: "How many nights should I stay in Katra?", a: "Two nights for most pilgrims: one before the yatra and one to rest after it." },
      { q: "Is Katra close to Srinagar by train?", a: "Yes. The Vande Bharat from Katra to Srinagar takes about 3 hours." },
    ],
  },
];

const MORE: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "where-to-stay-in-gulmarg": {
    sections: [
      {
        h: "Gulmarg in a Kashmir itinerary",
        p: [
          "The most common pattern is two or three nights in Srinagar, one night in Gulmarg and two in Pahalgam. Put Gulmarg right after Srinagar so the drive is short, and book the Gondola for the morning after you arrive, when queues are shorter and the weather on Apharwat is usually clearer. In winter, add a buffer: if snow closes the Tangmarg road for a few hours, you still keep your Gondola day.",
          "Skiers often stay four to seven nights, take lessons with a registered instructor at the Indian Institute of Skiing and Mountaineering or a private school, and ski Phase 2 when it is open. Families usually prefer one night and the sledging slopes near the meadow.",
        ],
      },
      {
        h: "Travelling with elderly parents or small children",
        list: [
          "Choose a hotel close to the Gondola or on the flat meadow, so walks are short.",
          "Ask for a ground floor room or a hotel with a lift.",
          "Rest the first afternoon: Gulmarg is at about 2,650 m and Phase 2 at about 3,950 m.",
          "Carry snow boots and gloves in winter; hire them in Tangmarg if needed.",
        ],
      },
    ],
    faqs: [
      { q: "How many nights should I stay in Gulmarg?", a: "One night for most visitors; three to seven for skiers. Many simply visit as a day trip from Srinagar." },
    ],
  },
  "where-to-stay-in-pahalgam": {
    sections: [
      {
        h: "Pahalgam for honeymooners, families and groups",
        list: [
          "Honeymooners: a riverside room with a balcony over the Lidder, and two nights so one day is unhurried.",
          "Families: a hotel near the main market, close to the union taxi stand, parks and restaurants.",
          "Elderly travellers: a ground floor or lift-access room near the town, avoiding steep driveways.",
          "Groups: larger hotels on the main road with parking for a tempo traveller.",
          "Trekkers: guest houses on the Aru road for an early start towards Lidderwat and Kolahoi.",
        ],
      },
      {
        h: "A two-night Pahalgam plan",
        days: [
          "Drive from Srinagar via Pampore and Awantipora. Afternoon walk along the Lidder and the Mamaleshwar temple.",
          "Union taxi to Betaab Valley, Aru Valley and Chandanwari. Evening by the river.",
          "Optional morning rafting or a pony ride, then drive back to Srinagar.",
        ],
      },
    ],
    faqs: [
      { q: "Is Pahalgam better than Gulmarg for an overnight stay?", a: "For a relaxed riverside stay and several valleys to explore, yes. Gulmarg is better for skiing and the Gondola." },
      { q: "Are there homestays in Pahalgam?", a: "Yes, in the town and in villages down the valley. They offer home-cooked food and are good value outside peak months." },
    ],
  },
  "where-to-stay-in-sonamarg": {
    sections: [
      {
        h: "A Sonamarg overnight plan",
        days: [
          "Drive from Srinagar via Ganderbal and Kangan; stop for lunch by the Sindh. Afternoon pony ride or walk to Thajiwas Glacier.",
          "Early morning by the river before the crowds; union taxi to Zero Point if the road is open, then return to Srinagar or continue over Zojila towards Kargil.",
        ],
      },
      {
        h: "Sonamarg for trekkers",
        p: [
          "The Kashmir Great Lakes trek usually starts near Sonamarg at Shitkadi and finishes at Naranag, taking about seven days through Nichnai, Vishansar, Krishansar, Gadsar, Satsar and the Gangabal twin lakes. It is run from July to September, depending on snow. Trekkers often spend a night in Sonamarg to acclimatise and meet their team. Other walks from Sonamarg include Thajiwas and the Baltal valley.",
        ],
      },
      {
        h: "Sonamarg for families and elderly travellers",
        p: [
          "Sonamarg is at about 2,800 m, a little higher than Gulmarg, and the walk to Thajiwas is uneven, with streams and loose stones. Elderly travellers usually take a pony or stay near the riverbank. Keep the first evening restful if you are staying over, and carry warm layers: even in July the wind off the glacier is cold.",
        ],
      },
    ],
    faqs: [
      { q: "Can I stay at Zero Point or Zojila?", a: "No. There is no tourist accommodation at Zero Point. Stay in Sonamarg and visit by union taxi." },
      { q: "Is Sonamarg good for a honeymoon night?", a: "In summer, yes: a quiet riverside room and an early walk to Thajiwas. In winter, most hotels are closed." },
    ],
  },
  "best-areas-to-stay-in-srinagar": {
    sections: [
      {
        h: "Srinagar by season, for where you stay",
        list: [
          "March and April: tulip season. Boulevard Road and the gardens side are closest to the Tulip Garden; book early.",
          "May to August: warm days on the lake. Lake-view rooms and houseboats are at their best, but busiest.",
          "September to November: chinar season. Nishat, Naseem Bagh and the old city are beautiful; rates soften.",
          "December to February: cold. Prioritise hotels with central heating over lake views.",
        ],
      },
      {
        h: "How many nights in Srinagar",
        p: [
          "Plan two to three nights in Srinagar on a 6 or 7 night Kashmir trip, and more if you use the city as a base for day trips to Gulmarg, Sonamarg, Doodhpathri and Yusmarg. Using Srinagar as a base saves packing and unpacking, and the city has the widest choice of rooms and restaurants. Spending all nights in one Srinagar hotel works well for families with elderly parents.",
        ],
      },
    ],
    faqs: [
      { q: "Can I use Srinagar as a base for all day trips?", a: "Yes, for Gulmarg, Sonamarg, Doodhpathri and Yusmarg. Pahalgam is better with one or two nights because of the longer drive." },
      { q: "Is it safe to stay in the old city?", a: "Many travellers visit the old city by day. For an overnight stay, most choose Boulevard Road, Rajbagh or the gardens side for easier access." },
    ],
  },
  "nigeen-lake-houseboats": {
    sections: [
      {
        h: "Life on Nigeen",
        p: [
          "Mornings on Nigeen start with vegetable sellers and flower sellers paddling by, kingfishers on the willows and mist on the water. Through the day, families on shore go about their business and children paddle to school in small boats. In the evening, the lake turns gold behind Hari Parbat and the lights of the houseboats come on. It is the experience of living on the lake, rather than watching a busy tourist lake.",
          "Nigeen is also a good base for walks to Hazratbal Shrine and the University of Kashmir lakefront, and for shikara rides through the old channels to Dal.",
        ],
      },
      {
        h: "A shikara route from Nigeen",
        list: [
          "Start at your Nigeen houseboat in the early morning.",
          "Paddle through the channels past old houses and floating gardens.",
          "Reach Dal Lake and the floating vegetable market near dawn.",
          "Continue to Char Chinar island and the Boulevard side.",
          "Return through the Nehru Park side for breakfast on the boat.",
        ],
      },
      {
        h: "Nigeen for honeymooners and families",
        p: [
          "Honeymooners like Nigeen for privacy: book a full houseboat with one or two bedrooms. Families like it because the water is calm and many boats are reached on foot, which is easier with children and elderly parents. Ask about meal timings and whether the cook can make lighter, less spicy meals as well as Kashmiri dishes.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Nigeen Lake from Dal Gate?", a: "About 15 to 20 minutes by taxi, on the north side of the city near Hazratbal." },
      { q: "Is Nigeen Lake good in winter?", a: "It is quiet and atmospheric, sometimes with snow. Choose a Deluxe boat with reliable heating." },
    ],
  },
  "houseboat-vs-hotel-in-srinagar": {
    sections: [
      {
        h: "A sample plan that mixes both",
        days: [
          "Arrive in Srinagar and check into a Deluxe houseboat on Dal or Nigeen. Sunset shikara ride and dinner on board.",
          "Morning floating market by shikara, then move to a hotel. Mughal gardens in the afternoon.",
          "Day trip to Gulmarg from the hotel.",
          "Day trip to Sonamarg from the hotel.",
          "Drive to Pahalgam for two nights.",
          "Pahalgam valleys by union taxi.",
          "Return to Srinagar and fly home.",
        ],
      },
      {
        h: "What a houseboat stay is like",
        p: [
          "Most houseboats have a front deck, a sitting room with carved walnut panels and carpets, a dining room and two to four bedrooms with attached bathrooms. The owner's family often lives on a smaller boat or the shore behind and cooks the meals. Kahwa is served on arrival, and the houseboat's own shikara takes you ashore. It is closer to a homestay than a hotel, which is the charm.",
        ],
      },
      {
        h: "What a Srinagar hotel offers instead",
        p: [
          "Hotels give larger rooms, central heating, lifts, room service, parking at the door and easier early starts for day trips. Lakeside hotels on Boulevard Road keep the view; Rajbagh and the gardens side are quieter. For travellers in deep winter or with mobility needs, a good hotel is the more comfortable choice.",
        ],
      },
    ],
    faqs: [
      { q: "Is a houseboat more expensive than a hotel?", a: "It depends on the category. Deluxe boats cost about the same as good hotels, usually with meals included; lower categories are cheaper." },
      { q: "Can I book a whole houseboat for my family?", a: "Yes. Booking all rooms gives you the boat to yourselves, which is ideal for families and honeymooners." },
    ],
  },
  "luxury-hotels-in-kashmir": {
    sections: [
      {
        h: "Luxury by season",
        list: [
          "Spring (March to May): tulips, blossom and fresh green. Palace lawns and lakeside terraces are at their best.",
          "Summer (June to August): long days and cool nights in Gulmarg and Pahalgam. Book riverside and meadow-view rooms early.",
          "Autumn (September to November): golden chinars. Srinagar's heritage hotels look their finest.",
          "Winter (December to February): snow, skiing and fireside evenings. Choose hotels with central heating and spa facilities.",
        ],
      },
      {
        h: "Luxury experiences to add",
        list: [
          "A private shikara at sunrise with breakfast on the water.",
          "A private wazwan dinner with a traditional waza cook.",
          "A pashmina or carpet visit with a craftsman at work.",
          "A round of golf at Royal Springs in Srinagar or the Gulmarg course.",
          "A private ski lesson in Gulmarg with a registered instructor.",
          "A heritage walk through old Srinagar with a local guide.",
        ],
      },
      {
        h: "Honeymoon luxury",
        p: [
          "For honeymoons, the classic luxury combination is a palace or lake-view hotel in Srinagar, a Deluxe houseboat night, a Gulmarg resort night near the Gondola and a riverside hotel in Pahalgam. Ask for a room upgrade, flower decoration and a candlelight dinner at booking; good hotels arrange these with notice. Private transfers in an Innova Crysta keep the long drives comfortable.",
        ],
      },
    ],
    faqs: [
      { q: "Are luxury hotels in Kashmir heated?", a: "Yes. Top hotels have central heating and power backup, which matters most from December to February." },
      { q: "Is there a luxury hotel in Sonamarg?", a: "Sonamarg has mid-range hotels and camps rather than luxury resorts, and most close in winter. Luxury travellers usually visit it as a day trip." },
    ],
  },
  "budget-hotels-in-srinagar": {
    sections: [
      {
        h: "A budget 5-night plan from one Srinagar base",
        days: [
          "Arrive and check into a guest house near Dal Gate. Evening walk on Boulevard Road and a shared shikara ride.",
          "Mughal gardens by bus or shared taxi; old city and Jamia Masjid.",
          "Day trip to Gulmarg; book the Gondola online.",
          "Day trip to Sonamarg; walk to Thajiwas.",
          "Day trip to Doodhpathri or Yusmarg.",
          "Fly home or continue to Pahalgam.",
        ],
      },
      {
        h: "Budget food in Srinagar",
        list: [
          "Breakfast: Kashmiri bread such as girda or lavasa from a local bakery with noon chai.",
          "Lunch: rajma chawal, Kashmiri dum aloo or a thali at a local restaurant.",
          "Snacks: kahwa, nadru monje (lotus stem fritters) and bakery biscuits.",
          "Dinner: a simple wazwan plate, such as rista or rogan josh with rice, rather than a full feast.",
        ],
      },
      {
        h: "Budget houseboats",
        p: [
          "Lower category houseboats offer the lake experience at a fraction of Deluxe rates. Rooms are simpler and bathrooms smaller, and heating may be basic. They suit young travellers and backpackers in summer and autumn. Read recent reviews, ask for photos of the actual room and agree whether meals and shikara transfers are included.",
        ],
      },
    ],
    faqs: [
      { q: "Can I find a budget houseboat in Srinagar?", a: "Yes. Lower category boats on Dal and Nigeen are much cheaper than Deluxe ones; check recent reviews and what is included." },
      { q: "Is public transport useful for budget travellers in Srinagar?", a: "City buses and shared cabs run to the Mughal gardens and main areas. For Gulmarg and Sonamarg, shared taxis run from stands in the city." },
    ],
  },
  "hotels-in-katra-near-vaishno-devi": {
    sections: [
      {
        h: "A 2-night Katra plan",
        days: [
          "Arrive in Katra by train or road. Collect your yatra RFID card, rest and have an early dinner.",
          "Start the yatra before dawn from Banganga, darshan at the Bhawan, optional ropeway to Bhairon temple, and return to Katra by evening.",
          "Rest in the morning, then take the Vande Bharat to Srinagar or a taxi to Jammu.",
        ],
      },
      {
        h: "Helicopter, battery car and ropeway",
        list: [
          "Helicopter: Katra to Sanjichhat, booked only on the Shrine Board's official website; about 2.5 km walk from Sanjichhat to the Bhawan.",
          "Battery car: runs on part of the route from Adhkuwari towards the Bhawan, mainly for elderly and disabled pilgrims.",
          "Ropeway: between the Bhawan and Bhairon temple, saving a steep climb.",
          "Ponies and palkis: available at Banganga at rates set by the Shrine Board.",
        ],
      },
      {
        h: "Travelling with elderly parents",
        p: [
          "For elderly pilgrims, stay close to Banganga or the helicopter pad, book the helicopter early, and plan a rest day after the yatra. Choose a hotel with a lift and ground-floor dining. Many families combine the yatra with a slow Kashmir trip of five or six days afterwards, with all transfers in one comfortable vehicle.",
        ],
      },
    ],
    faqs: [
      { q: "Is it easy to book the Vaishno Devi helicopter?", a: "Slots are limited and book out quickly. Use only the official Shrine Board website and book as soon as booking opens for your date." },
      { q: "Are hotels in Katra open all year?", a: "Yes. Katra is busy all year, especially during Navratri, summer holidays and New Year." },
    ],
  },
};

const MORE_2: Record<string, { sections?: BlogSection[]; faqs?: BlogPost["faqs"] }> = {
  "where-to-stay-in-pahalgam": {
    faqs: [
      { q: "How far are Pahalgam hotels from Betaab Valley?", a: "Betaab Valley is about 15 km from the town on the Chandanwari road, around 30 minutes by union taxi. Aru Valley is about 12 km on the other road." },
      { q: "Can I find a riverside room in Pahalgam in peak season?", a: "Yes, if you book 4 to 6 weeks ahead for May and June. Riverside rooms are the first to sell out." },
    ],
  },
  "where-to-stay-in-sonamarg": {
    sections: [
      { h: "Booking a Sonamarg room in peak season", p: ["From June to August, Sonamarg rooms are shared between holidaymakers, trekkers and Amarnath Yatra pilgrims using the Baltal route, so the town can be full on short notice. Book 3 to 4 weeks ahead for those months, and ask for a room on the river side of the main road, which is quieter at night than the side facing the traffic heading to Zojila."] },
      {
        h: "Day trip or overnight: a quick decision",
        list: [
          "Day trip: you have only one day for Sonamarg, you are visiting in winter, or you want to return to a Srinagar hotel with more comfort.",
          "Overnight: you are going on to Ladakh, starting a trek, rafting, or want the glacier valley early in the morning.",
        ],
      },
    ],
    faqs: [
      { q: "Is there mobile signal in Sonamarg?", a: "Yes, in the town, mostly on postpaid connections. It weakens towards Thajiwas and beyond Baltal." },
    ],
  },
  "nigeen-lake-houseboats": {
    sections: [{ h: "Reaching Nigeen from the airport and station", p: ["Nigeen is about 15 km from Srinagar airport and roughly 30 to 40 minutes by taxi, through the northern side of the city near Hazratbal. From Srinagar railway station at Nowgam allow 40 to 50 minutes. Share the houseboat name with your driver beforehand; many boats are reached through narrow residential lanes that are easier to find with a call to the owner."] }],
    faqs: [
      { q: "Are Nigeen houseboats cheaper than Dal houseboats?", a: "Rates depend on the category and the boat rather than the lake. Deluxe boats on both lakes are similar; ask for the category and recent photos." },
      { q: "Is Nigeen Lake clean?", a: "It is generally calmer and less crowded than the busiest parts of Dal. Conditions vary by season and stretch of shore, so check recent reviews of the boat." },
    ],
  },
  "houseboat-vs-hotel-in-srinagar": {
    sections: [{ h: "Houseboat vs hotel in winter", p: ["From December to February, the choice tilts towards hotels. Lake mornings are freezing and misty, and some boats rely on electric heaters that struggle during power cuts. If you want the houseboat experience in winter, book one night on a Deluxe boat that confirms central heating or bukharis and hot water bottles, and spend the other nights in a centrally heated hotel."] }],
    faqs: [
      { q: "Do houseboats have attached bathrooms?", a: "Deluxe and higher category boats have attached bathrooms with hot water. Ask about hot water hours on older boats." },
      { q: "Can I check out of a houseboat early for a Gulmarg trip?", a: "Yes. The houseboat's shikara takes you to the ghat, where your taxi waits. Tell the owner the night before." },
      { q: "Is a houseboat or hotel better for a honeymoon?", a: "Both, ideally. A houseboat night for romance and a hotel for comfort on the other nights." },
    ],
  },
  "luxury-hotels-in-kashmir": {
    sections: [{ h: "How to compare luxury quotes", p: ["Two luxury Kashmir quotes can look similar and be very different. Compare the exact hotel names and room categories in each town, whether rooms face the lake, meadow or river, the vehicle model for transfers, whether a private shikara and Gondola tickets are included, and the meal plan. A quote that says 'or similar' for hotels leaves room for a downgrade, so ask for named hotels with no substitution unless you agree in writing. Also check how winter heating and any festive gala dinner charges at Christmas and New Year are handled."] }],
    faqs: [
      { q: "Can a package include luxury hotels in Kashmir?", a: "Yes. A luxury package names the hotels in each town, private transfers and experiences like a private shikara. Check the hotel names in writing." },
      { q: "Are there luxury stays near Pahalgam's river?", a: "Yes. Several upscale hotels sit on the Lidder near the town, including Welcomhotel Pine N Peak." },
      { q: "What is the best luxury stay for a winter Kashmir trip?", a: "A heated palace or lake-view hotel in Srinagar plus a Gulmarg resort near the Gondola, where you can ski or sledge and return to a warm room." },
    ],
  },
  "budget-hotels-in-srinagar": {
    sections: [
      { h: "Budget stays outside Srinagar", p: ["If your budget allows only a few hill nights, choose Pahalgam for one or two nights, where guest houses and homestays in the town and down the valley are reasonable outside May and June. Gulmarg hotels cost more because supply on the meadow is limited, so most budget travellers visit it as a day trip. Sonamarg has simple hotels and JKTDC huts in summer, and Tangmarg below Gulmarg has cheaper guest houses than Gulmarg itself. Mixing a Srinagar base with one Pahalgam stay gives the best value for a 5 to 6 night trip."] },
      {
        h: "Avoiding common budget mistakes",
        list: [
          "Do not book a room only by its 'Dal Lake' name: many budget hotels are a few lanes away from the water.",
          "Check that the taxi can reach the door; some lanes are narrow.",
          "In winter, confirm the room heater and whether there is a charge for it.",
          "Avoid paying full advance to unknown agents; pay a deposit and the balance at check-in.",
        ],
      },
    ],
    faqs: [
      { q: "Is it safe to book budget hotels in Srinagar online?", a: "Yes, through known platforms or a trusted agent. Read recent reviews, and pay a deposit rather than the full amount to unknown sellers." },
      { q: "Do budget hotels in Srinagar include breakfast?", a: "Many do, often a simple Kashmiri or continental breakfast. Confirm when you book." },
    ],
  },
  "hotels-in-katra-near-vaishno-devi": {
    sections: [{ h: "Katra in peak periods", p: ["Katra is busiest during the spring and autumn Navratri, the summer school holidays from May to July, and the New Year week, when queues at the Bhawan can be long and hotel rates climb. If you can, visit on weekdays outside these periods. For peak dates, book your hotel, the yatra registration and any helicopter seats together as soon as your travel dates are fixed, and keep one flexible night in case weather or crowds delay your darshan."] }],
    faqs: [
      { q: "How far is Katra railway station from the main market?", a: "A few kilometres, a short taxi or auto ride. Hotels can arrange pickups." },
      { q: "Can I leave luggage in Katra while I do the yatra?", a: "Most hotels keep luggage for guests, and there are cloakroom facilities on the route. Carry only essentials up to the Bhawan." },
      { q: "Is Katra cold in winter?", a: "Nights from December to February are cold, and the Bhawan is much colder. Book a room with heating and carry warm layers." },
    ],
  },
};

export const KASHMIR_STAYS: BlogPost[] = BASE_STAYS.map((p) => {
  const m = MORE[p.slug];
  const m2 = MORE_2[p.slug];
  return {
    ...p,
    sections: [...p.sections, ...(m?.sections ?? []), ...(m2?.sections ?? [])],
    faqs: [...p.faqs, ...(m?.faqs ?? []), ...(m2?.faqs ?? [])],
  };
});

const EXTRA_1: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "where-to-stay-in-sonamarg": {
    sections: [

    ],
    faqs: [
      { q: "Is Sonmarg different from Sonamarg when booking hotels?", a: "No. Sonmarg and Sonamarg are the same town; hotels and booking sites use both spellings." },
    ],
  },
};
for (const p of KASHMIR_STAYS) {
  const e = EXTRA_1[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}
