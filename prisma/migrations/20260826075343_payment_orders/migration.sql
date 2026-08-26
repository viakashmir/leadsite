-- CreateTable
CREATE TABLE "PaymentOrder" (
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
    CONSTRAINT "PaymentOrder_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentOrder_razorpayOrderId_key" ON "PaymentOrder"("razorpayOrderId");

-- CreateIndex
CREATE INDEX "PaymentOrder_agentId_idx" ON "PaymentOrder"("agentId");
