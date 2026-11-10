import type { BlogPost, BlogSection } from "./types";

// Kashmir road and cab guides (2026-11-10), one per route or vehicle search.
// Written against the tdiholidayventures.com service pages so each search has
// its own full answer. Rules: no fares or timetables typed in (they change and
// Tavel Package does not run cabs itself), no em dashes, distances rounded.

const DATE = "2026-11-10";

const fareFactors = (route: string): BlogSection => ({
  h: `${route} taxi fare: what decides the price`,
  p: [
    `Kashmir taxis are priced per vehicle, not per person, so the same fare is shared whether two or six people ride. For ${route} the quote depends on four things: the vehicle (a sedan such as a Dzire or Etios costs least, then the Ertiga, Innova and Innova Crysta, then tempo travellers), whether it is a one-way drop or a same-day return, how long the driver waits, and the season. Winter quotes rise when chains or a 4x4 are needed, and the peak weeks of May, June and the Christmas to New Year stretch cost more than October or March.`,
    "Ask for a written quote that names the vehicle, the pickup and drop points, the waiting time, tolls and parking, and the driver's night charge if you stay over. Taxi stands in Srinagar and the airport prepaid counter work from rate cards, so a quote far below the card usually means a smaller car than you asked for, or an extra charge added later. On a package, the cab for every transfer is already in the price, which is the simplest way to avoid haggling.",
  ],
});

const bookingChecklist: BlogSection = {
  h: "Before you book: a short checklist",
  list: [
    "Name the vehicle model, not just the class. An Innova and an Innova Crysta are priced differently.",
    "Confirm whether the fare is one-way or return, and how many hours of waiting are included.",
    "Ask who pays tolls, parking and any union taxi fee at the destination.",
    "Get the driver's name and number the evening before, and share your flight or train number for pickups.",
    "In winter, ask whether the car carries snow chains or is a 4x4, and what happens if police close the road.",
    "Keep cash for pony rides, union taxis and tea stops: card and UPI work in towns, but signal is patchy higher up.",
  ],
};

const BASE_ROUTES: BlogPost[] = [
  {
    slug: "srinagar-to-gulmarg-taxi",
    title: "Srinagar to Gulmarg Taxi: Distance, Time, Cab Types and Winter Driving",
    description: "Srinagar to Gulmarg by taxi: 50 km and about 2 hours via Tangmarg, which cab to pick, how the fare is worked out and what changes in snow.",
    category: "Planning",
    destination: "kashmir",
    city: "gulmarg",
    date: DATE,
    intro:
      "A taxi from Srinagar to Gulmarg covers about 50 km in 1.5 to 2 hours, through Magam and Tangmarg and then 13 km of hairpin bends up to the meadow at about 2,650 m. Most visitors do it as a same-day return with 5 to 6 hours in Gulmarg, which is enough for the Gondola and a walk on the meadow. In winter the last stretch from Tangmarg can need snow chains or a 4x4, so book a car that is ready for snow and leave Srinagar by 8 am.",
    sections: [
      {
        h: "Route and driving time",
        p: [
          "The road leaves Srinagar through Parimpora or Bemina, crosses the flat Budgam countryside past Magam and reaches Tangmarg, the market town at the foot of the climb, in about an hour. From Tangmarg the road climbs through pine forest to Gulmarg. Outside snow season the drive is easy and fully tarred; the only slow points are weekend traffic at Tangmarg and the parking area near the Gondola.",
          "Allow 1.5 hours in summer and 2 to 3 hours on a snowy winter morning, when traffic is held at Tangmarg until the road is cleared and checked. Plan to leave Gulmarg by 4 pm in winter: the road freezes after sunset and the police can stop vehicles without chains.",
        ],
      },
      {
        h: "Which cab to choose",
        list: [
          "Sedan (Dzire, Etios): fine for two or three people with light bags from April to November.",
          "Ertiga or Innova: the usual family choice, more ground clearance and room for winter jackets and boots.",
          "Innova Crysta: more comfortable for elderly parents and long days that combine Gulmarg with Drung waterfall.",
          "4x4 (Scorpio, Thar or a local Tavera with chains): what drivers use after heavy snow, often arranged at Tangmarg.",
          "Tempo traveller or Urbania: for groups of 9 to 17, though in deep snow groups are often split into smaller vehicles at Tangmarg.",
        ],
      },
      fareFactors("Srinagar to Gulmarg"),
      {
        h: "What you do in Gulmarg with the taxi",
        p: [
          "Your Srinagar cab drops you at the Gondola base or the main meadow and waits in the parking area. It does not drive you around Gulmarg itself: the meadow, St Mary's Church, Strawberry Valley and the Gondola station are reached on foot, by pony or on a sledge in winter. Ponies, guides and sledge pullers work to rates set by the local authority; agree the route and time before you start.",
          "Many drivers suggest a short stop at Drung waterfall, about 4 km off the road near Tangmarg, which freezes into ice formations in January and February. In winter you can also hire snow boots and jackets in Tangmarg, cheaper and drier than renting at the top.",
        ],
      },
      {
        h: "Day trip or overnight stay",
        p: [
          "A day trip suits most travellers in summer and autumn. An overnight stay is worth it in winter if you want to ski, take the first Gondola cabin before the queues, or see the meadow at sunrise. If you stay over, your Srinagar cab can drop you and collect you the next day; ask for a one-way drop price both ways rather than paying the driver to wait overnight.",
        ],
      },
      bookingChecklist,
    ],
    faqs: [
      { q: "How far is Gulmarg from Srinagar by taxi?", a: "About 50 km. The drive takes 1.5 to 2 hours in normal conditions and 2 to 3 hours after snowfall, when traffic is checked at Tangmarg." },
      { q: "Can a Srinagar taxi drive to the Gulmarg Gondola?", a: "Yes. Srinagar cabs can drive up to Gulmarg and park near the Gondola base. Inside Gulmarg you move on foot, by pony or by sledge." },
      { q: "Is a sedan enough for Gulmarg in winter?", a: "Usually not after heavy snow. The last 13 km from Tangmarg need chains or a 4x4, so book an Innova, Scorpio or similar that carries chains, or plan to switch at Tangmarg." },
      { q: "Is a Srinagar to Gulmarg taxi priced per person?", a: "No. Kashmir taxis are priced per vehicle for the route and waiting time, so the fare is the same for one or six passengers in that car." },
      { q: "What is the best time to leave Srinagar for Gulmarg?", a: "By 8 am. You reach before the Gondola queues build up and have enough daylight to return before the road freezes in winter." },
    ],
  },
  {
    slug: "srinagar-to-pahalgam-taxi",
    title: "Srinagar to Pahalgam Taxi: Route, Time, Stops and Union Taxi Rules",
    description: "Srinagar to Pahalgam taxi guide: 95 km and about 3 hours via Pampore and Anantnag, stops worth making, cab choice and why you need a union cab there.",
    category: "Planning",
    destination: "kashmir",
    city: "pahalgam",
    date: DATE,
    intro:
      "Srinagar to Pahalgam is about 95 km and takes 2.5 to 3 hours by taxi, south on the highway through Pampore's saffron fields and Anantnag, then up the Lidder valley. It is the longest of the classic Kashmir drives, so most travellers stay one or two nights rather than doing a same-day return. Plan for one rule that surprises first-time visitors: your Srinagar cab can take you to Pahalgam town, but Aru Valley, Betaab Valley and Chandanwari are reached only in Pahalgam's local union taxis.",
    sections: [
      {
        h: "Route and stops on the way",
        list: [
          "Pampore, 15 km out: saffron fields, at their best in late October and early November when the crocus flowers, and shops selling saffron and dry fruit all year.",
          "Awantipora, about 30 km: the ruins of two 9th century stone temples built by King Avantivarman, a 20 minute stop right beside the road.",
          "Sangam and Bijbehara: roadside workshops making Kashmir willow cricket bats.",
          "Khanabal and Anantnag: where the road leaves the highway and climbs the Lidder valley through Aishmuqam.",
          "Apple orchards and riverside tea stops: the last 40 km follow the Lidder river all the way to Pahalgam.",
        ],
      },
      {
        h: "Driving time by season",
        p: [
          "Allow 2.5 hours with no stops, and 3.5 to 4 hours with the saffron, temple and bat stops. In July and August the Amarnath Yatra uses this road, and convoy timings and security checks can hold traffic, so leave early. In winter the road to Pahalgam town is usually open, but snow can slow the last stretch; Chandanwari beyond the town often closes after heavy snowfall.",
        ],
      },
      {
        h: "Union taxis inside Pahalgam",
        p: [
          "Pahalgam's taxi union runs the local sightseeing. Your Srinagar driver parks in the town, and you hire a union cab from the stand for Aru Valley, Betaab Valley and Chandanwari, either as single points or as a combined half-day or full-day round. The union fixes rates per vehicle for each point and the board is displayed at the stand. Ponies for the meadow walks work the same way.",
          "Baisaran meadow, the old pony ride above the town, has been closed to visitors since April 2025. Check its current status locally rather than relying on an old itinerary that still lists it.",
        ],
      },
      fareFactors("Srinagar to Pahalgam"),
      {
        h: "Combining Pahalgam with Gulmarg or Sonamarg",
        p: [
          "Pahalgam is on the opposite side of the valley from Gulmarg and Sonamarg, so do not try to cover two of them in one day. The usual order is Srinagar first, then a Gulmarg day trip, then Pahalgam for two nights, then back to Srinagar. If you arrive by Vande Bharat at Srinagar station in Nowgam, the station is on the south side of the city, which saves time on the Pahalgam road.",
        ],
      },
      bookingChecklist,
    ],
    faqs: [
      { q: "How long is the drive from Srinagar to Pahalgam?", a: "About 95 km, 2.5 to 3 hours without stops. With stops at Pampore, Awantipora and the bat workshops, plan 3.5 to 4 hours." },
      { q: "Can my Srinagar taxi take me to Aru and Betaab Valley?", a: "No. Local sightseeing in Pahalgam is done in union taxis hired at the Pahalgam stand. Your Srinagar cab waits in town or drops you and returns." },
      { q: "Is a day trip from Srinagar to Pahalgam worth it?", a: "It is possible but rushed, with about 6 hours of driving. Staying one or two nights lets you see Aru, Betaab and Chandanwari properly." },
      { q: "Is Baisaran open?", a: "Baisaran has been closed to visitors since April 2025. Ask locally for its current status before you plan around it." },
      { q: "Does the Amarnath Yatra affect the Pahalgam road?", a: "Yes, in July and August. Security checks and convoy timings can slow the road, so start early and allow extra time." },
    ],
  },
  {
    slug: "srinagar-to-sonamarg-taxi",
    title: "Srinagar to Sonamarg Taxi: Distance, Time, Zero Point and Winter Access",
    description: "Srinagar to Sonamarg by taxi: about 80 km and 2.5 hours along the Sindh river, Zero Point by union cab, ponies to Thajiwas and the new all-weather tunnel.",
    category: "Planning",
    destination: "kashmir",
    city: "sonamarg",
    date: DATE,
    intro:
      "A taxi from Srinagar to Sonamarg covers about 80 km in 2.5 to 3 hours, north-east through Ganderbal and Kangan along the Sindh river. Most people go as a same-day return. Inside Sonamarg, Thajiwas Glacier is reached by pony or on foot, and Zero Point beyond Zojila is reached in a local union taxi, not your Srinagar cab. Since the Z-Morh tunnel opened in January 2025, Sonamarg can be reached in winter too, which has made it a snow day trip from Srinagar.",
    sections: [
      {
        h: "Route and what you see",
        p: [
          "The road crosses Ganderbal, follows the Sindh river through Kangan and Gund, and climbs gently past riverside villages and pine slopes to Sonamarg at about 2,800 m. It is the prettiest of the three classic drives, with the river beside you for most of the way, and it is also the road to Ladakh, so expect trucks and army convoys.",
          "Good stops: Manasbal Lake is a 15 km detour near Ganderbal, the Wangath road leads to the Naranag temple ruins, and there are riverside dhabas at Gund and Kullan.",
        ],
      },
      {
        h: "Union taxis and ponies in Sonamarg",
        list: [
          "Thajiwas Glacier: about 3 km from the main parking. Walk, or hire a pony at rates set by the local authority. In winter, sledges replace ponies near the glacier.",
          "Zero Point and Zojila: beyond Baltal, reached in Sonamarg union taxis. Open roughly from May to November depending on snow; closed in deep winter.",
          "Your Srinagar cab waits in the main Sonamarg parking for the day.",
        ],
      },
      fareFactors("Srinagar to Sonamarg"),
      {
        h: "Sonamarg in winter after the tunnel",
        p: [
          "The 6.5 km Z-Morh tunnel bypasses the avalanche-prone stretch below Sonamarg, so the town is now reachable on most winter days. Most hotels still close in winter, so treat it as a day trip with snow walks and sledging. Check the road the evening before: police can still restrict traffic after heavy snowfall, and a 4x4 or chains may be needed on the last stretch.",
        ],
      },
      {
        h: "Sonamarg on the way to Ladakh",
        p: [
          "If you are driving on to Leh, Sonamarg is the natural first night. The road over Zojila to Drass and Kargil opens for the season around April or May after snow clearance and closes again around November or December. Ask your agent to confirm current opening before you book a Srinagar to Leh road trip in the shoulder months.",
        ],
      },
      bookingChecklist,
    ],
    faqs: [
      { q: "How far is Sonamarg from Srinagar?", a: "About 80 km. The drive takes 2.5 to 3 hours in normal traffic along the Sindh river via Ganderbal and Kangan." },
      { q: "Can I go to Zero Point in my Srinagar taxi?", a: "No. Zero Point and Zojila are visited in Sonamarg union taxis hired locally. Your Srinagar cab waits in the main parking." },
      { q: "Is Sonamarg open in winter?", a: "Since the Z-Morh tunnel opened in January 2025, Sonamarg is reachable on most winter days, though police can stop traffic after heavy snow. Most hotels close, so go as a day trip." },
      { q: "How do I reach Thajiwas Glacier?", a: "It is about 3 km from the parking: walk or hire a pony. In winter, sledges run near the glacier." },
    ],
  },
  {
    slug: "srinagar-to-doodhpathri-taxi",
    title: "Srinagar to Doodhpathri Taxi: Route via Budgam, Time and Best Season",
    description: "Srinagar to Doodhpathri by taxi: about 42 km and 1.5 to 2 hours via Budgam and Khansahib, when the meadows are best, winter access and what to carry.",
    category: "Weekend Trips",
    destination: "kashmir",
    city: "doodhpathri",
    date: DATE,
    intro:
      "Doodhpathri is about 42 km south-west of Srinagar, 1.5 to 2 hours by taxi through Budgam and Khansahib. It is an easy day trip to wide grassy meadows and the Shaliganga stream, quieter than Gulmarg and with far fewer shops. The meadows are at their best from May to October. In winter the last stretch is often snowed in, so check access before you go.",
    sections: [
      {
        h: "Route and road conditions",
        p: [
          "From Srinagar the road runs to Budgam town, then through Khansahib and the pine forests of Tangnar to the Doodhpathri parking. The road is tarred and gentle for most of the way, with a narrower final climb. There are few fuel stations or ATMs after Khansahib, so fill up and carry cash.",
          "Allow 1.5 hours in summer. After snowfall, the road beyond Khansahib may be closed or open only to 4x4 vehicles; ask your driver or hotel the evening before.",
        ],
      },
      {
        h: "What to do there",
        list: [
          "Walk across the meadows to the Shaliganga stream, where the water runs white over the stones, which gives the place its name.",
          "Pony rides to the viewpoints and the far meadows, at rates set by the local authority.",
          "Picnic: food stalls are basic, so carry snacks and water.",
          "Mujpathri and Palmaidan: further meadows reached by pony or on foot for those with more time.",
        ],
      },
      fareFactors("Srinagar to Doodhpathri"),
      {
        h: "Combining Doodhpathri with Yusmarg",
        p: [
          "Doodhpathri and Yusmarg are both in Budgam district, but they are on different roads, so seeing both in one day means a long day with about 4 hours of driving. Most travellers pick one: Doodhpathri for open meadows and the stream, Yusmarg for pine forest and Nilnag lake. If you want both, stay a night in Srinagar between them.",
        ],
      },
      bookingChecklist,
    ],
    faqs: [
      { q: "How far is Doodhpathri from Srinagar?", a: "About 42 km. The taxi takes 1.5 to 2 hours via Budgam and Khansahib." },
      { q: "When is the best time to visit Doodhpathri?", a: "May to October, when the meadows are green and the road is open. Winter brings snow but access can close." },
      { q: "Are there hotels in Doodhpathri?", a: "Only a few basic huts and guest houses. Most visitors come as a day trip from Srinagar." },
      { q: "Is Doodhpathri suitable for elderly travellers?", a: "Yes. The meadows start right by the parking, and ponies are available for longer walks." },
    ],
  },
  {
    slug: "srinagar-to-yusmarg-taxi",
    title: "Srinagar to Yusmarg Taxi: Distance, Route via Charar-e-Sharief and Day Plan",
    description: "Srinagar to Yusmarg by taxi: about 47 km and 1.5 hours via Budgam and Charar-e-Sharief, Nilnag lake by pony or foot, best months and a simple day plan.",
    category: "Weekend Trips",
    destination: "kashmir",
    city: "yusmarg",
    date: DATE,
    intro:
      "Yusmarg is about 47 km from Srinagar, 1.5 hours by taxi through Budgam and the shrine town of Charar-e-Sharief. It is a pine-ringed meadow at about 2,400 m with the Doodh Ganga stream and Nilnag lake a short hike away, and it stays quiet even in June. Go as a day trip from April to November; in winter it is snowy and lovely but very few places stay open.",
    sections: [
      {
        h: "Route and stops",
        p: [
          "The road goes south-west through Budgam, then to Charar-e-Sharief, the shrine of the 15th century Sufi saint Sheikh Nooruddin Noorani, Kashmir's patron saint. Many travellers stop here for 20 minutes; dress modestly and cover your head. From Charar-e-Sharief the road climbs through forest to the Yusmarg meadow.",
        ],
      },
      {
        h: "A simple day plan",
        days: [
          "Leave Srinagar by 9 am and stop at Charar-e-Sharief on the way.",
          "Reach Yusmarg by 11 am. Walk or ride a pony to Nilnag lake, about 4 km through pine forest.",
          "Lunch at the JKTDC restaurant or a dhaba near the meadow, then walk down to the Doodh Ganga stream.",
          "Leave by 4 pm to reach Srinagar before dark.",
        ],
      },
      {
        h: "Ponies and walks",
        list: [
          "Nilnag lake: 4 km each way, gentle, about 1.5 hours on foot.",
          "Doodh Ganga: the stream below the meadow, 15 minutes on foot.",
          "Sang-e-Safed and Tosa Maidan: longer meadows for full-day hikes with a local guide.",
          "Pony and guide rates are set locally; agree the route and waiting time first.",
        ],
      },
      fareFactors("Srinagar to Yusmarg"),
      bookingChecklist,
    ],
    faqs: [
      { q: "How far is Yusmarg from Srinagar?", a: "About 47 km, 1.5 hours by taxi via Budgam and Charar-e-Sharief." },
      { q: "Can you reach Nilnag lake by car?", a: "No. It is about 4 km from the meadow by foot or pony through pine forest." },
      { q: "Is Yusmarg better than Doodhpathri?", a: "They are different. Yusmarg has pine forest, a lake hike and the shrine on the way; Doodhpathri has open meadows and a stream. Pick one per day." },
      { q: "Is Yusmarg open in winter?", a: "The meadow is snowy and reachable on many days, but most facilities close, so check access and carry food." },
    ],
  },
  {
    slug: "srinagar-to-gurez-taxi",
    title: "Srinagar to Gurez Taxi: Razdan Pass Route, Time, Permits and Season",
    description: "Srinagar to Gurez by taxi: about 125 km and 5 to 6 hours over Razdan Pass via Bandipora, open months, ID checks, vehicle choice and where to stay.",
    category: "Adventure",
    destination: "kashmir",
    city: "gurez",
    date: DATE,
    intro:
      "Gurez is about 125 km north of Srinagar, 5 to 6 hours by taxi via Bandipora and the Razdan Pass at about 3,300 m, close to the Line of Control. The road is usually open from late May or June to November and closes in winter under heavy snow. Indian visitors need a valid photo ID at army checkposts; foreign nationals are generally not permitted. Plan at least two nights, because the drive is too long for a day trip.",
    sections: [
      {
        h: "Route over Razdan Pass",
        p: [
          "From Srinagar the road runs along Wular lake to Bandipora, then climbs through Tragbal and over Razdan Pass, with wide views back over the valley. The descent leads into the Kishanganga valley and the main village, Dawar. The road is tarred for most of the way, with rough patches after landslides and slow army traffic, so drivers take it steadily.",
          "Leave Srinagar by 7 am. Movement on the pass can be restricted in the evening, and you want to reach Dawar in daylight.",
        ],
      },
      {
        h: "IDs and checkposts",
        list: [
          "Carry an original government photo ID for every traveller and several photocopies. Registration happens at checkposts on the way.",
          "Foreign nationals are generally not allowed into Gurez; check with the authorities before planning.",
          "Photography of army posts and installations is not allowed.",
          "Mobile signal is limited to a few networks and is weak in places; postpaid connections work better than prepaid from outside J&K.",
        ],
      },
      {
        h: "Which vehicle",
        p: [
          "An Innova, Scorpio or similar SUV with ground clearance is the usual choice. Sedans manage in dry weather but struggle after rain. Groups use tempo travellers in summer. Make sure the driver knows the route and has done it recently, and that the vehicle has a spare tyre: there are very few workshops after Bandipora.",
        ],
      },
      fareFactors("Srinagar to Gurez"),
      {
        h: "Where to stay and what to see",
        p: [
          "Dawar has JKTDC huts, guest houses and homestays; Tulail, further up the valley, has a few homestays and riverside camps in summer. Expect simple rooms, home-cooked food and power cuts. See Habba Khatoon peak, the Kishanganga river, the wooden villages of Dawar, Wanpora and Badwan, and drive on to Tulail for the upper valley.",
        ],
      },
      bookingChecklist,
    ],
    faqs: [
      { q: "How long is the drive from Srinagar to Gurez?", a: "About 125 km and 5 to 6 hours via Bandipora and Razdan Pass." },
      { q: "Do I need a permit for Gurez?", a: "Indian citizens need a valid original photo ID and register at checkposts. Foreign nationals are generally not permitted." },
      { q: "When is the Gurez road open?", a: "Usually from late May or June to November. It closes in winter under snow on Razdan Pass." },
      { q: "Can I do Gurez as a day trip?", a: "Not comfortably. With about 11 hours of driving there and back, plan two nights in Dawar or Tulail." },
    ],
  },
  {
    slug: "jammu-to-srinagar-taxi",
    title: "Jammu to Srinagar Taxi: NH 44 Route, Time, Tunnels and When to Take the Train",
    description: "Jammu to Srinagar taxi on NH 44: about 250 km and 6 to 8 hours via Udhampur, Ramban and Banihal, closures, cab choice and when the train is better.",
    category: "Planning",
    destination: "kashmir",
    city: "jammu",
    date: DATE,
    intro:
      "Jammu to Srinagar by taxi is about 250 km on NH 44 and takes 6 to 8 hours, through Udhampur, the Chenani-Nashri tunnel, Ramban, the Banihal tunnel and down into the Kashmir valley at Qazigund. It is a full day of mountain driving. Since the Vande Bharat started running from Katra to Srinagar in 2025, many travellers take a taxi from Jammu to Katra and the train from there, which is faster and does not close for landslides.",
    sections: [
      {
        h: "The route, section by section",
        list: [
          "Jammu to Udhampur: about 65 km of four-lane highway.",
          "Chenani-Nashri tunnel: a 9 km road tunnel that bypasses the old Patnitop climb.",
          "Ramban: the narrow Chenab gorge, where landslides and stone falls cause most of the closures.",
          "Banihal and the Navyug tunnel: under the Pir Panjal range into the Kashmir valley.",
          "Qazigund to Srinagar: about 70 km of flat highway past Anantnag, Awantipora and Pampore.",
        ],
      },
      {
        h: "Closures and timing",
        p: [
          "The highway closes after heavy rain, landslides near Ramban or snow at Banihal, sometimes for a day or more, and traffic can be one-way on some days. Check the J&K traffic police advisory the evening before. Start by 6 am to reach Srinagar in daylight. In winter keep a buffer day before any onward flight.",
        ],
      },
      {
        h: "Taxi or train",
        p: [
          "If you arrive in Jammu by train or flight, compare two options. A direct taxi takes you door to door with your bags, which suits families with elderly parents. The other option is a 1.5 hour taxi to Katra and the Vande Bharat to Srinagar, about 3 hours over the Chenab bridge. The train is faster and more reliable in bad weather, but seats sell out in peak season, so book on IRCTC as soon as your dates are fixed.",
        ],
      },
      fareFactors("Jammu to Srinagar"),
      {
        h: "Which cab for the highway",
        p: [
          "For a full day in the hills, an Innova or Innova Crysta is the comfortable choice for four to six people. A sedan works for two people with light bags. Groups of nine or more use a tempo traveller. A Jammu-registered car can drop you in Srinagar, but local sightseeing inside Pahalgam and Sonamarg still needs union taxis.",
        ],
      },
      bookingChecklist,
    ],
    faqs: [
      { q: "How long does a taxi take from Jammu to Srinagar?", a: "About 6 to 8 hours for 250 km on NH 44, longer if there are landslide delays near Ramban." },
      { q: "Is the Jammu to Srinagar highway open in winter?", a: "Mostly, but it closes after heavy snow at Banihal or landslides. Check the traffic advisory and keep a buffer day." },
      { q: "Is the train faster than a taxi from Jammu?", a: "Usually yes. Taxi to Katra (about 1.5 hours) plus the Vande Bharat to Srinagar (about 3 hours) is quicker than the full road trip." },
      { q: "Can I stop at Patnitop on the way?", a: "Yes. Patnitop is a short detour from the Chenani-Nashri tunnel exit. It adds 1 to 2 hours." },
    ],
  },
  {
    slug: "katra-to-srinagar-taxi-or-train",
    title: "Katra to Srinagar: Taxi or Vande Bharat Train? Time, Route and Booking",
    description: "Katra to Srinagar compared: Vande Bharat train in about 3 hours over the Chenab bridge or a 7 hour taxi on NH 44. Booking, luggage and which suits you.",
    category: "Pilgrimage",
    destination: "kashmir",
    city: "katra",
    date: DATE,
    intro:
      "From Katra to Srinagar you have two choices. The Vande Bharat train, running since June 2025, takes about 3 hours through the Pir Panjal tunnels and over the Chenab rail bridge to Srinagar station at Nowgam. A taxi takes 6 to 8 hours on NH 44 via Udhampur, Ramban and Banihal. For most Vaishno Devi plus Kashmir trips the train is faster and more reliable; the taxi suits families with heavy luggage or a sightseeing stop on the way.",
    sections: [
      {
        h: "The Vande Bharat from Katra",
        p: [
          "Trains leave from Shri Mata Vaishno Devi Katra station. The line crosses the Chenab bridge, the world's highest railway arch bridge, and the Anji Khad cable-stayed bridge, then runs through long tunnels under the Pir Panjal to Banihal and down the valley to Srinagar. Book on IRCTC; in peak months and around Navratri seats sell out weeks ahead.",
          "There is airport-style security screening at Katra station, so arrive at least 45 minutes before departure. Srinagar station is in Nowgam on the south side of the city, about 20 to 30 minutes by taxi from Dal Lake.",
        ],
      },
      {
        h: "The road option",
        p: [
          "By road, Katra joins NH 44 near Udhampur, then follows the same route as the Jammu highway through the Chenani-Nashri tunnel, Ramban and Banihal. The road closes on some days after landslides or snow, and the drive is tiring after a Vaishno Devi climb. Choose it if you want a Patnitop stop, have a lot of luggage, or could not get train seats.",
        ],
      },
      {
        h: "Which to choose",
        list: [
          "Couples and small groups with normal luggage: the train.",
          "Families with elderly parents and many bags: a direct taxi, or the train with a porter at both ends.",
          "Winter travel: the train, which runs when the highway is closed by snow at Banihal.",
          "Groups of 10 or more: a tempo traveller can be cheaper per person than train tickets plus taxis at both ends.",
        ],
      },
      fareFactors("Katra to Srinagar"),
      {
        h: "Planning a Vaishno Devi and Kashmir trip",
        p: [
          "Most pilgrims spend two nights in Katra (one for the yatra, one to rest), then take a morning train to Srinagar, which leaves the afternoon free for a shikara ride. Keep the darshan day free of onward travel: queues and weather on the Trikuta hills can stretch it. On a package, the Katra pickup, train coordination and Srinagar transfers are arranged together.",
        ],
      },
      bookingChecklist,
    ],
    faqs: [
      { q: "How long is the Katra to Srinagar train?", a: "About 3 hours on the Vande Bharat, via Banihal and the Chenab bridge, to Srinagar station at Nowgam." },
      { q: "How long is a taxi from Katra to Srinagar?", a: "About 6 to 8 hours by road on NH 44, longer if there are landslide delays." },
      { q: "Do I need to book the Katra to Srinagar train in advance?", a: "Yes. Book on IRCTC as soon as your dates are fixed; peak season seats sell out." },
      { q: "Is there security checking at Katra station?", a: "Yes. Luggage is screened before boarding, so arrive at least 45 minutes early." },
    ],
  },
  {
    slug: "srinagar-airport-taxi",
    title: "Srinagar Airport Taxi: Prepaid Counter, Pickup, Security Gate and Timing",
    description: "Srinagar airport taxi guide: prepaid counter, package pickups, distance to Dal Lake and the city, the security gate on departure and how early to leave.",
    category: "Planning",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Srinagar airport (SXR) is about 12 to 15 km from Dal Lake and Boulevard Road, 30 to 45 minutes by taxi depending on traffic. Arriving, you can use the prepaid taxi counter in the arrivals hall or a driver arranged by your hotel or package. Departing, plan for an extra security check at the airport entry gate: leave your hotel at least 3 hours before your flight.",
    sections: [
      {
        h: "Arriving: your options",
        list: [
          "Prepaid taxi counter in arrivals: fixed rates to the city, Dal Lake ghats, Srinagar railway station and the resorts. Pay at the counter and take the slip to the taxi.",
          "Package or hotel pickup: the driver waits outside with a name card. Share your flight number so he can track delays.",
          "App cabs: availability is limited at the airport, so do not rely on them for a late arrival.",
        ],
      },
      {
        h: "Departing: the security gate",
        p: [
          "Every vehicle stops at the airport's outer gate for a security check, and passengers and bags may be screened before you reach the terminal. In peak season the queue at the gate can take 30 minutes or more. Leave Dal Lake or the city at least 3 hours before departure, and more after snowfall.",
          "Flights at Srinagar run in daylight hours, and weather can delay morning departures in winter. Keep a buffer before any international connection in Delhi.",
        ],
      },
      {
        h: "Houseboat arrivals",
        p: [
          "If you are staying on a houseboat, the taxi drops you at a numbered ghat on Boulevard Road or at Nigeen, and a shikara takes you and your bags to the boat. Tell the houseboat your flight time so the shikara is waiting.",
        ],
      },
      fareFactors("Srinagar airport"),
      {
        h: "Airport to Gulmarg, Pahalgam or Sonamarg directly",
        p: [
          "You can go straight from the airport to Gulmarg (about 55 km) or Sonamarg (about 90 km) if your flight lands by noon. Pahalgam is about 100 km, roughly 3 hours. Most itineraries spend the first night in Srinagar, which gives a buffer if the flight is late.",
        ],
      },
      bookingChecklist,
    ],
    faqs: [
      { q: "How far is Srinagar airport from Dal Lake?", a: "About 12 to 15 km, 30 to 45 minutes by taxi." },
      { q: "Is there a prepaid taxi at Srinagar airport?", a: "Yes, in the arrivals area, with fixed rates to the city, Dal Lake, the railway station and the resorts." },
      { q: "How early should I leave for Srinagar airport?", a: "At least 3 hours before departure, because every vehicle goes through a security check at the airport gate." },
      { q: "Can I go from Srinagar airport straight to Gulmarg?", a: "Yes, it is about 55 km. Do it if you land by noon, so you reach before dark." },
    ],
  },
  {
    slug: "srinagar-to-leh-taxi",
    title: "Srinagar to Leh Taxi: 2-Day Route via Zojila and Kargil, Season and Rules",
    description: "Srinagar to Leh by taxi over 2 days: about 420 km via Sonamarg, Zojila, Drass and Kargil, open months, altitude, vehicle choice and Leh taxi union rules.",
    category: "Adventure",
    destination: "ladakh",
    city: "leh",
    date: DATE,
    intro:
      "Srinagar to Leh by taxi is about 420 km on NH 1 and is best done over two days, with a night in Kargil. The road crosses Zojila pass (about 3,500 m), Drass, Kargil, Lamayuru and Fotu La, and is usually open from around April or May to November. Because altitude rises gradually, this is the gentlest way into Ladakh. Note that a Kashmir taxi can drop you in Leh, but Nubra, Pangong and Leh sightseeing are done in Ladakh-registered vehicles.",
    sections: [
      {
        h: "Two-day plan",
        days: [
          "Srinagar to Kargil, about 205 km, 7 to 8 hours: Sonamarg, Zojila pass, the Drass war memorial, and Kargil for the night.",
          "Kargil to Leh, about 220 km, 7 to 8 hours: Mulbekh's rock-cut Maitreya, Namik La and Fotu La, Lamayuru's moonland, the Indus at Nimmu and Magnetic Hill before Leh.",
        ],
      },
      {
        h: "When the road is open",
        p: [
          "Zojila is cleared of snow in spring and usually opens to tourist traffic around April or May, closing again around November or December. Dates move with the snow, and the pass can close for a day after a storm even in season. Traffic over Zojila is sometimes one-way at set hours, so drivers start early from Sonamarg.",
        ],
      },
      {
        h: "Taxi union rules in Ladakh",
        p: [
          "Ladakh's taxi unions do not allow outside commercial vehicles to do local sightseeing. A Srinagar cab drops you in Leh and returns; for Nubra, Pangong, Tso Moriri and the Leh monasteries you hire a Leh-registered taxi, either through a package or the Leh taxi union. Rented bikes from outside Ladakh face similar restrictions, so bikers usually rent in Leh.",
        ],
      },
      fareFactors("Srinagar to Leh"),
      {
        h: "Altitude and health",
        p: [
          "Kargil is at about 2,700 m and Leh at about 3,500 m. Climbing over two days helps your body adjust, but still rest on your first afternoon in Leh, drink water and avoid alcohol. Inner line permits are needed for Nubra, Pangong and other protected areas; they are not needed for the Srinagar to Leh highway itself.",
        ],
      },
      bookingChecklist,
    ],
    faqs: [
      { q: "How many days does Srinagar to Leh take by taxi?", a: "Two days is best, with a night in Kargil. It can be done in one long day of 12 to 14 hours, but that is tiring and gives less time to acclimatise." },
      { q: "When is the Srinagar to Leh road open?", a: "Usually from around April or May to November, depending on snow clearance on Zojila." },
      { q: "Can a Srinagar taxi take me to Nubra and Pangong?", a: "No. Local sightseeing in Ladakh is done in Ladakh-registered taxis. Your Srinagar cab drops you in Leh." },
      { q: "Do I need a permit for the Srinagar to Leh road?", a: "Not for the highway itself. Inner line permits are needed for Nubra, Pangong, Tso Moriri and other protected areas beyond Leh." },
    ],
  },
  {
    slug: "tempo-traveller-in-kashmir",
    title: "Tempo Traveller in Kashmir: 9 to 17 Seaters, Urbania, Routes and Group Tips",
    description: "Tempo traveller hire in Kashmir: 9, 12, 14 and 17 seaters and the Force Urbania, routes from Srinagar, Jammu and Katra, winter limits and group tips.",
    category: "Family",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "A tempo traveller is the standard way for groups of 9 to 17 to tour Kashmir together. Seaters of 9, 12, 14 and 17 run from Srinagar for Gulmarg, Pahalgam and Sonamarg trips, and from Jammu or Katra to Srinagar for groups arriving by train. The Force Urbania is the newer, more comfortable option. The fare is per vehicle, so the cost per person drops as the group grows, but in heavy snow groups are often moved to smaller vehicles.",
    sections: [
      {
        h: "Seater sizes and who they suit",
        list: [
          "9 or 10 seater: two families or a group of friends with luggage on a roof carrier.",
          "12 seater: the most common size, comfortable for 10 adults with bags.",
          "14 seater: 12 to 13 adults, or a school or office group.",
          "17 seater: large family groups and pilgrim groups; less agile on narrow hill roads.",
          "Force Urbania (10 to 17 seats): modern seats, better suspension and air-conditioning, booked for longer drives such as Jammu to Srinagar.",
        ],
      },
      {
        h: "Routes groups take",
        p: [
          "Typical tempo traveller routes are Srinagar local sightseeing, day trips to Gulmarg, Sonamarg, Doodhpathri and Yusmarg, two-night trips to Pahalgam, and transfers from Jammu or Katra. Some groups also take a tempo traveller from Srinagar to Kargil and Leh in summer, though in Ladakh local sightseeing must switch to Ladakh-registered vehicles.",
          "In Pahalgam and Sonamarg, the group still hires union taxis for Aru, Betaab, Chandanwari and Zero Point; a tempo traveller from Srinagar waits in town.",
        ],
      },
      {
        h: "Winter limits",
        p: [
          "After heavy snow, the police often stop large vehicles at Tangmarg for Gulmarg, and the group transfers into smaller 4x4 taxis for the last 13 km. Ask your operator how they handle this before you book a winter group trip, so it does not become a surprise cost.",
        ],
      },
      fareFactors("Tempo traveller"),
      {
        h: "Group travel tips",
        list: [
          "Fix one point of contact in the group for the driver.",
          "Carry a printed list of all passengers and their IDs for checkposts on the Gurez, Zojila and Jammu roads.",
          "Plan meal stops: a group of 15 at a small dhaba takes time.",
          "Check the vehicle's luggage space: 17 seaters with full luggage need a roof carrier and a tarpaulin.",
        ],
      },
      bookingChecklist,
    ],
    faqs: [
      { q: "What sizes of tempo traveller are available in Kashmir?", a: "Usually 9, 12, 14 and 17 seaters, plus the Force Urbania in 10 to 17 seat layouts." },
      { q: "Can a tempo traveller go to Gulmarg in winter?", a: "Only when the road is clear. After heavy snow, large vehicles are often stopped at Tangmarg and groups switch to smaller 4x4 taxis." },
      { q: "Is a tempo traveller cheaper than two cabs?", a: "For groups of 9 or more it usually is, because the fare is per vehicle and split across more people." },
      { q: "Can I hire a tempo traveller from Jammu or Katra to Srinagar?", a: "Yes. It is a common group transfer, about 6 to 8 hours by road." },
    ],
  },
  {
    slug: "self-drive-car-rental-in-kashmir",
    title: "Self-Drive Car Rental in Kashmir: Rules, Cars, Snow Driving and Union Limits",
    description: "Self-drive car rental in Srinagar and Kashmir: documents, which cars are rented (Swift, Thar, Scorpio, Innova), winter driving and where you cannot drive.",
    category: "Adventure",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Self-drive car rental is available in Srinagar, mostly hatchbacks such as the Swift, SUVs such as the Thar and Scorpio, and the Innova for families. You need a valid driving licence, an ID and a security deposit. Driving yourself gives freedom on the Gulmarg, Doodhpathri and Yusmarg roads, but winter snow, army convoys and local union rules in Pahalgam and Sonamarg mean it is not the right choice for everyone.",
    sections: [
      {
        h: "What you need to rent",
        list: [
          "A valid Indian driving licence (or an International Driving Permit with your home licence for foreign visitors).",
          "A government photo ID and, usually, a refundable security deposit.",
          "A check of the car with the owner, with photos or a video of every scratch, before you drive away.",
          "Clear terms on fuel, kilometre limits, late return and damage.",
        ],
      },
      {
        h: "Which cars are rented",
        p: [
          "Swift and similar hatchbacks are the cheapest and fine for Srinagar and summer day trips. The Thar and Scorpio are chosen for Gulmarg in snow, Gurez and rough roads. The Innova suits families who want to drive themselves. Ask whether the car has snow chains in winter and whether the tyres are suitable.",
        ],
      },
      {
        h: "Where self-drive is hard",
        p: [
          "Pahalgam and Sonamarg sightseeing points are served by local union taxis, and self-drive renters can be asked to park in town and take a union cab to Aru, Betaab, Chandanwari or Zero Point. Ladakh taxi unions restrict outside rented vehicles too. Check the current rules for your route with the rental owner.",
          "Kashmir roads also carry army convoys, which have right of way. Do not overtake convoys and do not photograph military vehicles or installations.",
        ],
      },
      {
        h: "Winter driving",
        p: [
          "From December to February, roads to Gulmarg, Sonamarg and Pahalgam can be icy, especially early morning and after sunset. If you have not driven on snow before, hire a driver for those days. Police check chains at Tangmarg and may stop cars without them.",
        ],
      },
      {
        h: "Self-drive or a car with driver",
        list: [
          "Self-drive suits confident drivers, summer travel and flexible plans around Srinagar.",
          "A car with driver suits first-time visitors, winter trips, families with elderly parents and anyone going to Pahalgam or Sonamarg.",
          "Many travellers mix: a driver for long days and snow, self-drive for a relaxed Srinagar day.",
        ],
      },
      bookingChecklist,
    ],
    faqs: [
      { q: "Is self-drive car rental available in Srinagar?", a: "Yes. Local rental owners offer hatchbacks, the Thar, Scorpio and Innova, with a licence, ID and security deposit." },
      { q: "Can I drive a rented car to Aru and Betaab Valley?", a: "Often not. Pahalgam's sightseeing points are served by union taxis, and you may be asked to park in town." },
      { q: "Is it safe to self-drive in Kashmir in winter?", a: "Only for experienced snow drivers with a 4x4 or chains. Otherwise hire a car with driver for the snow days." },
      { q: "Can foreigners rent a self-drive car in Kashmir?", a: "Some owners accept an International Driving Permit with the home licence. Check before booking." },
    ],
  },
  {
    slug: "kashmir-cab-types-innova-crysta-ertiga-dzire",
    title: "Kashmir Cab Types: Innova, Crysta, Ertiga, Dzire, Fortuner and Tempo Compared",
    description: "Which cab to book for Kashmir: Dzire, Etios, Ertiga, Innova, Innova Crysta, Fortuner, Xylo, Tavera and tempo travellers compared by seats, bags and season.",
    category: "Planning",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "The right cab for a Kashmir trip depends on how many people travel, how many bags you carry and the season. A Dzire or Etios suits two or three people in summer, an Ertiga or Innova suits a family of four to six, an Innova Crysta is the comfortable choice for long days and elderly parents, and tempo travellers carry groups. In winter, ground clearance and snow chains matter more than comfort.",
    sections: [
      {
        h: "Sedans: Dzire and Etios",
        p: [
          "Four seats, a small boot and the lowest fare. Good for couples and small families from April to November on the main routes. Not ideal for winter Gulmarg or the Gurez road.",
        ],
      },
      {
        h: "Ertiga: the budget 6 to 7 seater",
        p: [
          "Six or seven seats with a small boot when all seats are used. Good for a family of four or five with medium bags. Lighter than an Innova and less comfortable on long highway days such as Jammu to Srinagar.",
        ],
      },
      {
        h: "Innova and Innova Crysta",
        p: [
          "The workhorse of Kashmir tourism. Seven seats, good ground clearance and enough room for luggage with six passengers. The Crysta is newer, quieter and more comfortable, and is the usual pick for honeymooners, elderly parents and long days. Many winter trips use the Innova with chains.",
        ],
      },
      {
        h: "Older SUVs: Xylo, Tavera and Scorpio",
        p: [
          "Still common with local drivers. They carry seven or more, are rugged and are often used in snow and on rougher roads like Gurez. Less comfortable than a Crysta, but practical.",
        ],
      },
      {
        h: "Fortuner and premium cars",
        p: [
          "For travellers who want a premium SUV with 4x4 for winter, or a special arrival for a honeymoon or wedding shoot. Availability is limited, so book ahead.",
        ],
      },
      {
        h: "Tempo travellers, Urbania and mini buses",
        p: [
          "Groups of 9 to 17 use tempo travellers; the Force Urbania is the comfortable version. Larger groups take mini buses of 20 to 26 seats on the main routes. In snow, larger vehicles may be stopped at Tangmarg and groups switch to smaller taxis.",
        ],
      },
      {
        h: "Quick picker",
        list: [
          "2 people, summer: Dzire or Etios.",
          "4 people with bags: Ertiga or Innova.",
          "Elderly parents or honeymoon: Innova Crysta.",
          "Winter snow days: Innova, Scorpio or another 4x4 with chains.",
          "9 to 17 people: tempo traveller or Urbania.",
        ],
      },
      fareFactors("Kashmir cab"),
    ],
    faqs: [
      { q: "Which is the best cab for a Kashmir family trip?", a: "An Innova or Innova Crysta for four to six people with luggage. An Ertiga is the budget option." },
      { q: "Is an Innova Crysta worth the extra cost?", a: "For long days, elderly parents and honeymoons, yes: it is quieter and more comfortable than older Innovas or Ertigas." },
      { q: "Which car is best for Kashmir in winter?", a: "A vehicle with ground clearance and snow chains, such as an Innova, Scorpio or another 4x4." },
      { q: "Are cab rates the same for Innova and Crysta?", a: "No. The Crysta is priced higher. Ask your agent to name the exact model in the quote." },
    ],
  },
  {
    slug: "bike-rental-in-srinagar-and-leh",
    title: "Bike Rental in Srinagar and Leh: Royal Enfield, Himalayan, Rules and Routes",
    description: "Bike rental in Srinagar and Leh: Royal Enfield Classic and Himalayan, licence and deposit, Ladakh rules for outside bikes, routes, fuel stops and season.",
    category: "Adventure",
    destination: "ladakh",
    city: "leh",
    date: DATE,
    intro:
      "You can rent motorbikes in both Srinagar and Leh, mostly Royal Enfield Classic 350s and Himalayans, plus scooters for town use. Leh has the bigger rental market and is where most Ladakh bike trips start, because Ladakh's taxi and rental unions restrict bikes rented outside Ladakh. Srinagar rentals suit Kashmir valley rides and the Srinagar to Leh highway when the owner allows it. You need a valid two-wheeler licence and a deposit.",
    sections: [
      {
        h: "What you need",
        list: [
          "A valid driving licence with a motorcycle endorsement.",
          "A photo ID and a refundable deposit.",
          "A riding jacket, gloves and a full-face helmet: many renters supply helmets, but bring your own for a better fit.",
          "Inner line permits for Nubra, Pangong, Tso Moriri and other protected areas in Ladakh.",
        ],
      },
      {
        h: "Which bike",
        p: [
          "The Royal Enfield Himalayan is built for rough roads, with longer suspension travel and better ground clearance, and is the favourite for Ladakh. The Classic 350 is comfortable on tarred roads and in the Kashmir valley. KTM and other bikes are available with some renters. Check brakes, tyres, chain and lights before you sign.",
        ],
      },
      {
        h: "Popular routes",
        list: [
          "Srinagar to Gulmarg, Sonamarg, Pahalgam and Doodhpathri: day rides on good roads from May to October.",
          "Srinagar to Leh via Zojila and Kargil: two days, open from around May to November.",
          "Leh to Khardung La and Nubra, Leh to Pangong via Chang La, and the Hanle and Tso Moriri loop.",
          "Manali to Leh: usually ridden on a bike rented in Manali only to Leh, then returned by truck, or on a Leh bike ridden the other way.",
        ],
      },
      {
        h: "Fuel and safety",
        p: [
          "Fuel stations are few beyond Leh: fill up in Leh, Diskit, Tangtse (for Pangong) and Karu, and carry a spare can on long loops. Start early, because rivers crossing the road rise in the afternoon and passes get windy. Do not ride on your first day in Leh: rest to acclimatise.",
        ],
      },
      {
        h: "Bike trip or a cab with your group",
        p: [
          "Many groups mix: riders on bikes and a backup vehicle carrying luggage and a mechanic. This is how most organised Ladakh bike tours run, and it suits groups with non-riders or pillion passengers who prefer a car on the long days.",
        ],
      },
    ],
    faqs: [
      { q: "Can I ride a bike rented in Srinagar to Leh?", a: "Some Srinagar owners allow it, but bikes rented outside Ladakh can be restricted for sightseeing inside Ladakh. Many riders rent in Leh instead." },
      { q: "Which bike is best for Ladakh?", a: "The Royal Enfield Himalayan, for its suspension and ground clearance. The Classic 350 is fine on tarred roads." },
      { q: "Do I need a permit to ride in Ladakh?", a: "Inner line permits are needed for Nubra, Pangong, Tso Moriri and other protected areas. Carry copies at checkposts." },
      { q: "Can I rent a scooter in Srinagar?", a: "Yes, for town use and short rides. They are not suited to Zojila or Ladakh roads." },
    ],
  },
];

// Deeper sections per route, so each guide fully answers its search.
const MORE: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "srinagar-to-gulmarg-taxi": {
    sections: [
      {
        h: "Srinagar to Gulmarg by season",
        list: [
          "March to May: snow lingers on Apharwat and Khilanmarg while the meadow turns green; the road is clear and the drive is quick.",
          "June to September: green meadows, golf and pony rides; weekends and school holidays bring traffic jams at Tangmarg.",
          "October and November: golden autumn light, the quietest roads and the clearest views of Nanga Parbat from Phase 2 on good days.",
          "December to February: snow, skiing and the busiest Gondola queues around Christmas; plan for chains or a 4x4.",
        ],
      },
    ],
    faqs: [
      { q: "Should I book the Gulmarg Gondola before the taxi?", a: "Book the Gondola online on the official JKCCC portal once your date is fixed, then plan the taxi to reach Gulmarg before your slot." },
    ],
  },
  "srinagar-to-sonamarg-taxi": {
    sections: [
      {
        h: "Best time for the Sonamarg drive",
        list: [
          "April and May: snow walls near Thajiwas and the first days of the Zojila season.",
          "June to September: green meadows, river rafting on the Sindh and the start of the Great Lakes and Amarnath Baltal routes.",
          "October and November: autumn colours along the river and quiet roads before the snow.",
          "December to March: a snow day trip through the Z-Morh tunnel, with sledging near the glacier when the road is open.",
        ],
      },
    ],
    faqs: [
      { q: "Can I do Sonamarg and Gulmarg on the same day?", a: "No. They are on different roads out of Srinagar, about 4 to 5 hours of driving apart. Keep a separate day for each." },
      { q: "Is there rafting on the way to Sonamarg?", a: "Yes, on the Sindh river near Kullan and Gund in summer. Rafting operators work from May to September, depending on water levels." },
    ],
  },
  "srinagar-to-doodhpathri-taxi": {
    sections: [
      {
        h: "Doodhpathri by season",
        list: [
          "April and May: patches of snow, the stream at full flow and wildflowers starting.",
          "June to August: the greenest meadows, shepherds' huts and cool afternoons.",
          "September and October: clear skies and golden grass, the best light for photography.",
          "November to March: snow and silence. Access beyond Khansahib depends on clearance; check the evening before.",
        ],
      },
      {
        h: "What to carry",
        list: [
          "Water and snacks: food stalls are basic and close early.",
          "A light jacket even in summer, because the meadows are breezy and about 2,700 m high.",
          "Cash: there are no reliable ATMs or card machines at the meadow.",
          "Comfortable shoes for the walk down to the Shaliganga.",
        ],
      },
    ],
    faqs: [
      { q: "Is Doodhpathri crowded?", a: "Much less than Gulmarg or Pahalgam. Weekends in June bring local picnickers, but weekdays are quiet." },
    ],
  },
  "srinagar-to-yusmarg-taxi": {
    sections: [
      {
        h: "Yusmarg by season",
        list: [
          "April and May: snow still on the surrounding peaks, fresh green meadow and the stream running fast.",
          "June to August: the best time for the Nilnag hike and longer meadow walks.",
          "September and October: clear days and autumn colour in the forest edges.",
          "Winter: deep snow and very few services. Go only with a driver who knows the road and with your own food.",
        ],
      },
      {
        h: "Who Yusmarg suits",
        p: [
          "Yusmarg is a good choice for travellers who have already seen Gulmarg and Pahalgam and want a quieter meadow, for families wanting an easy walk, and for photographers. It has very few shops, which is part of its appeal. If you want snow activities or a cable car, Gulmarg is the better day out.",
        ],
      },
    ],
    faqs: [
      { q: "Is there a place to eat in Yusmarg?", a: "There is a JKTDC restaurant and a few dhabas near the meadow. Choices are limited, so carry snacks." },
      { q: "Can I stay overnight in Yusmarg?", a: "Yes, in JKTDC huts and a few small hotels near the meadow. Facilities are simple, and rooms are best booked ahead in June." },
    ],
  },
  "srinagar-to-gurez-taxi": {
    sections: [
      {
        h: "Gurez by month",
        list: [
          "May and June: the road opens after snow clearance; snow still lies on Razdan Pass and the valley turns green.",
          "July and August: the warmest months, wildflowers and the best time for Tulail.",
          "September and October: clear skies, harvest season and autumn colour along the Kishanganga.",
          "November: the last weeks before snow closes the pass; check before you go.",
        ],
      },
    ],
    faqs: [
      { q: "Is the Gurez road safe?", a: "It is a mountain road near the Line of Control, maintained by the army and used daily. Drive in daylight with an experienced local driver and follow checkpost instructions." },
      { q: "Is there ATM and fuel in Gurez?", a: "Facilities are limited. Fill up and draw cash in Bandipora before the pass." },
    ],
  },
  "jammu-to-srinagar-taxi": {
    sections: [
      {
        h: "Stops worth making",
        list: [
          "Patnitop: pine forest and meadows at about 2,000 m, a short detour from the tunnel.",
          "Kud and Batote: tea and rajma-chawal stops on the old road.",
          "Ramban: the Chenab gorge, best seen in daylight.",
          "Qazigund and the first view of the Kashmir valley after the Navyug tunnel.",
          "Pampore: saffron and dry fruit shops just before Srinagar.",
        ],
      },
      {
        h: "Arriving in Jammu",
        p: [
          "Jammu Tawi railway station and Jammu airport are both on the south side of the city, close to the highway. If your train arrives at night, stay in Jammu and leave at dawn: driving the Ramban stretch in the dark is slower and less safe, and you see nothing of the mountains.",
        ],
      },
    ],
    faqs: [
      { q: "Is it better to stay a night in Jammu before driving to Srinagar?", a: "If you arrive late, yes. Start the drive at dawn to cross Ramban and Banihal in daylight." },
    ],
  },
  "katra-to-srinagar-taxi-or-train": {
    sections: [
      {
        h: "Getting to Katra station and on from Srinagar station",
        p: [
          "Katra station is a few kilometres from the town and the Banganga start of the Vaishno Devi yatra. Hotels and taxi stands arrange drops. At Srinagar, taxis and pre-booked package drivers wait outside the station at Nowgam. Dal Lake, Boulevard Road and Rajbagh are 20 to 30 minutes away; Pahalgam is closer from Nowgam than from the airport.",
        ],
      },
      {
        h: "Luggage and food",
        list: [
          "Keep bags compact: there is limited space on Vande Bharat racks.",
          "Prasad, dry fruit and sealed food are fine; security may question liquids or unusual items.",
          "Meals are served on board depending on your ticket choice on IRCTC.",
        ],
      },
    ],
    faqs: [
      { q: "Where is Srinagar railway station?", a: "At Nowgam on the south side of the city, about 20 to 30 minutes by taxi from Dal Lake." },
    ],
  },
  "srinagar-airport-taxi": {
    sections: [
      {
        h: "Common airport routes",
        list: [
          "Airport to Dal Lake ghats and Boulevard Road: about 12 to 15 km.",
          "Airport to Nigeen Lake: about 15 km, on the quieter north side of the city.",
          "Airport to Rajbagh and Lal Chowk: about 12 km.",
          "Airport to Srinagar railway station at Nowgam: about 15 km.",
          "Airport to Gulmarg: about 55 km. To Sonamarg: about 90 km. To Pahalgam: about 100 km.",
        ],
      },
      {
        h: "Late or delayed flights",
        p: [
          "If your flight is late in winter, drive straight to your Srinagar hotel rather than onward to Gulmarg or Pahalgam. Hill roads freeze after dark and police may stop traffic. A package driver tracking your flight number will wait, while a prepaid counter fare is only valid from the moment you book it.",
        ],
      },
    ],
    faqs: [
      { q: "Do app cabs work at Srinagar airport?", a: "Availability is limited. Use the prepaid counter or a pre-booked driver, especially for late arrivals." },
    ],
  },
  "srinagar-to-leh-taxi": {
    sections: [
      {
        h: "Stops on the Srinagar to Leh road",
        list: [
          "Sonamarg: breakfast stop before Zojila.",
          "Zojila pass and the Zero Point viewpoint.",
          "Drass: the Kargil War Memorial at the foot of Tololing.",
          "Kargil: the night halt, on the Suru river.",
          "Mulbekh: a 9 metre rock-cut Maitreya Buddha beside the road.",
          "Lamayuru: the monastery and the eroded moonland landscape.",
          "Confluence of the Indus and Zanskar at Nimmu, and Magnetic Hill before Leh.",
        ],
      },
      {
        h: "Going back: Leh to Manali or Leh to Srinagar",
        p: [
          "Many travellers enter Ladakh from Srinagar and leave by flight or by the Manali road, which makes a full loop. If you exit by the Manali road, you change to a Ladakh or Himachal vehicle in Leh. Flights from Leh to Delhi leave in the morning; keep a buffer day for weather.",
        ],
      },
    ],
    faqs: [
      { q: "Is Srinagar to Leh better than Manali to Leh?", a: "For acclimatisation, yes: altitude rises more gradually from Srinagar, and the road is shorter. Manali to Leh crosses higher passes in one stretch." },
    ],
  },
  "tempo-traveller-in-kashmir": {
    sections: [
      {
        h: "A typical 6-day group plan",
        days: [
          "Arrive at Srinagar airport or Katra station; transfer to Srinagar, shikara ride in the evening.",
          "Srinagar sightseeing: Mughal gardens, Hazratbal, Shankaracharya and the old city.",
          "Day trip to Gulmarg for the Gondola and meadow.",
          "Drive to Pahalgam via Pampore and Awantipora; union taxis for Betaab and Aru.",
          "Day trip to Sonamarg, or a second day in Pahalgam.",
          "Return to Srinagar or Katra for departure.",
        ],
      },
    ],
    faqs: [
      { q: "Does a tempo traveller fare include the driver's food and stay?", a: "Usually the driver's allowance is included on multi-day hires. Confirm it in writing, along with tolls and parking." },
    ],
  },
  "self-drive-car-rental-in-kashmir": {
    sections: [
      {
        h: "Best self-drive routes",
        list: [
          "Srinagar city, Mughal gardens and Boulevard Road at your own pace.",
          "Srinagar to Gulmarg in summer and autumn, with a stop at Drung waterfall.",
          "Srinagar to Doodhpathri or Yusmarg on quiet country roads.",
          "Srinagar to Pahalgam via the saffron town of Pampore and the Awantipora ruins (park in Pahalgam for sightseeing).",
          "Manasbal and Wular lakes on the north side of the valley.",
        ],
      },
      {
        h: "Fuel, parking and documents in the car",
        p: [
          "Fuel stations are frequent in the valley but thin out towards Gurez and beyond Sonamarg. Carry the rental agreement, the car's registration papers and insurance, and your licence: police checks are routine in Kashmir and polite cooperation is expected. Park only in marked areas in Gulmarg and Pahalgam; local staff collect parking fees.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a 4x4 for self-drive in Kashmir?", a: "Not from April to November on the main routes. In winter, a 4x4 or chains are strongly advised for Gulmarg and Sonamarg." },
      { q: "Is there a kilometre limit on self-drive rentals?", a: "Many owners set a daily kilometre limit or charge extra beyond it. Ask before you book." },
      { q: "Is the security deposit refunded on return?", a: "Yes, after the owner checks the car. Agree in writing how damage, fuel shortfall and traffic fines are deducted, and take photos when you return the car." },
      { q: "Can I take a self-drive car from Srinagar to Leh?", a: "Some owners allow it in summer, but Ladakh unions restrict outside rental vehicles for sightseeing. Many travellers drive to Leh and switch to a local taxi there." },
    ],
  },
  "kashmir-cab-types-innova-crysta-ertiga-dzire": {
    sections: [
      {
        h: "Luggage guide",
        list: [
          "Dzire or Etios: two medium suitcases and two small bags.",
          "Ertiga: with all seats in use, only small bags; fold the last row for big suitcases.",
          "Innova or Crysta: four to five medium suitcases with six passengers.",
          "Tempo traveller: roof carrier for large groups; cover bags with a tarpaulin in rain or snow.",
        ],
      },
      {
        h: "Comfort on long days",
        p: [
          "The longest Kashmir drives are Jammu or Katra to Srinagar (6 to 8 hours), Srinagar to Gurez (5 to 6 hours) and Srinagar to Kargil (7 to 8 hours). On these, a Crysta or Urbania is worth the extra cost, especially with children or elderly parents. On short day trips to Gulmarg, Doodhpathri or Yusmarg, a smaller car is fine.",
        ],
      },
    ],
    faqs: [
      { q: "Can six adults fit in an Ertiga for a Kashmir trip?", a: "They fit, but with little room for bags. An Innova is more comfortable for six adults with luggage." },
      { q: "Is a Fortuner available in Kashmir?", a: "Yes, with a few operators in Srinagar, mostly for premium and winter trips. Book well ahead." },
    ],
  },
  "bike-rental-in-srinagar-and-leh": {
    sections: [
      {
        h: "When to ride",
        list: [
          "Kashmir valley: May to October, with the best weather in May, June, September and October.",
          "Srinagar to Leh: after Zojila opens, around May or June, until about mid-October for comfortable riding.",
          "Ladakh high passes: June to September; Khardung La and Chang La can see snow even in June.",
          "Winter: not recommended; passes close and roads ice over.",
        ],
      },
      {
        h: "Rental checklist",
        list: [
          "Photograph the bike, the odometer and the fuel level before you leave.",
          "Ask for a toolkit, spare tube or puncture kit, and a spare clutch and accelerator cable for Ladakh.",
          "Confirm what happens if the bike breaks down far from Leh: who pays for recovery.",
          "Clarify the deposit refund terms and the daily rate for late return.",
          "Check the registration papers and insurance are in the bike.",
        ],
      },
      {
        h: "A 7-day Ladakh ride from Leh",
        days: [
          "Arrive in Leh and rest. Collect the bike in the evening.",
          "Short ride: Shanti Stupa, Leh Palace, Hall of Fame and Spituk.",
          "Leh to Nubra via Khardung La; night in Hunder or Diskit.",
          "Nubra to Pangong via the Shyok road; night at Spangmik or Merak.",
          "Pangong to Leh via Chang La.",
          "Day ride to Hemis, Thiksey and Shey monasteries.",
          "Return the bike and fly out.",
        ],
      },
    ],
    faqs: [
      { q: "Are bikes rented in Manali allowed in Ladakh?", a: "Ladakh's unions have restricted outside rental bikes for sightseeing. Check current rules with your renter before planning a loop." },
      { q: "How much deposit do bike renters in Leh ask for?", a: "It varies by bike and renter. Most ask for a refundable cash or online deposit plus an ID; agree the refund terms before you ride." },
      { q: "Is riding in Ladakh safe for beginners?", a: "Only for riders comfortable on rough roads and water crossings. Beginners should join a guided group with a backup vehicle, rest a day in Leh first and avoid riding after dark." },
      { q: "Do I need riding gear for Kashmir valley rides?", a: "A helmet is compulsory. A jacket, gloves and rain cover make long rides to Sonamarg or Pahalgam far more comfortable." },
    ],
  },
};


const MORE_2: Record<string, BlogSection[]> = {
  "srinagar-to-doodhpathri-taxi": [
    {
      h: "Doodhpathri in a Kashmir itinerary",
      p: [
        "Doodhpathri fits best on a spare day in Srinagar, after you have done Gulmarg, Pahalgam and Sonamarg, or as a replacement for one of them in peak season when they are crowded. A 6 or 7 night Kashmir package can include it without changing hotels, because you return to Srinagar the same evening. Ask for it as a named day in the itinerary rather than an optional add-on, so the taxi time is priced in.",
        "Families with small children like it because the meadows are flat near the parking and there are no steep paths. Photographers come for the early light on the stream, so if you want the best pictures leave Srinagar at 7 am.",
      ],
    },
  ],
  "srinagar-to-yusmarg-taxi": [
    {
      h: "Visiting Charar-e-Sharief",
      p: [
        "The shrine of Sheikh Nooruddin Noorani, known as Nund Rishi, is one of the most revered places in Kashmir and draws pilgrims of every background. The original wooden shrine burned in 1995 and has been rebuilt. Remove shoes before entering, dress modestly, and women should cover their heads. Photography inside is usually not allowed. Thursday and festival days are busy.",
        "The town has a small market with local snacks, Kashmiri bread and dry fruit, a good place for a tea stop on the way back from Yusmarg.",
      ],
    },
  ],
  "srinagar-to-gurez-taxi": [
    {
      h: "What to pack for Gurez",
      list: [
        "Warm layers even in July: nights in Dawar and Tulail are cold.",
        "Basic medicines, as pharmacies are few.",
        "A power bank and a torch: power cuts are common.",
        "Cash for homestays, food and fuel.",
      ],
    },
  ],
  "srinagar-airport-taxi": [
    {
      h: "Planning the first and last day around flights",
      p: [
        "Morning arrivals can start sightseeing the same day: drop bags at the hotel, then see the Mughal gardens and take a sunset shikara ride. Afternoon arrivals should keep the first evening light. On the last day, do not plan a Gulmarg or Pahalgam trip before an afternoon flight; the security queue at the airport gate and hill road traffic make it risky.",
      ],
    },
  ],
  "tempo-traveller-in-kashmir": [
    {
      h: "Choosing a tempo traveller operator",
      list: [
        "Ask for the vehicle's age and photos of the actual van, not a brochure image.",
        "Check that it has working air-conditioning and heating: you need both in different months.",
        "Confirm the driver has driven the Gulmarg, Pahalgam and Sonamarg roads recently.",
        "Agree in writing who pays for union taxis at Pahalgam and Sonamarg and for any 4x4 switch at Tangmarg.",
      ],
    },
  ],
  "self-drive-car-rental-in-kashmir": [
    {
      h: "Driving rules and road manners in Kashmir",
      list: [
        "Speed limits on the highway are enforced, and speed cameras operate on parts of NH 44.",
        "Give way to army convoys and follow any instruction from security staff at checkpoints.",
        "Hill roads have blind bends: honk before them, and give uphill traffic the right of way.",
        "Watch for sheep and cattle herds on the Gulmarg, Doodhpathri and Gurez roads, especially in spring and autumn when shepherds move.",
        "Do not drink and drive: police checks are routine at night.",
      ],
    },
  ],
  "kashmir-cab-types-innova-crysta-ertiga-dzire": [
    {
      h: "Cab type for each route",
      list: [
        "Srinagar local and Mughal gardens: any car.",
        "Srinagar to Gulmarg, Sonamarg or Doodhpathri in summer: a sedan is fine; an Innova for families.",
        "Srinagar to Pahalgam: an Innova or Crysta for comfort over 3 hours each way.",
        "Jammu or Katra to Srinagar: an Innova Crysta or Urbania for the 6 to 8 hour drive.",
        "Srinagar to Gurez: an SUV with ground clearance.",
        "Srinagar to Leh: an Innova or Crysta that has done the route, with a driver used to Zojila.",
      ],
    },
  ],
  "bike-rental-in-srinagar-and-leh": [
    {
      h: "Riding the Srinagar to Leh highway",
      p: [
        "The hardest part of the Srinagar to Leh ride is Zojila: loose gravel, mud after rain, water crossings and heavy truck traffic on a narrow shelf road. Ride it early in the morning, with lights on, and keep to the inside lane. After Drass the road is mostly good tarmac to Kargil and on to Leh, with Namik La and Fotu La as gentle passes.",
        "Plan the night halt in Kargil or Drass, and refuel in Kargil: the next reliable fuel is in Khaltse or Leh. In the shoulder months, ask locally about Zojila opening hours, which can switch to one-way traffic at set times.",
      ],
    },
  ],
};

export const KASHMIR_ROUTES: BlogPost[] = BASE_ROUTES.map((p) => {
  const m = MORE[p.slug];
  const more = [...(m?.sections ?? []), ...(MORE_2[p.slug] ?? [])];
  return { ...p, sections: [...p.sections, ...more], faqs: [...p.faqs, ...(m?.faqs ?? [])] };
});

const EXTRA_1: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "srinagar-to-sonamarg-taxi": {
    sections: [

    ],
    faqs: [
      { q: "Is Sonmarg the same as Sonamarg?", a: "Yes. Sonmarg and Sonamarg are two spellings of the same town on the Srinagar to Leh highway; signs, maps and taxi stands use both." },
    ],
  },
  "srinagar-to-yusmarg-taxi": {
    sections: [

    ],
    faqs: [
      { q: "Is Yousmarg the same as Yusmarg?", a: "Yes. Yousmarg, Yusmarg and Yusmarg meadow all refer to the same place in Budgam district, about 47 km from Srinagar." },
    ],
  },
  "tempo-traveller-in-kashmir": {
    sections: [

    ],
    faqs: [
      { q: "Can I take a tempo traveller from Srinagar to Gurez, Kargil or Leh?", a: "Yes, in season. Tempo travellers run from Srinagar to Gurez over Razdan Pass from about June to October, and to Kargil and Leh over Zojila from about May to November. In Ladakh, local sightseeing must switch to Ladakh-registered vehicles." },
      { q: "Is there an 8 seater or 14 seater tempo traveller in Kashmir?", a: "Yes. Smaller 8 to 10 seat vans and 14 seat tempo travellers are both common in Srinagar; book the size that leaves room for luggage." },
    ],
  },
  "kashmir-cab-types-innova-crysta-ertiga-dzire": {
    sections: [

    ],
    faqs: [
      { q: "Which cab service in Kashmir should I book: Innova, Innova Crysta, Ertiga, Swift Dzire or Etios?", a: "Swift Dzire or Etios for two or three people in summer, Ertiga for a budget family of five, Innova for six with luggage, and Innova Crysta for comfort on long days and with elderly parents." },
      { q: "Is there a Fortuner, Tavera or Xylo cab service in Kashmir?", a: "Yes. Fortuners are available with a few Srinagar operators for premium and winter trips; Tavera and Xylo SUVs are still common with local drivers and are often used in snow and on the Gurez road." },
      { q: "Is there an Urbania or mini bus cab service in Kashmir?", a: "Yes. Force Urbania vans of 10 to 17 seats and mini buses of 20 to 26 seats run for groups on the main routes from Srinagar, Jammu and Katra." },
    ],
  },
  "self-drive-car-rental-in-kashmir": {
    sections: [

    ],
    faqs: [
      { q: "Can I rent a self-drive Thar, Scorpio, Innova or Swift in Kashmir?", a: "Yes. Srinagar rental owners offer the Swift and other hatchbacks, the Thar and Scorpio for snow and rough roads, and the Innova for families, subject to licence, ID and deposit." },
    ],
  },
};
for (const p of KASHMIR_ROUTES) {
  const e = EXTRA_1[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}
