import type { GuideContent } from "@/lib/locations";

// International destinations for Indian travellers. Visa and entry rules
// change often: pages state the rule type and send readers to the official
// source; no invented prices. No em dashes.

const visaNote = (country: string, source: string) =>
  `Entry rules for Indian passport holders visiting ${country} change from time to time; check ${source} before booking.`;

export const INTL_DESTINATIONS: Record<string, Partial<GuideContent>> = {
  vietnam: {
    intro: "Vietnam is a long coastal country in South-East Asia, popular with Indian travellers for Hanoi and Ha Long Bay in the north, Hoi An and Da Nang in the centre, and Ho Chi Minh City and the Mekong Delta in the south. Direct flights connect Delhi, Mumbai and other Indian cities with Hanoi and Ho Chi Minh City.",
    highlights: ["Ha Long Bay cruise", "Hanoi old quarter", "Hoi An lantern town", "Ba Na Hills and the Golden Bridge near Da Nang", "Cu Chi tunnels and the Mekong Delta"],
    idealDuration: "6 to 9 days",
    bestMonths: "February to April, August to October",
    gateway: "Hanoi (HAN) or Ho Chi Minh City (SGN)",
    thingsToKnow: [visaNote("Vietnam", "Vietnam's official e-visa portal")],
    packages: { intro: "Vietnam tour packages from India usually run 6 to 8 days: Hanoi and Ha Long Bay, Da Nang with Ba Na Hills and Hoi An, then Ho Chi Minh City. Packages include flights or not, hotels, an overnight or day cruise and transfers." },
  },
  bali: {
    intro: "Bali is an Indonesian island known for beaches in Seminyak, Kuta and Nusa Dua, the rice terraces and temples of Ubud, cliff temples such as Uluwatu and Tanah Lot, and day trips to Nusa Penida. It is one of the most popular honeymoon destinations for Indians.",
    highlights: ["Ubud rice terraces and monkey forest", "Uluwatu and Tanah Lot temples", "Nusa Penida day trip", "Beach clubs in Seminyak", "Kintamani and Mount Batur sunrise"],
    idealDuration: "5 to 7 days",
    bestMonths: "April to October (dry season)",
    gateway: "Denpasar Ngurah Rai airport (DPS)",
    thingsToKnow: [visaNote("Indonesia", "the Indonesian immigration e-visa site"), "Bali charges a tourist levy for foreign visitors, payable online before arrival."],
    packages: { intro: "Bali packages and Bali tour packages usually run 5 to 7 days, splitting stays between Ubud and a beach area such as Seminyak or Nusa Dua, with a Nusa Penida trip and a Kintamani tour. A Bali trip package can include or exclude flights from India." },
  },
  dubai: {
    intro: "Dubai is the most visited emirate of the United Arab Emirates, known for the Burj Khalifa, Dubai Mall, desert safaris, Dubai Marina, the Museum of the Future and day trips to Abu Dhabi. It is under 4 hours by air from most Indian metros.",
    highlights: ["Burj Khalifa observation decks", "Desert safari with dune bashing", "Dubai Mall and fountain show", "Dubai Marina dhow cruise", "Dubai Miracle Garden (winter season)", "Abu Dhabi Sheikh Zayed Grand Mosque"],
    idealDuration: "4 to 6 days",
    bestMonths: "November to March",
    gateway: "Dubai International (DXB)",
    thingsToKnow: [visaNote("the UAE", "the UAE ICP or GDRFA official channels or your airline")],
    faqs: [{ q: "What is the Dubai Miracle Garden?", a: "A large flower garden in Al Barsha South with millions of flowers in themed displays, open in the cooler months, roughly November to May." }],
    packages: {
      intro: "Dubai tour packages and Dubai package holidays usually run 4 to 6 nights with a city tour, Burj Khalifa, desert safari, dhow cruise and an Abu Dhabi day trip. Dubai family package deals add theme parks such as IMG Worlds, Ferrari World and the aquarium.",
      faqs: [{ q: "Are there Dubai family package deals and tour packages for family trips?", a: "Yes. Dubai tour packages for family trips favour hotels with pools, a desert safari with an early return, theme parks and the Dubai Aquarium." }],
    },
  },
  switzerland: {
    intro: "Switzerland is the most requested European holiday among Indian travellers, combining Zurich and Lucerne, the Jungfraujoch and Interlaken, Mount Titlis and the scenic trains such as the Glacier Express. Travel is easiest with a Swiss Travel Pass.",
    idealDuration: "6 to 8 days",
    bestMonths: "May to September; December to March for snow",
    gateway: "Zurich (ZRH) or Geneva (GVA)",
    thingsToKnow: [visaNote("Switzerland (Schengen)", "VFS Global and the Swiss embassy")],
    packages: { intro: "Switzerland tour packages from India typically cover Zurich, Lucerne with Mount Titlis, Interlaken with Jungfraujoch and a scenic train, in 6 to 8 days; many combine Paris or Italy." },
  },
  "sri-lanka": {
    intro: "Sri Lanka is a short flight from Chennai, Bengaluru, Mumbai and Delhi, known for the Ramayana trail, Kandy's Temple of the Tooth, Sigiriya rock fortress, Nuwara Eliya's tea country and southern beaches such as Bentota and Galle.",
    idealDuration: "5 to 8 days",
    bestMonths: "December to April for the west and south; May to September for the east coast",
    gateway: "Colombo (CMB)",
    thingsToKnow: [visaNote("Sri Lanka", "Sri Lanka's official ETA site")],
    packages: {
      intro: "Sri Lanka travel packages usually loop Colombo, Kandy, Nuwara Eliya and Bentota in 5 to 7 days, with Sigiriya and Dambulla or the Ramayana trail on longer trips.",
      faqs: [{ q: "What do travel packages to Sri Lanka include?", a: "Hotels, a private car with driver, sightseeing and entry to selected sites; flights are often extra." }],
    },
  },
  bhutan: {
    intro: "Bhutan, the Himalayan kingdom east of Sikkim, is known for Paro's Tiger's Nest monastery, Thimphu's dzongs, the Punakha Dzong and its Gross National Happiness approach. Indian visitors need a permit and pay a Sustainable Development Fee per night, at a concessional rate for Indians.",
    idealDuration: "5 to 7 days",
    bestMonths: "March to May, September to November",
    gateway: "Paro (PBH), or by road via Phuentsholing",
    thingsToKnow: ["Indian citizens enter with a passport or voter ID and an entry permit; check the Department of Immigration of Bhutan for current rules and fees."],
    faqs: [{ q: "What are the famous things in Bhutan?", a: "Tiger's Nest (Paro Taktsang) monastery, Punakha Dzong, Dochula pass, archery, red rice and ema datshi, and its Gross National Happiness philosophy." }],
    packages: { intro: "Bhutan tour packages usually cover Phuentsholing or Paro, Thimphu, Punakha and Paro with the Tiger's Nest hike in 5 to 7 days, including permits, hotels and a guide." },
  },
  singapore: {
    intro: "Singapore is a compact city-state popular with Indian families for Sentosa, Universal Studios, Gardens by the Bay, Marina Bay Sands and the night safari.",
    idealDuration: "4 to 5 days",
    bestMonths: "February to April",
    gateway: "Changi (SIN)",
    thingsToKnow: [visaNote("Singapore", "the ICA website and authorised visa agents")],
    faqs: [{ q: "Where are the night markets in Singapore?", a: "Chinatown's street market, the Lau Pa Sat satay street in the evenings, Bugis Street and the seasonal Geylang Serai Ramadan bazaar." }],
    packages: { intro: "A Singapore package usually runs 4 to 5 nights with Sentosa, Universal Studios, Gardens by the Bay, the night safari and a city tour; many add a cruise or Malaysia." },
  },
  turkey: {
    intro: "Turkey bridges Europe and Asia, with Istanbul's Hagia Sophia and Bosphorus, the hot-air balloons of Cappadocia, the travertines of Pamukkale and the Mediterranean coast at Antalya.",
    idealDuration: "7 to 10 days",
    bestMonths: "April to June, September to November",
    gateway: "Istanbul (IST)",
    thingsToKnow: [visaNote("Turkey", "the official Turkish e-visa site")],
    packages: { themes: { "honeymoon-packages": { intro: "Turkey honeymoon packages usually combine Istanbul with a Cappadocia cave hotel and a balloon ride, then Pamukkale or the Antalya coast, over 7 to 9 days." } } },
  },
  "united-kingdom": {
    intro: "The United Kingdom draws Indian travellers to London, Scotland's Edinburgh and Highlands, the Lake District and Cotswolds, and university and family visits.",
    idealDuration: "7 to 10 days",
    bestMonths: "May to September",
    gateway: "London Heathrow (LHR)",
    thingsToKnow: [visaNote("the UK", "the official GOV.UK visa pages")],
    faqs: [{ q: "Is London Bridge the same as Tower Bridge?", a: "No. Tower Bridge is the famous twin-towered bridge next to the Tower of London; London Bridge is a plain modern crossing a little upstream." }],
    packages: {
      faqs: [{ q: "What do United Kingdom tour packages from India include?", a: "Usually flights from India, hotels, London sightseeing, a Scotland leg by train, and help with the UK visitor visa application." }],
      intro: "United Kingdom tour packages from India usually cover London with a day trip to Windsor or Stonehenge, then Edinburgh and the Scottish Highlands, in 8 to 10 days; visa support is usually part of the service.",
    },
  },
  thailand: {
    intro: "Thailand is one of the most visited countries by Indian travellers, with Bangkok's temples and shopping, Pattaya, the islands of Phuket and Krabi, and Chiang Mai in the north.",
    idealDuration: "5 to 7 days",
    bestMonths: "November to March",
    gateway: "Bangkok Suvarnabhumi (BKK) or Phuket (HKT)",
    thingsToKnow: [visaNote("Thailand", "the Thai embassy or official e-visa site")],
  },
  japan: {
    intro: "Japan combines Tokyo's neighbourhoods, Mount Fuji, Kyoto's temples, Osaka's food and Hiroshima, linked by the shinkansen bullet trains.",
    idealDuration: "8 to 12 days",
    bestMonths: "March to May (cherry blossom), October to November (autumn colours)",
    gateway: "Tokyo (NRT or HND) or Osaka (KIX)",
    bestTimeToVisit: "The best time to visit Japan is spring (late March to early April for cherry blossom) and autumn (October to November for maple colours). Summer is hot and humid with a rainy season in June, and winter is good for snow in Hokkaido and the Japanese Alps.",
    thingsToKnow: [visaNote("Japan", "the Embassy of Japan in India and its authorised agents")],
  },
  nepal: {
    intro: "Nepal can be visited by Indian citizens without a visa. Kathmandu's Pashupatinath temple, Boudhanath and Swayambhunath stupas and Durbar squares, Pokhara's lakes and Annapurna views, and Chitwan's jungle are the main tourist places.",
    idealDuration: "6 to 8 days",
    bestMonths: "October to November, March to April",
    gateway: "Kathmandu (KTM) or by road via Sonauli or Raxaul",
    faqs: [
      { q: "What are the Nepal tourist places?", a: "Kathmandu, Bhaktapur and Patan Durbar squares, Pokhara, Sarangkot, Chitwan National Park, Lumbini and Nagarkot." },
      { q: "What is included in sightseeing of Kathmandu?", a: "Pashupatinath temple, Boudhanath stupa, Swayambhunath (Monkey Temple), Kathmandu Durbar Square, and Patan and Bhaktapur nearby." },
    ],
  },
  mauritius: {
    intro: "Mauritius is an island nation in the Indian Ocean, popular for honeymoons, with beaches at Grand Baie, Belle Mare and Le Morne, Ile aux Cerfs, the Seven Coloured Earth at Chamarel and a large Indian-origin community.",
    idealDuration: "5 to 7 days",
    bestMonths: "May to December",
    gateway: "Sir Seewoosagur Ramgoolam airport (MRU)",
    thingsToKnow: [visaNote("Mauritius", "the Passport and Immigration Office of Mauritius")],
    faqs: [
      { q: "Maldives vs Mauritius: which is better?", a: "The Maldives is about overwater villas and reef snorkelling on private resort islands; Mauritius offers more sightseeing, road trips, hikes and culture across one larger island." },
      { q: "Where is the best snorkeling and parasailing in Mauritius?", a: "Blue Bay marine park and Trou aux Biches for snorkelling; parasailing and water sports at Grand Baie and Ile aux Cerfs." },
    ],
  },
  australia: {
    intro: "Australia's main circuits for Indian travellers are Sydney, Melbourne and the Great Ocean Road, the Gold Coast, and Cairns for the Great Barrier Reef.",
    idealDuration: "10 to 14 days",
    bestMonths: "September to November, March to May",
    gateway: "Sydney (SYD) or Melbourne (MEL)",
    faqs: [{ q: "What is Australia famous for as a gift?", a: "Ugg boots, Tim Tam biscuits, Manuka-style honey, opal jewellery, Aboriginal art prints and macadamia nuts." }],
  },
};

export const INTL_CITIES: Record<string, GuideContent> = {
  bangkok: {
    intro: "Bangkok, Thailand's capital, is known for the Grand Palace, Wat Arun and Wat Pho, Chao Phraya river cruises, floating markets and shopping at Chatuchak and Pratunam. It has no beaches of its own; the nearest are at Pattaya and Hua Hin, each about 2 to 3 hours away.",
    idealDuration: "2 to 3 days",
    bestMonths: "November to March",
    gateway: "Suvarnabhumi (BKK) and Don Mueang (DMK)",
    faqs: [{ q: "Are there beaches in Bangkok?", a: "No. Bangkok is inland on the Chao Phraya; the nearest beaches are at Pattaya and Bang Saen (about 2 hours) and Hua Hin (about 3 hours)." }],
    packages: { fromOrigins: { mumbai: { intro: "Bangkok tour packages from Mumbai usually fly direct to Bangkok and combine 2 nights in Bangkok with 2 in Pattaya, with a city temple tour, Coral Island and a river cruise." } } },
  },
  kathmandu: {
    intro: "Kathmandu, Nepal's capital, is home to the Pashupatinath temple on the Bagmati, the Boudhanath and Swayambhunath stupas, and the UNESCO-listed Durbar squares of Kathmandu, Patan and Bhaktapur.",
    idealDuration: "2 to 3 days",
    bestMonths: "October to November, March to April",
    gateway: "Tribhuvan International Airport (KTM)",
    faqs: [{ q: "What is Pashupati in Kathmandu?", a: "Pashupatinath, a major Shiva temple on the Bagmati river and a UNESCO-listed site; only Hindus may enter the main temple, others view it from across the river." }],
  },
  london: {
    intro: "London is the UK's capital, known for Buckingham Palace, the Tower of London and Tower Bridge, the British Museum, the London Eye, West End theatre and its parks.",
    idealDuration: "3 to 4 days",
    bestMonths: "May to September",
    gateway: "Heathrow (LHR)",
  },
};
