// Ladakh duration pages and place package hubs. Altitudes are approximate;
// drive times are for a Leh taxi union cab in good conditions. Permit wording
// matches the rest of the site: Indian visitors register and pay fees on the
// LAHDC Leh portal; foreign nationals need a Protected Area Permit through a
// registered agent.

import type { PageDepthEntry } from "./index";

const ACCLIMATISE =
  "Leh is at about 3,500 m, and everyone, however fit, needs to acclimatise. Spend the first full day resting, with only a short walk in the evening, drink plenty of water, avoid alcohol and smoking for the first two days, and do not go over the high passes until your third day. Headache, nausea and breathlessness at rest are signs of altitude sickness; tell your driver or hotel at once, as the cure is to rest or go lower. Anyone with heart or lung conditions, and anyone travelling with small children or older parents, should talk to a doctor before the trip.";

const PERMITS =
  "Nubra, Pangong, Tso Moriri, Hanle, Turtuk and other protected areas need registration and fees on the LAHDC Leh permit portal for Indian visitors; foreign nationals need a Protected Area Permit through a registered travel agent. Agents usually arrange this as part of the package. Carry several printed copies and your original ID, as check posts on the way keep a copy.";

const TAXI =
  "Sightseeing in Ladakh is done in Leh taxi union cabs, usually an Innova, Xylo or Scorpio with a local driver who knows the passes; outside taxis are not allowed to run local sightseeing. Self-drive is possible in your own vehicle or a bike rented in Leh. Only postpaid mobile connections work in Ladakh, and coverage is patchy beyond Leh.";

export const LADAKH_PAGE_DEPTH: Record<string, PageDepthEntry> = {
  // ------------------------------------------------------------ Ladakh 4N/5D
  "/tour-packages/ladakh/4-nights-5-days": {
    sections: [
      {
        h: "Is 4 nights 5 days enough for Ladakh?",
        p: [
          "Four nights is the shortest Ladakh trip that makes sense, and only if you fly in. Two of the nights are spent in Leh acclimatising and seeing the monasteries, which leaves room for one high-altitude trip: either Pangong Tso or Nubra Valley, not both. It is a good first taste of Ladakh for travellers with a long weekend plus leave, and for those who will come back for a longer trip.",
          "Do not try to fit Nubra and Pangong into four nights. Each is a full day's drive over a pass above 5,300 m, and rushing them on your second or third day at altitude is the most common reason travellers fall ill in Ladakh.",
        ],
      },
      { h: "Acclimatisation comes first", p: [ACCLIMATISE] },
      {
        h: "Day-by-day: short trip to Ladakh with Pangong",
        days: [
          "Fly into Leh (about 1 hour 15 minutes from Delhi). Transfer to the hotel and rest for the whole day; a short evening walk in the market at most. Overnight in Leh.",
          "Gentle sightseeing: Shanti Stupa, Leh Palace, and the Indus valley monasteries of Thiksey and Shey, with Hemis if you feel well. Overnight in Leh.",
          "Drive to Pangong Tso over Chang La (about 5,360 m), roughly 5 to 6 hours. Afternoon by the lake, which changes colour through the day. Overnight in a camp or hotel at Spangmik or Lukung.",
          "Sunrise at the lake, then drive back to Leh via Chang La. Stop at the Sindhu Ghat or the Hall of Fame war museum in the evening. Overnight in Leh.",
          "Transfer to Leh airport for your flight. Morning flights are the norm, because afternoon winds often delay or cancel later departures.",
        ],
      },
      {
        h: "Pangong or Nubra for a short trip?",
        list: [
          "Pangong Tso: the famous high lake at about 4,225 m, about 134 km long, with most of it on the Chinese side. Best for photographs and a lake-side night in a camp. Nights are very cold, even in summer.",
          "Nubra Valley: over Khardung La to the sand dunes and Bactrian camels of Hunder and the Maitreya Buddha at Diskit Monastery. Lower than Leh (about 3,100 m), so the night is easier on the body.",
          "If anyone in the group is older or worried about altitude, choose Nubra; if the lake is the reason for the trip, choose Pangong.",
        ],
      },
      {
        h: "Where you stay",
        p: [
          "In Leh, hotels and guesthouses around the main market, Changspa and Fort Road keep you close to restaurants and the old town. Many are family-run and heated in the shoulder months. At Pangong, accommodation is in camps and a few hotels at Spangmik, Lukung and Man-Merak, with electricity usually in the evening only; at Nubra, in Hunder or Diskit, in camps and hotels with gardens.",
          "Ladakh hotels are simpler than those in Kashmir or Himachal at the same category, because everything has to be trucked in over the passes. Ask agents to name each hotel or camp in the quote.",
        ],
      },
      { h: "Permits and local taxis", p: [PERMITS, TAXI] },
      {
        h: "What a 4 nights 5 days Ladakh package includes",
        list: [
          "4 nights in Leh hotels and a Pangong or Nubra camp, twin sharing, usually with breakfast and dinner.",
          "Leh taxi union cab for airport transfers, sightseeing and the Pangong or Nubra trip.",
          "Inner Line or protected area registration and environment fees, when listed in the quote.",
          "Not included: flights, monastery entry tickets, camel rides at Hunder, oxygen cylinders if needed, lunches and personal expenses.",
        ],
      },
      {
        h: "When to go",
        p: [
          "The flying season for a short trip runs from about May to September. May and early June are cold at Pangong but quiet; July and August are warmest and busiest; September has clear skies and fewer visitors. From October the lakes get very cold, and from about December to March Pangong freezes; a few camps close and Chang La can shut after snow.",
        ],
      },
    ],
    faqs: [
      { q: "Can I see Nubra and Pangong in 4 nights 5 days?", a: "Not safely. Two nights go to acclimatising in Leh, leaving room for one of them. A 5 or 6 night trip fits both." },
      { q: "Is 4 nights 5 days enough for Ladakh?", a: "For a first taste with Leh and one of Pangong or Nubra, yes. For the classic circuit, plan at least 6 nights." },
      { q: "Do I need a permit for a short Ladakh trip?", a: "Yes, for Pangong or Nubra. Indian visitors register and pay fees on the LAHDC Leh portal; foreign nationals need a Protected Area Permit through an agent." },
      { q: "How long does it take to acclimatise in Leh?", a: "At least one full day of rest and ideally two before crossing passes above 5,000 m such as Chang La or Khardung La." },
      { q: "Can I drive to Ladakh on a 4-night trip?", a: "No. The road from Manali or Srinagar takes two days each way. A 4-night trip only works by flight to Leh." },
      { q: "Is Pangong Lake open all year?", a: "The road is usually open, but from about December to March the lake freezes and many camps close. Chang La can shut for a few hours after snow." },
      { q: "Which month is best for a short Ladakh trip?", a: "June to September. July and August are warmest; September has the clearest skies and fewer visitors." },
      { q: "Will my phone work in Ladakh?", a: "Only postpaid connections work. Coverage is good in Leh and patchy at Pangong and in Nubra." },
      { q: "Is a short Ladakh trip safe for senior citizens?", a: "It can be, with a doctor's advice, two full rest days in Leh, and Nubra rather than Pangong for the overnight. Ask for a hotel with oxygen available." },
      { q: "Why are morning flights recommended from Leh?", a: "Afternoon winds and weather in the mountains often delay or cancel later flights, so airlines schedule most departures in the morning." },
    ],
  },

  // ------------------------------------------------------------ Ladakh 5N/6D
  "/tour-packages/ladakh/5-nights-6-days": {
    sections: [
      {
        h: "What 5 nights 6 days in Ladakh covers",
        p: [
          "Five nights is the shortest trip that fits the two classic high-altitude trips, Nubra Valley and Pangong Tso, after acclimatising in Leh. The usual plan is Leh 2 nights, Nubra 1 night, Pangong 1 night and Leh 1 night, linking Nubra and Pangong directly by the Shyok road so you do not go back to Leh in between.",
          "It is a full but manageable trip. The driving days are long, 5 to 8 hours, so it suits travellers who are comfortable at altitude and happy to spend time in a car for some of the best mountain roads in India.",
        ],
      },
      { h: "Acclimatisation", p: [ACCLIMATISE] },
      {
        h: "Day-by-day: Ladakh with Nubra and Pangong",
        days: [
          "Fly into Leh and rest all day to acclimatise. Overnight in Leh.",
          "Sham valley and Leh: Hall of Fame, Gurudwara Pathar Sahib, Magnetic Hill and the Indus and Zanskar confluence at Nimmu, then Shanti Stupa at sunset. Overnight in Leh.",
          "Drive to Nubra over Khardung La, about 5 to 6 hours. Diskit Monastery and its Maitreya Buddha, then the sand dunes at Hunder at sunset. Overnight in Hunder or Diskit.",
          "Drive from Nubra to Pangong by the Shyok road through Agham and Shyok village, about 7 to 8 hours, when the road is open. Overnight at Pangong.",
          "Sunrise at Pangong, then drive back to Leh over Chang La, about 5 to 6 hours, with a stop at Thiksey Monastery. Overnight in Leh.",
          "Transfer to Leh airport for a morning flight.",
        ],
      },
      {
        h: "The Shyok road between Nubra and Pangong",
        p: [
          "The direct road from Nubra to Pangong along the Shyok river saves a day compared with returning to Leh, but it is a rough, remote road with river crossings that can rise in the afternoon in July and August. Your driver checks its condition the day before; if it is closed, the route goes back via Khardung La and Leh, which adds time but is safe. Packages should say which route is planned.",
        ],
      },
      {
        h: "Where you stay",
        list: [
          "Leh: hotels and guesthouses around the market, Changspa and Fort Road.",
          "Nubra: camps and hotels with orchards in Hunder and Diskit; nights are milder because the valley is lower than Leh.",
          "Pangong: camps and a few hotels at Spangmik, Lukung and Man-Merak; very cold at night, electricity usually in the evening only.",
        ],
      },
      { h: "Permits and taxis", p: [PERMITS, TAXI] },
      {
        h: "What the package usually includes",
        list: [
          "5 nights of hotels and camps with breakfast and dinner.",
          "A Leh taxi union cab for all transfers and the circuit.",
          "Protected area registration and fees, if listed.",
          "Not included: flights, monastery entries, camel rides, ATV rides at Hunder, oxygen if needed, lunches and tips.",
        ],
      },
      {
        h: "Best time",
        p: [
          "June to mid-September, when Khardung La, Chang La and the Shyok road are normally open and the camps at Pangong and Hunder are running. Late May and early October are possible but colder, with a chance of snow on the passes. Book flights and camps early for July and August.",
        ],
      },
    ],
    faqs: [
      { q: "Can I do Nubra and Pangong in 5 nights?", a: "Yes, with 2 nights in Leh first and the Shyok road linking Nubra to Pangong. It is a full trip with long driving days." },
      { q: "How long is the drive from Nubra to Pangong?", a: "About 7 to 8 hours on the Shyok road when it is open. If it is closed, the route goes back through Leh." },
      { q: "How high is Khardung La?", a: "About 5,359 m by most surveys, one of the highest motorable passes in the world. Do not stop for long at the top." },
      { q: "Is the Hunder camel ride included?", a: "Usually not. Bactrian camel rides on the Hunder dunes are paid locally." },
      { q: "Is a 5 nights 6 days Ladakh trip tiring?", a: "It has two long driving days. It suits travellers comfortable at altitude; families with small children may prefer 6 or 7 nights." },
      { q: "Do Ladakh packages include permits?", a: "Most do, but check the quote. Indian visitors register on the LAHDC Leh portal; foreign nationals need a Protected Area Permit." },
      { q: "Where do you stay at Pangong?", a: "In camps and a few hotels at Spangmik, Lukung and Man-Merak. Expect cold nights and limited electricity." },
      { q: "When is the best month for Nubra and Pangong?", a: "June to mid-September, when the passes and the Shyok road are normally open." },
    ],
  },

  // ------------------------------------------------------------ Ladakh 8N/9D
  "/tour-packages/ladakh/8-nights-9-days": {
    sections: [
      {
        h: "Best of Ladakh in 8 nights 9 days",
        p: [
          "Eight nights is the length at which Ladakh stops being a rush. After two acclimatisation nights in Leh, you can see Nubra and Turtuk, Pangong and Tso Moriri, with time for the Indus valley monasteries and a rest day. It is the plan most experienced agents recommend for a first trip if you have the leave, and the best length for families and older travellers, because no day has to be a race.",
          "Two common shapes are a fly-in loop from Leh, and a road trip that enters from Srinagar through Kargil and leaves by Manali, which acclimatises you gradually on the way up.",
        ],
      },
      { h: "Acclimatisation", p: [ACCLIMATISE] },
      {
        h: "Day-by-day: 8 nights 9 days fly-in loop from Leh",
        days: [
          "Fly into Leh. Rest all day. Overnight in Leh.",
          "Leh Palace, Shanti Stupa and the old town; an easy day. Overnight in Leh.",
          "Indus valley: Thiksey, Shey and Hemis monasteries, and the Sindhu Ghat. Overnight in Leh.",
          "Drive to Nubra over Khardung La. Diskit Monastery and the Hunder dunes. Overnight in Hunder.",
          "Day trip to Turtuk, a Balti village near the Line of Control opened to visitors in 2010, with apricot orchards and a small museum. Overnight in Hunder.",
          "Drive to Pangong by the Shyok road (or via Leh if it is closed). Overnight at Pangong.",
          "Drive from Pangong to Tso Moriri via Chushul and the Changthang plateau where the road is open, or back to Leh and on to Tso Moriri via Chumathang. Overnight at Korzok.",
          "Morning at Tso Moriri, then drive back to Leh via Tso Kar and Taglang La or via Chumathang. Overnight in Leh.",
          "Morning flight from Leh.",
        ],
      },
      {
        h: "Road-trip version: Srinagar to Leh to Manali",
        p: [
          "If you prefer to drive, enter from Srinagar: Sonamarg, Zojila and Drass to Kargil for the first night (about 204 km), then over Namika La and Fotu La past Lamayuru to Leh (about 215 km). The slow climb helps acclimatisation. After Nubra and Pangong, leave Leh by the Manali highway over Taglang La, the More Plains and Baralacha La, with a night at Sarchu or Jispa, which takes two days to Manali. The Manali highway is usually open from June to October; the Srinagar road a little longer, from about April or May to November.",
          "A road trip needs 10 to 12 nights to be comfortable. On 8 nights, choose the fly-in loop or a one-way road trip, flying out of Leh.",
        ],
      },
      {
        h: "Where you stay over 8 nights",
        list: [
          "Leh (4 nights): family-run hotels and guesthouses around the market, Changspa and Fort Road.",
          "Hunder or Diskit (2 nights): camps and orchard hotels in the Nubra valley, milder than Leh.",
          "Pangong (1 night): camps and a few hotels at Spangmik, Lukung or Man-Merak; very cold at night.",
          "Korzok, Tso Moriri (1 night): homestays, guesthouses and a few camps at about 4,520 m; the highest and coldest night of the trip.",
        ],
      },
      { h: "Permits and taxis", p: [PERMITS, TAXI] },
      {
        h: "What the package includes",
        list: [
          "8 nights of hotels, camps and homestays, usually with breakfast and dinner.",
          "A Leh taxi union cab for the whole circuit, including fuel and the driver's stay.",
          "Protected area registration and environment fees, if listed.",
          "Not included: flights, monastery and museum tickets, camel and ATV rides, oxygen if needed, lunches and tips.",
        ],
      },
      {
        h: "Best time for a long Ladakh trip",
        p: [
          "Mid-June to mid-September is the safest window for the full loop, when Khardung La, Chang La, the Shyok road and the roads to Tso Moriri are normally open and the camps are running. July and August are warmest; September has the clearest skies and is the favourite month of photographers. Late May and early October are possible with flexible plans and warmer clothes.",
        ],
      },
      {
        h: "How to keep a long Ladakh trip comfortable",
        list: [
          "Keep two full nights in Leh before any pass, and one easy day before Tso Moriri, the highest night.",
          "Carry layers for big swings in temperature, sunscreen, lip balm, sunglasses and a warm cap.",
          "Drink water steadily through the day; dry air dehydrates you faster than you notice.",
          "Carry cash, as ATMs are found only in Leh, Diskit and Kargil, and card machines are rare in camps.",
          "Tell your family that you may be out of mobile range for a day or two at a time.",
        ],
      },
    ],
    faqs: [
      { q: "What does an 8 nights 9 days Ladakh trip cover?", a: "Leh and its monasteries, Nubra Valley with Turtuk, Pangong Tso and Tso Moriri, with two nights in Leh to acclimatise first." },
      { q: "Is 8 nights enough for Ladakh?", a: "Yes. It covers all the main circuits without rushing. A road trip from Srinagar and out to Manali needs 10 to 12 nights." },
      { q: "Can I include Turtuk in a Ladakh package?", a: "Yes, as a day trip from Hunder or with a night in Turtuk. Indian visitors register on the LAHDC Leh portal for it." },
      { q: "Can I drive from Pangong to Tso Moriri directly?", a: "There is a route via Chushul and the Changthang plateau when it is open, but many agents go back via Leh or Chumathang. Ask which route is planned." },
      { q: "Is Tso Moriri higher than Pangong?", a: "Yes. Tso Moriri is at about 4,520 m, Pangong at about 4,225 m, so keep Tso Moriri for late in the trip." },
      { q: "Which is better, flying into Leh or driving from Srinagar?", a: "Driving from Srinagar acclimatises you gradually and shows Kargil and Lamayuru, but adds two days. Flying in is quicker but needs two rest days." },
      { q: "When is the Manali to Leh highway open?", a: "Usually from about June to October, depending on snow on the high passes." },
      { q: "Where can I find ATMs in Ladakh?", a: "In Leh, Kargil and Diskit. Carry enough cash for camps and homestays beyond them." },
      { q: "Is an 8-night Ladakh trip suitable for families?", a: "Yes. The extra nights allow rest days and an easier pace. Check with a doctor for small children and older parents." },
      { q: "What is the highest night on the trip?", a: "Korzok at Tso Moriri, at about 4,520 m. It is the coldest night as well; ask for extra blankets." },
    ],
  },

  // ------------------------------------------------------------ Tso Moriri 4N/5D
  "/tour-packages/tso-moriri/4-nights-5-days": {
    sections: [
      {
        h: "Ladakh with Tso Moriri in 4 nights 5 days",
        p: [
          "Tso Moriri is a high, quiet lake at about 4,520 m in the Changthang region of south-eastern Ladakh, about 220 to 240 km from Leh. It is less visited than Pangong, ringed by snowy peaks, and protected as a wetland for its birds, including bar-headed geese and black-necked cranes. The village of Korzok on its western shore has a monastery and a handful of homestays and camps.",
          "On a 4 nights 5 days trip, Tso Moriri replaces Pangong as the one high-altitude overnight after acclimatising in Leh. Because it is higher than Pangong, it must come after at least two full nights in Leh.",
        ],
      },
      { h: "Acclimatisation before Tso Moriri", p: [ACCLIMATISE] },
      {
        h: "Day-by-day: Leh and Tso Moriri",
        days: [
          "Fly into Leh and rest all day. Overnight in Leh.",
          "Easy sightseeing: Shanti Stupa, Leh Palace, Thiksey and Shey. Overnight in Leh.",
          "Drive to Tso Moriri via Upshi, Chumathang's hot springs and Mahe bridge, about 6 to 7 hours. Evening walk by the lake at Korzok. Overnight at Korzok.",
          "Sunrise at Tso Moriri, then drive back to Leh via Tso Kar, the salt lake on the Changthang plateau, and Taglang La, or back the way you came. Overnight in Leh.",
          "Morning flight from Leh.",
        ],
      },
      {
        h: "Adding Hanle",
        p: [
          "Hanle, at about 4,500 m and around 255 to 270 km from Leh, is home to the Indian Astronomical Observatory and the Hanle Dark Sky Reserve, declared in 2022. It pairs naturally with Tso Moriri, as both are reached through Chumathang and Nyoma. Adding it needs at least one more night: Leh 2N, Hanle 1N, Tso Moriri 1N and Leh 1N, which makes a 5 nights 6 days plan. Night sky viewing at Hanle is best on moonless nights from September to March, when the air is clearest, but nights are very cold.",
        ],
      },
      {
        h: "Where you stay at Tso Moriri",
        p: [
          "Korzok has family homestays, a few guesthouses and seasonal camps. Rooms are simple, with shared or basic attached bathrooms, and electricity is often limited to the evening. It is the coldest night of most Ladakh trips; ask for extra blankets and a hot water bottle. Homestays serve home-cooked dinner and breakfast, often with butter tea and thukpa.",
        ],
      },
      { h: "Permits and local taxis", p: [PERMITS, TAXI] },
      {
        h: "Tso Moriri or Pangong?",
        list: [
          "Pangong is easier to reach, has more camps and is the classic photograph. It is busier.",
          "Tso Moriri is higher, quieter and wilder, with nomad camps and birdlife. Facilities are simpler.",
          "On a short trip choose one. On 7 nights or more, see both, with Tso Moriri last.",
        ],
      },
      {
        h: "When to go",
        p: [
          "June to September is the season, with July and August warmest and September clearest. The lake begins to freeze from about December, and in winter the road and homestays may be closed. Bring warm clothes even in July: night temperatures at Korzok can drop close to freezing.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Tso Moriri from Leh?", a: "About 220 to 240 km, 6 to 7 hours via Upshi, Chumathang and Mahe." },
      { q: "How high is Tso Moriri?", a: "About 4,520 m, higher than Pangong. Spend at least two full nights in Leh before going." },
      { q: "Can I visit Tso Moriri and Pangong in one trip?", a: "Yes, on 7 nights or more. On a 4-night trip, pick one." },
      { q: "Where do you stay at Tso Moriri?", a: "In homestays, guesthouses and camps at Korzok. Expect simple rooms and limited electricity." },
      { q: "Do I need a permit for Tso Moriri?", a: "Yes. Indian visitors register on the LAHDC Leh portal; foreign nationals need a Protected Area Permit through an agent." },
      { q: "Can I add Hanle to a Tso Moriri trip?", a: "Yes, with one more night. Hanle and Tso Moriri are both reached via Chumathang and Nyoma." },
      { q: "What is Tso Kar?", a: "A salt lake on the Changthang plateau, often visited on the way back from Tso Moriri to Leh via Taglang La." },
      { q: "When is the best time to visit Tso Moriri?", a: "June to September. July and August are warmest; September has the clearest skies." },
      { q: "Is Tso Moriri safe for senior citizens?", a: "It is the highest night of most Ladakh trips. With a doctor's advice and proper acclimatisation it can be done; otherwise Nubra is easier." },
      { q: "Is there mobile coverage at Tso Moriri?", a: "Very limited. Only postpaid connections work in Ladakh, and signal at Korzok is weak or absent." },
    ],
  },

  // ------------------------------------------------------------ Kargil hub
  "/tour-packages/kargil": {
    sections: [
      {
        h: "Kargil packages: what they cover",
        p: [
          "Kargil, at about 2,676 m on the Suru river, is Ladakh's second town and the halfway stop on the Srinagar to Leh highway. Most travellers see it on a road trip into Ladakh from Kashmir: Srinagar to Kargil is about 204 km over Zojila, and Kargil to Leh about 215 km over Namika La and Fotu La. A night in Kargil breaks the journey and helps acclimatisation, because you climb gradually instead of flying straight to 3,500 m.",
          "Kargil is also the gateway to the Suru valley and Zanskar, and to Drass, about 60 km west, with the Kargil War Memorial that honours the soldiers of the 1999 conflict.",
        ],
      },
      {
        h: "Day-by-day: Srinagar to Leh via Kargil, 7 nights 8 days",
        days: [
          "Arrive in Srinagar. Shikara on Dal Lake. Overnight in Srinagar.",
          "Drive to Sonamarg, then over Zojila to Drass and the Kargil War Memorial, and on to Kargil, about 7 to 8 hours with stops. Overnight in Kargil.",
          "Drive to Leh via Mulbekh's rock-carved Maitreya, Namika La, Fotu La and Lamayuru's moonland, about 7 hours. Overnight in Leh.",
          "Rest and easy sightseeing in Leh: Shanti Stupa and Leh Palace. Overnight in Leh.",
          "Drive to Nubra over Khardung La. Diskit Monastery and the Hunder dunes, with an optional day trip to Turtuk. Overnight in Nubra.",
          "Drive to Pangong by the Shyok road, or back via Leh. Overnight at Pangong.",
          "Drive back to Leh over Chang La, stopping at Thiksey. Overnight in Leh.",
          "Morning flight from Leh.",
        ],
      },
      {
        h: "Things to see around Kargil",
        list: [
          "Kargil War Memorial at Drass, with the Veer Bhoomi wall and a view of Tololing and Tiger Hill.",
          "Drass, often called one of the coldest inhabited places in India, with the Drass river valley.",
          "Mulbekh, about 40 km towards Leh, with a 9 m Maitreya Buddha carved into a rock face.",
          "The Kargil bazaar and the Munshi Aziz Bhat museum of Central Asian trade goods.",
          "The Suru valley, south of Kargil, with views of the Nun and Kun peaks on the way towards Zanskar.",
          "Hundarman, an old village near the Line of Control, now a small museum of village life.",
        ],
      },
      {
        h: "Where you stay in Kargil",
        p: [
          "Kargil has hotels in every range along the main road and near the Suru river, most of them simple but warm. Drass has a few small hotels. Because Kargil is a stopover, one night is usual; two nights make sense only if you are visiting the Suru valley or heading into Zanskar.",
        ],
      },
      {
        h: "When the road through Kargil is open",
        p: [
          "The Srinagar to Leh highway over Zojila usually opens around April or May and closes in November or December, depending on snow. The best months for a road trip are June to September. Kargil itself is reachable year-round from the Leh side, and winters there are very cold.",
          TAXI,
        ],
      },
    ],
    faqs: [
      { q: "How far is Kargil from Srinagar and Leh?", a: "About 204 km from Srinagar over Zojila and about 215 km from Leh over Namika La and Fotu La." },
      { q: "Do I need a permit to visit Kargil?", a: "No permit is needed for Kargil town or the Srinagar to Leh highway. Hundarman and the Line of Control areas may need registration; check locally." },
      { q: "Is it worth staying a night in Kargil?", a: "Yes, on a road trip from Srinagar to Leh. It breaks a long drive and helps your body adjust to altitude." },
      { q: "What is there to see in Drass?", a: "The Kargil War Memorial, with views of Tololing and Tiger Hill, and the Drass valley." },
    ],
  },

  // ------------------------------------------------------------ Tso Moriri hub
  "/tour-packages/tso-moriri": {
    sections: [
      {
        h: "Tso Moriri packages at a glance",
        p: [
          "Tso Moriri is a high-altitude lake at about 4,520 m in the Rupshu valley of the Changthang region, about 220 to 240 km south-east of Leh. It is about 19 km long and fed by snow melt, with no outlet, and is protected as a Ramsar wetland for its birdlife. The village of Korzok, with its old monastery, is the only settlement on the shore, and the Changpa nomads graze yak, sheep and pashmina goats on the plateau around it.",
          "Tso Moriri is quieter and wilder than Pangong, and it is higher, so packages always put it after two nights in Leh. On a short trip it replaces Pangong; on a longer one it is the finale, often paired with Tso Kar or Hanle.",
        ],
      },
      { h: "Acclimatisation", p: [ACCLIMATISE] },
      {
        h: "Day-by-day: 7 nights 8 days Ladakh with Tso Moriri",
        days: [
          "Fly into Leh and rest all day. Overnight in Leh.",
          "Leh Palace, Shanti Stupa and the market on foot. Overnight in Leh.",
          "Thiksey, Shey and Hemis monasteries in the Indus valley. Overnight in Leh.",
          "Drive to Nubra over Khardung La, Diskit and Hunder. Overnight in Nubra.",
          "Drive to Pangong by the Shyok road. Overnight at Pangong.",
          "Back to Leh via Chang La. Overnight in Leh.",
          "Drive to Tso Moriri via Chumathang and Mahe. Overnight at Korzok.",
          "Back to Leh via Tso Kar and Taglang La, or via Chumathang, for an evening or next-morning flight. Many agents add one more Leh night to avoid an afternoon flight.",
        ],
      },
      {
        h: "The drive to Tso Moriri",
        p: [
          "From Leh, the road follows the Indus upstream through Upshi and Kiari to Chumathang, known for its hot springs, then crosses the river at Mahe bridge, where the protected area check post is, and climbs past Sumdo to the lake. Allow 6 to 7 hours. The return can go the same way, or west across the plateau to Tso Kar, a salt lake, and over Taglang La to the Manali highway and back to Leh, which is about as long but more varied.",
          "There are few places to eat on the way; carry lunch, water and warm layers. Fuel is available in Leh and at a few points on the highway, so drivers fill up in Leh.",
        ],
      },
      {
        h: "What to see and do at Tso Moriri",
        list: [
          "The walk along the western shore at Korzok, at sunrise or late afternoon when the light on the lake is best.",
          "Korzok Monastery, a small Drukpa monastery above the village.",
          "Birdwatching for bar-headed geese, great crested grebes, brown-headed gulls and, with luck, black-necked cranes in summer.",
          "Changpa nomad camps on the plateau, visited only with a guide and with respect.",
          "Tso Kar and its salt flats on the way back, and the kiang (wild ass) often seen on the Changthang plains.",
          "Stargazing: with almost no light around, the night sky is extraordinary.",
        ],
      },
      {
        h: "Where you stay",
        p: [
          "Korzok has homestays run by local families, a few guesthouses and seasonal camps, most of them simple. Electricity is often available only in the evening, and nights can drop close to freezing even in July. Homestays are the warmer option, with meals cooked in the family kitchen. Camping on the lake shore itself is not allowed, to protect the wetland.",
        ],
      },
      { h: "Permits and taxis", p: [PERMITS, TAXI] },
      {
        h: "Best time to visit Tso Moriri",
        p: [
          "June to September. June can still have snow on the high ground; July and August are warmest and greenest on the plateau; September is clear and quiet, with the first hard frosts by its end. From about November the lake starts to freeze, and most homestays close for winter.",
        ],
      },
      {
        h: "Responsible travel at Tso Moriri",
        list: [
          "Stay in local homestays where you can; the income stays in the village.",
          "Do not drive or walk on the marshy edges where birds nest.",
          "Carry your plastic back to Leh; there is no waste collection on the plateau.",
          "Ask before photographing people, nomads and their animals.",
        ],
      },
    ],
    faqs: [
      { q: "Is Tso Moriri worth visiting?", a: "Yes, if you want a quiet, high lake with birdlife and nomad camps rather than the crowds at Pangong. Facilities are simpler." },
      { q: "Can I camp at Tso Moriri?", a: "Camping on the lake shore is not allowed. Stay in the homestays, guesthouses or approved camps at Korzok." },
    ],
  },

  // ------------------------------------------------------------ Zanskar hub
  "/tour-packages/zanskar": {
    sections: [
      {
        h: "What a Zanskar trip involves",
        p: [
          "Zanskar is the most remote valley in Ladakh, a high, dry basin around the town of Padum at about 3,600 m, ringed by the Great Himalayan and Zanskar ranges. It is reached by road from Kargil, about 230 km south through the Suru valley, Rangdum and the Pensi La at about 4,400 m, a drive of 9 to 11 hours that most travellers break with a night at Rangdum. Its monasteries, cliff-top villages and the Drang Drung glacier are why people make the effort.",
          "Zanskar trips are long, 10 to 13 nights, because the road is slow and the valley is big. The usual route is Srinagar to Kargil, Kargil to Zanskar, and out through Kargil to Leh, or the reverse.",
        ],
      },
      {
        h: "Day-by-day: Zanskar valley tour, 12 nights 13 days",
        days: [
          "Arrive in Srinagar. Shikara on Dal Lake. Overnight in Srinagar.",
          "Drive to Kargil over Zojila, with a stop at the Kargil War Memorial in Drass. Overnight in Kargil.",
          "Drive into the Suru valley past Sankoo and Panikhar, with views of Nun and Kun, to Rangdum. Overnight in Rangdum.",
          "Rangdum Monastery in the morning, then over Pensi La past the Drang Drung glacier to Padum. Overnight in Padum.",
          "Karsha Monastery, the largest in Zanskar, on the hillside across the valley from Padum. Overnight in Padum.",
          "Stongde and Zangla, with the old palace ruins at Zangla. Overnight in Padum.",
          "Day towards Phugtal: drive to the road head and walk to Phugtal Monastery, built into a cliff cave above the Tsarap river, if you are fit; otherwise Sani Monastery near Padum. Overnight in Padum or at a homestay near the trail.",
          "Rest day in Padum, or a village walk to Pipiting. Overnight in Padum.",
          "Back over Pensi La to Rangdum or Kargil. Overnight on the way.",
          "Drive to Kargil. Overnight in Kargil.",
          "Drive to Leh via Mulbekh, Fotu La and Lamayuru. Overnight in Leh.",
          "Leh sightseeing: Shanti Stupa, Leh Palace and Thiksey. Overnight in Leh.",
          "Morning flight from Leh.",
        ],
      },
      {
        h: "The road to Padum",
        p: [
          "The Kargil to Padum road is paved in parts and rough in others, with stream crossings near Rangdum and the climb to Pensi La. It is usually open from about June to October; in early June there can still be snow walls at the pass, and in late September the first snow. The view of the Drang Drung glacier from the far side of Pensi La is one of the great sights of the Himalaya.",
          "Other ways in are developing, including a road from Manali through Darcha and Shinku La; check current conditions with your agent before planning a route on them.",
        ],
      },
      {
        h: "Monasteries and sights in Zanskar",
        list: [
          "Karsha: the largest monastery in Zanskar, a cluster of whitewashed buildings climbing the hillside opposite Padum.",
          "Phugtal: built into a cave in a cliff above the Tsarap river, reached only on foot.",
          "Stongde: on a ridge above the valley floor, with wide views towards Padum.",
          "Rangdum: a fortress-like monastery on a hillock in the upper Suru valley.",
          "Sani: one of the oldest religious sites in Zanskar, near Padum, with a Kanika stupa.",
          "Zangla: the ruins of the old royal palace, and a nunnery.",
        ],
      },
      {
        h: "Where you stay",
        p: [
          "Padum has guesthouses and small hotels; Rangdum has a few camps and guesthouses; elsewhere, homestays. All are simple, and electricity and hot water may be limited. Homestays serve meals with the stay, and Padum has a few small restaurants. There is no luxury option in Zanskar, whatever the rest of the package uses.",
        ],
      },
      {
        h: "Practical points for Zanskar",
        list: [
          "Mobile coverage is very limited, with BSNL the most likely network in Padum; tell family you will be out of reach.",
          "ATMs are few and unreliable; carry enough cash for the whole Zanskar part of the trip.",
          "Fuel is available in Kargil and Padum only; drivers fill up before Pensi La.",
          "Pack for big temperature swings: hot sun at midday, near freezing at night.",
          "Leh taxi union and Kargil taxi union cabs run these routes; outside taxis are not allowed for local sightseeing.",
        ],
      },
      {
        h: "Winter in Zanskar: the Chadar trek",
        p: [
          "In January and February, when the road is closed, the frozen Zanskar river becomes the Chadar trek, a walk on ice through the gorge between Chilling and the Zanskar villages. It is a regulated trek: trekkers must spend days acclimatising in Leh, pass a medical check, and hold the required permits and insurance before starting. It is not part of a standard Zanskar tour package.",
        ],
      },
    ],
    faqs: [
      { q: "How do you reach Zanskar?", a: "By road from Kargil, about 230 km through the Suru valley and over Pensi La, usually with a night at Rangdum. The road is open from about June to October." },
      { q: "How many days do I need for Zanskar?", a: "At least 10 nights from Srinagar or Leh, and 12 to 13 to see the main monasteries and Phugtal without rushing." },
      { q: "Do I need a permit for Zanskar?", a: "Indian visitors do not need a special permit for Padum and the main valley; carry original ID. Rules can change, so check with your agent." },
      { q: "Is there mobile network in Zanskar?", a: "Very limited. BSNL is the most likely network in Padum; elsewhere expect no signal." },
    ],
  },
};
