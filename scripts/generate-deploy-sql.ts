// Generates a single, self-contained SQL script (schema + seed data) that
// can be pasted directly into Supabase's SQL Editor in the browser.
//
// This exists because the sandboxed dev environment this was built in has
// no raw-TCP network access to Postgres (only HTTPS, and only to allowed
// hosts) — see the proxy's own README: "Not supported through the proxy:
// ... non-443 HTTPS ports, raw-TCP databases." So the schema/seed can't be
// applied by connecting to the database from here. Running it via
// Supabase's own SQL Editor needs no such connection at all.
//
// Usage: npx tsx scripts/generate-deploy-sql.ts > deploy.sql
import fs from "fs";
import crypto from "crypto";
import bcrypt from "bcryptjs";

const MIGRATION_SQL = fs.readFileSync("prisma/migrations/20260826000000_init/migration.sql", "utf8");
const MIGRATION_NAME = "20260826000000_init";

function id() {
  return crypto.randomUUID();
}

function sqlStr(value: string | null | undefined): string {
  if (value === null || value === undefined) return "NULL";
  return `'${value.replace(/'/g, "''")}'`;
}

function sqlBool(value: boolean): string {
  return value ? "TRUE" : "FALSE";
}

function sqlDate(value: Date): string {
  return `'${value.toISOString()}'`;
}

const DESTINATIONS = [
  {
    slug: "golden-triangle-india",
    name: "Golden Triangle India",
    state: "Delhi, Rajasthan, Uttar Pradesh",
    isInternational: false,
    summary:
      "Delhi, Agra and Jaipur — India's classic first-timer circuit, covering the Taj Mahal, Mughal forts and the Pink City in one seamless loop.",
    heroImage: "/images/destinations/golden-triangle.jpg",
    cities: ["delhi", "agra", "jaipur"],
  },
  {
    slug: "jammu-and-kashmir",
    name: "Jammu & Kashmir",
    state: "Jammu and Kashmir",
    isInternational: false,
    summary:
      "Srinagar's houseboats and Dal Lake, the meadows of Gulmarg and Sonamarg, Pahalgam's valleys, and the Vaishno Devi pilgrimage from Katra.",
    heroImage: "/images/destinations/kashmir.jpg",
    cities: ["srinagar", "leh", "gulmarg", "sonamarg", "pahalgam", "jammu", "katra"],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    state: "Rajasthan",
    isInternational: false,
    summary: "Forts and palaces across Jaipur, Udaipur, Jodhpur and Jaisalmer, desert safaris, and heritage havelis.",
    heroImage: "/images/destinations/rajasthan.jpg",
    cities: ["jaipur-raj", "udaipur", "jodhpur", "jaisalmer"],
  },
  {
    slug: "kerala",
    name: "Kerala",
    state: "Kerala",
    isInternational: false,
    summary:
      "Backwaters in Alleppey, tea gardens in Munnar, and beaches in Kovalam — God's Own Country for honeymoons and family trips.",
    heroImage: "/images/destinations/kerala.jpg",
    cities: ["munnar", "alleppey", "kovalam"],
  },
  {
    slug: "maldives",
    name: "Maldives",
    state: null as string | null,
    isInternational: true,
    summary: "Overwater villas, private lagoons and coral reefs — a top international honeymoon and luxury beach destination.",
    heroImage: "/images/destinations/maldives.jpg",
    cities: ["male"],
  },
];

const PACKAGES = [
  {
    destinationSlug: "golden-triangle-india",
    citySlug: "delhi",
    slug: "golden-triangle-tour-5-days",
    title: "5 Days Golden Triangle Tour Package",
    summary: "Delhi - Agra - Jaipur in 5 days with private cab, heritage hotels and a sunrise Taj Mahal visit.",
    itinerary:
      "Day 1: Arrive Delhi, city tour.\nDay 2: Drive to Agra, visit Taj Mahal & Agra Fort.\nDay 3: Drive to Jaipur via Fatehpur Sikri.\nDay 4: Jaipur city tour - Amber Fort, City Palace.\nDay 5: Return to Delhi, departure.",
    heroImage: "/images/packages/golden-triangle-5d.jpg",
    durationDays: 5,
    durationNights: 4,
    price: 21299,
    theme: "Heritage,Family,Honeymoon",
  },
  {
    destinationSlug: "golden-triangle-india",
    citySlug: "jaipur",
    slug: "golden-triangle-tour-7-days",
    title: "7 Days Golden Triangle Tour with Ranthambore",
    summary: "Extended Golden Triangle circuit adding a Ranthambore tiger safari to Delhi, Agra and Jaipur.",
    itinerary:
      "Day 1: Arrive Delhi.\nDay 2: Delhi - Agra.\nDay 3: Agra - Ranthambore, evening safari.\nDay 4: Morning safari, drive to Jaipur.\nDay 5-6: Jaipur sightseeing.\nDay 7: Return to Delhi, departure.",
    heroImage: "/images/packages/golden-triangle-7d.jpg",
    durationDays: 7,
    durationNights: 6,
    price: 29999,
    theme: "Wildlife,Heritage,Family",
  },
  {
    destinationSlug: "jammu-and-kashmir",
    citySlug: "srinagar",
    slug: "kashmir-tour-6-days-srinagar-gulmarg-pahalgam",
    title: "6 Days Srinagar, Gulmarg, Pahalgam, Sonamarg Tour",
    summary: "Houseboat stay in Srinagar plus day trips to Gulmarg, Pahalgam and Sonamarg with private cab.",
    itinerary:
      "Day 1: Arrive Srinagar, houseboat check-in, Shikara ride.\nDay 2: Gulmarg day trip, Gondola ride.\nDay 3: Pahalgam day trip.\nDay 4: Sonamarg day trip.\nDay 5: Srinagar local sightseeing - Mughal Gardens.\nDay 6: Departure.",
    heroImage: "/images/packages/kashmir-6d.jpg",
    durationDays: 6,
    durationNights: 5,
    price: 18500,
    theme: "Honeymoon,Family,Nature",
  },
  {
    destinationSlug: "jammu-and-kashmir",
    citySlug: "leh",
    slug: "leh-ladakh-tour-6-days",
    title: "6 Days Leh Ladakh Tour Package",
    summary: "Pangong Lake, Nubra Valley and Khardung La covered over 6 days with acclimatization built in.",
    itinerary:
      "Day 1: Arrive Leh, acclimatization.\nDay 2: Leh local sightseeing.\nDay 3: Nubra Valley via Khardung La.\nDay 4: Pangong Lake.\nDay 5: Return to Leh.\nDay 6: Departure.",
    heroImage: "/images/packages/leh-ladakh-6d.jpg",
    durationDays: 6,
    durationNights: 5,
    price: 24999,
    theme: "Adventure,Nature",
  },
  {
    destinationSlug: "jammu-and-kashmir",
    citySlug: "katra",
    slug: "vaishno-devi-tour-5-days",
    title: "5 Days Vaishno Devi Tour Package",
    summary: "Katra base with a guided Vaishno Devi yatra and Srinagar extension.",
    itinerary:
      "Day 1: Arrive Jammu, drive to Katra.\nDay 2: Vaishno Devi yatra.\nDay 3: Drive to Srinagar.\nDay 4: Srinagar sightseeing.\nDay 5: Departure.",
    heroImage: "/images/packages/vaishno-devi-5d.jpg",
    durationDays: 5,
    durationNights: 4,
    price: 15999,
    theme: "Pilgrimage,Family",
  },
  {
    destinationSlug: "rajasthan",
    citySlug: "jaipur-raj",
    slug: "royal-rajasthan-tour-8-days",
    title: "8 Days Royal Rajasthan Tour - Jaipur, Udaipur, Jodhpur",
    summary: "Palaces, forts and lake views across three of Rajasthan's most iconic cities.",
    itinerary:
      "Day 1-2: Jaipur sightseeing.\nDay 3-4: Drive to Jodhpur, Mehrangarh Fort.\nDay 5-6: Drive to Udaipur, City Palace, boat ride.\nDay 7-8: Leisure and departure.",
    heroImage: "/images/packages/rajasthan-8d.jpg",
    durationDays: 8,
    durationNights: 7,
    price: 26999,
    theme: "Heritage,Family,Luxury",
  },
  {
    destinationSlug: "kerala",
    citySlug: "munnar",
    slug: "kerala-honeymoon-package-6-days",
    title: "6 Days Kerala Honeymoon Package - Munnar, Alleppey, Kovalam",
    summary: "Tea gardens, houseboat backwaters and beach time — a classic Kerala honeymoon route.",
    itinerary:
      "Day 1-2: Munnar tea gardens.\nDay 3: Drive to Alleppey, houseboat stay.\nDay 4: Drive to Kovalam.\nDay 5: Kovalam beach.\nDay 6: Departure.",
    heroImage: "/images/packages/kerala-6d.jpg",
    durationDays: 6,
    durationNights: 5,
    price: 19999,
    theme: "Honeymoon,Nature,Beach",
  },
  {
    destinationSlug: "maldives",
    citySlug: "male",
    slug: "maldives-honeymoon-package-5-days",
    title: "5 Days Maldives Honeymoon Package - Overwater Villa",
    summary: "All-inclusive overwater villa stay with seaplane transfers and water sports.",
    itinerary:
      "Day 1: Arrive Male, seaplane transfer to resort.\nDay 2-4: Resort leisure, snorkeling, spa.\nDay 5: Transfer to Male, departure.",
    heroImage: "/images/packages/maldives-5d.jpg",
    durationDays: 5,
    durationNights: 4,
    price: 89999,
    theme: "Honeymoon,Luxury,Beach",
  },
];

type SeedLead = {
  destinationSlug: string;
  citySlug?: string;
  name: string;
  phone: string;
  email?: string;
  originCity: string;
  travelDate: string;
  durationDays: number;
  adults: number;
  children?: number;
  budgetBand?: string;
  message: string;
  status: "NEW" | "VERIFIED" | "BOOKED" | "STALE";
  verified: boolean;
  daysAgo: number;
};

const LEADS: SeedLead[] = [
  {
    destinationSlug: "jammu-and-kashmir",
    citySlug: "srinagar",
    name: "Manoranjan Behera",
    phone: "9668912384",
    email: "manoranjanb@gmail.com",
    originCity: "Pune",
    travelDate: "2026-11-17",
    durationDays: 5,
    adults: 4,
    budgetBand: "Luxury (3 Star & Above)",
    message: "6 days Srinagar, Gulmarg, Sonamarg, Pahalgam tour package required for 4 adults from Pune.",
    status: "VERIFIED",
    verified: true,
    daysAgo: 0,
  },
  {
    destinationSlug: "jammu-and-kashmir",
    citySlug: "leh",
    name: "Abhishek Sharma",
    phone: "8123456773",
    originCity: "Chandigarh",
    travelDate: "2026-09-06",
    durationDays: 6,
    adults: 4,
    budgetBand: "Economy (0-2 Star)",
    message: "6 days Leh tour package required from Chandigarh city for 4 adults.",
    status: "VERIFIED",
    verified: true,
    daysAgo: 0,
  },
  {
    destinationSlug: "jammu-and-kashmir",
    citySlug: "leh",
    name: "Raj Kumar",
    phone: "9887654148",
    originCity: "Bhopal",
    travelDate: "2026-12-11",
    durationDays: 5,
    adults: 2,
    budgetBand: "Economy (0-2 Star)",
    message: "5 days for Leh tour package required from Bhopal for 2 adults.",
    status: "VERIFIED",
    verified: true,
    daysAgo: 0,
  },
  {
    destinationSlug: "jammu-and-kashmir",
    citySlug: "leh",
    name: "Pretesh Chaudhary",
    phone: "9765432146",
    originCity: "Surat",
    travelDate: "2026-12-15",
    durationDays: 6,
    adults: 2,
    budgetBand: "Rs. 25000 - Rs. 30000",
    message: "6 days Leh tour package required from Surat for 2 adults.",
    status: "VERIFIED",
    verified: true,
    daysAgo: 1,
  },
  {
    destinationSlug: "jammu-and-kashmir",
    citySlug: "srinagar",
    name: "Nishit Patel",
    phone: "7012345670",
    email: "nishitpatelnp123@gmail.com",
    originCity: "Srinagar, India",
    travelDate: "2026-11-10",
    durationDays: 6,
    adults: 8,
    children: 3,
    message: "8 Adults for 6 days require Srinagar, Gulmarg, Sonamarg, Pahalgam tour package from Srinagar.",
    status: "VERIFIED",
    verified: true,
    daysAgo: 1,
  },
  {
    destinationSlug: "jammu-and-kashmir",
    citySlug: "katra",
    name: "Ashok Sahu",
    phone: "9439876536",
    email: "ashoksahu@gmail.com",
    originCity: "Sambalpur",
    travelDate: "2026-10-10",
    durationDays: 5,
    adults: 2,
    message: "5 days Vaishno Devi tour package required from Sambalpur for 2 adults.",
    status: "VERIFIED",
    verified: true,
    daysAgo: 1,
  },
  {
    destinationSlug: "jammu-and-kashmir",
    citySlug: "leh",
    name: "Pushpo Singha",
    phone: "9832165437",
    originCity: "Siliguri",
    travelDate: "2026-09-23",
    durationDays: 3,
    adults: 2,
    message: "3 days Leh land tour package required for 2 adults.",
    status: "BOOKED",
    verified: true,
    daysAgo: 1,
  },
  {
    destinationSlug: "jammu-and-kashmir",
    citySlug: "leh",
    name: "Abhijith Sarkar",
    phone: "9845321045",
    originCity: "Mumbai",
    travelDate: "2026-10-09",
    durationDays: 4,
    adults: 2,
    message: "4 days Leh land tour package required for 2 adults.",
    status: "BOOKED",
    verified: true,
    daysAgo: 2,
  },
  {
    destinationSlug: "golden-triangle-india",
    citySlug: "delhi",
    name: "Priya Menon",
    phone: "9845123067",
    email: "priyamenon@gmail.com",
    originCity: "Kochi",
    travelDate: "2026-10-14",
    durationDays: 5,
    adults: 2,
    budgetBand: "Rs. 40000 - Rs. 60000",
    message: "5 days Golden Triangle tour required from Kochi for 2 adults, honeymoon trip.",
    status: "VERIFIED",
    verified: true,
    daysAgo: 0,
  },
  {
    destinationSlug: "golden-triangle-india",
    citySlug: "jaipur",
    name: "Rahul Deshmukh",
    phone: "9822014487",
    originCity: "Nagpur",
    travelDate: "2026-11-02",
    durationDays: 7,
    adults: 4,
    message: "7 days Golden Triangle with Ranthambore required from Nagpur for a family of 4.",
    status: "NEW",
    verified: false,
    daysAgo: 0,
  },
  {
    destinationSlug: "rajasthan",
    citySlug: "jaipur-raj",
    name: "Karan Mehta",
    phone: "9998877211",
    originCity: "Ahmedabad",
    travelDate: "2026-12-05",
    durationDays: 8,
    adults: 2,
    budgetBand: "Standard (3-4 Star)",
    message: "8 days Royal Rajasthan tour required from Ahmedabad for 2 adults.",
    status: "VERIFIED",
    verified: true,
    daysAgo: 2,
  },
  {
    destinationSlug: "kerala",
    citySlug: "munnar",
    name: "Sandeep Rao",
    phone: "9741230098",
    email: "sandeeprao@gmail.com",
    originCity: "Bengaluru",
    travelDate: "2026-10-20",
    durationDays: 6,
    adults: 2,
    budgetBand: "Rs. 30000 - Rs. 45000",
    message: "6 days Kerala honeymoon package required from Bengaluru for 2 adults.",
    status: "VERIFIED",
    verified: true,
    daysAgo: 1,
  },
  {
    destinationSlug: "maldives",
    citySlug: "male",
    name: "Aisha Khan",
    phone: "9821345566",
    originCity: "Delhi",
    travelDate: "2027-01-15",
    durationDays: 5,
    adults: 2,
    budgetBand: "Luxury",
    message: "5 days Maldives honeymoon package required from Delhi for 2 adults, overwater villa preferred.",
    status: "NEW",
    verified: false,
    daysAgo: 0,
  },
];

async function main() {
  const out: string[] = [];
  out.push("-- WanderLeads: full schema + seed data.");
  out.push("-- Generated by scripts/generate-deploy-sql.ts — paste this whole file into");
  out.push("-- the Supabase SQL Editor (Dashboard -> SQL Editor -> New query) and click Run.");
  out.push("BEGIN;");
  out.push("");
  out.push(MIGRATION_SQL);
  out.push("");

  const migrationChecksum = crypto.createHash("sha256").update(MIGRATION_SQL).digest("hex");
  out.push(`CREATE TABLE IF NOT EXISTS "_prisma_migrations" (`);
  out.push(`  "id" VARCHAR(36) NOT NULL PRIMARY KEY,`);
  out.push(`  "checksum" VARCHAR(64) NOT NULL,`);
  out.push(`  "finished_at" TIMESTAMPTZ,`);
  out.push(`  "migration_name" VARCHAR(255) NOT NULL,`);
  out.push(`  "logs" TEXT,`);
  out.push(`  "rolled_back_at" TIMESTAMPTZ,`);
  out.push(`  "started_at" TIMESTAMPTZ NOT NULL DEFAULT now(),`);
  out.push(`  "applied_steps_count" INTEGER NOT NULL DEFAULT 0`);
  out.push(`);`);
  out.push(`INSERT INTO "_prisma_migrations" (id, checksum, finished_at, migration_name, started_at, applied_steps_count)`);
  out.push(`VALUES (${sqlStr(id())}, ${sqlStr(migrationChecksum)}, now(), ${sqlStr(MIGRATION_NAME)}, now(), 1);`);
  out.push("");

  const adminPasswordHash = await bcrypt.hash("admin12345", 10);
  out.push(`-- Admin login: admin@wanderleads.com / admin12345 — CHANGE THIS PASSWORD after first login.`);
  out.push(
    `INSERT INTO "AdminUser" (id, email, "passwordHash", name, "createdAt") VALUES (${sqlStr(id())}, ${sqlStr("admin@wanderleads.com")}, ${sqlStr(adminPasswordHash)}, ${sqlStr("Site Admin")}, now());`,
  );
  out.push("");

  const creditPacks = [
    { name: "Starter", tagline: "Try it out", amountINR: 500, baseCredits: 500, bonusCredits: 0, sortOrder: 0 },
    { name: "Growth", tagline: "Most popular", amountINR: 1000, baseCredits: 1000, bonusCredits: 100, sortOrder: 1 },
    { name: "Pro", tagline: "For active agencies", amountINR: 2500, baseCredits: 2500, bonusCredits: 375, sortOrder: 2 },
    { name: "Scale", tagline: "Best value", amountINR: 5000, baseCredits: 5000, bonusCredits: 1000, sortOrder: 3 },
  ];
  for (const pack of creditPacks) {
    out.push(
      `INSERT INTO "CreditPack" (id, name, tagline, "amountINR", "baseCredits", "bonusCredits", active, "sortOrder", "createdAt", "updatedAt") VALUES (${sqlStr(id())}, ${sqlStr(pack.name)}, ${sqlStr(pack.tagline)}, ${pack.amountINR}, ${pack.baseCredits}, ${pack.bonusCredits}, TRUE, ${pack.sortOrder}, now(), now());`,
    );
  }
  out.push("");

  const destinationIdBySlug = new Map<string, string>();
  const cityIdBySlug = new Map<string, string>();

  for (const d of DESTINATIONS) {
    const destId = id();
    destinationIdBySlug.set(d.slug, destId);
    out.push(
      `INSERT INTO "Destination" (id, slug, name, state, country, "isInternational", summary, "heroImage", "createdAt", "updatedAt") VALUES (${sqlStr(destId)}, ${sqlStr(d.slug)}, ${sqlStr(d.name)}, ${sqlStr(d.state)}, ${sqlStr("India")}, ${sqlBool(d.isInternational)}, ${sqlStr(d.summary)}, ${sqlStr(d.heroImage)}, now(), now());`,
    );
    for (const citySlug of d.cities) {
      const cityId = id();
      cityIdBySlug.set(citySlug, cityId);
      const name = citySlug
        .replace(/-raj$/, "")
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");
      out.push(`INSERT INTO "City" (id, slug, name, "destinationId") VALUES (${sqlStr(cityId)}, ${sqlStr(citySlug)}, ${sqlStr(name)}, ${sqlStr(destId)});`);
    }
  }
  out.push("");

  for (const p of PACKAGES) {
    const destinationId = destinationIdBySlug.get(p.destinationSlug)!;
    const cityId = p.citySlug ? cityIdBySlug.get(p.citySlug) : undefined;
    out.push(
      `INSERT INTO "Package" (id, slug, title, summary, itinerary, "heroImage", "durationDays", "durationNights", price, theme, published, "destinationId", "cityId", "createdAt", "updatedAt") VALUES (${sqlStr(id())}, ${sqlStr(p.slug)}, ${sqlStr(p.title)}, ${sqlStr(p.summary)}, ${sqlStr(p.itinerary)}, ${sqlStr(p.heroImage)}, ${p.durationDays}, ${p.durationNights}, ${p.price}, ${sqlStr(p.theme)}, TRUE, ${sqlStr(destinationId)}, ${cityId ? sqlStr(cityId) : "NULL"}, now(), now());`,
    );
  }
  out.push("");

  for (const l of LEADS) {
    const destinationId = destinationIdBySlug.get(l.destinationSlug)!;
    const cityId = l.citySlug ? cityIdBySlug.get(l.citySlug) : undefined;
    const createdAt = new Date(Date.now() - l.daysAgo * 24 * 60 * 60 * 1000);
    out.push(
      `INSERT INTO "Lead" (id, name, phone, email, "originCity", "destinationId", "cityId", "travelDate", "durationDays", adults, children, "budgetBand", message, status, verified, "otpVerifiedAt", "unlockPrice", "maxUnlocks", "createdAt", "updatedAt") VALUES (${sqlStr(id())}, ${sqlStr(l.name)}, ${sqlStr(l.phone)}, ${l.email ? sqlStr(l.email) : "NULL"}, ${sqlStr(l.originCity)}, ${sqlStr(destinationId)}, ${cityId ? sqlStr(cityId) : "NULL"}, ${sqlStr(new Date(l.travelDate).toISOString())}, ${l.durationDays}, ${l.adults}, ${l.children ?? 0}, ${l.budgetBand ? sqlStr(l.budgetBand) : "NULL"}, ${sqlStr(l.message)}, ${sqlStr(l.status)}, ${sqlBool(l.verified)}, ${l.verified ? sqlDate(createdAt) : "NULL"}, 100, 3, ${sqlDate(createdAt)}, ${sqlDate(createdAt)});`,
    );
  }

  out.push("");
  out.push("COMMIT;");

  console.log(out.join("\n"));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
