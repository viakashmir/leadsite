import type { BlogPost } from "./types";

// Full Rajasthan guides: rewrites of thin posts keyed by slug (same URL and
// title) plus new guides. Factual, no em dashes, no invented prices.

export const RAJASTHAN_UPGRADES: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = {
  "rajasthan-7-day-itinerary": {
    intro:
      "A 7-day Rajasthan itinerary covers the classic triangle of Jaipur, Jodhpur and Udaipur: two nights in the Pink City for Amber Fort and the old bazaars, two nights in the Blue City below Mehrangarh Fort, a stop at the Ranakpur Jain temple, and two nights by the lakes of Udaipur. Travel between October and March, when days are warm and nights cool, and hire a private cab, as distances between cities are 250 to 350 km.",
    sections: [
      {
        h: "7-day Rajasthan itinerary",
        days: [
          "Arrive in Jaipur. Evening at Nahargarh Fort for the sunset over the city, then dinner.",
          "Jaipur: Amber Fort, Jal Mahal, City Palace, Jantar Mantar and Hawa Mahal; evening in Johari Bazaar.",
          "Drive to Jodhpur (about 340 km), with an optional lunch stop near Ajmer or Beawar.",
          "Jodhpur: Mehrangarh Fort, Jaswant Thada, the blue lanes of Brahmpuri and the Clock Tower market.",
          "Drive to Udaipur via the Ranakpur Jain temple (about 250 km in all).",
          "Udaipur: City Palace, a boat ride on Lake Pichola, Saheliyon ki Bari and the evening dance show at Bagore ki Haveli.",
          "Sunrise by the lake and depart from Udaipur airport.",
        ],
      },
      {
        h: "Jaipur in two days",
        p: [
          "Jaipur, the capital, was founded in 1727 by Maharaja Sawai Jai Singh II as a planned city and painted pink in the 19th century. Its walled city is a UNESCO World Heritage Site. Start early at Amber Fort to beat the crowds and heat, then visit Jal Mahal, the City Palace, the Jantar Mantar observatory and the facade of Hawa Mahal. Evenings are for the bazaars, rooftop restaurants and a sunset at Nahargarh. A composite ticket covers several monuments and saves time.",
        ],
      },
      {
        h: "Jodhpur in two days",
        p: [
          "Jodhpur sits below Mehrangarh, one of India's most impressive forts, rising sheer from a rock above the blue-painted houses of the old city. Allow half a day for the fort's palaces and museum, then visit the white marble Jaswant Thada. Walk the old city's lanes around Brahmpuri, browse the Clock Tower market for spices and textiles, and try mirchi vada and makhaniya lassi. Umaid Bhawan Palace, part museum and part hotel, is worth a visit for its art deco interiors.",
        ],
      },
      {
        h: "Ranakpur on the way",
        p: [
          "The Ranakpur Jain temple, built in the 15th century in the Aravalli hills, is famous for its white marble halls and over a thousand intricately carved pillars, no two alike. It sits on the route between Jodhpur and Udaipur, making a perfect lunch stop. Non-Jain visitors are usually allowed in the afternoon; leather items are not permitted, and modest dress is required.",
        ],
      },
      {
        h: "Udaipur in two days",
        p: [
          "Udaipur, the City of Lakes, is Rajasthan's most romantic city. The City Palace complex rises above Lake Pichola, and boat rides lead to Jag Mandir island, with views of the Lake Palace. Visit Saheliyon ki Bari's fountains, Fateh Sagar Lake and the Jagdish temple, and watch the sunset from Ambrai Ghat or Sajjangarh, the Monsoon Palace. The evening folk dance show at Bagore ki Haveli is a highlight.",
        ],
      },
      {
        h: "Alternative routes",
        list: [
          "Add Pushkar between Jaipur and Jodhpur for its lake and temples",
          "Swap Jodhpur for Jaisalmer and a desert camp on a 9 to 10 day trip",
          "Add Ranthambore at the start for a tiger safari",
          "Add Agra and Delhi for a Golden Triangle plus Rajasthan circuit",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to March: pleasant days and cool nights, the main season",
          "December and January: cold nights, especially in the desert",
          "April to June: very hot, with temperatures often above 40 Celsius",
          "July to September: monsoon, green around Udaipur and lower prices",
        ],
      },
      {
        h: "Getting around",
        p: [
          "A private cab with a driver is the most comfortable way to cover this circuit, as it lets you stop at Ranakpur and roadside attractions. Trains link Jaipur, Jodhpur and Udaipur for travellers on a budget, and there are flights between the major cities. Start long drives in the morning and avoid driving after dark on highways.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Rajasthan is famous for heritage hotels in converted palaces, forts and havelis, from simple family-run havelis to grand palace hotels. Mid-range and budget hotels are also widely available. In Udaipur, a lake-view room is worth it; in Jodhpur, a stay with a view of Mehrangarh adds to the experience.",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates, group size and hotel category on Tavel Package. Up to 3 verified Rajasthan agents send itemised itineraries with a cab, stays and sightseeing.",
        ],
      },
      {
        h: "Food on the route",
        p: [
          "Each city has its specialities. In Jaipur, try pyaaz kachori for breakfast, dal baati churma and laal maas; in Jodhpur, mirchi vada, makhaniya lassi and mawa kachori; and in Udaipur, rooftop dinners of gatte ki sabzi and ker sangri with views of the lake. Rajasthani thalis bring many of these dishes together in one meal.",
        ],
      },
    ],
    faqs: [
      { q: "Is 7 days enough for Rajasthan?", a: "Yes, for Jaipur, Jodhpur and Udaipur with Ranakpur. Add days for Jaisalmer or Pushkar." },
      { q: "What is the best route for a 7-day Rajasthan trip?", a: "Jaipur to Jodhpur to Udaipur via Ranakpur, flying in to Jaipur and out of Udaipur." },
      { q: "When is the best time to visit Rajasthan?", a: "October to March, when days are pleasant and nights cool." },
      { q: "How far is Jaipur from Jodhpur?", a: "About 340 km, around 6 hours by road." },
      { q: "Is Ranakpur worth a stop?", a: "Yes. Its marble Jain temple is one of India's finest and lies on the Jodhpur to Udaipur route." },
      { q: "Should I hire a cab or take trains in Rajasthan?", a: "A private cab is most comfortable; trains suit budget travellers." },
    ],
  },

  "udaipur-honeymoon-guide": {
    intro:
      "Udaipur is Rajasthan's most romantic city, with palaces reflected in Lake Pichola, rooftop dinners, sunset boat rides and heritage hotels. A 4-day Udaipur honeymoon covers the City Palace, a boat ride to Jag Mandir, sunset at Sajjangarh, the Bagore ki Haveli dance show, and a day trip to Kumbhalgarh fort and the Ranakpur temple. October to March is the best season, and the monsoon turns the hills green.",
    sections: [
      {
        h: "4-day Udaipur honeymoon itinerary",
        days: [
          "Arrive and check in to a lake-view hotel. Sunset at Ambrai Ghat and a rooftop dinner.",
          "City Palace, a boat ride on Lake Pichola to Jag Mandir, Jagdish temple, and the evening dance show at Bagore ki Haveli.",
          "Day trip to Kumbhalgarh fort and the Ranakpur Jain temple.",
          "Saheliyon ki Bari, Fateh Sagar Lake and sunset at Sajjangarh, then depart.",
        ],
      },
      {
        h: "Lake Pichola and Jag Mandir",
        p: [
          "Lake Pichola is the heart of Udaipur, ringed by palaces, ghats and havelis. Boat rides leave from the City Palace jetty and other points, circling past the Taj Lake Palace, a former royal summer palace now a hotel open only to guests, and stopping at Jag Mandir, an island palace with gardens and a cafe. A sunset boat ride, with the City Palace glowing gold, is one of the most romantic experiences in India.",
        ],
      },
      {
        h: "City Palace",
        p: [
          "The City Palace, built over several centuries by the Mewar rulers, is the largest palace complex in Rajasthan, with courtyards, balconies, mirror work, paintings and views over the lake. The museum section takes two to three hours. Part of the complex houses heritage hotels where couples can stay in royal surroundings.",
        ],
      },
      {
        h: "Sunset spots",
        list: [
          "Sajjangarh (Monsoon Palace): a hilltop palace with views over the lakes and Aravallis",
          "Ambrai Ghat: views of the City Palace across the water",
          "Rooftop restaurants in the old city",
          "Fateh Sagar Lake's promenade",
          "A sunset boat ride on Lake Pichola",
        ],
      },
      {
        h: "Kumbhalgarh and Ranakpur",
        p: [
          "Kumbhalgarh, about 85 km north, is a hill fort of the Mewar kingdom with walls running about 36 km, among the longest in the world. It is part of the UNESCO-listed Hill Forts of Rajasthan. The Ranakpur Jain temple, about 50 km from Kumbhalgarh, is a marvel of carved white marble with over a thousand pillars. Together they make a full, memorable day trip.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Udaipur has some of India's most romantic hotels: palace hotels on the lake, boutique havelis in the old city with rooftop views, and resorts in the Aravalli hills. Ask for a lake-view room, and mention your honeymoon for extras such as flower decorations, a cake or a private dinner.",
        ],
      },
      {
        h: "Romantic experiences",
        list: [
          "A private candle-light dinner on a rooftop or by the lake",
          "A vintage car ride from the royal collection",
          "A couple's spa session at a heritage hotel",
          "A cooking class in an old city home",
          "Shopping for miniature paintings and silver jewellery",
        ],
      },
      {
        h: "Best time for a honeymoon",
        list: [
          "October to March: pleasant weather, the peak season",
          "December to January: cool evenings, festive",
          "July to September: monsoon, lakes full and hills green",
          "April to June: hot",
        ],
      },
      {
        h: "Food to try",
        list: [
          "Dal baati churma",
          "Gatte ki sabzi and ker sangri",
          "Laal maas for non-vegetarians",
          "Rooftop dinners with lake views",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates and preferred stay on Tavel Package. Up to 3 verified agents send itemised Udaipur honeymoon packages.",
        ],
      },
      {
        h: "History of Udaipur",
        p: [
          "Udaipur was founded in 1559 by Maharana Udai Singh II of Mewar, after Chittorgarh came under repeated attack. Successive Maharanas built palaces, lakes and gardens, creating a city designed around water. The Mewar dynasty, one of the oldest ruling families in the world, is known for its long resistance to outside rule, celebrated in the story of Maharana Pratap. Today the family still lives in part of the City Palace and runs its museum and hotels.",
        ],
      },
      {
        h: "Bagore ki Haveli dance show",
        p: [
          "Every evening, Bagore ki Haveli, an 18th-century mansion on Gangaur Ghat, hosts a folk dance and puppet show called Dharohar. Performers present Rajasthani dances, including women dancing with stacks of pots on their heads, and a puppet show. The show lasts about an hour; arrive early for a good seat. The haveli also has a museum of royal-era rooms and the world's largest turban.",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Udaipur's Maharana Pratap Airport has flights from Delhi, Mumbai and other cities. Trains connect Udaipur with Delhi, Jaipur and Ahmedabad. By road, Udaipur is about 5 hours from Jodhpur via Ranakpur and about 4 hours from Ahmedabad. Auto-rickshaws and cabs serve the city, and the old city lanes around the lake are best explored on foot.",
        ],
      },
      {
        h: "Shopping in Udaipur",
        p: [
          "Udaipur's old city lanes sell miniature paintings, silver jewellery, textiles and leather goods. Visit the shops around the Jagdish temple and the Hathi Pol bazaar, and watch painters at work in small studios.",
        ],
      },
    ],
    faqs: [
      { q: "Is Udaipur good for a honeymoon?", a: "Yes. Its lakes, palaces, heritage hotels and sunsets make it one of India's most romantic cities." },
      { q: "How many days are enough for an Udaipur honeymoon?", a: "Three to four days, including a day trip to Kumbhalgarh and Ranakpur." },
      { q: "Can we visit the Lake Palace?", a: "The Taj Lake Palace is a hotel open only to its guests; boat rides pass close by." },
      { q: "What is the best time for an Udaipur honeymoon?", a: "October to March, or the monsoon for green hills and full lakes." },
      { q: "Where is the best sunset in Udaipur?", a: "Sajjangarh (the Monsoon Palace), Ambrai Ghat and a boat on Lake Pichola." },
      { q: "How far is Kumbhalgarh from Udaipur?", a: "About 85 km." },
    ],
  },

  "jaisalmer-desert-camp-guide": {
    intro:
      "A Jaisalmer desert camp night is the highlight of most Rajasthan trips: a camel ride to the dunes at sunset, a cultural evening of Kalbeliya dance and Manganiyar music under the stars, dinner by the fire, and a night in a Swiss tent. Most camps are at Sam, about 40 km from Jaisalmer, or quieter Khuri, about 45 km away. Camps usually run from about October to March, and the Desert Festival is held in February.",
    sections: [
      {
        h: "How a desert camp night works",
        p: [
          "Most camps pick you up from Jaisalmer in the afternoon or you drive yourself. On arrival, you take a camel ride or jeep safari to the dunes for the sunset, return to camp for tea and snacks, and then watch a cultural programme of folk music and dance around a fire, followed by a buffet dinner. You sleep in a tent with an attached bathroom, and after breakfast you return to Jaisalmer.",
        ],
      },
      {
        h: "Sam or Khuri",
        list: [
          "Sam: the most famous dunes, with many camps and lively evenings; busy in peak season",
          "Khuri: quieter dunes and smaller camps, with a village feel",
          "Both are about 40 to 45 km from Jaisalmer",
          "Choose Khuri for a quieter night and Sam for more activities",
        ],
      },
      {
        h: "Types of camps",
        list: [
          "Standard Swiss tents with attached bathrooms",
          "Luxury tents with heaters, larger rooms and better furnishings",
          "Mud huts and cottages",
          "Non-AC tents in winter, which need warm bedding",
          "Choose licensed camps with proper sanitation and safety",
        ],
      },
      {
        h: "Desert activities",
        list: [
          "Camel safari at sunset or sunrise",
          "Jeep safari and dune bashing",
          "Quad biking and parasailing in some camps",
          "Stargazing in clear desert skies",
          "Overnight camel treks with a night under the stars",
        ],
      },
      {
        h: "Jaisalmer Fort and the city",
        p: [
          "Jaisalmer Fort, the Golden Fort, rises from the desert in yellow sandstone and is one of the few living forts in the world, with shops, houses and hotels inside its walls. It is part of the UNESCO-listed Hill Forts of Rajasthan. Spend a day in the city: the fort and its Jain temples, the carved Patwon ki Haveli, Salim Singh ki Haveli, Gadisar Lake at sunrise and the royal cenotaphs at Bada Bagh.",
        ],
      },
      {
        h: "Kuldhara and nearby sights",
        p: [
          "Kuldhara, about 18 km from Jaisalmer, is an abandoned village of the Paliwal Brahmins, deserted centuries ago and surrounded by local legends. It is often visited on the way to Sam. Further afield, the Desert National Park protects the great Indian bustard and desert wildlife, and Longewala and Tanot, near the border, are linked to the 1971 war.",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to March: the camp season, pleasant days and cold nights",
          "December and January: very cold nights; choose heated tents",
          "February: the Desert Festival, with camel races and cultural events",
          "April to September: very hot; many camps close",
        ],
      },
      {
        h: "What to pack",
        list: [
          "Warm layers for desert nights in winter",
          "Sunscreen, sunglasses and a scarf for sand and sun",
          "Comfortable shoes for the dunes",
          "A torch for the camp",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Jaisalmer is about 290 km from Jodhpur, around 5 hours by road, and has trains from Jodhpur, Jaipur and Delhi. The airport has limited flights. Most travellers spend one night in Jaisalmer city and one night at a desert camp.",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates and preferred camp type on Tavel Package. Up to 3 verified agents send itemised Jaisalmer packages with camps and safaris.",
        ],
      },
      {
        h: "A sample 2-night Jaisalmer plan",
        p: [
          "Arrive in Jaisalmer by train or road and spend the first day in the city: the fort and its Jain temples in the morning, the havelis in the afternoon, and sunset at Bada Bagh or Vyas Chhatri. On the second day, visit Gadisar Lake early, then Kuldhara on the way to Sam or Khuri, arriving at the camp in time for the camel ride at sunset, followed by the cultural evening. Return to Jaisalmer after breakfast and continue to Jodhpur.",
        ],
      },
      {
        h: "Choosing a good camp",
        p: [
          "Desert camps vary widely in quality. Look for licensed camps with clean, attached bathrooms, hot water, good bedding and heaters in winter. Ask what is included: transfers, camel ride, jeep safari, cultural evening, dinner and breakfast. Read recent reviews and check photos of the actual tents. Avoid camps that seem far cheaper than others, as they may cut corners on safety and hygiene.",
        ],
      },
      {
        h: "Food in Jaisalmer",
        p: [
          "Desert cooking uses ingredients that last, such as ker sangri (desert beans and berries), bajra (millet) roti and dal. Try a Rajasthani thali, dal baati churma, and ghotua laddoo, a local sweet. Camps serve buffet dinners of Rajasthani dishes around the fire.",
        ],
      },
      {
        h: "Responsible desert travel",
        p: [
          "Respect the desert: do not litter the dunes, keep noise down at night, and treat camels and their handlers well. Agree on camel ride rates before starting if they are not included.",
        ],
      },
      {
        h: "Getting around",
        p: [
          "Jaisalmer's old city and fort are best explored on foot. Hire a cab or jeep for Kuldhara, Sam or Khuri, and Bada Bagh.",
        ],
      },
    ],
    faqs: [
      { q: "Which is better for a desert camp, Sam or Khuri?", a: "Sam for lively camps and big dunes; Khuri for a quieter night." },
      { q: "When are Jaisalmer desert camps open?", a: "Usually from about October to March." },
      { q: "How far is Sam from Jaisalmer?", a: "About 40 km." },
      { q: "What is included in a desert camp stay?", a: "Usually a camel ride, cultural evening, dinner, tent stay and breakfast; confirm when booking." },
      { q: "When is the Jaisalmer Desert Festival?", a: "Usually in February." },
      { q: "Is it cold in the desert at night?", a: "Yes, especially from December to January; choose heated tents." },
    ],
  },

  "ranthambore-safari-trip-plan": {
    intro:
      "Ranthambore National Park, near Sawai Madhopur, is one of the best places in India to see wild tigers, set among dry forests, lakes and the ruins of a 10th-century fort. A 2 or 3 day trip allows three or four safaris in jeeps or canters. The core zones open from about October to June, and permits are booked online through the Rajasthan forest department. It is about 180 km from Jaipur and on the Delhi to Mumbai rail line.",
    sections: [
      {
        h: "2-day Ranthambore plan",
        days: [
          "Arrive in Sawai Madhopur. Afternoon safari.",
          "Morning safari, then Ranthambore Fort and the Trinetra Ganesh temple; afternoon safari, and depart the next morning.",
        ],
      },
      {
        h: "Safari zones",
        p: [
          "The park is divided into numbered zones. The core zones, roughly 1 to 6, are known for tiger sightings around the lakes of Padam Talao, Rajbagh and Malik Talao. Zones 7 to 10 are in the outer areas and have their own wildlife. Each safari permit is for a specific zone and slot, assigned when you book.",
        ],
      },
      {
        h: "Booking permits",
        p: [
          "Safari permits are booked online through the Rajasthan forest department's official portal, with ID details for each passenger. Gypsy (jeep) seats sell out quickly in peak season, so book as soon as possible. Canter (open bus) seats are cheaper and easier to get. Many hotels and agents book permits for their guests.",
        ],
      },
      {
        h: "Gypsy or canter",
        list: [
          "Gypsy: a six-seater jeep, more flexible and quieter, better for photography",
          "Canter: a 20-seater open bus, cheaper but noisier",
          "Both run in morning and afternoon slots",
          "A naturalist guide accompanies each vehicle",
        ],
      },
      {
        h: "Wildlife",
        list: [
          "Bengal tigers",
          "Leopards and sloth bears",
          "Sambar, chital and nilgai",
          "Mugger crocodiles in the lakes",
          "Over 300 bird species",
        ],
      },
      {
        h: "Ranthambore Fort",
        p: [
          "Ranthambore Fort, inside the park, dates back to around the 10th century and is part of the UNESCO-listed Hill Forts of Rajasthan. Its ruins, gates and step wells offer views over the forest. The Trinetra Ganesh temple inside the fort draws many pilgrims, especially on Wednesdays and during Ganesh Chaturthi.",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to February: pleasant weather, good forest views",
          "March to June: hot, but the best tiger sightings near water",
          "July to September: core zones closed in the monsoon; some outer zones may be open",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Sawai Madhopur has hotels and resorts along the Ranthambore Road, from budget to luxury jungle lodges. Many offer safari bookings, naturalist talks and pools. Book early for winter holidays.",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Sawai Madhopur railway station is on the Delhi to Mumbai line, with fast trains from Delhi, Jaipur and Mumbai. By road, it is about 180 km from Jaipur and about 380 km from Delhi. The nearest airport is Jaipur.",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates and the number of safaris you want on Tavel Package. Up to 3 verified agents send itemised Ranthambore packages.",
        ],
      },
      {
        h: "A typical safari",
        p: [
          "Safaris start early in the morning and in the afternoon, lasting about three hours. Your vehicle collects you from your hotel and drives to the assigned zone, where the guide follows tracks, pugmarks and alarm calls of deer and langurs that signal a predator nearby. Tiger sightings depend on luck as much as skill; take time to enjoy the forest, the lakes, the ruins and the birds. Winter mornings are cold in an open vehicle, so carry warm layers.",
        ],
      },
      {
        h: "Tigers of Ranthambore",
        p: [
          "Ranthambore became famous for its tigers, which can sometimes be seen in daylight near the lakes and ruins. The tigress known as Machli, who lived into old age in the early 2000s, became one of the most photographed tigers in the world. Today the park's tiger population is carefully monitored, and some tigers from Ranthambore have been relocated to other reserves.",
        ],
      },
      {
        h: "Combining with Jaipur and Agra",
        p: [
          "Ranthambore fits naturally into a Golden Triangle or Rajasthan trip: Delhi, Agra, Ranthambore and Jaipur, or Jaipur, Ranthambore and on to Udaipur. Two nights in Ranthambore allows three or four safaris.",
        ],
      },
      {
        h: "Safari tips",
        p: [
          "Wear muted colours, carry binoculars, sunscreen and water, and keep voices low. Follow your guide's instructions and never get out of the vehicle.",
        ],
      },
      {
        h: "Other things to do",
        p: [
          "Between safaris, visit the Ranthambore School of Art, where artists paint wildlife, the village of Kundal, and the Dastkar craft centre, which supports local women artisans. Some hotels arrange village walks and birdwatching around the park's edges.",
        ],
      },
      {
        h: "Who will enjoy Ranthambore",
        p: [
          "Ranthambore suits wildlife lovers, photographers, families with older children and couples. Younger children may find long safaris tiring; choose shorter canter safaris or a single gypsy safari for them.",
        ],
      },
      {
        h: "Where the park is",
        p: [
          "Ranthambore lies where the Aravalli and Vindhya hills meet, in a landscape of dry deciduous forest, grassy plateaus, lakes and rocky outcrops. The ruins of the fort and old pavilions scattered through the forest give its tiger photographs their famous backdrop.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Share your dates, group size and preferred hotel category with the agents, and ask them to explain each day's plan, the drive times and what is included, so you can plan a comfortable trip at the pace that suits you.",
        ],
      },
    ],
    faqs: [
      { q: "When is Ranthambore open?", a: "Core zones are usually open from about October to June and close in the monsoon." },
      { q: "How do I book a Ranthambore safari?", a: "Through the Rajasthan forest department's official portal, with ID details for each passenger." },
      { q: "Which zone is best in Ranthambore?", a: "The core zones around the lakes are known for tiger sightings; the zone is assigned when you book." },
      { q: "How far is Ranthambore from Jaipur?", a: "About 180 km." },
      { q: "When is the best time to see tigers?", a: "March to June, though sightings are never guaranteed." },
      { q: "Gypsy or canter for Ranthambore?", a: "A gypsy for comfort and photography; a canter is cheaper." },
    ],
  },

  "rajasthan-family-trip-winter": {
    intro:
      "Winter, from November to February, is the ideal time for a Rajasthan family trip: warm, sunny days for forts and bazaars, and cool evenings for desert camps and rooftop dinners. An 8-day family plan covers Jaipur, Pushkar, Jodhpur and Udaipur, or swaps in Jaisalmer for a desert night. Choose hotels with family rooms, keep drives to one a day, and pack warm layers, as desert nights in December and January can be cold.",
    sections: [
      {
        h: "8-day Rajasthan family itinerary",
        days: [
          "Arrive in Jaipur. Evening at Chokhi Dhani for food, folk dances and village games.",
          "Amber Fort by jeep, Jal Mahal, City Palace, Jantar Mantar and Hawa Mahal.",
          "Drive to Pushkar (about 145 km); the lake and ghats at sunset.",
          "Drive to Jodhpur (about 190 km); evening in the Clock Tower market.",
          "Mehrangarh Fort, the zip-line tour for older children, and Jaswant Thada.",
          "Drive to Udaipur via Ranakpur.",
          "City Palace, a Lake Pichola boat ride and the Bagore ki Haveli dance show.",
          "Depart from Udaipur.",
        ],
      },
      {
        h: "Why Rajasthan suits families",
        p: [
          "Rajasthan's forts and palaces feel like storybooks for children, with secret passages, armouries, puppets and elephants carved in stone. Desert camps, camel rides, boat rides and folk dances keep children engaged, while grandparents enjoy heritage hotels and slower sightseeing. Food is easy for families, with plenty of vegetarian dishes and North Indian staples.",
        ],
      },
      {
        h: "Activities children enjoy",
        list: [
          "Puppet shows and folk dances in Jaipur and Udaipur",
          "Camel rides at Pushkar and the desert",
          "Zip-lining at Mehrangarh for older children",
          "Boat rides on Lake Pichola",
          "Jantar Mantar's giant instruments",
          "A desert camp night with music and a bonfire",
        ],
      },
      {
        h: "Winter weather",
        p: [
          "Days in winter are warm and sunny, ideal for sightseeing. Nights are cool in the cities and cold in the desert, dropping close to freezing in Jaisalmer in December and January. Pack sweaters, jackets and caps for evenings, and sunscreen and hats for the day. Fog can delay early-morning trains and flights in December and January.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Heritage hotels with family suites, gardens and pools are popular with families. Ask for interconnecting rooms or extra beds in advance, especially during Christmas and New Year, when Rajasthan is busiest. Desert camps offer family tents.",
        ],
      },
      {
        h: "Adding a desert night",
        p: [
          "To include the desert, extend the trip to 10 days and add Jaisalmer after Jodhpur, with one night in the city and one at a desert camp in Sam or Khuri. The drive from Jodhpur to Jaisalmer takes about 5 hours.",
        ],
      },
      {
        h: "Travel tips for families",
        list: [
          "Hire a private cab with the same driver for the whole trip",
          "Plan one long drive a day, starting in the morning",
          "Book monument tickets online to skip queues",
          "Carry snacks, water and basic medicines",
          "Prefer jeeps to elephant rides at Amber",
        ],
      },
      {
        h: "Food for families",
        list: [
          "Dal baati churma and gatte ki sabzi",
          "Pyaaz kachori and mirchi vada",
          "Lassi and Rajasthani sweets such as ghewar",
          "North Indian and continental food in hotels",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share the number of adults and children, their ages and your dates on Tavel Package. Up to 3 verified Rajasthan agents send itemised family packages.",
        ],
      },
      {
        h: "Christmas and New Year in Rajasthan",
        p: [
          "Rajasthan's heritage hotels and desert camps host festive dinners and celebrations at Christmas and New Year, often with folk music, bonfires and fireworks. It is the busiest and most expensive period of the year, so book hotels and trains well in advance, and check whether gala dinners are compulsory and charged separately.",
        ],
      },
      {
        h: "Puppets and crafts",
        p: [
          "Rajasthan's puppet shows, called kathputli, are a delight for children, with string puppets acting out folk tales to music. Children also enjoy watching craftspeople at work: block printers in Sanganer near Jaipur, potters, and bangle makers in the bazaars. Many hotels host evening puppet shows for guests.",
        ],
      },
      {
        h: "Packing for winter",
        p: [
          "Pack layers: light clothes for warm days and sweaters, jackets, caps and gloves for evenings, especially in the desert. Add comfortable shoes for forts, sunscreen and sunglasses, and a scarf for dust.",
        ],
      },
      {
        h: "Getting around with family",
        p: [
          "A private SUV or tempo traveller with the same driver for the whole trip is the most comfortable way for families to travel. Drives between cities are 3 to 6 hours, so start after breakfast, stop for lunch on the way and reach the next hotel by mid-afternoon. Trains are a good alternative between Jaipur, Jodhpur and Udaipur for families who prefer them.",
        ],
      },
      {
        h: "Best cities for younger children",
        p: [
          "Jaipur and Udaipur are easiest with young children, with shorter distances between sights and plenty of activities.",
        ],
      },
      {
        h: "Keeping everyone comfortable",
        p: [
          "Plan one fort or palace each morning, rest in the afternoon, and save markets or shows for the evening. Older travellers can use golf carts or lifts where available.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Share your dates, group size and preferred hotel category with the agents, and ask them to explain each day's plan, the drive times and what is included, so you can plan a comfortable trip at the pace that suits you.",
        ],
      },
    ],
    faqs: [
      { q: "Is Rajasthan good for a family trip in winter?", a: "Yes. November to February brings warm days and cool evenings, ideal for forts, palaces and desert camps." },
      { q: "How cold is Rajasthan in winter?", a: "Days are warm; nights are cool in cities and can be near freezing in the desert in December and January." },
      { q: "How many days are enough for a family Rajasthan trip?", a: "Eight days for Jaipur, Pushkar, Jodhpur and Udaipur; ten with Jaisalmer." },
      { q: "Is a desert camp safe for children?", a: "Yes, at licensed camps with heated family tents in winter." },
      { q: "Which Rajasthan city is best for kids?", a: "Jaipur and Udaipur, with forts, puppet shows, boat rides and folk dances." },
      { q: "When is Rajasthan busiest?", a: "Christmas and New Year; book early." },
    ],
  },

  "how-to-compare-tour-package-quotes": {
    intro:
      "To compare tour package quotes fairly, line them up item by item: the exact hotels and room types, meal plan, vehicle and number of days, sightseeing and entry fees, taxes, and the cancellation and payment terms. The cheapest quote often hides a lower hotel category, missing transfers or extra charges. On Tavel Package, you receive up to 3 itemised quotes from verified agents, so you can compare like for like and ask questions before you pay.",
    sections: [
      {
        h: "Check the hotels",
        p: [
          "Ask every agent to name the hotel in each city, the room category and whether it is a confirmed booking or a 'similar' hotel. A 3-star in one city and a 4-star in another can explain a big price gap. Look up each hotel's location, reviews and photos. In hill stations and beach towns, the location matters as much as the category.",
        ],
      },
      {
        h: "Understand the meal plan",
        list: [
          "EP (European Plan): room only",
          "CP (Continental Plan): room with breakfast",
          "MAP (Modified American Plan): breakfast and dinner",
          "AP (American Plan): all meals",
          "Make sure every quote uses the same plan before comparing",
        ],
      },
      {
        h: "Compare transport",
        p: [
          "Check the vehicle type (sedan, SUV or tempo traveller), whether it is a private or shared vehicle, whether it is at your disposal for the whole trip or only for transfers, and whether tolls, parking, driver allowances and state permits are included. In places such as Ladakh, Sikkim and Kashmir, local union vehicles are required for sightseeing, so ask how this is handled.",
        ],
      },
      {
        h: "Sightseeing and entry fees",
        list: [
          "Which places are included each day",
          "Whether monument and park entry fees are included",
          "Whether activities such as safaris, boat rides or gondolas are included or optional",
          "Whether guides are included",
        ],
      },
      {
        h: "Taxes and hidden costs",
        list: [
          "GST: is it included or added on top?",
          "Peak-season surcharges and compulsory gala dinners",
          "Airport transfers",
          "Permit fees in protected areas",
          "Tips, porterage and personal expenses",
        ],
      },
      {
        h: "Payment and cancellation terms",
        p: [
          "Read the payment schedule and the cancellation policy carefully. How much is the advance, when is the balance due, and what is refunded if you cancel at different times before the trip? Pay through traceable methods, get receipts, and avoid paying the full amount far in advance to an agent you cannot verify.",
        ],
      },
      {
        h: "Red flags",
        list: [
          "Prices far below every other quote",
          "Hotels described only as 'similar' or 'standard'",
          "No written itinerary or inclusions",
          "Pressure to pay immediately",
          "No company details, address or GST number",
        ],
      },
      {
        h: "Questions to ask every agent",
        list: [
          "Can you name each hotel and room type?",
          "What exactly is included and excluded?",
          "Who will be my contact during the trip?",
          "What happens if a road or flight is cancelled?",
          "Can you share reviews or references?",
        ],
      },
      {
        h: "How Tavel Package helps",
        p: [
          "When you share your dates, destination, group size and budget on Tavel Package, up to 3 verified agents send itemised quotes. Use this guide to compare them line by line, ask each agent to adjust for the same hotels or meal plans, and choose the plan that offers the best value, not just the lowest price.",
        ],
      },
      {
        h: "An example comparison",
        p: [
          "Imagine three quotes for a 6-day Kerala trip. Quote A is the cheapest but lists 'similar 3-star hotels', a shared houseboat and no airport transfers. Quote B names each hotel, includes a private deluxe houseboat with breakfast and dinner, and covers transfers, but adds GST on top. Quote C includes everything in B plus a better Munnar resort, with GST included. Once you adjust for the houseboat, hotels, transfers and tax, B and C may be closer than they first appear, and A may turn out to be the most expensive for what you actually want.",
        ],
      },
      {
        h: "Peak season and availability",
        p: [
          "In peak periods such as Christmas, New Year, Diwali and school holidays, good hotels sell out early and prices rise. Quotes may be valid only for a few days. If you like a quote, ask the agent to hold the hotels or confirm availability before paying an advance.",
        ],
      },
      {
        h: "Travel insurance",
        p: [
          "Ask whether the package includes travel insurance or if you should buy it separately. Insurance can cover medical emergencies, trip cancellation and lost luggage, which is especially useful for international trips and high-altitude destinations.",
        ],
      },
      {
        h: "Reading the itinerary",
        p: [
          "Read the day-by-day plan carefully. Check how long each drive is, whether sightseeing is realistic for the time available, and whether there are rest days. A rushed itinerary with long drives every day can look good on paper but be tiring in practice.",
        ],
      },
      {
        h: "Getting help",
        p: [
          "If anything in a quote is unclear, ask the agent in writing and keep the replies, so there is a clear record of what was promised before you pay any advance.",
        ],
      },
      {
        h: "Final checklist",
        p: [
          "Before you pay, confirm the hotels, meal plan, vehicle, inclusions, taxes, payment schedule and cancellation terms in writing.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Share your dates, group size and preferred hotel category with the agents, and ask them to explain each day's plan, the drive times and what is included, so you can plan a comfortable trip at the pace that suits you.",
        ],
      },
    ],
    faqs: [
      { q: "Why do tour package quotes differ so much?", a: "Because of different hotels, room types, meal plans, vehicles, inclusions and taxes." },
      { q: "What does MAP mean in a hotel quote?", a: "Modified American Plan: room with breakfast and dinner." },
      { q: "Should I choose the cheapest quote?", a: "Not automatically. Compare the hotels, inclusions and terms first." },
      { q: "Is GST included in tour packages?", a: "It depends; check whether each quote includes GST or adds it on top." },
      { q: "What should I check in a cancellation policy?", a: "How much is refunded at different times before the trip, and how quickly." },
      { q: "How can I verify a travel agent?", a: "Check their company details, address, GST number, reviews and references." },
    ],
  },
};

export const RAJASTHAN_DEEP: BlogPost[] = [
  {
    slug: "jaipur-travel-guide",
    title: "Jaipur Travel Guide: Amber Fort, City Palace, Hawa Mahal and Bazaars",
    description: "Jaipur guide: Amber Fort, Nahargarh, City Palace, Hawa Mahal, Jantar Mantar, Albert Hall, bazaars, food, a 2-day plan, best time and where to stay.",
    category: "Itineraries",
    destination: "rajasthan",
    city: "jaipur",
    date: "2026-11-02",
    intro:
      "Jaipur, Rajasthan's capital, is a planned 18th-century city painted pink, ringed by hill forts and full of palaces, bazaars and craft workshops. Two days cover Amber Fort, Jal Mahal, the City Palace, Jantar Mantar, Hawa Mahal and the Albert Hall Museum, with sunsets at Nahargarh and evenings in the bazaars. Its walled city is a UNESCO World Heritage Site. Jaipur is about 280 km from Delhi and part of the Golden Triangle with Agra.",
    sections: [
      {
        h: "2-day Jaipur itinerary",
        days: [
          "Amber Fort early, Jaigarh Fort, Jal Mahal photo stop; afternoon City Palace and Jantar Mantar; evening Hawa Mahal and Johari Bazaar.",
          "Albert Hall Museum, Patrika Gate, Galtaji temple; sunset at Nahargarh Fort and dinner.",
        ],
      },
      {
        h: "History of the Pink City",
        p: [
          "Maharaja Sawai Jai Singh II founded Jaipur in 1727 as a planned city, laid out in a grid of wide streets and bazaars following traditional principles of town planning. In 1876, the city was painted pink, the colour of hospitality, to welcome the Prince of Wales, and the tradition continues. The walled city was inscribed as a UNESCO World Heritage Site in 2019.",
        ],
      },
      {
        h: "Amber Fort",
        p: [
          "Amber (Amer) Fort, about 11 km from the city, was the capital of the Kachwaha rulers before Jaipur was built. Its sandstone and marble palaces include the Sheesh Mahal, covered in mirror mosaic, and courtyards with views over Maota Lake. Go early to avoid crowds and heat, and take a jeep or walk up rather than an elephant ride. The evening light and sound show tells the fort's history.",
        ],
      },
      {
        h: "City Palace and Jantar Mantar",
        p: [
          "The City Palace, still home to the former royal family, has museums of textiles, weapons and paintings, and the colourful Peacock Gate in the Pritam Niwas Chowk. Next door, Jantar Mantar is an 18th-century astronomical observatory with giant stone instruments, including the world's largest stone sundial, and is a UNESCO World Heritage Site.",
        ],
      },
      {
        h: "Hawa Mahal",
        p: [
          "Hawa Mahal, the Palace of Winds, built in 1799, is a five-storey facade of pink sandstone with hundreds of small windows that allowed royal women to watch street life unseen. The best view is from the street or from cafes opposite in the morning light. Inside, a museum and narrow ramps lead to the upper levels.",
        ],
      },
      {
        h: "Other sights",
        list: [
          "Nahargarh Fort: sunset views over the city",
          "Jaigarh Fort: home of the Jaivana cannon",
          "Albert Hall Museum: an Indo-Saracenic museum, lit up at night",
          "Jal Mahal: a palace in Man Sagar Lake, seen from the shore",
          "Galtaji: a temple complex in a gorge with natural springs and monkeys",
          "Birla Mandir: a white marble temple",
          "Patrika Gate: a colourful painted gateway",
        ],
      },
      {
        h: "Shopping",
        list: [
          "Johari Bazaar: jewellery and gemstones",
          "Bapu Bazaar: textiles, juttis and handicrafts",
          "Block-printed fabrics from Sanganer and Bagru",
          "Blue pottery",
          "Buy gems only from reputable shops with certificates",
        ],
      },
      {
        h: "Food in Jaipur",
        list: [
          "Pyaaz kachori and mirchi vada for breakfast",
          "Dal baati churma and gatte ki sabzi",
          "Laal maas for non-vegetarians",
          "Lassi in clay cups",
          "Ghewar, a festive sweet",
          "Rooftop restaurants with city views",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to March: pleasant, the main season",
          "January: the Jaipur Literature Festival",
          "April to June: very hot",
          "July to September: monsoon, fewer tourists",
        ],
      },
      {
        h: "Getting there and around",
        p: [
          "Jaipur has an international airport and is well connected by train, including fast trains from Delhi. By road it is about 5 hours from Delhi and 4 hours from Agra. Auto-rickshaws, app cabs and the metro serve the city. A composite ticket covers several monuments over two days.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Jaipur has heritage hotels in old havelis and palaces, modern hotels near MI Road and C-Scheme, and budget guest houses in the old city. Staying near the walled city makes sightseeing easy, while palace hotels outside the centre offer more space and gardens.",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates on Tavel Package. Up to 3 verified agents send itemised Jaipur and Rajasthan packages.",
        ],
      },
      {
        h: "Jaipur Literature Festival",
        p: [
          "The Jaipur Literature Festival, held every January, is one of the world's largest free literary festivals, bringing writers, thinkers and readers together for talks, debates and music. Hotels fill quickly during the festival, so book early if your dates overlap.",
        ],
      },
      {
        h: "Jaipur with children",
        p: [
          "Children enjoy the giant instruments at Jantar Mantar, the mirror palace at Amber, the puppet museum at the Bhartiya Lok Kala Mandal and evenings at Chokhi Dhani, a village-themed resort with folk dances, games and Rajasthani food.",
        ],
      },
      {
        h: "Day trips from Jaipur",
        p: [
          "Popular day trips include Abhaneri's Chand Baori, one of India's deepest stepwells, about 95 km away; Sambhar Salt Lake, India's largest inland salt lake, known for flamingos in winter; and the block-printing villages of Sanganer and Bagru. Ranthambore, about 180 km away, makes a good overnight trip for a tiger safari.",
        ],
      },
      {
        h: "Jaipur for couples",
        p: [
          "Couples enjoy sunset dinners at Nahargarh, palace hotel stays and the light and sound show at Amber Fort.",
        ],
      },
      {
        h: "Practical tips",
        p: [
          "Carry water, dress modestly at temples, and use registered guides at monuments.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Share your dates, group size and preferred hotel category with the agents, and ask them to explain each day's plan, the drive times and what is included, so you can plan a comfortable trip at the pace that suits you.",
        ],
      },
    ],
    faqs: [
      { q: "How many days are enough for Jaipur?", a: "Two days covers the main sights." },
      { q: "Why is Jaipur called the Pink City?", a: "It was painted pink in 1876 to welcome the Prince of Wales." },
      { q: "What is the best time to visit Amber Fort?", a: "Early morning, to avoid crowds and heat." },
      { q: "Is Jantar Mantar a UNESCO site?", a: "Yes, and so is Jaipur's walled city." },
      { q: "How far is Jaipur from Delhi?", a: "About 280 km, around 5 hours by road." },
      { q: "What is Jaipur famous for shopping?", a: "Jewellery, gemstones, block-printed textiles, blue pottery and juttis." },
    ],
  },

  {
    slug: "jodhpur-travel-guide",
    title: "Jodhpur Travel Guide: Mehrangarh Fort, Blue City, Umaid Bhawan and Food",
    description: "Jodhpur guide: Mehrangarh Fort, the blue lanes of Brahmpuri, Jaswant Thada, Umaid Bhawan, the Clock Tower market, stepwells, Osian, food and stays.",
    category: "Itineraries",
    destination: "rajasthan",
    city: "jodhpur",
    date: "2026-11-02",
    intro:
      "Jodhpur, the Blue City, spreads below Mehrangarh, one of India's most magnificent forts, on the edge of the Thar Desert. Two days cover the fort, Jaswant Thada, the blue-painted lanes of the old city, the Clock Tower market and Umaid Bhawan Palace, with time for stepwells and a day trip to Osian's temples and dunes. Jodhpur is about 340 km from Jaipur and 250 km from Udaipur, and the best months are October to March.",
    sections: [
      {
        h: "2-day Jodhpur itinerary",
        days: [
          "Mehrangarh Fort in the morning, Jaswant Thada, Rao Jodha Desert Rock Park; evening in the Clock Tower market.",
          "Blue city walk around Brahmpuri, Toorji ka Jhalra stepwell, Umaid Bhawan Palace museum, Mandore Gardens.",
        ],
      },
      {
        h: "Mehrangarh Fort",
        p: [
          "Mehrangarh, founded by Rao Jodha in 1459, rises sheer from a rocky hill about 120 m above the city. Its massive walls enclose palaces with intricate carved windows, courtyards and an excellent museum of palanquins, howdahs, weapons, paintings and textiles. Allow half a day. An audio guide is available, and the Flying Fox zip-line runs over the fort's walls and lakes.",
        ],
      },
      {
        h: "The Blue City",
        p: [
          "The old city around Brahmpuri, below the fort, is famous for its blue-painted houses. Walk the narrow lanes in the morning for the best light and photographs, past temples, small shops and stepwells. The blue colour is said to have been linked to Brahmin homes and is also believed to keep houses cool. Be respectful of residents' privacy.",
        ],
      },
      {
        h: "Jaswant Thada and Umaid Bhawan",
        p: [
          "Jaswant Thada is a white marble memorial built in 1899 for Maharaja Jaswant Singh II, with thin marble panels that glow in the sun and views of Mehrangarh. Umaid Bhawan Palace, completed in the 1940s, is one of the world's largest private residences, combining an art deco palace hotel, the royal family's home and a museum open to visitors.",
        ],
      },
      {
        h: "Other sights",
        list: [
          "Toorji ka Jhalra: a restored 18th-century stepwell",
          "Clock Tower and Sardar Market: spices, textiles and handicrafts",
          "Mandore Gardens: cenotaphs of earlier rulers",
          "Rao Jodha Desert Rock Park: native desert plants below the fort",
          "Kaylana Lake: sunsets",
        ],
      },
      {
        h: "Day trip to Osian",
        p: [
          "Osian, about 65 km north, has a group of 8th to 12th century Hindu and Jain temples, including the Sachiya Mata temple, and sand dunes where camps offer camel rides and cultural evenings. It is a convenient desert experience if you are not travelling to Jaisalmer. Bishnoi village safaris near Jodhpur show rural life and the community's tradition of protecting wildlife.",
        ],
      },
      {
        h: "Food in Jodhpur",
        list: [
          "Mirchi vada and pyaaz kachori",
          "Makhaniya lassi, thick and sweet",
          "Mawa kachori, a sweet kachori",
          "Dal baati churma and ker sangri",
          "Rooftop dinners with fort views",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to March: pleasant days, cool nights",
          "October: the Rajasthan International Folk Festival at Mehrangarh in some years",
          "April to June: very hot",
          "July to September: monsoon, fewer tourists",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Jodhpur has heritage havelis in the old city with fort views, palace hotels, and modern hotels in the newer areas. Staying in a haveli below Mehrangarh gives the best atmosphere, with rooftop restaurants and walking access to the markets.",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Jodhpur has an airport and is well connected by train to Delhi, Jaipur and Jaisalmer. By road it is about 6 hours from Jaipur, 5 hours from Udaipur via Ranakpur, and 5 hours from Jaisalmer.",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates on Tavel Package. Up to 3 verified agents send itemised Jodhpur and Rajasthan packages.",
        ],
      },
      {
        h: "History of Jodhpur",
        p: [
          "Jodhpur was founded in 1459 by Rao Jodha, chief of the Rathore clan, who built Mehrangarh on a rocky hill as his new capital. The kingdom of Marwar grew rich on desert trade routes carrying opium, copper, silk and spices. The city's rulers built palaces, temples and stepwells, and the Rathores remained in power until Indian independence. The former royal family still lives in Umaid Bhawan Palace.",
        ],
      },
      {
        h: "Jodhpur for families and couples",
        p: [
          "Families enjoy Mehrangarh's museum, the zip-line for older children, and the gardens at Mandore. Couples can stay in heritage havelis with rooftop views of the fort and enjoy candlelit dinners as the fort is lit up at night. The Rao Jodha Desert Rock Park offers quiet walks below the fort.",
        ],
      },
      {
        h: "Shopping in Jodhpur",
        p: [
          "The Clock Tower market and Sardar Market sell spices, bandhani tie-dye textiles, leather juttis and handicrafts. Jodhpur is also known for antique furniture and reproductions. Bargain politely and shop at established stores.",
        ],
      },
      {
        h: "Festivals",
        p: [
          "The Marwar Festival, held around Sharad Purnima in October, celebrates Rajasthani folk music and dance. The Rajasthan International Folk Festival is held at Mehrangarh in some years, with musicians from across Rajasthan and the world performing within the fort's walls.",
        ],
      },
      {
        h: "Jodhpur to Jaisalmer",
        p: [
          "From Jodhpur, Jaisalmer is about 290 km, around 5 hours by road, making it the natural next stop for a desert camp.",
        ],
      },
      {
        h: "Practical tips",
        p: [
          "Wear comfortable shoes for the fort's ramps and lanes, carry water and start early.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Share your dates, group size and preferred hotel category with the agents, and ask them to explain each day's plan, the drive times and what is included, so you can plan a comfortable trip at the pace that suits you.",
        ],
      },
    ],
    faqs: [
      { q: "How many days are enough for Jodhpur?", a: "Two days covers the fort, the blue city and the main sights." },
      { q: "Why is Jodhpur called the Blue City?", a: "For the blue-painted houses of its old city below Mehrangarh." },
      { q: "How long does Mehrangarh Fort take?", a: "About half a day." },
      { q: "Can I visit Umaid Bhawan Palace?", a: "Yes, the museum section is open to visitors; the rest is a hotel and royal residence." },
      { q: "How far is Osian from Jodhpur?", a: "About 65 km." },
      { q: "What food is Jodhpur famous for?", a: "Mirchi vada, makhaniya lassi and mawa kachori." },
    ],
  },

  {
    slug: "pushkar-ajmer-travel-guide",
    title: "Pushkar and Ajmer Guide: Brahma Temple, Ghats, Camel Fair and Dargah",
    description: "Pushkar and Ajmer guide: Pushkar Lake and ghats, the Brahma temple, the Pushkar camel fair, Savitri temple, Ajmer Sharif Dargah, rules, best time and stays.",
    category: "Pilgrimage",
    destination: "rajasthan",
    city: "pushkar",
    date: "2026-11-02",
    intro:
      "Pushkar and Ajmer, about 15 km apart, are two of Rajasthan's holiest towns. Pushkar surrounds a sacred lake with 52 ghats and one of the very few temples to Lord Brahma, and hosts the famous camel fair in October or November. Ajmer is home to the Dargah of Khwaja Moinuddin Chishti, one of India's most revered Sufi shrines. Spend a day or two between them on a Jaipur to Jodhpur route. Pushkar is vegetarian and alcohol-free.",
    sections: [
      {
        h: "2-day Pushkar and Ajmer plan",
        days: [
          "Ajmer Sharif Dargah in the morning, Adhai Din ka Jhonpra and Ana Sagar Lake; drive to Pushkar.",
          "Pushkar ghats at sunrise, Brahma temple, Savitri temple by ropeway, and the evening aarti on the lake.",
        ],
      },
      {
        h: "Pushkar Lake and ghats",
        p: [
          "Pushkar Lake is one of Hinduism's most sacred lakes, believed to have been created where a lotus fell from Lord Brahma's hand. It is surrounded by 52 ghats, where pilgrims bathe and perform rituals, and by temples and old houses. Sunrise and sunset on the ghats are peaceful and beautiful. Remove shoes on the ghats, avoid photographing people bathing, and beware of anyone pushing paid pujas.",
        ],
      },
      {
        h: "Brahma temple",
        p: [
          "The Jagatpita Brahma temple is one of the very few temples in the world dedicated to Lord Brahma, the creator. Its red spire and marble floors draw pilgrims year-round. Photography is not allowed inside, and leather items are not permitted. The Savitri temple, on a hill above the town, is reached by ropeway or a steep climb and offers views over Pushkar and the desert.",
        ],
      },
      {
        h: "Pushkar Camel Fair",
        p: [
          "The Pushkar Fair is held each year around Kartik Purnima, in October or November. It combines one of the world's largest livestock fairs, with thousands of camels, horses and cattle traded on the dunes, and a major religious gathering, with pilgrims bathing in the lake on the full moon. Competitions, folk performances and camel races fill the days. Hotels and tent camps sell out months ahead.",
        ],
      },
      {
        h: "Ajmer Sharif Dargah",
        p: [
          "The Dargah of Khwaja Moinuddin Chishti, the 12th-century Sufi saint, is visited by people of all faiths who come to pray and offer chadars (cloth) and flowers. Qawwali singing fills the courtyards in the evenings. Cover your head, dress modestly, remove shoes and keep belongings secure in the crowds. The Urs festival, marking the saint's death anniversary, draws huge numbers of pilgrims.",
        ],
      },
      {
        h: "Other sights in Ajmer",
        list: [
          "Adhai Din ka Jhonpra: an early mosque built from temple remains",
          "Ana Sagar Lake: a lake with marble pavilions",
          "Taragarh Fort: a hill fort with views",
          "Soniji ki Nasiyan: a Jain temple with a golden hall depicting Jain cosmology",
        ],
      },
      {
        h: "Rules and etiquette",
        list: [
          "Pushkar is vegetarian; meat, eggs and alcohol are not allowed",
          "Remove shoes on the ghats and in temples",
          "Dress modestly in both towns",
          "Cover your head at the Dargah",
          "Avoid touts offering pujas or flower offerings for money",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to March: pleasant weather",
          "October or November: the Pushkar Fair",
          "Urs at Ajmer: dates follow the Islamic calendar",
          "April to June: very hot",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Pushkar has guest houses and heritage hotels around the lake, resorts on the edge of town, and luxury tent camps during the fair. Ajmer has hotels near the Dargah and the railway station. Many travellers stay in Pushkar and visit Ajmer on the way.",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Ajmer is about 135 km from Jaipur, with fast trains. Pushkar is about 15 km from Ajmer over Nag Pahar. Kishangarh airport is the nearest. Pushkar fits on the way from Jaipur to Jodhpur.",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates on Tavel Package. Up to 3 verified agents send itemised packages including Pushkar and Ajmer.",
        ],
      },
      {
        h: "Pushkar's cafes and markets",
        p: [
          "Pushkar's main bazaar, running along the lake, is lined with shops selling clothes, silver jewellery, leather goods and souvenirs, as well as rooftop cafes serving vegetarian dishes, falafel, Israeli and Italian food, and lassis. The town has a relaxed, bohemian feel, popular with backpackers. Evenings bring music and the aarti on the ghats.",
        ],
      },
      {
        h: "The legend of Pushkar",
        p: [
          "According to legend, Lord Brahma dropped a lotus flower to the earth, and where it fell, Pushkar Lake appeared. Brahma then performed a sacred ritual here. His wife Savitri, angered at being replaced in the ritual, is said to have cursed that Brahma would be worshipped only in Pushkar, which is why so few Brahma temples exist. Savitri's temple sits on a hill above the town.",
        ],
      },
      {
        h: "Combining with Jaipur and Jodhpur",
        p: [
          "Pushkar and Ajmer fit naturally between Jaipur and Jodhpur, about 145 km from Jaipur and 190 km from Jodhpur. One night in Pushkar breaks the long drive and adds a spiritual stop to a Rajasthan circuit.",
        ],
      },
      {
        h: "Who will enjoy Pushkar and Ajmer",
        p: [
          "Pilgrims, culture lovers, photographers and backpackers find Pushkar and Ajmer rewarding. Families enjoy the lake, the ropeway and camel rides on the dunes, while the camel fair is a once-in-a-lifetime spectacle.",
        ],
      },
      {
        h: "Practical tips",
        p: [
          "Carry small change for offerings, keep valuables secure in crowds and start early.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Share your dates, group size and preferred hotel category with the agents, and ask them to explain each day's plan, the drive times and what is included, so you can plan a comfortable trip at the pace that suits you.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Pushkar from Ajmer?", a: "About 15 km." },
      { q: "When is the Pushkar Camel Fair?", a: "Around Kartik Purnima, in October or November." },
      { q: "Is Pushkar vegetarian?", a: "Yes. Meat, eggs and alcohol are not allowed." },
      { q: "Why is the Brahma temple in Pushkar famous?", a: "It is one of the very few temples dedicated to Lord Brahma." },
      { q: "What is the dress code at Ajmer Sharif?", a: "Dress modestly, cover your head and remove shoes." },
      { q: "How far is Ajmer from Jaipur?", a: "About 135 km." },
    ],
  },

  {
    slug: "mount-abu-travel-guide",
    title: "Mount Abu Travel Guide: Dilwara Temples, Nakki Lake and Guru Shikhar",
    description: "Mount Abu guide: Rajasthan's only hill station, Dilwara Jain temples, Nakki Lake, Sunset Point, Guru Shikhar, Achalgarh, best time, stays and how to reach.",
    category: "Weekend Trips",
    destination: "rajasthan",
    city: "mount-abu",
    date: "2026-11-02",
    intro:
      "Mount Abu, at about 1,220 m in the Aravalli hills, is Rajasthan's only hill station, a green, cool retreat near the Gujarat border. It is famous for the Dilwara Jain temples, among the finest marble carving in India, as well as Nakki Lake, Sunset Point and Guru Shikhar, the highest peak of the Aravallis. Two days are enough. It is about 165 km from Udaipur and 28 km from Abu Road station, and pleasant all year except the peak of the monsoon.",
    sections: [
      {
        h: "2-day Mount Abu itinerary",
        days: [
          "Arrive via Abu Road. Nakki Lake boating, Toad Rock and Sunset Point.",
          "Dilwara temples (in visiting hours), Guru Shikhar, Achalgarh Fort and temples, then depart.",
        ],
      },
      {
        h: "Dilwara Jain temples",
        p: [
          "The Dilwara temples, built between the 11th and 13th centuries, are a group of five Jain temples famous for their extraordinarily detailed white marble carving: ceilings, pillars and doorways carved so finely that the marble looks like lace. Non-Jain visitors are usually allowed in the afternoon. Photography is not allowed, leather items are prohibited, and modest dress is required.",
        ],
      },
      {
        h: "Nakki Lake and Sunset Point",
        p: [
          "Nakki Lake, in the heart of Mount Abu, is surrounded by hills and rock formations, with boating and a promenade lined with shops and food stalls. Toad Rock, a boulder shaped like a toad, is a short walk away. Sunset Point, a short drive or walk from the lake, draws crowds every evening for views over the plains.",
        ],
      },
      {
        h: "Guru Shikhar and Achalgarh",
        p: [
          "Guru Shikhar, about 15 km from town, is the highest point of the Aravalli range, at about 1,720 m, with a small temple and a short climb of steps to wide views. Achalgarh, about 11 km away, has a ruined fort and the Achaleshwar Mahadev temple, which has a toe-print of Shiva and a brass Nandi.",
        ],
      },
      {
        h: "Other sights",
        list: [
          "Mount Abu Wildlife Sanctuary: forests with sloth bears and birds",
          "Brahma Kumaris world headquarters and peace park",
          "Arbuda Devi temple, built into a rock",
          "Trevor's Tank: a small lake for birdwatching",
          "Honeymoon Point and Sunrise Point",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to March: cool and pleasant",
          "April to June: a summer escape from the plains",
          "July to September: monsoon, green and misty, with heavy rain",
          "Winter festival in December and summer festival in May",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Mount Abu has hotels around Nakki Lake and the main market, heritage properties in former royal summer homes, and resorts on the hill slopes. It is popular with visitors from Gujarat, so weekends and holidays are busy; book ahead.",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Abu Road railway station, about 28 km below the town, has trains from Delhi, Mumbai, Ahmedabad and Jaipur. Udaipur airport is about 165 km away. Taxis and buses climb the winding road from Abu Road.",
        ],
      },
      {
        h: "Food",
        list: [
          "Gujarati and Rajasthani thalis",
          "Street food around Nakki Lake",
          "Dal baati and kadhi",
          "Many restaurants are vegetarian",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates on Tavel Package. Up to 3 verified agents send itemised packages including Mount Abu with Udaipur.",
        ],
      },
      {
        h: "History of Mount Abu",
        p: [
          "Mount Abu has been a place of pilgrimage for centuries, with Hindu temples and the Jain Dilwara temples built by ministers of the Solanki rulers of Gujarat. The hills were later a summer retreat for the rulers of Sirohi and other Rajput states, and the British developed the town as a hill station and administrative centre. Old royal summer homes are now heritage hotels.",
        ],
      },
      {
        h: "Mount Abu for families",
        p: [
          "Families enjoy boating on Nakki Lake, horse rides near Sunset Point, the views from Guru Shikhar and the shops around the lake. The cooler climate is a relief for families travelling in summer. Keep an eye on children near viewpoints and on hill roads.",
        ],
      },
      {
        h: "Combining with Udaipur",
        p: [
          "Mount Abu pairs well with Udaipur, about 165 km away, and with Ranakpur and Kumbhalgarh on the way. A 5 to 6 day trip can cover Udaipur, Kumbhalgarh, Ranakpur and Mount Abu, ending at Abu Road station or continuing to Ahmedabad.",
        ],
      },
      {
        h: "Practical tips",
        p: [
          "Carry a light jacket even in summer evenings, follow the Dilwara temples' visiting hours and dress code, and avoid the busiest holiday weekends if you prefer quiet.",
        ],
      },
      {
        h: "Shopping in Mount Abu",
        p: [
          "The market around Nakki Lake sells Rajasthani and Gujarati handicrafts, marble items, sandalwood carvings and clothes.",
        ],
      },
      {
        h: "Mount Abu in the monsoon",
        p: [
          "From July to September, the hills turn green and mist rolls over the lake. It is a popular time for visitors from Gujarat and Rajasthan escaping the heat, though heavy rain can limit outdoor plans.",
        ],
      },
      {
        h: "Why visit",
        p: [
          "Mount Abu offers a cool break, ancient temples and green hills, a contrast to Rajasthan's desert landscapes. It suits families, couples and pilgrims, and works well as a two-night addition to an Udaipur trip, especially in the hotter months when the plains are uncomfortable.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Share your dates, group size and preferred hotel category with the agents, and ask them to explain each day's plan, the drive times and what is included, so you can plan a comfortable trip at the pace that suits you.",
          "Weekends and Gujarati holidays such as Diwali bring big crowds to Mount Abu, so book well ahead if your dates overlap with them.",
        ],
      },
    ],
    faqs: [
      { q: "Is Mount Abu the only hill station in Rajasthan?", a: "Yes, at about 1,220 m in the Aravalli hills." },
      { q: "When can non-Jains visit Dilwara temples?", a: "Usually in the afternoon; check the current visiting hours." },
      { q: "Is photography allowed at Dilwara temples?", a: "No." },
      { q: "How far is Mount Abu from Udaipur?", a: "About 165 km." },
      { q: "What is Guru Shikhar?", a: "The highest peak of the Aravalli range, at about 1,720 m." },
      { q: "Which is the nearest railway station to Mount Abu?", a: "Abu Road, about 28 km away." },
    ],
  },
];
