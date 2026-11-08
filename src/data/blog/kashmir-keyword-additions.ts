// Kashmir keyword pass (2026-11-07): sections and FAQs appended to existing
// Kashmir posts so they answer the searches mapped to them in
// docs/keyword-research/keyword-map.csv. Appended, never replacing the body.
// Rules: no fares, prices or timetables typed in (they change), no em dashes.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const KASHMIR_KW_BLOG_ADDITIONS: Record<string, Addition> = {
  "kashmir-taxi-guide": {
    sections: [
      {
        h: "Taxi fare and charges in Kashmir: how rates work",
        p: [
          "Taxi fares in Kashmir are fixed per vehicle, not per person, and depend on the route, the vehicle type and whether it is a one-way drop or a return day trip. Srinagar's taxi stands and the airport prepaid counter follow rate cards; union taxis in Pahalgam and Sonamarg have their own fixed rates for each sightseeing point.",
          "For the common routes (Srinagar to Gulmarg, Sonamarg or Pahalgam, Jammu or Katra to Srinagar, and Srinagar to Gurez) ask for the current rate card or a written quote that names the vehicle, the route and the waiting time. A sedan is the cheapest, an Innova or Ertiga costs more, and a tempo traveller is priced for the whole vehicle.",
        ],
      },
      {
        h: "Srinagar airport taxi service and prepaid taxi",
        p: [
          "Srinagar airport has a prepaid taxi counter in the arrivals area, with fixed rates to the city, Dal Lake and Boulevard Road, Srinagar railway station and the resorts. Most packages include an airport pickup, so your driver waits outside with a name card. From the airport to Dal Lake or the city centre is about 15 km.",
        ],
      },
      {
        h: "Tempo traveller in Srinagar and Jammu",
        p: [
          "Tempo travellers (12 to 17 seats, including the newer Force Urbania) are the usual choice for groups. They run from Srinagar for local sightseeing and day trips, and from Jammu or Katra to Srinagar for groups arriving by train. The fare is a fixed rate for the whole vehicle per day or per route, so the cost per person falls as the group grows. In winter, agents may switch to smaller 4x4 vehicles for the snowy road to Gulmarg.",
        ],
      },
      {
        h: "Self-driven car rental, scooty and bike rent in Srinagar",
        p: [
          "Self-drive car rental, scooty rental and bike rent are available from rental shops in Srinagar for a daily rate, with a deposit and a valid licence. They are handy for Srinagar and the drives to Gulmarg and Sonamarg in summer. Remember that sightseeing inside Pahalgam and Sonamarg is still done in local union vehicles, and avoid two-wheelers on icy winter roads.",
        ],
      },
      {
        h: "Cab booking in Srinagar: how to book a taxi or package",
        list: [
          "For the whole trip: book a Srinagar taxi package (cab and driver for all days) through your agent or hotel.",
          "For single trips: use the taxi stands on Boulevard Road and in the city, or the airport prepaid counter.",
          "Online: some local operators take bookings on WhatsApp; confirm the vehicle and rate in writing.",
          "Katra and Jammu to Srinagar: book a one-way cab or tempo traveller in advance, especially for early trains.",
        ],
      },
    ],
    faqs: [
      { q: "What is the taxi fare from Srinagar to Gulmarg, Sonmarg and Pahalgam?", a: "It is a fixed per-vehicle rate for each route and vehicle type, higher for an Innova than a sedan and for a return day trip than a one-way drop. Ask for the current rate card or a written quote before you travel." },
      { q: "What are the taxi charges from Katra or Jammu to Srinagar?", a: "One-way cab and tempo traveller fares are set per vehicle by local operators and change with the season. Book in advance and confirm the vehicle and the rate in writing." },
      { q: "What is the taxi fare from Srinagar airport or railway station to Dal Lake and the city?", a: "Both are short city transfers (about 9 to 10 km from the station and about 15 km from the airport), charged at a fixed rate. The airport has a prepaid taxi counter with rates displayed." },
      { q: "What is the Srinagar to Gurez taxi fare?", a: "Gurez is about 141 km over Razdan Pass, so it is priced as an SUV trip, usually with an overnight stay. Ask agents for a quote that includes the permit." },
      { q: "Is a Tavera or Innova better for the Jammu to Srinagar drive?", a: "Both seat six to seven. Innovas are more common and comfortable now; older Taveras still run on shared routes. The fare is per vehicle." },
      { q: "Is there a cab booking service at Srinagar airport?", a: "Yes, the prepaid taxi counter in arrivals, and drivers sent by hotels and agents." },
      { q: "Can I rent a scooty in Srinagar?", a: "Yes, from rental shops in Srinagar, with a licence and a deposit. Use it in the city and nearby in summer." },
    ],
  },
  "kashmir-in-winter-snow-trip-guide": {
    sections: [
      {
        h: "Snow in Kashmir month by month: March, April, May, June, October and November",
        list: [
          "March: snowfall is still possible in Gulmarg early in the month, and snow stays on the ground there and in Sonamarg. Srinagar rarely sees snow in March.",
          "April: the Gulmarg meadow thaws, but there is snow at Kongdori and Apharwat (Gondola Phase 1 and 2) and around Sonamarg.",
          "May: you can still see snow at Apharwat, the Thajiwas glacier in Sonamarg and Chandanwari in Pahalgam. Fresh snowfall at high altitude is possible on cold days.",
          "June: snow is available only at high points: Apharwat on Gondola Phase 2, Thajiwas and the Zojila area. There is no snowfall in the towns.",
          "October: no snow in the towns; the first snow can dust Apharwat and the high peaks late in the month.",
          "November: the first snowfall usually reaches Gulmarg and Sonamarg during the month.",
        ],
      },
      {
        h: "Snow activities in Gulmarg and what they cost",
        p: [
          "Snow activities in Gulmarg include skiing and snowboarding lessons, sledge rides pulled by local sledgewallas, snow-scooter and ATV rides, and the Gondola to Kongdori and Apharwat. Costs are set locally for each season: sledges and snow scooters follow association rate cards, ski lessons are charged per hour or per course, and equipment is hired by the day. Agree the price before you start.",
        ],
      },
      {
        h: "Is there snowfall in Kashmir today? How to check the latest snow and weather news",
        p: [
          "For the latest snowfall news, check the India Meteorological Department (IMD) Srinagar forecasts, J&K traffic advisories for the Jammu to Srinagar highway and the Gulmarg and Sonamarg roads, and local news. Your agent and hotel can tell you each morning whether roads are open and chains are needed.",
        ],
      },
      {
        h: "Ice fall and ice skating in Kashmir",
        p: [
          "In the coldest weeks of Chillai Kalan, waterfalls such as Drung near Tangmarg freeze into an ice fall that draws photographers. Ice skating is possible in Gulmarg in deep winter when the rink or frozen ponds are safe; ask locally, as it depends on the weather.",
        ],
      },
      {
        h: "Snow in Jammu?",
        p: [
          "Jammu city does not get snow; its winters are mild. The nearest snow from Jammu is at Patnitop and Nathatop, about 110 km away, and at Bhaderwah and Sanasar, usually from December to February.",
        ],
      },
    ],
    faqs: [
      { q: "Does Kashmir have snow in May?", a: "Yes, at high points: Apharwat on Gulmarg Gondola Phase 2, the Thajiwas glacier in Sonamarg and Chandanwari in Pahalgam. There is no snow in Srinagar or the town centres." },
      { q: "Is snow available in Kashmir in June?", a: "Only at the highest points, such as Apharwat on Gondola Phase 2, Thajiwas and around Zojila. There is no snowfall in June." },
      { q: "Is there snowfall in Kashmir in October?", a: "Not in the towns. The first snow can dust Apharwat and the high peaks late in October; regular snowfall begins in November and December." },
      { q: "Does it snow in Kashmir in March and April?", a: "Snowfall is still possible in Gulmarg in early March, and snow stays on the ground there. In April snow remains at the Gondola stations and around Sonamarg." },
      { q: "What is the best time and month for snowfall in Kashmir?", a: "Late December to February. January is the coldest and snowiest month; February often has the best snow cover in Gulmarg." },
      { q: "When does snowfall start in Jammu and Kashmir, and is there snow in Jammu?", a: "Snowfall usually starts in the Kashmir hills in November. Jammu city has no snow; Patnitop near Jammu gets snow from December to February." },
      { q: "What is the snow time and season in Gulmarg?", a: "Snow usually lies in Gulmarg from December to March, with first falls in November and patches at Apharwat into June." },
      { q: "Where are the best snow places in Kashmir?", a: "Gulmarg, Sonamarg, Pahalgam, Doodhpathri when its road is open, and Patnitop in the Jammu region." },
    ],
  },
  "srinagar-houseboat-guide": {
    sections: [
      {
        h: "Houseboat price in Kashmir: what decides the rate",
        p: [
          "Houseboat rates in Srinagar depend on the category set by J&K Tourism (deluxe at the top, then A to D), the lake (Dal, Nigeen or the Jhelum), the season, the room and the meal plan. Most rates include the shikara transfer and breakfast and dinner; heating in winter may be charged extra on lower categories. Christmas, New Year and April to June are the most expensive weeks.",
          "To compare houseboat prices, ask each owner or agent for the category in writing, the meal plan, whether heating and hot water are included, and the exact location on the lake. A cheaper boat in a back channel is a very different stay from a deluxe boat facing the open lake.",
        ],
      },
      {
        h: "5 star and deluxe houseboats in Srinagar",
        p: [
          "There is no official 5 star grade for houseboats; the top category is deluxe. Deluxe houseboats have carved walnut interiors, large bedrooms with modern attached bathrooms, central or individual heating and attentive staff, and the best of them face the open lake on Nigeen or the quieter parts of Dal. They are what most agents mean by a luxury or 5 star houseboat.",
        ],
      },
      {
        h: "Houseboat booking in Srinagar and Dal Lake",
        list: [
          "Book through an agent or a registered owner and get the category, location and inclusions in writing.",
          "Check recent photos of the actual room, not just the sitting room.",
          "In winter, confirm heating, hot water hours and a generator for power cuts.",
          "Keep the owner's phone number; a shikara collects you from a numbered ghat.",
        ],
      },
    ],
    faqs: [
      { q: "What is the houseboat price and rate in Kashmir?", a: "It depends on the category (deluxe down to D), the lake, the season and the meal plan, and is quoted per room per night. Ask for the category and inclusions in writing to compare prices fairly." },
      { q: "What are the charges for a houseboat in Dal Lake?", a: "A per-room nightly rate, usually with breakfast, dinner and the shikara transfer; heating may be extra on lower categories in winter. Peak weeks cost more." },
      { q: "Is there a 5 star houseboat in Srinagar?", a: "The highest official grade is deluxe; deluxe houseboats on Nigeen and Dal are what packages call 5 star or luxury." },
      { q: "What is a boat house in Kashmir? Information about houseboats", a: "A houseboat (often called a boat house) is a large wooden boat moored permanently on Dal Lake, Nigeen Lake or the Jhelum, fitted out like a small hotel with bedrooms, a sitting room and a deck, and reached by shikara." },
      { q: "What does a deluxe houseboat in Srinagar include?", a: "A carved walnut interior, large rooms with attached bathrooms, heating in winter, meals cooked on board and the shikara transfer." },
    ],
  },
  "where-to-stay-in-kashmir": {
    sections: [
      {
        h: "Khyber Himalayan Resort, Gulmarg",
        p: [
          "The Khyber Himalayan Resort and Spa is Gulmarg's best-known luxury hotel, opened in 2012 with about 85 rooms and cottages a short walk from the Gulmarg Gondola. It is known for its heated indoor pool, spa and views over the pine forest and meadow, and is a favourite for winter honeymoons and ski trips. Rates change with the season and are highest over Christmas, New Year and the ski season; ask agents for current Khyber prices in your quote. There is no Khyber property in Pahalgam.",
        ],
      },
      {
        h: "Cheap and budget hotels in Srinagar near Dal Lake",
        p: [
          "The cheapest hotels near Dal Lake are in the lanes behind Boulevard Road and around Dalgate, a few minutes' walk from the shikara ghats. Budget hotels here are simple but central; check heating in winter, hot water hours and whether the room has a window. Rajbagh and Lal Chowk also have good-value budget hotels a short drive from the lake.",
        ],
      },
      {
        h: "Luxury and 5 star hotels in Kashmir",
        p: [
          "Kashmir's 5 star hotels are mostly in Srinagar, on the slopes of the Zabarwan hills and along the Boulevard, with lake views and large gardens; Gulmarg has the Khyber and a few upmarket resorts near the Gondola; and Pahalgam has luxury hotels along the Lidder river. Luxury packages often pair one of these with a deluxe houseboat night.",
        ],
      },
      {
        h: "Pahalgam hotels near the river",
        p: [
          "The most sought-after rooms in Pahalgam are along the Lidder, where you hear the river at night and look across to the pine slopes. Ask for a river-facing room in writing when you book, as many hotels have both river-view and road-side rooms.",
        ],
      },
    ],
    faqs: [
      { q: "What is the Khyber hotel in Gulmarg, and what is its price?", a: "The Khyber Himalayan Resort and Spa is a luxury resort near the Gulmarg Gondola. Prices vary by season and room type and are highest in winter and over New Year; agents can quote current rates." },
      { q: "Is there a Khyber resort in Pahalgam?", a: "No. The Khyber Himalayan Resort and Spa is in Gulmarg. Pahalgam has its own luxury hotels along the Lidder river." },
      { q: "Which are the cheapest hotels in Srinagar near Dal Lake?", a: "Budget hotels in the lanes behind Boulevard Road and around Dalgate are the cheapest options close to the lake. Check heating and hot water in winter." },
      { q: "Which are the best 5 star and luxury hotels in Kashmir, India?", a: "Srinagar's hillside and Boulevard 5 star hotels, the Khyber in Gulmarg and riverside luxury hotels in Pahalgam, plus deluxe houseboats on Nigeen and Dal Lake." },
    ],
  },
  "kashmir-by-train-from-delhi": {
    sections: [
      {
        h: "Train timings in Kashmir: Banihal, Srinagar and Baramulla",
        p: [
          "Inside the valley, local trains have run for years between Banihal, Qazigund, Anantnag, Srinagar, Budgam and Baramulla. Since June 2025 Vande Bharat trains also run from Katra to Srinagar, stopping at Banihal. Timings and the time table change with each railway timetable and in winter, so check the current train timings on the Indian Railways NTES app or IRCTC before you travel rather than relying on older blog posts.",
          "Baramulla to Banihal, Srinagar to Baramulla and Banihal to Srinagar are short trips of one to three hours, useful for reaching Anantnag (for Pahalgam) or Baramulla (for Gulmarg and Uri) without driving on NH44.",
        ],
      },
      {
        h: "Delhi to Srinagar distance by train",
        p: [
          "By rail, Delhi to Katra is about 650 km and Katra to Srinagar about 200 km more, so the full journey is roughly 850 km. Allow a full day: about 8 hours to Katra on the fastest trains, a change, and about 3 hours on the Vande Bharat to Srinagar.",
        ],
      },
      {
        h: "Goa to Srinagar train",
        p: [
          "There is no direct train from Goa to Srinagar. Travel to Delhi or Jammu first, then continue to Katra and take the Vande Bharat to Srinagar, or fly to Srinagar with one change.",
        ],
      },
    ],
    faqs: [
      { q: "Where can I see the Banihal, Srinagar and Baramulla train time table and timings?", a: "Several local trains and the Katra to Srinagar Vande Bharat trains serve the line every day, but timings change with each timetable. Check NTES or IRCTC for the current time table." },
      { q: "How do I reach Srinagar from Delhi by train?", a: "Take a train from Delhi to Shri Mata Vaishno Devi Katra, then the Vande Bharat from Katra to Srinagar. There is no direct Delhi to Srinagar train yet." },
      { q: "What is the best way to visit Kashmir from Delhi?", a: "By direct flight (about 1.5 hours) for the fastest trip, or by train via Katra if you want the Chenab Bridge journey or a Vaishno Devi stop." },
      { q: "How much time does the Delhi to Srinagar train journey take?", a: "About a full day: roughly 8 hours to Katra on the fastest trains, a change, and about 3 hours on to Srinagar." },
    ],
  },
  "srinagar-to-leh-road-trip-guide": {
    sections: [
      {
        h: "Srinagar to Leh taxi fare and tempo traveller price",
        p: [
          "Srinagar to Leh (Ladakh) taxis are priced per vehicle for the whole trip, usually two days with a night in Kargil. Charges depend on the vehicle (Innova, Xylo or tempo traveller), one-way or return, and whether the driver's return journey is included, which it usually is for one-way trips. Ask for the current rate in writing and confirm whether the Kargil night and driver costs are included.",
        ],
      },
    ],
    faqs: [
      { q: "What is the Srinagar to Leh taxi fare and cost?", a: "A per-vehicle rate for the two-day trip, set by Srinagar taxi operators and higher in peak season. One-way fares include the driver's return, so they are close to a return fare." },
      { q: "What is the Srinagar to Ladakh tempo traveller fare and price?", a: "A whole-vehicle rate for 12 to 17 seats, split across the group. Book early in June and July." },
      { q: "What are the taxi charges from Srinagar to Leh one way?", a: "One-way charges include the empty return journey, so ask for a written quote and compare a return trip via Manali if you are flying out of Leh." },
    ],
  },
  "amarnath-yatra-plan": {
    faqs: [
      { q: "How does Amarnath Yatra booking and online registration work?", a: "Register on the Shri Amarnathji Shrine Board's official website or at its designated bank branches, choosing your route and date, with a Compulsory Health Certificate from an authorised doctor. Booking opens a few months before the yatra." },
      { q: "Where can I book the Amarnath Yatra?", a: "Only through the Shri Amarnathji Shrine Board: online on its official website, or at its designated bank branches across India. Helicopter tickets are also sold only through the Shrine Board. Agents can book your hotels and transport around your yatra date." },
      { q: "What is the age limit for the Amarnath Yatra?", a: "Pilgrims must be between 13 and 70 years old, and women more than six weeks pregnant are not allowed, as per Shrine Board rules." },
      { q: "Which form and documents are needed for the Amarnath Yatra permit?", a: "The registration form (online or at the bank), a recent photo, ID and the Compulsory Health Certificate. On registration you get the yatra permit, and you collect your RFID card before the yatra." },
    ],
  },
  "is-kashmir-safe-to-visit": {
    faqs: [
      { q: "What is the state of Kashmir tourism and safety in 2026?", a: "The main tourist circuit of Srinagar, Gulmarg, Sonamarg and Pahalgam town is open and busy with domestic tourists, with heavy security. Some smaller spots, such as Baisaran, remain closed; check the current list with your agent before you travel." },
    ],
  },
  "offbeat-kashmir-doodhpathri-yusmarg-daksum": {
    faqs: [
      { q: "What is the distance from Srinagar to Sinthan Top?", a: "About 130 km by road via Anantnag, Kokernag and Daksum, around 4 to 5 hours. The pass road is usually open from about May or June to October." },
    ],
  },
};
