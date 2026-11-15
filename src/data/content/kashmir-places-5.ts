// Kashmir place pages, batch 2 part 5 (2026-11-15): Jammu, Katra and
// Patnitop places. See kashmir-places-1.ts for the rules. Shrine Board
// services and rates change; readers are sent to the official channels.

import type { GuideContent, MonthGuide } from "@/lib/locations";

type Climate = [string, string, string][];

const months = (climate: Climate, goodFor: string[]): MonthGuide[] =>
  climate.map(([month, tempC, weather], i) => ({ month, tempC, weather, goodFor: goodFor[i] }));

// Jammu city (about 330 m): typical day and night ranges, rounded.
const JAMMU_CLIMATE: Climate = [
  ["January", "Day 17 to 20°C, night 6 to 8°C", "Cool, often foggy mornings and pleasant sunny afternoons."],
  ["February", "Day 20 to 23°C, night 8 to 10°C", "Mild and pleasant; spring arrives late in the month."],
  ["March", "Day 25 to 28°C, night 12 to 14°C", "Warm days and comfortable evenings."],
  ["April", "Day 31 to 34°C, night 17 to 19°C", "Hot afternoons begin."],
  ["May", "Day 36 to 39°C, night 22 to 24°C", "Very hot; sightseeing early or late in the day."],
  ["June", "Day 37 to 40°C, night 25 to 27°C", "Hottest month until the monsoon arrives late in the month."],
  ["July", "Day 33 to 35°C, night 25 to 26°C", "Monsoon: humid with heavy showers."],
  ["August", "Day 32 to 34°C, night 24 to 26°C", "Monsoon continues; green and humid."],
  ["September", "Day 32 to 34°C, night 22 to 23°C", "Rain eases; still warm."],
  ["October", "Day 29 to 32°C, night 16 to 18°C", "Pleasant, dry and clear."],
  ["November", "Day 24 to 27°C, night 10 to 12°C", "Comfortable days and cool evenings."],
  ["December", "Day 19 to 22°C, night 6 to 8°C", "Cool and dry; fog some mornings."],
];

// Katra (about 750 m); the Bhawan, about 1,585 m, is roughly 8 to 10°C colder.
const KATRA_CLIMATE: Climate = [
  ["January", "Day 14 to 17°C, night 4 to 6°C (Bhawan near freezing at night)", "Cold mornings on the track; snow on the Trikuta peaks some years."],
  ["February", "Day 16 to 19°C, night 6 to 8°C", "Cool and pleasant for the climb."],
  ["March", "Day 21 to 24°C, night 10 to 12°C", "Comfortable; Navratri crowds in some years."],
  ["April", "Day 27 to 30°C, night 15 to 17°C", "Warm; busy holiday season begins."],
  ["May", "Day 32 to 35°C, night 19 to 22°C", "Hot in Katra, mild at the Bhawan; very busy."],
  ["June", "Day 33 to 36°C, night 22 to 24°C", "Hot and crowded until the monsoon."],
  ["July", "Day 30 to 33°C, night 22 to 24°C", "Monsoon rain; slippery track and occasional landslides."],
  ["August", "Day 29 to 32°C, night 22 to 23°C", "Monsoon continues; check weather before the climb."],
  ["September", "Day 29 to 31°C, night 20 to 21°C", "Rain eases; greener hills."],
  ["October", "Day 26 to 29°C, night 15 to 17°C", "Pleasant; Navratri brings large crowds."],
  ["November", "Day 21 to 24°C, night 10 to 12°C", "Cool and clear; comfortable climbing."],
  ["December", "Day 16 to 19°C, night 6 to 8°C", "Cold at the Bhawan; New Year crowds."],
];

// Patnitop (about 2,020 m) on the Jammu to Srinagar highway.
const PATNITOP_CLIMATE: Climate = [
  ["January", "Day 3 to 7°C, night -4 to -1°C", "Snow most years; the main snow month."],
  ["February", "Day 4 to 8°C, night -3 to 0°C", "Snow and cold; sledging when there is cover."],
  ["March", "Day 9 to 13°C, night 1 to 4°C", "Snow melting; fresh and cool."],
  ["April", "Day 14 to 18°C, night 5 to 8°C", "Spring; pleasant days, cool nights."],
  ["May", "Day 19 to 23°C, night 9 to 12°C", "A cool escape from the heat of the plains."],
  ["June", "Day 21 to 25°C, night 12 to 15°C", "Busy summer season with families from Jammu and Punjab."],
  ["July", "Day 20 to 24°C, night 14 to 16°C", "Monsoon cloud and mist; green forest."],
  ["August", "Day 19 to 23°C, night 14 to 16°C", "Rain and mist; landslides possible on the highway."],
  ["September", "Day 18 to 22°C, night 11 to 13°C", "Clearing skies and fresh forest."],
  ["October", "Day 15 to 19°C, night 7 to 9°C", "Clear, crisp days with long views."],
  ["November", "Day 10 to 14°C, night 2 to 5°C", "Cold and clear; quiet."],
  ["December", "Day 5 to 9°C, night -2 to 1°C", "First snow usually late in the month."],
];

export const KASHMIR_PLACES_5: Record<string, Partial<GuideContent>> = {
  "jammu/places-to-visit/bahu-fort": {
    facts: [
      { label: "Where", value: "On a hill on the left bank of the Tawi, about 5 km from the city centre" },
      { label: "Inside", value: "Bawe Wali Mata (Mahakali) temple" },
      { label: "Below", value: "Bagh-e-Bahu terraced garden and aquarium" },
      { label: "Time needed", value: "1.5 to 2 hours with the garden" },
      { label: "Busiest", value: "Tuesdays and Sundays, and during Navratri" },
    ],
    blocks: [
      {
        heading: "What is Bahu Fort?",
        body: "Bahu Fort is the oldest fortified site in Jammu, standing on a rocky hill above the Tawi river on the opposite bank from the old city. Tradition says Raja Bahu Lochan built the first fort here around three thousand years ago, and his brother Jambu Lochan founded Jammu across the river. The present stone walls and gates were rebuilt by the Dogra rulers in the nineteenth century. Inside the fort is the Bawe Wali Mata temple, dedicated to the goddess Mahakali, one of the most revered temples in Jammu, and below the walls lies the Bagh-e-Bahu, a terraced garden with fountains and views over the river and city.",
      },
      {
        heading: "Bawe Wali Mata temple",
        body: "The temple inside Bahu Fort is dedicated to Mahakali, worshipped here as Bawe Wali Mata, the presiding deity of Jammu. Devotees come in large numbers on Tuesdays and Sundays and during the two Navratris, when the fort is crowded and the approach lanes are lined with stalls selling offerings. Remove shoes before entering the temple area, dress modestly and expect queues on festival days. The temple is a living place of worship rather than a museum.",
      },
      {
        heading: "Bagh-e-Bahu garden and aquarium",
        body: "The Bagh-e-Bahu is a terraced garden laid out below the fort walls in a style inspired by the Mughal gardens, with water channels, fountains, lawns and viewpoints over the Tawi and the city. It is a popular evening spot for Jammu families. The garden also has an underground aquarium built in the shape of a fish, entered through the fish's mouth, which children enjoy. There are small entry tickets for the garden and the aquarium; timings change, so check locally.",
      },
      {
        heading: "How to reach Bahu Fort",
        body: "Bahu Fort is about 5 km from the centre of Jammu, across the Tawi bridge, 15 to 20 minutes by cab or auto. From Jammu Tawi railway station it is about 4 km, and from Jammu airport about 8 km. Cabs and autos can drop you near the gate; the last part is a short walk up through the lanes of stalls.",
      },
      {
        heading: "Tips for visiting",
        body: "Visit in the morning or the late afternoon to avoid the midday heat, especially from April to September. Avoid Tuesdays and Sundays if you prefer a quiet visit. Carry little, as there may be security checks and shoe stands at the temple. Monkeys live around the fort; keep food out of sight. Combine Bahu Fort with the Raghunath Temple and Mubarak Mandi Palace in the old city for a half-day Jammu tour, or visit on the way to or from Katra.",
      },
      {
        heading: "Is Bahu Fort worth visiting?",
        body: "Yes, especially for travellers spending a night in Jammu before or after Vaishno Devi or Kashmir. It combines Jammu's most important goddess temple, a historic fort and a pleasant evening garden with views over the river, all in under two hours.",
      },
    ],
    months: months(JAMMU_CLIMATE, [
      "Pleasant afternoons; foggy mornings.",
      "Mild and comfortable for sightseeing.",
      "Warm; Navratri crowds in some years.",
      "Hot afternoons; visit in the morning.",
      "Very hot; go early or in the evening.",
      "Hottest month; evening visits only.",
      "Monsoon showers; green hills.",
      "Humid and rainy.",
      "Rain eases; still warm.",
      "Pleasant; Navratri crowds.",
      "Comfortable days.",
      "Cool and clear.",
    ]),
    faqs: [
      { q: "How old is Bahu Fort?", a: "Tradition dates the first fort to Raja Bahu Lochan about three thousand years ago. The present walls were rebuilt by the Dogra rulers in the nineteenth century." },
      { q: "Which temple is inside Bahu Fort?", a: "The Bawe Wali Mata temple, dedicated to Mahakali, the presiding deity of Jammu." },
      { q: "How far is Bahu Fort from Jammu Tawi station?", a: "About 4 km, 15 minutes by cab or auto." },
      { q: "What is Bagh-e-Bahu?", a: "A terraced garden below the fort, with fountains, lawns, river views and a fish-shaped underground aquarium." },
      { q: "When is Bahu Fort most crowded?", a: "On Tuesdays and Sundays and during Navratri." },
      { q: "How long do you need at Bahu Fort?", a: "About 1.5 to 2 hours for the temple and the garden." },
      { q: "Is there an entry fee at Bahu Fort?", a: "The temple is free. The garden and aquarium have small tickets; check timings locally." },
      { q: "Can I visit Bahu Fort on the way to Katra?", a: "Yes. Katra is about 50 km from Jammu, so Bahu Fort fits on the day you arrive or leave." },
    ],
  },
  "jammu/places-to-visit/raghunath-temple": {
    facts: [
      { label: "Deity", value: "Lord Rama" },
      { label: "Built", value: "Started under Maharaja Gulab Singh in the 1830s, completed under Maharaja Ranbir Singh around 1860" },
      { label: "Where", value: "Raghunath Bazaar, in the heart of old Jammu" },
      { label: "Time needed", value: "45 minutes to 1 hour" },
      { label: "Rules", value: "Security check at the gate; phones and bags may be restricted" },
    ],
    blocks: [
      {
        heading: "What is the Raghunath Temple?",
        body: "The Raghunath Temple is one of the largest temple complexes in northern India and the best-known landmark of Jammu's old city. Dedicated to Lord Rama, it was begun by Maharaja Gulab Singh, founder of the Dogra state of Jammu and Kashmir, and completed by his son Maharaja Ranbir Singh around 1860. The complex has seven shrines with towers covered in gold leaf inside, and its halls hold images of many gods and a large number of shivalingams. It also houses a library of old Sanskrit manuscripts collected by the Dogra rulers.",
      },
      {
        heading: "Visiting the temple",
        body: "The temple is in Raghunath Bazaar, Jammu's busiest market street, about 1 km from the city centre. Security is tight: bags, phones and cameras may have to be deposited at the counters near the gate. Remove shoes before entering. Morning and evening aartis are the most atmospheric times. Expect crowds during Ram Navami, Diwali and the Navratris.",
      },
      {
        heading: "Raghunath Bazaar",
        body: "The bazaar around the temple is one of the best places in Jammu to shop for dry fruits, Kashmiri shawls, Dogri crafts, spices, sweets and religious items, and to try local food such as kalari cheese, rajma chawal and kachalu chaat. Many pilgrims on their way to or from Vaishno Devi shop here. Bargain politely, and compare quality for expensive items such as pashmina.",
      },
      {
        heading: "Combining it with other Jammu sights",
        body: "The Raghunath Temple is a short walk from Mubarak Mandi Palace and the Ranbireshwar Temple, and about 15 minutes by road from Bahu Fort. A half-day tour of Jammu can cover all four, with lunch in the old city. If you have a few hours between a train and Katra, the temple and bazaar make the easiest stop.",
      },
      {
        heading: "Is the Raghunath Temple worth visiting?",
        body: "Yes. It is the spiritual and visual centre of old Jammu, a fine example of Dogra temple architecture and the easiest sight to fit into a Jammu stopover.",
      },
    ],
    months: months(JAMMU_CLIMATE, [
      "Pleasant days for walking the old city.",
      "Comfortable; good month for sightseeing.",
      "Warm; Ram Navami crowds in some years.",
      "Hot afternoons; visit for the morning aarti.",
      "Very hot; early morning or evening visits.",
      "Hottest month; evenings are best.",
      "Monsoon; humid streets.",
      "Rainy and humid.",
      "Warm; rain easing.",
      "Pleasant; Navratri and Diwali crowds.",
      "Comfortable and festive.",
      "Cool; good for walking.",
    ]),
    faqs: [
      { q: "Who built the Raghunath Temple in Jammu?", a: "It was begun by Maharaja Gulab Singh in the 1830s and completed by Maharaja Ranbir Singh around 1860." },
      { q: "Which god is worshipped at the Raghunath Temple?", a: "Lord Rama, with shrines to many other deities in the complex." },
      { q: "Are phones allowed in the Raghunath Temple?", a: "Bags, phones and cameras may have to be deposited at counters near the gate because of security." },
      { q: "Where is the Raghunath Temple?", a: "In Raghunath Bazaar, in the heart of old Jammu, about 1 km from the city centre." },
      { q: "What are the Raghunath Temple timings?", a: "It opens early in the morning and closes after the evening aarti, with a midday break. Check locally for exact hours." },
      { q: "What is Raghunath Bazaar famous for?", a: "Dry fruits, shawls, spices, sweets, religious items and local food like kalari cheese and rajma chawal." },
      { q: "How far is the Raghunath Temple from Jammu Tawi station?", a: "About 4 km, 15 minutes by cab or auto." },
      { q: "Can I visit the Raghunath Temple and Bahu Fort in one day?", a: "Yes, easily, along with Mubarak Mandi Palace, in a half-day Jammu tour." },
    ],
  },
  "jammu/places-to-visit/mubarak-mandi-palace": {
    facts: [
      { label: "What it is", value: "The former royal palace complex of the Dogra rulers" },
      { label: "Built", value: "From 1824, with additions over the following century" },
      { label: "Inside", value: "The Dogra Art Museum, with Pahari miniature paintings" },
      { label: "Where", value: "Old Jammu, above the Tawi, near the Raghunath Temple" },
      { label: "Time needed", value: "1 to 1.5 hours" },
    ],
    blocks: [
      {
        heading: "What is Mubarak Mandi Palace?",
        body: "Mubarak Mandi is the old royal palace complex of Jammu, the seat of the Dogra Maharajas who ruled Jammu and Kashmir from the 1820s until 1947. Construction began in 1824 and continued for over a century, so the buildings mix Rajasthani, Mughal and European styles: courtyards, carved balconies, arched halls and colonnaded facades on a ridge above the Tawi. After the rulers moved to the Hari Niwas Palace in the twentieth century, parts of the complex fell into disrepair, and some buildings were damaged by fires and earthquakes. Restoration has been under way for years.",
      },
      {
        heading: "The Dogra Art Museum",
        body: "Part of the complex houses the Dogra Art Museum, known for its collection of Pahari miniature paintings from the Basohli and Jammu schools, along with manuscripts, weapons, sculptures and royal objects. It is one of the best places to see the art of the Jammu hills. Check opening days and timings locally, as the museum may close on certain days or during restoration work.",
      },
      {
        heading: "Visiting the palace",
        body: "The complex is in old Jammu, a short walk from the Raghunath Temple. Some areas are open to visitors, while others are closed for conservation; follow the signs and staff instructions and do not enter unsafe buildings. Go in the morning or late afternoon to avoid the heat, and combine the visit with the temple and the old city bazaars.",
      },
      {
        heading: "Is Mubarak Mandi worth visiting?",
        body: "Yes, for travellers interested in history, architecture and art. It is the best place in Jammu to understand the Dogra dynasty that shaped modern Jammu and Kashmir, and the museum's miniatures alone are worth an hour.",
      },
    ],
    months: months(JAMMU_CLIMATE, [
      "Pleasant; good for walking the complex.",
      "Comfortable sightseeing weather.",
      "Warm; go in the morning.",
      "Hot afternoons.",
      "Very hot; early visits.",
      "Hottest month.",
      "Monsoon; check opening.",
      "Rainy and humid.",
      "Warm; fewer visitors.",
      "Pleasant and clear.",
      "Comfortable.",
      "Cool and pleasant.",
    ]),
    faqs: [
      { q: "Who built Mubarak Mandi Palace?", a: "The Dogra rulers of Jammu and Kashmir, starting in 1824, with additions over the following century." },
      { q: "What is inside Mubarak Mandi?", a: "Palace buildings and courtyards, and the Dogra Art Museum with Pahari miniature paintings." },
      { q: "Is Mubarak Mandi open to visitors?", a: "Parts of it, including the museum. Some buildings are closed for restoration; check locally." },
      { q: "Where is Mubarak Mandi Palace?", a: "In old Jammu, above the Tawi, a short walk from the Raghunath Temple." },
      { q: "How long does a visit take?", a: "About an hour to an hour and a half, including the museum." },
      { q: "What style is Mubarak Mandi?", a: "A mix of Rajasthani, Mughal and European architecture built up over a century." },
      { q: "Is there an entry fee at the Dogra Art Museum?", a: "There is usually a small ticket. Check opening days and timings locally." },
      { q: "Can I combine Mubarak Mandi with other Jammu sights?", a: "Yes, with the Raghunath Temple, Raghunath Bazaar and Bahu Fort in a half day." },
    ],
  },
  "jammu/places-to-visit/mansar-lake": {
    facts: [
      { label: "Distance from Jammu", value: "About 60 km, 2 hours by road" },
      { label: "Size", value: "About 1 km long, surrounded by forested hills" },
      { label: "Status", value: "Part of the Surinsar-Mansar Ramsar wetland site" },
      { label: "Known for", value: "Sheshnag shrine, boating, walking path around the lake" },
      { label: "Best months", value: "October to March" },
    ],
    blocks: [
      {
        heading: "What is Mansar Lake?",
        body: "Mansar is a forest-fringed lake in the Shivalik hills of Samba district, about 60 km east of Jammu. It is sacred to Hindus, who believe it is linked to the Mahabharata and to the serpent king Sheshnag, whose shrine stands on the shore; newly married couples traditionally come to take blessings here. With its sister lake Surinsar, it forms a Ramsar wetland of international importance, protected for its birds, turtles and fish. A paved path runs around the lake, and boating is available.",
      },
      {
        heading: "Things to do at Mansar",
        body: "Walk the path around the lake, about 2 km, through shady forest with views of the water. Visit the Sheshnag shrine and the old temples near the shore. Take a boat ride on the lake. Watch the turtles and fish that gather near the ghats. Visit the small wildlife sanctuary area nearby. Combine Mansar with Surinsar Lake, about 24 km away, for a full day out from Jammu.",
      },
      {
        heading: "How to reach Mansar Lake",
        body: "From Jammu, the drive takes about two hours via Samba or via Udhampur, through the Shivalik hills. Cabs from Jammu are the most practical option; local buses also run. Mansar fits well as a day trip from Jammu, or as a stop between Jammu and Katra or Patnitop if your itinerary allows.",
      },
      {
        heading: "When to go",
        body: "October to March is the most pleasant season, with mild days and clear air; winter brings migratory birds. April to June are hot, and July to September bring monsoon rain and green hills. Weekends and holidays are busy with families from Jammu.",
      },
      {
        heading: "Is Mansar Lake worth visiting?",
        body: "Yes, for travellers with a spare day in Jammu or on a slower Jammu region itinerary. It is a peaceful, green escape from the city, with religious and natural interest. It is not a must on a short Kashmir trip.",
      },
    ],
    months: months(JAMMU_CLIMATE, [
      "Cool and clear; migratory birds on the lake.",
      "Pleasant walking weather.",
      "Warm and green; comfortable.",
      "Hot afternoons; go in the morning.",
      "Very hot; early visits only.",
      "Hottest month; evening boating.",
      "Monsoon; lush forest, rain showers.",
      "Monsoon continues.",
      "Rain eases; green hills.",
      "Pleasant and clear; ideal.",
      "Comfortable; good for walking around the lake.",
      "Cool; winter birds return.",
    ]),
    faqs: [
      { q: "How far is Mansar Lake from Jammu?", a: "About 60 km, roughly 2 hours by road." },
      { q: "Is Mansar Lake a Ramsar site?", a: "Yes, as part of the Surinsar-Mansar wetland." },
      { q: "Is boating allowed at Mansar Lake?", a: "Yes, boating is available on the lake." },
      { q: "Why is Mansar Lake sacred?", a: "It is linked to the serpent king Sheshnag, whose shrine stands on the shore, and to Mahabharata legends." },
      { q: "When is the best time to visit Mansar?", a: "October to March, when the weather is mild and winter birds arrive." },
      { q: "How long is the walk around Mansar Lake?", a: "About 2 km on a paved path through the forest." },
      { q: "Can I visit Mansar and Surinsar in one day?", a: "Yes. They are about 24 km apart and make a full day out from Jammu." },
      { q: "Is Mansar Lake on the way to Katra?", a: "Not directly, but it can be added on a slower Jammu region itinerary." },
    ],
  },
  "katra/places-to-visit/ardhkuwari": {
    facts: [
      { label: "Where", value: "About halfway on the Vaishno Devi track, roughly 6 km from Banganga" },
      { label: "Shrine", value: "Garbh Joon, a narrow cave that pilgrims crawl through" },
      { label: "Entry", value: "By token or group number from the Shrine Board counter" },
      { label: "Facilities", value: "Bhojanalaya, rest areas, medical post, battery car point" },
    ],
    blocks: [
      {
        heading: "What is Ardhkuwari?",
        body: "Ardhkuwari, also called Adhkuwari, is the halfway point on the trek from Katra to the Mata Vaishno Devi Bhawan, and an important shrine in its own right. Here, according to the legend of Mata Vaishno Devi, the goddess meditated for nine months in a narrow cave, the Garbh Joon, before continuing to the holy cave at the Bhawan. Pilgrims pass through the Garbh Joon, a tight, winding passage in the rock, which many believe brings blessings. Ardhkuwari is also a natural rest stop, with food halls, shelters and services run by the Shri Mata Vaishno Devi Shrine Board.",
      },
      {
        heading: "Darshan at the Garbh Joon",
        body: "Because the cave is narrow, entry is controlled by a group or token number issued at the Shrine Board counter at Ardhkuwari. On busy days, the wait can be several hours, so many pilgrims collect their number on the way up, continue to the Bhawan, and do the Garbh Joon on the way down when their group is called. The passage is very tight in places; people with claustrophobia, back problems or a large build may find it difficult. Follow the volunteers' instructions.",
      },
      {
        heading: "The two routes from Ardhkuwari",
        body: "From Ardhkuwari, the traditional track continues to Sanjichhat and then to the Bhawan. A newer, gentler track via Himkoti runs from Ardhkuwari towards the Bhawan, and battery cars operate on a dedicated stretch between Ardhkuwari and the Bhawan for elderly and differently abled pilgrims, with tickets booked through the Shrine Board. Ponies and palkis are also available on the main route at rates displayed by the Shrine Board.",
      },
      {
        heading: "Tips for the halt",
        body: "Rest, drink water and eat light at the Shrine Board bhojanalayas. Use the toilets and medical post if needed. Keep your yatra RFID card and ID with you. If the token wait is long, plan to return to the Garbh Joon on the way down. At night, Ardhkuwari is busy and well lit, and many pilgrims climb through the night to avoid the daytime heat in summer.",
      },
    ],
    months: months(KATRA_CLIMATE, [
      "Cool and quieter; warm layers for the night climb.",
      "Pleasant climbing weather.",
      "Comfortable; Navratri crowds some years.",
      "Warm; summer rush begins.",
      "Hot in the day; many climb at night.",
      "Very busy in school holidays.",
      "Monsoon; slippery track and possible landslides.",
      "Rain continues; check updates.",
      "Rain eases; greener hills.",
      "Navratri: very large crowds and long waits.",
      "Cool and comfortable.",
      "Cold at night; New Year crowds.",
    ]),
    faqs: [
      { q: "What is Ardhkuwari?", a: "The halfway point of the Vaishno Devi trek, with the Garbh Joon cave where the goddess is believed to have meditated." },
      { q: "How far is Ardhkuwari from Katra?", a: "Roughly 6 km from Banganga on the track, about half of the way to the Bhawan." },
      { q: "How do I get darshan at the Garbh Joon?", a: "Collect a group or token number at the Shrine Board counter at Ardhkuwari and wait for it to be called." },
      { q: "How long is the wait at Ardhkuwari?", a: "From minutes to several hours, depending on the crowd. Many pilgrims take a number on the way up and visit on the way down." },
      { q: "Is the Garbh Joon cave narrow?", a: "Yes, very tight in places. People with claustrophobia or back problems may find it hard." },
      { q: "Are there battery cars from Ardhkuwari?", a: "Yes, on a dedicated stretch between Ardhkuwari and the Bhawan, mainly for elderly and differently abled pilgrims, booked through the Shrine Board." },
      { q: "Is there food at Ardhkuwari?", a: "Yes, at Shrine Board bhojanalayas and stalls, along with rest areas and a medical post." },
      { q: "Is Ardhkuwari open at night?", a: "Yes. The track and Ardhkuwari are busy and lit at night, and many pilgrims climb then." },
    ],
  },
  "katra/places-to-visit/bhairon-temple": {
    facts: [
      { label: "Where", value: "Above the Vaishno Devi Bhawan, on the ridge" },
      { label: "Distance from Bhawan", value: "About 1.5 to 2.5 km uphill on foot" },
      { label: "Ropeway", value: "Passenger ropeway from the Bhawan area to Bhairon" },
      { label: "Height", value: "Higher than the Bhawan, close to 2,000 m" },
      { label: "Time needed", value: "1 to 2 hours from the Bhawan, more in queues" },
    ],
    blocks: [
      {
        heading: "What is the Bhairon Temple?",
        body: "The Bhairon Nath Temple stands on the ridge above the Mata Vaishno Devi Bhawan. According to the legend, Bhairon Nath pursued the goddess up the mountain and was beheaded by her at the cave; as he died, he asked for forgiveness, and the goddess granted that every pilgrim who visits her would also visit him, for the pilgrimage to be complete. Because of this belief, most pilgrims climb on to Bhairon after their darshan at the Bhawan.",
      },
      {
        heading: "How to reach the Bhairon Temple",
        body: "From the Bhawan, a steep path climbs about 1.5 to 2.5 km to the temple, depending on the route, taking 45 minutes to an hour and a half on foot. A passenger ropeway run by the Shrine Board connects the Bhawan area with Bhairon in a few minutes, with tickets bought online or at the counter; queues can be long at peak times. Ponies are also available on the path. From Bhairon, a path leads back down towards Sanjichhat and the main track, so you do not have to return to the Bhawan.",
      },
      {
        heading: "Tips for the Bhairon climb",
        body: "Plan Bhairon after your Bhawan darshan, and check the ropeway queue before deciding to walk. It is colder at Bhairon than at the Bhawan, especially at night and in winter, so carry a warm layer. The views over the Trikuta hills and the plains below are wide on clear days. Keep your RFID yatra card with you, and follow the Shrine Board's instructions on routes and timings.",
      },
      {
        heading: "Is the Bhairon Temple visit necessary?",
        body: "In the tradition followed by most pilgrims, yes: the yatra is considered complete only after visiting Bhairon. Practically, if you are unwell or very tired, the ropeway makes it much easier, and the Shrine Board's medical staff can advise. Many older pilgrims use the ropeway up and the path or a pony down.",
      },
    ],
    months: months(KATRA_CLIMATE, [
      "Cold at Bhairon; snow on the ridge some years.",
      "Cold nights; pleasant days.",
      "Comfortable climb.",
      "Warm; ropeway queues grow.",
      "Hot below, mild at Bhairon; busy.",
      "Very busy; long ropeway queues.",
      "Monsoon; slippery path.",
      "Rain continues; take care on the path.",
      "Clearer skies; good views.",
      "Navratri crowds.",
      "Cool and clear.",
      "Cold at night; dress warmly.",
    ]),
    faqs: [
      { q: "Why do pilgrims visit Bhairon after Vaishno Devi?", a: "According to the legend, the goddess granted that the pilgrimage is complete only when pilgrims also visit Bhairon Nath." },
      { q: "How far is the Bhairon Temple from the Bhawan?", a: "About 1.5 to 2.5 km uphill on foot, depending on the route." },
      { q: "Is there a ropeway to the Bhairon Temple?", a: "Yes, a Shrine Board ropeway connects the Bhawan area with Bhairon in a few minutes." },
      { q: "How do I book the Bhairon ropeway?", a: "Through the Shrine Board's official online services or at the counter. Expect queues at peak times." },
      { q: "How long does the Bhairon climb take?", a: "About 45 minutes to 1.5 hours on foot from the Bhawan." },
      { q: "Is it cold at the Bhairon Temple?", a: "Yes, colder than the Bhawan, especially at night and in winter. Carry a warm layer." },
      { q: "Can I go down from Bhairon without returning to the Bhawan?", a: "Yes, a path leads down towards Sanjichhat and the main track." },
      { q: "Are ponies available to Bhairon?", a: "Yes, on the path, at rates displayed by the Shrine Board." },
    ],
  },
  "katra/places-to-visit/mata-vaishno-devi-shrine": {
    facts: [
      { label: "Where", value: "The Bhawan, in the Trikuta hills above Katra, at about 1,585 m" },
      { label: "Track", value: "About 12 to 13 km from Banganga in Katra" },
      { label: "Managed by", value: "Shri Mata Vaishno Devi Shrine Board (SMVDSB)" },
      { label: "Registration", value: "RFID yatra card required; register online or at Katra" },
      { label: "Ways up", value: "Walk, pony, palki, helicopter to Sanjichhat, battery car from Ardhkuwari" },
    ],
    blocks: [
      {
        heading: "How the Vaishno Devi yatra works",
        body: "Every pilgrim needs a yatra registration and an RFID card from the Shri Mata Vaishno Devi Shrine Board, issued online or at counters in Katra and at Jammu railway station and airport, and checked at Banganga, where the track begins. From there, the main track climbs about 12 to 13 km to the Bhawan, with Ardhkuwari halfway and Sanjichhat near the top. Most fit walkers take 5 to 7 hours up and 4 to 5 down. At the Bhawan, pilgrims deposit bags, phones and leather items in cloakrooms, bathe if they wish, and queue for darshan of the three natural rock forms, the pindis, of Maha Kali, Maha Lakshmi and Maha Saraswati inside the holy cave. Many continue to the Bhairon Temple before returning.",
      },
      {
        heading: "Ways to reach the Bhawan",
        body: "On foot: the classic way, on a paved and lit track with shelters, water and food along the route. Pony or palki: hired at Banganga at rates displayed by the Shrine Board. Helicopter: from Katra to Sanjichhat, about 2.5 km from the Bhawan, booked through the Shrine Board's official online service; seats sell out fast and flights depend on weather. Battery car: on the stretch between Ardhkuwari and the Bhawan, mainly for elderly and differently abled pilgrims, booked through the Shrine Board. Ropeway: between the Bhawan area and the Bhairon Temple.",
      },
      {
        heading: "When to go",
        body: "The shrine is open all year. October to March is the most comfortable season for climbing, though nights at the Bhawan are cold in December and January. April to June is hot in Katra and very busy with school holidays. July to September brings monsoon rain, slippery paths and the risk of landslides, so check the Shrine Board's updates. The Navratris, in spring and autumn, and the New Year bring the largest crowds and the longest waits.",
      },
      {
        heading: "Staying in Katra",
        body: "Katra, at the foot of the Trikuta hills, has hotels and guest houses at every budget, along with the Shrine Board's own accommodation, which can be booked online. Most pilgrims spend one night before and one after the yatra. Katra is about 50 km from Jammu, and Shri Mata Vaishno Devi Katra railway station has direct trains from Delhi and other cities, plus trains onwards to Srinagar.",
      },
      {
        heading: "Combining Vaishno Devi with Kashmir",
        body: "Many travellers add Vaishno Devi to a Kashmir trip. With the rail link from Katra to Srinagar, a common plan is to arrive in Katra by train, do the yatra over a day and night, rest a night in Katra, then take the train to Srinagar for the Kashmir part of the trip. Allow at least two nights for Katra and Vaishno Devi.",
      },
    ],
    months: months(KATRA_CLIMATE, [
      "Cold nights at the Bhawan; quieter after New Year.",
      "Pleasant climbing weather.",
      "Comfortable; Navratri crowds in some years.",
      "Warm; busy season starts.",
      "Hot in Katra; climb at night or early morning.",
      "Peak school-holiday crowds.",
      "Monsoon; slippery track and possible disruptions.",
      "Rain continues; check Shrine Board updates.",
      "Rain eases; good climbing weather returns.",
      "Navratri: very large crowds.",
      "Cool, clear and comfortable.",
      "Cold at the Bhawan; New Year crowds.",
    ]),
    routes: [
      { from: "Jammu", to: "Katra", distanceKm: "about 50 km", time: "1.5 to 2 hours by road, or by train", how: "By cab or bus via the highway, or by train to Shri Mata Vaishno Devi Katra station." },
      { from: "Banganga (Katra)", to: "Vaishno Devi Bhawan", distanceKm: "about 12 to 13 km on foot", time: "5 to 7 hours up for most fit walkers", how: "Main track via Ardhkuwari and Sanjichhat, or the newer track via Himkoti." },
      { from: "Katra", to: "Sanjichhat", distanceKm: "helicopter", time: "a few minutes", how: "Shrine Board helicopter service booked online; Sanjichhat is about 2.5 km from the Bhawan." },
      { from: "Katra", to: "Srinagar", distanceKm: "by train or about 250 km by road", time: "about 3 hours by train, 6 to 8 hours by road", how: "Trains from Katra to Srinagar via the Chenab and Anji bridges, or the Jammu to Srinagar highway." },
    ],
  },
  "patnitop/places-to-visit/kud": {
    facts: [
      { label: "Where", value: "On the old Jammu to Srinagar highway, about 10 km before Patnitop" },
      { label: "Height", value: "About 1,750 m" },
      { label: "Known for", value: "Patisa sweets, pine forest, roadside stops" },
      { label: "Time needed", value: "30 minutes to an hour as a stop" },
    ],
    blocks: [
      {
        heading: "What is Kud?",
        body: "Kud is a small hill town on the old Jammu to Srinagar highway, about 10 km before Patnitop, in the pine forests of Udhampur district. For decades, it was a regular stop for buses and cars climbing towards Kashmir, famous for its patisa, a flaky, melt-in-the-mouth sweet sold in the roadside shops, and for its cool air after the heat of the plains. Since the Chenani-Nashri tunnel opened in 2017 and took through traffic away from the Patnitop route, Kud has become quieter, which suits visitors looking for a peaceful forest stop.",
      },
      {
        heading: "Things to do at Kud",
        body: "Stop for tea and patisa at the old sweet shops, and buy a box for the journey. Walk in the pine forest along the road. Visit the small temples and the old spring in the town. Use Kud as a quieter base for Patnitop, Nathatop and Sanasar, with simple hotels and guest houses.",
      },
      {
        heading: "How to reach Kud",
        body: "Kud is about 100 km from Jammu, roughly 3 to 3.5 hours by road via Udhampur and the old highway through Chenani. Travellers using the tunnel must turn off to take the old road via Kud and Patnitop. From Srinagar, it is about 200 km via Banihal and Ramban.",
      },
      {
        heading: "Is Kud worth a stop?",
        body: "Yes, if you are driving the Patnitop route: the patisa alone is a reason, and the forest is lovely. It is not a destination in itself for most travellers, but a pleasant part of a Patnitop stay.",
      },
    ],
    months: months(PATNITOP_CLIMATE, [
      "Cold, with snow some years.",
      "Cold; snow possible.",
      "Cool and fresh.",
      "Pleasant spring days.",
      "Cool escape from the plains.",
      "Busy summer season.",
      "Monsoon mist in the pines.",
      "Rain and mist; check the road.",
      "Clearing skies.",
      "Clear and crisp.",
      "Cold and quiet.",
      "Cold; first snow possible.",
    ]),
    faqs: [
      { q: "What is Kud famous for?", a: "Its patisa sweets sold in roadside shops, and its pine forest on the old Jammu to Srinagar highway." },
      { q: "How far is Kud from Patnitop?", a: "About 10 km, before Patnitop when coming from Jammu." },
      { q: "How far is Kud from Jammu?", a: "About 100 km, roughly 3 to 3.5 hours by road via Udhampur." },
      { q: "Is Kud on the new highway?", a: "No. The Chenani-Nashri tunnel bypasses it; take the old road to pass through Kud and Patnitop." },
      { q: "Is there snow at Kud?", a: "Sometimes in January and February, less reliably than at Patnitop and Nathatop." },
      { q: "Can I stay at Kud?", a: "Yes, there are simple hotels and guest houses, a quieter base for Patnitop." },
      { q: "What is patisa?", a: "A flaky, layered sweet made with gram flour, ghee and sugar, a speciality of Kud." },
      { q: "When is the best time to visit Kud?", a: "March to June and September to November for pleasant weather, December to February for a chance of snow." },
    ],
  },
  "patnitop/places-to-visit/nathatop": {
    facts: [
      { label: "Where", value: "About 12 to 15 km beyond Patnitop" },
      { label: "Height", value: "About 2,400 to 2,700 m" },
      { label: "Known for", value: "Snow in winter, meadows, paragliding, mountain views" },
      { label: "Best months", value: "December to February for snow; April to June and September to November for views" },
    ],
    blocks: [
      {
        heading: "What is Nathatop?",
        body: "Nathatop is a high meadow and ridge above Patnitop in Udhampur district, higher and more open than Patnitop itself. In winter, it holds snow longer than the town and is where families from Jammu and Punjab come to play in the snow. In spring and autumn, its grassy slopes give wide views across the hills of the Chenab region and towards the snow peaks of the Pir Panjal. Paragliding operates from the area in suitable weather.",
      },
      {
        heading: "How to reach Nathatop",
        body: "From Patnitop, a road climbs about 12 to 15 km to Nathatop through forest and open slopes, about 30 to 45 minutes by car. Snow can close or slow the road in winter, and chains may be needed. Local taxis and your own vehicle can make the trip; check road conditions with your hotel in winter.",
      },
      {
        heading: "Things to do at Nathatop",
        body: "Play in the snow and take sledge rides in winter. Paraglide in tandem with a registered operator in good weather, usually in the drier months. Walk on the meadows and enjoy the views. Have tea at the seasonal stalls. Photograph the sunset over the hills.",
      },
      {
        heading: "Tips",
        body: "Dress warmly; it is much colder than Patnitop, especially in the wind. Agree rates for sledges, paragliding and snow gear in advance. Check that paragliding operators are registered and use proper equipment. In winter, start back before dark, as the road can freeze.",
      },
      {
        heading: "Is Nathatop worth visiting?",
        body: "Yes, if you are staying in Patnitop: it is the best snow and view point in the area. In winter, it is the reason many families come to Patnitop at all.",
      },
    ],
    months: months(PATNITOP_CLIMATE, [
      "Best snow month; sledging and snow play.",
      "Snow cover in most years.",
      "Snow patches and melting; muddy slopes.",
      "Green slopes and clear views; paragliding season.",
      "Pleasant and clear.",
      "Busy summer weekends.",
      "Mist and rain; views often hidden.",
      "Rain and mist.",
      "Clearing; fresh green slopes.",
      "Clear long views; paragliding.",
      "Cold and clear.",
      "First snow usually late in the month.",
    ]),
    faqs: [
      { q: "How far is Nathatop from Patnitop?", a: "About 12 to 15 km, 30 to 45 minutes by car." },
      { q: "Is there snow at Nathatop?", a: "Usually from late December to February, longer than at Patnitop." },
      { q: "Can you paraglide at Nathatop?", a: "Yes, tandem flights with registered operators in suitable weather." },
      { q: "Is the road to Nathatop open in winter?", a: "Usually, but snow can close or slow it. Check with your hotel and carry chains if needed." },
      { q: "When is the best time to visit Nathatop?", a: "December to February for snow, April to June and September to November for clear views." },
      { q: "How high is Nathatop?", a: "Roughly 2,400 to 2,700 m, several hundred metres above Patnitop." },
      { q: "Is Nathatop good for families?", a: "Yes, especially in winter for snow play. Dress children warmly." },
      { q: "Are there stalls at Nathatop?", a: "Seasonal tea and snack stalls, more in the snow season." },
    ],
  },
  "patnitop/places-to-visit/sanasar": {
    facts: [
      { label: "Where", value: "About 20 km from Patnitop" },
      { label: "Height", value: "About 2,050 m" },
      { label: "Known for", value: "Cup-shaped meadow, paragliding, golf, quiet forest" },
      { label: "Best months", value: "March to June and September to November" },
    ],
    blocks: [
      {
        heading: "What is Sanasar?",
        body: "Sanasar is a cup-shaped meadow ringed by pine and deodar forest, about 20 km from Patnitop in Ramban district. Its name is said to come from two small lakes, Sana and Sar, that once lay in the meadow. It is quieter than Patnitop and has become a base for paragliding and other adventure activities, with a small golf course on the meadow and walking trails in the forest around.",
      },
      {
        heading: "Things to do at Sanasar",
        body: "Fly tandem paragliding with registered operators in good weather. Walk the forest trails around the meadow. Play a round on the small golf course. Picnic on the meadow. In winter, enjoy snow when it falls. Stay overnight in the government huts or simple hotels for a quiet night in the forest.",
      },
      {
        heading: "How to reach Sanasar",
        body: "From Patnitop, the road runs about 20 km through forest, roughly 45 minutes to an hour. From Jammu, Sanasar is about 120 km, around 4 hours. The roads can be affected by snow in winter and landslides in the monsoon.",
      },
      {
        heading: "Is Sanasar worth visiting?",
        body: "Yes, for travellers who want quiet forest and meadows near Patnitop, or adventure activities like paragliding. It works best as part of a two- or three-night Patnitop stay.",
      },
    ],
    months: months(PATNITOP_CLIMATE, [
      "Cold; snow some years.",
      "Cold; occasional snow.",
      "Spring begins; paragliding season opens in good weather.",
      "Pleasant; green meadow.",
      "Ideal for walks and paragliding.",
      "Busy summer weekends.",
      "Monsoon; flights often suspended.",
      "Rain and mist.",
      "Clearing; paragliding resumes.",
      "Clear and crisp; excellent month.",
      "Cold and quiet.",
      "Cold; snow possible late in the month.",
    ]),
    faqs: [
      { q: "How far is Sanasar from Patnitop?", a: "About 20 km, 45 minutes to an hour by road." },
      { q: "Is paragliding available at Sanasar?", a: "Yes, tandem flights with registered operators in good weather, mostly outside the monsoon." },
      { q: "Is there snow at Sanasar?", a: "Sometimes in winter, less reliably than at Nathatop." },
      { q: "Where to stay at Sanasar?", a: "Government huts and simple hotels near the meadow; book ahead on weekends." },
      { q: "How far is Sanasar from Jammu?", a: "About 120 km, around 4 hours by road." },
      { q: "Why is it called Sanasar?", a: "It is said to come from two small lakes, Sana and Sar, that once lay in the meadow." },
      { q: "Is there a golf course at Sanasar?", a: "Yes, a small golf course on the meadow." },
      { q: "When is the best time to visit Sanasar?", a: "March to June and September to November." },
    ],
  },
};
