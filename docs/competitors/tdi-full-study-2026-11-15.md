# TDI Holiday Ventures: full page-by-page study (2026-11-15)

Third pass on tdiholidayventures.com, after the 10 Nov study and the 13 Nov depth
audit. This time every one of their 295 sitemap pages was crawled fresh and
paired by hand with our closest live page on www.tavelpackage.in, which was also
crawled live (182 pages, all 200, none noindex).

Files next to this report:

- `tdi-pages-2026-11-15.csv`: every TDI page with its title, meta description,
  H1, word count, FAQ count, tables, images, schema types and H2 topics. This
  is the full keyword inventory: title + H1 + H2 questions are the queries each
  page goes after.
- `tdi-scoreboard-2026-11-15.csv`: every TDI page next to our page, both sides'
  words, FAQs and H2 counts, and a result.

How a "win" is scored (stricter than 13 Nov): our page has at least 1,600 words
AND at least 10% more words than theirs AND at least as many FAQs. Words are
counted inside `<main>` only. Word count is not a ranking factor by itself; it
is used here as a proxy for "answers more of the searcher's questions".

## 1. What TDI is doing (as of today)

- Still 295 URLs, same as 10 Nov. But they are **growing existing pages**:
  site median went from 1,928 to 1,976 words, and best-time-to-visit-kashmir,
  kashmir-trip-cost and how-to-plan-a-kashmir-trip each gained 170 to 230
  words since 13 Nov. Expect them to keep pushing depth.
- Next.js site, one H1 per page, title median 52 characters, meta description
  median 145 characters.
- Schema on every page: TravelAgency + LocalBusiness + PostalAddress +
  ContactPoint + WebSite. FAQPage on 293 of 295 (1,835 FAQs in total),
  BreadcrumbList on 294, Article on 91, Service on 77, TouristTrip + Offer with
  UnitPriceSpecification on 19 packages, Hotel/LodgingBusiness on the hotel
  pages.
- Page template: answer-first H1, "Key facts" box, question-led H2s ("What does
  the Kashmir Classic package cost per person?"), median 3 tables and 18
  images, 5 to 16 FAQs, "Editorial check" box, "Keep exploring" links, sticky
  quote form, "Real guests" testimonials block.
- 18 titles carry a "from Rs" price.
- robots.txt allows every search and AI crawler.

| Section | Pages | Median words | Median FAQs |
|---|---|---|---|
| /packages | 60 | 2,395 | 7 |
| /blog | 103 | 2,342 | 6 |
| /destinations | 27 | 1,960 | 6 |
| /hotels | 16 | 1,724 | 5 |
| /services | 83 | 1,530 | 6 |
| Whole site | 295 | 1,976 | 6 |

## 2. Scoreboard: all 295 TDI pages vs ours

| Result | Pages | Meaning |
|---|---|---|
| WIN | 183 | Our page is deeper and has as many or more FAQs |
| TRAIL | 50 | We have a page, but it is thinner or has fewer FAQs |
| WORDS-ONLY | 1 | Deeper but fewer FAQs (from-mumbai) |
| MISSING | 43 | No page of ours targets it |
| UTILITY | 18 | Their contact, privacy, about, blog-category archives: not worth competing on |

Of the 183 wins, 65 are **shared**: one of our pages answers several of their
pages (section 4). Those count as wins on depth but are structurally weaker.

## 3. The 43 pages we do not have

Grouped by what they are, with the page we would build. "Real data" means we
must not write it without facts we can check (no invented hotel details).

### Packages (11)
| TDI page | Their words | What to build |
|---|---|---|
| /packages/2n-3d-srinagar-gulmarg-weekend | 2,553 | /tour-packages/kashmir/2-nights-3-days (duration page) |
| /packages/amazing-ladakh-turtuk | 1,985 | /tour-packages/turtuk hub + Turtuk packages |
| /packages/best-of-ladakh | 2,410 | /tour-packages/ladakh/9-nights-10-days |
| /packages/delightful-ladakh-hanle | 2,158 | /tour-packages/hanle hub + Hanle packages |
| /packages/ladakh-hanle-tsomoriri | 2,237 | Hanle + Tso Moriri package |
| /packages/discover-ladakh | 2,339 | Srinagar-Leh-Manali circuit package / blog |
| /packages/kashmir-tour-packages-from-japan | 2,215 | /blog/kashmir-tour-packages-from-japan |
| /packages/kashmir-tour-packages-from-siliguri | 3,244 | /tour-packages/from-siliguri-to-kashmir |
| /packages/kashmir-tour-packages-by-city | 2,381 | "Kashmir packages from your city" hub listing all 64 from-city pages |
| /hotels (hub) | 930 | Kashmir hotels and houseboats hub |
| /faq + /services/faq | 598 / 1,074 | Kashmir travel FAQ hub (FAQPage) |

### Named hotels and houseboats (13), real data
Butt's Clermont, Chicago Group, Fortune Resort Heevan, Four Points Sheraton,
LaLiT Grand Palace, Mascot, New Jacquline Heritage, Radisson Collection
Riverfront, Radisson Hotel, Sukoon, Taj Dal View, The Orchard Retreat,
WelcomHeritage Gurkha. Each ranks for the hotel's own name (high intent, low
competition). Building these needs verified facts per property (location,
room types, what the stay is known for, how to reach) and our own or licensed
photos. Recommendation: one page per property under /kashmir-tourism/srinagar/
stays/{slug} or /hotels/{slug}, only after facts are verified. No invented
prices, ratings or amenities.

### Stays by town (3)
/services/hotels-in-leh (1,757), /services/hotels-in-pangong (1,932),
/services/hotels-in-gurez-valley (1,142) -> where-to-stay-in-leh,
where-to-stay-at-pangong (camps vs guesthouses, Spangmik/Man/Merak), where-to-stay
-in-gurez.

### Activities and services (4)
/services/drone-rental-kashmir (1,547: drone rules and flying zones),
/services/hot-air-balloon-kashmir (1,318: Zabarwan tethered ride),
/services/kashmir-travel-agency-in-srinagar (2,344),
/blog/how-to-choose-a-kashmir-travel-agent (2,936). The last two are high-intent
"best travel agency in kashmir" queries; our angle is the honest one: how to
compare agents and why getting 3 quotes beats picking one.

### Places (2)
/destinations/rangdum (1,565), /destinations/sarchu (1,714): Ladakh place pages.

### Guides (7)
/blog/gulmarg-budget-trip (2,483), /blog/kashmir-in-autumn-golden-season
(2,156), /blog/best-time-for-honeymoon-in-kashmir (2,515),
/blog/kashmir-vs-himachal-for-honeymoon (2,862), /blog/kashmiri-food-by-season
(2,631), /blog/meals-on-a-kashmir-tour (2,672), and a dedicated
/blog/kashmir-6-day-itinerary (3,186; today we only have the honeymoon 6-day).

## 4. Pages where we "win" with one page against many of theirs

TDI builds one page per vehicle, per hotel booking intent, per route. We built
one hub. A hub can rank for the head term but rarely for every variant
("innova crysta on rent in srinagar", "17 seater tempo traveller srinagar").

| Our one page | TDI pages it is up against |
|---|---|
| /blog/kashmir-cab-types-innova-crysta-ertiga-dzire | 10 (Etios, Fortuner, Innova, Innova Crysta, mini bus, Swift Dzire, Tavera, Xylo, Ertiga, Urbania) |
| /blog/tempo-traveller-in-kashmir | 7 (8/14/17-seater, Srinagar to Gurez/Jammu/Kargil/Leh) |
| /blog/kashmir-taxi-guide | 5 (3-day and 6-day taxi tours, taxi packages, taxi service, /transport) |
| /blog/self-drive-car-rental-in-kashmir | 5 (car rental, self-drive Innova, Scorpio, Swift, Thar) |
| /blog/bike-rental-in-srinagar-and-leh | 3 (bike rental Srinagar, Ladakh, Royal Enfield Himalayan) |
| /blog/where-to-stay-in-gulmarg | 3 (best hotels in Gulmarg x2, hotel booking Gulmarg) |

Recommendation: split only where the variant has its own real search demand
and something genuinely different to say. Good candidates: Innova Crysta,
Tempo Traveller 12/17 seater, Urbania, Thar self-drive, Royal Enfield rental,
Srinagar to Leh tempo. Do NOT clone 10 near-identical vehicle pages: that is
the scaled-content pattern Google demotes. Check demand in GSC / keyword tool
first; split pages that pass.

## 5. The 50 pages where we trail

Biggest gaps first (TDI words -> ours):

**Package and duration pages (our weakest type).** Kashmir 3N/4D 1,845 -> 359,
4N/5D 1,870 -> 515, 5N/6D 1,927 -> 703, 6N/7D 1,647 -> 425, Ladakh 4N/5D
2,016 -> 354, Kargil 1,798 -> 656, Zanskar 2,465 -> 650, Tso Moriri 2,244 ->
715, Nubra 1,882 -> 462 (0 FAQs), Gurez 1,824 -> 973, Gulmarg stay package
1,954 -> 431. Their package pages have a day-by-day itinerary, where you stay,
what is included, cost per person, 8 to 10 FAQs. Ours are package lists.
Fix: a real editorial block per duration page (who this length suits, the
routing logic, night split, what changes by season, how quotes differ) plus
FAQs. Write per page, not a template filled with the place name.

**Guide pages generated from the database.** /honeymoon-packages 2,831 -> 145,
/kashmir-tourism/how-to-reach 3,751 -> 420 (0 FAQs),
/kashmir-tourism/srinagar/places-to-visit/mughal-gardens 2,309 -> 306,
/kashmir-tourism/pahalgam/best-time-to-visit 2,169 -> 805,
/kashmir-tourism/gulmarg/best-time-to-visit 2,123 -> 880,
/kashmir-tourism/things-to-do 2,112 -> 966,
/kashmir-tourism/srinagar/places-to-visit 2,198 -> 677 (vs their Srinagar
sightseeing tour), /himachal-tourism/manali 1,960 -> 1,465.

**Blog posts.** kashmir-in-summer 2,251 -> 1,318 (also our answer to their
summer package), kashmir-in-winter-snow-trip-guide 2,562 -> 1,951,
kashmir-tour-package-checklist-before-booking 2,650 -> 1,332,
kashmir-honeymoon-itinerary-6-days 1,358 vs their 6-day itinerary 3,186,
gulmarg-in-winter-guide 2,005 vs their snowfall-in-gulmarg 2,194.

**From-city pages (close calls).** Ahmedabad, Hyderabad, Kolkata, Pune,
Surat, Chennai, Goa, Jammu, Jaipur (vs their Rajasthan), Amritsar (vs Punjab),
Indore, Kochi, Nagpur: we are within a few hundred words, or ahead on words
but behind on FAQs. TDI also targets **states** (Gujarat, Kerala, Tamil Nadu,
Punjab, Rajasthan) with separate pages; we answer those with a city page.
Add 2 to 4 FAQs each and a state-level section (other airports and trains in
that state) on the matching city page.

**Near-misses on FAQ count only.** Kashmir honeymoon, Katra, Aru Valley,
best-time-to-visit-kashmir, offbeat Kashmir, Amarnath helicopter, Betaab,
senior citizens: deeper than TDI but under the 10% margin or FAQ count. Low
priority; top up when the page is next touched.

## 6. Things more words will not fix

Be honest with ourselves about why TDI may still outrank us on some queries:

1. **Local operator signals.** TDI has a Srinagar address, "since 1999",
   LocalBusiness + TravelAgency schema on every page and certifications. Our
   ORG legal name, address and phone in src/lib/site.ts are still empty.
   Filling those (real data only) is the single cheapest E-E-A-T fix.
2. **Real photos.** TDI median 18 images per page; 1,325 of our pages have no
   photo in `<main>`. Kashmir pages need their own photos.
3. **Price in title.** 18 TDI titles show "from Rs". Our rule is live prices
   only, so a title price would have to come from the live package price at
   build time, not typed. Owner decision.
4. **Links from other sites.** Not measurable from a crawl; check in
   Ahrefs/Semrush or GSC links report. Content alone will not beat a domain
   with more referring domains.
5. **Search Console.** The real scoreboard is GSC positions for these
   keywords, not word counts. Re-check positions 4 to 6 weeks after each batch.

## 7. Build order

1. **Missing high-intent pages (no hotel data needed):** travel agency in
   Srinagar + how to choose a Kashmir travel agent, Kashmir FAQ hub, Kashmir
   2N/3D, Ladakh 9N/10D, Siliguri origin, Japan origin, from-your-city hub,
   Hanle and Turtuk hubs, Srinagar-Leh-Manali circuit, where to stay in Leh /
   Pangong / Gurez, hot air balloon, drone rules, Rangdum, Sarchu, Gulmarg
   budget trip, Kashmir in autumn, best time for a Kashmir honeymoon, Kashmir
   vs Himachal honeymoon, Kashmiri food by season, meals on a Kashmir tour,
   Kashmir 6-day itinerary. About 27 pages.
2. **Trailing package and duration pages:** the 11 package/duration pages in
   section 5, written per page.
3. **Trailing DB guide pages:** how to reach Kashmir, Mughal gardens,
   Pahalgam and Gulmarg best time, things to do, Srinagar places, Manali,
   /honeymoon-packages.
4. **From-city top-ups:** FAQs + state sections on the 13 close calls.
5. **Selective splits** from section 4, only variants with real demand.
6. **Named hotel pages:** only once facts per property are verified.

Each batch goes through the keyword-coverage gate (add TDI URL to
competitor_urls in keyword-map.csv) and the 900-word blog gate, then
re-crawl both sites with the same scripts and update this scoreboard.

Content rule for every page: our own research and wording. TDI is used only to
see which questions searchers ask; nothing is copied from their pages.

## 8. Batch 1 status (2026-11-15, branch tdi-batch1-2026-11-15)

23 new guides written as blog posts (src/data/blog/kashmir-gaps-1/2/3.ts,
ladakh-gaps-1.ts, depth layers in gaps-extras*.ts), covering 26 of the 43
missing TDI pages. 27 keyword-map rows added with competitor_urls = TDI.
Every post passes check-blog-quality.ts; every keyword's words are in the
post's title, H2s or FAQs. Body words are within 2% of, or above, TDI words
x 1.1 minus our ~370-word page chrome, and every post has more FAQs than its
TDI page. Confirm with a live re-crawl after deploy.

| New page | TDI page(s) it answers |
|---|---|
| /blog/how-to-choose-a-kashmir-travel-agent | /services/kashmir-travel-agency-in-srinagar, /blog/how-to-choose-a-kashmir-travel-agent |
| /blog/kashmir-travel-faqs | /faq, /services/faq |
| /blog/kashmir-2-nights-3-days-itinerary | /packages/2n-3d-srinagar-gulmarg-weekend |
| /blog/kashmir-6-day-itinerary | /blog/kashmir-6-day-itinerary |
| /blog/gulmarg-budget-trip | /blog/gulmarg-budget-trip |
| /blog/kashmir-in-autumn | /blog/kashmir-in-autumn-golden-season |
| /blog/best-time-for-honeymoon-in-kashmir | /blog/best-time-for-honeymoon-in-kashmir |
| /blog/kashmir-vs-himachal-for-honeymoon | /blog/kashmir-vs-himachal-for-honeymoon |
| /blog/kashmiri-food-by-season | /blog/kashmiri-food-by-season |
| /blog/meals-on-a-kashmir-tour | /blog/meals-on-a-kashmir-tour |
| /blog/hot-air-balloon-ride-in-srinagar | /services/hot-air-balloon-kashmir |
| /blog/drone-rules-in-kashmir | /services/drone-rental-kashmir |
| /blog/ladakh-9-nights-10-days-itinerary | /packages/best-of-ladakh |
| /blog/hanle-and-tso-moriri-itinerary | /packages/delightful-ladakh-hanle, /packages/ladakh-hanle-tsomoriri |
| /blog/turtuk-ladakh-itinerary | /packages/amazing-ladakh-turtuk |
| /blog/srinagar-leh-manali-road-trip-itinerary | /packages/discover-ladakh |
| /blog/sarchu-travel-guide | /destinations/sarchu |
| /blog/rangdum-travel-guide | /destinations/rangdum |
| /blog/where-to-stay-in-leh | /services/hotels-in-leh |
| /blog/where-to-stay-at-pangong-lake | /services/hotels-in-pangong |
| /blog/where-to-stay-in-gurez-valley | /services/hotels-in-gurez-valley |
| /blog/kashmir-tour-packages-from-siliguri | /packages/kashmir-tour-packages-from-siliguri |
| /blog/kashmir-tour-packages-from-japan | /packages/kashmir-tour-packages-from-japan |

Still missing after batch 1: 13 named hotel and houseboat pages (need
verified facts), the /hotels hub, and the "Kashmir packages by city" hub
(needs its own page type: blog posts cannot carry hand-placed links).
