import type { GuideContent } from "@/lib/locations";

// Remaining Indian states and UTs, plus FAQ fixes for gaps left in earlier
// batches. Road distances: OpenStreetMap (OSRM). Timings and ticket prices
// are not stated; official sources are named instead. No em dashes.

export const REST_CITIES: Record<string, GuideContent> = {
  hyderabad: {
    intro: "Hyderabad, Telangana's capital, is known for the Charminar (1591), Golconda Fort, Chowmahalla Palace, Hussain Sagar lake, Ramoji Film City and Hyderabadi biryani. Things to do in Hyderabad include the Laad Bazaar bangle market, Salar Jung Museum, the light and sound show at Golconda and the indoor Snow World theme park near Lower Tank Bund.",
    idealDuration: "2 to 3 days",
    bestMonths: "October to February",
    gateway: "Rajiv Gandhi International Airport (HYD)",
    routes: [{ from: "Hyderabad", to: "Srisailam", distanceKm: "About 210 km", time: "5 hours", how: "Via the Nallamala forest ghat road; forest gates close to traffic at night." }],
    faqs: [
      { q: "Which are the famous temples in Hyderabad?", a: "Birla Mandir on Naubat Pahad, Chilkur Balaji, Jagannath temple in Banjara Hills, Peddamma temple and Yadadri (Yadagirigutta) about 60 km away." },
      { q: "What is Snow World in Hyderabad?", a: "An indoor snow theme park near Lower Tank Bund with artificial snow, slides and snow play, popular with families in the summer." },
    ],
    packages: {
      intro: "Holiday packages and tour packages from Hyderabad: short trips go to Srisailam, Araku and Goa; flights connect to Kashmir, Kerala, Andaman and international packages such as Dubai, Thailand, Singapore, Bali and Maldives.",
      faqs: [{ q: "Are there international travel packages from Hyderabad?", a: "Yes. Direct flights from Hyderabad serve Dubai, Bangkok, Singapore, Kuala Lumpur and others; agents build packages around them." }],
    },
  },
  indore: {
    intro: "Indore, Madhya Pradesh's largest city, is known for Rajwada palace, the Lal Bagh palace, Sarafa Bazaar's night food street and Chhappan Dukan. Places in Indore make a good base for Ujjain (about 57 km), Omkareshwar (about 80 km), Mandu and Maheshwar.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Devi Ahilyabai Holkar airport (IDR)",
    routes: [
      { from: "Indore", to: "Ujjain", distanceKm: "About 57 km", time: "1.5 hours", how: "On the Indore Ujjain highway; frequent buses and trains." },
      { from: "Indore", to: "Omkareshwar", distanceKm: "About 80 km", time: "2 hours", how: "Via Simrol and Barwaha." },
    ],
    faqs: [
      { q: "What is Rajwada in Indore?", a: "The seven-storey palace of the Holkar rulers in the old city, built in the 18th century, now surrounded by markets." },
      { q: "What are the Indore zoo timings?", a: "Kamla Nehru Prani Sangrahalaya opens in the day and is closed one day a week; check the Indore Municipal Corporation notice for current timings." },
    ],
  },
  ujjain: {
    intro: "Ujjain on the Shipra river is home to the Mahakaleshwar Jyotirlinga, known for its early-morning Bhasma Aarti, the Mahakal Lok corridor, the Kal Bhairav temple and Ram Ghat. It hosts the Simhastha Kumbh every 12 years.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Indore airport (about 55 km)",
    routes: [{ from: "Ujjain", to: "Omkareshwar", distanceKm: "About 135 km", time: "3 to 3.5 hours", how: "Via Indore; many pilgrims cover both Jyotirlingas in two days." }],
    faqs: [
      { q: "Which are the main mandirs in Ujjain?", a: "Mahakaleshwar (Mahakal) mandir, Kal Bhairav, Harsiddhi, Chintaman Ganesh, Mangalnath and Sandipani Ashram." },
      { q: "How do I book the Mahakal Bhasma Aarti?", a: "Through the Shri Mahakaleshwar temple's official booking website, usually well in advance; a dress code applies." },
    ],
  },
  omkareshwar: {
    intro: "Omkareshwar is a Jyotirlinga on Mandhata island in the Narmada, shaped like the Om symbol, about 80 km from Indore. The Mamleshwar temple on the south bank is visited on the same trip.",
    idealDuration: "1 day",
    bestMonths: "October to March",
    gateway: "Indore",
  },
  bhopal: {
    intro: "Bhopal, the capital of Madhya Pradesh, is the City of Lakes, known for the Upper Lake, Taj-ul-Masajid and Tribal Museum, and is the base for the UNESCO sites of Sanchi Stupa (about 50 km) and Bhimbetka rock shelters (about 45 km).",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Raja Bhoj airport (BHO)",
  },
  tirupati: {
    intro: "Tirupati in Andhra Pradesh is the base for the Sri Venkateswara temple at Tirumala, one of the most visited temples in the world. Darshan tickets, accommodation and laddu are booked through the TTD (Tirumala Tirupati Devasthanams) website. Tirupati is about 135 km from Chennai.",
    idealDuration: "1 to 2 days",
    bestMonths: "September to March",
    gateway: "Tirupati airport and station",
    faqs: [{ q: "How do I visit the Tirupati temple (kovil)?", a: "Book darshan online on the TTD website, travel up to Tirumala by road or the Alipiri footpath, follow the dress code, and allow several hours for the queue." }],
  },
  "araku-valley": {
    intro: "Araku Valley is a hill area in the Eastern Ghats about 115 km from Visakhapatnam, known for coffee plantations, the Borra limestone caves and a scenic rail journey through tunnels from Vizag.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Visakhapatnam",
  },
  amritsar: {
    intro: "Amritsar in Punjab is home to the Golden Temple (Harmandir Sahib), Jallianwala Bagh, the Partition Museum and the Wagah-Attari border ceremony about 29 km away. Kesar Da Dhaba and the old city's kulcha and lassi shops are part of most visits. Entry to the Golden Temple and its langar is free.",
    idealDuration: "2 days",
    bestMonths: "October to March",
    gateway: "Sri Guru Ram Dass Jee airport (ATQ)",
    faqs: [
      { q: "What are the places to visit near Amritsar?", a: "Wagah-Attari border (about 29 km), Goindwal Sahib, Tarn Taran Sahib, Harike wetland, and Dalhousie and Dharamshala a few hours away." },
      { q: "What are the Wagah border parade timings?", a: "The Beating Retreat ceremony starts before sunset, around 4.15 to 5.15 pm depending on the season; arrive early as gates close before the parade." },
      { q: "Is there an entry price at the Golden Temple?", a: "No. Entry and the langar meal are free; cover your head and remove shoes." },
      { q: "What is Kesar Da Dhaba in Amritsar?", a: "A vegetarian eatery near Chowk Passian in the walled city, known for dal makhani and paratha thalis since 1916." },
    ],
  },
  pondicherry: {
    intro: "Pondicherry (Puducherry) on the Tamil Nadu coast is known for its French Quarter, Promenade Beach, Sri Aurobindo Ashram and Auroville. It is about 150 km from Chennai by the East Coast Road. Pondicherry visiting places include White Town, Paradise Beach, Auroville's Matrimandir viewpoint and Serenity Beach.",
    idealDuration: "2 days",
    bestMonths: "October to March",
    gateway: "Chennai airport",
  },
  daman: {
    intro: "Daman on the Gujarat coast is known for Moti Daman Fort, Devka and Jampore beaches and its Portuguese heritage.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Vapi station (about 12 km)",
  },
  diu: {
    intro: "Diu is a small island with a Portuguese fort, Nagoa beach and Naida caves. Shopping in Diu covers seafood markets, souvenirs and duty-free style liquor shops (Diu is outside Gujarat's prohibition).",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Diu airport",
  },
};

export const REST_PLACES: Record<string, GuideContent> = {
  "hyderabad/places-to-visit/charminar": {
    intro: "The Charminar is a monument and mosque built in 1591 by Sultan Muhammad Quli Qutb Shah at the heart of old Hyderabad. Its four 56 m minarets look over the Laad Bazaar and the city's food streets.",
  },
  "srisailam/places-to-visit/mallikarjuna-jyotirlinga": {
    intro: "Sri Mallikarjuna temple at Srisailam in the Nallamala hills is both a Jyotirlinga and a Shakti Peetha, about 210 km from Hyderabad. Darshan is booked through the Srisailam Devasthanam website.",
  },
  "tirupati/places-to-visit/tirumala-venkateswara-temple": {
    intro: "The Sri Venkateswara temple at Tirumala, above Tirupati, is managed by TTD, which runs online darshan booking, accommodation and laddu prasadam.",
  },
  "ujjain/places-to-visit/mahakaleshwar-jyotirlinga": {
    intro: "Mahakaleshwar in Ujjain is one of the 12 Jyotirlingas and the only one facing south; its pre-dawn Bhasma Aarti is booked through the temple's official site.",
  },
  "omkareshwar/places-to-visit/omkareshwar-jyotirlinga": {
    intro: "The Omkareshwar Jyotirlinga stands on Mandhata island in the Narmada, reached by bridges or boats.",
  },
  "indore/places-to-visit/rajwada": {
    intro: "Rajwada is the historic Holkar palace in Indore's old city, with a seven-storey gateway and a garden courtyard.",
  },
  "araku-valley/places-to-visit/borra-caves": {
    intro: "Borra Caves are million-year-old limestone caves near Araku, among the largest in India, lit to show their stalactites.",
  },
  "amritsar/places-to-visit/wagah-border": {
    intro: "The Wagah-Attari border, about 29 km from Amritsar, holds the daily Beating Retreat ceremony between India's BSF and Pakistan Rangers before sunset.",
  },
  "amritsar/places-to-visit/golden-temple": {
    intro: "The Golden Temple (Sri Harmandir Sahib) is the holiest Sikh shrine, open day and night with free entry and the world's largest community kitchen.",
  },
  "places-to-visit/rock-garden": {
    intro: "The Rock Garden of Chandigarh was created by Nek Chand from industrial and household waste, beginning secretly in 1957, and is now one of the city's main attractions near Sukhna Lake.",
  },
};

export const REST_DESTINATIONS: Record<string, Partial<GuideContent>> = {
  "madhya-pradesh": {
    intro: "Madhya Pradesh in central India is known for the Jyotirlingas of Ujjain and Omkareshwar, the Khajuraho temples, Sanchi stupa, the tiger reserves of Kanha, Bandhavgarh and Pench, and the hill station of Pachmarhi.",
    bestMonths: "October to March",
  },
  "andhra-pradesh": {
    intro: "Andhra Pradesh is best known for Tirupati's Tirumala temple, Srisailam's Mallikarjuna Jyotirlinga, Visakhapatnam's beaches and the Araku Valley.",
    bestMonths: "October to March",
    faqs: [{ q: "Which are the famous temples in Andhra Pradesh?", a: "Tirumala Venkateswara (Tirupati), Srisailam Mallikarjuna, Srikalahasti, Kanaka Durga in Vijayawada, Simhachalam near Vizag and Ahobilam." }],
  },
  telangana: {
    intro: "Telangana is centred on Hyderabad, with the UNESCO-listed Ramappa temple near Warangal, Yadadri and Bhadrachalam temples.",
    bestMonths: "October to February",
  },
  punjab: {
    intro: "Punjab is the home of the Golden Temple in Amritsar, the Wagah border ceremony, Anandpur Sahib's Hola Mohalla and Punjabi food.",
    bestMonths: "October to March",
    faqs: [{ q: "What are the main festivals of Punjab?", a: "Baisakhi in April, Lohri in January, Hola Mohalla at Anandpur Sahib in March, and Gurpurabs through the year." }],
  },
  chandigarh: {
    routes: [
      { from: "Chandigarh", to: "Delhi", distanceKm: "About 270 km", time: "4.5 to 5 hours", how: "On NH 44 via Ambala and Karnal; Shatabdi and Vande Bharat trains take about 3.5 hours." },
      { from: "Chandigarh", to: "Kapurthala", distanceKm: "About 170 km", time: "3.5 hours", how: "Via Ropar and Jalandhar." },
      { from: "Chandigarh", to: "Spiti", distanceKm: "About 530 km to Kaza via Shimla and Kinnaur", time: "Two days", how: "Overnight in Kalpa or Sangla on the way." },
    ],
    faqs: [
      { q: "Is there a waterpark in Chandigarh?", a: "Yes. Fun City and other water parks operate on the Chandigarh outskirts in summer; check timings before you go." },
      { q: "Where can I go trekking near Chandigarh?", a: "Morni Hills and the Kasauli Gilbert Trail are the nearest; Triund and Kheerganga are a long day's drive." },
    ],
  },
  "south-india": {
    intro: "South India's top tourist destinations are Kerala's backwaters and hills, Karnataka's Coorg, Mysore and Hampi, Tamil Nadu's Ooty, Kodaikanal and temple towns, Goa's beaches and Puducherry.",
    bestMonths: "October to March; hill stations for summer",
    faqs: [
      { q: "Which are the best places to visit in South India?", a: "Munnar, Alleppey, Coorg, Mysore, Hampi, Ooty, Kodaikanal, Madurai, Rameswaram, Kanyakumari, Pondicherry and Goa." },
      { q: "Which South India tourist places are best in summer?", a: "Hill stations: Ooty, Kodaikanal, Munnar, Coorg, Chikmagalur, Wayanad and Yercaud." },
      { q: "Which are the best places to visit in August in South India?", a: "The monsoon suits Coorg, Wayanad, Munnar and Athirappilly for waterfalls, and Kerala's backwaters during the Onam season." },
    ],
  },
  lakshadweep: {
    intro: "Lakshadweep is India's coral island territory in the Arabian Sea, reached from Kochi by flight to Agatti or by ship. Indian visitors need an entry permit from the Lakshadweep administration, usually arranged through approved tour operators.",
    bestMonths: "October to May",
    packages: { intro: "Lakshadweep tour packages usually include the entry permit, flights or ship from Kochi, island stays on Agatti or Bangaram, and lagoon activities such as snorkelling and glass-bottom boats." },
  },
};

// FAQ fixes for keywords left open in earlier batches.
export const REST_CITY_FAQS: Record<string, Partial<GuideContent>> = {
  bangalore: {
    faqs: [
      { q: "Which are the famous temples in Bangalore?", a: "Bull Temple (Dodda Basavana Gudi), Gavi Gangadhareshwara, Banashankari, ISKCON and Kadu Malleshwara." },
      { q: "Is there an aquarium in Bangalore?", a: "Yes, the Government Aquarium in Cubbon Park." },
      { q: "Where are New Year celebrations in Bangalore?", a: "Around MG Road, Brigade Road and Church Street, with police traffic restrictions on 31 December." },
      { q: "How do I plan a Bangalore to Kerala trip for 3 days?", a: "Overnight bus or train to Kochi, then Kochi and Munnar, or fly to Kochi and add Alleppey." },
    ],
  },
  mysore: {
    faqs: [
      { q: "Where is the Venugopala Swamy temple in Mysore?", a: "At Hosa Kannambadi on the KRS reservoir, about 25 km from Mysuru." },
      { q: "Where is GRS Fantasy Park in Mysore?", a: "On the KRS road outside Mysuru; it is an amusement and water park." },
      { q: "Which tourist places are on the Ooty to Mysore road?", a: "Mudumalai and Bandipur forests and Gundlupet, with Srirangapatna just before Mysuru." },
    ],
  },
  udupi: { faqs: [{ q: "What is the Udupi Krishna temple known for?", a: "The Kanakana Kindi window and free meals at the Sri Krishna Matha, founded by Madhvacharya." }] },
  munnar: { faqs: [{ q: "What is Devikulam in Munnar?", a: "A small hill town about 7 km from Munnar with Sita Devi lake and tea estates." }] },
  wayanad: { faqs: [{ q: "Which are the tourist places to visit in Wayanad?", a: "Edakkal caves, Banasura Sagar dam, Chembra peak, Pookode lake, Soochipara falls and Muthanga sanctuary." }] },
  vagamon: { faqs: [{ q: "Which Kerala tourist places are in Vagamon?", a: "Vagamon meadows, the pine forest, Kurisumala, Thangal Para and the paragliding point." }] },
  ooty: { faqs: [{ q: "Is there a pine forest in Ooty?", a: "Yes, on the Ooty to Pykara road, about 7 km from town." }, { q: "Where is the Rose Garden in Ooty?", a: "Near Vijayanagaram, about 1 km from Charing Cross, with thousands of rose varieties." }] },
  chennai: { faqs: [{ q: "What places can I see in Chennai in one day?", a: "Kapaleeshwarar temple, Marina Beach, Fort St. George and San Thome Basilica." }] },
  coonoor: { faqs: [{ q: "Which are the Coonoor falls worth visiting?", a: "Catherine Falls and Law's Falls." }] },
  mumbai: { faqs: [{ q: "Which tourist attractions are near Mumbai?", a: "Lonavala, Matheran, Alibaug, Elephanta and Kanheri caves." }] },
  guwahati: { faqs: [{ q: "What is Guwahati city known for?", a: "The Kamakhya temple, Brahmaputra cruises and as the gateway to Kaziranga, Shillong and Tawang." }] },
  puri: { faqs: [{ q: "Which mandir in Puri should I visit?", a: "The Jagannath mandir, plus Gundicha temple and Lokanath temple." }] },
  lucknow: { faqs: [{ q: "When is Ambedkar Park in Lucknow open?", a: "Ambedkar Memorial Park in Gomti Nagar is open daily into the evening, when it is lit up." }] },
  agra: { faqs: [{ q: "Agra ka Taj Mahal kab khulta hai?", a: "The Taj Mahal opens from sunrise to sunset every day except Friday." }] },
  mussoorie: { faqs: [{ q: "Is there snowfall in Mussoorie every year?", a: "Most winters get a few days of snowfall between late December and February." }] },
  nainital: { faqs: [{ q: "Which adventure activities in Nainital are best?", a: "Paragliding at Bhimtal, yachting on Naini Lake and treks to Naina Peak." }] },
  ahmedabad: { packages: { themes: { "honeymoon-packages": { faqs: [{ q: "What is the best honeymoon tour package from Ahmedabad?", a: "Udaipur and Mount Abu by road, or Goa, Kerala, Kashmir and Bali by air." }] } } } },
};
