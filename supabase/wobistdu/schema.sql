-- Wo bist du? (toptop.shop/wobistdu)
-- Eigenes Schema "wbd" im Supabase-Projekt Firsty.app, gleiches Muster wie "wls" (Werbung lohnt sich):
-- Das Schema ist nicht über die API freigegeben; der Browser erreicht die Daten nur über public.wbd_*
-- (security definer). Eigene Konten (Telefonnummer oder E-Mail + Passwort), nicht Supabase Auth.
-- Standorte werden nur gespeichert, wenn jemand aktiv teilt, und nach Ablauf gelöscht (Koordinaten = null).

create extension if not exists pgcrypto with schema extensions;
create schema if not exists wbd;
revoke all on schema wbd from public, anon, authenticated;

create table if not exists wbd.accounts (
  id uuid primary key default gen_random_uuid(),
  phone text unique,
  email text unique,
  pw_hash text,
  name text not null,
  color text not null default '#2F5BFF',
  is_bot boolean not null default false,
  created_at timestamptz not null default now(),
  check (phone is not null or email is not null)
);

create table if not exists wbd.sessions (
  token_hash text primary key,
  account_id uuid not null references wbd.accounts(id) on delete cascade,
  expires_at timestamptz not null default now() + interval '90 days'
);

create table if not exists wbd.login_attempts (login text not null, at timestamptz not null default now());
create index if not exists wbd_login_attempts_idx on wbd.login_attempts(login, at);

-- Kontaktliste je Person (einseitig). trusted = automatisch antworten, muted = keine Hinweise, blocked = nichts empfangen
create table if not exists wbd.contacts (
  owner uuid not null references wbd.accounts(id) on delete cascade,
  contact uuid not null references wbd.accounts(id) on delete cascade,
  trusted boolean not null default false,
  muted boolean not null default false,
  blocked boolean not null default false,
  last_read bigint not null default 0,
  created_at timestamptz not null default now(),
  primary key (owner, contact),
  check (owner <> contact)
);

-- Alle Ereignisse zwischen zwei Personen: Frage, Freigabe, Absage, Schnellantworten, Reaktionen
create table if not exists wbd.messages (
  id bigint generated always as identity primary key,
  sender uuid not null references wbd.accounts(id) on delete cascade,
  recipient uuid not null references wbd.accounts(id) on delete cascade,
  kind text not null check (kind in ('ask','share','decline','quick','react','eta')),
  body text,
  reply_to bigint references wbd.messages(id) on delete set null,
  mode text check (mode in ('exact','approx')),
  live boolean not null default false,
  lat double precision,
  lng double precision,
  accuracy int,
  loc_updated_at timestamptz,
  expires_at timestamptz,
  ended boolean not null default false,
  created_at timestamptz not null default now()
);
create index if not exists wbd_messages_pair on wbd.messages(sender, recipient, id);
create index if not exists wbd_messages_recipient on wbd.messages(recipient, id);

alter table wbd.accounts enable row level security;
alter table wbd.sessions enable row level security;
alter table wbd.login_attempts enable row level security;
alter table wbd.contacts enable row level security;
alter table wbd.messages enable row level security;

-- Erlaubte Schnellantworten (kein Freitext)
create or replace function wbd.allowed(k text, b text) returns boolean language sql immutable as $$
  select case k
    when 'quick' then b in ('howlong','almost','waiting','callme','thanks','allgood','onmyway','andyou','comehere')
    when 'react' then b in ('like','love','pray','laugh')
    when 'eta' then b in ('5','10','15','30','60')
    when 'decline' then b is null or b in ('callsoon','onroad','later','stopped')
    when 'ask' then b is null
    else false end
$$;

-- Hilfsfunktionen ---------------------------------------------------------------------------------

create or replace function wbd.norm_login(p text) returns jsonb language plpgsql immutable as $$
declare s text := lower(trim(coalesce(p,'')));
begin
  if s like '%@%' then
    if s !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then raise exception 'Bitte gib eine gültige E-Mail-Adresse ein.'; end if;
    return jsonb_build_object('email', s);
  end if;
  s := regexp_replace(s, '[\s\-\/\(\)\.]', '', 'g');
  if s like '00%' then s := '+' || substr(s, 3); end if;
  if s like '0%' then s := '+49' || substr(s, 2); end if;
  if s !~ '^\+[1-9][0-9]{6,14}$' then raise exception 'Bitte gib eine gültige Handynummer oder E-Mail-Adresse ein.'; end if;
  return jsonb_build_object('phone', s);
end $$;

create or replace function wbd.find(p text) returns wbd.accounts language plpgsql stable
security definer set search_path = wbd, extensions, public as $$
declare n jsonb := wbd.norm_login(p); a wbd.accounts;
begin
  if n ? 'email' then select * into a from wbd.accounts where email = n->>'email';
  else select * into a from wbd.accounts where phone = n->>'phone'; end if;
  return a;
end $$;

create or replace function wbd.auth(p_token text) returns wbd.accounts
language plpgsql security definer set search_path = wbd, extensions, public as $$
declare a wbd.accounts;
begin
  select acc.* into a from wbd.sessions s join wbd.accounts acc on acc.id = s.account_id
   where s.token_hash = encode(digest(coalesce(p_token,''), 'sha256'), 'hex') and s.expires_at > now();
  if a.id is null then raise exception 'Bitte melde dich erneut an.' using errcode = '28000'; end if;
  return a;
end $$;

create or replace function wbd.new_session(p_account uuid) returns text
language plpgsql security definer set search_path = wbd, extensions, public as $$
declare t text := encode(gen_random_bytes(32), 'hex');
begin
  delete from wbd.sessions where expires_at < now();
  insert into wbd.sessions(token_hash, account_id) values (encode(digest(t,'sha256'),'hex'), p_account);
  return t;
end $$;

create or replace function wbd.account_json(a wbd.accounts) returns jsonb language sql stable as $$
  select jsonb_build_object('id', a.id, 'name', a.name, 'phone', a.phone, 'email', a.email, 'color', a.color)
$$;

-- Abgelaufene Standorte löschen
create or replace function wbd.cleanup() returns void language plpgsql security definer set search_path = wbd as $$
begin
  update wbd.messages set lat = null, lng = null, accuracy = null
   where kind = 'share' and lat is not null and (ended or expires_at < now());
end $$;

-- Test-Kontakt, der automatisch antwortet (damit man die App allein ausprobieren kann)
create or replace function wbd.bot() returns wbd.accounts language sql stable security definer set search_path = wbd as $$
  select * from wbd.accounts where is_bot limit 1
$$;

create or replace function wbd.bot_answer(m wbd.messages) returns void
language plpgsql security definer set search_path = wbd, extensions, public as $$
declare b wbd.accounts := wbd.bot();
begin
  if b.id is null or m.recipient <> b.id then return; end if;
  if m.kind = 'ask' then
    insert into wbd.messages(sender, recipient, kind, reply_to, mode, live, lat, lng, accuracy, loc_updated_at, expires_at)
    values (b.id, m.sender, 'share', m.id, 'exact', false,
            52.5163 + (random() - 0.5) * 0.004, 13.3777 + (random() - 0.5) * 0.006, 15, now(), now() + interval '60 minutes');
  elsif m.kind = 'quick' and m.body = 'howlong' then
    insert into wbd.messages(sender, recipient, kind, body, reply_to) values (b.id, m.sender, 'eta', '15', m.id);
  elsif m.kind = 'quick' and m.body = 'comehere' then
    insert into wbd.messages(sender, recipient, kind, body, reply_to) values (b.id, m.sender, 'quick', 'onmyway', m.id);
  elsif m.kind = 'quick' and m.body = 'andyou' then
    insert into wbd.messages(sender, recipient, kind) values (b.id, m.sender, 'ask');
  elsif m.kind in ('quick','share','eta') then
    insert into wbd.messages(sender, recipient, kind, body, reply_to) values (b.id, m.sender, 'react', 'like', m.id);
  end if;
end $$;

-- Konto -------------------------------------------------------------------------------------------

create or replace function public.wbd_register(p_login text, p_password text, p_name text)
returns jsonb language plpgsql security definer set search_path = wbd, extensions, public as $$
declare n jsonb := wbd.norm_login(p_login); a wbd.accounts; b wbd.accounts := wbd.bot();
  colors text[] := array['#2F5BFF','#13875B','#B5487A','#B07A12','#7A4BD1','#0E7C86','#C2412D'];
begin
  -- Handynummern nur per SMS-Code (bestätigt). Passwort nur noch für Test-Zugänge mit E-Mail.
  if n ? 'phone' then return jsonb_build_object('error','Mit Handynummer meldest du dich per SMS-Code an.'); end if;
  if length(coalesce(p_password,'')) < 8 then return jsonb_build_object('error','Das Passwort braucht mindestens 8 Zeichen.'); end if;
  if length(trim(coalesce(p_name,''))) < 2 then return jsonb_build_object('error','Bitte gib deinen Namen ein.'); end if;
  if (wbd.find(p_login)).id is not null then
    return jsonb_build_object('error','Für diese E-Mail gibt es schon ein Konto. Bitte melde dich an.');
  end if;
  insert into wbd.accounts(phone, email, pw_hash, name, color)
  values (null, n->>'email', crypt(p_password, gen_salt('bf', 10)), left(trim(p_name), 40),
          colors[1 + floor(random() * array_length(colors,1))::int])
  returning * into a;
  if b.id is not null then
    insert into wbd.contacts(owner, contact) values (a.id, b.id) on conflict do nothing;
    insert into wbd.contacts(owner, contact) values (b.id, a.id) on conflict do nothing;
  end if;
  return jsonb_build_object('token', wbd.new_session(a.id), 'account', wbd.account_json(a));
end $$;

create or replace function public.wbd_login(p_login text, p_password text)
returns jsonb language plpgsql security definer set search_path = wbd, extensions, public as $$
declare a wbd.accounts; k text := lower(trim(coalesce(p_login,'')));
begin
  if (select count(*) from wbd.login_attempts where login = k and at > now() - interval '15 minutes') >= 8 then
    return jsonb_build_object('error','Zu viele Versuche. Bitte warte 15 Minuten.');
  end if;
  begin a := wbd.find(p_login); exception when others then a := null; end;
  if a.id is null or a.is_bot or a.pw_hash is null or a.pw_hash <> crypt(coalesce(p_password,''), a.pw_hash) then
    insert into wbd.login_attempts(login) values (k);
    return jsonb_build_object('error','Nummer/E-Mail oder Passwort stimmt nicht.');
  end if;
  return jsonb_build_object('token', wbd.new_session(a.id), 'account', wbd.account_json(a));
end $$;

create or replace function public.wbd_logout(p_token text) returns void
language sql security definer set search_path = wbd, extensions, public as $$
  update wbd.sessions set expires_at = '-infinity' where token_hash = encode(digest(coalesce(p_token,''),'sha256'),'hex')
$$;

create or replace function public.wbd_delete_account(p_token text) returns jsonb
language plpgsql security definer set search_path = wbd, extensions, public as $$
declare a wbd.accounts := wbd.auth(p_token);
begin
  delete from wbd.accounts where id = a.id;
  return jsonb_build_object('ok', true);
end $$;

-- Kontakte ----------------------------------------------------------------------------------------

create or replace function public.wbd_add_contact(p_token text, p_login text)
returns jsonb language plpgsql security definer set search_path = wbd, extensions, public as $$
declare a wbd.accounts := wbd.auth(p_token); c wbd.accounts;
begin
  begin c := wbd.find(p_login); exception when others then return jsonb_build_object('error', sqlerrm); end;
  if c.id is null then
    return jsonb_build_object('error','not_found');
  end if;
  if c.id = a.id then return jsonb_build_object('error','Das bist du selbst.'); end if;
  insert into wbd.contacts(owner, contact) values (a.id, c.id)
  on conflict (owner, contact) do update set blocked = false;
  return jsonb_build_object('ok', true, 'id', c.id);
end $$;

create or replace function public.wbd_set_contact(p_token text, p_contact uuid, p_trusted boolean, p_muted boolean, p_blocked boolean)
returns jsonb language plpgsql security definer set search_path = wbd, extensions, public as $$
declare a wbd.accounts := wbd.auth(p_token);
begin
  update wbd.contacts set trusted = coalesce(p_trusted, trusted), muted = coalesce(p_muted, muted),
         blocked = coalesce(p_blocked, blocked)
   where owner = a.id and contact = p_contact;
  return jsonb_build_object('ok', true);
end $$;

create or replace function public.wbd_remove_contact(p_token text, p_contact uuid)
returns jsonb language plpgsql security definer set search_path = wbd, extensions, public as $$
declare a wbd.accounts := wbd.auth(p_token);
begin
  delete from wbd.contacts where owner = a.id and contact = p_contact;
  return jsonb_build_object('ok', true);
end $$;

-- Abgleich: Konto, Kontakte und alle Nachrichten seit p_since ------------------------------------

create or replace function public.wbd_sync(p_token text, p_since bigint default 0)
returns jsonb language plpgsql security definer set search_path = wbd, extensions, public as $$
declare a wbd.accounts := wbd.auth(p_token);
begin
  perform wbd.cleanup();
  -- Wer mir schreibt und mich gespeichert hat, landet automatisch in meinen Kontakten (sichtbar, nicht vertraut)
  insert into wbd.contacts(owner, contact)
    select distinct a.id, m.sender from wbd.messages m
     where m.recipient = a.id and m.id > p_since
  on conflict do nothing;
  return jsonb_build_object(
    'me', wbd.account_json(a),
    'contacts', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', x.id, 'name', x.name, 'color', x.color, 'bot', x.is_bot,
        'phone', case when x.is_bot then null else x.phone end,
        'trusted', c.trusted, 'muted', c.muted, 'blocked', c.blocked, 'last_read', c.last_read,
        'trusts_me', coalesce((select r.trusted from wbd.contacts r where r.owner = x.id and r.contact = a.id), false),
        'knows_me', exists(select 1 from wbd.contacts r where r.owner = x.id and r.contact = a.id)
      ) order by x.is_bot, x.name)
      from wbd.contacts c join wbd.accounts x on x.id = c.contact where c.owner = a.id), '[]'::jsonb),
    'messages', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', m.id, 'from', m.sender, 'to', m.recipient, 'kind', m.kind, 'body', m.body, 'reply_to', m.reply_to,
        'mode', m.mode, 'live', m.live, 'lat', m.lat, 'lng', m.lng, 'accuracy', m.accuracy,
        'loc_at', m.loc_updated_at, 'expires_at', m.expires_at, 'ended', m.ended, 'at', m.created_at
      ) order by m.id)
      from wbd.messages m
      where (m.sender = a.id or m.recipient = a.id)
        and (m.id > p_since or (m.kind = 'share' and m.loc_updated_at > now() - interval '3 minutes'))
        and not exists (select 1 from wbd.contacts b where b.owner = a.id and b.contact = m.sender and b.blocked)
    ), '[]'::jsonb),
    'now', now()
  );
end $$;

create or replace function public.wbd_read(p_token text, p_contact uuid, p_upto bigint)
returns void language plpgsql security definer set search_path = wbd, extensions, public as $$
declare a wbd.accounts := wbd.auth(p_token);
begin
  update wbd.contacts set last_read = greatest(last_read, p_upto) where owner = a.id and contact = p_contact;
end $$;

-- Senden ------------------------------------------------------------------------------------------

create or replace function wbd.blocked_by(p_recipient uuid, p_sender uuid) returns boolean language sql stable
security definer set search_path = wbd as $$
  select exists(select 1 from wbd.contacts where owner = p_recipient and contact = p_sender and blocked)
$$;

create or replace function wbd.check_rate(p_sender uuid) returns void language plpgsql stable
security definer set search_path = wbd as $$
begin
  if (select count(*) from wbd.messages where sender = p_sender and created_at > now() - interval '1 minute') >= 30 then
    raise exception 'Kurz durchatmen: zu viele Nachrichten in einer Minute.';
  end if;
end $$;

-- Frage, Schnellantwort, Reaktion, Ankunftszeit, Absage
create or replace function public.wbd_send(p_token text, p_to uuid, p_kind text, p_body text default null, p_reply_to bigint default null)
returns jsonb language plpgsql security definer set search_path = wbd, extensions, public as $$
declare a wbd.accounts := wbd.auth(p_token); m wbd.messages;
begin
  if not exists (select 1 from wbd.contacts where owner = a.id and contact = p_to) then
    return jsonb_build_object('error','Diese Person ist nicht in deinen Kontakten.');
  end if;
  if p_kind not in ('ask','quick','react','eta','decline') or not wbd.allowed(p_kind, p_body) then
    return jsonb_build_object('error','Diese Antwort gibt es nicht.');
  end if;
  perform wbd.check_rate(a.id);
  -- Nicht nerven: höchstens eine offene Frage pro Person (offen = in den letzten 10 Minuten unbeantwortet)
  if p_kind = 'ask' and exists (
      select 1 from wbd.messages q where q.sender = a.id and q.recipient = p_to and q.kind = 'ask'
         and q.created_at > now() - interval '10 minutes'
         and not exists (select 1 from wbd.messages r where r.reply_to = q.id and r.kind in ('share','decline'))) then
    return jsonb_build_object('error','Du hast gerade schon gefragt. Warte kurz auf die Antwort.');
  end if;
  if wbd.blocked_by(p_to, a.id) then
    return jsonb_build_object('ok', true); -- Blockierte merken nichts davon
  end if;
  insert into wbd.messages(sender, recipient, kind, body, reply_to)
  values (a.id, p_to, p_kind, p_body, p_reply_to) returning * into m;
  perform wbd.bot_answer(m);
  return jsonb_build_object('ok', true, 'id', m.id);
end $$;

-- Standort teilen (auf eine Frage oder von sich aus). p_minutes: 0 = einmalig (sichtbar 60 Min), 15 / 60 = live
create or replace function public.wbd_share(p_token text, p_to uuid, p_lat double precision, p_lng double precision,
  p_accuracy int, p_mode text, p_minutes int, p_reply_to bigint default null)
returns jsonb language plpgsql security definer set search_path = wbd, extensions, public as $$
declare a wbd.accounts := wbd.auth(p_token); m wbd.messages; la double precision := p_lat; lo double precision := p_lng;
begin
  if not exists (select 1 from wbd.contacts where owner = a.id and contact = p_to) then
    return jsonb_build_object('error','Diese Person ist nicht in deinen Kontakten.');
  end if;
  if p_mode not in ('exact','approx') or p_minutes not in (0, 15, 60) then
    return jsonb_build_object('error','Ungültige Freigabe.');
  end if;
  if la is null or lo is null or la not between -90 and 90 or lo not between -180 and 180 then
    return jsonb_build_object('error','Standort fehlt.');
  end if;
  perform wbd.check_rate(a.id);
  if p_mode = 'approx' then la := round(la::numeric, 2); lo := round(lo::numeric, 2); end if; -- ca. 1 km
  if wbd.blocked_by(p_to, a.id) then return jsonb_build_object('ok', true); end if;
  insert into wbd.messages(sender, recipient, kind, reply_to, mode, live, lat, lng, accuracy, loc_updated_at, expires_at)
  values (a.id, p_to, 'share', p_reply_to, p_mode, p_minutes > 0, la, lo,
          case when p_mode = 'approx' then 1000 else greatest(coalesce(p_accuracy, 30), 5) end, now(),
          now() + make_interval(mins => case when p_minutes = 0 then 60 else p_minutes end))
  returning * into m;
  perform wbd.bot_answer(m);
  return jsonb_build_object('ok', true, 'id', m.id);
end $$;

-- Live-Freigabe aktualisieren
create or replace function public.wbd_live_update(p_token text, p_id bigint, p_lat double precision, p_lng double precision, p_accuracy int)
returns jsonb language plpgsql security definer set search_path = wbd, extensions, public as $$
declare a wbd.accounts := wbd.auth(p_token); m wbd.messages;
begin
  select * into m from wbd.messages where id = p_id and sender = a.id and kind = 'share';
  if m.id is null or not m.live or m.ended or m.expires_at < now() then return jsonb_build_object('ok', false); end if;
  update wbd.messages set
    lat = case when mode = 'approx' then round(p_lat::numeric, 2) else p_lat end,
    lng = case when mode = 'approx' then round(p_lng::numeric, 2) else p_lng end,
    accuracy = case when mode = 'approx' then 1000 else greatest(coalesce(p_accuracy, 30), 5) end,
    loc_updated_at = now()
  where id = p_id;
  return jsonb_build_object('ok', true);
end $$;

-- Freigabe sofort beenden (Koordinaten werden gelöscht)
create or replace function public.wbd_stop(p_token text, p_id bigint)
returns jsonb language plpgsql security definer set search_path = wbd, extensions, public as $$
declare a wbd.accounts := wbd.auth(p_token);
begin
  update wbd.messages set ended = true, lat = null, lng = null, accuracy = null, loc_updated_at = now()
   where id = p_id and sender = a.id and kind = 'share';
  return jsonb_build_object('ok', true);
end $$;

-- Anmeldung per SMS-Code (Twilio Verify über die Edge Function wbd-sms). Nur service_role darf diese aufrufen.
create table if not exists wbd.sms_attempts (phone text not null, at timestamptz not null default now());
create index if not exists wbd_sms_attempts_idx on wbd.sms_attempts(phone, at);
alter table wbd.sms_attempts enable row level security;

-- Vor dem SMS-Versand: Nummer prüfen, Limits gegen Kostenmissbrauch (5 pro Nummer/Stunde, 300 insgesamt/Tag)
create or replace function public.wbd_sms_start(p_phone text)
returns jsonb language plpgsql security definer set search_path = wbd, extensions, public as $$
declare n jsonb := wbd.norm_login(p_phone); ph text;
begin
  if not n ? 'phone' then return jsonb_build_object('error','Bitte gib deine Handynummer ein.'); end if;
  ph := n->>'phone';
  if (select count(*) from wbd.sms_attempts where phone = ph and at > now() - interval '1 hour') >= 5 then
    return jsonb_build_object('error','Zu viele Codes angefordert. Bitte warte eine Stunde.');
  end if;
  if (select count(*) from wbd.sms_attempts where at > now() - interval '1 day') >= 300 then
    return jsonb_build_object('error','Heute können keine weiteren Codes verschickt werden. Bitte versuch es morgen.');
  end if;
  insert into wbd.sms_attempts(phone) values (ph);
  return jsonb_build_object('phone', ph, 'known', exists(select 1 from wbd.accounts where phone = ph and not is_bot));
end $$;

-- Nach bestätigtem Code: anmelden oder Konto anlegen
create or replace function public.wbd_sms_login(p_phone text, p_name text default null)
returns jsonb language plpgsql security definer set search_path = wbd, extensions, public as $$
declare n jsonb := wbd.norm_login(p_phone); a wbd.accounts; b wbd.accounts := wbd.bot();
  colors text[] := array['#2F5BFF','#13875B','#B5487A','#B07A12','#7A4BD1','#0E7C86','#C2412D'];
begin
  if not n ? 'phone' then return jsonb_build_object('error','Ungültige Nummer.'); end if;
  select * into a from wbd.accounts where phone = n->>'phone' and not is_bot;
  if a.id is null then
    if length(trim(coalesce(p_name,''))) < 2 then return jsonb_build_object('error','need_name'); end if;
    insert into wbd.accounts(phone, name, color)
    values (n->>'phone', left(trim(p_name), 40), colors[1 + floor(random() * array_length(colors,1))::int])
    returning * into a;
    if b.id is not null then
      insert into wbd.contacts(owner, contact) values (a.id, b.id) on conflict do nothing;
      insert into wbd.contacts(owner, contact) values (b.id, a.id) on conflict do nothing;
    end if;
  end if;
  return jsonb_build_object('token', wbd.new_session(a.id), 'account', wbd.account_json(a), 'new', a.created_at > now() - interval '5 seconds');
end $$;

-- Test-Kontakt anlegen (einmalig)
insert into wbd.accounts(email, name, color, is_bot)
select 'testkontakt@wobistdu.invalid', 'Toni (Testkontakt)', '#13875B', true
where not exists (select 1 from wbd.accounts where is_bot);

-- Rechte: alles zu, dann gezielt öffnen
revoke all on all functions in schema wbd from public, anon, authenticated;
do $$ declare f record; begin
  for f in select p.oid::regprocedure sig from pg_proc p join pg_namespace n on n.oid = p.pronamespace
           where n.nspname = 'public' and p.proname like 'wbd\_%' loop
    execute format('revoke all on function %s from public, anon, authenticated', f.sig);
    if f.sig::text not like 'wbd_sms_%' then
      execute format('grant execute on function %s to anon, authenticated', f.sig);
    else
      execute format('grant execute on function %s to service_role', f.sig);
    end if;
  end loop;
end $$;
