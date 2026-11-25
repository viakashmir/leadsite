// TDI depth pass 2, part 3 (2026-11-25): a second layer for the batch 2 posts
// still short of the paired tdiholidayventures.com pages. Appended by
// withAdditions in blog/index.ts. Rules: checkable facts, no typed fares or
// prices, no em dashes.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const TDI_DEPTH_6_ADDITIONS: Record<string, Addition> = {
  "kashmir-travel-faqs": {
    sections: [
      {
        h: "Money and payments in more detail",
        p: [
          "UPI works in most hotels, restaurants and shops in Srinagar, Gulmarg, Pahalgam and Sonamarg, and cards are accepted in larger hotels and showrooms. Pony owners, shikara men, union taxis, small dhabas and roadside stalls usually want cash. ATMs are common in Srinagar and the main towns but can run out on busy days and are rare in Gurez, Keran and remote villages. Mobile data can drop in the mountains, which stops UPI from working, so carry enough cash for each day outside the city.",
        ],
      },
      {
        h: "Kashmir with limited mobility",
        p: [
          "Kashmir can be enjoyed with limited mobility, with some planning. Choose a hotel with a lift and ground-floor rooms, since many smaller hotels have only stairs. The Mughal gardens are terraced, with steps between levels, but the lower terraces are reachable. Shikara rides need help getting in and out; ask for a shikara at a ghat with steps rather than a muddy bank. Gulmarg's gondola has staff who help passengers board. Pony rides are not suitable for everyone, so check before booking.",
        ],
      },
      {
        h: "Travelling during Ramadan and Eid",
        p: [
          "During Ramadan, most of Kashmir fasts from dawn to sunset. Hotels and restaurants serving tourists remain open, but some local eateries close during the day and open after sunset. Traffic is heavy just before iftar, the evening meal. Eid brings holidays, crowds at gardens and markets, and closed shops on the first day. Respect the fast by not eating or drinking in public in conservative areas during the day, and plan important drives outside the hour before sunset.",
        ],
      },
      {
        h: "Practical notes for foreign visitors",
        p: [
          "Foreign nationals need a valid Indian visa, and hotels register foreign guests with the authorities using the guest's passport details, so keep your passport handy at check-in. Some border areas, including parts of Ladakh, need protected area permits arranged through registered agents. Carry copies of your passport and visa, and keep your embassy's contact number. Prepaid Indian SIM cards bought outside Jammu and Kashmir do not work here; a postpaid connection or local arrangement through your hotel is needed.",
        ],
      },
    ],
  },

  "srinagar-to-leh-taxi": {
    sections: [
      {
        h: "Meal stops on the two-day drive",
        p: [
          "On day one, most taxis stop for breakfast at Sonamarg or Gagangir, lunch at Drass, and dinner at the Kargil hotel. On day two, breakfast is at the hotel, tea at Mulbekh or Lamayuru, and lunch at Khaltsi or Nimmu before Leh. Dhabas on the route serve rice, dal, rajma, Maggi and tea. Carry water and dry snacks for the stretches between stops.",
        ],
      },
    ],
  },

  "nigeen-lake-houseboats": {
    sections: [
      {
        h: "Walks around Nigeen",
        p: [
          "Nigeen is good for walks. From the Nigeen Club area, lanes lead past old houses and gardens to Hazratbal, where the white marble shrine stands by the lake. The University of Kashmir campus lies along the road nearby. Early mornings are quiet, with mist on the water and few vehicles. In the evening, walk to the Nigeen bridge for sunset views across the lake.",
        ],
      },
      {
        h: "Birds and plants on Nigeen",
        p: [
          "Nigeen's quieter water attracts birds: kingfishers dive from the houseboat railings, herons stand in the shallows, and in winter migratory ducks and coots arrive from the north. In summer, lotus leaves and flowers cover parts of the lake, and water lilies bloom near the shore. Ask the shikara man to take you slowly along the edges, where the birds are easiest to see.",
        ],
      },
      {
        h: "Vendors who come to your houseboat",
        p: [
          "Shikara vendors paddle up to Nigeen houseboats selling flowers, saffron, dry fruits, shawls, jewellery and papier-mache. Some are pleasant; others can be persistent. If you are not interested, a polite no is enough. If you buy, compare prices with shops on land, check the quality, and ask for a receipt for expensive items like pashmina or saffron. Your houseboat owner can tell you which vendors are reliable.",
        ],
      },
      {
        h: "Nigeen's houseboat families",
        p: [
          "Most Nigeen houseboats are owned and run by families who have lived on the lake for generations. The owner often lives on a nearby boat or on the shore and cooks or supervises meals. This family touch is part of the charm: you may be invited for tea, shown how the boat was built, or told stories of the lake. Respect their privacy and home as you would in any guesthouse.",
        ],
      },
      {
        h: "Safety on a Nigeen houseboat",
        p: [
          "Houseboats are stable, but take care on wet decks and steps, especially with children. Keep children away from the edges and do not let them sit on the railings. Ask about life jackets for shikara rides. At night, lock the doors, keep valuables in the room safe or with the owner, and switch off heaters before sleeping if they are not designed for overnight use.",
        ],
      },
    ],
  },

  "best-areas-to-stay-in-srinagar": {
    sections: [
      {
        h: "Noise and early mornings by area",
        p: [
          "Boulevard Road wakes early with traffic, shikara men and vendors, and stays busy until late in peak season. Lal Chowk is noisy in the day with markets and traffic. Rajbagh and Jawahar Nagar are quieter residential areas. Nigeen, Hazratbal and the Zabarwan foothills are the calmest. In every area you will hear the call to prayer from nearby mosques, including at dawn; light sleepers should bring earplugs.",
        ],
      },
      {
        h: "Parking and driving from each area",
        p: [
          "If you are travelling with your own car or a self-drive rental, parking matters. Boulevard Road hotels have limited parking and the road is crowded in peak season. Rajbagh and the residential areas have more space. Old city lanes are too narrow for cars in places. Ask your hotel whether it has parking, whether it is free, and whether the car can be left overnight.",
        ],
      },
      {
        h: "Srinagar areas for photographers",
        p: [
          "Photographers should stay near Dal or Nigeen for sunrise on the lake, the floating market near Dal's inner channels and shikaras in the morning mist. The old city, with its wooden houses and bridges over the Jhelum, is best in the early morning. Hari Parbat and the Zabarwan hillside give views over the city at sunset.",
        ],
      },
    ],
  },

  "kashmir-tulip-festival-trip": {
    sections: [
      {
        h: "What happens during the tulip festival",
        p: [
          "When the garden is in bloom, the tourism department usually runs a tulip festival with cultural programmes, Kashmiri music, handicraft stalls and food stalls near the garden. The schedule changes each year and is announced locally. The festival adds atmosphere but also crowds, especially on weekends. Ask your hotel for the programme when you arrive.",
        ],
      },
      {
        h: "A half-day loop from the tulip garden",
        days: [
          "Start at the tulip garden at opening time, and spend two hours.",
          "Walk or drive to the Botanical Garden next door for spring flowers and the lake.",
          "Drive up to Cheshma Shahi for its spring and terraces.",
          "Continue to Pari Mahal for the view over Dal Lake.",
          "Finish at Nishat Bagh, then lunch on Boulevard Road.",
        ],
      },
      {
        h: "Tulip season from Delhi and other cities",
        p: [
          "Many visitors fly to Srinagar from Delhi, Mumbai or other cities for a tulip trip of four to six days. Flights fill up in late March and early April, so book early. Morning flights give you an afternoon in Srinagar on arrival. If you travel by train to Katra, the Katra to Srinagar line now makes the trip possible without a long road drive.",
        ],
      },
      {
        h: "Tulips and Pahalgam in spring",
        p: [
          "Spring is a good time to add Pahalgam to a tulip trip. The meadows turn green, the Lidder runs high with snowmelt, and snow still covers the peaks. Aru and Betaab are fresh and quiet. Nights are cold, so check heating in your hotel. Two nights in Pahalgam after three in Srinagar makes a balanced spring week.",
        ],
      },
      {
        h: "When to book a tulip trip",
        p: [
          "Book flights and hotels as soon as the opening date is announced, or even earlier if you are flexible. Hotels near the garden and on Boulevard Road fill quickly for the first two weeks of April. Packages for tulip season are offered from early in the year. If you book early, choose rooms and flights with flexible change rules, since the bloom dates can shift.",
        ],
      },
      {
        h: "Tulip season for photographers",
        p: [
          "Photographers should arrive at opening time for soft light and fewer people. A telephoto lens isolates individual flowers and compresses the colour rows, while a wide lens captures the terraces with Dal Lake beyond. Overcast days give even light for close-ups. Do not step into the beds or move flowers for a shot; garden staff ask visitors to stay on the paths.",
        ],
      },
    ],
  },

  "budget-hotels-in-srinagar": {
    sections: [
      {
        h: "Budget transport from your guesthouse",
        p: [
          "Budget travellers can use shared taxis and buses instead of private cabs. Shared Sumos and minibuses for Tangmarg, Pahalgam, Sonamarg and other towns leave from Srinagar's bus stands, mainly Batamaloo, when they fill. The state road transport corporation runs buses from the Tourist Reception Centre area in some seasons. Within the city, shared autos and minibuses run on main routes. These are cheap but slow; allow extra time.",
        ],
      },
      {
        h: "Budget stays for solo women",
        p: [
          "Solo women travellers on a budget should choose guesthouses with good recent reviews from other women, a staffed reception, a working lock and a central location. Family-run guesthouses in Rajbagh and near Dal Gate are often a good choice. Share your plans with the owner, avoid walking alone late at night, and dress modestly. Many women travellers find Srinagar friendly and helpful.",
        ],
      },
      {
        h: "Spotting a fake budget listing",
        p: [
          "Be wary of listings with very low prices, stock photos, no address, no reviews, or owners who ask for full payment by UPI to a personal account. Search the guesthouse name and phone number online, look for reviews on several platforms, and ask for a video call or recent photos. Book through established platforms or the guesthouse's own verified contacts.",
        ],
      },
      {
        h: "A budget day in Srinagar on foot",
        days: [
          "Morning: walk along Boulevard Road from Dal Gate towards Nehru Park, with views over the lake.",
          "Mid-morning: shared transport to the old city for Jamia Masjid and Khanqah-e-Moula.",
          "Lunch: Kashmiri food at a local eatery in the old city.",
          "Afternoon: walk up Hari Parbat or visit Makhdoom Sahib shrine.",
          "Evening: a short shikara ride from a Dal ghat, agreeing the price first.",
        ],
      },
      {
        h: "Budget houseboats: what to expect",
        p: [
          "Budget houseboats, often graded C or D by the tourism department, are simpler than deluxe boats, with smaller rooms, basic furniture and shared or simple attached bathrooms. They still offer the lake setting and family hospitality. Check heating, hot water and cleanliness, and confirm whether breakfast and dinner are included. Many budget boats are on the quieter channels behind Dal and on Nigeen.",
        ],
      },
      {
        h: "Saving on food and shopping",
        p: [
          "Eat where locals eat: small restaurants near Lal Chowk, Dal Gate and the old city serve Kashmiri and North Indian meals at fair prices. Bakeries sell bread, kulcha and tea for breakfast. For shopping, compare prices across several shops, buy from government emporiums or cooperatives for authentic goods, and do not feel pressured by shopkeepers or guides who earn commission.",
        ],
      },
    ],
  },

  "kashmir-7-day-itinerary": {
    sections: [
      {
        h: "How much driving a 7-day plan involves",
        list: [
          "Airport to a Srinagar hotel: about 30 to 45 minutes.",
          "Srinagar to Gulmarg: about two hours each way.",
          "Gulmarg to Pahalgam: about four to five hours via Srinagar.",
          "Pahalgam to Aru, Betaab and Chandanwari by union taxi: a few hours in all.",
          "Pahalgam to Srinagar: about two and a half to three hours.",
          "Srinagar to Sonamarg: about two to two and a half hours each way.",
          "Expect four to six hours in the car on transfer days and two to four on sightseeing days.",
        ],
      },
      {
        h: "7 days from Jammu or Katra by train",
        p: [
          "If you arrive by train at Jammu or Katra, take the train from Katra to Srinagar through the Chenab bridge. This saves the long road drive and gives you an extra afternoon in Srinagar. Book train tickets early, since this route is popular. A day at Vaishno Devi before or after the Kashmir week fits well if you are starting from Katra.",
        ],
      },
      {
        h: "7 days for a family with toddlers",
        p: [
          "With toddlers, slow the plan further. Stay three nights in Srinagar and two in Pahalgam, and do Gulmarg as a day trip without Phase 2. Choose hotels with heating, lifts and space to play. Carry snacks, a light pram or carrier, warm clothes and medicines. Avoid long drives during nap times, and plan rest afternoons.",
        ],
      },
      {
        h: "Rest-day ideas in Srinagar",
        p: [
          "On a slower week, a rest day helps. Sleep late, take a short shikara ride, visit a papier-mache or carpet workshop, have a long Kashmiri lunch, or walk in Nishat or the Botanical Garden. Rest days also leave room for shopping without rushing.",
        ],
      },
      {
        h: "What to book first for a 7-day trip",
        p: [
          "Book flights first, then hotels in the order of busiest places: Gulmarg and Pahalgam fill quickly in peak seasons, followed by Srinagar houseboats and hotels. Book Gulmarg gondola tickets as soon as your Gulmarg day is fixed. Book the cab for the whole week with one operator, and confirm everything in writing.",
        ],
      },
    ],
  },

  "kashmiri-wazwan-guide": {
    sections: [
      {
        h: "Wazwan dishes by heat level",
        list: [
          "Mild: yakhni, gushtaba, aab gosht and methi maaz, all cooked with yoghurt or milk and gentle spices.",
          "Medium: rogan josh and rista, rich and red but more aromatic than hot.",
          "Hot: marchwangan korma, made with a generous amount of Kashmiri red chilli.",
          "Sides: radish and walnut chutneys can be sharp, and yoghurt cools the palate.",
        ],
      },
      {
        h: "Reading a Srinagar wazwan restaurant menu",
        p: [
          "Wazwan restaurant menus list dishes by name, often in Kashmiri. Look for the main dishes: rogan josh, rista, gushtaba, yakhni, tabak maaz and waza kokur. Some menus also offer fixed sets or trami options for two or four people. Ask the waiter which dishes are freshly made that day and which are the restaurant's specialities. Portions are large, so order fewer dishes than you think.",
        ],
      },
      {
        h: "A wazwan lunch plan",
        p: [
          "Book a table for around 1 pm, after a morning of light sightseeing. Start with a short wait for the meal to be served, then take your time over the courses. Wazwan is heavy, so plan a slow afternoon afterwards: a shikara ride, a walk in a garden, or rest at your hotel. Finish the day with kahwa and a light dinner.",
        ],
      },
      {
        h: "Wazwan cooking experiences",
        p: [
          "Some hotels, homestays and local guides arrange cooking experiences where you can watch a waza prepare dishes such as rista and gushtaba, see the pounding of meat, and learn about the spices. These usually need advance booking and a minimum number of guests. They are a good way to understand the work behind wazwan and to meet the cooks.",
        ],
      },
      {
        h: "Leftovers and food waste at a wazwan meal",
        p: [
          "Wazwan is generous, and much food is often left over. In homes, leftovers are shared or packed for guests to take home. In restaurants, you can ask to pack what you cannot finish. Take only what you can eat from the shared platter, and avoid wasting food, which is considered disrespectful.",
        ],
      },
      {
        h: "Drinks with wazwan",
        p: [
          "Water is served with the meal. Alcohol is not part of wazwan and is not served at traditional meals. After the meal, kahwa, the sweet saffron and cardamom green tea, helps digestion. Some restaurants also offer soft drinks or lassi.",
        ],
      },
      {
        h: "The role of the vasta waza",
        p: [
          "The head cook at a wazwan, called the vasta waza, leads a team of assistant cooks who prepare the meal over many hours, often through the night before a wedding. The skills are passed down within families, and some wazas are known across Srinagar for particular dishes. When you eat wazwan prepared by a good waza, you are tasting a craft built over generations.",
        ],
      },
    ],
  },
};
