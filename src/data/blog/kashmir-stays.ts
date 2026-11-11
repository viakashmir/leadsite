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

const EXTRA_2: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "luxury-hotels-in-kashmir": {
    sections: [
      { h: "The LaLiT Grand Palace in more detail", p: ["The LaLiT Grand Palace stands on Gupkar Road above the southern shore of Dal Lake, in grounds that slope down towards the water. It was built in the early 20th century as a palace for Maharaja Pratap Singh and later used by Maharaja Hari Singh, and it still has the feel of a royal residence: high ceilings, chandeliers, old portraits, wooden floors and verandas looking over lawns shaded by chinar trees said to be centuries old. Rooms are split between the heritage palace wing and newer cottages and suites in the grounds.", "It is the choice for travellers who want history and space, and its lawns are famous in autumn, when the chinars turn red and gold. Book well ahead for October and for the tulip season, when the lawns and nearby gardens are at their best."] },
      { h: "Taj Dal View in more detail", p: ["Taj Dal View sits on Kralsangri hill in the Zabarwan foothills, above the southern end of Dal Lake and close to the Botanical Garden and the Tulip Garden. Its main appeal is the view: most rooms and the terraces look over the lake, the Hari Parbat fort and the city. It is quieter than the hotels on Boulevard Road and suits honeymooners and travellers who want to stay in, with a spa and dining on site. A car is needed to go anywhere, but the gardens along the Zabarwan side are close."] },
      { h: "Riverfront and city luxury hotels", p: ["The Radisson Collection Hotel and Spa, Riverfront, sits on the Jhelum and brings an international upscale hotel with a spa and modern rooms to the city centre. Four Points by Sheraton and the Radisson Hotel Srinagar offer international-brand comfort, reliable heating and good service. Fortune Resort Heevan is a long-standing upscale hotel with a central location. These hotels are well placed for Lal Chowk, Residency Road and the old city, and are good for travellers who prefer brand standards over heritage."] },
      { h: "Gulmarg luxury: Khyber and Highlands Park", p: ["Khyber Himalayan Resort and Spa stands at the edge of the Gulmarg meadow close to the Gondola, with views over the forest and peaks. It is Gulmarg's best-known luxury resort, with heated rooms, a spa, a heated indoor pool and restaurants that matter in a town where little stays open late in winter. It books out early for the ski season and Christmas and New Year.", "The Hotel Highlands Park is a heritage property with wooden cottages and old-world interiors on the meadow, and Nedou's, one of Gulmarg's oldest hotels, has history dating back to the British era. Both appeal to travellers who prefer character to modern amenities."] },
      { h: "Pahalgam luxury along the Lidder", p: ["Welcomhotel Pine N Peak, run by ITC, is set near the town with views of the pine-clad hills and the river valley, and is one of Pahalgam's best-known upscale hotels. Other upscale riverside hotels line the Lidder close to the main market, many with lawns, river-view rooms and good heating. Luxury in Pahalgam is about the setting: wake to the sound of the river, walk along the bank before breakfast and take a private union taxi round of Aru and Betaab at your own pace."] },
      { h: "Luxury houseboats on Dal and Nigeen", p: ["The top houseboats are Deluxe category boats with carved walnut ceilings and panelling, Kashmiri carpets, chandeliers, sitting and dining rooms and bedrooms with attached bathrooms. The best are run by families with decades of experience and offer personal service: kahwa on arrival, home-cooked Kashmiri meals, a private shikara and an attendant on call.", "Sukoon is a well-known luxury houseboat on Dal Lake. On Nigeen, WelcomHeritage Gurkha Houseboats is a long-established group with several boats. For privacy, book the whole boat, and check recent reviews, heating in winter and what is included before you confirm."] },
      { h: "A 7-night honeymoon luxury plan", p: ["Night 1: Deluxe houseboat on Nigeen, private sunset shikara. Night 2 and 3: palace or lake-view hotel in Srinagar, with the Mughal gardens and a private wazwan dinner. Night 4: Gulmarg resort near the Gondola, spa in the evening. Night 5 and 6: riverside hotel in Pahalgam, with private union taxi rounds of Aru and Betaab. Night 7: back to a Dal Lake Deluxe houseboat for a final evening on the water. Transfers throughout in an Innova Crysta or premium SUV."] },
      { h: "Luxury in winter: what changes", p: ["From December to February, luxury in Kashmir is about warmth. Choose hotels with central heating and backup power, heated bathrooms and indoor dining. Khyber in Gulmarg, the palace and lake-view hotels in Srinagar and the riverside hotels in Pahalgam handle winter well. Houseboats can be beautiful in snow but need strong heating; pick one Deluxe boat that confirms it. Arrange 4x4 transfers for Gulmarg and Sonamarg."] },
      { h: "What luxury costs, and what drives the price", p: ["Rates at Kashmir's top hotels move with the season more than in most of India. They peak in May and June, during the tulip weeks, and from Christmas to New Year, and fall noticeably in March, October and November. Room category matters: lake-view or meadow-view rooms cost more than garden or forest-facing ones. Meal plans, airport transfers, private shikaras and spa treatments add to the bill. Ask for a quote that names the room category and meal plan in each hotel."] },
    ],
    faqs: [
      { q: "Which luxury hotel in Srinagar has the best view of Dal Lake?", a: "Taj Dal View on Kralsangri hill is known for its lake views. The LaLiT Grand Palace also overlooks the lake from its lawns." },
      { q: "Is The LaLiT Grand Palace a real palace?", a: "Yes. It was built in the early 20th century as a palace for the Maharaja of Kashmir." },
      { q: "Does Khyber in Gulmarg have a heated pool?", a: "Yes, it has a heated indoor pool and spa, which is rare in Gulmarg." },
      { q: "When are luxury hotels in Kashmir cheapest?", a: "In March, October and November, outside the tulip season, summer holidays and the winter festive period." },
      { q: "Are luxury houseboats better than luxury hotels?", a: "They offer a different experience: privacy, home-cooked food and the lake at your door. Most luxury travellers combine one or two houseboat nights with hotels." },
    ],
  },
  "houseboat-vs-hotel-in-srinagar": {
    sections: [
      { h: "The history of Srinagar's houseboats", p: ["Houseboats on Srinagar's lakes date back to the late 19th century, when the Dogra rulers of Kashmir did not allow outsiders to own land. British visitors and officials who wanted to stay through the summer began living on boats instead, and Kashmiri boatmen and carpenters built larger, more comfortable boats to rent to them. Over time these became the elaborate cedar and walnut houseboats moored on Dal and Nigeen today, with their carved ceilings, verandas and names painted on the front.", "Many boats are still run by families who have owned them for generations, and staying on one is as much about meeting a Kashmiri family as about the boat itself."] },
      { h: "Houseboat categories and what they mean", p: ["The J&K Tourism Department grades houseboats into categories, with Deluxe at the top, followed by lower classes. The grade reflects size, furnishing, bathrooms and facilities. A Deluxe boat usually has a large sitting room, a dining room, two to four bedrooms with attached bathrooms and hot water, carved woodwork and good furnishings. Lower categories are smaller and simpler, with fewer comforts. Within each category, quality varies, so recent reviews and photos matter as much as the grade."] },
      { h: "Hotel categories in Srinagar", p: ["Srinagar's hotels range from guest houses and simple budget hotels in the lanes behind Boulevard Road to mid-range hotels in Rajbagh and Lal Chowk, upscale lakefront hotels on Boulevard Road and the palace and international-brand hotels on Gupkar Road and the Jhelum riverfront. Higher categories bring central heating, lifts, room service and restaurants, which matter most in winter and for elderly travellers."] },
      { h: "Food on a houseboat vs a hotel", p: ["Houseboat meals are cooked by the family, usually breakfast and dinner, served in the boat's dining room. Expect home-style Kashmiri food such as rogan josh, yakhni, haak and dum aloo, along with simpler dishes if you ask. Hotels offer menus, buffets and room service, with more choice for children and fussy eaters. On a houseboat, tell the cook your preferences in advance, especially for vegetarian, Jain or mild food."] },
      { h: "Getting around from a houseboat", p: ["From a Dal Lake houseboat, every trip ashore is by shikara to a Boulevard Road ghat, where your taxi waits. It adds a few minutes to each outing and can be awkward late at night, though houseboats keep a shikara on call. Many Nigeen houseboats are moored by the shore and reached on foot, which is easier for families. From a hotel, your car is at the door, which saves time on early-morning trips to Gulmarg and Sonamarg."] },
      { h: "Safety and comfort on a houseboat", p: ["Registered houseboats are a long-established, regulated form of stay. Lock your room and keep valuables in a bag you keep with you, as you would in a guest house. Children should be supervised on the deck and in shikaras. In winter, ask about heating and check that heaters are safe and that rooms are ventilated. Choose boats with recent reviews and an owner who responds clearly to questions."] },
      { h: "Booking tips for both", p: ["Book houseboats directly through trusted agents or well-reviewed platforms; avoid touts at the airport or ghats offering boats on the spot. Ask for the boat's name and category. For hotels, ask for the exact room category and whether it faces the lake, garden or road. In both cases, confirm the meal plan, heating, and whether transfers and the first shikara ride are included."] },
      { h: "Which to choose by traveller type", p: ["Honeymooners: a Deluxe houseboat for one or two nights, then a lake-view hotel. Families with young children: a Nigeen boat reached on foot, or a hotel with a lawn. Elderly travellers: a hotel with a lift, or a Nigeen boat reached from the shore. Budget travellers: a lower category houseboat or a guest house near Dal Gate. Winter travellers: a centrally heated hotel, with one night on a well-heated Deluxe boat."] },
      { h: "Houseboat vs hotel in each season", p: ["Spring and autumn are perfect for houseboats: mild days, cool nights and beautiful light on the water. Summer is lively on the lake but can be warm in the afternoons on older boats without good ventilation. Winter is magical but cold; hotels win for comfort. If you visit in deep winter, keep the houseboat stay to one night."] },
    ],
    faqs: [
      { q: "Why are there houseboats in Srinagar?", a: "They began in the late 19th century, when outsiders could not own land in Kashmir and British visitors lived on boats instead." },
      { q: "What is a Deluxe houseboat?", a: "The top category set by the J&K Tourism Department, with large rooms, attached bathrooms, carved woodwork and good furnishings." },
      { q: "Do houseboats serve vegetarian food?", a: "Yes. Tell the cook in advance, and they will prepare vegetarian or Jain meals." },
      { q: "Is it easy to go out at night from a Dal Lake houseboat?", a: "The houseboat's shikara takes you ashore at any reasonable hour, but plan late returns with the owner." },
    ],
  },
  "nigeen-lake-houseboats": {
    sections: [
      { h: "Where Nigeen Lake is", p: ["Nigeen lies to the north of Dal Lake, joined to it by channels and bridges, and is bounded by the old neighbourhoods around Hazratbal, the University of Kashmir and the slopes of Hari Parbat. It is sometimes described as part of the Dal lake system but feels separate: smaller, greener and more enclosed by willows and residential houses. The main houseboat moorings are along its western and southern shores, many with gardens and steps leading down from the road."] },
      { h: "What a day on a Nigeen houseboat looks like", p: ["Early morning: tea on the front deck as mist lifts off the water and the first shikaras of vegetable sellers and flower sellers paddle past. Breakfast in the dining room with Kashmiri bread, eggs and noon chai. Mid-morning: a shikara through the channels into Dal or a walk to Hazratbal. Afternoon: a day trip, or rest on the deck with a book. Evening: sunset over Hari Parbat, dinner cooked by the family and the quiet of the lake at night, broken only by the call to prayer and the sound of water."] },
      { h: "Nigeen houseboats by category", p: ["Nigeen has Deluxe houseboats and lower category boats, like Dal. Many of the best-known family-run Deluxe boats are on Nigeen, chosen by travellers who want calm. Lower category boats are cheaper and simpler. As always, the category sets expectations, but the specific boat, its family and its recent reviews decide the experience."] },
      { h: "Booking a Nigeen houseboat", p: ["Ask for the boat's name, its category and photos of the rooms you will use. Check whether it is reached on foot or by shikara, whether breakfast and dinner are included, whether the shikara ride is included, and how heating works in winter. Confirm check-in time and share your arrival details so the family is ready. Avoid touts offering houseboats on arrival at the airport or the ghats."] },
      { h: "Nigeen for honeymooners", p: ["Nigeen is a favourite with honeymooners because it is quiet and romantic. Book a full boat or a boat with only one or two bedrooms for privacy. Ask the owner to arrange a decorated shikara at sunset, a candlelight dinner on the deck and a slow morning shikara to the floating market in Dal. Two nights is ideal: one to arrive and settle in, one to simply enjoy the lake."] },
      { h: "Nigeen in winter", p: ["Winter on Nigeen is cold, still and beautiful, with mist, occasional snow on the boat roofs and very few visitors. Choose a Deluxe boat that confirms central heating or good heaters, hot water at all hours and extra blankets. Expect thick fog some mornings and short days. One night is usually enough in deep winter; spend the rest of the trip in a heated hotel."] },
      { h: "Nigeen vs Dal: a summary", p: ["Choose Nigeen for calm, a residential setting, boats reached on foot and quiet nights. Choose Dal for the classic view, the lively lake, easy access to Boulevard Road and many shikara routes. Many travellers who stay twice in Srinagar try one of each."] },
    ],
    faqs: [
      { q: "Is Nigeen Lake part of Dal Lake?", a: "It is connected to Dal by channels and often counted as part of the lake system, but it is a separate, quieter lake to the north." },
      { q: "Are Nigeen houseboats good for families?", a: "Yes. Calm water and boats reached on foot make Nigeen easy for families with children and elderly parents." },
      { q: "How do I avoid houseboat touts?", a: "Book in advance through a trusted agent or well-reviewed platform, and ignore offers on arrival at the airport or ghats." },
      { q: "Can I see the floating market from Nigeen?", a: "Yes, by an early-morning shikara through the channels into Dal." },
    ],
  },
};
for (const p of KASHMIR_STAYS) {
  const e = EXTRA_2[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_3: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "luxury-hotels-in-kashmir": {
    sections: [
      { h: "Luxury hotels by location in Srinagar", p: ["Gupkar Road and the Zabarwan foothills are home to the city's most exclusive stays, including The LaLiT Grand Palace and Taj Dal View. They are quiet, green and elevated, with the best views over Dal Lake, but you need a car for everything. Boulevard Road has upscale hotels right on the lakefront, with shikaras across the road and lively evenings, though traffic can be heavy in season. The Jhelum riverfront and Rajbagh have international-brand hotels close to Lal Chowk, Residency Road and the old city, which suits travellers who want shopping and food within reach."] },
      { h: "Dining at Kashmir's luxury hotels", p: ["Top hotels in Srinagar, Gulmarg and Pahalgam serve Kashmiri, North Indian, continental and pan-Asian menus, but their real strength is Kashmiri food. Ask for a traditional wazwan dinner, prepared by a waza, with rista, rogan josh, tabak maaz and gushtaba served on a copper trami. Several hotels can arrange a private wazwan on a lawn or terrace with notice. Vegetarian, Jain and children's menus are available on request. In winter, dinner by a fire or a bukhari is part of the experience."] },
      { h: "Spas, wellness and slow days", p: ["Luxury hotels in Srinagar and Gulmarg offer spas with massages and treatments, some using Kashmiri saffron and walnut oil, and heated indoor spaces that matter in winter. Plan at least one slow day in a luxury trip: a late breakfast on the terrace, a private shikara in the afternoon and a spa treatment before dinner. After long drives to Gulmarg, Pahalgam or Sonamarg, a spa evening is the best way to recover."] },
      { h: "Private experiences luxury hotels can arrange", p: ["Private shikara at sunrise with breakfast on board, or at sunset with kahwa and snacks. A guided heritage walk through old Srinagar with a historian. A private visit to a pashmina or carpet workshop to watch master craftsmen at work. A Gondola trip in Gulmarg timed to avoid queues, with a guide on Apharwat. A private union taxi day in Pahalgam with a picnic lunch by the Lidder. A round of golf at Royal Springs, Gulmarg or Pahalgam. Ask your hotel concierge or agent well in advance."] },
      { h: "Luxury for families", p: ["For families, choose hotels with connecting rooms or suites, lawns or play areas, and dining that suits children. The LaLiT Grand Palace's lawns, the Pahalgam riverside hotels and the Gulmarg resorts near the meadow work well. Book a Deluxe houseboat with two or three bedrooms for a family stay on the water. Ask for a vehicle with child seats and enough space for luggage, such as an Innova Crysta or two cars for larger families."] },
      { h: "Luxury Kashmir packages: what to check", p: ["A luxury package should name each hotel and room category, the houseboat and its category, the vehicle model, private transfers, meal plans and the experiences included, such as a private shikara or wazwan dinner. Ask whether hotels are confirmed or 'similar', and insist on named properties. Check that winter heating and festive surcharges are covered, and that the agent will help if a flight is delayed and a night needs to be moved."] },
    ],
    faqs: [
      { q: "Can I have a wazwan dinner at a luxury hotel in Srinagar?", a: "Yes. Many luxury hotels arrange a traditional wazwan with a waza on request; ask a day or two ahead." },
      { q: "Do luxury hotels in Kashmir have spas?", a: "Yes. Several in Srinagar and Gulmarg have spas, some with saffron and walnut oil treatments." },
      { q: "Are luxury hotels in Kashmir good for families?", a: "Yes. Look for suites, connecting rooms, lawns and children's menus." },
    ],
  },
  "houseboat-vs-hotel-in-srinagar": {
    sections: [
      { h: "Houseboat vs hotel: cost compared", p: ["A Deluxe houseboat usually costs about the same as a good upscale hotel in Srinagar, often with breakfast and dinner included, which makes it good value for the experience. Lower category boats are cheaper than most hotels but simpler. Hotels range more widely, from budget guest houses to luxury palaces. When comparing, add up meals, transfers and shikara rides: on a houseboat they are often included, while in a hotel they may be extra."] },
      { h: "What to pack for a houseboat stay", p: ["Light clothes and a warm layer for evenings on the deck in summer; thermals, socks and a warm jacket in winter. Slip-on shoes, because you remove them inside the boat. A torch for the walk to the shikara at night. Any medicines and toiletries you need, as shops are ashore. A small bag for the shikara rides, so you do not carry large luggage back and forth."] },
      { h: "Houseboat etiquette", p: ["Remove shoes before walking on the carpets inside. Tell the family your meal times and preferences in advance. Keep noise down at night, because other guests and the family live close by. Ask before inviting outside guests on board. Tip the staff who served you at the end of your stay if you are happy with the service; it is appreciated but not compulsory."] },
      { h: "When a hotel is clearly the better choice", p: ["When you have very early starts every day for Gulmarg, Sonamarg or Pahalgam. When you are travelling with someone who cannot step into a shikara easily. When you visit in deep winter and want guaranteed heating. When you need a business centre, a gym or reliable fast Wi-Fi. When you are arriving late at night or leaving very early. In these cases, a lakefront hotel on Boulevard Road keeps the view and makes logistics easy."] },
      { h: "When a houseboat is clearly the better choice", p: ["When it is your first visit and you want the defining Kashmir experience. When you are on a honeymoon or a special trip. When you want home-cooked Kashmiri food and a family welcome. When you want to see the lake at dawn, the floating market and the sunset without travelling. When the weather is mild, from April to November. For most visitors, one or two nights on a houseboat is the highlight of the trip."] },
      { h: "Dal Lake houseboat areas", p: ["Dal's houseboats are moored in long lines along the lake opposite Boulevard Road, reached from the numbered ghats, and in quieter clusters deeper in the lake and towards Nehru Park and the Golden Lake area. Boats near the Boulevard are convenient and lively, while those further in are quieter but involve longer shikara rides. Ask the owner where the boat is moored and how long the shikara transfer takes."] },
    ],
    faqs: [
      { q: "Do I need to remove shoes on a houseboat?", a: "Yes. Houseboats have carpets inside, and guests remove shoes at the entrance." },
      { q: "Is Wi-Fi available on houseboats?", a: "Many Deluxe boats offer Wi-Fi, but speeds vary. Ask before booking if you need to work." },
      { q: "Should I tip houseboat staff?", a: "It is appreciated if you are happy with the service, but not compulsory." },
    ],
  },
  "nigeen-lake-houseboats": {
    sections: [
      { h: "Things to do from Nigeen", p: ["Walk or take a short ride to Hazratbal Shrine on the lake shore, one of Kashmir's most important Muslim shrines. Take a shikara through the channels to Dal, the floating market, Char Chinar and the lotus gardens. Visit the University of Kashmir's lakeside campus area, the Naseem Bagh chinar grove and the old neighbourhoods around Nigeen. Drive up Hari Parbat to the fort and the shrine of Makhdoom Sahib for views over both lakes. The Mughal gardens of Nishat and Shalimar are about 20 to 30 minutes away."] },
      { h: "Food on a Nigeen houseboat", p: ["Breakfast and dinner are cooked by the houseboat family, usually Kashmiri home food: rogan josh, yakhni, rista, haak, nadru and dum aloo, with rice and bread. Many families also cook simpler North Indian or continental dishes on request. Kahwa is served on arrival and often in the evening. For lunch, most guests are out on day trips. If you are vegetarian, Jain or want mild food, tell the family when you book."] },
      { h: "Nigeen for photographers", p: ["Nigeen's calm water gives perfect reflections of the houseboats, willows and Hari Parbat in the early morning. Shikaras of vegetable sellers, kingfishers on the branches and the wooden houses on the shore make good subjects. Autumn brings golden willows and chinars, and winter brings mist and occasional snow. Ask before photographing people, especially in the residential areas."] },
      { h: "Getting to Nigeen", p: ["From Srinagar airport, Nigeen is about 15 km and 30 to 40 minutes by taxi through the northern side of the city. From Srinagar railway station at Nowgam, allow 40 to 50 minutes. From Dal Gate and Boulevard Road, it is 15 to 20 minutes by road, or a long, beautiful shikara ride through the channels. Share your houseboat's name and the owner's number with your driver."] },
      { h: "How long to stay on Nigeen", p: ["One night gives you the evening and the morning on the lake. Two nights gives you a full slow day and is ideal for honeymooners. Longer stays are lovely if you are not planning many day trips, but for Gulmarg, Sonamarg and Pahalgam, a hotel near Boulevard Road can be more convenient for early departures."] },
    ],
    faqs: [
      { q: "How far is Hazratbal from Nigeen?", a: "It is close, on the lake shore, a short walk or drive from many Nigeen houseboats." },
      { q: "Is Nigeen quieter than Dal at night?", a: "Yes. Nigeen is residential and has fewer boats, so nights are very quiet." },
    ],
  },
};
for (const p of KASHMIR_STAYS) {
  const e = EXTRA_3[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_4: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "luxury-hotels-in-kashmir": {
    sections: [
      { h: "Luxury in spring: tulips, blossom and palace lawns", p: ["Spring is when Kashmir's luxury hotels look their finest. From late March, the Tulip Garden on the Zabarwan slopes bursts into colour a short drive from Taj Dal View and The LaLiT Grand Palace, while almond blossom fills Badamwari and cherry and apple trees flower across the valley. The lawns of the palace hotels turn bright green, and mornings on terraces overlooking Dal are cool and clear. It is also one of the busiest periods for top hotels, especially during the first two weeks of April when the tulips peak, so book lake-view rooms two to three months ahead.", "In Gulmarg, spring brings a rare combination: green patches on the meadow below and snow on Apharwat above, with spring skiing on the upper slopes. A night at a Gulmarg resort in April gives you both, with far shorter Gondola queues than in winter."] },
      { h: "Luxury in autumn: chinars, saffron and clear skies", p: ["From late October to mid-November, the chinar trees of Srinagar turn red, orange and gold. The LaLiT Grand Palace's old chinars, the Naseem Bagh grove and the Mughal gardens of Nishat and Shalimar are at their most beautiful, and the light over Dal is soft and golden. At the same time, the saffron fields of Pampore bloom purple and farmers pick the flowers at dawn. Skies are clear, days pleasant and nights crisp. Rates are often lower than in spring and summer, which makes autumn the best value season for a luxury trip."] },
      { h: "Arriving in style: transfers and first impressions", p: ["A luxury trip starts at the airport. Ask your hotel or agent for a premium vehicle such as an Innova Crysta, Fortuner or another SUV, with a driver who meets you inside the arrivals area where permitted, handles your bags and briefs you on the drive. If you are starting on a Deluxe houseboat, a decorated shikara can collect you from the ghat, with kahwa served on arrival. Small touches like these set the tone, and good hotels arrange them without fuss if asked in advance."] },
      { h: "How to choose between the top Srinagar hotels", p: ["Choose The LaLiT Grand Palace for history, grand public rooms and spacious lawns; Taj Dal View for views over the lake, a quiet hillside setting and contemporary comfort; the Radisson Collection Riverfront for a central, modern base on the Jhelum; and a Deluxe houseboat for intimacy and the lake at your door. Many luxury travellers split their Srinagar nights: two in a palace or lake-view hotel and one or two on a houseboat."] },
    ],
    faqs: [
      { q: "What is the best season for a luxury Kashmir trip?", a: "Spring for tulips and blossom, autumn for golden chinars and better value, and winter for snow at Gulmarg resorts." },
      { q: "Can luxury hotels arrange airport pickups in premium cars?", a: "Yes. Ask for an Innova Crysta, Fortuner or another SUV when you book." },
    ],
  },
  "houseboat-vs-hotel-in-srinagar": {
    sections: [
      { h: "A first night on a houseboat: what to expect", p: ["You arrive at a ghat on Boulevard Road or at Nigeen, where the houseboat's shikara or the owner meets you. Bags go in the shikara, and a short ride across the water brings you to the boat's front deck, where you remove your shoes. Inside, you are welcomed with kahwa in a sitting room panelled in carved walnut, with carpets, low sofas and old photographs. The owner shows you your bedroom, explains meal times and hot water, and asks about your plans. Dinner is home-cooked and served in the dining room.", "At night, the lake is quiet apart from the water lapping against the hull and the distant call to prayer. In the morning, flower and vegetable sellers paddle up to the deck, and the light on the lake is soft and still. Most guests say this first morning is when Kashmir really begins."] },
      { h: "A first night in a Srinagar hotel: what to expect", p: ["Your driver drops you at the door, and staff take your bags to a room with a private bathroom, heating or air-conditioning and room service. You can rest, go out for dinner on Boulevard Road or Residency Road, and leave early the next morning without arranging a shikara. Lakefront hotels give you the view across the road; quieter hotels in Rajbagh or on the gardens side give you calm. It is less memorable than a houseboat, but easier, especially after a long journey."] },
      { h: "Houseboat vs hotel for business and work travellers", p: ["If you need to work during your trip, a hotel is usually more practical: desks, reliable Wi-Fi, power backup and quiet rooms. Some Deluxe houseboats offer Wi-Fi and are pleasant for light work on the deck, but speeds and power can vary. If you combine work with leisure, stay in a hotel for working days and spend one night on a houseboat at the weekend."] },
      { h: "Our recommendation", p: ["For most travellers, the best answer is one or two nights on a well-reviewed Deluxe houseboat, either at the start or the end of the trip, and hotels for the rest. Choose Nigeen for quiet and easy access, Dal for the classic view. In deep winter or with mobility needs, choose a hotel and visit the lake by shikara in the afternoon."] },
    ],
    faqs: [
      { q: "What is the best time of year to stay on a houseboat?", a: "April to November, when days are mild and the lake is at its best. Winter stays are lovely but cold." },
    ],
  },
  "nigeen-lake-houseboats": {
    sections: [
      { h: "A short history of Nigeen's houseboats", p: ["Nigeen was one of the first lakes where Srinagar's houseboats were moored when they became popular with summer visitors in the late 19th and early 20th centuries, at a time when outsiders could not own land in Kashmir. British families and officials who spent summers in Srinagar often preferred Nigeen for its quiet and its cooler, greener setting. Many of the boats moored here today belong to families who have run them for three or four generations, and some keep old guest books and photographs from those early years."] },
      { h: "What to check in a Nigeen houseboat room", p: ["Look at the bedroom size and bed type, whether the bathroom is attached and has hot water at all hours, how the room is heated in winter and ventilated in summer, and whether the windows look onto the lake or the side of the next boat. Ask whether the boat has a front deck or a rooftop where you can sit, how many other guests may be on board, and whether the common sitting room is shared. Recent guest photos are more reliable than the owner's best pictures."] },
      { h: "Nigeen with children and elderly parents", p: ["Nigeen is the easier lake for families. Many boats are moored by the shore with steps or a gangway, so there is no need to step into a shikara for every trip. The water is calm and there is less boat traffic than on Dal. Supervise children on the deck, which may not have high railings, and ask the family for a ground-level room if an elderly parent finds steps difficult. Ask for milder food for children and older travellers."] },
      { h: "Combining Nigeen with the rest of your trip", p: ["A typical plan is one or two nights on Nigeen at the start of the trip, then a hotel for day trips to Gulmarg and Sonamarg, two nights in Pahalgam, and a final night back in Srinagar. Alternatively, finish the trip on Nigeen to unwind before flying home. Because Nigeen is on the north side of the city, allow 30 to 40 minutes to the airport, plus the airport gate check."] },
    ],
    faqs: [
      { q: "How old are Nigeen's houseboats?", a: "Many families have run their boats for generations, and houseboats on Nigeen date back to the late 19th and early 20th centuries." },
      { q: "Do Nigeen houseboats have lake-view rooms?", a: "Many do, but some rooms face the side of a neighbouring boat. Ask for a lake-facing room." },
    ],
  },
};
for (const p of KASHMIR_STAYS) {
  const e = EXTRA_4[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_5: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "luxury-hotels-in-kashmir": {
    sections: [
      { h: "Luxury in summer: Gulmarg meadows and Pahalgam rivers", p: ["From May to August, the plains of India swelter while Kashmir stays cool, which makes summer the busiest season for luxury travel. Srinagar's days are warm and long, ideal for lake terraces in the evening. Gulmarg's resorts look over green meadows and forests, with the Gondola running to snow patches on Apharwat, and Pahalgam's riverside hotels are at their best, with the Lidder running fast and the valleys of Aru and Betaab bright green. Book early for May and June, when school holidays fill the top hotels, and ask for rooms with balconies facing the river or meadow."] },
      { h: "Signs of a genuinely luxury stay in Kashmir", p: ["Real luxury in Kashmir shows in details: a room that is properly warm in winter without noisy heaters, hot water at any hour, staff who know the valley and can rearrange a day when the weather changes, a car and driver who arrive early, a kitchen that can cook a proper wazwan and a simple meal for a tired child, and quiet. Hotels that deliver these consistently are worth their rates; impressive lobbies without them are not. Recent guest reviews that mention winter heating, service and food are the best guide."] },
    ],
    faqs: [
      { q: "Do I need to book luxury hotels in Kashmir early for summer?", a: "Yes. May and June are among the busiest months; book two to three months ahead for river- or lake-view rooms." },
    ],
  },
  "houseboat-vs-hotel-in-srinagar": {
    sections: [
      { h: "Common houseboat mistakes", p: ["Booking through a tout on arrival rather than a known boat. Not asking for the boat's name and category. Assuming all houseboats are on Dal, when many of the best are on Nigeen. Taking very large suitcases that are difficult to move by shikara. Choosing an old boat in deep winter without confirming heating. Staying four or five nights on a houseboat and then struggling with early starts for Gulmarg and Sonamarg. Avoid these and the houseboat night will be a highlight."] },
      { h: "Common hotel mistakes in Srinagar", p: ["Booking a hotel described as 'on Dal Lake' that is actually several lanes behind it. Not checking the room view: lake-facing rooms cost more for a reason. Choosing a budget hotel in winter without confirming room heating. Staying in Lal Chowk when you wanted quiet, or in the gardens side when you wanted to walk to restaurants. Ask for the exact address and the room category before you pay."] },
    ],
    faqs: [
      { q: "Can I stay on a houseboat and a hotel on the same trip?", a: "Yes, and most travellers do: one or two houseboat nights, then a hotel for day trips." },
    ],
  },
  "nigeen-lake-houseboats": {
    sections: [
      { h: "Nigeen by month", p: ["March and April: willows turn green, almond and cherry blossom near the shores, cool nights. May and June: warm days, busy summer season, long evenings on the deck. July and August: lotus flowers on parts of the lake and lush shores. September to November: the most beautiful months, with golden willows and chinars and clear skies. December to February: cold, misty and quiet, sometimes with snow on the roofs; strong heating is essential."] },
      { h: "Is Nigeen Lake right for you?", p: ["Nigeen suits travellers who want peace more than activity: honeymooners, families with young children, elderly travellers, writers and photographers. If you want to be in the middle of the action, with shops and restaurants a short shikara ride away and the full panorama of Dal, choose a Dal Lake houseboat or a Boulevard Road hotel instead."] },
    ],
    faqs: [
      { q: "Is Nigeen good for a first visit to Kashmir?", a: "Yes, especially if you want a calm first night. Dal is better if you want the classic busy lake view." },
    ],
  },
  "where-to-stay-in-sonamarg": {
    sections: [
      { h: "Hotels on the main road: what to expect", p: ["Most of Sonamarg's hotels line the main road through the town, the same road that continues to Zojila and Ladakh. They range from simple lodges to comfortable mid-range hotels, many with rooms looking across the Sindh river or up the Thajiwas valley. Expect clean, simple rooms, hot water from geysers, heating by electric heaters on cold nights and dining rooms serving North Indian and Kashmiri food. Upper-floor, river-facing rooms are quieter than those overlooking the road, where trucks to Ladakh pass early in the morning."] },
      { h: "JKTDC huts and tourist complex", p: ["The Jammu and Kashmir Tourism Development Corporation runs huts and rooms at Sonamarg, well located for the meadow and the Thajiwas path. They are simple, practical and good value, popular with families and groups. Book ahead for June to August through the official JKTDC booking channels, because they fill quickly in summer."] },
      { h: "Camps near Thajiwas and along the Sindh", p: ["In summer, tented camps set up near the Thajiwas valley and along the river. Most provide beds, blankets, attached or shared washrooms and meals, and some offer bonfires in the evening. Camps are popular with trekkers starting the Great Lakes trek, with groups and with young travellers. Nights in a tent are cold even in July, so check the bedding and carry warm layers."] },
      { h: "Baltal camps during the Amarnath Yatra", p: ["Baltal, about 15 km beyond Sonamarg, becomes a large base camp during the Amarnath Yatra in July and August, with tents, langars and facilities for registered pilgrims. It is not a general tourist stay. If you are on the yatra, your registration and package will specify where you stay; if not, stay in Sonamarg and expect busier roads."] },
      { h: "A Sonamarg stay on a Ladakh road trip", p: ["If you are driving from Srinagar to Leh, spending the first night in Sonamarg lets you cross Zojila early the next morning, in the first traffic window. Choose a hotel at the eastern end of the town, closer to the Zojila road, ask for an early breakfast or a packed one, and fill up with fuel. The next night is usually in Kargil or Drass."] },
      { h: "Sonamarg for honeymooners", p: ["For couples, a summer night in Sonamarg can be very special: an evening walk by the Sindh, a quiet dinner, and an early morning at Thajiwas glacier before the day visitors arrive. Choose a river-facing room in a comfortable hotel, and keep the night between a Srinagar houseboat and Pahalgam on your itinerary. In winter, most hotels are closed, so Sonamarg is better as a day trip."] },
    ],
    faqs: [
      { q: "How do I book JKTDC huts in Sonamarg?", a: "Through the official JKTDC booking channels. Book early for June to August." },
      { q: "Are Sonamarg camps comfortable?", a: "Most provide beds, blankets and meals. Nights are cold, so check the bedding and carry warm layers." },
      { q: "Can I stay at Baltal?", a: "Baltal is mainly an Amarnath Yatra base camp in July and August. Most travellers stay in Sonamarg." },
    ],
  },
  "where-to-stay-in-gulmarg": {
    sections: [
      { h: "Staying near the Gondola base in detail", p: ["Hotels close to the Gondola base station put you within a short walk of the cable car, the ski school area and the gentle beginner slopes. This is the most practical place to stay in ski season, when you carry boots and skis every morning, and for anyone who wants to be in the first Gondola cabins. Rooms here are in high demand from December to March, so book early. In summer, the area is busy with day visitors from late morning to afternoon but quiet in the evening."] },
      { h: "Staying on the main meadow", p: ["The hotels and cottages around the main meadow and the golf course are in the oldest part of Gulmarg, close to St Mary's Church, the Maharani temple and the bus stand area. They offer wide views of the meadow and the surrounding forest and are good for walks, golf and photography. In winter, the meadow becomes a snowfield and the walk to the Gondola takes 10 to 20 minutes over snow, or a short taxi ride."] },
      { h: "Staying in Tangmarg", p: ["Tangmarg, 13 km below Gulmarg, has more guest houses and budget hotels, local restaurants and shops where you can hire snow gear. Rates are lower than in Gulmarg, and it is a convenient base if Gulmarg is fully booked. The disadvantage is the daily drive up and down the hairpins, which can be slow in peak season and after snowfall, when vehicles are checked for chains."] },
      { h: "JKTDC huts in Gulmarg", p: ["The Jammu and Kashmir Tourism Development Corporation runs huts and cottages on the Gulmarg meadow, simple but well located, with heating in winter. They are good value for families and groups. Book through the official JKTDC channels, early for ski season and summer holidays."] },
      { h: "Gulmarg for skiers: a 5-night stay", p: ["Night 1: arrive from Srinagar, collect ski equipment and settle in. Day 2: lessons with a registered instructor on the beginner slopes near the base. Day 3: more lessons, or the Gondola to Kongdoori for intermediate runs. Day 4: Phase 2 to Apharwat if open, for longer runs, with a guide if you go beyond the marked areas. Day 5: a rest morning, sledging or snowshoeing, then a last afternoon on the slopes. Day 6: return to Srinagar."] },
      { h: "Gulmarg for honeymooners", p: ["For a honeymoon, one night in Gulmarg is ideal: arrive in the afternoon, walk on the meadow at sunset, take the first Gondola cabin the next morning and spend the afternoon on the snow or on a pony ride to Khilanmarg. Choose a resort with heating and good dining, a meadow-facing room, and ask the hotel to arrange a candlelight dinner. In winter, a fireside evening after a day in the snow is the classic Gulmarg experience."] },
    ],
    faqs: [
      { q: "Where is the best place to stay in Gulmarg for skiing?", a: "Near the Gondola base, within walking distance of the cable car and ski school." },
      { q: "Are there budget hotels in Gulmarg?", a: "A few, plus JKTDC huts. Tangmarg below Gulmarg has more budget options." },
      { q: "How far is Tangmarg from Gulmarg?", a: "About 13 km of hairpin road, 30 to 45 minutes depending on traffic and snow." },
    ],
  },
  "where-to-stay-in-pahalgam": {
    sections: [
      { h: "Staying by the Lidder in detail", p: ["The riverside hotels along the Lidder are the classic Pahalgam stay. Rooms facing the river let you hear the water day and night, and many hotels have lawns or terraces on the bank. They are within a few minutes of the main market and the union taxi stand. Ask for a river-facing room on a higher floor, and check that the hotel is on the near side of the river, which avoids extra bridges and traffic."] },
      { h: "Staying in the main market area", p: ["Hotels around the main market and bus stand are practical: restaurants, shops, pharmacies and the union taxi stand are all within walking distance. They are good for families, elderly travellers and anyone who wants to step out easily for meals. Rooms on the main road can be noisy during the day in peak season, so ask for rooms at the back or on higher floors."] },
      { h: "Staying on the Aru and Chandanwari roads", p: ["Hotels on the Aru road sit in pine forest a few minutes from town, with quieter surroundings and views across the valley. Those on the Chandanwari road are closer to Betaab Valley and the Amarnath Yatra route, which makes them convenient but busier in July and August. Both suit travellers with a car or who are happy to take short taxi rides into town."] },
      { h: "Homestays and village stays", p: ["Down the valley, villages such as Aishmuqam, Mattan and others along the Lidder have homestays and guest houses with home-cooked food. Further up, Aru village has a few simple guest houses used by trekkers. These stays are quieter and cheaper than the town, and give a glimpse of rural Kashmiri life. They suit independent travellers and those planning walks from Aru."] },
      { h: "Pahalgam for families: a 3-night stay", p: ["Night 1: arrive via Pampore and Awantipora, walk by the river in the evening. Day 2: union taxi to Betaab Valley and Chandanwari, picnic by the river, children's park in the evening. Day 3: union taxi to Aru Valley, pony ride for the children, gentle rafting for older children in season. Day 4: slow morning and return to Srinagar. Choose a hotel with family rooms, a lawn and a restaurant that can cook simple food."] },
      { h: "Pahalgam in winter: where to stay", p: ["Some Pahalgam hotels close in winter, but many stay open with heating, especially near the main market and along the river. Choose a hotel with central heating or reliable room heaters, hot water and power backup, and confirm it is open on your dates. Betaab Valley is usually reachable through winter; Aru depends on road clearance; Chandanwari often closes after heavy snow."] },
    ],
    faqs: [
      { q: "Is it better to stay by the river or near the market in Pahalgam?", a: "By the river for atmosphere, near the market for convenience. Both are close to the union taxi stand." },
      { q: "Are there homestays near Pahalgam?", a: "Yes, in villages down the valley and a few in Aru." },
      { q: "Are Pahalgam hotels busy during the Amarnath Yatra?", a: "Yes, in July and August. Book early and expect heavier security and traffic." },
    ],
  },
  "best-areas-to-stay-in-srinagar": {
    sections: [
      { h: "Boulevard Road in more detail", p: ["Boulevard Road runs along the southern and eastern shores of Dal Lake, from Dal Gate past Nehru Park towards Nishat. The stretch closest to Dal Gate is the busiest, with hotels, restaurants, shops and shikara ghats; further along, towards Nishat, it becomes quieter and greener. Hotels on the lake side of the road have views over the water; those on the other side are cheaper. In peak season, evening traffic on the Boulevard can be slow, so plan dinners close to your hotel."] },
      { h: "Rajbagh and the Jhelum Bund", p: ["Rajbagh is a leafy residential area on the Jhelum, connected to the city centre by bridges. The Jhelum Bund, a riverside promenade, is pleasant for evening walks. Hotels here are quieter than on Boulevard Road and often better value, and Lal Chowk, Residency Road and Dal Gate are a few minutes away by taxi. It suits families, elderly travellers and anyone who wants calm evenings without being far from the city."] },
      { h: "Hazratbal and the north shore", p: ["The area around Hazratbal and Nigeen on the north side of the city is quieter and more residential, with houseboats on Nigeen and some guest houses. It is close to Hazratbal shrine and the university area and about 15 to 20 minutes from Boulevard Road. It suits travellers who want a calm base and do not mind taking taxis into the centre."] },
      { h: "Staying near the airport or railway station", p: ["If you have a very early flight or train, a hotel near the airport or on the southern side of the city can save time, but there is little to see or do there. Most travellers prefer to stay near Dal Lake and leave early. Remember to allow extra time for the airport gate check, which matters more than distance."] },
      { h: "Srinagar areas for each type of traveller", p: ["Honeymooners: a Deluxe houseboat on Nigeen or Dal, then a lake-view hotel on Gupkar or Boulevard Road. Families: Rajbagh or the gardens side, with lawns and calm. Elderly parents: a hotel with a lift in Rajbagh or on the Boulevard, close to the car. Budget travellers: guest houses near Dal Gate. Shoppers and food lovers: Lal Chowk and Residency Road. Photographers: a lakefront hotel or houseboat for dawn light."] },
    ],
    faqs: [
      { q: "Is Rajbagh a good area to stay in Srinagar?", a: "Yes. It is quiet, central and residential, a few minutes from Lal Chowk and Dal Gate." },
      { q: "Which area is closest to the Mughal gardens?", a: "The Nishat and Brein area on the eastern shore of Dal Lake." },
    ],
  },
  "hotels-in-katra-near-vaishno-devi": {
    sections: [
      { h: "Katra's main areas compared", p: ["The main bazaar and bus stand area is the heart of Katra, with hotels, restaurants, shops and the Yatra Registration counters. It is busy and lively at all hours, especially in Navratri, and you can walk to Banganga, the start of the trek, in 15 to 20 minutes. The Banganga road has hotels closer to the trek start and is quieter at night. The railway station area, a few kilometres from town, has newer hotels with more space and parking, convenient for trains but needing a short taxi ride to the yatra start."] },
      { h: "Shrine Board accommodation in detail", p: ["The Shri Mata Vaishno Devi Shrine Board runs accommodation complexes in Katra and on the route, with rooms and dormitories at low rates. In Katra, its complexes near the bus stand and railway station are well kept and secure. On the route, there are rooms and dormitories at Adhkuwari and near the Bhawan, useful if you want to rest overnight during the yatra. Booking is only on the Shrine Board's official website, and slots open in advance. Rooms near the Bhawan are in high demand in peak periods."] },
      { h: "What Katra hotels typically offer", p: ["Most Katra hotels are vegetarian, with dining rooms serving North Indian, South Indian and Gujarati food, and many offer early breakfast or packed meals for pilgrims starting before dawn. Rooms range from simple budget rooms to comfortable mid-range hotels with lifts and heating. Many hotels help with yatra registration, helicopter information and taxis. Check-in times are often flexible because pilgrims arrive and leave at all hours."] },
      { h: "Katra with elderly parents", p: ["Choose a hotel with a lift, close to the bus stand or Banganga, or near the helipad if you have helicopter tickets. Ask for a room on a lower floor and a quiet side. Plan the yatra with a helicopter, pony, palki or battery car, and book a rest day after the darshan before travelling on to Srinagar. Carry warm layers for the Bhawan, which is much colder than Katra."] },
      { h: "Katra in peak periods and what to expect", p: ["During Navratri, the summer holidays and the New Year, Katra fills up, queues at registration counters grow long and hotel rates rise. Book well ahead, register for the yatra online where possible, and start the climb at off-peak hours such as late evening or very early morning. Keep a flexible extra night in your plan."] },
    ],
    faqs: [
      { q: "Can I book Shrine Board rooms at Adhkuwari or the Bhawan?", a: "Yes, on the Shrine Board's official website, subject to availability." },
      { q: "Do Katra hotels serve non-vegetarian food?", a: "No. Katra is a vegetarian town; hotels and restaurants serve vegetarian food." },
    ],
  },
  "budget-hotels-in-srinagar": {
    sections: [
      { h: "What you get for a budget room in Srinagar", p: ["A typical budget room in Srinagar is clean and simple, with a double or twin bed, an attached bathroom with a geyser, a television and sometimes Wi-Fi. Breakfast may be included. In winter, heating is usually an electric heater, sometimes charged extra. Views are of the lane or the building next door rather than the lake. Service is friendly but basic. For most travellers who spend their days sightseeing, this is enough."] },
      { h: "Budget stays by season", p: ["Peak periods, when budget rooms are scarce and rates rise, are the tulip weeks in April, May and June, and the Christmas to New Year week. Best value comes in March, October and November. In deep winter, budget rooms are available but heating becomes the main concern, so a slightly higher budget for a better-heated room is worth it."] },
      { h: "Budget hostels and backpacker stays", p: ["Srinagar has a few backpacker hostels and dormitory-style stays, mostly around Dal Gate and the Boulevard back lanes, popular with young travellers and solo trekkers. They offer bunk beds, shared bathrooms and common areas, and are good places to meet other travellers and share cabs. Check reviews for cleanliness and safety, and ask about lockers."] },
    ],
    faqs: [
      { q: "Are there hostels in Srinagar?", a: "Yes, a few backpacker hostels, mainly around Dal Gate. Check reviews for cleanliness and safety." },
      { q: "Is heating included in budget hotels in Srinagar?", a: "Sometimes. Electric heaters are often charged extra in winter; confirm before booking." },
    ],
  },
};
for (const p of KASHMIR_STAYS) {
  const e = EXTRA_5[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_6: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "where-to-stay-in-gulmarg": {
    sections: [
      { h: "Winter in a Gulmarg hotel: what it is really like", p: ["In January and February, Gulmarg is deep in snow, nights fall well below freezing and the town is quiet after dark. Hotel life revolves around warmth: rooms heated by central systems, electric heaters or bukharis, hot water bottles at bedtime and dinner in a warm dining room. Paths between buildings are cleared but icy, so wear boots with grip. Mornings bring brilliant sunshine on fresh snow and the first Gondola cabins at opening time. Power cuts can happen, which is why a generator matters more here than almost anywhere else in Kashmir.", "Plan to be indoors by early evening, carry a headtorch for the short walk to dinner if your cottage is separate, and keep your phone and batteries warm, since cold drains them fast."] },
      { h: "Summer in a Gulmarg hotel", p: ["From May to September, Gulmarg's hotels look out over green meadows and pine forest, and days are pleasant for walking, golf and pony rides. Nights are cool enough for a light jacket. The town is busy with day visitors from about 10 am to 4 pm and calm in the evening, which is the best reason to stay over. Summer rooms are easier to book than winter ones, except during school holidays in June."] },
      { h: "Gulmarg hotels for groups", p: ["Groups of 10 or more should book early and look for hotels with several cottages or a block of rooms together, a dining hall and parking for a tempo traveller. JKTDC huts are a good option for groups on a budget. In winter, remember that large vehicles may be stopped at Tangmarg after snowfall, so ask your hotel whether it can arrange 4x4 shuttles for the last stretch."] },
      { h: "How to get from your Gulmarg hotel to the slopes", p: ["From hotels near the Gondola base, walk. From the main meadow, walk 10 to 20 minutes or take a short local taxi. In deep snow, local sledge pullers will take you and your luggage across the snow for a fixed fee. Ski equipment can be hired near the Gondola base and at some hotels, which saves carrying it far."] },
    ],
    faqs: [
      { q: "Is it very cold in Gulmarg hotels in winter?", a: "Rooms are heated, but outside it is well below freezing at night. Choose a hotel with good heating and power backup." },
      { q: "Can groups stay in Gulmarg?", a: "Yes. Book early and look for hotels with several cottages, a dining hall and parking." },
    ],
  },
  "where-to-stay-in-pahalgam": {
    sections: [
      { h: "Pahalgam for honeymooners: where to stay", p: ["For a honeymoon, choose a riverside hotel with a balcony or lawn on the Lidder, a room on an upper floor and a quiet location slightly away from the market. Two nights give you one unhurried day for Aru or Betaab and one slow morning by the river. Many hotels arrange flower decorations, a candlelight dinner or a riverside bonfire with notice. In autumn, the golden light on the valley makes Pahalgam one of the most romantic places in Kashmir."] },
      { h: "Pahalgam for elderly travellers: where to stay", p: ["Pick a hotel close to the main market, with a lift or ground-floor rooms, a level path to the entrance and a dining room on the same floor. Avoid properties with long steep driveways or many steps. Ask for rooms on the quieter side, away from traffic. Union taxis can collect you at the hotel for the valley trips, and the riverside walks near the town are flat and easy."] },
      { h: "Budget stays in Pahalgam", p: ["Budget travellers can choose guest houses near the bus stand, JKTDC huts and homestays in villages down the valley. Rates are lowest in March, April before the summer rush, and from September to November. Basic rooms have attached bathrooms and geysers; in winter, ask whether heating is included. Eating in the market's dhabas keeps costs down."] },
      { h: "What Pahalgam hotels include", p: ["Most Pahalgam hotels quote rates with breakfast, or breakfast and dinner, especially in winter when few restaurants stay open late. Parking is usually available. Many hotels help book union taxis and ponies, and some arrange rafting. Wi-Fi is common but speeds vary, and mobile signal is good in town but weaker in the side valleys."] },
    ],
    faqs: [
      { q: "Which Pahalgam hotels are best for honeymooners?", a: "Riverside hotels with balconies over the Lidder, slightly away from the market." },
      { q: "Do Pahalgam hotels include meals?", a: "Usually breakfast, or breakfast and dinner. Confirm the meal plan when booking." },
    ],
  },
  "where-to-stay-in-sonamarg": {
    sections: [
      { h: "What Sonamarg hotels include", p: ["Most Sonamarg hotels quote with breakfast, or breakfast and dinner, because restaurants are few and close early. Parking is available at most properties. Hot water comes from geysers, and rooms are heated by electric heaters on cold nights. Wi-Fi is available at many hotels but can be slow, and mobile signal is good in the town but fades towards Thajiwas and Zojila. Hotels can call ponies for Thajiwas and union taxis for Zero Point."] },
      { h: "Booking tips for Sonamarg", p: ["Book ahead for June to August, when trekkers, families and Amarnath Yatra traffic all compete for rooms. Ask for a river-facing room on an upper floor. Confirm that the hotel is open on your dates in the shoulder months of April, May, October and November. If you are going on to Ladakh, ask about early breakfast. If you are on the Great Lakes trek, ask whether the hotel can store excess luggage until you return."] },
      { h: "Sonamarg for families", p: ["For families, choose a hotel close to the main parking area so the Thajiwas ponies and the meadow are easy to reach, with family rooms and a dining room that can cook simple food for children. The river is fast and cold, so keep children away from the banks. Plan the glacier walk for the morning and keep the afternoon free for rest or a gentle walk."] },
    ],
    faqs: [
      { q: "Can I store luggage in Sonamarg during the Great Lakes trek?", a: "Many hotels and trek operators store luggage for trekkers; ask in advance." },
      { q: "Is Wi-Fi available in Sonamarg hotels?", a: "At many hotels, though speeds vary. Mobile signal is good in town." },
    ],
  },
  "best-areas-to-stay-in-srinagar": {
    sections: [
      { h: "Getting around from each area", p: ["From Boulevard Road, walk to the ghats and restaurants and take a short taxi to the Mughal gardens or Lal Chowk. From Rajbagh, taxis reach Dal Gate and Lal Chowk in a few minutes. From Lal Chowk and Residency Road, walk to shops and the old city's edge. From the gardens side, you need a taxi for the city centre in the evening. From Gupkar and the Zabarwan foothills, you need a car for everything. Auto-rickshaws and taxis are easy to find in the centre; app cabs are limited."] },
      { h: "Where to stay in Srinagar in winter", p: ["In winter, choose an area and hotel for warmth rather than view. Centrally heated hotels on Boulevard Road, in Rajbagh and on the Jhelum riverfront are the most comfortable. Lal Chowk is lively even in winter, while the gardens side is very quiet. If you want a houseboat night, pick a Deluxe boat on Nigeen or Dal that confirms good heating, and spend the rest of the stay in a hotel."] },
    ],
    faqs: [
      { q: "Which area of Srinagar is best in winter?", a: "Boulevard Road, Rajbagh or the Jhelum riverfront, in a centrally heated hotel." },
      { q: "Are app cabs available in Srinagar?", a: "Availability is limited. Use hotel taxis, taxi stands or a package driver." },
    ],
  },
  "hotels-in-katra-near-vaishno-devi": {
    sections: [
      { h: "Katra hotels for families", p: ["Families travelling with children should choose a hotel close to the bus stand or Banganga, with family rooms, a lift and a dining room serving simple vegetarian food. Many families start the yatra in the evening, rest at Adhkuwari or the Bhawan, and return the next morning, so ask the hotel whether you can keep luggage and use the room for a late check-out. Ponies and palkis are available for children who cannot walk the full distance."] },
      { h: "Things to see in and around Katra", p: ["Besides the yatra, visitors to Katra often see the Banganga river and ghats at the start of the trek, the Bhairon temple above the Bhawan, the Shiv Khori cave shrine in Reasi district, a few hours away, and Nau Devi temple near Katra. Patnitop, about 2.5 hours away, makes a good cool break in summer. Most pilgrims keep the trip simple: yatra, rest and onward travel."] },
    ],
    faqs: [
      { q: "Can I see Shiv Khori from Katra?", a: "Yes. Shiv Khori is in Reasi district, a few hours from Katra, usually as a day trip." },
    ],
  },
  "budget-hotels-in-srinagar": {
    sections: [
      { h: "Budget houseboats vs budget hotels", p: ["A budget houseboat gives you the lake experience, home-cooked meals and a family atmosphere for a modest rate, but rooms are small and heating basic. A budget hotel gives you easier car access, more privacy and often better hot water. Many budget travellers spend one night on a lower category houseboat for the experience and the rest of their stay in a guest house near Dal Gate."] },
    ],
    faqs: [
      { q: "Is a budget houseboat comfortable?", a: "It is simple but clean on well-reviewed boats. Expect small rooms and basic heating in winter." },
    ],
  },
  "nigeen-lake-houseboats": {
    sections: [
      { h: "Nigeen houseboat rates: what affects them", p: ["Houseboat rates on Nigeen depend on the category, the number of bedrooms you take, the season and what is included. Deluxe boats cost more than lower categories, peak months such as April to June and the winter holidays cost more than March, October and November, and booking the whole boat costs more than one room but gives you privacy. Most rates include breakfast and often dinner. Ask whether the shikara ride and airport transfers are included."] },
    ],
    faqs: [
      { q: "Are Nigeen houseboat rates per room or per boat?", a: "Usually per room, with an option to book the whole boat for privacy." },
    ],
  },
  "houseboat-vs-hotel-in-srinagar": {
    sections: [
      { h: "Houseboat vs hotel for photographers", p: ["Photographers usually prefer a houseboat for at least one night, for dawn light on the lake, mist, reflections and the floating market without travelling. A lakefront hotel on Boulevard Road gives similar views from the shore and easier access to the car for early drives to Gulmarg, Sonamarg and Pahalgam. Combine both for the best of each."] },
    ],
    faqs: [
      { q: "Is a houseboat good for photographers?", a: "Yes, for dawn light, reflections and the floating market on your doorstep." },
    ],
  },
  "luxury-hotels-in-kashmir": {
    sections: [
      { h: "Luxury Sonamarg and the rest of Kashmir", p: ["Sonamarg has comfortable mid-range hotels and camps rather than luxury resorts, and most close in winter, so luxury travellers usually visit as a day trip from Srinagar in a private car. Doodhpathri, Yusmarg and Gurez have only simple stays. For luxury outside Srinagar, Gulmarg and Pahalgam are the main choices. In Ladakh, Leh has several upscale hotels and boutique stays for those combining both regions."] },
    ],
    faqs: [
      { q: "Are there luxury hotels in Leh for a Kashmir Ladakh trip?", a: "Yes. Leh has several upscale hotels and boutique stays." },
    ],
  },
};
for (const p of KASHMIR_STAYS) {
  const e = EXTRA_6[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_7: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "where-to-stay-in-gulmarg": {
    sections: [
      { h: "Gulmarg stay mistakes to avoid", p: ["Booking a room in Tangmarg thinking it is in Gulmarg, then facing a daily drive up the hairpins. Choosing a hotel without power backup for a winter stay. Not checking whether the room is heated, or whether heating is charged extra. Arriving after dark in winter, when the road from Tangmarg is icy. Staying only one night and booking a late Gondola slot the next day, which can leave you rushing back to Srinagar. Expecting restaurants to be open late: in winter, eat at your hotel.", "Check the exact hotel location on a map, confirm heating and meals, arrive by mid-afternoon and book a morning Gondola slot for the day after you arrive."] },
      { h: "Booking a Gulmarg hotel: a short checklist", p: ["Confirm the exact location: near the Gondola, on the meadow or in Tangmarg. Ask for recent photos of the room category. Check heating, hot water and power backup. Confirm the meal plan. Ask about ski storage and boot drying in winter. Check parking and whether 4x4 shuttles are needed from Tangmarg after snow. Get the cancellation policy in writing, especially for peak weeks."] },
    ],
    faqs: [
      { q: "Is Tangmarg the same as Gulmarg?", a: "No. Tangmarg is the town 13 km below Gulmarg at the start of the climb." },
    ],
  },
  "where-to-stay-in-pahalgam": {
    sections: [
      { h: "Pahalgam stay mistakes to avoid", p: ["Staying only one night and trying to see all three valleys plus the drive back. Booking a hotel described as riverside that is actually across the road from the river. Ignoring the Amarnath Yatra dates and finding the town full of pilgrims and security in July and August. Choosing a property far down the valley and spending time in traffic each day. Not confirming heating in winter. Planning around Baisaran, which has been closed since April 2025."] },
      { h: "Booking a Pahalgam hotel: a short checklist", p: ["Confirm whether the room faces the river. Check the distance to the union taxi stand and market. Ask about heating, hot water and power backup in winter. Confirm the meal plan. Check whether the hotel is open on your dates outside summer. For July and August, ask about yatra traffic and any restrictions. Get the cancellation policy in writing."] },
      { h: "How many nights in Pahalgam by traveller type", p: ["One night: a short trip that must include Pahalgam, with one valley and a riverside evening. Two nights: the standard, covering Aru, Betaab and Chandanwari without rushing. Three nights: honeymooners, families with young children, elderly travellers and anyone adding rafting or a walk to Lidderwat. Four or more: trekkers using Aru as a base for Kolahoi or Tarsar Marsar."] },
    ],
    faqs: [
      { q: "How many nights should I stay in Pahalgam?", a: "Two nights for most travellers; three for honeymooners, families and slow travellers." },
    ],
  },
  "where-to-stay-in-sonamarg": {
    sections: [
      { h: "Sonamarg stay mistakes to avoid", p: ["Booking a winter night without confirming the hotel is open. Choosing a road-facing room and being woken by trucks heading for Zojila at dawn. Not carrying warm layers for the evening, even in July. Expecting reliable mobile signal and Wi-Fi everywhere. Planning Zero Point in April, before Zojila opens. Underestimating Amarnath Yatra crowds in July and August, when rooms and roads are busiest."] },
      { h: "Booking a Sonamarg hotel: a short checklist", p: ["Confirm the hotel is open on your dates. Ask for a river-facing room on an upper floor. Check heating and hot water. Confirm the meal plan and early breakfast if you are driving to Ladakh or starting a trek. Check parking for your vehicle. In July and August, ask about yatra traffic arrangements for the day you arrive."] },
      { h: "How Sonamarg compares with Gulmarg and Pahalgam for an overnight", p: ["Gulmarg is the best overnight for skiing and the Gondola, Pahalgam for rivers, valleys and a relaxed two-night stay, and Sonamarg for a glacier walk, the start of the Ladakh road and treks. Sonamarg has the shortest season and the fewest luxury options, so most travellers stay overnight only when it fits a Ladakh drive or a trek."] },
      { h: "Sonamarg overnight by month", p: ["April: hotels reopening, snow walls and quiet. May: the season begins, Zojila may reopen, crisp nights. June: busy with families and the start of treks. July and August: peak with trekkers and the Amarnath Yatra. September: quiet, clear and beautiful. October: last weeks of the season, very cold nights, hotels starting to close. November to March: mostly closed; day trips only for most travellers."] },
    ],
    faqs: [
      { q: "Which month is best for a Sonamarg overnight?", a: "June or September: open hotels, good weather and fewer crowds than July and August." },
    ],
  },
  "best-areas-to-stay-in-srinagar": {
    sections: [
      { h: "Booking a Srinagar hotel: a short checklist", p: ["Check the exact address on a map: many hotels named after Dal Lake are not on the lakefront. Ask whether the room faces the lake, a garden or the road. Confirm heating in winter and air-conditioning in July. Ask whether the hotel has a lift and parking. Confirm the meal plan and whether airport transfers are included. In peak weeks, get the cancellation policy in writing."] },
      { h: "Srinagar area by season", p: ["Spring: Boulevard Road and the gardens side, close to the Tulip Garden and Mughal gardens. Summer: lakefront hotels and houseboats for evenings on the water. Autumn: the gardens side and Rajbagh for chinars along the Jhelum and in Naseem Bagh. Winter: centrally heated hotels in Rajbagh, on Boulevard Road or on the Jhelum riverfront."] },
    ],
    faqs: [
      { q: "Are hotels named after Dal Lake always on the lake?", a: "No. Many are a few lanes back. Check the exact address and room view." },
    ],
  },
  "hotels-in-katra-near-vaishno-devi": {
    sections: [
      { h: "Booking a Katra hotel: a short checklist", p: ["Decide whether you want to be close to Banganga, the bus stand, the helipad or the railway station. Check for a lift if travelling with elderly parents. Ask about early breakfast, late check-out and luggage storage on yatra day. Confirm heating from November to February. For Navratri and summer holidays, book well in advance and keep the booking confirmation handy with your yatra registration."] },
      { h: "Katra to the rest of your trip", p: ["After Katra, most travellers either take the Vande Bharat to Srinagar for a Kashmir holiday, drive to Patnitop for a cool break, or return to Jammu for flights and trains home. Plan the onward leg for the morning after your yatra, not the same evening."] },
    ],
    faqs: [
      { q: "Should I stay near Banganga or the railway station in Katra?", a: "Near Banganga or the bus stand to walk to the trek start; near the station for early trains." },
    ],
  },
  "budget-hotels-in-srinagar": {
    sections: [
      { h: "Budget mistakes to avoid in Srinagar", p: ["Paying full advance to an unknown seller on social media. Booking by name alone without checking the location. Ignoring winter heating charges. Choosing a room on a lane too narrow for your taxi. Booking the cheapest option in peak weeks and finding the room very different from the photos. Read recent reviews, pay a deposit, and confirm in writing what is included."] },
      { h: "Budget travel tips beyond the hotel", p: ["Use shared cabs from Srinagar's taxi stands to Tangmarg, Kangan and Anantnag. Book the Gulmarg Gondola online. Eat at local restaurants and bakeries. Travel mid-week. Visit the Mughal gardens early, when they are calm. Walk Boulevard Road and the old city rather than paying for every short ride."] },
    ],
    faqs: [
      { q: "What is the cheapest way to see Gulmarg from Srinagar?", a: "A shared cab to Tangmarg and a local taxi up, with Gondola tickets booked online." },
    ],
  },
  "nigeen-lake-houseboats": {
    sections: [
      { h: "Nigeen houseboat checklist before you pay", p: ["Boat name and category. Exact location and whether it is reached on foot or by shikara. Recent photos of your room. Heating and hot water. Meals included. Shikara rides included. Wi-Fi and power backup. Check-in and check-out times. Cancellation terms. Contact number of the owner, not just an agent."] },
    ],
    faqs: [
      { q: "Who should I contact on arrival at Nigeen?", a: "The houseboat owner. Keep their number, not just an agent's, and share your arrival time." },
    ],
  },
  "houseboat-vs-hotel-in-srinagar": {
    sections: [
      { h: "Houseboat vs hotel: a quick decision guide", p: ["If you are visiting Kashmir for the first time between April and November, book one or two nights on a houseboat. If you have mobility needs, choose a Nigeen boat reached on foot or a hotel. If you travel in deep winter, prefer a centrally heated hotel with one optional houseboat night. If you need to work, choose a hotel. If it is your honeymoon, do both."] },
    ],
    faqs: [
      { q: "Is a houseboat worth it for just one night?", a: "Yes. One night gives you the evening, the dawn and the floating market, which most travellers remember most." },
    ],
  },
  "luxury-hotels-in-kashmir": {
    sections: [
      { h: "Booking luxury hotels in Kashmir: a checklist", p: ["Name the hotel and room category in each town. Confirm the view: lake, meadow or river. Check heating, spa and dining hours in winter. Ask about festive surcharges at Christmas and New Year. Confirm private transfers and the vehicle model. List any experiences you want, such as a private shikara or wazwan dinner. Get the cancellation policy in writing."] },
    ],
    faqs: [
      { q: "Do luxury hotels in Kashmir charge extra at New Year?", a: "Many add a gala dinner or festive surcharge. Ask when booking." },
    ],
  },
};
for (const p of KASHMIR_STAYS) {
  const e = EXTRA_7[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}
