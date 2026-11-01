// Dumps every table to its own JSON file (one folder per backup) before a
// risky database change. One file per table, because a single JSON string of
// the whole database (photos included) is too large for Node to build.
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
  const dir = join(outDir, `db-backup-${new Date().toISOString().replace(/[:.]/g, "-")}`);
  mkdirSync(dir, { recursive: true });
  for (const { table_name } of tables) {
    const rows = await prisma.$queryRawUnsafe<unknown[]>(`SELECT * FROM "${table_name}"`);
    writeFileSync(
      join(dir, `${table_name}.json`),
      JSON.stringify(rows, (_k, v) => (typeof v === "bigint" ? v.toString() : v)),
    );
    console.log(`  ${table_name}: ${rows.length} rows`);
  }
  console.log(`Backup written to ${dir}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
