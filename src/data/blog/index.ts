import type { BlogPost } from "./types";
import { KASHMIR_CORE } from "./kashmir-core";
import { KASHMIR_GUIDES } from "./kashmir-guides";
import { KASHMIR_LADAKH } from "./kashmir-ladakh";
import { HIMACHAL_UTTARAKHAND } from "./himachal-uttarakhand";
import { RAJASTHAN_NORTH } from "./rajasthan-north";
import { GOA_WEST_CENTRAL } from "./goa-west-central";
import { SOUTH_INDIA } from "./south-india";
import { EAST_ISLANDS } from "./east-islands";
import { INTERNATIONAL_ASIA } from "./international-asia";
import { INTERNATIONAL_WORLD } from "./international-world";
import { WORLD_AND_ROUNDUPS } from "./world-and-roundups";
import { PLANNING_GUIDES } from "./planning-guides";

export const BLOG_POSTS: BlogPost[] = [
  ...KASHMIR_CORE,
  ...KASHMIR_GUIDES,
  ...KASHMIR_LADAKH,
  ...HIMACHAL_UTTARAKHAND,
  ...RAJASTHAN_NORTH,
  ...GOA_WEST_CENTRAL,
  ...SOUTH_INDIA,
  ...EAST_ISLANDS,
  ...INTERNATIONAL_ASIA,
  ...INTERNATIONAL_WORLD,
  ...WORLD_AND_ROUNDUPS,
  ...PLANNING_GUIDES,
];
