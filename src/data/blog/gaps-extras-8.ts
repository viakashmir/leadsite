import type { BlogSection } from "./types";

// Last closing FAQs (2026-11-15).

type Extra = { sections?: BlogSection[]; faqs?: { q: string; a: string }[] };
const f = (q: string, a: string) => ({ faqs: [{ q, a }] });

export const GAP_EXTRAS_8: Record<string, Extra> = {
  "gulmarg-budget-trip": f("What is the cheapest month to visit Gulmarg?", "October and November are usually the cheapest, with clear weather and few visitors. March is the cheapest month with snow still on the upper slopes. The Christmas to mid-January weeks are the most expensive of the year."),
  "kashmir-in-autumn": f("How many days should I spend in Kashmir in autumn?", "Five to six nights: two or three in Srinagar for the gardens and chinars, a Gulmarg day trip, and two nights in Pahalgam via the saffron fields of Pampore. Add a day if you want to see the colours at more than one garden at sunrise."),
  "kashmir-vs-himachal-for-honeymoon": f("Which is closer to Delhi, Kashmir or Himachal?", "By road, Himachal: Shimla is about 7 to 8 hours and Manali 12 to 14 hours. By air, Srinagar is about 1.5 hours from Delhi, which makes Kashmir quicker door to door for couples who fly."),
  "kashmiri-food-by-season": f("Can I visit the floating vegetable market in winter?", "It runs at dawn for much of the year, but it is smallest in deep winter, when fewer vegetables grow on the floating gardens. Summer and early autumn are the best seasons to see it, reached by shikara from your houseboat."),
  "meals-on-a-kashmir-tour": f("How much should I budget for lunches on a Kashmir tour?", "It depends on where you eat. Dhabas in the markets of Pahalgam, Sonamarg and Tangmarg are cheapest; restaurants near the Gondola and the main meadows cost more. Ask your driver for local places, and keep a daily lunch allowance per person in cash for the hill stations."),
  "drone-rules-in-kashmir": f("Who gives drone permission in Kashmir?", "The district magistrate of the district where you want to fly, with the local police informed, on top of the national Digital Sky zone rules. Allow weeks for a decision."),
  "ladakh-9-nights-10-days-itinerary": f("Should I fly or drive into Ladakh for a 10 day trip?", "Flying into Leh is quicker but needs two full days of rest on arrival. Driving in from Srinagar over two days helps acclimatisation but adds days. For a 10 day trip, fly in and keep the two rest days."),
  "hanle-and-tso-moriri-itinerary": f("Which is better, Hanle or Tso Moriri?", "Hanle for the night sky, the observatory and a quiet village stay; Tso Moriri for a high lake, birds and the Korzok monastery. They are close enough to combine, which is why most plans include both."),
  "turtuk-ladakh-itinerary": f("Is Turtuk worth visiting?", "Yes, for its Balti culture, apricot orchards, green fields and history, which feel very different from the rest of Ladakh. A night in a homestay is the best way to see it."),
  "srinagar-leh-manali-road-trip-itinerary": f("What is the best month for the Srinagar Leh Manali road trip?", "Late June to mid September, when both roads are usually open. September has the clearest skies and the fewest landslides on the Manali side."),
  "sarchu-travel-guide": f("Can I drive from Leh to Manali without stopping at Sarchu?", "Yes, by driving through in one long day of 12 to 15 hours, or by stopping at Jispa or Keylong instead. Most travellers split the drive."),
  "rangdum-travel-guide": f("Is Rangdum Buddhist or Muslim?", "Rangdum and the upper Suru valley are mainly Buddhist, with the Zanskari culture beginning here, while the lower Suru valley towards Kargil is mainly Shia Muslim."),
  "where-to-stay-in-leh": f("Is it better to stay in the same Leh hotel each time?", "Yes. Returning to the same hotel between trips lets you store luggage, travel light to Nubra and Pangong, and keep the same comfortable room."),
  "where-to-stay-at-pangong-lake": f("Can I see the sunrise from my Pangong stay?", "Yes, from most camps and homestays along the western shore. Step out at first light in warm layers; the colours on the water change quickly after sunrise."),
  "where-to-stay-in-gurez-valley": f("Are Gurez homestays family-friendly?", "Yes. Families are welcome, rooms are simple and hosts help with meals and local trips. Carry warm clothes for children and snacks for the long drive."),
  "kashmir-tour-packages-from-siliguri": f("Which airport is nearest to Siliguri for Kashmir trips?", "Bagdogra (IXB), about 15 km from Siliguri, with connections to Srinagar via Delhi or Kolkata."),
  "kashmir-tour-packages-from-japan": f("Can I ski in Gulmarg with a Japan travel insurance policy?", "Check that your policy covers skiing at high altitude, off-piste if you plan it, and medical evacuation from Jammu and Kashmir. Many standard policies exclude one of these."),
};
