import type { GuideContent } from "@/lib/locations";

// Goa: North Goa, South Goa, Old Goa and key places, plus additions to the
// Goa destination guide. Rules: fact-based, no invented prices, no em dashes.

export const GOA_CITIES: Record<string, GuideContent> = {
  "north-goa": {
    intro:
      "North Goa is the busier half of Goa's coast, between the Mandovi river and the Maharashtra border. Its beaches (Calangute, Baga, Candolim, Anjuna and Vagator) have most of the state's nightlife, water sports, beach shacks and hotels, and Panaji, the capital, sits at its southern edge.\n\nMopa (Manohar International) airport is in North Goa, and Thivim station on the Konkan Railway is the nearest railhead for its beaches.",
    highlights: [
      "Calangute and Baga beaches, with water sports and beach shacks",
      "Fort Aguada and its 19th-century lighthouse at Sinquerim",
      "Anjuna's Wednesday flea market and Vagator's cliffs near Chapora Fort",
      "Fontainhas, the Latin quarter of Panaji",
    ],
    idealDuration: "3 to 4 days",
    bestMonths: "November to February",
    gateway: "Mopa airport (GOX) or Thivim station",
    faqs: [
      { q: "Which is better, North Goa or South Goa?", a: "North Goa for nightlife, water sports and lively beaches; South Goa for quieter, cleaner beaches and resorts. Many travellers stay two nights in each." },
    ],
  },

  "south-goa": {
    intro:
      "South Goa runs from the Zuari river to the Karnataka border and is the quieter side of Goa, with long, clean beaches such as Colva, Benaulim, Varca, Agonda and Palolem, and large beach resorts. Margao (Madgaon) is its main town and railway junction, and Dabolim airport is in the south.",
    highlights: [
      "Palolem's crescent beach and Butterfly Beach, reached by boat",
      "Colva and Benaulim beaches",
      "Cabo de Rama fort on the cliffs of Canacona",
      "Quiet resorts in Cavelossim and Varca",
    ],
    idealDuration: "2 to 4 days",
    bestMonths: "November to March",
    gateway: "Dabolim airport (GOI) or Madgaon station",
    sections: {
      "places-to-visit": {
        intro: "Places in South Goa include Palolem, Agonda, Colva, Benaulim and Butterfly beaches, Cabo de Rama fort, Margao's old houses and markets, and the Netravali wildlife sanctuary inland.",
      },
    },
  },

  "old-goa": {
    intro:
      "Old Goa, about 10 km east of Panaji, was the capital of Portuguese India. Its churches and convents were inscribed as a UNESCO World Heritage Site, the Churches and Convents of Goa, in 1986. The Basilica of Bom Jesus holds the relics of St. Francis Xavier, and the Se Cathedral is one of the largest churches in Asia.",
    highlights: [
      "Basilica of Bom Jesus",
      "Se Cathedral",
      "Church of St. Francis of Assisi and the Archaeological Museum",
      "Church of St. Cajetan and the ruins of the Church of St. Augustine",
    ],
    idealDuration: "Half a day",
    bestMonths: "November to February",
    gateway: "Panaji, 10 km",
    sections: {
      "things-to-do": {
        intro: "Things to do in Old Goa: visit the Basilica of Bom Jesus and the Se Cathedral, see the Archaeological Museum in the Church of St. Francis of Assisi, walk to the tower ruins of St. Augustine, and visit on a weekday morning to avoid crowds. Dress modestly, with shoulders and knees covered.",
      },
    },
  },
};

export const GOA_PLACES: Record<string, GuideContent> = {
  "north-goa/places-to-visit/baga-beach": {
    intro:
      "Baga Beach is one of North Goa's busiest beaches, just north of Calangute, about 16 km from Panaji. It is known for water sports, beach shacks and the nightlife of the lanes behind the beach, and the Baga creek marks its northern end.",
    facts: [
      { label: "Location", value: "Bardez, North Goa" },
      { label: "Best time", value: "November to February" },
    ],
    faqs: [
      { q: "What is Baga Beach famous for?", a: "Water sports such as parasailing and jet skis, beach shacks, and the nightlife around the lanes near the beach." },
      { q: "Is Baga Beach good for swimming?", a: "Only in the flagged safe zones and in the dry season. Lifeguards post red flags when the sea is rough, and swimming is unsafe in the monsoon (June to September)." },
    ],
  },

  "north-goa/places-to-visit/calangute-beach": {
    intro:
      "Calangute is the longest beach in North Goa and is often called the Queen of Beaches. It lies about 15 km from Panaji between Candolim and Baga, and is lined with shacks, markets, water-sports operators and hotels.",
    faqs: [
      { q: "Why is Calangute called the Queen of Beaches?", a: "Because it is the largest and most popular beach in North Goa, and the busiest part of the coast." },
    ],
  },

  "north-goa/places-to-visit/fort-aguada": {
    intro:
      "Fort Aguada is a Portuguese fort completed in 1612 at Sinquerim, on the headland where the Mandovi meets the Arabian Sea. It guarded the river and supplied water to passing ships from a freshwater spring, which gave the fort its name (agua means water). The lighthouse inside, built in 1864, is among the oldest in Asia.",
    facts: [
      { label: "Built", value: "1612" },
      { label: "Location", value: "Sinquerim, near Candolim, North Goa" },
    ],
  },

  "south-goa/places-to-visit/cabo-de-rama": {
    intro:
      "Cabo de Rama is a cliff-top fort in Canacona, South Goa, named after a legend that Lord Rama stayed here during his exile. The Portuguese took it in the 18th century. Its walls overlook the Arabian Sea, and a path leads down to the secluded Cabo de Rama beach below.",
    faqs: [
      { q: "How do I reach Cabo de Rama beach?", a: "Drive to the fort, about 25 km south of Margao, and take the steep path down to the beach. There are few facilities, so carry water." },
    ],
  },

  "old-goa/places-to-visit/basilica-of-bom-jesus": {
    intro:
      "The Basilica of Bom Jesus in Old Goa, consecrated in 1605, holds the mortal remains of St. Francis Xavier. It is part of the UNESCO-listed Churches and Convents of Goa and is one of the finest examples of Baroque architecture in India.",
  },
};

export const GOA_DESTINATION: Partial<GuideContent> = {
  packages: {
    intro: "Goa holiday packages usually run 3 to 5 days and combine a North Goa stay for beaches and nightlife with a day or two in South Goa or at Old Goa's churches. Family trips favour resorts with pools in Candolim or South Goa; budget trips use guest houses near Calangute, Baga or Anjuna.",
    itineraries: [
      {
        title: "4-day Goa itinerary",
        days: [
          "Arrive, check in, evening at Calangute or Baga beach.",
          "North Goa: Fort Aguada, Anjuna, Vagator and Chapora Fort.",
          "Old Goa churches, Panaji and Fontainhas, a spice farm near Ponda.",
          "South Goa: Colva or Palolem, then depart.",
        ],
      },
    ],
    blocks: [
      {
        heading: "Goa trip package for families",
        items: [
          "Stay in Candolim, Cavelossim or Varca for calmer beaches",
          "Pick hotels with pools and lifeguarded beaches",
          "Plan beach time for mornings and late afternoons",
          "Add Old Goa churches and a spice farm for a cultural day",
        ],
      },
      {
        heading: "Goa budget trip: what decides the price",
        items: [
          "Season: Christmas and New Year week costs the most",
          "Area: Baga, Calangute and Anjuna have more budget stays",
          "Travel: train to Madgaon or Thivim versus flights",
          "Scooter rental versus a private cab for sightseeing",
        ],
      },
    ],
    faqs: [
      { q: "What do Goa holiday packages include?", a: "Usually hotel stays with breakfast, airport or station transfers, and sightseeing tours of North and South Goa by cab. Water sports and cruises are usually extra." },
      { q: "Is Goa good for a family tour?", a: "Yes. Choose quieter beaches in Candolim or South Goa, resorts with pools, and add Old Goa and a spice farm for children." },
    ],
  },
  faqs: [
    { q: "Which is the best month to visit Goa?", a: "December and January have the best weather and the most events; November and February are also dry and less crowded. June to September is monsoon, when many shacks close." },
    { q: "Which are the famous churches in Goa?", a: "The Basilica of Bom Jesus and the Se Cathedral in Old Goa, the Church of Our Lady of the Immaculate Conception in Panaji, and the Church of St. Francis of Assisi." },
    { q: "What is the Sahakari Spice Farm in Goa?", a: "A spice plantation at Curti near Ponda, about 30 km from Panaji, offering guided walks through spice gardens and a traditional Goan lunch." },
  ],
};
