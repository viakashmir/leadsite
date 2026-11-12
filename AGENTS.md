<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Vercel usage (Hobby plan): read before deploying

The team was blocked on 2026-11-12 (FAIR_USE_LIMITS_EXCEEDED, Fast Origin Transfer) and the site was down until Vercel unpaused it. Bytes sent by functions are what count; files and prerendered pages served by the CDN do not.

- Batch work and push to `main` about once a day. Every push is a production deploy that empties the CDN cache.
- Public pages are prerendered at build from the sitemap (`src/lib/prerender.ts`). Keep `revalidate = false`; never add timed revalidate or `force-dynamic` to public pages.
- Photos are exported to `public/media` at build (`scripts/export-media.ts`); `/media/[file]` is only the fallback for photos uploaded since the last deploy.
- IndexNow: submit only what changed (`npx tsx scripts/indexnow-submit.ts --since YYYY-MM-DD`), never the whole sitemap after a routine deploy.
