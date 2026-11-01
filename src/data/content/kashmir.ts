import type { GuideContent } from "@/lib/locations";

// Kashmir and Jammu cities and places. Rules: fact-based, no invented prices,
// no em dashes. Altitudes and distances are approximate road figures; road
// openings (Zojila, Razdan, Doodhpathri) change every year.

export const KASHMIR_CITIES: Record<string, GuideContent> = {
  srinagar: {
    intro:
      "Srinagar is the summer capital of Jammu and Kashmir, at about 1,585 m on the Jhelum river. It is the base for most Kashmir holidays: houseboats and shikara rides on Dal and Nigeen lakes, the Mughal gardens, the old city's shrines and markets, and day trips to Gulmarg, Pahalgam, Sonamarg and Doodhpathri.\n\nMost trips spend two or three nights here, often one of them on a houseboat. The airport has direct flights from major Indian cities, and Vande Bharat trains now link Srinagar with Katra.",
    highlights: [
      "Shikara rides and houseboat stays on Dal Lake and Nigeen Lake",
      "The Mughal gardens: Shalimar Bagh, Nishat Bagh, Chashme Shahi and Pari Mahal",
      "The Indira Gandhi Memorial Tulip Garden, open for a few weeks in spring",
      "Hazratbal Shrine and Jamia Masjid; Shankaracharya Temple on the hill above the lake",
      "The old city, the floating vegetable market and Kashmiri handicraft shops",
    ],
    idealDuration: "2 to 3 days",
    bestMonths: "March to October; December to February for winter",
    gateway: "Srinagar airport (SXR)",
    howToReach: {
      air: "Sheikh ul-Alam International Airport (SXR) has direct flights from Delhi, Mumbai, Bengaluru, Kolkata and other cities.",
      rail: "Vande Bharat trains run between Shri Mata Vaishno Devi Katra and Srinagar; Katra has direct trains from Delhi and other cities.",
      road: "Srinagar is about 250 km from Jammu on NH44, 6 to 8 hours by road.",
    },
    sections: {
      "places-to-visit": {
        intro:
          "Places to visit in Srinagar cluster around Dal Lake: the Mughal gardens along its eastern shore, Hazratbal on the north shore, and Shankaracharya Temple on the hill above the boulevard. Plan a full day for the lake and gardens, and half a day for the old city.",
      },
    },
    faqs: [
      { q: "How many days are enough for Srinagar?", a: "Two days cover Dal Lake, the Mughal gardens, Hazratbal and the old city. Add a night on a houseboat and use Srinagar as the base for day trips." },
      { q: "Is a houseboat stay in Srinagar worth it?", a: "Most visitors stay one night on a Dal or Nigeen Lake houseboat for the experience. Houseboats are graded by category, so confirm it in your quote." },
    ],
  },

  gulmarg: {
    intro:
      "Gulmarg is a meadow resort at about 2,650 m in the Pir Panjal range, about 50 km west of Srinagar. It is Kashmir's ski resort from about December to March and a green meadow for walks and pony rides the rest of the year. Its main attraction is the Gulmarg Gondola, which climbs to the Apharwat ridge in two phases.",
    highlights: [
      "Gulmarg Gondola Phase 1 to Kongdoori and Phase 2 to Apharwat",
      "Skiing and snowboarding from about December to March",
      "Khilanmarg meadow and the walk to Alpather Lake",
      "St. Mary's Church, built in 1902, and one of the world's highest golf courses",
    ],
    idealDuration: "1 to 2 days",
    bestMonths: "December to March for snow; April to October for meadows",
    gateway: "Srinagar, about 50 km",
    howToReach: {
      road: "About 50 km from Srinagar via Tangmarg, around 1.5 to 2 hours. Taxis run from Srinagar; in heavy snow, chains or 4x4 vehicles may be required beyond Tangmarg.",
    },
    sections: {
      "places-to-visit": {
        intro:
          "Places to visit in Gulmarg are reached from the meadow on foot, by pony or by gondola: Khilanmarg on the slope above, Kongdoori and Apharwat on the gondola, and Alpather Lake for walkers in summer. Gondola tickets sell out in peak months, so book online in advance.",
      },
    },
    faqs: [
      { q: "When is snow in Gulmarg?", a: "Gulmarg usually has snow from December to March, and higher points such as Apharwat often keep snow into April and May." },
      { q: "How far is Gulmarg from Srinagar?", a: "About 50 km, roughly 1.5 to 2 hours by road via Tangmarg." },
    ],
  },

  pahalgam: {
    intro:
      "Pahalgam is a valley town at about 2,130 m on the Lidder river, about 95 km east of Srinagar. It is known for the side valleys of Betaab, Aru and Chandanwari, riverside walks, and as a base for treks and the Amarnath Yatra. Sightseeing beyond the town is done in Pahalgam's local union taxis, not in outstation cabs.",
    highlights: [
      "Betaab Valley, Aru Valley and Chandanwari by local union taxi",
      "Walks and picnics along the Lidder River",
      "Starting point of treks to Kolahoi glacier and Tarsar Marsar from Aru",
      "Base of the Amarnath Yatra route via Chandanwari and Sheshnag",
    ],
    idealDuration: "1 to 2 days",
    bestMonths: "April to October; December to February for snow",
    gateway: "Srinagar, about 95 km",
    howToReach: {
      road: "About 95 km from Srinagar via Anantnag, around 2.5 to 3 hours. Many trips stop at the saffron fields of Pampore and the Awantipora ruins on the way.",
      local: "Betaab Valley, Aru Valley and Chandanwari are visited in Pahalgam union taxis at fixed rates; ask whether these are included in your quote.",
    },
    sections: {
      "places-to-visit": {
        intro:
          "Places to visit in Pahalgam fan out from the town along the Lidder and its branches: Betaab Valley and Chandanwari up the eastern Lidder, and Aru Valley up the western one. Most visitors cover Betaab and Chandanwari in one half day and Aru in another. Sheshnag Lake is a trek or yatra stop, not a drive.",
      },
    },
    faqs: [
      { q: "What are the places to visit in Pahalgam?", a: "Betaab Valley, Aru Valley, Chandanwari and the Lidder River are the main sights, with Sheshnag Lake for trekkers and Amarnath yatris." },
      { q: "Do I need local taxis in Pahalgam?", a: "Yes. Betaab, Aru and Chandanwari are visited in Pahalgam's local union taxis, booked on the spot or through your agent." },
      { q: "How far is Pahalgam from Srinagar?", a: "About 95 km, roughly 2.5 to 3 hours by road via Anantnag." },
    ],
  },

  sonamarg: {
    intro:
      "Sonamarg is a valley at about 2,800 m on the Sindh river, about 80 km north-east of Srinagar on the Srinagar to Leh highway. It is the gateway to Zojila Pass and Ladakh, and the start of the Kashmir Great Lakes trek. Most visitors come on a day trip for Thajiwas Glacier.",
    highlights: [
      "Thajiwas Glacier by pony or on foot",
      "Zojila Pass on the road to Ladakh",
      "Start of the Kashmir Great Lakes trek past Vishansar Lake",
      "River rafting on the Sindh in summer",
    ],
    idealDuration: "1 day, or 1 night",
    bestMonths: "April to October",
    gateway: "Srinagar, about 80 km",
    howToReach: {
      road: "About 80 km from Srinagar on NH1 via Kangan, around 2.5 to 3 hours. In winter the road may stop short of Sonamarg after snowfall; check with local police or your driver.",
    },
    sections: {
      "places-to-visit": {
        intro:
          "Places to visit in Sonamarg are Thajiwas Glacier, a short pony ride from the town, Zojila Pass up the highway towards Ladakh, and Vishansar Lake for trekkers on the Kashmir Great Lakes route.",
      },
    },
    faqs: [
      { q: "Is Sonamarg open in winter?", a: "Sonamarg is often cut off after heavy snow from about December to March, and tourist access depends on road clearance. Check the status before planning a winter visit." },
    ],
  },

  doodhpathri: {
    intro:
      "Doodhpathri is a meadow at about 2,730 m in Budgam district, about 42 km south-west of Srinagar. Its open grasslands, pine forest and the Shaliganga river make it a quieter alternative to Gulmarg for a day trip.",
    highlights: ["Meadows and pine forest", "The Shaliganga river", "Pony rides and short walks"],
    idealDuration: "Half to one day",
    bestMonths: "April to October",
    gateway: "Srinagar, about 42 km",
    howToReach: { road: "About 42 km from Srinagar via Budgam and Khansahib, around 1.5 hours. Snow can close the road in winter." },
    faqs: [
      { q: "Is Doodhpathri worth visiting?", a: "Yes, for open meadows and fewer crowds than Gulmarg. It works as a half-day or full-day trip from Srinagar between about April and October." },
    ],
  },

  yusmarg: {
    intro:
      "Yusmarg is a meadow at about 2,400 m in Budgam district, about 47 km from Srinagar, surrounded by pine forest. The Doodh Ganga stream runs below it, and Nilnag Lake is a short walk away.",
    highlights: ["Nilnag Lake walk", "Doodh Ganga stream", "Forest meadows away from crowds"],
    idealDuration: "Half to one day",
    bestMonths: "April to October",
    gateway: "Srinagar, about 47 km",
    howToReach: { road: "About 47 km from Srinagar via Budgam and Chrar-e-Sharief, around 1.5 to 2 hours." },
  },

  gurez: {
    intro:
      "Gurez is a remote valley at about 2,400 m on the Kishanganga river, about 125 km north of Srinagar over Razdan Pass. It lies close to the Line of Control, keeps its own Dard-Shin culture and log-wood villages, and is known for the pyramid-shaped Habba Khatoon peak.",
    highlights: ["Habba Khatoon peak above Dawar", "The Kishanganga river", "Wooden villages and homestays"],
    idealDuration: "2 days",
    bestMonths: "May to October",
    gateway: "Srinagar via Bandipora",
    howToReach: {
      road: "About 125 km from Srinagar via Bandipora and Razdan Pass, around 5 to 6 hours. The road is usually open from about May to November. Carry ID; visitors register at check posts on the way.",
    },
    faqs: [
      { q: "When can I visit Gurez Valley?", a: "From about May to October, when Razdan Pass is open. Snow closes the road for much of winter." },
    ],
  },

  jammu: {
    intro:
      "Jammu is the winter capital of Jammu and Kashmir, on the Tawi river, and the main rail and road gateway to Katra and the Kashmir valley. It is known as the City of Temples, with the Raghunath Temple complex at its centre, and for the Dogra palaces of Mubarak Mandi.",
    highlights: ["Raghunath Temple complex", "Bahu Fort and Bawe Wali Mata temple", "Mubarak Mandi Palace", "Mansar Lake, about 60 km away"],
    idealDuration: "1 day",
    bestMonths: "October to March",
    gateway: "Jammu Tawi station or Jammu airport (IXJ)",
    howToReach: {
      air: "Jammu airport (IXJ) has flights from Delhi, Mumbai and other cities.",
      rail: "Jammu Tawi has direct trains from Delhi, Mumbai, Kolkata and other cities.",
      road: "Jammu is about 590 km from Delhi on NH44.",
    },
  },

  katra: {
    intro:
      "Katra is the base town for the Mata Vaishno Devi shrine, about 50 km from Jammu at the foot of the Trikuta hills. Pilgrims walk or ride about 12 to 13 km from Banganga to the Bhawan, with Ardhkuwari halfway, and a ropeway links the Bhawan with Bhairon Temple.",
    highlights: ["Mata Vaishno Devi shrine (Bhawan)", "Ardhkuwari cave temple", "Bhairon Temple by ropeway", "Vande Bharat trains to Srinagar"],
    idealDuration: "1 to 2 days",
    bestMonths: "March to June, September to November",
    gateway: "Shri Mata Vaishno Devi Katra station",
    howToReach: {
      rail: "Shri Mata Vaishno Devi Katra station has direct trains from Delhi and other cities, and Vande Bharat trains to Srinagar.",
      road: "About 50 km from Jammu, around 1.5 hours.",
      local: "Register for the yatra through the Shrine Board and carry the RFID card. Ponies, palkis, battery cars and a helicopter service (Katra to Sanjichhat) are available.",
    },
    faqs: [
      { q: "How long is the Vaishno Devi trek?", a: "About 12 to 13 km one way from Banganga in Katra to the Bhawan. Most pilgrims take 5 to 7 hours up on foot." },
    ],
  },

  patnitop: {
    intro:
      "Patnitop is a hill resort at about 2,000 m in Udhampur district, about 110 km from Jammu, with pine forests and snow in winter. Since the Chenani-Nashri tunnel opened, the highway bypasses it, so Patnitop is now a short detour from NH44.",
    highlights: ["Nathatop for snow and views", "Sanasar meadow and paragliding", "Kud and forest walks"],
    idealDuration: "1 to 2 days",
    bestMonths: "March to June; December to February for snow",
    gateway: "Jammu, about 110 km",
    howToReach: { road: "About 110 km from Jammu, around 3 hours, leaving NH44 before the Chenani-Nashri tunnel." },
  },
};

export const KASHMIR_PLACES: Record<string, GuideContent> = {
  "srinagar/places-to-visit/dal-lake": {
    intro:
      "Dal Lake is Srinagar's best-known sight: a lake of several basins ringed by the Zabarwan hills, with houseboats along its shores, floating gardens and the boulevard road. Shikara rides of an hour or more are the classic way to see it, and the early-morning floating vegetable market is a highlight.",
    facts: [
      { label: "Where", value: "Srinagar, along the Boulevard" },
      { label: "Best for", value: "Shikara rides, houseboat stays, sunsets" },
    ],
    faqs: [{ q: "What is the best time for a shikara ride on Dal Lake?", a: "Early morning for the floating market and calm water, or late afternoon for sunset over the Zabarwan hills." }],
  },
  "srinagar/places-to-visit/mughal-gardens": {
    intro:
      "The Mughal gardens of Srinagar are terraced gardens laid out in the 17th century along the Zabarwan hills above Dal Lake, with water channels, fountains and chinar trees. The four usually visited are Shalimar Bagh, Nishat Bagh, Chashme Shahi and Pari Mahal; most visitors cover them in half a day.",
  },
  "srinagar/places-to-visit/shalimar-bagh": {
    intro:
      "Shalimar Bagh is the Mughal garden built by Emperor Jahangir in 1619, on the north-eastern shore of Dal Lake. Its terraces, central water channel and black marble pavilion are best seen in spring and autumn.",
  },
  "srinagar/places-to-visit/indira-gandhi-tulip-garden": {
    intro:
      "The Indira Gandhi Memorial Tulip Garden, on the slopes of the Zabarwan hills above Dal Lake, is one of the largest tulip gardens in Asia. It opens for a few weeks each spring, usually from late March to April, depending on the bloom.",
    faqs: [{ q: "When does the Srinagar tulip garden open?", a: "Usually in late March, for about three to four weeks while the tulips bloom. Dates are announced each year by J&K Tourism." }],
  },
  "srinagar/places-to-visit/shankaracharya-temple": {
    intro:
      "Shankaracharya Temple is a Shiva temple on a hill above Srinagar, reached by road and a climb of a few hundred steps. It gives the best panoramic view over Dal Lake and the city. Phones and cameras may be restricted at the top; check at the entrance.",
  },
  "srinagar/places-to-visit/hazratbal-shrine": {
    intro:
      "Hazratbal Shrine is a white marble mosque on the north-western shore of Dal Lake, revered for a relic believed to be a hair of the Prophet Muhammad. Visitors should dress modestly; women usually cover their heads and some inner areas are restricted.",
  },
  "gulmarg/places-to-visit/gulmarg-gondola": {
    intro:
      "The Gulmarg Gondola runs in two phases: Phase 1 from Gulmarg to Kongdoori, and Phase 2 from Kongdoori to the Apharwat ridge, close to 4,000 m. It is one of the highest cable cars in the world. Tickets are sold online by the J&K Cable Car Corporation and sell out in peak months.",
    facts: [
      { label: "Phase 1", value: "Gulmarg to Kongdoori" },
      { label: "Phase 2", value: "Kongdoori to Apharwat ridge" },
      { label: "Tickets", value: "Online, J&K Cable Car Corporation" },
    ],
    faqs: [{ q: "Should I book Gulmarg Gondola tickets in advance?", a: "Yes. Tickets for both phases are sold online and often sell out in peak season and on weekends. Phase 2 can close in bad weather." }],
  },
  "gulmarg/places-to-visit/apharwat-peak": {
    intro:
      "Apharwat is the high ridge above Gulmarg, reached by Phase 2 of the gondola. It has snow for most of the year, wide views of the Pir Panjal and, in clear weather, distant peaks, and is the start of Gulmarg's off-piste ski runs in winter.",
  },
  "gulmarg/places-to-visit/khilanmarg": {
    intro:
      "Khilanmarg is a meadow above Gulmarg, reached by a walk or pony ride of about 6 km. In summer it is covered in grass and wildflowers; in winter it is a ski slope.",
  },
  "gulmarg/places-to-visit/alpather-lake": {
    intro:
      "Alpather Lake is a high lake below Apharwat, about 13 km beyond Gulmarg, that stays frozen until around June. It is reached by a long walk or pony ride from Gulmarg or from the gondola's Phase 2 area in summer.",
  },
  "gulmarg/places-to-visit/st-marys-church": {
    intro:
      "St. Mary's Church in Gulmarg is a small stone church built in 1902 during the British period, standing on the meadow near the golf course.",
  },
  "pahalgam/places-to-visit/betaab-valley": {
    intro:
      "Betaab Valley is a green valley about 15 km from Pahalgam on the road to Chandanwari, named after the 1983 Hindi film Betaab that was shot there. A stream from the Sheshnag side runs through it, and it is usually combined with Chandanwari in one trip.",
    facts: [
      { label: "Distance from Pahalgam", value: "About 15 km" },
      { label: "How to go", value: "Pahalgam local union taxi" },
    ],
  },
  "pahalgam/places-to-visit/aru-valley": {
    intro:
      "Aru Valley is a meadow village about 12 km from Pahalgam up the western Lidder. It is quieter than Betaab, with pony rides and walks, and is the base for treks to Kolahoi glacier and Tarsar Marsar lakes.",
    facts: [
      { label: "Distance from Pahalgam", value: "About 12 km" },
      { label: "Known for", value: "Meadows, treks to Kolahoi and Tarsar Marsar" },
    ],
  },
  "pahalgam/places-to-visit/chandanwari": {
    intro:
      "Chandanwari is about 16 km from Pahalgam, where the road ends and the Amarnath Yatra trek begins. Visitors come for the snow bridge over the stream, which often lasts into summer.",
  },
  "pahalgam/places-to-visit/lidder-river": {
    intro:
      "The Lidder River runs through Pahalgam from the Kolahoi glacier and the Sheshnag area. Its banks are used for walks, picnics and trout fishing (with a licence from the Fisheries Department), and for rafting in summer.",
  },
  "pahalgam/places-to-visit/sheshnag-lake": {
    intro:
      "Sheshnag Lake is a high glacial lake at about 3,590 m on the Amarnath Yatra route, beyond Chandanwari. It is reached on foot during the yatra or on treks, not by road.",
  },
  "sonamarg/places-to-visit/thajiwas-glacier": {
    intro:
      "Thajiwas Glacier lies a few kilometres above Sonamarg and is reached by pony or on foot. Snow usually remains near the glacier well into summer, making it the main day-trip sight in Sonamarg.",
  },
  "sonamarg/places-to-visit/zojila-pass": {
    intro:
      "Zojila Pass, at about 3,530 m, links Sonamarg in Kashmir with Drass and Kargil in Ladakh on NH1. It is usually open from about May to November and closes after heavy snow. Visitors from Sonamarg often drive up to Zero Point beyond the pass in summer.",
  },
  "sonamarg/places-to-visit/vishansar-lake": {
    intro:
      "Vishansar Lake is a high alpine lake on the Kashmir Great Lakes trek, which starts near Sonamarg. It is reached only on foot, usually on the second or third day of the trek, between about July and September.",
  },
  "doodhpathri/places-to-visit/shaliganga-river": {
    intro: "The Shaliganga is the stream that flows through the meadows of Doodhpathri, with flat grassy banks for picnics and short walks.",
  },
  "doodhpathri/places-to-visit/doodhpathri-meadows": {
    intro:
      "The Doodhpathri meadows are wide grasslands at about 2,730 m ringed by pine and fir forest. Pony rides take visitors across the meadows to viewpoints over the Shaliganga.",
  },
  "yusmarg/places-to-visit/nilnag-lake": {
    intro: "Nilnag Lake is a small forest lake a short walk or pony ride from the Yusmarg meadow.",
  },
  "yusmarg/places-to-visit/doodh-ganga": {
    intro: "The Doodh Ganga is the stream that flows below Yusmarg, named for its foaming white water.",
  },
  "gurez/places-to-visit/habba-khatoon-peak": {
    intro:
      "Habba Khatoon peak is the pyramid-shaped mountain above Dawar in Gurez, named after the 16th-century Kashmiri poet queen Habba Khatoon. A spring at its base is also named after her.",
  },
  "gurez/places-to-visit/kishanganga-river": {
    intro: "The Kishanganga runs through the Gurez valley towards the Line of Control, where it continues as the Neelum. Its banks around Dawar are the setting for most Gurez stays.",
  },
  "gurez/places-to-visit/dawar": {
    intro: "Dawar is the main village of Gurez, with homestays, the market and views of Habba Khatoon peak.",
  },
  "jammu/places-to-visit/raghunath-temple": {
    intro:
      "The Raghunath Temple complex in the centre of Jammu was built by the Dogra rulers in the 19th century and is dedicated to Rama. It is one of the largest temple complexes in North India.",
  },
  "jammu/places-to-visit/bahu-fort": {
    intro: "Bahu Fort stands on a hill above the Tawi river in Jammu and houses the Bawe Wali Mata temple, dedicated to Kali, with a terraced garden below.",
  },
  "jammu/places-to-visit/mubarak-mandi-palace": {
    intro: "Mubarak Mandi is the former royal palace complex of the Dogra rulers in Jammu, built over more than a century in a mix of Rajasthani, Mughal and European styles.",
  },
  "jammu/places-to-visit/mansar-lake": {
    intro: "Mansar Lake is a forest-fringed lake about 60 km from Jammu, sacred to Hindus, with boating and a walking path around the shore.",
  },
  "katra/places-to-visit/mata-vaishno-devi-shrine": {
    intro:
      "The Mata Vaishno Devi shrine is a cave temple in the Trikuta hills above Katra, visited by millions of pilgrims each year. The Bhawan is about 12 to 13 km from Banganga on foot, with ponies, palkis, battery cars and a helicopter service as alternatives.",
    faqs: [{ q: "Is registration required for Vaishno Devi?", a: "Yes. Pilgrims register with the Shrine Board online or at Katra and carry the RFID yatra card." }],
  },
  "katra/places-to-visit/bhairon-temple": {
    intro: "Bhairon Temple is about 2 km above the Vaishno Devi Bhawan, linked by a ropeway. Pilgrims traditionally visit it after the darshan.",
  },
  "katra/places-to-visit/ardhkuwari": {
    intro: "Ardhkuwari is the halfway point of the Vaishno Devi trek, with a narrow cave temple (Garbh Joon) that pilgrims pass through; entry is by token and queues can be long.",
  },
  "patnitop/places-to-visit/nathatop": {
    intro: "Nathatop is the high meadow above Patnitop, known for snow in winter and wide views of the surrounding ranges.",
  },
  "patnitop/places-to-visit/sanasar": {
    intro: "Sanasar is a meadow about 20 km from Patnitop, used for camping and paragliding in summer.",
  },
  "patnitop/places-to-visit/kud": {
    intro: "Kud is a small town on the old highway below Patnitop, with forest walks and local sweet shops.",
  },
};
