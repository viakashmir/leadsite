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
