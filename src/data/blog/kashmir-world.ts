import type { BlogPost, BlogSection } from "./types";

// Kashmir for travellers from abroad (2026-11-10), one guide per origin
// market. Visa and advisory facts are stated cautiously and always point to
// the official source, because they change. No fares, no em dashes.

const DATE = "2026-11-10";

type Origin = {
  slug: string;
  country: string; // used in prose: "the UAE", "Saudi Arabia"
  short: string; // title form: "UAE and Dubai"
  description: string;
  intro: string;
  visa: string[];
  flights: string[];
  advisory: string[];
  season: string[];
  food: { h: string; p: string[] };
  extra?: BlogSection[];
  faqs: { q: string; a: string }[];
};

const FOREIGNER_RULES: BlogSection = {
  h: "Rules for foreign visitors in Kashmir",
  list: [
    "Form C: hotels and houseboats register foreign guests with the authorities through Form C. Carry your passport and visa; the hotel will ask for copies.",
    "Restricted areas: some border areas, including Gurez, Keran and Bangus, are generally closed to foreign nationals. Srinagar, Gulmarg, Pahalgam, Sonamarg, Doodhpathri and Yusmarg are the usual tourist areas.",
    "Ladakh: foreign nationals need a Protected Area Permit for Nubra, Pangong, Tso Moriri and other protected areas, arranged through a registered agent in Leh.",
    "Photography: do not photograph army posts, bridges or security installations.",
    "Overseas Citizens of India (OCI cardholders) travel without a visa but follow the same rules for restricted areas.",
  ],
};

const MONEY_SIM: BlogSection = {
  h: "Money, SIM cards and staying connected",
  list: [
    "Currency: Indian rupees. Change money or withdraw cash at a major Indian airport before flying to Srinagar; currency exchange in Srinagar is limited.",
    "Cards and UPI work in hotels and larger shops in Srinagar, Gulmarg and Pahalgam. Carry cash for ponies, union taxis, shikaras and small shops.",
    "Mobile: international roaming works on partner networks, but Indian prepaid SIMs from outside J&K do not work in the region. Many visitors rely on hotel Wi-Fi and their driver's phone.",
    "Emergency number: 112 across India.",
  ],
};

const PLAN_7: BlogSection = {
  h: "A 7-day Kashmir plan for international travellers",
  days: [
    "Arrive in Srinagar via Delhi or Mumbai. Houseboat night on Dal or Nigeen and a sunset shikara.",
    "Srinagar: Mughal gardens, Hazratbal shrine, Jamia Masjid and the old city.",
    "Day trip to Gulmarg for the Gondola and meadow.",
    "Day trip to Sonamarg and Thajiwas Glacier.",
    "Drive to Pahalgam via Pampore's saffron fields and the Awantipora ruins.",
    "Pahalgam: Betaab, Aru and Chandanwari by union taxi.",
    "Return to Srinagar and fly out, keeping a buffer before your international connection.",
  ],
};

const BOOKING: (country: string) => BlogSection = (country) => ({
  h: `Booking a Kashmir trip from ${country}`,
  p: [
    `Most travellers from ${country} book a private Kashmir package that starts and ends at Srinagar airport, with named hotels, a private car with driver, a houseboat night and the shikara included. Ask for the hotel names in each town, the vehicle model, the meal plan and what is not included, such as Gondola tickets, union taxis in Pahalgam and Sonamarg, and ponies. Compare at least two quotes with the same inclusions.`,
    "Keep a buffer of at least one night between your last Kashmir day and your international flight home. Srinagar flights can be delayed by weather, especially in winter, and the security check at the airport gate adds time on departure.",
  ],
});

function make(o: Origin): BlogPost {
  return {
    slug: o.slug,
    title: `Kashmir Tour Packages from ${o.short}: Visa, Flights, Best Time and a 7-Day Plan`,
    description: o.description,
    category: "International",
    destination: "kashmir",
    date: DATE,
    intro: o.intro,
    sections: [
      { h: `Visa and entry for travellers from ${o.country}`, p: o.visa },
      { h: `Flights from ${o.country} to Srinagar`, p: o.flights },
      { h: "Travel advisories and insurance", p: o.advisory },
      { h: `Best time to visit Kashmir from ${o.country}`, p: o.season },
      PLAN_7,
      o.food,
      FOREIGNER_RULES,
      MONEY_SIM,
      ...(o.extra ?? []),
      BOOKING(o.country),
    ],
    faqs: o.faqs,
  };
}

const GULF_FOOD = (who: string): { h: string; p: string[] } => ({
  h: "Halal food, prayer and customs",
  p: [
    `Kashmir is a Muslim-majority region, so ${who} travellers find halal food everywhere: meat served in restaurants, hotels and houseboats is halal as a matter of course. Kashmiri cuisine is a highlight in itself, from the wazwan feast with rista, rogan josh and gushtaba to kahwa and fresh bakery breads.`,
    "Mosques and shrines are found in every town, including the Hazratbal shrine on Dal Lake, the Jamia Masjid in the old city and the Khanqah-e-Moula on the Jhelum. Friday prayers are well attended, and visitors are welcome to join. During Ramadan, restaurants open for iftar and the evenings are lively. Dress codes are similar to home: modest clothing is normal, and families travel comfortably.",
  ],
});

const ORIGINS: Origin[] = [
  {
    slug: "kashmir-tour-packages-from-uae",
    country: "the UAE",
    short: "UAE and Dubai",
    description: "Kashmir from the UAE and Dubai: visa and e-Visa options, flights via Delhi or Mumbai, halal food, the best season to escape Gulf heat or see snow, and a 7-day plan.",
    intro:
      "Kashmir is one of the most popular holidays for travellers from Dubai, Abu Dhabi and Sharjah: a cool, green escape from Gulf summer heat from May to September, and real snow in Gulmarg from December to February. There are many daily flights from the UAE to Delhi and Mumbai, with connections to Srinagar the same day. UAE nationals can apply for an Indian e-Visa, Indian passport holders need no visa, and halal food is the norm across Kashmir.",
    visa: [
      "UAE nationals and many other nationalities resident in the UAE can apply for an Indian e-Visa online through the official Indian government visa website before travel. Apply at least a week ahead and check the current eligibility and rules, which change. Indian passport holders living in the UAE need no visa, and OCI cardholders travel on their OCI card.",
      "Carry your passport with the e-Visa approval, and keep photocopies: hotels and houseboats need them for foreign guest registration.",
    ],
    flights: [
      "There is no regular direct flight from the UAE to Srinagar at present. Most travellers fly from Dubai, Abu Dhabi or Sharjah to Delhi or Mumbai, about 3 to 3.5 hours, and connect to Srinagar on a domestic flight, about 1.5 hours from Delhi or 3 hours from Mumbai. Choose a morning arrival in Delhi so you reach Srinagar in daylight. Some travellers spend a night in Delhi on the way in.",
    ],
    advisory: [
      "Before you book, read your government's current travel advice for Jammu and Kashmir and check that your travel insurance covers the region. Advisories and insurers' rules can change at short notice, so check again a few days before departure. Follow local news and your hotel's advice during your stay.",
    ],
    season: [
      "For Gulf travellers, two seasons stand out. From May to September, Kashmir's cool days, green meadows and lakes are a perfect escape from UAE summer heat, with Srinagar in the mid-20s to low 30s Celsius and Gulmarg and Pahalgam cooler. From December to February, Gulmarg and Pahalgam are under snow, which many Gulf families travel specially to see; Srinagar is cold and crisp. April brings tulips, and October brings golden chinars.",
      "School holidays in the UAE, Eid holidays and the summer break are the busiest times for UAE visitors, so book early for those dates.",
    ],
    food: GULF_FOOD("UAE"),
    faqs: [
      { q: "Is there a direct flight from Dubai to Srinagar?", a: "Not regularly at present. Most travellers fly to Delhi or Mumbai and connect to Srinagar the same day." },
      { q: "Do UAE nationals need a visa for Kashmir?", a: "Yes, an Indian visa. UAE nationals can apply for an Indian e-Visa online through the official website. Indian passport holders need no visa." },
      { q: "Is halal food available in Kashmir?", a: "Yes. Kashmir is Muslim-majority, and meat served across the region is halal." },
      { q: "When is the best time to see snow in Kashmir from the UAE?", a: "December to February, in Gulmarg and Pahalgam." },
      { q: "How many days are enough for Kashmir from Dubai?", a: "Six to seven days covers Srinagar, Gulmarg, Sonamarg and Pahalgam, plus travel time." },
    ],
  },
  {
    slug: "kashmir-tour-packages-from-saudi-arabia",
    country: "Saudi Arabia",
    short: "Saudi Arabia",
    description: "Kashmir from Saudi Arabia: Indian e-Visa, flights from Riyadh, Jeddah and Dammam via Delhi or Mumbai, halal food, Eid travel, snow season and a 7-day plan.",
    intro:
      "Kashmir appeals strongly to travellers from Riyadh, Jeddah and Dammam: green valleys and cool air in summer, snow in winter, halal food everywhere and a deep Islamic heritage in Srinagar's shrines and mosques. Saudi nationals can apply for an Indian e-Visa, and there are frequent flights from Saudi cities to Delhi and Mumbai with same-day connections to Srinagar. Families often plan Kashmir around the summer break or Eid holidays.",
    visa: [
      "Saudi nationals can apply for an Indian e-Visa through the official Indian government visa website, and residents of other nationalities should check their own eligibility. Apply well before travel and check current rules. Indian passport holders working in Saudi Arabia need no visa.",
      "Keep your passport and e-Visa approval with you and carry photocopies for hotel registration.",
    ],
    flights: [
      "Saudi Arabia has frequent flights to Indian hubs, especially Delhi and Mumbai, as well as Hyderabad, Kochi and other cities, typically 4 to 5 hours. From Delhi, Srinagar is about 1.5 hours by domestic flight. There is no regular direct flight from Saudi Arabia to Srinagar at present. Plan the domestic leg on the same ticket where possible, so a delay is protected.",
    ],
    advisory: [
      "Check your government's latest travel advice for Jammu and Kashmir before booking, and make sure your travel insurance covers the region. Re-check close to departure, follow local news while you travel and take your hotel's advice on the day's plans.",
    ],
    season: [
      "Summer, from May to September, is Kashmir's most popular season with Saudi families, offering cool weather, meadows, rivers and lakes in contrast to the desert heat. Winter, from December to February, brings snow in Gulmarg and Pahalgam, a highlight for many first-time snow visitors. Spring tulips in April and autumn colours in October are quieter alternatives.",
      "If you travel during Ramadan, restaurants open for iftar and suhoor arrangements can be made at hotels. Eid holidays are a busy time for Gulf visitors, so book early.",
    ],
    food: GULF_FOOD("Saudi"),
    faqs: [
      { q: "Can Saudi citizens get an Indian e-Visa for Kashmir?", a: "Yes. Saudi nationals can apply for an Indian e-Visa online through the official website. Check the current rules before applying." },
      { q: "Is there a direct flight from Riyadh or Jeddah to Srinagar?", a: "Not regularly at present. Fly to Delhi or Mumbai and connect to Srinagar." },
      { q: "Is Kashmir suitable for Saudi families?", a: "Yes. Halal food, mosques, modest dress norms and family-friendly hotels make Kashmir comfortable for Saudi families." },
      { q: "What is the best time to visit Kashmir from Saudi Arabia?", a: "May to September for cool weather and green valleys, or December to February for snow." },
    ],
  },
  {
    slug: "kashmir-tour-packages-from-qatar-oman-kuwait-bahrain",
    country: "Qatar, Oman, Kuwait and Bahrain",
    short: "Qatar, Oman, Kuwait and Bahrain",
    description: "Kashmir from Qatar, Oman, Kuwait and Bahrain: Indian e-Visa, flights from Doha, Muscat, Kuwait and Bahrain via Delhi or Mumbai, halal food, best season and a plan.",
    intro:
      "From Doha, Muscat, Kuwait City and Manama, Kashmir is a short trip via Delhi or Mumbai and one of the most loved holidays for Gulf families: cool green valleys in summer, snow in winter, halal food and a strong Islamic heritage. Nationals of these countries can generally apply for an Indian e-Visa, and Indian passport holders resident in the Gulf need no visa. A 6 to 7 day trip covers Srinagar, Gulmarg, Sonamarg and Pahalgam.",
    visa: [
      "Nationals of Qatar, Oman, Kuwait and Bahrain can generally apply for an Indian e-Visa through the official Indian government visa website. Residents of other nationalities should check their own eligibility. Apply at least a week before travel, and check the current rules, which can change. Indian passport holders need no visa; OCI cardholders travel on their OCI card.",
    ],
    flights: [
      "Doha, Muscat, Kuwait City and Bahrain have frequent flights to Delhi, Mumbai and several south Indian cities, roughly 3 to 4.5 hours. Connect to Srinagar on a domestic flight, about 1.5 hours from Delhi. There is no regular direct Gulf to Srinagar flight at present. Morning arrivals in Delhi allow same-day connections.",
    ],
    advisory: [
      "Read your government's current travel advice for Jammu and Kashmir, and check your travel insurance covers the region. Check again shortly before you travel and follow local news and your hotel's advice during the trip.",
    ],
    season: [
      "From May to September, Kashmir is a cool, green escape from Gulf heat, with comfortable days in Srinagar and cooler air in Gulmarg, Pahalgam and Sonamarg. From December to February, Gulmarg and Pahalgam are white with snow, a big draw for families who have never seen snowfall. Spring tulips and autumn colours are quieter, beautiful alternatives.",
    ],
    food: GULF_FOOD("Gulf"),
    faqs: [
      { q: "Do Qatari, Omani, Kuwaiti and Bahraini nationals need a visa for Kashmir?", a: "Yes, an Indian visa. Nationals of these countries can generally apply for an Indian e-Visa online. Check current rules on the official website." },
      { q: "Is there a direct flight from Doha or Muscat to Srinagar?", a: "Not regularly at present. Fly to Delhi or Mumbai and connect to Srinagar." },
      { q: "Is Kashmir good for Gulf families in summer?", a: "Yes. Cool weather, green valleys, halal food and family hotels make it one of the most popular summer escapes." },
      { q: "How many days should Gulf travellers plan for Kashmir?", a: "Six to seven days, plus a buffer night before the flight home." },
    ],
  },
  {
    slug: "kashmir-tour-packages-from-uk",
    country: "the UK",
    short: "the UK",
    description: "Kashmir from the UK: Indian e-Visa, FCDO advice and insurance, flights from London via Delhi, the best season, Form C, Ladakh permits and a 7-day itinerary.",
    intro:
      "Travellers from the UK come to Kashmir for houseboats on Dal Lake, Mughal gardens, the Gulmarg Gondola and Himalayan valleys, often combined with Delhi or Ladakh. The usual route is a direct flight from London to Delhi, about 8.5 to 9 hours, then a short domestic flight to Srinagar. British citizens can apply for an Indian e-Visa. The most important step is to read the FCDO's current advice for Jammu and Kashmir and check your insurance covers it.",
    visa: [
      "British citizens can apply for an Indian e-Visa through the official Indian government visa website, normally well before travel. OCI cardholders, including many British Indians, travel on their OCI card. Check the current rules before applying.",
    ],
    flights: [
      "Direct flights run from London to Delhi and Mumbai, with other UK cities connecting through Gulf hubs or Europe. From Delhi, Srinagar is about 1.5 hours by air. Most UK travellers fly overnight to Delhi, connect to Srinagar the same day, and fly out of Srinagar a day before their international return to leave a buffer.",
    ],
    advisory: [
      "The UK Foreign, Commonwealth and Development Office (FCDO) publishes specific advice for Jammu and Kashmir, which has for years advised against travel to much of the region, with some exceptions. Read the current FCDO page before you book. Many travel insurers do not cover travel against FCDO advice, so confirm in writing that your policy covers your exact itinerary. Check again a few days before you leave.",
    ],
    season: [
      "UK travellers often choose April and May for tulips, blossom and fresh green, September and October for clear skies and autumn colour, or June to August for green valleys and treks. December to February is snow season in Gulmarg, popular with skiers who want an off-beat Himalayan ski trip. Spring and autumn are also when Delhi is most comfortable, if you are adding a few days there.",
    ],
    food: {
      h: "Food, drink and customs",
      p: [
        "Kashmiri food is a highlight: wazwan dishes like rista and rogan josh, vegetarian dum aloo and haak, kahwa and noon chai, and fresh breads from local bakeries. Vegetarian and vegan options are easy to find in Srinagar. Alcohol is limited, available in some hotels and licensed shops, and drinking in public is frowned upon.",
        "Kashmir is a conservative, Muslim-majority region. Dress modestly, cover arms and legs, and carry a scarf for women at mosques and shrines. Ask before photographing people.",
      ],
    },
    faqs: [
      { q: "Can British citizens get an Indian e-Visa for Kashmir?", a: "Yes, British citizens can apply for an Indian e-Visa online through the official website." },
      { q: "Does the FCDO advise against travel to Kashmir?", a: "The FCDO has specific advice for Jammu and Kashmir that has long advised against travel to much of the region. Read the current page before booking and check your insurance." },
      { q: "Is there a direct flight from London to Srinagar?", a: "No. Fly to Delhi or Mumbai and connect to Srinagar on a domestic flight." },
      { q: "Can I combine Kashmir and Ladakh from the UK?", a: "Yes, in 10 to 12 days between June and September. Foreign nationals need a Protected Area Permit for parts of Ladakh." },
    ],
  },
  {
    slug: "kashmir-tour-packages-from-usa",
    country: "the US",
    short: "the US",
    description: "Kashmir from the US: Indian e-Visa, State Department advisory and insurance, flights to Delhi, the best season, Form C, Ladakh permits and a 7-day plan.",
    intro:
      "American travellers usually visit Kashmir as part of a longer India trip, flying to Delhi and connecting to Srinagar for houseboats, Mughal gardens and Himalayan valleys, often adding Ladakh. Direct flights run from several US cities to Delhi. US citizens can apply for an Indian e-Visa. Before booking, read the US State Department's current India advisory, which treats Jammu and Kashmir separately, and confirm your insurance covers the region.",
    visa: [
      "US citizens can apply for an Indian e-Visa through the official Indian government visa website; longer-term visas are available through the regular application process. OCI cardholders travel on their OCI card. Check current rules before applying.",
    ],
    flights: [
      "Direct flights connect Delhi with several US cities, including New York, Newark, Chicago, Washington and San Francisco, typically 14 to 16 hours. Others connect via Europe or the Gulf. From Delhi, Srinagar is about 1.5 hours by domestic flight. With jet lag, many travellers spend a night in Delhi before flying to Srinagar.",
    ],
    advisory: [
      "The US State Department's India travel advisory has for years carried a separate, stricter warning for the union territory of Jammu and Kashmir, with Ladakh treated differently. Read the current advisory and any embassy alerts before booking. Check that your travel insurance covers Jammu and Kashmir, and enrol in the State Department's STEP programme to receive alerts while you travel.",
    ],
    season: [
      "Many American visitors choose April and May for tulips and spring blossom, or September and October for golden autumn colour and clear mountain views, which also pair well with comfortable weather in Delhi, Agra and Rajasthan. June to September suits a Kashmir and Ladakh combination, and December to February offers snow and skiing in Gulmarg.",
    ],
    food: {
      h: "Food, drink and customs",
      p: [
        "Kashmiri cuisine ranges from the wazwan feast to vegetarian dishes like dum aloo, haak and lotus stem in yoghurt, with kahwa and bakery breads every day. Vegetarian and vegan travellers eat well in Srinagar. Alcohol is limited, and drinking in public is frowned upon.",
        "Kashmir is conservative and Muslim-majority. Dress modestly, carry a scarf for mosques and shrines, and ask before photographing people, especially women.",
      ],
    },
    extra: [
      {
        h: "Adding Kashmir to a wider India trip",
        p: [
          "A popular pattern is Delhi, Agra and Jaipur for five or six days, then a flight to Srinagar for six or seven days, with a final night in Delhi before the flight home. Another is Kashmir followed by Ladakh by road in summer, flying home from Leh via Delhi. Keep domestic flights on the same booking where possible, and allow buffer nights.",
        ],
      },
    ],
    faqs: [
      { q: "Can US citizens visit Kashmir?", a: "Yes, with an Indian visa. Read the State Department's current advisory for Jammu and Kashmir and check your insurance before booking." },
      { q: "Is there a direct flight from the US to Srinagar?", a: "No. Fly to Delhi, then take a domestic flight to Srinagar." },
      { q: "What is the best time to visit Kashmir from the US?", a: "April and May, or September and October, which also suit the rest of North India." },
      { q: "Do Americans need a permit for Ladakh?", a: "Foreign nationals need a Protected Area Permit for Nubra, Pangong, Tso Moriri and other protected areas, arranged through an agent in Leh." },
    ],
  },
  {
    slug: "kashmir-tour-packages-from-singapore",
    country: "Singapore",
    short: "Singapore",
    description: "Kashmir from Singapore: Indian e-Visa, flights to Delhi and Srinagar, the best months for snow, tulips or autumn, food, Form C rules and a 7-day plan.",
    intro:
      "For travellers from Singapore, Kashmir offers what the tropics cannot: snow in Gulmarg in winter, cool mountain air and meadows in summer, tulips in spring and golden chinars in autumn. Direct flights from Singapore to Delhi take about 6 hours, with short connections to Srinagar. Singapore citizens can apply for an Indian e-Visa. A 6 to 7 day trip covers the classics comfortably.",
    visa: [
      "Singapore citizens can apply for an Indian e-Visa through the official Indian government visa website. Permanent residents of other nationalities should check their own eligibility. Apply before travel and check the latest rules.",
    ],
    flights: [
      "Direct flights run from Singapore to Delhi, about 6 hours, and to Mumbai and several other Indian cities. Connect to Srinagar on a domestic flight, about 1.5 hours from Delhi. Overnight flights to Delhi allow a same-day connection to Srinagar. There is no direct Singapore to Srinagar flight.",
    ],
    advisory: [
      "Check Singapore's Ministry of Foreign Affairs travel advice for India and Jammu and Kashmir before you book, and confirm your travel insurance covers the region. Re-check shortly before departure and follow local news while travelling.",
    ],
    season: [
      "Singaporean travellers love December to February for snow in Gulmarg and Pahalgam, often timed with year-end holidays. April brings tulips and blossom, May and June offer green meadows and pleasant weather, and October and November bring golden autumn colours. Pack properly for winter: Kashmir's cold is far beyond anything at home.",
    ],
    food: {
      h: "Food and customs",
      p: [
        "Kashmir's food is rich and varied: wazwan dishes for meat lovers, vegetarian Kashmiri dishes, kahwa and fresh breads. Meat served in Kashmir is halal. Vegetarian food is easy to find in Srinagar. Dress modestly, especially at mosques and shrines, and ask before photographing people.",
      ],
    },
    extra: [
      {
        h: "Winter clothing for tropical travellers",
        list: [
          "Thermal base layers, a down jacket, gloves, a woollen cap and waterproof snow boots for December to February.",
          "Snow boots and long coats can be hired in Tangmarg for the Gulmarg day.",
          "Lip balm and moisturiser: the air is dry and cold.",
          "Layers in spring and autumn: warm days, cold nights.",
        ],
      },
    ],
    faqs: [
      { q: "Can Singaporeans get an Indian e-Visa?", a: "Yes. Singapore citizens can apply for an Indian e-Visa online through the official website." },
      { q: "How long is the flight from Singapore to Kashmir?", a: "About 6 hours to Delhi, then about 1.5 hours to Srinagar, plus connection time." },
      { q: "When can I see snow in Kashmir from Singapore?", a: "December to February, in Gulmarg and Pahalgam." },
      { q: "Is Kashmir suitable for families from Singapore?", a: "Yes. Plan a gentle pace, warm clothing in winter and comfortable hotels with heating." },
      { q: "Do I need to book the Gulmarg Gondola in advance from Singapore?", a: "Yes, especially in December and at weekends. Book on the official JKCCC portal as soon as your dates are fixed, and plan your Gulmarg day around your slot." },
      { q: "Is Kashmir good for a honeymoon from Singapore?", a: "Yes. Houseboat nights on Dal or Nigeen, a private shikara, Gulmarg snow and riverside Pahalgam make it one of the most romantic mountain trips in Asia." },
    ],
  },
  {
    slug: "kashmir-tour-packages-from-malaysia",
    country: "Malaysia",
    short: "Malaysia",
    description: "Kashmir from Malaysia: Indian e-Visa, flights from Kuala Lumpur via Delhi, halal food, mosques, snow and tulip seasons, Form C rules and a 7-day plan.",
    intro:
      "Kashmir is a favourite with Malaysian travellers: halal food everywhere, beautiful mosques and Sufi shrines, snow in winter and cool green valleys in summer. Flights from Kuala Lumpur reach Delhi in about 5.5 to 6 hours, with short connections to Srinagar. Malaysian citizens can apply for an Indian e-Visa. Many Malaysian groups travel in December for snow or in April for tulips.",
    visa: [
      "Malaysian citizens can apply for an Indian e-Visa through the official Indian government visa website. Apply before travel and check the current rules.",
    ],
    flights: [
      "Kuala Lumpur has direct flights to Delhi, Mumbai, Chennai and other Indian cities. From Delhi, Srinagar is about 1.5 hours by domestic flight. There is no direct flight from Malaysia to Srinagar. Morning arrivals in Delhi allow same-day connections.",
    ],
    advisory: [
      "Check Malaysia's Wisma Putra travel advice and your insurer's terms for Jammu and Kashmir before booking. Check again close to your travel date and follow local news and your hotel's guidance while in Kashmir.",
    ],
    season: [
      "December to February brings snow to Gulmarg and Pahalgam, the most requested season for Malaysian visitors. Late March and April bring tulips and blossom. May to September is cool and green, a refreshing contrast to the tropics. October and November bring golden autumn colours and clear skies. Pack warm clothing for every season except high summer.",
    ],
    food: GULF_FOOD("Malaysian"),
    extra: [
      {
        h: "Muslim heritage sites to include",
        list: [
          "Hazratbal shrine on the shore of Dal Lake.",
          "Jamia Masjid in the old city, with its deodar pillars.",
          "Khanqah-e-Moula, the wooden shrine of Mir Sayyid Ali Hamadani on the Jhelum.",
          "Charar-e-Sharief, the shrine of Sheikh Nooruddin Noorani, on the way to Yusmarg.",
          "Makhdoom Sahib shrine on Hari Parbat.",
        ],
      },
    ],
    faqs: [
      { q: "Is halal food available in Kashmir for Malaysian travellers?", a: "Yes. Kashmir is Muslim-majority, and meat across the region is halal." },
      { q: "Can Malaysians get an Indian e-Visa?", a: "Yes. Malaysian citizens can apply for an Indian e-Visa online through the official website." },
      { q: "When is the best time to visit Kashmir from Malaysia?", a: "December to February for snow, April for tulips, and May to September for cool green valleys." },
      { q: "Is there a direct flight from Kuala Lumpur to Srinagar?", a: "No. Fly to Delhi or another Indian city and connect to Srinagar." },
      { q: "Can Malaysian groups book a private Kashmir tour?", a: "Yes. Groups usually book a tempo traveller or two Innovas with a driver, named hotels and a houseboat, with halal meals throughout." },
    ],
  },
  {
    slug: "kashmir-tour-packages-from-nepal",
    country: "Nepal",
    short: "Nepal",
    description: "Kashmir from Nepal: no visa needed for Nepali citizens, the ID to carry, flights from Kathmandu via Delhi or overland routes, the best season and a 7-day plan.",
    intro:
      "Nepali citizens do not need a visa to visit India, which makes Kashmir an easy holiday from Kathmandu, Pokhara or the Terai: fly from Kathmandu to Delhi in about 1.5 to 2 hours and on to Srinagar, or travel overland to Delhi and take the train to Katra and the Vande Bharat to Srinagar. Carry a valid passport or other accepted ID for flights and hotels. Kashmir's lakes, gardens and snow offer a very different Himalaya from home.",
    visa: [
      "Under the India-Nepal friendship arrangements, Nepali citizens can enter and travel in India without a visa. For flights, airlines and airport security ask for a valid passport or another accepted government photo ID, such as a citizenship certificate; a passport is the simplest document to carry. Hotels in Kashmir will also ask for ID. Citizens of other countries resident in Nepal need an Indian visa.",
    ],
    flights: [
      "Kathmandu has frequent flights to Delhi, about 1.5 to 2 hours, and connections to Srinagar about 1.5 hours further. Travellers from the Terai often cross overland at border points such as Sunauli or Raxaul, take a train towards Delhi, and continue by rail to Katra and the Vande Bharat to Srinagar, which is the cheaper but much longer route.",
    ],
    advisory: [
      "Follow local news and your hotel's advice while in Kashmir, and carry your ID at all times: there are routine security checks on the roads. Check that any travel insurance you hold covers India and Jammu and Kashmir.",
    ],
    season: [
      "Nepali travellers know mountains well, so many choose Kashmir for what is different: Dal Lake and houseboats, Mughal gardens and tulips in April, apple and saffron harvests in autumn, and the Gulmarg Gondola with snow in winter. The Dashain and Tihar holidays in autumn line up with Kashmir's beautiful October and November.",
    ],
    food: {
      h: "Food and customs",
      p: [
        "Kashmiri food will feel both familiar and new: rice-based meals, slow-cooked mutton dishes like rogan josh and rista, vegetarian dishes like dum aloo and haak, and tea twice a day, though Kashmir's pink salt tea is very different from Nepali chiya. Vegetarian food is easy to find in Srinagar.",
        "Kashmir is a Muslim-majority region with Hindu and Sikh communities and temples such as Shankaracharya and Kheer Bhawani. Many Nepali travellers combine Kashmir with Vaishno Devi at Katra. Dress modestly and remove shoes at shrines.",
      ],
    },
    extra: [
      {
        h: "Combining Kashmir with Vaishno Devi",
        p: [
          "Pilgrims from Nepal often begin with Vaishno Devi: reach Katra by train, spend two nights for the yatra, then take the Vande Bharat to Srinagar for five or six days in Kashmir. Book yatra registration and the train on official channels in advance, especially around Navratri and the Dashain period.",
        ],
      },
    ],
    faqs: [
      { q: "Do Nepali citizens need a visa for Kashmir?", a: "No. Nepali citizens can travel in India without a visa. Carry a valid passport or accepted government photo ID for flights and hotels." },
      { q: "How do I reach Kashmir from Kathmandu?", a: "Fly to Delhi and connect to Srinagar, or travel overland and take the train to Katra and the Vande Bharat to Srinagar." },
      { q: "Is Form C needed for Nepali guests?", a: "Hotels will ask for your ID and may register you as required by local rules. Carry your passport or citizenship document." },
      { q: "When should Nepali travellers visit Kashmir?", a: "April for tulips, October and November for autumn colours around the Dashain and Tihar holidays, or winter for snow." },
    ],
  },
  {
    slug: "kashmir-tour-packages-from-sri-lanka",
    country: "Sri Lanka",
    short: "Sri Lanka",
    description: "Kashmir from Sri Lanka: Indian e-Visa, flights from Colombo via Delhi, Chennai or Bengaluru, the best months for snow and tulips, food, Form C and a 7-day plan.",
    intro:
      "For Sri Lankan travellers, Kashmir offers snow, alpine meadows and cool lakes that feel a world away from the island. Flights from Colombo reach Delhi in about 4 hours, or Chennai and Bengaluru in under 2 hours, with connections to Srinagar. Sri Lankan citizens can apply for an Indian e-Visa. Winter snow in Gulmarg and the April tulip season are the favourite times for Sri Lankan visitors.",
    visa: [
      "Sri Lankan citizens can apply for an Indian e-Visa through the official Indian government visa website. Apply before travel and check the current rules.",
    ],
    flights: [
      "Colombo has direct flights to Delhi, Chennai, Bengaluru, Mumbai and other Indian cities. From Delhi, Srinagar is about 1.5 hours; from Chennai or Bengaluru, there are direct or one-stop flights to Srinagar. Plan to reach Srinagar by mid-afternoon to keep the first evening for a shikara ride.",
    ],
    advisory: [
      "Check your government's travel advice for India and Jammu and Kashmir, and make sure your travel insurance covers the region. Check again shortly before travel and follow local news and your hotel's advice during the trip.",
    ],
    season: [
      "December to February brings snow to Gulmarg and Pahalgam, the most exciting season for many Sri Lankan visitors. April brings tulips and blossom, and May to September is cool and green. October and November bring golden autumn colours. Pack thermal layers and a proper winter jacket for the cold months: Kashmir's winter is far colder than Nuwara Eliya.",
    ],
    food: {
      h: "Food and customs",
      p: [
        "Kashmiri food is milder than Sri Lankan curries in heat but rich in spice and fragrance: rogan josh, yakhni, dum aloo and haak with rice, kahwa and fresh breads. Vegetarian food is widely available. Kashmir is Muslim-majority, with Hindu temples and Buddhist heritage further afield in Ladakh. Dress modestly and remove shoes at shrines.",
      ],
    },
    extra: [
      {
        h: "Adding Ladakh's Buddhist monasteries",
        p: [
          "Sri Lankan Buddhist travellers often add Ladakh in summer, where monasteries such as Thiksey, Hemis and Diskit preserve a living Tibetan Buddhist tradition. A 10 to 12 day trip from June to September can go from Srinagar to Leh by road. Foreign nationals need a Protected Area Permit for Nubra and Pangong, arranged through an agent in Leh.",
        ],
      },
    ],
    faqs: [
      { q: "Can Sri Lankans get an Indian e-Visa for Kashmir?", a: "Yes. Sri Lankan citizens can apply for an Indian e-Visa online through the official website." },
      { q: "How do I fly from Colombo to Srinagar?", a: "Fly to Delhi, Chennai or Bengaluru and connect to Srinagar on a domestic flight." },
      { q: "When is the best time to see snow in Kashmir from Sri Lanka?", a: "December to February, in Gulmarg and Pahalgam." },
      { q: "Can I visit Buddhist monasteries on a Kashmir trip?", a: "Yes, by adding Ladakh in summer, with monasteries like Thiksey, Hemis and Diskit." },
      { q: "Is vegetarian food easy to find in Kashmir for Sri Lankan travellers?", a: "Yes. Srinagar has many vegetarian restaurants, and hotels across Kashmir cook vegetarian meals on request." },
      { q: "How many days should Sri Lankan travellers plan for Kashmir?", a: "Six to seven days for Srinagar, Gulmarg, Sonamarg and Pahalgam, or 10 to 12 days with Ladakh in summer." },
    ],
  },
  {
    slug: "kashmir-tour-packages-from-bangladesh",
    country: "Bangladesh",
    short: "Bangladesh",
    description: "Kashmir from Bangladesh: the current Indian visa position, flights from Dhaka via Kolkata or Delhi, halal food, the best season, Form C rules and a 7-day plan.",
    intro:
      "Kashmir has long been a favourite holiday for travellers from Dhaka and Chittagong: snow in winter, lakes and gardens in spring and summer, and halal food everywhere. Bangladeshi citizens need a regular Indian visa applied for through the Indian Visa Application Centres, and visa services have been restricted since 2024, so check the current position before planning. Flights run from Dhaka to Kolkata and Delhi, with connections to Srinagar.",
    visa: [
      "Bangladeshi citizens apply for an Indian visa through the Indian Visa Application Centres (IVAC) run on behalf of the Indian High Commission. Since 2024, visa issuance for Bangladeshi citizens has been restricted, with many categories limited. Check the current status with IVAC and the Indian High Commission before booking any flights or hotels.",
    ],
    flights: [
      "Dhaka has frequent flights to Kolkata, about 1 hour, and to Delhi, about 2.5 hours, with connections to Srinagar. Some travellers go overland to Kolkata and then fly to Srinagar. There is no direct flight from Bangladesh to Srinagar.",
    ],
    advisory: [
      "Check your government's travel advice and your insurance terms for Jammu and Kashmir before booking, and follow local news and your hotel's advice during your stay.",
    ],
    season: [
      "December to February brings snow to Gulmarg and Pahalgam, a big draw for Bangladeshi visitors. April brings tulips and blossom, May to September cool green valleys, and October and November autumn colours. Winter in Kashmir is far colder than any Bangladeshi winter, so pack thermal layers, a heavy jacket and gloves.",
    ],
    food: GULF_FOOD("Bangladeshi"),
    faqs: [
      { q: "Can Bangladeshi citizens get an Indian visa for Kashmir now?", a: "Indian visa services for Bangladeshi citizens have been restricted since 2024. Check the current position with IVAC and the Indian High Commission before planning." },
      { q: "How do I fly from Dhaka to Srinagar?", a: "Fly to Kolkata or Delhi and connect to Srinagar on a domestic flight." },
      { q: "Is halal food available in Kashmir?", a: "Yes. Kashmir is Muslim-majority, and meat served across the region is halal." },
      { q: "When is the best time to visit Kashmir from Bangladesh?", a: "December to February for snow, April for tulips, and May to September for cool green valleys." },
      { q: "How many days are enough for Kashmir from Dhaka?", a: "Six to seven days covers Srinagar, Gulmarg, Sonamarg and Pahalgam, with a buffer night before the flight home." },
    ],
  },
];

export const KASHMIR_WORLD: BlogPost[] = ORIGINS.map(make);

const EXTRA_1: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "kashmir-tour-packages-from-usa": {
    sections: [

    ],
    faqs: [
      { q: "How do I plan a Kashmir trip from the USA?", a: "Read the State Department advisory and check insurance, apply for an Indian e-Visa, fly to Delhi, rest a night, then fly to Srinagar for six or seven days with a private package. Fly out of Srinagar a day before your flight home." },
    ],
  },
};
for (const p of KASHMIR_WORLD) {
  const e = EXTRA_1[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}
