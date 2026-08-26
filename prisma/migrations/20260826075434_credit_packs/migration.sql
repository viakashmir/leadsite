-- CreateTable
CREATE TABLE "CreditPack" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tagline" TEXT,
    "amountINR" INTEGER NOT NULL,
    "baseCredits" INTEGER NOT NULL,
    "bonusCredits" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PaymentOrder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "agentId" TEXT NOT NULL,
    "razorpayOrderId" TEXT NOT NULL,
    "razorpayPaymentId" TEXT,
    "packId" TEXT NOT NULL,
    "amountINR" INTEGER NOT NULL,
    "creditsToApply" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'CREATED',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PaymentOrder_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PaymentOrder_packId_fkey" FOREIGN KEY ("packId") REFERENCES "CreditPack" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PaymentOrder" ("agentId", "amountINR", "createdAt", "creditsToApply", "id", "packId", "razorpayOrderId", "razorpayPaymentId", "status", "updatedAt") SELECT "agentId", "amountINR", "createdAt", "creditsToApply", "id", "packId", "razorpayOrderId", "razorpayPaymentId", "status", "updatedAt" FROM "PaymentOrder";
DROP TABLE "PaymentOrder";
ALTER TABLE "new_PaymentOrder" RENAME TO "PaymentOrder";
CREATE UNIQUE INDEX "PaymentOrder_razorpayOrderId_key" ON "PaymentOrder"("razorpayOrderId");
CREATE INDEX "PaymentOrder_agentId_idx" ON "PaymentOrder"("agentId");
CREATE INDEX "PaymentOrder_packId_idx" ON "PaymentOrder"("packId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
