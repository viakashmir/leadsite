import type { BlogSection } from "./types";

// Third depth layer (2026-11-15): Ladakh gap guides, Gurez stays, and the
// Siliguri and Japan origin guides.

type Extra = { sections?: BlogSection[]; faqs?: { q: string; a: string }[] };

export const GAP_EXTRAS_3: Record<string, Extra> = {
  "rangdum-travel-guide": {
    sections: [
      {
        h: "The drive through the Suru valley",
        p: [
          "The road from Kargil follows the Suru river south through villages of poplars, willows and terraced barley fields. Sankoo, about 40 km from Kargil, is the last sizeable village, with small shops and a few guesthouses. After Sankoo the valley opens and the mountains rise; at Panikhar, the twin peaks of Nun (about 7,135 m) and Kun come into view on clear days, and the road continues to Parkachik, where the Parkachik glacier tumbles down almost to the river.",
          "Beyond Parkachik the road climbs into a high, empty valley with fewer villages, wide gravel flats, braided streams and grazing yaks and horses. The landscape changes from Muslim, Shia Balti and Purig villages around Kargil to Buddhist villages as you approach Rangdum, where the Zanskari culture begins. This change of culture along one valley is one of the most interesting things about the drive.",
        ],
      },
      {
        h: "Rangdum monastery",
        p: [
          "Rangdum Gompa stands on a small, steep hill in the middle of the valley, a white building with a red-trimmed top, surrounded by mountains on all sides. It belongs to the Gelugpa order and was founded in the 18th century; a few dozen monks live there. Visitors can usually enter the prayer hall and courtyard; ask a monk before going in, remove your shoes, walk clockwise and ask before taking photos inside.",
          "The monastery holds a festival in summer in some years, with masked dances. Dates follow the Tibetan calendar; ask in Kargil or Padum before you travel.",
        ],
      },
      {
        h: "Rangdum as a stop on a Zanskar trip",
        p: [
          "For most travellers, Rangdum is the overnight stop between Kargil and Padum. The Kargil to Padum drive, about 230 km, is too long and rough for one day for most people, and Rangdum is roughly halfway. A typical plan is Kargil to Rangdum on day one, with stops at Panikhar and Parkachik, and Rangdum to Padum on day two, over Pensi La with the Drang Drung glacier. On the way back, you can stop again or drive straight through to Kargil.",
          "With more time, spend two nights in Rangdum and walk in the valley, visit the villages of Yuldo and Julidok, and see the monastery at sunrise.",
        ],
      },
      {
        h: "What to carry for Rangdum",
        list: [
          "Warm layers and a down jacket for cold nights, even in July.",
          "Cash: there are no ATMs in the Suru valley beyond Kargil.",
          "Snacks, water and a basic first aid kit with altitude medicines.",
          "A full tank of fuel and, for self-drive, a spare tyre and basic tools.",
          "A torch or headlamp; power is limited in the evenings.",
          "ID and permits for check posts.",
        ],
      },
    ],
  },
  "where-to-stay-in-leh": {
    sections: [
      {
        h: "Changspa in detail",
        p: [
          "Changspa is the stretch of road and lanes running from the edge of Leh town towards Shanti Stupa, lined with guesthouses, small hotels, cafes, bakeries, travel agents and bike rental shops. It is popular with backpackers, bikers and first-time visitors who like being able to walk to a cafe in the evening. Many guesthouses have gardens with apricot trees. The downside is noise from the cafes and bike shops, and the road can be busy in July and August.",
          "If you stay in Changspa, ask for a room at the back, away from the road, and check whether the guesthouse has central heating or only a heater.",
        ],
      },
      {
        h: "Fort Road and Main Bazaar in detail",
        p: [
          "Fort Road runs from the centre of Leh towards the polo ground and the old town, and Main Bazaar is the market street below Leh Palace. Hotels here are central: you can walk to the market, restaurants and the taxi stand. Main Bazaar was rebuilt as a pedestrian-friendly street, and in the evenings it is the social centre of Leh. Hotels on Fort Road range from simple to upscale. Traffic and noise are higher, especially in the day.",
        ],
      },
      {
        h: "Skara, Sankar and the quieter edges",
        p: [
          "Skara, to the south-west of the centre, and Sankar, to the north towards the monastery of the same name, are residential areas with gardens, fields and mountain views. Hotels and guesthouses here are quieter and often more spacious, and a 5 to 10 minute drive or a 20 to 30 minute walk from the market. They suit families, older travellers and anyone who wants calm for acclimatisation. Taxis are easy to call.",
        ],
      },
      {
        h: "Heritage stays in Old Leh",
        p: [
          "In the lanes below Leh Palace, some old Ladakhi houses have been restored as heritage guesthouses, with mud-brick walls, wooden ceilings and traditional kitchens. Staying here gives you a feel for old Leh, but the lanes are steep and narrow, cars cannot always reach the door, and rooms are often up stairs. Not ideal for the first night if you are breathless; better for later in the trip.",
        ],
      },
      {
        h: "Hotels near the airport",
        p: [
          "If you have an early flight out of Leh, a hotel on the airport road or in the Sheynam area saves time on the last morning. These are usually larger hotels with parking and lifts. They are less convenient for evenings in the market, but Leh is small and taxis are quick.",
        ],
      },
    ],
  },
  "where-to-stay-at-pangong-lake": {
    sections: [
      {
        h: "Spangmik in detail",
        p: [
          "Spangmik is the village where most camps and cottages are, spread along a few kilometres of shore with the lake in front and brown mountains behind. The view of the lake's changing colours is excellent, especially in the late afternoon and at sunrise. It is busy in July and August, with many camps close together, and the shore near the road sees day visitors in the middle of the day. Camps range from basic tents to deluxe tents with wooden floors and heaters.",
        ],
      },
      {
        h: "Lukung in detail",
        p: [
          "Lukung is where the road from Leh first meets the lake. It has camps and is the point where many day visitors stop, take photos and turn back, so it is crowded in the middle of the day. Staying in Lukung means you reach the lake earliest and can leave earliest the next morning, which suits a tight schedule. The evening and early morning are much quieter.",
        ],
      },
      {
        h: "Man and Merak in detail",
        p: [
          "Man and Merak lie further south along the shore, about 10 to 25 km beyond Spangmik, on the road towards Chushul. They are small villages where Changpa and Ladakhi families run homestays, and a few camps. The lake here is quieter, with fewer visitors and a wider view. These villages are also the natural stop if you are continuing south to Chushul and Hanle. Facilities are simpler, but the experience of a village night is more personal.",
        ],
      },
      {
        h: "Pangong in winter",
        p: [
          "From December to February, Pangong freezes and a few travellers visit for the frozen lake. Almost all camps are closed, but some homestays in Spangmik, Man and Merak open for winter visitors, with bukhari stoves and very basic facilities. Nights are extremely cold, well below minus 15°C. Only go with a local operator who arranges a homestay and knows the road over Chang La in winter, and acclimatise in Leh first.",
        ],
      },
      {
        h: "Responsible stays at the lake",
        list: [
          "Pangong is a fragile, high-altitude wetland: do not throw waste, and carry back plastic.",
          "Do not drive vehicles onto the lake shore or into the water.",
          "Use water sparingly; it is scarce and carried in.",
          "Homestays in Man and Merak support local families directly.",
          "Respect army posts and restricted areas along the shore.",
        ],
      },
    ],
  },
  "sarchu-travel-guide": {
    sections: [
      {
        h: "The Gata Loops, Nakee La and Lachulung La",
        p: [
          "North of Sarchu on the way to Leh, the road climbs the Gata Loops, 21 hairpin bends that gain several hundred metres in a short distance, then crosses Nakee La (about 4,700 m) and Lachulung La (about 5,050 m) before dropping to Pang. It is one of the most dramatic stretches of the highway. Coming from Leh, the loops are a descent into Sarchu; from Manali, they are the climb after Sarchu. Drive slowly, in a low gear, and give way to trucks on the bends.",
        ],
      },
      {
        h: "Baralacha La",
        p: [
          "South of Sarchu, Baralacha La (about 4,900 m) is the pass between Lahaul and the Sarchu plains, and the source area of the Bhaga, Chandra and Yunam rivers. Snow walls line the road in June after the pass opens. The lake of Suraj Tal lies just below the pass on the Lahaul side. In the afternoon, snowmelt streams can cross the road; try to cross the pass by early afternoon.",
        ],
      },
      {
        h: "Mobile signal and emergencies",
        p: [
          "Mobile signal at Sarchu is weak or absent on most networks, and camps may have limited satellite phone access. The nearest hospitals are in Keylong and Leh, hours away. If someone in your group shows signs of serious altitude sickness, descending towards Jispa is the main remedy, ideally with oxygen. Carry a basic medical kit, keep the driver informed, and do not push on to a higher place if anyone is unwell.",
        ],
      },
      {
        h: "Bikers at Sarchu",
        p: [
          "Sarchu is a classic overnight stop for bikers on the Manali to Leh ride. Arrive before dark, park in the camp's area, and carry a bike cover; mornings are frosty. Riding the next morning over the Gata Loops and Tanglang La on cold hands is tough, so pack good gloves. Bikers coming up from Manali on their second day should consider Jispa if anyone has a headache in the evening.",
        ],
      },
    ],
  },
  "turtuk-ladakh-itinerary": {
    sections: [
      {
        h: "A walk through Turtuk village",
        p: [
          "Turtuk is divided into small hamlets on both sides of a stream that runs down to the Shyok. Start at the bridge, climb into the old village through stone lanes and wooden houses, and follow the irrigation channels between fields of barley and buckwheat. The Yabgo palace and museum, the wooden mosque and the polo ground are the main stops. In summer, apricots lie drying on the roofs, and you can buy dried apricots and apricot oil from families. Locals are friendly but private; ask before photographing people, especially women.",
          "Allow two to three hours for the walk. The village is lower than Leh, so it is an easy day for most visitors.",
        ],
      },
      {
        h: "Balti food in Turtuk",
        p: [
          "Turtuk's homestays and small restaurants serve Balti dishes rarely found elsewhere in Ladakh: kisir (buckwheat pancakes), mamtu (dumplings), apricot soup, butter tea, and dishes made with local walnuts and apricots. Breakfast often includes buckwheat bread with apricot jam. If you stay a night, ask your host for a Balti dinner.",
        ],
      },
      {
        h: "Thang and the Line of Control",
        p: [
          "Beyond Turtuk, the road continues a few kilometres to Thang, the last Indian village before the Line of Control. Visitors can go to a viewpoint where army guides sometimes point out the villages across the line in Gilgit-Baltistan. Follow instructions, carry ID, and do not photograph army posts. Access depends on the army and can be closed at short notice.",
        ],
      },
      {
        h: "Where to stay in Nubra and Turtuk",
        list: [
          "Hunder: camps and hotels near the sand dunes, the most popular base in Nubra.",
          "Diskit: hotels and guesthouses near the monastery, convenient for the market.",
          "Turtuk: homestays and a few guesthouses and camps, simple and family-run.",
          "Panamik: a few guesthouses near the hot springs, quieter.",
        ],
      },
      {
        h: "Driving from Nubra to Turtuk",
        p: [
          "From Hunder, the road follows the Shyok river west through villages like Bogdang, with the river on one side and the mountains rising sharply on the other. It is a paved, scenic road of about 90 km, taking about 2.5 hours. There are few places to eat; carry water and snacks. In summer, the river can be high and fast, and there are some short stretches of road damage after landslides.",
        ],
      },
    ],
  },
  "hanle-and-tso-moriri-itinerary": {
    sections: [
      {
        h: "Leh to Tso Moriri via Upshi and Chumathang",
        p: [
          "The direct route from Leh to Tso Moriri follows the Indus upstream from Leh past Thiksey and Upshi, then into the narrow Indus gorge to Chumathang, where hot springs bubble up by the river. Beyond Mahe bridge, a side road climbs to Sumdo and the Tso Moriri plateau, and finally to Korzok on the lake. The drive is about 220 km and takes 6 to 7 hours. An alternative via Tso Kar and the Polokongka La area passes a smaller salt lake, often with kiang grazing nearby.",
        ],
      },
      {
        h: "Changpa nomads and wildlife",
        p: [
          "The Changthang plateau around Hanle and Tso Moriri is home to the Changpa, nomadic herders who move with their flocks of goats, sheep and yaks between summer and winter pastures. Their pashmina goats produce the fine wool used for pashmina shawls. You may see their tents on the plains in summer; ask before approaching. The region's wildlife includes the kiang (Tibetan wild ass), marmots, red foxes, black-necked cranes and bar-headed geese, and in winter, the occasional snow leopard and wolves.",
        ],
      },
      {
        h: "Hanle monastery",
        p: [
          "Hanle Gompa, built in the 17th century under the patronage of King Sengge Namgyal, belongs to the Drukpa lineage and sits on a hilltop above the village with a view over the valley and the observatory ridge. A small community of monks lives there. The monastery is a good place to see sunset over the plains before the night sky comes out.",
        ],
      },
      {
        h: "Food and facilities on this route",
        p: [
          "Hanle and Korzok have no restaurants in the usual sense; homestays and camps provide all meals, typically dal, rice, vegetables, roti, thukpa and butter tea. Fuel is available in Leh and at a few points like Karu and Upshi; there are no fuel pumps around Hanle or Tso Moriri, so carry enough. Mobile signal is limited or absent. Carry cash, a power bank and basic medicines.",
        ],
      },
    ],
  },
  "srinagar-leh-manali-road-trip-itinerary": {
    sections: [
      {
        h: "Vehicles and permits across three regions",
        p: [
          "The circuit crosses three administrations: Jammu and Kashmir, Ladakh and Himachal Pradesh. Each has its own taxi unions and rules. Kashmir taxis can usually take you to Leh, but local sightseeing in Ladakh (Nubra, Pangong) is often required in Ladakh-registered taxis, so many trips change vehicle in Leh. For the Leh to Manali leg, a Ladakh or Himachal taxi takes you through. Ask your agent to plan the vehicle changes in advance.",
          "For Ladakh's protected areas, Indian travellers register and pay the environment fee; foreigners need a Protected Area Permit. Rohtang Pass needs a permit, but with the Atal Tunnel you do not need to cross Rohtang.",
        ],
      },
      {
        h: "Leh itself: what to do on the rest days",
        list: [
          "Shanti Stupa at sunset for the view of the valley.",
          "Leh Palace and the old town lanes.",
          "Thiksey, Shey and Hemis monasteries in the Indus valley.",
          "The Hall of Fame and the Sangam on a Sham valley day.",
          "Main Bazaar for pashmina, apricots and Ladakhi crafts.",
        ],
      },
      {
        h: "Extending the trip",
        list: [
          "Add Tso Moriri: two extra days from Leh.",
          "Add Zanskar: via Kargil, Rangdum and Padum, three to four extra days.",
          "Add Turtuk: one extra night in Nubra.",
          "Add Spiti: from Manali via Kunzum La, a separate loop of five or more days.",
        ],
      },
    ],
  },
  "ladakh-9-nights-10-days-itinerary": {
    sections: [
      {
        h: "Packing for 10 days in Ladakh",
        list: [
          "Layers: thermal base, fleece, down jacket, windproof shell.",
          "Warm cap, gloves, sunglasses and a sun hat; the sun is strong at altitude.",
          "Sunscreen and lip balm with high SPF.",
          "Comfortable walking shoes; boots if you plan short treks.",
          "A refillable water bottle and electrolytes.",
          "Altitude medicines prescribed by your doctor, and a basic first aid kit.",
          "Power bank, cash, ID copies and permit printouts.",
        ],
      },
      {
        h: "Taxis and union rules in Ladakh",
        p: [
          "In Ladakh, sightseeing trips from Leh are usually done in Ladakh-registered taxis under the local taxi union, with fixed rates for each route. Taxis from outside Ladakh, including from Kashmir and Himachal, often cannot be used for local sightseeing. If you arrive by road, plan to switch to a Leh taxi for Nubra, Pangong, Hanle and Tso Moriri. A single taxi for the whole 10 day plan, with the same driver, is the easiest arrangement.",
        ],
      },
    ],
  },
  "where-to-stay-in-gurez-valley": {
    sections: [
      {
        h: "What to do in Gurez from your stay",
        list: [
          "Habba Khatoon peak, the pyramid-shaped mountain above Dawar, and the spring named after the poet-queen.",
          "Walks along the Kishanganga river and the wooden villages around Dawar.",
          "Trout fishing in season, with local permits.",
          "A drive to Tulail valley and villages like Chakwali and Purana Tulail.",
          "Razdan Pass views on the way in and out.",
        ],
      },
    ],
  },
  "kashmir-tour-packages-from-siliguri": {
    sections: [
      {
        h: "Adding Vaishno Devi on the way",
        p: [
          "Travellers from Siliguri who take the train often add Vaishno Devi at Katra. The train reaches Katra or Jammu, you spend a night in Katra and do the yatra to the Bhawan (on foot, by pony, by palki, or by helicopter to Sanjichhat), and then take the Vande Bharat from Katra to Srinagar. This adds two nights to the trip but combines a pilgrimage with the Kashmir holiday. Register for the yatra through the shrine board's official site, and book the helicopter only through the official portal.",
          "If you fly, Vaishno Devi can still be added by flying to Jammu, driving or taking a train to Katra, and continuing to Srinagar by the Vande Bharat.",
        ],
      },
      {
        h: "Packing for Kashmir from North Bengal",
        p: [
          "If you live in Siliguri, you know the cold of Darjeeling, but Kashmir's winter is much colder. From December to February, Gulmarg falls well below zero and Srinagar's nights are below freezing; pack thermals, a down jacket, gloves, a woollen cap and waterproof boots. In spring and autumn, layers and a warm jacket for evenings are enough. In summer, light clothes and a fleece. Snow boots and long coats can be rented in Tangmarg for the Gulmarg day.",
        ],
      },
      {
        h: "Group travel from Siliguri",
        p: [
          "Many travellers from Siliguri go to Kashmir in family groups or with friends, often in the Puja holidays. For groups of 8 to 15, a tempo traveller in Kashmir is cheaper per head than several cars, but in Pahalgam and Sonamarg you still use local union taxis for sightseeing. Ask the agent for group rates on hotels and a fixed plan for lunches on long days. For groups with elderly members, ask for ground-floor rooms and a slower plan.",
        ],
      },
      {
        h: "Documents and practical tips",
        list: [
          "Carry a government photo ID for every adult; children need ID too for some check posts and the airport.",
          "Postpaid SIMs work in Kashmir; prepaid SIMs from West Bengal do not. Buy a local SIM in Srinagar if needed.",
          "Carry some cash for ponies, union taxis and shikaras.",
          "Keep a buffer before your flight back to Bagdogra, especially in winter.",
          "If you come by train, book the Vande Bharat from Katra to Srinagar early.",
        ],
      },
      {
        h: "Siliguri to Kashmir: cost factors",
        p: [
          "The total cost has three parts. The journey: flights from Bagdogra via Delhi or Kolkata, or trains from NJP, which vary sharply by season. The Kashmir package: hotels, houseboat, cab and sightseeing, which depends on the hotel level, the number of nights and the season. And local extras: Gondola tickets, union taxis, ponies, lunches and shopping. Compare live packages for your dates rather than old prices, and ask agents to quote with the same hotels and cab so the comparison is fair.",
        ],
      },
      {
        h: "Kashmir in the monsoon for North Bengal travellers",
        p: [
          "In July and August, North Bengal and Sikkim are deep in the monsoon, with landslides and heavy rain, while Kashmir sees much less rain and is green and pleasant. For travellers who have holidays in these months, Kashmir is a good choice, with the caveat that the Amarnath Yatra crowds the Pahalgam and Sonamarg roads. Plan around the Yatra by spending more time in Srinagar and Gulmarg.",
        ],
      },
    ],
  },
  "kashmir-tour-packages-from-japan": {
    sections: [
      {
        h: "Kashmir's gardens for Japanese visitors",
        p: [
          "Kashmir's Mughal gardens, laid out in the 17th century, are terraced gardens with water channels, fountains and old chinar trees, built for emperors who loved the valley. Visitors from Japan often find a kinship with Japanese garden traditions in the use of water and borrowed mountain views, though the style is Persian rather than Japanese. Nishat Bagh, Shalimar Bagh and Chashme Shahi are the three to see; in spring the tulip garden nearby adds a sea of colour.",
        ],
      },
      {
        h: "Adding Ladakh or Delhi and Agra",
        p: [
          "Many travellers from Japan combine Kashmir with Ladakh, for Buddhist monasteries and high lakes, by flying from Srinagar to Leh or driving over Zoji La in summer. Allow at least five days for Ladakh, including two to acclimatise in Leh. Others combine Kashmir with Delhi and Agra for the Taj Mahal, adding two to three days. A 12 to 14 day trip from Japan can include Kashmir, Ladakh and Delhi.",
        ],
      },
      {
        h: "Winter clothing for Kashmir",
        p: [
          "Kashmir's winter is colder than Tokyo's and closer to Hokkaido's in the mountains. In Gulmarg from December to February, temperatures fall well below zero at night and snow is deep. Bring thermals, a down jacket, gloves, a warm cap and waterproof boots. Snow boots and long coats can be rented in Tangmarg. In spring and autumn, layers with a warm jacket for the evenings are enough.",
        ],
      },
    ],
  },
};
