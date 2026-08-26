# Deploying WanderLeads

## 1. Prerequisites (blocking)

The dev database is a local SQLite file (`dev.db`). Vercel's filesystem is
ephemeral and read-only at runtime, so **this app cannot run in production
until `DATABASE_URL` points at a real Postgres database** (Supabase).

Also required before payments work: Razorpay API keys.

Get these first — see the "Credentials needed" section below — then continue.

## 2. One-time: switch the database from SQLite to Postgres

This repo currently targets SQLite for local dev speed. To point it at Supabase:

1. In `prisma/schema.prisma`, change:
   ```prisma
   datasource db {
     provider = "sqlite"
   }
   ```
   to:
   ```prisma
   datasource db {
     provider = "postgresql"
   }
   ```
2. In `src/lib/prisma.ts` and `prisma/seed.ts`, swap the SQLite adapter for the
   Postgres one (both packages are already installed — `pg` and
   `@prisma/adapter-pg`):
   ```ts
   import { PrismaPg } from "@prisma/adapter-pg";
   const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
   ```
   (replacing the `PrismaBetterSqlite3` adapter in both files).
3. Delete the old SQLite-flavored migration history and generate a fresh one
   against the real Postgres database:
   ```bash
   rm -rf prisma/migrations
   DATABASE_URL="<your supabase connection string>" npx prisma migrate dev --name init
   ```
4. Seed the new database:
   ```bash
   DATABASE_URL="<your supabase connection string>" npm run db:seed
   ```

After this, local dev also runs against Postgres (or keep a second local
SQLite branch for offline dev — up to you; the codebase doesn't care which,
only the schema.prisma `provider` and the adapter matter).

## 3. Environment variables (set in Vercel Project Settings -> Environment Variables)

| Variable | Where to get it |
|---|---|
| `DATABASE_URL` | Supabase -> Settings -> Database -> Connection string (use the **Transaction pooler** URI for serverless) |
| `JWT_SECRET` | Generate a real random value, e.g. `openssl rand -base64 32` |
| `RAZORPAY_KEY_ID` | Razorpay Dashboard -> Settings -> API Keys |
| `RAZORPAY_KEY_SECRET` | Same page |
| `RAZORPAY_WEBHOOK_SECRET` | Set when creating the webhook in step 5 below |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Same value as `RAZORPAY_KEY_ID` |
| `SITE_URL` | Your production URL, e.g. `https://leadsite.vercel.app` or a custom domain |

## 4. Vercel import screen (the one you have open)

- **Application Preset**: leave as "Other" (this is a plain Next.js app;
  Vercel should still auto-detect Next.js correctly from `next.config.ts` —
  if a "Next.js" preset option appears, prefer that one instead).
- **Root Directory**: `./` (correct as shown).
- **Build and Output Settings**: leave defaults — `npm run build` already
  runs `prisma generate && next build` (updated in `package.json`), and
  Next's own output detection handles the rest.
- **Environment Variables**: expand this section and add all the variables
  from the table above before clicking Deploy.
- Click **Deploy**.

## 5. After the first deploy: run the Postgres migration once

Vercel doesn't run database migrations automatically. After the first
successful deploy (with `DATABASE_URL` set), run once from your machine (or
this session) against the production database:
```bash
DATABASE_URL="<production DATABASE_URL>" npx prisma migrate deploy
DATABASE_URL="<production DATABASE_URL>" npm run db:seed   # optional, for demo content
```

## 6. Register the Razorpay webhook

Once you have a live URL:
1. Razorpay Dashboard -> Settings -> Webhooks -> Add New Webhook
2. URL: `https://<your-domain>/api/razorpay/webhook`
3. Active events: `payment.captured`
4. Set a webhook secret, and put the same value in Vercel's
   `RAZORPAY_WEBHOOK_SECRET` env var (redeploy after adding it).

## 7. First login

- Admin panel: `/admin/login` — seeded admin is `admin@wanderleads.com` /
  `admin12345` (from `prisma/seed.ts`) — **change this password immediately**
  by adding a new team member in `/admin/team` with a real password and
  retiring the seeded one, since the seed script is public in this repo.

## Credentials needed from you before steps 2-6 can run for real

- Supabase Postgres connection string
- Razorpay Key ID + Key Secret (test mode is fine to start)

Everything else in this doc is ready to execute the moment those are provided.
