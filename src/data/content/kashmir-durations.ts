// Batch 3 of the five-competitor Kashmir study (2026-11-15): copy for the
// Kashmir trip-length pages (/tour-packages/kashmir/{n}-nights-{m}-days),
// stored as packages.durations on the destination. Merged additively by
// data/content/index.ts and pushed to the live database by the one-time
// kashmir-places-push endpoint. No typed prices or fares; live package
// prices are shown on the page itself.

import type { GuideContent, SectionContent } from "@/lib/locations";

const COSTS_LOCAL =
  "Most Kashmir packages include hotel or houseboat nights, breakfast and dinner on many plans, a private cab with driver for transfers and sightseeing, and airport or station pick-up and drop. Costs usually paid on the spot are: the Gulmarg Gondola tickets, booked online; Pahalgam union taxis for Aru, Betaab and Chandanwari, since outside cabs cannot go beyond Pahalgam town; Sonamarg union taxis for Zojila and Zero Point; ponies, sledges and snow gear rental; shikara rides beyond any included hour; entry tickets to gardens; and lunches. Ask every agent to list these clearly, so that you compare quotes on the same basis.";

const durations: Record<string, SectionContent> = {
  "3-nights-4-days": {
    intro:
      "A 3 nights 4 days Kashmir trip is a short first taste of the valley: Srinagar's Dal Lake and Mughal gardens, plus one or two day trips, usually to Gulmarg and either Sonamarg or Pahalgam. With every night in Srinagar, you unpack once and avoid long drives with luggage. It suits long weekends, couples on a short honeymoon break and travellers adding Kashmir to a business trip, but it is tight: plan early starts, keep evenings free and choose day trips by season.",
    blocks: [
      {
        heading: "A 3 nights 4 days Kashmir plan, day by day",
        body: "Day 1, arrival in Srinagar: land by midday, check in to a hotel or houseboat, and rest. In the late afternoon, take a shikara ride on Dal Lake to Char Chinar and the floating shops, ending at sunset. Walk the Boulevard in the evening.\n\nDay 2, Gulmarg day trip: leave at about 7.30 am for Gulmarg, about 50 km and 1.5 to 2 hours. Ride the gondola (book online in advance) to Kongdoori and, weather permitting, Apharwat. Walk the meadow, see St Mary's Church and the Maharani Temple, and return to Srinagar by evening.\n\nDay 3, Sonamarg or Pahalgam: in spring and summer, go to Sonamarg, about 80 km, for Thajiwas Glacier by pony or on foot, and the Sindh river. In autumn and winter, or if you prefer green valleys, go to Pahalgam, about 95 km, via the saffron fields of Pampore and the Avantipora ruins; see the town and Betaab Valley by union taxi. Return to Srinagar.\n\nDay 4, Srinagar and departure: visit Shalimar Bagh, Nishat Bagh and Chashme Shahi in the morning if your flight is in the afternoon, then leave for the airport, allowing two and a half hours before departure for security checks.",
      },
      {
        heading: "What a 3 nights trip can and cannot cover",
        body: "Three nights cover Srinagar properly and two of the three classic day trips. You will not have time for Pahalgam's side valleys in full (Aru, Betaab and Chandanwari need most of a day from Pahalgam itself), for staying a night in Gulmarg or Pahalgam, or for offbeat places like Doodhpathri, Yusmarg or Gurez. You also have no spare day if weather closes the gondola or the Sonamarg road. If you can add one more night, the trip becomes far more relaxed; see the 4 nights 5 days plan.",
      },
      {
        heading: "Choosing day trips by season",
        body: "December to February: Gulmarg for snow and the gondola; Pahalgam for quiet snow scenes. Sonamarg is reachable through the Z-Morh tunnel, but snow limits what you can do there. March and April: Gulmarg for late snow, plus the Tulip Garden in Srinagar from late March to about the third week of April. May to June: Sonamarg for snow at Thajiwas, Gulmarg for green meadows and the gondola. July and August: Gulmarg and Pahalgam; Sonamarg and the Pahalgam side valleys can be busy with Amarnath Yatra traffic. September to November: Pahalgam for autumn colour and Gulmarg for clear views.",
      },
      {
        heading: "Where to stay on a 3 nights plan",
        body: "Stay all three nights in Srinagar to avoid moving luggage. Many travellers spend one night on a Dal or Nigeen Lake houseboat and two in a hotel near the Boulevard, Rajbagh or Sonawar, which are close to the lake and the gardens and on the right side of the city for day trips. In winter, check that your room has proper heating; on houseboats, ask about heating and hot water before booking.",
      },
      {
        heading: "What is included and what you pay locally",
        body: COSTS_LOCAL,
      },
      {
        heading: "Who a 3 nights 4 days trip suits",
        body: "Couples and friends on a long weekend; first-time visitors who want a taste before a longer trip; business travellers adding a few days; and travellers combining Kashmir with Vaishno Devi or Ladakh, who are short of time for each. It is less suited to families with small children or older travellers, since the early starts and long day trips can be tiring, and to anyone who wants to stay in Gulmarg or Pahalgam.",
      },
      {
        heading: "How to make 3 nights feel longer",
        body: "Fly in early on day 1 and out late on day 4. Book the gondola and the houseboat in advance. Start day trips by 7.30 am. Keep the first evening for the shikara ride rather than adding sightseeing. Drop shopping trips that take hours; buy what you need on the Boulevard. Ask your agent to plan day 4 around your flight time, not a fixed list.",
      },
    ],
    faqs: [
      { q: "Is 3 nights enough for Kashmir?", a: "It is enough for Srinagar and two day trips, usually Gulmarg and Sonamarg or Pahalgam. It is tight, with early starts and no spare day for weather." },
      { q: "What is the best 3 nights 4 days Kashmir itinerary?", a: "Day 1 Srinagar and a sunset shikara ride, day 2 Gulmarg, day 3 Sonamarg or Pahalgam by season, day 4 Mughal gardens and departure." },
      { q: "Should I stay in Gulmarg or Pahalgam on a 3 nights trip?", a: "Usually no. Staying all three nights in Srinagar avoids moving luggage and makes both day trips easier." },
      { q: "Can I see Pahalgam's valleys on a 3 nights trip?", a: "Only partly. Betaab Valley fits into a Pahalgam day trip, but Aru and Chandanwari need more time." },
      { q: "Which month is best for a 3 nights Kashmir trip?", a: "April to June and September to October for comfortable weather; December to February for snow in Gulmarg." },
      { q: "Is a 3 nights Kashmir trip good for a honeymoon?", a: "It works for a short break with a houseboat night and a sunset shikara ride, but 5 or 6 nights is more relaxed." },
      { q: "What costs are not included in a 3 nights Kashmir package?", a: "Usually the gondola, union taxis in Pahalgam and Sonamarg, ponies, sledges, extra shikara time, garden tickets and lunches." },
    ],
  },
  "4-nights-5-days": {
    intro:
      "A 4 nights 5 days Kashmir trip is the most popular short plan: enough for Srinagar, Gulmarg, Sonamarg and Pahalgam, either all from Srinagar or with one night in Pahalgam. It suits first-time visitors, couples and families with a week off, and leaves a little room for weather. The usual pattern is three nights in Srinagar (one on a houseboat) and one in Pahalgam, with Gulmarg and Sonamarg as day trips.",
    blocks: [
      {
        heading: "A 4 nights 5 days Kashmir plan, day by day",
        body: "Day 1, Srinagar: arrive, check in to a houseboat or hotel, and take a sunset shikara ride on Dal Lake.\n\nDay 2, Srinagar sightseeing and Sonamarg or the gardens: in spring and summer, go to Sonamarg for Thajiwas Glacier and return by evening. In other seasons, spend the day on the Mughal gardens (Chashme Shahi, Pari Mahal, Nishat Bagh, Shalimar Bagh), Hazratbal and the old city.\n\nDay 3, Gulmarg day trip: leave early for Gulmarg, ride the gondola (booked online), walk the meadow and return to Srinagar.\n\nDay 4, Srinagar to Pahalgam: drive about 95 km, 2.5 to 3 hours, via the saffron fields of Pampore and the Avantipora temple ruins. In the afternoon, take a union taxi round to Betaab Valley and Chandanwari (in season) or Aru Valley. Night in Pahalgam by the Lidder.\n\nDay 5, Pahalgam to Srinagar and departure: a morning walk by the river, then drive to Srinagar airport, about 3 hours. Choose an afternoon or evening flight.",
      },
      {
        heading: "Why one night in Pahalgam helps",
        body: "Pahalgam is the furthest of the three classic trips from Srinagar, and its best sights, the Aru, Betaab and Chandanwari valleys, are reached only by local union taxi from Pahalgam town. A day trip from Srinagar leaves little time for them. A night in Pahalgam lets you see two valleys in the afternoon and wake up by the river, and then go straight to the airport on the last day. If your flight leaves early on day 5, swap the order: Pahalgam on days 2 and 3, Srinagar on days 4 and 5.",
      },
      {
        heading: "Season changes to the plan",
        body: "Winter (December to February): keep Gulmarg as a full day for snow, make Pahalgam a snow night, and treat Sonamarg as optional, since snow limits what you can do there even though the Z-Morh tunnel keeps it reachable. Spring (March to May): add the Tulip Garden from late March to about the third week of April; Sonamarg reopens fully in May. Summer (June to August): all three are open; expect Amarnath Yatra traffic on the Pahalgam and Sonamarg roads in July and August. Autumn (September to November): golden chinars in Srinagar and clear views in Gulmarg; Pahalgam is beautiful and quiet.",
      },
      {
        heading: "Where to stay on a 4 nights plan",
        body: "Three nights in Srinagar, with one on a Dal or Nigeen Lake houseboat, and one in Pahalgam, where riverside hotels are the most popular. Families sometimes prefer all hotel nights in Srinagar near the Boulevard. In winter, ask about heating in every room. Hotel category is the biggest lever on price, so decide early whether you want budget, three-star, four-star or luxury stays, and compare quotes on the same category.",
      },
      {
        heading: "What is included and what you pay locally",
        body: COSTS_LOCAL,
      },
      {
        heading: "Who a 4 nights 5 days trip suits",
        body: "First-time visitors who want the main sights in one trip; honeymoon couples who want a houseboat night and a Pahalgam riverside stay; families with older children; and groups of friends. With grandparents or small children, consider adding a night to slow the pace, or drop Sonamarg to keep drives shorter.",
      },
      {
        heading: "Common mistakes on a 4 nights trip",
        body: "Booking an early flight on day 5 from Pahalgam. Not booking gondola tickets in advance in busy months. Trying to add Doodhpathri or Yusmarg as well, which leaves no time anywhere. Moving hotels every night. Planning Sonamarg in deep winter as if it were summer. Choosing a package without checking which union taxi and gondola costs are included.",
      },
    ],
    faqs: [
      { q: "Is 4 nights enough for Kashmir?", a: "Yes for a first trip covering Srinagar, Gulmarg, Sonamarg and Pahalgam, usually with three nights in Srinagar and one in Pahalgam." },
      { q: "What is the best 4 nights 5 days Kashmir itinerary?", a: "Srinagar and shikara on day 1, Sonamarg or the gardens on day 2, Gulmarg on day 3, Pahalgam overnight on day 4, and departure on day 5." },
      { q: "Should I stay a night in Pahalgam on a 4 nights trip?", a: "Yes if you can. It gives time for Betaab, Aru or Chandanwari, which are reached only by local union taxi from Pahalgam." },
      { q: "Can I include the Tulip Garden in a 4 nights trip?", a: "Yes, from late March to about the third week of April, as part of the Srinagar sightseeing day." },
      { q: "Is a 4 nights Kashmir trip good with family?", a: "Yes for families with older children. With small children or grandparents, consider 5 nights for a slower pace." },
      { q: "Which is better, 4 nights or 5 nights in Kashmir?", a: "Five nights adds a spare day for weather or a night in Gulmarg. Four nights covers the main sights at a brisk pace." },
      { q: "What is usually excluded from a 4 nights Kashmir package?", a: "Gondola tickets, Pahalgam and Sonamarg union taxis, ponies and sledges, extra shikara time, garden entry and lunches." },
    ],
  },
  "5-nights-6-days": {
    intro:
      "A 5 nights 6 days Kashmir trip is the plan most travellers end up happiest with: Srinagar, Gulmarg, Sonamarg and Pahalgam at a comfortable pace, a houseboat night, a night in Pahalgam and, often, a night in Gulmarg, with time to see Pahalgam's side valleys and a spare half day for weather. It suits first-time visitors, honeymooners and families alike, and is long enough to feel the valley rather than rush through it.",
    blocks: [
      {
        heading: "A 5 nights 6 days Kashmir plan, day by day",
        body: "Day 1, Srinagar: arrive, check in to a Dal or Nigeen Lake houseboat, and take a sunset shikara ride.\n\nDay 2, Srinagar sightseeing: the Mughal gardens (Chashme Shahi, Pari Mahal, Nishat Bagh, Shalimar Bagh) in the morning, Hazratbal and the old city or the Shankaracharya Temple in the afternoon. Move to a hotel or stay on the houseboat.\n\nDay 3, Sonamarg day trip: drive about 80 km along the Sindh river, ride or walk to Thajiwas Glacier, and return to Srinagar. In deep winter, swap this for Doodhpathri or a slower Srinagar day.\n\nDay 4, Srinagar to Gulmarg: drive about 50 km to Gulmarg, ride the gondola (booked online), and stay overnight for the evening and morning light on the meadow.\n\nDay 5, Gulmarg to Pahalgam: a longer drive, about 4 to 5 hours via Srinagar. In the afternoon, take a union taxi to Betaab Valley and Chandanwari (in season). Night in Pahalgam.\n\nDay 6, Pahalgam and departure: Aru Valley early in the morning by union taxi if your flight is late, or a riverside walk, then drive to Srinagar airport, about 3 hours.",
      },
      {
        heading: "A slower variation without moving hotels so often",
        body: "If you prefer fewer hotel changes, stay three nights in Srinagar and two in Pahalgam. Do Gulmarg and Sonamarg as day trips from Srinagar on days 2 and 3, Srinagar sightseeing on day 4 morning before driving to Pahalgam, a full day of Aru, Betaab and Chandanwari on day 5, and depart on day 6. This suits families and older travellers, at the cost of missing a night in Gulmarg.",
      },
      {
        heading: "Changes by season",
        body: "Winter (December to February): stay a night in Gulmarg for snow and skiing lessons; Pahalgam is a quiet snow night; Sonamarg is reachable through the Z-Morh tunnel but snow limits activities, so many replace it with an extra Gulmarg day. Spring (March to May): add the Tulip Garden from late March to about the third week of April, and the almond blossom at Badamwari in March. Summer (June to August): all sights are open; book gondola tickets early, and expect Amarnath Yatra traffic in July and August. Autumn (September to November): golden chinars in Srinagar from late October, clear skies in Gulmarg and quiet valleys in Pahalgam.",
      },
      {
        heading: "Hotels, houseboats and how they change the price",
        body: "A typical 5 nights plan uses one or two houseboat nights, two Srinagar hotel nights and one night each in Gulmarg and Pahalgam, or the slower three-plus-two pattern. Hotel category is the biggest single factor in the price: budget, three-star, four-star and luxury stays differ widely, and Gulmarg rooms cost more than similar rooms in Srinagar, especially in winter. Decide the category before comparing quotes, and check heating in winter.",
      },
      {
        heading: "What is included and what you pay locally",
        body: COSTS_LOCAL,
      },
      {
        heading: "Who a 5 nights 6 days trip suits",
        body: "Almost everyone on a first Kashmir trip. Honeymooners get a houseboat night, a Gulmarg night and a Pahalgam riverside stay. Families get a manageable pace with time for ponies, gardens and snow. Groups of friends can add rafting in Pahalgam in summer or skiing lessons in Gulmarg in winter. Photographers have time for sunrise on the lake and evening light in the mountains.",
      },
      {
        heading: "Adding a sixth night: what to choose",
        body: "With one more night, the best additions are: a second night in Pahalgam for a full day in Aru Valley; Doodhpathri or Yusmarg as a quiet meadow day from Srinagar; Vaishno Devi at the start or end by train from Katra; or a night in Sonamarg in summer for an early start at Thajiwas. See the 6 nights 7 days plan for details.",
      },
    ],
    faqs: [
      { q: "Is 5 nights enough for Kashmir?", a: "Yes. Five nights covers Srinagar, Gulmarg, Sonamarg and Pahalgam at a comfortable pace, with a houseboat night and time for Pahalgam's valleys." },
      { q: "What is the best 5 nights 6 days Kashmir itinerary?", a: "Srinagar on days 1 and 2, Sonamarg on day 3, Gulmarg overnight on day 4, Pahalgam overnight on day 5, and departure on day 6." },
      { q: "Should I stay a night in Gulmarg?", a: "Yes if you can, especially in winter. It gives quiet evening and morning light and a second chance at the gondola." },
      { q: "Can I do Vaishno Devi with a 5 nights Kashmir trip?", a: "It is better to add one or two nights. Katra to Srinagar by train takes about 3 hours, so Vaishno Devi fits at the start or end." },
      { q: "Which hotels are used on a 5 nights Kashmir package?", a: "Usually a Dal or Nigeen houseboat, a Srinagar hotel, and hotels in Gulmarg and Pahalgam, in the category you choose." },
      { q: "Is 5 nights good for a Kashmir honeymoon?", a: "Yes, it is the most popular honeymoon length, with a houseboat night, Gulmarg and a Pahalgam riverside stay." },
      { q: "What is the best month for a 5 nights Kashmir trip?", a: "April to June and September to October for pleasant weather; December to February for snow." },
      { q: "What is not included in a 5 nights Kashmir package?", a: "Usually the gondola, union taxis in Pahalgam and Sonamarg, ponies, sledges, extra shikara time, garden entry and lunches." },
    ],
  },
  "6-nights-7-days": {
    intro:
      "A 6 nights 7 days Kashmir trip gives the valley the time it deserves: Srinagar, Gulmarg, Sonamarg and Pahalgam with a night in each of the main bases, a full day for Pahalgam's side valleys, and room for one extra, such as Doodhpathri, Vaishno Devi, a night in Sonamarg or simply a spare day for weather. It is the best length for families with grandparents or small children, photographers and anyone who dislikes rushing.",
    blocks: [
      {
        heading: "A 6 nights 7 days Kashmir plan, day by day",
        body: "Day 1, Srinagar: arrive, check in to a houseboat, and take a sunset shikara ride.\n\nDay 2, Srinagar: the Mughal gardens in the morning, Hazratbal and the old city in the afternoon, or the Shankaracharya Temple for the view.\n\nDay 3, Sonamarg: day trip to Thajiwas Glacier and the Sindh valley, or a night in Sonamarg in summer.\n\nDay 4, Gulmarg: drive to Gulmarg, ride the gondola, and stay overnight.\n\nDay 5, Gulmarg to Pahalgam: drive via Srinagar to Pahalgam, about 4 to 5 hours; evening by the Lidder.\n\nDay 6, Pahalgam valleys: a union taxi round to Aru Valley, Betaab Valley and Chandanwari (in season), or a pony ride, with lunch by the river. Second night in Pahalgam.\n\nDay 7, Pahalgam to Srinagar and departure: drive to Srinagar airport, about 3 hours, stopping at the Avantipora ruins or Pampore's saffron shops on the way if time allows.",
      },
      {
        heading: "Good additions for the extra day",
        body: "Doodhpathri or Yusmarg: quiet meadow day trips from Srinagar, about 1.5 to 2 hours each way, in place of a second Srinagar day. Vaishno Devi: start the trip in Katra and take the train to Srinagar, adding a night. South Kashmir gardens: Achabal, Kokernag and Verinag on the way to Pahalgam. Gurez: not a day trip, but some travellers trade two days for an overnight in Gurez between May and October. Snow activities: in winter, a second Gulmarg night for skiing lessons.",
      },
      {
        heading: "Changes by season",
        body: "Winter: two nights in Gulmarg and a snowy Pahalgam night; Sonamarg reachable through the Z-Morh tunnel but limited by snow. Spring: Tulip Garden and blossom in Srinagar; snow still at Thajiwas from May. Summer: everything open; rafting on the Lidder; Amarnath Yatra traffic in July and August. Autumn: chinars, clear skies and quiet roads.",
      },
      {
        heading: "Where to stay",
        body: "One or two houseboat nights in Srinagar, one Srinagar hotel night, one in Gulmarg and two in Pahalgam, or three in Srinagar and two in Pahalgam with Gulmarg as a day trip. Choose the hotel category before comparing quotes. For families, ask for connecting rooms or suites in Pahalgam, where riverside hotels fill fast in summer.",
      },
      {
        heading: "What is included and what you pay locally",
        body: COSTS_LOCAL,
      },
      {
        heading: "Who a 6 nights 7 days trip suits",
        body: "Families with grandparents or small children, who need shorter days and rest; honeymooners who want to slow down; photographers; and travellers who want to add Doodhpathri, the south Kashmir gardens or Vaishno Devi without dropping the main sights.",
      },
    ],
    faqs: [
      { q: "Is 6 nights too long for Kashmir?", a: "No. Six nights lets you stay in Srinagar, Gulmarg and Pahalgam, see Pahalgam's valleys properly and add one extra, such as Doodhpathri or Vaishno Devi." },
      { q: "What is the best 6 nights 7 days Kashmir itinerary?", a: "Srinagar on days 1 and 2, Sonamarg on day 3, Gulmarg overnight on day 4, and two nights in Pahalgam on days 5 and 6, departing on day 7." },
      { q: "Can I add Vaishno Devi to a 6 nights Kashmir trip?", a: "Yes, by starting in Katra and taking the train to Srinagar, usually adding a night." },
      { q: "Is 6 nights good for a family trip to Kashmir?", a: "Yes, it is the best length for families with grandparents or small children." },
      { q: "Which offbeat place fits into a 6 nights Kashmir plan?", a: "Doodhpathri or Yusmarg as a day trip from Srinagar, or the south Kashmir gardens on the way to Pahalgam." },
      { q: "Should I stay two nights in Pahalgam?", a: "Yes on a 6 nights plan. It gives a full day for Aru, Betaab and Chandanwari." },
      { q: "What is not included in a 6 nights Kashmir package?", a: "Usually the gondola, union taxis, ponies, sledges, extra shikara time, garden entry and lunches." },
    ],
  },
  "8-nights-9-days": {
    intro:
      "An 8 nights 9 days Kashmir trip is for travellers who want to go beyond the classic circuit: Srinagar, Gulmarg, Sonamarg and Pahalgam with time in each, plus Gurez, Doodhpathri or Yusmarg, the south Kashmir gardens, or Vaishno Devi at the start. It is also the length that combines Kashmir with a short Ladakh extension by road over Zojila in summer, or a slow winter trip with several snow days.",
    blocks: [
      {
        heading: "An 8 nights 9 days Kashmir plan, day by day",
        body: "Day 1, Srinagar: arrive, houseboat, sunset shikara ride.\n\nDay 2, Srinagar: Mughal gardens, Hazratbal, old city.\n\nDay 3, Doodhpathri or Yusmarg: a quiet meadow day trip.\n\nDays 4 and 5, Gurez (May to October): drive over Razdan Pass to Dawar, about 5 to 6 hours; a night by the Kishanganga and a day in the valley, then back to Srinagar. In other months, spend these days in Gulmarg instead.\n\nDay 6, Gulmarg: drive to Gulmarg, ride the gondola, and stay overnight.\n\nDay 7, Pahalgam: drive via Srinagar to Pahalgam, stopping at Avantipora or the saffron fields.\n\nDay 8, Pahalgam valleys: Aru, Betaab and Chandanwari by union taxi.\n\nDay 9, departure: drive to Srinagar airport, about 3 hours. Sonamarg can replace Gurez as a day trip if the season or your interests suit it.",
      },
      {
        heading: "Other ways to use 8 nights",
        body: "Vaishno Devi and Kashmir: start with two nights in Katra for the yatra, take the train to Srinagar, and spend six nights in the valley. Kashmir and Ladakh by road (June to September): four nights in Kashmir, then Sonamarg, Zojila and Kargil on the way to Leh, with time to acclimatise; this needs careful planning for altitude. Winter Kashmir: three nights in Gulmarg for skiing lessons and snow, two in Srinagar, two in Pahalgam and one spare night for weather.",
      },
      {
        heading: "Pace and planning",
        body: "On a longer trip, avoid moving hotels every night: use Srinagar as a base for several day trips and stay two nights in Pahalgam and, in winter, in Gulmarg. Keep one flexible day for weather, especially in winter and spring, when the gondola and mountain roads can close. Book Gurez stays and gondola tickets in advance in summer.",
      },
      {
        heading: "What is included and what you pay locally",
        body: COSTS_LOCAL,
      },
      {
        heading: "Who an 8 nights trip suits",
        body: "Second-time visitors; travellers who want offbeat valleys like Gurez; pilgrims combining Vaishno Devi with Kashmir; winter travellers who want several snow days; and travellers adding Ladakh by road. For a first trip with limited leave, 5 or 6 nights is usually enough.",
      },
    ],
    faqs: [
      { q: "What can I add to Kashmir with 8 nights?", a: "Gurez (May to October), Doodhpathri or Yusmarg, the south Kashmir gardens, Vaishno Devi by train from Katra, or a road extension to Ladakh in summer." },
      { q: "Can I combine Kashmir and Ladakh in 8 nights?", a: "Yes in June to September, by road over Zojila, but plan for altitude in Ladakh and allow acclimatisation days." },
      { q: "Is 8 nights too long for Kashmir?", a: "Not if you add offbeat valleys or Vaishno Devi. For the classic circuit alone, 5 or 6 nights is enough." },
      { q: "When can I visit Gurez on an 8 nights trip?", a: "From about May to October, when Razdan Pass is open." },
      { q: "Is 8 nights good for a winter Kashmir trip?", a: "Yes. It allows several snow days in Gulmarg, a snowy Pahalgam stay and a spare day for weather." },
      { q: "What is not included in an 8 nights Kashmir package?", a: "Usually the gondola, union taxis, ponies, sledges, extra shikara time, garden entry and lunches, plus permits or activity fees in places like Gurez." },
    ],
  },
};

export const KASHMIR_DURATIONS_DESTINATION: Record<string, Partial<GuideContent>> = {
  kashmir: { packages: { durations } },
};
