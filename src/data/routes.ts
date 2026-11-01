// Origin-to-destination route pages: /{dest}-tourism/{city}/how-to-reach/{origin}-to-{city}.
//
// Road distance and drive time come from OpenStreetMap via OSRM
// (scripts/build-route-distances.ts writes route-distances.json); everything
// else is the destination's own transport facts below. Rules: fact-based, no
// fares or schedules (they change), no em dashes.

import { ORIGIN_CITIES } from "@/data/locations";
import distances from "@/data/route-distances.json";

export type Coord = { lat: number; lng: number };

export const ORIGIN_COORDS: Record<(typeof ORIGIN_CITIES)[number]["slug"], Coord & { airport: string }> = {
  delhi: { lat: 28.6139, lng: 77.209, airport: "Delhi (DEL)" },
  mumbai: { lat: 19.076, lng: 72.8777, airport: "Mumbai (BOM)" },
  bangalore: { lat: 12.9716, lng: 77.5946, airport: "Bengaluru (BLR)" },
  chennai: { lat: 13.0827, lng: 80.2707, airport: "Chennai (MAA)" },
  kolkata: { lat: 22.5726, lng: 88.3639, airport: "Kolkata (CCU)" },
  hyderabad: { lat: 17.385, lng: 78.4867, airport: "Hyderabad (HYD)" },
  pune: { lat: 18.5204, lng: 73.8567, airport: "Pune (PNQ)" },
  ahmedabad: { lat: 23.0225, lng: 72.5714, airport: "Ahmedabad (AMD)" },
  jaipur: { lat: 26.9124, lng: 75.7873, airport: "Jaipur (JAI)" },
  lucknow: { lat: 26.8467, lng: 80.9462, airport: "Lucknow (LKO)" },
  chandigarh: { lat: 30.7333, lng: 76.7794, airport: "Chandigarh (IXC)" },
  kochi: { lat: 9.9312, lng: 76.2673, airport: "Kochi (COK)" },
};

export type RouteTarget = {
  city: string; // city slug
  destination: string; // destination slug
  name: string;
  coord: Coord;
  air: string; // nearest airports and how to continue
  rail: string; // nearest railheads and how to continue
  road: string; // last leg by road, highways, seasonal notes
  hub: string; // the airport most travellers from far away fly into
  bus?: string; // regular bus links (HRTC, Volvo) from hubs
  busFrom?: string[]; // origin slugs with regular direct buses (default Delhi, Chandigarh)
  season?: string; // when the road route is open, if seasonal
};

export const ROUTE_TARGETS: RouteTarget[] = [
  {
    city: "north-goa",
    hub: "Goa: Mopa (GOX) or Dabolim (GOI)",
    destination: "goa",
    name: "Goa",
    coord: { lat: 15.4909, lng: 73.8278 },
    air: "Goa has two airports: Manohar International at Mopa (GOX) in North Goa and Dabolim (GOI) near Vasco in South Goa. Both have direct flights from most major Indian cities.",
    rail: "Goa is on the Konkan Railway. Madgaon (Margao) is the main station for South Goa, and Thivim and Karmali serve North Goa and Panaji.",
    road: "Goa is reached by NH 66 along the coast from Mumbai and Mangaluru, and by NH 748 from Belagavi.",
    busFrom: ["mumbai", "pune", "bangalore"],
    bus: "KTC (Goa), MSRTC, KSRTC and private sleeper buses run overnight to Panaji, Mapusa and Margao from Mumbai, Pune and Bengaluru.",
  },
  {
    city: "manali",
    hub: "Chandigarh (IXC) or Bhuntar (KUU)",
    destination: "himachal",
    name: "Manali",
    coord: { lat: 32.2432, lng: 77.1892 },
    air: "The nearest airport is Bhuntar (KUU) near Kullu, about 50 km from Manali, with limited flights from Delhi. Chandigarh (IXC), about 300 km away, has far more flights and is the usual choice, followed by a taxi or bus.",
    rail: "There is no railway to Manali. The nearest practical railheads are Chandigarh and Kalka, about 300 km away; continue by bus or taxi via Mandi and Kullu.",
    road: "The last leg runs via Kiratpur, Bilaspur, Mandi and Kullu on NH 205 and NH 3.",
    bus: "HRTC and private Volvo buses run overnight to Manali from Delhi (Kashmere Gate, Majnu ka Tilla) and Chandigarh.",
  },
  {
    city: "shimla",
    hub: "Chandigarh (IXC)",
    destination: "himachal",
    name: "Shimla",
    coord: { lat: 31.1048, lng: 77.1734 },
    air: "Shimla's Jubbarhatti airport (SLV) has limited flights. Chandigarh (IXC), about 115 km away, is the usual airport, followed by a 3 to 4 hour drive.",
    rail: "Take a broad-gauge train to Kalka, then the UNESCO-listed Kalka Shimla toy train (96 km), or a bus or taxi (about 85 km).",
    road: "The last leg runs via Parwanoo, Dharampur and Solan on NH 5.",
    bus: "HRTC and private buses run to Shimla from Delhi, Chandigarh and Kalka through the day and overnight.",
  },
  {
    city: "dharamshala",
    hub: "Gaggal, Dharamshala (DHM)",
    destination: "himachal",
    name: "Dharamshala",
    coord: { lat: 32.219, lng: 76.3234 },
    air: "Gaggal airport (DHM), about 15 km from Dharamshala, has flights from Delhi. Amritsar and Chandigarh airports are 5 to 6 hours away by road.",
    rail: "Pathankot, about 90 km away, is the nearest broad-gauge station. The Kangra Valley narrow-gauge line runs from Pathankot towards Kangra.",
    road: "The last leg runs via Una and Kangra, or via Pathankot and Shahpur.",
    bus: "HRTC and private Volvo buses run overnight to Dharamshala and McLeodganj from Delhi and Chandigarh.",
  },
  {
    city: "kasol",
    hub: "Chandigarh (IXC) or Bhuntar (KUU)",
    destination: "himachal",
    name: "Kasol",
    coord: { lat: 32.01, lng: 77.315 },
    air: "Bhuntar airport (KUU) is about 30 km from Kasol, with limited flights from Delhi. Chandigarh (IXC) is about 280 km away.",
    rail: "There is no railway nearby. Chandigarh and Kalka are the practical railheads; continue by bus to Bhuntar and on to Kasol.",
    road: "The last leg turns off the Manali highway at Bhuntar and follows the Parvati river for about 30 km.",
    bus: "Overnight Volvo buses run from Delhi to Bhuntar and Kasol; local buses run from Bhuntar.",
  },
  {
    city: "spiti-valley",
    hub: "Chandigarh (IXC)",
    destination: "himachal",
    name: "Spiti Valley",
    coord: { lat: 32.2276, lng: 78.071 },
    air: "There is no airport in Spiti. Fly to Chandigarh, Shimla or Bhuntar and continue by road; Kaza is two days from Chandigarh.",
    rail: "The nearest railheads are Shimla (toy train from Kalka) and Chandigarh or Kalka on the broad gauge.",
    road: "Kaza is reached via Shimla, Kinnaur and Nako (open most of the year), or via Manali and Kunzum La (about June to October).",
    bus: "HRTC buses run to Reckong Peo from Delhi and Shimla, with connections to Kaza; in summer a bus runs Manali to Kaza.",
    season: "The Manali side over Kunzum La is usually open only from about June to October.",
  },
  {
    city: "leh",
    hub: "Leh (IXL)",
    destination: "ladakh",
    name: "Leh",
    coord: { lat: 34.1526, lng: 77.5771 },
    air: "Leh airport (IXL) has year-round direct flights from Delhi and seasonal direct flights from some other cities; otherwise connect through Delhi.",
    rail: "There is no railway in Ladakh. The nearest major stations are Jammu Tawi and Chandigarh, followed by two days by road.",
    road: "Leh is reached via Srinagar, Zojila and Kargil, or via Manali, the Atal Tunnel and Baralacha La. Both take two days from the last big town.",
    bus: "HRTC runs a seasonal Delhi to Leh and Manali to Leh bus, and J&K buses run Srinagar to Leh, usually from June to September.",
    season: "Both highways into Ladakh are usually open from about May or June to October.",
  },
  {
    city: "dalhousie",
    hub: "Amritsar (ATQ) or Gaggal (DHM)",
    destination: "himachal",
    name: "Dalhousie",
    coord: { lat: 32.5387, lng: 75.971 },
    air: "The nearest airports are Pathankot (IXP, limited flights), Gaggal near Dharamshala (DHM) and Amritsar (ATQ), about 190 km away.",
    rail: "Pathankot, about 80 km away, is the nearest broad-gauge station.",
    road: "The last leg runs from Pathankot via Banikhet.",
    bus: "HRTC buses run to Dalhousie from Delhi and Pathankot.",
  },
  {
    city: "kasauli",
    hub: "Chandigarh (IXC)",
    destination: "himachal",
    name: "Kasauli",
    coord: { lat: 30.901, lng: 76.965 },
    air: "Chandigarh (IXC), about 65 km away, is the nearest airport.",
    rail: "Kalka, about 40 km away, is the nearest broad-gauge station; the toy train stops at Dharampur, about 12 km from Kasauli.",
    road: "The last leg turns off the Shimla highway at Dharampur or Parwanoo.",
    bus: "Buses run to Kasauli from Chandigarh, Kalka and Delhi.",
  },
  {
    city: "jibhi",
    hub: "Chandigarh (IXC) or Bhuntar (KUU)",
    destination: "himachal",
    name: "Jibhi",
    coord: { lat: 31.5878, lng: 77.3644 },
    air: "Bhuntar airport (KUU), about 60 km away, has limited flights from Delhi. Chandigarh (IXC) is about 250 km away.",
    rail: "Chandigarh and Kalka are the practical railheads; continue by bus to Aut and on to Jibhi.",
    road: "The last leg leaves the Manali highway at Aut, goes through the Aut tunnel to Banjar and up to Jibhi.",
    bus: "Overnight Volvo buses from Delhi stop at Aut; local buses and taxis run to Banjar and Jibhi.",
  },
  {
    city: "kinnaur",
    hub: "Chandigarh (IXC)",
    destination: "himachal",
    name: "Kinnaur",
    coord: { lat: 31.537, lng: 78.258 },
    air: "There is no airport in Kinnaur. Fly to Chandigarh or Shimla and continue about 230 km by road to Kalpa.",
    rail: "Shimla (toy train from Kalka) and Chandigarh are the nearest railheads.",
    road: "Kalpa and Sangla are reached from Shimla along the Hindustan-Tibet road (NH 5) via Narkanda and Rampur.",
    bus: "HRTC buses run to Reckong Peo, below Kalpa, from Delhi and Shimla.",
  },
];

type Distance = { km: number; hours: number };
const DIST = distances as Record<string, Distance>;

export const routeSlug = (origin: string, city: string) => `${origin}-to-${city}`;

export function getRoute(citySlug: string, slug: string) {
  const target = ROUTE_TARGETS.find((t) => t.city === citySlug);
  const origin = ORIGIN_CITIES.find((o) => slug === routeSlug(o.slug, citySlug));
  if (!target || !origin || origin.slug === citySlug) return null;
  const dist = DIST[routeSlug(origin.slug, citySlug)];
  if (!dist) return null;
  return { target, origin, originInfo: ORIGIN_COORDS[origin.slug], dist };
}

export function routesTo(citySlug: string) {
  return ORIGIN_CITIES.filter((o) => DIST[routeSlug(o.slug, citySlug)]).map((o) => ({
    origin: o,
    slug: routeSlug(o.slug, citySlug),
    dist: DIST[routeSlug(o.slug, citySlug)],
  }));
}

export function allRoutes() {
  return ROUTE_TARGETS.flatMap((t) => routesTo(t.city).map((r) => ({ ...r, target: t })));
}
