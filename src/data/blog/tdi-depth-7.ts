// TDI depth pass 2, part 4 (2026-11-25): final layer for batch 2 posts.
// Appended by withAdditions in blog/index.ts. Rules: checkable facts, no
// typed fares or prices, no em dashes, no question asked elsewhere.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const TDI_DEPTH_7_ADDITIONS: Record<string, Addition> = {
  "kashmir-travel-faqs": {
    sections: [
      {
        h: "Photography rules in brief",
        p: [
          "You can photograph landscapes, gardens, lakes, markets and most monuments freely. Do not photograph army, police or security posts, convoys, bridges with security, or airports. Ask before photographing people, especially women, and respect a refusal. Inside shrines and mosques, ask permission first; photography is often not allowed inside the main prayer halls. Drones need permission and are restricted in many areas.",
        ],
      },
      {
        h: "Kashmir with children: quick answers",
        p: [
          "Children usually love Kashmir: snow, ponies, shikaras and gondolas. Pack warm clothes even in summer for Gulmarg and Sonamarg, carry snacks for long drives, and plan shorter days. Most hotels provide extra beds; ask about cots for infants. Baby food and nappies are available in Srinagar but limited elsewhere, so carry enough for the mountain days. Phase 2 of the gondola is very high and is better skipped with toddlers.",
        ],
      },
    ],
    faqs: [
      { q: "Do ATMs in Gulmarg and Pahalgam run out of cash?", a: "They can on busy days, so carry enough cash from Srinagar for ponies, union taxis and small shops." },
      { q: "Do hotels in Kashmir register foreign guests?", a: "Yes. Hotels record foreign guests' passport and visa details with the authorities, so keep your passport handy at check-in." },
      { q: "Are restaurants open during Ramadan in Kashmir?", a: "Hotel and tourist restaurants stay open, while some local eateries close in the day and open after sunset." },
    ],
  },

  "nigeen-lake-houseboats": {
    sections: [
      {
        h: "Leaving a Nigeen houseboat",
        p: [
          "On your last morning, settle the bill the night before, including any extra meals, laundry or shikara rides. Ask the owner to arrange a shikara or porter for your bags and confirm the time with your driver, who will wait at the nearest road point. Allow an extra half hour for loading bags, especially if you have a flight to catch. Check the room, the bathroom and the sitting room for chargers, glasses and documents before you step off the boat.",
        ],
      },
      {
        h: "Nigeen houseboat grades explained",
        p: [
          "The tourism department grades Srinagar's houseboats into categories from deluxe down to the simpler grades, based on size, furnishings and facilities. Deluxe boats have carved walnut panelling, larger rooms, better bathrooms and more staff. Lower grades are simpler but can be clean and friendly. The grade sets a range, not a guarantee, so look at recent photos and reviews of the actual boat.",
        ],
      },
    ],
    faqs: [
      { q: "Do vendors come to Nigeen houseboats?", a: "Yes. Shikara vendors sell flowers, saffron, shawls and crafts. A polite no is enough if you are not interested." },
      { q: "Can I see lotus flowers on Nigeen Lake?", a: "In summer, usually July and August, lotus leaves and flowers cover parts of the lake." },
      { q: "Is it safe for children on a Nigeen houseboat?", a: "Yes with supervision. Keep children away from the edges and railings, and use life jackets on shikaras." },
      { q: "What birds can I see on Nigeen Lake?", a: "Kingfishers and herons all year, and migratory ducks and coots in winter." },
      { q: "Can I walk from Nigeen to Hazratbal?", a: "Yes. Lanes from the Nigeen Club area lead to the Hazratbal shrine by the lake." },
    ],
  },

  "best-areas-to-stay-in-srinagar": {
    sections: [
      {
        h: "Srinagar areas near hospitals and pharmacies",
        p: [
          "Travellers with health conditions may want to stay close to medical care. Srinagar's main hospitals include SMHS Hospital in Karan Nagar and SKIMS at Soura, and pharmacies are found in every neighbourhood. Rajbagh and Lal Chowk are central for quick access. Ask your hotel for the nearest hospital and keep its number saved.",
        ],
      },
    ],
    faqs: [
      { q: "Which Srinagar area is quietest at night?", a: "Nigeen, Hazratbal and the Zabarwan foothills are the calmest at night." },
      { q: "Is parking easy at Boulevard Road hotels?", a: "Not always. Parking is limited and the road is crowded in peak season, so ask the hotel before you book." },
      { q: "Which Srinagar area is best for sunrise photography?", a: "Near Dal or Nigeen, for sunrise on the lake and shikaras in the morning mist." },
      { q: "Will I hear the call to prayer in Srinagar hotels?", a: "In most areas yes, including at dawn. Light sleepers should bring earplugs." },
      { q: "Is Jawahar Nagar a good place to stay in Srinagar?", a: "Yes for a quiet, central, residential base with guesthouses and serviced apartments." },
      { q: "Which area should I avoid on a short Srinagar trip?", a: "Places far from Dal and the centre, such as the outer bypass, since daily drives eat into short trips." },
    ],
  },

  "kashmir-tulip-festival-trip": {
    sections: [
      {
        h: "Tulip trip on a budget",
        p: [
          "On a budget, visit the garden on a weekday morning, stay in a guesthouse at Dal Gate or Rajbagh rather than a lake-view hotel, and use shared transport for the gardens loop. Combine the garden with the Botanical Garden and Cheshma Shahi in one day, since they are close together. Book early to get the best rates, and avoid the busiest weekends of early April if you can be flexible.",
        ],
      },
    ],
    faqs: [
      { q: "Is there a cultural programme during the tulip festival?", a: "Usually yes, with Kashmiri music, handicraft and food stalls. The schedule is announced locally each year." },
      { q: "Can I visit Pari Mahal on the same day as the tulip garden?", a: "Yes. Pari Mahal, Cheshma Shahi and the Botanical Garden are all close to the tulip garden." },
      { q: "Can I reach Srinagar by train for the tulip season?", a: "Yes. Trains run from Katra to Srinagar through the Chenab bridge, saving the long road drive." },
      { q: "Is Pahalgam good to add to a tulip trip?", a: "Yes. In spring Pahalgam's meadows are green and the Lidder runs high, with snow still on the peaks." },
      { q: "Which lens is best for the tulip garden?", a: "A telephoto for single flowers and colour rows, and a wide lens for terraces with Dal Lake beyond." },
      { q: "When should I book flights for the tulip season?", a: "As early as possible, since flights to Srinagar fill up for late March and early April." },
      { q: "Can I walk on the tulip beds for photos?", a: "No. Visitors must stay on the paths; garden staff do not allow stepping into the beds." },
    ],
  },

  "budget-hotels-in-srinagar": {
    sections: [
      {
        h: "Budget stays for groups of students",
        p: [
          "Student groups can find dormitories and large family rooms in hostels and guesthouses around Dal Gate and Rajbagh. Ask for a group rate, the number of beds per room, bathroom count and whether breakfast is included. Keep the group in one place for easier coordination, carry college ID cards and a list of all members, and agree house rules on noise and curfew with the owner in advance. Shared minibuses or a tempo traveller are cheaper than several cabs for day trips.",
        ],
      },
      {
        h: "Budget winter stays in Srinagar",
        p: [
          "Winter brings the lowest room rates in Srinagar, but heating becomes the main cost and comfort issue. Choose a guesthouse with a heater or electric blanket in every room and a backup for power cuts. Some budget hotels close in deep winter, so confirm they are open. Hot water may be limited to certain hours. Carry warm socks, thermal layers and a hot water bottle.",
        ],
      },
    ],
    faqs: [
      { q: "Are hostels in Srinagar good for student groups?", a: "Yes. Hostels and guesthouses near Dal Gate and Rajbagh have dormitories and large rooms, and many offer group rates." },
      { q: "Is a hot water bottle useful in a Srinagar budget room in winter?", a: "Yes. It helps on cold nights, especially during power cuts when electric heaters stop." },
      { q: "Where do shared taxis to Tangmarg and Pahalgam leave from in Srinagar?", a: "Mainly from the Batamaloo bus stand, leaving when full." },
      { q: "Are Srinagar guesthouses safe for solo women?", a: "Many are. Choose family-run guesthouses with good reviews from women, a staffed reception and a central location." },
      { q: "How do I spot a fake Srinagar hotel listing?", a: "Watch for very low prices, stock photos, no address or reviews, and requests for full payment to personal UPI accounts." },
      { q: "Can I see Srinagar on foot on a budget?", a: "Yes. Walk Boulevard Road, visit the old city by shared transport, climb Hari Parbat and take a short shikara ride." },
      { q: "Are budget hotels in Srinagar open in winter?", a: "Many are, but some close in deep winter. Confirm before booking." },
      { q: "What houseboat grades are budget-friendly in Srinagar?", a: "The simpler grades, often C or D, which have smaller rooms and basic bathrooms." },
    ],
  },

  "kashmir-7-day-itinerary": {
    sections: [
      {
        h: "7 days with older parents",
        p: [
          "For older parents, slow the pace: stay three nights in Srinagar, two in Pahalgam and one in Gulmarg or a Gulmarg day trip, with shorter days. Choose hotels with lifts and heating, book a comfortable SUV, and plan rest afternoons. Skip Phase 2 of the gondola and long pony rides, and choose gardens and shikara rides that need little walking. Keep medicines, copies of prescriptions and warm clothes handy every day, and check that the cab has room for a folding wheelchair if one is needed.",
        ],
      },
      {
        h: "A 7-day plan with Sonamarg overnight",
        p: [
          "In summer, an overnight in Sonamarg adds a quiet evening by the Sindh river and an early morning at the Thajiwas glacier before the crowds. Swap one Srinagar night for a Sonamarg night, and use the next morning for the glacier walk or pony ride before driving back. This works best from June to September, when the roads and hotels are fully open.",
        ],
      },
      {
        h: "7 days for groups of friends",
        p: [
          "Groups of friends often prefer more activity: rafting on the Lidder in Pahalgam, skiing or snow activities in Gulmarg in winter, an ATV ride in Gulmarg, trekking to a meadow, and evenings in Srinagar's cafes. A tempo traveller or two SUVs keep the group together. Share rooms in hotels with good common areas, and plan one free day for the group to choose.",
        ],
      },
    ],
    faqs: [
      { q: "How should I plan a 7-day Kashmir trip with older parents?", a: "Slow the pace, choose hotels with lifts and heating, book a comfortable SUV, skip Phase 2 and plan rest afternoons." },
      { q: "Do I need a rest day on a 7-day Kashmir trip?", a: "It helps on a slower week. Use it for a short shikara ride, a craft workshop, a long lunch and shopping." },
      { q: "Can a 7-day Kashmir trip include Vaishno Devi?", a: "It is tight. Add a day or two at Katra before or after the Kashmir week instead." },
      { q: "How many hours of driving does a 7-day Kashmir trip involve?", a: "About four to six hours on transfer days and two to four on sightseeing days." },
      { q: "Can I take the train from Katra to Srinagar for a 7-day trip?", a: "Yes. It saves the long road drive and gives an extra afternoon in Srinagar." },
      { q: "How should I adapt a 7-day Kashmir trip for toddlers?", a: "Stay longer in each place, skip Phase 2 of the gondola, and choose hotels with heating, lifts and play space." },
      { q: "What should I book first for a 7-day Kashmir trip?", a: "Flights, then Gulmarg and Pahalgam hotels, then Srinagar, the gondola and the cab." },
      { q: "Can I add a Sonamarg night to a 7-day trip?", a: "Yes in summer. Swap one Srinagar night for Sonamarg for a quiet evening and an early glacier visit." },
      { q: "Is a 7-day Kashmir trip good for a group of friends?", a: "Yes. Add rafting, snow activities, treks and a free day, and travel in a tempo traveller or two SUVs." },
    ],
  },

  "kashmiri-wazwan-guide": {
    sections: [
      {
        h: "Wazwan at a Kashmiri wedding",
        p: [
          "At weddings, wazwan is the centre of the celebration. Guests sit in groups of four on the floor around a trami, the hand-washing basin goes round, and the courses are served one after another by the waza's team. Meals can run for hours, with the guests' conversation as important as the food. If you are invited to a wedding while in Kashmir, accept: it is the best way to experience wazwan as it is meant to be eaten. Dress modestly, arrive on time and follow your hosts' lead.",
        ],
      },
      {
        h: "Wazwan outside Srinagar",
        p: [
          "Wazwan is cooked across the Kashmir valley, in towns such as Anantnag, Baramulla and Sopore, and families often hire a waza for celebrations. Outside Srinagar, restaurants serving full wazwan are fewer, but most local restaurants offer rogan josh, rista and yakhni. In Pahalgam and Gulmarg, hotels can usually arrange a few wazwan dishes with notice.",
        ],
      },
      {
        h: "Wazwan for children and older guests",
        p: [
          "Children often enjoy the milder dishes: yakhni, gushtaba, kebabs and chicken, with plain rice. Older guests may find the rich food heavy, especially at dinner, so a smaller lunch serving is a good idea. Ask for less oil and less chilli if needed. Water and kahwa help with digestion.",
        ],
      },
    ],
    faqs: [
      { q: "Can I eat wazwan at a Kashmiri wedding as a visitor?", a: "If invited, yes. Guests sit in fours around a trami and the courses come in turn. Dress modestly and follow your hosts." },
      { q: "Can I get wazwan in Pahalgam or Gulmarg?", a: "Full wazwan is rare there, but hotels can usually arrange a few dishes like rogan josh and rista with notice." },
      { q: "How should older guests eat wazwan?", a: "Choose a smaller lunch serving, ask for less oil and chilli, and finish with kahwa." },
      { q: "Is wazwan cooked outside Srinagar?", a: "Yes, across the valley in towns like Anantnag, Baramulla and Sopore, often by wazas hired for celebrations." },
      { q: "Which wazwan dishes are mild?", a: "Yakhni, gushtaba, aab gosht and methi maaz are mild, cooked with yoghurt or milk." },
      { q: "Which wazwan dish is the hottest?", a: "Marchwangan korma, made with plenty of Kashmiri red chilli." },
      { q: "Is wazwan better for lunch or dinner?", a: "Lunch is often better, since the meal is heavy and you can rest in the afternoon." },
      { q: "Can I watch a waza cook in Srinagar?", a: "Some hotels and guides arrange cooking experiences with a waza. Book in advance." },
      { q: "Is alcohol served with wazwan?", a: "No. Water is served with the meal and kahwa afterwards." },
      { q: "Who is the vasta waza?", a: "The head cook who leads the team preparing a wazwan." },
      { q: "Can I pack leftover wazwan?", a: "Yes. Restaurants will pack what you cannot finish." },
      { q: "Is wazwan suitable for children?", a: "Yes. Milder dishes like yakhni, gushtaba, kebabs and chicken suit children." },
    ],
  },
};
