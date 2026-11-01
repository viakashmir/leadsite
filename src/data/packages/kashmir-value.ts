// 50 Kashmir "value" packages priced 1% below comparable market listings.
//
// Benchmarks: facts only (route with nights per stop, hotel tier, stay type,
// final per-person price) read from a screenshot of the 30 listings shown at
// holidify.com/places/kashmir/packages.html on 2026-11-01. Their titles and
// descriptions are NOT used: every title, summary and itinerary below is our
// own. `verify: true` marks prices that were hard to read in the screenshot;
// those packages stay unpublished until the price is confirmed.
//
// 30 packages match one benchmark each (same route, nights and tier); 20 more
// are honeymoon / family / friends versions of a benchmark's route and tier,
// priced against that same benchmark. Price = benchmark x 0.99, rounded.
// No em dashes.

import { D, type DayKey, type PackageSeed } from "./kashmir";

export const PERCENT_BELOW_BENCHMARK = 1;
export const BENCHMARK_SOURCE = "Holidify";

type Place = "srinagar" | "gulmarg" | "pahalgam" | "sonamarg" | "houseboat" | "katra";
type Tier = "Budget" | "Mid-Range" | "Premium" | "Luxury";

type Benchmark = {
  id: number;
  stops: [Place, number][]; // place, nights
  tier: Tier;
  houseboat: boolean;
  price: number; // final per-person price shown (INR)
  season?: "winter" | "autumn";
  verify?: boolean;
};

// Read from the screenshot, top to bottom.
const BENCHMARKS: Benchmark[] = [
  { id: 1, stops: [["srinagar", 4]], tier: "Budget", houseboat: false, price: 14500 },
  { id: 2, stops: [["srinagar", 3], ["pahalgam", 1], ["srinagar", 1]], tier: "Mid-Range", houseboat: true, price: 30500 },
  { id: 3, stops: [["srinagar", 3], ["gulmarg", 1], ["pahalgam", 2], ["srinagar", 1]], tier: "Mid-Range", houseboat: true, price: 11000, verify: true },
  { id: 4, stops: [["srinagar", 3]], tier: "Mid-Range", houseboat: false, price: 8500 },
  { id: 5, stops: [["pahalgam", 1], ["gulmarg", 1], ["srinagar", 2]], tier: "Budget", houseboat: false, price: 12999 },
  { id: 6, stops: [["srinagar", 3], ["pahalgam", 1], ["srinagar", 1]], tier: "Mid-Range", houseboat: false, price: 32000, season: "autumn" },
  { id: 7, stops: [["srinagar", 4], ["gulmarg", 1], ["pahalgam", 1], ["srinagar", 1]], tier: "Mid-Range", houseboat: false, price: 13500 },
  { id: 8, stops: [["srinagar", 5], ["pahalgam", 1]], tier: "Mid-Range", houseboat: false, price: 11500 },
  { id: 9, stops: [["srinagar", 2], ["pahalgam", 1], ["gulmarg", 1], ["srinagar", 1]], tier: "Budget", houseboat: true, price: 16500, season: "winter" },
  { id: 10, stops: [["srinagar", 4]], tier: "Budget", houseboat: false, price: 17000 },
  { id: 11, stops: [["srinagar", 2], ["houseboat", 1], ["pahalgam", 1]], tier: "Mid-Range", houseboat: true, price: 25900 },
  { id: 12, stops: [["srinagar", 1], ["houseboat", 1], ["pahalgam", 2], ["gulmarg", 1]], tier: "Premium", houseboat: true, price: 27500 },
  { id: 13, stops: [["srinagar", 3], ["pahalgam", 1], ["srinagar", 1]], tier: "Mid-Range", houseboat: true, price: 15000 },
  { id: 14, stops: [["srinagar", 2], ["pahalgam", 1], ["gulmarg", 1], ["sonamarg", 1], ["srinagar", 1]], tier: "Mid-Range", houseboat: true, price: 26500, season: "winter" },
  { id: 15, stops: [["srinagar", 2], ["gulmarg", 1], ["pahalgam", 1], ["srinagar", 1]], tier: "Premium", houseboat: true, price: 26000 },
  { id: 16, stops: [["srinagar", 4]], tier: "Mid-Range", houseboat: false, price: 25000 },
  { id: 17, stops: [["srinagar", 3], ["pahalgam", 1], ["srinagar", 1]], tier: "Premium", houseboat: true, price: 16999 },
  { id: 18, stops: [["srinagar", 3], ["pahalgam", 1], ["srinagar", 1]], tier: "Mid-Range", houseboat: true, price: 15500 },
  { id: 19, stops: [["srinagar", 1], ["gulmarg", 1], ["pahalgam", 1], ["srinagar", 1]], tier: "Budget", houseboat: true, price: 10500 },
  { id: 20, stops: [["srinagar", 3]], tier: "Budget", houseboat: false, price: 9500 },
  { id: 21, stops: [["srinagar", 3], ["houseboat", 1]], tier: "Premium", houseboat: true, price: 12500 },
  { id: 22, stops: [["srinagar", 4], ["pahalgam", 1], ["srinagar", 1]], tier: "Mid-Range", houseboat: true, price: 20500 },
  { id: 23, stops: [["srinagar", 2], ["pahalgam", 1], ["srinagar", 1]], tier: "Premium", houseboat: true, price: 14000, season: "winter" },
  { id: 24, stops: [["srinagar", 3], ["pahalgam", 1], ["houseboat", 1]], tier: "Mid-Range", houseboat: true, price: 13999 },
  { id: 25, stops: [["srinagar", 3], ["pahalgam", 2], ["gulmarg", 1]], tier: "Premium", houseboat: true, price: 48500 },
  { id: 26, stops: [["srinagar", 3], ["houseboat", 1], ["pahalgam", 1]], tier: "Budget", houseboat: true, price: 13083, verify: true },
  { id: 27, stops: [["srinagar", 3], ["pahalgam", 1]], tier: "Mid-Range", houseboat: false, price: 10750, verify: true },
  { id: 28, stops: [["srinagar", 2], ["sonamarg", 1], ["pahalgam", 1]], tier: "Mid-Range", houseboat: true, price: 16200, verify: true },
  { id: 29, stops: [["pahalgam", 1], ["gulmarg", 1], ["srinagar", 2], ["sonamarg", 1]], tier: "Budget", houseboat: false, price: 19800, verify: true },
  { id: 30, stops: [["srinagar", 2], ["srinagar", 1]], tier: "Mid-Range", houseboat: false, price: 9500 },
  // Second screenshot of the same page (the first, cut-off listing is skipped).
  { id: 31, stops: [["srinagar", 2], ["gulmarg", 1], ["pahalgam", 1]], tier: "Luxury", houseboat: false, price: 31499 },
  { id: 32, stops: [["srinagar", 1], ["pahalgam", 1], ["gulmarg", 1], ["srinagar", 2]], tier: "Mid-Range", houseboat: true, price: 17990 },
  { id: 33, stops: [["srinagar", 2], ["pahalgam", 1], ["srinagar", 1]], tier: "Mid-Range", houseboat: false, price: 11450 },
  { id: 34, stops: [["pahalgam", 1], ["srinagar", 2], ["houseboat", 1]], tier: "Premium", houseboat: true, price: 17900 },
  { id: 35, stops: [["srinagar", 2], ["gulmarg", 1], ["pahalgam", 1], ["srinagar", 1]], tier: "Premium", houseboat: true, price: 29499 },
  { id: 36, stops: [["srinagar", 4]], tier: "Mid-Range", houseboat: false, price: 15999 },
  { id: 37, stops: [["srinagar", 3], ["pahalgam", 1], ["srinagar", 1]], tier: "Budget", houseboat: true, price: 15500 },
  { id: 38, stops: [["srinagar", 2], ["gulmarg", 1], ["pahalgam", 1], ["srinagar", 1]], tier: "Mid-Range", houseboat: true, price: 19000 },
  { id: 39, stops: [["srinagar", 3], ["pahalgam", 1], ["srinagar", 1]], tier: "Luxury", houseboat: true, price: 31500 },
  { id: 40, stops: [["srinagar", 3], ["pahalgam", 1], ["srinagar", 1]], tier: "Mid-Range", houseboat: true, price: 31500 },
  { id: 41, stops: [["srinagar", 4], ["pahalgam", 1], ["srinagar", 1]], tier: "Mid-Range", houseboat: true, price: 18000 },
  { id: 42, stops: [["srinagar", 3], ["pahalgam", 1], ["srinagar", 1]], tier: "Mid-Range", houseboat: true, price: 14999 },
  { id: 43, stops: [["srinagar", 2], ["gulmarg", 1], ["pahalgam", 1], ["srinagar", 1]], tier: "Luxury", houseboat: true, price: 28499 },
  // Third screenshot (Kashmir + Ladakh combos skipped: different destination).
  { id: 44, stops: [["srinagar", 2], ["houseboat", 1], ["pahalgam", 2]], tier: "Mid-Range", houseboat: true, price: 17000 },
  { id: 45, stops: [["katra", 2], ["pahalgam", 1], ["srinagar", 2], ["houseboat", 1]], tier: "Budget", houseboat: true, price: 19500 },
  { id: 46, stops: [["srinagar", 5]], tier: "Mid-Range", houseboat: false, price: 14999, season: "winter" },
  { id: 47, stops: [["srinagar", 2], ["pahalgam", 2], ["gulmarg", 1], ["srinagar", 1]], tier: "Luxury", houseboat: true, price: 20999, season: "winter" },
  { id: 48, stops: [["srinagar", 2], ["pahalgam", 1], ["srinagar", 1]], tier: "Budget", houseboat: true, price: 11500 },
  { id: 49, stops: [["srinagar", 3], ["pahalgam", 1]], tier: "Mid-Range", houseboat: false, price: 13400 },
  { id: 50, stops: [["srinagar", 3], ["pahalgam", 1]], tier: "Budget", houseboat: false, price: 15999 },
  { id: 51, stops: [["srinagar", 4], ["pahalgam", 1]], tier: "Mid-Range", houseboat: false, price: 16800 },
  { id: 52, stops: [["srinagar", 3], ["srinagar", 1]], tier: "Mid-Range", houseboat: false, price: 12999 },
  { id: 53, stops: [["pahalgam", 2], ["srinagar", 3]], tier: "Mid-Range", houseboat: false, price: 16250 },
  { id: 54, stops: [["srinagar", 2], ["pahalgam", 1], ["sonamarg", 1]], tier: "Mid-Range", houseboat: true, price: 11500 },
  { id: 55, stops: [["srinagar", 1], ["houseboat", 1], ["pahalgam", 1]], tier: "Premium", houseboat: true, price: 11500 },
  { id: 56, stops: [["srinagar", 2], ["gulmarg", 1], ["pahalgam", 1]], tier: "Budget", houseboat: false, price: 16999 },
  { id: 57, stops: [["srinagar", 2], ["gulmarg", 1], ["pahalgam", 2], ["srinagar", 1]], tier: "Mid-Range", houseboat: true, price: 33500 },
];

// ---------------------------------------------------------------- itinerary

const NAME: Record<Place, string> = { srinagar: "Srinagar", gulmarg: "Gulmarg", pahalgam: "Pahalgam", sonamarg: "Sonamarg", houseboat: "Houseboat", katra: "Katra" };
const base = (p: Place): Exclude<Place, "houseboat"> => (p === "houseboat" ? "srinagar" : p);

function transfer(from: Place, to: Place): DayKey {
  const f = base(from);
  if (to === "houseboat") return "houseboatNight";
  if (f === to) return to === "srinagar" ? "srinagarOldCity" : "pahalgamSlow";
  const key = `${f}>${to}`;
  const map: Record<string, DayKey> = {
    "srinagar>gulmarg": "gulmargTransfer",
    "srinagar>pahalgam": "pahalgamTransfer",
    "srinagar>sonamarg": "srinagarToSonamarg",
    "gulmarg>pahalgam": "gulmargToPahalgam",
    "gulmarg>srinagar": "gulmargToSrinagar",
    "gulmarg>sonamarg": "srinagarToSonamarg",
    "pahalgam>srinagar": "pahalgamToSrinagar",
    "pahalgam>gulmarg": "pahalgamToGulmarg",
    "pahalgam>sonamarg": "pahalgamToSrinagar",
    "sonamarg>pahalgam": "sonamargToPahalgam",
    "sonamarg>srinagar": "sonamargToSrinagar",
    "sonamarg>gulmarg": "gulmargTransfer",
    "katra>pahalgam": "katraToPahalgam",
    "katra>srinagar": "katraToSrinagar",
  };
  return map[key];
}

function buildDays(b: Benchmark, winterDays: boolean): DayKey[] {
  const overnight = new Set(b.stops.map(([p]) => base(p)));
  // Day trips from Srinagar, skipping places the route already stays in.
  const srinagarPool: DayKey[] = [
    "srinagarSights",
    ...(overnight.has("gulmarg") ? [] : [winterDays ? ("gulmargSnow" as DayKey) : ("gulmargDay" as DayKey)]),
    ...(overnight.has("sonamarg") ? [] : (["sonamargDay"] as DayKey[])),
    "srinagarOldCity",
    "doodhpathriDay",
    "yusmargDay",
    "srinagarSights",
  ];
  const pools: Record<string, DayKey[]> = {
    srinagar: srinagarPool,
    pahalgam: ["pahalgamValleys", "pahalgamSlow", "pahalgamSlow"],
    gulmarg: ["gulmargStay", "gulmargStay"],
    sonamarg: ["sonamargExplore", "sonamargExplore"],
    katra: ["vaishnoDevi", "vaishnoDevi"],
  };
  const used: Record<string, number> = { srinagar: 0, pahalgam: 0, gulmarg: 0, sonamarg: 0, katra: 0 };
  const days: DayKey[] = [];
  b.stops.forEach(([place, nights], i) => {
    if (i === 0) {
      days.push(place === "katra" ? "arriveJammu" : place === "pahalgam" ? "arrivePahalgam" : b.houseboat && place === "houseboat" ? "arriveHouseboat" : "arriveSrinagar");
    } else {
      days.push(transfer(b.stops[i - 1][0], place));
    }
    for (let n = 1; n < nights; n++) {
      const k = base(place);
      const pool = pools[k];
      days.push(pool[Math.min(used[k]++, pool.length - 1)]);
    }
  });
  const last = base(b.stops[b.stops.length - 1][0]);
  days.push(last === "pahalgam" ? "departPahalgam" : last === "gulmarg" ? "departGulmarg" : last === "sonamarg" ? "departSonamarg" : "departSrinagar");
  return days;
}

// ---------------------------------------------------------------- copy

type Style = "classic" | "honeymoon" | "family" | "friends";

const TIER_LINE: Record<Tier, string> = {
  Budget: "Clean, well-rated budget hotels close to the sights",
  "Mid-Range": "Comfortable 3-star hotels",
  Premium: "4-star hotels and the best-rated stays on the route",
  Luxury: "5-star hotels and deluxe stays",
};

// Original one-liners. Gentle humour, no promises we can't keep.
const QUIPS: Record<Style, string[]> = {
  classic: [
    "The hardest decision you'll make is shikara or second cup of kahwa.",
    "Bring a camera with a big memory card. Your phone will give up before Kashmir does.",
    "Mountains included. Traffic jams not included, mostly.",
    "We plan the drives; you plan where to put the saffron you will definitely buy.",
    "Sweaters recommended. Selfie sticks tolerated.",
    "Expect views so good your family group chat will mute you.",
    "The only thing in a hurry here is the Lidder river.",
    "Kahwa at sunrise, kahwa at sunset, kahwa in between. Pace yourself.",
  ],
  honeymoon: [
    "Romance by the lake; arguments only about who takes the better photo.",
    "One room, two people, zero to-do lists.",
    "The shikara seats two. Bring the right person.",
    "Snow fights optional. Hot chocolate after, mandatory.",
    "We handle the driving, so you can handle the hand-holding.",
  ],
  family: [
    "Built so grandparents and toddlers both reach dinner in a good mood.",
    "Short drives, long lunches and nobody asking 'are we there yet' too often.",
    "Pony rides for the kids, kahwa for the parents, peace for everyone.",
    "Room for strollers, snacks and the one cousin who always overpacks.",
    "Snow for the children, heaters for the adults. Everyone wins.",
  ],
  friends: [
    "A group chat that finally turns into a trip.",
    "ATVs, rafting and arguments about the playlist, all in one tempo traveller.",
    "Split the bill, not the group.",
    "Bonfire stories guaranteed. Accuracy of those stories not guaranteed.",
    "For friends who say 'let's go to Kashmir' every year. This is the year.",
  ],
};

const HOOK: Record<Style, string[]> = {
  classic: ["Kashmir Value Trail", "Lakes and Meadows", "Valley Explorer", "Kashmir Easy Escape", "Saffron Road", "Kashmir Smart Saver"],
  honeymoon: ["Kashmir Honeymoon Value", "Lakeside Romance"],
  family: ["Kashmir Family Value", "Family Valleys"],
  friends: ["Kashmir Friends Getaway", "Gang Goes to Kashmir"],
};

const STYLE_TOUCH: Record<Style, string> = {
  classic: "",
  honeymoon: " For couples: a flower-decorated room and a candle-light dinner on one night.",
  family: " For families: an extra bed for children and relaxed start times.",
  friends: " For groups: twin-sharing rooms and a tempo traveller for 6 or more; adventure add-ons on request.",
};

const routeText = (b: Benchmark) => b.stops.map(([p, n]) => `${NAME[p]} ${n}N`).join(", ");
const placesInTitle = (b: Benchmark) => {
  const names = [...new Set(b.stops.map(([p]) => NAME[base(p)]))];
  return names.length === 1 ? names[0] : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
};

function make(b: Benchmark, style: Style, n: number): PackageSeed & { referencePrice: number; referenceSource: string; price: number; verify: boolean } {
  const nights = b.stops.reduce((t, [, x]) => t + x, 0);
  const winter = b.season === "winter";
  const keys = buildDays(b, winter);
  const lines = keys.map((k, i) => `Day ${i + 1}: ${D[k]}${i === 1 ? STYLE_TOUCH[style] : ""}`);
  const hooks = HOOK[style];
  const hook = hooks[n % hooks.length];
  const season = b.season === "winter" ? " Winter" : b.season === "autumn" ? " Autumn" : "";
  const quip = QUIPS[style][n % QUIPS[style].length];
  const stay = `${TIER_LINE[b.tier]}${b.houseboat ? ", with a houseboat night on the lake" : ""}`;
  const summary = `${nights} nights across ${routeText(b)}. ${stay}, a private cab and a day plan that leaves time to actually enjoy it. ${quip}`;
  const tags = [
    style === "classic" ? "Classic" : style === "honeymoon" ? "Honeymoon,Couple" : style === "family" ? "Family" : "Friends,Adventure",
    b.tier === "Premium" || b.tier === "Luxury" ? "Luxury" : b.tier,
    ...(b.houseboat ? ["Houseboat"] : []),
    ...(winter ? ["Winter", "Snow"] : b.season === "autumn" ? ["Autumn"] : []),
  ].join(",");
  return {
    slug: `kashmir-value-${style}-${nights}n-b${b.id}`,
    title: `${hook}${season}: ${placesInTitle(b)} ${nights}N/${nights + 1}D (${b.tier})`,
    summary,
    itinerary: lines.join("\n"),
    durationDays: nights + 1,
    durationNights: nights,
    theme: tags,
    destination: "kashmir",
    city: base(b.stops.find(([p]) => base(p) !== "srinagar")?.[0] ?? "srinagar"),
    referencePrice: b.price,
    referenceSource: BENCHMARK_SOURCE,
    price: Math.round(b.price * (1 - PERCENT_BELOW_BENCHMARK / 100)),
    verify: Boolean(b.verify),
  };
}

// Style versions to reach 100: each benchmark gets the angles that suit its
// tier (couples and families for premium stays, groups for budget ones),
// round-robin across benchmarks so no single route dominates.
export const TARGET_PACKAGES = 100;
const STYLES_FOR: Record<Tier, Style[]> = {
  Budget: ["friends", "family"],
  "Mid-Range": ["family", "honeymoon", "friends"],
  Premium: ["honeymoon", "family"],
  Luxury: ["honeymoon", "family"],
};
const VARIANTS: [number, Style][] = [];
for (let round = 0; VARIANTS.length < TARGET_PACKAGES - BENCHMARKS.length && round < 3; round++) {
  for (const b of BENCHMARKS) {
    const style = STYLES_FOR[b.tier][round];
    if (style && VARIANTS.length < TARGET_PACKAGES - BENCHMARKS.length) VARIANTS.push([b.id, style]);
  }
}

const ALL = [
  ...BENCHMARKS.map((b, i) => make(b, "classic", i)),
  ...VARIANTS.map(([id, style], i) => make(BENCHMARKS.find((b) => b.id === id)!, style, i)),
];

// Keep titles unique (they are the H1 and <title>): a repeat gets its stay type.
const seen = new Set<string>();
export const KASHMIR_VALUE_PACKAGES = ALL.map((p) => {
  let title = p.title;
  if (seen.has(title)) title = title.replace(/ \(/, p.theme.includes("Houseboat") ? " with Houseboat (" : " Hotel Stay (");
  // Same route and tier listed more than once: name the extra ones Plan B, C...
  for (let n = 0; seen.has(title); n++) title = `${p.title.replace(/ \(/, ` Plan ${"BCDEFGH"[n]} (`)}`;
  seen.add(title);
  return { ...p, title };
});
