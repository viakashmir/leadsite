// Package-keyword batch (2026-11-15): pages for the tdiholidayventures.com
// package keywords that had no page of ours (how to choose a Kashmir
// package; Japan and Siliguri are covered by kashmir-gaps-*), plus additions to the
// posts that answered TDI's Ladakh package keywords but trailed on depth.
// No typed fares or prices, no em dashes, facts a traveller can check.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const PACKAGE_KEYWORD_POSTS: BlogPost[] = [
  // ------------------------------------------------------------ how to choose
  {
    slug: "how-to-choose-a-kashmir-tour-package",
    title: "How to Choose a Kashmir Tour Package: Days, Route, Hotels and the Quote",
    description: "How to pick the right Kashmir tour package: how many days, which route and bases, hotel category, what the price covers, local costs and what to check in a quote.",
    category: "Planning",
    destination: "kashmir",
    city: "srinagar",
    date: "2026-11-15",
    intro:
      "The right Kashmir tour package is the one whose route fits your days, whose hotels match your budget honestly, and whose written quote says exactly what is and is not included. Start with the number of nights you have, choose how many times you are willing to change hotels, pick the season, and only then compare prices. Two quotes that look far apart are often for different trips: a hotel on the lake versus one on the outskirts, a sedan versus an SUV, or a plan that quietly leaves out the gondola, the Pahalgam union taxi or dinner. This guide walks through each choice in the order that matters.",
    sections: [
      {
        h: "Step 1: Decide how many nights you really have",
        p: [
          "Count the nights in Kashmir, not the days of leave. A flight that lands in Srinagar at 4 pm and leaves at 9 am gives you far less than its \"4 days\" label suggests. Ask for a morning arrival and an afternoon departure where you can.",
        ],
        list: [
          "3 nights: Srinagar and Gulmarg, with one more day trip to Sonamarg or Pahalgam.",
          "4 nights: the classic three, Srinagar, Gulmarg and Pahalgam, with one hotel change.",
          "5 nights: all four big names, adding Sonamarg, or a houseboat night and a Gulmarg night.",
          "6 to 7 nights: a night in each resort, or one base with quieter meadows such as Doodhpathri and Yusmarg.",
          "8 nights or more: Gurez Valley, Vaishno Devi, or Ladakh in summer.",
        ],
      },
      {
        h: "Step 2: Choose how often you want to change base",
        p: [
          "Every hotel change costs about half a day of packing, checking out, driving and checking in. Some travellers love waking up in a new place; others, especially families with small children and older parents, are happier with one or two bases and day trips. Srinagar works as a base for Gulmarg (about 1.5 to 2 hours each way), Sonamarg (2.5 to 3 hours), Doodhpathri (1.5 hours) and Yusmarg. Pahalgam, at 2.5 to 3 hours and with a full day of its own sightseeing, is best as an overnight stop.",
        ],
        list: [
          "One base: Srinagar for every night, with day trips. Least packing, more driving.",
          "Two bases: Srinagar and Pahalgam. The best balance for most families.",
          "Three or four bases: Srinagar, Gulmarg, Pahalgam and Sonamarg nights. Best for couples and summer trips, more packing.",
        ],
      },
      {
        h: "Step 3: Fit the route to the season",
        list: [
          "Late March to mid-April: the Tulip Garden and almond blossom in Srinagar; Sonamarg and Chandanwari may still be snowbound.",
          "May and June: everything open, including Zero Point beyond Sonamarg from about June; peak demand.",
          "July and August: green and busy, with Amarnath Yatra convoys on the Pahalgam and Sonamarg roads and restricted access to Chandanwari.",
          "September to November: clear skies, autumn colour, the saffron harvest and good value.",
          "December to February: snow in Gulmarg and Pahalgam, skiing, cold nights; keep a buffer day before your flight. Since January 2025 the Z-Morh tunnel keeps the Sonamarg road open in winter.",
          "Gurez, Doodhpathri and Zojila have their own seasons: Gurez roughly May or June to November, Doodhpathri April to November, Zojila June to October for Zero Point.",
        ],
      },
      {
        h: "Step 4: Pick the hotel category honestly",
        p: [
          "Hotel category is the single biggest driver of price, and the one most often oversold. A budget package cannot pay for 5-star hotels, whatever its title says; look at the price per night per person after the cab, and see what it could realistically buy. Budget hotels and guesthouses are simple and clean, 3-star hotels add heating and a restaurant, and 4 and 5-star hotels add space, views and service.",
          "Location matters as much as stars. A 3-star hotel near the Boulevard can be a better trip than a 4-star one on the city outskirts, because you save an hour or more of driving each day. In Gulmarg, rooms are limited, so the same category costs more and books out first. In Pahalgam, ask for a river-facing room.",
        ],
      },
      {
        h: "Step 5: Use the price for the group that is actually travelling",
        p: [
          "Kashmir package prices are quoted per person, usually with two sharing a room. The cab is priced per day for the vehicle, and rooms per night, so the price per person changes with the group. A couple pays the full share of a room and a sedan; four adults share two rooms and an SUV; a family with a child on an extra bed pays less per person. A single traveller pays more, because nothing is shared.",
          "So compare quotes for your real group: say how many adults, how many children and their ages, and how many rooms you need. A price that looked cheap for \"two sharing\" may not be cheap for three in one room with an extra bed, or for a group that needs a tempo traveller.",
        ],
      },
      {
        h: "Step 6: Separate the package from tickets and local costs",
        p: [
          "In Kashmir, several common costs are almost never in a package, because they are paid on the spot or booked separately. Knowing them prevents surprises and makes quotes comparable.",
        ],
        list: [
          "Gulmarg Gondola tickets for Phase 1 (Kongdoori) and Phase 2 (Apharwat), sold online by the cable car corporation.",
          "Pahalgam union taxis for Aru, Betaab and Chandanwari, because outside cabs are not allowed there.",
          "Local taxis over Zojila to Zero Point from Sonamarg, and ponies to Thajiwas Glacier.",
          "Shikara rides beyond the one in the package, charged by the hour at rates displayed at the ghats.",
          "Garden and park entry tickets, ponies, sledges, ski lessons, rafting and ATV rides.",
          "Lunches: the standard meal plan is breakfast and dinner.",
        ],
      },
      {
        h: "Step 7: Check the meal plan, cab and extras",
        list: [
          "Meal plan: MAP (breakfast and dinner) is standard in Kashmir. CP (breakfast only) is cheaper but means paying for dinners.",
          "Cab: a sedan such as a Dzire suits two people with light bags; four adults need an SUV such as an Innova Crysta or Ertiga; six or more need a tempo traveller. Confirm the cab stays with you every day, not only for transfers.",
          "Houseboat: standard or deluxe category, Dal or Nigeen Lake, and whether the shikara to the boat is included.",
          "Honeymoon or family extras: decorated room, candle-light dinner, extra bed or family room, written into the quote.",
          "Airport transfers on both ends.",
        ],
      },
      {
        h: "Step 8: Choose the right kind of trip for your group",
        list: [
          "Honeymoon: fewer bases, a houseboat night, a Gulmarg night, slow mornings and one free afternoon.",
          "Family with young children: one or two bases, short drives, ponies and the gondola, and a hotel with a lift.",
          "Senior citizens: ground-floor rooms, an SUV, no more than three hours of driving most days, and the gondola instead of long walks.",
          "Friends: a tempo traveller, triple sharing to save, and adventure add-ons such as ATV rides and rafting.",
          "Pilgrims: Vaishno Devi first, with the Vande Bharat from Katra to Srinagar, then Kashmir.",
          "Photographers: autumn or spring, an extra night in Gulmarg or Pahalgam for the light, and an early shikara for the floating market.",
        ],
      },
      {
        h: "Step 9: Read the written quote line by line",
        list: [
          "Every hotel by name, with the room type and the number of nights.",
          "The meal plan for each night.",
          "The cab type, and that it is private for the whole trip.",
          "The day-by-day plan, including which day trips are included.",
          "What is included and excluded, written out, including gondola, union taxis and shikara.",
          "Any honeymoon, family or festival extras.",
          "The total price for your group, what it covers, and the payment schedule.",
          "The cancellation and refund policy, and what happens if a road closes or a flight is cancelled.",
          "The agent's registration and a local contact number for the trip.",
        ],
      },
      {
        h: "Red flags in a Kashmir package",
        list: [
          "5-star hotels at a budget price, or a \"luxury\" title with no hotel names.",
          "Aru, Betaab and Chandanwari \"included\" in your own cab, which is not allowed.",
          "Baisaran meadow in the itinerary; it has been closed to visitors since April 2025.",
          "All four of Srinagar, Gulmarg, Pahalgam and Sonamarg in three nights.",
          "A Pahalgam last night before a morning flight.",
          "No written quote, or pressure to pay in full immediately.",
        ],
      },
      {
        h: "Comparing two Kashmir packages: a worked example",
        p: [
          "Imagine two 5 nights 6 days quotes for a couple. Quote A is cheaper: a hotel in a city suburb, breakfast only, a sedan for transfers and two day trips, no shikara. Quote B costs more: a hotel near the Boulevard, a houseboat night, breakfast and dinner, a private sedan every day, a shikara ride, and Gulmarg and Sonamarg day trips. Once you add five dinners, a shikara and the two days of cab Quote A leaves out, the difference shrinks a lot, and Quote B saves about an hour of driving each day. The cheaper quote is not always the cheaper trip.",
          "Ask both agents to quote the same hotel category, meal plan and cab, and the comparison becomes fair.",
        ],
      },
      {
        h: "Packages by length: where to look next",
        p: [
          "This site lists Kashmir plans by length, from 3 nights 4 days to 6 nights 7 days, along with honeymoon, family, budget, luxury, winter and adventure collections and packages from major Indian cities. Each package page shows the day-by-day plan, where you stay, what is included and the starting price per person, so you can compare like with like before asking for quotes.",
        ],
      },
      {
        h: "Get quotes the easy way",
        p: [
          "Tell us your dates, group and budget once. Up to 3 verified local agents send itineraries and quotes, which you can compare using the checklist above. Change what you like with the agent you prefer and book directly. There is no booking fee for asking, and you are never obliged to book.",
        ],
      },
    ],
    faqs: [
      { q: "How do I choose the best Kashmir tour package?", a: "Fix the number of nights first, then how many bases you want, the season and an honest hotel category. Compare written quotes on the same hotels, meal plan and cab, and check what is excluded." },
      { q: "How many days are ideal for a Kashmir package?", a: "5 to 6 nights for a first visit covers Srinagar, Gulmarg, Pahalgam and Sonamarg comfortably. 4 nights covers the classic three; 7 nights adds a night in each resort or quieter meadows." },
      { q: "What should a Kashmir package include?", a: "Hotels with breakfast and dinner, a private cab for transfers and sightseeing, airport pickup and drop, and usually one shikara ride. Gondola tickets and Pahalgam union taxis are usually extra." },
      { q: "Why do Kashmir package prices vary so much?", a: "Because of season, hotel category and location, cab type, meal plan and group size, and because some quotes leave out items others include." },
      { q: "Is it better to stay in one hotel or move around in Kashmir?", a: "One or two bases with day trips suit families and older travellers; three or four bases suit couples and summer trips. Pahalgam is best as an overnight stop either way." },
      { q: "Are Gulmarg Gondola tickets included in Kashmir packages?", a: "Usually not. They are sold online by the cable car corporation and are best booked as soon as your dates are fixed." },
      { q: "What is MAP in a Kashmir package?", a: "Modified American Plan: breakfast and dinner included. It is the standard meal plan for Kashmir packages." },
      { q: "Which cab should we choose for a Kashmir trip?", a: "A sedan for two people, an SUV such as an Innova Crysta for four adults with luggage, and a tempo traveller for six or more." },
      { q: "How can I tell if a cheap Kashmir package is genuine?", a: "Check the hotel names and reviews, the meal plan, the cab type and what is excluded. 5-star hotels at budget prices, missing hotel names and no written quote are warning signs." },
      { q: "When should I book a Kashmir package?", a: "Six to eight weeks ahead for April to June, Christmas and New Year and festival weeks; two to four weeks is usually enough in the shoulder months." },
    ],
  },
];

export const PACKAGE_KEYWORD_ADDITIONS: Record<string, Addition> = {
  "manali-to-leh-road-trip-guide": {
    sections: [
      {
        h: "Srinagar, Leh and Manali: the 9 nights 10 days loop",
        p: [
          "The classic Ladakh road trip enters from one side and leaves by the other: in from Srinagar over Zojila and out to Manali over Baralacha La, or the reverse. Starting from Srinagar is easier on the body, because the climb through Kargil to Leh is gradual, and the higher Manali highway comes at the end, when you are acclimatised. Both highways are open together only from about June to October, so that is the season for the loop.",
        ],
        days: [
          "Arrive in Srinagar. Shikara on Dal Lake. Overnight in Srinagar.",
          "Drive to Sonamarg, over Zojila to Drass and the Kargil War Memorial, and on to Kargil. Overnight in Kargil.",
          "Drive to Leh via Mulbekh, Namika La, Fotu La and Lamayuru's moonland. Overnight in Leh.",
          "Rest day in Leh to acclimatise; an easy evening walk to Shanti Stupa. Overnight in Leh.",
          "Leh Palace, Thiksey, Shey and Hemis monasteries. Overnight in Leh.",
          "Drive to Nubra over Khardung La. Diskit Monastery and the Hunder dunes. Overnight in Nubra.",
          "Drive to Pangong by the Shyok road, or back via Leh if it is closed. Overnight at Pangong.",
          "Back to Leh over Chang La. Overnight in Leh.",
          "Leave Leh early on the Manali highway over Taglang La, the More Plains and the Gata Loops to Sarchu or Jispa. Overnight at the halt.",
          "Over Baralacha La, past Suraj Tal, through Lahaul and the Atal Tunnel to Manali.",
        ],
      },
      {
        h: "Which way first: Srinagar or Manali?",
        list: [
          "Srinagar to Leh first: a gentler climb (Kargil at about 2,676 m, then Leh at about 3,500 m), so you acclimatise on the way. Best for most travellers, and the only full loop option in May or late October, when one highway may still be closed.",
          "Manali to Leh first: you cross passes near 5,000 m and sleep at Sarchu (about 4,300 m) before reaching Leh, which is hard on the body if you come straight from the plains. Better as the exit route.",
          "Fly in, drive out: fly to Leh, acclimatise, see Ladakh, then drive out to Manali. A good compromise if you want only one highway.",
        ],
      },
      {
        h: "Sights along the Manali to Leh highway",
        list: [
          "The Atal Tunnel, about 9 km long under the Pir Panjal, opened in 2020, which replaced the drive over Rohtang Pass for through traffic.",
          "Keylong and Jispa in the Bhaga valley of Lahaul, green, with villages and monasteries.",
          "Deepak Tal and Suraj Tal, two small lakes below Baralacha La; Suraj Tal is the source of the Bhaga river.",
          "Baralacha La at about 4,890 m, where the Himachal and Ladakh ranges meet.",
          "Sarchu's open plains on the border, with seasonal camps.",
          "The Gata Loops, 21 hairpin bends climbing towards Nakee La.",
          "Pang, the highest of the transit camps, and the long, flat More Plains at about 4,700 m.",
          "Taglang La at about 5,300 m, then the descent through Rumtse and Upshi to the Indus valley.",
          "A detour to Tso Kar, the salt lake, from Debring on the More Plains.",
        ],
      },
      {
        h: "What a Srinagar Leh Manali package includes",
        list: [
          "Hotels in Srinagar, Kargil and Leh, camps or hotels in Nubra and Pangong, and a camp or hotel at Sarchu or Jispa, usually with breakfast and dinner.",
          "A taxi for each part: Kashmir and Ladakh rules mean the vehicle may change at Leh, with a Leh taxi union cab for Ladakh sightseeing and a vehicle for the Manali leg.",
          "Protected area registration for Nubra and Pangong on the LAHDC Leh portal, when listed.",
          "Not included: flights, monastery entries, camel rides, oxygen if needed, lunches and tips.",
        ],
      },
      {
        h: "Packing for the high highways",
        p: [
          "Pack for four seasons in one day: hot sun on the More Plains, snow flurries on Baralacha La and freezing nights at Sarchu. Carry thermals, a down jacket, gloves, a woollen cap, sunglasses, sunscreen, lip balm, water, snacks, motion-sickness tablets, any prescription medicines and a basic first-aid kit. Keep printed copies of permits and ID, cash for camps, and a power bank. Fuel is available at Tandi near Keylong and then not again until Karu near Leh, so drivers fill up at Tandi.",
        ],
      },
    ],
    faqs: [
      { q: "What is a Srinagar Leh Manali package?", a: "A road trip that enters Ladakh from Srinagar via Kargil and leaves by the Manali highway, or the reverse, usually 9 to 11 nights with Nubra and Pangong in between." },
      { q: "Is it better to start the Ladakh road trip from Srinagar or Manali?", a: "From Srinagar for most travellers, because the climb to Leh is gradual. The Manali highway is higher and better as the exit route once you are acclimatised." },
      { q: "Do we need Rohtang permits to drive from Manali to Leh?", a: "Through traffic uses the Atal Tunnel instead of Rohtang Pass. Check the current Himachal rules for vehicles and for visiting Rohtang itself, which needs a separate permit." },
      { q: "Can families with children do the Manali to Leh drive?", a: "Yes, with care: break the drive at Jispa rather than Sarchu, keep the trip slow, and talk to a doctor about altitude for young children." },
    ],
  },
  "turtuk-travel-guide": {
    sections: [
      {
        h: "Turtuk in a Ladakh tour package",
        list: [
          "6 nights 7 days: Leh 2N, Hunder 2N with a Turtuk day trip, Pangong 1N via the Shyok road, Leh 1N.",
          "7 nights 8 days with a Turtuk night: Leh 2N, Hunder 1N, Turtuk 1N in a homestay, Hunder or Diskit 1N, Pangong 1N, Leh 1N.",
          "Kargil and Turtuk: a road trip from Srinagar via Kargil to Leh, then Nubra and Turtuk, for travellers who want both of Ladakh's Muslim-majority regions as well as its Buddhist heartland.",
        ],
      },
    ],
    faqs: [{ q: "Can Turtuk be added to a 5-night Ladakh package?", a: "Only by dropping Pangong or adding a night, because Turtuk is about 90 km beyond Hunder. A 6 or 7 night trip fits it comfortably." }],
  },
  "hanle-stargazing-travel-guide": {
    sections: [
      {
        h: "Hanle in a Ladakh tour package",
        list: [
          "5 nights 6 days: Leh 2N, Hanle 1N, Tso Moriri 1N, Leh 1N.",
          "7 nights 8 days: Leh 2N, Nubra 1N, Pangong 1N, Hanle 1N via Chushul where the road is open, Tso Moriri 1N and Leh 1N.",
          "Astronomy-focused: Leh 2N and Hanle 2N, with two full nights under the sky to allow for cloud, then back to Leh.",
        ],
        p: [
          "Hanle is one of the highest overnight stops in Ladakh, at about 4,500 m, so packages always place it after at least two nights in Leh. Homestays in the villages around the observatory run night-sky sessions with telescopes; ask the agent to book one with a trained local ambassador of the Dark Sky Reserve.",
        ],
      },
    ],
    faqs: [
      { q: "Can Hanle and Tso Moriri be done together?", a: "Yes. Both are reached through Chumathang and Nyoma, so a Leh, Hanle, Tso Moriri and Leh loop is a natural 5 nights 6 days plan." },
      { q: "How many nights should we stay in Hanle?", a: "One night is the minimum; two nights give a second chance if clouds cover the sky on the first." },
    ],
  },
};

// Second layer of additions (same day): more depth where the first drafts
// still trailed the matching TDI page.
export const PACKAGE_KEYWORD_ADDITIONS_2: Record<string, Addition> = {
  "how-to-choose-a-kashmir-tour-package": {
    sections: [
      {
        h: "Private, group or fixed-departure packages",
        list: [
          "Private package: your own cab and driver, your own pace and dates. Most Kashmir packages are private, and they suit couples, families and friends.",
          "Group or fixed-departure tour: you join other travellers on set dates in a tempo traveller or coach. Cheaper for solo travellers, less flexible, and the hotels are chosen for the group.",
          "Customised package: a private package built around your own route, such as adding Gurez, Doodhpathri or Vaishno Devi. Agents on Tavel Package build these from your dates and wishes.",
          "Self-planned trip: booking hotels and a cab yourself. Possible, but you handle the gondola, union taxis and changes on your own.",
        ],
      },
      {
        h: "Payment, cancellation and changes",
        p: [
          "Ask for the payment schedule in writing before paying anything: how much is due to confirm, when the balance is due, and whether you pay the agent or the hotels. A part-payment to confirm hotels is normal; full payment months in advance is not.",
          "Then read the cancellation policy. Kashmir packages usually have a scale: a small deduction if you cancel well before travel, rising as the date approaches, with peak-season hotels and houseboats often non-refundable close to arrival. Ask what happens if a flight is cancelled, a road closes because of snow or landslides, or the government issues an advisory, and whether unused nights can be moved rather than lost.",
        ],
      },
      {
        h: "Questions to ask on the first call",
        list: [
          "Which hotels and houseboat will you use, by name?",
          "Is the cab private for every day, and what vehicle is it?",
          "What is the meal plan?",
          "Are gondola tickets, union taxis and the shikara included or extra?",
          "How do you handle a road closure or bad weather?",
          "Are you registered with the tourism department, and do you have a local office in Kashmir?",
          "Who is our contact during the trip?",
        ],
      },
      {
        h: "Choosing by budget without regrets",
        p: [
          "If the budget is tight, cut nights or hotel category before cutting location: a simple hotel near Dal Lake beats a better one far away. Keep breakfast and dinner in the plan, because eating out every evening costs more than it saves. Travel in March, early April, late September, October or November rather than May and June. And choose one splurge, usually the houseboat night or a Gulmarg hotel near the gondola, rather than spreading the money thinly across every night.",
        ],
      },
    ],
    faqs: [
      { q: "Is a group tour or a private package better for Kashmir?", a: "A private package suits most couples and families because you set the pace. Group tours are cheaper for solo travellers but less flexible." },
      { q: "What is a fair advance payment for a Kashmir package?", a: "A part-payment to confirm hotels is normal, with the balance closer to travel. Ask for the schedule and cancellation terms in writing before paying." },
    ],
  },
  "manali-to-leh-road-trip-guide": {
    sections: [
      {
        h: "Altitude along the Manali to Leh highway",
        list: [
          "Manali: about 2,050 m.",
          "Atal Tunnel: about 3,000 m.",
          "Keylong: about 3,080 m; Jispa about 3,200 m.",
          "Baralacha La: about 4,890 m.",
          "Sarchu: about 4,290 m.",
          "Nakee La about 4,740 m and Lachulung La about 5,060 m.",
          "Pang: about 4,600 m; the More Plains about 4,700 m.",
          "Taglang La: about 5,300 m.",
          "Leh: about 3,500 m.",
        ],
        p: [
          "The road spends most of its second day above 4,500 m. That is why the overnight halt matters: Jispa, lower down in Lahaul, is easier on the body than Sarchu, especially if you are driving up from the plains without acclimatising.",
        ],
      },
      {
        h: "Road conditions and water crossings",
        p: [
          "Most of the highway is paved now, but stretches near Pang, the Gata Loops and around the passes can be broken or under repair, and snow melt creates water crossings, such as those near Zingzingbar and Pagal Nala, that run high in the afternoon in June and July. Drivers start early to cross before the water rises. Landslides are possible after rain. The Border Roads Organisation clears the road each spring and posts updates; your driver or agent will check conditions before you set out.",
        ],
      },
      {
        h: "One way or both ways?",
        list: [
          "One way (Manali to Leh, fly out): the most popular choice, two days on the road and a flight home from Leh.",
          "One way (fly in, drive out): acclimatise in Leh first, then drive to Manali at the end, when the altitude no longer bothers you.",
          "Both ways (Manali Leh Manali): four days on the same road; only worth it for bikers who love the ride.",
          "Loop with Srinagar: in via Kargil, out via Manali, or the reverse, the best way to see both highways.",
        ],
      },
    ],
    faqs: [
      { q: "Is Jispa or Sarchu better for the overnight stop?", a: "Jispa, at about 3,200 m, is lower and easier for sleeping; Sarchu, at about 4,290 m, saves driving time the next day but can cause altitude discomfort." },
      { q: "Is the Atal Tunnel open all year?", a: "The tunnel itself is an all-weather route into Lahaul, but the high passes beyond, such as Baralacha La, close in winter, so the Manali to Leh highway is open only from about June to October." },
    ],
  },
  "hanle-stargazing-travel-guide": {
    sections: [],
    faqs: [
      { q: "Can we stay in a homestay in Hanle?", a: "Yes. Homestays in the villages around the observatory are the main option, many with trained night-sky guides and telescopes." },
      { q: "Is Hanle open in winter?", a: "Hanle is reachable for much of the year, and winter skies are among the clearest, but temperatures fall far below freezing and some homestays close. Most visitors come between May and October." },
    ],
  },
};

// Third layer (same day).
export const PACKAGE_KEYWORD_ADDITIONS_3: Record<string, Addition> = {
  "how-to-choose-a-kashmir-tour-package": {
    sections: [
      {
        h: "How to compare packages from different cities",
        p: [
          "Packages sold in your home city often bundle flights with the Kashmir ground arrangements, while local Kashmir agents usually quote the ground part only. To compare them, take the flight cost out of the bundled price, or ask the local agent to add the same flights. Check also where the package starts: some begin at Jammu or Katra, which adds a day of travel, while most begin at Srinagar airport.",
        ],
      },
      {
        h: "Signs of a good Kashmir agent",
        list: [
          "Names every hotel and houseboat, with the room type.",
          "Explains the gondola, union taxi and Zero Point rules without being asked.",
          "Suggests fewer places when your days are short, not more.",
          "Gives a written quote and a clear cancellation policy.",
          "Has a local contact who answers during the trip.",
        ],
      },
    ],
    faqs: [
      { q: "Should I book a Kashmir package with flights or without?", a: "Either works. Booking flights yourself gives more choice of timings; a bundled package is simpler. Compare both on the same hotels and plan." },
      { q: "Can I change a Kashmir package after booking?", a: "Usually, before travel, subject to hotel availability. Ask the agent how changes and refunds work before you pay." },
    ],
  },
  "manali-to-leh-road-trip-guide": {
    sections: [
      {
        h: "Planning a bike trip on the Manali to Leh highway",
        list: [
          "Rent a bike in Manali with the papers needed for Ladakh, or ride your own; check the rental rules for taking a Manali bike into Ladakh for sightseeing.",
          "Ride with at least one other bike and, ideally, a backup vehicle for luggage and spares.",
          "Carry a puncture kit, spare clutch and brake cables, a tow rope and enough fuel to cover Tandi to Karu.",
          "Wear proper riding gear: helmet, gloves, a riding jacket and waterproof layers.",
          "Ride only in daylight, and start each day early to cross water streams before they rise.",
        ],
      },
    ],
    faqs: [
      { q: "Can we do Manali to Leh in a sedan?", a: "In good conditions many sedans make it, but ground clearance is low for the water crossings and broken stretches. An SUV is the safer choice." },
      { q: "Is there mobile network on the Manali to Leh highway?", a: "Only in a few places, such as Keylong and Jispa. Expect long stretches with no signal; postpaid connections work best in Ladakh." },
    ],
  },
};

// Fourth layer (same day): last margin on the four posts measured short on
// the local production build.
export const PACKAGE_KEYWORD_ADDITIONS_4: Record<string, Addition> = {
  // Japan and Siliguri posts live in kashmir-gaps-*; these add only what
  // they did not already cover.
  "kashmir-tour-packages-from-japan": {
    sections: [
      {
        h: "Practical packing for travellers from Japan",
        list: [
          "A universal plug adapter: India uses Type C, D and M sockets at 230 V.",
          "A small amount of Indian rupees on arrival for tips, shikaras and small purchases.",
          "Personal medicines with a copy of the prescription.",
          "Light layers even in summer for evenings in Gulmarg, Pahalgam and Sonamarg.",
          "Your passport and visa at all times: hotels register foreign guests on a Form C and some check posts ask to see them.",
        ],
      },
    ],
    faqs: [
      { q: "What is the time difference between Japan and Kashmir?", a: "India is 3.5 hours behind Japan and does not use daylight saving time." },
      { q: "Is Kashmir good for autumn colours like Japan's koyo?", a: "Yes. The chinar trees of Srinagar and the Mughal gardens turn red and gold from late October to early November, one of the most beautiful sights in Kashmir." },
      { q: "Can I use Japanese credit cards in Kashmir?", a: "Major international cards work in Srinagar's hotels and larger shops, and at many ATMs. Carry cash for shikaras, ponies, taxis and small purchases." },
      { q: "Can we book a Japanese-speaking guide in Kashmir?", a: "Japanese-speaking guides are rare. English is widely spoken; arrange a Japanese-speaking guide in advance through your agent if you need one." },
    ],
  },
  "kashmir-tour-packages-from-siliguri": {
    sections: [
      {
        h: "Bagdogra to Srinagar step by step",
        list: [
          "Book Bagdogra to Delhi and Delhi to Srinagar on one ticket if you can, with a connection of at least 2 hours; separate tickets need 3 to 4 hours.",
          "Reach Bagdogra airport about two hours before departure; it is a civil enclave in an Air Force station, so allow time for the entry checks.",
          "In Delhi, follow the transfer signs if your bags are checked through; otherwise collect them and check in again for the Srinagar flight.",
          "At Srinagar, your driver meets you at the exit. The airport is about 30 to 45 minutes from Dal Lake.",
          "On the way home, reach Srinagar airport two to three hours early because of the security check at the outer gate as well as inside.",
        ],
      },
      {
        h: "Common mistakes when planning Kashmir from Siliguri",
        list: [
          "Booking the cheapest flights with a six-hour layover in Delhi and losing the first day in Kashmir.",
          "Planning a late evening arrival at Bagdogra followed by a night drive to Gangtok or Darjeeling.",
          "Packing for Darjeeling weather; Gulmarg, Sonamarg and Pahalgam are much colder at night.",
          "Bringing only a prepaid SIM, which will not work in Kashmir.",
          "Waiting until September to book Puja-holiday flights.",
        ],
      },
    ],
    faqs: [],
  },
  "kashmir-3-day-itinerary": {
    sections: [],
    faqs: [{ q: "What does a Kashmir 3 day tour package include?", a: "Usually 2 nights in Srinagar or on a houseboat with breakfast and dinner, a private cab for the airport transfers and a Gulmarg day trip, and a shikara ride on Dal Lake. Gondola tickets, lunches and ponies are extra." }],
  },
  "keran-valley-kashmir-guide": {
    sections: [],
    faqs: [{ q: "What does a Keran Valley tour package include?", a: "Usually Srinagar nights before and after, one or two nights in Keran in a guesthouse or homestay, a private cab from Srinagar via Kupwara, and help with the Keran permit, applied for through the Kupwara district process or at the Kralpora police station. Foreign nationals should confirm in advance whether access is allowed." }],
  },
  "how-to-choose-a-kashmir-tour-package": {
    sections: [
      {
        h: "Short checklist before you pay",
        list: [
          "Nights match your flights, with a morning arrival and an afternoon departure.",
          "Bases chosen for your group, with Pahalgam as an overnight stop.",
          "Season fits the route, including Zojila, Gurez or Doodhpathri dates.",
          "Hotels named, with category matching the price.",
          "Meal plan, cab type and extras written out.",
          "Local costs known: gondola, union taxis, ponies, extra shikaras.",
          "Payment schedule and cancellation policy in writing.",
        ],
      },
    ],
    faqs: [{ q: "Is it cheaper to book a Kashmir package on arrival in Srinagar?", a: "Sometimes in the off-season, but in peak months hotels, houseboats and gondola tickets sell out, and you lose time arranging things. Booking ahead with a written quote is safer." }],
  },
  "manali-to-leh-road-trip-guide": {
    sections: [],
    faqs: [
      { q: "What is the best month for a Srinagar Leh Manali road trip?", a: "July to mid-September, when both highways are normally open and the water crossings are lower later in the season. Late June and early October are possible with flexible plans." },
      { q: "How many days does a Srinagar Leh Manali loop need?", a: "At least 9 nights, with a night in Kargil, two rest days in Leh, Nubra and Pangong, and a night at Jispa or Sarchu on the way to Manali. 10 to 11 nights is more comfortable." },
    ],
  },
};
