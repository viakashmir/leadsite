import type { GuideContent } from "@/lib/locations";

// Place searches with no page of their own, answered on the closest city or
// place guide. Himachal and nearby first. Weather and road status point to
// official sources. No em dashes.

type S = Record<string, Partial<GuideContent>>;

export const PG1_CITIES: S = {
  dharamshala: {
    faqs: [
      { q: "What is the distance from Dharamshala to McLeodganj?", a: "About 9 to 10 km by road from Kotwali Bazaar in lower Dharamshala, around 30 minutes by cab or local bus. Delhi to McLeodganj is about 475 km." },
      { q: "What is the McLeodganj altitude, its height from sea level?", a: "McLeodganj sits at about 2,080 m. Lower Dharamshala is around 1,450 m and Dharamkot about 2,100 m." },
      { q: "Which are the places to visit in Dharamsala and things to do?", a: "In McLeodganj: the Dalai Lama Temple (Tsuglagkhang), Namgyal Monastery, Bhagsunag Temple and Bhagsu Waterfall, St John in the Wilderness church and the Triund trek. Lower down: the HPCA cricket ground, the War Memorial, Norbulingka Institute and Kangra Fort." },
      { q: "What to see in Dharamsala in one day: which are the top Dharamsala tourist places?", a: "Dalai Lama Temple, Bhagsu Waterfall, Dharamkot, the HPCA cricket ground and Norbulingka Institute." },
      { q: "Which are the places to see in McLeodganj, the main McLeodganj visit places?", a: "Tsuglagkhang complex, Namgyal Monastery, Tibet Museum, Bhagsunag Temple, Bhagsu Waterfall, St John in the Wilderness and the Dal Lake of McLeodganj (Naddi road)." },
      { q: "Which are the places near McLeodganj, the McLeodganj nearby places and near places?", a: "Dharamkot (2 km), Bhagsu (2 km), Naddi (3 km), Triund (9 km trek), Norbulingka (about 14 km), Kangra Fort (about 20 km from Dharamshala), Palampur (about 35 km) and Bir Billing (about 65 km)." },
      { q: "Which are the tourist places near Dharamsala and places to visit near Dharamsala?", a: "Kangra Fort, Masroor rock-cut temples, Palampur tea gardens, Baijnath Temple, Bir Billing for paragliding, Chamunda Devi Temple and Pong Dam." },
      { q: "What is the best time to visit McLeodganj and Dharamsala?", a: "March to June for pleasant weather and treks, and September to November for clear views. July and August bring heavy monsoon rain; December to February is cold with occasional snow on the higher slopes." },
      { q: "What is McLeodganj weather in December, the temperature in December?", a: "Cold and mostly clear: roughly 2 to 15 degrees C, below freezing some nights, with snow possible on Triund and the higher ridges. Check the IMD Shimla forecast before travel." },
      { q: "Is McLeodganj good in December end and in December for New Year?", a: "Yes for a quiet, cold trip with clear mountain views. Book stays early for December end, carry warm layers, and expect Triund to be icy." },
      { q: "How is McLeodganj in May?", a: "Warm days of about 15 to 28 degrees C, cool nights, and peak season for Triund and Indrahar Pass treks. Book stays early." },
      { q: "When is the McLeodganj trekking season?", a: "March to June and September to December for Triund; Indrahar Pass is usually open from mid-May to October, snow permitting." },
      { q: "How are the McLeodganj roads?", a: "Narrow and steep with one-way loops around the main square. Big buses stop below; parking in town is limited, so many travellers use local taxis." },
      { q: "What is Dharamsala cricket ground, the HPCA Stadium, known for?", a: "The Himachal Pradesh Cricket Association Stadium hosts international matches against a backdrop of the Dhauladhar range, one of the most scenic grounds in the world." },
      { q: "What is the Norbulingka Institute?", a: "A Tibetan arts and culture centre at Sidhbari near Dharamshala, with workshops for thangka painting, woodcarving and metalwork, gardens and a temple." },
      { q: "How do I go from McLeodganj to Dharamkot, and what is the Dharamkot to McLeodganj distance?", a: "Dharamkot is about 2 km above McLeodganj: a 10-minute taxi ride or a 30 to 40-minute uphill walk. Upper Dharamkot, near the Triund trail start, is a little further." },
      { q: "What is Dharamkot near McLeodganj and Upper Dharamkot known for?", a: "Cafes, meditation and yoga centres (including Tushita), and the Gallu Devi start of the Triund trek." },
      { q: "Where is Baijnath Temple?", a: "In Baijnath town in Kangra district, about 50 km from Dharamshala. It is a 13th-century stone Shiva temple." },
      { q: "What do McLeodganj holiday packages and McLeodganj tourism packages include?", a: "Usually 2 to 4 nights in McLeodganj or Dharamshala, a cab from Pathankot, Chandigarh or Kangra airport, and sightseeing of the monasteries, Bhagsu, Dharamkot and Kangra. Many pair it with Dalhousie or Manali." },
      { q: "How do I travel to Dharamsala?", a: "Fly to Kangra (Gaggal) airport, about 15 km away; take a train to Pathankot (about 85 km); or take an overnight Volvo from Delhi." },
    ],
  },
  lahaul: {
    faqs: [
      { q: "What is Keylong known for?", a: "Keylong is the headquarters of Lahaul and Spiti district on the Manali to Leh highway, with Kardang, Shashur and Tayul monasteries around it." },
      { q: "What is the Keylong altitude?", a: "About 3,080 m above sea level." },
      { q: "Which is the main Keylong monastery?", a: "Kardang Monastery across the Bhaga river is the largest; Shashur Monastery is just above town." },
      { q: "What is the Keylong to Jispa distance?", a: "About 22 km along the Manali to Leh highway, under an hour by road." },
      { q: "Where is Deepak Tal?", a: "A small lake beside the Manali to Leh highway between Jispa and Zingzingbar, below Baralacha La." },
      { q: "Which are the Sissu tourist places and places to visit in Sissu?", a: "Sissu waterfall, the Chandra river bank and Sissu lake, the Atal Tunnel north portal, and Gondhla Fort and Keylong further on." },
    ],
  },
  "spiti-valley": {
    faqs: [
      { q: "What is the distance between Lahaul and Spiti, and which pass links them?", a: "Kunzum Pass links them: Gramphu in Lahaul to Kaza in Spiti is about 140 km. Kaza is about 200 km from Manali via the Atal Tunnel and Kunzum." },
      { q: "What is the Kunzum Pass height?", a: "About 4,550 m. It is usually open from June to October; check Lahaul and Spiti district advisories for the road status." },
      { q: "Is there a Lahaul Spiti travel guide for planning?", a: "Plan 7 to 9 days: enter via Shimla and Kinnaur for gradual acclimatisation, cover Kaza, Key, Kibber, Langza, Dhankar and Chandratal, and exit via Kunzum to Manali when the pass is open." },
      { q: "What is Langza known for, and what is the Langza temperature?", a: "Langza, at about 4,400 m near Kaza, is known for its Buddha statue and fossils. Summer days are around 10 to 20 degrees C; winter nights fall well below minus 15 degrees C." },
      { q: "Can I visit Spiti in February?", a: "Yes, on a winter Spiti expedition via Shimla and Kinnaur only, as Kunzum is closed. Expect minus 20 to minus 30 degrees C at night and limited stays." },
      { q: "How is Spiti in August?", a: "Green and mostly dry, as Spiti is a rain-shadow area, but the approach roads via Kinnaur and Manali can be cut by monsoon landslides." },
      { q: "What is a winter Spiti expedition, and how does a Spiti holiday adventure work?", a: "A guided winter trip from Shimla through Kinnaur to Kaza with homestays, snow leopard spotting in Kibber and frozen landscapes; summer adventure trips add Chandratal, Kunzum and trekking." },
    ],
  },
  kinnaur: {
    faqs: [
      { q: "Where is Shipki La Pass, and what does Shipki La connect?", a: "Shipki La is a border pass in Kinnaur on the India and Tibet (China) border, near Khab, where the Sutlej enters India. It connects to Tibet as a historic trade route." },
      { q: "Can tourists visit Shipki La, and where is Shipki La Pass on the map?", a: "It lies north-east of Khab on the old Hindustan to Tibet road. Access needs permits and depends on current rules; check with the Kinnaur district administration before planning." },
    ],
  },
  shimla: {
    faqs: [
      { q: "What is Solan known for?", a: "Solan, about 45 km before Shimla, is called the Mushroom City of India and is known for tomatoes, the Shoolini temple and its brewery." },
      { q: "Where is Barog?", a: "A small hill station near Solan on the Kalka to Shimla railway, known for the long Barog tunnel and pine forests." },
      { q: "What is Giri Ganga?", a: "A temple and spring at the source of the Giri river near Kharapathar, about 80 km from Shimla, reached by a short walk." },
      { q: "Where is Rohru?", a: "In Shimla district on the Pabbar river, about 110 km from Shimla, known for apple orchards and trout fishing." },
    ],
  },
  kullu: {
    faqs: [
      { q: "What is Sainj Valley known for?", a: "Sainj Valley near Kullu is a gateway to the Great Himalayan National Park, with village homestays, trout streams and treks." },
      { q: "Where is Barot Valley?", a: "In Mandi district, about 65 km from Mandi, on the Uhl river. It is known for trout fishing, the old Shanan haulage trolley and treks to Bir." },
    ],
  },
  jibhi: {
    faqs: [
      { q: "How is the Shoja trek?", a: "From Shoja near Jibhi, easy trails lead to Jalori Pass (about 5 km) and on to Serolsar Lake (about 5 km more) or Raghupur Fort." },
      { q: "What is the GB Tirthan Valley temperature in March?", a: "About 5 to 20 degrees C, with cold nights and occasional late snow on Jalori Pass." },
      { q: "What is the Raghupur Fort altitude and history?", a: "The ruined fort stands at about 3,400 m above Jalori Pass. It is linked to the old rulers of the region and is known for its 360-degree views of the Himalaya." },
      { q: "How is the Raghupur Fort weather?", a: "Cool in summer, below freezing in winter and often snow-covered from December to March." },
    ],
  },
  manali: {
    faqs: [{ q: "What are Sethan Heights and Sethan village?", a: "Sethan is a small village above Prini near Manali, at about 2,700 m, known for winter snow, igloo stays and the Hampta trek approach." }],
  },
  "north-goa": {
    faqs: [
      { q: "What is Candolim Beach like?", a: "A long, quieter stretch between Sinquerim and Calangute in Bardez, about 14 km from Panaji. Wide sand, beach shacks, water sports in season and the wreck of the River Princess was once offshore. Calmer than Baga and Calangute." },
      { q: "Where is Sinquerim Beach?", a: "At the southern end of the Candolim stretch, right below Fort Aguada, about 13 km from Panaji. Known for the fort views and water sports such as parasailing and jet skis in the October to May season." },
      { q: "What is Morjim Beach known for?", a: "Morjim in Pernem taluka, at the mouth of the Chapora river, is a nesting site for Olive Ridley turtles (protected by the Forest Department in winter). It is quiet, with many Russian-run shacks, about 30 km from Panaji." },
      { q: "What is Ashvem Beach like?", a: "A calm, clean beach between Morjim and Mandrem in north Pernem, with boutique huts and yoga retreats. Good for swimming in season and much less crowded than Baga." },
      { q: "What is the Dona Paula view point?", a: "A rocky headland about 7 km from Panaji where the Zuari and Mandovi rivers meet the Arabian Sea. A jetty and viewpoint look across to Mormugao harbour; it is busiest at sunset." },
      { q: "What is Reis Magos Fort?", a: "A restored 16th century Portuguese fort on the north bank of the Mandovi, opposite Panaji in Verem. It has exhibitions on Goa's history and views over the river mouth. Usually open Tuesday to Sunday; check timings locally." },
    ],
  },
  "south-goa": {
    faqs: [
      { q: "What is Benaulim Beach like?", a: "A wide, quiet beach about 7 km west of Margao, known for fishing boats, dolphin trips and calm evenings. It runs into Colva to the north and Varca to the south." },
      { q: "Which is the Margao beach, the beach nearest Margao?", a: "Margao (Madgaon) is an inland town. The nearest beaches are Colva (about 6 km) and Benaulim (about 7 km); Majorda and Betalbatim are a little further north." },
      { q: "What is Agonda Beach like?", a: "A 3 km quiet beach in Canacona, about 37 km south of Margao, with seasonal beach huts and an Olive Ridley turtle nesting area. Calm and less crowded than Palolem, 8 km south." },
      { q: "What is Cola Beach and how do you reach it?", a: "A small cove in Canacona between Cabo de Rama and Agonda, with a freshwater lagoon behind the sand. The last stretch is a rough dirt track, so most visitors walk down or come by local taxi." },
      { q: "Where is Bogmalo Beach?", a: "A small bay about 4 km from Dabolim airport and 8 km from Vasco da Gama. Bogmalo Beach is good for a short stop before a flight, with diving schools and boat trips to Grande Island." },
    ],
  },
  "jaipur": {
    faqs: [
      { q: "Where is Khatu Shyam Ji Mandir and how far is the Khatu Shyam Ji temple from Jaipur?", a: "Khatu Shyam Ji Temple is in Khatu village, Sikar district, about 80 km north-west of Jaipur (around 2 hours by road via Ringas). Ringas railway station is about 17 km away. The Phalgun fair around Phalgun Shukla Ekadashi draws very large crowds." },
      { q: "What is Dundlod known for?", a: "Dundlod is a Shekhawati village in Jhunjhunu district, about 160 km from Jaipur, known for Dundlod Fort and painted havelis with fresco walls. It pairs well with Nawalgarh (about 7 km) and Mandawa (about 25 km)." },
      { q: "How far is Sariska and what is Sariska National Park like?", a: "Sariska Tiger Reserve is in Alwar district, about 110 km from Jaipur and about 35 km from Alwar city. It has tigers, leopards and the ruined Kankwari Fort. Safari zones usually open October to June; book through the Rajasthan Forest Department." },
      { q: "Which are the places to visit in Alwar city?", a: "Bala Quila (Alwar Fort), City Palace and its museum, Moosi Maharani ki Chhatri, Siliserh Lake (about 13 km) and Sariska Tiger Reserve (about 35 km). Bhangarh Fort is about 85 km away." },
      { q: "What is Dahar ka Balaji?", a: "A popular Hanuman temple on the Sikar Road side of Jaipur, in the Vidyadhar Nagar area, about 9 km from the city centre. Tuesdays and Saturdays are busiest." },
      { q: "What are Achrol, Govindgarh and Rambagh near Jaipur?", a: "Achrol is a village on the Delhi highway about 30 km north of Jaipur, known for Achrol Fort. Govindgarh is a town about 40 km north on the Ajmer-Sikar side. Rambagh is the former royal residence in south Jaipur, now the Rambagh Palace hotel." },
    ],
  },
  "ajmer": {
    faqs: [
      { q: "What is Ana Sagar Lake in Ajmer?", a: "An artificial lake built in the 12th century by Arnoraja, with marble baradaris (pavilions) added by Shah Jahan along the Daulat Bagh side. It is about 2 km from Ajmer Sharif Dargah and is best at sunset." },
      { q: "What is Taragarh Fort in Ajmer?", a: "A hill fort on the Aravalli ridge above Ajmer, about 5 km by road from the dargah, with views over the city. It also has the Dargah of Miran Sahib inside." },
    ],
  },
  "mount-abu": {
    faqs: [
      { q: "What are the Dilwara temples in Mount Abu?", a: "A group of five Jain temples built between the 11th and 13th centuries, about 2.5 km from Nakki Lake, famous for very fine white marble carving. Photography is not allowed inside, and non-Jain visiting hours are usually around noon to 6 pm; check locally." },
    ],
  },
  "vrindavan": {
    faqs: [
      { q: "Where is Radha Rani Mandir Barsana, the Barsana mandir?", a: "Shri Radha Rani (Ladli Ji) temple sits on Bhanugarh hill in Barsana, about 45 km from Vrindavan and 50 km from Mathura. The Lathmar Holi a few days before Holi is its biggest event." },
    ],
  },
  "ayodhya": {
    faqs: [
      { q: "What is Guptar Ghat in Ayodhya?", a: "A ghat on the Sarayu river in Faizabad, about 10 km from Ram Janmabhoomi, where Lord Ram is believed to have taken jal samadhi. It has temples and an evening aarti." },
    ],
  },
  "varanasi": {
    faqs: [
      { q: "Is Banaras the same as Varanasi?", a: "Yes. Banaras (Benares) and Kashi are older names of Varanasi, the city on the Ganga known for its ghats, Kashi Vishwanath Temple and the Ganga Aarti at Dashashwamedh Ghat." },
    ],
  },
  "lucknow": {
    faqs: [
      { q: "How far is Dudhwa National Park from Lucknow?", a: "Dudhwa Tiger Reserve in Lakhimpur Kheri is about 230 km (5 to 6 hours) from Lucknow, near the Nepal border. It has tigers, swamp deer and reintroduced one-horned rhinos. Usually open November 15 to June 15." },
    ],
  },
  "madurai": {
    faqs: [
      { q: "How far is Rameshwaram from Madurai, and what is the Rameshwaram mandir known for?", a: "Rameshwaram is about 170 km (4 hours) east of Madurai over the Pamban bridge. Ramanathaswamy Temple, one of the 12 Jyotirlingas, is known for its long pillared corridors and 22 theertham wells." },
      { q: "What is Adam's Bridge (Ram Setu) near Rameshwaram?", a: "A chain of shoals between Dhanushkodi, about 20 km from Rameshwaram, and Mannar Island in Sri Lanka. You can see the start of it from Arichal Munai at the tip of Dhanushkodi." },
      { q: "What is Ramnad, and is there a hill station near Rameshwaram?", a: "Ramnad is Ramanathapuram, the district town about 55 km before Rameshwaram, with the Ramalinga Vilasam palace. There is no hill station near Rameshwaram; the closest is Kodaikanal, about 290 km away via Madurai." },
    ],
  },
  "chennai": {
    faqs: [
      { q: "What is Kapaleeswarar Temple in Chennai?", a: "A Dravidian-style Shiva temple in Mylapore, Chennai, with a tall colourful gopuram and a large tank. The Arupathimoovar festival in March or April is its biggest event." },
      { q: "Where is Parthasarathy Temple in Chennai?", a: "In Triplicane, near Marina Beach. It is an 8th century Vishnu temple dedicated to Krishna as Arjuna's charioteer, one of the 108 Divya Desams." },
      { q: "Where is Kanchi Kamakshi Amman temple (Kamakshi temple)?", a: "Kamakshi Amman Temple is in Kanchipuram, about 75 km south-west of Chennai. Kanchi Kamakshi is one of the Shakti Peethas. Varadaraja Perumal Temple and Ekambareswarar Temple are in the same town." },
      { q: "What is Varadaraja Perumal temple?", a: "A large Vishnu temple in Kanchipuram, about 75 km from Chennai, famous for the Athi Varadar idol shown only once every 40 years (last in 2019) and its 100-pillared hall." },
      { q: "What is Nithyakalyana Perumal Temple?", a: "A Vishnu temple at Thiruvidanthai on the East Coast Road, about 40 km south of Chennai and 15 km before Mahabalipuram. Devotees visit for marriage blessings." },
      { q: "What are Pulicat, Nagalapuram and Gingee Fort near Chennai?", a: "Pulicat Lake, about 60 km north, is a lagoon known for flamingos (October to March). Nagalapuram, about 70 km north-west in Andhra Pradesh, has a Vishnu temple and trekking falls. Gingee Fort is a hill fort about 160 km south-west." },
      { q: "Which are the places to see in Vellore?", a: "Vellore Fort with the Jalakandeswarar Temple inside, the Sripuram Golden Temple (about 8 km), Amirthi forest and falls (about 25 km) and Yelagiri hills (about 90 km). Vellore is about 140 km from Chennai." },
      { q: "Which are the places to visit in Tamilnadu?", a: "Chennai, Mahabalipuram, Kanchipuram, Madurai, Rameshwaram, Kanyakumari, Thanjavur, Ooty, Kodaikanal, Coonoor and Yercaud are the main stops on a Tamil Nadu trip." },
    ],
  },
  "ooty": {
    faqs: [
      { q: "What is Pykara Lake near Ooty?", a: "A reservoir about 20 km from Ooty on the Mysore road, with boating and the Pykara falls nearby. Pine and shola forest surround it." },
    ],
  },
  "ujjain": {
    faqs: [
      { q: "What is Mangalnath Mandir in Ujjain?", a: "A Shiva temple on the Shipra river about 5 km from Mahakaleshwar, believed to be the birthplace of Mars (Mangal). People visit for Mangal dosh puja, busiest on Tuesdays." },
    ],
  },
  "bhopal": {
    faqs: [
      { q: "What is Van Vihar in Bhopal?", a: "A national park and zoo on the Upper Lake, about 5 km from the city centre, where animals are kept in near-natural enclosures. It is closed on Fridays; cycles and cars can go around inside." },
      { q: "How far is Bhojpur Temple from Bhopal?", a: "About 28 km south-east. The 11th century Bhojeshwar Temple has one of the largest Shiva lingas in India, about 7.5 m tall including the platform." },
    ],
  },
  "mumbai": {
    faqs: [
      { q: "What is Haji Ali Dargah?", a: "A mosque and tomb on an islet off Worli, Mumbai, reached by a 500 m causeway that floods at high tide. Check tide times before going." },
      { q: "Which Chowpatty in Mumbai is famous?", a: "Girgaum Chowpatty at the end of Marine Drive, known for street food and Ganesh visarjan; Juhu Beach is the other big one." },
      { q: "What are Powai Lake, Borivali National Park and Taraporewala Aquarium?", a: "Powai Lake is an artificial lake in central Mumbai. Borivali National Park (Sanjay Gandhi National Park) is a forest in the north with the Kanheri Caves. Taraporewala Aquarium is on Marine Drive and reopened in 2015." },
    ],
  },
  "pune": {
    faqs: [
      { q: "How far are Rajgad Fort, Lavasa, Kamshet and Mulshi Dam from Pune?", a: "Rajgad Fort, Shivaji's first capital, is about 55 km south-west (a 2 to 3 hour climb). Mulshi Dam is about 45 km west, and Lavasa about 60 km. Kamshet, about 45 km on the Mumbai road, is known for paragliding." },
    ],
  },
  "nashik": {
    faqs: [
      { q: "What are Ramkund and the Tapovan temple in Nashik?", a: "Ramkund is the main bathing ghat on the Godavari in Panchavati, where the Kumbh Mela snan takes place. Tapovan, about 2 km away, is where Lakshman is believed to have cut Surpanakha's nose." },
    ],
  },
  "alibaug": {
    faqs: [
      { q: "How far are Diveagar, Shrivardhan Beach and Harihareshwar Beach from Alibaug (Alibag)?", a: "Along the Konkan coast south of Alibaug: Diveagar is about 85 km, Shrivardhan Beach about 100 km and Harihareshwar Beach about 110 km. Each has quiet beaches and homestays." },
    ],
  },
};

export const PG1_PLACES: S = {
  "lahaul/places-to-visit/sissu": {
    faqs: [
      { q: "What is the Sissu temperature today?", a: "Check the IMD Shimla or Lahaul and Spiti district forecast for today's weather; Sissu is about 3,100 m and much colder than Manali." },
      { q: "When is Sissu snowfall season?", a: "From December to March, sometimes from November. The Atal Tunnel can close after heavy snow; check the district advisory." },
      { q: "Where is Sissu waterfall?", a: "On the cliff across the Chandra river from Sissu village, visible from the highway a few km after the Atal Tunnel north portal." },
      { q: "What is the Sissu temperature in April?", a: "Roughly minus 2 to 12 degrees C with snow still around." },
    ],
  },
  "spiti-valley/places-to-visit/chandratal-lake": {
    faqs: [
      { q: "Is Chandra Tal open, and can I stay a night at Chandratal?", a: "Usually from June to October. Camps stay about 2 km before the lake; camping at the lake shore is not allowed. Nights drop below freezing." },
      { q: "Where are the camps in Chandratal?", a: "In a designated camping area about 2 km from the lake, with tents, meals and basic toilets." },
      { q: "What is the Batal to Chandratal distance?", a: "About 14 km by a rough road, then a short walk of about 1 km to the lake." },
      { q: "What is the Chandratal temperature in October?", a: "Daytime around 5 to 10 degrees C and nights well below freezing; camps start closing in October." },
    ],
  },
  "manali/places-to-visit/rohtang-pass": {
    faqs: [
      { q: "What is Rohtang Darra, or Rohtang La?", a: "Local names for Rohtang Pass, at about 3,980 m, 51 km from Manali." },
      { q: "What is the Rohtang La temperature?", a: "In summer around 0 to 15 degrees C, below freezing at night; check the IMD Shimla forecast." },
      { q: "How do I get Rohtang permission?", a: "Through the online Rohtang permit system of the Manali SDM office (rohtangpermits.nic.in), with daily vehicle limits." },
    ],
  },
  "manali/places-to-visit/hadimba-temple": {
    faqs: [{ q: "What is the Hidimba Devi Temple, also spelt Hidimba Temple?", a: "The Hadimba (Hidimba) Devi Temple in Manali's Dhungri forest, a wooden pagoda-style temple built in 1553." }],
  },
  "dharamshala/places-to-visit/dharamkot": {
    faqs: [{ q: "Which are the Dharamkot places to visit?", a: "Tushita Meditation Centre, Gallu Devi Temple, the Triund trail, and cafes on the walk down to Bhagsu Waterfall." }],
  },
};
