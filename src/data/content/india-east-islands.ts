import type { GuideContent } from "@/lib/locations";

// Destination guide content: Karnataka, Andaman, West Bengal, Sikkim, Meghalaya (tier 1).
// Rules: fact-based, no invented prices/stats, no em dashes. North Sikkim road
// status changes often; re-check before each season.
export const INDIA_EAST_ISLANDS: Record<string, GuideContent> = {
  karnataka: {
    intro:
      "Karnataka, in south-west India, mixes coffee hills, royal heritage and ancient ruins: the coffee estates of Coorg and Chikmagalur, the palace city of Mysore, the UNESCO-listed ruins of Hampi and the beaches of Gokarna. A Bengaluru, Mysore and Coorg trip takes 4 to 5 days; adding Hampi needs 2 to 3 more.\n\nBengaluru is the main gateway, with Mysore about three hours away by expressway and Coorg a further three hours into the Western Ghats.",
    highlights: [
      "Mysore Palace, especially when illuminated in the evening and during Dasara",
      "Coffee estates, Abbey Falls and Raja's Seat in Coorg",
      "The ruins of Vijayanagara at Hampi, including the Vittala Temple's stone chariot",
      "Mullayanagiri, Karnataka's highest peak, near Chikmagalur",
      "Om Beach and Kudle Beach at Gokarna",
      "Wildlife safaris at Kabini and Nagarhole",
    ],
    idealDuration: "4 to 5 days for Mysore and Coorg; 7 days with Hampi",
    bestMonths: "October to March",
    gateway: "Bengaluru airport (BLR)",
    bestTimeToVisit:
      "October to March is the best time across Karnataka: cool in the hills, comfortable for Hampi's ruins and dry on the coast. Mysore Dasara, in September or October, is the state's biggest festival.\n\nThe monsoon from June to September brings heavy rain to Coorg, Chikmagalur and the coast, which is beautiful but limits outdoor plans. April and May are hot in Hampi and the plains.",
    seasons: [
      { name: "Winter", months: "October to March", note: "Best overall. Mysore Dasara in September or October." },
      { name: "Summer", months: "April to May", note: "Hot in Hampi and Bengaluru; Coorg and Chikmagalur stay pleasant." },
      { name: "Monsoon", months: "June to September", note: "Lush and misty Western Ghats with heavy rain; waterfalls at their best." },
    ],
    howToReach: {
      air: "Kempegowda International Airport in Bengaluru (BLR) is the main gateway. Mangaluru (IXE) suits Coorg and the coast; Hampi's nearest airport is at Toranagallu (VDY), with Hubballi (HBX) as an alternative.",
      rail: "Mysuru Junction and Hosapete (for Hampi) have trains from Bengaluru. Coorg has no railway; the nearest stations are Mysuru and Mangaluru.",
      road: "Bengaluru to Mysore is about 145 km on the expressway. Mysore to Madikeri in Coorg is about 120 km, and Bengaluru to Hampi about 340 km.",
      local: "A hired car is best for Coorg and Chikmagalur. Bicycles, autos and mopeds are common for moving around Hampi's ruins.",
    },
    thingsToKnow: [
      "Mysore Palace is illuminated in the evening on Sundays, public holidays and every night during Dasara.",
      "Hampi's ruins spread over a large area; plan at least two days.",
      "Coorg homestays on coffee estates are a popular alternative to hotels.",
    ],
    faqs: [
      { q: "How many days are needed for Mysore and Coorg?", a: "Four to five days from Bengaluru covers Mysore Palace, Chamundi Hills, Brindavan Gardens and two nights in Coorg." },
      { q: "What is the best time to visit Coorg?", a: "October to March for clear, cool weather. The monsoon from June to September is very rainy but popular with travellers who want misty hills and waterfalls." },
      { q: "How do I reach Hampi?", a: "Take a train or bus to Hosapete, about 13 km away, or fly to Toranagallu or Hubballi and drive." },
      { q: "When is Mysore Dasara?", a: "Dasara falls in September or October, with ten days of celebrations and the palace lit up every night." },
      { q: "How do Karnataka quotes on TavelPackage work?", a: "Share your dates and the places you want. Up to 3 verified agents send itineraries with car, homestays or hotels and sightseeing." },
    ],
    packagesDescription:
      "Customised Karnataka tour packages for Coorg, Mysore, Hampi, Chikmagalur and Gokarna. Get up to 3 quotes from verified local agents.",
    guideDescription:
      "Karnataka travel guide: Coorg and Chikmagalur, Mysore Palace and Dasara, Hampi ruins, best time to visit and how to reach from Bengaluru.",
  },

  andaman: {
    intro:
      "The Andaman Islands are an Indian union territory in the Bay of Bengal, known for clear water, white-sand beaches and coral reefs. A typical 5 to 7 day trip starts in Sri Vijaya Puram (Port Blair), then takes ferries to Havelock Island (Swaraj Dweep) and Neil Island (Shaheed Dweep).\n\nTravellers fly in from Chennai, Kolkata, Delhi, Bengaluru and other cities. Beyond the beaches, the islands offer scuba diving and snorkelling, the history of the Cellular Jail, and mangrove creeks and limestone caves at Baratang.",
    highlights: [
      "Radhanagar Beach on Havelock, often ranked among Asia's best beaches",
      "Scuba diving and snorkelling at Havelock and Neil",
      "The Cellular Jail and its evening light and sound show",
      "Ross Island (Netaji Subhas Chandra Bose Dweep) and North Bay",
      "The natural rock bridge on Neil Island",
      "Mangroves, limestone caves and the mud volcano at Baratang",
    ],
    idealDuration: "5 to 7 days",
    bestMonths: "October to May",
    gateway: "Veer Savarkar International Airport, Sri Vijaya Puram (IXZ)",
    bestTimeToVisit:
      "October to May is the season, with calm seas, good visibility for diving and regular ferries. December to February is the most popular and pleasant period; March to May is warmer but excellent for water activities.\n\nThe south-west monsoon from late May to September brings rough seas, frequent rain and occasional ferry cancellations, though hotels are cheaper and the islands are green and quiet.",
    seasons: [
      { name: "Peak", months: "October to February", note: "Calm seas and pleasant weather. Book ferries and resorts early for December." },
      { name: "Summer", months: "March to May", note: "Warmer, with some of the best diving visibility." },
      { name: "Monsoon", months: "June to September", note: "Rough seas and possible ferry cancellations; keep spare days." },
    ],
    howToReach: {
      air: "Veer Savarkar International Airport in Sri Vijaya Puram (Port Blair) has direct flights from Chennai, Kolkata, Delhi, Bengaluru, Hyderabad and other cities.",
      rail: "There is no railway on the islands. Ships sail from Chennai, Kolkata and Visakhapatnam, taking about two to three days.",
      road: "The Andaman Trunk Road links Sri Vijaya Puram with Baratang and the north; vehicles travel through the Jarawa reserve in escorted convoys.",
      local: "Government and private ferries connect Sri Vijaya Puram with Havelock (about 1.5 to 2.5 hours) and Havelock with Neil (about 1 hour). Cabs and scooters are available on each island.",
    },
    thingsToKnow: [
      "Book private ferry tickets early in peak season; your agent usually handles this.",
      "Photographing or interacting with members of the Jarawa tribe is prohibited on the Baratang road.",
      "Keep a buffer day before your flight in case of ferry delays.",
      "Do not touch or collect coral and shells; it is illegal.",
    ],
    faqs: [
      { q: "How many days are enough for Andaman?", a: "Five to seven days covers Sri Vijaya Puram, Havelock and Neil. Add a day for Baratang or more time for diving." },
      { q: "Do Indian travellers need a permit for Andaman?", a: "No permit is needed for the main tourist islands. Some protected areas are restricted, and your operator arranges any entry tickets." },
      { q: "What is the best time to visit Andaman?", a: "October to May, with December to February the most pleasant. The monsoon brings rough seas from June to September." },
      { q: "Is Andaman good for a honeymoon?", a: "Yes. Couples usually stay on Havelock for its beaches and resorts and add a day on quieter Neil Island." },
      { q: "Can non-swimmers do scuba diving in Andaman?", a: "Yes. Introductory dives with a certified instructor are designed for non-swimmers, in shallow water after a briefing." },
      { q: "How do Andaman quotes on TavelPackage work?", a: "Share your dates, hotel category and activities. Up to 3 verified agents send packages including ferries, transfers and stays." },
    ],
    packagesDescription:
      "Customised Andaman tour packages for Port Blair, Havelock and Neil Island with ferries, beaches and scuba. Get up to 3 quotes from verified agents.",
    guideDescription:
      "Andaman travel guide: best time to visit, flights to Sri Vijaya Puram, ferries to Havelock and Neil, beaches, diving and rules for visitors.",
  },

  "west-bengal": {
    intro:
      "West Bengal stretches from the Himalayan hill town of Darjeeling to the mangrove forests of the Sundarbans, with Kolkata in between. Most holiday trips focus on Darjeeling and Kalimpong, often combined with Gangtok in Sikkim over 5 to 7 days.\n\nKolkata is worth a day or two for its colonial architecture, food and, in autumn, Durga Puja. The Sundarbans, a UNESCO World Heritage Site, is a boat-based trip of one to three nights for wildlife and Royal Bengal tiger country.",
    highlights: [
      "Sunrise over Kanchenjunga from Tiger Hill in Darjeeling",
      "The Darjeeling Himalayan Railway toy train, a UNESCO World Heritage railway",
      "Tea estates and Darjeeling's Mall Road",
      "Victoria Memorial, Howrah Bridge and Durga Puja in Kolkata",
      "Boat safaris in the Sundarbans mangroves",
      "Hill villages around Kalimpong, Lava and Lolegaon",
    ],
    idealDuration: "3 to 4 days for Darjeeling; 6 to 7 days with Gangtok",
    bestMonths: "March to May, October to December",
    gateway: "Bagdogra airport (IXB) or New Jalpaiguri station",
    bestTimeToVisit:
      "For Darjeeling and the hills, March to May and October to December are best, with clear mountain views in autumn. January and February are cold, with occasional snow on higher points. The monsoon from June to September brings landslides and cloud.\n\nKolkata and the Sundarbans are best from October to March, when the weather is cooler and drier. Durga Puja, in September or October, is Kolkata's biggest festival.",
    seasons: [
      { name: "Spring", months: "March to May", note: "Pleasant in the hills, rhododendrons in bloom." },
      { name: "Monsoon", months: "June to September", note: "Landslide risk on hill roads; misty views." },
      { name: "Autumn and winter", months: "October to February", note: "Clearest Kanchenjunga views; best for Kolkata and the Sundarbans." },
    ],
    howToReach: {
      air: "Bagdogra (IXB) is the airport for Darjeeling, Kalimpong and Sikkim. Kolkata (CCU) serves the city and the Sundarbans.",
      rail: "New Jalpaiguri (NJP) is the railhead for the hills. Kolkata's Howrah and Sealdah stations connect to the rest of India.",
      road: "Bagdogra to Darjeeling is about 70 km, roughly 3 hours. Kolkata to Godkhali, the usual jetty for the Sundarbans, is about 100 km.",
      local: "Shared and private cabs run from Siliguri to the hills. Sundarbans trips are by boat, usually arranged as a package with permits.",
    },
    thingsToKnow: [
      "Tiger Hill sunrise trips start well before dawn; book the car the evening before.",
      "The toy train has both a full NJP to Darjeeling run and short joy rides from Darjeeling.",
      "Sundarbans entry needs forest permits, which tour operators arrange.",
    ],
    faqs: [
      { q: "How many days are enough for Darjeeling?", a: "Three days covers Tiger Hill, Batasia Loop, the toy train and tea estates. Add Kalimpong or Gangtok for a 5 to 7 day trip." },
      { q: "How do I reach Darjeeling?", a: "Fly to Bagdogra or take a train to New Jalpaiguri, then drive about 3 hours. The toy train is a scenic but slow alternative." },
      { q: "When is the best time to see Kanchenjunga?", a: "October to December usually gives the clearest views, followed by spring mornings from March to May." },
      { q: "Can I combine Darjeeling and Gangtok?", a: "Yes. Gangtok is about 4 hours from Darjeeling, and the two are commonly combined in a 6 to 7 day trip." },
      { q: "How do West Bengal quotes on TavelPackage work?", a: "Share whether you want the hills, Kolkata or the Sundarbans, with your dates. Up to 3 verified agents send customised itineraries." },
    ],
    packagesDescription:
      "Customised Darjeeling, Kalimpong, Kolkata and Sundarbans tour packages. Get up to 3 quotes from verified local agents.",
    guideDescription:
      "West Bengal travel guide: Darjeeling and Kalimpong, Tiger Hill and the toy train, Kolkata and the Sundarbans, best time to visit and how to reach.",
  },

  sikkim: {
    intro:
      "Sikkim is a small Himalayan state in north-east India, built around Gangtok and the high valleys of North Sikkim, with Kanchenjunga, the world's third-highest mountain, on its western border. A 5 to 7 day trip usually covers Gangtok, Tsomgo Lake, Lachung with Yumthang Valley and Pelling.\n\nMost visitors arrive via Bagdogra airport or New Jalpaiguri station in West Bengal and drive up, often combining Sikkim with Darjeeling.",
    highlights: [
      "Tsomgo Lake and the Nathu La border pass near Gangtok",
      "Yumthang Valley and Zero Point beyond Lachung",
      "Gurudongmar Lake above Lachen, one of the highest lakes in India",
      "Rumtek Monastery and MG Marg in Gangtok",
      "The skywalk and Pemayangtse Monastery at Pelling, with Kanchenjunga views",
      "Rhododendron blooms in spring",
    ],
    idealDuration: "5 to 7 days",
    bestMonths: "March to May, October to December",
    gateway: "Bagdogra airport (IXB) or New Jalpaiguri station",
    bestTimeToVisit:
      "March to May is spring, with rhododendrons and flowers in Yumthang Valley. October to December gives the clearest mountain views. Snow is likely at Tsomgo, Nathu La and Zero Point from December to March, and heavy snowfall can close some roads for a few days.\n\nThe monsoon from June to September brings landslides that often disrupt North Sikkim roads, so this is the least reliable time for Lachung and Lachen.",
    seasons: [
      { name: "Spring", months: "March to May", note: "Rhododendrons and flowers in Yumthang. Busy around Indian school holidays." },
      { name: "Monsoon", months: "June to September", note: "Landslides; North Sikkim access often disrupted." },
      { name: "Autumn", months: "October to December", note: "Clear Kanchenjunga views." },
      { name: "Winter", months: "January to February", note: "Snow at high points; some routes close after heavy snowfall." },
    ],
    howToReach: {
      air: "Bagdogra (IXB) in West Bengal is the main airport, about 125 km and 4 to 5 hours from Gangtok. Pakyong airport near Gangtok has limited, irregular flights.",
      rail: "New Jalpaiguri (NJP) is the nearest major station, about 115 km from Gangtok.",
      road: "Shared and private cabs run from Bagdogra, NJP and Siliguri to Gangtok along NH10, which can be disrupted by landslides in the monsoon.",
      local: "Tsomgo, Nathu La and North Sikkim are visited in permitted local vehicles through registered tour operators.",
    },
    thingsToKnow: [
      "Tsomgo Lake, Nathu La and North Sikkim need permits arranged by registered tour operators; carry photo ID and photos.",
      "Nathu La is open to Indian nationals only, on certain days of the week.",
      "Foreign nationals need a Restricted Area Permit for Sikkim and cannot visit Nathu La.",
      "North Sikkim roads have been repeatedly damaged by floods and landslides since 2023; confirm the current status before booking.",
    ],
    faqs: [
      { q: "How many days are enough for Sikkim?", a: "Five to seven days covers Gangtok, Tsomgo Lake, an overnight in Lachung for Yumthang Valley and a night in Pelling." },
      { q: "Do I need a permit for Sikkim?", a: "Indian travellers do not need one to enter the state, but Tsomgo, Nathu La and North Sikkim need permits through a registered operator. Foreign nationals need a Restricted Area Permit." },
      { q: "When can I see snow in Sikkim?", a: "From December to March at Tsomgo Lake, Nathu La and Zero Point, depending on snowfall and road access." },
      { q: "Is North Sikkim open?", a: "Access to Lachung and Lachen depends on road conditions, which have been affected by floods and landslides in recent years. Your agent will confirm the latest status." },
      { q: "Can I combine Sikkim and Darjeeling?", a: "Yes. Darjeeling is about 4 hours from Gangtok and they are often combined in a 6 to 8 day trip." },
      { q: "How do Sikkim quotes on TavelPackage work?", a: "Share your dates and whether you want North Sikkim. Up to 3 verified agents send itineraries with permits, vehicles and stays." },
    ],
    packagesDescription:
      "Customised Sikkim tour packages for Gangtok, Tsomgo Lake, Lachung, Yumthang and Pelling, with permits. Get up to 3 quotes from verified local agents.",
    guideDescription:
      "Sikkim travel guide: best time to visit, permits for Tsomgo, Nathu La and North Sikkim, how to reach Gangtok from Bagdogra and places to visit.",
  },

  meghalaya: {
    intro:
      "Meghalaya is a hill state in north-east India known for waterfalls, living root bridges, caves and some of the wettest places on earth. A 4 to 6 day trip usually covers Shillong, Cherrapunji (Sohra), Dawki and the village of Mawlynnong.\n\nThe usual gateway is Guwahati airport in Assam, about three hours from Shillong by road. Many travellers combine Meghalaya with Kaziranga in Assam.",
    highlights: [
      "The double-decker living root bridge at Nongriat",
      "Nohkalikai, Seven Sisters and Elephant Falls",
      "The clear water of the Umngot River at Dawki",
      "Mawlynnong, often called one of the cleanest villages in Asia",
      "Mawsmai Cave and the Laitlum canyons",
      "Umiam Lake on the way to Shillong",
    ],
    idealDuration: "4 to 6 days",
    bestMonths: "October to April",
    gateway: "Guwahati airport (GAU)",
    bestTimeToVisit:
      "October to April is the best time for sightseeing, with drier weather. The Umngot River at Dawki is at its clearest from about November to April, when boat photos look as if they float on glass.\n\nThe monsoon from June to September brings extremely heavy rain, especially around Cherrapunji and Mawsynram. Waterfalls are at their most powerful, but treks get slippery and some days are lost to cloud.",
    seasons: [
      { name: "Autumn and winter", months: "October to February", note: "Dry, cool and clear. Best for Dawki and root bridge treks." },
      { name: "Spring", months: "March to May", note: "Warmer, with the first showers by May." },
      { name: "Monsoon", months: "June to September", note: "Very heavy rain and full waterfalls; slippery trails." },
    ],
    howToReach: {
      air: "Lokpriya Gopinath Bordoloi International Airport in Guwahati (GAU) is the main gateway. Shillong airport at Umroi has limited flights.",
      rail: "Guwahati is the nearest major railway station, about 100 km from Shillong.",
      road: "Guwahati to Shillong is about 3 hours by road. Shillong to Cherrapunji is about 55 km, and Shillong to Dawki about 85 km.",
      local: "Hire a cab for the trip; shared taxis run between towns but not to most sightseeing points.",
    },
    thingsToKnow: [
      "The Nongriat double-decker root bridge is a steep trek of roughly 3,000 or more steps each way from Tyrna; allow most of a day.",
      "Carry rain gear in every season and good walking shoes.",
      "Dawki is on the Bangladesh border; stay within marked tourist areas.",
    ],
    faqs: [
      { q: "How many days are enough for Meghalaya?", a: "Four to six days covers Shillong, Cherrapunji, Dawki and Mawlynnong. Add a day for the Nongriat root bridge trek." },
      { q: "What is the best time to visit Meghalaya?", a: "October to April for dry weather and clear water at Dawki. Visit in the monsoon if you want waterfalls at full flow." },
      { q: "How difficult is the double-decker root bridge trek?", a: "It is steep but manageable for most fit adults: a long descent and climb of about 3,000 steps. Start early and carry water." },
      { q: "How do I reach Shillong?", a: "Fly or take a train to Guwahati and drive about 3 hours. Shillong also has a small airport with limited flights." },
      { q: "Can I combine Meghalaya with Kaziranga?", a: "Yes. Kaziranga is about 5 hours from Guwahati, so a 7 to 8 day trip can cover both." },
      { q: "How do Meghalaya quotes on TavelPackage work?", a: "Share your dates and interests. Up to 3 verified agents send itineraries with a car, stays and sightseeing." },
    ],
    packagesDescription:
      "Customised Meghalaya tour packages for Shillong, Cherrapunji, Dawki, Mawlynnong and root bridges. Get up to 3 quotes from verified local agents.",
    guideDescription:
      "Meghalaya travel guide: best time to visit, Guwahati to Shillong, Cherrapunji waterfalls, root bridge trek, Dawki and Mawlynnong.",
  },
};
