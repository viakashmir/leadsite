// Batch 4 of the five-competitor Kashmir study (2026-11-15): city-specific
// copy for the major "Kashmir tour packages from {city}" pages, so each page
// answers that city's own questions (routes, trains, holidays, weather gap,
// food) instead of sharing a template. Part 1: Delhi, Mumbai, Bengaluru,
// Chennai, Hyderabad, Kolkata. Stored as packages.fromOrigins on the Kashmir
// destination; merged additively. Train names and flight routes change, so
// readers are told to check current schedules; no fares.

import type { GuideContent, SectionContent } from "@/lib/locations";

const fromOrigins: Record<string, SectionContent> = {
  delhi: {
    blocks: [
      {
        heading: "Delhi to Srinagar flights: what to expect",
        body: "Delhi has the most flights to Srinagar of any Indian city, with several airlines flying non-stop through the day and a flight time of about 1.5 hours. That makes Kashmir realistic even for a long weekend: an early flight from Delhi lands in Srinagar in time for a full first afternoon. Morning flights are less affected by the afternoon weather that sometimes delays Srinagar arrivals in spring and winter. Delhi is also where most travellers from other cities connect, so flights fill fast in April to June, the Christmas to New Year week and the Diwali holidays; book as soon as your dates are fixed.",
      },
      {
        heading: "Delhi to Kashmir by train: Vande Bharat and the Katra link",
        body: "Since the rail link through the Pir Panjal and over the Chenab bridge opened, you can travel from Delhi to Srinagar by train with a change at Shri Mata Vaishno Devi Katra. Fast trains, including the Vande Bharat, run from New Delhi to Katra in about 8 hours, and trains from Katra to Srinagar take about 3 hours more through some of the most dramatic railway scenery in India. Overnight trains from Delhi to Jammu Tawi and Katra are another option. Check current trains, days and timings on IRCTC, since services are being added. The train suits travellers who want to add Vaishno Devi or prefer not to fly.",
      },
      {
        heading: "Driving from Delhi to Kashmir",
        body: "The road trip from Delhi to Srinagar is about 800 km via Panipat, Ambala, Jalandhar, Pathankot and Jammu, then the Jammu to Srinagar highway through the Chenani-Nashri and Banihal tunnels. Most people take two days, stopping in Jammu, Katra or Patnitop. The highway can slow down on the Ramban stretch after rain or snow, and convoys and road closures are possible in winter. Driving suits families who want flexibility and travellers with their own car, but for most, flying in and using a local cab in Kashmir is easier, since outside vehicles cannot run sightseeing in Pahalgam and Sonamarg anyway.",
      },
      {
        heading: "When Delhi travellers go to Kashmir",
        body: "Delhi's summer heat drives the biggest wave in May and June, when school holidays begin and Kashmir's meadows are green; book early for these months. The Christmas to New Year week and January bring Delhi families looking for snow in Gulmarg. Long weekends around Holi, Independence Day, Dussehra and Diwali are popular for short three or four night trips. For quieter travel, September and October offer clear skies and golden autumn, and early April brings the Tulip Garden.",
      },
      {
        heading: "Weather contrast and packing from Delhi",
        body: "Delhi winters are cool, but Kashmir is far colder: Srinagar nights fall below freezing from December to February, and Gulmarg can drop to minus ten or lower. Delhi winter jackets are usually not warm enough for Gulmarg; add thermals, a heavier jacket, gloves and snow boots, which can also be rented in Gulmarg. In May and June, when Delhi is above 40°C, Srinagar is in the mid to high twenties by day and cool at night, so carry a light jacket.",
      },
      {
        heading: "A 5 nights Kashmir plan from Delhi",
        body: "Day 1: morning flight from Delhi, Srinagar houseboat and sunset shikara ride. Day 2: Mughal gardens and Sonamarg or the old city. Day 3: Gulmarg with the gondola, overnight in Gulmarg. Day 4: Pahalgam via Srinagar, overnight by the Lidder. Day 5: Aru, Betaab and Chandanwari by union taxi. Day 6: drive to Srinagar for an afternoon flight to Delhi. For a long weekend, keep all three nights in Srinagar with Gulmarg and Sonamarg or Pahalgam as day trips.",
      },
    ],
    faqs: [
      { q: "How long is the flight from Delhi to Srinagar?", a: "About 1.5 hours non-stop, with several flights a day." },
      { q: "Can I go from Delhi to Srinagar by train?", a: "Yes, by changing at Shri Mata Vaishno Devi Katra. Delhi to Katra takes about 8 hours on fast trains, and Katra to Srinagar about 3 hours. Check current trains on IRCTC." },
      { q: "How far is Srinagar from Delhi by road?", a: "About 800 km via Jammu, usually two days with a night in Jammu, Katra or Patnitop." },
      { q: "When do most Delhi travellers visit Kashmir?", a: "May and June for the summer holidays, the Christmas to New Year week for snow, and long weekends through the year." },
    ],
  },
  mumbai: {
    blocks: [
      {
        heading: "Mumbai to Srinagar flights",
        body: "Mumbai has direct flights to Srinagar on several airlines, taking about 2.5 to 3 hours, along with many one-stop options through Delhi. Direct flights are the easiest way to make a short trip work, since they land in time for an afternoon in Srinagar. In peak months, especially April to June and the Diwali and Christmas holidays, direct seats sell out early and connections through Delhi are the fallback; leave enough time between flights in Delhi in winter, when fog can delay departures.",
      },
      {
        heading: "Mumbai to Kashmir by train",
        body: "Long-distance trains run from Mumbai to Jammu Tawi and Shri Mata Vaishno Devi Katra, taking roughly 30 to 36 hours depending on the train. From Katra, trains continue to Srinagar in about 3 hours. The train is slow but suits travellers who want to combine Vaishno Devi with Kashmir or who enjoy rail journeys; most Mumbai travellers fly in and take the train only on the Katra to Srinagar stretch if they visit Vaishno Devi. Check current trains and days on IRCTC.",
      },
      {
        heading: "When Mumbai travellers go to Kashmir",
        body: "Maharashtra's summer holidays, from mid April to early June, are the peak for Mumbai families, when Kashmir is green and pleasant. The Diwali break in October or November is popular for autumn colours and clear skies. The Christmas to New Year week brings Mumbai travellers looking for their first snow. Kashmir is also a good escape during Mumbai's monsoon: from June to September, when Mumbai is wet, Srinagar is mostly dry and warm, with only occasional showers.",
      },
      {
        heading: "From Mumbai's warmth to Kashmir's cold",
        body: "For many Mumbai travellers, Kashmir is the first trip to real cold. In winter, Srinagar nights drop below freezing and Gulmarg's can fall below minus ten, so pack thermal inners, a heavy jacket, woollen socks, gloves, a cap and waterproof shoes; buying good winter wear in Mumbai before the trip is easier than finding the right sizes in Srinagar. Even in May and June, evenings in Pahalgam and the top of the Gulmarg Gondola are cold, so carry a jacket.",
      },
      {
        heading: "Food for Mumbai travellers",
        body: "Kashmiri food is meat-heavy, but vegetarian food is easy to find in Srinagar, Gulmarg and Pahalgam: dal, rajma, paneer dishes, Kashmiri dum aloo, haak (collard greens) and nadru (lotus stem). Most hotels and houseboats can cook vegetarian or Jain meals if told in advance, and Gujarati and Maharashtrian travellers often ask for less spicy, home-style food, which agents can arrange. Ask your agent to note dietary needs in the booking.",
      },
      {
        heading: "A 6 nights Kashmir plan from Mumbai",
        body: "Day 1: direct flight from Mumbai, Srinagar houseboat and shikara. Day 2: Mughal gardens and the old city. Day 3: Sonamarg day trip. Day 4: Gulmarg with the gondola, overnight. Day 5: Pahalgam via Srinagar. Day 6: Pahalgam valleys by union taxi. Day 7: drive to Srinagar for the flight home. With only 5 nights, drop the Gulmarg overnight and do it as a day trip.",
      },
    ],
    faqs: [
      { q: "Is there a direct flight from Mumbai to Srinagar?", a: "Yes, several airlines fly direct, taking about 2.5 to 3 hours. One-stop flights through Delhi are also common." },
      { q: "How long is the train from Mumbai to Kashmir?", a: "Roughly 30 to 36 hours to Jammu or Katra, then about 3 hours from Katra to Srinagar. Check current trains on IRCTC." },
      { q: "Is Kashmir good during Mumbai's monsoon?", a: "Yes. From June to September, Srinagar is mostly dry and warm while Mumbai is wet, though July and August bring occasional showers." },
      { q: "Can Mumbai travellers get vegetarian food in Kashmir?", a: "Yes. Hotels and houseboats can cook vegetarian or Jain meals if told in advance." },
    ],
  },
  bangalore: {
    blocks: [
      {
        heading: "Bengaluru to Srinagar flights",
        body: "Some airlines fly from Bengaluru to Srinagar direct on certain days and seasons, taking about 3.5 to 4 hours; most travellers fly one-stop through Delhi, with a total journey of 5 to 7 hours depending on the connection. Morning departures from Bengaluru give the best chance of reaching Srinagar the same afternoon. In winter, allow a generous connection time in Delhi, where fog can delay flights, and avoid the last flight of the day into Srinagar, which is more likely to be affected by weather.",
      },
      {
        heading: "Bengaluru to Kashmir by train",
        body: "Long-distance trains connect Bengaluru with Jammu Tawi and Katra, but the journey takes two days or more, so few travellers choose it for a Kashmir holiday. If you want to add Vaishno Devi, a better plan is to fly to Jammu or Delhi and take the train to Katra, then continue by train from Katra to Srinagar in about 3 hours. Check current trains on IRCTC.",
      },
      {
        heading: "When Bengaluru travellers go to Kashmir",
        body: "Karnataka's school summer holidays, from April to May, are the peak for families. Working professionals often use long weekends around Dasara in October, Diwali and the Christmas to New Year week, when many offices close; these are good times for autumn colours and snow respectively. April brings the Tulip Garden and spring blossom. Bengaluru travellers who can choose their dates often prefer late September and October, with clear skies and fewer crowds.",
      },
      {
        heading: "From Bengaluru's mild climate to Kashmir's cold",
        body: "Bengaluru's weather rarely falls below 15°C, so Kashmir's winter is a big change: nights below freezing in Srinagar and much colder in Gulmarg. Pack thermals, a heavy jacket, gloves, woollen socks and waterproof shoes, or plan to rent snow gear in Gulmarg. In spring and autumn, a fleece and a light down jacket are enough for most days, with warmer layers for the evenings and the gondola.",
      },
      {
        heading: "South Indian and vegetarian food in Kashmir",
        body: "Srinagar has a few restaurants serving South Indian dishes such as dosa and idli, mostly around the Boulevard and Lal Chowk, and many hotels can make simple rice, dal, curd and vegetable meals on request. Vegetarian Kashmiri dishes worth trying include dum aloo, haak, nadru yakhni and rajma with Kashmiri rice. Mention dietary needs when booking, especially for houseboats and Pahalgam hotels.",
      },
      {
        heading: "A 5 nights Kashmir plan from Bengaluru",
        body: "Day 1: early flight via Delhi or direct, Srinagar houseboat and evening shikara if you land in time. Day 2: Srinagar gardens and old city. Day 3: Gulmarg with the gondola. Day 4: Pahalgam, overnight. Day 5: Pahalgam valleys by union taxi, back to Srinagar in the evening. Day 6: Sonamarg in the morning if your flight is late, or straight to the airport. Because the journey takes most of a day each way, 5 or 6 nights works best from Bengaluru.",
      },
    ],
    faqs: [
      { q: "Is there a direct flight from Bengaluru to Srinagar?", a: "Some airlines operate direct flights on certain days or seasons, about 3.5 to 4 hours. Most travellers connect through Delhi." },
      { q: "How long does it take to reach Kashmir from Bengaluru?", a: "About 5 to 7 hours by air with a connection in Delhi, or 3.5 to 4 hours on a direct flight." },
      { q: "When is the best time to visit Kashmir from Bengaluru?", a: "April and May for school holidays, October for clear skies, and the Christmas to New Year week for snow." },
      { q: "Can I get South Indian food in Kashmir?", a: "Yes, at some restaurants in Srinagar, and hotels can make simple rice, dal and curd meals on request." },
    ],
  },
  chennai: {
    blocks: [
      {
        heading: "Chennai to Srinagar flights",
        body: "Most travellers from Chennai fly to Srinagar with one stop, usually through Delhi, with a total journey of about 5 to 7 hours depending on the connection; some airlines offer through routings via other cities. Choose an early departure from Chennai so that you reach Srinagar in daylight. In winter, allow at least two to three hours in Delhi, as fog can delay the connecting flight. Booking both legs on one ticket protects you if the first flight is late.",
      },
      {
        heading: "Chennai to Kashmir by train",
        body: "Long-distance trains connect Chennai with Jammu Tawi and Katra, taking roughly two days or more. Few holidaymakers choose this for the whole journey, but pilgrims combining Vaishno Devi and Kashmir sometimes do. From Katra, trains run to Srinagar in about 3 hours. Check current trains and days on IRCTC.",
      },
      {
        heading: "When Chennai travellers go to Kashmir",
        body: "Tamil Nadu's school summer holidays in April and May are the main season, when Kashmir is green and pleasant, and the Tulip Garden is open in early April. Pongal in January and the Christmas to New Year week bring travellers looking for snow. October, after the north-east monsoon starts in Chennai, is a good time for clear skies and autumn in Kashmir. Many Chennai families combine Kashmir with Vaishno Devi or a few days in Delhi and Agra.",
      },
      {
        heading: "From Chennai's heat to Kashmir's cold",
        body: "Chennai rarely drops below 20°C, so Kashmir can be a shock in any season except high summer. In April and May, Srinagar days are pleasant but mornings and evenings are cool, and Gulmarg and Sonamarg are cold. From November to March, temperatures fall well below freezing at night. Buy good thermals, a warm jacket, gloves and woollen socks before travelling, and rent snow boots in Gulmarg. Children and older travellers feel the cold most; keep them in layers.",
      },
      {
        heading: "South Indian and vegetarian food in Kashmir",
        body: "Srinagar has a few restaurants serving South Indian meals and tiffin, mostly near the Boulevard and Lal Chowk. Hotels and houseboats can prepare rice, sambar-style dal, curd and vegetables if you ask in advance, and many families from Tamil Nadu carry ready-to-eat items and podi for comfort. Vegetarian Kashmiri dishes such as dum aloo and haak are worth trying. Mention food preferences clearly to your agent.",
      },
      {
        heading: "A 6 nights Kashmir plan from Chennai",
        body: "Day 1: early flight via Delhi, arrive in Srinagar, rest on a houseboat. Day 2: Mughal gardens and shikara ride. Day 3: Sonamarg day trip. Day 4: Gulmarg with the gondola, overnight. Day 5: Pahalgam, overnight. Day 6: Pahalgam valleys by union taxi, back to Srinagar. Day 7: flight home via Delhi. A rest-heavy first day helps after the long journey, especially for older travellers.",
      },
    ],
    faqs: [
      { q: "How do I reach Srinagar from Chennai?", a: "By air with one stop, usually through Delhi, about 5 to 7 hours in total. Book both legs on one ticket." },
      { q: "Is there a train from Chennai to Kashmir?", a: "Long-distance trains run to Jammu Tawi and Katra in about two days or more, then Katra to Srinagar in about 3 hours. Check IRCTC." },
      { q: "When do Chennai families visit Kashmir?", a: "Mostly in April and May for school holidays, and in late December or January for snow." },
      { q: "Can I get South Indian food in Srinagar?", a: "Yes, at a few restaurants, and hotels can make rice, dal and curd meals on request." },
    ],
  },
  hyderabad: {
    blocks: [
      {
        heading: "Hyderabad to Srinagar flights",
        body: "Some airlines operate direct flights between Hyderabad and Srinagar on certain days or seasons, taking about 3 to 3.5 hours; otherwise, one-stop flights through Delhi take about 5 to 7 hours in total. Early departures give the best chance of reaching Srinagar in daylight. In winter, leave a comfortable connection time in Delhi for fog delays, and avoid the last flight of the day into Srinagar.",
      },
      {
        heading: "Hyderabad to Kashmir by train",
        body: "Trains from Hyderabad to Jammu Tawi or Katra take roughly a day and a half to two days, often with a change. Most holidaymakers fly, and use the train only between Katra and Srinagar, about 3 hours, if they add Vaishno Devi. Check current trains on IRCTC.",
      },
      {
        heading: "When Hyderabad travellers go to Kashmir",
        body: "Telangana's school summer holidays in April and May are the peak, along with the Dasara holidays in October, which fall in Kashmir's clear, golden autumn. Sankranti in January and the Christmas to New Year week bring families looking for snow. Ramadan and Eid dates also shape travel for many Hyderabadi families; Srinagar is a lively place to be around Eid, though some restaurants keep shorter hours during Ramadan days.",
      },
      {
        heading: "Food for Hyderabadi travellers",
        body: "Hyderabadi travellers usually feel at home with Kashmiri food: the wazwan feast, with rista, gushtaba, rogan josh and kebabs, is a highlight, and Srinagar also has biryani and Mughlai restaurants. Halal food is the norm across Kashmir. Vegetarian travellers will find dal, rajma, dum aloo and haak easily. Try harissa, a slow-cooked mutton dish sold in the old city in winter, and Kashmiri breads from the local bakeries in the morning.",
      },
      {
        heading: "Packing for the cold from Hyderabad",
        body: "Hyderabad's winters are mild, so pack seriously for Kashmir: thermals, a heavy jacket, gloves and woollen socks from November to March, and a warm layer even in May for Gulmarg and Sonamarg. Snow boots and long coats can be rented in Gulmarg and at Thajiwas. Moisturiser and lip balm help in the dry winter air.",
      },
      {
        heading: "A 5 nights Kashmir plan from Hyderabad",
        body: "Day 1: arrive in Srinagar, houseboat and shikara ride. Day 2: Mughal gardens, Hazratbal and the old city with a wazwan lunch. Day 3: Gulmarg with the gondola. Day 4: Pahalgam, overnight. Day 5: Pahalgam valleys by union taxi and back to Srinagar. Day 6: Sonamarg if time allows, or departure. Add a night for Sonamarg or Doodhpathri in summer.",
      },
    ],
    faqs: [
      { q: "Is there a direct flight from Hyderabad to Srinagar?", a: "Some airlines fly direct on certain days or seasons, about 3 to 3.5 hours. Otherwise, connect through Delhi." },
      { q: "When is the best time to visit Kashmir from Hyderabad?", a: "April and May for school holidays, October for Dasara and clear skies, and late December or January for snow." },
      { q: "Is halal food available in Kashmir?", a: "Yes, halal food is the norm across Kashmir." },
      { q: "Can I visit Kashmir during Ramadan?", a: "Yes. Life continues normally, though some restaurants keep shorter daytime hours, and evenings are lively." },
    ],
  },
  kolkata: {
    blocks: [
      {
        heading: "Kolkata to Srinagar flights",
        body: "Most travellers from Kolkata fly to Srinagar with one stop, usually through Delhi, taking about 5 to 7 hours in total; some airlines offer direct or through flights on certain days. Choose early departures and book both legs on one ticket. In winter, leave a generous connection time in Delhi because of fog. Bengali travellers often combine Kashmir with a few days in Delhi, Agra or Amritsar on the way.",
      },
      {
        heading: "Kolkata to Kashmir by train",
        body: "Trains from Howrah and Sealdah run to Jammu Tawi, taking roughly a day and a half or more, with some services continuing to Katra. Many Bengali families have long made the Kashmir trip by train, stopping at Vaishno Devi; today, most fly, or take the train to Katra and then the Katra to Srinagar train, about 3 hours. Check current trains on IRCTC.",
      },
      {
        heading: "Kashmir in the Puja holidays",
        body: "Durga Puja and the long Puja holidays in late September or October are the biggest Kashmir season for travellers from Kolkata and West Bengal. It is a lovely time: clear skies, cool days, golden autumn in Pahalgam and, by late October, the chinars turning in Srinagar. Because so many Bengali families travel then, hotels, houseboats and flights fill months ahead; book as early as possible, and avoid planning your Gulmarg gondola day for the busiest weekend.",
      },
      {
        heading: "Other seasons for Kolkata travellers",
        body: "West Bengal's summer holidays in May are the second peak, with green meadows and pleasant weather. The Christmas to New Year week brings families for snow. Spring, from late March to April, is quieter from Kolkata but beautiful, with the Tulip Garden and blossom. Avoid July and August if you dislike crowds on the Pahalgam and Sonamarg roads during the Amarnath Yatra.",
      },
      {
        heading: "Food for Bengali travellers",
        body: "Kashmir is a fish-and-rice friendly place for Bengali travellers: trout from the Kashmir rivers is served in Pahalgam, Kokernag and Srinagar, and rice is the staple of every Kashmiri meal. Many hotels and houseboats can cook simple, less spicy food with rice and dal on request, and Srinagar has restaurants serving North Indian and Chinese food. Try Kashmiri haak, nadru (lotus stem) and the breads from local bakeries.",
      },
      {
        heading: "A 6 nights Kashmir plan from Kolkata for the Puja holidays",
        body: "Day 1: flight via Delhi, Srinagar houseboat. Day 2: Mughal gardens, Hazratbal and a sunset shikara ride. Day 3: Sonamarg day trip. Day 4: Gulmarg with the gondola, overnight. Day 5: Pahalgam, overnight. Day 6: Aru, Betaab and Chandanwari by union taxi. Day 7: drive to Srinagar for the flight home. In late October, keep a slow morning in Srinagar for the chinar colour in the gardens.",
      },
    ],
    faqs: [
      { q: "How do I reach Srinagar from Kolkata?", a: "Usually by air with one stop through Delhi, about 5 to 7 hours in total. Some airlines offer direct or through flights on certain days." },
      { q: "Is Durga Puja a good time to visit Kashmir?", a: "Yes, it is clear, cool and colourful, but it is also peak season for Bengali travellers, so book early." },
      { q: "Is there a train from Kolkata to Kashmir?", a: "Trains run from Howrah and Sealdah to Jammu Tawi, some continuing to Katra, then Katra to Srinagar by train in about 3 hours. Check IRCTC." },
      { q: "Can I get fish in Kashmir?", a: "Yes, trout from the Kashmir rivers is served in Pahalgam, Kokernag and Srinagar." },
    ],
  },
};

export const KASHMIR_ORIGINS_DEEP_1: Record<string, Partial<GuideContent>> = {
  kashmir: { packages: { fromOrigins } },
};
