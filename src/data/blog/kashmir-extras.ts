import type { BlogPost, BlogSection } from "./types";

// Extra sections and FAQs for the November 2026 Kashmir guides, appended to
// the posts in kashmir-winter-months, kashmir-planning-deep and
// kashmir-local-guides. Same fact rules as those files: no em dashes, no
// invented prices, no emergency numbers other than the national 112.

type Extra = { sections: BlogSection[]; faqs: BlogPost["faqs"] };

const TOWN_BY_TOWN = (month: string, notes: [string, string, string, string]): BlogSection => ({
  h: `Srinagar, Gulmarg, Pahalgam and Sonamarg in ${month}`,
  list: [
    `Srinagar in ${month}: ${notes[0]}`,
    `Gulmarg in ${month}: ${notes[1]}`,
    `Pahalgam in ${month}: ${notes[2]}`,
    `Sonamarg in ${month}: ${notes[3]}`,
  ],
});

const GETTING_THERE_WINTER: BlogSection = {
  h: "Getting to Kashmir in winter",
  list: [
    "By air: direct flights to Srinagar (SXR) from Delhi, Mumbai, Bengaluru, Hyderabad, Kolkata, Chandigarh and other cities, plus many one-stop options. Flights run in daylight hours, so morning departures give the most buffer if weather delays things.",
    "By train: there is still no direct Delhi to Srinagar train. Take a train to Katra or Jammu, then the Vande Bharat from Katra to Srinagar through the Pir Panjal and over the Chenab bridge. It is built for sub-zero running and is the most reliable winter backup when flights or the highway are disrupted.",
    "By road: NH 44 from Jammu to Srinagar is about 250 km. It closes after heavy snow or landslides near Banihal and Ramban, so do not rely on it in deep winter without a backup.",
    "Arriving: Srinagar airport is about 12 to 15 km from Dal Lake. Most packages include the pickup. Leave at least 2.5 hours for departure, because there is a security check at the airport gate.",
  ],
};

export const KASHMIR_EXTRAS: Record<string, Extra> = {
  "kashmir-in-december": {
    sections: [
      TOWN_BY_TOWN("December", [
        "cold, clear and festive. Mughal gardens are bare but quiet, shikara rides run on calm days, and the old city is at its most atmospheric with harissa shops opening. Snow falls on a few days in a normal December.",
        "the main snow destination. The meadow is usually white by mid-month, ski schools start operating, and the Gondola runs with Phase 2 subject to weather. The Christmas to New Year week is the busiest of the season.",
        "snowy pine forests along the Lidder after the first big spells. Betaab Valley is usually reachable; Aru depends on road clearance; Chandanwari often closes after heavy snow. Fewer visitors than Gulmarg.",
        "reachable through the Z-Morh tunnel on most days, with snow walks and sledging towards Thajiwas. Most hotels are shut, so plan it as a day trip from Srinagar.",
      ]),
      GETTING_THERE_WINTER,
      {
        h: "Mistakes to avoid in December",
        list: [
          "Booking the Christmas week late. Gulmarg rooms and Gondola slots go first, often weeks ahead.",
          "Packing for Srinagar instead of Gulmarg. The coldest place on your route sets your clothing.",
          "Choosing rooms without asking about heating and a generator. Power cuts happen in snow.",
          "Planning a day trip to Pahalgam and Sonamarg on the same day. Each needs its own day.",
          "Flying out on the same day as a Gulmarg or Sonamarg trip. Snow can close roads for hours.",
          "Wearing sports shoes in snow. Hire gumboots or snow boots in Gulmarg if you do not own them.",
          "Counting on Baisaran meadow. It has been closed to visitors since April 2025.",
        ],
      },
      {
        h: "Kashmir in December with kids and older parents",
        p: [
          "December works well for families if you keep the pace gentle. Children love the snow at Gulmarg and Kongdori, and the drive is short. Plan two activities a day at most, start late enough that the cold has eased, and return to a heated room by late afternoon.",
          "For parents with heart, lung or blood pressure conditions, talk to a doctor before the trip, avoid over-exertion at Apharwat (about 3,980 m), and choose Phase 1 to Kongdori instead if in doubt. Ground-floor rooms and hotels with lifts make icy evenings easier.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Pahalgam good in December?",
        a: "Yes, for snowy pine forests and the Lidder valley in winter. Betaab Valley is usually reachable, while Aru and Chandanwari depend on snow clearance. Baisaran remains closed.",
      },
      {
        q: "Is December good for a Kashmir honeymoon?",
        a: "Yes. Snow in Gulmarg and cosy heated rooms make it one of the most romantic months. Avoid the Christmas week if you want lower prices and quieter hotels.",
      },
      {
        q: "Kashmir or Himachal in December: which has better snow?",
        a: "Gulmarg in Kashmir usually has more reliable snow cover in December than most Himachal towns. Himachal's surest snow is in higher places like Sissu, Solang and Narkanda, which are not always reachable after heavy falls.",
      },
    ],
  },
  "kashmir-in-january": {
    sections: [
      TOWN_BY_TOWN("January", [
        "the coldest days of the year, with the best chance of snow in the city itself. Fog on some mornings, frozen edges on Dal Lake in long cold spells, and harissa season in full swing.",
        "deep snow and very cold nights. Ski lessons run daily, the Gondola operates with frequent Phase 2 closures for wind, and weekdays are quieter after the New Year rush.",
        "under snow, quiet and very cold. Betaab Valley is the main sightseeing point; Aru opens when the road is cleared; Chandanwari is usually closed.",
        "deep snow. The town is reachable through the Z-Morh tunnel on most days, but closes after heavy snow until the road is cleared. Plan it as a flexible day trip.",
      ]),
      GETTING_THERE_WINTER,
      {
        h: "Winter culture during Chillai Kalan",
        list: [
          "Pheran: the long woollen cloak worn by almost everyone in winter. Buying one in Srinagar's markets is a practical souvenir.",
          "Kangri: a wicker basket with a clay pot of embers, carried under the pheran. Most hotels lend one on request; never sleep with one under the blanket.",
          "Harissa: the slow-cooked mutton breakfast sold at dawn in old city shops through the winter.",
          "Dried vegetables (hokh syun): sun-dried tomatoes, gourds and greens prepared in autumn and cooked through the winter.",
          "Hamams: traditional heated rooms in many Kashmiri homes and some heritage hotels.",
        ],
      },
      {
        h: "Mistakes to avoid in January",
        list: [
          "Travelling without a buffer day. January is the month most likely to close the highway or delay flights.",
          "Skipping proper boots. Ice on Srinagar pavements and Gulmarg paths is the most common cause of minor injuries.",
          "Expecting long sightseeing days. The light goes by about 5 pm and roads ice up soon after.",
          "Booking unheated budget rooms to save money. In Chillai Kalan, heating is not optional.",
          "Planning the drive down from Gulmarg after dark. Leave by mid-afternoon.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is January good for a Kashmir honeymoon?",
        a: "Yes, for couples who love snow and do not mind cold. Choose heated rooms, add a Gulmarg night and keep the pace slow.",
      },
      {
        q: "Can kids travel to Kashmir in January?",
        a: "Yes, with care. Keep days short, dress children in proper snow layers and choose hotels with reliable heating and a generator. Very young children may find the cold hard.",
      },
      {
        q: "What is Chillai Kalan?",
        a: "The 40 coldest days of the Kashmiri winter, from 21 December to 31 January, when the valley sees its lowest temperatures and heaviest snow.",
      },
      {
        q: "Is Sonamarg open in January?",
        a: "Usually yes, through the Z-Morh tunnel. Heavy snow can close the road until it is cleared, so keep Sonamarg as a flexible day.",
      },
    ],
  },
  "kashmir-in-february": {
    sections: [
      TOWN_BY_TOWN("February", [
        "slowly warming, with occasional snow early in the month and more rain later. The gardens are still bare, but days are long enough for full sightseeing.",
        "the peak ski month, with deep snow, longer days and busy weekends. Book rooms and Gondola slots early.",
        "snowy forests and the Lidder valley under snow. Betaab Valley is open, Aru depends on clearance, and the town is quiet outside weekends.",
        "deep snow and good access through the tunnel on most days. Snow walks and sledging towards Thajiwas.",
      ]),
      GETTING_THERE_WINTER,
      {
        h: "Mistakes to avoid in February",
        list: [
          "Assuming Srinagar will be snowy. In late February, rain is more likely in the city than snow.",
          "Leaving Gulmarg bookings late for the ski peak and the week around 14 February.",
          "Skipping waterproof layers. Wet snow and rain soak through ordinary jackets.",
          "Trying to combine Kashmir and Ladakh by road. Zojila stays closed until spring.",
          "Counting on Baisaran meadow in Pahalgam, which has been closed since April 2025.",
        ],
      },
      {
        h: "February for families and first-time snow trips",
        p: [
          "For families seeing snow for the first time, February is often the best month of all: the snow is deep in Gulmarg and Sonamarg, but the days are a little warmer and longer than in January, which means more comfortable outings for children and older parents.",
          "A family-friendly February plan is five or six nights with Srinagar as the base, one Gulmarg night, and Sonamarg or Pahalgam as day trips depending on road conditions. Keep afternoons free for rest, and book an SUV for snow days.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is February good for families in Kashmir?",
        a: "Yes. Deep snow in Gulmarg and Sonamarg with slightly milder days than January makes February one of the best months for families seeing snow for the first time.",
      },
      {
        q: "Does it rain in Kashmir in February?",
        a: "Late February often brings rain to Srinagar while the hill resorts get snow. Pack a waterproof outer layer.",
      },
      {
        q: "February or March for Kashmir?",
        a: "February for deep snow and skiing. March for lingering snow in Gulmarg with warmer days in Srinagar, almond blossom and, at the end of the month, the Tulip Garden.",
      },
    ],
  },
  "kashmir-in-november": {
    sections: [
      TOWN_BY_TOWN("November", [
        "golden chinars, clear skies and crisp mornings. The best month for garden walks and photography, with quiet roads and shikara rides at low-season rates.",
        "autumn meadow with early snow on Apharwat and Kongdori. The Gondola is a good way to reach snow before winter arrives in the town.",
        "golden poplars and willows along the Lidder, with Betaab and Aru valleys open and very few crowds.",
        "cold, with a chance of early snow and hotels starting to close. Visit as a day trip from Srinagar.",
      ]),
      {
        h: "Getting to Kashmir in November",
        list: [
          "By air: November is low season for flights to Srinagar as well, so fares from major cities are often at their lowest of the year if you book a few weeks ahead.",
          "By train: travel to Katra or Jammu, then take the Vande Bharat from Katra to Srinagar. There is no direct Delhi to Srinagar train yet.",
          "By road: NH 44 from Jammu is normally open through November, with tunnels that have shortened the drive.",
        ],
      },
      {
        h: "Who November suits",
        list: [
          "Photographers and garden lovers, for chinar colours and soft autumn light.",
          "Couples and families looking for the best value of the year.",
          "Travellers who dislike crowds and want unhurried sightseeing.",
          "Not ideal for those who need guaranteed snow in the towns: choose late December to February instead.",
        ],
      },
      {
        h: "Mistakes to avoid in November",
        list: [
          "Packing only for autumn. Nights fall below freezing by mid-month, so bring thermals.",
          "Planning a Sonamarg overnight without checking that the hotel is still open.",
          "Waiting until late November for chinar colours. The peak is usually late October to mid November.",
          "Assuming Gurez is open. The Razdan pass road usually closes for winter in November.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Gulmarg worth visiting in November?",
        a: "Yes. The meadow is quiet, the Gondola often reaches early snow on Apharwat, and hotel rates are low before the winter season.",
      },
      {
        q: "Is Pahalgam good in November?",
        a: "Yes, for golden autumn colours along the Lidder and quiet Betaab and Aru valleys. Nights are cold, so pack warm layers.",
      },
      {
        q: "Are flights to Srinagar cheap in November?",
        a: "November is low season, and fares are often among the lowest of the year if you book a few weeks ahead.",
      },
    ],
  },
  "is-kashmir-safe-to-visit": {
    sections: [
      {
        h: "Myths and facts about Kashmir travel",
        list: [
          "Myth: tourists are targeted everywhere. Fact: attacks on tourists have been rare. The 2025 Baisaran attack was a shocking exception, and the main circuit has run with heavy security since.",
          "Myth: you cannot move around because of curfews. Fact: occasional local shutdowns happen, but tourists usually continue sightseeing, and agents reroute plans when needed.",
          "Myth: everything is closed. Fact: most destinations have reopened in phases since 2025. Only some sites, including Baisaran, were still closed in late 2026.",
          "Myth: Kashmir is unsafe for women. Fact: many women travel comfortably in Kashmir. Normal precautions and modest dress are enough for most.",
          "Myth: phones do not work. Fact: postpaid SIMs work; prepaid SIMs from outside J&K generally do not, so buy a local one if needed.",
        ],
      },
      {
        h: "Safety by place",
        list: [
          "Srinagar: busy and well guarded, with the best infrastructure. Lakefront areas and the boulevard are lively into the evening.",
          "Gulmarg: one of the most protected tourist areas. Risks are cold, altitude and icy roads.",
          "Sonamarg: popular day trip with a visible security presence. Risks are weather and road closures in winter.",
          "Pahalgam: town, Betaab and Aru are open with heavy security. Baisaran is closed. Stay on the routes open to visitors.",
          "Doodhpathri and Yusmarg: reopened in February 2026. Go as day trips and return before dark.",
          "Gurez and border areas: permits needed. Go only with an operator who arranges permits and knows the area.",
        ],
      },
      {
        h: "What to do in an emergency",
        list: [
          "Call 112, India's national emergency number, for police, ambulance or fire.",
          "Tell your hotel and your agent at once: they can contact local police and arrange help faster than anyone.",
          "Keep a printed copy of your ID, hotel addresses and agent's number, in case your phone is lost or the network is down.",
          "For medical emergencies, Srinagar has the main hospitals in the valley. Remote valleys have only basic health centres, so carry personal medicines.",
          "Follow instructions from security personnel at checkpoints, and keep your ID ready.",
        ],
      },
      {
        h: "A safety checklist before you go",
        list: [
          "Check the current status of every place on your itinerary with your agent or hotel.",
          "Read your government's travel advice if you are a foreign national, and check your insurance wording.",
          "Arrange a postpaid SIM or plan to buy a local one at the airport.",
          "Share your itinerary and live location with family at home.",
          "Book with a local operator who can change plans quickly.",
          "Pack a basic medical kit, personal medicines and copies of prescriptions.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Srinagar safe at night?",
        a: "The boulevard and main lakefront areas are lively into the evening and generally safe. As anywhere, avoid isolated areas late at night and use hotel-arranged cabs.",
      },
      {
        q: "Is it safe to stay on a houseboat?",
        a: "Yes. Houseboats are registered with the J&K Tourism department and have been a standard tourist stay for generations. Book a graded boat through a reputable agent.",
      },
      {
        q: "Is Sonamarg safe to visit?",
        a: "Sonamarg is a popular day trip with a visible security presence. In winter, the main risks are snow and road closures.",
      },
    ],
  },
  "kashmir-honeymoon-guide": {
    sections: [
      {
        h: "Winter vs summer honeymoon in Kashmir",
        list: [
          "Winter (December to February): snow, heated rooms, kangris and quieter roads outside peak weeks. Shorter days and the chance of weather delays.",
          "Spring (March to April): snow in Gulmarg, blossom and tulips in Srinagar, mild days. One of the best all-round seasons.",
          "Summer (May to August): green meadows, long days and every valley open. Busier, especially during school holidays.",
          "Autumn (September to November): golden chinars, clear skies and the best value. Cold nights from late October.",
        ],
      },
      {
        h: "Stay plans by trip length",
        list: [
          "4 nights: 2 Srinagar (1 houseboat), 1 Gulmarg, 1 Pahalgam. Sonamarg skipped or as a long day trip.",
          "5 nights: 2 Srinagar (1 houseboat), 1 Gulmarg, 2 Pahalgam. Sonamarg as a day trip from Srinagar.",
          "6 nights: 2 Srinagar, 2 Gulmarg, 2 Pahalgam. The most relaxed plan, with a Sonamarg day if you add a seventh night.",
          "7 nights: add Doodhpathri or Yusmarg as a day trip and keep one buffer day in Srinagar.",
        ],
      },
      {
        h: "Getting there for your honeymoon",
        list: [
          "From Delhi: about 1.5 hours by air to Srinagar, with many daily flights. By train, Delhi to Katra and then Vande Bharat from Katra to Srinagar.",
          "From Mumbai, Bengaluru, Hyderabad and Kolkata: direct flights on some days and one-stop flights via Delhi on others.",
          "Book flights that land before midday, so you can enjoy a shikara ride on the first evening.",
        ],
      },
      {
        h: "Honeymoon mistakes to avoid",
        list: [
          "Packing too many places into five days. More time in the car means less time together.",
          "Staying two nights in a row on a houseboat in winter, when space and heat are limited.",
          "Not asking hotels about heating, generators and hot water in winter.",
          "Leaving Gulmarg out of the overnight plan. One night there is the biggest upgrade most couples remember.",
          "Expecting to visit Baisaran meadow in Pahalgam. It has been closed since April 2025.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a Kashmir honeymoon better in winter or summer?",
        a: "Winter for snow and cosy evenings, summer for green meadows and long days. Spring, from March to April, combines snow in Gulmarg with blossom in Srinagar.",
      },
      {
        q: "How do we reach Kashmir for a honeymoon from Delhi?",
        a: "Fly to Srinagar, about 1.5 hours. Or take a train to Katra and the Vande Bharat from Katra to Srinagar.",
      },
    ],
  },
  "kashmir-taxi-guide": {
    sections: [
      {
        h: "A sample 5-day cab plan",
        days: [
          "Airport pickup and Srinagar local sightseeing: Dal Lake, Mughal gardens and the old city, in your own cab.",
          "Srinagar to Gulmarg and back (or drop at a Gulmarg hotel). Inside Gulmarg you walk, ride a pony or sledge, or take the Gondola.",
          "Srinagar to Sonamarg and back. In Sonamarg, local union vehicles or ponies for the points beyond the town.",
          "Srinagar to Pahalgam. Your driver drops you in town; Pahalgam union taxi for Aru, Betaab and Chandanwari.",
          "Pahalgam to Srinagar via Pampore, then airport drop.",
        ],
      },
      {
        h: "Self-drive, bikes and private cars",
        list: [
          "Self-drive car rentals and motorbike rentals are available in Srinagar. Check insurance, documents and the vehicle's condition, especially brakes and tyres.",
          "Private cars from outside J&K can drive on the highways and to Gulmarg, Pahalgam and Sonamarg town. Rules for private vehicles on local sightseeing routes are set by the local administration and unions and can change, so ask at the taxi stand.",
          "Winter driving needs snow chains and experience on ice. If you have never driven in snow, hire a local driver.",
          "Carry your licence, registration, insurance and photo ID: there are frequent checkpoints.",
        ],
      },
      {
        h: "Shared transport on a budget",
        list: [
          "Shared cabs run between Jammu and Srinagar and from Srinagar to major towns. They are cheap but leave when full and are less flexible.",
          "JKRTC and private buses connect Srinagar with Jammu and some towns. Slow, but very economical.",
          "For tourists with limited time, a private cab is far more practical, because sightseeing points are spread out.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I self-drive in Kashmir?",
        a: "Yes. Self-drive cars and bikes can be rented in Srinagar. Local sightseeing routes in Pahalgam and Sonamarg follow union and administration rules, and winter roads need chains and snow experience.",
      },
      {
        q: "Is there a bus from Jammu to Srinagar?",
        a: "Yes. JKRTC and private buses, plus shared cabs, run between Jammu and Srinagar. The Katra to Srinagar Vande Bharat train is faster.",
      },
    ],
  },
  "gulmarg-in-winter-guide": {
    sections: [
      {
        h: "Gulmarg winter itinerary: one night and two nights",
        days: [
          "Leave Srinagar by 8 am, stop at Tangmarg for chains if needed, and reach Gulmarg by mid-morning. Gondola Phase 1 to Kongdori, snow play and a café lunch. Sledge ride on the meadow in the afternoon, and sunset over the snow.",
          "First Gondola slot for Phase 2 to Apharwat if it is running, or a beginner ski lesson. Walk to St Mary's Church and the Maharani temple, then drive back to Srinagar before dark.",
          "With a second night: a full ski day with an instructor, or a snow scooter ride and a slow afternoon in the meadow. Drive down the next morning.",
        ],
      },
      {
        h: "Gulmarg in winter with children and older travellers",
        list: [
          "Phase 1 to Kongdori is the better choice for small children and older travellers: lower altitude, shorter queues and easy snow play.",
          "At Apharwat (about 3,980 m) the air is thin and cold. Move slowly, drink water and come down if anyone feels unwell.",
          "Dress children in waterproof snow suits and gloves, and change wet clothes quickly.",
          "Sledges are fun but can be fast on steep slopes. Choose gentle runs for children.",
          "Choose a hotel close to the Gondola base to avoid long walks in snow.",
        ],
      },
      {
        h: "Common mistakes in Gulmarg in winter",
        list: [
          "Not booking Gondola slots in advance during peak weeks.",
          "Arriving at midday, when queues are longest and Phase 2 is more likely to close.",
          "Wearing jeans and sports shoes in deep snow. Hire snow pants and boots.",
          "Driving down after dark on an icy road.",
          "Skipping sunscreen and sunglasses. Snow glare at altitude burns quickly.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Gulmarg good for kids in winter?",
        a: "Yes. Snow play at Kongdori and the meadow, sledge rides and short Gondola trips work well for children. Dress them in waterproof layers and keep days short.",
      },
      {
        q: "How many days are enough for Gulmarg in winter?",
        a: "One night is enough for the Gondola and snow play. Two nights let you add skiing or a relaxed day in the meadow.",
      },
    ],
  },
  "where-to-stay-in-kashmir": {
    sections: [
      {
        h: "Stay plans by trip length",
        list: [
          "4 nights: 2 Srinagar (1 houseboat), 1 Gulmarg, 1 Pahalgam.",
          "5 nights: 2 Srinagar, 1 Gulmarg, 2 Pahalgam, with Sonamarg as a day trip from Srinagar.",
          "6 nights: 3 Srinagar, 1 Gulmarg, 2 Pahalgam, with Sonamarg and Doodhpathri as day trips.",
          "7 nights: 3 Srinagar, 2 Gulmarg, 2 Pahalgam: the most relaxed plan, ideal in winter when you need buffer days.",
        ],
      },
      {
        h: "Where to stay by traveller type",
        list: [
          "Honeymooners: one night on a deluxe Nigeen Lake houseboat, a lake-view hotel on Boulevard Road, a meadow-view room in Gulmarg and a riverside room in Pahalgam.",
          "Families with kids: Rajbagh or Boulevard Road hotels with family rooms, one houseboat night at most, and a Gulmarg hotel close to the Gondola base.",
          "Senior travellers: hotels with lifts and ground-floor rooms, Srinagar as a base with day trips, and a short Pahalgam stay near the market.",
          "Skiers: Gulmarg hotels near the Gondola base for the whole trip, with a night in Srinagar on arrival or departure.",
          "Budget travellers: Dalgate and Lal Chowk guesthouses, simpler houseboat categories in summer, and Tangmarg instead of Gulmarg.",
        ],
      },
      {
        h: "Meal plans and what they mean",
        list: [
          "CP: room with breakfast only.",
          "MAP: breakfast and dinner, the most common plan for Kashmir packages, because lunch is usually eaten out during sightseeing.",
          "AP: all meals, common on houseboats and in remote valleys.",
          "Houseboats usually include breakfast and dinner, cooked on board or in the owner's kitchen boat.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where should families stay in Srinagar?",
        a: "Rajbagh or Boulevard Road hotels with family rooms, plus one houseboat night at most. Rajbagh is quieter and close to good restaurants.",
      },
      {
        q: "What meal plan is best for a Kashmir trip?",
        a: "MAP, with breakfast and dinner, suits most trips because lunch is usually eaten out during sightseeing.",
      },
    ],
  },
  "kashmiri-food-guide": {
    sections: [
      {
        h: "How to eat a wazwan",
        list: [
          "Wash your hands at the table: a server brings a jug and basin (tash-t-nari) before the meal.",
          "Share the trami with your group, eating from the section in front of you.",
          "Traditionally, wazwan is eaten with the right hand. Restaurants will happily give you cutlery.",
          "Pace yourself. Dishes keep arriving, and gushtaba, served near the end, signals the meal is closing.",
          "Finish with kahwa, which is said to help digest the rich meal.",
        ],
      },
      {
        h: "Street food and sweets",
        list: [
          "Nadru monje: crisp lotus stem fritters, sold at street stalls, especially around Khayam and the old city.",
          "Masala tchot: lavasa bread with a chickpea curry and chutneys, a popular street snack.",
          "Kulcha with tea: a classic afternoon snack at kandur bakeries.",
          "Phirni: a set rice and milk pudding, often served in clay bowls.",
          "Shufta: a rich sweet of dry fruits, paneer and spices, made for festivals.",
        ],
      },
      {
        h: "Food tips for travellers",
        list: [
          "Most restaurants serve meat, but every town has vegetarian options, and vegetarian dhabas are easy to find in Srinagar.",
          "Kashmiri food is rich. Order a few dishes to share rather than a full wazwan for every meal.",
          "Alcohol is not widely available in Kashmir, and many hotels and houseboats do not serve it.",
          "Drink bottled or filtered water, especially on houseboats.",
          "In winter, ask your hotel to arrange a harissa breakfast or tell you which old city shops open earliest.",
        ],
      },
    ],
    faqs: [
      {
        q: "What street food should I try in Srinagar?",
        a: "Nadru monje lotus stem fritters, masala tchot, kulcha with tea and phirni are the classics.",
      },
      {
        q: "Is alcohol available in Kashmir?",
        a: "It is not widely available. A few licensed outlets exist, and many hotels and houseboats do not serve alcohol.",
      },
    ],
  },
};

// Append the extra sections and FAQs to the posts they belong to.
export function withKashmirExtras(posts: BlogPost[]): BlogPost[] {
  return posts.map((p) => {
    const x = KASHMIR_EXTRAS[p.slug];
    return x ? { ...p, sections: [...p.sections, ...x.sections], faqs: [...p.faqs, ...x.faqs] } : p;
  });
}
