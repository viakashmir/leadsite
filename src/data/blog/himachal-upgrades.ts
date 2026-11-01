import type { BlogPost } from "./types";

// Full rewrites of thin Himachal posts, keyed by their existing slug (see
// blog/index.ts). Title, description, category and dates stay as published.
// No em dashes, no invented prices.

export const HIMACHAL_UPGRADES: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = {
  "shimla-manali-6-day-itinerary": {
    intro:
      "Six days is the right length for Shimla and Manali from Delhi or Chandigarh: two nights in Shimla for the Mall, Kufri and Jakhu, a full travel day along the Beas through Mandi and Kullu, and three nights in Manali for Solang Valley, the Atal Tunnel or Rohtang, and Old Manali. Shimla is about 390 km from central Delhi and Manali about 250 km beyond Shimla, so most families travel by cab or overnight Volvo.",
    sections: [
      {
        h: "6-day Shimla Manali itinerary",
        days: [
          "Delhi or Chandigarh to Shimla (about 115 km from Chandigarh). Evening walk on the Mall Road and the Ridge, past Christ Church and Scandal Point.",
          "Kufri (about 16 km) for the Himalayan Nature Park and snow in winter, Mashobra or Chail on the way back, and Jakhu Temple at sunset.",
          "Shimla to Manali (about 250 km, 7 to 9 hours) via Bilaspur, Sundernagar, Mandi and Kullu, with stops at Pandoh Dam and for river rafting near Kullu in season.",
          "Manali sightseeing: Hadimba Temple, Manu Temple, Old Manali and the Vashisht hot springs.",
          "Solang Valley for snow, the ropeway and paragliding, then the Atal Tunnel to Sissu, or Rohtang Pass with a permit when open.",
          "Drive back to Chandigarh or take the evening Volvo to Delhi; stop at Naggar Castle if time allows.",
        ],
      },
      {
        h: "How to travel: cab, Volvo or train",
        list: [
          "Private cab from Delhi or Chandigarh: the most flexible option, with one driver for all six days",
          "Overnight Volvo to Shimla and from Manali to Delhi, with a cab or local taxis in between",
          "Train to Kalka and the Kalka Shimla toy train (96 km, a UNESCO World Heritage line) for the first leg",
          "Flights to Chandigarh, then road; Shimla and Bhuntar airports have limited flights",
        ],
      },
      {
        h: "Best time for a Shimla Manali trip",
        p: [
          "March to June is the main season, with pleasant days, Rohtang reopening around mid-May and the busiest hotels. October and November are clear and quieter. December to February brings snow to Kufri, Solang and Sissu, and to Shimla and Manali towns in most winters; roads can close briefly after heavy snowfall, so keep a buffer day. July and August are monsoon months with landslide risk on the Mandi to Manali highway.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "In Shimla, stay near the Mall for walks, or in Mashobra and Chail for quiet forest hotels. In Manali, stay near the Mall Road for convenience, in Old Manali or Vashisht for a café village feel, or along the Beas towards Naggar for riverside resorts. Families usually prefer hotels with lifts and heating, which matter most from November to March.",
        ],
      },
      {
        h: "Adding Kasol, Dharamshala or Amritsar",
        p: [
          "With two more days, add Kasol and Manikaran from Manali, or end the trip in Dharamshala and McLeodganj (about 230 km from Manali). Travellers coming from Punjab often start in Amritsar and reach Shimla via Chandigarh. Agents on Tavel Package can quote any of these extensions as one customised package.",
        ],
      },
      {
        h: "Shimla Manali for families and honeymooners",
        p: [
          "Families should keep drive days short where possible, choose Phase-wise sightseeing at Solang, and use the toy train as a highlight for children. Honeymooners often swap a night in Shimla for an extra night in Manali or Naggar, add a candle-light dinner and choose a riverside or valley-view room. The route and stays are the same; the pace and room category change.",
        ],
      },
      {
        h: "Things to know before you go",
        list: [
          "Rohtang Pass needs an online vehicle permit with a daily limit; Solang, the Atal Tunnel and Sissu do not",
          "Manali taxi union cabs run local sightseeing at fixed rates",
          "Weekend traffic near Solang and the Atal Tunnel is heavy; leave by 7 am",
          "Carry woollens even in summer for Rohtang, Sissu and evenings in Manali",
          "Postpaid mobile connections work best in the higher valleys",
        ],
      },
      {
        h: "Food to try on the way",
        p: [
          "In Shimla, try the snacks on the Mall and Lakkar Bazaar. On the Mandi and Kullu stretch, roadside dhabas serve Himachali dishes such as madra and siddu, and trout is a speciality around Kullu and Manali. In Manali, Old Manali's cafés serve everything from Tibetan thukpa and momos to Italian and Israeli food.",
        ],
      },
    ],
    faqs: [
      { q: "What does a Shimla Manali package usually include?", a: "Hotels with breakfast and often dinner, a private cab for all six days, sightseeing in Shimla and Manali, and driver costs. Rohtang permits, Manali taxi union sightseeing, adventure activities and toy train tickets are often extra; check each quote." },
      { q: "Is the Shimla to Manali drive safe?", a: "Yes. It is a busy, well-used highway through Mandi and Kullu. Drive in daylight, avoid the peak monsoon weeks when landslides are more likely, and keep a buffer day in winter." },
      { q: "How many days are enough for Shimla and Manali?", a: "Six days from Delhi or Chandigarh: two nights in Shimla, three in Manali, plus the drive between them. Five days is possible but rushed." },
      { q: "What is the distance between Shimla and Manali?", a: "About 250 km by road, 7 to 9 hours via Bilaspur or Tattapani, Sundernagar, Mandi and Kullu." },
      { q: "Which is better first, Shimla or Manali?", a: "Shimla first. It is closer to Delhi and Chandigarh, and you finish with Manali's snow points and adventure days." },
      { q: "Is Rohtang included in Shimla Manali packages?", a: "Only in season (roughly mid-May to November) and subject to permits. Outside that window, packages include the Atal Tunnel and Sissu instead." },
      { q: "Can we do Shimla Manali by train?", a: "Partly. Take a train to Kalka and the toy train to Shimla. There is no railway to Manali, so continue by road." },
      { q: "When is snowfall in Shimla and Manali?", a: "Usually from late December to February. Kufri, Solang and Sissu are the most reliable snow points." },
    ],
  },

  "manali-honeymoon-plan": {
    intro:
      "A Manali honeymoon works best over 4 to 5 nights: a riverside or Old Manali stay, a day at Solang Valley, a day through the Atal Tunnel to Sissu (or Rohtang in season), and a slow day in Naggar or Kasol. December to February suits couples who want snow; March to June and October suit couples who want clear weather for sightseeing and cafés.",
    sections: [
      {
        h: "5-night Manali honeymoon plan",
        days: [
          "Arrive by overnight Volvo or flight to Bhuntar. Check in, rest, and walk the Mall Road in the evening.",
          "Hadimba Temple in the cedar forest, Manu Temple and an afternoon in Old Manali's cafés.",
          "Solang Valley: ropeway, paragliding or snow play, and a candle-light dinner back at the hotel.",
          "Atal Tunnel to Sissu in Lahaul for snow views and the waterfall, or Rohtang Pass with a permit when open.",
          "Naggar Castle, the Roerich Art Gallery and Jana waterfall, or a day trip to Kasol and Manikaran.",
          "Vashisht hot springs in the morning, then depart.",
        ],
      },
      {
        h: "Where to stay for a honeymoon",
        list: [
          "Old Manali and Vashisht: wooden cottages, cafés and views, but steep lanes",
          "Along the Beas towards Naggar: riverside resorts, quieter and greener",
          "Near the Mall Road: easy access to restaurants and taxis",
          "Sethan or Solang: snow-season stays, including igloo experiences in winter",
        ],
        p: ["Ask for a valley-view room, heating from November to March, and whether a honeymoon setup or dinner is included."],
      },
      {
        h: "Best time for a Manali honeymoon",
        p: [
          "For snow, choose late December to February; Manali town usually gets snowfall in this window and Solang and Sissu are white. For pleasant sightseeing, choose March to June, when Rohtang reopens around mid-May. October brings clear skies and autumn colour with fewer crowds. Avoid July and August if you want reliable roads.",
        ],
      },
      {
        h: "Romantic things to do in Manali",
        list: [
          "Sunset at the Hadimba Temple cedar forest",
          "Tandem paragliding at Solang Valley in season",
          "A riverside walk along the Beas in Old Manali",
          "A café evening in Old Manali or Vashisht",
          "Snow at Solang, Sissu or Rohtang, depending on the month",
          "Naggar Castle and its view down the Kullu valley",
        ],
      },
      {
        h: "Manali honeymoon with Shimla, Kasol or Dharamshala",
        p: [
          "Many couples combine Manali with Shimla for a 6 to 7 night trip, or add Kasol for a café-and-river stay. Dharamshala and McLeodganj, about 230 km away, add Tibetan culture and the Triund trek. Agents on Tavel Package can build any of these into one itinerary.",
        ],
      },
      {
        h: "What a Manali honeymoon costs depends on",
        list: [
          "Travel from your city: Volvo, train plus cab, or flight to Bhuntar or Chandigarh",
          "Hotel category and room type, and peak dates such as Christmas and New Year",
          "Private cab days and local taxi union sightseeing",
          "Activities such as paragliding and the honeymoon setup",
        ],
        p: ["Share your dates and budget to compare up to 3 itemised quotes from verified agents."],
      },
      {
        h: "Manali honeymoon in winter vs summer",
        p: [
          "In winter (late December to February), the honeymoon is about snow: Solang, Sissu and often the town itself are white, hotels light bonfires and the evenings are cosy, but some roads close after fresh snowfall. In summer (March to June), the valley is green, Rohtang Pass reopens around mid-May, paragliding and rafting run, and long days suit sightseeing. October is a middle ground: clear, crisp and quieter.",
        ],
      },
      {
        h: "Food and cafés for couples",
        p: [
          "Old Manali and Vashisht are lined with cafés on the riverbank and hillside, serving Himachali trout, Tibetan momos and thukpa, and international dishes. Many resorts arrange a private candle-light dinner on request. Try siddu, the steamed Kullu bread stuffed with walnut or poppy seed, at a local eatery.",
        ],
      },
      {
        h: "Getting to Manali for a honeymoon",
        p: [
          "Most couples take an overnight Volvo from Delhi, which arrives in the morning, or fly to Chandigarh and drive about 300 km through the Kiratpur tunnels and Mandi. Bhuntar airport near Kullu, about 50 km from Manali, has limited flights from Delhi and saves most of the drive when available. A private cab for the whole trip is the most comfortable option.",
        ],
      },
    ],
    faqs: [
      { q: "Can we visit Kasol on a Manali honeymoon?", a: "Yes. Kasol is about 75 km from Manali in the Parvati valley. Couples often spend one night there for the riverside cafés, Manikaran Sahib and the walk to Chalal, then return to Manali or continue to Bhuntar for the flight home." },
      { q: "Is Manali better than Shimla for a honeymoon?", a: "Manali is usually preferred for its riverside and snow settings, cafés and adventure; Shimla offers colonial charm and walks. Many couples combine both." },
      { q: "What is special for honeymooners in Manali?", a: "Riverside and valley-view rooms, snow at Solang or Sissu, tandem paragliding, café evenings in Old Manali and candle-light dinners that many resorts arrange on request." },
      { q: "Is Manali good for a honeymoon in December?", a: "Yes. Late December brings snow to Solang and Sissu and often to Manali town. Book early for Christmas and New Year." },
      { q: "How many days are enough for a Manali honeymoon?", a: "Four to five nights, or six to seven if you add Shimla or Kasol." },
      { q: "Which area of Manali is best for couples?", a: "Old Manali and Vashisht for cafés and character, or a riverside resort towards Naggar for quiet." },
      { q: "Is Rohtang Pass open for honeymooners in winter?", a: "No. Rohtang is closed from about November to mid-May. The Atal Tunnel and Sissu are the winter alternative." },
      { q: "Can we combine Manali with Shimla for a honeymoon?", a: "Yes. A 6 to 7 night Shimla Manali honeymoon is one of the most popular plans, with two nights in Shimla and the rest in Manali." },
    ],
  },

  "spiti-valley-road-trip-8-days": {
    intro:
      "An 8-day Spiti Valley road trip is best done as a circuit: up from Shimla through Kinnaur to Kaza, then out over Kunzum La past Chandratal to Manali, or the reverse. This loop is possible only when Kunzum La is open, roughly June to October. The rest of the year, Spiti is reached and left via Shimla and Kinnaur.",
    sections: [
      {
        h: "8-day Spiti circuit from Delhi or Chandigarh",
        days: [
          "Delhi or Chandigarh to Narkanda or Shimla.",
          "Narkanda to Kalpa via Rampur and Reckong Peo; sunset over the Kinner Kailash range.",
          "Kalpa to Nako and Tabo; Nako lake and village, Tabo Monastery founded in 996.",
          "Tabo to Kaza via Dhankar Monastery and the Pin valley turn.",
          "Kaza local: Key Monastery, Kibber, Chicham bridge, Langza, Hikkim and Komic.",
          "Kaza to Chandratal over Kunzum La; night in camps near the lake.",
          "Chandratal to Manali via Batal, Gramphu and the Atal Tunnel.",
          "Manali to Chandigarh or Delhi.",
        ],
      },
      {
        h: "Why go up via Kinnaur",
        p: [
          "Entering through Kinnaur climbs gradually, from about 2,000 m at Narkanda to about 3,800 m at Kaza, which helps the body acclimatise. Coming in from Manali goes straight over Kunzum La at about 4,550 m, which is harder on the first day. If you can only do one direction, Shimla to Kaza is the gentler way in.",
        ],
      },
      {
        h: "Road conditions",
        list: [
          "The Hindustan-Tibet road through Kinnaur has narrow, rock-cut sections and landslide zones, especially in the monsoon",
          "Between Gramphu and Losar on the Manali side, the road is rough with water crossings, best crossed in the morning",
          "Kunzum La usually opens in late May or June and closes after the first heavy snow in October or November",
          "Drive in daylight, start early, and keep one buffer day in the plan",
        ],
      },
      {
        h: "Altitude and health",
        p: [
          "Kaza is at about 3,800 m, and villages like Kibber, Langza and Komic are higher. Drink plenty of water, avoid alcohol for the first days and walk slowly. Headache, nausea or breathlessness can be signs of altitude sickness; rest, and descend if symptoms worsen. Travellers with heart or lung conditions should take medical advice before the trip.",
        ],
      },
      {
        h: "Where to stay in Spiti",
        p: [
          "Kaza has hotels and homestays of different categories. Homestays in Kibber, Langza, Demul and Komic give a real village experience with home-cooked food. Tabo and Nako have small hotels and guest houses, and Chandratal has seasonal camps along the approach road (not on the lakeshore).",
        ],
      },
      {
        h: "Practical tips",
        list: [
          "Carry cash; ATMs are few and mainly in Kaza and Reckong Peo",
          "Postpaid BSNL and Jio work best; coverage disappears between towns",
          "Fuel up at Kaza; there is little or none between Kaza and Manali",
          "Foreign nationals need an inner line permit for the stretch near the border, available at Reckong Peo or Kaza",
          "Carry warm layers even in July; Chandratal nights are near freezing",
        ],
      },
      {
        h: "What you will see on the way",
        list: [
          "Narkanda's apple orchards and Himalayan views",
          "The Sutlej gorge and Rampur",
          "Kalpa facing the Kinner Kailash range",
          "Nako's lake and stone village",
          "Tabo Monastery's murals and stucco images",
          "Dhankar Monastery on its cliff above the Spiti and Pin rivers",
          "Key Monastery above Kaza, and the high villages of Kibber, Langza, Hikkim and Komic",
          "Chandratal, the crescent lake at about 4,300 m",
        ],
      },
      {
        h: "Food in Spiti",
        p: [
          "Food in Spiti is simple and warming: thukpa, momos, tingmo bread, aktori buckwheat pancakes, butter tea and seabuckthorn juice. Homestays serve home-cooked meals with vegetables from their own fields, and Kaza has cafés and restaurants catering to travellers in season.",
        ],
      },
      {
        h: "Spiti in winter",
        p: [
          "From November to April Kunzum La is closed, so Spiti is entered and left through Kinnaur only. Temperatures fall far below freezing, water lines freeze and only some homestays stay open. Winter Spiti trips, often for snow-leopard sighting around Kibber, are for prepared travellers with experienced local drivers and flexible dates.",
        ],
      },
    ],
    faqs: [
      { q: "Where should we spend the first night to acclimatise?", a: "On the Kinnaur route, Kalpa or Sangla at about 2,700 to 2,960 m are ideal first nights before going higher. Nako or Tabo make good second nights before Kaza." },
      { q: "Is Chandratal included in an 8-day Spiti trip?", a: "Yes, on the circuit through Kunzum La between about June and early October. Outside that window, the road to Chandratal is closed." },
      { q: "How much does a Spiti road trip cost?", a: "It depends on the number of days, the vehicle (an SUV is recommended), homestays versus hotels and your starting city. Share your plan to compare up to 3 itemised quotes." },
      { q: "Do I need a permit for Spiti Valley?", a: "Indian travellers need no permit for the main circuit. Foreign nationals need an inner line permit for the stretch near the border, issued at Reckong Peo or Kaza." },
      { q: "Is 8 days enough for Spiti Valley?", a: "Yes, for the full Shimla to Manali circuit. Add a day or two for buffer, Pin Valley or a slower pace." },
      { q: "Which month is best for a Spiti road trip?", a: "June to September, when both the Kinnaur and Kunzum La routes are usually open and Chandratal is accessible." },
      { q: "Should I start from Shimla or Manali?", a: "Shimla, if you can. The gradual climb through Kinnaur helps acclimatisation before you reach Kaza." },
      { q: "Can I do Spiti in a sedan?", a: "It is possible on the Kinnaur side in good conditions, but an SUV with good ground clearance and an experienced mountain driver is strongly recommended, especially for the Manali side." },
      { q: "Is Spiti Valley safe for families?", a: "Yes, with an acclimatisation-friendly plan, an experienced driver and a buffer day. Families with small children or older parents often stay at lower altitudes such as Kalpa and Tabo longer." },
    ],
  },

  "himachal-family-trip-from-delhi": {
    intro:
      "The easiest Himachal family trip from Delhi is Shimla and Manali in 6 days, or Dharamshala and Dalhousie in 5. Both stay at comfortable altitudes, have family hotels with lifts and heating, and mix short drives with snow points, toy trains and gentle walks. Avoid Spiti and Ladakh with very young children or older parents unless you plan a slow, acclimatisation-friendly route.",
    sections: [
      {
        h: "Option 1: Shimla and Manali in 6 days",
        days: [
          "Delhi to Shimla by cab, or train to Kalka and the toy train. Evening on the Mall Road.",
          "Kufri and the Himalayan Nature Park, then Jakhu Temple.",
          "Shimla to Manali along the Beas, with stops at Pandoh Dam and for rafting near Kullu.",
          "Hadimba Temple, Old Manali and the Vashisht hot springs.",
          "Solang Valley for snow play and the ropeway; Atal Tunnel to Sissu if the weather is good.",
          "Return to Delhi by cab or overnight Volvo.",
        ],
      },
      {
        h: "Option 2: Dharamshala and Dalhousie in 5 days",
        days: [
          "Delhi to Dharamshala by overnight Volvo or a flight to Gaggal; rest and walk McLeodganj.",
          "Dalai Lama temple, Bhagsu waterfall and the Dharamshala Skyway ropeway.",
          "Dharamshala to Dalhousie (about 120 km); evening on the Mall.",
          "Khajjiar meadow for horse rides and zorbing, and Kalatop forest.",
          "Return via Pathankot by train or road to Delhi.",
        ],
      },
      {
        h: "Why these routes suit families",
        list: [
          "Altitudes of about 1,500 to 2,200 m for overnight stays, gentle on children and older parents",
          "Snow points within an hour or two (Kufri, Solang, Sissu) without high passes",
          "Family hotels with lifts, heating and connecting rooms are easy to find",
          "Short, varied days: rides, walks, temples and play areas",
        ],
      },
      {
        h: "Best time for a family trip",
        p: [
          "School summer holidays (May and June) are the busiest; book early and start sightseeing days at 7 am to beat traffic. October and the first half of November are quieter and clear. For snow, plan late December to February, add a buffer day for possible road closures, and pack proper winter clothing for children.",
        ],
      },
      {
        h: "Tips for travelling with children and parents",
        list: [
          "Break long drives with stops every two hours; carry snacks and motion-sickness remedies",
          "Choose hotels close to the Mall or with lifts for older parents",
          "Rent snow suits and boots at Solang rather than buying",
          "Keep children away from river edges at Kullu, Manali and Khajjiar",
          "Paragliding and some adventure rides have minimum age and weight rules; check with the operator",
        ],
      },
      {
        h: "Customising the trip",
        p: [
          "Agents on Tavel Package can adjust the plan to your group: an extra rest day, a cab large enough for luggage and a pram, ground-floor rooms, vegetarian meals or a toy train leg. Share your dates, the ages in your group and your budget to get up to 3 customised quotes.",
        ],
      },
      {
        h: "Kid-friendly highlights",
        list: [
          "The Kalka Shimla toy train through more than 100 tunnels",
          "Kufri's Himalayan Nature Park and snow in winter",
          "The Solang Valley ropeway and snow play",
          "Horse rides and zorbing at Khajjiar",
          "The Dharamshala Skyway ropeway",
          "Riverside walks along the Beas in Manali",
        ],
      },
      {
        h: "Food for families",
        p: [
          "Family-friendly vegetarian and North Indian food is easy to find in Shimla, Manali and Dharamshala. Most hotels serve breakfast and dinner, and restaurants on the Mall Roads have options for children. If anyone in your group has dietary needs, mention them when you request quotes so agents can choose suitable hotels.",
        ],
      },
      {
        h: "Packing for a family trip to Himachal",
        list: [
          "Layers for everyone: mornings and evenings are cold even in May",
          "Warm jackets, caps and gloves for children from October to March",
          "Comfortable walking shoes; Mall Roads are pedestrian and hilly",
          "Basic medicines, motion-sickness tablets and any regular prescriptions",
          "Snacks and water for long drives",
        ],
      },
    ],
    faqs: [
      { q: "Is Himachal good for elderly parents?", a: "Yes. Shimla, Manali and Dharamshala are at moderate altitudes with good hotels. Choose hotels with lifts, keep walking short on steep Mall Roads and avoid long same-day drives." },
      { q: "Can we combine Shimla, Manali and Dharamshala in one family trip?", a: "Yes, in about 8 days: two nights in Shimla, three in Manali and two in Dharamshala. Break the Manali to Dharamshala drive (about 230 km) early in the day." },
      { q: "Which snow point is easiest with small children?", a: "Kufri near Shimla and Solang Valley near Manali are short drives with rental gear, food stalls and toilets, which makes them the easiest with small children." },
      { q: "Do we need to book the toy train in advance?", a: "Yes, especially in summer and winter holidays. Book Kalka to Shimla toy train seats on IRCTC as early as possible." },
      { q: "Which month is best for a Himachal family trip?", a: "May and June for school holidays and pleasant weather, October for quieter roads and clear skies, and late December to February for snow." },
      { q: "Which is the best place in Himachal for a family trip?", a: "Shimla and Manali for snow and variety, or Dharamshala and Dalhousie for a quieter, greener trip. Both suit children and older parents." },
      { q: "How many days are enough for a Himachal family trip from Delhi?", a: "Five to six days for one circuit; seven to eight to combine Shimla, Manali and Dharamshala." },
      { q: "Is Himachal safe for kids in winter?", a: "Yes, with warm clothing, heated hotels and a buffer day for snow. Choose snow points that are a short drive away, such as Kufri and Solang." },
      { q: "Should we travel by cab or bus with family?", a: "A private cab is easiest with children and luggage. Overnight Volvos are cheaper but less comfortable for small children and older parents." },
      { q: "Is Spiti suitable for a family trip?", a: "For older children and fit adults with a slow plan, yes. With infants or elderly parents, choose Shimla, Manali or Dharamshala instead." },
    ],
  },

  "dharamshala-mcleodganj-weekend": {
    intro:
      "A Dharamshala and McLeodganj weekend from Delhi works best with overnight Volvo buses both ways: Friday night out, Saturday in McLeodganj and Bhagsu, Sunday on the Triund trek or at Dharamkot and Norbulingka, and Sunday night back. Dharamshala is about 510 km from central Delhi, and Gaggal airport, 15 km away, has flights for a faster trip.",
    sections: [
      {
        h: "Weekend plan from Delhi",
        days: [
          "Friday night: overnight Volvo from Delhi's Kashmere Gate or Majnu ka Tilla to McLeodganj or Dharamshala.",
          "Saturday: McLeodganj market, the Dalai Lama temple (Tsuglagkhang) and Namgyal Monastery, Bhagsu waterfall and a café evening in Dharamkot.",
          "Sunday: Triund trek from Galu Devi temple (about 7 km one way), or a slower day at Norbulingka, the war memorial and the HPCA stadium; evening Volvo to Delhi.",
        ],
      },
      {
        h: "Dharamshala vs McLeodganj: where to stay",
        p: [
          "Lower Dharamshala is the district town, with the bus stand and the cricket stadium. McLeodganj, about 10 km uphill, is where most visitors stay, with the Tibetan quarter, cafés and guest houses. Dharamkot and Bhagsu, just above, are quieter and closer to the Triund trail. The Dharamshala Skyway ropeway links lower Dharamshala with McLeodganj in about 10 minutes.",
        ],
      },
      {
        h: "Things to do in a weekend",
        list: [
          "The Dalai Lama temple complex, the Tibet Museum and Namgyal Monastery",
          "Bhagsu waterfall and Bhagsunag temple",
          "Triund trek for views of the Dhauladhar range",
          "Norbulingka Institute for Tibetan arts and crafts",
          "The HPCA cricket stadium and the war memorial in lower Dharamshala",
          "Tibetan food in McLeodganj: momos, thukpa and thenthuk",
        ],
      },
      {
        h: "Best time for a Dharamshala weekend",
        p: [
          "March to June and September to November are the best months, with clear days for Triund. July and August bring some of the heaviest monsoon rain in Himachal. December to February is cold, with snow on the Dhauladhar and occasionally in McLeodganj, which suits a quiet winter break.",
        ],
      },
      {
        h: "Turning the weekend into a longer trip",
        p: [
          "With an extra day or two, add Palampur's tea gardens (about 35 km), Bir Billing for paragliding (about 65 km), or Dalhousie and Khajjiar (about 120 km). Agents on Tavel Package can plan a 4 to 6 day Kangra valley trip with one cab.",
        ],
      },
      {
        h: "Practical tips",
        list: [
          "Book Volvo seats early for Friday and Sunday nights",
          "Wear good shoes; McLeodganj and Dharamkot lanes are steep",
          "Carry a rain jacket from June to September",
          "Respect monastery rules: walk clockwise and ask before photographing monks",
        ],
      },
      {
        h: "Getting around Dharamshala and McLeodganj",
        p: [
          "Shared taxis and HRTC buses run between lower Dharamshala and McLeodganj all day, and the Skyway ropeway is the quickest link. McLeodganj, Bhagsu and Dharamkot are best explored on foot, though the lanes are steep. Taxis wait in McLeodganj's main square for trips to the Triund trailhead, Norbulingka and Kangra.",
        ],
      },
      {
        h: "Tibetan culture in McLeodganj",
        p: [
          "McLeodganj has been home to the Dalai Lama since 1960 and is the seat of the Central Tibetan Administration, which is why it is often called Little Lhasa. Visit the Tsuglagkhang temple, the Tibet Museum and the Library of Tibetan Works and Archives, and look out for prayer ceremonies, Tibetan handicraft shops and cooking classes. Losar, the Tibetan new year, falls in February or March.",
        ],
      },
      {
        h: "Food to try",
        list: [
          "Momos, thukpa and thenthuk (hand-pulled noodle soup)",
          "Shapale, fried Tibetan meat or vegetable pastries",
          "Tingmo, soft steamed bread, with stews",
          "Butter tea, and Kangra tea from Palampur",
        ],
      },
      {
        h: "Weekend budget: what decides the cost",
        list: [
          "Volvo class and whether you fly to Gaggal instead",
          "Guest house versus hotel in McLeodganj or Dharamkot",
          "Taxi use for Triund trailhead, Norbulingka and lower Dharamshala",
          "Meals in cafés and any guided trek",
        ],
        p: ["A weekend can be done on a tight budget with buses and guest houses, or comfortably with flights and a hotel. Agents can quote either."],
      },
    ],
    faqs: [
      { q: "Can I fly to Dharamshala for a weekend?", a: "Yes. Gaggal (Kangra) airport, about 15 km from Dharamshala, has flights from Delhi, which saves the overnight bus and leaves more time in McLeodganj." },
      { q: "How do I get from Dharamshala to McLeodganj?", a: "By the Dharamshala Skyway ropeway in about 10 minutes, or by shared taxi or HRTC bus along the road, about 10 km and 30 minutes. Taxis also wait at the Dharamshala bus stand." },
      { q: "Which is better for a weekend, Dharamshala or Kasol?", a: "Choose Dharamshala and McLeodganj for Tibetan culture, monasteries and the Triund trek; choose Kasol for riverside cafés and the Kheerganga trek. Both suit an overnight-bus weekend from Delhi." },
      { q: "What should I not miss in McLeodganj?", a: "The Dalai Lama temple complex, Bhagsu waterfall, a Tibetan meal of momos and thenthuk, and the view of the Dhauladhar from Triund or Naddi." },
      { q: "Is there snow in Dharamshala in winter?", a: "Snow falls on the Dhauladhar peaks behind Dharamshala every winter and occasionally in McLeodganj and at Triund, usually between late December and February." },
      { q: "Is McLeodganj good for a weekend with family?", a: "Yes. Bhagsu waterfall, the Dalai Lama temple, the Skyway ropeway and Norbulingka suit families; keep Triund for fit teenagers and adults." },
      { q: "Is a weekend enough for Dharamshala?", a: "Yes, with overnight buses both ways. You get one day for McLeodganj and Bhagsu and one for Triund or Norbulingka." },
      { q: "How far is Dharamshala from Delhi?", a: "About 510 km from central Delhi by road, 10 to 12 hours. Overnight Volvo buses and flights to Gaggal airport are the usual options." },
      { q: "Where should I stay in Dharamshala for a weekend?", a: "McLeodganj or Dharamkot, for cafés, the Tibetan quarter and easy access to Triund." },
      { q: "Can I do the Triund trek on a weekend trip?", a: "Yes. Start from Galu Devi temple by 8 or 9 am and you will be back in McLeodganj in the afternoon." },
    ],
  },

  "manali-in-december-snow-guide": {
    intro:
      "Manali in December is cold and usually snowy by the last week of the month. Days are around 7 to 12°C and nights below freezing, Solang Valley and Sissu are reliable snow points, and Rohtang Pass is closed until mid-May. Christmas and New Year are the busiest dates of the winter, so book hotels, cabs and Volvo seats early and keep a buffer day for snow closures.",
    sections: [
      {
        h: "Will there be snow in Manali in December?",
        p: [
          "Snowfall in Manali town usually begins in the second half of December, but early December can be dry and cold. Snow is far more reliable at Solang Valley (14 km), at the Atal Tunnel north portal and at Sissu in Lahaul (about 40 km). If Manali town is dry, these points almost always have snow.",
        ],
      },
      {
        h: "Manali weather in December",
        list: [
          "Day temperatures of about 7 to 12°C, nights about -3 to 2°C",
          "Short days with early sunsets around 5 pm",
          "Fresh snowfall can arrive with western disturbances, closing roads for a day or two",
          "Colder still at Solang, Sissu and the Atal Tunnel",
        ],
      },
      {
        h: "What to do in Manali in December",
        list: [
          "Snow play, skiing lessons and the ropeway at Solang Valley",
          "The Atal Tunnel to Sissu for snow views of Lahaul, subject to road status",
          "Hadimba Temple in the snow-covered cedar forest",
          "Vashisht hot springs on a cold morning",
          "Christmas and New Year events in Old Manali cafés and hotels",
          "Igloo and snow stays near Sethan when there is enough snow",
        ],
      },
      {
        h: "Roads and travel in December",
        p: [
          "The Delhi to Manali highway stays open in December. Roads beyond Solang and through the Atal Tunnel can close after heavy snow, and authorities may allow only 4x4 vehicles or vehicles with chains, or restrict night travel. Ask your driver to check the Kullu and Lahaul police updates each morning, and leave early to beat holiday traffic at Solang.",
        ],
      },
      {
        h: "What to pack",
        list: [
          "Thermal inner wear, a heavy down jacket, gloves, woollen cap and socks",
          "Waterproof boots with grip; snow suits and boots can be rented at Solang",
          "Sunglasses and sunscreen for the snow glare",
          "A small power bank; cold drains phone batteries quickly",
        ],
      },
      {
        h: "Christmas and New Year in Manali",
        p: [
          "From about 20 December to 2 January Manali is at its busiest, with hotels full and traffic jams on the Solang road. Book stays and cabs well ahead, choose a hotel with central heating, and plan the Solang or Sissu day for a weekday morning. The Manali Winter Carnival is held in January, a good reason to stay into the new year.",
        ],
      },
      {
        h: "Where to stay in Manali in December",
        p: [
          "Choose a hotel with central heating or room heaters and reliable hot water; this matters more than the view in December. Stays near the Mall Road are convenient for food and taxis in the cold evenings. Old Manali cottages are atmospheric but colder and on steep, sometimes icy lanes. Hotels towards Solang give quick access to snow but are further from restaurants.",
        ],
      },
      {
        h: "December alternatives if Manali is dry",
        p: [
          "If Manali town has no snow, plan your snow day at Solang Valley or Sissu, which usually have snow by December. Kufri near Shimla and Narkanda are other options on a Shimla Manali trip. For guaranteed deep snow and skiing, Gulmarg in Kashmir is the most reliable choice in December.",
        ],
      },
      {
        h: "Safety tips for snow days",
        list: [
          "Start early and return before dark; roads freeze after sunset",
          "Use local taxi union cabs with drivers experienced in snow",
          "Do not walk on frozen streams or lakes",
          "Keep children warm and dry; change wet clothes quickly",
          "Follow police instructions on road closures and vehicle restrictions",
        ],
      },
    ],
    faqs: [
      { q: "Is the Delhi to Manali Volvo running in December?", a: "Yes. Overnight Volvo buses run through December, but seats around Christmas and New Year sell out early, so book well ahead." },
      { q: "Which is better in December, Manali or Shimla?", a: "Manali has more reliable snow points nearby at Solang and Sissu, while Shimla's snow depends on the week. Many travellers combine both, with Kufri as Shimla's snow point." },
      { q: "How many days should I plan for Manali in December?", a: "Four to five days, including a buffer day in case fresh snow closes the roads to Solang or the Atal Tunnel for a day." },
      { q: "Is it too cold to visit Manali in December with kids?", a: "Not if you pack proper winter clothing and choose a heated hotel. Keep snow days short and plan indoor breaks for small children." },
      { q: "Is the Atal Tunnel open in December?", a: "Usually yes, but approach roads can close after heavy snowfall, and authorities may restrict access to 4x4 vehicles or daytime travel. Check the day's advisory before leaving Manali." },
      { q: "Is December a good time to visit Manali?", a: "Yes, for snow and the festive season. Expect cold days, possible road closures beyond Solang, and peak prices around Christmas and New Year." },
      { q: "Is Rohtang Pass open in December?", a: "No. Rohtang is closed from about November to mid-May. Go to Solang Valley or Sissu through the Atal Tunnel for snow." },
      { q: "When does snowfall start in Manali?", a: "Usually in the second half of December, with the most reliable snowfall in January and February." },
      { q: "Can I drive my own car to Manali in December?", a: "Yes, to Manali. Beyond Solang and through the Atal Tunnel, authorities may require 4x4 vehicles or chains after snow; check advisories each day." },
      { q: "What is the temperature in Manali in December?", a: "Typically about 7 to 12°C by day and -3 to 2°C at night, colder at Solang and Sissu." },
    ],
  },
};
