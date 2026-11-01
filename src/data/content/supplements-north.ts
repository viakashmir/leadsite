import type { GuideContent } from "@/lib/locations";

// Extra FAQs and blocks that answer specific searches on existing pages.
// Merged into the base content by mergeContent() in ./index.ts.
// Rules: fact-based, no invented prices, no em dashes.

type Supplement = Partial<GuideContent>;

export const CITY_SUPPLEMENTS: Record<string, Supplement> = {
  manali: {
    faqs: [
      { q: "What is the special food of Manali and Kullu?", a: "Kullu Manali special food includes siddu (stuffed steamed bread), trout from the Beas, babru, madra and other Himachali dham dishes, plus Tibetan thukpa and momos." },
      { q: "Where is the snow point in Manali?", a: "The nearest snow points are Solang Valley (14 km), the Atal Tunnel north portal and Sissu (about 40 km), and, from mid May, Marhi and Rohtang Pass." },
      { q: "Where can I find Manali snowfall news and updates?", a: "The IMD Shimla meteorological centre issues snowfall forecasts and warnings for Kullu district, and Kullu police and district administration post road updates during snow spells." },
      { q: "Which month has the most snowfall in Manali?", a: "January usually has the most snowfall, followed by February and late December. Manali snowfall news is published by the IMD Shimla centre and local media during snow spells." },
      { q: "What is Marhi near Manali?", a: "Marhi is a roadside stop at about 3,300 m on the Rohtang road, around 34 km from Manali, with dhabas and snow-gear rental. It falls after the Gulaba permit check post." },
      { q: "What is the taxi fare from Manali to Sissu?", a: "The Manali taxi union publishes fixed rates for Sissu and the Atal Tunnel that change by season and vehicle type. Ask your hotel for the current union rate card or get quotes on Tavel Package." },
      { q: "What is the best way to travel around Manali?", a: "Local taxi union cabs for Solang, Atal Tunnel, Sissu and Rohtang, autos and walks within town, and scooter rentals for Old Manali and Vashisht." },
      { q: "Where can I go shopping in Shimla, Kullu and Manali?", a: "Mall Road and Lakkar Bazaar in Shimla, the Bhuttico and shawl factories in Kullu, and the Mall Road and Tibetan Market in Manali." },
    ],
    sections: {
      "things-to-do": {
        faqs: [
          { q: "What are the best adventure activities in Manali?", a: "Paragliding at Solang and Dobhi, river rafting near Kullu, skiing at Solang in winter, ATV rides, ropeway rides and treks such as Hampta Pass and Bhrigu Lake." },
          { q: "What activities to do in Manali with family?", a: "Solang Valley ropeway and snow play, a day at Sissu through the Atal Tunnel, Hadimba Temple, Vashisht hot springs, Naggar Castle and short walks in Old Manali." },
        ],
      },
    },
  },
  "spiti-valley": {
    faqs: [
      { q: "How many days does a Spiti circuit trip take?", a: "A full Spiti circuit, entering via Shimla and Kinnaur and leaving via Kunzum La and Manali (or the reverse), takes 8 to 10 days from Delhi or Chandigarh. It is possible only when Kunzum La is open, roughly June to October." },
      { q: "Which are the lakes of Spiti Valley?", a: "Chandratal on the Lahaul side near Kunzum La, and the small Dhankar lake above Dhankar Monastery. Nako lake is on the Kinnaur side of the route." },
      { q: "What are the tourist places in Spiti Valley?", a: "Kaza, Key Monastery, Kibber, Chicham bridge, Langza, Hikkim, Komic, Dhankar, Tabo, Pin Valley, Mudh and Chandratal lake." },
      { q: "What is the Spiti Valley route from Delhi?", a: "Delhi to Shimla, then Narkanda, Rampur, Reckong Peo, Nako, Tabo and Kaza. In summer you can return via Kunzum La, the Atal Tunnel and Manali, or go to Spiti via Manali first." },
      { q: "Can I go from Delhi to Spiti via Manali?", a: "Yes, from about June to October when Kunzum La is open. Delhi to Manali is about 540 km and Manali to Kaza about 200 km." },
      { q: "Is there a bus from Chandigarh to Spiti Valley?", a: "HRTC runs buses from Chandigarh and Shimla to Reckong Peo; from there local buses go to Kaza. In summer an HRTC bus runs Manali to Kaza." },
      { q: "How do I go to Spiti Valley from Mumbai?", a: "Fly or take a train to Chandigarh or Delhi, then travel by road through Shimla and Kinnaur, or through Manali in summer." },
      { q: "What is a night in Spiti Valley like?", a: "Nights are cold even in summer, often near freezing at Kaza and below freezing at Chandratal, and skies are very clear for stargazing." },
    ],
  },
  dharamshala: {
    faqs: [
      { q: "What are the best tourist places near Dharamshala?", a: "Within an hour: McLeodganj, Bhagsu, Dharamkot, Naddi, Kangra Fort and Norbulingka. Further: Palampur (35 km), Bir Billing (about 65 km) and Dalhousie (about 120 km)." },
      { q: "What are the best nearby places to visit from Dharamshala?", a: "McLeodganj, Bhagsu, Dharamkot, Triund, Naddi, Kangra Fort, Norbulingka, Palampur, Bir Billing and Dalhousie are the most visited places near Dharamshala." },
      { q: "What are the tourist places in Dharamshala?", a: "The Dalai Lama temple and Namgyal monastery, Bhagsu waterfall, Dharamkot, the HPCA stadium, the war memorial, St. John in the Wilderness church and the Skyway ropeway." },
      { q: "What are the things to do in Dharamshala?", a: "Trek to Triund, visit the Dalai Lama temple, ride the Skyway ropeway, see a match or tour at the HPCA stadium, take a Tibetan cooking or meditation class, and visit Norbulingka and Kangra Fort." },
      { q: "Which is the best monastery in Dharamshala?", a: "Namgyal Monastery within the Dalai Lama temple complex is the best known. Gyuto Monastery near Sidhbari and the Norbulingka Institute are also worth a visit." },
      { q: "Which temples in Dharamshala are worth visiting?", a: "Bhagsunag temple, Chamunda Devi temple, Aghanjar Mahadev near Khaniyara, Kunal Pathri and the Dalai Lama temple complex." },
      { q: "Is there a ropeway in Dharamshala?", a: "Yes. The Dharamshala Skyway ropeway links lower Dharamshala with McLeodganj in about 10 minutes." },
      { q: "Is Dharamshala a good hill station?", a: "Yes. Dharamshala is a hill station facing the Dhauladhar mountains, with McLeodganj, Bhagsu and Dharamkot above it. It suits culture, cafes and short treks." },
      { q: "Which mountains can you see from Dharamshala?", a: "The Dhauladhar range of the outer Himalaya rises directly behind Dharamshala, with peaks above 4,500 m and snow for much of the year." },
      { q: "How is Dharamshala in winter?", a: "Cold and clear, with day temperatures of about 8 to 16°C in lower Dharamshala, freezing nights in McLeodganj and occasional snowfall from late December to February." },
      { q: "What is the temp in Dharamshala through the year?", a: "Lower Dharamshala ranges from about 20 to 30°C on summer days to about 8 to 15°C on winter days. McLeodganj is a few degrees cooler." },
      { q: "Is Dharamshala worth visiting? A quick review", a: "Yes, for Tibetan culture, mountain views, cafes and the Triund trek. It is less suited to snow holidays than Manali, and July and August are very rainy." },
      { q: "How can I check the temperature in Dharamshala today or the weather tomorrow?", a: "Use the IMD website or Mausam app for the Dharamshala station, or a standard weather app. Temperatures in McLeodganj are usually 3 to 5°C lower than in lower Dharamshala." },
      { q: "Where should I find accommodation in Dharamshala?", a: "McLeodganj and Dharamkot for cafes and Tibetan culture, Bhagsu for budget stays, Naddi for views and lower Dharamshala for quick airport access." },
      { q: "What is the distance from Dalhousie to Dharamshala by road?", a: "About 120 km, 4 to 5 hours by road via Banikhet, Chamba road junction and Shahpur." },
    ],
  },
  shimla: {
    faqs: [
      { q: "How long does Shimla to Manali by road take?", a: "About 7 to 9 hours for roughly 250 km. The Shimla Manali road runs via Bilaspur or Tattapani, Sundernagar, Mandi and Kullu." },
      { q: "What does a Shimla tour package for family include?", a: "Usually 3 to 4 days with a hotel near the Mall, a cab from Kalka or Chandigarh, Kufri, Jakhu Temple and Chail, with room options for children. Most families extend to Manali." },
      { q: "What is the bus fare from Kalka to Shimla?", a: "HRTC and HPTDC publish fares for Kalka to Shimla buses, which differ for ordinary, deluxe and Volvo services; check the HRTC online booking site for the current fare." },
      { q: "What are the best trekking places near Shimla?", a: "Jakhu hill, the Glen, Chadwick Falls, Shali Tibba near Mashobra, Churdhar peak and Hatu Peak near Narkanda." },
      { q: "What are the main places to see while travelling in Shimla?", a: "The Ridge, Mall Road, Christ Church, Jakhu Temple, Viceregal Lodge, Kufri, Chail, Mashobra and Narkanda." },
    ],
  },
  kasol: {
    faqs: [
      { q: "Can I plan a Kasol trip on a budget?", a: "Yes. Overnight HRTC or Volvo buses from Delhi, guest houses or camps along the Parvati, local buses to Manikaran and Barshaini, and treks instead of paid activities keep a Kasol budget low." },
      { q: "Is there a bus from Kasol to Jibhi?", a: "There is no direct bus. Take a bus from Kasol to Bhuntar, then towards Aut and Banjar, and a local bus or taxi to Jibhi. Jibhi to Kasol by bus works the same way in reverse." },
      { q: "Which is better, Jibhi or Kasol?", a: "Kasol for cafes, treks and a social atmosphere; Jibhi for quiet homestays, forests and Jalori Pass. They are about 90 km apart and easy to combine." },
      { q: "How is Kasol in December end?", a: "Cold, with day temperatures around 8 to 14°C and freezing nights. Snow is possible at Tosh and Kheerganga. It is busy around New Year." },
    ],
  },
  jibhi: {
    faqs: [
      { q: "What are the places near Jibhi?", a: "Tirthan Valley, Jalori Pass, Serolsar Lake, Raghupur Fort, Shoja, Chehni Kothi, Bahu village and the Great Himalayan National Park." },
      { q: "Which district is Jibhi in?", a: "Jibhi is in the Banjar sub-division of Kullu district, Himachal Pradesh." },
      { q: "Can I book a Delhi to Jibhi cab?", a: "Yes. The drive is about 500 km via Chandigarh, Mandi, Aut and Banjar and takes 11 to 13 hours. Agents on Tavel Package can quote a one-way or round-trip cab." },
    ],
  },
  kinnaur: {
    faqs: [
      { q: "What are the tourist places to see in Kinnaur?", a: "Kalpa, Roghi, Sangla, Chitkul, Kamru Fort, Rakchham, Nako, Sarahan and Reckong Peo are the main places to see in Kinnaur." },
      { q: "What is the best time to visit Kinnaur and Kalpa?", a: "April to June for blossom and pleasant days, and September to October for apple harvest and clear views. Winter brings heavy snow." },
      { q: "Is there a bus from Delhi to Kinnaur, and what is the bus fare?", a: "HRTC runs Delhi to Reckong Peo buses through Shimla and Rampur. Fares differ for ordinary and deluxe services; check the HRTC online booking site for timings and the current fare." },
    ],
  },
  dalhousie: {
    faqs: [
      { q: "Is there an Amritsar Dalhousie package?", a: "Yes. A common 5-day plan is Amritsar (Golden Temple and Wagah border) for 2 nights and Dalhousie with Khajjiar for 2 to 3 nights, about 190 km apart by road." },
      { q: "What do Dalhousie vacation packages include?", a: "Usually hotel stays in Dalhousie, a cab from Pathankot or Amritsar, and sightseeing of Khajjiar, Kalatop and Dainkund. Many add Dharamshala or Amritsar." },
      { q: "What are the places to visit in Dalhousie?", a: "Khajjiar, Kalatop sanctuary, Dainkund peak, Panchpula, Satdhara falls, Gandhi Chowk and the St. John's and St. Francis churches." },
      { q: "What are the things to do in Dalhousie?", a: "Walk the Mall and Thandi Sadak, hike to Dainkund peak, ride horses at Khajjiar and visit the old churches and Kalatop forest." },
      { q: "What sightseeing is there in Dalhousie, Himachal Pradesh?", a: "A day for Dalhousie town and Panchpula, a day for Khajjiar and Kalatop, and a half day for Dainkund peak." },
    ],
  },
  leh: {
    faqs: [
      { q: "What are the best places to visit in Leh?", a: "Shanti Stupa, Leh Palace, Namgyal Tsemo, Thiksey, Hemis and Shey monasteries, Hall of Fame, Magnetic Hill and the Indus Zanskar confluence." },
    ],
  },
};

export const DESTINATION_SUPPLEMENTS: Record<string, Supplement> = {
  himachal: {
    faqs: [
      { q: "What is the coolest place in Himachal Pradesh in summer?", a: "Spiti and Lahaul (Kaza, Sissu, Jispa), Kinnaur (Chitkul, Kalpa) and high passes such as Rohtang stay cool in summer. Among hill stations, Narkanda and Manali are cooler than Shimla." },
      { q: "Where is Parwanoo in Himachal?", a: "Parwanoo is the first town in Himachal on the Kalka to Shimla highway, in Solan district, known for its Timber Trail ropeway and fruit processing units." },
      { q: "Where is Rohru in Himachal Pradesh?", a: "Rohru is a town on the Pabbar river in Shimla district, about 110 km from Shimla, known for apple orchards, trout fishing and the Shikru Devta temple." },
      { q: "Where is Kharapathar in Himachal Pradesh?", a: "Kharapathar is a small hill stop at about 2,700 m on the Theog to Rohru road in Shimla district, known for forests and snow in winter." },
    ],
  },
  ladakh: {
    faqs: [
      { q: "Do I need an ILP for Leh Ladakh?", a: "Leh town does not need a permit. For protected areas such as Nubra, Pangong and Tso Moriri, register and pay the fees on lahdclehpermit.in; foreign nationals need a Protected Area Permit through a registered agent." },
      { q: "What are the best activities to do in Leh Ladakh?", a: "Monastery visits, the drives over Khardung La and Chang La, camel rides at Hunder, rafting on the Zanskar, camping at Pangong and Tso Moriri, and motorbike tours." },
      { q: "What are the places to see near Leh Ladakh?", a: "Within a day of Leh: Thiksey, Hemis, Shey, Stok, Alchi, Likir, Magnetic Hill and the Indus Zanskar Sangam. Overnight: Nubra Valley, Pangong Tso and Tso Moriri." },
      { q: "How is Leh Ladakh in June?", a: "June is the start of peak season, with days of about 20 to 25°C in Leh, freezing nights at the lakes, and both the Manali and Srinagar highways usually open during the month." },
      { q: "Is Ladakh good in June end?", a: "Yes. By the end of June both highways are normally open, all circuits including Tso Moriri are accessible, and Leh has warm days of about 24°C." },
      { q: "How is Leh Ladakh in September?", a: "Clear and calm, with days around 20 to 23°C in Leh and nights near freezing. It is one of the best months for photography and the Ladakh Festival." },
      { q: "What clothes should I wear in Leh Ladakh in June, August and September?", a: "In June and August, light layers for the day plus a fleece and a down jacket for nights and passes. In September add thermal inner wear. Always carry sunglasses, a sun hat and sunscreen." },
      { q: "How do I plan a Delhi to Ladakh bike trip?", a: "Ride Delhi to Manali (2 days), Manali to Leh via Jispa or Sarchu (2 days), spend 4 to 5 days on Leh, Nubra and Pangong, then return via Kargil and Srinagar (3 to 4 days). Allow 12 to 14 days in total." },
      { q: "Which bike is best for a Ladakh trip?", a: "Riders usually choose a 350 to 450 cc motorcycle such as the Royal Enfield Classic, Bullet or Himalayan, rented in Leh or Manali. Carry spares and check the rental's rules for Nubra and Pangong." },
      { q: "What is the climate in Leh Ladakh in July?", a: "Dry and sunny, with Leh averaging a high of about 28°C and a low of about 16°C (IMD normals), and very little rain. Nights at Pangong and the passes are much colder." },
    ],
  },
};

export const PLACE_SUPPLEMENTS: Record<string, Supplement> = {
  "manali/places-to-visit/rohtang-pass": {
    faqs: [
      { q: "What is the Rohtang Pass height or elevation?", a: "Rohtang Pass is at about 3,978 m (13,051 ft) above sea level." },
      { q: "Is Rohtang Pass open or not right now?", a: "It is usually open from mid May to November, except on maintenance days and after bad weather. Check whether permits are being issued on rohtangpermits.hp.gov.in, or ask your Manali taxi operator." },
      { q: "How do I check today's weather in Rohtang Pass?", a: "Use the IMD or Mausam app for Manali and expect Rohtang to be roughly 10 to 15°C colder, or ask local taxi operators who drive there daily." },
      { q: "Is a permit required for Rohtang Pass?", a: "Yes. Every vehicle going to Rohtang Pass needs an online permit from rohtangpermits.hp.gov.in, which replaced older offline passes." },
      { q: "When is the Rohtang Pass opening date for tourists each year?", a: "Rohtang usually reopens around the middle of May. The date depends on snow clearance and is announced by the Kullu district administration." },
    ],
  },
  "nubra-valley/places-to-visit/khardung-la": {
    faqs: [
      { q: "Is Khardung La pass open all year?", a: "Khardung La is kept open through most of the year by the Border Roads Organisation, but it can close for hours or days after snowfall." },
    ],
  },
  "jibhi/places-to-visit/serolsar-lake": {
    faqs: [
      { q: "What is the Serolsar Lake temperature?", a: "Cold all year at about 3,100 m: roughly 10 to 18°C on summer days and well below freezing in winter, when the lake freezes." },
    ],
  },
  "kinnaur/places-to-visit/chitkul": {
    faqs: [
      { q: "What are the things to do in Chitkul?", a: "Walk along the Baspa river, visit the Mathi temple, explore the old wooden houses, eat at the village dhabas and walk towards the ITBP post at Nagasti." },
    ],
  },
};

export const LADAKH_CITY_SUPPLEMENTS: Record<string, Supplement> = {
  "pangong-lake": {
    faqs: [
      { q: "Where is Pangong Lake on the map?", a: "Pangong Tso lies on the India and China (Tibet) border in eastern Ladakh, about 160 km east of Leh via Karu and Chang La. Search Pangong Tso or Spangmik in any map app." },
    ],
  },
};

// Circuits (searched as one trip) get their own packages copy.
export const CIRCUIT_CONTENT: Record<string, GuideContent> = {
  "shimla-manali": {
    intro:
      "A Shimla Manali trip combines Himachal's two best-known hill stations, about 250 km apart, usually in 5 to 7 days from Delhi or Chandigarh. Shimla brings colonial architecture, the Mall and Kufri; Manali brings snow at Solang and Sissu, Rohtang Pass in season, and Old Manali.",
    packages: {
      intro: "Shimla Manali tour packages usually run 6 days: 2 nights in Shimla, 3 in Manali and a travel day, with Kufri, Solang Valley and either Rohtang Pass or the Atal Tunnel and Sissu. Many add Kullu, Kasol or Chandigarh.",
      itineraries: [
        {
          title: "6-day Shimla Manali itinerary",
          days: [
            "Delhi or Chandigarh to Shimla, evening on the Mall and the Ridge.",
            "Kufri and Jakhu Temple.",
            "Shimla to Manali via Mandi and Kullu.",
            "Solang Valley.",
            "Atal Tunnel and Sissu, or Rohtang Pass in season.",
            "Hadimba Temple and Old Manali, then depart.",
          ],
        },
      ],
      fromOrigins: {
        kolkata: { intro: "Shimla Manali tour packages from Kolkata usually start with a flight or train to Chandigarh or Delhi, then 6 to 7 days by road through Shimla, Kullu and Manali." },
        pune: { intro: "Shimla Manali tour packages from Pune start with a flight to Chandigarh or Delhi; the road trip through Shimla and Manali takes 6 to 7 days from there." },
      },
    },
    routes: [
      { from: "Shimla", to: "Manali", distanceKm: "About 250 km", time: "7 to 9 hours", how: "The Shimla Manali route runs via Bilaspur or Tattapani, Sundernagar, Mandi and Kullu." },
    ],
  },
  "leh-ladakh": {
    intro:
      "A Leh Ladakh trip covers Leh, Nubra Valley and Pangong Tso, usually in 6 to 8 days, starting with acclimatisation days in Leh.",
    packages: {
      intro: "Leh Ladakh packages from Delhi usually fly to Leh, spend two days acclimatising, then visit Nubra over Khardung La and Pangong over Chang La. A Delhi to Leh Ladakh tour by road adds 4 to 5 days via Manali or Srinagar.",
      itineraries: [
        {
          title: "7-day Leh Ladakh itinerary",
          days: [
            "Fly Delhi to Leh, rest.",
            "Leh local: Shanti Stupa, Leh Palace, market.",
            "Indus valley monasteries: Thiksey, Hemis, Shey; Magnetic Hill.",
            "Leh to Nubra over Khardung La; Hunder dunes.",
            "Nubra to Pangong via the Shyok road.",
            "Pangong to Leh over Chang La.",
            "Fly back to Delhi.",
          ],
        },
      ],
    },
  },
};
