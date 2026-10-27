#!/usr/bin/env bash
# Startet eine leere lokale Postgres-Datenbank auf Port 54329 und spielt Stub + schema.sql ein.
# Aufruf: bash test/db/start.sh   (danach: psql postgresql://postgres@127.0.0.1:54329/postgres)
set -euo pipefail
cd "$(dirname "$0")/../.."
PG=$(ls -d /usr/lib/postgresql/*/bin | tail -1)
DIR=${PGTEST_DIR:-/tmp/firsty-pg}
RUN="runuser -u postgres --"
[ "$(id -u)" = 0 ] || RUN=""
if [ ! -d "$DIR" ]; then
  mkdir -p "$DIR" && [ -n "$RUN" ] && chown postgres "$DIR"
  $RUN "$PG/initdb" -D "$DIR" -U postgres -A trust >/dev/null
fi
$RUN "$PG/pg_ctl" -D "$DIR" -o "-p 54329 -k /tmp" -l "$DIR/log" status >/dev/null 2>&1 || $RUN "$PG/pg_ctl" -D "$DIR" -o "-p 54329 -k /tmp" -l "$DIR/log" -w start >/dev/null
URL=postgresql://postgres@127.0.0.1:54329/postgres
psql "$URL" -q -v ON_ERROR_STOP=1 -f test/db/supabase-stub.sql
psql "$URL" -q -v ON_ERROR_STOP=1 -f supabase/schema.sql >/dev/null
echo "$URL"
