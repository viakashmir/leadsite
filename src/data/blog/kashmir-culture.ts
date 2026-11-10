import type { BlogPost, BlogSection } from "./types";

// Kashmir culture, food and practical guides (2026-11-10). No prices typed in,
// no emergency numbers other than 112, no em dashes.

const DATE = "2026-11-10";

export const KASHMIR_CULTURE: BlogPost[] = [
  {
    slug: "kashmiri-wazwan-guide",
    title: "Kashmiri Wazwan Guide: The Dishes, the Waza Cooks, the Trami and Where to Try It",
    description: "Kashmiri wazwan explained: rista, rogan josh, tabak maaz, yakhni and gushtaba, the waza cooks, eating from a shared trami, etiquette and where visitors can try it.",
    category: "Planning",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Wazwan is Kashmir's ceremonial feast, a multi-course meal cooked by professional chefs called wazas and served at weddings and celebrations. A full wazwan can run to more than 30 dishes, most of them mutton, cooked slowly over wood fires and served in sequence on a large copper plate called a trami, shared by four guests. Visitors can try wazwan dishes at Srinagar restaurants, order a set wazwan meal, or ask a hotel or houseboat to arrange one.",
    sections: [
      {
        h: "The key dishes",
        list: [
          "Tabak maaz: lamb ribs simmered in milk and spices, then fried until crisp.",
          "Rista: pounded mutton meatballs in a red, spiced gravy.",
          "Rogan josh: tender mutton in a deep red gravy coloured with Kashmiri chillies and mawal (cockscomb flower).",
          "Aab gosh: mutton cooked in milk with cardamom.",
          "Yakhni: mutton in a mild, fragrant yoghurt gravy with fennel and dried mint.",
          "Marchwangan korma: a fiery red mutton curry.",
          "Kabab and methi maaz: minced kebabs and tripe cooked with fenugreek.",
          "Gushtaba: large, soft meatballs in a white yoghurt gravy, always the last main dish of the feast.",
        ],
      },
      {
        h: "The wazas and how wazwan is cooked",
        p: [
          "Wazwan is cooked by hereditary master chefs, the wazas, many from families who have done this work for generations, and their teams. Preparation begins the night before a feast: meat is chosen and pounded by hand on stone with wooden mallets for rista and gushtaba, and dishes cook slowly in large copper pots over wood fires. The skill lies in the texture of the meatballs and the balance of spices, especially fennel, dried ginger, cardamom and Kashmiri chilli.",
        ],
      },
      {
        h: "How a wazwan is served",
        p: [
          "Guests wash their hands at the table using a jug and basin called the tasht-naer, carried round by an attendant. Then a trami arrives, piled with rice and the first dishes, for four people to share. Wazas serve each dish in turn onto the trami, and guests eat with the right hand from their own section of the plate. Yoghurt, chutneys and salads come alongside. Gushtaba signals the end of the main meal, followed by kahwa.",
        ],
      },
      {
        h: "Etiquette for visitors",
        list: [
          "Eat with your right hand, from your own part of the trami.",
          "Do not waste food: it is polite to finish what is served to you, and leftovers are often packed for guests to take home.",
          "Wait for elders to begin.",
          "Accept the hand-washing ritual before and after the meal.",
          "If you do not eat mutton, say so in advance: a wazwan is almost entirely meat.",
        ],
      },
      {
        h: "Where visitors can try wazwan",
        p: [
          "Several long-established restaurants in Srinagar's Lal Chowk, Residency Road, Boulevard and Rajbagh areas serve wazwan dishes individually or as set trami meals for two or four. Many hotels and houseboats can arrange a wazwan dinner with notice. In Gulmarg and Pahalgam, hotel restaurants serve a few classic dishes such as rista and rogan josh. If you can, ask your host for a home wazwan experience, the most memorable way to taste it.",
        ],
      },
      {
        h: "Wazwan for non-meat eaters",
        p: [
          "Traditional wazwan is non-vegetarian. Vegetarian visitors can enjoy Kashmiri dum aloo, paneer in red gravy (paneer kaliya), haak saag (collard greens), nadru yakhni (lotus stem in yoghurt), rajma and chaman dishes, many of them cooked in the same spice style. Ask restaurants for a vegetarian Kashmiri thali.",
        ],
      },
      {
        h: "Beyond wazwan: other Kashmiri food",
        list: [
          "Harissa: a slow-cooked mutton and rice dish eaten at breakfast in winter.",
          "Kahwa: green tea with saffron, cardamom, cinnamon and almonds.",
          "Noon chai: pink, salted tea eaten with bread.",
          "Bakery breads: girda, lavasa, kulcha, sheermal and bakarkhani.",
          "Nadru monje: lotus stem fritters sold at roadside stalls.",
        ],
      },
    ],
    faqs: [
      { q: "How many dishes are in a Kashmiri wazwan?", a: "A full wedding wazwan can have more than 30 dishes. Restaurant set meals usually include a smaller selection of the classics." },
      { q: "What is the last dish of a wazwan?", a: "Gushtaba, large soft meatballs in a white yoghurt gravy, usually ends the main meal." },
      { q: "Is wazwan vegetarian?", a: "No. Traditional wazwan is almost entirely mutton. Kashmiri vegetarian dishes like dum aloo and nadru yakhni are separate." },
      { q: "What is a trami?", a: "A large copper plate shared by four guests, on which rice and the wazwan dishes are served." },
      { q: "Can tourists try wazwan in Srinagar?", a: "Yes, at long-established restaurants, or arranged by hotels and houseboats with notice." },
    ],
  },
  {
    slug: "kashmiri-kahwa-noon-chai-and-bakeries",
    title: "Kashmiri Kahwa, Noon Chai and Bakeries: What to Drink and Eat Each Morning",
    description: "Kashmiri kahwa and noon chai explained, the samovar, and Srinagar's bakeries: girda, lavasa, kulcha, sheermal, bakarkhani, and where visitors can try them.",
    category: "Planning",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Kashmir runs on two teas. Kahwa is a golden green tea brewed with saffron, cardamom, cinnamon and crushed almonds, served to guests and after meals. Noon chai, also called sheer chai, is a pink, salted milk tea drunk at breakfast and in the afternoon with bread. Both are traditionally made in a samovar. Every neighbourhood has a kandur, a traditional baker, whose breads like girda, lavasa and kulcha are bought fresh each morning.",
    sections: [
      {
        h: "Kahwa",
        p: [
          "Kahwa is made by brewing green tea leaves with saffron strands, green cardamom, a cinnamon stick and sometimes rose petals, then serving it with crushed almonds or walnuts and a little sugar or honey. It is light, fragrant and warming, and is the drink offered to guests in homes, shops and houseboats. In winter it is drunk many times a day. Shops in Srinagar sell ready kahwa mixes, but ask for real saffron and whole spices.",
        ],
      },
      {
        h: "Noon chai",
        p: [
          "Noon chai is made by boiling green tea leaves for a long time with a pinch of baking soda, which turns the tea a deep red, then adding milk and salt, which turn it pink. It is salty rather than sweet and is often topped with cream or crushed nuts. Kashmiris drink it with breakfast breads, dipping the bread in the tea. Visitors often find it unusual at first and come to love it on cold mornings.",
        ],
      },
      {
        h: "The samovar",
        p: [
          "A samovar is a metal urn, often copper and engraved, with a central chamber for hot coals that keeps the tea hot. It is used for both kahwa and noon chai, especially at gatherings and in winter. Copper samovars from the old city's coppersmiths in Zaina Kadal and nearby markets are a classic souvenir.",
        ],
      },
      {
        h: "Kashmiri breads",
        list: [
          "Girda: a round, slightly crusty bread with finger impressions, the everyday breakfast bread.",
          "Lavasa: a thin, crisp flatbread, often eaten with butter.",
          "Kulcha: small, crumbly breads, sweet or salty, topped with sesame or poppy seeds.",
          "Sheermal: a soft, slightly sweet saffron bread.",
          "Bakarkhani: a layered, flaky bread, traditionally eaten at weddings and festivals.",
          "Tsot and tchochworu: sesame-topped breads, the latter shaped like a bagel.",
        ],
      },
      {
        h: "The kandur and the morning ritual",
        p: [
          "Every Srinagar neighbourhood has its kandur, a traditional baker working at a clay tandoor sunk into the floor. In the early morning, someone from each house goes to buy fresh bread, and the kandur shop becomes a meeting place for news and conversation. Visit one early, around 6 or 7 am, to see girda and lavasa being slapped onto the tandoor walls. Bakers in the old city and in residential areas are the most traditional.",
        ],
      },
      {
        h: "Modern bakeries and cafes",
        p: [
          "Srinagar also has well-known modern bakeries, many along Residency Road, Boulevard Road and Rajbagh, selling walnut fudge, macaroons, plum cake, biscuits and Kashmiri breads. Bakery biscuits and walnut brownies are popular gifts to take home. Cafes along Boulevard and in the city centre serve kahwa alongside coffee.",
        ],
      },
      {
        h: "Where and when to try them",
        list: [
          "Kahwa: at your houseboat on arrival, in craft shops, and after meals in restaurants.",
          "Noon chai: at breakfast in hotels and homestays; ask for it if it is not on the buffet.",
          "Bakery breads: from a kandur at dawn, or from city bakeries during the day.",
          "Winter: harissa shops in the old city at dawn, often with lavasa and noon chai.",
        ],
      },
    ],
    faqs: [
      { q: "What is the difference between kahwa and noon chai?", a: "Kahwa is a sweet-spiced green tea with saffron and almonds; noon chai is a pink, salted milk tea." },
      { q: "Why is noon chai pink?", a: "The tea is boiled for a long time with baking soda, which turns it deep red, then milk turns it pink." },
      { q: "What is a kandur?", a: "A traditional Kashmiri baker who bakes breads like girda and lavasa in a clay tandoor each morning." },
      { q: "Can I buy kahwa to take home?", a: "Yes. Buy loose kahwa mix with real saffron from trusted shops in Srinagar, or the separate spices to make it yourself." },
    ],
  },
  {
    slug: "kashmir-shopping-handicrafts-guide",
    title: "Kashmir Shopping Guide: Pashmina, Kani Shawls, Carpets, Papier Mache and Saffron",
    description: "What to buy in Kashmir and how to buy it right: GI-tagged pashmina and Kani shawls, carpets, papier mache, walnut wood, copperware, saffron and where to shop.",
    category: "Planning",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Kashmir is one of India's great craft regions. The best buys are pashmina and Kani shawls, hand-knotted silk and wool carpets, papier mache boxes, walnut wood carving, copperware, crewel and sozni embroidery, Kashmiri saffron from Pampore, and dry fruit. Genuine pieces take weeks or months of handwork, so imitations are common. Look for GI tags and certification, buy from government emporiums or established shops, and take your time.",
    sections: [
      {
        h: "Pashmina",
        p: [
          "Pashmina is made from the fine undercoat of the Changthangi goat, raised by nomads in Ladakh's high plateau, and hand-spun and hand-woven in Kashmir. Kashmir pashmina has a Geographical Indication (GI) tag, and genuine GI pieces carry a label certified through the Craft Development Institute in Srinagar. Real pashmina is very soft, light and warm, and is often blended with silk for strength. Be wary of very cheap shawls sold as pure pashmina; many are machine-made or blended with wool or synthetics.",
        ],
      },
      {
        h: "Kani shawls",
        p: [
          "Kani shawls are woven on a loom using small wooden spools called kanis, which create intricate patterns woven into the fabric rather than embroidered on top. A single shawl can take months. The craft is associated with Kanihama village near Srinagar and also has a GI tag. They are among the most valuable shawls made in Kashmir.",
        ],
      },
      {
        h: "Carpets",
        p: [
          "Kashmiri carpets are hand-knotted in silk, wool or a mix, following patterns read out from a coded script called talim. The finer the knot count, the more valuable the carpet. Ask to see the back: a hand-knotted carpet shows the same pattern clearly on both sides. Reputable dealers explain knot counts, materials and shipping, and give a certificate of origin.",
        ],
      },
      {
        h: "Other crafts",
        list: [
          "Papier mache: boxes, vases and ornaments painted in fine floral patterns.",
          "Walnut wood carving: tables, boxes and screens carved from Kashmiri walnut.",
          "Copperware: samovars, trays and engraved plates from the old city.",
          "Crewel and sozni embroidery: wool or silk embroidery on cushions, curtains, shawls and pherans.",
          "Pherans: the long Kashmiri winter tunic, embroidered at the neck and cuffs.",
          "Willow cricket bats: made in workshops at Sangam and Halmulla on the Pahalgam road.",
        ],
      },
      {
        h: "Saffron and dry fruit",
        p: [
          "Kashmiri saffron, grown on the karewa plateaus around Pampore, has a GI tag and is prized for its deep colour and aroma. Real saffron threads are dark red with a slight trumpet shape and colour water slowly. Buy sealed, labelled packs from trusted shops or government outlets. Kashmir also produces excellent walnuts, almonds, dried apricots and honey, sold in Pampore and Srinagar.",
        ],
      },
      {
        h: "Where to shop",
        list: [
          "Government Arts Emporium in the old Residency building on Residency Road: fixed prices and genuine crafts.",
          "Polo View and Residency Road: established handicraft and shawl shops.",
          "Lal Chowk: busy market for everything from clothes to dry fruit.",
          "Old city markets around Zaina Kadal and Maharaj Gunj: copperware and traditional goods.",
          "Pampore: saffron and dry fruit on the Pahalgam road.",
        ],
      },
      {
        h: "Shopping tips",
        list: [
          "Look for GI labels on pashmina, Kani shawls and saffron.",
          "Ask for a receipt that names the material and origin.",
          "Do not feel pressured by shikara vendors or drivers who take you to particular shops.",
          "Compare prices in two or three shops before buying expensive items.",
          "For carpets, ask about shipping, insurance and customs if sending abroad.",
        ],
      },
    ],
    faqs: [
      { q: "How can I tell if a pashmina is genuine?", a: "Look for a GI label certified through the Craft Development Institute, buy from trusted shops, and be wary of very cheap pieces sold as pure pashmina." },
      { q: "Where is the best place to shop in Srinagar?", a: "The Government Arts Emporium on Residency Road for fixed prices, and established shops on Polo View and Residency Road." },
      { q: "What is a Kani shawl?", a: "A shawl woven on a loom with small wooden spools called kanis, creating patterns woven into the fabric. It has a GI tag." },
      { q: "How do I check Kashmiri saffron is real?", a: "Real threads are dark red and colour water slowly. Buy sealed, labelled packs with a GI mark from trusted sellers." },
    ],
  },
  {
    slug: "old-srinagar-heritage-walk",
    title: "Old Srinagar Heritage Walk: Jamia Masjid, Khanqah-e-Moula, Pathar Masjid and the Jhelum",
    description: "A self-guided old Srinagar heritage walk: Jamia Masjid, Khanqah-e-Moula, Pathar Masjid, Budshah's tomb, the Jhelum bridges, wooden houses and old markets.",
    category: "Planning",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Old Srinagar, the Shehr-e-Khaas or downtown, is the historic heart of the city along the Jhelum, with wooden mosques and shrines, old bridges, brick-and-timber houses and markets that have traded for centuries. A half-day walk covers the Jamia Masjid, the Khanqah-e-Moula on the river, the stone Pathar Masjid, the tomb of Budshah's mother and the copper and spice markets. Go in the morning, dress modestly, and hire a local guide for the stories.",
    sections: [
      {
        h: "The route",
        days: [
          "Jamia Masjid, Nowhatta: the great Friday mosque with about 370 deodar wood pillars around a courtyard garden.",
          "Walk through the old lanes towards the Jhelum and Maharaj Gunj market.",
          "Khanqah-e-Moula (Shah-e-Hamdan): a wooden shrine on the riverbank with a painted, carved interior.",
          "Pathar Masjid across the river: a stone mosque built by Nur Jahan in the 17th century.",
          "Tomb of Budshah's mother: a brick tomb with domes in Persian style, near Zaina Kadal.",
          "Zaina Kadal bridge and the old copper markets.",
          "End at the Jhelum ghats for tea and the view of the old wooden houses.",
        ],
      },
      {
        h: "Jamia Masjid",
        p: [
          "Built in the late 14th century under Sultan Sikandar and rebuilt after fires, the Jamia Masjid is one of the largest mosques in Kashmir. Its wooden pillars, each cut from a single deodar tree, support a vast roof around a peaceful inner garden. Visitors are welcome outside prayer times; remove shoes, dress modestly and women should cover their heads. Friday is busy with prayers.",
        ],
      },
      {
        h: "Khanqah-e-Moula",
        p: [
          "On the bank of the Jhelum, the Khanqah-e-Moula is dedicated to the 14th century Sufi saint Mir Sayyid Ali Hamadani, who brought many crafts to Kashmir. The wooden building, with its pagoda-like roof, has an interior covered in papier mache painting and carved wood. Women are usually not allowed inside the main hall but can view it from the entrance. Photography inside may be restricted.",
        ],
      },
      {
        h: "Pathar Masjid and Budshah's mother's tomb",
        p: [
          "The Pathar Masjid, built in grey limestone by Empress Nur Jahan around 1623, stands out in a city of wooden mosques. Close by, the tomb of the mother of Sultan Zain-ul-Abidin, known as Budshah, is a brick tomb with glazed tile traces and domes in Central Asian style, one of the oldest such structures in Kashmir.",
        ],
      },
      {
        h: "Old houses, bridges and markets",
        p: [
          "The old city's houses are built in a mix of brick and timber called taq and dhajji dewari, with carved wooden window screens called pinjrakari and overhanging balconies. The Jhelum is crossed by a series of old bridges, called kadals, such as Zaina Kadal and Ali Kadal. Markets sell copperware, spices, dry fruit, bakery breads and household goods. Walk slowly and look up: many houses are centuries old.",
        ],
      },
      {
        h: "Etiquette and practical tips",
        list: [
          "Dress modestly; women should carry a scarf.",
          "Remove shoes at mosques and shrines.",
          "Ask before photographing people, especially women.",
          "Visit outside Friday prayer times.",
          "Carry cash for small purchases and tea.",
          "A local heritage guide adds history and access to places you might miss.",
        ],
      },
      {
        h: "Best time",
        p: [
          "Mornings from April to November are best, with pleasant light and markets opening. In autumn the chinars along the Jhelum turn gold. In winter, the old city is atmospheric at dawn, with harissa shops opening and bakers at work. Check local conditions on the day: the old city can be closed for events, and your hotel or driver will know.",
        ],
      },
    ],
    faqs: [
      { q: "How long does an old Srinagar heritage walk take?", a: "About 3 to 4 hours for the main sights at a relaxed pace." },
      { q: "Can tourists visit the Jamia Masjid?", a: "Yes, outside prayer times. Remove shoes, dress modestly and women should cover their heads." },
      { q: "Is a guide needed for old Srinagar?", a: "Not essential, but a local heritage guide explains the history and leads you through the lanes." },
      { q: "Who built the Pathar Masjid?", a: "Empress Nur Jahan, around 1623, in grey limestone." },
    ],
  },
  {
    slug: "kashmir-festivals-guide",
    title: "Kashmir Festivals: Tulip Festival, Eid, Kheer Bhawani, Saffron Harvest and More",
    description: "Festivals in Kashmir through the year: the tulip festival, Navroz, Eid, Kheer Bhawani mela, Hazratbal gatherings, the Amarnath Yatra and the saffron harvest.",
    category: "Planning",
    destination: "kashmir",
    date: DATE,
    intro:
      "Kashmir's calendar mixes religious festivals, seasonal celebrations and tourism events. The tulip festival in spring, Eid celebrations, the Kheer Bhawani mela at Tulmulla, special gatherings at Hazratbal shrine, the Amarnath Yatra in summer and the saffron harvest at Pampore in autumn are the occasions most visitors encounter. Many dates follow the lunar calendar and change each year, so check them before you plan your trip around one.",
    sections: [
      {
        h: "Spring",
        list: [
          "Tulip festival (late March to April): J&K Tourism events around peak bloom at the Indira Gandhi Memorial Tulip Garden.",
          "Navroz (around March 21): the Persian new year, observed by some communities in Kashmir.",
          "Almond blossom (March): Badamwari garden near Hari Parbat fills with visitors.",
          "Baisakhi (April): celebrated in Jammu and by Sikh communities across the region.",
        ],
      },
      {
        h: "Summer",
        list: [
          "Kheer Bhawani mela (May or June, on Jyeshtha Ashtami): Kashmiri Pandits gather at the sacred spring temple at Tulmulla, about 25 km from Srinagar.",
          "Amarnath Yatra (July and August): the pilgrimage to the cave shrine, from Pahalgam and Baltal, ending around Raksha Bandhan.",
          "Hemis festival in Ladakh (June or July): masked dances at Hemis monastery, a short flight or drive away.",
        ],
      },
      {
        h: "Autumn and winter",
        list: [
          "Saffron harvest (late October to early November): purple crocus fields around Pampore, where farmers pick the flowers at dawn.",
          "Chillai Kalan (December 21 to January 31): the coldest 40 days of winter, with harissa and kangris part of daily life.",
          "Christmas and New Year: Gulmarg and Srinagar host celebrations and are at their busiest.",
          "Shivratri, known in Kashmir as Herath: an important festival for Kashmiri Pandits in February or March.",
        ],
      },
      {
        h: "Eid and Islamic festivals",
        p: [
          "Eid-ul-Fitr at the end of Ramadan and Eid-ul-Adha are the biggest celebrations in the valley, with prayers, new clothes, family visits and special bakery goods. During Ramadan, many restaurants open late in the day, and evenings are lively after iftar. At Hazratbal shrine, on special days such as Eid-e-Milad and Mi'raj, the holy relic is displayed and large crowds gather. Visitors are welcome to observe respectfully; dress modestly.",
        ],
      },
      {
        h: "Planning around festivals",
        list: [
          "Lunar-calendar dates shift by about 10 to 11 days each year; check them before you book.",
          "Expect bigger crowds and higher hotel rates around the tulip festival, Christmas and New Year.",
          "Some shops and restaurants close on Eid; plan meals in hotels.",
          "Roads near Pahalgam and Sonamarg are busier and more tightly controlled during the Amarnath Yatra.",
          "Respect religious gatherings: ask before photographing and dress modestly.",
        ],
      },
      {
        h: "Best festival experiences for visitors",
        p: [
          "For most visitors, the most rewarding festival experiences are the tulip season, the saffron harvest at Pampore at dawn, and Eid evenings in Srinagar's markets. Pilgrims plan around Amarnath, Kheer Bhawani or Vaishno Devi's Navratri. Winter travellers enjoy Chillai Kalan traditions like harissa breakfasts and evenings around a bukhari.",
        ],
      },
    ],
    faqs: [
      { q: "When is the tulip festival in Kashmir?", a: "Around peak bloom at the Tulip Garden, usually late March to April. Dates are announced each year." },
      { q: "When is the saffron harvest in Kashmir?", a: "Usually late October to early November, when the crocus flowers bloom around Pampore." },
      { q: "What is the Kheer Bhawani mela?", a: "A gathering of Kashmiri Pandits at the sacred spring temple at Tulmulla, held on Jyeshtha Ashtami in May or June." },
      { q: "Is it a good idea to visit Kashmir during Eid?", a: "Yes, it is festive, but some shops and restaurants close. Plan meals in hotels and dress modestly." },
    ],
  },
  {
    slug: "vegetarian-and-jain-food-in-kashmir",
    title: "Vegetarian and Jain Food in Kashmir: Dishes to Try and How to Order",
    description: "Vegetarian and Jain food in Kashmir: dum aloo, nadru yakhni, haak, rajma and chaman, where to eat in Srinagar and the hill stations, and how to ask for Jain meals.",
    category: "Family",
    destination: "kashmir",
    city: "srinagar",
    date: DATE,
    intro:
      "Kashmir is famous for its meat dishes, but vegetarians eat very well too. Kashmiri dum aloo, nadru yakhni (lotus stem in yoghurt), haak saag, chaman (paneer) in red or yellow gravy and rajma are classic vegetarian dishes in Kashmiri homes, and Kashmiri Pandit cuisine is rich in them. Srinagar has many pure vegetarian restaurants, hotels in Gulmarg and Pahalgam cook vegetarian meals, and Jain meals without onion, garlic or root vegetables can be arranged with notice.",
    sections: [
      {
        h: "Kashmiri vegetarian dishes",
        list: [
          "Dum aloo: baby potatoes cooked in a spiced yoghurt and red chilli gravy.",
          "Nadru yakhni: lotus stem in a mild yoghurt gravy with fennel and cardamom.",
          "Haak: collard greens cooked simply with mustard oil and chilli.",
          "Chaman kaliya: paneer in a yellow turmeric and milk gravy; chaman qaliya in red gravy is also common.",
          "Rajma: Kashmiri red kidney beans, often cooked with turnip.",
          "Monje haak: kohlrabi with greens.",
          "Nadru monje: crisp lotus stem fritters, a favourite snack.",
          "Modur pulao: sweet saffron rice with dry fruit.",
        ],
      },
      {
        h: "Kashmiri Pandit food",
        p: [
          "Kashmiri Pandit cooking has a long vegetarian tradition alongside its meat dishes. It uses asafoetida, dried ginger, fennel and yoghurt instead of onion and garlic, which makes many dishes naturally suitable for Jain or no-onion-garlic diets when root vegetables are avoided. Ask for Pandit-style dishes at restaurants that specialise in them.",
        ],
      },
      {
        h: "Where to eat",
        list: [
          "Srinagar: pure vegetarian restaurants and dhabas around Dal Gate, Boulevard Road and Lal Chowk serve North Indian, Kashmiri vegetarian and South Indian food.",
          "Hotels and houseboats: most cook vegetarian meals on request.",
          "Gulmarg and Pahalgam: hotel restaurants and dhabas serve vegetarian thalis; choices are fewer in Sonamarg.",
          "Katra: fully vegetarian, with plenty of choice before or after Vaishno Devi.",
        ],
      },
      {
        h: "Ordering Jain food",
        p: [
          "Tell your hotel and travel agent in advance that you need Jain meals: no onion, garlic, potatoes or other root vegetables, and sometimes no eating after sunset. Many Srinagar hotels and some in Gulmarg and Pahalgam can prepare Jain meals with notice. On houseboats, the cook can make simple dal, rice, vegetables and rotis. Carry some dry snacks for long drives, as roadside dhabas may not have Jain options.",
        ],
      },
      {
        h: "Tips for vegetarian travellers",
        list: [
          "Ask for a vegetarian Kashmiri thali to try several dishes at once.",
          "Confirm that vegetarian dishes are cooked in separate utensils if this matters to you.",
          "Bakery breads like girda and kulcha are vegetarian; check for egg in cakes and biscuits.",
          "Kahwa and noon chai are vegetarian.",
          "Carry snacks for long drives to Gurez or Sonamarg.",
        ],
      },
      {
        h: "Vegetarian food on a Kashmir package",
        p: [
          "Most Kashmir packages include breakfast and dinner. Tell the agent at booking that you are vegetarian or Jain, so hotels and houseboats are informed in advance. Ask the agent to confirm in writing that each hotel can provide your meals, especially in Sonamarg and Gurez, where options are limited.",
        ],
      },
    ],
    faqs: [
      { q: "Is vegetarian food easily available in Kashmir?", a: "Yes. Srinagar has many vegetarian restaurants, and hotels across Kashmir cook vegetarian meals." },
      { q: "Can I get Jain food in Kashmir?", a: "Yes, with notice. Many Srinagar hotels and some in Gulmarg and Pahalgam prepare Jain meals." },
      { q: "What are the best vegetarian Kashmiri dishes?", a: "Dum aloo, nadru yakhni, haak, chaman kaliya and rajma." },
      { q: "Is Katra vegetarian?", a: "Yes. Katra is a fully vegetarian town." },
    ],
  },
  {
    slug: "kashmir-vs-ladakh",
    title: "Kashmir vs Ladakh: Which to Choose for Scenery, Season, Altitude and Budget",
    description: "Kashmir or Ladakh? Compare scenery, the best season, altitude, how you get there, activities, family suitability and cost, and when to combine both in one trip.",
    category: "Planning",
    destination: "kashmir",
    date: DATE,
    intro:
      "Kashmir and Ladakh are neighbours but very different. Kashmir is green and gentle: lakes, Mughal gardens, meadows and pine forests, at 1,600 to 2,800 m, open all year, with snow in winter. Ladakh is a high, dry mountain desert: monasteries, turquoise lakes and huge passes, at 3,000 to 5,300 m, best from May to September. Choose Kashmir for comfort, families and winter snow; choose Ladakh for adventure, road trips and dramatic landscapes. Or combine both by road from Srinagar to Leh.",
    sections: [
      {
        h: "At a glance",
        list: [
          "Scenery: Kashmir has lakes, gardens, meadows and forests; Ladakh has barren mountains, high lakes and monasteries.",
          "Altitude: Srinagar is about 1,600 m; Leh is about 3,500 m, with passes above 5,000 m.",
          "Season: Kashmir is open all year; Ladakh is best from May to September, with winter trips for snow leopards and the frozen Zanskar.",
          "Getting there: Srinagar by flight or the Vande Bharat from Katra; Leh by flight or by road from Srinagar or Manali.",
          "Comfort: Kashmir has more hotels, houseboats and easier days; Ladakh has longer drives and simpler stays outside Leh.",
          "Activities: Kashmir for shikaras, Gondola, skiing and pony rides; Ladakh for road trips, biking, monasteries and camping.",
        ],
      },
      {
        h: "Who should choose Kashmir",
        p: [
          "Families with young children or elderly parents, honeymooners who want comfort and romance, first-time mountain travellers, and anyone travelling in winter. Kashmir's altitude is gentle, distances are short and there is a wide choice of hotels, from houseboats to palace hotels.",
        ],
      },
      {
        h: "Who should choose Ladakh",
        p: [
          "Adventure travellers, bikers, photographers and anyone who wants big, wild landscapes. Ladakh's high altitude means you need to acclimatise for a day or two in Leh, and drives to Nubra, Pangong and Tso Moriri are long. Ladakh rewards travellers who are fit, flexible and happy with simpler stays.",
        ],
      },
      {
        h: "Health and altitude",
        p: [
          "Altitude is the biggest difference. In Kashmir, most visitors feel fine. In Ladakh, mild altitude sickness is common in the first days: headache, breathlessness and poor sleep. Rest on arrival in Leh, drink water and avoid alcohol. Anyone with heart, lung or blood pressure problems should check with a doctor before visiting Ladakh.",
        ],
      },
      {
        h: "Budget",
        p: [
          "Kashmir packages are usually less expensive per day than Ladakh, because distances are shorter, the season is longer and there are more hotels. Ladakh costs more because of flights to Leh, long drives in Ladakh-registered vehicles, permits and a short season. Both are cheapest in shoulder months: Kashmir in March, October and November; Ladakh in May and late September.",
        ],
      },
      {
        h: "Combining both",
        p: [
          "If you have 10 to 12 days between June and September, do both: Srinagar, Gulmarg and Pahalgam, then Sonamarg, Kargil and Leh by road, with Nubra and Pangong, and fly home from Leh. Driving from Srinagar to Leh helps acclimatisation because the altitude rises gradually.",
        ],
      },
      {
        h: "Month-by-month choice",
        list: [
          "December to February: Kashmir for snow; Ladakh only for specialist winter trips.",
          "March and April: Kashmir for tulips and blossom; Ladakh roads still mostly closed.",
          "May and June: both; Ladakh's roads open and Kashmir is green.",
          "July and August: both; Ladakh has its driest, warmest weather while Kashmir is lush.",
          "September: both, with clear skies and fewer crowds.",
          "October and November: Kashmir for autumn colours; Ladakh's high passes start to close.",
        ],
      },
    ],
    faqs: [
      { q: "Is Kashmir or Ladakh better for families?", a: "Kashmir, because of gentler altitude, shorter drives and more comfortable hotels." },
      { q: "Is Ladakh more expensive than Kashmir?", a: "Usually, because of flights, long drives, permits and a short season." },
      { q: "Can I visit Kashmir and Ladakh in one trip?", a: "Yes, in 10 to 12 days between June and September, driving from Srinagar to Leh." },
      { q: "Which is better for a honeymoon, Kashmir or Ladakh?", a: "Kashmir for comfort and romance; Ladakh for adventurous couples who want wild landscapes." },
      { q: "Which is better in winter?", a: "Kashmir, for snow in Gulmarg and Pahalgam. Ladakh winter trips are for specialist interests like snow leopards." },
    ],
  },
  {
    slug: "solo-female-travel-in-kashmir",
    title: "Solo Female Travel in Kashmir: Safety, Where to Stay, Dress and Practical Tips",
    description: "Solo female travel in Kashmir: honest safety advice, where to stay, dressing for local culture, taxis and guides, shared tours and what women travellers say works.",
    category: "Planning",
    destination: "kashmir",
    date: DATE,
    intro:
      "Many women travel solo in Kashmir and have warm, hospitable experiences: Kashmiri culture is deeply hospitable, and tourism is central to the economy. As anywhere, a little planning helps. Stay in well-reviewed hotels or houseboats run by families, use taxis booked through your hotel or a trusted agent, dress modestly in line with local culture, keep evenings in busy areas, and check the latest travel updates before and during your trip.",
    sections: [
      {
        h: "Where to stay",
        list: [
          "Well-reviewed hotels on Boulevard Road or in Rajbagh, with a 24-hour reception.",
          "Family-run Deluxe houseboats with recent reviews from solo women travellers.",
          "Homestays in Srinagar, Pahalgam or Gurez, where you are part of a family household.",
          "In Gulmarg and Pahalgam, hotels close to the main areas rather than isolated properties.",
        ],
      },
      {
        h: "Getting around",
        p: [
          "Book taxis through your hotel, houseboat or a trusted agent, and share the driver's name and number with someone at home. Many solo women hire the same driver for the whole trip, which builds trust and makes days easier. Shared taxis run from Srinagar stands to Gulmarg, Sonamarg and Pahalgam, and are used by locals. Avoid travelling between towns after dark, which is good advice for everyone in the mountains.",
        ],
      },
      {
        h: "Dress and etiquette",
        list: [
          "Dress modestly: long sleeves, loose trousers or long skirts, and a scarf to cover your head at shrines and mosques.",
          "A pheran (Kashmiri long tunic) is warm and appropriate, and many travellers buy one.",
          "Be friendly but reserved with strangers; polite firmness works well with persistent sellers.",
          "Ask before photographing local women.",
        ],
      },
      {
        h: "Safety and staying informed",
        p: [
          "Check the latest travel updates and any advisories before you go, and follow local news during your stay. Keep your hotel informed of your plans for the day, carry a charged phone and a power bank, and keep copies of your ID. Use a postpaid SIM: prepaid connections from outside J&K do not work. In an emergency, dial 112, India's national emergency number.",
        ],
      },
      {
        h: "Join a group or go solo",
        p: [
          "If you are travelling alone for the first time in the mountains, a small-group tour or a private package with a vetted driver gives you company and support without losing freedom. Many agents run fixed-departure group trips in summer. Solo travellers who prefer independence can base themselves in Srinagar and do day trips with a regular driver.",
        ],
      },
      {
        h: "What women travellers say works",
        list: [
          "Staying with families on houseboats and in homestays: warm, safe and full of local insight.",
          "A trusted driver for the whole trip.",
          "Shikara rides in the late afternoon rather than after dark.",
          "Morning visits to the old city with a guide.",
          "Trusting your instincts and moving on politely if a situation feels uncomfortable.",
        ],
      },
    ],
    faqs: [
      { q: "Is Kashmir safe for solo female travellers?", a: "Many women travel solo in Kashmir comfortably. Stay in well-reviewed places, use trusted taxis, dress modestly and check travel updates." },
      { q: "What should women wear in Kashmir?", a: "Modest clothing: long sleeves, loose trousers or long skirts, and a scarf for shrines and mosques." },
      { q: "Is a houseboat safe for a solo woman?", a: "Family-run Deluxe houseboats with good reviews from solo women travellers are a popular, welcoming choice." },
      { q: "What is the emergency number in Kashmir?", a: "112, India's national emergency number." },
    ],
  },
  {
    slug: "kashmir-trip-with-friends",
    title: "Kashmir Trip with Friends: A 6-Day Plan, Adventure Add-Ons and Group Tips",
    description: "Plan a Kashmir trip with friends: a 6-day plan with Gulmarg, Sonamarg and Pahalgam, rafting, ATVs, skiing and treks, splitting costs, group cabs and stays.",
    category: "Adventure",
    destination: "kashmir",
    date: DATE,
    intro:
      "Kashmir is a great trip for a group of friends: snow and the Gondola in Gulmarg, rafting in Pahalgam and Sonamarg, ATVs and skiing in winter, treks in summer and evenings on houseboats. A 6-day plan covers the classics with room for adventure. Groups save by sharing a tempo traveller or two Innovas, taking a whole houseboat, and booking activities together.",
    sections: [
      {
        h: "6-day plan",
        days: [
          "Arrive in Srinagar. Take a whole houseboat for the group; sunset shikara.",
          "Srinagar: Mughal gardens, old city and Lal Chowk food; evening on Boulevard Road.",
          "Gulmarg: Gondola, ATVs or sledging in winter, pony rides or a hike in summer.",
          "Sonamarg: Thajiwas Glacier, rafting on the Sindh in summer.",
          "Pahalgam: Betaab and Aru Valleys, rafting on the Lidder, a bonfire evening.",
          "Return to Srinagar and fly home.",
        ],
      },
      {
        h: "Adventure add-ons",
        list: [
          "River rafting: Lidder in Pahalgam and Sindh near Sonamarg, about May to September.",
          "Skiing and snowboarding: Gulmarg from December to March.",
          "ATVs and snow scooters: Gulmarg.",
          "Treks: Kashmir Great Lakes, Tarsar Marsar, or day hikes to Kolahoi viewpoints from Aru.",
          "Paragliding: tandem flights at Astanmarg and Sonamarg in good weather.",
          "Camping: riverside camps in Gurez or Pahalgam in summer.",
        ],
      },
      {
        h: "Group transport and stays",
        p: [
          "For 6 to 7 friends, an Innova or two sedans; for 9 to 17, a tempo traveller or Urbania. Kashmir cabs are priced per vehicle, so the cost per person drops with a bigger group. Book a whole houseboat for the group, and large rooms or cottages in Pahalgam and Gulmarg. Remember that in Pahalgam and Sonamarg, sightseeing points are reached by union taxis.",
        ],
      },
      {
        h: "Splitting costs fairly",
        list: [
          "Agree the budget before booking, so hotel and cab choices suit everyone.",
          "Book a group package with a single invoice, then split it.",
          "Keep a shared kitty for union taxis, ponies, tips and snacks.",
          "Let people opt in or out of paid activities like rafting, skiing and ATVs.",
        ],
      },
      {
        h: "Best time for a friends' trip",
        list: [
          "Winter (December to February): snow, skiing and bonfires.",
          "Spring (March to May): tulips, mild weather and snow on the hills.",
          "Summer (June to August): rafting, treks and camping.",
          "Autumn (September to November): clear skies, golden chinars and quieter roads.",
        ],
      },
      {
        h: "Group etiquette in Kashmir",
        list: [
          "Keep music low in houseboats and residential areas.",
          "Dress modestly in towns and at shrines.",
          "Alcohol is not widely available and drinking in public is frowned upon.",
          "Respect local rules at union taxi stands and pony points.",
          "Carry your trash back from meadows and camps.",
        ],
      },
    ],
    faqs: [
      { q: "What is the best Kashmir itinerary for friends?", a: "Six days with Srinagar, Gulmarg, Sonamarg and Pahalgam, adding rafting, ATVs or skiing depending on the season." },
      { q: "Which vehicle should a group of friends book?", a: "An Innova for up to six or seven, a tempo traveller for 9 to 17." },
      { q: "Is Kashmir good for adventure with friends?", a: "Yes: skiing, rafting, ATVs, treks, paragliding and camping, depending on the season." },
      { q: "Is alcohol available in Kashmir?", a: "It is limited, mostly in some hotels and licensed shops in Srinagar. Drinking in public is frowned upon." },
    ],
  },
  {
    slug: "sim-card-and-mobile-network-in-kashmir",
    title: "Which SIM Card Works in Kashmir? Prepaid vs Postpaid, Networks and Internet",
    description: "Which SIM works in Kashmir and Ladakh: why prepaid from other states does not work, postpaid on Jio, Airtel and BSNL, local prepaid rules, data and coverage gaps.",
    category: "Planning",
    destination: "kashmir",
    date: DATE,
    intro:
      "Prepaid SIM cards from outside Jammu and Kashmir do not work in J&K or Ladakh: they stop as soon as you enter. Postpaid connections from Jio, Airtel and BSNL work across the valley, with Vi patchier. If you only have a prepaid SIM, switch to postpaid before you travel, or buy a local prepaid SIM, which needs ID and local verification. Expect weak or no signal in Gurez, beyond Sonamarg and in parts of Pahalgam's valleys.",
    sections: [
      {
        h: "Prepaid vs postpaid",
        p: [
          "Because of security rules, prepaid connections issued outside J&K do not roam into the region, and this also applies in Ladakh. Postpaid connections roam normally. This is the most common surprise for visitors, so check your plan before you leave. Most operators let you convert a prepaid number to postpaid online or in a store; do it at least a few days before travel.",
        ],
      },
      {
        h: "Networks",
        list: [
          "Jio: wide coverage in towns and on main routes, with good 4G and 5G in Srinagar.",
          "Airtel: strong in Srinagar and the main tourist areas.",
          "BSNL: the widest reach in remote areas, including some parts of Gurez and Ladakh, though data can be slow.",
          "Vi: patchier coverage outside towns.",
        ],
      },
      {
        h: "Buying a local prepaid SIM",
        p: [
          "You can buy a J&K prepaid SIM from operator stores in Srinagar with your ID and photos. Verification rules are stricter than elsewhere and activation can take time, so it is not always practical for a short trip. Foreign visitors need their passport and visa and may face more checks. Ask your hotel to help with a store visit if you need one.",
        ],
      },
      {
        h: "Where signal is weak",
        list: [
          "Gurez and the Razdan Pass road.",
          "Beyond Sonamarg towards Zojila and Drass.",
          "Parts of Aru, Betaab and Chandanwari in Pahalgam.",
          "High meadows such as Doodhpathri and Yusmarg.",
          "In Ladakh, Nubra, Pangong and Tso Moriri have limited coverage, mostly on postpaid.",
        ],
      },
      {
        h: "Wi-Fi and staying connected",
        p: [
          "Most hotels and many houseboats in Srinagar offer Wi-Fi, though speeds vary. In the hill stations, Wi-Fi is less reliable. Download offline maps and your booking documents before you leave Srinagar, carry a power bank, and tell family when you will be out of signal on remote days.",
        ],
      },
      {
        h: "International visitors",
        p: [
          "International roaming usually works on networks that partner with your home operator, but check charges. An Indian SIM bought elsewhere in India will only work in J&K if it is postpaid. Many international visitors rely on hotel Wi-Fi and a local guide's or driver's phone for coordination.",
        ],
      },
    ],
    faqs: [
      { q: "Does a Jio prepaid SIM work in Kashmir?", a: "Not if it was issued outside J&K. Only postpaid connections from other states work in J&K and Ladakh." },
      { q: "Which network is best in Kashmir?", a: "Jio and Airtel are strongest in towns and tourist areas; BSNL reaches further into remote areas." },
      { q: "Can tourists buy a local SIM in Kashmir?", a: "Yes, with ID and verification at operator stores, though activation can take time." },
      { q: "Does mobile internet work in Gurez?", a: "Coverage is limited and mostly on postpaid. Expect weak or no data in parts of the valley." },
    ],
  },
];

const MORE: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {};
for (const p of KASHMIR_CULTURE) {
  const m = MORE[p.slug];
  if (m) { p.sections = [...p.sections, ...m.sections]; p.faqs = [...p.faqs, ...m.faqs]; }
}

const EXTRA_1: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "kashmiri-wazwan-guide": {
    sections: [
      { h: "A short history of wazwan", p: ["By tradition, wazwan is traced to the late 14th and 15th centuries, when cooks from Samarkand and Central Asia are said to have settled in Kashmir after Timur's invasion of India in 1398, shaping its court cuisine. Over centuries the cooking was refined by Kashmiri wazas into the feast known today, with its own vocabulary, ritual and order of dishes. It is now central to Kashmiri identity: a wedding is often judged by the quality of its wazwan, and families plan the menu months ahead with their chosen waza.", "The word itself joins waza, the cook, and wan, a shop or spread, so wazwan means roughly the cook's spread. The feast is as much about hospitality as food: guests are served generously, and hosts take pride in sending every guest home full."] },
      { h: "Planning a wazwan meal on your trip", p: ["If you want a proper wazwan experience, plan it for your last evening in Srinagar, when you are not driving early the next day. A set trami meal is designed for four, so couples can ask for a smaller version or share with another pair. Order in advance at well-known restaurants for a full spread, and tell them if anyone in your group prefers mild dishes: yakhni, aab gosh and gushtaba are milder than rogan josh and marchwangan korma."] },
    ],
    faqs: [
      { q: "Is wazwan very spicy?", a: "Some dishes like marchwangan korma and rogan josh are rich and red, but Kashmiri chilli is more about colour than heat. Yakhni, aab gosh and gushtaba are mild and fragrant." },
    ],
  },
  "kashmiri-kahwa-noon-chai-and-bakeries": {
    sections: [
      { h: "Making kahwa at home", p: ["To make kahwa for four, bring about four cups of water to the boil with a small stick of cinnamon and three or four crushed green cardamom pods, and simmer for a few minutes. Add a few strands of saffron and about two teaspoons of Kashmiri green tea leaves, steep for two to three minutes and strain. Serve with a little sugar or honey and slivered almonds in each cup. Good saffron is the key: buy it from a trusted shop in Srinagar or Pampore.", "Noon chai is harder to make at home, because the tea must be boiled and aerated for a long time to develop its colour. Many travellers bring back the special tea leaves and learn the method from their houseboat or homestay host."] },
      { h: "Tea and bread through the day", p: ["A Kashmiri day often starts with noon chai and girda or lavasa at dawn, kahwa after lunch, and noon chai again in the afternoon with kulcha or bakery biscuits. In winter, kangris and samovars come out, and tea is served constantly to visitors. Accepting a cup of tea when it is offered is a simple way to respond to Kashmiri hospitality."] },
    ],
    faqs: [
      { q: "Is kahwa caffeinated?", a: "Yes, lightly, because it is made with green tea. The spices and saffron give it most of its flavour." },
    ],
  },
  "kashmir-shopping-handicrafts-guide": {
    sections: [
      { h: "How long crafts take, and why it matters", p: ["Understanding the time behind a piece helps you judge price. A hand-embroidered sozni shawl can take weeks to months, a Kani shawl several months on the loom, and a fine silk carpet a year or more for a team of weavers. Papier mache boxes pass through several hands: one makes the base from paper pulp, another smooths and prepares it, and a painter adds the design with fine brushes. Pieces that seem too cheap for the work involved usually are not what they claim to be."] },
      { h: "Shopping on a package tour", p: ["On many Kashmir trips, drivers and shikara boatmen suggest particular shops. There is nothing wrong with visiting them, but you are under no obligation to buy, and it is fair to compare with the Government Arts Emporium or other established shops before deciding. Set a budget, ask for written receipts with materials and origin for expensive items, and pay by card or bank transfer for large purchases so you have a record."] },
    ],
    faqs: [
      { q: "Can I ship a carpet home from Kashmir?", a: "Yes. Established carpet dealers ship within India and abroad. Ask for written details of insurance, delivery time and any customs duties before you pay." },
    ],
  },
  "old-srinagar-heritage-walk": {
    sections: [
      { h: "More stops for a longer walk", p: ["With a full day, add Hari Parbat fort and the shrine of Makhdoom Sahib on its slopes, reached by steps or a short drive, with views over the city and Dal Lake. Nearby, the Gurdwara Chatti Patshahi and the Sharika Devi temple share the hill, reflecting Srinagar's mixed heritage. Naqshband Sahib, another wooden shrine, and Aali Masjid, one of the old city's larger mosques, are also worth seeing. End at Badamwari garden in spring for almond blossom."] },
      { h: "Why the old city matters", p: ["The old city holds most of Srinagar's history: its wooden architecture, its Sufi shrines, its crafts and its markets. Many of Kashmir's crafts, including papier mache, copperwork and shawl weaving, are still practised in its lanes. Walking here gives a sense of daily life that the Boulevard and hotels do not, and many visitors say it is the most memorable part of their stay in Srinagar."] },
    ],
    faqs: [
      { q: "Can I combine the old city with the Mughal gardens on the same day?", a: "Yes. Do the old city in the morning and the Mughal gardens along Dal Lake in the afternoon." },
    ],
  },
  "kashmir-festivals-guide": {
    sections: [
      { h: "The saffron harvest at Pampore", p: ["Every autumn, usually from late October into early November, the karewa plateaus around Pampore turn purple as the saffron crocus flowers. Families pick the flowers at dawn, before the sun opens them fully, and separate the red stigmas by hand at home. Visitors on the Pahalgam road can stop at the fields in the early morning and buy fresh saffron from growers' shops. The harvest lasts only a few weeks, so it is a special reason to plan an autumn trip."] },
      { h: "Kheer Bhawani in more detail", p: ["The Kheer Bhawani temple at Tulmulla, in Ganderbal district, is built in the middle of a sacred spring whose water is said to change colour. On Jyeshtha Ashtami, thousands of Kashmiri Pandits, including many who now live outside the valley, gather to offer kheer (rice pudding) and milk to the goddess Ragnya Devi. The mela is a moving and important occasion, and visitors are welcome to attend respectfully."] },
      { h: "Amarnath Yatra and travel", p: ["The Amarnath Yatra draws pilgrims to the cave shrine above Pahalgam and Baltal every July and August. It needs advance registration, a health certificate and fixed dates. For other travellers, the yatra means tighter security, convoy timings and busier hotels on the Pahalgam and Sonamarg roads. If you are not on the yatra, plan Pahalgam and Sonamarg days with extra time, or travel in June or September."] },
    ],
    faqs: [
      { q: "Does the Amarnath Yatra affect tourist travel?", a: "Yes. In July and August, security, convoy timings and busier hotels affect the Pahalgam and Sonamarg roads. Allow extra time." },
    ],
  },
  "vegetarian-and-jain-food-in-kashmir": {
    sections: [
      { h: "Vegetarian food in each town", p: ["Srinagar has the widest choice, from pure vegetarian North Indian restaurants near Dal Gate to Kashmiri vegetarian dishes in hotels and Pandit-style cooking at specialist restaurants. Gulmarg's hotels serve vegetarian buffets and thalis, though choices are fewer in the evening. Pahalgam has several vegetarian dhabas in the main market alongside hotel restaurants. Sonamarg's dhabas serve dal, rajma, rice and rotis. In Gurez, homestays cook simple vegetarian food with local vegetables and potatoes when asked.", "On long drives, roadside dhabas on the Jammu highway and on the Pahalgam and Sonamarg roads serve rajma chawal, dal and vegetable curries, and tea stalls sell biscuits and bakery breads."] },
      { h: "Vegetarian snacks and sweets", p: ["Try nadru monje (lotus stem fritters) from street stalls, Kashmiri kulcha and girda from bakeries, walnut fudge and macaroons from Srinagar's bakeries, and phirni, a creamy rice pudding set in clay bowls. In winter, look for kahwa and dry fruit everywhere. Many bakery cakes contain egg, so ask if that matters to you."] },
    ],
    faqs: [
      { q: "Do houseboats serve vegetarian food?", a: "Yes. Houseboat cooks prepare vegetarian meals on request, including Kashmiri dishes like dum aloo and haak. Tell them when you book." },
    ],
  },
  "kashmir-vs-ladakh": {
    sections: [
      { h: "Getting there compared", p: ["Srinagar has direct flights from many Indian cities and is linked by the Vande Bharat from Katra, so reaching Kashmir is quick in every season. Leh has flights mainly from Delhi and a few other cities, and two seasonal roads: from Srinagar over Zojila and from Manali over the high passes, both open roughly from May or June to October or November. In winter, Leh is reachable only by air.", "Once there, Kashmir's main sights are within 50 to 100 km of Srinagar, while Ladakh's highlights, such as Nubra, Pangong and Tso Moriri, are 150 to 250 km from Leh on high roads with permits."] },
      { h: "Food and stays compared", p: ["Kashmir offers houseboats, palace hotels, resorts and homestays, and a rich food culture from wazwan to bakeries. Ladakh has good hotels in Leh, and camps, guest houses and homestays elsewhere, with simple Ladakhi, Tibetan and North Indian food. Both have homestays that offer a real sense of local life: a Kashmiri houseboat family or a Ladakhi village home."] },
    ],
    faqs: [
      { q: "Do I need permits for Kashmir or Ladakh?", a: "Indian visitors need no permit for the main Kashmir tourist areas. Ladakh's Nubra, Pangong and Tso Moriri need inner line permits; foreign nationals need a Protected Area Permit." },
    ],
  },
  "solo-female-travel-in-kashmir": {
    sections: [
      { h: "A first solo itinerary", p: ["A comfortable first solo trip is six days with Srinagar as the base. Spend two nights on a family-run houseboat and two in a Boulevard Road or Rajbagh hotel, with day trips to Gulmarg and Sonamarg with the same trusted driver. Spend the last two nights in Pahalgam at a well-reviewed hotel near the main market, with a union taxi for the valleys arranged by the hotel. This keeps drives in daylight and gives you hosts who know where you are each day."] },
      { h: "Meeting other travellers", p: ["Shared taxis from Srinagar stands, fixed-departure group tours, trekking groups for the Great Lakes trek in summer, and guesthouses near Dal Gate are good places to meet other travellers. Many solo women join a group for a trek or a Ladakh extension and travel independently for the rest of the trip. Online communities of women travellers also share recent experiences and recommendations."] },
      { h: "Health and comfort", p: ["Carry a basic medical kit, any regular medicines and sanitary products, which are available in Srinagar but harder to find in Gurez or Sonamarg. Keep warm layers handy even in summer. If you plan treks, go with a registered trekking company and tell your hotel your route and return date."] },
    ],
    faqs: [
      { q: "Can a solo woman do the Kashmir Great Lakes trek?", a: "Yes, with a registered trekking company in a group. Many solo women join fixed-departure groups from July to September." },
    ],
  },
  "kashmir-trip-with-friends": {
    sections: [
      { h: "Winter trip with friends", p: ["A winter trip with friends is all about Gulmarg. Spend two nights there near the Gondola, take beginner ski lessons with a registered instructor, try ATVs and snow scooters, and end the days around a bukhari with kahwa. Add a day in Pahalgam for snowy pine forests along the Lidder, and a Srinagar houseboat night for a misty lake morning. Book heated rooms and a vehicle with chains, and keep one buffer day for snow."] },
      { h: "Summer trip with friends", p: ["In summer, add adventure: raft the Lidder in Pahalgam and the Sindh near Sonamarg, hike to Khilanmarg from Gulmarg, take a pony to Thajiwas, and camp by the river in Pahalgam or Gurez. Fit friends can add the seven-day Kashmir Great Lakes trek from July to September, or the shorter Tarsar Marsar trek from Aru. Long daylight means early starts and late returns are easy."] },
      { h: "Budget friends' trip", p: ["To keep costs down, use Srinagar as the base for Gulmarg, Sonamarg and Doodhpathri day trips, share a single vehicle, take a lower category houseboat for the group, eat at local restaurants and travel in March, October or November when rates fall. A budget group package can bundle all of this at agent rates."] },
    ],
    faqs: [
      { q: "How many days is enough for a friends' trip to Kashmir?", a: "Five to seven days covers Srinagar, Gulmarg, Sonamarg and Pahalgam with time for rafting, skiing or a short trek." },
    ],
  },
  "sim-card-and-mobile-network-in-kashmir": {
    sections: [
      { h: "Switching from prepaid to postpaid before your trip", p: ["Most operators let you convert a prepaid number to postpaid through their app, website or a store, keeping the same number. The switch usually takes from a few hours to a couple of days, and may need a fresh KYC check. Do it at least a few days before you fly. If that is not possible, ask a travel companion with a postpaid connection to share a hotspot, and rely on hotel Wi-Fi.", "Some families take one postpaid number for the group and keep others on Wi-Fi. Make sure the driver and hotel have the working number."] },
      { h: "Payments and connectivity", p: ["UPI and cards work widely in Srinagar, Gulmarg and Pahalgam, but need a data connection. In areas with weak signal, such as Gurez, Sonamarg's upper valley and the high meadows, carry cash for ponies, union taxis, food and homestays. Download offline maps of the valley, and save hotel and driver numbers on paper as well as on your phone."] },
      { h: "Ladakh connectivity", p: ["The same rule applies in Ladakh: only postpaid connections from outside the region work. Leh has good 4G on Jio, Airtel and BSNL. Nubra, Pangong and Tso Moriri have limited signal, mainly on BSNL and Jio postpaid, and some camps offer Wi-Fi via satellite. Expect to be offline for parts of your Ladakh trip."] },
    ],
    faqs: [
      { q: "Does Airtel prepaid work in Kashmir?", a: "Not if it was issued outside J&K. Switch to postpaid before travelling, or buy a local SIM." },
    ],
  },
};
for (const p of KASHMIR_CULTURE) {
  const e = EXTRA_1[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_2: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "kashmiri-kahwa-noon-chai-and-bakeries": {
    sections: [

    ],
    faqs: [
      { q: "What do Kashmiris eat for breakfast?", a: "Usually noon chai with fresh bakery bread such as girda, lavasa or kulcha, sometimes with butter. In winter, harissa is a special breakfast in the old city." },
    ],
  },
  "kashmir-shopping-handicrafts-guide": {
    sections: [

    ],
    faqs: [
      { q: "Is bargaining normal in Kashmir shops?", a: "In markets and many private shops, polite bargaining is normal. Government emporiums have fixed prices. Compare a few shops before buying expensive items." },
    ],
  },
  "old-srinagar-heritage-walk": {
    sections: [
      { h: "Food stops on the walk", p: ["Stop for noon chai and fresh bread at a kandur bakery in the lanes, try nadru monje (lotus stem fritters) from a street stall, and in winter look for harissa shops that open at dawn. Small sweet shops near the Jhelum sell traditional Kashmiri sweets. Carry small change, as many stalls only take cash."] },
    ],
    faqs: [
      { q: "Is the old city open every day?", a: "Usually yes, but it can be closed for events or on short notice. Ask your hotel or driver on the day." },
    ],
  },
  "kashmir-festivals-guide": {
    sections: [
      { h: "Winter traditions during Chillai Kalan", p: ["Chillai Kalan, the 40 coldest days of winter from December 21 to January 31, is a season with its own traditions. Kashmiris wear thick pherans and carry kangris, small clay pots of hot embers in wicker baskets, under them for warmth. Harissa shops open before dawn, homes keep bukharis burning, and dried vegetables stored in autumn come out for winter meals. For visitors, it is the season of snow in Gulmarg, frozen fountains in the Mughal gardens and misty mornings on Dal Lake."] },
    ],
    faqs: [

    ],
  },
  "vegetarian-and-jain-food-in-kashmir": {
    sections: [
      { h: "A vegetarian food day in Srinagar", p: ["Start with noon chai and kulcha from a bakery. Mid-morning, have kahwa in a craft shop or houseboat. For lunch, order a Kashmiri vegetarian thali with dum aloo, nadru yakhni, haak and rajma with rice. In the afternoon, try nadru monje from a stall on Boulevard Road and walnut fudge from a bakery. For dinner, ask your hotel for chaman kaliya and modur pulao, followed by phirni in a clay bowl."] },
      { h: "Eating vegetarian on the Pahalgam and Sonamarg days", p: ["On the Pahalgam drive, Pampore and Awantipora have tea stalls and dhabas with rajma, dal and vegetable dishes, and Pahalgam's main market has several pure vegetarian restaurants. On the Sonamarg day, the dhabas at Gund and Kullan serve simple vegetarian meals by the river. For Gurez and other remote trips, tell your homestay in advance so they can cook vegetarian or Jain meals."] },
    ],
    faqs: [
      { q: "Are there pure vegetarian restaurants in Srinagar?", a: "Yes, especially around Dal Gate, Boulevard Road and Lal Chowk, serving North Indian, South Indian and Kashmiri vegetarian food." },
    ],
  },
  "kashmir-vs-ladakh": {
    sections: [

    ],
    faqs: [
      { q: "Is Ladakh colder than Kashmir?", a: "At night, yes, because of altitude. Summer days in Ladakh can be warm in the sun, but nights at Pangong and Tso Moriri drop close to freezing even in July." },
      { q: "Which is better for photography?", a: "Both. Kashmir for lakes, gardens, autumn chinars and snow; Ladakh for vast landscapes, monasteries and night skies." },
    ],
  },
  "solo-female-travel-in-kashmir": {
    sections: [
      { h: "Choosing the right season", p: ["For a first solo trip, April to June and September to October are easiest: long days, comfortable weather and plenty of other travellers. Winter is beautiful but demands more planning, with shorter days, snow on roads and fewer people around in the evenings. During the Amarnath Yatra in July and August, the Pahalgam and Sonamarg roads are busier and more controlled, so allow extra time."] },
      { h: "Money and documents", p: ["Carry two cards from different banks, some cash in small notes, a photocopy of your ID and your hotel's address written down. Keep digital copies of bookings in your email. Use ATMs in Srinagar and the main towns during the day. If you lose a card or phone, your hotel can help you contact your bank and the local police station."] },
    ],
    faqs: [

    ],
  },
  "kashmir-trip-with-friends": {
    sections: [
      { h: "Where to stay as a group", p: ["In Srinagar, a whole Deluxe houseboat with three or four bedrooms gives a group its own space and a shared sitting room for evenings. In Gulmarg, cottages and family rooms near the Gondola suit groups in ski season. In Pahalgam, riverside hotels with family rooms or a group of cottages work well, and some camps by the Lidder take groups in summer. Book early: rooms for large groups are limited in peak months."] },
      { h: "Planning the details", p: ["Make one person the contact for the driver and the agent. Share a simple day-by-day plan with everyone, including start times. Keep IDs for all members handy for checkposts on the Gurez and Zojila roads. Agree how you will handle photos, music and late nights so everyone, including hosts, has a good time."] },
    ],
    faqs: [

    ],
  },
  "sim-card-and-mobile-network-in-kashmir": {
    sections: [
      { h: "Network by destination", p: ["Srinagar city has strong 4G and 5G on Jio and Airtel, and good BSNL coverage. Gulmarg has decent coverage around the meadow and Gondola base, weaker on Phase 2. Pahalgam town has good signal, but Aru, Betaab and Chandanwari are patchy. Sonamarg has signal in the town that fades towards Thajiwas and Zojila. Doodhpathri and Yusmarg have limited coverage, and Gurez is mostly BSNL with some Jio and Airtel in Dawar. Plan any calls or payments before you leave the main towns."] },
      { h: "If your phone stops working on arrival", p: ["If your phone shows no service as you land in Srinagar, your connection is probably prepaid from outside J&K. Connect to airport or hotel Wi-Fi and call your operator through the app to ask about converting to postpaid, or ask your hotel for help buying a local SIM. Share your hotel's number with family in the meantime."] },
    ],
    faqs: [

    ],
  },
};
for (const p of KASHMIR_CULTURE) {
  const e = EXTRA_2[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_3: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "kashmir-shopping-handicrafts-guide": {
    sections: [

    ],
    faqs: [
      { q: "What is the best souvenir from Kashmir under a small budget?", a: "Kashmiri saffron in a small sealed pack, kahwa mix, papier mache boxes, walnut wood coasters and dry fruit are good-value gifts that pack easily." },
    ],
  },
  "old-srinagar-heritage-walk": {
    sections: [

    ],
    faqs: [
      { q: "What should I wear for the old city walk?", a: "Comfortable walking shoes and modest clothes. Women should carry a scarf to cover their heads at mosques and shrines." },
    ],
  },
  "kashmir-festivals-guide": {
    sections: [

    ],
    faqs: [
      { q: "Are there festivals in Kashmir in winter?", a: "Winter brings Chillai Kalan traditions, Christmas and New Year celebrations in Gulmarg and Srinagar, and Herath (Shivratri) for Kashmiri Pandits." },
    ],
  },
  "kashmir-vs-ladakh": {
    sections: [

    ],
    faqs: [
      { q: "Which is easier to reach in winter, Kashmir or Ladakh?", a: "Kashmir, by flights and the Vande Bharat from Katra. Leh is reachable only by air in winter, when the roads close." },
    ],
  },
  "solo-female-travel-in-kashmir": {
    sections: [

    ],
    faqs: [
      { q: "Are union taxis safe for solo women?", a: "Union taxis in Pahalgam and Sonamarg are registered and used by thousands of visitors daily. Ask your hotel to book one and share the driver's details." },
    ],
  },
  "kashmir-trip-with-friends": {
    sections: [

    ],
    faqs: [
      { q: "Can a group of friends stay on a houseboat?", a: "Yes. Booking a whole Deluxe houseboat with three or four bedrooms is popular with groups and gives you a private sitting room and deck." },
      { q: "What is the best season for a friends' trip with adventure?", a: "June to September for rafting and treks, and December to March for skiing and snow activities in Gulmarg." },
    ],
  },
  "sim-card-and-mobile-network-in-kashmir": {
    sections: [

    ],
    faqs: [
      { q: "Does BSNL prepaid work in Kashmir?", a: "BSNL prepaid issued outside J&K does not work there either. Only postpaid connections from other states roam into J&K and Ladakh." },
    ],
  },
};
for (const p of KASHMIR_CULTURE) {
  const e = EXTRA_3[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}

const EXTRA_4: Record<string, { sections: BlogSection[]; faqs: BlogPost["faqs"] }> = {
  "kashmir-shopping-handicrafts-guide": {
    sections: [

    ],
    faqs: [
      { q: "Which Kashmiri handicrafts are best to buy?", a: "Pashmina and Kani shawls, hand-knotted carpets, papier mache, walnut wood carving, copperware and sozni embroidery, plus GI-tagged Kashmiri saffron." },
    ],
  },
  "kashmir-festivals-guide": {
    sections: [

    ],
    faqs: [
      { q: "What are the main Kashmiri festivals?", a: "Eid-ul-Fitr and Eid-ul-Adha, the Kheer Bhawani mela, Herath (Shivratri), Navroz, the tulip festival in spring and the saffron harvest in autumn." },
    ],
  },
};
for (const p of KASHMIR_CULTURE) {
  const e = EXTRA_4[p.slug];
  if (e) { p.sections = [...p.sections, ...e.sections]; p.faqs = [...p.faqs, ...e.faqs]; }
}
