# Global long-tail content plan

Goal: Tavel Package becomes the place travellers use for trustworthy, factual
travel advice on every country, state and city, and every guide page leads to
a package enquiry. Content is written in batches, each batch passes the
keyword coverage gate before it ships.

## Page set for every destination (country, state/region, city)

| Page | URL | Answers |
|---|---|---|
| Overview | `/{dest}-tourism[/{city}]` | what it is like, why go, quick facts, FAQs |
| Places to visit | `.../places-to-visit` + one page per attraction | top sights, timings, entry, how to reach |
| Things to do | `.../things-to-do` | activities, treks, experiences |
| Best time to visit | `.../best-time-to-visit` | seasons, month-by-month weather (one H3 per month) |
| How to reach | `.../how-to-reach` + origin route pages | air, rail, road, bus, distances |
| Travel tips | `.../travel-guide-tips` | permits, visas, money, safety, connectivity |
| Food to try | `.../local-food` | dishes, street food, sweets, drinks |
| Culture and heritage | `.../culture-and-heritage` | history, festivals, languages, crafts, monuments, etiquette |
| Packages | `/tour-packages/{slug}` + theme and origin slices | itineraries, what decides price, quotes |

International destinations add: visa for Indians, currency and costs, getting
around, and safety. A page goes live (indexable, in the sitemap) only once its
copy is written; empty sections stay noindex.

## Order of batches

1. Done: Himachal Pradesh and Ladakh (guides, places, 120 route pages, food, culture).
2. Highest-demand Indian states: Kashmir, Rajasthan, Kerala, Goa, Uttarakhand, Sikkim and the North East, Andaman, Tamil Nadu, Karnataka, Maharashtra, Delhi, Uttar Pradesh.
3. Top outbound countries for Indian travellers: Thailand, Dubai/UAE, Bali/Indonesia, Singapore, Malaysia, Maldives, Vietnam, Sri Lanka, Nepal, Bhutan, Europe (Switzerland, France, Italy), Turkey, Japan, Australia.
4. Remaining Indian states and union territories, city by city.
5. Remaining countries, starting with those that bring the most enquiries.

Within each batch: competitor keyword export, map keywords to pages, research
facts from primary sources, write, add route pages, add WebP photos with real
alt text, run the coverage gate, ship, submit to IndexNow.

## Content standards

- Facts from primary sources: tourism departments, government notices,
  IMD and national weather services, transport operators, UNESCO, embassies.
- No invented prices, ratings, statistics or reviews; fares and permit fees
  only when an official source states them, with "check before you go".
- Festival dates as months (lunar calendars move).
- No em dashes; Indian English; the brand byline "Tavel Package Editorial Team".
- Every page: one H1, question-style H2/H3 that match real searches, an FAQ
  block, Article/FAQPage/BreadcrumbList schema, updated date, and a quote form.
