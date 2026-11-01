import type { GuideContent } from "@/lib/locations";

// Destination guide content: North India, tier 1.
// Rules: fact-based, no invented prices/stats, no em dashes. Re-check
// time-sensitive facts (permits, closures, rail links) each season.
export const INDIA_NORTH: Record<string, GuideContent> = {
  kashmir: {
    intro:
      "Kashmir is a Himalayan valley in the union territory of Jammu & Kashmir, known for Dal Lake houseboats in Srinagar, snow and the gondola at Gulmarg, the river valleys of Pahalgam and the Thajiwas glacier at Sonamarg. Most holidays run 5 to 7 days from Srinagar, which has direct flights from major Indian cities.\n\nA typical first trip stays two or three nights in Srinagar (often one of them on a houseboat), then adds day trips or overnight stays in Gulmarg, Pahalgam and Sonamarg. Pilgrims usually combine Kashmir with Mata Vaishno Devi at Katra in the Jammu region, which is now linked to Srinagar by train.",
    highlights: [
      "Houseboat stays and shikara rides on Dal Lake and Nigeen Lake in Srinagar",
      "The Mughal gardens of Srinagar, including Nishat, Shalimar and Chashme Shahi",
      "The Indira Gandhi Memorial Tulip Garden, open for a few weeks around late March and April",
      "Gulmarg Gondola, one of the highest cable cars in the world, and skiing from January to March",
      "Betaab Valley, Aru Valley and Chandanwari around Pahalgam",
      "Golden chinar trees across the valley in late October and November",
    ],
    idealDuration: "5 to 7 days",
    bestMonths: "March to June, September to November; December to February for snow",
    gateway: "Srinagar airport (SXR)",
    bestTimeToVisit:
      "Kashmir works almost all year, but each season gives a different trip. March to June is the most popular window: spring flowers, the tulip garden and pleasant days for sightseeing. September to November brings clear skies and the autumn colours of the chinar trees.\n\nDecember to February is the snow season. Gulmarg and Sonamarg are under snow, Gulmarg's ski season peaks, and Srinagar has its coldest spell, known locally as Chillai Kalan, from late December to the end of January. July and August are greener and get less rain than the Indian plains, though this is also the period of the Amarnath Yatra, when roads towards Pahalgam and Sonamarg are busier.",
    seasons: [
      { name: "Spring", months: "March to May", note: "Tulip garden, blossoms and comfortable sightseeing weather. Book early for April." },
      { name: "Summer", months: "June to August", note: "Green meadows and long days. Amarnath Yatra traffic on the Pahalgam and Sonamarg routes in July and August." },
      { name: "Autumn", months: "September to November", note: "Clear skies and golden chinar leaves from late October. Good value after the summer peak." },
      { name: "Winter", months: "December to February", note: "Snow in Gulmarg and Sonamarg, skiing and frozen landscapes. Pack proper winter clothing." },
    ],
    howToReach: {
      air: "Srinagar's Sheikh ul-Alam International Airport (SXR) has direct flights from Delhi, Mumbai, Bengaluru, Kolkata and other cities. Jammu airport (IXJ) is closer for Katra and Patnitop.",
      rail: "Vande Bharat trains run between Shri Mata Vaishno Devi Katra and Srinagar over the Chenab Bridge, and Katra and Jammu Tawi have direct trains from Delhi and other major cities.",
      road: "Srinagar is about 250 km from Jammu on NH44, roughly 6 to 8 hours by road depending on traffic and weather.",
      local: "Gulmarg is about 50 km from Srinagar, Pahalgam about 95 km and Sonamarg about 80 km. Inside Pahalgam and at some Gulmarg and Sonamarg points, sightseeing is by local union taxis or ponies rather than your outstation cab.",
    },
    thingsToKnow: [
      "Prepaid mobile connections from other states do not work in Jammu & Kashmir; carry a postpaid connection.",
      "Pahalgam's Betaab, Aru and Chandanwari valleys are visited in local Pahalgam union taxis, booked on the spot or by your agent.",
      "Gulmarg Gondola tickets sell out in peak months; book online in advance.",
      "Houseboats are graded by the tourism department; confirm the category in your quote.",
      "Check local advisories before travel and use registered operators and hotels.",
    ],
    faqs: [
      { q: "How many days are enough for a Kashmir trip?", a: "Five to seven days covers Srinagar, Gulmarg, Pahalgam and Sonamarg at a comfortable pace. Add two days if you want to include Mata Vaishno Devi at Katra or stay overnight in Gulmarg or Pahalgam." },
      { q: "What is the best time to visit Kashmir?", a: "March to June for spring and the tulip garden, September to November for autumn colours, and December to February if you want snow and skiing in Gulmarg." },
      { q: "Can I reach Srinagar by train?", a: "Yes. Vande Bharat trains connect Shri Mata Vaishno Devi Katra with Srinagar, and Katra has direct trains from Delhi and other cities, so you can travel by rail end to end with a change at Katra." },
      { q: "Is a houseboat stay worth it?", a: "Most travellers spend at least one night on a Dal Lake or Nigeen Lake houseboat for the experience, and stay the rest in hotels. Nigeen is quieter; Dal is closer to the boulevard and markets." },
      { q: "Do I need to hire separate taxis in Pahalgam?", a: "Yes. Sightseeing to Betaab Valley, Aru Valley and Chandanwari is done in Pahalgam's local union taxis. Ask your agent whether these are included in the quote." },
      { q: "Will my mobile work in Kashmir?", a: "Postpaid connections from all major networks work. Prepaid connections from other states do not, so switch to postpaid or buy a local connection with ID." },
      { q: "Is Kashmir good for a honeymoon?", a: "Yes, it is one of India's most popular honeymoon destinations. Couples usually choose a houseboat night, a Gulmarg stay and a quieter hotel in Pahalgam." },
      { q: "How do quotes on Tavel Package work for Kashmir?", a: "Share your dates, group size and hotel preference in the form. Up to 3 verified agents who operate Kashmir send customised itineraries and prices, and you book directly with the one you choose." },
    ],
    packagesDescription:
      "Customised Kashmir tour packages covering Srinagar houseboats, Gulmarg, Pahalgam and Sonamarg. Share your dates and get up to 3 quotes from verified local agents.",
    guideDescription:
      "Kashmir travel guide: best time to visit, how to reach Srinagar by air, rail and road, places to visit in Gulmarg, Pahalgam and Sonamarg, and local tips.",
  },

  ladakh: {
    intro:
      "Ladakh is a high-altitude desert union territory in the Himalaya, centred on Leh at about 3,500 m. Trips combine monasteries around Leh with Nubra Valley over Khardung La and the blue lake of Pangong Tso. Most itineraries run 6 to 8 days, starting with one to two days of rest in Leh to acclimatise.\n\nYou can fly into Leh all year, or drive in from Srinagar or Manali when the mountain highways are open, usually from late May or June to October. Road trips are popular with bikers and groups; flying in is easier on families and older travellers.",
    highlights: [
      "Monasteries at Thiksey, Hemis, Diskit and Lamayuru",
      "Pangong Tso, a high-altitude lake that changes colour through the day",
      "Nubra Valley's sand dunes at Hunder and the village of Turtuk",
      "Crossing high passes such as Khardung La and Chang La",
      "Leh Palace, Shanti Stupa and the old town lanes of Leh",
      "Hemis Festival in summer, and snow leopard and frozen river treks in winter",
    ],
    idealDuration: "6 to 8 days",
    bestMonths: "May to September",
    gateway: "Leh airport (IXL)",
    bestTimeToVisit:
      "May to September is the main season. Days are sunny, the Srinagar to Leh and Manali to Leh highways are open, and every circuit including Nubra, Pangong and Tso Moriri can be covered. June to August is the busiest period.\n\nOctober is quieter and colder, with the highways closing as snow arrives. From November to March only flights reach Leh; this is the season for winter specialists, such as the Chadar trek on the frozen Zanskar river and snow leopard tours, with temperatures far below freezing.",
    seasons: [
      { name: "Summer", months: "May to September", note: "All circuits open, both highways usually open from June. Peak demand for flights and hotels." },
      { name: "Autumn", months: "October", note: "Clear, cold and quiet. Highways start closing as snow arrives." },
      { name: "Winter", months: "November to April", note: "Fly-in only. Frozen landscapes, Chadar trek and snow leopard tours for prepared travellers." },
    ],
    howToReach: {
      air: "Kushok Bakula Rimpochee Airport in Leh (IXL) has year-round flights from Delhi and seasonal flights from Mumbai, Srinagar and other cities.",
      rail: "There is no railway in Ladakh. The nearest major stations are Jammu Tawi and Chandigarh, followed by a long road journey.",
      road: "Srinagar to Leh via Zojila and Kargil is about 420 km, usually done in two days. Manali to Leh via the Atal Tunnel and Baralacha La is about 470 km, also two days. Both open roughly from late May or June to October.",
      local: "Hire a local Ladakh-registered taxi for Nubra and Pangong; outside commercial vehicles face restrictions on local sightseeing.",
    },
    thingsToKnow: [
      "Rest for at least 24 to 48 hours in Leh before going higher; altitude sickness is the most common trip problem.",
      "Nubra, Pangong, Tso Moriri and other protected areas need a permit and environment fees, usually arranged by your agent or hotel.",
      "Postpaid connections work best; prepaid connections from other states often do not work.",
      "ATMs and fuel are limited outside Leh; carry cash and plan fuel stops.",
      "Carry warm layers even in summer; nights at Pangong are cold.",
    ],
    faqs: [
      { q: "How many days do I need for Ladakh?", a: "Six to eight days covers Leh, Nubra Valley and Pangong Lake with time to acclimatise. Add two or three days for Tso Moriri, Turtuk or a road trip from Srinagar or Manali." },
      { q: "When is the best time to visit Ladakh?", a: "May to September, when the weather is mild and all routes are open. The highways from Srinagar and Manali usually open from late May or June." },
      { q: "Do I need a permit for Ladakh?", a: "Leh town does not need one, but Nubra Valley, Pangong, Tso Moriri and other protected areas need a permit and environment fees. Agents and hotels arrange this for you." },
      { q: "How do I avoid altitude sickness in Ladakh?", a: "Spend the first one to two days in Leh resting, drink water, avoid alcohol and climb gradually. Speak to a doctor before travel if you have heart or lung conditions." },
      { q: "Is it better to fly or drive to Ladakh?", a: "Flying is faster and easier, especially for families. Driving from Manali or Srinagar adds two days but acclimatises you gradually and shows some of the most dramatic mountain roads in India." },
      { q: "Can I visit Ladakh in winter?", a: "Yes, by flight. Winter trips focus on Leh, frozen landscapes, the Chadar trek and snow leopard tours, but temperatures fall well below freezing and some areas are closed." },
      { q: "Can I stay overnight at Pangong Lake?", a: "Yes. Camps and simple guesthouses operate along the lake in season, and an overnight stay lets you see the lake at sunrise and sunset." },
      { q: "How do Ladakh quotes on Tavel Package work?", a: "Share your dates and whether you want to fly in or drive. Up to 3 verified agents who run Ladakh trips send itineraries with acclimatisation days, permits and stays included." },
    ],
    packagesDescription:
      "Customised Leh Ladakh tour packages with Nubra Valley, Pangong Lake and acclimatisation days. Fly in or drive. Get up to 3 quotes from verified local agents.",
    guideDescription:
      "Ladakh travel guide: best time to visit, flights and road routes to Leh, permits, altitude tips, and places to visit in Nubra, Pangong and beyond.",
  },

  himachal: {
    intro:
      "Himachal Pradesh is a mountain state in north India whose most visited holiday towns are Shimla, Manali, Dharamshala, Dalhousie and Kasauli, with Spiti Valley for high-altitude road trips. A classic Shimla and Manali trip takes 5 to 7 days and is usually done by road from Delhi or Chandigarh.\n\nFamilies and honeymooners mostly choose Shimla, Manali and Kullu for snow points, river valleys and easy sightseeing. Travellers looking for something quieter pick Dharamshala and McLeod Ganj, Bir Billing for paragliding, Kasol and the Parvati Valley, or the Kinnaur and Spiti circuit.",
    highlights: [
      "Solang Valley, Atal Tunnel and Rohtang Pass near Manali",
      "The Kalka to Shimla toy train, part of the Mountain Railways of India World Heritage Site",
      "McLeod Ganj, the seat of the Dalai Lama, and the Triund trek above Dharamshala",
      "Paragliding at Bir Billing",
      "Spiti Valley's monasteries, Chandratal Lake and high villages such as Kibber",
      "Snowfall in Shimla, Kufri and Manali in winter",
    ],
    idealDuration: "5 to 7 days for Shimla and Manali; 8 to 10 days for Spiti",
    bestMonths: "March to June, September to November; December to February for snow",
    gateway: "Chandigarh airport, or overnight Volvo from Delhi",
    bestTimeToVisit:
      "March to June is the main season, with pleasant days in Shimla and Manali and the route over Rohtang opening in early summer. September to November brings clear views after the monsoon and is good for Dharamshala, Kinnaur and Spiti.\n\nDecember to February is the snow season in Shimla, Kufri, Manali and Solang. Some roads close and the Manali side of Spiti is shut, so plan winter trips around snowfall rather than long drives. July and August are monsoon months with a higher risk of landslides on mountain roads.",
    seasons: [
      { name: "Summer", months: "March to June", note: "Peak family season. Rohtang opens in early summer; book hotels early." },
      { name: "Monsoon", months: "July to August", note: "Green but prone to landslides. Keep buffer days and avoid long mountain drives." },
      { name: "Autumn", months: "September to November", note: "Clear skies, quieter hotels, best for Spiti via Manali until the passes close." },
      { name: "Winter", months: "December to February", note: "Snow in Shimla, Kufri, Manali and Solang. Some passes closed." },
    ],
    howToReach: {
      air: "Chandigarh is the nearest major airport. Smaller airports at Bhuntar near Kullu and Manali (KUU) and Gaggal near Dharamshala (DHM) have limited flights from Delhi.",
      rail: "Kalka and Chandigarh are the main railheads; the narrow-gauge toy train runs from Kalka to Shimla. Pathankot is the railhead for Dharamshala and Dalhousie.",
      road: "Delhi to Shimla is about 390 km and Delhi to Manali about 540 km. Overnight Volvo buses and private cabs from Delhi and Chandigarh are the most common way in.",
      local: "Hire a cab for sightseeing. Rohtang Pass needs an online permit with a daily vehicle limit; Atal Tunnel gives year-round access to Lahaul.",
    },
    thingsToKnow: [
      "Rohtang Pass permits are issued online with a daily cap; book in advance in peak season.",
      "Manali traffic jams near Solang and the Atal Tunnel are common on weekends; start early.",
      "Spiti is reached via Kinnaur from Shimla for most of the year; the Manali side opens only in summer.",
      "Monsoon landslides can block highways; keep a buffer day in July and August.",
    ],
    faqs: [
      { q: "How many days are needed for Shimla and Manali?", a: "Five to seven days from Delhi or Chandigarh covers both with Kufri, Solang Valley and Kullu. Add two days for Dharamshala or Kasol." },
      { q: "When does it snow in Himachal?", a: "Snowfall in Shimla, Kufri and Manali is most likely from late December to February. Higher points such as Solang Valley and Rohtang can have snow into spring." },
      { q: "Do I need a permit for Rohtang Pass?", a: "Yes. Vehicles need an online permit with a daily limit, and the pass opens only in the warmer months. Atal Tunnel does not need this permit." },
      { q: "Is the Shimla toy train worth taking?", a: "Yes, if you have time. The Kalka to Shimla line is a World Heritage railway and the slow ride through tunnels and bridges is part of the trip." },
      { q: "What is the best way to reach Manali from Delhi?", a: "Overnight Volvo buses and private cabs take around 12 to 14 hours. You can also fly to Bhuntar near Kullu, though flights are limited and weather dependent." },
      { q: "Is Spiti Valley suitable for families?", a: "It suits families with older children who are comfortable with long drives and high altitude. Plan 8 to 10 days and go via Kinnaur to acclimatise gradually." },
      { q: "Which places in Himachal are best for a honeymoon?", a: "Manali, Shimla, Dalhousie with Khajjiar, and Kasauli are popular with couples, often combined into one road trip." },
      { q: "How do Himachal quotes on Tavel Package work?", a: "Tell us your start city, dates and the places you want to cover. Up to 3 verified agents send customised Himachal itineraries with transport and hotels." },
    ],
    packagesDescription:
      "Customised Himachal tour packages for Shimla, Manali, Dharamshala, Dalhousie and Spiti. Get up to 3 quotes from verified local agents.",
    guideDescription:
      "Himachal travel guide: best time to visit Shimla and Manali, snow season, Rohtang permits, how to reach by air, rail and road, and places to visit.",
  },

  uttarakhand: {
    intro:
      "Uttarakhand is a Himalayan state in north India that combines hill stations such as Nainital and Mussoorie, the riverside towns of Rishikesh and Haridwar, Jim Corbett National Park and the Char Dham pilgrimage to Yamunotri, Gangotri, Kedarnath and Badrinath. Leisure trips usually take 4 to 6 days; the full Char Dham Yatra takes 10 to 12 days by road.\n\nThe state splits into two regions: Garhwal in the west, with Rishikesh, Mussoorie, Auli and the Char Dham, and Kumaon in the east, with Nainital, Corbett, Ranikhet, Almora and Munsiyari.",
    highlights: [
      "Ganga Aarti at Har Ki Pauri in Haridwar and Triveni Ghat in Rishikesh",
      "River rafting and camping in Rishikesh",
      "Tiger safaris in Jim Corbett, India's oldest national park",
      "Naini Lake and the hill views of Nainital and Mussoorie",
      "The Char Dham Yatra and the Kedarnath trek",
      "Valley of Flowers in the monsoon and skiing at Auli in winter",
    ],
    idealDuration: "4 to 6 days for hill stations; 10 to 12 days for Char Dham",
    bestMonths: "March to June, September to November",
    gateway: "Dehradun airport (DED) or Kathgodam station",
    bestTimeToVisit:
      "March to June is peak season for the hill stations and the opening months of the Char Dham Yatra, whose temples usually open around late April or May. September to November is clear and less crowded, and the yatra continues until the temples close around Diwali.\n\nJuly and August bring heavy monsoon rain and landslide risk on mountain roads, although this is when the Valley of Flowers is in full bloom. December to February is cold, with snow at Auli, Chopta, Munsiyari and sometimes Mussoorie and Nainital.",
    seasons: [
      { name: "Summer", months: "March to June", note: "Hill station peak and Char Dham opening. Book Kedarnath helicopters and hotels early." },
      { name: "Monsoon", months: "July to August", note: "Valley of Flowers blooms; landslide risk and rafting closed in Rishikesh." },
      { name: "Autumn", months: "September to November", note: "Clear Himalayan views, quieter yatra, good for Corbett from mid-October." },
      { name: "Winter", months: "December to February", note: "Snow at Auli and Chopta; skiing season at Auli. Char Dham temples closed." },
    ],
    howToReach: {
      air: "Jolly Grant Airport in Dehradun (DED) serves Rishikesh, Haridwar, Mussoorie and the Char Dham route. Pantnagar (PGH) is the nearest airport for Nainital and Corbett.",
      rail: "Haridwar, Dehradun and Yog Nagari Rishikesh stations have trains from Delhi. Kathgodam is the railhead for Nainital, and Ramnagar for Jim Corbett.",
      road: "Delhi to Rishikesh is about 240 km, Delhi to Nainital about 300 km and Delhi to Corbett about 250 km, each roughly 6 to 7 hours by road.",
      local: "Cabs from Haridwar, Rishikesh or Dehradun are the usual base for the Char Dham. Kedarnath is a trek of about 16 km from Gaurikund, with ponies, palkis and helicopter services from the Guptkashi area.",
    },
    thingsToKnow: [
      "Char Dham pilgrims must register online with the Uttarakhand government before travel.",
      "Book Kedarnath helicopter tickets only through the official IRCTC heli-yatra portal; fake websites are common.",
      "Corbett's Dhikala zone is closed in the monsoon; Jhirna zone stays open all year.",
      "Rafting in Rishikesh is suspended during the monsoon months.",
    ],
    faqs: [
      { q: "How many days are needed for the Char Dham Yatra?", a: "About 10 to 12 days by road from Haridwar or Rishikesh. The Do Dham trip to Kedarnath and Badrinath takes 5 to 6 days." },
      { q: "When do the Char Dham temples open?", a: "They usually open around Akshaya Tritiya in late April or May and close around Diwali in October or November. Exact dates are announced each year." },
      { q: "Is registration required for Char Dham?", a: "Yes. Every pilgrim must register with the Uttarakhand government before the yatra, online or at registration counters." },
      { q: "Which is better for a short trip, Nainital or Mussoorie?", a: "Both suit a 2 to 3 night trip. Mussoorie is closer to Dehradun and Rishikesh; Nainital pairs well with Corbett and the Kumaon hills." },
      { q: "When is the best time for a Jim Corbett safari?", a: "Mid-November to June, when most zones including Dhikala are open. Summer months give better chances of tiger sightings as animals come to water." },
      { q: "Can I do river rafting in Rishikesh all year?", a: "No. Rafting runs roughly from September to June and is suspended during the monsoon for safety." },
      { q: "When does the Valley of Flowers open?", a: "Usually from June to October, with the best blooms in July and August. It is a trek from Ghangaria, near Hemkund Sahib." },
      { q: "How do Uttarakhand quotes on Tavel Package work?", a: "Share your dates and whether it is a leisure, wildlife or yatra trip. Up to 3 verified agents send customised itineraries, including registrations and transport where needed." },
    ],
    packagesDescription:
      "Customised Uttarakhand tour packages for Nainital, Mussoorie, Rishikesh, Jim Corbett and the Char Dham Yatra. Get up to 3 quotes from verified local agents.",
    guideDescription:
      "Uttarakhand travel guide: best time for hill stations and Char Dham, how to reach Rishikesh, Nainital and Corbett, yatra registration and tips.",
  },

  delhi: {
    intro:
      "Delhi is India's capital and the starting point of many north India holidays, with three UNESCO World Heritage Sites: the Red Fort, Qutub Minar and Humayun's Tomb. One to two days is enough for the main sights, and most travellers combine Delhi with Agra and Jaipur on the Golden Triangle route.\n\nOld Delhi offers the Red Fort, Jama Masjid and the lanes of Chandni Chowk, while New Delhi has India Gate, the government buildings of Kartavya Path, Humayun's Tomb, Lotus Temple and Akshardham.",
    highlights: [
      "Red Fort, Jama Masjid and Chandni Chowk in Old Delhi",
      "Qutub Minar and Humayun's Tomb, both UNESCO World Heritage Sites",
      "India Gate and Kartavya Path",
      "Swaminarayan Akshardham and the Lotus Temple",
      "Street food in Old Delhi and markets such as Dilli Haat",
    ],
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Indira Gandhi International Airport (DEL)",
    bestTimeToVisit:
      "October to March is the best time, with cool to mild days that suit sightseeing on foot. From April to June temperatures often pass 40°C, and July to September is humid with monsoon showers.\n\nAir quality can be poor in November and parts of winter, so travellers with breathing problems should check the forecast and keep outdoor plans flexible.",
    seasons: [
      { name: "Winter", months: "October to March", note: "Best sightseeing weather. Air quality can dip in November and December." },
      { name: "Summer", months: "April to June", note: "Very hot afternoons. Plan monuments early morning and evenings." },
      { name: "Monsoon", months: "July to September", note: "Humid with showers; indoor sights and museums work well." },
    ],
    howToReach: {
      air: "Indira Gandhi International Airport (DEL) has domestic and international flights from across the world.",
      rail: "New Delhi, Hazrat Nizamuddin, Old Delhi and Anand Vihar stations connect Delhi with every major Indian city.",
      road: "National highways link Delhi with Agra (about 230 km by the Yamuna Expressway) and Jaipur (about 280 km).",
      local: "The Delhi Metro reaches most sights, including Chandni Chowk, Qutub Minar and the airport. App cabs and hired cars cover the rest.",
    },
    thingsToKnow: [
      "The Red Fort, Akshardham and Lotus Temple are closed on Mondays.",
      "Phones and cameras are not allowed inside Akshardham; there is a cloakroom.",
      "Use the Airport Express metro line for a quick and predictable airport transfer.",
    ],
    faqs: [
      { q: "How many days are enough for Delhi sightseeing?", a: "One full day covers Old Delhi and the main New Delhi sights; two days lets you add Akshardham, museums and markets at an easy pace." },
      { q: "What is the Golden Triangle tour?", a: "A circuit of Delhi, Agra and Jaipur, usually 5 to 6 days by road. It covers the Taj Mahal, Agra Fort, Amer Fort and Jaipur's palaces along with Delhi's monuments." },
      { q: "Which Delhi monuments are closed on Mondays?", a: "The Red Fort, Swaminarayan Akshardham and the Lotus Temple are closed on Mondays. Qutub Minar and Humayun's Tomb are open every day." },
      { q: "What is the best time to visit Delhi?", a: "October to March, when the weather is cool. Summers are very hot and monsoon months are humid." },
      { q: "How do I get from Delhi to Agra?", a: "By road on the Yamuna Expressway in about 3 to 4 hours, or by fast trains such as the Gatimaan Express and Vande Bharat services." },
      { q: "How do Delhi quotes on Tavel Package work?", a: "Share your dates and whether you want Delhi only or the Golden Triangle. Up to 3 verified agents send itineraries with cars, guides and hotels." },
    ],
    packagesDescription:
      "Delhi sightseeing and Golden Triangle tour packages with Agra and Jaipur. Share your dates and get up to 3 customised quotes from verified agents.",
    guideDescription:
      "Delhi travel guide: UNESCO monuments, best time to visit, how to get around by metro, Monday closures and places to visit in Old and New Delhi.",
  },
};
