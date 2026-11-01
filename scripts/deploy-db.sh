#!/usr/bin/env bash
# Production database step of a deploy. Run BEFORE pushing code that needs
# the new schema. Reads DATABASE_URL from .env.production.local (git-ignored).
# Use Supabase's direct or Session pooler connection string for migrations.
#
#   ./scripts/deploy-db.sh                              uses $ENV_FILE
#   DATABASE_URL="postgresql://..." ./scripts/deploy-db.sh   one-off, no file needed
#
# Steps: backup + migrate + seed locations + seed content.
set -euo pipefail
cd "$(dirname "$0")/.."

ENV_FILE=.env.production.local
# A DATABASE_URL given on the command line wins; otherwise read the env file.
if [ -z "${DATABASE_URL:-}" ] && [ -f "$ENV_FILE" ]; then
  set -a; . "./$ENV_FILE"; set +a
fi
[ -n "${DATABASE_URL:-}" ] || { echo "DATABASE_URL is empty: pass it on the command line or set it in $ENV_FILE"; exit 1; }
case "$DATABASE_URL" in
  postgres://*|postgresql://*) ;;
  *) echo "DATABASE_URL must start with postgresql:// (got something else, maybe a placeholder)"; exit 1 ;;
esac
unset PG_POOL_MAX

BACKUP_DIR="${BACKUP_DIR:-../backups}"

echo "== 1. Backup"
npx tsx scripts/backup-db.ts "$BACKUP_DIR"

echo "== 2. Migration status"
npx prisma migrate status || true

echo "== 3. Apply migrations"
npx prisma migrate deploy

echo "== 3b. Base data (admin user, credit packs; never sample leads)"
if [ -n "${ADMIN_PASSWORD:-}" ]; then
  SEED_SAMPLE_DATA=0 npx tsx prisma/seed.ts
else
  echo "   skipped: set ADMIN_PASSWORD to create the first admin"
fi

echo "== 4. Locations"
npx tsx prisma/seed-locations.ts

echo "== 5. Content"
npx tsx prisma/seed-content.ts

echo "Database ready. Now push the code."
