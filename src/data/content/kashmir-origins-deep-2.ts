// Batch 4 part 2 (2026-11-15): city-specific copy for "Kashmir tour packages
// from" Pune, Ahmedabad, Jaipur, Indore and Lucknow. See
// kashmir-origins-deep-1.ts for the rules.

import type { GuideContent, SectionContent } from "@/lib/locations";

const fromOrigins: Record<string, SectionContent> = {
  pune: {
    blocks: [
      {
        heading: "Pune to Srinagar flights",
        body: "Most travellers from Pune fly to Srinagar with one stop, through Delhi or Mumbai, taking about 5 to 7 hours in total; some travellers drive to Mumbai for a direct flight. Morning departures from Pune give the best chance of reaching Srinagar in daylight. In winter, allow a generous connection in Delhi for fog. Booking both legs on one ticket protects your connection if the first flight is late.",
      },
      {
        heading: "Pune to Kashmir by train",
        body: "Long-distance trains run from Pune to Jammu Tawi, taking roughly a day and a half or more; from Jammu or Katra, the train continues to Srinagar, about 3 hours from Katra. It is a long trip, chosen mainly by pilgrims who want to combine Vaishno Devi with Kashmir. Check current trains and days on IRCTC.",
      },
      {
        heading: "When Pune travellers go to Kashmir",
        body: "Maharashtra's summer holidays, from mid April to early June, are the busiest time for Pune families; the Tulip Garden is open in early April and the meadows are green in May. The Diwali break brings travellers for clear skies and autumn colour. Ganesh Chaturthi and the monsoon months are quieter, but Kashmir is mostly dry and pleasant from June to September while Pune is rainy. The Christmas to New Year week is popular for snow in Gulmarg.",
      },
      {
        heading: "Packing for Kashmir from Pune",
        body: "Pune's winters are mild, so Kashmir from November to March needs proper winter clothing: thermals, a heavy jacket, gloves, a cap and waterproof shoes, with snow boots rented in Gulmarg. In summer, a light jacket and layers are enough for most days, but evenings in Pahalgam and the top of the gondola are cold. Carry sunscreen and sunglasses for the snow.",
      },
      {
        heading: "Vegetarian and Maharashtrian food in Kashmir",
        body: "Vegetarian food is easy to find in Srinagar, Gulmarg and Pahalgam, and most hotels and houseboats can cook simple, less spicy meals of rice, dal, chapati and vegetables if asked in advance. Some restaurants in Srinagar serve Indian, Chinese and continental dishes. Many Maharashtrian families carry snacks and ready-to-eat items for the long travel days. Mention dietary needs in your booking.",
      },
      {
        heading: "A 5 nights Kashmir plan from Pune",
        body: "Day 1: flight via Delhi or Mumbai, Srinagar houseboat. Day 2: Mughal gardens and shikara ride. Day 3: Gulmarg with the gondola. Day 4: Pahalgam, overnight. Day 5: Pahalgam valleys by union taxi, back to Srinagar. Day 6: Sonamarg in the morning if your flight is late, or departure. With six nights, add Sonamarg as a full day or a Gulmarg overnight.",
      },
    ],
    faqs: [
      { q: "Is there a direct flight from Pune to Srinagar?", a: "Most travellers connect through Delhi or Mumbai, about 5 to 7 hours in total. Some drive to Mumbai for a direct flight." },
      { q: "How long is the train from Pune to Jammu?", a: "Roughly a day and a half or more. Check current trains on IRCTC." },
      { q: "When do Pune families visit Kashmir?", a: "Mostly from mid April to early June for school holidays, and at Diwali and the Christmas to New Year week." },
      { q: "Can I get vegetarian food in Kashmir from Pune?", a: "Yes. Hotels and houseboats cook vegetarian meals on request, and many restaurants in Srinagar serve them." },
    ],
  },
  ahmedabad: {
    blocks: [
      {
        heading: "Ahmedabad to Srinagar flights",
        body: "Some airlines fly from Ahmedabad to Srinagar direct on certain days, taking about 2.5 to 3 hours; otherwise, one-stop flights through Delhi take about 4 to 6 hours. Direct flights fill early in the Diwali and summer holidays, when Gujarati families travel in large numbers. In winter, give connections through Delhi plenty of time for fog.",
      },
      {
        heading: "Ahmedabad to Kashmir by train",
        body: "Trains run from Ahmedabad to Jammu Tawi and Shri Mata Vaishno Devi Katra, taking roughly a day and a half. From Katra, the train to Srinagar takes about 3 hours. Many Gujarati families combine Vaishno Devi and Kashmir this way. Check current trains and days on IRCTC.",
      },
      {
        heading: "Kashmir in the Diwali holidays",
        body: "The Diwali and Gujarati New Year holidays, in October or November, are one of the biggest Kashmir seasons for Gujarat. The weather is clear and cool, the valleys are golden and, by early November, the chinars in Srinagar turn red and gold. Because so many families travel then, book hotels, houseboats and flights early. Summer holidays in May and June are the other peak.",
      },
      {
        heading: "Jain and vegetarian food in Kashmir",
        body: "Gujarati travellers can eat well in Kashmir with a little planning. Vegetarian dishes are widely available, and many hotels, houseboats and agents serving Gujarati groups can arrange Jain meals without onion, garlic or root vegetables if requested in advance. Some restaurants in Srinagar and Katra cater specially to vegetarian and Jain travellers. Many families carry theplas, khakhras and snacks for the journey. State food needs clearly in your booking, and confirm them with each hotel.",
      },
      {
        heading: "Packing for Kashmir from Ahmedabad",
        body: "Ahmedabad's winters are mild, so pack seriously for Kashmir from November to March: thermals, a heavy jacket, gloves, a cap and waterproof shoes, with snow boots rented in Gulmarg. In Diwali season, days in Srinagar are pleasant but nights are cold, and Gulmarg can be near freezing. In May and June, a light jacket and layers suffice for most days.",
      },
      {
        heading: "A 6 nights Kashmir plan from Ahmedabad with Vaishno Devi",
        body: "Day 1: train or flight to Katra or Jammu. Day 2: Vaishno Devi yatra, back to Katra. Day 3: train from Katra to Srinagar, about 3 hours, and a shikara ride. Day 4: Gulmarg with the gondola. Day 5: Pahalgam, overnight. Day 6: Pahalgam valleys by union taxi, back to Srinagar. Day 7: Mughal gardens and departure. Without Vaishno Devi, use the extra days for Sonamarg and a slower Srinagar.",
      },
    ],
    faqs: [
      { q: "Is there a direct flight from Ahmedabad to Srinagar?", a: "Some airlines fly direct on certain days, about 2.5 to 3 hours. Otherwise, connect through Delhi." },
      { q: "Can I get Jain food in Kashmir?", a: "Yes, with advance notice. Many hotels, houseboats and agents serving Gujarati groups can arrange Jain meals." },
      { q: "Is Diwali a good time for Kashmir from Ahmedabad?", a: "Yes, it is clear and colourful, but it is peak season for Gujarati travellers, so book early." },
      { q: "How do I combine Vaishno Devi and Kashmir from Ahmedabad?", a: "Take a train or flight to Katra or Jammu, do the yatra, then take the train from Katra to Srinagar in about 3 hours." },
    ],
  },
  jaipur: {
    blocks: [
      {
        heading: "Jaipur to Srinagar flights",
        body: "Most travellers from Jaipur fly to Srinagar with one stop through Delhi, taking about 4 to 6 hours in total; some airlines run direct flights on certain days or seasons. Because Delhi is only about five hours away by road and has many direct flights to Srinagar, some Jaipur travellers drive or take a train to Delhi and fly from there.",
      },
      {
        heading: "Jaipur to Kashmir by train or road",
        body: "Trains run from Jaipur to Jammu Tawi, taking roughly 14 to 18 hours, and from Katra the train continues to Srinagar in about 3 hours. By road, Jaipur to Srinagar is about 1,050 km via Delhi or via Haryana and Punjab, usually two to three days with stops in Amritsar or Jammu. Check current trains on IRCTC.",
      },
      {
        heading: "Adding Amritsar on the way",
        body: "Travellers from Rajasthan driving or taking the train often stop in Amritsar for the Golden Temple and the Wagah border ceremony before continuing to Jammu and Kashmir. It breaks a long journey and adds one of India's most moving sights. From Amritsar, Srinagar is a day's drive via Pathankot and Jammu, or a short flight.",
      },
      {
        heading: "When Jaipur travellers go to Kashmir",
        body: "Rajasthan's summer heat makes May and June the busiest months, when Kashmir is green and in the twenties by day. Diwali and the winter break bring travellers for autumn colours and snow. April is lovely for the Tulip Garden. Families escaping the desert summer often book a week or more.",
      },
      {
        heading: "Packing and food from Jaipur",
        body: "Jaipur's winters can be cool, but Kashmir is far colder; pack thermals, a heavy jacket, gloves and a cap from November to March. In summer, a light jacket and layers. Vegetarian food is widely available, and hotels can cook simple, home-style meals; mention preferences when booking.",
      },
      {
        heading: "A 6 nights Kashmir plan from Jaipur",
        body: "Day 1: flight via Delhi, Srinagar houseboat. Day 2: Mughal gardens and shikara ride. Day 3: Sonamarg. Day 4: Gulmarg with the gondola, overnight. Day 5: Pahalgam, overnight. Day 6: Pahalgam valleys by union taxi. Day 7: drive to Srinagar for the flight home. Road travellers can add Amritsar and Jammu on the way.",
      },
    ],
    faqs: [
      { q: "How do I reach Srinagar from Jaipur?", a: "Usually by air with one stop through Delhi, about 4 to 6 hours. Some airlines run direct flights on certain days or seasons." },
      { q: "How long is the train from Jaipur to Jammu?", a: "Roughly 14 to 18 hours, then about 3 hours from Katra to Srinagar. Check IRCTC." },
      { q: "Can I add Amritsar to a Kashmir trip from Jaipur?", a: "Yes, it is a natural stop on the road or rail route to Jammu and Kashmir." },
      { q: "When is Kashmir best for travellers from Jaipur?", a: "May and June to escape the heat, April for the Tulip Garden, and winter for snow." },
    ],
  },
  indore: {
    blocks: [
      {
        heading: "Indore to Srinagar flights",
        body: "Most travellers from Indore fly to Srinagar with one stop, usually through Delhi, taking about 4 to 6 hours in total. Early departures from Indore make it possible to reach Srinagar in the afternoon. In winter, leave time in Delhi for fog delays.",
      },
      {
        heading: "Indore to Kashmir by train",
        body: "Trains run from Indore to Jammu Tawi and Shri Mata Vaishno Devi Katra, taking roughly a day or more. From Katra, the train to Srinagar takes about 3 hours. The route is popular with families from Malwa who combine Vaishno Devi and Kashmir. Check current trains on IRCTC.",
      },
      {
        heading: "When Indore travellers go to Kashmir",
        body: "May and June, when Madhya Pradesh is hot and schools are closed, are the busiest months. Diwali and the Navratri period are popular for combined Vaishno Devi and Kashmir trips, so book Katra and Srinagar stays early in those weeks. October is excellent for clear skies, and December to February for snow.",
      },
      {
        heading: "Food and packing from Indore",
        body: "Indore travellers who love food will enjoy Kashmir's breads, kahwa and, for non-vegetarians, the wazwan. Vegetarian food is easy to find, and hotels can cook simple meals on request. Pack proper winter clothing from November to March, since Kashmir is much colder than Malwa, and a light jacket in summer.",
      },
      {
        heading: "A 6 nights plan from Indore with Vaishno Devi",
        body: "Day 1: train or flight to Katra or Jammu. Day 2: Vaishno Devi yatra. Day 3: train from Katra to Srinagar and a shikara ride. Day 4: Gulmarg. Day 5: Pahalgam, overnight. Day 6: Pahalgam valleys, back to Srinagar. Day 7: Mughal gardens and departure.",
      },
    ],
    faqs: [
      { q: "How do I reach Srinagar from Indore?", a: "Usually by air with one stop through Delhi, about 4 to 6 hours in total." },
      { q: "Is there a train from Indore to Katra?", a: "Yes, trains run from Indore to Jammu Tawi and Katra in roughly a day or more. Check IRCTC." },
      { q: "When is Kashmir best from Indore?", a: "May and June for school holidays, October for clear skies, and winter for snow." },
      { q: "Can I combine Vaishno Devi and Kashmir from Indore?", a: "Yes, by going to Katra first, then taking the train to Srinagar in about 3 hours." },
    ],
  },
  lucknow: {
    blocks: [
      {
        heading: "Lucknow to Srinagar flights",
        body: "Some airlines fly from Lucknow to Srinagar direct on certain days or seasons; most travellers connect through Delhi, with a total of about 4 to 6 hours. Choose early departures and leave time in Delhi for winter fog. Lucknow is also within a day's train ride of Delhi, which has many direct flights to Srinagar.",
      },
      {
        heading: "Lucknow to Kashmir by train",
        body: "Trains run from Lucknow to Jammu Tawi and Katra, taking roughly 18 to 22 hours. From Katra, the train continues to Srinagar in about 3 hours. The train is popular with families who combine Vaishno Devi and Kashmir. Check current trains on IRCTC.",
      },
      {
        heading: "When Lucknow travellers go to Kashmir",
        body: "May and June, at the height of the Uttar Pradesh summer, are the busiest months. Diwali and the winter break bring travellers for autumn colour and snow. Eid holidays are also popular with many Lucknowi families, and Srinagar is a lively place to spend them.",
      },
      {
        heading: "Food for travellers from Lucknow",
        body: "Lucknow's food lovers will find a lot to enjoy: the Kashmiri wazwan, with rista, gushtaba and kebabs, has much in common with the Awadhi love of slow-cooked meat, and halal food is the norm across Kashmir. Vegetarian travellers will find dal, rajma, dum aloo and haak everywhere. Try harissa in the old city of Srinagar in winter, and Kashmiri breads with noon chai in the morning.",
      },
      {
        heading: "Packing from Lucknow",
        body: "Lucknow's winters are cool, but Kashmir is much colder: add thermals, a heavier jacket, gloves and a cap for December to February, and rent snow boots in Gulmarg. In May and June, carry a light jacket for the evenings and the mountains.",
      },
      {
        heading: "A 5 nights Kashmir plan from Lucknow",
        body: "Day 1: flight via Delhi or direct, Srinagar houseboat. Day 2: Mughal gardens, Hazratbal and a wazwan lunch. Day 3: Gulmarg. Day 4: Pahalgam, overnight. Day 5: Pahalgam valleys, back to Srinagar. Day 6: Sonamarg in the morning or departure.",
      },
    ],
    faqs: [
      { q: "Is there a direct flight from Lucknow to Srinagar?", a: "Some airlines fly direct on certain days or seasons. Most travellers connect through Delhi, about 4 to 6 hours in total." },
      { q: "How long is the train from Lucknow to Jammu?", a: "Roughly 18 to 22 hours, then about 3 hours from Katra to Srinagar. Check IRCTC." },
      { q: "When do Lucknow travellers visit Kashmir?", a: "May and June for the summer holidays, and Diwali, Eid and the winter break." },
      { q: "Is the food in Kashmir similar to Lucknow's?", a: "The wazwan's slow-cooked meat dishes and halal food will feel familiar, though the spices and style are distinctly Kashmiri." },
    ],
  },
};

export const KASHMIR_ORIGINS_DEEP_2: Record<string, Partial<GuideContent>> = {
  kashmir: { packages: { fromOrigins } },
};
