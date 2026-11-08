import type { BlogPost } from "./types";

// Depth for the competitor-gap batch 1 posts (kashmir-places-deep.ts and
// kashmir-months-deep.ts): extra sections and FAQs appended to each post.
// Same fact rules as those files: no fares or timetables, no em dashes.

type More = { sections: BlogPost["sections"]; faqs: BlogPost["faqs"] };

export const KASHMIR_DEEP_MORE: Record<string, More> = {
  "doodhpathri-travel-guide": {
    sections: [
      {
        h: "Doodhpathri in winter: snow, road and what to expect",
        p: [
          "From December to February Doodhpathri is covered in snow and looks completely different: a white bowl ringed by snow-laden pines, with the Shaliganga running dark between the drifts. It is quieter than Gulmarg because there is no Gondola or ski infrastructure, which suits travellers who just want to walk in snow and take photos.",
          "The road beyond Khansahib is cleared after snowfall, but it can stay closed for a day or two after a heavy spell, and the last few kilometres can be icy. Stalls and huts mostly close in deep winter. Go with a local driver who checks the road that morning, carry snacks and hot drinks, and keep the trip to daylight hours.",
        ],
      },
      {
        h: "Doodhpathri for families, couples and older travellers",
        list: [
          "Families: the riverbank and the flat parts of the meadow are easy for children; keep them away from the water's edge.",
          "Couples: go on a weekday and walk away from the parking area towards Palmaidan for quiet and views.",
          "Older travellers: the meadow is gently sloping near the road, and ponies can carry those who cannot walk far. Carry a folding stool or mat for picnics.",
          "Photographers: early morning light on the river and late afternoon light on the forest edge are best; autumn grass turns gold in October.",
        ],
      },
      {
        h: "Adding Doodhpathri to a Kashmir package",
        p: [
          "Doodhpathri fits as a relaxed extra day on any Srinagar-based trip of five nights or more. Agents usually place it on a day between Gulmarg and Pahalgam, or use it as a replacement for Sonamarg when Sonamarg's road is closed after snow. Ask for a private cab for the day rather than a shared one; it lets you leave early and come back before dark.",
        ],
      },
      {
        h: "Mistakes to avoid at Doodhpathri",
        list: [
          "Arriving after noon on a summer weekend, when the parking and riverbank are busy with local picnickers.",
          "Taking a pony without agreeing the route and rate first.",
          "Wading into the Shaliganga for photos; the current is much stronger than it looks.",
          "Trying the road in winter without checking that it is open.",
          "Leaving without warm layers; the weather turns quickly.",
        ],
      },
    ],
    faqs: [
      { q: "Is there snow in Doodhpathri in winter?", a: "Yes, from about December to February, and often into March. The road can close after heavy snowfall." },
      { q: "Are ponies available in Doodhpathri?", a: "Yes, run by the local association at fixed rates for set routes. Agree the route and rate before you start." },
      { q: "Is Doodhpathri good for a family trip?", a: "Yes. The meadow is open and gentle near the road, but keep children away from the river." },
    ],
  },
  "achabal-garden-kashmir-guide": {
    sections: [
      {
        h: "Achabal through the seasons",
        list: [
          "Spring (April to May): fresh lawns, tulip and flower beds, and the spring at full strength from snowmelt.",
          "Summer (June to August): deep shade under the chinars and cool air beside the water channels; the best time for a long, slow visit.",
          "Autumn (October to early November): the chinars turn red and gold, making Achabal one of the most photogenic gardens in Kashmir.",
          "Winter (December to February): bare trees and frosty mornings; quiet, with the spring still flowing.",
        ],
      },
      {
        h: "Places near Achabal",
        list: [
          "Kokernag botanical garden and springs, about 20 km away.",
          "Verinag, the octagonal spring pool at the source of the Jhelum.",
          "Daksum and Sinthan Top beyond Kokernag, in summer.",
          "Martand Sun Temple ruins near Mattan, on the road to Pahalgam.",
          "Pahalgam, about 50 km away up the Lidder valley.",
          "Anantnag town, with the Nagbal spring and old markets.",
        ],
      },
      {
        h: "Photography and etiquette",
        p: [
          "The best photographs are from the top terrace looking down the central channel, and from beside the stone chutes where the water foams white. Morning light is softest. Achabal is a public garden used by local families, so ask before photographing people, keep music low and use the bins provided.",
        ],
      },
      {
        h: "Adding Achabal to your Kashmir trip",
        p: [
          "Ask your agent to route the Srinagar to Pahalgam drive via Anantnag and Achabal; it adds about an hour including the visit. On a longer trip, a south Kashmir day from Srinagar or Pahalgam can cover Achabal, Kokernag, Verinag and Martand together.",
        ],
      },
    ],
    faqs: [
      { q: "Is Achabal Garden open in winter?", a: "Yes, in daylight hours, though it is quiet and the trees are bare. Spring and autumn are the best seasons." },
      { q: "How much time do I need at Achabal?", a: "One to two hours is enough for the garden and the spring." },
      { q: "Which is better, Achabal or Shalimar Bagh?", a: "Shalimar is larger and on Dal Lake; Achabal is smaller, quieter and has a more powerful spring. See Shalimar if you have only one garden day." },
    ],
  },
  "aharbal-waterfall-kokernag-verinag-guide": {
    sections: [
      {
        h: "Aharbal in winter",
        p: [
          "In the coldest weeks of winter the edges of the Aharbal falls freeze into ice curtains while water still thunders through the centre. The road from Kulgam can close after heavy snow, and the viewpoints become icy. If you want to see the falls in winter, go only after your driver confirms the road, wear boots with grip and stay well back from the edge.",
        ],
      },
      {
        h: "Kounsarnag trek from Aharbal",
        p: [
          "Aharbal is the starting point for the trek to Kounsarnag, a high glacial lake on the Pir Panjal ridge that feeds the Veshaw river. The route passes Kongwattan meadow, about 8 km beyond Aharbal, and usually takes three days with camping. It is done only in mid-summer with a registered local guide, and access can be restricted, so check the current status before planning.",
        ],
      },
      {
        h: "Food and stays in south Kashmir",
        p: [
          "There are tea and snack stalls near the Aharbal falls in season, and simple restaurants in Kokernag and Kulgam. Kokernag and Daksum have tourism department lodges and small hotels, and Pahalgam is a good base for a south Kashmir loop. Trout from the Kokernag fish farm is a local speciality in nearby restaurants.",
        ],
      },
      {
        h: "Who this day trip suits",
        list: [
          "Travellers on a second or third Kashmir trip who have already seen Gulmarg and Pahalgam.",
          "Photographers: the falls, the spring gardens and the autumn forests.",
          "Families who want short walks and picnics rather than long treks.",
          "Anyone driving between Srinagar and Jammu, as Verinag is near the highway.",
        ],
      },
    ],
    faqs: [
      { q: "Is Aharbal safe to visit?", a: "Yes, from the viewpoints. Stay behind the railings: the rocks are wet and the current is extremely strong." },
      { q: "What is Kokernag famous for?", a: "Its freshwater springs and botanical garden, and its trout farm." },
      { q: "How far is Verinag from Srinagar?", a: "About 80 km, around 2.5 hours by road via Anantnag and Qazigund." },
    ],
  },
  "drung-waterfall-kashmir-guide": {
    sections: [
      {
        h: "How the frozen waterfall forms",
        p: [
          "Drung freezes from the edges inwards. After several nights well below freezing, spray and trickles build up ice on the rocks, and in a long cold spell the whole face of the fall turns into a frozen curtain, sometimes with water still running behind it. A single cold night is not enough, and a sunny, mild day can start melting it again. That is why reports of a frozen Drung come and go during winter.",
        ],
      },
      {
        h: "Drung in summer and autumn",
        p: [
          "Outside winter, Drung is a small cascade in a green side valley with willows, walnut trees and fields, a pleasant ten-minute stop on the Gulmarg road. In October the surrounding trees turn yellow and the light is soft, making it a quiet photo stop before the climb to Gulmarg.",
        ],
      },
      {
        h: "Best time of day to visit",
        list: [
          "Morning, on the way up to Gulmarg, for soft light and fewer cars.",
          "Avoid mid-afternoon on winter weekends, when the lane can jam with returning Gulmarg traffic.",
          "Allow 30 to 45 minutes in total, including the short walk and photos.",
        ],
      },
      {
        h: "Nearby: Tangmarg, Ferozpora and the Gulmarg road",
        p: [
          "Tangmarg is the last town before Gulmarg, where cabs fit snow chains in winter and where many hotels sit below the snow line. The forest road from Tangmarg to Gulmarg climbs through pines that look spectacular after fresh snow. Ferozpora nallah, along the valley floor, is a quieter spot for a riverside stop in summer.",
        ],
      },
    ],
    faqs: [
      { q: "Is there an entry fee for Drung waterfall?", a: "No fixed entry ticket has been reported for the falls; you may pay local parking. Confirm on the day." },
      { q: "Can kids visit the frozen Drung waterfall?", a: "Yes, with care. Hold their hands on the icy path and keep them off the frozen stream." },
      { q: "Is Drung worth a separate trip?", a: "No. Visit it as a short detour on a Gulmarg day, ideally when it is frozen." },
    ],
  },
  "bangus-valley-kashmir-guide": {
    sections: [
      {
        h: "Bod Bangus and Lokut Bangus",
        p: [
          "Bangus is made up of a larger valley, Bod Bangus, and a smaller one, Lokut Bangus, linked by low ridges. Bod Bangus is the vast, rolling meadow that most photos show, with streams meandering across it. Lokut Bangus is more enclosed and forested. In summer, Gujjar and Bakarwal herders bring their flocks up to graze, and their seasonal huts dot the edges of the meadows.",
        ],
      },
      {
        h: "Combining Bangus with Lolab Valley and Kupwara",
        p: [
          "Bangus sits in the same district as Lolab Valley, known for its apple and walnut orchards and the Kalaroos caves, and Kupwara town. A 3 to 4 day north Kashmir loop can cover Lolab, Bangus and Handwara, returning to Srinagar via Sopore and its large fruit market. These areas see few tourists, so plan with an agent who works there.",
        ],
      },
      {
        h: "Who Bangus is for",
        list: [
          "Travellers who want an untouched meadow and do not mind basic facilities.",
          "Campers and walkers comfortable at around 3,000 m.",
          "Photographers looking for wide landscapes without crowds.",
          "Not ideal for first-time visitors with little time, very young children or anyone needing hotel comforts.",
        ],
      },
      {
        h: "Altitude and health",
        p: [
          "At about 3,000 m, Bangus is higher than Gulmarg. Most healthy travellers are fine for a short stay, but walk slowly at first, drink water and avoid alcohol on the first evening. Anyone with heart or lung conditions should check with a doctor before going.",
        ],
      },
    ],
    faqs: [
      { q: "What is the altitude of Bangus Valley?", a: "About 3,000 m (around 10,000 ft) on the meadow floor." },
      { q: "Is Bangus Valley open to tourists?", a: "In summer, subject to local access rules for this border district. Check the current status with your agent before travelling." },
      { q: "Is Bangus better than Gulmarg?", a: "They are very different: Gulmarg has the Gondola and hotels; Bangus is a remote, undeveloped meadow with basic stays." },
    ],
  },
  "kashmir-in-march": {
    sections: [
      {
        h: "Gulmarg in March",
        p: [
          "Gulmarg in March is still a snow resort. The meadow is white, the Gondola runs when the weather allows, and early March is often good for skiing, with softer spring snow later in the month. Days are brighter and less harsh than in January, which makes March a comfortable month for families who want snow without the deepest cold.",
        ],
      },
      {
        h: "Pahalgam and Sonamarg in March",
        p: [
          "Pahalgam's town and Betaab Valley are usually reachable, with snow in the forests and on the higher slopes; Aru may be accessible only after the road is cleared. Sonamarg can be reached through the Z-Morh tunnel, but heavy snow can still close the road for a day or two, and beyond Sonamarg the Zojila road stays shut. Treat both as weather-dependent days and keep a flexible plan.",
        ],
      },
      {
        h: "Kashmir in March for honeymoon couples",
        p: [
          "March works well for couples: snow in Gulmarg for photos, a heated houseboat night on Dal or Nigeen Lake, and blossom or early tulips in Srinagar. Ask for rooms with reliable heating and hot water, and keep one buffer day in case a snowfall or rain spell delays a drive.",
        ],
      },
      {
        h: "Value and crowds in March",
        p: [
          "Early and mid March are some of the best-value weeks of the year, with lower hotel rates than December, April or May. Prices start to climb in the last week of March, once the Tulip Garden opens and spring holiday demand begins. Booking two to three weeks ahead is usually enough outside the tulip weeks.",
        ],
      },
      {
        h: "Mistakes to avoid in March",
        list: [
          "Booking only light spring clothes: Gulmarg is still freezing.",
          "Planning a fixed Sonamarg day: snow can close the road.",
          "Assuming the Tulip Garden is open on 1 March; it opens mid to late month.",
          "Expecting to drive to Ladakh: Zojila is still closed.",
        ],
      },
    ],
    faqs: [
      { q: "Is Gulmarg covered in snow in March?", a: "Yes, Gulmarg usually keeps its snow cover through March, with fresh falls possible early in the month." },
      { q: "Is Kashmir good for a honeymoon in March?", a: "Yes. Snow in Gulmarg, a houseboat night and the start of spring in Srinagar make it a quiet, romantic month." },
      { q: "Is Sonamarg open in March?", a: "It can be reached through the Z-Morh tunnel, but heavy snow can close the road for a day or two. Check before going." },
    ],
  },
  "kashmir-in-april": {
    sections: [
      {
        h: "Gulmarg, Pahalgam and Sonamarg in April",
        p: [
          "In Gulmarg the meadow thaws through April, but the Gondola stations at Kongdori and Apharwat keep their snow, so you get green below and white above. Pahalgam turns fresh green along the Lidder, with snow on the surrounding peaks and Aru and Chandanwari opening as roads are cleared. Sonamarg is cool with snow on the slopes and around the Thajiwas glacier.",
        ],
      },
      {
        h: "Kashmir in April for families",
        p: [
          "April is comfortable for children and older parents: days are mild, the gardens are easy to walk, and snow is reachable by Gondola rather than long hikes. Book family rooms and Gondola tickets early, and plan the Tulip Garden for a weekday morning to avoid the crowds.",
        ],
      },
      {
        h: "Photography in April",
        list: [
          "Tulip Garden rows with the Zabarwan hills behind, in early morning light.",
          "Nishat and Shalimar terraces with fountains running.",
          "Snow at Apharwat against blue spring skies.",
          "Green Betaab Valley framed by snow peaks.",
          "Dal Lake at sunset from a shikara.",
        ],
      },
      {
        h: "Mistakes to avoid in April",
        list: [
          "Visiting the Tulip Garden at midday on a weekend, when it is most crowded.",
          "Not booking Gondola tickets in advance; April slots sell out.",
          "Packing only for warm weather; evenings and Gulmarg are cold.",
          "Leaving the Tulip Garden to the last days of April, when the season may already have ended.",
        ],
      },
    ],
    faqs: [
      { q: "Is the Tulip Garden open in April?", a: "Yes, for most of April in a normal season. It usually closes around the middle or third week of the month." },
      { q: "Is Kashmir crowded in April?", a: "Yes, especially around the tulip bloom and holiday weekends. Book hotels and Gondola tickets early." },
      { q: "What to wear in Kashmir in April?", a: "Light layers for the day, a warm jacket for evenings and Gulmarg, and an umbrella or rain shell." },
    ],
  },
  "kashmir-in-may": {
    sections: [
      {
        h: "Kashmir in May for families with children",
        p: [
          "May is the classic family month: long days, mild weather and everything open. Base in Srinagar with one night in Gulmarg or Pahalgam, keep driving days short, and plan snow at the Gondola or the Thajiwas glacier rather than long walks. Carry sunscreen and hats; the sun is strong at altitude even when the air is cool.",
        ],
      },
      {
        h: "Gurez, Zojila and the Ladakh road in May",
        p: [
          "May is when the high roads reopen. Zojila, the pass from Sonamarg into Ladakh, usually reopens in spring, and the Srinagar to Leh road becomes possible once it does, often with high snow walls. The Razdan Pass road to Gurez typically opens around late May or June. Opening dates depend on snow, so check with your agent before planning these routes.",
        ],
      },
      {
        h: "Value and pricing in May",
        p: [
          "May is high season, and package prices reflect it, especially in the second half of the month when school holidays begin across India. The first week of May is often a little cheaper and calmer. Book four to six weeks ahead for the best choice of hotels, and compare quotes for the same hotel category and meal plan.",
        ],
      },
      {
        h: "Mistakes to avoid in May",
        list: [
          "Trying to cover Srinagar, Gulmarg, Pahalgam and Sonamarg in four days with long drives each day.",
          "Arriving at the Gondola or union taxi stands late in the morning.",
          "Assuming Baisaran is open; it has been closed since April 2025.",
          "Not carrying a jacket for the Gondola top and Sonamarg.",
        ],
      },
    ],
    faqs: [
      { q: "Is May good for a family trip to Kashmir?", a: "Yes. The weather is mild, everything is open and snow is reachable by Gondola, though it is busy." },
      { q: "Is Zojila open in May?", a: "It usually reopens in spring, often by May, depending on snow. Check the current status before planning a Ladakh drive." },
      { q: "How many days are enough for Kashmir in May?", a: "Five to six nights covers Srinagar, Gulmarg, Pahalgam and Sonamarg comfortably." },
    ],
  },
  "kashmir-in-june": {
    sections: [
      {
        h: "Gulmarg, Pahalgam and Sonamarg in June",
        p: [
          "Gulmarg in June is green and full of wildflowers, with snow only at Apharwat; it is busy but cool, and a night there lets you enjoy the meadow after the day-trippers leave. Pahalgam is at its most lively, with full rivers for rafting and union taxis to Aru, Betaab and Chandanwari. Sonamarg's Thajiwas glacier is the easiest place to touch snow, by pony or on foot.",
        ],
      },
      {
        h: "Gurez and Ladakh in June",
        p: [
          "June is a good month to add Gurez, over Razdan Pass, for the Kishanganga valley, Habba Khatoon peak and Dawar's wooden villages; a permit is needed and agents arrange it. It is also a popular month to drive from Srinagar to Leh via Zojila, Drass and Kargil, with a night in Kargil, and continue into Ladakh.",
        ],
      },
      {
        h: "Kashmir in June for honeymoon couples",
        p: [
          "For couples, June means long evenings, cool nights in the hills and lively Srinagar. Choose a quieter houseboat on Nigeen Lake, stay in Gulmarg or Pahalgam rather than day-tripping, and do the busiest sights early in the morning.",
        ],
      },
      {
        h: "Mistakes to avoid in June",
        list: [
          "Expecting snowfall; there is snow only at high points.",
          "Leaving Gondola booking to the last minute.",
          "Overlooking the Amarnath Yatra dates when planning Pahalgam and Sonamarg.",
          "Skipping sunscreen at altitude.",
        ],
      },
    ],
    faqs: [
      { q: "Is Kashmir hot in June?", a: "Srinagar is warm, around 26 to 30°C by day. The hill resorts are much cooler." },
      { q: "Can I go to Ladakh from Kashmir in June?", a: "Yes, by road from Srinagar via Zojila and Kargil, usually over two days with a night in Kargil." },
      { q: "Is Gulmarg crowded in June?", a: "Yes. Stay a night there and start Gondola rides early to avoid the worst queues." },
    ],
  },
  "kashmir-in-october": {
    sections: [
      {
        h: "Gulmarg, Pahalgam and Sonamarg in October",
        p: [
          "Gulmarg in October has golden meadows, red and yellow forest edges and very clear views from the Gondola; nights are near freezing. Pahalgam's riverside poplars and willows turn yellow, and Aru Valley is especially beautiful. Sonamarg is quiet and cold, and many of its hotels start closing for winter towards the end of the month, so check before planning a night there.",
        ],
      },
      {
        h: "Kashmir in October for couples and photographers",
        p: [
          "October is one of the best months for a honeymoon or a photography trip: soft light, clear skies, few crowds and autumn colour everywhere. Plan chinar walks in Srinagar's gardens in the late afternoon, sunrise on Dal Lake by shikara, and a night in Gulmarg or Pahalgam for starry skies.",
        ],
      },
      {
        h: "Gurez and the high roads in October",
        p: [
          "Early October is a good last window for Gurez before the Razdan Pass road closes with the first heavy snow, usually in November. Zojila and the Srinagar to Leh road also stay open into autumn but can close at short notice after snowfall. Ask your agent to confirm the road status close to your dates.",
        ],
      },
      {
        h: "Mistakes to avoid in October",
        list: [
          "Packing only for warm days; mornings and nights are cold.",
          "Planning a night in Sonamarg late in the month without checking that the hotel is still open.",
          "Expecting snow; it is a bonus late in the month, not a given.",
          "Ignoring the Diwali week, when prices and crowds rise briefly.",
        ],
      },
    ],
    faqs: [
      { q: "Is October good for a honeymoon in Kashmir?", a: "Yes. Clear skies, autumn colours and fewer crowds make it one of the most romantic months." },
      { q: "Is Gurez open in October?", a: "Usually in early October. The Razdan Pass road closes with the first heavy snow, typically in November." },
      { q: "What to wear in Kashmir in October?", a: "A warm jacket, sweater and cap for mornings and nights, with lighter layers for the day." },
    ],
  },
};

import { KASHMIR_BATCH_2_MORE } from "./kashmir-batch-2-more";
import { KASHMIR_BATCH_3_MORE } from "./kashmir-batch-3-more";

const ALL_MORE: Record<string, More> = { ...KASHMIR_DEEP_MORE, ...KASHMIR_BATCH_2_MORE, ...KASHMIR_BATCH_3_MORE };

export function withDeepMore(posts: BlogPost[]): BlogPost[] {
  return posts.map((p) => {
    const m = ALL_MORE[p.slug];
    return m ? { ...p, sections: [...p.sections, ...m.sections], faqs: [...p.faqs, ...m.faqs] } : p;
  });
}
