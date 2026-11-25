// TDI depth pass 2, part 2 (2026-11-25): Srinagar areas, tulip trip, budget
// hotels, 7-day itinerary and wazwan posts, each paired with
// tdiholidayventures.com pages. Appended by withAdditions in blog/index.ts.
// Rules: checkable facts, no typed fares or prices, no em dashes.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const TDI_DEPTH_5_ADDITIONS: Record<string, Addition> = {
  "best-areas-to-stay-in-srinagar": {
    sections: [
      {
        h: "Choose an area by what you want to do first",
        p: [
          "Start from the first full day of your trip. If it is a shikara ride and the Mughal gardens, Boulevard Road or a houseboat puts you minutes from Dal's ghats and on the road to Nishat and Shalimar. If it is the old city, Jamia Masjid, Khanqah-e-Moula and the Jhelum bridges, Rajbagh or Lal Chowk is closer and avoids the lake traffic. If you are leaving early for Gulmarg or Sonamarg, a hotel near Hazratbal or on the north shore saves time on the way out of the city. If the trip starts with a long flight and you want calm, Nigeen or the Zabarwan foothills give you quiet evenings.",
        ],
      },
      {
        h: "Palace, lake-view and riverfront settings",
        p: [
          "Srinagar's stays fall into a few distinct settings. Palace and heritage properties, such as the former royal palace on Gupkar Road that is now a hotel, sit in old gardens with chinar trees and views over Dal. Hillside hotels on the Zabarwan slopes above Boulevard Road look down on the whole lake. Lakefront hotels along the boulevard face the water across the road. Riverfront hotels in Rajbagh and on the Jhelum Bund face the river and its old wooden bridges. Each gives a different feel; choose the one you will enjoy looking at each morning.",
        ],
      },
      {
        h: "Fit sightseeing around the hotel address",
        list: [
          "From Boulevard Road: Nishat and Shalimar gardens 15 to 25 minutes, the old city 20 to 30 minutes, the airport about 40 minutes.",
          "From Rajbagh or Lal Chowk: the old city 10 to 20 minutes, Dal Gate 10 minutes, the airport about 30 minutes.",
          "From Nigeen or Hazratbal: Hazratbal shrine a few minutes, the Gulmarg and Sonamarg roads quicker, the gardens 20 to 30 minutes.",
          "From the Zabarwan foothills: Cheshma Shahi and Pari Mahal close, the Tulip Garden a short drive, the city centre 15 to 25 minutes.",
          "Times are for normal traffic; add time in the evening rush and during festivals.",
        ],
      },
      {
        h: "Decide whether you want a hotel or a houseboat",
        p: [
          "A houseboat gives you a night on the water, Kashmiri hospitality and the lake at dawn, but rooms are smaller, heating is harder and you depend on a shikara or walkway to reach shore. A hotel gives more space, stronger heating, a lift and easier car access. Many travellers do both: one or two nights on a houseboat and the rest in a hotel. Families with older members or heavy luggage often prefer the hotel as the main base.",
        ],
      },
      {
        h: "Request the room and transfer details together",
        p: [
          "When you book, ask for the room type, bed size, view, floor and heating, and at the same time confirm the airport pickup, the driver's contact and the route to the hotel. Some lakefront hotels have their entrance on a side lane, and houseboats need a shikara or walkway. Having the transfer and room details in the same message avoids confusion on arrival.",
        ],
      },
      {
        h: "Staying in Srinagar's old city",
        p: [
          "A few heritage homestays and guesthouses operate in the old city, in restored wooden houses near the Jhelum. They suit travellers interested in architecture, crafts and local life, who want to walk to Jamia Masjid, the spice markets and the papier-mache workshops. Lanes are narrow and cars may not reach the door. Evenings are quiet, and the area is conservative, so dress modestly.",
        ],
      },
      {
        h: "Srinagar areas for business and long stays",
        p: [
          "Business travellers often stay in Rajbagh or near Residency Road, close to offices, banks and government buildings. Long-stay visitors, such as researchers or remote workers, can find serviced apartments and guesthouses in Rajbagh, Jawahar Nagar and Sonwar, which are residential, central and well connected. Ask about Wi-Fi speed, power backup and monthly rates.",
        ],
      },
    ],
    faqs: [
      { q: "Which Srinagar area is best for an early start to Gulmarg or Sonamarg?", a: "Hazratbal and the north shore, since they are on the way out of the city towards both." },
      { q: "Which Srinagar area is closest to the old city?", a: "Rajbagh and Lal Chowk, about 10 to 20 minutes from the old city in normal traffic." },
      { q: "Is there a palace hotel in Srinagar?", a: "Yes. The former royal palace on Gupkar Road is now a hotel, set in old gardens above Dal Lake." },
      { q: "Which Srinagar hotels have the best view of Dal Lake?", a: "Hillside hotels on the Zabarwan slopes above Boulevard Road look down over the whole lake." },
      { q: "Can I stay in the old city of Srinagar?", a: "Yes, in a few heritage homestays and guesthouses near the Jhelum. Lanes are narrow and cars may not reach the door." },
      { q: "Which Srinagar area suits a long stay?", a: "Rajbagh, Jawahar Nagar and Sonwar, which are residential, central and have serviced apartments." },
      { q: "How long does it take from Boulevard Road to Srinagar airport?", a: "About 40 minutes in normal traffic, more in the evening rush." },
      { q: "Should I split my Srinagar stay between a houseboat and a hotel?", a: "Many travellers do: one or two nights on a houseboat and the rest in a hotel with more space and heating." },
      { q: "Do lakefront hotels in Srinagar face the water directly?", a: "Most face the lake across Boulevard Road. Ask whether the room view is of the lake or the back." },
      { q: "Is Rajbagh close to the Jhelum?", a: "Yes. Rajbagh lies along the Jhelum, and riverfront hotels face the river." },
      { q: "Which Srinagar area is best for business travellers?", a: "Rajbagh and Residency Road, close to offices, banks and government buildings." },
    ],
  },

  "kashmir-tulip-festival-trip": {
    sections: [
      {
        h: "Where the tulip garden is and how it is laid out",
        p: [
          "The Indira Gandhi Memorial Tulip Garden lies at the foot of the Zabarwan range, between the Botanical Garden and Cheshma Shahi, above the eastern shore of Dal Lake. The garden is laid out in terraces that step down the slope, with long beds of tulips in blocks of single colours, separated by paths, fountains and water channels in the Mughal style. The upper terraces give views over the flower beds to Dal Lake. Benches and shaded areas are scattered through the garden.",
        ],
      },
      {
        h: "What earlier seasons tell you about the dates",
        p: [
          "In recent years, the garden has opened to the public in the second half of March, with the date announced only a few weeks before by the floriculture department. Peak bloom usually follows in the first two weeks of April, but it shifts with the weather: a warm March brings the tulips forward, a cold or rainy spring holds them back. Early varieties fade by mid-April, while late varieties carry on. Plan your trip for the first ten days of April if you want the best chance, and keep your dates flexible.",
        ],
      },
      {
        h: "Choose a visit time your group can use comfortably",
        p: [
          "The garden is quietest at opening time in the morning, when the light is soft and the beds are fresh. By late morning it fills with visitors, and weekends and public holidays are very crowded. Late afternoon brings warm light and thinner crowds. Families with small children or older members should go early, when it is cooler and less busy, and plan a rest at one of the benches. Allow two to three hours.",
        ],
      },
      {
        h: "Use a nearby outing if the bloom or weather changes",
        p: [
          "If the tulips have not opened or rain spoils the day, other spring gardens are close by. Badamwari, the almond garden below Hari Parbat in the old city, blooms in March. The Botanical Garden next door has spring flowers and a lake. Cheshma Shahi, Pari Mahal, Nishat and Shalimar are a short drive away and have their own spring colour. You can return to the tulip garden on a later day.",
        ],
      },
      {
        h: "Put the garden on a day you can move",
        p: [
          "Do not fix the tulip garden for your arrival day or your last day. Put it on a middle day in Srinagar, so if it rains or the bloom is not at its best, you can swap with another Srinagar day. If you are travelling on to Gulmarg or Pahalgam, keep one Srinagar day free at the end of the trip as a second chance.",
        ],
      },
      {
        h: "Choose your Srinagar room and pack for spring",
        p: [
          "Hotels near the Zabarwan foothills and on Boulevard Road are closest to the garden. Book early, since tulip season is busy. Spring days in Srinagar are pleasant, but mornings and evenings are cold and showers are common. Pack layers, a warm jacket, a light raincoat, comfortable walking shoes and sunglasses. Ask whether your hotel provides heaters in April.",
        ],
      },
      {
        h: "Check garden admission and arrange the visit",
        p: [
          "Tickets are sold at the entrance and, in some years, online through the floriculture department. Children have a reduced rate. Keep your ticket, since you may need to show it inside. Parking is available near the entrance, but it fills up on busy days, so your driver may drop you and wait nearby. Food is limited inside; there are stalls outside the gate.",
        ],
      },
    ],
    faqs: [
      { q: "How is the Srinagar tulip garden laid out?", a: "In terraces down the Zabarwan slope, with tulip beds in blocks of colour, fountains and water channels." },
      { q: "Which day of my trip should I plan for the tulip garden?", a: "A middle day in Srinagar, so you can swap it if the weather or bloom is not right." },
      { q: "What can I see if the tulips have not bloomed?", a: "Badamwari almond garden, the Botanical Garden, Cheshma Shahi, Pari Mahal, Nishat and Shalimar." },
      { q: "Which hotels are closest to the tulip garden?", a: "Hotels in the Zabarwan foothills and on Boulevard Road." },
    ],
  },

  "budget-hotels-in-srinagar": {
    sections: [
      {
        h: "Choose the kind of stay you can share comfortably",
        p: [
          "On a budget, sharing is where the savings come from. Many Srinagar guesthouses have triple and family rooms, which cost less per person than two doubles. Hostels near Dal Gate and in Rajbagh have dormitories with lockers for solo travellers. Budget houseboats rent whole boats to groups of friends. Ask how many people the room actually sleeps, whether extra beds are real beds or floor mattresses, and how many bathrooms there are for the group.",
        ],
      },
      {
        h: "Choose the area by where you need to go",
        list: [
          "Dal Gate and the lanes behind Boulevard Road: the most budget guesthouses, close to shikara ghats and buses.",
          "Rajbagh: residential, safe and central, with guesthouses near the Jhelum.",
          "Lal Chowk and Residency Road: near markets and transport, busier and noisier.",
          "Hazratbal and Nigeen: quieter, with budget houseboats and homestays.",
          "Near the airport: a few budget stays for very early flights.",
        ],
      },
      {
        h: "Compare the full cost for your trip",
        p: [
          "A cheap room can cost more if it is far from where you are going. Compare the room rate, the taxes added on top, the meal plan, the cost of extra beds, and the cab fares to the places you will visit. A guesthouse at Dal Gate may save cab fares compared with a cheaper room on the edge of the city. Ask whether breakfast is included and what dinner costs.",
        ],
      },
      {
        h: "Confirm arrival hours and room basics before booking",
        p: [
          "Small guesthouses may not have a 24-hour reception. If your flight or train arrives late, tell the owner your arrival time and ask whether someone will be there to check you in. Confirm the basics: hot water, clean bedding, a working lock, Wi-Fi and power backup. Ask for recent photos of the room, not just the best room.",
        ],
      },
      {
        h: "Check cold-weather basics before paying",
        p: [
          "From October to March, nights in Srinagar are cold. Many budget hotels have electric heaters, which may be charged extra and fail during power cuts. Some provide electric blankets or extra quilts. Ask what heating is provided, whether there is a charge, and whether there is power backup. A warm room is worth a small extra cost in winter.",
        ],
      },
      {
        h: "Request a room around your dates and transfers",
        p: [
          "Send the guesthouse your dates, the number of people, your arrival time and whether you need airport pickup. Many budget stays can arrange a cab at a fair rate. Book early for peak periods such as tulip season, summer holidays and New Year. Pay a small advance by a traceable method and the balance at check-in, and get the booking confirmed in writing.",
        ],
      },
      {
        h: "Paying at budget stays in Srinagar",
        p: [
          "Most budget hotels and guesthouses accept UPI and cash, and some accept cards. Ask for a receipt for every payment, especially the advance. Keep some cash for small expenses, since UPI may not work during network problems. Do not pay large advances to unknown accounts found through social media.",
        ],
      },
      {
        h: "Budget eating near your guesthouse",
        p: [
          "Dal Gate, Lal Chowk and Rajbagh have plenty of affordable restaurants and dhabas serving North Indian food, Kashmiri dishes and fast food. Bakeries sell bread and tea for breakfast. Many guesthouses cook simple home-style meals on request, which can be cheaper and tastier than restaurants.",
        ],
      },
    ],
    faqs: [
      { q: "Do Srinagar guesthouses have family rooms?", a: "Many have triple and family rooms, which cost less per person than separate doubles." },
      { q: "Is Dal Gate a good area for budget hotels?", a: "Yes. It has many budget guesthouses close to shikara ghats and buses." },
      { q: "Do budget guesthouses in Srinagar have 24-hour check-in?", a: "Not always. Tell the owner your arrival time and confirm someone will be there." },
      { q: "Do budget hotels in Srinagar accept UPI?", a: "Most accept UPI and cash, and some accept cards. Ask for a receipt for every payment." },
      { q: "Is heating extra in Srinagar budget hotels?", a: "Often yes. Ask what heating is provided and whether there is a charge before you pay." },
      { q: "Can budget guesthouses in Srinagar arrange airport pickup?", a: "Many can arrange a cab. Ask the owner when you book." },
      { q: "Are there dormitories in Srinagar hostels?", a: "Yes. Hostels near Dal Gate and in Rajbagh have dormitories with lockers." },
      { q: "Can I get home-cooked meals at a Srinagar guesthouse?", a: "Many guesthouses cook simple meals on request, often cheaper than restaurants." },
      { q: "Is a cheap room far from the centre a good idea in Srinagar?", a: "Not always. Cab fares can cancel the saving, so compare the total cost." },
      { q: "How much advance should I pay for a Srinagar budget hotel?", a: "A small advance by a traceable method, with the balance at check-in and the booking confirmed in writing." },
    ],
  },

  "kashmir-7-day-itinerary": {
    sections: [
      {
        h: "A slower week with four bases",
        days: [
          "Day 1: arrive in Srinagar, settle in, evening shikara ride on Dal.",
          "Day 2: Srinagar gardens and old city, or a day trip to Sonamarg.",
          "Day 3: drive to Gulmarg, gondola, overnight in Gulmarg.",
          "Day 4: morning in Gulmarg, drive to Pahalgam via Srinagar or Pampore.",
          "Day 5: Pahalgam valleys by union taxi: Aru, Betaab, Chandanwari.",
          "Day 6: free day in Pahalgam, or drive back to Srinagar with stops.",
          "Day 7: Srinagar, last shopping, depart.",
        ],
      },
      {
        h: "Seven honeymoon days: lake nights and meadow mornings",
        days: [
          "Day 1: arrive, check into a houseboat on Nigeen or Dal, sunset shikara.",
          "Day 2: Mughal gardens, Pari Mahal, a quiet evening on the boat.",
          "Day 3: Gulmarg, gondola, overnight in Gulmarg.",
          "Day 4: Gulmarg morning walk, drive to Pahalgam.",
          "Day 5: Betaab and Aru, riverside dinner.",
          "Day 6: slow morning by the Lidder, drive to Srinagar.",
          "Day 7: last breakfast by the lake, depart.",
        ],
      },
      {
        h: "Set one main plan for each day",
        p: [
          "The most common mistake on a Kashmir week is trying to fit two big outings into one day. Each day should have one main plan, such as Gulmarg, Pahalgam's valleys or Sonamarg, with time left for meals, rest and the unexpected. Drives are longer than maps suggest, union taxis and gondola queues take time, and the weather can change plans.",
        ],
      },
      {
        h: "Use the hotel and boat nights deliberately",
        p: [
          "Use one or two houseboat nights for the lake experience, and hotels for the rest, where heating and space are better. A night in Gulmarg lets you take the first gondola and see the meadow without crowds. Two nights in Pahalgam give you a full day in the valleys and a slow morning by the river. Avoid moving hotels every night.",
        ],
      },
      {
        h: "Build a fallback for the mountain days",
        p: [
          "Mountain days are the most affected by weather. If Gulmarg's gondola is closed, Phase 2 is shut or the Sonamarg road is blocked, have a backup: a Srinagar day, Doodhpathri or Yusmarg, or swapping the order of days. Keep one flexible day in the plan, and tell your driver and hotel you may need to swap.",
        ],
      },
      {
        h: "Decide whether you need a week",
        p: [
          "A week suits travellers who want to see Srinagar, Gulmarg, Pahalgam and Sonamarg without rushing, honeymooners who want slow days, families with older members, and anyone visiting in winter, when days are short. Five days is enough for a quick first look. Ten days or more lets you add Gurez, Doodhpathri, Yusmarg or Ladakh.",
        ],
      },
      {
        h: "Match the route to the season and confirm your dates",
        p: [
          "In spring, add the tulip garden and keep Sonamarg optional, since the road beyond may still be snowbound. In summer, all routes are open and Sonamarg can be a full day. In autumn, add Pampore's saffron fields and the golden colours of Pahalgam. In winter, give Gulmarg two nights for snow and skiing, and treat Sonamarg and Pahalgam as day trips depending on roads. Confirm hotel and gondola bookings for your exact dates before paying for flights.",
        ],
      },
    ],
    faqs: [
      { q: "What is a good 7-day Kashmir plan with four bases?", a: "Srinagar, Gulmarg, Pahalgam and back to Srinagar, with one main outing each day." },
      { q: "Should a 7-day honeymoon include a houseboat night?", a: "Yes. One or two nights on Nigeen or Dal make a memorable start or end." },
      { q: "How many main outings should I plan each day in Kashmir?", a: "One, with time left for meals, rest and changes due to weather or traffic." },
      { q: "What is a good backup if Gulmarg's gondola is closed?", a: "A Srinagar day, Doodhpathri or Yusmarg, or swapping the order of days." },
      { q: "Should I stay two nights in Pahalgam on a 7-day trip?", a: "Yes, if you want a full day in the valleys and a slow morning by the river." },
      { q: "Is 5 days enough instead of 7 for Kashmir?", a: "Five days is enough for a quick first look; a week lets you travel without rushing." },
      { q: "Can I add Ladakh to a 7-day Kashmir trip?", a: "Not comfortably. Ten days or more is better for Kashmir and Ladakh together." },
      { q: "How do I adapt a 7-day Kashmir plan for spring?", a: "Add the tulip garden and keep Sonamarg optional, since the higher road may still have snow." },
      { q: "How do I adapt a 7-day Kashmir plan for autumn?", a: "Add Pampore's saffron fields and give Pahalgam time for its golden colours." },
      { q: "Should I move hotels every night on a 7-day Kashmir trip?", a: "No. Use three or four bases and stay at least two nights where you can." },
    ],
  },

  "kashmiri-wazwan-guide": {
    sections: [
      {
        h: "Which wazwan dishes should you try first?",
        p: [
          "If you are new to wazwan, start with rogan josh, the red lamb curry; yakhni, lamb in a mild yoghurt gravy; rista, meatballs in a red sauce; and gushtaba, larger meatballs in a white yoghurt gravy, which traditionally comes last. Tabak maaz, fried lamb ribs, is a favourite with many visitors. Add a chicken dish such as waza kokur for anyone who does not eat lamb.",
        ],
      },
      {
        h: "A glossary of wazwan dishes",
        list: [
          "Methi maaz: minced tripe and intestines cooked with fenugreek.",
          "Tabak maaz: lamb ribs simmered and then fried until crisp.",
          "Seekh kebab: minced lamb on skewers.",
          "Daniwal korma: lamb in a gravy with coriander.",
          "Aab gosht: lamb cooked in milk with cardamom.",
          "Marchwangan korma: lamb in a hot red chilli gravy.",
          "Rogan josh: lamb in a red gravy coloured with Kashmiri chilli and cockscomb flower.",
          "Rista: pounded lamb meatballs in a red gravy.",
          "Yakhni: lamb in a yoghurt gravy with fennel and cardamom.",
          "Gushtaba: large pounded lamb meatballs in a white yoghurt gravy.",
          "Waza kokur: whole or half chicken in a rich sauce.",
          "Dum aloo: potatoes cooked in a spiced gravy.",
          "Haak: Kashmiri collard greens, often served alongside.",
          "Chutneys: radish and walnut chutneys, and yoghurt with mint.",
          "Phirni: a sweet rice pudding served at the end.",
        ],
      },
      {
        h: "Should you order dishes, a trami or a full dinner?",
        p: [
          "For two people, ordering a few dishes from a restaurant menu is best, since a full trami is too much food. For a group of four, a trami, the large shared copper platter, gives you the traditional experience with a fixed selection of dishes. For a large group or a special occasion, a full wazwan dinner with many courses can be arranged through a restaurant, hotel or waza cook. Ask what each option includes before ordering.",
        ],
      },
      {
        h: "How do you eat from a shared platter?",
        p: [
          "In traditional wazwan, four people sit on the floor around a trami. Before the meal, an attendant brings the tash-t-nari, a basin and jug, so each guest can wash their hands. The trami holds a mound of rice with meats placed on top, and other dishes are served from the kitchen in turn. Eat with your right hand from the part of the platter in front of you, and do not reach across to others' portions. Restaurants also offer plates and spoons.",
        ],
      },
      {
        h: "What if someone needs a separate meal?",
        p: [
          "If someone in your group does not eat meat, ask for vegetarian dishes such as dum aloo, haak, paneer and rajma, which most wazwan restaurants can prepare. For allergies or health needs, explain clearly when you book, since many dishes are cooked with ghee, milk, yoghurt and nuts. Children may prefer milder dishes such as yakhni and plain rice.",
        ],
      },
      {
        h: "What should you ask when you book?",
        list: [
          "Which dishes are included and how many.",
          "Whether the meal is served in a trami or on plates.",
          "Whether there is seating on the floor or at tables.",
          "Vegetarian options and allergy information.",
          "The time needed for preparation.",
          "Whether drinks and dessert are included.",
        ],
      },
      {
        h: "How do you fit wazwan into a Kashmir trip?",
        p: [
          "Plan a wazwan meal in Srinagar, where the best restaurants and cooks are. Lunch is a good time, since wazwan is heavy, and you can rest afterwards. Avoid planning it the night before a long drive or an early flight. If you are on a houseboat, ask the owner whether they can arrange a wazwan dinner on board with a local cook.",
        ],
      },
    ],
    faqs: [
      { q: "Which wazwan dishes should first-timers try?", a: "Rogan josh, yakhni, rista and gushtaba, with tabak maaz and a chicken dish like waza kokur." },
      { q: "What is tabak maaz?", a: "Lamb ribs simmered and then fried until crisp." },
      { q: "What is tash-t-nari?", a: "A basin and jug used to wash guests' hands before a wazwan meal." },
      { q: "What is methi maaz?", a: "Minced tripe and intestines cooked with fenugreek, one of the traditional wazwan dishes." },
    ],
  },
};
