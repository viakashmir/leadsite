-- CreateTable
CREATE TABLE "Proposal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "proposalNumber" TEXT NOT NULL,
    "agentId" TEXT,
    "prospectName" TEXT NOT NULL,
    "prospectCompany" TEXT,
    "prospectEmail" TEXT,
    "prospectPhone" TEXT,
    "preparedById" TEXT NOT NULL,
    "planName" TEXT NOT NULL,
    "planTagline" TEXT,
    "walletCredits" INTEGER NOT NULL,
    "validityMonths" INTEGER NOT NULL,
    "domesticLeadPrice" INTEGER NOT NULL,
    "internationalLeadPrice" INTEGER NOT NULL,
    "features" TEXT NOT NULL,
    "subtotal" INTEGER NOT NULL,
    "gstPercent" INTEGER NOT NULL DEFAULT 18,
    "totalPayable" INTEGER NOT NULL,
    "paymentInstructions" TEXT,
    "kycChecklist" TEXT NOT NULL,
    "termsText" TEXT NOT NULL,
    "reversalPolicyText" TEXT NOT NULL,
    "refundPolicyText" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "validTill" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Proposal_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Proposal_preparedById_fkey" FOREIGN KEY ("preparedById") REFERENCES "AdminUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_proposalNumber_key" ON "Proposal"("proposalNumber");

-- CreateIndex
CREATE INDEX "Proposal_agentId_idx" ON "Proposal"("agentId");

-- CreateIndex
CREATE INDEX "Proposal_preparedById_idx" ON "Proposal"("preparedById");
