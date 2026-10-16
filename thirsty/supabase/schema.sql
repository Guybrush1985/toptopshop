-- Thirsty: Datenbank für Supabase
-- Einmal im Supabase SQL Editor ausführen (Project → SQL Editor → New query → einfügen → Run).
-- Das Skript kann erneut ausgeführt werden; bestehende Daten bleiben erhalten.
--
-- Grundsatz: Lesen und einfache Pflege laufen über Tabellen mit Row Level Security.
-- Alles mit Regeln (Buchen, Stornieren, Check-in, No-Show, Bewertungen, Team) läuft über
-- Funktionen (RPC), damit niemand die Regeln im Browser umgehen kann.

create extension if not exists pgcrypto;

-- ---------- Tabellen ----------

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  name text not null,
  phone text,
  role text not null default 'GUEST' check (role in ('GUEST', 'OWNER')),
  dietary_notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.restaurants (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null check (length(trim(name)) > 0),
  tagline text,
  description text,
  cuisine text,
  price_level int not null default 2 check (price_level between 1 and 4),
  street text,
  postal_code text,
  city text,
  lat double precision,
  lng double precision,
  directions text,
  phone text,
  email text,
  website text,
  instagram text,
  seats_inside int not null default 0 check (seats_inside >= 0),
  seats_outside int not null default 0 check (seats_outside >= 0),
  features text[] not null default '{}',
  status text not null default 'DRAFT' check (status in ('DRAFT', 'ACTIVE', 'PAUSED')),
  demo boolean not null default false,
  created_at timestamptz not null default now()
);

-- Rechnungsdaten getrennt, weil Restaurantdaten öffentlich lesbar sind.
create table if not exists public.restaurant_billing (
  restaurant_id uuid primary key references public.restaurants (id) on delete cascade,
  legal_name text,
  vat_id text
);

create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  restaurant_id uuid not null references public.restaurants (id) on delete cascade,
  role text not null check (role in ('OWNER', 'MANAGER', 'STAFF')),
  unique (user_id, restaurant_id)
);

create table if not exists public.opening_hours (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references public.restaurants (id) on delete cascade,
  weekday int not null check (weekday between 0 and 6), -- 0 = Montag
  opens text not null,
  closes text not null
);

create table if not exists public.photos (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references public.restaurants (id) on delete cascade,
  url text not null,
  path text,
  kind text not null check (kind in ('LOGO', 'COVER', 'GALLERY', 'MENU')),
  position int not null default 0
);

create table if not exists public.menu_items (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references public.restaurants (id) on delete cascade,
  category text not null,
  name text not null,
  description text,
  price_cents int not null check (price_cents >= 0),
  tags text[] not null default '{}',
  allergens text,
  position int not null default 0
);

create table if not exists public.spots (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references public.restaurants (id) on delete cascade,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  seats int not null check (seats between 1 and 100),
  max_group_size int not null default 4 check (max_group_size between 1 and 8),
  discount_percent int not null default 50,
  freebie text,
  conditions text,
  booking_cutoff_min int not null default 30 check (booking_cutoff_min >= 0),
  status text not null default 'OPEN' check (status in ('OPEN', 'CANCELLED')),
  check (ends_at > starts_at)
);
create index if not exists spots_restaurant_starts on public.spots (restaurant_id, starts_at);
-- Angebotsarten: 25, 50 oder 75 % auf alles, oder 0 % mit Gratis-Getränk bzw. Gratis-Dessert (Spalte freebie).
alter table public.spots drop constraint if exists spots_discount_percent_check;
alter table public.spots add constraint spots_discount_percent_check check (discount_percent in (0, 25, 50, 75));

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  spot_id uuid not null references public.spots (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  party_size int not null check (party_size between 1 and 8),
  code text not null unique,
  status text not null default 'BOOKED' check (status in ('BOOKED', 'CHECKED_IN', 'CANCELLED', 'LATE_CANCELLED', 'NO_SHOW')),
  created_at timestamptz not null default now(),
  checked_in_at timestamptz,
  cancelled_at timestamptz
);
create index if not exists bookings_spot on public.bookings (spot_id);
create index if not exists bookings_user on public.bookings (user_id);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null unique references public.bookings (id) on delete cascade,
  restaurant_id uuid not null references public.restaurants (id) on delete cascade,
  author_name text not null,
  rating int not null check (rating between 1 and 5),
  food int check (food between 1 and 5),
  service int check (service between 1 and 5),
  ambience int check (ambience between 1 and 5),
  as_promised boolean not null default true,
  text text,
  reply text,
  created_at timestamptz not null default now()
);

create table if not exists public.feedback (
  booking_id uuid primary key references public.bookings (id) on delete cascade,
  positive boolean not null,
  tags text[] not null default '{}'
);

create table if not exists public.reliability_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  booking_id uuid references public.bookings (id) on delete set null,
  kind text not null check (kind in ('ATTENDED', 'LATE_CANCEL', 'LATE_ARRIVAL', 'THUMBS_DOWN', 'NO_SHOW')),
  points int not null,
  created_at timestamptz not null default now()
);
create index if not exists reliability_events_user on public.reliability_events (user_id);

create table if not exists public.favorites (
  user_id uuid not null references public.profiles (id) on delete cascade,
  restaurant_id uuid not null references public.restaurants (id) on delete cascade,
  primary key (user_id, restaurant_id)
);

-- ---------- Profil bei Registrierung ----------

create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, name, role)
  values (
    new.id,
    lower(new.email),
    coalesce(nullif(trim(new.raw_user_meta_data ->> 'name'), ''), split_part(new.email, '@', 1)),
    case when new.raw_user_meta_data ->> 'role' = 'OWNER' then 'OWNER' else 'GUEST' end
  )
  on conflict (id) do nothing;
  return new;
end $$;

create or replace trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- Hilfsfunktionen ----------

create or replace function public.is_member(rid uuid, roles text[] default array['OWNER', 'MANAGER', 'STAFF'])
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.members m where m.restaurant_id = rid and m.user_id = auth.uid() and m.role = any (roles));
$$;

create or replace function public.points_for(kind text) returns int language sql immutable set search_path = public as $$
  select case kind when 'ATTENDED' then 3 when 'LATE_CANCEL' then -10 when 'LATE_ARRIVAL' then -5
    when 'THUMBS_DOWN' then -3 when 'NO_SHOW' then -25 end;
$$;

create or replace function public.add_event(uid uuid, kind text, bid uuid) returns void
language sql security definer set search_path = public as $$
  insert into public.reliability_events (user_id, booking_id, kind, points) values (uid, bid, kind, public.points_for(kind));
$$;

-- Zuverlässigkeitswert wie in src/lib/reliability.ts: Start 80, max. 100, Minuspunkte verfallen nach 90 Tagen,
-- unter 40 gesperrt für 30 Tage, danach Neustart bei mindestens 50.
create or replace function public.reliability(uid uuid)
returns table (score int, tier text, blocked_until timestamptz)
language plpgsql stable security definer set search_path = public as $$
declare
  s int := 80;
  blocked timestamptz := null;
  e record;
begin
  for e in select points, created_at from public.reliability_events where user_id = uid order by created_at loop
    if blocked is not null and e.created_at >= blocked then
      s := greatest(s, 50);
      blocked := null;
    end if;
    continue when e.points < 0 and e.created_at < now() - interval '90 days';
    s := least(100, greatest(0, s + e.points));
    if s < 40 then blocked := e.created_at + interval '30 days'; end if;
  end loop;
  if blocked is not null and now() >= blocked then
    s := greatest(s, 50);
    blocked := null;
  end if;
  return query select s,
    case when blocked is not null or s < 40 then 'BLOCKED' when s < 60 then 'DEPOSIT' when s < 80 then 'PROBATION' else 'RELIABLE' end,
    blocked;
end $$;

create or replace function public.my_reliability()
returns table (score int, tier text, blocked_until timestamptz)
language sql stable security definer set search_path = public as $$
  select * from public.reliability(auth.uid());
$$;

create or replace function public.make_slug(base text, ignore_id uuid default null) returns text
language plpgsql stable security definer set search_path = public as $$
declare
  b text;
  candidate text;
  i int := 1;
begin
  b := lower(base);
  b := replace(replace(replace(replace(b, 'ä', 'ae'), 'ö', 'oe'), 'ü', 'ue'), 'ß', 'ss');
  b := translate(b, 'áàâãåéèêëíìîïóòôõøúùûçñ', 'aaaaaeeeeiiiiooooouuucn');
  b := trim(both '-' from regexp_replace(b, '[^a-z0-9]+', '-', 'g'));
  b := left(coalesce(nullif(b, ''), 'restaurant'), 60);
  candidate := b;
  while exists (select 1 from public.restaurants where slug = candidate and id is distinct from ignore_id) loop
    i := i + 1;
    candidate := b || '-' || i;
  end loop;
  return candidate;
end $$;

-- Slug folgt dem Namen; Veröffentlichen nur mit Adresse und Beschreibung.
create or replace function public.restaurants_before_update() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.name is distinct from old.name then
    new.slug := public.make_slug(new.name, new.id);
  end if;
  if new.status = 'ACTIVE' and old.status <> 'ACTIVE'
     and (new.street is null or new.city is null or new.description is null) then
    raise exception 'Zum Veröffentlichen brauchst du mindestens Adresse und Beschreibung (Reiter „Profil“).';
  end if;
  return new;
end $$;

create or replace trigger restaurants_before_update before update on public.restaurants
  for each row execute function public.restaurants_before_update();

-- ---------- Funktionen für die App ----------

create or replace function public.create_restaurant(p_name text, p_city text)
returns uuid language plpgsql security definer set search_path = public as $$
declare rid uuid;
begin
  if auth.uid() is null then raise exception 'Bitte melde dich an.'; end if;
  if coalesce(trim(p_name), '') = '' then raise exception 'Bitte gib den Namen des Restaurants an.'; end if;
  insert into public.restaurants (name, slug, city)
    values (trim(p_name), public.make_slug(p_name), nullif(trim(p_city), ''))
    returning id into rid;
  insert into public.members (user_id, restaurant_id, role) values (auth.uid(), rid, 'OWNER');
  insert into public.restaurant_billing (restaurant_id) values (rid);
  update public.profiles set role = 'OWNER' where id = auth.uid();
  return rid;
end $$;

create or replace function public.book_spot(p_spot uuid, p_party int)
returns public.bookings language plpgsql security definer set search_path = public as $$
declare
  me uuid := auth.uid();
  sp public.spots;
  r public.restaurants;
  rel record;
  taken int;
  new_code text;
  result public.bookings;
begin
  if me is null then raise exception 'Bitte melde dich an.'; end if;
  -- Sperre auf das Angebot, damit gleichzeitige Buchungen nicht überbuchen.
  select * into sp from public.spots where id = p_spot for update;
  if not found then raise exception 'Dieses Angebot gibt es nicht mehr.'; end if;
  select * into r from public.restaurants where id = sp.restaurant_id;
  if sp.status <> 'OPEN' or r.status <> 'ACTIVE' then raise exception 'Dieses Angebot ist nicht mehr buchbar.'; end if;
  if now() > sp.starts_at - make_interval(mins => sp.booking_cutoff_min) then raise exception 'Die Buchungsfrist ist abgelaufen.'; end if;
  if p_party is null or p_party < 1 or p_party > sp.max_group_size then
    raise exception 'Pro Buchung sind 1 bis % Personen möglich.', sp.max_group_size;
  end if;

  select * into rel from public.reliability(me);
  if rel.tier = 'BLOCKED' then raise exception 'Dein Konto ist wegen mehrerer No-Shows vorübergehend gesperrt.'; end if;
  if rel.tier = 'DEPOSIT' then raise exception 'Mit deinem Zuverlässigkeitswert ist eine Buchung nur mit Kaution möglich. Diese Funktion kommt bald.'; end if;

  if exists (select 1 from public.bookings b where b.user_id = me and b.spot_id = sp.id and b.status in ('BOOKED', 'CHECKED_IN')) then
    raise exception 'Du hast dieses Angebot schon gebucht.';
  end if;
  if rel.tier = 'PROBATION' and exists (
    select 1 from public.bookings b join public.spots s on s.id = b.spot_id
    where b.user_id = me and b.status = 'BOOKED' and s.ends_at > now()) then
    raise exception 'Auf Bewährung kannst du nur eine offene Buchung haben.';
  end if;
  if exists (
    select 1 from public.bookings b join public.spots s on s.id = b.spot_id
    where b.user_id = me and b.status = 'BOOKED' and s.ends_at > now()
      and (s.starts_at at time zone 'Europe/Berlin')::date = (sp.starts_at at time zone 'Europe/Berlin')::date) then
    raise exception 'Du hast an diesem Tag schon eine Buchung.';
  end if;
  if exists (
    select 1 from public.bookings b join public.spots s on s.id = b.spot_id
    where b.user_id = me and b.status in ('BOOKED', 'CHECKED_IN') and s.restaurant_id = sp.restaurant_id
      and abs(extract(epoch from s.starts_at - sp.starts_at)) < 7 * 86400) then
    raise exception 'Pro Restaurant ist eine Buchung pro Woche möglich.';
  end if;

  select coalesce(sum(party_size), 0) into taken from public.bookings where spot_id = sp.id and status in ('BOOKED', 'CHECKED_IN');
  if taken + p_party > sp.seats then raise exception 'Leider sind nicht mehr genug Plätze frei.'; end if;

  loop
    new_code := lpad((floor(random() * 900000) + 100000)::int::text, 6, '0');
    exit when not exists (select 1 from public.bookings where code = new_code);
  end loop;
  insert into public.bookings (spot_id, user_id, party_size, code) values (sp.id, me, p_party, new_code) returning * into result;
  return result;
end $$;

create or replace function public.cancel_booking(p_booking uuid)
returns void language plpgsql security definer set search_path = public as $$
declare b public.bookings; sp public.spots; late boolean;
begin
  select * into b from public.bookings where id = p_booking for update;
  if not found or b.user_id <> auth.uid() or b.status <> 'BOOKED' then raise exception 'Diese Buchung kann nicht storniert werden.'; end if;
  select * into sp from public.spots where id = b.spot_id;
  late := sp.starts_at - now() < interval '2 hours';
  update public.bookings set status = case when late then 'LATE_CANCELLED' else 'CANCELLED' end, cancelled_at = now() where id = b.id;
  if late then perform public.add_event(b.user_id, 'LATE_CANCEL', b.id); end if;
end $$;

create or replace function public.submit_review(p_booking uuid, p_rating int, p_food int, p_service int, p_ambience int, p_as_promised boolean, p_text text)
returns void language plpgsql security definer set search_path = public as $$
declare b public.bookings; sp public.spots; author text;
begin
  select * into b from public.bookings where id = p_booking;
  if not found or b.user_id <> auth.uid() or b.status <> 'CHECKED_IN' then raise exception 'Bewerten kannst du nur nach dem Check-in.'; end if;
  if exists (select 1 from public.reviews where booking_id = b.id) then raise exception 'Du hast schon bewertet.'; end if;
  if p_rating is null or p_rating not between 1 and 5 then raise exception 'Bitte vergib 1 bis 5 Sterne.'; end if;
  select * into sp from public.spots where id = b.spot_id;
  select split_part(name, ' ', 1) into author from public.profiles where id = b.user_id;
  insert into public.reviews (booking_id, restaurant_id, author_name, rating, food, service, ambience, as_promised, text)
  values (b.id, sp.restaurant_id, coalesce(author, 'Gast'), p_rating, p_food, p_service, p_ambience, coalesce(p_as_promised, true), nullif(trim(p_text), ''));
end $$;

create or replace function public.cancel_spot(p_spot uuid)
returns void language plpgsql security definer set search_path = public as $$
declare sp public.spots;
begin
  select * into sp from public.spots where id = p_spot;
  if not found or not public.is_member(sp.restaurant_id, array['OWNER', 'MANAGER']) then raise exception 'Dafür fehlt dir die Berechtigung.'; end if;
  update public.spots set status = 'CANCELLED' where id = sp.id;
  update public.bookings set status = 'CANCELLED', cancelled_at = now() where spot_id = sp.id and status = 'BOOKED';
end $$;

-- Check-in ab 60 Minuten vor Beginn bis zum Ende des Zeitfensters.
create or replace function public.check_in(p_restaurant uuid, p_code text)
returns json language plpgsql security definer set search_path = public as $$
declare c text := regexp_replace(regexp_replace(coalesce(p_code, ''), '^THIRSTY:', '', 'i'), '\D', '', 'g');
  b public.bookings; sp public.spots;
begin
  if not public.is_member(p_restaurant) then raise exception 'Dafür fehlt dir die Berechtigung in diesem Restaurant.'; end if;
  select * into b from public.bookings where code = c for update;
  if found then select * into sp from public.spots where id = b.spot_id; end if;
  if not found or sp.restaurant_id <> p_restaurant then
    raise exception 'Code % gehört zu keiner Buchung in diesem Restaurant.', coalesce(nullif(c, ''), p_code);
  end if;
  if b.status = 'CHECKED_IN' then return json_build_object('booking_id', b.id, 'again', true); end if;
  if b.status not in ('BOOKED', 'NO_SHOW') then raise exception 'Diese Buchung wurde storniert.'; end if;
  if now() < sp.starts_at - interval '60 minutes' then raise exception 'Diese Buchung gilt erst später.'; end if;
  if now() > sp.ends_at then raise exception 'Das Zeitfenster dieser Buchung ist vorbei.'; end if;
  if b.status = 'NO_SHOW' then
    delete from public.reliability_events where booking_id = b.id and kind = 'NO_SHOW';
  end if;
  update public.bookings set status = 'CHECKED_IN', checked_in_at = now() where id = b.id;
  perform public.add_event(b.user_id, 'ATTENDED', b.id);
  return json_build_object('booking_id', b.id, 'again', false);
end $$;

create or replace function public.mark_no_show(p_booking uuid)
returns void language plpgsql security definer set search_path = public as $$
declare b public.bookings; sp public.spots;
begin
  select * into b from public.bookings where id = p_booking for update;
  if not found then raise exception 'Buchung nicht gefunden.'; end if;
  select * into sp from public.spots where id = b.spot_id;
  if not public.is_member(sp.restaurant_id) then raise exception 'Dafür fehlt dir die Berechtigung in diesem Restaurant.'; end if;
  if b.status <> 'BOOKED' then raise exception 'Diese Buchung ist nicht mehr offen.'; end if;
  if now() < sp.starts_at + interval '15 minutes' then raise exception 'Ein No-Show kann erst 15 Minuten nach Beginn gemeldet werden.'; end if;
  update public.bookings set status = 'NO_SHOW' where id = b.id;
  perform public.add_event(b.user_id, 'NO_SHOW', b.id);
end $$;

create or replace function public.give_feedback(p_booking uuid, p_positive boolean, p_tags text[])
returns void language plpgsql security definer set search_path = public as $$
declare b public.bookings; sp public.spots;
begin
  select * into b from public.bookings where id = p_booking;
  if not found then raise exception 'Buchung nicht gefunden.'; end if;
  select * into sp from public.spots where id = b.spot_id;
  if not public.is_member(sp.restaurant_id) then raise exception 'Dafür fehlt dir die Berechtigung in diesem Restaurant.'; end if;
  if b.status <> 'CHECKED_IN' or exists (select 1 from public.feedback where booking_id = b.id) then raise exception 'Feedback ist schon abgegeben.'; end if;
  insert into public.feedback (booking_id, positive, tags) values (b.id, p_positive, coalesce(p_tags, '{}'));
  if not p_positive then perform public.add_event(b.user_id, 'THUMBS_DOWN', b.id); end if;
  if 'zu spät' = any (coalesce(p_tags, '{}')) then perform public.add_event(b.user_id, 'LATE_ARRIVAL', b.id); end if;
end $$;

create or replace function public.add_member(p_restaurant uuid, p_email text, p_role text)
returns void language plpgsql security definer set search_path = public as $$
declare uid uuid;
begin
  if not public.is_member(p_restaurant, array['OWNER']) then raise exception 'Nur Inhaber können das Team ändern.'; end if;
  if p_role not in ('MANAGER', 'STAFF') then raise exception 'Unbekannte Rolle.'; end if;
  select id into uid from public.profiles where email = lower(trim(p_email));
  if uid is null then raise exception 'Zu dieser E-Mail gibt es noch kein Thirsty-Konto. Die Person muss sich zuerst registrieren.'; end if;
  insert into public.members (user_id, restaurant_id, role) values (uid, p_restaurant, p_role)
    on conflict (user_id, restaurant_id) do update set role = excluded.role
    where public.members.role <> 'OWNER';
end $$;

-- Buchungen eines Restaurants mit Gastinfos für das Portal.
create or replace function public.restaurant_bookings(p_restaurant uuid)
returns table (id uuid, spot_id uuid, user_id uuid, party_size int, code text, status text, created_at timestamptz,
  checked_in_at timestamptz, guest_name text, dietary_notes text, tier text, has_feedback boolean)
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_member(p_restaurant) then raise exception 'Dafür fehlt dir die Berechtigung in diesem Restaurant.'; end if;
  return query
    select b.id, b.spot_id, b.user_id, b.party_size, b.code, b.status, b.created_at, b.checked_in_at,
      p.name, p.dietary_notes, (select r.tier from public.reliability(b.user_id) r),
      exists (select 1 from public.feedback f where f.booking_id = b.id)
    from public.bookings b join public.spots s on s.id = b.spot_id join public.profiles p on p.id = b.user_id
    where s.restaurant_id = p_restaurant and s.starts_at > now() - interval '120 days';
end $$;

create or replace function public.restaurant_members(p_restaurant uuid)
returns table (id uuid, user_id uuid, role text, name text, email text)
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.is_member(p_restaurant) then raise exception 'Dafür fehlt dir die Berechtigung in diesem Restaurant.'; end if;
  return query select m.id, m.user_id, m.role, p.name, p.email
    from public.members m join public.profiles p on p.id = m.user_id where m.restaurant_id = p_restaurant;
end $$;

-- Belegte Plätze pro Angebot, ohne Buchungen offenzulegen.
create or replace function public.spot_taken()
returns table (spot_id uuid, taken int)
language sql stable security definer set search_path = public as $$
  select b.spot_id, sum(b.party_size)::int from public.bookings b join public.spots s on s.id = b.spot_id
  where b.status in ('BOOKED', 'CHECKED_IN') and s.ends_at > now() - interval '1 day'
  group by b.spot_id;
$$;

-- Beispiel-Restaurants bekommen automatisch Angebote für die nächsten Tage.
create or replace function public.ensure_demo_spots()
returns void language plpgsql security definer set search_path = public as $$
declare r record; d int; t timestamptz; v int;
begin
  for r in select id, (row_number() over (order by slug))::int - 1 as i from public.restaurants where demo and status = 'ACTIVE' loop
    for d in 1..4 loop
      t := ((now() at time zone 'Europe/Berlin')::date + d + time '17:30') at time zone 'Europe/Berlin';
      v := (r.i + extract(day from t)::int) % 5;
      if not exists (select 1 from public.spots where restaurant_id = r.id and starts_at = t) then
        insert into public.spots (restaurant_id, starts_at, ends_at, seats, discount_percent, freebie, conditions)
        values (r.id, t, t + interval '90 minutes', 8,
          case v when 0 then 50 when 3 then 25 when 4 then 75 else 0 end,
          case v when 1 then 'Gratis-Getränk' when 2 then 'Gratis-Dessert' end,
          'Ein Hauptgericht pro Person.');
      end if;
    end loop;
  end loop;
end $$;

-- ---------- Zugriffsregeln ----------

alter table public.profiles enable row level security;
alter table public.restaurants enable row level security;
alter table public.restaurant_billing enable row level security;
alter table public.members enable row level security;
alter table public.opening_hours enable row level security;
alter table public.photos enable row level security;
alter table public.menu_items enable row level security;
alter table public.spots enable row level security;
alter table public.bookings enable row level security;
alter table public.reviews enable row level security;
alter table public.feedback enable row level security;
alter table public.reliability_events enable row level security;
alter table public.favorites enable row level security;

do $$
declare t text;
begin
  -- Alte Regeln entfernen, damit das Skript wiederholt laufen kann.
  for t in select format('drop policy if exists %I on %I.%I', policyname, schemaname, tablename)
           from pg_policies where schemaname = 'public' and tablename in ('profiles', 'restaurants', 'restaurant_billing',
             'members', 'opening_hours', 'photos', 'menu_items', 'spots', 'bookings', 'reviews', 'feedback',
             'reliability_events', 'favorites') loop
    execute t;
  end loop;
end $$;

create policy "eigenes Profil lesen" on public.profiles for select using (id = auth.uid());
create policy "eigenes Profil ändern" on public.profiles for update using (id = auth.uid());

create policy "sichtbare Restaurants" on public.restaurants for select using (status = 'ACTIVE' or public.is_member(id));
create policy "Restaurant pflegen" on public.restaurants for update using (public.is_member(id, array['OWNER', 'MANAGER']));

create policy "Rechnungsdaten" on public.restaurant_billing for all
  using (public.is_member(restaurant_id, array['OWNER', 'MANAGER']))
  with check (public.is_member(restaurant_id, array['OWNER', 'MANAGER']));

create policy "eigene Mitgliedschaften" on public.members for select using (user_id = auth.uid() or public.is_member(restaurant_id));
create policy "Team verwalten" on public.members for delete using (public.is_member(restaurant_id, array['OWNER']) and user_id <> auth.uid());

create policy "lesen" on public.opening_hours for select using (exists (select 1 from public.restaurants r where r.id = restaurant_id));
create policy "pflegen" on public.opening_hours for all
  using (public.is_member(restaurant_id, array['OWNER', 'MANAGER'])) with check (public.is_member(restaurant_id, array['OWNER', 'MANAGER']));

create policy "lesen" on public.photos for select using (exists (select 1 from public.restaurants r where r.id = restaurant_id));
create policy "pflegen" on public.photos for all
  using (public.is_member(restaurant_id, array['OWNER', 'MANAGER'])) with check (public.is_member(restaurant_id, array['OWNER', 'MANAGER']));

create policy "lesen" on public.menu_items for select using (exists (select 1 from public.restaurants r where r.id = restaurant_id));
create policy "pflegen" on public.menu_items for all
  using (public.is_member(restaurant_id, array['OWNER', 'MANAGER'])) with check (public.is_member(restaurant_id, array['OWNER', 'MANAGER']));

create policy "lesen" on public.spots for select using (exists (select 1 from public.restaurants r where r.id = restaurant_id));
create policy "anlegen" on public.spots for insert with check (public.is_member(restaurant_id, array['OWNER', 'MANAGER']) and starts_at > now());

create policy "eigene Buchungen" on public.bookings for select using (user_id = auth.uid());

create policy "lesen" on public.reviews for select using (exists (select 1 from public.restaurants r where r.id = restaurant_id));
create policy "antworten" on public.reviews for update using (public.is_member(restaurant_id, array['OWNER', 'MANAGER']));

create policy "eigene Ereignisse" on public.reliability_events for select using (user_id = auth.uid());

create policy "eigene Favoriten" on public.favorites for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Grundrechte ausdrücklich setzen (neuere Supabase-Projekte geben neue Tabellen nicht mehr automatisch frei).
grant usage on schema public to anon, authenticated;
grant select on public.profiles, public.restaurants, public.restaurant_billing, public.members, public.opening_hours,
  public.photos, public.menu_items, public.spots, public.bookings, public.reviews, public.feedback,
  public.reliability_events, public.favorites to anon, authenticated;
grant insert, update, delete on public.profiles, public.restaurants, public.restaurant_billing, public.members,
  public.opening_hours, public.photos, public.menu_items, public.spots, public.bookings, public.reviews, public.feedback,
  public.reliability_events, public.favorites to authenticated;
grant execute on all functions in schema public to anon, authenticated;

-- Spaltenrechte: nur das Nötige änderbar.
revoke insert, update, delete, truncate on public.profiles from anon, authenticated;
grant update (name, phone, dietary_notes) on public.profiles to authenticated;
revoke insert, update, delete, truncate on public.restaurants from anon, authenticated;
grant update (name, tagline, description, cuisine, price_level, street, postal_code, city, lat, lng, directions, phone,
  email, website, instagram, seats_inside, seats_outside, features, status) on public.restaurants to authenticated;
revoke insert, update, delete, truncate on public.reviews from anon, authenticated;
grant update (reply) on public.reviews to authenticated;
revoke insert, update, delete, truncate on public.bookings, public.feedback, public.reliability_events from anon, authenticated;
revoke insert, update, truncate on public.members from anon, authenticated;
revoke update, delete, truncate on public.spots from anon, authenticated;
revoke truncate on public.restaurant_billing, public.opening_hours, public.photos, public.menu_items, public.favorites from anon, authenticated;
revoke insert, update, delete on public.restaurant_billing, public.opening_hours, public.photos, public.menu_items,
  public.favorites, public.members, public.spots from anon;

-- Funktionsrechte: interne Funktionen gar nicht aufrufbar, Aktionen nur angemeldet.
-- is_member bleibt für alle aufrufbar, weil die Zugriffsregeln sie verwenden.
revoke all on function public.add_event(uuid, text, uuid) from public, anon, authenticated;
revoke all on function public.reliability(uuid) from public, anon, authenticated;
revoke all on function public.handle_new_user() from public, anon, authenticated;
revoke all on function public.restaurants_before_update() from public, anon, authenticated;
revoke all on function public.make_slug(text, uuid) from public, anon, authenticated;
revoke all on function public.add_member(uuid, text, text), public.book_spot(uuid, int), public.cancel_booking(uuid),
  public.cancel_spot(uuid), public.check_in(uuid, text), public.create_restaurant(text, text), public.give_feedback(uuid, boolean, text[]),
  public.mark_no_show(uuid), public.my_reliability(), public.restaurant_bookings(uuid), public.restaurant_members(uuid),
  public.submit_review(uuid, int, int, int, int, boolean, text) from public, anon;

-- ---------- Fotos (Supabase Storage) ----------

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('photos', 'photos', true, 2097152, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update set public = true, file_size_limit = 2097152, allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp'];

drop policy if exists "thirsty photos upload" on storage.objects;
drop policy if exists "thirsty photos delete" on storage.objects;
create policy "thirsty photos upload" on storage.objects for insert to authenticated
  with check (bucket_id = 'photos' and public.is_member(((storage.foldername(name))[1])::uuid, array['OWNER', 'MANAGER']));
create policy "thirsty photos delete" on storage.objects for delete to authenticated
  using (bucket_id = 'photos' and public.is_member(((storage.foldername(name))[1])::uuid, array['OWNER', 'MANAGER']));

-- ---------- Beispiel-Restaurants ----------

insert into public.restaurants (slug, name, cuisine, price_level, tagline, description, street, postal_code, city, lat, lng, phone,
  seats_inside, seats_outside, features, status, demo)
values
  ('trattoria-sole', 'Trattoria Sole', 'Italienisch', 2, 'Hausgemachte Pasta und Terrasse in der Abendsonne',
   'Familiengeführte Trattoria mit frischer Pasta, Holzofenpizza und einer großen Terrasse zur Westseite.',
   'Schanzenstraße 12', '20357', 'Hamburg', 53.5627, 9.9629, null, 40, 24, '{terrasse,kinder,wlan}', 'ACTIVE', true),
  ('pho-viet-kitchen', 'Pho Viet Kitchen', 'Vietnamesisch', 1, 'Pho, Bánh mì und frische Sommerrollen',
   'Kleine vietnamesische Küche mit Brühen, die zwölf Stunden ziehen.',
   'Bahrenfelder Straße 80', '22765', 'Hamburg', 53.5552, 9.9306, null, 28, 8, '{vegan}', 'ACTIVE', true),
  ('fischhalle-kai', 'Fischhalle am Kai', 'Fisch', 3, 'Fangfrischer Fisch mit Blick auf den Hafen',
   'Fischrestaurant mit Außenplätzen direkt am Wasser. Mittags voll, abends ab 17 Uhr noch Platz.',
   'Große Elbstraße 150', '22767', 'Hamburg', 53.5449, 9.9419, null, 60, 30, '{terrasse,barrierefrei}', 'ACTIVE', true)
on conflict (slug) do nothing;

insert into public.menu_items (restaurant_id, category, name, price_cents, tags, position)
select r.id, m.category, m.name, m.price, m.tags, m.pos
from (values
  ('trattoria-sole', 'Vorspeisen', 'Bruschetta al pomodoro', 790, '{vegetarisch}'::text[], 0),
  ('trattoria-sole', 'Vorspeisen', 'Vitello tonnato', 1290, '{}'::text[], 1),
  ('trattoria-sole', 'Hauptgerichte', 'Tagliatelle al ragù', 1590, '{}'::text[], 2),
  ('trattoria-sole', 'Hauptgerichte', 'Pizza Margherita', 1190, '{vegetarisch}'::text[], 3),
  ('trattoria-sole', 'Desserts', 'Tiramisù', 750, '{vegetarisch}'::text[], 4),
  ('pho-viet-kitchen', 'Vorspeisen', 'Sommerrollen mit Tofu', 650, '{vegan}'::text[], 0),
  ('pho-viet-kitchen', 'Hauptgerichte', 'Pho Bo', 1390, '{scharf}'::text[], 1),
  ('pho-viet-kitchen', 'Hauptgerichte', 'Bún chay', 1290, '{vegan}'::text[], 2),
  ('fischhalle-kai', 'Vorspeisen', 'Krabbensuppe', 990, '{}'::text[], 0),
  ('fischhalle-kai', 'Hauptgerichte', 'Scholle Finkenwerder Art', 2690, '{}'::text[], 1),
  ('fischhalle-kai', 'Hauptgerichte', 'Matjes mit Bratkartoffeln', 1890, '{}'::text[], 2)
) as m (slug, category, name, price, tags, pos)
join public.restaurants r on r.slug = m.slug and r.demo
where not exists (select 1 from public.menu_items x where x.restaurant_id = r.id);

insert into public.opening_hours (restaurant_id, weekday, opens, closes)
select r.id, d, '17:00', '23:00' from public.restaurants r cross join generate_series(1, 6) d
where r.demo and not exists (select 1 from public.opening_hours h where h.restaurant_id = r.id);

select public.ensure_demo_spots();
