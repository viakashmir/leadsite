// Kashmir place pages, batch 2 part 3 (2026-11-15): Pahalgam and Sonamarg
// places. See kashmir-places-1.ts for the rules. Union taxi, pony and sledge
// rates are fixed locally and change; never typed here.

import type { GuideContent, MonthGuide } from "@/lib/locations";

// Pahalgam (about 2,200 m) and Sonamarg (about 2,740 m) by month: typical day
// and night ranges, rounded.
const PAHALGAM_CLIMATE: [string, string, string][] = [
  ["January", "Day 1 to 5°C, night -9 to -4°C", "Snow on the ground and frozen streams; side valleys closed, the town quiet."],
  ["February", "Day 3 to 7°C, night -7 to -2°C", "Still wintry, with snow spells and bright, cold days."],
  ["March", "Day 8 to 12°C, night -2 to 2°C", "Thaw begins; snow lingers in the side valleys."],
  ["April", "Day 13 to 17°C, night 2 to 5°C", "Spring: the Lidder runs high and side valleys open as snow clears."],
  ["May", "Day 18 to 22°C, night 5 to 8°C", "Green meadows and full rivers; the busy season starts."],
  ["June", "Day 22 to 26°C, night 8 to 11°C", "Warm days, cool nights and peak summer crowds."],
  ["July", "Day 24 to 27°C, night 12 to 14°C", "Warmest month; the Amarnath Yatra passes through, and afternoon showers are common."],
  ["August", "Day 23 to 26°C, night 11 to 14°C", "Green and lush; yatra traffic until mid to late August."],
  ["September", "Day 20 to 24°C, night 6 to 9°C", "Clear, settled weather and fewer visitors."],
  ["October", "Day 15 to 19°C, night 1 to 4°C", "Crisp, golden autumn; cold nights."],
  ["November", "Day 9 to 13°C, night -3 to 0°C", "Cold and quiet; side valleys start to close after snow."],
  ["December", "Day 3 to 7°C, night -6 to -3°C", "Winter sets in; snow on the town in most years."],
];

const SONAMARG_CLIMATE: [string, string, string][] = [
  ["January", "Day -3 to 1°C, night -13 to -8°C", "Deep snow; Sonamarg can now be reached in winter through the Z-Morh tunnel, but beyond it the valley is snowbound."],
  ["February", "Day -2 to 2°C, night -11 to -7°C", "Snow cover and extreme cold; winter sports when the road is open."],
  ["March", "Day 2 to 7°C, night -6 to -2°C", "Snow still deep; days lengthen."],
  ["April", "Day 7 to 12°C, night -2 to 2°C", "Snow melts from the meadow; the glacier area is still white."],
  ["May", "Day 12 to 16°C, night 2 to 5°C", "Snow at Thajiwas and Zojila, green below; Zojila usually reopens."],
  ["June", "Day 16 to 20°C, night 5 to 8°C", "Peak season: snow on the glacier, green meadow, busy with day visitors."],
  ["July", "Day 18 to 22°C, night 8 to 11°C", "Warmest month; Baltal busy with Amarnath pilgrims, trekking season starts."],
  ["August", "Day 17 to 21°C, night 7 to 10°C", "Trekking season for the Great Lakes; showers possible."],
  ["September", "Day 14 to 18°C, night 3 to 6°C", "Clear skies, autumn colour starts; excellent for treks."],
  ["October", "Day 9 to 14°C, night -1 to 3°C", "Cold and golden; the season winds down."],
  ["November", "Day 3 to 8°C, night -5 to -1°C", "First heavy snow; Zojila may close."],
  ["December", "Day -1 to 3°C, night -10 to -6°C", "Snowbound; quiet winter visits."],
];

const months = (climate: [string, string, string][], goodFor: string[]): MonthGuide[] =>
  climate.map(([month, tempC, weather], i) => ({ month, tempC, weather, goodFor: goodFor[i] }));

export const KASHMIR_PLACES_3: Record<string, Partial<GuideContent>> = {
  "pahalgam/places-to-visit/chandanwari": {
    facts: [
      { label: "Distance from Pahalgam", value: "About 16 km, 40 to 50 minutes by union taxi" },
      { label: "Height", value: "About 2,900 m" },
      { label: "Known for", value: "Snow bridge, snow into summer, start of the Amarnath Yatra from Pahalgam" },
      { label: "Open to visitors", value: "Usually from about April or May, when the road is cleared, until the first heavy snow" },
      { label: "Transport", value: "Pahalgam union taxi only; outside cabs not allowed beyond Pahalgam" },
      { label: "Time needed", value: "Half a day, or a full day with Aru and Betaab" },
    ],
    blocks: [
      {
        heading: "What is Chandanwari?",
        body: "Chandanwari is a high valley about 16 km above Pahalgam, at the end of the road up the East Lidder. It is the snowiest of Pahalgam's three side valleys, with snow lying in the stream bed and on the slopes well into summer, and it is best known for its snow bridge, a thick layer of compacted snow over the Sheshnag stream that visitors walk on in spring and early summer.\n\nChandanwari is also the starting point of the traditional Amarnath Yatra route from Pahalgam. Pilgrims set off from here on foot or pony towards Pissu Top, Sheshnag Lake and Panchtarni on the way to the Amarnath cave. Outside the yatra season, it is a popular half-day trip for families who want to touch snow in May or June without going to Gulmarg.",
      },
      {
        heading: "How to reach Chandanwari",
        body: "Chandanwari is reached only from Pahalgam. Cabs and private cars from Srinagar or elsewhere are not allowed to run sightseeing trips beyond Pahalgam town, so visitors hire a local union taxi from the stand near the Pahalgam market. Rates for Chandanwari, and for rounds that combine it with Aru Valley and Betaab Valley, are fixed by the union and usually displayed at the stand. The drive takes 40 to 50 minutes along the East Lidder, climbing past Betaab Valley and through pine forest. Keep the taxi slip, agree how long the driver will wait, and note that the road can be narrow and busy in peak season.",
      },
      {
        heading: "When is the best time to visit Chandanwari?",
        body: "Late April to June is the classic season: the road is open, snow still covers the stream and slopes, and the snow bridge is usually walkable. July and August are dominated by the Amarnath Yatra, which starts at Chandanwari; during the yatra, access for ordinary tourists can be restricted, security is tight and the road is crowded with pilgrims and convoys, so check before planning a visit. September and October are quieter, with less snow but clear skies and autumn colour along the Lidder.\n\nFrom about November to March or April, snow closes the road beyond Pahalgam, and Chandanwari is out of reach for normal visitors. The exact opening date depends on the winter's snowfall and when the road is cleared.",
      },
      {
        heading: "The snow bridge at Chandanwari",
        body: "The snow bridge forms where avalanches and winter snowfall pile up in the narrow valley and pack into a thick, hard layer over the Sheshnag stream. In spring, the stream cuts a tunnel beneath it, and the snow above becomes a natural bridge that people walk across. It is a striking sight, with the water roaring under the snow and the forested slopes around. The bridge melts and thins through summer and can become unsafe; follow the guidance of local authorities and guides, do not walk on it if it looks thin or cracked, and keep children off the edges.",
      },
      {
        heading: "Things to do at Chandanwari",
        body: "Walk on the snow and, when it is safe, the snow bridge. Take a sledge ride with one of the local sledge pullers, who offer rides down the snow slopes; agree the rate and the distance first. Have tea and Maggi at the stalls near the road head. Take photographs of the valley, the river and the snow. In early summer, walk a little way up the yatra track for views back down the valley. There is not much more to do, and that is the point: Chandanwari is a place to play in the snow and enjoy the mountain air.",
      },
      {
        heading: "Chandanwari and the Amarnath Yatra",
        body: "The Amarnath Yatra, the annual pilgrimage to the ice lingam in the Amarnath cave, usually runs from late June or early July to August. The traditional route from Pahalgam starts at Chandanwari, then climbs to Pissu Top, Sheshnag Lake, Mahagunus Pass and Panchtarni before reaching the cave, a walk of several days. The shorter northern route starts at Baltal, near Sonamarg. During the yatra, Chandanwari becomes a base camp with tents, langars and medical camps, and registration with the Shri Amarnathji Shrine Board is required for pilgrims. Tourist visits may be restricted or limited in this period, so check the current rules if your trip falls in July or August.",
      },
      {
        heading: "A union taxi round: Aru, Betaab and Chandanwari",
        body: "Most visitors see Pahalgam's three side valleys in one day using a union taxi round. A common plan starts with Aru Valley in the morning, about 12 km up the West Lidder, returns to Pahalgam and then goes up the East Lidder to Betaab Valley and on to Chandanwari for the afternoon. Another option is Betaab and Chandanwari together in half a day and Aru on a separate half day. Agree the full round, the waiting time at each valley and the total fare at the stand, and keep the receipt.",
      },
      {
        heading: "What to wear and carry",
        body: "Even in June, Chandanwari is cold, especially near the snow. Wear warm layers, a jacket and shoes with grip or rented snow boots, which are available near the road head in spring. Carry sunglasses, sunscreen, water and a snack, and some cash for tea, sledges and tips. The snow can be wet, so a change of socks helps children. Mobile signal is weak.",
      },
      {
        heading: "Chandanwari with children and older travellers",
        body: "Children love the snow and the sledges; keep them away from the stream, the edges of the snow bridge and any steep slopes. Older travellers can enjoy the valley from the road head and the stalls without walking far, though the snow is slippery. The altitude, around 2,900 m, is higher than Pahalgam, so anyone with heart or breathing problems should take it slowly.",
      },
      {
        heading: "Safety at Chandanwari",
        body: "The stream is cold and fast, and the snow over it can collapse as it thins. Stay on paths the locals use and away from the water's edge. Do not go beyond the road head into the mountains without a guide and the necessary permissions. Weather changes quickly; head down if it starts to rain or snow. Follow instructions from the police and security forces, who are present in the area, especially around the yatra season.",
      },
      {
        heading: "Chandanwari, Aru or Betaab: which is best?",
        body: "Chandanwari has the most snow and the snow bridge, and suits families who want snow in late spring and summer. Aru Valley is the most open and green, with a village, meadows and trails, and suits walkers and those who want space. Betaab Valley is the most landscaped and photogenic, with a park, river and pine forest, and is the easiest stop. If you have time for only one, choose Chandanwari in April to June for snow and Aru at other times. Most visitors see all three on one union taxi round.",
      },
      {
        heading: "The drive up from Pahalgam",
        body: "The road to Chandanwari follows the East Lidder upstream from Pahalgam, past riverside camps and pine forest, and passes the turn for Betaab Valley after about 7 km. Beyond Betaab, the valley narrows, the forest closes in and snow appears on the slopes in spring. The drive itself is one of the prettiest in the Pahalgam area, with the river beside you all the way; ask your union taxi driver to stop at a safe viewpoint for photographs.",
      },
      {
        heading: "Food and facilities at Chandanwari",
        body: "In the visitor season, stalls near the road head sell tea, kahwa, Maggi, omelettes and snacks, and rent out snow boots and coats. Toilets are basic. There are no hotels for tourists at Chandanwari outside the yatra camp, so visitors return to Pahalgam the same day. Carry cash, as card payments are not usually accepted, and mobile signal is weak.",
      },
      {
        heading: "Common mistakes at Chandanwari",
        body: "Planning a Chandanwari visit in winter, when the road is closed, or in July and August without checking yatra restrictions. Not agreeing sledge prices in advance. Walking on the snow bridge late in the season when it has thinned. Going in thin shoes and getting wet feet in the snow. Arriving in the afternoon, when the valley clouds over. Plan for April to June or September, go in the morning and dress for snow.",
      },
      {
        heading: "Where to stay for Chandanwari",
        body: "Stay in Pahalgam, which has hotels and guest houses from budget to luxury along the Lidder and around the market. Riverside rooms are the most popular. From Pahalgam, Chandanwari is an easy half-day or part of a full-day union taxi round. Staying two nights in Pahalgam gives time for Chandanwari, Aru and Betaab without rushing, plus a walk or pony ride to Baisaran.",
      },
      {
        heading: "A two-night Pahalgam plan that includes Chandanwari",
        body: "Day 1: drive from Srinagar to Pahalgam in the morning, about two and a half to three hours via the saffron fields of Pampore, the Avantipora temple ruins and Anantnag. Check in, have lunch by the Lidder and spend the afternoon walking along the river or riding a pony to Baisaran meadow, if it is open to visitors. Day 2: take a union taxi round after breakfast, starting with Aru Valley in the morning, then Betaab Valley around midday and Chandanwari in the afternoon, or reverse the order in spring to reach Chandanwari's snow while it is firm in the morning. Spend the evening in Pahalgam. Day 3: a slow morning by the river, then drive back to Srinagar or on to your next stop.\n\nWith only one night, do Betaab and Chandanwari together in the afternoon of the arrival day if you reach Pahalgam early, and Aru the next morning before leaving.",
      },
      {
        heading: "Chandanwari in September and October",
        body: "After the Amarnath Yatra ends in August, Chandanwari becomes quiet again. The snow has mostly melted from the valley floor by now, though the high slopes and peaks above may carry fresh snow by October. The Lidder runs clear and lower, the birches and willows along the river turn yellow, and the air is crisp and cold in the shade. It is a good time for photographers and for travellers who prefer quiet places. Sledges and snow rentals stop, and some stalls close, so carry water and snacks. Check that the road is open late in the season, as an early snowfall can close it for a few days.",
      },
      {
        heading: "How Chandanwari got its name",
        body: "Chandanwari is usually translated as the valley or garden of sandalwood, chandan in Sanskrit and Hindi. There is no sandalwood forest here, and the name is linked to the valley's sacred place on the route to the Amarnath cave, where pilgrims have walked for centuries. In the yatra season, the valley is filled with saffron flags, tents and the chant of pilgrims; for the rest of the open season, it is a quiet mountain valley with snow, forest and the roar of the East Lidder.",
      },
      {
        heading: "Is Chandanwari worth visiting?",
        body: "Yes, in late spring and early summer, when the snow and the snow bridge are its main attractions and Pahalgam itself is green. It is also worth it for anyone curious about the Amarnath route outside the yatra season. In September and October, with little snow, it is still a pretty drive but less special than Aru Valley. In winter, it is closed.",
      },
    ],
    months: months(PAHALGAM_CLIMATE, [
      "Closed: the road beyond Pahalgam is snowbound.",
      "Closed by snow.",
      "Usually closed; road clearing may start late in the month.",
      "Often reopens as the road is cleared; deep snow and the snow bridge.",
      "Best month: snow bridge, snow slopes and sledges.",
      "Snow still in the valley; busy with families.",
      "Amarnath Yatra base; tourist access may be restricted.",
      "Yatra continues for much of the month; check access.",
      "Quiet after the yatra; little snow, clear skies.",
      "Autumn colour along the Lidder; cold afternoons.",
      "Road may close after the first heavy snow.",
      "Closed for winter.",
    ]),
    routes: [
      { from: "Pahalgam", to: "Chandanwari", distanceKm: "about 16 km", time: "40 to 50 minutes", how: "Pahalgam union taxi from the stand near the market, up the East Lidder past Betaab Valley." },
      { from: "Srinagar", to: "Chandanwari", distanceKm: "about 110 km", time: "3.5 to 4 hours", how: "Srinagar to Pahalgam by cab (about 95 km), then a union taxi for the last 16 km." },
      { from: "Chandanwari", to: "Sheshnag Lake", distanceKm: "about 11 to 12 km on foot", time: "a long day's walk", how: "The Amarnath Yatra track via Pissu Top; registration and permission rules apply." },
    ],
    faqs: [
      { q: "How far is Chandanwari from Pahalgam?", a: "About 16 km, 40 to 50 minutes by Pahalgam union taxi." },
      { q: "Can I take my Srinagar cab to Chandanwari?", a: "No. Outside cabs cannot run sightseeing beyond Pahalgam. Hire a union taxi from the Pahalgam stand." },
      { q: "Is there snow at Chandanwari in June?", a: "Usually yes. Snow lies in the valley and on the slopes into June in most years, less by July." },
      { q: "What is the snow bridge at Chandanwari?", a: "A thick layer of packed snow over the Sheshnag stream that visitors walk on in spring and early summer. It thins and can become unsafe as it melts." },
      { q: "Is Chandanwari open during the Amarnath Yatra?", a: "It is the base for the Pahalgam yatra route, and tourist access can be restricted in July and August. Check the current rules before planning." },
      { q: "When does Chandanwari open after winter?", a: "Usually in April or May, when the road beyond Pahalgam is cleared of snow. The date varies with the winter." },
      { q: "How high is Chandanwari?", a: "About 2,900 m, roughly 700 m higher than Pahalgam." },
      { q: "Can I see Aru, Betaab and Chandanwari in one day?", a: "Yes, with a union taxi round. Agree the route, waiting times and total fare at the stand." },
      { q: "Are sledge rides available at Chandanwari?", a: "Yes, in the snow season, from local sledge pullers. Agree the rate and distance first." },
      { q: "Is Chandanwari safe for children?", a: "Yes with supervision. Keep children away from the stream and the edges of the snow bridge, and dress them warmly." },
      { q: "How far is Sheshnag Lake from Chandanwari?", a: "About 11 to 12 km on foot by the Amarnath track over Pissu Top, a long day's walk at altitude." },
    ],
  },
  "pahalgam/places-to-visit/lidder-river": {
    facts: [
      { label: "Source", value: "Kolahoi glacier, above Aru and Lidderwat" },
      { label: "Length", value: "About 70 km, joining the Jhelum near Anantnag" },
      { label: "Two branches", value: "East Lidder (from Sheshnag) and West Lidder (from Kolahoi) meet at Pahalgam" },
      { label: "Known for", value: "Riverside walks, trout fishing, rafting near Pahalgam" },
      { label: "Best months", value: "May to October" },
    ],
    blocks: [
      {
        heading: "What is the Lidder River?",
        body: "The Lidder is the river that made Pahalgam. Its West Lidder branch rises at the Kolahoi glacier above Aru, its East Lidder branch comes down from Sheshnag Lake past Chandanwari, and the two meet at Pahalgam before flowing south through the Lidder valley, past Aishmuqam and Bijbehara, to join the Jhelum near Anantnag after about 70 km. Its clear, fast, ice-cold water, white boulders and pine-lined banks are what most people picture when they think of Pahalgam.\n\nFor visitors, the Lidder is less a single sight than the thread that runs through every Pahalgam day: the view from the hotel window, the sound at night, the river beside the road to Aru and Betaab, and the backdrop to walks, picnics, rafting and fishing.",
      },
      {
        heading: "Things to do along the Lidder",
        body: "Walk along the riverside paths in Pahalgam town, especially the stretch near the main market and the parks along the banks. Sit by the water with tea from a stall. Take a short pony ride along the river towards the meadows. Photograph the river at Betaab Valley, where it flows through a broad green floor under pine forest. In summer, go white-water rafting on the stretch below Pahalgam, run by local operators. With a permit, fish for trout in the designated beats. In autumn, watch the light on the river and the golden willows along the banks.",
      },
      {
        heading: "Rafting on the Lidder",
        body: "Rafting on the Lidder usually runs from about May to September, depending on water levels, on stretches below Pahalgam around Yanner. The rapids are mostly moderate, suitable for beginners with a guide, and trips last about an hour or two. Operators provide life jackets, helmets and a guide in each raft; check that equipment is in good condition and that the operator is registered with the tourism authorities. Rates are fixed locally and change by season. Rafting is not advised for young children, non-swimmers who are nervous of water or anyone with back or heart problems. In late spring, when the river is in full flood from snowmelt, trips may be suspended for safety.",
      },
      {
        heading: "Trout fishing on the Lidder",
        body: "The Lidder and its tributaries are among Kashmir's best-known trout waters, with brown trout introduced during the British period and stocked by the state's Fisheries Department. Fishing is permitted only in designated beats, with a licence from the Fisheries Department, and the season and rules, such as fly-fishing only on some beats, are set by the department. Ask at the Fisheries Department office in Pahalgam or through a registered guide. Fishing without a permit is illegal and fined.",
      },
      {
        heading: "When is the best time to see the Lidder?",
        body: "April to June is the season of high water, when the river runs fast and loud with snowmelt and the banks are green. July and August are warm, with steady flow and good rafting. September and October bring clear water, low crowds and autumn colours. In winter, the river shrinks and partly freezes at the edges, with snow on the boulders and banks, a quiet and beautiful sight for those staying in Pahalgam.",
      },
      {
        heading: "Safety by the river",
        body: "The Lidder looks inviting, but it is ice-cold and very fast, especially from April to June. Do not swim or wade in, keep children well back from the edge, and be careful on wet boulders, which are slippery. Several drownings have happened when visitors slipped while posing for photographs. Raft only with registered operators and safety equipment.",
      },
      {
        heading: "Is the Lidder River worth a visit?",
        body: "You cannot visit Pahalgam without seeing it. Make time for a slow walk along its banks, a riverside meal and, in summer, a rafting trip if it suits your group. For many travellers, the sound of the Lidder at night is the memory of Pahalgam they keep longest.",
      },
    ],
    months: months(PAHALGAM_CLIMATE, [
      "Low water, snow on the banks; quiet riverside walks in town.",
      "Partly frozen edges; snow on the boulders.",
      "Thaw begins; river starts to rise.",
      "High snowmelt flow; loud and fast.",
      "Full flood; rafting starts when safe.",
      "Rafting season; green banks and picnics.",
      "Warm and busy; steady flow for rafting.",
      "Good rafting and riverside walks.",
      "Clear water and fewer people; good for fishing.",
      "Autumn colours along the banks.",
      "Low, clear water and cold mornings.",
      "Winter river; snow on the banks in most years.",
    ]),
    faqs: [
      { q: "Where does the Lidder River start?", a: "The West Lidder rises at the Kolahoi glacier above Aru, and the East Lidder flows from Sheshnag Lake. They meet at Pahalgam." },
      { q: "Where does the Lidder River end?", a: "It joins the Jhelum near Anantnag after about 70 km." },
      { q: "Can you go rafting on the Lidder?", a: "Yes, usually from about May to September on stretches below Pahalgam, with registered local operators." },
      { q: "Do you need a permit to fish in the Lidder?", a: "Yes. Trout fishing needs a licence from the Fisheries Department and is allowed only in designated beats." },
      { q: "Is it safe to swim in the Lidder?", a: "No. The water is ice-cold and fast, especially in spring and early summer. Stay on the bank." },
      { q: "When is the Lidder River at its best?", a: "April to June for full flow and green banks, September and October for clear water and autumn colour." },
      { q: "Is rafting on the Lidder suitable for beginners?", a: "Yes, the rapids are mostly moderate and guided, but it is not advised for young children or anyone with back or heart problems." },
      { q: "Which valleys does the Lidder flow through?", a: "Aru (West Lidder), Betaab and Chandanwari (East Lidder), Pahalgam town, and the Lidder valley down to Anantnag." },
    ],
  },
  "pahalgam/places-to-visit/sheshnag-lake": {
    facts: [
      { label: "Height", value: "About 3,590 m" },
      { label: "Distance", value: "About 11 to 12 km on foot from Chandanwari" },
      { label: "Route", value: "On the Amarnath Yatra track from Pahalgam, via Pissu Top" },
      { label: "Frozen", value: "Usually until about June" },
      { label: "Access", value: "On foot or by pony; registration and permission rules apply" },
    ],
    blocks: [
      {
        heading: "What is Sheshnag Lake?",
        body: "Sheshnag is a high glacial lake on the Amarnath Yatra route above Pahalgam, surrounded by snow peaks that, in Hindu belief, form the hoods of Sheshnag, the serpent king. Its water is a deep green-blue, fed by melting snow, and it stays frozen for much of the year. For Amarnath pilgrims, it is the first major halt on the traditional route from Chandanwari, with a large camp on its shore during the yatra. For trekkers, it is one of the most beautiful lakes in Kashmir and the source of the East Lidder, which flows down to Pahalgam.",
      },
      {
        heading: "How to reach Sheshnag",
        body: "There is no road. From Pahalgam, a union taxi goes to Chandanwari, about 16 km away, and from there it is a walk or pony ride of about 11 to 12 km on the yatra track, first climbing steeply to Pissu Top and then running along the valley to the lake. Most people take a full day for this stretch. During the Amarnath Yatra, usually from late June or early July to August, the route is open to registered pilgrims under the Shri Amarnathji Shrine Board's rules, with camps, langars and medical posts along the way. Outside the yatra, access is restricted and trekking needs the relevant permissions and a registered guide; check the current rules in Pahalgam.",
      },
      {
        heading: "Sheshnag and the Amarnath Yatra",
        body: "On the Pahalgam route, pilgrims usually spend the first night at Sheshnag after walking from Chandanwari, then cross the Mahagunus Pass, at over 4,000 m, to Panchtarni before reaching the Amarnath cave. According to tradition, Lord Shiva left the serpent Sheshnag at this lake on his way to the cave to tell Parvati the secret of immortality, and the lake is sacred to pilgrims. During the yatra, the lakeside camp is crowded and busy; pilgrims should register in advance, carry a compulsory health certificate as required by the shrine board and follow all instructions.",
      },
      {
        heading: "When is the best time?",
        body: "July to September, when the lake has thawed and the route is clear of most snow. During the yatra, the route is busy but supported by camps and services; after the yatra, in September, it is quieter, but access depends on permissions and the weather is colder. Snow can fall at Sheshnag in any month, and from October the area becomes snowbound.",
      },
      {
        heading: "Altitude and safety",
        body: "At about 3,590 m, Sheshnag is high enough for altitude sickness, especially on the yatra, when many pilgrims climb from the plains in a few days. Walk slowly, drink plenty of water, eat light meals and rest at the first sign of headache, nausea or breathlessness. Weather can turn quickly to rain, sleet or snow. Carry warm and waterproof clothing, and follow the advice of medical camps and security forces. People with heart or lung conditions should consult a doctor before attempting the walk.",
      },
      {
        heading: "What to carry on the walk to Sheshnag",
        body: "Warm layers including a down or heavy fleece jacket, a waterproof jacket and trousers, trekking shoes with grip, a woollen cap and gloves, sunglasses and sunscreen. Carry water and snacks, a torch, personal medicines, a basic first-aid kit, your yatra registration and health certificate if you are a pilgrim, and ID. During the yatra, langars along the route provide food, but carry energy snacks in case of delays. Ponies and porters can be hired at Chandanwari at rates fixed by the authorities.",
      },
      {
        heading: "Is Sheshnag Lake worth it?",
        body: "For pilgrims on the Amarnath Yatra, it is an essential and moving part of the journey. For fit trekkers with the right permissions and a guide, it is one of Kashmir's great high-altitude lakes. For ordinary sightseers on a Pahalgam trip, it is not a realistic day trip; Chandanwari, at the start of the route, gives a taste of the valley with far less effort.",
      },
    ],
    months: months(PAHALGAM_CLIMATE, [
      "Snowbound and inaccessible.",
      "Snowbound.",
      "Snowbound; the route is closed.",
      "Deep snow on the route; frozen lake.",
      "Snow on the track above Chandanwari; the lake still frozen.",
      "Route prepared for the yatra; the lake starts to thaw.",
      "Amarnath Yatra: lakeside camp for registered pilgrims.",
      "Yatra continues; cold nights at the lake.",
      "Quieter after the yatra; access depends on permissions.",
      "Cold; early snow on the passes.",
      "Snowbound.",
      "Snowbound.",
    ]),
    faqs: [
      { q: "How high is Sheshnag Lake?", a: "About 3,590 m, on the Amarnath Yatra route above Pahalgam." },
      { q: "How far is Sheshnag from Chandanwari?", a: "About 11 to 12 km on foot or by pony, via Pissu Top, usually a full day." },
      { q: "Can tourists visit Sheshnag Lake?", a: "During the Amarnath Yatra, registered pilgrims walk past it. Outside the yatra, access is restricted and needs permissions and a guide." },
      { q: "Is there a road to Sheshnag Lake?", a: "No. The road ends at Chandanwari; the rest is on foot or by pony." },
      { q: "Why is it called Sheshnag?", a: "After the serpent king Sheshnag, whom Lord Shiva is believed to have left at the lake on his way to the Amarnath cave." },
      { q: "When does Sheshnag Lake thaw?", a: "Usually by June or July. It is frozen or snow-covered for most of the rest of the year." },
      { q: "Do I need a health certificate for Sheshnag?", a: "Amarnath Yatra pilgrims need the compulsory health certificate and registration required by the Shri Amarnathji Shrine Board." },
      { q: "Is Sheshnag Lake a day trip from Pahalgam?", a: "No. It needs a long day's walk from Chandanwari and is usually an overnight on the yatra route." },
    ],
  },

  "sonamarg/places-to-visit/thajiwas-glacier": {
    facts: [
      { label: "Distance from Sonamarg", value: "About 3 to 4 km from the Sonamarg taxi stand to the glacier area" },
      { label: "How to get there", value: "On foot (about an hour each way) or by pony from the authorised stand" },
      { label: "Snow", value: "On the glacier and slopes from winter to about July; patches into late summer" },
      { label: "Best months", value: "May to June for snow, July to September for walks" },
      { label: "Time needed", value: "Half a day" },
      { label: "Activities", value: "Snow walks, sledge rides, pony rides, photography" },
    ],
    blocks: [
      {
        heading: "What is Thajiwas Glacier?",
        body: "Thajiwas is a glacier and snowfield in a side valley just above Sonamarg, in the mountains of the Thajiwas range. It is the main sightseeing trip from Sonamarg and the easiest place in Kashmir to stand on snow in summer: from May to June, and often into July, the valley floor below the glacier is covered with snow, and visitors ride ponies or walk up from the Sonamarg meadow to slide on sledges, play in the snow and look up at the ice and the peaks around them.\n\nThe glacier itself has retreated over the decades, as glaciers across the Himalaya have, and what most visitors reach is the snow and ice at its foot rather than the main ice body higher up. It is still a dramatic place, with a stream pouring out of the snow, waterfalls on the cliffs and forest on the lower slopes.",
      },
      {
        heading: "How to reach Thajiwas Glacier",
        body: "Sonamarg is about 80 km from Srinagar, usually two and a half to three hours by road through Ganderbal and Kangan along the Sindh river. From the Sonamarg taxi stand and meadow, the glacier area is about 3 to 4 km up a side valley. You can walk on a clear track, which takes about an hour up at an easy pace, or hire a pony from the authorised pony stand, where rates for Thajiwas are fixed by the pony union and displayed. Vehicles are not allowed on the track. In early summer, the last stretch is on snow; wear shoes with grip or rent snow boots near the stand.",
      },
      {
        heading: "When is the best time to visit Thajiwas?",
        body: "May and June are the best months for snow: the Zojila road usually reopens in spring, the Sonamarg meadow turns green, and the Thajiwas valley is still white, with sledges running on the snow. July still has snow on the upper slopes and some patches below, with warmer weather and wild flowers. August and September are greener, with snow mostly on the glacier and high slopes, good for walkers and photographers. October is cold and golden. From November to March, deep snow covers the valley; since the Z-Morh tunnel opened in January 2025, Sonamarg can be reached in winter, but the Thajiwas track is snowbound and visits depend on conditions and local advice.",
      },
      {
        heading: "Things to do at Thajiwas",
        body: "Walk on the snow and take pictures with the glacier and peaks behind you. Take a sledge ride down the snow slope with one of the local sledge pullers; agree the rate and distance first. Ride a pony from the meadow up the valley and back. Have tea and Maggi at the seasonal stalls. Walk up beside the stream to see the waterfalls on the cliffs. Fit walkers can continue higher with a local guide for better views of the ice, but should not go onto the glacier itself.",
      },
      {
        heading: "Sledges, ponies and fixed rates",
        body: "Sledge and pony rides at Thajiwas are run by local unions, and the tourism authorities fix the rates, which are usually displayed at the stands. Problems arise when rates are not agreed before starting, so always confirm the price, the route, the stops and the waiting time in advance, and ask for a slip if one is given. Do not pay strangers who approach you on the track. If you have a complaint, the tourist reception centre and police in Sonamarg can help.",
      },
      {
        heading: "Safety on the glacier",
        body: "Snow at the foot of the glacier can hide meltwater channels and hollows, especially in late spring and summer, and parts of the snowfield can collapse. Stay where other visitors and sledge pullers are, keep away from the stream and the edges of snow bridges, and do not climb onto the ice. Rockfall is possible near the cliffs. Weather changes fast; go back down if it starts raining or snowing heavily. Children should be watched closely on the snow.",
      },
      {
        heading: "What to wear and carry",
        body: "Wear warm layers even in June, a jacket, and shoes with grip or snow boots, which can be rented near the pony stand. Carry sunglasses and sunscreen, since snow glare is strong. Take water and a snack, cash for the pony, sledge and tea, and a dry pair of socks for children. A light rain jacket helps from July to September.",
      },
      {
        heading: "A Sonamarg day trip with Thajiwas",
        body: "Leave Srinagar by 7.30 am to reach Sonamarg by about 10.30. Ride a pony or walk to Thajiwas, spend about two hours on the snow, and return to the meadow for a late lunch. In the afternoon, take a local union taxi towards Zojila and Zero Point if the road is open and you have time, or simply walk along the Sindh river. Leave Sonamarg by 4 pm to reach Srinagar by evening. If you stay overnight, you can do Thajiwas in the morning and Zojila the next day, with less rush.",
      },
      {
        heading: "Thajiwas or Zero Point?",
        body: "Thajiwas is close to Sonamarg, reached by pony or on foot, and gives snow from spring to early summer with glacier views. Zero Point, beyond Zojila Pass on the road to Ladakh, is reached by local union taxi from Sonamarg and has snow often later into summer, with a high-mountain feel. Thajiwas is easier, cheaper and better for families with small children; Zero Point is for those who want more snow and a longer drive on a mountain road. Many visitors do Thajiwas in the morning and Zero Point in the afternoon.",
      },
      {
        heading: "Thajiwas with children and older travellers",
        body: "Families with children usually enjoy Thajiwas more than any other Sonamarg stop. Younger children are best on a pony with an adult, and the sledges are popular. Older travellers can ride a pony to the snow and back with little walking. The altitude, around 3,000 m at the glacier area, is manageable for most healthy people if they move slowly.",
      },
      {
        heading: "Sonamarg, the meadow of gold",
        body: "Sonamarg means the meadow of gold, a name usually explained by the way the meadow glows in the afternoon sun or by its old importance on the trade route to Ladakh. It lies at about 2,740 m on the Sindh river, at the foot of the mountains that lead to Zojila. The meadow, the river and the forest around it make Sonamarg the starting point for Thajiwas, Zojila, Baltal and the Kashmir Great Lakes trek. Most visitors come on a day trip from Srinagar; staying a night gives quieter mornings and the chance to see the mountains in evening light.",
      },
      {
        heading: "Food and facilities",
        body: "Sonamarg has hotels, dhabas and restaurants along the main road serving Kashmiri, North Indian and Punjabi food, tea and snacks. At the Thajiwas area, seasonal stalls sell tea, Maggi, noodles and biscuits. Toilets are basic. ATMs in Sonamarg can run out of cash on busy days, so carry enough from Srinagar for ponies, sledges and food. Mobile signal works in the main town but is weak in the side valley.",
      },
      {
        heading: "Common mistakes at Thajiwas",
        body: "Not agreeing pony and sledge rates in advance. Wearing sports shoes or sandals on wet snow. Going too close to the stream or onto thin snow over meltwater. Arriving late in the afternoon after a long drive from Srinagar and rushing the visit. Expecting a deep blue ice glacier at your feet, rather than the snowfield at its foot. Leaving litter on the snow. A morning visit with agreed rates and the right shoes avoids almost all of these.",
      },
      {
        heading: "Climate change and the Kashmir glaciers",
        body: "Glaciers across the Himalaya, including those around Sonamarg, have been shrinking for decades as winters warm and snowfall becomes less reliable. Visitors who came to Thajiwas years ago often notice that the snow and ice start higher up the valley now. That is one more reason to tread lightly: carry out your rubbish, avoid plastic and support the local efforts to keep Sonamarg clean.",
      },
      {
        heading: "Staying overnight in Sonamarg",
        body: "Most visitors see Sonamarg in a long day from Srinagar, but a night here changes the experience. You can reach Thajiwas early, before the day trippers arrive from Srinagar around 10.30 or 11, and have the snow almost to yourself in the first hour. The evening light on the peaks above the meadow and the night sky, far from city lights, are memorable. Sonamarg has hotels and camps from simple to comfortable along the main road and near the meadow; book ahead in May and June. Nights are cold even in summer, so check that your room has heating or enough blankets.",
      },
      {
        heading: "Thajiwas for photographers",
        body: "The best light in the Thajiwas valley comes in the early morning, when the sun lights the peaks and the snow is firm and clean, and in the late afternoon, when the side light brings out the texture of the glacier and the cliffs. The walk up from the meadow has good views back over Sonamarg and the Sindh valley. In June, the contrast of white snow, green meadow and dark pine forest is at its strongest; in September, the meadow turns golden. Protect your camera and phone from the cold and from snow, and watch your footing when composing shots near the stream.",
      },
      {
        heading: "Is there an entry fee at Thajiwas?",
        body: "There is no ticket to enter the Thajiwas valley itself. You pay only for the services you use: a pony ride, a sledge ride, snow boot or jacket rental, and tea or food at the stalls. Rates for ponies and sledges are fixed by the local unions and tourism authorities and are usually displayed at the stands. Any special permits for trekking higher up are handled by registered guides. If anyone asks for an entry fee on the track without an official receipt, check with the tourist reception centre in Sonamarg.",
      },
      {
        heading: "Is Thajiwas Glacier worth visiting?",
        body: "Yes, especially from May to July, when it gives the most accessible summer snow in Kashmir. It is the main reason most day trippers come to Sonamarg. Agree rates in advance, go in the morning and dress warmly, and it will be a highlight of your trip. In August and September, it is still a lovely walk, though with less snow.",
      },
    ],
    months: months(SONAMARG_CLIMATE, [
      "Snowbound; Sonamarg reachable through the Z-Morh tunnel, but the track depends on conditions.",
      "Deep snow; local advice needed before going up.",
      "Snow cover; winter visits only with local advice.",
      "Snow at the glacier, melting below; ponies start running.",
      "Best snow season for visitors; sledges on the valley floor.",
      "Snow still on the valley and glacier; very busy.",
      "Snow on the upper slopes; flowers below.",
      "Green valley, snow on the glacier; good for walks.",
      "Clear, cool and quiet; good for photographs.",
      "Cold and golden; season ends.",
      "First heavy snow.",
      "Snowbound winter.",
    ]),
    routes: [
      { from: "Srinagar", to: "Sonamarg", distanceKm: "about 80 km", time: "2.5 to 3 hours", how: "By road through Ganderbal and Kangan along the Sindh river." },
      { from: "Sonamarg taxi stand", to: "Thajiwas Glacier", distanceKm: "about 3 to 4 km", time: "about 1 hour on foot, less by pony", how: "Walk or authorised pony up the side valley; no vehicles on the track." },
      { from: "Thajiwas Glacier", to: "Zojila and Zero Point", distanceKm: "about 25 to 35 km by road from Sonamarg", time: "1 to 1.5 hours each way", how: "Back to Sonamarg, then a local union taxi on the Ladakh road when it is open." },
    ],
    faqs: [
      { q: "How far is Thajiwas Glacier from Sonamarg?", a: "About 3 to 4 km from the Sonamarg taxi stand, an hour's walk or a shorter pony ride." },
      { q: "Can cars go to Thajiwas Glacier?", a: "No. The track is for walkers and ponies only." },
      { q: "Is there snow at Thajiwas in June?", a: "Usually yes. The valley below the glacier is normally snow-covered in May and June, with patches into July." },
      { q: "How do I avoid overpaying for ponies and sledges at Thajiwas?", a: "Use the authorised stands, check the displayed rates and agree the price, route and waiting time before you start." },
      { q: "Can you walk on Thajiwas Glacier?", a: "Visitors walk on the snow at its foot. Do not climb onto the ice or near meltwater channels, which can collapse." },
      { q: "Is Thajiwas open in winter?", a: "Sonamarg can be reached in winter through the Z-Morh tunnel, but the Thajiwas track is snowbound. Go only with local advice." },
      { q: "Which is better, Thajiwas or Zero Point?", a: "Thajiwas is closer and easier for families; Zero Point has more snow later in summer but needs a longer drive by union taxi." },
      { q: "How much time do I need at Thajiwas?", a: "About half a day, including the pony ride or walk and time on the snow." },
      { q: "What should I wear to Thajiwas Glacier?", a: "Warm layers, a jacket, shoes with grip or rented snow boots, sunglasses and sunscreen." },
      { q: "Is Thajiwas suitable for small children?", a: "Yes on a pony with an adult and with close supervision on the snow, away from the stream." },
    ],
  },
  "sonamarg/places-to-visit/zojila-pass": {
    facts: [
      { label: "Height", value: "About 3,528 m" },
      { label: "Connects", value: "Sonamarg (Kashmir) with Drass and Kargil (Ladakh)" },
      { label: "Distance from Sonamarg", value: "About 25 km by road via Baltal" },
      { label: "Open", value: "Usually from about April or May to November or December, depending on snow" },
      { label: "Transport for sightseeing", value: "Local union taxi from Sonamarg" },
      { label: "Tunnel", value: "The long Zojila tunnel under the pass is under construction" },
    ],
    blocks: [
      {
        heading: "What is Zojila Pass?",
        body: "Zojila is the high mountain pass on the road from Srinagar to Leh, where the green Kashmir valley ends and the dry, high landscape of Ladakh begins. It lies about 25 km beyond Sonamarg, past Baltal, and climbs in steep, narrow switchbacks cut into the mountainside to about 3,528 m. For centuries it was the main trade and travel route between Kashmir and Ladakh, and it still carries most of the road traffic between them. For visitors on a Sonamarg trip, it is an adventurous drive to snowfields and views, and for overland travellers it is the gateway to Ladakh.",
      },
      {
        heading: "Visiting Zojila and Zero Point from Sonamarg",
        body: "Visitors on a Sonamarg trip hire a local union taxi from the Sonamarg stand for a round to Zojila Pass and Zero Point, a snowfield on the far side of the pass where snow often lies well into summer. Outside cabs are generally not allowed to run this sightseeing round. Rates are fixed by the union. The drive takes about an hour to an hour and a half each way, with stops at viewpoints. The road is narrow, unpaved in places and busy with army trucks and supply convoys, so traffic can stop for long periods. Start early, as convoys and one-way traffic slots can delay the return.",
      },
      {
        heading: "When is Zojila open?",
        body: "Heavy snow closes Zojila every winter, usually from about December, sometimes November, until the Border Roads Organisation clears it in spring, often in April or May. The opening and closing dates change every year with the snowfall. Even in the open season, the pass can close for a day or more after fresh snow, landslides or accidents. Check the road status with the traffic police or your agent the day before. For sightseers, May to October is the best window, with May and June bringing the most snow at Zero Point.",
      },
      {
        heading: "The road and safety",
        body: "The Zojila road is one of the most famous mountain roads in India for a reason: narrow, steep, with long drops and, in places, mud or slush from melting snow. Drivers of the Sonamarg union taxis know it well. Wear a seat belt, do not ask the driver to stop in unsafe places for photographs, and do not walk near the edge. Traffic often runs on alternate timings or in convoys; follow police instructions. If you get headaches or nausea at the pass, which is above 3,500 m, come back down.",
      },
      {
        heading: "History of Zojila",
        body: "Zojila has been the link between Kashmir and Ladakh for centuries, used by traders, pilgrims and caravans. In 1948, Indian forces famously took tanks over the pass, then at a height where few believed tanks could operate, to relieve Ladakh, an episode commemorated in the area. In 1999, during the Kargil war, the road over the pass was a key supply line. A war memorial at Drass, beyond the pass, honours those who died in that conflict.",
      },
      {
        heading: "The Zojila tunnel",
        body: "A long road tunnel is being built under the pass to make the Srinagar to Leh highway usable through the winter and avoid the dangerous switchbacks. Together with the Z-Morh tunnel near Sonamarg, which opened in January 2025 and made Sonamarg reachable all year, it will change travel between Kashmir and Ladakh. Until it opens, Zojila remains a seasonal pass.",
      },
      {
        heading: "Driving on to Ladakh",
        body: "Overland travellers going to Leh cross Zojila on the way to Drass, often called the second coldest inhabited place in the world, and Kargil, usually spending a night in Kargil before continuing to Leh. The full road from Srinagar to Leh is about 420 km and usually takes two days. Travellers should carry ID, check road status and plan for altitude, as Ladakh's passes rise much higher than Zojila.",
      },
      {
        heading: "What to wear and carry for Zojila",
        body: "Even in summer it is cold at the pass and at Zero Point, especially in the wind. Carry a warm jacket, a cap and gloves, sunglasses, sunscreen and shoes with grip for the snow. Snow boots can be rented in Sonamarg. Take water and snacks, since stalls at Zero Point are seasonal and convoys can delay the return. Keep your ID handy for checkpoints.",
      },
      {
        heading: "Is Zojila worth visiting?",
        body: "For adventurous sightseers, yes: the drive is thrilling, the mountain views are big and Zero Point gives snow into summer. It is not for travellers who dislike mountain roads or heights, or for families with very young children. If you only have one day in Sonamarg, Thajiwas Glacier is easier; Zojila is the second stop for those with more time or appetite for adventure.",
      },
    ],
    months: months(SONAMARG_CLIMATE, [
      "Pass closed by snow.",
      "Closed.",
      "Closed; clearing may begin late in the season.",
      "Often reopens late in the month or in May after clearing.",
      "Usually open; deep snow walls and snow at Zero Point.",
      "Open; snow at Zero Point, busy with visitors and convoys.",
      "Open; Baltal busy with Amarnath pilgrims.",
      "Open; check for landslides after rain.",
      "Open; clear skies and less traffic.",
      "Open; cold, with first snow possible late in the month.",
      "May close after heavy snow.",
      "Usually closed.",
    ]),
    faqs: [
      { q: "How high is Zojila Pass?", a: "About 3,528 m, on the Srinagar to Leh highway beyond Sonamarg." },
      { q: "How far is Zojila from Sonamarg?", a: "About 25 km by road via Baltal, usually an hour or more each way." },
      { q: "When is Zojila Pass open?", a: "Usually from about April or May to November or December. Dates vary with snowfall, and it can close for a day after fresh snow." },
      { q: "What is Zero Point near Zojila?", a: "A snowfield beyond Zojila Pass, visited from Sonamarg by local union taxi, where snow often lies into summer." },
      { q: "Can I take my own cab to Zojila from Sonamarg?", a: "Sightseeing rounds to Zojila and Zero Point are usually by Sonamarg union taxi. Through travellers to Ladakh drive over the pass in their own vehicles." },
      { q: "Is the Zojila road dangerous?", a: "It is narrow and steep with long drops, but experienced local drivers use it daily. Follow police instructions and do not stop in unsafe places." },
      { q: "Is there a tunnel under Zojila?", a: "A long Zojila tunnel is under construction. The Z-Morh tunnel near Sonamarg opened in January 2025." },
      { q: "Can I get altitude sickness at Zojila?", a: "Some people feel mild symptoms above 3,500 m. Move slowly, drink water and come down if you feel unwell." },
    ],
  },
  "sonamarg/places-to-visit/vishansar-lake": {
    facts: [
      { label: "Height", value: "About 3,710 m" },
      { label: "Route", value: "On the Kashmir Great Lakes trek, usually day 2 or 3 from Sonamarg" },
      { label: "Twin lake", value: "Kishansar, just above it" },
      { label: "Season", value: "July to September" },
      { label: "Access", value: "On foot only, with a registered trekking guide or operator" },
    ],
    blocks: [
      {
        heading: "What is Vishansar Lake?",
        body: "Vishansar is a high alpine lake in the mountains north-west of Sonamarg, on the Kashmir Great Lakes trek. It sits in a wide green bowl at about 3,710 m, with the snow-streaked peaks above reflected in its blue water, and its twin lake, Kishansar, lies a short climb above it. The name links it to Lord Vishnu. For trekkers, it is usually the first of the great lakes on the route and one of the most loved campsites in the Himalaya, with meadows full of flowers in July and August.",
      },
      {
        heading: "How to reach Vishansar",
        body: "There is no road. The Kashmir Great Lakes trek starts near Sonamarg, at Shitkadi or nearby, and climbs through forest and meadow to the Nichnai campsite, then crosses the Nichnai Pass, at over 4,000 m, and descends to Vishansar, usually on day two or three. Trekkers go with registered trekking operators or guides, who handle permits, camping and the checks by the army and police along the route; carry ID, as checkpoints are part of the trek. The full trek continues past Kishansar, Gadsar, Satsar and the twin Gangabal lakes to Naranag over about seven days.",
      },
      {
        heading: "When can you visit?",
        body: "The trekking season runs from about July to mid September, when the snow on the passes has melted and the weather is most stable. July and August bring flowers; September brings clear skies and colder nights. Outside this window, snow, cold and closed routes make the lake unsafe and generally inaccessible.",
      },
      {
        heading: "Fitness and safety",
        body: "The Kashmir Great Lakes trek is rated moderate to difficult, with long walking days, several passes above 4,000 m and nights in tents at high altitude. Trekkers should be fit, train before the trip and acclimatise properly. Weather can change fast, with rain and cold winds even in summer. Go with an experienced operator that provides guides, camping and emergency support, and turn back if altitude symptoms worsen.",
      },
      {
        heading: "Trout and rules at the lake",
        body: "Vishansar and the other great lakes have trout, and fishing is controlled by the Fisheries Department with licences required. Camping areas are set by the trekking operators and authorities; keep camps clean, carry all waste out, and do not wash with soap in the lake. The lakes are fragile, and their beauty depends on visitors leaving no trace.",
      },
      {
        heading: "The Kashmir Great Lakes trek day by day",
        body: "A typical seven-day plan: Day 1, Sonamarg (Shitkadi) to Nichnai through birch forest and meadows. Day 2, over the Nichnai Pass to Vishansar Lake. Day 3, a rest or short walk to Kishansar and the Gadsar Pass viewpoints, or on over the Gadsar Pass to Gadsar Lake. Day 4, Gadsar to Satsar, past a chain of small lakes. Day 5, Satsar over the Zajibal Pass to the twin Gangabal and Nundkol lakes below Mount Harmukh. Day 6, rest at Gangabal. Day 7, descend through forest to Naranag and drive back to Srinagar. Operators vary the plan; the walking days are long and the passes high.",
      },
      {
        heading: "Is Vishansar worth the trek?",
        body: "For fit trekkers, absolutely: Vishansar and the lakes beyond are among the most beautiful places in Kashmir and the reason the Great Lakes trek is so popular. It is not a sightseeing stop for regular Sonamarg visitors, who will find Thajiwas Glacier and Zojila easier ways to see Sonamarg's mountains.",
      },
    ],
    months: months(SONAMARG_CLIMATE, [
      "Snowbound and inaccessible.",
      "Snowbound.",
      "Snowbound.",
      "Snow on the passes; route closed.",
      "Snow on the passes; trekking not yet open.",
      "Snow melting on the passes; some early groups late in the month.",
      "Trek season: flowers in the meadows and lakes thawed.",
      "Peak trek season; showers possible.",
      "Clear skies and cold nights; the season ends mid-month.",
      "Too cold; early snow on the passes.",
      "Snowbound.",
      "Snowbound.",
    ]),
    faqs: [
      { q: "How high is Vishansar Lake?", a: "About 3,710 m, on the Kashmir Great Lakes trek north-west of Sonamarg." },
      { q: "How do you reach Vishansar Lake?", a: "On foot, on the Kashmir Great Lakes trek from near Sonamarg, usually reaching it on day two or three via the Nichnai Pass." },
      { q: "Is there a road to Vishansar Lake?", a: "No. It can only be reached by trekking." },
      { q: "When is the best time to visit Vishansar?", a: "July to mid September, the Kashmir Great Lakes trekking season." },
      { q: "What is the lake next to Vishansar?", a: "Kishansar, its twin lake, just above it." },
      { q: "Do I need a permit to trek to Vishansar?", a: "Treks go with registered operators who handle the required permissions; carry ID for army and police checkpoints." },
      { q: "How difficult is the trek to Vishansar?", a: "Moderate to difficult, with passes above 4,000 m and camping at altitude. It needs fitness and acclimatisation." },
      { q: "Can you fish at Vishansar Lake?", a: "Trout fishing needs a licence from the Fisheries Department. Follow the rules and leave no trace." },
    ],
  },
};
