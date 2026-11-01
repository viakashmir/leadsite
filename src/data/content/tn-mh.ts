import type { GuideContent } from "@/lib/locations";

// Tamil Nadu and Maharashtra. Road distances from OpenStreetMap (OSRM),
// non-stop estimates. No invented prices; no em dashes.

const hills = "Allow extra time on hill roads.";

export const TN_MH_CITIES: Record<string, GuideContent> = {
  ooty: {
    faqs: [{ q: "What are Ooty's main attractions?", a: 'The Botanical Garden, Ooty Lake, Doddabetta Peak, the Rose Garden, the Nilgiri Mountain Railway and Pykara falls and lake.' }],
    intro:
      "Ooty (Udhagamandalam) is the main hill station of the Nilgiris in Tamil Nadu, at about 2,240 m. Its main attractions are the Government Botanical Garden, Ooty Lake, Doddabetta, the highest peak in the Nilgiris, tea estates, and the Nilgiri Mountain Railway, a UNESCO World Heritage toy train from Mettupalayam. It is about 100 km from Coimbatore.",
    highlights: ["Government Botanical Garden and the May flower show", "Doddabetta Peak", "Ooty Lake boating", "Nilgiri Mountain Railway", "Pykara falls and lake"],
    idealDuration: "2 to 3 days",
    bestMonths: "October to June",
    gateway: "Coimbatore airport (CJB) and Mettupalayam station",
    routes: [
      { from: "Coimbatore", to: "Ooty", distanceKm: "About 100 km", time: "3 hours", how: `Via Mettupalayam and the Coonoor ghat road (NH 181), or the toy train from Mettupalayam. ${hills}` },
      { from: "Ooty", to: "Kodaikanal", distanceKm: "About 250 km", time: "7 to 8 hours", how: "Via Coimbatore, Palani and the Palani ghat road. There is no direct hill route between the two." },
    ],
    sections: {
      "places-to-visit": {
        intro: "Ooty's main attractions and places to visit: the Botanical Garden, Rose Garden, Ooty Lake, Doddabetta Peak, the Tea Factory and Museum, Pykara falls and lake, the Pine Forest and Shooting Point on the Pykara road, Avalanche Lake, and Coonoor's Sim's Park and Dolphin's Nose.",
      },
    },
  },

  kodaikanal: {
    faqs: [{ q: 'Which are the sightseeing places in Kodaikanal?', a: "Kodai Lake, Coaker's Walk, Bryant Park, Pillar Rocks, Guna Caves, Green Valley View, Silver Cascade and Berijam Lake (forest permit)." }],
    intro:
      "Kodaikanal is a hill station in Dindigul district at about 2,130 m in the Palani hills, built around a star-shaped lake. Sightseeing places in Kodaikanal include Kodai Lake, Coaker's Walk, Pillar Rocks, Bryant Park, Guna Caves, Green Valley View and the Silver Cascade falls on the ghat road.",
    idealDuration: "2 to 3 days",
    bestMonths: "September to June",
    gateway: "Madurai airport (about 120 km); Kodai Road station",
    routes: [
      { from: "Chennai", to: "Kodaikanal", distanceKm: "About 510 km", time: "9 to 10 hours", how: "Via Trichy and Dindigul, or by overnight train to Kodai Road and a 3-hour drive." },
      { from: "Kodaikanal", to: "Ooty", distanceKm: "About 250 km", time: "7 to 8 hours", how: "Via Palani, Pollachi or Coimbatore, and Mettupalayam." },
    ],
    packages: {
      fromOrigins: {
        chennai: { intro: "Chennai to Kodaikanal trip packages usually run 3 to 4 days by overnight train to Kodai Road or by road via Trichy, with two nights in Kodaikanal and an optional day in Madurai." },
      },
    },
  },

  yercaud: {
    intro: "Yercaud is a small hill station in the Shevaroy hills near Salem, at about 1,500 m, known for its lake, Lady's Seat viewpoint, coffee estates and Killiyur falls.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to June",
    gateway: "Salem, about 30 km",
    routes: [{ from: "Chennai", to: "Yercaud", distanceKm: "About 360 km", time: "6 to 7 hours", how: "Via Vellore or Villupuram to Salem, then the 20-hairpin ghat road." }],
  },

  coonoor: {
    faqs: [{ q: 'Which are the falls near Coonoor?', a: "Catherine Falls on the Kotagiri road and Law's Falls on the Mettupalayam road, best after the monsoon." }],
    intro: "Coonoor is a quieter Nilgiri hill town about 20 km below Ooty, known for tea estates, Sim's Park, Dolphin's Nose, Lamb's Rock, and Catherine and Law's falls nearby.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to June",
    gateway: "Coimbatore airport; Coonoor station on the toy train",
  },

  chennai: {
    faqs: [{ q: 'What are the places to see in Chennai?', a: 'Marina Beach, Kapaleeshwarar temple, Fort St. George, San Thome Basilica, the Government Museum and DakshinaChitra.' },{ q: 'Can I book a Shimla package from Chennai?', a: 'Yes. Shimla packages from Chennai usually fly to Chandigarh or Delhi, then drive to Shimla, often adding Manali; plan 6 to 7 days.' },{ q: 'Which 3 days tour packages from Chennai are popular?', a: 'Pondicherry and Mahabalipuram, Yercaud, Tirupati, Kodaikanal by overnight train, and Ooty by flight to Coimbatore.' }],
    intro:
      "Chennai, the capital of Tamil Nadu, is a coastal city known for Marina Beach, the Kapaleeshwarar temple in Mylapore, Fort St. George, the San Thome cathedral and Carnatic music. It is the gateway to Mahabalipuram (about 60 km), Kanchipuram and Pondicherry.",
    idealDuration: "1 to 2 days",
    bestMonths: "November to February",
    gateway: "Chennai airport (MAA) and Chennai Central",
    routes: [
      { from: "Chennai", to: "Coimbatore", distanceKm: "About 520 km", time: "8 to 9 hours by road, about 7 hours by train", how: "Via Salem on NH 544; frequent trains and a 1-hour flight." },
      { from: "Chennai", to: "Mahabalipuram", distanceKm: "About 60 km", time: "1.5 hours", how: "On the East Coast Road (ECR)." },
    ],
    sections: {
      "places-to-visit": {
        intro: "Places to see in Chennai: Marina Beach, Kapaleeshwarar temple and Mylapore, Fort St. George and its museum, San Thome Basilica, Government Museum, DakshinaChitra on ECR, and Elliot's Beach. Temples in Chennai include Kapaleeshwarar, Parthasarathy in Triplicane, Ashtalakshmi in Besant Nagar and Vadapalani Murugan.",
      },
    },
  },

  madurai: {
    intro: "Madurai, one of the oldest cities in Tamil Nadu, grew around the Meenakshi Amman temple with its towering gopurams. Thirumalai Nayakkar Mahal and the Gandhi Museum are nearby, and Madurai is the gateway to Rameswaram (about 170 km) and Kanyakumari (about 240 km).",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Madurai airport (IXM)",
    faqs: [{ q: "What are the things to buy in Madurai?", a: "Madurai sungudi cotton sarees, brass lamps and bell-metal items, jasmine from the flower market, and jigarthanda to drink while you are there." }],
  },

  kanyakumari: {
    faqs: [{ q: 'Where is Kanyakumari in Tamilnadu?', a: 'At the southern tip of mainland India in Kanyakumari district, about 90 km from Thiruvananthapuram and 240 km from Madurai.' }],
    intro: "Kanyakumari, at the southern tip of mainland India in Tamil Nadu, is where the Arabian Sea, Bay of Bengal and Indian Ocean meet. It is known for sunrise and sunset over the sea, the Vivekananda Rock Memorial and the 133-foot Thiruvalluvar statue, linked by a glass bridge since 2024.",
    idealDuration: "1 day",
    bestMonths: "October to March",
    gateway: "Thiruvananthapuram airport (about 90 km)",
  },

  mahabalipuram: {
    intro: "Mahabalipuram (Mamallapuram), about 60 km south of Chennai, holds the 7th and 8th century Pallava monuments inscribed by UNESCO in 1984: the Shore Temple, the Pancha Rathas and the Arjuna's Penance rock relief.",
    idealDuration: "1 day",
    bestMonths: "November to February",
    gateway: "Chennai",
  },

  mumbai: {
    faqs: [{ q: 'What are the tourist attractions near Mumbai?', a: 'Lonavala, Khandala, Matheran, Alibaug, Elephanta Caves, Kanheri Caves and Karnala bird sanctuary are within a day trip.' },{ q: 'Can you visit Film City in Mumbai?', a: 'Yes, Dadasaheb Phalke Chitranagari (Film City) in Goregaon runs guided studio tours; book through the Maharashtra film city or MTDC tour operators.' }],
    intro: "Mumbai, the capital of Maharashtra and India's financial centre, is known for Marine Drive, the Gateway of India, Elephanta Caves, Chhatrapati Shivaji Terminus (a UNESCO site), Siddhivinayak temple and Bollywood's Film City in Goregaon.",
    highlights: ["Gateway of India and the Taj Mahal Palace hotel", "Marine Drive at sunset", "Elephanta Caves by ferry", "Chhatrapati Shivaji Maharaj Terminus", "Colaba, Kala Ghoda and Bandra"],
    idealDuration: "2 to 3 days",
    bestMonths: "November to February",
    gateway: "Mumbai airport (BOM)",
    routes: [
      { from: "Mumbai", to: "Nashik", distanceKm: "About 180 km", time: "4 hours", how: "On the Mumbai Agra highway (NH 160) via Kasara ghat; frequent trains." },
      { from: "Pune", to: "Mumbai", distanceKm: "About 150 km", time: "3 to 4 hours", how: "On the Mumbai Pune expressway; frequent trains such as the Deccan Queen." },
      { from: "Nagpur", to: "Mumbai", distanceKm: "About 700 to 800 km", time: "10 to 12 hours", how: "On the Samruddhi expressway or by overnight train; about 1.5 hours by air." },
      { from: "Mumbai", to: "Spiti", distanceKm: "No direct route", how: "Fly to Chandigarh or Delhi, then continue by road via Shimla or Manali." },
    ],
    sections: {
      "places-to-visit": {
        intro: "Tourist attractions near Mumbai for a day or weekend: Lonavala and Khandala (about 90 km), Alibaug, Matheran, Karnala bird sanctuary, Elephanta Caves and Kanheri Caves in Sanjay Gandhi National Park.",
      },
      "things-to-do": {
        intro: "Things to do in Mumbai: walk Marine Drive at sunset, take the ferry to Elephanta, explore Colaba and Kala Ghoda, eat vada pav and street food at Chowpatty, visit Siddhivinayak and Haji Ali, and tour Film City or Dharavi with a licensed guide.",
      },
    },
    packages: {
      themes: {
        "honeymoon-packages": { intro: "Honeymoon packages from Mumbai usually fly to Goa, Kashmir, Kerala, Andaman, Bali, Maldives or Thailand. Share your dates and budget and agents will compare options from Mumbai." },
      },
    },
  },

  lonavala: {
    intro: "Lonavala and neighbouring Khandala are hill stations in the Sahyadris on the Mumbai Pune expressway, about 90 km from Mumbai, known for monsoon waterfalls, Tiger Point, Bhushi Dam, the Karla and Bhaja caves and chikki.",
    idealDuration: "1 to 2 days",
    bestMonths: "June to September for monsoon, October to February",
    gateway: "Lonavala station",
    routes: [{ from: "Mumbai", to: "Lonavala", distanceKm: "About 90 km", time: "2 hours", how: "On the Mumbai Pune expressway, or by local and long-distance trains." }],
  },

  mahabaleshwar: {
    intro: "Mahabaleshwar is a hill station at about 1,350 m in Satara district, about 120 km from Pune and 210 km from Mumbai, known for strawberries, Venna Lake, Arthur's Seat and Pratapgad fort. Old Mahabaleshwar has the Mahabaleshwar temple, a Shiva shrine near the source of the Krishna river.",
    idealDuration: "2 days",
    bestMonths: "October to June",
    gateway: "Pune airport and station",
    faqs: [
      { q: "Mahabaleshwar vs Lonavala: which is better?", a: "Lonavala is closer to Mumbai and Pune and best in the monsoon; Mahabaleshwar is higher, cooler and better for a 2-day stay with strawberry farms and viewpoints." },
      { q: "Which is the Mahabaleshwar mandir?", a: "The Mahabaleshwar temple in Old Mahabaleshwar, a Shiva temple, stands near the Panchganga temple where five rivers are said to start." },
    ],
  },

  matheran: {
    faqs: [{ q: 'Is Matheran good in summer?', a: 'Yes. At about 800 m and car-free, Matheran stays cooler than Mumbai from March to May, and is a popular summer weekend escape.' }],
    intro: "Matheran is a car-free hill station near Mumbai at about 800 m, reached by road to Dasturi or by the Neral Matheran toy train. In summer it stays cooler than Mumbai, with walks to Panorama Point and Charlotte Lake.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to May",
    gateway: "Neral station",
  },

  alibaug: {
    intro: "Alibaug (Alibag) is a coastal town in Raigad district, reached from Mumbai by ferry or ro-ro to Mandwa. It has Kolaba Fort, Nagaon and Kashid beaches, and many weekend villas.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to May",
    gateway: "Mandwa jetty",
  },

  pune: {
    faqs: [{ q: 'What is the distance from Pune to Mumbai?', a: 'About 150 km by the Mumbai Pune expressway, roughly 3 to 4 hours.' }],
    intro: "Pune is a historic Maratha city about 150 km from Mumbai, known for Shaniwar Wada, the Aga Khan Palace, Sinhagad fort and as a base for Mahabaleshwar, Lonavala and Lavasa. Pune distance to Mumbai is about 150 km by the expressway.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Pune airport (PNQ)",
  },

  nashik: {
    intro: "Nashik on the Godavari is a pilgrimage and wine city about 180 km from Mumbai, with Trimbakeshwar Jyotirlinga, Panchavati and Ramkund, and Sula Vineyards. It hosts the Kumbh Mela every 12 years.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Nashik Road station",
  },
};

export const TN_MH_PLACES: Record<string, GuideContent> = {
  "mumbai/places-to-visit/marine-drive": {
    intro: "Marine Drive is a 3.6 km seafront boulevard in south Mumbai along Back Bay, from Nariman Point to Girgaum Chowpatty. Its curve of streetlights at night earned it the name Queen's Necklace, and its Art Deco buildings are part of a UNESCO World Heritage Site inscribed in 2018.",
  },
  "mumbai/places-to-visit/gateway-of-india": {
    intro: "The Gateway of India is a basalt arch on the Apollo Bunder waterfront in Colaba, Mumbai, completed in 1924. Ferries leave from here for Elephanta Caves and Mandwa.",
  },
  "mumbai/places-to-visit/siddhivinayak-temple": {
    intro: "Siddhivinayak is a Ganesh temple in Prabhadevi, Mumbai, built in 1801. It is open daily from early morning to late night, with special queues on Tuesdays; check the temple trust's website for current Siddhivinayak temple timings and aarti times.",
    faqs: [{ q: "What are the Siddhivinayak temple timings?", a: "The temple opens early in the morning and closes late at night, with longer hours on Tuesdays. Timings change for festivals, so check the Shree Siddhivinayak Temple Trust website before you go." }],
  },
  "chennai/places-to-visit/kapaleeshwarar-temple": {
    intro: "The Kapaleeshwarar temple in Mylapore, Chennai, is a Dravidian-style Shiva temple with a 37 m gopuram, rebuilt in the 16th century. Its Panguni festival in March or April draws large crowds.",
  },
  "kodaikanal/places-to-visit/bryant-park": {
    intro: "Bryant Park is a botanical garden on the eastern side of Kodai Lake, laid out in 1908, known for its glasshouse, roses and the flower show held in May.",
  },
};

export const TN_MH_DESTINATIONS: Record<string, Partial<GuideContent>> = {
  "tamil-nadu": {
    faqs: [
      { q: "Where is the Rameshwaram temple in Tamil Nadu?", a: "The Ramanathaswamy temple is on Rameswaram island in Ramanathapuram district, linked to the mainland by the Pamban bridges, about 170 km from Madurai. It is one of the 12 Jyotirlingas and is known for its long pillared corridors." },
    ],
  },
  maharashtra: {
    intro:
      "Maharashtra in western India combines Mumbai, Sahyadri hill stations such as Mahabaleshwar, Lonavala and Matheran, the UNESCO-listed Ajanta and Ellora caves, Konkan beaches around Alibaug and Ganpatipule, pilgrim towns such as Shirdi, Nashik and Pandharpur, and tiger reserves such as Tadoba.",
    bestMonths: "October to March; June to September for monsoon hills",
    faqs: [
      { q: "Which are the best places to visit in May in Maharashtra?", a: "Hill stations stay coolest: Mahabaleshwar, Panchgani, Matheran, Lonavala, Bhandardara and Malshej Ghat." },
      { q: "Where is Shirdi in Maharashtra?", a: "In Ahmednagar district, about 240 km from Mumbai and 90 km from Nashik, home of the Sai Baba Samadhi Mandir." },
    ],
  },
};
