// "Kashmir Tour Packages from {city}" copy: /tour-packages/from-{origin}-to-kashmir.
//
// Each page combines facts that are specific to the departure city (how you
// actually get to Srinagar from there, which months suit it, how many travel
// days to add, local tips) with Kashmir facts that hold for everyone. Rules:
// no fares or timetables (they change), no em dashes, flights described as
// direct only where nonstop service to Srinagar is regular (Delhi, Mumbai,
// Bengaluru, Kolkata, Chandigarh, Jammu); everyone else is told to connect.

import type { GuideContent, Itinerary } from "@/lib/locations";

type Faq = { q: string; a: string };

type Origin = {
  name: string;
  state: string;
  airport: string;
  /** How people from here usually reach Srinagar. */
  mode: "direct" | "connect" | "road" | "rail";
  /** For "direct": approximate nonstop flight time. */
  flight?: string;
  /** For "connect": the usual hubs. */
  via?: string;
  /** Train options to Jammu Tawi / SMVD Katra, in this city's terms. */
  rail: string;
  /** Road distance to Srinagar, only where driving is realistic. */
  road?: string;
  /** Extra days the journey adds to a 6-day Kashmir trip, total both ways. */
  travelDays: number;
  /** When people from here tend to travel, and why it suits them. */
  season: string;
  /** Local angle: food, climate shock, combining other trips. */
  tips: string[];
  /** One sentence that only makes sense for this city, used in the intro. */
  hook: string;
  /** Sample plan goes via Katra for Vaishno Devi (common from these cities). */
  katra?: boolean;
};

const O: Record<string, Origin> = {
  delhi: {
    name: "Delhi",
    state: "Delhi",
    airport: "Indira Gandhi International (DEL)",
    mode: "direct",
    flight: "about 1 hour 30 minutes",
    rail: "Delhi has the most trains to Jammu Tawi and SMVD Katra of any city, including the Vande Bharat Express from New Delhi to Katra. From Katra, the Vande Bharat to Srinagar takes about 3 hours through the Pir Panjal and the Chenab bridge.",
    road: "about 800 km on NH 44 via Ambala, Jalandhar, Pathankot, Jammu and the Banihal tunnels; 14 to 16 hours of driving, usually split with a night in Jammu",
    travelDays: 0,
    season: "Delhi travellers book Kashmir most for May and June, when the plains cross 40°C and Srinagar sits in the mid-20s, and for Christmas to New Year snow in Gulmarg. Long weekends work too: with the morning flight you can be on a shikara by lunch.",
    tips: [
      "Book the earliest Delhi to Srinagar flight; afternoon weather in Srinagar delays evening departures more often.",
      "If you prefer the train, combine Kashmir with Vaishno Devi: Katra is the railhead for both.",
      "Drivers from Delhi should plan for a Jammu night halt; the Jammu to Srinagar highway can close for weather or traffic regulation.",
    ],
    hook: "Delhi is the best-connected city in India for Kashmir, with the most nonstop flights to Srinagar every day.",
  },
  mumbai: {
    name: "Mumbai",
    state: "Maharashtra",
    airport: "Chhatrapati Shivaji Maharaj International (BOM)",
    mode: "direct",
    flight: "about 2 hours 45 minutes to 3 hours",
    rail: "The Swaraj Express runs from Mumbai (Bandra Terminus) to SMVD Katra; from Katra, the Vande Bharat reaches Srinagar in about 3 hours. The full rail journey takes about two days, so most Mumbai travellers fly.",
    travelDays: 0,
    season: "Mumbai travellers often pick Kashmir in the monsoon, from June to August, when the city is wet and Srinagar is dry, green and around 25°C. Diwali holidays bring the autumn chinar colours, and December to February is for first snow.",
    tips: [
      "Mumbai has nonstop flights to Srinagar, so even a 5-day trip needs no extra travel day.",
      "Pack warm layers even for May: evenings in Gulmarg and Pahalgam drop to single digits.",
      "Vegetarian thalis are easy to find in Srinagar; mention Jain food to the agent so hotels can plan meals.",
    ],
    hook: "From Mumbai you can fly nonstop to Srinagar and be at Dal Lake the same afternoon.",
  },
  bangalore: {
    name: "Bangalore",
    state: "Karnataka",
    airport: "Kempegowda International (BLR)",
    mode: "direct",
    flight: "about 3 hours 30 minutes to 4 hours",
    rail: "There is no practical direct train; the rail route to Jammu or Katra takes more than two days, so almost everyone flies.",
    travelDays: 0,
    season: "Bangalore travellers come for what they cannot get at home: snow from December to February, and the Tulip Garden, which opens for about a month from late March. School summer holidays in April and May are the busiest Bangalore booking window.",
    tips: [
      "Bengaluru has nonstop flights to Srinagar; morning departures leave time for a shikara ride on day one.",
      "If this is your first snow trip, rent snow boots and coats in Gulmarg or Srinagar rather than buying them at home.",
      "Kashmir's dry cold feels sharper than Bangalore winters; carry moisturiser and lip balm.",
    ],
    hook: "Bangalore has nonstop flights to Srinagar, which makes Kashmir one of the easiest snow trips from South India.",
  },
  chennai: {
    katra: true,
    name: "Chennai",
    state: "Tamil Nadu",
    airport: "Chennai International (MAA)",
    mode: "connect",
    via: "Delhi, Mumbai or Bengaluru",
    rail: "The Andaman Express runs from Chennai to SMVD Katra, a journey of more than two days; from Katra the Vande Bharat reaches Srinagar in about 3 hours. Most Chennai travellers fly.",
    travelDays: 1,
    season: "Chennai families travel most in the April and May school holidays, when Kashmir is at 15 to 25°C and the gardens are in flower. For snow, plan for late December to February; it is the biggest climate change most Chennai travellers ever make in one day.",
    tips: [
      "Connections via Delhi, Mumbai or Bengaluru take about 6 to 8 hours door to door; keep a buffer of at least 2 hours between flights.",
      "South Indian vegetarian food is limited in Kashmir outside Srinagar; ask the agent for hotels with a pure-veg kitchen.",
      "Carry a proper down jacket in winter; Chennai wardrobes rarely cover minus temperatures in Gulmarg.",
    ],
    hook: "Chennai to Kashmir is a one-stop flight, and the swap from coastal heat to Himalayan snow happens in a single day.",
  },
  kolkata: {
    name: "Kolkata",
    state: "West Bengal",
    airport: "Netaji Subhas Chandra Bose International (CCU)",
    mode: "direct",
    flight: "about 3 hours",
    rail: "The Sealdah to Jammu Tawi Express and other trains reach Jammu in about two days; from Jammu the Vande Bharat or a cab continues to Srinagar.",
    travelDays: 0,
    season: "Puja holidays in October are the classic Kolkata Kashmir window: chinar leaves turn red and gold, skies are clear and the crowds of summer are gone. Summer holidays in May and June, and New Year snow, are the other two peaks.",
    tips: [
      "Kolkata has nonstop flights to Srinagar, so no extra travel day is needed.",
      "Book Puja dates early: October flights from Kolkata to Srinagar fill quickly.",
      "Fish lovers will find trout in Kashmir; Kokernag and Pahalgam have trout farms and restaurants that serve it.",
    ],
    hook: "Kolkata has nonstop flights to Srinagar, and Puja-time Kashmir in October is a Bengali travel tradition.",
  },
  hyderabad: {
    name: "Hyderabad",
    state: "Telangana",
    airport: "Rajiv Gandhi International (HYD)",
    mode: "connect",
    via: "Delhi or Mumbai",
    rail: "Trains to Jammu Tawi take more than a day and a half; almost every Hyderabad traveller flies.",
    travelDays: 1,
    season: "Hyderabad travellers favour April to June, when the Deccan is at its hottest and Kashmir is mild, and December to February for snow. Late March to April is Tulip Garden season.",
    tips: [
      "Most flights connect through Delhi; check whether a same-day connection lands before 2 pm so you still get an evening in Srinagar.",
      "Halal food is the norm across Kashmir, which most Hyderabad travellers find easy.",
      "Plan a full day for Gulmarg: the Gondola queues are long in May and June.",
    ],
    hook: "Hyderabad to Srinagar is usually one stop via Delhi, so a Kashmir trip from Hyderabad needs only one extra travel day.",
  },
  pune: {
    name: "Pune",
    state: "Maharashtra",
    airport: "Pune (PNQ)",
    mode: "connect",
    via: "Delhi, or by road to Mumbai for a nonstop flight",
    rail: "The Jhelum Express runs from Pune to Jammu Tawi, a journey of about two days; from Jammu continue by Vande Bharat or cab.",
    travelDays: 1,
    season: "Pune travellers book around Diwali for autumn colours, in May for school holidays and from June to August to swap the monsoon for Kashmir's dry, green summer.",
    tips: [
      "Compare a one-stop flight from Pune via Delhi with driving to Mumbai for a nonstop flight; total time is similar.",
      "Maharashtrian vegetarian food is easy to arrange in Srinagar hotels; tell the agent in advance.",
      "Late May sells out fast across Gulmarg and Pahalgam; book 6 to 8 weeks ahead.",
    ],
    hook: "Pune is linked to Jammu by the Jhelum Express, and by one-stop flights to Srinagar.",
  },
  ahmedabad: {
    name: "Ahmedabad",
    state: "Gujarat",
    airport: "Sardar Vallabhbhai Patel International (AMD)",
    mode: "connect",
    via: "Delhi or Mumbai",
    rail: "Trains run from Ahmedabad to Jammu Tawi in about a day and a half; from Jammu continue by Vande Bharat or road.",
    travelDays: 1,
    season: "Diwali vacations in October and November and summer holidays in May are the two big Gujarati travel windows for Kashmir. October brings golden chinars; May brings green meadows and mild days.",
    tips: [
      "Pure vegetarian and Jain meals can be arranged in Srinagar, Gulmarg and Pahalgam; confirm with the agent so the hotel kitchen is ready.",
      "Several Gujarati-run vegetarian restaurants operate around Dal Lake in season.",
      "Large family groups should ask for a tempo traveller rather than two cars; it is cheaper and keeps everyone together.",
    ],
    hook: "Kashmir is one of the most booked Diwali holidays from Gujarat, and pure-veg and Jain meals are easy to arrange.",
  },
  jaipur: {
    katra: true,
    name: "Jaipur",
    state: "Rajasthan",
    airport: "Jaipur International (JAI)",
    mode: "connect",
    via: "Delhi",
    rail: "Trains run from Jaipur to Jammu Tawi in about 18 to 20 hours; from Jammu continue by Vande Bharat or cab. Some travellers take the train to Delhi and fly from there.",
    road: "roughly 1,050 km via Delhi or Rewari, Ambala and Jammu; realistic only as a two-day drive",
    travelDays: 1,
    season: "Jaipur travellers escape the desert summer in May and June, when Kashmir stays in the 20s, and come for snow in January. Diwali breaks in October are popular for the autumn colours.",
    tips: [
      "A morning Jaipur to Delhi flight connects well with midday Delhi to Srinagar departures.",
      "Marwari vegetarian food is available in Srinagar; ask for hotels with veg kitchens.",
      "Pack for a 25°C swing between Jaipur and Gulmarg in summer.",
    ],
    hook: "From Jaipur, Kashmir is one connection away via Delhi and a complete change from the desert summer.",
  },
  lucknow: {
    katra: true,
    name: "Lucknow",
    state: "Uttar Pradesh",
    airport: "Chaudhary Charan Singh International (LKO)",
    mode: "connect",
    via: "Delhi",
    rail: "Trains run from Lucknow to Jammu Tawi in about 16 to 20 hours; from Jammu continue by Vande Bharat or cab.",
    travelDays: 1,
    season: "Lucknow travellers favour May and June to escape the plains, Dussehra and Diwali breaks for the autumn colours, and late December for snow.",
    tips: [
      "Lucknow to Delhi flights are frequent; a morning connection gets you to Srinagar by mid-afternoon.",
      "Kashmiri wazwan will feel familiar to anyone who loves Awadhi food; try it in Srinagar.",
      "Families travelling by train should book Jammu to Srinagar by Vande Bharat in advance; seats sell out in summer.",
    ],
    hook: "Lucknow connects to Srinagar through Delhi, and Kashmir's wazwan feast is a natural match for Awadhi food lovers.",
  },
  chandigarh: {
    name: "Chandigarh",
    state: "Chandigarh",
    airport: "Chandigarh International (IXC)",
    mode: "direct",
    flight: "about 1 hour 15 minutes",
    rail: "Trains run from Chandigarh to Jammu Tawi in about 7 to 8 hours; continue by Vande Bharat or cab.",
    road: "roughly 580 km via Ludhiana or Ambala, Pathankot and Jammu; a long day or a day and a half",
    travelDays: 0,
    season: "Being close, Chandigarh travellers go year round: long weekends in summer, October for colours and January for skiing in Gulmarg.",
    tips: [
      "Chandigarh has nonstop flights to Srinagar, the quickest option.",
      "Driving yourself is realistic; avoid the Jammu to Srinagar highway after dark.",
      "Gulmarg skiing courses run in January and February; book them with the package.",
    ],
    hook: "Chandigarh is the closest big city to Kashmir with a nonstop flight to Srinagar.",
  },
  kochi: {
    name: "Kochi",
    state: "Kerala",
    airport: "Cochin International (COK)",
    mode: "connect",
    via: "Delhi, Mumbai or Bengaluru",
    rail: "The Himsagar Express links Kerala with SMVD Katra, but the journey takes about three days; nearly everyone flies.",
    travelDays: 1,
    season: "Kerala travellers come for snow from December to February and for the cool, flowering spring in April and May during school holidays. Many families plan Kashmir after Onam, in September and October.",
    tips: [
      "Connections via Bengaluru or Delhi keep the total journey to 7 to 9 hours.",
      "Kerala-style food is rare in Kashmir; carry a few snacks for the children and ask hotels for rice and curd.",
      "Coastal travellers feel the altitude in Gulmarg's Gondola Phase 2; walk slowly at the top.",
    ],
    hook: "From Kochi, Kashmir is a one-stop flight and the snow trip most Kerala families plan for years.",
  },
  gurgaon: {
    name: "Gurgaon",
    state: "Haryana",
    airport: "Delhi (DEL), about 30 minutes away",
    mode: "direct",
    flight: "about 1 hour 30 minutes from Delhi airport",
    rail: "Trains to Jammu Tawi and Katra leave from New Delhi and Old Delhi stations; the Vande Bharat from Katra reaches Srinagar in about 3 hours.",
    road: "roughly 820 km via Panipat, Ambala, Pathankot and Jammu; usually split over two days",
    travelDays: 0,
    season: "Gurgaon professionals use long weekends and the May and June heat as the main reasons to go, and New Year for snow in Gulmarg.",
    tips: [
      "Fly from Delhi: the airport is close and has the most Srinagar flights in India.",
      "Workations work well in Srinagar in spring and autumn; ask the agent for a houseboat or hotel with reliable Wi-Fi.",
      "Self-drive is possible but the Jammu to Srinagar stretch is tiring; consider a driver for that leg.",
    ],
    hook: "From Gurgaon, Delhi airport's nonstop Srinagar flights make Kashmir a realistic long-weekend trip.",
  },
  amritsar: {
    katra: true,
    name: "Amritsar",
    state: "Punjab",
    airport: "Sri Guru Ram Dass Jee International (ATQ)",
    mode: "road",
    via: "Delhi",
    rail: "Trains from Amritsar reach Jammu Tawi in about 5 to 6 hours; continue by Vande Bharat or cab.",
    road: "roughly 460 km via Pathankot, Jammu and the Banihal tunnels; about 9 to 11 hours",
    travelDays: 1,
    season: "Punjab families drive up in May and June, and many combine Kashmir with Vaishno Devi. Spring tulips in April and snow in January are the other favourites.",
    tips: [
      "Driving is the most popular way from Amritsar; leave early to cross the Jammu to Srinagar stretch in daylight.",
      "Flights from Amritsar to Srinagar usually connect via Delhi or Jammu, so the road is often quicker.",
      "Keep a valid pollution certificate and documents for your car; there are checks on the highway.",
    ],
    hook: "From Amritsar, Kashmir is a one-day drive via Pathankot and Jammu, and many Punjabi families combine it with Vaishno Devi.",
  },
  jammu: {
    name: "Jammu",
    state: "Jammu and Kashmir",
    airport: "Jammu (IXJ)",
    mode: "rail",
    flight: "about 40 minutes",
    rail: "The Vande Bharat Express now runs between Jammu Tawi and Srinagar in under 5 hours, and from SMVD Katra in about 3 hours, through the Banihal tunnel and over the Chenab bridge.",
    road: "about 250 km on NH 44 via Udhampur, Ramban, Banihal and the Navyug tunnel; 6 to 8 hours",
    travelDays: 0,
    season: "Jammu residents visit the valley year round, but the most popular breaks are summer weekends in the meadows and winter snow in Gulmarg and Sonamarg.",
    tips: [
      "The Vande Bharat is now the most reliable way when the highway is busy or closed.",
      "Jammu to Srinagar flights take about 40 minutes and are worth it in winter.",
      "The Mughal Road via Shopian is a scenic alternative in summer when it is open.",
    ],
    hook: "From Jammu, the Vande Bharat to Srinagar has turned Kashmir into a same-day trip by train.",
  },
  shimla: {
    name: "Shimla",
    state: "Himachal Pradesh",
    airport: "Chandigarh (IXC), about 115 km away",
    mode: "connect",
    via: "Chandigarh",
    rail: "Take the toy train or road to Kalka, then trains to Jammu Tawi; continue by Vande Bharat or cab.",
    road: "roughly 700 km via Chandigarh or Una, Pathankot and Jammu; a two-day drive",
    travelDays: 1,
    season: "Shimla travellers usually go in spring and autumn, when the hotel season at home is quieter, and enjoy comparing two Himalayan valleys.",
    tips: [
      "Drive to Chandigarh and take the nonstop flight to Srinagar; it is the fastest route.",
      "Himachal travellers find Kashmir's houseboats and Mughal gardens the most different from home; plan time for both.",
      "A Kashmir and Ladakh combination via Zojila suits those used to mountain roads.",
    ],
    hook: "From Shimla, Kashmir is a Himalayan-to-Himalayan trip, fastest via Chandigarh's nonstop flight to Srinagar.",
  },
  dehradun: {
    name: "Dehradun",
    state: "Uttarakhand",
    airport: "Jolly Grant (DED)",
    mode: "connect",
    via: "Delhi",
    rail: "Trains from Dehradun and Haridwar reach Jammu Tawi in about 12 to 14 hours; continue by Vande Bharat or cab.",
    road: "roughly 770 km via Saharanpur, Ambala, Pathankot and Jammu; a two-day drive",
    travelDays: 1,
    season: "Uttarakhand travellers often go in October and November after the Char Dham season ends, and in spring for the Tulip Garden.",
    tips: [
      "Dehradun to Delhi flights connect well with Srinagar departures.",
      "The Haridwar to Jammu trains make a train-plus-Vande-Bharat trip possible end to end.",
      "Kashmir's meadows at Pahalgam and Sonamarg are a different kind of mountain from Garhwal; give them a full day each.",
    ],
    hook: "From Dehradun, Kashmir is one connection via Delhi, or a long but easy rail journey via Jammu.",
  },
  indore: {
    katra: true,
    name: "Indore",
    state: "Madhya Pradesh",
    airport: "Devi Ahilyabai Holkar (IDR)",
    mode: "connect",
    via: "Delhi or Mumbai",
    rail: "The Malwa Express runs from Indore to SMVD Katra, a journey of about a day and a half; from Katra the Vande Bharat reaches Srinagar in about 3 hours.",
    travelDays: 1,
    season: "Indore and Bhopal families travel in May, around Diwali and over New Year. Vegetarian food planning matters for many groups.",
    tips: [
      "The Malwa Express plus Vande Bharat lets you combine Vaishno Devi and Kashmir by train.",
      "Pure-veg hotels in Srinagar can be arranged; ask the agent.",
      "Poha and jalebi lovers will enjoy Srinagar's bakeries: try girda and lavasa bread at breakfast.",
    ],
    hook: "Indore is linked to Katra by the Malwa Express, so a Vaishno Devi and Kashmir trip by rail is easy to plan.",
  },
  raipur: {
    name: "Raipur",
    state: "Chhattisgarh",
    airport: "Swami Vivekananda (RPR)",
    mode: "connect",
    via: "Delhi",
    rail: "Trains to Jammu Tawi take well over a day; most Raipur travellers fly via Delhi.",
    travelDays: 1,
    season: "Raipur travellers book May and June to escape the heat, Diwali for autumn colours and late December for snow.",
    tips: [
      "Raipur to Delhi flights in the morning connect with afternoon Srinagar departures.",
      "Allow a rest afternoon on arrival; the climate change from Raipur's heat is big.",
      "Ask the agent for vegetarian-friendly hotels if your group needs them.",
    ],
    hook: "From Raipur, Kashmir is one connection via Delhi and a complete escape from central India's summer.",
  },
  patna: {
    katra: true,
    name: "Patna",
    state: "Bihar",
    airport: "Jay Prakash Narayan (PAT)",
    mode: "connect",
    via: "Delhi or Kolkata",
    rail: "The Archana Express and other trains run to Jammu Tawi in about a day and a half; continue by Vande Bharat or cab.",
    travelDays: 1,
    season: "Patna families travel in May and June and after Chhath in November, when Kashmir's autumn is clear and calm.",
    tips: [
      "Connections via Delhi are the most frequent; via Kolkata works for Kolkata's nonstop Srinagar flights.",
      "Rail plus Vande Bharat is a budget-friendly option for larger families.",
      "Carry warm wear even in summer; evenings in Pahalgam are cold.",
    ],
    hook: "From Patna, Kashmir is reached via Delhi or Kolkata by air, or by train to Jammu and the Vande Bharat.",
  },
  ranchi: {
    name: "Ranchi",
    state: "Jharkhand",
    airport: "Birsa Munda (IXR)",
    mode: "connect",
    via: "Delhi or Kolkata",
    rail: "Trains run to Jammu Tawi in about a day and a half; most Ranchi travellers fly.",
    travelDays: 1,
    season: "Ranchi travellers favour May and June, Puja holidays in October and New Year snow.",
    tips: [
      "Fly via Kolkata to use its nonstop Srinagar flights, or via Delhi for more choice.",
      "October Puja dates book early; plan 2 months ahead.",
      "Pahalgam and Sonamarg suit families who like walks and pony rides.",
    ],
    hook: "From Ranchi, Kashmir is one connection via Kolkata or Delhi, and the Puja holidays are a favourite time to go.",
  },
  bhubaneswar: {
    name: "Bhubaneswar",
    state: "Odisha",
    airport: "Biju Patnaik International (BBI)",
    mode: "connect",
    via: "Delhi or Kolkata",
    rail: "Trains to Jammu Tawi take about two days; most Odisha travellers fly.",
    travelDays: 1,
    season: "Odisha travellers book in May, around Puja in October and over New Year. October is ideal for clear skies and autumn colours.",
    tips: [
      "Via Kolkata is often the shortest connection, using its nonstop Srinagar flights.",
      "Coastal travellers should carry proper woollens; Kashmir nights are cold most of the year.",
      "Fish lovers can try trout in Pahalgam and Kokernag.",
    ],
    hook: "From Bhubaneswar, Kashmir is one stop via Kolkata or Delhi, and the Puja holidays are the most popular time.",
  },
  goa: {
    name: "Goa",
    state: "Goa",
    airport: "Mopa (GOX) or Dabolim (GOI)",
    mode: "connect",
    via: "Delhi, Mumbai or Bengaluru",
    rail: "There is no practical rail route; the journey takes more than two days. Everyone flies.",
    travelDays: 1,
    season: "Goans swap beaches for mountains in the monsoon (June to August), when Kashmir is dry and green, and in winter for snow.",
    tips: [
      "Connect via Mumbai or Bengaluru for the shortest total journey.",
      "Kashmir's lakes are calm and cold; the shikara is for slow sightseeing, not swimming.",
      "Pack layers: the temperature drop from coastal Goa is large in every season.",
    ],
    hook: "From Goa, Kashmir is the mountain opposite of a beach holiday, one connection away via Mumbai or Bengaluru.",
  },
  visakhapatnam: {
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
    airport: "Visakhapatnam (VTZ)",
    mode: "connect",
    via: "Delhi, Hyderabad or Bengaluru",
    rail: "Trains to Jammu Tawi take about two days; most travellers fly.",
    travelDays: 1,
    season: "Andhra families travel in the April and May summer holidays and after Sankranti for late-season snow in January and February.",
    tips: [
      "Connections via Bengaluru use its nonstop Srinagar flights.",
      "Telugu and South Indian vegetarian meals are limited; tell the agent about food needs.",
      "First-time snow visitors should rent boots and jackets in Gulmarg.",
    ],
    hook: "From Visakhapatnam, Kashmir is a one-stop flight and a favourite summer-holiday snow and flower trip.",
  },
  puducherry: {
    name: "Puducherry",
    state: "Puducherry",
    airport: "Chennai (MAA), about 3 hours by road",
    mode: "connect",
    via: "Chennai, then Delhi or Bengaluru",
    rail: "Trains from Chennai to Katra take more than two days; most travellers drive to Chennai and fly.",
    travelDays: 1,
    season: "Puducherry travellers favour the April and May holidays and snow season from December to February.",
    tips: [
      "Plan a night in Chennai if your flight leaves early.",
      "Bengaluru is the closest airport with nonstop Srinagar flights.",
      "Coastal travellers should pack thermals for Gulmarg in any season.",
    ],
    hook: "From Puducherry, Kashmir starts with a short drive to Chennai and one connecting flight.",
  },
  guwahati: {
    name: "Guwahati",
    state: "Assam",
    airport: "Lokpriya Gopinath Bordoloi International (GAU)",
    mode: "connect",
    via: "Delhi or Kolkata",
    rail: "Trains run from Guwahati towards Jammu Tawi, but the journey takes about two and a half days; most travellers fly.",
    travelDays: 1,
    season: "Assam travellers often plan Kashmir after Bihu in April and May, when spring flowers are out, and around Puja in October.",
    tips: [
      "Via Kolkata is usually shortest because of its nonstop Srinagar flights.",
      "The North East and Kashmir share tea culture: compare Assam tea with Kashmiri kahwa and noon chai.",
      "Book flights 6 weeks ahead for April and May.",
    ],
    hook: "From Guwahati, Kashmir is one connection via Kolkata or Delhi, a journey from one tea country to another.",
  },
  shillong: {
    name: "Shillong",
    state: "Meghalaya",
    airport: "Guwahati (GAU), about 3 hours by road",
    mode: "connect",
    via: "Guwahati, then Delhi or Kolkata",
    rail: "There is no rail link from Shillong; travel to Guwahati and fly.",
    travelDays: 2,
    season: "Meghalaya travellers favour spring and October, avoiding their own monsoon months.",
    tips: [
      "Plan a night in Guwahati before an early flight.",
      "Kashmir's spring is drier than Meghalaya's; carry sunscreen.",
      "Combine Srinagar's gardens with Sonamarg's glacier for contrast with home.",
    ],
    hook: "From Shillong, Kashmir starts with a drive to Guwahati and one connection, from the wettest hills in India to the dry Himalaya.",
  },
  gangtok: {
    name: "Gangtok",
    state: "Sikkim",
    airport: "Bagdogra (IXB), about 4 hours by road, or Pakyong (PYG)",
    mode: "connect",
    via: "Bagdogra, then Delhi or Kolkata",
    rail: "New Jalpaiguri is the nearest major station, with trains towards Jammu Tawi taking about two days; most fly.",
    travelDays: 2,
    season: "Sikkim travellers usually go in spring and autumn and enjoy comparing Kashmir's valleys with their own.",
    tips: [
      "Allow a full day to reach Bagdogra and connect.",
      "Kashmir's Mughal gardens and houseboats are the most different experiences from Sikkim; prioritise them.",
      "Mountain-road travellers may enjoy adding Sonamarg and the Zojila approach.",
    ],
    hook: "From Gangtok, Kashmir is a Himalaya-to-Himalaya journey via Bagdogra and one connecting flight.",
  },
  itanagar: {
    name: "Itanagar",
    state: "Arunachal Pradesh",
    airport: "Donyi Polo, Hollongi (HGI)",
    mode: "connect",
    via: "Delhi or Kolkata, sometimes via Guwahati",
    rail: "Naharlagun station links to Guwahati; long-distance rail to Jammu is impractical.",
    travelDays: 2,
    season: "Arunachal travellers favour spring and October, outside their own rainy months.",
    tips: [
      "Connections can be long; consider a night in Delhi or Kolkata.",
      "Kashmir's apple and walnut orchards in autumn are worth a stop on the Pahalgam road.",
      "Plan at least 7 days in total including travel.",
    ],
    hook: "From Itanagar, Kashmir needs one or two connections and is best planned as a week-long trip.",
  },
  dimapur: {
    name: "Dimapur",
    state: "Nagaland",
    airport: "Dimapur (DMU)",
    mode: "connect",
    via: "Kolkata or Delhi, sometimes via Guwahati",
    rail: "Dimapur station has trains to Delhi, from where Jammu trains continue; flying is far quicker.",
    travelDays: 2,
    season: "Nagaland travellers often travel in spring and October; December is busy at home with the Hornbill Festival.",
    tips: [
      "Allow a buffer day for connections from Dimapur.",
      "Meat lovers will enjoy Kashmiri wazwan; ask for a traditional meal in Srinagar.",
      "Kohima travellers can reach Dimapur airport in about 2 to 3 hours.",
    ],
    hook: "From Dimapur and Kohima, Kashmir is one or two connections away and pairs a love of meat dishes with wazwan.",
  },
  imphal: {
    name: "Imphal",
    state: "Manipur",
    airport: "Bir Tikendrajit International (IMF)",
    mode: "connect",
    via: "Kolkata, Guwahati or Delhi",
    rail: "There is no practical rail route; everyone flies.",
    travelDays: 2,
    season: "Manipur travellers favour spring and autumn and often plan around festival holidays.",
    tips: [
      "Via Kolkata is often shortest, using its nonstop Srinagar flights.",
      "Plan a full rest evening on arrival in Srinagar.",
      "Dal Lake's floating gardens may remind you of Loktak's phumdis; compare them on a shikara ride.",
    ],
    hook: "From Imphal, Kashmir is one connection via Kolkata or Guwahati, and Dal Lake's floating gardens echo Loktak.",
  },
  aizawl: {
    name: "Aizawl",
    state: "Mizoram",
    airport: "Lengpui (AJL)",
    mode: "connect",
    via: "Kolkata or Guwahati, then onward",
    rail: "There is no practical rail route; everyone flies.",
    travelDays: 2,
    season: "Mizoram travellers favour spring and October and often plan around Christmas for snow.",
    tips: [
      "Christmas in Kashmir is quiet and snowy; Srinagar's Holy Family Church and Gulmarg's St Mary's Church hold services.",
      "Allow one buffer day for connections.",
      "Pack thermals for December and January.",
    ],
    hook: "From Aizawl, Kashmir is a connecting flight away, and a white Christmas in Gulmarg is a popular plan.",
  },
  agartala: {
    name: "Agartala",
    state: "Tripura",
    airport: "Maharaja Bir Bikram (IXA)",
    mode: "connect",
    via: "Kolkata or Delhi",
    rail: "Agartala has trains towards Guwahati and beyond, but rail to Jammu is impractical.",
    travelDays: 1,
    season: "Tripura travellers usually go around Durga Puja in October and in spring.",
    tips: [
      "Agartala to Kolkata flights are frequent; connect to a nonstop Srinagar flight there.",
      "October Puja dates book early.",
      "Kashmir's autumn is crisp and clear, ideal for photography.",
    ],
    hook: "From Agartala, Kashmir is one connection via Kolkata, and Puja-time Kashmir is a favourite.",
  },
};

const PLURAL = (n: number) => (n === 1 ? "" : "s");

function reachBlock(o: Origin) {
  const parts: string[] = [];
  if (o.mode === "direct") {
    parts.push(
      `By air: ${o.name} has nonstop flights to Srinagar (SXR) from ${o.airport}, taking ${o.flight}. Srinagar airport is about 14 km from Dal Lake, so most trips start with an afternoon shikara ride.`,
    );
  } else if (o.mode === "rail" && o.flight) {
    parts.push(`By rail: ${o.rail}`, `By air: Jammu (IXJ) to Srinagar flights take ${o.flight}.`);
  } else {
    parts.push(
      `By air: there is usually no nonstop flight from ${o.name} to Srinagar, so travellers connect via ${o.via}. Fly from ${o.airport}; with one connection the journey takes most of a day, which is why we add ${o.travelDays} travel day${PLURAL(o.travelDays)} to a Kashmir trip from ${o.name}.`,
    );
  }
  if (o.mode !== "rail") parts.push(`By rail: ${o.rail}`);
  if (o.road) parts.push(`By road: ${o.name} to Srinagar is ${o.road}.`);
  return parts.join("\n\n");
}

function itinerary(o: Origin): Itinerary {
  const out = o.travelDays >= 1;
  const first =
    o.mode === "rail"
      ? `Vande Bharat from ${o.name} to Srinagar through the Banihal tunnel. Afternoon shikara ride on Dal Lake.`
      : o.mode === "road"
        ? `Drive from ${o.name} to Srinagar via Pathankot, Jammu and the Banihal tunnels, leaving early to cross the mountains in daylight.`
        : out
          ? `Travel from ${o.name} to Srinagar via ${o.via}. Check in, rest and take an evening shikara ride if you land early.`
          : `Arrive in Srinagar from ${o.name}. Shikara ride on Dal Lake past Char Chinar and the floating vegetable gardens.`;
  const days = [
    first,
    out || o.mode === "road" ? "Srinagar: Nishat Bagh, Shalimar Bagh, Shankaracharya Temple and the old city." : "Srinagar: Nishat Bagh, Shalimar Bagh, Chashme Shahi and Shankaracharya Temple.",
    "Gulmarg day trip (about 50 km): Gondola to Kongdori and, if open, Apharwat; snow from December to March, meadows in summer.",
    "Drive to Pahalgam (about 90 km) via the Pampore saffron fields and the Awantipora ruins. Evening by the Lidder river.",
    "Pahalgam: Betaab Valley, Aru Valley and Chandanwari by local cab, then back to Srinagar.",
    "Sonamarg day trip (about 80 km): Thajiwas Glacier on foot or by pony; Zero Point only when the road is open.",
    out || o.mode === "road" ? `Return to ${o.name}${o.via && o.mode !== "road" ? ` via ${o.via}` : ""}, with time for pashmina, saffron and dry-fruit shopping.` : `Return to ${o.name}.`,
  ];
  if (o.katra) {
    // Pilgrim variant: reach Jammu or Katra first, Vaishno Devi, then the train into the valley.
    days.splice(
      0,
      1,
      `Travel from ${o.name} to Jammu or SMVD Katra by ${o.mode === "road" ? "road" : "train or flight"}. Overnight in Katra.`,
      "Vaishno Devi yatra from Katra (about 12 km on foot, or by helicopter to Sanjichhat when operating).",
      "Vande Bharat from Katra to Srinagar in about 3 hours, crossing the Chenab bridge. Evening shikara on Dal Lake.",
    );
  }
  if (o.travelDays >= 2) days.splice(1, 0, "Rest day in Srinagar to adjust to the cold and altitude; old city walk and Hazratbal shrine.");
  const title = o.katra ? `${days.length}-day Vaishno Devi and Kashmir itinerary from ${o.name}` : `${days.length}-day Kashmir itinerary from ${o.name}`;
  return { title, days };
}

function faqs(o: Origin): Faq[] {
  const total = 6 + o.travelDays;
  const list: Faq[] = [
    {
      q: `How do I reach Kashmir from ${o.name}?`,
      a:
        o.mode === "direct"
          ? `Fly nonstop from ${o.name} to Srinagar, which takes ${o.flight}. ${o.road ? `By road it is ${o.road}.` : "Trains to Jammu or Katra are much slower."}`
          : o.mode === "rail"
            ? `Take the Vande Bharat Express to Srinagar from Jammu Tawi or Katra, drive about 250 km on NH 44, or fly to Srinagar in about 40 minutes.`
            : `Fly from ${o.name} to Srinagar with one connection via ${o.via}. ${o.road ? `Driving is also possible: ${o.road}.` : "Rail to Jammu is possible but takes much longer."}`,
    },
    {
      q: `How many days is enough for a Kashmir trip from ${o.name}?`,
      a: `Plan about ${total} days from ${o.name}: ${o.travelDays ? `${o.travelDays} for travel and ` : ""}6 in Kashmir to cover Srinagar, Gulmarg, Pahalgam and Sonamarg without rushing. A 4-day Srinagar and Gulmarg break works if you are short on time.`,
    },
    {
      q: `What is the best time to visit Kashmir from ${o.name}?`,
      a: o.season,
    },
    {
      q: `What does a Kashmir tour package from ${o.name} cost?`,
      a: `Land packages for Srinagar, Gulmarg and Pahalgam on Tavel Package start from about ₹7,800 per person on twin sharing, and premium or luxury trips cost more. Flights or trains from ${o.name} are extra and vary by season. Share your dates and up to 3 verified Kashmir agents send exact quotes.`,
    },
    {
      q: `Is there a direct flight from ${o.name} to Srinagar?`,
      a:
        o.mode === "direct"
          ? `Yes. Nonstop flights run from ${o.name} to Srinagar; schedules change by season, so check current airline timetables.`
          : o.mode === "rail"
            ? "Yes, Jammu to Srinagar flights take about 40 minutes, though many people now take the Vande Bharat train."
            : `Usually not. Most travellers from ${o.name} connect via ${o.via}. Cities with regular nonstop Srinagar flights include Delhi, Mumbai, Bengaluru, Kolkata, Chandigarh and Jammu.`,
    },
  ];
  return list;
}

function page(slug: string, o: Origin) {
  const total = 6 + o.travelDays;
  const intro = [
    `Kashmir tour packages from ${o.name} cover Srinagar's Dal Lake and Mughal gardens, the Gulmarg Gondola, Pahalgam's river valleys and Sonamarg's glacier. ${o.hook} Most travellers from ${o.state.startsWith(o.name) ? o.name : `${o.name} and the rest of ${o.state}`} plan about ${total} days in total, and prices for the Kashmir part start from about ₹7,800 per person on twin sharing.`,
    `Share your dates and budget once; up to 3 verified Kashmir agents quote for the trip as you would make it from ${o.name}.`,
  ].join("\n\n");

  return {
    intro,
    blocks: [
      { heading: `How to reach Kashmir from ${o.name}`, body: reachBlock(o) },
      {
        heading: `Best time to visit Kashmir from ${o.name}`,
        body: o.season,
      },
      {
        heading: `How many days for Kashmir from ${o.name}`,
        body: `Plan about ${total} days from ${o.name}${o.travelDays ? `, including ${o.travelDays} for travel` : ""}: 3 nights in Srinagar with day trips to Gulmarg and Sonamarg, and 1 or 2 nights in Pahalgam. With less time, focus on Srinagar and Gulmarg.`,
      },
      {
        heading: `Kashmir package cost from ${o.name}`,
        body: `The Kashmir part starts from about ₹7,800 per person on twin sharing; hotel category, a houseboat night and peak weeks raise it. Travel from ${o.name} is usually priced separately so agents can match the best ${o.mode === "rail" || o.mode === "road" ? "train, cab or flight" : "flights"} to your dates.`,
      },
      { heading: `Tips for travellers from ${o.name}`, items: o.tips },
    ],
    itineraries: [itinerary(o)],
    faqs: faqs(o),
  };
}

export const KASHMIR_FROM_ORIGINS: Record<string, NonNullable<NonNullable<GuideContent["packages"]>["fromOrigins"]>[string]> =
  Object.fromEntries(Object.entries(O).map(([slug, o]) => [slug, page(slug, o)]));

export const KASHMIR_ORIGIN_DESTINATION: Record<string, Partial<GuideContent>> = {
  kashmir: { packages: { fromOrigins: KASHMIR_FROM_ORIGINS } },
};

// City-specific planning notes and questions: the part of each page that no
// other departure city shares.
const EXTRA: Record<string, { plan: string; faqs: Faq[] }> = {
  delhi: {
    plan: "Most Delhi travellers take a morning flight, spend the first afternoon on Dal Lake and keep the last day for Mughal gardens before an evening flight home, so a 5-night trip uses almost every hour. Families who prefer rail take the Vande Bharat to Katra, visit Vaishno Devi, then continue to Srinagar on the Katra to Srinagar Vande Bharat, ending with a flight back to Delhi. Groups of friends often drive up in two days, stopping in Jammu, and use their own car for Gulmarg and Pahalgam.",
    faqs: [
      { q: "Can I do Kashmir from Delhi in a long weekend?", a: "Yes. Fly to Srinagar on Friday morning, spend Saturday in Gulmarg and Sunday on the lake and gardens, and fly back on Monday. Add a day for Pahalgam." },
      { q: "Is it better to drive or fly from Delhi to Kashmir?", a: "Flying takes about 1 hour 30 minutes against two days of driving, so most people fly. Drive if you want a road trip and plan a Jammu night halt." },
    ],
  },
  mumbai: {
    plan: "Mumbai travellers usually fly nonstop on day one and spend 5 or 6 nights in Kashmir, often with one night on a Dal Lake houseboat. Monsoon-season trips from Mumbai lean towards Pahalgam and Sonamarg meadows; Diwali trips add a day in Srinagar for the chinars; winter trips put two nights in Gulmarg for snow. Couples from Mumbai frequently pair Kashmir with a few days in Ladakh in July and August.",
    faqs: [{ q: "Is Kashmir good in the monsoon for people from Mumbai?", a: "Yes. Kashmir gets little monsoon rain, so June to August is dry and green while Mumbai is wet. It is the main summer season, so book early." }],
  },
  bangalore: {
    plan: "Bangalore travellers usually fly nonstop on an early flight and keep a 6-night plan: Srinagar, a night in Gulmarg in winter, and Pahalgam in summer. IT teams book offsites in April and October, when Srinagar hotels have meeting space and the weather is mild. Families often add a day for the Tulip Garden in late March or April.",
    faqs: [{ q: "When will I see snow in Kashmir if I travel from Bangalore?", a: "Snow is most reliable in Gulmarg from late December to February. In March and April there is still snow higher up at Apharwat, reached by Gondola Phase 2." }],
  },
  chennai: {
    plan: "Chennai travellers usually fly out early, connect in Delhi or Bengaluru and reach Srinagar by afternoon, so day one is a rest day. A 7-day trip then covers Srinagar, Gulmarg, Pahalgam and Sonamarg at an easy pace. Many Chennai families combine Kashmir with Vaishno Devi by flying into Jammu and taking the Vande Bharat from Katra to Srinagar.",
    faqs: [{ q: "Can I travel from Chennai to Kashmir by train?", a: "Yes, the Andaman Express runs from Chennai to SMVD Katra in more than two days, and the Vande Bharat continues to Srinagar. It suits pilgrims visiting Vaishno Devi; most others fly." }],
  },
  kolkata: {
    plan: "Kolkata travellers usually take the nonstop flight and plan 6 or 7 nights, often adding Doodhpathri or Yusmarg for quieter meadows. Puja-time trips in October are timed for clear skies and autumn colours; summer trips focus on Pahalgam and Sonamarg. Bengali groups often ask agents for a houseboat night and a wazwan dinner.",
    faqs: [{ q: "Is October a good time for Kashmir from Kolkata?", a: "Yes. October has clear, cool days and the chinar trees start to turn red and gold. It is quieter than summer, though Puja weeks book up early." }],
  },
  hyderabad: {
    plan: "Hyderabad travellers usually connect via Delhi and spend 6 nights in Kashmir, with Gulmarg and Pahalgam as must-sees. Summer trips from April to June escape the Deccan heat, and families often book together with relatives for a group tempo traveller. Shoppers from Hyderabad save time for Kashmiri dry fruit, saffron and pashmina.",
    faqs: [{ q: "How long does it take to reach Srinagar from Hyderabad?", a: "With one connection via Delhi or Mumbai, about 6 to 8 hours door to door, depending on the layover." }],
  },
  pune: {
    plan: "Pune travellers either fly via Delhi or drive to Mumbai for a nonstop flight, then spend 6 nights in Kashmir. Monsoon and Diwali are the two big seasons. Friends' groups from Pune often add river rafting in Sonamarg or Pahalgam in summer, and families ask for one houseboat night.",
    faqs: [{ q: "Should I fly from Pune or Mumbai to Srinagar?", a: "From Pune you usually connect via Delhi. Driving to Mumbai for a nonstop flight takes a similar total time and can be cheaper; compare both for your dates." }],
  },
  ahmedabad: {
    plan: "Ahmedabad families usually connect via Delhi or Mumbai and book 6 or 7 nights, often in large groups. Diwali trips focus on Srinagar's gardens and autumn colours; May trips on Pahalgam and Gulmarg. Food is the top planning question: agents arrange pure-veg and Jain-friendly hotels and restaurants on request.",
    faqs: [{ q: "Is Jain food available in Kashmir?", a: "Yes, on request. Several hotels in Srinagar, Gulmarg and Pahalgam prepare Jain meals, and vegetarian restaurants operate near Dal Lake in season. Tell the agent when you book." }],
  },
  jaipur: {
    plan: "Jaipur travellers usually connect via Delhi and plan 6 nights, with Gulmarg snow in winter and Pahalgam meadows in summer. Some families drive to Delhi and fly from there, or take the train to Jammu and the Vande Bharat to Srinagar. Groups often add Vaishno Devi at Katra on the way.",
    faqs: [{ q: "Can I combine Vaishno Devi with a Kashmir trip from Jaipur?", a: "Yes. Take a train or flight to Jammu, visit Katra, then take the Vande Bharat from Katra to Srinagar. Add 2 days to the plan." }],
  },
  lucknow: {
    plan: "Lucknow travellers usually fly via Delhi and spend 6 nights in Kashmir. Summer trips escape the plains' heat; Dussehra and Diwali trips catch the autumn colours. Rail travellers take trains to Jammu Tawi and continue on the Vande Bharat to Srinagar.",
    faqs: [{ q: "Which is better from Lucknow, train or flight to Kashmir?", a: "Flying via Delhi is fastest. The train to Jammu plus the Vande Bharat to Srinagar is slower but budget friendly for families." }],
  },
  chandigarh: {
    plan: "Chandigarh travellers often take short, repeat trips: a nonstop flight for a 4-night Srinagar and Gulmarg break, or a drive for a longer family holiday. Winter trips from Chandigarh are popular for Gulmarg skiing courses. Many Tricity families also combine Kashmir with Ladakh via Sonamarg and Zojila in summer.",
    faqs: [{ q: "Can I drive from Chandigarh to Srinagar in one day?", a: "It is about 580 km and possible in a long day, but most people stop in Jammu or Patnitop and do the Jammu to Srinagar stretch in daylight." }],
  },
  kochi: {
    plan: "Kochi travellers usually fly out early with one connection and reach Srinagar by afternoon. Plans are often 7 days, with a rest first evening and two nights in Pahalgam. Many Kerala families travel in April and May school holidays or in winter specifically for snow in Gulmarg.",
    faqs: [{ q: "How do I travel from Kerala to Kashmir?", a: "Fly from Kochi, Thiruvananthapuram or Kozhikode to Srinagar with one connection via Delhi, Mumbai or Bengaluru. The Himsagar Express also links Kerala to Katra but takes about three days." }],
  },
  gurgaon: {
    plan: "Gurgaon travellers usually fly from Delhi on a Friday morning and keep trips short and premium: a houseboat night, Gulmarg with both Gondola phases and Pahalgam for two nights. Corporate groups book offsites in spring and autumn. Self-drive trips leave early and stop in Jammu.",
    faqs: [{ q: "Is Kashmir good for a corporate offsite from Gurgaon?", a: "Yes, in April to June and September to October. Srinagar has hotels with meeting rooms, and Gulmarg and Pahalgam suit team outings. Ask agents for group quotes." }],
  },
  amritsar: {
    plan: "Amritsar families usually drive to Srinagar in a day via Pathankot and Jammu, or split the drive with a night at Katra for Vaishno Devi. Plans run 6 to 7 nights with Pahalgam and Gulmarg. Some return via the Mughal Road in summer for a different route.",
    faqs: [{ q: "How far is Srinagar from Amritsar by road?", a: "About 460 km via Pathankot, Jammu and the Banihal tunnels, roughly 9 to 11 hours of driving." }],
  },
  jammu: {
    plan: "Jammu residents usually plan short breaks: the Vande Bharat to Srinagar in the morning, two nights in the valley, and back. Longer trips add Gulmarg and Sonamarg. In winter, flights are a good backup when snow slows the highway.",
    faqs: [{ q: "How long is the Vande Bharat from Jammu to Srinagar?", a: "Under 5 hours from Jammu Tawi, and about 3 hours from SMVD Katra. Check the current timetable and book in advance in summer." }],
  },
  shimla: {
    plan: "Shimla travellers usually drive to Chandigarh and fly nonstop to Srinagar, or drive the whole way over two days via Pathankot. Mountain-savvy travellers from Himachal often extend to Ladakh via Zojila and return via Manali. Trips are planned outside Shimla's own peak season.",
    faqs: [{ q: "Can I do a Kashmir and Ladakh road trip from Shimla?", a: "Yes, in summer: drive to Srinagar, then to Leh via Sonamarg and Kargil, and return via the Manali highway. Allow 12 to 14 days." }],
  },
  dehradun: {
    plan: "Dehradun travellers usually fly via Delhi or take trains from Dehradun or Haridwar to Jammu, then the Vande Bharat to Srinagar. Autumn trips after the Char Dham season are popular, as is spring for the Tulip Garden.",
    faqs: [{ q: "Is there a train from Uttarakhand to Kashmir?", a: "Trains run from Dehradun and Haridwar to Jammu Tawi, and the Vande Bharat continues from Jammu or Katra to Srinagar." }],
  },
  indore: {
    plan: "Indore families often take the Malwa Express to Katra, visit Vaishno Devi and continue on the Vande Bharat to Srinagar, flying back to save time. Others fly via Delhi. Vegetarian food planning and a houseboat night are the most common requests.",
    faqs: [{ q: "Can I go from Indore to Kashmir by train?", a: "Yes. The Malwa Express runs from Indore to SMVD Katra, and the Vande Bharat from Katra reaches Srinagar in about 3 hours." }],
  },
  raipur: {
    plan: "Raipur travellers usually fly via Delhi and plan 6 or 7 nights, giving the first evening to rest. Summer trips focus on Pahalgam and Sonamarg; winter trips on Gulmarg.",
    faqs: [{ q: "How do I go from Chhattisgarh to Kashmir?", a: "Fly from Raipur to Srinagar via Delhi. Rail via Jammu is possible but takes more than a day." }],
  },
  patna: {
    plan: "Patna travellers either fly via Delhi or Kolkata or take the train to Jammu Tawi and the Vande Bharat to Srinagar. Families often plan after Chhath in November or in the May and June holidays, with 6 to 7 nights in Kashmir.",
    faqs: [{ q: "Is there a direct train from Patna to Jammu?", a: "Yes, trains such as the Archana Express run to Jammu Tawi. Continue to Srinagar by Vande Bharat or cab." }],
  },
  ranchi: {
    plan: "Ranchi travellers usually fly via Kolkata or Delhi and plan 6 nights in Kashmir. Puja-time trips in October are the most requested, with Srinagar's autumn colours and Pahalgam's quiet valleys.",
    faqs: [{ q: "How do I reach Srinagar from Ranchi?", a: "Fly from Ranchi via Kolkata or Delhi. The total journey is usually 6 to 8 hours with one connection." }],
  },
  bhubaneswar: {
    plan: "Bhubaneswar travellers usually connect via Kolkata, which has nonstop Srinagar flights. Puja and summer holidays are the main windows, and plans often run 6 nights with a houseboat stay.",
    faqs: [{ q: "Is there a flight from Bhubaneswar to Srinagar?", a: "There is usually no nonstop flight. Connect via Kolkata or Delhi." }],
  },
  goa: {
    plan: "Goa travellers usually fly via Mumbai or Bengaluru and plan monsoon or winter trips. Hospitality workers in Goa often take their holidays in the monsoon off-season, which is Kashmir's best summer weather.",
    faqs: [{ q: "When should Goa residents visit Kashmir?", a: "June to August, Goa's off-season, is a great time: Kashmir is dry and green. December to February is for snow." }],
  },
  visakhapatnam: {
    plan: "Visakhapatnam travellers usually fly via Bengaluru, Hyderabad or Delhi and plan 7 days, with snow in Gulmarg and the gardens in Srinagar as the highlights.",
    faqs: [{ q: "How do I reach Kashmir from Andhra Pradesh?", a: "Fly from Visakhapatnam, Vijayawada or Tirupati to Srinagar with one connection, usually via Hyderabad, Bengaluru or Delhi." }],
  },
  puducherry: {
    plan: "Puducherry travellers usually drive to Chennai and fly with one connection. Seven-day plans are common, with a rest evening on arrival.",
    faqs: [{ q: "Which airport should I use from Puducherry for Kashmir?", a: "Chennai is the usual choice, about 3 hours by road, with one connection to Srinagar." }],
  },
  guwahati: {
    plan: "Guwahati travellers usually fly via Kolkata or Delhi and plan 6 to 7 nights. Spring and Puja holidays are the main windows; tea lovers enjoy kahwa and noon chai in Srinagar.",
    faqs: [{ q: "How long does it take to fly from Guwahati to Srinagar?", a: "With one connection via Kolkata or Delhi, usually 6 to 9 hours including the layover." }],
  },
  shillong: {
    plan: "Shillong travellers drive to Guwahati, often staying a night before an early flight, then connect via Kolkata or Delhi. Seven to eight days in total is comfortable.",
    faqs: [{ q: "What is the nearest airport to Shillong for flights to Kashmir?", a: "Guwahati, about 3 hours by road, with connections to Srinagar via Kolkata or Delhi." }],
  },
  gangtok: {
    plan: "Gangtok travellers drive to Bagdogra or fly from Pakyong, then connect to Srinagar. Plans run 8 days or more including travel, and many like adding Sonamarg's glacier views.",
    faqs: [{ q: "How do I go from Sikkim to Kashmir?", a: "Drive to Bagdogra (about 4 hours) or use Pakyong, then fly to Srinagar with one connection via Kolkata or Delhi." }],
  },
  itanagar: {
    plan: "Itanagar travellers fly from Hollongi with one or two connections and usually plan a full week, often with a night in Delhi or Kolkata on the way.",
    faqs: [{ q: "How many days do I need for Kashmir from Arunachal Pradesh?", a: "About 8 days including travel, because connections from Itanagar can be long." }],
  },
  dimapur: {
    plan: "Nagaland travellers fly from Dimapur with one or two connections and plan a week or more. Meat lovers often ask for a wazwan dinner in Srinagar.",
    faqs: [{ q: "Which airport do I use from Kohima for Kashmir?", a: "Dimapur, about 2 to 3 hours from Kohima, with connections to Srinagar via Kolkata or Delhi." }],
  },
  imphal: {
    plan: "Imphal travellers usually connect via Kolkata or Guwahati and plan 7 to 8 days, with a houseboat night on Dal Lake as a highlight.",
    faqs: [{ q: "Is there a direct flight from Imphal to Srinagar?", a: "No. Connect via Kolkata, Guwahati or Delhi." }],
  },
  aizawl: {
    plan: "Aizawl travellers fly from Lengpui with one or two connections and plan a week. Christmas trips to snowy Gulmarg are increasingly popular.",
    faqs: [{ q: "Can I celebrate Christmas in Kashmir?", a: "Yes. Srinagar's Holy Family Church and Gulmarg's St Mary's Church hold Christmas services, and Gulmarg usually has snow in late December." }],
  },
  agartala: {
    plan: "Agartala travellers usually fly to Kolkata and connect to a nonstop Srinagar flight. October Puja trips and spring holidays are most common.",
    faqs: [{ q: "How do I go from Tripura to Kashmir?", a: "Fly from Agartala to Kolkata and take a nonstop flight to Srinagar, or connect via Delhi." }],
  },
};

for (const [slug, extra] of Object.entries(EXTRA)) {
  const p = KASHMIR_FROM_ORIGINS[slug];
  if (!p) continue;
  p.blocks = [{ heading: `Planning a Kashmir trip from ${O[slug].name}`, body: extra.plan }, ...(p.blocks ?? [])];
  p.faqs = [...(p.faqs ?? []), ...extra.faqs];
}
