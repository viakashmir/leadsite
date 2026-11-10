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
