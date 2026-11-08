import type { BlogPost } from "./types";

// Depth for kashmir-batch-2.ts: extra sections and FAQs per post.
// Same rules: no fares or timetables, no em dashes.

type More = { sections: BlogPost["sections"]; faqs: BlogPost["faqs"] };

export const KASHMIR_BATCH_2_MORE: Record<string, More> = {
  "kashmir-in-july": {
    sections: [
      { h: "Gulmarg, Pahalgam and Sonamarg in July", p: ["Gulmarg in July is a sea of green with wildflowers across the meadow; only Apharwat at the top of Gondola Phase 2 keeps patches of snow. It is the most comfortable place to stay in July, cool by day and chilly at night. Pahalgam is lush and lively, but busy with Amarnath Yatra pilgrims and security; Aru and Betaab are still worth the union-taxi ride on a day your agent clears. Sonamarg is at its greenest, with the Thajiwas glacier a short walk from the meadow, though Baltal nearby is the yatra base camp, so traffic can be heavy."] },
      { h: "Treks in July", list: ["Kashmir Great Lakes: Sonamarg (Shitkadi) to Naranag, about 70 km over 7 to 8 days, highest point Gadsar Pass at about 4,190 m.", "Tarsar Marsar: from Aru near Pahalgam, alpine lakes and meadows over about 6 days.", "Gangabal and Harmukh: from Naranag, a shorter high-lake trek.", "Book with a registered local operator and keep one spare day for weather."] },
      { h: "Value in July", p: ["After the June school-holiday peak, hotel rates in Srinagar and Gulmarg often ease in July, while Pahalgam and Sonamarg stay in demand because of the yatra. A Srinagar and Gulmarg-focused trip can be good value, with Doodhpathri or Yusmarg replacing a second Pahalgam day."] },
    ],
    faqs: [
      { q: "Is July a good month for a Kashmir honeymoon?", a: "Yes, especially in Gulmarg and Srinagar, where it is green, cool at night and less crowded with honeymooners than May." },
      { q: "Which treks are open in Kashmir in July?", a: "The Kashmir Great Lakes, Tarsar Marsar and Gangabal treks are all in season from July." },
      { q: "Is Sonamarg crowded in July?", a: "It can be, because Baltal near Sonamarg is the Amarnath Yatra base camp. Go on a day your agent recommends." },
    ],
  },
  "kashmir-in-august": {
    sections: [
      {"h": "A short August itinerary for 4 days", "days": ["Arrive in Srinagar; evening shikara ride through the lotus beds of Dal Lake.", "Gulmarg day trip with the Gondola to Kongdori and Apharwat.", "Pahalgam via Pampore and Awantipora; Betaab Valley in the afternoon.", "Back to Srinagar via Achabal; departure."], "p": ["Four days is enough for the essentials in August if you keep Sonamarg for another trip. If you have a fifth day, add Doodhpathri or Sonamarg, and if the yatra is still running, ask your agent which day suits Pahalgam best."]},
      { h: "Gulmarg, Pahalgam and Sonamarg in August", p: ["Gulmarg in August is green and quiet on weekdays, with clear views from the Gondola between rain spells. Pahalgam becomes calm and relaxed once the yatra ends, which makes the second half of August one of the best times for a riverside stay there. Sonamarg is lush, with the Sindh in full flow and the high lakes accessible to trekkers."] },
      { h: "Gurez and Warwan in August", p: ["August is a good month for remote valleys. Gurez, over Razdan Pass, is green with the Kishanganga at full flow and its wooden villages at their busiest with summer farming. Warwan, a remote valley reached from Kishtwar or by trek from Pahalgam's side, is for experienced trekkers. Both need permits or local guidance; plan with an agent who works there."] },
      { h: "Kashmir in August for families", p: ["August works well for families who missed the school holidays: the weather is warm, meadows are green and rooms are easier to find after Independence Day. Keep a light rain jacket for each child, plan indoor breaks and keep driving days short."] },
      { h: "What to eat in August", p: ["Late summer brings fresh produce to Srinagar's markets: lotus stem (nadru) from Dal Lake, early apples, plums and pears. Try nadru yakhni or nadru monje, a crispy lotus stem fritter sold by street vendors."] },
    ],
    faqs: [
      { q: "Is Gurez open in August?", a: "Yes, usually. It is one of the best months for Gurez, with a permit arranged by your agent." },
      { q: "Is Kashmir good for families in August?", a: "Yes, after the Independence Day weekend especially, with green meadows and easier hotel availability." },
      { q: "What is special about Kashmir in August?", a: "The greenest meadows, peak trekking season, lotus on Dal Lake and the first apples." },
    ],
  },
  "kashmir-in-september": {
    sections: [
      {"h": "A 4-day September plan", "days": ["Arrive in Srinagar; sunset on Dal Lake.", "Gulmarg with the Gondola for the clearest views of the year.", "Doodhpathri or Sonamarg day trip.", "Old city, apple orchards on the outskirts and departure."], "p": ["Short September trips work well because the weather is steady and drives are rarely delayed. Add Pahalgam with two more nights if you can."]},
      { h: "Gulmarg, Pahalgam and Sonamarg in September", p: ["Gulmarg in September has its clearest air of the year; from Apharwat you may see Nanga Parbat on a good morning. Pahalgam is quiet and golden as the season turns, with Aru Valley especially photogenic. Sonamarg is crisp and calm, and the Zojila road towards Drass and Kargil is open and less busy than in July."] },
      { h: "Kashmir in September for honeymoon couples", p: ["September is a quiet favourite for honeymoons: steady weather, uncrowded gardens and good availability of deluxe houseboats and lake-view rooms. Plan a sunrise shikara, a night in Gulmarg or Pahalgam for starry skies, and a long lunch in the Mughal gardens."] },
      { h: "Photography in September", list: ["Clear morning views from Gondola Phase 2.", "Apple orchards heavy with fruit along the Gulmarg and Pahalgam roads.", "Dal Lake reflections on calm mornings.", "Early autumn tints in Aru and Betaab valleys late in the month."] },
      { h: "Booking tips", p: ["September is easier to book than summer, but long weekends and the Puja holidays in some years bring short rushes. Two to three weeks ahead is usually enough for hotels; book Gondola tickets once dates are fixed."] },
    ],
    faqs: [
      {"q": "Is September good for Gulmarg?", "a": "Yes. It has the clearest views of the year from the Gondola, mild days and cold nights, with far fewer visitors than June."},
      {"q": "Are hotels cheaper in Kashmir in September?", "a": "Usually yes compared with May and June, because demand falls after the summer holidays and the Amarnath Yatra. Long weekends are the exception."},
      { q: "Is Kashmir crowded in September?", a: "No, it is one of the calmer months, apart from a few holiday weekends." },
      { q: "What to wear in Kashmir in September?", a: "Light layers by day, a warm jacket for evenings, and thermals for nights in Gulmarg or Sonamarg." },
      { q: "Is Gurez good in September?", a: "Yes. It is clear and calm, and the last comfortable month before the autumn cold." },
    ],
  },
  "kashmir-vs-kerala": {
    sections: [
      { h: "Kashmir and Kerala houseboats compared", p: ["Kashmir's houseboats are moored permanently on Dal Lake, Nigeen Lake or the Jhelum in Srinagar: carved walnut interiors, a sitting room and a deck, reached by shikara. They do not move; you take a shikara ride from them. Kerala's houseboats (kettuvallams) cruise the backwaters of Alleppey and Kumarakom, usually for a day and a night, with meals cooked on board as the boat moves through canals and paddy fields. Both are memorable; they are simply different experiences."] },
      { h: "Weather month by month", list: ["December to February: Kashmir snowy and cold; Kerala warm and dry, peak season.", "March to May: Kashmir spring and early summer, very pleasant; Kerala hot and humid.", "June to September: Kashmir green summer; Kerala monsoon, lush but rainy.", "October to November: Kashmir autumn colours; Kerala post-monsoon, green and comfortable."] },
      { h: "Who usually prefers each", list: ["Kashmir: North Indian families in summer, snow lovers in winter, couples who want mountains.", "Kerala: winter holidaymakers, beach and wellness travellers, couples who want warm weather.", "Both: first-time international visitors to India who want a classic scenic region."] },
    ],
    faqs: [
      { q: "Which is better for a family trip in December, Kashmir or Kerala?", a: "Kerala if you want warm weather and beaches; Kashmir if your family wants snow and is ready for the cold." },
      { q: "Which has better houseboats, Kashmir or Kerala?", a: "They are different: Kashmir's are moored hotels on Dal Lake; Kerala's cruise the backwaters. Many travellers do both on separate trips." },
      { q: "Is Kashmir or Kerala better in monsoon?", a: "Kashmir, which is green and pleasant in July and August, while Kerala gets heavy monsoon rain." },
    ],
  },
  "kashmir-vs-shimla-manali": {
    sections: [
      {"h": "Getting there: the real travel time", "p": ["From Delhi, a Kashmir trip starts with a 1.5 hour flight or a day-long train journey via Katra, so you can be on a shikara by lunchtime on day one. Manali needs an overnight bus or a 10 to 12 hour drive, and Shimla about 7 to 9 hours by road or a scenic toy-train ride from Kalka. From Mumbai, Bengaluru, Chennai or Kolkata, both need a flight, and Kashmir's direct flights to Srinagar usually save time."]},
      { h: "A sample plan for each", list: ["Kashmir 6 days: Srinagar 3 nights (Gulmarg and Sonamarg as day trips), Pahalgam 2 nights.", "Manali 6 days: Delhi to Manali overnight, Solang Valley, Atal Tunnel and Sissu, Old Manali, return.", "Shimla and Manali 7 days: Shimla 2 nights, Manali 3 nights, travel days at each end."] },
      { h: "Cost and value", p: ["Shimla and Manali can be cheaper for travellers driving from Delhi or Punjab, since there is no flight. Kashmir packages include airfare for most travellers but compress more scenery into fewer travel days. Compare total cost including travel and the number of days you actually spend sightseeing."] },
      { h: "Winter compared", p: ["In winter Gulmarg has the more reliable snow and a working ski resort, with Srinagar's heated hotels as a base. Manali has snow at Solang and beyond the Atal Tunnel, but roads can be blocked and traffic heavy after snowfall. Shimla gets snow on some days, usually in January, and is quick to reach."] },
      { h: "Food and stays", p: ["Kashmir offers Wazwan, houseboats and lake-view hotels; Manali offers riverside cottages, Old Manali cafes and Himachali dham; Shimla offers colonial-era hotels on the Mall Road and ridge views."] },
    ],
    faqs: [
      { q: "Which is cheaper, Kashmir or Manali?", a: "Manali is usually cheaper for travellers driving from North India; Kashmir includes flights for most but needs fewer travel days." },
      { q: "Is Kashmir or Manali better in winter?", a: "Kashmir, for reliable snow in Gulmarg and easier access by flight. Manali can see road blocks and jams after snowfall." },
      { q: "Can I combine Kashmir and Himachal in one trip?", a: "Yes, with a longer trip: Kashmir to Ladakh and down the Manali highway in summer, or separate legs by flight." },
    ],
  },
  "pony-ride-in-kashmir": {
    sections: [
      { h: "Pony rides and animal welfare", p: ["Most ponywallas care for their animals, which are their livelihood. Choose ponies that look healthy and well fed, avoid overloading, walk on very steep stretches if you can, and do not ask the ponywalla to rush. Report mistreatment to the local association or the tourism office."] },
      { h: "Pony rides in winter", p: ["In winter, deep snow makes pony routes difficult or closed. In Gulmarg, sledges pulled by local sledgewallas replace ponies on the meadow, also at association rates. Agree the route and duration before you start, just as with ponies."] },
      { h: "Ponies on treks and the Amarnath Yatra", p: ["On treks such as the Kashmir Great Lakes, ponies carry luggage and supplies, arranged by your trek operator. During the Amarnath Yatra, ponies and palanquins carry pilgrims on both the Baltal and Pahalgam routes; these are registered by the Shrine Board and booked at the base camps."] },
      { h: "Questions to ask before you ride", list: ["Which points are included, and how long do we stop at each?", "Is the rate per pony for the return trip?", "Is there extra waiting time if we stay longer?", "Is the route open today?"] },
    ],
    faqs: [
      { q: "Are pony rides available in winter in Kashmir?", a: "Mostly not on snow; in Gulmarg sledges replace ponies in winter." },
      { q: "Can I walk instead of taking a pony?", a: "Yes, on most short routes such as Thajiwas in Sonamarg or Nilnag in Yusmarg." },
      { q: "Do ponies carry luggage on Kashmir treks?", a: "Yes, trek operators arrange ponies for luggage and supplies." },
    ],
  },
  "river-rafting-in-kashmir": {
    sections: [
      {"h": "Where to stay for rafting", "p": ["For rafting on the Lidder, stay a night in Pahalgam so you can raft in the morning and still see Aru and Betaab Valley. For the Sindh, a Sonamarg day trip from Srinagar is enough, or stay a night in Sonamarg in summer to raft and walk to the Thajiwas glacier without rushing. Riverside hotels in Pahalgam book up early in June."]},
      { h: "Rafting grades explained", p: ["Rapids are graded on an international scale from I (easy) to VI (unrunnable). Kashmir's commercial stretches are mostly grade II to III: lively waves and a few drops, exciting for first-timers but manageable with a guide. When rivers run high in June, some stretches feel bigger, and operators may shorten or pause trips after heavy rain."] },
      { h: "What a rafting trip looks like", list: ["A short safety briefing on paddling commands and what to do if you fall in.", "Gear check: life jacket, helmet, paddle.", "Time on the water, usually about 30 minutes to an hour on the main stretches.", "A ride back to the starting point in the operator's vehicle."] },
      { h: "Combining rafting with sightseeing", p: ["In Pahalgam, raft in the morning and visit Aru or Betaab Valley by union taxi in the afternoon. In Sonamarg, raft after the walk to the Thajiwas glacier, then drive back to Srinagar. Both fit into a normal Kashmir itinerary without an extra day."] },
      { h: "Rafting with children and older travellers", p: ["Operators set minimum ages, usually in the early teens, for safety reasons. Younger children and older travellers who want to be on the water can take a calm shikara ride on Dal Lake or a gentle boat ride instead."] },
    ],
    faqs: [
      {"q": "Do I need to know swimming for rafting in Kashmir?", "a": "No. You wear a life jacket and helmet throughout, and the guide briefs you on what to do if you fall in. Non-swimmers often raft the easier stretches."},
      { q: "What grade is rafting in Kashmir?", a: "Mostly grade II to III on the commercial stretches of the Lidder and Sindh." },
      { q: "How long is a rafting trip in Pahalgam?", a: "Usually about 30 minutes to an hour on the water, plus briefing and transfer." },
      { q: "Can children go rafting in Kashmir?", a: "Operators set minimum ages, usually in the early teens. Check with the operator on the day." },
    ],
  },
  "gulmarg-skiing-and-snow-activities": {
    sections: [
      {"h": "Gulmarg for families in winter", "p": ["Families with children who do not ski can still have a full snow holiday in Gulmarg: Gondola Phase 1 to Kongdori, sledge rides on the meadow, snowmen and snowball fights near the hotels, and short ski taster lessons for older children. Keep outings to the morning, when it is less windy, and plan warm indoor afternoons."]},
      { h: "A 4-day Gulmarg ski plan", days: ["Arrive in Srinagar; drive to Gulmarg (about 51 km); fit gear and rest.", "Morning lesson on the nursery slopes; afternoon Gondola Phase 1 to Kongdori.", "Second lesson; practise turns; sledge or snow scooter for non-skiers.", "Final lesson or a guided run from Kongdori; drive back to Srinagar."] },
      { h: "Snowboarding in Gulmarg", p: ["Snowboarding is popular in Gulmarg, with boards and boots for hire near the Gondola base and instructors available. Beginners usually need two or three lessons to link turns. The deep powder of Phase 2 is a big draw for experienced riders, with the same avalanche precautions as for skiers."] },
      { h: "Gondola and weather", p: ["Gondola tickets are sold online through the J&K Cable Car Corporation, and Phase 2 closes in high wind or heavy snow, sometimes for days. Plan flexible ski days rather than relying on one particular day for Phase 2."] },
      { h: "What to wear", list: ["Thermal base layers, a fleece and a waterproof ski jacket and pants (hire is available).", "Waterproof gloves, a warm cap or helmet and ski goggles.", "Two pairs of warm socks and a neck gaiter.", "Sunscreen and lip balm with SPF."] },
    ],
    faqs: [
      { q: "Can I snowboard in Gulmarg?", a: "Yes. Boards, boots and instructors are available near the Gondola base." },
      { q: "How many days do I need to learn skiing in Gulmarg?", a: "Three to five days of lessons lets most beginners ski the nursery slopes comfortably." },
      { q: "Is Gondola Phase 2 open every day in winter?", a: "No. It closes in high wind or heavy snow, sometimes for several days." },
    ],
  },
  "sonamarg-sightseeing-places": {
    sections: [
      {"h": "How to reach Sonamarg", "p": ["Sonamarg is about 80 km from Srinagar on NH1, the Srinagar to Leh highway, via Ganderbal and Kangan along the Sindh river, about 2.5 to 3 hours by road. Srinagar airport is about 93 km away. There is no railway; the nearest station is Srinagar. Shared cabs run from Srinagar in season, but a private cab for the day is easier and lets you stop along the river."]},
      { h: "Where to stay in Sonamarg", p: ["Sonamarg has a limited number of hotels, camps and tourism huts along the main road and the Sindh river. Many close in late autumn and reopen in spring; in winter, confirm that your hotel is operating. Most travellers stay in Srinagar and visit Sonamarg as a day trip; trekkers and Ladakh-bound travellers stay a night."] },
      { h: "Sonamarg in winter", p: ["Since the Z-Morh tunnel opened in January 2025, Sonamarg can be reached in winter, when the meadow and slopes are deep in snow and there are sledge rides near the town. Roads still close for a day or two after heavy snowfall, and Zojila beyond stays closed through winter, so Zero Point is not possible."] },
      { h: "Food in Sonamarg", p: ["Riverside dhabas serve rajma chawal, Maggi, tea and simple Kashmiri dishes in season. Options are limited in winter; carry snacks and water on a day trip."] },
      { h: "Mistakes to avoid", list: ["Expecting your Srinagar cab to drive to Zero Point.", "Taking a pony without agreeing the rate card route.", "Planning Zero Point outside the months Zojila is open.", "Leaving Srinagar late; start early to beat the traffic."] },
    ],
    faqs: [
      { q: "Is Zero Point open in winter?", a: "No. It lies beyond Zojila, which is closed in winter." },
      { q: "Are there hotels in Sonamarg?", a: "Yes, a limited number of hotels, camps and huts, many seasonal. Most travellers stay in Srinagar." },
      { q: "What is the best time to see snow in Sonamarg?", a: "December to March for snowfall, and May to June for snow at the Thajiwas glacier." },
    ],
  },
  "documents-for-kashmir-trip": {
    sections: [
      {"h": "Common document mistakes", "list": ["Carrying only a photocopy of ID: checkpoints and hotels ask for the original.", "Booking Gondola tickets in one name and carrying a different ID.", "Relying on a prepaid SIM from another state for e-tickets and maps.", "Forgetting children's ID for flights.", "Not sending ID copies to the agent in time for Gurez or border permits."]},
      { h: "Documents for Vaishno Devi and Katra", list: ["Yatra registration (free) with photo ID; collect the RFID card before starting the walk.", "Helicopter, battery car and ropeway tickets booked on the Shrine Board website, with the same ID.", "Mobile phones, cameras and bags are deposited before darshan."] },
      { h: "Driving your own car into Kashmir", list: ["Valid driving licence, registration certificate, insurance and pollution certificate.", "Private cars from outside J&K can drive on highways and to most resorts.", "Sightseeing inside Pahalgam and Sonamarg is still by local union taxi."] },
      { h: "Keep digital and paper copies", p: ["Save all bookings and IDs offline on your phone, and carry one set of paper copies in a separate bag. Mobile data can drop in the hills and at checkpoints, and a printed ticket can save time at Srinagar airport."] },
    ],
    faqs: [
      {"q": "Do I need to show ID at Srinagar airport?", "a": "Yes. There is a security check at the airport entry gate before the terminal, where you show your ticket and photo ID."},
      {"q": "Can I enter Kashmir with a soft copy of my ID?", "a": "Carry the original. DigiLocker copies help as a backup, but hotels and checkpoints usually ask for the physical card."},
      { q: "Is Aadhaar enough for a Kashmir trip?", a: "Yes, for Indian travellers. Carry the original Aadhaar card or another government photo ID." },
      { q: "Do I need a permit for Gurez?", a: "Yes. Agents arrange the permit or registration with copies of your ID in advance." },
      { q: "What documents do I need for the Gulmarg Gondola?", a: "Your online ticket and the photo ID used for booking." },
    ],
  },
  "kashmir-trip-for-senior-citizens": {
    sections: [
      {"h": "Things seniors enjoy most in Kashmir", "list": ["A slow shikara ride on Dal Lake at sunset, with kahwa served on board.", "The Mughal gardens, which have benches, shade and flat paths on the main terraces.", "Gondola Phase 1 for snow and views without walking.", "Hazratbal and Shankaracharya Temple (the temple has about 243 steps; seniors with knee problems can enjoy the view from the base).", "Riverside evenings in Pahalgam."]},
      { h: "Vaishno Devi for senior citizens", p: ["Seniors combining Kashmir with Vaishno Devi can take the helicopter from Katra to Sanjichhat, then a short walk or pony to the Bhawan, or the battery car on the newer track from Ardhkuwari. Book helicopter tickets early on the Shrine Board website. Allow a rest day in Katra before continuing to Srinagar by the Vande Bharat train."] },
      { h: "Packing list for seniors", list: ["All regular medicines with prescriptions and a small first-aid kit.", "Warm layers, a cap and gloves even in summer evenings.", "Comfortable non-slip shoes.", "A small cushion for long drives and a refillable water bottle.", "Copies of ID and medical details."] },
      { h: "Travel insurance and emergencies", p: ["Buy travel insurance that covers pre-existing conditions if possible. Keep your agent's and hotel's numbers handy, and call 112 in an emergency. Srinagar has major hospitals, including SKIMS at Soura."] },
    ],
    faqs: [
      {"q": "Are wheelchairs available in Kashmir?", "a": "Srinagar airport provides wheelchairs on request through the airline. Mughal gardens have flat paths on the main terraces; hotels can arrange help on request, so tell your agent in advance."},
      { q: "Can senior citizens do Vaishno Devi with Kashmir?", a: "Yes, using the helicopter or battery car, with a rest day in Katra before Srinagar." },
      { q: "Which hotels are best for elderly travellers in Srinagar?", a: "Hotels with lifts, heating and few stairs, on Boulevard Road or in Rajbagh, close to the lake and restaurants." },
      { q: "How many days should seniors plan for Kashmir?", a: "Six to seven days, with short drives and rest time each afternoon." },
    ],
  },
};
