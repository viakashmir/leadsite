# tavelpackage.in site structure

Model: TravelTriangle (traveller fills one form, up to 3 verified agents quote, agents pay for leads).
Visual tokens: TripClap (Plus Jakarta Sans, `#F4511E`, ink `#131A24`), defined in `src/app/globals.css`.

## Location hierarchy

```
Zone (12)                north-india ... north-east-india, indian-islands, asia, middle-east, indian-ocean, europe, oceania
 └─ Destination (57)     what people search: kashmir, himachal, andaman, goa, thailand, bali, dubai...
     │                   = all 36 Indian states/UTs + 21 premium international destinations
     └─ City (271)       gulmarg, manali, north-goa, phuket, ubud...
         └─ Place (858)  dal-lake, solang-valley, baga-beach...  (Delhi, Chandigarh, Singapore list places directly)
Circuit (18)             golden-triangle, char-dham, shimla-manali, leh-ladakh, gangtok-darjeeling, north-east, europe...
```

- Source of truth for structure: `src/data/locations.ts`. Validate with `npm run check:locations`.
- Load/refresh into the DB: `npm run db:seed:locations` (idempotent; never overwrites summaries, images or guide content).
- Premium destinations (Kashmir, Ladakh, Andaman, Lakshadweep, all international except Nepal) get `leadUnlockPrice = 200` credits; others use the default 100.

## URL map

| URL | What it is | Example |
|---|---|---|
| `/tour-packages` | All destinations by zone, circuits, themes | |
| `/tour-packages/india`, `/tour-packages/international` | Scope indexes | |
| `/tour-packages/{destination\|city\|circuit}` | **Money page**: packages + quote form + places + origin links + guide links | `/tour-packages/kashmir`, `/tour-packages/gulmarg`, `/tour-packages/char-dham` |
| `/tour-packages/from-{origin}-to-{destination\|circuit}` | Departure-city slice (12 origins) | `/tour-packages/from-delhi-to-kashmir` |
| `/{theme}` | Theme index | `/honeymoon-packages` |
| `/{theme}/{destination\|city\|circuit}` | Theme slice (12 themes) | `/honeymoon-packages/kashmir`, `/family-packages/bali` |
| `/{destination}-tourism` | Destination travel guide | `/kashmir-tourism` |
| `/{destination}-tourism/{section}` | places-to-visit, things-to-do, best-time-to-visit, how-to-reach, travel-guide-tips | `/kashmir-tourism/best-time-to-visit` |
| `/{destination}-tourism/{city}[/{section}]` | City guide | `/kashmir-tourism/gulmarg/places-to-visit` |
| `/{destination}-tourism/[{city}/]places-to-visit/{place}` | Attraction page | `/kashmir-tourism/srinagar/places-to-visit/dal-lake` |
| `/packages/{slug}` | Package detail (unchanged) | |
| `/leads`, `/leads/{destination}[/{city}]` | Agent lead marketplace (unchanged, now on-demand ISR) | |

Themes: honeymoon, family, friends, budget, luxury, group, adventure, pilgrimage, wildlife, beach, trekking, solo.
Origins: Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, Lucknow, Chandigarh, Kochi.

Code: `src/app/(site)/tour-packages/[slug]`, `src/app/(site)/[section]/[[...path]]` (themes + guides),
templates in `src/components/location/`, lookups in `src/lib/locations.ts`, URL builders in `src/lib/urls.ts`.

Redirects (`next.config.ts`): `/destinations/*` -> `/tour-packages/*`, `/packages` -> `/tour-packages`,
`jammu-and-kashmir` -> `kashmir`, `golden-triangle-india` -> `golden-triangle`.

## Indexing rule

Every page renders, but a destination/city/place page is `noindex` and left out of the sitemap until its
`contentStatus` is `READY`. Theme and origin slices follow their destination's status. This stops
thousands of empty template pages from being indexed before the copy exists.

## Going live (order matters)

1. Apply `prisma/migrations/20261012000000_location_structure` to Supabase (additive only: new columns with defaults + `Place` and `CircuitStop` tables). `DATABASE_URL=... npx prisma migrate deploy`.
2. `DATABASE_URL=... npx tsx prisma/seed-locations.ts`. This renames `jammu-and-kashmir` to `kashmir` and `golden-triangle-india` to `golden-triangle` in place (same ids, so leads, packages and agent links are kept), moves Leh leads to Ladakh, merges `jaipur-raj` into `jaipur`, and turns the old `delhi` city into the Delhi destination.
3. Deploy the code.

Deploying the code before steps 1-2 breaks every page that reads the new columns.

## Next phases

1. Content for tier-1 destinations, cities and places (intro, best time, how to reach, tips, FAQs, images), then flip to `READY`.
2. Admin CMS for the new fields (current admin still creates destinations with random-suffix slugs, e.g. `kashmir-ab12`; needs fixing before anyone adds destinations by hand).
3. Lead pipeline: OTP, rate limit/bot check, qualification queue, routing + agent alerts, bad-lead reversal.
4. Home page and form redesign in the TripClap style; `/leads` page grouped by zone.
5. Hotels (`/hotels/{destination}`), testimonials, blog/stories.
