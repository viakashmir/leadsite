import type { BlogPost, BlogSection } from "./types";

// Spiti Valley month guides: February, May, August, September, October.
// Same fact rules as spiti-deep.ts: road windows are typical ranges (Kunzum
// and the Manali side about June to late October; Shimla route most of the
// year), temperatures are typical Kaza ranges, not forecasts. Ladarcha fair in
// Kaza in August in many years; Losar in February or March. No em dashes, no
// invented prices.

const ACCLIMATISE: BlogSection = {
  h: "Acclimatisation in any month",
  list: [
    "Kaza is at about 3,650 m and most sights are higher. Enter via Shimla and Kinnaur where possible, with nights at Kalpa or Sangla and Nako or Tabo.",
    "If you arrive from Manali over Kunzum, rest a full day in Kaza before visiting Kibber, Langza, Hikkim or Komic.",
    "Drink plenty of water, avoid alcohol for the first two days, and descend if symptoms of altitude sickness get worse.",
    "Carry a pulse oximeter and medicines prescribed by your doctor.",
  ],
};

const SHIMLA_ROUTE_DAYS = [
  "Shimla or Chandigarh to Narkanda and Rampur or Sarahan.",
  "Drive to Kalpa in Kinnaur and rest.",
  "Kalpa to Nako, past Khab and the Sutlej and Spiti confluence.",
  "Nako to Tabo via Gue. Tabo Monastery in the evening.",
  "Tabo to Kaza via Dhankar.",
  "Kaza local: Key Monastery, Kibber, Langza, Hikkim and Komic (as roads allow).",
  "Kaza to Nako or Kalpa on the way back.",
  "Kalpa to Shimla or Chandigarh.",
];

const CIRCUIT_DAYS = [
  "Shimla to Narkanda and Rampur or Sarahan.",
  "Drive to Kalpa or Sangla in Kinnaur.",
  "Kalpa to Nako.",
  "Nako to Tabo via Gue.",
  "Tabo to Kaza via Dhankar.",
  "Kaza local: Key Monastery, Kibber, Chicham bridge, Langza, Hikkim and Komic.",
  "Kaza to Chandratal over Kunzum Pass.",
  "Chandratal to Manali via Batal and the Atal Tunnel.",
];

type Month = {
  slug: string;
  month: string;
  title: string;
  description: string;
  intro: string;
  weather: string[];
  roads: string[];
  open: string[];
  days: string[];
  daysTitle: string;
  extra: BlogSection[];
  pack: string[];
  suits: string[];
  faqs: BlogPost["faqs"];
};

const monthPost = (m: Month): BlogPost => ({
  slug: m.slug,
  title: m.title,
  description: m.description,
  category: "Itineraries",
  destination: "himachal",
  city: "spiti-valley",
  date: "2026-11-03",
  intro: m.intro,
  sections: [
    { h: `Spiti Valley weather in ${m.month}`, list: m.weather },
    { h: `Roads to Spiti in ${m.month}`, list: m.roads },
    { h: `What is open and what is closed in ${m.month}`, list: m.open },
    { h: m.daysTitle, days: m.days },
    ...m.extra,
    ACCLIMATISE,
    { h: `What to pack for Spiti in ${m.month}`, list: m.pack },
    { h: `Who Spiti in ${m.month} suits`, list: m.suits },
  ],
  faqs: m.faqs,
});

export const SPITI_MONTHS: BlogPost[] = [
  monthPost({
    slug: "spiti-valley-in-february",
    month: "February",
    title: "Spiti Valley in February: Snow, Losar, Snow Leopards and Winter Roads",
    description:
      "Spiti Valley in February: Kaza temperatures, snow and road closures on the Shimla route, Losar festival, snow leopard season, homestays and a safe 8-day plan.",
    intro:
      "February is deep winter in Spiti. Kaza sits under snow, nights fall to minus 15 to minus 25°C, rivers freeze along their banks and villages are quiet. It is also one of the most rewarding months for prepared travellers: snow leopards come lower near Kibber, skies are crystal clear, and Losar, the Tibetan new year, often falls in February or March, bringing village celebrations. The only way in is the Shimla route through Kinnaur, which closes for a day or more after heavy snow. With a 4x4, a winter-experienced driver, heated homestays and buffer days, February Spiti is safe and unforgettable.",
    weather: [
      "Kaza days: around minus 3 to plus 3°C, colder on cloudy days.",
      "Kaza nights: typically minus 15 to minus 25°C in cold spells.",
      "Higher villages such as Kibber, Langza and Komic are several degrees colder.",
      "Snowfall spells arrive every week or two in a normal February, with clear, bright days between them.",
      "The Spiti river freezes along its edges, and waterfalls near Tabo and Dhankar can freeze solid.",
    ],
    roads: [
      "Shimla route (via Reckong Peo, Nako and Tabo): the only access, open on most days but closed after heavy snow or rockfall until cleared.",
      "The stretch around Malling and Nako is the most likely to close. Expect delays of hours or a day.",
      "Manali route over Kunzum and the Chandratal road: closed for winter.",
      "Village roads to Langza, Hikkim, Komic and Kibber are cleared after snow, sometimes a day or two later.",
      "Use a 4x4 with chains and a driver experienced on ice.",
    ],
    open: [
      "Open: Kaza, Key Monastery, Kibber (snow leopard tracking), Tabo, Dhankar, and homestays in many villages.",
      "Depends on snow: Langza, Hikkim, Komic, Pin Valley and Mudh.",
      "Closed: Chandratal, Kunzum Pass and the Manali route; most hotels and many cafés in Kaza.",
      "Services: limited shops in Kaza, an ATM that may not work, and patchy BSNL and Jio signal.",
    ],
    daysTitle: "8-day Spiti itinerary for February (Shimla route)",
    days: SHIMLA_ROUTE_DAYS,
    extra: [
      {
        h: "Losar and snow leopards",
        p: [
          "Losar, the Tibetan new year, follows the lunar calendar and often falls in February or early March. Spiti's villages celebrate with family gatherings, prayers at the monasteries and, in some villages, masked dances. If your dates overlap, ask your homestay host about local celebrations, and always ask before photographing ceremonies.",
          "February sits in the middle of snow leopard season, which runs from about January to March. Local trackers from Kibber scan the slopes of the Kibber Wildlife Sanctuary with spotting scopes, and sightings are reported every winter, though never guaranteed. Ibex and blue sheep, the snow leopard's prey, are easier to see.",
        ],
      },
      {
        h: "Mistakes to avoid in February",
        list: [
          "Travelling without at least one buffer day.",
          "Taking a two-wheel-drive car without chains.",
          "Packing city winter clothes instead of high-altitude gear.",
          "Expecting running water, open cafés and hotels like in summer.",
          "Sleeping with a stove burning in a closed room.",
        ],
      },
    ],
    pack: [
      "Two sets of thermal base layers, fleece and a down jacket rated for minus 20°C or colder.",
      "Insulated snow boots, thermal socks and waterproof gloves with liners.",
      "Balaclava, woollen cap, sunglasses and high SPF sunscreen.",
      "Sleeping bag liner, head torch, power bank and hand warmers.",
      "Personal medicines, a pulse oximeter and enough cash.",
    ],
    suits: [
      "Fit adults who handle cold well, wildlife enthusiasts and photographers.",
      "Travellers who want solitude and snow without crowds.",
      "Not ideal for very young children, elderly travellers or people with heart or lung conditions.",
    ],
    faqs: [
      { q: "Is Spiti open in February?", a: "Yes, via the Shimla and Kinnaur route, which is open on most days but closes after heavy snow. The Manali side and Chandratal are closed." },
      { q: "How cold is Spiti in February?", a: "Kaza days hover around freezing and nights typically fall to minus 15 to minus 25°C." },
      { q: "Can I see snow leopards in Spiti in February?", a: "February is in the middle of the January to March season. Local trackers in Kibber lead trips, but sightings are never guaranteed." },
      { q: "Is it safe to travel to Spiti in February?", a: "With a 4x4, a winter-experienced driver, heated homestays and buffer days, yes. Road closures and extreme cold are the main risks." },
      { q: "When is Losar in Spiti?", a: "It follows the Tibetan lunar calendar and often falls in February or early March." },
      { q: "Are hotels open in Spiti in February?", a: "Most hotels close, but homestays in Kaza, Kibber, Tabo and other villages stay open with heated rooms." },
      { q: "How many days do I need for Spiti in February?", a: "About 8 days from Shimla or Chandigarh, plus at least one buffer day." },
    ],
  }),
  monthPost({
    slug: "spiti-valley-in-may",
    month: "May",
    title: "Spiti Valley in May: Weather, Open Roads, Snow and a Quiet Season Plan",
    description:
      "Spiti Valley in May: Kaza weather, why only the Shimla route is open, snow at Kunzum and Chandratal, what is open, quiet-season stays and an 8-day itinerary.",
    intro:
      "May is when Spiti wakes up after winter. Days in Kaza warm to around 10 to 18°C, the fields are ploughed and sown, hotels and cafés reopen, and the valley is still quiet before the summer rush. Snow lingers on the high passes and above the villages, which makes for beautiful views. The catch is access: in most years the Manali route over Kunzum Pass and the road to Chandratal are still closed in May, so you enter and leave by the Shimla route through Kinnaur. If you are happy with an in-and-out trip via Kinnaur, May is one of the most peaceful and best-value months to visit.",
    weather: [
      "Kaza days: around 10 to 18°C, with strong sun.",
      "Kaza nights: around minus 2 to plus 5°C, still cold.",
      "Snow on the high slopes, Kunzum Pass and around Chandratal.",
      "Mostly dry and clear, with occasional late snow showers at altitude early in the month.",
      "Higher villages (Kibber, Langza, Komic) are noticeably colder, with snow patches in shaded spots.",
    ],
    roads: [
      "Shimla route: open, the standard way in and out in May.",
      "Manali route over Kunzum: usually still closed in May. BRO clearance often finishes around June, but it varies by year.",
      "Chandratal road: closed until the Manali side opens.",
      "Village roads: mostly open, with slush and snowmelt on shaded stretches.",
      "Melting snow can cause rockfall on the Kinnaur road, so drive in daylight and keep a buffer.",
    ],
    open: [
      "Open: Kaza, Key Monastery, Kibber, Langza, Hikkim, Komic, Dhankar, Tabo, Nako and Pin Valley (as roads allow).",
      "Reopening: most hotels, homestays and cafés in Kaza by May.",
      "Closed in most years: Kunzum Pass, Chandratal and the road to Manali.",
      "Quiet season: fewer travellers than June to September, and good value.",
    ],
    daysTitle: "8-day Spiti itinerary for May (Shimla route)",
    days: SHIMLA_ROUTE_DAYS,
    extra: [
      {
        h: "May vs June in Spiti",
        list: [
          "May: quiet, good value, snow still on the peaks, but no Kunzum or Chandratal in most years.",
          "June: the Manali side usually opens, so the full circuit and Chandratal become possible, but it gets busier with summer holidays.",
          "If Chandratal is a must, travel from mid-June. If calm and value matter more, May is ideal.",
        ],
      },
      {
        h: "Mistakes to avoid in May",
        list: [
          "Planning a full circuit via Kunzum without checking whether the Manali side is open.",
          "Under-packing: May nights are still near or below freezing.",
          "Driving the Kinnaur road late in the day when snowmelt rockfall is more likely.",
          "Skipping acclimatisation because the weather feels mild.",
        ],
      },
    ],
    pack: [
      "Thermal inners for nights, a fleece and a padded or down jacket.",
      "Light layers for warm, sunny days.",
      "Waterproof shoes for snowmelt and slush.",
      "Sunglasses, high SPF sunscreen, lip balm and a hat.",
      "Cash, a head torch and personal medicines.",
    ],
    suits: [
      "Travellers who want a quiet Spiti trip at good value.",
      "Photographers who like snow on the peaks with clear skies.",
      "Families who are happy with an in-and-out trip via Kinnaur and a gradual ascent.",
    ],
    faqs: [
      { q: "Is May a good time to visit Spiti?", a: "Yes, for a quiet, good-value trip via the Shimla route. The Manali side and Chandratal are usually still closed." },
      { q: "Is the Manali to Kaza road open in May?", a: "Usually not. Kunzum Pass is typically cleared around June, though dates vary by year. Check current road status." },
      { q: "Can I visit Chandratal in May?", a: "In most years, no. The road from Batal is still snowbound. Chandratal usually becomes reachable from around June." },
      { q: "What is the weather in Spiti in May?", a: "Kaza days are around 10 to 18°C and nights near freezing, with snow on the high slopes." },
      { q: "Is Spiti crowded in May?", a: "No. May is one of the quietest months, before the June summer rush." },
      { q: "How many days do I need for Spiti in May?", a: "About 8 days from Shimla or Chandigarh, in and out via Kinnaur." },
    ],
  }),
  monthPost({
    slug: "spiti-valley-in-august",
    month: "August",
    title: "Spiti Valley in August: Weather, Landslides, Ladarcha Fair and Full Circuit",
    description:
      "Spiti Valley in August: warm days in Kaza, rain-shadow weather, landslide risk on the approach roads, Ladarcha fair, Chandratal camping and a 9-day circuit plan.",
    intro:
      "August is high summer in Spiti. Days in Kaza are warm, around 18 to 25°C, the barley and pea fields are green, both routes are normally open and Chandratal's camps are in full swing. Spiti itself lies in the Himalayan rain shadow and stays mostly dry, but the monsoon is at work on the approach roads through Kinnaur and Lahaul, where landslides and swollen streams can cause delays. Many years also bring the Ladarcha fair in Kaza in August, a traditional trade fair with music, food and stalls. With buffer days and early starts, August is an excellent month for the full circuit.",
    weather: [
      "Kaza days: around 18 to 25°C, with strong sun.",
      "Kaza nights: around 8 to 12°C.",
      "Spiti is mostly dry, with occasional showers; the monsoon mainly affects Kinnaur and Lahaul.",
      "Chandratal nights: cold, often close to freezing.",
      "Glacier-fed streams run high, especially in the afternoon.",
    ],
    roads: [
      "Shimla route: open, but monsoon rain in Kinnaur can trigger landslides, especially beyond Reckong Peo.",
      "Manali route over Kunzum: open, with high stream crossings around Batal in the afternoon.",
      "Atal Tunnel area and Lahaul: occasional landslides after heavy rain.",
      "Keep one or two buffer days and cross streams early in the morning.",
    ],
    open: [
      "Everything is open: Kaza, Key, Kibber, Langza, Hikkim, Komic, Dhankar, Tabo, Pin Valley, Mudh and Chandratal.",
      "Chandratal camps operate fully.",
      "Hotels, homestays and cafés are all open, and busier around the Ladarcha fair and Independence Day.",
    ],
    daysTitle: "9-day Spiti circuit for August (Shimla in, Manali out)",
    days: [...CIRCUIT_DAYS, "Manali to Chandigarh or Delhi."],
    extra: [
      {
        h: "Ladarcha fair in Kaza",
        p: [
          "The Ladarcha fair is a traditional trade fair held in Kaza, historically a meeting point for traders from Spiti, Ladakh, Kinnaur and Tibet. Today it brings music, folk dances, food stalls and local crafts over a few days, usually in August. Dates are set each year, so check if you want to plan around it.",
        ],
      },
      {
        h: "Landslides: how to plan around them",
        list: [
          "Follow local news and ask your driver and hosts about closures each evening.",
          "Start drives early and avoid driving after dark.",
          "Keep at least one buffer day at the end of the trip.",
          "Book flexible flights or trains home where possible.",
          "If a road closes, wait in a town rather than attempting detours on unknown roads.",
        ],
      },
    ],
    pack: [
      "Light layers for warm days and a fleece and padded jacket for nights and Chandratal.",
      "A rain jacket for Kinnaur and Lahaul.",
      "Sunglasses, high SPF sunscreen and a hat.",
      "Quick-dry trousers and waterproof shoes for stream crossings.",
      "Cash, a head torch, a power bank and personal medicines.",
    ],
    suits: [
      "Families on summer holidays, with a gradual ascent via Shimla.",
      "Bikers, with planning for landslides and stream crossings.",
      "Travellers who want the full circuit with Chandratal.",
    ],
    faqs: [
      { q: "Is August a good time to visit Spiti?", a: "Yes. Both routes are normally open, Chandratal is accessible and Spiti stays mostly dry. Plan buffer days for landslides on the approach roads." },
      { q: "Does it rain in Spiti in August?", a: "Spiti lies in the rain shadow and gets little rain, but Kinnaur and Lahaul, on the way in, can get heavy monsoon showers." },
      { q: "Is the Manali to Kaza road open in August?", a: "Yes, normally. Stream crossings around Batal run high in the afternoon, so start early." },
      { q: "What is the Ladarcha fair?", a: "A traditional trade fair in Kaza, usually in August, with music, dances, food and local crafts." },
      { q: "Is Chandratal open in August?", a: "Yes. August is in the main Chandratal season, and camps operate fully." },
      { q: "Is August good for a Spiti bike trip?", a: "Yes, with buffer days for landslides and morning stream crossings." },
    ],
  }),
  monthPost({
    slug: "spiti-valley-in-september",
    month: "September",
    title: "Spiti Valley in September: Clear Skies, Harvest Season and the Best Circuit Month",
    description:
      "Spiti Valley in September: weather in Kaza, stable roads after the monsoon, harvest colours, Chandratal before the camps close, fewer crowds and a 9-day circuit.",
    intro:
      "September is often the best month of the year in Spiti. The monsoon has eased on the approach roads, both routes are normally open, skies are deep blue and the barley fields turn gold at harvest time. Days in Kaza are pleasant, around 15 to 22°C, nights are cool, and the summer crowds have thinned. Chandratal is still open, with camps operating until late September or early October. If you want the full Spiti circuit with Chandratal, stable roads and great light for photography, September is the month to choose.",
    weather: [
      "Kaza days: around 15 to 22°C, clear and sunny.",
      "Kaza nights: around 3 to 8°C, colder late in the month.",
      "Rain: very little; the monsoon usually eases on the approach roads during September.",
      "Chandratal nights: near or below freezing, especially late in the month.",
      "Visibility: excellent, with the clearest skies of the summer season.",
    ],
    roads: [
      "Shimla route: open, with fewer landslides than in July and August.",
      "Manali route over Kunzum: open, with lower stream crossings than in mid-summer.",
      "Chandratal road: open until the camps close, usually late September or early October.",
      "Overall, September has some of the most stable road conditions of the year.",
    ],
    open: [
      "Everything is open: all villages, monasteries, Pin Valley, Mudh and Chandratal.",
      "Chandratal camps start closing late in September or early October as nights get colder.",
      "Hotels, homestays and cafés are open, with more availability than in June to August.",
    ],
    daysTitle: "9-day Spiti circuit for September",
    days: [...CIRCUIT_DAYS, "Manali to Chandigarh or Delhi."],
    extra: [
      {
        h: "Harvest season in Spiti",
        p: [
          "September is harvest time for barley and green peas, Spiti's main crops. Families work in the fields around Kaza, Langza, Kibber and Demul, and the terraces turn gold against the bare mountains. It is a beautiful time for photography and a good time to stay in a village homestay and see farming life up close.",
        ],
      },
      {
        h: "Photography and stargazing in September",
        list: [
          "Clear, dry air gives sharp mountain views and deep blue skies.",
          "Golden fields around Langza, Kibber and Demul look best in the early morning and late afternoon.",
          "Moonless nights are excellent for stargazing from Kaza, Langza or Komic.",
          "Chandratal reflections are best on calm early mornings.",
        ],
      },
    ],
    pack: [
      "Layers for warm days and a down or padded jacket for cold nights.",
      "Thermal inners for Chandratal and the high villages.",
      "Sunglasses, high SPF sunscreen and lip balm.",
      "Comfortable walking shoes.",
      "Cash, a head torch and personal medicines.",
    ],
    suits: [
      "Everyone planning the full circuit with Chandratal.",
      "Photographers and stargazers.",
      "Bikers who want the most stable road conditions.",
      "Travellers who prefer fewer crowds than in mid-summer.",
    ],
    faqs: [
      { q: "Is September the best time to visit Spiti?", a: "For many travellers, yes: stable roads, clear skies, harvest colours, Chandratal still open and fewer crowds." },
      { q: "What is the weather in Spiti in September?", a: "Kaza days are around 15 to 22°C and nights around 3 to 8°C, colder late in the month." },
      { q: "Is Chandratal open in September?", a: "Yes. Camps usually operate until late September or early October." },
      { q: "Is the Manali to Kaza road open in September?", a: "Yes, normally, with lower stream crossings than in mid-summer." },
      { q: "Is September good for a Spiti bike trip?", a: "It is often the best month, with stable roads and fewer landslides." },
      { q: "Is Spiti crowded in September?", a: "Less than in June to August. It is busy around weekends but much calmer overall." },
    ],
  }),
  monthPost({
    slug: "spiti-valley-in-october",
    month: "October",
    title: "Spiti Valley in October: Golden Autumn, Cold Nights and Road Closing Dates",
    description:
      "Spiti Valley in October: autumn colours and clear skies, Kaza temperatures, when Chandratal camps and the Manali side close, what is open and an 8-day plan.",
    intro:
      "October is Spiti's golden month. The poplars and willows along the rivers turn yellow, skies are the clearest of the year, and the summer crowds are gone. Days in Kaza are crisp, around 8 to 15°C, but nights fall below freezing by mid-month. The big planning point is roads: Chandratal's camps usually close in early October, and the Manali route over Kunzum Pass typically closes by late October or after the first heavy snow. Plan an in-and-out trip via Shimla, or travel early in the month for the full circuit, and you get one of the most beautiful and peaceful times in the valley.",
    weather: [
      "Kaza days: around 8 to 15°C, clear and bright.",
      "Kaza nights: around 0 to minus 6°C, colder late in the month.",
      "Rain: rare; the first snow can fall on the passes late in the month.",
      "Higher villages and Kunzum Pass: freezing nights and icy mornings.",
      "Visibility: excellent, ideal for photography and stargazing.",
    ],
    roads: [
      "Shimla route: open and the most reliable way in and out.",
      "Manali route over Kunzum: usually open in early October, closing by late October or after the first heavy snow.",
      "Chandratal road: camps usually close in early October; check before planning a visit.",
      "Morning ice on shaded corners at altitude, so start drives a little later and finish before dark.",
    ],
    open: [
      "Open: Kaza, all monasteries, Kibber, Langza, Hikkim, Komic, Dhankar, Tabo, Nako and Pin Valley.",
      "Closing during the month: Chandratal camps (early October) and the Kunzum route (late October).",
      "Some hotels and cafés start closing towards the end of the month; homestays stay open.",
    ],
    daysTitle: "8-day Spiti itinerary for October (Shimla route)",
    days: SHIMLA_ROUTE_DAYS,
    extra: [
      {
        h: "October vs September in Spiti",
        list: [
          "September: warmer nights, Chandratal open, full circuit easy.",
          "October: golden colours, clearest skies, fewer travellers, but colder nights and closing roads on the Manali side.",
          "For Chandratal, choose September or the first days of October. For autumn colours and calm, choose mid-October via Shimla.",
        ],
      },
      {
        h: "Mistakes to avoid in October",
        list: [
          "Planning to exit via Kunzum in late October without checking whether it is still open.",
          "Expecting Chandratal camps to be open after early October.",
          "Packing summer clothes: October nights are below freezing.",
          "Driving at night on icy high-altitude roads.",
        ],
      },
    ],
    pack: [
      "Thermal inners, a warm fleece and a down jacket.",
      "Cap, gloves and warm socks for mornings and nights.",
      "Sunglasses, high SPF sunscreen and lip balm.",
      "Waterproof shoes with good grip for icy mornings.",
      "Cash, a head torch, a power bank and personal medicines.",
    ],
    suits: [
      "Photographers and travellers who love autumn colours.",
      "Couples and small groups who want a quiet, unhurried trip.",
      "Travellers comfortable with cold nights.",
    ],
    faqs: [
      { q: "Is October a good time to visit Spiti?", a: "Yes, for golden autumn colours, very clear skies and few crowds. Nights are cold, and the Manali side closes late in the month." },
      { q: "Is Chandratal open in October?", a: "Camps usually close in early October. Check the current status if you want to visit." },
      { q: "When does the Kunzum Pass close?", a: "Usually by late October or after the first heavy snowfall. Dates vary each year." },
      { q: "How cold is Spiti in October?", a: "Kaza days are around 8 to 15°C and nights fall to around 0 to minus 6°C." },
      { q: "Is October good for photography in Spiti?", a: "Excellent. Golden poplars, clear skies and sharp mountain light make it one of the best months." },
      { q: "Should I enter Spiti via Shimla in October?", a: "Yes. The Shimla route is the most reliable in October, especially later in the month." },
    ],
  }),
];
