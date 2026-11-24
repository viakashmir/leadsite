# TDI Holiday Ventures and tavelpackage.in: page-by-page study (2026-11-24)

Fourth pass on tdiholidayventures.com (after 10, 13 and 15 November), and the
first full audit of every page on www.tavelpackage.in since the Kashmir
batches went live.

Crawled live on 24 November: all 307 TDI sitemap URLs and all 1,958
tavelpackage.in sitemap URLs (every page returned 200). Words are counted
inside `<main>`; FAQs are the Question items in each page's FAQPage schema.

Files next to this report:

- `tdi-pages-2026-11-24.csv`: every TDI page with title, description, H1,
  words, FAQs, tables, images, price mentions, schema and H2s.
- `tdi-scoreboard-2026-11-24.csv`: every TDI page next to our paired page
  (same hand-checked pairs as 15 November, followed through TDI's redirects)
  and the result.
- `tavelpackage-pages-2026-11-24.csv`: every one of our 1,958 pages with its
  section, title and description length, words, FAQs, FAQs that repeat on
  other pages, tables, images without alt text, H2 count and internal links in.

Scoring is unchanged from 15 November: WIN = our page has at least 1,600
words, at least 10% more words than TDI's page and at least as many FAQs.

## 1. What TDI changed in nine days

**They rebuilt the whole site around 12 and 13 November.**

1. **Flat, descriptive URLs.** The /blog, /packages, /destinations, /hotels
   and /services folders are gone. Every page now sits at the root with a
   long, question-shaped slug, for example
   `/kashmir-honeymoon-which-month-suits-a-couples-calendar`,
   `/kashmir-srinagar-to-gulmarg-taxi-one-way-day-trips`,
   `/gulmarg-tourism`, `/5n-6d-kashmir-explorer-packages`. All 284 old
   URLs answer with a 308 permanent redirect to the new ones.
2. **25 FAQs on almost every page.** Total FAQs went from 1,835 to 8,417.
   The median page now has exactly 25, against 5 to 10 before. All 8,417
   questions are unique: not one repeats on two pages, even with place
   names masked. They are specific and practical ("When does a Tangmarg room
   suit the group better than a Gulmarg room?", "Which Gondola details
   matter if my visit falls on a Monday?"). Only 237 mention TDI by name.
3. **Pages are 74% longer.** Median words went from 1,976 to 3,437. The
   H2 structure is mostly unchanged; the growth is the FAQ block plus new
   "Where do we reach you?" (contact capture), "Editorial check" and
   "planned and priced in 30 minutes" blocks.
4. **An FAQ hub.** `/faq` plus 12 topic pages (packages, honeymoon, best
   time, hotels and houseboats, cabs, Gulmarg/Pahalgam/Sonmarg, documents
   and safety, journey from Indian cities, journey from abroad, families and
   groups, food and shopping, Ladakh and Vaishno Devi add-ons): 1,035 short
   answers, each linking to the page that holds the detail. Pages run 3,800
   to 7,000 words with up to 77 FAQs.
5. **A 92 KB llms.txt written as a fact sheet for AI engines.** It opens
   with business facts (founded 1999, address, phone, hours, "2 Lakh+
   travellers", "4.8/5"), how prices work ("per person on twin sharing,
   taxes included"), a starting price, then 308 links in 15 sections, 306 of
   them with a one-line description that carries the price and nights.
6. **Prices and tables everywhere.** Prices appear on 94% of pages and tables
   on 91 to 100% of pages in every section.
7. **Still the same core schema** on every page (TravelAgency, LocalBusiness,
   FAQPage, BreadcrumbList), plus TouristTrip and Offer with unit prices on
   packages, and Hotel on hotel pages. Every page is self-canonical and
   indexable.

| TDI section | Pages | Median words | Median FAQs | Tables | Prices |
|---|---|---|---|---|---|
| Packages and collections | 63 | 4,080 | 25 | 98% | 100% |
| Guides (journal) | 133 | 3,624 | 25 | 91% | 94% |
| Destinations (-tourism) | 26 | 3,339 | 25 | 100% | 85% |
| Hotels and stays | 28 | 3,130 | 25 | 96% | 96% |
| Cabs and transport | 38 | 2,695 | 25 | 100% | 97% |
| FAQ hubs | 13 | 4,395 | 77 | 0% | 54% |
| **Whole site** | **307** | **3,437** | **25** | | |

New pages since 15 November (no earlier equivalent): the 12 FAQ topic pages
and the FAQ index, Chicago Group, Butts Clermont, Mascot, New Jacquline,
Sukoon and WelcomHeritage Gurkha houseboat pages, Fortune Heevan and Radisson
Srinagar hotel pages, `/certifications` and `/affiliate-program`.

## 2. Scoreboard: all 307 TDI pages against ours

| Result | 15 Nov | 24 Nov |
|---|---|---|
| WIN | 205 | **4** |
| TRAIL | 49 | **239** |
| WORDS-ONLY (more words, fewer FAQs) | 1 | 17 |
| MISSING (no page of ours) | 18 | 29 |
| UTILITY | 18 | 18 |

Of the 239 trailing pairs, 167 were wins nine days ago. Nothing on our side
got worse: TDI moved.

| TDI section | Pairs | TDI median words / FAQs | Our median words / FAQs | WIN | TRAIL | Missing |
|---|---|---|---|---|---|---|
| Packages and collections | 63 | 4,080 / 25 | 2,674 / 18 | 2 | 58 | 0 |
| Guides | 117 | 3,629 / 25 | 2,506 / 14 | 1 | 102 | 1 |
| Destinations | 26 | 3,339 / 25 | 2,351 / 17 | 1 | 25 | 0 |
| Cabs and transport | 40 | 2,695 / 25 | 1,978 / 16 | 0 | 32 | 0 |
| Hotels and stays | 36 | 3,163 / 25 | 2,650 / 17 | 0 | 20 | 13 |
| FAQ hubs | 13 | 4,395 / 77 | (none) | 0 | 1 | 12 |

189 distinct pages of ours trail. Matching the strict rule on every one would
take about **278,000 more words and 1,787 more FAQs**. Closing that by padding
is not an option (scaled-content risk, and it would not be genuine); section 5
says what to do instead.

Biggest single gaps (TDI words/FAQs vs ours):

| TDI page | TDI | Our page | Ours |
|---|---|---|---|
| /reaching-kashmir-from-anywhere-in-india-air-rail-and-road-compared | 5,125 / 25 | /kashmir-tourism/how-to-reach | 340 / 0 |
| /kashmir-when-to-visit-pahalgam-meadows-gold-and-snow | 3,682 / 25 | /kashmir-tourism/pahalgam/best-time-to-visit | 730 / 2 |
| /srinagar-sightseeing-tour | 3,465 / 25 | /kashmir-tourism/srinagar/places-to-visit | 622 / 1 |
| /kashmir-when-to-go-to-gulmarg-snow-flowers-quiet-weeks | 3,594 / 25 | /kashmir-tourism/gulmarg/best-time-to-visit | 800 / 3 |
| /top-10-things-to-do-in-kashmir | 3,437 / 25 | /kashmir-tourism/things-to-do | 880 / 7 |
| /kashmir-in-summer-guide | 3,624 / 25 | /blog/kashmir-in-summer | 1,136 / 6 |
| /kashmir-tour-package-from-goa | 4,487 / 25 | /tour-packages/from-goa-to-kashmir | 2,019 / 6 |
| /katra-first-or-kashmir-first-train-road-and-package-choices | 4,542 / 25 | /kashmir-tourism/katra | 2,246 / 14 |

## 3. Our site, every page

All 1,958 pages: 200, indexable, self-canonical, one H1, valid JSON-LD,
og:image everywhere, no duplicate titles. Technically clean.

The problem is depth outside the pages we have already worked on:

| Section (whole site) | Pages | Median words | Under 1,600 | Median FAQs | Pages with no FAQs |
|---|---|---|---|---|---|
| Blog | 445 | 1,120 | 319 | 6 | 1 |
| Duration pages | 401 | 264 | 393 | 3 | 0 |
| Guide place and route pages | 241 | 502 | 226 | 5 | 53 |
| Guide city pages | 239 | 223 | 227 | 0 | 137 |
| Guide section pages (how to reach, best time...) | 206 | 205 | 206 | 0 | 190 |
| Package hubs | 164 | 416 | 153 | 2 | 37 |
| Package pages | 101 | 2,485 | 0 | 13 | 0 |
| From-city pages | 64 | 2,031 | 16 | 6 | 14 |
| Theme pages | 42 | 693 | 33 | 3 | 15 |
| State guides | 40 | 353 | 37 | 3 | 9 |
| **Whole site** | **1,958** | **387** | **1,624** | | |

Kashmir and Ladakh only (519 pages): median 2,052 words; 195 under 1,600;
only 23 at or above TDI's median of 3,437. The thin Kashmir pages are the
section pages (38, median 287 words, no FAQs), duration pages for towns and
Ladakh (42, median 288), city guides (29, median 545) and place pages beyond
the 36 we deepened (50, median 1,108).

Other findings:

- **Repeated FAQs.** 2,855 of our 9,721 FAQs repeat on other pages. The 101
  package pages share the same questions word for word ("How many days do I
  need for this Kashmir trip?", "Will our phones work in Kashmir?", "How do
  we reach Srinagar?"). TDI has zero repeats. Repeated Q&A is the kind of
  templating that answer engines and Google discount.
- **llms.txt.** Ours lists 808 links, 548 with a description, in 6 sections,
  with no facts block, no pricing basis and no FAQ section. TDI's is shorter
  but every link carries a description with price and nights, and it opens
  with checkable business facts.
- **Titles.** 916 titles are over 60 characters and get cut in Google
  results; 306 meta descriptions are over 160.
- **Internal links.** One orphan (a Manipur place page); 222 pages have only
  one or two internal links pointing at them.
- **No hotel pages.** TDI has 13 named hotel and houseboat pages (Taj Dal
  View, Lalit Grand Palace, Four Points Sheraton, Radisson, Orchard Retreat,
  Sukoon, WelcomHeritage Gurkha and others). We have none.

## 4. Where TDI is still weak

- **One operator's voice.** Every answer funnels to TDI's own desk and
  packages. Our edge is up to three independent quotes; TDI cannot say that.
- **Unverifiable claims.** "2 Lakh+ travellers" and "4.8/5" are labelled
  owner-reported. We do not publish claims we cannot back.
- **URL churn.** Renaming 284 URLs nine days ago resets some of their
  signals while Google processes the redirects; long slugs like
  `/bangalore-to-kashmir-tour-package-flight-routes-and-a-valley-plan` are
  descriptive but clumsy. We should not copy this: our URLs are stable and
  already indexed.
- **Boilerplate blocks.** "Your Kashmir trip, planned and priced in 30
  minutes" appears twice on many pages; part of their word growth is
  repeated chrome.
- **India-wide coverage.** TDI is Kashmir and Ladakh only. We cover every
  state and international trips.

## 5. What to do (in order)

The goal is to answer more real questions than TDI on every Kashmir page,
not to match their word count by repetition.

1. **Unique FAQs first.** Replace the repeated package-page questions with
   questions specific to each package (its route, its hotels, its season),
   and raise every Kashmir page to 20 to 25 unique, practical FAQs. FAQ text
   is the cheapest genuine depth and the part AI engines lift most.
2. **Fill the empty Kashmir section pages** (how to reach, best time, places
   to visit, things to do for Kashmir, Srinagar, Gulmarg, Pahalgam,
   Sonamarg, Katra, Jammu, Gurez, Patnitop, Yusmarg, Doodhpathri): 38 pages
   at about 290 words with no FAQs. These are the largest gaps in the
   scoreboard.
3. **Build a Kashmir FAQ hub** (`/kashmir-tourism/faqs` plus topic pages),
   with short answers that link to our detailed pages. Our existing 7,588
   unique FAQs are the raw material.
4. **Rewrite llms.txt** with a facts block (what Tavel Package is, how the
   3-quote model works, how prices on the site are calculated), a
   description on every link, live "from" prices on package collections and
   an FAQ section.
5. **Town and Ladakh duration pages** (about 40 pages at 288 words), using
   the duration copy slot already built.
6. **Hotel pages only with verified facts.** 13 TDI pages we cannot match
   without real hotel data; the owner should decide whether to collect it.
7. **Shorten titles over 60 characters** on Kashmir pages that are not in
   Google's top 10 (check Search Console first).

What this study cannot show: rankings. Whether TDI's expansion moved them
up for our keywords needs Search Console data for our pages and a rank
check for theirs.
