-- Self-hosted WebP images served from /media/{slug}.webp.
CREATE TABLE "MediaAsset" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "mime" TEXT NOT NULL DEFAULT 'image/webp',
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "bytes" BYTEA NOT NULL,
    "alt" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL DEFAULT '',
    "credit" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MediaAsset_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "MediaAsset_slug_key" ON "MediaAsset"("slug");
