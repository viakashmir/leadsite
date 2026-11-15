// Builds the long-form part of a Kashmir package page from the package's own
// data (itinerary lines, nights, theme tags, price). Every sentence is either
// a fact about a place on this route or follows from the package itself, so
// two packages on different routes read differently, and nothing is promised
// that the itinerary does not include. No typed fares, no em dashes.

import { D, type DayKey } from "@/data/packages/kashmir";
import { CATALOG_DAYS, DAY_DETAIL, DAY_KEYWORDS, type DayDetail, type Place } from "@/data/packages/day-detail";

type Pkg = {
  slug: string;
  title: string;
  itinerary: string;
  durationNights: number;
  durationDays: number;
  theme: string;
  destination: { slug: string; name: string };
};

export type DepthDay = { label: string; text: string; detail?: DayDetail; sleep?: Place };
export type DepthSection = { h: string; p?: string[]; list?: string[] };
export type PackageDepth = {
  days: DepthDay[];
  facts: { label: string; value?: string }[];
  sections: DepthSection[];
  faqs: { q: string; a: string }[];
};

const PLACE_NAME: Record<Place, string> = {
  srinagar: "Srinagar",
  houseboat: "a houseboat",
  gulmarg: "Gulmarg",
  pahalgam: "Pahalgam",
  sonamarg: "Sonamarg",
  gurez: "Gurez",
  katra: "Katra",
  patnitop: "Patnitop",
  home: "home",
};

const KEYS = Object.keys(D) as DayKey[];

export function dayKeyFor(text: string): DayKey | undefined {
  const exact = KEYS.find((k) => text.startsWith(D[k]));
  if (exact) return exact;
  return DAY_KEYWORDS.find(([re]) => re.test(text))?.[1];
}

// The line itself wins over the day plan's default when it says where the
// night is spent ("Overnight in Pahalgam", "back to Srinagar").
function sleepFor(text: string, detail: DayDetail | undefined, last: boolean): Place | undefined {
  if (last) return "home";
  const m = /overnight (?:in|at) (?:a |the )?(srinagar|gulmarg|pahalgam|sonamarg|gurez|dawar|katra|patnitop|houseboat)/i.exec(text);
  if (m) return (m[1].toLowerCase() === "dawar" ? "gurez" : m[1].toLowerCase()) as Place;
  if (/houseboat/i.test(text) && /(night|check in|move to|stay)/i.test(text)) return "houseboat";
  if (/(back|return|drive down|down) to srinagar|back in srinagar/i.test(text)) return "srinagar";
  return detail?.sleep;
}

type Tier = "Budget" | "3-Star" | "4-Star" | "5-Star";
function tierOf(tags: string[], title: string): Tier {
  if (/5-star/i.test(title) || tags.includes("Luxury")) return "5-Star";
  if (/4-star/i.test(title) || tags.includes("Premium")) return "4-Star";
  if (/3-star/i.test(title) || tags.includes("Mid-Range")) return "3-Star";
  if (tags.includes("Budget")) return "Budget";
  return "3-Star";
}

type Style = "honeymoon" | "family" | "friends" | "pilgrim" | "classic";
function styleOf(tags: string[]): Style {
  if (tags.includes("Honeymoon") || tags.includes("Couple")) return "honeymoon";
  if (tags.includes("Family")) return "family";
  if (tags.includes("Friends") || tags.includes("Group")) return "friends";
  if (tags.includes("Pilgrimage")) return "pilgrim";
  return "classic";
}

const TIER_STAY: Record<Tier, string> = {
  Budget: "simple, clean budget hotels or family-run guesthouses with private bathrooms and hot water",
  "3-Star": "standard 3-star hotels with heating, private bathrooms and a restaurant on site",
  "4-Star": "4-star hotels with larger rooms, central heating and better views",
  "5-Star": "5-star hotels and the best-rated resort in each stop",
};

// What a night in each place is like, written for the hotel category.
function stayText(place: Place, nights: number, tier: Tier): string {
  const n = `${nights} night${nights > 1 ? "s" : ""}`;
  switch (place) {
    case "srinagar":
      return `Srinagar (${n}): hotels on or near the Boulevard and in Rajbagh or Sonwar keep you close to Dal Lake, the ghats and the markets. ${
        tier === "5-Star" || tier === "4-Star"
          ? "At this category, ask for a lake-view room; the best properties sit on the slopes of the Zabarwan hills above the lake."
          : "At this category, hotels are usually a short walk or drive from the lake, which keeps the price down without adding travel time."
      }`;
    case "houseboat":
      return `Houseboat (${n}): a carved wooden houseboat moored on Dal or Nigeen Lake, reached by shikara. ${
        tier === "Budget"
          ? "Budget packages use smaller, simpler boats; they are cosy and authentic but have fewer bedrooms and simpler bathrooms."
          : "Deluxe boats have attached bathrooms, heating and a dining room where the family that runs the boat serves dinner."
      } Nigeen is quieter; Dal is closer to the Boulevard.`;
    case "gulmarg":
      return `Gulmarg (${n}): hotels range from lodges near the market to resorts near the gondola. Rooms are limited and fill early in the snow season and in June, so this is the night agents confirm first. Nights are cold all year; heating matters more here than anywhere else on the route.`;
    case "pahalgam":
      return `Pahalgam (${n}): hotels line the Lidder river and the road towards Aru. A river-facing room is worth asking for; the sound of the water is half the reason to stay. ${
        tier === "Budget" ? "Budget stays are usually in or just outside the main town." : "Better hotels are spread along the river outside the busy market."
      }`;
    case "sonamarg":
      return `Sonamarg (${n}): mostly mid-range hotels and some riverside camps along the main road, with the meadow and Thajiwas Glacier a short walk away. Choice is smaller than in Srinagar, and some hotels close in deep winter.`;
    case "gurez":
      return `Gurez (${n}): guesthouses, homestays and a few camps in and around Dawar. Expect simple rooms, home-cooked meals and limited electricity and mobile coverage, whatever the package category elsewhere on the trip.`;
    case "katra":
      return `Katra (${n}): hotels near the bus stand and the Banganga start point make the early start for the yatra easier. Many have lockers for luggage you do not need on the climb.`;
    case "patnitop":
      return `Patnitop (${n}): forest lodges and hotels around the plateau, cool in summer and often snowed in from December to February.`;
    default:
      return "";
  }
}

function months(places: Set<Place>, tags: string[], keys: Set<DayKey | undefined>, gulmarg: boolean): string {
  if (tags.includes("Winter") || keys.has("gulmargSnow"))
    return "Late December to early March for snow in Gulmarg. January and February are the most reliable months; check road advisories before each drive.";
  if (keys.has("tulipGarden"))
    return "Late March to mid-April, when the Tulip Garden is open. The garden's dates are announced each spring, so keep your dates a little flexible.";
  if (places.has("gurez"))
    return "June to early October. The Razdan Pass road to Gurez usually opens in May or June and closes with the first heavy snow in November.";
  if (keys.has("sonamargExplore") || keys.has("sonamargDay"))
    return "April to October for Sonamarg, with June to October if you want Zojila and Zero Point, which open only when the pass is clear.";
  if (keys.has("doodhpathriDay"))
    return "April to November for the meadows; Doodhpathri's road usually closes with winter snow.";
  return gulmarg
    ? "April to June for green meadows and open roads, September and October for clear skies and autumn colour, and December to February if you want snow in Gulmarg."
    : "April to June for green meadows and open roads, September and October for clear skies and autumn colour. From December to February Srinagar is cold and Pahalgam is often under snow.";
}

// The fact box gets a short form of the best-months sentence.
function shortMonths(long: string): string {
  if (long.startsWith("Late December")) return "Late December to early March (snow)";
  if (long.startsWith("Late March")) return "Late March to mid-April (tulips)";
  if (long.startsWith("June to early October")) return "June to early October";
  if (long.includes("Zojila")) return "April to October; Zero Point June to October";
  if (long.includes("Doodhpathri")) return "April to November";
  return long.includes("snow in Gulmarg")
    ? "April to June, September to October; December to February for snow"
    : "April to June, September to October";
}

export function buildPackageDepth(pkg: Pkg): PackageDepth | null {
  if (pkg.destination.slug !== "kashmir") return null;
  const tags = pkg.theme.split(",").map((t) => t.trim()).filter(Boolean);
  const lines = pkg.itinerary.split("\n").filter(Boolean);
  // Hand-mapped plans win, but only while the line count still matches (an
  // admin edit that changes the days falls back to matching).
  const mapped = CATALOG_DAYS[pkg.slug]?.length === lines.length ? CATALOG_DAYS[pkg.slug] : undefined;
  const days: DepthDay[] = lines.map((line, i) => {
    const m = /^\s*(Days?\s*\d+(?:\s*[-–]\s*\d+)?)\s*[:.]\s*(.*)$/i.exec(line);
    const label = m ? m[1] : `Day ${i + 1}`;
    const text = m ? m[2] : line;
    if (mapped) return { label, text: m ? m[2] : line, detail: DAY_DETAIL[mapped[i][0]], sleep: mapped[i][1] };
    const key = dayKeyFor(text);
    const detail = key ? DAY_DETAIL[key] : undefined;
    const last = i === lines.length - 1;
    // Departure details only on the last day; arrival details only on day 1.
    const fits = detail && (last ? detail.sleep === "home" : detail.sleep !== "home") && !(i > 0 && key?.startsWith("arrive"));
    return { label, text, detail: fits ? detail : undefined, sleep: sleepFor(text, fits ? detail : undefined, last) };
  });
  const keys = new Set(days.map((d) => (d.detail ? KEYS.find((k) => DAY_DETAIL[k] === d.detail) : undefined)));

  // Nights per stop, in route order.
  const stops: [Place, number][] = [];
  for (const d of days) {
    if (!d.sleep || d.sleep === "home") continue;
    const prev = stops[stops.length - 1];
    if (prev && prev[0] === d.sleep) prev[1]++;
    else stops.push([d.sleep, 1]);
  }
  const nightsAt = new Map<Place, number>();
  for (const [p, n] of stops) nightsAt.set(p, (nightsAt.get(p) ?? 0) + n);
  const places = new Set<Place>(nightsAt.keys());
  const visits = (re: RegExp) => lines.some((l) => re.test(l));
  const hasGulmarg = places.has("gulmarg") || visits(/gulmarg/i);
  const hasPahalgam = places.has("pahalgam") || visits(/pahalgam/i);
  const hasSonamarg = places.has("sonamarg") || visits(/sonamarg/i);
  const hasValleys = visits(/aru|betaab|chandanwari/i);
  const hasDoodh = visits(/doodhpathri/i);
  const hasYus = visits(/yusmarg/i);
  const hasKatra = places.has("katra") || visits(/vaishno|katra/i);
  const hasGurez = places.has("gurez");
  const hasHouseboat = places.has("houseboat") || tags.includes("Houseboat") || visits(/houseboat/i);
  const tier = tierOf(tags, pkg.title);
  const style = styleOf(tags);
  const startsJammu = /jammu|katra/i.test(lines[0] ?? "");
  const winter = tags.includes("Winter") || tags.includes("Snow") || keys.has("gulmargSnow");
  const routeLine = stops.map(([p, n]) => `${p === "houseboat" ? "Houseboat" : PLACE_NAME[p]} ${n}N`).join(", ");
  const bestMonths = months(places, tags, keys, hasGulmarg);

  const facts = [
    { label: "Duration", value: `${pkg.durationNights} nights, ${pkg.durationDays} days` },
    { label: "Overnight stops", value: routeLine || undefined },
    { label: "Starts and ends", value: startsJammu ? "Jammu or Katra, ends at Srinagar" : "Srinagar airport (SXR)" },
    { label: "Hotels", value: `${tier === "Budget" ? "Budget" : tier}${hasHouseboat ? " plus a houseboat night" : ""}` },
    { label: "Transport", value: style === "friends" ? "Private cab, tempo traveller for 6 or more" : "Private cab with driver" },
    { label: "Best months", value: shortMonths(bestMonths) },
  ];

  const sections: DepthSection[] = [];

  // Where you stay
  sections.push({
    h: "Where you stay on this trip",
    p: [
      `This package uses ${TIER_STAY[tier]}${hasHouseboat ? ", with a houseboat night on the lake" : ""}. The category is set by what the price can realistically pay for in each town, not by a label, so the hotels the agents quote should match it. Here is what each stop is like:`,
      ...[...nightsAt.entries()]
        .map(([p, n]) => {
          const t = stayText(p, n, tier);
          // Tagged houseboat packages whose days do not name the houseboat
          // night: the summary promises one, so it is one of the Srinagar nights.
          return p === "srinagar" && hasHouseboat && !places.has("houseboat") && n > 0
            ? `${t} One of these Srinagar nights is spent on a houseboat on Dal or Nigeen Lake, reached by shikara.`
            : t;
        })
        .filter(Boolean),
      "The exact hotel is confirmed by the agent you choose, with its name in the written quote. If you have a hotel in mind, name it when you ask for quotes and agents will price it.",
    ],
  });

  // Included / not included
  const included = [
    `${pkg.durationNights} nights in ${tier === "Budget" ? "budget hotels or guesthouses" : `${tier.toLowerCase()} hotels`}${hasHouseboat ? " and a houseboat" : ""}, twin sharing`,
    "Breakfast and dinner every day (MAP), which is the standard meal plan for Kashmir packages",
    style === "friends"
      ? "A private cab for small groups, or a tempo traveller for 6 or more, for all transfers and sightseeing in the plan"
      : "A private cab with a local driver for all transfers and sightseeing in the plan",
    "Airport or station pickup on arrival and drop on departure",
    ...(style === "honeymoon" ? ["A flower-decorated room and a candle-light dinner on one night"] : []),
    ...(style === "family" ? ["An extra bed or family room for children, as listed in the quote"] : []),
    "Toll, parking, fuel and the driver's allowance",
  ];
  const excluded = [
    "Flights or trains to and from Srinagar, unless you ask for them in the quote",
    ...(hasGulmarg ? ["Gulmarg Gondola tickets (booked online in advance)"] : []),
    ...(hasValleys || hasPahalgam ? ["Pahalgam union taxi for Aru, Betaab and Chandanwari (outside cabs are not allowed there)"] : []),
    ...(hasSonamarg ? ["Ponies to Thajiwas Glacier and local taxis to Zero Point"] : []),
    ...(hasKatra ? ["Pony, palki, helicopter and ropeway services on the Vaishno Devi yatra"] : []),
    "Shikara rides beyond any listed in the plan, entry tickets and lunches",
    "Ponies, sledges, ski lessons, rafting and other activities",
    "Anything not written in the quote",
  ];
  sections.push({
    h: "What is included and what is not",
    p: ["A typical quote for this plan includes the items below. Read the written quote line by line: agents differ on meals, cab type and which tickets they cover."],
    list: [...included.map((x) => `Included: ${x}.`), ...excluded.map((x) => `Not included: ${x}.`)],
  });

  // Local costs
  const local: string[] = [];
  if (hasGulmarg) local.push("Gulmarg: gondola tickets for Phase 1 (Kongdoori) and Phase 2 (Apharwat) are sold online by the cable car corporation and sell out in peak weeks. Ponies, guides and, in winter, ski gear and sledges are paid locally.");
  if (hasPahalgam) local.push("Pahalgam: Aru, Betaab and Chandanwari are reached only in local union taxis at fixed circuit rates. Park entry at Betaab and Aru is paid at the gate. Baisaran meadow has been closed to visitors since April 2025.");
  if (hasSonamarg) local.push("Sonamarg: ponies to Thajiwas Glacier and union taxis over Zojila to Zero Point are paid at the stands; Zero Point is open only when the pass is, usually June to October.");
  if (hasDoodh) local.push("Doodhpathri: a small entry fee at the gate and ponies on the meadow.");
  if (hasYus) local.push("Yusmarg: ponies for the walk to Nilnag Lake.");
  if (hasKatra) local.push("Vaishno Devi: the yatra registration card is free; ponies, palkis, battery cars, the helicopter to Sanjichhat and the Bhairon ropeway are paid separately.");
  if (hasGurez) local.push("Gurez: carry cash, as ATMs are few and card machines unreliable.");
  local.push("Srinagar: shikara rides are charged by the hour at rates displayed at the ghats; garden entry tickets are bought at each gate.");
  sections.push({
    h: "Costs to budget for on the ground",
    p: ["These are paid directly in Kashmir and are not part of the package price. Agree every rate before a ride starts."],
    list: local,
  });

  // Best time
  sections.push({
    h: "Best time to take this trip",
    p: [
      bestMonths,
      winter
        ? "Pack thermals, a down jacket, waterproof boots, gloves and a woollen cap. Snow can close roads for a few hours after a heavy fall, so keep a buffer on the last day before your flight."
        : "Pack layers: days are warm from May to September, but mornings and evenings in Gulmarg, Pahalgam and Sonamarg stay cool, and a light jacket is useful even in June. From October, add a warm jacket and gloves.",
      "Peak dates (mid-April to June, Christmas and New Year, and Diwali week) need booking six to eight weeks ahead, especially for Gulmarg hotels and gondola tickets.",
    ],
  });

  // Style tips
  const styleTips: Record<Style, DepthSection> = {
    honeymoon: {
      h: "Planning tips for couples",
      list: [
        hasHouseboat ? "Ask for the houseboat night early in the trip, when you have the most energy for a sunset shikara." : "Ask agents to add a houseboat night on Dal or Nigeen Lake; it is the most requested change on honeymoon trips.",
        "Request a room with a view in at least one stop, and say it is your honeymoon: hotels often add small touches.",
        "Keep one afternoon free. Couples rarely regret the slow afternoon; they often regret a third sightseeing point.",
        winter ? "In winter, a heated room and an electric blanket matter more than a big room." : "Carry a light shawl or jacket for evening shikara rides; the lake gets cool after sunset.",
      ],
    },
    family: {
      h: "Planning tips for families",
      list: [
        "Ask for a larger cab (an Innova Crysta or similar) if you are four adults with luggage; the drives are long enough for comfort to matter.",
        "Pony rides suit children over about five; for younger children, walking the meadows is easier.",
        "Keep travel-sickness tablets for the mountain roads, especially to Gulmarg and Sonamarg.",
        "Book the gondola for the morning, when children are fresh and the weather is usually clearest.",
      ],
    },
    friends: {
      h: "Planning tips for groups",
      list: [
        "For 6 to 12 people, a tempo traveller is cheaper per person than two cabs and keeps the group together.",
        "Adventure add-ons on this route can include ATV rides in Gulmarg, rafting on the Lidder or Sindh in season and pony treks; book them locally and agree rates first.",
        "Ask for twin or triple sharing rooms; triple sharing lowers the price per person.",
        "Pick one person to share the group's names and IDs with the agent, as ID is checked at hotels and some check posts.",
      ],
    },
    pilgrim: {
      h: "Planning tips for pilgrims",
      list: [
        "Book the yatra registration and, if needed, the helicopter as soon as dates are fixed.",
        "Start the climb at night or very early in summer to avoid the heat.",
        "Leave leather goods and large bags at the hotel in Katra; they cannot be taken into the Bhawan.",
        "Keep a rest day or an easy day after the trek before long drives.",
      ],
    },
    classic: {
      h: "Planning tips for first-time visitors",
      list: [
        "Fly into Srinagar before noon so the first day is not lost to travel.",
        hasGulmarg ? "Book Gulmarg Gondola tickets online as soon as your dates are fixed." : "Fix the hotel nights first and the sightseeing order second; agents can reorder days around the weather.",
        "Carry a postpaid SIM: prepaid connections from outside Jammu and Kashmir do not work there.",
        "Keep cash for shikaras, ponies and union taxis; card acceptance is patchy outside Srinagar.",
      ],
    },
  };
  sections.push(styleTips[style]);

  sections.push({
    h: "How the price works",
    p: [
      "The starting price is per person with two sharing a room, for the hotel category above and off-peak dates. A third person in the room on an extra bed lowers the price per person; a single traveller pays more, because the room and cab are not shared.",
      "The price rises on peak dates, with a larger cab, or with a higher hotel category, and falls a little in the low season. Agents quote the exact figure for your dates and group, and that written quote is what you pay; there is no booking fee for asking.",
    ],
  });

  // FAQs: only ones this route makes relevant.
  const faqs: { q: string; a: string }[] = [
    { q: "Can we change the hotels or add a night?", a: "Yes. Every plan here is a starting point: tell the agents which hotel, extra night or extra place you want and they price it in the quote. Adding a second night in Gulmarg or Pahalgam is the most common change." },
    { q: "Will our phones work in Kashmir?", a: "Postpaid connections from any Indian operator work. Prepaid SIMs issued outside Jammu and Kashmir do not work there, so carry a postpaid number or buy a local connection with ID. Coverage is good in Srinagar, Gulmarg, Pahalgam and Sonamarg, and patchy in remote valleys." },
    { q: "How do we reach Srinagar?", a: startsJammu ? "This trip starts in Jammu or Katra. Jammu has direct trains and flights from Delhi and other cities, and Katra has its own station. The trip then continues to Srinagar by road or by the Vande Bharat train from Katra." : "Srinagar airport has direct flights from Delhi (about 1.5 hours), Mumbai, Bengaluru and several other cities. By rail, the Vande Bharat trains from Katra reach Srinagar in about 3 hours." },
    { q: "Is the trip suitable for senior citizens and young children?", a: `Yes, with the right pace. The longest drive on this plan is ${hasGurez || hasKatra || keys.has("sonamargToPahalgam") || keys.has("gulmargToPahalgam") ? "a full day, so ask for comfortable stops" : "about three hours"}. Pony rides and the gondola make the higher places easy to reach, and agents can add a rest morning.` },
  ];
  if (hasGulmarg) faqs.push({ q: "Are Gulmarg Gondola tickets included?", a: "Usually not. Tickets are sold online by the Jammu and Kashmir Cable Car Corporation and sell out on busy days. Phase 1 goes to Kongdoori, Phase 2 to Apharwat; Phase 2 closes in high wind or heavy snow. Book as soon as your dates are fixed." });
  if (hasPahalgam) faqs.push({ q: "Can our cab take us to Aru, Betaab and Chandanwari?", a: "No. Only local union taxis from Pahalgam's taxi stand are allowed to these points, at fixed rates per circuit, paid locally. Your package cab takes you to Pahalgam and back." });
  if (hasPahalgam) faqs.push({ q: "Is Baisaran meadow open?", a: "No. Baisaran has been closed to visitors since April 2025 and is not part of this plan. Aru, Betaab and Chandanwari remain open." });
  if (hasSonamarg) faqs.push({ q: "Is Zero Point included in the Sonamarg day?", a: "Zero Point lies over the Zojila pass, beyond where outside cabs may go, so it is a local taxi trip paid at the stand. It is possible only when Zojila is open, usually June to October." });
  if (hasGurez) faqs.push({ q: "Do we need a permit for Gurez?", a: "Indian nationals do not need a separate permit, but must carry original photo ID and register at the check posts on the way. Foreign nationals are not allowed to visit Gurez." });
  if (hasKatra) faqs.push({ q: "How long is the Vaishno Devi trek?", a: "About 12 km on the old track from Banganga, or about 13 km on the Himkoti route, usually 4 to 6 hours up. A helicopter from Katra to Sanjichhat leaves about 2.5 km to walk. Yatra registration is required." });
  if (hasHouseboat) faqs.push({ q: "Is a houseboat night safe and comfortable?", a: "Houseboats are graded and registered by the tourism department, and families have run them for generations. Deluxe boats have attached bathrooms and heating. Ask the agent for the boat's name and category in the quote." });
  if (winter) faqs.push({ q: "Will the roads be open in winter?", a: "Srinagar, Gulmarg and Pahalgam stay reachable through winter, though the road from Tangmarg to Gulmarg can need snow chains or a 4x4 after fresh snow. Sonamarg is reachable year-round since the Z-Morh tunnel opened in 2025. Keep a buffer day before your flight." });
  faqs.push({ q: "What should we pack?", a: winter ? "Thermals, a down jacket, waterproof snow boots, gloves, a woollen cap and sunglasses for the snow glare." : "Layers, a light jacket, comfortable walking shoes, sunscreen and sunglasses, plus a warm layer for evenings in the hill resorts." });

  return { days, facts, sections, faqs };
}
