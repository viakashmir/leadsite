import type { GuideContent } from "@/lib/locations";

// Destination guide content: Rajasthan, Uttar Pradesh, Goa, Kerala, Tamil Nadu (tier 1).
// Rules: fact-based, no invented prices/stats, no em dashes.
export const INDIA_WEST_SOUTH: Record<string, GuideContent> = {
  rajasthan: {
    intro:
      "Rajasthan is India's largest state and its best-known heritage destination: hill forts, royal palaces and desert towns spread across Jaipur, Udaipur, Jodhpur and Jaisalmer, with tigers in Ranthambore and the holy lake town of Pushkar. A first trip covering three or four cities takes 7 to 10 days by road.\n\nJaipur is the usual starting point and part of the Golden Triangle with Delhi and Agra. Udaipur suits couples with its lakes and palace hotels, Jodhpur is built around Mehrangarh Fort, and Jaisalmer adds a golden sandstone fort and nights in desert camps at Sam.",
    highlights: [
      "Amer Fort, Hawa Mahal and City Palace in Jaipur, a UNESCO World Heritage City",
      "Lake Pichola and the City Palace in Udaipur",
      "Mehrangarh Fort above the blue city of Jodhpur",
      "Jaisalmer Fort and a camel ride and camp night at the Sam sand dunes",
      "Tiger safaris in Ranthambore National Park",
      "Heritage stays in converted forts, palaces and havelis",
    ],
    idealDuration: "7 to 10 days for a multi-city trip",
    bestMonths: "October to March",
    gateway: "Jaipur airport (JAI)",
    bestTimeToVisit:
      "October to March is the season for Rajasthan, with warm days and cool to cold nights that suit fort visits and desert camps. December and January are the coolest and busiest months, especially around Christmas and New Year.\n\nApril to June is very hot, particularly in the desert cities. July to September brings the monsoon, which makes Udaipur and Mount Abu green and quiet; Ranthambore's core safari zones close during these months.",
    seasons: [
      { name: "Winter", months: "October to March", note: "Peak season. Desert Festival in Jaisalmer in February; Pushkar Fair in October or November." },
      { name: "Summer", months: "April to June", note: "Very hot; plan forts early in the morning. Mount Abu is the cool escape." },
      { name: "Monsoon", months: "July to September", note: "Lakes fill in Udaipur. Ranthambore core zones closed." },
    ],
    howToReach: {
      air: "Jaipur (JAI), Udaipur (UDR) and Jodhpur (JDH) have regular flights; Jaisalmer has seasonal flights.",
      rail: "Jaipur, Ajmer, Jodhpur, Udaipur and Sawai Madhopur (for Ranthambore) have direct trains from Delhi and other cities. The Palace on Wheels luxury train runs a week-long Rajasthan circuit in the cooler months.",
      road: "Delhi to Jaipur is about 280 km, roughly 5 hours. Jaipur to Udaipur is about 400 km and Jodhpur to Jaisalmer about 285 km.",
      local: "A hired car with driver is the most common way to tour several cities. Auto rickshaws and app cabs work within cities.",
    },
    thingsToKnow: [
      "Book Ranthambore safaris early through the official forest department system; seats are limited by zone and time.",
      "Desert nights are cold from November to February, even after hot days.",
      "A composite ticket in Jaipur covers several monuments over two days.",
      "Dress modestly for temples and the Ajmer Sharif Dargah.",
    ],
    faqs: [
      { q: "How many days do I need for Rajasthan?", a: "Seven to ten days covers Jaipur, Udaipur, Jodhpur and Jaisalmer by road. With 4 to 5 days, focus on Jaipur and Udaipur, or Jaipur and Ranthambore." },
      { q: "What is the best time to visit Rajasthan?", a: "October to March, when the weather is pleasant. Summer is extremely hot, especially in Jaisalmer and Jodhpur." },
      { q: "Which Rajasthan city is best for a honeymoon?", a: "Udaipur, for its lakes, sunset boat rides and palace hotels. Many couples add Mount Abu or Jaisalmer's desert camps." },
      { q: "Can I see tigers in Ranthambore?", a: "Ranthambore is one of the best parks in India for tiger sightings, though sightings are never guaranteed. The core zones are open from October to June." },
      { q: "Is a desert camp in Jaisalmer worth it?", a: "Yes for most travellers. Camps near the Sam dunes include a camel or jeep ride at sunset, folk music and dinner, with options from basic tents to luxury camps." },
      { q: "How is Rajasthan connected to Delhi?", a: "By flights to Jaipur, Udaipur and Jodhpur, direct trains, and the Delhi to Jaipur highway, which takes about 5 hours by car." },
      { q: "How do Rajasthan quotes on Tavel Package work?", a: "Share the cities you want, your dates and hotel style. Up to 3 verified agents send customised itineraries with car, driver and stays." },
    ],
    packagesDescription:
      "Customised Rajasthan tour packages for Jaipur, Udaipur, Jodhpur, Jaisalmer and Ranthambore. Get up to 3 quotes from verified local agents.",
    guideDescription:
      "Rajasthan travel guide: best time to visit, how to reach Jaipur and Udaipur, forts and palaces, desert camps, Ranthambore safaris and tips.",
  },

  "uttar-pradesh": {
    intro:
      "Uttar Pradesh holds some of India's most visited heritage and pilgrimage sites: the Taj Mahal in Agra, the ghats of Varanasi, the Ram Mandir in Ayodhya, the Triveni Sangam in Prayagraj and the Krishna towns of Mathura and Vrindavan. Most trips are either an Agra visit as part of the Golden Triangle or a 4 to 6 day spiritual circuit of Varanasi, Ayodhya and Prayagraj.\n\nLucknow adds Nawabi architecture and food, while Sarnath, just outside Varanasi, is where the Buddha gave his first sermon.",
    highlights: [
      "The Taj Mahal, Agra Fort and Fatehpur Sikri, all UNESCO World Heritage Sites",
      "Evening Ganga Aarti at Dashashwamedh Ghat and boat rides on the Ganga in Varanasi",
      "Kashi Vishwanath Temple and Sarnath",
      "The Shri Ram Janmabhoomi Mandir in Ayodhya",
      "Triveni Sangam in Prayagraj",
      "Banke Bihari and Prem Mandir in Vrindavan, especially around Holi and Janmashtami",
    ],
    idealDuration: "1 to 2 days for Agra; 4 to 6 days for Varanasi, Ayodhya and Prayagraj",
    bestMonths: "October to March",
    gateway: "Agra by road from Delhi; Varanasi airport (VNS)",
    bestTimeToVisit:
      "October to March is the best period, with cool weather for temple visits and walking the ghats. Early mornings in December and January can be foggy, which sometimes delays trains and flights.\n\nApril to June is very hot. July to September is the monsoon, when the Ganga rises in Varanasi and some ghat-side activities are restricted.",
    seasons: [
      { name: "Winter", months: "October to March", note: "Best weather; Dev Deepawali in Varanasi in November; Magh Mela in Prayagraj in January and February." },
      { name: "Summer", months: "April to June", note: "Hot; visit monuments at sunrise." },
      { name: "Monsoon", months: "July to September", note: "Ganga in spate in Varanasi; boat rides can be suspended." },
    ],
    howToReach: {
      air: "Varanasi (VNS), Lucknow (LKO), Ayodhya (Maharishi Valmiki International Airport), Prayagraj (IXD) and Agra (AGR) all have flights.",
      rail: "Agra Cantt, Varanasi Junction, Ayodhya Dham, Prayagraj Junction, Mathura Junction and Lucknow are well connected, including Vande Bharat services from Delhi.",
      road: "Delhi to Agra is about 230 km on the Yamuna Expressway, 3 to 4 hours. Varanasi to Ayodhya is about 200 km and Ayodhya to Prayagraj about 170 km.",
      local: "Hire a car between cities. In Varanasi, walk or take a boat along the ghats; cars cannot reach the riverside.",
    },
    thingsToKnow: [
      "The Taj Mahal is closed on Fridays.",
      "Bags, food and some items are not allowed inside the Taj Mahal and major temples; carry the minimum.",
      "Mobile phones are not allowed inside Kashi Vishwanath and the Ayodhya Ram Mandir; use the lockers.",
      "Book Varanasi boat rides and aarti viewing through your hotel or agent to avoid touts.",
    ],
    faqs: [
      { q: "Can I visit the Taj Mahal on a day trip from Delhi?", a: "Yes. The Yamuna Expressway or a fast train gets you to Agra in about 2 to 4 hours, enough for the Taj Mahal and Agra Fort in one day." },
      { q: "On which day is the Taj Mahal closed?", a: "Every Friday, for prayers at the mosque inside the complex." },
      { q: "How many days are needed for Varanasi, Ayodhya and Prayagraj?", a: "Four to six days by road, with two nights in Varanasi, one or two in Ayodhya and one in Prayagraj." },
      { q: "What is the best time to visit Varanasi?", a: "October to March. Dev Deepawali in November, when the ghats are lit with lamps, is a special time but very crowded." },
      { q: "Where is the Ganga Aarti in Varanasi?", a: "The main evening aarti is at Dashashwamedh Ghat; there is also a morning programme at Assi Ghat." },
      { q: "How do Uttar Pradesh quotes on Tavel Package work?", a: "Share whether you want Agra, a spiritual circuit or both, with your dates. Up to 3 verified agents send itineraries with transport, hotels and guides." },
    ],
    packagesDescription:
      "Customised Uttar Pradesh tour packages for Agra, Varanasi, Ayodhya, Prayagraj and Mathura Vrindavan. Get up to 3 quotes from verified local agents.",
    guideDescription:
      "Uttar Pradesh travel guide: Taj Mahal timings, Varanasi ghats and Ganga Aarti, Ayodhya and Prayagraj, best time to visit and how to reach.",
  },

  goa: {
    intro:
      "Goa is India's smallest state and its favourite beach holiday, with busy beaches, nightlife and water sports in North Goa, and quieter coves and resorts in South Goa. Most trips last 3 to 5 days, and the main season runs from November to February.\n\nBeyond the beaches, Goa has Portuguese-era churches in Old Goa, spice plantations, the Dudhsagar waterfall on the Karnataka border, and the old Latin quarter of Fontainhas in Panaji.",
    highlights: [
      "Baga, Calangute, Anjuna and Vagator beaches in North Goa",
      "Palolem, Agonda and Colva in South Goa",
      "The Basilica of Bom Jesus and the churches of Old Goa, a UNESCO World Heritage Site",
      "Fort Aguada and Chapora Fort",
      "Water sports, cruises on the Mandovi and night markets",
      "Dudhsagar Falls and spice plantation tours inland",
    ],
    idealDuration: "3 to 5 days",
    bestMonths: "November to February",
    gateway: "Mopa airport (GOX) or Dabolim airport (GOI)",
    bestTimeToVisit:
      "November to February is peak season: dry, sunny and lively, with beach shacks and water sports running. Christmas and New Year are the busiest and most expensive weeks. October and March are good shoulder months with fewer crowds.\n\nThe monsoon from June to September turns Goa green and quiet. Many beach shacks close, the sea is rough and water sports are suspended, but hotel rates drop and waterfalls are at their fullest.",
    seasons: [
      { name: "Peak", months: "November to February", note: "Best beach weather. Book Christmas and New Year early." },
      { name: "Shoulder", months: "March to May, October", note: "Warmer and quieter; good value." },
      { name: "Monsoon", months: "June to September", note: "Green and lush; water sports and many shacks closed." },
    ],
    howToReach: {
      air: "Manohar International Airport at Mopa (GOX) is closer to North Goa, and Dabolim Airport (GOI) is closer to South Goa. Both have flights from major Indian cities.",
      rail: "Madgaon (Margao), Thivim and Vasco da Gama stations are on the Konkan Railway, with trains from Mumbai, Delhi, Bengaluru and Kerala, including a Vande Bharat service from Mumbai.",
      road: "Mumbai to Goa is about 590 km and Bengaluru to Goa about 560 km by road; overnight buses run from both.",
      local: "Hired cars and taxis are the easiest option. Scooter and car rentals are popular; carry your driving licence and wear a helmet.",
    },
    thingsToKnow: [
      "Drinking alcohol and cooking in the open on beaches can attract fines.",
      "Water sports and many shacks shut during the monsoon months.",
      "North and South Goa are about 1.5 to 2 hours apart by road; choose your base by the trip you want.",
      "The Dudhsagar jeep safari runs after the monsoon and is closed in the rainy season.",
    ],
    faqs: [
      { q: "Is North Goa or South Goa better?", a: "North Goa is busier, with nightlife, markets and water sports. South Goa is quieter, with cleaner beaches and resorts, and suits couples and families looking to relax." },
      { q: "How many days are enough for Goa?", a: "Three to four days covers the main beaches and Old Goa. Five days lets you split time between North and South Goa." },
      { q: "What is the best time to visit Goa?", a: "November to February for the classic beach holiday. Go in the monsoon if you prefer greenery, waterfalls and low hotel rates." },
      { q: "Which airport should I fly into?", a: "Mopa (GOX) if you are staying in North Goa, Dabolim (GOI) for South Goa. The two are about 1.5 hours apart." },
      { q: "Are water sports available all year?", a: "No. They run from about October to May and are suspended during the monsoon for safety." },
      { q: "How do Goa quotes on Tavel Package work?", a: "Share your dates, group and whether you prefer North or South Goa. Up to 3 verified agents send packages with hotels, transfers and sightseeing." },
    ],
    packagesDescription:
      "Customised Goa tour packages for North and South Goa beaches, Old Goa and Dudhsagar. Get up to 3 quotes from verified local agents.",
    guideDescription:
      "Goa travel guide: North vs South Goa, best time to visit, Mopa and Dabolim airports, beaches, monsoon closures and local rules.",
  },

  kerala: {
    intro:
      "Kerala, on India's south-west coast, is known for its backwaters, tea hills and beaches. The classic 5 to 7 day trip runs from Kochi to Munnar's tea estates, Thekkady's Periyar Tiger Reserve and an overnight houseboat on the backwaters of Alleppey or Kumarakom, often ending at the beaches of Kovalam or Varkala.\n\nKerala is also India's best-known destination for Ayurveda, and its culture shows up in Kathakali performances, temple festivals and Onam, the harvest festival in August or September.",
    highlights: [
      "An overnight houseboat cruise on the backwaters of Alleppey or Kumarakom",
      "Tea estates, Eravikulam National Park and Top Station in Munnar",
      "Periyar Tiger Reserve and spice plantations in Thekkady",
      "Fort Kochi's Chinese fishing nets, Mattancherry and Jew Town",
      "The cliff beach at Varkala and the lighthouse beach at Kovalam",
      "Ayurveda treatments and Kathakali performances",
    ],
    idealDuration: "5 to 7 days",
    bestMonths: "September to March",
    gateway: "Kochi airport (COK)",
    bestTimeToVisit:
      "September to March is the main season, with pleasant weather on the coast and cool days in Munnar and Thekkady. December and January are the busiest months, so book houseboats and hill resorts early.\n\nThe south-west monsoon from June to August brings heavy rain, lush landscapes and lower rates, and is considered a good season for Ayurveda treatments. April and May are hot and humid on the coast, though the hills stay comfortable.",
    seasons: [
      { name: "Winter", months: "September to March", note: "Peak season; houseboats and Munnar resorts fill up in December and January." },
      { name: "Summer", months: "April to May", note: "Hot on the coast; the hills of Munnar and Wayanad are a good escape." },
      { name: "Monsoon", months: "June to August", note: "Heavy rain, green landscapes, Ayurveda season and lower rates." },
    ],
    howToReach: {
      air: "Kochi (COK) is the main gateway. Thiruvananthapuram (TRV) suits Kovalam and Varkala; Kozhikode (CCJ) and Kannur (CNN) suit Wayanad and north Kerala.",
      rail: "Ernakulam, Aluva (for Munnar), Kottayam (for Thekkady and Kumarakom), Alappuzha, Varkala and Thiruvananthapuram stations connect to the rest of India.",
      road: "Kochi airport to Munnar is about 110 km (3.5 to 4 hours). Munnar to Thekkady is about 90 km, and Thekkady to Alleppey about 140 km.",
      local: "A hired car with driver is the usual way to do the circuit. In Kochi, the Water Metro and ferries link Fort Kochi with the mainland.",
    },
    thingsToKnow: [
      "Houseboats cruise by day and anchor for the night, so an overnight cruise usually runs from noon to the next morning.",
      "Eravikulam National Park in Munnar closes for a few weeks around February and March for the Nilgiri tahr calving season.",
      "Many temples have dress codes and some do not allow non-Hindus inside.",
      "Carry rain gear from June to August and light woollens for Munnar nights.",
    ],
    faqs: [
      { q: "How many days are needed for Kerala?", a: "Five to seven days covers Kochi, Munnar, Thekkady and a backwater houseboat. Add two days for Kovalam or Varkala." },
      { q: "Alleppey or Kumarakom for a houseboat?", a: "Alleppey has the larger network of canals and more houseboats; Kumarakom, on the other side of Vembanad Lake, is quieter and known for lakeside resorts." },
      { q: "What is the best time to visit Kerala?", a: "September to March for sightseeing and beaches; June to August if you want Ayurveda, monsoon landscapes and lower prices." },
      { q: "Is Kerala good for a honeymoon?", a: "Yes. Couples usually combine a Munnar hill resort, a private houseboat night and a beach stay in Kovalam or Varkala." },
      { q: "Which airport is best for a Kerala trip?", a: "Kochi for the Munnar, Thekkady and Alleppey circuit. Thiruvananthapuram if you start or end at Kovalam or Varkala." },
      { q: "How do Kerala quotes on Tavel Package work?", a: "Share your dates, hotel category and whether you want a private houseboat. Up to 3 verified agents send customised itineraries with car and stays." },
    ],
    packagesDescription:
      "Customised Kerala tour packages with Munnar, Thekkady, an Alleppey houseboat and beaches. Get up to 3 quotes from verified local agents.",
    guideDescription:
      "Kerala travel guide: best time to visit, Kochi to Munnar, Thekkady and Alleppey routes, houseboat tips, monsoon and Ayurveda season.",
  },

  "tamil-nadu": {
    intro:
      "Tamil Nadu, in India's far south, combines the hill stations of Ooty and Kodaikanal with great Dravidian temples at Madurai, Thanjavur and Rameswaram, the shore temples of Mahabalipuram and the southern tip of India at Kanyakumari. Hill trips take 3 to 5 days; a temple circuit takes 5 to 7 days.\n\nChennai is the main gateway for the east coast and temple towns, while Coimbatore is the nearest airport for Ooty and Coonoor, and Madurai for Kodaikanal and Rameswaram.",
    highlights: [
      "The Nilgiri Mountain Railway to Ooty, a UNESCO World Heritage railway",
      "Kodai Lake, Coaker's Walk and Pillar Rocks in Kodaikanal",
      "Meenakshi Amman Temple in Madurai",
      "Brihadeeswarar Temple in Thanjavur and the Shore Temple at Mahabalipuram, both UNESCO sites",
      "Ramanathaswamy Temple, Dhanushkodi and the Pamban bridges at Rameswaram",
      "Sunrise and sunset at Kanyakumari and the Vivekananda Rock Memorial",
    ],
    idealDuration: "3 to 5 days for hill stations; 5 to 7 days for temples",
    bestMonths: "December to March for the plains; March to June for the hills",
    gateway: "Chennai (MAA), Coimbatore (CJB) or Madurai (IXM)",
    bestTimeToVisit:
      "The plains and coast are best from December to March, after the north-east monsoon and before the summer heat. Tamil Nadu gets much of its rain from October to December, when the coast including Chennai can see heavy downpours.\n\nOoty, Coonoor and Kodaikanal are popular from March to June, when the plains are hot, and again from September to November. Winter nights in the hills are cold. Pongal in mid-January is a good time to see local festivities.",
    seasons: [
      { name: "Winter", months: "December to March", note: "Best for temples, Chennai and Kanyakumari. Pongal in January." },
      { name: "Summer", months: "April to June", note: "Hot plains; Ooty and Kodaikanal at their busiest." },
      { name: "Monsoon", months: "October to December", note: "North-east monsoon rain on the coast; hills misty." },
    ],
    howToReach: {
      air: "Chennai (MAA) is the main international gateway. Coimbatore (CJB) is the nearest airport for Ooty, about 85 km away, and Madurai (IXM) for Kodaikanal (about 120 km) and Rameswaram.",
      rail: "Chennai, Coimbatore, Madurai and Rameswaram have good rail links. The toy train runs from Mettupalayam to Ooty.",
      road: "Chennai to Mahabalipuram is about 55 km. Madurai to Rameswaram is about 175 km and Madurai to Kanyakumari about 245 km.",
      local: "A hired car is easiest for multi-city trips; the hill roads to Ooty and Kodaikanal have many hairpin bends.",
    },
    thingsToKnow: [
      "Vehicles entering Ooty and Kodaikanal have needed an online e-pass in recent seasons; check current rules before travel.",
      "Book the Nilgiri toy train well in advance; seats are limited.",
      "Temples have dress codes; some inner sanctums are open only to Hindus.",
      "Plan coastal trips around the October to December monsoon.",
    ],
    faqs: [
      { q: "Which is better, Ooty or Kodaikanal?", a: "Ooty has more sights and the toy train, and is easier from Coimbatore and Bengaluru. Kodaikanal is quieter and better reached from Madurai." },
      { q: "How do I reach Ooty?", a: "Fly to Coimbatore and drive about 3 hours, or take the toy train from Mettupalayam. Ooty is also about 270 km from Bengaluru by road." },
      { q: "What is the best time to visit Tamil Nadu?", a: "December to March for temples and the coast, March to June for the hill stations. Avoid the coast in the heavy rain of October to December if you can." },
      { q: "How many days are needed for Madurai, Rameswaram and Kanyakumari?", a: "Five to six days by road, with a day each in Madurai and Rameswaram and an overnight stay in Kanyakumari for sunrise." },
      { q: "Can I combine Tamil Nadu with Kerala?", a: "Yes. Kanyakumari is close to Thiruvananthapuram, and Kodaikanal or Ooty can be paired with Munnar for a south India trip." },
      { q: "How do Tamil Nadu quotes on Tavel Package work?", a: "Share whether you want hills, temples or both, with your dates. Up to 3 verified agents send itineraries with car, hotels and temple timings." },
    ],
    packagesDescription:
      "Customised Tamil Nadu tour packages for Ooty, Kodaikanal, Madurai, Rameswaram and Kanyakumari. Get up to 3 quotes from verified local agents.",
    guideDescription:
      "Tamil Nadu travel guide: Ooty and Kodaikanal, temple towns, best time to visit around the monsoon, how to reach and local tips.",
  },
};
