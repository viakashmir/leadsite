import type { BlogPost, BlogSection } from "./types";
import { GAP_EXTRAS_2 } from "./gaps-extras-2";
import { GAP_EXTRAS_3 } from "./gaps-extras-3";
import { GAP_EXTRAS_4 } from "./gaps-extras-4";
import { GAP_EXTRAS_5 } from "./gaps-extras-5";
import { GAP_EXTRAS_6 } from "./gaps-extras-6";
import { GAP_EXTRAS_7 } from "./gaps-extras-7";
import { GAP_EXTRAS_8 } from "./gaps-extras-8";

// Depth layers for the 2026-11-15 gap guides, kept apart from the base posts
// so each base stays readable. Merged by slug: sections go before the last
// base section's FAQs, FAQs are appended.

type Extra = { sections?: BlogSection[]; faqs?: { q: string; a: string }[] };

export const GAP_EXTRAS: Record<string, Extra> = {
  "kashmir-6-day-itinerary": {
    sections: [
      {
        h: "Day 1 in detail: landing and the first evening",
        p: [
          "Srinagar airport is about 14 km from Dal Lake, 30 to 45 minutes by road depending on traffic at the security checkpoints. Your cab will usually meet you just outside the arrivals hall; share your flight number the evening before so the driver can track delays. Check in, eat a late lunch and rest for an hour: you will feel the change in air even at Srinagar's 1,600 m if you have flown from the plains in summer.",
          "The Mughal gardens open in the morning and close at sunset, with a small entry fee at each. If you landed by noon, do Nishat Bagh and Shalimar Bagh in the afternoon, then come back to the lake for the shikara. If you landed later, go straight to the shikara and keep the gardens for the morning of day 6 or a gap on another day. The houseboat dinner on the first night is usually included in a package; ask for kahwa after dinner and sit on the front deck, which is the best part of a houseboat night.",
        ],
      },
      {
        h: "Day 2 in detail: Sonamarg and Thajiwas",
        p: [
          "Sonamarg is about 80 km from Srinagar along the Sindh river, through Ganderbal, Kangan and Gund. The drive is one of the prettiest in Kashmir, with the river beside you most of the way and the valley narrowing as you climb. Allow 2.5 hours. In summer, leave by 8 am so you have time for the glacier and a relaxed lunch.",
          "From the Sonamarg parking area, Thajiwas glacier is about 3 km away. You can walk (an easy uphill path), ride a pony, or in some seasons take a local vehicle part of the way. Pony rates are set by the local union and displayed at the stand; agree the route and waiting time first. Zero Point on Zoji La and Fish Point are reached in Sonamarg's union taxis, not your Srinagar cab, and only when the road is open, usually from May to October.",
          "In winter, Sonamarg is reached as far as the road is cleared, and since the Z-Morh (Sonamarg) tunnel opened in 2025, the town is reachable more of the year than before. Snow activities replace the glacier walk. Start back by 4 pm.",
        ],
      },
      {
        h: "Day 3 in detail: Gulmarg and the Gondola",
        p: [
          "Book the Gondola on the official portal for a morning slot. From Gulmarg's parking area it is a short walk or pony ride to the Gondola base. Phase 1 to Kongdori takes about 10 minutes; Phase 2 to Apharwat another 10 to 12 minutes, and it is the one that closes in high wind. At Apharwat you are close to 4,000 m: walk slowly, drink water, and come down if anyone in your group feels unwell.",
          "After the Gondola, walk across the meadow to St Mary's Church, one of the oldest churches in the valley, and the edge of the golf course. In summer, a pony ride to Strawberry Valley or Khilanmarg is a good half-day. In winter, sledges run on the lower slopes and ski instructors offer short lessons. Leave Gulmarg by 4 pm in winter so you are below Tangmarg before the road freezes.",
        ],
      },
      {
        h: "Day 4 in detail: the road to Pahalgam",
        p: [
          "Treat the Pahalgam drive as part of the trip rather than a transfer. Pampore, 15 km out, is the saffron town; in late October and early November the fields are purple with crocus. Awantipora has the ruins of two 9th century stone temples built by King Avantivarman, right beside the highway. Sangam and Bijbehara have workshops making Kashmir willow cricket bats, where you can watch the clefts being shaped. After Anantnag the road leaves the highway and climbs the Lidder valley through Aishmuqam and apple orchards.",
          "You reach Pahalgam in the afternoon. Walk along the Lidder river in the evening; the riverside path near the main market and the bridge are pleasant. Book the next day's union taxi in the evening at the stand, or ask your hotel to do it, so you can leave early.",
        ],
      },
      {
        h: "Day 5 in detail: Aru, Betaab and Chandanwari",
        p: [
          "Pahalgam's taxi union runs the local sightseeing. You can hire a union cab for each point separately or as a combined round; the rate board is displayed at the stand. Aru Valley is about 12 km up the Aru road, a wide meadow with a village and treks beyond. Betaab Valley, about 15 km on the Chandanwari road, is a green, river-cut valley named after the film shot there. Chandanwari, a few kilometres further, is the starting point of the Amarnath Yatra and holds snow late into spring.",
          "A full day covers all three with time for lunch. Ponies are available in Aru for the meadow walks. Baisaran meadow above Pahalgam has been closed to visitors since April 2025; do not plan around it without checking locally. In July and August, the Chandanwari road is busy with the Amarnath Yatra and may be restricted on some days.",
        ],
      },
      {
        h: "Day 6 in detail: back to Srinagar",
        p: [
          "Leave Pahalgam by 8 am if you have an afternoon flight, or earlier for a morning one. The drive back is about 3 hours. If there is time, stop at Hazratbal or the Jamia Masjid on the way to the airport, or buy dry fruit and saffron in the city. At the airport, the outer security gate can have long queues in peak weeks; aim to reach the gate at least 2.5 hours before departure.",
        ],
      },
      {
        h: "The 6 day plan with children or elderly parents",
        p: [
          "With young children or elderly parents, keep the version with three Srinagar nights: fewer hotel changes and shorter days. Ask for an Innova Crysta or similar for comfort, ground-floor rooms where possible, and a houseboat with easy steps from the shikara. In Gulmarg, Phase 1 of the Gondola to Kongdori is often enough; Apharwat is very high and cold for small children and older travellers. In Pahalgam, Betaab Valley is the easiest of the three valleys to walk around.",
          "Keep the afternoons light. A shikara ride, a garden walk or a slow evening by the Lidder is a better use of the day than adding Doodhpathri or Yusmarg.",
        ],
      },
      {
        h: "The 6 day plan by train via Katra",
        p: [
          "If you are coming by train, the plan shifts slightly. Reach Katra or Jammu by overnight train, take the Vande Bharat from Katra to Srinagar (about three hours through the Chenab and Anji bridges), and you arrive at Srinagar station at Nowgam around midday. From Nowgam, Pahalgam is easier to reach than from the airport, so many train travellers do Pahalgam first: day 1 Srinagar station to Pahalgam, days 2 Pahalgam valleys, day 3 back to Srinagar, days 4 and 5 Gulmarg and Sonamarg, day 6 the train back.",
          "Add a day at the start if you want to visit Vaishno Devi from Katra before boarding the Vande Bharat. Check the current train timetable and booking on IRCTC; seats on the Katra to Srinagar service fill quickly in peak weeks.",
        ],
      },
      {
        h: "Common mistakes on a 6 day Kashmir trip",
        list: [
          "Trying to see Gulmarg and Sonamarg in one day. They are on different roads; each is a day.",
          "Giving Pahalgam one night on a six-day trip. Two nights is what makes six days better than five.",
          "Paying in advance for union taxis or ponies at a mark-up. They are hired locally at set rates.",
          "Not booking the Gondola. Morning slots go first in busy weeks.",
          "Leaving the last day too tight. Airport security queues can take an hour in peak weeks.",
          "Packing for the plains. Even in June, Sonamarg and Apharwat are cold.",
        ],
      },
    ],
    faqs: [
      { q: "Can I do the 6 day Kashmir trip by train?", a: "Yes. Take a train to Katra or Jammu, then the Vande Bharat from Katra to Srinagar. Many train travellers do Pahalgam first because Srinagar station is on the Pahalgam side of the city." },
    ],
  },
  "kashmir-2-nights-3-days-itinerary": {
    sections: [
      {
        h: "A 3 day plan for winter",
        p: [
          "From late December to early March, the same three days look different. Day 1 still works in Srinagar, though the gardens are bare and the afternoon is short: sunset is around 5.30 pm, so go to the shikara ghat by 3.30. Dal Lake can freeze at the edges in January; shikaras run on the open water. Day 2 is the snow day in Gulmarg. Leave Srinagar early and expect a stop at Tangmarg, where the police check that vehicles have chains or are 4x4 after fresh snowfall. Gondola Phase 1 usually runs in snow; Phase 2 depends on wind and avalanche control.",
          "In winter, think about the overnight in Gulmarg. Coming down at 5 pm on a freezing road is slow, and the morning after a snowfall in Gulmarg is the best time on the slopes. If you stay, book a hotel near the Gondola so you are not walking far in snow, and check that the room has heating included and working.",
        ],
      },
      {
        h: "A 3 day plan for spring and the tulip weeks",
        p: [
          "In late March and April, the Indira Gandhi Memorial Tulip Garden above Dal Lake opens for about a month, with tulips in long rows below the Zabarwan hills. Add it to day 1 or day 3; it sits next to Chashme Shahi and close to Nishat and Shalimar, so the gardens loop takes a little longer. Go early in the day, before the crowds and the midday light. Tickets are sold at the gate and in some years online.",
          "Gulmarg in April has melting snow on the upper slopes and green patches on the meadow, and the Gondola gives you snow at Apharwat. Almond blossom at Badamwari, below Hari Parbat fort, peaks in March. It is a good season for a short trip, but book early: the tulip weeks are among the busiest of the year.",
        ],
      },
      {
        h: "A 3 day plan for summer",
        p: [
          "From May to August, the days are long and warm, and the 3 day plan is at its easiest. Dal Lake has lotus beds in July and August. Gulmarg's meadow is green and full of flowers, and a pony ride to Strawberry Valley or Khilanmarg adds a good half-day. The Gondola is busiest in these months; book early and take the first slot.",
          "With long daylight, a few travellers squeeze Sonamarg into the third morning. It is possible with an evening flight (Sonamarg is about 2.5 hours each way), but it means a very long last day. A calmer option is Doodhpathri, about 2 hours from Srinagar, as a half-day on day 3.",
        ],
      },
      {
        h: "Houseboat or hotel for a short stay",
        p: [
          "On a two-night trip, one houseboat night is the usual choice: you get the experience of the lake without giving up a hotel's space and hot water for both nights. Dal Lake houseboats are closest to the Boulevard and the shikara ghats; Nigeen Lake is quieter and greener; the Jhelum river boats are simpler. Check the boat's category, whether the shikara to and from the ghat is included at any hour, and whether there is a heater in winter.",
          "For hotels, the Boulevard Road and Rajbagh are convenient for the airport and the lake. If you are flying early on day 3, a hotel closer to the airport road saves time.",
        ],
      },
      {
        h: "Getting from the airport and around Srinagar",
        p: [
          "The prepaid taxi counter at Srinagar airport has fixed rates to the main areas, which is a good option if you have not pre-booked a cab. On a package, the cab meets you at arrivals and stays with you for the trip. In the city, cabs and auto-rickshaws are easy to find. Shikaras from the ghats on the Boulevard are priced per boat per hour and the rate is displayed; agree the route before you set off.",
        ],
      },
      {
        h: "If you have only one full day",
        p: [
          "If flight times leave you only one full day, spend it in Gulmarg and keep the arrival afternoon for the shikara and the departure morning for one garden. That gives you the Gondola, the snow or meadow, and the lake, which are the three experiences most first-time visitors want. Skip shopping trips arranged by drivers; buy saffron and dry fruit at a known shop near the Boulevard or at the airport instead.",
        ],
      },
    ],
  },
  "gulmarg-budget-trip": {
    sections: [
      {
        h: "How to compare transport costs from Srinagar",
        p: [
          "Work out the cost per person, not per vehicle. A private sedan from Srinagar to Gulmarg and back is priced for the car, so for four people it can cost about the same per head as shared transport, with the bonus of leaving when you want and stopping at Drung or Tangmarg. For a solo traveller or a couple, the shared cab to Tangmarg and a shared vehicle up to Gulmarg is the cheapest way.",
          "In winter, ask whether the price includes a change to a 4x4 at Tangmarg if the road needs it. Some Srinagar sedans stop at Tangmarg after heavy snow, and you then pay separately for a local 4x4 to the top. A cab that carries chains, or an Innova with a driver used to snow, can save that extra cost.",
        ],
      },
      {
        h: "What you must not cut to save money",
        list: [
          "Warm clothes and waterproof boots in winter. Cold, wet feet will end the day early.",
          "Water and some food. Altitude and cold make you tired faster.",
          "A licensed guide or instructor for skiing or any off-piste snow activity. Avalanche risk is real above the marked runs.",
          "The official Gondola ticket. Tickets from touts may be for the wrong slot or not valid.",
          "Leaving on time in winter. A late, frozen descent can cost more than a night's room.",
        ],
      },
      {
        h: "Free and almost free things to do in Gulmarg",
        p: [
          "The meadow itself is the main sight, and walking it costs nothing. St Mary's Church, built in the early 1900s, stands on a small rise above the meadow. The golf course, one of the highest in the world, is good for a walk on its edge in summer. The view of the Maharaja's Palace on the hill, the Gondola base area and the snow slopes near the ski school are all on foot.",
          "In winter, watching skiers on the lower slopes and the sunset over the Pir Panjal is the best free entertainment. In summer, a walk to the edge of the forest towards Ningle Nallah gives quiet views without a pony.",
        ],
      },
      {
        h: "A budget plan for skiers",
        p: [
          "If you are going to Gulmarg to ski, the budget picture is different. Stay at least two or three nights, close to the Gondola or the ski school slopes, and look at guesthouses and simpler hotels rather than resorts. Rent skis and boots in Gulmarg from established shops. The Indian Institute of Skiing and Mountaineering (IISM) runs fixed-length courses in the season at government rates, which is usually the best value for beginners; seats are limited and booked in advance.",
          "For more experienced skiers, the Gondola's Phase 2 gives access to the high slopes on Apharwat, which are the reason Gulmarg is famous. Hire a certified guide for anything outside the marked area.",
        ],
      },
      {
        h: "Build the day from the main outing backwards",
        p: [
          "Decide your main outing first: the Gondola slot, a ski lesson, or a pony ride to Strawberry Valley. Then work back. If your Gondola slot is at 10 am, you need to be at the base by 9.30, which means leaving Srinagar by 7.30. If you are skiing, the lesson time sets the day. This avoids paying for things you do not have time to enjoy, and stops a driver or guide steering you into extras.",
        ],
      },
    ],
  },
  "kashmir-in-autumn": {
    sections: [
      {
        h: "Autumn weather month by month",
        p: [
          "Autumn is the driest season in Kashmir. September still has some summer warmth, with days in the high twenties in Srinagar and cool nights around 12 to 14°C. October is the most settled month, with clear blue skies, days around 20°C and nights falling to 5 to 8°C. November brings colder air: days of 12 to 15°C, nights near zero in the first half and below zero later, with morning fog over Dal Lake on some days. Gulmarg and Pahalgam are 5 to 8°C colder than Srinagar.",
          "Rain is rare in autumn, which makes it a good season for photography and walking. The first western disturbance of winter can bring snow to the high passes and Apharwat in November, and occasionally a cold spell with rain in the valley.",
        ],
      },
      {
        h: "Gardens in autumn: what to see in each",
        list: [
          "Naseem Bagh: the oldest chinar grove in Srinagar, on the Dal Lake shore near Hazratbal. Best on a clear morning.",
          "Nishat Bagh: terraces down to the lake with chinars along the sides; the colours reflect in the water channels.",
          "Shalimar Bagh: quieter, with old chinars and the black stone pavilion at the top.",
          "Chashme Shahi and Pari Mahal: smaller, higher up, with views across the lake to the colours below.",
          "Char Chinar: the island in Dal Lake, reached by shikara, with chinars at its corners.",
          "Kashmir University and Hazratbal: chinar-lined avenues near the shrine.",
        ],
      },
      {
        h: "Photography tips for the chinar season",
        p: [
          "The best light is early morning and the two hours before sunset, when the sun is low and lights the leaves from behind. Fallen leaves carpet the gardens by mid-November, and the gardeners sweep them into piles that are burnt or collected for kangri charcoal in winter. A clear morning after a cold night gives the strongest colours and often mist on the lake. A shikara ride at sunrise from your houseboat gives views of the chinars along the shore with the Zabarwan hills behind.",
        ],
      },
      {
        h: "Treks and outdoor trips in early autumn",
        p: [
          "September and early October are the end of the trekking season in the high meadows. The Kashmir Great Lakes trek usually runs until mid-September, and day walks from Sonamarg, Aru and Gulmarg are still open. By late October the high camps close and nights in the mountains are very cold. For a short outing, Doodhpathri and Yusmarg are beautiful in early autumn, with golden grass and pine forest.",
        ],
      },
      {
        h: "Festivals and busy weeks in autumn",
        p: [
          "The Durga Puja and Diwali holiday weeks bring many travellers from Kolkata, Gujarat, Maharashtra and elsewhere, and Srinagar's hotels and houseboats fill up for a week or two. If you can, avoid those exact weeks or book well in advance. The rest of autumn is quiet. Kashmir's own autumn rhythm is the harvest: apples, saffron, paddy in the fields around Srinagar and walnuts.",
        ],
      },
      {
        h: "Autumn for honeymooners and photographers",
        p: [
          "Autumn suits couples who want quiet, clear skies and warm days without crowds. A houseboat night on Nigeen Lake, a Gulmarg day on the golden meadow and two nights by the Lidder in Pahalgam make a calm autumn honeymoon. For photographers, the combination of chinar colour, clear air and low sun makes it the best season of the year. Bring a polariser for the lake reflections and plan sunrise and sunset sessions.",
        ],
      },
    ],
  },
  "how-to-choose-a-kashmir-travel-agent": {
    sections: [
      {
        h: "Questions to ask any Kashmir agent on the first call",
        list: [
          "Which company will run my trip on the ground in Kashmir, and how long has it operated?",
          "Can you send the hotel names, room types and meal plans for each night before I pay?",
          "Which vehicle model will I get, and is it the same car for the whole trip?",
          "What happens if Sonamarg or the Gondola is closed on my day?",
          "What is not included, and what should I pay locally?",
          "What is your cancellation policy, in writing?",
          "Who is my contact in Kashmir, and what is their number?",
        ],
      },
      {
        h: "Reading reviews without being misled",
        p: [
          "Look at reviews over several years, on more than one platform, and read the three-star ones first. A company with hundreds of five-star reviews and none below is either very new to reviews or curating them. Useful reviews mention specifics: the hotel was changed and the agent fixed it, the driver knew the road, the houseboat was as shown. Reviews that only praise the 'beautiful Kashmir' tell you about Kashmir, not the agent.",
          "Ask the agent for references from recent travellers in your city if you are unsure. Established agents are usually happy to share a phone number of a past client who agreed to it.",
        ],
      },
    ],
  },
};

export function withGapExtras(posts: BlogPost[]): BlogPost[] {
  return posts.map((p) => {
    const xs = [GAP_EXTRAS, GAP_EXTRAS_2, GAP_EXTRAS_3, GAP_EXTRAS_4, GAP_EXTRAS_5, GAP_EXTRAS_6, GAP_EXTRAS_7, GAP_EXTRAS_8].map((r) => r[p.slug]).filter(Boolean) as Extra[];
    if (xs.length === 0) return p;
    return {
      ...p,
      sections: [...p.sections, ...xs.flatMap((x) => x.sections ?? [])],
      faqs: [...p.faqs, ...xs.flatMap((x) => x.faqs ?? [])],
    };
  });
}
