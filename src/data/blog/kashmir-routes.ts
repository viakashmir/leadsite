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

const EXTRA_2: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "srinagar-to-gulmarg-taxi": {
    sections: [
      { h: "Stop by stop: the road from Srinagar to Gulmarg", p: ["Most drivers leave Srinagar on the Parimpora side of the city and join the Gulmarg road at Narbal. From here the road runs south-west across the flat Budgam and Baramulla countryside, past willow groves, paddy fields and walnut trees, through Magam and Kunzer. This first hour is gentle and straight, and in spring the fields beside it fill with mustard flowers.", "Tangmarg, about 40 km from Srinagar, is the market town at the foot of the climb. It is where you hire snow boots and jackets in winter, where taxis are checked for chains after snowfall, and where shared cabs from Srinagar end. A short detour from here leads to Drung waterfall, which freezes into ice formations in a hard winter.", "Above Tangmarg the road climbs about 13 km through pine and fir forest in a series of hairpin bends. Halfway up is the turn for the shrine of Baba Reshi, a 15th century Sufi saint, visited by people of every faith. The forest opens suddenly onto the Gulmarg meadow at about 2,650 m, with the golf course, the church and the Gondola station spread out in front of you."] },
      { h: "The Gulmarg Gondola: what to know before you book the taxi", p: ["The Gondola is the reason most people make this trip, so plan the taxi around it. It runs in two stages: Phase 1 from the Gulmarg base station to Kongdoori at about 3,080 m, and Phase 2 from Kongdoori to the Apharwat ridge at about 3,950 m. Tickets are sold online on the official Jammu and Kashmir Cable Car Corporation (JKCCC) portal, usually for a set date and time slot, and you carry the ID you booked with.", "Phase 2 is the more weather-dependent of the two and closes in high wind, low cloud or heavy snow, sometimes for part of a day. Phase 1 runs more often. If Phase 2 closes, the Kongdoori bowl still has snow for much of the year and good views back over the meadow. Allow two to three hours for the Gondola alone in peak season, including queues at both stations.", "Tell your driver your Gondola slot when you book the taxi. A 10 am slot means leaving Srinagar by 7.30 am in winter or 8 am in summer, which also beats the worst traffic at Tangmarg."] },
      { h: "Things to see in Gulmarg in one day", p: ["Gulmarg is small, and most of its sights are on or around the main meadow. In one day you can comfortably combine the Gondola with three or four of the following, on foot or by pony.", "St Mary's Church, a small stone church from the British era, stands on a rise above the meadow and is one of the most photographed buildings in Kashmir. The Maharani temple, built by the Dogra royal family in the early 20th century, sits on a hillock in the middle of the meadow and is famous from Hindi film songs shot here. The golf course, one of the highest green courses in the world, wraps around the meadow and turns into a snowfield in winter.", "Further out, Khilanmarg is a smaller meadow about 6 km uphill, reached by pony or on foot, with wide views of the Pir Panjal and, on clear days, of Nanga Parbat. Strawberry Valley and the forest walks around the meadow are gentle and good for families. Alpather lake, high above Apharwat, is reached only in summer by a long pony ride or trek from the Phase 2 area and needs a full day on its own."] },
      { h: "Hour by hour: a Gulmarg day trip in summer", p: ["8.00 am: leave Srinagar after breakfast. 9.15 am: short tea stop at Tangmarg. 9.45 am: reach Gulmarg and walk to the Gondola base. 10.00 am to 1.00 pm: Gondola Phase 1 to Kongdoori, then Phase 2 to Apharwat if it is open, with time at the top for photos and a walk on the snow patches. 1.30 pm: lunch near the Gondola base or at a hotel restaurant on the meadow.", "2.30 to 4.30 pm: pony ride to Khilanmarg, or a walk to St Mary's Church, the Maharani temple and the golf course. 4.30 pm: leave Gulmarg. 6.00 pm: back in Srinagar in time for a sunset walk on Boulevard Road. In June and July, when days are long, you can stay until 6 pm and still drive down in daylight."] },
      { h: "Hour by hour: a Gulmarg day trip in winter", p: ["7.30 am: leave Srinagar; carry gloves, a woollen cap and sunglasses. 8.30 am: stop at Tangmarg to hire snow boots and long coats if you need them, and for the police to check chains after snowfall. 9.30 am: reach Gulmarg. 10.00 am to 12.30 pm: Gondola, with sledging or a short ski lesson near the base if Phase 2 is closed.", "12.30 pm: hot lunch and kahwa. 1.30 to 3.00 pm: sledging on the meadow slopes, an ATV or snow scooter ride, and photos at the frozen church and temple. 3.30 pm: leave Gulmarg, before the road refreezes as the sun goes behind the ridge. 5.00 to 5.30 pm: back in Srinagar. On the busiest winter days, the queue at Tangmarg on the way down can add an hour."] },
      { h: "Private taxi, shared cab, bus or self-drive", p: ["A private taxi is the easiest choice for families and couples: door-to-door, flexible timing and a driver who knows the winter rules. It is priced per vehicle, so it becomes good value for four or more people.", "Shared cabs run from Srinagar to Tangmarg through the day and are used by local people; from Tangmarg you take a local taxi up to Gulmarg. This is the cheapest option for solo travellers and backpackers but needs more time and patience, especially with luggage.", "J&K Road Transport Corporation and private buses run on the route in the tourist season, but timings are not always convenient for a day trip. Self-drive is easy in summer and autumn on a dry road; in winter it suits only experienced snow drivers with a 4x4 or chains, and the police may still stop cars without chains at Tangmarg."] },
      { h: "Winter driving rules on the Tangmarg climb", p: ["After snowfall, the traffic police and local administration control the road above Tangmarg. Vehicles without snow chains or four-wheel drive may be stopped, and on some days only certain vehicles are allowed up until the road is cleared. Drivers hire chains in Tangmarg when needed. The road is coldest and most slippery early in the morning and from mid-afternoon, when shaded bends refreeze.", "Large vehicles such as tempo travellers are the first to be restricted, and groups are often moved into smaller 4x4 taxis at Tangmarg for the last 13 km. If you are travelling in a group in January or February, ask your operator in advance how this is handled and who pays for the switch."] },
      { h: "Ponies, guides and sledges: how to avoid disputes", p: ["Pony owners, guides and sledge pullers in Gulmarg are registered and work to rates fixed by the local authority, which are displayed on boards near the main points. Disputes almost always start when the route is not agreed at the start. Before you set off, agree the exact route (for example, Khilanmarg and back, or a loop of the meadow), the time, whether waiting is included, and the total price for the group.", "Pay at the end, not the start, and ask for the owner's registration card number if you are unsure. You are never obliged to take a pony or guide: the meadow, the church and the Gondola base are an easy walk from the parking area."] },
      { h: "Food and rest stops", p: ["Tangmarg has dhabas and bakeries for tea, Kashmiri bread and simple meals, and it is cheaper than Gulmarg. In Gulmarg itself, the cafes and food stalls near the Gondola base serve tea, kahwa, Maggi and snacks, and hotel restaurants on the meadow serve proper lunches, including Kashmiri dishes. There is a cafeteria at Kongdoori for hot drinks.", "Carry water and a few snacks, especially in winter when you may wait in Gondola queues. Toilets are available at the Gondola stations and in hotels and restaurants."] },
      { h: "Gulmarg with children, elderly parents or limited mobility", p: ["The walk from the parking area to the Gondola base is short and mostly flat, and the Gondola cabins are enclosed, so Phase 1 suits most visitors. Phase 2 reaches nearly 4,000 m, and some elderly travellers feel the altitude there; keep the visit short, move slowly and come down if anyone feels unwell.", "In winter, the snow on the meadow is slippery and deep in places. Sledges pulled by local operators are an easy way for children and older travellers to move across the snow. Choose an Innova or similar vehicle with good heating for the drive, and keep blankets in the car."] },
      { h: "Safety on the mountain", p: ["The Apharwat area is high, exposed and subject to sudden weather changes. Stay within marked areas, follow instructions from Gondola staff and ski patrol, and never go off-piste in winter without a qualified local guide, because the slopes beyond the marked runs are avalanche terrain. In summer, sun at altitude is strong: wear sunglasses and sunscreen.", "In an emergency anywhere in India, the national number is 112. Gondola staff and your driver will also know how to reach local help quickly."] },
    ],
    faqs: [
      { q: "Is there a vehicle entry fee for Gulmarg?", a: "Vehicles entering Gulmarg may be charged an entry or parking fee by the local authority. Ask your driver whether it is included in the taxi quote." },
      { q: "How long does the Gulmarg Gondola take?", a: "Each phase takes only minutes in the cabin, but with queues, time at Kongdoori and Apharwat and the return, plan two to three hours in peak season." },
      { q: "Can I take a shared taxi from Srinagar to Gulmarg?", a: "Shared cabs run from Srinagar to Tangmarg, and local taxis go from Tangmarg up to Gulmarg. It is cheap but slower than a private taxi." },
      { q: "Can I do Gulmarg and Doodhpathri on the same day?", a: "Not comfortably. They are on different roads from Srinagar. Give each its own day." },
      { q: "Which day of the week is quietest in Gulmarg?", a: "Weekdays, especially Tuesday to Thursday. Weekends bring many day visitors from Srinagar." },
      { q: "Is Gulmarg very crowded at Christmas and New Year?", a: "Yes. It is the busiest time of the winter. Book the Gondola and any hotel early, and leave Srinagar by 7 am." },
      { q: "What should I wear for a winter Gulmarg trip?", a: "Thermal layers, a warm waterproof jacket, gloves, a woollen cap, sunglasses and waterproof boots. Boots and long coats can be hired in Tangmarg." },
    ],
  },
  "srinagar-to-pahalgam-taxi": {
    sections: [
      { h: "Stop by stop: Srinagar to Pahalgam in detail", p: ["Leaving Srinagar on the Pantha Chowk side, the road joins the national highway towards Jammu. Pampore, about 15 km out, sits on the karewa plateau where Kashmir's GI-tagged saffron grows. In late October and early November the fields turn purple as the crocus flowers, and farmers pick them at dawn. Saffron, dry fruit and kahwa shops line the road all year.", "Around 30 km from Srinagar, the ruins of the Avantishvara and Avantiswami temples at Awantipora stand right beside the road. They were built in the 9th century by King Avantivarman, founder of the town, and their carved stone columns are worth a 20 minute stop. Further on, near Sangam and Halmulla, workshops stack willow clefts to dry and make Kashmir willow cricket bats; many let visitors watch the work.", "At Khanabal, near Anantnag, the road leaves the highway and turns up the Lidder valley. The last 45 km pass Aishmuqam, with its hilltop shrine of the Sufi saint Zain-ud-Din Wali, apple and walnut orchards, and riverside villages, before reaching Pahalgam at about 2,200 m."] },
      { h: "Detours worth adding on the way", p: ["Martand Sun Temple, near Mattan, is the most impressive of Kashmir's ancient temples: an 8th century complex built by King Lalitaditya Muktapida on a plateau with views across the valley. It adds about an hour. Achabal, a Mughal garden laid out around a powerful spring, and Kokernag, a botanical garden with springs, are also close to the Anantnag area and can be added if you leave Srinagar early.", "Mattan also has a sacred spring and a gurdwara, and the town of Bijbehara has a large chinar garden on the Jhelum. If you plan more than one detour, split the drive across two days or visit them on the way back to Srinagar."] },
      { h: "Union taxi rounds in Pahalgam explained", p: ["Pahalgam's sightseeing points are reached by local taxis run by the Pahalgam taxi union from the stand in town. The common options are single trips to Aru Valley, Betaab Valley or Chandanwari, or a combined round that covers two or three of them. Rates are fixed per vehicle and per point by the union, and the rate board is displayed at the stand.", "Aru Valley is about 12 km up the western Lidder: a village and meadow that is the base for treks to Lidderwat, Kolahoi glacier and Tarsar lake. Betaab Valley, about 15 km on the Chandanwari road, is a green, river-fed meadow named after a Hindi film shot there. Chandanwari, about 16 km from Pahalgam, is the start of the Amarnath Yatra route and is known for a snow bridge that often lasts into summer. In peak season, start early: the union stand gets long queues after 10 am."] },
      { h: "Hour by hour: a two-day Pahalgam plan", p: ["Day 1. 8.00 am: leave Srinagar. 8.30 am: Pampore saffron shops. 9.15 am: Awantipora ruins. 10.15 am: cricket bat workshops at Sangam. 11.30 am: optional Martand Sun Temple. 1.00 pm: reach Pahalgam, check in and lunch. Afternoon: walk along the Lidder, visit the old Mamaleshwar temple, and relax by the river at sunset.", "Day 2. 8.30 am: union taxi to Betaab Valley, then Chandanwari. 12.30 pm: lunch in town. 2.00 pm: union taxi to Aru Valley for the meadow and village walk. 5.00 pm: back in town. Optional: rafting on the Lidder in the morning instead of Aru, from about May to September. Day 3: drive back to Srinagar or on to the airport."] },
      { h: "Pahalgam by month", p: ["March and April: snow lingers at Chandanwari and on the higher slopes; the valley turns green and the river starts to rise. Hotels open fully for the season. May and June: the busiest months, with families, honeymooners and rafting in full swing. July and August: the Amarnath Yatra starts from Chandanwari via Pahalgam; security is tight, some sightseeing points can be closed on certain days, and traffic is slower.", "September and October: clear skies, golden fields and fewer crowds, the best time for photographers and walkers. November: cold, quiet, and sometimes the first snow. December to February: deep snow in the pine forests, Betaab usually reachable, Chandanwari often closed after heavy snowfall, and very few visitors."] },
      { h: "Private taxi, shared cab or bus", p: ["A private taxi is the easiest way to combine the Pampore, Awantipora and bat stops. Shared cabs run from Srinagar to Anantnag, and from Anantnag on to Pahalgam, through the day; they are cheaper but slower and less flexible. JKRTC and private buses also run in the tourist season.", "Whichever way you come, Pahalgam's local sightseeing is by union taxi, so there is no need to keep a Srinagar cab waiting for two days unless you want it for the return. Many travellers book a one-way drop to Pahalgam and a one-way pickup two days later."] },
      { h: "Activities in Pahalgam", p: ["River rafting on the Lidder runs from about May to September, with gentle stretches for beginners and families. Pony rides go from the town and from Aru and Chandanwari to viewpoints and meadows, at rates set by the local authority. The Pahalgam golf course is in the valley close to town. Trout fishing is possible with a permit from the Fisheries Department.", "Longer walks and treks start from Aru: Lidderwat is a day hike or an easy overnight, and Kolahoi glacier and Tarsar lake are multi-day treks for fit walkers with a registered local guide."] },
      { h: "Food in Pahalgam and on the way", p: ["Pampore and Awantipora have tea stalls and dhabas. Pahalgam's main market has vegetarian and non-vegetarian restaurants, bakeries and riverside cafes, and most hotels serve Kashmiri dishes such as rogan josh, rista and dum aloo. In winter many restaurants close early, so most hotels include dinner in their rates."] },
      { h: "Safety and security on the Pahalgam road", p: ["Security checks are routine on the highway and on the Pahalgam road, especially during the Amarnath Yatra. Carry original photo IDs for all travellers, follow instructions at checkpoints and avoid photographing security installations. Check local news and your hotel's advice before your trip, and keep to daylight for the drive.", "Baisaran meadow above the town has been closed to visitors since April 2025. Ask locally for its current status; do not rely on an itinerary that still lists it."] },
      { h: "Pahalgam with children and elderly parents", p: ["Pahalgam is one of the easiest hill towns in Kashmir for families: the riverbank walks are flat, the parks near the main market are good for children, and union taxis drive close to the main viewpoints at Betaab and Aru. Elderly travellers usually prefer a riverside hotel near the town, a slow morning and one valley per half day. Keep the drive from Srinagar short by limiting detours to one or two."] },
    ],
    faqs: [
      { q: "Can I see Betaab, Aru and Chandanwari in one day?", a: "Yes, with a combined union taxi round, though it is a full day. Starting by 8.30 am leaves time at each point." },
      { q: "Is Martand Sun Temple on the way to Pahalgam?", a: "It is a short detour near Mattan, off the Pahalgam road. Plan about an hour extra." },
      { q: "When is rafting open in Pahalgam?", a: "From about May to September, depending on water levels on the Lidder." },
      { q: "Are shared cabs available from Srinagar to Pahalgam?", a: "Yes, usually via Anantnag. They are cheaper but slower than a private taxi." },
      { q: "Is Chandanwari open in winter?", a: "It often closes after heavy snowfall. Betaab Valley is usually reachable through winter." },
      { q: "Can I go from Pahalgam straight to Gulmarg?", a: "Only by driving back through Srinagar, about 4 to 5 hours. Most travellers return to Srinagar and visit Gulmarg as a separate day trip." },
    ],
  },
  "srinagar-to-sonamarg-taxi": {
    sections: [
      { h: "Stop by stop: Srinagar to Sonamarg", p: ["The road leaves Srinagar through Soura or Nishat and reaches Ganderbal, where the Sindh river meets the plains. A short detour here leads to the Kheer Bhawani temple at Tulmulla, built in the middle of a sacred spring, and to Manasbal lake, one of the deepest lakes in the valley, known for lotus blooms in summer and migratory birds in winter.", "Past Ganderbal the road enters the Sindh valley proper at Kangan, the main town on the way, and climbs gently through Gund, Kullan and Gagangir, with the river on your right and steep, forested slopes on both sides. The Wangath road near Kangan leads to the ancient Naranag temple complex and the end point of the Kashmir Great Lakes trek.", "The final stretch, past the entrance to the Z-Morh tunnel, opens into the wide Sonamarg valley at about 2,800 m, with the Thajiwas glacier valley to the south and the road to Zojila and Ladakh continuing east."] },
      { h: "Thajiwas Glacier in detail", p: ["Thajiwas is a glacier valley about 3 km from the main Sonamarg parking. A gravel and earth path leads into the valley along a stream, through meadows and clumps of birch, to the snowfields and glacier at its head. Most people walk it in about an hour each way or take a pony at rates set by the local authority; sledges run on the snow near the glacier.", "The snow at the head of the valley lasts well into summer, which makes Thajiwas one of the easiest places in Kashmir to touch snow in May and June. In July and August it shrinks back towards the glacier. Do not walk on or under overhanging snow bridges and ice, which can collapse as they melt."] },
      { h: "Zero Point and Zojila", p: ["Beyond Baltal, the road climbs to Zojila pass at about 3,500 m on the way to Ladakh. Zero Point, a snowfield on the Zojila side, is a popular stop for tourists in summer. It is visited in Sonamarg union taxis, hired at the local stand, and is open only when the road over Zojila is open, roughly from May to November, depending on snow and road conditions.", "The road is rough, narrow and shared with army convoys and trucks to Ladakh, and traffic can be regulated by time windows. Wear warm clothes even in July, carry water, and expect the trip to take three to four hours including time at the top."] },
      { h: "Hour by hour: a Sonamarg day trip", p: ["7.30 am: leave Srinagar. 8.15 am: optional stop at Kheer Bhawani or Manasbal. 9.30 am: tea at Kangan or Gund by the river. 10.30 am: reach Sonamarg. 10.45 am to 1.30 pm: walk or pony to Thajiwas glacier and back. 1.30 pm: lunch at a dhaba on the main road.", "2.30 to 5.00 pm (in season): union taxi to Zero Point, or an hour of rafting on the Sindh near Kullan on the way back. 5.30 pm: start back. 7.30 pm: reach Srinagar. In winter, cut the plan to the Thajiwas snow walk and sledging, and leave Sonamarg by 3 pm."] },
      { h: "Rafting on the Sindh", p: ["From about May to September, rafting operators run trips on the Sindh near Kullan and Gund, on the way to Sonamarg. The usual stretch suits beginners and families, with a few lively rapids. Trips include a helmet, life jacket and a guide. Check that the operator is registered, the equipment is in good condition and the guide gives a safety briefing before you start. Water levels are highest and coldest in June."] },
      { h: "Sonamarg by month", p: ["January and February: snow, quiet roads through the Z-Morh tunnel on clear days, sledging near Thajiwas; most hotels shut. March and April: deep snow still, road access improving, Zojila closed. May and June: the season opens, Zojila reopens, snow walls at Thajiwas, rafting begins.", "July and August: green meadows, trekkers and Amarnath Yatra pilgrims on the Baltal route, busy roads. September and October: crisp, clear and colourful, the best time for photographs. November and December: first snow, hotels closing, Zojila closing for the winter."] },
      { h: "Private taxi, shared cab or bus", p: ["A private taxi gives the most freedom for stops and the return time. Shared cabs run from Srinagar towards Kangan and Sonamarg in the season and are cheaper. Buses also run on the route, mainly for local travellers and pilgrims. Self-drive is easy in summer, but expect convoys and some rough stretches beyond Sonamarg."] },
      { h: "Treks that start near Sonamarg", p: ["The Kashmir Great Lakes trek starts near Sonamarg at Shitkadi and crosses high passes past Vishansar, Krishansar, Gadsar, Satsar and the Gangabal twin lakes to Naranag, usually over seven days from July to September. Shorter walks include the Thajiwas valley and day hikes in the Baltal area. Trek only with a registered operator and carry original ID for checkposts."] },
      { h: "Amarnath Yatra and Sonamarg", p: ["During the Amarnath Yatra in July and August, Baltal near Sonamarg is the base camp for the shorter, steeper route to the cave. Thousands of pilgrims pass through Sonamarg, security is tight, and traffic may be held or timed. If you are not on the yatra, plan Sonamarg early in the day, check the day's traffic arrangements and keep extra time for the return to Srinagar."] },
      { h: "Sonamarg with children and elderly parents", p: ["The Sonamarg parking area and the riverside are easy for everyone. The walk to Thajiwas is uneven, with streams to cross, so children and elderly travellers usually take ponies. The altitude, about 2,800 m, is slightly higher than Gulmarg: keep the day gentle, drink water and carry warm layers, because the wind off the glacier is cold even in summer."] },
    ],
    faqs: [
      { q: "How far is Thajiwas Glacier from Sonamarg?", a: "About 3 km from the main parking, roughly an hour each way on foot or by pony." },
      { q: "When is Zero Point open?", a: "Usually from around May to November, when the road over Zojila is open. It is reached by Sonamarg union taxi." },
      { q: "Can I stop at Kheer Bhawani on the way to Sonamarg?", a: "Yes. It is a short detour near Ganderbal at Tulmulla, about 25 km from Srinagar." },
      { q: "Is there rafting near Sonamarg?", a: "Yes, on the Sindh near Kullan and Gund from about May to September." },
      { q: "How cold is Sonamarg in summer?", a: "Days are pleasant, but evenings and the glacier valley are cold. Carry a warm layer even in July." },
      { q: "Does the Amarnath Yatra affect Sonamarg trips?", a: "Yes, in July and August, when Baltal is a base camp. Expect security checks and timed traffic." },
    ],
  },
};
for (const p of KASHMIR_ROUTES) {
  const e = EXTRA_2[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_3: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "srinagar-to-gulmarg-taxi": {
    sections: [
      { h: "A short history of Gulmarg", p: ["By tradition, the meadow was once called Gaurimarg, after the goddess Gauri, and was renamed Gulmarg, the meadow of flowers, by the Kashmiri ruler Yusuf Shah Chak in the 16th century. The Mughal emperor Jahangir is said to have collected wild flowers here. Under British rule in the late 19th and early 20th centuries, Gulmarg became a summer retreat for officials escaping the heat of the plains, with hotels, a club, the golf course and St Mary's Church.", "After independence it grew into India's best-known ski destination, with the Indian Institute of Skiing and Mountaineering and, from the 1990s onwards, the Gondola, which made Apharwat's high slopes accessible to everyone. Today it draws skiers in winter, families and honeymooners in summer, and film crews in every season."] },
      { h: "Gulmarg in spring and autumn", p: ["Spring, from late March to May, is a beautiful and underrated time. The meadow thaws and turns green while Apharwat stays white, so you get both snow and flowers on the same day, and the Gondola queues are shorter than in winter or June. The road is clear and the drive quick. Nights are still cold, so carry a jacket.", "Autumn, from late September to November, brings golden light, clear skies and the best long-distance views of the year from Phase 2, including Nanga Parbat on very clear days. The meadow is brown and quiet, hotels offer lower rates, and the first snow can arrive in November. It is an excellent time for photographers and anyone who prefers calm over crowds."] },
      { h: "Skiing on a Gulmarg day trip", p: ["You do not need to stay in Gulmarg to try skiing. Ski schools and registered instructors near the Gondola base offer short beginner lessons on the gentle slopes of the meadow, with skis, boots and poles available for hire. An hour or two is enough to learn to stand, slide and stop. Book through your hotel or agent, or ask at the official counters, and confirm the instructor is registered.", "Intermediate and advanced skiers use the Gondola to reach Kongdoori and Apharwat, which offer some of the longest ski runs in Asia. Off-piste skiing on Apharwat is serious avalanche terrain and should only be done with a qualified local guide, proper avalanche equipment and an up-to-date snow report."] },
      { h: "Combining Gulmarg with Drung waterfall and Baba Reshi", p: ["Drung waterfall is a few kilometres off the Gulmarg road near Tangmarg and can be added on the way up or down. In January and February, in a hard winter, it freezes into ice columns and draws crowds; at other times it is a pretty stream in the forest. The road to Drung is narrow, so in peak winter weeks visit early.", "The shrine of Baba Reshi, a 15th century saint of the Reshi Sufi order of Kashmir, sits in the forest below Gulmarg and is visited by people of every faith, especially on Thursdays. Dress modestly and remove shoes before entering. Both stops together add one to two hours to the day."] },
      { h: "What a fair Srinagar to Gulmarg taxi quote includes", p: ["A clear quote names the vehicle model, the pickup point and the time, whether it is a same-day return or one-way, how many hours of waiting are included in Gulmarg, and whether tolls, parking or entry fees are included. In winter, it should state whether chains are carried or whether a switch to a 4x4 at Tangmarg is included.", "It does not normally include the Gondola, ponies, sledges, ATV rides or ski hire, which you pay for in Gulmarg. On a Kashmir package, the Gulmarg day is usually included with the car and driver for the whole trip, which is simpler and avoids negotiating each morning."] },
      { h: "Common mistakes on a Gulmarg day trip", p: ["Leaving Srinagar late and joining the Tangmarg traffic jam. Not booking the Gondola online in advance in peak season. Taking a sedan in deep winter and getting stuck at Tangmarg. Agreeing to a pony ride without fixing the route and price. Staying too late on a winter afternoon, when the road refreezes. Wearing city shoes in snow. Trying to fit Gulmarg and another hill station into the same day.", "Avoid these, and Gulmarg is one of the easiest and most rewarding days in Kashmir."] },
      { h: "Photography spots on the way and in Gulmarg", p: ["The pine forest hairpins above Tangmarg are beautiful in fresh snow, though stopping on the bends is unsafe; ask your driver to pause at a wider turn. In Gulmarg, the classic shots are St Mary's Church against the snow or the green meadow, the Maharani temple on its hillock, the Gondola cabins rising over the forest, and the view from Phase 2 across the Pir Panjal. Early morning and the hour before sunset give the softest light."] },
    ],
    faqs: [
      { q: "Can I ski in Gulmarg on a day trip from Srinagar?", a: "Yes. Beginners can take a short lesson with a registered instructor near the Gondola base and hire equipment there." },
      { q: "Is Drung waterfall on the way to Gulmarg?", a: "It is a short detour near Tangmarg. It freezes into ice formations in a hard winter, usually January and February." },
      { q: "Why is Gulmarg called Gulmarg?", a: "Gulmarg means meadow of flowers. By tradition it was renamed from Gaurimarg by Yusuf Shah Chak in the 16th century." },
    ],
  },
  "srinagar-to-pahalgam-taxi": {
    sections: [
      { h: "About Pahalgam and the Lidder valley", p: ["Pahalgam's name is usually explained as the village of shepherds, and for centuries it was a summer base for Gujjar and Bakarwal herders moving their flocks to the high pastures. It sits at the meeting point of the eastern Lidder, which flows from Sheshnag lake past Chandanwari, and the western Lidder, which flows from the Kolahoi glacier past Aru. The two streams join just below the town.", "The Mamaleshwar temple, one of the oldest stone temples in the valley, stands on the edge of town, and the valley is the traditional route of the Amarnath Yatra to the cave shrine. Today Pahalgam is a busy hill town of hotels and riverside walks, ringed by pine forests and meadows."] },
      { h: "What a fair Srinagar to Pahalgam taxi quote includes", p: ["A good quote names the vehicle model, whether it is a one-way drop, a return two days later or a car kept with you, the driver's night charges if he stays, and which stops are included. It should say clearly that Pahalgam's local sightseeing is by union taxi and is not covered by the Srinagar cab.", "Ask whether detours such as Martand Sun Temple or Achabal are included, and whether parking in Pahalgam is extra. On a package, the drive and the return are usually part of the car for the whole trip, and the union taxi rounds are paid locally."] },
      { h: "Common mistakes on the Pahalgam trip", p: ["Trying Pahalgam as a same-day return and spending six hours in the car. Expecting the Srinagar cab to drive to Aru and Betaab. Planning around Baisaran, which has been closed since April 2025. Arriving at the union taxi stand at noon in peak season and waiting in a long queue. Underestimating Amarnath Yatra traffic in July and August.", "Book one or two nights, start the valley rounds early, and keep the day of the drive light with only the stops you really want."] },
      { h: "Pahalgam in rain and cloud", p: ["Kashmir does not have a full monsoon, but July can bring afternoon showers and occasional heavy rain in Pahalgam, which raises the river and can close riverside paths or rafting for a day. Mornings are usually clearer. Carry a light rain jacket and waterproof shoes, and keep a flexible half day in your plan so a wet afternoon does not cost you Aru or Betaab."] },
      { h: "Photography in the Lidder valley", p: ["The best light in Pahalgam is early morning on the Lidder, when mist lifts off the river, and late afternoon in Betaab Valley, when the sun lights the meadow and the pines. Aru village, with its wooden houses and grazing horses, is beautiful in autumn. The saffron fields at Pampore are best photographed at dawn in late October and early November, when the flowers are open and farmers are picking."] },
      { h: "Pahalgam for groups and families", p: ["Groups travelling in a tempo traveller should note that the vehicle waits in Pahalgam while everyone takes union taxis to the valleys; book enough union cabs for the group at once. Hotels with family rooms and riverside lawns are common. For school or office groups, ask your agent to pre-arrange the union taxi round so you are not split across queues."] },
    ],
    faqs: [
      { q: "What does Pahalgam mean?", a: "It is usually explained as the village of shepherds, reflecting its history as a summer base for herders." },
      { q: "Is rain a problem in Pahalgam in July?", a: "There can be afternoon showers and occasional heavy rain. Mornings are usually clearer; keep a flexible half day." },
    ],
  },
  "srinagar-to-sonamarg-taxi": {
    sections: [
      { h: "About Sonamarg", p: ["Sonamarg means meadow of gold, a name often linked to the golden light on its meadows and peaks in spring and autumn. It sits in the upper Sindh valley at about 2,800 m, on the old trade route from Kashmir to Ladakh and Central Asia, and has long been the last stop before the climb to Zojila. Today it is a base for day trips, treks, the Amarnath Yatra's Baltal route and travellers heading to Ladakh."] },
      { h: "The Z-Morh tunnel and winter access", p: ["The Z-Morh tunnel, named after the zig-zag shape of the old road it replaces, is about 6.5 km long and opened in January 2025. It bypasses the avalanche-prone stretch between Gagangir and Sonamarg, which used to close the road for months each winter. As a result, Sonamarg is now reachable on most winter days, turning it into a snow day trip from Srinagar.", "The tunnel is part of a larger project that includes the Zojila tunnel, still under construction, which will eventually make the road to Ladakh usable through the winter. Until then, Zojila itself closes in winter. After heavy snowfall, the police can still restrict traffic to Sonamarg, so check the road status the evening before."] },
      { h: "What a fair Srinagar to Sonamarg taxi quote includes", p: ["The quote should name the vehicle, confirm it is a same-day return or a one-way drop, state the waiting time in Sonamarg and say whether parking is included. It does not cover union taxis to Zero Point, ponies to Thajiwas or rafting, which are paid locally. In winter, ask whether the car carries chains.", "If you are continuing to Ladakh, ask for a separate quote for the Srinagar to Kargil or Leh drive, because it is a two-day trip with night charges."] },
      { h: "Common mistakes on a Sonamarg trip", p: ["Leaving Srinagar late and reaching Thajiwas after the crowds. Expecting the Srinagar cab to go to Zero Point. Planning Zero Point in winter or spring before Zojila opens. Going without warm layers in summer. Planning a night in Sonamarg in winter without confirming the hotel is open. Not checking Amarnath Yatra traffic in July and August."] },
      { h: "Combining Sonamarg with Manasbal and Naranag", p: ["Manasbal lake, near Ganderbal, is an easy stop on the way back to Srinagar in the late afternoon, when the light is soft. Naranag, reached by a side road from Kangan through Wangath, has the ruins of an ancient temple complex in a forest setting and is the end point of the Great Lakes trek. Adding Naranag makes for a long day; it is better as a separate half day from Srinagar or a stop on the way to Sonamarg if you start at 7 am."] },
      { h: "Photography in Sonamarg", p: ["The best photographs come early: the river at Gund and Kullan in morning mist, the Thajiwas valley before the crowds, and the meadows across the Sindh lit by the low sun. In autumn, the birch and willow along the river turn yellow. In winter, the snowfields around the tunnel exit and the frozen streams near Thajiwas are striking."] },
    ],
    faqs: [
      { q: "What does Sonamarg mean?", a: "Meadow of gold, a name often linked to the golden light on its meadows and peaks." },
      { q: "When did the Z-Morh tunnel open?", a: "In January 2025. It keeps Sonamarg reachable on most winter days." },
      { q: "Is the Zojila tunnel open?", a: "Not yet. It is still under construction, so the road over Zojila to Ladakh closes in winter." },
    ],
  },
};
for (const p of KASHMIR_ROUTES) {
  const e = EXTRA_3[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_4: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "srinagar-to-gulmarg-taxi": {
    sections: [
      { h: "Gulmarg month by month", p: ["January: the heart of ski season, deep snow, frozen Drung, cold but bright days. February: the best snow cover for skiing, fewer crowds than late December. March: snow still thick on Apharwat, the meadow starts to thaw at the end of the month, spring skiing. April: melting snow on the meadow, green patches appearing, Gondola queues shorter. May: the meadow turns green, wildflowers begin, snow on Phase 2.", "June: peak summer season with families, school holidays and long Gondola queues. July: lush and green, occasional afternoon rain, treks to Alpather open. August: green and cool, quieter after the holidays. September: clear skies and the start of autumn colour. October: golden light and the clearest views. November: cold, quiet, first snowfalls. December: snow returns, ski schools open, Christmas and New Year crowds."] },
      { h: "Booking the Gondola step by step", p: ["Open the official JKCCC Gulmarg Gondola booking portal, not a third-party site or social media page. Choose your date, the phase (Phase 1 only, or Phase 1 and Phase 2), and an available time slot. Enter each traveller's name and ID details exactly as on the ID you will carry. Pay online and save the confirmation.", "On the day, reach the base station at least 30 minutes before your slot with the same IDs. If Phase 2 is closed because of weather, staff explain the options on the spot; refunds and rescheduling follow the corporation's rules. In peak weeks, book as soon as your Gulmarg date is fixed, because slots for the morning sell out first."] },
      { h: "If you want to stay overnight", p: ["If a day trip feels rushed, add a night in Gulmarg. Stay near the Gondola base if you want to be in the first cabins or ski, or on the meadow for evening walks and views. In winter, choose a hotel with central heating and power backup, and confirm that dinner is included, because few restaurants stay open late. Your Srinagar taxi can drop you and collect you the next day as two one-way transfers."] },
    ],
    faqs: [
      { q: "Where do I book Gulmarg Gondola tickets?", a: "On the official Jammu and Kashmir Cable Car Corporation portal. Avoid agents and social media pages selling tickets." },
      { q: "What happens if Phase 2 is closed on my Gondola day?", a: "Staff explain the options at the base station. Refunds or rescheduling follow the corporation's rules, and Phase 1 often still runs." },
    ],
  },
  "srinagar-to-pahalgam-taxi": {
    sections: [
      { h: "Hiring a union taxi in Pahalgam, step by step", p: ["Walk or ask your hotel to call a cab from the union stand in town. Check the displayed rate board and decide which points you want: Aru, Betaab, Chandanwari, or a combined round. Tell the dispatcher the number of people; union cabs are usually sedans or SUVs, so larger groups take two or more. Agree the waiting time at each point before you leave, and pay at the end of the trip.", "In July and August, some points can be closed or restricted on certain days because of Amarnath Yatra arrangements. The dispatcher will know, so ask before you plan the round."] },
      { h: "Treks from Aru: Lidderwat, Kolahoi and Tarsar", p: ["Aru is the starting point for some of Kashmir's best walks. Lidderwat, a meadow about 10 to 11 km up the western Lidder, is a long day hike or an easy overnight with camps and a rest house. From Lidderwat, the Kolahoi glacier trek continues up the valley to the foot of Kolahoi peak, and the Tarsar Marsar trek crosses to the twin alpine lakes of Tarsar and Marsar, usually over five to six days from July to September.", "Trek only with a registered operator or an experienced local guide, carry original ID for forest and police checkposts, and pack for cold nights even in summer."] },
      { h: "Shopping in Pahalgam", p: ["Pahalgam's main market sells woollen shawls, pherans, embroidered caps, dry fruit, walnut wood items and souvenirs. Prices are usually higher than in Srinagar, and quality varies, so for expensive items such as pashmina or carpets, buy from established shops or the Government Arts Emporium in Srinagar. Pampore on the way is the best place for saffron and dry fruit."] },
      { h: "The Amarnath Yatra and Pahalgam: what other travellers should know", p: ["The yatra usually runs for several weeks in July and August, ending around Raksha Bandhan. Pilgrims on the traditional route start from Nunwan base camp near Pahalgam and walk via Chandanwari, Sheshnag and Panchtarni to the cave. For non-pilgrims, this means heavy security, timed convoys on the Srinagar to Pahalgam road, restrictions at Chandanwari and busier hotels.", "You can still visit Pahalgam in these months; plan your drive early in the day, keep IDs ready and ask your hotel about any restrictions for the day you plan to visit Chandanwari."] },
    ],
    faqs: [
      { q: "How long is the trek from Aru to Lidderwat?", a: "About 10 to 11 km, a long day hike or an easy overnight with a guide." },
      { q: "Is Pahalgam a good place to buy pashmina?", a: "Prices and quality vary. For expensive pieces, buy from established shops or the Government Arts Emporium in Srinagar." },
    ],
  },
  "srinagar-to-sonamarg-taxi": {
    sections: [
      { h: "Sonamarg weather through the year", p: ["Sonamarg is cooler than Srinagar in every season. Summer days from June to August are pleasant, often in the high teens to low twenties Celsius, with cold nights and frequent afternoon clouds. Spring and autumn days are cool and crisp, and nights near freezing. Winter is properly cold, with heavy snow and temperatures well below freezing at night.", "Weather changes quickly near the glacier: a sunny morning can turn into rain or sleet by afternoon. Carry a waterproof layer, gloves and a cap in every season except high summer."] },
      { h: "Hiring ponies and union taxis in Sonamarg", p: ["Ponies for Thajiwas wait near the main parking. Rates are set by the local authority; agree the route (to the glacier and back), the waiting time and the total price before you start, and pay at the end. Union taxis for Zero Point and Baltal leave from the local stand. Check the rate board, agree the waiting time at Zero Point, and confirm the road is open that day. Groups usually need several cabs."] },
      { h: "Driving tips for the Sindh valley road", p: ["The road to Sonamarg is good for most of the way but narrow in places, with blind bends along the river and heavy traffic to Ladakh in summer. Army convoys have right of way; drivers pull over and wait. Do not stop on bends for photos, and avoid driving the stretch after dark, when trucks and convoys are most active. In winter, black ice forms in shaded sections near the tunnel and in the upper valley."] },
      { h: "Nature in the Sonamarg valley", p: ["The Sonamarg meadows bloom with wildflowers in early summer, and the birch and fir forests along the Sindh shelter birds such as Himalayan monal at higher altitudes, though sightings are rare. Shepherds bring their flocks up to the high pastures in summer, a common sight on the Thajiwas path. Keep to paths, do not disturb animals, and carry your waste back with you."] },
    ],
    faqs: [
      { q: "What is the temperature in Sonamarg in summer?", a: "Summer days are usually in the high teens to low twenties Celsius, with cold nights." },
      { q: "Are pony rates fixed in Sonamarg?", a: "Yes. Rates are set by the local authority; agree the route, waiting time and total before starting." },
    ],
  },
};
for (const p of KASHMIR_ROUTES) {
  const e = EXTRA_4[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_5: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "srinagar-to-gulmarg-taxi": {
    sections: [
      { h: "Gulmarg on a package or booked on the day", p: ["On a Kashmir package, the Gulmarg day is usually built in: the same car and driver take you from your Srinagar hotel and back, the timing is planned around your Gondola slot, and the winter switch to a 4x4 at Tangmarg is often arranged in advance. This is the easiest option for first-time visitors and families.", "Booking on the day works in summer, when cabs are plentiful at Srinagar taxi stands and through hotels. In peak winter weeks and around New Year, cars with chains or 4x4s are in short supply, so book at least a day ahead. Either way, confirm the vehicle model and the return time in writing."] },
      { h: "Is Gulmarg worth it?", p: ["For most visitors, yes. In winter it is the most reliable snow in Kashmir and one of the best ski areas in Asia. In summer it offers a high, cool meadow, the Gondola to nearly 4,000 m and easy walks. If you have limited time and must choose one hill station from Srinagar, Gulmarg is the usual pick for snow and the Gondola, Pahalgam for rivers and valleys, and Sonamarg for a glacier walk."] },
    ],
    faqs: [
      { q: "Should I book a Gulmarg taxi in advance in winter?", a: "Yes, at least a day ahead in peak weeks. Vehicles with chains or 4x4s are in short supply around Christmas and New Year." },
    ],
  },
  "srinagar-to-pahalgam-taxi": {
    sections: [
      { h: "Pahalgam on a package or booked on the day", p: ["Most Kashmir packages include the drive to Pahalgam with the trip's car and driver, two nights at a named hotel and the return to Srinagar or the airport. Union taxis for Aru, Betaab and Chandanwari are usually paid locally. If you book on the day, use a known taxi stand or your hotel, agree a one-way or return fare in writing, and confirm whether the driver stays overnight.", "For the return, a direct drive from Pahalgam to Srinagar airport takes about 3 hours; leave at least 5 to 6 hours before an evening flight to allow for traffic and the airport security gate."] },
      { h: "Is Pahalgam worth the drive?", p: ["Yes, if you give it time. The Lidder river, pine forests and three side valleys make Pahalgam the most varied hill town in Kashmir, and it suits families, honeymooners and walkers alike. It is less suited to a rushed day trip; with only one day, Gulmarg or Sonamarg is closer to Srinagar."] },
    ],
    faqs: [
      { q: "How long is Pahalgam to Srinagar airport?", a: "About 100 km, roughly 3 hours. Leave 5 to 6 hours before an evening flight." },
    ],
  },
  "srinagar-to-sonamarg-taxi": {
    sections: [
      { h: "Sonamarg on a package or booked on the day", p: ["A Kashmir package usually includes the Sonamarg day with the trip's car and driver, timed for an early start. Ponies, union taxis to Zero Point and rafting are paid locally. To book on the day, use a Srinagar taxi stand or your hotel, confirm a same-day return and the waiting time, and check the road status, especially in winter and during the Amarnath Yatra.", "If you are going on to Ladakh, book the Srinagar to Leh drive as a separate two-day transfer with a driver experienced on Zojila."] },
      { h: "Is Sonamarg worth it?", p: ["Yes, especially from May to October, when it offers the easiest glacier walk in Kashmir, snow at Thajiwas into early summer, rafting and the drive to Zero Point. In winter, the new tunnel makes it a good second snow day after Gulmarg. Skip it only if you have very little time and have already seen snow in Gulmarg."] },
    ],
    faqs: [
      { q: "Is Sonamarg better than Gulmarg?", a: "They are different. Sonamarg has a glacier valley and river; Gulmarg has the Gondola and skiing. Many visitors do both on separate days." },
    ],
  },
};
for (const p of KASHMIR_ROUTES) {
  const e = EXTRA_5[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_6: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "katra-to-srinagar-taxi-or-train": {
    sections: [
      { h: "The Udhampur Srinagar Baramulla Rail Link in brief", p: ["The train you take from Katra is the result of one of the hardest railway projects in the world: the Udhampur Srinagar Baramulla Rail Link, built over decades through the young, earthquake-prone Himalaya. The section from Katra to Banihal opened in 2025, joining the Kashmir valley line to the Indian rail network for the first time. It runs through dozens of tunnels and over bridges such as the Chenab bridge, the world's highest railway arch bridge, and the Anji Khad bridge, India's first cable-stayed railway bridge.", "For travellers, the result is a journey of about 3 hours that does not depend on the condition of the highway at Ramban and Banihal, which is often blocked by landslides or snow."] },
      { h: "Booking the Vande Bharat on IRCTC, step by step", p: ["Search on IRCTC from Shri Mata Vaishno Devi Katra (SVDK) to Srinagar (SINA) for your date. Choose the class, enter passenger details exactly as on their IDs, and pay. Seats open well ahead and sell quickly for peak months, Navratri and long weekends, so book as soon as your plans are fixed. If your train is waitlisted, keep a backup plan by road.", "Carry the same ID on the day. Station security at Katra screens all luggage; arrive at least 45 minutes before departure. Check current train numbers, timings and days on IRCTC, because schedules can change."] },
      { h: "The journey: what you see from the train", p: ["After Katra, the line climbs into the Reasi hills, crosses the Anji Khad and the Chenab on high bridges, and runs through long tunnels under the Pir Panjal. Between tunnels you get glimpses of deep gorges and terraced villages. After Banihal, a long tunnel brings the train out into the Kashmir valley at Qazigund, and the last hour runs across the flat valley floor past apple orchards and willow-lined fields to Srinagar's station at Nowgam."] },
      { h: "Taxi from Katra: the road route in detail", p: ["By road, Katra joins NH 44 near Udhampur and follows the Jammu to Srinagar highway: the 9 km Chenani-Nashri tunnel, the narrow Chenab gorge at Ramban, the Navyug tunnel at Banihal and the descent to Qazigund. The drive takes 6 to 8 hours, or longer after landslides. Traffic is sometimes one-way on alternate days, and closures are announced by the J&K traffic police.", "Choose the road if you want a Patnitop stop, have heavy luggage, travel in a large group with a tempo traveller, or could not get train tickets. Start by 6 am to cross Ramban in daylight."] },
      { h: "Arriving at Srinagar station", p: ["Srinagar station is at Nowgam on the southern edge of the city. Taxis and pre-booked drivers wait outside. Boulevard Road and Dal Lake are about 20 to 30 minutes away, Rajbagh and Lal Chowk a little less, and the airport about 30 minutes. Pahalgam is about 2.5 hours from the station, which makes it practical to go straight there if your train arrives in the morning."] },
      { h: "Katra to Srinagar for elderly pilgrims and families", p: ["The train is the easier choice for most elderly pilgrims: it is shorter, smoother and has toilets on board. Porters help with luggage at Katra, and taxis wait at Srinagar station. Families with toddlers also find the train easier than a full day on mountain roads. If someone in the group gets travel sick, the train is a better option than the winding highway."] },
      { h: "Planning Vaishno Devi and Kashmir together", p: ["A typical plan is: arrive in Katra, collect the yatra RFID card, do the yatra the next day, rest, and take a morning Vande Bharat to Srinagar on the third day. Then spend five or six days in Kashmir and fly home from Srinagar. Keep the darshan day free of onward travel, because queues at the Bhawan can be long, and book the train for the morning after, not the evening of, the yatra."] },
      { h: "Winter travel between Katra and Srinagar", p: ["From December to February, snow at Banihal and landslides at Ramban can close the highway for days. The train is built for these conditions and keeps running on most days, though weather can still delay it. If you travel in winter, book the train and keep a buffer day before any flight. Carry warm clothes in your hand luggage: Katra can be mild while Srinagar is below freezing."] },
    ],
    faqs: [
      { q: "What are the station codes for Katra and Srinagar?", a: "Shri Mata Vaishno Devi Katra is SVDK and Srinagar is SINA. Check current trains and timings on IRCTC." },
      { q: "Is the Katra to Srinagar train better in winter?", a: "Usually yes. It runs on most days when the highway at Banihal or Ramban is closed." },
      { q: "Which bridges does the train cross?", a: "The Chenab bridge, the world's highest railway arch bridge, and the Anji Khad cable-stayed bridge, among many others." },
      { q: "Can I go from Srinagar station straight to Pahalgam?", a: "Yes. Pahalgam is about 2.5 hours from the station at Nowgam." },
    ],
  },
  "srinagar-to-leh-taxi": {
    sections: [
      { h: "Zojila in detail", p: ["Zojila, at about 3,500 m, is the gateway between the Kashmir valley and Ladakh. The road climbs from Baltal near Sonamarg in steep loops cut into the mountainside, unpaved in parts, with sheer drops and, in early season, high walls of snow on both sides. It is maintained by the Border Roads Organisation and often run as one-way traffic at set hours, alternating between directions.", "Delays at Zojila are normal, from minutes to hours, depending on traffic, convoys and weather. Start from Sonamarg early in the morning to catch the first window, keep water and snacks in the car, and expect the landscape to change completely on the far side, from green forest to bare brown mountains."] },
      { h: "Drass and the Kargil War Memorial", p: ["Drass, often described as one of the coldest inhabited places in India, is the first town after Zojila. Just beyond it, the Kargil War Memorial, built by the Indian Army at the foot of Tololing, commemorates the soldiers who died in the 1999 Kargil conflict. It has a museum, the names of the fallen and views of the peaks where the fighting took place. Allow 45 minutes; it is one of the most moving stops on the road."] },
      { h: "Kargil: the night halt", p: ["Kargil, on the Suru river, is the second-largest town in Ladakh and the natural place to break the journey. It has hotels and guest houses in every range, restaurants, fuel and ATMs. If you have time, walk along the Suru, visit the Munshi Aziz Bhat museum of Central Asian trade goods, or drive a short way up the Suru valley. Kargil is also the starting point for the road to Zanskar via Rangdum and Pensi La."] },
      { h: "Kargil to Leh: the highlights", p: ["Mulbekh, about 40 km from Kargil, has a 9 metre Maitreya Buddha carved into a rock face beside the road. The road then crosses Namik La and Fotu La, the highest point on the route at about 4,100 m. Lamayuru, just below Fotu La, has one of Ladakh's oldest monasteries above a landscape of eroded clay hills known as the moonland.", "Beyond Lamayuru, the road drops to the Indus at Khaltse, follows the river past Nurla and Saspol, and reaches the confluence of the Indus and Zanskar at Nimmu. Alchi monastery, famous for its early wall paintings, is a short detour near Saspol. Magnetic Hill and Pathar Sahib gurdwara come just before Leh."] },
      { h: "Hour by hour: the two-day drive", p: ["Day 1. 6.00 am: leave Srinagar, or 7.00 am from Sonamarg. 8.30 am: Zojila crossing. 11.00 am: Drass and the war memorial. 1.30 pm: reach Kargil, lunch and rest, evening walk by the Suru. Day 2. 7.30 am: leave Kargil. 8.30 am: Mulbekh. 10.30 am: Fotu La and Lamayuru monastery. 1.00 pm: lunch near Khaltse. 2.30 pm: optional Alchi. 4.00 pm: Nimmu confluence and Magnetic Hill. 5.00 pm: reach Leh and rest."] },
      { h: "What a fair Srinagar to Leh taxi quote includes", p: ["The quote should state the vehicle model, the two-day schedule, the driver's night halt and allowance in Kargil, tolls, and whether the fare is one-way (the usual case) or includes the empty return. It should say clearly that Ladakh sightseeing is not included, because the Kashmir vehicle cannot operate locally in Ladakh. Ask whether a stop at Alchi or the Drass memorial is included."] },
      { h: "Fuel, food and phone signal", p: ["Fuel stations are found in Sonamarg, Drass, Kargil, Khaltse and Leh; fill up in Kargil for the second day. Dhabas along the way serve rajma, dal, rice, Maggi and tea, and Kargil has full restaurants. Mobile signal is patchy after Sonamarg, especially around Zojila and between Lamayuru and Khaltse; only postpaid connections from outside J&K and Ladakh work. Download offline maps before you leave."] },
      { h: "Who should take the Srinagar to Leh road", p: ["The road suits travellers who want to see the change from Kashmir to Ladakh, acclimatise gradually and combine both regions in one trip. It is less suited to people prone to severe motion sickness, as the Zojila section is rough, and to anyone with only three or four days for Ladakh, who may prefer to fly into Leh and rest."] },
    ],
    faqs: [
      { q: "Is Zojila dangerous?", a: "It is a rough high mountain road with steep drops and one-way traffic windows. With an experienced driver, daylight travel and patience at delays, thousands of vehicles cross it safely every day in season." },
      { q: "Where is the best place to stop overnight between Srinagar and Leh?", a: "Kargil, which has hotels, fuel and restaurants and splits the drive almost evenly." },
      { q: "What is the highest point on the Srinagar to Leh road?", a: "Fotu La, at about 4,100 m, between Kargil and Lamayuru." },
      { q: "Can I visit Alchi on the way to Leh?", a: "Yes. It is a short detour near Saspol on the Kargil to Leh stretch." },
    ],
  },
  "srinagar-to-gurez-taxi": {
    sections: [
      { h: "Stop by stop: Srinagar to Gurez", p: ["The road leaves Srinagar to the north through Ganderbal or Sumbal, runs along the shores of Wular lake, one of Asia's largest freshwater lakes, and reaches Bandipora, the last large town. Fill up with fuel and draw cash here. Beyond Bandipora the road climbs steeply through forest to Tragbal, with sweeping views back over Wular and the valley.", "From Tragbal, it continues up to Razdan Pass at about 3,300 m, the high point of the route, often lined with snow well into June. The descent on the far side drops into the Kishanganga valley and follows the river to Dawar, the main village of Gurez, with Habba Khatoon peak rising above it."] },
      { h: "Habba Khatoon peak and the story behind the name", p: ["The pyramid-shaped peak above Dawar is named after Habba Khatoon, the 16th century poet and queen of Kashmir, wife of Yusuf Shah Chak. Her songs of longing are still sung in Kashmir. Local tradition holds that she wandered these hills after her husband was exiled by the Mughals, and a spring at the foot of the peak bears her name. The peak is best seen in the evening light from the riverbank in Dawar."] },
      { h: "Tulail: the upper valley", p: ["Beyond Dawar, the road continues up the Kishanganga valley to Tulail, a string of villages in a wider, higher valley with meadows, fields of potatoes and peas and very few visitors. The drive takes about two hours each way on a rougher road. A few homestays and seasonal camps offer simple stays. Tulail is the most remote part of Gurez that visitors can usually reach."] },
      { h: "Life in Gurez", p: ["Gurez is home to the Dard-Shina people, who speak Shina, a language distinct from Kashmiri, and live in log-built houses designed for long, snowy winters. For several months each year, Razdan Pass closes and the valley is cut off by road. Summer is the season of farming, herding and repairs; families store food and fuel for the winter. Visitors are welcomed warmly but should respect privacy, dress modestly and ask before taking photographs."] },
      { h: "Where to stay in Gurez", p: ["Dawar has JKTDC tourist huts, small guest houses and homestays, and riverside camps run in summer. Tulail has a few homestays and camps. Expect simple rooms, shared or basic bathrooms in some places, home-cooked food and limited electricity. Book ahead for July and August, the busiest months, and carry warm clothes for the cold nights."] },
      { h: "A 3-night Gurez plan", p: ["Day 1: Srinagar to Dawar via Bandipora and Razdan Pass, with stops at Wular viewpoints and Tragbal. Evening by the Kishanganga. Day 2: Dawar villages, Habba Khatoon spring and riverside walks. Day 3: drive to Tulail for the upper valley, night in a homestay or camp. Day 4: return to Srinagar, leaving early to cross Razdan Pass by midday."] },
      { h: "What a fair Srinagar to Gurez taxi quote includes", p: ["Because Gurez is remote, most taxis are booked for the whole trip with the driver staying over. The quote should state the vehicle (an SUV is best), the number of days, the driver's night charges and food, local drives to Tulail, and fuel. Ask whether the driver has done the route recently and whether the vehicle carries a spare tyre and tools."] },
      { h: "Safety and rules near the Line of Control", p: ["Gurez lies close to the Line of Control and is guarded by the army. Follow all instructions at checkposts, carry your ID at all times, do not photograph army posts or installations, and do not walk off marked roads or paths towards restricted areas. Ask your host which walks are open. Travel only in daylight on Razdan Pass."] },
    ],
    faqs: [
      { q: "Who was Habba Khatoon?", a: "A 16th century poet and queen of Kashmir, wife of Yusuf Shah Chak. The peak above Dawar is named after her." },
      { q: "How far is Tulail from Dawar?", a: "About two hours each way on a rougher road up the Kishanganga valley." },
      { q: "Where should I stay in Gurez?", a: "In Dawar, at JKTDC huts, guest houses, homestays or summer camps, or in a Tulail homestay for the upper valley." },
      { q: "Is Razdan Pass open in June?", a: "It usually opens around late May or June after snow clearance. Check the latest status before you travel." },
    ],
  },
  "srinagar-to-doodhpathri-taxi": {
    sections: [
      { h: "About Doodhpathri", p: ["Doodhpathri, the valley of milk, is a wide alpine meadow at about 2,700 m in Budgam district, ringed by pine and fir forest. Its name comes from the Shaliganga stream, which runs white over the stones, and from a local legend that the Sufi saint Sheikh Noor-ud-Din Noorani struck the ground for water during prayer and milk flowed instead. Unlike Gulmarg, it has no cable car and very few buildings, which keeps it quiet and green."] },
      { h: "Stop by stop: the road from Srinagar", p: ["The road runs south-west from Srinagar to Budgam town, then through Khansahib, a busy market and the last place for fuel and cash. Beyond Khansahib it climbs through the Tangnar forest with apple orchards giving way to pines. The final stretch opens onto the meadow and the parking area. In spring, the forest edges are full of wildflowers; in autumn, the grass turns gold."] },
      { h: "Hour by hour: a Doodhpathri day", p: ["8.30 am: leave Srinagar. 10.00 am: reach Doodhpathri. 10.15 am to 12.30 pm: walk across the meadow to the Shaliganga stream and along its banks, or take a pony to the viewpoints. 12.30 pm: picnic or simple lunch at a stall. 1.30 to 3.30 pm: pony ride or walk to the far meadows towards Mujpathri. 4.00 pm: leave. 5.30 pm: back in Srinagar."] },
      { h: "Mujpathri, Palmaidan and the far meadows", p: ["Beyond the main meadow, ponies and walking paths lead to quieter pastures such as Mujpathri and Palmaidan, where shepherds graze their flocks in summer. These meadows are wider, emptier and more beautiful than the main area, and a pony ride there takes two to three hours. Agree the route and time before starting and carry water."] },
      { h: "Doodhpathri with children and elderly parents", p: ["The main meadow starts close to the parking and is mostly flat, which makes Doodhpathri one of the easiest outings in Kashmir for children and elderly travellers. The walk down to the Shaliganga is gentle. Ponies are available for longer distances. Facilities are basic, so carry snacks, water, a warm layer and anything children need."] },
      { h: "Doodhpathri in winter", p: ["In winter, the meadow lies under deep snow and the forest is beautiful, but access beyond Khansahib depends on snow clearance. On many days, cars can reach only part of the way, and 4x4 vehicles are needed. There are almost no facilities. If you want snow, Gulmarg is the more reliable choice; Doodhpathri in winter is for those who want silence and are ready to turn back if the road is closed."] },
      { h: "What a fair Srinagar to Doodhpathri taxi quote includes", p: ["The quote should name the vehicle, confirm a same-day return with five to six hours of waiting, and state whether parking or any local entry fee is included. Ponies are paid locally. In winter, ask whether the car is a 4x4 and what happens if the road is closed short of the meadow."] },
      { h: "Doodhpathri vs Gulmarg vs Yusmarg", p: ["Choose Doodhpathri for open meadows, a stream and quiet; Gulmarg for the Gondola, snow and skiing; Yusmarg for pine forest and the walk to Nilnag lake. Doodhpathri and Yusmarg are both under 50 km from Srinagar and less developed than Gulmarg, which is part of their appeal."] },
    ],
    faqs: [
      { q: "Why is Doodhpathri called the valley of milk?", a: "Because the Shaliganga stream runs white over the stones, and from a local legend about the saint Sheikh Noor-ud-Din Noorani." },
      { q: "Is there food in Doodhpathri?", a: "Only basic stalls and a few small eateries. Carry snacks and water." },
      { q: "How long should I spend in Doodhpathri?", a: "Four to six hours is enough for the meadow, the stream and a pony ride." },
      { q: "Can I reach Doodhpathri in winter?", a: "Sometimes, depending on snow clearance beyond Khansahib. A 4x4 is often needed." },
    ],
  },
  "srinagar-to-yusmarg-taxi": {
    sections: [
      { h: "About Yusmarg", p: ["Yusmarg is a meadow at about 2,400 m in Budgam district, surrounded by pine and fir forest and overlooked by the Pir Panjal range. Its name is linked by local tradition to Yus, Jesus, and Marg, meadow, though the origin is debated. The Doodh Ganga stream flows below the meadow, and Nilnag lake lies in the forest above. It was long a summer pasture for herders and has stayed quiet and lightly developed."] },
      { h: "Nilnag lake in detail", p: ["Nilnag is a small, deep blue forest lake about 4 km from the Yusmarg meadow. The path climbs gently through pine forest and opens onto the lake, surrounded by tall trees. Walking takes about 1.5 hours each way; ponies are available. The lake is calm and good for a picnic. In early summer the path can be muddy, so wear proper shoes."] },
      { h: "Sang-e-Safed, Tosa Maidan and longer walks", p: ["For fit walkers, Yusmarg is a base for longer hikes. Sang-e-Safed, a high meadow with views of snow peaks, and the wider pastures towards Tosa Maidan offer full-day walks with a local guide. These routes are used by shepherds in summer and have few facilities. Go only with a guide who knows the paths and the current conditions."] },
      { h: "Hour by hour: a Yusmarg day", p: ["8.30 am: leave Srinagar. 9.30 am: stop at Charar-e-Sharief. 10.30 am: reach Yusmarg. 11.00 am to 2.00 pm: walk or ride to Nilnag lake and back. 2.00 pm: lunch at the JKTDC restaurant or a dhaba. 3.00 pm: walk down to the Doodh Ganga. 4.00 pm: leave. 5.30 pm: back in Srinagar."] },
      { h: "Yusmarg with children and elderly parents", p: ["The meadow is gentle and the walk to the Doodh Ganga is short, which suits children and older travellers. Nilnag needs a 4 km walk each way through forest; ponies make it easy for those who cannot walk far. Facilities are limited to a few eateries and JKTDC huts, so carry what you need."] },
      { h: "What a fair Srinagar to Yusmarg taxi quote includes", p: ["The quote should name the vehicle, confirm a same-day return with five to six hours of waiting, include the Charar-e-Sharief stop, and state any parking or entry charges. Ponies and guides are paid locally. In winter, ask about road conditions and whether a 4x4 is needed."] },
      { h: "Yusmarg in winter", p: ["In winter Yusmarg is snowbound and very quiet. The road is often cleared to the meadow, but services are minimal and the forest paths to Nilnag are deep in snow. It is beautiful for a snow walk with your own food and warm clothes. Check access the evening before."] },
    ],
    faqs: [
      { q: "What does Yusmarg mean?", a: "Local tradition links it to Yus (Jesus) and Marg (meadow), though the origin is debated." },
      { q: "Can I swim in Nilnag lake?", a: "It is not recommended. The lake is deep and cold; enjoy it from the shore." },
      { q: "How long should I spend in Yusmarg?", a: "Five to six hours for the meadow, Nilnag lake and the Doodh Ganga." },
      { q: "Is Yusmarg good for a picnic?", a: "Yes. The meadow and Nilnag lake are popular picnic spots; carry your own food and take waste back." },
    ],
  },
  "jammu-to-srinagar-taxi": {
    sections: [
      { h: "Section by section: what the drive is like", p: ["The first stretch from Jammu to Udhampur is a fast four-lane road through the Shivalik foothills. After Udhampur, the Chenani-Nashri tunnel, also called the Dr Syama Prasad Mookerjee tunnel, takes you 9 km under the mountain, saving the old climb over Patnitop. On the far side, the road descends to Ramban in the narrow Chenab gorge, the slowest and most landslide-prone part of the route.", "Beyond Ramban, the road climbs to Banihal and enters the Navyug tunnel, about 8.5 km long, under the Pir Panjal range. You emerge at Qazigund, with the first view of the Kashmir valley, and the last 70 km to Srinagar are flat and fast through Anantnag, Awantipora and Pampore."] },
      { h: "Traffic advisories and one-way days", p: ["The J&K traffic police issue daily advisories for NH 44, especially in winter and the monsoon. On some days, traffic runs only in one direction, alternating between Jammu to Srinagar and Srinagar to Jammu, and heavy vehicles may be restricted. After landslides or snowfall, the road may close for hours or days. Check the advisory the evening before, through local news or your hotel, and keep a flexible plan."] },
      { h: "Hour by hour: a Jammu to Srinagar drive", p: ["6.00 am: leave Jammu. 7.30 am: Udhampur. 8.15 am: Chenani-Nashri tunnel, optional detour to Patnitop for breakfast. 10.00 am: Ramban, slow traffic in the gorge. 11.30 am: Banihal and the Navyug tunnel. 12.30 pm: lunch at Qazigund. 1.30 pm: Anantnag and Awantipora. 2.30 pm: Pampore. 3.00 pm: reach Srinagar, with time for a sunset shikara."] },
      { h: "Patnitop, Sanasar and Nathatop on the way", p: ["Patnitop, at about 2,000 m, is a pine-covered hill station a short detour from the tunnel exit. Nathatop, a little higher, has snow in winter, and Sanasar, a meadow with a small lake, offers paragliding and walks in summer. Adding Patnitop for breakfast adds about an hour; a night there splits the drive for families with elderly parents."] },
      { h: "Food on the Jammu highway", p: ["Dhabas along the highway serve rajma chawal, kadhi, dal, parathas and tea. Kud and Batote on the old Patnitop road are known for sweets such as patisa. Ramban and Banihal have roadside eateries, and Qazigund is a good lunch stop after the tunnel. Carry water and snacks in case of long delays in the gorge."] },
      { h: "Who should take the train instead", p: ["Travellers with limited time, those prone to motion sickness, and anyone travelling in winter or after heavy rain usually do better with a short taxi to Katra and the Vande Bharat to Srinagar. The train avoids the Ramban and Banihal sections entirely. Groups of 10 or more with lots of luggage, and families who want stops at Patnitop, often still prefer the road."] },
      { h: "What a fair Jammu to Srinagar taxi quote includes", p: ["The quote should name the vehicle, confirm a one-way drop with luggage, include tolls and the driver's allowance, and state any extra charge for a Patnitop detour or a night halt. Ask what happens if the highway closes on the day: some operators offer to wait, others to rebook."] },
    ],
    faqs: [
      { q: "How long is the Navyug tunnel?", a: "About 8.5 km, under the Pir Panjal near Banihal." },
      { q: "Is the Jammu to Srinagar road one-way on some days?", a: "Yes. The traffic police sometimes run one-way traffic on alternate days. Check the advisory." },
      { q: "What is the best time to leave Jammu for Srinagar?", a: "By 6 am, to cross the Ramban gorge in daylight and reach Srinagar by mid-afternoon." },
      { q: "Can I break the Jammu to Srinagar journey?", a: "Yes. Patnitop is the usual overnight stop for families." },
    ],
  },
};
for (const p of KASHMIR_ROUTES) {
  const e = EXTRA_6[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_7: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "katra-to-srinagar-taxi-or-train": {
    sections: [
      { h: "Train or taxi: a side-by-side comparison", p: ["Time: the train takes about 3 hours from Katra to Srinagar; the road takes 6 to 8 hours, sometimes much more after landslides. Reliability: the train runs through tunnels and is rarely affected by snow or rockfall; the highway closes several times each winter and monsoon. Comfort: the train is smooth, with reclining seats and toilets; the road is winding, especially through Ramban.", "Flexibility: a taxi leaves when you want, carries any luggage and can stop at Patnitop, Kud or Qazigund; the train runs to a timetable and has limited luggage space. Cost: for one or two people the train is usually cheaper; for a group of six or more, a single Innova or tempo traveller can come close per person. Sightseeing: the train crosses the Chenab and Anji Khad bridges; the road gives views of the Chenab gorge and the Banihal climb."] },
      { h: "Luggage and what you can carry on the train", p: ["Vande Bharat trains have overhead racks and a small space behind the last seats in each coach, so large suitcases can be awkward. Pack in medium bags where possible. Security at Katra screens all bags and may question sharp objects, gas canisters and some liquids. Coconuts and prasad from the yatra are generally fine if packed securely. Porters are available at both stations."] },
      { h: "Food on the Vande Bharat", p: ["Depending on the ticket and the option you choose on IRCTC, meals and snacks are served on board, with vegetarian options. Many pilgrims coming from Vaishno Devi prefer vegetarian meals; select this when booking. You can also carry your own sealed snacks and water."] },
      { h: "After Srinagar: getting to your hotel or houseboat", p: ["From Srinagar station at Nowgam, a taxi to Boulevard Road takes 20 to 30 minutes. If you are staying on a Dal Lake houseboat, the taxi drops you at a numbered ghat, where the houseboat's shikara collects you and your bags. Nigeen Lake is about 40 to 50 minutes from the station on the north side of the city. Share your train number with your hotel or package driver so they can track delays."] },
      { h: "Common mistakes on the Katra to Srinagar leg", p: ["Booking the train for the evening of the yatra day, when you are exhausted and queues may run late. Arriving at Katra station without enough time for security. Taking very large suitcases on the train. Planning a road transfer in deep winter without a backup. Forgetting that Srinagar station is on the south side of the city when planning the first day."] },
    ],
    faqs: [
      { q: "Is the train cheaper than a taxi from Katra to Srinagar?", a: "For one or two travellers, usually yes. For a group of six or more sharing a vehicle, a taxi can come close per person." },
      { q: "Are there porters at Katra and Srinagar stations?", a: "Yes, at both stations, which helps elderly pilgrims and families with luggage." },
      { q: "Can I carry prasad on the Vande Bharat?", a: "Generally yes, if it is packed securely. Security may question unusual items or liquids." },
    ],
  },
  "srinagar-to-leh-taxi": {
    sections: [
      { h: "Ladakh after you arrive in Leh", p: ["Once you reach Leh, plan at least one full rest day before going higher. Use it for gentle walks to Leh Palace, Shanti Stupa and the main bazaar, and to arrange inner line permits for Nubra, Pangong and other protected areas. A Leh-registered taxi or package vehicle then takes you over Khardung La to Nubra, and over Chang La to Pangong, before you fly home from Leh or drive on towards Manali."] },
      { h: "Srinagar to Leh by season", p: ["May and early June: snow walls on Zojila, cold nights in Kargil, and occasional delays as the road settles after opening. Late June to August: the main season, warm days in Ladakh and heavy traffic on the road, with Amarnath Yatra crowds near Sonamarg in July and August. September: clear skies, fewer vehicles and golden autumn colours in Ladakh. October and early November: cold, quiet and beautiful, with the risk of early snow on Zojila closing the road for the season."] },
      { h: "Srinagar to Leh for families and elderly travellers", p: ["The two-day road is gentler on the body than a direct flight to Leh, because altitude rises gradually. Still, the Zojila section is rough and long. For elderly travellers, break the journey in Kargil, keep the second day unhurried with short stops, and use a comfortable vehicle such as an Innova Crysta. Carry any medicines prescribed for altitude after checking with a doctor."] },
      { h: "Srinagar to Leh by bus or shared cab", p: ["J&K Road Transport Corporation and private buses run on the Srinagar to Kargil and Kargil to Leh sections in season, and shared cabs run between Srinagar, Kargil and Leh. They are cheaper but slower and more tiring, with early starts. Most visitors who are combining Kashmir and Ladakh prefer a private taxi for comfort and stops."] },
    ],
    faqs: [
      { q: "Is there a bus from Srinagar to Leh?", a: "Yes, in season, usually with a night in Kargil. Shared cabs also run. A private taxi is more comfortable and flexible." },
      { q: "When does the Srinagar to Leh road close for winter?", a: "Usually around November or December, when snow closes Zojila. The date varies each year." },
    ],
  },
  "srinagar-to-gurez-taxi": {
    sections: [
      { h: "Wular lake on the way", p: ["Wular, between Sopore and Bandipora, is one of the largest freshwater lakes in Asia, fed and drained by the Jhelum. Its size changes with the seasons, and its shores are lined with willow plantations and fishing villages. The road to Gurez runs along its eastern side and climbs above it at Tragbal, with sweeping views. The Wular viewpoint near Watlab, on the western side, has the shrine of Baba Shukur-ud-Din above the lake, worth a separate visit from Srinagar."] },
      { h: "Gurez by vehicle type", p: ["An SUV such as an Innova, Scorpio or Tavera handles the Razdan climb and the rough patches best, and has room for luggage and food supplies. Sedans manage in dry weather but struggle after rain. Tempo travellers run for groups in summer. The road to Tulail is rougher than the main road to Dawar, so a high-clearance vehicle is strongly advised for that stretch."] },
      { h: "Gurez with children and elderly parents", p: ["Families do visit Gurez, but the long, winding drive over Razdan Pass is tiring and the facilities are basic. Break the drive with stops at Tragbal, keep the first evening restful, and choose a homestay with warm rooms. Elderly travellers should check with a doctor about the altitude of the pass, about 3,300 m, although Dawar itself is lower, around 2,400 m."] },
    ],
    faqs: [
      { q: "Is Gurez suitable for families?", a: "Yes, with planning. The drive is long and facilities basic; choose a warm homestay and travel in summer." },
      { q: "What is the altitude of Dawar?", a: "Around 2,400 m. Razdan Pass, on the way, is about 3,300 m." },
    ],
  },
  "srinagar-to-doodhpathri-taxi": {
    sections: [
      { h: "Shared cabs and buses to Doodhpathri", p: ["Shared cabs run from Srinagar to Budgam and Khansahib, and in the summer season some continue to Doodhpathri or local taxis run the last stretch from Khansahib. This is the cheapest way to go, but timings are irregular and it is hard to return late in the day. For most visitors, a private taxi for a same-day return is far more practical."] },
      { h: "Safety and respect at the meadow", p: ["The Shaliganga stream is cold and fast in spring and early summer; do not wade into it or let children play in the current. Keep to the meadow and marked paths, carry your waste back, and avoid playing loud music: Doodhpathri is valued for its quiet. Shepherds and their dogs use the meadows in summer; keep a respectful distance from flocks."] },
      { h: "Doodhpathri by month", p: ["April: snow patches, cold mornings and the stream at full flow. May and June: green meadows and wildflowers, the best months. July and August: lush and cool, occasional rain. September and October: clear skies, golden grass and the best light for photos. November to March: snow, with access depending on clearance."] },
    ],
    faqs: [
      { q: "Is there a shared taxi to Doodhpathri?", a: "Shared cabs run to Budgam and Khansahib, with local taxis beyond in season. A private taxi is more practical for a day trip." },
      { q: "Is it safe to play in the Shaliganga stream?", a: "Not in spring and early summer, when it is cold and fast. Enjoy it from the banks." },
    ],
  },
  "srinagar-to-yusmarg-taxi": {
    sections: [
      { h: "Charar-e-Sharief in more detail", p: ["Charar-e-Sharief is one of the most important shrines in Kashmir, built over the grave of Sheikh Noor-ud-Din Noorani, known as Nund Rishi or Alamdar-e-Kashmir, the 14th and 15th century founder of the Reshi order and a poet whose verses are still quoted in daily Kashmiri speech. The wooden shrine was destroyed by fire in 1995 and rebuilt. Thursdays and the saint's annual urs draw large gatherings."] },
      { h: "Yusmarg by month", p: ["April: snow on the surrounding hills, a fresh green meadow and the stream running fast. May and June: the best months for Nilnag and the meadow walks. July and August: green and cool, occasional afternoon rain. September and October: clear and colourful, with autumn tones in the forest. November to March: snowbound and quiet, with few facilities open."] },
      { h: "Shared cabs and buses to Yusmarg", p: ["Shared cabs run from Srinagar to Charar-e-Sharief through the day, and some continue to Yusmarg in season. From Charar-e-Sharief, local taxis can take you up. It is cheaper but slower than a private taxi, and returns late in the day can be difficult."] },
    ],
    faqs: [
      { q: "Who is buried at Charar-e-Sharief?", a: "Sheikh Noor-ud-Din Noorani, known as Nund Rishi, founder of the Reshi Sufi order of Kashmir." },
      { q: "Is there a shared cab to Yusmarg?", a: "Shared cabs run to Charar-e-Sharief, with some continuing to Yusmarg in season." },
    ],
  },
  "jammu-to-srinagar-taxi": {
    sections: [
      { h: "Jammu to Srinagar by season", p: ["Spring (March to May): generally good, with occasional rain-related delays near Ramban. Summer (June to August): busy with tourists and, in July and August, Amarnath Yatra convoys; monsoon rain can bring landslides in the gorge. Autumn (September to November): the most reliable season, with dry roads and clear views. Winter (December to February): snow at Banihal and Qazigund can close the road; the Navyug tunnel helps, but approach roads still freeze."] },
      { h: "Safety on NH 44", p: ["The highway is busy with trucks, buses and army convoys. Travel in daylight, avoid overtaking on blind bends, and never stop under steep slopes in the Ramban stretch, where stones can fall. Choose an experienced driver who knows the route, and ask him to stop if anyone feels unwell rather than pushing on."] },
      { h: "Arriving from Jammu airport or Jammu Tawi station", p: ["Jammu airport and Jammu Tawi railway station are both a short drive from the start of the highway. If your flight or train arrives late, stay a night in Jammu and leave at dawn. Jammu has plenty of hotels near the station and on the bypass road, and the Raghunath temple and Bahu Fort are worth a quick visit in the evening."] },
    ],
    faqs: [
      { q: "Is the Jammu to Srinagar road safe at night?", a: "Driving after dark is not recommended, especially through the Ramban gorge. Travel in daylight." },
      { q: "How far is Jammu airport from the highway?", a: "A short drive. If you land late, stay in Jammu and leave at dawn." },
    ],
  },
};
for (const p of KASHMIR_ROUTES) {
  const e = EXTRA_7[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}
