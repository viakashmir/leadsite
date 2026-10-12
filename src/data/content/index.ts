import type { GuideContent } from "@/lib/locations";
import { INDIA_NORTH } from "./india-north";
import { INDIA_WEST_SOUTH } from "./india-west-south";
import { INDIA_EAST_ISLANDS } from "./india-east-islands";

// Destination slug -> guide content. Loaded by prisma/seed-content.ts.
export const DESTINATION_CONTENT: Record<string, GuideContent> = {
  ...INDIA_NORTH,
  ...INDIA_WEST_SOUTH,
  ...INDIA_EAST_ISLANDS,
};
