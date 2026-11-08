import type { BlogPost } from "./types";

// Depth for kashmir-batch-3.ts. Same rules: no fares or timetables, no em dashes.

type More = { sections: BlogPost["sections"]; faqs: BlogPost["faqs"] };

export const KASHMIR_BATCH_3_MORE: Record<string, More> = {
  "srinagar-sunset-points": {
    sections: [
      { h: "Sunset by season in Srinagar", list: ["Spring: soft light over fresh green willows, with snow still on the Pir Panjal.", "Summer: late sunsets and lotus beds on parts of Dal Lake in July and August.", "Autumn: chinars glowing red at Char Chinar and Naseem Bagh; the clearest skies.", "Winter: early sunsets, mist on the water and snow on the hills; dress very warmly for a shikara."] },
      { h: "A perfect Srinagar evening", days: ["4:30 pm (summer, adjust by season): Pari Mahal for the view over the lake.", "One hour before sunset: shikara from the Boulevard ghats towards Char Chinar.", "Sunset on the water; kahwa from a floating vendor.", "Dinner at a Wazwan restaurant or on your houseboat."] },
    ],
    faqs: [
      { q: "Where can I see the sunset over Dal Lake for free?", a: "From the Boulevard promenade and Zabarwan Park, both free and lively in the evening." },
      { q: "What is the best month for sunsets in Srinagar?", a: "October, for clear skies and red chinars, followed by May and September." },
    ],
  },
  "shankaracharya-temple-srinagar-guide": {
    sections: [
      { h: "Mahashivratri and festivals at the temple", p: ["Mahashivratri, known in Kashmir as Herath, brings devotees to the temple in large numbers, and it is also a stop for the Chhari Mubarak, the holy mace of the Amarnath Yatra, before it travels to the cave. On these days security is heavier and queues longer; go early in the morning if you plan to visit."] },
      { h: "Practical tips", list: ["Carry water; there are limited facilities at the top.", "Wear comfortable shoes for the steps; you remove them only at the shrine.", "Plan 1 to 1.5 hours including the drive up and the climb.", "Vehicle entry to the parking area closes earlier than the temple itself; plan for the morning.", "There is no place to store phones at the top; leave them in the car."] },
    ],
    faqs: [
      {"q": "Is there an entry fee at Shankaracharya Temple?", "a": "No entry fee has been reported for the temple itself. Security checks apply at the base of the steps."},
      {"q": "Can I visit Shankaracharya Temple in winter?", "a": "Yes, when the hill road is open. The steps can be icy after snow, so go carefully and in daylight."},
      { q: "How long does it take to visit Shankaracharya Temple?", a: "About 1 to 1.5 hours including the drive up, the security check and the climb of about 243 steps." },
      { q: "Can I take photos at Shankaracharya Temple?", a: "No. Cameras and phones are not allowed past the security check." },
    ],
  },
  "floating-market-srinagar-dal-lake": {
    sections: [
      { h: "Life on Dal Lake", p: ["Dal Lake is home to whole neighbourhoods built on water and on floating land, with schools, shops, mosques and post offices reached by shikara. Families have farmed the floating gardens for generations, growing vegetables in summer on mats of reeds and soil anchored in the lake. A dawn ride to the market is the best way to see this side of Srinagar, far from the busy Boulevard."] },
      { h: "What to wear and carry", list: ["A warm jacket or shawl; the lake is cold before sunrise even in summer.", "A cap and scarf in spring and autumn.", "A small bag that fits on your lap in the shikara.", "Cash for small purchases from farmers or vendors."] },
      { h: "Floating market plus a houseboat night", p: ["The market is easiest from a houseboat: your host arranges the shikara, wakes you before dawn and serves breakfast when you return. Many couples and families plan their one houseboat night specifically so they can see the market the next morning."] },
    ],
    faqs: [
      {"q": "Do I need a guide for the floating market?", "a": "No. Your shikara boatman acts as the guide and knows where the market is gathering that morning."},
      {"q": "Is the floating market suitable for children?", "a": "Yes, if they can manage the early start. Keep them seated in the shikara and dress them warmly."},
      { q: "How long does the floating market tour take?", a: "About 2 to 3 hours including the shikara ride there and back, usually finished by breakfast." },
      { q: "Can I buy vegetables at the floating market?", a: "Yes, farmers will sell small amounts; it is mainly a wholesale market, so buy politely and without haggling hard." },
    ],
  },
  "keran-valley-kashmir-guide": {
    sections: [
      {"h": "Pharkian Gali on the way", "p": ["The road from Kralpora to Keran crosses Pharkian Gali, a high forested pass with wide views over north Kashmir and snow into early summer. It is worth a stop for photos and tea at the small stalls when they are open. The pass road is narrow, with steep drops and hairpin bends, so let your driver set the pace and avoid driving it after dark or in heavy rain."]},
      { h: "What to expect in the village", p: ["Keran is a working village, not a resort. Expect a few shops, simple food, wooden and stone houses, small fields and orchards, and an easy pace of life. Visitors usually walk along the river, talk to villagers, take in the views across the water and enjoy the quiet. Facilities improve each year with border tourism, but keep expectations modest."] },
      { h: "Food and stays", p: ["Homestays serve simple home-cooked meals, often rice, rajma, local greens and occasionally trout or meat. Carry snacks, water and any special food you need. If staying overnight, confirm heating in spring and autumn, as nights are cold."] },
      { h: "A 2-day Keran plan", days: ["Srinagar to Kupwara and Kralpora (permit check), over Pharkian to Keran; evening by the Kishanganga; overnight in a homestay.", "Morning walk in the village and along the river; drive back over Pharkian to Srinagar by evening."] },
    ],
    faqs: [
      { q: "What is Keran famous for?", a: "Its riverside setting on the Kishanganga (Neelum) along the Line of Control, with villages visible across the river." },
      { q: "Is the road to Keran good?", a: "Parts are rough mountain road over the Pharkian pass. Use an SUV and an experienced local driver." },
    ],
  },
  "peer-ki-gali-mughal-road-guide": {
    sections: [
      {"h": "Driving on the Mughal Road safely", "list": ["Check the road status the evening before and again in the morning.", "Leave Srinagar by 7 am and plan to be back below the pass by mid-afternoon.", "Avoid the road in heavy rain, when landslides and stone falls are common.", "Keep the fuel tank full from Shopian; there is no fuel on the pass.", "Respect traffic rules and any one-way timings set by the authorities."]},
      { h: "Snow at Peer Ki Gali", p: ["Peer Ki Gali holds snow longer than most places easily reached from Srinagar. In May and early June, high snow walls line the road after it reopens and the area around the pass is a snowfield, making it a popular alternative to Gulmarg's Gondola for snow play. Fresh snow is possible on cold days even in early autumn."] },
      { h: "Who should go", list: ["Travellers who want snow in late spring without the Gondola queues.", "Road-trip lovers and photographers.", "Families with older children, with warm clothing and an early start.", "Not ideal for people with heart or lung conditions, because of the altitude."] },
      { h: "Food and facilities", p: ["There are seasonal tea and snack stalls near the pass and dhabas at Heerpora and Shopian, but facilities are limited. Carry water, snacks and warm drinks, and use toilets in Shopian or Heerpora before the climb."] },
    ],
    faqs: [
      { q: "Is Peer Ki Gali open in winter?", a: "No. The Mughal Road is usually closed by snow from about December to April." },
      { q: "Is Peer Ki Gali higher than Gulmarg?", a: "Yes. At about 3,490 m it is higher than Gulmarg (about 2,650 m) and Gondola Phase 1 at Kongdori." },
      { q: "Can I visit Peer Ki Gali and Aharbal on the same day?", a: "Yes, with an early start: both are on the Shopian side of south Kashmir." },
    ],
  },
  "yusmarg-travel-guide": {
    sections: [
      {"h": "Nilnag lake in detail", "p": ["Nilnag is a small, clear lake in the forest below Yusmarg's meadow, about 4 km away. The path climbs gently through pine and fir and can be muddy after rain, so wear shoes with grip. On a calm day the lake reflects the forest perfectly. By pony the round trip takes about two hours including time at the lake; on foot allow three hours at a relaxed pace."]},
      { h: "Yusmarg in winter", p: ["From December to February Yusmarg is covered in snow, and the forest and meadow look like a quiet version of Gulmarg without the crowds. The road is cleared after snowfall but can stay closed for a day or two after a heavy spell, and stalls and huts may be shut. Check the road with your driver the evening before and carry hot drinks and snacks."] },
      { h: "Chrar-e-Sharif on the way", p: ["The town of Chrar-e-Sharif, on the road to Yusmarg, is home to the shrine of Sheikh Noor-ud-Din Noorani (Nund Rishi), the patron saint of Kashmir, revered by Muslims and Hindus alike. Many visitors stop to pay respects on the way. Dress modestly and remove shoes where required."] },
      { h: "Yusmarg for families and couples", list: ["Families: open meadow for children to run, short walks and picnics; keep children away from the Doodh Ganga's fast water.", "Couples: the Nilnag lake walk and quiet forest edges, especially on weekdays.", "Older travellers: ponies make Nilnag possible without a long walk."] },
      { h: "Photography tips", list: ["Early morning mist over the meadow and forest.", "The Doodh Ganga rushing over boulders below the meadow.", "Nilnag lake reflections on calm days.", "Autumn colours in October."] },
      { h: "Adding Yusmarg to a Kashmir package", p: ["Agents usually add Yusmarg as a relaxed day on a Srinagar-based trip of five nights or more, or as a replacement for Sonamarg when the Sonamarg road is closed by snow. Ask for a private cab for the day and an early start."] },
    ],
    faqs: [
      { q: "Is Yusmarg open in winter?", a: "Yes, but the road can close for a day or two after heavy snowfall. Check before going." },
      { q: "Are ponies available in Yusmarg?", a: "Yes, at association rates, mainly for the ride to Nilnag lake." },
      { q: "Is there anything to see on the way to Yusmarg?", a: "Yes, the Chrar-e-Sharif shrine of Sheikh Noor-ud-Din Noorani, the patron saint of Kashmir." },
    ],
  },
  "things-to-do-in-gurez-valley": {
    sections: [
      {"h": "Photography in Gurez", "list": ["Habba Khatoon peak at sunrise and sunset from Dawar.", "Log houses and terraced fields in Tulail.", "The Kishanganga's clear blue-green water against the gravel banks.", "Razdan Pass with snow in early summer and views back towards Wular Lake.", "Night skies: Gurez has very little light pollution."]},
      { h: "The Dard-Shina culture of Gurez", p: ["Gurez is home to the Dard-Shina people, whose language, customs and architecture differ from the rest of the Kashmir valley. The log-built houses, with thick timber walls for the long winters, are a living example of mountain architecture. Visitors are welcome, but Gurez is conservative: dress modestly, ask before photographing people and homes, and respect village privacy."] },
      { h: "Best time for each activity", list: ["Late May to June: snow on Razdan Pass, green fields, rushing river.", "July to August: lush valley, farming season, best for camping.", "September: clear skies and golden fields; great for photography.", "October: cold nights, autumn colours, last weeks before closure."] },
      { h: "Getting there", p: ["From Srinagar, drive to Bandipora (about 60 km) and climb over Razdan Pass to Dawar, about 141 km in total and 5 to 6 hours. The road passes a checkpoint where permits are verified. Use an SUV with an experienced driver; parts of the pass road are narrow and steep."] },
      { h: "Stays and food", p: ["Stays range from guesthouses and homestays in Dawar to Hotel Grand Gurez and tourism huts, plus seasonal riverside camps. Food is simple and home-style: rice, rajma, local vegetables and trout in season. Carry snacks for the drive."] },
      { h: "Tips", list: ["Carry cash; ATMs and card payments are unreliable.", "Expect limited mobile coverage and occasional power cuts.", "Keep warm layers even in summer; nights are cold.", "Allow a buffer day in case Razdan closes after rain or snow."] },
    ],
    faqs: [
      { q: "What is Habba Khatoon peak?", a: "The pyramid-shaped peak above Dawar, named after the 16th-century Kashmiri poet-queen Habba Khatoon." },
      { q: "Can I camp in Gurez?", a: "Yes, at riverside camps run by local operators in summer." },
      { q: "Is Gurez safe for tourists?", a: "Domestic tourists visit with permits in season. Follow local rules and travel with a registered agent." },
    ],
  },
  "kashmir-great-lakes-trek-guide": {
    sections: [
      {"h": "Cost and what is included", "p": ["Trek costs vary by operator and group size. A typical package covers trek leaders, guides, cooks, camping equipment, meals on the trek, permits and the drive from Srinagar to Sonamarg and back from Naranag. Offloading your backpack onto ponies usually costs extra. Compare what each operator includes, their safety record and group size, rather than only the price."]},
      { h: "Wildlife and flowers on the trek", p: ["In July and August the meadows are full of wildflowers: purple and blue gentians, yellow buttercups, primulas and many more. Shepherds' flocks graze the high pastures, and marmots are often seen near the passes. The lakes are home to trout, and fishing is possible with permits in some areas."] },
      { h: "Weather on the trek", p: ["Days are usually pleasant, around 15 to 20°C in the meadows, but nights at camps such as Gadsar and Gangabal can drop near or below freezing. Afternoon rain and sudden cloud are common. Good layers, a waterproof jacket and a warm sleeping bag rated for sub-zero nights are essential."] },
      { h: "Altitude sickness", p: ["Camps are between about 3,000 and 3,800 m, and Gadsar Pass reaches about 4,190 m. Mild headache and breathlessness are common at first. Walk slowly, drink plenty of water, rest well, and tell your trek leader early if you feel unwell; descending is the main cure for serious symptoms."] },
      { h: "Mobile network and contact", p: ["There is no reliable mobile signal for most of the trek. Tell your family your schedule before leaving Sonamarg, and rely on your operator's communication plan. Signal returns near Naranag."] },
      { h: "Combining the trek with Kashmir sightseeing", p: ["Add two or three days before or after the trek for Srinagar's gardens, a houseboat night and a Gulmarg day trip. Doing sightseeing after the trek gives you a buffer if weather delays the descent."] },
    ],
    faqs: [
      { q: "Can a beginner do the Kashmir Great Lakes trek?", a: "Fit beginners can, with six to eight weeks of training and a good operator. It is not a first easy trek." },
      { q: "Is there mobile network on the KGL trek?", a: "No reliable signal for most of the route; it returns near Naranag." },
      { q: "How cold is it on the Kashmir Great Lakes trek?", a: "Days are mild in the meadows; nights at the higher camps can drop near or below freezing." },
    ],
  },
  "amarnath-helicopter-booking-guide": {
    sections: [
      {"h": "Walking routes versus helicopter", "p": ["The Baltal route is about 14 km one way to the cave, short but steep, and usually done up and back in one or two days. The Pahalgam route from Chandanwari via Sheshnag and Panjtarni is longer and gentler, taking about three to four days one way. The helicopter saves most of the walk but still leaves about 6 km from Panjtarni to the cave, which pilgrims cover on foot, by pony or by palanquin.", "Choose the helicopter if time is short, if you are older or less fit, or if you want to complete the yatra in a day. Choose to walk if you want the traditional pilgrimage experience, and prepare with a month of daily walking."]},
      { h: "A sample yatra plan with helicopter", days: ["Arrive in Srinagar; collect your RFID card at the designated centre; rest.", "Drive to Baltal or Sonamarg; overnight.", "Morning helicopter to Panjtarni, darshan at the cave, return to Panjtarni and fly back if weather allows.", "Buffer day for weather; return to Srinagar.", "Optional sightseeing in Srinagar, Gulmarg or Sonamarg before departure."] },
      { h: "What to carry on helicopter day", list: ["Printed helicopter ticket, yatra registration and RFID card.", "Original photo ID matching the bookings.", "Warm clothes and rain gear; Panjtarni and the cave are cold.", "Water, light snacks and personal medicines.", "Small backpack only; helicopters have strict baggage limits."] },
    ],
    faqs: [
      { q: "Can I take the helicopter both ways to Panjtarni?", a: "Yes, if seats and weather allow. Many pilgrims book a return flight on the same day." },
      { q: "Is there a baggage limit on the Amarnath helicopter?", a: "Yes, operators set strict weight limits; carry only a small bag." },
    ],
  },
};
