// TDI depth pass 3, part 3 (2026-11-25): second layer for the batch 3 posts.
// Appended by withAdditions in blog/index.ts. Rules: checkable facts, no
// typed fares or prices, no em dashes, no question asked elsewhere.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const TDI_DEPTH_10_ADDITIONS: Record<string, Addition> = {
  "how-to-choose-a-kashmir-travel-agent": {
    sections: [
      {
        h: "How to read a Kashmir package quote line by line",
        p: [
          "Start with the dates and the number of nights in each place, and check that they add up to your trip. Then read the hotel lines: each should name the property and the room category, with the meal plan written as breakfast only, breakfast and dinner, or all meals. Next, the transport line should name the car model, say whether it stays with you for the whole trip, and list the airport pickup and drop. The sightseeing lines should say which places are covered by the package car and which need union taxis, ponies or tickets that you pay for yourself.",
          "Finally, look at the money: the total, what it includes, the taxes, the advance, when the balance is due, and the cancellation rules. If any line says only 'standard hotel' or 'as per availability', ask for names. If the total looks very low compared with other quotes for the same hotels and car, ask what has been left out.",
        ],
      },
      {
        h: "Booking with an agent in peak season",
        p: [
          "In the tulip weeks, the summer holidays, the Amarnath Yatra months and Christmas to New Year, good hotels and cars sell out. Agents with long-standing relationships can still find rooms, but they may ask for a larger advance or full payment to hold them, since hotels ask the same of agents. That is normal, but get the hotel's own confirmation number once the booking is made, and check it directly with the hotel if you are unsure.",
        ],
      },
      {
        h: "Paying a Kashmir agent safely",
        list: [
          "Pay to a current account in the business name on the invoice, not to a personal account or a different name.",
          "Prefer methods that leave a record: bank transfer, card or UPI to a verified business.",
          "Never pay through links sent by strangers on social media, or to someone who calls claiming to be from the agency with new bank details.",
          "Ask for an invoice or receipt for every payment.",
          "Keep the advance reasonable and pay the balance close to travel or on arrival, as agreed in writing.",
        ],
      },
    ],
  },

  "srinagar-to-gurez-taxi": {
    sections: [
      {
        h: "A Tulail and Chakwali day from Dawar",
        p: [
          "With the same taxi, a full day from Dawar runs up the Tulail valley towards Badwan and Chakwali, with wooden villages, river meadows and views of the high ridges. The road is rough in places and slow, so plan the whole day and carry lunch. Ask your driver to include this day in the quote if you are staying two or more nights in Gurez.",
        ],
      },
      {
        h: "Where the driver stays in Gurez",
        p: [
          "Drivers usually stay at your guesthouse in a drivers' room or with local contacts in Dawar. Confirm before booking whether the guesthouse has space for the driver and who pays for it. If the trip is a one-way drop, the driver may want to start back the same afternoon, so do not plan stops that delay him into darkness on Razdan.",
        ],
      },
    ],
  },

  "kashmir-itinerary-4-and-5-days": {
    sections: [
      {
        h: "A 5-day plan with nights in three places",
        days: [
          "Day 1: arrive in Srinagar, shikara on Dal and a garden visit. Night in Srinagar.",
          "Day 2: drive to Gulmarg, gondola Phase 1 and Phase 2 if the weather is clear. Night in Gulmarg.",
          "Day 3: morning walk on the meadow, drive to Pahalgam via Srinagar. Night in Pahalgam.",
          "Day 4: Aru, Betaab and Chandanwari by union taxi, an evening by the Lidder. Night in Pahalgam.",
          "Day 5: drive to Srinagar airport, about three hours, for an afternoon flight.",
        ],
      },
      {
        h: "A 4-day plan with a Gulmarg night",
        days: [
          "Day 1: arrive in Srinagar, Mughal gardens and a sunset shikara.",
          "Day 2: drive to Gulmarg, gondola, and an evening on the quiet meadow.",
          "Day 3: early gondola or walk, return to Srinagar, old city in the afternoon.",
          "Day 4: Hazratbal or shopping, then the airport.",
        ],
      },
      {
        h: "Four or five days from the Katra train",
        p: [
          "Pilgrims coming from Vaishno Devi can take the train from Katra to Srinagar, which turns the old full-day road journey into a few hours. Arrive in Srinagar by midday, check in and spend the afternoon on Dal. From there, follow the 4 or 5-day plan as usual. On the way back, you can take the train to Katra or Jammu for your onward connection, which avoids a long drive on the last day.",
        ],
      },
      {
        h: "Which parts of a short trip change the cost",
        p: [
          "On a 4 or 5-day trip, the biggest cost differences come from the hotel category, the type of car, whether you stay a night outside Srinagar, the season, and add-ons like the gondola, union taxis and ponies. A houseboat night can cost more or less than a hotel night depending on the category. Ask for quotes with the same hotels and car to compare agencies fairly.",
        ],
      },
      {
        h: "What to drop when snow arrives",
        p: [
          "In winter, Sonamarg and Pahalgam depend on the roads, and Gulmarg's road can close for hours after fresh snow. On a short winter trip, focus on Srinagar and Gulmarg, keep Pahalgam as an option if the road is clear, and drop Sonamarg unless the forecast is good. Keep one day flexible to swap outings around the weather.",
        ],
      },
    ],
    faqs: [
      { q: "Can I do a 5-day Kashmir trip with nights in Gulmarg and Pahalgam?", a: "Yes: one night in Srinagar, one in Gulmarg and two in Pahalgam, with an afternoon flight on day five." },
      { q: "What changes the cost of a 4 or 5-day Kashmir trip most?", a: "The hotel category, the car type, nights outside Srinagar, the season, and add-ons like the gondola and union taxis." },
    ],
  },

  "kashmir-3-day-itinerary": {
    sections: [
      {
        h: "How far is Gulmarg from Srinagar, and how long is the drive?",
        p: [
          "Gulmarg is about 50 km from Srinagar, a drive of about one and a half to two hours. The road crosses the flat country of Budgam and Baramulla districts through Narbal and Magam to Tangmarg, then climbs a series of hairpins through pine forest to Gulmarg. In winter, the Tangmarg climb is where snow and chains slow everything down, and the traffic police may allow only cars with chains or four-wheel drive. On weekends and holidays, leave early to avoid queues on the climb.",
        ],
      },
      {
        h: "Can you stay a night in Gulmarg on a 3-day trip?",
        p: [
          "Yes, and it is often the best way to use three days. Spend day one in Srinagar, drive to Gulmarg on day two for the gondola and the quiet evening, and return to Srinagar on day three in time for the flight. This works best with an afternoon or evening flight on day three. The night in Gulmarg gives you the meadow without crowds and a second chance at the gondola if the weather was poor on day two.",
        ],
      },
      {
        h: "What is there to do in Gulmarg on a short visit?",
        list: [
          "The gondola: Phase 1 to Kongdori, and Phase 2 to Apharwat in clear weather.",
          "Snow play, sledging and skiing lessons in winter.",
          "Pony rides to Khilanmarg in summer.",
          "A walk to St Mary's Church and the Maharani temple.",
          "Views from the golf course over the meadow and the peaks.",
          "In winter, the frozen Drung waterfall near Tangmarg.",
        ],
      },
      {
        h: "Snow, roads and skiing on a short winter trip",
        p: [
          "On a 3-day winter trip, Gulmarg is the focus. The ski season runs from about January to March, and snow covers the meadow for much of that time. If you want to try skiing, book a lesson for the half day you are there; you will learn the basics on the gentle slopes. If the road closes after heavy snow, swap your Srinagar day and keep Gulmarg for the next day.",
        ],
      },
      {
        h: "A short planning checklist",
        list: [
          "Book flights with morning arrival and afternoon or evening departure if possible.",
          "Book the Gulmarg gondola as soon as your dates are fixed.",
          "Choose a Srinagar hotel near Dal for an easy first evening.",
          "Book one car for the whole trip.",
          "Carry warm clothes even in summer, for Gulmarg's heights.",
          "Keep cash for ponies, shikaras and small purchases.",
        ],
      },
      {
        h: "Build your own Srinagar and Gulmarg weekend",
        p: [
          "For a Friday to Sunday weekend, fly in on Friday morning, spend the day in Srinagar, drive to Gulmarg early on Saturday and stay the night, and return on Sunday for an evening flight. This plan gives you the lake, the gardens, the gondola and a quiet mountain evening in just two nights.",
        ],
      },
    ],
    faqs: [
      { q: "Can I stay a night in Gulmarg on a 3-day Kashmir trip?", a: "Yes. Srinagar on day one, Gulmarg on day two with a night there, and back for an afternoon flight on day three." },
      { q: "What is the route from Srinagar to Gulmarg?", a: "Through Narbal and Magam to Tangmarg, then up a series of hairpins to Gulmarg." },
    ],
  },

  "where-to-stay-in-sonamarg": {
    sections: [
      {
        h: "Why Sonamarg is called the meadow of gold",
        p: [
          "Sonamarg means meadow of gold, a name usually explained by the way the meadows glow in the afternoon sun, or by the golden flowers that cover them in spring. The town sits at about 2,800 m along the Sindh river, below the snow peaks that lead to Zojila and Ladakh. It was an old halt on the trade route between Kashmir and Ladakh, and it remains the last town in the valley before the pass.",
        ],
      },
      {
        h: "Sonamarg stays for treks",
        p: [
          "Sonamarg is the starting point for the Kashmir Great Lakes trek, which crosses high passes past Vishansar, Kishansar, Gadsar, Satsar and the Gangabal lakes before ending at Naranag. Trekkers usually spend a night in Sonamarg before starting and leave extra luggage at the hotel or with the trek operator. Shorter treks lead to Thajiwas glacier and the meadows above the town. Choose a hotel near the trailhead and ask whether it can store luggage and arrange an early breakfast.",
        ],
      },
      {
        h: "Sonamarg during the Amarnath Yatra",
        p: [
          "In July and August, the Amarnath Yatra brings large numbers of pilgrims through Sonamarg to the Baltal base camp, about 15 km away. Hotels fill quickly, traffic is heavy, security is tight and there are convoy timings on the road. If you are not on the yatra, book well ahead and expect a busier Sonamarg than in June or September.",
        ],
      },
      {
        h: "Food in Sonamarg",
        p: [
          "Sonamarg's hotels serve North Indian and some Kashmiri food. Dhabas along the main road offer rajma, rice, Maggi, tea and parathas, and stalls sell corn and snacks near the meadows. In the low season, choices are limited, and hotel dinners are the easiest option. Carry snacks if you are going to Thajiwas or Zero Point.",
        ],
      },
      {
        h: "River rafting on the Sindh",
        p: [
          "In summer, rafting runs on the Sindh river near Sonamarg, with stretches for beginners and more challenging rapids. Operators provide life jackets, helmets and guides. Book through your hotel or a registered operator, check the safety gear and follow the guide's briefing. Rafting is usually not possible early in the season, when the river is too high and cold.",
        ],
      },
      {
        h: "Photography in Sonamarg",
        p: [
          "Early morning and late afternoon bring the best light on the meadows and the snow peaks. The Sindh river, the Thajiwas glacier, and the road towards Zojila give strong compositions. In winter, snow covers the town and the light is soft. Respect local people and ask before photographing them, and do not photograph security installations near the road to Zojila.",
        ],
      },
    ],
    faqs: [
      { q: "What does the name Sonamarg mean?", a: "Meadow of gold, often linked to the meadows glowing in afternoon light or golden spring flowers." },
      { q: "Is Sonamarg the start of the Kashmir Great Lakes trek?", a: "Yes. The trek starts near Sonamarg and ends at Naranag, passing Vishansar, Kishansar and the Gangabal lakes." },
      { q: "Is Sonamarg busy during the Amarnath Yatra?", a: "Yes, in July and August, with pilgrims heading to Baltal, heavy traffic and convoy timings." },
      { q: "Is there river rafting in Sonamarg?", a: "Yes, on the Sindh river in summer, with registered operators and safety gear." },
    ],
  },

  "kashmir-taxi-guide": {
    sections: [
      {
        h: "Reading a taxi package quote",
        p: [
          "A clear quote lists each day with the route and the night stop, the car model, the inclusions and the exclusions, the total and the payment terms. It should say whether the driver's stay and food are included, what happens on rest days, and how extra kilometres or hours are charged. If the quote only says 'Kashmir sightseeing', ask for the day-by-day plan.",
        ],
      },
      {
        h: "Driver etiquette and tipping",
        p: [
          "Your driver is with you all day, so be clear about the plan each evening, including meal and rest stops. Most drivers are happy to suggest places to eat and shop, but you are not obliged to buy anything. Tipping is not compulsory, but a tip at the end of a good trip is common and appreciated. Hand it to the driver directly.",
        ],
      },
    ],
    faqs: [
      { q: "Should I tip my driver in Kashmir?", a: "It is not compulsory, but a tip at the end of a good trip is common and appreciated." },
      { q: "Do I have to shop where my Kashmir driver suggests?", a: "No. You are free to buy where you choose, or not at all." },
    ],
  },

  "gulmarg-skiing-and-snow-activities": {
    sections: [
      {
        h: "Ski hire: what to check",
        list: [
          "Boots: they should fit snugly without pain, with heels held in place. Try several sizes.",
          "Skis: the right length for your height and level, with edges that are not rusted or damaged.",
          "Bindings: adjusted for your weight and level by the shop.",
          "Poles: the right length, with straps.",
          "Helmet: a proper ski helmet that fits.",
          "Clothing: waterproof jackets and trousers can be hired if you do not have them.",
        ],
      },
      {
        h: "Getting fit before a ski trip",
        p: [
          "Skiing at altitude is hard on the legs and lungs. In the weeks before your trip, walk, cycle, climb stairs or do squats and lunges to build leg strength. Stretching helps prevent injuries. If you have knee or back problems, talk to a doctor before booking lessons.",
        ],
      },
      {
        h: "Slope rules and etiquette",
        p: [
          "The skier below you has right of way. Do not stop where you cannot be seen, such as below a ridge or in the middle of a narrow slope. Look uphill before starting. Keep control of your speed. Follow signs and closures. If you see an accident, stop and help or alert the ski patrol.",
        ],
      },
      {
        h: "Evenings in Gulmarg in the ski season",
        p: [
          "Gulmarg has no nightlife in the usual sense. Evenings are spent in hotel lounges by the fire, swapping stories with other skiers, eating long dinners and resting for the next day. Some hotels have small cafes and games rooms. Bring books, cards or downloaded films.",
        ],
      },
      {
        h: "Solo skiers and women skiers in Gulmarg",
        p: [
          "Solo skiers find it easy to meet others in Gulmarg's hotels and ski groups. Women skiers ski safely in Gulmarg, especially in groups and with registered instructors and guides. Choose a hotel with good reviews, tell the hotel your plans each day, and never ski off-piste alone.",
        ],
      },
      {
        h: "Heli-skiing in Gulmarg",
        p: [
          "Heli-skiing has operated in Gulmarg in some seasons, flying expert skiers to high slopes beyond the gondola. It depends on permits, operators and weather, and it is not available every year. If it interests you, check with local guides and operators before your trip, and ensure your insurance covers it.",
        ],
      },
    ],
  },

  "vaishno-devi-helicopter-booking-guide": {
    sections: [
      {
        h: "A two-day Vaishno Devi plan with the helicopter",
        days: [
          "Day 1: arrive at Katra by train or road, collect the yatra registration card, rest at the hotel.",
          "Day 2: early report at the Katra helipad, fly to Sanjichhat, walk to the Bhawan for darshan, visit Bhairon temple if possible, fly back or walk down, and rest in Katra.",
        ],
      },
      {
        h: "Katra hotels for helicopter pilgrims",
        p: [
          "Choose a Katra hotel close to the helipad or the main road, so you can reach the helipad easily in the early morning. Many hotels offer early breakfast and luggage storage for pilgrims. Book ahead during Navratri and holidays, when Katra is very busy.",
        ],
      },
      {
        h: "When the helicopter is full",
        p: [
          "If no helicopter seats are available on your dates, consider walking, ponies, palkis or the battery car on parts of the route. Check the Shrine Board's site regularly, since seats sometimes open up due to cancellations. Do not pay agents or websites that promise guaranteed seats outside the official system.",
        ],
      },
    ],
  },

  "where-to-stay-in-kashmir": {
    sections: [
      {
        h: "Offbeat stays across Kashmir",
        list: [
          "Doodhpathri: tourism department huts and a few small guesthouses in meadows west of Srinagar.",
          "Yusmarg: huts and small hotels among pine forests and meadows south-west of Srinagar.",
          "Gurez: homestays, guesthouses and seasonal camps along the Kishanganga.",
          "Lolab and Bangus: huts and guesthouses in the north Kashmir valleys.",
          "Daksum: a government rest house and huts in forest beyond Kokernag.",
          "Aru: guesthouses and huts in the meadow above Pahalgam.",
          "Keran: homestays near the Kishanganga in Kupwara district.",
        ],
      },
      {
        h: "Homestays in Kashmir: what to expect",
        p: [
          "Homestays in Kashmir are family homes with rooms for guests. Expect simple rooms, home-cooked meals and warm hospitality, with fewer facilities than hotels. Some have attached bathrooms; others share. Heating may be a bukhari or electric heater. Homestays suit travellers who want to see local life, and are common in offbeat places like Gurez, Aru and Keran.",
        ],
      },
      {
        h: "Heritage stays in Srinagar",
        p: [
          "A few heritage properties in Srinagar, such as the former royal palace on Gupkar Road and restored old houses in the old city, offer stays with history. Expect old gardens, period architecture and personal service. They suit couples and travellers interested in history and architecture.",
        ],
      },
      {
        h: "Stays for winter snow trips",
        p: [
          "In winter, choose hotels with central heating, power backup and hot water. In Gulmarg, stay close to the gondola. In Srinagar, choose a hotel rather than a houseboat for warmth, or a houseboat with good heating for one night. Sonamarg and Pahalgam have a few hotels open in winter; confirm heating and road access.",
        ],
      },
      {
        h: "Stays for remote workers",
        p: [
          "Remote workers should choose hotels or serviced apartments in Srinagar with reliable Wi-Fi, power backup and a desk. Rajbagh, Jawahar Nagar and Sonwar are good areas. Ask for recent Wi-Fi speed details, and carry a postpaid SIM with data as backup.",
        ],
      },
      {
        h: "Accessible hotels in Kashmir",
        p: [
          "Travellers using wheelchairs or with limited mobility should choose larger hotels with lifts, ramps and accessible bathrooms. Srinagar has the most options. Ask for photos of the bathroom and entrance, and confirm that staff can help with boarding cars and shikaras.",
        ],
      },
      {
        h: "Pet-friendly stays in Kashmir",
        p: [
          "Few hotels in Kashmir accept pets, and those that do often limit them to certain rooms or cottages. Ask in advance and confirm in writing. Houseboats rarely accept pets. Some homestays may be more flexible.",
        ],
      },
      {
        h: "Stays for Amarnath pilgrims",
        p: [
          "Amarnath pilgrims stay in Pahalgam or at the Nunwan base camp for the Pahalgam route, and in Sonamarg or at the Baltal base camp for the Baltal route. Book early, since July and August are the busiest months. Many pilgrims spend a night in Srinagar before and after the yatra.",
        ],
      },
    ],
    faqs: [
      { q: "Are there homestays in Gurez and Aru?", a: "Yes. Homestays are common in offbeat places like Gurez, Aru and Keran." },
      { q: "Are there heritage stays in Srinagar?", a: "Yes, including the former royal palace on Gupkar Road and restored houses in the old city." },
      { q: "Which Kashmir hotels are best for remote work?", a: "Srinagar hotels or serviced apartments in Rajbagh, Jawahar Nagar and Sonwar with reliable Wi-Fi and power backup." },
      { q: "Do Kashmir houseboats accept pets?", a: "Rarely. Ask in advance and confirm in writing." },
      { q: "Where should Amarnath pilgrims stay?", a: "In Pahalgam or Nunwan for the Pahalgam route, and Sonamarg or Baltal for the Baltal route." },
    ],
  },

  "kashmir-trip-for-senior-citizens": {
    sections: [
      {
        h: "A gentle week, day by day",
        days: [
          "Day 1: arrive in Srinagar, rest, a short shikara ride in the evening.",
          "Day 2: Nishat and Shalimar gardens in the morning, rest in the afternoon.",
          "Day 3: drive to Gulmarg, gondola Phase 1, return to Srinagar or stay in Gulmarg.",
          "Day 4: drive to Pahalgam with stops at Pampore and Awantipora.",
          "Day 5: Betaab Valley by union taxi, rest by the Lidder.",
          "Day 6: drive back to Srinagar, Hazratbal in the afternoon.",
          "Day 7: a slow morning, then the airport.",
        ],
      },
      {
        h: "What if someone feels unwell?",
        p: [
          "Srinagar has major hospitals, including SKIMS at Soura and SMHS in Karan Nagar, and many private clinics. District hospitals in Anantnag and Baramulla serve travellers near Pahalgam and Gulmarg, and health centres operate in the main tourist towns. Tell your hotel and driver at once if anyone feels unwell; they know the nearest doctor. Carry copies of prescriptions and a list of medical conditions for each traveller.",
        ],
      },
      {
        h: "Toilets on the road",
        p: [
          "Toilets are a real concern for seniors on long drives. Plan stops at hotels, restaurants and petrol pumps, which usually have the cleanest facilities. Carry tissues, hand sanitiser and a small towel. Ask the driver to stop every hour on long drives.",
        ],
      },
      {
        h: "Sleeping well at altitude",
        p: [
          "Some seniors sleep poorly in the first nights at altitude. Keep the room warm but not too hot, drink water through the day, avoid heavy meals late at night, and use an extra pillow if breathing feels harder. If someone has trouble breathing at night, seek medical advice.",
        ],
      },
      {
        h: "Shopping at an easy pace",
        p: [
          "Seniors who enjoy shopping can visit government emporiums and larger shops on Boulevard Road and Residency Road, where there are seats and help. Avoid crowded old city lanes on busy days. Ask shops to deliver purchases to the hotel.",
        ],
      },
      {
        h: "Seniors and the cold",
        p: [
          "Older bodies feel the cold more. Pack thermals, warm socks, a hat, gloves and a warm jacket, even in summer, for evenings and the mountains. In winter, choose hotels with central heating and electric blankets. Keep a flask of warm water or tea in the car.",
        ],
      },
      {
        h: "Making houseboat nights easier",
        p: [
          "Choose a houseboat moored near the shore with a walkway, or ask staff to help with the shikara. Ask for a room close to the sitting room and the entrance. Check that the bathroom has a non-slip floor and hot water. One night is often enough for seniors.",
        ],
      },
      {
        h: "Pace for travellers over seventy-five",
        p: [
          "For travellers over seventy-five or with health conditions, focus on Srinagar with one or two gentle day trips. Avoid long drives, high altitudes and crowded places. Bring a carer or family member, and plan for rest every afternoon.",
        ],
      },
    ],
    faqs: [
      { q: "Which hospitals in Srinagar are best for emergencies?", a: "SKIMS at Soura and SMHS in Karan Nagar are the main hospitals, with private clinics across the city." },
      { q: "How can seniors sleep better at altitude in Kashmir?", a: "Keep the room warm, drink water through the day, avoid heavy late meals and use an extra pillow." },
      { q: "Should seniors over seventy-five visit Gulmarg?", a: "A gentle day trip with Phase 1 of the gondola is possible; avoid Phase 2 and long walks." },
      { q: "Where can seniors shop easily in Srinagar?", a: "Government emporiums and larger shops on Boulevard Road and Residency Road, with seats and help." },
    ],
  },
};
