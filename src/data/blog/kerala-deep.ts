import type { BlogPost } from "./types";

// Full Kerala guides: rewrites of thin posts keyed by slug (same URL and title)
// plus new guides. Factual, no em dashes, no invented prices.

export const KERALA_UPGRADES: Record<string, Pick<BlogPost, "intro" | "sections" | "faqs">> = {
  "kerala-honeymoon-6-days-munnar-alleppey": {
    intro:
      "A 6-day Kerala honeymoon usually flies into Kochi, spends two nights among the tea estates of Munnar, one night in the spice-scented forests of Thekkady, and ends with a private houseboat night on the Alleppey backwaters, with a final night in Kochi or on a beach. The best weather is from October to March, while the monsoon from June to September is green, quiet and good value for couples who enjoy rain and Ayurveda.",
    sections: [
      {
        h: "6-day Kerala honeymoon itinerary",
        days: [
          "Arrive at Kochi airport and drive to Munnar (about 130 km, 4 hours) past Cheeyappara and Valara waterfalls. Evening at the hotel among the tea gardens.",
          "Munnar: Eravikulam National Park, the Tea Museum, Mattupetty Dam, Echo Point and a sunset at a tea estate viewpoint.",
          "Drive to Thekkady (about 90 km). Spice plantation walk, a Kathakali or Kalaripayattu show in the evening.",
          "Morning boat ride on Periyar Lake, then drive to Alleppey (about 140 km) and board a private houseboat.",
          "Houseboat breakfast and disembark; drive to Kochi or Marari Beach. Evening in Fort Kochi.",
          "Fort Kochi walk at sunrise past the Chinese fishing nets, then depart.",
        ],
      },
      {
        h: "Munnar for couples",
        p: [
          "Munnar, at about 1,600 m, is a sea of tea estates rolling over the hills of the Western Ghats, with cool mornings and mist that clears to wide views. Couples enjoy plantation walks, the drive to Top Station on the Tamil Nadu border, picnics at Mattupetty and Kundala lakes, and quiet resorts set among the tea. Stay in a plantation bungalow or a resort with valley views, and ask for a room with a balcony to watch the mist roll in.",
        ],
      },
      {
        h: "Thekkady",
        p: [
          "Thekkady is the town beside Periyar Tiger Reserve, set in forests and spice gardens. The boat ride on Periyar Lake is the classic activity, with chances to see elephants, gaur and birds along the shore. Guided nature walks, bamboo rafting and spice plantation tours, where you see cardamom, pepper, cinnamon and vanilla growing, are popular with couples. Book the boat tickets early in the day, as they sell out.",
        ],
      },
      {
        h: "The houseboat night",
        p: [
          "A private houseboat (kettuvallam) cruises the backwaters of Alleppey from about noon, past paddy fields, villages and coconut groves, with lunch, tea and dinner cooked on board. Boats stop cruising at sunset and anchor for the night, and you disembark after breakfast. For a honeymoon, choose a one-bedroom premium or luxury boat with an upper deck, and ask about air-conditioning hours, as some boats run it only at night.",
        ],
      },
      {
        h: "Best time for a Kerala honeymoon",
        list: [
          "October to February: pleasant, dry and the peak season",
          "March to May: hot and humid on the coast, pleasant in Munnar",
          "June to September: monsoon, green and quiet, with lower prices and Ayurveda season",
          "Christmas and New Year: festive and busy; book early",
        ],
      },
      {
        h: "Romantic experiences",
        list: [
          "Candle-light dinner on the houseboat deck",
          "Couple's Ayurvedic massage at a certified centre",
          "Sunrise over the tea estates in Munnar",
          "A sunset cruise in Fort Kochi",
          "A cliff-top dinner in Varkala if you extend the trip",
        ],
      },
      {
        h: "Adding a beach",
        p: [
          "With a seventh day, add Marari Beach near Alleppey for a quiet fishing-village beach, or drive south to Varkala or Kovalam for cliffs, cafes and Ayurveda. Marari fits easily after the houseboat, while Varkala and Kovalam suit couples flying out of Thiruvananthapuram.",
        ],
      },
      {
        h: "Food to try together",
        list: [
          "Karimeen pollichathu: pearl spot fish cooked in banana leaf",
          "Appam with vegetable or chicken stew",
          "Kerala sadya on a banana leaf",
          "Malabar parotta with curry",
          "Payasam for dessert",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates, hotel preferences and any honeymoon extras on Tavel Package. Up to 3 verified Kerala agents send itemised packages with a private cab, stays and a houseboat.",
        ],
      },
      {
        h: "Where to stay as a couple",
        p: [
          "In Munnar, choose a resort among the tea estates or a heritage plantation bungalow with a fireplace; in Thekkady, a jungle resort or treehouse at the forest edge; and in Alleppey, a one-bedroom private houseboat or a lakeside resort in Kumarakom. Many hotels add honeymoon touches such as flower decoration, a cake and a candle-light dinner if you mention it when booking.",
        ],
      },
      {
        h: "Monsoon honeymoon in Kerala",
        p: [
          "Kerala's monsoon from June to September is one of the most romantic times to visit. Munnar is wrapped in mist, waterfalls are at their fullest, the backwaters are lush, and rates are lower. It is also the traditional season for Ayurvedic treatments. Expect heavy showers and carry rain gear, and avoid the beach for swimming, as the sea is rough.",
        ],
      },
      {
        h: "Getting around",
        p: [
          "A private cab with the same driver for the whole trip is the most comfortable option, as drives between Munnar, Thekkady and Alleppey are 3 to 4 hours each through winding hill roads. Start drives in the morning to arrive before dark.",
        ],
      },
    ],
    faqs: [
      { q: "Is Kerala good for a honeymoon?", a: "Yes. Tea hills, spice forests, private houseboats and beaches make it one of India's favourite honeymoon destinations." },
      { q: "How many days are enough for a Kerala honeymoon?", a: "Six days covers Munnar, Thekkady and Alleppey; add a day for a beach." },
      { q: "What is the best month for a Kerala honeymoon?", a: "October to February for the best weather; the monsoon for quiet, green, good-value stays." },
      { q: "Should we book a private houseboat?", a: "Yes. A one-bedroom private houseboat is the highlight of most Kerala honeymoons." },
      { q: "Which airport is best for a Kerala honeymoon?", a: "Kochi, which is closest to Munnar and Alleppey." },
      { q: "Is Munnar cold?", a: "Mornings and nights are cool, especially from November to February; carry a light jacket." },
    ],
  },

  "kerala-family-trip-7-days": {
    intro:
      "A 7-day Kerala family trip covers four very different landscapes: the historic port of Kochi, the tea hills of Munnar, the forests of Thekkady, an overnight houseboat in Alleppey, and a beach at Kovalam or Marari to finish. Drives between each are 3 to 4 hours, so the pace suits children and grandparents. October to March is the most comfortable season, and summer school holidays in April and May work well in Munnar.",
    sections: [
      {
        h: "7-day Kerala family itinerary",
        days: [
          "Arrive in Kochi. Fort Kochi, the Chinese fishing nets and an evening Kathakali show.",
          "Drive to Munnar via waterfalls and a spice garden.",
          "Munnar: Eravikulam National Park, the Tea Museum, Mattupetty Dam and Echo Point.",
          "Drive to Thekkady; spice plantation tour and an elephant-free cultural show.",
          "Periyar boat ride, then drive to Alleppey for an overnight houseboat.",
          "Disembark and drive to Kovalam or Marari Beach.",
          "Beach morning and depart from Thiruvananthapuram or Kochi.",
        ],
      },
      {
        h: "Why Kerala suits families",
        p: [
          "Kerala packs hills, wildlife, backwaters and beaches into a compact state with good roads and comfortable hotels. Children enjoy the houseboat, the Periyar boat ride, Nilgiri tahr at Eravikulam and the beach, while grandparents appreciate the gentle pace, Ayurvedic massages and cultural shows. Food is easy for families, with mild options such as appam and stew alongside spicier dishes, and many hotels serve North Indian food too.",
        ],
      },
      {
        h: "Houseboats with children",
        p: [
          "Families can book a two- or three-bedroom private houseboat so everyone stays together. The boat cruises in daylight and anchors at night, and meals are cooked on board. Keep small children away from the edges, ask for life jackets, and check that the boat has railings on the upper deck. A day cruise is an option if you prefer not to spend the night on the water.",
        ],
      },
      {
        h: "Best time for a family trip",
        list: [
          "October to March: pleasant weather everywhere",
          "April and May: hot on the coast, pleasant in Munnar; school holiday crowds",
          "June to September: monsoon, green and quiet; beaches unsafe for swimming",
          "Onam in August or September brings festivals and boat races",
        ],
      },
      {
        h: "Activities children enjoy",
        list: [
          "Spotting Nilgiri tahr at Eravikulam",
          "The Periyar Lake boat ride",
          "Kathakali make-up sessions before the show",
          "Kalaripayattu martial arts demonstrations",
          "Canoe rides in the narrow canals of Alleppey",
          "Watching fishermen at the Chinese nets in Fort Kochi",
        ],
      },
      {
        h: "Where to stay",
        list: [
          "Kochi: heritage hotels in Fort Kochi or city hotels near Marine Drive",
          "Munnar: resorts with family rooms and valley views",
          "Thekkady: hotels near the reserve with gardens",
          "Alleppey: a multi-bedroom private houseboat",
          "Beach: family resorts at Kovalam or Marari",
        ],
      },
      {
        h: "Safety tips",
        list: [
          "Swim only at lifeguard-patrolled beaches in season",
          "Carry motion-sickness medicine for the winding Munnar roads",
          "Use mosquito repellent, especially near the backwaters",
          "Keep children hydrated in the coastal heat",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Kochi has the best flight connections for this circuit, and Thiruvananthapuram is convenient for flying out after Kovalam. Ernakulam is the main railway station for Kochi. A private cab with the same driver for the whole trip is the most comfortable option for families.",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share the number of adults and children, their ages, your dates and preferred hotel category on Tavel Package. Up to 3 verified Kerala agents send itemised family packages.",
        ],
      },
      {
        h: "Food for families",
        p: [
          "Kerala food is easy for families. Breakfasts of appam with stew, idli and dosa are mild, and most hotels serve North Indian and continental dishes alongside Kerala food. On the houseboat, the cook can make milder versions of curries for children. Fresh fruit, tender coconut water and banana chips make good snacks for the road.",
        ],
      },
      {
        h: "Cultural experiences",
        p: [
          "Fort Kochi's cultural centres hold Kathakali and Kalaripayattu shows every evening, and children can watch the elaborate Kathakali make-up being applied before the show. Thekkady also has cultural shows. If your dates coincide with Onam or a temple festival, ask your agent about local celebrations and snake boat races.",
        ],
      },
      {
        h: "Packing list",
        p: [
          "Light cotton clothes, a light jacket for Munnar, rain gear in the monsoon, swimwear, sunscreen, insect repellent, basic medicines and modest clothes for temples.",
        ],
      },
      {
        h: "Choosing between Kovalam and Marari",
        p: [
          "For the last stop, Marari Beach near Alleppey is the easiest choice after the houseboat: a quiet fishing-village beach with resorts, about 30 minutes from Alleppey and 1.5 hours from Kochi airport. Kovalam, near Thiruvananthapuram, is livelier, with more restaurants and a lighthouse, and suits families flying out from Thiruvananthapuram. Both are best for swimming from October to March in lifeguard zones.",
          "If you have an extra day, Varkala's cliffs are another option, though better suited to older children and teenagers.",
        ],
      },
      {
        h: "Planning around school holidays",
        p: [
          "Indian school holidays in April and May, and the Christmas and New Year break, are the busiest times for Kerala family trips. Book houseboats, Munnar resorts and flights early for these periods, and expect higher prices. Travelling in October, November, February or March gives the same comfortable weather with fewer crowds. During the monsoon, resorts are quiet and rates low, which suits families focused on hills, houseboats and Ayurveda rather than beaches.",
        ],
      },
    ],
    faqs: [
      { q: "Is Kerala good for a family trip?", a: "Yes. Hills, wildlife, backwaters and beaches are close together, with comfortable hotels and easy food." },
      { q: "How many days do we need for Kerala with kids?", a: "Seven days covers Kochi, Munnar, Thekkady, Alleppey and a beach at a relaxed pace." },
      { q: "Is a houseboat safe for children?", a: "Yes, with supervision, railings and life jackets. Choose a multi-bedroom private boat." },
      { q: "What is the best time for Kerala with family?", a: "October to March for pleasant weather everywhere." },
      { q: "Which beach in Kerala is best for families?", a: "Kovalam's Lighthouse Beach and Marari Beach, in season and at lifeguard zones." },
      { q: "Which airport should we use?", a: "Kochi for arrival and Thiruvananthapuram for departure after Kovalam." },
    ],
  },

  "alleppey-houseboat-guide": {
    intro:
      "An Alleppey houseboat, or kettuvallam, is a converted rice barge with bedrooms, a deck and a crew who cook Kerala meals on board while you cruise the backwaters of Vembanad Lake and Kuttanad. Overnight boats usually board around noon, cruise until sunset, anchor for the night, and return after breakfast. Choose the boat type and number of bedrooms for your group, book a licensed operator, and plan for October to March for the best weather.",
    sections: [
      {
        h: "How an overnight houseboat works",
        p: [
          "Most overnight houseboats board at Alleppey's Punnamada or Finishing Point jetties around noon. You cruise through the backwaters with lunch on board, stop for tea and snacks in the afternoon, and anchor near a village before dark, as cruising at night is not allowed. Dinner is served on board, and after breakfast the next morning the boat returns to the jetty around 9 am. Kumarakom, across Vembanad Lake, also has houseboats.",
        ],
      },
      {
        h: "Types of houseboats",
        list: [
          "Deluxe: simple, comfortable boats with basic rooms",
          "Premium: better interiors, larger rooms and often an upper deck",
          "Luxury: designer interiors, glass-walled lounges and more amenities",
          "Shared houseboats: book a single room on a larger boat",
          "Day cruise boats: for a few hours without an overnight stay",
          "Bedrooms range from one to many for large groups",
        ],
      },
      {
        h: "Choosing a boat",
        list: [
          "Couples: a one-bedroom premium or luxury boat with an upper deck",
          "Families: a two- or three-bedroom private boat",
          "Large groups: multi-bedroom boats or two boats travelling together",
          "Ask about air-conditioning hours, as some boats run it only at night",
          "Check the boat's licence and safety equipment, including life jackets",
        ],
      },
      {
        h: "Backwater routes",
        p: [
          "Overnight cruises from Alleppey usually go through the Kuttanad region, known as the rice bowl of Kerala, where paddy fields lie below the level of the water. Routes pass Kainakary, the Pallathuruthy area and the edges of Vembanad Lake, with views of village life, churches and toddy tappers. Smaller canoes and shikara-style boats can reach narrower canals that big houseboats cannot.",
        ],
      },
      {
        h: "Food on board",
        p: [
          "The crew cooks fresh Kerala meals: rice with fish curry, karimeen (pearl spot) fry, vegetable thoran and avial for lunch, tea with banana fritters in the afternoon, and dinner with chicken or fish curry and chapati. Tell the operator about vegetarian or other dietary needs when booking. Some boats stop to buy fresh fish or prawns from local fishermen.",
        ],
      },
      {
        h: "Best time for a houseboat stay",
        list: [
          "October to February: pleasant weather and the busiest season",
          "March to May: hot and humid during the day",
          "June to September: monsoon, green and dramatic, with lower prices",
          "August: the Nehru Trophy snake boat race on Punnamada Lake",
        ],
      },
      {
        h: "Nehru Trophy Boat Race",
        p: [
          "The Nehru Trophy Boat Race, held on Punnamada Lake usually on the second Saturday of August, features long snake boats (chundan vallams) rowed by over a hundred oarsmen, cheered by huge crowds. Tickets for the viewing galleries are sold in advance. Houseboats are in high demand around the race, so book early.",
        ],
      },
      {
        h: "Alternatives to an overnight stay",
        list: [
          "A day cruise of a few hours with lunch",
          "A canoe or shikara ride through narrow canals",
          "The public ferry between Alleppey and Kottayam or Kollam",
          "Kumarakom's backwater resorts with sunset cruises",
        ],
      },
      {
        h: "Booking tips",
        list: [
          "Book licensed operators, ideally through an agent or classified boats",
          "Confirm boarding and check-out times, meals and AC hours in writing",
          "Ask for photos of the actual boat, not a catalogue image",
          "Avoid touts at the jetty",
        ],
        p: ["Share your dates and group size on Tavel Package to get up to 3 itemised houseboat quotes from verified Kerala agents."],
      },
      {
        h: "Life on the backwaters",
        p: [
          "The backwaters are a network of lakes, rivers and canals running parallel to the coast, home to villages that depend on the water. From the houseboat you will see people washing clothes at the water's edge, children rowing to school, ducks being herded across the canals, toddy tappers climbing coconut palms and paddy fields below the water level. Kuttanad's farmers grow rice on land reclaimed from the lake, protected by bunds.",
        ],
      },
      {
        h: "Houseboat etiquette",
        p: [
          "Respect the privacy of villagers along the banks, avoid playing loud music, and do not throw waste into the water. Tip the crew if you are happy with the service.",
        ],
      },
      {
        h: "Combining with Munnar and Kochi",
        p: [
          "Most travellers include one houseboat night in a 5 to 7 day Kerala trip, after Munnar and Thekkady and before Kochi or a beach. Alleppey is about 1.5 hours from Kochi, 4 hours from Thekkady and 4 hours from Varkala.",
        ],
      },
      {
        h: "What to pack for a houseboat",
        p: [
          "Pack light: a small bag with a change of clothes, sunscreen, a hat, mosquito repellent, a torch, any medicines and a book or binoculars for birdwatching. Most boats provide towels, bed linen and drinking water, but check when booking.",
        ],
      },
      {
        h: "Monsoon houseboat stays",
        p: [
          "In the monsoon, rain on the backwaters is spectacular and rates are lower, but cruising may be shortened in heavy weather. Choose a covered boat with good shelter.",
        ],
      },
    ],
    faqs: [
      { q: "What time does an Alleppey houseboat check in and out?", a: "Usually boarding around noon and returning around 9 am the next morning." },
      { q: "Do houseboats cruise at night?", a: "No. Boats anchor before dark and cruise only during the day." },
      { q: "Are meals included on a houseboat?", a: "Usually lunch, evening tea, dinner and breakfast are included; confirm when booking." },
      { q: "Is AC available on houseboats?", a: "On most boats, but some run it only at night. Ask before booking." },
      { q: "When is the Nehru Trophy Boat Race?", a: "Usually on the second Saturday of August on Punnamada Lake." },
      { q: "Is Alleppey or Kumarakom better for a houseboat?", a: "Alleppey has more boats and canal routes; Kumarakom is quieter, on Vembanad Lake." },
    ],
  },

  "munnar-thekkady-trip": {
    intro:
      "A 4-day Munnar and Thekkady trip covers Kerala's two best-known hill destinations: two nights in Munnar's tea estates for Eravikulam, Mattupetty and Top Station, and a night in Thekkady for the Periyar Lake boat ride and spice plantations. Fly into Kochi, drive about 130 km to Munnar, then about 90 km to Thekkady. October to May is the best time, and the monsoon brings mist, waterfalls and the lowest prices.",
    sections: [
      {
        h: "4-day itinerary",
        days: [
          "Kochi to Munnar via Cheeyappara and Valara waterfalls and a spice garden.",
          "Munnar: Eravikulam National Park, Tea Museum, Mattupetty Dam, Echo Point and Kundala Lake.",
          "Top Station in the morning, then drive to Thekkady; evening cultural show.",
          "Periyar boat ride and spice plantation tour, then return to Kochi.",
        ],
      },
      {
        h: "Munnar sightseeing",
        list: [
          "Eravikulam National Park: home of the Nilgiri tahr; usually closed for a few weeks in February and March for calving",
          "Tata Tea Museum: the history of tea in Munnar",
          "Mattupetty Dam and Echo Point: boating and lake views",
          "Top Station: views over the Western Ghats from the Tamil Nadu border",
          "Attukal and Lakkam waterfalls",
          "Anamudi, the highest peak in South India, seen from Eravikulam",
        ],
      },
      {
        h: "Thekkady and Periyar",
        p: [
          "Periyar Tiger Reserve surrounds an artificial lake created by the Mullaperiyar dam. The boat ride on the lake is the main way to see wildlife, with elephants, gaur, sambar and many birds along the shore. Tigers are rarely seen. The forest department also runs guided nature walks, bamboo rafting and border hiking, which need advance booking and have limited places.",
        ],
      },
      {
        h: "Spice plantations",
        p: [
          "Thekkady and the Kumily area are surrounded by spice plantations growing cardamom, pepper, cinnamon, cloves, nutmeg, vanilla and coffee. Guided tours explain how each is grown and processed, and shops sell fresh spices. Buy from reputable shops, and compare prices before buying in bulk.",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "September to March: pleasant weather and clear views",
          "April and May: warm days, pleasant in Munnar, busy with holidays",
          "June to August: monsoon, misty and green, with waterfalls at their fullest",
          "Neelakurinji: Munnar's slopes turn blue when this shrub blooms about once every twelve years",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Munnar has resorts in the tea estates, hotels in town, and quieter stays at Chithirapuram, Pallivasal and Suryanelli. Thekkady has hotels and homestays in Kumily, close to the reserve gate. Book valley-view rooms in Munnar for the best experience.",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Kochi's airport is about 110 km from Munnar. Aluva and Ernakulam are the nearest railway stations. The Munnar road climbs through hairpin bends, and the Munnar to Thekkady road passes through cardamom hills, taking about 3 hours.",
        ],
      },
      {
        h: "Adding Alleppey",
        p: [
          "Extend to 5 or 6 days by adding an Alleppey houseboat night after Thekkady, about 140 km away, and finish in Kochi. This is the classic Kerala circuit.",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates on Tavel Package. Up to 3 verified agents send itemised Munnar and Thekkady packages with a cab and stays.",
        ],
      },
      {
        h: "Food in the hills",
        p: [
          "Munnar and Thekkady have restaurants serving Kerala meals, North Indian and Chinese food, and resorts with buffet dining. Try fresh cardamom tea, Kerala parotta with curry and a vegetarian meals plate on a banana leaf. Spice shops in Kumily sell cardamom, pepper and tea to take home.",
        ],
      },
      {
        h: "Munnar or Thekkady: where to spend more time",
        p: [
          "If you love landscapes and walks, give Munnar the extra night for Eravikulam, Top Station and Kolukkumalai. If wildlife and spices interest you more, add a second night in Thekkady for a nature walk, bamboo rafting or a jeep safari in the cardamom hills. Couples often prefer Munnar's views, while families enjoy Thekkady's activities.",
        ],
      },
      {
        h: "Practical tips",
        p: [
          "Carry a light jacket for the evenings, motion-sickness medicine for the hill roads, and cash for spice shops and boat tickets. Book the Periyar boat ride early, as tickets are limited. Avoid driving the ghat roads after dark, especially in the monsoon.",
        ],
      },
      {
        h: "Wildlife and nature walks in Periyar",
        p: [
          "Beyond the boat ride, Periyar Tiger Reserve runs eco-tourism programmes led by trained guides from local communities: guided nature walks of a few hours, bamboo rafting through the reserve, full-day border hiking and night patrols. Places are limited each day, and some programmes need booking a day or more in advance at the eco-tourism centre in Thekkady. These walks give a closer feel for the forest than the boat ride and are popular with birdwatchers and photographers.",
          "Wear muted colours, carry leech socks in the monsoon, and follow the guide's instructions at all times.",
        ],
      },
      {
        h: "Getting around",
        p: [
          "A private cab with the same driver for all four days is the simplest option. Drives are on winding ghat roads with hairpin bends, so start early, avoid night driving and carry motion-sickness medicine. In Munnar, sights are spread in different directions, so plan each day by area: Eravikulam and the Tea Museum one day, Mattupetty, Kundala and Top Station the next. In Thekkady, auto-rickshaws and jeeps connect Kumily town with the reserve gate and spice gardens.",
          "Fuel up in Munnar town before heading to Top Station, as stations are few on that road.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Munnar from Thekkady?", a: "About 90 km, roughly 3 hours by road." },
      { q: "How many days are needed for Munnar and Thekkady?", a: "Four days: two nights in Munnar and one in Thekkady." },
      { q: "When is Eravikulam National Park closed?", a: "Usually for a few weeks in February and March during the Nilgiri tahr calving season." },
      { q: "Can I see tigers in Periyar?", a: "Sightings are rare; the boat ride is better for elephants, gaur and birds." },
      { q: "What is the best time for Munnar?", a: "September to May, or the monsoon for mist and waterfalls." },
      { q: "How far is Munnar from Kochi?", a: "About 130 km, around 4 hours by road." },
    ],
  },

  "senior-citizen-tour-packages-guide": {
    intro:
      "The best senior citizen tours in India combine comfortable travel, short drives and gentle sightseeing: Kerala's backwaters and hills, the Golden Triangle of Delhi, Agra and Jaipur, the temples of Varanasi, Goa's beaches and churches, and pilgrimages planned with helicopters or road access. Choose a slow pace, hotels with lifts, a private cab, and an agent who plans rest days and medical safety into the trip.",
    sections: [
      {
        h: "Best destinations for senior citizens",
        list: [
          "Kerala: houseboats, Ayurveda, Munnar's tea hills and easy drives",
          "Golden Triangle: Delhi, Agra and Jaipur, with flat sightseeing",
          "Varanasi: the ghats and Ganga Aarti, best seen by boat",
          "Goa: beaches, churches and relaxed resorts",
          "South India temples: Madurai, Rameswaram and Thanjavur",
          "Shimla and Mussoorie: hill stations at moderate altitude",
        ],
      },
      {
        h: "Planning a comfortable pace",
        p: [
          "Seniors usually enjoy trips most when there is one main activity a day, with rest in the afternoon. Limit road journeys to about 4 hours, avoid early-morning departures after late nights, and add a free day in longer trips. Choose hotels with lifts, ground-floor rooms or accessible bathrooms, and stay two or three nights in each place to avoid daily packing.",
        ],
      },
      {
        h: "Health and safety",
        list: [
          "Consult a doctor before travel, especially for high-altitude destinations",
          "Carry enough regular medicines, prescriptions and a medical summary",
          "Buy travel insurance that covers pre-existing conditions where possible",
          "Avoid very high places such as Ladakh, Kedarnath on foot or Sikkim's high passes if you have heart or lung conditions",
          "Drink safe water and eat at reliable restaurants",
        ],
      },
      {
        h: "Travel options",
        p: [
          "Flights are the fastest for long distances, and airlines can arrange wheelchair assistance if you request it when booking. Indian Railways offers lower-berth preference for senior citizens in many classes. A private cab with an experienced driver is the most comfortable for sightseeing. Avoid long overnight bus journeys.",
        ],
      },
      {
        h: "Pilgrimage tours for seniors",
        p: [
          "Many seniors want to visit the Char Dham, Vaishno Devi, Tirupati or Amarnath. Choose routes with road access or helicopter services, such as Badrinath by road or Kedarnath by helicopter, and plan ponies or palkis where needed. Get a medical check-up before high-altitude pilgrimages, and keep a buffer day in case of weather delays.",
        ],
      },
      {
        h: "Kerala for senior citizens",
        p: [
          "Kerala is often the first choice for older travellers: drives are short, hotels are comfortable, and the pace is naturally slow. A private houseboat lets seniors enjoy the backwaters from a chair on deck, Munnar's tea gardens can be seen from viewpoints, and Ayurvedic treatments are widely available. October to March is the best season.",
        ],
      },
      {
        h: "What to ask your agent",
        list: [
          "Are the hotels accessible, with lifts and grab rails?",
          "How long is each day's drive?",
          "Is there a free day in the itinerary?",
          "Are there hospitals near each stop?",
          "Can wheelchairs or ponies be arranged where needed?",
        ],
      },
      {
        h: "Packing tips",
        list: [
          "Comfortable walking shoes with good grip",
          "A light jacket or shawl for air-conditioned rooms and hill evenings",
          "Medicines in hand luggage",
          "A small torch and a walking stick if useful",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share the travellers' ages, health needs, dates and preferred destinations on Tavel Package. Up to 3 verified agents send itemised senior-friendly packages.",
        ],
      },
      {
        h: "Golden Triangle for seniors",
        p: [
          "Delhi, Agra and Jaipur make a classic first trip for older travellers, with flat sightseeing, good hotels and short drives on expressways. Plan the Taj Mahal visit early in the morning, use battery cars at the gates, and choose jeeps rather than elephants at Amber Fort. Five to six days at a relaxed pace is ideal, from October to March.",
        ],
      },
      {
        h: "Varanasi for seniors",
        p: [
          "Varanasi's ghats are steep, so the best way for seniors to see them is by boat at sunrise and during the evening Ganga Aarti. Choose a hotel with lift access and car access to the door, as many ghat-side hotels involve stairs and narrow lanes. Use cycle-rickshaws or cars for short distances.",
        ],
      },
      {
        h: "Group tours or private tours",
        p: [
          "Group tours for seniors offer company and a fixed pace, while private tours allow complete flexibility on timings, rest and food. Many families choose a private tour with a dedicated driver, with the agent on call throughout the trip.",
        ],
      },
      {
        h: "Goa for seniors",
        p: [
          "Goa suits seniors who want a relaxed beach holiday with good food and churches. Choose a resort in Candolim or South Goa with a pool, a restaurant on site and easy beach access. Old Goa's churches are on flat ground and easy to visit, and a Mandovi river cruise is a comfortable evening outing. November to February is the most comfortable time.",
          "Avoid the crowded Christmas and New Year week if you prefer a quiet trip.",
        ],
      },
      {
        h: "Choosing the right season",
        p: [
          "For seniors, mild weather matters most. Choose October to March for Kerala, Rajasthan, Varanasi and Goa, and April to June for hill stations such as Shimla, Mussoorie and Ooty. Avoid peak summer heat in the plains and the monsoon in the hills.",
        ],
      },
    ],
    faqs: [
      { q: "Which is the best place in India for senior citizens to visit?", a: "Kerala, the Golden Triangle, Varanasi and Goa are comfortable choices with gentle sightseeing." },
      { q: "Can senior citizens go to Kedarnath?", a: "Yes, by helicopter, pony or palki, after a medical check-up." },
      { q: "Do airlines provide wheelchairs?", a: "Yes, on request when booking." },
      { q: "Do senior citizens get lower berths on trains?", a: "Indian Railways gives senior citizens lower-berth preference in many classes, subject to availability." },
      { q: "Which places should seniors with heart conditions avoid?", a: "Very high-altitude places such as Ladakh and high passes, unless a doctor advises otherwise." },
      { q: "How should a senior citizen tour be paced?", a: "One main activity a day, drives under about 4 hours, and two or three nights in each place." },
    ],
  },
};

export const KERALA_DEEP: BlogPost[] = [
  {
    slug: "kochi-travel-guide",
    title: "Kochi Travel Guide: Fort Kochi, Mattancherry, Jew Town and Kathakali",
    description: "Kochi guide: Fort Kochi walks, Chinese fishing nets, St Francis Church, Mattancherry Palace, the Paradesi Synagogue, Kathakali shows, Biennale and tips.",
    category: "Itineraries",
    destination: "kerala",
    city: "kochi",
    date: "2026-11-02",
    intro:
      "Kochi is Kerala's historic port city and the usual gateway to the state. Its heart is Fort Kochi and Mattancherry, where centuries of Arab, Chinese, Portuguese, Dutch, British and Jewish trade left churches, palaces, a synagogue and the famous Chinese fishing nets. Spend two days walking the old quarters, watching a Kathakali performance and eating seafood, then head to Munnar or Alleppey. October to March is the best season, and the Kochi-Muziris Biennale fills the city with art in Biennale years.",
    sections: [
      {
        h: "2-day Kochi itinerary",
        days: [
          "Fort Kochi: the Chinese fishing nets at sunrise, St Francis Church, Santa Cruz Basilica, the Dutch Cemetery and Princess Street; evening Kathakali show.",
          "Mattancherry Palace, Jew Town and the Paradesi Synagogue, the spice market, then Marine Drive and a sunset harbour cruise.",
        ],
      },
      {
        h: "Chinese fishing nets",
        p: [
          "The huge cantilevered fishing nets along Fort Kochi's shore are believed to have been introduced by traders from China centuries ago. Teams of fishermen lower and raise them with counterweights of stones, and the catch is sold at stalls nearby, where restaurants will cook it for you. Sunrise and sunset are the best times to watch and photograph them.",
        ],
      },
      {
        h: "Churches of Fort Kochi",
        p: [
          "St Francis Church, built by the Portuguese in the early 16th century, is one of the oldest European churches in India. Vasco da Gama was buried here in 1524 before his remains were taken to Portugal, and his tombstone remains inside. Santa Cruz Basilica, with its white Gothic facade and painted interior, is a short walk away. The Dutch Cemetery nearby dates from the 18th century.",
        ],
      },
      {
        h: "Mattancherry Palace and Jew Town",
        p: [
          "Mattancherry Palace, built by the Portuguese and later renovated by the Dutch, which is why it is also called the Dutch Palace, holds remarkable Hindu temple murals depicting scenes from the Ramayana. Nearby, Jew Town's lanes are lined with antique and spice shops, leading to the Paradesi Synagogue, built in 1568 and known for its hand-painted Chinese tiles and Belgian chandeliers. The synagogue is closed on Fridays, Saturdays and Jewish holidays, so plan around those days.",
        ],
      },
      {
        h: "Kathakali and Kalaripayattu",
        p: [
          "Kathakali, Kerala's classical dance-drama, uses elaborate costumes, painted faces and expressive gestures to tell stories from the epics. Cultural centres in Fort Kochi hold daily performances, with the make-up session open to the audience an hour before the show. Kalaripayattu, Kerala's traditional martial art, is also demonstrated in the evenings. Both are good introductions to Kerala's culture.",
        ],
      },
      {
        h: "Kochi-Muziris Biennale",
        p: [
          "The Kochi-Muziris Biennale, India's largest contemporary art festival, is held in Biennale years from about December to March or April, with exhibitions in old warehouses, Aspinwall House and venues across Fort Kochi and Mattancherry. Check the current edition's dates, and plan two or three days to see the main venues.",
        ],
      },
      {
        h: "Other things to do",
        list: [
          "Marine Drive promenade and a harbour cruise",
          "Hill Palace Museum at Tripunithura",
          "Cherai Beach, about 30 km north",
          "Kochi Water Metro rides across the backwaters",
          "Bolgatty Palace and island",
          "Shopping for spices, antiques and handicrafts",
        ],
      },
      {
        h: "Food in Kochi",
        list: [
          "Fresh seafood cooked at the fishing net stalls",
          "Fish moilee, a mild coconut fish curry",
          "Appam with stew for breakfast",
          "Kerala parotta with beef or chicken fry",
          "Cafes in Fort Kochi's heritage buildings",
        ],
      },
      {
        h: "Getting around",
        p: [
          "Fort Kochi and Mattancherry are best explored on foot or by bicycle. Auto-rickshaws and app cabs connect them with Ernakulam, the commercial centre across the water, as do ferries and the Kochi Water Metro. Cochin International Airport is about 40 km from Fort Kochi.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Fort Kochi has heritage hotels in old colonial bungalows, boutique homestays and guest houses within walking distance of the sights. Ernakulam has business hotels close to the railway station and shopping. Choose Fort Kochi for atmosphere and Ernakulam for convenience.",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates on Tavel Package. Up to 3 verified agents send itemised Kerala packages starting in Kochi.",
        ],
      },
      {
        h: "History of Kochi",
        p: [
          "Kochi rose to prominence after a great flood in 1341 silted up the old port of Muziris and opened Kochi's natural harbour. Arab, Chinese and later European traders came for pepper and spices. The Portuguese built a fort here in 1503, the Dutch took the town in 1663, and the British followed in 1795. Each left buildings behind, and the result is the mix of churches, warehouses, bungalows and markets that makes Fort Kochi so walkable today. The Jewish community, whose history in Kerala goes back many centuries, gave Jew Town its name.",
        ],
      },
      {
        h: "Fort Kochi walking route",
        p: [
          "Start early at the Chinese fishing nets, walk past Vasco da Gama Square to St Francis Church, then follow Princess Street with its colonial houses and cafes to Santa Cruz Basilica. Continue to the Dutch Cemetery and the old Parade Ground, and stop at a heritage cafe for breakfast. From there, an auto-rickshaw takes you to Mattancherry for the palace and Jew Town. Allow a full morning, and carry water and a hat, as the day warms up quickly.",
        ],
      },
      {
        h: "Kochi with children",
        p: [
          "Children enjoy the fishing nets, the Kathakali make-up session, a ferry or Water Metro ride and the open grounds of the Parade Ground. Cherai Beach is a calm option for a beach afternoon in season, and the Hill Palace museum has a deer park.",
        ],
      },
    ],
    faqs: [
      { q: "How many days are enough for Kochi?", a: "Two days covers Fort Kochi, Mattancherry and a Kathakali show." },
      { q: "When is the Paradesi Synagogue closed?", a: "On Fridays, Saturdays and Jewish holidays." },
      { q: "Where is Vasco da Gama's tomb?", a: "His original tombstone is in St Francis Church, Fort Kochi; his remains were moved to Portugal." },
      { q: "When is the Kochi-Muziris Biennale?", a: "In Biennale years, from about December to March or April." },
      { q: "Where can I watch Kathakali in Kochi?", a: "At cultural centres in Fort Kochi, which hold daily evening performances." },
      { q: "How far is Fort Kochi from the airport?", a: "About 40 km." },
    ],
  },

  {
    slug: "munnar-travel-guide",
    title: "Munnar Travel Guide: Tea Gardens, Eravikulam, Top Station and Best Time",
    description: "Munnar guide: tea estates, Eravikulam and the Nilgiri tahr, Mattupetty, Top Station, waterfalls, Neelakurinji, best time, how to reach and where to stay.",
    category: "Itineraries",
    destination: "kerala",
    city: "munnar",
    date: "2026-11-02",
    intro:
      "Munnar, at about 1,600 m in the Western Ghats, is Kerala's best-known hill station, famous for endless tea estates, misty valleys and Eravikulam National Park, home of the endangered Nilgiri tahr. Two or three days cover the tea museum, Mattupetty Dam, Echo Point, Top Station and the waterfalls. It is about 130 km from Kochi and pleasant from September to May; the monsoon brings mist and full waterfalls.",
    sections: [
      {
        h: "3-day Munnar itinerary",
        days: [
          "Kochi to Munnar via Cheeyappara and Valara waterfalls; evening walk in town.",
          "Eravikulam National Park in the morning, Tea Museum, Lakkam waterfall.",
          "Mattupetty Dam, Echo Point, Kundala Lake and Top Station.",
        ],
      },
      {
        h: "Tea estates",
        p: [
          "Munnar's tea gardens were established by British planters in the late 19th century, and today the hills are covered with neatly clipped bushes, workers' villages and factories. The Tata Tea Museum at Nallathanni explains tea history and processing, with tastings. Plantation walks with a guide and stays in old estate bungalows are the best way to enjoy the landscape.",
        ],
      },
      {
        h: "Eravikulam National Park",
        p: [
          "Eravikulam protects high grasslands and shola forests and is home to the largest population of the endangered Nilgiri tahr, a mountain goat. Visitors take a forest department bus from the entry point to the Rajamala area, where tahr graze close to the road. Anamudi, the highest peak in South India, rises nearby. The park usually closes for a few weeks in February and March during the tahr calving season.",
        ],
      },
      {
        h: "Other sights",
        list: [
          "Mattupetty Dam: boating and views of the lake",
          "Echo Point: a lakeside spot named for its echo",
          "Kundala Lake: pedal boats and shikaras",
          "Top Station: views over the Western Ghats from the Tamil Nadu border",
          "Attukal, Lakkam and Cheeyappara waterfalls",
          "Pothamedu viewpoint and Photo Point",
        ],
      },
      {
        h: "Neelakurinji",
        p: [
          "Neelakurinji is a shrub that blooms only about once every twelve years, turning the Munnar hills a striking blue. The last major bloom was in 2018, so the next is expected around 2030. Smaller, localised blooms happen in between in other areas of the Western Ghats.",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "September to November: green after the monsoon, clear views",
          "December to February: cool, with chilly mornings",
          "March to May: warm, popular with summer travellers",
          "June to August: monsoon, misty, with waterfalls at their best and occasional landslides",
        ],
      },
      {
        h: "Adventure and activities",
        list: [
          "Trekking to Meesapulimala or Kolukkumalai with permits and guides",
          "Jeep safari to Kolukkumalai tea estate for sunrise",
          "Cycling through the tea estates",
          "Camping in plantations",
          "Boating at Mattupetty and Kundala",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Munnar has resorts and plantation bungalows across the hills, mid-range hotels in town, and homestays in Chithirapuram, Pallivasal and Suryanelli. Book a valley-view room, and choose a location close to the sights you want to see, as distances in Munnar can be long.",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Kochi's airport is about 110 km away, and the drive takes about 3.5 to 4 hours. Aluva is the nearest major railway station. From Madurai and Coimbatore in Tamil Nadu, roads climb through Bodinayakanur or Udumalpet.",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates on Tavel Package. Up to 3 verified Kerala agents send itemised Munnar packages with stays and a cab.",
        ],
      },
      {
        h: "History of Munnar",
        p: [
          "Munnar's name means three rivers, after the meeting of the Mudhirapuzha, Nallathanni and Kundala rivers in the town. In the late 19th century, British planters cleared forests to plant tea, and the town grew around estate offices, a railway and ropeways that carried tea down the hills. A great flood in 1924 destroyed the railway, which was never rebuilt. The Tata Tea Museum displays old machinery and photographs from these early years, and many estates still produce tea today.",
        ],
      },
      {
        h: "Kolukkumalai sunrise",
        p: [
          "Kolukkumalai, near Suryanelli about 35 km from Munnar town, is often described as one of the highest tea estates in the world. It is reached by a rough jeep track, and most visitors go before dawn to watch the sunrise over the Western Ghats, with clouds filling the valleys below. The old factory still processes tea by traditional methods, and a short tour is usually available. Carry warm clothes, as it is cold at sunrise.",
        ],
      },
      {
        h: "Munnar for couples and families",
        p: [
          "Couples choose plantation bungalows and valley-view resorts for quiet walks and sunsets, while families enjoy the tahr at Eravikulam, boating at Mattupetty and Kundala, and the waterfalls. The roads are winding, so carry motion-sickness medicine for children, and plan sightseeing in two separate directions on two days to avoid long drives back and forth.",
        ],
      },
      {
        h: "Food in Munnar",
        p: [
          "Munnar's restaurants serve Kerala meals on banana leaves, North Indian and Chinese dishes, and fresh tea and coffee from the estates. Try Kerala parotta with beef or vegetable curry, appam with stew, and homemade chocolates sold in town. Tea shops at the museum and estates sell fresh leaf and dust tea to take home.",
          "Many resorts serve set-menu dinners, so tell them in advance about vegetarian or other needs.",
        ],
      },
      {
        h: "Respecting the estates",
        p: [
          "Tea estates are private workplaces. Stay on paths, do not pluck leaves, and ask before photographing workers.",
        ],
      },
    ],
    faqs: [
      { q: "How many days are enough for Munnar?", a: "Two to three days covers the main sights." },
      { q: "When is Eravikulam National Park closed?", a: "Usually for a few weeks in February and March during calving." },
      { q: "When will Neelakurinji bloom next?", a: "The next major bloom is expected around 2030." },
      { q: "How far is Munnar from Kochi?", a: "About 130 km, 3.5 to 4 hours by road." },
      { q: "What is the best time to visit Munnar?", a: "September to May; the monsoon for mist and waterfalls." },
      { q: "What is Top Station?", a: "A viewpoint on the Kerala and Tamil Nadu border with views over the Western Ghats." },
    ],
  },

  {
    slug: "wayanad-travel-guide",
    title: "Wayanad Travel Guide: Edakkal Caves, Chembra, Banasura and Wildlife",
    description: "Wayanad guide: Edakkal Caves, Chembra Peak, Banasura Sagar Dam, Pookode Lake, waterfalls, wildlife safaris, how to reach from Kozhikode and Bengaluru, stays.",
    category: "Itineraries",
    destination: "kerala",
    city: "wayanad",
    date: "2026-11-02",
    intro:
      "Wayanad is a green highland district in north Kerala, in the Western Ghats bordering Karnataka and Tamil Nadu, known for coffee and spice plantations, forests, waterfalls and ancient caves. Spend three days on Edakkal Caves, Banasura Sagar Dam, Pookode Lake, Soochipara Falls and a wildlife safari at Muthanga or Tholpetty. It is about 100 km from Kozhikode and 280 km from Bengaluru. October to May is the best time, and plantation homestays are the best way to stay.",
    sections: [
      {
        h: "3-day Wayanad itinerary",
        days: [
          "Arrive via the Thamarassery ghat road; Lakkidi viewpoint and Pookode Lake.",
          "Edakkal Caves in the morning, Soochipara Falls in the afternoon.",
          "Banasura Sagar Dam and a wildlife safari at Muthanga or Tholpetty.",
        ],
      },
      {
        h: "Edakkal Caves",
        p: [
          "Edakkal Caves, near Ambalavayal, are natural rock shelters high on Ambukuthi Mala, reached by a steep walk and steps. Inside are ancient petroglyphs, carvings of human figures, animals and symbols, believed to date back thousands of years. The climb takes about an hour, and entry is limited to daytime slots. The caves are usually closed on Mondays.",
        ],
      },
      {
        h: "Chembra Peak",
        p: [
          "Chembra Peak, the highest point in Wayanad, is known for a heart-shaped lake on its slopes. The trek starts near Meppadi and is managed by the forest department with limited daily permits and guides. Access has been closed or restricted at times, so check the current status before planning.",
        ],
      },
      {
        h: "Lakes, dams and waterfalls",
        list: [
          "Banasura Sagar Dam: a large earth dam with boating and island views",
          "Pookode Lake: a natural lake in the forest with pedal boats",
          "Soochipara (Sentinel Rock) Falls: a waterfall reached by a forest walk",
          "Meenmutty Falls: a multi-tiered waterfall",
          "Karlad Lake: kayaking and zip-lining",
        ],
      },
      {
        h: "Wildlife",
        p: [
          "Wayanad Wildlife Sanctuary has two main ranges for visitors: Muthanga in the south and Tholpetty in the north, both with jeep safaris in morning and afternoon slots. Elephants, gaur, deer and many birds are often seen. The sanctuary connects with Bandipur, Nagarhole and Mudumalai, forming one of India's largest protected forest areas. Safaris may be suspended in the dry season for fire risk.",
        ],
      },
      {
        h: "Temples and heritage",
        list: [
          "Thirunelli Temple: an ancient Vishnu temple in the forest",
          "Jain temples at Sulthan Bathery and Puliyarmala",
          "Pazhassi Raja's tomb at Mananthavady",
          "Tribal heritage museum at Pookode",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to February: cool and pleasant, the best season",
          "March to May: warmer, good for plantations",
          "June to September: heavy monsoon, waterfalls in full flow, landslide risk",
        ],
      },
      {
        h: "Travel advisories",
        p: [
          "In July 2024, landslides struck villages near Meppadi, including Mundakkai and Chooralmala. Most of Wayanad's tourist areas reopened afterwards, but check current advisories before travelling, especially in the monsoon, and follow local guidance on closed areas.",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Wayanad is best enjoyed from plantation homestays and resorts set among coffee, pepper and tea, around Kalpetta, Vythiri, Sulthan Bathery and Mananthavady. Tree houses and forest resorts are popular with couples and families. Vythiri and Kalpetta are central for most sights.",
        ],
      },
      {
        h: "Getting there",
        p: [
          "Kozhikode airport and railway station are about 100 km from Kalpetta via the Thamarassery ghat road with its hairpin bends. Kannur airport is another option. From Bengaluru, the drive of about 280 km via Mysuru passes through Bandipur forest, where night traffic is restricted.",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates and group size on Tavel Package. Up to 3 verified agents send itemised Wayanad packages with stays and a cab.",
        ],
      },
      {
        h: "Plantations and spices",
        p: [
          "Wayanad's economy grows from its plantations: coffee, pepper, cardamom, tea and rubber spread across the hills, along with paddy fields in the valleys. Many homestays are working plantations where you can walk among coffee bushes and pepper vines, learn how beans are processed, and buy fresh spices and coffee. Coffee blooms in early spring fill the air with a jasmine-like scent, and the harvest runs from about November to February.",
        ],
      },
      {
        h: "Tribal communities",
        p: [
          "Wayanad has one of Kerala's largest Adivasi (tribal) populations, including the Paniya, Kurichiya, Kuruma and Kattunaika communities. Some community tourism projects and the museum at Pookode share their history, crafts and traditions. Visit respectfully, through recognised programmes, and ask before photographing people.",
        ],
      },
      {
        h: "Wayanad with Mysuru and Coorg",
        p: [
          "Wayanad combines naturally with Mysuru, Coorg and Ooty for a South India road trip. Mysuru is about 120 km away via Bandipur or Nagarhole forests, Coorg about 130 km, and Ooty about 100 km via Gudalur. A 7 to 8 day loop from Bengaluru can cover Mysuru, Coorg, Wayanad and Ooty.",
        ],
      },
      {
        h: "Adventure in Wayanad",
        p: [
          "Wayanad offers zip-lining and kayaking at Karlad Lake, trekking to viewpoints such as Kurumbalakotta and Brahmagiri with forest permits, cycling through plantations and rock climbing at Phantom Rock near Ambalavayal. Treks in protected forests need permits and guides from the forest department, and some trails close in the monsoon or the fire season. Ask your homestay about current access before setting out.",
          "Bamboo rafting at Kuruva Island has also been restricted at times, so check before going.",
        ],
      },
      {
        h: "Who will enjoy Wayanad",
        p: [
          "Wayanad suits nature lovers, families, couples and road-trippers who want forests, waterfalls and plantation stays rather than beaches or nightlife. Birdwatchers and photographers find plenty to enjoy in its wildlife sanctuaries.",
        ],
      },
    ],
    faqs: [
      { q: "How far is Wayanad from Kozhikode?", a: "About 100 km, around 3 hours by road." },
      { q: "When are Edakkal Caves closed?", a: "Usually on Mondays; check the current timings." },
      { q: "Is Chembra Peak open?", a: "Access has been restricted at times; check with the forest department before planning." },
      { q: "What is the best time to visit Wayanad?", a: "October to February." },
      { q: "Is Wayanad safe after the 2024 landslides?", a: "Most tourist areas reopened; check current advisories before travelling." },
      { q: "How far is Wayanad from Bengaluru?", a: "About 280 km via Mysuru." },
    ],
  },

  {
    slug: "varkala-kovalam-beach-guide",
    title: "Varkala and Kovalam Guide: Cliff Beaches, Lighthouse, Ayurveda and Stays",
    description: "Varkala and Kovalam beach guide: Varkala Cliff, Papanasam, Kappil, Kovalam's Lighthouse Beach, Poovar, Ayurveda, best season, stays and safety tips.",
    category: "Itineraries",
    destination: "kerala",
    city: "varkala",
    date: "2026-11-02",
    intro:
      "Varkala and Kovalam are Kerala's best-known beach towns, both near Thiruvananthapuram. Varkala, about 50 km north, has dramatic red laterite cliffs above the sea, lined with cafes and guest houses, and the sacred Papanasam beach below. Kovalam, about 16 km south of the city, has crescent beaches with a lighthouse, Ayurveda resorts and calm swimming in season. Spend two nights in each, from October to March, when the sea is calm.",
    sections: [
      {
        h: "4-day Varkala and Kovalam plan",
        days: [
          "Arrive at Thiruvananthapuram and drive to Varkala; sunset walk on the North Cliff.",
          "Papanasam beach, Janardhana Swamy temple, Kappil beach and backwaters.",
          "Drive to Kovalam; Lighthouse Beach and sunset.",
          "Poovar estuary boat ride, an Ayurvedic massage, and depart.",
        ],
      },
      {
        h: "Varkala Cliff",
        p: [
          "Varkala's cliffs are formed of red laterite and sedimentary rock and are recognised as a geological monument. A path runs along the North Cliff, lined with cafes, yoga studios, shops and guest houses, with steps leading down to the beaches. Sunsets from the cliff are spectacular. Walk carefully, as parts of the cliff edge are unfenced and erosion is ongoing.",
        ],
      },
      {
        h: "Beaches and temples in Varkala",
        list: [
          "Papanasam beach: considered sacred; Hindus perform rituals for ancestors here",
          "Janardhana Swamy temple: an ancient Vishnu temple above the beach",
          "Black Beach and Odayam beach: quieter stretches north of the cliff",
          "Kappil beach: where a backwater lake meets the sea",
          "Sivagiri Mutt: the samadhi of the social reformer Sree Narayana Guru",
          "Ponnumthuruthu: an island temple in the backwaters, reached by boat",
        ],
      },
      {
        h: "Kovalam beaches",
        list: [
          "Lighthouse Beach: the busiest, below the Vizhinjam lighthouse",
          "Hawa Beach (Eve's Beach): calm, popular for swimming in season",
          "Samudra Beach: quieter, with fishing boats and resorts",
          "Climb the lighthouse for views over the coast",
        ],
      },
      {
        h: "Poovar",
        p: [
          "Poovar, about 20 km south of Kovalam, is where the Neyyar river meets the sea, forming an estuary with a golden sand bar separating the river from the ocean. Boat rides through mangroves and backwaters lead to the beach. Floating cottages and resorts make it a quiet base for couples.",
        ],
      },
      {
        h: "Ayurveda",
        p: [
          "Kovalam and Varkala are among Kerala's main Ayurveda centres. Treatments range from a one-hour massage to residential programmes of one to three weeks under a doctor's supervision. Choose centres approved by the Kerala government or certified by recognised bodies, consult the doctor before treatment, and be wary of unqualified practitioners. The monsoon months, especially the Malayalam month of Karkidakam, are traditionally considered ideal for treatments.",
        ],
      },
      {
        h: "Best time to visit",
        list: [
          "October to March: calm seas, sunny days, the main season",
          "April and May: hot and humid",
          "June to September: monsoon, rough seas, swimming unsafe, Ayurveda season",
        ],
      },
      {
        h: "Beach safety",
        list: [
          "Swim only in flagged areas with lifeguards",
          "Never swim in the monsoon sea",
          "Beware of strong currents, especially at Varkala",
          "Stay away from the cliff edge at night",
        ],
      },
      {
        h: "Where to stay",
        p: [
          "Varkala's North Cliff has guest houses and boutique hotels within walking distance of cafes and beaches, while the South Cliff and Odayam are quieter. Kovalam has everything from budget hotels near Lighthouse Beach to luxury resorts on the headlands and in Samudra. Poovar has floating cottages and resorts.",
        ],
      },
      {
        h: "Thiruvananthapuram",
        p: [
          "Between the two beaches, Thiruvananthapuram offers the Padmanabhaswamy Temple, where only Hindus may enter and a strict dress code applies, the Napier Museum and the Kuthiramalika Palace. The city's international airport is the gateway for both beaches.",
        ],
      },
      {
        h: "Getting quotes",
        p: [
          "Share your dates on Tavel Package. Up to 3 verified agents send itemised beach packages with stays, transfers and Ayurveda.",
        ],
      },
      {
        h: "Food and cafes",
        p: [
          "Varkala's cliff-top cafes serve fresh seafood, Kerala thalis, and international menus with sea views, while Kovalam's beachfront restaurants display the day's catch for you to choose. Try fish curry with tapioca, prawn fry, appam with stew and fresh coconut water. Many cafes in Varkala also cater to vegans and health-conscious travellers, and yoga breakfasts are common.",
        ],
      },
      {
        h: "Yoga and wellness",
        p: [
          "Both towns have many yoga studios, from drop-in morning classes to month-long teacher training courses. Varkala in particular has a strong yoga and wellness scene along the cliff, with sunrise sessions overlooking the sea. Choose established schools with experienced teachers, and combine yoga with Ayurvedic treatments for a wellness holiday.",
        ],
      },
      {
        h: "Shopping",
        p: [
          "Both beaches have shops selling Kerala handicrafts, cotton clothing, Kashmiri and Tibetan goods, spices, tea and Ayurvedic oils. Compare prices, as cliff-top shops in Varkala can be more expensive than the markets in Thiruvananthapuram. Kerala's traditional off-white kasavu sarees and mundus with gold borders make good souvenirs.",
        ],
      },
      {
        h: "Getting there and around",
        p: [
          "Thiruvananthapuram International Airport is about 45 km from Varkala and 15 km from Kovalam. Varkala has its own railway station on the main coastal line, a short auto-rickshaw ride from the cliff. Kovalam is reached by road from Thiruvananthapuram Central station. Auto-rickshaws and taxis connect the beaches, and a private cab is easiest for travelling between the two.",
          "Allow about 1.5 to 2 hours for the drive from Varkala to Kovalam, depending on city traffic.",
        ],
      },
      {
        h: "Who each beach suits",
        p: [
          "Varkala suits younger travellers, yoga lovers and couples who enjoy cafes and cliffs. Kovalam suits families and Ayurveda guests who want resorts and calmer beaches.",
        ],
      },
    ],
    faqs: [
      { q: "Which is better, Varkala or Kovalam?", a: "Varkala for cliffs, cafes and a backpacker feel; Kovalam for resorts, calm beaches and Ayurveda." },
      { q: "How far is Varkala from Thiruvananthapuram?", a: "About 50 km." },
      { q: "How far is Kovalam from Thiruvananthapuram?", a: "About 16 km." },
      { q: "When is the best time to visit Kerala's beaches?", a: "October to March, when the sea is calm." },
      { q: "Is it safe to swim in Varkala?", a: "Only in season at lifeguard zones; currents can be strong." },
      { q: "Is the monsoon good for Ayurveda?", a: "Yes. The monsoon, especially Karkidakam, is traditionally considered ideal for treatments." },
    ],
  },

  {
    slug: "kerala-food-guide",
    title: "Kerala Food Guide: Sadya, Appam, Karimeen, Malabar Biryani and More",
    description: "Kerala food guide: sadya on a banana leaf, appam and stew, puttu, karimeen pollichathu, fish moilee, Malabar biryani, payasam, snacks and where to eat.",
    category: "Planning",
    destination: "kerala",
    city: "kochi",
    date: "2026-11-02",
    intro:
      "Kerala's food is built on coconut, rice, seafood and spices, with distinct traditions from Hindu, Syrian Christian and Malabar Muslim kitchens. Start the day with appam and stew or puttu and kadala curry, try a sadya on a banana leaf, order karimeen pollichathu by the backwaters, and eat Malabar biryani in the north. Finish with payasam, and snack on banana chips and pazham pori. Toddy shops serve some of the spiciest and most authentic food.",
    sections: [
      {
        h: "Breakfast dishes",
        list: [
          "Appam with stew: lacy rice pancakes with a mild coconut milk stew",
          "Puttu and kadala curry: steamed rice cylinders with black chickpea curry",
          "Idiyappam: string hoppers, often with egg curry",
          "Dosa and idli with sambar and chutney",
          "Kerala parotta: flaky layered bread",
        ],
      },
      {
        h: "Sadya",
        p: [
          "Sadya is Kerala's traditional vegetarian feast, served on a banana leaf at Onam, weddings and festivals. It can include over twenty dishes: rice, sambar, rasam, avial (mixed vegetables in coconut and curd), thoran (dry stir-fry with coconut), olan, erissery, kalan, pickles, papadam, banana chips and two or more kinds of payasam. Eat with your right hand, starting from rice and dal. Restaurants serve sadya on special days, and hotels arrange it for groups.",
        ],
      },
      {
        h: "Seafood",
        list: [
          "Karimeen pollichathu: pearl spot fish marinated and cooked in banana leaf",
          "Fish moilee: a mild coconut milk curry",
          "Kerala fish curry: tangy and red, made with kudampuli (malabar tamarind)",
          "Prawn roast and crab roast",
          "Meen pollichathu and mussels fry in the north",
        ],
      },
      {
        h: "Malabar cuisine",
        p: [
          "North Kerala's Malabar region has a rich Muslim culinary tradition shaped by centuries of Arab trade. Thalassery biryani, made with short-grain kaima rice, is the most famous dish, along with pathiri (thin rice flatbread), meat dishes and a wide range of snacks such as unnakaya and chatti pathiri. Kozhikode is also known for halwa, sold in many colours on Sweet Meat Street (SM Street).",
        ],
      },
      {
        h: "Syrian Christian food",
        p: [
          "Kerala's Syrian Christian kitchens are known for beef ularthiyathu (a dry spiced roast), duck roast, appam with stew at Easter and Christmas, and fish molee. Kochi and Kottayam are good places to try these dishes, often in family-run restaurants.",
        ],
      },
      {
        h: "Desserts and snacks",
        list: [
          "Payasam: ada pradhaman, palada and paal payasam",
          "Pazham pori: banana fritters, with tea",
          "Banana chips fried in coconut oil",
          "Unniyappam: small sweet fritters",
          "Kozhikode halwa",
          "Sulaimani: spiced black tea with lemon",
        ],
      },
      {
        h: "Toddy shops",
        p: [
          "Toddy shops (kallu shaap) serve toddy, a mildly alcoholic drink tapped from coconut palms, alongside fiery local food: kappa (tapioca) with fish curry, duck curry and pickles. Some shops near the backwaters are popular with visitors, and a few resorts recreate the toddy-shop menu. The food is often very spicy and the setting simple.",
        ],
      },
      {
        h: "Where to eat",
        list: [
          "Fort Kochi seafood restaurants and cafes",
          "Houseboat kitchens on the backwaters",
          "Kozhikode for Malabar biryani and halwa",
          "Temple towns and vegetarian restaurants for sadya",
          "Homestays for home-cooked meals",
        ],
      },
      {
        h: "Food tours and cooking classes",
        p: [
          "Cooking classes in Kochi homes, spice tours in Thekkady and food walks in Kozhikode are great ways to learn the cuisine. Ask agents on Tavel Package to add one to your trip.",
        ],
      },
      {
        h: "Tips for eating in Kerala",
        list: [
          "Ask for less spice if you prefer mild food",
          "Most dishes use coconut oil; ask if you have allergies",
          "Vegetarians eat very well, especially with sadya and breakfast dishes",
          "Try Kerala coffee and tea in the hills",
        ],
      },
      {
        h: "Regional variations",
        p: [
          "Kerala's food changes as you travel. Central Kerala, around Kochi and Kottayam, is known for Syrian Christian dishes and seafood. The south, around Thiruvananthapuram, leans towards vegetarian temple food and the most elaborate sadyas. The backwater regions specialise in karimeen, duck and toddy-shop fare. In the north, the Malabar coast is famous for biryani, pathiri and snacks influenced by Arab traders.",
        ],
      },
      {
        h: "Coconut, rice and spices",
        p: [
          "Coconut is the base of Kerala cooking: grated into thorans, ground into curries, pressed into milk for stews and used as oil for frying. Rice is eaten at almost every meal, often the red, parboiled Kerala rice called matta. Spices that grow in the hills, such as pepper, cardamom, cloves and cinnamon, flavour everything from biryani to payasam, and curry leaves and mustard seeds are tempered in coconut oil for most dishes.",
        ],
      },
      {
        h: "Festival foods",
        p: [
          "Onam, Kerala's harvest festival in August or September, is celebrated with the grandest sadya of the year. Vishu in April brings special dishes such as Vishu kanji and Vishu katta. Christmas and Easter bring appam, stew, duck roast and plum cake, and Eid brings Malabar biryani and pathiri. Visiting during a festival is a great way to taste these dishes.",
        ],
      },
      {
        h: "Drinks of Kerala",
        p: [
          "Tender coconut water is sold at roadside stalls across Kerala and is the best way to stay cool. Kerala's hills produce excellent tea and coffee, served strong and sweet. Sulaimani, a spiced black tea with lemon, is a Malabar favourite after biryani, and sambharam, a spiced buttermilk, is served at sadya and on hot days. Toddy is the traditional palm drink, sold at licensed toddy shops.",
        ],
      },
    ],
    faqs: [
      { q: "What is Kerala's most famous food?", a: "Sadya, appam with stew, puttu, karimeen pollichathu and Malabar biryani." },
      { q: "What is a Kerala sadya?", a: "A vegetarian feast of many dishes served on a banana leaf at Onam and celebrations." },
      { q: "What is karimeen pollichathu?", a: "Pearl spot fish marinated in spices and cooked wrapped in banana leaf." },
      { q: "Where can I eat Malabar biryani?", a: "In Kozhikode, Thalassery and across north Kerala." },
      { q: "What is toddy?", a: "A mildly alcoholic drink tapped from coconut palms, served at toddy shops with spicy food." },
      { q: "Is Kerala good for vegetarians?", a: "Yes. Sadya, breakfast dishes and many curries are vegetarian." },
    ],
  },
];
