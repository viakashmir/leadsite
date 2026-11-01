import type { BlogPost } from "./types";

const date = "2026-11-01";

export const INTERNATIONAL_WORLD: BlogPost[] = [
  {
    slug: "sri-lanka-7-day-itinerary",
    title: "Sri Lanka Itinerary: 7 Days in Kandy, Nuwara Eliya, Ella and the South Coast",
    description:
      "A 7-day Sri Lanka plan with Sigiriya, Kandy's Temple of the Tooth, the hill country train to Ella, and Galle and Bentota beaches, plus ETA visa tips.",
    category: "Itineraries",
    destination: "sri-lanka",
    city: "kandy",
    date,
    intro:
      "Sri Lanka packs ancient cities, tea hills and beaches into a short trip from India. Seven days covers Sigiriya and Dambulla, Kandy, the scenic train through Nuwara Eliya to Ella, and the south coast around Galle. Indian travellers need an Electronic Travel Authorisation (ETA) before arrival.",
    sections: [
      {
        h: "7-day plan",
        days: [
          "Arrive Colombo, drive to Sigiriya or Dambulla.",
          "Climb Sigiriya rock fortress, Dambulla cave temples, drive to Kandy.",
          "Temple of the Sacred Tooth Relic, Peradeniya Botanical Gardens, cultural show.",
          "Tea estates and Nuwara Eliya.",
          "Train to Ella, Nine Arches Bridge, Little Adam's Peak.",
          "Drive to the south coast via Yala or Udawalawe for a safari, on to Galle.",
          "Galle Fort, Bentota beach, return to Colombo.",
        ],
      },
      {
        h: "Best time",
        p: [
          "December to March for the west and south coasts and hill country. April to September for the east coast (Trincomalee, Pasikuda).",
        ],
      },
      {
        h: "Tips",
        list: ["Book the Kandy to Ella train seats early.", "Dress modestly for temples; remove shoes and hats.", "Ramayana trail tours are popular with Indian families."],
      },
      {
        h: "Quotes",
        p: ["Ask whether a private car with a chauffeur guide, train tickets, and safari fees are included."],
      },
    ],
    faqs: [
      { q: "Do Indians need a visa for Sri Lanka?", a: "An ETA is required before arrival. Check the current fee and rules." },
      { q: "Is 7 days enough for Sri Lanka?", a: "Yes for the cultural triangle, hill country and south coast at a brisk pace." },
      { q: "Is the Kandy to Ella train worth it?", a: "Yes, it is one of the most scenic train rides in Asia." },
    ],
  },
  {
    slug: "nepal-kathmandu-pokhara-trip",
    title: "Nepal Trip: 6 Days in Kathmandu and Pokhara",
    description:
      "A 6-day Nepal plan with Pashupatinath, Boudhanath, Bhaktapur, Pokhara's lakes, Sarangkot sunrise and paragliding, plus entry rules for Indians.",
    category: "International",
    destination: "nepal",
    city: "pokhara",
    date,
    intro:
      "Nepal is the easiest international trip for Indians: no visa is required, and Indian rupees are widely accepted in smaller notes. Six days covers Kathmandu's temples and squares and the lakeside town of Pokhara with views of the Annapurna range and Machhapuchhre.",
    sections: [
      {
        h: "6-day plan",
        days: [
          "Arrive Kathmandu. Pashupatinath evening aarti.",
          "Boudhanath and Swayambhunath stupas, Kathmandu Durbar Square.",
          "Fly or drive to Pokhara (about 200 km by road). Phewa Lake boating.",
          "Sarangkot sunrise, paragliding, Davis Falls and Gupteshwor cave.",
          "Return to Kathmandu, Bhaktapur Durbar Square.",
          "Fly home.",
        ],
      },
      {
        h: "Entry for Indians",
        p: [
          "Indian citizens do not need a visa for Nepal but must carry a valid passport or voter ID. Children have specific ID rules; check before travel.",
        ],
      },
      {
        h: "Best time",
        p: ["October to November for clear mountain views, and March to April for rhododendrons. Monsoon brings clouds and road delays."],
      },
      {
        h: "Quotes",
        p: ["Ask whether the Kathmandu to Pokhara leg is by flight or road, and whether paragliding and entry fees are included."],
      },
    ],
    faqs: [
      { q: "Do Indians need a passport for Nepal?", a: "A passport or voter ID is accepted for Indian citizens. Aadhaar is not accepted as travel ID." },
      { q: "Is Nepal good for a family trip?", a: "Yes. Short flights, temples and lakes suit families." },
      { q: "Can we see Everest on this trip?", a: "Mountain flights from Kathmandu offer Everest views in clear weather." },
    ],
  },
  {
    slug: "bhutan-6-day-trip",
    title: "Bhutan Trip: 6 Days in Paro, Thimphu and Punakha",
    description:
      "A 6-day Bhutan plan with the Tiger's Nest hike, Dochula Pass, Punakha Dzong and Thimphu, plus entry permits and the Sustainable Development Fee.",
    category: "International",
    destination: "bhutan",
    city: "paro",
    date,
    intro:
      "Bhutan's classic 6-day loop starts in Paro, crosses Dochula Pass to Punakha, spends a day in the capital Thimphu, and ends with the hike to Paro Taktsang (Tiger's Nest). Indian citizens do not need a visa but receive an entry permit and pay a daily Sustainable Development Fee.",
    sections: [
      {
        h: "6-day plan",
        days: [
          "Arrive Paro. Rinpung Dzong and the National Museum, drive to Thimphu.",
          "Thimphu: Buddha Dordenma, Memorial Chorten, Tashichho Dzong.",
          "Over Dochula Pass to Punakha. Punakha Dzong and the suspension bridge.",
          "Chimi Lhakhang, drive back to Paro.",
          "Hike to Tiger's Nest (Taktsang) monastery.",
          "Fly out of Paro or drive to Phuentsholing.",
        ],
      },
      {
        h: "Permits and fees",
        p: [
          "Indians enter with a passport or voter ID and get an entry permit. A daily Sustainable Development Fee applies to Indian visitors as well; the amount is set by the Bhutan government, so confirm the current rate.",
        ],
      },
      {
        h: "Best time",
        p: ["March to May and September to November. Festivals (tshechus) such as Paro's in spring are a highlight."],
      },
      {
        h: "Quotes",
        p: ["Ask whether the SDF, a licensed guide, permits and the Tiger's Nest hike are included."],
      },
    ],
    faqs: [
      { q: "Do Indians need a visa for Bhutan?", a: "No visa, but an entry permit and the Sustainable Development Fee apply." },
      { q: "How hard is the Tiger's Nest hike?", a: "Moderate, about 4 to 6 hours return with a steep climb. Ponies go part of the way." },
      { q: "Can we drive into Bhutan from India?", a: "Yes, through Phuentsholing (from Jaigaon, West Bengal)." },
    ],
  },
  {
    slug: "vietnam-7-day-itinerary",
    title: "Vietnam Itinerary: 7 Days in Hanoi, Ha Long Bay and Da Nang",
    description:
      "A 7-day Vietnam plan with Hanoi's old quarter, an overnight Ha Long Bay cruise, Da Nang's Golden Bridge and Hoi An, plus e-visa tips for Indians.",
    category: "Itineraries",
    destination: "vietnam",
    city: "hanoi",
    date,
    intro:
      "Vietnam has become a favourite for Indian travellers thanks to direct flights and an easy e-visa. Seven days covers Hanoi, an overnight cruise on Ha Long Bay, and Da Nang with the Golden Bridge at Ba Na Hills and the lantern town of Hoi An.",
    sections: [
      {
        h: "7-day plan",
        days: [
          "Arrive Hanoi. Hoan Kiem Lake and the Old Quarter.",
          "Drive to Ha Long Bay, board an overnight cruise.",
          "Cruise morning, return to Hanoi.",
          "Fly to Da Nang. My Khe Beach.",
          "Ba Na Hills and the Golden Bridge.",
          "Hoi An Ancient Town, lantern boats at night.",
          "Fly out of Da Nang.",
        ],
      },
      {
        h: "Visa",
        p: ["Indian travellers apply for a Vietnam e-visa online before travel. Check the current validity and fee."],
      },
      {
        h: "Best time",
        p: [
          "North (Hanoi, Ha Long): October to April, cool in winter. Central (Da Nang, Hoi An): February to August. Typhoons can affect the central coast from September to November.",
        ],
      },
      {
        h: "Food and quotes",
        p: [
          "Vegetarian food is available in tourist areas, and Indian restaurants exist in Hanoi and Da Nang. Ask agents about the cruise category and whether domestic flights are included.",
        ],
      },
    ],
    faqs: [
      { q: "Do Indians need a visa for Vietnam?", a: "Yes, an e-visa applied online before travel." },
      { q: "Is an overnight Ha Long cruise worth it?", a: "Yes. A day trip is rushed; overnight gives sunset and sunrise in the bay." },
      { q: "Is Vietnam good for vegetarians?", a: "Yes in tourist areas, with tofu dishes and Indian restaurants available." },
    ],
  },
  {
    slug: "mauritius-honeymoon",
    title: "Mauritius Honeymoon: 6 Days of Lagoons, Ile aux Cerfs and Chamarel",
    description:
      "A 6-day Mauritius honeymoon with a beach resort, Ile aux Cerfs, the seven-coloured earth at Chamarel, Grand Baie and catamaran trips, plus visa on arrival.",
    category: "Honeymoon",
    destination: "mauritius",
    city: "grand-baie",
    date,
    intro:
      "Mauritius is a favourite honeymoon for Indian couples: a visa on arrival, an Indian heritage that makes food easy, warm lagoons and luxury resorts. Six days lets you combine a resort stay with Ile aux Cerfs, the south's Chamarel and a catamaran cruise.",
    sections: [
      {
        h: "6-day honeymoon plan",
        days: [
          "Arrive, transfer to a beach resort.",
          "North tour: Grand Baie, Pamplemousses Garden, Port Louis waterfront.",
          "Ile aux Cerfs by speedboat, parasailing or underwater walk.",
          "South tour: Chamarel seven-coloured earth, waterfall, Grand Bassin (Ganga Talao).",
          "Catamaran cruise with snorkelling and dolphins.",
          "Resort morning, depart.",
        ],
      },
      {
        h: "Where to stay",
        list: [
          "East coast (Belle Mare): long beaches and luxury resorts.",
          "North (Grand Baie): lively, restaurants and nightlife.",
          "West (Flic en Flac): sunsets and dolphins.",
        ],
      },
      {
        h: "Best time",
        p: ["May to December is drier and cooler. January to March is the cyclone season."],
      },
      {
        h: "Visa and quotes",
        p: ["Indian passport holders get a visa on arrival with return tickets and accommodation. Ask agents about meal plans and private or shared tours."],
      },
    ],
    faqs: [
      { q: "Is Mauritius good for a honeymoon?", a: "Yes. Beautiful lagoons, resorts and easy entry for Indians." },
      { q: "How many days for Mauritius?", a: "Six to seven days." },
      { q: "Is vegetarian food easy in Mauritius?", a: "Yes, thanks to the large Indian-origin population." },
    ],
  },
  {
    slug: "seychelles-honeymoon",
    title: "Seychelles Honeymoon: Mahe, Praslin and La Digue in 7 Days",
    description:
      "A 7-day Seychelles honeymoon across Mahe, Praslin and La Digue with Anse Source d'Argent, Vallee de Mai and island ferries, plus entry and season tips.",
    category: "Honeymoon",
    destination: "seychelles",
    city: "praslin",
    date,
    intro:
      "The Seychelles offers some of the world's most photographed beaches and fewer crowds than the Maldives. A 7-day honeymoon splits nights between Mahe and Praslin, with a day on La Digue for Anse Source d'Argent. Islands are linked by ferry.",
    sections: [
      {
        h: "7-day plan",
        days: [
          "Arrive Mahe. Beau Vallon beach.",
          "Victoria market and botanical garden, Morne Seychellois views.",
          "Ferry to Praslin. Anse Lazio.",
          "Vallee de Mai (coco de mer palms), Anse Georgette.",
          "Day trip to La Digue: cycle to Anse Source d'Argent.",
          "Snorkelling at Curieuse and St Pierre islands.",
          "Ferry to Mahe and fly out.",
        ],
      },
      {
        h: "Entry",
        p: ["Visitors receive a visitor's permit on arrival, and a travel authorisation is required online before departure. Check the current rules."],
      },
      {
        h: "Best time",
        p: ["April to May and October to November, between the trade winds, with calm seas."],
      },
      {
        h: "Quotes",
        p: ["Ask whether inter-island ferries, transfers and meal plans are included, and the beach access of each hotel."],
      },
    ],
    faqs: [
      { q: "Seychelles or Maldives for a honeymoon?", a: "Seychelles for varied islands and granite beaches, Maldives for overwater villas." },
      { q: "How do we travel between islands?", a: "By Cat Cocos ferry between Mahe and Praslin, and smaller ferries to La Digue." },
      { q: "How many days for Seychelles?", a: "Seven days covers Mahe, Praslin and La Digue." },
    ],
  },
  {
    slug: "switzerland-7-days-from-india",
    title: "Switzerland Trip from India: 7 Days in Zurich, Lucerne and Interlaken",
    description:
      "A 7-day Switzerland plan for Indians with Lucerne, Mount Titlis, Interlaken, Jungfraujoch and Zermatt options, the Swiss Travel Pass and Schengen visa tips.",
    category: "International",
    destination: "switzerland",
    city: "lucerne",
    date,
    intro:
      "Switzerland is the dream European holiday for many Indian families and honeymooners. Seven days covers Lucerne, Mount Titlis, Interlaken and the Jungfraujoch, travelling by Swiss trains. A Schengen visa is needed, and appointments fill up before summer.",
    sections: [
      {
        h: "7-day plan",
        days: [
          "Arrive Zurich, train to Lucerne. Chapel Bridge and the old town.",
          "Mount Titlis: rotating cable car, ice flyer, glacier cave.",
          "Lucerne lake cruise or Mount Pilatus.",
          "Train to Interlaken via the Golden Pass or Brunig line.",
          "Jungfraujoch, the Top of Europe.",
          "Lauterbrunnen and Grindelwald, or a day in Zermatt for the Matterhorn.",
          "Train to Zurich and fly home.",
        ],
      },
      {
        h: "Swiss Travel Pass",
        p: ["The Swiss Travel Pass covers most trains, buses and boats and gives discounts on mountain excursions. Agents can include it in the package."],
      },
      {
        h: "Visa",
        p: ["Indian passport holders need a Schengen visa. Apply well ahead of summer travel, as appointment slots fill quickly."],
      },
      {
        h: "Best time and quotes",
        p: [
          "May to September for green valleys, December to March for snow. Ask agents whether mountain excursions are included, the hotel locations, and whether Indian meals can be arranged.",
        ],
      },
    ],
    faqs: [
      { q: "How many days are enough for Switzerland?", a: "Seven days for Lucerne and Interlaken regions. Add Zermatt or Geneva for 9 to 10 days." },
      { q: "Is Jungfraujoch worth it?", a: "Yes on a clear day. Check the weather forecast and keep a flexible day." },
      { q: "Can we combine Switzerland with Paris?", a: "Yes, Paris is about 4 hours from Zurich or Geneva by train." },
    ],
  },
  {
    slug: "turkey-8-day-itinerary",
    title: "Turkey Itinerary: 8 Days in Istanbul, Cappadocia and Pamukkale",
    description:
      "An 8-day Turkey plan with Istanbul's mosques and Bosphorus, Cappadocia's balloon flights and cave hotels, and Pamukkale's white terraces.",
    category: "Itineraries",
    destination: "turkey",
    city: "cappadocia",
    date,
    intro:
      "Turkey offers history, landscapes and food in one trip. Eight days covers Istanbul, a hot-air balloon sunrise in Cappadocia and the travertine terraces of Pamukkale, with domestic flights between regions.",
    sections: [
      {
        h: "8-day plan",
        days: [
          "Arrive Istanbul. Sultanahmet: Blue Mosque and Hagia Sophia.",
          "Topkapi Palace, Grand Bazaar, Bosphorus cruise.",
          "Fly to Cappadocia. Goreme open-air museum.",
          "Hot-air balloon at sunrise, underground city, valley hikes.",
          "Fly or drive towards Pamukkale.",
          "Pamukkale terraces and Hierapolis.",
          "Ephesus or return to Istanbul.",
          "Fly home.",
        ],
      },
      {
        h: "Balloon flights",
        p: ["Balloon flights depend on wind and are cancelled on some days. Plan two mornings in Cappadocia so you have a backup."],
      },
      {
        h: "Visa",
        p: ["Indian travellers need a visa for Turkey, with e-visa eligibility for some holders of certain other visas. Check the current rules."],
      },
      {
        h: "Best time and quotes",
        p: ["April to June and September to October. Ask agents whether the balloon ride, domestic flights and a cave hotel are included."],
      },
    ],
    faqs: [
      { q: "How many days are enough for Turkey?", a: "Eight to ten days for Istanbul, Cappadocia and Pamukkale." },
      { q: "Is a Cappadocia balloon ride safe?", a: "Licensed operators fly under strict rules and cancel in unsafe winds." },
      { q: "Is Turkey good for a honeymoon?", a: "Yes, cave hotels and balloon sunrises are especially popular with couples." },
    ],
  },
  {
    slug: "japan-trip-from-india",
    title: "Japan Trip from India: 8 Days in Tokyo, Mount Fuji, Kyoto and Osaka",
    description:
      "An 8-day Japan itinerary for Indian travellers with Tokyo, a Mount Fuji day, Kyoto's temples and Osaka, plus the Japan e-visa, rail passes and cherry blossom timing.",
    category: "International",
    destination: "japan",
    city: "kyoto",
    date,
    intro:
      "Japan's classic first trip runs from Tokyo to Kyoto and Osaka by bullet train, with a day near Mount Fuji. Eight days is the comfortable minimum. Indian passport holders can apply for a Japan e-visa for short tourist stays.",
    sections: [
      {
        h: "8-day plan",
        days: [
          "Arrive Tokyo. Shibuya Crossing and Shinjuku.",
          "Asakusa Senso-ji, teamLab, Tokyo Skytree.",
          "Day trip to Mount Fuji area (Kawaguchiko) or Hakone.",
          "Shinkansen to Kyoto. Fushimi Inari shrine.",
          "Kinkaku-ji, Arashiyama bamboo grove.",
          "Nara deer park, on to Osaka.",
          "Osaka Castle, Dotonbori, Universal Studios Japan optional.",
          "Fly home from Osaka (Kansai).",
        ],
      },
      {
        h: "Cherry blossom and autumn",
        p: ["Cherry blossoms usually bloom from late March to early April in Tokyo and Kyoto. Autumn colours peak around November. Both seasons book out early."],
      },
      {
        h: "Food",
        p: ["Vegetarian food takes planning in Japan. Indian restaurants and vegetarian options exist in big cities; ask agents to note dietary needs for hotels and tours."],
      },
      {
        h: "Quotes",
        p: ["Ask whether the e-visa assistance, Shinkansen tickets or rail pass, and Fuji day trip are included."],
      },
    ],
    faqs: [
      { q: "Do Indians need a visa for Japan?", a: "Yes. Indian passport holders can apply for a Japan e-visa for tourism through the official system." },
      { q: "When is cherry blossom season in Japan?", a: "Usually late March to early April in Tokyo and Kyoto." },
      { q: "Is the Japan Rail Pass worth it?", a: "It depends on your route. For Tokyo, Kyoto and Osaka only, individual tickets can be cheaper." },
    ],
  },
];
