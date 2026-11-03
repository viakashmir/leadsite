# Topical authority plan

Goal: for every destination we sell, Google (and AI assistants) should see one
deep, connected body of work, from the package page down to each attraction,
with every page a step from a quote request.

## How the site is organised (one cluster per destination)

```
/{dest}-tourism                         pillar: guide + full article library (#travel-guides)
 ├─ /{dest}-tourism/{section}           best time, how to reach, things to do... + matching articles
 ├─ /{dest}-tourism/{city}              city pillar + its articles + "More {dest} guides"
 │    └─ .../places-to-visit/{place}    attraction + "Guides that cover {place}"
 ├─ /blog/{post}                        spoke: breadcrumb Home > {Dest} Travel Guide > {City} > post,
 │                                      first mention of each place links to its guide,
 │                                      6 more articles from the same place, package links
 └─ /tour-packages/{dest|city}          money page + 6 articles (theme- or route-matched)
     /{theme}/{dest}, /tour-packages/from-{origin}-to-{dest}
```

Code: `src/lib/topicLinks.ts` (which articles belong where), `src/lib/entityLinks.tsx`
(in-text links, only to READY guides, max 8 per article, ambiguous place names
skipped), `src/components/location/TopicArticles.tsx` (the article blocks).
New articles join their cluster automatically from their `destination`,
`city`, `category` and title; nothing needs wiring by hand.

## Before this change (audit, 3 Nov 2026)

- 331 articles, 109 cities covered, but **no guide, attraction or package page
  linked to a single article**. Each article was reachable only from `/blog`
  and from 3 "related" links on other articles.
- Article breadcrumbs were Home > Travel Blog > post: no tie to the place.
- Only 6 articles linked anywhere from their text.
- Article schema named the place but gave no URL and no `mentions`.

## Scorecard by destination (local seed data; re-run against production)

| Destination | Articles | Guide | Cities READY | Places READY | Packages |
|---|---|---|---|---|---|
| Himachal | 85 | READY | 12/14 | 23/54 | 0 |
| Kashmir | 34 | READY | 10/10 | 36/36 | 99 |
| Ladakh | 24 | READY | 6/6 | 2/19 | 1 |
| Kerala | 22 | READY | 10/10 | 1/32 | 1 |
| Uttarakhand, Rajasthan, Goa, Andaman, Sikkim, Thailand | 20 each | READY | mixed | low | 0-1 |
| Tamil Nadu, Karnataka, Uttar Pradesh, West Bengal, Meghalaya | 1-5 | READY | 1-8 READY | low | 0 |
| Delhi | 0 | READY | n/a | 3/7 | 0 |
| Dubai, Bali, Maldives, Vietnam, Sri Lanka, Singapore... | 1-3 | mostly READY | 0 | 0 | 0-1 |

## Priorities (in order of money per hour)

1. **Packages on every tier-1 money page.** Only Kashmir has a real catalogue
   (99). Himachal has 85 articles feeding `/tour-packages/himachal`, which
   lists no packages. Add 8-15 priced packages each for Himachal, Goa, Kerala,
   Rajasthan, Uttarakhand, Andaman, Sikkim, Ladakh, Thailand, Bali, Dubai,
   Maldives (same method as `prisma/seed-kashmir-value.ts`: verified
   reference prices, nothing invented). The articles now push readers there.
2. **Publish attraction pages.** About 760 of 869 attraction pages are
   noindex (DRAFT). They are the long-tail searches ("solang valley",
   "tiger's nest") and now receive article links. Write and flip to READY in
   this order: Himachal, Uttarakhand, Rajasthan, Kerala, Ladakh, Goa, then
   Tamil Nadu and Karnataka.
3. **Deepen thin Indian clusters to 15-20 articles each**, using the Goa and
   Sikkim batches as the template (itineraries by length, best time and
   month guides, how-to-reach from top cities, honeymoon, family, budget):
   Tamil Nadu, Karnataka, Uttar Pradesh (Varanasi, Agra, Ayodhya),
   West Bengal (Darjeeling), Meghalaya and North East, Delhi.
4. **International clusters.** Thailand has 20 articles but 1 READY city.
   Write city guides first (Phuket, Krabi, Bangkok, Pattaya), then 10-15
   articles each for Bali, Dubai, Maldives, Vietnam, Sri Lanka and Singapore,
   including visa-for-Indians and cost guides.
5. **Keyword pipeline.** `docs/keyword-research/coverage-report.csv` lists
   178 non-excluded keywords still marked `MISSING_PAGE`. Map each to a
   cluster above; `npm run` the coverage check after each batch.

## After every deploy

- Submit changed URLs: `npx tsx scripts/indexnow-submit.ts` (Bing, Yandex,
  and through them several AI search tools).
- Search Console: resubmit `sitemap.xml`; watch Pages > "Crawled, currently
  not indexed" for the hubs and articles.
- Track per cluster: impressions and clicks on `/{dest}-tourism*` and
  `/blog/*`, and quote requests from `/tour-packages/*` (GA4 `generate_lead`).
