import type { BlogPost } from "./types";

// Full Thailand guides for Indian travellers: rewrites of thin posts keyed by
// slug (same URL and title) plus new guides. Factual, no em dashes, no
// invented prices. Visa rules change often, so they are stated with dates and
// a pointer to official sources.

export const QUOTE =
  "Share your dates, departure city, group size and hotel category on Tavel Package. Up to 3 verified agents who sell Thailand send itemised quotes with flights, hotels, transfers and tours, so you can compare them side by side before you book.";
export const p = (h: string, ...text: string[]) => ({ h, p: text });

export const VISA = p(
  "Visa and entry for Indians",
  "Thailand has allowed Indian passport holders visa-free entry for tourism in recent years, with the permitted stay extended to 60 days from July 2024; the length of stay and conditions can change, so check the Royal Thai Embassy or Thailand's official e-visa website before you travel. All foreign arrivals must also complete the Thailand Digital Arrival Card (TDAC) online before arrival. Carry a passport valid for at least six months, a return or onward ticket, hotel bookings and proof of funds, as immigration may ask for them.",
);
export const MONEY = p(
  "Money, SIM cards and payments",
  "Thailand's currency is the baht. Carry some baht from India for arrival, and use ATMs (which charge a fee per withdrawal), forex cards or international debit and credit cards in cities. Small shops, street food stalls and markets prefer cash. Tourist SIM cards and eSIMs are sold at airports and convenience stores, and are the easiest way to use maps and ride-hailing apps such as Grab and Bolt.",
);
export const FLIGHTS = p(
  "Flights from India",
  "Direct flights connect Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad and other Indian cities with Bangkok, usually in about 3 to 4.5 hours. Bangkok has two airports: Suvarnabhumi (BKK) for most full-service and many low-cost flights, and Don Mueang (DMK) for low-cost carriers. Phuket and Krabi also have flights from some Indian cities and frequent domestic flights from Bangkok.",
);
export const SEASON = p(
  "Weather and the best season",
  "November to February is the cool, dry season and the most popular time to visit, with comfortable weather in Bangkok and calm seas on the Andaman coast around Phuket and Krabi. March to May is hot. The southwest monsoon, roughly May to October, brings rain and rough seas to Phuket and Krabi, when some island trips are cancelled, while the Gulf islands such as Koh Samui get most of their rain from about October to December.",
);
export const ETIQUETTE = p(
  "Etiquette and rules",
  "Dress modestly at temples, covering shoulders and knees, and remove shoes before entering halls. The Thai royal family is deeply respected, and criticising it is a serious criminal offence. Do not touch people's heads or point your feet at people or Buddha images. Vaping and e-cigarettes are illegal in Thailand, drug laws are strict, and carrying your passport or a copy is advised.",
);
export const FOOD = p(
  "Food for Indian travellers",
  "Thai food is famous for dishes such as pad thai, green and red curries, tom yum soup, som tam (papaya salad), mango sticky rice and fresh fruit. Vegetarians can ask for 'jay' food, which is vegan, or say 'mai sai nuea' (no meat), though fish sauce is common. Indian restaurants are easy to find in Bangkok, Pattaya, Phuket and Krabi, including vegetarian and Jain options, and Bangkok's Pahurat area is known as Little India.",
);
export const TRANSPORT = p(
  "Getting around",
  "In Bangkok, the BTS Skytrain and MRT metro are the fastest way to avoid traffic, and Grab and Bolt apps work well for taxis. Between cities, there are domestic flights, buses and private transfers. Island trips use ferries, speedboats and longtail boats. Agree on fares before tuk-tuk rides, and avoid unlicensed operators.",
);
export const INSURANCE = p(
  "Travel insurance and safety",
  "Buy travel insurance that covers medical treatment, as private hospitals in Thailand can be expensive, and make sure it covers activities such as diving or riding scooters if you plan them. Wear helmets on scooters, follow beach flags and lifeguard instructions, and beware of common tourist scams such as gem shops and unofficial guides.",
);

export const THAILAND_UPGRADES: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = {
  "thailand-honeymoon-phuket-krabi": {
    intro:
      "A 7-day Thailand honeymoon in Phuket and Krabi combines beach resorts, island-hopping and sunsets: three nights in Phuket for the Phi Phi Islands and Phang Nga Bay, and three in Krabi for Railay Beach and the Four Islands tour. Fly to Phuket from India directly or via Bangkok, and travel between November and April for calm seas. Indian travellers should check current visa-free entry rules and complete the Thailand Digital Arrival Card before flying.",
    sections: [
      { h: "7-day Phuket and Krabi honeymoon", days: [
        "Arrive in Phuket; sunset at Promthep Cape and dinner by the beach.",
        "Phi Phi Islands day trip by speedboat: Maya Bay viewpoint, Pileh Lagoon and snorkelling.",
        "Phang Nga Bay and James Bond Island by boat, with sea-canoeing in caves; evening in Old Phuket Town.",
        "Transfer to Krabi (about 2.5 hours by road or by ferry); evening at Ao Nang.",
        "Four Islands tour: Phra Nang Cave Beach, Chicken Island, the Tup Island sandbar and Poda.",
        "Railay Beach by longtail boat; sunset at Railay West.",
        "Depart from Krabi or Phuket.",
      ] },
      p("Phuket for couples", "Phuket, Thailand's largest island, has beach resorts for every style: Patong for nightlife, Kata and Karon for families and couples, Kamala and Surin for quieter luxury, and the north for secluded villas. Old Phuket Town's colourful Sino-Portuguese shophouses, the Big Buddha and sunset at Promthep Cape are romantic outings."),
      p("Phi Phi Islands and Maya Bay", "The Phi Phi Islands, about 1.5 hours by speedboat, are known for limestone cliffs and turquoise water. Maya Bay, made famous by the film The Beach, was closed from 2018 to 2022 to let its coral and beach recover, and now reopens with limits on visitors, no swimming in the bay, and an annual closure, usually around August to September."),
      p("Krabi for couples", "Krabi's Ao Nang is the main base, with boats to Railay Beach, a peninsula reachable only by longtail boat and known for its cliffs, rock climbing and Phra Nang Cave Beach. Couples enjoy the Four Islands tour, kayaking among mangroves and quiet resorts with cliff views."),
      p("Romantic experiences", "Book a sunset dinner cruise, a couple's Thai massage, a private longtail boat to a quiet beach, a candle-lit dinner on the sand, or a cooking class together. Many resorts offer honeymoon packages with decoration and dinners."),
      VISA,
      FLIGHTS,
      SEASON,
      MONEY,
      FOOD,
      ETIQUETTE,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "Is Phuket and Krabi good for a honeymoon?", a: "Yes, for beach resorts, island-hopping, sunsets and couple-friendly stays." },
      { q: "How many days are ideal for a Thailand honeymoon?", a: "Seven days covers Phuket and Krabi comfortably." },
      { q: "Can we swim at Maya Bay?", a: "No. Swimming in Maya Bay is not allowed, and the bay closes for part of each year." },
      { q: "How far is Krabi from Phuket?", a: "About 2.5 hours by road, or by ferry across Phang Nga Bay." },
      { q: "When is the best time for a Thailand honeymoon?", a: "November to April for calm seas on the Andaman coast." },
      { q: "Do Indians need a visa for Thailand?", a: "Indians have had visa-free entry in recent years; check current rules and complete the TDAC before travel." },
    ],
  },

  "bangkok-pattaya-first-trip": {
    intro:
      "A 5-day Bangkok and Pattaya trip is the classic first international holiday for many Indian travellers: three nights in Bangkok for the Grand Palace, temples, markets and shopping, and two in Pattaya for Coral Island, cabaret shows and the beach. Direct flights from most Indian metros take about 3 to 4.5 hours. Travel between November and February for the best weather, and check current visa-free entry rules before flying.",
    sections: [
      { h: "5-day Bangkok and Pattaya itinerary", days: [
        "Arrive in Bangkok; transfer to Pattaya (about 2 hours); evening at a cabaret show.",
        "Coral Island (Koh Larn) by speedboat or ferry; evening at the Sanctuary of Truth or Pattaya's floating market.",
        "Nong Nooch Tropical Garden in the morning, then transfer to Bangkok; evening river cruise.",
        "Grand Palace and Wat Phra Kaew, Wat Pho and Wat Arun; evening in Chinatown.",
        "Chatuchak Weekend Market (on weekends) or shopping at Siam, then depart.",
      ] },
      p("Bangkok", "Bangkok combines grand temples, river life and huge markets and malls. The Grand Palace and Wat Phra Kaew, home of the Emerald Buddha, Wat Pho's giant reclining Buddha and Wat Arun on the Chao Phraya river are the essential sights. Chatuchak Weekend Market, Chinatown's street food, rooftop bars and malls such as Siam Paragon and Iconsiam fill the rest of the time."),
      p("Pattaya", "Pattaya, about 150 km south of Bangkok, is a beach city known for Coral Island (Koh Larn), the carved wooden Sanctuary of Truth, Nong Nooch Tropical Garden, cabaret shows such as Alcazar and Tiffany's, and lively nightlife. Jomtien Beach is quieter than Pattaya Beach."),
      p("Coral Island", "Koh Larn, about 45 minutes by ferry or 15 to 20 minutes by speedboat from Pattaya, has clear beaches such as Tawaen and Samae, with water sports including parasailing, sea walking and jet skis."),
      p("Family-friendly options", "Families enjoy Safari World and Sea Life in Bangkok, Nong Nooch and Art in Paradise in Pattaya, and the floating markets. Choose hotels near BTS stations in Bangkok and on Jomtien in Pattaya."),
      VISA,
      FLIGHTS,
      MONEY,
      TRANSPORT,
      FOOD,
      ETIQUETTE,
      SEASON,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "How far is Pattaya from Bangkok?", a: "About 150 km, around 2 hours by road." },
      { q: "Is 5 days enough for Bangkok and Pattaya?", a: "Yes, with three nights in Bangkok and two in Pattaya, or the reverse." },
      { q: "How do I reach Coral Island?", a: "By ferry (about 45 minutes) or speedboat from Pattaya." },
      { q: "Is Indian food available in Bangkok and Pattaya?", a: "Yes, including vegetarian and Jain options." },
      { q: "What is the dress code at the Grand Palace?", a: "Shoulders and knees must be covered." },
      { q: "When is the best time for Bangkok and Pattaya?", a: "November to February." },
    ],
  },

  "short-international-trips-from-india": {
    intro:
      "For a 4 to 6 day holiday abroad, the easiest countries from India are those with short flights and simple entry: Thailand, Dubai, Singapore, Malaysia, Bali, Sri Lanka, Vietnam, the Maldives, Nepal and Bhutan. Several offer visa-free entry, visa on arrival or quick e-visas for Indian passport holders, though rules change often. Choose based on flight time from your city, budget, season and the kind of trip you want.",
    sections: [
      p("Thailand", "Bangkok and Pattaya, or Phuket and Krabi, are about 3 to 4.5 hours from Indian metros. Indians have had visa-free entry in recent years, with arrivals completing the Thailand Digital Arrival Card online. Good for beaches, temples, shopping and nightlife."),
      p("Dubai (UAE)", "Dubai is about 3 to 4 hours from most Indian cities, with the Burj Khalifa, desert safaris, malls and theme parks. Indians usually need a pre-arranged visa, with visa on arrival for some travellers holding certain other visas or residence permits. Best from November to March."),
      p("Singapore", "Singapore, about 4 to 5.5 hours away, suits families with Sentosa, Universal Studios, Gardens by the Bay and the Night Safari. Indians need a visa, usually applied for through authorised agents."),
      p("Malaysia", "Kuala Lumpur, Langkawi and Penang are about 4 to 5 hours away. Malaysia has offered visa-free entry to Indians for short stays since December 2023, subject to change, with an online arrival card."),
      p("Bali, Indonesia", "Bali, about 6 to 8 hours with connections, offers temples, rice terraces, beaches and villas. Indians can use visa on arrival or an e-visa on arrival."),
      p("Sri Lanka", "Sri Lanka is a short flight from Chennai, Bengaluru and other cities, with beaches, tea country and the Ramayana trail. Indians apply for an Electronic Travel Authorisation, which has been free in some periods."),
      p("Vietnam", "Vietnam, with direct flights to Hanoi and Ho Chi Minh City, offers Ha Long Bay, Hoi An and great food. Indians apply for an e-visa online."),
      p("Maldives", "The Maldives is about 1 to 2 hours from south India, with island resorts and water villas. Indians receive a free visa on arrival with a confirmed resort booking."),
      p("Nepal and Bhutan", "Indians do not need a visa for Nepal or Bhutan and can enter with a passport or voter ID. Bhutan charges a Sustainable Development Fee per night, including for Indian visitors, and requires a permit on arrival."),
      p("How to choose", "For a first trip, Thailand and Dubai are the easiest. For families, Singapore and Dubai stand out. For honeymoons, the Maldives, Bali and Phuket are favourites. For budget trips, Nepal, Vietnam and Thailand offer good value."),
      p("Check entry rules", "Visa and entry rules change often. Always check the official embassy or immigration website before booking, and keep a passport valid for at least six months."),
      p("Money and payments abroad", "Carry a forex card or an international debit or credit card, plus some local currency or US dollars for arrival. Indian rupees are accepted in Nepal and Bhutan. Check your bank's international transaction fees, inform it before travel, and keep a backup card. Remember the Liberalised Remittance Scheme rules and TCS on international tour packages when paying Indian agents."),
      INSURANCE,
      p("Flight times from India", "From Delhi and Mumbai, Dubai is about 3 to 3.5 hours, Bangkok about 4 hours, Singapore and Kuala Lumpur about 5 to 5.5 hours, and Bali about 7 to 9 hours with a connection. From south Indian cities, Colombo and Male are under 2 hours. Kathmandu is about 1.5 hours from Delhi, and Paro in Bhutan is reached via Delhi, Kolkata or Bagdogra."),
      p("Getting around abroad", "Most of these destinations have ride-hailing apps, such as Grab in Thailand, Malaysia, Singapore, Vietnam and Indonesia, and Careem or Uber in Dubai. Metro systems in Bangkok, Dubai, Singapore and Kuala Lumpur are fast and easy. An eSIM or local SIM makes maps and apps work smoothly."),
      p("Best seasons at a glance", "For a winter break, Thailand, Dubai, Singapore and Malaysia are pleasant from November to February. The Maldives and Sri Lanka's south and west coasts are best from about November to April. Bali and Vietnam's north are good from about April to October. Nepal and Bhutan are best in spring (March to May) and autumn (October and November). Avoid peak Indian holiday weeks if you want lower prices."),
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "Which countries can Indians visit without a visa?", a: "Nepal and Bhutan, and in recent years Thailand and Malaysia for short stays; check current rules." },
      { q: "Which is the cheapest international trip from India?", a: "Nepal, Thailand and Vietnam usually offer good value." },
      { q: "Which country is best for a 5-day trip from India?", a: "Thailand, Dubai or Singapore, depending on your interests." },
      { q: "Do Indians get visa on arrival in the Maldives?", a: "Yes, a free visa on arrival with a confirmed booking." },
      { q: "Do Indians need a visa for Dubai?", a: "Usually yes, a pre-arranged visa; some travellers qualify for visa on arrival." },
      { q: "Where should I check visa rules?", a: "On the official embassy or immigration website of the country." },
    ],
  },
};

export const THAILAND_DEEP: BlogPost[] = [
  {
    slug: "thailand-visa-for-indians-guide",
    title: "Thailand Visa for Indians: Visa-Free Entry, TDAC and Documents Needed",
    description: "Thailand entry for Indians: visa-free rules, the Thailand Digital Arrival Card, passport validity, documents checked at immigration, and when you need a visa.",
    category: "Planning",
    destination: "thailand",
    city: "bangkok",
    date: "2026-11-02",
    intro:
      "Indian passport holders have been able to visit Thailand for tourism without a visa in recent years, with the allowed stay extended to 60 days from July 2024, though rules can change. Every arrival must complete the Thailand Digital Arrival Card (TDAC) online before landing. Carry a passport valid for at least six months, return tickets, hotel bookings and proof of funds. Always check the latest rules on official Thai government websites before booking.",
    sections: [
      p("Visa-free entry", "Thailand introduced visa-free entry for Indian tourists in November 2023 and extended the permitted stay to 60 days from July 2024. These measures have been reviewed several times, and Thailand has discussed changing the length of stay, so confirm the current rule with the Royal Thai Embassy or Thailand's official e-visa website before you travel."),
      p("Thailand Digital Arrival Card (TDAC)", "Since May 2025, all foreign arrivals must fill in the Thailand Digital Arrival Card online, usually within three days before arrival, replacing the old paper arrival card. It asks for passport details, flight details and where you will stay. Use only the official government website, as fake sites charge fees."),
      p("Documents to carry", "Carry a passport valid for at least six months from your date of entry with blank pages, a confirmed return or onward ticket, hotel bookings, and proof of funds such as cash, cards or bank statements. Immigration officers may ask for these. Printouts or offline copies are useful."),
      p("When you need a visa", "If you plan to stay longer than the visa-free period, travel for work, study or business, or if visa-free rules change, you may need a visa. Thailand's official e-visa website handles applications for Indian residents."),
      p("Arriving in Thailand", "At Bangkok's Suvarnabhumi or Don Mueang airports, and at Phuket and Krabi, arrivals go through immigration, where passports, TDAC and sometimes return tickets are checked. Queues can be long at peak times."),
      p("Customs rules", "Thailand limits the amount of cigarettes and alcohol you can bring in, bans vaping devices, and has strict drug laws. Declare large amounts of cash as required."),
      p("Tips", "Keep copies of your passport and bookings on your phone, register your trip with family, and buy travel insurance. Use official websites only for TDAC and e-visas."),
      MONEY,
      FLIGHTS,
      INSURANCE,
      ETIQUETTE,
      TRANSPORT,
      SEASON,
      FOOD,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "Do Indians need a visa for Thailand?", a: "Indians have had visa-free entry for tourism in recent years; check the current rules before travel." },
      { q: "How long can Indians stay in Thailand without a visa?", a: "Up to 60 days under rules from July 2024, subject to change." },
      { q: "What is the TDAC?", a: "The Thailand Digital Arrival Card, which all arrivals complete online before landing." },
      { q: "How valid must my passport be for Thailand?", a: "At least six months from your date of entry." },
      { q: "Can immigration ask for my return ticket?", a: "Yes, along with hotel bookings and proof of funds." },
      { q: "Where can I apply for a Thai e-visa?", a: "On Thailand's official e-visa website." },
    ],
  },

  {
    slug: "bangkok-travel-guide",
    title: "Bangkok Travel Guide: Grand Palace, Temples, Markets and Shopping",
    description: "Bangkok guide for Indians: Grand Palace, Wat Pho, Wat Arun, Chatuchak, floating markets, Chinatown, malls, Indian food, getting around and a 3-day plan.",
    category: "International",
    destination: "thailand",
    city: "bangkok",
    date: "2026-11-02",
    intro:
      "Bangkok, Thailand's capital, is a city of golden temples, river life, huge markets and modern malls. Three days cover the Grand Palace, Wat Pho and Wat Arun, a river cruise, Chatuchak Weekend Market, Chinatown's street food and shopping at Siam and Pratunam. It is about 3 to 4.5 hours from Indian metros, and the best season is November to February.",
    sections: [
      { h: "3-day Bangkok itinerary", days: [
        "Grand Palace and Wat Phra Kaew, Wat Pho, ferry to Wat Arun; evening river cruise.",
        "Chatuchak Weekend Market (Saturday or Sunday) or a floating market day trip; evening in Chinatown.",
        "Shopping at Siam, Pratunam or Iconsiam; Safari World or Sea Life for families.",
      ] },
      p("Grand Palace and Wat Phra Kaew", "The Grand Palace, the former royal residence, is a complex of glittering halls and temples, including Wat Phra Kaew, home of the revered Emerald Buddha. Dress codes are strict: shoulders and knees must be covered, and clothing can be rented nearby. Go early to avoid heat and crowds."),
      p("Wat Pho and Wat Arun", "Wat Pho, next to the Grand Palace, houses a reclining Buddha about 46 m long and is the home of traditional Thai massage, with a massage school on site. Across the Chao Phraya river, Wat Arun, the Temple of Dawn, is decorated with coloured porcelain and is beautiful at sunset."),
      p("Markets", "Chatuchak Weekend Market is one of the world's largest markets, with thousands of stalls. Floating markets such as Damnoen Saduak, about 100 km away, and Amphawa, best on weekend evenings, show canal life. Night markets such as Jodd Fairs serve street food and shopping."),
      p("Chinatown", "Yaowarat, Bangkok's Chinatown, comes alive at night with street food stalls serving seafood, noodles and desserts, and gold shops along the main road."),
      p("Shopping", "Siam Paragon, Central World and Iconsiam are major malls, while Pratunam and MBK are known for bargain shopping. Asiatique, by the river, combines a night market and entertainment."),
      p("Getting around Bangkok", "The BTS Skytrain and MRT metro avoid traffic, river boats connect riverside sights, and Grab and Bolt apps work for taxis. Tuk-tuks are fun for short rides; agree on fares first."),
      p("Where to stay", "Sukhumvit and Siam are convenient for shopping and the BTS, the riverside for views, and Silom for business and nightlife. Many hotels serve Indian breakfasts."),
      VISA,
      FLIGHTS,
      MONEY,
      FOOD,
      ETIQUETTE,
      SEASON,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "How many days are enough for Bangkok?", a: "Three days covers the main sights, markets and shopping." },
      { q: "What is the dress code at the Grand Palace?", a: "Shoulders and knees must be covered." },
      { q: "When is Chatuchak Market open?", a: "Mainly on Saturdays and Sundays." },
      { q: "Which floating market is best from Bangkok?", a: "Damnoen Saduak for the classic experience, Amphawa on weekend evenings." },
      { q: "Where is Little India in Bangkok?", a: "The Pahurat area, near Chinatown." },
      { q: "Which Bangkok airport should I use?", a: "Suvarnabhumi for most flights; Don Mueang for many low-cost airlines." },
    ],
  },

  {
    slug: "pattaya-travel-guide",
    title: "Pattaya Travel Guide: Coral Island, Sanctuary of Truth, Shows and Beaches",
    description: "Pattaya guide: Coral Island, the Sanctuary of Truth, Nong Nooch, cabaret shows, Jomtien, the floating market, water sports, nightlife and family options.",
    category: "International",
    destination: "thailand",
    city: "pattaya",
    date: "2026-11-02",
    intro:
      "Pattaya, about 150 km south of Bangkok on the Gulf of Thailand, is a beach city known for Coral Island (Koh Larn), the carved wooden Sanctuary of Truth, Nong Nooch Tropical Garden, cabaret shows and lively nightlife. Two or three nights are enough. It suits groups, families and first-time visitors, and is usually combined with Bangkok.",
    sections: [
      { h: "2-day Pattaya plan", days: [
        "Coral Island by speedboat or ferry for beaches and water sports; evening cabaret show.",
        "Sanctuary of Truth, Nong Nooch Tropical Garden, and the Big Buddha viewpoint; evening at the floating market or Terminal 21.",
      ] },
      p("Coral Island (Koh Larn)", "Koh Larn, a short boat ride from Pattaya, has clear water and beaches such as Tawaen, Samae and Nual. Ferries take about 45 minutes and speedboats about 15 to 20 minutes. Parasailing, sea walks, jet skis and banana rides are popular, along with seafood lunches on the beach."),
      p("Sanctuary of Truth", "The Sanctuary of Truth is a huge wooden temple-like structure on the coast, carved entirely by hand with figures from Hindu and Buddhist mythology. Construction began in 1981 and continues today. Guided tours explain the carvings."),
      p("Nong Nooch Tropical Garden", "Nong Nooch is a large landscaped garden with themed areas, cactus and orchid gardens, cultural shows and animal displays, popular with families."),
      p("Cabaret shows", "Pattaya's cabaret shows, such as Alcazar and Tiffany's, are glamorous stage productions with costumes, music and dance, popular with tourists of all ages."),
      p("Beaches", "Pattaya Beach is the busy central beach, while Jomtien Beach to the south is longer and calmer, better for families. Coral Island has the clearest water."),
      p("Other attractions", "Art in Paradise (a 3D art museum), the Pattaya Floating Market, Underwater World, Wat Phra Yai's Big Buddha and the viewpoint at Pratumnak Hill are popular. Pattaya also has water parks and adventure parks."),
      p("Nightlife", "Walking Street and the beach road are known for bars and clubs. Families may prefer to stay on Jomtien or Pratumnak and visit the centre in the evening."),
      p("Getting there", "Pattaya is about 2 hours by road from Suvarnabhumi airport, by private transfer, bus or taxi. U-Tapao airport near Pattaya has some flights."),
      VISA,
      MONEY,
      FOOD,
      ETIQUETTE,
      SEASON,
      INSURANCE,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "How far is Pattaya from Bangkok airport?", a: "About 2 hours by road from Suvarnabhumi." },
      { q: "How do I reach Coral Island?", a: "By ferry (about 45 minutes) or speedboat (15 to 20 minutes)." },
      { q: "Is Pattaya good for families?", a: "Yes, with Nong Nooch, Coral Island and Jomtien Beach." },
      { q: "What is the Sanctuary of Truth?", a: "A hand-carved wooden temple-like structure begun in 1981." },
      { q: "How many days are enough for Pattaya?", a: "Two to three nights." },
      { q: "Which Pattaya beach is best for families?", a: "Jomtien Beach, which is calmer than Pattaya Beach." },
    ],
  },

  {
    slug: "phuket-travel-guide",
    title: "Phuket Travel Guide: Beaches, Phi Phi Islands, Phang Nga Bay and Old Town",
    description: "Phuket guide for Indians: Patong, Kata and Kamala beaches, Phi Phi Islands, James Bond Island, Big Buddha, Old Phuket Town, Promthep Cape and where to stay.",
    category: "International",
    destination: "thailand",
    city: "phuket",
    date: "2026-11-02",
    intro:
      "Phuket, Thailand's largest island, is the gateway to the Andaman Sea's famous islands, with beaches for every style, the Phi Phi Islands and Phang Nga Bay day trips, Old Phuket Town's heritage streets and sunsets at Promthep Cape. Plan three or four nights, ideally between November and April, when the sea is calm. Some Indian cities have direct flights; otherwise connect via Bangkok.",
    sections: [
      { h: "4-day Phuket itinerary", days: [
        "Arrive; beach time at Kata or Karon, sunset at Promthep Cape.",
        "Phi Phi Islands day trip by speedboat.",
        "Phang Nga Bay and James Bond Island, with sea-canoeing.",
        "Big Buddha, Wat Chalong and Old Phuket Town, then depart.",
      ] },
      p("Phuket's beaches", "Patong is the liveliest beach, with Bangla Road's nightlife. Kata and Karon are popular with families and couples. Kamala, Surin and Bang Tao are quieter and more upscale, and the north has secluded resorts near Mai Khao."),
      p("Phi Phi Islands", "The Phi Phi Islands, about 1.5 hours by speedboat, are famous for limestone cliffs, clear water and snorkelling. Maya Bay, known from the film The Beach, reopened in 2022 after a long closure for recovery, with visitor limits, no swimming and an annual closure, usually around August to September."),
      p("Phang Nga Bay and James Bond Island", "Phang Nga Bay is a seascape of limestone islands rising from emerald water. Khao Phing Kan, known as James Bond Island from the film The Man with the Golden Gun, is a highlight, and sea-canoe trips explore caves and lagoons."),
      p("Big Buddha and Wat Chalong", "The Big Buddha, a 45 m white marble statue on a hilltop, offers panoramic views. Wat Chalong is Phuket's most important Buddhist temple. Dress modestly for both."),
      p("Old Phuket Town", "Old Phuket Town has colourful Sino-Portuguese shophouses, cafes, street art and a Sunday walking street market. It is a pleasant change from the beaches."),
      p("Where to stay", "Choose Patong for nightlife, Kata or Karon for families and couples, Kamala or Bang Tao for quieter luxury, and Old Town for culture."),
      p("Getting there", "Phuket International Airport has direct flights from some Indian cities and frequent flights from Bangkok. Taxis and transfers connect the airport to the beaches, about 45 minutes to an hour away."),
      VISA,
      MONEY,
      FOOD,
      ETIQUETTE,
      SEASON,
      INSURANCE,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "How many days are enough for Phuket?", a: "Three to four nights, including Phi Phi and Phang Nga Bay." },
      { q: "Can I swim at Maya Bay?", a: "No, swimming in Maya Bay is not allowed." },
      { q: "What is James Bond Island?", a: "Khao Phing Kan in Phang Nga Bay, featured in a James Bond film." },
      { q: "Which Phuket beach is best for families?", a: "Kata and Karon." },
      { q: "When is the best time to visit Phuket?", a: "November to April, when the sea is calm." },
      { q: "Are there direct flights to Phuket from India?", a: "From some Indian cities; otherwise connect via Bangkok." },
    ],
  },

  {
    slug: "krabi-travel-guide",
    title: "Krabi Travel Guide: Ao Nang, Railay Beach, Four Islands and Tiger Cave",
    description: "Krabi guide: Ao Nang, Railay Beach by longtail boat, the Four Islands and Hong Islands tours, Tiger Cave Temple, Emerald Pool, Koh Lanta and best season.",
    category: "International",
    destination: "thailand",
    city: "krabi",
    date: "2026-11-02",
    intro:
      "Krabi, on Thailand's Andaman coast, is known for dramatic limestone cliffs, island-hopping and a slower pace than Phuket. Ao Nang is the main base, with longtail boats to Railay Beach and tours to the Four Islands and Hong Islands. Inland, the Tiger Cave Temple and the Emerald Pool add variety. Plan three nights, between November and April.",
    sections: [
      { h: "3-day Krabi itinerary", days: [
        "Arrive; evening at Ao Nang beach.",
        "Four Islands tour: Phra Nang Cave Beach, Chicken Island, Tup Island sandbar and Poda; sunset at Railay.",
        "Tiger Cave Temple, the Emerald Pool and hot springs, or the Hong Islands tour.",
      ] },
      p("Ao Nang", "Ao Nang is Krabi's main beach town, with hotels, restaurants, shops and the pier for longtail boats to Railay and island tours. Its beach faces west for sunsets."),
      p("Railay Beach", "Railay is a peninsula cut off by cliffs and reachable only by longtail boat. Railay West has a beautiful beach, Phra Nang Cave Beach is framed by cliffs, and the area is world famous for rock climbing, with courses for beginners."),
      p("Four Islands tour", "The Four Islands tour visits Phra Nang Cave Beach, Chicken Island, Tup Island, where a sandbar connects islands at low tide, and Poda Island. Tours run by longtail or speedboat and include snorkelling."),
      p("Hong Islands", "The Hong Islands, in Than Bok Khorani National Park, have a hidden lagoon surrounded by cliffs and clear water for snorkelling and kayaking."),
      p("Tiger Cave Temple", "Wat Tham Suea, the Tiger Cave Temple, has a hilltop shrine reached by about 1,260 steep steps, with a golden Buddha and sweeping views. Go early, carry water and dress modestly."),
      p("Emerald Pool and hot springs", "The Emerald Pool, in a forest reserve inland, is a clear natural pool, and nearby hot springs flow into a stream. They make a relaxing half-day trip."),
      p("Koh Lanta and Phi Phi", "Koh Lanta, south of Krabi, is a laid-back island with long beaches, and the Phi Phi Islands are about 1.5 to 2 hours by ferry from Krabi."),
      p("Getting there", "Krabi International Airport has flights from Bangkok and some international routes. From Phuket, Krabi is about 2.5 hours by road or by ferry across Phang Nga Bay."),
      VISA,
      MONEY,
      FOOD,
      ETIQUETTE,
      SEASON,
      INSURANCE,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "How do I reach Railay Beach?", a: "Only by longtail boat, usually from Ao Nang." },
      { q: "What is the Four Islands tour?", a: "A boat tour to Phra Nang Cave Beach, Chicken Island, Tup Island and Poda." },
      { q: "How many steps are there at Tiger Cave Temple?", a: "About 1,260 steps." },
      { q: "Is Krabi better than Phuket?", a: "Krabi is quieter with dramatic cliffs; Phuket has more resorts and nightlife." },
      { q: "How many days are enough for Krabi?", a: "Three nights." },
      { q: "When is the best time to visit Krabi?", a: "November to April." },
    ],
  },

  {
    slug: "best-time-to-visit-thailand",
    title: "Best Time to Visit Thailand: Season, Monsoon, Festivals Month by Month",
    description: "When to visit Thailand from India: November to February cool season, hot months, monsoon on Phuket and Krabi, Koh Samui rains, Songkran and Loy Krathong.",
    category: "International",
    destination: "thailand",
    city: "bangkok",
    date: "2026-11-02",
    intro:
      "The best time to visit Thailand is November to February, when the weather is cool and dry, seas are calm around Phuket and Krabi, and festivals such as Loy Krathong light up the country. March to May is hot, and April brings Songkran's water fights. From about May to October, the monsoon brings rain and rough seas to the Andaman coast, while Koh Samui's wettest months are around October to December.",
    sections: [
      p("Cool season: November to February", "This is the peak season, with pleasant temperatures in Bangkok, calm seas for island trips on the Andaman coast and cool nights in Chiang Mai. Prices are highest around Christmas, New Year and Indian holidays, so book early."),
      p("Hot season: March to May", "Temperatures rise sharply, especially in Bangkok and central Thailand, often above 35 Celsius. Beaches are still good, and April brings Songkran, the Thai New Year, celebrated with water fights across the country."),
      p("Monsoon: May to October", "The southwest monsoon brings rain, usually in heavy afternoon showers, to Bangkok and the Andaman coast. Phuket and Krabi see rough seas, and some island trips, including Maya Bay, close at times. Prices are lower, and the countryside is green."),
      p("Gulf coast weather", "Koh Samui, Koh Phangan and Koh Tao follow a different pattern, with their wettest months around October to December and good weather from about January to August, making them a monsoon-season alternative to Phuket."),
      p("Festivals", "Songkran (13 to 15 April) is the Thai New Year water festival. Loy Krathong, on the full moon of the twelfth lunar month, usually in November, sees people float decorated baskets on rivers. In Chiang Mai, Yi Peng fills the sky with lanterns around the same time."),
      p("Best time by place", "Bangkok and Pattaya: November to February. Phuket and Krabi: November to April. Koh Samui: January to August. Chiang Mai: November to February."),
      p("Indian holidays and crowds", "Diwali, Christmas, New Year and summer school holidays bring many Indian travellers, raising flight and hotel prices. Travelling in late January, February or early November offers good weather with better value."),
      VISA,
      FLIGHTS,
      MONEY,
      ETIQUETTE,
      FOOD,
      INSURANCE,
      TRANSPORT,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "What is the best time to visit Thailand?", a: "November to February." },
      { q: "Is Thailand good in the monsoon?", a: "Yes for lower prices and green landscapes, but seas can be rough around Phuket and Krabi." },
      { q: "When is Songkran?", a: "13 to 15 April each year." },
      { q: "When is Loy Krathong?", a: "On the full moon of the twelfth lunar month, usually in November." },
      { q: "When is the best time for Koh Samui?", a: "About January to August." },
      { q: "When is Thailand cheapest?", a: "During the monsoon, from about May to October." },
    ],
  },

  {
    slug: "thailand-trip-cost-from-india",
    title: "Thailand Trip Cost from India: What Decides the Price of Your Holiday",
    description: "What a Thailand trip from India costs depends on: flights, season, hotels, island tours, transfers, forex and insurance. How to compare quotes and save money.",
    category: "International",
    destination: "thailand",
    city: "bangkok",
    date: "2026-11-02",
    intro:
      "The cost of a Thailand holiday from India depends mainly on your flights, the season, hotel category, island tours and transfers, plus spending money for food, shopping and activities. Flights around Diwali, Christmas, New Year and school holidays are the most expensive, and island destinations such as Phuket and Krabi cost more than Bangkok and Pattaya. Compare itemised quotes to see exactly what each part costs.",
    sections: [
      p("Flights", "Return flights from India are usually the biggest cost. Fares vary by city, airline, season and how early you book. Low-cost carriers to Don Mueang can be cheaper but have stricter baggage limits."),
      p("Hotels", "Thailand has hotels for every budget, from hostels to luxury resorts. Bangkok and Pattaya offer good value, while Phuket and Krabi beachfront resorts cost more, especially in peak season."),
      p("Tours and transfers", "Island tours such as Phi Phi, James Bond Island, Coral Island and the Four Islands are priced per person, and speedboats cost more than longtail boats or ferries. Private airport transfers and intercity transfers add to the total."),
      p("Food and shopping", "Street food and local restaurants are inexpensive, while hotel restaurants and Indian restaurants in tourist areas cost more. Shopping at markets and malls varies widely."),
      p("Forex and cards", "Carry some baht in cash and a forex card or international card. ATM withdrawals in Thailand carry a fixed fee per transaction, so withdraw larger amounts less often."),
      p("Insurance and visas", "Travel insurance adds a small cost but is strongly recommended. Under visa-free rules, Indians currently do not pay for a visa, but check the latest rules."),
      p("How the season changes the price", "November to February and Indian holiday periods are the most expensive. The monsoon, from May to October, has the lowest prices, especially for beach resorts."),
      p("Ways to save", "Book flights early, travel in the shoulder months, choose Bangkok and Pattaya for value, use ferries instead of speedboats, and eat at local restaurants."),
      p("How to compare quotes", "Compare flights and baggage, named hotels, meals, transfers, included tours and taxes. A slightly higher quote that includes airport transfers and island tours may be better value."),
      VISA,
      MONEY,
      SEASON,
      INSURANCE,
      FLIGHTS,
      ETIQUETTE,
      FOOD,
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "What is the biggest cost of a Thailand trip from India?", a: "Usually return flights, followed by hotels." },
      { q: "When is Thailand cheapest from India?", a: "During the monsoon, from about May to October." },
      { q: "Is Bangkok cheaper than Phuket?", a: "Generally yes, especially for hotels." },
      { q: "Should I carry baht from India?", a: "Carry some for arrival, and use a forex or international card." },
      { q: "Is travel insurance needed for Thailand?", a: "It is strongly recommended for medical cover." },
      { q: "What should I check in a Thailand quote?", a: "Flights, baggage, hotels, transfers, tours and taxes." },
    ],
  },
];
