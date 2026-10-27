#!/usr/bin/env bash
# Edge-Function-Tests: lokale Postgres (frische Datenbank) + stripe-mock + Deno.
# Voraussetzungen: Postgres-Server (z. B. apt install postgresql), Deno (npx deno), stripe-mock
# (go install github.com/stripe/stripe-mock@latest). Pfade über DENO und STRIPE_MOCK überschreibbar.
set -euo pipefail
cd "$(dirname "$0")/../.."
DENO=${DENO:-deno}
STRIPE_MOCK=${STRIPE_MOCK:-stripe-mock}
bash test/db/start.sh >/dev/null
BASE=postgresql://postgres@127.0.0.1:54329
psql "$BASE/postgres" -q -c "drop database if exists firsty_fn" -c "create database firsty_fn"
psql "$BASE/firsty_fn" -q -v ON_ERROR_STOP=1 -f test/db/supabase-stub.sql
psql "$BASE/firsty_fn" -q -v ON_ERROR_STOP=1 -f supabase/schema.sql >/dev/null 2>&1
curl -s -o /dev/null localhost:12111 || { $STRIPE_MOCK -http-port 12111 -https-port 12112 >/tmp/stripe-mock.log 2>&1 & sleep 2; }
FIRSTY_TEST=1 SUPABASE_DB_URL="$BASE/firsty_fn" SUPABASE_URL=http://127.0.0.1:54400 SUPABASE_ANON_KEY=anon \
STRIPE_SECRET_KEY=sk_test_123 STRIPE_API_HOST=localhost STRIPE_API_PORT=12111 STRIPE_WEBHOOK_SECRET=whsec_test \
  "$DENO" test --allow-all --config supabase/functions/deno.json test/functions/
