// TDI depth pass 3, part 4 (2026-11-25): final layer for the batch 3 posts.
// Appended by withAdditions in blog/index.ts. Rules: checkable facts, no
// typed fares or prices, no em dashes, no question asked elsewhere.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const TDI_DEPTH_11_ADDITIONS: Record<string, Addition> = {
  "how-to-choose-a-kashmir-travel-agent": {
    faqs: [
      { q: "Is a larger advance normal for Kashmir trips in peak season?", a: "It can be, since hotels ask agents for more to hold rooms in peak weeks. Get the hotel's own confirmation number once the room is booked." },
      { q: "What does 'as per availability' mean in a Kashmir quote?", a: "That the hotel or car is not yet confirmed. Ask for named properties and a car model before you pay." },
      { q: "Should I pay a Kashmir agent to a personal bank account?", a: "No. Pay to an account in the business name shown on the invoice, using a method that leaves a record." },
      { q: "What if someone calls with new bank details for my Kashmir agency?", a: "Do not pay. Call the agency on a number you already have and confirm before sending money." },
    ],
  },

  "srinagar-to-gurez-taxi": {
    faqs: [
      { q: "Can my Gurez taxi take us up the Tulail valley?", a: "Yes, as a full extra day from Dawar on a rough, slow road. Ask for it in the quote." },
      { q: "Does my driver stay overnight in Gurez?", a: "Usually at your guesthouse or with local contacts in Dawar. Confirm who pays for the driver's room." },
    ],
  },

  "kashmir-itinerary-4-and-5-days": {
    sections: [
      {
        h: "A 4-day plan for older parents",
        p: [
          "For older parents, base all four nights in one Srinagar hotel with a lift and heating. Day one is rest and a short shikara. Day two is the Mughal gardens at a slow pace. Day three is Gulmarg with gondola Phase 1 only, leaving after lunch. Day four is Hazratbal and an early drive to the airport. Keep daily drives short and plan an afternoon rest every day.",
        ],
      },
      {
        h: "A 5-day plan for families with young children",
        p: [
          "Families with small children do best with fewer hotel changes and shorter drives. Stay three nights in Srinagar and one in Pahalgam, or all four in Srinagar with day trips. Spend day two in Gulmarg for snow and gondola Phase 1, day three in Pahalgam with Betaab Valley, which has flat paths and space to play, and keep day four light with a shikara, the Botanical Garden and an early night. Choose a hotel with heating, a lift and a restaurant that will cook plain food. Pack snacks, wet wipes, warm layers and a light carrier for meadows where prams are hard to push.",
        ],
      },
      {
        h: "A 4-day honeymoon plan with a houseboat",
        days: [
          "Day 1: check into a Nigeen or Dal houseboat, a sunset shikara and dinner on board.",
          "Day 2: Mughal gardens and Pari Mahal, then a move to a lake-view hotel.",
          "Day 3: Gulmarg, the gondola and a slow lunch with a view.",
          "Day 4: a late breakfast, a little shopping on Boulevard Road and the airport.",
        ],
      },
    ],
    faqs: [
      { q: "Can I take the Katra train and still do a 5-day Kashmir trip?", a: "Yes. The train reaches Srinagar in a few hours, leaving the afternoon of day one for Dal Lake." },
      { q: "Is Sonamarg worth it on a 4-day winter trip?", a: "Only if the forecast is good. On short winter trips, focus on Srinagar and Gulmarg." },
      { q: "Is Betaab Valley good for small children?", a: "Yes. It has flat paths, open lawns and space to play, reached by union taxi from Pahalgam." },
      { q: "Should I book a houseboat on the first night of a 4-day honeymoon?", a: "It works well: the lake gives a calm first evening, then you move to a hotel for the rest." },
    ],
  },

  "kashmir-3-day-itinerary": {
    sections: [
      {
        h: "A 3-day plan for pilgrims after Vaishno Devi",
        p: [
          "Pilgrims coming from Katra can take the train to Srinagar on day one, spend the afternoon at Hazratbal and on Dal, visit Gulmarg on day two, and on day three see Shankaracharya temple or the Mughal gardens before returning by train to Katra or Jammu. The train saves a long road day and leaves more time in the valley.",
        ],
      },
      {
        h: "A 3-day plan in autumn",
        p: [
          "In October and early November, Srinagar's chinar trees turn red and gold. Spend day one in the gardens and on Dal, day two in Pahalgam for the golden poplars along the Lidder or Gulmarg for clear mountain views, and day three at Pampore's saffron fields, which flower from late October, before the airport.",
        ],
      },
      {
        h: "A 3-day plan for a family with children",
        p: [
          "With children, keep a 3-day trip simple. Day one: a short shikara and the Mughal gardens, with time to rest after the flight. Day two: Gulmarg for snow, sledging and gondola Phase 1, returning to Srinagar or staying the night. Day three: the Botanical Garden or a boat ride, then the airport. Carry snacks, warm clothes and wet wipes, and choose a hotel with heating and a lift.",
        ],
      },
      {
        h: "A 3-day plan for a group of friends",
        p: [
          "Friends often want activity. Day one: a shikara, the old city and dinner at a wazwan restaurant. Day two: Gulmarg for the gondola, snow activities or an ATV ride, or Pahalgam for river rafting in summer. Day three: a morning cafe in Srinagar and shopping, then the airport. A tempo traveller or two cars keep the group together.",
        ],
      },
    ],
    faqs: [
      { q: "Can I try skiing on a 3-day Kashmir trip?", a: "Yes, a half-day beginner lesson on Gulmarg's gentle slopes in the ski season, usually January to March." },
      { q: "Is a weekend enough for Srinagar and Gulmarg?", a: "Yes, with a Friday morning arrival, a Gulmarg night on Saturday and a Sunday evening flight." },
      { q: "What should children do on a 3-day Kashmir trip?", a: "A short shikara, sledging and gondola Phase 1 in Gulmarg, and the Botanical Garden on the last morning." },
      { q: "What should friends do on a 3-day Kashmir trip?", a: "A wazwan dinner, the Gulmarg gondola or an ATV ride, and rafting at Pahalgam in summer." },
    ],
  },

  "where-to-stay-in-sonamarg": {
    sections: [
      {
        h: "Sonamarg in spring",
        p: [
          "In April and May, snow still covers much of Sonamarg's meadows and the slopes towards Thajiwas, while the road from Srinagar is open. Some hotels are just reopening after winter, so confirm that yours is open and heated. Spring brings sledging on the remaining snow and the first green grass by the Sindh. Zojila usually opens later in spring after snow clearance, so check before planning Zero Point.",
        ],
      },
      {
        h: "Sonamarg hotels and power",
        p: [
          "Electricity in Sonamarg can be intermittent, especially in winter and bad weather. Ask whether your hotel runs a generator, for how many hours, and whether it powers heaters and geysers. Carry a power bank and a torch.",
        ],
      },
      {
        h: "Sonamarg weather through the day",
        p: [
          "Sonamarg's weather changes quickly. Summer mornings are cool and clear, middays can be warm in the sun, and afternoons often bring cloud, wind and a shower. Evenings are cold even in July. In spring and autumn, nights drop near freezing. Pack layers you can add and remove, a rain jacket and warm clothes for the evening, whatever the forecast in Srinagar says.",
        ],
      },
      {
        h: "Sonamarg with children",
        p: [
          "Children enjoy the snow at Thajiwas, the river and the pony rides. Keep them away from the river, which is fast and cold. Choose a hotel with heating and plain food options. Short pony rides on a led pony are safer than long rides. In winter, sledging near the town is a highlight.",
        ],
      },
    ],
    faqs: [
      { q: "Are Sonamarg hotels open in April?", a: "Some reopen in April after winter, with snow still around the town. Confirm that your hotel is open and heated before you travel." },
      { q: "Do Sonamarg hotels have generators?", a: "Many do, for limited hours. Ask whether the generator powers heaters and geysers, and carry a power bank." },
      { q: "Is Sonamarg cold in July?", a: "The days can be warm, but evenings are cold, so bring warm layers even in July." },
      { q: "Is Sonamarg good for children?", a: "Yes, for snow at Thajiwas, the river and short led pony rides. Keep children away from the river." },
      { q: "Where can I eat in Sonamarg?", a: "At hotels and dhabas along the main road, serving rice, rajma, Maggi, parathas and tea." },
      { q: "Can I store luggage in a Sonamarg hotel before a trek?", a: "Many hotels and trek operators will store luggage. Ask when you book." },
      { q: "When does rafting start in Sonamarg?", a: "Usually in early summer, once the Sindh river is safe for rafting. Check with registered operators." },
    ],
  },

  "kashmir-taxi-guide": {
    faqs: [
      { q: "What should a Kashmir taxi package quote list?", a: "Each day's route and night stop, the car model, inclusions and exclusions, the total, the payment terms and how extra kilometres are charged." },
      { q: "Can I book a Kashmir taxi package for a Ladakh road trip?", a: "Yes for Srinagar to Leh, but local sightseeing in Ladakh usually needs a Ladakh-registered taxi." },
      { q: "Is a winter taxi package in Kashmir different?", a: "It should include chains, possibly four-wheel drive, and flexible days for snow closures." },
      { q: "Can a Kashmir taxi package include Gurez or Keran?", a: "Yes. Ask for an SUV and confirm the driver knows the route." },
    ],
  },

  "gulmarg-skiing-and-snow-activities": {
    sections: [
      {
        h: "Gulmarg ski week by budget",
        p: [
          "Costs on a ski week come from four parts: the hotel, lessons or a guide, equipment hire and gondola tickets. Budget skiers stay in simpler hotels or in Tangmarg, share an instructor in a small group and hire basic gear. Mid-range skiers stay near the gondola with daily lessons. Experts budget for a certified guide, avalanche gear and flexible days for powder. Ask for an itemised quote so you can see each part.",
        ],
      },
      {
        h: "Gulmarg ski schools and certification",
        p: [
          "Ski instruction in Gulmarg is offered by the government-run Indian Institute of Skiing and Mountaineering and by private instructors and schools. Ask about each instructor's certification and experience, the group size and the language of instruction. For off-piste guiding, choose guides with recognised mountain and avalanche training.",
        ],
      },
      {
        h: "Skiing or snowboarding for a first-timer?",
        p: [
          "Most beginners find skiing easier on the first day, since you can stand and slide more quickly, while snowboarding has a harder start but can progress fast after a few days. Gulmarg's instructors teach both. If you are not sure, start with skiing for a day or two. Snowboarders should be ready for falls on the first days, and wear wrist guards and padded shorts.",
        ],
      },
      {
        h: "Gulmarg ski trip for a mixed group",
        p: [
          "In many groups, some people ski and others do not. Non-skiers can ride the gondola, go sledging, take snowmobile or ATV rides on the meadow, walk to the church in the snow, or enjoy the views from the Kongdori cafe. Meet for lunch at the gondola stations. Choose a hotel near the gondola so everyone can go back easily.",
        ],
      },
      {
        h: "When to book a Gulmarg ski trip",
        p: [
          "Book hotels, lessons and gondola tickets several months ahead for January and February, especially around holidays and winter games. Late February and March can be easier to book. Keep a buffer for flights, since snow can delay arrivals in Srinagar.",
        ],
      },
    ],
    faqs: [
      { q: "Does IISM teach skiing in Gulmarg?", a: "Yes. The government-run Indian Institute of Skiing and Mountaineering runs ski courses in Gulmarg, alongside private instructors." },
      { q: "How can I keep a Gulmarg ski week on budget?", a: "Stay in a simpler hotel or Tangmarg, share an instructor in a small group and hire basic gear." },
      { q: "Is skiing or snowboarding easier for beginners in Gulmarg?", a: "Skiing is usually easier on the first day; snowboarding is harder to start but can progress fast." },
      { q: "What can non-skiers do on a Gulmarg ski trip?", a: "Ride the gondola, sledge, take snowmobile or ATV rides, walk in the snow and enjoy the station cafes." },
      { q: "How early should I book a Gulmarg ski trip?", a: "Several months ahead for January and February. Late February and March can be easier." },
      { q: "Is heli-skiing available in Gulmarg every year?", a: "No. It has operated in some seasons, depending on permits, operators and weather." },
      { q: "Can I hire ski clothing in Gulmarg?", a: "Yes. Waterproof jackets and trousers can be hired in Gulmarg's ski shops." },
      { q: "What are the basic slope rules in Gulmarg?", a: "The skier below has right of way, do not stop where you cannot be seen, and look uphill before starting." },
    ],
  },

  "vaishno-devi-helicopter-booking-guide": {
    sections: [
      {
        h: "Helicopter yatra in winter",
        p: [
          "In winter, the helicopter runs when weather permits, but fog, low cloud and snow can cause delays or cancellations. Mornings may be foggy, and the Bhawan area is cold, sometimes with snow. Carry warm clothes, keep extra days, and check the Shrine Board's updates before travelling to Katra.",
        ],
      },
    ],
    faqs: [
      { q: "Does the Vaishno Devi helicopter fly in winter fog?", a: "Not when visibility is poor. Fog and low cloud often delay winter flights, so keep spare days." },
      { q: "Is the Bhawan cold in winter?", a: "Yes, and it sometimes has snow. Carry warm clothes for the walk from Sanjichhat." },
      { q: "How many days should I plan for Vaishno Devi by helicopter?", a: "Two: one to arrive and register in Katra, and one for the helicopter yatra." },
      { q: "Do seats open up after Vaishno Devi helicopter cancellations?", a: "Sometimes. Check the Shrine Board's site regularly for released seats." },
      { q: "Which Katra hotels suit helicopter pilgrims?", a: "Hotels near the helipad or main road, with early breakfast and luggage storage." },
      { q: "Can I visit Bhairon temple on a helicopter yatra?", a: "Yes, if time allows after darshan, by walking or the ropeway from the Bhawan." },
      { q: "Is Katra busy during Navratri?", a: "Very busy. Book helicopter seats and hotels well in advance." },
    ],
  },

  "where-to-stay-in-kashmir": {
    sections: [
      {
        h: "Where to stay in Kashmir in spring",
        p: [
          "In spring, Srinagar is the best base for the tulip garden, almond blossom and Mughal gardens. Gulmarg still has snow in April, so a Gulmarg night gives you both snow and spring. Pahalgam's meadows turn green in May. Sonamarg reopens fully as the snow melts. Book Srinagar early for the tulip weeks.",
        ],
      },
      {
        h: "Where to stay in Kashmir in autumn",
        p: [
          "In autumn, Srinagar's chinars turn gold and red, and Pahalgam's poplars glow along the Lidder. Hotels are less crowded than in summer and rates are often easier. Nights are cold from October, so heating matters. Gulmarg's meadows turn brown, with the first snow possible from November.",
        ],
      },
      {
        h: "Where to stay in Kashmir in summer",
        p: [
          "Summer is the busiest season. All bases are open, including Sonamarg, Gurez and the offbeat valleys. Book Pahalgam and Gulmarg early, especially in June. Riverside rooms in Pahalgam and lakeside rooms in Srinagar are popular. Choose rooms with fans or AC for the warmer days in Srinagar.",
        ],
      },
      {
        h: "How many nights in each place?",
        list: [
          "Srinagar: two to three nights, with one or two on a houseboat.",
          "Gulmarg: one night for the gondola and the quiet evening; two or more for skiing.",
          "Pahalgam: two nights for the valleys and a slow morning by the Lidder.",
          "Sonamarg: one night if you want the glacier in the early morning or are going on to Ladakh.",
          "Offbeat valleys: one or two nights each, since the drives are long.",
        ],
      },
      {
        h: "Questions to ask before booking any Kashmir hotel",
        list: [
          "Is the property registered with the tourism department?",
          "Which room will we get, and can you send a photo of it?",
          "How is the room heated, and is there power backup?",
          "What does the meal plan include?",
          "What are the taxes and extra charges?",
          "What is the cancellation policy, including for road closures?",
          "Is there parking and a driver's room?",
          "How far is it from the places we plan to visit?",
        ],
      },
      {
        h: "Kashmir hotels for families",
        p: [
          "Families should look for hotels with family rooms or interconnecting rooms, a lift, heating, and a restaurant with simple food for children. In Srinagar, Boulevard Road and Rajbagh have many family-friendly hotels. In Gulmarg and Pahalgam, choose hotels close to the main activities to reduce walking with children.",
        ],
      },
      {
        h: "Kashmir hotels for honeymooners",
        p: [
          "Honeymooners often choose a houseboat night, a lake-view hotel on the Zabarwan slopes, a Gulmarg hotel with views of the meadow, and a riverside room in Pahalgam. Ask for upgrades, a quiet room and a candle-lit dinner when booking.",
        ],
      },
    ],
    faqs: [
      { q: "Where should I stay in Kashmir in spring?", a: "Srinagar for the tulip garden and blossom, with a Gulmarg night for April snow." },
      { q: "Where should I stay in Kashmir in autumn?", a: "Srinagar for the chinars and Pahalgam for the golden poplars along the Lidder, with heating for cold nights." },
      { q: "Which Kashmir bases are open in summer?", a: "All of them, including Sonamarg, Gurez and the offbeat valleys. Book Pahalgam and Gulmarg early." },
      { q: "Do Srinagar hotels need AC in summer?", a: "Some days are warm, so fans or AC help in July and August, though nights stay mild." },
      { q: "How many nights should I stay in Srinagar?", a: "Two to three nights, with one or two on a houseboat." },
      { q: "Which Kashmir hotels are best for families?", a: "Hotels with family or interconnecting rooms, a lift, heating and simple food, such as many on Boulevard Road and in Rajbagh." },
      { q: "Which Kashmir stays are best for honeymooners?", a: "A houseboat night, a lake-view hotel on the Zabarwan slopes, a Gulmarg meadow view and a riverside room in Pahalgam." },
      { q: "How many nights should I spend in offbeat Kashmir valleys?", a: "One or two nights each, since the drives are long." },
    ],
  },

  "kashmir-trip-for-senior-citizens": {
    sections: [
      {
        h: "A Kashmir trip for a senior couple",
        p: [
          "A senior couple travelling alone should choose a private car with a careful driver, one Srinagar hotel as a base, and gentle day trips. Ask the operator for a daily call to check in. Keep family informed of the plan each day. A houseboat night with a helpful family host is a good experience for couples who are comfortable with boarding.",
        ],
      },
      {
        h: "Accessible sights for wheelchair users",
        p: [
          "Wheelchair users can enjoy the shikara with help boarding, the lower terraces of Nishat and Shalimar, Hazratbal's courtyard, Boulevard Road's promenade, and the lawns of the Botanical Garden. Gulmarg's gondola stations have staff who help passengers. Many old city lanes, Pari Mahal's steps and Shankaracharya temple are difficult. Carry a lightweight folding wheelchair and ask the hotel and driver for help.",
        ],
      },
      {
        h: "Weather days to avoid for seniors",
        p: [
          "Avoid long drives on days with heavy rain or snow, when roads are slippery and slow. In winter, stay in Srinagar on snow days. In summer, avoid the hottest midday hours in Srinagar and Jammu. Check the forecast each evening with your driver and adjust the plan.",
        ],
      },
      {
        h: "Paperwork seniors should carry",
        p: [
          "Carry photo ID, copies of prescriptions, a list of medical conditions and allergies, the insurance policy, emergency contacts and a senior citizen card if you have one. Keep these in a waterproof pouch in your hand luggage. Share copies with a family member at home.",
        ],
      },
      {
        h: "Travel insurance that suits older travellers",
        p: [
          "Choose a policy that covers travellers of your age, pre-existing conditions if possible, hospital treatment, medical evacuation and trip cancellation. Read the age limits and exclusions carefully. Carry the policy number and the insurer's emergency contact. Some policies need you to call before treatment, so keep the number handy.",
        ],
      },
      {
        h: "Seniors on a houseboat: a checklist",
        list: [
          "A walkway or easy shikara boarding with staff help.",
          "A room near the sitting room and entrance.",
          "A non-slip bathroom floor and grab rails if possible.",
          "Hot water and good heating.",
          "Simple, soft food on request.",
          "A night light for moving around after dark.",
        ],
      },
      {
        h: "Seniors and the gondola queue",
        p: [
          "The Gulmarg gondola queue can be long and involves standing and stairs. Book an early slot, reach the base early, and ask staff about help for older passengers. Carry a light folding stool if standing is hard. Keep the visit to Phase 1 for most seniors.",
        ],
      },
      {
        h: "Food tips for older travellers",
        p: [
          "Kashmiri food is rich, with meat, ghee and spices. Seniors with sensitive digestion should ask for lighter dishes such as dal, rice, vegetables and yoghurt. Hotels can usually make low-oil, low-salt or diabetic-friendly meals on request. Drink warm water and kahwa, and avoid street food.",
        ],
      },
    ],
    faqs: [
      { q: "Can a senior couple travel Kashmir on their own?", a: "Yes, with a private car and careful driver, one Srinagar base, gentle day trips and a daily check-in call." },
      { q: "Which Kashmir sights suit wheelchair users?", a: "The shikara with help, the lower terraces of Nishat and Shalimar, Hazratbal's courtyard, Boulevard Road and the Botanical Garden lawns." },
      { q: "What documents should seniors carry in Kashmir?", a: "Photo ID, prescriptions, a list of conditions and allergies, the insurance policy and emergency contacts, in a waterproof pouch." },
      { q: "Should seniors drive in Kashmir on snow days?", a: "No. Stay in Srinagar on heavy snow or rain days, when roads are slippery and slow." },
      { q: "Are Pari Mahal and Shankaracharya hard for seniors?", a: "Both involve steps and slopes. Seniors with limited mobility may prefer the lower Mughal gardens." },
      { q: "What travel insurance should seniors take for Kashmir?", a: "A policy covering their age, pre-existing conditions if possible, hospital treatment, evacuation and cancellation." },
      { q: "Is the Gulmarg gondola queue hard for seniors?", a: "It can involve standing and stairs. Book an early slot and ask staff for help." },
      { q: "What should seniors eat in Kashmir?", a: "Lighter dishes like dal, rice, vegetables and yoghurt, with low-oil or diabetic-friendly meals on request." },
      { q: "Should seniors carry a folding stool in Kashmir?", a: "It helps in gondola queues and at viewpoints where seating is limited." },
      { q: "Is a night light useful for seniors on a houseboat?", a: "Yes. Houseboat floors and steps can be uneven, so a night light helps after dark." },
      { q: "Can seniors join a Kashmir group tour?", a: "Yes, if the pace is gentle. Ask about daily drive times and rest time before booking." },
    ],
  },
};
