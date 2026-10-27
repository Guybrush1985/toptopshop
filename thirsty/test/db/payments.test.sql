-- Tests für Zahlungsregeln. Aufruf: psql <URL> -v ON_ERROR_STOP=1 -f test/db/payments.test.sql
-- Jeder Block läuft als echter Nutzer (Rolle authenticated + Nutzer-ID), wie über PostgREST.
\set ON_ERROR_STOP 1
begin;
-- Nutzer: Gast, Wirt
insert into auth.users (id, email, raw_user_meta_data) values
  ('00000000-0000-0000-0000-00000000000a', 'gast@test.de', '{"name":"Gina Gast"}'),
  ('00000000-0000-0000-0000-00000000000b', 'wirt@test.de', '{"name":"Willi Wirt","role":"OWNER"}');

create temp table t (k text primary key, v text);
grant all on t to authenticated;

-- Wirt legt Restaurant an
set local role authenticated;
set local request.jwt.claim.sub = '00000000-0000-0000-0000-00000000000b';
insert into t select 'rid', public.create_restaurant('Testlokal', 'Bremen')::text;
update public.restaurants set street = 'Weg 1', description = 'Lecker', status = 'ACTIVE' where id = (select v::uuid from t where k = 'rid');

-- No-Show-Schutz ohne Auszahlungskonto: abgelehnt
do $$ begin
  insert into public.spots (restaurant_id, starts_at, ends_at, seats, discount_percent, no_show_protection)
    values ((select v::uuid from t where k = 'rid'), now() + interval '3 hours', now() + interval '5 hours', 8, 50, true);
  raise exception 'FEHLER: No-Show-Schutz ohne Konto wurde erlaubt';
exception when raise_exception then
  if sqlerrm like 'FEHLER%' then raise; end if;
  raise notice 'ok: %', sqlerrm;
end $$;

-- Wirt darf Kassenbuch nicht beschreiben
do $$ begin
  insert into public.payments (kind, amount_cents) values ('BILL', 100);
  raise exception 'FEHLER: payments beschreibbar';
exception when insufficient_privilege then raise notice 'ok: payments nur lesbar';
end $$;
reset role;

-- Server (Edge Function) schaltet Auszahlungen frei
insert into public.restaurant_accounts (restaurant_id, stripe_account_id, charges_enabled, payouts_enabled)
  values ((select v::uuid from t where k = 'rid'), 'acct_test', true, true);

set local role authenticated;
set local request.jwt.claim.sub = '00000000-0000-0000-0000-00000000000b';
with x as (insert into public.spots (restaurant_id, starts_at, ends_at, seats, discount_percent, no_show_protection)
  values ((select v::uuid from t where k = 'rid'), now() + interval '30 minutes', now() + interval '3 hours', 8, 50, true) returning id)
insert into t select 'spot', id::text from x;
-- Abrechnung sichtbar für Wirt
do $$ begin
  if not exists (select 1 from public.restaurant_accounts) then raise exception 'FEHLER: Wirt sieht Konto nicht'; end if;
end $$;
reset role;
update public.spots set booking_cutoff_min = 0;

-- Gast ohne Karte bucht geschütztes Angebot: abgelehnt
set local role authenticated;
set local request.jwt.claim.sub = '00000000-0000-0000-0000-00000000000a';
do $$ begin
  if exists (select 1 from public.restaurant_accounts) then raise exception 'FEHLER: Gast sieht Restaurantkonto'; end if;
  perform public.book_spot((select v::uuid from t where k = 'spot'), 2);
  raise exception 'FEHLER: Buchung ohne Karte erlaubt';
exception when raise_exception then
  if sqlerrm like 'FEHLER%' then raise; end if;
  raise notice 'ok: %', sqlerrm;
end $$;
reset role;

-- Karte hinterlegt (Webhook)
insert into public.guest_payment_methods (user_id, stripe_customer_id, payment_method_id, brand, last4)
  values ('00000000-0000-0000-0000-00000000000a', 'cus_test', 'pm_test', 'visa', '4242');

set local role authenticated;
set local request.jwt.claim.sub = '00000000-0000-0000-0000-00000000000a';
insert into t select 'booking', (public.book_spot((select v::uuid from t where k = 'spot'), 2)).id::text;
do $$ declare b public.bookings; begin
  select * into b from public.bookings where id = (select v::uuid from t where k = 'booking');
  if not b.guaranteed or b.no_show_fee_cents <> 2000 then raise exception 'FEHLER: Garantie % / %', b.guaranteed, b.no_show_fee_cents; end if;
  raise notice 'ok: Buchung mit Karte, Gebühr % Cent', b.no_show_fee_cents;
end $$;
-- Gast kann keine Rechnung erstellen
do $$ begin
  perform public.create_bill((select v::uuid from t where k = 'booking'), 4000, null);
  raise exception 'FEHLER: Gast erstellt Rechnung';
exception when raise_exception then
  if sqlerrm like 'FEHLER%' then raise; end if;
  raise notice 'ok: %', sqlerrm;
end $$;
reset role;

-- Wirt: Rechnung vor Check-in abgelehnt, dann Check-in und Rechnung
set local role authenticated;
set local request.jwt.claim.sub = '00000000-0000-0000-0000-00000000000b';
do $$ begin
  perform public.create_bill((select v::uuid from t where k = 'booking'), 4000, null);
  raise exception 'FEHLER: Rechnung vor Check-in';
exception when raise_exception then
  if sqlerrm like 'FEHLER%' then raise; end if;
  raise notice 'ok: %', sqlerrm;
end $$;
select public.check_in((select v::uuid from t where k = 'rid'), (select code from public.restaurant_bookings((select v::uuid from t where k = 'rid')) limit 1));
do $$ declare x public.bills; begin
  x := public.create_bill((select v::uuid from t where k = 'booking'), 4590, 'Tisch 4');
  if x.discount_cents <> 2295 or x.amount_cents <> 2295 then raise exception 'FEHLER: Betrag % %', x.discount_cents, x.amount_cents; end if;
  -- korrigieren
  x := public.create_bill((select v::uuid from t where k = 'booking'), 5000, null);
  if x.amount_cents <> 2500 or (select count(*) from public.bills) <> 1 then raise exception 'FEHLER: Korrektur'; end if;
  raise notice 'ok: Rechnung 50,00 € −50 %% = % Cent', x.amount_cents;
end $$;
reset role;

-- Gast sieht seine Rechnung
set local role authenticated;
set local request.jwt.claim.sub = '00000000-0000-0000-0000-00000000000a';
do $$ begin
  if (select count(*) from public.bills) <> 1 then raise exception 'FEHLER: Gast sieht Rechnung nicht'; end if;
  if exists (select 1 from public.sponsorships) then raise exception 'FEHLER'; end if;
  raise notice 'ok: Gast sieht Rechnung';
end $$;
reset role;

-- Wirt: vor Ort bezahlt
set local role authenticated;
set local request.jwt.claim.sub = '00000000-0000-0000-0000-00000000000b';
select public.settle_bill_on_site((select id from public.bills limit 1));
do $$ begin
  perform public.settle_bill_on_site((select id from public.bills limit 1));
  raise exception 'FEHLER: doppelt geschlossen';
exception when raise_exception then
  if sqlerrm like 'FEHLER%' then raise; end if;
  raise notice 'ok: %', sqlerrm;
end $$;
reset role;

-- Werbung: Regeln (läuft als Server)
do $$ declare x public.sponsorships; begin
  x := public.prepare_sponsorship('00000000-0000-0000-0000-00000000000b', (select v::uuid from t where k = 'rid'), 7, (now() at time zone 'Europe/Berlin')::date, 4165);
  if x.city <> 'Bremen' or x.status <> 'PENDING' then raise exception 'FEHLER: Werbung'; end if;
  begin
    perform public.prepare_sponsorship('00000000-0000-0000-0000-00000000000a', (select v::uuid from t where k = 'rid'), 7, current_date, 1);
    raise exception 'FEHLER: Gast bucht Werbung';
  exception when raise_exception then
    if sqlerrm like 'FEHLER%' then raise; end if;
    raise notice 'ok: %', sqlerrm;
  end;
  begin
    perform public.prepare_sponsorship('00000000-0000-0000-0000-00000000000b', (select v::uuid from t where k = 'rid'), 5, current_date, 1);
    raise exception 'FEHLER: 5 Tage erlaubt';
  exception when raise_exception then
    if sqlerrm like 'FEHLER%' then raise; end if;
    raise notice 'ok: %', sqlerrm;
  end;
  update public.sponsorships set status = 'PAID' where id = x.id;
  if not (select sponsored from public.payment_flags() where restaurant_id = x.restaurant_id) then raise exception 'FEHLER: nicht gesponsert'; end if;
  raise notice 'ok: Werbeplatz aktiv';
end $$;

-- Zwei andere Restaurants in Bremen belegen die Plätze → drittes abgelehnt
do $$ declare r2 uuid; r3 uuid; begin
  insert into public.restaurants (slug, name, city, street, description, status) values ('r2', 'R2', 'Bremen', 'x', 'y', 'ACTIVE') returning id into r2;
  insert into public.restaurants (slug, name, city, street, description, status) values ('r3', 'R3', 'Bremen', 'x', 'y', 'ACTIVE') returning id into r3;
  insert into public.members (user_id, restaurant_id, role) values ('00000000-0000-0000-0000-00000000000b', r2, 'OWNER'), ('00000000-0000-0000-0000-00000000000b', r3, 'OWNER');
  perform public.prepare_sponsorship('00000000-0000-0000-0000-00000000000b', r2, 1, current_date + 1, 595);
  begin
    perform public.prepare_sponsorship('00000000-0000-0000-0000-00000000000b', r3, 1, current_date + 1, 595);
    raise exception 'FEHLER: dritter Werbeplatz';
  exception when raise_exception then
    if sqlerrm like 'FEHLER%' then raise; end if;
    raise notice 'ok: %', sqlerrm;
  end;
end $$;

-- Konto löschen: Wirt mit aktivem Abo blockiert, Gast nicht; Rechnung bleibt erhalten
update public.restaurant_accounts set plan = 'BASIC', plan_status = 'trialing';
do $$ begin
  if public.account_deletion_blocker('00000000-0000-0000-0000-00000000000b') is null then raise exception 'FEHLER: Wirt nicht blockiert'; end if;
  if public.account_deletion_blocker('00000000-0000-0000-0000-00000000000a') is not null then raise exception 'FEHLER: Gast blockiert'; end if;
end $$;
insert into public.payments (kind, restaurant_id, user_id, booking_id, bill_id, amount_cents) select 'BILL', restaurant_id, user_id, booking_id, id, amount_cents from public.bills;
delete from auth.users where id = '00000000-0000-0000-0000-00000000000a';
do $$ begin
  if (select count(*) from public.bills where user_id is null and booking_id is null) <> 1 then raise exception 'FEHLER: Rechnung nach Löschung weg'; end if;
  if (select count(*) from public.payments where user_id is null) <> 1 then raise exception 'FEHLER: Zahlung nach Löschung weg'; end if;
  raise notice 'ok: Konto gelöscht, Buchhaltung bleibt';
end $$;

rollback;
\echo ALLE ZAHLUNGSTESTS GRÜN
