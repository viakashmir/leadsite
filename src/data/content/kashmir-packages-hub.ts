import type { GuideContent } from "@/lib/locations";

// Kashmir package hub copy: /tour-packages/kashmir, its duration pages
// (itineraries keyed "{n}-day") and the honeymoon and family theme pages.
//
// Facts checked 2026-11-03: Baisaran meadow closed since April 2025 (Anantnag
// list, July 2026); Doodhpathri, Yusmarg and the Tulip Garden reopened in
// February 2026; Gondola tickets sold online by the J&K Cable Car Corporation;
// union taxis for Pahalgam and Sonamarg local points; no direct Delhi to
// Srinagar train (change at Katra). Live package prices come from the listings
// on the page, so no prices are typed here. No em dashes.

const PAID_LOCALLY = [
  "Gulmarg Gondola tickets (Phase 1 and Phase 2), booked online on the J&K Cable Car Corporation portal.",
  "Pahalgam union taxis for Aru Valley, Betaab Valley and Chandanwari, and Sonamarg union vehicles beyond the town.",
  "Pony rides, sledge rides, snow scooters and ATV rides, at union or posted rates.",
  "Ski equipment hire and instructors in Gulmarg.",
  "Entry tickets to the Mughal gardens and the Tulip Garden.",
  "Flights or trains to Srinagar, unless your quote says they are included.",
  "Lunches, personal shopping, tips and compulsory gala dinners on 24 and 31 December at some hotels.",
];

export const KASHMIR_PACKAGES_DESTINATION: Record<string, Partial<GuideContent>> = {
  kashmir: {
    packages: {
      intro:
        "A Kashmir tour package usually covers 4 to 7 nights across Srinagar, Gulmarg, Pahalgam and Sonamarg, with a night on a houseboat, a private cab for the whole trip, airport transfers, breakfast and dinner, and a shikara ride on Dal Lake. The packages on this page are listed by verified local agents, and the price shown on each card is live: it updates whenever the agent changes it.\n\nThe right package depends on three choices: how many nights, whether you want to sleep in Gulmarg and Pahalgam or see them as day trips, and your hotel category. Winter packages (December to February) are built around snow in Gulmarg and Sonamarg, spring packages around the Tulip Garden and blossom, and summer packages around green meadows. Share your dates and budget with the form, and up to 3 agents send you a customised itinerary with a full price, so you can compare like for like.",
      blocks: [
        {
          heading: "Kashmir tour packages at a glance",
          items: [
            "Usual length: 4 to 7 nights. Five nights is the most booked, because it covers Srinagar, Gulmarg and Pahalgam without rushing.",
            "Main route: Srinagar (2 to 3 nights, one on a houseboat), Gulmarg (day trip or 1 to 2 nights), Pahalgam (1 to 2 nights), Sonamarg (day trip).",
            "Gateway: Srinagar airport (SXR), or the Vande Bharat train from Katra to Srinagar. There is no direct Delhi to Srinagar train yet.",
            "Best months: December to February for snow, late March to April for tulips, May to June for meadows, October to November for autumn colours.",
            "Who books: honeymooners, families with children and parents, friends' groups, and winter snow and ski travellers.",
          ],
        },
        {
          heading: "Which Kashmir package length should you choose?",
          items: [
            "3 nights 4 days: Srinagar plus Gulmarg as a day trip. Good for a short break, but Pahalgam or Sonamarg means a rushed day.",
            "4 nights 5 days: Srinagar, Gulmarg and Pahalgam, or Srinagar, Gulmarg and Sonamarg. The minimum for a balanced first trip.",
            "5 nights 6 days: the classic package, with Srinagar, Gulmarg, Pahalgam and a Sonamarg day trip, plus one houseboat night.",
            "6 nights 7 days: adds a Gulmarg overnight or Doodhpathri, with time to slow down. Best for families and winter trips, when a buffer day matters.",
            "8 nights 9 days: Kashmir with Vaishno Devi at Katra, or a slower trip with Gurez or Yusmarg in season.",
          ],
        },
        {
          heading: "What a Kashmir package usually includes",
          items: [
            "Hotels in the category you choose (budget, 3-star, 4-star or 5-star), with one night on a houseboat in most packages.",
            "Meals: usually breakfast and dinner (MAP). Houseboats usually include both.",
            "A private cab for the whole trip: a sedan for couples, an Innova or similar for families.",
            "Airport or railway station pickup and drop in Srinagar.",
            "Sightseeing drives to Gulmarg, Pahalgam and Sonamarg as per the itinerary.",
            "A shikara ride on Dal Lake, usually one hour.",
            "Taxes on the hotels and transport listed in the quote.",
          ],
        },
        {
          heading: "Costs usually paid locally",
          body: "These are rarely included, because their rates are set locally or depend on the weather on the day. Ask every agent to list them, so you can compare quotes fairly.",
          items: PAID_LOCALLY,
        },
        {
          heading: "What changes the price of a Kashmir package",
          items: [
            "Dates: Christmas to New Year, the week around 14 February, Holi and May to June are the most expensive weeks. November and early December are the best value.",
            "Hotel category and room type: lake-view rooms in Srinagar, meadow-view rooms in Gulmarg and riverside rooms in Pahalgam cost more.",
            "Gulmarg nights: sleeping in Gulmarg costs more than a day trip from Srinagar, especially in winter.",
            "Houseboat category: graded by J&K Tourism, from deluxe down.",
            "Cab type: an SUV costs more than a sedan but is better for families and snow.",
            "Group size: per-person prices fall as more people share a cab and rooms.",
            "Meal plan: breakfast only, breakfast and dinner, or all meals.",
          ],
        },
        {
          heading: "Kashmir packages for every kind of traveller",
          items: [
            "Honeymoon: a deluxe houseboat night, a Gulmarg overnight, riverside Pahalgam and room decorations on request.",
            "Family: family rooms or interconnected rooms, an Innova for comfort, shorter driving days and child-friendly snow points.",
            "Senior citizens: hotels with lifts, Srinagar as a base, Gondola Phase 1 rather than Phase 2, and no early starts.",
            "Friends and groups: Tempo Traveller or two cabs, budget or 3-star hotels, and add-ons like rafting in Pahalgam in summer or skiing in Gulmarg in winter.",
            "Winter and snow: heated rooms, an SUV with chains, a Gulmarg night and a buffer day for snow delays.",
            "Luxury: 5-star lake-view hotels in Srinagar, premium Gulmarg and Pahalgam resorts and a deluxe Nigeen Lake houseboat.",
            "Pilgrimage add-ons: Vaishno Devi at Katra before or after Kashmir, and Amarnath Yatra packages in July and August.",
          ],
        },
        {
          heading: "Places open and closed in 2026",
          body: "Srinagar, Gulmarg, Sonamarg, Pahalgam town, Betaab Valley and Aru Valley are open. Doodhpathri, Yusmarg and the Tulip Garden reopened in February 2026. Baisaran meadow above Pahalgam has been closed to visitors since April 2025 and is not part of any package listed here. Agents confirm the status of each place a few days before your trip.",
        },
        {
          heading: "How to compare Kashmir package quotes",
          items: [
            "Check the exact hotels named in each quote, not just the star rating.",
            "Compare how many nights are spent in Gulmarg and Pahalgam, not only the total nights.",
            "Check the houseboat category and whether it is on Dal or Nigeen Lake.",
            "Confirm the cab type and that it stays with you for the whole trip.",
            "Make sure each quote lists what is paid locally, such as the Gondola and union taxis.",
            "In winter, ask about room heating, generators and a buffer day.",
            "Read the cancellation terms, especially for peak dates.",
          ],
        },
      ],
      itineraries: [
        {
          title: "4-day Kashmir itinerary (3 nights)",
          days: [
            "Arrive in Srinagar. Afternoon shikara ride on Dal Lake and a night on a houseboat.",
            "Day trip to Gulmarg: Gondola Phase 1, and Phase 2 if it is running. Return to a Srinagar hotel.",
            "Day trip to Sonamarg and Thajiwas glacier, or to Pahalgam and Betaab Valley.",
            "Mughal gardens (Nishat and Shalimar) and Shankaracharya Temple, then the airport.",
          ],
        },
        {
          title: "5-day Kashmir itinerary (4 nights)",
          days: [
            "Arrive in Srinagar. Shikara ride and a houseboat night.",
            "Mughal gardens, Pari Mahal, Hazratbal and the old city. Night in a Srinagar hotel.",
            "Day trip to Gulmarg for the Gondola and snow or meadows.",
            "Drive to Pahalgam via the Pampore saffron fields. Betaab Valley and Aru Valley by Pahalgam union taxi. Overnight in Pahalgam.",
            "Return to Srinagar and fly out.",
          ],
        },
        {
          title: "6-day Kashmir itinerary (5 nights)",
          days: [
            "Arrive in Srinagar. Shikara ride on Dal Lake and a houseboat night.",
            "Srinagar sightseeing: Mughal gardens, Shankaracharya Temple, Hazratbal and the old city.",
            "Day trip to Sonamarg: Thajiwas glacier on foot or by pony, Zero Point by union vehicle when open.",
            "Drive to Gulmarg. Gondola and snow play or meadow walks. Overnight in Gulmarg.",
            "Drive to Pahalgam via Srinagar. Evening by the Lidder river. Overnight in Pahalgam.",
            "Betaab Valley in the morning, then return to Srinagar and the airport.",
          ],
        },
        {
          title: "7-day Kashmir itinerary (6 nights)",
          days: [
            "Arrive in Srinagar. Shikara ride and a houseboat night.",
            "Srinagar: Mughal gardens, Pari Mahal, Hazratbal and a wazwan dinner.",
            "Day trip to Sonamarg and Thajiwas glacier.",
            "Drive to Gulmarg. Gondola Phase 1 and 2. Overnight in Gulmarg.",
            "Morning in Gulmarg, then drive to Pahalgam. Overnight in Pahalgam.",
            "Pahalgam: Aru Valley, Betaab Valley and Chandanwari (when open) by union taxi. Overnight in Pahalgam.",
            "Return to Srinagar via Pampore and the Awantipora ruins, and fly out.",
          ],
        },
        {
          title: "9-day Kashmir with Vaishno Devi itinerary (8 nights)",
          days: [
            "Arrive in Jammu or Katra. Overnight in Katra.",
            "Vaishno Devi darshan: the trek, a battery car or the helicopter to Sanjichhat. Overnight in Katra.",
            "Vande Bharat train or drive from Katra to Srinagar. Evening shikara ride and a houseboat night.",
            "Srinagar sightseeing: Mughal gardens, Shankaracharya Temple and the old city.",
            "Day trip to Sonamarg and Thajiwas glacier.",
            "Drive to Gulmarg. Gondola and snow or meadows. Overnight in Gulmarg.",
            "Drive to Pahalgam. Overnight in Pahalgam.",
            "Betaab and Aru valleys by union taxi, then back to Srinagar.",
            "Fly out of Srinagar.",
          ],
        },
      ],
      faqs: [
        {
          q: "How many days are enough for a Kashmir tour package?",
          a: "Five nights and six days is ideal for a first trip: Srinagar, Gulmarg, Pahalgam and a Sonamarg day trip, with one houseboat night. Four nights works if you are short of time; add a night in winter as a buffer.",
        },
        {
          q: "What is included in a Kashmir tour package?",
          a: "Usually hotels and a houseboat night, breakfast and dinner, a private cab for the whole trip, airport transfers, sightseeing drives and a shikara ride. Each agent's quote lists exactly what is included.",
        },
        {
          q: "What is not included in a Kashmir package?",
          a: "Usually the Gulmarg Gondola, Pahalgam and Sonamarg union taxis, pony and sledge rides, garden entry tickets, lunches and flights. Ask each agent to list these.",
        },
        {
          q: "Which is the best month for a Kashmir tour package?",
          a: "December to February for snow, late March to April for tulips and blossom, May to June for green meadows, and October to November for autumn colours and the best value.",
        },
        {
          q: "Is a houseboat stay included in Kashmir packages?",
          a: "Most packages include one night on a houseboat on Dal or Nigeen Lake. You can ask for a deluxe category boat, or for a hotel instead.",
        },
        {
          q: "Should my package include a night in Gulmarg?",
          a: "If your budget allows, yes. A Gulmarg night lets you take the first Gondola slot and see the meadow without day-trip crowds. It is the most popular upgrade.",
        },
        {
          q: "Why do Pahalgam and Sonamarg sightseeing cost extra?",
          a: "Local taxi unions run the sightseeing routes there, so your Srinagar cab drops you in town and you hire a union vehicle at posted rates.",
        },
        {
          q: "Can I customise a Kashmir package?",
          a: "Yes. Every package here is customisable. Share your dates, nights per place, hotel category and budget, and agents send a matching itinerary.",
        },
        {
          q: "Are flights included in Kashmir packages?",
          a: "Most Kashmir packages start and end in Srinagar and do not include flights. Some agents add flights or train tickets on request.",
        },
        {
          q: "Is Kashmir safe for a family or honeymoon package?",
          a: "The main circuit of Srinagar, Gulmarg, Sonamarg and Pahalgam is open and well guarded. Baisaran meadow has been closed since April 2025, and agents confirm the status of every place before your trip.",
        },
        {
          q: "What is the best Kashmir package for a honeymoon?",
          a: "Five or six nights with a deluxe houseboat night, a Gulmarg overnight and riverside Pahalgam. Winter for snow, spring for flowers.",
        },
        {
          q: "What is a good Kashmir package for families?",
          a: "Five or six nights with Srinagar as the base, an Innova for comfort, family rooms, one houseboat night and short driving days.",
        },
        {
          q: "Can I combine Kashmir with Vaishno Devi?",
          a: "Yes. A common plan is 8 nights: 2 in Katra for the darshan, then the Vande Bharat train to Srinagar and 6 nights in Kashmir.",
        },
        {
          q: "Can I combine Kashmir and Ladakh in one package?",
          a: "From about June to October, when the Zojila pass is open, Srinagar to Leh by road via Sonamarg and Kargil is a popular route. In winter, fly between Srinagar and Leh.",
        },
        {
          q: "How do I book a Kashmir package here?",
          a: "Send your dates and preferences through the form. Up to 3 verified agents who operate in Kashmir call you, send customised itineraries with prices, and you book directly with the one you choose.",
        },
      ],
      themes: {
        "honeymoon-packages": {
          intro:
            "Kashmir honeymoon packages are built around the experiences couples remember: a night on a carved houseboat, a sunset shikara ride, waking up in Gulmarg and slow riverside days in Pahalgam. Most run 5 or 6 nights. Winter packages (December to February) add snow and heated rooms, spring packages bring tulips and blossom, and summer packages bring green meadows and long days.\n\nThe packages here are listed by verified local agents, and each can be customised: ask for a deluxe Nigeen Lake houseboat, a meadow-view room in Gulmarg, a candlelight dinner or flower decorations, and agents include them in the quote.",
          blocks: [
            {
              heading: "What a good Kashmir honeymoon package includes",
              items: [
                "One night on a deluxe houseboat, preferably on quieter Nigeen Lake.",
                "At least one night in Gulmarg, so you can enjoy the meadow or snow without crowds.",
                "One or two riverside nights in Pahalgam.",
                "A private sedan or SUV, airport transfers, breakfast and dinner.",
                "A sunset shikara ride, and honeymoon touches such as cake or room decoration on request.",
              ],
            },
            {
              heading: "Best months for a Kashmir honeymoon",
              items: [
                "December to February: snow, kangris and cosy rooms. Busiest around Christmas, New Year and 14 February.",
                "March to April: snow in Gulmarg and blossom and tulips in Srinagar.",
                "May to June: green meadows and long days.",
                "October to November: golden chinars and the best value.",
              ],
            },
            { heading: "Costs usually paid locally", items: PAID_LOCALLY },
          ],
          faqs: [
            {
              q: "How many nights is ideal for a Kashmir honeymoon package?",
              a: "Five or six nights: two in Srinagar (one on a houseboat), one or two in Gulmarg and one or two in Pahalgam.",
            },
            {
              q: "Can we get a houseboat on Nigeen Lake instead of Dal Lake?",
              a: "Yes. Ask for it when you request quotes. Nigeen is quieter and more private, and popular with couples.",
            },
            {
              q: "Do Kashmir hotels ask for a marriage certificate?",
              a: "There is no legal requirement, but hotels can set their own policies. Carry photo ID for both of you and ask the agent to confirm the hotel's policy.",
            },
          ],
        },
        "family-packages": {
          intro:
            "Kashmir family packages are planned for comfort: Srinagar as a base, family rooms, an Innova or similar for the whole trip, short driving days and snow points that children and parents can enjoy safely. Five or six nights is the usual length, with one houseboat night as a treat rather than a long stay.\n\nThe packages here are listed by verified local agents. Tell them the ages of children and any older travellers, and they will choose hotels with lifts, heating and family rooms, and plan the Gondola and sightseeing to suit everyone.",
          blocks: [
            {
              heading: "What to look for in a Kashmir family package",
              items: [
                "Family or interconnected rooms, with heating and a generator in winter.",
                "An Innova, Innova Crysta or similar for comfort on hill roads.",
                "Srinagar as a base, with Gulmarg and Sonamarg as day trips and one or two nights in Pahalgam.",
                "Gondola Phase 1 to Kongdori for younger children and older parents, and Phase 2 only for those who are fit.",
                "One houseboat night, because space on board is limited for families.",
              ],
            },
            {
              heading: "Family tips for Kashmir",
              items: [
                "Keep driving days under four hours and plan rest afternoons.",
                "In winter, dress children in waterproof snow layers and change wet clothes quickly.",
                "Agree pony and sledge rates before you start, and walk alongside children on ponies.",
                "Carry children's medicines and snacks: remote valleys have limited shops.",
              ],
            },
            { heading: "Costs usually paid locally", items: PAID_LOCALLY },
          ],
          faqs: [
            {
              q: "Is Kashmir good for a family trip with kids?",
              a: "Yes. Short drives, snow points, shikara rides and gardens suit children well. Choose heated family rooms in winter and keep days short.",
            },
            {
              q: "Which cab is best for a Kashmir family package?",
              a: "An Innova or Innova Crysta for families of five or six, or a Tempo Traveller for larger groups.",
            },
            {
              q: "Is Kashmir suitable for senior citizens?",
              a: "Yes, with hotels that have lifts, Srinagar as a base, Gondola Phase 1 instead of Phase 2, and an unhurried pace.",
            },
          ],
        },
      },
    },
  },
};
