// Depth for every shared Kashmir day plan (D in ./kashmir.ts). The package
// page shows the one-line plan from the database and, under it, this detail:
// what the day looks like on the ground, what is optional or paid locally,
// and where you sleep. Written from the road network and local rules as of
// late 2026. No typed fares or prices, no em dashes.

import type { DayKey } from "./kashmir";

export type Place = "srinagar" | "houseboat" | "gulmarg" | "pahalgam" | "sonamarg" | "gurez" | "katra" | "patnitop" | "home";

export type DayDetail = {
  more: string; // a paragraph on how the day actually runs
  optional?: string; // add-ons, usually paid locally
  sleep: Place; // where the night is spent
};

export const DAY_DETAIL: Record<DayKey, DayDetail> = {
  arriveSrinagar: {
    more: "Srinagar airport is about 14 km from Dal Lake, so the transfer takes 30 to 45 minutes depending on traffic on the airport road. Expect a security check at the airport exit and keep a printout or screenshot of your hotel booking handy. Most travellers land by midday, rest for an hour and then head to one of the Boulevard ghats for a shikara. A one-hour ride takes you past Char Chinar island, the lotus beds near Nehru Park and the lake-side market lanes where boatmen sell kahwa, saffron and papier-mache from their own boats.",
    optional: "A longer shikara ride to the interior of the lake, a walk along the Boulevard at dusk, or dinner at a Kashmiri restaurant for wazwan dishes such as rogan josh and gushtaba.",
    sleep: "srinagar",
  },
  arriveHouseboat: {
    more: "From the airport it is 30 to 45 minutes to the ghat, where a shikara carries you and your bags across to the houseboat, since most boats are moored away from the road. Houseboats are carved cedar and walnut wood, with a sitting room, dining room and two to four bedrooms; they are graded by the tourism department, and deluxe boats have attached bathrooms and heating. Dal Lake boats are livelier and closer to the Boulevard; Nigeen Lake is quieter and greener. Dinner is usually served on board, cooked by the family that runs the boat.",
    optional: "A sunset shikara ride, a visit to a floating craft shop, or simply sitting on the front deck with kahwa while the call to prayer drifts across the water.",
    sleep: "houseboat",
  },
  srinagarSights: {
    more: "The three Mughal gardens sit along the eastern shore of Dal Lake, a few kilometres apart. Nishat Bagh, laid out in 1633, climbs in twelve terraces from the lake to the Zabarwan hills; Shalimar Bagh, built for Emperor Jahangir in 1619, is famous for its black marble pavilion and fountains; Chashme Shahi, the smallest, is built around a spring whose water locals still bottle. Pari Mahal, a terraced ruin built for Dara Shikoh, gives the best view over the lake. Hazratbal, the white marble shrine on the north shore, is busiest on Fridays. Plan about six hours with a lunch break.",
    optional: "Entry tickets for the gardens are bought at the gate. The Botanical Garden next to Cheshma Shahi and the tulip garden (spring only) are close by if you have energy left.",
    sleep: "srinagar",
  },
  srinagarOldCity: {
    more: "Old Srinagar lies along the Jhelum, west of Dal Lake. Jamia Masjid, first built around 1400, has a courtyard ringed by 378 deodar pillars; visitors are welcome outside prayer times, with heads covered. The Khanqah of Shah Hamadan is a wooden shrine on the river bank with painted papier-mache interiors; non-Muslim visitors usually view it from outside. The lanes around Zaina Kadal and Maharaj Gunj are where copperware, papier-mache and shawls are made. In the afternoon, the road up to Shankaracharya Temple ends at a stairway of about 240 steps; phones and cameras usually have to be left at the security post.",
    optional: "A walk across the old wooden-style bridges, a visit to a pashmina workshop to see hand spinning, or tea and bakarkhani bread from a traditional bakery.",
    sleep: "srinagar",
  },
  houseboatNight: {
    more: "Check out of the hotel after breakfast, keep a small overnight bag and move to the houseboat by shikara in the afternoon. The houseboat family serves dinner on board and breakfast the next morning. If you are up before sunrise, a boatman can take you to the floating vegetable market deep inside the lake, where farmers trade produce from their boats between roughly 5.30 and 7 am. It is one of the few things in Kashmir that has looked much the same for a century.",
    optional: "An early market ride is arranged with the boatman the evening before and paid locally. Ask for a heater or electric blanket in the cooler months.",
    sleep: "houseboat",
  },
  gulmargDay: {
    more: "The road leaves Srinagar through Magam and Tangmarg and climbs through pine forest for the last 13 km to Gulmarg, at about 2,650 m. The Gulmarg Gondola runs in two phases: the first to Kongdoori at about 3,080 m, the second to Apharwat at about 3,950 m, which closes in high wind or heavy snow. Gondola tickets are sold online by the cable car corporation and sell out on busy days, so book them as soon as your dates are fixed. On the meadow itself you can walk to St. Mary's Church, built in 1902, and the Maharani Temple on its small hill. Leave Gulmarg by about 4 pm to be back in Srinagar for dinner.",
    optional: "Gondola tickets, ponies, guides and snow equipment are paid locally. In summer, a walk from Kongdoori towards Alpather Lake is possible with a guide when the snow has cleared, usually from late June.",
    sleep: "srinagar",
  },
  gulmargTransfer: {
    more: "Drive from Srinagar to Gulmarg in about 1.5 to 2 hours, check in and go straight to the gondola while the light is good. Staying overnight in Gulmarg means you see the meadow early in the morning and after the day visitors leave, which is when it is at its best. Hotels in Gulmarg range from simple lodges near the market to large resorts near the gondola; nights are cold even in summer, so pack a warm layer. Gondola tickets are booked online in advance, and the second phase to Apharwat depends on the weather on the day.",
    optional: "Gondola tickets, ponies and guides are paid locally. A sunset walk on the meadow or a visit to the golf course, one of the highest in the world, costs nothing.",
    sleep: "gulmarg",
  },
  gulmargSnow: {
    more: "From about December to March, Gulmarg is under snow and the road from Tangmarg can need snow chains or a 4x4; after fresh snowfall the police sometimes allow only chained or four-wheel-drive vehicles, and local snow taxis are available. On the slopes, beginners learn on the gentle runs near the gondola base and at Kongdoori with a certified instructor; the Indian Institute of Skiing and Mountaineering also runs courses in season. Ski and snowboard gear, boots and snow clothing are rented in the market. Sledges are pulled by local operators across the meadow, which is the easiest way for children and non-skiers to enjoy the snow.",
    optional: "Ski instructors, equipment rental, sledges, snow boots and the gondola are paid locally; agree the duration and rate before you start. Phase 2 of the gondola is for experienced skiers when the snow is deep.",
    sleep: "gulmarg",
  },
  gulmargStay: {
    more: "A second day in Gulmarg is for slowing down. Khilanmarg is a higher meadow about 6 km away, reached on foot or by pony, with views to Nanga Parbat on clear days. Back on the main meadow, the Maharani Temple, built in 1915, and St. Mary's Church make an easy circuit, and the golf course is open in summer. In winter, a second day means a full day of ski lessons or a second gondola run when the morning slot is clear. Evenings in Gulmarg are quiet: most travellers eat in their hotel and step out only to watch the light fade on the Pir Panjal range.",
    optional: "Ponies to Khilanmarg, a round of golf (club hire is available), or a second gondola session, all paid locally.",
    sleep: "gulmarg",
  },
  pahalgamTransfer: {
    more: "The drive to Pahalgam runs south-east on the highway through Pampore, where the saffron fields bloom purple in late October and early November, and past the 9th-century temple ruins at Awantipora, built by King Avantivarman. Beyond Anantnag the road turns into the Lidder valley and follows the river for the last 45 km. Pahalgam sits at about 2,200 m, and hotels are spread along the river and on the road towards Aru. Spend the evening on the riverside walk or at the small Mamleshwar Temple across the bridge.",
    optional: "A stop at a saffron farm or a willow cricket bat workshop near Sangam, and a walk through the Pahalgam market for woollens and walnut wood.",
    sleep: "pahalgam",
  },
  pahalgamValleys: {
    more: "Cabs from Srinagar and other places are not allowed to drive to Pahalgam's sightseeing points: you hire a local union taxi from the stand in town, which runs at fixed rates for each circuit. Aru Valley is about 12 km up a side valley, a meadow village and the trailhead for the Kolahoi glacier and Tarsar treks. Betaab Valley, about 15 km out, is named after the 1983 film shot there and has a park along the stream. Chandanwari, about 16 km, is where the Amarnath Yatra trek begins, and often has snow well into June; access is restricted during the yatra in July and August. Baisaran meadow has been closed to visitors since April 2025.",
    optional: "Union taxi fares are paid locally per circuit, and park entry tickets at Betaab and Aru at the gate. Ponies, sledges at Chandanwari and photo costume stalls are extras; agree the price first.",
    sleep: "pahalgam",
  },
  pahalgamSlow: {
    more: "A day with nothing fixed. The Lidder riverside walk runs from the town bridge in both directions, with picnic spots under the pines. Trout fishing on the Lidder is licensed by the fisheries department, and permits are issued in season, usually from April to September. A half-day pony ride is the gentlest way for older travellers and small children to see the side valleys. This is also a good day to catch up on rest if the previous days were long on the road, or to visit the Mamleshwar Temple, one of the oldest stone temples in the valley.",
    optional: "Fishing permits and gear, pony rides and river rafting on the lower Lidder near Yanner (rafting season usually April to September) are booked locally.",
    sleep: "pahalgam",
  },
  pahalgamToSrinagar: {
    more: "Leave Pahalgam after breakfast and retrace the highway to Srinagar in about 3 hours. Most drivers stop at a saffron shop in Pampore, where you can see how the threads are graded, and at a cricket bat workshop near Sangam, where Kashmir willow clefts are dried in tall stacks along the road. Back in Srinagar, the evening is free: Polo View Market and Residency Road are the best places for shawls and crafts at fixed prices, and Lal Chowk is busier and better for bargaining.",
    optional: "Shopping is at your own pace; buy saffron and dry fruit from shops that give a sealed pack and a bill.",
    sleep: "srinagar",
  },
  sonamargDay: {
    more: "The road to Sonamarg follows the Sindh river north-east through Kangan and Gund, about 80 km, with the valley narrowing and the peaks rising as you go. Sonamarg sits at about 2,730 m. The walk or pony ride to Thajiwas Glacier is about 3 km each way from the main meadow; snow lingers there well into summer. Beyond Sonamarg the road climbs over Zojila to Zero Point, a snowfield on the Ladakh side; outside cabs are not allowed past Sonamarg, so this stretch is done in a local taxi, and only when the pass is open, usually June to October. Start early: the drive back can be slow behind Amarnath Yatra convoys in July and August.",
    optional: "Ponies to Thajiwas, local taxis to Zero Point and sledges are paid locally. River rafting on the Sindh is offered near Sonamarg in season.",
    sleep: "srinagar",
  },
  sonamargStay: {
    more: "Driving up and staying the night in Sonamarg turns a long day trip into a relaxed one. After check-in, walk or ride to Thajiwas Glacier in the afternoon, when the day-trip crowd is heading back. Sonamarg hotels are mostly mid-range, with a few larger properties and camps along the river; nights are cool even in July. Since the Z-Morh tunnel opened in January 2025, the road from Srinagar stays open through winter, but Sonamarg in deep winter is very cold and many hotels close.",
    optional: "Ponies, sledges and rafting on the Sindh are paid locally. Stargazing on a clear night is free and excellent.",
    sleep: "sonamarg",
  },
  sonamargExplore: {
    more: "A full day around Sonamarg gives two options. When Zojila is open, usually June to October, a local taxi takes you over the pass to Zero Point and the snowfields on the Ladakh side; the road is unpaved and dusty in places, so carry a scarf and sunglasses. Otherwise, walk up the Sindh valley towards Shitkadi, the starting point of the Kashmir Great Lakes trek, or along the river to the Nilagrad stream. Both are easy half days. In the evening, the light on the peaks around Thajiwas is reason enough to have stayed.",
    optional: "Local taxis to Zero Point are booked at the taxi stand at fixed rates. A trekking guide is advisable for anything beyond a short walk.",
    sleep: "sonamarg",
  },
  doodhpathriDay: {
    more: "Doodhpathri lies south-west of Srinagar through Budgam and Khansahib, about 42 km and 1.5 hours. The name means valley of milk, after the Shaliganga stream that froths white over the rocks. It is a long, open meadow at about 2,730 m, ringed by pine and fir, with fewer stalls and far fewer visitors than Gulmarg or Pahalgam. Walk along the stream, picnic on the grass, or ride a pony to the upper meadows. The road is usually open from April to November; in winter heavy snow closes it.",
    optional: "A small entry fee is collected at the gate, and ponies are paid locally. There are only a few simple eateries, so carry water and snacks.",
    sleep: "srinagar",
  },
  yusmargDay: {
    more: "Yusmarg is about 47 km south-west of Srinagar, a meadow at about 2,400 m surrounded by pine forest. The walk or pony ride to Nilnag Lake is about 4 km each way through the trees, and the Doodh Ganga river runs below the meadow. On the way back, the town of Charar-e-Sharief has the shrine of Sheikh Noor-ud-din Noorani, Kashmir's patron saint, revered by Muslims and Hindus alike. Yusmarg has few facilities, which is a large part of its appeal.",
    optional: "Ponies to Nilnag Lake are paid locally. Dress modestly for the shrine visit.",
    sleep: "srinagar",
  },
  gurezTransfer: {
    more: "Gurez is in Bandipora district on the Line of Control, about 125 km north of Srinagar. The road passes Wular Lake, one of Asia's largest freshwater lakes, then climbs through Tragbal to Razdan Pass at about 3,300 m before dropping into the Kishanganga valley. Allow 5 to 6 hours. Indian travellers register their ID at police and army check posts on the way; foreign nationals are not allowed to visit. The road usually opens from May or June to November, depending on snow. Dawar, the main village, has guesthouses, homestays and a few camps.",
    optional: "Carry original photo ID for every traveller and some cash: ATMs are few and card payments unreliable.",
    sleep: "gurez",
  },
  gurezValley: {
    more: "The valley follows the Kishanganga river, with log-and-timber houses built in the style of the Dard-Shina people who live here. Habba Khatoon peak, a pyramid-shaped mountain named after the 16th-century Kashmiri poet queen, rises above Dawar, and a spring at its base carries her name. Upstream, the road towards Tulail valley passes villages such as Badwan and Chakwali; check with the local police on how far you can go that day. Mobile coverage is limited to a few networks, and the evenings are dark and quiet.",
    optional: "Short walks with a local guide, fishing in the Kishanganga with a permit, and homestay meals. Plan for limited electricity and connectivity.",
    sleep: "gurez",
  },
  gurezToSrinagar: {
    more: "Leave Gurez early to cross Razdan Pass in daylight; the drive back to Srinagar takes 5 to 6 hours with a stop near Wular Lake. The first half is mountain road with tight bends, so keep motion-sickness tablets handy if you need them. You reach Srinagar by mid-afternoon, with the evening free on the Boulevard or in the markets.",
    optional: "A stop at Bandipora's lake-side viewpoints or at the Wular Lake banks for photographs.",
    sleep: "srinagar",
  },
  arriveJammu: {
    more: "Jammu Tawi railway station and Jammu airport are both about 50 km from Katra, a drive of 1.5 to 2 hours; many travellers now take a train straight to Shri Mata Vaishno Devi Katra station instead. Every pilgrim needs a yatra registration (an RFID card), which can be booked online or collected at the counters in Katra and at the station; it is checked at Banganga before the trek starts. Rest in the evening, keep a light bag ready for the climb and leave leather items and large luggage at the hotel.",
    optional: "Helicopter and Bhawan accommodation bookings, if you want them, are made online on the Shrine Board website well ahead.",
    sleep: "katra",
  },
  vaishnoDevi: {
    more: "The trek from Banganga to the Bhawan is about 12 km on the old track via Adhkuwari or about 13 km on the newer Himkoti route; most pilgrims take 4 to 6 hours to walk up. Ponies, palkis and battery cars on parts of the track are available, and a helicopter runs from Katra to Sanjichhat, leaving about 2.5 km to walk. The shrine is open throughout the year and is busiest during the Navratris and summer holidays. From the Bhawan, a ropeway climbs to Bhairon Temple, which most pilgrims visit to complete the yatra. Many choose to start at night to avoid the heat and reach the Bhawan for early darshan.",
    optional: "Pony, palki, battery car, helicopter and ropeway tickets are paid separately. Phones are allowed on the track, but cameras and bags are deposited before darshan.",
    sleep: "katra",
  },
  katraToPatnitop: {
    more: "Patnitop is about 85 km from Katra, a plateau at about 2,020 m on the old Jammu to Srinagar road. Note that the Chenani-Nashri tunnel bypasses Patnitop, so the driver takes the old road up through the forest. Nathatop, a few kilometres higher, has open views of the Pir Panjal, and Sanasar, about 20 km away, is a cup-shaped meadow used for paragliding when the weather allows. Patnitop is cool in summer and often snowed in from December to February.",
    optional: "Paragliding at Sanasar and Nathatop, ponies and a walk to the Naag Temple near Patnitop are paid locally.",
    sleep: "patnitop",
  },
  patnitopToPahalgam: {
    more: "The longest driving day of the trip: from Patnitop down to the highway, through the Banihal tunnel under the Pir Panjal, and into the Kashmir valley, then up the Lidder valley to Pahalgam. Allow 6 to 7 hours with stops. The highway has one-way traffic on some stretches in heavy traffic or after landslides, so your driver will keep an eye on the traffic advisory and start early.",
    optional: "Lunch stops at the dhabas around Ramban and Qazigund, known for rajma chawal and kahwa.",
    sleep: "pahalgam",
  },
  katraToSrinagar: {
    more: "Two ways to reach Srinagar from Katra. By road on NH44, the drive is 7 to 8 hours through the Chenani-Nashri tunnel, Ramban and the Banihal tunnel. By rail, the Vande Bharat trains that started in June 2025 run from Shri Mata Vaishno Devi Katra to Srinagar in about 3 hours, crossing the Chenab and Anji bridges; seats sell out, so book early. Either way you reach Srinagar in time for an evening shikara on Dal Lake.",
    optional: "If you take the train, your cab meets you at Srinagar station. Train tickets are booked on the railway website and are not part of most packages unless you ask.",
    sleep: "srinagar",
  },
  tulipGarden: {
    more: "The Indira Gandhi Memorial Tulip Garden lies below the Zabarwan hills, overlooking Dal Lake, and plants well over a million tulips in dozens of varieties each year. It usually opens to visitors in the second half of March and stays open for three to four weeks, depending on the weather; the exact dates are announced by the floriculture department each year. Go early in the morning to avoid crowds. The Botanical Garden is next door, and Nishat Bagh is a few minutes away, so the rest of the day needs very little driving.",
    optional: "Entry tickets are bought at the gate. Almond blossom at Badamwari, near Hari Parbat, flowers around the same weeks in March.",
    sleep: "srinagar",
  },
  arrivePahalgam: {
    more: "Instead of stopping in Srinagar, the driver meets you at the airport and heads straight down the highway to Pahalgam, a drive of 2.5 to 3 hours. The route passes the Pampore saffron fields and the Awantipora temple ruins, both good for a short stop. Arriving in Pahalgam by mid-afternoon gives you time to settle in and walk by the Lidder before dark.",
    optional: "A quick stop at a Pampore saffron shop or for kahwa at a roadside cafe on the way.",
    sleep: "pahalgam",
  },
  gulmargToPahalgam: {
    more: "Gulmarg and Pahalgam lie on opposite sides of the valley, so the route goes back through Tangmarg and around Srinagar before heading south-east on the highway, about 140 km in 4 to 5 hours. Your driver can stop in Srinagar for lunch or a quick look at a Mughal garden, then continue through Pampore and Awantipora. You reach Pahalgam in the late afternoon.",
    optional: "A lunch stop in Srinagar or at a dhaba near Pampore.",
    sleep: "pahalgam",
  },
  pahalgamToGulmarg: {
    more: "The reverse of the Gulmarg to Pahalgam drive: up the highway past Awantipora and Pampore, round Srinagar and then up through Tangmarg to Gulmarg, about 140 km and 4 to 5 hours. Arriving in the late afternoon, you can walk the meadow before sunset and book the gondola for the next morning, when the weather is usually clearest.",
    optional: "Gondola tickets for the next morning are best booked online in advance.",
    sleep: "gulmarg",
  },
  gulmargToSrinagar: {
    more: "If the gondola was full or the weather closed it on the day you arrived, the morning is your second chance; the first slots usually have the clearest skies. After lunch, drive back down through Tangmarg to Srinagar in 1.5 to 2 hours. The evening is free for a walk on the Boulevard or a last shikara ride.",
    optional: "Gondola tickets and ponies are paid locally.",
    sleep: "srinagar",
  },
  srinagarToSonamarg: {
    more: "The drive to Sonamarg runs north-east along the Sindh river through Kangan, about 80 km and 2.5 to 3 hours, with the valley turning steeper and greener as you climb. After check-in, take a pony or walk to Thajiwas Glacier, about 3 km from the meadow, and come back as the afternoon light hits the snowfields. Sonamarg's hotels and camps line the main road and the river.",
    optional: "Ponies and sledges at Thajiwas are paid locally; agree the rate before you start.",
    sleep: "sonamarg",
  },
  sonamargToPahalgam: {
    more: "A long day across the valley: back down the Sindh to Srinagar, then south-east on the highway to Pahalgam, about 175 km and 5 to 6 hours. Lunch is usually in Srinagar. Your driver will time the start to avoid yatra convoys in July and August. You reach the Lidder valley in the evening.",
    optional: "A short stop at a Mughal garden or the Pampore saffron fields if time allows.",
    sleep: "pahalgam",
  },
  sonamargToSrinagar: {
    more: "Drive back down the Sindh valley to Srinagar, 2.5 to 3 hours, with a stop at one of the riverside cafes in Gund or Kangan for trout or kahwa. The afternoon and evening are free in Srinagar: Lal Chowk and Polo View for shopping, or a sunset on the Boulevard.",
    optional: "Shopping and meals are at your own cost.",
    sleep: "srinagar",
  },
  departPahalgam: {
    more: "Leave Pahalgam about 4 to 5 hours before your flight. The drive to Srinagar airport takes about 3 hours, and the airport has a security check at the entry gate as well as inside, so queues can be long in peak season. Saffron and dry fruit shops in Pampore are on the way if you still have shopping to do.",
    optional: "Buy sealed saffron with a bill, and keep liquids and pastes in checked baggage.",
    sleep: "home",
  },
  departGulmarg: {
    more: "Gulmarg to Srinagar airport is about 2 hours. Leave at least 4 hours before your flight to allow for traffic around Tangmarg and the security checks at the airport entry gate and inside the terminal.",
    optional: "A last stop at a dry fruit shop on the airport road.",
    sleep: "home",
  },
  departSonamarg: {
    more: "Sonamarg to Srinagar airport is about 3 hours down the Sindh valley. Leave 5 hours before your flight in summer, when Amarnath Yatra traffic can slow the road, and allow time for the airport's two rounds of security.",
    optional: "Lunch stops in Gund or Kangan are on the way.",
    sleep: "home",
  },
  katraToPahalgam: {
    more: "A long drive of about 260 km on NH44 through the Chenani-Nashri tunnel, Ramban, the Banihal tunnel and Qazigund, turning off at Anantnag for the Lidder valley. Allow 7 to 8 hours with breaks; the highway can be slow on some stretches after rain. An early start means you reach Pahalgam before dark.",
    optional: "Lunch stops at the dhabas around Ramban and Qazigund.",
    sleep: "pahalgam",
  },
  departSrinagar: {
    more: "Check out and drive to Srinagar airport, about 30 to 45 minutes from Dal Lake. There is a security check at the outer gate as well as at the terminal, so reach the airport two to three hours before your flight. On the way, dry fruit shops sell walnuts, almonds and saffron in sealed packs; buy from shops that give a bill.",
    optional: "Keep saffron and dry fruit in checked baggage if you are carrying large amounts.",
    sleep: "home",
  },
  departJammu: {
    more: "From Srinagar, either take the Vande Bharat train to Shri Mata Vaishno Devi Katra (about 3 hours) and connect onward, or drive about 250 km to Jammu on NH44 (7 to 8 hours). Book train seats early, and leave plenty of buffer before an evening train or flight from Jammu.",
    optional: "Train tickets are booked separately unless your package says otherwise.",
    sleep: "home",
  },
};

// Hand-written packages (the 15 catalog ones) do not reuse D word for word,
// so their days are matched by what they mention. First match wins.
export const DAY_KEYWORDS: [RegExp, DayKey][] = [
  [/depart|fly home|onward flight|airport drop|transfer to (the )?airport|drop at .*airport/i, "departSrinagar"],
  [/gurez/i, "gurezValley"],
  [/vaishno|katra/i, "vaishnoDevi"],
  [/tulip/i, "tulipGarden"],
  [/(arrive|land).*(houseboat)|houseboat.*(arrive|check in)/i, "arriveHouseboat"],
  [/arrive|land in srinagar/i, "arriveSrinagar"],
  [/(ski|snowboard|sledg|snow).*gulmarg|gulmarg.*(ski|snow)/i, "gulmargSnow"],
  [/khilanmarg|slow day in gulmarg|second day in gulmarg/i, "gulmargStay"],
  [/gulmarg.*(day trip|back to srinagar|return to srinagar)|day trip to gulmarg/i, "gulmargDay"],
  [/gulmarg/i, "gulmargTransfer"],
  [/aru|betaab|chandanwari/i, "pahalgamValleys"],
  [/pahalgam.*(to|back to) srinagar|drive back .*srinagar/i, "pahalgamToSrinagar"],
  [/pahalgam/i, "pahalgamTransfer"],
  [/zero point|zojila/i, "sonamargExplore"],
  [/sonamarg.*(day trip|back to srinagar|return)/i, "sonamargDay"],
  [/sonamarg/i, "sonamargStay"],
  [/doodhpathri/i, "doodhpathriDay"],
  [/yusmarg/i, "yusmargDay"],
  [/houseboat/i, "houseboatNight"],
  [/jamia|shah hamadan|old (city|srinagar)|shankaracharya/i, "srinagarOldCity"],
  [/nishat|shalimar|mughal|sightseeing/i, "srinagarSights"],
];

// The 15 hand-written catalog packages: which day plan each day matches and
// where that night is spent, read from each package's own wording. Their
// one-line days are too short to infer overnight stops safely.
type Day = [DayKey, Place];
export const CATALOG_DAYS: Record<string, Day[]> = {
  "kashmir-family-holiday-2-nights-pahalgam-6-days": [["arriveSrinagar", "srinagar"], ["gulmargDay", "srinagar"], ["pahalgamTransfer", "pahalgam"], ["pahalgamValleys", "pahalgam"], ["pahalgamToSrinagar", "srinagar"], ["departSrinagar", "home"]],
  "kashmir-weekend-escape-srinagar-gulmarg-4-days": [["arriveSrinagar", "srinagar"], ["gulmargDay", "srinagar"], ["srinagarSights", "srinagar"], ["departSrinagar", "home"]],
  "gulmarg-luxury-ski-resort-stay-5-days": [["arriveSrinagar", "srinagar"], ["gulmargTransfer", "gulmarg"], ["gulmargSnow", "gulmarg"], ["gulmargToSrinagar", "srinagar"], ["departSrinagar", "home"]],
  "kashmir-in-winter-frozen-lakes-snowfields-6-days": [["arriveSrinagar", "srinagar"], ["gulmargSnow", "srinagar"], ["sonamargDay", "srinagar"], ["pahalgamTransfer", "pahalgam"], ["pahalgamToSrinagar", "srinagar"], ["departSrinagar", "home"]],
  "short-kashmir-break-gulmarg-gondola-4-days": [["arriveSrinagar", "srinagar"], ["gulmargTransfer", "gulmarg"], ["gulmargToSrinagar", "srinagar"], ["departSrinagar", "home"]],
  "kashmir-premium-retreat-heritage-houseboat-5-days": [["arriveHouseboat", "houseboat"], ["gulmargDay", "houseboat"], ["pahalgamTransfer", "pahalgam"], ["pahalgamValleys", "srinagar"], ["departSrinagar", "home"]],
  "kashmir-luxury-long-weekend-4-days": [["arriveSrinagar", "srinagar"], ["gulmargDay", "srinagar"], ["srinagarSights", "srinagar"], ["departSrinagar", "home"]],
  "kashmir-honeymoon-houseboat-gulmarg-pahalgam-5-days": [["arriveHouseboat", "houseboat"], ["gulmargDay", "srinagar"], ["pahalgamTransfer", "pahalgam"], ["pahalgamValleys", "srinagar"], ["departSrinagar", "home"]],
  "kashmir-group-departure-friends-5-days": [["arriveSrinagar", "srinagar"], ["gulmargDay", "srinagar"], ["pahalgamTransfer", "pahalgam"], ["pahalgamValleys", "srinagar"], ["departSrinagar", "home"]],
  "gulmarg-snow-stay-ski-village-5-days": [["arriveSrinagar", "srinagar"], ["gulmargTransfer", "gulmarg"], ["gulmargSnow", "gulmarg"], ["gulmargToSrinagar", "srinagar"], ["departSrinagar", "home"]],
  "kashmir-beyond-the-usual-doodhpathri-yusmarg-6-days": [["arriveSrinagar", "srinagar"], ["doodhpathriDay", "srinagar"], ["gulmargDay", "srinagar"], ["yusmargDay", "srinagar"], ["pahalgamValleys", "srinagar"], ["departSrinagar", "home"]],
  "kashmir-valley-trio-srinagar-gulmarg-pahalgam-5-days": [["arriveSrinagar", "srinagar"], ["gulmargDay", "srinagar"], ["pahalgamTransfer", "pahalgam"], ["pahalgamValleys", "srinagar"], ["departSrinagar", "home"]],
  "kashmir-grand-circuit-sonamarg-gulmarg-pahalgam-6-days": [["arriveSrinagar", "srinagar"], ["sonamargDay", "srinagar"], ["gulmargDay", "srinagar"], ["pahalgamTransfer", "pahalgam"], ["pahalgamValleys", "srinagar"], ["departSrinagar", "home"]],
  "slow-kashmir-overnight-gulmarg-pahalgam-7-days": [["arriveSrinagar", "srinagar"], ["gulmargTransfer", "gulmarg"], ["gulmargStay", "gulmarg"], ["gulmargToPahalgam", "pahalgam"], ["pahalgamValleys", "pahalgam"], ["pahalgamToSrinagar", "srinagar"], ["departSrinagar", "home"]],
  "kashmir-winter-group-trip-gulmarg-sonamarg-snow-6-days": [["arriveSrinagar", "srinagar"], ["gulmargSnow", "srinagar"], ["sonamargDay", "srinagar"], ["pahalgamTransfer", "pahalgam"], ["pahalgamToSrinagar", "srinagar"], ["departSrinagar", "home"]],
};
