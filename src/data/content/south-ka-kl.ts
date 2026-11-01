import type { GuideContent } from "@/lib/locations";

// Karnataka and Kerala: city guides, place pages and destination additions.
// Road distances: OpenStreetMap via OSRM (non-stop estimates). No invented
// prices or ticket fares; no em dashes.

const hills = "Allow extra time on hill roads.";

export const SOUTH_CITIES: Record<string, GuideContent> = {
  bangalore: {
    intro:
      "Bengaluru (Bangalore), the capital of Karnataka, sits on the Deccan plateau at about 920 m, which keeps its weather mild all year. For travellers it is a gateway to Mysuru, Coorg, Chikmagalur, Hampi and the Kerala hills, with its own sights in Lalbagh, Cubbon Park, Bangalore Palace and Nandi Hills.",
    highlights: [
      "Lalbagh Botanical Garden and its glasshouse flower shows",
      "Bangalore Palace and Cubbon Park",
      "Nandi Hills for sunrise, about 60 km north",
      "Bannerghatta National Park and butterfly park, south of the city",
    ],
    idealDuration: "1 to 2 days",
    bestMonths: "October to February",
    gateway: "Kempegowda International Airport (BLR)",
    routes: [
      { from: "Bangalore", to: "Mysore", distanceKm: "About 140 km", time: "2 to 3 hours", how: "On the Bengaluru Mysuru expressway (NH 275); frequent trains and KSRTC buses." },
      { from: "Chennai", to: "Bangalore", distanceKm: "About 330 km", time: "5 to 6 hours by road, about 5 hours by Shatabdi or Vande Bharat", how: "By NH 48 via Vellore and Krishnagiri, by frequent trains, or a 1-hour flight. Bangalore to Chennai is the same route in reverse." },
      { from: "Coorg", to: "Bangalore", distanceKm: "About 250 to 260 km", time: "5 to 6 hours", how: `Via Mysuru and Kushalnagar. KSRTC buses run from Madikeri. ${hills}` },
      { from: "Bangalore", to: "Rameshwaram", distanceKm: "About 550 km", time: "10 to 11 hours", how: "By road via Krishnagiri, Salem, Madurai and the Pamban bridge, or by overnight train with a change at Madurai." },
    ],
    sections: {
      "places-to-visit": {
        intro: "Temples in Bangalore worth visiting include the Bull Temple (Dodda Basavana Gudi) in Basavanagudi, the Gavi Gangadhareshwara cave temple, the Banashankari temple and ISKCON Bangalore. The best known lakes in Bangalore are Ulsoor, Sankey and Hebbal, and the Government Aquarium is in Cubbon Park.",
      },
      "things-to-do": {
        intro: "Things to buy in Bangalore make good gifts: Mysore silk and sandalwood products from the state-run Cauvery emporium, GI-tagged Channapatna wooden toys and Bidriware. For wildlife near Bangalore, visit Bannerghatta National Park. New Year celebrations centre on MG Road, Brigade Road and Church Street, with heavy crowds and police restrictions.",
      },
    },
  },

  mysore: {
    intro:
      "Mysuru (Mysore), about 140 km south-west of Bengaluru, was the capital of the Wodeyar kings and is Karnataka's heritage city. Mysore Palace, rebuilt between 1897 and 1912, is lit with nearly 100,000 bulbs on Sunday evenings and during the 10-day Mysuru Dasara in September or October.",
    highlights: [
      "Mysore Palace (Amba Vilas)",
      "Chamundi Hills and the Nandi statue",
      "Brindavan Gardens at the KRS dam, about 20 km away",
      "St. Philomena's Church and Devaraja Market",
    ],
    idealDuration: "1 to 2 days",
    bestMonths: "October to February",
    gateway: "Mysuru station; Bengaluru airport (about 3 hours)",
    routes: [
      { from: "Mysore", to: "Ooty", distanceKm: "About 160 km", time: "4 to 5 hours", how: `Through Bandipur and Mudumalai forests and the Kalhatti ghat; forest check posts close to traffic at night. ${hills}` },
    ],
    faqs: [
      { q: "What are the places near Mysore?", a: "Srirangapatna (15 km), Brindavan Gardens at KRS (20 km), the Venugopala Swamy temple at Hosa Kannambadi, Somnathpur, and Bandipur and Nagarhole national parks." },
      { q: "What is the Venugopala Swamy temple near Mysore?", a: "A Hoysala-style temple that stood in the area flooded by the KRS reservoir. It was moved stone by stone and rebuilt at Hosa Kannambadi, on the reservoir's edge." },
      { q: "What is GRS Fantasy Park in Mysore?", a: "An amusement and water park on the KRS road outside Mysuru, popular with families. Check its website for timings and tickets." },
      { q: "What to buy from Mysore?", a: "Mysore silk sarees, sandalwood soap and oil, incense, Mysore pak and Ganjifa or rosewood crafts from Devaraja Market and the Cauvery emporium." },
      { q: "What are the Ooty to Mysore tourist places on the way?", a: "Mudumalai and Bandipur forests, Gundlupet, and a detour to Gopalaswamy Betta, plus Srirangapatna just before Mysuru." },
    ],
  },

  coorg: {
    intro:
      "Coorg (Kodagu) is a hilly coffee-growing district in south-west Karnataka, centred on Madikeri at about 1,150 m and about 250 km from Bengaluru. It is known for coffee and spice estates, homestays, Abbey Falls, Raja's Seat, Talacauvery, the source of the Kaveri, and the Tibetan Golden Temple at Bylakuppe.",
    highlights: [
      "Coffee estate stays and plantation walks",
      "Abbey Falls and Raja's Seat in Madikeri",
      "Dubare elephant camp on the Kaveri",
      "Namdroling Monastery (Golden Temple), Bylakuppe",
      "Tadiandamol, the highest peak in Kodagu",
    ],
    idealDuration: "2 to 3 days",
    bestMonths: "October to March; monsoon for waterfalls",
    gateway: "Mysuru station; Mangaluru or Bengaluru airports",
    routes: [
      { from: "Coorg", to: "Ooty", distanceKm: "About 270 km", time: "6 to 7 hours", how: `Via Kushalnagar, Mysuru or Gonikoppal, and the Bandipur and Mudumalai forests. ${hills}` },
      { from: "Coorg", to: "Kabini", distanceKm: "About 130 km", time: "3 hours", how: "Via Gonikoppal and Nagarhole; forest roads close to traffic at night." },
      { from: "Bangalore", to: "Coorg", distanceKm: "About 250 km to Madikeri", time: "5 to 6 hours", how: "Via Mysuru, Hunsur and Kushalnagar, or KSRTC buses to Madikeri." },
    ],
    sections: {
      "things-to-do": {
        intro: "Adventure sports in Coorg include white-water rafting on the Barapole river (mainly in the monsoon, with a licensed operator), river rafting at Dubare in season, treks to Tadiandamol and Kotebetta, ziplining and estate jeep trails.",
      },
    },
    packages: {
      intro: "Coorg tour packages usually run 2 to 3 nights from Bengaluru or Mysuru, with a homestay or estate resort, Abbey Falls, Raja's Seat, Dubare and the Golden Temple. Many add Mysuru on the way or Chikmagalur and Wayanad.",
    },
  },

  chikmagalur: {
    intro:
      "Chikmagalur (Chikkamagaluru) in Karnataka's Western Ghats is where coffee was first grown in India, from seeds traditionally said to have been brought by the saint Baba Budan. It has Mullayanagiri, the highest peak in Karnataka at about 1,930 m, Baba Budangiri, Hebbe and Jhari falls, and many coffee estate stays. It is about 240 km from Bengaluru.",
    idealDuration: "2 to 3 days",
    bestMonths: "September to March",
    gateway: "Kadur station; Mangaluru or Bengaluru airports",
  },

  gokarna: {
    intro:
      "Gokarna is a temple town and beach destination on Karnataka's Uttara Kannada coast, about 480 km from Bengaluru. The Mahabaleshwar temple is an important Shiva shrine, and a chain of beaches runs south of town: Kudle, Om Beach (shaped like the Om symbol), Half Moon and Paradise.",
    idealDuration: "2 to 3 days",
    bestMonths: "October to March",
    gateway: "Gokarna Road and Kumta stations; Goa (Dabolim) airport",
    faqs: [
      { q: "Are there water sports in Gokarna?", a: "Boat rides between the beaches and seasonal water sports at Om Beach and Kudle run from about October to May. The sea is rough in the monsoon and activities stop." },
    ],
  },

  udupi: {
    intro:
      "Udupi on Karnataka's coast is known for the Sri Krishna Matha, founded by the philosopher Madhvacharya in the 13th century, and for Udupi cuisine. Malpe beach is about 6 km away, and boats from Malpe go to St. Mary's Island, known for its basalt rock columns, outside the monsoon.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Udupi station; Mangaluru airport (about 60 km)",
    faqs: [
      { q: "What is special about the Udupi Krishna temple?", a: "Devotees view the deity through the Kanakana Kindi, a small window, linked to the story of the poet-saint Kanakadasa. The matha also serves free meals to visitors." },
      { q: "Which is the main beach in Udupi?", a: "Malpe beach, about 6 km away, with boat rides to St. Mary's Island. Kaup beach and its lighthouse are about 15 km south." },
    ],
  },

  munnar: {
    intro:
      "Munnar is a hill station at about 1,600 m in Kerala's Idukki district, surrounded by tea estates. It is about 130 km from Kochi. Eravikulam National Park protects the Nilgiri tahr, and Top Station, Mattupetty Dam and Devikulam are the main viewpoints around town.",
    highlights: [
      "Tea gardens and the tea museum",
      "Eravikulam National Park and the Nilgiri tahr",
      "Top Station and Mattupetty Dam",
      "Devikulam, about 7 km away",
    ],
    idealDuration: "2 to 3 days",
    bestMonths: "September to March",
    gateway: "Kochi airport (COK) or Aluva station",
    routes: [
      { from: "Kochi", to: "Munnar", distanceKm: "About 130 km", time: "4 hours", how: `Via Kothamangalam and Adimali on NH 85, past Cheeyappara and Valara falls. ${hills}` },
      { from: "Munnar", to: "Thekkady", distanceKm: "About 80 to 90 km", time: "3 hours", how: "Via Poopara and Kumily through cardamom country." },
      { from: "Alleppey", to: "Munnar", distanceKm: "About 150 km", time: "4 to 5 hours", how: "Via Kottayam or Kochi." },
    ],
    faqs: [
      { q: "When does Neelakurinji bloom in Munnar?", a: "Neelakurinji flowers once every 12 years on the slopes around Eravikulam; the last mass bloom was in 2018." },
      { q: "Are there houseboats in Munnar?", a: "No. Munnar is in the hills; houseboats are in the backwaters of Alleppey and Kumarakom. Munnar has boating at Mattupetty and Kundala dams." },
    ],
  },

  alleppey: {
    intro:
      "Alleppey (Alappuzha) is the centre of Kerala's backwaters, where most houseboat cruises on Vembanad Lake and the canals start. It is about 50 km from Kochi. The Nehru Trophy snake boat race is held on Punnamada Lake on the second Saturday of August.",
    highlights: ["Overnight houseboat cruises", "Village canal rides by shikara or canoe", "Alappuzha beach", "Nehru Trophy Boat Race in August"],
    idealDuration: "1 to 2 days",
    bestMonths: "September to March",
    gateway: "Alappuzha station; Kochi airport",
  },

  wayanad: {
    intro:
      "Wayanad is a hill district in north-east Kerala, about 270 km from both Bengaluru and Kochi, known for forests, spice and coffee estates, and wildlife. Tourist places to visit in Wayanad include the Edakkal caves with their ancient rock carvings, Banasura Sagar dam, Chembra Peak with its heart-shaped lake, Pookode Lake and the Muthanga wildlife sanctuary.",
    idealDuration: "2 to 3 days",
    bestMonths: "October to May",
    gateway: "Kozhikode airport and station",
    routes: [
      { from: "Bangalore", to: "Wayanad", distanceKm: "About 270 km", time: "6 hours", how: "Via Mysuru and Gundlupet; the Bandipur forest stretch closes to traffic at night." },
      { from: "Kochi", to: "Wayanad", distanceKm: "About 270 km", time: "6 to 7 hours", how: "Via Thrissur and Kozhikode, then the Thamarassery ghat." },
    ],
    thingsToKnow: ["Check district advisories in the monsoon: the 2024 landslides hit parts of Meppadi in July."],
  },

  vagamon: {
    intro:
      "Vagamon is a quiet hill station on the Kottayam and Idukki border at about 1,100 m, known for rolling meadows, a planted pine forest, the Kurisumala ashram and paragliding. It is about 100 km from Kochi. Kerala tourist places like Vagamon suit a slow day on the way between Kochi and Thekkady.",
    idealDuration: "1 day",
    bestMonths: "September to May",
    gateway: "Kottayam station; Kochi airport",
    routes: [{ from: "Kochi", to: "Vagamon", distanceKm: "About 100 km", time: "3 hours", how: "Via Thodupuzha or Pala." }],
  },

  thiruvananthapuram: {
    intro:
      "Thiruvananthapuram (Trivandrum) is Kerala's capital, home to the Sree Padmanabhaswamy temple, the Napier Museum and the zoo. Kovalam's beaches are about 20 km away and Varkala's cliff beach about 40 km.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Thiruvananthapuram airport (TRV)",
    faqs: [
      { q: "Is there a dress code at the Padmanabhaswamy temple?", a: "Yes. Men wear a mundu (dhoti) without a shirt, and women wear a saree or a dhoti over their clothes; only Hindus are allowed inside." },
    ],
  },
};

export const SOUTH_PLACES: Record<string, GuideContent> = {
  "bangalore/places-to-visit/nandi-hills": {
    intro:
      "Nandi Hills is a hill fort about 60 km north of Bengaluru at about 1,480 m, famous for sunrise views above the clouds. It has Tipu Sultan's summer retreat, Tipu's Drop cliff and the Yoga Nandeeshwara temple, and the older Bhoga Nandeeshwara temple stands at its foot.",
    faqs: [{ q: "What time should I reach Nandi Hills for sunrise?", a: "Arrive before the gates open at dawn; weekend queues of cars start well before sunrise, so leave Bengaluru by about 4.30 am." }],
  },
  "bangalore/places-to-visit/lalbagh": {
    intro:
      "Lalbagh Botanical Garden in Bengaluru was begun by Hyder Ali in 1760 and completed by Tipu Sultan. It covers about 240 acres and holds a glasshouse modelled on London's Crystal Palace, where flower shows are held around Republic Day and Independence Day.",
    faqs: [{ q: "Is there an entry ticket for Lalbagh?", a: "Yes, a small entry fee is charged, higher during flower shows. Check the Karnataka horticulture department notice for current Lalbagh ticket prices and timings." }],
  },
  "bangalore/places-to-visit/bangalore-palace": {
    intro:
      "Bangalore Palace is a Tudor-style palace built for the Wodeyar kings in the late 19th century, with turrets and battlements inspired by English castles. It is open to visitors with an audio guide; Bangalore Palace tickets are sold at the gate and differ for Indian and foreign visitors and for cameras.",
  },
  "mysore/places-to-visit/brindavan-gardens": {
    intro:
      "Brindavan Gardens is a terraced garden below the Krishna Raja Sagara (KRS) dam, about 20 km from Mysuru, best known for its evening musical fountain show. The gardens were laid out in the 1920s and 1930s.",
  },
  "gokarna/places-to-visit/om-beach": {
    intro:
      "Om Beach near Gokarna is named for its shape: two crescent coves joined like the Om symbol. It has shacks, boat rides to Half Moon and Paradise beaches, and calmer swimming at its southern end outside the monsoon.",
  },
  "udupi/places-to-visit/sri-krishna-matha": {
    intro:
      "The Udupi Sri Krishna Matha was founded by Madhvacharya in the 13th century. Devotees view the Krishna idol through the Kanakana Kindi window, and the matha's kitchens serve free meals to thousands of visitors daily.",
  },
  "thiruvananthapuram/places-to-visit/napier-museum": {
    intro:
      "The Napier Museum in Thiruvananthapuram is a 19th-century Indo-Saracenic building named after Lord Napier, Governor of Madras, holding bronzes, ivory carvings and temple chariots. It stands in the museum and zoo compound, which also houses the Sree Chitra Art Gallery.",
  },
};

export const SOUTH_DESTINATIONS: Record<string, Partial<GuideContent>> = {
  karnataka: {
    faqs: [
      { q: "Is Mysuru the same as Mysore, Karnataka?", a: "Yes. Mysore was officially renamed Mysuru in 2014; both names are used. It is about 140 km south-west of Bengaluru." },
    ],
  },
  kerala: {
    sections: {
      "places-to-visit": {
        intro: "Places to visit in Kerala: Munnar and Vagamon in the hills, Alleppey and Kumarakom in the backwaters, Thekkady for Periyar, Kochi for heritage, Wayanad for forests, and Kovalam and Varkala for beaches. A first trip usually links Kochi, Munnar, Thekkady and Alleppey.",
      },
    },
    packages: {
      themes: {
        "honeymoon-packages": {
          intro: "Honeymoon places in Kerala: a tea-estate resort in Munnar, a private houseboat night in Alleppey or Kumarakom, a spice-plantation stay in Thekkady and a beach finish at Kovalam or Varkala. Most Kerala honeymoon packages run 5 to 7 days from Kochi.",
        },
      },
    },
  },
};
