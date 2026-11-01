import type { GuideContent } from "@/lib/locations";

// Food, culture and heritage sections for Himachal and Ladakh (destination
// and city level). Merged into base content in ./index.ts.
// Rules: fact-based, no em dashes; festival dates follow lunar calendars, so
// months are given, never fixed dates.

type Supplement = Partial<GuideContent>;

export const CULTURE_DESTINATIONS: Record<string, Supplement> = {
  kashmir: {
    sections: {
      "local-food": {
        intro:
          "Kashmiri food is built around slow-cooked meat, rice, yoghurt, dried spices and saffron, with a strong vegetarian tradition among Kashmiri Pandits. Its centrepiece is wazwan, the multi-course feast served at weddings and celebrations, but everyday food (haak greens, nadru lotus stem, Kashmiri bread from the local baker) is just as much part of a visit.",
        blocks: [
          {
            heading: "Wazwan: the Kashmiri feast",
            body: "Wazwan is cooked overnight by hereditary chefs called wazas and served on a large copper plate, the trami, shared by four guests. A traditional wazwan can run to more than 30 courses. Its best-known dishes are rista (meatballs in a red gravy), gushtaba (soft meatballs in a yoghurt gravy, served last), rogan josh, tabak maaz (fried lamb ribs) and yakhni (lamb in a yoghurt and fennel gravy). Many Srinagar restaurants serve a short wazwan thali.",
          },
          {
            heading: "Famous Kashmiri dishes to try",
            items: [
              "Rogan josh: lamb in a red gravy coloured with Kashmiri chilli and cockscomb flower (mawal)",
              "Yakhni: lamb or chicken cooked in yoghurt with fennel and cardamom",
              "Gushtaba and rista: pounded-meat balls in yoghurt and red gravies",
              "Haak: collard greens cooked simply with mustard oil and chilli, eaten with rice",
              "Nadru yakhni and nadru monje: lotus stem from the Dal and Anchar lakes in a yoghurt gravy, or fried as fritters",
              "Kashmiri dum aloo: small potatoes in a fennel and chilli gravy",
              "Harissa: a slow-cooked mutton dish eaten for breakfast in Srinagar in winter",
              "Modur pulav: sweet saffron rice with dry fruit",
            ],
          },
          {
            heading: "Kahwa, noon chai and Kashmiri bread",
            items: [
              "Kahwa: green tea with saffron, cardamom, cinnamon and almonds",
              "Noon chai (sheer chai): pink salted tea with milk, drunk at breakfast and in the afternoon",
              "Breads from the local kandur (baker): girda in the morning, lavasa, kulcha and bakarkhani",
            ],
          },
          {
            heading: "Saffron, walnuts and dry fruit",
            body: "Kashmiri saffron from the Pampore area south of Srinagar has a GI tag; the flowers are harvested around October and November. Walnuts, almonds, apricots and apples from the valley are sold in Srinagar markets. Buy saffron from government emporiums or established shops and check the GI label.",
          },
        ],
        faqs: [
          { q: "What is the famous food of Kashmir?", a: "Wazwan dishes such as rogan josh, rista, gushtaba and yakhni, plus haak, nadru (lotus stem), harissa in winter, and drinks like kahwa and noon chai." },
          { q: "Is vegetarian food available in Kashmir?", a: "Yes. Kashmiri Pandit cooking is largely vegetarian, and dishes like dum aloo, haak, nadru and rajma are easy to find alongside North Indian vegetarian food." },
          { q: "What is wazwan?", a: "The traditional multi-course Kashmiri feast cooked by hereditary chefs (wazas) for weddings and celebrations, served on a shared copper plate called a trami." },
        ],
      },
      "culture-and-heritage": {
        intro:
          "Kashmir's culture blends Sufi Islam, Hindu and Buddhist history, Persian and Central Asian influences and centuries of craft. Kashmiri (Koshur) is the language of the valley, with Urdu, Hindi, Dogri in Jammu and English widely used. Shrines, Mughal gardens, wooden mosques and ancient temple ruins sit within a short drive of Srinagar.",
        blocks: [
          {
            heading: "Heritage sites in Kashmir",
            items: [
              "The Mughal gardens of Srinagar: Shalimar Bagh (built for Emperor Jahangir), Nishat Bagh, Chashme Shahi and Pari Mahal",
              "Jamia Masjid in Srinagar's old city, with a courtyard surrounded by hundreds of deodar wood pillars",
              "Khanqah-e-Moula (Shah-e-Hamdan) on the Jhelum, a carved and painted wooden shrine",
              "Hazratbal Shrine on the banks of Dal Lake",
              "Shankaracharya Temple on the hill above Dal Lake",
              "The Martand Sun Temple ruins near Anantnag, built in the 8th century",
              "Kheer Bhawani temple at Tulmulla, home of an annual mela on Jyeshtha Ashtami",
            ],
          },
          {
            heading: "Kashmiri crafts",
            items: [
              "Pashmina and Kani shawls, both GI-tagged; Kani shawls are woven with small wooden bobbins",
              "Papier-mache boxes and ornaments, hand-painted in Srinagar workshops",
              "Walnut wood carving and khatamband, the geometric wooden ceilings of old houses and houseboats",
              "Hand-knotted Kashmiri carpets and crewel embroidery",
            ],
          },
          {
            heading: "Festivals and traditions",
            items: [
              "The tulip festival at the Indira Gandhi Memorial Tulip Garden, around late March to April",
              "Eid ul-Fitr and Eid ul-Adha, celebrated across the valley",
              "Navroz, the spring new year, in March",
              "The Kheer Bhawani mela at Tulmulla, usually in May or June",
              "The Amarnath Yatra to the cave shrine, usually July and August",
              "Sufiana kalam (Sufi music) and the Rouf folk dance at celebrations",
              "The pheran (long woollen gown) and kangri (wicker fire pot) in winter",
            ],
          },
          {
            heading: "Customs to respect in Kashmir",
            items: [
              "Dress modestly, especially in the old city and at shrines and mosques",
              "Remove shoes at shrines; women usually cover their heads, and some shrines limit entry to inner areas",
              "Ask before photographing people, and inside shrines",
              "During Ramzan, avoid eating and drinking in public places in the daytime as a courtesy",
            ],
          },
        ],
        faqs: [
          { q: "What language is spoken in Kashmir?", a: "Kashmiri (Koshur) in the valley, with Urdu, Hindi and English widely understood. Dogri is spoken in the Jammu region." },
          { q: "What should I buy in Kashmir?", a: "Pashmina and Kani shawls, papier-mache, walnut wood carving, carpets, saffron from Pampore, dry fruit and kahwa. Buy from government emporiums or established shops and check GI labels." },
        ],
      },
    },
  },
  himachal: {
    sections: {
      "local-food": {
        intro:
          "Himachali food is simple mountain cooking built on wheat, rice, lentils, rajma, yoghurt and ghee, with Tibetan dishes in Lahaul, Spiti, Kinnaur and McLeodganj. The best way to taste it is a dham, the traditional feast served on leaf plates at weddings and festivals.",
        blocks: [
          {
            heading: "Himachali dham: the traditional feast",
            body: "A dham is cooked by hereditary cooks called botis and served in courses on leaf plates while guests sit on the floor. A typical Kangra or Chamba dham includes rice, moong dal, rajma, madra, khatta and a sweet rice dish called mittha. Some restaurants in Shimla, Mandi, Kangra and Manali serve a dham thali.",
          },
          {
            heading: "Famous Himachali dishes",
            items: [
              "Madra: chickpeas or beans slow-cooked in yoghurt and spices, a Chamba and Kangra speciality",
              "Siddu: steamed wheat bread stuffed with walnut, poppy seed or lentils, from the Kullu valley",
              "Chha gosht: lamb cooked in yoghurt and gram flour",
              "Sepu vadi: lentil dumplings in a spinach gravy, from Mandi",
              "Babru: deep-fried bread stuffed with black gram",
              "Aktori: a buckwheat pancake made in Lahaul and Spiti",
              "Tudkiya bhath: spiced rice with lentils, from Chamba",
              "Chamba chukh: a fiery chilli condiment",
              "Trout from the Beas, Tirthan and Pabbar valleys",
            ],
          },
          {
            heading: "Drinks, sweets and produce from Himachal",
            items: [
              "Kangra tea, a GI-tagged tea grown around Palampur",
              "Apples from Shimla, Kullu and Kinnaur, harvested from about July to October",
              "Mittha, sweet rice with dry fruit, served at the end of a dham",
              "Butter tea, thukpa and momos in Lahaul, Spiti and the Tibetan settlements",
              "Local pickles, rhododendron squash and apple products sold across the state",
            ],
          },
        ],
        faqs: [
          { q: "What is the famous food of Himachal Pradesh?", a: "Dham (the festive feast), madra, siddu, chha gosht, sepu vadi, babru, aktori and trout, plus thukpa and momos in Lahaul, Spiti and McLeodganj." },
          { q: "Where can I eat a Himachali dham?", a: "At weddings and village festivals, and at restaurants in Shimla, Mandi, Kangra, Dharamshala and Manali that serve a dham thali." },
        ],
      },
      "culture-and-heritage": {
        intro:
          "Himachal Pradesh is often called Dev Bhoomi, the land of the gods: almost every village has its own deity, carried in a decorated palanquin to fairs and festivals. The state's people, the Paharis, speak Hindi and many Pahari dialects, while Lahaul, Spiti and Kinnaur follow Buddhist and mixed Hindu-Buddhist traditions close to Tibet's.",
        blocks: [
          {
            heading: "Festivals and fairs of Himachal Pradesh",
            items: [
              "Kullu Dussehra: a week-long festival at Dhalpur maidan beginning on Vijayadashami (October), when village deities gather around Raghunath ji",
              "Mandi Shivratri: an international fair in February or March, with more than 200 deities brought to Mandi",
              "Minjar Mela in Chamba: held in July or August around the monsoon",
              "Lavi Fair in Rampur: a traditional trade fair held in November",
              "Losar: the Tibetan new year in Lahaul, Spiti and McLeodganj, in February or March",
              "Phulaich: the flower festival of Kinnaur, held in autumn",
              "Manali Winter Carnival in January",
            ],
          },
          {
            heading: "Heritage sites and architecture",
            items: [
              "Masroor rock-cut temples in Kangra, carved in about the 8th century",
              "Baijnath temple near Palampur, a stone Shiva temple from the 13th century",
              "Hadimba Devi temple in Manali, a wooden pagoda-style temple from 1553",
              "Tabo Monastery in Spiti, founded in 996, with murals and stucco images",
              "Key and Dhankar monasteries in Spiti",
              "The Kalka Shimla Railway, a UNESCO World Heritage Site since 2008",
              "The Great Himalayan National Park, a UNESCO World Heritage Site since 2014",
              "Kath-kuni houses and temples built of alternating timber and stone, common in Kullu, Shimla and Kinnaur",
            ],
          },
          {
            heading: "Arts, crafts and dress",
            items: [
              "Kangra miniature paintings of the Pahari school, which flourished in the 18th century",
              "Kullu shawls, Kinnauri shawls and Chamba rumal embroidery, all GI-tagged",
              "The Himachali cap: green-banded caps in Kinnaur and colourful caps in Kullu and Shimla",
              "Nati, the group folk dance performed at fairs; a mass Kullu Nati performance holds a Guinness World Record as the largest folk dance",
            ],
          },
          {
            heading: "Customs to respect",
            items: [
              "Remove shoes before entering temples and follow local rules on leather and photography",
              "Do not touch village deities, temple walls or, in Malana, homes and residents",
              "Walk clockwise around monasteries, stupas and prayer wheels",
              "Dress modestly in villages and places of worship",
            ],
          },
        ],
        faqs: [
          { q: "Why is Himachal Pradesh called Dev Bhoomi?", a: "Because nearly every village has its own deity (devta), worshipped in a local temple and carried to fairs such as Kullu Dussehra and Mandi Shivratri." },
          { q: "What are the main festivals of Himachal Pradesh?", a: "Kullu Dussehra (October), Mandi Shivratri (February or March), Minjar Mela in Chamba (July or August), the Lavi Fair in Rampur (November) and Losar in the Buddhist regions." },
        ],
      },
    },
  },

  ladakh: {
    sections: {
      "local-food": {
        intro:
          "Ladakhi food is warming high-altitude cooking based on barley, wheat, dairy and dried vegetables, with Tibetan and Kashmiri influences. Most dishes are stews, breads and noodle soups that suit cold nights.",
        blocks: [
          {
            heading: "Ladakhi dishes to try",
            items: [
              "Thukpa: noodle soup with vegetables or meat",
              "Skyu: a stew of thumb-pressed wheat dough, vegetables and milk",
              "Chhutagi: a stew of bow-shaped pasta and vegetables",
              "Momos: steamed or fried dumplings",
              "Tingmo: soft steamed bread, eaten with stews",
              "Khambir: a thick local bread, often eaten at breakfast with butter tea",
              "Tsampa (ngamphe): roasted barley flour, a traditional staple",
            ],
          },
          {
            heading: "Ladakhi drinks and produce",
            items: [
              "Butter tea (gur gur cha): salted tea churned with butter",
              "Chhang: a local barley beer, made at home and at festivals",
              "Apricots from Ladakh, fresh in summer and dried all year",
              "Seabuckthorn juice, made from berries that grow along Ladakh's rivers",
            ],
          },
        ],
        faqs: [
          { q: "What is the famous food of Ladakh?", a: "Thukpa, skyu, chhutagi, momos, tingmo, khambir bread, butter tea, chhang and Ladakhi apricots." },
        ],
      },
      "culture-and-heritage": {
        intro:
          "Ladakh's culture is shaped by Tibetan Buddhism, old trade routes and life at high altitude. Leh and its villages are mainly Buddhist, while Kargil and Drass are mainly Muslim, and Turtuk in Nubra keeps a Balti culture. People greet each other and visitors with 'Julley'.",
        blocks: [
          {
            heading: "Monasteries and heritage of Ladakh",
            items: [
              "Hemis Monastery, home of the Hemis Tsechu festival",
              "Thiksey Monastery, built in tiers on a hill above the Indus",
              "Alchi, with temple paintings dating to around the 11th to 12th centuries",
              "Lamayuru Monastery on the Srinagar to Leh road",
              "Diskit Monastery in Nubra Valley",
              "Leh Palace, built in the 17th century by the Namgyal dynasty",
            ],
          },
          {
            heading: "Festivals of Ladakh",
            items: [
              "Hemis Tsechu: masked cham dances at Hemis Monastery in June or July",
              "Losar: the Ladakhi new year, usually in December or January",
              "Sindhu Darshan: a festival on the banks of the Indus near Leh, usually in June",
              "Ladakh Festival: cultural performances, archery and polo in Leh, usually in September",
            ],
          },
          {
            heading: "Languages, dress and traditions",
            items: [
              "Languages: Ladakhi (Bhoti), Purgi, Balti, Urdu, Hindi and English",
              "Traditional dress: the goncha robe, and the turquoise-studded perak headdress worn by women on special occasions",
              "Polo and archery are traditional sports, played at festivals",
              "Mani walls, stupas (chortens) and prayer flags mark villages and passes",
            ],
          },
          {
            heading: "Etiquette for visitors in Ladakh",
            items: [
              "Walk clockwise around stupas, mani walls and prayer wheels",
              "Dress modestly and remove shoes in monastery prayer halls",
              "Ask before photographing people and inside monasteries",
              "Carry back your plastic; water and waste are scarce at high altitude",
            ],
          },
        ],
        faqs: [
          { q: "What does 'Julley' mean in Ladakh?", a: "It is the Ladakhi greeting, used for hello, goodbye and thank you." },
          { q: "When is the Hemis festival?", a: "Hemis Tsechu falls in June or July, on dates set by the Tibetan lunar calendar. Check the year's dates before planning." },
        ],
      },
    },
  },
};

export const CULTURE_CITIES: Record<string, Supplement> = {
  manali: {
    sections: {
      "culture-and-heritage": {
        intro:
          "Manali's heritage centres on the Hadimba Devi temple (1553) in the Dhungri forest, the Manu temple in Old Manali and the Vashisht temple with its hot springs. The Dhungri Mela, Hadimba's festival, is held in May, and the Manali Winter Carnival takes place in January. Wooden kath-kuni houses still stand in Old Manali, Vashisht and Naggar, where Naggar Castle and the Roerich Art Gallery show the valley's royal and artistic past.",
      },
    },
  },
  shimla: {
    sections: {
      "culture-and-heritage": {
        intro:
          "Shimla was the summer capital of British India from 1864. Its heritage buildings include Christ Church (completed in 1857), the Gaiety Theatre (1887) and the Viceregal Lodge (1888), now the Indian Institute of Advanced Study. The Simla Agreement between India and Pakistan was signed here in 1972. Jakhu Temple, dedicated to Hanuman, stands on the town's highest hill.",
      },
    },
  },
  dharamshala: {
    sections: {
      "culture-and-heritage": {
        intro:
          "McLeodganj has been home to the Dalai Lama since 1960 and is the seat of the Central Tibetan Administration, which is why it is often called Little Lhasa. Tibetan culture is visible in the Tsuglagkhang temple, the Tibet Museum, the Tibetan Institute of Performing Arts and the Norbulingka Institute, which trains artists in thangka painting, woodcarving and metalwork. Losar, the Tibetan new year, is celebrated in February or March.",
      },
      "local-food": {
        intro:
          "Dharamshala and McLeodganj are best known for Tibetan food: momos, thukpa, thenthuk (hand-pulled noodle soup), shapale (fried meat pastries), tingmo and butter tea. Himachali dishes from the Kangra valley, such as madra and the Kangra dham, and Kangra tea from Palampur are also worth trying.",
      },
    },
  },
  "spiti-valley": {
    sections: {
      "culture-and-heritage": {
        intro:
          "Spiti follows Tibetan Buddhism. Tabo Monastery, founded in 996, is one of the oldest continuously working monasteries in the Himalaya; Key Monastery near Kaza and the cliff-top Dhankar Monastery are the other landmarks. Villages are built of mud brick with flat roofs, and Losar and monastery festivals such as the Key Gustor are the main celebrations.",
      },
      "local-food": {
        intro:
          "Food in Spiti is simple and warming: thukpa, momos, tingmo, aktori (buckwheat pancake), tsampa, butter tea and chhang. Homestays in Kaza, Kibber and Langza serve home-cooked Spitian meals, often with vegetables from their own fields.",
      },
    },
  },
  kinnaur: {
    sections: {
      "culture-and-heritage": {
        intro:
          "Kinnaur blends Hindu and Buddhist traditions: villages have both temples and gompas, and people wear the Kinnauri cap with its green velvet band and Kinnauri shawls. Kamru Fort in Sangla and the wooden temples of Kalpa and Sarahan (Bhimakali temple) show the region's kath-kuni architecture. Phulaich, the flower festival, is celebrated in autumn.",
      },
    },
  },
};
