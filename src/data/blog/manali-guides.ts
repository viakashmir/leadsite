import type { BlogPost, BlogSection } from "./types";

// Manali: 10 answer-first guides (900+ words each). Altitudes and distances
// are approximate; road openings, permits and adventure seasons change, so
// posts say "usually" and point to official sources. No prices, no em dashes.

const REACH = {
  h: "Getting to Manali",
  p: [
    "By road, Manali is about 540 km from Delhi, usually 12 to 14 hours, via Chandigarh, Bilaspur, Mandi and Kullu. Overnight HRTC and private Volvo buses from Delhi are the most popular option, reaching Manali in the morning.",
    "By air, the nearest airport is Kullu-Bhuntar (KUU), about 50 km away, with limited, weather-dependent flights; Chandigarh airport, about 300 km away, is the more reliable gateway. By rail, the practical railheads are Chandigarh and Kiratpur Sahib, with the rest of the journey by road.",
  ],
};

const BASE: BlogPost[] = [
  {
    slug: "best-time-to-visit-manali",
    title: "Best Time to Visit Manali: Month-by-Month Weather, Snow and Crowds",
    description: "The best time to visit Manali month by month: summer for Solang and Atal Tunnel, December to February for snow, October for clear skies, and monsoon cautions.",
    category: "Planning",
    destination: "himachal",
    city: "manali",
    date: "2026-11-03",
    intro:
      "The best time to visit Manali is March to June for pleasant weather and open roads to Solang Valley and the Atal Tunnel, and October to November for clear skies and fewer crowds. For snow, visit between December and February, when Manali and Solang usually get snowfall. Avoid the peak monsoon of July and August if you can: heavy rain and landslides often disrupt the Kullu valley roads.",
    sections: [
      {
        h: "Manali's seasons at a glance",
        p: ["Manali sits at about 2,050 m at the head of the Kullu valley, so it is cooler and snowier than Shimla. The seasons decide almost everything about a trip: which roads are open, whether you see snow and how crowded the town is."],
        list: [
          "Spring (March to April): snow lingers on the slopes, apple blossom in the valley, cool days",
          "Summer (May to June): the peak season, pleasant days, Rohtang Pass usually reopens",
          "Monsoon (July to September): heavy rain, landslide risk, green valley",
          "Autumn (October to November): clear skies, golden light, quiet roads",
          "Winter (December to February): cold, frequent snow, Solang Valley snow sports",
        ],
      },
      {
        h: "Month by month",
        list: [
          "January: the coldest month, frequent snow, skiing at Solang when cover is good",
          "February: still snowy, quieter after the new year rush",
          "March: snow melting in town but still at Solang and above; good value",
          "April: blossoms in the orchards, pleasant days, crowds begin",
          "May: peak season for families; Rohtang usually opens with permits",
          "June: busy until school holidays end; best for Lahaul trips",
          "July: monsoon arrives; landslides possible on the Kullu to Mandi road",
          "August: heaviest rain; the quietest and cheapest month",
          "September: rain eases late in the month; fresh, green valley",
          "October: clear skies, apple harvest, good road trips to Lahaul",
          "November: cold, quiet, first snow possible late in the month",
          "December: festive season with snow in many years; book early for Christmas and New Year",
        ],
      },
      {
        h: "Best time for snow in Manali",
        p: [
          "Snowfall in Manali town is most likely from late December to February, with Solang Valley, Gulaba and the Atal Tunnel's north portal at Sissu often holding snow into March. Snow varies from year to year, so keep dates flexible and watch the forecast a week out.",
          "Even in April and May, snow points like Rohtang (with a permit) and the slopes above Solang still have snow, which makes late spring good for families who want snow without deep cold.",
        ],
      },
      {
        h: "Best time for adventure activities",
        list: [
          "Paragliding: usually spring and autumn, paused in the monsoon and some winter weeks",
          "River rafting on the Beas: roughly March to June and again after the monsoon",
          "Skiing and snowboarding at Solang: January to March when snow cover allows",
          "Treks such as Hampta Pass: June to September",
        ],
      },
      {
        h: "When to avoid Manali",
        p: [
          "Long weekends, May and June weekends and the Christmas to New Year week bring traffic jams on the road to Solang and the Atal Tunnel, and full hotels. In July and August, landslides can close roads for hours or days. If you travel then, keep a buffer day and avoid driving after dark.",
        ],
      },
      {
        h: "Best time for honeymoons and families",
        p: [
          "Couples often pick October, November or February for quiet, scenic trips, and December to February for snow. Families usually come in May and June for pleasant weather and snow points at height, so book hotels and Volvo seats well ahead.",
        ],
      },
      REACH,
      {
        h: "What to pack by season",
        list: [
          "Summer: layers, a warm jacket for evenings and snow points, sunscreen",
          "Monsoon: rain jacket, quick-dry clothes, shoes with grip",
          "Autumn: sweaters and a warm jacket",
          "Winter: thermals, a heavy jacket, gloves, cap and waterproof boots",
        ],
      },
    ],
    faqs: [
      { q: "Which month is best for Manali?", a: "May and June for pleasant weather and open high roads, October for clear skies and fewer crowds, and December to February for snow." },
      { q: "When does it snow in Manali?", a: "Usually from late December to February. Solang Valley and Sissu often keep snow into March." },
      { q: "Is Manali good in the monsoon?", a: "It is green and quiet, but heavy rain and landslides can disrupt roads. Travel with a buffer day and check road status." },
      { q: "Is Rohtang Pass open in winter?", a: "No. Rohtang usually opens around May and closes with heavy snow in late autumn. The Atal Tunnel to Sissu stays open most of the year." },
      { q: "Is Manali crowded in June?", a: "Yes, June is peak season. Travel on weekdays, start early for Solang and book ahead." },
      { q: "Is November a good time for Manali?", a: "Yes, for quiet roads, clear skies and cold, crisp days. Snow is possible late in the month." },
    ],
  },

  {
    slug: "places-to-visit-in-manali",
    title: "18 Best Places to Visit in Manali and Around",
    description: "The best places to visit in Manali: Hadimba Temple, Old Manali, Vashisht, Solang Valley, Atal Tunnel and Sissu, Naggar Castle, Jogini Falls, Rohtang and more.",
    category: "Planning",
    destination: "himachal",
    city: "manali",
    date: "2026-11-03",
    intro:
      "The best places to visit in Manali are Hadimba Temple, Old Manali, the Vashisht hot springs and the Mall Road in town; Solang Valley and the Atal Tunnel to Sissu for snow and views; and Naggar Castle and Jogini Falls for heritage and nature. Rohtang Pass is open in summer with a permit. Three to four days covers Manali and its highlights comfortably.",
    sections: [
      {
        h: "In and around Manali town",
        list: [
          "Hadimba Devi Temple: a wooden, pagoda-roofed temple built in 1553 in a cedar forest",
          "Old Manali: village lanes, cafes and the Manu temple above the Manalsu stream",
          "Vashisht: hot spring baths and an old stone temple, about 3 km from town",
          "Mall Road: shops, Tibetan market and restaurants",
          "Van Vihar: a riverside deodar park with boating in season",
          "Club House: indoor games and riverside space popular with families",
          "Tibetan monasteries near the Mall",
        ],
      },
      {
        h: "Snow and high-altitude spots",
        list: [
          "Solang Valley (about 13 km): ropeway, paragliding in season, skiing in winter",
          "Atal Tunnel (south portal about 25 km): a 9 km highway tunnel under the Rohtang range",
          "Sissu (beyond the tunnel): a waterfall and Chandra river views in Lahaul",
          "Gulaba and Kothi: snow points on the old Rohtang road",
          "Rohtang Pass (about 51 km): open roughly May to November with an online permit",
        ],
      },
      {
        h: "Heritage and nature beyond town",
        list: [
          "Naggar Castle (about 21 km): a stone and timber castle now a heritage hotel",
          "Roerich Art Gallery at Naggar: the former home of painter Nicholas Roerich",
          "Jogini Falls: a walk of about an hour from Vashisht",
          "Kullu: river rafting on the Beas and the shawl factories",
          "Manikaran and the Parvati valley: a day trip or a stay on the way to Kasol",
        ],
      },
      {
        h: "A 3-day plan",
        days: [
          "Hadimba Temple, Old Manali, the Manu temple and the Mall Road.",
          "Solang Valley in the morning, then the Atal Tunnel to Sissu if open.",
          "Naggar Castle and the Roerich gallery, Jogini Falls or Vashisht hot springs, then depart.",
        ],
      },
      {
        h: "Best places for families",
        p: [
          "Children love Solang's snow and ropeway, Van Vihar's boats and the open space at the Club House. Hadimba Temple's cedar forest is good for a gentle walk. Keep high-altitude stops like Rohtang and Sissu short for small children and older parents.",
        ],
      },
      {
        h: "Best places for couples",
        p: [
          "Couples enjoy Old Manali's cafes, a quiet morning at Hadimba before the crowds, Naggar's heritage and sunsets over the Beas. In winter, snow at Solang and Sissu makes for memorable days.",
        ],
      },
      {
        h: "Permits and timings",
        list: [
          "Rohtang Pass needs an online vehicle permit from the HP government portal; Solang, the Atal Tunnel and Sissu do not",
          "Vehicles entering Lahaul may need to register on the free e-Aagman portal",
          "Hadimba Temple is busiest from mid-morning; go early",
          "Check Naggar Castle and gallery opening hours before you go",
        ],
      },
      REACH,
    ],
    faqs: [
      { q: "What is the most famous place in Manali?", a: "Hadimba Devi Temple and Solang Valley are the most visited, along with Old Manali and the Mall Road." },
      { q: "How many days are enough for Manali?", a: "Three to four days covers the town, Solang, the Atal Tunnel and Sissu, and Naggar." },
      { q: "Do I need a permit for Solang Valley?", a: "No. Permits are needed for Rohtang Pass, not for Solang Valley, the Atal Tunnel or Sissu." },
      { q: "Is Naggar worth visiting?", a: "Yes. The castle, the Roerich gallery and the views over the Kullu valley make a good half day." },
      { q: "How far is Solang from Manali?", a: "About 13 km, around 30 to 45 minutes by road outside traffic." },
      { q: "Can I visit Manikaran from Manali?", a: "Yes, as a long day trip of about 80 km each way, or stay in Kasol on the way." },
    ],
  },

  {
    slug: "solang-valley-guide",
    title: "Solang Valley Guide: Snow, Ropeway, Paragliding and Skiing",
    description: "A Solang Valley guide: how far from Manali, best time for snow, the ropeway, paragliding and skiing seasons, safety tips and how to avoid queues.",
    category: "Adventure",
    destination: "himachal",
    city: "manali",
    date: "2026-11-03",
    intro:
      "Solang Valley is a wide valley about 13 km north of Manali, known for snow in winter, a ropeway and adventure sports. Visit from December to March for snow play and skiing, and from spring to autumn for paragliding, zorbing and views of the peaks. Go early in the morning to avoid traffic and long queues, and agree activity details before you pay.",
    sections: [
      {
        h: "How to reach Solang Valley",
        p: [
          "Solang is on the road from Manali towards the Atal Tunnel, about 13 km and 30 to 45 minutes outside traffic. Taxis run from Manali's union stands, and private cabs can usually go up. In heavy snow or traffic, vehicles may be stopped below the valley and you may need to walk or take local vehicles.",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "December to February: snow play, sledging, beginner skiing",
          "March: spring snow, fewer crowds",
          "April to June: green meadows, paragliding, ropeway views",
          "July to September: monsoon; some activities paused",
          "October to November: clear views, quiet",
        ],
      },
      {
        h: "Things to do",
        list: [
          "Ride the Solang ropeway towards Mount Phatru for wide views",
          "Tandem paragliding from the slopes, in season and weather permitting",
          "Skiing and snowboarding lessons on beginner slopes in winter",
          "Snow scooters, sledges and tube slides in the snow season",
          "Zorbing and ATV rides on the meadows in summer",
        ],
      },
      {
        h: "Skiing in Solang",
        p: [
          "Solang has slopes suited to beginners and an institute nearby that runs courses: the Atal Bihari Vajpayee Institute of Mountaineering and Allied Sports in Manali offers skiing courses in winter. For a first try, hire equipment and an instructor from operators at the base, and stick to the marked beginner area.",
        ],
      },
      {
        h: "Paragliding safety",
        p: [
          "Fly only with registered operators and certified pilots, check that harnesses and helmets are provided, and follow the pilot's instructions. Flights are paused in strong wind and rain, which is common in the monsoon. Children and older travellers should check age and health limits with the operator first.",
        ],
      },
      {
        h: "Avoiding queues and traffic",
        p: [
          "Leave Manali by 8 am, especially at weekends and in winter after fresh snow. Book the ropeway early in the day, and agree prices, duration and what is included for each activity before you start; rates are often displayed by local associations.",
        ],
      },
      {
        h: "Solang with the Atal Tunnel and Sissu",
        p: [
          "Solang sits on the way to the Atal Tunnel, so many travellers combine Solang in the morning with Sissu across the tunnel after lunch. In winter, the road past Solang may close after heavy snow, so check before going on.",
        ],
      },
      REACH,
    ],
    faqs: [
      { q: "How far is Solang Valley from Manali?", a: "About 13 km, roughly 30 to 45 minutes by road without traffic." },
      { q: "Is there snow in Solang in April?", a: "Often yes on the higher slopes, though the base may be melting. Check conditions before you go." },
      { q: "Is paragliding in Solang safe?", a: "With registered operators and certified pilots in good weather, it is a popular tandem activity. Avoid flying in strong wind or rain." },
      { q: "Can beginners ski in Solang?", a: "Yes. There are beginner slopes, equipment hire and instructors in winter." },
      { q: "Do I need a permit for Solang?", a: "No. Permits are needed for Rohtang Pass, not Solang." },
      { q: "Is Solang good for kids?", a: "Yes. Snow play, sledges and the ropeway suit children; dress them warmly and keep visits short in deep winter." },
    ],
  },

  {
    slug: "atal-tunnel-sissu-guide",
    title: "Atal Tunnel and Sissu: How to Visit from Manali",
    description: "Visiting the Atal Tunnel and Sissu from Manali: tunnel length and timings, permits and registration, Sissu waterfall, winter snow and road safety tips.",
    category: "Planning",
    destination: "himachal",
    city: "manali",
    date: "2026-11-03",
    intro:
      "The Atal Tunnel is a roughly 9 km highway tunnel under the Rohtang range, opened in 2020, that connects the Manali side with Lahaul in minutes instead of a long climb over Rohtang Pass. On the far side lies Sissu, with a waterfall and wide views of the Chandra river. It is an easy half-day trip from Manali, open most of the year, and does not need the Rohtang permit.",
    sections: [
      {
        h: "About the Atal Tunnel",
        p: [
          "The tunnel runs at about 3,000 m between its south portal near Dhundi, around 25 km from Manali, and its north portal near Sissu in Lahaul. It is one of the longest highway tunnels at this altitude in the world and has made Lahaul reachable through much of the winter.",
        ],
      },
      {
        h: "Do you need a permit?",
        p: [
          "No Rohtang permit is needed for the Atal Tunnel or Sissu. Tourist vehicles entering Lahaul may need to register on the Lahaul-Spiti e-Aagman portal, which is free, and rules can change, so check before you go. A separate online permit is needed only if you are driving to Rohtang Pass itself.",
        ],
      },
      {
        h: "Sissu: what to see",
        list: [
          "Sissu waterfall, often frozen in winter",
          "The Chandra river and wide Lahaul valley views",
          "Snow fields near the north portal from about December to March",
          "The small Sissu lake and helipad area",
          "Cafes and dhabas along the highway",
        ],
      },
      {
        h: "Best time to visit",
        p: [
          "Spring and autumn give clear roads and views. In winter, the Sissu side is often snow-covered and very cold, which is the main draw for snow lovers, but heavy snowfall can close the tunnel approaches for a day or more. In summer, the tunnel is the start of road trips deeper into Lahaul, to Keylong and Jispa.",
        ],
      },
      {
        h: "A half-day plan",
        days: [
          "Leave Manali early, stop at Solang Valley for an hour.",
          "Drive through the Atal Tunnel; stop at the north portal viewpoint and Sissu.",
          "Return to Manali by mid-afternoon before the light fades and roads refreeze.",
        ],
      },
      {
        h: "Safety in the tunnel and on the roads",
        list: [
          "Follow the speed limit and do not stop inside the tunnel",
          "Carry warm clothes: Sissu is much colder than Manali",
          "After snowfall, use a local driver with chains and drive in daylight",
          "Altitude is around 3,000 m: walk slowly and stay hydrated",
          "Traffic jams near Solang and the south portal are common on weekends",
        ],
      },
      {
        h: "Continuing into Lahaul",
        p: [
          "From Sissu the road goes on to Keylong and Jispa, the classic stops on the Manali to Leh highway, which opens in summer. Spiti's Kaza is reached via Kunzum La, usually open from about June to October. Plan acclimatisation and permits if you go further.",
        ],
      },
      REACH,
    ],
    faqs: [
      { q: "How long is the Atal Tunnel?", a: "About 9 km, running under the Rohtang range at around 3,000 m." },
      { q: "Is a permit required for the Atal Tunnel?", a: "No Rohtang permit is needed. Vehicles entering Lahaul may need free registration on the e-Aagman portal." },
      { q: "How far is Sissu from Manali?", a: "Roughly 40 km, about 1.5 to 2 hours depending on traffic." },
      { q: "Is the Atal Tunnel open in winter?", a: "Mostly yes, but heavy snowfall can close the approach roads for a day or more." },
      { q: "Can I see snow at Sissu in summer?", a: "Usually only on higher slopes. For snow near the road, visit from December to March." },
      { q: "Is Sissu good for kids?", a: "Yes for a short visit, with warm clothes. Keep the stop brief because of the cold and altitude." },
    ],
  },

  {
    slug: "manali-itinerary-3-days",
    title: "Manali Itinerary for 3 Days: Town, Solang, Atal Tunnel and Naggar",
    description: "A 3-day Manali itinerary: Hadimba and Old Manali, Solang Valley with the Atal Tunnel and Sissu, then Naggar Castle and Vashisht, with timings and tips.",
    category: "Itineraries",
    destination: "himachal",
    city: "manali",
    date: "2026-11-03",
    intro:
      "Three days in Manali covers the highlights at a comfortable pace: day one in town at Hadimba Temple, Old Manali and the Mall; day two at Solang Valley and through the Atal Tunnel to Sissu; day three at Naggar Castle, the Roerich gallery and the Vashisht hot springs. Arrive the evening before, or on an overnight Volvo, so you start fresh.",
    sections: [
      {
        h: "Day 1: Manali town",
        days: [
          "Morning: Hadimba Devi Temple in the cedar forest, before the crowds arrive.",
          "Late morning: walk to Old Manali and the Manu temple; lunch at a cafe by the Manalsu stream.",
          "Afternoon: Club House or Van Vihar by the Beas.",
          "Evening: the Mall Road and the Tibetan market.",
        ],
      },
      {
        h: "Day 2: Solang Valley, Atal Tunnel and Sissu",
        days: [
          "Leave by 8 am for Solang Valley: ropeway, paragliding in season or snow in winter.",
          "Continue through the Atal Tunnel to Sissu for the waterfall and Chandra valley views.",
          "Return to Manali before dark, especially in winter.",
        ],
      },
      {
        h: "Day 3: Naggar and Vashisht",
        days: [
          "Drive to Naggar Castle and the Roerich Art Gallery (about 21 km).",
          "Return via the left bank road through orchards.",
          "Afternoon: Vashisht village and its hot springs, or the walk to Jogini Falls.",
          "Evening: depart by Volvo or stay a night more.",
        ],
      },
      {
        h: "Adapting the plan by season",
        p: [
          "In winter, swap day two for snow play at Solang and a shorter Sissu stop, and keep day three relaxed. In summer, add Rohtang Pass on day two with an online permit, starting very early. In the monsoon, keep the plan flexible and avoid long drives in heavy rain.",
        ],
      },
      {
        h: "Adding more days",
        list: [
          "Day 4: Kasol and Manikaran in the Parvati valley, or river rafting at Kullu",
          "Day 5: a Lahaul road trip to Keylong and Jispa in summer",
          "Day 4 or 5: Hampta Pass or Bhrigu Lake trek (June to September) with a guide",
        ],
      },
      {
        h: "Where to stay for this plan",
        p: [
          "Stay near the Mall or on the Hadimba side for easy evenings, in Old Manali for cafes and a village feel, or along the left bank road for river views and quiet. In winter, ask for heating and hot water through the night.",
        ],
      },
      {
        h: "Getting around",
        p: [
          "Hire a cab for days two and three; local taxi unions operate in Manali and some sightseeing points have union-only access. Walk in Old Manali and around Hadimba, where lanes are narrow and parking is limited.",
        ],
      },
      REACH,
    ],
    faqs: [
      { q: "Is 3 days enough for Manali?", a: "Yes, for the town, Solang, the Atal Tunnel and Sissu, and Naggar. Add a day for Kasol or Rohtang." },
      { q: "Can I do Solang and Sissu in one day?", a: "Yes, starting early. In winter, keep the Sissu stop short and return before dark." },
      { q: "Should I include Rohtang Pass?", a: "In summer, if you can get an online permit and start very early. Otherwise Sissu via the Atal Tunnel is an easier alternative." },
      { q: "Is Manali good for a weekend from Delhi?", a: "Only with overnight bus journeys both ways. Three or more days on the ground is much better." },
      { q: "Where should I stay for a 3-day trip?", a: "Near the Mall or Old Manali for convenience; along the left bank for quiet." },
      { q: "What should I skip if short of time?", a: "Skip Rohtang and keep to the town, Solang and Sissu." },
    ],
  },

  {
    slug: "manali-family-trip-guide",
    title: "Manali with Family: Kid-Friendly Itinerary, Stays and Safety Tips",
    description: "Planning Manali with kids and grandparents? An easy 4-day family itinerary, where to stay, snow tips, altitude and motion-sickness advice, and safety.",
    category: "Family",
    destination: "himachal",
    city: "manali",
    date: "2026-11-03",
    intro:
      "Manali is a great family destination if you keep days short and plan around children and older parents. Spend 4 to 5 days, stay in a hotel with road access, do Solang Valley in the morning, keep high-altitude stops like Sissu short, and plan rest in the afternoons. May and June are the most popular family months; book Volvo seats and hotels early.",
    sections: [
      {
        h: "A 4-day family itinerary",
        days: [
          "Arrive; rest, then Hadimba Temple's forest and the Mall in the evening.",
          "Solang Valley early for the ropeway and snow play or meadow games.",
          "Atal Tunnel to Sissu for a short visit, then back for a relaxed afternoon.",
          "Naggar Castle or the Club House and Van Vihar, then depart.",
        ],
      },
      {
        h: "Where to stay with family",
        p: [
          "Choose a hotel with road access, family rooms and a lift, ideally near the Mall or on the left bank road. Avoid properties up long flights of steps in Old Manali if travelling with grandparents or strollers. In winter, confirm room heating and hot water.",
        ],
      },
      {
        h: "Altitude and motion sickness",
        p: [
          "Manali itself is at about 2,050 m, comfortable for most people. Sissu and Rohtang are much higher, so keep visits short, walk slowly and watch for headaches or nausea in children and older parents. The long drive up from Chandigarh has many bends: take breaks and carry motion-sickness medicine.",
        ],
      },
      {
        h: "Snow days with children",
        list: [
          "Rent snow boots and waterproof suits at Solang if you don't have them",
          "Plan snow play for late morning, when it is warmest",
          "Carry spare gloves, socks and a warm drink",
          "Keep the visit to an hour or two for small children",
        ],
      },
      {
        h: "Food",
        p: [
          "Manali has plenty of North Indian, South Indian, Chinese and continental restaurants, and most hotels can make simple food for children. Try local trout and siddu, and the Tibetan momos and thukpa around the Mall.",
        ],
      },
      {
        h: "Safety tips",
        list: [
          "Agree activity terms and check safety gear for rides at Solang",
          "Hold children's hands near the Beas river, which is fast and cold",
          "Avoid driving after dark, especially in winter",
          "Keep a local taxi number and the hotel address saved",
          "Carry basic medicines; Manali has hospitals and pharmacies",
        ],
      },
      {
        h: "Family activities beyond snow",
        list: [
          "Boating at Van Vihar in season",
          "Indoor games at the Club House",
          "The Himalayan Nyingmapa Gompa near the Mall",
          "Short nature walks to Jogini Falls for older children",
        ],
      },
      REACH,
    ],
    faqs: [
      { q: "Is Manali good for kids?", a: "Yes. Snow at Solang, the ropeway and short drives make it fun for children if days are kept short." },
      { q: "Is Manali safe for elderly parents?", a: "Yes, with a hotel that has road access and short visits to high places like Sissu." },
      { q: "What is the best time for a Manali family trip?", a: "May and June for pleasant weather, or December to February for snow with proper winter wear." },
      { q: "Should I take kids to Rohtang Pass?", a: "Only for a short visit with warm clothes and if they feel well; Sissu is a gentler alternative." },
      { q: "How many days for Manali with family?", a: "Four to five days, with afternoons kept light." },
      { q: "Are there hospitals in Manali?", a: "Yes, there are hospitals, clinics and pharmacies in Manali and Kullu." },
    ],
  },

  {
    slug: "old-manali-vashisht-hadimba-guide",
    title: "Old Manali, Vashisht and Hadimba Temple: A Walking Guide",
    description: "Explore Old Manali, Vashisht's hot springs and Hadimba Temple on foot: what to see, the Manu temple, cafes, walking routes, etiquette and best times.",
    category: "Planning",
    destination: "himachal",
    city: "manali",
    date: "2026-11-03",
    intro:
      "Old Manali, Vashisht and Hadimba Temple are the heart of Manali's village life and history, and all three are easy to explore on foot in a day. Start at Hadimba's cedar forest early, walk to Old Manali's lanes and the Manu temple, then cross the Beas to Vashisht for its hot spring baths and stone temple. Wear good shoes: lanes are steep and uneven.",
    sections: [
      {
        h: "Hadimba Devi Temple",
        p: [
          "Built in 1553, the Hadimba temple is a wooden, four-tiered pagoda in a forest of tall deodars, dedicated to Hidimba, a figure from the Mahabharata. Its carved doorway and setting make it Manali's best-known sight. Go early, before tour groups arrive, and respect the temple's rules on photography inside.",
        ],
      },
      {
        h: "Old Manali",
        p: [
          "Across the Manalsu stream from the new town, Old Manali has stone and timber houses, apple orchards and a lane of cafes and guesthouses popular with backpackers. At the top is the Manu temple, dedicated to the sage Manu, with views over the valley.",
        ],
      },
      {
        h: "Vashisht village",
        p: [
          "About 3 km from the Mall on the left bank of the Beas, Vashisht is known for its natural hot springs, with separate bathing areas, and an old stone temple to the sage Vashisht. Narrow lanes lead past wooden houses and cafes. The walk to Jogini Falls starts here.",
        ],
      },
      {
        h: "A one-day walking route",
        days: [
          "Early morning at Hadimba Temple.",
          "Walk to Old Manali (about 2 km), explore the lanes and the Manu temple; lunch at a cafe.",
          "Taxi or walk to Vashisht; visit the temple and hot springs.",
          "Optional: walk to Jogini Falls (about an hour each way) or rest in a cafe before sunset.",
        ],
      },
      {
        h: "Etiquette and culture",
        list: [
          "Dress modestly at temples and remove shoes where asked",
          "Ask before photographing people and inside shrines",
          "Follow bathing rules at the Vashisht springs",
          "Keep noise down in village lanes, especially at night",
          "Carry your rubbish back; bins are few in the lanes",
        ],
      },
      {
        h: "Food and cafes",
        p: [
          "Old Manali and Vashisht have relaxed cafes serving Himachali, Israeli, Italian and Tibetan food, plus local trout. Siddu, a stuffed steamed bun, is worth trying, and many cafes have river or orchard views.",
        ],
      },
      {
        h: "Best time to walk",
        p: [
          "Spring and autumn are ideal: clear days and comfortable temperatures. In summer, start early to avoid crowds at Hadimba. In winter, lanes can be icy after snowfall, so wear boots with grip. In the monsoon, paths get slippery and cafes may close.",
        ],
      },
      REACH,
    ],
    faqs: [
      { q: "How far is Old Manali from the Mall?", a: "About 2 to 3 km, a walk of 30 to 40 minutes or a short taxi ride." },
      { q: "Can I bathe in the Vashisht hot springs?", a: "Yes, in the public bathing areas, with separate sections. Follow the posted rules." },
      { q: "When was Hadimba Temple built?", a: "In 1553." },
      { q: "Is Old Manali good for families?", a: "Yes for a daytime walk and lunch; it is quieter at night than the backpacker scene suggests, but lanes are steep." },
      { q: "How long is the walk to Jogini Falls?", a: "About an hour each way from Vashisht on a gentle trail." },
      { q: "Is Old Manali open in winter?", a: "Yes, though some cafes close in deep winter and lanes can be icy." },
    ],
  },

  {
    slug: "manali-adventure-activities",
    title: "Adventure Activities in Manali: Paragliding, Rafting, Skiing and Treks",
    description: "Adventure in Manali: paragliding at Solang and Dobhi, river rafting on the Beas, skiing in winter, treks like Hampta Pass and Bhrigu Lake, with seasons and safety.",
    category: "Adventure",
    destination: "himachal",
    city: "manali",
    date: "2026-11-03",
    intro:
      "Manali is one of India's adventure hubs: tandem paragliding at Solang and Dobhi, white-water rafting on the Beas near Kullu, skiing at Solang in winter and treks such as Hampta Pass and Bhrigu Lake in summer. Most activities are seasonal and weather dependent, so match your dates to what you want to do and always choose registered operators.",
    sections: [
      {
        h: "Paragliding",
        p: [
          "Tandem flights take off from slopes at Solang and Dobhi, between Manali and Kullu, and from higher sites for longer flights. The best seasons are spring and autumn; flights are often paused in the monsoon and on windy winter days. Check that the operator and pilot are registered, and that helmets and harnesses are provided.",
        ],
      },
      {
        h: "River rafting on the Beas",
        p: [
          "Rafting stretches run between Pirdi and Jhiri near Kullu, and around Raison, with grade II to III rapids suitable for beginners with a guide. The usual seasons are roughly March to June and after the monsoon, as high water in July and August makes rafting unsafe. Life jackets and helmets are mandatory.",
        ],
      },
      {
        h: "Skiing and snowboarding",
        p: [
          "Solang Valley has beginner slopes from about January to March when snow cover allows. The Atal Bihari Vajpayee Institute of Mountaineering and Allied Sports in Manali runs formal ski courses in winter. Day visitors can hire equipment and instructors at the base.",
        ],
      },
      {
        h: "Treks from Manali",
        list: [
          "Hampta Pass: a 4 to 5 day crossing from the green Kullu side to arid Lahaul, usually June to September",
          "Bhrigu Lake: a 3 to 4 day trek to a high alpine lake, usually June to October",
          "Jogini Falls: an easy half-day walk from Vashisht",
          "Lamadugh: a day trek through forest above Manali",
        ],
        p: ["Take multi-day treks with an experienced, registered operator and acclimatise before going high."],
      },
      {
        h: "Other activities",
        list: [
          "Zorbing and ATV rides on Solang's meadows",
          "Mountain biking on the Kullu valley roads",
          "Rock climbing and rappelling with local outfits",
          "Ziplining at a few adventure parks",
        ],
      },
      {
        h: "Choosing safe operators",
        list: [
          "Ask for registration with the state tourism department",
          "Check equipment: helmets, harnesses, life jackets",
          "Ask about the instructor's or pilot's experience",
          "Avoid activities in bad weather even if the operator is willing",
          "Agree price, duration and inclusions before starting",
        ],
      },
      {
        h: "Activities for families",
        p: [
          "Families with children usually prefer the Solang ropeway, short tandem flights for older children if age limits allow, gentle rafting stretches with experienced guides and easy walks like Jogini Falls. Check age, weight and health limits for each activity in advance.",
        ],
      },
      REACH,
    ],
    faqs: [
      { q: "What is the best adventure activity in Manali?", a: "Tandem paragliding at Solang or Dobhi and rafting on the Beas are the most popular; skiing in winter." },
      { q: "When is rafting open in Manali?", a: "Usually from about March to June and again after the monsoon, depending on water levels." },
      { q: "Is paragliding in Manali safe?", a: "With registered operators and certified pilots in good weather, it is a well-established tandem activity." },
      { q: "Can beginners do the Hampta Pass trek?", a: "Fit beginners can, with a good operator and proper acclimatisation." },
      { q: "When can I ski in Manali?", a: "From about January to March at Solang Valley, depending on snow." },
      { q: "Are adventure activities open in the monsoon?", a: "Many are paused in July and August for safety; check with operators." },
    ],
  },

  {
    slug: "delhi-to-manali-travel-guide",
    title: "Delhi to Manali: Bus, Car, Flight or Train? The Complete Guide",
    description: "How to travel from Delhi to Manali: overnight Volvo buses, driving via Chandigarh and Mandi, flights to Bhuntar or Chandigarh, and trains, with stops and tips.",
    category: "Planning",
    destination: "himachal",
    city: "manali",
    date: "2026-11-03",
    intro:
      "The most popular way from Delhi to Manali is an overnight Volvo bus, which covers the roughly 540 km in about 12 to 14 hours and arrives in the morning. Driving takes a similar time via Chandigarh, Bilaspur, Mandi and Kullu. For speed, fly to Kullu-Bhuntar (limited, weather-dependent flights) or Chandigarh, then drive. There is no direct train to Manali.",
    sections: [
      {
        h: "By overnight Volvo bus",
        p: [
          "HRTC (Himachal Roadways) and private operators run Volvo and sleeper buses from Delhi's Kashmere Gate ISBT, Majnu ka Tilla and other pick-up points in the evening, reaching Manali the next morning. Book in advance for weekends, May, June and holidays. Carry a warm layer and motion-sickness medicine for the winding last stretch.",
        ],
      },
      {
        h: "By car",
        p: [
          "The usual route is NH44 to Chandigarh or Kiratpur Sahib, then the Kiratpur to Manali highway via Bilaspur, Sundernagar, Mandi and Kullu. The highway has improved with new tunnels, but landslides can still slow traffic in the monsoon. Start very early, avoid driving the hills after dark, and plan a break at Mandi or the Pandoh dam.",
        ],
      },
      {
        h: "By air",
        p: [
          "Kullu-Bhuntar airport (KUU) is about 50 km from Manali, with limited flights from Delhi that are often affected by weather. Chandigarh airport is more reliable; from there it is about 7 to 8 hours by road. Combine a flight with an onward Volvo or a hired cab.",
        ],
      },
      {
        h: "By train",
        p: [
          "There is no railway to Manali. Take a train from Delhi to Chandigarh or Kiratpur Sahib (via Una side services) and continue by bus or cab. The Kalka-Shimla route is a separate hill line and does not go to Manali.",
        ],
      },
      {
        h: "Stops on the way",
        list: [
          "Murthal: famous dhabas on NH44 north of Delhi",
          "Chandigarh: a break before the hills",
          "Bilaspur and the Gobind Sagar reservoir",
          "Mandi: an old temple town with good food",
          "Pandoh dam and the Beas gorge",
          "Kullu: river rafting and shawl shops",
        ],
      },
      {
        h: "Which option is best?",
        list: [
          "Budget and time: overnight Volvo",
          "Families with luggage: a hired cab or own car, with an overnight halt",
          "Short on time: fly to Chandigarh, then drive",
          "Combining Shimla: drive Delhi to Shimla, then Shimla to Manali via Mandi",
        ],
      },
      {
        h: "Tips",
        list: [
          "Book Volvo seats early for Friday nights and holidays",
          "Sit in the front half of the bus if prone to motion sickness",
          "Carry snacks, water and a warm layer",
          "Check road status in the monsoon and after snowfall",
          "Plan a buffer day if catching a flight back",
        ],
      },
      {
        h: "Coming back from Manali",
        p: [
          "Evening Volvos from Manali reach Delhi the next morning. If you have a flight from Delhi, leave Manali a day earlier or plan a long buffer, as delays on the hill roads are common.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Manali from Delhi?", a: "About 540 km by road, usually 12 to 14 hours." },
      { q: "What is the best way to go from Delhi to Manali?", a: "The overnight Volvo bus is the most popular; a cab suits families with luggage." },
      { q: "Is there a train to Manali?", a: "No. Take a train to Chandigarh or Kiratpur Sahib and continue by road." },
      { q: "Which airport is nearest to Manali?", a: "Kullu-Bhuntar (KUU), about 50 km away, with limited weather-dependent flights. Chandigarh is more reliable." },
      { q: "Is the Delhi to Manali road safe at night?", a: "The plains are fine; avoid self-driving hill sections after dark. Overnight Volvos are driven by experienced drivers." },
      { q: "Can I go to Manali via Shimla?", a: "Yes. Shimla to Manali is about 250 km via Mandi, 8 to 10 hours." },
    ],
  },

  {
    slug: "manali-kasol-trip-5-days",
    title: "Manali and Kasol in 5 Days: Itinerary for Two Valleys",
    description: "A 5-day Manali and Kasol itinerary: Manali town, Solang and the Atal Tunnel, then the Parvati valley with Kasol, Manikaran and Tosh, with routes and tips.",
    category: "Itineraries",
    destination: "himachal",
    city: "manali",
    date: "2026-11-03",
    intro:
      "Five days is the right length to see both Manali and Kasol: two and a half days in Manali for the town, Solang Valley and the Atal Tunnel, then two days in the Parvati valley for Kasol, Manikaran and the village of Tosh. The two are about 80 km apart, roughly 3 hours by road via Kullu and Bhuntar.",
    sections: [
      {
        h: "Day 1: Arrive in Manali",
        days: ["Arrive on the overnight Volvo; rest, then Hadimba Temple, Old Manali and the Mall in the evening."],
      },
      {
        h: "Day 2: Solang, Atal Tunnel and Sissu",
        days: ["Early start for Solang Valley, then through the Atal Tunnel to Sissu. Back to Manali before dark."],
      },
      {
        h: "Day 3: Manali to Kasol",
        days: [
          "Morning at Vashisht hot springs or Naggar Castle.",
          "Drive about 3 hours via Kullu and Bhuntar to Kasol; evening by the Parvati river and Chalal village.",
        ],
      },
      {
        h: "Day 4: Manikaran and Tosh",
        days: [
          "Manikaran Sahib (about 4 km): gurudwara, hot springs and langar.",
          "Continue to Barshaini and walk or drive up to Tosh for views; return to Kasol.",
        ],
      },
      {
        h: "Day 5: Depart",
        days: ["Morning walk in Kasol, then the overnight Volvo from Bhuntar or Kasol back to Delhi or Chandigarh."],
      },
      {
        h: "Adding the Kheerganga trek",
        p: [
          "With a sixth day, trek to Kheerganga from Barshaini (about 10 to 12 km each way) and stay overnight at the camps near the hot spring, returning the next day. It is best from May to June and September to November.",
        ],
      },
      {
        h: "Where to stay",
        list: [
          "Manali: near the Mall, in Old Manali or on the left bank road",
          "Kasol: riverside cottages in Kasol or quieter Chalal",
          "Manikaran: convenient for families and the gurudwara",
          "Tosh: basic guesthouses with big views",
        ],
      },
      {
        h: "Best time for this trip",
        p: [
          "March to June and September to November are best: open roads, pleasant weather and good trekking. Winter brings snow to Manali and Tosh but cold nights in Kasol; the monsoon can block the Parvati valley road.",
        ],
      },
      {
        h: "Getting around",
        p: [
          "Hire a cab for the whole trip, or use HRTC buses between Manali, Bhuntar and Kasol. Local taxis run from Kasol to Manikaran and Barshaini.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Kasol from Manali?", a: "About 80 km, roughly 3 hours via Kullu and Bhuntar." },
      { q: "Is 5 days enough for Manali and Kasol?", a: "Yes, for the highlights of both. Add a day for the Kheerganga trek." },
      { q: "Should I visit Manali or Kasol first?", a: "Either works. Many travellers do Manali first and end in Kasol for a slower finish." },
      { q: "Can I take a bus from Manali to Kasol?", a: "Yes, HRTC buses run to Bhuntar, with connections up the Parvati valley to Kasol." },
      { q: "Is this trip good for couples?", a: "Yes. Manali gives the snow and views; Kasol gives quiet riverside days." },
      { q: "Is Kasol good for families?", a: "Yes, staying near Kasol or Manikaran and skipping late-night cafe crowds." },
    ],
  },
];

// Post-specific extra sections, so every guide clears 900 words with detail.
const EXTRA: Record<string, BlogSection[]> = {
  "best-time-to-visit-manali": [
    {
      h: "Manali compared with Shimla by season",
      p: [
        "Both towns are pleasant from March to June and in October, but Manali is closer to the high Himalaya: winter brings more snow and colder nights, and Solang Valley, the Atal Tunnel and Rohtang give it snow at height into early summer. Shimla is easier to reach and gentler for older travellers. On a 6 or 7 day Himachal trip, the same months suit both, with Manali the highlight for snow.",
      ],
    },
  ],
  "places-to-visit-in-manali": [
    {
      h: "Hidden corners worth a detour",
      list: [
        "Sethan village: a quiet snow hamlet above Prini, popular for winter igloo stays",
        "Hampta village and Jagatsukh: old temples and orchards on the left bank",
        "Arjun Gufa: a cave temple near Prini with valley views",
        "Gulaba meadows: an easy snow point when Rohtang is closed",
        "Kothi gorge: the Beas cutting through a deep ravine on the old Rohtang road",
      ],
    },
    {
      h: "How to see Manali without the crowds",
      p: [
        "Start every day early: Hadimba by 8 am, Solang before 9 am and the Atal Tunnel before the late-morning traffic builds. Weekdays are far calmer than weekends, and October, November and March are much quieter than May and June. Staying on the left bank or in Old Manali also keeps evenings calmer than the Mall.",
      ],
    },
  ],
  "solang-valley-guide": [
    {
      h: "Solang in winter: what to expect",
      p: [
        "After fresh snow, Solang becomes a white bowl with sledges, snow scooters and skiers, and traffic from Manali can back up for hours at weekends. Police sometimes stop cars below the valley; local taxis or a short walk complete the trip. Rental shops at the base offer snow boots and waterproof suits, useful if you have not packed winter gear.",
        "Keep the visit to the morning and early afternoon. Temperatures drop quickly once the sun goes behind the ridges, and the road back can refreeze.",
      ],
    },
    {
      h: "Solang in summer",
      p: [
        "From April to June, the valley turns green and opens up for paragliding, zorbing, horse rides and walks to the Anjani Mahadev temple and its ice formation, a short hike from the valley. The ropeway gives views of snowy peaks even when the valley floor is green.",
      ],
    },
    {
      h: "Food and facilities",
      p: [
        "Dhabas and cafes at the base serve maggi, parathas, momos and tea, and there are toilets and parking near the main area. Options are basic, so many visitors eat a proper meal back in Manali.",
      ],
    },
  ],
  "atal-tunnel-sissu-guide": [
    {
      h: "How the tunnel changed travel to Lahaul",
      p: [
        "Before the tunnel opened, the only road to Lahaul went over Rohtang Pass, which is snowbound for about half the year and frequently jammed in summer. The tunnel cuts the drive from Manali to Lahaul by around two hours and keeps the valley connected for much of the winter, which has also made Sissu a new snow destination for visitors from Manali.",
      ],
    },
    {
      h: "Atal Tunnel or Rohtang Pass?",
      p: [
        "Rohtang is higher, at about 3,980 m, with snow into summer and big views, but it needs an online permit, is open only from around May to November and can be crowded. The Atal Tunnel and Sissu need no Rohtang permit, are open most of the year and are easier with children and older parents. Many visitors choose Sissu for convenience and Rohtang only if they get a permit on a clear day.",
      ],
    },
    {
      h: "What to carry",
      list: ["A warm jacket, cap and gloves even in summer", "Sunglasses and sunscreen for snow glare", "Water and snacks; services beyond the tunnel are limited", "Cash, as card payments and networks can be patchy"],
    },
  ],
  "manali-itinerary-3-days": [
    {
      h: "What to eat during the three days",
      p: [
        "Try trout, either grilled or fried, which is farmed in the Beas valley, and siddu, a steamed wheat bun stuffed with walnut or poppy seed paste. The Mall and Old Manali have Tibetan kitchens for momos and thukpa, and cafes for Israeli, Italian and continental food. On day two, carry snacks for Solang and Sissu, where food is basic.",
      ],
    },
    {
      h: "What decides the cost of this trip",
      list: [
        "Season: May, June and the Christmas to New Year week are the most expensive",
        "Hotel area and category",
        "A private cab for days two and three versus local taxis",
        "Activities at Solang and a Rohtang permit if you add it",
        "Volvo or flight to reach Manali",
      ],
    },
    {
      h: "Packing list",
      list: ["Layers and a warm jacket in every season", "Comfortable shoes with grip", "Sunscreen and sunglasses", "Motion-sickness tablets for the drive up", "Waterproof boots and gloves in winter"],
    },
  ],
  "manali-family-trip-guide": [
    {
      h: "Getting to Manali with children",
      p: [
        "The overnight Volvo is cheap and popular, but young children may sleep badly on the winding hill section. Families often prefer a daytime drive from Chandigarh with breaks, or a flight to Chandigarh followed by a cab. If you take the bus, choose seats near the front and carry warm layers and snacks.",
      ],
    },
    {
      h: "What decides the cost of a family trip",
      list: [
        "Peak dates in May, June and late December",
        "Family rooms or connecting rooms",
        "A private cab for the whole stay",
        "Snow gear rental and activities at Solang",
        "Extra nights for a slower pace",
      ],
    },
    {
      h: "Rainy-day and rest-day ideas",
      p: [
        "If the weather turns, the Himalayan Nyingmapa Gompa, the Mall's shops and cafes, the Club House games room and a hotel with a play area keep children busy. Building in one rest day on a 5-day trip makes the whole holiday easier for grandparents and toddlers.",
      ],
    },
  ],
  "old-manali-vashisht-hadimba-guide": [
    {
      h: "The story behind Hadimba and Manu",
      p: [
        "Local tradition links Hadimba to the Mahabharata: she married the Pandava prince Bhima, and their son Ghatotkacha is also honoured near the temple. The Manu temple in Old Manali is associated with the sage Manu, and the town's name is often linked to him. These stories are part of why the valley's temples remain living places of worship, not just sights.",
      ],
    },
    {
      h: "Dhungri forest and the Hadimba festival",
      p: [
        "The temple stands in the Dhungri forest, among tall deodars that make a cool walk even in summer. A local fair is held at the temple in May, with music and processions of village deities, and Hadimba also plays a central role in the Kullu Dussehra festival in October, when local deities gather in Kullu.",
      ],
    },
    {
      h: "Where to stay nearby",
      p: [
        "Old Manali has guesthouses and boutique stays in old houses, suiting backpackers and couples. Vashisht has budget rooms near the springs. The Hadimba side of the new town has mid-range hotels with easier road access for families.",
      ],
    },
  ],
  "manali-adventure-activities": [
    {
      h: "Best time for each activity",
      list: [
        "Paragliding: April to June and September to November",
        "Rafting: about March to June and October",
        "Skiing: January to March",
        "High treks: June to September or October",
        "Snow scooters and sledging: December to March",
      ],
    },
    {
      h: "What to wear and carry",
      p: [
        "Wear layers you can remove and shoes with grip. For rafting, carry a change of clothes and leave valuables behind. For paragliding, wear a jacket even on warm days, as it is cold aloft. For treks, a proper rucksack, rain gear, a warm layer, a headlamp and enough water are essential.",
      ],
    },
    {
      h: "Health and insurance",
      p: [
        "Tell operators about any health conditions, especially heart, back or pregnancy concerns. Travel insurance that covers adventure activities is worth having for treks and skiing. Acclimatise for a day or two before trekking above 3,000 m.",
      ],
    },
  ],
  "delhi-to-manali-travel-guide": [
    {
      h: "Road conditions by season",
      p: [
        "In summer, the highway is busy but usually smooth, with jams near Kullu and Manali at weekends. In the monsoon, landslides around Mandi, Pandoh and Aut can close the road for hours, so keep a buffer day. In winter, the road to Manali stays open, but snow beyond Manali towards Solang and the Atal Tunnel can make chains or a 4x4 necessary.",
      ],
    },
    {
      h: "Overnight Volvo: what to expect",
      p: [
        "Buses usually leave Delhi between late afternoon and night and stop at a dhaba or two on the way. Seats recline, and blankets are sometimes provided. The final hours up the Beas valley are winding, so motion-sickness tablets help. Arrival points vary: some buses stop at the Manali bus stand, others at private parking near the Mall.",
      ],
    },
    {
      h: "Driving tips for first-timers",
      list: ["Leave Delhi before 5 am to reach the hills in daylight", "Fuel up in Chandigarh or Mandi", "Use lower gears on long descents", "Give way to uphill traffic on narrow stretches", "Avoid the last stretch after dark if unfamiliar"],
    },
  ],
  "manali-kasol-trip-5-days": [
    {
      h: "Why combine Manali and Kasol",
      p: [
        "Manali and Kasol feel very different. Manali is the busy hub for snow, adventure and the high roads to Lahaul; Kasol is a quiet riverside village in the pine-covered Parvati valley, known for trekking, hot springs and a slower pace. Doing both in one trip gives you mountain thrills first and calm riverside days to finish.",
      ],
    },
    {
      h: "What to see on the road between them",
      list: [
        "Kullu: shawl factories, the Raghunath temple and rafting points on the Beas",
        "Bhuntar: the junction where the Parvati joins the Beas",
        "Jari: a viewpoint village above the Parvati river",
        "Naggar: an easy detour from Manali before you set off",
      ],
    },
    {
      h: "What decides the cost of this trip",
      list: ["Season and weekend demand", "Hotel or cottage category in each valley", "A private cab for five days versus buses and local taxis", "Activities such as paragliding, rafting and the Kheerganga camps", "Volvo or flights to start and end the trip"],
    },
    {
      h: "Packing for two valleys",
      p: [
        "Pack for both: warm layers for Solang and Sissu, and comfortable trekking shoes, a rain jacket and a light rucksack for the Parvati valley. Carry some cash: ATMs are fewer beyond Kasol and networks are patchy around Tosh and Barshaini.",
      ],
    },
    {
      h: "Is this trip good for first-timers?",
      p: [
        "Yes. The roads are well travelled, both valleys have plenty of stays, and the plan avoids high-altitude treks unless you choose Kheerganga. Keep one buffer day in the monsoon, and book Volvo seats for the return early.",
      ],
    },
  ],
};

// Second round: one more practical section and extra FAQs per guide.
const MORE: Record<string, { sections: BlogSection[]; faqs: { q: string; a: string }[] }> = {
  "places-to-visit-in-manali": {
    sections: [{ h: "Places to visit in Manali in winter", p: ["From December to February, focus on Hadimba's snowy forest, Old Manali, Solang Valley for snow sports and Sissu if the tunnel road is open. Rohtang is closed, and Naggar and Jogini Falls are cold but quiet. Start late enough for roads to be cleared and return before dark, when ice forms again."] }],
    faqs: [{ q: "Which places in Manali have snow in December?", a: "Solang Valley, Gulaba, Sethan and Sissu usually have snow in December and January; Manali town gets snow on some days." }, { q: "Is the Mall Road worth visiting?", a: "Yes for an evening walk, shopping and food, though it is busy in season." }],
  },
  "solang-valley-guide": {
    sections: [{ h: "Solang for couples", p: ["Couples often enjoy a tandem flight together in season, a quiet walk towards the Anjani Mahadev temple, or simply watching the light change on the peaks from the ropeway. In winter, arrive early for the best snow and fewer people, then warm up with tea at the base before driving on to Sissu."] }, { h: "A morning plan for Solang", days: ["Leave Manali by 8 am and reach the valley before the crowds.", "Ride the ropeway first, while queues are short.", "Try one activity: a tandem flight in season, or snow play in winter.", "Have lunch at the base, then continue to the Atal Tunnel or head back to Manali."] }],
    faqs: [{ q: "What is the Solang ropeway?", a: "A cable car from the valley floor towards Mount Phatru, giving wide views of the Solang valley and snow peaks." }],
  },
  "atal-tunnel-sissu-guide": {
    sections: [{ h: "Sissu for families and older travellers", p: ["Sissu is one of the easiest ways to show children snow at height without the permit and crowds of Rohtang. Keep the stop to an hour, walk slowly, and get back in the car if anyone feels breathless or dizzy. Older parents can enjoy the views from the roadside viewpoints without walking far."] }],
    faqs: [{ q: "When is the Atal Tunnel open?", a: "It is open through most of the year; traffic timings and closures for snow clearance are announced locally." }],
  },
  "manali-itinerary-3-days": {
    sections: [{ h: "Where to watch the sunset", p: ["Good sunset spots include the Beas riverbank near Vashisht, the cafes of Old Manali facing the valley, and the viewpoints on the left bank road towards Naggar. In winter the sun drops behind the ridges early, so plan to be back from Solang or Sissu by mid-afternoon and enjoy the evening light from town."] }, { h: "Common mistakes to avoid", list: ["Starting late on Solang and Atal Tunnel day, and getting stuck in traffic", "Trying to fit Rohtang, Solang and Sissu into one day", "Driving back from Sissu after dark in winter", "Booking a hotel up long stairs when travelling with grandparents", "Not carrying warm layers in summer for the high points"] }],
    faqs: [{ q: "Can I do this itinerary in winter?", a: "Yes, with snow chains or a local driver, earlier returns and flexibility if the tunnel road closes." }, { q: "Do I need a guide in Manali?", a: "Not for town and Solang; a guide is useful for treks and for Naggar's history." }],
  },
  "manali-family-trip-guide": {
    sections: [{ h: "Making long drives easier", p: ["Break the drive from Chandigarh or Delhi at Bilaspur, Sundernagar or Mandi, where there are clean restaurants and space to walk. Avoid heavy meals before winding stretches, keep windows slightly open for fresh air, and let children sleep through the night section if you travel overnight. A short walk at each stop helps everyone settle."] }, { h: "What to pack for children", list: ["Warm layers even in summer, and full winter wear from November to March", "Waterproof boots and gloves for snow play", "Motion-sickness medicine and snacks for the drive", "A small first-aid kit and children's usual medicines", "Sunscreen and sunglasses for snow glare", "A rain jacket in the monsoon"] }],
    faqs: [{ q: "Can toddlers go to Solang Valley?", a: "Yes for a short visit in warm clothes; keep them away from activity areas and return before it gets cold." }, { q: "Which area of Manali is best for families?", a: "Near the Mall or on the left bank road, in a hotel with road access and a lift." }],
  },
  "old-manali-vashisht-hadimba-guide": {
    sections: [{ h: "Photography tips", list: ["Hadimba looks best in soft morning light filtering through the deodars", "Old Manali's wooden balconies and orchards photograph well in spring blossom and autumn colour", "Vashisht's rooftops frame the Beas valley at sunset", "Respect signs that ban photos inside shrines and bathing areas"] }, { h: "Old Manali with family or older parents", p: ["The walk from Hadimba to Old Manali and up to the Manu temple involves slopes and steps. Families with small children or older parents can take a taxi to the top of Old Manali and walk downhill, or visit Hadimba and Vashisht by car with short walks. Cafes with outdoor seating make good rest stops."] }],
    faqs: [{ q: "Are there ATMs in Old Manali?", a: "Most ATMs are on the Mall Road in the new town; carry some cash for cafes and shops in Old Manali and Vashisht." }],
  },
  "manali-adventure-activities": {
    sections: [{ h: "Adventure activities in winter versus summer", p: ["Winter is for snow: skiing, snowboarding, snow scooters and sledging at Solang, with most flying and rafting paused. Summer and autumn open up paragliding, rafting, mountain biking, zorbing and high treks. Spring is a mix, with snow still on the slopes and the first flights and rafting trips starting as the weather settles."] }, { h: "A 4-day adventure plan", days: ["Arrive; acclimatise with a walk to Old Manali and Hadimba.", "Paragliding at Solang or Dobhi in the morning; ATV or zorbing in the afternoon.", "Rafting on the Beas near Kullu, then Naggar Castle on the way back.", "Day hike to Jogini Falls or Lamadugh, or a winter ski lesson at Solang, then depart."] }],
    faqs: [{ q: "Where is rafting done near Manali?", a: "On the Beas between Pirdi and Jhiri near Kullu, and around Raison, about an hour from Manali." }, { q: "Is there an age limit for paragliding?", a: "Operators set their own age, weight and health limits; ask before booking." }, { q: "Do I need experience for rafting?", a: "No. Beginner stretches near Kullu are run by guides who brief you before setting off." }],
  },
  "delhi-to-manali-travel-guide": {
    sections: [{ h: "Delhi to Manali in winter", p: ["In winter the overnight Volvos still run, and the highway to Manali is usually open. The challenge is beyond Manali: Solang and the Atal Tunnel roads can be icy or closed after snowfall. Pack warm clothes in your hand luggage for the cold early-morning arrival, and book a hotel with heating for your first night."] }, { h: "Delhi to Manali with family", p: ["Families with small children or older parents usually find a hired cab with a night halt in Chandigarh or Mandi more comfortable than an overnight bus. Leave early, plan stops every two to three hours, and arrive in Manali before dark. On the way back, start early to avoid evening traffic near Kullu."] }],
    faqs: [{ q: "How long does the Volvo take from Delhi to Manali?", a: "Usually about 12 to 14 hours, longer in heavy traffic or bad weather." }, { q: "Can I reach Manali in one day by car?", a: "Yes, with a very early start, but a night halt makes the drive safer and more pleasant." }],
  },
  "manali-kasol-trip-5-days": {
    sections: [{ h: "Manali and Kasol for groups of friends", p: ["Groups often add rafting on the Beas near Kullu on the way to Kasol, a night at the Kheerganga camps, and a bonfire evening by the Parvati river. Book a tempo traveller for six or more, share rooms in riverside cottages, and keep the last day free for the drive or bus back."] }, 
      { h: "Doing this trip by public transport", p: ["HRTC buses run from Manali to Bhuntar, about two hours, with regular connections up the Parvati valley to Kasol and Manikaran. Local taxis and shared jeeps link Kasol to Barshaini for Tosh and the Kheerganga trailhead. Overnight Volvos to Delhi and Chandigarh leave from Bhuntar and sometimes Kasol, so you can end the trip without going back to Manali."] },
      { h: "Responsible travel in the Parvati valley", list: ["Carry your rubbish back from treks and campsites", "Respect village rules in Malana and Tosh, and ask before photographing people", "Avoid loud music in villages at night", "Use the langar at Manikaran respectfully, covering your head inside the gurudwara"] },
    ],
    faqs: [{ q: "Is Tosh worth visiting on this trip?", a: "Yes. Tosh is a short drive and walk above Barshaini, with big views of the Parvati valley and simple guesthouses for a night." }, { q: "What is Kasol known for?", a: "Riverside cafes, the Kheerganga trek, Manikaran's hot springs and a relaxed pace in the Parvati valley." }],
  },
};

export const MANALI_GUIDES: BlogPost[] = BASE.map((p) => ({
  ...p,
  sections: [...p.sections, ...(EXTRA[p.slug] ?? []), ...(MORE[p.slug]?.sections ?? [])],
  faqs: [...p.faqs, ...(MORE[p.slug]?.faqs ?? [])],
}));

