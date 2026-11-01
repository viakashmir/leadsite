import type { GuideContent } from "@/lib/locations";

// Food, culture and heritage sections for Himachal and Ladakh (destination
// and city level). Merged into base content in ./index.ts.
// Rules: fact-based, no em dashes; festival dates follow lunar calendars, so
// months are given, never fixed dates.

type Supplement = Partial<GuideContent>;

export const CULTURE_DESTINATIONS: Record<string, Supplement> = {
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
