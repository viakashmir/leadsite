// 100 original Kashmir tour packages: 20 real routes x 5 travel styles.
// Itineraries are our own, written from the actual road network (Srinagar
// base, Gulmarg, Pahalgam, Sonamarg, Doodhpathri, Yusmarg, Gurez, Jammu,
// Katra, Patnitop). Drive times are approximate and change with season and
// traffic. No prices here: prices come from prisma/kashmir-package-prices.csv
// (competitor reference, ours set a % below) via prisma/seed-kashmir-packages.ts.
// No em dashes.

export type PackageSeed = {
  slug: string;
  title: string;
  summary: string;
  itinerary: string; // "Day N: ..." lines
  durationDays: number;
  durationNights: number;
  theme: string; // comma-separated tags
  destination: string; // destination slug
  city: string; // main city slug
};

// ---------------------------------------------------------------- day plans

export const D = {
  arriveSrinagar:
    "Arrive in Srinagar. Our driver meets you at the airport and takes you to your hotel or houseboat. In the evening, take a shikara ride on Dal Lake past the floating gardens and lake-side markets.",
  arriveHouseboat:
    "Arrive in Srinagar and check in to your houseboat on Dal or Nigeen Lake. Spend the afternoon settling in, then take a sunset shikara ride and have dinner on board.",
  srinagarSights:
    "Srinagar sightseeing: the Mughal gardens of Nishat Bagh, Shalimar Bagh and Chashme Shahi, Pari Mahal above the lake, and the Hazratbal Shrine on the north shore. End the day on the Boulevard by Dal Lake.",
  srinagarOldCity:
    "Explore old Srinagar: Jamia Masjid, the Khanqah of Shah Hamadan by the Jhelum, and the lanes of Zaina Kadal for copper, papier-mache and pashmina. Climb to Shankaracharya Temple for the view over the city in the afternoon.",
  houseboatNight:
    "Move to a houseboat on Dal or Nigeen Lake for the night. Take an early shikara ride to the floating vegetable market at dawn the next morning if you are up for it.",
  gulmargDay:
    "Day trip to Gulmarg (about 50 km, 1.5 to 2 hours). Ride the Gulmarg Gondola to Kongdoori, and on to Apharwat when the second phase is open. Walk the meadow, see St. Mary's Church and return to Srinagar in the evening.",
  gulmargTransfer:
    "Drive to Gulmarg (about 50 km) through Tangmarg and check in. Ride the Gulmarg Gondola to Kongdoori and Apharwat, weather permitting. Evening free on the meadow.",
  gulmargSnow:
    "Drive to Gulmarg for snow. Ride the gondola, try skiing or snowboarding with a certified instructor at the Kongdoori slopes, or go sledging on the meadow. Chains or a 4x4 may be needed beyond Tangmarg after fresh snow.",
  gulmargStay:
    "A slow day in Gulmarg: walk or ride a pony to Khilanmarg, visit the Maharani Temple and St. Mary's Church, and catch the light over the Pir Panjal range in the evening.",
  pahalgamTransfer:
    "Drive to Pahalgam (about 95 km, 2.5 to 3 hours) via the saffron fields of Pampore and the Avantipora temple ruins. Check in by the Lidder River and spend the evening by the water.",
  pahalgamValleys:
    "Pahalgam sightseeing by local union taxi: Aru Valley, Betaab Valley and Chandanwari (snow points usually into early summer). Pony rides to Baisaran meadow are optional.",
  pahalgamSlow:
    "A free day in Pahalgam: a riverside walk along the Lidder, trout fishing in season with a permit, or a half-day pony ride. Ideal for families with young children or older parents.",
  pahalgamToSrinagar:
    "Drive back from Pahalgam to Srinagar (about 3 hours). Stop at a saffron farm in Pampore and a cricket bat workshop near Sangam. Evening free for shopping at Polo View or Lal Chowk.",
  sonamargDay:
    "Day trip to Sonamarg (about 80 km, 2.5 to 3 hours) along the Sindh river. Take a pony or walk to Thajiwas Glacier, and go to Zero Point beyond Zojila when the road is open. Return to Srinagar by evening.",
  sonamargStay:
    "Drive to Sonamarg and check in. Walk to Thajiwas Glacier in the afternoon. In season, river rafting on the Sindh is available near the town.",
  sonamargExplore:
    "A full day around Sonamarg: drive over Zojila to Zero Point when the pass is open (usually June to October), or walk up the Sindh valley towards the Nichnai trail head. Return to your Sonamarg hotel for the night.",
  doodhpathriDay:
    "Day trip to Doodhpathri (about 42 km, 1.5 hours) through Budgam. Walk the open meadows and the Shaliganga river, a quieter alternative to the busier resorts. The road usually opens from April to November.",
  yusmargDay:
    "Day trip to Yusmarg (about 47 km) for its pine-ringed meadow and a walk or pony ride to Nilnag Lake. Visit the shrine town of Charar-e-Sharief on the way back.",
  gurezTransfer:
    "Drive from Srinagar to Gurez Valley (about 125 km, 5 to 6 hours) over Razdan Pass, with the Wular Lake view near Bandipora. Gurez is a border area: carry original ID, and the road opens roughly from May to November. Overnight in Dawar.",
  gurezValley:
    "Explore Gurez: the Kishanganga river, Habba Khatoon peak and spring, the wooden log houses of Dawar and a walk to Tulail if roads allow. Mobile networks are limited here.",
  gurezToSrinagar:
    "Drive back from Gurez to Srinagar over Razdan Pass. Evening free in Srinagar.",
  arriveJammu:
    "Arrive in Jammu by train or flight and transfer to Katra (about 50 km, 1.5 hours). Register for the Vaishno Devi yatra and rest at the hotel.",
  vaishnoDevi:
    "Vaishno Devi darshan: trek about 12 to 13 km from Katra to the Bhawan, or take a pony, palki or the helicopter to Sanjichhat. Visit Bhairon Temple by the ropeway, then return to Katra.",
  katraToPatnitop:
    "Drive from Katra to Patnitop (about 85 km). Walk the pine forest at Nathatop and visit Sanasar's meadow for paragliding in season.",
  patnitopToPahalgam:
    "Drive from Patnitop to Pahalgam through the Banihal tunnel and the Kashmir valley (6 to 7 hours). Check in by the Lidder River.",
  katraToSrinagar:
    "Drive from Katra to Srinagar on NH44 (7 to 8 hours) through the Chenani-Nashri tunnel and the Banihal tunnel, or take the Vande Bharat train from Katra. Evening shikara ride on Dal Lake.",
  tulipGarden:
    "Spring in Srinagar: visit the Indira Gandhi Memorial Tulip Garden below the Zabarwan hills, open for a few weeks from about late March to April, then Botanical Garden and Nishat Bagh nearby.",
  arrivePahalgam:
    "Land in Srinagar and drive straight to Pahalgam (about 95 km, 2.5 to 3 hours) past the saffron fields of Pampore. Check in by the Lidder River and let the mountain air do the unpacking.",
  gulmargToPahalgam:
    "Drive from Gulmarg to Pahalgam (about 140 km, 4 to 5 hours) via Srinagar's bypass and the Pampore saffron belt. Evening by the Lidder River.",
  pahalgamToGulmarg:
    "Drive from Pahalgam to Gulmarg (about 140 km, 4 to 5 hours) via Srinagar. Check in and catch the evening light on the meadow.",
  gulmargToSrinagar:
    "Morning gondola ride if you missed it, then drive back down to Srinagar (about 1.5 to 2 hours). Evening free on the Boulevard by Dal Lake.",
  srinagarToSonamarg:
    "Drive to Sonamarg (about 80 km, 2.5 to 3 hours) along the Sindh river and check in. Walk or ride a pony to Thajiwas Glacier in the afternoon.",
  sonamargToPahalgam:
    "Drive from Sonamarg to Pahalgam via Srinagar (about 175 km, 5 to 6 hours), with a lunch stop in Srinagar. Evening by the Lidder River.",
  sonamargToSrinagar:
    "Drive back from Sonamarg to Srinagar along the Sindh river (2.5 to 3 hours). Evening free for shopping at Lal Chowk or Polo View.",
  departPahalgam:
    "Check out and drive from Pahalgam to Srinagar airport (about 3 hours) for your flight home. Leave early: the saffron shops in Pampore are very persuasive.",
  departGulmarg:
    "Check out and drive from Gulmarg to Srinagar airport (about 2 hours) for your onward flight.",
  departSonamarg:
    "Check out and drive from Sonamarg to Srinagar airport (about 3 hours) for your onward flight.",
  katraToPahalgam:
    "Drive from Katra to Pahalgam (about 260 km, 7 to 8 hours) on NH44 through the Chenani-Nashri and Banihal tunnels, turning off at Anantnag for the Lidder valley. A long day, with chai stops built in.",
  departSrinagar:
    "Check out and transfer to Srinagar airport for your onward flight, with time for a last stop at a dry-fruit or saffron shop on the way.",
  departJammu:
    "Drive from Srinagar to Jammu (about 250 km) or take the Vande Bharat train to Katra, for your onward train or flight.",
} as const;

export type DayKey = keyof typeof D;

// ---------------------------------------------------------------- routes

type Route = {
  key: string;
  name: string; // "Srinagar, Gulmarg & Pahalgam"
  days: DayKey[];
  city: string;
  angle: string; // what makes this route worth picking
  tags: string[];
};

const ROUTES: Route[] = [
  { key: "srinagar-escape", name: "Srinagar Lake Escape", days: ["arriveHouseboat", "srinagarSights", "departSrinagar"], city: "srinagar", angle: "a short break built around Dal Lake, the houseboats and the Mughal gardens", tags: ["Weekend"] },
  { key: "srinagar-gulmarg-sonamarg", name: "Srinagar with Gulmarg and Sonamarg", days: ["arriveSrinagar", "gulmargDay", "sonamargDay", "departSrinagar"], city: "srinagar", angle: "one hotel in Srinagar and day trips to Gulmarg and Sonamarg, so you never repack", tags: ["Short Break"] },
  { key: "srinagar-gulmarg", name: "Srinagar and Gulmarg", days: ["arriveSrinagar", "srinagarSights", "gulmargTransfer", "departSrinagar"], city: "gulmarg", angle: "Srinagar's lakes and a night up in Gulmarg for the gondola and the meadow", tags: ["Short Break"] },
  { key: "srinagar-sonamarg", name: "Srinagar and Sonamarg", days: ["arriveSrinagar", "srinagarSights", "sonamargStay", "sonamargExplore", "departSrinagar"], city: "sonamarg", angle: "two nights by the Sindh river under the Thajiwas glacier", tags: ["Nature"] },
  { key: "srinagar-gulmarg-pahalgam-4n", name: "Srinagar, Gulmarg and Pahalgam", days: ["arriveSrinagar", "gulmargTransfer", "pahalgamTransfer", "pahalgamToSrinagar", "departSrinagar"], city: "pahalgam", angle: "Kashmir's three classic stops in a tight four nights", tags: ["Classic"] },
  { key: "houseboat-pahalgam", name: "Houseboat and Pahalgam", days: ["arriveHouseboat", "srinagarSights", "pahalgamTransfer", "pahalgamValleys", "departSrinagar"], city: "pahalgam", angle: "a houseboat night on the lake and two nights in the Lidder valley", tags: ["Houseboat"] },
  { key: "classic-kashmir-5n", name: "Classic Kashmir", days: ["arriveSrinagar", "gulmargDay", "pahalgamTransfer", "pahalgamValleys", "pahalgamToSrinagar", "departSrinagar"], city: "srinagar", angle: "Srinagar, Gulmarg and Pahalgam at a comfortable pace", tags: ["Classic", "Bestseller"] },
  { key: "kashmir-houseboat-5n", name: "Kashmir with a Houseboat Stay", days: ["arriveHouseboat", "srinagarSights", "gulmargTransfer", "pahalgamTransfer", "pahalgamValleys", "departSrinagar"], city: "srinagar", angle: "one night on a houseboat, one in Gulmarg and two in Pahalgam", tags: ["Houseboat", "Classic"] },
  { key: "kashmir-valleys-6n", name: "Kashmir Valleys", days: ["arriveSrinagar", "srinagarSights", "gulmargDay", "sonamargDay", "pahalgamTransfer", "pahalgamValleys", "departSrinagar"], city: "pahalgam", angle: "all four big names: Srinagar, Gulmarg, Sonamarg and Pahalgam", tags: ["Classic"] },
  { key: "kashmir-offbeat-6n", name: "Offbeat Kashmir: Doodhpathri and Yusmarg", days: ["arriveSrinagar", "srinagarOldCity", "doodhpathriDay", "yusmargDay", "pahalgamTransfer", "pahalgamToSrinagar", "departSrinagar"], city: "doodhpathri", angle: "quieter meadows at Doodhpathri and Yusmarg alongside the classics", tags: ["Offbeat"] },
  { key: "kashmir-vaishno-devi-6n", name: "Vaishno Devi and Kashmir", days: ["arriveJammu", "vaishnoDevi", "katraToSrinagar", "gulmargDay", "pahalgamTransfer", "pahalgamToSrinagar", "departSrinagar"], city: "katra", angle: "Mata Vaishno Devi darshan followed by the Kashmir valley", tags: ["Pilgrimage"] },
  { key: "kashmir-grand-7n", name: "Grand Kashmir", days: ["arriveHouseboat", "srinagarSights", "gulmargTransfer", "gulmargStay", "pahalgamTransfer", "pahalgamValleys", "pahalgamToSrinagar", "departSrinagar"], city: "srinagar", angle: "two nights each in Gulmarg and Pahalgam instead of rushed day trips", tags: ["Classic", "Slow Travel"] },
  { key: "jammu-patnitop-kashmir-7n", name: "Jammu, Patnitop and Kashmir by Road", days: ["arriveJammu", "vaishnoDevi", "katraToPatnitop", "patnitopToPahalgam", "pahalgamValleys", "pahalgamToSrinagar", "srinagarSights", "departSrinagar"], city: "patnitop", angle: "the full road journey from Jammu, with Vaishno Devi and Patnitop on the way", tags: ["Road Trip", "Pilgrimage"] },
  { key: "gurez-5n", name: "Gurez Valley and Srinagar", days: ["arriveSrinagar", "srinagarSights", "gurezTransfer", "gurezValley", "gurezToSrinagar", "departSrinagar"], city: "gurez", angle: "the remote Kishanganga valley on the Line of Control, open in summer", tags: ["Offbeat", "Adventure"] },
  { key: "gurez-kashmir-8n", name: "Kashmir and Gurez Explorer", days: ["arriveSrinagar", "srinagarSights", "gurezTransfer", "gurezValley", "gurezToSrinagar", "gulmargDay", "pahalgamTransfer", "pahalgamValleys", "departSrinagar"], city: "gurez", angle: "Gurez Valley added to Gulmarg and Pahalgam for travellers who want both", tags: ["Offbeat", "Adventure"] },
  { key: "winter-snow-4n", name: "Kashmir Winter Snow", days: ["arriveSrinagar", "gulmargSnow", "gulmargStay", "srinagarSights", "departSrinagar"], city: "gulmarg", angle: "two snowy nights in Gulmarg from about December to March", tags: ["Winter", "Snow"] },
  { key: "tulip-spring-5n", name: "Kashmir Tulip Spring", days: ["arriveSrinagar", "tulipGarden", "srinagarSights", "pahalgamTransfer", "pahalgamValleys", "departSrinagar"], city: "srinagar", angle: "timed for the tulip garden and Kashmir's almond-blossom spring", tags: ["Spring", "Tulip Festival"] },
  { key: "kashmir-sonamarg-pahalgam-6n", name: "Sonamarg, Gulmarg and Pahalgam Stays", days: ["arriveSrinagar", "sonamargStay", "gulmargTransfer", "pahalgamTransfer", "pahalgamValleys", "pahalgamToSrinagar", "departSrinagar"], city: "sonamarg", angle: "a night in each mountain resort rather than day trips from Srinagar", tags: ["Classic"] },
  { key: "kashmir-complete-8n", name: "Complete Kashmir", days: ["arriveJammu", "vaishnoDevi", "katraToSrinagar", "srinagarSights", "gulmargTransfer", "sonamargStay", "pahalgamTransfer", "pahalgamValleys", "departSrinagar"], city: "srinagar", angle: "Vaishno Devi, Srinagar, Gulmarg, Sonamarg and Pahalgam in one trip", tags: ["Classic", "Pilgrimage"] },
  { key: "kashmir-slow-9n", name: "Kashmir at a Slow Pace", days: ["arriveHouseboat", "srinagarSights", "srinagarOldCity", "doodhpathriDay", "gulmargTransfer", "gulmargStay", "pahalgamTransfer", "pahalgamValleys", "pahalgamSlow", "departSrinagar"], city: "srinagar", angle: "ten unhurried days for families, older parents and long honeymoons", tags: ["Slow Travel", "Offbeat"] },
];

// ---------------------------------------------------------------- styles

type Style = {
  key: string;
  label: string; // title prefix
  tags: string[];
  pitch: (r: Route) => string;
  touch: string; // added to the first full day
};

const STYLES: Style[] = [
  {
    key: "honeymoon",
    label: "Kashmir Honeymoon",
    tags: ["Honeymoon", "Couple"],
    pitch: (r) => `A honeymoon plan with ${r.angle}. Couple-friendly hotels, a private cab throughout and time built in for slow mornings.`,
    touch: "For couples: a candle-light dinner and a flower-decorated room on one night are included.",
  },
  {
    key: "family",
    label: "Kashmir Family Tour",
    tags: ["Family"],
    pitch: (r) => `A family trip with ${r.angle}. Family rooms, shorter driving days and sightseeing paced for children and grandparents.`,
    touch: "For families: rooms with an extra bed for children and flexible start times each day.",
  },
  {
    key: "budget",
    label: "Kashmir Budget Trip",
    tags: ["Budget"],
    pitch: (r) => `A value trip with ${r.angle}. Clean 3-star hotels with breakfast and dinner, and a shared or private cab depending on group size.`,
    touch: "Budget stays are well-rated 3-star hotels close to the sights, so you spend less time on the road.",
  },
  {
    key: "premium",
    label: "Kashmir Premium Holiday",
    tags: ["Luxury"],
    pitch: (r) => `A premium holiday with ${r.angle}. 4 and 5-star hotels, deluxe houseboats where the route includes one, and a private SUV with an experienced driver.`,
    touch: "Premium stays: lake-view rooms in Srinagar and the best-rated properties in each resort.",
  },
  {
    key: "friends",
    label: "Kashmir Trip with Friends",
    tags: ["Friends", "Adventure"],
    pitch: (r) => `A group trip with ${r.angle}. Room sharing for groups, a tempo traveller for 6 or more, and time for adventure activities.`,
    touch: "For groups: ATV rides in Gulmarg, river rafting on the Lidder or Sindh in season and a bonfire evening can be added.",
  },
];

// ---------------------------------------------------------------- build

const titleCity = (r: Route) => r.name;

function build(r: Route, s: Style): PackageSeed {
  const nights = r.days.length - 1;
  const days = r.days.length;
  const lines = r.days.map((k, i) => {
    let text: string = D[k];
    if (i === 1) text = `${text} ${s.touch}`;
    return `Day ${i + 1}: ${text}`;
  });
  return {
    slug: `kashmir-${s.key}-${r.key}`,
    title: `${s.label}: ${titleCity(r)} ${nights}N/${days}D`,
    summary: s.pitch(r),
    itinerary: lines.join("\n"),
    durationDays: days,
    durationNights: nights,
    theme: [...s.tags, ...r.tags].join(","),
    destination: "kashmir",
    city: r.city,
  };
}

export const KASHMIR_PACKAGES: PackageSeed[] = ROUTES.flatMap((r) => STYLES.map((s) => build(r, s)));
