// Dumps every table to one JSON file before a risky database change.
// Contains personal data and password hashes: keep the file private.
//
//   npx tsx --env-file=.env.production.local scripts/backup-db.ts <out-dir>
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL, max: 2 });
const prisma = new PrismaClient({ adapter });

// Raw SQL so the backup works whatever the schema version of the database is.
async function main() {
  const outDir = process.argv[2] ?? "backups";
  const tables = await prisma.$queryRaw<{ table_name: string }[]>`
    SELECT table_name FROM information_schema.tables
    WHERE table_schema = 'public' AND table_type = 'BASE TABLE' ORDER BY table_name`;
  const dump: Record<string, unknown[]> = {};
  for (const { table_name } of tables) {
    dump[table_name] = await prisma.$queryRawUnsafe(`SELECT * FROM "${table_name}"`);
    console.log(`  ${table_name}: ${dump[table_name].length} rows`);
  }
  mkdirSync(outDir, { recursive: true });
  const file = join(outDir, `db-backup-${new Date().toISOString().replace(/[:.]/g, "-")}.json`);
  writeFileSync(file, JSON.stringify(dump, (_k, v) => (typeof v === "bigint" ? v.toString() : v), 2));
  console.log(`Backup written to ${file}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
