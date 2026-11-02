// FAQs for the index pages (/tour-packages, /tour-packages/india,
// /tour-packages/international and the theme indexes), keyed by page path.
// They answer broad searches that name no single place. Facts only, no
// invented prices: price questions explain how quotes work. No em dashes.

type Faq = { q: string; a: string };

export const HUB_FAQS: Record<string, Faq[]> = {
  "/tour-packages": [
    { q: "What is a tour package, also called a tourist package or trip package?", a: "A pre-planned trip that bundles hotels, transfers and sightseeing (and sometimes flights or trains) for one price. On Tavel Package you share your dates and budget, and up to 3 verified agents send customised tour packages to compare." },
    { q: "How do I choose the best tour packages and travel packages?", a: "Compare what each quote includes (hotel category, meal plan, cab type, entry fees), check the day-wise itinerary, ask about the cancellation policy, and confirm the agent is registered. Cheaper quotes often leave out transfers or use smaller hotels." },
    { q: "What is the difference between a holiday package and vacation packages?", a: "None in practice: both are bundled trips. In India \"holiday package\" is more common; \"vacation packages\" is the American term for the same thing." },
    { q: "Are there trip packages and tour packages under 5000?", a: "Rarely for a full trip. Short trips such as a 2 night 3 days package or a two days holiday package to a nearby hill station or pilgrim town can be close to that per person by bus or train with budget stays. Share your budget and agents will say what fits." },
    { q: "What does a 2 night 3 days package or two days holiday package usually cover?", a: "One destination within about 300 km of your city: 2 nights of hotel with breakfast, a cab for transfers and local sightseeing. Popular picks are weekend hill stations, beaches and temple towns." },
    { q: "Which are good long tour options from India?", a: "10 to 15 day trips such as Rajasthan, Kerala and Tamil Nadu together, the North East, Ladakh with Spiti, or Europe and Southeast Asia abroad." },
    { q: "Which are popular tour packages from Coimbatore, including family tour packages?", a: "Ooty, Kodaikanal, Munnar and Coorg by road, Kerala backwaters, and by air from Coimbatore airport to Goa, Kashmir, Andaman, Dubai and Singapore. Family trips usually add a private cab and family rooms." },
    { q: "Are there Diwali holiday tour packages?", a: "Yes. Diwali week is peak season, so book 6 to 8 weeks ahead. Goa, Rajasthan, Kerala, Andaman, Dubai, Thailand and Singapore are popular; prices rise for those dates." },
  ],
  "/tour-packages/international": [
    { q: "Which are cheap international trips and the cheapest foreign trips from India?", a: "Nepal, Bhutan, Sri Lanka, Thailand, Vietnam, Malaysia, Indonesia (Bali) and Dubai are usually the cheapest international trips, thanks to short flights, visa-free or e-visa entry for Indians, and low daily costs." },
    { q: "Which are cheap international destinations from India for a budget foreign trip?", a: "Nepal and Bhutan by road or a short flight, Sri Lanka, Thailand, Vietnam, Malaysia and Bali. Travel outside peak holidays and book flights early to keep costs down." },
    { q: "How do I plan affordable international trips, cheap international travel or a cheap international vacation?", a: "Pick a country with easy visas and short flights, travel in the shoulder season, choose 3-star stays, and fix the plan 6 to 8 weeks ahead. Agents can quote a cheap international vacation with flights or without." },
    { q: "What are budget international trips and budget friendly foreign trips from India?", a: "Usually 4 to 6 days in Thailand, Vietnam, Sri Lanka, Bali, Malaysia, Nepal or Bhutan with 3-star hotels, shared or private transfers and a few paid tours." },
    { q: "Which is the best low budget international trip from India?", a: "Nepal (no visa for Indians, reachable by road), then Bhutan, Sri Lanka and Thailand." },
    { q: "Which countries to visit from India first?", a: "Easy first trips are Thailand, Dubai, Singapore, Bali, Sri Lanka, Nepal, Bhutan, Maldives, Vietnam and Malaysia." },
    { q: "Which are the best places to visit in May in Asia?", a: "Bhutan, Nepal's lower valleys, Japan's Hokkaido, Bali, Vietnam's north and central coast, and the Maldives early in the month." },
    { q: "Is there a Laos honeymoon package?", a: "Yes, usually combined with Vietnam, Cambodia or Thailand: Luang Prabang's temples and Kuang Si Falls over 3 to 4 nights. Indians can apply for a Laos e-visa or visa on arrival; check the Laos embassy for current rules." },
    { q: "What do holiday packages in Zanzibar include?", a: "Usually 4 to 6 nights on the Tanzanian island: Stone Town (a UNESCO site), a spice tour, and beach stays at Nungwi or Kendwa, often combined with a Serengeti safari. Indians need a Tanzania e-visa." },
    { q: "Are there 5 days international trips from India?", a: "Yes: Dubai, Thailand, Singapore, Bali, Sri Lanka, Nepal, Bhutan and Vietnam all fit in 4 nights 5 days." },
  ],
  "/tour-packages/india": [
    { q: "Which are the best places to visit in India and top tourist destinations in India?", a: "Kashmir, Ladakh, Himachal (Manali, Shimla), Rajasthan (Jaipur, Udaipur, Jaisalmer), Goa, Kerala, Andaman, Agra, Varanasi, Rishikesh, Darjeeling, Sikkim, Meghalaya, Hampi and Coorg." },
    { q: "Which are the best tourism destinations in India and traveling places in India by region?", a: "North: Kashmir, Ladakh, Himachal, Uttarakhand. West: Rajasthan, Goa, Gujarat. South: Kerala, Karnataka, Tamil Nadu. East and North East: Darjeeling, Sikkim, Meghalaya, Odisha. Islands: Andaman and Lakshadweep." },
    { q: "What does a North East tour package cover?", a: "Usually Gangtok and Darjeeling, or Shillong, Cherrapunji and Kaziranga, over 6 to 9 days from Bagdogra or Guwahati. Sikkim and Arunachal need permits that agents arrange." },
    { q: "Which are good places to go in India for a first trip?", a: "The Golden Triangle (Delhi, Agra, Jaipur), Goa, Kerala, or Shimla and Manali." },
    { q: "Which is the best tourist spot in North India?", a: "Kashmir, Ladakh, Manali, Shimla, Rishikesh, Agra, Amritsar, Varanasi and the Rajasthan cities." },
    { q: "Which are the best places to visit in India in May?", a: "Ladakh (from late May), Kashmir, Manali, Shimla, Darjeeling, Sikkim, Munnar, Ooty and Coorg." },
    { q: "Which are the best places to visit in April in India?", a: "Kashmir in tulip season, Darjeeling, Sikkim, Meghalaya, Manali, Shimla, Ooty, Munnar and Andaman." },
    { q: "Which are the best hill stations in India, and what is a hill station?", a: "A hill station is a town in the hills, often developed as a summer retreat. Among the best hill stations in India are Shimla, Manali, Mussoorie, Nainital, Darjeeling, Gangtok, Ooty, Munnar, Kodaikanal, Coorg, Gulmarg and Shillong." },
    { q: "Which are the best national parks in India and the best known national park in India?", a: "Jim Corbett (the first, founded 1936), Ranthambore, Kaziranga, Bandhavgarh, Kanha, Gir, Sundarbans, Periyar and Hemis." },
    { q: "Which are the main wildlife sanctuaries in India, and which wildlife sanctuary in India is best for tigers?", a: "Ranthambore, Bandhavgarh, Kanha, Tadoba and Jim Corbett for tigers; Gir for Asiatic lions; Kaziranga for one-horned rhinos; Bharatpur (Keoladeo) for birds." },
    { q: "Which are the major festivals of India and festivals in India by month?", a: "Lohri and Makar Sankranti or Pongal (January), Holi (March), Baisakhi (April), Eid (by lunar date), Onam (August or September), Ganesh Chaturthi, Durga Puja and Dussehra (October), Diwali (October or November), and Christmas. Hornbill Festival in Nagaland is in December." },
    { q: "Which festival of India is best for travellers, and how do I plan an India festival trip?", a: "Holi in Mathura and Vrindavan, Pushkar Camel Fair, Durga Puja in Kolkata, Diwali in Varanasi, Onam in Kerala and Hornbill in Nagaland. Book 2 to 3 months ahead as stays fill up." },
    { q: "Which are the Seven Sisters of India, the 7 sisters of North East India?", a: "Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland and Tripura. Sikkim is often called their brother state." },
    { q: "Which are the famous haunted places in India?", a: "Bhangarh Fort and Kuldhara in Rajasthan, Shaniwar Wada in Pune and Dumas Beach in Surat are the best known; most are heritage sites with legends rather than proven stories. Bhangarh is closed to visitors between sunset and sunrise." },
    { q: "Which are good road trip destinations in India?", a: "Manali to Leh, Srinagar to Leh, Mumbai to Goa via the coast, Bangalore to Coorg, Chennai to Pondicherry on the East Coast Road, Spiti via Kinnaur, and the Rajasthan desert circuit." },
    { q: "Where can I go canyoning in India?", a: "Canyoning is offered seasonally in Rishikesh, Kullu and Manali, Coorg, and the Western Ghats near Pune; book only with operators who provide helmets, harnesses and trained guides." },
    { q: "Which are safe solo trips for women in India?", a: "Rishikesh, McLeodganj, Kerala, Pondicherry, Udaipur, Hampi, Gokarna, Sikkim, Meghalaya and Ladakh are popular with women travelling solo; book verified stays and share your plan with family." },
    { q: "Which are the best places for New Year's Eve in India?", a: "Goa, Gulmarg and Manali for snow, Udaipur, Jaipur, Pondicherry, Gokarna, Andaman and Rishikesh. Book 6 to 8 weeks ahead." },
    { q: "What are the 12 Jyotirlinga names, the 12 Jyotirlinga list in India with place names (12 Jyotirling ke naam, ka naam)?", a: "Somnath (Gujarat), Mallikarjuna (Srisailam, Andhra Pradesh), Mahakaleshwar (Ujjain), Omkareshwar (Madhya Pradesh), Kedarnath (Uttarakhand), Bhimashankar (Maharashtra), Kashi Vishwanath (Varanasi), Trimbakeshwar (Nashik), Vaidyanath (Deoghar, Jharkhand), Nageshwar (Dwarka, Gujarat), Rameshwaram (Tamil Nadu) and Grishneshwar (near Ellora, Maharashtra)." },
    { q: "Where is each Jyotirlinga in India on the map, and how do I plan a 12 Jyotirling yatra?", a: "Two are in Gujarat, two in Madhya Pradesh, three in Maharashtra, and one each in Uttarakhand, Uttar Pradesh, Jharkhand, Andhra Pradesh and Tamil Nadu. Most pilgrims split them into regional trips; Kedarnath opens only from about May to November." },
    { q: "What is a Shakti Peeth, and where are the major Shaktipeeth temples?", a: "Shakti Peeths are temples of the goddess Sati, traditionally counted as 51. Well-known ones include Kamakhya (Guwahati), Kalighat (Kolkata), Vaishno Devi (Jammu), Jwalamukhi (Himachal), Ambaji (Gujarat), Tarapith (West Bengal) and Hinglaj (Pakistan)." },
    { q: "Which are the famous South Indian temples, with names?", a: "Meenakshi (Madurai), Brihadeeswarar (Thanjavur), Ramanathaswamy (Rameswaram), Tirumala Venkateswara (Tirupati), Sri Ranganathaswamy (Srirangam), Padmanabhaswamy (Thiruvananthapuram), Guruvayur, Sabarimala and Virupaksha (Hampi)." },
  ],
  "/family-packages": [
    { q: "Which are the best places to go with family for a family trip?", a: "Goa, Kerala, Shimla and Manali, Kashmir, Ooty, Mysore and Coorg, Rajasthan, Andaman, and abroad Dubai, Singapore and Thailand." },
    { q: "How does a family trip planner or family vacation planner work here?", a: "Share your dates, the number of adults and children, and your budget in the form. Up to 3 verified agents send day-wise plans with family rooms, a private cab and child-friendly sightseeing; you compare and book directly." },
  ],
  "/group-tour-packages": [
    { q: "What do group vacation packages include?", a: "Rooms on twin or triple sharing, a tempo traveller or coach for the whole group, sightseeing and often meals. Groups of 10 or more usually get better rates per person." },
  ],
  "/solo-tour-packages": [
    { q: "What are solo vacations packages?", a: "Trips for one traveller, either private (own cab and room, so a single supplement applies) or joining a fixed-departure group to share costs." },
  ],
};
