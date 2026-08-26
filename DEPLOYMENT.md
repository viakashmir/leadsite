# Deploying WanderLeads

## 1. Prerequisites (blocking)

The dev database is a local SQLite file (`dev.db`). Vercel's filesystem is
ephemeral and read-only at runtime, so **this app cannot run in production
until `DATABASE_URL` points at a real Postgres database** (Supabase).

Also required before payments work: Razorpay API keys.

Get these first — see the "Credentials needed" section below — then continue.

## 2. Database: already switched to Postgres

`prisma/schema.prisma` already targets `provider = "postgresql"`, and
`src/lib/prisma.ts` / `prisma/seed.ts` already use the `@prisma/adapter-pg`
Postgres adapter — nothing to change here. The schema's first migration is
committed at `prisma/migrations/20260826000000_init/`.

Applying that schema to your actual Supabase database is covered in step 5
below — it uses Supabase's own SQL Editor rather than a local `prisma
migrate` command, since this repo was developed inside a sandboxed
environment with no raw-TCP network access to Postgres (only HTTPS to
allowed hosts). That's fine for Vercel, which has normal outbound network
access — this only affects how the *first* migration gets applied.

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

## 5. Apply the database schema once, via Supabase's SQL Editor

Vercel doesn't run database migrations automatically, and this schema needs
to be applied before the site will work (destinations/packages pages,
admin login, everything reads from these tables). Do this once, in your
browser, no terminal needed:

1. Generate the SQL file (already done for you — it's `deploy.sql` at the
   repo root; regenerate any time with `npx tsx scripts/generate-deploy-sql.ts
   > deploy.sql` if the schema or seed data changes).
2. Open your Supabase project -> **SQL Editor** (left sidebar) -> **New query**.
3. Paste the entire contents of `deploy.sql` into the editor.
4. Click **Run**.

This creates every table, applies the schema, and seeds: the admin login,
4 credit packs, 5 sample destinations with cities and packages, and 13
sample leads — enough to see the full site working immediately. It also
records the migration in `_prisma_migrations`, so any future `prisma
migrate deploy` (from a machine with normal network access) stays in sync.

If you'd rather apply it from a terminal instead (e.g. from your own
machine, which — unlike the sandbox this was built in — has normal network
access), this also works:
```bash
DATABASE_URL="<production DATABASE_URL>" npx prisma migrate deploy
DATABASE_URL="<production DATABASE_URL>" npm run db:seed
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
