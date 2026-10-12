#!/usr/bin/env bash
# Production database step of a deploy. Run BEFORE pushing code that needs
# the new schema. Reads DATABASE_URL from .env.production.local (git-ignored).
# Use Supabase's direct or Session pooler connection string for migrations.
#
#   ./scripts/deploy-db.sh            backup + migrate + seed locations + seed content
set -euo pipefail
cd "$(dirname "$0")/.."

ENV_FILE=.env.production.local
[ -f "$ENV_FILE" ] || { echo "Missing $ENV_FILE with DATABASE_URL"; exit 1; }
set -a; . "./$ENV_FILE"; set +a
[ -n "${DATABASE_URL:-}" ] || { echo "DATABASE_URL not set in $ENV_FILE"; exit 1; }
unset PG_POOL_MAX

BACKUP_DIR="${BACKUP_DIR:-../backups}"

echo "== 1. Backup"
npx tsx scripts/backup-db.ts "$BACKUP_DIR"

echo "== 2. Migration status"
npx prisma migrate status || true

echo "== 3. Apply migrations"
npx prisma migrate deploy

echo "== 4. Locations"
npx tsx prisma/seed-locations.ts

echo "== 5. Content"
npx tsx prisma/seed-content.ts

echo "Database ready. Now push the code."
