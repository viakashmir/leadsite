-- CreateEnum
CREATE TYPE "DestinationKind" AS ENUM ('STATE', 'UNION_TERRITORY', 'COUNTRY', 'REGION', 'CIRCUIT');

-- CreateEnum
CREATE TYPE "ContentStatus" AS ENUM ('DRAFT', 'READY');

-- CreateEnum
CREATE TYPE "PlaceKind" AS ENUM ('PLACE', 'ACTIVITY');

-- AlterTable
ALTER TABLE "City" ADD COLUMN     "content" JSONB,
ADD COLUMN     "contentStatus" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "heroImage" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "kind" TEXT,
ADD COLUMN     "lat" DOUBLE PRECISION,
ADD COLUMN     "lng" DOUBLE PRECISION,
ADD COLUMN     "seoDescription" TEXT,
ADD COLUMN     "seoTitle" TEXT,
ADD COLUMN     "sortOrder" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "summary" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "tier" INTEGER NOT NULL DEFAULT 3;

-- AlterTable
ALTER TABLE "Destination" ADD COLUMN     "content" JSONB,
ADD COLUMN     "contentStatus" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
ADD COLUMN     "kind" "DestinationKind" NOT NULL DEFAULT 'STATE',
ADD COLUMN     "leadUnlockPrice" INTEGER,
ADD COLUMN     "legacySlugs" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "officialName" TEXT,
ADD COLUMN     "premium" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "seoDescription" TEXT,
ADD COLUMN     "seoTitle" TEXT,
ADD COLUMN     "sortOrder" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "tier" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "zone" TEXT,
ALTER COLUMN "summary" SET DEFAULT '',
ALTER COLUMN "heroImage" SET DEFAULT '';

-- CreateTable
CREATE TABLE "Place" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "kind" "PlaceKind" NOT NULL DEFAULT 'PLACE',
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "summary" TEXT NOT NULL DEFAULT '',
    "heroImage" TEXT NOT NULL DEFAULT '',
    "content" JSONB,
    "contentStatus" "ContentStatus" NOT NULL DEFAULT 'DRAFT',
    "destinationId" TEXT NOT NULL,
    "cityId" TEXT,

    CONSTRAINT "Place_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CircuitStop" (
    "id" TEXT NOT NULL,
    "circuitId" TEXT NOT NULL,
    "destinationId" TEXT,
    "cityId" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "CircuitStop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Place_path_key" ON "Place"("path");

-- CreateIndex
CREATE INDEX "Place_destinationId_idx" ON "Place"("destinationId");

-- CreateIndex
CREATE INDEX "Place_cityId_idx" ON "Place"("cityId");

-- CreateIndex
CREATE INDEX "CircuitStop_circuitId_idx" ON "CircuitStop"("circuitId");

-- CreateIndex
CREATE INDEX "Destination_kind_idx" ON "Destination"("kind");

-- CreateIndex
CREATE INDEX "Destination_zone_idx" ON "Destination"("zone");

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CircuitStop" ADD CONSTRAINT "CircuitStop_circuitId_fkey" FOREIGN KEY ("circuitId") REFERENCES "Destination"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CircuitStop" ADD CONSTRAINT "CircuitStop_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CircuitStop" ADD CONSTRAINT "CircuitStop_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;

