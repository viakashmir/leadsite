// Computes road distance and drive time for every origin x route target with
// OSRM on OpenStreetMap data and writes src/data/route-distances.json.
// Rate-limited for the public OSRM demo server. Re-run when targets change.
//
//   npx tsx scripts/build-route-distances.ts
import { writeFileSync } from "node:fs";
import { ORIGIN_COORDS, ROUTE_TARGETS, routeSlug } from "../src/data/routes";

const OSRM = "https://router.project-osrm.org/route/v1/driving";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const out: Record<string, { km: number; hours: number }> = {};
  for (const t of ROUTE_TARGETS) {
    for (const [origin, o] of Object.entries(ORIGIN_COORDS)) {
      if (origin === t.city) continue;
      const res = await fetch(`${OSRM}/${o.lng},${o.lat};${t.coord.lng},${t.coord.lat}?overview=false`, {
        headers: { "User-Agent": "TavelPackageBot/1.0 (+https://www.tavelpackage.in)" },
      });
      const data = (await res.json()) as { code: string; routes?: { distance: number; duration: number }[] };
      const r = data.routes?.[0];
      if (data.code === "Ok" && r) {
        out[routeSlug(origin, t.city)] = { km: Math.round(r.distance / 10000) * 10, hours: Math.round(r.duration / 1800) / 2 };
        console.log(`${origin} -> ${t.city}: ${out[routeSlug(origin, t.city)].km} km`);
      } else console.warn(`  ! ${origin} -> ${t.city}: ${data.code}`);
      await sleep(1100);
    }
  }
  writeFileSync("src/data/route-distances.json", JSON.stringify(out, null, 2) + "\n");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
