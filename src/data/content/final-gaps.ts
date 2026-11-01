import type { GuideContent } from "@/lib/locations";

// Last answers for specific searches, layered on top of all earlier content.
// Prices and timings point to official sources. No em dashes.

type S = Record<string, Partial<GuideContent>>;

export const FINAL_DESTINATIONS: S = {
  "south-india": {
    packages: {
      faqs: [
        { q: "Which are the best places to visit in South India?", a: "Munnar, Alleppey, Coorg, Mysore, Hampi, Ooty, Kodaikanal, Madurai, Kanyakumari, Pondicherry and Goa." },
        { q: "Which South India tourist places are best in summer?", a: "Hill stations such as Ooty, Kodaikanal, Munnar, Coorg, Wayanad and Yercaud." },
        { q: "Which are the best places to visit in August in South India?", a: "Coorg, Wayanad, Munnar and Athirappilly for monsoon waterfalls, and Kerala during the Onam season." },
        { q: "Which are the top tour destinations and tourist spots in South India?", a: "Munnar, Alleppey, Coorg, Mysore, Ooty, Kodaikanal, Hampi, Madurai, Rameswaram, Kanyakumari, Pondicherry and Goa." },
      ],
    },
  },
  kashmir: {
    sections: {
      "best-time-to-visit": {
        faqs: [{ q: "When is snowfall in Kashmir?", a: "Usually from December to February, heaviest in January; Gulmarg and Sonamarg can get early snowfall in November." }],
      },
    },
  },
  "madhya-pradesh": {
    faqs: [{ q: "Which are the hill stations in Madhya Pradesh?", a: "Pachmarhi, the only major hill station in the state, plus Amarkantak and the plateau town of Mandu." }],
  },
  lakshadweep: {
    packages: {
      fromOrigins: {
        ahmedabad: { intro: "Lakshadweep packages from Ahmedabad start with a flight to Kochi, then a flight to Agatti or a ship, with the entry permit arranged by the operator." },
      },
    },
  },
};

export const FINAL_CITIES: S = {
  kodaikanal: {
    packages: {
      fromOrigins: {
        chennai: {
          intro: "Chennai to Kodaikanal trip packages usually run 3 to 4 days by overnight train to Kodai Road or by road via Trichy, with two nights in Kodaikanal and an optional day in Madurai.",
          faqs: [{ q: "What does a Chennai to Kodaikanal trip package include?", a: "Train or cab from Chennai, two or three nights in Kodaikanal with breakfast, and a cab for sightseeing." }],
        },
      },
    },
  },
  ahmedabad: {
    packages: {
      themes: {
        "honeymoon-packages": {
          intro: "Honeymoon tour packages from Ahmedabad usually fly to Goa, Kerala, Kashmir, Andaman, Bali or Maldives, or drive to Udaipur and Mount Abu for a shorter trip.",
          faqs: [{ q: "What is the best honeymoon tour package from Ahmedabad?", a: "Udaipur and Mount Abu by road, or Goa, Kerala, Kashmir and Bali by air." }],
        },
      },
    },
  },
  pondicherry: { faqs: [{ q: "Which are the Pondicherry visiting places?", a: "White Town, Promenade Beach, Sri Aurobindo Ashram, Auroville, Paradise Beach and Serenity Beach." }] },
  hyderabad: {
    faqs: [
      { q: "What are the things to do in Hyderabad?", a: "See Charminar and Laad Bazaar, Golconda Fort's light show, Chowmahalla Palace, Salar Jung Museum, Ramoji Film City and eat Hyderabadi biryani." },
      { q: "How do I travel from Hyderabad to Gokarna?", a: "Fly or take a train to Hubli or Goa, then continue by road to Gokarna; overnight buses also run from Hyderabad." },
    ],
  },
  omkareshwar: { faqs: [{ q: "Which mandirs are in Omkareshwar?", a: "The Omkareshwar Jyotirlinga mandir on Mandhata island and the Mamleshwar mandir on the south bank." }] },
  pahalgam: { faqs: [{ q: "Where is Pahalgam in Jammu and Kashmir?", a: "In Anantnag district of the Kashmir valley, about 95 km from Srinagar on the Lidder river." }] },
  bangalore: {
    faqs: [
      { q: "Which is the best lake in Bangalore?", a: "Ulsoor, Sankey and Hebbal lakes are the most visited; Lalbagh also has its own lake." },
      { q: "Is there a wildlife sanctuary in Bangalore?", a: "Bannerghatta National Park, about 22 km south, has a safari, zoo and butterfly park." },
      { q: "What are the things to buy in Bangalore?", a: "Mysore silk, sandalwood products, Channapatna wooden toys and Bidriware from government emporiums." },
      { q: "What are Bangalore special gifts?", a: "Channapatna toys, Mysore silk, sandalwood soap and filter coffee." },
    ],
  },
  coorg: { faqs: [{ q: "Which adventure sports in Coorg are popular?", a: "Barapole rafting in the monsoon, Dubare rafting, treks to Tadiandamol and ziplining." }] },
  diu: { faqs: [{ q: "What is good for shopping in Diu?", a: "Dried seafood, shell crafts and souvenirs near the main market and fort area." }] },



};

export const FINAL_PLACES: S = {
  "bangalore/places-to-visit/lalbagh": {
    faqs: [
      { q: "What is Lalbagh Garden in Bengaluru known for?", a: "Its glasshouse, flower shows, 18th-century origins under Hyder Ali and Tipu Sultan, and rare trees." },
      { q: "What is the Lalbagh ticket price?", a: "A small entry fee, higher during flower shows; check the Karnataka horticulture department for the current price." },
    ],
  },
  "bangalore/places-to-visit/bangalore-palace": {
    faqs: [{ q: "Where can I buy Bangalore Palace tickets?", a: "At the gate on Palace Road; prices differ for Indian and foreign visitors and for camera use." }],
  },
};

// New city guides (not present in earlier batches).
export const FINAL_NEW_CITIES: Record<string, GuideContent> = {
  srisailam: {
    intro: "Srisailam in the Nallamala hills of Andhra Pradesh is home to the Mallikarjuna Jyotirlinga and Srisailam dam on the Krishna, about 210 km from Hyderabad.",
    idealDuration: "1 day",
    bestMonths: "October to March",
    gateway: "Hyderabad",
    faqs: [{ q: "What is special about the Mallikarjuna temple at Srisailam?", a: "It is both one of the 12 Jyotirlingas and one of the 18 Shakti Peethas (Bhramaramba)." }],
  },  visakhapatnam: {
    intro: "Visakhapatnam (Vizag) is Andhra Pradesh's port city, known for RK Beach, Kailasagiri, the INS Kursura submarine museum, and the Simhachalam temple. It is the gateway to Araku Valley, about 115 km away.",
    idealDuration: "2 days",
    bestMonths: "October to March",
    gateway: "Visakhapatnam airport (VTZ)",
    faqs: [{ q: "Which is the famous temple in Visakhapatnam?", a: "Sri Varaha Lakshmi Narasimha temple at Simhachalam, about 16 km from the city." }],
  },  warangal: {
    intro: "Warangal in Telangana was the Kakatiya capital, known for Warangal Fort, the Thousand Pillar Temple and the UNESCO-listed Ramappa temple at Palampet.",
    idealDuration: "1 day",
    bestMonths: "October to February",
    gateway: "Hyderabad (about 150 km)",
    faqs: [{ q: "Are there waterfalls near Warangal?", a: "Bogatha waterfall in Mulugu district is the best known, full during and after the monsoon; Laknavaram lake is also nearby." }],
  },};
