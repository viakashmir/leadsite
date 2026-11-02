import type { BlogPost, BlogSection } from "./types";

// Extra sections and FAQs for the Spiti month guides (spiti-months.ts) and the
// Kinnaur and Lahaul guides (kinnaur-lahaul-guides.ts). Same fact rules: no em
// dashes, no invented prices.

type Extra = { sections: BlogSection[]; faqs: BlogPost["faqs"] };

const STAYS_SPITI = (month: string, notes: string[]): BlogSection => ({
  h: `Where to stay in Spiti in ${month}`,
  list: notes,
});

export const SPITI_KINNAUR_EXTRAS: Record<string, Extra> = {
  "spiti-valley-in-february": {
    sections: [
      {
        h: "Places to visit in Spiti in February",
        list: [
          "Key Monastery (about 4,160 m): the white monastery on its hill above the snowy Spiti river, with monks in residence through winter.",
          "Kibber (about 4,270 m): base for snow leopard tracking, with ibex and blue sheep on the slopes.",
          "Tabo Monastery: founded in 996 CE, with ancient murals; the cold, dim halls are atmospheric in winter.",
          "Dhankar: the cliffside monastery and village above the confluence of the Spiti and Pin rivers.",
          "Kaza market and the Sakya Tangyud monastery.",
          "Langza, Hikkim and Komic, when the road is cleared, for snowy villages and huge views.",
        ],
      },
      STAYS_SPITI("February", [
        "Homestays in Kaza, Kibber, Tabo and Langza are the main option, with heated rooms and home-cooked meals.",
        "A few guesthouses in Kaza stay open; confirm heating and generator backup.",
        "Expect bucket water warmed on the stove and dry compost toilets in many homes.",
        "Book through your operator or call ahead: many stays do not appear online in winter.",
      ]),
      {
        h: "Food in winter Spiti",
        list: [
          "Thukpa and thenthuk: noodle soups that are a winter staple.",
          "Momos and tingmo, a steamed bread, in Kaza cafés that stay open.",
          "Butter tea and sweet milk tea served all day in homestays.",
          "Dried vegetables, barley flour (tsampa) and simple dal and rice in village homes.",
        ],
      },
    ],
    faqs: [
      { q: "What can I see in Spiti in February?", a: "Key Monastery, Kibber, Tabo, Dhankar and Kaza, plus Langza, Hikkim and Komic when roads are clear. Kibber is the base for snow leopard tracking." },
      { q: "Is there electricity and water in Spiti in February?", a: "Electricity is available with frequent cuts, and pipes often freeze, so homestays provide warmed water in buckets." },
    ],
  },
  "spiti-valley-in-may": {
    sections: [
      {
        h: "Places to visit in Spiti in May",
        list: [
          "Nako (about 3,600 m): the lake, old village and monastery, a good acclimatisation stop.",
          "Gue: the naturally preserved mummy of a monk, near the road between Nako and Tabo.",
          "Tabo Monastery and the meditation caves above the village.",
          "Dhankar Monastery and the short walk up to Dhankar lake, if snow allows.",
          "Key Monastery, Kibber and the Chicham bridge over a deep gorge.",
          "Langza (fossils and the big Buddha statue), Hikkim (one of the world's highest post offices) and Komic.",
          "Pin Valley, as far as Mudh when the road is open.",
        ],
      },
      STAYS_SPITI("May", [
        "Kaza hotels and guesthouses reopen through the month, with good availability.",
        "Homestays in Langza, Komic, Kibber and Demul start hosting guests again.",
        "Tabo and Nako guesthouses are open and make good acclimatisation stops.",
        "Chandratal camps are closed in most years until the road opens.",
      ]),
      {
        h: "Getting there in May",
        list: [
          "Fly or take a train to Chandigarh, then drive to Shimla (about 3 to 4 hours).",
          "From Shimla, two days to Kaza with nights at Kalpa or Sangla and at Nako or Tabo.",
          "HRTC buses run from Shimla and Reckong Peo to Kaza.",
          "Plan to return the same way unless Kunzum has opened early.",
        ],
      },
    ],
    faqs: [
      { q: "What are the best places to visit in Spiti in May?", a: "Nako, Gue, Tabo, Dhankar, Key Monastery, Kibber, Langza, Hikkim, Komic and Pin Valley." },
      { q: "Are hotels open in Spiti in May?", a: "Most hotels, guesthouses and homestays reopen during May, with good availability before the June rush." },
    ],
  },
  "spiti-valley-in-august": {
    sections: [
      {
        h: "Places to visit in Spiti in August",
        list: [
          "Chandratal Lake, with camps operating fully.",
          "Kunzum Pass (about 4,590 m), with the Kunzum Mata temple and views of the Bara Shigri glacier area.",
          "Pin Valley National Park and Mudh village, green and accessible in August.",
          "Langza for fossils and the Buddha statue; Hikkim post office; Komic monastery.",
          "Key Monastery, Kibber and the Chicham bridge.",
          "Dhankar lake walk above Dhankar Monastery.",
          "Tabo, Nako and Gue on the Shimla side.",
        ],
      },
      STAYS_SPITI("August", [
        "Kaza hotels and guesthouses are open and busy around the Ladarcha fair and Independence Day.",
        "Village homestays in Langza, Komic, Demul and Mudh are a great way to see summer farm life.",
        "Chandratal camps operate fully; book weekends ahead.",
        "Tabo, Nako and Kalpa are good stops on the Shimla side.",
      ]),
      {
        h: "Chandratal in August",
        list: [
          "Days are pleasant and nights near freezing, so carry a warm jacket.",
          "Streams on the Batal road run high in the afternoon; reach the lake in the morning or early afternoon.",
          "Camps are a few kilometres from the lake; camping on the shore is not allowed.",
          "Walk around the lake in the morning, when reflections are best.",
        ],
      },
    ],
    faqs: [
      { q: "What are the best places to visit in Spiti in August?", a: "Chandratal, Kunzum Pass, Pin Valley and Mudh, Langza, Hikkim, Komic, Key Monastery, Kibber, Dhankar and Tabo." },
      { q: "Is Pin Valley open in August?", a: "Yes. August is one of the best months for Pin Valley and Mudh village." },
    ],
  },
  "spiti-valley-in-september": {
    sections: [
      {
        h: "Places to visit in Spiti in September",
        list: [
          "Chandratal Lake before the camps close, with calm, clear mornings.",
          "Langza and Kibber, with golden barley fields at harvest.",
          "Demul and Komic, quiet high villages with homestays.",
          "Key Monastery, ideally at sunrise or sunset.",
          "Pin Valley and Mudh, for walks and wildlife.",
          "Dhankar Monastery and lake.",
          "Tabo and Nako on the Shimla side.",
        ],
      },
      STAYS_SPITI("September", [
        "Kaza hotels and guesthouses have more availability than in summer.",
        "Village homestays are at their most rewarding during harvest.",
        "Chandratal camps operate until late September or early October.",
        "Kalpa and Sangla in Kinnaur have apple harvest views on the way in.",
      ]),
      {
        h: "Mistakes to avoid in September",
        list: [
          "Leaving Chandratal to the very end of the month, when camps may be closing.",
          "Packing only for warm days: nights are cold, especially late in the month.",
          "Skipping acclimatisation because the roads feel easy.",
          "Not booking weekends at Chandratal and in Kaza.",
        ],
      },
    ],
    faqs: [
      { q: "What are the best places to visit in Spiti in September?", a: "Chandratal before the camps close, Langza, Kibber, Demul, Komic, Key Monastery, Pin Valley, Dhankar and Tabo." },
      { q: "Is late September too late for Chandratal?", a: "Camps usually operate until late September or early October, but nights are very cold. Check camp status before you go." },
    ],
  },
  "spiti-valley-in-october": {
    sections: [
      {
        h: "Places to visit in Spiti in October",
        list: [
          "Tabo and Nako, with golden poplars along the rivers.",
          "Dhankar Monastery above autumn-coloured fields.",
          "Key Monastery and Kibber in clear, crisp light.",
          "Langza, Hikkim and Komic, with wide views and very clear skies.",
          "Pin Valley, with autumn colours along the river.",
          "Kalpa and Sangla in Kinnaur on the way in, at the end of the apple harvest.",
        ],
      },
      STAYS_SPITI("October", [
        "Kaza hotels and guesthouses are open, with some closing towards the end of the month.",
        "Homestays stay open and have good availability.",
        "Chandratal camps usually close in early October.",
        "Tabo, Nako and Kalpa make comfortable stops on the Shimla route.",
      ]),
      {
        h: "Stargazing in October",
        list: [
          "October has some of the clearest night skies of the year in Spiti.",
          "Kaza, Langza and Komic are popular spots; get away from village lights.",
          "Plan around the new moon for the darkest skies.",
          "Dress for below freezing: nights are cold by mid-October.",
        ],
      },
    ],
    faqs: [
      { q: "What are the best places to visit in Spiti in October?", a: "Tabo, Nako, Dhankar, Key Monastery, Kibber, Langza, Hikkim, Komic and Pin Valley, plus Kalpa and Sangla on the way in." },
      { q: "Is October good for stargazing in Spiti?", a: "Excellent. October has some of the clearest night skies of the year." },
    ],
  },
  "kinnaur-in-winter": {
    sections: [
      {
        h: "Things to do in Kinnaur in winter",
        list: [
          "Watch sunrise on the snowy Kinner Kailash range from Kalpa.",
          "Walk through snow-covered orchards and old wooden temples in Kalpa and Kothi.",
          "Visit the Bhimakali temple in Sarahan on the way in.",
          "Explore Kamru fort and village above Sangla.",
          "See frozen Nako lake if continuing towards Spiti.",
          "Try Kinnauri food: buckwheat breads, local rajma and apple products.",
        ],
      },
      {
        h: "Where to stay in winter",
        list: [
          "Kalpa: a few hotels and homestays stay open with heating and Kinner Kailash views.",
          "Reckong Peo: more hotels open, with banks, shops and the district hospital nearby.",
          "Sangla: some hotels open, as a base for Chitkul day trips when the road allows.",
          "Sarahan: a comfortable first or last night, lower and milder.",
          "Always confirm heating, hot water and a generator before booking.",
        ],
      },
    ],
    faqs: [
      { q: "What can I do in Kinnaur in winter?", a: "Snowy views of Kinner Kailash from Kalpa, orchard and temple walks, Kamru fort in Sangla and Sarahan's Bhimakali temple." },
      { q: "Where should I stay in Kinnaur in winter?", a: "Kalpa for views, Reckong Peo for services and Sangla for Chitkul day trips. Confirm the stay is open and heated." },
    ],
  },
  "kinnaur-in-october": {
    sections: [
      {
        h: "Food and shopping in Kinnaur",
        list: [
          "Kinnauri apples: buy directly from orchards during the harvest.",
          "Chilgoza pine nuts: a Kinnaur speciality, harvested in autumn and sold in Reckong Peo and roadside shops.",
          "Dried apricots and apple products from local producers.",
          "Buckwheat breads and local rajma in homestays.",
          "Kinnauri caps and shawls, with their distinctive woven borders.",
        ],
      },
      {
        h: "Where to stay in October",
        list: [
          "Kalpa: hotels and homestays with Kinner Kailash views.",
          "Sangla and Rakchham: riverside stays in the Baspa valley.",
          "Chitkul: guesthouses open, with cold nights.",
          "Sarahan: a peaceful stop near the Bhimakali temple.",
          "Book view rooms early for October weekends.",
        ],
      },
    ],
    faqs: [
      { q: "What is Kinnaur famous for?", a: "Apples, chilgoza pine nuts, Kinnauri caps and shawls, wooden temples and views of the Kinner Kailash range." },
      { q: "Where should I stay in Kinnaur in October?", a: "Kalpa for mountain views, and Sangla, Rakchham or Chitkul for the Baspa valley's autumn colours." },
    ],
  },
  "chitkul-in-winter": {
    sections: [
      {
        h: "Alternatives if Chitkul is cut off",
        list: [
          "Sangla: Kamru fort and village, the Baspa river and the Bering Nag temple.",
          "Rakchham: riverside meadows, reachable when the road beyond is closed.",
          "Kalpa: snowy orchards and views of Kinner Kailash.",
          "Sarahan: the Bhimakali temple, lower and easier in snow.",
        ],
      },
      {
        h: "Safety tips",
        list: [
          "Travel with a 4x4 or chains and an experienced local driver.",
          "Do not drive during snowfall, and return to Sangla by mid-afternoon.",
          "Watch for black ice on shaded stretches in the morning.",
          "Carry warm clothing, water and snacks in the car in case of delays.",
          "Tell your hotel your plans and expected return time.",
        ],
      },
    ],
    faqs: [
      { q: "What should I do if the Chitkul road is closed?", a: "Explore Sangla, Rakchham, Kalpa or Sarahan instead, and check again the next morning." },
      { q: "Do I need a 4x4 for Chitkul in winter?", a: "A 4x4 or a car with chains and an experienced local driver is strongly recommended after snowfall." },
    ],
  },
  "sissu-weather-guide": {
    sections: [
      {
        h: "Sissu in winter: snow activities and restrictions",
        list: [
          "Locals offer sledge and snow scooter rides on the snowfields; agree the price first.",
          "The waterfall freezes into ice formations in deep winter.",
          "After heavy snow, tourist vehicles may be stopped at the tunnel or near Sissu until the road is cleared.",
          "Weekends and holidays bring heavy traffic from Manali; start early.",
          "Return through the tunnel before dark, when the road ices.",
        ],
      },
      {
        h: "Places near Sissu",
        list: [
          "Gondhla: the old fort and village, a short drive further into Lahaul.",
          "Tandi: the confluence of the Chandra and Bhaga rivers, which form the Chenab.",
          "Keylong: the district headquarters, with the Kardang and Shashur monasteries nearby.",
          "Jispa: a riverside village on the Manali to Leh highway, popular for overnight stops.",
          "In summer, the road via Gramphu towards Chandratal and Spiti.",
        ],
      },
      {
        h: "Where to stay in Sissu",
        list: [
          "Sissu has hotels, homestays and camps, with more options open in summer.",
          "In winter, fewer stays operate; confirm heating and road access before booking.",
          "Keylong and Jispa have more options for road-trip stops.",
          "Many visitors see Sissu as a day trip from Manali.",
        ],
      },
    ],
    faqs: [
      { q: "What are the best places near Sissu?", a: "Gondhla fort, the Chandra and Bhaga confluence at Tandi, Keylong and its monasteries, and Jispa." },
      { q: "Can I stay in Sissu?", a: "Yes. Sissu has hotels, homestays and camps, with more open in summer. In winter, confirm the stay is open and heated." },
    ],
  },
};

export function withSpitiKinnaurExtras(posts: BlogPost[]): BlogPost[] {
  return posts.map((p) => {
    const x = SPITI_KINNAUR_EXTRAS[p.slug];
    return x ? { ...p, sections: [...p.sections, ...x.sections], faqs: [...p.faqs, ...x.faqs] } : p;
  });
}
