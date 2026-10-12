// Master location structure for tavelpackage.in (TravelTriangle-style).
//
// Destination -> City -> Place.
//  - Destination: the name travellers search, e.g. "kashmir" (Jammu & Kashmir),
//    "himachal", "andaman", or a country such as "thailand". Every Indian
//    state/UT is one destination. Destinations own /tour-packages/{slug},
//    /{theme}/{slug} and /{slug}-tourism.
//  - City: a town or area inside a destination, e.g. "gulmarg". Cities also
//    get /tour-packages/{slug} and /{destination}-tourism/{city}.
//  - Place: an attraction, listed under "places to visit". A destination with
//    no cities (Delhi, Singapore) lists places directly.
//  - Circuit: a multi-stop search term ("Golden Triangle", "Char Dham").
//
// Slugs of destinations, cities and circuits share one namespace because
// /tour-packages/{slug} resolves all three. Run `npx tsx scripts/check-locations.ts`.
//
// tier: 1 = high demand (content first), 2 = solid demand, 3 = long tail.
// premium: high-ticket destinations; leads are priced higher (PREMIUM_LEAD_PRICE).

export type Scope = "india" | "international";

export type Zone =
  | "north-india"
  | "west-india"
  | "south-india"
  | "east-india"
  | "north-east-india"
  | "central-india"
  | "indian-islands"
  | "asia"
  | "middle-east"
  | "indian-ocean"
  | "europe"
  | "oceania";

export type DestinationKind = "state" | "union-territory" | "country" | "region";

export type CityKind =
  | "city"
  | "hill-station"
  | "beach"
  | "pilgrimage"
  | "wildlife"
  | "heritage"
  | "valley"
  | "island"
  | "desert"
  | "lake"
  | "adventure";

export type Tier = 1 | 2 | 3;

export type CityDef = {
  slug: string;
  name: string;
  kind: CityKind;
  tier: Tier;
  places: string[];
};

export type DestinationDef = {
  slug: string;
  name: string;
  officialName?: string;
  scope: Scope;
  kind: DestinationKind;
  zone: Zone;
  tier: Tier;
  premium?: boolean;
  cities: CityDef[];
  places?: string[]; // only for destinations without cities
};

export type CircuitDef = {
  slug: string;
  name: string;
  scope: Scope;
  tier: Tier;
  premium?: boolean;
  covers: string[]; // destination or city slugs, in travel order
};

export const STANDARD_LEAD_PRICE = 100;
export const PREMIUM_LEAD_PRICE = 200;

export const ZONES: Record<Zone, { name: string; scope: Scope }> = {
  "north-india": { name: "North India", scope: "india" },
  "west-india": { name: "West India", scope: "india" },
  "south-india": { name: "South India", scope: "india" },
  "east-india": { name: "East India", scope: "india" },
  "north-east-india": { name: "North East India", scope: "india" },
  "central-india": { name: "Central India", scope: "india" },
  "indian-islands": { name: "Islands", scope: "india" },
  asia: { name: "Asia", scope: "international" },
  "middle-east": { name: "Middle East", scope: "international" },
  "indian-ocean": { name: "Indian Ocean Islands", scope: "international" },
  europe: { name: "Europe", scope: "international" },
  oceania: { name: "Australia & New Zealand", scope: "international" },
};

const c = (slug: string, name: string, kind: CityKind, tier: Tier, places: string[]): CityDef => ({
  slug,
  name,
  kind,
  tier,
  places,
});

const india = (
  slug: string,
  name: string,
  kind: "state" | "union-territory",
  zone: Zone,
  tier: Tier,
  cities: CityDef[],
  extra: Partial<DestinationDef> = {},
): DestinationDef => ({ slug, name, kind, zone, tier, cities, scope: "india", ...extra });

const abroad = (
  slug: string,
  name: string,
  zone: Zone,
  tier: Tier,
  cities: CityDef[],
  extra: Partial<DestinationDef> = {},
): DestinationDef => ({
  slug,
  name,
  kind: "country",
  zone,
  tier,
  cities,
  scope: "international",
  premium: true,
  ...extra,
});

export const DESTINATIONS: DestinationDef[] = [
  // ================= North India =================
  india("kashmir", "Kashmir", "union-territory", "north-india", 1, [
    c("srinagar", "Srinagar", "lake", 1, ["Dal Lake", "Mughal Gardens", "Shalimar Bagh", "Indira Gandhi Tulip Garden", "Shankaracharya Temple", "Hazratbal Shrine"]),
    c("gulmarg", "Gulmarg", "hill-station", 1, ["Gulmarg Gondola", "Apharwat Peak", "Khilanmarg", "Alpather Lake", "St. Mary's Church"]),
    c("pahalgam", "Pahalgam", "valley", 1, ["Betaab Valley", "Aru Valley", "Chandanwari", "Lidder River", "Sheshnag Lake"]),
    c("sonamarg", "Sonamarg", "valley", 1, ["Thajiwas Glacier", "Zojila Pass", "Vishansar Lake"]),
    c("doodhpathri", "Doodhpathri", "valley", 2, ["Shaliganga River", "Doodhpathri Meadows"]),
    c("yusmarg", "Yusmarg", "valley", 3, ["Nilnag Lake", "Doodh Ganga"]),
    c("gurez", "Gurez Valley", "valley", 3, ["Habba Khatoon Peak", "Kishanganga River", "Dawar"]),
    c("jammu", "Jammu", "city", 2, ["Raghunath Temple", "Bahu Fort", "Mubarak Mandi Palace", "Mansar Lake"]),
    c("katra", "Katra (Vaishno Devi)", "pilgrimage", 1, ["Mata Vaishno Devi Shrine", "Bhairon Temple", "Ardhkuwari"]),
    c("patnitop", "Patnitop", "hill-station", 2, ["Nathatop", "Sanasar", "Kud"]),
  ], { officialName: "Jammu & Kashmir", premium: true }),

  india("ladakh", "Ladakh", "union-territory", "north-india", 1, [
    c("leh", "Leh", "adventure", 1, ["Shanti Stupa", "Leh Palace", "Magnetic Hill", "Hemis Monastery", "Thiksey Monastery"]),
    c("nubra-valley", "Nubra Valley", "valley", 1, ["Diskit Monastery", "Hunder Sand Dunes", "Turtuk", "Khardung La"]),
    c("pangong-lake", "Pangong Lake", "lake", 1, ["Pangong Tso", "Chang La", "Spangmik"]),
    c("tso-moriri", "Tso Moriri", "lake", 3, ["Korzok Monastery", "Tso Kar"]),
    c("kargil", "Kargil", "city", 2, ["Kargil War Memorial (Drass)", "Mulbekh Monastery"]),
    c("zanskar", "Zanskar", "adventure", 3, ["Padum", "Phugtal Monastery", "Zanskar River"]),
  ], { premium: true }),

  india("himachal", "Himachal", "state", "north-india", 1, [
    c("shimla", "Shimla", "hill-station", 1, ["Mall Road", "The Ridge", "Jakhu Temple", "Kufri", "Christ Church"]),
    c("manali", "Manali", "hill-station", 1, ["Solang Valley", "Rohtang Pass", "Atal Tunnel", "Hadimba Temple", "Old Manali"]),
    c("kullu", "Kullu", "valley", 2, ["Bijli Mahadev", "Raghunath Temple Kullu", "Beas River rafting"]),
    c("kasol", "Kasol", "valley", 2, ["Manikaran Sahib", "Tosh", "Kheerganga", "Malana"]),
    c("dharamshala", "Dharamshala", "hill-station", 1, ["McLeod Ganj", "Bhagsu Waterfall", "Triund", "Dalai Lama Temple"]),
    c("dalhousie", "Dalhousie", "hill-station", 2, ["Khajjiar", "Panchpula", "St. John's Church"]),
    c("spiti-valley", "Spiti Valley", "adventure", 1, ["Kaza", "Key Monastery", "Chandratal Lake", "Kibber", "Dhankar Monastery"]),
    c("kasauli", "Kasauli", "hill-station", 2, ["Sunset Point", "Christ Church Kasauli", "Gilbert Trail"]),
    c("chail", "Chail", "hill-station", 3, ["Chail Palace", "Chail Cricket Ground"]),
    c("bir-billing", "Bir Billing", "adventure", 2, ["Paragliding site", "Tibetan Colony", "Baijnath Temple"]),
    c("kinnaur", "Kinnaur", "valley", 2, ["Kalpa", "Sangla", "Chitkul"]),
    c("jibhi", "Jibhi", "valley", 3, ["Jibhi Waterfall", "Jalori Pass", "Serolsar Lake"]),
    c("palampur", "Palampur", "hill-station", 3, ["Tea gardens", "Andretta", "Neugal Khad"]),
  ], { officialName: "Himachal Pradesh" }),

  india("uttarakhand", "Uttarakhand", "state", "north-india", 1, [
    c("nainital", "Nainital", "hill-station", 1, ["Naini Lake", "Snow View Point", "Tiffin Top", "Mall Road Nainital"]),
    c("mussoorie", "Mussoorie", "hill-station", 1, ["Kempty Falls", "Mall Road Mussoorie", "Lal Tibba", "Gun Hill"]),
    c("rishikesh", "Rishikesh", "adventure", 1, ["Laxman Jhula", "Triveni Ghat", "River rafting", "Beatles Ashram"]),
    c("haridwar", "Haridwar", "pilgrimage", 1, ["Har Ki Pauri", "Ganga Aarti", "Mansa Devi Temple", "Chandi Devi Temple"]),
    c("jim-corbett", "Jim Corbett", "wildlife", 1, ["Dhikala Zone", "Bijrani Zone", "Jhirna Zone", "Garjiya Devi Temple"]),
    c("auli", "Auli", "hill-station", 2, ["Auli Ropeway", "Gorson Bugyal", "Auli ski slopes"]),
    c("kedarnath", "Kedarnath", "pilgrimage", 1, ["Kedarnath Temple", "Gaurikund", "Bhairavnath Temple"]),
    c("badrinath", "Badrinath", "pilgrimage", 1, ["Badrinath Temple", "Mana Village", "Tapt Kund"]),
    c("yamunotri", "Yamunotri", "pilgrimage", 2, ["Yamunotri Temple", "Janki Chatti", "Surya Kund"]),
    c("gangotri", "Gangotri", "pilgrimage", 2, ["Gangotri Temple", "Gaumukh", "Harsil"]),
    c("chopta", "Chopta", "adventure", 2, ["Tungnath Temple", "Chandrashila", "Deoria Tal"]),
    c("valley-of-flowers", "Valley of Flowers", "adventure", 2, ["Valley of Flowers National Park", "Hemkund Sahib", "Ghangaria"]),
    c("ranikhet", "Ranikhet", "hill-station", 3, ["Jhula Devi Temple", "Chaubatia Gardens"]),
    c("almora", "Almora", "hill-station", 3, ["Kasar Devi", "Jageshwar Temples", "Bright End Corner"]),
    c("kausani", "Kausani", "hill-station", 3, ["Anasakti Ashram", "Kausani Tea Estate"]),
    c("lansdowne", "Lansdowne", "hill-station", 2, ["Tip-in-Top", "Bhulla Tal", "Tarkeshwar Mahadev"]),
    c("dehradun", "Dehradun", "city", 2, ["Robber's Cave", "Sahastradhara", "Forest Research Institute"]),
    c("munsiyari", "Munsiyari", "hill-station", 3, ["Panchachuli view", "Khaliya Top", "Birthi Falls"]),
  ]),

  india("punjab", "Punjab", "state", "north-india", 2, [
    c("amritsar", "Amritsar", "pilgrimage", 1, ["Golden Temple", "Wagah Border", "Jallianwala Bagh", "Partition Museum"]),
    c("anandpur-sahib", "Anandpur Sahib", "pilgrimage", 3, ["Takht Sri Kesgarh Sahib", "Virasat-e-Khalsa"]),
  ]),

  india("chandigarh", "Chandigarh", "union-territory", "north-india", 3, [], {
    places: ["Rock Garden", "Sukhna Lake", "Rose Garden", "Capitol Complex"],
  }),

  india("haryana", "Haryana", "state", "north-india", 3, [
    c("kurukshetra", "Kurukshetra", "pilgrimage", 3, ["Brahma Sarovar", "Jyotisar", "Panorama Museum"]),
    c("morni-hills", "Morni Hills", "hill-station", 3, ["Tikkar Taal", "Morni Fort"]),
  ]),

  india("delhi", "Delhi", "union-territory", "north-india", 1, [], {
    places: ["Red Fort", "Qutub Minar", "India Gate", "Humayun's Tomb", "Akshardham", "Chandni Chowk", "Lotus Temple"],
  }),

  india("rajasthan", "Rajasthan", "state", "north-india", 1, [
    c("jaipur", "Jaipur", "heritage", 1, ["Amer Fort", "Hawa Mahal", "City Palace Jaipur", "Nahargarh Fort", "Jantar Mantar"]),
    c("udaipur", "Udaipur", "heritage", 1, ["City Palace Udaipur", "Lake Pichola", "Fateh Sagar Lake", "Sajjangarh Palace"]),
    c("jodhpur", "Jodhpur", "heritage", 1, ["Mehrangarh Fort", "Umaid Bhawan Palace", "Jaswant Thada"]),
    c("jaisalmer", "Jaisalmer", "desert", 1, ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli", "Gadisar Lake"]),
    c("mount-abu", "Mount Abu", "hill-station", 2, ["Dilwara Temples", "Nakki Lake", "Guru Shikhar"]),
    c("pushkar", "Pushkar", "pilgrimage", 2, ["Brahma Temple", "Pushkar Lake", "Savitri Temple"]),
    c("ajmer", "Ajmer", "pilgrimage", 2, ["Ajmer Sharif Dargah", "Ana Sagar Lake", "Taragarh Fort"]),
    c("ranthambore", "Ranthambore", "wildlife", 1, ["Ranthambore National Park", "Ranthambore Fort"]),
    c("bikaner", "Bikaner", "heritage", 3, ["Junagarh Fort", "Karni Mata Temple", "Camel Research Farm"]),
    c("chittorgarh", "Chittorgarh", "heritage", 3, ["Chittorgarh Fort", "Vijay Stambh", "Padmini Palace"]),
    c("kumbhalgarh", "Kumbhalgarh", "heritage", 3, ["Kumbhalgarh Fort", "Kumbhalgarh Wildlife Sanctuary"]),
  ]),

  india("uttar-pradesh", "Uttar Pradesh", "state", "north-india", 1, [
    c("agra", "Agra", "heritage", 1, ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"]),
    c("varanasi", "Varanasi", "pilgrimage", 1, ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Ganga Aarti", "Sarnath"]),
    c("ayodhya", "Ayodhya", "pilgrimage", 1, ["Shri Ram Janmabhoomi Mandir", "Hanuman Garhi", "Saryu Ghat"]),
    c("mathura", "Mathura", "pilgrimage", 2, ["Krishna Janmabhoomi", "Vishram Ghat", "Dwarkadhish Temple Mathura"]),
    c("vrindavan", "Vrindavan", "pilgrimage", 2, ["Banke Bihari Temple", "Prem Mandir", "ISKCON Vrindavan"]),
    c("prayagraj", "Prayagraj", "pilgrimage", 2, ["Triveni Sangam", "Anand Bhawan", "Allahabad Fort"]),
    c("lucknow", "Lucknow", "city", 2, ["Bara Imambara", "Rumi Darwaza", "Hazratganj"]),
  ]),

  // ================= Central India =================
  india("madhya-pradesh", "Madhya Pradesh", "state", "central-india", 2, [
    c("ujjain", "Ujjain", "pilgrimage", 1, ["Mahakaleshwar Jyotirlinga", "Ram Ghat", "Kal Bhairav Temple"]),
    c("omkareshwar", "Omkareshwar", "pilgrimage", 2, ["Omkareshwar Jyotirlinga", "Mamleshwar Temple"]),
    c("khajuraho", "Khajuraho", "heritage", 2, ["Western Group of Temples", "Light and Sound Show", "Raneh Falls"]),
    c("pachmarhi", "Pachmarhi", "hill-station", 2, ["Bee Falls", "Dhoopgarh", "Jata Shankar Caves"]),
    c("kanha", "Kanha", "wildlife", 2, ["Kanha National Park", "Bamni Dadar"]),
    c("bandhavgarh", "Bandhavgarh", "wildlife", 2, ["Bandhavgarh National Park", "Bandhavgarh Fort"]),
    c("pench", "Pench", "wildlife", 3, ["Pench National Park"]),
    c("indore", "Indore", "city", 3, ["Rajwada", "Sarafa Bazaar", "Lal Bagh Palace"]),
    c("bhopal", "Bhopal", "city", 3, ["Upper Lake", "Sanchi Stupa", "Bhimbetka Rock Shelters"]),
    c("orchha", "Orchha", "heritage", 3, ["Orchha Fort", "Ram Raja Temple", "Orchha Chhatris"]),
    c("gwalior", "Gwalior", "heritage", 3, ["Gwalior Fort", "Jai Vilas Palace"]),
    c("mandu", "Mandu", "heritage", 3, ["Jahaz Mahal", "Roopmati Pavilion"]),
  ]),

  india("chhattisgarh", "Chhattisgarh", "state", "central-india", 3, [
    c("jagdalpur", "Jagdalpur (Bastar)", "valley", 3, ["Chitrakote Falls", "Tirathgarh Falls", "Kanger Valley"]),
  ]),

  // ================= West India =================
  india("goa", "Goa", "state", "west-india", 1, [
    c("north-goa", "North Goa", "beach", 1, ["Baga Beach", "Calangute Beach", "Anjuna Beach", "Fort Aguada", "Vagator Beach"]),
    c("south-goa", "South Goa", "beach", 1, ["Palolem Beach", "Colva Beach", "Cabo de Rama", "Butterfly Beach"]),
  ]),

  india("maharashtra", "Maharashtra", "state", "west-india", 2, [
    c("mumbai", "Mumbai", "city", 1, ["Gateway of India", "Marine Drive", "Elephanta Caves", "Siddhivinayak Temple"]),
    c("lonavala", "Lonavala", "hill-station", 1, ["Tiger Point", "Bhushi Dam", "Karla Caves", "Rajmachi"]),
    c("mahabaleshwar", "Mahabaleshwar", "hill-station", 1, ["Venna Lake", "Arthur's Seat", "Pratapgad Fort"]),
    c("ajanta-ellora", "Ajanta & Ellora", "heritage", 2, ["Ajanta Caves", "Ellora Caves", "Bibi Ka Maqbara", "Grishneshwar Temple"]),
    c("shirdi", "Shirdi", "pilgrimage", 1, ["Sai Baba Samadhi Mandir", "Dwarkamai", "Shani Shingnapur"]),
    c("nashik", "Nashik", "pilgrimage", 2, ["Trimbakeshwar", "Panchavati", "Sula Vineyards"]),
    c("matheran", "Matheran", "hill-station", 2, ["Panorama Point", "Charlotte Lake", "Matheran toy train"]),
    c("alibaug", "Alibaug", "beach", 2, ["Kolaba Fort", "Kashid Beach", "Nagaon Beach"]),
    c("tadoba", "Tadoba", "wildlife", 2, ["Tadoba-Andhari Tiger Reserve"]),
    c("pune", "Pune", "city", 3, ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort"]),
  ]),

  india("gujarat", "Gujarat", "state", "west-india", 2, [
    c("kutch", "Kutch (Rann of Kutch)", "desert", 1, ["White Rann (Dhordo)", "Rann Utsav", "Dholavira", "Mandvi Beach", "Kala Dungar"]),
    c("dwarka", "Dwarka", "pilgrimage", 1, ["Dwarkadhish Temple", "Bet Dwarka", "Nageshwar Jyotirlinga"]),
    c("somnath", "Somnath", "pilgrimage", 1, ["Somnath Jyotirlinga", "Triveni Sangam Somnath", "Bhalka Tirth"]),
    c("gir", "Gir (Sasan Gir)", "wildlife", 2, ["Gir National Park", "Devalia Safari Park"]),
    c("statue-of-unity", "Statue of Unity (Ekta Nagar)", "heritage", 2, ["Statue of Unity", "Sardar Sarovar Dam", "Jungle Safari Ekta Nagar"]),
    c("ahmedabad", "Ahmedabad", "city", 2, ["Sabarmati Ashram", "Adalaj Stepwell", "Kankaria Lake", "Sidi Saiyyed Mosque"]),
    c("saputara", "Saputara", "hill-station", 3, ["Saputara Lake", "Sunset Point Saputara", "Gira Falls"]),
  ]),

  india("daman-and-diu", "Daman & Diu", "union-territory", "west-india", 3, [
    c("diu", "Diu", "beach", 3, ["Diu Fort", "Nagoa Beach", "Naida Caves"]),
    c("daman", "Daman", "beach", 3, ["Devka Beach", "Moti Daman Fort", "Jampore Beach"]),
  ], { officialName: "Dadra & Nagar Haveli and Daman & Diu" }),

  // ================= South India =================
  india("kerala", "Kerala", "state", "south-india", 1, [
    c("munnar", "Munnar", "hill-station", 1, ["Tea gardens", "Eravikulam National Park", "Mattupetty Dam", "Top Station"]),
    c("alleppey", "Alleppey", "lake", 1, ["Houseboat stay", "Vembanad Lake", "Alappuzha Beach"]),
    c("thekkady", "Thekkady", "wildlife", 1, ["Periyar Tiger Reserve", "Spice plantations", "Periyar Lake boating"]),
    c("kochi", "Kochi", "city", 1, ["Fort Kochi", "Chinese Fishing Nets", "Mattancherry Palace", "Jew Town"]),
    c("kovalam", "Kovalam", "beach", 2, ["Lighthouse Beach", "Hawa Beach", "Vizhinjam"]),
    c("varkala", "Varkala", "beach", 2, ["Varkala Cliff", "Papanasam Beach", "Janardhana Swamy Temple"]),
    c("wayanad", "Wayanad", "hill-station", 1, ["Edakkal Caves", "Banasura Sagar Dam", "Chembra Peak", "Pookode Lake"]),
    c("kumarakom", "Kumarakom", "lake", 2, ["Kumarakom Bird Sanctuary", "Vembanad houseboats"]),
    c("thiruvananthapuram", "Thiruvananthapuram", "city", 3, ["Padmanabhaswamy Temple", "Napier Museum", "Poovar"]),
    c("vagamon", "Vagamon", "hill-station", 3, ["Vagamon Meadows", "Pine Forest", "Vagamon paragliding"]),
  ]),

  india("tamil-nadu", "Tamil Nadu", "state", "south-india", 1, [
    c("ooty", "Ooty", "hill-station", 1, ["Government Botanical Garden", "Ooty Lake", "Nilgiri Mountain Railway", "Doddabetta Peak"]),
    c("kodaikanal", "Kodaikanal", "hill-station", 1, ["Kodai Lake", "Coaker's Walk", "Pillar Rocks", "Bryant Park"]),
    c("coonoor", "Coonoor", "hill-station", 3, ["Sim's Park", "Dolphin's Nose", "Lamb's Rock"]),
    c("yercaud", "Yercaud", "hill-station", 3, ["Yercaud Lake", "Lady's Seat", "Killiyur Falls"]),
    c("chennai", "Chennai", "city", 2, ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"]),
    c("mahabalipuram", "Mahabalipuram", "heritage", 2, ["Shore Temple", "Pancha Rathas", "Arjuna's Penance"]),
    c("madurai", "Madurai", "pilgrimage", 1, ["Meenakshi Amman Temple", "Thirumalai Nayakkar Mahal"]),
    c("rameswaram", "Rameswaram", "pilgrimage", 1, ["Ramanathaswamy Temple", "Dhanushkodi", "Pamban Bridge"]),
    c("kanyakumari", "Kanyakumari", "beach", 1, ["Vivekananda Rock Memorial", "Thiruvalluvar Statue", "Kanyakumari sunrise point"]),
    c("thanjavur", "Thanjavur", "heritage", 3, ["Brihadeeswarar Temple", "Thanjavur Palace"]),
  ]),

  india("puducherry", "Puducherry", "union-territory", "south-india", 2, [
    c("pondicherry", "Pondicherry", "beach", 1, ["Promenade Beach", "French Quarter (White Town)", "Auroville", "Paradise Beach"]),
  ]),

  india("karnataka", "Karnataka", "state", "south-india", 1, [
    c("coorg", "Coorg", "hill-station", 1, ["Abbey Falls", "Raja's Seat", "Dubare Elephant Camp", "Talacauvery", "Namdroling Monastery"]),
    c("mysore", "Mysore", "heritage", 1, ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"]),
    c("hampi", "Hampi", "heritage", 1, ["Virupaksha Temple", "Vittala Temple", "Hemakuta Hill", "Matanga Hill"]),
    c("chikmagalur", "Chikmagalur", "hill-station", 2, ["Mullayanagiri", "Baba Budangiri", "Coffee estates", "Hebbe Falls"]),
    c("gokarna", "Gokarna", "beach", 2, ["Om Beach", "Kudle Beach", "Mahabaleshwar Temple Gokarna"]),
    c("bangalore", "Bangalore", "city", 2, ["Lalbagh", "Bangalore Palace", "Nandi Hills"]),
    c("kabini", "Kabini", "wildlife", 3, ["Nagarhole National Park", "Kabini backwaters"]),
    c("udupi", "Udupi", "pilgrimage", 3, ["Sri Krishna Matha", "Malpe Beach", "St. Mary's Island"]),
    c("badami", "Badami", "heritage", 3, ["Badami Cave Temples", "Aihole", "Pattadakal"]),
  ]),

  india("andhra-pradesh", "Andhra Pradesh", "state", "south-india", 2, [
    c("tirupati", "Tirupati", "pilgrimage", 1, ["Tirumala Venkateswara Temple", "Sri Kalahasti Temple", "Talakona Falls"]),
    c("visakhapatnam", "Visakhapatnam", "beach", 2, ["RK Beach", "Kailasagiri", "INS Kursura Submarine Museum"]),
    c("araku-valley", "Araku Valley", "hill-station", 2, ["Borra Caves", "Araku Coffee Museum", "Katiki Falls"]),
    c("srisailam", "Srisailam", "pilgrimage", 3, ["Mallikarjuna Jyotirlinga", "Srisailam Dam"]),
  ]),

  india("telangana", "Telangana", "state", "south-india", 2, [
    c("hyderabad", "Hyderabad", "city", 1, ["Charminar", "Golconda Fort", "Ramoji Film City", "Hussain Sagar"]),
    c("warangal", "Warangal", "heritage", 3, ["Ramappa Temple", "Warangal Fort", "Thousand Pillar Temple"]),
  ]),

  // ================= Indian islands =================
  india("andaman", "Andaman", "union-territory", "indian-islands", 1, [
    c("port-blair", "Port Blair (Sri Vijaya Puram)", "island", 1, ["Cellular Jail", "Ross Island", "Corbyn's Cove", "North Bay Island"]),
    c("havelock-island", "Havelock Island (Swaraj Dweep)", "island", 1, ["Radhanagar Beach", "Elephant Beach", "Kalapathar Beach"]),
    c("neil-island", "Neil Island (Shaheed Dweep)", "island", 2, ["Bharatpur Beach", "Natural Rock Bridge", "Laxmanpur Beach"]),
    c("baratang", "Baratang Island", "island", 3, ["Limestone Caves", "Mud Volcano", "Mangrove creeks"]),
  ], { officialName: "Andaman & Nicobar Islands", premium: true }),

  india("lakshadweep", "Lakshadweep", "union-territory", "indian-islands", 2, [
    c("agatti", "Agatti", "island", 2, ["Agatti Beach", "Agatti lagoon snorkelling"]),
    c("bangaram", "Bangaram", "island", 3, ["Bangaram Lagoon", "Thinnakara Island"]),
    c("kavaratti", "Kavaratti", "island", 3, ["Kavaratti Lagoon", "Marine Aquarium Kavaratti"]),
  ], { premium: true }),

  // ================= East India =================
  india("west-bengal", "West Bengal", "state", "east-india", 1, [
    c("darjeeling", "Darjeeling", "hill-station", 1, ["Tiger Hill", "Batasia Loop", "Darjeeling Himalayan Railway", "Peace Pagoda"]),
    c("kolkata", "Kolkata", "city", 2, ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple", "Park Street"]),
    c("sundarbans", "Sundarbans", "wildlife", 2, ["Sundarban National Park", "Sajnekhali", "Dobanki Canopy Walk"]),
    c("kalimpong", "Kalimpong", "hill-station", 3, ["Deolo Hill", "Durpin Monastery", "Lava", "Lolegaon"]),
    c("dooars", "Dooars", "wildlife", 3, ["Jaldapara National Park", "Gorumara National Park", "Buxa Tiger Reserve"]),
    c("digha", "Digha", "beach", 3, ["Old Digha Beach", "Mandarmani", "Tajpur"]),
    c("mirik", "Mirik", "hill-station", 3, ["Sumendu Lake", "Bokar Monastery"]),
  ]),

  india("odisha", "Odisha", "state", "east-india", 2, [
    c("puri", "Puri", "pilgrimage", 1, ["Jagannath Temple", "Puri Beach", "Raghurajpur"]),
    c("konark", "Konark", "heritage", 2, ["Konark Sun Temple", "Chandrabhaga Beach"]),
    c("bhubaneswar", "Bhubaneswar", "city", 2, ["Lingaraj Temple", "Udayagiri and Khandagiri Caves", "Nandankanan Zoological Park"]),
    c("chilika-lake", "Chilika Lake", "lake", 3, ["Satapada dolphin point", "Kalijai Temple", "Nalabana Bird Sanctuary"]),
    c("daringbadi", "Daringbadi", "hill-station", 3, ["Daringbadi pine forests", "Daringbadi coffee gardens"]),
  ]),

  india("bihar", "Bihar", "state", "east-india", 3, [
    c("bodh-gaya", "Bodh Gaya", "pilgrimage", 2, ["Mahabodhi Temple", "Great Buddha Statue", "Bodhi Tree"]),
    c("rajgir", "Rajgir", "pilgrimage", 3, ["Vishwa Shanti Stupa", "Rajgir Glass Bridge", "Rajgir hot springs"]),
    c("nalanda", "Nalanda", "heritage", 3, ["Nalanda University Ruins", "Xuanzang Memorial"]),
    c("patna", "Patna", "city", 3, ["Takht Sri Patna Sahib", "Golghar", "Bihar Museum"]),
  ]),

  india("jharkhand", "Jharkhand", "state", "east-india", 3, [
    c("ranchi", "Ranchi", "city", 3, ["Hundru Falls", "Dassam Falls", "Patratu Valley"]),
    c("deoghar", "Deoghar", "pilgrimage", 3, ["Baidyanath Jyotirlinga", "Trikut Hills"]),
  ]),

  // ================= North East India =================
  india("sikkim", "Sikkim", "state", "north-east-india", 1, [
    c("gangtok", "Gangtok", "hill-station", 1, ["MG Marg", "Tsomgo Lake", "Nathula Pass", "Rumtek Monastery", "Baba Harbhajan Singh Mandir"]),
    c("lachung", "Lachung", "valley", 1, ["Yumthang Valley", "Zero Point (Yumesamdong)"]),
    c("lachen", "Lachen", "valley", 2, ["Gurudongmar Lake", "Chopta Valley Sikkim"]),
    c("pelling", "Pelling", "hill-station", 2, ["Pemayangtse Monastery", "Pelling Skywalk", "Rabdentse Ruins", "Khecheopalri Lake"]),
    c("ravangla", "Ravangla", "hill-station", 3, ["Buddha Park Ravangla", "Ralang Monastery"]),
    c("namchi", "Namchi", "pilgrimage", 3, ["Char Dham Namchi", "Samdruptse"]),
  ]),

  india("assam", "Assam", "state", "north-east-india", 2, [
    c("guwahati", "Guwahati", "city", 2, ["Kamakhya Temple", "Umananda Island", "Brahmaputra river cruise"]),
    c("kaziranga", "Kaziranga", "wildlife", 1, ["Kaziranga National Park", "Kaziranga jeep safari", "Kaziranga elephant safari"]),
    c("majuli", "Majuli", "island", 3, ["Majuli Satras", "Mask-making villages"]),
  ]),

  india("meghalaya", "Meghalaya", "state", "north-east-india", 1, [
    c("shillong", "Shillong", "hill-station", 1, ["Ward's Lake", "Shillong Peak", "Elephant Falls", "Umiam Lake"]),
    c("cherrapunji", "Cherrapunji (Sohra)", "valley", 1, ["Double Decker Living Root Bridge", "Nohkalikai Falls", "Mawsmai Cave", "Seven Sisters Falls"]),
    c("dawki", "Dawki", "lake", 2, ["Umngot River", "Shnongpdeng"]),
    c("mawlynnong", "Mawlynnong", "valley", 3, ["Riwai Living Root Bridge", "Mawlynnong Sky View"]),
  ]),

  india("arunachal-pradesh", "Arunachal Pradesh", "state", "north-east-india", 2, [
    c("tawang", "Tawang", "hill-station", 1, ["Tawang Monastery", "Sela Pass", "Madhuri Lake", "Jaswant Garh"]),
    c("dirang", "Dirang", "valley", 3, ["Dirang Dzong", "Sangti Valley", "Dirang hot springs"]),
    c("bomdila", "Bomdila", "hill-station", 3, ["Bomdila Monastery", "Eaglenest Wildlife Sanctuary"]),
    c("ziro", "Ziro", "valley", 2, ["Ziro Valley", "Apatani villages", "Talley Valley"]),
  ]),

  india("nagaland", "Nagaland", "state", "north-east-india", 3, [
    c("kohima", "Kohima", "city", 3, ["Hornbill Festival (Kisama)", "Kohima War Cemetery", "Khonoma Village"]),
    c("dzukou-valley", "Dzukou Valley", "adventure", 3, ["Dzukou Valley trek", "Japfu Peak"]),
  ]),

  india("manipur", "Manipur", "state", "north-east-india", 3, [
    c("imphal", "Imphal", "city", 3, ["Kangla Fort", "Ima Keithel", "Shree Govindajee Temple"]),
    c("loktak-lake", "Loktak Lake", "lake", 3, ["Phumdis", "Keibul Lamjao National Park"]),
  ]),

  india("mizoram", "Mizoram", "state", "north-east-india", 3, [
    c("aizawl", "Aizawl", "city", 3, ["Durtlang Hills", "Solomon's Temple", "Reiek"]),
  ]),

  india("tripura", "Tripura", "state", "north-east-india", 3, [
    c("agartala", "Agartala", "city", 3, ["Ujjayanta Palace", "Neermahal", "Tripura Sundari Temple"]),
    c("unakoti", "Unakoti", "heritage", 3, ["Unakoti rock carvings"]),
  ]),

  // ================= International (premium) =================
  abroad("maldives", "Maldives", "indian-ocean", 1, [
    c("male", "Male", "city", 2, ["Male Fish Market", "Artificial Beach", "Old Friday Mosque"]),
    c("maafushi", "Maafushi", "island", 2, ["Bikini Beach Maafushi", "Sandbank picnic", "Snorkelling trips"]),
    c("north-male-atoll", "North Male Atoll", "island", 1, ["Water villa resorts", "Banana Reef", "Manta Point"]),
    c("south-male-atoll", "South Male Atoll", "island", 2, ["Resort islands", "Guraidhoo Kandu"]),
    c("ari-atoll", "Ari Atoll", "island", 2, ["Whale shark spotting", "Fish Head dive site"]),
    c("baa-atoll", "Baa Atoll", "island", 3, ["Hanifaru Bay", "Baa Atoll UNESCO Biosphere"]),
  ]),

  abroad("dubai", "Dubai", "middle-east", 1, [
    c("dubai-city", "Dubai City", "city", 1, ["Burj Khalifa", "Dubai Mall", "Dubai Marina", "Palm Jumeirah", "Desert Safari", "Dubai Frame"]),
    c("abu-dhabi", "Abu Dhabi", "city", 1, ["Sheikh Zayed Grand Mosque", "Ferrari World", "Louvre Abu Dhabi", "BAPS Hindu Mandir"]),
    c("sharjah", "Sharjah", "city", 3, ["Al Noor Island", "Sharjah Aquarium"]),
    c("ras-al-khaimah", "Ras Al Khaimah", "adventure", 3, ["Jebel Jais Zipline", "Al Marjan Island"]),
  ], { officialName: "United Arab Emirates" }),

  abroad("thailand", "Thailand", "asia", 1, [
    c("bangkok", "Bangkok", "city", 1, ["Grand Palace", "Wat Arun", "Safari World", "Chatuchak Market"]),
    c("pattaya", "Pattaya", "beach", 1, ["Coral Island (Koh Larn)", "Walking Street", "Sanctuary of Truth", "Nong Nooch Garden"]),
    c("phuket", "Phuket", "beach", 1, ["Phi Phi Islands", "Patong Beach", "Big Buddha Phuket", "Old Phuket Town"]),
    c("krabi", "Krabi", "beach", 1, ["Railay Beach", "Four Islands Tour", "Ao Nang", "Tiger Cave Temple"]),
    c("koh-samui", "Koh Samui", "island", 2, ["Chaweng Beach", "Ang Thong Marine Park", "Big Buddha Temple"]),
    c("chiang-mai", "Chiang Mai", "city", 3, ["Doi Suthep", "Elephant Nature Park", "Old City temples"]),
  ]),

  abroad("bali", "Bali", "asia", 1, [
    c("ubud", "Ubud", "valley", 1, ["Tegallalang Rice Terraces", "Sacred Monkey Forest", "Ubud Swing", "Tirta Empul"]),
    c("seminyak", "Seminyak", "beach", 2, ["Seminyak Beach", "Petitenget Temple", "Beach clubs"]),
    c("kuta", "Kuta", "beach", 2, ["Kuta Beach", "Waterbom Bali", "Beachwalk Mall"]),
    c("nusa-penida", "Nusa Penida", "island", 1, ["Kelingking Beach", "Broken Beach", "Angel's Billabong", "Crystal Bay"]),
    c("uluwatu", "Uluwatu", "beach", 2, ["Uluwatu Temple", "Kecak Fire Dance", "Padang Padang Beach"]),
  ], { officialName: "Bali, Indonesia" }),

  abroad("singapore", "Singapore", "asia", 1, [], {
    places: ["Sentosa Island", "Universal Studios Singapore", "Marina Bay Sands", "Gardens by the Bay", "Singapore Zoo and Night Safari", "S.E.A. Aquarium"],
  }),

  abroad("malaysia", "Malaysia", "asia", 2, [
    c("kuala-lumpur", "Kuala Lumpur", "city", 1, ["Petronas Twin Towers", "Batu Caves", "KL Tower", "Bukit Bintang"]),
    c("genting-highlands", "Genting Highlands", "hill-station", 2, ["Genting SkyWorlds", "Awana SkyWay"]),
    c("langkawi", "Langkawi", "island", 1, ["Langkawi Sky Bridge", "Cable car", "Mangrove tour", "Pantai Cenang"]),
    c("penang", "Penang", "city", 3, ["George Town street art", "Penang Hill", "Kek Lok Si Temple"]),
  ]),

  abroad("vietnam", "Vietnam", "asia", 1, [
    c("hanoi", "Hanoi", "city", 1, ["Hoan Kiem Lake", "Old Quarter", "Ho Chi Minh Mausoleum", "Train Street"]),
    c("ha-long-bay", "Ha Long Bay", "lake", 1, ["Ha Long Bay cruise", "Sung Sot Cave", "Ti Top Island"]),
    c("da-nang", "Da Nang", "beach", 1, ["Ba Na Hills", "Golden Bridge", "My Khe Beach", "Marble Mountains"]),
    c("hoi-an", "Hoi An", "heritage", 2, ["Hoi An Ancient Town", "Japanese Covered Bridge", "Lantern night market"]),
    c("ho-chi-minh-city", "Ho Chi Minh City", "city", 2, ["Cu Chi Tunnels", "Ben Thanh Market", "Mekong Delta day trip"]),
    c("phu-quoc", "Phu Quoc", "island", 2, ["Hon Thom cable car", "Sao Beach", "VinWonders Phu Quoc"]),
  ]),

  abroad("sri-lanka", "Sri Lanka", "asia", 1, [
    c("colombo", "Colombo", "city", 2, ["Gangaramaya Temple", "Galle Face Green", "Pettah Market"]),
    c("kandy", "Kandy", "pilgrimage", 1, ["Temple of the Tooth", "Kandy Lake", "Peradeniya Botanical Garden"]),
    c("nuwara-eliya", "Nuwara Eliya", "hill-station", 1, ["Tea plantations", "Gregory Lake", "Seetha Amman Temple", "Horton Plains"]),
    c("bentota", "Bentota", "beach", 2, ["Bentota Beach", "Madu River safari", "Turtle hatchery"]),
    c("galle", "Galle", "heritage", 2, ["Galle Fort", "Unawatuna Beach"]),
    c("sigiriya", "Sigiriya", "heritage", 2, ["Sigiriya Rock Fortress", "Dambulla Cave Temple"]),
  ]),

  abroad("bhutan", "Bhutan", "asia", 1, [
    c("thimphu", "Thimphu", "city", 1, ["Buddha Dordenma", "Tashichho Dzong", "Memorial Chorten"]),
    c("paro", "Paro", "valley", 1, ["Tiger's Nest Monastery (Taktsang)", "Rinpung Dzong", "Chele La Pass"]),
    c("punakha", "Punakha", "valley", 1, ["Punakha Dzong", "Dochula Pass", "Punakha Suspension Bridge"]),
  ]),

  abroad("nepal", "Nepal", "asia", 2, [
    c("kathmandu", "Kathmandu", "city", 1, ["Pashupatinath Temple", "Boudhanath Stupa", "Swayambhunath", "Durbar Square"]),
    c("pokhara", "Pokhara", "lake", 1, ["Phewa Lake", "Sarangkot", "Davis Falls", "World Peace Pagoda"]),
    c("chitwan", "Chitwan", "wildlife", 2, ["Chitwan National Park", "Jungle safari"]),
    c("nagarkot", "Nagarkot", "hill-station", 3, ["Nagarkot sunrise view"]),
  ], { premium: false }),

  abroad("mauritius", "Mauritius", "indian-ocean", 1, [
    c("grand-baie", "Grand Baie", "beach", 1, ["Grand Baie Beach", "Catamaran cruise", "Northern islands"]),
    c("ile-aux-cerfs", "Ile aux Cerfs", "island", 1, ["Ile aux Cerfs beach", "Parasailing"]),
    c("chamarel", "Chamarel", "valley", 2, ["Seven Coloured Earth", "Chamarel Waterfall", "Black River Gorges"]),
    c("port-louis", "Port Louis", "city", 3, ["Caudan Waterfront", "Central Market", "Aapravasi Ghat"]),
    c("flic-en-flac", "Flic en Flac", "beach", 3, ["Flic en Flac Beach", "Casela Nature Park"]),
  ]),

  abroad("seychelles", "Seychelles", "indian-ocean", 2, [
    c("mahe", "Mahe", "island", 1, ["Beau Vallon Beach", "Victoria Market", "Morne Seychellois"]),
    c("praslin", "Praslin", "island", 1, ["Anse Lazio", "Vallee de Mai", "Cote d'Or"]),
    c("la-digue", "La Digue", "island", 2, ["Anse Source d'Argent", "Grand Anse La Digue"]),
  ]),

  abroad("turkey", "Turkey", "europe", 2, [
    c("istanbul", "Istanbul", "city", 1, ["Hagia Sophia", "Blue Mosque", "Topkapi Palace", "Bosphorus cruise", "Grand Bazaar"]),
    c("cappadocia", "Cappadocia", "valley", 1, ["Hot air balloon ride", "Goreme Open Air Museum", "Underground cities"]),
    c("antalya", "Antalya", "beach", 2, ["Kaleici Old Town", "Duden Waterfalls", "Konyaalti Beach"]),
    c("pamukkale", "Pamukkale", "heritage", 3, ["Travertine terraces", "Hierapolis"]),
  ], { officialName: "Turkiye" }),

  abroad("switzerland", "Switzerland", "europe", 1, [
    c("zurich", "Zurich", "city", 2, ["Lake Zurich", "Old Town Zurich", "Rhine Falls"]),
    c("lucerne", "Lucerne", "lake", 1, ["Chapel Bridge", "Mount Titlis", "Mount Pilatus", "Lake Lucerne cruise"]),
    c("interlaken", "Interlaken", "adventure", 1, ["Jungfraujoch", "Grindelwald First", "Harder Kulm", "Lauterbrunnen"]),
    c("zermatt", "Zermatt", "hill-station", 2, ["Matterhorn Glacier Paradise", "Gornergrat Railway"]),
    c("geneva", "Geneva", "city", 3, ["Jet d'Eau", "Lake Geneva", "Palais des Nations"]),
  ]),

  abroad("france", "France", "europe", 2, [
    c("paris", "Paris", "city", 1, ["Eiffel Tower", "Louvre Museum", "Seine River cruise", "Disneyland Paris", "Montmartre"]),
    c("nice", "Nice", "beach", 3, ["Promenade des Anglais", "Old Town Nice", "Monaco day trip"]),
  ]),

  abroad("italy", "Italy", "europe", 2, [
    c("rome", "Rome", "city", 1, ["Colosseum", "Vatican Museums", "Trevi Fountain", "Pantheon"]),
    c("venice", "Venice", "city", 1, ["Gondola ride", "St. Mark's Square", "Rialto Bridge", "Murano and Burano"]),
    c("florence", "Florence", "heritage", 2, ["Florence Cathedral", "Uffizi Gallery", "Ponte Vecchio", "Leaning Tower of Pisa day trip"]),
  ]),

  abroad("united-kingdom", "United Kingdom", "europe", 2, [
    c("london", "London", "city", 1, ["London Eye", "Tower of London", "Buckingham Palace", "British Museum"]),
    c("edinburgh", "Edinburgh", "heritage", 3, ["Edinburgh Castle", "Royal Mile", "Arthur's Seat"]),
    c("scottish-highlands", "Scottish Highlands", "valley", 3, ["Loch Ness", "Isle of Skye", "Glenfinnan Viaduct"]),
  ]),

  abroad("azerbaijan", "Azerbaijan", "asia", 2, [
    c("baku", "Baku", "city", 1, ["Old City (Icherisheher)", "Flame Towers", "Heydar Aliyev Center", "Baku Boulevard"]),
    c("gabala", "Gabala", "hill-station", 2, ["Tufandag Mountain Resort", "Nohur Lake"]),
    c("shahdag", "Shahdag", "adventure", 3, ["Shahdag Mountain Resort"]),
  ]),

  abroad("japan", "Japan", "asia", 2, [
    c("tokyo", "Tokyo", "city", 1, ["Shibuya Crossing", "Senso-ji Temple", "Tokyo Skytree", "teamLab Planets"]),
    c("kyoto", "Kyoto", "heritage", 1, ["Fushimi Inari Shrine", "Kinkaku-ji", "Arashiyama Bamboo Grove"]),
    c("osaka", "Osaka", "city", 2, ["Osaka Castle", "Dotonbori", "Universal Studios Japan"]),
    c("mount-fuji", "Mount Fuji", "adventure", 2, ["Lake Kawaguchiko", "Chureito Pagoda", "Hakone"]),
  ]),

  abroad("australia", "Australia", "oceania", 2, [
    c("sydney", "Sydney", "city", 1, ["Sydney Opera House", "Harbour Bridge", "Bondi Beach", "Blue Mountains"]),
    c("melbourne", "Melbourne", "city", 1, ["Great Ocean Road", "Phillip Island Penguin Parade", "Federation Square"]),
    c("gold-coast", "Gold Coast", "beach", 1, ["Surfers Paradise", "Movie World", "Sea World", "SkyPoint"]),
    c("cairns", "Cairns", "adventure", 2, ["Great Barrier Reef", "Kuranda Scenic Railway", "Daintree Rainforest"]),
  ]),

  abroad("new-zealand", "New Zealand", "oceania", 2, [
    c("auckland", "Auckland", "city", 2, ["Sky Tower", "Waiheke Island", "Hobbiton day trip"]),
    c("queenstown", "Queenstown", "adventure", 1, ["Milford Sound", "Skyline Gondola", "Bungy jumping", "Lake Wakatipu"]),
    c("rotorua", "Rotorua", "valley", 2, ["Te Puia geysers", "Waitomo Glowworm Caves", "Maori cultural show"]),
  ]),
];

export const CIRCUITS: CircuitDef[] = [
  { slug: "golden-triangle", name: "Golden Triangle", scope: "india", tier: 1, covers: ["delhi", "agra", "jaipur"] },
  { slug: "leh-ladakh", name: "Leh Ladakh", scope: "india", tier: 1, premium: true, covers: ["leh", "nubra-valley", "pangong-lake"] },
  { slug: "kashmir-ladakh", name: "Kashmir & Ladakh", scope: "india", tier: 2, premium: true, covers: ["srinagar", "sonamarg", "kargil", "leh"] },
  { slug: "char-dham", name: "Char Dham Yatra", scope: "india", tier: 1, covers: ["yamunotri", "gangotri", "kedarnath", "badrinath"] },
  { slug: "do-dham", name: "Do Dham Yatra", scope: "india", tier: 2, covers: ["kedarnath", "badrinath"] },
  { slug: "shimla-manali", name: "Shimla Manali", scope: "india", tier: 1, covers: ["shimla", "manali", "kullu"] },
  { slug: "spiti-circuit", name: "Spiti Circuit", scope: "india", tier: 2, covers: ["shimla", "kinnaur", "spiti-valley", "manali"] },
  { slug: "gangtok-darjeeling", name: "Gangtok Darjeeling", scope: "india", tier: 1, covers: ["gangtok", "darjeeling", "pelling"] },
  { slug: "north-east", name: "North East India", scope: "india", tier: 1, covers: ["sikkim", "meghalaya", "assam", "arunachal-pradesh"] },
  { slug: "shillong-cherrapunji", name: "Shillong Cherrapunji", scope: "india", tier: 2, covers: ["shillong", "cherrapunji", "dawki"] },
  { slug: "ooty-kodaikanal", name: "Ooty Kodaikanal", scope: "india", tier: 2, covers: ["ooty", "kodaikanal", "coonoor"] },
  { slug: "munnar-thekkady-alleppey", name: "Munnar Thekkady Alleppey", scope: "india", tier: 2, covers: ["munnar", "thekkady", "alleppey"] },
  { slug: "kashi-ayodhya-prayagraj", name: "Kashi Ayodhya Prayagraj", scope: "india", tier: 2, covers: ["varanasi", "ayodhya", "prayagraj"] },
  { slug: "jyotirlinga", name: "12 Jyotirlinga Yatra", scope: "india", tier: 2, covers: ["somnath", "srisailam", "ujjain", "omkareshwar", "kedarnath", "varanasi", "nashik", "deoghar", "dwarka", "rameswaram", "ajanta-ellora"] },
  { slug: "south-india", name: "South India", scope: "india", tier: 2, covers: ["kerala", "tamil-nadu", "karnataka"] },
  { slug: "europe", name: "Europe", scope: "international", tier: 1, premium: true, covers: ["paris", "switzerland", "italy"] },
  { slug: "thailand-bali", name: "Thailand & Bali", scope: "international", tier: 3, premium: true, covers: ["thailand", "bali"] },
  { slug: "singapore-malaysia", name: "Singapore & Malaysia", scope: "international", tier: 2, premium: true, covers: ["singapore", "malaysia"] },
];

// Departure cities for /tour-packages/from-{origin}-to-{destination}.
export const ORIGIN_CITIES = [
  { slug: "delhi", name: "Delhi" },
  { slug: "mumbai", name: "Mumbai" },
  { slug: "bangalore", name: "Bangalore" },
  { slug: "chennai", name: "Chennai" },
  { slug: "kolkata", name: "Kolkata" },
  { slug: "hyderabad", name: "Hyderabad" },
  { slug: "pune", name: "Pune" },
  { slug: "ahmedabad", name: "Ahmedabad" },
  { slug: "jaipur", name: "Jaipur" },
  { slug: "lucknow", name: "Lucknow" },
  { slug: "chandigarh", name: "Chandigarh" },
  { slug: "kochi", name: "Kochi" },
] as const;

// Theme pages: /{prefix}/{destination-or-city}. Prefixes follow TravelTriangle's
// URL shape so the pages line up with how people search ("kashmir honeymoon packages").
export const THEMES = [
  { prefix: "honeymoon-packages", name: "Honeymoon", tag: "Honeymoon" },
  { prefix: "family-packages", name: "Family", tag: "Family" },
  { prefix: "friends-packages", name: "Friends", tag: "Friends" },
  { prefix: "budget-tour-packages", name: "Budget", tag: "Budget" },
  { prefix: "luxury-tour-packages", name: "Luxury", tag: "Luxury" },
  { prefix: "group-tour-packages", name: "Group", tag: "Group" },
  { prefix: "adventure-tour-packages", name: "Adventure", tag: "Adventure" },
  { prefix: "pilgrimage-tour-packages", name: "Pilgrimage", tag: "Pilgrimage" },
  { prefix: "wildlife-tour-packages", name: "Wildlife", tag: "Wildlife" },
  { prefix: "beach-tour-packages", name: "Beach", tag: "Beach" },
  { prefix: "trekking-tour-packages", name: "Trekking", tag: "Trekking" },
  { prefix: "solo-tour-packages", name: "Solo", tag: "Solo" },
] as const;

// Sub-pages of a /{slug}-tourism guide (destination level and city level).
export const GUIDE_SECTIONS = [
  { slug: "places-to-visit", name: "Places to Visit" },
  { slug: "things-to-do", name: "Things to Do" },
  { slug: "best-time-to-visit", name: "Best Time to Visit" },
  { slug: "how-to-reach", name: "How to Reach" },
  { slug: "travel-guide-tips", name: "Travel Tips" },
] as const;

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/&/g, " and ")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
