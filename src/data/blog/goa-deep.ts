import type { BlogPost } from "./types";

// Full Goa guides: rewrites of thin posts keyed by slug (same URL and title)
// plus new guides. Factual, no em dashes, no invented prices.

export const GOA_UPGRADES: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = {
  "goa-4-nights-5-days-plan": {
    intro:
      "A 4 nights 5 days Goa trip works best split between the two halves of the state: two nights in North Goa for Baga, Calangute, Anjuna, Vagator and Fort Aguada, a day for Panaji and Old Goa's churches, and two nights in South Goa for quieter beaches such as Palolem, Colva and Agonda. Travel between November and February for the best weather, book early for Christmas and New Year, and hire a cab or scooter, as public transport between beaches is limited.",
    sections: [
      {
        h: "4 nights 5 days Goa itinerary",
        days: [
          "Arrive at Mopa (North Goa) or Dabolim airport, or Madgaon or Thivim station. Check in to a North Goa hotel; sunset at Baga or Calangute.",
          "North Goa: Fort Aguada, Sinquerim, Candolim, Anjuna flea market (Wednesdays in season), Chapora Fort and Vagator at sunset.",
          "Panaji and Old Goa: Fontainhas Latin quarter, Basilica of Bom Jesus, Se Cathedral, a Mandovi river cruise in the evening. Move to South Goa.",
          "South Goa: Cabo de Rama fort, Agonda and Palolem; a boat trip to Butterfly Beach or dolphin spotting.",
          "Morning on the beach, then depart.",
        ],
      },
      {
        h: "Where to stay",
        list: [
          "North Goa: Candolim and Calangute for convenience, Anjuna and Vagator for a younger vibe, Morjim and Ashwem for quieter beaches",
          "South Goa: Palolem and Agonda for beach huts and calm water, Colva, Benaulim and Cavelossim for resorts",
          "Panaji: heritage stays in Fontainhas for culture lovers",
          "Splitting the stay saves long daily drives between north and south",
        ],
      },
      {
        h: "Getting to Goa",
        list: [
          "Air: Manohar International Airport at Mopa in North Goa and Dabolim Airport near Vasco in South Goa",
          "Rail: Madgaon (Margao) and Thivim are the main stations on the Konkan Railway",
          "Road: national highways connect Goa with Mumbai, Pune, Belagavi and Mangaluru",
          "Choose the airport closest to where you stay first; Mopa to Palolem is a long drive",
        ],
      },
      {
        h: "Getting around",
        p: [
          "Goa's beaches are spread out and buses are slow, so most visitors hire a private cab for sightseeing days, or rent a scooter with a valid licence and helmet. App cabs have limited coverage, and taxis work on local rates, so agree the fare before starting. For a 5-day trip, a cab for the sightseeing days plus walking around your beach is usually the most comfortable mix.",
        ],
      },
      {
        h: "Best time for a 5-day Goa trip",
        list: [
          "November to February: dry, sunny and pleasant; the peak season",
          "Late December: Christmas and New Year crowds and the highest prices",
          "March to May: hot and humid, quieter beaches",
          "June to September: monsoon, green landscapes, rough sea and suspended water sports",
        ],
      },
      {
        h: "Things to do",
        list: [
          "Water sports at Baga, Calangute and Candolim in season: parasailing, jet ski, banana boat",
          "Mandovi river sunset cruise from Panaji",
          "Dudhsagar Falls trip from Mollem, depending on season and access rules",
          "Spice plantation tour near Ponda",
          "Saturday night markets at Arpora and Baga in season",
          "Kayaking in the backwaters of the Sal river or at Nerul",
        ],
      },
      {
        h: "Food to try",
        list: [
          "Fish curry rice, Goa's everyday staple",
          "Prawn balchão, chicken xacuti and pork vindaloo",
          "Recheado mackerel and kingfish fry at beach shacks",
          "Ros omelette and poee bread at street stalls",
          "Bebinca, the layered coconut dessert",
        ],
      },
      {
        h: "Plan variations",
        list: [
          "Couples: swap a North Goa night for an extra night in Palolem or Agonda",
          "Families: base in Candolim or Benaulim, which have calmer beaches and resorts",
          "Groups: two nights near Baga for nightlife and a Dudhsagar day",
          "Culture lovers: add a full day in Panaji, Old Goa and Divar island",
        ],
      },
      {
        h: "What affects the cost",
        list: [
          "Season, with prices peaking from mid-December to early January",
          "Hotel category and beach location",
          "Flights or trains and which airport you use",
          "Cab days and water sports",
        ],
        p: ["Share your dates and budget on Tavel Package to get up to 3 itemised Goa quotes from verified agents."],
      },
      {
        h: "Practical tips",
        list: [
          "Swim only in flagged areas where lifeguards are present, and never in the monsoon sea",
          "Carry sunscreen, a hat and water",
          "Respect the dress code in churches and temples",
          "Book Christmas and New Year stays months ahead",
        ],
      },
      {
        h: "North Goa beaches in brief",
        p: [
          "Calangute and Baga are the busiest beaches, with water sports, shacks and nightlife close together.",
          "Candolim and Sinquerim are calmer, sit below Fort Aguada and suit families.",
          "Anjuna is known for its rocky shore and Wednesday flea market, Vagator for cliffs and sunsets below Chapora Fort, and Morjim and Ashwem for quiet sand and olive ridley turtle nesting in season.",
        ],
      },
      {
        h: "South Goa beaches in brief",
        p: [
          "Colva and Benaulim are long, open beaches with resorts and local life.",
          "Varca, Cavelossim and Mobor have upscale resorts on quiet sand near the Sal river mouth.",
          "Agonda, Palolem and Patnem in Canacona are the favourites for beach huts, calm water and slow days, with Cola and Butterfly Beach nearby.",
        ],
      },
      {
        h: "Packing for Goa",
        list: [
          "Light cotton clothes, swimwear and a cover-up",
          "Sunscreen, sunglasses and a hat",
          "Comfortable sandals and one pair of walking shoes for forts and churches",
          "Modest clothes for church and temple visits",
          "A light rain jacket if travelling in October or the monsoon",
        ],
      },
    ],
    faqs: [
      { q: "Is 4 nights 5 days enough for Goa?", a: "Yes. It covers North Goa, Panaji and Old Goa, and South Goa's quieter beaches at a relaxed pace." },
      { q: "Should I stay in North or South Goa?", a: "Split the stay: two nights in North Goa and two in South Goa." },
      { q: "Which airport is better for Goa?", a: "Mopa for North Goa and Dabolim for South Goa. Choose based on where you stay first." },
      { q: "What is the best month for a Goa trip?", a: "November to February, when the weather is dry and pleasant." },
      { q: "Are water sports available in monsoon?", a: "Water sports are usually suspended during the monsoon, from about June to September." },
      { q: "How do I get around Goa?", a: "By private cab or a rented scooter; public transport between beaches is limited." },
    ],
  },

  "goa-honeymoon-guide": {
    intro:
      "Goa is one of India's easiest honeymoon destinations: sunsets over the Arabian Sea, quiet South Goa beaches, heritage stays in Portuguese-era houses and good food. Most couples spend a night or two in North Goa for the cafes and nightlife, then three nights in South Goa at Palolem, Agonda, Cola or Patnem for calm beaches and privacy. November to February is the best weather; the monsoon from June to September is green, quiet and good value for couples who enjoy rain.",
    sections: [
      {
        h: "5-day Goa honeymoon itinerary",
        days: [
          "Arrive and check in to a North Goa stay in Candolim or Ashwem. Sunset at Fort Aguada.",
          "Panaji's Fontainhas quarter, Old Goa churches and a sunset cruise on the Mandovi.",
          "Move to South Goa via Cabo de Rama; sunset at Agonda.",
          "Boat trip from Palolem to Butterfly Beach and Honeymoon Beach; candle-light dinner.",
          "A slow morning on the beach and depart.",
        ],
      },
      {
        h: "Best beaches for couples",
        list: [
          "Agonda: long, quiet and clean, with beach huts",
          "Palolem: a crescent bay with calm water and kayaking",
          "Patnem: small and peaceful, next to Palolem",
          "Cola Beach: a lagoon beside the sea, reached by a rough track",
          "Ashwem and Mandrem: the quieter end of North Goa",
          "Butterfly Beach: a secluded cove reached by boat",
        ],
      },
      {
        h: "Where to stay",
        list: [
          "Boutique heritage villas in Assagao, Siolim and Fontainhas",
          "Beachfront cottages in Agonda, Palolem and Patnem",
          "Luxury resorts in Cavelossim, Mobor and Benaulim in South Goa",
          "Ask about honeymoon extras such as room decoration, a cake and private dinners",
        ],
      },
      {
        h: "Romantic things to do",
        list: [
          "Sunset at Chapora Fort, Fort Aguada or Cabo de Rama",
          "A private candle-light dinner on the beach",
          "Dolphin spotting by boat from Palolem or Sinquerim",
          "A couple's spa day",
          "Kayaking through the mangroves",
          "A walk through Fontainhas' colourful lanes",
        ],
      },
      {
        h: "Best time for a Goa honeymoon",
        list: [
          "November to February: the best weather and the most activity",
          "December: festive and crowded, book early",
          "March to May: hot, but quieter and good value",
          "June to September: monsoon romance, green landscapes and the lowest prices; the sea is rough and shacks close",
        ],
      },
      {
        h: "Monsoon honeymoon in Goa",
        p: [
          "The monsoon is underrated for couples. The landscape turns green, waterfalls fill, villages are quiet, and luxury resorts often offer good deals. Beach shacks close and the sea is unsafe for swimming, so the trip becomes about resort time, drives through the countryside, spice plantations and food. Pack light rain gear and keep plans flexible.",
        ],
      },
      {
        h: "Food and dining",
        p: [
          "Goa has some of India's best restaurants for couples, from beach shacks serving fresh seafood to fine-dining in Assagao and Panaji. Try a Goan thali, prawn balchão, chicken cafreal and bebinca, and spend an evening at a restaurant with live music. In South Goa, quieter beach restaurants serve candle-lit dinners on the sand in season.",
        ],
      },
      {
        h: "Getting around as a couple",
        p: [
          "A private cab is easiest for moving between North and South Goa and for sightseeing days. Many couples rent a scooter for short trips near their stay; carry a licence and wear helmets. Avoid driving after drinking and at night on unlit roads.",
        ],
      },
      {
        h: "Shopping",
        list: [
          "Cashew nuts and feni from local shops",
          "Goan spices from spice plantations",
          "Azulejos, hand-painted Portuguese-style tiles",
          "Clothes and jewellery at the Anjuna flea market and Arpora night market",
        ],
      },
      {
        h: "Getting honeymoon quotes",
        p: [
          "Share your dates, preferred beaches and budget on Tavel Package. Up to 3 verified Goa agents send itemised honeymoon packages with stays, cab and extras.",
        ],
      },
      {
        h: "Heritage stays and villages",
        p: [
          "For a different side of Goa, stay in a restored Portuguese-era villa in Assagao, Siolim, Chandor or Loutolim. These villages have tree-lined lanes, old mansions with balcaos (verandahs) and family chapels. Chandor's Braganza House and the Figueiredo Mansion in Loutolim open for visits, and a drive through the countryside makes a quiet, romantic day away from the beaches.",
        ],
      },
      {
        h: "Honeymoon add-ons",
        list: [
          "A sunset dinner cruise on the Mandovi",
          "A private yacht or boat hire for a few hours",
          "A photo shoot at Fontainhas or a quiet beach",
          "A day trip to Dudhsagar Falls when access is open",
          "A couple's cooking class in a village home",
        ],
      },
      {
        h: "Safety tips for couples",
        list: [
          "Swim only between lifeguard flags",
          "Avoid isolated beaches after dark",
          "Use registered cabs and agree fares in advance",
          "Keep valuables in the hotel safe",
        ],
      },
      {
        h: "Planning around Christmas and New Year",
        p: [
          "Many couples marry in November and December, so honeymoon demand in Goa peaks just as the Christmas and New Year rush begins. If your dates fall in the last two weeks of December, book flights and your South Goa stay as early as possible, check whether New Year's Eve dinners are compulsory and charged separately, and expect busier beaches in North Goa. Early December or the second half of January gives the same weather with fewer crowds and better rates, and the first half of February is just as pleasant before the heat builds.",
          "If you prefer a quieter trip, base the whole honeymoon in South Goa and visit North Goa as a day trip for Fort Aguada, Chapora and the cafes of Assagao.",
        ],
      },
    ],
    faqs: [
      { q: "Is Goa good for a honeymoon?", a: "Yes. Beaches, sunsets, heritage stays and good food make it one of India's top honeymoon destinations." },
      { q: "North Goa or South Goa for honeymoon?", a: "South Goa for quiet beaches and privacy; add a night or two in North Goa for cafes and nightlife." },
      { q: "Which is the best month for a Goa honeymoon?", a: "November to February for the best weather; the monsoon for quiet, green and good-value stays." },
      { q: "How many days are ideal for a Goa honeymoon?", a: "Five days covers North and South Goa comfortably." },
      { q: "Is Goa good for a honeymoon in monsoon?", a: "Yes, for resort stays and green landscapes, but beach shacks close and the sea is unsafe for swimming." },
      { q: "What are the most romantic beaches in Goa?", a: "Agonda, Palolem, Patnem, Cola and Butterfly Beach." },
    ],
  },

  "goa-family-trip": {
    intro:
      "Goa is an easy family holiday with gentle beaches, resorts with pools, forts, churches, spice plantations and plenty of familiar food. Families usually base themselves in Candolim or Benaulim, where beaches are calmer and resorts are child-friendly, and keep sightseeing to half days. November to February is the most comfortable weather. Choose lifeguard-patrolled beaches, avoid the sea entirely in the monsoon, and book family rooms or villas early for school holidays.",
    sections: [
      {
        h: "5-day Goa family itinerary",
        days: [
          "Arrive and settle into the resort. Evening on the beach.",
          "Fort Aguada and the lighthouse, Candolim beach and a short boat trip to spot dolphins.",
          "Old Goa churches and the Mandovi river cruise from Panaji.",
          "Spice plantation tour near Ponda with a traditional lunch, and the Mangueshi temple.",
          "Relaxed morning at the pool and depart.",
        ],
      },
      {
        h: "Best beaches for families",
        list: [
          "Candolim: wide and less crowded than Baga, with lifeguards",
          "Benaulim and Varca in South Goa: clean, calm and quiet",
          "Colva: long and busy, with plenty of facilities",
          "Palolem: calm water in season, good for paddling with care",
          "Miramar near Panaji: an easy evening beach",
        ],
      },
      {
        h: "Where to stay with children",
        list: [
          "Resorts in Candolim, Sinquerim, Benaulim and Cavelossim with pools and kids' clubs",
          "Villas or apartments in North Goa for larger families",
          "Hotels near Panaji for easy sightseeing",
          "Ask for family rooms, interconnecting rooms or extra beds in advance",
        ],
      },
      {
        h: "Activities children enjoy",
        list: [
          "Dolphin-spotting boat trips",
          "Spice plantation tours with a traditional Goan lunch",
          "Mandovi river cruises with Goan dance shows",
          "Splash parks and resort pools",
          "Exploring forts such as Aguada, Chapora and Reis Magos",
          "Butterfly conservatory near Ponda",
        ],
      },
      {
        h: "Beach safety",
        list: [
          "Swim only in flagged zones with lifeguards",
          "Watch for red flags and rip currents, and follow lifeguard instructions",
          "Never let children into the sea in the monsoon",
          "Keep children in shade during the midday heat and carry water",
          "Choose registered water sports operators with life jackets",
        ],
      },
      {
        h: "Best time for a family trip",
        list: [
          "November to February: pleasant and dry",
          "Christmas and New Year: festive but crowded and expensive",
          "Summer holidays in April and May: hot and humid, but resort pools help",
          "Monsoon: green and quiet, but beaches are off-limits for swimming",
        ],
      },
      {
        h: "Food for families",
        p: [
          "Goa has plenty of child-friendly food alongside Goan dishes: North Indian, Chinese, continental and vegetarian menus are easy to find, especially in North Goa. Try mild Goan dishes such as fish fry, chicken cafreal and poee bread, and the dessert bebinca. Most resorts have buffet breakfasts and can adapt meals for small children.",
        ],
      },
      {
        h: "Getting around",
        p: [
          "A private cab or a tempo traveller for larger families is the easiest way to sightsee, as distances are long and buses are not suited to families. Mention car seats if you need them when booking.",
        ],
      },
      {
        h: "Packing list",
        list: [
          "Sunscreen, hats and light cotton clothes",
          "Swimwear and beach toys",
          "Insect repellent",
          "Basic medicines and ORS",
          "Modest clothes for church and temple visits",
        ],
      },
      {
        h: "Getting family quotes",
        p: [
          "Share the number of adults and children, their ages, your dates and preferred area on Tavel Package. Up to 3 verified Goa agents send itemised family packages.",
        ],
      },
      {
        h: "Adding South Goa for a 6-day trip",
        p: [
          "With an extra day, split the stay: three nights in North Goa and two in South Goa. Visit Cabo de Rama fort, the calm water at Palolem, and Cotigao Wildlife Sanctuary near Canacona, where short forest walks and a watchtower suit older children. The drive from North to South Goa takes around two to three hours.",
        ],
      },
      {
        h: "Rainy-day and indoor options",
        list: [
          "Museum of Goa in Pilerne, with contemporary art",
          "Houses of Goa museum in Torda",
          "Goa Chitra museum in Benaulim, with traditional tools and crafts",
          "Resort pools, games rooms and spas",
          "Bakeries and cafes in Panaji",
        ],
      },
      {
        h: "Budgeting for a family trip",
        p: [
          "Family costs depend on room type, season, flights for everyone and cab days. Villas or apartments can be good value for larger families, and travelling in November or February avoids the peak Christmas prices while keeping the best weather.",
        ],
      },
      {
        h: "Travelling with grandparents",
        p: [
          "Goa suits multi-generation trips if the pace is gentle. Choose a resort with lifts or ground-floor rooms, short walking distances to the beach and a restaurant on site. Old Goa's churches are flat and easy to walk, and river cruises are comfortable for older travellers. Avoid long midday outings, schedule sightseeing for mornings, and keep afternoons for rest. A private cab with the same driver for the whole trip makes days easier for everyone.",
          "If grandparents are keen on temples, add the Mangueshi and Shantadurga temples near Ponda, which are easy to visit with a cab and close to the spice plantations.",
          "Carry regular medicines, a copy of prescriptions and comfortable footwear, and ask the hotel in advance about wheelchair access, grab rails and step-free routes to the pool and beach if needed.",
        ],
      },
    ],
    faqs: [
      { q: "Is Goa good for a family trip?", a: "Yes. Calm beaches, resorts with pools, forts, churches and easy food make it family-friendly." },
      { q: "Which beach in Goa is best for families?", a: "Candolim in North Goa and Benaulim or Varca in South Goa are calmer and less crowded." },
      { q: "Is Goa safe for children?", a: "Yes, with sensible precautions: swim only in lifeguard zones, avoid the sea in the monsoon, and protect children from the sun." },
      { q: "What is the best time for Goa with kids?", a: "November to February for pleasant, dry weather." },
      { q: "Where should a family stay in Goa?", a: "In a resort in Candolim, Sinquerim, Benaulim or Cavelossim." },
      { q: "How many days are enough for a family Goa trip?", a: "Four to five days, with half-day sightseeing and plenty of pool and beach time." },
    ],
  },

  "december-holiday-destinations-india": {
    intro:
      "December is peak holiday season across India: Goa for Christmas and New Year parties, Kerala for backwaters and beaches, Rajasthan for desert forts in mild winter sun, the Andaman Islands for clear seas, and Kashmir, Gulmarg and Auli for snow. The weather is ideal in most of the south and west, while the north is cold and foggy. Because it is the busiest month of the year, book flights and stays early, especially for the week from Christmas to New Year.",
    sections: [
      {
        h: "Best December destinations at a glance",
        list: [
          "Goa: Christmas mass, New Year parties and warm beaches",
          "Kerala: backwaters of Alleppey, beaches of Varkala and Kovalam, and cool Munnar",
          "Rajasthan: Jaipur, Udaipur, Jodhpur and the Jaisalmer desert",
          "Andaman Islands: Havelock and Neil Island for diving and beaches",
          "Kashmir: snow in Gulmarg and Pahalgam",
          "Uttarakhand and Himachal: snow in Auli, Manali and Shimla",
          "Pondicherry: French quarter and Christmas celebrations",
        ],
      },
      {
        h: "Goa in December",
        p: [
          "Goa is India's best-known December destination. The weather is dry and warm, churches hold midnight mass on Christmas Eve, the Feast of St Francis Xavier is celebrated in Old Goa on 3 December, and beaches and clubs host New Year's Eve parties. It is also the most expensive and crowded time, so book flights and hotels months ahead.",
        ],
      },
      {
        h: "Kerala in December",
        p: [
          "Kerala's weather is pleasant after the monsoon. Houseboats on the Alleppey and Kumarakom backwaters, cliff-top Varkala, Kovalam's beaches, and cool, misty Munnar and Thekkady make an easy 6 to 8 day circuit. Christmas is widely celebrated in Kerala, with lit-up churches and star lanterns.",
        ],
      },
      {
        h: "Rajasthan in December",
        p: [
          "Rajasthan's days are sunny and mild in December, ideal for forts and palaces, while nights in the desert are cold. Jaipur, Jodhpur, Udaipur and Jaisalmer are the classic circuit, and desert camps near Jaisalmer host New Year celebrations. Pack warm layers for evenings.",
        ],
      },
      {
        h: "Snow destinations in December",
        list: [
          "Gulmarg in Kashmir usually has snow by late December",
          "Auli in Uttarakhand for snow and views of Nanda Devi",
          "Manali and Solang Valley in Himachal, with snow likely later in the month",
          "Shimla and Kufri, with occasional December snow",
          "Snow is never guaranteed; plan for cold even without it",
        ],
      },
      {
        h: "Beaches and islands",
        list: [
          "Andaman Islands: Radhanagar Beach on Havelock, diving and snorkelling",
          "Gokarna in Karnataka: quieter beaches than Goa",
          "Varkala and Kovalam in Kerala",
          "Pondicherry's promenade and nearby Auroville",
          "Lakshadweep for travellers who arrange permits early",
        ],
      },
      {
        h: "International options in December",
        list: [
          "Thailand and Vietnam: dry season in many regions",
          "Dubai: pleasant winter weather and the Dubai Shopping Festival season",
          "Sri Lanka: the south and west coasts are in season",
          "Singapore and Malaysia: festive lights, with some rain",
        ],
      },
      {
        h: "Booking tips for December",
        list: [
          "Book flights and hotels two to three months ahead for Christmas and New Year",
          "Travel in the first half of December for lower prices",
          "Keep a buffer day for fog delays in North India",
          "Check whether New Year's Eve gala dinners are compulsory and charged separately",
        ],
      },
      {
        h: "Choosing the right December trip",
        p: [
          "Couples often pick Goa, Kerala or the Andamans; families pick Rajasthan or Kerala; and snow seekers pick Gulmarg, Auli or Manali. Share your budget and dates on Tavel Package, and up to 3 verified agents will suggest itineraries for your chosen destination.",
        ],
      },
      {
        h: "Pondicherry and Tamil Nadu in December",
        p: [
          "Pondicherry's French quarter, promenade and churches are festive at Christmas, and nearby Auroville offers a quieter break. December can bring some rain to the Tamil Nadu coast from the northeast monsoon, so keep plans flexible. Mahabalipuram's shore temples are a short drive away.",
        ],
      },
      {
        h: "Rann of Kutch and the Rann Utsav",
        p: [
          "In Gujarat, the white salt desert of the Rann of Kutch hosts the Rann Utsav festival in winter, usually from November to February, with tent cities, folk music and full-moon nights on the salt flats. December is one of the best months to visit, with cool nights and clear days.",
        ],
      },
      {
        h: "Wildlife in December",
        list: [
          "Ranthambore and Jim Corbett for tiger safaris in cool weather",
          "Bharatpur's Keoladeo National Park for winter migratory birds",
          "Kaziranga in Assam for rhinos, usually open from November",
          "Book safari permits well in advance",
        ],
      },
      {
        h: "Kerala, Goa or Rajasthan: which to choose",
        p: [
          "Choose Goa for beaches, nightlife and Christmas celebrations; Kerala for a slower trip mixing backwaters, hills and beaches; and Rajasthan for forts, palaces and desert camps in crisp winter sunshine. Goa is the most expensive in Christmas week, Kerala offers the most variety in one trip, and Rajasthan is best for families who enjoy history. All three can be combined with a short flight, for example Goa with Kerala, or Rajasthan with Agra.",
          "Travellers who want snow and sun in one trip can pair Kashmir or Himachal with Goa or Kerala, flying between them, though this needs a longer holiday of at least ten days.",
        ],
      },
    ],
    faqs: [
      { q: "Which is the best place to visit in India in December?", a: "Goa, Kerala, Rajasthan and the Andaman Islands for good weather; Kashmir, Auli and Manali for snow." },
      { q: "Where can I see snow in India in December?", a: "Gulmarg, Auli, Manali and Shimla often have snow, especially later in the month." },
      { q: "Is Goa good in December?", a: "Yes, it is peak season with Christmas and New Year celebrations, but it is crowded and expensive." },
      { q: "Is Kerala good to visit in December?", a: "Yes. The weather is pleasant and the backwaters, beaches and hills are all in season." },
      { q: "When should I book a December holiday?", a: "Two to three months ahead, especially for Christmas and New Year week." },
      { q: "Which international destinations are good in December?", a: "Thailand, Vietnam, Dubai and Sri Lanka's south coast." },
    ],
  },
};

export const GOA_DEEP: BlogPost[] = [
  {
    slug: "old-goa-heritage-guide",
    title: "Old Goa Heritage Guide: Bom Jesus, Se Cathedral and the UNESCO Churches",
    description: "Old Goa guide: Basilica of Bom Jesus, Se Cathedral, St Francis of Assisi, St Augustine ruins, the museum, timings, dress code and a Panaji walking plan.",
    category: "Itineraries",
    destination: "goa",
    city: "old-goa",
    date: "2026-11-02",
    intro:
      "Old Goa, about 10 km east of Panaji on the Mandovi river, was the capital of Portuguese India and once one of the richest cities in Asia. Its churches and convents are a UNESCO World Heritage Site, led by the Basilica of Bom Jesus, which holds the relics of St Francis Xavier, and the vast Se Cathedral. A half day covers the main churches; a full day adds the museum, the St Augustine ruins and Panaji's Fontainhas quarter. Dress modestly and visit in the morning to avoid heat and crowds.",
    sections: [
      {
        h: "Basilica of Bom Jesus",
        p: [
          "Completed in the early 17th century, the Basilica of Bom Jesus is the most famous church in Goa. Its baroque facade of red laterite contrasts with a gilded interior, and it holds the mortal remains of St Francis Xavier in a silver casket. The relics are displayed to the public at a special exposition held at intervals of several years, which draws huge numbers of pilgrims. The Feast of St Francis Xavier on 3 December is Old Goa's biggest day.",
        ],
      },
      {
        h: "Se Cathedral",
        p: [
          "Across the square, Se Cathedral is one of the largest churches in Asia, dedicated to St Catherine of Alexandria. Its tower houses the Golden Bell, one of the largest in Goa, and the interior has a gilded main altar and several chapels. The building took most of a century to complete.",
        ],
      },
      {
        h: "Other churches and sites",
        list: [
          "Church of St Francis of Assisi, with a richly painted interior, next to the cathedral",
          "Archaeological Museum in the old convent, with portraits of Portuguese governors and sculptures",
          "Church of St Cajetan, modelled on St Peter's in Rome",
          "Ruins of the Church of St Augustine, with its tall surviving tower",
          "Viceroy's Arch, the old gateway to the city from the river",
          "Chapel of St Catherine, one of the oldest buildings in Old Goa",
        ],
      },
      {
        h: "Half-day Old Goa walking plan",
        days: [
          "Start at the Basilica of Bom Jesus when it opens.",
          "Cross to Se Cathedral and the Church of St Francis of Assisi.",
          "Visit the Archaeological Museum.",
          "Walk to the Church of St Cajetan and the Viceroy's Arch.",
          "Finish at the St Augustine ruins on Holy Hill.",
        ],
      },
      {
        h: "Panaji's Fontainhas quarter",
        p: [
          "Combine Old Goa with Fontainhas, Panaji's Latin quarter, where narrow lanes are lined with brightly painted Portuguese-era houses, tiled name plates and small cafes. The white Church of Our Lady of the Immaculate Conception sits at the top of a zigzag staircase in the city centre. Fontainhas is best explored on foot in the late afternoon.",
        ],
      },
      {
        h: "Divar island",
        p: [
          "A short free ferry ride from Old Goa crosses the Mandovi to Divar island, a quiet place of paddy fields, old houses and churches. It is an easy addition for cyclists and travellers who want a glimpse of village Goa.",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "November to February: pleasant weather for walking",
          "3 December: the Feast of St Francis Xavier, with huge crowds",
          "Christmas: midnight mass and decorations",
          "March to May: hot; go early in the morning",
          "Monsoon: green and atmospheric, with fewer visitors",
        ],
      },
      {
        h: "Dress code and etiquette",
        list: [
          "Cover shoulders and knees; churches may refuse entry otherwise",
          "Keep voices low and follow photography rules inside",
          "Do not disturb services in progress",
          "Check church timings, as some close in the afternoon",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Old Goa is about 10 km from Panaji, 20 to 30 minutes by road. Buses run from Panaji's Kadamba bus stand, but a cab is easier for combining Old Goa with Ponda's temples or a spice plantation. From North Goa beaches it is about an hour.",
        ],
      },
      {
        h: "Adding Old Goa to a package",
        p: [
          "Most Goa packages include a half-day Old Goa tour. Ask agents on Tavel Package to add Fontainhas, Divar island or a heritage stay in Panaji.",
        ],
      },
      {
        h: "History of Old Goa",
        p: [
          "The Portuguese captured Goa in 1510 under Afonso de Albuquerque, and the city on the Mandovi grew into the capital of their eastern empire, with grand churches, convents and a busy port. Epidemics and the silting of the river led to its decline from the 17th century, and the capital moved to Panaji in the 19th century. What remains today is a quiet riverside complex of monumental churches standing among lawns and ruins.",
        ],
      },
      {
        h: "Hindu temples near Old Goa",
        list: [
          "Shri Mangueshi Temple near Ponda, with its lamp tower",
          "Shri Shantadurga Temple at Kavlem",
          "Mahalasa Narayani Temple at Mardol",
          "These can be combined with Old Goa in a day with a cab",
        ],
      },
      {
        h: "Photography tips",
        list: [
          "The Basilica's facade glows in late afternoon light",
          "Photography is restricted inside some churches and the museum",
          "Use a wide lens for Se Cathedral's interior where permitted",
          "Visit early to avoid tour groups in your frame",
        ],
      },
      {
        h: "Where to stay for a heritage trip",
        p: [
          "Panaji is the most convenient base, with heritage guest houses in Fontainhas and hotels along the Mandovi. Some travellers stay in restored villas in the villages of Divar, Chorao or Ribandar, close to Old Goa and away from the beach crowds.",
        ],
      },
    ],
    faqs: [
      { q: "Why is Old Goa famous?", a: "For its Portuguese-era churches and convents, a UNESCO World Heritage Site, led by the Basilica of Bom Jesus and Se Cathedral." },
      { q: "Where are St Francis Xavier's relics?", a: "In the Basilica of Bom Jesus, in a silver casket." },
      { q: "How far is Old Goa from Panaji?", a: "About 10 km, roughly 20 to 30 minutes by road." },
      { q: "How much time do I need in Old Goa?", a: "A half day for the main churches; a full day with the museum, ruins and Fontainhas." },
      { q: "Is there a dress code in Old Goa churches?", a: "Yes. Cover shoulders and knees." },
      { q: "When is the Feast of St Francis Xavier?", a: "On 3 December every year." },
    ],
  },

  {
    slug: "goan-food-guide",
    title: "Goan Food Guide: Fish Curry Rice, Xacuti, Vindaloo, Bebinca and Feni",
    description: "Goan food guide: fish curry rice, xacuti, vindaloo, cafreal, balchão, sorpotel, poee and ros omelette, vegetarian dishes, bebinca, feni and where to eat.",
    category: "Planning",
    destination: "goa",
    city: "north-goa",
    date: "2026-11-02",
    intro:
      "Goan food blends Konkan coastal cooking with Portuguese influence: coconut, kokum, red chillies, vinegar and seafood dominate. The everyday meal is fish curry rice, while signature dishes include chicken xacuti, pork vindaloo, chicken cafreal, prawn balchão and sorpotel. Hindu Goan homes cook vegetarian and seafood dishes such as khatkhate and tondak. End with bebinca, and try cashew feni, Goa's own spirit. Beach shacks, old family restaurants and village taverns are the best places to taste it.",
    sections: [
      {
        h: "Fish curry rice",
        p: [
          "Fish curry rice is the soul of Goan food: a tangy coconut curry, often sour with kokum or tamarind, served with boiled rice and a fried fish on the side. Kingfish, pomfret, mackerel and prawns are common. Ask for the 'fish thali' at local restaurants for the full meal with sides.",
        ],
      },
      {
        h: "Signature Goan dishes",
        list: [
          "Chicken xacuti: a rich curry with roasted coconut and many spices",
          "Pork vindaloo: a fiery, tangy curry with vinegar and garlic, of Portuguese origin",
          "Chicken cafreal: chicken marinated in a green coriander and chilli paste, then fried",
          "Prawn balchão: a spicy, pickle-like prawn preparation",
          "Sorpotel: a spiced pork dish, often eaten with sannas at festivals",
          "Recheado: fish stuffed with a red masala and pan-fried",
          "Goan sausages (chouriço), spicy and smoky",
        ],
      },
      {
        h: "Vegetarian Goan food",
        list: [
          "Khatkhate: a mixed vegetable stew made at festivals",
          "Tondak: a bean and vegetable curry",
          "Mushroom xacuti and vegetable cafreal",
          "Alsande tonak: black-eyed beans in coconut gravy",
          "Bhaji-pav: spiced vegetables with bread for breakfast",
          "Patoleo: sweet rice dumplings steamed in turmeric leaves",
        ],
      },
      {
        h: "Breads and street food",
        list: [
          "Poee: a soft, round wholewheat bread",
          "Pao: the classic Goan bread roll",
          "Ros omelette: an omelette in spicy chicken gravy, sold at evening carts",
          "Choris pao: Goan sausage in bread",
          "Sannas: steamed rice cakes, often with sorpotel",
          "Cutlet-pao and patties at local bakeries",
        ],
      },
      {
        h: "Desserts and sweets",
        list: [
          "Bebinca: the layered coconut milk and egg pudding",
          "Dodol: a dense sweet of jaggery, coconut and rice flour",
          "Serradura: a Portuguese-style biscuit and cream dessert",
          "Doce: a coconut and gram flour sweet",
          "Perad: guava cheese",
        ],
      },
      {
        h: "Feni and drinks",
        p: [
          "Feni is Goa's own distilled spirit, made from cashew apples or coconut toddy. Cashew feni has a strong, fruity aroma; urrak, a lighter first distillation, is made in the cashew season in spring. Try them in small quantities, mixed with soda and lime or limca. Kokum sol kadhi, a pink drink of kokum and coconut milk, is the classic digestive after a meal.",
        ],
      },
      {
        h: "Where to eat",
        list: [
          "Beach shacks for fresh seafood from November to May",
          "Old Panaji restaurants and taverns for traditional Goan dishes",
          "Village restaurants in South Goa for home-style fish curry",
          "Bakeries for poee, patties and bebinca",
          "Fine-dining restaurants in Assagao, Panaji and Candolim",
        ],
      },
      {
        h: "Seasonal eating",
        p: [
          "Fishing slows during the monsoon ban on mechanised fishing, from about June to July, so dried and preserved fish appear more often. The cashew season in spring brings fresh urrak. Christmas brings kuswar, a platter of sweets including neureos, kulkuls and dodol.",
        ],
      },
      {
        h: "Food tours and cooking classes",
        p: [
          "Food walks in Panaji and Margao and cooking classes in village homes are a great way to learn the spices. Spice plantation tours near Ponda often include a traditional lunch. Ask agents on Tavel Package to add a food experience to your trip.",
        ],
      },
      {
        h: "Tips for eating in Goa",
        list: [
          "Ask for spice levels; vindaloo and xacuti can be hot",
          "Check that seafood is fresh at shacks",
          "Drink responsibly; feni is strong",
          "Try local bakeries early, before items sell out",
        ],
      },
      {
        h: "Goan Catholic and Hindu kitchens",
        p: [
          "Goan cooking has two broad traditions. Catholic homes developed dishes with vinegar, pork and Portuguese techniques, such as vindaloo, sorpotel and assado. Goan Hindu Saraswat cooking leans on coconut, kokum, seafood and vegetables, with dishes such as fish ambot tik, khatkhate and tondak, and many vegetarian days. Both share a love of rice, fish and coconut, and visitors can taste both at traditional restaurants.",
        ],
      },
      {
        h: "Seafood to look for",
        list: [
          "Kingfish (visvan) fry and curry",
          "Pomfret recheado",
          "Mackerel (bangdo) rava fry",
          "Tiger prawns and prawn rissois",
          "Crab xec xec, a spicy crab curry",
          "Clams (tisryo) sukhem, dry with coconut",
        ],
      },
      {
        h: "Food markets",
        p: [
          "Mapusa's Friday market and Panaji's municipal market are the best places to see Goan produce: fish, sausages, spices, cashews, kokum and local breads. Go early in the morning and carry cash.",
        ],
      },
      {
        h: "A sample Goan food day",
        p: [
          "Start with poee and bhaji at a local cafe or a bakery breakfast of patties and coffee. For lunch, eat a fish curry rice thali at a busy local restaurant in Panaji or Margao. In the afternoon, pick up bebinca and dodol from a sweet shop. Watch the sunset with a glass of sol kadhi or feni at a beach shack, then end the day with chicken xacuti or pork vindaloo, poee and a slice of serradura at a traditional Goan restaurant.",
          "Vegetarians can follow the same day with bhaji-pav, a vegetarian thali with khatkhate and tondak, and mushroom xacuti for dinner.",
        ],
      },
    ],
    faqs: [
      { q: "What is Goa's most famous dish?", a: "Fish curry rice is the everyday staple; xacuti, vindaloo and cafreal are the best-known signature dishes." },
      { q: "Is vindaloo from Goa?", a: "Yes. Goan vindaloo developed from a Portuguese dish of meat in wine and garlic." },
      { q: "What is bebinca?", a: "A layered Goan dessert of coconut milk, eggs, sugar and flour." },
      { q: "What is feni?", a: "Goa's own distilled spirit, made from cashew apples or coconut toddy." },
      { q: "Can vegetarians eat well in Goa?", a: "Yes. Khatkhate, tondak, mushroom xacuti and bhaji-pav are popular vegetarian dishes." },
      { q: "Where is the best place to try Goan food?", a: "At traditional restaurants in Panaji and Margao, village restaurants and beach shacks in season." },
    ],
  },

  {
    slug: "best-time-to-visit-goa",
    title: "Best Time to Visit Goa: Season, Monsoon, Festivals and Month by Month",
    description: "When to visit Goa: November to February season, Christmas and New Year, monsoon from June to September, festivals like Carnival and Shigmo, month by month.",
    category: "Planning",
    destination: "goa",
    city: "north-goa",
    date: "2026-11-02",
    intro:
      "The best time to visit Goa is November to February, when the weather is dry and warm and beach shacks, water sports and markets are in full swing. December, with Christmas and New Year, is the busiest and most expensive month. March to May is hot and humid but quieter. The monsoon from June to September turns Goa green and quiet, with low prices, but the sea is rough and water sports and most shacks close. Plan around festivals such as Carnival, Shigmo and Sao Joao if you want culture.",
    sections: [
      {
        h: "Goa month by month",
        list: [
          "January: dry and pleasant, crowds ease after New Year",
          "February: warm, Carnival in some years",
          "March: getting hot, Shigmo festival",
          "April and May: hot and humid, quiet, good value",
          "June: monsoon arrives, Sao Joao on 24 June",
          "July and August: heavy rain, green landscapes",
          "September: rain eases, Ganesh Chaturthi",
          "October: season starts, shacks reopen",
          "November: pleasant, festive season begins",
          "December: peak season, Christmas, New Year and big music events",
        ],
      },
      {
        h: "Peak season: November to February",
        p: [
          "The peak season has clear skies, warm days and a calm sea. Beach shacks, night markets, water sports and boat trips are all running, and the nightlife is at its liveliest. Prices are highest from mid-December to early January, when hotels and flights sell out. Book early if you are travelling at Christmas or New Year.",
        ],
      },
      {
        h: "Summer: March to May",
        p: [
          "Summer is hot and humid, with temperatures in the low to mid thirties Celsius. Beaches are quieter, hotels offer better rates, and it is mango and cashew season. Plan beach time for mornings and evenings, and stay in a hotel with a pool.",
        ],
      },
      {
        h: "Monsoon: June to September",
        p: [
          "The monsoon brings heavy rain, a rough sea and swimming bans at most beaches. Water sports stop, and many shacks are dismantled until October. Goa turns lush green, waterfalls fill, and luxury resorts offer some of the year's best deals. It suits couples, food lovers and anyone who enjoys rain, but not beach holidays. Check access rules for Dudhsagar Falls, as they change with conditions.",
        ],
      },
      {
        h: "Festivals worth planning around",
        list: [
          "Carnival: parades and floats before Lent, usually in February",
          "Shigmo: a spring festival with colourful parades, usually in March",
          "Sao Joao: a monsoon festival on 24 June, with young men jumping into wells and ponds",
          "Ganesh Chaturthi: a major Hindu festival, usually in August or September",
          "Feast of St Francis Xavier: 3 December in Old Goa",
          "Christmas and New Year: midnight mass, decorations and parties",
        ],
      },
      {
        h: "Best time for different travellers",
        list: [
          "Beach lovers: November to February",
          "Party lovers: December",
          "Couples: November, February or the monsoon",
          "Families: November to February",
          "Budget travellers: April, May and the monsoon",
          "Culture lovers: Carnival, Shigmo or Sao Joao",
        ],
      },
      {
        h: "Weather details",
        list: [
          "Winter days are warm, around 30 Celsius, with cooler nights",
          "Summer is humid with temperatures in the mid thirties",
          "The monsoon brings most of Goa's rainfall between June and September",
          "October can have post-monsoon showers",
        ],
      },
      {
        h: "Booking tips",
        list: [
          "Book Christmas and New Year two to three months ahead",
          "Look for shoulder-season deals in early November and late February",
          "In the monsoon, choose resorts with indoor facilities",
          "Check what is open before booking a beach-hut stay in October or May",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates on Tavel Package. Up to 3 verified Goa agents will suggest the best plan for your season, from beach-hut stays in peak season to monsoon resort packages.",
        ],
      },
      {
        h: "Goa in October and early November",
        p: [
          "October is the shoulder month when Goa shakes off the monsoon. The countryside is still green, shacks are being rebuilt, and prices are low. Some rain is possible early in the month, and not all water sports are running until the sea calms. Early November is often the sweet spot, with good weather before the December rush.",
        ],
      },
      {
        h: "Goa in April and May",
        p: [
          "April and May are the hottest months, with humid afternoons. Beaches are quieter, families visit during school holidays, and hotels offer good rates. It is cashew and mango season, and feni is distilled in villages. Plan beach time for mornings and evenings and rest indoors in the afternoon heat.",
        ],
      },
      {
        h: "Sea conditions by season",
        list: [
          "November to April: generally calm, good for swimming in flagged zones",
          "May: sea starts to roughen before the monsoon",
          "June to September: rough sea, strong currents, swimming bans",
          "October: calming, but follow lifeguard advice",
        ],
      },
      {
        h: "Big events in December",
        p: [
          "December brings Goa's biggest events. Electronic dance music festivals are usually held in late December in North Goa, the Goa Food and Cultural Festival and the International Film Festival of India are held in Panaji around this time of year, and churches across the state celebrate Christmas with midnight mass, cribs and star lanterns. Dates and venues change each year, so check the current schedule before booking.",
        ],
      },
    ],
    faqs: [
      { q: "What is the best time to visit Goa?", a: "November to February, when the weather is dry and pleasant and everything is open." },
      { q: "Is Goa good in the monsoon?", a: "Yes, for green landscapes, quiet and low prices, but the sea is rough and water sports close." },
      { q: "When is Goa cheapest?", a: "During the monsoon from June to September, and in April and May." },
      { q: "When is Goa Carnival?", a: "Usually in February, before Lent; dates change each year." },
      { q: "Is December too crowded in Goa?", a: "It is the busiest month, especially from Christmas to New Year. Book early or travel in early December." },
      { q: "Are beach shacks open in October?", a: "Many reopen during October as the season starts, with most running from November." },
    ],
  },
];
