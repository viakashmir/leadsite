-- Admin-set lead unlock prices: standard vs hot (bigger groups).
-- Safe to run twice (e.g. pasted into the SQL Editor, then migrate deploy).
CREATE TABLE IF NOT EXISTS "LeadPricing" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "standardPrice" INTEGER NOT NULL DEFAULT 100,
    "hotPrice" INTEGER NOT NULL DEFAULT 200,
    "hotMinTravellers" INTEGER NOT NULL DEFAULT 4,
    "updatedBy" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeadPricing_pkey" PRIMARY KEY ("id")
);

INSERT INTO "LeadPricing" ("id") VALUES ('default') ON CONFLICT DO NOTHING;
