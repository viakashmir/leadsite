// Depth pass (2026-11-11): extra blocks and FAQs that take the Kashmir and
// Ladakh guide, theme and departure-city pages past the depth of the
// competing tdiholidayventures.com pages. Merged additively (content-merge.ts)
// in data/content/index.ts and pushed to the live database the same way.
// Rules: no typed fares or prices, no em dashes.

import type { GuideContent } from "@/lib/locations";

export const KASHMIR_DEPTH_DESTINATIONS: Record<string, Partial<GuideContent>> = {
  "kashmir": {
    "packages": {
      "themes": {
        "winter-tour-packages": {
          "blocks": [
            {
              "heading": "What a Kashmir winter package covers",
              "body": "A Kashmir winter package usually runs from December to early March and is built around snow. A typical plan spends two or three nights in Srinagar, often with one night on a heated Deluxe houseboat, a full Gulmarg day or overnight for the Gondola, sledging and skiing, a snow day in Sonamarg through the Z-Morh tunnel when the road is open, and one or two nights in Pahalgam among snowy pine forests. Packages include hotels with heating, a car with driver that carries snow chains or a 4x4 for the hill days, airport or station transfers and most meals. The Gondola, ski hire and lessons, sledges, ATVs and union taxis are usually paid locally."
            },
            {
              "heading": "Where you will find snow in Kashmir in winter",
              "body": "Gulmarg is the most reliable snow destination from late December to March, with the meadow, the golf course and Apharwat under deep snow and ski season in full swing. Pahalgam's pine forests and Betaab Valley turn white after the first big spells, usually from late December. Sonamarg is reachable on most winter days through the Z-Morh tunnel, with snowfields near Thajiwas. Doodhpathri and Yusmarg are snowbound and quiet, with access depending on clearance. Srinagar itself gets snow on some days, with frosty mornings and misty lakes."
            },
            {
              "heading": "Kashmir in December, January and February",
              "body": "December brings the first heavy snow in the hills, Christmas and New Year crowds in Gulmarg and the start of Chillai Kalan, the 40 coldest days, on 21 December. January is the coldest month, with the deepest snow, frozen Drung waterfall and peak ski conditions. February is still cold and snowy but quieter, with longer, sunnier days, often the best month for skiing and for snow without the festive crowds. Early March brings spring skiing and the first almond blossom in Srinagar."
            },
            {
              "heading": "Skiing and snow activities on a winter package",
              "body": "Gulmarg offers ski and snowboard lessons for beginners on the gentle slopes near the base, with registered instructors and equipment for hire, and long runs from Kongdoori and Apharwat for experienced skiers. Non-skiers enjoy sledging pulled by local operators, ATV and snow scooter rides, snow walks and the Gondola. In Pahalgam and Sonamarg, snow walks, sledging and photography are the main activities. Ask for ski lessons to be written into the package if you want them, so the instructor is booked in advance."
            },
            {
              "heading": "Staying warm: hotels, houseboats and clothing",
              "body": "Choose hotels with central heating, reliable power backup and hot water at all hours, especially in Gulmarg and Pahalgam. A single night on a Deluxe houseboat with good heating is a beautiful winter experience; for the rest of the trip, a heated hotel is more comfortable. Pack thermal base layers, a down or heavy winter jacket, gloves, a woollen cap, warm socks and waterproof boots; snow boots and long coats can be hired in Tangmarg for the Gulmarg day. Sunglasses and sunscreen matter on bright snow."
            },
            {
              "heading": "Winter roads, flights and buffer days",
              "body": "After heavy snowfall, the road from Tangmarg to Gulmarg may need chains or 4x4 vehicles, and police can stop vehicles without them. The Jammu to Srinagar highway can close at Banihal or Ramban for a day or more, and Srinagar flights can be delayed by weather. The Vande Bharat from Katra is the most reliable way into the valley in winter. Keep at least one buffer day before your flight home, and plan hill days with early starts and returns by mid-afternoon."
            },
            {
              "heading": "Who a winter package suits",
              "body": "Winter suits travellers who want snow, skiers and snowboarders, honeymooners who enjoy cosy nights by a heater, families with children excited to play in snow, and photographers who love misty lakes and white forests. It is less suited to travellers who dislike cold, those with health conditions worsened by cold, and anyone needing guaranteed road access on fixed dates."
            },
            {
              "heading": "How to compare winter package quotes",
              "body": "Compare quotes with the same named hotels and room categories, and check that each hotel is heated. Confirm the vehicle model and whether it carries chains or is a 4x4. Ask whether the Gulmarg day includes the Gondola, which is usually extra, and whether ski lessons or equipment are included. Check meal plans, airport transfers, buffer days and what happens if snow closes a road on the day."
            },
            {
              "heading": "Chillai Kalan: the heart of Kashmir's winter",
              "body": "Chillai Kalan, the coldest 40 days of the Kashmiri winter, runs from about 21 December to 31 January, followed by Chillai Khurd and Chillai Bachha, the smaller and baby cold periods. This is when snowfall is heaviest, lakes may freeze at the edges and Kashmiris wear pherans with kangris, traditional fire pots, beneath them. It is the most atmospheric time for a winter trip, but also the coldest."
            },
            {
              "heading": "Gulmarg in winter in more detail",
              "body": "Gulmarg is the centre of Kashmir's winter. Snow usually covers the meadow from December to March, with the deepest snow in January and February. The gondola runs to Kongdori and, weather permitting, Apharwat, where advanced skiers find some of Asia's best off-piste terrain. Beginners learn on gentle slopes near the base. Sledges, snow scooters and ATVs are available for non-skiers."
            },
            {
              "heading": "Pahalgam in winter in more detail",
              "body": "Pahalgam in winter is quiet and snow-covered, with frozen streams, snow-laden pines and the Lidder running dark through white banks. Larger hotels stay open with heating, while many smaller guesthouses close. Union taxis go to Betaab Valley and Aru when roads are open, though Chandanwari may be closed. It is a peaceful alternative to Gulmarg."
            },
            {
              "heading": "Sonamarg in winter after the Z-Morh tunnel",
              "body": "Since the Z-Morh tunnel opened in January 2025, Sonamarg is reachable in most winter weeks, offering deep snow and quiet meadows. Some hotels now stay open in winter. The road can close briefly after heavy snowfall, and Zojila beyond Sonamarg stays closed. Check road status the evening before and choose a heated hotel."
            },
            {
              "heading": "Doodhpathri and Yusmarg in winter",
              "body": "Doodhpathri and Yusmarg are covered with snow in winter and offer snow play away from Gulmarg's crowds when their roads are open. Facilities are limited, so go as day trips from Srinagar with warm clothing, snacks and a driver who knows winter road conditions."
            },
            {
              "heading": "Winter food in Kashmir",
              "body": "Winter is the season for harissa, a slow-cooked mutton and rice dish sold in Srinagar's old city from early morning, along with noon chai, kahwa, dried vegetables called hokh syun, fish with nadru and rich wazwan dishes. Kashmiri homes keep the samovar going all day. Winter food is one of the joys of a winter trip."
            },
            {
              "heading": "Winter for families with children",
              "body": "Children who have never seen snow are thrilled by Gulmarg and Pahalgam in winter. Dress them in waterproof layers, gloves, caps and snow boots, keep outdoor time in short spells with warm breaks indoors, and plan early evenings, since the sun sets early. Book centrally heated hotels with family rooms, and carry children's medicines for colds."
            },
            {
              "heading": "Winter flight and road tips",
              "body": "Book flights early for late December, choose morning departures, and keep a buffer day before any onward connection, since fog in north India and snow in Srinagar can delay flights. On roads, use vehicles with good tyres and snow chains, start drives in daylight, and follow your driver's advice when snow is forecast."
            },
            {
              "heading": "A 6-night Kashmir winter plan",
              "body": "Night 1: Srinagar, heated houseboat or hotel, with an afternoon shikara ride. Night 2: Srinagar, old city and harissa breakfast, Mughal Gardens under frost. Nights 3 and 4: Gulmarg, for snow play, skiing lessons and the gondola. Night 5: Pahalgam, a snowbound riverside stay. Night 6: Srinagar, with a buffer for flight delays. Add Sonamarg as a day trip if the road is open."
            },
            {
              "heading": "Ski packages in Gulmarg",
              "body": "Ski packages usually include accommodation near the gondola, equipment hire, lessons with certified instructors and gondola passes. Courses run from a day to a week or more. Advanced skiers should hire a guide for Apharwat's off-piste terrain and check the avalanche bulletin daily. The ski season usually runs from late December to March."
            },
            {
              "heading": "Winter houseboats",
              "body": "Good winter houseboats have electric blankets, heaters, a bukhari in the sitting room and reliable hot water. Ask whether heating is included or charged extra, whether there is power backup for outages, and whether shikara transfers run in the evening. A heated houseboat on a snowy lake is a magical winter experience."
            },
            {
              "heading": "Winter clothing: what to buy or rent locally",
              "body": "Pherans, woollen caps, gloves, socks and thermals are widely sold in Srinagar's markets. In Gulmarg, snow boots, jackets and ski gear can be rented near the gondola base. Bring your own waterproof jacket and trousers if possible, since rental quality varies."
            },
            {
              "heading": "Winter mistakes to avoid",
              "body": "Booking a flight home on the same day as a Gulmarg or Pahalgam visit, underestimating the cold, choosing hotels without proper heating, not booking gondola tickets in advance, driving after dark on icy roads, and forgetting sunscreen and sunglasses for the snow are the most common winter mistakes."
            },
            {
              "heading": "Winter for older travellers",
              "body": "Older travellers can enjoy a Kashmir winter with care: centrally heated hotels, thermals and warm layers, waterproof boots with good grip, short outdoor spells, the Phase 1 gondola only, and a buffer day for delays. Avoid the coldest weeks of Chillai Kalan if sensitive to cold."
            },
            {
              "heading": "New Year and Christmas on a winter package",
              "body": "Late December is the busiest and most expensive week. Hotels in Gulmarg and Pahalgam hold gala dinners on 31 December, often with a compulsory supplement. Book three to four months ahead, ask about gala dinner charges, and consider staying in Srinagar or Pahalgam on New Year's Eve if Gulmarg is sold out."
            },
            {
              "heading": "Kashmir in December",
              "body": "December brings the first heavy snow to Gulmarg, usually by the middle of the month, and the start of the ski season. Pahalgam often has snow, and Srinagar is cold with frosty mornings. The Christmas and New Year week is the busiest and most expensive of the winter, so book early."
            },
            {
              "heading": "Kashmir in January",
              "body": "January is the heart of Chillai Kalan, the coldest month, with the deepest snow in Gulmarg and Pahalgam and often snow in Srinagar. Lakes may freeze at the edges. It is the best month for skiing and snow photography, and hotel rates fall after the first week. Pack full winter clothing."
            },
            {
              "heading": "Kashmir in February",
              "body": "February remains snowy and cold, with good ski conditions in Gulmarg and clear, sunny days between snowfalls. Towards the end of the month, the first signs of spring appear in Srinagar. It is often quieter than January and a good month for a winter trip."
            },
            {
              "heading": "Kashmir in early March",
              "body": "Early March still has snow in Gulmarg and Pahalgam, with Gulmarg's ski season continuing and almond blossom starting at Badamwari in Srinagar. It is a good month for travellers who want both snow and the first signs of spring, at lower prices than the peak winter weeks."
            },
            {
              "heading": "Winter packages with Vaishno Devi",
              "body": "Pilgrims often combine Vaishno Devi with a winter Kashmir trip: two nights in Katra, then the Vande Bharat to Srinagar, which is less affected by snow than the highway. Katra is cold but much milder than Kashmir, so pack layers for both."
            },
            {
              "heading": "Winter photography in Kashmir",
              "body": "Winter gives Kashmir's most dramatic photographs: misty sunrise on Dal Lake, snow-laden chinars, Gulmarg's snowfields with the Pir Panjal, Pahalgam's frozen streams and the old city's harissa shops at dawn. Keep batteries warm and protect cameras from snow."
            },
            {
              "heading": "Winter packages for honeymooners",
              "body": "Snow honeymoons are among Kashmir's most popular winter trips: a heated houseboat, a Gulmarg resort with a fireplace or heating and snow views, a snowbound Pahalgam riverside cottage and quiet evenings. Book early for Christmas and New Year."
            },
            {
              "heading": "Winter packages for groups of friends",
              "body": "Friends visiting in winter usually stay two nights in Gulmarg for skiing lessons, snow scooters and the gondola, then a snowy night in Pahalgam. A tempo traveller with chains and a heated whole houseboat keep the group together."
            }
          ],
          "faqs": [
            {
              "q": "When is the best time for a Kashmir winter package?",
              "a": "Late December to February for reliable snow, with February often best for snow without festive crowds."
            },
            {
              "q": "Is Gulmarg covered in snow in December?",
              "a": "Usually from mid to late December, after the first big spells. January and February are more reliable."
            },
            {
              "q": "Can I visit Sonamarg in winter?",
              "a": "Yes, on most days through the Z-Morh tunnel opened in January 2025, though most hotels close and police can restrict traffic after heavy snow."
            },
            {
              "q": "Do winter packages include ski lessons?",
              "a": "Not usually. Ask for lessons and equipment to be added so the instructor is booked in advance."
            },
            {
              "q": "What should I pack for Kashmir in winter?",
              "a": "Thermals, a heavy jacket, gloves, a woollen cap, warm socks, waterproof boots, sunglasses and sunscreen."
            },
            {
              "q": "Are houseboats warm in winter?",
              "a": "Deluxe boats with good heating are comfortable for a night; confirm heating before you book."
            },
            {
              "q": "What is Chillai Kalan?",
              "a": "The coldest 40 days of Kashmir's winter, from about 21 December to 31 January."
            },
            {
              "q": "Is Pahalgam open in winter?",
              "a": "Yes. Larger hotels stay open with heating, and union taxis go to Betaab and Aru when roads are open."
            },
            {
              "q": "What food should I try in Kashmir in winter?",
              "a": "Harissa in the old city, noon chai, kahwa and wazwan dishes."
            },
            {
              "q": "When is the ski season in Gulmarg?",
              "a": "Usually from late December to March."
            },
            {
              "q": "Can I rent winter clothing in Kashmir?",
              "a": "Yes, pherans and woollens are sold in Srinagar, and snow boots and ski gear are rented in Gulmarg."
            },
            {
              "q": "Is Kashmir good for seniors in winter?",
              "a": "Yes, with heated hotels, warm layers, short outdoor spells and the Phase 1 gondola only."
            },
            {
              "q": "Is December good for snow in Kashmir?",
              "a": "Yes, Gulmarg usually has heavy snow by mid-December."
            },
            {
              "q": "Is February good for a Kashmir winter trip?",
              "a": "Yes, with good snow, sunny days between snowfalls and fewer crowds than January."
            },
            {
              "q": "Is there snow in Kashmir in March?",
              "a": "Yes, in Gulmarg and Pahalgam in early March, with almond blossom in Srinagar."
            },
            {
              "q": "Is winter good for a Kashmir honeymoon?",
              "a": "Yes, with heated houseboats, snow resorts in Gulmarg and quiet Pahalgam."
            },
            {
              "q": "Can groups of friends enjoy Kashmir in winter?",
              "a": "Yes, with two nights in Gulmarg for skiing and snow activities and a tempo traveller with chains. Book early for January."
            }
          ]
        },
        "budget-tour-packages": {
          "blocks": [
            {
              "heading": "What makes a Kashmir package budget",
              "body": "A budget Kashmir package keeps the same classic route, Srinagar, Gulmarg, Sonamarg and Pahalgam, but uses simpler stays, a shared or smaller vehicle and fewer paid extras. Hotels are usually clean guest houses or two and three star properties, sometimes a lower category houseboat for a night. Using Srinagar as a base for day trips to Gulmarg, Sonamarg and Doodhpathri saves on hill-station hotels. Travelling in March, October or November, when rates fall, makes the biggest difference of all."
            },
            {
              "heading": "How to keep a Kashmir trip affordable",
              "body": "Travel outside the peak weeks of May, June, the tulip season and Christmas to New Year. Share a car: Kashmir taxis are priced per vehicle, so four people pay much less each than two. Choose a sedan in summer and an Innova only when the group or season needs it. Base yourself in Srinagar for most nights. Eat at local restaurants and bakeries. Book the Gulmarg Gondola yourself on the official portal. Skip paid extras you do not care about, such as ATV rides or long shikara routes."
            },
            {
              "heading": "A budget 5-night Kashmir plan",
              "body": "Night 1: Srinagar guest house near Dal Gate, sunset shikara on the lake. Day 2: Mughal gardens and the old city. Day 3: Gulmarg day trip with the Gondola booked online. Day 4: Sonamarg day trip and the walk to Thajiwas. Day 5: drive to Pahalgam via Pampore and stay one night in a budget hotel or homestay. Day 6: union taxi to Betaab and Aru, then back to Srinagar and the flight home. This covers all the highlights with only one hotel change."
            },
            {
              "heading": "Budget stays in each town",
              "body": "Srinagar: guest houses and small hotels in the lanes behind Boulevard Road and around Dal Gate, Rajbagh and Lal Chowk, and lower category houseboats. Gulmarg: few budget options on the meadow, so most budget travellers visit as a day trip or stay in Tangmarg. Pahalgam: guest houses near the bus stand, JKTDC huts and homestays down the valley. Sonamarg: JKTDC huts and simple hotels in summer. Check heating in winter and recent reviews in every season."
            },
            {
              "heading": "What budget packages usually include and exclude",
              "body": "Most budget packages include hotels with breakfast and sometimes dinner, a car with driver for transfers and sightseeing, airport pickup and drop, and one shikara ride. They usually exclude flights, the Gondola, union taxis in Pahalgam and Sonamarg, ponies, entry tickets and lunches. Ask the agent for the hotel names and the vehicle model in writing, so you can compare like with like."
            },
            {
              "heading": "Budget travel by season",
              "body": "March and early April: low rates, almond blossom and spring snow higher up. Mid-April: tulip season, busier and pricier. May and June: peak summer, the most expensive months. July and August: lush valleys, rates moderate except around the Amarnath Yatra routes. September to November: some of the best value of the year with clear skies and autumn colours. December to February: winter snow; rates rise around Christmas and New Year but are moderate in January and February outside holidays."
            },
            {
              "heading": "Avoiding false economies",
              "body": "The cheapest quote is not always the best value. Watch for hotels several lanes from the lake sold as lakeside, very small cars for long hill days, winter hotels without heating, missing transfers and unclear meal plans. A slightly higher package with named hotels, a suitable vehicle and clear inclusions usually costs less once you add the extras you would otherwise pay on the spot."
            },
            {
              "heading": "Who a budget Kashmir package suits",
              "body": "Budget packages suit students, young couples, groups of friends, first-time visitors who want the classic highlights without luxury, and families who prefer to spend on experiences rather than hotels. They work best for travellers who are comfortable with simple but clean rooms, shared day trips from a Srinagar base and local food. If heating, views or a resort atmosphere matter to you, a standard or deluxe package may be better value."
            },
            {
              "heading": "Srinagar as a budget base",
              "body": "Staying in Srinagar for most of the trip and seeing Gulmarg and Sonamarg as day trips is the single biggest saving on a Kashmir budget trip. Srinagar has the widest choice of budget hotels and guesthouses, especially in the lanes behind the Boulevard and in Rajbagh, and you avoid the higher rates of the hill resorts. One or two nights in Pahalgam, where budget stays are plentiful, completes the circuit."
            },
            {
              "heading": "Budget houseboats",
              "body": "Budget and standard category houseboats offer the houseboat experience at a fraction of the price of luxury boats. Rooms are simpler and smaller, bathrooms more basic, and the boats may be in inner lanes rather than facing open water. Check recent reviews for cleanliness and hot water, confirm meals and shikara transfers, and choose one night rather than several."
            },
            {
              "heading": "Budget transport choices",
              "body": "A sedan such as a Dzire or Etios is the cheapest private car for couples and small families. Groups of six or more save per person with an Innova or tempo traveller. Shared Sumo taxis connect Srinagar with Tangmarg, Pahalgam and Sonamarg for the most budget-conscious, but are slower and less flexible. Remember that union taxis in Pahalgam and Sonamarg are an extra cost whatever vehicle you choose."
            },
            {
              "heading": "Eating well on a budget",
              "body": "Kashmir is easy to eat well in cheaply: bread from a kandur with noon chai or tea for breakfast, rice with rajma, haak or chicken at local eateries, and kebabs at Khayam Chowk in the evening. Packages often include breakfast and dinner, so lunch is the main extra. Wazwan dishes cost more, but a single dish with rice is a good way to try them."
            },
            {
              "heading": "Best months for a budget Kashmir trip",
              "body": "March, early April, late September, October and November, outside holidays and long weekends, usually offer the lowest hotel rates and good availability. January and February can also be affordable outside the Christmas and New Year rush, except in Gulmarg during the ski season. May, June and late December are the most expensive."
            },
            {
              "heading": "Budget activities and free things to do",
              "body": "Many of Kashmir's best experiences cost little: walking the Boulevard, visiting Hazratbal and the old city, exploring the Mughal Gardens for small entry fees, watching the sunset over Dal Lake, walking along the Lidder in Pahalgam and enjoying the meadows of Gulmarg. Spend selectively on one shikara ride, the gondola Phase 1 and union taxis in Pahalgam."
            },
            {
              "heading": "Budget Kashmir trip for students and backpackers",
              "body": "Students and backpackers often travel by train to Jammu or Katra, take the Vande Bharat to Srinagar, stay in guesthouses or hostels, and use shared taxis for day trips. Hostels have opened in Srinagar in recent years, offering dorm beds and social spaces. Carry a postpaid SIM, original ID and enough cash for small payments."
            },
            {
              "heading": "Comparing budget package quotes",
              "body": "When comparing quotes, check the named hotels and their locations, the meal plan, the vehicle type and whether it is for the whole trip, whether a houseboat night is included, airport and station transfers, and what is excluded, such as union taxis, ponies and gondola tickets. The cheapest quote is not always the best value if it hides extras or uses poorly located hotels."
            },
            {
              "heading": "A budget 4-night Kashmir plan",
              "body": "Night 1: Srinagar, with an evening walk on the Boulevard and a short shared shikara ride. Day 2: Gulmarg as a day trip, with the Phase 1 gondola or a walk around the meadow. Night 3: Pahalgam in a budget guesthouse, after stops at Pampore and Awantipora, with union taxi sightseeing to Betaab Valley. Night 4: back in Srinagar, with the Mughal Gardens and the old city, before departure. This covers the essentials on the lowest budget."
            },
            {
              "heading": "Budget Kashmir trip by train",
              "body": "Travelling by train to Katra or Jammu and taking the Vande Bharat to Srinagar is often cheaper than flying, especially in peak season when airfares rise sharply. The train journey from Katra takes about three hours and is comfortable and scenic. Book early on IRCTC, since seats sell out on weekends and holidays."
            },
            {
              "heading": "Budget Kashmir with Vaishno Devi",
              "body": "Combining Vaishno Devi with Kashmir on a budget works well: train to Katra, two nights in a budget hotel for the yatra on foot or by pony, then the Vande Bharat to Srinagar. Katra has many affordable vegetarian restaurants and dharamshalas run by the shrine board."
            },
            {
              "heading": "What budget packages do not include",
              "body": "Budget packages usually exclude flights or trains, lunch, union taxis in Pahalgam and Sonamarg, ponies, gondola tickets, entry fees, room heaters in winter, and personal expenses. Ask for a clear list of exclusions so you can budget for them in advance, and carry cash for local payments."
            },
            {
              "heading": "Budget hotels: what to expect",
              "body": "Budget hotels in Kashmir usually offer clean, simple rooms with attached bathrooms, hot water at certain hours, basic furniture and breakfast. Heating may be by electric heater, sometimes at extra cost, and views are rarely included. Choose hotels with recent good reviews for cleanliness and helpful staff."
            },
            {
              "heading": "Saving on the Gulmarg gondola",
              "body": "Phase 1 of the gondola to Kongdori gives snow and views for a lower ticket price than Phase 2. Many budget travellers take only Phase 1, or skip the gondola and enjoy Gulmarg's meadow, St Mary's Church and the Maharani temple on foot or by pony. Book online to avoid paying touts."
            },
            {
              "heading": "Budget tips for groups",
              "body": "Groups save by sharing a tempo traveller or Innova, booking rooms with extra beds, choosing a whole budget houseboat for one night, and splitting union taxi costs in Pahalgam. Appoint one person to handle bookings and payments, and agree on a shared budget before the trip."
            },
            {
              "heading": "Budget Kashmir trip for couples",
              "body": "Couples on a budget can enjoy a romantic trip by staying in a clean budget hotel in Srinagar, booking one night on a standard houseboat, taking a sedan for day trips to Gulmarg and Sonamarg, and spending two nights in a Pahalgam guesthouse by the river. Splurge on one private shikara ride at sunset, which is the most memorable experience for most couples."
            },
            {
              "heading": "Budget Kashmir trip for families",
              "body": "Families keep costs down with family rooms or extra beds, an Ertiga or Innova shared by everyone, Srinagar as the main base, and free or low-cost activities such as gardens, walks and the riverside. Children's rates for gondola tickets and hotels help. Carry snacks for drives, and choose packages with breakfast and dinner included."
            },
            {
              "heading": "Budget pitfalls to watch for",
              "body": "Very cheap packages sometimes cut costs with hotels far from the centre, a vehicle only on some days, no heating in cold months, unclear houseboat categories or hidden extras charged on arrival. Read reviews, ask for named hotels and the exact vehicle, and confirm everything in writing before paying a deposit."
            },
            {
              "heading": "Budget packages in winter",
              "body": "Winter can be a budget season outside Christmas, New Year and Gulmarg's peak ski weeks. Stay in Srinagar, visit Gulmarg as a day trip for snow, and choose hotels that include heating rather than charging for heaters. Rent snow boots and jackets instead of buying them."
            }
          ],
          "faqs": [
            {
              "q": "What is the cheapest time to visit Kashmir?",
              "a": "March, October and November, outside the tulip weeks, summer holidays and the winter festive period."
            },
            {
              "q": "Can I do Kashmir on a budget with a family?",
              "a": "Yes. Share one vehicle, use Srinagar as the base and travel in shoulder months."
            },
            {
              "q": "Is a budget houseboat worth it?",
              "a": "Yes, for one night. Lower category boats are simple but give the lake experience at a lower rate."
            },
            {
              "q": "Do budget packages include the Gulmarg Gondola?",
              "a": "Usually not. Book it yourself on the official portal."
            },
            {
              "q": "How many nights should a budget Kashmir trip be?",
              "a": "Five nights covers Srinagar, Gulmarg, Sonamarg and one night in Pahalgam."
            },
            {
              "q": "Is Srinagar the best base for a budget Kashmir trip?",
              "a": "Yes. Staying in Srinagar and doing Gulmarg and Sonamarg as day trips saves the most."
            },
            {
              "q": "Are there hostels in Srinagar?",
              "a": "Yes, hostels with dorm beds have opened in recent years."
            },
            {
              "q": "Which vehicle is cheapest for a Kashmir trip?",
              "a": "A sedan such as a Dzire for couples and small families; an Innova or tempo traveller for larger groups."
            },
            {
              "q": "Is the train cheaper than flying to Kashmir?",
              "a": "Often yes in peak season: train to Katra and the Vande Bharat to Srinagar."
            },
            {
              "q": "What do budget Kashmir packages exclude?",
              "a": "Usually flights, lunch, union taxis, ponies, gondola tickets, entry fees and winter heaters."
            },
            {
              "q": "Is gondola Phase 1 enough on a budget?",
              "a": "Yes, it gives snow and views at Kongdori for a lower price than Phase 2."
            },
            {
              "q": "How can couples save on a Kashmir trip?",
              "a": "Budget hotel in Srinagar, one standard houseboat night, a sedan for day trips and a guesthouse in Pahalgam."
            },
            {
              "q": "What are the risks of very cheap Kashmir packages?",
              "a": "Remote hotels, limited vehicle days, no heating and hidden extras. Ask for named hotels and confirm in writing."
            },
            {
              "q": "Is winter a good budget season for Kashmir?",
              "a": "Yes, outside Christmas, New Year and peak ski weeks, with Gulmarg as a day trip."
            },
            {
              "q": "Can I do Kashmir on a budget in winter?",
              "a": "Yes, outside Christmas, New Year and peak ski weeks, staying in Srinagar."
            },
            {
              "q": "Is a budget package good for a honeymoon?",
              "a": "Yes, with a standard houseboat, a private sunset shikara and shoulder-season travel."
            },
            {
              "q": "Is a budget Kashmir package good for students?",
              "a": "Yes, with hostels or guesthouses, shared taxis and train travel to Katra."
            },
            {
              "q": "Which is the cheapest month for a Kashmir package?",
              "a": "Usually March, November or early December outside holidays, when hotels offer lower rates."
            }
          ]
        },
        "honeymoon-packages": {
          "blocks": [
            {
              "heading": "What makes Kashmir a honeymoon favourite",
              "body": "Kashmir combines everything couples look for: a night on a carved walnut houseboat on Dal or Nigeen, private shikara rides at sunset, Mughal gardens in blossom or autumn gold, snow in Gulmarg in winter and riverside hotels in Pahalgam. Distances are short, so days stay relaxed, and the valley's hotels are used to honeymooners, with flower decorations, candlelight dinners and room upgrades on request."
            },
            {
              "heading": "A 6-night Kashmir honeymoon plan",
              "body": "Night 1: a Deluxe houseboat on Nigeen with a decorated sunset shikara. Night 2: a lake-view or heritage hotel in Srinagar, with Nishat, Shalimar and Pari Mahal. Night 3: a resort near the Gulmarg Gondola for an evening on the meadow and the first cabin up the next morning. Nights 4 and 5: a riverside hotel on the Lidder in Pahalgam, with Betaab and Aru by union taxi at a slow pace. Night 6: back to a Dal Lake houseboat for a final evening on the water. Transfers in an Innova Crysta keep the drives comfortable."
            },
            {
              "heading": "Best months for a Kashmir honeymoon",
              "body": "April for tulips and blossom, May and June for green valleys and long days, September and October for clear skies and golden chinars, and December to February for snow and cosy nights. Late March, October and November are quieter and better value. Avoid July and August if you want quiet roads in Pahalgam and Sonamarg, when the Amarnath Yatra brings crowds and security."
            },
            {
              "heading": "Romantic experiences to add",
              "body": "A dawn shikara to the floating market with kahwa on board. A candlelight dinner on a houseboat deck. A Kashmiri dress photo session on the lake. A private wazwan dinner. A first Gondola ride above the snow line. A pony ride to Khilanmarg. A riverside picnic in Betaab Valley. A walk through the old city's lanes with a guide. Ask your agent to write these into the itinerary so they are booked in advance."
            },
            {
              "heading": "Choosing honeymoon hotels in Kashmir",
              "body": "Look for rooms with views: Dal Lake from Srinagar's hillside and lakefront hotels, the meadow from Gulmarg resorts, and the Lidder from Pahalgam's riverside hotels. Book one or two nights on a Deluxe houseboat for privacy and romance, ideally booking the whole boat. In winter, make heating and power backup the first priority. Ask each hotel for honeymoon extras in writing."
            },
            {
              "heading": "Honeymoon package inclusions to check",
              "body": "Named hotels and room categories in each town, the houseboat category, a private car with driver, airport transfers, breakfast and dinner, a private shikara ride, and any honeymoon extras such as flower decoration, cake or a candlelight dinner. Gondola tickets, union taxis, ponies and photography are usually extra."
            },
            {
              "heading": "Honeymoon in spring",
              "body": "March to May is a beautiful honeymoon season: almond blossom in March, tulips in April, orchards in bloom and snow still in Gulmarg and Sonamarg. Days are mild and evenings cool, ideal for shikara rides and cosy dinners. Book the Gulmarg gondola early, since April is busy."
            },
            {
              "heading": "Honeymoon in summer",
              "body": "June to August brings green valleys, long days, rafting on the Lidder and the Sindh and pleasant weather across Kashmir. It is the busiest season, so book hotels and the gondola well ahead. Pahalgam's riverside resorts and Sonamarg's meadows are at their best."
            },
            {
              "heading": "Honeymoon in autumn",
              "body": "September to November brings golden chinars, clear skies, crisp air and fewer crowds. It is many couples' favourite season: romantic, peaceful and beautiful for photographs. Nights are cold, so choose heated rooms."
            },
            {
              "heading": "Honeymoon in winter",
              "body": "December to February is the season for snow honeymoons, with snow-covered resorts in Gulmarg and Pahalgam, heated houseboats on Dal and Nigeen, and quiet, misty lakes. Choose centrally heated hotels, pack warm clothing and keep a buffer day for flight delays."
            },
            {
              "heading": "Honeymoon houseboat experience",
              "body": "A night on a Deluxe or luxury houseboat on Nigeen or Dal is the highlight of most Kashmir honeymoons. Ask for a decorated room, a private sunset shikara, a candlelight dinner on the verandah and a dawn ride to the floating market. Nigeen is quieter; Dal is livelier and more central."
            },
            {
              "heading": "Honeymoon resorts in Gulmarg and Pahalgam",
              "body": "Gulmarg's resorts offer views of the Pir Panjal and snowfields, with fireplaces or heating in winter. Pahalgam's riverside resorts and cottages sit by the Lidder among pine forests. One night in Gulmarg and two in Pahalgam is a popular combination for a 6-night honeymoon."
            },
            {
              "heading": "Honeymoon photography and memories",
              "body": "Many couples book a photographer in Srinagar or Gulmarg for a short session in traditional Kashmiri dress on a shikara, in the Mughal Gardens or in the snow. Some resorts arrange romantic setups for photographs. Ask your agent to include this in the package."
            },
            {
              "heading": "Honeymoon add-ons by budget",
              "body": "Simple add-ons include room decoration, a cake and a private shikara. Mid-range add-ons include a candlelight dinner, the gondola to Apharwat and a photographer. Premium add-ons include a luxury houseboat, a suite in a top resort, a private car with a chauffeur throughout and spa treatments."
            },
            {
              "heading": "A 7-night honeymoon plan",
              "body": "Night 1: a Deluxe houseboat on Nigeen with a sunset shikara. Night 2: Srinagar, Mughal Gardens and a candlelight dinner. Nights 3 and 4: Pahalgam, riverside cottage, Betaab, Chandanwari and Aru by union taxi. Night 5: Gulmarg resort, the gondola and snow. Night 6: Srinagar, Sonamarg day trip. Night 7: a final night on Dal Lake, then departure."
            },
            {
              "heading": "A 4-night honeymoon plan",
              "body": "Night 1: houseboat on Dal or Nigeen, sunset shikara. Night 2: Gulmarg resort with the gondola. Night 3: Pahalgam riverside stay with Betaab Valley. Night 4: Srinagar hotel, Mughal Gardens and shopping, then departure."
            },
            {
              "heading": "Honeymoon with Ladakh",
              "body": "Adventurous couples sometimes add Ladakh to a Kashmir honeymoon in summer, driving from Srinagar to Leh via Kargil and adding Nubra's dunes and Pangong's lakeside camps. Plan at least 10 nights, with rest days in Leh, and choose comfortable camps with heating and attached bathrooms."
            },
            {
              "heading": "Honeymoon etiquette and dress",
              "body": "Kashmir is a conservative region, so dress modestly in the old city and at shrines, and keep public displays of affection low-key. Hotels and resorts are welcoming to couples and used to honeymooners. Carry valid ID for both partners; hotels register all guests."
            },
            {
              "heading": "Honeymoon package mistakes to avoid",
              "body": "Choosing packages that change hotels every night, skipping the houseboat night, not booking the gondola early, ignoring heating in winter, and agreeing to vague hotel names are common mistakes. Ask for a named hotel list, honeymoon inclusions in writing and a realistic daily plan."
            },
            {
              "heading": "Honeymoon in Sonamarg",
              "body": "Sonamarg is usually a day trip on a honeymoon, but couples who want quiet can spend a night there for sunsets over the meadows and the Sindh, and a ride together to Thajiwas glacier. Choose a hotel with mountain views and heating."
            },
            {
              "heading": "Honeymoon in Doodhpathri and Yusmarg",
              "body": "For couples who want to escape the crowds, a day in Doodhpathri's meadows or Yusmarg's pine forests and Nilnag lake is peaceful and romantic. Pack a picnic, take a pony ride and enjoy the quiet."
            },
            {
              "heading": "Honeymoon shopping in Srinagar",
              "body": "Couples often buy pashmina shawls, papier-mache gifts, saffron, walnut wood items and Kashmiri jewellery as keepsakes. Shop at established showrooms or government emporiums, ask for bills and certificates, and avoid touts."
            },
            {
              "heading": "Choosing a honeymoon agent",
              "body": "Choose an agent who names every hotel and houseboat in writing, explains honeymoon inclusions clearly, offers a private car with an experienced driver, and has a 24-hour contact during the trip. Read reviews from other couples, and compare at least two quotes."
            },
            {
              "heading": "Honeymoon packages on a budget",
              "body": "Couples on a budget can still have a romantic Kashmir honeymoon: a standard houseboat night, a private sunset shikara, a comfortable hotel in Srinagar, a Gulmarg day trip and two nights in a Pahalgam riverside guesthouse. Travel in shoulder months for lower rates."
            },
            {
              "heading": "Honeymoon packages with Vaishno Devi",
              "body": "Some couples begin their honeymoon with a visit to Vaishno Devi, travelling to Katra by train, completing the yatra and taking the Vande Bharat to Srinagar. Add two nights for the yatra."
            },
            {
              "heading": "Honeymoon packages for international couples",
              "body": "Couples from abroad usually fly via Delhi or Mumbai to Srinagar, carry passports and visas, register at each hotel and buy travel insurance that covers J&K. A 7-night honeymoon covers the houseboat, Gulmarg, Pahalgam and Sonamarg with a buffer day before the international flight."
            },
            {
              "heading": "Honeymoon packages: what to check before you pay",
              "body": "Before you pay, confirm the named houseboat and hotels with room types, the honeymoon inclusions such as decoration, cake, candlelight dinner and private shikara, the vehicle and driver for the whole trip, meal plans, and the cancellation policy. Pay a deposit by a traceable method and keep everything in writing."
            }
          ],
          "faqs": [
            {
              "q": "How many days are ideal for a Kashmir honeymoon?",
              "a": "Six to seven nights, with one or two houseboat nights, Gulmarg and two nights in Pahalgam."
            },
            {
              "q": "Which is the most romantic place in Kashmir?",
              "a": "A Deluxe houseboat on Nigeen or Dal for the lake, and Pahalgam's riverside hotels for the mountains."
            },
            {
              "q": "Is Kashmir good for a winter honeymoon?",
              "a": "Yes. Snow in Gulmarg, misty lakes and warm, heated rooms make winter very romantic."
            },
            {
              "q": "Do honeymoon packages include a private shikara?",
              "a": "Most include one shikara ride. Ask for a private, decorated shikara at sunset."
            },
            {
              "q": "Can we stay a night in Gulmarg on a honeymoon?",
              "a": "Yes, and it is recommended for an evening on the meadow and an early Gondola ride."
            },
            {
              "q": "Which season is best for a Kashmir honeymoon?",
              "a": "Spring for tulips, summer for green valleys, autumn for golden colours and winter for snow; each has its charm."
            },
            {
              "q": "Which houseboat is best for a honeymoon?",
              "a": "A Deluxe or luxury houseboat on Nigeen for quiet, or Dal for a livelier, central stay."
            },
            {
              "q": "Can we book a photographer on a Kashmir honeymoon?",
              "a": "Yes, in Srinagar or Gulmarg; ask your agent to include it."
            },
            {
              "q": "Is a Kashmir honeymoon good in autumn?",
              "a": "Yes, with golden chinars, clear skies and fewer crowds."
            },
            {
              "q": "How many nights in Gulmarg on a honeymoon?",
              "a": "One night is usually enough, with two in Pahalgam."
            },
            {
              "q": "Is Pahalgam or Gulmarg better for a honeymoon?",
              "a": "Pahalgam for riverside romance and longer stays; Gulmarg for snow and the gondola."
            },
            {
              "q": "Are honeymoon packages available in winter?",
              "a": "Yes, with heated hotels, snow in Gulmarg and Pahalgam and heated houseboats."
            },
            {
              "q": "What is a good 4-night Kashmir honeymoon plan?",
              "a": "Houseboat, Gulmarg resort, Pahalgam riverside stay and a final night in Srinagar."
            },
            {
              "q": "Can we add Ladakh to a Kashmir honeymoon?",
              "a": "Yes, in summer with at least 10 nights and rest days in Leh."
            },
            {
              "q": "Do hotels in Kashmir register couples?",
              "a": "Yes, all guests are registered, so carry valid ID for both partners."
            },
            {
              "q": "Should we stay overnight in Sonamarg on a honeymoon?",
              "a": "It is usually a day trip, but a night there gives quiet sunsets for couples who want peace."
            },
            {
              "q": "What should couples buy in Kashmir?",
              "a": "Pashmina shawls, papier-mache gifts, saffron, walnut wood items and Kashmiri jewellery."
            },
            {
              "q": "How do we choose a honeymoon agent for Kashmir?",
              "a": "One who names every hotel, lists honeymoon inclusions in writing and offers a private car and 24-hour contact."
            },
            {
              "q": "Can we start a Kashmir honeymoon with Vaishno Devi?",
              "a": "Yes: two nights in Katra, then the Vande Bharat to Srinagar."
            },
            {
              "q": "Can international couples book a Kashmir honeymoon?",
              "a": "Yes, flying via Delhi or Mumbai with passports, visas and travel insurance that covers J&K."
            },
            {
              "q": "What should we check before paying for a honeymoon package?",
              "a": "Named hotels and room types, honeymoon inclusions, vehicle, meals and the cancellation policy."
            },
            {
              "q": "Is Kashmir good for a honeymoon in April?",
              "a": "Yes, with tulips, blossom, snow in Gulmarg and cool evenings on the lakes. Book the gondola early, since April is busy."
            },
            {
              "q": "Do honeymoon packages include a candlelight dinner?",
              "a": "Many do, on a houseboat verandah or at a Gulmarg or Pahalgam resort; confirm when booking."
            }
          ]
        },
        "adventure-tour-packages": {
          "blocks": [
            {
              "heading": "Adventure in Kashmir by season",
              "body": "Winter, December to March: skiing and snowboarding in Gulmarg with registered instructors, plus sledging, ATVs and snow scooters. Spring, April and May: spring skiing on Apharwat, early treks and the first rafting on the Lidder. Summer, June to September: rafting on the Lidder in Pahalgam and the Sindh near Sonamarg, the Kashmir Great Lakes and Tarsar Marsar treks, camping in Gurez and paragliding at Astanmarg and Sonamarg in good weather. Autumn, September to November: clear-weather hikes, cycling and photography."
            },
            {
              "heading": "Treks in Kashmir",
              "body": "The Kashmir Great Lakes trek runs about seven days from Sonamarg to Naranag past Vishansar, Krishansar, Gadsar, Satsar and the Gangabal twin lakes, from July to September. Tarsar Marsar, from Aru near Pahalgam, takes five to six days to twin alpine lakes. Shorter options include Lidderwat from Aru, Thajiwas from Sonamarg, Khilanmarg from Gulmarg and Nilnag from Yusmarg. Trek with a registered operator who provides guides, tents and food, carry original IDs and train in advance."
            },
            {
              "heading": "River rafting in Kashmir",
              "body": "Rafting runs on the Lidder near Pahalgam and the Sindh near Kullan and Gund on the way to Sonamarg, from about May to September, depending on water levels. Stretches range from gentle family runs to livelier sections in June, when snowmelt is highest. Operators provide helmets, life jackets and guides; check that they are registered and give a safety briefing."
            },
            {
              "heading": "Skiing in Gulmarg",
              "body": "Gulmarg is India's leading ski destination, with beginner slopes near the base, the Gondola to Kongdoori and Apharwat for longer runs, and vast off-piste terrain that draws experienced skiers from around the world. Lessons, equipment hire and guided off-piste days are available. Off-piste skiing is avalanche terrain: go only with a qualified guide and proper equipment."
            },
            {
              "heading": "Adventure safety essentials",
              "body": "Use registered operators for treks, rafting, skiing and paragliding. Check equipment, guides' experience and insurance. Acclimatise before high treks, carry original ID for checkposts and share your plans with your hotel. Respect weather: rain, snow and wind can change conditions quickly. Carry a basic first-aid kit and enough water."
            },
            {
              "heading": "A 7-night adventure plan",
              "body": "Night 1: Srinagar. Day 2: Gulmarg Gondola and a hike to Khilanmarg. Day 3: Sonamarg, the Thajiwas walk and rafting on the Sindh. Day 4: drive to Pahalgam. Day 5: rafting on the Lidder and a ride to Aru. Day 6: day hike from Aru to Lidderwat. Day 7: paragliding at Astanmarg if weather allows, or a cycling tour around Dal Lake. Day 8: fly home. In winter, replace rafting and treks with ski days in Gulmarg."
            },
            {
              "heading": "Paragliding in Kashmir",
              "body": "Paragliding is offered at a few sites in Kashmir, such as near Sonamarg and in some years around Srinagar and Gulmarg, with tandem flights by licensed pilots in good weather. Availability depends on the season, weather and permissions, so check with your agent before planning. Only fly with registered operators who provide helmets and harnesses."
            },
            {
              "heading": "ATV rides and snow scooters",
              "body": "In Gulmarg, ATV rides run across the meadows in summer and on snow in winter, and snow scooters take visitors over snowfields. Operators are regulated by local associations with fixed routes and rates. Wear helmets, follow the operator's route and avoid rides in poor visibility."
            },
            {
              "heading": "Mountain biking and cycling",
              "body": "Experienced cyclists ride the roads to Gulmarg, Pahalgam and Sonamarg, and some operators run guided mountain biking tours on forest trails and village roads. The Srinagar to Leh road is a classic long-distance cycling challenge in summer. Carry spares, ride in daylight and acclimatise for higher routes."
            },
            {
              "heading": "Fishing as adventure",
              "body": "Trout fishing on the Lidder in Pahalgam, the Sindh near Sonamarg, the Bringi at Daksum and the Kishanganga in Gurez combines adventure with quiet days in the mountains. Permits from the J&K fisheries department are required, and some beats are reserved. Hotels and guides can help arrange permits."
            },
            {
              "heading": "Day hikes for beginners",
              "body": "Easy day hikes include Gulmarg to Khilanmarg, Pahalgam to the Lidder riverside and Baisaran when open, Aru to the lower meadows towards Lidderwat, Sonamarg to Thajiwas glacier and Doodhpathri's meadows. They need no special gear beyond good shoes, layers and water."
            },
            {
              "heading": "Multi-day treks in detail",
              "body": "Popular multi-day treks include the Kashmir Great Lakes from Sonamarg to Naranag, about seven days; Tarsar Marsar from Aru, about six to seven days; Kolahoi glacier from Aru, three to four days; and Gangabal from Naranag, two to three days. The season runs from July to September, and treks need licensed operators."
            },
            {
              "heading": "Adventure safety and insurance",
              "body": "Choose operators registered with J&K Tourism, check that safety gear is provided, follow guides' instructions, avoid activities in poor weather or high water, and buy travel insurance that covers adventure activities and evacuation. Carry a basic first aid kit and know the emergency number 112."
            },
            {
              "heading": "A 5-night adventure plan",
              "body": "Night 1: Srinagar, with kayaking on Dal Lake in summer. Night 2: Sonamarg, with a hike to Thajiwas and rafting on the Sindh. Nights 3 and 4: Pahalgam, with rafting on the Lidder, a day hike from Aru towards Lidderwat and a pony ride. Night 5: Gulmarg, with the gondola to Apharwat, ATV rides and, in winter, skiing."
            },
            {
              "heading": "Winter adventure in Kashmir",
              "body": "Winter adventure centres on Gulmarg: skiing and snowboarding on Apharwat's off-piste runs, beginner lessons near the base, snowshoeing, sledging and snow scooters. Advanced skiers should ski with a guide and check the avalanche bulletin. Pahalgam and Sonamarg offer snow walks and snow play."
            },
            {
              "heading": "Adventure for families",
              "body": "Families can enjoy gentle adventure: rafting on the Lidder's easy stretches for older children, pony rides, the gondola, short hikes and sledging. Check age limits for rafting and ATV rides, and choose operators with good safety records."
            },
            {
              "heading": "Fitness for adventure activities",
              "body": "Most adventure activities in Kashmir need only average fitness, but treks and skiing on Apharwat need good stamina. Prepare with walking, running and stair climbing for a few weeks, and acclimatise before high activities. Tell operators about any health conditions."
            },
            {
              "heading": "Adventure in Gurez and north Kashmir",
              "body": "Gurez offers trekking, camping by the Kishanganga, trout fishing and village walks in summer. Bangus and Lolab in Kupwara offer meadow hikes and forest walks. These areas need registered operators, permits or registration where required and good weather."
            },
            {
              "heading": "Adventure on a budget",
              "body": "Budget adventure travellers can raft on the Lidder, hike from Aru and Sonamarg, join group treks with registered operators and take the gondola Phase 1. Travel in June or September for good conditions and lower rates."
            },
            {
              "heading": "Adventure packages with Ladakh",
              "body": "Adventure travellers often add Ladakh for biking, high-altitude treks such as the Markha valley, rafting on the Zanskar and the high passes. Plan rest days in Leh and a Ladakh-registered vehicle or rented bike."
            },
            {
              "heading": "Choosing an adventure operator",
              "body": "Choose operators registered with J&K Tourism, with trained and first aid certified guides, good-quality gear, small group sizes, clear safety briefings and evacuation plans. Read recent reviews, ask about insurance, and avoid operators who skip safety steps or push activities in poor conditions."
            },
            {
              "heading": "Adventure packages for solo travellers",
              "body": "Solo adventure travellers can join group treks, ski courses in Gulmarg and rafting trips, where they meet other travellers and share costs. Registered operators often run fixed-departure batches for the Kashmir Great Lakes and Tarsar Marsar treks."
            }
          ],
          "faqs": [
            {
              "q": "What adventure activities can I do in Kashmir?",
              "a": "Skiing, snowboarding, trekking, river rafting, paragliding, camping, ATV rides and cycling, depending on the season."
            },
            {
              "q": "When can I raft in Kashmir?",
              "a": "From about May to September on the Lidder and Sindh rivers."
            },
            {
              "q": "Is the Kashmir Great Lakes trek difficult?",
              "a": "It is moderate to difficult, with high passes above 4,000 m. Fit trekkers with some experience manage it with a registered operator."
            },
            {
              "q": "Can beginners ski in Gulmarg?",
              "a": "Yes. Beginner slopes and registered instructors are available near the Gondola base."
            },
            {
              "q": "Is paragliding available in Kashmir?",
              "a": "At a few sites in some seasons, with licensed pilots; check availability before planning."
            },
            {
              "q": "What are easy hikes in Kashmir for beginners?",
              "a": "Khilanmarg from Gulmarg, Thajiwas from Sonamarg, Aru's meadows and Doodhpathri."
            },
            {
              "q": "Do I need insurance for adventure activities in Kashmir?",
              "a": "Yes, buy travel insurance that covers adventure activities and evacuation."
            },
            {
              "q": "What is a good 5-night adventure plan for Kashmir?",
              "a": "Srinagar kayaking, Sonamarg rafting, Pahalgam rafting and hikes, and Gulmarg's gondola and ATVs."
            },
            {
              "q": "Can families do adventure activities in Kashmir?",
              "a": "Yes, with easy rafting, pony rides, the gondola and short hikes; check age limits."
            },
            {
              "q": "Can I do adventure activities in Gurez?",
              "a": "Yes, trekking, camping, fishing and village walks in summer with registered operators."
            },
            {
              "q": "How do I choose an adventure operator in Kashmir?",
              "a": "Registered with J&K Tourism, with trained guides, good gear, small groups and clear safety plans."
            },
            {
              "q": "Can solo travellers join adventure trips in Kashmir?",
              "a": "Yes, through fixed-departure group treks, ski courses and rafting trips."
            },
            {
              "q": "What is the best month for adventure in Kashmir?",
              "a": "June to September for treks and rafting; January to March for skiing in Gulmarg."
            },
            {
              "q": "Do adventure packages include gear?",
              "a": "Treks usually include tents and sleeping bags; rafting includes life jackets and helmets; ski gear is hired locally. Check that your operator is registered with J&K Tourism and that gear is in good condition before you start."
            },
            {
              "q": "Is Kashmir good for a first adventure trip?",
              "a": "Yes, with easy rafting on the Lidder, day hikes from Aru and Sonamarg, the gondola and beginner ski lessons in Gulmarg."
            }
          ]
        },
        "group-tour-packages": {
          "blocks": [
            {
              "heading": "How group tours to Kashmir work",
              "body": "Group tours to Kashmir follow the classic route, Srinagar, Gulmarg, Sonamarg and Pahalgam, with a tempo traveller, Force Urbania or mini bus for the whole group, hotels with enough rooms together and a single itinerary. Groups of friends, families, offices, schools, pilgrims and clubs all travel this way. The cost per person falls as the group grows because vehicles are priced per vehicle and hotels often offer group rates."
            },
            {
              "heading": "Vehicles for group tours",
              "body": "Groups of 9 to 17 travel in a tempo traveller or Force Urbania; larger groups take a mini bus of 20 to 26 seats or two vans. In Pahalgam and Sonamarg, the group switches to union taxis for Aru, Betaab, Chandanwari and Zero Point, so plan several cabs. In winter, large vehicles can be stopped at Tangmarg after snowfall, and the group may need smaller 4x4 taxis for the last climb to Gulmarg."
            },
            {
              "heading": "Stays for groups",
              "body": "Book a whole Deluxe houseboat for a night on the lake, hotels with blocks of rooms on the same floor in Srinagar, JKTDC huts or larger hotels in Gulmarg and Pahalgam, and family rooms for parents with children. Ask for a dining hall or separate seating for group meals, and confirm that the hotel has parking for the group's vehicle."
            },
            {
              "heading": "Planning a group tour",
              "body": "Appoint one coordinator to deal with the agent and driver. Collect every member's ID details for checkposts and hotel registration. Agree the budget, the itinerary and optional extras such as skiing or rafting. Book flights together where possible. Share a daily schedule with start times and meeting points. Keep a group kitty for union taxis, tips and snacks."
            },
            {
              "heading": "Group tours for schools, offices and pilgrims",
              "body": "School groups need verified drivers, seat belts, fixed timings and teachers' rooms close to students. Office groups often combine a Srinagar hotel base with team activities such as rafting, snow games or a wazwan dinner. Pilgrim groups add Vaishno Devi, Kheer Bhawani, Shankaracharya and, in July and August, the Amarnath Yatra base camps."
            },
            {
              "heading": "Group tour sizes and vehicles",
              "body": "For 6 to 7 people, an Innova Crysta works well. For 9 to 12, a 12 or 13 seater tempo traveller with a roof carrier is common. For 14 to 17, a 17 seater tempo traveller or Force Urbania gives more space. Larger groups use a 26 to 35 seater bus or several vehicles. Choose vehicles with good tyres and, in winter, chains."
            },
            {
              "heading": "Group stays: hotels and houseboats",
              "body": "Groups usually stay in hotels with enough rooms on the same floor, family rooms or extra beds, and a dining area for group meals. A whole houseboat can host a group of six to ten for one night. In Gulmarg and Pahalgam, book early, since hotels with many rooms fill quickly in peak season."
            },
            {
              "heading": "Group itineraries",
              "body": "A typical 6-night group itinerary spends three nights in Srinagar with day trips to Gulmarg and Sonamarg, two nights in Pahalgam and one night on houseboats. Keep a fixed daily schedule, start early to avoid crowds, and allow free time for shopping. Large groups should avoid peak Amarnath Yatra weeks on the Pahalgam and Sonamarg roads."
            },
            {
              "heading": "Corporate groups and offsites",
              "body": "Companies hold offsites and incentive trips in Kashmir, combining meetings in Srinagar's hotels with team activities such as shikara races, treks, skiing lessons in Gulmarg and rafting in Pahalgam. Choose hotels with conference rooms, reliable Wi-Fi and group dining, and plan transport carefully."
            },
            {
              "heading": "School and college groups",
              "body": "School and college groups benefit from educational visits to the old city's crafts, the Mughal Gardens, the Kargil War Memorial on longer trips, and nature walks. Appoint teacher coordinators, carry a list of students' IDs and emergency contacts, keep strict timings and choose hotels used to student groups."
            },
            {
              "heading": "Pilgrim groups",
              "body": "Pilgrim groups often combine Vaishno Devi, Amarnath, Kheer Bhawani, Hazratbal and Shankaracharya with Kashmir sightseeing. Plan around yatra registration and convoy timings, book base camp stays early, and choose vehicles suited to the routes."
            },
            {
              "heading": "Group cost sharing and payments",
              "body": "Agree on the budget and what is shared before the trip: vehicle, rooms, meals and union taxis. Activities such as the gondola, ponies and rafting are usually paid by each person. One coordinator should handle bookings and keep receipts. A group rate can lower the cost per person."
            },
            {
              "heading": "Group tours in winter",
              "body": "Groups visiting in winter should choose centrally heated hotels with enough rooms, vehicles with chains and experienced drivers, and a buffer day for flight delays. Gulmarg's snow, skiing lessons and sledging are big hits with groups. Book early for December and January."
            },
            {
              "heading": "Group tours with Ladakh",
              "body": "Groups combining Kashmir and Ladakh in summer usually drive from Srinagar to Leh over two days, then hire Ladakh-registered tempo travellers or taxis in Leh for Nubra and Pangong. Plan 10 to 12 nights with rest days in Leh."
            },
            {
              "heading": "Group safety and coordination",
              "body": "Keep the group together at crowded sights, share a group chat with live locations, agree meeting points, and keep a list of everyone's IDs, medical needs and emergency contacts. One coordinator should liaise with the driver and agent."
            },
            {
              "heading": "Group meals and dining",
              "body": "Hotels can arrange group buffets and set menus, including a wazwan dinner for the whole group. Tell the hotel about vegetarian, Jain and other dietary needs in advance. For lunches on day trips, ask the driver to stop at restaurants that can serve groups quickly."
            },
            {
              "heading": "Group packages for families and friends",
              "body": "Extended families and friends often travel as groups of 8 to 20. A whole houseboat, adjoining hotel rooms, a tempo traveller and fixed group meals keep everyone together. Agree on shared and individual costs before the trip."
            },
            {
              "heading": "Group packages in summer",
              "body": "Summer group trips need early bookings for hotels with many rooms, vehicles and gondola tickets. Avoid peak Amarnath Yatra weeks on the Pahalgam and Sonamarg roads, and plan early starts to beat crowds."
            },
            {
              "heading": "Group packages with Vaishno Devi",
              "body": "Many groups start with Vaishno Devi, travelling by train to Katra, then by tempo traveller or the Vande Bharat to Srinagar. Book helicopter tickets or ponies early for older members."
            },
            {
              "heading": "Group packages in winter in detail",
              "body": "Winter group trips need vehicles with chains and experienced drivers, centrally heated hotels with many rooms, warm clothing for everyone, and a buffer day for delays. Skiing lessons, sledging and the gondola make Gulmarg the highlight. Book December and January early."
            },
            {
              "heading": "Group packages for senior citizens",
              "body": "Senior groups do best with a comfortable tempo traveller or bus with a step, hotels with lifts, short sightseeing days, the Phase 1 gondola, rest afternoons and a coordinator who keeps a list of medical needs. Wheelchairs can be arranged at the airport and some gardens."
            }
          ],
          "faqs": [
            {
              "q": "What vehicle is best for a Kashmir group tour?",
              "a": "A tempo traveller or Force Urbania for 9 to 17 people, a mini bus for larger groups."
            },
            {
              "q": "Can a group stay on a houseboat?",
              "a": "Yes. Booking a whole Deluxe houseboat with three or four bedrooms is popular with groups."
            },
            {
              "q": "Is a group tour cheaper per person?",
              "a": "Usually, because vehicles are priced per vehicle and hotels often give group rates."
            },
            {
              "q": "Do large vehicles reach Gulmarg in winter?",
              "a": "Not always. After snowfall, groups may switch to smaller 4x4 taxis at Tangmarg."
            },
            {
              "q": "What vehicle suits a group of 12 in Kashmir?",
              "a": "A 12 or 13 seater tempo traveller with a roof carrier."
            },
            {
              "q": "Can companies hold offsites in Kashmir?",
              "a": "Yes, in Srinagar hotels with conference rooms, combined with team activities."
            },
            {
              "q": "Are school groups common in Kashmir?",
              "a": "Yes, with teacher coordinators, strict timings and student-friendly hotels."
            },
            {
              "q": "Can groups combine Kashmir and Ladakh?",
              "a": "Yes, in summer, with Ladakh-registered vehicles in Leh and 10 to 12 nights."
            },
            {
              "q": "Can hotels arrange a wazwan for a group?",
              "a": "Yes, ask in advance for a group wazwan dinner."
            },
            {
              "q": "Can groups start with Vaishno Devi?",
              "a": "Yes, by train to Katra, then by tempo traveller or Vande Bharat to Srinagar."
            },
            {
              "q": "Can groups visit Kashmir in winter?",
              "a": "Yes, with heated hotels, vehicles with chains and a buffer day for delays."
            },
            {
              "q": "Are group tours good for senior citizens?",
              "a": "Yes, with a comfortable vehicle, hotels with lifts and short sightseeing days."
            },
            {
              "q": "How early should groups book Kashmir?",
              "a": "Three to four months ahead for May, June and the holidays, since groups need many rooms and large vehicles."
            },
            {
              "q": "Can a group book the whole houseboat?",
              "a": "Yes, a whole houseboat suits groups of six to ten for one night. Confirm adjoining rooms and the vehicle size in writing, and share a list of all travellers' IDs with the agent."
            },
            {
              "q": "Do group packages include union taxis in Pahalgam?",
              "a": "Usually not; groups need several union taxis for Aru, Betaab and Chandanwari, paid at the stand."
            }
          ]
        },
        "luxury-tour-packages": {
          "blocks": [
            {
              "heading": "What a luxury Kashmir package includes",
              "body": "A luxury Kashmir package combines the valley's finest stays with private, unhurried travel: a palace or lake-view hotel in Srinagar such as The LaLiT Grand Palace or Taj Dal View, a Deluxe houseboat booked for your party, a resort near the Gulmarg Gondola such as Khyber Himalayan Resort and Spa, an upscale riverside hotel in Pahalgam such as Welcomhotel Pine N Peak, and transfers in an Innova Crysta or premium SUV with an experienced driver."
            },
            {
              "heading": "Private experiences on a luxury trip",
              "body": "A sunrise shikara with breakfast on the water, a private wazwan dinner with a waza, a heritage walk with a historian through old Srinagar, a visit to a pashmina or carpet workshop, a timed Gondola trip with a guide on Apharwat, a private union taxi day in Pahalgam with a riverside picnic, a round of golf at Royal Springs or Gulmarg, and spa treatments after long drives."
            },
            {
              "heading": "Luxury in each season",
              "body": "Spring brings tulips, blossom and palace lawns at their best. Summer brings cool Gulmarg and Pahalgam while the plains swelter. Autumn turns the chinars gold and is often better value. Winter brings snow, skiing and fireside evenings, with central heating and spas making the difference."
            },
            {
              "heading": "How to judge a luxury quote",
              "body": "Insist on named hotels and room categories, not hotels described as similar. Check views, heating, meal plans, the vehicle model, private transfers and the experiences included. Ask about festive surcharges at Christmas and New Year and about flexibility if weather delays a flight."
            },
            {
              "heading": "Luxury stays in Srinagar",
              "body": "Srinagar's luxury stays include heritage palace hotels with gardens overlooking Dal Lake, five-star hotels on the Zabarwan hills with views over the water, and boutique heritage homes in restored old houses. Luxury houseboats on Nigeen and Dal offer suites with carved walnut interiors, modern bathrooms, butler service and private shikaras. Many luxury travellers split their Srinagar nights between a palace hotel and a luxury houseboat."
            },
            {
              "heading": "Luxury stays in Gulmarg and Pahalgam",
              "body": "Gulmarg has a small number of high-end resorts with ski-in access, spas, fine dining and views of the Pir Panjal, which sell out early in the ski season. Pahalgam's luxury resorts sit by the Lidder river among pine forests, with spacious rooms, lawns, spas and excellent restaurants. Ask for rooms with mountain or river views."
            },
            {
              "heading": "Private experiences to add",
              "body": "Luxury packages can include a private shikara with a picnic on Dal Lake, a private wazwan dinner cooked by a waza at your hotel or houseboat, a guided heritage walk in the old city with a historian, a visit to a pashmina or carpet workshop with the artisans, private ski instruction in Gulmarg and a private golf round at Royal Springs or Gulmarg."
            },
            {
              "heading": "Luxury vehicles and chauffeurs",
              "body": "Luxury packages usually include a premium vehicle, such as an Innova Crysta, Toyota Fortuner or a luxury sedan, with an experienced, English-speaking driver for the whole trip. Ask for the vehicle model in writing. Remember that union taxis are still required for Pahalgam's sightseeing points and Sonamarg's Zero Point."
            },
            {
              "heading": "Luxury for honeymooners and anniversaries",
              "body": "Couples celebrating a honeymoon or anniversary can ask for suite upgrades, flowers and cake, a private candlelight dinner, couples' spa treatments, a photographer in traditional Kashmiri dress and a private sunrise shikara to the floating market. These touches make a luxury trip memorable."
            },
            {
              "heading": "Luxury and wellness",
              "body": "Several luxury hotels in Srinagar, Gulmarg and Pahalgam have spas offering massages, ayurvedic treatments and saunas. A wellness day after a ski week or a long road trip is a welcome addition. Book treatments in advance in peak season."
            },
            {
              "heading": "When to book a luxury trip",
              "body": "Luxury properties have limited rooms and fill quickly for April, May, June, October and the Christmas and New Year holidays, as well as Gulmarg's ski season. Book three to six months ahead for these periods, and confirm named rooms or suites in writing."
            },
            {
              "heading": "A 7-night luxury Kashmir plan",
              "body": "Nights 1 and 2: a heritage palace hotel in Srinagar, with a private shikara picnic, the Mughal Gardens and a guided old city walk. Night 3: a luxury houseboat on Nigeen with butler service. Nights 4 and 5: a riverside luxury resort in Pahalgam, with Betaab, Aru and Chandanwari by union taxi and a spa afternoon. Nights 6 and 7: a high-end resort in Gulmarg, with the gondola, private ski or snow lessons and fine dining, before returning to Srinagar for the flight."
            },
            {
              "heading": "Luxury dining in Kashmir",
              "body": "Luxury hotels in Srinagar serve fine Kashmiri, Mughlai, continental and Asian cuisine, and can arrange a private wazwan with a waza. Houseboat chefs prepare elaborate meals on request. Ask for a private dining setup on a lawn, a terrace overlooking Dal Lake or a houseboat verandah for special evenings."
            },
            {
              "heading": "Luxury shopping experiences",
              "body": "Luxury travellers can arrange private viewings of fine pashmina, kani shawls and silk carpets at established showrooms, with demonstrations of weaving and embroidery. Ask for certificates of authenticity, GI tags for pashmina and knot counts for carpets, and use shops that ship purchases securely."
            },
            {
              "heading": "Luxury in winter",
              "body": "A luxury winter trip combines centrally heated palace hotels, heated luxury houseboats and Gulmarg's best resorts during the ski season. Private ski instruction, snow photography sessions and warm spa evenings make winter luxury special. Book early for Christmas and New Year."
            },
            {
              "heading": "How luxury quotes differ",
              "body": "Luxury quotes vary mainly with the choice of properties, room categories and suites, the vehicle and chauffeur, private experiences and meal plans. Ask for the exact property and room type for each night, the vehicle model, what is included, and the cancellation policy."
            },
            {
              "heading": "Luxury packages with Ladakh",
              "body": "Luxury travellers can extend to Ladakh with boutique hotels in Leh, luxury camps in Nubra and at Pangong with heated tents and attached bathrooms, a private SUV with an experienced driver and private guided monastery visits. Plan rest days in Leh."
            },
            {
              "heading": "Luxury for families",
              "body": "Luxury family packages include interconnecting rooms or suites, private cars, child-friendly dining, private shikara rides and private guides who can adapt to children's pace."
            },
            {
              "heading": "Luxury in spring and autumn",
              "body": "Spring brings tulips, blossom and snow in the mountains, best enjoyed from a palace hotel's gardens and a Gulmarg resort. Autumn brings golden chinars and clear skies, ideal for private shikara picnics and heritage walks. Both seasons are quieter than summer."
            },
            {
              "heading": "Luxury and accessibility",
              "body": "Luxury properties are often best for travellers with limited mobility, with lifts, wide doors, ground-floor suites and attentive staff. Ask about accessible rooms, wheelchair access to restaurants and gardens, and help with shikara boarding."
            }
          ],
          "faqs": [
            {
              "q": "Which are the best luxury hotels in Kashmir?",
              "a": "The LaLiT Grand Palace and Taj Dal View in Srinagar, Khyber in Gulmarg and Welcomhotel Pine N Peak in Pahalgam are among the best known."
            },
            {
              "q": "Is a luxury houseboat part of a luxury package?",
              "a": "Usually yes, often a Deluxe houseboat booked for your party for one or two nights."
            },
            {
              "q": "When should I book a luxury Kashmir trip?",
              "a": "Two to three months ahead for spring, summer and the winter holidays."
            },
            {
              "q": "Are there luxury houseboats in Srinagar?",
              "a": "Yes, on Nigeen and Dal, with suites, carved interiors, butler service and private shikaras."
            },
            {
              "q": "Can a luxury package include a private wazwan?",
              "a": "Yes, cooked by a waza at your hotel or houseboat."
            },
            {
              "q": "Are there spas in Kashmir hotels?",
              "a": "Yes, several luxury hotels in Srinagar, Gulmarg and Pahalgam have spas."
            },
            {
              "q": "What is a good 7-night luxury Kashmir plan?",
              "a": "Palace hotel in Srinagar, a luxury houseboat, a Pahalgam riverside resort and a high-end Gulmarg resort."
            },
            {
              "q": "Can luxury travellers arrange private shopping viewings?",
              "a": "Yes, at established pashmina and carpet showrooms, with certificates of authenticity."
            },
            {
              "q": "Is a luxury Kashmir trip good in winter?",
              "a": "Yes, with heated palace hotels, luxury houseboats and Gulmarg resorts in the ski season."
            },
            {
              "q": "Can a luxury trip include Ladakh?",
              "a": "Yes, with boutique Leh hotels, luxury camps and a private SUV."
            },
            {
              "q": "Are luxury hotels in Kashmir accessible?",
              "a": "Many have lifts and ground-floor suites; ask about accessible rooms when booking."
            },
            {
              "q": "Do luxury packages include a private car?",
              "a": "Yes, usually a premium vehicle with an experienced driver for the whole trip."
            },
            {
              "q": "Are luxury rooms limited in Gulmarg?",
              "a": "Yes, Gulmarg has few high-end rooms, so book early for the ski season. Ask for the model in writing."
            }
          ]
        },
        "solo-tour-packages": {
          "blocks": [
            {
              "heading": "How solo Kashmir trips work",
              "body": "Solo travellers in Kashmir usually book a private package with a trusted driver for the whole trip, stay in well-reviewed hotels or family-run houseboats, and follow the classic route of Srinagar, Gulmarg, Sonamarg and Pahalgam. Others join small-group tours or fixed-departure treks to share costs and meet people. Because cars are priced per vehicle, solo trips cost more per person; shared cabs and group departures bring that down."
            },
            {
              "heading": "A 6-night solo plan",
              "body": "Night 1 and 2: a family-run Deluxe houseboat on Nigeen, with a sunset shikara and a heritage walk in the old city. Day 3: Gulmarg with the Gondola. Day 4: Sonamarg and Thajiwas. Nights 5 and 6: a well-reviewed hotel near Pahalgam's market, with Betaab and Aru by union taxi arranged by the hotel. Day 7: back to Srinagar and fly home. Keep the same driver throughout."
            },
            {
              "heading": "Safety and comfort for solo travellers",
              "body": "Book drivers and stays through trusted agents or well-reviewed hotels, share your plans with your host each day, keep travel to daylight hours on mountain roads, carry ID and a postpaid SIM, and dress modestly. Families on houseboats and in homestays often look after solo guests warmly. In an emergency, dial 112."
            },
            {
              "heading": "Meeting other travellers",
              "body": "Backpacker hostels near Dal Gate, fixed-departure group tours, Gulmarg ski schools in winter and trekking groups on the Great Lakes trek in summer are the easiest places to meet other travellers and share cabs."
            },
            {
              "heading": "Solo packages: what they include",
              "body": "A solo package usually includes single-occupancy rooms in hotels and a houseboat, a private car with driver or seat-in-coach transfers, breakfast and dinner, and sightseeing in Srinagar, Gulmarg, Pahalgam and Sonamarg. Some agents offer fixed-departure group tours that solo travellers can join, which lowers costs and adds company."
            },
            {
              "heading": "Solo travel costs and how to lower them",
              "body": "Solo travellers pay more per person because they cover a whole room and vehicle. To lower costs, join a fixed-departure group tour, use shared taxis for day trips, stay in hostels or guesthouses in Srinagar, choose shoulder months and book a standard houseboat for one night."
            },
            {
              "heading": "Solo travel in each season",
              "body": "Spring brings tulips and snow in the mountains; summer is busy and lively; autumn is quiet and golden, ideal for solo travellers who enjoy photography; winter brings snow, skiing and cosy evenings but needs more planning. Shoulder months are easiest for solo travellers looking for availability and lower costs."
            },
            {
              "heading": "Solo travel and treks",
              "body": "Solo travellers can join group treks with registered operators, such as the Kashmir Great Lakes and Tarsar Marsar, sharing tents and meals with other trekkers. This is a safe and social way to explore Kashmir's mountains."
            },
            {
              "heading": "Staying connected as a solo traveller",
              "body": "Carry a postpaid SIM, since prepaid connections from outside J&K do not work. Share your itinerary with family, keep your phone charged and save your hotel, driver and agent contacts. Many hotels and cafes have Wi-Fi."
            },
            {
              "heading": "Solo travel for women",
              "body": "Solo women travellers usually feel comfortable in Kashmir with a reputable agent, a trusted driver, central hotels and modest clothing. Arrange airport pickup in advance, avoid travelling after dark on unfamiliar roads, and join group activities where possible."
            },
            {
              "heading": "A 5-night solo plan",
              "body": "Night 1: Srinagar, a central hotel or hostel, evening walk on the Boulevard. Night 2: a standard houseboat on Nigeen, sunrise floating market. Day 3: Gulmarg by shared or private car, gondola Phase 1. Nights 4 and 5: Pahalgam guesthouse, union taxi to Betaab and Aru, riverside walks. Return to Srinagar for departure."
            },
            {
              "heading": "Meeting other travellers in Kashmir",
              "body": "Hostels in Srinagar, cafes on the Boulevard and in Rajbagh, group treks and fixed-departure tours are the easiest ways to meet other travellers. Houseboat hosts and guesthouse owners are often happy to share advice and introduce you to others."
            },
            {
              "heading": "Solo travel and Ladakh",
              "body": "Many solo travellers continue from Kashmir to Ladakh by shared taxi or bus via Kargil, or by flight. Leh is very popular with solo travellers, with hostels, cafes and shared tours to Nubra and Pangong that make Ladakh affordable alone."
            },
            {
              "heading": "Solo travel on a budget",
              "body": "Solo travellers can save with hostels or guesthouses in Srinagar, shared Sumo taxis for Gulmarg, Pahalgam and Sonamarg, a standard houseboat night, local food and shoulder-season travel. Joining a fixed-departure group tour also lowers the per-person cost."
            },
            {
              "heading": "Solo travel in winter",
              "body": "Winter solo trips are rewarding but need more planning: centrally heated hotels, a trusted driver, waterproof clothing and a buffer day for flight delays. Gulmarg's ski schools are a good way to meet other travellers."
            },
            {
              "heading": "Solo travel safety",
              "body": "Use a registered agent or hotel, book a trusted driver, share your itinerary with family, carry a postpaid SIM, avoid driving after dark on mountain roads and follow local advice. Most solo travellers find Kashmir welcoming and hospitable."
            },
            {
              "heading": "Solo travel for older travellers",
              "body": "Older solo travellers can enjoy Kashmir with a private car and trusted driver, central hotels with lifts, a Nigeen houseboat reached by walkway, the Phase 1 gondola and gentle sightseeing days. Share the itinerary with family and carry regular medicines."
            },
            {
              "heading": "Solo travel and photography",
              "body": "Kashmir is a photographer's dream for solo travellers: sunrise on Dal Lake, the Mughal Gardens, Gulmarg's snowfields, Pahalgam's rivers and Sonamarg's glaciers. A private driver lets you stop for the light, and autumn is especially rewarding."
            },
            {
              "heading": "Solo packages with Vaishno Devi",
              "body": "Solo travellers often start with Vaishno Devi, taking a train to Katra, staying in a shrine board dharamshala or budget hotel, completing the yatra on foot or by pony, and then taking the Vande Bharat to Srinagar. It is an easy, affordable route."
            },
            {
              "heading": "Solo travel and houseboats",
              "body": "A night on a houseboat is safe and welcoming for solo travellers, with host families who cook meals and arrange shikara transfers. Nigeen houseboats are quieter and some are reached by walkway. Choose registered boats with good reviews from solo guests."
            }
          ],
          "faqs": [
            {
              "q": "Is Kashmir good for solo travellers?",
              "a": "Yes. Many solo travellers visit every year, staying with trusted hosts and using a regular driver."
            },
            {
              "q": "How can a solo traveller save money in Kashmir?",
              "a": "Use Srinagar as a base, take shared cabs on some routes, stay in hostels or guest houses and join group tours."
            },
            {
              "q": "Can solo women book a Kashmir package?",
              "a": "Yes. Choose family-run houseboats or well-reviewed hotels and a trusted driver."
            },
            {
              "q": "Can solo travellers join group tours in Kashmir?",
              "a": "Yes, fixed-departure group tours lower costs and add company."
            },
            {
              "q": "Is Kashmir good for solo trekking?",
              "a": "Yes, by joining group treks with registered operators."
            },
            {
              "q": "Which SIM should a solo traveller carry in Kashmir?",
              "a": "A postpaid SIM, since prepaid connections from outside J&K do not work."
            },
            {
              "q": "What is the best season for solo travel in Kashmir?",
              "a": "Shoulder months such as April, September and October, for availability and lower costs."
            },
            {
              "q": "What is a good 5-night solo Kashmir plan?",
              "a": "Srinagar, a Nigeen houseboat, a Gulmarg day and two nights in Pahalgam."
            },
            {
              "q": "Can solo travellers go from Kashmir to Ladakh?",
              "a": "Yes, by shared taxi, bus or flight; Leh has hostels and shared tours."
            },
            {
              "q": "Is Kashmir safe for solo travellers?",
              "a": "Yes, with a registered agent, a trusted driver and a shared itinerary."
            },
            {
              "q": "Can older travellers visit Kashmir solo?",
              "a": "Yes, with a private car, central hotels and gentle sightseeing days."
            },
            {
              "q": "Is a houseboat good for a solo traveller?",
              "a": "Yes, choose a registered boat with good reviews; Nigeen is quieter."
            },
            {
              "q": "Do solo travellers pay more in Kashmir?",
              "a": "Usually yes per person, since they cover a whole room and car; group tours and hostels lower the cost."
            },
            {
              "q": "Is Kashmir good for solo women travellers?",
              "a": "Yes, with a reputable agent, a trusted driver, central hotels and modest clothing. Share your itinerary with family, keep a postpaid phone charged and save your driver's and hotel's numbers."
            },
            {
              "q": "How many days does a solo Kashmir trip need?",
              "a": "Five to six nights covers Srinagar, a houseboat, Gulmarg and Pahalgam at a relaxed pace, with Sonamarg as a day trip."
            }
          ]
        },
        "family-packages": {
          "blocks": [
            {
              "heading": "A 6-night family plan",
              "body": "Night 1: Srinagar, family hotel or whole houseboat, gentle shikara ride. Night 2: Srinagar, Mughal Gardens and the Tulip Garden in season. Day 3: Gulmarg day trip with the Phase 1 gondola and sledges. Nights 4 and 5: Pahalgam, Betaab Valley and Chandanwari by union taxi, riverside evenings. Night 6: Srinagar, Sonamarg day trip if the children are not tired, then departure."
            },
            {
              "heading": "Family packages with grandparents",
              "body": "Three-generation trips do best with two bases, short daily drives, rest afternoons, an Innova Crysta or tempo traveller, ground-floor or lift-served rooms, and activities for all ages such as shikara rides, gardens, the Phase 1 gondola and pony rides."
            },
            {
              "heading": "Family packages in winter",
              "body": "Winter family packages focus on snow: Gulmarg's sledging, gondola and skiing lessons for older children, and Pahalgam's snowbound river valley. Choose centrally heated family rooms, pack waterproof clothing, keep outdoor time short, and add a buffer day for flight delays."
            },
            {
              "heading": "Family packages in summer",
              "body": "Summer is the most popular family season because of school holidays. Book early, plan early starts to beat the crowds, and include Sonamarg's snow at Thajiwas, rafting for older children in Pahalgam, pony rides and the gondola."
            },
            {
              "heading": "Family packages with Vaishno Devi",
              "body": "Many families combine Kashmir with Vaishno Devi: train to Katra, two nights for the yatra with ponies, palkis or the helicopter for older members, then the Vande Bharat to Srinagar. Children enjoy the train journey over the Chenab bridge."
            },
            {
              "heading": "Family packages in spring and autumn",
              "body": "April brings tulips and snow for children in Gulmarg and Sonamarg, with fewer crowds than May. October brings golden colours and clear skies, ideal for families who can travel in the Diwali or autumn breaks. Both seasons need warm layers."
            }
          ],
          "faqs": [
            {
              "q": "What is a good 6-night Kashmir family plan?",
              "a": "Three nights in Srinagar with a Gulmarg day trip, two in Pahalgam and a houseboat night."
            },
            {
              "q": "Are family packages available in winter?",
              "a": "Yes, with heated family rooms and snow activities in Gulmarg and Pahalgam."
            },
            {
              "q": "When should families book Kashmir for summer?",
              "a": "Three to four months ahead for May and June school holidays."
            },
            {
              "q": "Can families combine Kashmir with Vaishno Devi?",
              "a": "Yes: two nights in Katra, then the Vande Bharat to Srinagar."
            },
            {
              "q": "Is April good for a Kashmir family trip?",
              "a": "Yes, with tulips in Srinagar and snow for children in Gulmarg and Sonamarg. Pack warm layers for the mountains."
            },
            {
              "q": "Which hotels suit families in Pahalgam?",
              "a": "Riverside hotels with lawns, family rooms and heating, a short walk from the market."
            }
          ]
        }
      },
      "fromOrigins": {
        "nashik": {
          "blocks": [
            {
              "heading": "Flights and trains from Nashik to Srinagar in more detail",
              "body": "Most travellers from Nashik fly from Mumbai, about 165 to 170 km and 3.5 to 4.5 hours by road, which has the most direct and one-stop flights to Srinagar. Pune is another option. Nashik's own airport at Ozar has limited flights, usually connecting through Delhi or another hub."
            },
            {
              "heading": "Food in Kashmir for travellers from Nashik",
              "body": "Travellers from Nashik often prefer vegetarian food, and Kashmir has plenty: Kashmiri dum aloo, haak, rajma, nadru yakhni and chaman kaliya, along with North Indian and South Indian food in Srinagar. Jain meals can be arranged with notice. Many hotels also cook simple dal, rice and roti on request."
            },
            {
              "heading": "Kashmir weather compared with Nashik",
              "body": "Coming from Nashik's warm, dry summers and mild winters, Kashmir in May and June feels pleasantly cool, while December to February is far colder than anything at home, with sub-zero nights and snow in Gulmarg. Pack proper woollens even in April and October, when Kashmir's nights are cold."
            },
            {
              "heading": "When travellers from Nashik usually go",
              "body": "Families from Nashik often travel in the May and June school holidays and around Diwali in October or November, when Kashmir's chinars turn gold. Christmas and New Year suit those who want snow. Book early for May and June, the busiest weeks for Maharashtra travellers."
            },
            {
              "heading": "Vaishno Devi and Kashmir from Nashik",
              "body": "Many Nashik families combine Kashmir with Vaishno Devi: fly or take a train to Jammu, spend two nights in Katra for the yatra, then take the Vande Bharat to Srinagar. Nashik's own pilgrim traditions make this combination popular."
            },
            {
              "heading": "Kashmir family trip from Nashik",
              "body": "Families from Nashik usually prefer a 6 or 7 night plan with Srinagar as the base, a houseboat night, Gulmarg and Sonamarg as day trips and two nights in Pahalgam. Choose an Innova or Innova Crysta for comfort, hotels with family rooms and heating in winter, and ponies or sledges for children. Elderly parents travel more comfortably with ground-floor rooms and short sightseeing days."
            },
            {
              "heading": "Kashmir honeymoon from Nashik",
              "body": "Couples from Nashik often choose a 6-night honeymoon with a Deluxe houseboat on Nigeen or Dal, a resort night in Gulmarg, two nights by the Lidder in Pahalgam and a final night back on the lake. Ask for a private decorated shikara, a candlelight dinner and room upgrades. April, October and the snowy months of December to February are favourite honeymoon seasons."
            },
            {
              "heading": "Group and friends' trips from Nashik",
              "body": "Groups from Nashik usually book a tempo traveller or Force Urbania for 9 to 17 people, a whole houseboat for the group and hotels with rooms together. Remember that union taxis serve Pahalgam's and Sonamarg's sightseeing points, so the group will need several local cabs there. Share a list of everyone's IDs for checkposts and appoint one coordinator."
            },
            {
              "heading": "Packing list for travellers from Nashik",
              "body": "Layers for every season, a warm jacket even in summer for Gulmarg and Sonamarg, thermals, gloves and waterproof boots from December to February, comfortable walking shoes, sunglasses and sunscreen, modest clothes for shrines, original photo IDs for everyone, a postpaid SIM, because prepaid connections from outside J&K do not work, and some cash for ponies, shikaras and union taxis."
            },
            {
              "heading": "First and last day of a Kashmir trip from Nashik",
              "body": "Most Nashik travellers fly from Mumbai, so the trip usually starts with an early drive or train to Mumbai airport and a midday arrival in Srinagar. Plan a gentle first afternoon: check in to a houseboat or lake-view hotel, take a sunset shikara and have an early dinner. On the last day, keep a morning activity close to Srinagar, such as the Mughal Gardens or a craft workshop, and leave for the airport with a buffer, since security checks at Srinagar airport can take time."
            },
            {
              "heading": "Kashmir by train from Nashik",
              "body": "Nashik Road station has trains to Delhi and onward connections to Jammu Tawi and Katra, where the Vande Bharat continues to Srinagar; the rail journey takes about two days. The train suits travellers who prefer rail, families with lots of luggage and pilgrims combining Vaishno Devi. Book early on IRCTC, especially for May, June and the festive season."
            },
            {
              "heading": "When Nashik travellers go, and why",
              "body": "Most travellers from Nashik visit Kashmir in May and June, Diwali, and Christmas. Nashik's grape and wine country makes its travellers keen on Kashmir's orchards: apple orchards on the Pahalgam road bloom in April and fruit from August to October, and saffron fields at Pampore flower in late October."
            },
            {
              "heading": "A 7-night Kashmir plan from Nashik",
              "body": "Night 1: Srinagar, houseboat or lake-view hotel and a sunset shikara. Night 2: Srinagar, Mughal Gardens and the old city. Day 3: Gulmarg day trip with the gondola. Nights 4 and 5: Pahalgam, with Aru, Betaab and Chandanwari by union taxi. Night 6: Srinagar, Sonamarg day trip. Night 7: Srinagar, shopping and a relaxed final evening before the flight or train home."
            },
            {
              "heading": "Kashmir and Ladakh from Nashik",
              "body": "Travellers from Nashik with 10 to 12 days in summer often add Ladakh: drive from Srinagar to Leh over two days via Zojila and Kargil, rest two days in Leh, visit Nubra and Pangong with a Ladakh-registered taxi, and fly home from Leh via Delhi. This route acclimatises you gradually and covers both regions in one trip."
            },
            {
              "heading": "Budget Kashmir trip from Nashik",
              "body": "To keep a trip from Nashik affordable, travel in March, early April, October or November outside holidays, take the train to Katra and the Vande Bharat to Srinagar, stay in Srinagar for most nights with Gulmarg and Sonamarg as day trips, share a vehicle and choose a standard houseboat for one night."
            },
            {
              "heading": "Winter trip from Nashik",
              "body": "For snow, travellers from Nashik usually visit from December to February. Gulmarg has the most reliable snow, Pahalgam is snowbound and quiet, and Sonamarg is reachable through the Z-Morh tunnel. Pack thermals, a heavy jacket, gloves, caps and waterproof boots, choose centrally heated hotels and keep a buffer day for flight delays."
            },
            {
              "heading": "Senior citizens travelling from Nashik",
              "body": "Older travellers from Nashik do best with direct or one-stop flights with wheelchair assistance, two bases rather than daily hotel changes, an Innova Crysta with an experienced driver, ground-floor or lift-served rooms, the Phase 1 gondola only, and rest afternoons. Consult a doctor before the trip and carry regular medicines."
            },
            {
              "heading": "What a Kashmir package from Nashik usually includes",
              "body": "Most packages include hotels and a houseboat night, breakfast and dinner, a private car with driver for transfers and sightseeing, and airport or station pickup and drop. Flights or trains, lunch, union taxis in Pahalgam and Sonamarg, ponies, gondola tickets and entry fees are usually extra. Ask for an itemised quote with named hotels."
            },
            {
              "heading": "Booking timeline for travellers from Nashik",
              "body": "Book three to four months ahead for May, June, Diwali and Christmas, and six to eight weeks ahead for other months. Book gondola tickets online as soon as dates are fixed. Convert prepaid SIMs to postpaid a week before travel, and carry original IDs for every traveller from Nashik."
            },
            {
              "heading": "Gifts to take home to Nashik",
              "body": "Travellers returning to Nashik usually buy saffron from Pampore, dry fruits such as walnuts and almonds, kahwa mix, papier-mache boxes, walnut wood items, embroidered stoles and pashmina shawls. Buy from established showrooms or government emporiums with bills, pack food items in sealed boxes for the flight or train, and check airline baggage limits before buying heavy items such as carpets, which shops can ship to Nashik."
            },
            {
              "heading": "Documents and phones for travellers from Nashik",
              "body": "Carry original photo ID for every traveller from Nashik, with printed copies, since hotels, houseboats, checkpoints and the gondola ask for ID. Convert prepaid SIMs to postpaid before the trip, because prepaid connections from outside J&K do not work in Kashmir. Save hotel, driver and agent numbers, and keep bookings offline."
            },
            {
              "heading": "Kashmir with children from Nashik",
              "body": "Families from Nashik should plan a slower pace: two bases, Srinagar and Pahalgam, short daily drives, rest afternoons, family rooms or a whole houseboat, ponies and sledges for children, and the Phase 1 gondola in Gulmarg. Pack layers and snacks for drives, and carry children's medicines. School holidays from Nashik fill flights early, so book ahead."
            },
            {
              "heading": "Kashmir for first-time visitors from Nashik",
              "body": "First-time visitors from Nashik usually want the classic highlights: a Dal Lake shikara and houseboat, the Mughal Gardens, Gulmarg's gondola, Sonamarg's Thajiwas glacier and Pahalgam's Aru and Betaab valleys. A 6 or 7 night plan covers all of them comfortably without rushing, with Srinagar as the base and two nights in Pahalgam."
            },
            {
              "heading": "Kashmir with Shirdi or Trimbakeshwar from Nashik",
              "body": "Many Nashik families visit Shirdi and Trimbakeshwar close to home, and some add Kashmir's shrines such as Kheer Bhawani, Shankaracharya and Hazratbal, along with Vaishno Devi on the way. A combined pilgrimage and holiday of 9 to 10 nights is common."
            },
            {
              "heading": "Kashmir in May from Nashik",
              "body": "May is the most popular month for Nashik families, with school holidays, pleasant weather and green valleys. Flights from Mumbai fill early and fares rise, so book two to three months ahead, or consider the train to Katra and the Vande Bharat to Srinagar."
            }
          ],
          "faqs": [
            {
              "q": "Which airport is best for flying from Nashik to Kashmir?",
              "a": "Most travellers from Nashik fly from Mumbai, about 165 to 170 km and 3.5 to 4.5 hours by road, which has the most direct and one-stop flights to Srinagar."
            },
            {
              "q": "Can travellers from Nashik combine Kashmir with Vaishno Devi?",
              "a": "Yes. Reach Jammu or Katra, spend two nights for the yatra, then take the Vande Bharat to Srinagar, about 3 hours."
            },
            {
              "q": "Is vegetarian food available in Kashmir for travellers from Nashik?",
              "a": "Yes. Srinagar has many vegetarian restaurants, and hotels across Kashmir cook vegetarian meals on request."
            },
            {
              "q": "Can I reach Kashmir by train from Nashik?",
              "a": "Nashik Road station has trains to Delhi and onward connections to Jammu Tawi and Katra, where the Vande Bharat continues to Srinagar; the rail journey takes about two days."
            },
            {
              "q": "What is the best month to visit Kashmir from Nashik?",
              "a": "Most travellers from Nashik go in May and June, Diwali, and Christmas; April and October are also beautiful and less crowded."
            },
            {
              "q": "Can I combine Kashmir and Ladakh from Nashik?",
              "a": "Yes, in summer with 10 to 12 days: drive Srinagar to Leh via Kargil and fly home from Leh."
            },
            {
              "q": "How many days are needed for Kashmir from Nashik?",
              "a": "Six to seven nights covers Srinagar, Gulmarg, Pahalgam and Sonamarg comfortably."
            },
            {
              "q": "What should I buy in Kashmir to take home to Nashik?",
              "a": "Saffron, dry fruits, kahwa mix, papier-mache, walnut wood items, embroidered stoles and pashmina from established shops."
            },
            {
              "q": "Will my prepaid SIM from Nashik work in Kashmir?",
              "a": "No. Prepaid connections from outside J&K do not work; convert to postpaid before travelling."
            },
            {
              "q": "Is Kashmir good for families from Nashik?",
              "a": "Yes, with a slow pace, two bases, family rooms and activities such as shikara rides, ponies and the gondola."
            },
            {
              "q": "Can Nashik pilgrims visit shrines in Kashmir?",
              "a": "Yes, Kheer Bhawani, Shankaracharya and Hazratbal, often with Vaishno Devi."
            },
            {
              "q": "Is May a good month to visit Kashmir from Nashik?",
              "a": "Yes, but book flights from Mumbai early, since school holidays raise demand."
            },
            {
              "q": "Should Nashik travellers fly from Mumbai or Pune?",
              "a": "Mumbai usually has more direct and one-stop flights; Pune is a good alternative."
            },
            {
              "q": "Can Nashik travellers take the train to Kashmir?",
              "a": "Yes, from Nashik Road to Delhi and on to Katra, then the Vande Bharat to Srinagar."
            },
            {
              "q": "How long is the drive from Nashik to Mumbai airport?",
              "a": "About 165 to 170 km, usually 3.5 to 4.5 hours depending on traffic. Leave early."
            }
          ]
        },
        "guwahati": {
          "blocks": [
            {
              "heading": "Flights and trains from Guwahati to Srinagar in more detail",
              "body": "Lokpriya Gopinath Bordoloi International Airport in Guwahati has flights to Delhi and Kolkata, with onward connections to Srinagar the same day; some routes connect via other hubs. By rail, long-distance trains run from Guwahati to Delhi, and from Delhi trains reach Katra for the Vande Bharat to Srinagar, but the journey takes two days or more."
            },
            {
              "heading": "Food in Kashmir for travellers from Guwahati",
              "body": "Travellers from Guwahati will find rice-based meals familiar in Kashmir, where rice is the staple. Fish lovers can try trout in Pahalgam and Kashmiri-style fish dishes in Srinagar, alongside mutton specialities and vegetarian dishes such as haak and dum aloo. Hotels also serve North Indian and continental food."
            },
            {
              "heading": "Kashmir weather compared with Guwahati",
              "body": "Guwahati's warm, humid climate is very different from Kashmir's dry mountain air. Even in summer, nights in Gulmarg, Pahalgam and Sonamarg are cool, and in winter temperatures fall well below freezing. Pack layers, a warm jacket and moisturiser for the dry air."
            },
            {
              "heading": "When travellers from Guwahati usually go",
              "body": "Travellers from Assam often visit Kashmir in April and May, after Bohag Bihu, in October and November around the Durga Puja and Diwali holidays, and in December for snow. Book flights early for the Puja holidays, when demand from the east is high."
            },
            {
              "heading": "Vaishno Devi and Kashmir from Guwahati",
              "body": "Pilgrims from Guwahati, home of Kamakhya temple, often add Vaishno Devi to a Kashmir trip by flying to Jammu, spending two nights in Katra and taking the Vande Bharat to Srinagar."
            },
            {
              "heading": "Kashmir family trip from Guwahati",
              "body": "Families from Guwahati usually prefer a 6 or 7 night plan with Srinagar as the base, a houseboat night, Gulmarg and Sonamarg as day trips and two nights in Pahalgam. Choose an Innova or Innova Crysta for comfort, hotels with family rooms and heating in winter, and ponies or sledges for children. Elderly parents travel more comfortably with ground-floor rooms and short sightseeing days."
            },
            {
              "heading": "Kashmir honeymoon from Guwahati",
              "body": "Couples from Guwahati often choose a 6-night honeymoon with a Deluxe houseboat on Nigeen or Dal, a resort night in Gulmarg, two nights by the Lidder in Pahalgam and a final night back on the lake. Ask for a private decorated shikara, a candlelight dinner and room upgrades. April, October and the snowy months of December to February are favourite honeymoon seasons."
            },
            {
              "heading": "Group and friends' trips from Guwahati",
              "body": "Groups from Guwahati usually book a tempo traveller or Force Urbania for 9 to 17 people, a whole houseboat for the group and hotels with rooms together. Remember that union taxis serve Pahalgam's and Sonamarg's sightseeing points, so the group will need several local cabs there. Share a list of everyone's IDs for checkposts and appoint one coordinator."
            },
            {
              "heading": "Packing list for travellers from Guwahati",
              "body": "Layers for every season, a warm jacket even in summer for Gulmarg and Sonamarg, thermals, gloves and waterproof boots from December to February, comfortable walking shoes, sunglasses and sunscreen, modest clothes for shrines, original photo IDs for everyone, a postpaid SIM, because prepaid connections from outside J&K do not work, and some cash for ponies, shikaras and union taxis."
            },
            {
              "heading": "First and last day of a Kashmir trip from Guwahati",
              "body": "Travellers from Guwahati usually connect through Delhi or Kolkata, so a morning departure from Guwahati brings you to Srinagar by afternoon or evening. Plan a gentle first afternoon: check in to a houseboat or lake-view hotel, take a sunset shikara and have an early dinner. On the last day, keep a morning activity close to Srinagar, such as the Mughal Gardens or a craft workshop, and leave for the airport with a buffer, since security checks at Srinagar airport can take time."
            },
            {
              "heading": "Kashmir by train from Guwahati",
              "body": "Long-distance trains from Guwahati reach Delhi in about a day and a half, with onward trains to Jammu Tawi or Katra and the Vande Bharat to Srinagar. The train suits travellers who prefer rail, families with lots of luggage and pilgrims combining Vaishno Devi. Book early on IRCTC, especially for May, June and the festive season."
            },
            {
              "heading": "When Guwahati travellers go, and why",
              "body": "Most travellers from Guwahati visit Kashmir in April and May after Bohag Bihu, the Durga Puja and Diwali holidays, and December. Travellers from the North East are used to hills and rain, but Kashmir's dry cold and high snowfields are very different; carry moisturiser, lip balm and warmer layers than you would for Shillong or Darjeeling."
            },
            {
              "heading": "A 7-night Kashmir plan from Guwahati",
              "body": "Night 1: Srinagar, houseboat or lake-view hotel and a sunset shikara. Night 2: Srinagar, Mughal Gardens and the old city. Day 3: Gulmarg day trip with the gondola. Nights 4 and 5: Pahalgam, with Aru, Betaab and Chandanwari by union taxi. Night 6: Srinagar, Sonamarg day trip. Night 7: Srinagar, shopping and a relaxed final evening before the flight or train home."
            },
            {
              "heading": "Kashmir and Ladakh from Guwahati",
              "body": "Travellers from Guwahati with 10 to 12 days in summer often add Ladakh: drive from Srinagar to Leh over two days via Zojila and Kargil, rest two days in Leh, visit Nubra and Pangong with a Ladakh-registered taxi, and fly home from Leh via Delhi. This route acclimatises you gradually and covers both regions in one trip."
            },
            {
              "heading": "Budget Kashmir trip from Guwahati",
              "body": "To keep a trip from Guwahati affordable, travel in March, early April, October or November outside holidays, take the train to Katra and the Vande Bharat to Srinagar, stay in Srinagar for most nights with Gulmarg and Sonamarg as day trips, share a vehicle and choose a standard houseboat for one night."
            },
            {
              "heading": "Winter trip from Guwahati",
              "body": "For snow, travellers from Guwahati usually visit from December to February. Gulmarg has the most reliable snow, Pahalgam is snowbound and quiet, and Sonamarg is reachable through the Z-Morh tunnel. Pack thermals, a heavy jacket, gloves, caps and waterproof boots, choose centrally heated hotels and keep a buffer day for flight delays."
            },
            {
              "heading": "Senior citizens travelling from Guwahati",
              "body": "Older travellers from Guwahati do best with direct or one-stop flights with wheelchair assistance, two bases rather than daily hotel changes, an Innova Crysta with an experienced driver, ground-floor or lift-served rooms, the Phase 1 gondola only, and rest afternoons. Consult a doctor before the trip and carry regular medicines."
            },
            {
              "heading": "What a Kashmir package from Guwahati usually includes",
              "body": "Most packages include hotels and a houseboat night, breakfast and dinner, a private car with driver for transfers and sightseeing, and airport or station pickup and drop. Flights or trains, lunch, union taxis in Pahalgam and Sonamarg, ponies, gondola tickets and entry fees are usually extra. Ask for an itemised quote with named hotels."
            },
            {
              "heading": "Booking timeline for travellers from Guwahati",
              "body": "Book three to four months ahead for May, June, Diwali and Christmas, and six to eight weeks ahead for other months. Book gondola tickets online as soon as dates are fixed. Convert prepaid SIMs to postpaid a week before travel, and carry original IDs for every traveller from Guwahati."
            },
            {
              "heading": "Gifts to take home to Guwahati",
              "body": "Travellers returning to Guwahati usually buy saffron from Pampore, dry fruits such as walnuts and almonds, kahwa mix, papier-mache boxes, walnut wood items, embroidered stoles and pashmina shawls. Buy from established showrooms or government emporiums with bills, pack food items in sealed boxes for the flight or train, and check airline baggage limits before buying heavy items such as carpets, which shops can ship to Guwahati."
            },
            {
              "heading": "Documents and phones for travellers from Guwahati",
              "body": "Carry original photo ID for every traveller from Guwahati, with printed copies, since hotels, houseboats, checkpoints and the gondola ask for ID. Convert prepaid SIMs to postpaid before the trip, because prepaid connections from outside J&K do not work in Kashmir. Save hotel, driver and agent numbers, and keep bookings offline."
            },
            {
              "heading": "Kashmir with children from Guwahati",
              "body": "Families from Guwahati should plan a slower pace: two bases, Srinagar and Pahalgam, short daily drives, rest afternoons, family rooms or a whole houseboat, ponies and sledges for children, and the Phase 1 gondola in Gulmarg. Pack layers and snacks for drives, and carry children's medicines. School holidays from Guwahati fill flights early, so book ahead."
            },
            {
              "heading": "Kashmir for first-time visitors from Guwahati",
              "body": "First-time visitors from Guwahati usually want the classic highlights: a Dal Lake shikara and houseboat, the Mughal Gardens, Gulmarg's gondola, Sonamarg's Thajiwas glacier and Pahalgam's Aru and Betaab valleys. A 6 or 7 night plan covers all of them comfortably without rushing, with Srinagar as the base and two nights in Pahalgam."
            }
          ],
          "faqs": [
            {
              "q": "Which airport is best for flying from Guwahati to Kashmir?",
              "a": "Lokpriya Gopinath Bordoloi International Airport in Guwahati has flights to Delhi and Kolkata, with onward connections to Srinagar the same day; some routes connect via other hubs."
            },
            {
              "q": "Can travellers from Guwahati combine Kashmir with Vaishno Devi?",
              "a": "Yes. Reach Jammu or Katra, spend two nights for the yatra, then take the Vande Bharat to Srinagar, about 3 hours."
            },
            {
              "q": "Is vegetarian food available in Kashmir for travellers from Guwahati?",
              "a": "Yes. Srinagar has many vegetarian restaurants, and hotels across Kashmir cook vegetarian meals on request."
            },
            {
              "q": "Can I reach Kashmir by train from Guwahati?",
              "a": "Long-distance trains from Guwahati reach Delhi in about a day and a half, with onward trains to Jammu Tawi or Katra and the Vande Bharat to Srinagar."
            },
            {
              "q": "What is the best month to visit Kashmir from Guwahati?",
              "a": "Most travellers from Guwahati go in April and May after Bohag Bihu, the Durga Puja and Diwali holidays, and December; April and October are also beautiful and less crowded."
            },
            {
              "q": "Can I combine Kashmir and Ladakh from Guwahati?",
              "a": "Yes, in summer with 10 to 12 days: drive Srinagar to Leh via Kargil and fly home from Leh."
            },
            {
              "q": "How many days are needed for Kashmir from Guwahati?",
              "a": "Six to seven nights covers Srinagar, Gulmarg, Pahalgam and Sonamarg comfortably."
            },
            {
              "q": "What should I buy in Kashmir to take home to Guwahati?",
              "a": "Saffron, dry fruits, kahwa mix, papier-mache, walnut wood items, embroidered stoles and pashmina from established shops."
            },
            {
              "q": "Will my prepaid SIM from Guwahati work in Kashmir?",
              "a": "No. Prepaid connections from outside J&K do not work; convert to postpaid before travelling."
            },
            {
              "q": "Is Kashmir good for families from Guwahati?",
              "a": "Yes, with a slow pace, two bases, family rooms and activities such as shikara rides, ponies and the gondola."
            },
            {
              "q": "Is Kashmir colder than Shillong?",
              "a": "Yes, much colder in winter, with sub-zero nights and snow in Gulmarg and Pahalgam."
            }
          ]
        },
        "patna": {
          "blocks": [
            {
              "heading": "Flights and trains from Patna to Srinagar in more detail",
              "body": "Jay Prakash Narayan Airport in Patna has flights to Delhi and other hubs, with connections to Srinagar the same day. By rail, trains run from Patna to Delhi and to Jammu Tawi, and from Jammu or Katra the Vande Bharat reaches Srinagar. Rail is cheaper but takes much longer, often a full day or more."
            },
            {
              "heading": "Food in Kashmir for travellers from Patna",
              "body": "Travellers from Bihar will find Kashmir's rice and dal meals familiar, along with rajma, vegetable curries and rotis. Try Kashmiri specialities such as rogan josh, yakhni and kahwa, and vegetarian dishes like dum aloo and haak. Hotels in Srinagar serve North Indian food widely."
            },
            {
              "heading": "Kashmir weather compared with Patna",
              "body": "Patna's hot summers and foggy winters contrast with Kashmir's cool summers and snowy winters. May and June are a welcome escape from the plains heat; December to February in Kashmir is colder than Patna's winter, so pack thermals and a heavy jacket."
            },
            {
              "heading": "When travellers from Patna usually go",
              "body": "Bihar families often travel in the May and June summer holidays, after Chhath in October or November, and in December. Summer is busy, so book early; autumn after the festive season is quieter and beautiful in Kashmir."
            },
            {
              "heading": "Vaishno Devi and Kashmir from Patna",
              "body": "Many travellers from Patna combine Kashmir with Vaishno Devi, travelling by train to Jammu or Katra, completing the yatra and then taking the Vande Bharat to Srinagar."
            },
            {
              "heading": "Kashmir family trip from Patna",
              "body": "Families from Patna usually prefer a 6 or 7 night plan with Srinagar as the base, a houseboat night, Gulmarg and Sonamarg as day trips and two nights in Pahalgam. Choose an Innova or Innova Crysta for comfort, hotels with family rooms and heating in winter, and ponies or sledges for children. Elderly parents travel more comfortably with ground-floor rooms and short sightseeing days."
            },
            {
              "heading": "Kashmir honeymoon from Patna",
              "body": "Couples from Patna often choose a 6-night honeymoon with a Deluxe houseboat on Nigeen or Dal, a resort night in Gulmarg, two nights by the Lidder in Pahalgam and a final night back on the lake. Ask for a private decorated shikara, a candlelight dinner and room upgrades. April, October and the snowy months of December to February are favourite honeymoon seasons."
            },
            {
              "heading": "Group and friends' trips from Patna",
              "body": "Groups from Patna usually book a tempo traveller or Force Urbania for 9 to 17 people, a whole houseboat for the group and hotels with rooms together. Remember that union taxis serve Pahalgam's and Sonamarg's sightseeing points, so the group will need several local cabs there. Share a list of everyone's IDs for checkposts and appoint one coordinator."
            },
            {
              "heading": "Packing list for travellers from Patna",
              "body": "Layers for every season, a warm jacket even in summer for Gulmarg and Sonamarg, thermals, gloves and waterproof boots from December to February, comfortable walking shoes, sunglasses and sunscreen, modest clothes for shrines, original photo IDs for everyone, a postpaid SIM, because prepaid connections from outside J&K do not work, and some cash for ponies, shikaras and union taxis."
            },
            {
              "heading": "First and last day of a Kashmir trip from Patna",
              "body": "Patna travellers usually fly via Delhi, with a morning flight reaching Srinagar by early afternoon. Plan a gentle first afternoon: check in to a houseboat or lake-view hotel, take a sunset shikara and have an early dinner. On the last day, keep a morning activity close to Srinagar, such as the Mughal Gardens or a craft workshop, and leave for the airport with a buffer, since security checks at Srinagar airport can take time."
            },
            {
              "heading": "Kashmir by train from Patna",
              "body": "Trains run from Patna to Delhi and to Jammu Tawi, and from Jammu or Katra the Vande Bharat reaches Srinagar; the full rail journey takes a day or more. The train suits travellers who prefer rail, families with lots of luggage and pilgrims combining Vaishno Devi. Book early on IRCTC, especially for May, June and the festive season."
            },
            {
              "heading": "When Patna travellers go, and why",
              "body": "Most travellers from Patna visit Kashmir in May and June, after Chhath in October or November, and December. Many Bihar travellers combine Kashmir with Vaishno Devi, and some add Amritsar's Golden Temple on the way by train, making a north India circuit of 10 to 12 days."
            },
            {
              "heading": "A 7-night Kashmir plan from Patna",
              "body": "Night 1: Srinagar, houseboat or lake-view hotel and a sunset shikara. Night 2: Srinagar, Mughal Gardens and the old city. Day 3: Gulmarg day trip with the gondola. Nights 4 and 5: Pahalgam, with Aru, Betaab and Chandanwari by union taxi. Night 6: Srinagar, Sonamarg day trip. Night 7: Srinagar, shopping and a relaxed final evening before the flight or train home."
            },
            {
              "heading": "Kashmir and Ladakh from Patna",
              "body": "Travellers from Patna with 10 to 12 days in summer often add Ladakh: drive from Srinagar to Leh over two days via Zojila and Kargil, rest two days in Leh, visit Nubra and Pangong with a Ladakh-registered taxi, and fly home from Leh via Delhi. This route acclimatises you gradually and covers both regions in one trip."
            },
            {
              "heading": "Budget Kashmir trip from Patna",
              "body": "To keep a trip from Patna affordable, travel in March, early April, October or November outside holidays, take the train to Katra and the Vande Bharat to Srinagar, stay in Srinagar for most nights with Gulmarg and Sonamarg as day trips, share a vehicle and choose a standard houseboat for one night."
            },
            {
              "heading": "Winter trip from Patna",
              "body": "For snow, travellers from Patna usually visit from December to February. Gulmarg has the most reliable snow, Pahalgam is snowbound and quiet, and Sonamarg is reachable through the Z-Morh tunnel. Pack thermals, a heavy jacket, gloves, caps and waterproof boots, choose centrally heated hotels and keep a buffer day for flight delays."
            },
            {
              "heading": "Senior citizens travelling from Patna",
              "body": "Older travellers from Patna do best with direct or one-stop flights with wheelchair assistance, two bases rather than daily hotel changes, an Innova Crysta with an experienced driver, ground-floor or lift-served rooms, the Phase 1 gondola only, and rest afternoons. Consult a doctor before the trip and carry regular medicines."
            },
            {
              "heading": "What a Kashmir package from Patna usually includes",
              "body": "Most packages include hotels and a houseboat night, breakfast and dinner, a private car with driver for transfers and sightseeing, and airport or station pickup and drop. Flights or trains, lunch, union taxis in Pahalgam and Sonamarg, ponies, gondola tickets and entry fees are usually extra. Ask for an itemised quote with named hotels."
            },
            {
              "heading": "Booking timeline for travellers from Patna",
              "body": "Book three to four months ahead for May, June, Diwali and Christmas, and six to eight weeks ahead for other months. Book gondola tickets online as soon as dates are fixed. Convert prepaid SIMs to postpaid a week before travel, and carry original IDs for every traveller from Patna."
            },
            {
              "heading": "Gifts to take home to Patna",
              "body": "Travellers returning to Patna usually buy saffron from Pampore, dry fruits such as walnuts and almonds, kahwa mix, papier-mache boxes, walnut wood items, embroidered stoles and pashmina shawls. Buy from established showrooms or government emporiums with bills, pack food items in sealed boxes for the flight or train, and check airline baggage limits before buying heavy items such as carpets, which shops can ship to Patna."
            },
            {
              "heading": "Documents and phones for travellers from Patna",
              "body": "Carry original photo ID for every traveller from Patna, with printed copies, since hotels, houseboats, checkpoints and the gondola ask for ID. Convert prepaid SIMs to postpaid before the trip, because prepaid connections from outside J&K do not work in Kashmir. Save hotel, driver and agent numbers, and keep bookings offline."
            },
            {
              "heading": "Kashmir with children from Patna",
              "body": "Families from Patna should plan a slower pace: two bases, Srinagar and Pahalgam, short daily drives, rest afternoons, family rooms or a whole houseboat, ponies and sledges for children, and the Phase 1 gondola in Gulmarg. Pack layers and snacks for drives, and carry children's medicines. School holidays from Patna fill flights early, so book ahead."
            },
            {
              "heading": "Kashmir for first-time visitors from Patna",
              "body": "First-time visitors from Patna usually want the classic highlights: a Dal Lake shikara and houseboat, the Mughal Gardens, Gulmarg's gondola, Sonamarg's Thajiwas glacier and Pahalgam's Aru and Betaab valleys. A 6 or 7 night plan covers all of them comfortably without rushing, with Srinagar as the base and two nights in Pahalgam."
            }
          ],
          "faqs": [
            {
              "q": "Which airport is best for flying from Patna to Kashmir?",
              "a": "Jay Prakash Narayan Airport in Patna has flights to Delhi and other hubs, with connections to Srinagar the same day."
            },
            {
              "q": "Can travellers from Patna combine Kashmir with Vaishno Devi?",
              "a": "Yes. Reach Jammu or Katra, spend two nights for the yatra, then take the Vande Bharat to Srinagar, about 3 hours."
            },
            {
              "q": "Is vegetarian food available in Kashmir for travellers from Patna?",
              "a": "Yes. Srinagar has many vegetarian restaurants, and hotels across Kashmir cook vegetarian meals on request."
            },
            {
              "q": "Can I reach Kashmir by train from Patna?",
              "a": "Trains run from Patna to Delhi and to Jammu Tawi, and from Jammu or Katra the Vande Bharat reaches Srinagar; the full rail journey takes a day or more."
            },
            {
              "q": "What is the best month to visit Kashmir from Patna?",
              "a": "Most travellers from Patna go in May and June, after Chhath in October or November, and December; April and October are also beautiful and less crowded."
            },
            {
              "q": "Can I combine Kashmir and Ladakh from Patna?",
              "a": "Yes, in summer with 10 to 12 days: drive Srinagar to Leh via Kargil and fly home from Leh."
            },
            {
              "q": "How many days are needed for Kashmir from Patna?",
              "a": "Six to seven nights covers Srinagar, Gulmarg, Pahalgam and Sonamarg comfortably."
            },
            {
              "q": "What should I buy in Kashmir to take home to Patna?",
              "a": "Saffron, dry fruits, kahwa mix, papier-mache, walnut wood items, embroidered stoles and pashmina from established shops."
            },
            {
              "q": "Will my prepaid SIM from Patna work in Kashmir?",
              "a": "No. Prepaid connections from outside J&K do not work; convert to postpaid before travelling."
            },
            {
              "q": "Is Kashmir good for families from Patna?",
              "a": "Yes, with a slow pace, two bases, family rooms and activities such as shikara rides, ponies and the gondola."
            }
          ]
        },
        "raipur": {
          "blocks": [
            {
              "heading": "Flights and trains from Raipur to Srinagar in more detail",
              "body": "Swami Vivekananda Airport in Raipur has flights to Delhi and other hubs, with connections to Srinagar. By rail, trains run from Raipur to Delhi and onwards to Jammu or Katra, followed by the Vande Bharat to Srinagar; the train journey is long, so most travellers fly at least one way."
            },
            {
              "heading": "Food in Kashmir for travellers from Raipur",
              "body": "Raipur travellers will find familiar rice, dal and vegetable dishes in Kashmir, along with North Indian food in most hotels. Vegetarian Kashmiri dishes such as dum aloo, haak and rajma are worth trying, as are kahwa and fresh bakery breads."
            },
            {
              "heading": "Kashmir weather compared with Raipur",
              "body": "Chhattisgarh's hot summers make Kashmir's cool May and June especially pleasant. Kashmir's winter is much colder than Raipur's, with snow in Gulmarg and sub-zero nights, so pack full winter clothing from December to February."
            },
            {
              "heading": "When travellers from Raipur usually go",
              "body": "Families from Raipur often travel in the May and June summer holidays, around Diwali, and in December. Book early for summer; October and November offer clear skies and quieter roads."
            },
            {
              "heading": "Vaishno Devi and Kashmir from Raipur",
              "body": "Travellers from Raipur often add Vaishno Devi by train to Jammu or Katra before taking the Vande Bharat into Kashmir."
            },
            {
              "heading": "Kashmir family trip from Raipur",
              "body": "Families from Raipur usually prefer a 6 or 7 night plan with Srinagar as the base, a houseboat night, Gulmarg and Sonamarg as day trips and two nights in Pahalgam. Choose an Innova or Innova Crysta for comfort, hotels with family rooms and heating in winter, and ponies or sledges for children. Elderly parents travel more comfortably with ground-floor rooms and short sightseeing days."
            },
            {
              "heading": "Kashmir honeymoon from Raipur",
              "body": "Couples from Raipur often choose a 6-night honeymoon with a Deluxe houseboat on Nigeen or Dal, a resort night in Gulmarg, two nights by the Lidder in Pahalgam and a final night back on the lake. Ask for a private decorated shikara, a candlelight dinner and room upgrades. April, October and the snowy months of December to February are favourite honeymoon seasons."
            },
            {
              "heading": "Group and friends' trips from Raipur",
              "body": "Groups from Raipur usually book a tempo traveller or Force Urbania for 9 to 17 people, a whole houseboat for the group and hotels with rooms together. Remember that union taxis serve Pahalgam's and Sonamarg's sightseeing points, so the group will need several local cabs there. Share a list of everyone's IDs for checkposts and appoint one coordinator."
            },
            {
              "heading": "Packing list for travellers from Raipur",
              "body": "Layers for every season, a warm jacket even in summer for Gulmarg and Sonamarg, thermals, gloves and waterproof boots from December to February, comfortable walking shoes, sunglasses and sunscreen, modest clothes for shrines, original photo IDs for everyone, a postpaid SIM, because prepaid connections from outside J&K do not work, and some cash for ponies, shikaras and union taxis."
            },
            {
              "heading": "First and last day of a Kashmir trip from Raipur",
              "body": "Raipur travellers usually fly via Delhi or Mumbai, reaching Srinagar by afternoon. Plan a gentle first afternoon: check in to a houseboat or lake-view hotel, take a sunset shikara and have an early dinner. On the last day, keep a morning activity close to Srinagar, such as the Mughal Gardens or a craft workshop, and leave for the airport with a buffer, since security checks at Srinagar airport can take time."
            },
            {
              "heading": "Kashmir by train from Raipur",
              "body": "Trains from Raipur reach Delhi in about a day, with onward trains to Jammu Tawi or Katra and the Vande Bharat to Srinagar. The train suits travellers who prefer rail, families with lots of luggage and pilgrims combining Vaishno Devi. Book early on IRCTC, especially for May, June and the festive season."
            },
            {
              "heading": "When Raipur travellers go, and why",
              "body": "Most travellers from Raipur visit Kashmir in May and June, Diwali and December. Travellers from Chhattisgarh often prefer vegetarian food and family-friendly hotels; Srinagar has many vegetarian restaurants, and hotels across Kashmir cook simple dal, rice and roti on request."
            },
            {
              "heading": "A 7-night Kashmir plan from Raipur",
              "body": "Night 1: Srinagar, houseboat or lake-view hotel and a sunset shikara. Night 2: Srinagar, Mughal Gardens and the old city. Day 3: Gulmarg day trip with the gondola. Nights 4 and 5: Pahalgam, with Aru, Betaab and Chandanwari by union taxi. Night 6: Srinagar, Sonamarg day trip. Night 7: Srinagar, shopping and a relaxed final evening before the flight or train home."
            },
            {
              "heading": "Kashmir and Ladakh from Raipur",
              "body": "Travellers from Raipur with 10 to 12 days in summer often add Ladakh: drive from Srinagar to Leh over two days via Zojila and Kargil, rest two days in Leh, visit Nubra and Pangong with a Ladakh-registered taxi, and fly home from Leh via Delhi. This route acclimatises you gradually and covers both regions in one trip."
            },
            {
              "heading": "Budget Kashmir trip from Raipur",
              "body": "To keep a trip from Raipur affordable, travel in March, early April, October or November outside holidays, take the train to Katra and the Vande Bharat to Srinagar, stay in Srinagar for most nights with Gulmarg and Sonamarg as day trips, share a vehicle and choose a standard houseboat for one night."
            },
            {
              "heading": "Winter trip from Raipur",
              "body": "For snow, travellers from Raipur usually visit from December to February. Gulmarg has the most reliable snow, Pahalgam is snowbound and quiet, and Sonamarg is reachable through the Z-Morh tunnel. Pack thermals, a heavy jacket, gloves, caps and waterproof boots, choose centrally heated hotels and keep a buffer day for flight delays."
            },
            {
              "heading": "Senior citizens travelling from Raipur",
              "body": "Older travellers from Raipur do best with direct or one-stop flights with wheelchair assistance, two bases rather than daily hotel changes, an Innova Crysta with an experienced driver, ground-floor or lift-served rooms, the Phase 1 gondola only, and rest afternoons. Consult a doctor before the trip and carry regular medicines."
            },
            {
              "heading": "What a Kashmir package from Raipur usually includes",
              "body": "Most packages include hotels and a houseboat night, breakfast and dinner, a private car with driver for transfers and sightseeing, and airport or station pickup and drop. Flights or trains, lunch, union taxis in Pahalgam and Sonamarg, ponies, gondola tickets and entry fees are usually extra. Ask for an itemised quote with named hotels."
            },
            {
              "heading": "Booking timeline for travellers from Raipur",
              "body": "Book three to four months ahead for May, June, Diwali and Christmas, and six to eight weeks ahead for other months. Book gondola tickets online as soon as dates are fixed. Convert prepaid SIMs to postpaid a week before travel, and carry original IDs for every traveller from Raipur."
            },
            {
              "heading": "Gifts to take home to Raipur",
              "body": "Travellers returning to Raipur usually buy saffron from Pampore, dry fruits such as walnuts and almonds, kahwa mix, papier-mache boxes, walnut wood items, embroidered stoles and pashmina shawls. Buy from established showrooms or government emporiums with bills, pack food items in sealed boxes for the flight or train, and check airline baggage limits before buying heavy items such as carpets, which shops can ship to Raipur."
            },
            {
              "heading": "Documents and phones for travellers from Raipur",
              "body": "Carry original photo ID for every traveller from Raipur, with printed copies, since hotels, houseboats, checkpoints and the gondola ask for ID. Convert prepaid SIMs to postpaid before the trip, because prepaid connections from outside J&K do not work in Kashmir. Save hotel, driver and agent numbers, and keep bookings offline."
            },
            {
              "heading": "Kashmir with children from Raipur",
              "body": "Families from Raipur should plan a slower pace: two bases, Srinagar and Pahalgam, short daily drives, rest afternoons, family rooms or a whole houseboat, ponies and sledges for children, and the Phase 1 gondola in Gulmarg. Pack layers and snacks for drives, and carry children's medicines. School holidays from Raipur fill flights early, so book ahead."
            },
            {
              "heading": "Kashmir for first-time visitors from Raipur",
              "body": "First-time visitors from Raipur usually want the classic highlights: a Dal Lake shikara and houseboat, the Mughal Gardens, Gulmarg's gondola, Sonamarg's Thajiwas glacier and Pahalgam's Aru and Betaab valleys. A 6 or 7 night plan covers all of them comfortably without rushing, with Srinagar as the base and two nights in Pahalgam."
            }
          ],
          "faqs": [
            {
              "q": "Which airport is best for flying from Raipur to Kashmir?",
              "a": "Swami Vivekananda Airport in Raipur has flights to Delhi and other hubs, with connections to Srinagar."
            },
            {
              "q": "Can travellers from Raipur combine Kashmir with Vaishno Devi?",
              "a": "Yes. Reach Jammu or Katra, spend two nights for the yatra, then take the Vande Bharat to Srinagar, about 3 hours."
            },
            {
              "q": "Is vegetarian food available in Kashmir for travellers from Raipur?",
              "a": "Yes. Srinagar has many vegetarian restaurants, and hotels across Kashmir cook vegetarian meals on request."
            },
            {
              "q": "Can I reach Kashmir by train from Raipur?",
              "a": "Trains from Raipur reach Delhi in about a day, with onward trains to Jammu Tawi or Katra and the Vande Bharat to Srinagar."
            },
            {
              "q": "What is the best month to visit Kashmir from Raipur?",
              "a": "Most travellers from Raipur go in May and June, Diwali and December; April and October are also beautiful and less crowded."
            },
            {
              "q": "Can I combine Kashmir and Ladakh from Raipur?",
              "a": "Yes, in summer with 10 to 12 days: drive Srinagar to Leh via Kargil and fly home from Leh."
            },
            {
              "q": "How many days are needed for Kashmir from Raipur?",
              "a": "Six to seven nights covers Srinagar, Gulmarg, Pahalgam and Sonamarg comfortably."
            },
            {
              "q": "What should I buy in Kashmir to take home to Raipur?",
              "a": "Saffron, dry fruits, kahwa mix, papier-mache, walnut wood items, embroidered stoles and pashmina from established shops."
            },
            {
              "q": "Will my prepaid SIM from Raipur work in Kashmir?",
              "a": "No. Prepaid connections from outside J&K do not work; convert to postpaid before travelling."
            },
            {
              "q": "Is Kashmir good for families from Raipur?",
              "a": "Yes, with a slow pace, two bases, family rooms and activities such as shikara rides, ponies and the gondola."
            }
          ]
        },
        "bhopal": {
          "blocks": [
            {
              "heading": "Flights and trains from Bhopal to Srinagar in more detail",
              "body": "Raja Bhoj Airport in Bhopal has flights to Delhi, Mumbai and other hubs, with onward flights to Srinagar. By rail, trains run from Bhopal to Delhi and to Jammu Tawi, and the Vande Bharat connects Katra to Srinagar. Many travellers take a train to Delhi and fly from there."
            },
            {
              "heading": "Food in Kashmir for travellers from Bhopal",
              "body": "Bhopal travellers who love kebabs and mutton will enjoy Kashmir's wazwan, with rista, rogan josh and seekh kebab, while vegetarians will find dum aloo, haak and rajma everywhere. Hotels serve North Indian and continental food, and halal meat is the norm in Kashmir."
            },
            {
              "heading": "Kashmir weather compared with Bhopal",
              "body": "Bhopal's hot summers and mild winters contrast with Kashmir's cool summers and freezing winters. May and June are an ideal escape from the heat. From December to February, pack thermals, a heavy jacket and waterproof boots for snow."
            },
            {
              "heading": "When travellers from Bhopal usually go",
              "body": "Families from Bhopal often travel in the May and June school holidays, around Diwali and in December for snow. Book early for summer and the winter holidays."
            },
            {
              "heading": "Vaishno Devi and Kashmir from Bhopal",
              "body": "Many Bhopal travellers combine Kashmir with Vaishno Devi, travelling by train to Jammu or Katra and then by Vande Bharat to Srinagar."
            },
            {
              "heading": "Kashmir family trip from Bhopal",
              "body": "Families from Bhopal usually prefer a 6 or 7 night plan with Srinagar as the base, a houseboat night, Gulmarg and Sonamarg as day trips and two nights in Pahalgam. Choose an Innova or Innova Crysta for comfort, hotels with family rooms and heating in winter, and ponies or sledges for children. Elderly parents travel more comfortably with ground-floor rooms and short sightseeing days."
            },
            {
              "heading": "Kashmir honeymoon from Bhopal",
              "body": "Couples from Bhopal often choose a 6-night honeymoon with a Deluxe houseboat on Nigeen or Dal, a resort night in Gulmarg, two nights by the Lidder in Pahalgam and a final night back on the lake. Ask for a private decorated shikara, a candlelight dinner and room upgrades. April, October and the snowy months of December to February are favourite honeymoon seasons."
            },
            {
              "heading": "Group and friends' trips from Bhopal",
              "body": "Groups from Bhopal usually book a tempo traveller or Force Urbania for 9 to 17 people, a whole houseboat for the group and hotels with rooms together. Remember that union taxis serve Pahalgam's and Sonamarg's sightseeing points, so the group will need several local cabs there. Share a list of everyone's IDs for checkposts and appoint one coordinator."
            },
            {
              "heading": "Packing list for travellers from Bhopal",
              "body": "Layers for every season, a warm jacket even in summer for Gulmarg and Sonamarg, thermals, gloves and waterproof boots from December to February, comfortable walking shoes, sunglasses and sunscreen, modest clothes for shrines, original photo IDs for everyone, a postpaid SIM, because prepaid connections from outside J&K do not work, and some cash for ponies, shikaras and union taxis."
            },
            {
              "heading": "First and last day of a Kashmir trip from Bhopal",
              "body": "Bhopal travellers usually fly via Delhi or Mumbai, or take a train to Delhi and fly from there, reaching Srinagar the same day. Plan a gentle first afternoon: check in to a houseboat or lake-view hotel, take a sunset shikara and have an early dinner. On the last day, keep a morning activity close to Srinagar, such as the Mughal Gardens or a craft workshop, and leave for the airport with a buffer, since security checks at Srinagar airport can take time."
            },
            {
              "heading": "Kashmir by train from Bhopal",
              "body": "Trains run from Bhopal to Delhi and Jammu Tawi, with the Vande Bharat from Katra to Srinagar. The train suits travellers who prefer rail, families with lots of luggage and pilgrims combining Vaishno Devi. Book early on IRCTC, especially for May, June and the festive season."
            },
            {
              "heading": "When Bhopal travellers go, and why",
              "body": "Most travellers from Bhopal visit Kashmir in May and June, Diwali and December. Bhopal's lakes give its travellers a natural love for Dal and Nigeen; a houseboat night and a sunrise shikara to the floating market are favourites."
            },
            {
              "heading": "A 7-night Kashmir plan from Bhopal",
              "body": "Night 1: Srinagar, houseboat or lake-view hotel and a sunset shikara. Night 2: Srinagar, Mughal Gardens and the old city. Day 3: Gulmarg day trip with the gondola. Nights 4 and 5: Pahalgam, with Aru, Betaab and Chandanwari by union taxi. Night 6: Srinagar, Sonamarg day trip. Night 7: Srinagar, shopping and a relaxed final evening before the flight or train home."
            },
            {
              "heading": "Kashmir and Ladakh from Bhopal",
              "body": "Travellers from Bhopal with 10 to 12 days in summer often add Ladakh: drive from Srinagar to Leh over two days via Zojila and Kargil, rest two days in Leh, visit Nubra and Pangong with a Ladakh-registered taxi, and fly home from Leh via Delhi. This route acclimatises you gradually and covers both regions in one trip."
            },
            {
              "heading": "Budget Kashmir trip from Bhopal",
              "body": "To keep a trip from Bhopal affordable, travel in March, early April, October or November outside holidays, take the train to Katra and the Vande Bharat to Srinagar, stay in Srinagar for most nights with Gulmarg and Sonamarg as day trips, share a vehicle and choose a standard houseboat for one night."
            },
            {
              "heading": "Winter trip from Bhopal",
              "body": "For snow, travellers from Bhopal usually visit from December to February. Gulmarg has the most reliable snow, Pahalgam is snowbound and quiet, and Sonamarg is reachable through the Z-Morh tunnel. Pack thermals, a heavy jacket, gloves, caps and waterproof boots, choose centrally heated hotels and keep a buffer day for flight delays."
            },
            {
              "heading": "Senior citizens travelling from Bhopal",
              "body": "Older travellers from Bhopal do best with direct or one-stop flights with wheelchair assistance, two bases rather than daily hotel changes, an Innova Crysta with an experienced driver, ground-floor or lift-served rooms, the Phase 1 gondola only, and rest afternoons. Consult a doctor before the trip and carry regular medicines."
            },
            {
              "heading": "What a Kashmir package from Bhopal usually includes",
              "body": "Most packages include hotels and a houseboat night, breakfast and dinner, a private car with driver for transfers and sightseeing, and airport or station pickup and drop. Flights or trains, lunch, union taxis in Pahalgam and Sonamarg, ponies, gondola tickets and entry fees are usually extra. Ask for an itemised quote with named hotels."
            },
            {
              "heading": "Booking timeline for travellers from Bhopal",
              "body": "Book three to four months ahead for May, June, Diwali and Christmas, and six to eight weeks ahead for other months. Book gondola tickets online as soon as dates are fixed. Convert prepaid SIMs to postpaid a week before travel, and carry original IDs for every traveller from Bhopal."
            },
            {
              "heading": "Gifts to take home to Bhopal",
              "body": "Travellers returning to Bhopal usually buy saffron from Pampore, dry fruits such as walnuts and almonds, kahwa mix, papier-mache boxes, walnut wood items, embroidered stoles and pashmina shawls. Buy from established showrooms or government emporiums with bills, pack food items in sealed boxes for the flight or train, and check airline baggage limits before buying heavy items such as carpets, which shops can ship to Bhopal."
            },
            {
              "heading": "Documents and phones for travellers from Bhopal",
              "body": "Carry original photo ID for every traveller from Bhopal, with printed copies, since hotels, houseboats, checkpoints and the gondola ask for ID. Convert prepaid SIMs to postpaid before the trip, because prepaid connections from outside J&K do not work in Kashmir. Save hotel, driver and agent numbers, and keep bookings offline."
            },
            {
              "heading": "Kashmir with children from Bhopal",
              "body": "Families from Bhopal should plan a slower pace: two bases, Srinagar and Pahalgam, short daily drives, rest afternoons, family rooms or a whole houseboat, ponies and sledges for children, and the Phase 1 gondola in Gulmarg. Pack layers and snacks for drives, and carry children's medicines. School holidays from Bhopal fill flights early, so book ahead."
            },
            {
              "heading": "Kashmir for first-time visitors from Bhopal",
              "body": "First-time visitors from Bhopal usually want the classic highlights: a Dal Lake shikara and houseboat, the Mughal Gardens, Gulmarg's gondola, Sonamarg's Thajiwas glacier and Pahalgam's Aru and Betaab valleys. A 6 or 7 night plan covers all of them comfortably without rushing, with Srinagar as the base and two nights in Pahalgam."
            }
          ],
          "faqs": [
            {
              "q": "Which airport is best for flying from Bhopal to Kashmir?",
              "a": "Raja Bhoj Airport in Bhopal has flights to Delhi, Mumbai and other hubs, with onward flights to Srinagar."
            },
            {
              "q": "Can travellers from Bhopal combine Kashmir with Vaishno Devi?",
              "a": "Yes. Reach Jammu or Katra, spend two nights for the yatra, then take the Vande Bharat to Srinagar, about 3 hours."
            },
            {
              "q": "Is vegetarian food available in Kashmir for travellers from Bhopal?",
              "a": "Yes. Srinagar has many vegetarian restaurants, and hotels across Kashmir cook vegetarian meals on request."
            },
            {
              "q": "Can I reach Kashmir by train from Bhopal?",
              "a": "Trains run from Bhopal to Delhi and Jammu Tawi, with the Vande Bharat from Katra to Srinagar."
            },
            {
              "q": "What is the best month to visit Kashmir from Bhopal?",
              "a": "Most travellers from Bhopal go in May and June, Diwali and December; April and October are also beautiful and less crowded."
            },
            {
              "q": "Can I combine Kashmir and Ladakh from Bhopal?",
              "a": "Yes, in summer with 10 to 12 days: drive Srinagar to Leh via Kargil and fly home from Leh."
            },
            {
              "q": "How many days are needed for Kashmir from Bhopal?",
              "a": "Six to seven nights covers Srinagar, Gulmarg, Pahalgam and Sonamarg comfortably."
            },
            {
              "q": "What should I buy in Kashmir to take home to Bhopal?",
              "a": "Saffron, dry fruits, kahwa mix, papier-mache, walnut wood items, embroidered stoles and pashmina from established shops."
            },
            {
              "q": "Will my prepaid SIM from Bhopal work in Kashmir?",
              "a": "No. Prepaid connections from outside J&K do not work; convert to postpaid before travelling."
            },
            {
              "q": "Is Kashmir good for families from Bhopal?",
              "a": "Yes, with a slow pace, two bases, family rooms and activities such as shikara rides, ponies and the gondola."
            }
          ]
        },
        "amritsar": {
          "blocks": [
            {
              "heading": "Flights and trains from Amritsar to Srinagar in more detail",
              "body": "Sri Guru Ram Dass Jee International Airport in Amritsar has had direct and one-stop flights to Srinagar on some schedules. By road, Amritsar to Srinagar is about 450 km via Pathankot and Jammu, a long day's drive or two days with a night in Jammu or Patnitop. By rail, trains reach Jammu Tawi or Katra, and the Vande Bharat continues to Srinagar."
            },
            {
              "heading": "Food in Kashmir for travellers from Amritsar",
              "body": "Punjabi travellers will find familiar North Indian food in Srinagar, along with Kashmir's own specialities: rista, rogan josh and yakhni from the wazwan, kahwa and noon chai, and bakery breads. Vegetarians can enjoy dum aloo, haak and rajma. Some restaurants serve Punjabi dishes for visitors."
            },
            {
              "heading": "Kashmir weather compared with Amritsar",
              "body": "Amritsar's hot summers make Kashmir's cool valleys a natural summer escape. Kashmir's winter is colder and snowier than Punjab's, with sub-zero nights in Gulmarg and Pahalgam, so pack full winter clothing."
            },
            {
              "heading": "When travellers from Amritsar usually go",
              "body": "Travellers from Amritsar often visit in the May and June holidays, after Baisakhi in April, in October and November, and in December for snow. Short trips of three to four nights are popular because of the shorter distance."
            },
            {
              "heading": "Vaishno Devi and Kashmir from Amritsar",
              "body": "Many Amritsar travellers combine Kashmir with Vaishno Devi, a short journey by road or rail to Katra, and the Vande Bharat to Srinagar."
            },
            {
              "heading": "Kashmir family trip from Amritsar",
              "body": "Families from Amritsar usually prefer a 6 or 7 night plan with Srinagar as the base, a houseboat night, Gulmarg and Sonamarg as day trips and two nights in Pahalgam. Choose an Innova or Innova Crysta for comfort, hotels with family rooms and heating in winter, and ponies or sledges for children. Elderly parents travel more comfortably with ground-floor rooms and short sightseeing days."
            },
            {
              "heading": "Kashmir honeymoon from Amritsar",
              "body": "Couples from Amritsar often choose a 6-night honeymoon with a Deluxe houseboat on Nigeen or Dal, a resort night in Gulmarg, two nights by the Lidder in Pahalgam and a final night back on the lake. Ask for a private decorated shikara, a candlelight dinner and room upgrades. April, October and the snowy months of December to February are favourite honeymoon seasons."
            },
            {
              "heading": "Group and friends' trips from Amritsar",
              "body": "Groups from Amritsar usually book a tempo traveller or Force Urbania for 9 to 17 people, a whole houseboat for the group and hotels with rooms together. Remember that union taxis serve Pahalgam's and Sonamarg's sightseeing points, so the group will need several local cabs there. Share a list of everyone's IDs for checkposts and appoint one coordinator."
            },
            {
              "heading": "Packing list for travellers from Amritsar",
              "body": "Layers for every season, a warm jacket even in summer for Gulmarg and Sonamarg, thermals, gloves and waterproof boots from December to February, comfortable walking shoes, sunglasses and sunscreen, modest clothes for shrines, original photo IDs for everyone, a postpaid SIM, because prepaid connections from outside J&K do not work, and some cash for ponies, shikaras and union taxis."
            }
          ],
          "faqs": [
            {
              "q": "Which airport is best for flying from Amritsar to Kashmir?",
              "a": "Sri Guru Ram Dass Jee International Airport in Amritsar has had direct and one-stop flights to Srinagar on some schedules."
            },
            {
              "q": "Can travellers from Amritsar combine Kashmir with Vaishno Devi?",
              "a": "Yes. Reach Jammu or Katra, spend two nights for the yatra, then take the Vande Bharat to Srinagar, about 3 hours."
            },
            {
              "q": "Is vegetarian food available in Kashmir for travellers from Amritsar?",
              "a": "Yes. Srinagar has many vegetarian restaurants, and hotels across Kashmir cook vegetarian meals on request."
            }
          ]
        },
        "vadodara": {
          "blocks": [
            {
              "heading": "Flights and trains from Vadodara to Srinagar in more detail",
              "body": "Vadodara airport has flights to Delhi and Mumbai with connections to Srinagar, and Ahmedabad, about 110 km away, has more options. By rail, trains run from Vadodara to Delhi and onwards to Jammu or Katra, followed by the Vande Bharat to Srinagar."
            },
            {
              "heading": "Food in Kashmir for travellers from Vadodara",
              "body": "Gujarati travellers often prefer vegetarian and Jain food. Srinagar has many vegetarian restaurants, and hotels can prepare Jain meals without onion, garlic and root vegetables with notice. Try Kashmiri vegetarian dishes such as haak, rajma and chaman kaliya, and carry some dry snacks for long drives."
            },
            {
              "heading": "Kashmir weather compared with Vadodara",
              "body": "Vadodara's hot summers make Kashmir in May and June a cool escape. Winter in Kashmir is far colder than Gujarat's, with snow and sub-zero nights, so pack thermals and heavy jackets from December to February."
            },
            {
              "heading": "When travellers from Vadodara usually go",
              "body": "Gujarati families often travel in the May and June vacations and around Diwali in October or November, when Kashmir is golden and clear. Book early for these peak periods."
            },
            {
              "heading": "Vaishno Devi and Kashmir from Vadodara",
              "body": "Many travellers from Vadodara combine Kashmir with Vaishno Devi by train to Jammu or Katra, then the Vande Bharat to Srinagar."
            },
            {
              "heading": "Kashmir family trip from Vadodara",
              "body": "Families from Vadodara usually prefer a 6 or 7 night plan with Srinagar as the base, a houseboat night, Gulmarg and Sonamarg as day trips and two nights in Pahalgam. Choose an Innova or Innova Crysta for comfort, hotels with family rooms and heating in winter, and ponies or sledges for children. Elderly parents travel more comfortably with ground-floor rooms and short sightseeing days."
            },
            {
              "heading": "Kashmir honeymoon from Vadodara",
              "body": "Couples from Vadodara often choose a 6-night honeymoon with a Deluxe houseboat on Nigeen or Dal, a resort night in Gulmarg, two nights by the Lidder in Pahalgam and a final night back on the lake. Ask for a private decorated shikara, a candlelight dinner and room upgrades. April, October and the snowy months of December to February are favourite honeymoon seasons."
            },
            {
              "heading": "Group and friends' trips from Vadodara",
              "body": "Groups from Vadodara usually book a tempo traveller or Force Urbania for 9 to 17 people, a whole houseboat for the group and hotels with rooms together. Remember that union taxis serve Pahalgam's and Sonamarg's sightseeing points, so the group will need several local cabs there. Share a list of everyone's IDs for checkposts and appoint one coordinator."
            },
            {
              "heading": "Packing list for travellers from Vadodara",
              "body": "Layers for every season, a warm jacket even in summer for Gulmarg and Sonamarg, thermals, gloves and waterproof boots from December to February, comfortable walking shoes, sunglasses and sunscreen, modest clothes for shrines, original photo IDs for everyone, a postpaid SIM, because prepaid connections from outside J&K do not work, and some cash for ponies, shikaras and union taxis."
            }
          ],
          "faqs": [
            {
              "q": "Which airport is best for flying from Vadodara to Kashmir?",
              "a": "Vadodara airport has flights to Delhi and Mumbai with connections to Srinagar, and Ahmedabad, about 110 km away, has more options."
            },
            {
              "q": "Can travellers from Vadodara combine Kashmir with Vaishno Devi?",
              "a": "Yes. Reach Jammu or Katra, spend two nights for the yatra, then take the Vande Bharat to Srinagar, about 3 hours."
            },
            {
              "q": "Is vegetarian food available in Kashmir for travellers from Vadodara?",
              "a": "Yes. Srinagar has many vegetarian restaurants, and hotels across Kashmir cook vegetarian meals on request."
            }
          ]
        },
        "lucknow": {
          "blocks": [
            {
              "heading": "First and last day of a Kashmir trip from Lucknow",
              "body": "Lucknow has direct and one-stop flights to Srinagar on some schedules, with most travellers reaching Srinagar by afternoon. Plan a gentle first afternoon: check in to a houseboat or lake-view hotel, take a sunset shikara and have an early dinner. On the last day, keep a morning activity close to Srinagar, such as the Mughal Gardens or a craft workshop, and leave for the airport with a buffer, since security checks at Srinagar airport can take time."
            },
            {
              "heading": "Kashmir by train from Lucknow",
              "body": "Trains run from Lucknow to Jammu Tawi, and the Vande Bharat continues from Katra to Srinagar. The train suits travellers who prefer rail, families with lots of luggage and pilgrims combining Vaishno Devi. Book early on IRCTC, especially for May, June and the festive season."
            },
            {
              "heading": "When Lucknow travellers go, and why",
              "body": "Most travellers from Lucknow visit Kashmir in May and June, Diwali and December. Lucknow's love of kebabs and biryani makes Kashmir's wazwan a highlight; try rista, rogan josh and gushtaba in Srinagar."
            },
            {
              "heading": "Gifts to take home to Lucknow",
              "body": "Travellers returning to Lucknow usually buy saffron from Pampore, dry fruits such as walnuts and almonds, kahwa mix, papier-mache boxes, walnut wood items, embroidered stoles and pashmina shawls. Buy from established showrooms or government emporiums with bills, pack food items in sealed boxes for the flight or train, and check airline baggage limits before buying heavy items such as carpets, which shops can ship to Lucknow."
            },
            {
              "heading": "Documents and phones for travellers from Lucknow",
              "body": "Carry original photo ID for every traveller from Lucknow, with printed copies, since hotels, houseboats, checkpoints and the gondola ask for ID. Convert prepaid SIMs to postpaid before the trip, because prepaid connections from outside J&K do not work in Kashmir. Save hotel, driver and agent numbers, and keep bookings offline."
            },
            {
              "heading": "A 6-night Kashmir plan from Lucknow",
              "body": "Night 1: Srinagar houseboat and sunset shikara. Night 2: Srinagar, Mughal Gardens and old city. Day 3: Gulmarg day trip. Nights 4 and 5: Pahalgam with Aru, Betaab and Chandanwari by union taxi. Night 6: Srinagar, Sonamarg day trip, then departure."
            }
          ],
          "faqs": [
            {
              "q": "Can I reach Kashmir by train from Lucknow?",
              "a": "Trains run from Lucknow to Jammu Tawi, and the Vande Bharat continues from Katra to Srinagar."
            },
            {
              "q": "What is the best month to visit Kashmir from Lucknow?",
              "a": "Most travellers from Lucknow go in May and June, Diwali and December; April and October are also beautiful and less crowded."
            },
            {
              "q": "What should I buy in Kashmir to take home to Lucknow?",
              "a": "Saffron, dry fruits, kahwa mix, papier-mache, walnut wood items, embroidered stoles and pashmina from established shops."
            },
            {
              "q": "Will my prepaid SIM from Lucknow work in Kashmir?",
              "a": "No. Prepaid connections from outside J&K do not work; convert to postpaid before travelling."
            }
          ]
        },
        "nagpur": {
          "blocks": [
            {
              "heading": "First and last day of a Kashmir trip from Nagpur",
              "body": "Nagpur travellers usually fly via Delhi or Mumbai, reaching Srinagar by afternoon. Plan a gentle first afternoon: check in to a houseboat or lake-view hotel, take a sunset shikara and have an early dinner. On the last day, keep a morning activity close to Srinagar, such as the Mughal Gardens or a craft workshop, and leave for the airport with a buffer, since security checks at Srinagar airport can take time."
            },
            {
              "heading": "Kashmir by train from Nagpur",
              "body": "Trains from Nagpur reach Delhi in about a day, with onward connections to Jammu Tawi or Katra and the Vande Bharat. The train suits travellers who prefer rail, families with lots of luggage and pilgrims combining Vaishno Devi. Book early on IRCTC, especially for May, June and the festive season."
            },
            {
              "heading": "When Nagpur travellers go, and why",
              "body": "Most travellers from Nagpur visit Kashmir in May and June, Diwali and December. Nagpur's very hot summers make Kashmir's cool May and June especially welcome."
            },
            {
              "heading": "Gifts to take home to Nagpur",
              "body": "Travellers returning to Nagpur usually buy saffron from Pampore, dry fruits such as walnuts and almonds, kahwa mix, papier-mache boxes, walnut wood items, embroidered stoles and pashmina shawls. Buy from established showrooms or government emporiums with bills, pack food items in sealed boxes for the flight or train, and check airline baggage limits before buying heavy items such as carpets, which shops can ship to Nagpur."
            },
            {
              "heading": "Documents and phones for travellers from Nagpur",
              "body": "Carry original photo ID for every traveller from Nagpur, with printed copies, since hotels, houseboats, checkpoints and the gondola ask for ID. Convert prepaid SIMs to postpaid before the trip, because prepaid connections from outside J&K do not work in Kashmir. Save hotel, driver and agent numbers, and keep bookings offline."
            },
            {
              "heading": "A 6-night Kashmir plan from Nagpur",
              "body": "Night 1: Srinagar houseboat and sunset shikara. Night 2: Srinagar, Mughal Gardens and old city. Day 3: Gulmarg day trip. Nights 4 and 5: Pahalgam with Aru, Betaab and Chandanwari by union taxi. Night 6: Srinagar, Sonamarg day trip, then departure."
            }
          ],
          "faqs": [
            {
              "q": "Can I reach Kashmir by train from Nagpur?",
              "a": "Trains from Nagpur reach Delhi in about a day, with onward connections to Jammu Tawi or Katra and the Vande Bharat."
            },
            {
              "q": "What is the best month to visit Kashmir from Nagpur?",
              "a": "Most travellers from Nagpur go in May and June, Diwali and December; April and October are also beautiful and less crowded."
            },
            {
              "q": "What should I buy in Kashmir to take home to Nagpur?",
              "a": "Saffron, dry fruits, kahwa mix, papier-mache, walnut wood items, embroidered stoles and pashmina from established shops."
            },
            {
              "q": "Will my prepaid SIM from Nagpur work in Kashmir?",
              "a": "No. Prepaid connections from outside J&K do not work; convert to postpaid before travelling."
            }
          ]
        },
        "kochi": {
          "blocks": [
            {
              "heading": "First and last day of a Kashmir trip from Kochi",
              "body": "Kochi travellers usually fly via Delhi, Mumbai or Bengaluru, often reaching Srinagar the same day. Plan a gentle first afternoon: check in to a houseboat or lake-view hotel, take a sunset shikara and have an early dinner. On the last day, keep a morning activity close to Srinagar, such as the Mughal Gardens or a craft workshop, and leave for the airport with a buffer, since security checks at Srinagar airport can take time."
            },
            {
              "heading": "Kashmir by train from Kochi",
              "body": "The rail journey from Kochi is very long, so most travellers fly at least one way. The train suits travellers who prefer rail, families with lots of luggage and pilgrims combining Vaishno Devi. Book early on IRCTC, especially for May, June and the festive season."
            },
            {
              "heading": "When Kochi travellers go, and why",
              "body": "Most travellers from Kochi visit Kashmir in the Onam and Christmas holidays, May, and October. Coming from Kerala's warm, humid climate, Kochi travellers feel Kashmir's cold sharply, so pack more layers than you expect."
            },
            {
              "heading": "Gifts to take home to Kochi",
              "body": "Travellers returning to Kochi usually buy saffron from Pampore, dry fruits such as walnuts and almonds, kahwa mix, papier-mache boxes, walnut wood items, embroidered stoles and pashmina shawls. Buy from established showrooms or government emporiums with bills, pack food items in sealed boxes for the flight or train, and check airline baggage limits before buying heavy items such as carpets, which shops can ship to Kochi."
            },
            {
              "heading": "Documents and phones for travellers from Kochi",
              "body": "Carry original photo ID for every traveller from Kochi, with printed copies, since hotels, houseboats, checkpoints and the gondola ask for ID. Convert prepaid SIMs to postpaid before the trip, because prepaid connections from outside J&K do not work in Kashmir. Save hotel, driver and agent numbers, and keep bookings offline."
            },
            {
              "heading": "A 6-night Kashmir plan from Kochi",
              "body": "Night 1: Srinagar houseboat and sunset shikara. Night 2: Srinagar, Mughal Gardens and old city. Day 3: Gulmarg day trip. Nights 4 and 5: Pahalgam with Aru, Betaab and Chandanwari by union taxi. Night 6: Srinagar, Sonamarg day trip, then departure."
            }
          ],
          "faqs": [
            {
              "q": "Can I reach Kashmir by train from Kochi?",
              "a": "The rail journey from Kochi is very long, so most travellers fly at least one way."
            },
            {
              "q": "What is the best month to visit Kashmir from Kochi?",
              "a": "Most travellers from Kochi go in the Onam and Christmas holidays, May, and October; April and October are also beautiful and less crowded."
            },
            {
              "q": "What should I buy in Kashmir to take home to Kochi?",
              "a": "Saffron, dry fruits, kahwa mix, papier-mache, walnut wood items, embroidered stoles and pashmina from established shops."
            },
            {
              "q": "Will my prepaid SIM from Kochi work in Kashmir?",
              "a": "No. Prepaid connections from outside J&K do not work; convert to postpaid before travelling."
            }
          ]
        },
        "indore": {
          "blocks": [
            {
              "heading": "First and last day of a Kashmir trip from Indore",
              "body": "Indore travellers usually fly via Delhi or Mumbai, reaching Srinagar by afternoon. Plan a gentle first afternoon: check in to a houseboat or lake-view hotel, take a sunset shikara and have an early dinner. On the last day, keep a morning activity close to Srinagar, such as the Mughal Gardens or a craft workshop, and leave for the airport with a buffer, since security checks at Srinagar airport can take time."
            },
            {
              "heading": "Kashmir by train from Indore",
              "body": "Trains run from Indore to Delhi and Jammu Tawi, with the Vande Bharat from Katra to Srinagar. The train suits travellers who prefer rail, families with lots of luggage and pilgrims combining Vaishno Devi. Book early on IRCTC, especially for May, June and the festive season."
            },
            {
              "heading": "When Indore travellers go, and why",
              "body": "Most travellers from Indore visit Kashmir in May and June, Diwali and December. Indore's street food lovers will enjoy Srinagar's evening kebab and tujj stalls at Khayam Chowk and the bakeries of the old city."
            },
            {
              "heading": "Gifts to take home to Indore",
              "body": "Travellers returning to Indore usually buy saffron from Pampore, dry fruits such as walnuts and almonds, kahwa mix, papier-mache boxes, walnut wood items, embroidered stoles and pashmina shawls. Buy from established showrooms or government emporiums with bills, pack food items in sealed boxes for the flight or train, and check airline baggage limits before buying heavy items such as carpets, which shops can ship to Indore."
            },
            {
              "heading": "Documents and phones for travellers from Indore",
              "body": "Carry original photo ID for every traveller from Indore, with printed copies, since hotels, houseboats, checkpoints and the gondola ask for ID. Convert prepaid SIMs to postpaid before the trip, because prepaid connections from outside J&K do not work in Kashmir. Save hotel, driver and agent numbers, and keep bookings offline."
            },
            {
              "heading": "A 6-night Kashmir plan from Indore",
              "body": "Night 1: Srinagar houseboat and sunset shikara. Night 2: Srinagar, Mughal Gardens and old city. Day 3: Gulmarg day trip. Nights 4 and 5: Pahalgam with Aru, Betaab and Chandanwari by union taxi. Night 6: Srinagar, Sonamarg day trip, then departure."
            }
          ],
          "faqs": [
            {
              "q": "Can I reach Kashmir by train from Indore?",
              "a": "Trains run from Indore to Delhi and Jammu Tawi, with the Vande Bharat from Katra to Srinagar."
            },
            {
              "q": "What is the best month to visit Kashmir from Indore?",
              "a": "Most travellers from Indore go in May and June, Diwali and December; April and October are also beautiful and less crowded."
            },
            {
              "q": "What should I buy in Kashmir to take home to Indore?",
              "a": "Saffron, dry fruits, kahwa mix, papier-mache, walnut wood items, embroidered stoles and pashmina from established shops."
            },
            {
              "q": "Will my prepaid SIM from Indore work in Kashmir?",
              "a": "No. Prepaid connections from outside J&K do not work; convert to postpaid before travelling."
            }
          ]
        }
      }
    }
  },
  "ladakh": {
    "blocks": [
      {
        "heading": "Ladakh at a glance",
        "body": "Ladakh is a high cold desert in India's far north, a union territory since 2019, stretching from the Zanskar and Great Himalaya ranges to the Karakoram. Most of it lies above 3,000 m. Its main town, Leh, sits in the Indus valley at about 3,500 m, and its western district, Kargil, lies on the road from Srinagar. Visitors come for monasteries such as Thiksey, Hemis and Diskit, lakes such as Pangong and Tso Moriri, the sand dunes and Bactrian camels of Nubra, high passes such as Khardung La and Chang La, dark skies at Hanle and some of India's great road trips."
      },
      {
        "heading": "How to plan a Ladakh trip",
        "body": "Choose how you will arrive: by flight to Leh, the quickest way but straight to high altitude, or by road from Srinagar via Zojila and Kargil, or from Manali over the high passes, both open only in summer. Allow at least one full rest day in Leh to acclimatise. Most first trips take 6 to 8 nights: Leh, Nubra over Khardung La, Pangong, and back to Leh, with Tso Moriri, Hanle or Turtuk as extensions. Get inner line permits for protected areas before leaving Leh."
      },
      {
        "heading": "Ladakh month by month",
        "body": "January and February: extreme cold, frozen Zanskar for the Chadar trek and snow leopard trips, flights only. March and April: still cold, roads closed, quiet Leh. May: roads start to open, cool days. June: the season opens fully, with snow on the passes and festivals such as Hemis in some years. July and August: the warmest and busiest months, with occasional rain causing landslides. September: clear skies and fewer visitors, one of the best months. October: cold nights, golden poplars, roads beginning to close. November and December: very cold, flights only."
      },
      {
        "heading": "Permits for Ladakh",
        "body": "Indian visitors need an inner line permit for protected areas including Nubra, Pangong, Tso Moriri, Hanle and Turtuk, issued online or in Leh and usually arranged by hotels or agents. Foreign nationals need a Protected Area Permit, applied for through a registered agent. Carry printed copies for checkposts along the routes."
      },
      {
        "heading": "Altitude and health in Ladakh",
        "body": "Acute mountain sickness is the main health risk in Ladakh. Rest on the first day in Leh, drink plenty of water, avoid alcohol and heavy meals, and do not cross high passes until you have acclimatised for at least 36 to 48 hours. Sleep lower where possible, for example in Nubra rather than at Pangong on your first high night. Consult a doctor before travelling if you have heart, lung or blood pressure conditions."
      },
      {
        "heading": "Getting around Ladakh",
        "body": "Local sightseeing in Ladakh is done in Ladakh-registered taxis under union rules, either through a package or the Leh taxi union. Outside vehicles can drop travellers in Leh but not do local tours. Bikers usually rent motorcycles in Leh for the same reason. Roads range from smooth highways to rough mountain tracks with water crossings."
      },
      {
        "heading": "Culture and food in Ladakh",
        "body": "Ladakh's culture is shaped by Tibetan Buddhism in Leh and the east and by Shia Islam in Kargil and the west. Monasteries hold festivals with masked cham dances, and villages celebrate Losar, the Ladakhi new year, in winter. Try thukpa, momos, skyu, tingmo, butter tea and apricot dishes, along with North Indian food in Leh's restaurants."
      },
      {
        "heading": "Leh, Nubra, Pangong and beyond: the regions of Ladakh",
        "body": "Ladakh divides naturally into regions: the Indus valley around Leh, with its palaces and monasteries; Nubra, over Khardung La, with dunes, camels and Turtuk; the Changthang plateau in the east, with Pangong, Tso Moriri, Tso Kar and Hanle; the Sham valley west of Leh, with Likir, Alchi and Lamayuru; Kargil district, with Drass and the Suru valley; and remote Zanskar to the south. Most first trips cover the Indus valley, Nubra and Pangong."
      },
      {
        "heading": "Ladakh for families and senior citizens",
        "body": "Ladakh is possible for families and older travellers with careful planning: arrive by road from Srinagar for gradual acclimatisation or rest two full days in Leh after flying in, sleep in Nubra rather than at Pangong, keep drives short, choose heated hotels and camps with attached bathrooms, and consult a doctor before the trip. Carry a pulse oximeter and any medicines your doctor recommends."
      },
      {
        "heading": "Biking in Ladakh",
        "body": "Ladakh is India's best-known motorcycle destination. Riders rent bikes in Leh or ride in from Manali or Srinagar, covering Khardung La, Chang La, the Shyok road and, for experienced riders, Hanle and Umling La. Ride only after acclimatising, in daylight, with full gear, spares and at least one other rider, and carry permits and the bike's documents."
      },
      {
        "heading": "Ladakh on a budget",
        "body": "Budget travellers keep costs down with shared taxis to Nubra and Pangong, guesthouses and homestays, travel in June or September outside peak weeks, and Ladakhi food in local eateries. Shared tours from Leh are the most economical way to see the lakes and valleys alone or as a couple."
      },
      {
        "heading": "Responsible travel in Ladakh",
        "body": "Ladakh's environment is fragile and its water scarce. Refill bottles at filtered water stations in Leh, avoid single-use plastic, stay on marked tracks, never drive on dunes or lake shores, carry rubbish back to Leh and respect monastery rules and local customs. Choose homestays and local operators to support Ladakhi communities."
      },
      {
        "heading": "Ladakh with Kashmir",
        "body": "Combining Ladakh with Kashmir is popular in summer: a few nights in Srinagar, Gulmarg and Pahalgam, then two days by road to Leh via Zojila and Kargil, and a week in Ladakh. The road climbs gradually, which helps acclimatisation, and you see the change from green Kashmir to Ladakh's high desert."
      }
    ],
    "faqs": [
      {
        "q": "Is Ladakh part of Jammu and Kashmir?",
        "a": "No. Ladakh has been a separate union territory since 2019."
      },
      {
        "q": "What is the best time to visit Ladakh?",
        "a": "June to September, when roads and passes are open. September is clear and less crowded."
      },
      {
        "q": "How many days are needed for Ladakh?",
        "a": "Six to eight nights for Leh, Nubra and Pangong, with a rest day in Leh."
      },
      {
        "q": "Do I need a permit for Ladakh?",
        "a": "Inner line permits for protected areas such as Nubra and Pangong; foreign nationals need a Protected Area Permit."
      },
      {
        "q": "What are the main regions of Ladakh?",
        "a": "The Indus valley around Leh, Nubra, Changthang with Pangong and Tso Moriri, the Sham valley, Kargil and Zanskar."
      },
      {
        "q": "Is Ladakh good for senior citizens?",
        "a": "Possible with careful acclimatisation, short drives, heated stays and a doctor's advice."
      },
      {
        "q": "Can I visit Ladakh on a budget?",
        "a": "Yes, with shared taxis and tours, guesthouses and travel outside peak weeks."
      },
      {
        "q": "Can I combine Ladakh with Kashmir?",
        "a": "Yes, in summer: Kashmir first, then two days by road to Leh via Kargil."
      },
      {
        "q": "Which region of Ladakh should I see first?",
        "a": "Leh and the Indus valley, then Nubra and Pangong."
      },
      {
        "q": "Is Ladakh open in winter?",
        "a": "Yes by air; the roads from Srinagar and Manali close in winter."
      }
    ],
    "packages": {
      "blocks": [
        {
          "heading": "What a Ladakh tour package includes",
          "body": "A Ladakh package usually includes hotels in Leh, camps or hotels in Nubra and Pangong, a Ladakh-registered vehicle with driver for all sightseeing, airport transfers in Leh, inner line permits and breakfast and dinner. Flights to and from Leh, monastery entry fees, camel rides and personal expenses are usually extra. Packages that start from Srinagar or Manali also include the road journey and a night halt."
        },
        {
          "heading": "Popular Ladakh package routes",
          "body": "The classic 6-night circuit covers Leh, Nubra over Khardung La and Pangong via the Shyok road or Chang La. A 7 to 8 night plan adds Tso Moriri or Hanle. Longer trips add Turtuk, Zanskar or the Srinagar to Leh and Leh to Manali roads. Bike tours follow the same routes with a backup vehicle."
        },
        {
          "heading": "Choosing the right Ladakh package",
          "body": "Check that the itinerary includes a full rest day in Leh, that nights at Pangong come after Nubra rather than on the second day, that the vehicle is an Innova, Innova Crysta or similar with an experienced driver, and that permits are included. Compare named hotels and camps, especially at Pangong, where standards vary widely."
        },
        {
          "heading": "Ladakh packages for families and seniors",
          "body": "Families and senior travellers do best with an unhurried plan: two rest days in Leh, Nubra before Pangong, comfortable hotels and short driving days. Some families visit only Leh and Nubra, which has a lower sleeping altitude than Pangong. Consult a doctor before the trip and carry any recommended medication."
        },
        {
          "heading": "A 6-night Ladakh package plan",
          "body": "Nights 1 and 2: Leh, with complete rest on day 1 and an easy day of Shanti Stupa and Leh Palace on day 2. Night 3: Nubra over Khardung La, with Diskit and the Hunder dunes. Night 4: Pangong via the Shyok road. Night 5: back to Leh via Chang La. Night 6: Leh, with Thiksey, Hemis and Shey, before the flight home."
        },
        {
          "heading": "An 8-night Ladakh package with Tso Moriri",
          "body": "Add two nights to the classic plan: after returning from Pangong, drive to Tso Moriri via the Indus valley and Sumdo, stay at Korzok, and return to Leh via Tso Kar. This adds the quieter, higher lakes of Changthang, with rich birdlife and nomadic Changpa culture."
        },
        {
          "heading": "Ladakh packages from Srinagar",
          "body": "Packages that start in Srinagar spend a few nights in Kashmir, then drive to Leh over two days via Sonamarg, Zojila, Drass and Kargil, with stops at the Kargil War Memorial and Lamayuru. This gradual climb is the best way to acclimatise. In Leh, a Ladakh-registered vehicle takes over for local sightseeing."
        },
        {
          "heading": "Ladakh packages from Manali",
          "body": "Packages from Manali cross the Atal tunnel, Baralacha La and Tanglang La over two days with a night at Jispa or Sarchu. The route is spectacular but climbs quickly to high camps, so altitude can be a problem. The road is usually open from June to October."
        },
        {
          "heading": "Camps at Nubra and Pangong",
          "body": "Package camps range from simple tents to deluxe Swiss tents with attached bathrooms and heating. Ask for the camp's name, location, bathroom type, heating arrangements and electricity hours, especially at Pangong, where nights are very cold and standards vary."
        },
        {
          "heading": "Ladakh packages for families",
          "body": "Family packages keep the pace slow: two rest days in Leh, Nubra before Pangong, short drives, heated rooms and camps with attached bathrooms, and the option of skipping the Pangong overnight for a day visit. Consult a doctor before travelling with young children or older family members."
        },
        {
          "heading": "Ladakh packages for bikers",
          "body": "Bike packages include a rented motorcycle in Leh, a backup vehicle for luggage and breakdowns, a mechanic, a road captain, permits, stays and meals. Routes usually cover Khardung La, Nubra, the Shyok road, Pangong and Chang La, with Hanle or Umling La for experienced riders."
        },
        {
          "heading": "Best time for a Ladakh package",
          "body": "June to September is the main season, with all roads open. June has snow on the passes; July and August are warmest but can bring rain and landslides; September is clear and less crowded. Winter packages from November to March are flight-only, focused on Leh, monasteries, the Chadar trek and snow leopard tours."
        },
        {
          "heading": "What Ladakh packages usually exclude",
          "body": "Most Ladakh packages exclude flights to and from Leh, lunch, monastery entry fees, camel rides in Nubra, rafting, personal expenses, oxygen cylinders unless requested, and any extra nights caused by road closures. Ask for the exclusions in writing."
        }
      ],
      "faqs": [
        {
          "q": "Do Ladakh packages include permits?",
          "a": "Most include inner line permits for Nubra and Pangong. Confirm when booking."
        },
        {
          "q": "Can I start a Ladakh package from Srinagar?",
          "a": "Yes, by road via Zojila and Kargil in summer, which helps acclimatisation."
        },
        {
          "a": "Six to eight days covers Leh, Nubra Valley and Pangong Lake with time to acclimatise. Add two or three days for Tso Moriri, Turtuk or a road trip from Srinagar or Manali.",
          "q": "How many days do I need for Ladakh?"
        },
        {
          "a": "May to September, when the weather is mild and all routes are open. The highways from Srinagar and Manali usually open from late May or June.",
          "q": "When is the best time to visit Ladakh?"
        },
        {
          "a": "Leh town does not need one, but Nubra Valley, Pangong, Tso Moriri and other protected areas need a permit and environment fees. Agents and hotels arrange this for you.",
          "q": "Do I need a permit for Ladakh?"
        },
        {
          "a": "Spend the first one to two days in Leh resting, drink water, avoid alcohol and climb gradually. Speak to a doctor before travel if you have heart or lung conditions.",
          "q": "How do I avoid altitude sickness in Ladakh?"
        },
        {
          "a": "Flying is faster and easier, especially for families. Driving from Manali or Srinagar adds two days but acclimatises you gradually and shows some of the most dramatic mountain roads in India.",
          "q": "Is it better to fly or drive to Ladakh?"
        },
        {
          "a": "Yes, by flight. Winter trips focus on Leh, frozen landscapes, the Chadar trek and snow leopard tours, but temperatures fall well below freezing and some areas are closed.",
          "q": "Can I visit Ladakh in winter?"
        },
        {
          "a": "Yes. Camps and simple guesthouses operate along the lake in season, and an overnight stay lets you see the lake at sunrise and sunset.",
          "q": "Can I stay overnight at Pangong Lake?"
        },
        {
          "a": "Share your dates and whether you want to fly in or drive. Up to 3 verified agents who run Ladakh trips send itineraries with acclimatisation days, permits and stays included.",
          "q": "How do Ladakh quotes on Tavel Package work?"
        },
        {
          "a": "Leh town does not need a permit. For protected areas such as Nubra, Pangong and Tso Moriri, register and pay the fees on lahdclehpermit.in; foreign nationals need a Protected Area Permit through a registered agent.",
          "q": "Do I need an ILP for Leh Ladakh?"
        },
        {
          "a": "Monastery visits, the drives over Khardung La and Chang La, camel rides at Hunder, rafting on the Zanskar, camping at Pangong and Tso Moriri, and motorbike tours.",
          "q": "What are the best activities to do in Leh Ladakh?"
        },
        {
          "a": "Within a day of Leh: Thiksey, Hemis, Shey, Stok, Alchi, Likir, Magnetic Hill and the Indus Zanskar Sangam. Overnight: Nubra Valley, Pangong Tso and Tso Moriri.",
          "q": "What are the places to see near Leh Ladakh?"
        },
        {
          "a": "June is the start of peak season, with days of about 20 to 25°C in Leh, freezing nights at the lakes, and both the Manali and Srinagar highways usually open during the month.",
          "q": "How is Leh Ladakh in June?"
        },
        {
          "a": "Yes. By the end of June both highways are normally open, all circuits including Tso Moriri are accessible, and Leh has warm days of about 24°C.",
          "q": "Is Ladakh good in June end?"
        },
        {
          "a": "Clear and calm, with days around 20 to 23°C in Leh and nights near freezing. It is one of the best months for photography and the Ladakh Festival.",
          "q": "How is Leh Ladakh in September?"
        },
        {
          "a": "In June and August, light layers for the day plus a fleece and a down jacket for nights and passes. In September add thermal inner wear. Always carry sunglasses, a sun hat and sunscreen.",
          "q": "What clothes should I wear in Leh Ladakh in June, August and September?"
        },
        {
          "a": "Ride Delhi to Manali (2 days), Manali to Leh via Jispa or Sarchu (2 days), spend 4 to 5 days on Leh, Nubra and Pangong, then return via Kargil and Srinagar (3 to 4 days). Allow 12 to 14 days in total.",
          "q": "How do I plan a Delhi to Ladakh bike trip?"
        },
        {
          "a": "Riders usually choose a 350 to 450 cc motorcycle such as the Royal Enfield Classic, Bullet or Himalayan, rented in Leh or Manali. Carry spares and check the rental's rules for Nubra and Pangong.",
          "q": "Which bike is best for a Ladakh trip?"
        },
        {
          "a": "Dry and sunny, with Leh averaging a high of about 28°C and a low of about 16°C (IMD normals), and very little rain. Nights at Pangong and the passes are much colder.",
          "q": "What is the climate in Leh Ladakh in July?"
        },
        {
          "q": "What is a good 6-night Ladakh package?",
          "a": "Two nights in Leh, Nubra, Pangong, back to Leh and a final day of monasteries."
        },
        {
          "q": "Can a Ladakh package include Tso Moriri?",
          "a": "Yes, an 8-night plan adds Tso Moriri and Tso Kar."
        },
        {
          "q": "Which camps are used at Pangong?",
          "a": "From simple tents to deluxe Swiss tents with attached bathrooms; ask for the camp's name and heating."
        },
        {
          "q": "Are there Ladakh packages for families?",
          "a": "Yes, with rest days in Leh, Nubra before Pangong, short drives and heated stays."
        },
        {
          "q": "What do Ladakh bike packages include?",
          "a": "A rented motorcycle, backup vehicle, mechanic, road captain, permits, stays and meals."
        },
        {
          "q": "What do Ladakh packages exclude?",
          "a": "Usually flights, lunch, monastery fees, camel rides, rafting and extra nights from road closures."
        },
        {
          "q": "How early should I book a Ladakh package?",
          "a": "Two to three months ahead for June to August, especially for camps at Pangong and Nubra."
        },
        {
          "q": "Do Ladakh packages include oxygen?",
          "a": "Some include oxygen cylinders in the vehicle on request; ask when booking."
        },
        {
          "q": "Is a Ladakh package good for a first trip?",
          "a": "Yes, a 6-night package with rest days in Leh is the easiest way to see Ladakh first time."
        }
      ]
    }
  }
};

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
      },
      {
        "heading": "Khilanmarg and Alpather",
        "body": "Khilanmarg is a meadow above Gulmarg, about 6 km away, reached by a walk or pony ride through forest, with views of Nanga Parbat on clear days and wild flowers in summer. Alpather lake, higher up below Apharwat peak, stays frozen into June and is reached on a longer trek with a guide in summer."
      },
      {
        "heading": "St Mary's Church and the Maharani temple",
        "body": "St Mary's Church, built in 1902 during the British era, is a small stone church in the middle of the Gulmarg meadow. The Maharani temple, also called the Rani temple, built by the Dogra rulers, stands on a hillock and was made famous by Hindi films. Both are short walks or pony rides from the main market."
      },
      {
        "heading": "Strawberry Valley and Seven Springs",
        "body": "Strawberry Valley and Seven Springs are viewpoints and meadows reached by pony from Gulmarg, popular in summer for picnics and views. Pony association routes and rates list these points; agree the route at the counter."
      },
      {
        "heading": "Golf in Gulmarg",
        "body": "Gulmarg's golf course, one of the highest in the world at about 2,650 m, lies in the main meadow and is open in the warmer months. Visitors can book rounds and hire equipment. It is a scenic course with views of the surrounding peaks."
      },
      {
        "heading": "Gulmarg Biosphere Reserve",
        "body": "The forests around Gulmarg are part of a protected area, home to musk deer, Himalayan black bear, leopards and many birds. Stay on marked paths, do not leave food or rubbish, and avoid walking alone in the forests at dawn and dusk."
      },
      {
        "heading": "Gulmarg for families",
        "body": "Families enjoy the gondola Phase 1 to Kongdori, sledging, pony rides around the meadow, St Mary's Church and the golf course. Dress children warmly, book gondola tickets online and plan a relaxed day."
      },
      {
        "heading": "How to reach Gulmarg",
        "body": "Gulmarg is about 50 km from Srinagar, usually 1.5 to 2 hours by road via Magam and Tangmarg. The last stretch from Tangmarg climbs through pine forest on a winding road with views over the valley. In winter, the road is cleared after snowfall, but vehicles may need snow chains or four-wheel drive, which can be hired at Tangmarg. Shared taxis run from Srinagar to Tangmarg and on to Gulmarg, but most visitors hire a private car for the day or an overnight stay."
      },
      {
        "heading": "Gulmarg day trip plan",
        "body": "Leave Srinagar by 7.30 am to reach Gulmarg by 9.30 am. Take the gondola to Kongdori first, then Phase 2 to Apharwat if your ticket and the weather allow. Return to Gulmarg by early afternoon, have lunch at a hotel, and spend an hour on a pony ride or a walk to St Mary's Church. Leave Gulmarg by 4 pm to reach Srinagar before dark, especially in winter."
      },
      {
        "heading": "Gulmarg overnight: is it worth it?",
        "body": "An overnight stay in Gulmarg lets you take the first gondola cabins before the crowds, see the meadow at sunset and sunrise, and enjoy a quieter evening in the snow. It suits skiers, honeymooners, photographers and families who want a slower pace. Day trippers save on hotel costs and can still see the main sights, but spend more time in the car and in queues."
      },
      {
        "heading": "Gulmarg in spring",
        "body": "From March to May, Gulmarg's lower meadows thaw while Kongdori and Apharwat keep their snow, making it possible to see snow and spring flowers in one trip. Ski courses run into late March or early April, depending on snow. Gondola queues are long in April, so book tickets online in advance."
      },
      {
        "heading": "Gulmarg in autumn",
        "body": "September and October bring clear skies, golden meadows and crisp air, with fewer crowds and lower hotel rates than in summer or winter. The gondola gives sweeping views of the Pir Panjal and, on clear days, Nanga Parbat. Nights are cold, so pack warm layers. November sometimes brings the first snow."
      },
      {
        "heading": "Gulmarg shopping and markets",
        "body": "Gulmarg's small market near the bus stand sells woollens, caps, gloves, snow boots for hire, dry fruit and souvenirs. Prices are higher than in Srinagar, and quality varies, so buy major items such as pashmina and carpets in Srinagar. Ski and snow gear can be hired from shops near the gondola base."
      },
      {
        "heading": "Gulmarg mistakes to avoid",
        "body": "Not booking gondola tickets online in advance, arriving late in the morning, underestimating the cold at Apharwat, going to Phase 2 without acclimatising if you have health conditions, hiring ponies without agreeing the route at the counter, and leaving Gulmarg after dark in winter are the most common mistakes."
      },
      {
        "heading": "Gulmarg for older travellers",
        "body": "Older travellers can comfortably enjoy Gulmarg by car and the gondola's Phase 1 to Kongdori, with ponies or short sledge rides instead of long walks on snow. Phase 2 reaches nearly 4,000 m and is not advisable for those with heart, lung or blood pressure conditions. Choose a hotel near the gondola base with heating and ground-floor rooms."
      },
      {
        "heading": "Gulmarg for honeymooners",
        "body": "Gulmarg is one of Kashmir's favourite honeymoon spots, with snow-covered resorts, the gondola, sleigh rides and cosy evenings. Book a room with views of the Pir Panjal and a fireplace or heating, ask for room decoration, and plan an overnight stay rather than a rushed day trip."
      },
      {
        "heading": "Gulmarg weather by month",
        "body": "January and February: the coldest months, with deep snow and the ski season at its peak. March: still snowy, with sunny days. April and May: snow at Kongdori and Apharwat, green lower meadows. June to August: pleasant days of around 20 degrees Celsius, cool nights and occasional rain. September and October: clear, crisp and golden. November: cold, the first snow in many years. December: snow returns and the ski season begins."
      },
      {
        "heading": "Skiing lessons for beginners",
        "body": "Beginners can take ski lessons in Gulmarg with certified instructors from the Indian Institute of Skiing and Mountaineering or private schools, usually on the gentle slopes near the gondola base and at Kongdori. Courses range from a single day to a week or more. Equipment can be hired locally. January to March is the best time."
      },
      {
        "heading": "Gulmarg and Tangmarg",
        "body": "Tangmarg, about 13 km below Gulmarg, is the last town before the climb, with shops, fuel, snow chain and vehicle hire, and dhabas. In winter, chains are fitted here. Drang waterfall near Tangmarg, frozen in winter, is a short detour."
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
      },
      {
        "q": "What is St Mary's Church in Gulmarg?",
        "a": "A small stone church built in 1902 in the Gulmarg meadow."
      },
      {
        "q": "Is there a golf course in Gulmarg?",
        "a": "Yes, one of the highest in the world, open in the warmer months."
      },
      {
        "q": "How far is Khilanmarg from Gulmarg?",
        "a": "About 6 km, by walk or pony through forest."
      },
      {
        "q": "Is an overnight stay in Gulmarg worth it?",
        "a": "Yes, for early gondola rides, sunset and sunrise, skiing and a quieter evening."
      },
      {
        "q": "Do I need snow chains for Gulmarg?",
        "a": "In winter after snowfall, vehicles may need chains or four-wheel drive from Tangmarg."
      },
      {
        "q": "Is Gulmarg suitable for senior citizens?",
        "a": "Yes, by car and gondola Phase 1, avoiding long snow walks and Phase 2 if there are health concerns."
      },
      {
        "q": "Where can beginners learn skiing in Gulmarg?",
        "a": "With certified instructors from the Indian Institute of Skiing and Mountaineering or private schools, on gentle slopes near the gondola base."
      },
      {
        "q": "What is Tangmarg?",
        "a": "The town 13 km below Gulmarg, with shops, fuel and snow chain hire for the final climb."
      },
      {
        "q": "Is Drang waterfall near Gulmarg?",
        "a": "Yes, near Tangmarg, and it freezes in winter."
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
      },
      {
        "heading": "Lidder river",
        "body": "The Lidder river flows through Pahalgam, formed by the east branch from Sheshnag and the west branch from Kolahoi glacier, which meet at Pahalgam. Its clear, cold water is known for trout and white-water rafting, and its banks are lined with pine forests and willows. Riverside walks are one of the best things to do in Pahalgam."
      },
      {
        "heading": "Kolahoi glacier and Tarsar lake",
        "body": "Treks from Aru lead to Lidderwat, Kolahoi glacier below Kolahoi peak, the highest in the Kashmir valley, and Tarsar and Marsar lakes, among the most beautiful alpine lakes in Kashmir. These treks need licensed operators and guides, and run from June to September."
      },
      {
        "heading": "Mamleshwar temple",
        "body": "The small stone Mamleshwar temple, dedicated to Shiva, stands across the river from the main market and is among the oldest temples in the Pahalgam area. It is a short walk from the town."
      },
      {
        "heading": "Pahalgam for families",
        "body": "Families enjoy Betaab Valley's flat paths, the snow bridge at Chandanwari, pony rides, the riverside and hotels with lawns. Keep children away from the fast river, and choose hotels on level ground with heating in cold months."
      },
      {
        "heading": "Pahalgam golf course",
        "body": "Pahalgam's golf course lies in a valley ringed by pine forests and mountains, open in the warmer months to visitors who book a round with equipment hire."
      },
      {
        "heading": "How to reach Pahalgam",
        "body": "Pahalgam is about 95 km from Srinagar, usually 2.5 to 3 hours by road via Pampore, Awantipora, Bijbehara and Anantnag, then up the Lidder valley through apple orchards and pine forest. From Jammu, it is about 250 km via the Navyug tunnel and Anantnag. Shared taxis run from Srinagar and Anantnag, but most visitors hire a private car, which then waits while union taxis are used for local sightseeing."
      },
      {
        "heading": "Pahalgam union taxi points explained",
        "body": "From the Pahalgam taxi stand, union taxis serve three main points: Aru Valley, about 12 km up the west Lidder; Betaab Valley, about 15 km up the east Lidder; and Chandanwari, about 16 km, at the start of the Amarnath route. Rates are fixed per point or per combination and displayed at the stand. Your Srinagar car cannot do these trips."
      },
      {
        "heading": "Stops on the way to Pahalgam",
        "body": "The drive from Srinagar passes the saffron fields of Pampore, best in late October and early November when the crocus flowers bloom; the 9th-century Avantiswami temple ruins at Awantipora; the willow cricket bat workshops around Sangam and Bijbehara; and the Martand Sun temple ruins near Anantnag, a short detour. Plan one or two stops to break the drive."
      },
      {
        "heading": "A 2-night Pahalgam plan",
        "body": "Day 1: drive from Srinagar with stops at Pampore and Awantipora, check in by the river and walk along the Lidder in the evening. Day 2: union taxi to Betaab Valley and Chandanwari in the morning and Aru Valley in the afternoon. Day 3: a relaxed morning by the river or a pony ride, then drive back to Srinagar or on to Gulmarg."
      },
      {
        "heading": "Pahalgam in spring",
        "body": "March to May brings snowmelt, rushing streams, blossom in the orchards and snow at Chandanwari and higher points. April and May are pleasant and less crowded than June. Some upper roads open later in spring, so check with the union taxi stand."
      },
      {
        "heading": "Pahalgam in autumn",
        "body": "September and October bring clear skies, golden willows and poplars, crisp mornings and fewer visitors. It is one of the most beautiful times in Pahalgam, ideal for photographers and couples. Nights are cold, so pack warm layers."
      },
      {
        "heading": "Pahalgam mistakes to avoid",
        "body": "Assuming your own car can do Aru and Betaab, visiting during the peak Amarnath Yatra weeks if you want quiet roads, doing Pahalgam as a rushed day trip, forgetting a postpaid SIM, and not checking current access to meadows such as Baisaran are the most common mistakes."
      },
      {
        "heading": "Pahalgam for honeymooners",
        "body": "Pahalgam is ideal for honeymooners who want peace: riverside cottages and resorts by the Lidder, pine forest walks, picnics at Betaab and Aru, and quiet evenings. In winter, snowbound Pahalgam is a romantic, quieter alternative to Gulmarg. Book a river-view room with heating and ask for honeymoon inclusions."
      },
      {
        "heading": "Pahalgam for older travellers",
        "body": "Pahalgam's lower altitude and level riverside paths suit older travellers. Choose a hotel on level ground with lifts and heating, take the union taxi to Betaab Valley for its flat paths, and skip steep walks. Plan rest afternoons and carry regular medicines."
      },
      {
        "heading": "Pahalgam weather by month",
        "body": "January and February: heavy snow and freezing nights. March and April: snowmelt and cool days. May and June: pleasant and green, the busy season. July and August: warmest months with occasional rain, and the Amarnath Yatra. September and October: clear and crisp with golden colours. November and December: cold, with the first snow."
      },
      {
        "heading": "Trout fishing in Pahalgam",
        "body": "The Lidder and its tributaries hold brown trout, introduced in the early 20th century. Anglers need a permit from the J&K fisheries department, which manages fishing beats and seasons. Some hotels can arrange permits and guides. Catch limits and rules apply."
      },
      {
        "heading": "Pahalgam shopping in more detail",
        "body": "Pahalgam's main bazaar sells woollens, pherans, shawls, walnut wood items, dry fruit, saffron and souvenirs. Prices are usually higher than in Srinagar, so buy small items here and major purchases in Srinagar's established showrooms. Ask for a bill for anything expensive."
      },
      {
        "heading": "Pahalgam for adventure",
        "body": "Pahalgam offers rafting on the Lidder, pony treks to meadows, day hikes from Aru, multi-day treks to Kolahoi glacier and Tarsar Marsar, trout fishing with a permit and golf. Book with registered operators and check water levels and access before planning."
      },
      {
        "heading": "Pahalgam on a budget",
        "body": "Pahalgam has many budget guesthouses in the main market and along the river. Save by sharing a union taxi for Aru, Betaab and Chandanwari, eating at local restaurants and travelling outside the peak weeks of May, June and the Amarnath Yatra."
      },
      {
        "heading": "Pahalgam on a Kashmir itinerary",
        "body": "Most Kashmir itineraries give Pahalgam two nights in the middle of the trip, after Srinagar and Gulmarg and before a final houseboat night. Arriving by afternoon, you can walk by the Lidder the first evening, spend the next day on Aru, Betaab and Chandanwari, and leave after a relaxed morning."
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
      },
      {
        "q": "Where does the Lidder river come from?",
        "a": "From the Sheshnag lake (east branch) and Kolahoi glacier (west branch), meeting at Pahalgam."
      },
      {
        "q": "What treks start near Pahalgam?",
        "a": "Lidderwat, Kolahoi glacier and Tarsar Marsar from Aru."
      },
      {
        "q": "Is there a golf course in Pahalgam?",
        "a": "Yes, open in the warmer months."
      },
      {
        "q": "What stops are there on the way to Pahalgam?",
        "a": "Pampore saffron fields, Awantipora temple ruins, cricket bat workshops and the Martand Sun temple."
      },
      {
        "q": "How long is the drive from Jammu to Pahalgam?",
        "a": "About 250 km, usually 6 to 8 hours via the Navyug tunnel and Anantnag."
      },
      {
        "q": "Is Pahalgam good for a honeymoon?",
        "a": "Yes, with riverside resorts, pine forest walks and quiet evenings."
      },
      {
        "q": "Can I fish in Pahalgam?",
        "a": "Yes, with a permit from the J&K fisheries department."
      },
      {
        "q": "Is Pahalgam good on a budget?",
        "a": "Yes, with many guesthouses and shared union taxis."
      },
      {
        "q": "Where does Pahalgam fit on a Kashmir itinerary?",
        "a": "Usually two nights in the middle of the trip, between Srinagar and Gulmarg and a final houseboat night."
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
      },
      {
        "heading": "How to reach Sonamarg",
        "body": "Sonamarg is about 80 km from Srinagar on the Srinagar to Leh highway, NH1, usually 2 to 2.5 hours by road through Ganderbal, Kangan and Gund along the Sindh river. The Z-Morh tunnel near Gagangir, opened in January 2025, bypasses the avalanche-prone stretch below Sonamarg and keeps it reachable in winter. Shared taxis run from Srinagar, but most visitors hire a private car for a day trip or an overnight stay."
      },
      {
        "heading": "Thajiwas glacier in detail",
        "body": "Thajiwas glacier lies about 3 km from the main road, in a side valley ringed by peaks. The walk or pony ride passes through meadows and along a stream to the snowfields at the foot of the glacier, where visitors enjoy sledging and snow play. Snow usually lies here until June or July. Ponies are hired at fixed rates through the pony association counter. Do not climb onto the glacier itself, which can be dangerous."
      },
      {
        "heading": "Zero Point and Zojila",
        "body": "Beyond Sonamarg, the road climbs past Baltal to Zojila pass, about 3,500 m, the gateway to Ladakh. Zero Point is a snow point beyond Zojila, popular with tourists from spring to early summer for snow play. Access depends on road conditions and local rules, and is usually by local union taxis from Sonamarg. Check current status before planning a visit."
      },
      {
        "heading": "Baltal and the Amarnath Yatra",
        "body": "Baltal, about 15 km from Sonamarg, is the base camp for the shorter northern route of the Amarnath Yatra and the Baltal helipad for flights to Panjtarni. During the yatra in July and August, the area is busy with pilgrims, security and camps, and traffic on the Sonamarg road increases sharply. Tourists visiting in this period should expect delays and plan accordingly."
      },
      {
        "heading": "Treks from Sonamarg",
        "body": "Sonamarg is the start of the Kashmir Great Lakes trek, which passes Vishansar, Kishansar, Gadsar, Satsar and Gangabal lakes over about seven days. Shorter walks lead to Thajiwas and its waterfalls, and to Nichnai's meadows. Treks need licensed operators and guides, and the season runs from July to September."
      },
      {
        "heading": "Rafting and adventure in Sonamarg",
        "body": "The Sindh river below Sonamarg offers white-water rafting from late spring to summer, with registered operators near the main road. Pony rides, sledging in snow, short hikes and, in winter, snow play and skiing on gentle slopes are the other main activities. Use registered operators with helmets and life jackets, and avoid rafting when water levels are high."
      },
      {
        "heading": "Sonamarg in winter after the Z-Morh tunnel",
        "body": "Before the Z-Morh tunnel, Sonamarg was usually cut off for much of winter. Now it is reachable in most winter weeks, offering deep snow, quiet meadows and a growing range of winter stays. The road can still close for short spells after heavy snowfall, and Zojila beyond Sonamarg stays closed in winter. Choose heated hotels and pack full winter clothing."
      },
      {
        "heading": "Sonamarg day trip from Srinagar",
        "body": "Leave Srinagar by 8 am, stop at Kangan or Gund for tea, reach Sonamarg by 10.30 am, take a pony or walk to Thajiwas glacier, have lunch at a hotel or dhaba, and start back by 3 or 4 pm to reach Srinagar before dark. In spring and early summer, add Zero Point by local taxi if it is open."
      },
      {
        "heading": "Sonamarg for families and older travellers",
        "body": "Families enjoy Sonamarg's snow at Thajiwas, pony rides and the river views. Older travellers can enjoy the meadows and views near the road without the full walk to the glacier. Sonamarg is higher than Srinagar, at about 2,800 m, so walk slowly and carry warm layers even in summer."
      },
      {
        "heading": "Sonamarg on the way to Ladakh",
        "body": "Travellers driving from Srinagar to Leh often spend the first night in Sonamarg to cross Zojila early the next morning, when traffic is lighter and the road is in better condition. Fuel up at Kangan or Sonamarg, carry IDs for checkpoints at Sonamarg and Gumri, and check the Zojila opening times the evening before."
      },
      {
        "heading": "Sonamarg's name and history",
        "body": "Sonamarg means meadow of gold, a name often linked to the golden light on its meadows and to its position on the old trade route between Kashmir, Ladakh and Central Asia. For centuries, caravans crossed Zojila from here. Today it is a hill station, a base for the Amarnath Yatra and treks, and the gateway to Ladakh by road."
      },
      {
        "heading": "Sonamarg month by month",
        "body": "January and February: deep snow, now reachable through the Z-Morh tunnel. March and April: snow on the meadows, quiet hotels reopening. May and June: the main season, with snow at Thajiwas and green meadows. July and August: the Amarnath Yatra, busy roads, warm days. September: clear skies and fewer visitors. October: autumn colours and cold nights. November and December: first snow and quiet roads."
      },
      {
        "heading": "Food in Sonamarg",
        "body": "Sonamarg has dhabas and hotel restaurants serving North Indian and Kashmiri food, rajma rice, maggi noodles, omelettes and tea. Choice is limited compared with Srinagar, and many places close early. Carry snacks and water for the walk to Thajiwas, and eat lunch before returning to Srinagar."
      },
      {
        "heading": "Krishansar and Vishansar day hikes",
        "body": "Fit visitors can hike from near Sonamarg towards Nichnai and the Vishansar and Krishansar lakes, the first lakes on the Kashmir Great Lakes route, but these are long and high, and best done as part of a guided trek with camps. Shorter walks to Thajiwas's waterfalls and the meadows around Sonamarg give a taste of the mountains."
      },
      {
        "heading": "Photography in Sonamarg",
        "body": "The best light is in the early morning, with mist on the Sindh and sun on the peaks. Thajiwas glacier, the meadows above the road, the Sindh river and the road towards Baltal are favourite spots. In autumn, the birch and willow turn gold. Avoid photographing military installations near Baltal and Zojila."
      },
      {
        "heading": "Sonamarg travel mistakes to avoid",
        "body": "Do not plan Zojila or Zero Point without checking the road status, do not visit during peak yatra weeks if you want quiet roads, do not skip warm layers in summer, and remember that local union taxis and pony associations set the rules for local sightseeing. Return to Srinagar before dark."
      },
      {
        "heading": "Sonamarg for honeymooners",
        "body": "Couples enjoy a night in Sonamarg for quiet sunsets over the meadows and the Sindh, away from Srinagar's crowds. Choose a hotel with mountain views and heating, ride ponies to Thajiwas together, and return to Srinagar or continue to Gulmarg the next day."
      },
      {
        "heading": "Sonamarg and Gulmarg compared",
        "body": "Sonamarg is a river valley with glaciers and the road to Ladakh; Gulmarg is a high meadow with the gondola and ski slopes. Sonamarg's snow is mainly at Thajiwas and Zero Point, while Gulmarg's is at Kongdori and Apharwat. Both are easy day trips from Srinagar in opposite directions, and most first-time visitors see both."
      },
      {
        "heading": "Sonamarg and Pahalgam compared",
        "body": "Pahalgam is lower, greener and better for longer stays, with Aru, Betaab and Chandanwari by union taxi and a wide choice of hotels. Sonamarg is higher, more dramatic and usually a day trip, with fewer hotels. Both have rafting and treks, and both are bases for the Amarnath Yatra."
      },
      {
        "heading": "Sonamarg packing list",
        "body": "Warm jacket and layers even in summer, a woollen cap and gloves for Thajiwas, waterproof shoes with grip for snow and wet meadows, sunscreen, sunglasses, a light rain jacket, water, snacks and cash for ponies and local taxis. In winter, add thermals, snow boots and waterproof trousers."
      },
      {
        "heading": "Sonamarg union taxis and ponies",
        "body": "Local sightseeing beyond the main road, such as Zero Point and some points towards Zojila, is usually done by local union taxis from Sonamarg, with fixed rates displayed at the stand. Ponies to Thajiwas are hired at the pony association counter. Agree the route and rate before starting, keep the receipt, and contact the tourist police if you face problems."
      },
      {
        "heading": "Sonamarg hotels in summer",
        "body": "From May to August, Sonamarg's hotels and camps fill quickly, especially on weekends and during the yatra. Book in advance, confirm heating and hot water for cool nights, and ask whether the hotel is on the main road or set back in quieter meadows."
      },
      {
        "heading": "Sonamarg for adventure travellers",
        "body": "Adventure travellers use Sonamarg as a base for rafting on the Sindh, the Kashmir Great Lakes trek, day hikes to Thajiwas's waterfalls and, in winter, snowshoeing and snow play now that the Z-Morh tunnel keeps the valley reachable. Book with registered operators and check weather and road status before each activity."
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
      },
      {
        "q": "How far is Sonamarg from Srinagar?",
        "a": "About 80 km, usually 2 to 2.5 hours by road along the Sindh river."
      },
      {
        "q": "What is the Z-Morh tunnel?",
        "a": "A tunnel near Gagangir, opened in January 2025, that keeps Sonamarg reachable in winter."
      },
      {
        "q": "How far is Baltal from Sonamarg?",
        "a": "About 15 km. Baltal is the base camp for the northern route of the Amarnath Yatra."
      },
      {
        "q": "Can I see Sonamarg in a day from Srinagar?",
        "a": "Yes. Leave by 8 am, visit Thajiwas glacier and return before dark."
      },
      {
        "q": "Is food available in Sonamarg?",
        "a": "Yes, at dhabas and hotel restaurants, with fewer choices than Srinagar."
      },
      {
        "q": "Is Sonamarg good for a honeymoon night?",
        "a": "Yes, for quiet sunsets and mountain views in a heated hotel."
      },
      {
        "q": "Is Sonamarg better than Gulmarg?",
        "a": "They are different: Sonamarg for glaciers and the Ladakh road, Gulmarg for the gondola and skiing."
      },
      {
        "q": "What should I wear in Sonamarg?",
        "a": "Warm layers even in summer, a cap and gloves for Thajiwas, and waterproof shoes."
      },
      {
        "q": "How do I get to Zero Point from Sonamarg?",
        "a": "Usually by local union taxi from the Sonamarg stand, when the road is open."
      },
      {
        "q": "Is Sonamarg good for adventure?",
        "a": "Yes, for rafting, treks, day hikes and winter snow activities with registered operators."
      },
      {
        "q": "Is Sonamarg good for families?",
        "a": "Yes, with snow at Thajiwas, pony rides and river views; carry warm layers even in summer."
      },
      {
        "q": "Is there snow in Sonamarg in May?",
        "a": "Usually yes, at Thajiwas glacier and Zero Point."
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
      },
      {
        "heading": "Shankaracharya temple",
        "body": "Shankaracharya temple, dedicated to Shiva, stands on a hill about 300 m above the city and Dal Lake. Reached by road and a climb of more than 200 steps, it offers the best views over Srinagar, Dal Lake and the Jhelum. Phones and cameras may not be allowed at the top; check at the entry."
      },
      {
        "heading": "Hari Parbat",
        "body": "Hari Parbat, a hill in the old city, is topped by a Durrani-era fort and has the Sharika Devi temple, the shrine of Makhdoom Sahib and Gurdwara Chatti Patshahi on its slopes, showing Srinagar's mix of faiths. The almond garden of Badamwari below blossoms in March."
      },
      {
        "heading": "Srinagar's Mughal Gardens in brief",
        "body": "Shalimar Bagh was built by Jahangir in the early 17th century, Nishat Bagh by Asif Khan, Cheshma Shahi by Shah Jahan and Pari Mahal by Dara Shikoh. Each has terraces, fountains and chinar trees. Visit them on one day along the Boulevard."
      },
      {
        "heading": "Getting around Srinagar",
        "body": "Most visitors use a private car with driver for sightseeing, booked for the whole trip. Auto rickshaws and app-based or local taxis are available for short trips in the city. Shikaras are used on the lakes. Traffic can be heavy around Lal Chowk, Dalgate and the Boulevard in the evenings, so plan sightseeing in the mornings."
      },
      {
        "heading": "Srinagar in two days",
        "body": "Day 1: Mughal Gardens of Nishat and Shalimar in the morning, Cheshma Shahi and Pari Mahal in the afternoon, and a sunset shikara ride. Day 2: Hazratbal and the old city with Jamia Masjid and Shah-e-Hamadan, a craft workshop visit, and an evening walk on the Boulevard. Add the Tulip Garden in April and Shankaracharya temple if you are fit."
      },
      {
        "heading": "Srinagar food guide in brief",
        "body": "Try wazwan dishes such as rogan josh, rista and gushtaba at a well-known restaurant, harissa in the old city on winter mornings, kebabs and tujj at Khayam Chowk in the evening, noon chai with fresh girda from a kandur, and kahwa everywhere. Vegetarians will find dum aloo, haak, rajma and nadru dishes."
      },
      {
        "heading": "Srinagar for families",
        "body": "Families enjoy shikara rides, the floating market, Mughal Gardens with lawns and fountains, the Tulip Garden in April, a houseboat night and the craft workshops of the old city. Choose a hotel on the Boulevard or in Rajbagh with family rooms, plan short sightseeing days, and keep children close at busy sights."
      },
      {
        "heading": "Srinagar in winter",
        "body": "Winter brings snow to Srinagar in some weeks, especially in January, along with misty lakes, warming harissa breakfasts and quieter gardens. Choose centrally heated hotels or heated houseboats, wear thermals and waterproof boots, and keep a buffer day for flight delays."
      },
      {
        "heading": "Srinagar weather by month",
        "body": "January and February: the coldest months, with snow in some weeks and freezing nights. March: almond blossom and cool days. April: tulips and spring gardens. May and June: warm and pleasant, the busy season. July and August: the warmest months, with lotus on the lakes. September and October: clear skies and golden chinars. November and December: cold and quiet."
      },
      {
        "heading": "Srinagar for honeymooners",
        "body": "Couples enjoy a luxury or Deluxe houseboat on Nigeen or Dal, a private sunset shikara, candlelight dinners, the Mughal Gardens and the Tulip Garden in April. Choose a lake-view hotel or heritage stay for the other nights."
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
      },
      {
        "q": "Can I take my phone to Shankaracharya temple?",
        "a": "Phones and cameras may not be allowed at the top; check at the entry."
      },
      {
        "q": "Who built Shalimar Bagh?",
        "a": "Emperor Jahangir, in the early 17th century."
      },
      {
        "q": "How do I get around Srinagar?",
        "a": "By private car with driver, auto rickshaws and local taxis for short trips, and shikaras on the lakes."
      },
      {
        "q": "What food should I try in Srinagar?",
        "a": "Wazwan dishes, harissa in winter, kebabs at Khayam Chowk, noon chai with girda and kahwa."
      },
      {
        "q": "Is Srinagar good for families?",
        "a": "Yes, with shikara rides, gardens, a houseboat night and craft workshops."
      },
      {
        "q": "What is the coldest month in Srinagar?",
        "a": "January, during Chillai Kalan, the coldest 40 days of winter."
      },
      {
        "q": "When do the chinars turn red in Srinagar?",
        "a": "Usually from late October to mid-November."
      },
      {
        "q": "Is Srinagar good for a honeymoon?",
        "a": "Yes, with houseboats on Nigeen and Dal, private sunset shikaras and the Mughal Gardens."
      },
      {
        "q": "Where is the Tulip Garden in Srinagar?",
        "a": "On the Zabarwan slopes above Dal Lake, near Cheshma Shahi and the Botanical Garden."
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
      },
      {
        "heading": "Gurez at a glance in more detail",
        "body": "Gurez is a high Himalayan valley in Bandipora district, about 125 to 130 km north of Srinagar, along the Kishanganga river close to the Line of Control. Its main village, Dawar, sits at about 2,400 m. The valley is home to the Dard-Shina people, with their own language, wooden houses and traditions. It is one of Kashmir's most beautiful and least visited valleys, open to tourists mainly from May to October."
      },
      {
        "heading": "Razdan Pass",
        "body": "The road to Gurez crosses Razdan Pass, at about 3,500 m, between Bandipora and the Kishanganga valley. The climb offers wide views over Wular Lake and the Kashmir valley, and the descent leads through forests into Gurez. The pass is usually closed by snow from December to April. Drive in daylight with an experienced driver, and carry warm clothes even in summer."
      },
      {
        "heading": "Habba Khatoon peak",
        "body": "The pyramid-shaped Habba Khatoon peak, named after the 16th-century Kashmiri poet-queen, towers above Dawar and is the valley's landmark. Legend says she wandered these mountains in search of her exiled husband, Yusuf Shah Chak. A spring at the base of the peak also bears her name. The peak is beautiful at sunrise and sunset."
      },
      {
        "heading": "Tulail valley",
        "body": "Beyond Dawar, the Tulail valley stretches east along the Kishanganga's tributary, with traditional villages such as Badwan, Chakwali and Purana Tulail, wooden houses, fields and meadows. It is quieter than Dawar, with simple homestays and camps. Access can depend on current rules, so check before going."
      },
      {
        "heading": "Kishanganga river and fishing",
        "body": "The Kishanganga flows through Gurez in a clear, cold stream, rich in trout. Anglers need a permit from the J&K fisheries department. Riverside camps near Dawar offer views of the river, and walks along the banks are a highlight of a Gurez stay. The river crosses into Pakistan-administered Kashmir, where it is called the Neelum."
      },
      {
        "heading": "Dard-Shina culture",
        "body": "The people of Gurez are Dards, speaking Shina, a language distinct from Kashmiri. Their wooden log houses, music, dress and festivals are unique. Visitors are welcomed warmly, but should dress modestly, ask before photographing people and respect local customs."
      },
      {
        "heading": "Planning a Gurez trip",
        "body": "Plan at least two nights in Gurez, with a night in Dawar and a day trip to Tulail or a riverside camp. Leave Srinagar early to cross Razdan in daylight, carry original IDs for checkpoints at Bandipora and near Razdan, and carry cash, since ATMs are limited. Mobile coverage is mainly on BSNL and some Jio towers."
      },
      {
        "heading": "Camping and stays in Gurez",
        "body": "Gurez has J&K Tourism huts, guesthouses, homestays and riverside camps around Dawar and in Tulail. Camps offer tents with bedding and meals, often with bonfires in summer. Facilities are simple, with limited electricity and hot water. Book in advance in July and August."
      },
      {
        "heading": "Gurez for families and older travellers",
        "body": "The long drive over Razdan and the simple facilities make Gurez better suited to fit travellers and older children. Families with young children or older parents should plan short days, warm layers and a comfortable vehicle, and confirm stays with heating and attached bathrooms."
      },
      {
        "heading": "A 3-day Gurez plan",
        "body": "Day 1: leave Srinagar early, stop at Bandipora and Razdan Pass for views over Wular Lake, and reach Dawar by afternoon. Walk along the Kishanganga and see Habba Khatoon peak at sunset. Day 2: explore Dawar's villages, the Habba Khatoon spring and the river, or drive to Tulail if permitted. Day 3: return to Srinagar, crossing Razdan before afternoon weather sets in."
      },
      {
        "heading": "Wular Lake on the way",
        "body": "The road to Gurez passes Wular Lake near Bandipora, one of the largest freshwater lakes in India. Stop at a viewpoint or the Watlab area for views over the lake and the mountains. It makes a pleasant break on the long drive."
      },
      {
        "heading": "Food in Gurez",
        "body": "Homestays, camps and guesthouses serve simple meals: rice, rajma, vegetables, chicken or mutton curry, and local bread with tea. Trout from the Kishanganga may be available. There are a few small eateries in Dawar. Carry snacks, since there are few stops on the road over Razdan."
      },
      {
        "heading": "Gurez in each season",
        "body": "May and June: snowmelt, green meadows and the road reopening. July and August: warm days, the busiest months for camping. September and October: clear skies, golden willows and cold nights, among the best months. November to April: Razdan is usually closed by snow, and the valley is cut off by road."
      },
      {
        "heading": "Checkpoints and IDs on the Gurez road",
        "body": "Carry original photo ID for every traveller, with copies, for the checkpoints at Bandipora and near Razdan, where details are recorded. Foreign nationals face restrictions in Gurez and should check current rules before planning. Ask your driver about any registration needed on the day."
      },
      {
        "heading": "Photography in Gurez",
        "body": "Photograph Habba Khatoon peak at sunrise, Dawar's wooden houses, the Kishanganga's clear water, Tulail's villages and the views from Razdan Pass. Ask permission before photographing people, and do not photograph military installations or border areas."
      },
      {
        "heading": "Responsible travel in Gurez",
        "body": "Gurez is fragile and remote. Stay in local homestays and camps, carry rubbish back to Srinagar, avoid single-use plastic, respect the Dard-Shina culture and customs, and follow the instructions of the army and police near the border."
      },
      {
        "heading": "Why visit Gurez",
        "body": "Gurez rewards travellers with a rare combination: a high river valley with clear blue water, wooden villages, the dramatic Habba Khatoon peak, a distinct Dard-Shina culture and very few tourists. It feels far from the busy circuits of Gulmarg and Pahalgam, and its border location adds to its sense of remoteness. For many visitors, it is the highlight of a second trip to Kashmir."
      },
      {
        "heading": "Gurez by taxi from Srinagar",
        "body": "Most visitors reach Gurez by private taxi from Srinagar, about 5 to 6 hours. Choose a well-maintained SUV and an experienced driver who knows the Razdan road. Shared Sumo taxis run from Bandipora to Dawar for budget travellers, but are crowded and less flexible. Leave early and avoid driving after dark."
      },
      {
        "heading": "Gurez with Bangus or Lolab",
        "body": "Travellers with more time sometimes combine Gurez with north Kashmir's Lolab valley or Bangus meadow, returning to Srinagar via Bandipora and continuing to Kupwara. Plan five to six days, and check road and access rules for each place."
      },
      {
        "heading": "What to pack for Gurez",
        "body": "Warm layers and a jacket, since nights are cold even in summer; rain gear; comfortable walking shoes; a torch; a power bank; cash; snacks; any medicines; and original IDs with copies for the checkpoints."
      },
      {
        "heading": "Gurez for honeymooners and couples",
        "body": "Couples who want solitude find Gurez deeply romantic: a riverside camp with a bonfire under the stars, sunrise on Habba Khatoon peak and walks through wooden villages. Facilities are simple, so book a camp or homestay with attached bathrooms and heating, and plan two or three nights."
      },
      {
        "heading": "Gurez festival and culture events",
        "body": "J&K Tourism has organised Gurez festivals and cultural events in some years, with Shina music, dance, food and crafts, to promote the valley. Dates vary, so check with the tourism department before planning."
      },
      {
        "heading": "Gurez vs Keran and Bangus",
        "body": "Gurez is the most developed of north Kashmir's border valleys for visitors, with more stays, camps and a longer season. Keran is smaller and quieter on the Kishanganga, reached via Kupwara, while Bangus is a high meadow with no villages. Gurez suits travellers who want a full experience of valley life; Keran and Bangus suit short, adventurous visits."
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
      },
      {
        "q": "How high is Razdan Pass?",
        "a": "About 3,500 m, between Bandipora and Gurez."
      },
      {
        "q": "What is Habba Khatoon peak?",
        "a": "A pyramid-shaped peak above Dawar, named after the 16th-century Kashmiri poet-queen."
      },
      {
        "q": "Can I fish in Gurez?",
        "a": "Yes, with a permit from the J&K fisheries department."
      },
      {
        "q": "Is there mobile network in Gurez?",
        "a": "Mainly on BSNL and some Jio towers, and it can be patchy."
      },
      {
        "q": "Does the Gurez road pass Wular Lake?",
        "a": "Yes, near Bandipora, with viewpoints over the lake."
      },
      {
        "q": "What ID is needed for Gurez?",
        "a": "Original photo ID for everyone, with copies, for the checkpoints at Bandipora and near Razdan."
      },
      {
        "q": "How do I reach Gurez from Srinagar?",
        "a": "By private taxi, about 5 to 6 hours over Razdan Pass, or shared taxis from Bandipora."
      },
      {
        "q": "Why is Gurez worth visiting?",
        "a": "For its river valley, wooden villages, Habba Khatoon peak, Dard-Shina culture and very few tourists."
      },
      {
        "q": "Is Gurez good for couples?",
        "a": "Yes, for solitude, riverside camps and sunrise on Habba Khatoon peak."
      },
      {
        "q": "Is there a Gurez festival?",
        "a": "J&K Tourism has held Gurez festivals in some years; check dates with the department."
      },
      {
        "q": "Which is better, Gurez or Keran?",
        "a": "Gurez for more stays and valley life; Keran for a shorter, quieter border village visit."
      },
      {
        "q": "Is Gurez good for a family trip?",
        "a": "Yes for fit families with older children; the drive is long and facilities are simple, so plan short days."
      },
      {
        "q": "When does Razdan Pass open?",
        "a": "Usually in May, after the winter snow is cleared, depending on the year."
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
      },
      {
        "heading": "Leh Palace and the old town",
        "body": "Leh Palace, a nine-storey building of stone, mud and timber, was built in the 17th century by King Sengge Namgyal and once housed Ladakh's royal family. It rises above the old town, a maze of mud-brick houses, stupas and narrow lanes that has been restored in parts. Climb to the palace roof for views over Leh, the Indus valley and the Stok range. Above the palace, the Namgyal Tsemo monastery and fort stand on a ridge, best visited at sunrise or sunset."
      },
      {
        "heading": "Shanti Stupa",
        "body": "Shanti Stupa, a white dome stupa built by Japanese and Ladakhi Buddhists and inaugurated in 1991, stands on a hill at Changspa, above the town. It can be reached by road or by a steep flight of steps. The stupa is especially beautiful at sunset, when the town lights come on below and the mountains turn pink. Visit after acclimatising, since the climb is tiring at Leh's altitude."
      },
      {
        "heading": "Monasteries near Leh",
        "body": "Within an hour of Leh are some of Ladakh's most famous monasteries. Thiksey, about 19 km away, is often compared to the Potala Palace in Lhasa and has a two-storey Maitreya statue. Hemis, about 45 km away, is the largest and wealthiest, known for its summer festival. Shey has a giant copper Buddha in its old palace. Stok Palace houses a museum of royal artefacts, and Spituk overlooks the airport. Most can be combined in a day or two of sightseeing."
      },
      {
        "heading": "Leh market and shopping",
        "body": "Leh's main bazaar and the lanes around it sell pashmina shawls, Tibetan and Ladakhi handicrafts, thangka paintings, prayer flags, turquoise and silver jewellery, apricot products, woollens and trekking gear. The Tibetan refugee market and Moti Market are good for souvenirs. Bargain politely, buy pashmina from reputed shops, and carry cash for small purchases, though many shops accept UPI and cards."
      },
      {
        "heading": "Cafes and food in Leh",
        "body": "Leh has a lively cafe scene, especially in Changspa and the main bazaar, with bakeries, rooftop cafes and restaurants serving Ladakhi, Tibetan, North Indian, Italian and Israeli food. Try thukpa, momos, skyu, chutagi, tingmo, butter tea and apricot jam. Many cafes close or reduce hours from November to March. Drink plenty of water and avoid alcohol for the first two days."
      },
      {
        "heading": "Day trips from Leh",
        "body": "Popular day trips include the Sham valley route to Likir, Alchi, Basgo and the Indus-Zanskar confluence at Nimmu; Magnetic Hill and Gurudwara Pathar Sahib; the Indus valley monasteries of Shey, Thiksey and Hemis; Stok and Matho; and, once acclimatised, Khardung La for the views. Each needs a Ladakh-registered taxi, booked through your hotel or the taxi union."
      },
      {
        "heading": "Local taxis and union rules in Leh",
        "body": "Local sightseeing in and around Leh is done by Ladakh-registered taxis operated under the Leh taxi union, which publishes fixed rates for each route. Outside vehicles can drop travellers in Leh but are generally not allowed to do local sightseeing. Bikers usually rent motorcycles in Leh for the same reason. Book taxis through your hotel or the union stand and keep the receipt."
      },
      {
        "heading": "Leh for families and older travellers",
        "body": "Leh's altitude, about 3,500 m, can be hard for young children and older travellers. Fly in and rest for at least two full days before sightseeing, or arrive by road from Srinagar via Kargil for a gradual climb. Choose a hotel with heating and ground-floor rooms or lifts, keep days short and avoid stairs-heavy sights such as Namgyal Tsemo on the first days. Consult a doctor before the trip if anyone has heart, lung or blood pressure conditions."
      },
      {
        "heading": "Festivals in Leh",
        "body": "The Hemis festival, usually in June or July, celebrates Guru Padmasambhava with masked cham dances in the monastery courtyard. The Ladakh Festival in September brings cultural shows, polo and archery to Leh. Losar, the Ladakhi new year, is celebrated in winter, along with monastery festivals such as Spituk Gustor and Thiksey Gustor. Check dates each year, since many follow the Tibetan calendar."
      },
      {
        "heading": "Hall of Fame and museums",
        "body": "The Hall of Fame, a museum run by the Indian Army near Leh airport, tells the story of the soldiers who served in Ladakh, including the 1999 Kargil conflict and the Siachen glacier. The Central Asian Museum in the old town explains Leh's role on the trade routes to Central Asia and Tibet. Both are good for a rest-day visit, as they involve little walking."
      },
      {
        "heading": "Leh in winter",
        "body": "From November to March, Leh is very cold, with night temperatures well below freezing, but skies are often clear and the town is quiet. Flights are the only way in, since the roads from Srinagar and Manali are closed. Winter brings the Chadar trek, snow leopard tours in Hemis National Park and monastery festivals. Choose a hotel with central heating, and pack heavy winter clothing."
      },
      {
        "heading": "Mobile network and money in Leh",
        "body": "Postpaid connections from other Indian states work in Leh, but prepaid connections from outside J&K and Ladakh do not. Leh has ATMs, banks and wide UPI acceptance, but ATMs are scarce outside Leh, so withdraw enough cash before going to Nubra, Pangong or Tso Moriri. Wi-Fi is available in most hotels and cafes, though speeds vary."
      },
      {
        "heading": "A 3-day Leh plan",
        "body": "Day 1: arrive, rest completely, drink water and take only a short evening walk to the main bazaar. Day 2: a gentle day with Shanti Stupa, Leh Palace and the old town, returning to the hotel by afternoon. Day 3: the Indus valley monasteries of Shey, Thiksey and Hemis, with Stok Palace if time allows. On day 4, you are usually ready for Khardung La and Nubra, Pangong or the Sham valley."
      },
      {
        "heading": "Where to stay in Leh",
        "body": "Changspa and the area around the main bazaar have the most guesthouses, hotels and cafes, within walking distance of the old town and Shanti Stupa. Fort Road and Old Road are central, with mid-range hotels. Quieter stays lie in Sankar, Skara and Chubi, a short drive from the centre. Choose a hotel with heating for cold months, oxygen support if available, and ground-floor rooms if stairs are a concern."
      },
      {
        "heading": "Getting to Leh by road",
        "body": "By road, Leh is reached from Srinagar over Zojila and Fotu La, about 420 km in two days with a night in Kargil, and from Manali via the Atal tunnel, Baralacha La and Tanglang La, about 430 km in two days with a night at Jispa or Sarchu. Both roads are open only in summer, usually from May or June to October. The road from Srinagar is better for acclimatisation."
      },
      {
        "heading": "Getting to Leh by air",
        "body": "Kushok Bakula Rimpochee Airport in Leh has direct flights from Delhi and some other cities, and flights are the only way in during winter. Flights are among the most scenic in India, crossing the Himalaya. Morning flights are common because afternoon winds can affect operations. Arriving by air takes you straight to 3,500 m, so plan two rest days."
      },
      {
        "heading": "Permits from Leh",
        "body": "Leh is where most travellers get their inner line permits for Nubra, Pangong, Tso Moriri, Hanle and Turtuk, online or through hotels and agents. Foreign nationals need a Protected Area Permit through a registered agent in Leh. Leh town and its nearby monasteries do not need a permit."
      },
      {
        "heading": "Responsible travel in Leh",
        "body": "Leh's water supply is limited and its waste management stretched by tourism. Refill bottles at filtered water stations, avoid single-use plastic, keep showers short, and carry your rubbish from day trips back to town. Respect monastery rules, walk clockwise around stupas and prayer wheels, and ask before photographing monks."
      },
      {
        "heading": "Leh with children",
        "body": "Children often adjust to altitude well but may not say when they feel unwell, so watch for headaches, tiredness, nausea or poor appetite. Keep the first two days very light, give plenty of fluids, dress them in layers for cold mornings and strong afternoon sun, and choose sights with little walking, such as Shanti Stupa by car, the Hall of Fame and Thiksey. Ask your doctor about children's medicines before travelling."
      },
      {
        "heading": "Biking from Leh",
        "body": "Leh is India's biking capital in summer. Royal Enfields and other motorcycles are rented in Leh with documents, and popular rides include Khardung La to Nubra, Chang La to Pangong, the Sham valley and Hanle via the Indus valley. Ride only after acclimatising, in daylight, with proper gear and at least one other rider on remote routes."
      },
      {
        "heading": "Leh weather by month",
        "body": "January and February: very cold, often below minus 15 degrees Celsius at night, clear skies. March and April: cold, with the first visitors arriving by air. May: cool and sunny, roads opening. June to August: the warmest months, pleasant days and cool nights, with occasional rain. September: clear and dry, among the best months. October: cold nights and golden poplars. November and December: very cold and quiet."
      },
      {
        "heading": "Leh with Kashmir",
        "body": "Many travellers combine Leh with Kashmir in summer, driving from Srinagar over Zojila and Kargil, which acclimatises them gradually, and flying home from Leh. Plan 10 to 12 nights in total, with at least two rest days in Leh."
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
      },
      {
        "q": "What is Leh famous for?",
        "a": "Leh Palace, monasteries such as Thiksey and Hemis, Shanti Stupa, its cafes and as the base for Nubra, Pangong and Tso Moriri."
      },
      {
        "q": "Can outside taxis do sightseeing in Leh?",
        "a": "Generally no. Local sightseeing is done by Ladakh-registered taxis under the Leh taxi union."
      },
      {
        "q": "When is the Hemis festival?",
        "a": "Usually in June or July, following the Tibetan calendar."
      },
      {
        "q": "Is there an ATM in Leh?",
        "a": "Yes, several, but ATMs are scarce outside Leh, so carry cash for Nubra and Pangong."
      },
      {
        "q": "How far is Leh from Srinagar by road?",
        "a": "About 420 km, usually two days with a night in Kargil."
      },
      {
        "q": "Where should I stay in Leh?",
        "a": "Changspa and the main bazaar area for cafes and walking; Sankar or Chubi for quieter stays."
      },
      {
        "q": "How many days should I spend in Leh?",
        "a": "At least three: two rest and easy days, and one for the nearby monasteries."
      },
      {
        "q": "Is Leh safe for children?",
        "a": "Yes, with two quiet days to acclimatise, plenty of fluids and close attention to signs of altitude sickness."
      },
      {
        "q": "Can I rent a motorcycle in Leh?",
        "a": "Yes, with a valid licence; rented bikes come with documents and can be used for Ladakh sightseeing."
      },
      {
        "q": "What is the coldest month in Leh?",
        "a": "January, when night temperatures often fall far below freezing."
      },
      {
        "q": "Is Leh good for a first trip to Ladakh?",
        "a": "Yes. Leh is the base for every first trip, with two rest days before Nubra and Pangong."
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
      },
      {
        "heading": "Betaab Valley in more detail",
        "body": "Betaab Valley is a wide, flat meadow about 15 km from Pahalgam on the road to Chandanwari, at around 2,400 m. The Lidder's east branch, fed by the Sheshnag lake, flows through it, with pine and fir forests on the slopes and snow peaks behind. The valley was laid out as a park by the J&K authorities, with walking paths, wooden bridges over the stream, benches and a ticketed entry. It is one of the most photographed spots in Kashmir."
      },
      {
        "heading": "The film that gave Betaab Valley its name",
        "body": "The valley was earlier known as Hagan or Hagoon. It became famous after the 1983 Hindi film Betaab was shot here, and the name stuck. Since then, many other films and songs have been shot in and around the valley, and visitors still recognise scenes from them."
      },
      {
        "heading": "How to reach Betaab Valley by union taxi",
        "body": "Outside taxis cannot take visitors from Pahalgam to Betaab Valley; you must hire a local union taxi from the Pahalgam taxi stand at fixed rates, either for Betaab alone or combined with Chandanwari and Aru. The drive takes about 30 minutes along the Lidder. Keep the taxi slip and agree on waiting time before you start."
      },
      {
        "heading": "Betaab Valley and Chandanwari together",
        "body": "Most visitors combine Betaab Valley with Chandanwari, about 16 km from Pahalgam and a few kilometres beyond Betaab, where a snow bridge over the stream often lasts into summer. A half-day union taxi trip covers both. Aru Valley lies in the opposite direction, so a full day is needed to see all three."
      },
      {
        "heading": "Betaab Valley for families and older travellers",
        "body": "Betaab Valley's flat paths, benches and gentle walks make it one of the easiest places in Kashmir for families with small children and older travellers. Children enjoy the stream, the wooden bridges and the open lawns. Keep them away from the fast water, which is very cold. Older visitors can enjoy the views without long walks."
      },
      {
        "heading": "Betaab Valley in winter",
        "body": "From December to March, Betaab Valley is usually covered with snow, and access may be restricted after heavy snowfall, when the road from Pahalgam is cleared. When open, it is quiet and beautiful, with frozen streams and snow-laden pines. Check with the taxi union in Pahalgam before going."
      },
      {
        "heading": "Betaab Valley in autumn",
        "body": "October brings golden willows, clear skies and fewer visitors to Betaab Valley. The stream runs low and clear, and the light is excellent for photography. Mornings are cold, so carry a warm jacket."
      },
      {
        "heading": "Photography tips for Betaab Valley",
        "body": "Arrive in the morning for soft light and fewer people. The bridges over the stream and the views up the valley towards the snow peaks are the classic shots. In summer, wild flowers line the meadows. Avoid photographing security personnel."
      },
      {
        "heading": "Facilities at Betaab Valley",
        "body": "The valley has a ticket counter, toilets, small stalls selling tea and snacks, and paths for walking. There are no hotels inside; visitors stay in Pahalgam. Carry water, snacks and warm layers."
      },
      {
        "heading": "Betaab Valley in spring and summer",
        "body": "From April to June, snowmelt fills the stream and the meadows turn green, with snow still lying on the peaks around the valley. July and August are the warmest months, with wild flowers, picnics and the busiest crowds, especially during the Amarnath Yatra, when traffic on the Chandanwari road increases and access can be regulated."
      },
      {
        "heading": "Entry, timings and tickets",
        "body": "Betaab Valley has a ticketed entry with separate rates for adults and children, usually open from morning to late afternoon. Fees and timings are set by the authorities and can change, so check at the gate. Keep the ticket with you inside the park."
      },
      {
        "heading": "Betaab Valley month by month",
        "body": "January and February: deep snow, quiet, access depends on the road being cleared. March: snow begins to melt, cold days. April and May: green shoots, full streams and snow on the peaks. June: lush meadows and pleasant weather, busy with families. July and August: warm days, wild flowers and the Amarnath Yatra traffic. September: clear skies and fewer visitors. October: golden willows and crisp mornings. November and December: cold, first snow in some years."
      },
      {
        "heading": "Betaab Valley for honeymooners",
        "body": "Couples love Betaab Valley for its open meadows, wooden bridges and snow peaks, which make a romantic backdrop for photographs. Visit early in the morning when it is quiet, walk along the stream and sit by the water. Combine it with Chandanwari's snow and a riverside dinner back in Pahalgam."
      },
      {
        "heading": "Betaab Valley on a Kashmir itinerary",
        "body": "Most Kashmir itineraries include Betaab Valley on the Pahalgam sightseeing day, together with Chandanwari and Aru Valley. A typical plan spends two nights in Pahalgam: arrival day by the river, a full union taxi day to Betaab, Chandanwari and Aru, and a relaxed morning before leaving. Families with small children may prefer Betaab and Chandanwari one day and Aru the next."
      },
      {
        "heading": "What to wear and carry at Betaab Valley",
        "body": "Wear comfortable walking shoes with grip, since paths can be wet, and carry a warm layer, as the valley is cooler than Pahalgam town. In spring and winter, add a heavy jacket and waterproof shoes. Carry water, snacks, sunscreen, sunglasses and cash for tickets and stalls."
      },
      {
        "heading": "Betaab Valley mistakes to avoid",
        "body": "Trying to drive your own car from Pahalgam, arriving at midday in peak season when it is crowded, letting children near the fast stream, and forgetting warm layers are the most common mistakes. Agree waiting time with your union taxi driver before you go in."
      },
      {
        "heading": "Food near Betaab Valley",
        "body": "Small stalls inside and near the valley sell tea, kahwa, maggi noodles, snacks and corn. For a full meal, eat in Pahalgam before or after the visit, where restaurants serve Kashmiri and North Indian food, including trout in some places."
      },
      {
        "heading": "Betaab Valley and the Amarnath route",
        "body": "The road past Betaab Valley continues to Chandanwari, the start of the Pahalgam route of the Amarnath Yatra. During the yatra in July and August, security is tight, traffic is regulated and some access may be restricted. If you visit in this period, check with your union taxi driver about the current arrangements."
      },
      {
        "heading": "Betaab Valley with Aru in one day",
        "body": "To see Betaab, Chandanwari and Aru in one day, start at about 8 am with a union taxi from Pahalgam to Betaab and Chandanwari, return to Pahalgam for lunch, then take a second union taxi to Aru in the afternoon. The union stand offers a combined rate for all three. It is a full but manageable day."
      },
      {
        "heading": "Nearby: Chandanwari's snow bridge",
        "body": "A few kilometres beyond Betaab Valley, Chandanwari's snow bridge over the stream often lasts into June or July, giving visitors snow even in early summer. Sledges and ponies are available. It is the starting point of the Amarnath Yatra's Pahalgam route."
      },
      {
        "heading": "Betaab Valley packing list",
        "body": "Comfortable walking shoes with grip, a warm layer even in summer, a rain jacket in spring, sunscreen and sunglasses, water, snacks, cash for the entry ticket and stalls, and, in winter, waterproof boots, gloves and a heavy jacket. A small daypack is enough."
      },
      {
        "heading": "Betaab Valley in a Kashmir package",
        "body": "Most Kashmir packages include Pahalgam with union taxi sightseeing to Betaab, Chandanwari and Aru, usually paid locally at the union stand. Confirm whether union taxis are included in your package and which points are covered."
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
      },
      {
        "q": "How do I reach Betaab Valley?",
        "a": "By union taxi from the Pahalgam taxi stand, about 30 minutes along the Lidder."
      },
      {
        "q": "Can I visit Betaab Valley and Chandanwari together?",
        "a": "Yes, a half-day union taxi trip covers both."
      },
      {
        "q": "Is Betaab Valley good for children?",
        "a": "Yes, with flat paths, lawns and bridges; keep children away from the cold, fast stream."
      },
      {
        "q": "What was Betaab Valley called before?",
        "a": "Hagan or Hagoon, before the 1983 film Betaab made it famous."
      },
      {
        "q": "How long should I spend at Betaab Valley?",
        "a": "About one to two hours."
      },
      {
        "q": "Is Betaab Valley crowded during the Amarnath Yatra?",
        "a": "Traffic on the Chandanwari road increases and access can be regulated during the yatra."
      },
      {
        "q": "What is the best month to visit Betaab Valley?",
        "a": "May, June, September and October for pleasant weather; winter for snow when the road is open."
      },
      {
        "q": "Can I eat at Betaab Valley?",
        "a": "Stalls sell tea and snacks; eat a full meal in Pahalgam."
      },
      {
        "q": "Is Betaab Valley good for a honeymoon?",
        "a": "Yes, early in the morning, with its meadows, bridges and snow peaks."
      },
      {
        "q": "Can I see Betaab, Chandanwari and Aru in one day?",
        "a": "Yes, with an early start and a combined union taxi rate."
      },
      {
        "q": "Are union taxis to Betaab included in packages?",
        "a": "Usually not; they are paid locally at the union stand. Check your package."
      },
      {
        "q": "Is Betaab Valley wheelchair friendly?",
        "a": "Its main paths are flat and broad, so much of the valley can be seen with help, though some bridges and slopes are uneven."
      },
      {
        "q": "Can I visit Betaab Valley in the rain?",
        "a": "Yes, but paths get muddy; carry a rain jacket and shoes with grip."
      },
      {
        "q": "Is Betaab Valley worth visiting?",
        "a": "Yes, it is one of Pahalgam's highlights, easy to reach and beautiful in every season."
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
      },
      {
        "heading": "Dal Lake's basins and islands",
        "body": "Dal Lake is divided by causeways into four main basins: Gagribal, Lokut Dal, Bod Dal and Nigeen, which is sometimes treated as a separate lake. Its islands include Char Chinar, also called Ropa Lank, with four chinar trees, and Sona Lank, the golden island. Floating gardens called radh, made of matted vegetation, are used to grow vegetables, and many families live on the lake in houseboats and small houses."
      },
      {
        "heading": "The Boulevard and the ghats",
        "body": "The Boulevard Road runs along the lake's eastern and southern shores, lined with hotels, restaurants and houseboat ghats numbered from Dal Gate. Shikaras wait at the ghats for passengers, and the promenade is busy in the evenings. The Boulevard leads to Nishat, Shalimar, Hazratbal and the Tulip Garden."
      },
      {
        "heading": "Mughal Gardens around Dal Lake",
        "body": "The Mughal Gardens of Nishat, Shalimar, Cheshma Shahi and Pari Mahal lie on the slopes of the Zabarwan hills above Dal Lake, giving terraced views over the water. Nishat and Shalimar are on the lake's eastern shore. Combine a morning at the gardens with an afternoon shikara ride."
      },
      {
        "heading": "Hazratbal on Dal Lake",
        "body": "Hazratbal shrine, on the northern shore of Dal Lake, is Kashmir's most important Muslim shrine, with a white marble dome reflected in the water. It houses a relic believed to be a hair of the Prophet Muhammad. Visitors are welcome outside prayer times, dressed modestly. A shikara ride to Hazratbal from Nigeen is a peaceful way to reach it."
      },
      {
        "heading": "Dal Lake conservation",
        "body": "Dal Lake faces pressure from silt, sewage and encroachment, and the authorities have run long-term conservation programmes, including weed removal and the relocation of some lake dwellers. Visitors can help by not throwing anything into the water, avoiding plastic, and choosing hosts who manage waste responsibly."
      },
      {
        "heading": "Water sports on Dal Lake",
        "body": "In summer, Dal Lake offers kayaking, canoeing, water skiing and jet ski rides from operators near the Boulevard, along with paddle boats. Use registered operators, wear life jackets and avoid busy shikara lanes. Water sports may be suspended in bad weather or for events."
      },
      {
        "heading": "Dal Lake at sunrise and sunset",
        "body": "Sunrise brings mist on the water and the floating market near Rainawari. Sunset turns the Zabarwan hills and Hari Parbat pink and gold, with shikaras silhouetted on the water. Both are best seen from a shikara or a houseboat verandah."
      },
      {
        "heading": "Dal Lake for families",
        "body": "Families enjoy a shikara ride to Char Chinar, the floating market, a houseboat stay and the lakeside promenade. Children must wear life jackets on water sports, and should be supervised on houseboat verandahs. Choose short rides for young children."
      },
      {
        "heading": "Dal Lake by shikara: routes",
        "body": "The common shikara routes are a one-hour ride around the Boulevard ghats and Char Chinar; a longer two to three hour ride through the inner lake to Nehru Park, Kabutar Khana, the floating gardens and Meena Bazaar, the floating shops; and an early morning ride to the floating vegetable market. Rates are fixed by the shikara association per route and hour; agree the route before boarding."
      },
      {
        "heading": "Nehru Park and Kabutar Khana",
        "body": "Nehru Park is a small island park in the middle of the lake, popular for photographs and tea. Kabutar Khana, once a royal pigeon house on an island, is another stop on longer shikara routes. Both offer views of the lake and the hills."
      },
      {
        "heading": "Meena Bazaar: the floating shops",
        "body": "Deep inside Dal Lake, a cluster of shops on stilts and houseboats sells shawls, jewellery, papier-mache, saffron and souvenirs, reached on longer shikara rides. Floating vendors also paddle up to visitors selling flowers, kahwa, snacks and handicrafts. Shopping on the water is part of the experience, but compare quality and prices with established shops in Srinagar before buying expensive items."
      },
      {
        "heading": "Dal Lake history",
        "body": "Dal Lake has been central to Srinagar's life for centuries. Mughal emperors built gardens along its shores in the 17th century, and the British, unable to buy land under the Dogra rulers' laws, built houseboats on the lake, starting the houseboat tradition. Today the lake is home to thousands of people living on houseboats and in lake villages."
      },
      {
        "heading": "Lotus season on Dal Lake",
        "body": "From July to August, large parts of Dal Lake are covered with pink lotus flowers, especially in the areas near Nehru Park and the inner lake. Early morning shikara rides are the best way to see them. The lotus stem, nadru, is a favourite ingredient in Kashmiri cooking."
      },
      {
        "heading": "Dal Lake in winter",
        "body": "In winter, Dal Lake is quiet and misty, with snow on the surrounding hills and, during very cold spells, a thin layer of ice at the edges. Shikara rides continue on most days, and many houseboats stay open with heating. Winter sunrises over the lake are among the most beautiful in Kashmir."
      },
      {
        "heading": "Houseboat stays on Dal Lake",
        "body": "Dal Lake's houseboats range from simple boats to luxury boats with carved walnut interiors and modern bathrooms. Boats facing the Boulevard are convenient but busier; those deeper inside the lake are quieter. Most include breakfast and dinner and shikara transfers. A night on the lake is a highlight of any Kashmir trip."
      },
      {
        "heading": "Dal Lake for photographers",
        "body": "Photograph the floating market at dawn, shikaras against the sunset, Char Chinar in autumn, lotus fields in summer, the Zabarwan hills and the Mughal Gardens from the water. Ask permission before photographing vendors and families. Calm mornings give the best reflections."
      },
      {
        "heading": "Dal Lake safety tips",
        "body": "Wear life jackets on water sports, keep children seated in shikaras, agree shikara rates before boarding, avoid late-night rides on unfamiliar routes, and keep valuables in a zipped bag. Use registered shikara operators from the main ghats."
      },
      {
        "heading": "Floating vegetable market in detail",
        "body": "The floating vegetable market on Dal Lake runs at dawn near Rainawari, where farmers from the lake's floating gardens trade vegetables from their shikaras. It is over by about 7 am, so book a shikara for a 5 to 5.30 am start in summer, later in winter. Carry a warm layer, since mornings on the water are cold."
      },
      {
        "heading": "Dal Lake and Nigeen Lake compared",
        "body": "Dal Lake is larger, busier and more central, with the Boulevard, ghats, floating market and many houseboats. Nigeen Lake, to the north, is quieter, with fewer vendors and a residential feel. Many travellers enjoy a shikara ride on Dal and a houseboat night on Nigeen."
      },
      {
        "heading": "Dal Lake for couples",
        "body": "Couples love a private sunset shikara with a decorated seat, a night on a Deluxe houseboat, a dawn ride to the floating market and photographs in traditional Kashmiri dress at the ghats. Ask your houseboat host to arrange a candlelight dinner on the verandah."
      },
      {
        "heading": "Dal Lake on a budget",
        "body": "Budget travellers can enjoy Dal Lake by walking the Boulevard at sunset, taking a shared or short shikara ride at the official rate, visiting Hazratbal and Char Chinar, and booking a standard houseboat for one night."
      },
      {
        "heading": "Dal Lake for older travellers",
        "body": "Older travellers can enjoy Dal Lake comfortably with a daytime shikara ride from a main ghat, where boatmen help with boarding, a Nigeen houseboat reached by walkway, and a lake-view hotel on the Boulevard. Avoid late-night transfers and long rides in cold weather."
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
      },
      {
        "q": "What are the basins of Dal Lake?",
        "a": "Gagribal, Lokut Dal, Bod Dal and Nigeen."
      },
      {
        "q": "Are there water sports on Dal Lake?",
        "a": "Yes, in summer: kayaking, canoeing, water skiing and jet skis from registered operators."
      },
      {
        "q": "Is Hazratbal on Dal Lake?",
        "a": "Yes, on the northern shore."
      },
      {
        "q": "What are the shikara routes on Dal Lake?",
        "a": "A short ride around the ghats and Char Chinar, a longer ride through the inner lake and Meena Bazaar, and the dawn floating market."
      },
      {
        "q": "What is Meena Bazaar on Dal Lake?",
        "a": "A cluster of floating shops inside the lake, reached on longer shikara rides."
      },
      {
        "q": "When is lotus season on Dal Lake?",
        "a": "July to August, best seen on early morning shikara rides."
      },
      {
        "q": "Why are there houseboats on Dal Lake?",
        "a": "The tradition began in the British era, when the British built houseboats because they could not buy land."
      },
      {
        "q": "What time does the floating market start?",
        "a": "At dawn, finishing by about 7 am; book a shikara for an early start."
      },
      {
        "q": "Which is better, Dal Lake or Nigeen Lake?",
        "a": "Dal for the classic sights and floating market; Nigeen for a quieter houseboat stay."
      },
      {
        "q": "Can I see Dal Lake on a budget?",
        "a": "Yes: the Boulevard walk, a short shikara ride at the official rate and a standard houseboat night."
      },
      {
        "q": "Is a shikara ride safe for senior citizens?",
        "a": "Yes, from a main ghat in the daytime, with help boarding and a short route."
      },
      {
        "q": "How long does a Dal Lake shikara ride take?",
        "a": "From one hour around the ghats to two or three hours through the inner lake and Meena Bazaar."
      },
      {
        "q": "Can I stay on Dal Lake in winter?",
        "a": "Yes, many houseboats stay open with heating, blankets and hot water."
      }
    ]
  }
};
