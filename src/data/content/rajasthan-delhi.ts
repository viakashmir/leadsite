import type { GuideContent } from "@/lib/locations";

// Rajasthan, Delhi and the Golden Triangle. Road distances from OpenStreetMap
// (OSRM). No invented prices; festival dates as months; no em dashes.

export const RJ_CITIES: Record<string, GuideContent> = {
  jaipur: {
    intro:
      "Jaipur, the capital of Rajasthan, was founded in 1727 by Maharaja Sawai Jai Singh II and is known as the Pink City for the colour of its old walled town, a UNESCO World Heritage City since 2019. It is about 280 km from Delhi and forms the third corner of the Golden Triangle with Delhi and Agra.",
    highlights: [
      "Amer Fort, part of the UNESCO-listed Hill Forts of Rajasthan",
      "Hawa Mahal, the 1799 palace of windows",
      "City Palace and the UNESCO-listed Jantar Mantar observatory",
      "Nahargarh Fort for sunset over the city",
      "Jal Mahal in the Man Sagar lake",
    ],
    idealDuration: "2 to 3 days",
    bestMonths: "October to March",
    gateway: "Jaipur airport (JAI) and Jaipur Junction",
    routes: [
      { from: "Delhi", to: "Jaipur", distanceKm: "About 280 km", time: "5 to 6 hours by road, 4 to 5 hours by train", how: "On NH 48 or the Delhi Mumbai expressway spur; Shatabdi and Vande Bharat trains run daily. Jaipur to Delhi is the same route back." },
      { from: "Jaipur", to: "Khatu Shyam", distanceKm: "About 80 km", time: "2 hours", how: "Via Chomu and Reengus in Sikar district; Reengus is the nearest railway station, about 17 km from the temple." },
      { from: "Agra", to: "Jaipur", distanceKm: "About 250 km", time: "4 to 5 hours", how: "Via Bharatpur and Dausa on NH 21, with a stop at Fatehpur Sikri or Abhaneri stepwell." },
      { from: "Pune", to: "Jaipur", distanceKm: "About 1,150 km by road", time: "Under 2 hours by direct flight", how: "Fly, or take an overnight train; driving takes two days via Ahmedabad or Indore." },
    ],
    faqs: [
      { q: "Where is Jaipur in India?", a: "Jaipur is the capital of Rajasthan in north-west India, about 280 km south-west of Delhi, and one corner of India's Golden Triangle tour with Delhi and Agra." },
      { q: "What is Jal Mahal in Jaipur?", a: "A palace in the middle of the Man Sagar lake on the Amer road, seen from the lakeside promenade; visitors are not allowed inside." },
      { q: "Which places can I visit in Jaipur at night?", a: "Nahargarh Fort for sunset and city lights, the illuminated Hawa Mahal and Jal Mahal from the road, the light and sound show at Amer Fort, Chokhi Dhani village resort, and the bazaars of the old city." },
    ],
  },

  "mount-abu": {
    intro:
      "Mount Abu is Rajasthan's only hill station, at about 1,220 m in the Aravalli range near the Gujarat border. It is known for Nakki Lake, the Dilwara Jain temples and Guru Shikhar, the highest point of the Aravallis at about 1,722 m. Honeymoon Point and Sunset Point are its two classic viewpoints.",
    idealDuration: "2 days",
    bestMonths: "October to June",
    gateway: "Abu Road station, 28 km",
    routes: [
      { from: "Udaipur", to: "Mount Abu", distanceKm: "About 160 km", time: "3 to 4 hours", how: "Via Pindwara and Abu Road." },
      { from: "Ahmedabad", to: "Mount Abu", distanceKm: "About 220 km", time: "4 to 5 hours", how: "Via Palanpur and Abu Road on NH 27." },
    ],
    faqs: [
      { q: "What is Honeymoon Point in Mount Abu?", a: "A viewpoint, also called Anadra Point, on the north-west edge of the plateau with views over the plains, popular at sunset and about 2.5 km from Nakki Lake." },
      { q: "What is good for shopping in Mount Abu?", a: "Rajasthani and Gujarati handicrafts, marble items, silver jewellery and bandhani textiles in the market around Nakki Lake." },
    ],
    packages: {
      themes: {
        "honeymoon-packages": {
          faqs: [{ q: "Is Honeymoon Point in Mount Abu worth visiting?", a: "Yes, mainly at sunset. Honeymoon Point (Anadra Point) is about 2.5 km from Nakki Lake and looks out over the plains." }],
          intro: "Mount Abu honeymoon packages usually combine a lake-view stay near Nakki Lake, boating, sunset at Honeymoon Point, the Dilwara temples and Guru Shikhar, often with Udaipur." },
      },
    },
  },

  ajmer: {
    intro:
      "Ajmer, about 130 km from Jaipur, is home to the Dargah of Khwaja Moinuddin Chishti, one of India's most visited Sufi shrines, which draws large crowds during the Urs festival. Ana Sagar lake and Taragarh Fort are in the city, and Pushkar is about 15 km away over Nag Pahar.",
    idealDuration: "1 day",
    bestMonths: "October to March",
    gateway: "Ajmer Junction; Kishangarh airport",
  },

  chittorgarh: {
    intro:
      "Chittorgarh Fort in southern Rajasthan is one of the largest forts in India and part of the UNESCO-listed Hill Forts of Rajasthan. It is linked with Rani Padmini and Meera Bai, and holds the Vijay Stambh (Tower of Victory), Kirti Stambh and Rana Kumbha's palace. It is about 115 km from Udaipur.",
    idealDuration: "1 day",
    bestMonths: "October to March",
    gateway: "Chittorgarh Junction; Udaipur airport",
  },

  bikaner: {
    intro:
      "Bikaner in the Thar desert is known for Junagarh Fort, havelis, Bikaneri bhujia, the camel research centre and the Karni Mata temple at Deshnoke, about 30 km away, famous for its rats.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Bikaner Junction",
  },
};

export const RJ_PLACES: Record<string, GuideContent> = {
  "places-to-visit/india-gate": {
    intro:
      "India Gate is a 42 m war memorial arch on Kartavya Path in New Delhi, designed by Edwin Lutyens and completed in 1931 to honour Indian soldiers who died in the First World War. The National War Memorial stands beside it, and the lawns are lit up in the evening.",
  },
  "places-to-visit/chandni-chowk": {
    intro:
      "Chandni Chowk is the main market street of Old Delhi, laid out in the 17th century in Shah Jahan's capital, Shahjahanabad. It runs from the Red Fort towards Fatehpuri Masjid and is known for wholesale bazaars, Paranthe Wali Gali, Jama Masjid nearby and heritage food stalls. The Chandni Chowk metro station is on the Yellow Line.",
  },
  "places-to-visit/red-fort": {
    intro: "The Red Fort in Old Delhi was built by Shah Jahan between 1638 and 1648 and is a UNESCO World Heritage Site. The Prime Minister addresses the nation from its ramparts every Independence Day.",
  },
  "jaipur/places-to-visit/hawa-mahal": {
    intro:
      "Hawa Mahal, the Palace of Winds, was built in 1799 by Maharaja Sawai Pratap Singh so women of the court could watch street life unseen. Its pink sandstone facade has 953 small windows. It is in the old city near Badi Chaupar, about 5 km from Jaipur station.",
  },
  "jaipur/places-to-visit/jantar-mantar": {
    intro:
      "Jantar Mantar in Jaipur is an astronomical observatory built by Sawai Jai Singh II in the early 18th century, with the world's largest stone sundial. It became a UNESCO World Heritage Site in 2010 and stands next to the City Palace.",
  },
  "mount-abu/places-to-visit/nakki-lake": {
    intro: "Nakki Lake is the centre of Mount Abu town, surrounded by hills, the Toad Rock and a busy promenade with boating and markets.",
  },
  "mount-abu/places-to-visit/guru-shikhar": {
    intro:
      "Guru Shikhar is the highest peak of the Aravalli range at about 1,722 m, about 15 km from Mount Abu town. A short climb leads to the Dattatreya temple and views across the plateau.",
  },
};

export const RJ_DESTINATIONS: Record<string, Partial<GuideContent>> = {
  rajasthan: {
    packages: {
      blocks: [
        {
          heading: "Rajasthan tour package cost and price: what decides it",
          items: [
            "Number of cities: a 5-day Jaipur, Pushkar and Udaipur trip costs less than a 10-day desert circuit",
            "Hotel category: heritage havelis and palace hotels cost more than standard hotels",
            "Season: October to March is peak, with Diwali and Christmas weeks highest",
            "Desert camps and safaris in Jaisalmer or Ranthambore add to the price",
          ],
        },
      ],
      fromOrigins: {
        ahmedabad: { intro: "Rajasthan packages from Ahmedabad usually start with Udaipur (about 260 km) and Mount Abu (about 220 km) by road, then continue to Jodhpur or Jaipur." },
      },
    },
    faqs: [
      { q: "Where is the Khatu Shyam temple in Rajasthan?", a: "In Khatu village, Sikar district, about 80 km from Jaipur. Reengus, about 17 km away, is the nearest railway station. The temple is busiest during the Phalgun mela in February or March." },
      { q: "What is Nathdwara in Rajasthan known for?", a: "The Shrinathji temple, a major Vaishnav shrine about 50 km north of Udaipur." },
    ],
  },
  delhi: {
    routes: [
      { from: "Delhi", to: "Kaza (Spiti)", distanceKm: "About 750 to 800 km", time: "Two to three days", how: "Via Shimla and Kinnaur (most of the year) or via Manali and Kunzum La (about June to October). Kaza distance from Delhi is similar either way." },
      { from: "Delhi", to: "McLeodganj", distanceKm: "About 510 km", time: "10 to 12 hours", how: "Via Chandigarh, Una and Kangra; overnight Volvo buses run to McLeodganj." },
      { from: "Delhi", to: "Lahaul", distanceKm: "About 610 km to Keylong", time: "Two days", how: "Delhi to Manali (about 540 km), then through the Atal Tunnel. A Delhi to Lahaul Spiti road trip continues over Kunzum La to Kaza." },
      { from: "Delhi", to: "Chandratal", distanceKm: "About 660 km", time: "Two days", how: "Delhi to Manali, then Manali to Chandratal via Batal; open about mid June to early October." },
      { from: "Delhi", to: "Tirthan Valley", distanceKm: "About 500 km", time: "11 to 12 hours", how: "Overnight Volvo bus from Delhi to Aut, then a local bus or taxi via Banjar." },
    ],
    faqs: [
      { q: "Which mandir in Delhi is most visited?", a: "Akshardham and the Laxminarayan (Birla) Mandir draw the most visitors, along with Kalkaji Mandir and ISKCON." },
      { q: "Is there a bus from Delhi to Tirthan Valley?", a: "Yes. Overnight Volvo and HRTC buses to Manali stop at Aut, about 30 km from Tirthan; continue by local bus or taxi via Banjar." },
      { q: "How many km is McLeodganj from Delhi?", a: "About 510 km by road, roughly 10 to 12 hours." },
      { q: "How do I plan a Delhi to Lahaul Spiti road trip?", a: "Drive Delhi to Manali (2 days), cross the Atal Tunnel to Lahaul, then Kunzum La to Kaza between about June and October, and return via Kinnaur and Shimla. Allow 9 to 11 days." },
      { q: "Which are the famous temples in Delhi?", a: "Akshardham, the Lotus Temple (a Bahai house of worship), Laxminarayan (Birla Mandir), ISKCON at East of Kailash, Kalkaji Mandir, Jhandewalan and the Hanuman Mandir near Connaught Place." },
      { q: "What is Connaught Place in Delhi?", a: "A Georgian-style circular market built in the 1930s in central New Delhi, with shops, restaurants and the Rajiv Chowk metro interchange." },
    ],
  },
  "golden-triangle": {
    packages: {
      faqs: [{ q: "How many days does a Golden Triangle tour of India take?", a: "Five days is the classic India Golden Triangle tour: a day each in Delhi, Agra and Jaipur plus travel days. Six to seven days allows Ranthambore or Fatehpur Sikri." }],
      itineraries: [
        {
          title: "5-day Golden Triangle tour itinerary",
          days: [
            "Arrive in Delhi: India Gate, Humayun's Tomb, Qutub Minar.",
            "Old Delhi (Red Fort, Jama Masjid, Chandni Chowk), then drive to Agra (about 200 km).",
            "Sunrise at the Taj Mahal, Agra Fort, then Fatehpur Sikri on the way to Jaipur (about 250 km).",
            "Jaipur: Amer Fort, City Palace, Jantar Mantar, Hawa Mahal.",
            "Return to Delhi (about 280 km) or fly out of Jaipur.",
          ],
        },
      ],
    },
  },
};

export const RJ_ORIGIN_COPY: Record<string, Partial<GuideContent>> = {
  dharamshala: {
    packages: {
      fromOrigins: {
        delhi: {
          faqs: [{ q: "What does a McLeodganj tour package from Delhi include?", a: "Usually overnight Volvo travel both ways, 2 or 3 nights in McLeodganj, local sightseeing and an optional Triund trek." }],
          intro: "McLeodganj and Dharamshala packages from Delhi usually run 4 to 5 days with an overnight Volvo each way (about 510 km), two or three nights in McLeodganj and a day for Triund or Palampur." },
      },
    },
  },
};
