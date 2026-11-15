import type { BlogSection } from "./types";

// Fifth depth layer (2026-11-15): mostly the follow-up questions travellers
// ask on each topic, answered in full.

type Extra = { sections?: BlogSection[]; faqs?: { q: string; a: string }[] };

export const GAP_EXTRAS_5: Record<string, Extra> = {
  "kashmir-tour-packages-from-siliguri": {
    sections: [
      {
        h: "Comparing a Kashmir package with doing it yourself",
        p: [
          "Some travellers from Siliguri book flights, hotels and a cab separately. This can save money if you are flexible and know what you want, and it lets you choose every hotel yourself. The trade-off is time: you call several hotels and cab owners, check each one, and handle changes yourself if a road closes. A package from a Srinagar or Kashmir-focused agent costs a little more in some cases but includes the cab for every transfer and sightseeing day, the hotels held for you in busy weeks, and a contact who changes the plan on the ground.",
          "For a first trip, most families from North Bengal find a package easier. For a second trip, or for couples who travel a lot, booking parts separately can work well. Either way, compare like with like: the same hotels, the same cab model and the same number of nights.",
        ],
      },
      {
        h: "Weather difference between Siliguri and Kashmir",
        p: [
          "Siliguri is hot and humid for much of the year, and even its winter is mild. Kashmir's seasons are sharper. In April, Srinagar is around 18 to 20°C by day, similar to a pleasant Darjeeling day, but nights are colder. In May and June, Srinagar is warm and dry, while Pahalgam and Gulmarg stay cool. From November to February, Srinagar's nights fall below freezing, and Gulmarg is far colder than anything in the eastern hills except North Sikkim. Pack for colder weather than you expect.",
        ],
      },
    ],
    faqs: [
      { q: "Which is cheaper from Siliguri, flight or train to Kashmir?", a: "Trains are usually cheaper on ticket price, but they take two days or more each way, which uses holiday days. Flights via Delhi take about a day and cost more in festival weeks." },
      { q: "Can I fly from Bagdogra to Srinagar via Kolkata?", a: "Yes, on days when Kolkata has a Srinagar flight. Delhi has more Srinagar connections through the day, so it is usually the easier choice." },
      { q: "How early should I leave Darjeeling or Sikkim for a Bagdogra flight?", a: "Stay a night in Siliguri before an early flight. The drive down can take two to four hours and is slowed by fog or landslides." },
      { q: "Do I need a permit for Kashmir from West Bengal?", a: "No. Indian citizens need only a valid photo ID for the main tourist areas. Border areas like Gurez need registration, which your agent arranges." },
      { q: "Is it safe to travel to Kashmir with family from Siliguri?", a: "Many families from North Bengal visit Kashmir every year. The main tourist areas are well policed. Check the news before travel and follow local guidance." },
      { q: "What should a Kashmir package from Siliguri cost?", a: "It depends on the season, hotel level and nights. Compare live packages for your dates, with flights or trains from Siliguri priced separately." },
      { q: "Should I book flights or the Kashmir package first?", a: "Hold the package dates first with a refundable or part payment, then book flights. Confirm the package fully once the flights are fixed." },
    ],
  },
  "meals-on-a-kashmir-tour": {
    faqs: [
      { q: "What is the difference between CP and MAP in Kashmir hotels?", a: "CP includes breakfast only. MAP includes breakfast and dinner. Most Kashmir packages use MAP, with lunch paid by you on the road." },
      { q: "Should I choose MAP or CP on a Kashmir trip?", a: "MAP is usually better value, because dinner at the hotel saves a trip out in the evening and hill station restaurants are limited. CP suits travellers who want to eat out in Srinagar." },
      { q: "Do houseboats serve Kashmiri food?", a: "Yes, if you ask. Houseboat cooks make rogan josh, yakhni, dum aloo, haak and nadru yakhni on request, usually with a day's notice." },
      { q: "Where should I eat lunch on the Gulmarg day trip?", a: "In Gulmarg near the meadow or in Tangmarg on the way down, where prices are lower. Carry snacks for the Gondola queue." },
      { q: "Can hotels in Kashmir pack lunch for early starts?", a: "Most hotels can prepare a packed lunch or breakfast box if you ask the evening before." },
      { q: "Is food included in the Gulmarg Gondola ticket?", a: "No. Cafes at Kongdori and Apharwat sell tea, kahwa and snacks separately, at higher prices." },
      { q: "Are meals included on a Kashmir honeymoon package?", a: "Breakfast and dinner usually are. A candlelight dinner or special setup may be included or extra; ask for it in writing." },
    ],
  },
  "kashmiri-food-by-season": {
    faqs: [
      { q: "What is the best season to try Kashmiri food?", a: "Winter, for harissa, dried vegetable stews and the bakery culture. But wazwan, kahwa and noon chai are available all year." },
      { q: "What is Chillai Kalan food?", a: "The heavier winter food of the 40 coldest days from 21 December to 31 January: harissa, meat dishes, dried vegetables, fish, and endless cups of noon chai and kahwa." },
      { q: "When are cherries available in Kashmir?", a: "From late May to June. Roadside stalls on the Gulmarg and Pahalgam roads sell them fresh." },
      { q: "What should I eat in Kashmir in winter?", a: "Harissa at dawn, nadur monje fritters, dried vegetable and fish stews, bakery breads with noon chai, and kahwa after a cold day." },
      { q: "What is nadru?", a: "Lotus stem, harvested from Dal Lake and other lakes, cooked as nadru yakhni in yoghurt, as monje fritters, or with fish." },
      { q: "Is Kashmiri food spicy?", a: "Kashmiri red chilli gives colour more than heat, so many dishes are rich but not very hot. Some, like marchwangan korma, are fiery." },
    ],
  },
  "kashmir-vs-himachal-for-honeymoon": {
    faqs: [
      { q: "Is a houseboat stay worth it on a Kashmir honeymoon?", a: "Yes, for one night at least. It is the experience most couples remember: a shikara at sunset, a home-cooked dinner and the quiet of the lake." },
      { q: "Which is better for a budget honeymoon, Kashmir or Himachal?", a: "Himachal usually, because it can be reached by road and has more budget stays. Kashmir in March, October and November can also be good value." },
      { q: "Which is better for adventure, Kashmir or Himachal?", a: "Himachal has more adventure sports operators in Solang, Bir and Kullu. Kashmir has Gulmarg skiing, the Gondola, rafting in Pahalgam and pony treks." },
      { q: "Which has better hotels for couples?", a: "Kashmir has houseboats, palace and lakeside hotels. Himachal has more boutique cottages and homestays in villages. Both have luxury options." },
      { q: "Is Shimla or Manali better than Kashmir for a honeymoon?", a: "Shimla and Manali are easier to reach by road from North India and have more cafes. Kashmir has more distinctive experiences and more reliable snow." },
    ],
  },
  "kashmir-6-day-itinerary": {
    faqs: [
      { q: "What is the cost of a 6 day Kashmir trip?", a: "It depends on the season, hotel level and cab. Compare live 5 nights 6 days packages for your dates, and check what is excluded." },
      { q: "Is a 6 day Kashmir trip good for a honeymoon?", a: "Yes. Add a luxury houseboat night, a Gulmarg night in winter and two riverside nights in Pahalgam." },
      { q: "Can I add Vaishno Devi to a 6 day Kashmir trip?", a: "Add one or two days at Katra before the Vande Bharat to Srinagar, making it a 7 or 8 day trip." },
      { q: "How many hotel changes are there on a 6 day Kashmir trip?", a: "Two in the simple version: Srinagar and Pahalgam. Three if you add a night in Gulmarg." },
    ],
  },
  "ladakh-9-nights-10-days-itinerary": {
    faqs: [
      { q: "Can I do the 10 day Ladakh trip starting from Srinagar?", a: "Yes. Drive from Srinagar to Leh over two days via Kargil, which also helps acclimatisation, and fly out of Leh at the end." },
      { q: "Do I need a 4x4 for this Ladakh itinerary?", a: "Not usually. Leh taxis such as Innovas and Xylos handle these roads. A 4x4 helps on rough stretches like the Pangong to Hanle road." },
      { q: "Is the Shyok road from Nubra to Pangong open?", a: "It is usually open in summer, but can close for repairs or water crossings. Ask your driver the evening before." },
    ],
  },
  "hanle-and-tso-moriri-itinerary": {
    faqs: [
      { q: "Is there mobile network in Hanle?", a: "Signal is limited or absent. Plan to be offline, carry cash and tell family your plan." },
      { q: "What is the Hanle Dark Sky Reserve?", a: "An area around Hanle declared in 2022 to protect the night sky from light pollution, with trained local astronomy guides and homestays offering stargazing." },
      { q: "Can I see wildlife near Tso Moriri?", a: "Yes: kiang (wild ass), marmots, bar-headed geese and black-necked cranes in summer, and herds of the Changpa nomads' goats and yaks." },
    ],
  },
  "turtuk-ladakh-itinerary": {
    faqs: [
      { q: "What is the best time to visit Turtuk?", a: "June to September. July and August bring the apricot harvest; September has clear skies and fewer visitors." },
      { q: "Can I go to Thang from Turtuk?", a: "Usually, yes. Thang is the last village before the Line of Control, a few kilometres beyond Turtuk. Access depends on the army." },
      { q: "Is Turtuk lower than Leh?", a: "Yes. Turtuk is at about 2,900 m, lower than Leh at about 3,500 m, so it is easier on the body." },
      { q: "What should I eat in Turtuk?", a: "Balti dishes like kisir buckwheat pancakes, mamtu dumplings, apricot soup and butter tea, best in a homestay." },
    ],
  },
  "srinagar-leh-manali-road-trip-itinerary": {
    faqs: [
      { q: "Can I do the Srinagar Leh Manali trip by bike?", a: "Yes, it is one of India's classic bike rides. Ride Srinagar to Manali for gradual acclimatisation, carry spares, and check local rules on rental bikes in Ladakh." },
      { q: "Where can I break the journey between Leh and Manali?", a: "At Jispa or Keylong in Lahaul, or at Sarchu. Jispa is lower and more comfortable." },
      { q: "Is there fuel between Leh and Manali?", a: "There is no regular fuel pump between Karu near Leh and Tandi near Keylong, about 365 km. Fill up fully in Leh." },
    ],
  },
  "where-to-stay-in-leh": {
    faqs: [
      { q: "Is Changspa a good area to stay in Leh?", a: "Yes, for cafes, shops and bike rentals within walking distance. Choose a room away from the road for quiet." },
      { q: "Where should families stay in Leh?", a: "In quieter areas like Skara, Sankar or the airport road, in hotels with heating, lifts or ground-floor rooms and parking." },
      { q: "Do I need heating in Leh in summer?", a: "Nights are cool even in summer, and from September they are cold. A room with a heater or central heating is worth it." },
      { q: "Can I stay in Leh in winter?", a: "Yes, in hotels that stay open with heating. Many close from November to March; confirm your hotel is open." },
    ],
  },
  "where-to-stay-at-pangong-lake": {
    faqs: [
      { q: "Is there network at Pangong Lake?", a: "Signal is limited and works on some postpaid networks at Spangmik and Lukung. Expect to be largely offline." },
      { q: "Is Pangong worth a night stay?", a: "Yes, after acclimatising in Leh. The lake's colours at sunset and sunrise are the reason to stay." },
      { q: "Can I stay at Pangong in winter?", a: "A few homestays open for winter visitors to the frozen lake. Camps are closed. Go only with a local operator." },
    ],
  },
  "sarchu-travel-guide": {
    faqs: [
      { q: "Is there network at Sarchu?", a: "Mobile signal is weak or absent on most networks. Plan to be offline for the night." },
      { q: "What is the temperature at Sarchu at night?", a: "Near or below zero even in July and August, and colder in June and September." },
      { q: "How far is Sarchu from Jispa?", a: "About 85 to 90 km, roughly 3 hours over Baralacha La." },
    ],
  },
  "rangdum-travel-guide": {
    faqs: [
      { q: "How far is Rangdum from Padum?", a: "About 100 km over Pensi La, roughly 4 to 5 hours depending on road conditions." },
      { q: "Can I visit Rangdum from Leh?", a: "Yes, via Kargil. Drive Leh to Kargil (about 220 km), stay a night, then continue to Rangdum." },
    ],
  },
  "where-to-stay-in-gurez-valley": {
    faqs: [
      { q: "Are there camps in Gurez?", a: "Yes, seasonal camps along the Kishanganga river, mainly in summer from June to August." },
      { q: "Can I find a homestay in Gurez on arrival?", a: "Often, outside June to August. In peak months book ahead, because rooms are limited." },
      { q: "Do Gurez stays have hot water?", a: "Some have geysers or heat water on request; others are basic. Ask before booking, especially in May, September and October." },
    ],
  },
  "kashmir-tour-packages-from-japan": {
    faqs: [
      { q: "Is English spoken in Kashmir?", a: "Yes. Hotel staff, drivers, guides and shopkeepers in Srinagar, Gulmarg and Pahalgam usually speak English." },
      { q: "Is Japanese food available in Kashmir?", a: "No. Kashmiri rice dishes, mild curries, breads and kahwa are good options; ask hotels for less spicy food." },
      { q: "What should I wear in Kashmir as a visitor from Japan?", a: "Modest clothing that covers shoulders and knees, especially at shrines, and warm layers for the mountains in any season." },
    ],
  },
  "gulmarg-budget-trip": {
    faqs: [
      { q: "How can I go from Srinagar to Gulmarg cheaply?", a: "By shared cab from Srinagar to Tangmarg and a shared vehicle up to Gulmarg, or by tourist bus in season. A shared private cab for four can cost about the same per head." },
      { q: "Can I do Gulmarg in one day from Srinagar?", a: "Yes. Leave by 8 am, take the Gondola in the morning, walk the meadow, and be back in Srinagar by evening." },
      { q: "Is a Gulmarg ski lesson expensive?", a: "Short lessons from certified instructors and fixed-length IISM courses are the best value for beginners. Ask the rate before booking." },
    ],
  },
  "kashmir-in-autumn": {
    faqs: [
      { q: "What should I wear in Kashmir in October?", a: "Layers for the day and a warm jacket for mornings and evenings, when it drops to around 5 to 8°C." },
      { q: "Is Gulmarg worth visiting in autumn?", a: "Yes. The meadow turns golden, the Gondola runs, and the first snow can reach Apharwat in November." },
      { q: "Can I see the apple harvest in Kashmir?", a: "Yes, in September and October in Shopian, Sopore and along the Pahalgam road." },
    ],
  },
  "best-time-for-honeymoon-in-kashmir": {
    faqs: [
      { q: "Is March a good month for a Kashmir honeymoon?", a: "Yes. Snow remains in Gulmarg, almond blossom appears in Srinagar, crowds are low and prices are lower." },
      { q: "Is May good for a Kashmir honeymoon?", a: "Yes. Warm days, green meadows and open roads make it one of the best months, though it is busy." },
    ],
  },
  "drone-rules-in-kashmir": {
    faqs: [
      { q: "Can I fly a drone in Gulmarg?", a: "Only with written permission from the Baramulla district administration and in line with Digital Sky zones. Do not fly near the Gondola or ski areas." },
    ],
  },
  "kashmir-2-nights-3-days-itinerary": {
    faqs: [
      { q: "Can I do a 3 day Kashmir trip by train?", a: "Yes. Take the Vande Bharat from Katra to Srinagar on day 1, Gulmarg on day 2, and the afternoon train back on day 3." },
    ],
  },
  "how-to-choose-a-kashmir-travel-agent": {
    faqs: [
      { q: "Is it safe to pay a Kashmir travel agent online?", a: "Yes, if you pay into the company's bank account or by card, receive a GST invoice, and have the itinerary and cancellation policy in writing." },
    ],
  },
};
