import type { GuideContent } from "@/lib/locations";

// East and North East India: Odisha, West Bengal, Bihar, Sikkim, Meghalaya,
// Assam, Nagaland, Arunachal, Manipur, Andaman. No invented prices; festival
// dates as months; permits change, so official sources are named.

export const EAST_CITIES: Record<string, GuideContent> = {
  puri: {
    intro: "Puri on the Odisha coast is one of the Char Dham, centred on the 12th-century Jagannath temple, and home of the Rath Yatra chariot festival in June or July. Only Hindus may enter the temple; others can view it from the Raghunandan library rooftop opposite. Puri also has a long beach and the artists' village of Raghurajpur nearby.",
    idealDuration: "2 days",
    bestMonths: "October to March; Rath Yatra in June or July",
    gateway: "Bhubaneswar airport (about 60 km)",
    faqs: [
      { q: "Who can enter the Puri Jagannath temple?", a: "Only Hindus. Mobile phones, cameras and leather items are not allowed inside; lockers are available near the entrance." },
      { q: "Is there a Jagannath temple in Hyderabad like the one in Puri?", a: "Yes. A Jagannath temple built in the Kalinga style stands in Banjara Hills, Hyderabad, and holds its own Rath Yatra; the original shrine is in Puri, Odisha." },
    ],
  },
  bhubaneswar: {
    intro: "Bhubaneswar, Odisha's capital, is called the Temple City for its hundreds of old Kalinga-style temples, led by the 11th-century Lingaraj temple. It is also known for the Udayagiri and Khandagiri Jain caves and the Nandankanan zoological park, and is the base for Puri and Konark.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Biju Patnaik airport (BBI)",
  },
  konark: {
    intro: "Konark, about 35 km from Puri, holds the 13th-century Sun Temple built as a giant stone chariot with 24 carved wheels, a UNESCO World Heritage Site since 1984. The Konark Dance Festival is held in December.",
    idealDuration: "Half a day",
    bestMonths: "October to March",
    gateway: "Puri or Bhubaneswar",
  },
  darjeeling: {
    intro: "Darjeeling is a hill town at about 2,050 m in West Bengal, known for its tea gardens, sunrise over Kangchenjunga from Tiger Hill, and the Darjeeling Himalayan Railway toy train, a UNESCO World Heritage Site since 1999.",
    highlights: ["Tiger Hill sunrise", "Toy train joy ride and Batasia Loop", "Tea estate visits", "Peace Pagoda and Ghoom Monastery", "Mirik lake, about 50 km away"],
    idealDuration: "2 to 3 days",
    bestMonths: "March to May, October to December",
    gateway: "Bagdogra airport and New Jalpaiguri (NJP) station",
    routes: [{ from: "Mirik", to: "Darjeeling", distanceKm: "About 45 to 50 km", time: "2 hours", how: "Via Sukhia Pokhari and Ghoom through tea gardens. Darjeeling to Mirik is a popular day trip." }],
    faqs: [{ q: "Is Mirik in Darjeeling?", a: "Mirik is a lake town in Darjeeling district, about 50 km from Darjeeling, known for Sumendu Lake and orange orchards." }],
  },
  mirik: {
    intro: "Mirik is a quiet lake town in Darjeeling district, about 50 km from Darjeeling, built around Sumendu Lake and surrounded by tea gardens and orange orchards.",
    idealDuration: "1 day",
    bestMonths: "October to May",
    gateway: "Bagdogra airport (about 50 km)",
  },
  kolkata: {
    intro: "Kolkata, West Bengal's capital and former capital of British India, is known for the Victoria Memorial, Howrah Bridge, Dakshineswar and Kalighat temples, Park Street, Durga Puja in October and its sweets. It is the gateway to Darjeeling, the Sundarbans, Puri and the North East.",
    idealDuration: "2 days",
    bestMonths: "October to February",
    gateway: "Kolkata airport (CCU), Howrah and Sealdah stations",
    faqs: [
      { q: "Which are the famous churches in Kolkata?", a: "St. Paul's Cathedral (1847), St. John's Church (1787), the Armenian Church of Holy Nazareth (1724) and the Portuguese Church in Burrabazar." },
      { q: "Where can I go trekking near Kolkata?", a: "Susunia hill in Bankura and the Ajodhya hills in Purulia are the nearest, about 250 to 300 km away; the Sandakphu trek near Darjeeling is the classic longer trek." },
    ],
    packages: {
      intro: "Holiday packages from Kolkata: 5 days trips go to Darjeeling and Gangtok, Puri and Konark, the Sundarbans or Shillong; longer trips fly to Kashmir, Kerala, Manali or Andaman.",
      faqs: [
        { q: "What is a good 5 days trip from Kolkata?", a: "Darjeeling and Gangtok via NJP, Puri with Konark and Chilika, or Shillong with Cherrapunji and Dawki." },
        { q: "How does a Manali tour package from Kolkata work?", a: "Most fly from Kolkata to Chandigarh or Delhi and continue by road, or take a train to Kalka or Chandigarh; plan 7 to 8 days in total." },
      ],
    },
  },
  digha: {
    intro: "Digha is West Bengal's most popular beach town, about 180 km from Kolkata, with quieter beaches at Tajpur and Mandarmani nearby.",
    idealDuration: "2 days",
    bestMonths: "October to March",
    gateway: "Digha station",
  },
  "bodh-gaya": {
    intro: "Bodh Gaya in Bihar is where the Buddha attained enlightenment under the Bodhi tree. The Mahabodhi Temple complex is a UNESCO World Heritage Site, and monasteries built by Buddhist countries line the town.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Gaya airport and junction",
  },
  gangtok: {
    intro: "Gangtok, Sikkim's capital at about 1,650 m, is known for MG Marg, monasteries such as Rumtek and Enchey, and day trips to Tsomgo (Changu) Lake and Nathula Pass. It is about 125 km from Bagdogra airport.",
    idealDuration: "3 days",
    bestMonths: "March to May, October to December",
    gateway: "Pakyong or Bagdogra airport; NJP station",
    faqs: [{ q: "Which are the lakes near Gangtok?", a: "Tsomgo (Changu) Lake at about 3,750 m, around 38 km away on the Nathula road, and Menmecho Lake beyond it. Both need a protected area permit, arranged by registered tour operators." }],
  },
  namchi: {
    intro: "Namchi in South Sikkim is known for the Char Dham complex (Siddheshwar Dham) and the giant statue of Guru Padmasambhava at Samdruptse.",
    idealDuration: "1 day",
    bestMonths: "March to May, October to December",
    gateway: "Bagdogra airport",
  },
  cherrapunji: {
    intro: "Cherrapunji (Sohra) in Meghalaya is one of the wettest places on Earth, known for Nohkalikai Falls, the Mawsmai cave, Seven Sisters Falls and the double-decker living root bridge at Nongriat, reached by about 3,500 steps.",
    idealDuration: "2 days",
    bestMonths: "October to May; June to September for waterfalls",
    gateway: "Shillong (about 55 km)",
  },
  guwahati: {
    intro: "Guwahati on the Brahmaputra is the gateway to the North East, known for the Kamakhya temple on Nilachal hill, Umananda island and river cruises.",
    idealDuration: "1 day",
    bestMonths: "October to April",
    gateway: "Guwahati airport (GAU)",
  },
  kohima: {
    intro: "Kohima, the capital of Nagaland, is known for the Kohima War Cemetery from the 1944 Battle of Kohima and for the Hornbill Festival held at Kisama heritage village from 1 to 10 December each year.",
    idealDuration: "2 days",
    bestMonths: "October to May; Hornbill Festival in December",
    gateway: "Dimapur airport and station (about 75 km)",
  },
  bomdila: {
    intro: "Bomdila is a hill town at about 2,400 m in Arunachal Pradesh, on the road to Tawang, known for Bomdila Monastery and apple orchards. Indian visitors need an Inner Line Permit for Arunachal.",
    idealDuration: "1 day",
    bestMonths: "March to June, September to November",
    gateway: "Tezpur or Guwahati",
  },
};

export const EAST_PLACES: Record<string, GuideContent> = {
  "puri/places-to-visit/jagannath-temple": {
    intro: "The Jagannath temple in Puri was built in the 12th century under King Anantavarman Chodaganga Deva and is one of the Char Dham. Its deities ride out in giant chariots during the Rath Yatra in June or July.",
  },
  "bhubaneswar/places-to-visit/nandankanan-zoological-park": {
    intro: "Nandankanan Zoological Park on the edge of Bhubaneswar combines a zoo and botanical garden around Kanjia lake, with white tiger and lion safaris.",
  },
  "digha/places-to-visit/tajpur": {
    intro: "Tajpur is a quiet beach between Digha and Mandarmani on the West Bengal coast, known for red crabs, casuarina groves and fewer crowds than Digha.",
  },
  "bodh-gaya/places-to-visit/mahabodhi-temple": {
    intro: "The Mahabodhi Temple in Bodh Gaya marks the place of the Buddha's enlightenment. Its brick temple dates mainly to the 5th and 6th centuries and it became a UNESCO World Heritage Site in 2002.",
  },
  "loktak-lake/places-to-visit/keibul-lamjao-national-park": {
    intro: "Keibul Lamjao in Manipur is the only floating national park in the world, set on the phumdis (floating vegetation) of Loktak Lake, and the last home of the sangai, Manipur's brow-antlered deer.",
  },
};

export const EAST_DESTINATIONS: Record<string, Partial<GuideContent>> = {
  odisha: {
    intro: "Odisha on India's east coast is known for the temple triangle of Puri, Konark and Bhubaneswar, Chilika Lake, Raghurajpur's pattachitra art, and hill and forest areas such as Daringbadi and Simlipal.",
    bestMonths: "October to March",
    faqs: [{ q: "What are the places to visit in Odisha?", a: "Puri, Konark, Bhubaneswar, Chilika Lake, Raghurajpur, Daringbadi, Simlipal and Bhitarkanika." }],
  },
  sikkim: {
    faqs: [{ q: "What are the places to visit in Sikkim?", a: "Gangtok, Tsomgo Lake and Nathula, Lachung and Yumthang, Lachen and Gurudongmar Lake, Pelling, Ravangla and Namchi." }],
  },
  meghalaya: {
    faqs: [{ q: "What are the places to visit in Meghalaya?", a: "Shillong, Cherrapunji (Sohra), Dawki and the Umngot river, Mawlynnong, Laitlum canyons and Nongriat's living root bridges." }],
  },
  bihar: {
    intro: "Bihar is the land of the Buddha and of ancient Magadha, with Bodh Gaya, Nalanda, Rajgir, Vaishali and Patna.",
    bestMonths: "October to March",
    faqs: [{ q: "Which are the historical places in Bihar?", a: "Nalanda Mahavihara (a UNESCO site), the Mahabodhi Temple at Bodh Gaya, Rajgir, Vaishali, Vikramshila and Patna's Golghar." }],
  },
  andaman: {
    faqs: [{ q: "Do Andaman packages include a cruise?", a: "Most include private catamaran ferries between Port Blair, Havelock (Swaraj Dweep) and Neil (Shaheed Dweep); passenger ships also sail from Chennai and Kolkata to Port Blair." }],
  },
};
