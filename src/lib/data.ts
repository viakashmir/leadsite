import { prisma } from "@/lib/prisma";
import { getLeadPricing } from "@/lib/leadPricing";

export async function getDestinationsWithCities() {
  return prisma.destination.findMany({
    orderBy: { name: "asc" },
    include: { cities: { orderBy: [{ tier: "asc" }, { sortOrder: "asc" }, { name: "asc" }] } },
  });
}

export async function getDestinationsWithCitiesAndLeadCounts(filter: { tier?: number } = {}) {
  return prisma.destination.findMany({
    where: { kind: { not: "CIRCUIT" }, ...(filter.tier ? { tier: filter.tier } : {}) },
    orderBy: [{ isInternational: "asc" }, { sortOrder: "asc" }],
    include: { cities: { orderBy: [{ tier: "asc" }, { sortOrder: "asc" }, { name: "asc" }] }, _count: { select: { leads: true } } },
  });
}

/** Real marketplace numbers for the homepage; nothing here is estimated. */
export async function getMarketplaceStats() {
  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const [leads30d, activeAgents, destinationsWithLeads, pricing] = await Promise.all([
    prisma.lead.count({ where: { createdAt: { gte: since } } }),
    prisma.agent.count({ where: { status: "ACTIVE" } }),
    prisma.destination.count({ where: { leads: { some: { createdAt: { gte: since } } } } }),
    getLeadPricing(),
  ]);
  return { leads30d, activeAgents, destinationsWithLeads, minLeadPrice: Math.min(pricing.standardPrice, pricing.hotPrice) };
}

export async function getSiteStats() {
  const [leadCount, agentCount, packageCount, destinationCount] = await Promise.all([
    prisma.lead.count(),
    prisma.agent.count(),
    prisma.package.count({ where: { published: true } }),
    prisma.destination.count(),
  ]);
  return { leadCount, agentCount, packageCount, destinationCount };
}
