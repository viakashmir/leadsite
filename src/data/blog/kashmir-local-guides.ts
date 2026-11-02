import type { BlogPost } from "./types";

// Kashmir on-the-ground guides: taxis, Gulmarg in winter, where to stay, food.
// Facts checked 2026-11-03: union taxi systems in Pahalgam, Sonamarg and
// Gulmarg (rates set by unions each season, so none quoted); Gondola Phase 1
// Gulmarg (about 2,650 m) to Kongdori (about 3,050 m), Phase 2 to Apharwat
// (about 3,980 m), tickets online from the J&K Cable Car Corporation, slots
// sell out in peak weeks; houseboats graded by J&K Tourism. Distances are
// approximate road distances from Srinagar. No em dashes, no invented prices.

export const KASHMIR_LOCAL_GUIDES: BlogPost[] = [
  {
    slug: "kashmir-taxi-guide",
    title: "Kashmir Taxi Guide: Union Taxis, Cab Types, Distances and Fair Rates",
    description:
      "How taxis work in Kashmir: Srinagar cabs vs union taxis in Pahalgam, Gulmarg and Sonamarg, which car to book, distances, rate cards and fair prices.",
    category: "Planning",
    destination: "kashmir",
    date: "2026-11-03",
    intro:
      "Getting around Kashmir is simple once you understand one rule: your Srinagar cab takes you between towns, but local union taxis and ponies run the sightseeing inside Pahalgam, Sonamarg and, for some points, Gulmarg. Most first-time visitors are surprised by this and assume they are being cheated when their driver stops at a taxi stand. They are not. It is how the local transport unions work, and rates are fixed by those unions each season. This guide explains which car to book, how the union system works in each town, typical distances and drive times from Srinagar, and how to make sure you pay the fair rate.",
    sections: [
      {
        h: "How transport works in Kashmir",
        list: [
          "Your main cab: a Srinagar-registered tourist taxi, booked for the whole trip or day by day. It does airport transfers, Srinagar sightseeing and the drives between Srinagar, Gulmarg, Pahalgam and Sonamarg.",
          "Pahalgam: outside cabs drop you in the town. Aru Valley, Betaab Valley and Chandanwari are covered by local Pahalgam union taxis from the town's taxi stand.",
          "Sonamarg: outside cabs stop in the town. Zero Point and some higher points are covered by local union vehicles, and Thajiwas glacier by pony or on foot.",
          "Gulmarg: your cab drives up to Gulmarg. Inside the meadow you walk, take a pony or a sledge, and use the Gondola for Kongdori and Apharwat.",
          "Srinagar: your own cab, autos, app-based cabs in parts of the city, and shikaras on the lakes.",
        ],
      },
      {
        h: "Why outside cabs cannot do local sightseeing",
        p: [
          "In Pahalgam and Sonamarg, local taxi unions hold the rights to sightseeing routes. Taxis from Srinagar or elsewhere are not allowed to carry tourists on those routes, and drivers who try can be stopped. The system protects the incomes of local drivers in valleys with a short season, and the administration supports it.",
          "For you, it simply means budgeting for a second, local vehicle in these two places. Your Srinagar driver waits in the town or at your hotel while you go up with the union taxi.",
        ],
      },
      {
        h: "Which cab should you book?",
        list: [
          "Sedan (Dzire, Etios or similar): best for couples and up to three adults with light luggage. The most economical choice in summer.",
          "Compact SUV or MUV (Ertiga or similar): four to five people, with more boot space.",
          "Innova or Innova Crysta: the standard family car in Kashmir, comfortable for five to six people, and the best choice for long drives and winter roads.",
          "Tempo Traveller: groups of 9 to 12, but slower on hill roads and not always allowed up to every point.",
          "In winter, ask for a 4x4 or a car with snow chains available, especially for Gulmarg and Sonamarg after fresh snow.",
        ],
      },
      {
        h: "Distances and drive times from Srinagar",
        p: [
          "Times below are for normal conditions. In winter, add time for snow, chains and slow traffic, and in summer for weekend crowds near Tangmarg and Pahalgam.",
        ],
        list: [
          "Srinagar airport to the city centre or Dal Lake: about 12 to 15 km, 30 to 45 minutes.",
          "Srinagar to Gulmarg: about 50 km, 1.5 to 2 hours via Tangmarg.",
          "Srinagar to Pahalgam: about 90 to 95 km, 2.5 to 3 hours via Pampore and Anantnag.",
          "Srinagar to Sonamarg: about 80 km, 2.5 to 3 hours along the Sindh river.",
          "Srinagar to Doodhpathri: about 42 km, 1.5 to 2 hours.",
          "Srinagar to Yusmarg: about 47 km, 1.5 to 2 hours.",
          "Gulmarg to Pahalgam: about 140 km via Srinagar, 4 to 4.5 hours.",
          "Jammu to Srinagar: about 250 km by NH 44, roughly 6 to 8 hours depending on traffic and weather.",
        ],
      },
      {
        h: "Pahalgam union taxis: how it works",
        list: [
          "Go to the Pahalgam taxi stand (your driver will take you), or ask your hotel to arrange a union taxi.",
          "The usual points are Aru Valley, Betaab Valley and Chandanwari. Most visitors cover all three in a half day to a full day.",
          "Rates are set by the Pahalgam taxi union and displayed at the stand. Rates are per vehicle, not per person, so a full car is better value.",
          "Chandanwari is closed or only partly reachable after heavy snow, so ask before agreeing the route.",
          "Baisaran meadow, once reached by pony from Pahalgam, has been closed to visitors since April 2025.",
        ],
      },
      {
        h: "Sonamarg: union vehicles and ponies",
        list: [
          "Sightseeing beyond the town, to Zero Point and other higher points when they are open, is done in local union vehicles.",
          "Thajiwas glacier is about 3 km from the main meadow. Walk it, or take a pony at the union rate. In winter, sledge pullers offer rides on the snow.",
          "Ask to see the printed rate card before agreeing anything, and agree whether the rate includes waiting time.",
        ],
      },
      {
        h: "Gulmarg: ponies, sledges and the Gondola",
        list: [
          "Your cab reaches Gulmarg. After fresh snow, it needs chains, which drivers fit at Tangmarg, about 13 km below.",
          "Inside Gulmarg, ponies (summer) and sledges (winter) run on union rates to the Gondola base, St Mary's Church and the snow slopes.",
          "Pony and sledge operators will often approach you before you reach the meadow. You do not need one to reach the Gondola base: it is a short walk from the main hotels.",
          "Gondola tickets are sold online by the J&K Cable Car Corporation. Book them before you arrive in peak season.",
        ],
      },
      {
        h: "How to avoid overpaying",
        list: [
          "Ask for the official rate card at every taxi stand and pony point. Unions and the tourism department display them.",
          "Agree the route, duration and price before you start, and confirm whether waiting time is included.",
          "For ponies, ask if the rate is one way or return, and whether the pony handler's fee is included.",
          "Book your main cab through your agent or hotel, with the itinerary written down, so there are no surprises about which drives are included.",
          "If something feels wrong, contact the J&K Tourism helpline or the police tourist assistance desk. Most disputes are settled quickly.",
        ],
      },
      {
        h: "Airport and railway transfers",
        list: [
          "Srinagar airport has a prepaid taxi counter, and most packages include airport pickup and drop.",
          "Leave for the airport early. There is a security check at the airport entry gate before you reach the terminal, and queues can be long.",
          "Srinagar railway station, served by the Vande Bharat trains from Katra, is at Nowgam on the city's southern edge. Arrange a pickup in advance.",
          "From Jammu or Katra by road, shared cabs and private taxis run to Srinagar. Private taxis are safer and more flexible in winter.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why can't my Srinagar cab take me to Aru and Betaab Valley?",
        a: "Pahalgam's local taxi union holds the rights to those routes. Outside cabs drop you in town, and you take a Pahalgam union taxi for Aru, Betaab and Chandanwari.",
      },
      {
        q: "Are Pahalgam union taxi rates fixed?",
        a: "Yes. The union sets and displays them each season. Rates are per vehicle, so ask for the rate card at the stand and agree the route first.",
      },
      {
        q: "Which car is best for a Kashmir trip?",
        a: "A sedan for couples in summer, and an Innova or Innova Crysta for families and for winter roads. Ask about chains or a 4x4 for snow.",
      },
      {
        q: "How far is Gulmarg from Srinagar?",
        a: "About 50 km, or 1.5 to 2 hours by road via Tangmarg. Allow extra time in snow, when chains are fitted at Tangmarg.",
      },
      {
        q: "How far is Pahalgam from Srinagar?",
        a: "About 90 to 95 km, or 2.5 to 3 hours by road via Pampore and Anantnag.",
      },
      {
        q: "How far is Sonamarg from Srinagar?",
        a: "About 80 km, or 2.5 to 3 hours along the Sindh valley. The Z-Morh tunnel keeps it reachable in winter, except after heavy snow.",
      },
      {
        q: "Do I need a union taxi in Gulmarg?",
        a: "No union taxi is needed inside Gulmarg. You walk, ride a pony or sledge, or take the Gondola. Your own cab drives you up to Gulmarg.",
      },
      {
        q: "Is there Uber or Ola in Srinagar?",
        a: "App-based cabs operate in parts of Srinagar, but coverage is patchy. For sightseeing and intercity drives, a pre-booked tourist cab is more reliable.",
      },
      {
        q: "How do I avoid being overcharged for ponies?",
        a: "Ask for the printed union rate card, agree whether the price is one way or return, and settle everything before you start.",
      },
      {
        q: "How early should I leave for Srinagar airport?",
        a: "At least 2.5 hours before your flight. There is a security check at the airport entry gate, then the usual terminal checks.",
      },
    ],
  },
  {
    slug: "gulmarg-in-winter-guide",
    title: "Gulmarg in Winter: Snow, Gondola, Skiing and What to Do if Phase 2 Closes",
    description:
      "Gulmarg in winter: snow months, Gondola Phase 1 and 2 booking, beginner skiing, things to do without the Gondola, stay vs day trip, chains at Tangmarg and tips.",
    category: "Adventure",
    destination: "kashmir",
    city: "gulmarg",
    date: "2026-11-03",
    intro:
      "Gulmarg in winter is India's best-known snow destination: a high meadow at about 2,650 m, buried in snow from December to March, with a Gondola that climbs to Kongdori and on to Apharwat at about 3,980 m. It is a day trip from Srinagar, about 50 km away, but staying a night or two changes the experience completely, because you get the snow at its quietest in the early morning and evening. This guide covers when the snow comes, how to book the Gondola, how beginners can try skiing, what to do when Phase 2 is closed, and the practical details of chains, clothing and heating.",
    sections: [
      {
        h: "When is there snow in Gulmarg?",
        list: [
          "November: first snow on Apharwat and Kongdori, sometimes reaching the meadow late in the month.",
          "December: snow cover in the meadow in most years by mid-month. Busy from Christmas to New Year.",
          "January: deep snow, very cold nights and the most reliable snow cover.",
          "February: deepest snow base in many years and the peak ski month.",
          "March: good snow higher up, softening in the meadow, with sunnier and warmer days.",
          "April: snow lingers on the upper slopes; the meadow starts turning green.",
        ],
      },
      {
        h: "The Gulmarg Gondola explained",
        p: [
          "The Gulmarg Gondola is one of the highest cable cars in the world. It runs in two stages, and each needs its own ticket.",
        ],
        list: [
          "Phase 1: Gulmarg base (about 2,650 m) to Kongdori (about 3,050 m). Short and open in most weather. Kongdori has snow slopes, sledging and a café.",
          "Phase 2: Kongdori to Apharwat (about 3,980 m). Spectacular views of the Pir Panjal and, on clear days, Nanga Parbat in the distance. Often closes in high wind, poor visibility or for avalanche control.",
          "Tickets are sold online on the J&K Cable Car Corporation portal in time slots. Carry the same photo ID you booked with.",
          "Book as soon as your Gulmarg date is fixed in peak weeks: Christmas to New Year, weekends in January and February, and Holi in March.",
          "Go early. The first slots have shorter queues, calmer weather and the best light. Phase 2 is more likely to run in the morning.",
          "If Phase 2 closes after you have booked, refunds follow the corporation's rules. Keep your booking confirmation.",
        ],
      },
      {
        h: "Skiing in Gulmarg for beginners",
        list: [
          "You do not need any experience. Beginners take lessons on the gentle slopes near the Gulmarg bowl and at Kongdori.",
          "Use an instructor registered with the local ski associations or J&K Tourism. Agree the hourly or daily rate and what equipment it includes.",
          "Two or three sessions are enough to start making controlled turns. One session gives you a feel for it.",
          "Hire skis, boots, poles and snow clothing in Gulmarg. Check boot fit and bindings before you pay.",
          "For structured training, the Indian Institute of Skiing and Mountaineering (IISM) in Gulmarg runs courses in winter. Apply well in advance.",
          "Experienced skiers can ski off-piste from Apharwat, but only with a certified guide, avalanche gear and the day's avalanche advisory.",
        ],
      },
      {
        h: "Things to do in Gulmarg in winter without the Gondola",
        p: [
          "Phase 2 closes often in winter, and sometimes Phase 1 does too. Gulmarg is still worth it, because the meadow itself is the main attraction under snow.",
        ],
        list: [
          "Sledge rides on the meadow slopes. Agree the rate and how many runs it includes.",
          "Snow scooter (snowmobile) and ATV rides on marked routes.",
          "Walk to St Mary's Church, built in 1902, and the hilltop Maharani (Rani) temple, both beautiful in snow.",
          "A slow walk across the meadow and the old golf course, with the Affarwat range behind.",
          "Igloo cafés have been built in Gulmarg in recent winters; ask locally if one is running.",
          "Drang waterfall, near Tangmarg, partly freezes in deep winter and makes a good stop on the drive up.",
          "Beginner ski lessons on the lower slopes, which do not need the Gondola at all.",
        ],
      },
      {
        h: "Stay in Gulmarg or day trip from Srinagar?",
        list: [
          "Stay: best for honeymooners, skiers and anyone who wants the meadow without crowds. You can take the first Gondola slot and enjoy the sunset on the snow. Rooms in Gulmarg cost more than similar rooms in Srinagar.",
          "Day trip: fine for families on a budget or short trips. Leave Srinagar by 8 am to beat the traffic at Tangmarg and reach the Gondola early.",
          "Tangmarg: hotels in Tangmarg, about 13 km below Gulmarg, are cheaper but mean a drive up and down on snowy roads each day.",
          "Many winter itineraries include one Gulmarg night: it is the single upgrade most travellers are glad they paid for.",
        ],
      },
      {
        h: "Getting to Gulmarg in snow",
        list: [
          "Distance: about 50 km from Srinagar, normally 1.5 to 2 hours.",
          "Chains: compulsory after fresh snow from Tangmarg up. Drivers fit them at Tangmarg, so allow extra time.",
          "Traffic: weekends and holidays can bring long queues between Tangmarg and Gulmarg. Start early.",
          "Avoid driving down after dark when the road ices.",
          "If the road is closed for clearing after heavy snow, wait in Tangmarg or Srinagar: it usually reopens within hours.",
        ],
      },
      {
        h: "Weather and what to wear",
        p: [
          "Winter days in Gulmarg are usually around 0 to 4°C and nights fall to minus 6 to minus 12°C. At Apharwat it is colder still, often with wind chill.",
        ],
        list: [
          "Thermal top and bottoms, a fleece and a down jacket rated for minus 10°C or lower.",
          "Waterproof trousers or snow pants (available to hire), waterproof gloves and a warm cap.",
          "Insulated, waterproof boots with good grip. Gumboots and snow boots can be hired in Gulmarg.",
          "Sunglasses or goggles and high SPF sunscreen: snow glare at altitude can burn eyes and skin.",
        ],
      },
      {
        h: "Heating and hotels in winter",
        list: [
          "Ask what heating the hotel uses: central heating, oil heaters or a bukhari wood stove.",
          "Check that there is a generator, because power cuts happen in snow.",
          "Ask whether hot water runs all day and whether heating is charged extra.",
          "Choose a room facing the meadow if you can: the view of the snow at dawn is the best part of a Gulmarg night.",
        ],
      },
    ],
    faqs: [
      {
        q: "When does it snow in Gulmarg?",
        a: "Snow usually covers the meadow from mid-December to March, with the deepest snow in January and February. The upper slopes have snow from November.",
      },
      {
        q: "How do I book the Gulmarg Gondola?",
        a: "Online, on the J&K Cable Car Corporation portal, in time slots for Phase 1 and Phase 2. Book early for peak weeks and carry the photo ID you booked with.",
      },
      {
        q: "Is Gondola Phase 2 open in winter?",
        a: "It runs on many winter days but closes often for high wind, poor visibility or avalanche control. Mornings are your best chance.",
      },
      {
        q: "What can I do in Gulmarg if the Gondola is closed?",
        a: "Sledge rides, snow scooter rides, beginner skiing on the lower slopes, and walks to St Mary's Church and the Maharani temple.",
      },
      {
        q: "Can beginners ski in Gulmarg?",
        a: "Yes. Registered instructors teach beginners on the gentle slopes, and you can hire all the equipment in Gulmarg.",
      },
      {
        q: "Should I stay in Gulmarg or Tangmarg?",
        a: "Gulmarg if you can, for the early morning and evening snow without crowds. Tangmarg is cheaper but means driving up and down a snowy road each day.",
      },
      {
        q: "Do cars need chains to reach Gulmarg?",
        a: "After fresh snow, yes, from Tangmarg up. Drivers fit them at Tangmarg.",
      },
      {
        q: "How cold is Gulmarg in winter?",
        a: "Days around 0 to 4°C and nights minus 6 to minus 12°C, with Apharwat colder and windier.",
      },
      {
        q: "Is a day trip to Gulmarg from Srinagar enough?",
        a: "It works for families on a short trip if you leave by 8 am. One night in Gulmarg is a big upgrade for couples and skiers.",
      },
      {
        q: "Is Gulmarg crowded in winter?",
        a: "Christmas to New Year, weekends and Holi are very busy. Weekdays in January, February and early March are calmer.",
      },
    ],
  },
  {
    slug: "where-to-stay-in-kashmir",
    title: "Where to Stay in Kashmir: Best Areas in Srinagar, Gulmarg, Pahalgam and Sonamarg",
    description:
      "Where to stay in Kashmir: Boulevard Road vs Rajbagh, Dal vs Nigeen houseboats, staying in Gulmarg or Tangmarg, riverside Pahalgam and what to check in winter.",
    category: "Planning",
    destination: "kashmir",
    date: "2026-11-03",
    intro:
      "Where you stay in Kashmir shapes the whole trip. In Srinagar the choice is between the lakefront Boulevard Road, quieter Rajbagh, the resorts towards Nishat and a night on a houseboat on Dal or Nigeen Lake. In the hills, the big decision is whether to sleep in Gulmarg and Pahalgam or use them as day trips. Most travellers do best with Srinagar as a base for two or three nights, plus one or two nights in Gulmarg or Pahalgam. This guide compares the areas, explains houseboat categories, and lists what to check before you book, especially in winter.",
    sections: [
      {
        h: "The best base for a Kashmir trip",
        p: [
          "Srinagar is the natural base. It has the airport, the most hotels, and easy day trips to Gulmarg (about 50 km), Sonamarg (about 80 km), Doodhpathri and Yusmarg. Pahalgam is further (about 90 to 95 km) and is better as an overnight stop than as a day trip.",
          "A balanced 5- to 6-night plan is two or three nights in Srinagar (one of them on a houseboat), one or two in Gulmarg, and one or two in Pahalgam, with Sonamarg as a day trip.",
        ],
      },
      {
        h: "Where to stay in Srinagar",
        list: [
          "Boulevard Road (Dal Lake): the classic choice, with lake views, shikara ghats outside, and restaurants and shops nearby. Busy and lively, especially in the evening.",
          "Rajbagh: a quieter residential area along the Jhelum, close to Lal Chowk, with good restaurants and many mid-range and upscale hotels. Good for families and longer stays.",
          "Dalgate and Lal Chowk: central and good value, but busier and with less of a view.",
          "Nishat and Brein (towards the Zabarwan hills): lakeside resorts and larger hotels near the Mughal gardens. Calmer, with a resort feel.",
          "Nigeen and Hazratbal side: quieter, close to Nigeen Lake houseboats and the Hazratbal shrine.",
        ],
      },
      {
        h: "Houseboats: Dal Lake or Nigeen Lake?",
        p: [
          "A night on a houseboat is one of the defining Kashmir experiences. Houseboats are graded by the J&K Tourism department into categories, from deluxe downwards. The category, more than the photos, tells you what to expect in rooms, bathrooms and service.",
        ],
        list: [
          "Dal Lake: the iconic setting, close to the boulevard. Vendors' shikaras visit throughout the day, which is fun for some guests and tiring for others.",
          "Nigeen Lake: quieter, more private and less commercial, with cleaner water. Popular with honeymooners and repeat visitors.",
          "Jhelum river boats: fewer and simpler, close to the city centre.",
          "How long: one night is enough for most travellers. Two nights can feel confined, especially with children or in winter.",
          "Winter: choose a deluxe boat with heated bedrooms and bathrooms, insulated walls and hot water all day.",
          "Access: houseboats are reached by shikara from a ghat. Carry a small overnight bag rather than big suitcases.",
        ],
      },
      {
        h: "Where to stay in Gulmarg",
        list: [
          "In the Gulmarg meadow: the best experience, close to the Gondola base, with views over the meadow. Rooms cost more than similar Srinagar rooms, especially in winter.",
          "Near the Gondola base: ideal for skiers and for catching the first slot of the day.",
          "Tangmarg (about 13 km below): cheaper, with more guesthouses, but you drive up and down every day, and in winter that means chains and traffic.",
          "Book early for Christmas to New Year, winter weekends and the ski peak in February, when Gulmarg sells out first.",
        ],
      },
      {
        h: "Where to stay in Pahalgam",
        list: [
          "Along the Lidder river: the most sought-after rooms, with the sound of the river and views of the pine slopes.",
          "Near the main market: convenient for restaurants, the taxi stand for Aru and Betaab, and walks.",
          "Towards Laripora and the Aru road: quieter, with resort-style properties.",
          "Pahalgam is better as an overnight than a day trip from Srinagar, because local sightseeing by union taxi takes most of a day.",
        ],
      },
      {
        h: "Where to stay in Sonamarg",
        list: [
          "Sonamarg has a small number of hotels and camps, most of them along the main road and the Sindh river.",
          "Many hotels close in late autumn and reopen in spring. In winter, confirm that your hotel is actually operating.",
          "Most visitors see Sonamarg as a day trip from Srinagar. An overnight is worth it in summer if you want an early start for Thajiwas glacier or are heading to Ladakh.",
        ],
      },
      {
        h: "Offbeat stays",
        list: [
          "Doodhpathri and Yusmarg: a few simple government and private huts. Most people visit as day trips.",
          "Gurez: homestays and guesthouses in Dawar. A permit is needed and the road closes in winter.",
          "Daksum and Kokernag: forest rest houses and small hotels in quiet pine valleys south of Anantnag.",
        ],
      },
      {
        h: "What to check before you book",
        list: [
          "Heating in winter: central heating, oil heaters or a bukhari, plus a generator for power cuts.",
          "Hot water hours, and whether heating or electric blankets are charged extra.",
          "Meal plan: many Kashmir hotels quote breakfast and dinner. Ask if dinner is a set menu or à la carte.",
          "Room type and view: lake view in Srinagar, meadow view in Gulmarg and river view in Pahalgam make a real difference.",
          "Check-in and check-out times, especially if you arrive on an early flight.",
          "For peak dates, ask about minimum stays and compulsory gala dinners at Christmas and New Year.",
          "ID: every guest needs government photo ID, and foreign guests are registered with the police.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where is the best place to stay in Kashmir?",
        a: "Srinagar is the best base, with two or three nights there, plus one or two nights in Gulmarg or Pahalgam. Sonamarg works well as a day trip.",
      },
      {
        q: "Which area of Srinagar is best for tourists?",
        a: "Boulevard Road for Dal Lake views and atmosphere, Rajbagh for a quieter base with good restaurants, and Nishat for lakeside resorts.",
      },
      {
        q: "Is Dal Lake or Nigeen Lake better for a houseboat?",
        a: "Dal Lake for the classic, lively experience. Nigeen Lake for privacy, cleaner water and fewer vendors.",
      },
      {
        q: "How many nights should I stay on a houseboat?",
        a: "One night is ideal for most travellers. Two nights can feel confined, especially in winter or with young children.",
      },
      {
        q: "Should I stay in Gulmarg or Srinagar?",
        a: "Base yourself in Srinagar and add one Gulmarg night if your budget allows. Sleeping in Gulmarg gives you the meadow without the day-trip crowds.",
      },
      {
        q: "Is Tangmarg a good alternative to Gulmarg?",
        a: "It is cheaper, but you drive up and down a snowy road each day in winter. For a short stay, Gulmarg itself is worth the extra cost.",
      },
      {
        q: "Is it worth staying overnight in Pahalgam?",
        a: "Yes. Pahalgam is about 2.5 to 3 hours from Srinagar, and local sightseeing takes most of a day, so an overnight makes the trip far more relaxed.",
      },
      {
        q: "Are hotels in Sonamarg open in winter?",
        a: "Many close from late autumn to spring. Confirm your hotel is operating, or visit Sonamarg as a day trip from Srinagar.",
      },
      {
        q: "What should I check about heating in Kashmir hotels?",
        a: "What type of heating the room has, whether there is a generator, whether hot water runs all day and whether heating costs extra.",
      },
    ],
  },
  {
    slug: "kashmiri-food-guide",
    title: "Kashmiri Food Guide: Wazwan, Kahwa, Harissa and What to Eat in Srinagar",
    description:
      "Kashmiri food explained: wazwan dishes, rogan josh to gushtaba, kahwa and noon chai, winter harissa, breads, Pandit cuisine, vegetarian options and where to eat.",
    category: "Planning",
    destination: "kashmir",
    city: "srinagar",
    date: "2026-11-03",
    intro:
      "Kashmiri food is one of the great regional cuisines of India, and eating well is half the pleasure of a trip to the valley. The centrepiece is wazwan, a multi-course feast cooked by hereditary chefs called wazas, but daily Kashmiri food is just as rewarding: fresh breads from the neighbourhood kandur bakery, salt-pink noon chai, saffron kahwa, lotus stem, collard greens and, in winter, harissa, a slow-cooked mutton breakfast sold only in the cold months. Kashmiri Pandit cooking adds a second tradition that uses no onion or garlic. This guide explains the dishes, what to try in each season, vegetarian options and how to order a wazwan.",
    sections: [
      {
        h: "Wazwan: Kashmir's royal feast",
        p: [
          "Wazwan is the ceremonial feast served at weddings and celebrations. It traditionally runs to many courses, mostly mutton, cooked overnight by a team of wazas over wood fires. Guests sit in groups of four and share a large copper platter called a trami, with rice heaped in the middle and each dish served onto it in turn.",
          "You do not need a wedding invitation: several Srinagar restaurants serve wazwan meals, from a few signature dishes to a fuller spread. Order a set wazwan for two or four if you want to taste the range.",
        ],
        list: [
          "Rista: minced mutton balls in a red, spiced gravy.",
          "Gushtaba: larger, very soft mutton balls in a yoghurt gravy. Traditionally the last meat dish of the feast.",
          "Rogan josh: mutton in a deep red gravy coloured by Kashmiri chillies and cockscomb flower (mawal), not tomatoes.",
          "Tabak maaz: lamb ribs simmered in milk and spices, then fried until crisp.",
          "Yakhni: mutton in a delicate yoghurt gravy flavoured with fennel and dried mint.",
          "Kebab and methi maaz: minced kebabs, and tripe cooked with fenugreek.",
          "Marchwangan korma: a fiery red chilli korma.",
        ],
      },
      {
        h: "Kahwa and noon chai",
        list: [
          "Kahwa: green tea brewed with saffron, cardamom, cinnamon and often crushed almonds, sweetened with honey or sugar. Traditionally made in a brass samovar. You will be offered it everywhere, from houseboats to shops.",
          "Noon chai (sheer chai): a pink, salted tea made by boiling green tea leaves with bicarbonate of soda and milk. Kashmiris drink it at breakfast and in the afternoon with bread. The taste surprises first-timers, but try it with a fresh girda.",
        ],
      },
      {
        h: "Breads from the kandur",
        p: [
          "Every Srinagar neighbourhood has a kandur, a traditional bakery with a clay oven, that bakes fresh bread at dawn and again in the afternoon.",
        ],
        list: [
          "Girda: a round, soft bread eaten at breakfast with butter and noon chai.",
          "Lavasa: a thin, crisp flatbread.",
          "Kulcha: small, crumbly breads, sweet or savoury, often topped with poppy seeds.",
          "Bakarkhani: a flaky, layered bread, especially popular in winter and at festivals.",
          "Sheermal and tsochwor: richer breads for tea time.",
        ],
      },
      {
        h: "Harissa: the winter breakfast",
        p: [
          "Harissa is mutton slow-cooked overnight with rice and spices until it melts into a smooth paste, then finished with hot oil and served with fresh kandur bread. It is sold only in the winter months, from about November or December to March, in specialist shops in Srinagar's old city, where it is ladled out at dawn and often sold out by late morning.",
          "If you are in Srinagar in winter, an early harissa breakfast in the old city is one of the best food experiences in India.",
        ],
      },
      {
        h: "Vegetarian Kashmiri food",
        list: [
          "Nadru: lotus stem from the lakes, cooked as nadru yakhni in yoghurt, or fried as nadru monje fritters, a favourite street snack.",
          "Haak: collard greens cooked simply with mustard oil, chilli and asafoetida. An everyday staple.",
          "Dum aloo: small potatoes slow-cooked in a spiced red or yoghurt gravy.",
          "Chaman: paneer in a turmeric or red gravy.",
          "Rajma: Kashmiri red beans, smaller and creamier than most, often eaten with rice.",
          "Modur pulao: a sweet saffron rice with dry fruits.",
          "Vegetarian wazwan: some restaurants serve a full vegetarian spread with chaman, dum aloo, nadru and more.",
        ],
      },
      {
        h: "Kashmiri Pandit cuisine",
        p: [
          "The Kashmiri Pandit kitchen developed alongside wazwan but follows its own rules: no onion or garlic, and flavour built instead from asafoetida, dried ginger powder, fennel and Kashmiri chillies. Meat dishes include a Pandit-style rogan josh and kaliya, and vegetarian dishes like dum aloo and nadru are prepared in a distinct style.",
        ],
      },
      {
        h: "Food to try in each season",
        list: [
          "Winter: harissa, bakarkhani, dried vegetable dishes, and endless kahwa. Kangri-warm cafés in the old city.",
          "Spring: fresh greens, lotus stem, and the first cherries in late May.",
          "Summer: cherries, apricots and plums. Kahwa remains a constant.",
          "Autumn: apples, walnuts and almonds, and fresh Pampore saffron after the harvest in late October and November.",
        ],
      },
      {
        h: "Where to eat in Srinagar",
        list: [
          "Wazwan restaurants on Residency Road, around Lal Chowk and on Boulevard Road serve wazwan dishes and full set meals. Long-running names like Ahdoos are a good place to start.",
          "The old city around Jamia Masjid and Zaina Kadal: harissa shops in winter, kandur bakeries and traditional sweets.",
          "Boulevard Road and Rajbagh cafés: kahwa, Kashmiri bakery items and lake views.",
          "Durganag area: well-known vegetarian dhabas, popular with pilgrims and vegetarian travellers.",
          "Houseboats and hotels: many serve home-style Kashmiri dinners. Ask in advance for a wazwan dinner on board.",
        ],
      },
      {
        h: "Food souvenirs to take home",
        list: [
          "Saffron: buy GI-tagged or government-certified Kashmir saffron. Real threads are deep red, strongly aromatic and colour water slowly.",
          "Dry fruits: walnuts, almonds (Kashmiri kagzi almonds have thin shells) and dried apricots.",
          "Kahwa mix: a blend of green tea and spices to brew at home.",
          "Kashmiri chilli powder and the spice cakes (ver) used in Pandit cooking.",
          "Honey from the valley's apiaries, sold in Srinagar markets.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is wazwan?",
        a: "Wazwan is Kashmir's ceremonial multi-course feast, mostly mutton dishes cooked by hereditary chefs called wazas and shared from a copper platter called a trami.",
      },
      {
        q: "What are the must-try Kashmiri dishes?",
        a: "Rogan josh, rista, gushtaba, tabak maaz and yakhni for meat, and nadru, haak, dum aloo and chaman for vegetarians. Add kahwa, noon chai and, in winter, harissa.",
      },
      {
        q: "What is harissa in Kashmir?",
        a: "A winter-only breakfast of mutton slow-cooked overnight with rice into a smooth paste, served with hot oil and kandur bread in Srinagar's old city.",
      },
      {
        q: "Is Kashmiri food spicy?",
        a: "It is richly spiced but usually not fiery. Kashmiri chillies give colour more than heat. Marchwangan korma is the exception and is very hot.",
      },
      {
        q: "Is vegetarian food easily available in Kashmir?",
        a: "Yes. Nadru, haak, dum aloo, chaman and rajma are everyday dishes, and some restaurants serve a full vegetarian wazwan.",
      },
      {
        q: "What is the difference between kahwa and noon chai?",
        a: "Kahwa is a sweet green tea with saffron, cardamom and almonds. Noon chai is a pink, salted milk tea drunk with breakfast breads.",
      },
      {
        q: "Where can I eat wazwan in Srinagar?",
        a: "Wazwan restaurants on Residency Road, around Lal Chowk and on Boulevard Road serve set wazwan meals. Houseboats and hotels can also arrange a wazwan dinner on request.",
      },
      {
        q: "How do I check if Kashmiri saffron is real?",
        a: "Buy GI-tagged or certified saffron. Real threads are deep red with slightly lighter tips, smell strong and colour water slowly over several minutes.",
      },
      {
        q: "What is Kashmiri Pandit food?",
        a: "The cuisine of the Kashmiri Pandit community, which uses no onion or garlic and builds flavour with asafoetida, dried ginger, fennel and Kashmiri chillies.",
      },
    ],
  },
];
