// TDI depth pass 1, part 3 (2026-11-25): a second layer for the batch 1 posts
// that were still short of the paired tdiholidayventures.com pages after
// parts 1 and 2. Appended by withAdditions in blog/index.ts. Same rules:
// checkable facts, no typed fares or prices, no em dashes.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const TDI_DEPTH_3_ADDITIONS: Record<string, Addition> = {
  "kashmir-cab-types-innova-crysta-ertiga-dzire": {
    sections: [
      {
        h: "Cab type for Gurez, Keran and Bangus",
        p: [
          "The border valleys need a higher car than the main circuit. The road to Gurez crosses Razdan pass and has rough and unpaved stretches; Keran's road over Pharkian Gali is narrow and steep; the track to Bangus is partly unpaved. Book an Innova Crysta, a Scorpio or a similar SUV for these trips, even for two people, and ask for a driver who has done the route recently. A sedan may be refused by the driver on the day.",
        ],
      },
    ],
  },

  "tempo-traveller-in-kashmir": {
    sections: [
      {
        h: "Seat plan tips for long group days",
        p: [
          "Put older members and anyone prone to motion sickness in the front rows, where the ride is smoother and the view of the road helps. The last row bounces most on hill roads. Rotate seats each day so no one spends the whole trip at the back. Keep a bag with water, snacks, tissues and sick bags near the front, and agree a stop every 90 minutes on long drives.",
        ],
      },
    ],
  },

  "self-drive-car-rental-in-kashmir": {
    sections: [
      {
        h: "Which self-drive car should you pick?",
        p: [
          "For two people on paved roads in summer, a hatchback or sedan is easy to park in Srinagar and light on fuel. For a family of five, a seven-seater SUV gives room for bags and a better ride. For winter, ask for a four-wheel-drive Thar or Scorpio and chains, and keep to the main roads. Automatic cars are fewer, so book them early if you do not drive a manual.",
        ],
      },
      {
        h: "How do you book a self-drive car in Kashmir?",
        p: [
          "Share your dates, pick-up point, the car you want and your route with two or three rental companies. Ask each for the deposit, the kilometre policy, the fuel rule, the insurance excess and the winter rules in writing. Send copies of your licence and ID, pay the booking amount by a traceable method, and collect the car in daylight so you can inspect it properly.",
        ],
      },
    ],
  },

  "bike-rental-in-srinagar-and-leh": {
    sections: [
      {
        h: "Luggage on a rented bike",
        p: [
          "Most Leh and Srinagar renters offer saddlebags, a tail bag or a luggage carrier with bungee cords, sometimes at extra cost. Keep the load low and centred, put heavy items closest to the bike, and wrap everything in plastic against rain and river crossings. One soft bag per rider of about 30 litres is plenty for a week. Anything more is better sent in a backup vehicle.",
        ],
      },
      {
        h: "Road opening windows for riders",
        p: [
          "Zojila, on the Srinagar to Leh highway, usually opens in spring after snow clearance and closes in early winter. The Manali to Leh highway over Baralacha La and Tanglang La opens later, usually in late spring or early summer, and closes in autumn. Khardung La towards Nubra is kept open for most of the year but can close for hours after snow. Plan a Ladakh ride for June to September, and check the road status with the Border Roads Organisation updates and local news a day before each pass.",
        ],
      },
      {
        h: "Riding to Doodhpathri and Yusmarg",
        p: [
          "Doodhpathri and Yusmarg are good short rides from Srinagar through Budgam district's villages and forests. The roads are paved for most of the way, with a few rough patches near the end. Both are about two hours from Srinagar. Park at the official parking area at each meadow; riding on the grass is not allowed. Leave Srinagar early to avoid traffic, and return before dark, since the forest roads are unlit.",
        ],
      },
      {
        h: "Returning the bike and getting your deposit back",
        p: [
          "Return the bike at the agreed time with the fuel level noted on the agreement. Walk round it with the renter, compare it with the photos you took at pickup, and settle any damage on the spot. Ask for a written note that the bike was returned in good condition, and for the deposit to be refunded the same day, or in a stated number of days by transfer.",
        ],
      },
    ],
  },

  "where-to-stay-in-gulmarg": {
    sections: [
      {
        h: "Gulmarg with children: what to ask the hotel",
        p: [
          "Ask whether the hotel has family rooms or interconnecting rooms, whether it can supply a cot, and whether the kitchen will make plain food for children. Check that the windows and balconies are safe, and that there is a heated indoor space where children can play when it is too cold outside. In winter, ask about renting small snow boots and sledges nearby.",
        ],
      },
      {
        h: "Gulmarg stays in spring and late autumn",
        p: [
          "April and late October to November are the quiet seasons in Gulmarg. In April, snow lingers on the upper meadow and Apharwat, while the lower slopes turn green; some hotels are still closing their winter rooms and opening the summer ones, so ask which wing you will be in. In late autumn the meadow turns brown and gold, the crowds thin out and the first snow can arrive any week from November. Both periods suit travellers who want calm and lower demand, and both need warm clothes at night. Heating matters as much as in winter, since many hotels switch off central heating outside the main snow months; ask whether heaters are provided and whether there is a charge.",
          "These shoulder weeks are also when hotels do repairs and staff take leave, so service can be thinner. Read recent guest reviews from the same month in earlier years, and confirm the restaurant will be open for dinner.",
        ],
      },
      {
        h: "Gondola tickets and your hotel day",
        p: [
          "The Gulmarg gondola is run by the Jammu and Kashmir Cable Car Corporation. Tickets for phase 1, from Gulmarg to Kongdori, and phase 2, from Kongdori to Apharwat, are sold online on the corporation's website, and peak-season slots sell out days ahead. Book your tickets as soon as your hotel is confirmed, choose an early slot if you are staying in Gulmarg itself, and carry the ID you used for booking. Phase 2 often closes in strong wind or heavy snow, so keep a flexible second day if Apharwat matters to you.",
        ],
      },
      {
        h: "Arriving at a Gulmarg hotel in snow",
        p: [
          "In heavy snow, traffic police at Tangmarg may stop cars without chains or allow only four-wheel-drive vehicles up to Gulmarg. Hire chains at Tangmarg if your driver does not have them, and expect slow traffic on the hairpins. Some hotels away from the main road cannot be reached by car after fresh snow; staff may come down with a sledge or a snow vehicle for your bags. Ask the hotel what happens if you arrive in the evening during a snowfall.",
        ],
      },
      {
        h: "Food, ATMs and medical help near Gulmarg hotels",
        p: [
          "Gulmarg has a few restaurants and cafes near the gondola base and the market, but choices are limited and many close early in winter. Tangmarg has more. There is a bank ATM in Gulmarg, but it can run out of cash on busy days, so carry enough. For medical help, Gulmarg has a basic health centre; serious cases go to Tangmarg or Srinagar. Tell your hotel about any health conditions when you check in.",
        ],
      },
    ],
  },

  "where-to-stay-in-pahalgam": {
    sections: [
      {
        h: "Wi-Fi and working from a Pahalgam hotel",
        p: [
          "Most Pahalgam hotels offer Wi-Fi, but speeds vary and it often works best in the lobby. If you need to work during your stay, ask for recent speed details, carry a postpaid SIM with good data coverage as backup, and avoid relying on video calls in the evenings, when many guests share the connection.",
        ],
      },
      {
        h: "Pahalgam with a dog or other pets",
        p: [
          "Few Pahalgam hotels accept pets, and those that do usually allow them only in certain rooms or cottages. Ask before booking, and confirm in writing. Keep pets on a lead in town and on the meadows, where ponies, sheep and village dogs are common. Union taxis may refuse animals, so check before planning trips to Aru or Betaab.",
        ],
      },
      {
        h: "Checking out of a Pahalgam hotel",
        p: [
          "Check-out is usually around noon. If your onward drive is long, ask to leave bags at the hotel while you visit Betaab or the market, or request a late check-out. Settle extra charges for heaters, laundry and meals the night before to avoid delays in the morning.",
        ],
      },
      {
        h: "Staying overnight in Aru village",
        p: [
          "Aru, about 12 km up the Lidder valley from Pahalgam, has a handful of guesthouses, the tourism department's huts and campsites. A night in Aru gives you the meadow to yourself in the early morning and evening, after the day visitors have gone back to Pahalgam. It is the usual start for treks to Lidderwat and the Kolahoi glacier and to Tarsar lake. Rooms are simple and electricity can be patchy, so carry a torch and a power bank. Reach Aru by union taxi from Pahalgam and confirm the return taxi time for the next day.",
        ],
      },
      {
        h: "Pahalgam stays for photographers",
        p: [
          "Photographers should stay close to the river or on the Aru road, so they can be out at first light without waiting for a taxi. Early mornings bring mist on the Lidder and soft light on the pine slopes; autumn evenings bring golden poplars and willows. Betaab Valley and Aru are best early, before the crowds. Drones need permission and are restricted in many parts of Kashmir, so do not fly one without checking the current rules.",
        ],
      },
      {
        h: "Pahalgam month by month for hotel guests",
        list: [
          "April and May: green meadows, rising rivers and the start of the season. Nights are cold; ask about heaters.",
          "June: busy with families and school holidays. Book early for riverside rooms.",
          "July and August: the Amarnath Yatra brings pilgrims and security movement. Hotels fill and traffic is slow.",
          "September and October: clear days, cooler nights and golden autumn colours. A good time for couples and photographers.",
          "November to March: cold, with snow on some days. Fewer hotels open, and those that do focus on heating.",
        ],
      },
      {
        h: "Eating in Pahalgam: hotel dining or the market",
        p: [
          "Most Pahalgam hotels serve buffet or set-menu meals, with North Indian and some Kashmiri dishes. The market has small restaurants serving Punjabi food, Kashmiri wazwan dishes on order, trout from the Lidder, and tea stalls. Trying a market restaurant for lunch while keeping breakfast and dinner at the hotel works well for most guests. Ask your hotel if they can prepare a Kashmiri meal on request.",
        ],
      },
      {
        h: "Getting to your Pahalgam hotel from Srinagar airport",
        p: [
          "Pahalgam is about 95 km from Srinagar, a drive of about two and a half to three hours via Pampore, Awantipora and Anantnag. If your flight lands in the morning, you can reach Pahalgam by mid-afternoon with a lunch stop. If it lands late, consider a night in Srinagar first. Tell your hotel your arrival time so they can hold your room and dinner.",
        ],
      },
      {
        h: "Medical help, ATMs and phones in Pahalgam",
        p: [
          "Pahalgam has a government health centre and pharmacies in the market; serious cases are taken to Anantnag. Several bank ATMs operate in the market, but carry some cash for union taxis and ponies, which usually want cash. Mobile coverage is good in town and patchy in the side valleys. Prepaid SIM cards from outside Jammu and Kashmir do not work here; postpaid connections do.",
        ],
      },
      {
        h: "Pahalgam golf course and stays nearby",
        p: [
          "Pahalgam's golf course lies at the edge of town with the mountains around it. Golfers can stay in hotels close to the course and walk to the club. Clubs and caddies can be hired, and rules on green fees and timings are set by the club, so ask at the club house. Even non-golfers enjoy an evening walk on the edges of the course.",
        ],
      },
    ],
  },

  "aharbal-waterfall-kokernag-verinag-guide": {
    sections: [
      {
        h: "Saffron, apples and walnuts on the way",
        p: [
          "The roads to south Kashmir pass through some of the valley's best farming land. Pampore's saffron fields bloom purple in late October and early November, and shops along the highway sell saffron year round; buy from licensed sellers with a sealed pack. Shopian and Kulgam are apple country, with orchards in blossom in April and harvest from September to November. Walnut and almond stalls line the roads in autumn.",
        ],
      },
      {
        h: "South Kashmir for older travellers and wheelchair users",
        p: [
          "Kokernag and Verinag are the easiest of the three for older travellers: the gardens are flat, with paths from the parking areas, benches under the trees and toilets near the entrance. Wheelchair users can reach most of the Verinag tank and the main lawns at Kokernag, though some paths have steps. Aharbal is harder: the walk from the parking area to the viewpoints is uneven and slippery, and the best views involve rocky steps. Older travellers can enjoy the falls from the upper viewpoint and skip the descent.",
        ],
      },
      {
        h: "A full south Kashmir day with timings",
        days: [
          "Leave Srinagar by 7 am and drive south past Pampore's saffron fields.",
          "Reach Aharbal by about 9:30 am; walk to the falls and back in an hour or two.",
          "Drive to Kokernag for lunch near the garden, then walk around the springs.",
          "Continue to Verinag for the spring and the Mughal tank in the late afternoon.",
          "Return to Srinagar by 8 to 9 pm, or stay in Pahalgam if you are going there next.",
        ],
      },
      {
        h: "Photography at Aharbal and the springs",
        p: [
          "At Aharbal, morning light falls into the gorge and the spray is visible against the forest. A wide lens works for the falls and the pines; a polariser cuts glare on the water. At Verinag, the deep colour of the spring is best seen from the arches around the tank. At Kokernag, flower beds in spring and chinar leaves in autumn make fine photographs. Ask before photographing local families picnicking.",
        ],
      },
      {
        h: "Food stops in south Kashmir",
        p: [
          "Small restaurants at Kokernag and near Verinag serve rice, rajma, chicken and local dishes, and some prepare trout. Qazigund, near Verinag, has highway dhabas. Aharbal has tea stalls and a few simple eateries near the falls. In autumn, fruit stalls along the Shopian road sell fresh apples and walnuts. Carry water and snacks, since options are limited outside meal hours.",
        ],
      },
    ],
  },

  "hanle-stargazing-travel-guide": {
    sections: [
      {
        h: "Booking a Hanle homestay",
        p: [
          "Hanle's homestays are small and few, so book ahead through a Leh agent, a homestay network or the phone numbers shared by recent visitors, especially around new moon weekends in autumn. Confirm meals, blankets and heating, whether a stargazing session with an astro ambassador can be arranged, and whether the homestay will be open on your dates. Pay the balance in cash on arrival.",
        ],
      },
      {
        h: "Hanle for first-time visitors to Ladakh",
        p: [
          "Hanle is not a good choice for the start of a first trip to Ladakh. It is far from Leh, higher than most places travellers visit, and medical help is limited. First-time visitors should spend at least three nights acclimatising in Leh and nearby, visit Nubra or Pangong, and only then go to Hanle. If you have only five or six days in Ladakh, it is often better to save Hanle for a second trip.",
        ],
      },
      {
        h: "Light rules for your car at night",
        p: [
          "Inside the Dark Sky Reserve, car headlights are the biggest source of light pollution. If you arrive after dark, dip your lights near the village and switch them off as soon as you park. Do not drive around at night looking for stargazing spots; walk with a red torch or let your host guide you.",
        ],
      },
      {
        h: "The Hanle river wetlands",
        p: [
          "The Hanle river spreads into wide marshes and channels around the village before joining the Indus near Loma. In summer these wetlands are an important breeding ground for birds, including the black-necked crane, bar-headed geese and ruddy shelducks, and they draw birdwatchers as well as stargazers. Keep to the road and the edges of the marsh, use binoculars instead of walking close, and never chase or approach nesting birds. The same wetlands reflect the night sky on calm evenings, which photographers love.",
        ],
      },
      {
        h: "The drive from Leh to Hanle, stage by stage",
        list: [
          "Leh to Upshi: along the Indus, through Thiksey and Karu, about an hour.",
          "Upshi to Chumathang: a narrow gorge along the Indus; Chumathang has hot springs by the river.",
          "Chumathang to Mahe and Nyoma: the valley widens into the Changthang plateau, with checkposts on the way.",
          "Nyoma to Loma: a broad plain along the Indus, where wild horses and nomads' camps appear.",
          "Loma to Hanle: the road turns south away from the Indus, through open country to Hanle.",
        ],
      },
      {
        h: "What a stargazing night looks like",
        p: [
          "After dinner at your homestay, an astro ambassador sets up a telescope outside. As the sky darkens, they point out bright planets and constellations, then turn the telescope to the Moon if it is up, star clusters, nebulae and galaxies. Around the new moon, the Milky Way rises clearly over the hills. Sessions usually last an hour or two. Dress as for a winter night, with a hat, gloves and thick socks.",
        ],
      },
      {
        h: "Phones, power and money in Hanle",
        p: [
          "Mobile coverage in Hanle is limited, and some networks work only in certain spots. Homestays may have Wi-Fi, but it is slow and unreliable. Electricity is often from solar power, with limited hours for charging. There is no reliable ATM; carry enough cash from Leh for the whole trip. Tell family at home that you may be out of touch for a day or two.",
        ],
      },
      {
        h: "Food in Hanle homestays",
        p: [
          "Homestays serve simple home-cooked food: rice, dal, vegetables, Ladakhi bread, thukpa, momos and butter tea. Fresh vegetables are limited on the plateau, so meals are basic. Tell your hosts about dietary needs in advance. Carry snacks for the long drives, and drink plenty of water to help with the altitude.",
        ],
      },
    ],
  },

  "keran-valley-kashmir-guide": {
    sections: [
      {
        h: "Questions to ask before you book a Keran trip",
        list: [
          "Who handles the permit or entry paperwork, and what documents do you need to send in advance?",
          "What car will you get, and has the driver been to Keran recently?",
          "Where will you stay, what are the rooms and bathrooms like, and are dinner and breakfast included?",
          "What time must you leave Srinagar to clear the checkpoints, and what is the latest return time?",
          "What happens if the road over Pharkian Gali is closed by snow or landslides?",
          "Is there a refund or change policy if the visit is not allowed on the day?",
        ],
      },
      {
        h: "Keran in a north Kashmir itinerary",
        p: [
          "On a week-long Kashmir trip, Keran fits as a two-day add-on after three nights in Srinagar and before Gulmarg or Sonamarg. On a longer trip, combine it with Lolab and Bangus for a three or four day north Kashmir loop. Avoid planning Keran as the last stop before flying out, since checkpoints and weather can delay the return. Keep a buffer day in Srinagar.",
        ],
      },
      {
        h: "Lolab and the Kalaroos caves on the return",
        p: [
          "Lolab valley, close to Kupwara, makes a good stop on the way back from Keran. It is a wide green valley of rice fields, walnut trees and orchards, ringed by forested hills. The Kalaroos caves, in the valley's hillsides, are a local curiosity reached by a short climb, with legends about tunnels leading far away. Lolab has a few tourism department huts and guest houses. A night here breaks the long drive back to Srinagar and turns Keran into a relaxed three-day north Kashmir trip.",
        ],
      },
      {
        h: "Health and emergencies in Keran",
        p: [
          "Medical facilities in Keran are basic, and the nearest hospital is in Kupwara, a few hours away over Pharkian Gali. Carry any medicines you need for the whole trip, along with a basic first aid kit. If someone falls ill, tell your host and the checkpoint staff immediately; the army and local administration help in emergencies. Travellers with heart problems, pregnant women and very young children should think carefully before making the trip.",
        ],
      },
      {
        h: "How far is Keran and what is the drive like?",
        p: [
          "Keran is roughly 150 km from Srinagar, five to six hours by road. The first half runs through the fields and orchards of Baramulla and Kupwara districts, via Sopore or Handwara, to Kupwara town. From there the road climbs through forests to Pharkian Gali, often with snow on the sides until early summer, then drops in tight bends to the Kishanganga. The last section follows the river into Keran. Expect checkpoints and plan for the slower mountain stretch.",
        ],
      },
      {
        h: "How does a Keran Valley package work?",
        p: [
          "A typical Keran package includes a car with a driver from Srinagar, the paperwork for the visit, one night in a homestay or guest house with dinner and breakfast, and the return drive. Some add a night in Kupwara, Lolab or Bangus. Ask the agent to confirm the permit arrangements, the stay and meals, and the timings for each checkpoint in writing.",
        ],
      },
      {
        h: "Village life in Keran",
        p: [
          "Keran's villagers farm the narrow fields along the Kishanganga, growing maize, rice and vegetables, and keep orchards of walnuts and fruit. Houses are built of stone and wood, with tin roofs against the snow. The pace is slow and hospitable; visitors are often invited for tea. Respect privacy, dress modestly, and ask before entering homes or fields.",
        ],
      },
      {
        h: "Keran with Gurez: can you do both?",
        p: [
          "Keran and Gurez are both border valleys in north Kashmir, but there is no direct road between them for visitors. Gurez is reached via Bandipora and Razdan pass, Keran via Kupwara and Pharkian Gali. To see both, plan separate trips from Srinagar or link them through Srinagar or Bandipora, with at least four or five days in all.",
        ],
      },
      {
        h: "What drives the cost of a Keran trip?",
        p: [
          "The main costs are the car and driver for two days, the homestay and meals, and any extra nights in Lolab or Bangus. An SUV costs more than a sedan but is better on the Pharkian road. Group trips share the car cost. Ask for an itemised quote so you can compare agents fairly.",
        ],
      },
    ],
  },

  "turtuk-travel-guide": {
    sections: [
      {
        h: "Leaving Turtuk: onward routes",
        p: [
          "From Turtuk, most travellers drive back to Hunder or Diskit and then either return to Leh over Khardung La or continue to Pangong along the Shyok road via Agham and Shyok village. The Pangong route saves a long return to Leh but is rough in places and crosses streams that rise in the afternoon, so leave early. Check the road status in Diskit the evening before.",
        ],
      },
      {
        h: "Turtuk's mosques and the Balti way of life",
        p: [
          "Turtuk's mosques, some with wooden structures and carved details, are at the centre of village life. Visitors can admire them from outside; ask before entering, remove your shoes, and avoid prayer times. Daily life follows the farming year: sowing in spring, tending fields and orchards in summer, harvesting apricots and grain in late summer and autumn, and staying indoors through the cold winter. Respecting this rhythm, and the village's conservative customs, makes the visit welcome for everyone.",
        ],
      },
      {
        h: "Turtuk for older travellers",
        p: [
          "Turtuk is lower than Leh, at about 2,900 m, so older travellers often find it easier to breathe here. The lanes through the village are steep and uneven in places, with steps and narrow paths, so walk slowly and take a local guide. The long drive from Leh over Khardung La is the hardest part; plan a night in Hunder or Diskit on the way.",
        ],
      },
      {
        h: "Shopping for apricots and Balti goods",
        p: [
          "Dried apricots, apricot kernels, apricot oil and walnuts are the main things to buy in Turtuk. Buy from homestays and village shops, check that the fruit is dried naturally without sulphur if that matters to you, and carry it in sealed bags. Small woven baskets and woollen socks and caps make good souvenirs. Prices are fixed by the families, and bargaining is not common.",
        ],
      },
      {
        h: "How many days in Nubra with Turtuk?",
        p: [
          "Two nights in Nubra is the minimum for a trip that includes Turtuk: one in Hunder or Diskit and one in Turtuk, or two in Hunder with a long day trip to Turtuk. Three nights let you add Panamik's hot springs, Sumur and the Samstanling monastery, and the drive to Pangong via the Shyok road without rushing. Fewer nights means most of your time is spent in the car.",
        ],
      },
      {
        h: "Turtuk's water mills and crafts",
        p: [
          "Water from the glacier streams powers small stone water mills in Turtuk, still used to grind barley and buckwheat into flour. Some homestays will show you one. The village also has traditional crafts, such as woven baskets and woollen items, sold by local families and small cooperatives. Buy directly from the makers where you can, since the money stays in the village.",
        ],
      },
      {
        h: "Walking through Youl and Farool",
        p: [
          "Turtuk is divided by a stream into two main parts, Youl and Farool. A walk through both takes two to three hours at an easy pace. Start at the main road, cross the bridge, and follow lanes past stone houses, water channels, mosques and orchards. Farool, higher up, has views over the Shyok valley and the fields below. Local guides from homestays can lead the walk and explain the village's history.",
        ],
      },
      {
        h: "The drive from Hunder to Turtuk",
        p: [
          "From Hunder, the road follows the Shyok river west through a narrow valley, passing army camps and small villages. Bogdang, a Balti village with green fields, is a good stop. The road is paved but narrow in places, with steep drops to the river. The drive takes about two and a half hours. Fuel up at Diskit, since fuel is hard to find beyond it.",
        ],
      },
      {
        h: "Homestay life in Turtuk",
        p: [
          "Turtuk's homestays are run by families in their own houses. Rooms are simple, with mattresses on the floor or basic beds and shared or attached bathrooms. Meals are eaten with the family, and you may be invited to help in the kitchen or the fields. It is a warm, personal stay, best for travellers who value local life over comfort.",
        ],
      },
      {
        h: "Turtuk in winter",
        p: [
          "In winter, Turtuk is very cold, with snow on the fields and frozen water channels. Many homestays close, and those that stay open have limited heating. The road from Diskit is usually open but can be icy. Winter visits suit hardy travellers who want to see village life in the off season; for most, May to October is better.",
        ],
      },
      {
        h: "Photography ethics in Turtuk",
        p: [
          "Turtuk is a living village, not a museum. Ask before photographing people, especially women and children, and accept a polite no. Do not photograph inside homes or mosques without permission. Avoid photographing army posts. Share photos with your hosts if they ask, and never pay children for photographs.",
        ],
      },
      {
        h: "Thang and Tyakshi beyond Turtuk",
        p: [
          "Beyond Turtuk, the road continues to Tyakshi and Thang, the last villages before the Line of Control. Thang has a viewpoint from which villages across the line can be seen. Access is controlled by the army, and visitors need to carry ID and follow instructions. It is a short drive from Turtuk and fits into the same day.",
        ],
      },
    ],
    faqs: [],
  },
};
