import type { BlogPost, BlogSection } from "./types";

// Extra sections and FAQs for the November 2026 Spiti and Ladakh guides
// (spiti-deep, spiti-deep-2, ladakh-deep-5). Same fact rules: no em dashes,
// no invented prices, no emergency numbers other than the national 112.

type Extra = { sections: BlogSection[]; faqs: BlogPost["faqs"] };

const SUMMER_CIRCUIT_DAYS = [
  "Delhi or Chandigarh to Shimla, then on to Narkanda or Rampur.",
  "Drive to Kalpa or Sangla in Kinnaur. Rest and acclimatise.",
  "Kalpa to Nako, past Khab and the Sutlej and Spiti confluence.",
  "Nako to Tabo via Gue, with Tabo Monastery in the evening.",
  "Tabo to Kaza via Dhankar Monastery and Dhankar village.",
  "Kaza local: Key Monastery, Kibber, Chicham bridge, Langza, Hikkim and Komic.",
  "Kaza to Chandratal over Kunzum Pass. Overnight in a camp.",
  "Chandratal to Manali via Batal and the Atal Tunnel.",
  "Manali to Delhi or Chandigarh.",
];

const LADAKH_MONTH_EXTRA = (month: string, notes: { things: string[]; mistakes: string[] }): BlogSection[] => [
  { h: `Best things to do in Ladakh in ${month}`, list: notes.things },
  { h: `Mistakes to avoid in ${month}`, list: notes.mistakes },
  {
    h: `Ladakh in ${month} with kids and older parents`,
    list: [
      "Fly in and take two full days in Leh before going over any pass.",
      "Keep Pangong as one night at most, or visit by day if anyone feels unwell at altitude.",
      "Choose Nubra for its lower altitude and gentler sightseeing: dunes, monasteries and short walks.",
      "Carry a pulse oximeter and consult a doctor before the trip if anyone has heart or lung conditions.",
      "Book a comfortable SUV, plan short driving days and keep warm layers in the car.",
    ],
  },
];

export const SPITI_LADAKH_EXTRAS: Record<string, Extra> = {
  "best-time-to-visit-spiti-valley": {
    sections: [
      { h: "Sample 9-day summer circuit (June to mid-October)", days: SUMMER_CIRCUIT_DAYS },
      {
        h: "What to pack by season",
        list: [
          "Summer: T-shirts and light layers for the day, a fleece and a padded jacket for nights, especially at Chandratal and the high villages.",
          "Autumn: thermals, a warm fleece and a down jacket. October nights fall below freezing.",
          "Winter: two sets of thermals, a down jacket rated for minus 20°C, snow boots, gloves and a balaclava.",
          "All seasons: sunglasses, high SPF sunscreen, lip balm, a refillable bottle, a head torch, cash and personal medicines.",
        ],
      },
      {
        h: "Spiti or Kinnaur: which fits your dates?",
        list: [
          "Kinnaur (Sangla, Chitkul, Kalpa) is lower, greener and reachable for most of the year, with apple season in September and October.",
          "Spiti is higher and starker, best from June to October for the full circuit, and a winter adventure from December to March.",
          "Combining both via the Shimla route is the classic way to acclimatise before Kaza.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is December a good time to visit Spiti?",
        a: "For prepared winter travellers, yes. It is very cold and only the Shimla route is open, so go with a 4x4 and an operator experienced in winter trips.",
      },
      {
        q: "Should I visit Kinnaur or Spiti?",
        a: "Do both on the Shimla route: Kinnaur first to acclimatise, then Spiti. Kinnaur alone suits shorter trips and colder months better.",
      },
    ],
  },
  "spiti-valley-trip-cost": {
    sections: [
      {
        h: "Common Spiti trip formats and what they include",
        list: [
          "Fixed-departure group tour: seat in a Tempo Traveller or SUV, twin or triple sharing stays, breakfast and dinner, and a trip leader. Fixed dates and itinerary.",
          "Private cab package: an SUV and driver for the whole trip, stays of your chosen level, and meals at homestays and camps. Flexible pace.",
          "Guided bike expedition: rental bike or your own, backup vehicle, mechanic, road captain, stays and meals. Fuel is often extra.",
          "Winter 4x4 expedition: 4x4 with chains, winter-experienced driver, heated homestays, meals and a group leader.",
          "Self-planned trip: buses or shared taxis, homestays booked locally. The lowest cost, but the slowest and least flexible.",
        ],
      },
      {
        h: "Bike trip costs to plan for",
        list: [
          "Bike rental per day, plus a refundable security deposit.",
          "Fuel for about 1,000 km of mountain riding, refuelling at Reckong Peo and Kaza.",
          "Riding gear if you do not own it.",
          "A backup vehicle and mechanic if you join a guided group.",
          "Repairs: punctures and broken levers are common on the Manali side.",
        ],
      },
      {
        h: "Questions to ask before you pay",
        list: [
          "What is the exact night-by-night route and stay type?",
          "Is the vehicle shared or private, and is it a 4x4 in winter?",
          "Are meals, driver costs, tolls and parking included?",
          "What happens, and who pays, if a road closes and you need an extra night?",
          "What is the cancellation and refund policy?",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a Spiti bike trip cheaper than a cab?",
        a: "Riding your own or a rented bike can be cheaper for one or two people, but guided bike packages with backup vehicles cost more than sharing a cab.",
      },
      {
        q: "Are meals included in Spiti packages?",
        a: "Usually breakfast and dinner, and homestays and Chandratal camps normally include both. Lunch is often extra.",
      },
    ],
  },
  "winter-spiti-guide": {
    sections: [
      {
        h: "Group expedition or private trip?",
        list: [
          "Group expedition: the most economical for solo travellers and couples, with a leader, 4x4s and arranged homestays. Fixed dates.",
          "Private trip: your own 4x4 and driver, your own pace and stops. Better for families and photographers, at a higher cost per person.",
          "Either way, choose an operator who runs winter Spiti every year and has local drivers.",
        ],
      },
      {
        h: "Stargazing and photography in winter",
        list: [
          "Spiti's dry, clear winter air and lack of light pollution make for outstanding night skies, especially on moonless nights.",
          "Kaza, Langza, Kibber and Komic are popular stargazing spots. Dress for minus 20°C or colder when shooting at night.",
          "Batteries drain quickly in the cold. Keep spares inside your jacket.",
          "Ask before photographing people and inside monasteries.",
        ],
      },
      {
        h: "Mistakes to avoid in winter Spiti",
        list: [
          "Planning a fixed return flight with no buffer day.",
          "Travelling in a two-wheel-drive car without chains.",
          "Packing city winter clothes instead of high-altitude gear.",
          "Skipping acclimatisation stops at Kalpa and Nako.",
          "Expecting hotels, cafés and running water like in summer.",
          "Sleeping with a stove burning in a closed room.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I do winter Spiti solo?",
        a: "Yes, most easily by joining a group expedition, which provides a 4x4, a leader and arranged homestays.",
      },
      {
        q: "Is winter Spiti good for photography?",
        a: "Excellent. Snow-covered villages, frozen rivers and very clear night skies make it one of India's best winter photography trips.",
      },
    ],
  },
  "chandratal-lake-guide": {
    sections: [
      {
        h: "Stops between Manali and Chandratal",
        list: [
          "Atal Tunnel: about 9 km long, it takes you under the Rohtang range into Lahaul.",
          "Gramphu: where the Spiti road leaves the Manali to Leh highway. Rough road begins soon after.",
          "Chhatru and Chhota Dhara: small dhabas and camps along the Chandra river.",
          "Batal: a tiny stop with a long-running dhaba, the last food before the lake and Kunzum.",
          "Chandratal turn: the road to the lake and the camps, about 14 km from Batal.",
        ],
      },
      {
        h: "Chandratal vs Pangong",
        list: [
          "Chandratal (about 4,300 m) is small, quiet and wild, reached by rough road, and open only from about June to early October.",
          "Pangong Tso (about 4,250 m) in Ladakh is huge, about 134 km long, with tarred roads, many camps and stays, and a longer season.",
          "Chandratal suits a Spiti circuit and trekkers. Pangong suits a Ladakh trip and families who want more comfort.",
        ],
      },
      {
        h: "If the Chandratal camps are full",
        list: [
          "Stay at Batal (very basic), Losar or Kaza and visit Chandratal as a day trip.",
          "From Manali, sleep at Sissu or Keylong in Lahaul, then make a long day trip.",
          "Book camps early for July and August weekends.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which is better, Chandratal or Pangong?",
        a: "Chandratal for a quiet, wild lake on a Spiti trip; Pangong for a larger, more accessible lake with more comfortable stays in Ladakh.",
      },
      {
        q: "Where can I eat on the way to Chandratal?",
        a: "Dhabas at Chhatru, Chhota Dhara and Batal. Carry snacks and water, as options are basic.",
      },
    ],
  },
  "how-to-reach-spiti-valley": {
    sections: [
      {
        h: "From Mumbai, Bengaluru, Kolkata and other cities",
        list: [
          "Fly to Chandigarh, the best-connected airport for Spiti, then drive to Shimla (about 3 to 4 hours) and start the Kinnaur route.",
          "Or fly to Delhi and take an overnight bus or drive to Shimla or Manali.",
          "Kullu-Bhuntar suits the Manali route in summer if flights fit your dates.",
          "Allow a day either side of the Spiti loop for getting to and from the start point.",
        ],
      },
      {
        h: "How to check Spiti road status",
        list: [
          "Ask your hotel, homestay or driver the evening before: they know the latest closures.",
          "Watch local news and the Lahaul and Spiti district and police updates for closures after snow or landslides.",
          "On the Manali side, opening and closing of Kunzum Pass is announced each season.",
          "Keep buffer days, especially in July, August and winter.",
        ],
      },
      { h: "Sample 9-day route from Delhi via Shimla", days: SUMMER_CIRCUIT_DAYS },
    ],
    faqs: [
      {
        q: "How do I reach Spiti from Mumbai or Bengaluru?",
        a: "Fly to Chandigarh, drive to Shimla, then follow the Kinnaur route to Kaza. Allow about three days from Chandigarh to Kaza with stops.",
      },
      {
        q: "How can I check if Kunzum Pass is open?",
        a: "Ask your stay or driver, and follow Lahaul and Spiti district updates. Kunzum usually opens around June and closes by late October.",
      },
    ],
  },
  "is-spiti-valley-safe": {
    sections: [
      {
        h: "Myths and facts",
        list: [
          "Myth: Spiti is dangerous because it is remote. Fact: crime is rare. The risks are altitude, roads and cold.",
          "Myth: you need a permit as an Indian. Fact: Indian nationals do not need a permit for Spiti.",
          "Myth: Spiti is closed in winter. Fact: the Shimla route stays open for most of the winter.",
          "Myth: only bikers go to Spiti. Fact: families, couples and solo travellers visit every season by cab, bus and group tour.",
        ],
      },
      {
        h: "A safety checklist before you go",
        list: [
          "Plan an acclimatisation route via Shimla and Kinnaur.",
          "Book an experienced local driver or a reputable operator.",
          "Pack a medical kit, a pulse oximeter and enough cash.",
          "Share your itinerary with family and download offline maps.",
          "Buy insurance that covers high altitude and evacuation.",
          "Keep at least one buffer day.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Spiti safe for couples?",
        a: "Yes. Couples travel Spiti every season. Homestays are welcoming and the main risks, as for everyone, are altitude and roads.",
      },
      {
        q: "What should I do in an emergency in Spiti?",
        a: "Call 112 if you have signal, tell your host and driver, and head for the hospital in Kaza. Descend if anyone has severe altitude symptoms.",
      },
    ],
  },
  "spiti-bike-trip-guide": {
    sections: [
      {
        h: "Bike rental checklist",
        list: [
          "Check tyres, brakes, chain, clutch and lights, and take photos and a video of the bike before you leave.",
          "Confirm the security deposit, the damage policy and who pays for breakdown recovery in remote areas.",
          "Ask for a basic tool kit, spare tube and spare cables with the bike.",
          "Carry the registration, insurance and rental agreement.",
          "Check whether the rental allows the Spiti circuit: some shops restrict certain routes.",
        ],
      },
      {
        h: "Riding tips at high altitude",
        list: [
          "Ride slower than you think: reactions and stamina drop above 4,000 m.",
          "Take short breaks every hour and drink water.",
          "Keep distance from trucks on narrow sections and give way to uphill traffic.",
          "Watch for loose gravel on bends and black ice in shaded spots early in the morning.",
          "Stop riding by mid-afternoon on the Manali side, before streams rise.",
        ],
      },
      {
        h: "Common mistakes on a Spiti bike trip",
        list: [
          "Starting from Manali and riding to Kaza on day one.",
          "Leaving Kaza without a full tank and a spare can.",
          "Crossing streams in the afternoon.",
          "Overpacking the bike, which makes rough sections much harder.",
          "Riding after dark.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I rent a bike in Manali for Spiti?",
        a: "Yes. Manali has many rental shops. Check the bike carefully, read the deposit terms and confirm the Spiti circuit is allowed.",
      },
      {
        q: "Is a Spiti bike trip good for couples?",
        a: "Yes, two up or on two bikes. Pack light, take it slowly on rough sections and consider a guided group with a backup vehicle.",
      },
    ],
  },
  "leh-ladakh-in-june": {
    sections: LADAKH_MONTH_EXTRA("June", {
      things: [
        "Drive over Khardung La and Chang La with snow walls still beside the road in early June.",
        "See Pangong's colours with snow on the surrounding peaks.",
        "Ride the Hunder dunes on a double-humped Bactrian camel in Nubra.",
        "Watch the Hemis festival if its dates fall in your trip.",
        "Raft on the Zanskar or Indus once the season opens.",
      ],
      mistakes: [
        "Booking flights and Pangong camps late in a peak month.",
        "Driving the Manali highway in early June without checking for closures.",
        "Going to Pangong on day two without acclimatising.",
        "Packing only summer clothes: nights at the lakes are near freezing.",
      ],
    }),
    faqs: [
      {
        q: "Is June good for Ladakh with kids?",
        a: "Yes, if you acclimatise for two days in Leh, keep Pangong to one night and plan short driving days.",
      },
    ],
  },
  "leh-ladakh-in-july": {
    sections: LADAKH_MONTH_EXTRA("July", {
      things: [
        "Enjoy the warmest nights of the year by Pangong.",
        "Visit Turtuk in apricot season.",
        "Trek the Markha Valley or explore Zanskar, both at their best.",
        "Raft on the Zanskar river near Nimmu.",
        "Drive to Tso Moriri and Hanle in their mildest weather.",
      ],
      mistakes: [
        "Planning the Manali highway with no buffer day in monsoon season.",
        "Crossing streams in the afternoon on the Manali road.",
        "Forgetting a rain jacket for the approach roads.",
        "Skipping sunscreen: July sun at 3,500 m burns quickly.",
      ],
    }),
    faqs: [
      {
        q: "Is July good for Ladakh with kids?",
        a: "Yes. Warm days and the mildest nights at Pangong make it comfortable, with two acclimatisation days in Leh first.",
      },
    ],
  },
  "leh-ladakh-in-august": {
    sections: LADAKH_MONTH_EXTRA("August", {
      things: [
        "Taste fresh apricots in Turtuk and lower Nubra early in the month.",
        "Visit Hanle for stargazing on clear late-August nights.",
        "Drive the Shyok road between Nubra and Pangong when open.",
        "Explore Sham Valley villages such as Likir and Alchi.",
        "Combine Ladakh with Kashmir by driving in from Srinagar.",
      ],
      mistakes: [
        "Booking flights late for the Independence Day week.",
        "Leaving no buffer day on the Manali or Srinagar highways.",
        "Skipping warm layers for Pangong and Tso Moriri nights.",
        "Rushing to Pangong before acclimatising.",
      ],
    }),
    faqs: [
      {
        q: "Is August good for Ladakh with kids?",
        a: "Yes. Pleasant days and comfortable nights suit families. Acclimatise for two days and book early around 15 August.",
      },
    ],
  },
  "turtuk-travel-guide": {
    sections: [
      {
        h: "Food to try in Turtuk",
        list: [
          "Dried apricots and apricot kernels, sold by village families.",
          "Apricot oil, pressed from the kernels and used in cooking and as a moisturiser.",
          "Buckwheat breads and simple Balti home cooking served in homestays.",
          "Local tea in family homes and small cafés.",
          "Ask your homestay host to cook a traditional Balti meal.",
        ],
      },
      {
        h: "Combine Turtuk with the rest of Ladakh",
        list: [
          "Nubra loop: Leh, Diskit, Hunder, Turtuk, back to Hunder or Diskit, then Pangong via the Shyok road (when open).",
          "Allow at least two nights in Nubra to include Turtuk without rushing.",
          "From Pangong, return to Leh over Chang La.",
          "Add Tso Moriri and Hanle for a 9 to 10 day Ladakh trip.",
        ],
      },
    ],
    faqs: [
      {
        q: "What food is Turtuk famous for?",
        a: "Apricots in every form: fresh, dried, kernels and apricot oil. Homestays also serve Balti home cooking.",
      },
      {
        q: "Can I go from Turtuk to Pangong?",
        a: "Yes, via Diskit and the Shyok road to Durbuk and Tangtse when it is open, about 8 to 9 hours. Ask locally about conditions.",
      },
    ],
  },
};

export function withSpitiLadakhExtras(posts: BlogPost[]): BlogPost[] {
  return posts.map((p) => {
    const x = SPITI_LADAKH_EXTRAS[p.slug];
    return x ? { ...p, sections: [...p.sections, ...x.sections], faqs: [...p.faqs, ...x.faqs] } : p;
  });
}
