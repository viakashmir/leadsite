-- Competitor reference price per package (Admin -> Packages), used to price
-- ours a set percentage below. Safe to run twice.
ALTER TABLE "Package" ADD COLUMN IF NOT EXISTS "referencePrice" INTEGER;
ALTER TABLE "Package" ADD COLUMN IF NOT EXISTS "referenceSource" TEXT;
