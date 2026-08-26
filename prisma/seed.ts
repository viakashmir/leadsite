import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL ?? "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

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
    summary:
      "Forts and palaces across Jaipur, Udaipur, Jodhpur and Jaisalmer, desert safaris, and heritage havelis.",
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
    state: null,
    isInternational: true,
    summary:
      "Overwater villas, private lagoons and coral reefs — a top international honeymoon and luxury beach destination.",
    heroImage: "/images/destinations/maldives.jpg",
    cities: ["male"],
  },
] as const;

const PACKAGES: Array<{
  destinationSlug: string;
  citySlug?: string;
  slug: string;
  title: string;
  summary: string;
  itinerary: string;
  heroImage: string;
  durationDays: number;
  durationNights: number;
  price: number;
  theme: string;
}> = [
  {
    destinationSlug: "golden-triangle-india",
    citySlug: "delhi",
    slug: "golden-triangle-tour-5-days",
    title: "5 Days Golden Triangle Tour Package",
    summary:
      "Delhi - Agra - Jaipur in 5 days with private cab, heritage hotels and a sunrise Taj Mahal visit.",
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
    summary:
      "Extended Golden Triangle circuit adding a Ranthambore tiger safari to Delhi, Agra and Jaipur.",
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
    summary:
      "Houseboat stay in Srinagar plus day trips to Gulmarg, Pahalgam and Sonamarg with private cab.",
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
    summary:
      "Pangong Lake, Nubra Valley and Khardung La covered over 6 days with acclimatization built in.",
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
  console.log("Seeding admin user...");
  await prisma.adminUser.upsert({
    where: { email: "admin@wanderleads.com" },
    update: {},
    create: {
      email: "admin@wanderleads.com",
      passwordHash: await bcrypt.hash("admin12345", 10),
      name: "Site Admin",
    },
  });

  console.log("Seeding destinations & cities...");
  const destinationIdBySlug = new Map<string, string>();
  const cityIdBySlug = new Map<string, string>();

  for (const d of DESTINATIONS) {
    const destination = await prisma.destination.upsert({
      where: { slug: d.slug },
      update: {
        name: d.name,
        state: d.state,
        isInternational: d.isInternational,
        summary: d.summary,
        heroImage: d.heroImage,
      },
      create: {
        slug: d.slug,
        name: d.name,
        state: d.state,
        isInternational: d.isInternational,
        summary: d.summary,
        heroImage: d.heroImage,
      },
    });
    destinationIdBySlug.set(d.slug, destination.id);

    for (const citySlug of d.cities) {
      const name = citySlug
        .replace(/-raj$/, "")
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ");
      const city = await prisma.city.upsert({
        where: { slug: citySlug },
        update: { name, destinationId: destination.id },
        create: { slug: citySlug, name, destinationId: destination.id },
      });
      cityIdBySlug.set(citySlug, city.id);
    }
  }

  console.log("Seeding packages...");
  for (const p of PACKAGES) {
    const destinationId = destinationIdBySlug.get(p.destinationSlug)!;
    const cityId = p.citySlug ? cityIdBySlug.get(p.citySlug) : undefined;
    await prisma.package.upsert({
      where: { slug: p.slug },
      update: {
        title: p.title,
        summary: p.summary,
        itinerary: p.itinerary,
        heroImage: p.heroImage,
        durationDays: p.durationDays,
        durationNights: p.durationNights,
        price: p.price,
        theme: p.theme,
        destinationId,
        cityId,
      },
      create: {
        slug: p.slug,
        title: p.title,
        summary: p.summary,
        itinerary: p.itinerary,
        heroImage: p.heroImage,
        durationDays: p.durationDays,
        durationNights: p.durationNights,
        price: p.price,
        theme: p.theme,
        destinationId,
        cityId,
      },
    });
  }

  console.log("Seeding leads...");
  // Wipe existing seeded leads for idempotency (leads have no natural unique key)
  const seedPhones = LEADS.map((l) => l.phone);
  await prisma.lead.deleteMany({ where: { phone: { in: seedPhones } } });

  for (const l of LEADS) {
    const destinationId = destinationIdBySlug.get(l.destinationSlug)!;
    const cityId = l.citySlug ? cityIdBySlug.get(l.citySlug) : undefined;
    const createdAt = new Date(Date.now() - l.daysAgo * 24 * 60 * 60 * 1000);
    await prisma.lead.create({
      data: {
        name: l.name,
        phone: l.phone,
        email: l.email,
        originCity: l.originCity,
        destinationId,
        cityId,
        travelDate: new Date(l.travelDate),
        durationDays: l.durationDays,
        adults: l.adults,
        children: l.children ?? 0,
        budgetBand: l.budgetBand,
        message: l.message,
        status: l.status,
        verified: l.verified,
        otpVerifiedAt: l.verified ? createdAt : null,
        createdAt,
      },
    });
  }

  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
