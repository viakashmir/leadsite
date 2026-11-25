// TDI depth pass 3, part 2 (2026-11-25): taxi guide, Gulmarg skiing,
// Vaishno Devi helicopter, where to stay in Kashmir and senior citizens posts,
// each paired with tdiholidayventures.com pages. Appended by withAdditions in
// blog/index.ts. Rules: checkable facts, no typed fares or prices, no em
// dashes, no question asked elsewhere.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const TDI_DEPTH_9_ADDITIONS: Record<string, Addition> = {
  "kashmir-taxi-guide": {
    sections: [
      {
        h: "What is a Kashmir taxi package?",
        p: [
          "A taxi package is a car and driver booked for your whole trip, usually from the day you land in Srinagar to the day you leave, without hotels. The driver collects you at the airport, takes you on each day's sightseeing, drives you between towns and waits while you visit. You book your own hotels or houseboats. It suits travellers who want to choose their own stays, people visiting friends or family, and those who already have hotel deals.",
        ],
      },
      {
        h: "Which taxi package suits your trip?",
        list: [
          "Airport and city: transfers plus a Srinagar sightseeing day, for short city trips.",
          "Classic valley: Srinagar, Gulmarg, Pahalgam and Sonamarg over five to seven days.",
          "Winter snow: Srinagar and Gulmarg, with Sonamarg or Pahalgam depending on roads.",
          "Offbeat: Doodhpathri, Yusmarg, Gurez, Keran or Bangus added to the classic route.",
          "Pilgrim: Jammu or Katra to Srinagar, with Vaishno Devi before or after.",
          "Ladakh road trip: Srinagar to Leh over Zojila, with a Ladakh-registered taxi for local sightseeing.",
        ],
      },
      {
        h: "What is included, and what do you add?",
        p: [
          "A taxi package usually includes the car, the driver, fuel, tolls, parking, and the driver's food and stay. It usually does not include union taxis in Pahalgam, Sonamarg and Gulmarg, ponies, the gondola, entry tickets, your meals or your hotels. Ask the operator to list both in writing. If the plan changes on the ground, agree any extra charge with the driver and the operator before the extra drive.",
        ],
      },
      {
        h: "How can you customise a taxi package?",
        p: [
          "Start from a standard route and change the order, add or drop days, swap a sedan for an SUV, or add an offbeat valley. Tell the operator your hotel locations so the driver can plan pickups. If you want a rest day, ask whether the car and driver will be charged for it; many operators charge a lower rate for idle days. For long trips, ask for one driver throughout.",
        ],
      },
      {
        h: "When do roads and the ski season affect a taxi package?",
        p: [
          "In winter, snow can close the Gulmarg, Sonamarg and Pahalgam roads for hours or days, and the Jammu highway occasionally. Drivers carry chains and four-wheel-drive cars may be needed. In the ski season, Gulmarg roads and parking are busy. Taxi packages in winter should include flexible days and an agreement on what happens if a day is lost to snow.",
        ],
      },
    ],
    faqs: [
      { q: "What does a Kashmir taxi package include?", a: "Usually the car, driver, fuel, tolls, parking, and the driver's food and stay, but not hotels, union taxis, ponies or tickets." },
      { q: "Can I book a Kashmir taxi package without hotels?", a: "Yes. A taxi package is a car and driver for the whole trip; you book your own stays." },
      { q: "Is a rest day charged on a Kashmir taxi package?", a: "Often at a lower rate for idle days. Ask the operator before booking." },
      { q: "Can I change the route on a Kashmir taxi package?", a: "Yes, but agree any extra charge with the driver and operator before the extra drive." },
      { q: "What happens to a Kashmir taxi package if snow closes a road?", a: "Agree in advance on flexible days and what happens if a day is lost to snow." },
      { q: "Is the same driver used for the whole Kashmir taxi package?", a: "Usually. Ask for one driver throughout when booking long trips." },
    ],
  },

  "gulmarg-skiing-and-snow-activities": {
    sections: [
      {
        h: "What kind of skiing is Gulmarg?",
        p: [
          "Gulmarg is known worldwide for deep powder and long descents rather than groomed resort runs. The gondola rises to the shoulder of Apharwat, close to 4,000 m, and from there skiers descend through open bowls and forest towards Kongdori and Gulmarg. Lower down, gentle slopes near the base and the Kongdori area have beginner lifts and space for lessons. There are few groomed pistes compared with Alpine resorts, and facilities are simpler, so Gulmarg suits skiers who want snow and terrain over polish. Experts come for the off-piste; beginners can learn on the lower slopes.",
        ],
      },
      {
        h: "Which level are you, and what should you book?",
        list: [
          "Never skied: book a beginner course or private lessons on the lower slopes, with ski hire. Plan at least three to five days.",
          "Beginner who can turn and stop: lessons on the Kongdori slopes and the gondola Phase 1.",
          "Intermediate: guided days on the Kongdori bowls and Phase 2 on good days.",
          "Advanced and expert: a certified mountain guide for off-piste and Apharwat, with avalanche gear.",
          "Snowboarders: the same levels apply; boards and instructors are available.",
        ],
      },
      {
        h: "What does a first day on skis look like?",
        p: [
          "Your instructor will fit your boots and skis at the hire shop, then take you to a gentle slope near the base. You will learn to walk on skis, stand, slide a short distance and stop using the snowplough. By the end of the day, most beginners can slide and stop on gentle ground. It is tiring, especially at altitude, so take breaks, drink water and stop before you are exhausted. Progress comes on days two and three.",
        ],
      },
      {
        h: "When is the ski season, and what if the snow is thin?",
        p: [
          "The season usually runs from about mid-December or January to March, with the best and most reliable snow in January and February. Early and late season can have thin cover on the lower slopes, while Apharwat still holds snow. If the snow is thin, focus on lessons near the gondola stations, use Phase 1 and Phase 2 to reach better snow, and keep flexible dates. Check snow reports and recent photos from local guides before you book.",
        ],
      },
      {
        h: "What should you check about lifts and safety?",
        p: [
          "Check that the gondola is running on your dates, since maintenance or strong winds can close it. Avalanche warnings are issued for the Gulmarg area by the defence research establishment that monitors snow and avalanches in the Himalaya; follow them and the advice of the ski patrol and guides. Never ski off-piste without a certified guide, avalanche transceiver, probe and shovel. Wear a helmet, and take out insurance that covers skiing.",
        ],
      },
      {
        h: "How do you plan the stay and quote?",
        p: [
          "Ask for a quote that includes a hotel near the gondola base, ski hire, lessons or a guide for each day, gondola tickets, transfers from Srinagar, and meals. Check what level of instruction is included and whether instructors are certified. Book early for January and February, and keep a day or two spare for weather.",
        ],
      },
      {
        h: "What should you pack for skiing in Gulmarg?",
        list: [
          "Waterproof ski jacket and trousers.",
          "Thermal base layers and fleece mid-layers.",
          "Ski socks, gloves, a hat and a neck warmer.",
          "Goggles and sunglasses with strong UV protection.",
          "Sunscreen and lip balm.",
          "A small backpack, water bottle and snacks.",
          "A helmet, if you have one; they can also be hired.",
        ],
      },
      {
        h: "How should you handle altitude and cold?",
        p: [
          "Gulmarg sits at about 2,650 m and Apharwat close to 4,000 m. Spend your first day on the lower slopes, drink plenty of water, eat well and avoid alcohol. Watch for headaches, dizziness or breathlessness, and come down if they get worse. In the cold, keep your face covered on the gondola and at the top, and warm up regularly in the cafes at the stations.",
        ],
      },
      {
        h: "A sample 5-day ski trip",
        days: [
          "Day 1: fly to Srinagar, drive to Gulmarg, fit equipment.",
          "Day 2: lessons on the beginner slopes or a warm-up day on Kongdori.",
          "Day 3: lessons or guided skiing on Kongdori bowls.",
          "Day 4: Phase 2 to Apharwat if the weather and your level allow.",
          "Day 5: a last morning on the slopes, then drive to Srinagar.",
        ],
      },
    ],
    faqs: [
      { q: "Is Gulmarg good for groomed piste skiing?", a: "Gulmarg has few groomed pistes; it is known for powder and off-piste terrain, with beginner slopes near the base." },
      { q: "Can intermediate skiers enjoy Gulmarg?", a: "Yes, on the Kongdori bowls and, on good days, Phase 2 with a guide." },
      { q: "What happens on a first day of skiing in Gulmarg?", a: "Boot fitting, then learning to stand, slide and stop on gentle ground with an instructor." },
      { q: "What if the snow is thin in Gulmarg?", a: "Use the gondola to reach better snow higher up, focus on lessons and keep dates flexible." },
      { q: "Who issues avalanche warnings for Gulmarg?", a: "A defence research establishment that monitors snow and avalanches in the Himalaya. Follow its warnings and the ski patrol." },
      { q: "Should I wear a helmet skiing in Gulmarg?", a: "Yes. Helmets can be hired in Gulmarg if you do not have one." },
      { q: "What should a Gulmarg ski package include?", a: "A hotel near the gondola, ski hire, lessons or a guide, gondola tickets, transfers and meals." },
      { q: "How many days should a first-time skier plan in Gulmarg?", a: "At least three to five days of lessons to ski with confidence on gentle slopes." },
      { q: "Do I need insurance for skiing in Gulmarg?", a: "Yes. Take insurance that covers skiing and mountain rescue." },
      { q: "What equipment do I need for off-piste skiing in Gulmarg?", a: "A certified guide, an avalanche transceiver, probe and shovel, plus a helmet." },
      { q: "Is Apharwat suitable for beginner skiers?", a: "No. Apharwat's terrain is for advanced and expert skiers with a guide." },
      { q: "Are there cafes at the gondola stations in Gulmarg?", a: "Yes, simple cafes at the stations where skiers can warm up." },
      { q: "Can I ski in Gulmarg in March?", a: "Usually yes, though lower slopes may have thinner snow; Apharwat often holds good snow." },
    ],
  },

  "vaishno-devi-helicopter-booking-guide": {
    sections: [
      {
        h: "Start with the Shrine Board's official booking service",
        p: [
          "Helicopter tickets from Katra to Sanjichhat are sold through the Shri Mata Vaishno Devi Shrine Board's official website and app. Create an account, select the date, enter each passenger's details exactly as on their ID, and pay online. Keep the booking confirmation on your phone and in print. Booking windows open in advance and seats sell out quickly in peak season, so book as soon as your dates are fixed.",
        ],
      },
      {
        h: "Allow time for the helipad and onward yatra",
        p: [
          "Reach the Katra helipad well before your reporting time for check-in, security and weighing. After landing at Sanjichhat, the walk to the Bhawan takes about an hour, with queues for darshan that vary with the season. Then you return to Sanjichhat for the flight back, or walk down. Plan a full day, and do not book onward travel for the same afternoon.",
        ],
      },
      {
        h: "Verify passenger details and packing limits",
        p: [
          "Names and ID numbers must match the booking exactly. Children may need tickets depending on age; check the current rules. Baggage is limited to a small bag per person, and passengers may be weighed. Leave large bags at your Katra hotel or the cloakroom, and carry only water, medicines, a warm layer and your documents.",
        ],
      },
      {
        h: "Keep the road and room plan flexible",
        p: [
          "Weather can delay or cancel helicopter flights. Keep your Katra hotel booking flexible, with an extra night if possible, and do not book the Kashmir leg too tightly after the yatra. If flights are cancelled, follow the Shrine Board's rules on refunds and rescheduling, or walk or use a pony or palki from Katra.",
        ],
      },
      {
        h: "Plan the Kashmir leg after the pilgrimage",
        p: [
          "After the yatra, rest a night in Katra. The next morning, take the train from Katra to Srinagar, or drive via the national highway. Pilgrims who want to combine Vaishno Devi with Kashmir often spend five or six days in the valley after the yatra.",
        ],
      },
      {
        h: "Is the helicopter worth it?",
        p: [
          "For older pilgrims, those with knee or heart problems, and families with small children, the helicopter saves most of the climb from Katra. Fit pilgrims who want the traditional walk may prefer to climb. The helicopter also saves time for those with tight schedules. Consider your health, budget and the experience you want.",
        ],
      },
    ],
    faqs: [
      { q: "Do helicopter passenger names need to match ID exactly?", a: "Yes. Names and ID numbers must match the booking exactly." },
      { q: "Should I book onward travel on the same day as the helicopter yatra?", a: "No. Plan a full day for the yatra and rest a night in Katra before travelling on." },
      { q: "Can I take the train to Srinagar after Vaishno Devi?", a: "Yes. Trains run from Katra to Srinagar through the Chenab bridge." },
      { q: "Is the Vaishno Devi helicopter worth it for fit pilgrims?", a: "It saves time, but fit pilgrims who want the traditional experience often prefer to walk." },
      { q: "What should I carry on the Vaishno Devi helicopter?", a: "Only a small bag with water, medicines, a warm layer and your documents." },
      { q: "Where can I leave luggage before the Vaishno Devi helicopter?", a: "At your Katra hotel or a cloakroom near the helipad." },
      { q: "Do I need the Shrine Board app to book the helicopter?", a: "You can book on the official website or app. Use only these official channels." },
    ],
  },

  "where-to-stay-in-kashmir": {
    sections: [
      {
        h: "Which base suits your Kashmir trip?",
        p: [
          "Most travellers use Srinagar as the main base, with day trips to Gulmarg, Pahalgam and Sonamarg. It has the most hotels and houseboats, the best restaurants and easy airport access. Adding a night in Gulmarg, Pahalgam or Sonamarg turns a long return drive into a relaxed stay and lets you see each place in the early morning and evening. A balanced week might use three bases: Srinagar, Gulmarg and Pahalgam.",
        ],
      },
      {
        h: "What registration should you check?",
        p: [
          "Hotels and houseboats in Jammu and Kashmir are expected to register with the Department of Tourism. Houseboats are graded into categories by the department. Ask your hotel or houseboat for its registration, and book through official channels or established agencies. Registered properties are more accountable if something goes wrong.",
        ],
      },
      {
        h: "When should you look for rooms?",
        list: [
          "Tulip season, late March to mid April: book two to three months ahead.",
          "Summer holidays, May and June: book two to three months ahead.",
          "Amarnath Yatra, July and August: Pahalgam and Sonamarg fill early.",
          "Autumn, September to November: easier, but book Gulmarg and Pahalgam a month ahead.",
          "Christmas and New Year: Gulmarg sells out months ahead.",
          "January to March: Gulmarg is busy with skiers; Srinagar is quieter.",
        ],
      },
      {
        h: "How do you compare prices by budget?",
        p: [
          "Compare hotels on the same terms: room type, meal plan, taxes, heating and location. A cheaper room far from the centre can cost more once cab fares are added. In Gulmarg and Pahalgam, location near the gondola or the river can matter more than the star rating. Ask for an all-inclusive price.",
        ],
      },
      {
        h: "What should you check about nearby places?",
        p: [
          "Check how far the hotel is from the places you plan to visit, the nearest restaurants, ATMs and medical help, and parking. In Srinagar, a hotel on Boulevard Road is close to Dal and the gardens; in Gulmarg, near the gondola; in Pahalgam, near the taxi stand or the river; in Sonamarg, near the glacier trail.",
        ],
      },
      {
        h: "Srinagar hotels and houseboats",
        p: [
          "Srinagar offers palace hotels, lake-view hotels on the Zabarwan slopes, Boulevard Road hotels facing Dal, riverside hotels in Rajbagh, and houseboats on Dal and Nigeen. Most travellers stay a night or two on a houseboat and the rest in a hotel for comfort and heating.",
        ],
      },
      {
        h: "Gulmarg hotels for the meadow and gondola",
        p: [
          "Gulmarg's hotels sit around the meadow and near the gondola base. Choose a hotel near the gondola for skiing or an early start, or one on the meadow for walks and views. In winter, check heating and power backup.",
        ],
      },
      {
        h: "Pahalgam hotels in town and the Lidder Valley",
        p: [
          "Pahalgam's hotels are in the market area, along the Lidder river and on the Aru road. Riverside rooms are popular; market hotels are convenient for union taxis.",
        ],
      },
      {
        h: "Sonamarg hotels, guest rooms and cottages",
        p: [
          "Sonamarg has hotels on the main road, tourism department huts and seasonal camps. More hotels now open in winter since the Z-Morh tunnel opened.",
        ],
      },
    ],
    faqs: [
      { q: "Are Kashmir hotels registered with the tourism department?", a: "They are expected to register with the Department of Tourism. Ask the property for its registration." },
      { q: "When should I book hotels for the tulip season?", a: "Two to three months ahead for late March to mid April." },
      { q: "Should I use Srinagar as my only base in Kashmir?", a: "It works, but adding nights in Gulmarg or Pahalgam makes the trip more relaxed." },
      { q: "How early should I book Gulmarg for New Year?", a: "Several months ahead, since Gulmarg sells out for Christmas and New Year." },
      { q: "Is a hotel near Dal Lake better than one in Rajbagh?", a: "Dal is closer to the lake and gardens; Rajbagh is quieter and close to the old city." },
      { q: "How do I compare hotel prices in Kashmir?", a: "Compare room type, meal plan, taxes, heating and location, and ask for an all-inclusive price." },
      { q: "Which Pahalgam hotels are near the union taxi stand?", a: "Hotels in the market area, within walking distance of the taxi stand." },
      { q: "Are there cottages in Sonamarg?", a: "Yes, including tourism department huts and some private cottages." },
      { q: "Are houseboats in Kashmir graded?", a: "Yes. The Department of Tourism grades houseboats into categories." },
      { q: "How many bases should a week-long Kashmir trip have?", a: "Three works well: Srinagar, Gulmarg and Pahalgam." },
    ],
  },

  "kashmir-trip-for-senior-citizens": {
    sections: [
      {
        h: "Compare Kashmir packages by pace and nights",
        p: [
          "For seniors, the number of nights matters more than the number of places. A good senior package has at least six or seven nights, two or three bases, no more than one long drive a day, and rest time each afternoon. Compare packages by how many hours each day is spent in the car, not just by the list of places. Ask the operator to remove one place rather than squeeze the days.",
        ],
      },
      {
        h: "Check vehicle boarding and the length of drives",
        p: [
          "An SUV like the Innova Crysta has a higher step than a sedan but more room. Ask whether the car has a step or handle, and captain seats in the middle row. Keep drives under three hours where possible, with stops every hour for toilets and stretching. Ask the driver to drive gently on hill roads, and to keep the heater or AC at a comfortable level.",
        ],
      },
      {
        h: "Choose rooms around the route from the car",
        p: [
          "Ask how far the room is from where the car stops. Some hotels have long paths, stairs or steep lawns between the car park and the rooms. Ask for a ground-floor room or one near the lift, with a bathroom that has grab rails and a non-slip floor. Houseboats need a shikara or walkway; check whether staff will help.",
        ],
      },
      {
        h: "Match the outings to the group's mobility",
        list: [
          "Easy: shikara rides, Mughal gardens' lower terraces, Hazratbal, Boulevard Road drives, Betaab Valley's flat paths.",
          "Moderate: gondola Phase 1, Pari Mahal, Tulip Garden in season.",
          "Harder: Phase 2 of the gondola, Thajiwas glacier walk, Shankaracharya temple steps.",
          "Ponies and palkis can help on some trails, but check comfort and safety.",
        ],
      },
      {
        h: "Check altitude, weather and individual needs",
        p: [
          "Talk to each traveller's doctor before the trip, especially for heart, lung, blood pressure or diabetes conditions. Carry enough medicines for the whole trip plus extra, with prescriptions. Pack warm layers even in summer. Stay hydrated and eat light, familiar food. Avoid Phase 2 of the gondola and high passes for those with heart or breathing problems.",
        ],
      },
      {
        h: "Choose a season around the outings you want",
        p: [
          "April to June and September to October are the most comfortable months for seniors, with mild days and cool nights. Summer is pleasant but busy. Winter is cold, with short days and slippery paths; seniors who want snow should stay in Srinagar and Gulmarg with good heating.",
        ],
      },
      {
        h: "Give the planner the details that affect the trip",
        list: [
          "Ages and mobility of each traveller.",
          "Health conditions, medicines and diet.",
          "Need for a wheelchair, walker or assistance.",
          "Preferred pace and rest times.",
          "Room preferences: ground floor, lift, bathroom grab rails.",
          "Interests: gardens, shrines, scenery, shopping.",
        ],
      },
    ],
    faqs: [
      { q: "How many nights should a senior citizen Kashmir package have?", a: "At least six or seven nights, with two or three bases and rest each afternoon." },
      { q: "Which car is easiest for seniors to board in Kashmir?", a: "An SUV with a step or handle and captain seats, such as an Innova Crysta." },
      { q: "How long should daily drives be for seniors in Kashmir?", a: "Under three hours where possible, with stops every hour." },
      { q: "Which Kashmir outings are easiest for seniors?", a: "Shikara rides, the lower terraces of the Mughal gardens, Hazratbal and Betaab Valley's flat paths." },
      { q: "Should seniors consult a doctor before a Kashmir trip?", a: "Yes, especially for heart, lung, blood pressure or diabetes conditions." },
      { q: "What room should seniors ask for in Kashmir hotels?", a: "A ground-floor room or one near the lift, with grab rails and a non-slip bathroom floor." },
    ],
  },
};
