import type { GuideContent } from "@/lib/locations";

// Himachal beyond Manali: Spiti places, Dharamshala, Shimla, Kasol, Jibhi,
// Kinnaur, Dalhousie, Kasauli, Palampur.
// Rules: fact-based, no invented prices, no em dashes. Distances are typical
// road distances; temperatures are typical ranges, not forecasts.

export const HIMACHAL_CITIES: Record<string, GuideContent> = {
  dharamshala: {
    intro:
      "Dharamshala is a hill town in the Kangra district of Himachal Pradesh, on the slopes of the Dhauladhar range. Lower Dharamshala, at about 1,450 m, is the district town; McLeodganj, about 10 km up the road at about 2,080 m, is the seat of the Tibetan government in exile and home of the Dalai Lama's temple. Dharamkot and Bhagsu sit just above McLeodganj and are the starting points for the Triund trek.\n\nIs Dharamshala and McLeodganj the same? They are separate parts of the same hill: most visitors stay in McLeodganj, Bhagsu or Dharamkot and visit lower Dharamshala for the cricket stadium, the war memorial and the Kangra valley.",
    highlights: [
      "Tsuglagkhang, the Dalai Lama temple complex in McLeodganj",
      "Triund trek, about 9 km from McLeodganj, with views of the Dhauladhar",
      "Bhagsu waterfall and Bhagsunag temple",
      "HPCA cricket stadium against the Dhauladhar backdrop",
      "Norbulingka Institute for Tibetan arts, and Kangra Fort",
      "The Dharamshala Skyway ropeway between Dharamshala and McLeodganj",
    ],
    idealDuration: "2 to 4 days",
    bestMonths: "March to June, September to November",
    gateway: "Gaggal airport (DHM), about 15 km",
    facts: [
      { label: "Altitude", value: "About 1,450 m (lower Dharamshala), 2,080 m (McLeodganj)" },
      { label: "Distance from Delhi", value: "About 475 km by road" },
    ],
    bestTimeToVisit:
      "March to June is the best time for Dharamshala and the Triund trek, with days around 20 to 30°C in lower Dharamshala. Dharamshala gets some of the heaviest monsoon rain in Himachal from July to mid September. October and November are clear and crisp, and December to February is cold, with snow on the Dhauladhar and occasional snowfall in McLeodganj and at Triund.",
    months: [
      { month: "May", tempC: "Day 22 to 30°C, night 15 to 20°C", weather: "Warm and sunny, the busiest month for Triund.", goodFor: "Dharamshala in May suits trekking and cafe-hopping." },
      { month: "July", tempC: "Day 22 to 27°C, night 17 to 20°C", weather: "Very heavy monsoon rain.", goodFor: "Monastery visits; avoid treks." },
      { month: "December", tempC: "Day 10 to 16°C, night 2 to 7°C", weather: "Cold, clear days, snow on the Dhauladhar peaks.", goodFor: "Dharamshala in winter is quiet and scenic; carry woollens." },
      { month: "January", tempC: "Day 8 to 14°C, night 0 to 5°C", weather: "The coldest month, with possible snowfall in McLeodganj and at Triund.", goodFor: "Snow at Triund for experienced trekkers." },
    ],
    howToReach: {
      air: "Gaggal (Kangra) airport, about 15 km from Dharamshala, has flights from Delhi. Chandigarh and Amritsar airports are 5 to 6 hours away by road.",
      rail: "Pathankot, about 90 km away, is the nearest broad-gauge station with trains from Delhi and Mumbai. The Kangra Valley narrow-gauge line runs from Pathankot towards Kangra and Palampur.",
      road: "Overnight Volvo buses from Delhi reach McLeodganj and Dharamshala in about 12 hours. By car, Delhi to Dharamshala is about 475 km via Chandigarh and Una or via Pathankot.",
      local: "Local taxis and buses link Dharamshala with McLeodganj; the Dharamshala Skyway ropeway connects the two in about 10 minutes.",
    },
    routes: [
      { from: "Dharamshala", to: "McLeodganj", distanceKm: "About 10 km by road, 1.8 km by ropeway", time: "30 minutes by road, 10 minutes by Skyway", how: "Shared taxis and HRTC buses run all day. The Dharamshala Skyway ropeway links the two towns." },
      { from: "Dharamshala", to: "Dalhousie", distanceKm: "About 120 km by road", time: "4 to 5 hours", how: "Via Shahpur, Chamba road junction and Banikhet. Many Dalhousie and Dharamshala tours drive this on one day, with Khajjiar added from Dalhousie." },
      { from: "Delhi", to: "Dharamshala", distanceKm: "About 475 km by road", time: "10 to 12 hours", how: "Via Chandigarh, Ropar, Una and Kangra, or via Pathankot. Overnight Volvo buses run from Delhi's Kashmere Gate and Majnu ka Tilla." },
      { from: "Mumbai", to: "Dharamshala", distanceKm: "No direct route", how: "Fly to Gaggal via Delhi, or take a train to Pathankot and a taxi for the last 90 km." },
      { from: "Dharamkot", to: "Dharamshala", distanceKm: "About 13 km by road", time: "40 minutes", how: "Dharamkot is 2 km above McLeodganj; taxis run down to lower Dharamshala." },
    ],
    blocks: [
      {
        heading: "Difference between Dharamshala and McLeodganj",
        body: "Lower Dharamshala is the administrative town with the bus stand, markets and cricket stadium. McLeodganj, 10 km uphill, is the Tibetan town with the Dalai Lama temple, monasteries, cafes and most of the guest houses. Dharamkot and Bhagsu are smaller villages above McLeodganj. For a holiday, stay in McLeodganj or Dharamkot; for quick access to the airport and Kangra, stay in lower Dharamshala.",
      },
      {
        heading: "Dharamshala or Dalhousie: which is better?",
        body: "Choose Dharamshala and McLeodganj for Tibetan culture, monasteries, cafes and the Triund trek. Choose Dalhousie for quiet colonial-era hill walks and day trips to Khajjiar meadow. They are about 120 km apart, so many travellers combine both in a 5 to 6 day trip.",
      },
    ],
    faqs: [
      { q: "Is Dharamshala and McLeodganj the same?", a: "No. They are two parts of the same hill about 10 km apart. McLeodganj is the upper Tibetan town; lower Dharamshala is the district town." },
      { q: "How many days are enough for Dharamshala?", a: "Two to three days cover McLeodganj, Bhagsu, Dharamkot, the Dalai Lama temple and lower Dharamshala. Add a day for the Triund trek." },
      { q: "Is it safe to travel to Dharamshala now?", a: "Dharamshala is generally safe for tourists. In July and August check landslide and weather advisories before road travel or treks." },
    ],
    sections: {
      "places-to-visit": {
        intro: "Tourist places in Dharamshala are split between McLeodganj (Dalai Lama temple, Namgyal monastery, Bhagsu waterfall), the villages above it (Dharamkot and the Triund trail) and lower Dharamshala and Kangra (the cricket stadium, the war memorial, Kangra Fort and Norbulingka). Temples in Dharamshala include Bhagsunag, Chamunda Devi and Aghanjar Mahadev.",
      },
      "things-to-do": {
        intro: "Things to do in Dharamshala include the Triund trek, a visit to the Dalai Lama temple, the Skyway ropeway, a match or tour at the HPCA stadium, Tibetan cooking and meditation classes in McLeodganj, and day trips to Norbulingka, Kangra Fort and Palampur's tea gardens.",
      },
    },
    packages: {
      intro: "Dharamshala packages usually run 3 to 5 days and combine McLeodganj, Bhagsu, Dharamkot and Triund with lower Dharamshala, Kangra and Palampur. Popular extensions are Dalhousie and Khajjiar, or Amritsar on the way from Delhi.",
      itineraries: [
        {
          title: "3-day Dharamshala itinerary",
          days: [
            "Arrive, McLeodganj market, Dalai Lama temple and Namgyal monastery.",
            "Bhagsu waterfall, Dharamkot, and the Triund trek or a cafe day.",
            "Lower Dharamshala: HPCA stadium, war memorial and Norbulingka, then depart.",
          ],
        },
      ],
      faqs: [
        { q: "How many days are enough for a Dharamshala tour?", a: "Three days for Dharamshala and McLeodganj, four with Triund, and five to six if you add Dalhousie and Khajjiar." },
      ],
    },
    packagesDescription:
      "Dharamshala and McLeodganj tour packages with Triund, Bhagsu and Dalhousie. Share your plan and compare up to 3 quotes from verified agents.",
    guideDescription:
      "Dharamshala travel guide: McLeodganj vs Dharamshala, best time, weather, distances to Dalhousie and Delhi, places to visit and things to do.",
  },

  shimla: {
    intro:
      "Shimla is the capital of Himachal Pradesh, at about 2,200 m, and the former summer capital of British India. Its centre is the pedestrian Mall Road and the Ridge, with Christ Church, Gaiety Theatre and Scandal Point. Kufri, Chail, Narkanda and Mashobra are nearby day trips, and Shimla is the usual first stop of Shimla Manali tours and the Kinnaur route to Spiti.\n\nThe Kalka to Shimla toy train, a UNESCO World Heritage narrow-gauge line opened in 1903, is the most scenic way to arrive.",
    highlights: [
      "Mall Road, the Ridge and Christ Church",
      "Jakhu Temple on Shimla's highest hill",
      "Kalka to Shimla toy train, part of the Mountain Railways of India World Heritage Site",
      "Kufri for snow and pony rides, 16 km away",
      "Viceregal Lodge (Indian Institute of Advanced Study) at Summer Hill",
      "Narkanda and Chail for quieter forests and orchards",
    ],
    idealDuration: "2 to 3 days",
    bestMonths: "March to June, December to February for snow",
    gateway: "Kalka railway station or Chandigarh airport",
    months: [
      { month: "April", tempC: "Day 15 to 22°C, night 8 to 12°C", weather: "Pleasant spring. Snow in Shimla in April is rare; Kufri and Narkanda may have patches early in the month.", goodFor: "Sightseeing and walks." },
      { month: "November", tempC: "Day 12 to 18°C, night 4 to 8°C", weather: "Dry, sunny and cold at night.", goodFor: "Shimla in November is quiet and clear, good for views of the Himalaya." },
      { month: "January", tempC: "Day 5 to 10°C, night -2 to 3°C", weather: "Snowfall in most winters.", goodFor: "Snow holidays at Shimla, Kufri and Narkanda." },
    ],
    howToReach: {
      air: "Shimla's Jubbarhatti airport has limited flights. Chandigarh airport, about 115 km away, is the usual choice.",
      rail: "Take a broad-gauge train to Kalka, then the Kalka to Shimla toy train (about 96 km, roughly 5 to 6 hours).",
      road: "Delhi to Shimla is about 345 km via Chandigarh and Parwanoo. Volvo buses run overnight from Delhi.",
    },
    routes: [
      { from: "Kalka", to: "Shimla", distanceKm: "About 85 km by road, 96 km by toy train", time: "3 hours by road, 5 to 6 hours by train", how: "Road via Parwanoo, Dharampur and Solan on NH 5. HRTC and private buses run frequently from Kalka; the toy train runs several times a day." },
      { from: "Shimla", to: "Manali", distanceKm: "About 250 km by road", time: "7 to 9 hours", how: "Via Bilaspur or Tattapani, Sundernagar, Mandi and Kullu." },
      { from: "Shimla", to: "Kalpa", distanceKm: "About 230 km by road", time: "8 to 9 hours", how: "Via Narkanda and Rampur on the Hindustan-Tibet road, then up from Reckong Peo." },
      { from: "Shimla", to: "Kinnaur", distanceKm: "About 200 to 250 km", time: "6 to 9 hours", how: "Sangla is about 220 km and Reckong Peo about 225 km from Shimla, along the Sutlej valley." },
      { from: "Delhi", to: "Shimla", distanceKm: "About 345 km by road", time: "8 to 9 hours", how: "Via Ambala, Chandigarh and Parwanoo." },
    ],
    blocks: [
      {
        heading: "Kalka to Shimla toy train",
        body: "The Kalka Shimla Railway is a 96 km, 2 ft 6 in narrow-gauge line opened in 1903, with over 100 tunnels and hundreds of bridges. It was added to the Mountain Railways of India World Heritage Site by UNESCO in 2008. Trains include the Shivalik Deluxe Express, Himalayan Queen and Kalka Shimla Express. Book through IRCTC; seats sell out in summer and winter holidays.",
      },
    ],
    faqs: [
      { q: "What is the distance from Kalka to Shimla?", a: "About 85 km by road and 96 km on the toy train line." },
      { q: "Does it snow in Shimla in April?", a: "Rarely. Snowfall in Shimla is usually between late December and February; by April only Kufri or Narkanda may have patches early in the month." },
    ],
    sections: {
      "things-to-do": {
        intro: "Shimla trekking places include the Jakhu hill walk, the Glen forest, Chadwick Falls, Shali Tibba near Mashobra, and Hatu Peak near Narkanda. Other things to do are the toy train ride, Mall Road and Lakkar Bazaar shopping, and skiing at Narkanda in winter.",
      },
    },
    packages: {
      intro: "Shimla packages for families usually run 3 to 4 days and include Mall Road, Jakhu, Kufri and Chail, often combined with Manali. Budget trips from Delhi use the overnight Volvo or the toy train from Kalka.",
      themes: {
        "honeymoon-packages": {
          intro: "A Shimla honeymoon usually combines a Mall Road stay with quieter nights in Mashobra, Chail or Narkanda, and is often extended to Manali. Winter brings snow; spring and autumn bring clear views.",
        },
      },
      faqs: [
        { q: "How can I plan a Delhi to Shimla budget trip?", a: "Take the overnight Volvo or a train to Kalka plus the toy train, stay near the Mall in a guest house, and use local buses and walks for sightseeing. Share your budget and agents will suggest options." },
      ],
    },
  },

  kasol: {
    intro:
      "Kasol is a village in the Parvati valley of Kullu district, at about 1,580 m, on the Parvati river. It is a base for Tosh, Kheerganga, Manikaran Sahib and Malana, and is known for its riverside cafes and Israeli food. Kasol is about 30 km from Bhuntar and 75 km from Manali.",
    highlights: [
      "Manikaran Sahib gurdwara and hot springs, 4 km away",
      "Kheerganga trek from Barshaini",
      "Tosh village at the end of the valley road",
      "Chalal and Rasol villages across the river",
    ],
    idealDuration: "2 to 3 days",
    bestMonths: "March to June, September to November",
    gateway: "Bhuntar airport (KUU), about 30 km",
    months: [
      { month: "March", tempC: "Day 12 to 20°C, night 2 to 6°C", weather: "Spring, with snow on the surrounding peaks.", goodFor: "Kasol in March is quiet and good value." },
      { month: "June", tempC: "Day 22 to 30°C, night 12 to 16°C", weather: "Warm days, busy with trekkers and campers.", goodFor: "Kasol in June suits Kheerganga and riverside camping." },
      { month: "December", tempC: "Day 8 to 14°C, night -2 to 3°C", weather: "Cold; snowfall possible at Tosh and Kheerganga by late December.", goodFor: "Kasol in December end is popular for New Year." },
    ],
    howToReach: {
      air: "Bhuntar airport (KUU) is about 30 km away.",
      road: "Overnight Volvo buses from Delhi go to Bhuntar or directly to Kasol. Delhi to Kasol is about 520 km by road.",
      local: "Buses and taxis run from Bhuntar to Kasol, Manikaran and Barshaini.",
    },
    routes: [
      { from: "Delhi", to: "Kasol", distanceKm: "About 520 km by road", time: "11 to 13 hours", how: "Via Chandigarh, Mandi and Bhuntar, then up the Parvati valley." },
      { from: "Kasol", to: "Jibhi", distanceKm: "About 90 km by road", time: "3 to 4 hours", how: "Down the Parvati valley to Bhuntar, then via Aut and the Aut tunnel to Banjar and Jibhi. There is no direct bus; change at Bhuntar, Aut and Banjar, or take a taxi. The same route runs from Jibhi to Kasol." },
      { from: "Manikaran", to: "Kasol", distanceKm: "About 4 km", time: "10 minutes", how: "Local buses and taxis run all day." },
    ],
    blocks: [
      {
        heading: "Jibhi vs Kasol: which is better?",
        body: "Kasol is livelier, with cafes, treks to Kheerganga and Tosh, and more travellers. Jibhi is quieter, with wooden homestays, forests and Jalori Pass. Pick Kasol for a social trip and treks; pick Jibhi for a slow, peaceful stay. Many trips combine both, about 90 km apart.",
      },
    ],
    sections: {
      "travel-guide-tips": {
        intro: "Kasol and the Parvati valley have strict local rules on drugs: possession of cannabis and charas is a criminal offence under the NDPS Act and police checks are common. In Malana, visitors must not touch village walls, temples or people, and should follow signboards.",
      },
    },
    packages: {
      intro: "Kasol packages from Delhi are usually 3 to 4 days with an overnight Volvo each way, a riverside stay, Manikaran, Tosh and optionally the Kheerganga trek. Longer trips add Jibhi or Manali.",
      itineraries: [
        {
          title: "3-day Kasol itinerary",
          days: [
            "Arrive in Kasol, walk to Chalal across the river and visit Manikaran Sahib.",
            "Tosh village, or start the Kheerganga trek from Barshaini.",
            "Kheerganga descent or Malana village, then the evening bus to Delhi.",
          ],
        },
      ],
      fromOrigins: {
        delhi: {
          intro: "A Kasol trip from Delhi is usually 3 nights and 4 days including the overnight Volvo both ways. Most travellers spend two nights in Kasol and add Tosh or Kheerganga.",
        },
      },
    },
  },

  jibhi: {
    intro:
      "Jibhi is a village in the Banjar area of Kullu district, at about 1,900 m, near the Tirthan Valley and the Great Himalayan National Park. It is known for wooden homestays, the Jibhi waterfall, and the drive to Jalori Pass and Serolsar Lake. Shoja is 5 km above Jibhi on the way to Jalori.",
    highlights: [
      "Jibhi waterfall and the mini Thailand pools",
      "Jalori Pass (3,120 m) and the walk to Serolsar Lake",
      "Raghupur Fort ruins above Jalori",
      "Tirthan Valley trout streams and Great Himalayan National Park",
      "Chehni Kothi tower in Banjar valley",
    ],
    idealDuration: "2 to 4 days",
    bestMonths: "March to June, September to December",
    gateway: "Aut and Banjar by road from Delhi or Chandigarh",
    months: [
      { month: "January", tempC: "Day 5 to 12°C, night -3 to 2°C", weather: "Snowfall at Jibhi in most winters; Jalori Pass road may close.", goodFor: "Jibhi in January suits snow and cosy homestay stays." },
      { month: "March", tempC: "Day 12 to 18°C, night 2 to 6°C", weather: "Spring with snow still on Jalori.", goodFor: "Jibhi in March is quiet and green." },
      { month: "May", tempC: "Day 20 to 26°C, night 10 to 14°C", weather: "Pleasant days, warm in the sun.", goodFor: "Jibhi weather in May is ideal for Serolsar and Raghupur walks." },
      { month: "June", tempC: "Day 22 to 28°C, night 13 to 17°C", weather: "Warm and busy before the monsoon.", goodFor: "Jibhi temperature in June stays comfortable for treks." },
    ],
    howToReach: {
      road: "Jibhi is about 500 km from Delhi. Overnight buses to Aut (on the Manali highway) connect with local buses and taxis via Banjar.",
    },
    routes: [
      { from: "Delhi", to: "Jibhi", distanceKm: "About 500 km by road", time: "11 to 13 hours", how: "Delhi to Aut by overnight Volvo, then about 35 km to Jibhi by taxi via the Aut tunnel and Banjar. A Delhi to Jibhi cab takes the same route." },
      { from: "Jibhi", to: "Tirthan Valley", distanceKm: "About 15 km to Gushaini", time: "40 minutes", how: "Down to Banjar and along the Tirthan river. Tirthan to Jibhi is the same route in reverse." },
      { from: "Jibhi", to: "Shoja", distanceKm: "About 5 km", time: "15 minutes", how: "Uphill on the road to Jalori Pass." },
    ],
    sections: {
      "places-to-visit": {
        intro: "Places to visit near Jibhi include the Tirthan Valley, Jalori Pass, Serolsar Lake, Raghupur Fort, Shoja, Chehni Kothi and the Jibhi waterfall. Jibhi and the Tirthan Valley are next to each other, and most stays combine both.",
      },
      "how-to-reach": {
        blocks: [
          {
            heading: "Best places to stay in Jibhi",
            body: "Most stays are family-run wooden homestays and cottages along the Jibhi stream, in Jibhi village and up towards Shoja. Choose stream-side homestays for walks to the waterfall, or Shoja for views and quick access to Jalori Pass.",
          },
        ],
      },
    },
    packages: {
      intro: "Jibhi and Tirthan Valley packages usually run 3 to 4 days from Delhi with overnight bus travel, homestay stays, Jalori Pass, Serolsar Lake and a day in the Tirthan Valley.",
      itineraries: [
        {
          title: "3-day Jibhi itinerary",
          days: [
            "Arrive at Aut, transfer to Jibhi, walk to the Jibhi waterfall.",
            "Jalori Pass, Serolsar Lake and Raghupur Fort.",
            "Tirthan Valley and Gushaini, then return to Aut for the bus.",
          ],
        },
      ],
    },
  },

  kinnaur: {
    intro:
      "Kinnaur is a district of Himachal Pradesh along the Sutlej and Baspa rivers, bordering Tibet. Its main tourist areas are Kalpa, facing the Kinner Kailash range, and the Sangla valley with Chitkul, the last village on the road near the border. Kinnaur is on the Shimla to Spiti route and is known for apples, apricots and wooden temples.",
    highlights: [
      "Kalpa and its views of the Kinner Kailash range",
      "Sangla valley and Kamru Fort",
      "Chitkul, the last village on the Indo-Tibet road",
      "Suicide Point and Roghi village near Kalpa",
      "Nako lake and village on the way to Spiti",
    ],
    idealDuration: "3 to 4 days",
    bestMonths: "April to June, September to October",
    gateway: "Shimla by road",
    howToReach: {
      road: "From Shimla along the Hindustan-Tibet road via Narkanda and Rampur: about 225 km to Reckong Peo and Kalpa, and about 220 km to Sangla. HRTC buses run from Delhi and Shimla to Reckong Peo.",
    },
    routes: [
      { from: "Delhi", to: "Kinnaur", distanceKm: "About 570 km to Kalpa", time: "Two days by road", how: "Delhi to Shimla or Narkanda on day one, then along the Sutlej to Kalpa or Sangla. HRTC runs a Delhi to Reckong Peo bus." },
      { from: "Shimla", to: "Kinnaur", distanceKm: "About 220 to 230 km", time: "7 to 9 hours", how: "Via Narkanda, Rampur and Jeori. Distance from Shimla to Kinnaur's Kalpa is about 230 km." },
    ],
    sections: {
      "places-to-visit": {
        intro: "Kinnaur tourist places include Kalpa, Roghi, Sangla, Chitkul, Kamru Fort, Rakchham, Nako and Sarahan. The Kinnaur valley follows the Sutlej, and Sangla follows its tributary, the Baspa.",
      },
    },
    packages: {
      intro: "Kalpa Kinnaur tour packages usually run 5 to 6 days from Chandigarh or Delhi via Shimla and Narkanda, with nights in Sangla or Chitkul and in Kalpa. Many extend to Nako and Spiti.",
      themes: {
        "honeymoon-packages": {
          intro: "Kinnaur suits couples who want quiet mountain stays: apple orchards in Kalpa, river views in Sangla and the remote village of Chitkul.",
        },
      },
    },
  },

  dalhousie: {
    intro:
      "Dalhousie is a hill station in Chamba district at about 1,970 m, built across five hills in the 1850s. It is known for colonial-era churches, pine and deodar forests, and Khajjiar meadow, 24 km away. Dalhousie is often combined with Dharamshala and Amritsar.",
    highlights: [
      "Khajjiar meadow and lake",
      "St. John's and St. Francis churches",
      "Panchpula waterfall",
      "Dainkund peak and Pohlani Devi temple",
    ],
    idealDuration: "2 to 3 days",
    bestMonths: "March to June, October to November",
    gateway: "Pathankot railway station, about 80 km",
    months: [
      { month: "March", tempC: "Day 12 to 18°C, night 3 to 7°C", weather: "Spring with lingering cold.", goodFor: "Dalhousie temperature in March is ideal for walks." },
    ],
    howToReach: {
      rail: "Pathankot, about 80 km away, is the nearest railhead.",
      road: "Delhi to Dalhousie is about 560 km via Pathankot.",
    },
    routes: [
      { from: "Delhi", to: "Dalhousie", distanceKm: "About 560 km by road", time: "11 to 12 hours", how: "Via Ambala, Jalandhar and Pathankot." },
    ],
    sections: {
      "places-to-visit": {
        intro: "Sightseeing in Dalhousie covers Khajjiar, Kalatop wildlife sanctuary, Dainkund peak, Panchpula, Gandhi Chowk and the colonial churches.",
      },
    },
    packages: {
      intro: "Dalhousie packages usually include Khajjiar and are often combined with Dharamshala, Amritsar or Manali. Amritsar and Dalhousie together make a 5-day trip from Delhi.",
      fromOrigins: {
        ahmedabad: {
          intro: "Dalhousie packages from Ahmedabad start with a flight or train to Amritsar or Pathankot, then a 3 to 4 hour drive to Dalhousie.",
        },
      },
    },
  },

  kasauli: {
    intro:
      "Kasauli is a small cantonment hill town in Solan district at about 1,900 m, about 290 km from Delhi and 65 km from Chandigarh. It is known for quiet walks, Christ Church, Monkey Point and sunset views over the plains.",
    idealDuration: "1 to 2 days",
    bestMonths: "March to June, September to November",
    gateway: "Kalka or Chandigarh",
    routes: [
      { from: "Delhi", to: "Kasauli", distanceKm: "About 290 km by road", time: "6 to 7 hours", how: "Via Chandigarh, Parwanoo and Dharampur." },
    ],
  },

  palampur: {
    intro:
      "Palampur is a town in Kangra district at about 1,470 m, known for its tea gardens, the Neugal Khad gorge and the artists' village of Andretta. It is about 35 km from Dharamshala and is on the Kangra Valley narrow-gauge railway.",
    idealDuration: "1 to 2 days",
    bestMonths: "March to June, September to November",
    gateway: "Gaggal airport (DHM), about 40 km",
  },
};

export const HIMACHAL_PLACES: Record<string, GuideContent> = {
  "spiti-valley/places-to-visit/chandratal-lake": {
    intro:
      "Chandratal is a crescent-shaped high-altitude lake at about 4,300 m in Lahaul, near Kunzum La on the Manali to Kaza road. It is reached by a 14 km side road from Batal followed by a short walk, and is open roughly from mid June to early October. Camps operate along the approach road, not at the lakeshore.",
    facts: [
      { label: "Altitude", value: "About 4,300 m" },
      { label: "Open", value: "Usually mid June to early October" },
      { label: "Nearest stop", value: "Batal, 14 km" },
    ],
    blocks: [
      {
        heading: "Chandratal Lake trek",
        body: "Most visitors drive to the parking area and walk about 1 km to the lake. The classic trek from Batal follows the Chandra river for about 14 km, and longer treks reach Chandratal from Baralacha La via Suraj Tal.",
      },
      {
        heading: "Camping at Chandratal Lake",
        body: "Camping on the lakeshore is not allowed. Seasonal camps run along the approach road between Batal and the parking area, usually from mid June to late September or early October. Nights are near or below freezing even in summer.",
      },
      {
        heading: "Chandratal Lake in winter",
        body: "From about October to June the lake is frozen and the road from Gramphu and Batal is closed by snow. Winter visits are only for expedition-style snow treks with permits and guides.",
      },
    ],
    months: [
      { month: "June", tempC: "Day 8 to 15°C, night -3 to 2°C", weather: "The road usually opens during June with snow walls; the lake may still have ice in early June.", goodFor: "First camps of the season." },
      { month: "August", tempC: "Day 10 to 17°C, night 0 to 5°C", weather: "The warmest stretch, with clear skies on most days.", goodFor: "Chandratal Lake weather is at its most stable." },
    ],
    routes: [
      { from: "Manali", to: "Chandratal Lake", distanceKm: "About 120 km", time: "5 to 6 hours", how: "Through the Atal Tunnel, Gramphu, Chhatru and Batal. Chandratal Lake to Manali is the same route back." },
      { from: "Delhi", to: "Chandratal Lake", distanceKm: "About 660 km via Manali", time: "Two days", how: "Delhi to Manali overnight, then Manali to Chandratal. How to reach Chandratal Lake from Delhi in winter: not possible, the road is closed." },
      { from: "Shimla", to: "Chandratal Lake", distanceKm: "About 370 km via Manali, or about 520 km via Kaza", time: "Two days", how: "Via Mandi and Manali in summer, or along the Kinnaur and Spiti route through Kaza and Kunzum La." },
      { from: "Chandigarh", to: "Chandratal Lake", distanceKm: "About 420 km via Manali", time: "Two days", how: "Chandigarh to Manali, then the Atal Tunnel and Batal road." },
      { from: "Kaza", to: "Chandratal Lake", distanceKm: "About 95 km", time: "4 to 5 hours", how: "Via Losar and Kunzum La." },
    ],
    faqs: [
      { q: "How do I reach Chandratal Lake?", a: "Drive from Manali through the Atal Tunnel to Batal and take the 14 km side road, or come from Kaza over Kunzum La. The road is open roughly mid June to early October." },
      { q: "Is Chandratal Lake part of Spiti Valley?", a: "It is in the Lahaul side of the Lahaul and Spiti district, just before Kunzum La, and is visited on most Spiti Valley circuits." },
    ],
  },

  "spiti-valley/places-to-visit/kaza": {
    intro:
      "Kaza is the main town and sub-divisional headquarters of Spiti, at about 3,800 m on the Spiti river. It has the valley's hotels, homestays, ATMs, petrol pump and taxi union, and is the base for Key Monastery, Kibber, Langza, Hikkim and Komic.",
    routes: [
      { from: "Kaza", to: "Chandratal", distanceKm: "About 95 km", time: "4 to 5 hours", how: "Via Losar and Kunzum La; open about June to October." },
    ],
  },

  "spiti-valley/places-to-visit/dhankar-monastery": {
    intro:
      "Dhankar Monastery is a Buddhist gompa built on a cliff above the confluence of the Spiti and Pin rivers, at about 3,890 m, between Tabo and Kaza. The old fort-monastery is over 1,000 years old; a new monastery stands below it, and a walk of about an hour leads up to Dhankar lake.",
  },

  "dharamshala/places-to-visit/triund": {
    intro:
      "Triund is a grassy ridge at about 2,850 m above McLeodganj, facing the Dhauladhar range. It is one of the most popular short treks in Himachal: about 9 km one way from McLeodganj, or about 7 km from the Galu Devi temple trailhead above Dharamkot.",
    facts: [
      { label: "Altitude", value: "About 2,850 m" },
      { label: "Triund trek distance from McLeodganj", value: "About 9 km one way" },
      { label: "Starting point", value: "Galu Devi temple, Dharamkot (about 7 km)" },
    ],
    blocks: [
      {
        heading: "Triund trek starting point and start time",
        body: "The usual starting point is the Galu Devi temple above Dharamkot, reached by taxi from McLeodganj. Start by 8 or 9 am to reach the top by early afternoon and return before dark, or camp overnight at the top. The trail climbs steadily through oak and rhododendron forest, with tea stalls on the way.",
      },
    ],
    routes: [
      { from: "McLeodganj", to: "Triund", distanceKm: "About 9 km on foot", time: "4 to 5 hours up", how: "Walk or take a taxi to Galu Devi temple, then follow the marked trail. Triund from McLeodganj is a one-day round trip for fit walkers." },
    ],
    faqs: [
      { q: "Is the Triund trek difficult?", a: "It is an easy to moderate trek with a steady climb. Fit beginners usually manage it in 4 to 5 hours up." },
    ],
  },

  "dharamshala/places-to-visit/dalai-lama-temple": {
    intro:
      "The Dalai Lama temple, Tsuglagkhang, is the main temple complex in McLeodganj and the residence of the 14th Dalai Lama. It includes the Namgyal Monastery and the Tibet Museum, and is open to visitors daily, with security checks at the gate.",
  },

  "dharamshala/places-to-visit/dharamkot": {
    intro:
      "Dharamkot is a village about 2 km above McLeodganj in Dharamshala, Himachal, at roughly 2,100 m. It is known for meditation and yoga centres, cafes, and as the starting point of the Triund trek from Galu Devi temple.",
  },

  "shimla/places-to-visit/kufri": {
    intro:
      "Kufri is a hill resort about 16 km from Shimla at about 2,720 m, known for winter snow, pony and yak rides, Himalayan Nature Park and the Fun World amusement park. Narkanda is about 45 km further along the same road.",
    routes: [
      { from: "Narkanda", to: "Kufri", distanceKm: "About 45 km", time: "1.5 hours", how: "Along NH 5 via Theog." },
    ],
  },

  "kinnaur/places-to-visit/kalpa": {
    intro:
      "Kalpa is a village in Kinnaur at about 2,960 m above Reckong Peo, facing the Kinner Kailash range. It is known for apple orchards, old wooden temples, Roghi village and Suicide Point, and is a common overnight stop on the Shimla to Spiti route.",
    facts: [
      { label: "Altitude", value: "About 2,960 m" },
      { label: "Distance from Shimla", value: "About 230 km" },
    ],
    blocks: [
      {
        heading: "Kalpa places to visit and sightseeing",
        items: [
          "Kinner Kailash range views at sunrise",
          "Roghi village and the cliff road to Suicide Point",
          "Narayan Nagini temple and Hu-Bu-Lan-Kar monastery",
          "Reckong Peo market and monastery",
        ],
      },
      {
        heading: "Kalpa weather",
        body: "Kalpa has cold winters with snow from December to February and mild summers of about 15 to 25°C. Spring blossom is in April, and apples ripen in September and October.",
      },
    ],
    faqs: [
      { q: "Is there a Kalpa tour package?", a: "Yes. Kalpa is part of most Kinnaur and Spiti tours, usually with nights in Sangla or Chitkul and in Kalpa. Share your dates to get quotes." },
    ],
  },

  "kinnaur/places-to-visit/sangla": {
    intro:
      "Sangla is the main village of the Baspa valley in Kinnaur, at about 2,700 m, known for Kamru Fort, apple orchards and riverside camps. Chitkul is 25 km further up the valley. Sangla and Kalpa together form the core of a Kinnaur tour.",
  },

  "kinnaur/places-to-visit/chitkul": {
    intro:
      "Chitkul is the last inhabited village on the road in the Baspa valley, at about 3,450 m near the Tibet border. Things to do in Chitkul include walking along the Baspa river, visiting the Mathi temple, eating at the dhaba that calls itself the last Indian dhaba, and walking towards the ITBP post.",
  },

  "jibhi/places-to-visit/jalori-pass": {
    intro:
      "Jalori Pass is a mountain pass at about 3,120 m, about 12 km above Jibhi, linking the Kullu and Shimla sides of the Seraj region. From the top, walks lead to Serolsar Lake (about 5 km) and Raghupur Fort (about 3 km). The road can close after snowfall in winter.",
  },

  "jibhi/places-to-visit/serolsar-lake": {
    intro:
      "Serolsar Lake is a small sacred lake at about 3,100 m, about 5 km on foot from Jalori Pass through oak forest, with a temple to Budhi Nagin. Serolsar lake temperature is cold all year; the lake freezes in winter and the walk is snowbound from about December to March.",
  },

  "jibhi/places-to-visit/tirthan-valley": {
    intro:
      "Tirthan Valley follows the Tirthan river near Jibhi in Kullu district and is the gateway to the Great Himalayan National Park, a UNESCO World Heritage Site. It is known for trout fishing, riverside homestays and quiet village walks around Gushaini and Nagini.",
  },

  "jibhi/places-to-visit/raghupur-fort": {
    intro:
      "Raghupur Fort is a ruined hill fort above Jalori Pass near Jibhi, about a 3 km walk from the pass, with wide meadows and views across the Seraj valleys.",
  },

  "kasol/places-to-visit/malana": {
    intro:
      "Malana is an old village in a side valley of the Parvati, about 20 km from Kasol, with its own village council and customs. Visitors must not touch houses, temples or residents and must follow signboards. Malana cream is a name for cannabis resin from the area; possession is a criminal offence under India's NDPS Act.",
  },

  "dalhousie/places-to-visit/khajjiar": {
    intro:
      "Khajjiar is a meadow and small lake surrounded by deodar forest, about 24 km from Dalhousie at roughly 1,920 m. It is often called the Mini Switzerland of India and is known for horse rides, zorbing and the Khajji Nag temple.",
  },

  "kullu/places-to-visit/shangarh": {
    intro:
      "Shangarh is a village in the Sainj valley of Kullu district, known for a large flat meadow surrounded by deodar forest, Shangchul Mahadev temple, and access to the Great Himalayan National Park.",
  },
};
