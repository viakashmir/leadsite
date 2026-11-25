// TDI depth pass 2 (2026-11-25): gondola, Gurez camping, travel FAQs,
// Srinagar to Leh taxi and Nigeen houseboat posts, each paired with
// tdiholidayventures.com pages. Appended by withAdditions in blog/index.ts.
// Rules: checkable facts, no typed fares or prices, no em dashes, no
// question already asked elsewhere on the site.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const TDI_DEPTH_4_ADDITIONS: Record<string, Addition> = {
  "gulmarg-gondola-guide": {
    sections: [
      {
        h: "Is Phase 1 enough for your Gulmarg visit?",
        p: [
          "For many visitors it is. Phase 1 lifts you from the Gulmarg base to Kongdori, a wide bowl of meadows in summer and snowfields in winter, with views back over Gulmarg and the valley. Kongdori has sledging, pony rides and short walks, and it is lower and more sheltered than Apharwat, so it suits families with small children, older travellers and anyone who feels the altitude. If your day is short, if the weather is unsettled, or if you are coming on a day trip from Srinagar with a late start, Phase 1 alone is a sensible plan.",
        ],
      },
      {
        h: "When is Phase 2 worth adding?",
        p: [
          "Phase 2 continues from Kongdori to the shoulder of Apharwat, close to 4,000 m. It is worth adding when the sky is clear, when you want real high-mountain snow even in early summer, when you want the view towards the Pir Panjal and, on the clearest days, the distant peaks to the north, and when skiers want the long descents. It is not worth it in cloud, when you will see nothing, or for anyone with heart or breathing problems. Phase 2 tickets are only useful if you also hold or buy Phase 1, since there is no other way up to Kongdori by cable.",
        ],
      },
      {
        h: "What should you check before buying gondola tickets?",
        list: [
          "That you are on the official Jammu and Kashmir Cable Car Corporation website, not a look-alike site or a social media seller.",
          "The date and time slot, and that your group's names and ID numbers match the IDs you will carry.",
          "Whether the ticket covers Phase 1 only or both phases.",
          "Any notice of maintenance shutdown on your dates.",
          "The corporation's rule on refunds or changes when a phase closes because of weather.",
        ],
      },
      {
        h: "Arrange the drive around your gondola slot",
        p: [
          "If you hold a morning slot and are staying in Srinagar, leave by about 7 am. The drive takes about two hours and traffic builds on the Tangmarg climb from mid-morning, especially on weekends and in snow. Add time for parking and the walk to the base station. If you are staying in Gulmarg, you can walk or take a short ride to the base. Tell your driver the slot time the night before so he plans the start, and do not book a gondola slot for the afternoon of your arrival from Jammu or Pahalgam.",
        ],
      },
      {
        h: "What can you do if a stage closes?",
        p: [
          "Phase 2 closes often in high wind, heavy snow or poor visibility, and Phase 1 closes less often. If Phase 2 closes after you are at Kongdori, enjoy the snow there and come down on Phase 1. If the whole gondola is closed, use the day for a walk to the church and Maharani temple, a pony ride to Khilanmarg in summer, sledging on the meadow in winter, or a visit to the frozen Drung waterfall near Tangmarg in deep winter. If you have a second day in Gulmarg, try again then; that flexibility is the strongest reason to stay overnight.",
        ],
      },
      {
        h: "How does the season change your gondola plan?",
        p: [
          "From December to March, the gondola is the ski lift for Apharwat's slopes and the queues are long on clear days; book early and go early. In April and May, Kongdori still has snow while the lower meadow turns green, which surprises many visitors. From June to September, Kongdori is a meadow and Apharwat holds patches of snow and a frozen lake in some years; this is the best time for clear views and walks. October and November bring crisp air and few crowds, with the first snow possible any week.",
        ],
      },
    ],
    faqs: [
      { q: "Is Phase 1 of the Gulmarg gondola enough for a first visit?", a: "For many visitors yes, especially families, older travellers and day-trippers. Add Phase 2 only on clear days if you are fit." },
      { q: "What time should I leave Srinagar for a morning gondola slot?", a: "By about 7 am, since the drive takes about two hours and traffic builds on the Tangmarg climb from mid-morning." },
      { q: "Does the Gulmarg gondola close for maintenance?", a: "Yes, for scheduled maintenance periods each year. Check the corporation's notices before booking." },
      { q: "Can I buy only a Phase 2 gondola ticket?", a: "No. You need Phase 1 to reach Kongdori, where Phase 2 starts." },
      { q: "Is Phase 2 worth it on a cloudy day?", a: "Usually not. In cloud you will see little from Apharwat, so stay with Phase 1." },
      { q: "Is there snow at Kongdori in April?", a: "Often yes. Kongdori can hold snow into April and May while the lower meadow turns green." },
      { q: "What should I do if the gondola is closed on my Gulmarg day?", a: "Walk to the church and temple, take a pony to Khilanmarg in summer or sledge in winter, and try again the next day if you can." },
    ],
  },

  "camping-in-gurez-valley": {
    sections: [
      {
        h: "Confirm the camp before packing",
        p: [
          "Camps in Gurez are seasonal and small, run by private operators and local families along the Kishanganga near Dawar, at Bagtore and in Tulail. Some move or close from year to year. Before you leave Srinagar, confirm the camp's exact location, a working phone number for the owner, the dates it is open, and whether it has the paperwork for visitors. Ask for recent photos of the tents and the washroom block, not pictures from an earlier season.",
        ],
      },
      {
        h: "Find out what comes with a tent",
        list: [
          "Bedding: mattresses, quilts or sleeping bags, and how warm they are for night temperatures near freezing in autumn.",
          "Washrooms: attached inside the tent, shared in a block, or a dry toilet.",
          "Hot water: in buckets at fixed times or from a geyser.",
          "Meals: dinner and breakfast included, and whether lunch can be packed for Tulail.",
          "Power: hours of electricity or solar charging.",
          "Bonfire and lighting rules at night.",
        ],
      },
      {
        h: "Leave room in the schedule for the road",
        p: [
          "The road from Bandipora over Razdan pass is the only way in. It can close for a few hours after rain, landslides or early snow, and convoys and checkpoints add time. Plan to reach the camp by mid-afternoon, keep a spare day at the end of the trip before any flight from Srinagar, and do not try to drive in and out of Gurez in a single day.",
        ],
      },
      {
        h: "Pack for an evening away from the road",
        p: [
          "Evenings at a riverside camp are cold and dark. Bring a warm jacket, a hat, gloves, thermal layers, a head torch with spare batteries, a power bank, slippers for the washroom walk, and any medicines you need. Mobile signal is limited, so download maps and tell family your plan before you lose coverage at Razdan.",
        ],
      },
    ],
    faqs: [
      { q: "Which villages in Gurez have riverside camps?", a: "Camps are usually set up along the Kishanganga near Dawar, at Bagtore and in the Tulail valley. Confirm the exact site with the operator." },
      { q: "How warm are the bedding and tents at Gurez camps?", a: "Most camps provide mattresses and heavy quilts or sleeping bags. Ask how warm they are, since autumn nights can drop near freezing." },
      { q: "Is the road to Gurez camps closed after rain?", a: "It can close for some hours after rain, landslides or early snow on Razdan pass, so keep spare time in your plan." },
      { q: "What time should I reach a Gurez camp?", a: "By mid-afternoon, so you arrive in daylight and have time to settle before the cold evening." },
      { q: "Do Gurez camps have electricity?", a: "Many have limited hours of power or solar charging. Carry a power bank and a head torch." },
      { q: "Can I get a packed lunch from a Gurez camp for a Tulail day?", a: "Many camps will pack lunch on request. Ask the evening before." },
      { q: "Should I bring my own sleeping bag to Gurez?", a: "It is not usually needed at a booked camp, but a warm liner helps on cold autumn nights." },
      { q: "Are bonfires allowed at Gurez camps?", a: "Some camps light bonfires in a set place. Follow the camp's rules and never light fires in the forest." },
    ],
  },

  "kashmir-travel-faqs": {
    sections: [
      {
        h: "Which season fits your trip?",
        list: [
          "March to May: spring, almond and tulip blossom, green meadows and snow still high up. Cool nights.",
          "June to August: the warmest months, all roads open, Gurez, Sonamarg and Ladakh at their best. Busiest with families.",
          "September to November: clear days, autumn colours, the saffron harvest and fewer crowds. Cold nights from October.",
          "December to February: snow, skiing in Gulmarg, frozen scenery and short days. Some roads close.",
        ],
      },
      {
        h: "How do you get to Srinagar?",
        p: [
          "Srinagar airport has direct flights from Delhi, Mumbai and several other Indian cities, and connecting flights from most of the country. By rail, trains run from across India to Jammu Tawi and Shri Mata Vaishno Devi Katra, and since 2025 the line through the Chenab bridge links Katra with Srinagar, with Vande Bharat and other trains on the route. By road, the national highway from Jammu through the Navyug tunnel to Qazigund and Srinagar takes most of a day.",
        ],
      },
      {
        h: "What should you check before departure?",
        list: [
          "Your photo ID for every traveller, including children, and copies.",
          "A postpaid mobile connection, since prepaid SIMs from other states do not work in Jammu and Kashmir.",
          "Hotel, cab and gondola bookings with phone numbers saved offline.",
          "Road and weather updates for any mountain day, especially in winter.",
          "Medicines and a basic first aid kit.",
          "Cash for ponies, shikaras and small shops, alongside cards and UPI.",
        ],
      },
      {
        h: "Rules visitors often miss",
        p: [
          "Drones need permission and are restricted in many areas. Photography of army, police and security installations is not allowed. Outside cabs cannot carry you inside some tourist areas, such as Pahalgam's side valleys, where local union taxis take over. Alcohol is sold only in a few licensed places. During Ramadan, eating in public during the day in conservative areas can cause offence, though restaurants catering to tourists stay open.",
        ],
      },
      {
        h: "Emergency help in Kashmir",
        p: [
          "Dial 112 for police, fire and ambulance across India. Cyber fraud can be reported on 1930. Hotels and tour operators can contact the tourist police and local hospitals. Keep your operator's emergency number, your hotel's number and your embassy's number, if you are a foreigner, saved on your phone and written on paper.",
        ],
      },
    ],
    faqs: [
      { q: "Is there a train from Katra to Srinagar?", a: "Yes. Since 2025 the railway line through the Chenab bridge links Katra with Srinagar, with Vande Bharat and other trains." },
      { q: "Who should I call first in a Kashmir emergency?", a: "Dial 112 for police, fire and ambulance, then tell your hotel and tour operator so they can help locally." },
      { q: "Can I fly a drone in Kashmir as a tourist?", a: "Not without permission. Drones are restricted in many areas, so check the rules before bringing one." },
      { q: "Is alcohol easily available in Kashmir?", a: "No. It is sold only at a few licensed places, mostly in Srinagar." },
    ],
  },

  "srinagar-to-leh-taxi": {
    sections: [
      {
        h: "What changes when Zojila access changes?",
        p: [
          "Zojila is the bottleneck of the route. The traffic police and the Border Roads Organisation sometimes run it as one-way traffic, with fixed hours for vehicles going towards Kargil and fixed hours for vehicles returning to Sonamarg. When that happens, your taxi has to leave Srinagar or Sonamarg early enough to cross in the right window, or wait for the next one. After snow or landslides, the pass can close for hours or days. In early and late season, ask your driver the night before what the timing rules are, and keep a spare day in Kargil or Leh. Work on the Zojila tunnel is under way; until it opens, the pass road is the only route.",
        ],
      },
      {
        h: "Other ways to split the journey",
        p: [
          "Most travellers stop at Kargil, which has the most hotels. Drass makes a quieter halt for those who want an early start at the war memorial and less traffic. Mulbekh, beyond Kargil, has guesthouses near its rock-cut Maitreya statue. Some travellers start from Sonamarg after a night there, which gives a fresh morning at Zojila. On the return from Leh, Lamayuru is a good night halt with its monastery and moonland landscape.",
        ],
      },
      {
        h: "When should you plan onward sightseeing from Leh?",
        p: [
          "Not on the day after arrival. Even after a gradual road climb, Leh at about 3,500 m needs a rest day before Khardung La, Nubra or Pangong. Use that day for a short walk to Shanti Stupa, Leh Palace or the market. Apply for your protected area registration for Nubra, Pangong and other areas before you arrive, so the taxi plan for later days is not held up.",
        ],
      },
    ],
    faqs: [
      { q: "Is Zojila one-way at certain hours?", a: "At times yes. Authorities may run fixed hours for each direction, so ask your driver the night before." },
      { q: "Can I stop at Drass instead of Kargil?", a: "Yes. Drass is quieter, with a few hotels and guesthouses near the war memorial." },
      { q: "What is there to see at Mulbekh?", a: "A large rock-cut Maitreya statue beside the highway and a small monastery above the village." },
      { q: "Should I spend a night in Sonamarg before going to Leh?", a: "It helps. A night in Sonamarg gives a fresh, early start at Zojila." },
      { q: "Is Lamayuru a good night halt on the way back from Leh?", a: "Yes. It has guesthouses, a famous monastery and the moonland landscape nearby." },
      { q: "When is the Zojila tunnel expected to open?", a: "It is still under construction, and dates have shifted. Use the pass road until the tunnel is officially opened." },
      { q: "Should I go sightseeing the day after reaching Leh by road?", a: "No. Take a rest day in Leh first, even after the road climb, before Khardung La, Nubra or Pangong." },
      { q: "Can I register for Nubra and Pangong before reaching Leh by road?", a: "Yes. Registration for the protected areas can be done online through the Leh administration portal before you arrive." },
      { q: "How early does a Srinagar to Leh taxi leave?", a: "Usually by 6 or 7 am, to reach Zojila before traffic builds and to arrive in Kargil by evening." },
      { q: "What if Zojila closes during my trip?", a: "Wait in Sonamarg or Kargil until it reopens, or change plans. Keep a spare day for this reason." },
    ],
  },

  "nigeen-lake-houseboats": {
    sections: [
      {
        h: "Find the right lake and get a usable address",
        p: [
          "Many houseboats use the word Dal or Nigeen in their names, and some agents describe any boat north of Dal as Nigeen. Ask for the houseboat's exact name, the owner's name and phone number, and the nearest landmark or ghat. Nigeen boats are usually reached from the Nigeen Club side, the Ashai Bagh bridge area or the lanes behind Hazratbal Road. Save the location pin before you arrive, since drivers from outside the city may not know individual boats.",
        ],
      },
      {
        h: "Check how guests and luggage board",
        p: [
          "Some Nigeen houseboats are moored close to the shore and joined to it by a wooden walkway, so you can walk aboard with your bags. Others are out on the water and need a short shikara ride. For older guests, wheelchair users and families with heavy luggage, the walkway is much easier. Ask which type your boat is, and whether staff will carry bags. Boarding in the dark or in rain is slippery; ask the boat to send someone to meet you.",
        ],
      },
      {
        h: "Ask for the specific room you will use",
        p: [
          "A houseboat usually has two to four bedrooms behind a sitting room, dining room and front veranda. Rooms at the back are quieter and more private; front rooms are closer to the veranda and the view. Ask for photos of the room you will get, the bed size, whether the bathroom is attached, and whether the room has a heater or electric blanket. If two families share a boat, agree on who gets which room before arrival.",
        ],
      },
      {
        h: "Compare dinner, breakfast and cold-weather facilities",
        p: [
          "Most Nigeen houseboats include breakfast and dinner, cooked in a kitchen boat moored behind. Ask what dinner usually is, whether Kashmiri dishes can be ordered, and whether vegetarian and Jain meals are possible. In winter, check how the rooms are heated, whether there is a bukhari in the sitting room, whether hot water is from a geyser, and whether there is backup power. Houseboats lose heat faster than hotels, so heating matters more.",
        ],
      },
      {
        h: "Decide which night of your trip fits the stay",
        p: [
          "A houseboat night works best when you are rested and have time to enjoy it. Many travellers choose the first night, arriving at Srinagar and settling into the calm of Nigeen. Others prefer the last night, as a relaxed end before the flight. Avoid the night before a very early departure or a long drive, since getting off the boat and finding your car can take time. Two nights let you enjoy a full day on the water.",
        ],
      },
      {
        h: "Two plans for the same Srinagar night",
        p: [
          "Plan one: arrive in the afternoon, settle on a Nigeen houseboat, take a sunset shikara to Dal, and have dinner on board. Plan two: stay in a Boulevard Road hotel, walk the promenade, and take a shikara from a Dal ghat. The first is quieter and more atmospheric; the second is closer to shops and restaurants. Choose based on what you want from the night.",
        ],
      },
      {
        h: "What to send when you request a houseboat quote",
        list: [
          "Your dates and number of nights.",
          "The number of adults and children, and their ages.",
          "The number of rooms needed and bed preferences.",
          "Meal plan and dietary needs.",
          "Arrival time and whether you need pickup from the airport or station.",
          "Any mobility needs or heavy luggage.",
        ],
      },
    ],
    faqs: [
      { q: "Are some Nigeen houseboats reached by a walkway?", a: "Yes. Some are moored near the shore with a wooden walkway, which is easier for older guests and heavy luggage." },
      { q: "Which room is quietest on a Nigeen houseboat?", a: "Rooms at the back of the boat are usually quieter and more private." },
      { q: "Should a Nigeen houseboat night be at the start or end of my trip?", a: "Either works. Avoid the night before a very early departure, since leaving the boat takes time." },
    ],
  },
};
