import type { GuideContent } from "@/lib/locations";

// Gujarat, Uttarakhand and Uttar Pradesh. Road distances from OpenStreetMap
// (OSRM), non-stop estimates. Timings change: we point to official sources.
// No invented prices; no em dashes.

const hills = "Allow extra time on hill roads.";

export const GUP_CITIES: Record<string, GuideContent> = {
  gangotri: {
    intro: "Gangotri in Uttarkashi district is one of the Char Dham, with the Gangotri temple at about 3,100 m. The Gangotri glacier and the Ganga's source at Gaumukh lie about 18 km upstream, reached on a permit-only trek.",
    idealDuration: "1 to 2 days",
    bestMonths: "May to June, September to October",
    gateway: "Uttarkashi; Dehradun airport",
    faqs: [{ q: "Can I visit the Gangotri glacier?", a: "Yes, by trekking to Gaumukh (about 18 km each way) with a permit from the Gangotri National Park office; daily numbers are limited." }],
  },  ahmedabad: {
    intro: "Ahmedabad, Gujarat's largest city, was India's first UNESCO World Heritage City (2017) for its walled old town and pol houses. It is known for the Sabarmati Ashram, the Adalaj stepwell, Sidi Saiyyed mosque's stone lattice, Kankaria Lake and its street food.",
    idealDuration: "1 to 2 days",
    bestMonths: "November to February",
    gateway: "Ahmedabad airport (AMD)",
    faqs: [
      { q: "What are the places to visit in Ahmedabad?", a: "Sabarmati Ashram, the old city heritage walk, Adalaj stepwell, Sidi Saiyyed mosque, Kankaria Lake, the Calico Museum (by appointment) and Law Garden's night market." },
      { q: "Is there trekking near Ahmedabad?", a: "Pavagadh near Champaner (about 150 km), Polo Forest near Idar (about 150 km) and Saputara (about 400 km) offer walks and treks." },
    ],
    packages: {
      intro: "Holiday packages from Ahmedabad: short trips go to Kutch, Statue of Unity, Saputara, Udaipur and Mount Abu by road; flights connect to Goa, Kerala, Kashmir and international destinations such as Singapore, Dubai and Bali. A 4 days trip from Ahmedabad suits Udaipur and Mount Abu or Kutch.",
      themes: {
        "honeymoon-packages": { intro: "Honeymoon tour packages from Ahmedabad usually fly to Goa, Kerala, Kashmir, Andaman, Bali or Maldives, or drive to Udaipur and Mount Abu for a shorter trip." },
      },
    },
  },
  kutch: {
    intro: "Kutch in western Gujarat is home to the White Rann, a vast salt desert at Dhordo, about 350 km from Ahmedabad. The Rann Utsav festival runs in tent cities there from about November to February, and Kutch is also known for Dholavira (a UNESCO Harappan site), Mandvi beach and embroidery villages.",
    idealDuration: "2 to 3 days",
    bestMonths: "November to February",
    gateway: "Bhuj airport and station",
  },
  dwarka: {
    intro: "Dwarka on Gujarat's western tip is one of the Char Dham, centred on the Dwarkadhish temple. Bet Dwarka island and the Nageshwar Jyotirlinga are nearby, and Somnath is about 240 km down the coast.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Dwarka station; Jamnagar airport",
    routes: [{ from: "Dwarka", to: "Somnath", distanceKm: "About 240 km", time: "5 hours", how: "Along the coast via Porbandar on NH 51. Somnath to Dwarka is the same route back." }],
    faqs: [{ q: "What are the places to visit in Dwarka, Gujarat?", a: "Dwarkadhish temple, Gomti Ghat, Rukmini Devi temple, Bet Dwarka by boat from Okha, Nageshwar Jyotirlinga and Shivrajpur beach." }],
  },
  somnath: {
    intro: "Somnath near Veraval holds the first of the 12 Jyotirlingas, rebuilt in 1951 on the shore of the Arabian Sea. Gir National Park is about 70 km away.",
    idealDuration: "1 day",
    bestMonths: "October to March",
    gateway: "Veraval station",
    routes: [{ from: "Somnath", to: "Dwarka", distanceKm: "About 240 km", time: "5 hours", how: "Via Porbandar along the coast." }],
  },
  gir: {
    intro: "Gir National Park in Gujarat is the only wild home of the Asiatic lion. Jungle safaris start from Sasan Gir and are booked online through the Gujarat forest department; the park closes from mid June to mid October.",
    idealDuration: "1 to 2 days",
    bestMonths: "December to April",
    gateway: "Junagadh or Veraval",
  },
  saputara: {
    intro: "Saputara is Gujarat's only hill station, in the Sahyadris of Dang district at about 1,000 m, known for its lake, ropeway, Sunset Point and monsoon greenery.",
    idealDuration: "1 to 2 days",
    bestMonths: "July to February",
    gateway: "Nashik (about 80 km)",
  },
  haridwar: {
    intro: "Haridwar is where the Ganga leaves the hills, about 230 km from Delhi. Har Ki Pauri is its main ghat, where the Ganga Aarti is held every evening at sunset, and the Mansa Devi and Chandi Devi temples are reached by ropeway.",
    idealDuration: "1 day",
    bestMonths: "September to April",
    gateway: "Haridwar Junction; Dehradun airport",
    routes: [
      { from: "Delhi", to: "Haridwar", distanceKm: "About 230 km", time: "5 to 6 hours", how: "Via Meerut and Roorkee; frequent trains including Shatabdi and Vande Bharat." },
      { from: "Haridwar", to: "Rishikesh", distanceKm: "About 20 km", time: "45 minutes", how: "By road along the Ganga; shared autos and buses run all day." },
    ],
    faqs: [
      { q: "What is the Ganga Aarti time at Har Ki Pauri?", a: "The evening aarti starts around sunset, roughly 6 to 7 pm depending on the season, with a smaller morning aarti. Arrive 45 minutes early to find a place on the ghat." },
    ],
  },
  rishikesh: {
    intro: "Rishikesh, about 20 km upriver from Haridwar, is a yoga and adventure town on the Ganga. Places to see in Rishikesh include Laxman Jhula and Ram Jhula, Triveni Ghat's evening aarti, Parmarth Niketan, the Beatles Ashram and Tapovan's cafes. Shivpuri, about 16 km up, is the base for river rafting.",
    idealDuration: "2 to 3 days",
    bestMonths: "September to June",
    gateway: "Dehradun airport (about 20 km)",
    routes: [{ from: "Haridwar", to: "Rishikesh", distanceKm: "About 20 km", time: "45 minutes", how: "By road along the Ganga." }],
    faqs: [{ q: "What does bungee jumping in Rishikesh cost?", a: "Prices are set by licensed operators near Mohan Chatti and change by season; book with a registered operator and check what is included." }],
  },
  nainital: {
    intro: "Nainital is a Kumaon hill station built around Naini Lake at about 2,080 m, about 280 km from Delhi. Tiffin Top, Snow View Point, the Mall Road and nearby lakes at Bhimtal and Sattal are its main sights.",
    idealDuration: "2 to 3 days",
    bestMonths: "March to June, October to December",
    gateway: "Kathgodam station (about 35 km)",
    sections: {
      "things-to-do": { intro: "Adventure activities in Nainital include boating and yachting on Naini Lake, horse riding to Tiffin Top, the ropeway to Snow View, paragliding at Bhimtal, and treks to Naina Peak and China Peak." },
    },
    packages: { intro: "Nainital tour packages usually run 3 to 4 days from Delhi via Kathgodam, with Naini Lake, Tiffin Top, Bhimtal and Sattal, often adding Jim Corbett or Mukteshwar." },
  },
  mussoorie: {
    intro: "Mussoorie is a Garhwal hill station at about 2,000 m, about 30 km above Dehradun, known for the Mall Road, Gun Hill, Lal Tibba viewpoint in Landour and Kempty Falls.",
    idealDuration: "2 days",
    bestMonths: "March to June, September to November; snow in January and February",
    gateway: "Dehradun",
    bestTimeToVisit: "March to June and September to November bring clear days. Snowfall in Mussoorie happens on some days between late December and February, most often in January; nearby Dhanaulti gets more.",
    faqs: [{ q: "What is Lal Tibba in Mussoorie?", a: "The highest point of Landour, about 5 km above the Mall, with a viewpoint looking out to the Garhwal Himalaya." }],
  },
  dehradun: {
    intro: "Dehradun, Uttarakhand's capital, is the gateway to Mussoorie and Rishikesh. Its sights include Sahastradhara's sulphur springs, Robber's Cave, the Forest Research Institute and the Malsi deer park (Dehradun zoo).",
    idealDuration: "1 day",
    bestMonths: "October to June; December is cold and clear",
    gateway: "Jolly Grant airport (DED)",
    faqs: [{ q: "How is Dehradun in December?", a: "Cool and dry, with days around 18 to 22 degrees Celsius and cold nights; snow is seen on Mussoorie and Dhanaulti above." }],
  },
  chopta: {
    intro: "Chopta in Rudraprayag district is a meadow at about 2,600 m and the base for the trek to Tungnath, the highest Shiva temple, and Chandrashila peak.",
    idealDuration: "2 days",
    bestMonths: "April to June, September to November",
    gateway: "Rishikesh (about 200 km)",
  },
  ranikhet: {
    intro: "Ranikhet is a quiet Kumaon cantonment hill station with views of the Nanda Devi range, the Jhula Devi temple and Chaubatia orchards.",
    idealDuration: "1 to 2 days",
    bestMonths: "March to June, September to November",
    gateway: "Kathgodam station",
  },
  agra: {
    intro: "Agra on the Yamuna is home to three UNESCO World Heritage Sites: the Taj Mahal, Agra Fort and Fatehpur Sikri. It is about 200 km from Delhi by the Yamuna Expressway. Places to go in Agra also include Mehtab Bagh, Itmad-ud-Daulah's tomb and Akbar's tomb at Sikandra.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Agra Cantt station",
  },
  varanasi: {
    intro: "Varanasi (Kashi) is one of the oldest living cities in the world, on the Ganga, known for its ghats, the Kashi Vishwanath temple and the evening Ganga Aarti at Dashashwamedh Ghat. Sarnath, where the Buddha gave his first sermon, is about 10 km away.",
    idealDuration: "2 to 3 days",
    bestMonths: "October to March",
    gateway: "Varanasi airport (VNS)",
    routes: [
      { from: "Varanasi", to: "Ayodhya", distanceKm: "About 210 km", time: "4 to 5 hours", how: "Via Sultanpur, or by train." },
      { from: "Varanasi", to: "Prayagraj", distanceKm: "About 120 km", time: "3 hours", how: "On NH 19." },
    ],
    faqs: [{ q: "Are there hill stations near Varanasi?", a: "The nearest hill stations are far: Pachmarhi in Madhya Pradesh and Nainital in Uttarakhand are each more than 600 km away. Nearby day trips are Sarnath, Chunar fort and the Rajdari and Devdari waterfalls." }],
  },
  ayodhya: {
    intro: "Ayodhya on the Saryu is the birthplace of Lord Ram, with the Shri Ram Janmabhoomi Mandir, consecrated in January 2024, Hanuman Garhi and the Saryu ghats.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Ayodhya airport and Ayodhya Dham station",
    routes: [{ from: "Lucknow", to: "Ayodhya", distanceKm: "About 130 km", time: "2.5 to 3 hours", how: "On NH 27 via Barabanki." }],
  },
  vrindavan: {
    intro: "Vrindavan, about 15 km from Mathura, is linked with Krishna's childhood and has thousands of temples, including Banke Bihari, Prem Mandir and ISKCON Vrindavan.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March; Holi in February or March",
    gateway: "Mathura Junction",
    faqs: [{ q: "What are the Prem Mandir timings?", a: "Prem Mandir opens in the morning and evening with a midday break, and is lit up after dark; check the temple's notice board or website for current timings." }],
  },
  mathura: {
    intro: "Mathura, the birthplace of Krishna, is about 60 km from Agra, with the Krishna Janmabhoomi complex, Vishram Ghat and the Dwarkadhish temple.",
    idealDuration: "1 day",
    bestMonths: "October to March",
    gateway: "Mathura Junction",
  },
  lucknow: {
    intro: "Lucknow, the capital of Uttar Pradesh, is known for Nawabi architecture (Bara Imambara and Rumi Darwaza), Hazratganj's shopping street, Ambedkar Memorial Park and its kebabs and chikan embroidery.",
    idealDuration: "1 to 2 days",
    bestMonths: "October to March",
    gateway: "Lucknow airport (LKO)",
    faqs: [{ q: "What is the famous street food in Lucknow?", a: "Galouti and Tunday kebabs, Awadhi biryani, nihari-kulcha, basket chaat, malai makkhan in winter and kulfi in Aminabad and Chowk." }],
  },
};

export const GUP_PLACES: Record<string, GuideContent> = {
  "agra/places-to-visit/taj-mahal": {
    intro: "The Taj Mahal in Agra is a white marble mausoleum built by Mughal emperor Shah Jahan for his wife Mumtaz Mahal, completed around 1653, and a UNESCO World Heritage Site since 1983. It is closed on Fridays and open at night on full-moon dates with separate tickets booked through the ASI.",
    faqs: [{ q: "On which day is the Taj Mahal closed?", a: "Fridays, when it is open only for prayers at the mosque." }],
  },
  "agra/places-to-visit/fatehpur-sikri": {
    intro: "Fatehpur Sikri, about 40 km from Agra, was Akbar's capital in the late 16th century. Its UNESCO-listed complex includes the Buland Darwaza, Jama Masjid and the tomb of Salim Chishti.",
  },
  "varanasi/places-to-visit/dashashwamedh-ghat": {
    intro: "Dashashwamedh Ghat is the main ghat of Varanasi, near the Kashi Vishwanath temple, where the grand Ganga Aarti is performed every evening after sunset.",
  },
  "lucknow/places-to-visit/hazratganj": {
    intro: "Hazratganj is Lucknow's central shopping street, laid out in 1810, with colonial-era buildings, cafes, chikan and book shops; ganjing, a stroll along it, is a local tradition.",
  },
  "haridwar/places-to-visit/har-ki-pauri": {
    intro: "Har Ki Pauri is Haridwar's most sacred ghat, where pilgrims bathe and the Ganga Aarti is held at sunset every evening. It is the centre of the Kumbh Mela, held every 12 years.",
    faqs: [{ q: "What are the Har Ki Pauri aarti timings?", a: "The evening aarti is held at sunset, around 6 pm in winter and 7 pm in summer, with a morning aarti around sunrise; the Ganga Sabha publishes exact times." }],
  },
  "nainital/places-to-visit/tiffin-top": {
    intro: "Tiffin Top (Dorothy's Seat) is a viewpoint at about 2,290 m above Nainital, reached by a 4 km walk or pony ride, with views of the Himalaya and the lake.",
  },
  "gir/places-to-visit/gir-national-park": {
    intro: "Gir National Park and Wildlife Sanctuary in Junagadh district is the last wild home of the Asiatic lion. Safaris run from Sasan Gir with permits booked online, and the park is closed during the monsoon, about mid June to mid October.",
  },
  "dehradun/places-to-visit/sahastradhara": {
    intro: "Sahastradhara, about 15 km from Dehradun, is known for its sulphur springs and dripping limestone caves along the Baldi river, with a ropeway above.",
  },
  "yamunotri/places-to-visit/surya-kund": {
    intro: "Surya Kund is a hot spring next to the Yamunotri temple, hot enough that pilgrims cook rice and potatoes tied in cloth as prasad.",
  },
};

export const GUP_DESTINATIONS: Record<string, Partial<GuideContent>> = {
  gujarat: {
    intro: "Gujarat combines the White Rann of Kutch, the pilgrim towns of Dwarka and Somnath, Gir's Asiatic lions, the Statue of Unity, Ahmedabad's UNESCO old city and the hill station of Saputara.",
    bestMonths: "November to February",
    faqs: [
      { q: "What are the top tourist destinations in Gujarat?", a: "Rann of Kutch, Ahmedabad, Statue of Unity, Gir, Dwarka, Somnath, Saputara, Champaner-Pavagadh and Modhera Sun Temple." },
      { q: "Which is the most famous temple in Gujarat?", a: "Somnath, the first Jyotirlinga, and the Dwarkadhish temple at Dwarka; Ambaji and Akshardham Gandhinagar are also widely visited." },
    ],
  },
  uttarakhand: {
    faqs: [
      { q: "What are the places to visit in Uttarakhand?", a: "Rishikesh, Haridwar, Mussoorie, Nainital, Jim Corbett, Auli, Chopta, Valley of Flowers and the Char Dham of Kedarnath, Badrinath, Gangotri and Yamunotri." },
      { q: "What are some offbeat places to visit in Uttarakhand?", a: "Chakrata, Munsiyari, Kanatal, Mukteshwar, Lohaghat, Khirsu and the Har Ki Dun valley." },
    ],
  },
};

// FAQs answering specific searches, merged on top of the city guides.
export const GUP_CITY_FAQS: Record<string, Partial<GuideContent>> = {
  ahmedabad: {
    faqs: [{ q: "Which are the best places to visit in Ahmedabad, India?", a: "The UNESCO-listed old city and its pols, Sabarmati Ashram, Adalaj stepwell, Sidi Saiyyed mosque and Kankaria Lake." }],
    packages: { faqs: [{ q: "What is a good 4 days trip from Ahmedabad?", a: "Udaipur and Mount Abu by road, Kutch's White Rann in season, or Statue of Unity with Saputara." }, { q: "What does a honeymoon tour package from Ahmedabad include?", a: "Flights or a cab, hotel stays with breakfast, sightseeing and couple add-ons such as a candlelight dinner; destinations range from Udaipur to Goa, Kerala and Bali." }] },
  },
  rishikesh: {
    faqs: [
      { q: "What are the places to see in Rishikesh?", a: "Laxman Jhula, Ram Jhula, Triveni Ghat aarti, Parmarth Niketan, the Beatles Ashram, Neer Garh waterfall and Kunjapuri temple at sunrise." },
      { q: "What is Tapovan in Rishikesh?", a: "The area above Laxman Jhula, known for cafes, yoga schools and guest houses." },
      { q: "What is Shivpuri near Rishikesh known for?", a: "River rafting camps and the start of the Shivpuri to Rishikesh rafting stretch, about 16 km upriver." },
      { q: "What is the price of bungee jumping in Rishikesh?", a: "It is set by licensed operators near Mohan Chatti and changes by season; check the operator's current rate before booking." },
    ],
  },
  agra: { faqs: [{ q: "Which are the places to go in Agra?", a: "Taj Mahal, Agra Fort, Mehtab Bagh for sunset, Itmad-ud-Daulah, Akbar's tomb at Sikandra and Fatehpur Sikri." }] },
  lucknow: {
    faqs: [
      { q: "Where is Lucknow in India?", a: "In central Uttar Pradesh on the Gomti river, about 500 km south-east of Delhi; it is the state capital." },
      { q: "What is Ambedkar Park in Lucknow?", a: "Ambedkar Memorial Park in Gomti Nagar, a large monument park built in sandstone, lit up in the evening." },
    ],
  },
  gir: { faqs: [{ q: "Can I visit the Gir jungle without a safari?", a: "The core forest is entered only on booked safaris; Devalia Safari Park inside the fenced zone offers shorter bus tours." }] },
  dehradun: { faqs: [{ q: "Is there a zoo in Dehradun?", a: "Yes, the Dehradun Zoo (Malsi Deer Park) on the Mussoorie road." }] },
  mussoorie: { faqs: [{ q: "When does snowfall happen in Mussoorie?", a: "On some days between late December and February, most often in January; snowfall varies year to year." }] },
  nainital: { faqs: [{ q: "What adventure activities can I do in Nainital?", a: "Yachting on Naini Lake, paragliding at Bhimtal, horse riding to Tiffin Top, the Snow View ropeway and treks to Naina Peak." }] },
  dwarka: { faqs: [{ q: "Why is Dwarka called Dwarka Nagri?", a: "Dwarka nagri (city of Dwarka) refers to Krishna's legendary kingdom, believed to lie partly under the sea off the present town." }] },

};

export const GUP_DESTINATION_FAQS: Record<string, Partial<GuideContent>> = {
  gujarat: { faqs: [{ q: "Where is Dwaraka in Gujarat?", a: "Dwarka (also spelt Dwaraka) is at the western tip of Gujarat's Saurashtra coast in Devbhumi Dwarka district, about 440 km from Ahmedabad." }] },
  uttarakhand: { faqs: [{ q: "Where are Mukteshwar and Kanatal in Uttarakhand?", a: "Mukteshwar is a Kumaon hill village about 50 km from Nainital; Kanatal is a Garhwal hill village about 40 km from Mussoorie on the Chamba road." }] },
};
