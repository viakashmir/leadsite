import type { BlogPost } from "./types";

// Kashmir competitor-gap batch 4 (2026-11-08): international travellers and a
// dated travel-updates page.
// Facts checked 2026-11-08:
// - US State Department: Level 4 "Do Not Travel" for Jammu and Kashmir except
//   eastern Ladakh and Leh (reported August 2026, review mentioned, no change
//   found). UK FCDO advises against all travel to J&K with narrow exceptions
//   (secondary source); readers are told to check their own government.
// - February 2026: J&K reopened 14 spots closed after April 2025, including
//   Yusmarg, Doodhpathri, the Tulip Garden, Thajiwas glacier, Wular Lake;
//   Gurez, Bangus and Ramkund pending snow clearance and checks at the time.
//   Baisaran still closed as of April 2026.
// - Tulip Garden opened 16 March 2026. Katra to Srinagar Vande Bharat since
//   June 2025; no direct Delhi to Srinagar train as of November 2026. Z-Morh
//   tunnel open since January 2025. Gondola tickets online only (JKCCL).
// Rules: no fares, no em dashes; this page carries a visible "as of" date.

const D = "2026-11-08";

export const KASHMIR_BATCH_4: BlogPost[] = [
  {
    slug: "kashmir-for-international-travellers",
    title: "Kashmir for International Travellers: Visa, Advisories, Flights, Form C and Tips",
    description:
      "Visiting Kashmir from abroad: Indian visa, government travel advisories, flights via Delhi, Form C hotel registration, money, SIM cards, dress and etiquette.",
    category: "Planning",
    destination: "kashmir",
    date: D,
    intro:
      "International travellers can visit Kashmir's main tourist circuit, Srinagar, Gulmarg, Pahalgam and Sonamarg, with a valid passport and Indian visa; no special permit is needed for these areas. Most fly into Delhi and take a 1.5 hour domestic flight to Srinagar. Hotels and houseboats register foreign guests through the Form C process. Before you book, read your own government's travel advice: the US currently rates Jammu and Kashmir at its highest level, 'Do Not Travel' (except eastern Ladakh and Leh), and the UK advises against all travel to most of the region. That advice can affect your travel insurance, so check both carefully.",
    sections: [
      { h: "Visa and entry", list: ["You need a valid passport and an Indian visa; many nationalities can apply for an Indian e-Visa online before travel.", "Enter India at an international airport (most commonly Delhi or Mumbai), then fly domestically to Srinagar (SXR).", "No separate permit is required for Srinagar, Gulmarg, Pahalgam or Sonamarg.", "Some border areas, such as Gurez, Keran and Bangus, have extra rules; foreigners should confirm in advance whether access is allowed."] },
      { h: "Government travel advice and insurance", p: ["Several governments advise their citizens against travel to Jammu and Kashmir. As of late 2026, the US State Department lists the region (except eastern Ladakh and Leh) at Level 4, 'Do Not Travel', and the UK advises against all travel to most of it, with narrow exceptions. These advisories can change, and many travel insurance policies do not cover regions your government advises against.", "Read the current advice on your government's website before booking, check your insurance wording, and keep both in mind when you decide. Many foreign visitors do travel to Srinagar and the resorts each year, but the decision and the risk are yours."] },
      { h: "Flights to Srinagar", p: ["Srinagar International Airport (SXR) has frequent domestic flights from Delhi, Mumbai, Bengaluru, Kolkata, Chandigarh, Jammu and other cities; Delhi is the main connecting hub, about 1.5 hours away. There are very few or no regular international flights directly to Srinagar, so plan to connect in India. Allow a buffer between your international arrival and the Srinagar flight, as winter fog in Delhi and snow in Srinagar can cause delays."] },
      { h: "Form C registration", p: ["By Indian law, hotels, guesthouses and houseboats must register foreign guests with the authorities through Form C within a set time of arrival. In practice your host does this using your passport and visa details at check-in. Keep your passport with you, as checkpoints and hotels may ask for it."] },
      { h: "Money and payments", list: ["Carry some Indian rupees in cash for small shops, shikaras, ponies and taxis.", "Larger hotels and shops accept international cards; smaller places may not.", "ATMs are available in Srinagar and the bigger towns, fewer in the resorts.", "UPI is widely used in India; check whether an inbound-traveller UPI option is available for your country before relying on it."] },
      { h: "Phones and internet", p: ["Prepaid SIM cards issued outside Jammu and Kashmir do not work in J&K, and buying a SIM as a foreigner involves passport and visa verification. Check whether your home SIM's international roaming works in J&K before you travel, and rely on hotel Wi-Fi where needed. Download offline maps and keep bookings saved on your phone."] },
      { h: "Dress, culture and etiquette", list: ["Kashmir is a conservative, largely Muslim region: dress modestly, covering shoulders and knees.", "Remove shoes and cover your head where required at shrines and mosques.", "Ask before photographing people, especially women; never photograph security installations.", "Alcohol is not widely available; do not drink in public places.", "Hospitality is generous: accepting kahwa or a meal when offered is polite."] },
      { h: "A first trip plan for international visitors", days: ["Arrive in Delhi; rest overnight near the airport.", "Fly to Srinagar; afternoon shikara ride; houseboat night.", "Mughal gardens and old city.", "Gulmarg day trip with the Gondola.", "Pahalgam via Pampore and Awantipora; overnight.", "Back to Srinagar; fly to Delhi for your international connection."] },
      { h: "Booking through a local agent", p: ["Many international visitors book through a registered local agent who arranges airport pickup, hotels that handle Form C, a private cab with an experienced driver and up-to-date advice on which areas are open. On Tavel Package you can describe your trip and receive customised plans from up to 3 verified agents who operate in Kashmir."] },
    ],
    faqs: [
      { q: "Can foreigners visit Kashmir?", a: "Yes. Foreign nationals with a valid passport and Indian visa can visit Srinagar, Gulmarg, Pahalgam and Sonamarg without a special permit. Check your government's travel advice first." },
      { q: "Do foreigners need a permit for Kashmir?", a: "Not for the main circuit. Some border areas have extra rules; confirm before planning Gurez, Keran or Bangus." },
      { q: "What is Form C in Kashmir?", a: "A registration of foreign guests that hotels, guesthouses and houseboats must file with the authorities. Your host does it at check-in using your passport and visa." },
      { q: "Are there international flights to Srinagar?", a: "Very few or none on a regular basis. Most travellers connect through Delhi, about 1.5 hours away." },
      { q: "What do US and UK travel advisories say about Kashmir?", a: "As of late 2026 the US lists Jammu and Kashmir (except eastern Ladakh and Leh) as 'Do Not Travel', and the UK advises against all travel to most of it. Check the current advice before booking." },
      {"q": "Is Kashmir safe for foreign tourists?", "a": "The main circuit is busy and heavily guarded, and many foreign visitors travel there each year. Several governments still advise against travel, so read your government's advice and check your insurance before deciding."},
      {"q": "What should foreign women wear in Kashmir?", "a": "Loose clothing covering shoulders and knees, with a scarf for shrines and mosques. A pheran, the local long woollen gown, is practical in winter."},
      { q: "Will my phone work in Kashmir?", a: "Prepaid SIMs from outside J&K do not work. Check your home SIM's roaming and rely on hotel Wi-Fi where needed." },
    ],
  },
  {
    slug: "kashmir-travel-updates",
    title: "Kashmir Travel Updates, November 2026: What Is Open, Closed and New",
    description:
      "Kashmir travel updates as of November 2026: reopened tourist spots, Baisaran status, trains, Gondola booking, roads in winter, Tulip Garden dates and advisories.",
    category: "Planning",
    destination: "kashmir",
    date: D,
    intro:
      "This page collects the changes that matter for a Kashmir trip, checked as of 8 November 2026. The main circuit of Srinagar, Gulmarg, Pahalgam town and Sonamarg is open. In February 2026, 14 tourist spots that had been closed after the April 2025 attack were ordered reopened, including Yusmarg, Doodhpathri, the Tulip Garden and the Thajiwas glacier; Baisaran meadow above Pahalgam was still closed as of April 2026. Trains now run from Katra to Srinagar, Gulmarg Gondola tickets are sold online only, and winter road closures (Mughal Road, Zojila, Razdan) are beginning. Always reconfirm with your agent or hotel a few days before travel.",
    sections: [
      { h: "Tourist spots: reopened and still closed", list: ["Reopened (ordered February 2026): Yusmarg, Doodhpathri, the Indira Gandhi Memorial Tulip Garden, Thajiwas glacier, Wular Lake and other parks and spots in the valley and Jammu division.", "Pending at the time of that order: Gurez, Bangus and Ramkund, subject to snow clearance and security checks; confirm their current status before planning.", "Baisaran meadow (Pahalgam): still closed as of April 2026; do not plan around it.", "The main circuit: Srinagar, Gulmarg, Pahalgam town, Aru and Betaab valleys, Sonamarg: open, with heavy security."] },
      { h: "Trains", list: ["Katra to Srinagar Vande Bharat trains have run since June 2025, about 3 hours, stopping at Banihal.", "There is still no direct train from Delhi to Srinagar as of November 2026: travel to Katra, then change.", "Local trains continue on the valley line between Banihal, Srinagar and Baramulla.", "Check timings on NTES or IRCTC; they change with each timetable."] },
      { h: "Gulmarg Gondola", p: ["Gondola tickets are sold online only, through the J&K Cable Car Corporation's booking portal; on-the-spot sales at the base were stopped in 2025. A limited next-day Tatkal quota is released online. Phase 2 closes in high wind or heavy snow. Book as soon as your dates are fixed, especially for Christmas to New Year and February."] },
      { h: "Roads this winter", list: ["Sonamarg: reachable in winter through the Z-Morh tunnel (open since January 2025), but closures of a day or two after heavy snow are normal.", "Zojila (Sonamarg to Ladakh): closes for winter after heavy snow, usually in late autumn.", "Mughal Road (Peer Ki Gali): usually closed from about December to April.", "Razdan Pass (Gurez): closes with the first heavy snow, usually November.", "Jammu to Srinagar highway (NH44): open year-round but can close after heavy snow or landslides; keep a buffer day."] },
      { h: "Seasonal dates to know", list: ["Chillai Kalan, the coldest 40 days: 21 December to the end of January.", "Ski season in Gulmarg: about mid-December to March.", "Tulip Garden: opened 16 March in 2026 and 26 March in 2025; the 2027 date will be announced by the Floriculture Department.", "Amarnath Yatra: usually July to August; dates and registration are announced by the Shrine Board each spring."] },
      { h: "Travel advisories for foreign visitors", p: ["As of late 2026, the US State Department lists Jammu and Kashmir (except eastern Ladakh and Leh) at Level 4, 'Do Not Travel', and the UK advises against all travel to most of the region. A US review was mentioned publicly in August 2026, but no change had been reported by this update. Foreign visitors should read their government's current advice and check their insurance."] },
      { h: "Phones and payments", list: ["Prepaid SIMs issued outside J&K still do not work in J&K; postpaid does.", "UPI and cards work widely in Srinagar; carry cash for ponies, shikaras and small shops.", "Mobile data is weak in remote valleys such as Gurez and Daksum."] },
      {"h": "What changed earlier in 2026", "list": ["February: 14 tourist spots closed after April 2025 ordered reopened, including Yusmarg, Doodhpathri, the Tulip Garden and Thajiwas glacier.", "March: the Tulip Garden opened on 16 March, about ten days earlier than in 2025 because of a warm spring.", "Spring: Mughal Road, Zojila and Razdan Pass reopened in turn after winter.", "Summer: the Amarnath Yatra ran in July and August with heavy security and convoy timings on NH44."]},
      {"h": "Planning a trip this November and December", "list": ["Expect cold mornings and the first snow in Gulmarg and Sonamarg; pack warm layers and thermals.", "Book Christmas and New Year flights, Gulmarg rooms and Gondola tickets now; those weeks sell out.", "Plan Gurez and the Mughal Road only if your dates are early November and the roads are confirmed open.", "Choose heated hotels or higher-category houseboats with heaters from December.", "Keep a buffer day for flight or highway delays after snowfall."]},
      { h: "How we keep this page current", p: ["The Tavel Package editorial team updates this page when access rules, transport or seasonal dates change, and records the date at the top. Facts are checked against official announcements and established news reports. If you notice something out of date, tell us through the contact page."] },
    ],
    faqs: [
      { q: "Is Kashmir open for tourists now?", a: "Yes. Srinagar, Gulmarg, Pahalgam town and Sonamarg are open, and many spots closed after April 2025 were reopened in February 2026." },
      { q: "Is Baisaran open?", a: "It was still closed as of April 2026. Do not plan around it, and check the latest status before travel." },
      { q: "Is Doodhpathri open?", a: "Yes, it was among the spots reopened in February 2026. In winter, the road can close after heavy snow." },
      { q: "Is the Gulmarg Gondola open?", a: "It runs in all seasons, weather permitting. Tickets are sold online only through the J&K Cable Car Corporation." },
      { q: "Is there a train to Srinagar?", a: "Yes, Vande Bharat trains run from Katra to Srinagar. There is no direct train from Delhi yet." },
      { q: "Which roads close in winter in Kashmir?", a: "Zojila, the Mughal Road and Razdan Pass close in winter. Sonamarg stays reachable via the Z-Morh tunnel except after heavy snow." },
    ],
  },
];
