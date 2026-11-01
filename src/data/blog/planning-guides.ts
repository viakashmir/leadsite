import type { BlogPost } from "./types";

const date = "2026-11-01";

export const PLANNING_GUIDES: BlogPost[] = [
  {
    slug: "summer-holiday-destinations-india",
    title: "Summer Holiday Destinations in India for May and June",
    description:
      "Cool places to visit in India in May and June: Ladakh, Kashmir, Himachal, Sikkim, Meghalaya and the Nilgiris, with ideal trip lengths and booking tips.",
    category: "Planning",
    destination: "himachal",
    date,
    intro:
      "In May and June, head for the mountains. Ladakh, Kashmir, Himachal, Uttarakhand, Sikkim and the Nilgiris stay cool while the plains are hot. These are also the busiest weeks for hill stations, so book 4 to 6 weeks ahead.",
    sections: [
      {
        h: "Best summer destinations",
        list: [
          "Ladakh: Leh, Nubra and Pangong, open from May with all roads by June.",
          "Kashmir: meadows in Gulmarg, Pahalgam and Sonamarg.",
          "Himachal: Manali, Spiti (from June), Dharamshala and Shimla.",
          "Uttarakhand: Nainital, Mussoorie, Auli and the Char Dham Yatra.",
          "Sikkim and Darjeeling: rhododendrons and clear spring views.",
          "Ooty, Coorg and Munnar in the south.",
        ],
      },
      {
        h: "Avoid the crowds",
        p: [
          "Shimla, Manali and Nainital are busiest at weekends. Quieter options include Tirthan Valley and Jibhi in Himachal, Chopta and Munsiyari in Uttarakhand, and Pelling in Sikkim.",
        ],
      },
      {
        h: "International options in summer",
        list: ["Bhutan and Nepal for mountain air.", "Bali and Sri Lanka's east coast for dry weather.", "Switzerland and Europe for long summer days."],
      },
      {
        h: "Booking tip",
        p: ["Tell agents your dates and departure city early; summer weeks fill fast. Compare up to 3 quotes for the same plan."],
      },
    ],
    faqs: [
      { q: "Which is the coolest place to visit in India in May?", a: "Ladakh, Kashmir, Spiti and the high hills of Sikkim and Uttarakhand." },
      { q: "Is June good for Manali?", a: "Yes, it is peak season before the monsoon reaches Himachal in July." },
      { q: "Is Kerala good in May?", a: "Munnar is pleasant, but the coast is hot and the monsoon begins in early June." },
    ],
  },
  {
    slug: "long-weekend-trips-from-delhi",
    title: "Long Weekend Trips from Delhi: 12 Places Within a Day's Drive",
    description:
      "The best long weekend getaways from Delhi by road, train or a short flight: Rishikesh, Mussoorie, Jaipur, Agra, Kasauli, Lansdowne, Amritsar and more.",
    category: "Weekend Trips",
    destination: "uttarakhand",
    city: "mussoorie",
    date,
    intro:
      "Delhi has dozens of weekend escapes within 5 to 8 hours. For mountains, choose Rishikesh, Mussoorie, Lansdowne, Kasauli or Nainital. For culture, Jaipur, Agra, Amritsar or Mathura Vrindavan. For wildlife, Jim Corbett or Ranthambore.",
    sections: [
      {
        h: "Hills (5 to 8 hours)",
        list: [
          "Rishikesh: rafting and Ganga Aarti, about 240 km.",
          "Mussoorie: Mall Road and Kempty Falls, about 290 km.",
          "Lansdowne: quiet cantonment town, about 250 km.",
          "Kasauli: colonial hill town near Chandigarh, about 300 km.",
          "Nainital: lakes and Snow View, about 300 km.",
        ],
      },
      {
        h: "Culture and pilgrimage",
        list: ["Jaipur: forts and bazaars, about 280 km.", "Agra: Taj Mahal, about 230 km.", "Amritsar: Golden Temple and Wagah, by Shatabdi or flight.", "Mathura Vrindavan: about 160 km."],
      },
      {
        h: "Wildlife",
        list: ["Jim Corbett: about 250 km.", "Ranthambore: by train to Sawai Madhopur.", "Sariska: about 200 km."],
      },
      {
        h: "Plan your weekend",
        p: ["Long weekends sell out quickly. Share your dates and group size to get quotes for a cab, hotel and sightseeing in one plan."],
      },
    ],
    faqs: [
      { q: "Which hill station is nearest to Delhi?", a: "Kasauli, Lansdowne and Mussoorie are among the nearest, about 250 to 300 km." },
      { q: "What is a good 2-day trip from Delhi?", a: "Rishikesh, Agra, Jaipur or Mathura Vrindavan." },
      { q: "Is Nainital doable in a weekend from Delhi?", a: "Yes with an early start; three days is more relaxed." },
    ],
  },
  {
    slug: "weekend-trips-from-mumbai",
    title: "Weekend Trips from Mumbai: Hills, Beaches and Forts",
    description:
      "Weekend getaways from Mumbai: Lonavala, Matheran, Mahabaleshwar, Alibaug, Igatpuri, Nashik and Goa, with travel times and the best seasons.",
    category: "Weekend Trips",
    destination: "maharashtra",
    city: "lonavala",
    date,
    intro:
      "Mumbai's weekend escapes are close: Lonavala and Khandala (about 85 km), Matheran's car-free hill station, Alibaug's beaches by ferry, and Mahabaleshwar a little further. In the monsoon the Western Ghats turn into waterfalls; in winter, beaches and forts are best.",
    sections: [
      {
        h: "Hill stations",
        list: [
          "Lonavala and Khandala: viewpoints, caves and chikki, about 2 hours.",
          "Matheran: Asia's only automobile-free hill station, toy train from Neral.",
          "Mahabaleshwar and Panchgani: viewpoints and strawberries, about 5 to 6 hours.",
          "Igatpuri: waterfalls and the Vipassana centre.",
        ],
      },
      {
        h: "Beaches",
        list: ["Alibaug: ferry from Gateway of India to Mandwa.", "Kashid and Murud-Janjira fort.", "Goa: a short flight for a long weekend."],
      },
      {
        h: "Pilgrimage",
        list: ["Shirdi: about 240 km.", "Nashik and Trimbakeshwar: about 170 km."],
      },
      {
        h: "Plan it",
        p: ["Share your dates and group size; agents can quote a cab, stay and sightseeing together, and suggest monsoon-safe options."],
      },
    ],
    faqs: [
      { q: "Which is the best weekend trip from Mumbai in the monsoon?", a: "Lonavala, Igatpuri and Malshej Ghat for waterfalls." },
      { q: "How do we reach Alibaug from Mumbai?", a: "By ferry from Gateway of India to Mandwa, then a short drive." },
      { q: "Is Matheran good for families?", a: "Yes, it is car-free and easy to walk, with pony rides and viewpoints." },
    ],
  },
  {
    slug: "weekend-trips-from-bangalore",
    title: "Weekend Trips from Bangalore: Coorg, Chikmagalur, Mysore and More",
    description:
      "The best weekend getaways from Bangalore: Coorg, Chikmagalur, Mysore, Ooty, Wayanad, Hampi and Gokarna, with drive times and seasons.",
    category: "Weekend Trips",
    destination: "karnataka",
    city: "chikmagalur",
    date,
    intro:
      "Bangalore is surrounded by easy weekend escapes. Coorg and Chikmagalur for coffee hills, Mysore for palaces, Ooty and Wayanad across the border, Hampi for ruins and Gokarna for quiet beaches. Most are 4 to 6 hours by road.",
    sections: [
      {
        h: "Hills and coffee country",
        list: [
          "Chikmagalur: Mullayanagiri peak and coffee estates, about 245 km.",
          "Coorg: Abbey Falls and estate homestays, about 250 km.",
          "Wayanad: forests and Edakkal Caves, about 280 km.",
          "Ooty: via Mysore, about 270 km.",
        ],
      },
      {
        h: "Heritage",
        list: ["Mysore: palace and Chamundi Hills, about 145 km.", "Hampi: UNESCO ruins, about 340 km.", "Belur and Halebidu temples."],
      },
      {
        h: "Beaches",
        list: ["Gokarna: Om Beach and Kudle Beach.", "Udupi and Malpe.", "Pondicherry: about 310 km."],
      },
      {
        h: "Get weekend quotes",
        p: ["Ask agents for an estate stay with meals and a cab. Group trips for friends and colleagues are common."],
      },
    ],
    faqs: [
      { q: "Which is the best weekend trip from Bangalore?", a: "Coorg and Chikmagalur for hills, Mysore for culture." },
      { q: "How far is Chikmagalur from Bangalore?", a: "About 245 km, 5 hours by road." },
      { q: "Is Gokarna good for a weekend?", a: "Yes, with an overnight bus or train it makes a relaxed beach weekend." },
    ],
  },
  {
    slug: "senior-citizen-tour-packages-guide",
    title: "Senior Citizen Tours in India: Comfortable Destinations and Planning Tips",
    description:
      "How to plan a comfortable trip for senior citizens: easy destinations like Kerala, Rajasthan and the Golden Triangle, pilgrimage options and health tips.",
    category: "Family",
    destination: "kerala",
    date,
    intro:
      "For senior travellers, the best trips have short daily drives, hotels with lifts, flexible sightseeing and good food. Kerala, the Golden Triangle, Rajasthan, Goa and Sikkim at moderate altitudes are comfortable choices, and pilgrimages like Vaishno Devi and Kedarnath can be planned with helicopters and ponies.",
    sections: [
      {
        h: "Comfortable destinations",
        list: [
          "Kerala: houseboats and gentle hill drives.",
          "Golden Triangle: flat sightseeing with good roads.",
          "Rajasthan: palaces with lifts and ramps in many heritage hotels.",
          "Goa and Pondicherry: relaxed coastal stays.",
        ],
      },
      {
        h: "Pilgrimage with support",
        list: [
          "Vaishno Devi: helicopter and battery car.",
          "Kedarnath: helicopter or palki.",
          "Varanasi and Ayodhya: e-rickshaws to the ghats and temples.",
          "Dwarka and Somnath: short distances and good hotels.",
        ],
      },
      {
        h: "Planning tips",
        list: [
          "Ground-floor rooms or hotels with lifts.",
          "One sightseeing session per day with rest in the afternoon.",
          "A spacious vehicle such as an Innova Crysta.",
          "Medical check before high-altitude trips, and travel insurance.",
        ],
      },
      {
        h: "Get the right quote",
        p: ["Share the ages and any mobility needs of every traveller. Good agents plan around them and confirm accessibility in writing."],
      },
    ],
    faqs: [
      { q: "Which is the best destination in India for senior citizens?", a: "Kerala, the Golden Triangle and Rajasthan are among the most comfortable." },
      { q: "Can senior citizens visit Ladakh?", a: "Some do, with medical advice, flights into Leh and two rest days. Choose lower-altitude trips if unsure." },
      { q: "Do agents arrange wheelchairs?", a: "Many can arrange wheelchairs at airports and major monuments. Ask when you request quotes." },
    ],
  },
  {
    slug: "how-to-compare-tour-package-quotes",
    title: "How to Compare Tour Package Quotes: 10 Things to Check Before You Book",
    description:
      "A checklist for comparing holiday package quotes from different agents: hotels, meal plans, transfers, entry tickets, taxes, cancellation terms and more.",
    category: "Planning",
    destination: "rajasthan",
    date,
    intro:
      "Two quotes for the 'same' trip can differ by a lot because they include different things. Before you book, compare hotel names and room types, meal plans, transfers, tickets, taxes and cancellation terms line by line. This is why Tavel Package sends up to 3 itemised quotes for the same request.",
    sections: [
      {
        h: "The 10-point checklist",
        list: [
          "Hotel names and room category, not just 'deluxe' or '3 star'.",
          "Meal plan: room only, breakfast, half board or full board.",
          "Vehicle type and whether it is private for the whole trip.",
          "Sightseeing: which places are included, and entry tickets.",
          "Local transport like union taxis, ponies, boats and permits.",
          "Flights and trains: included or quoted separately.",
          "Taxes: whether GST and service charges are in the price.",
          "Peak date surcharges, such as Christmas or long weekends.",
          "Payment schedule and cancellation policy.",
          "Who to contact during the trip, and the agent's local presence.",
        ],
      },
      {
        h: "Red flags",
        list: [
          "A price far below others with no hotel names.",
          "Pressure to pay the full amount immediately.",
          "Vague itineraries such as 'local sightseeing' without places.",
        ],
      },
      {
        h: "How Tavel Package helps",
        p: [
          "You share your plan once. Up to 3 verified agents who operate that destination send customised quotes, and you compare them with this checklist. You book directly with the agent you choose, and there is no booking fee.",
        ],
      },
    ],
    faqs: [
      { q: "Why do tour package quotes differ so much?", a: "Different hotels, meal plans, vehicles and inclusions. Compare line by line." },
      { q: "Should we pay the full amount upfront?", a: "Most agents take an advance and the balance before travel. Read the payment and cancellation terms." },
      { q: "Are Tavel Package quotes free?", a: "Yes. Requesting and comparing quotes is free, with no booking fee." },
    ],
  },
  {
    slug: "short-international-trips-from-india",
    title: "Short International Trips from India: 10 Countries for 4 to 6 Days",
    description:
      "International holidays that fit 4 to 6 days from India: Dubai, Thailand, Singapore, Bali, Sri Lanka, Nepal, Bhutan, Maldives, Vietnam and Azerbaijan.",
    category: "International",
    destination: "thailand",
    date,
    intro:
      "Many international destinations are only 2 to 5 hours from Indian cities, which makes a 4 to 6 day trip abroad realistic. Dubai, Thailand, Singapore, the Maldives, Sri Lanka, Nepal and Bhutan are the easiest. Bali, Vietnam and Azerbaijan need slightly longer flights but fit a week.",
    sections: [
      {
        h: "4 to 5 days",
        list: [
          "Dubai: city, desert and theme parks.",
          "Maldives: a 4-night resort stay.",
          "Nepal: Kathmandu and Pokhara.",
          "Sri Lanka: Kandy and the south coast at a quick pace.",
          "Singapore: attractions for all ages.",
        ],
      },
      {
        h: "5 to 6 days",
        list: [
          "Thailand: Bangkok and Pattaya, or Phuket and Krabi.",
          "Bhutan: Paro, Thimphu and Punakha.",
          "Bali: Ubud and the coast.",
          "Vietnam: Hanoi and Ha Long Bay.",
          "Azerbaijan: Baku and Gabala.",
        ],
      },
      {
        h: "Visa-easy picks",
        p: [
          "Nepal and Bhutan need no visa for Indians, the Maldives gives a free visa on arrival, and Mauritius also offers visa on arrival. Others need an e-visa or visa in advance. Rules change, so confirm before booking.",
        ],
      },
      {
        h: "Get quotes",
        p: ["Tell agents your departure city and dates; many of these trips work best with direct flights, which agents can quote together with the land package."],
      },
    ],
    faqs: [
      { q: "Which is the easiest foreign trip from India?", a: "Nepal, Bhutan, Dubai, Thailand and the Maldives are among the easiest." },
      { q: "Which countries are visa free for Indians?", a: "Nepal and Bhutan do not require a visa. Several others offer visa on arrival or e-visas; rules change, so check." },
      { q: "Can we do an international trip in 4 days?", a: "Yes. Dubai, the Maldives and Singapore all work well in 4 days." },
    ],
  },
];
