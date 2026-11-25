// TDI depth pass 1 (2026-11-25): transport posts that pair with
// tdiholidayventures.com vehicle pages (scoreboard 2026-11-24). Appended by
// withAdditions in blog/index.ts. Rules: facts a traveller can check, no typed
// fares or prices, no em dashes, no question already asked elsewhere.

import type { BlogPost } from "./types";

type Addition = Partial<Pick<BlogPost, "sections" | "faqs">>;

export const TDI_DEPTH_1_ADDITIONS: Record<string, Addition> = {
  "kashmir-cab-types-innova-crysta-ertiga-dzire": {
    sections: [
      {
        h: "Ertiga in Kashmir: seats, bags and the honest limit",
        p: [
          "The Maruti Suzuki Ertiga is a three-row MPV with seven seats. In Kashmir it is the most common answer to the question of how to move four or five people without paying for an Innova. The catch is the boot. With the third row up there is room for two soft bags or one medium suitcase behind it, and the rest has to go on the roof carrier, if the car has one, or on the passengers' laps. Ask the operator whether the car has a roof carrier and a tarpaulin before you count on it.",
          "Five adults with one medium suitcase each is a realistic Ertiga load for a week in the valley. Six adults is possible for airport transfers and short city runs, but not for the long days to Gulmarg, Pahalgam or Sonamarg, when people sit in the car for four to six hours. Current Ertigas are petrol or factory CNG; the older diesel ones you still see as taxis were made before 2020. CNG cars have a smaller boot because the cylinder takes part of the floor, so ask which fuel the car runs on if luggage space matters.",
        ],
      },
      {
        h: "Etios and Dzire: when a sedan is the right size",
        p: [
          "A sedan suits two to three adults and is the cheapest way to cover the valley. Toyota stopped making the Etios in India in 2020, but many Etios taxis are still in service in Srinagar, and they are roomy for a car of their size. The Maruti Suzuki Dzire is the sedan you will most often be sent today. Both carry two large suitcases and a cabin bag in the boot.",
          "A sedan has low ground clearance. That is fine on the national highway and the paved roads to Gulmarg, Pahalgam, Sonamarg, Doodhpathri and Yusmarg in summer. It is the wrong car for snow days, for the unpaved stretches near Gurez and Bangus, and for any trip where you expect to drive on slush. If your dates fall between December and early March, ask for an SUV even for two people, or at least confirm the driver carries snow chains.",
        ],
      },
      {
        h: "Innova and Innova Crysta: the family default",
        p: [
          "The Toyota Innova and its newer version, the Innova Crysta, are the standard family car for Kashmir. Both come as seven-seaters, with two captain seats in the middle row, or as eight-seaters with a bench. Captain seats are more comfortable for older travellers because each person gets an armrest and the aisle makes the third row easier to reach. Ask which layout your car has if that matters to you.",
          "The older Innova is still common and perfectly good on Kashmir roads, but the Crysta has a quieter cabin, better suspension and more power for the climbs to Gulmarg and Sinthan Top. Toyota also sells a newer hybrid model, the Innova Hycross, which a few operators now run. When a quote says only Innova, ask whether it is a Crysta and roughly how old it is. A seven-seater Innova or Crysta takes five or six adults with full luggage, the bags going behind the third row and on the roof.",
        ],
      },
      {
        h: "Fortuner: who actually needs one",
        p: [
          "The Toyota Fortuner is a large SUV with seven seats, but the third row is tight for adults, so treat it as a car for four or five. Some variants have four-wheel drive. People book a Fortuner in Kashmir for three reasons: a wedding or event where the car matters, a winter trip where they want the extra clearance and grip, or a honeymoon where comfort counts more than cost.",
          "Fortuners are fewer in number than Innovas, so book them early and ask the operator to confirm the exact car, including whether it is a four-wheel-drive version, before you pay. If the only reason you want a Fortuner is snow, an Innova Crysta or a Scorpio with chains does the same job on the Tangmarg to Gulmarg road, where the traffic police often stop cars without chains anyway.",
        ],
      },
      {
        h: "How many people and bags fit in each Kashmir cab?",
        list: [
          "Dzire or Etios: two or three adults, two large suitcases and a cabin bag.",
          "Ertiga: four or five adults with medium bags; six adults only for short transfers.",
          "Innova or Innova Crysta (seven seats): five or six adults with full luggage, using the roof carrier.",
          "Fortuner: four or five adults in comfort, luggage behind the third row folded down.",
          "Tempo traveller or Urbania: nine to seventeen people depending on the version, with a luggage rack or rear boot.",
          "Children count as passengers for seat belts and permits. Car seats are not supplied by most operators, so bring your own for infants.",
        ],
      },
      {
        h: "What should a Kashmir cab quote say in writing?",
        p: [
          "A fair quote names the car model, its seating layout and whether it is a Crysta or an older Innova, Ertiga or Dzire. It lists every day of the trip with the start town, the sightseeing and the night stop, so you can see whether Doodhpathri, Yusmarg or Aru is included or treated as extra. It states whether tolls, parking, the driver's food and the driver's night stay are included. It says how many kilometres or hours each day covers and what happens if you go beyond them.",
          "It should also say what the cab does not do. Outside cabs cannot carry you inside Pahalgam's valleys, Sonamarg's Thajiwas glacier road or Gulmarg's local stretches, where local union vehicles take over. A quote that says nothing about this will leave you surprised on the day. Ask for the driver's name and phone number a day before pickup, and keep the whole quote on WhatsApp or email.",
        ],
      },
      {
        h: "Which car for an airport pickup in Srinagar?",
        p: [
          "For two people, any sedan is enough. For a family of four with big suitcases, book an Ertiga at minimum and an Innova if the bags are large, since the airport run is the moment everyone has full luggage. Share your flight number so the driver tracks delays. Srinagar airport has a security check at the entry gate, and pickup happens in the parking area outside, so the driver will usually call you once you land.",
        ],
      },
      {
        h: "Does the cab change after Srinagar?",
        p: [
          "On most packages one car and one driver stay with you for the whole trip, which is the main reason to book through an operator rather than hiring cars town by town. Ask the operator to confirm this in writing. Some operators switch cars mid-trip, for instance a sedan for Srinagar days and an SUV for a winter Gulmarg day, which is fine if it is agreed in advance. Changes made without telling you usually mean a smaller or older car turns up.",
        ],
      },
      {
        h: "Driver, permits and the yellow plate",
        p: [
          "A taxi in India runs on a commercial registration with a yellow number plate and carries a permit, passenger insurance and a fitness certificate. Cabs that also go outside Jammu and Kashmir carry an All India Tourist Permit. A private car with a white plate offered as a taxi is not allowed to carry paying passengers, and its insurance may not cover you. It is fair to ask for the registration number before the trip and check that the plate is yellow when the car arrives.",
          "Drivers in Kashmir usually know the main routes well and speak Hindi or Urdu; many speak some English. Tell them your plan for the day each evening, including meal stops, so they can avoid the worst traffic hours on Boulevard Road and the Tangmarg climb.",
        ],
      },
    ],
    faqs: [
      { q: "How many suitcases fit in an Ertiga cab with all seven seats in use?", a: "Usually two soft bags or one medium suitcase behind the third row, plus whatever the roof carrier takes. Ask whether the car has a carrier before you book." },
      { q: "Is the Toyota Etios still available as a taxi in Srinagar?", a: "Yes. Toyota stopped making it in 2020, but many Etios taxis still run in Srinagar. Ask for the model year if age matters to you." },
      { q: "Does a CNG Ertiga have less luggage space?", a: "Yes. The CNG cylinder takes part of the boot floor, so ask which fuel the car uses if you have a lot of luggage." },
      { q: "Should I choose captain seats or a bench in an Innova Crysta?", a: "Captain seats are more comfortable for older travellers and make the third row easier to reach. A bench fits one more person." },
      { q: "Does the Fortuner come with four-wheel drive in Kashmir?", a: "Some variants do. Ask the operator to confirm that the exact car is a four-wheel-drive version before you pay." },
      { q: "How can I tell that a Kashmir cab is a legal taxi?", a: "It has a yellow commercial number plate, a permit and passenger insurance. A white-plate private car should not carry paying passengers." },
      { q: "Which car should I book for a Srinagar airport pickup with a family of four?", a: "An Ertiga at minimum, and an Innova if the suitcases are large, since everyone has full luggage on the airport run." },
      { q: "Will the same cab and driver stay with us for the whole Kashmir trip?", a: "On most packages yes. Ask the operator to confirm one car and one driver in writing, or to tell you in advance about any change." },
      { q: "Do Kashmir cab operators provide child car seats?", a: "Most do not, so bring your own seat for an infant or toddler and tell the operator in advance." },
      { q: "Is the Innova Hycross available as a cab in Kashmir?", a: "A few operators run it, but the Innova Crysta is still far more common. Ask for the exact model in the quote." },
    ],
  },

  "tempo-traveller-in-kashmir": {
    sections: [
      {
        h: "Count passengers and bulky bags together",
        p: [
          "The size of tempo traveller you need depends on luggage as much as on people. Most tempo travellers have a rear boot or a roof rack; the rack takes a lot, but bags on it have to be tied down and covered against rain and dust on the Jammu to Srinagar highway and the Zojila road. A group of twelve with one large suitcase each fits a 17-seater more comfortably than a 14-seater, because the spare seats take the cabin bags and coats.",
          "Ski groups, photographers with tripods and pilgrims with bedding all need more space than a normal tourist group. Tell the operator exactly what you are carrying: skis, boards, prams, wheelchairs and camera cases change the vehicle you should book.",
        ],
      },
      {
        h: "8, 9, 12, 14, 17 and 20 seater: what each one is",
        list: [
          "8 or 9 seater: a short van, often with captain seats. Good for one family with older members who want space.",
          "12 seater: the common choice for two families. Two rows of pushback seats and a rear bench.",
          "14 seater: the same body length as many 12-seaters with tighter rows. Fine for school or college groups with light bags.",
          "17 seater: a long-wheelbase van with a high roof. The usual choice for groups of twelve to fifteen adults with luggage.",
          "20 seater and above: long tempo travellers and mini buses. They manage the highway and Srinagar but struggle on narrow roads like Doodhpathri's last stretch.",
          "Force Urbania: a newer, more car-like van with a smoother ride and better seats, available from a few Srinagar operators in 10 to 17 seat versions.",
        ],
      },
      {
        h: "Choose a pickup plan for your group",
        p: [
          "Large groups rarely arrive together. If half the group lands at Srinagar on a morning flight and the rest on an evening one, either book two airport transfers in smaller cars or let the tempo traveller do two runs. If the group arrives by train at Katra or Jammu, the tempo traveller can wait at the station, but give the operator the train number and coach so the driver can find you.",
          "Pick one hotel for the group where possible. A tempo traveller collecting people from three different hotels on Boulevard Road and in Rajbagh loses an hour every morning.",
        ],
      },
      {
        h: "Check the layout and equipment of the van for your dates",
        p: [
          "Ask the operator for a photo of the actual vehicle, inside and out, and the registration number. Check that it has working seat belts on every seat, pushback seats if the trip includes long days, a heater for winter or late autumn, and an air conditioner for June and July on the Jammu side, where days are hot. A music system and charging points are nice; a first aid kit and a fire extinguisher are required.",
          "On a winter trip, ask whether the van carries snow chains and whether the driver has driven to Gulmarg or Sonamarg in snow. Long vans are harder to control on ice, and the traffic police may turn them back on bad days at Tangmarg or Gagangir.",
        ],
      },
      {
        h: "Set a realistic timetable for valley and longer drives",
        p: [
          "A tempo traveller is slower than a car on hill roads, and a large group takes longer at every stop. Plan for Srinagar to Gulmarg in about two hours, Srinagar to Pahalgam in about three hours, and Srinagar to Sonamarg in about two and a half hours in a van, with more time on weekends and in snow. Srinagar to Jammu is a full day on the national highway; Srinagar to Gurez is six to eight hours.",
          "Build the day around a single big outing rather than three. A group that tries Doodhpathri and Yusmarg on the same day spends most of it in the van.",
        ],
      },
      {
        h: "Union taxis and where a tempo traveller stops",
        p: [
          "In Pahalgam, Sonamarg and Gulmarg, outside vehicles stop at the main town or taxi stand. Groups switch to local union taxis or ponies for Aru, Betaab, Chandanwari, Thajiwas and the Gulmarg loop. A group of fifteen needs three or four union taxis, so budget time to organise them, or ask the operator to book them in advance. Parking for long vans is limited in Pahalgam and Gulmarg in peak season, so the driver may drop you and wait away from the centre.",
        ],
      },
      {
        h: "Request the fare and stop list",
        p: [
          "Ask for a quote that lists every day with the start, stops and night halt, the vehicle size, whether tolls, parking and state entry charges are included, and whether the driver's food and stay are included. For multi-day trips, the driver stays at your hotel or in a drivers' room nearby; some hotels charge for this, so confirm who pays. Ask about extra charges for night driving and for days that run beyond the agreed hours.",
          "If you are comparing operators, compare the same itinerary with the same vehicle size. A lower quote for a 12-seater is not cheaper if your group needs a 17-seater.",
        ],
      },
      {
        h: "Tempo traveller rules for school and college trips",
        p: [
          "School and college groups should carry a list of all students and staff with ID, the parents' consent letters and the institution's letter. Tell the operator that the group is students so they send an experienced driver, and ask for one teacher to sit in front with the driver on long drives. Keep the group in one van where possible, with a second smaller car for staff and emergencies on trips beyond the valley.",
        ],
      },
    ],
    faqs: [
      { q: "Can a 17 seater tempo traveller carry luggage for 12 people?", a: "Yes, usually. Twelve adults with one large suitcase each fit well, using the roof rack or rear boot and the spare seats for cabin bags." },
      { q: "Is a Force Urbania available in Srinagar?", a: "A few Srinagar operators run the Urbania in 10 to 17 seat versions. Ask for the exact vehicle and a photo before you book." },
      { q: "How long does Srinagar to Pahalgam take by tempo traveller?", a: "About three hours in normal traffic, longer on weekends and in snow." },
      { q: "Can a tempo traveller take our group to Aru and Betaab Valley?", a: "No. Outside vehicles stop in Pahalgam, and groups take local union taxis to Aru, Betaab and Chandanwari." },
      { q: "Do tempo travellers in Kashmir carry snow chains?", a: "Many do in winter, but confirm it in writing, and ask whether the driver has driven to Gulmarg or Sonamarg in snow." },
      { q: "Where does a tempo traveller driver stay overnight?", a: "At your hotel or a drivers' room nearby. Confirm whether the quote covers the driver's stay and food." },
      { q: "Is a 20 seater mini bus a good idea for Doodhpathri?", a: "Not usually. Long vans and mini buses struggle on the last narrow stretch, so a 12 or 17 seater is better for Doodhpathri." },
      { q: "Can a tempo traveller pick us up from Jammu Tawi railway station?", a: "Yes. Give the operator the train number and coach so the driver can find the group at the station." },
      { q: "What should I check inside a tempo traveller before the trip?", a: "Seat belts on every seat, pushback seats, a heater or AC for the season, a first aid kit, a fire extinguisher and a secure roof rack." },
      { q: "Is a tempo traveller suitable for a school trip to Kashmir?", a: "Yes, with an experienced driver, a teacher in front, ID for every student, consent letters and the school's letter." },
      { q: "How many union taxis does a group of 15 need in Pahalgam?", a: "Usually three or four, depending on the vehicle. Ask the operator to arrange them in advance in peak season." },
      { q: "Can we hire a tempo traveller for only the airport transfer?", a: "Yes. Operators in Srinagar take one-way airport transfers for groups, though rates differ from multi-day hire." },
      { q: "Is there parking for tempo travellers in Gulmarg?", a: "There is, but it is limited in peak season, so the driver may drop the group and wait away from the main meadow." },
      { q: "Can a tempo traveller go from Srinagar to Leh?", a: "Yes, over Zojila when the road is open. Plan the night halt at Kargil, and expect a full day each way." },
    ],
  },

  "self-drive-car-rental-in-kashmir": {
    sections: [
      {
        h: "When does it make sense to drive yourself in Kashmir?",
        p: [
          "Self-drive suits confident drivers who want to stop where they like, travel at odd hours and spend more than a day in places like Doodhpathri, Yusmarg or Lolab. It suits couples and friends who have driven in hills before. It does not save much money for a family that would otherwise share one cab for a week, once fuel, the deposit and union taxi charges at Pahalgam and Gulmarg are counted.",
          "It is a poor choice for first-time visitors on a short trip, for drivers who have never handled hairpin bends or snow, and for anyone planning Gurez, Keran or Zojila, where local knowledge matters. A cab with a driver also takes away the work of finding parking in Srinagar's old city and on Boulevard Road.",
        ],
      },
      {
        h: "How do rental cars show they are legal?",
        p: [
          "Self-drive rental cars in India are registered under the rent-a-cab scheme and carry black number plates with yellow letters. A white-plate private car rented through a social media post is not legal for rental, and its insurance will not cover you in an accident. Check the plate and the registration papers before you take the car, and keep the rental agreement, the insurance copy and the pollution certificate in the glove box.",
        ],
      },
      {
        h: "What the rental company gives you and what it asks for",
        list: [
          "You give: your original driving licence, a government photo ID, and a security deposit by card or transfer. Foreign drivers also need their passport and an International Driving Permit.",
          "You get: the car with papers, a fuel level noted on the agreement, the company's breakdown number and, in winter, ideally a set of snow chains.",
          "Agreed in writing: the kilometre limit if any, the fuel policy, the return time and place, and what the deposit covers.",
        ],
      },
      {
        h: "A day-by-day sense of driving times",
        p: [
          "Allow about two hours from Srinagar to Gulmarg, two and a half to three hours to Pahalgam, two to two and a half to Sonamarg, and about two hours to Doodhpathri or Yusmarg. Srinagar city traffic adds half an hour at peak times. These are drives to the town; time on the local roads beyond is extra. In snow, double them and leave early.",
        ],
      },
    ],
    faqs: [
      { q: "What number plate does a legal self-drive rental car have in India?", a: "A black plate with yellow letters, under the rent-a-cab scheme. A white-plate private car should not be rented out." },
      { q: "Do foreigners need an International Driving Permit to self-drive in Kashmir?", a: "Yes. Carry your national licence, an International Driving Permit and your passport." },
      { q: "Does self-drive save money for a family in Kashmir?", a: "Often not by much, once fuel, the deposit and union taxi charges at Pahalgam and Gulmarg are counted against one shared cab." },
      { q: "How long does it take to drive from Srinagar to Doodhpathri?", a: "About two hours in normal conditions, longer in snow or heavy traffic." },
      { q: "Should a first-time visitor self-drive in Kashmir?", a: "Usually not on a short first trip. A cab with a local driver is easier, especially for Srinagar parking and snow days." },
      { q: "What papers should be in a self-drive car in Kashmir?", a: "The rental agreement, registration, insurance and pollution certificate. Check them before you leave the rental office." },
      { q: "Can I self-drive to Gurez or Keran?", a: "It is possible in summer, but these border roads need local knowledge and permits, so a car with a local driver is the safer choice." },
      { q: "Is fuel included in a self-drive rental in Kashmir?", a: "Usually not. Most companies hand over the car with a noted fuel level and ask for the same level at return." },
      { q: "Do self-drive cars in Kashmir come with snow chains?", a: "Some do in winter. Ask for chains in writing when you book a car for December to March." },
    ],
  },

  "bike-rental-in-srinagar-and-leh": {
    sections: [
      {
        h: "Choose a bike you can handle at the end of a long day",
        p: [
          "Ladakh and Zojila rides are long. You will often ride six to eight hours on broken roads, at altitude, in cold wind, and arrive tired. A bike that feels fine on the first morning can feel heavy and tall at the end of that day. Pick the bike you can hold up at a standstill on loose gravel, not the one that looks best in photos.",
          "The Royal Enfield Himalayan is the usual choice for riders who want long-travel suspension and an upright seat. The Classic 350 is lower and familiar to many Indian riders, but its suspension is softer and it carries luggage less well. Lighter bikes such as the Bajaj Pulsar or KTM Duke range are easier to manage but less comfortable with luggage over rough stretches. If you are short, ask the renter for a bike with a lower seat or try a few before choosing.",
        ],
      },
      {
        h: "Build the route around rest and road access",
        p: [
          "On a Ladakh ride from Leh, plan one rest day in Leh before you ride anywhere high, then keep each day under about 250 km. Khardung La, Chang La and Wari La all go above 5,000 m, and your body and the bike both lose strength up there. Do not plan Leh to Pangong and back in one day on a bike.",
          "From Srinagar, the first big obstacle is Zojila, a narrow pass with slush, water crossings and long traffic queues. Ride it early in the morning. Ride the Srinagar to Leh highway in two days with a night at Kargil, not in one. On the Kashmir side, Gulmarg, Pahalgam, Sonamarg, Doodhpathri and Yusmarg are good single-day rides from Srinagar.",
        ],
      },
      {
        h: "Check the motorcycle and agreement before leaving",
        list: [
          "Tyres: good tread on both, no cracks on the sidewalls, and the correct pressure.",
          "Brakes: firm levers, and the rear brake should not drag.",
          "Chain: tight and lubricated, without rusted links.",
          "Lights, horn, indicators and mirrors: all working.",
          "Papers: registration, insurance, pollution certificate and the rental agreement, plus the permit if you are riding to the protected areas of Ladakh.",
          "Photos and video: walk around the bike and record every scratch and dent with the renter present.",
          "Spares: a spare tube, a puncture kit, a pump, a clutch cable and a basic tool kit, with the renter showing you which is which.",
        ],
      },
      {
        h: "Agree what support is included for the route",
        p: [
          "Ask the renter what happens if the bike breaks down at Pangong or in Nubra. Most Leh renters can arrange a mechanic or a pickup, but at a cost and with a wait of hours. On a group ride, a backup vehicle carries luggage, a spare bike or two, a mechanic and oxygen, and is worth its cost above about six riders. Get the support terms, the breakdown number and the recovery charge in writing.",
        ],
      },
      {
        h: "Local bike rules in Ladakh and Kashmir",
        p: [
          "Ladakh's local taxi and bike unions have, in some seasons, restricted rented bikes from outside Ladakh from riding certain routes. Rules change from year to year, so check with your hotel or renter in Leh before you plan to bring a bike from Manali or Srinagar. Wearing a helmet is compulsory for the rider and the pillion everywhere in India. Kashmir valley's traffic police check papers on the highway, so keep them in a waterproof pouch on you, not in a bag on the rack.",
        ],
      },
      {
        h: "Altitude, cold and the rider's body",
        p: [
          "A day on a bike at 4,000 m is harder than a day in a car at the same height. You are exposed to wind and cold, and you hold your body tense on bad roads. Drink water every hour, eat simple food, avoid alcohol in the first two days, and stop if you have a bad headache, nausea or confusion. Carry layers you can add at a pass: a thermal top, a fleece, a windproof jacket and winter gloves, even in July.",
        ],
      },
      {
        h: "Riding the Kashmir valley in a day",
        days: [
          "Srinagar to Sonamarg along the Sindh river, with a stop at Gagangir, then back the same day: about 160 km round trip.",
          "Srinagar to Pahalgam via Pampore and Anantnag, stopping at Awantipora's temple ruins: about 190 km round trip.",
          "Srinagar to Gulmarg via Tangmarg's hairpins, best ridden early to beat the cabs: about 110 km round trip.",
        ],
      },
    ],
    faqs: [
      { q: "Is the Royal Enfield Himalayan good for short riders?", a: "It has a fairly tall seat. Shorter riders should ask for a lower seat or try the bike at a standstill before choosing." },
      { q: "How many kilometres a day should I ride in Ladakh?", a: "Keep most days under about 250 km, and plan a rest day in Leh before riding high passes." },
      { q: "Can I ride from Leh to Pangong and back in one day?", a: "It is possible but not advisable. Plan a night at Pangong, since Chang La and the distance make a single day very tiring." },
      { q: "What spares should I carry on a rented bike in Ladakh?", a: "A spare tube, a puncture kit, a pump, a clutch cable and a tool kit, plus the renter's breakdown number." },
      { q: "Is a backup vehicle needed for a group bike trip to Ladakh?", a: "It is worth it above about six riders. It carries luggage, spares, a mechanic and oxygen." },
      { q: "Can bikes rented outside Ladakh ride all Ladakh routes?", a: "Local rules have restricted outside rented bikes on some routes in some seasons. Check the current rule in Leh before you plan." },
      { q: "Is a helmet compulsory for the pillion in Kashmir and Ladakh?", a: "Yes. Both rider and pillion must wear helmets everywhere in India." },
      { q: "How long is the ride from Srinagar to Gulmarg on a bike?", a: "About an hour and a half to two hours each way, longer on the Tangmarg climb in peak traffic." },
      { q: "What gloves do I need for a summer ride in Ladakh?", a: "Winter riding gloves, even in July, since the passes are cold and windy." },
      { q: "Should I ride Zojila in the morning or afternoon?", a: "In the morning, before traffic builds and before melting snow makes the slush deeper." },
    ],
  },
};
