import type { BlogPost, BlogSection } from "./types";

// Kashmir activity guides (2026-11-10). Rules: no ride rates or ticket prices
// typed in (they are set locally and change), only official booking routes
// named, no em dashes.

const DATE = "2026-11-10";

const BASE: BlogPost[] = [
  {
    slug: "shikara-ride-dal-lake-guide",
    title: "Shikara Ride on Dal Lake: Routes, Timings, Ghats, Floating Market and Tips",
    description: "Shikara ride on Dal Lake explained: numbered ghats on Boulevard Road, 1 to 3 hour routes, the dawn floating market, sunset timing and how official rates work.",
    category: "Honeymoon",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "A shikara ride on Dal Lake is the one thing every Kashmir trip includes. Shikaras leave from the numbered ghats along Boulevard Road and from Nigeen, and the J&K Tourism Department sets official rates by the hour per shikara, displayed at the ghats. A one-hour ride covers the lake near the Boulevard; two to three hours reach Char Chinar, the old lake villages and Nehru Park; and a dawn ride takes you to the floating vegetable market. Go at sunset for the light, or at dawn for the market and quiet water.",
    sections: [
      {
        h: "Where shikaras start",
        list: [
          "Boulevard Road ghats: numbered ghats along the lake road from Dal Gate towards Nehru Park and Nishat. The most popular starting point.",
          "Nehru Park and the Dal Gate end: convenient for hotels near the city centre.",
          "Nigeen Lake: quieter starts for longer rides through the channels into Dal.",
          "Your houseboat: most houseboats have their own shikara and arrange rides.",
        ],
      },
      {
        h: "Popular routes",
        list: [
          "One hour: along the Boulevard side, past houseboats and Nehru Park, with views of Shankaracharya hill.",
          "Two hours: add Char Chinar, the island with chinar trees, and the Meena Bazaar of floating shops.",
          "Three hours or more: the old lake villages, lotus gardens in summer, Kabutar Khana and the channels towards Nigeen.",
          "Dawn: the floating vegetable market near the old lake villages, where farmers trade from their boats in the first hour of light.",
          "Sunset: an hour on the open water as the sun drops behind the Pir Panjal.",
        ],
      },
      {
        h: "How rates work",
        p: [
          "The J&K Tourism Department fixes shikara rates by the hour for the whole boat, and the rate board is displayed at the ghats. A shikara seats about four to six people. Agree the route and duration before you set off, and confirm whether the ride ends where it started. Floating vendors selling saffron, jewellery and kahwa will approach you on the lake; you are under no obligation to buy.",
          "Packages usually include one shikara ride, often an hour at sunset. Longer rides, the floating market and photo shoots in Kashmiri dress are usually extra.",
        ],
      },
      {
        h: "Best time of day",
        list: [
          "5 to 7 am: floating market, mist and silence. Book the night before.",
          "Mid-morning: clear views of the mountains, good for photos of houseboats.",
          "Afternoon: warmest, busiest with tourists in summer.",
          "Sunset: the most romantic hour, best from April to November.",
          "Evening: the lights of houseboats and Boulevard Road reflected on the water.",
        ],
      },
      {
        h: "Shikara by season",
        list: [
          "March and April: almond and cherry blossom along the shores, cool air, tulip season in the city.",
          "May to August: warm days, lotus flowers in the lake from July, busy evenings.",
          "September to November: clear skies and golden chinars, the most photogenic season.",
          "December to February: cold and misty. Rides run on calm days; carry blankets, and the shikara may have a kangri on board.",
        ],
      },
      {
        h: "Tips",
        list: [
          "Sit at the front for photos and wide views; the boatman paddles from the back.",
          "Carry cash for the ride and any purchases.",
          "Ask for a 'heart-shaped' cushion shikara for honeymoon photos: many boats are decorated.",
          "Do not lean out over the side or stand up while moving.",
          "Children should wear life jackets where provided.",
        ],
      },
      {
        h: "Shikara photo shoots",
        p: [
          "Photographers on the lake offer Kashmiri dress photo shoots, with pheran, jewellery and headdress, on shikaras and at the shore. It is popular with families and honeymooners. Agree the number of photos, the costume and the price up front, and ask how you will receive the files.",
        ],
      },
    ],
    faqs: [
      { q: "How long should a shikara ride on Dal Lake be?", a: "One hour for a first taste, two to three hours to reach Char Chinar and the lake villages, and a dawn ride for the floating market." },
      { q: "Who sets shikara rates on Dal Lake?", a: "The J&K Tourism Department fixes hourly rates per shikara, displayed at the ghats. Agree the route and duration before you start." },
      { q: "What is the best time for a shikara ride?", a: "Sunset for the light and romance, dawn for the floating market and quiet water." },
      { q: "Does the floating market run every day?", a: "It runs in the early morning, usually from around 5 to 7 am. Ask your boatman or houseboat to confirm the day before." },
      { q: "Can I take a shikara ride in winter?", a: "Yes, on calm days. It is cold and misty, so wear warm layers; some boats carry blankets and a kangri." },
    ],
  },
  {
    slug: "atv-ride-in-gulmarg",
    title: "ATV Ride in Gulmarg: Snow and Summer Trails, Safety and How It Works",
    description: "ATV quad bike rides in Gulmarg: where they run in snow and summer, how local operators and rates work, safety rules, age limits and the best time to go.",
    category: "Adventure",
    destination: "kashmir",
    city: "gulmarg",
    date: DATE,
    intro:
      "ATV (all-terrain vehicle) quad bike rides are one of Gulmarg's most popular activities, running on snow in winter and on meadow trails from spring to autumn. Local operators run them on set routes around the meadow and towards the forest edges, at rates fixed for each ride by the local authority. Rides are short, from about 15 minutes to an hour, and you can ride yourself or sit behind a guide. Wear warm, waterproof clothing in winter.",
    sections: [
      {
        h: "Where ATV rides run",
        p: [
          "ATV rides start near the main meadow and the Gondola area and follow set loops across the snowfields or along trails towards the forest and viewpoints. Exact routes depend on the season and snow conditions. Riding on the golf course greens and protected areas is not allowed, so operators keep to marked loops.",
        ],
      },
      {
        h: "Winter and summer rides",
        list: [
          "Winter (December to March): rides over snow, often combined with sledging and snow scooters. The most popular time.",
          "Spring (April and May): rides on the last snow patches and muddy trails.",
          "Summer and autumn (June to November): rides on meadow and forest trails, dusty in dry weather.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Operators wait near the meadow and the Gondola base. Rates are fixed per ride by duration and route, and are usually shown on a board. Agree the loop, the time and whether you ride alone or with the guide before you start. Many travellers combine an ATV ride with the Gondola, so plan the ATV ride after your Gondola slot to avoid missing it.",
        ],
      },
      {
        h: "Safety",
        list: [
          "Wear a helmet; ask for one if it is not offered.",
          "Ride slowly on your first loop until you are comfortable with the throttle and brakes.",
          "Children usually ride with an adult or guide; age rules vary by operator.",
          "Avoid ATV rides if you are pregnant or have back problems.",
          "Keep to the marked loop: deep snow and slopes can tip a quad.",
        ],
      },
      {
        h: "What to wear",
        list: [
          "Winter: waterproof jacket and trousers, gloves, snow boots and sunglasses against snow glare.",
          "Summer: a light jacket, closed shoes and sunglasses for dust.",
          "Snow gear can be hired in Tangmarg and Gulmarg.",
        ],
      },
      {
        h: "Other snow activities in Gulmarg",
        list: [
          "Gondola: Phase 1 to Kongdoori and Phase 2 to Apharwat, booked on the official portal.",
          "Skiing and snowboarding: lessons with registered instructors.",
          "Sledging: pulled by local sledge operators on the meadow slopes.",
          "Snow scooters and snowmobiles: on marked routes in winter.",
          "Pony rides: to Khilanmarg, Strawberry Valley and the viewpoints.",
        ],
      },
      {
        h: "Planning tips",
        p: [
          "Mornings are best in winter: the snow is firmer and the light clearer. Weekends and the Christmas to New Year week bring long queues, so go early. Combine the ATV with your Gondola slot and a lunch break, and leave Gulmarg before 4 pm in winter, when the road down to Tangmarg can ice over.",
        ],
      },
    ],
    faqs: [
      { q: "Is ATV ride available in Gulmarg in summer?", a: "Yes. Rides run on meadow and forest trails from spring to autumn, and on snow in winter." },
      { q: "How long is an ATV ride in Gulmarg?", a: "From about 15 minutes to an hour, depending on the loop you choose." },
      { q: "Can children ride ATVs in Gulmarg?", a: "Usually with an adult or a guide. Age rules vary by operator." },
      { q: "Who sets ATV rates in Gulmarg?", a: "Rates are fixed per ride by the local authority and usually displayed by operators. Agree the loop and time first." },
      { q: "Do I need a licence to ride an ATV in Gulmarg?", a: "No licence is needed for these short guided rides on set loops." },
    ],
  },
  {
    slug: "paragliding-in-kashmir",
    title: "Paragliding in Kashmir: Astanmarg, Sonamarg and Other Sites, Season and Safety",
    description: "Paragliding in Kashmir: tandem flights at Astanmarg near Srinagar, Sonamarg and other sites, season and weather, safety checks and what to ask an operator.",
    category: "Adventure",
    destination: "kashmir",
    date: DATE,
    intro:
      "Paragliding in Kashmir is newer and smaller than in Bir Billing or Manali, but tandem flights do run. The best-known site is Astanmarg in the hills above Srinagar, developed with J&K Tourism, and flights are also reported at Sonamarg and occasionally around Gulmarg and Pahalgam. Flights depend heavily on wind and weather, run mainly from spring to autumn, and you fly with a trained pilot. Always check that the operator is registered with J&K Tourism.",
    sections: [
      {
        h: "Where you can fly",
        list: [
          "Astanmarg: on the ridge above Srinagar, reached from the Harwan side. Views over Dal Lake and the city. The most established site near Srinagar.",
          "Sonamarg: tandem flights reported in summer over the Sindh valley.",
          "Gulmarg and Pahalgam: occasional operations in good weather; ask locally.",
        ],
      },
      {
        h: "How a tandem flight works",
        p: [
          "You fly strapped in front of a trained pilot, who controls the glider. After a short briefing, you run a few steps downhill with the pilot and lift off. Flights last from about 10 to 30 minutes, depending on wind. You land in a field below, where a vehicle brings you back. No experience is needed.",
        ],
      },
      {
        h: "Season and weather",
        p: [
          "Paragliding runs mainly from April to October, when winds are steady and skies clear. Flights are cancelled in rain, strong wind or poor visibility, and mornings are often calmer. Keep the activity flexible in your itinerary, with a backup day if it matters to you.",
        ],
      },
      {
        h: "Safety checks to ask",
        list: [
          "Is the operator registered with J&K Tourism, and is the pilot certified?",
          "How old is the glider and harness, and when were they last inspected?",
          "Is there a reserve parachute?",
          "Is there insurance for passengers?",
          "What is the weight limit, and is there a minimum age?",
        ],
      },
      {
        h: "Who should not fly",
        list: [
          "Pregnant women.",
          "People with heart conditions, high blood pressure, epilepsy or recent surgery.",
          "Anyone over the operator's weight limit.",
          "Anyone who has been drinking.",
        ],
      },
      {
        h: "What to wear",
        list: [
          "Closed shoes with grip for the take-off run.",
          "A windproof jacket: it is cold in the air.",
          "Sunglasses and sunscreen.",
          "Tie long hair and secure phones or cameras; many pilots offer a GoPro video.",
        ],
      },
      {
        h: "If you want a full paragliding trip",
        p: [
          "If paragliding is the main reason for your trip, Bir Billing in Himachal has more operators and longer flights, and Manali's Solang valley also has regular flights. Kashmir is better for a single tandem flight added to a wider holiday. Ask your agent to include it on a flexible day, close to Srinagar for Astanmarg or on your Sonamarg day.",
        ],
      },
    ],
    faqs: [
      { q: "Is paragliding available in Kashmir?", a: "Yes, mainly tandem flights at Astanmarg above Srinagar and at Sonamarg, with occasional operations elsewhere." },
      { q: "When is paragliding possible in Kashmir?", a: "Mainly April to October, in calm, clear weather. Flights are cancelled in rain or strong wind." },
      { q: "Do I need experience to paraglide in Kashmir?", a: "No. Tandem flights are flown by a trained pilot after a short briefing." },
      { q: "How do I know if a paragliding operator is safe?", a: "Check registration with J&K Tourism, pilot certification, equipment condition, a reserve parachute and insurance." },
    ],
  },
  {
    slug: "vaishno-devi-helicopter-booking-guide",
    title: "Vaishno Devi Helicopter Booking: Official Website, Katra to Sanjichhat and Rules",
    description: "Vaishno Devi helicopter booking: book only on the Shrine Board's official website, Katra to Sanjichhat, the walk to the Bhawan, luggage rules and avoiding scams.",
    category: "Pilgrimage",
    destination: "kashmir",
    city: "katra",
    date: DATE,
    intro:
      "The Vaishno Devi helicopter flies from Katra to Sanjichhat in a few minutes, saving most of the 12 to 13 km climb. From Sanjichhat it is about 2.5 km on foot, by pony or palki to the Bhawan. Seats are booked only on the official Shri Mata Vaishno Devi Shrine Board website, and they sell out fast, especially for Navratri and summer holidays. Fake booking websites and agents are common, so never pay anyone else.",
    sections: [
      {
        h: "How to book",
        list: [
          "Use only the official Shri Mata Vaishno Devi Shrine Board website (maavaishnodevi.org) or its official app.",
          "Create an account, choose your date and flight direction (Katra to Sanjichhat, return or both) and enter traveller details exactly as on your ID.",
          "Pay online and save the booking confirmation.",
          "Book as soon as booking opens for your date; seats are limited.",
          "Some seats may be offered as current booking at the helipad, but do not rely on this in peak season.",
        ],
      },
      {
        h: "Avoiding scams",
        p: [
          "Every season, travellers lose money to fake websites, social media pages and agents who claim to sell helicopter tickets. They look official and sometimes appear in search ads. The Shrine Board sells helicopter tickets only through its own website and counters. If someone promises guaranteed seats for an extra fee, walk away.",
        ],
      },
      {
        h: "On the day",
        list: [
          "Reach the Katra helipad well before your reporting time with your ID and booking confirmation.",
          "Collect your yatra RFID card before the flight; it is compulsory for the yatra.",
          "Luggage is limited; carry only a small bag.",
          "Flights are suspended in bad weather, low cloud or strong wind; refunds or rescheduling follow Shrine Board rules.",
        ],
      },
      {
        h: "From Sanjichhat to the Bhawan",
        p: [
          "Sanjichhat is about 2.5 km from the Bhawan. Walk on the paved path, or take a pony or palki at Shrine Board rates. After darshan you can take the ropeway to Bhairon temple. Plan the return walk or a pony to Sanjichhat for your return flight, and keep enough time: queues at the Bhawan can be long.",
        ],
      },
      {
        h: "Helicopter vs walking vs battery car",
        list: [
          "Helicopter: fastest, best for elderly pilgrims and short trips, but weather dependent and limited.",
          "Walking: the traditional yatra, about 12 to 13 km from Banganga on a paved path with shelters and food stalls.",
          "Ponies and palkis: from Banganga, at Shrine Board rates.",
          "Battery car: on part of the route from Adhkuwari towards the Bhawan, mainly for elderly and disabled pilgrims.",
        ],
      },
      {
        h: "Best time for the helicopter",
        p: [
          "Clear mornings from March to June and September to November are the most reliable. Monsoon months bring cloud and suspended flights. In winter, fog in the plains and snow at the Bhawan can disrupt flights. Keep a buffer day if your Kashmir trip follows the yatra.",
        ],
      },
      {
        h: "Vaishno Devi and Kashmir together",
        p: [
          "Many travellers combine Vaishno Devi with Kashmir: two nights in Katra, the helicopter or walk to the Bhawan, then the Vande Bharat to Srinagar. Keep the yatra day free of onward travel, and book the helicopter and train together as soon as your dates are fixed.",
        ],
      },
    ],
    faqs: [
      { q: "Where can I book the Vaishno Devi helicopter?", a: "Only on the official Shri Mata Vaishno Devi Shrine Board website or app. Avoid other websites and agents." },
      { q: "How far is Sanjichhat from the Bhawan?", a: "About 2.5 km, on foot, by pony or by palki." },
      { q: "Do I still need a yatra registration with a helicopter ticket?", a: "Yes. The yatra RFID card is compulsory for every pilgrim." },
      { q: "What happens if the helicopter is cancelled due to weather?", a: "Refunds or rescheduling follow the Shrine Board's rules. Keep a buffer day in your plan." },
      { q: "Is the helicopter suitable for elderly pilgrims?", a: "Yes. It saves most of the climb; from Sanjichhat a pony or palki can take them to the Bhawan." },
    ],
  },
  {
    slug: "camping-in-gurez-valley",
    title: "Camping in Gurez Valley: Riverside Camps at Dawar and Tulail, Season and Rules",
    description: "Camping in Gurez: riverside camps on the Kishanganga near Dawar and Tulail, open months, ID and checkpost rules, what camps provide and what to carry.",
    category: "Adventure",
    destination: "kashmir",
    city: "gurez",
    date: DATE,
    intro:
      "Gurez is one of the best places in Kashmir to camp: riverside tent camps on the Kishanganga near Dawar and up the valley towards Tulail, under Habba Khatoon peak and close to the Line of Control. Camps run from about June to September, when the Razdan Pass road is open and nights are cold but manageable. Indian visitors need a valid photo ID for checkposts, and foreign nationals are generally not permitted. Camp only at organised sites.",
    sections: [
      {
        h: "Where to camp",
        list: [
          "Near Dawar: riverside camps on the Kishanganga, close to the main village, shops and Habba Khatoon peak views.",
          "Wanpora and Badwan: quieter riverside spots a short drive from Dawar.",
          "Tulail: the upper valley, with fewer camps and more remote scenery.",
        ],
      },
      {
        h: "What camps provide",
        list: [
          "Tents with beds or mattresses and blankets or sleeping bags.",
          "Shared or attached washrooms, depending on the camp.",
          "Meals: breakfast and dinner, often home-style Kashmiri food.",
          "Bonfires, subject to local rules and weather.",
          "Limited power, sometimes from solar panels or a generator in the evening.",
        ],
      },
      {
        h: "Rules and IDs",
        p: [
          "Gurez is a border area. Carry original photo IDs for every traveller and register at checkposts on the way. Camp only at organised camps or with local permission: wild camping near army areas is not allowed. Photography of army posts and installations is prohibited. Foreign nationals are generally not allowed in Gurez.",
        ],
      },
      {
        h: "When to go",
        list: [
          "June: the valley turns green after snow; nights are very cold.",
          "July and August: the warmest months and the best for camping.",
          "September: clear skies, harvest season, colder nights.",
          "October onwards: most camps close as the cold sets in; the pass closes in winter.",
        ],
      },
      {
        h: "What to carry",
        list: [
          "Warm layers, a down jacket and a woollen cap: nights drop close to freezing even in summer.",
          "A torch and power bank.",
          "Basic medicines and personal toiletries.",
          "Cash: card payments and ATMs are limited.",
          "Rain gear for sudden showers.",
        ],
      },
      {
        h: "Things to do from camp",
        list: [
          "Walk along the Kishanganga and through the wooden villages.",
          "Visit the Habba Khatoon spring and view the pyramid-shaped peak.",
          "Drive to Tulail for the upper valley.",
          "Fish for trout with a permit from the fisheries department.",
          "Stargaze: Gurez has very little light pollution.",
        ],
      },
      {
        h: "Planning your trip",
        p: [
          "Gurez is 5 to 6 hours from Srinagar over Razdan Pass, so plan at least two nights. A typical plan is one night in a Dawar camp and one in Tulail or a Dawar homestay. Leave Srinagar early and carry snacks: there are few food stops after Bandipora. Packages to Gurez usually include the SUV, camps or homestays and meals.",
        ],
      },
    ],
    faqs: [
      { q: "Is camping allowed in Gurez?", a: "Yes, at organised camps or with local permission. Wild camping near army areas is not allowed." },
      { q: "When is the best time to camp in Gurez?", a: "July and August, when nights are coldest but manageable and the valley is green." },
      { q: "Do Gurez camps have washrooms?", a: "Most have shared or attached washrooms. Ask the camp before booking." },
      { q: "Can foreigners camp in Gurez?", a: "Foreign nationals are generally not permitted in Gurez. Check with the authorities before planning." },
    ],
  },
  {
    slug: "pre-wedding-photoshoot-in-kashmir",
    title: "Pre-Wedding Photoshoot in Kashmir: Locations by Season, Permissions and Planning",
    description: "Pre-wedding photoshoot in Kashmir: Dal Lake shikaras, Mughal gardens, Gulmarg snow, Pahalgam and Sonamarg, the best seasons, drone rules and planning tips.",
    category: "Honeymoon",
    destination: "kashmir",
    date: DATE,
    intro:
      "Kashmir is one of India's favourite pre-wedding photoshoot destinations: shikaras on Dal Lake, Mughal gardens and tulips in spring, golden chinars in autumn, and snow in Gulmarg in winter. A good shoot takes two to four days across Srinagar and one hill station, with a local photographer or one who travels with you. Some gardens charge camera or professional shoot fees, and drones need permission, so plan these before you arrive.",
    sections: [
      {
        h: "Best locations",
        list: [
          "Dal Lake: shikara rides at sunrise and sunset, houseboat decks and the floating market.",
          "Nishat Bagh and Shalimar Bagh: Mughal terraces, fountains and chinar trees.",
          "Indira Gandhi Memorial Tulip Garden: rows of tulips in late March and April.",
          "Pari Mahal: terraced gardens with views over Dal.",
          "Gulmarg: snowfields in winter, green meadows and St Mary's Church in summer.",
          "Pahalgam: the Lidder river, pine forests and Betaab Valley.",
          "Sonamarg: the glacier valley and the Sindh river.",
        ],
      },
      {
        h: "Best seasons",
        list: [
          "Spring (late March to April): tulips, almond and cherry blossom. Very popular.",
          "Summer (May to August): green meadows, long days and lake life.",
          "Autumn (late October to November): golden and red chinars, clear skies. The most photogenic season for many photographers.",
          "Winter (December to February): snow in Gulmarg and Pahalgam, misty lake mornings.",
        ],
      },
      {
        h: "Permissions and fees",
        list: [
          "Mughal gardens and the Tulip Garden have entry tickets, and professional shoots may need permission or a fee from the Floriculture Department.",
          "Drones need permission from the authorities in J&K, and many areas are no-fly zones, including near the airport and security installations.",
          "Ask before photographing local people, especially women.",
          "Do not photograph army posts or installations.",
        ],
      },
      {
        h: "A 3-day shoot plan",
        days: [
          "Srinagar: sunrise on Dal by shikara, Nishat and Shalimar in the morning, Pari Mahal at sunset.",
          "Gulmarg: meadow or snow shoot in the morning light, Gondola views, St Mary's Church.",
          "Pahalgam or Sonamarg: river and forest shoot, or a return to Srinagar for the old city and houseboats.",
        ],
      },
      {
        h: "Outfits and props",
        list: [
          "Kashmiri pheran and jewellery can be hired from photographers on Dal Lake.",
          "Bright colours stand out against snow and green meadows.",
          "Carry warm layers and change in the car; snow shoots are cold.",
          "Comfortable shoes for walking between locations.",
        ],
      },
      {
        h: "Choosing a photographer",
        p: [
          "Ask to see full galleries from previous Kashmir shoots, not just highlights. Agree the number of edited photos, video, drone (with permission), travel costs and delivery time in writing. Local Srinagar photographers know the light and permissions, while a photographer from home knows your style; many couples hire a local assistant to help an outside photographer.",
        ],
      },
      {
        h: "Planning around crowds",
        p: [
          "Gardens and the Tulip Garden are busiest late morning and on weekends. Shoot at opening time or late afternoon. On Dal Lake, sunrise is quiet and the light soft. In Gulmarg, shoot before the Gondola crowds arrive or after 3 pm.",
        ],
      },
    ],
    faqs: [
      { q: "What is the best season for a pre-wedding shoot in Kashmir?", a: "Spring for tulips and blossom, autumn for golden chinars, and winter for snow. Each gives a very different look." },
      { q: "Do I need permission to shoot in the Mughal gardens?", a: "Professional shoots may need permission or a fee from the Floriculture Department. Ask at the garden or through your agent." },
      { q: "Can I fly a drone for my Kashmir photoshoot?", a: "Only with permission from the authorities. Many areas are no-fly zones." },
      { q: "How many days are needed for a Kashmir pre-wedding shoot?", a: "Two to four days across Srinagar and one hill station." },
    ],
  },
  {
    slug: "golf-in-kashmir-royal-springs-gulmarg-pahalgam",
    title: "Golf in Kashmir: Royal Springs Srinagar, Gulmarg and Pahalgam Golf Courses",
    description: "Golf in Kashmir: Royal Springs above Dal Lake, Gulmarg's high-altitude course and Pahalgam's course in the Lidder valley, the season, bookings and a golf trip plan.",
    category: "Adventure",
    destination: "kashmir",
    date: DATE,
    intro:
      "Kashmir has three standout golf courses: Royal Springs in Srinagar, on the Zabarwan foothills above Dal Lake; Gulmarg Golf Course on the meadow at about 2,650 m, one of the highest green golf courses in the world; and Pahalgam Golf Course in the Lidder valley. The season runs roughly from April to October. A golf trip of five or six nights can play all three, with Srinagar as the base and a night each in Gulmarg and Pahalgam.",
    sections: [
      {
        h: "Royal Springs Golf Course, Srinagar",
        p: [
          "An 18-hole course designed by Robert Trent Jones Jr., set between the Zabarwan hills and Dal Lake, with views over the water from many holes. It is the best-known course in Kashmir and is managed by the J&K government. Visiting golfers can play by booking a tee time and paying green fees; equipment and caddies are available.",
        ],
      },
      {
        h: "Gulmarg Golf Course",
        p: [
          "Laid out on the Gulmarg meadow, the course dates back to the British era and is one of the highest green golf courses in the world. It has 18 holes surrounded by pine forest and snow-capped peaks. In winter it lies under snow and becomes part of the ski and sledge area; it is played from late spring to autumn.",
        ],
      },
      {
        h: "Pahalgam Golf Course",
        p: [
          "In the Lidder valley close to the town, with pine-covered hills and the river nearby. It suits a relaxed round between valley visits to Aru and Betaab.",
        ],
      },
      {
        h: "Season",
        list: [
          "April and May: courses reopen, fresh greens and cool mornings.",
          "June to August: the main golf season, long days and pleasant weather.",
          "September and October: clear skies and autumn colours, many golfers' favourite months.",
          "November to March: Gulmarg and Pahalgam are under snow; Royal Springs depends on weather.",
        ],
      },
      {
        h: "A 6-night Kashmir golf plan",
        days: [
          "Arrive in Srinagar; evening shikara on Dal.",
          "Morning round at Royal Springs; afternoon at the Mughal gardens.",
          "Drive to Gulmarg; afternoon round on the meadow course.",
          "Morning Gondola to Apharwat; second round or rest.",
          "Drive to Pahalgam via Pampore; afternoon walk by the Lidder.",
          "Morning round at Pahalgam; afternoon in Betaab or Aru by union taxi.",
          "Return to Srinagar and depart.",
        ],
      },
      {
        h: "Booking and practical tips",
        list: [
          "Book tee times in advance, especially for weekends.",
          "Carry your own clubs if you prefer; rental sets are available but limited.",
          "Dress codes apply at Royal Springs; check before you go.",
          "Carry sun protection: UV is strong at altitude.",
          "Keep mornings for golf and afternoons for sightseeing.",
        ],
      },
      {
        h: "Golf for non-golfers in the group",
        p: [
          "Non-golfing partners can take a shikara on Dal, visit the gardens or shop in Srinagar while others play Royal Springs, ride ponies to Khilanmarg in Gulmarg, or raft on the Lidder in Pahalgam. A golf package can include separate plans for each.",
        ],
      },
    ],
    faqs: [
      { q: "Can tourists play golf at Royal Springs in Srinagar?", a: "Yes. Visiting golfers book a tee time and pay green fees; equipment and caddies are available." },
      { q: "Is Gulmarg Golf Course open in winter?", a: "No. It lies under snow from about December to March and becomes part of the ski area." },
      { q: "How many golf courses are there in Kashmir?", a: "The three best known are Royal Springs in Srinagar, Gulmarg and Pahalgam, with a few others in the region." },
      { q: "When is the best time for a golf trip to Kashmir?", a: "May to October, with September and October often the most pleasant." },
    ],
  },
];

const MORE: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "shikara-ride-dal-lake-guide": {
    sections: [
      {
        h: "What a shikara is",
        p: [
          "A shikara is a long, narrow wooden boat with a canopy, cushioned seats and curtains, paddled from the back with a heart-shaped oar. Shikaras have carried people and goods across Srinagar's lakes for centuries, and they are still how many lake residents get to work, school and the market. The tourist shikaras along Boulevard Road are painted in bright colours, named, numbered and registered with the tourism department.",
        ],
      },
      {
        h: "Shikara ride on a Kashmir package",
        p: [
          "Most Kashmir packages include one shikara ride of about an hour, usually on the arrival evening. If you want the floating market, a long ride to Nigeen or a sunrise photo session, ask for it to be written into the itinerary as a separate item so the boat is booked for the right time. Honeymoon packages often add a decorated shikara with flowers.",
        ],
      },
    ],
    faqs: [
      { q: "How many people fit in a shikara?", a: "Usually four to six adults. Larger families take two boats." },
    ],
  },
  "atv-ride-in-gulmarg": {
    sections: [
      {
        h: "A Gulmarg day with an ATV ride",
        p: [
          "Leave Srinagar by 8 am and reach Gulmarg by 10. Take your booked Gondola slot to Kongdoori, and on to Apharwat if Phase 2 is open. Come down by early afternoon, have lunch near the Gondola base, then take a 30 minute ATV loop over the meadow or the snowfields. Finish with tea and leave by 4 pm in winter or 5 pm in summer.",
          "In peak weeks, do the ATV first and the Gondola later only if your slot allows: queues for the Gondola can be long, and you do not want to miss your time. Agree the ATV loop and time with the operator first, and keep the receipt or the operator's number in case you need to return.",
        ],
      },
      {
        h: "ATV vs snow scooter vs sledge",
        list: [
          "ATV: four-wheeled quad, works on snow and dirt, easy to ride.",
          "Snow scooter or snowmobile: built for snow only, faster on open snowfields in winter.",
          "Sledge: pulled by a local sledge puller on the slopes, gentle and fun for children.",
        ],
      },
      {
        h: "Gulmarg altitude and comfort",
        p: [
          "Gulmarg sits at about 2,650 m. Most visitors feel fine, but take it slowly if you have come straight from the plains, drink water and avoid rushing between activities. In winter, the cold and wind on an open quad feel much stronger than on the ground: cover your face and ears, and wear gloves.",
        ],
      },
    ],
    faqs: [
      { q: "Can I ride an ATV with my partner on the back?", a: "Many operators allow a passenger behind the rider. Ask before you start and ride slowly." },
    ],
  },
  "paragliding-in-kashmir": {
    sections: [
      {
        h: "Astanmarg in more detail",
        p: [
          "Astanmarg is a ridge-top meadow above the Harwan and Shalimar side of Srinagar, reached by a mountain road. J&K Tourism has promoted it for paragliding, with tandem flights in the warmer months and views over Dal Lake, the city and the Zabarwan range. The drive up takes time, so plan a half day. Combine it with Shalimar Bagh, Harwan and the Dachigam side of the city.",
          "Like most paragliding sites, operations depend on the wind direction and strength. Operators decide each morning whether flights can run, so call ahead before you drive up.",
        ],
      },
      {
        h: "Paragliding in Sonamarg",
        p: [
          "In Sonamarg, tandem flights have been reported over the meadows above the Sindh valley in summer, with the glacier valley and snow peaks around you. Ask your hotel or driver which operator is flying that season, and check the registration and equipment before you pay. Combine the flight with a morning at Thajiwas Glacier.",
        ],
      },
      {
        h: "Other adventure activities in Kashmir",
        list: [
          "River rafting on the Lidder in Pahalgam and the Sindh near Sonamarg, roughly May to September.",
          "Skiing and snowboarding in Gulmarg from December to March.",
          "Trekking: Kashmir Great Lakes, Tarsar Marsar and day hikes in Pahalgam and Gulmarg.",
          "ATV and snow scooters in Gulmarg.",
          "Trout fishing with a permit from the fisheries department.",
        ],
      },
    ],
    faqs: [
      { q: "Is paragliding in Kashmir safe?", a: "With a registered operator, a certified pilot, good equipment and calm weather, tandem paragliding carries a low risk. Do not fly with unregistered operators." },
      { q: "Can I get a video of my paragliding flight?", a: "Many pilots offer a GoPro video for an extra charge. Ask before take-off." },
    ],
  },
  "vaishno-devi-helicopter-booking-guide": {
    sections: [
      {
        h: "About the yatra",
        p: [
          "Mata Vaishno Devi is one of India's most visited Hindu shrines, a cave temple in the Trikuta hills above Katra, where the goddess is worshipped in the form of three natural rock formations called pindies. The yatra runs all year, with the largest crowds during the Navratri festivals, summer school holidays and New Year. The Shrine Board manages the route, accommodation, helicopter and ropeway services.",
          "The walking route from Banganga passes Charan Paduka, Adhkuwari (with the Garbh Joon cave) and Sanjichhat before reaching the Bhawan. A newer route from Adhkuwari to the Bhawan is less steep and used by battery cars. After darshan, many pilgrims visit Bhairon temple, about 1.5 km above the Bhawan, reached on foot or by ropeway.",
        ],
      },
      {
        h: "What to carry",
        list: [
          "Original photo ID and your booking confirmation.",
          "A light warm layer: the Bhawan is much colder than Katra.",
          "Water, a raincoat in monsoon and comfortable shoes.",
          "Leather items, mobile phones and cameras are not allowed inside the cave area; use the lockers.",
        ],
      },
    ],
    faqs: [
      { q: "How long is the helicopter flight from Katra to Sanjichhat?", a: "A few minutes. Most of the time goes in reporting, security and the walk from Sanjichhat to the Bhawan." },
      { q: "Can I book only a one-way helicopter ticket?", a: "Yes. Many pilgrims fly up and walk down, or walk up and fly down, depending on availability." },
    ],
  },
  "camping-in-gurez-valley": {
    sections: [
      {
        h: "About Gurez",
        p: [
          "Gurez is a high Himalayan valley on the Kishanganga river, north of the Kashmir valley across the Razdan Pass. It is home to the Dard-Shina people, who speak Shina and live in wooden houses built in a distinctive style. The pyramid-shaped Habba Khatoon peak, named after the 16th century poet-queen of Kashmir, towers over Dawar. The valley was opened to tourists only in recent years, and it remains quiet, with very little commercial development.",
          "The Kishanganga is clear and fast, with trout in its side streams, and the valley is lined with pine and birch forest. In summer the meadows turn green and wildflowers bloom; in autumn the harvest season brings golden fields.",
        ],
      },
      {
        h: "A 3-night Gurez trip",
        days: [
          "Srinagar to Dawar over Razdan Pass, with stops at Wular lake viewpoints. Evening at the riverside camp.",
          "Dawar villages, Habba Khatoon spring and riverside walks.",
          "Drive to Tulail for the upper valley; night in a Tulail homestay or camp.",
          "Return to Srinagar before evening.",
        ],
      },
      {
        h: "Camps or homestays",
        p: [
          "Camps give you the riverside setting and bonfire evenings; homestays give you warmth, home food and a glimpse of local life in a wooden house. Many travellers do one of each. Both are simple, so carry what you need for comfort.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Gurez from Srinagar?", a: "About 125 km, 5 to 6 hours by road via Bandipora and Razdan Pass." },
      { q: "Is there mobile network at Gurez camps?", a: "Limited. Postpaid connections on some networks work in Dawar; signal drops further up the valley." },
    ],
  },
  "pre-wedding-photoshoot-in-kashmir": {
    sections: [
      {
        h: "Shoot ideas by location",
        list: [
          "Dal Lake: a decorated shikara at sunrise, kahwa on a houseboat deck, the couple in pheran with a flower seller boat passing.",
          "Nishat Bagh: walking up the terraces along the water channel with the Zabarwan hills behind.",
          "Shalimar Bagh: the black marble pavilion and chinar avenues in autumn.",
          "Tulip Garden: rows of colour with the Zabarwan range behind in April.",
          "Gulmarg: snow fight, Gondola cabin and the meadow at golden hour.",
          "Pahalgam: the Lidder river rocks and pine forest of Betaab Valley.",
          "Old city: wooden houses, Khanqah-e-Moula and the Jhelum ghats for a heritage look.",
        ],
      },
      {
        h: "Light and timing",
        p: [
          "Kashmir's light is clear and strong. The best hours are the first two after sunrise and the last two before sunset. In winter, snow reflects light, so even midday shoots work but need care with exposure. In autumn, the low sun through chinar leaves gives the famous golden glow. Plan the most important location for the best light and keep a buffer day for rain or snow.",
        ],
      },
      {
        h: "Travelling with a shoot team",
        p: [
          "If your photographer, videographer and stylist travel with you, book a tempo traveller or two Innovas so equipment and outfits move with you. Ask your agent to plan routes around light, not just sightseeing, and to arrange garden permissions in advance. A 4 or 5 night shoot package often includes Srinagar, Gulmarg and one of Pahalgam or Sonamarg.",
        ],
      },
    ],
    faqs: [
      { q: "Can I hire a Kashmiri costume for photos?", a: "Yes. Photographers on Dal Lake and at the gardens hire pherans and jewellery for photos." },
    ],
  },
  "golf-in-kashmir-royal-springs-gulmarg-pahalgam": {
    sections: [
      {
        h: "Golf history in Kashmir",
        p: [
          "Golf came to Kashmir with the British, who used Gulmarg as a summer retreat in the late 19th and early 20th centuries. Gulmarg's course is one of the oldest in the region, and the meadow also had a club house, church and hotels that survive in some form today. Royal Springs is much newer, opened in the early 2000s, and is now Kashmir's best-known championship course. Together they make Kashmir one of India's most scenic golf destinations.",
        ],
      },
      {
        h: "What to pack for a golf trip",
        list: [
          "Your clubs in a hard case, or plan to hire a set locally.",
          "Layers: mornings are cool and afternoons warm.",
          "Rain gear for sudden showers in summer.",
          "Sunscreen, sunglasses and a hat.",
          "Golf shoes and a few balls more than you expect: mountain rough is unforgiving.",
        ],
      },
      {
        h: "Golf and tourism combined",
        p: [
          "Golf rounds fit neatly into a classic Kashmir trip, because the three main courses are in the three main towns. Play early and spend afternoons on shikaras, gardens, the Gondola and valley trips. If you travel with family, ask your agent for a package that includes tee times and transfers for golfers and sightseeing for the rest of the group on the same days.",
        ],
      },
    ],
    faqs: [
      { q: "Can I hire golf clubs in Kashmir?", a: "Yes, at the main courses, though sets are limited. Serious golfers bring their own." },
    ],
  },
};

const MORE_2: Record<string, BlogSection[]> = {
  "shikara-ride-dal-lake-guide": [
    { h: "Shikara ride with children and elderly parents", p: ["Getting in and out of a shikara is the only tricky part: the boat moves as you step in. Boatmen hold the boat steady and give a hand. Elderly travellers should step onto the middle of the boat and sit at once; children should sit between adults and wear life jackets where provided. A one-hour ride in the afternoon light is the most comfortable choice for both."] },
  ],
  "atv-ride-in-gulmarg": [
    { h: "Booking an ATV ride through a package", p: ["Some Kashmir packages list an ATV ride as an add-on for the Gulmarg day. Ask whether the price covers a fixed loop and time, or only a voucher you exchange with an operator on the meadow. Paying the operator directly at the official local rate is usually just as easy, and lets you choose the loop on the day depending on weather and snow."] },
  ],
  "paragliding-in-kashmir": [
    { h: "Planning a paragliding flight into your Kashmir itinerary", p: ["Paragliding works best on a flexible day. If you are based in Srinagar for three nights, keep a morning free for Astanmarg and move it to another day if the wind is wrong. On a Sonamarg day trip, ask your driver to check with operators while you are at Thajiwas, so you can fly in the afternoon if conditions are good. Do not plan a flight on your arrival or departure day.", "Tell your agent in advance that you want a flight. Operators are few, slots are limited in peak months, and an agent can confirm which operator is flying that season and whether they hold current registration and insurance."] },
  ],
  "vaishno-devi-helicopter-booking-guide": [
    { h: "If you cannot get a helicopter seat", p: ["When online seats are sold out, consider walking up on the newer, gentler route from Adhkuwari, a pony or palki from Banganga, or the battery car for elderly and disabled pilgrims. Starting the climb in the evening and resting at Adhkuwari or the Bhawan, in Shrine Board rooms booked online, makes the yatra easier for families."] },
  ],
  "camping-in-gurez-valley": [
    { h: "Respecting the valley", p: ["Gurez is a fragile and traditional place. Carry your waste back to Srinagar or use the bins at camps, avoid plastic, and keep music low at night. Dress modestly in the villages, ask before photographing people and homes, and buy local produce like walnuts, honey and potatoes from village shops. Bonfires should be small and at the camp's fire pit only, because firewood is scarce and precious for winter.", "Follow instructions at checkposts and do not walk towards restricted areas near the Line of Control. Your camp host will tell you which paths are open for walks."] },
  ],
  "pre-wedding-photoshoot-in-kashmir": [
    { h: "Weather backup", p: ["Kashmir weather can change quickly, especially in spring and winter. A rainy morning in Srinagar is a chance for houseboat interiors and old city lanes; a snow day in Gulmarg can cut a shoot short if the road closes. Keep one buffer day and plan an indoor or covered location in each town, so the shoot does not depend on a single clear morning."] },
  ],
  "golf-in-kashmir-royal-springs-gulmarg-pahalgam": [
    { h: "Playing at altitude", p: ["Golf balls fly further in thin mountain air, especially in Gulmarg at about 2,650 m, so club selection changes. Many golfers find they need one club less on long shots. Altitude also tires you faster: walk slowly between holes, drink water, and take a cart where one is available. In summer the sun is strong, so start early and finish before the afternoon heat on the open meadow course.", "Weather moves fast in the mountains. A clear morning can turn into a thunderstorm by afternoon in July and August, so watch the sky and follow the course staff if play is stopped."] },
  ],
};

const FAQ_2: Record<string, BlogPost["faqs"]> = {
  "paragliding-in-kashmir": [
    { q: "Is there an age or weight limit for paragliding in Kashmir?", a: "Most operators set a minimum age and a maximum weight for tandem flights, often around 100 kg. Ask the operator before you travel up to the take-off site, and tell them about any health conditions." },
  ],
  "camping-in-gurez-valley": [
    { q: "Are Gurez camps safe for families?", a: "Organised camps near Dawar are used by families every summer. Keep children close to the tents near the fast river, follow your host's advice on walks, and carry warm clothes for the cold nights." },
    { q: "Can I get vegetarian food at Gurez camps?", a: "Yes. Camps and homestays cook simple vegetarian meals on request, alongside Kashmiri dishes. Tell them in advance, as supplies come from Bandipora." },
  ],
  "pre-wedding-photoshoot-in-kashmir": [
    { q: "Is a Kashmir pre-wedding shoot expensive?", a: "It depends on the photographer, the number of days and the locations. Local Srinagar photographers are usually more affordable than flying in a team, and a package can bundle stays, cabs and permissions." },
  ],
  "golf-in-kashmir-royal-springs-gulmarg-pahalgam": [
    { q: "Is Royal Springs open to non-members?", a: "Yes. Visitors can book tee times and pay green fees. Weekends are busier, so book ahead." },
    { q: "Can I combine golf with skiing in Kashmir?", a: "Not in the same season: golf runs from about April to October and skiing from December to March. Shoulder months like late March or November allow neither reliably." },
  ],
};

export const KASHMIR_ACTIVITIES: BlogPost[] = BASE.map((p) => {
  const m = MORE[p.slug];
  return { ...p, sections: [...p.sections, ...(m?.sections ?? []), ...(MORE_2[p.slug] ?? [])], faqs: [...p.faqs, ...(m?.faqs ?? []), ...(FAQ_2[p.slug] ?? [])] };
});

const EXTRA_1: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "shikara-ride-dal-lake-guide": {
    sections: [

    ],
    faqs: [
      { q: "Do I need advance shikara booking on Dal Lake?", a: "Not usually. Shikaras are available at the Boulevard ghats through the day. Book a day ahead for the dawn floating market, a long ride or a decorated honeymoon shikara." },
    ],
  },
  "golf-in-kashmir-royal-springs-gulmarg-pahalgam": {
    sections: [

    ],
    faqs: [
      { q: "Is there a Kashmir golf package?", a: "Yes. A Kashmir golf package usually combines Srinagar, Gulmarg and Pahalgam stays with tee times at Royal Springs, Gulmarg and Pahalgam, transfers and sightseeing for non-golfers." },
    ],
  },
};
for (const p of KASHMIR_ACTIVITIES) {
  const e = EXTRA_1[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_2: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "vaishno-devi-helicopter-booking-guide": {
    sections: [
      { h: "How the helicopter service works", p: ["The Shri Mata Vaishno Devi Shrine Board contracts licensed helicopter operators to run shuttle flights between the Katra helipad and Sanjichhat, a ridge on the yatra route about 2.5 km before the Bhawan. Flights carry a small number of passengers each and run many sorties a day in good weather, from morning until afternoon. The flight itself is a few minutes long, climbing over the Trikuta hills with views of the yatra path below. Weight and baggage limits apply, and passengers are weighed with their bags at check-in."] },
      { h: "Booking opening and how seats sell out", p: ["Helicopter bookings open on the Shrine Board website for dates some time in advance, and the most popular dates sell out within minutes or hours of opening: weekends, Navratri, summer holidays, New Year and festival days. Plan your yatra dates early, note when booking opens for those dates, and be ready to book as soon as slots appear. Keep IDs and payment details ready. If seats are gone, check again closer to the date for cancellations, but do not rely on it."] },
      { h: "Reporting time, check-in and security", p: ["On the day, reach the Katra helipad well before the reporting time printed on your ticket. Carry the original ID used for booking, your ticket and your yatra RFID card. At check-in, staff verify documents, weigh passengers and baggage and run security screening. Late arrivals can lose their seats. Once flights begin, boarding is quick; follow staff instructions around the rotors and keep loose items secure."] },
      { h: "Weather, delays and cancellations", p: ["Helicopter flights depend on visibility and wind. Low cloud, rain, fog and strong winds can delay or suspend flights for hours or a whole day, more often in the monsoon months and in winter. When flights are suspended, the Shrine Board's rules decide refunds or rescheduling. Keep your plan flexible: if flights stop, you can still walk, take a pony or palki, or wait at Katra for the next day. Do not book onward travel tightly on helicopter day."] },
      { h: "From Sanjichhat to the Bhawan and back", p: ["Sanjichhat has a helipad, waiting areas and food stalls. From here, a mostly paved path of about 2.5 km leads to the Bhawan, partly downhill on the way in, which means uphill on the way back. Ponies and palkis are available at Shrine Board rates. After darshan, many pilgrims take the ropeway to Bhairon temple. Leave enough time to walk or ride back to Sanjichhat before your return flight slot, and allow extra time on crowded days when queues at the Bhawan are long."] },
      { h: "Darshan and the Bhawan: what to expect", p: ["At the Bhawan, pilgrims queue for darshan of the three pindies in the holy cave. Queues can take minutes or several hours depending on the day. Lockers are available for phones, bags, leather items and cameras, which are not allowed in the cave area. The Bhawan has bhojanalayas serving vegetarian food, drinking water, medical facilities and rest areas. Nights at the Bhawan are cold in every season."] },
      { h: "Helicopter tickets with a tour package", p: ["Tour operators often cannot guarantee helicopter seats, because booking is done only through the Shrine Board in the pilgrim's name. A good Vaishno Devi package helps you plan the date and reminds you when booking opens, but you book the helicopter yourself or with the operator's help using your own details. Be wary of any agent who promises guaranteed seats for a premium."] },
      { h: "Helicopter for elderly and disabled pilgrims", p: ["The helicopter is the easiest way up for elderly pilgrims, those with heart or knee problems and disabled pilgrims, but Sanjichhat still involves a 2.5 km walk, pony or palki to the Bhawan. Book a palki in advance at Sanjichhat if walking is difficult. The battery car on the newer track from Adhkuwari is another option for those who cannot walk far. Carry medicines and inform staff of any medical needs."] },
    ],
    faqs: [
      { q: "How many minutes is the Vaishno Devi helicopter ride?", a: "A few minutes from Katra to Sanjichhat. Check-in and security take much longer." },
      { q: "Is there a weight limit for the Vaishno Devi helicopter?", a: "Yes. Passengers and baggage are weighed at check-in, and limits apply." },
      { q: "Can I book the helicopter on the day at Katra?", a: "Sometimes, if seats are left, but do not rely on it in peak periods. Book online in advance." },
      { q: "Can agents guarantee Vaishno Devi helicopter seats?", a: "No. Seats are booked only through the Shrine Board in the pilgrim's name. Avoid agents promising guarantees." },
      { q: "Is the walk from Sanjichhat to the Bhawan difficult?", a: "It is about 2.5 km on a mostly paved path, easier on the way in. Ponies and palkis are available." },
    ],
  },
  "camping-in-gurez-valley": {
    sections: [
      { h: "A day at a Gurez riverside camp", p: ["Morning starts cold, often near freezing even in July, with tea by the tent and the sound of the Kishanganga. After breakfast, walk along the river into Dawar village to see the log houses and fields, or drive towards Wanpora and Badwan. Lunch is back at camp or at a dhaba in Dawar. In the afternoon, visit the Habba Khatoon spring, fish for trout with a permit, or simply sit by the river. Evenings bring a bonfire where allowed, a simple dinner and a sky full of stars."] },
      { h: "Camping gear: what camps provide and what to bring", p: ["Organised camps in Gurez provide the tent, beds or mattresses, blankets or sleeping bags, meals and washroom access. Bring your own warm layers, including a down jacket, thermal base layers, woollen socks and a cap, as well as a torch, a power bank, personal toiletries, a water bottle and basic medicines. A light rain jacket is useful in summer showers. If you are wild camping with local permission, you will need full camping equipment."] },
      { h: "Food at Gurez camps", p: ["Meals at camps are simple and hearty: rice, dal, rajma, seasonal vegetables, chicken or mutton dishes and roti, with tea and kahwa. Local produce such as potatoes, peas and walnuts appears on the menu. Vegetarian and mild food can be arranged with notice. Fresh supplies come over Razdan Pass from Bandipora, so choice is limited; carry snacks you cannot do without."] },
      { h: "Fishing in Gurez", p: ["The Kishanganga and its side streams hold trout, and fishing is one of the quiet pleasures of a Gurez stay. A fishing permit is required from the J&K Fisheries Department for trout beats; ask your camp host how to arrange one. Follow catch rules and handle fish carefully. Local guides know the best stretches and seasons."] },
      { h: "Camping vs homestay vs JKTDC huts", p: ["Camps give the riverside setting, bonfires and a sense of adventure, but are cold at night and basic. Homestays offer warm rooms in log houses, home-cooked food and time with a Gurezi family. JKTDC huts in Dawar are simple, solid rooms with more comfort than tents. Many visitors spend one night in a camp and one in a homestay or hut."] },
      { h: "Weather and seasons for camping", p: ["June nights are very cold and the river is high with snowmelt. July and August are the warmest months, with occasional rain. September brings clear skies, golden fields and cold nights. Most camps close by early October. Snow closes Razdan Pass from about November to May. Check the weather and the pass status before you travel."] },
      { h: "Getting to Gurez camps", p: ["Gurez is about 5 to 6 hours from Srinagar via Bandipora and Razdan Pass. Most camps are near Dawar, the main village. Travel in an SUV with an experienced local driver, leave Srinagar by 7 am, and carry original IDs for every traveller for checkposts. Camps can usually arrange transport from Srinagar as part of a package."] },
      { h: "Camping responsibly in a border valley", p: ["Gurez is close to the Line of Control and is home to a traditional community. Camp only at organised sites or with local and administrative permission. Keep music low, carry waste back, avoid plastic and use the camp's toilets. Do not photograph army installations or people without permission. Ask your host before walking beyond the village."] },
    ],
    faqs: [
      { q: "Do I need my own tent for camping in Gurez?", a: "Not at organised camps, which provide tents and bedding. Bring warm layers and a torch." },
      { q: "Can I fish in Gurez?", a: "Yes, with a permit from the J&K Fisheries Department for trout waters." },
      { q: "When do Gurez camps close?", a: "Most close by early October as nights get very cold." },
      { q: "Is a homestay better than camping in Gurez?", a: "A homestay is warmer and more comfortable; a camp gives the riverside experience. Many visitors try both." },
    ],
  },
  "shikara-ride-dal-lake-guide": {
    sections: [
      { h: "Shikara routes on Dal Lake in detail", p: ["The classic one-hour ride from the Boulevard ghats passes the rows of houseboats opposite the road, the waterfront of Nehru Park and the open water with views of Shankaracharya hill and Hari Parbat. A two-hour ride adds Char Chinar, a small island with chinar trees in the Bod Dal section, and the floating shops of Meena Bazaar. Longer rides of three hours or more go deeper into the lake: past the floating gardens where farmers grow vegetables on mats of reeds, the lotus beds in summer, the old lake villages with wooden houses and the channels leading north to Nigeen."] },
      { h: "The floating vegetable market in detail", p: ["Before dawn, farmers from the lake villages paddle their shikaras to a stretch of water in the Dal near the old lake settlements, loaded with vegetables grown on the floating gardens: lotus stems, collard greens, radishes, pumpkins and more. Trading happens boat to boat, in the half-light, and is over by around 7 am. Visitors watch from their own shikaras. Book your shikara the evening before, leave at about 5 am, carry a warm layer and do not crowd the farmers' boats."] },
      { h: "Life on the lake: what you see from a shikara", p: ["Dal is not just a tourist lake. Thousands of people live on and around it, in the lake villages and on the floating gardens. From a shikara you see children paddling to school, women washing at the water's edge, farmers tending floating gardens, vendors selling flowers, saffron and handicrafts from their boats, and the wooden mosques and shops of the lake villages. Ask before photographing people, and respect their homes."] },
      { h: "Shikara ride for honeymooners", p: ["Honeymoon couples often book a decorated shikara with flower garlands, cushions and curtains, sometimes heart-shaped, for a sunset ride. Some boatmen offer a photographer and Kashmiri costumes. Ask for a longer ride towards Char Chinar or the quieter parts of the lake, away from the busiest stretch near the ghats. A sunrise ride with kahwa on board is equally special and much quieter."] },
      { h: "Shikara rides on Nigeen and other lakes", p: ["Nigeen Lake, north of Dal, offers quieter shikara rides past residential houses and willows, with views of Hari Parbat. A long ride from Nigeen through the channels to Dal is one of the best ways to see lake life. Manasbal lake near Ganderbal also has shikara rides, especially beautiful when lotuses bloom in summer. Wular lake is larger and wilder, with boat rides near Bandipora."] },
      { h: "Vendors on the lake: how to handle them", p: ["During a shikara ride, vendors in their own boats will come alongside offering saffron, jewellery, shawls, papier mache, kahwa, flowers and photographs in Kashmiri dress. Some sell good products; others sell imitations. You are under no obligation to buy. A polite 'no, thank you' is enough. If you want saffron or shawls, it is safer to buy from trusted shops ashore with receipts."] },
      { h: "Shikara safety", p: ["Shikaras are stable on calm water but tip if passengers stand or move suddenly. Sit down, keep children in the middle, and ask for life jackets where available. Do not take a shikara out in strong wind or storms, which can rise quickly in summer afternoons. Choose registered boatmen from the official ghats, and agree the route before you leave."] },
    ],
    faqs: [
      { q: "What is Char Chinar?", a: "A small island in Dal Lake with chinar trees, a popular stop on a two-hour shikara ride." },
      { q: "Can I book a shikara for sunrise?", a: "Yes. Book the evening before with your houseboat or a boatman at the ghat." },
      { q: "Is it safe to take children on a shikara?", a: "Yes, if they sit in the middle and wear life jackets where available. Avoid windy weather." },
      { q: "Is there shikara ride at Manasbal Lake?", a: "Yes. Manasbal near Ganderbal has shikara rides, especially lovely when lotuses bloom in summer." },
    ],
  },
};
for (const p of KASHMIR_ACTIVITIES) {
  const e = EXTRA_2[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_3: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "atv-ride-in-gulmarg": {
    sections: [
      { h: "ATV routes around Gulmarg", p: ["Operators run ATVs on fixed loops that change with the season. In winter, loops cross the snowfields around the main meadow and the slopes near the Gondola area, giving you a fast ride over fresh snow with forest and peaks around you. In summer and autumn, loops follow dirt tracks across the meadow edges and into the forest fringes towards viewpoints. Longer loops of 45 minutes to an hour go further out; short loops of 15 to 20 minutes stay close to the start. Ask the operator to show you the route before you set off."] },
      { h: "Riding an ATV: a quick how-to", p: ["An ATV has a thumb throttle on the right handlebar and brakes on the levers, and some have a foot brake. Start slowly, keep your feet on the footrests, look where you want to go and lean into turns. On snow, brake gently and early, because the quad slides. On downhill sections, slow down before the slope, not on it. The operator or guide rides with you or leads the way on another quad; follow their line and speed."] },
      { h: "ATV vs snow scooter vs sledge in Gulmarg", p: ["ATVs work in all seasons and are easy to ride. Snow scooters and snowmobiles run only on snow, are faster on open snowfields and usually ride with a driver. Sledges are pulled by local sledge operators on the slopes and are gentle, ideal for children and older travellers. Many visitors do a short ATV ride and a sledge run on the same afternoon."] },
      { h: "Gulmarg ATV for families", p: ["Children usually ride as passengers with an adult or guide, and age and height rules vary by operator. Choose a short loop for a first ride, keep speeds low and make sure everyone wears a helmet and warm, waterproof gloves. Pregnant women, people with back or neck problems and anyone with heart conditions should skip ATV rides."] },
      { h: "Avoiding disputes with ATV operators", p: ["Agree the loop, the duration, the number of riders and the total price before you start, and ask whether helmets and gloves are included. Pay at the end. Avoid operators who refuse to show a rate card or who pressure you into longer loops. If you are unsure, ask your hotel or driver to recommend an operator."] },
    ],
    faqs: [
      { q: "Is it easy to ride an ATV in Gulmarg?", a: "Yes, for most adults. Start slowly on a short loop and follow the guide." },
      { q: "What should I wear for an ATV ride in winter?", a: "Waterproof jacket and trousers, gloves, snow boots, a helmet and sunglasses." },
      { q: "Can I ride an ATV in Gulmarg in summer?", a: "Yes. Summer loops follow dirt tracks around the meadow and forest edges." },
    ],
  },
  "paragliding-in-kashmir": {
    sections: [
      { h: "What a tandem flight feels like", p: ["After a briefing on the take-off run and landing position, the pilot clips you into a harness attached to the glider. On the pilot's signal, you run a few steps downhill; the wing fills, lifts and you are suddenly in the air, sitting comfortably in the harness. The first minutes are quiet and smooth, with wide views over the valley. In good conditions, the pilot may climb in rising air before gliding down. Landing is a gentle run or a slide onto a field. Most first-timers find it far calmer than they expected."] },
      { h: "Weather and the best time of day", p: ["Paragliding depends on wind, thermals and visibility. Mornings are usually calmer and safer for tandem flights; strong afternoon winds or thermals can stop flights in summer. Rain, low cloud and gusty wind cancel flights. The best months are from April to October, with the clearest views in spring and autumn. Pilots decide on the day, so keep the plan flexible and do not argue with a cancellation: it is for your safety."] },
      { h: "How to book paragliding in Kashmir", p: ["Ask your hotel or travel agent which registered operators are flying that season, at Astanmarg near Srinagar or at Sonamarg. Confirm the take-off site, the flight duration, what is included (transport to take-off, video, insurance) and the cancellation policy. Pay a deposit only to a known operator and the balance after the flight. Tell the operator your weight and any health conditions in advance."] },
      { h: "Astanmarg as a half-day trip", p: ["Astanmarg is a meadow on the ridge above the Harwan side of Srinagar, reached by a winding road. Combine a morning flight with a visit to Shalimar Bagh and Harwan on the way back. The ridge has views over Dal Lake and the city, so even non-flyers in the group enjoy the trip. Carry water and a warm layer, as it is breezy at the top."] },
      { h: "Paragliding for groups and couples", p: ["Groups and couples can book several tandem flights back to back with one operator, but each passenger flies with their own pilot. Non-flying members can watch from the take-off or landing site. Expect waiting time between flights if pilots are few. Book early in peak season, and agree the order of flyers in advance."] },
    ],
    faqs: [
      { q: "What is the best time of day for paragliding in Kashmir?", a: "Usually morning, when winds are calmer. Afternoon winds can stop flights." },
      { q: "Can non-flyers come to Astanmarg?", a: "Yes. The ridge has views over Dal Lake and Srinagar and is worth the trip." },
      { q: "Does paragliding in Kashmir include a video?", a: "Many operators offer a GoPro video, sometimes for an extra charge. Ask when booking." },
    ],
  },
  "pre-wedding-photoshoot-in-kashmir": {
    sections: [
      { h: "Spring shoot in detail", p: ["From late March to April, the Tulip Garden, Badamwari almond garden and the Mughal gardens are in bloom, and snow still covers the peaks around the valley. Shoot among the tulip rows early in the morning before crowds, under almond or cherry blossom in Badamwari, and on the terraces of Nishat or Shalimar with the fountains running. Pastel and bright outfits suit the flowers. A Gulmarg morning gives a snow backdrop on the same trip."] },
      { h: "Autumn shoot in detail", p: ["From late October to mid-November, the chinars of Srinagar turn red and gold, making it the most photogenic season for many photographers. Shoot under the chinars of Naseem Bagh, in the Mughal gardens, on the lawns of heritage hotels and along the Jhelum in the old city. Saffron fields at Pampore bloom purple at the same time. Warm tones such as maroon, gold, rust and deep green work beautifully."] },
      { h: "Winter shoot in detail", p: ["From December to February, Gulmarg and Pahalgam are white with snow and Srinagar's lake is misty at dawn. Shoot in Gulmarg's meadow, around St Mary's Church and the Gondola, and in Pahalgam's snowy pine forests along the Lidder. Bright reds, emerald greens and deep blues stand out against the snow. Plan short shoots with warm breaks, carry hand warmers and keep camera batteries warm."] },
      { h: "Summer shoot in detail", p: ["From May to August, Gulmarg's meadows are green, Pahalgam's valleys lush and Sonamarg's glacier valley full of snow patches and wildflowers. Shoot in Betaab Valley, on the riverbanks of the Lidder, on the Sonamarg meadows and on a Dal Lake shikara at sunset. Long daylight gives more shooting hours, but midday light is harsh, so plan early and late sessions."] },
      { h: "Working with local photographers", p: ["Srinagar has photographers who specialise in pre-wedding shoots and know the gardens, permissions and the best light. They can arrange costumes, props, shikaras and drone permissions where possible. Ask for full galleries of past Kashmir shoots, agree the number of edited photos and videos, delivery time and travel costs in writing, and confirm who handles garden permissions and fees."] },
    ],
    faqs: [
      { q: "Which season is most popular for pre-wedding shoots in Kashmir?", a: "Spring for tulips and autumn for golden chinars are the most popular; winter is chosen for snow." },
      { q: "Can a photographer arrange a decorated shikara?", a: "Yes. Most local photographers can arrange shikaras, costumes and props." },
    ],
  },
  "golf-in-kashmir-royal-springs-gulmarg-pahalgam": {
    sections: [
      { h: "Royal Springs course character", p: ["Royal Springs is laid out on the lower slopes of the Zabarwan range, with natural springs, streams and old trees woven into the design and views across Dal Lake to the city and Hari Parbat. The course rises and falls with the land, so many holes play uphill or downhill, and water comes into play from the springs. Its clubhouse overlooks the lake. It is a course that rewards accuracy, and golfers often say the setting is as memorable as the golf."] },
    ],
    faqs: [
      { q: "Who designed Royal Springs Golf Course?", a: "Robert Trent Jones Jr. designed the course on the Zabarwan slopes above Dal Lake." },
    ],
  },
  "vaishno-devi-helicopter-booking-guide": {
    sections: [
      { h: "Combining the helicopter with walking", p: ["A popular plan is to fly up to Sanjichhat in the morning, walk or take a pony to the Bhawan, do darshan, take the ropeway to Bhairon temple, and then walk all the way down to Katra via Adhkuwari, about 13 km mostly downhill. Others walk up overnight and fly down in the morning. Both halves of the yatra use the same paved path with shelters, water points and food stalls."] },
      { h: "Best months for the helicopter yatra", p: ["March to June and September to November usually bring the most reliable flying weather. July and August, the monsoon months, see frequent cloud and rain, with more suspensions. December to February can bring fog in the morning and snow at higher levels. Navratri in spring and autumn is extremely busy, so book the day booking opens."] },
      { h: "What to carry in the helicopter", p: ["Carry only a small bag within the weight limit, your ID, ticket, yatra RFID card, water, a light warm layer and any essential medicines. Leave large luggage at your Katra hotel. Leather items, phones and cameras must be deposited in lockers before the cave area at the Bhawan."] },
    ],
    faqs: [
      { q: "Can I walk down after flying up to Sanjichhat?", a: "Yes. Many pilgrims fly up and walk back to Katra via Adhkuwari, about 13 km mostly downhill." },
    ],
  },
  "camping-in-gurez-valley": {
    sections: [
      { h: "A 2-night Gurez camping trip", p: ["Day 1: leave Srinagar early, stop at Wular lake viewpoints and Tragbal, cross Razdan Pass and reach the Dawar camp by afternoon. Evening walk by the Kishanganga. Day 2: Dawar villages and Habba Khatoon spring in the morning, a drive towards Wanpora and Badwan in the afternoon, bonfire at camp. Day 3: early start back over Razdan Pass to Srinagar. Add a third night to include Tulail."] },
      { h: "Camping safety by the Kishanganga", p: ["The river is fast, cold and deep in places, especially in June with snowmelt. Do not swim, and keep children well away from the banks. Pitch tents only where the camp operator indicates, above the river level. Store food securely; dogs and wildlife can visit at night. Keep a torch by your bed and follow your host's advice on walks."] },
    ],
    faqs: [
      { q: "Is it safe to swim in the Kishanganga?", a: "No. The river is fast, cold and deep in places. Enjoy it from the bank." },
    ],
  },
  "shikara-ride-dal-lake-guide": {
    sections: [
      { h: "Shikara ride with a houseboat stay", p: ["Most houseboats include a shikara transfer between the ghat and the boat, and many offer a free or discounted ride on the lake. Ask the owner to arrange a dawn ride to the floating market and a sunset ride on another day. Houseboat boatmen know the quieter routes and are often more relaxed than ghat boatmen."] },
    ],
    faqs: [
      { q: "Is a shikara ride included with a houseboat stay?", a: "Often the transfer is included and many houseboats offer a ride. Confirm when you book." },
    ],
  },
};
for (const p of KASHMIR_ACTIVITIES) {
  const e = EXTRA_3[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_4: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "vaishno-devi-helicopter-booking-guide": {
    sections: [
      { h: "The full yatra route, for context", p: ["The traditional route from Katra begins at Banganga, where pilgrims cross the stream and climb past Charan Paduka, said to hold the footprints of the goddess. Further up, Adhkuwari has the narrow Garbh Joon cave and is roughly halfway. From Adhkuwari, the older route climbs steeply via Sanjichhat to the Bhawan, while the newer, gentler track runs around the hill and is used by battery cars. The helicopter lands at Sanjichhat, cutting out the climb from Katra to that point. The whole route is paved, lit at night and lined with shelters, water points, food stalls and medical posts."] },
      { h: "Katra helipad: location and arrival", p: ["The Katra helipad is on the edge of town, a short taxi or auto ride from the main bazaar and the railway station. Hotels can arrange a drop. Arrive well before the reporting time, as queues at document checks and weighing can take time on busy mornings. There are waiting areas, toilets and refreshments. Keep your phone charged and your tickets accessible, either printed or on your phone."] },
      { h: "Helicopter vs ropeway vs battery car: what each covers", p: ["The helicopter flies from Katra to Sanjichhat and saves most of the climb. The battery car runs on part of the newer track from Adhkuwari towards the Bhawan and is meant mainly for elderly and disabled pilgrims; seats are limited. The passenger ropeway connects the Bhawan with Bhairon temple, saving a steep 1.5 km climb. Many pilgrims use a combination: helicopter up, ropeway to Bhairon, then walk down."] },
      { h: "Avoiding fake Vaishno Devi helicopter websites", p: ["Search results and social media often show pages that look like official booking sites, sometimes with similar names and logos. They ask for advance payment and deliver nothing. Always type the Shrine Board's official website address yourself or use its official app, check that the domain is correct, and never pay through personal bank accounts, wallets or WhatsApp links. If in doubt, call the Shrine Board's official helpline listed on its website."] },
    ],
    faqs: [
      { q: "Where is the Katra helipad?", a: "On the edge of Katra town, a short taxi or auto ride from the bazaar and railway station." },
      { q: "How can I spot a fake helicopter booking site?", a: "Check the domain carefully, use only the Shrine Board's official website or app, and never pay into personal accounts or through WhatsApp links." },
    ],
  },
  "camping-in-gurez-valley": {
    sections: [
      { h: "Gurez camping for families and groups", p: ["Families with older children enjoy Gurez camps for the river, bonfires and open space, but nights are cold, so pack thermals and extra blankets. Groups should book several tents at the same camp and confirm meal times and washroom facilities. Larger groups often arrange a tempo traveller or several SUVs from Srinagar and plan a fixed departure time to cross Razdan Pass together. Share a list of all travellers' IDs with the camp in advance, as it helps at checkposts."] },
      { h: "Stargazing in Gurez", p: ["With almost no light pollution, Gurez has some of the darkest night skies in Kashmir. On clear nights from July to September, the Milky Way stretches above the valley. Step away from the camp lights, let your eyes adjust for 15 to 20 minutes and use a stargazing app to find constellations. Bring a warm jacket and something to sit on: it gets cold fast after sunset."] },
      { h: "Photography in Gurez", p: ["The best photographs come at dawn and dusk: mist on the Kishanganga, the wooden houses of Dawar in low sun and Habba Khatoon peak glowing in the evening light. Autumn colours in September and early October are especially beautiful. Do not photograph army installations, checkposts or bridges, and always ask before photographing people, especially women and children."] },
    ],
    faqs: [
      { q: "Is Gurez good for stargazing?", a: "Yes. With little light pollution, clear nights from July to September show the Milky Way." },
    ],
  },
  "shikara-ride-dal-lake-guide": {
    sections: [
      { h: "Photography from a shikara", p: ["Sit at the front for an unobstructed view. Early morning gives soft light, mist and calm water for reflections; sunset gives warm colours behind the Pir Panjal. Ask the boatman to slow down or stop for a shot. Keep cameras and phones on a strap, and avoid leaning out over the side."] },
    ],
    faqs: [

    ],
  },
  "paragliding-in-kashmir": {
    sections: [
      { h: "Paragliding in Kashmir vs Bir Billing and Manali", p: ["Bir Billing in Himachal is India's best-known paragliding site, with many operators, longer flights and an international competition history. Solang near Manali also has a busy paragliding scene. Kashmir's sites are fewer and smaller, with shorter flights and more weather dependence, but the views over Dal Lake from Astanmarg and the glacier valley at Sonamarg are unique. If you want a single tandem flight on a Kashmir holiday, Kashmir works well; if paragliding is your main goal, Bir Billing is the better base."] },
      { h: "Paragliding safety: red flags", p: ["Walk away if the operator cannot show registration, if the pilot will not discuss certification, if the harness or glider looks worn or patched, if there is no reserve parachute, if the operator pushes you to fly in strong wind, or if there is no clear landing area. A good operator is happy to answer questions and will cancel without hesitation in bad weather."] },
    ],
    faqs: [
      { q: "Is Kashmir better than Bir Billing for paragliding?", a: "Bir Billing has more operators and longer flights. Kashmir is good for a single scenic tandem flight on a holiday." },
    ],
  },
  "pre-wedding-photoshoot-in-kashmir": {
    sections: [
      { h: "Budgeting for a Kashmir pre-wedding shoot", p: ["The total cost depends on the photographer and team, the number of shoot days, travel and stays, garden fees and permissions, costumes and props, and edited photo and video deliverables. Local Srinagar photographers save travel costs for the team. Packages that combine stays, a car and the shoot schedule can simplify planning. Get a written quote listing every item, and keep a buffer for weather days."] },
      { h: "A 4-day shoot itinerary", p: ["Day 1: arrive in Srinagar, houseboat evening shoot and sunset shikara. Day 2: sunrise on Dal, Nishat and Shalimar Bagh in the morning, Pari Mahal at sunset. Day 3: Gulmarg meadow or snow, St Mary's Church and Gondola views. Day 4: Pahalgam or Sonamarg river and forest shoot, or the old city and Jhelum for a heritage look, then depart."] },
    ],
    faqs: [
      { q: "How much time should I keep for weather in a Kashmir shoot?", a: "Keep at least one buffer day, especially in spring and winter when weather changes quickly." },
    ],
  },
  "atv-ride-in-gulmarg": {
    sections: [
      { h: "Best time of day for ATV rides", p: ["In winter, mornings are best: the snow is firmer, the light is clear and queues are shorter. By afternoon, snow softens and gets churned up, and the light flattens. In summer, early morning and late afternoon are cooler and less dusty. On weekends and during the Christmas to New Year week, go early to avoid waiting."] },
      { h: "ATV rides and the rest of a Gulmarg day", p: ["Plan the Gondola first, because its time slot is fixed, then fit the ATV ride around lunch. A typical winter afternoon combines a 30 minute ATV loop, a sledge run and photos at St Mary's Church before leaving at about 3.30 pm. In summer, combine the ATV with a pony ride to Khilanmarg or a walk on the golf course edges."] },
    ],
    faqs: [
      { q: "When is the best time for an ATV ride in Gulmarg?", a: "Mornings in winter, when snow is firm, and early morning or late afternoon in summer." },
    ],
  },
};
for (const p of KASHMIR_ACTIVITIES) {
  const e = EXTRA_4[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}
