# TDI package keywords: depth pass (2026-11-15)

Follow-up to `tdi-depth-2026-11-13.md`. Goal from the owner: beat
tdiholidayventures.com on every keyword.

## What was measured

TDI's sitemap lists 59 `/packages/` pages. 35 were already paired with a page
of ours in the 2026-11-13 scoreboard and all win. The other 24 (their
day-by-day itinerary packages, the Ladakh packages, the honeymoon index,
"how to choose", "by city", Japan and Siliguri) had no scored page of ours.
Each was paired with the page of ours that answers the same search, and
measured the same way as before: visible words inside `<main>` and FAQPage
questions. Win = words >= TDI x 1.15 (and >= 1,600) and FAQs >= TDI + 2.

Before: 3 of 24 won (most duration and Ladakh package pages were 360 to 750
words). After, on a local production build: **24 of 24**
(`tdi-packages-scoreboard-2026-11-15.csv`).

## What changed

- **Package pages (all Kashmir packages):** `src/lib/package-depth.ts` builds
  key facts, a detail paragraph per itinerary day (`data/packages/day-detail.ts`,
  one entry per shared day plan, plus hand-mapped plans for the 15 catalog
  packages), where you stay, inclusions, local costs, best time, tips by
  traveller type, how the price works and route-specific FAQs. Code only, no
  DB change. Median page 704 -> about 2,560 words, minimum about 1,840.
- **Duration pages and place hubs:** written depth keyed by path in
  `src/data/page-depth/*` (rendered by `components/location/PageDepth.tsx`,
  FAQs merged via `withDepthFaqs`): Kashmir 3N to 6N, Ladakh 4N/5N/8N, Tso
  Moriri 4N, Gulmarg, Doodhpathri, Gurez, Kargil, Tso Moriri, Zanskar and
  `/honeymoon-packages`.
- **Blog** (`data/blog/package-keywords.ts`): new posts
  `kashmir-tour-packages-from-japan`, `kashmir-tour-packages-from-siliguri`,
  `how-to-choose-a-kashmir-tour-package`; additions to Manali to Leh (with the
  Srinagar, Leh and Manali loop), Turtuk, Hanle, Kashmir 3-day and Keran.
- **Keyword map:** 25 TDI package keywords added with their target pages.

## Rules kept

No typed fares or prices (package pages only show the price already in the
DB), no em dashes, permit wording consistent with the rest of the site
(LAHDC portal for Indians, PAP via agent for foreigners), Baisaran closed
since April 2025, union-taxi rule in Pahalgam. First drafts again landed at
about 55 to 65% of the intended length; every page was topped up and
measured on the build.
