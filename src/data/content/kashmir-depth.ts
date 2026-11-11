// Depth pass (2026-11-11): extra blocks and FAQs that take the Kashmir and
// Ladakh guide, theme and departure-city pages past the depth of the
// competing tdiholidayventures.com pages. Merged additively (content-merge.ts)
// in data/content/index.ts and pushed to the live database the same way.
// Rules: no typed fares or prices, no em dashes.

import type { GuideContent } from "@/lib/locations";

export const KASHMIR_DEPTH_DESTINATIONS: Record<string, Partial<GuideContent>> = {};

export const KASHMIR_DEPTH_CITIES: Record<string, Partial<GuideContent>> = {
  "gulmarg": {
    "blocks": [
      {
        "heading": "Gulmarg at a glance",
        "body": "Gulmarg is a high meadow at about 2,650 m in Baramulla district, about 50 km west of Srinagar, ringed by pine and fir forest and overlooked by the Apharwat ridge of the Pir Panjal. It is Kashmir's best-known resort: India's leading ski destination in winter, a cool green meadow for walks, golf and pony rides in summer, and home to the Gulmarg Gondola, one of the highest cable cars in the world. The town itself is small, with hotels around the meadow, a church, a temple, the golf course and the Gondola base, and it is easily seen in a day trip from Srinagar or a one or two night stay."
      },
      {
        "heading": "History of Gulmarg",
        "body": "By tradition the meadow was once known as Gaurimarg and was renamed Gulmarg, the meadow of flowers, by the Kashmiri ruler Yusuf Shah Chak in the 16th century. The Mughal emperor Jahangir is said to have visited to collect wild flowers. In the late 19th and early 20th centuries, British officials and families made Gulmarg a summer retreat, building hotels, a club, golf links and St Mary's Church. After independence it developed into India's ski capital, with the Indian Institute of Skiing and Mountaineering and later the Gondola opening the high slopes of Apharwat to visitors."
      },
      {
        "heading": "The Gulmarg Gondola explained",
        "body": "The Gondola runs in two phases. Phase 1 climbs from the Gulmarg base station to Kongdoori at about 3,080 m, over pine forest and the meadow. Phase 2 continues from Kongdoori to the Apharwat ridge at about 3,950 m, where snow lies for much of the year and views stretch across the Pir Panjal and, on very clear days, to Nanga Parbat. Tickets are booked online on the official Jammu and Kashmir Cable Car Corporation portal for a date and time slot. Phase 2 closes in high wind, cloud or heavy snow; Phase 1 runs more often. Allow two to three hours including queues."
      },
      {
        "heading": "Things to do in Gulmarg",
        "body": "Ride the Gondola to Kongdoori and Apharwat. Ski or snowboard from December to March, with lessons from registered instructors. Sledge, ride ATVs or snow scooters on the winter meadow. Walk or ride a pony to Khilanmarg, about 6 km up, for wide mountain views. Visit St Mary's Church and the Maharani temple on the meadow. Play a round on the high-altitude golf course in summer. Walk the forest paths around the meadow and through Strawberry Valley. Trek to Alpather lake in summer with a guide. Visit Drung waterfall and the Baba Reshi shrine near Tangmarg."
      },
      {
        "heading": "Skiing in Gulmarg",
        "body": "Gulmarg's ski season runs from about December to March, with the best snow usually in January and February. Beginners learn on gentle slopes near the base, and ski schools and registered instructors offer lessons, with equipment available for hire. Intermediate and advanced skiers use the Gondola to reach Kongdoori and Apharwat, where long runs and vast off-piste terrain attract skiers from around the world. Off-piste skiing is serious avalanche terrain and should only be done with a qualified guide, proper avalanche equipment and an up-to-date snow report."
      },
      {
        "heading": "Gulmarg in summer",
        "body": "From May to September, Gulmarg's meadow turns green and fills with wildflowers, the Gondola carries visitors to snow patches on Apharwat, and pony rides, golf and walks are the main activities. Days are pleasant and nights cool. June brings school-holiday crowds; weekdays and September are quieter. Treks to Alpather lake and the high meadows open in midsummer once the snow clears."
      },
      {
        "heading": "Gulmarg in winter",
        "body": "From December to February, Gulmarg is deep in snow. The meadow becomes a snowfield for sledging and beginner skiing, the Gondola serves skiers and sightseers, and the forests and buildings are white. Days can be bright and sunny, and nights fall well below freezing. The road from Tangmarg may need chains or 4x4 vehicles after snowfall, and large vehicles can be stopped at Tangmarg. Book hotels and the Gondola early, especially around Christmas and New Year."
      },
      {
        "heading": "Where to stay in Gulmarg",
        "body": "Stay near the Gondola base for skiing and early cable car rides, on the main meadow for views and walks, or in Tangmarg, 13 km below, for lower rates. Options range from JKTDC huts and mid-range hotels to heritage properties such as the Highlands Park and Nedou's and the luxury Khyber Himalayan Resort and Spa near the Gondola. In winter, choose a hotel with central heating and power backup, and confirm that meals are included."
      },
      {
        "heading": "Food in Gulmarg",
        "body": "Most dining in Gulmarg is in hotel restaurants, which serve Kashmiri, North Indian and continental food. Cafes and stalls near the Gondola base sell tea, kahwa, Maggi, snacks and simple meals, and there is a cafeteria at Kongdoori. Tangmarg has dhabas and bakeries. In winter, many places close early, so plan dinner at your hotel."
      },
      {
        "heading": "Gulmarg travel tips",
        "body": "Book the Gondola online as soon as your date is fixed. Leave Srinagar by 8 am to beat traffic at Tangmarg. Carry layers even in summer and full winter clothing from December to March; boots and coats can be hired in Tangmarg. Agree pony and sledge routes and prices before starting. Leave Gulmarg by mid-afternoon in winter, before the road refreezes. Do not go off-piste without a qualified guide. Carry cash for local services."
      }
    ],
    "faqs": [
      {
        "q": "What is the altitude of Gulmarg?",
        "a": "About 2,650 m at the meadow. The Gondola's Phase 2 reaches about 3,950 m on Apharwat."
      },
      {
        "q": "How far is Gulmarg from Srinagar?",
        "a": "About 50 km, 1.5 to 2 hours by road via Tangmarg."
      },
      {
        "q": "When is the ski season in Gulmarg?",
        "a": "About December to March, with the best snow usually in January and February."
      },
      {
        "q": "Can I visit Gulmarg in summer?",
        "a": "Yes. From May to September the meadow is green, with the Gondola, pony rides, golf and walks."
      },
      {
        "q": "How do I book the Gulmarg Gondola?",
        "a": "Online on the official Jammu and Kashmir Cable Car Corporation portal, for a date and time slot."
      },
      {
        "q": "Is one day enough for Gulmarg?",
        "a": "Yes for the Gondola and a walk. Stay a night if you want to ski or see the meadow at sunrise."
      },
      {
        "q": "What is Khilanmarg?",
        "a": "A smaller meadow about 6 km above Gulmarg, reached by pony or on foot, with wide views of the Pir Panjal."
      },
      {
        "q": "Is Gulmarg good for families?",
        "a": "Yes. The Gondola, sledging, pony rides and flat meadow walks suit children and elderly travellers."
      }
    ]
  },
  "pahalgam": {
    "blocks": [
      {
        "heading": "Pahalgam at a glance",
        "body": "Pahalgam is a hill town at about 2,200 m in Anantnag district, about 95 km east of Srinagar, where the eastern and western streams of the Lidder river meet in a valley of pine forests and meadows. It is the base for visits to Aru Valley, Betaab Valley and Chandanwari, the starting point of the traditional Amarnath Yatra route, and a favourite with families and honeymooners for its riverside hotels and gentle walks. Most visitors stay one or two nights, because the drive from Srinagar takes about three hours."
      },
      {
        "heading": "History of Pahalgam",
        "body": "Pahalgam's name is usually explained as the village of shepherds, and for centuries it was a summer base for Gujjar and Bakarwal herders taking flocks to the high pastures of the Lidder valley. The Mamaleshwar temple on the edge of town is one of the oldest stone temples in the valley. Pahalgam has long been on the pilgrim route to the Amarnath cave, and in the 20th century it grew into a hill resort, later made famous by Hindi films shot in its valleys."
      },
      {
        "heading": "Aru, Betaab and Chandanwari",
        "body": "Aru Valley, about 12 km up the western Lidder, is a village and meadow at the start of treks to Lidderwat, Kolahoi glacier and Tarsar lake. Betaab Valley, about 15 km up the eastern Lidder towards Chandanwari, is a river-fed meadow framed by pines, named after the 1983 film Betaab. Chandanwari, about 16 km from Pahalgam, is known for a snow bridge that often lasts into summer and is the starting point of the Amarnath Yatra trek. All three are reached by Pahalgam union taxis, hired at the stand in town at rates displayed by the union."
      },
      {
        "heading": "Things to do in Pahalgam",
        "body": "Take a union taxi round of Aru, Betaab and Chandanwari. Walk along the Lidder river and through the pine forests. Raft on the Lidder from about May to September. Ride ponies to meadows and viewpoints. Play golf at the Pahalgam golf course. Visit the Mamaleshwar temple. Trek from Aru to Lidderwat for a day or overnight, or further to Kolahoi and Tarsar with a registered guide. Fish for trout with a permit. Note that Baisaran meadow has been closed to visitors since April 2025; check its status locally."
      },
      {
        "heading": "Pahalgam by season",
        "body": "Spring, March to May: snowmelt fills the river, valleys turn green and snow lingers at Chandanwari. Summer, June to August: the busiest season, with rafting, families and, in July and August, the Amarnath Yatra and its security arrangements. Autumn, September to November: clear skies, golden colours and fewer visitors. Winter, December to February: snowy pine forests and quiet; Betaab is usually reachable, Chandanwari often closed after heavy snow, and heating essential."
      },
      {
        "heading": "Amarnath Yatra and Pahalgam",
        "body": "Every July and August, the Amarnath Yatra brings pilgrims to Pahalgam, who walk from Nunwan and Chandanwari via Pissu Top, Sheshnag and Panchtarni to the cave shrine, about 32 km from Chandanwari. Registration, a health certificate and fixed dates are required. For other visitors, the yatra means tighter security, timed convoys on the Srinagar road, possible restrictions at Chandanwari and busier hotels."
      },
      {
        "heading": "Where to stay in Pahalgam",
        "body": "Riverside hotels on the Lidder are the classic choice, with river-view rooms and lawns. Hotels near the main market are convenient for restaurants and the union taxi stand. The Aru and Chandanwari roads have quieter hotels in pine forest. Options include JKTDC huts, mid-range hotels, upscale riverside properties such as Welcomhotel Pine N Peak, and homestays in villages down the valley. Book early for May, June and the yatra months."
      },
      {
        "heading": "Food and shopping in Pahalgam",
        "body": "The main market has vegetarian and non-vegetarian restaurants, dhabas and bakeries, and hotels serve Kashmiri dishes such as rogan josh, rista and dum aloo. Some restaurants serve fresh trout. Shops sell woollens, pherans, walnut wood items, dry fruit and souvenirs; for expensive items such as pashmina, established shops in Srinagar are a safer choice."
      },
      {
        "heading": "Pahalgam travel tips",
        "body": "Stay at least one night. Start the union taxi round early to avoid queues. Carry IDs for checkpoints, especially in July and August. Pack a warm layer even in summer. Keep children away from the fast river. Agree pony routes and prices in advance. Check Amarnath Yatra dates and Baisaran's status before planning."
      }
    ],
    "faqs": [
      {
        "q": "What is the altitude of Pahalgam?",
        "a": "About 2,200 m in the Lidder valley."
      },
      {
        "q": "How far is Pahalgam from Srinagar?",
        "a": "About 95 km, roughly 2.5 to 3 hours by road."
      },
      {
        "q": "Can my own taxi go to Aru and Betaab?",
        "a": "No. Aru, Betaab and Chandanwari are reached by Pahalgam union taxis."
      },
      {
        "q": "Is Baisaran open?",
        "a": "Baisaran has been closed to visitors since April 2025. Check locally for its current status."
      },
      {
        "q": "When is rafting available in Pahalgam?",
        "a": "From about May to September on the Lidder, depending on water levels."
      },
      {
        "q": "How many days are enough for Pahalgam?",
        "a": "Two nights for most visitors, enough for Aru, Betaab and Chandanwari without rushing."
      },
      {
        "q": "Is Pahalgam open in winter?",
        "a": "Yes. The town is reachable and snowy; Betaab is usually open and Chandanwari often closed after heavy snow."
      },
      {
        "q": "Why is Betaab Valley called Betaab?",
        "a": "It is named after the 1983 Hindi film Betaab, shot in the valley."
      }
    ]
  },
  "sonamarg": {
    "blocks": [
      {
        "heading": "Sonamarg at a glance",
        "body": "Sonamarg, the meadow of gold, lies at about 2,800 m in the upper Sindh valley of Ganderbal district, about 80 km north-east of Srinagar on the road to Ladakh. It is a glacier valley town known for the Thajiwas glacier, snowfields into early summer, river rafting on the Sindh, the drive to Zojila and Zero Point, and as the starting point of the Kashmir Great Lakes trek and the Baltal route of the Amarnath Yatra. Most visitors come as a day trip from Srinagar; overnight stays suit trekkers and Ladakh-bound travellers."
      },
      {
        "heading": "History and geography",
        "body": "Sonamarg has long been the last stop before Zojila on the old trade route linking Kashmir with Ladakh and Central Asia. The town spreads along the Sindh river at the foot of glaciated peaks, with the Thajiwas valley to the south and the road climbing east to Baltal and Zojila. The Z-Morh tunnel, about 6.5 km long and opened in January 2025, bypasses the avalanche-prone stretch below the town, keeping Sonamarg accessible on most winter days."
      },
      {
        "heading": "Thajiwas glacier and other sights",
        "body": "Thajiwas glacier lies about 3 km from the main parking, reached on foot or by pony through a valley of meadows and streams; snow at its head lasts well into summer. Zero Point, on the Zojila side beyond Baltal, is a snowfield reached by Sonamarg union taxi when the road is open, roughly May to November. Baltal is the base camp for the Amarnath Yatra's shorter route. Gadsar and Vishansar lakes lie on the Great Lakes trek. Along the Sindh, rafting runs near Kullan and Gund in summer."
      },
      {
        "heading": "Things to do in Sonamarg",
        "body": "Walk or ride to Thajiwas glacier. Sledge on the snow near the glacier. Take a union taxi to Zero Point in season. Raft on the Sindh between May and September. Start the Kashmir Great Lakes trek or shorter day hikes. Photograph the meadows and glaciers. Stop at Manasbal lake, Kheer Bhawani or the Naranag temples on the way."
      },
      {
        "heading": "Sonamarg by season",
        "body": "December to March: snow, quiet, accessible through the tunnel on most days; most hotels shut. April and May: deep snow walls, hotels reopening, Zojila opening for the season. June to August: green meadows, rafting, trekkers and the Amarnath Yatra. September and October: clear skies and autumn colours, the quietest open season. November: cold, hotels closing, Zojila closing."
      },
      {
        "heading": "Where to stay in Sonamarg",
        "body": "Mid-range hotels line the main road, many with river views; JKTDC huts offer simple, well-located rooms; summer camps near Thajiwas and along the Sindh suit trekkers and groups. Most hotels open from about April or May to October or November. Book early for June to August."
      },
      {
        "heading": "Sonamarg travel tips",
        "body": "Leave Srinagar early to reach Thajiwas before the crowds. Carry warm layers in every season. Agree pony and union taxi prices before starting. Check whether Zojila is open before planning Zero Point. Expect army convoys and Ladakh-bound trucks on the road. In July and August, check Amarnath Yatra traffic arrangements."
      }
    ],
    "faqs": [
      {
        "q": "What is the altitude of Sonamarg?",
        "a": "About 2,800 m in the upper Sindh valley."
      },
      {
        "q": "How far is Thajiwas glacier from Sonamarg?",
        "a": "About 3 km from the main parking, on foot or by pony."
      },
      {
        "q": "Is Sonamarg open in winter?",
        "a": "Since the Z-Morh tunnel opened in January 2025, it is reachable on most winter days, though most hotels close."
      },
      {
        "q": "When is Zero Point open?",
        "a": "Roughly May to November, when the road over Zojila is open."
      },
      {
        "q": "What does Sonamarg mean?",
        "a": "Meadow of gold."
      },
      {
        "q": "Can I raft in Sonamarg?",
        "a": "Yes, on the Sindh near Kullan and Gund from about May to September."
      }
    ]
  },
  "srinagar": {
    "blocks": [
      {
        "heading": "Srinagar at a glance",
        "body": "Srinagar, the summer capital of Jammu and Kashmir, spreads around Dal and Nigeen lakes and along the Jhelum river at about 1,600 m. It is the gateway to the Kashmir valley, with the airport and the railway station, and the base for day trips to Gulmarg, Sonamarg, Doodhpathri and Yusmarg. Its highlights are houseboats and shikara rides on Dal Lake, the terraced Mughal gardens, the Tulip Garden in spring, the old city's wooden mosques and shrines, and a food and craft culture found nowhere else in India."
      },
      {
        "heading": "A brief history of Srinagar",
        "body": "Srinagar's history goes back over two thousand years. The old city grew along the Jhelum under Hindu, Buddhist and then Muslim rulers, with Sultan Zain-ul-Abidin in the 15th century remembered as a patron of crafts. The Mughals, who loved Kashmir, built the gardens of Nishat, Shalimar, Chashme Shahi and Pari Mahal in the 17th century. Afghan, Sikh and Dogra rule followed, and under the Dogras houseboats became a feature of the lakes. Today Srinagar is a busy city where old wooden neighbourhoods and lake life sit alongside modern markets."
      },
      {
        "heading": "Dal Lake and houseboats",
        "body": "Dal Lake, Srinagar's centrepiece, is lined on its eastern and southern shores by Boulevard Road and dotted with houseboats, floating gardens and lake villages. Shikaras leave from numbered ghats for rides to Char Chinar, the floating market and the lotus beds. Houseboats, graded by the tourism department from Deluxe downwards, offer stays with carved walnut interiors and home-cooked meals. Nigeen Lake to the north is quieter, with houseboats often reached on foot."
      },
      {
        "heading": "The Mughal gardens",
        "body": "Nishat Bagh, built in the 1630s, descends in twelve terraces to Dal Lake with the Zabarwan hills behind. Shalimar Bagh, laid out by Emperor Jahangir for Nur Jahan, has water channels, fountains and a black marble pavilion. Chashme Shahi, the smallest, surrounds a natural spring. Pari Mahal, on a hillside above the lake, has terraced ruins with sweeping views. The gardens are at their best in spring and autumn; entry tickets are sold at the gates."
      },
      {
        "heading": "The Tulip Garden and spring in Srinagar",
        "body": "The Indira Gandhi Memorial Tulip Garden on the Zabarwan slopes is Asia's largest tulip garden, with well over a million tulips in dozens of varieties. It usually opens in late March and peaks in the first half of April. Spring also brings almond blossom at Badamwari in March and flowering orchards across the valley in April."
      },
      {
        "heading": "The old city",
        "body": "Old Srinagar along the Jhelum is home to the Jamia Masjid with its deodar pillars, the wooden Khanqah-e-Moula, the stone Pathar Masjid built by Nur Jahan, the tomb of Budshah's mother, Hari Parbat fort with the Makhdoom Sahib shrine, Sharika Devi temple and Gurdwara Chatti Patshahi, and lanes of copper, spice and craft workshops. A morning heritage walk with a local guide is the best way to see it."
      },
      {
        "heading": "Things to do in Srinagar",
        "body": "Take a sunset shikara and a dawn ride to the floating market. Stay a night on a houseboat. Visit the Mughal gardens and the Tulip Garden. Climb to Shankaracharya temple for views. Visit Hazratbal shrine. Walk the old city. Shop for pashmina, carpets, papier mache and saffron. Eat wazwan, harissa in winter and bakery breads. Take day trips to Gulmarg, Sonamarg, Doodhpathri and Yusmarg."
      },
      {
        "heading": "Srinagar by season",
        "body": "Spring, March to May: blossom, tulips and pleasant days. Summer, June to August: warm days and lively lake evenings, with July the warmest month. Autumn, September to November: clear skies, golden chinars and the saffron bloom at Pampore. Winter, December to February: cold, with snow on some days, misty lakes, harissa breakfasts and heated hotels."
      },
      {
        "heading": "Where to stay in Srinagar",
        "body": "Boulevard Road on Dal Lake for views and convenience, Rajbagh for calm and a central location, Lal Chowk and Residency Road for shopping and food, Nishat and the gardens side for quiet, Gupkar and the Zabarwan foothills for luxury, and houseboats on Dal or Nigeen for one or two memorable nights."
      },
      {
        "heading": "Srinagar travel tips",
        "body": "Book flights and hotels early for the tulip weeks and summer. Use a postpaid SIM. Dress modestly in the old city and at shrines. Agree shikara routes and prices before setting off. Leave at least 3 hours for the airport because of the security gate. Carry cash for small payments."
      }
    ],
    "faqs": [
      {
        "q": "What is Srinagar famous for?",
        "a": "Dal Lake houseboats and shikaras, the Mughal gardens, the Tulip Garden, the old city and Kashmiri food and crafts."
      },
      {
        "q": "What is the best time to visit Srinagar?",
        "a": "April to June for tulips and pleasant weather, and September to October for autumn colours."
      },
      {
        "q": "How many days are enough for Srinagar?",
        "a": "Two to three days, plus day trips to Gulmarg and Sonamarg."
      },
      {
        "q": "Which is the best Mughal garden in Srinagar?",
        "a": "Nishat Bagh for its terraces and lake views, and Shalimar Bagh for its fountains and pavilion."
      },
      {
        "q": "Is Srinagar good in winter?",
        "a": "Yes, for snowy scenery, misty lakes and harissa breakfasts. Choose heated hotels."
      },
      {
        "q": "Where is the floating market in Srinagar?",
        "a": "On Dal Lake near the old lake villages, in the early morning, reached by shikara."
      }
    ]
  },
  "gurez": {
    "blocks": [
      {
        "heading": "Gurez at a glance",
        "body": "Gurez is a remote Himalayan valley on the Kishanganga river in Bandipora district, about 125 to 140 km north of Srinagar over the Razdan Pass at about 3,300 m. Its main village, Dawar, sits at around 2,400 m beneath the pyramid-shaped Habba Khatoon peak. The valley is home to the Dard-Shina people, with log houses, fields of potatoes and peas and a culture distinct from the Kashmir valley. It lies close to the Line of Control, is open to visitors roughly from June to October and is cut off by snow in winter."
      },
      {
        "heading": "History and people of Gurez",
        "body": "Gurez lay on an old route between Kashmir and Gilgit and Central Asia. Its people, the Dard-Shina, speak Shina and have their own songs, dress and traditions. Habba Khatoon, the 16th century poet-queen of Kashmir, is remembered in the name of the peak above Dawar and a spring at its foot. The valley was opened to tourists only in recent years, and it remains quiet, with simple stays and a strong sense of community."
      },
      {
        "heading": "Things to do in Gurez",
        "body": "Walk through Dawar's log-house villages and along the Kishanganga. Visit the Habba Khatoon spring and watch the peak glow at sunset. Drive up the valley to Tulail for wide meadows and remote villages. Stay in a riverside camp or a family homestay. Fish for trout with a permit. Stargaze under some of the darkest skies in Kashmir. Stop at Wular lake viewpoints and Tragbal on the way."
      },
      {
        "heading": "Getting to Gurez",
        "body": "From Srinagar, drive via Bandipora, Tragbal and Razdan Pass to Dawar, about 5 to 6 hours. An SUV with an experienced local driver is best. Carry original photo IDs for every traveller for checkposts; foreign nationals are generally not permitted. Fill up with fuel and cash in Bandipora. Travel in daylight, and check that the pass is open before setting out."
      },
      {
        "heading": "Where to stay in Gurez",
        "body": "Dawar has JKTDC huts, guest houses and homestays, and riverside camps in summer. Tulail has a few homestays and camps. Facilities are simple, with limited electricity and mobile signal. Book ahead for July and August, and carry warm clothes for cold nights even in summer."
      },
      {
        "heading": "Gurez by month",
        "body": "June: the pass opens, nights very cold, valley turning green. July and August: warmest, busiest and best for camping. September: clear skies and harvest colours. October: cold, camps closing. November to May: the pass is usually closed under snow."
      }
    ],
    "faqs": [
      {
        "q": "Is Gurez open in winter?",
        "a": "No. Razdan Pass is usually closed under snow from about November to May."
      },
      {
        "q": "Can foreigners visit Gurez?",
        "a": "Foreign nationals are generally not permitted. Indian visitors need original photo ID."
      },
      {
        "q": "How many days are needed for Gurez?",
        "a": "At least two nights, because the drive from Srinagar takes 5 to 6 hours each way."
      },
      {
        "q": "What language is spoken in Gurez?",
        "a": "Shina, along with Kashmiri, Urdu and Hindi."
      }
    ]
  },
  "katra": {
    "blocks": [
      {
        "heading": "Katra at a glance",
        "body": "Katra is a town in Reasi district at the foot of the Trikuta hills, about 50 km from Jammu, and the base for the Mata Vaishno Devi yatra, one of India's most visited pilgrimages. From Banganga at the edge of town, a paved path of about 12 to 13 km climbs to the Bhawan, the holy cave. Katra is a busy, vegetarian, alcohol-free town of hotels, shops and registration counters, and since 2025 it is also the starting point of the Vande Bharat trains to Srinagar."
      },
      {
        "heading": "The Vaishno Devi yatra explained",
        "body": "Pilgrims register and collect an RFID yatra card in Katra or online, then walk from Banganga past Charan Paduka and Adhkuwari to the Bhawan, where darshan is taken of the three pindies in the cave. A newer, gentler track from Adhkuwari is used by battery cars. Helicopters fly from Katra to Sanjichhat, about 2.5 km from the Bhawan. After darshan, a ropeway connects the Bhawan to Bhairon temple. Ponies, palkis and porters are available at Shrine Board rates."
      },
      {
        "heading": "Things to do in and around Katra",
        "body": "Do the yatra to the Bhawan and Bhairon temple. Visit Banganga and its ghats. Make a day trip to the Shiv Khori cave shrine in Reasi district. Visit Nau Devi temple near Katra. Drive to Patnitop for pine forests and cool air. Take the Vande Bharat to Srinagar for a Kashmir holiday after the yatra."
      },
      {
        "heading": "Where to stay in Katra",
        "body": "Hotels around the main bazaar and bus stand are close to registration counters and Banganga; those on the Banganga road are nearest the trek start; newer hotels near the railway station suit early trains. The Shrine Board runs accommodation in Katra, at Adhkuwari and near the Bhawan, booked on its official website. Book early for Navratri and the summer holidays."
      },
      {
        "heading": "Katra by season",
        "body": "March to June: pleasant, busy, with summer holiday crowds from May. July to September: monsoon, with rain, slippery paths and more helicopter suspensions. October and November: pleasant, with very large crowds during Navratri. December to February: cold, with snow possible at the Bhawan and fog delaying some helicopter flights."
      }
    ],
    "faqs": [
      {
        "q": "How far is the Vaishno Devi Bhawan from Katra?",
        "a": "About 12 to 13 km on foot from Banganga."
      },
      {
        "q": "Is Katra a vegetarian town?",
        "a": "Yes. Hotels and restaurants serve vegetarian food, and alcohol is not sold."
      },
      {
        "q": "How do I get from Katra to Srinagar?",
        "a": "By Vande Bharat train, about 3 hours, or by road, about 6 to 8 hours."
      },
      {
        "q": "Where do I book Vaishno Devi helicopter tickets?",
        "a": "Only on the official Shri Mata Vaishno Devi Shrine Board website or app."
      }
    ]
  },
  "leh": {
    "blocks": [
      {
        "heading": "Leh at a glance",
        "body": "Leh, the main town of Ladakh, sits at about 3,500 m in the upper Indus valley, beneath the ruined Leh Palace and the Namgyal Tsemo monastery. It is the base for Nubra valley, Pangong, Tso Moriri, Hanle and the monasteries of the Indus, with an airport, a lively bazaar, guest houses and hotels in every range. Most visitors spend their first day resting in Leh to acclimatise before going higher."
      },
      {
        "heading": "History of Leh",
        "body": "Leh was the capital of the Ladakh kingdom from the 17th century, when King Sengge Namgyal built the nine-storey Leh Palace above the old town. It was an important stop on the caravan routes between Kashmir, Tibet, Central Asia and the plains, trading wool, salt, spices and pashmina. Its Tibetan Buddhist culture lives on in its monasteries, prayer flags and festivals."
      },
      {
        "heading": "Things to do in Leh",
        "body": "Climb to Leh Palace and Namgyal Tsemo. Watch the sunset from Shanti Stupa. Wander the old town and the main bazaar. Visit Thiksey, Hemis, Shey and Stok on the Indus. See the Hall of Fame war museum and Spituk monastery. Drive to Magnetic Hill and the Indus-Zanskar confluence at Nimmu. Raft on the Zanskar or Indus in summer. Use Leh as the base for Nubra, Pangong and Tso Moriri."
      },
      {
        "heading": "Acclimatising in Leh",
        "body": "Leh's altitude means many visitors feel headaches, breathlessness or poor sleep in the first days. Rest completely on the first day, drink plenty of water, avoid alcohol and heavy meals, and climb slowly. Do not go over Khardung La or Chang La until you have spent at least 36 to 48 hours in Leh. If symptoms are severe or worsen, rest, seek medical help and descend if advised."
      },
      {
        "heading": "Getting to Leh",
        "body": "Leh airport has year-round flights, mainly from Delhi, with some from Srinagar, Jammu, Mumbai and other cities. By road, the Srinagar to Leh highway via Zojila and Kargil is open roughly from April or May to November, and the Manali to Leh road roughly from June to September. Within Ladakh, Leh-registered taxis do local sightseeing under union rules."
      },
      {
        "heading": "Leh by season",
        "body": "May and June: roads opening, cool days and cold nights. July and August: the warmest and busiest months. September: clear skies and fewer visitors. October and November: cold and quiet, roads starting to close. December to March: very cold, reachable only by air, with winter festivals, frozen lakes and snow leopard trips."
      }
    ],
    "faqs": [
      {
        "q": "What is the altitude of Leh?",
        "a": "About 3,500 m in the upper Indus valley."
      },
      {
        "q": "How long should I rest in Leh before going to Pangong?",
        "a": "At least 36 to 48 hours."
      },
      {
        "q": "Who built Leh Palace?",
        "a": "King Sengge Namgyal, in the 17th century."
      },
      {
        "q": "Can I visit Leh in winter?",
        "a": "Yes, by air. It is very cold, with winter festivals and snow leopard trips."
      }
    ]
  },
  "tso-moriri": {
    "blocks": [
      {
        "heading": "Tso Moriri at a glance",
        "body": "Tso Moriri is a high-altitude lake at about 4,500 m in the Changthang plateau of south-eastern Ladakh, about 220 km from Leh via Chumathang. It is quieter and wilder than Pangong, ringed by snow peaks and home to the village of Korzok and its monastery. The lake and its wetlands are a protected area and an important breeding ground for birds such as the bar-headed goose and black-necked crane in summer. Visitors need an inner line permit."
      },
      {
        "heading": "Korzok and the Changpa nomads",
        "body": "Korzok, on the western shore, is one of the highest permanently inhabited villages in Ladakh, with a small monastery and homes of the Changpa, nomadic herders who raise the goats that produce pashmina wool. In summer, their tents and herds can be seen on the plateau. Visitors should respect their privacy and ask before photographing."
      },
      {
        "heading": "Getting to Tso Moriri",
        "body": "From Leh, the road follows the Indus past Upshi and Chumathang, with its hot springs, then climbs to the Changthang plateau and the lake, taking 6 to 7 hours. Some travellers continue to Tso Kar, a salt lake, or to Hanle. Inner line permits are required for Indian visitors, and foreign nationals need a Protected Area Permit. Fuel and supplies are limited beyond Leh."
      },
      {
        "heading": "Where to stay at Tso Moriri",
        "body": "Korzok has guest houses, homestays and seasonal camps near the lake. Facilities are basic, with limited electricity and hot water, and nights are freezing even in summer. Book ahead in July and August, carry warm sleeping layers and a torch."
      },
      {
        "heading": "Tso Moriri vs Pangong in detail",
        "body": "Pangong is closer to Leh, about 160 km via Chang La, busier and famous for its changing colours and films. Tso Moriri is further, higher, quieter and wilder, with more birdlife and fewer camps. Choose Pangong for a classic first trip, Tso Moriri for solitude, and both if you have time."
      }
    ],
    "faqs": [
      {
        "q": "What is the altitude of Tso Moriri?",
        "a": "About 4,500 m, higher than Pangong."
      },
      {
        "q": "How far is Tso Moriri from Leh?",
        "a": "About 220 km via Chumathang, 6 to 7 hours."
      },
      {
        "q": "Do I need a permit for Tso Moriri?",
        "a": "Yes. Indian visitors need an inner line permit; foreign nationals need a Protected Area Permit."
      },
      {
        "q": "Where can I stay at Tso Moriri?",
        "a": "In guest houses, homestays and seasonal camps at Korzok."
      }
    ]
  }
};

export const KASHMIR_DEPTH_PLACES: Record<string, Partial<GuideContent>> = {
  "pahalgam/places-to-visit/aru-valley": {
    "blocks": [
      {
        "heading": "Aru Valley at a glance",
        "body": "Aru is a village and meadow at about 2,400 m on the western Lidder river, about 12 km from Pahalgam, surrounded by pine forest, snow peaks and grazing pastures. It is the starting point of treks to Lidderwat, Kolahoi glacier and Tarsar lake, and a peaceful day out from Pahalgam for walks, pony rides and picnics. In summer, Gujjar and Bakarwal herders bring their flocks to the meadows around the village."
      },
      {
        "heading": "Getting to Aru Valley",
        "body": "Aru is reached from Pahalgam by union taxi, hired at the stand in town, along a road that climbs gently beside the western Lidder through pine forest, about 30 to 40 minutes each way. Your Srinagar taxi cannot do this trip under union rules. In winter, access depends on snow clearance; check in Pahalgam before you go."
      },
      {
        "heading": "Things to do in Aru Valley",
        "body": "Walk across the meadow and along the river. Ride a pony to viewpoints and nearby pastures. Visit the village and its wooden houses. Picnic by the stream. Hike towards Lidderwat, about 10 to 11 km, as a long day walk or overnight. Start multi-day treks to Kolahoi glacier or Tarsar Marsar with a registered guide. Photograph the meadow in autumn, when the grass turns gold."
      },
      {
        "heading": "Aru Valley by season",
        "body": "Spring: snow on the surrounding slopes, fresh green meadow, cold mornings. Summer: wildflowers, herders' camps and trekking season, the busiest time. Autumn: golden meadows, clear skies and fewer visitors, the best light for photographs. Winter: snowbound and quiet, reachable only when the road is cleared."
      },
      {
        "heading": "Where to stay in Aru",
        "body": "Aru has a few simple guest houses and camps used mainly by trekkers. Most visitors stay in Pahalgam and visit Aru as a half or full day trip. If you are starting a trek, spending a night in Aru helps you set off early."
      },
      {
        "heading": "Aru Valley tips",
        "body": "Agree pony routes and prices before starting. Carry water, snacks and a warm layer. Keep children away from the river. Respect herders and their animals, and ask before photographing people. Combine Aru with Betaab Valley on the same day using a union taxi round."
      }
    ],
    "faqs": [
      {
        "q": "How far is Aru Valley from Pahalgam?",
        "a": "About 12 km, 30 to 40 minutes by union taxi."
      },
      {
        "q": "Can I trek from Aru Valley?",
        "a": "Yes, to Lidderwat, Kolahoi glacier and Tarsar lake with a registered guide."
      },
      {
        "q": "Is Aru Valley open in winter?",
        "a": "Only when the road is cleared of snow. Check in Pahalgam first."
      },
      {
        "q": "Can I visit Aru and Betaab Valley on the same day?",
        "a": "Yes, with a union taxi round from Pahalgam."
      },
      {
        "q": "Are there hotels in Aru Valley?",
        "a": "A few simple guest houses and camps. Most visitors stay in Pahalgam."
      }
    ]
  },
  "pahalgam/places-to-visit/betaab-valley": {
    "blocks": [
      {
        "heading": "Betaab Valley at a glance",
        "body": "Betaab Valley is a green, river-fed meadow on the eastern Lidder, about 15 km from Pahalgam on the road to Chandanwari, framed by pine forest and snow peaks. It takes its name from the 1983 Hindi film Betaab, which was shot here, and is one of the most visited spots around Pahalgam, with paths, bridges and lawns along the stream."
      },
      {
        "heading": "Getting to Betaab Valley",
        "body": "Betaab is reached from Pahalgam by union taxi, often combined with Chandanwari on the same trip. The drive takes about 30 minutes along the eastern Lidder. An entry ticket is charged at the gate. In winter, Betaab is usually reachable, though snow can close the road for short periods."
      },
      {
        "heading": "Things to do in Betaab Valley",
        "body": "Walk along the stream and across the wooden bridges. Picnic on the lawns. Photograph the meadow against the pines and peaks. Combine the visit with Chandanwari's snow bridge in summer. In winter, enjoy the snowy meadow and frozen streams."
      },
      {
        "heading": "Betaab Valley by season",
        "body": "Spring: fresh green grass and fast streams. Summer: the busiest time, with families and film-goers. Autumn: golden light and fewer visitors. Winter: snow-covered meadow, quiet and beautiful."
      },
      {
        "heading": "Betaab Valley tips",
        "body": "Go early in the day to avoid crowds. Carry a warm layer. Keep children away from the stream's edges. Do not leave litter. Allow about an hour and a half to two hours at the valley."
      }
    ],
    "faqs": [
      {
        "q": "How far is Betaab Valley from Pahalgam?",
        "a": "About 15 km on the Chandanwari road, around 30 minutes by union taxi."
      },
      {
        "q": "Why is it called Betaab Valley?",
        "a": "After the 1983 Hindi film Betaab, which was shot there."
      },
      {
        "q": "Is there an entry fee for Betaab Valley?",
        "a": "Yes, an entry ticket is charged at the gate."
      },
      {
        "q": "Is Betaab Valley open in winter?",
        "a": "It is usually reachable, though snow can close the road for short periods."
      }
    ]
  },
  "srinagar/places-to-visit/dal-lake": {
    "blocks": [
      {
        "heading": "Dal Lake at a glance",
        "body": "Dal Lake is Srinagar's famous lake, about 18 square kilometres in area including its floating gardens, ringed by the Zabarwan hills, the Mughal gardens and Boulevard Road. It is divided into sections such as Bod Dal, Lokut Dal and Gagribal, with islands such as Char Chinar and Sona Lank, houseboats moored along its shores, and lake villages where thousands of people live and farm on floating gardens."
      },
      {
        "heading": "Shikara rides on Dal Lake",
        "body": "Shikaras leave from numbered ghats along Boulevard Road at rates fixed by the tourism department per hour. A one-hour ride covers the houseboats and Nehru Park; two hours reach Char Chinar and the floating shops; longer rides go to the lake villages and lotus beds. A dawn ride takes you to the floating vegetable market. Sunset is the most popular time."
      },
      {
        "heading": "Houseboats on Dal Lake",
        "body": "Houseboats line the lake opposite Boulevard Road and in quieter clusters further in. They are graded by the tourism department, with Deluxe boats offering carved walnut interiors, attached bathrooms and home-cooked meals. A shikara takes you between the ghat and the boat. One or two nights is ideal."
      },
      {
        "heading": "Life on the lake",
        "body": "Dal is home to lake communities who grow vegetables on floating gardens, fish, run shops on boats and paddle children to school. The floating market at dawn, the lotus beds in summer and the wooden mosques and homes of the lake villages show a way of life found nowhere else in India."
      },
      {
        "heading": "Dal Lake by season",
        "body": "Spring: blossom on the shores and pleasant days. Summer: lotus flowers from July, warm days and busy evenings. Autumn: golden chinars and clear skies. Winter: mist, cold and quiet, sometimes with ice at the edges in a long cold spell."
      }
    ],
    "faqs": [
      {
        "q": "How big is Dal Lake?",
        "a": "About 18 square kilometres including its floating gardens."
      },
      {
        "q": "What is Char Chinar?",
        "a": "A small island in Dal Lake with chinar trees, a popular shikara stop."
      },
      {
        "q": "When do lotuses bloom on Dal Lake?",
        "a": "Usually from July into August."
      },
      {
        "q": "Does Dal Lake freeze in winter?",
        "a": "The edges can freeze during a long cold spell in January."
      }
    ]
  }
};
