import type { BlogPost, BlogSection } from "./types";

// Focus destinations, batch 1: Kashmir, Goa, Shimla, Nainital, Kerala.
// Full guides (900+ words, 5+ sections, 4+ FAQs). Fact-based; road times are
// approximate and seasonal. No invented prices, no em dashes.

const BASE: BlogPost[] = [
  {
    slug: "kashmir-tour-package-checklist-before-booking",
    title: "Kashmir Tour Package: 12 Things to Check Before You Book",
    description:
      "Before you pay for a Kashmir package, check hotels, houseboat category, cab type, union taxis, gondola tickets, meal plan and cancellation terms. A checklist.",
    category: "Planning",
    destination: "kashmir",
    date: "2026-11-02",
    intro:
      "Two Kashmir packages with the same title and number of nights can be very different trips. The gap is almost always in the details: which hotels, what category of houseboat, whether the cab is yours for the whole trip, and what is left out, such as union taxis in Pahalgam and Sonamarg or Gulmarg Gondola tickets. Use this checklist when comparing quotes, so the cheapest option is not the one that costs more on the ground.",
    sections: [
      {
        h: "1. Hotels named, not just 'or similar'",
        p: [
          "Ask for the exact hotel in each town, with a link you can check on a map and in reviews. 'Deluxe hotel or similar' leaves the agent free to swap you to a property far from the sights. In Srinagar, check whether the hotel is near Dal Lake and the Boulevard or out on the airport road. In Pahalgam, a hotel by the Lidder river is very different from one on the main road.",
          "If a substitution is ever needed, the quote should say it will be of the same category and that you will be told before arrival.",
        ],
      },
      {
        h: "2. Houseboat category and lake",
        p: [
          "Houseboats on Dal and Nigeen lakes are graded by the tourism department: deluxe, A, B, C and D categories. A night on a deluxe houseboat with carved walnut interiors is not the same as a basic one. Confirm the category, the lake (Nigeen is quieter, Dal is busier and closer to the Boulevard) and whether the shikara transfer to the boat is included.",
        ],
      },
      {
        h: "3. Cab type and who keeps it",
        p: [
          "Check the vehicle (hatchback, sedan, Innova or tempo traveller) and whether it stays with you for the whole trip or only for transfers. A family of five with luggage will not be comfortable in a sedan on the drive to Pahalgam.",
          "Ask whether the cab can go everywhere on the itinerary. It usually cannot, which brings us to the next point.",
        ],
      },
      {
        h: "4. Union taxis in Pahalgam, Sonamarg and Gulmarg",
        p: [
          "Outside cabs are not allowed to drive to most local sightseeing points. In Pahalgam, Aru Valley, Betaab Valley and Chandanwari are covered by the local union taxi stand. In Sonamarg, the road beyond town to Zero Point runs on local vehicles. Good quotes say clearly whether these local taxis are included or payable on the spot, so you can budget for them.",
        ],
      },
      {
        h: "5. What is and is not included",
        list: [
          "Meal plan: breakfast only (CP), breakfast and dinner (MAP) or all meals (AP)",
          "Gulmarg Gondola tickets: usually not included; they are booked online in your own name",
          "Pony rides, sledges and guides at snow points: almost always extra",
          "Entry fees to the Mughal gardens and the tulip garden",
          "Airport transfers on arrival and departure days",
          "Shikara ride on Dal Lake: how long, and whether it is shared or private",
        ],
      },
      {
        h: "6. A realistic day plan",
        p: [
          "Read the itinerary day by day and check the drive times. Srinagar to Pahalgam is about 2.5 to 3 hours, Srinagar to Gulmarg about 1.5 to 2 hours and Srinagar to Sonamarg about 2.5 to 3 hours. A plan that crams Gulmarg and Sonamarg into one day, or arrives at noon and still promises full Srinagar sightseeing, will leave you rushing.",
        ],
      },
      {
        h: "7. Season-specific details",
        p: [
          "In winter (December to March), ask whether the cab has snow chains and whether a 4x4 is arranged for Gulmarg after fresh snow. In spring, check that the tulip garden dates match your trip, since it is open for only a few weeks from about late March. In summer, ask about Zojila and Gurez road openings if those are on the plan.",
        ],
      },
      {
        h: "8. Payment and cancellation terms",
        p: [
          "Get the payment schedule, cancellation charges and the refund policy for weather or road closures in writing. Pay a reasonable advance and the balance closer to travel, and avoid cash-only operators who will not issue an invoice.",
        ],
      },
      {
        h: "How to compare quotes side by side",
        p: [
          "Put two or three quotes in a simple table: hotels per night, houseboat category, cab, meal plan, and the extras each one leaves out. Add up the extras you would pay on the spot. The quote with the lowest headline price is often not the cheapest once union taxis, gondola tickets and meals are counted.",
          "On our site, you can describe your trip once and get up to three quotes from verified local agents, which makes this comparison quick.",
        ],
      },
    ],
    faqs: [
      { q: "Are Gulmarg Gondola tickets included in Kashmir packages?", a: "Usually not. Tickets are sold online by the cable car corporation in the traveller's name, so most agents leave them out. Ask your agent to remind you when booking opens for your dates." },
      { q: "Why do I need union taxis in Pahalgam?", a: "Local sightseeing in Pahalgam, such as Aru, Betaab and Chandanwari, is served by the local taxi union. Your outside cab drops you in town and waits." },
      { q: "Is one night on a houseboat enough?", a: "For most travellers, yes. One night gives you the experience; the rest of Srinagar is easier from a hotel near the Boulevard." },
      { q: "What meal plan should I pick for Kashmir?", a: "Breakfast and dinner (MAP) works best, because lunches happen on the road at Gulmarg, Pahalgam or Sonamarg." },
      { q: "Should I book Kashmir directly or through an agent?", a: "A local agent saves time on cabs, union taxis and hotel changes, especially in peak season. Compare at least two quotes using the checklist above." },
    ],
  },

  {
    slug: "kashmir-packing-list-by-season",
    title: "What to Pack for Kashmir: Season-by-Season Packing List",
    description:
      "What to pack for Kashmir in spring, summer, autumn and winter: layers, shoes for snow, documents, medicines and phone tips, with notes for kids and older parents.",
    category: "Planning",
    destination: "kashmir",
    date: "2026-11-02",
    intro:
      "Kashmir's weather changes with altitude as much as with the calendar. Srinagar sits at about 1,585 m, Pahalgam at about 2,200 m and Gulmarg at about 2,650 m, and the gondola climbs higher still to Apharwat. So even on a summer trip you will want a warm layer for the evenings and the snow points. Pack in layers, carry proper shoes, and keep a few documents handy, and you will be ready for every stop on a typical Srinagar, Gulmarg, Pahalgam and Sonamarg itinerary.",
    sections: [
      {
        h: "The basics for every season",
        list: [
          "Government photo ID for every adult (Aadhaar, passport or driving licence), plus copies",
          "A light down jacket or fleece that packs small",
          "Comfortable walking shoes with good grip",
          "Sunglasses, sunscreen and lip balm: the sun is strong at altitude",
          "A small daypack for the gondola and day trips",
          "Power bank and charging cables",
          "Personal medicines with prescriptions, and basic altitude and motion-sickness tablets",
          "Reusable water bottle",
        ],
        p: [
          "Prepaid SIM cards from other states do not work in Jammu and Kashmir. Postpaid connections from major networks do. If you rely on a prepaid number, plan to use hotel Wi-Fi or ask your agent about a local postpaid option.",
        ],
      },
      {
        h: "Spring (March to May)",
        p: [
          "Spring days in Srinagar are mild and the tulip garden and almond orchards are in bloom, but nights are cold and the snow points in Gulmarg, Sonamarg and Chandanwari still have snow into May.",
        ],
        list: [
          "Light sweaters and one warm jacket",
          "Waterproof shoes or boots for snow points",
          "A compact umbrella or rain jacket for spring showers",
          "Thermal top for evenings in Gulmarg or Pahalgam",
        ],
      },
      {
        h: "Summer (June to August)",
        p: [
          "Summer is warm in Srinagar during the day, and the valleys are green. Evenings in Pahalgam and Sonamarg can still turn cool, and it is colder on the Apharwat ridge.",
        ],
        list: [
          "Cotton clothes for the day, with full sleeves for sun protection",
          "One fleece or light jacket",
          "Hat or cap",
          "Sandals for the houseboat and walking shoes for the meadows",
          "A light rain layer: afternoon showers are common in the mountains",
        ],
      },
      {
        h: "Autumn (September to November)",
        p: [
          "Autumn brings clear skies and the chinar trees turn red and gold, especially in October and November. Mornings and nights get cold quickly, and by November the first snow can arrive in Gulmarg.",
        ],
        list: [
          "Sweaters and a warm jacket",
          "Thermal layers from late October",
          "Gloves and a woollen cap in November",
          "Closed shoes",
        ],
      },
      {
        h: "Winter (December to February)",
        p: [
          "Winter is snow season. Srinagar often drops below freezing at night and Gulmarg is under snow. Dress in layers you can remove indoors, where rooms are heated.",
        ],
        list: [
          "Two sets of thermal innerwear",
          "Heavy down jacket or long padded coat",
          "Waterproof gloves, woollen cap and scarf or neck warmer",
          "Waterproof boots with a good grip; snow boots can also be rented in Gulmarg",
          "Woollen socks, several pairs",
          "Moisturiser and lip balm for the dry cold",
        ],
      },
      {
        h: "Packing for children and older parents",
        p: [
          "For children, carry an extra set of warm clothes in the daypack, since snow play leaves them wet, along with snacks for the drives. For older parents, pack a light folding walking stick, regular medicines in hand luggage, and a warm cap and gloves even in summer for the gondola and Chandanwari.",
          "Hot water bottles and heated rooms are worth asking about when your agent books hotels for a winter trip with grandparents.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need snow boots for Kashmir?", a: "In winter and early spring, yes, or rent them in Gulmarg and Sonamarg. In summer, good walking shoes are enough." },
      { q: "Does my prepaid SIM work in Kashmir?", a: "Prepaid SIMs from outside Jammu and Kashmir do not work there. Postpaid connections from the major networks do." },
      { q: "Is Kashmir cold in May?", a: "Days in Srinagar are pleasant in May, but nights are cool and Gulmarg, Sonamarg and Chandanwari can still have snow. Carry a warm jacket." },
      { q: "What should women wear in Kashmir?", a: "Modest, comfortable clothing is best, especially when visiting shrines such as Hazratbal, where covering the head is expected. Carry a scarf." },
    ],
  },

  {
    slug: "north-goa-vs-south-goa",
    title: "North Goa vs South Goa: Which Is Better for Your Trip?",
    description:
      "North Goa or South Goa? Compare beaches, nightlife, food, crowds, hotels and travel times, with the best fit for couples, families, friends and first-timers.",
    category: "Planning",
    destination: "goa",
    date: "2026-11-02",
    intro:
      "North Goa is lively, busy and close to the clubs, markets and forts, while South Goa is calmer, with longer and cleaner beaches and more resorts. Most first-time visitors, groups of friends and anyone who wants nightlife are happier in the north. Couples, families with small children and travellers who want quiet beach days often prefer the south. If you have five nights or more, split your stay: two or three nights in each.",
    sections: [
      {
        h: "Where the line is",
        p: [
          "Goa is small: the state is about 105 km from north to south. North Goa covers the coast from Querim and Arambol down through Morjim, Vagator, Anjuna, Baga, Calangute and Candolim to Panaji. South Goa runs from around Bogmalo and Majorda through Colva, Benaulim, Varca, Cavelossim and Mobor down to Agonda, Palolem and Galgibaga.",
          "Goa has two airports: Manohar International Airport at Mopa in the north and Dabolim in the south-centre. Choosing the airport closer to your hotel saves an hour or more on arrival day.",
        ],
      },
      {
        h: "Beaches",
        p: [
          "North Goa's beaches near Baga and Calangute are busy, with shacks, water sports and loud music. Further north, Morjim, Ashwem and Mandrem are quieter, and Arambol has a laid-back crowd.",
          "South Goa's beaches are longer and less crowded. Colva and Benaulim are wide and sandy, Varca and Cavelossim are lined with resorts, and Palolem and Agonda in the far south are crescent bays with calm water in the dry season.",
        ],
      },
      {
        h: "Nightlife, food and shopping",
        list: [
          "North: clubs and bars around Baga, Anjuna and Vagator; night markets at Arpora on Saturdays in season; the Anjuna flea market on Wednesdays in season",
          "North: Panaji's Fontainhas Latin quarter for heritage walks and Goan restaurants",
          "South: beach shacks and resort restaurants, quieter evenings, and fresh seafood in Colva, Benaulim and Palolem",
          "South: Margao market for spices, cashews and local produce",
        ],
      },
      {
        h: "Sightseeing in each half",
        p: [
          "North Goa has Fort Aguada, Chapora Fort, the Old Goa churches including the Basilica of Bom Jesus (a UNESCO World Heritage site), and the spice plantations around Ponda, which are between the two halves.",
          "South Goa has Cabo de Rama fort, the Portuguese-era mansions of Chandor and Loutolim, and Dudhsagar Falls, which is a full day trip inland near the Karnataka border and best seen after the monsoon.",
        ],
      },
      {
        h: "Who should stay where",
        list: [
          "First trip to Goa, or a group of friends: North Goa (Calangute, Baga, Candolim or Vagator)",
          "Honeymoon: South Goa resorts (Cavelossim, Varca) or a quieter North Goa beach like Ashwem or Mandrem",
          "Families with small children: South Goa, for calmer beaches and resort pools",
          "Budget travellers: North Goa, which has the widest range of guesthouses",
          "Five nights or more: split the stay, north first for the action, south last to relax",
        ],
      },
      {
        h: "Getting around",
        p: [
          "Taxis, app cabs where available, and rented scooters or self-drive cars are the main ways to get around. Distances look short on a map but traffic in season is heavy around Calangute and Panaji. Driving from Calangute to Palolem takes about two hours.",
          "If you rent a scooter, carry your licence and wear a helmet; police checks are common.",
        ],
      },
      {
        h: "When to go",
        p: [
          "November to February is the dry, pleasant peak season, with Christmas and New Year the busiest weeks. March to May is hot and humid. The monsoon, roughly June to September, brings heavy rain, rough seas and closed beach shacks, but green countryside, waterfalls and lower hotel rates.",
        ],
      },
    ],
    faqs: [
      { q: "Is North Goa or South Goa better for a honeymoon?", a: "South Goa suits most honeymooners for its quiet beaches and resorts. Couples who want some nightlife can stay in quieter North Goa areas like Ashwem or Mandrem." },
      { q: "Which airport should I fly into for Goa?", a: "Mopa (Manohar International) for North Goa and Dabolim for South Goa and central areas. Check which is nearer your hotel before booking." },
      { q: "Can I see both North and South Goa in one trip?", a: "Yes. With four or five nights, split your stay, or stay centrally and take a full day trip to the other half." },
      { q: "Is Goa good in the monsoon?", a: "For green landscapes, waterfalls and lower prices, yes. For beach holidays and water sports, no: the sea is rough and many shacks close." },
    ],
  },

  {
    slug: "shimla-itinerary-3-days",
    title: "Shimla Itinerary for 3 Days: Mall Road, Kufri, Mashobra and Chail",
    description:
      "A 3-day Shimla itinerary: the Ridge, Mall Road and Jakhu on day one, Kufri and Mashobra on day two, Chail on day three, with timings and travel tips.",
    category: "Itineraries",
    destination: "himachal",
    city: "shimla",
    date: "2026-11-02",
    intro:
      "Three days is the right length for Shimla. Spend the first on foot around the Ridge, Mall Road, Christ Church and Jakhu Temple, the second on the Kufri and Mashobra side for views and snow in winter, and the third on a drive to Chail's palace and cricket ground. Shimla is about 340 km from Delhi (7 to 9 hours by road) and about 115 km from Chandigarh (3 to 4 hours), and the toy train from Kalka is a slow, scenic way in.",
    sections: [
      {
        h: "Before you go",
        p: [
          "Shimla sits at about 2,200 m. Summers (April to June) are pleasant and busy; winters (December to February) are cold, with snow on some days, especially in Kufri and Narkanda. The monsoon months bring rain and occasional landslides on the highway.",
          "Vehicles are restricted on the Mall Road and Ridge, so you walk the centre. Pick a hotel within walking distance of the Mall, or near a lift point, to save effort on the slopes.",
        ],
      },
      {
        h: "Day 1: The Ridge, Mall Road, Christ Church and Jakhu",
        days: [
          "Morning: walk the Ridge, see Christ Church (built in the 1840s and 1850s) and the Gaiety Theatre, and continue along the Mall Road past the old Town Hall.",
          "Late morning: take the ropeway or walk up to Jakhu Temple, dedicated to Hanuman, with its large statue and views over Shimla. Watch your glasses and bags: the monkeys here are bold.",
          "Afternoon: Lakkar Bazaar for wooden handicrafts, and the Scandal Point viewpoint.",
          "Evening: dinner on the Mall and a walk on the Ridge after dark.",
        ],
      },
      {
        h: "Day 2: Kufri and Mashobra",
        days: [
          "Morning: drive to Kufri, about 16 km from Shimla. In winter there is snow play and skiing on the slopes; in summer, pony rides to the Mahasu peak viewpoint and the Himalayan Nature Park.",
          "Afternoon: continue to Mashobra and the Craignano area for apple orchards and forest walks, or visit the Green Valley viewpoint on the way back.",
          "Evening: return to Shimla, or stay a night in a quieter Mashobra property.",
        ],
      },
      {
        h: "Day 3: Chail",
        days: [
          "Drive to Chail, about 45 km from Shimla via Kufri, through deodar forest.",
          "See the Chail Palace, built as a summer retreat by the Maharaja of Patiala, and the Chail cricket ground, often described as one of the highest in the world.",
          "Walk to the Kali Tibba temple for views of the Shivalik hills, then head back to Shimla or on to Chandigarh.",
        ],
      },
      {
        h: "Getting there",
        list: [
          "Road from Delhi: about 340 km via Chandigarh and the Parwanoo highway, 7 to 9 hours",
          "Rail: train to Kalka, then the Kalka to Shimla toy train, a UNESCO-listed mountain railway that takes about 5 to 6 hours",
          "Air: Shimla's Jubbarhatti airport has limited flights; Chandigarh airport, about 115 km away, has more",
        ],
      },
      {
        h: "Extending the trip",
        p: [
          "Shimla pairs well with Manali (about 250 km, 8 to 10 hours) on a classic 6 or 7-day Himachal circuit. With an extra day, Narkanda, about 65 km beyond Shimla, has the Hatu Peak viewpoint and winter skiing.",
          "For a quieter alternative to Shimla itself, stay in Mashobra or Naldehra and visit the Mall on day trips.",
        ],
      },
    ],
    faqs: [
      { q: "Is 3 days enough for Shimla?", a: "Yes. Three days covers the Mall Road and Jakhu, Kufri and Mashobra, and a day trip to Chail. Add a day for Narkanda." },
      { q: "When does it snow in Shimla?", a: "Snowfall usually comes between late December and February, though it varies year to year. Kufri and Narkanda get more snow than Shimla town." },
      { q: "Can cars go on the Mall Road in Shimla?", a: "No. Private vehicles are restricted on the Mall and the Ridge. Park at the designated parking areas or use the lift near the Mall." },
      { q: "Is the Kalka Shimla toy train worth it?", a: "For the scenery and the 100-plus tunnels, yes, if you have time. It is slower than the road, so many travellers take it one way." },
    ],
  },

  {
    slug: "nainital-itinerary-3-days",
    title: "Nainital Itinerary for 3 Days: Naini Lake, Bhimtal, Sattal and Mukteshwar",
    description:
      "A 3-day Nainital itinerary: Naini Lake, Mall Road and Snow View, then the lakes of Bhimtal and Sattal, then Mukteshwar, with drive times and tips.",
    category: "Itineraries",
    destination: "uttarakhand",
    city: "nainital",
    date: "2026-11-02",
    intro:
      "Nainital is a lake town at about 2,000 m in Uttarakhand's Kumaon hills, about 310 km from Delhi (7 to 8 hours by road). Three days lets you spend the first on Naini Lake and the town, the second on the nearby lakes of Bhimtal, Naukuchiatal and Sattal, and the third on a drive to Mukteshwar for Himalayan views. Kathgodam, about 35 km away, is the nearest railway station.",
    sections: [
      {
        h: "Before you go",
        p: [
          "March to June is the peak season, with pleasant days and heavy weekend crowds. October and November have clear skies and mountain views. Winters are cold, with occasional snow in December and January. The monsoon, July to September, brings heavy rain and the risk of landslides on hill roads.",
          "On busy weekends traffic into Nainital can back up for hours. Arriving early in the morning or on a weekday makes a big difference.",
        ],
      },
      {
        h: "Day 1: Naini Lake, Mall Road and Snow View",
        days: [
          "Morning: boat ride on Naini Lake, by rowing boat or paddle boat from the Mallital or Tallital boat stands. Visit the Naina Devi Temple at the north end of the lake.",
          "Afternoon: take the cable car from Mallital up to Snow View Point for views of the Himalayan peaks on a clear day.",
          "Evening: walk the Mall Road between Mallital and Tallital, and the Tibetan market for woollens.",
        ],
      },
      {
        h: "Day 2: Bhimtal, Naukuchiatal and Sattal",
        days: [
          "Drive to Bhimtal, about 22 km away. The lake is larger and quieter than Naini Lake and has an island with an aquarium in its centre.",
          "Continue to Naukuchiatal, the 'lake of nine corners', for boating and paragliding when operating.",
          "End at Sattal, a group of connected lakes in oak and pine forest, good for birdwatching, kayaking and a quiet walk. Return to Nainital in the evening.",
        ],
      },
      {
        h: "Day 3: Mukteshwar",
        days: [
          "Drive to Mukteshwar, about 50 km from Nainital (around 2 hours), at about 2,170 m.",
          "Visit the Mukteshwar Dham temple and Chauli ki Jali, a rock ledge with views over the valleys.",
          "On a clear day, look for the snow peaks of the Himalaya, including Nanda Devi and Trishul. Return to Nainital, or continue to Kathgodam for your train.",
        ],
      },
      {
        h: "Getting there",
        list: [
          "Rail: Kathgodam is the nearest station, about 35 km and 1 to 1.5 hours by taxi; overnight and day trains run from Delhi",
          "Road: about 310 km from Delhi via Moradabad and Haldwani, 7 to 8 hours",
          "Air: Pantnagar airport is about 70 km away, with limited flights",
        ],
      },
      {
        h: "Adding Jim Corbett",
        p: [
          "Jim Corbett National Park's Ramnagar gateway is about 65 km from Nainital, so many families combine the two: two nights in Nainital and two in Corbett for a jungle safari. Safari zones and permits are booked through the park's official online system, often weeks ahead in peak season.",
        ],
      },
    ],
    faqs: [
      { q: "Is 3 days enough for Nainital?", a: "Yes. Three days covers Naini Lake and the town, the nearby lakes and a day in Mukteshwar. Add two days to include Jim Corbett." },
      { q: "When is snowfall in Nainital?", a: "Light snow is possible in December and January, but it is not guaranteed every year. Mukteshwar and higher points see snow more often." },
      { q: "Which is the nearest railway station to Nainital?", a: "Kathgodam, about 35 km away, with direct trains from Delhi." },
      { q: "Should I stay in Nainital or Bhimtal?", a: "Nainital for the Mall Road and lake-side buzz; Bhimtal or Sattal for quiet, nature stays and easier parking." },
    ],
  },

  {
    slug: "best-time-to-visit-kerala",
    title: "Best Time to Visit Kerala: Month-by-Month Guide",
    description:
      "The best time to visit Kerala month by month: dry season for beaches and houseboats, the monsoon for Ayurveda and green hills, and festival dates to plan around.",
    category: "Planning",
    destination: "kerala",
    date: "2026-11-02",
    intro:
      "The best time to visit Kerala for most travellers is October to March, when the weather is dry and the beaches, backwaters and hill stations are all at their best. The monsoon, from June to September, is wet but lush and quiet, and is the traditional season for Ayurveda treatments. April and May are hot and humid on the coast, though Munnar stays pleasant. Your choice depends on whether you want beach days, houseboats, hills or wellness.",
    sections: [
      {
        h: "October to March: the main season",
        p: [
          "After the northeast monsoon tails off in October and November, Kerala is green and fresh, with dry, warm days. December and January are the most comfortable and the busiest months, with Christmas and New Year the peak weeks for houseboats and beach resorts.",
          "This is the best window for a classic circuit of Kochi, Munnar, Thekkady, Alleppey and a beach in Kovalam or Varkala. Book houseboats and hill resorts early for late December.",
        ],
      },
      {
        h: "April and May: hot on the coast, cool in the hills",
        p: [
          "Temperatures and humidity climb on the coast and in the backwaters in April and May. The hill stations of Munnar, Vagamon and Wayanad are pleasant then, which makes this a good time for a hills-focused trip, often at lower rates. Vishu, the Malayalam new year, falls in mid-April.",
        ],
      },
      {
        h: "June to September: the monsoon",
        p: [
          "The southwest monsoon usually reaches Kerala around the start of June, bringing heavy rain through July and August. Waterfalls such as Athirappilly are in full flow, the hills are intensely green, and hotel rates drop.",
          "The monsoon is traditionally seen as the best season for Ayurveda, and many wellness resorts run programmes then. Beaches are not for swimming in this season, and some hill roads can see landslides after heavy rain.",
          "Onam, Kerala's harvest festival, falls in August or September, with flower carpets, feasts and boat races.",
        ],
      },
      {
        h: "Month by month",
        list: [
          "January: dry, pleasant, peak season",
          "February: dry and warm; good for every region",
          "March: getting hotter on the coast; good value",
          "April: hot and humid on the coast; Vishu festival",
          "May: hottest month on the coast; hill stations are the best bet",
          "June: monsoon arrives; Ayurveda season begins",
          "July: heaviest rain; very green, quiet and good value",
          "August: monsoon continues; Nehru Trophy boat race on Punnamada Lake (usually the second Saturday)",
          "September: rain eases; Onam celebrations",
          "October: showers from the northeast monsoon; season starts",
          "November: fresh and green, fewer crowds",
          "December: peak season; book early for Christmas and New Year",
        ],
      },
      {
        h: "Best time by type of trip",
        list: [
          "Honeymoon: October to March, with a houseboat night in Alleppey and a beach at the end",
          "Family holiday: October to February, plus school summer holidays for the hills",
          "Backwaters and houseboats: September to March",
          "Munnar and the hills: September to May",
          "Ayurveda: June to September, or any time at a dedicated centre",
          "Wildlife at Periyar: October to April, with mornings best for sightings",
        ],
      },
      {
        h: "Planning tips",
        p: [
          "Fly into Kochi for central and northern Kerala and Thiruvananthapuram for the south. Most circuits run Kochi, Munnar, Thekkady, Alleppey and then a beach, ending at Thiruvananthapuram, which avoids backtracking.",
          "In peak season, book houseboats and hill resorts two to three months ahead, especially for weekends and holidays.",
        ],
      },
    ],
    faqs: [
      { q: "Which month is best for Kerala?", a: "December and January are the most comfortable, followed by November and February. Choose November or February for fewer crowds." },
      { q: "Is it a good idea to visit Kerala in the monsoon?", a: "If you want green landscapes, waterfalls, Ayurveda and low rates, yes. If you want beaches and swimming, wait until October." },
      { q: "When is the Nehru Trophy boat race?", a: "It is usually held on the second Saturday of August on Punnamada Lake in Alleppey." },
      { q: "Is Munnar good in summer?", a: "Yes. When the coast is hot in April and May, Munnar stays mild, which is why it is popular in the school holidays." },
    ],
  },
];

// Extra sections, kept apart so each post above stays readable.
const EXTRA: Record<string, BlogSection[]> = {
  "kashmir-tour-package-checklist-before-booking": [
    {
      h: "9. Driver, start times and rest stops",
      p: [
        "Ask whether the driver knows the routes in your season, speaks Hindi or English, and stays the night in each town with you. Agree on start times the evening before: leaving Srinagar by 8 am for Gulmarg or Pahalgam means less traffic, better light and fewer queues at the gondola and union taxi stands.",
        "For long drives, such as Jammu to Srinagar, ask the agent to plan a lunch stop and buffer time for tunnel and highway traffic.",
      ],
    },
  ],
  "kashmir-packing-list-by-season": [
    {
      h: "Documents and money",
      p: [
        "Carry original photo ID for every adult and keep digital copies on your phone. Hotels, houseboats and some checkpoints ask for ID, and Gurez Valley needs registration at the police check post. Children's school ID or birth certificate copies are useful too.",
        "Cards and UPI work in most Srinagar hotels and larger shops, but carry some cash for shikara rides, pony operators, roadside tea stalls and snow-point rentals, where connectivity can be patchy. ATMs are easy to find in Srinagar and Pahalgam, less so in Gulmarg and Sonamarg.",
      ],
    },
    {
      h: "What you can rent or buy there",
      p: [
        "You do not need to buy heavy snow gear before the trip. In Gulmarg, Sonamarg and at Chandanwari, shops rent snow boots, long coats and gloves by the day. Ski equipment and instructors are available at the Gulmarg slopes in winter.",
        "Srinagar is also a good place to buy a pheran, the long woollen Kashmiri cloak, along with warm socks, caps and shawls, if you find you have packed too light. Look for government-certified pashmina and handicraft shops for genuine products.",
      ],
    },
    {
      h: "A simple layering rule",
      p: [
        "Think in three layers: a base layer that wicks sweat, a warm middle layer such as fleece or wool, and an outer layer that blocks wind and snow. Remove layers in heated cars and hotels, and add them back before you step out at a snow point or onto the gondola. This keeps you comfortable on a day that might start at 5°C in Srinagar and reach below freezing on Apharwat.",
      ],
    },
  ],
  "north-goa-vs-south-goa": [
    {
      h: "Getting a quote for either half",
      p: [
        "When you ask for a Goa package, say which half you prefer, or that you want a split stay, and which airport you are flying into. Agents can then match hotels to the beaches you want and plan transfers without wasted hours on the road.",
      ],
    },
    {
      h: "A sample 5-night split",
      days: [
        "Nights 1 to 3 in North Goa: Fort Aguada and Candolim on arrival, Old Goa and Fontainhas the next day, and Anjuna, Vagator and Chapora Fort on the third.",
        "Day 4: drive south through the Ponda spice plantations and check in near Colva, Benaulim or Cavelossim.",
        "Day 5: a lazy beach day, with an evening at Cabo de Rama or a heritage house visit in Chandor.",
        "Day 6: fly home from Dabolim, which is close to South Goa.",
      ],
    },
    {
      h: "Food to try in each half",
      p: [
        "In the north, Panaji and the old Latin quarter are the best places for Goan Catholic dishes such as xacuti, vindaloo, sorpotel and bebinca, while the beach belt has every cuisine from Israeli to Italian.",
        "In the south, look for fish curry rice, prawn balchao and fresh catch of the day at family-run shacks in Colva, Benaulim and Palolem. Both halves have good cashew and feni shops; buy feni only from licensed outlets.",
      ],
    },
    {
      h: "Practical tips",
      p: [
        "In peak season, book hotels and rental cars early and expect higher rates around Christmas and New Year. Respect beach safety flags: lifeguards mark safe swimming zones, and currents can be strong. Avoid drinking on the beach after dark and keep valuables in your hotel safe.",
      ],
    },
  ],
  "shimla-itinerary-3-days": [
    {
      h: "Safety on hill roads",
      p: [
        "Hire a driver who knows hill roads if you are not used to them, especially in winter when black ice forms on shaded bends around Kufri and Narkanda. In the monsoon, check road status before leaving, since landslides can close the highway for hours. Start long drives early and avoid driving after dark on unfamiliar stretches.",
      ],
    },
    {
      h: "Where to stay in Shimla",
      p: [
        "Stay near the Mall Road for walkable evenings and easy access to the Ridge, Lakkar Bazaar and Jakhu. Hotels here are on steep slopes, so check how far the property is from the nearest road and whether porters are available for luggage.",
        "For quiet and views, choose Mashobra, Kufri or Naldehra, 15 to 25 km out, and drive into town for an evening. Families with older parents often prefer a hotel with road access and a lift.",
      ],
    },
    {
      h: "Food and shopping",
      p: [
        "Try Himachali dham, the festive rice and lentil meal, where you can find it, along with siddu, a steamed wheat bun, and local trout. The Mall has long-running bakeries and cafes that are part of the Shimla experience.",
        "Lakkar Bazaar is the place for wooden toys and walking sticks, and the Tibetan market below the Mall sells woollens. Himachali caps and shawls make good souvenirs.",
      ],
    },
    {
      h: "Shimla with children and older parents",
      p: [
        "The Mall and Ridge are flat enough for strollers, but most connecting lanes are steep. Use the public lift near the Mall to avoid the climb from the cart road. At Jakhu, the ropeway saves a steep walk.",
        "In winter, carry thermals for children and avoid late evenings outdoors, since temperatures fall quickly after sunset.",
      ],
    },
  ],
  "nainital-itinerary-3-days": [
    {
      h: "Safety and road tips",
      p: [
        "The roads around Nainital are narrow and winding, with tight hairpin bends on the climb from Kathgodam. In the monsoon, check for landslide warnings before setting out for Mukteshwar or the lakes, and in winter watch for frost on shaded bends in the early morning.",
      ],
    },
    {
      h: "Where to stay",
      p: [
        "Mallital, at the north end of the lake near the Flats, the Naina Devi Temple and the Mall Road, is the most convenient base for first-timers. Tallital, at the south end, is closer to the bus stand and the road to Bhimtal and Kathgodam.",
        "For a calmer stay, choose a property in Bhimtal, Sattal or on the Ayarpatta and Sukhatal slopes above the lake, and visit Mallital for an evening walk. Families with older parents should check whether the hotel has road access, since some lake-view properties are up stairs or steep lanes.",
      ],
    },
    {
      h: "Food and shopping",
      p: [
        "Try Kumaoni food where you can: bhatt ki churkani (black soybean curry), aloo ke gutke, kafuli and the local sweet bal mithai, which is a speciality of the Kumaon hills. The Mall Road has cafes and old bakeries, and the Bara Bazaar is good for candles, a Nainital speciality.",
        "The Tibetan market near the Naina Devi Temple sells woollens and winter wear at fair prices in season.",
      ],
    },
    {
      h: "Beating the weekend crowds",
      p: [
        "Nainital is very popular with Delhi and NCR families on long weekends. To avoid traffic and parking queues, travel on weekdays, start from Delhi before dawn, or come by train to Kathgodam and take a taxi. In peak months, the town may restrict private vehicles and run shuttle buses from parking lots outside.",
        "Book the cable car to Snow View early in the day, before the queues build.",
      ],
    },
    {
      h: "Nainital with children and older parents",
      p: [
        "Paddle boats on Naini Lake, the zoo and the cable car keep children busy, and Sattal's forests are good for a short nature walk. For older parents, a hotel close to the Mall in Mallital avoids long climbs. Carry a warm layer even in summer, since evenings by the lake are cool.",
      ],
    },
  ],
  "best-time-to-visit-kerala": [
    {
      h: "How long to plan for",
      p: [
        "Six to eight nights is ideal for a first trip: one in Kochi, two in Munnar, one in Thekkady, one on an Alleppey houseboat and two or three at a beach. With four or five nights, pick two regions, such as Munnar and Alleppey.",
      ],
    },
    {
      h: "Festivals worth planning around",
      list: [
        "Attukal Pongala, Thiruvananthapuram: February or March, when lakhs of women cook offerings on the city streets",
        "Thrissur Pooram: April or May, a temple festival with caparisoned elephants and fireworks",
        "Vishu: mid-April, the Malayalam new year",
        "Onam: August or September, with flower carpets, feasts and snake boat races",
        "Nehru Trophy Boat Race: usually the second Saturday of August in Alleppey",
      ],
    },
    {
      h: "What to pack by season",
      p: [
        "From October to March, pack light cotton clothes, sunscreen and a hat for the coast, plus a light sweater for evenings in Munnar and Thekkady. In April and May, keep clothes as light and breathable as possible and stay hydrated. In the monsoon, bring a sturdy umbrella, quick-dry clothes and sandals with a good grip; leather shoes do not do well in the rain.",
        "Carry modest clothing for temple visits, where men may be asked to remove shirts and women to cover shoulders and legs.",
      ],
    },
    {
      h: "Monsoon travel tips",
      p: [
        "Keep a buffer day in a monsoon itinerary, since heavy rain can slow hill roads. Stay in properties with covered sit-outs to enjoy the rain, check weather alerts from the state disaster management authority, and avoid swimming in the sea or in rivers in spate. Houseboats run through most of the monsoon, but cruises may be shortened on stormy days.",
      ],
    },
  ],
};

export const FOCUS_BATCH_1: BlogPost[] = BASE.map((p) => ({ ...p, sections: [...p.sections, ...(EXTRA[p.slug] ?? [])] }));

