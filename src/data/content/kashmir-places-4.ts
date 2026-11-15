// Kashmir place pages, batch 2 part 4 (2026-11-15): Aru and Betaab top-ups,
// Doodhpathri, Yusmarg and Gurez places. See kashmir-places-1.ts for the rules.

import type { GuideContent, MonthGuide } from "@/lib/locations";

type Climate = [string, string, string][];

const months = (climate: Climate, goodFor: string[]): MonthGuide[] =>
  climate.map(([month, tempC, weather], i) => ({ month, tempC, weather, goodFor: goodFor[i] }));

// Pahalgam side valleys (Aru about 2,400 m, Betaab about 2,400 m): typical
// day and night ranges, rounded.
const ARU_CLIMATE: Climate = [
  ["January", "Day -1 to 3°C, night -11 to -6°C", "Deep snow; the road from Pahalgam is often closed."],
  ["February", "Day 0 to 5°C, night -9 to -4°C", "Snow cover; access depends on road clearing."],
  ["March", "Day 5 to 10°C, night -4 to 0°C", "Thaw begins; snow on the meadow."],
  ["April", "Day 10 to 15°C, night 0 to 4°C", "Snow melts, river high; the road usually reopens."],
  ["May", "Day 15 to 19°C, night 3 to 6°C", "Fresh green meadows and snow on the peaks."],
  ["June", "Day 19 to 23°C, night 6 to 9°C", "Green, flowery and busy."],
  ["July", "Day 21 to 25°C, night 9 to 12°C", "Warmest month; afternoon showers."],
  ["August", "Day 20 to 24°C, night 9 to 12°C", "Green and lush; trekking season."],
  ["September", "Day 17 to 21°C, night 4 to 7°C", "Clear, settled weather; quieter."],
  ["October", "Day 12 to 16°C, night -1 to 3°C", "Golden meadows and cold nights."],
  ["November", "Day 6 to 10°C, night -5 to -1°C", "Cold; snow may close the road late in the month."],
  ["December", "Day 1 to 5°C, night -8 to -4°C", "Snow returns; winter access limited."],
];

// Doodhpathri (about 2,730 m) and Yusmarg (about 2,400 m) share the Pir Panjal
// foothill climate of Budgam district.
const BUDGAM_HILLS_CLIMATE: Climate = [
  ["January", "Day -1 to 4°C, night -10 to -5°C", "Deep snow; roads may close after heavy falls."],
  ["February", "Day 0 to 5°C, night -9 to -4°C", "Snowbound most years; quiet."],
  ["March", "Day 4 to 9°C, night -4 to 0°C", "Snow melting; muddy tracks."],
  ["April", "Day 9 to 14°C, night 0 to 3°C", "Snow patches and first green; the season opens."],
  ["May", "Day 14 to 18°C, night 3 to 6°C", "Green meadows, full streams and flowers."],
  ["June", "Day 18 to 22°C, night 6 to 9°C", "Peak season; long, pleasant days."],
  ["July", "Day 20 to 24°C, night 9 to 12°C", "Warm and green; afternoon showers."],
  ["August", "Day 19 to 23°C, night 9 to 12°C", "Lush meadows; showers."],
  ["September", "Day 16 to 20°C, night 4 to 7°C", "Clear skies and quieter meadows."],
  ["October", "Day 11 to 15°C, night -1 to 3°C", "Golden grass and crisp air."],
  ["November", "Day 5 to 9°C, night -5 to -1°C", "Cold; first snow possible."],
  ["December", "Day 0 to 5°C, night -8 to -4°C", "Snow and short days."],
];

// Gurez (about 2,400 m): long snowbound winters behind Razdan Pass.
const GUREZ_CLIMATE: Climate = [
  ["January", "Day -4 to 1°C, night -15 to -8°C", "Snowbound; Razdan Pass usually closed."],
  ["February", "Day -2 to 3°C, night -13 to -6°C", "Snowbound and isolated."],
  ["March", "Day 2 to 7°C, night -7 to -2°C", "Deep snow; the pass stays closed."],
  ["April", "Day 7 to 12°C, night -2 to 2°C", "Snow melting; the pass may reopen late in the month or in May."],
  ["May", "Day 13 to 17°C, night 2 to 5°C", "The season opens; snow on the peaks, river in flood."],
  ["June", "Day 18 to 22°C, night 6 to 9°C", "Green valley, wild flowers and long days."],
  ["July", "Day 21 to 25°C, night 10 to 13°C", "Warmest month; best for camping."],
  ["August", "Day 20 to 24°C, night 9 to 12°C", "Green and pleasant; occasional rain."],
  ["September", "Day 16 to 20°C, night 4 to 7°C", "Clear and golden; harvest in the villages."],
  ["October", "Day 11 to 15°C, night -1 to 3°C", "Autumn colours; cold nights; season ends."],
  ["November", "Day 4 to 8°C, night -6 to -2°C", "First heavy snow; the pass may close."],
  ["December", "Day -1 to 3°C, night -12 to -6°C", "Snowbound winter."],
];

export const KASHMIR_PLACES_4: Record<string, Partial<GuideContent>> = {
  "pahalgam/places-to-visit/aru-valley": {
    facts: [
      { label: "Height", value: "About 2,400 m" },
      { label: "Time needed", value: "Half a day; a full day with a walk towards Lidderwat" },
    ],
    months: months(ARU_CLIMATE, [
      "Snowbound; visit only if the road is open, with local advice.",
      "Snow scenes when the road is cleared; very cold.",
      "Snow on the meadow; quiet.",
      "Road usually reopens; snowmelt and high river.",
      "Fresh green meadow and snow peaks; very pretty.",
      "Best for families: green, flowery and warm in the sun.",
      "Herders' camps on the slopes; afternoon showers.",
      "Trekking season towards Lidderwat and Tarsar.",
      "Clear skies, fewer visitors, best for treks.",
      "Golden meadow and crisp air.",
      "Cold; the season winds down.",
      "Snow returns.",
    ]),
    routes: [
      { from: "Pahalgam", to: "Aru Valley", distanceKm: "about 12 km", time: "30 to 40 minutes", how: "Pahalgam union taxi up the West Lidder; outside cabs cannot go beyond Pahalgam." },
      { from: "Srinagar", to: "Aru Valley", distanceKm: "about 105 km", time: "3 to 3.5 hours", how: "Srinagar to Pahalgam by cab (about 95 km), then a union taxi." },
      { from: "Aru Valley", to: "Lidderwat", distanceKm: "about 11 km on foot", time: "4 to 5 hours one way", how: "Trail up the West Lidder through forest and meadows; go with a registered guide." },
    ],
  },
  "pahalgam/places-to-visit/betaab-valley": {
    facts: [
      { label: "Height", value: "About 2,400 m" },
      { label: "Time needed", value: "1 to 2 hours" },
    ],
    months: months(ARU_CLIMATE, [
      "Snow on the valley floor; access depends on the road.",
      "Snow scenes, very cold, quiet.",
      "Snow melting; road clearing.",
      "Reopens with snowmelt; the river runs high.",
      "Green valley floor, snow on the peaks; ideal.",
      "Busy summer season; go early.",
      "Lush and green; Amarnath traffic on the road.",
      "Green; check yatra traffic before going.",
      "Clear, quiet and beautiful.",
      "Autumn colours on the birches and willows.",
      "Cold; fewer stalls open.",
      "Snow returns.",
    ]),
    routes: [
      { from: "Pahalgam", to: "Betaab Valley", distanceKm: "about 7 km", time: "15 to 20 minutes", how: "Pahalgam union taxi up the East Lidder; often combined with Chandanwari." },
      { from: "Betaab Valley", to: "Chandanwari", distanceKm: "about 9 km", time: "20 to 30 minutes", how: "Continue up the East Lidder on the same union taxi round." },
      { from: "Srinagar", to: "Betaab Valley", distanceKm: "about 100 km", time: "3 to 3.5 hours", how: "To Pahalgam by cab, then a union taxi." },
    ],
  },
  "doodhpathri/places-to-visit/doodhpathri-meadows": {
    facts: [
      { label: "Height", value: "About 2,730 m" },
      { label: "Distance from Srinagar", value: "About 42 km, 1.5 to 2 hours by road via Budgam" },
      { label: "Known for", value: "Open meadows, pine forest, the Shaliganga stream, pony rides" },
      { label: "Best months", value: "May to October" },
      { label: "Time needed", value: "A full day trip from Srinagar" },
    ],
    blocks: [
      {
        heading: "What are the Doodhpathri meadows?",
        body: "Doodhpathri is a high meadow in the Budgam district, south-west of Srinagar, in the foothills of the Pir Panjal. The name means valley of milk, explained by the frothing white water of the Shaliganga stream and by a local legend about the Sufi saint Sheikh Noor-ud-Din Noorani. The meadows are wide, rolling grasslands at about 2,730 m, ringed by pine and fir forest, with the stream running through them and snowy peaks beyond. Compared with Gulmarg and Pahalgam, Doodhpathri is quieter and less built-up, which is exactly why it has become a favourite day trip for visitors who have already seen the main resorts.",
      },
      {
        heading: "How to reach the meadows",
        body: "Doodhpathri is about 42 km from Srinagar, usually one and a half to two hours by road via Budgam and Khansahib, the last part climbing through forest. Your Srinagar cab can drive to the parking area near the meadows. From there, the meadows open up immediately, and ponies, authorised by the local union, take visitors across them to viewpoints and further meadows; rates are fixed and usually displayed. You can also walk; the main meadow and the stream are close to the parking.",
      },
      {
        heading: "Things to do",
        body: "Walk across the meadows and along the Shaliganga stream, where flat grassy banks are perfect for a picnic. Ride a pony to the upper meadows and viewpoints. Sit at a tea stall with kahwa and look at the forest and peaks. Photograph the stream, the wooden huts and the herders' flocks in summer. Children can run safely on the open grass. There is little in the way of organised activities, and that is the appeal: a slow day in open mountain country.",
      },
      {
        heading: "Doodhpathri tips",
        body: "Leave Srinagar early to have a full day. Carry a picnic or plan to eat at the simple stalls near the parking. Wear walking shoes and a light jacket, as the weather turns quickly. Keep away from the edge of the stream, which is cold and fast. Agree pony rates before setting off. Carry cash and expect weak mobile signal. Take all litter back with you, since the meadows have few bins. In winter, check road conditions; heavy snow can close the road.",
      },
      {
        heading: "Is Doodhpathri worth visiting?",
        body: "Yes, especially on a trip of five days or more, or for travellers who want a quieter alternative to Gulmarg and Pahalgam. It is a simple, beautiful place for a long day outdoors. If your trip is short and this would be your only meadow, Gulmarg or Pahalgam may give you more to do.",
      },
      {
        heading: "Where to stay and eat",
        body: "Most visitors see Doodhpathri on a day trip and stay in Srinagar. For a night in the meadows, there are a few government tourist huts and simple guest houses near the road head; book ahead and expect basic facilities, cold nights and limited power. Food is limited to tea stalls and small eateries serving noon chai, kahwa, Maggi, rice and simple Kashmiri dishes in season. Carry a packed lunch from Srinagar if you prefer, and water.",
      },
    ],
    months: months(BUDGAM_HILLS_CLIMATE, [
      "Snow-covered; the road may close after heavy snow.",
      "Snowbound most years.",
      "Melting snow and muddy meadows.",
      "Snow patches and the first green; the season opens.",
      "Fresh green meadows and a full stream; excellent.",
      "Peak season for families and picnics.",
      "Green and warm; afternoon showers.",
      "Lush meadows; herders' flocks on the slopes.",
      "Clear skies and quieter meadows.",
      "Golden grass and cold evenings.",
      "Cold; first snow possible.",
      "Snow and short days.",
    ]),
    routes: [
      { from: "Srinagar", to: "Doodhpathri", distanceKm: "about 42 km", time: "1.5 to 2 hours", how: "Via Budgam and Khansahib, climbing through forest to the parking near the meadows." },
      { from: "Srinagar Airport", to: "Doodhpathri", distanceKm: "about 40 km", time: "1.5 to 2 hours", how: "Via Budgam; the airport is on the same side of Srinagar." },
      { from: "Doodhpathri", to: "Yusmarg", distanceKm: "about 40 to 50 km by road", time: "1.5 to 2 hours", how: "Back down through Budgam district; the two are rarely combined in one day." },
    ],
    faqs: [
      { q: "How far is Doodhpathri from Srinagar?", a: "About 42 km, 1.5 to 2 hours by road via Budgam and Khansahib." },
      { q: "What does Doodhpathri mean?", a: "Valley of milk, from the white, frothing water of the Shaliganga and a local legend linked to Sheikh Noor-ud-Din Noorani." },
      { q: "Can my Srinagar cab go to Doodhpathri?", a: "Yes, to the parking near the meadows. Ponies from the local union take visitors further across the meadows." },
      { q: "Is Doodhpathri better than Gulmarg?", a: "It is quieter and less developed, with open meadows and forest. Gulmarg has the gondola, snow and more facilities." },
      { q: "When is the best time to visit Doodhpathri?", a: "May to October, with June and September among the best months." },
      { q: "Is there snow at Doodhpathri?", a: "From about December to March or April. In summer it is green." },
      { q: "Are there hotels at Doodhpathri?", a: "There are a few simple huts and guest houses, including government huts, but most visitors come on a day trip from Srinagar." },
      { q: "Is Doodhpathri safe for children?", a: "Yes, with supervision near the stream, which is cold and fast." },
    ],
  },
  "doodhpathri/places-to-visit/shaliganga-river": {
    facts: [
      { label: "Where", value: "Flows through the Doodhpathri meadows" },
      { label: "Known for", value: "White, frothing water over rocks, picnic banks" },
      { label: "Best months", value: "May to October" },
      { label: "Time needed", value: "1 to 2 hours on the banks" },
    ],
    blocks: [
      {
        heading: "What is the Shaliganga?",
        body: "The Shaliganga is the mountain stream that runs through the meadows of Doodhpathri. Fed by snowmelt from the Pir Panjal, it tumbles over rocks in a white froth that gives Doodhpathri, the valley of milk, its name. Its flat, grassy banks, shaded in places by pine trees, are where most visitors spend their time: picnicking, dipping their hands in the ice-cold water, taking photographs and watching the herders' sheep and horses graze nearby.",
      },
      {
        heading: "Visiting the Shaliganga",
        body: "From the Doodhpathri parking, the stream is a short walk across the meadow. Ponies can take you to quieter stretches further upstream. The best time is late morning, after the dew has dried and before afternoon clouds. Bring a picnic or buy tea and snacks at the stalls; there are no restaurants on the banks. In May and June, the stream is full and loud with snowmelt; by September, it is lower and clearer.",
      },
      {
        heading: "Safety by the stream",
        body: "The water is very cold and fast, especially in spring and early summer. Do not let children paddle unsupervised, and do not cross on rocks, which are slippery. Photographs on boulders in the stream have led to accidents; keep to the bank.",
      },
      {
        heading: "Keeping the Shaliganga clean",
        body: "As Doodhpathri has grown more popular, litter on the banks has become a problem. Carry all your rubbish back to Srinagar, do not wash dishes or use soap in the stream, and avoid single-use plastic. The stream supplies water to villages below.",
      },
      {
        heading: "A Doodhpathri day plan",
        body: "Leave Srinagar at 8 am and drive through Budgam to Doodhpathri, about 1.5 to 2 hours. Walk across the main meadow to the Shaliganga and spend the late morning on its banks. After a picnic lunch, ride a pony to the upper meadows for the views, or walk upstream to quieter stretches. Have tea at a stall before leaving around 3.30 to 4 pm, to be back in Srinagar by evening. In spring and autumn, take a warm layer, since the afternoon wind off the snow peaks is cold.",
      },
      {
        heading: "Photographing the stream",
        body: "The Shaliganga is at its most photogenic where it froths over boulders with the forest behind. Morning light is softest; on bright afternoons, look for shaded stretches under the pines. A slow shutter on a steady rock turns the water to silk, but stay off the boulders in the stream itself. Herders' flocks crossing the meadow add life to wider shots.",
      },
    ],
    months: months(BUDGAM_HILLS_CLIMATE, [
      "Frozen edges and snow on the banks; access depends on the road.",
      "Snowbound.",
      "Thawing; the stream begins to rise.",
      "Snowmelt; full, frothing water.",
      "Full stream and green banks; ideal for picnics.",
      "Busy picnic season; warm afternoons.",
      "Green and warm; showers possible.",
      "Lush banks and steady flow.",
      "Clear, quieter water; pleasant days.",
      "Low water and golden banks.",
      "Cold; few visitors.",
      "Snow on the banks.",
    ]),
    faqs: [
      { q: "Where is the Shaliganga river?", a: "It flows through the Doodhpathri meadows in Budgam district, about 42 km from Srinagar." },
      { q: "Why is the water white at Shaliganga?", a: "It froths over rocks as it rushes down from the snows of the Pir Panjal, which gives Doodhpathri, the valley of milk, its name." },
      { q: "Can you swim in the Shaliganga?", a: "No. The water is ice-cold and fast. Stay on the banks." },
      { q: "When is the Shaliganga at its best?", a: "May and June for full flow, September for clear water and quieter banks." },
      { q: "Can you picnic by the Shaliganga?", a: "Yes, the grassy banks are made for it. Take all your rubbish back with you." },
      { q: "How far is the Shaliganga from the Doodhpathri parking?", a: "A short walk across the meadow; ponies go to quieter stretches upstream." },
      { q: "Are there food stalls near the Shaliganga?", a: "Simple tea and snack stalls near the parking in season. There are no restaurants on the banks." },
      { q: "Is the Shaliganga safe for children?", a: "Yes on the banks with supervision. Keep children out of the water and off the rocks." },
    ],
  },
  "yusmarg/places-to-visit/nilnag-lake": {
    facts: [
      { label: "Distance", value: "About 4 km from the Yusmarg meadow" },
      { label: "How to reach", value: "Walk or pony ride through forest, about an hour each way on foot" },
      { label: "Known for", value: "Blue-green forest lake below the Pir Panjal" },
      { label: "Best months", value: "May to October" },
    ],
    blocks: [
      {
        heading: "What is Nilnag Lake?",
        body: "Nilnag is a small, blue-green lake hidden in the forest above Yusmarg, in Budgam district. Its name means blue spring or blue lake, and on a still morning its water reflects the surrounding pines and the peaks of the Pir Panjal. It is the main short excursion from the Yusmarg meadow and a favourite with families and walkers who want a quiet forest walk rather than a big mountain trek.",
      },
      {
        heading: "How to reach Nilnag Lake",
        body: "Yusmarg is about 47 km from Srinagar, one and a half to two hours by road through Budgam and past Charar-e-Sharif, the shrine of Kashmir's patron saint Sheikh Noor-ud-Din Noorani. From the Yusmarg meadow, a forest track leads about 4 km to Nilnag. Walkers take about an hour each way at an easy pace; ponies from the authorised union stand take less. Agree pony rates in advance. The track is rocky and muddy after rain, so wear proper shoes.",
      },
      {
        heading: "When to go and what to expect",
        body: "May to October is the season, with June and September the most pleasant months. Snow covers the track from about December to March. At the lake, there is little more than the water, the forest and a few herders' huts in summer: sit, picnic and enjoy the quiet. Carry water and snacks, as stalls are few. Do not swim; the water is cold, and parts of the lake are deep.",
      },
      {
        heading: "Yusmarg and the Nilnag walk in one day",
        body: "Leave Srinagar by 8 am, stop briefly at Charar-e-Sharif if you wish, and reach Yusmarg around 10. Walk or ride to Nilnag, spend an hour at the lake and return for a late lunch at Yusmarg. In the afternoon, walk down to the Doodh Ganga stream below the meadow. Leave by 4 pm to reach Srinagar before dark.",
      },
      {
        heading: "Where to stay and eat at Yusmarg",
        body: "Yusmarg has government tourist huts and a few simple guest houses near the meadow, which suit travellers who want a quiet night in the forest. Most visitors come on a day trip from Srinagar. Food is simple: tea stalls and small eateries near the meadow serve kahwa, Maggi, rice and basic Kashmiri dishes in season. Carry water and snacks for the walk to Nilnag, as there is little on the way.",
      },
      {
        heading: "Charar-e-Sharif on the way",
        body: "The road to Yusmarg passes Charar-e-Sharif, the shrine of Sheikh Noor-ud-Din Noorani, known as Nund Rishi, Kashmir's patron saint, revered by Muslims and Hindus alike. The present shrine was rebuilt after a fire in 1995. Visitors who stop should dress modestly and remove shoes in the prayer areas. A short stop adds about half an hour to the journey.",
      },
    ],
    months: months(BUDGAM_HILLS_CLIMATE, [
      "Snow on the track; not advised.",
      "Snowbound.",
      "Melting snow and mud; not ideal.",
      "Track opening; snow patches in the forest.",
      "Fresh green forest and full lake; very pretty.",
      "Best month for the walk and picnics.",
      "Green and warm; showers.",
      "Lush forest; muddy after rain.",
      "Clear and calm; great reflections.",
      "Golden light and crisp air.",
      "Cold; few visitors.",
      "Snow returns.",
    ]),
    faqs: [
      { q: "How far is Nilnag Lake from Yusmarg?", a: "About 4 km, an hour's walk each way or a shorter pony ride." },
      { q: "Can you drive to Nilnag Lake?", a: "No. It is reached on foot or by pony from Yusmarg." },
      { q: "When is the best time to visit Nilnag?", a: "May to October, especially June and September." },
      { q: "Is the walk to Nilnag difficult?", a: "It is an easy to moderate forest walk on a rocky track, fine for most healthy visitors." },
      { q: "Can you swim in Nilnag Lake?", a: "No. The water is cold and parts of the lake are deep." },
      { q: "How far is Yusmarg from Srinagar?", a: "About 47 km, 1.5 to 2 hours by road via Budgam and Charar-e-Sharif." },
      { q: "What does Nilnag mean?", a: "Blue spring or blue lake, after its blue-green water." },
      { q: "Is Nilnag good for children?", a: "Yes, on a pony with an adult or for older children on foot, with supervision at the water." },
    ],
  },
  "yusmarg/places-to-visit/doodh-ganga": {
    facts: [
      { label: "Where", value: "Flows below the Yusmarg meadow" },
      { label: "Known for", value: "White, foaming water over boulders" },
      { label: "Best months", value: "May to October" },
      { label: "Time needed", value: "1 hour" },
    ],
    blocks: [
      {
        heading: "What is the Doodh Ganga?",
        body: "The Doodh Ganga, milk river, is the mountain stream that flows past Yusmarg, named for the white foam it makes as it rushes over boulders from the snows of the Pir Panjal. Below the meadow, a short walk downhill brings you to its rocky banks, where the water is loud and fast in spring and early summer. The river continues down through Budgam district towards Srinagar, where it joins the Jhelum system.",
      },
      {
        heading: "Visiting the Doodh Ganga",
        body: "From the Yusmarg meadow, a path leads down through the forest to the river in 15 to 20 minutes; ponies are available for those who prefer to ride. The banks are good for photographs and a rest, but the rocks are slippery and the water is ice-cold. Combine a visit with the walk to Nilnag Lake for a full day at Yusmarg.",
      },
      {
        heading: "Yusmarg: the meadow of Jesus",
        body: "Yusmarg is often translated as the meadow of Jesus, after a local legend that Jesus passed through the valley. Whatever its origin, it is a broad, gently sloping meadow at about 2,400 m, ringed by pine and fir forest, with views towards the Tatakuti and Sunset peaks of the Pir Panjal. It has a few government huts and simple guest houses and is visited mostly on day trips from Srinagar.",
      },
      {
        heading: "Safety and care",
        body: "Do not enter the water, and keep children back from the banks. Wear shoes with grip. Carry litter back with you, since the river supplies water to villages downstream.",
      },
      {
        heading: "Things to do at Yusmarg",
        body: "Walk across the meadow and into the surrounding forest of pine and fir. Take a pony to Nilnag Lake, about 4 km away, or further towards the high pastures for views of the Pir Panjal. Walk down to the Doodh Ganga. Have a picnic on the grass and enjoy how few people there are compared with Gulmarg and Pahalgam. Fit trekkers can go further with local guides towards the high meadows and lakes of the range, which needs proper planning.",
      },
      {
        heading: "How to reach Yusmarg",
        body: "Yusmarg is about 47 km south-west of Srinagar, usually one and a half to two hours by road through Budgam and past Charar-e-Sharif. Your Srinagar cab can drive to the meadow. The last part of the road climbs through forest and can be affected by snow from December to March. There is no public transport worth relying on for tourists, so plan it as a day trip by cab.",
      },
    ],
    months: months(BUDGAM_HILLS_CLIMATE, [
      "Snow on the banks; access depends on the road.",
      "Snowbound.",
      "Thaw begins; rising water.",
      "Snowmelt; fast, foaming river.",
      "Full river and green forest.",
      "Busy season; pleasant days.",
      "Warm; showers possible.",
      "Lush and green.",
      "Clear water and quiet banks.",
      "Low water and autumn colours.",
      "Cold; few visitors.",
      "Snow returns.",
    ]),
    faqs: [
      { q: "Where is the Doodh Ganga?", a: "It flows below the Yusmarg meadow in Budgam district, about 47 km from Srinagar." },
      { q: "Why is it called Doodh Ganga?", a: "Milk river, after the white foam it makes rushing over boulders." },
      { q: "How do you reach the Doodh Ganga from Yusmarg?", a: "A 15 to 20 minute walk downhill through the forest, or by pony." },
      { q: "Can you swim in the Doodh Ganga?", a: "No. It is cold and fast. Stay on the banks." },
      { q: "When is the best time to see the Doodh Ganga?", a: "May to June for full flow, September for calm, clear water." },
      { q: "What does Yusmarg mean?", a: "It is often translated as the meadow of Jesus, after a local legend." },
      { q: "Can I see Nilnag and the Doodh Ganga in one day?", a: "Yes, both are easy excursions from the Yusmarg meadow." },
      { q: "Is Yusmarg a day trip from Srinagar?", a: "Yes, about 1.5 to 2 hours each way by road." },
    ],
  },
  "gurez/places-to-visit/dawar": {
    facts: [
      { label: "Height", value: "About 2,400 m" },
      { label: "Distance from Srinagar", value: "About 125 km via Bandipora and Razdan Pass, 5 to 6 hours" },
      { label: "Known for", value: "Log houses, Habba Khatoon peak, the Kishanganga, Dard-Shin culture" },
      { label: "Open", value: "Usually May to October, when Razdan Pass is open" },
      { label: "ID", value: "Carry ID for registration at checkpoints" },
    ],
    blocks: [
      {
        heading: "What is Dawar?",
        body: "Dawar is the main village and administrative centre of the Gurez valley, close to the Line of Control in Bandipora district. It sits on the Kishanganga river below the pyramid-shaped Habba Khatoon peak, with traditional log and timber houses, a small market, government offices and most of the valley's homestays and guest houses. For visitors, Dawar is the base for exploring Gurez: walks along the river, visits to nearby villages and the drive on to Tulail valley.",
      },
      {
        heading: "How to reach Dawar",
        body: "From Srinagar, the road runs north to Bandipora on the shore of Wular Lake, then climbs over Razdan Pass, at about 3,300 m, and descends into the Gurez valley. The trip is about 125 km and usually takes five to six hours, longer with stops. The road is open roughly from May to October or November; snow closes Razdan Pass in winter. Carry ID: there are army and police checkpoints where visitors register. Check current rules for foreign nationals before planning.",
      },
      {
        heading: "Things to do in and around Dawar",
        body: "Walk along the Kishanganga and photograph Habba Khatoon peak, especially at sunrise. Visit the spring at the foot of the peak, named after the poet queen. Explore the old log houses and the village lanes. Drive to nearby villages such as Badwan and Wanpora, and on to Tulail valley for more remote scenery. Stay in a homestay to taste local food and learn about the Dard-Shin people of Gurez, who speak Shina and have their own traditions distinct from the Kashmir valley.",
      },
      {
        heading: "Where to stay",
        body: "Dawar and the nearby villages have homestays, guest houses, a few small hotels and seasonal camps by the river. Facilities are simple: hot water may be by bucket, and power and mobile signal can be unreliable. Book ahead in June and July. A stay of two nights gives time to see the valley without rushing.",
      },
      {
        heading: "Is Dawar worth the journey?",
        body: "Yes, for travellers who want a remote, unspoilt Kashmir valley and do not mind a long drive and simple stays. Gurez is one of the most beautiful and least visited parts of Kashmir. Plan at least two nights, travel in summer and carry ID.",
      },
      {
        heading: "The people of Gurez",
        body: "Gurez is home to the Dard-Shin people, who speak Shina, a language different from Kashmiri, and have their own music, dress and customs. Their timber and log houses, built to survive heavy snow, are among the most distinctive in Jammu and Kashmir. Life in the valley follows the seasons: in the long winter, when snow cuts Gurez off for months, families live on stored food and fuel; in summer, they farm, graze animals in the high pastures and host visitors. Staying in a homestay is the best way to understand this life.",
      },
      {
        heading: "Food in Gurez",
        body: "Homestays serve simple, filling food: rice, dal, local greens, potatoes, eggs, and meat dishes on request, often with butter tea or kahwa. Trout from the Kishanganga is sometimes available. There are few restaurants in Dawar, mostly small eateries near the market. Carry snacks for the long drive, as options are limited between Bandipora and Gurez.",
      },
    ],
    months: months(GUREZ_CLIMATE, [
      "Snowbound; Razdan Pass closed.",
      "Snowbound.",
      "Snowbound.",
      "Pass may reopen late in the month or in May.",
      "Season opens; snow on the peaks, river in flood.",
      "Green valley and wild flowers; ideal.",
      "Warmest month; best for camping by the river.",
      "Green and pleasant.",
      "Clear skies and harvest season.",
      "Autumn colours; cold nights; season ends.",
      "Pass may close after the first heavy snow.",
      "Snowbound winter.",
    ]),
    routes: [
      { from: "Srinagar", to: "Dawar (Gurez)", distanceKm: "about 125 km", time: "5 to 6 hours", how: "Via Bandipora and Razdan Pass; open roughly May to October; ID needed at checkpoints." },
      { from: "Bandipora", to: "Dawar", distanceKm: "about 85 km", time: "3.5 to 4.5 hours", how: "Over Razdan Pass, about 3,300 m, on a mountain road." },
      { from: "Dawar", to: "Tulail valley", distanceKm: "about 30 to 40 km", time: "1.5 to 2 hours", how: "Upstream along the Kishanganga; check current access rules." },
    ],
    faqs: [
      { q: "Where is Dawar?", a: "In the Gurez valley of Bandipora district, close to the Line of Control, about 125 km north of Srinagar." },
      { q: "How do you reach Dawar from Srinagar?", a: "By road via Bandipora and Razdan Pass, about 5 to 6 hours, open roughly May to October." },
      { q: "Do you need a permit for Gurez?", a: "Indian visitors carry ID and register at checkpoints. Foreign nationals should check the current rules before travelling." },
      { q: "Where to stay in Dawar?", a: "Homestays, guest houses, small hotels and seasonal riverside camps. Facilities are simple; book ahead in summer." },
      { q: "What is Habba Khatoon peak?", a: "The pyramid-shaped mountain above Dawar, named after the 16th-century Kashmiri poet queen Habba Khatoon." },
      { q: "When is the best time to visit Dawar?", a: "June to September, when Razdan Pass is open and the valley is green." },
      { q: "Is there mobile network in Gurez?", a: "Some networks work in Dawar, but coverage is patchy. Expect limited connectivity." },
      { q: "How many days do I need for Gurez?", a: "At least two nights, plus travel time, to see Dawar, the river and Tulail without rushing." },
    ],
  },
  "gurez/places-to-visit/habba-khatoon-peak": {
    facts: [
      { label: "Where", value: "Above Dawar, Gurez valley" },
      { label: "Shape", value: "A striking pyramid-shaped peak" },
      { label: "Named after", value: "Habba Khatoon, 16th-century Kashmiri poet and queen" },
      { label: "Best views", value: "From Dawar and the Kishanganga banks, at sunrise and sunset" },
    ],
    blocks: [
      {
        heading: "Who was Habba Khatoon?",
        body: "Habba Khatoon, born Zoon, was a sixteenth-century Kashmiri poet and the wife of Yusuf Shah Chak, the last independent ruler of Kashmir before the Mughal conquest. After Akbar's forces took Yusuf Shah away in the 1580s, she is said to have wandered the valleys, singing songs of love and separation that are still sung in Kashmir today. She is known as the Nightingale of Kashmir. Local tradition in Gurez holds that she spent time in this valley, and the peak and a spring at its foot bear her name.",
      },
      {
        heading: "Seeing the peak",
        body: "The peak dominates the view from Dawar, rising above the village in an almost perfect pyramid. The best light is at sunrise, when the first sun turns its slopes gold, and late in the afternoon. The banks of the Kishanganga near Dawar and the road just outside the village give the classic views. Climbing the peak is not a tourist activity; it lies in a sensitive border area.",
      },
      {
        heading: "The Habba Khatoon spring",
        body: "At the foot of the peak, a spring known as the Habba Khatoon chashma is a short walk from Dawar. Visitors stop to drink its cold water and enjoy the view of the peak above. Ask locally for the path, and respect any restrictions in the area.",
      },
      {
        heading: "Visiting Gurez for the peak",
        body: "Gurez is open roughly from May to October, when Razdan Pass is clear. Stay at least two nights in Dawar to catch the peak in good light, since clouds can hide it for hours. Carry ID for registration at checkpoints, and expect simple homestays and limited connectivity.",
      },
      {
        heading: "Habba Khatoon's songs",
        body: "Habba Khatoon's songs, written in Kashmiri, are among the earliest lyric poetry in the language. She wrote of longing, separation and the beauty of the valley, in a simple and personal voice that was new at the time. Her songs are still sung at weddings and on the radio in Kashmir, and she remains one of the best-loved figures in Kashmiri culture. Visitors who hear a Kashmiri folk singer in Srinagar or Gurez may well be hearing her words.",
      },
      {
        heading: "Photographing the peak",
        body: "The classic image is the peak at sunrise, glowing above the log houses of Dawar and reflected in the Kishanganga on a still morning. Find a spot on the riverbank the evening before, and be ready about 20 minutes before sunrise. Clear days are most common in September. Respect security rules and do not photograph army installations in the valley.",
      },
    ],
    months: months(GUREZ_CLIMATE, [
      "Snowbound; the valley is cut off.",
      "Snowbound.",
      "Snowbound.",
      "The valley opens late in the month or in May.",
      "Snow on the peak; dramatic views.",
      "Green valley below a snow-streaked peak.",
      "Clear mornings for sunrise views.",
      "Green; clouds some afternoons.",
      "Clear skies; best light of the year.",
      "Golden autumn below the peak.",
      "First snow on the peak.",
      "Snowbound.",
    ]),
    faqs: [
      { q: "Why is it called Habba Khatoon peak?", a: "After the 16th-century poet queen Habba Khatoon, who is believed to have spent time in Gurez." },
      { q: "Can you climb Habba Khatoon peak?", a: "No, it is not a tourist climb, and it lies in a sensitive border area. Visitors enjoy it from Dawar." },
      { q: "Where is the best view of Habba Khatoon peak?", a: "From Dawar and the Kishanganga banks nearby, at sunrise or late afternoon." },
      { q: "Is there a spring named after Habba Khatoon?", a: "Yes, a spring at the foot of the peak, a short walk from Dawar." },
      { q: "Who was Habba Khatoon?", a: "A Kashmiri poet and queen, wife of Yusuf Shah Chak, known as the Nightingale of Kashmir." },
      { q: "When can I see Habba Khatoon peak?", a: "May to October, when Gurez is reachable over Razdan Pass." },
      { q: "How far is Habba Khatoon peak from Srinagar?", a: "It rises above Dawar, about 125 km from Srinagar by road." },
      { q: "Is Gurez safe to visit?", a: "Yes, for tourists following the rules: carry ID, register at checkpoints and respect restricted areas." },
    ],
  },
  "gurez/places-to-visit/kishanganga-river": {
    facts: [
      { label: "Where", value: "Flows through the Gurez valley past Dawar" },
      { label: "Beyond the LoC", value: "Continues as the Neelum river" },
      { label: "Known for", value: "Turquoise water, riverside camps, trout" },
      { label: "Best months", value: "June to September" },
    ],
    blocks: [
      {
        heading: "What is the Kishanganga?",
        body: "The Kishanganga is the river of Gurez. It rises in the mountains to the east, flows west through the Tulail and Gurez valleys past Dawar, and then crosses the Line of Control, where it is known as the Neelum. In Gurez, its clear, often turquoise water runs between pine-clad slopes and stony beaches, with log villages on its banks. The Kishanganga hydroelectric project has a dam on the river in Gurez, from where water is carried by tunnel towards the Wular Lake area to generate power.",
      },
      {
        heading: "Things to do by the river",
        body: "Walk along the banks near Dawar and Badwan. Stay at a riverside camp in summer and listen to the river at night. Photograph Habba Khatoon peak rising above the water. Fish for trout with a licence from the Fisheries Department. Drive upstream towards Tulail for quieter stretches of the valley.",
      },
      {
        heading: "Safety",
        body: "The river is cold and fast, especially from May to July with snowmelt. Do not swim or wade, keep children back, and avoid slippery rocks. Respect security restrictions near the Line of Control; do not walk downstream towards the border area or photograph security installations.",
      },
      {
        heading: "Camping by the Kishanganga",
        body: "Riverside camps near Dawar operate from about June to September, with tents, simple meals and campfires. They are the most memorable way to stay in Gurez. Nights are cold even in July, so check that bedding is warm. Book through a known operator, and confirm toilet and washing facilities.",
      },
      {
        heading: "Tulail valley upstream",
        body: "Upstream from Dawar, the Kishanganga runs through the Tulail valley, an even more remote part of Gurez with scattered villages, broad meadows and high peaks. A day trip by vehicle from Dawar takes in the river scenery, traditional houses and herders' summer camps. Check current access rules and road conditions before going, carry ID, and start early; the road is rough in places.",
      },
      {
        heading: "Planning a Gurez trip around the river",
        body: "Plan two or three nights in Gurez: one day for Dawar, the river and Habba Khatoon peak; one for Tulail; and a spare day for weather. Travel between June and September, carry ID and enough cash, since ATMs are limited, and expect patchy mobile signal. Pack warm clothes even in summer, as nights by the river are cold.",
      },
    ],
    months: months(GUREZ_CLIMATE, [
      "Snowbound valley; the river partly frozen.",
      "Snowbound.",
      "Snowbound.",
      "Valley opens; river rising with snowmelt.",
      "High, fast water; spectacular.",
      "Camps open; green banks.",
      "Best camping month.",
      "Pleasant; occasional rain.",
      "Clear water and golden banks.",
      "Cold nights; camps close.",
      "First snow.",
      "Snowbound.",
    ]),
    faqs: [
      { q: "Where does the Kishanganga flow?", a: "Through the Tulail and Gurez valleys past Dawar, then across the Line of Control, where it is called the Neelum." },
      { q: "Can you camp by the Kishanganga?", a: "Yes, at riverside camps near Dawar from about June to September." },
      { q: "Is it safe to swim in the Kishanganga?", a: "No. It is cold and fast. Stay on the banks." },
      { q: "Can you fish in the Kishanganga?", a: "Trout fishing needs a licence from the Fisheries Department." },
      { q: "When is the best time to see the Kishanganga?", a: "June to September, when Gurez is open and the camps run." },
      { q: "What is the Kishanganga called in Pakistan-administered Kashmir?", a: "The Neelum river." },
      { q: "Is there a dam on the Kishanganga in Gurez?", a: "Yes. The Kishanganga hydroelectric project has a dam in Gurez and carries water by tunnel towards the Wular Lake area." },
      { q: "How far is the Kishanganga from Srinagar?", a: "It flows past Dawar, about 125 km from Srinagar by road via Razdan Pass." },
    ],
  },
};
