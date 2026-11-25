// TDI depth pass 3 (2026-11-25): travel agent, Gurez taxi, 4 and 5 day,
// 3 day and Sonamarg stay posts, each paired with tdiholidayventures.com
// pages. Appended by withAdditions in blog/index.ts. Rules: checkable facts,
// no typed fares or prices, no em dashes, no question asked elsewhere.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const TDI_DEPTH_8_ADDITIONS: Record<string, Addition> = {
  "how-to-choose-a-kashmir-travel-agent": {
    sections: [
      {
        h: "Where can you verify a Kashmir travel agency?",
        p: [
          "Travel businesses in Jammu and Kashmir are required to register with the Department of Tourism under the Jammu and Kashmir Registration of Tourist Trade Act of 1978. Ask the agency for its registration number and the name it is registered under, then check that the name matches the one on its invoices, website and bank account. A real business also has a GST number, which you can look up for free on the GST portal; the result shows the legal name, the address and whether the registration is active.",
          "Membership of national associations such as the Travel Agents Association of India or the Indian Association of Tour Operators, or recognition by the Ministry of Tourism, is a further sign of an established business, though many good small Srinagar agencies do not hold it. None of these is a guarantee of good service, but an agency that cannot or will not share any registration should not get your money.",
        ],
      },
      {
        h: "Who do you call if something goes wrong?",
        list: [
          "The agency's owner or manager first, in writing on WhatsApp or email, so there is a record.",
          "The Department of Tourism in Srinagar, which handles complaints against registered tourist trade businesses.",
          "The National Consumer Helpline on 1915, or the e-Daakhil portal for a formal consumer complaint.",
          "The cybercrime helpline 1930 and the national cybercrime portal, if you paid a fake website or a fraudster.",
          "Your bank, at once, if you paid by card, so it can try to stop or reverse the payment.",
          "The local police, for theft, threats or serious fraud on the ground.",
        ],
      },
      {
        h: "What if you have already paid and something is wrong?",
        p: [
          "Act quickly and stay calm. Write down exactly what was promised and what was delivered, with screenshots of the quote, the payment and every message. Ask the agency in writing to fix the problem or refund the difference, and give a clear deadline. Many problems on a Kashmir trip, such as a smaller car, a different hotel or a missing sightseeing day, can be put right on the spot if you raise them the same day rather than after you are home.",
          "If the agency stops responding, or if you realise the website or number was fake, report it to 1930 and your bank immediately; the first hours matter for recovering money. Keep paying only for services you can see, and do not send more money to people who promise to fix the problem after another payment.",
        ],
      },
      {
        h: "Local agency or an outside one: what actually changes",
        p: [
          "An agency based in Srinagar usually owns or directly manages the cars and drivers, knows the hotels personally and can solve problems on the ground the same day. An agency in your own city may be easier to visit and pay, but it often passes your booking to a Srinagar partner, which adds a layer between you and the people doing the work. Neither is always better. Ask any agency who will actually provide the car and the hotel rooms, and whose number you will call at nine at night in Pahalgam if something goes wrong.",
        ],
      },
      {
        h: "What does a Kashmir travel agency in Srinagar actually sell?",
        list: [
          "Full packages with hotels, houseboats, a car and driver for the whole trip, and sightseeing.",
          "Car-only bookings: airport transfers, day trips or a car for several days.",
          "Hotel and houseboat bookings without transport.",
          "Gondola tickets, pony and union taxi arrangements, and activity bookings like rafting and skiing.",
          "Special trips: Gurez, Keran, the Great Lakes trek, Amarnath Yatra support and Ladakh road trips.",
          "Group, school, corporate and wedding travel.",
        ],
      },
      {
        h: "How a good booking with a Kashmir agency works",
        days: [
          "You share your dates, group size, budget and the kind of trip you want.",
          "The agency sends a day-by-day plan with named hotels, the car type and a written list of what is included and excluded.",
          "You ask questions, change hotels or days, and get a revised written quote.",
          "You pay a booking amount by a traceable method and receive a confirmation and invoice.",
          "A few days before travel, you receive hotel confirmations, the driver's name and number, and an emergency contact.",
          "On the trip, the agency checks in with you and solves problems the same day.",
          "After the trip, you pay any balance as agreed and get a final invoice.",
        ],
      },
    ],
    faqs: [
      { q: "Under which law do Kashmir travel agencies register?", a: "The Jammu and Kashmir Registration of Tourist Trade Act of 1978, with the Department of Tourism." },
      { q: "How can I check a Kashmir agency's GST number?", a: "Search the GST number on the free GST portal. It shows the legal name, address and whether the registration is active." },
      { q: "What is the National Consumer Helpline number?", a: "1915. You can also file a formal consumer complaint on the e-Daakhil portal." },
      { q: "What should I do first if a Kashmir agency stops responding after payment?", a: "Report to the cybercrime helpline 1930 and your bank immediately, with screenshots of the payment and messages." },
      { q: "Does an agency in my city book Kashmir through a Srinagar partner?", a: "Often yes. Ask who will actually provide the car and hotels, and whose number you will call on the ground." },
      { q: "Is TAAI or IATO membership required for a Kashmir agency?", a: "No. It is a sign of an established business, but many good small Srinagar agencies are not members." },
      { q: "Can a Kashmir agency fix problems during the trip?", a: "A good one can, often the same day. Raise the problem at once rather than after you return home." },
      { q: "What documents should a Kashmir agency send before travel?", a: "Hotel confirmations, the driver's name and number, the final itinerary, an invoice and an emergency contact." },
      { q: "Should the hotel names be in the Kashmir agency quote?", a: "Yes. A quote should name each hotel or houseboat, or at least give clear options, not only a star rating." },
      { q: "Can I book only gondola tickets through a Kashmir agency?", a: "Many agencies help with gondola tickets, but you can also book directly on the official cable car corporation website." },
      { q: "Do Srinagar agencies arrange Amarnath Yatra support?", a: "Many do, including transport to Baltal or Pahalgam, stays and help with ponies or helicopter bookings through official channels." },
      { q: "How do I compare a Srinagar agency with a national online portal?", a: "Compare the same hotels, car, days and inclusions, then ask each who handles problems on the ground." },
      { q: "What should a Kashmir travel agency invoice show?", a: "The legal business name, GST number, address, the services, the amounts paid and the balance due." },
    ],
  },

  "srinagar-to-gurez-taxi": {
    sections: [
      {
        h: "What should you check on the way to Gurez?",
        p: [
          "The drive has three parts. From Srinagar to Bandipora, the road runs past the edge of Wular Lake on easy flat country. From Bandipora, it climbs through forest and hairpins to Tragbal and then over Razdan pass, the highest point of the drive, where there may be snow beside the road well into June. From Razdan, it drops through Kanzalwan to the Kishanganga and on to Dawar. Check the fuel tank in Bandipora, carry water and snacks, and use the toilets at the Bandipora or Tragbal stops, since there are few on the pass.",
        ],
      },
      {
        h: "What changes with weather and traveller documents?",
        p: [
          "Snow, rain and landslides can close Razdan for hours or days, especially in May, early June and from October onwards. Ask the driver the night before whether the road is open and start early. Every traveller needs an original photo ID; there are checks on the way, and foreigners face stricter rules for this border valley and should check the current position before booking. Keep photocopies, and do not photograph security posts.",
        ],
      },
      {
        h: "How do you get a fare for a Dawar drop or return?",
        list: [
          "A one-way drop to Dawar: the driver returns empty, so the fare usually covers both directions.",
          "A return trip with nights in Gurez: the fare covers the car and the driver's stay and food for each night.",
          "Tulail and Chakwali: extra kilometres beyond Dawar, quoted separately or included in a multi-day plan.",
          "Car type: an SUV is the sensible choice and costs more than a sedan.",
          "Season: rates are higher in the peak summer weeks and on weekends.",
        ],
      },
      {
        h: "Gurez taxi or shared transport",
        p: [
          "Shared vehicles run from Bandipora to Gurez when the road is open, carrying locals and goods, and are much cheaper than a private taxi. They leave when full, stop often and do not wait for photographs. They suit backpackers with flexible time. Families, couples and anyone with luggage or a tight schedule are better off with a private taxi from Srinagar, which can stop at Razdan, wait at viewpoints and carry on to Tulail.",
        ],
      },
    ],
    faqs: [
      { q: "Where is the last fuel stop before Gurez?", a: "Bandipora. Fill the tank there, since fuel is hard to find on the pass and in Gurez." },
      { q: "Is there snow on Razdan pass in June?", a: "Often beside the road in early June, though the road is usually open. Check the night before." },
      { q: "Is a one-way taxi to Dawar cheaper than a return?", a: "Not by much. The driver returns empty, so a one-way drop usually covers both directions." },
      { q: "Is there shared transport from Bandipora to Gurez?", a: "Yes, shared vehicles run when the road is open. They leave when full and stop often." },
      { q: "Which car is best for the Srinagar to Gurez drive?", a: "An SUV, for the climb over Razdan and the rough stretches in Gurez." },
      { q: "Does the Gurez taxi fare include Tulail?", a: "Not always. Tulail is extra distance beyond Dawar, so ask for it in the quote." },
      { q: "Are there toilets on the Gurez road?", a: "Few. Use the stops at Bandipora or Tragbal before the pass." },
      { q: "What should I do if Razdan closes while I am in Gurez?", a: "Stay in Dawar until the road reopens, and keep a spare day before any flight from Srinagar." },
      { q: "Can I photograph the road to Gurez?", a: "You can photograph the landscape, but not security posts, bridges with guards or army vehicles." },
    ],
  },

  "kashmir-itinerary-4-and-5-days": {
    sections: [
      {
        h: "How hard is each day of a 5-day plan?",
        list: [
          "Arrival day: easy. A short drive from the airport, a shikara and the gardens at your own pace.",
          "Sonamarg day: moderate. About two and a half hours each way, plus a pony ride or walk to Thajiwas.",
          "Gulmarg day: moderate to demanding. A two-hour drive, gondola queues and cold at Apharwat.",
          "Pahalgam day: long. About three hours each way, plus union taxi trips to the valleys, or a night there.",
          "Departure day: easy, but leave time for the airport's entry checks.",
        ],
      },
      {
        h: "Which upgrades make five days better?",
        p: [
          "Three small changes improve a 5-day trip more than anything else. First, a night in Pahalgam instead of a return to Srinagar turns the longest day into two relaxed half days. Second, a houseboat night on Nigeen or Dal adds the lake experience without adding a day. Third, a better car, such as an Innova Crysta instead of a sedan, makes the long drives much more comfortable. A Gulmarg night is worth it in winter, when the gondola queue and the roads make a day trip tiring.",
        ],
      },
      {
        h: "Four days from a Srinagar base",
        p: [
          "A 4-day plan works best from a single Srinagar hotel, with day trips out. You avoid packing and unpacking, and the hotel can keep your luggage. Day one is Srinagar itself, day two Gulmarg, day three Pahalgam, and day four the morning in Srinagar before the flight. The weakness is that Pahalgam and Gulmarg become long return drives. If you want one night out, choose Pahalgam.",
        ],
      },
      {
        h: "Time the last morning carefully",
        p: [
          "Srinagar airport has security checks at the entry gate, and vehicles queue to enter at busy times. Leave the city at least three hours before a domestic flight, and more in winter or on busy days. Do not plan a Gulmarg or Sonamarg visit on the morning of departure. A shikara ride, the Mughal gardens or shopping on Boulevard Road fit the last morning without risk.",
        ],
      },
      {
        h: "What changes if you add or move a night?",
        p: [
          "Adding a night anywhere turns one long day into two shorter ones. Moving the Pahalgam night to the end of the trip lets you drive back to the airport on the last morning, but that drive takes three hours, so it suits afternoon flights only. Moving Gulmarg to the last day is risky in winter, when snow can delay the return.",
        ],
      },
      {
        h: "How should different travellers adjust the plan?",
        list: [
          "Couples: add a houseboat night and a slow Pahalgam morning.",
          "Families with children: drop Sonamarg or Gulmarg Phase 2, and add rest time.",
          "Older travellers: stay in one Srinagar hotel with a lift, and keep drives short.",
          "Adventure seekers: add rafting at Pahalgam or a Sonamarg trek.",
          "Photographers: stay overnight in Gulmarg or Pahalgam for early light.",
        ],
      },
      {
        h: "When should you go for 4 or 5 days?",
        p: [
          "April to June and September to October give the best balance of weather, open roads and long days. July and August are busy with the Amarnath Yatra around Pahalgam and Sonamarg. In winter, Gulmarg is the focus, Sonamarg and Pahalgam depend on the roads, and short days mean less sightseeing.",
        ],
      },
    ],
    faqs: [
      { q: "Which day of a 5-day Kashmir trip is the longest?", a: "Pahalgam, at about three hours each way plus union taxi trips, unless you stay the night there." },
      { q: "Is a houseboat night worth adding to a 5-day trip?", a: "Yes. It adds the lake experience without adding a day." },
      { q: "How early should I leave Srinagar for my flight?", a: "At least three hours before a domestic flight, more in winter or on busy days, because of the airport's entry checks." },
      { q: "Should I stay in one Srinagar hotel for a 4-day trip?", a: "It is easiest. You avoid packing and unpacking, with day trips to Gulmarg and Pahalgam." },
      { q: "Can I visit Gulmarg on my departure day?", a: "Not advisable. Keep the last morning close to Srinagar." },
      { q: "Which car makes a 5-day Kashmir trip more comfortable?", a: "An Innova Crysta or similar SUV, especially for the long drives to Pahalgam and Sonamarg." },
      { q: "Is a Gulmarg night worth it on a 5-day winter trip?", a: "Yes. It avoids a tiring return drive in snow and lets you take an early gondola." },
      { q: "How do I adjust a 5-day Kashmir trip for older parents?", a: "Stay in one Srinagar hotel with a lift, keep drives short, and skip Phase 2 of the gondola." },
      { q: "Can I add rafting to a 4 or 5-day Kashmir trip?", a: "Yes. Rafting on the Lidder near Pahalgam fits a Pahalgam day in summer." },
      { q: "Is July good for a 5-day Kashmir trip?", a: "It is busy around Pahalgam and Sonamarg with the Amarnath Yatra, so book early and expect traffic." },
    ],
  },

  "kashmir-3-day-itinerary": {
    sections: [
      {
        h: "A two-night plan at a glance",
        days: [
          "Day 1: arrive, check in, shikara on Dal, Mughal gardens or the old city depending on your arrival time.",
          "Day 2: one main outing: Gulmarg for snow and the gondola, or Sonamarg or Pahalgam in summer.",
          "Day 3: a short morning in Srinagar, Hazratbal or shopping, then the airport.",
        ],
      },
      {
        h: "Day one starts when you reach the hotel",
        p: [
          "On a 3-day trip, your first day depends on your flight. A morning arrival leaves time for the gardens and a sunset shikara. An afternoon arrival leaves only the shikara and dinner. Plan day one around what you can reach in the time left after check-in, not around a fixed list. Ask the hotel for an early check-in if you land early, or at least a place to leave bags.",
        ],
      },
      {
        h: "Choose the main outing for day two",
        p: [
          "Gulmarg is the most popular choice, with the gondola and snow for much of the year; it is two hours away. Sonamarg is about two and a half hours away, best from May to October for the Thajiwas glacier. Pahalgam is about three hours away and is the longest day, best if you want rivers and valleys. Pick one. Trying two on a 3-day trip means most of the day is spent in the car.",
        ],
      },
      {
        h: "Keep the last morning close to Srinagar",
        p: [
          "The airport's entry checks and the traffic make the last morning short. Use it for a walk on Boulevard Road, Hazratbal, a short shikara ride or shopping. Check out, load the car and leave at least three hours before your flight.",
        ],
      },
      {
        h: "Fit the route to your arrival and departure times",
        list: [
          "Morning arrival, evening departure: the best case. Use both half days for Srinagar.",
          "Evening arrival, morning departure: effectively one full day. Choose Gulmarg.",
          "Arrival by train at Srinagar: the station is on the city's edge, so allow time to reach the hotel.",
          "Arrival from Jammu by road: the first day is the drive, so the trip becomes two days in Kashmir.",
        ],
      },
      {
        h: "Choose the version that suits your group",
        p: [
          "Couples often prefer a houseboat night and Gulmarg. Families with children choose Gulmarg for the snow and gondola Phase 1. Older travellers may skip the long outings and enjoy Srinagar at a gentle pace, with a half day in Gulmarg. Groups of friends may choose Sonamarg or Pahalgam for activities like pony rides and rafting.",
        ],
      },
      {
        h: "Use the season to decide what can move",
        p: [
          "In winter, Gulmarg's road can close after snow; keep day two and day three swappable. In spring, Sonamarg beyond the town may still be snowbound. In summer, Pahalgam and Sonamarg are fully open but busy. In autumn, any of the three works. Always ask your driver the night before about road conditions.",
        ],
      },
      {
        h: "When another night is worth adding",
        p: [
          "Add a night if you want both Gulmarg and Pahalgam, if your flights arrive late and leave early, if you are travelling with older parents or small children, or if you are visiting in winter. A fourth day turns a rushed trip into a comfortable one.",
        ],
      },
    ],
    faqs: [
      { q: "What should I do on day one of a 3-day Kashmir trip?", a: "A shikara on Dal and the Mughal gardens or old city, depending on how much time is left after check-in." },
      { q: "Should I choose Gulmarg or Pahalgam for a 3-day trip?", a: "Gulmarg is closer and offers snow and the gondola; Pahalgam is a longer day for rivers and valleys. Pick one." },
      { q: "What if I arrive in the evening on a 3-day Kashmir trip?", a: "You effectively have one full day. Choose Gulmarg for it." },
      { q: "How far is Srinagar railway station from the city centre?", a: "It is on the city's edge at Nowgam, so allow time to reach a Dal Lake hotel." },
      { q: "When is a fourth day worth adding to a 3-day Kashmir trip?", a: "If you want both Gulmarg and Pahalgam, have late or early flights, travel with older parents or children, or visit in winter." },
      { q: "Can I swap days on a 3-day winter trip in Kashmir?", a: "Yes. Keep day two and day three flexible in case Gulmarg's road closes after snow." },
      { q: "What is the best last morning plan on a 3-day trip?", a: "A walk on Boulevard Road, Hazratbal, a short shikara or shopping, then leave for the airport early." },
    ],
  },

  "where-to-stay-in-sonamarg": {
    sections: [
      {
        h: "Which kind of Sonamarg hotel suits your trip?",
        p: [
          "Sonamarg's stays fall into three groups. Hotels along the main road through the town are the most common, with simple to comfortable rooms and easy car access. The tourism department's huts and tourist complex sit in quieter spots with good views. Camps along the Sindh river and near Thajiwas offer tents with beds in summer. Choose a hotel for comfort and winter warmth, a hut for space and location, and a camp for the river and the stars.",
        ],
      },
      {
        h: "How do you check a glacier or valley view?",
        p: [
          "Many Sonamarg hotels advertise views of Thajiwas glacier or the valley, but not every room has one. Ask which rooms face the glacier, whether the view is from the window or only the terrace, and ask for a photo taken from the actual room. Rooms facing the road can be noisy with trucks heading for Zojila early in the morning.",
        ],
      },
      {
        h: "What should you confirm for a winter stay?",
        p: [
          "Since the Z-Morh tunnel opened, Sonamarg is reachable in winter, and more hotels stay open. Confirm that your hotel will be open, how rooms are heated, whether there is power backup, whether hot water is available all day, and whether the road to the hotel is cleared. Ask what activities are possible, such as snow walks and sledging, and whether the restaurant will be open.",
        ],
      },
      {
        h: "When does a day trip make more sense?",
        p: [
          "If you only want to see the glacier and the meadow, a day trip from Srinagar works. Leave early, spend the middle of the day at Thajiwas, and return by evening. It suits short trips, travellers who prefer one Srinagar hotel, and winter days when the weather is uncertain. An overnight is better for trekkers, Ladakh-bound travellers, and anyone who wants the valley in the quiet hours.",
        ],
      },
      {
        h: "How do you reach the glacier and Zero Point from your hotel?",
        p: [
          "Thajiwas glacier is reached on foot or by pony from Sonamarg; local union vehicles may also run part of the way. Zero Point, beyond Zojila on the Ladakh side, is reached by local taxis from Sonamarg when the road is open. Your hotel can arrange both. Agree rates at the official counter or with the hotel's help.",
        ],
      },
      {
        h: "What belongs in a written room quote?",
        list: [
          "The room type, view and bed size.",
          "The meal plan and what dinner includes.",
          "Heating, hot water and power backup.",
          "Taxes and any extra charges.",
          "Check-in and check-out times.",
          "The cancellation policy, especially for road closures.",
          "Parking and the driver's room if you are on a package.",
        ],
      },
      {
        h: "Going on to Ladakh from Sonamarg",
        p: [
          "A night in Sonamarg before Zojila gives you an early start on the pass, before traffic and before the afternoon slush. Choose a hotel on the Zojila side of town, ask for an early breakfast or a packed one, and confirm the Zojila timing rules with your driver. Bikers should look for hotels with safe parking.",
        ],
      },
      {
        h: "Which Sonamarg stay suits which traveller?",
        list: [
          "Families: hotels with heating and easy car access.",
          "Couples: a glacier-view room or a riverside camp in summer.",
          "Trekkers: a hut or camp near the trailheads.",
          "Ladakh travellers: a hotel on the Zojila side of town.",
          "Budget travellers: simple guesthouses or camps.",
        ],
      },
    ],
    faqs: [
      { q: "Do all Sonamarg hotel rooms have glacier views?", a: "No. Ask which rooms face the glacier and request a photo from the actual room." },
      { q: "Are Sonamarg hotels open in winter since the Z-Morh tunnel opened?", a: "More are open now that Sonamarg is reachable in winter. Confirm heating, power backup and road access." },
      { q: "How do I get from my Sonamarg hotel to Zero Point?", a: "By local taxi from Sonamarg when the road beyond Zojila is open. Your hotel can arrange it." },
      { q: "Where should Ladakh-bound travellers stay in Sonamarg?", a: "On the Zojila side of town, for an early start on the pass." },
      { q: "Are Sonamarg road-facing rooms noisy?", a: "They can be, with trucks heading for Zojila early in the morning. Ask for a room away from the road." },
      { q: "Can I walk to Thajiwas glacier from my Sonamarg hotel?", a: "Yes from many hotels, or take a pony. Agree pony rates at the official counter." },
      { q: "What should a Sonamarg hotel quote include?", a: "Room type and view, meal plan, heating, taxes, check-in times, cancellation policy and parking." },
    ],
  },
};
