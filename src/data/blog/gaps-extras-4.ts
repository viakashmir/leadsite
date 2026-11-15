import type { BlogSection } from "./types";

// Fourth depth layer (2026-11-15): closes the remaining gap to the TDI page
// for each 2026-11-15 guide with sections that answer questions the base
// posts left open.

type Extra = { sections?: BlogSection[]; faqs?: { q: string; a: string }[] };

export const GAP_EXTRAS_4: Record<string, Extra> = {
  "kashmir-tour-packages-from-siliguri": {
    sections: [
      {
        h: "A 5 night plan with flights both ways",
        days: [
          "Bagdogra to Srinagar via Delhi. Evening shikara, houseboat night.",
          "Gulmarg day trip with the Gondola. Night in Srinagar.",
          "Sonamarg day trip. Night in Srinagar, or move to Pahalgam if you prefer two nights there.",
          "Drive to Pahalgam via Pampore and Awantipora. Night in Pahalgam.",
          "Aru and Betaab by union taxi. Night in Pahalgam.",
          "Back to Srinagar airport and fly to Bagdogra via Delhi.",
        ],
      },
      {
        h: "An 8 night plan by train with Vaishno Devi",
        days: [
          "Train from New Jalpaiguri towards Jammu or Katra.",
          "On the train.",
          "Arrive Katra. Rest, prepare for the yatra.",
          "Vaishno Devi yatra, night in Katra.",
          "Vande Bharat from Katra to Srinagar. Evening shikara, houseboat night.",
          "Gulmarg day trip.",
          "Drive to Pahalgam, night in Pahalgam.",
          "Pahalgam valleys, back to Srinagar.",
          "Fly from Srinagar to Bagdogra via Delhi, or start the train journey home from Katra.",
        ],
      },
      {
        h: "Srinagar first or Pahalgam first?",
        p: [
          "If you arrive by air in the afternoon, start in Srinagar: the airport is on the city's west side and a houseboat evening is the easiest first night. If you arrive by Vande Bharat at Srinagar station in Nowgam, on the south side, Pahalgam is closer and some travellers go there first. On the way back, the last night is best in Srinagar so you are close to the airport, because Pahalgam to the airport is about three hours plus the security queue.",
        ],
      },
      {
        h: "Travelling with children from Siliguri",
        p: [
          "For children, the long journey matters more than the destination. Flights via Delhi with a two to three hour gap are manageable; a two-day train journey needs snacks, games and a lower berth for an adult and child. In Kashmir, keep three nights in Srinagar with day trips, so children do not change hotels every day. A shikara, the Gondola to Kongdori and pony rides in Pahalgam are the favourites. Carry children's medicines, warm clothes in any season, and a light lunch for drive days.",
        ],
      },
      {
        h: "Travelling with senior citizens from Siliguri",
        p: [
          "For older travellers, flights are much easier than two days of train travel. Ask for wheelchair assistance at Bagdogra, Delhi and Srinagar airports when you book the flights; it is free. In Kashmir, choose a comfortable car such as an Innova Crysta, ground-floor or lift-access rooms, and avoid the steep climbs. Gondola Phase 1 to Kongdori is usually enough; Apharwat is high and cold. Betaab Valley is the easiest of Pahalgam's valleys. Keep days short and evenings free.",
        ],
      },
      {
        h: "Honeymoon from Siliguri",
        p: [
          "Couples from North Bengal often choose Kashmir for a honeymoon in the winter wedding season. A five or six night trip with a luxury houseboat night, a night in Gulmarg for the snow, and two riverside nights in Pahalgam is the classic plan. Fly both ways to save time. Ask for a honeymoon setup, a private shikara and a candlelight dinner, and check whether they are included. Avoid the Christmas to New Year week unless you book very early.",
        ],
      },
      {
        h: "When to book from Siliguri",
        list: [
          "Puja and Diwali trips: book flights and hotels two to three months ahead.",
          "Christmas and New Year: book three months ahead; Gulmarg fills first.",
          "Summer holidays: book six to eight weeks ahead.",
          "Off-peak months: two to four weeks is usually enough.",
          "Trains: book as soon as the booking window opens for festival dates.",
        ],
      },
    ],
    faqs: [
      { q: "Can I combine Vaishno Devi with a Kashmir trip from Siliguri?", a: "Yes. Take the train to Katra, do the yatra, then the Vande Bharat to Srinagar. Add two nights for Vaishno Devi." },
      { q: "Is Kashmir good to visit during Durga Puja?", a: "Yes. It is autumn in Kashmir, with clear skies and pleasant days, but it is a busy week for Bengali travellers, so book early." },
    ],
  },
  "kashmir-tour-packages-from-japan": {
    sections: [
      {
        h: "Buddhist and historic sites in Kashmir",
        p: [
          "Kashmir was once a great centre of Buddhist learning, long before Islam came to the valley, and Kashmiri monks carried Buddhism to Central Asia and beyond. Ancient sites such as Harwan near Srinagar, with remains of a Buddhist monastery and terracotta tiles, and Parihaspora near Pattan are reminders of that history, though little remains above ground. For living Buddhist culture, Ladakh, a short flight or two-day drive away, has active monasteries such as Thiksey, Hemis and Diskit.",
          "In the valley, the stone temples of Martand (Sun Temple) and Awantipora show Kashmir's Hindu architecture of the 8th and 9th centuries, and the wooden mosques and shrines of Srinagar, such as Khanqah-e-Moula, show its Islamic period.",
        ],
      },
      {
        h: "Photography in Kashmir",
        p: [
          "Kashmir is a favourite with photographers: the light on Dal Lake at dawn, the floating vegetable market, the chinar colours in autumn, snow in Gulmarg and the high valleys. Ask before photographing people, especially women, and do not photograph army posts, convoys or security installations. Drones need permission and are restricted in most of the valley. The best light is in the early morning and late afternoon; in summer, the midday light is harsh.",
        ],
      },
      {
        h: "Travelling as a solo or small group from Japan",
        p: [
          "Solo travellers and small groups from Japan usually book a private car and driver for the whole trip, which is safer and easier than local transport. English-speaking drivers and guides are available in Srinagar; ask for one when you book. Women travelling solo find Srinagar's houseboats and hotels welcoming, but dress modestly and avoid walking alone late at night in quiet areas, as you would anywhere.",
        ],
      },
    ],
    faqs: [
      { q: "Can I combine Kashmir and Ladakh from Japan?", a: "Yes. Fly from Srinagar to Leh, or drive over Zoji La in summer. Allow at least five days for Ladakh, including two to acclimatise." },
    ],
  },
  "where-to-stay-at-pangong-lake": {
    sections: [
      {
        h: "Deluxe camps versus basic camps",
        p: [
          "Deluxe camps at Pangong have tents on raised wooden platforms, double beds, attached bathrooms with running water, and sometimes electric blankets or heaters during generator hours. Basic camps have simpler tents, beds with heavy blankets, and attached or shared toilets. The view is similar; the difference is comfort at night. If you are travelling with older parents or children, choose a deluxe camp or cottage; if you are a hardy backpacker, a basic camp or homestay is fine.",
        ],
      },
      {
        h: "Pangong in May and October",
        p: [
          "In May, parts of the lake may still be frozen, and the camps are only starting to open. Nights are well below zero. In October, camps close one by one, nights are very cold, and the light on the lake is beautiful and clear. In both months, homestays in Spangmik, Man and Merak are more reliable than camps; confirm before you set off from Leh.",
        ],
      },
      {
        h: "Planning the Pangong night in your itinerary",
        list: [
          "Stay at Pangong only after at least two nights in Leh.",
          "Leave Leh by 7 or 8 am to cross Chang La in the morning, when the road is firm.",
          "Reach the lake by early afternoon to settle in before the evening cold.",
          "Watch sunset and sunrise from the shore.",
          "Leave by 8 am the next morning for Leh, Nubra or Hanle.",
        ],
      },
    ],
    faqs: [
      { q: "Which is better at Pangong, a camp or a homestay?", a: "Camps are closer to the shore with the classic view; homestays in Man and Merak are quieter, warmer and support local families." },
    ],
  },
  "kashmiri-food-by-season": {
    sections: [
      {
        h: "Food during Chillai Kalan",
        p: [
          "Chillai Kalan, the 40 coldest days of the Kashmiri winter from 21 December to 31 January, shapes the winter diet. Households cook heavier meals, eat more meat and dried vegetables, and drink noon chai and kahwa through the day to stay warm. Harissa shops are busiest. Kangris, earthen pots of hot coals in wicker baskets, are carried under the pheran. If you visit then, the old city's dawn harissa and the evening bakery queues are the best way to share in it.",
        ],
      },
      {
        h: "Fish from the lakes and rivers",
        p: [
          "Kashmir's lakes and rivers have long supplied fish, eaten more in winter. Gaad (fish) is cooked with radish (gaad muj) or lotus stem (gaad nadur), and dried and smoked fish (hogaad) is eaten in winter stews. Trout from the streams of Pahalgam, Kokernag and Sonamarg is served in some hotels and restaurants. In summer, fresh fish is less common in homes.",
        ],
      },
    ],
  },
  "meals-on-a-kashmir-tour": {
    sections: [
      {
        h: "Breakfast on a Kashmir tour",
        p: [
          "Breakfast is usually the best-value meal on a package, and it is included on both CP and MAP. Hotel buffets offer bread and butter, eggs to order, parathas, poha or upma, cornflakes, fruit, tea and coffee; some add Kashmiri girda or lavasa from the bakery. Houseboats serve a cooked breakfast at the table. Eat well before long drive days; you may not reach a good lunch stop until early afternoon.",
        ],
      },
      {
        h: "Tipping cooks, staff and houseboat families",
        p: [
          "Tipping is not compulsory, but it is common to tip the houseboat staff and hotel staff who served your meals, especially if they cooked special dishes. Leave the tip with the manager or houseboat owner at the end of the stay, to be shared. Drivers are usually tipped separately at the end of the trip.",
        ],
      },
    ],
  },
  "srinagar-leh-manali-road-trip-itinerary": {
    sections: [
      {
        h: "Daily driving times at a glance",
        list: [
          "Srinagar to Sonamarg: about 2.5 hours.",
          "Sonamarg to Kargil via Zoji La and Drass: about 4 to 5 hours.",
          "Kargil to Leh: about 7 to 8 hours with stops.",
          "Leh to Nubra: about 5 to 6 hours.",
          "Nubra to Pangong via Shyok: about 6 to 7 hours.",
          "Pangong to Leh: about 5 to 6 hours.",
          "Leh to Jispa: about 10 to 12 hours; to Sarchu about 8 to 9 hours.",
          "Jispa to Manali via the Atal Tunnel: about 3 to 4 hours.",
        ],
      },
      {
        h: "Fuel, food and connectivity on the route",
        p: [
          "Fuel is available in Srinagar, Sonamarg area, Kargil, Leh, Diskit, Karu and Upshi, and on the Manali side at Tandi, Keylong and Manali. Between Karu and Tandi, about 365 km, there is no regular fuel pump, so fill up fully before leaving Leh. Food is available in towns and at dhabas and tent cafes at Pang and Sarchu in season. Mobile signal is good in towns and absent on long stretches; postpaid SIMs work best.",
        ],
      },
    ],
  },
  "hanle-and-tso-moriri-itinerary": {
    sections: [
      {
        h: "Photography of the night sky at Hanle",
        p: [
          "For Milky Way photography, use a tripod, a wide-angle lens at its widest aperture, manual focus set to infinity, and exposures of 15 to 25 seconds at a high ISO. The core of the Milky Way is best visible in summer and early autumn. Keep your phone screen dim and your headlamp on red. Batteries drain fast in the cold; keep spares in an inner pocket.",
        ],
      },
    ],
  },
  "turtuk-ladakh-itinerary": {
    sections: [
      {
        h: "Respecting Turtuk's community",
        list: [
          "Dress modestly: cover shoulders and knees, especially in the village.",
          "Ask before photographing people, especially women and children.",
          "Do not enter fields or courtyards without permission.",
          "Buy apricots and crafts from families directly.",
          "Keep noise low in the evenings and carry your waste out.",
        ],
      },
    ],
  },
  "where-to-stay-in-leh": {
    sections: [
      {
        h: "Leh stays for bikers and groups",
        p: [
          "Bikers usually stay in Changspa or near Fort Road, close to the bike rental shops and mechanics, with parking for bikes in the guesthouse courtyard. Groups do better in mid-sized hotels in Skara, Sankar or on the airport road, which have more rooms and parking for a tempo traveller. Ask whether the hotel has secure parking and space for luggage between trips.",
        ],
      },
    ],
  },
  "where-to-stay-in-gurez-valley": {
    sections: [
      {
        h: "Food in Gurez stays",
        p: [
          "Meals in Gurez are simple and home-cooked: rice, dal, local vegetables, chicken or mutton, and roti, with tea. In homestays, you may get traditional Shina dishes and fresh trout from the Kishanganga in season. There are a few small dhabas in Dawar. Carry snacks for drives, and tell your host about any diet needs in advance, because fresh supplies come over the Razdan Pass.",
        ],
      },
    ],
  },
  "kashmir-vs-himachal-for-honeymoon": {
    sections: [
      {
        h: "The verdict for most couples",
        p: [
          "If you can fly and want the most romantic and distinctive trip, choose Kashmir: a houseboat night, the Gondola, Gulmarg's snow and Pahalgam's river make it unlike anywhere else in India. If you live in North India, prefer road travel, want more budget choice and cosy cottages, or are travelling on a long weekend, choose Himachal, and aim for the quieter villages rather than the busiest towns. Whichever you pick, travel outside the peak weeks if you can, and keep one free day for weather.",
        ],
      },
    ],
  },
  "gulmarg-budget-trip": {
    sections: [
      {
        h: "Budget tips for groups and families",
        p: [
          "For groups of four to six, a private Innova from Srinagar to Gulmarg and back often costs about the same per head as shared transport, and saves time. Rent only the snow gear you need. Children under a certain age travel free or at a reduced fare on the Gondola; check the official portal. Share a pony for younger children. Carry a thermos of tea and snacks to avoid buying at mountain prices.",
        ],
      },
    ],
  },
  "kashmir-6-day-itinerary": {
    sections: [
      {
        h: "Day trips you can swap in",
        list: [
          "Doodhpathri instead of Sonamarg: about 2 hours from Srinagar, green meadows and a stream, quieter.",
          "Yusmarg instead of Sonamarg: about 2 hours, pine forests and meadows, very quiet.",
          "Gurez instead of Sonamarg: needs two nights; not a day trip.",
          "Sinthan Top: a high pass on the Kokernag side, with snow into early summer.",
        ],
      },
    ],
  },
  "kashmir-in-autumn": {
    sections: [
      {
        h: "Autumn on a houseboat",
        p: [
          "Autumn evenings on a houseboat are calm and cool. The lake is quiet, the shikaras slow, and mornings bring mist over the water. Ask for a heater in November and a blanket for the deck in the evening. Nigeen Lake is particularly beautiful in autumn, with chinars and willows on its shore.",
        ],
      },
    ],
  },
  "best-time-for-honeymoon-in-kashmir": {
    sections: [
      {
        h: "Booking tips for honeymoon months",
        p: [
          "For December to February and May to June, book the houseboat, Gulmarg hotel and flights at least six to eight weeks ahead. Ask for a honeymoon setup and a room with a view in writing. For quieter months, two to four weeks is usually enough, and rates are lower.",
        ],
      },
    ],
  },
  "drone-rules-in-kashmir": {
    sections: [
      {
        h: "Penalties and seizure",
        p: [
          "Flying without registration or permission can lead to fines under the Drone Rules and, in Jammu and Kashmir, to the drone being seized and a case under local orders. Security forces take unauthorised drones seriously because of past incidents. Do not fly first and explain later.",
        ],
      },
    ],
  },
  "hot-air-balloon-ride-in-srinagar": {
    sections: [
      {
        h: "Booking and tickets",
        p: [
          "Tickets for the tethered ride are usually sold at the launch site, per person, for each ride. Ask the operator about group bookings and private rides. Your agent may know whether the ride is running and can include it in your Srinagar day.",
        ],
      },
    ],
  },
  "how-to-choose-a-kashmir-travel-agent": {
    sections: [
      {
        h: "When to book with an agent",
        p: [
          "For the peak weeks, book with an agent six to eight weeks ahead, because good houseboats and Gulmarg hotels sell out. For quieter months, two to four weeks is enough. Last-minute bookings are possible, but you lose the choice of hotels.",
        ],
      },
    ],
  },
  "kashmir-2-nights-3-days-itinerary": {
    sections: [
      {
        h: "Short trip by train",
        p: [
          "With the Vande Bharat from Katra, a 3 day Srinagar trip by train is possible: arrive at Srinagar station by midday on day 1, Gulmarg on day 2, and leave on the afternoon train on day 3. Book seats early.",
        ],
      },
    ],
  },
  "sarchu-travel-guide": {
    sections: [
      {
        h: "What to carry for a night at Sarchu",
        list: [
          "A down jacket, thermals, a woollen cap and gloves for the night.",
          "A refillable water bottle and electrolytes.",
          "Altitude medicines from your doctor and a basic first aid kit.",
          "A headlamp and a power bank.",
          "Snacks for the drive.",
        ],
      },
    ],
  },
  "rangdum-travel-guide": {
    sections: [
      {
        h: "Responsible travel in the Suru and Rangdum valleys",
        p: [
          "The villages of the Suru and Rangdum valleys see few visitors. Carry your waste out, dress modestly, ask before photographing people and the monastery interiors, and buy from local shops and guesthouses.",
        ],
      },
    ],
  },
  "ladakh-9-nights-10-days-itinerary": {
    sections: [
      {
        h: "Changing the plan if someone feels unwell",
        p: [
          "If anyone in the group gets altitude sickness, the plan must change. Stay in Leh an extra day, skip the highest nights (Hanle and Tso Moriri), and choose day trips that return to Leh. Go down to a lower altitude if symptoms worsen.",
        ],
      },
    ],
  },
};
