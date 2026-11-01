import type { BlogPost, BlogSection } from "./types";

// Kasol and the Parvati valley: 10 answer-first guides (900+ words each).
// Altitudes, distances and trek times are approximate; camping rules at
// Kheerganga and road conditions change, so posts tell readers to check
// locally. No prices, no em dashes.

const REACH_KASOL = {
  h: "Getting to Kasol",
  p: [
    "Kasol is about 30 km beyond Bhuntar in the Parvati valley, roughly an hour by road. From Delhi, overnight HRTC and private Volvo buses run to Bhuntar and sometimes straight to Kasol, about 520 km and 12 to 14 hours. From Chandigarh the drive is about 7 hours via Mandi and Aut.",
    "Kullu-Bhuntar airport (KUU), about 30 km away, has a few weather-dependent flights from Delhi and Chandigarh. There is no railway nearby; travellers by train usually come to Chandigarh and continue by bus or cab.",
  ],
};

const RESPECT = {
  h: "Travelling responsibly in the Parvati valley",
  list: [
    "Carry all rubbish back down from treks and campsites; the valley has limited waste collection",
    "Ask before photographing people, homes and shrines",
    "Keep music low in villages, especially at night",
    "Follow village rules in Malana and Tosh, which can be strict about outsiders touching property",
    "Avoid single-use plastic and refill water bottles at your stay",
    "Drugs are illegal in India and police checks are common on the valley road",
  ],
};

const BASE: BlogPost[] = [
  {
    slug: "kheerganga-trek-guide",
    title: "Kheerganga Trek Guide: Route, Distance, Difficulty and Best Time",
    description: "The Kheerganga trek from Barshaini: routes via Nakthan and Rudranag, distance, time, difficulty, hot springs, camping rules, best season and what to pack.",
    category: "Adventure",
    destination: "himachal",
    city: "kasol",
    date: "2026-11-04",
    intro:
      "The Kheerganga trek starts at Barshaini, about 15 km beyond Kasol, and climbs roughly 10 to 12 km to a meadow at about 2,950 m with a natural hot spring and a small Shiva shrine. Most fit beginners reach the top in 4 to 6 hours. The best seasons are May to June and September to November; the trail is slippery in the monsoon and snowbound in winter.",
    sections: [
      {
        h: "Kheerganga at a glance",
        list: [
          "Start point: Barshaini, the road head of the Parvati valley",
          "Distance: about 10 to 12 km one way, depending on the route",
          "Height gain: roughly 700 to 800 m from Barshaini",
          "Time: 4 to 6 hours up, 3 to 4 hours down",
          "Difficulty: easy to moderate for fit beginners",
          "Highlights: the hot spring pool, forest trails, waterfalls and views of the Parvati valley",
        ],
      },
      {
        h: "The two main routes",
        p: [
          "The Nakthan route is the most popular. From Barshaini, cross the dam and walk up through Nakthan village, then follow a mostly forested trail with a few steep sections and a waterfall on the way. It has more cafes and rest points.",
          "The Rudranag route runs along the other side of the river past the Rudranag waterfall and temple. It is a little quieter and rougher in places. Many trekkers go up one way and come down the other; ask locally which path is in better shape that season.",
        ],
      },
      {
        h: "What you find at the top",
        p: [
          "Kheerganga is an open meadow with views down the valley and up towards snow peaks. The hot spring feeds a bathing pool, with separate arrangements for men and women, and a small temple linked to Shiva and his son Kartikeya. Follow the posted bathing rules and leave the pool clean.",
          "The meadow is fragile, and over the years authorities have restricted permanent structures and camping on it. Check the current rules on overnight stays before you go; camps and simple shelters are usually found on the approach rather than on the meadow itself.",
        ],
      },
      {
        h: "Best time for the Kheerganga trek",
        list: [
          "April: patches of snow possible near the top; fewer people",
          "May to June: the main season, pleasant days and cold nights",
          "July to August: monsoon rain, slippery trails and landslide risk",
          "September to November: clear skies, autumn colours and the best views",
          "December to March: snow on the trail; only for experienced trekkers with a guide",
        ],
      },
      {
        h: "How to get to Barshaini",
        p: [
          "Barshaini is about 15 km from Kasol past Manikaran, roughly 40 minutes by taxi. HRTC buses run from Bhuntar via Kasol and Manikaran to Barshaini a few times a day, and shared taxis leave from Kasol in season. Start early so you reach the top in daylight.",
        ],
      },
      {
        h: "What to pack",
        list: [
          "Trekking shoes with good grip; the trail is rocky and muddy in places",
          "A warm layer and rain jacket, even in summer",
          "At least 2 litres of water and snacks",
          "A headlamp in case you finish late",
          "Swimwear or a change of clothes for the hot spring",
          "Basic first aid and personal medicines",
          "Cash, as there are no ATMs beyond Kasol and Manikaran",
        ],
      },
      {
        h: "Safety tips",
        list: [
          "Start by 9 am and turn back if weather turns bad",
          "Stay on the main trail; side paths lead to steep drops",
          "Do not trek alone in the monsoon or winter",
          "Tell your stay which route you are taking and when you expect to return",
          "Mobile signal is patchy; download offline maps",
        ],
      },
      {
        h: "Kheerganga as part of a Parvati valley trip",
        p: [
          "A typical plan is a night in Kasol, a day at Manikaran and Tosh, the Kheerganga trek with a night near the top, and a slow return to Kasol. Add Malana or Grahan for a longer stay, or continue to Manali, about three hours away by road.",
        ],
      },
      REACH_KASOL,
      RESPECT,
    ],
    faqs: [
      { q: "How long is the Kheerganga trek?", a: "About 10 to 12 km one way from Barshaini, usually 4 to 6 hours up and 3 to 4 hours down." },
      { q: "Is the Kheerganga trek difficult?", a: "It is easy to moderate. Fit beginners manage it; the steep sections and loose rocks need care, especially when wet." },
      { q: "Can I do Kheerganga in one day?", a: "Yes, if you start early and are fit, but many trekkers stay a night near the top to enjoy the hot spring and views." },
      { q: "Is camping allowed at Kheerganga?", a: "Rules have changed over the years, with restrictions on structures on the meadow. Check current rules locally before planning an overnight stay." },
      { q: "When is the best time for Kheerganga?", a: "May to June and September to November. Avoid the peak monsoon and winter unless you are experienced and with a guide." },
      { q: "Where does the Kheerganga trek start?", a: "At Barshaini, the end of the road about 15 km beyond Kasol." },
      { q: "Is there a hot spring at Kheerganga?", a: "Yes. A natural hot spring feeds a bathing pool near the small Shiva temple at the top." },
    ],
  },

  {
    slug: "tosh-village-guide",
    title: "Tosh Village Guide: Views, Stays and How to Reach from Kasol",
    description: "A Tosh village guide: how to reach from Kasol and Barshaini, what to see, the Tosh glacier walk, where to stay, best time and tips for a quiet mountain stay.",
    category: "Planning",
    destination: "himachal",
    city: "kasol",
    date: "2026-11-04",
    intro:
      "Tosh is a small mountain village at about 2,400 m at the head of the Parvati valley, above Barshaini, known for wide views of snow peaks, wooden houses and quiet guesthouses. It is about 20 km from Kasol: a 40-minute drive to Barshaini, then a short steep road or walk up. Spend at least one night to enjoy the sunset and morning views.",
    sections: [
      {
        h: "Why visit Tosh",
        p: [
          "Tosh sits on a slope above the Tosh nala, a side river that joins the Parvati near Barshaini. From the village, the views open up to snowy peaks and the head of the Tosh valley. It is quieter and more traditional than Kasol, with fields, orchards and old houses with slate roofs.",
        ],
      },
      {
        h: "How to reach Tosh",
        p: [
          "Take a taxi or bus from Kasol to Barshaini (about 15 km). From Barshaini, a narrow road climbs towards Tosh; taxis can go part or all of the way when the road is in good condition. Otherwise, it is a steep walk of 30 to 60 minutes. In winter or after rain, the last stretch may only be passable on foot.",
        ],
      },
      {
        h: "Things to do in and around Tosh",
        list: [
          "Walk through the old village and its temple",
          "Hike up the Tosh valley towards Kutla and the meadows beyond, a full day out",
          "Watch the sunset and sunrise over the peaks",
          "Visit Pulga and Kalga, two small villages across the valley near Barshaini",
          "Combine with the Kheerganga trek, which starts from Barshaini below",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Tosh has simple guesthouses and homestays, many with valley-view rooms and cafes serving home-style food. Facilities are basic: expect limited hot water at times and patchy mobile signal. Book ahead in May, June and October, when the village fills with trekkers and backpackers.",
        ],
      },
      {
        h: "Best time to visit Tosh",
        list: [
          "March to June: pleasant days, cold nights, blossoms in the orchards",
          "July to August: monsoon rain and slippery paths",
          "September to November: clear views and crisp weather",
          "December to February: snow in the village; roads can close and many stays shut",
        ],
      },
      {
        h: "Tosh for families and couples",
        p: [
          "Couples enjoy Tosh for its quiet, views and cosy cafes. Families can visit for a day, but the steep paths and basic stays suit older children better than toddlers or older parents. If walking is difficult, ask your driver about road conditions before setting off from Barshaini.",
        ],
      },
      {
        h: "What to pack",
        list: [
          "Warm layers in every season; nights are cold",
          "Good walking shoes for steep paths",
          "Cash: there are no ATMs in Tosh",
          "A power bank, as power cuts happen",
          "Rain gear in the monsoon",
        ],
      },
      {
        h: "A 2-day plan with Tosh",
        days: [
          "Kasol to Manikaran in the morning, then Barshaini and up to Tosh; sunset from the village.",
          "Morning walk up the Tosh valley, then back down to Barshaini and Pulga, and return to Kasol by evening.",
        ],
      },
      REACH_KASOL,
      RESPECT,
    ],
    faqs: [
      { q: "How far is Tosh from Kasol?", a: "About 20 km: 15 km to Barshaini by road, then a short drive or a steep walk up to Tosh." },
      { q: "Can cars go to Tosh?", a: "Taxis can often reach the village when the road is in good condition; otherwise, walk up from Barshaini in 30 to 60 minutes." },
      { q: "Is Tosh worth an overnight stay?", a: "Yes. Sunset and sunrise views over the peaks are the highlight, and day-trippers miss them." },
      { q: "Does Tosh have snow?", a: "Usually from December to February, and the high meadows above keep snow longer." },
      { q: "Is there mobile network in Tosh?", a: "Signal is patchy; some networks work intermittently. Download offline maps and inform family in advance." },
      { q: "Can I combine Tosh and Kheerganga?", a: "Yes. Both start from Barshaini; many travellers stay a night in Tosh before or after the trek." },
    ],
  },

  {
    slug: "malana-village-guide",
    title: "Malana Village Guide: How to Visit Respectfully from Kasol",
    description: "Visiting Malana from Kasol: how to reach, the walk up, village rules on not touching people or property, history and culture, best time and safety tips.",
    category: "Planning",
    destination: "himachal",
    city: "kasol",
    date: "2026-11-04",
    intro:
      "Malana is an ancient village at about 2,650 m in a side valley off the Parvati, known for its own customs, its village council and strict rules for outsiders, such as not touching people, houses or temples. It is a day trip from Kasol by road to the Malana dam area and a steep walk up. Visit with a guide, follow the rules, and respect the residents' privacy.",
    sections: [
      {
        h: "What makes Malana different",
        p: [
          "Malana has long governed itself through a village council and its deity, Jamlu, and residents follow customs that keep outsiders at a distance. Visitors are not allowed to touch village walls, temples, houses or people, and fines can be imposed for breaking these rules. The village has its own dialect and traditions, and many local stories link it to ancient history.",
          "Treat the visit as a chance to see a living community from a respectful distance, not as a sightseeing stop.",
        ],
      },
      {
        h: "How to reach Malana",
        p: [
          "From Kasol, drive back towards Jari and take the road to the Malana hydro project and dam, about an hour in total. From the road end, a steep path climbs to the village in roughly one to two hours, depending on where vehicles stop and your fitness. Local taxis and guides in Kasol arrange the trip.",
        ],
      },
      {
        h: "Rules for visitors",
        list: [
          "Do not touch houses, walls, temples or any village property",
          "Do not touch residents or their belongings",
          "Stay on the marked paths and in areas open to visitors",
          "Ask before taking any photos, and respect a refusal",
          "Do not enter temples or restricted areas",
          "Follow your guide's instructions and any signs",
        ],
      },
      {
        h: "Best time to visit",
        p: [
          "April to June and September to November are best, with dry paths and clear weather. The monsoon makes the walk slippery and the road prone to landslides, and winter brings snow and cold that can close the approach.",
        ],
      },
      {
        h: "Why a guide helps",
        p: [
          "A local guide knows which paths are open, where visitors may and may not go, and how to behave in the village. They can explain the customs and history and help avoid misunderstandings. Guides are easy to find through stays and taxi operators in Kasol and Jari.",
        ],
      },
      {
        h: "Legal and safety notes",
        p: [
          "Drugs are illegal in India, and police check vehicles on the valley road. Avoid any involvement, however casually offered. Carry ID, travel in daylight, and return before dark, as the path is steep and unlit.",
        ],
      },
      {
        h: "What to wear and carry",
        list: [
          "Sturdy walking shoes",
          "Water and snacks for the climb",
          "A warm layer; the village is cooler than Kasol",
          "Cash for the taxi and guide",
          "A small rubbish bag to carry everything back",
        ],
      },
      {
        h: "Malana with the rest of the valley",
        p: [
          "Malana fits on the way between Bhuntar and Kasol, or as a separate day from Kasol. Combine it with Jari's views over the Parvati and a relaxed evening back in Kasol or Chalal.",
        ],
      },
      REACH_KASOL,
      RESPECT,
    ],
    faqs: [
      { q: "Can tourists visit Malana?", a: "Yes, but visitors must follow strict rules: no touching people, houses or temples, and photos only with permission." },
      { q: "How far is Malana from Kasol?", a: "About an hour by road to the Malana dam area, then a steep walk of one to two hours to the village." },
      { q: "Can I stay overnight in Malana?", a: "Overnight stays for outsiders have been restricted at times. Plan it as a day trip and check current rules locally." },
      { q: "Is a guide needed for Malana?", a: "Not mandatory, but strongly recommended to understand the rules and customs and stay on permitted paths." },
      { q: "What happens if you touch something in Malana?", a: "Residents may impose a fine, and it causes offence. Keep your hands to yourself and follow the guide." },
      { q: "Is Malana safe?", a: "Yes for respectful daytime visitors who follow rules, stay on paths and avoid anything illegal." },
    ],
  },

  {
    slug: "manikaran-sahib-guide",
    title: "Manikaran Sahib Guide: Gurudwara, Hot Springs and Temples",
    description: "A Manikaran Sahib guide: the gurudwara and langar, the hot springs, Ram and Shiva temples, legends, timings, how to reach from Kasol and Bhuntar, and tips.",
    category: "Pilgrimage",
    destination: "himachal",
    city: "kasol",
    date: "2026-11-04",
    intro:
      "Manikaran is a pilgrimage town about 4 km beyond Kasol in the Parvati valley, at about 1,760 m, sacred to both Sikhs and Hindus. Its best-known sights are Gurudwara Shri Manikaran Sahib, where langar is cooked using the heat of natural hot springs, and the Ram and Shiva temples beside the river. Plan two to three hours, and longer if you bathe in the hot spring baths.",
    sections: [
      {
        h: "Gurudwara Shri Manikaran Sahib",
        p: [
          "The large gurudwara stands on the banks of the Parvati river and is associated with a visit by Guru Nanak Dev Ji. Pilgrims come throughout the year to pay respects, bathe in the hot spring pools and eat at the community kitchen. Visitors of every faith are welcome; cover your head, remove shoes and wash your feet before entering.",
        ],
      },
      {
        h: "The langar and the hot springs",
        p: [
          "Manikaran is famous for its hot springs, with steam rising from the riverbank. At the gurudwara, rice and other food for the langar are cooked using the springs' heat, and visitors can see pots set into the hot water. The langar is free and open to all; help with serving or washing up if you can.",
          "There are separate bathing areas at the gurudwara for men and women. The water is very hot, so test it before getting in, and keep children close.",
        ],
      },
      {
        h: "Temples of Manikaran",
        list: [
          "The Ram temple, an old stone temple in the town",
          "Shiva and Parvati shrines linked to the legend of the valley",
          "Small temples along the river and bazaar",
        ],
        p: [
          "Hindu tradition links Manikaran to Shiva and Parvati: a legend tells of a jewel (mani) lost in the waters, which gives the town its name.",
        ],
      },
      {
        h: "How to reach Manikaran",
        p: [
          "Manikaran is about 4 km from Kasol and about 35 km from Bhuntar. Buses from Bhuntar to Barshaini stop here, and taxis run from Kasol. You can also walk from Kasol along the road in about an hour, but traffic makes it less pleasant than it sounds.",
        ],
      },
      {
        h: "Etiquette and practical tips",
        list: [
          "Cover your head inside the gurudwara; scarves are available",
          "Remove shoes and leave them at the shoe counter",
          "Avoid tobacco and alcohol on the premises",
          "Dress modestly at the temples",
          "Keep valuables safe while bathing",
          "Expect crowds on weekends and religious festivals",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "The gurudwara offers simple accommodation for pilgrims, and there are hotels and guesthouses in the town. Families often prefer Manikaran or Kasol to Tosh because roads are easier and facilities better. Kasol is only 10 minutes away for cafes.",
        ],
      },
      {
        h: "Best time to visit",
        p: [
          "Manikaran can be visited all year. Spring and autumn are the most comfortable; winter is cold but the hot springs make bathing pleasant. In the monsoon, check road conditions on the Parvati valley road, which can be hit by landslides.",
        ],
      },
      {
        h: "Manikaran on a valley itinerary",
        p: [
          "Visit Manikaran in the morning, then continue to Barshaini, Pulga and Tosh, or start the Kheerganga trek. On the way back, stop at Kasol for the evening by the river.",
        ],
      },
      REACH_KASOL,
    ],
    faqs: [
      { q: "How far is Manikaran from Kasol?", a: "About 4 km, around 10 minutes by road." },
      { q: "Can non-Sikhs visit Manikaran Sahib?", a: "Yes. Everyone is welcome. Cover your head, remove shoes and follow the gurudwara's etiquette." },
      { q: "Is the langar at Manikaran free?", a: "Yes, the community kitchen serves free meals to all visitors." },
      { q: "Can I bathe in the Manikaran hot springs?", a: "Yes, in the bathing areas at the gurudwara, with separate sections for men and women." },
      { q: "Is food really cooked in the hot springs?", a: "Yes. Pots of rice and other food are cooked using the heat of the springs for the langar." },
      { q: "How much time do I need at Manikaran?", a: "Two to three hours for the gurudwara, langar, temples and a bath." },
    ],
  },

  {
    slug: "best-time-to-visit-kasol",
    title: "Best Time to Visit Kasol: Month-by-Month Weather and Treks",
    description: "The best time to visit Kasol month by month: spring and autumn for treks, summer crowds, monsoon landslides, winter snow at Tosh, and festival dates.",
    category: "Planning",
    destination: "himachal",
    city: "kasol",
    date: "2026-11-04",
    intro:
      "The best time to visit Kasol is March to June and September to November, when days are pleasant, roads are open and treks like Kheerganga are at their best. The monsoon, July to August, brings heavy rain and landslides on the valley road. Winter, December to February, is cold and quiet; Kasol sees occasional light snow, while Tosh and higher villages are snowbound.",
    sections: [
      {
        h: "Kasol's seasons",
        p: [
          "At about 1,580 m on the Parvati river, Kasol is lower and milder than Manali, which makes it pleasant for much of the year. The higher villages of the valley, from Barshaini to Tosh and Kheerganga, are colder and get far more snow.",
        ],
        list: [
          "Spring (March to May): fresh green valley, cool nights, good for treks",
          "Summer (June): warm days, busy weekends with backpackers",
          "Monsoon (July to August): heavy rain, landslides, slippery trails",
          "Autumn (September to November): clear skies and crisp weather, the favourite trekking season",
          "Winter (December to February): cold, quiet, snow higher up",
        ],
      },
      {
        h: "Month by month",
        list: [
          "January: cold, quiet; snow at Tosh and above",
          "February: still cold; some stays reopen late in the month",
          "March: spring arrives; pleasant days",
          "April: blossoms and fresh green; treks open up",
          "May: peak season begins; book stays early",
          "June: busy, warm days, best for Kheerganga",
          "July: monsoon rain; road disruptions possible",
          "August: heaviest rain; the quietest month",
          "September: rain eases; fresh and green",
          "October: clear skies and autumn colours; excellent treks",
          "November: cold mornings, sunny days, few crowds",
          "December: cold; festive crowds around New Year",
        ],
      },
      {
        h: "Best time for treks",
        p: [
          "Kheerganga, Tosh valley walks, Grahan and Rasol are best from April to June and September to November. Avoid treks in heavy monsoon rain, and do winter treks only with an experienced guide.",
        ],
      },
      {
        h: "Best time for families and couples",
        p: [
          "Couples often prefer October and November, when the valley is calm and views are clear. Families find April to June easiest, with warm days and open roads. New Year week brings crowds and a party atmosphere that some families avoid.",
        ],
      },
      {
        h: "Monsoon travel in the Parvati valley",
        p: [
          "In July and August, landslides can close the road between Bhuntar and Kasol for hours, and river levels rise quickly. If you travel then, keep a buffer day, check road status before setting out, and avoid crossing streams in spate.",
        ],
      },
      {
        h: "Kasol in winter",
        p: [
          "Winter in Kasol is cold but often sunny, with fewer travellers and quieter cafes. Light snow is possible in the village in some years, and Tosh, Kalga, Pulga and Grahan usually get proper snow. Many guesthouses close for part of the season, so confirm before you book.",
        ],
      },
      {
        h: "What to pack by season",
        list: [
          "Spring and autumn: layers, a warm jacket and trekking shoes",
          "Summer: light layers plus one warm layer for nights",
          "Monsoon: rain jacket, quick-dry clothes, waterproof shoes",
          "Winter: thermals, heavy jacket, gloves and cap",
        ],
      },
      {
        h: "Festivals and events",
        p: [
          "Local fairs take place in villages through the year, and the valley joins in the Kullu Dussehra season in October. Around New Year, Kasol's cafes and guesthouses are busiest. Check dates with your stay for village festivals, which are colourful but not always open to outsiders.",
        ],
      },
      REACH_KASOL,
    ],
    faqs: [
      { q: "Which month is best for Kasol?", a: "October is one of the best for clear skies and treks; April to June is also excellent." },
      { q: "Does it snow in Kasol?", a: "Light snow is possible in some winters, but villages higher up, like Tosh and Grahan, get much more." },
      { q: "Is Kasol good in the monsoon?", a: "It is green but wet, with landslide risk on the road and slippery trails. Keep a buffer day." },
      { q: "Is Kasol crowded in summer?", a: "Weekends in May and June are busy with backpackers; weekdays are calmer." },
      { q: "When is the Kheerganga trek best?", a: "May to June and September to November." },
      { q: "Is Kasol open in winter?", a: "Yes, but many guesthouses and cafes close for part of the season. Confirm before booking." },
    ],
  },

  {
    slug: "kasol-cafes-food-guide",
    title: "Kasol Food Guide: Cafes, Local Dishes and What to Try",
    description: "What to eat in Kasol: Israeli and Himachali food, riverside cafes, siddu and trout, vegetarian options, Manikaran langar, and tips for eating well and safely.",
    category: "Planning",
    destination: "himachal",
    city: "kasol",
    date: "2026-11-04",
    intro:
      "Kasol's food scene mixes Himachali home cooking with Israeli, Italian and Tibetan dishes, thanks to decades of backpackers. Try shakshuka, hummus and falafel in the riverside cafes, and local siddu and trout. Vegetarians are well served, and the free langar at Manikaran Sahib, 4 km away, is a meal worth having.",
    sections: [
      {
        h: "Why Kasol has Israeli food",
        p: [
          "Kasol has been popular with Israeli travellers for decades, which earned it the nickname Mini Israel. Many cafes added Israeli dishes to their menus, and signs in Hebrew are still common. Today the menus are a mix of Israeli, Himachali, Tibetan, Italian and Indian food.",
        ],
      },
      {
        h: "Dishes to try",
        list: [
          "Shakshuka: eggs poached in a spiced tomato sauce",
          "Hummus, falafel and pita plates",
          "Siddu: steamed wheat buns stuffed with walnut or poppy seed paste",
          "Trout from the Parvati and Beas valleys, grilled or fried",
          "Momos and thukpa in Tibetan kitchens",
          "Wood-fired pizza and pasta in the larger cafes",
          "Apple pie and cakes made with valley fruit",
        ],
      },
      {
        h: "Types of cafes",
        p: [
          "The main road and the lanes near the bridge have the busiest cafes. Riverside cafes in Kasol and Chalal have seating by the water, best in spring and autumn. Village cafes in Tosh, Pulga and Kalga serve simpler home-style food with views. Many cafes open by mid-morning and close by 11 pm; in winter, some close for weeks.",
        ],
      },
      {
        h: "Vegetarian and Jain options",
        p: [
          "Most cafes have plenty of vegetarian dishes, and dal, rice and vegetable thalis are easy to find. Jain food is not common, but stays can often prepare simple meals without onion and garlic if asked in advance.",
        ],
      },
      {
        h: "Langar at Manikaran Sahib",
        p: [
          "The gurudwara at Manikaran serves free community meals to everyone, cooked partly in the heat of the hot springs. It is a humbling and filling experience; cover your head, sit with others and help clean up if you can.",
        ],
      },
      {
        h: "Eating well and safely",
        list: [
          "Drink filtered or bottled water and refill bottles at your stay",
          "Choose busy cafes where food turns over quickly",
          "Go easy on spicy and rich dishes at altitude",
          "Carry snacks and water for treks, where cafes are few",
          "Ask about cooking oil and ingredients if you have allergies",
        ],
      },
      {
        h: "Food on the treks",
        p: [
          "On the Kheerganga trail and in villages like Tosh and Pulga, simple cafes serve maggi, parathas, dal, rice and tea. Prices rise with altitude because supplies are carried up. Carry energy snacks and enough water between stops.",
        ],
      },
      {
        h: "A one-day food walk",
        days: [
          "Breakfast of shakshuka or parathas at a riverside cafe in Kasol.",
          "Langar lunch at Manikaran Sahib.",
          "Tea and cake in Chalal by the river in the afternoon.",
          "Dinner of trout or a Himachali thali back in Kasol.",
        ],
      },
      REACH_KASOL,
      RESPECT,
    ],
    faqs: [
      { q: "What is Kasol famous for in food?", a: "Israeli dishes such as shakshuka and hummus, along with Himachali siddu and trout." },
      { q: "Why is Kasol called Mini Israel?", a: "It has long been popular with Israeli travellers, and many cafes serve Israeli food." },
      { q: "Is vegetarian food available in Kasol?", a: "Yes. Most cafes have many vegetarian dishes and thalis." },
      { q: "Is the Manikaran langar open to everyone?", a: "Yes. The free community kitchen welcomes all visitors." },
      { q: "Do Kasol cafes stay open in winter?", a: "Some close for part of the season; others stay open with shorter hours." },
      { q: "Is tap water safe in Kasol?", a: "Use filtered or bottled water; most stays offer refills." },
    ],
  },

  {
    slug: "kasol-for-couples-guide",
    title: "Kasol for Couples: Romantic Stays, Walks and a 4-Day Plan",
    description: "Kasol for couples: quiet riverside stays in Chalal, sunrise at Tosh, the Kheerganga hot spring, cafe evenings, best months and a relaxed 4-day plan.",
    category: "Honeymoon",
    destination: "himachal",
    city: "kasol",
    date: "2026-11-04",
    intro:
      "Kasol suits couples who want a slow, nature-filled trip: riverside cottages, pine forest walks, a night in Tosh for mountain views and the Kheerganga hot spring. Four days is ideal. Stay in Chalal or on the quieter edges of Kasol rather than the busiest lanes, and visit in October, November or April for calm and clear weather.",
    sections: [
      {
        h: "Why Kasol works for couples",
        p: [
          "Kasol is small, walkable and set by a fast blue river under pine-covered slopes. Days can be as active or as lazy as you like: a short walk to Chalal, a trek to Kheerganga, or simply reading in a riverside cafe. Evenings are relaxed, and the higher villages offer real quiet.",
        ],
      },
      {
        h: "Where couples should stay",
        list: [
          "Chalal: across the bridge, quieter and greener, with riverside cottages",
          "Kasol's edges: boutique stays near the river away from the main road",
          "Tosh: simple guesthouses with big mountain views for a night",
          "Manikaran: practical and calm, close to the gurudwara and springs",
        ],
      },
      {
        h: "A relaxed 4-day plan",
        days: [
          "Arrive in Kasol; walk to Chalal and settle into a riverside cottage.",
          "Manikaran in the morning, then Barshaini and up to Tosh for the night and the sunset.",
          "Sunrise in Tosh, then back down to Pulga's forest walk; return to Kasol.",
          "Slow morning by the river, a cafe brunch, and depart by evening Volvo.",
        ],
      },
      {
        h: "Adding Kheerganga",
        p: [
          "For an adventurous couple, add a day for the Kheerganga trek, with time to soak in the hot spring at the top. Go in May, June, September or October, start early and pack warm layers for the evening.",
        ],
      },
      {
        h: "Best time for couples",
        p: [
          "October and November bring clear skies and few crowds. April is fresh and green. Avoid peak summer weekends and the New Year week if you want quiet, and the monsoon months for road reliability.",
        ],
      },
      {
        h: "Romantic things to do",
        list: [
          "A riverside picnic near Chalal",
          "Sunset and sunrise at Tosh",
          "A soak in the Kheerganga hot spring",
          "A forest walk to Pulga",
          "A slow dinner at a quiet cafe with a fire on cold nights",
        ],
      },
      {
        h: "Kasol and Manali as a honeymoon",
        p: [
          "Combine three nights in Kasol with three in Manali for snow at Solang and the Atal Tunnel. The two are about three hours apart by road via Bhuntar and Kullu. End in Kasol for a calmer finish.",
        ],
      },
      {
        h: "Tips for couples",
        list: [
          "Book riverside or view rooms early for weekends",
          "Carry cash; ATMs are few",
          "Pack warm clothes even in summer",
          "Respect local customs in villages and dress modestly at temples",
        ],
      },
      REACH_KASOL,
      RESPECT,
    ],
    faqs: [
      { q: "Is Kasol good for a honeymoon?", a: "Yes, for couples who like nature, quiet and walks rather than luxury resorts." },
      { q: "Where should couples stay in Kasol?", a: "In Chalal or quiet riverside stays on the edges of Kasol, with a night in Tosh." },
      { q: "How many days are enough for Kasol?", a: "Four days for a relaxed trip; five with Kheerganga." },
      { q: "Which month is best for couples in Kasol?", a: "October and November for calm and clear weather; April for fresh greenery." },
      { q: "Can we combine Kasol and Manali?", a: "Yes. They are about three hours apart; three nights in each makes a good honeymoon." },
      { q: "Is Kasol safe for couples?", a: "Yes. Use reputed stays, travel in daylight on treks and avoid isolated spots at night." },
    ],
  },

  {
    slug: "chalal-rasol-grahan-treks",
    title: "Short Treks from Kasol: Chalal, Rasol and Grahan Village",
    description: "Easy and moderate treks from Kasol: the Chalal forest walk, the steep climb to Rasol, the Grahan village trek, distances, difficulty, best time and tips.",
    category: "Adventure",
    destination: "himachal",
    city: "kasol",
    date: "2026-11-04",
    intro:
      "Three of the best short treks from Kasol are the easy Chalal riverside walk (about 30 minutes), the steep climb from Chalal to Rasol village (3 to 4 hours up), and the Grahan village trek (about 8 to 9 km, 4 to 5 hours). Chalal suits everyone; Rasol and Grahan need fitness and good shoes. Go from April to June or September to November.",
    sections: [
      {
        h: "Chalal: the easy riverside walk",
        p: [
          "Cross the bridge over the Parvati from Kasol and follow the riverside path through pine forest to Chalal village, about 30 minutes on foot. It is a gentle walk with cafes and stays along the way, perfect for an afternoon or for families.",
        ],
      },
      {
        h: "Rasol: the steep climb",
        p: [
          "From Chalal, a steep trail climbs through forest and fields to Rasol, a village high above the valley at roughly 2,800 to 3,000 m. Expect 3 to 4 hours up and 2 to 3 hours down. The reward is a quiet village with wide views across the Parvati valley. Go with someone who knows the trail, as junctions can be confusing.",
        ],
      },
      {
        h: "Grahan: the village trek",
        p: [
          "The Grahan trek starts near Kasol and follows the Grahan nala through forest to Grahan village, at roughly 2,350 m, about 8 to 9 km and 4 to 5 hours one way. Grahan has simple homestays, so many trekkers stay a night. The trail is mostly gradual with some steep sections.",
        ],
      },
      {
        h: "Which trek should you choose?",
        list: [
          "Families and short on time: Chalal",
          "Fit walkers wanting a big view in a day: Rasol",
          "A gentle overnight village stay: Grahan",
          "Fit trekkers wanting hot springs: Kheerganga from Barshaini",
        ],
      },
      {
        h: "Best time",
        p: [
          "April to June and September to November are best. Monsoon rain makes the Rasol and Grahan trails slippery, and winter brings snow above Kasol. Start early to avoid afternoon clouds.",
        ],
      },
      {
        h: "What to carry",
        list: [
          "Trekking shoes with grip",
          "2 litres of water and snacks",
          "A warm layer and rain jacket",
          "A headlamp and power bank",
          "Cash for homestays and tea",
        ],
      },
      {
        h: "Safety tips",
        list: [
          "Hire a local guide for Rasol and Grahan if you are unsure of the route",
          "Tell your stay where you are going",
          "Turn back if weather changes",
          "Avoid trekking alone",
          "Do not drink untreated stream water",
        ],
      },
      {
        h: "A 3-day short-trek plan",
        days: [
          "Arrive in Kasol; afternoon walk to Chalal.",
          "Grahan trek with a night in a village homestay.",
          "Walk down to Kasol and rest, or take a taxi to Manikaran.",
        ],
      },
      REACH_KASOL,
      RESPECT,
    ],
    faqs: [
      { q: "How far is Chalal from Kasol?", a: "About 30 minutes on foot across the bridge and along the river." },
      { q: "Is the Rasol trek difficult?", a: "Yes, it is steep. Fit walkers manage it in 3 to 4 hours up." },
      { q: "How long is the Grahan trek?", a: "About 8 to 9 km one way, 4 to 5 hours." },
      { q: "Can I stay overnight in Grahan?", a: "Yes. Simple homestays offer beds and meals." },
      { q: "Do I need a guide for these treks?", a: "Not for Chalal. For Rasol and Grahan, a guide helps if you are new to the trails." },
      { q: "Which is the easiest trek near Kasol?", a: "The riverside walk to Chalal." },
    ],
  },

  {
    slug: "kasol-in-winter-snow-guide",
    title: "Kasol in Winter: Snow at Tosh, What's Open and How to Plan",
    description: "Kasol in winter: where to find snow (Tosh, Kalga, Grahan), cold-weather tips, which cafes and stays stay open, road conditions and a 4-day winter plan.",
    category: "Planning",
    destination: "himachal",
    city: "kasol",
    date: "2026-11-04",
    intro:
      "Kasol in winter, from December to February, is cold, quiet and often sunny. The village itself gets only occasional light snow, but Tosh, Kalga, Pulga and Grahan above it are usually snow-covered. Many cafes and guesthouses close for part of the season, so book an open stay in advance, pack proper winter gear and plan daylight-only travel.",
    sections: [
      {
        h: "Where to find snow",
        list: [
          "Tosh: usually snow-covered from December to February",
          "Kalga and Pulga: small villages near Barshaini with snowy forests",
          "Grahan: snowbound in deep winter; only with a guide",
          "The road above Manikaran: snowy stretches after storms",
        ],
      },
      {
        h: "What's open in winter",
        p: [
          "Some cafes and stays in Kasol stay open through winter, but many close for weeks, especially in January. In Tosh and the higher villages, only a few guesthouses remain open. Confirm before booking, and ask about heating and hot water.",
        ],
      },
      {
        h: "Road conditions",
        p: [
          "The Bhuntar to Kasol road is usually open, but snow and ice can affect the stretch beyond Manikaran towards Barshaini. The road up to Tosh may close after heavy snow. Use a local driver who knows winter conditions, and travel in daylight.",
        ],
      },
      {
        h: "A 4-day winter plan",
        days: [
          "Arrive in Kasol; easy walk to Chalal and a warm dinner.",
          "Manikaran's hot springs, then to Barshaini and Kalga for snow.",
          "Tosh for snow views if the road or path is safe; back to Kasol.",
          "Slow morning in Kasol, then depart or continue to Manali for Solang's snow.",
        ],
      },
      {
        h: "What to pack",
        list: [
          "Thermals and woollen socks",
          "A heavy down jacket",
          "Waterproof boots with good grip",
          "Gloves, cap and scarf",
          "A power bank for cold-drained batteries",
          "Lip balm and moisturiser",
        ],
      },
      {
        h: "Winter safety",
        list: [
          "Avoid trekking on snowy trails without a guide",
          "Watch for black ice on shaded roads in the morning",
          "Tell your stay your plans each day",
          "Return before dark; temperatures drop fast",
          "Carry cash; ATMs may be out of service",
        ],
      },
      {
        h: "Is Kasol worth visiting in winter?",
        p: [
          "Yes, if you enjoy quiet, cold and snow in the higher villages rather than in Kasol itself. It is a calm alternative to busy Manali. If you want guaranteed snow activities, combine it with Manali's Solang Valley, about three hours away.",
        ],
      },
      {
        h: "New Year in Kasol",
        p: [
          "The New Year week is the busiest time of winter, with full stays and lively cafes. Book well ahead, and expect higher demand and traffic on the valley road.",
        ],
      },
      REACH_KASOL,
    ],
    faqs: [
      { q: "Does it snow in Kasol?", a: "Only lightly in some years. Tosh, Kalga, Pulga and Grahan above it usually get proper snow." },
      { q: "Is Kasol open in winter?", a: "Yes, but many cafes and stays close for weeks. Confirm before booking." },
      { q: "Can I reach Tosh in winter?", a: "Often yes on foot or by taxi when the road is clear; heavy snow can close it." },
      { q: "Is Kasol good for New Year?", a: "It is lively and busy; book stays early." },
      { q: "What is the temperature in Kasol in January?", a: "Days are cold to cool and nights often below freezing; higher villages are colder." },
      { q: "Should I combine Kasol with Manali in winter?", a: "Yes, for reliable snow activities at Solang Valley." },
    ],
  },

  {
    slug: "parvati-valley-itinerary-5-days",
    title: "Parvati Valley Itinerary for 5 Days: Kasol, Tosh, Kheerganga and Malana",
    description: "A 5-day Parvati valley itinerary: Kasol and Chalal, Manikaran, Tosh, the Kheerganga trek with the hot spring, and Malana, with routes, stays and tips.",
    category: "Itineraries",
    destination: "himachal",
    city: "kasol",
    date: "2026-11-04",
    intro:
      "Five days in the Parvati valley covers its best: Kasol and Chalal, Manikaran Sahib, the mountain village of Tosh, the Kheerganga trek with its hot spring, and a respectful visit to Malana. Base yourself in Kasol, spend a night in Tosh or near Kheerganga, and travel between April and June or September and November for the best weather.",
    sections: [
      {
        h: "Day 1: Kasol and Chalal",
        days: ["Arrive on the overnight Volvo; rest, then walk to Chalal along the river and spend the evening in a Kasol cafe."],
      },
      {
        h: "Day 2: Manikaran and Tosh",
        days: [
          "Morning at Manikaran Sahib: gurudwara, langar and hot springs.",
          "Continue to Barshaini and up to Tosh; stay the night for sunset views.",
        ],
      },
      {
        h: "Day 3: Kheerganga trek",
        days: [
          "Walk down to Barshaini and start the Kheerganga trek via Nakthan.",
          "Reach the top in the afternoon; soak in the hot spring and stay nearby if rules allow, or descend the next morning.",
        ],
      },
      {
        h: "Day 4: Return and Pulga",
        days: [
          "Descend to Barshaini; visit the forested village of Pulga.",
          "Return to Kasol for a relaxed evening.",
        ],
      },
      {
        h: "Day 5: Malana and departure",
        days: [
          "Day trip to Malana with a guide, following village rules.",
          "Return to Kasol or Bhuntar for the evening Volvo.",
        ],
      },
      {
        h: "Adjusting the plan",
        list: [
          "Less fit: skip Kheerganga and add Grahan or a slow day in Chalal",
          "With family: stay in Kasol or Manikaran and make Tosh a day trip",
          "In winter: skip Kheerganga and visit snowy Kalga and Tosh with a guide",
          "Short on time: drop Malana and finish with a riverside morning",
        ],
      },
      {
        h: "Where to stay",
        list: [
          "Kasol and Chalal: the widest choice of cottages, hostels and hotels",
          "Tosh: simple guesthouses with views",
          "Near Kheerganga: basic shelters where permitted",
          "Manikaran: convenient for families and pilgrims",
        ],
      },
      {
        h: "Getting around",
        p: [
          "Local taxis and HRTC buses link Bhuntar, Kasol, Manikaran and Barshaini. Shared taxis are common in season. For Malana, a taxi from Kasol to the dam road and a guide for the walk are easiest.",
        ],
      },
      {
        h: "Budget and booking tips",
        p: [
          "Costs depend on the season, stay type (hostel, cottage or boutique), taxis versus buses, guides for treks and Malana, and whether you add Manali. Book stays early for weekends in May, June and October, and the New Year week.",
        ],
      },
      REACH_KASOL,
      RESPECT,
    ],
    faqs: [
      { q: "How many days are enough for the Parvati valley?", a: "Five days covers Kasol, Manikaran, Tosh, Kheerganga and Malana at a good pace." },
      { q: "Can I do this itinerary without trekking?", a: "Yes. Replace Kheerganga with Chalal, Pulga and Grahan or a slow day in Kasol." },
      { q: "Is the Parvati valley good for families?", a: "Yes, based in Kasol or Manikaran with short walks and Tosh as a day trip." },
      { q: "When is the best time for this trip?", a: "April to June and September to November." },
      { q: "How do I get from Kasol to Barshaini?", a: "By taxi or HRTC bus, about 15 km and 40 minutes." },
      { q: "Can I combine this with Manali?", a: "Yes. Manali is about three hours from Kasol; add three days for Solang and the Atal Tunnel." },
    ],
  },
];

// Post-specific extra sections so every guide clears 900 words with detail.
const EXTRA: Record<string, { sections: BlogSection[]; faqs?: { q: string; a: string }[] }> = {
  "tosh-village-guide": {
    sections: [
      { h: "Tosh, Pulga and Kalga compared", p: ["All three villages sit around Barshaini at the end of the valley road. Tosh is the highest and has the widest views; it is busier with backpackers in season. Pulga, across the river, is known for its dense deodar forest, often called the fairy forest, and feels quieter. Kalga is small and spread among apple orchards, with a few homestays. Many travellers sleep in one and walk to the others in a day."] },
      { h: "What a day in Tosh looks like", p: ["Mornings start cold and clear, with sun reaching the village late because of the surrounding ridges. After breakfast, most visitors walk up the valley for a few hours or simply sit in a cafe with the view. Afternoons bring cloud on many days, and evenings are for watching the light fade over the peaks with tea. Power cuts and slow internet are part of the experience."] },
    ],
    faqs: [{ q: "Is Tosh good for families?", a: "For a day trip, yes. For overnight stays, the steep paths and basic rooms suit older children better than toddlers or older parents." }],
  },
  "malana-village-guide": {
    sections: [
      { h: "A little about Malana's history and customs", p: ["Malana is often described as one of the oldest self-governing villages in the region, with decisions taken by a council under the authority of the deity Jamlu. Residents speak their own dialect, and many customs are meant to keep the village and its shrines pure. Local legends about the village's origins are told in many versions; treat them as stories and the residents' wishes as the rules that matter."] },
      { h: "What visitors can and cannot see", p: ["Visitors usually see the village from the paths that pass through it, with its stone and timber houses and carved shrines. Temples and many areas are closed to outsiders. A guide will point out where you may stand and photograph, and where you should not go at all."] },
    ],
    faqs: [{ q: "When is the best time to visit Malana?", a: "April to June and September to November, when the path is dry and the road is open." }],
  },
  "manikaran-sahib-guide": {
    sections: [
      { h: "Timings and crowds", p: ["The gurudwara is open around the clock, and the langar serves meals through most of the day. Mornings are calmest; weekends, Gurpurab and summer holidays bring large groups from Punjab and Haryana. Arrive early if you want quiet time at the springs."] },
      { h: "A pilgrimage shared by two faiths", p: ["For Sikhs, Manikaran is linked to the travels of Guru Nanak Dev Ji, and the gurudwara draws pilgrims from across north India, especially from Punjab. For Hindus, the town is linked to Shiva and Parvati and to the legend of a lost jewel in the waters. Visitors often see both communities side by side at the springs and shrines, which is part of the town's character."] },
      { h: "Visiting with family", p: ["Manikaran is one of the easiest places in the Parvati valley for families and older travellers: the road reaches the town, the gurudwara has facilities, and the walk to the shrines is short. Keep children away from the edges of the hot springs and the fast river, and plan a short visit if crowds are heavy at weekends."] },
      { h: "Hot springs: what to know", list: ["The water is very hot; test it before entering", "Bathing areas are separate for men and women", "Carry a towel and a change of clothes", "Avoid long soaks if you have heart or blood pressure conditions", "Do not use soap in the natural pools"] },
    ],
  },
  "best-time-to-visit-kasol": {
    sections: [
      { h: "Shoulder seasons for value", p: ["March and November are the quiet shoulder months, with fewer travellers, easier bookings and good weather on most days. Nights are cold, but days are often bright and clear."] },
      { h: "Kasol compared with Manali by season", p: ["Kasol is lower and milder than Manali, so spring arrives earlier and winter is less harsh in the village itself. Manali is better for snow at Solang and the Atal Tunnel, while Kasol is better for riverside calm and treks. On a combined trip, spring and autumn suit both; in deep winter, Manali gives the snow and Kasol the quiet."] },
      { h: "Weekdays versus weekends", p: ["Kasol is popular with weekend travellers from Delhi and Chandigarh, who arrive on Friday night buses. Saturdays and Sundays in peak months are busy in the cafes and on the Kheerganga trail. Arriving on a Sunday night or Monday morning gives you the quieter side of the valley."] },
      { h: "Weather in a single day", p: ["Even in good months, mornings in the valley are cool, afternoons can cloud over and evenings turn cold quickly once the sun drops behind the ridges. Plan treks and outdoor time for the morning and keep a warm layer handy for the evening."] },
    ],
  },
  "kasol-cafes-food-guide": {
    sections: [
      { h: "Food for kids and older travellers", p: ["Families with children or older parents will find simple, mild options in most cafes: dal and rice, plain parathas, khichdi on request, pasta and toast. Ask for less spice and oil, and carry familiar snacks for long drives and walks."] },
      { h: "Himachali food beyond the cafes", p: ["Ask homestays for local dishes that rarely appear on cafe menus: rajma and rice with local ghee, kadhi, seasonal greens, and babru, a fried bread. In winter, homestays may serve heavier dishes and plenty of tea. Eating with a local family is one of the best ways to understand the valley."] },
      { h: "Eating on a budget", p: ["Dhabas on the main road and near the bus stand serve thalis, parathas and dal at lower prices than the cafes. Bakeries sell cakes and bread for trek snacks, and the Manikaran langar is free. Carrying snacks from Bhuntar keeps costs down on treks, where prices rise with every kilometre."] },
      { h: "Cafe etiquette", list: ["Many cafes are family run; be patient during busy hours", "Keep noise down late at night", "Ask before charging phones or using power for long", "Carry back your trash on picnics by the river"] },
    ],
    faqs: [{ q: "Can I find mild food for children in Kasol?", a: "Yes. Most cafes serve dal, rice, parathas, pasta and toast, and will reduce spice on request." }],
  },
  "kasol-for-couples-guide": {
    sections: [
      { h: "One quiet morning ritual", p: ["Wake early, walk to the riverbank before the cafes open, and watch the light reach the pines across the valley. It is the calmest hour in Kasol."] },
      { h: "Rainy-day ideas for couples", p: ["If it rains, spend the morning in a riverside cafe with books and board games, visit the gurudwara and hot springs at Manikaran, and take a short covered walk in Chalal when the rain eases. Keep Tosh and Kheerganga for the clearest days, and enjoy the valley's moody clouds from your cottage veranda."] },
      { h: "What decides the cost of a couple's trip", list: ["Season and weekends", "Stay type: boutique cottage, homestay or hostel private room", "Taxis versus buses within the valley", "Adding Kheerganga, Malana or Manali", "Volvo or flights to start and end"] },
      { h: "Packing for two", list: ["Layers and warm jackets even in summer", "Trekking shoes for Tosh and Kheerganga", "A small daypack, water bottles and a power bank", "Swimwear for the hot springs", "Cash for village cafes and taxis"] },
      { h: "Respecting local norms as a couple", p: ["The Parvati valley is relaxed with visitors, but villages are traditional. Keep public affection low-key in villages and at religious sites, dress modestly at Manikaran and temples, and follow any local rules on where visitors may go."] },
    ],
    faqs: [{ q: "Is Kasol good for couples in the monsoon?", a: "It is green and quiet but wet, with landslide risk on the road. Keep plans flexible and avoid treks in heavy rain." }],
  },
  "chalal-rasol-grahan-treks": {
    sections: [
      { h: "Combining these walks with Kheerganga", p: ["Fit trekkers often do Chalal on arrival day, Grahan with a night in the village, and then Kheerganga from Barshaini, making a satisfying five-day trekking trip without technical routes. Leave a rest day between Rasol and Kheerganga if you attempt both, as the descents are hard on the knees."] },
      { h: "Comparing the three walks", list: ["Chalal: about 30 minutes, easy, riverside pine forest, cafes along the way", "Rasol: 3 to 4 hours up, steep, high village with big views", "Grahan: 4 to 5 hours, mostly gradual, forest and stream, homestays for a night"] },
      { h: "Grahan village", p: ["Grahan is a traditional village of wooden houses and fields above the Grahan nala, cut off from road traffic. Homestays serve simple meals, and evenings are quiet. In season, a few trekkers continue higher towards Padri and the Sar Pass region, which is a separate multi-day trek with a guide."] },
      { h: "Who should skip Rasol", p: ["Rasol's trail is steep throughout, with loose sections. Skip it if you have knee trouble, are short of time, or the weather is wet. Chalal and Grahan give a good taste of the valley with less strain."] },
    ],
    faqs: [{ q: "Can I do Grahan and Kheerganga in one trip?", a: "Yes. Do Grahan first with a night in the village, rest a day in Kasol, then trek Kheerganga from Barshaini." }, { q: "Is the Chalal walk good for kids?", a: "Yes. It is short, mostly flat and shaded, with cafes on the way." }],
  },
  "kasol-in-winter-snow-guide": {
    sections: [
      { h: "Cafes and evenings in winter", p: ["The cafes that stay open in winter become cosy gathering places, often with wood stoves, board games and slow evenings. Ask your stay which are open that week, as many close on short notice in the coldest spells, and eat dinner early, since kitchens may shut by 9 pm."] },
      { h: "Getting there in winter", p: ["Overnight Volvos from Delhi and Chandigarh run through winter, but delays are more common after snowfall in the hills around Mandi and Kullu. Pack warm clothes in your hand luggage for the cold early-morning arrival at Bhuntar or Kasol, and book a taxi in advance for the last stretch if you arrive before dawn. Flights to Bhuntar are often cancelled in bad weather, so keep a backup plan."] },
      { h: "Kasol versus Manali in winter", p: ["Manali gives reliable snow activities at Solang, sledges and skiing, but it is crowded around Christmas and New Year. Kasol gives quiet, cold days by the river with snow above the village, and fewer people. Many travellers do both: a few days of snow fun in Manali and a calmer finish in Kasol."] },
      { h: "Staying warm", list: ["Choose a stay with a heater or a wood stove", "Ask for extra blankets", "Keep electronics warm; batteries drain faster in the cold", "Eat warm meals and drink plenty of water", "Layer clothes rather than relying on one heavy jacket"] },
      { h: "Winter photography", p: ["Clear winter mornings give the sharpest views of snowy ridges, and frost on the pines near Kalga and Pulga makes for striking photos. Protect your camera from condensation when moving from cold outdoors into a warm room, and carry spare batteries."] },
      { h: "Who should avoid Kasol in winter", p: ["If you dislike the cold, need reliable heating, or want a lively cafe scene every night, choose spring or autumn instead. Older travellers should only visit with a heated stay and short outings."] },
    ],
    faqs: [{ q: "Do buses run to Kasol in winter?", a: "Yes, HRTC and private buses run through winter, though snow and fog can cause delays." }],
  },
  "parvati-valley-itinerary-5-days": {
    sections: [
      { h: "Sample day timings", list: ["Start each day by 8 am to use the clear morning hours", "Plan long walks for before 2 pm, when afternoon clouds often build", "Be back at your stay before dark, around 5:30 to 6:30 pm depending on the season", "Book the evening Volvo for the last day so you have the morning free"] },
      { h: "Extending to seven days", list: ["Add Grahan with a night in the village", "Add a rest day in Chalal or Tosh", "Continue to Manali for Solang Valley and the Atal Tunnel", "Visit Jibhi and the Tirthan valley, about three hours away via Aut"] },
      { h: "What to pack for five days", list: ["Trekking shoes and comfortable sandals", "Warm layers and a rain jacket", "A daypack for Tosh and Kheerganga", "Swimwear for the hot springs", "Cash, a power bank and basic medicines", "A refillable water bottle and a small rubbish bag"] },
      { h: "Who this itinerary suits", p: ["It suits fit first-timers, friends and couples who enjoy walking. Families can follow a softer version based in Kasol or Manikaran, with Tosh as a day trip and Kheerganga replaced by the Chalal walk and Pulga's forest."] },
      { h: "If the weather turns", p: ["In rain, swap trekking days for Manikaran, Chalal and cafe time, and keep Kheerganga for the clearest day. If the road above Manikaran is blocked, Grahan, reached on foot from Kasol, is a good alternative. Keep one flexible day in the monsoon."] },
    ],
    faqs: [{ q: "Do I need permits for the Parvati valley?", a: "No permits are needed for Kasol, Tosh or Kheerganga; carry ID for checks." }, { q: "Can I extend this trip to seven days?", a: "Yes. Add Grahan, a rest day, or continue to Manali or the Tirthan valley." }],
  },
};

export const KASOL_GUIDES: BlogPost[] = BASE.map((p) => ({
  ...p,
  sections: [...p.sections, ...(EXTRA[p.slug]?.sections ?? [])],
  faqs: [...p.faqs, ...(EXTRA[p.slug]?.faqs ?? [])],
}));

