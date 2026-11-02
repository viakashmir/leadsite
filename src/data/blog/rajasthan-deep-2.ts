import type { BlogPost } from "./types";

// Second batch of full Rajasthan guides. Factual, no em dashes, no invented prices.

const QUOTE =
  "Share your dates, group size and preferred hotel category on Tavel Package. Up to 3 verified Rajasthan agents send itemised quotes, so you can compare hotels, transport and inclusions side by side before you book.";

export const RAJASTHAN_DEEP_2: BlogPost[] = [
  {
    slug: "jaisalmer-travel-guide",
    title: "Jaisalmer Travel Guide: Golden Fort, Havelis, Lakes and Desert Trips",
    description: "Jaisalmer guide: the living Golden Fort and Jain temples, Patwon ki Haveli, Gadisar Lake, Bada Bagh, Lodurva, Kuldhara, the desert and a 2-day plan.",
    category: "Itineraries",
    destination: "rajasthan",
    city: "jaisalmer",
    date: "2026-11-02",
    intro:
      "Jaisalmer, the Golden City, rises from the Thar Desert in honey-coloured sandstone, crowned by a fort where people still live, work and run small hotels. Two days cover the fort and its Jain temples, the carved havelis, Gadisar Lake, the cenotaphs of Bada Bagh and a night at a desert camp in Sam or Khuri. Jaisalmer is about 290 km from Jodhpur and close to the Pakistan border. The best season is October to March, when days are warm and nights cold.",
    sections: [
      {
        h: "2-day Jaisalmer itinerary",
        days: [
          "Gadisar Lake at sunrise, Jaisalmer Fort and its Jain temples, lunch inside the fort, then Patwon ki Haveli, Salim Singh ki Haveli and Nathmal ki Haveli; sunset at Vyas Chhatri.",
          "Bada Bagh cenotaphs, Lodurva's Jain temples and Kuldhara, then on to Sam or Khuri for a camel ride and a desert camp night.",
        ],
      },
      {
        h: "History of Jaisalmer",
        p: [
          "Rawal Jaisal, a Bhati Rajput chief, founded Jaisalmer in 1156 on Trikuta hill, moving his capital from Lodurva. The city grew rich on the caravan routes that carried silk, spices and opium between India, Persia and Central Asia, and its merchants built the ornate havelis that still line its lanes. When sea trade and the railways replaced the caravans, Jaisalmer declined, which helped preserve its old city. Tourism has revived it since the late 20th century.",
        ],
      },
      {
        h: "Jaisalmer Fort",
        p: [
          "Jaisalmer Fort, the Sonar Quila, is one of the few living forts in the world: thousands of people live within its walls, among palaces, temples, shops, guest houses and narrow lanes. Its yellow sandstone glows gold in the late afternoon, which gives the city its name. The fort is part of the UNESCO-listed Hill Forts of Rajasthan. Visit the Raj Mahal palace museum and walk the ramparts for views of the city and desert. Water seepage from modern use has damaged parts of the fort, so many travellers choose to stay outside its walls to reduce the strain.",
        ],
      },
      {
        h: "Jain temples in the fort",
        p: [
          "Inside the fort, a group of Jain temples built between the 12th and 15th centuries is famous for intricately carved yellow sandstone, with pillars, ceilings and figures covered in detail. Visiting hours for non-Jains are usually in the morning. Leather items are not allowed, and visitors should dress modestly. A small fee may apply for cameras.",
        ],
      },
      {
        h: "The havelis",
        p: [
          "Jaisalmer's merchant havelis are among the finest in India. Patwon ki Haveli is a cluster of five mansions built in the early 19th century by a wealthy trader and his sons, with carved balconies and windows; part of it is a museum. Salim Singh ki Haveli, built for a powerful prime minister, has a distinctive peacock-shaped roof. Nathmal ki Haveli was carved by two brothers, each working on one side, giving it a slightly asymmetric facade.",
        ],
      },
      {
        h: "Gadisar Lake",
        p: [
          "Gadisar Lake, a reservoir built in the 14th century to supply the city with water, is surrounded by temples, shrines and ghats, entered through the carved Tilon ki Pol gateway. Sunrise is the best time to visit, when the light catches the pavilions and birds gather on the water. Small boats are available for short rides.",
        ],
      },
      {
        h: "Bada Bagh, Lodurva and Kuldhara",
        p: [
          "Bada Bagh, about 6 km from the city, is a hillside of royal cenotaphs (chhatris) with carved domes, beautiful at sunset. Lodurva, about 15 km away and the old capital, has a rebuilt Jain temple with a fine carved archway. Kuldhara, about 18 km away, is an abandoned village of the Paliwal Brahmins, deserted centuries ago and surrounded by legends. All three fit on the way to the dunes.",
        ],
      },
      {
        h: "The desert and the border",
        p: [
          "Most visitors spend a night in a desert camp at Sam or Khuri, about 40 to 45 km away, with a camel ride, cultural evening and dinner under the stars. Further west, the Desert National Park protects the great Indian bustard. Longewala, scene of a famous 1971 battle, and the Tanot Mata temple, close to the border, are about 120 km from Jaisalmer and can be visited with a cab on a long day trip, following any security rules.",
        ],
      },
      {
        h: "Food in Jaisalmer",
        list: [
          "Ker sangri, desert beans and berries",
          "Dal baati churma and gatte ki sabzi",
          "Bajra roti with kadhi",
          "Ghotua laddoo, a local sweet",
          "Rooftop restaurants with fort views",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to March: pleasant days, cold desert nights",
          "February: the Desert Festival",
          "April to June: extremely hot",
          "July to September: hot and humid; many camps closed",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Jaisalmer is about 290 km from Jodhpur, around 5 hours by road, and has direct trains from Jodhpur, Jaipur and Delhi. Its airport has limited flights. Auto-rickshaws serve the city, and the old town is best explored on foot.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Jaisalmer has heritage havelis in the old city, hotels with fort views just outside the walls, and desert resorts and camps on the road to Sam. Choose a rooftop with a view of the fort for evenings.",
        ],
      },
      { h: "Getting quotes", p: [QUOTE] },
    ],
    faqs: [
      { q: "Why is Jaisalmer called the Golden City?", a: "Because its fort and buildings are made of yellow sandstone that glows gold in the sun." },
      { q: "Can you stay inside Jaisalmer Fort?", a: "Yes, there are guest houses inside, but many travellers stay outside to reduce strain on the old fort." },
      { q: "How many days are needed for Jaisalmer?", a: "Two days, including a desert camp night." },
      { q: "What is Patwon ki Haveli?", a: "A cluster of five carved merchant mansions from the early 19th century." },
      { q: "How far is Jaisalmer from Jodhpur?", a: "About 290 km, around 5 hours by road." },
      { q: "What is Kuldhara?", a: "An abandoned village of the Paliwal Brahmins, about 18 km from Jaisalmer." },
    ],
  },

  {
    slug: "bikaner-travel-guide",
    title: "Bikaner Travel Guide: Junagarh Fort, Karni Mata Temple and Camel Festival",
    description: "Bikaner guide: Junagarh Fort, Lalgarh Palace, the Karni Mata temple at Deshnoke, the camel research centre, Bhandasar temple, bhujia and the Camel Festival.",
    category: "Itineraries",
    destination: "rajasthan",
    city: "bikaner",
    date: "2026-11-02",
    intro:
      "Bikaner is a desert city in northern Rajasthan, less visited than Jaisalmer but rich in history, with Junagarh Fort, the red sandstone Lalgarh Palace, the famous rat temple of Karni Mata at Deshnoke and the camel research centre. It is famous for Bikaneri bhujia and sweets, and hosts the Camel Festival in January. One or two days are enough. Bikaner is about 330 km from Jaipur and 250 km from Jodhpur.",
    sections: [
      {
        h: "2-day Bikaner itinerary",
        days: [
          "Junagarh Fort, Lalgarh Palace and museum, and the old city havelis; evening in the bazaar for bhujia and sweets.",
          "Karni Mata temple at Deshnoke, the camel research centre, Bhandasar Jain temple, and onward travel.",
        ],
      },
      {
        h: "History of Bikaner",
        p: [
          "Rao Bika, a son of Rao Jodha of Jodhpur, founded Bikaner in 1488 in the desert region known as Jangladesh. The kingdom prospered on the caravan trade and later through alliances with the Mughals and the British. Maharaja Ganga Singh, who ruled in the early 20th century, modernised the state, building the Ganga Canal that brought water to the desert, along with railways and Lalgarh Palace.",
        ],
      },
      {
        h: "Junagarh Fort",
        p: [
          "Junagarh Fort, built between 1589 and 1594 by Raja Rai Singh, is unusual among Rajasthan's great forts because it stands on flat ground rather than a hill. It is said never to have been taken by force. Inside are richly decorated palaces with mirror work, gold leaf, painted ceilings and lacquer, including the Anup Mahal and Chandra Mahal, and a museum of weapons, palanquins and a World War I biplane. Guided tours take about two hours.",
        ],
      },
      {
        h: "Lalgarh Palace",
        p: [
          "Lalgarh Palace, built in the early 20th century for Maharaja Ganga Singh, is a grand red sandstone palace combining Rajput, Mughal and European styles, with carved screens and courtyards. Part of it is a heritage hotel, and the Sadul Singh Museum displays photographs, hunting trophies and royal memorabilia.",
        ],
      },
      {
        h: "Karni Mata temple, Deshnoke",
        p: [
          "The Karni Mata temple at Deshnoke, about 30 km south of Bikaner, is famous for the thousands of rats, called kabbas, that live in the temple and are revered as sacred. Devotees believe they are the reincarnated descendants of Karni Mata, a 14th-century mystic. Seeing a rare white rat is considered especially lucky. The temple has silver doors and marble carvings. Shoes are removed at the entrance, so wear socks if you prefer.",
        ],
      },
      {
        h: "Camel research centre",
        p: [
          "The National Research Centre on Camel, on the outskirts of Bikaner, breeds and studies the camels of the desert, including several Indian breeds. Visitors can see the camels, learn about their role in desert life, and try camel milk products at the centre's parlour. Check the current visiting hours before going.",
        ],
      },
      {
        h: "Bhandasar Jain temple and havelis",
        p: [
          "The Bhandasar Jain temple, dating from the 15th and 16th centuries, is known for its colourful paintings and mirror work, and a legend that ghee was used in its foundations. The old city has the Rampuria havelis, red sandstone mansions with carved facades built by wealthy merchant families.",
        ],
      },
      {
        h: "Bikaner Camel Festival",
        p: [
          "The Bikaner Camel Festival, held in January, celebrates the desert's 'ship', with decorated camels, camel races, camel dances, folk music, and competitions such as fur-cutting art and the longest moustache. It is a lively, colourful event that draws photographers and travellers.",
        ],
      },
      {
        h: "Food in Bikaner",
        list: [
          "Bikaneri bhujia, the famous crunchy snack",
          "Bikaneri rasgulla and other sweets",
          "Kachori and samosa from old city shops",
          "Ker sangri and Rajasthani thalis",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to March: pleasant days and cool nights",
          "January: the Camel Festival",
          "April to June: very hot",
          "July to September: hot and humid",
        ],
      },
      {
        h: "Getting there and nearby",
        p: [
          "Bikaner has good train connections with Delhi, Jaipur and Jodhpur, and a small airport. By road it is about 5 to 6 hours from Jaipur and 4 to 5 hours from Jodhpur. Gajner Palace and lake, about 30 km away, make a pleasant excursion. Bikaner fits on a route between Jaisalmer and Jaipur or Delhi.",
        ],
      },
      { h: "Getting quotes", p: [QUOTE] },
      {
        h: "Bikaner for families and couples",
        p: [
          "Families enjoy the camels at the research centre, the fort's armoury and the colourful palaces, while couples can stay in a heritage palace hotel such as Lalgarh or Gajner and enjoy quiet evenings by the lake. The old city's bazaars are lively in the evenings, with sweet shops and snack stalls selling fresh bhujia, and the city is far less crowded than Jaipur or Jodhpur.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Tell the agents your dates, group size, preferred hotel category and interests, and ask each to explain the daily drive times, the named hotels and exactly what is included. Comparing itemised quotes side by side makes it easy to spot differences in hotels, transport and inclusions, and to choose the plan that offers the best value for your trip rather than simply the lowest price.",
        ],
      },
    ],
    faqs: [
      { q: "What is Bikaner famous for?", a: "Junagarh Fort, the Karni Mata rat temple, camels and Bikaneri bhujia." },
      { q: "How far is Karni Mata temple from Bikaner?", a: "About 30 km, at Deshnoke." },
      { q: "When is the Bikaner Camel Festival?", a: "In January." },
      { q: "Why is Junagarh Fort unusual?", a: "It stands on flat ground rather than a hill, and is said never to have been taken by force." },
      { q: "How many days are enough for Bikaner?", a: "One to two days." },
      { q: "How far is Bikaner from Jaipur?", a: "About 330 km." },
    ],
  },

  {
    slug: "chittorgarh-fort-guide",
    title: "Chittorgarh Fort Guide: History, Vijay Stambh, Padmini Palace and Tips",
    description: "Chittorgarh Fort guide: the history of Mewar's sieges, Vijay Stambh, Kirti Stambh, Rana Kumbha Palace, Padmini Palace, Meera temple, timings and how to reach.",
    category: "Itineraries",
    destination: "rajasthan",
    city: "chittorgarh",
    date: "2026-11-02",
    intro:
      "Chittorgarh Fort, one of the largest forts in India, sprawls across a hilltop above the town of Chittorgarh and was the capital of Mewar for centuries. Its towers, palaces, temples and reservoirs tell stories of courage and sacrifice, including the legends of Rani Padmini and Meera Bai. A half-day or full-day visit covers the Vijay Stambh, Kirti Stambh, Rana Kumbha Palace and Padmini Palace. It is about 115 km from Udaipur and part of the UNESCO-listed Hill Forts of Rajasthan.",
    sections: [
      {
        h: "History of Chittorgarh",
        p: [
          "Chittorgarh was the capital of the Mewar kingdom from about the 8th century until the 16th century. It was besieged three times, and each siege ended in tragedy: in 1303 by Alauddin Khilji, linked in legend to Rani Padmini; in 1535 by Bahadur Shah of Gujarat, when Rani Karnavati led the defence; and in 1567 to 1568 by the Mughal emperor Akbar. After the third siege, the Mewar rulers moved their capital to Udaipur. The fort became a symbol of Rajput valour.",
        ],
      },
      {
        h: "Vijay Stambh",
        p: [
          "The Vijay Stambh, or Tower of Victory, was built in the 15th century by Rana Kumbha to commemorate a victory over the Sultan of Malwa. The nine-storey tower, about 37 m tall, is covered in carvings of Hindu deities. Visitors can sometimes climb the narrow internal stairs to the top for views over the fort and the plains.",
        ],
      },
      {
        h: "Kirti Stambh",
        p: [
          "The Kirti Stambh, or Tower of Fame, is older, built around the 12th century by a Jain merchant and dedicated to Adinath, the first Jain tirthankara. It is smaller than the Vijay Stambh but finely carved with Jain figures, and stands beside a Jain temple.",
        ],
      },
      {
        h: "Palaces and temples",
        list: [
          "Rana Kumbha Palace: ruins of the palace where Maharana Udai Singh, founder of Udaipur, is said to have been born",
          "Padmini Palace: a palace beside a pool, linked to the legend of Rani Padmini",
          "Meera temple and Kumbha Shyam temple: associated with the poet saint Meera Bai",
          "Kalika Mata temple: originally a sun temple from around the 8th century",
          "Fateh Prakash Palace: now a museum",
          "Gaumukh reservoir: a spring-fed tank on the cliff edge",
        ],
      },
      {
        h: "The legend of Rani Padmini",
        p: [
          "According to the legend, popularised by the 16th-century poem Padmavat, Rani Padmini's beauty drew the attention of Alauddin Khilji, whose siege of Chittor ended with the women of the fort performing jauhar rather than face capture. Historians debate how much of the story is historical, but the legend remains central to the fort's identity and to Rajasthan's folklore.",
        ],
      },
      {
        h: "Meera Bai",
        p: [
          "Meera Bai, the 16th-century poet and devotee of Krishna, married into the Mewar royal family and lived in Chittorgarh. Her devotional songs (bhajans) are still sung across India. The Meera temple in the fort is associated with her worship of Krishna.",
        ],
      },
      {
        h: "Visiting tips",
        list: [
          "The fort is large; hire a cab or auto-rickshaw to move between sights",
          "Allow at least half a day, or a full day for a detailed visit",
          "Carry water and wear comfortable shoes",
          "Hire a licensed guide for the history and legends",
          "The evening light and sound show tells the fort's story",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to March: pleasant for walking the fort",
          "Jauhar Mela: a fair commemorating the jauhars, held in spring",
          "April to June: very hot; visit early",
          "July to September: monsoon, green surroundings",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Chittorgarh is about 115 km from Udaipur, around 2 hours by road, and is a railway junction with trains from Udaipur, Jaipur, Delhi and Ajmer. Many travellers visit as a day trip from Udaipur or on the way between Udaipur and Jaipur or Bundi.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Chittorgarh has a few heritage hotels and mid-range hotels in town. Most visitors stay in Udaipur and make a day trip, while those continuing to Bundi or Kota may stay overnight.",
        ],
      },
      { h: "Getting quotes", p: [QUOTE] },
      {
        h: "Combining with Udaipur and Bundi",
        p: [
          "Chittorgarh fits well into a Mewar and Hadoti circuit: Udaipur, Chittorgarh, Bundi and Kota, with Bundi's painted palace and stepwells about 160 km away. Many travellers visit Chittorgarh on the drive between Udaipur and Jaipur, which saves backtracking. Start early to see the fort before the midday heat.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Tell the agents your dates, group size, preferred hotel category and interests, and ask each to explain the daily drive times, the named hotels and exactly what is included. Comparing itemised quotes side by side makes it easy to spot differences in hotels, transport and inclusions, and to choose the plan that offers the best value for your trip rather than simply the lowest price.",
        ],
      },
      {
        h: "Before you book",
        p: [
          "Check the season and any festival dates for your travel window, confirm opening days and visiting hours for monuments and temples, and keep a little flexibility in your plan for long drives. Carry water, sunscreen, comfortable shoes and modest clothing for religious sites. Booking hotels and transport early in the October to March season gives you the best choice of rooms and fair prices.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Chittorgarh from Udaipur?", a: "About 115 km, around 2 hours by road." },
      { q: "How much time is needed for Chittorgarh Fort?", a: "At least half a day; a full day for a detailed visit." },
      { q: "What is the Vijay Stambh?", a: "A nine-storey Tower of Victory built by Rana Kumbha in the 15th century." },
      { q: "Is Chittorgarh Fort a UNESCO site?", a: "Yes, as part of the Hill Forts of Rajasthan." },
      { q: "Who was Rani Padmini?", a: "A legendary queen of Chittor, linked to the 1303 siege by Alauddin Khilji." },
      { q: "Is there a light and sound show at Chittorgarh?", a: "Yes, in the evening." },
    ],
  },

  {
    slug: "kumbhalgarh-ranakpur-guide",
    title: "Kumbhalgarh and Ranakpur Guide: The Great Wall of India and Marble Temple",
    description: "Kumbhalgarh and Ranakpur guide: the fort's 36 km wall, Badal Mahal, the wildlife sanctuary, Ranakpur's marble Jain temple, timings, route and stays.",
    category: "Itineraries",
    destination: "rajasthan",
    city: "kumbhalgarh",
    date: "2026-11-02",
    intro:
      "Kumbhalgarh and Ranakpur, about 50 km apart in the Aravalli hills, make one of Rajasthan's best day trips from Udaipur or a perfect stop between Udaipur and Jodhpur. Kumbhalgarh is a 15th-century hill fort with walls running about 36 km, among the longest in the world, and the birthplace of Maharana Pratap. Ranakpur's Jain temple is a masterpiece of white marble with over a thousand carved pillars. Both are best from October to March.",
    sections: [
      {
        h: "Day trip from Udaipur",
        days: [
          "Leave Udaipur early for Kumbhalgarh (about 85 km). Explore the fort and Badal Mahal, then drive to Ranakpur (about 50 km) for the temple in the afternoon, and return to Udaipur (about 90 km) or continue to Jodhpur.",
        ],
      },
      {
        h: "Kumbhalgarh Fort",
        p: [
          "Kumbhalgarh was built in the 15th century by Rana Kumbha of Mewar on a ridge of the Aravallis at over 1,000 m. Its massive walls wind over hills and valleys for about 36 km, wide enough in places for several horses to ride abreast, and are often called the Great Wall of India. The fort was a refuge for Mewar's rulers in times of danger and was the birthplace of Maharana Pratap in 1540. It is part of the UNESCO-listed Hill Forts of Rajasthan.",
        ],
      },
      {
        h: "Inside the fort",
        p: [
          "Within the walls are hundreds of temples, both Hindu and Jain, along with palaces, step wells and gardens. Badal Mahal, the Palace of Clouds, at the highest point, has painted rooms and sweeping views over the Aravallis and towards the Thar Desert. Walk part of the wall for the views, and stay for the evening light and sound show if you are staying nearby.",
        ],
      },
      {
        h: "Kumbhalgarh Wildlife Sanctuary",
        p: [
          "The forests around the fort form the Kumbhalgarh Wildlife Sanctuary, home to leopards, sloth bears, wolves, hyenas, jungle cats, and many birds. Jeep safaris and guided walks are available from nearby resorts. The sanctuary links Kumbhalgarh with Ranakpur, and the forest road between them is scenic.",
        ],
      },
      {
        h: "Ranakpur Jain temple",
        p: [
          "The Chaturmukha Dharana Vihara at Ranakpur, dedicated to Adinath, was built in the 15th century by the Jain merchant Dharna Shah with the support of Rana Kumbha. It is famous for its white marble halls, domes and ceilings, and for its 1,444 carved pillars, each said to be different. The temple has four entrances, and light changes through the halls during the day. It is one of the most important Jain pilgrimage sites.",
        ],
      },
      {
        h: "Visiting Ranakpur",
        list: [
          "Non-Jain visitors are usually allowed in the afternoon; check current timings",
          "Leather items, food and some electronics are not allowed inside",
          "Shoulders and knees must be covered",
          "An audio guide is often available",
          "The Surya Narayan temple nearby is also worth a visit",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to March: pleasant for walking the fort walls",
          "December: the Kumbhalgarh festival with music and dance",
          "July to September: monsoon, green hills and misty views",
          "April to June: hot, visit early",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Resorts near Kumbhalgarh and Ranakpur, set in the Aravalli hills, make a peaceful overnight stop, especially for those driving between Udaipur and Jodhpur. Staying overnight allows the fort's light and sound show and a morning safari. Many travellers simply make it a day trip from Udaipur.",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Kumbhalgarh is about 85 km from Udaipur, around 2 hours by road; Ranakpur is about 50 km from Kumbhalgarh and about 90 km from Udaipur. Ranakpur is about 160 km from Jodhpur. A private cab is the only practical way to combine both.",
        ],
      },
      {
        h: "Food",
        p: [
          "There are small restaurants near both sites, and the Ranakpur temple runs a bhojanshala serving simple vegetarian Jain meals. Resorts in the area serve Rajasthani thalis.",
        ],
      },
      { h: "Getting quotes", p: [QUOTE] },
      {
        h: "Why the walls were built",
        p: [
          "Kumbhalgarh stood on the border between Mewar and Marwar, guarding the kingdom's western approaches. Its long walls enclosed farmland, water tanks and villages, allowing the fort to hold out during long sieges. It is said to have been captured only once, when its water supply was cut. Walking even a short section of the wall shows how cleverly it follows the ridges of the Aravallis.",
        ],
      },
      {
        h: "Photography tips",
        p: [
          "Morning and late afternoon give the best light on Kumbhalgarh's walls, and the view from Badal Mahal is best on clear winter days. At Ranakpur, check the rules on cameras and phones before entering, and respect worshippers in the halls.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Tell the agents your dates, group size, preferred hotel category and interests, and ask each to explain the daily drive times, the named hotels and exactly what is included. Comparing itemised quotes side by side makes it easy to spot differences in hotels, transport and inclusions, and to choose the plan that offers the best value for your trip rather than simply the lowest price.",
        ],
      },
      {
        h: "Before you book",
        p: [
          "Check the season and any festival dates for your travel window, confirm opening days and visiting hours for monuments and temples, and keep a little flexibility in your plan for long drives. Carry water, sunscreen, comfortable shoes and modest clothing for religious sites. Booking hotels and transport early in the October to March season gives you the best choice of rooms and fair prices.",
        ],
      },
    ],
    faqs: [
      { q: "How long is the Kumbhalgarh wall?", a: "About 36 km, among the longest walls in the world." },
      { q: "How far is Kumbhalgarh from Udaipur?", a: "About 85 km." },
      { q: "How many pillars does Ranakpur temple have?", a: "About 1,444 carved pillars." },
      { q: "When can non-Jains visit Ranakpur?", a: "Usually in the afternoon; check the current timings." },
      { q: "Can I visit Kumbhalgarh and Ranakpur in one day?", a: "Yes, as a day trip from Udaipur or on the way to Jodhpur." },
      { q: "Who was born at Kumbhalgarh?", a: "Maharana Pratap, in 1540." },
    ],
  },

  {
    slug: "best-time-to-visit-rajasthan",
    title: "Best Time to Visit Rajasthan: Season, Weather, Festivals Month by Month",
    description: "When to visit Rajasthan: October to March season, desert nights, summer heat, monsoon in Udaipur, and festivals like Pushkar, Desert Festival and Gangaur.",
    category: "Planning",
    destination: "rajasthan",
    city: "jaipur",
    date: "2026-11-02",
    intro:
      "The best time to visit Rajasthan is October to March, when days are warm and sunny and nights cool, ideal for forts, palaces and desert camps. December and January are the coldest and busiest months, with chilly desert nights. April to June is extremely hot, while the monsoon from July to September turns Udaipur and the Aravallis green. Plan around festivals such as the Pushkar Fair, the Desert Festival and Gangaur for culture and colour.",
    sections: [
      {
        h: "Rajasthan month by month",
        list: [
          "January: cool days, cold nights; Bikaner Camel Festival, kite flying on Makar Sankranti, Jaipur Literature Festival",
          "February: pleasant; Jaisalmer Desert Festival",
          "March: warming up; Holi and Gangaur",
          "April: hot; Gangaur in some years",
          "May and June: very hot, above 40 Celsius; Mount Abu is cooler",
          "July and August: monsoon; Teej festival",
          "September: monsoon fading, humid",
          "October: pleasant; Marwar Festival, Dussehra",
          "November: Pushkar Fair, Diwali",
          "December: cold nights, festive and busy",
        ],
      },
      {
        h: "Peak season: October to March",
        p: [
          "This is the most comfortable time to travel. Days are warm and sunny, perfect for exploring forts and bazaars, and nights are cool. Desert camps in Jaisalmer and Bikaner open, and festivals fill the calendar. Christmas, New Year and Diwali are the busiest periods, with the highest hotel prices, so book well ahead.",
        ],
      },
      {
        h: "Winter in the desert",
        p: [
          "In December and January, temperatures in Jaisalmer, Bikaner and the desert camps can drop close to freezing at night, while days remain pleasantly warm. Pack warm layers, a jacket, cap and gloves for evenings, and choose heated tents at desert camps. Fog can delay early-morning trains and flights in northern Rajasthan.",
        ],
      },
      {
        h: "Summer: April to June",
        p: [
          "Summer is extremely hot across most of Rajasthan, with daytime temperatures often above 40 Celsius and dusty winds. Sightseeing is best limited to early mornings and evenings. Hotels offer lower prices, and Mount Abu, Rajasthan's only hill station, is a cooler escape. Ranthambore can be excellent for tiger sightings as animals visit water holes.",
        ],
      },
      {
        h: "Monsoon: July to September",
        p: [
          "The monsoon brings rain mainly to southern and eastern Rajasthan. Udaipur's lakes fill, the Aravalli hills turn green, and the Monsoon Palace lives up to its name. The desert gets less rain but stays hot and humid. Tourist crowds are smaller and prices lower, and festivals such as Teej celebrate the rains. Ranthambore's core zones close.",
        ],
      },
      {
        h: "Best time by destination",
        list: [
          "Jaipur, Jodhpur, Udaipur: October to March",
          "Jaisalmer and Bikaner: October to March, especially for desert camps",
          "Udaipur: also July to September for green hills and full lakes",
          "Mount Abu: all year, especially as a summer escape",
          "Ranthambore: October to June, with the best sightings in March to June",
          "Pushkar: November for the fair",
        ],
      },
      {
        h: "Festivals to plan around",
        list: [
          "Pushkar Fair: October or November",
          "Desert Festival, Jaisalmer: February",
          "Camel Festival, Bikaner: January",
          "Gangaur: March or April",
          "Teej: July or August",
          "Marwar Festival, Jodhpur: October",
        ],
      },
      {
        h: "What to pack by season",
        list: [
          "Winter: warm layers and jackets for evenings",
          "Summer: light cotton, hats, sunscreen and plenty of water",
          "Monsoon: an umbrella and quick-dry clothes",
          "All year: modest clothes for temples and comfortable shoes",
        ],
      },
      {
        h: "Planning tips",
        p: [
          "Festival dates follow the Hindu lunar calendar and change each year, so check them before booking. Hotels near festival sites sell out early, and some charge higher rates during events. For a quieter trip with good weather, travel in October, November, February or March.",
        ],
      },
      { h: "Getting quotes", p: [QUOTE] },
      {
        h: "Shoulder months",
        p: [
          "October and March are excellent shoulder months: the weather is warm but comfortable, crowds are smaller than in December and January, and hotel rates are often lower. October brings the post-monsoon green in the south and the start of the festival season, while March brings Holi and Gangaur. Both months suit travellers who want good weather without peak-season crowds.",
        ],
      },
      {
        h: "Travelling in the heat",
        p: [
          "If you must travel in summer, plan sightseeing for early mornings and evenings, rest in the afternoon, drink plenty of water and wear light cotton and a hat. Choose hotels with pools and good air-conditioning, and consider Mount Abu or Udaipur's lakes as cooler stops.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Tell the agents your dates, group size, preferred hotel category and interests, and ask each to explain the daily drive times, the named hotels and exactly what is included. Comparing itemised quotes side by side makes it easy to spot differences in hotels, transport and inclusions, and to choose the plan that offers the best value for your trip rather than simply the lowest price.",
        ],
      },
      {
        h: "Before you book",
        p: [
          "Check the season and any festival dates for your travel window, confirm opening days and visiting hours for monuments and temples, and keep a little flexibility in your plan for long drives. Carry water, sunscreen, comfortable shoes and modest clothing for religious sites. Booking hotels and transport early in the October to March season gives you the best choice of rooms and fair prices.",
        ],
      },
    ],
    faqs: [
      { q: "What is the best time to visit Rajasthan?", a: "October to March, when days are warm and nights cool." },
      { q: "Is Rajasthan very hot in summer?", a: "Yes. April to June often exceeds 40 Celsius; Mount Abu is cooler." },
      { q: "Is Rajasthan good in the monsoon?", a: "Udaipur and the Aravallis are green and beautiful; the desert stays hot and humid." },
      { q: "How cold is Jaisalmer in winter?", a: "Nights can drop close to freezing in December and January." },
      { q: "When is the Pushkar Fair?", a: "In October or November, around Kartik Purnima." },
      { q: "When is Rajasthan busiest?", a: "Christmas, New Year and Diwali." },
    ],
  },

  {
    slug: "rajasthan-trip-cost-guide",
    title: "Rajasthan Trip Cost Guide: What Decides the Price of Your Rajasthan Tour",
    description: "What a Rajasthan trip costs depends on: season, heritage or standard hotels, cab days, desert camps, safaris and festivals. How to compare quotes and save.",
    category: "Planning",
    destination: "rajasthan",
    city: "jaipur",
    date: "2026-11-02",
    intro:
      "The cost of a Rajasthan trip depends on the season, the type of hotels (heritage palaces, havelis or standard hotels), how many days you hire a cab, desert camp category, safaris and whether you travel during a festival. Christmas, New Year and Diwali are the most expensive times, and palace hotels cost far more than havelis or mid-range hotels. Compare itemised quotes to see what each part of the trip costs.",
    sections: [
      {
        h: "The main cost components",
        list: [
          "Flights or trains to Rajasthan and between cities",
          "A private cab for the circuit, priced by days and kilometres",
          "Hotels: palace hotels, heritage havelis or standard hotels",
          "Desert camps in Jaisalmer or Bikaner",
          "Safaris in Ranthambore",
          "Monument entry fees, guides and shows",
        ],
      },
      {
        h: "Hotels make the biggest difference",
        p: [
          "Rajasthan has some of India's most famous heritage hotels in former palaces and forts, which are among the most expensive stays in the country. Heritage havelis, often family-run, offer much of the atmosphere at a lower cost. Mid-range and budget hotels are widely available. Many travellers choose one special palace night and stay in havelis or mid-range hotels elsewhere.",
        ],
      },
      {
        h: "Transport",
        p: [
          "Most Rajasthan circuits use a private cab with a driver, priced by the number of days and kilometres, with driver allowances, tolls and state permits. Distances between cities are long, so a 7 to 10 day trip covers 1,500 km or more. Trains are a cheaper option between Jaipur, Jodhpur, Jaisalmer and Udaipur, and flights connect the main cities.",
        ],
      },
      {
        h: "Desert camps and safaris",
        p: [
          "Desert camp prices vary from simple tents to luxury camps with heaters and private sit-outs, and usually include dinner, breakfast, a camel ride and a cultural programme. Ranthambore safari costs depend on whether you book a gypsy or canter and how many safaris you take. Book both early in peak season.",
        ],
      },
      {
        h: "How the season changes the price",
        list: [
          "October to March: peak season, highest hotel rates",
          "Christmas, New Year and Diwali: the most expensive weeks",
          "Festivals such as Pushkar Fair: prices rise near the venue",
          "April to September: lower prices, but hot or humid weather",
        ],
      },
      {
        h: "Sample trip types",
        list: [
          "Budget: trains, guest houses and havelis, shared desert camps",
          "Standard: a private cab, 3-star hotels and a standard desert camp",
          "Heritage: havelis and a palace night, a luxury desert camp",
          "Luxury: palace hotels throughout, private guides and experiences",
        ],
      },
      {
        h: "Ways to save",
        list: [
          "Travel in October, November, February or March",
          "Avoid Christmas, New Year and Diwali",
          "Mix one palace night with havelis",
          "Take trains for long legs",
          "Share a cab with your group",
        ],
      },
      {
        h: "Hidden costs to watch for",
        list: [
          "Compulsory gala dinners at Christmas and New Year",
          "Camera fees at monuments",
          "Guide fees",
          "Driver night charges and parking",
          "Elephant or camel rides not included in packages",
        ],
      },
      {
        h: "Comparing quotes",
        p: [
          "When comparing Rajasthan quotes, check the named hotels and room types, whether the cab is at your disposal for the full trip, the desert camp category and inclusions, the number of safaris, and whether monument fees and guides are included. A slightly higher quote with better hotels and inclusions is often better value.",
        ],
      },
      { h: "Getting quotes", p: [QUOTE] },
      {
        h: "Typical trip lengths",
        p: [
          "Most Rajasthan trips run 7 to 12 days. A 7-day trip covers Jaipur, Jodhpur and Udaipur; 9 to 10 days adds Jaisalmer and a desert camp; and 12 days or more can add Pushkar, Ranthambore, Bikaner or Chittorgarh. Longer trips cost more in total but often less per day, as long drives are spread out and hotels offer better rates for longer stays.",
        ],
      },
      {
        h: "Group size and costs",
        p: [
          "The cab is shared by everyone in the group, so families and friends pay much less per person than couples. Larger groups can use a tempo traveller. Some heritage hotels offer family suites that are better value than two separate rooms.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Tell the agents your dates, group size, preferred hotel category and interests, and ask each to explain the daily drive times, the named hotels and exactly what is included. Comparing itemised quotes side by side makes it easy to spot differences in hotels, transport and inclusions, and to choose the plan that offers the best value for your trip rather than simply the lowest price.",
        ],
      },
      {
        h: "Before you book",
        p: [
          "Check the season and any festival dates for your travel window, confirm opening days and visiting hours for monuments and temples, and keep a little flexibility in your plan for long drives. Carry water, sunscreen, comfortable shoes and modest clothing for religious sites. Booking hotels and transport early in the October to March season gives you the best choice of rooms and fair prices.",
        ],
      },
      {
        h: "Local tips",
        p: [
          "Hire licensed guides at major monuments for the history and stories, agree on rates for auto-rickshaws before setting off, and keep small change for entry fees and tips. Bargain politely in markets, and buy crafts from established shops or government emporiums. Start sightseeing early to avoid the midday heat and the biggest crowds, and rest in the afternoons.",
        ],
      },
    ],
    faqs: [
      { q: "What is the biggest cost of a Rajasthan trip?", a: "Usually hotels, especially palace hotels, followed by the cab for long distances." },
      { q: "When is Rajasthan cheapest?", a: "From April to September, though it is hot or humid." },
      { q: "Are heritage hotels expensive?", a: "Palace hotels are among India's most expensive; havelis are more affordable." },
      { q: "How can I save on a Rajasthan trip?", a: "Travel off-peak, mix havelis with one palace night, and take trains for long legs." },
      { q: "Are desert camps included in packages?", a: "Often; check the camp category and inclusions." },
      { q: "What should I check in a Rajasthan quote?", a: "Hotels, cab days, camp category, safaris, monument fees and guides." },
    ],
  },

  {
    slug: "rajasthani-food-guide",
    title: "Rajasthani Food Guide: Dal Baati Churma, Laal Maas, Ker Sangri, Sweets",
    description: "Rajasthani food guide: dal baati churma, gatte ki sabzi, ker sangri, laal maas, pyaaz kachori, mirchi vada, Bikaneri bhujia, ghewar and where to eat.",
    category: "Planning",
    destination: "rajasthan",
    city: "jodhpur",
    date: "2026-11-02",
    intro:
      "Rajasthani food grew out of the desert: dishes made with ingredients that last, such as lentils, gram flour, millet and dried beans, cooked richly with ghee and spices. Try dal baati churma, gatte ki sabzi, ker sangri and bajre ki roti, fiery laal maas for non-vegetarians, snacks such as pyaaz kachori and mirchi vada, and sweets like ghewar and mawa kachori. A Rajasthani thali is the best way to taste many dishes at once.",
    sections: [
      {
        h: "Desert cooking",
        p: [
          "In the arid Thar, fresh vegetables and water were scarce, so cooks relied on lentils, gram flour, millets such as bajra, dried berries and beans, and dairy from cattle, goats and camels. Ghee and buttermilk replaced water in many recipes, and dishes were made to keep for days. Royal kitchens added game and rich gravies. The result is a cuisine of bold flavours and hearty food.",
        ],
      },
      {
        h: "Signature dishes",
        list: [
          "Dal baati churma: baked wheat balls with lentils and a sweet crumbled wheat churma",
          "Gatte ki sabzi: gram flour dumplings in a yogurt curry",
          "Ker sangri: desert berries and beans, tangy and spicy",
          "Bajre ki roti: millet flatbread with ghee and jaggery",
          "Kadhi: yogurt and gram flour curry",
          "Panchkuta: a mix of five desert ingredients",
        ],
      },
      {
        h: "Non-vegetarian dishes",
        list: [
          "Laal maas: a fiery red mutton curry with Mathania chillies",
          "Safed maas: mutton in a white gravy of cashews and cream",
          "Jungli maas: a simple, spicy hunter's dish",
          "Mohan maas: mutton cooked in milk and spices",
        ],
      },
      {
        h: "Snacks and street food",
        list: [
          "Pyaaz kachori: a flaky pastry filled with spiced onions, from Jaipur",
          "Mirchi vada: chillies stuffed with potato and fried in batter, from Jodhpur",
          "Bikaneri bhujia: crunchy gram flour snacks",
          "Dal kachori and samosa",
          "Lassi, often served in clay cups",
        ],
      },
      {
        h: "Sweets",
        list: [
          "Ghewar: a honeycomb-like sweet made for Teej",
          "Mawa kachori: a sweet kachori from Jodhpur",
          "Malpua: sweet pancakes, famous in Pushkar",
          "Rabri: thickened sweet milk",
          "Churma laddoo",
          "Sohan halwa and moong dal halwa",
        ],
      },
      {
        h: "The Rajasthani thali",
        p: [
          "A Rajasthani thali brings many dishes together on one platter: dal, baati, churma, gatte ki sabzi, ker sangri, kadhi, rotis, rice, pickles, papad and a sweet. Restaurants in Jaipur, Jodhpur and Udaipur serve thalis with unlimited refills, and village-themed restaurants such as those on the outskirts of Jaipur serve them with folk performances.",
        ],
      },
      {
        h: "Where to eat",
        list: [
          "Jaipur: kachori shops in the old city and thali restaurants",
          "Jodhpur: mirchi vada and lassi around the Clock Tower",
          "Bikaner: bhujia and sweets in the old bazaar",
          "Pushkar: malpua and vegetarian cafes",
          "Heritage hotels: royal-style dinners",
        ],
      },
      {
        h: "Marwari vegetarian tradition",
        p: [
          "Much of Rajasthan's food is vegetarian, shaped by the Marwari and Jain communities, who avoid meat and, in Jain cooking, often onion, garlic and root vegetables. Many restaurants are fully vegetarian, and Pushkar is entirely vegetarian. Non-vegetarian dishes come mainly from Rajput royal kitchens.",
        ],
      },
      {
        h: "Tips for eating in Rajasthan",
        list: [
          "Rajasthani food can be rich; ask for less ghee if you prefer",
          "Laal maas is very spicy",
          "Try street food at busy stalls",
          "Drink buttermilk or lassi to cool down",
        ],
      },
      {
        h: "Food experiences",
        p: [
          "Cooking classes in Jaipur and Udaipur homes, food walks in the old cities and thali dinners with folk music are great ways to explore Rajasthani food. Ask agents to add one to your itinerary.",
        ],
      },
      { h: "Getting quotes", p: [QUOTE] },
      {
        h: "Royal kitchens",
        p: [
          "The kitchens of Rajasthan's royal families, run by skilled khansamas, developed rich dishes for feasts and hunts, from laal maas and safed maas to elaborate sweets. Some heritage hotels recreate these royal recipes for dinners, served on silver thalis in old banquet halls. These meals are a good way to taste dishes rarely found in ordinary restaurants.",
        ],
      },
      {
        h: "Vegetarian options everywhere",
        p: [
          "Vegetarians eat extremely well in Rajasthan. Almost every restaurant has a wide vegetarian menu, and many are fully vegetarian. Thalis, kachoris, dal baati, gatte and sweets are all vegetarian, and Jain food without onion and garlic is easy to find.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Tell the agents your dates, group size, preferred hotel category and interests, and ask each to explain the daily drive times, the named hotels and exactly what is included. Comparing itemised quotes side by side makes it easy to spot differences in hotels, transport and inclusions, and to choose the plan that offers the best value for your trip rather than simply the lowest price.",
        ],
      },
      {
        h: "Before you book",
        p: [
          "Check the season and any festival dates for your travel window, confirm opening days and visiting hours for monuments and temples, and keep a little flexibility in your plan for long drives. Carry water, sunscreen, comfortable shoes and modest clothing for religious sites. Booking hotels and transport early in the October to March season gives you the best choice of rooms and fair prices.",
        ],
      },
      {
        h: "Local tips",
        p: [
          "Hire licensed guides at major monuments for the history and stories, agree on rates for auto-rickshaws before setting off, and keep small change for entry fees and tips. Bargain politely in markets, and buy crafts from established shops or government emporiums. Start sightseeing early to avoid the midday heat and the biggest crowds, and rest in the afternoons.",
        ],
      },
    ],
    faqs: [
      { q: "What is Rajasthan's most famous dish?", a: "Dal baati churma." },
      { q: "What is ker sangri?", a: "A dish of dried desert berries (ker) and beans (sangri), tangy and spicy." },
      { q: "What is laal maas?", a: "A fiery red mutton curry made with Mathania chillies." },
      { q: "Where can I try pyaaz kachori?", a: "In Jaipur's old city, especially for breakfast." },
      { q: "What sweet is made for Teej?", a: "Ghewar, a honeycomb-like sweet." },
      { q: "Is Rajasthani food vegetarian?", a: "Much of it is, though Rajput cuisine includes famous meat dishes." },
    ],
  },

  {
    slug: "rajasthan-festivals-guide",
    title: "Rajasthan Festivals Guide: Pushkar Fair, Desert Festival, Gangaur, Teej",
    description: "Rajasthan festivals guide: Pushkar Fair, Jaisalmer Desert Festival, Bikaner Camel Festival, Gangaur, Teej, kite festival, Marwar Festival and travel tips.",
    category: "Planning",
    destination: "rajasthan",
    city: "pushkar",
    date: "2026-11-02",
    intro:
      "Rajasthan's festivals are among the most colourful in India: camel fairs on the dunes, processions of women carrying idols of Gauri, kites filling the sky on Makar Sankranti, folk music under desert stars. The biggest for travellers are the Pushkar Fair in October or November, the Jaisalmer Desert Festival in February, the Bikaner Camel Festival in January, Gangaur in spring and Teej in the monsoon. Dates follow the lunar calendar, so check each year and book early.",
    sections: [
      {
        h: "Pushkar Fair",
        p: [
          "Held around Kartik Purnima in October or November, the Pushkar Fair combines one of the world's largest livestock fairs, with thousands of camels, horses and cattle traded on the dunes, with a major Hindu pilgrimage to Pushkar Lake. Camel races, folk performances, competitions and a carnival atmosphere fill the days. Hotels and luxury tent camps sell out months ahead.",
        ],
      },
      {
        h: "Jaisalmer Desert Festival",
        p: [
          "The Desert Festival, held in February around the full moon of the month of Magh, celebrates the culture of the Thar. Events take place in Jaisalmer and on the Sam dunes, with camel races and polo, turban-tying and moustache competitions, the Mr Desert contest, folk music and dance, and a closing evening under the full moon.",
        ],
      },
      {
        h: "Bikaner Camel Festival",
        p: [
          "The Camel Festival in Bikaner, held in January, features decorated camels, camel races and dances, fur-cutting art, folk music and fireworks. It celebrates the camel's central place in desert life and draws photographers from around the world.",
        ],
      },
      {
        h: "Gangaur",
        p: [
          "Gangaur, celebrated in March or April after Holi, honours the goddess Gauri (Parvati) and is one of Rajasthan's most important festivals for women, who pray for marital happiness. Women dress in their finest clothes and carry decorated idols of Gauri in processions. Jaipur's procession from the City Palace is a highlight, and Udaipur celebrates with boat processions on Lake Pichola during the Mewar Festival.",
        ],
      },
      {
        h: "Teej",
        p: [
          "Teej, in July or August, welcomes the monsoon and celebrates the union of Shiva and Parvati. Women wear green, apply henna, sing folk songs and swing on decorated swings. Jaipur holds a royal procession, and ghewar, a honeycomb-like sweet, is made in every home and sweet shop.",
        ],
      },
      {
        h: "Other festivals",
        list: [
          "Makar Sankranti (14 January): kite flying, especially in Jaipur",
          "Holi: in March, with royal celebrations in Udaipur",
          "Marwar Festival: Jodhpur, in October",
          "Diwali: lights across cities and forts",
          "Kumbhalgarh festival: December",
          "Urs at Ajmer Sharif: dates follow the Islamic calendar",
          "Jaipur Literature Festival: January",
        ],
      },
      {
        h: "Festival calendar",
        list: [
          "January: Camel Festival, kite festival, Jaipur Literature Festival",
          "February: Desert Festival",
          "March and April: Holi, Gangaur, Mewar Festival",
          "July and August: Teej",
          "October: Marwar Festival, Dussehra",
          "October and November: Pushkar Fair, Diwali",
        ],
      },
      {
        h: "Travel tips for festivals",
        list: [
          "Check the dates each year, as they follow lunar calendars",
          "Book hotels and camps months in advance",
          "Expect higher prices and crowds",
          "Arrive early for processions and events",
          "Ask before photographing people, especially women",
        ],
      },
      {
        h: "Why go during a festival",
        p: [
          "Festivals show Rajasthan at its most vibrant: traditional dress, music, dance and rituals that continue centuries-old customs. Even smaller village festivals offer a glimpse of local life. Plan a trip around one festival, and add the classic sights before or after.",
        ],
      },
      { h: "Getting quotes", p: [QUOTE] },
      {
        h: "Festivals with children",
        p: [
          "Children love the colour and energy of Rajasthan's festivals, especially the camel races, kite flying and folk performances. Keep children close in crowds, carry water and snacks, and choose viewing spots with some shade. Hotels near festival venues often organise their own events with puppet shows and music.",
        ],
      },
      {
        h: "Respecting traditions",
        p: [
          "Many festivals are religious occasions. Dress modestly, remove shoes where required, follow instructions at temples and processions, and ask before photographing women and rituals.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Tell the agents your dates, group size, preferred hotel category and interests, and ask each to explain the daily drive times, the named hotels and exactly what is included. Comparing itemised quotes side by side makes it easy to spot differences in hotels, transport and inclusions, and to choose the plan that offers the best value for your trip rather than simply the lowest price.",
        ],
      },
      {
        h: "Before you book",
        p: [
          "Check the season and any festival dates for your travel window, confirm opening days and visiting hours for monuments and temples, and keep a little flexibility in your plan for long drives. Carry water, sunscreen, comfortable shoes and modest clothing for religious sites. Booking hotels and transport early in the October to March season gives you the best choice of rooms and fair prices.",
        ],
      },
      {
        h: "Local tips",
        p: [
          "Hire licensed guides at major monuments for the history and stories, agree on rates for auto-rickshaws before setting off, and keep small change for entry fees and tips. Bargain politely in markets, and buy crafts from established shops or government emporiums. Start sightseeing early to avoid the midday heat and the biggest crowds, and rest in the afternoons.",
        ],
      },
    ],
    faqs: [
      { q: "What is the biggest festival in Rajasthan?", a: "The Pushkar Fair is the best known for travellers; Gangaur and Teej are major local festivals." },
      { q: "When is the Jaisalmer Desert Festival?", a: "In February, around the full moon of Magh." },
      { q: "When is Gangaur?", a: "In March or April, after Holi." },
      { q: "When is the kite festival in Rajasthan?", a: "On Makar Sankranti, 14 January, especially in Jaipur." },
      { q: "When is Teej celebrated?", a: "In July or August, during the monsoon." },
      { q: "When is the Bikaner Camel Festival?", a: "In January." },
    ],
  },

  {
    slug: "golden-triangle-tour-guide",
    title: "Golden Triangle Tour Guide: Delhi, Agra and Jaipur in 5 or 6 Days",
    description: "Golden Triangle tour guide: a 6-day Delhi, Agra and Jaipur itinerary, the Taj Mahal, Fatehpur Sikri, Amber Fort, distances, trains, best time and add-ons.",
    category: "Itineraries",
    destination: "rajasthan",
    city: "jaipur",
    date: "2026-11-02",
    intro:
      "The Golden Triangle links Delhi, Agra and Jaipur, India's most popular first-time tour, covering Mughal monuments, the Taj Mahal and Rajput forts in 5 to 6 days. The three cities are connected by expressways and fast trains, with drives of about 4 to 5 hours. Travel from October to March for the best weather, remember the Taj Mahal is closed on Fridays, and consider adding Ranthambore, Udaipur or Varanasi.",
    sections: [
      {
        h: "6-day Golden Triangle itinerary",
        days: [
          "Arrive in Delhi. Evening at India Gate.",
          "Old Delhi: Red Fort, Jama Masjid, a rickshaw ride in Chandni Chowk; New Delhi: Humayun's Tomb and Qutub Minar.",
          "Drive or take a train to Agra (about 230 km). Agra Fort and the Taj Mahal at sunset from Mehtab Bagh.",
          "Taj Mahal at sunrise, Itimad-ud-Daulah, then drive to Jaipur via Fatehpur Sikri and Abhaneri.",
          "Jaipur: Amber Fort, City Palace, Jantar Mantar and Hawa Mahal.",
          "Nahargarh or shopping, then return to Delhi.",
        ],
      },
      {
        h: "Delhi",
        p: [
          "Delhi combines Old Delhi's Mughal monuments and bazaars with New Delhi's wide boulevards. Highlights include the Red Fort (usually closed on Mondays), Jama Masjid, Humayun's Tomb, Qutub Minar, India Gate, Lotus Temple and Akshardham. The Delhi Metro makes getting around easy. Two days allows a good introduction.",
        ],
      },
      {
        h: "Agra",
        p: [
          "Agra is home to the Taj Mahal, built by Shah Jahan in memory of Mumtaz Mahal and completed in the mid-17th century, a UNESCO World Heritage Site. See it at sunrise for soft light and fewer crowds, and at sunset from Mehtab Bagh across the Yamuna. Agra Fort, another UNESCO site, and Itimad-ud-Daulah, the 'Baby Taj', are also worth visiting. The Taj Mahal is closed on Fridays.",
        ],
      },
      {
        h: "Fatehpur Sikri and Abhaneri",
        p: [
          "Fatehpur Sikri, about 40 km from Agra, was Akbar's short-lived capital in the 16th century, with red sandstone palaces, the Buland Darwaza and the Jama Masjid, and is a UNESCO site. Abhaneri, near the Agra to Jaipur highway, has Chand Baori, one of India's deepest stepwells, with thousands of symmetrical steps. Both are easy stops on the drive to Jaipur.",
        ],
      },
      {
        h: "Jaipur",
        p: [
          "Jaipur completes the triangle with Amber Fort, the City Palace, Jantar Mantar and Hawa Mahal, along with colourful bazaars for textiles, jewellery and blue pottery. Its walled city is a UNESCO World Heritage Site.",
        ],
      },
      {
        h: "Getting around",
        list: [
          "Delhi to Agra: about 230 km via the Yamuna Expressway, or fast trains in about 2 hours",
          "Agra to Jaipur: about 240 km, 4 to 5 hours by road",
          "Jaipur to Delhi: about 280 km, 5 hours by road, or fast trains",
          "A private cab with a driver is the most flexible option",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to March: pleasant weather, the best season",
          "December and January: fog can delay morning trains and hide the Taj at sunrise",
          "April to June: very hot",
          "July to September: monsoon, humid",
        ],
      },
      {
        h: "Popular add-ons",
        list: [
          "Ranthambore: a tiger safari between Agra and Jaipur",
          "Udaipur and Jodhpur: extend into Rajasthan",
          "Varanasi: fly from Delhi for the ghats",
          "Amritsar: the Golden Temple",
          "Rishikesh and Haridwar: from Delhi",
        ],
      },
      {
        h: "Practical tips",
        list: [
          "Book Taj Mahal tickets online and remember Friday closures",
          "Use licensed guides at monuments",
          "Dress modestly at mosques and temples",
          "Carry water and sunscreen",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Each city has a full range of hotels. In Agra, a room with a view of the Taj is a memorable splurge. In Jaipur, heritage hotels add to the experience. Delhi has excellent hotels across budgets.",
        ],
      },
      { h: "Getting quotes", p: [QUOTE] },
      {
        h: "Golden Triangle with children and seniors",
        p: [
          "The Golden Triangle suits families and older travellers well: distances are short on expressways, hotels are comfortable, and sightseeing is mostly on flat ground. Use battery cars at the Taj Mahal, take jeeps up to Amber Fort, and plan rest in the afternoons. A private cab with the same driver for the whole trip makes the journey easier.",
        ],
      },
      {
        h: "Food on the route",
        p: [
          "Try Mughlai dishes and street food such as parathas and chaat in Old Delhi, petha and Mughlai food in Agra, and pyaaz kachori and dal baati churma in Jaipur.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Tell the agents your dates, group size, preferred hotel category and interests, and ask each to explain the daily drive times, the named hotels and exactly what is included. Comparing itemised quotes side by side makes it easy to spot differences in hotels, transport and inclusions, and to choose the plan that offers the best value for your trip rather than simply the lowest price.",
        ],
      },
      {
        h: "Before you book",
        p: [
          "Check the season and any festival dates for your travel window, confirm opening days and visiting hours for monuments and temples, and keep a little flexibility in your plan for long drives. Carry water, sunscreen, comfortable shoes and modest clothing for religious sites. Booking hotels and transport early in the October to March season gives you the best choice of rooms and fair prices.",
        ],
      },
    ],
    faqs: [
      { q: "How many days are needed for the Golden Triangle?", a: "Five to six days." },
      { q: "Which day is the Taj Mahal closed?", a: "Friday." },
      { q: "How far is Agra from Delhi?", a: "About 230 km via the Yamuna Expressway." },
      { q: "What is the best time for a Golden Triangle tour?", a: "October to March." },
      { q: "Can I add Ranthambore to the Golden Triangle?", a: "Yes, between Agra and Jaipur." },
      { q: "Is it better to drive or take trains?", a: "A private cab is most flexible; fast trains save time between Delhi and Agra." },
    ],
  },

  {
    slug: "rajasthan-heritage-hotels-guide",
    title: "Rajasthan Heritage Hotels Guide: Palaces, Forts and Havelis to Stay In",
    description: "Rajasthan heritage hotels guide: staying in palaces, forts and havelis, what heritage classification means, what to expect, and tips for choosing a stay.",
    category: "Planning",
    destination: "rajasthan",
    city: "udaipur",
    date: "2026-11-02",
    intro:
      "Rajasthan pioneered heritage tourism in India, turning royal palaces, hilltop forts and merchant havelis into hotels. Staying in one is often the highlight of a Rajasthan trip: courtyards, frescoes, rooftops with fort views and old-world service. Options range from grand palace hotels such as those in Udaipur, Jaipur and Jodhpur to small family-run havelis. Know what to expect in old buildings, and mix one special stay with simpler hotels to manage costs.",
    sections: [
      {
        h: "Why heritage hotels began in Rajasthan",
        p: [
          "After Indian independence and the end of royal privileges, many princely families found their palaces and forts expensive to maintain. Converting them into hotels preserved the buildings and gave families an income. Rajasthan led the way, and today the state has more heritage hotels than any other in India, from palaces still partly lived in by royal families to restored havelis and rural forts.",
        ],
      },
      {
        h: "Types of heritage stays",
        list: [
          "Palace hotels: former royal residences, often grand and luxurious",
          "Fort hotels: rooms within old fort walls, often in rural settings",
          "Havelis: restored merchant mansions in the old cities",
          "Rural estates and lodges: country homes of noble families",
          "Heritage homestays: families hosting guests in their ancestral homes",
        ],
      },
      {
        h: "What heritage classification means",
        p: [
          "India's Ministry of Tourism classifies heritage hotels as Heritage, Heritage Classic and Heritage Grand, generally for buildings built before 1950 that retain their traditional character. Classification considers the age of the building, its architecture, and facilities. Not every heritage-style hotel is officially classified, so ask about the building's history.",
        ],
      },
      {
        h: "Famous examples",
        p: [
          "Rajasthan's best-known palace hotels include the Lake Palace in Udaipur, the Rambagh Palace in Jaipur and Umaid Bhawan Palace in Jodhpur, along with Lalgarh Palace in Bikaner and fort hotels such as Neemrana and Samode. Many smaller havelis and forts offer equally memorable stays at lower prices.",
        ],
      },
      {
        h: "What to expect",
        list: [
          "Rooms vary in size and style, even within the same hotel",
          "Old buildings may have steep stairs and no lifts",
          "Bathrooms may be smaller or modernised in older rooms",
          "Wi-Fi and modern facilities can be patchy",
          "Atmosphere, history and views are the main attractions",
        ],
      },
      {
        h: "Choosing the right heritage stay",
        list: [
          "Ask for photos of the actual room category",
          "Check whether rooms have lifts or stairs",
          "Read recent reviews for maintenance and service",
          "Choose a location with views or walking access to sights",
          "Mix one palace night with havelis to manage costs",
        ],
      },
      {
        h: "Experiences at heritage hotels",
        p: [
          "Many heritage hotels offer experiences beyond the room: guided tours of the property and its history, folk music and dance in the courtyard, rooftop dinners with fort views, vintage car rides, cooking demonstrations and village visits. Some royal families still live on part of the property, adding to the sense of history.",
        ],
      },
      {
        h: "Heritage stays for families and seniors",
        p: [
          "Families love the courtyards, gardens and stories of heritage hotels, but older buildings may have stairs and uneven floors. Ask for ground-floor rooms or properties with lifts if travelling with elderly guests or small children.",
        ],
      },
      {
        h: "Booking tips",
        list: [
          "Book early for October to March, especially palace hotels",
          "Expect higher prices at Christmas, New Year and Diwali",
          "Check what meals and activities are included",
          "Ask about dress codes for dining at some palace hotels",
        ],
      },
      {
        h: "Planning a heritage trip",
        p: [
          "A heritage-focused Rajasthan trip might include a haveli in Jaipur, a fort stay in the countryside, a haveli below Mehrangarh in Jodhpur, a desert camp in Jaisalmer, and a palace or lake-view stay in Udaipur.",
        ],
      },
      { h: "Getting quotes", p: [QUOTE] },
      {
        h: "Haveli stays",
        p: [
          "Havelis offer an intimate heritage experience: a central courtyard, painted walls, carved balconies and rooftop terraces with views over the old city. Many are run by the families who built them, who share stories of the house over dinner. They are usually more affordable than palace hotels and are found in Jaipur, Jodhpur, Jaisalmer, Bikaner, Udaipur and the painted towns of Shekhawati.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Tell the agents your dates, group size, preferred hotel category and interests, and ask each to explain the daily drive times, the named hotels and exactly what is included. Comparing itemised quotes side by side makes it easy to spot differences in hotels, transport and inclusions, and to choose the plan that offers the best value for your trip rather than simply the lowest price.",
        ],
      },
      {
        h: "Before you book",
        p: [
          "Check the season and any festival dates for your travel window, confirm opening days and visiting hours for monuments and temples, and keep a little flexibility in your plan for long drives. Carry water, sunscreen, comfortable shoes and modest clothing for religious sites. Booking hotels and transport early in the October to March season gives you the best choice of rooms and fair prices.",
        ],
      },
    ],
    faqs: [
      { q: "What is a heritage hotel?", a: "A hotel in a historic building such as a palace, fort or haveli, generally built before 1950." },
      { q: "Are heritage hotels expensive?", a: "Palace hotels are among India's most expensive; havelis and smaller forts are more affordable." },
      { q: "Do heritage hotels have lifts?", a: "Not always; ask before booking if you need step-free access." },
      { q: "Which city has the best heritage hotels?", a: "Udaipur, Jaipur and Jodhpur are famous for palace hotels; havelis are found across Rajasthan." },
      { q: "What is a haveli?", a: "A traditional mansion, often built by merchants, with courtyards and carved facades." },
      { q: "Should I book one palace night?", a: "Many travellers mix one palace night with havelis to manage costs." },
    ],
  },
];
