import { prisma } from "@/lib/prisma";

export async function getDestinationsWithCities() {
  return prisma.destination.findMany({
    orderBy: { name: "asc" },
    include: { cities: { orderBy: { name: "asc" } } },
  });
}

export async function getDestinationsWithCitiesAndLeadCounts() {
  return prisma.destination.findMany({
    orderBy: { name: "asc" },
    include: { cities: { orderBy: { name: "asc" } }, _count: { select: { leads: true } } },
  });
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
