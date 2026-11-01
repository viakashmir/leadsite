import type { GuideContent } from "@/lib/locations";

// State guides, batch 1: Gujarat, Madhya Pradesh, Punjab, Odisha and Assam,
// which had no destination guide. Answer-first intros and FAQs so the main
// planning questions are answered in the first lines. Fact-based; park and
// festival seasons change year to year, so guides say "about" and "usually".
// No prices, no em dashes.

export const STATES_BATCH_1: Record<string, GuideContent> = {
  gujarat: {
    intro:
      "Gujarat is a west Indian state of white salt desert, Asiatic lions, temple towns and a long coastline. A 6 to 8 day trip usually combines Ahmedabad, the Statue of Unity, Gir National Park with Somnath and Dwarka, or the Rann of Kutch during the Rann Utsav season.\n\nAhmedabad is the main gateway, with direct flights from most Indian cities. Distances inside the state are long, so most travellers pick two regions per trip: Saurashtra (Gir, Somnath, Dwarka) or Kutch (the Rann, Bhuj, Dholavira).",
    highlights: [
      "The white desert of the Rann of Kutch, especially on full-moon nights during Rann Utsav",
      "Asiatic lions at Gir National Park, the only wild population in the world",
      "The Statue of Unity at Ekta Nagar, at 182 m the tallest statue in the world",
      "Somnath and Dwarka, two of Hinduism's most important temple towns",
      "Ahmedabad's old city, India's first UNESCO World Heritage City, and the Sabarmati Ashram",
      "Rani ki Vav stepwell at Patan and the Harappan site of Dholavira, both UNESCO World Heritage Sites",
    ],
    idealDuration: "6 to 8 days",
    bestMonths: "October to March",
    gateway: "Ahmedabad airport (AMD)",
    bestTimeToVisit:
      "October to March is the best time to visit Gujarat. Winter days are pleasant and dry, the Rann Utsav tent city near Dhordo runs from about November to February, and Navratri in September or October fills the state with garba nights.\n\nApril to June is very hot, especially in Kutch. Gir National Park closes to safaris from about mid-June to mid-October for the monsoon.",
    seasons: [
      { name: "Winter", months: "October to February", note: "Pleasant days, cool desert nights. Rann Utsav and the best wildlife season." },
      { name: "Summer", months: "March to June", note: "Hot to very hot; good lion sightings at Gir early in the morning until the park closes." },
      { name: "Monsoon", months: "July to September", note: "Green Saurashtra and Saputara, but Gir is closed and the Rann is flooded." },
    ],
    howToReach: {
      air: "Ahmedabad (AMD) is the main airport. Vadodara, Rajkot (Hirasar), Bhuj, Surat and Diu also have flights. For Gir, fly to Rajkot or Diu; for Kutch, fly to Bhuj.",
      rail: "Ahmedabad, Vadodara and Surat are major junctions with trains from Mumbai, Delhi and most of India. Veraval is the nearest station to Somnath and Gir; Dwarka and Bhuj have their own stations.",
      road: "Gujarat's highways are good. Ahmedabad to Gir is about 360 km, Ahmedabad to Bhuj about 330 km and Ahmedabad to the Statue of Unity about 200 km.",
      local: "Hire a cab for the trip; distances between regions are long and public transport to sights is limited.",
    },
    thingsToKnow: [
      "Gujarat is a dry state. Visitors can apply for a liquor permit, but most travellers simply plan around it.",
      "Gir safaris are booked online through the state forest department's permit system and sell out in peak months.",
      "Food is largely vegetarian, and Gujarati thalis and Jain food are easy to find.",
      "The Rann is best seen at sunset and on full-moon nights; carry warm layers for desert evenings.",
    ],
    faqs: [
      { q: "How many days are enough for Gujarat?", a: "Six to eight days covers two regions, such as Ahmedabad with Gir, Somnath and Dwarka, or Ahmedabad with the Rann of Kutch and Bhuj. Ten days covers both." },
      { q: "When is Rann Utsav?", a: "The Rann Utsav tent city near Dhordo usually runs from about November to February. Check the dates for the year before booking." },
      { q: "When is Gir National Park open?", a: "Gir is usually open for safaris from mid-October to mid-June and closed during the monsoon." },
      { q: "Is Gujarat good for a family trip?", a: "Yes. Safe roads, vegetarian-friendly food, lion safaris, the Statue of Unity and beaches at Diu and Mandvi suit families of all ages." },
    ],
  },

  "madhya-pradesh": {
    intro:
      "Madhya Pradesh is India's central state, known for tiger reserves, the temples of Khajuraho and the pilgrim towns of Ujjain and Omkareshwar. A 6 to 8 day trip usually pairs one tiger reserve (Kanha, Bandhavgarh or Pench) with Khajuraho and Orchha, or a pilgrimage circuit of Ujjain, Omkareshwar and Maheshwar.\n\nIndore, Bhopal, Jabalpur and Khajuraho have airports, and Madhya Pradesh is well connected by rail. Choose your gateway by the region you want to see.",
    highlights: [
      "Tiger safaris in Kanha, Bandhavgarh, Pench and Satpura",
      "The temples of Khajuraho, a UNESCO World Heritage Site",
      "Mahakaleshwar Jyotirlinga in Ujjain and Omkareshwar on the Narmada",
      "Orchha's riverside palaces and cenotaphs",
      "The Great Stupa at Sanchi and the rock shelters of Bhimbetka, both UNESCO sites",
      "Gwalior Fort, Mandu's Afghan palaces and Pachmarhi, the state's only hill station",
    ],
    idealDuration: "6 to 8 days",
    bestMonths: "October to March",
    gateway: "Indore (IDR), Bhopal (BHO), Jabalpur (JLR) or Khajuraho (HJR)",
    bestTimeToVisit:
      "October to March is the best time for sightseeing in Madhya Pradesh, with pleasant days. For tigers, the dry, hot months of March to June often give the best sightings, as animals gather at waterholes.\n\nThe core zones of the tiger reserves usually close from about July to September for the monsoon, when the countryside turns green and waterfalls in Pachmarhi are full.",
    seasons: [
      { name: "Winter", months: "October to February", note: "Pleasant days and cool nights; safaris and heritage both at their best." },
      { name: "Summer", months: "March to June", note: "Hot, but often the best tiger sightings." },
      { name: "Monsoon", months: "July to September", note: "Tiger reserve core zones closed; green landscapes and waterfalls." },
    ],
    howToReach: {
      air: "Indore (IDR) for Ujjain, Omkareshwar and Mandu; Bhopal (BHO) for Sanchi and Bhimbetka; Jabalpur (JLR) for Kanha and Bandhavgarh; Khajuraho (HJR) for the temples.",
      rail: "Bhopal, Itarsi, Jabalpur, Katni and Gwalior are on major lines. Jhansi in Uttar Pradesh is the usual station for Orchha and Khajuraho.",
      road: "Kanha is about 160 km from Jabalpur, Bandhavgarh about 200 km, and Ujjain about 55 km from Indore.",
      local: "A private cab is the easiest way to link parks and towns; safari vehicles are booked separately.",
    },
    thingsToKnow: [
      "Safari permits for the tiger reserves are booked online through the state forest department and sell out for weekends and holidays.",
      "Bhasma Aarti at Mahakaleshwar needs advance booking and has a dress code.",
      "Allow at least two nights per tiger reserve for a fair chance of a sighting.",
    ],
    faqs: [
      { q: "Which is the best tiger reserve in Madhya Pradesh?", a: "Bandhavgarh is known for a high density of tigers, Kanha for its meadows and the barasingha, and Pench for easy access from Nagpur. All three offer good chances with two or more nights." },
      { q: "How many days are enough for Madhya Pradesh?", a: "Six to eight days covers one tiger reserve with Khajuraho and Orchha, or the Ujjain, Omkareshwar and Maheshwar pilgrimage circuit." },
      { q: "When are the tiger reserves closed?", a: "Core zones are usually closed from about July to September during the monsoon. Some buffer zones stay open." },
      { q: "How far is Ujjain from Indore?", a: "About 55 km, roughly 1.5 hours by road." },
    ],
  },

  punjab: {
    intro:
      "Punjab is the north Indian state of the Golden Temple, the Wagah border ceremony and some of India's best food. Most trips centre on Amritsar for 2 to 3 days, often combined with Chandigarh, Anandpur Sahib or a drive on to Dharamshala and Dalhousie in Himachal Pradesh.\n\nAmritsar's Sri Guru Ram Dass Jee International Airport has flights from across India, and Amritsar is about 450 km from Delhi by road or a few hours by train.",
    highlights: [
      "Harmandir Sahib, the Golden Temple, and its round-the-clock langar",
      "The Beating Retreat ceremony at the Attari-Wagah border every evening",
      "Jallianwala Bagh and the Partition Museum in Amritsar",
      "Anandpur Sahib, especially during the Hola Mohalla festival",
      "Patiala's Qila Mubarak and the Sheesh Mahal",
      "Amritsari kulcha, lassi and dhaba food",
    ],
    idealDuration: "2 to 4 days",
    bestMonths: "October to March",
    gateway: "Amritsar airport (ATQ)",
    bestTimeToVisit:
      "October to March is the best time to visit Punjab, with cool days and cold, sometimes foggy, winter nights. Gurpurab and Diwali light up the Golden Temple, and Baisakhi in April is the harvest festival.\n\nMay and June are very hot. The monsoon from July to September is humid but the Golden Temple can be visited all year.",
    seasons: [
      { name: "Winter", months: "October to March", note: "Pleasant days; fog can delay early trains and flights in December and January." },
      { name: "Summer", months: "April to June", note: "Very hot; visit the temple early morning or late evening." },
      { name: "Monsoon", months: "July to September", note: "Humid, with green fields." },
    ],
    howToReach: {
      air: "Sri Guru Ram Dass Jee International Airport (ATQ) in Amritsar has direct flights from major Indian cities.",
      rail: "Amritsar Junction has fast trains from Delhi, including Shatabdi and Vande Bharat services, and long-distance trains from across India.",
      road: "Amritsar is about 450 km from Delhi on NH44 and about 230 km from Chandigarh. Attari-Wagah is about 30 km from Amritsar.",
      local: "Autos and cabs are easy to find in Amritsar; hire a cab for the Wagah border trip.",
    },
    thingsToKnow: [
      "Cover your head and remove shoes at the Golden Temple; head scarves are available at the entrance.",
      "Reach the Wagah border at least an hour before the ceremony for a good seat; carry ID and leave bags at the hotel.",
      "The Golden Temple is open around the clock, and the early morning and late night are calmer.",
    ],
    faqs: [
      { q: "How many days are enough for Amritsar?", a: "Two days covers the Golden Temple, Jallianwala Bagh, the Partition Museum and the Wagah border ceremony. Add a day for food walks or Anandpur Sahib." },
      { q: "What time is the Wagah border ceremony?", a: "It is held every evening before sunset, so the start time changes with the season. Arrive at least an hour early." },
      { q: "Can non-Sikhs visit the Golden Temple?", a: "Yes. Visitors of every faith are welcome. Cover your head, remove your shoes and wash your feet before entering." },
      { q: "What can I combine with Amritsar?", a: "Dharamshala and McLeodganj (about 200 km) or Dalhousie (about 200 km) in Himachal Pradesh, or Chandigarh on the way from Delhi." },
    ],
  },

  odisha: {
    intro:
      "Odisha is an east Indian state of great temples, quiet beaches and Chilika, Asia's largest brackish-water lagoon. A 5 to 7 day trip usually covers the golden triangle of Bhubaneswar, Puri and Konark, with a day on Chilika Lake, and can extend to Bhitarkanika or the tribal south.\n\nBhubaneswar's airport has flights from most Indian cities, and Puri is about 60 km away by road or rail.",
    highlights: [
      "The Jagannath Temple in Puri and the Rath Yatra chariot festival",
      "The Sun Temple at Konark, a UNESCO World Heritage Site",
      "Bhubaneswar's temples, including Lingaraj and Mukteshwar",
      "Chilika Lake: Irrawaddy dolphins near Satapada and winter birds at Mangalajodi",
      "Mangroves and saltwater crocodiles at Bhitarkanika",
      "The Konark Dance Festival in early December and Puri's beaches",
    ],
    idealDuration: "5 to 7 days",
    bestMonths: "October to March",
    gateway: "Bhubaneswar airport (BBI)",
    bestTimeToVisit:
      "October to March is the best time to visit Odisha. The weather is pleasant, migratory birds fill Chilika from about November to February, and the Konark Dance Festival is usually held from 1 to 5 December.\n\nRath Yatra in Puri falls in June or July and draws huge crowds; book months ahead. April to June is hot and humid, and the monsoon brings heavy rain and the occasional cyclone.",
    seasons: [
      { name: "Winter", months: "October to February", note: "Pleasant and dry; best for Chilika birds and beaches." },
      { name: "Summer", months: "March to June", note: "Hot and humid; Rath Yatra in June or July." },
      { name: "Monsoon", months: "July to September", note: "Heavy rain; green countryside, rough seas." },
    ],
    howToReach: {
      air: "Biju Patnaik International Airport in Bhubaneswar (BBI) is the main gateway.",
      rail: "Bhubaneswar and Puri have trains from Kolkata, Delhi, Chennai, Hyderabad and other cities.",
      road: "Puri is about 60 km from Bhubaneswar, Konark about 65 km, and Satapada on Chilika about 50 km from Puri.",
      local: "A cab for the Bhubaneswar, Puri and Konark circuit is the easiest; Puri has autos and cycle rickshaws.",
    },
    thingsToKnow: [
      "Only Hindus are allowed inside the Jagannath Temple in Puri; others can view it from nearby rooftops and the library.",
      "Leather items, phones and cameras are not allowed inside the Puri temple.",
      "The sea at Puri has strong currents; swim only where lifeguards are on duty.",
    ],
    faqs: [
      { q: "How many days are enough for Odisha?", a: "Five days covers Bhubaneswar, Puri, Konark and Chilika. Add two days for Bhitarkanika or Gopalpur." },
      { q: "When is Rath Yatra in Puri?", a: "It falls in June or July, on the second day of the bright fortnight of the Hindu month of Ashadha. Dates change every year." },
      { q: "Where can I see dolphins in Chilika?", a: "Boats from Satapada take visitors to see Irrawaddy dolphins near the lake's mouth; mornings are best." },
      { q: "Can non-Hindus enter the Jagannath Temple?", a: "No. Entry is restricted to Hindus, but the temple and its festivals can be seen from outside." },
    ],
  },

  assam: {
    intro:
      "Assam is the gateway to north-east India, known for one-horned rhinos at Kaziranga, the Brahmaputra river, tea gardens and the river island of Majuli. A 5 to 7 day trip usually covers Guwahati, Kaziranga and Majuli, and many travellers add Shillong and Cherrapunji in neighbouring Meghalaya.\n\nGuwahati's airport is the main hub for the whole north-east, with flights from most Indian cities.",
    highlights: [
      "Jeep and elephant safaris for the one-horned rhino in Kaziranga, a UNESCO World Heritage Site",
      "Majuli, one of the world's largest river islands, and its Vaishnavite satras",
      "The Kamakhya Temple on Nilachal Hill in Guwahati",
      "Tea estate stays around Jorhat and Dibrugarh",
      "Manas National Park, another UNESCO site, on the Bhutan border",
      "Sunset cruises on the Brahmaputra and the Ahom monuments of Sivasagar",
    ],
    idealDuration: "5 to 7 days",
    bestMonths: "November to April",
    gateway: "Guwahati airport (GAU)",
    bestTimeToVisit:
      "November to April is the best time to visit Assam. Kaziranga usually opens for safaris from around November and closes in the monsoon, roughly May to October, when floods cover much of the park. Rongali Bihu, the Assamese new year, is celebrated in mid-April.\n\nThe monsoon from June to September brings heavy rain and floods in many districts, though Guwahati and tea country stay accessible.",
    seasons: [
      { name: "Winter", months: "November to February", note: "Cool, dry and the best time for Kaziranga and Majuli." },
      { name: "Spring", months: "March to April", note: "Warmer; Bihu festival in mid-April; parks still open." },
      { name: "Monsoon", months: "May to October", note: "Heavy rain and floods; Kaziranga closed." },
    ],
    howToReach: {
      air: "Lokpriya Gopinath Bordoloi International Airport in Guwahati (GAU) is the main gateway. Jorhat and Dibrugarh have flights for upper Assam and Majuli.",
      rail: "Guwahati is the main railway hub of the north-east, with trains from Delhi, Kolkata and other cities.",
      road: "Kaziranga is about 200 km from Guwahati (4 to 5 hours). Majuli is reached by ferry from Nimati Ghat near Jorhat.",
      local: "Hire a cab for the circuit. Ferries to Majuli run several times a day, weather and water levels permitting.",
    },
    thingsToKnow: [
      "Kaziranga's safari zones (Central, Western, Eastern and Burapahar) are booked through the park's official system; morning slots are best.",
      "The Majuli ferry timings change with the season; plan a buffer.",
      "Sunrise and sunset are early in the north-east, so start days early.",
    ],
    faqs: [
      { q: "When is Kaziranga National Park open?", a: "Usually from around November to April. It closes in the monsoon, roughly May to October, when much of the park floods. Check the dates each year." },
      { q: "How many days are enough for Assam?", a: "Five days covers Guwahati, Kaziranga and Majuli. Add two or three days to include Shillong and Cherrapunji in Meghalaya." },
      { q: "How do I reach Majuli?", a: "Drive to Nimati Ghat near Jorhat and take the ferry across the Brahmaputra to Kamalabari on Majuli." },
      { q: "Can I combine Assam and Meghalaya?", a: "Yes. Shillong is about three hours from Guwahati, which makes a 7 to 8 day Assam and Meghalaya trip easy." },
    ],
  },
};
