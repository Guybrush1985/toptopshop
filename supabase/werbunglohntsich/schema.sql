-- Werbung lohnt sich (toptop.shop/werbunglohntsich)
-- Eigenes Schema "wls" im Supabase-Projekt Firsty.app. Das Schema ist nicht über die API freigegeben;
-- der Browser erreicht die Daten nur über die Funktionen public.wls_* (security definer).
-- Eigene Konten (nicht Supabase Auth), damit sich die Plattform keine Nutzer mit Firsty teilt.
-- Admins stehen in wls.admins (E-Mail), werden direkt in der Datenbank gepflegt.

create schema if not exists wls;
revoke all on schema wls from public, anon, authenticated;

create table if not exists wls.admins (email text primary key);

create table if not exists wls.accounts (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  pw_hash text not null,
  role text not null check (role in ('viewer','advertiser')),
  name text not null,
  company text,
  points int not null default 0 check (points >= 0),
  demo_points int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists wls.sessions (
  token_hash text primary key,
  account_id uuid not null references wls.accounts(id) on delete cascade,
  expires_at timestamptz not null default now() + interval '30 days'
);

create table if not exists wls.login_attempts (
  email text not null,
  at timestamptz not null default now()
);
create index if not exists login_attempts_email on wls.login_attempts(email, at);

create table if not exists wls.campaigns (
  id uuid primary key default gen_random_uuid(),
  advertiser_id uuid references wls.accounts(id) on delete cascade,
  brand text not null,
  title text not null,
  claim text,
  duration int not null check (duration in (15,30,60)),
  video_url text,
  status text not null default 'draft' check (status in ('draft','review','live','paused','done','rejected')),
  budget_cents int not null default 0 check (budget_cents >= 0),
  spent_cents int not null default 0,
  is_demo boolean not null default false,
  color text default '#FF4D2E',
  note text,
  created_at timestamptz not null default now()
);

create table if not exists wls.questions (
  id bigint generated always as identity primary key,
  campaign_id uuid not null references wls.campaigns(id) on delete cascade,
  question text not null,
  answers text[] not null check (array_length(answers,1) between 3 and 4),
  correct int not null check (correct >= 0)
);

create table if not exists wls.views (
  id uuid primary key default gen_random_uuid(),
  campaign_id uuid not null references wls.campaigns(id) on delete cascade,
  account_id uuid not null references wls.accounts(id) on delete cascade,
  started_at timestamptz not null default now(),
  quiz_at timestamptz,
  question_ids bigint[],
  orders jsonb,            -- je Frage die gemischte Reihenfolge der Antworten
  answers int[],
  finished_at timestamptz,
  correct_count int,
  verified boolean not null default false,
  points int not null default 0,
  price_cents int not null default 0
);
create index if not exists views_account on wls.views(account_id, started_at);
create index if not exists views_campaign on wls.views(campaign_id);

create table if not exists wls.ledger (
  id bigint generated always as identity primary key,
  account_id uuid not null references wls.accounts(id) on delete cascade,
  delta int not null,
  demo boolean not null default false,
  reason text not null,
  created_at timestamptz not null default now()
);

create table if not exists wls.payouts (
  id bigint generated always as identity primary key,
  account_id uuid not null references wls.accounts(id) on delete cascade,
  points int not null check (points > 0),
  kind text not null,
  status text not null default 'offen' check (status in ('offen','erledigt','abgelehnt')),
  created_at timestamptz not null default now()
);

alter table wls.admins enable row level security;
alter table wls.accounts enable row level security;
alter table wls.sessions enable row level security;
alter table wls.login_attempts enable row level security;
alter table wls.campaigns enable row level security;
alter table wls.questions enable row level security;
alter table wls.views enable row level security;
alter table wls.ledger enable row level security;
alter table wls.payouts enable row level security;

-- Preise und Belohnung pro verifiziertem View (Business Case): 1 Punkt = 0,1 Cent
create or replace function wls.price_cents(d int) returns int language sql immutable as
$$ select case d when 15 then 6 when 30 then 10 else 18 end $$;
create or replace function wls.reward_points(d int) returns int language sql immutable as
$$ select case d when 15 then 25 when 30 then 40 else 70 end $$;

create or replace function wls.daily_limit() returns int language sql immutable as $$ select 20 $$;
create or replace function wls.payout_min() returns int language sql immutable as $$ select 5000 $$;

-- Sitzung prüfen
create or replace function wls.auth(p_token text) returns wls.accounts
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts;
begin
  select acc.* into a from wls.sessions s join wls.accounts acc on acc.id = s.account_id
   where s.token_hash = encode(digest(coalesce(p_token,''), 'sha256'), 'hex') and s.expires_at > now();
  if a.id is null then raise exception 'Bitte melde dich erneut an.' using errcode = '28000'; end if;
  return a;
end $$;

create or replace function wls.is_admin(a wls.accounts) returns boolean language sql stable
security definer set search_path = wls as $$ select exists(select 1 from wls.admins where email = a.email) $$;

create or replace function wls.new_session(p_account uuid) returns text
language plpgsql security definer set search_path = wls, extensions, public as $$
declare t text := encode(gen_random_bytes(32), 'hex');
begin
  delete from wls.sessions where expires_at < now();
  insert into wls.sessions(token_hash, account_id) values (encode(digest(t,'sha256'),'hex'), p_account);
  return t;
end $$;

create or replace function wls.account_json(a wls.accounts) returns jsonb language sql stable
security definer set search_path = wls as $$
  select jsonb_build_object('id', a.id, 'email', a.email, 'role', a.role, 'name', a.name, 'company', a.company,
    'points', a.points, 'demo_points', a.demo_points, 'admin', wls.is_admin(a),
    'payout_min', wls.payout_min(), 'daily_limit', wls.daily_limit(),
    'today', (select count(*) from wls.views v where v.account_id = a.id and v.quiz_at is not null and v.started_at > date_trunc('day', now() at time zone 'Europe/Berlin') at time zone 'Europe/Berlin'))
$$;

-- ---------- Konten ----------
create or replace function public.wls_register(p_email text, p_password text, p_name text, p_role text, p_company text default null, p_adult boolean default false)
returns jsonb language plpgsql security definer set search_path = wls, extensions, public as $$
declare e text := lower(trim(p_email)); a wls.accounts;
begin
  if e !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then raise exception 'Bitte gib eine gültige E-Mail-Adresse ein.'; end if;
  if length(coalesce(p_password,'')) < 8 then raise exception 'Das Passwort braucht mindestens 8 Zeichen.'; end if;
  if length(trim(coalesce(p_name,''))) < 2 then raise exception 'Bitte gib deinen Namen ein.'; end if;
  if p_role not in ('viewer','advertiser') then raise exception 'Unbekannte Kontoart.'; end if;
  if p_role = 'viewer' and not coalesce(p_adult,false) then raise exception 'Mitmachen ist ab 18 Jahren möglich.'; end if;
  if p_role = 'advertiser' and length(trim(coalesce(p_company,''))) < 2 then raise exception 'Bitte gib den Firmennamen ein.'; end if;
  if exists(select 1 from wls.accounts where email = e) then raise exception 'Zu dieser E-Mail gibt es schon ein Konto.'; end if;
  insert into wls.accounts(email, pw_hash, role, name, company)
    values (e, crypt(p_password, gen_salt('bf', 10)), p_role, trim(p_name), nullif(trim(coalesce(p_company,'')),''))
    returning * into a;
  if p_role = 'viewer' then
    update wls.accounts set demo_points = 100 where id = a.id returning * into a;
    insert into wls.ledger(account_id, delta, demo, reason) values (a.id, 100, true, 'Willkommensbonus (Demo)');
  end if;
  return jsonb_build_object('token', wls.new_session(a.id), 'account', wls.account_json(a));
end $$;

-- Hilfsfunktionen für die Anmeldung. Falsche Anmeldungen geben {error} zurück statt einer Exception,
-- damit der Fehlversuch gespeichert bleibt (Sperre nach 8 Versuchen in 15 Minuten).
create or replace function wls.pw_ok(h text, pw text) returns boolean language sql stable
set search_path = wls, extensions, public as $$ select h is not null and h = crypt(pw, h) $$;
create or replace function wls.too_many(e text) returns boolean language sql stable as
$$ select (select count(*) from wls.login_attempts where email = e and at > now() - interval '15 minutes') >= 8 $$;
create or replace function wls.note_fail(e text) returns void language sql as
$$ insert into wls.login_attempts(email) values (e) $$;
create or replace function wls.clear_fail(e text) returns void language sql as
$$ delete from wls.login_attempts where email = e $$;

create or replace function public.wls_login(p_email text, p_password text)
returns jsonb language plpgsql security definer set search_path = wls, extensions, public as $$
declare e text := lower(trim(p_email)); a wls.accounts;
begin
  if wls.too_many(e) then return jsonb_build_object('error', 'Zu viele Versuche. Bitte warte 15 Minuten.'); end if;
  select * into a from wls.accounts where email = e;
  if not wls.pw_ok(a.pw_hash, p_password) then
    perform wls.note_fail(e);
    return jsonb_build_object('error', 'Anmeldung fehlgeschlagen. Bitte E-Mail und Kennwort pruefen.');
  end if;
  perform wls.clear_fail(e);
  return jsonb_build_object('token', wls.new_session(a.id), 'account', wls.account_json(a));
end $$;

create or replace function public.wls_logout(p_token text) returns void
language sql security definer set search_path = wls, extensions, public as $$
  delete from wls.sessions where token_hash = encode(digest(coalesce(p_token,''),'sha256'),'hex')
$$;

create or replace function public.wls_me(p_token text) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
begin return wls.account_json(wls.auth(p_token)); end $$;

-- ---------- Zuschauer ----------
create or replace function public.wls_feed(p_token text) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token);
begin
  return coalesce((select jsonb_agg(x order by x->>'demo', x->>'created_at' desc) from (
    select jsonb_build_object('id', c.id, 'brand', c.brand, 'title', c.title, 'claim', c.claim, 'duration', c.duration,
      'points', wls.reward_points(c.duration), 'demo', c.is_demo, 'color', c.color, 'video_url', c.video_url, 'created_at', c.created_at) x
    from wls.campaigns c
    where c.status = 'live' and c.video_url is not null
      and (c.is_demo or c.budget_cents - c.spent_cents >= wls.price_cents(c.duration))
      and (select count(*) from wls.questions q where q.campaign_id = c.id) >= 3
      and not exists (select 1 from wls.views v where v.campaign_id = c.id and v.account_id = a.id
                      and (v.verified or (v.quiz_at is not null and v.started_at > now() - interval '24 hours')))
  ) s), '[]'::jsonb);
end $$;

create or replace function public.wls_start_view(p_token text, p_campaign uuid) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token); c wls.campaigns; v uuid;
begin
  if a.role <> 'viewer' then raise exception 'Spots schauen geht mit einem Zuschauer-Konto.'; end if;
  if (wls.account_json(a)->>'today')::int >= wls.daily_limit() then
    raise exception 'Tageslimit erreicht. Morgen gibt es neue Spots.';
  end if;
  select * into c from wls.campaigns where id = p_campaign and status = 'live';
  if c.id is null then raise exception 'Dieser Spot ist nicht mehr verfügbar.'; end if;
  if exists (select 1 from wls.views where campaign_id = c.id and account_id = a.id
             and (verified or (quiz_at is not null and started_at > now() - interval '24 hours'))) then
    raise exception 'Diesen Spot hast du schon geschaut.';
  end if;
  if not c.is_demo and c.budget_cents - c.spent_cents < wls.price_cents(c.duration) then
    raise exception 'Das Budget dieser Kampagne ist aufgebraucht.';
  end if;
  insert into wls.views(campaign_id, account_id) values (c.id, a.id) returning id into v;
  return jsonb_build_object('view', v, 'video_url', c.video_url, 'duration', c.duration, 'brand', c.brand,
    'title', c.title, 'points', wls.reward_points(c.duration), 'demo', c.is_demo, 'color', c.color);
end $$;

create or replace function public.wls_view_quiz(p_token text, p_view uuid) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token); v wls.views; c wls.campaigns; ids bigint[]; ord jsonb := '[]'; q record; res jsonb := '[]'; o int[];
begin
  select * into v from wls.views where id = p_view and account_id = a.id;
  if v.id is null or v.finished_at is not null then raise exception 'Dieser View ist abgeschlossen.'; end if;
  select * into c from wls.campaigns where id = v.campaign_id;
  if now() < v.started_at + make_interval(secs => c.duration - 1) then
    raise exception 'Bitte schau den Spot bis zum Ende.';
  end if;
  if v.quiz_at is null then
    select array_agg(id order by id) into ids from (select id from wls.questions where campaign_id = c.id order by random() limit 3) s;
    for q in select * from wls.questions where id = any(ids) order by id loop
      select array_agg(i order by random()) into o from generate_series(0, array_length(q.answers,1)-1) i;
      ord := ord || jsonb_build_array(to_jsonb(o));
    end loop;
    update wls.views set quiz_at = now(), question_ids = ids, orders = ord where id = v.id returning * into v;
  end if;
  for i in 1..array_length(v.question_ids,1) loop
    select * into q from wls.questions where id = v.question_ids[i];
    res := res || jsonb_build_array(jsonb_build_object('question', q.question,
      'answers', (select jsonb_agg(q.answers[(x::int)+1] order by n) from jsonb_array_elements_text(v.orders->(i-1)) with ordinality t(x, n))));
  end loop;
  return jsonb_build_object('questions', res);
end $$;

create or replace function public.wls_submit_view(p_token text, p_view uuid, p_answers int[]) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token); v wls.views; c wls.campaigns; q wls.questions; ok int := 0; pts int := 0; price int := 0;
begin
  select * into v from wls.views where id = p_view and account_id = a.id for update;
  if v.id is null or v.quiz_at is null then raise exception 'Kein offenes Quiz.'; end if;
  if v.finished_at is not null then raise exception 'Schon beantwortet.'; end if;
  if coalesce(array_length(p_answers,1),0) <> array_length(v.question_ids,1) then raise exception 'Bitte beantworte alle Fragen.'; end if;
  select * into c from wls.campaigns where id = v.campaign_id for update;
  for i in 1..array_length(v.question_ids,1) loop
    select * into q from wls.questions where id = v.question_ids[i];
    -- gewählte Position -> ursprünglicher Antwortindex
    if p_answers[i] between 0 and jsonb_array_length(v.orders->(i-1)) - 1
       and ((v.orders->(i-1))->>p_answers[i])::int = q.correct then ok := ok + 1; end if;
  end loop;
  -- Zeitlimit fürs Quiz: 3 Minuten
  if ok = 3 and now() <= v.quiz_at + interval '3 minutes' then
    pts := wls.reward_points(c.duration);
    if c.is_demo then
      update wls.accounts set demo_points = demo_points + pts where id = a.id;
    else
      price := wls.price_cents(c.duration);
      update wls.accounts set points = points + pts where id = a.id;
      update wls.campaigns set spent_cents = spent_cents + price,
        status = case when budget_cents - (spent_cents + price) < wls.price_cents(duration) then 'done' else status end
        where id = c.id;
    end if;
    insert into wls.ledger(account_id, delta, demo, reason) values (a.id, pts, c.is_demo, c.brand || ': ' || c.title);
  end if;
  update wls.views set finished_at = now(), answers = p_answers, correct_count = ok, verified = (pts > 0),
    points = pts, price_cents = price where id = v.id;
  select * into a from wls.accounts where id = a.id;
  return jsonb_build_object('correct', ok, 'verified', pts > 0, 'points', pts, 'demo', c.is_demo, 'account', wls.account_json(a));
end $$;

create or replace function public.wls_wallet(p_token text) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token);
begin
  return jsonb_build_object(
    'account', wls.account_json(a),
    'ledger', coalesce((select jsonb_agg(jsonb_build_object('delta', delta, 'demo', demo, 'reason', reason, 'at', created_at) order by created_at desc)
                 from (select * from wls.ledger where account_id = a.id order by created_at desc limit 50) l), '[]'),
    'payouts', coalesce((select jsonb_agg(jsonb_build_object('points', points, 'kind', kind, 'status', status, 'at', created_at) order by created_at desc)
                 from wls.payouts where account_id = a.id), '[]'),
    'stats', (select jsonb_build_object('views', count(*), 'verified', count(*) filter (where verified))
                from wls.views where account_id = a.id and finished_at is not null));
end $$;

create or replace function public.wls_request_payout(p_token text, p_kind text) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token);
begin
  if p_kind not in ('Amazon-Gutschein','Lieferando-Gutschein','Tank-Gutschein','Spende an Ärzte ohne Grenzen') then
    raise exception 'Unbekannte Auszahlungsart.';
  end if;
  if a.points < wls.payout_min() then raise exception 'Einlösen geht ab 5.000 Punkten (5 €).'; end if;
  insert into wls.payouts(account_id, points, kind) values (a.id, a.points, p_kind);
  insert into wls.ledger(account_id, delta, reason) values (a.id, -a.points, 'Eingelöst: ' || p_kind);
  update wls.accounts set points = 0 where id = a.id returning * into a;
  return wls.account_json(a);
end $$;

-- ---------- Werbetreibende ----------
create or replace function wls.campaign_json(c wls.campaigns, with_questions boolean) returns jsonb language sql stable
security definer set search_path = wls as $$
  select jsonb_build_object('id', c.id, 'brand', c.brand, 'title', c.title, 'claim', c.claim, 'duration', c.duration,
    'video_url', c.video_url, 'status', c.status, 'budget_cents', c.budget_cents, 'spent_cents', c.spent_cents,
    'price_cents', wls.price_cents(c.duration), 'color', c.color, 'note', c.note, 'demo', c.is_demo, 'created_at', c.created_at,
    'stats', (select jsonb_build_object('started', count(*), 'quiz', count(*) filter (where quiz_at is not null),
                 'finished', count(*) filter (where finished_at is not null), 'verified', count(*) filter (where verified))
              from wls.views where campaign_id = c.id),
    'questions', case when with_questions then coalesce((select jsonb_agg(jsonb_build_object('id', q.id, 'question', q.question,
        'answers', q.answers, 'correct', q.correct,
        'asked', (select count(*) from wls.views v where v.campaign_id = c.id and v.finished_at is not null and q.id = any(v.question_ids)),
        'right', (select count(*) from wls.views v, generate_subscripts(v.question_ids,1) i
                  where v.campaign_id = c.id and v.finished_at is not null and v.question_ids[i] = q.id
                    and ((v.orders->(i-1))->>v.answers[i])::int = q.correct)
      ) order by q.id) from wls.questions q where q.campaign_id = c.id), '[]') else null end)
$$;

create or replace function public.wls_my_campaigns(p_token text) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token);
begin
  if a.role <> 'advertiser' then raise exception 'Nur für Werbetreibende.'; end if;
  return coalesce((select jsonb_agg(wls.campaign_json(c, true) order by c.created_at desc) from wls.campaigns c where c.advertiser_id = a.id), '[]');
end $$;

create or replace function wls.check_campaign(p jsonb) returns void language plpgsql as $$
begin
  if length(trim(coalesce(p->>'title',''))) < 2 then raise exception 'Bitte gib einen Titel ein.'; end if;
  if (p->>'duration')::int not in (15,30,60) then raise exception 'Spotlänge 15, 30 oder 60 Sekunden.'; end if;
  if coalesce((p->>'budget_cents')::int,0) < 5000 then raise exception 'Mindestbudget sind 50 €.'; end if;
  if coalesce(p->>'video_url','') <> '' and left(p->>'video_url', 8) <> 'https:' || chr(47) || chr(47) then raise exception 'Die Video-Adresse muss sicher (https) sein.'; end if;
end $$;

create or replace function wls.save_questions(cid uuid, qs jsonb) returns void language plpgsql as $$
declare q jsonb; n int;
begin
  delete from wls.questions where campaign_id = cid;
  for q in select * from jsonb_array_elements(coalesce(qs,'[]')) loop
    if length(trim(coalesce(q->>'question',''))) = 0 then continue; end if;
    n := jsonb_array_length(q->'answers');
    if n not between 3 and 4 then raise exception 'Jede Frage braucht 3 oder 4 Antworten.'; end if;
    if (q->>'correct')::int not between 0 and n-1 then raise exception 'Bitte markiere die richtige Antwort.'; end if;
    insert into wls.questions(campaign_id, question, answers, correct)
      values (cid, trim(q->>'question'), array(select trim(x) from jsonb_array_elements_text(q->'answers') x), (q->>'correct')::int);
  end loop;
end $$;

-- p: {id?, title, claim, duration, video_url, budget_cents, color, questions:[{question, answers[], correct}], submit:bool}
create or replace function public.wls_save_campaign(p_token text, p jsonb) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token); c wls.campaigns;
begin
  if a.role <> 'advertiser' then raise exception 'Nur für Werbetreibende.'; end if;
  perform wls.check_campaign(p);
  if coalesce(p->>'id','') <> '' then
    select * into c from wls.campaigns where id = (p->>'id')::uuid and advertiser_id = a.id for update;
    if c.id is null then raise exception 'Kampagne nicht gefunden.'; end if;
    if c.status not in ('draft','rejected','paused') then raise exception 'Kampagnen in Prüfung oder live kannst du nicht ändern. Pausiere sie zuerst.'; end if;
    update wls.campaigns set brand = coalesce(a.company, a.name), title = trim(p->>'title'), claim = nullif(trim(coalesce(p->>'claim','')),''),
      duration = (p->>'duration')::int, video_url = nullif(p->>'video_url',''), budget_cents = greatest((p->>'budget_cents')::int, spent_cents),
      color = coalesce(nullif(p->>'color',''), color), status = 'draft', note = null
      where id = c.id returning * into c;
  else
    insert into wls.campaigns(advertiser_id, brand, title, claim, duration, video_url, budget_cents, color)
      values (a.id, coalesce(a.company, a.name), trim(p->>'title'), nullif(trim(coalesce(p->>'claim','')),''), (p->>'duration')::int,
              nullif(p->>'video_url',''), (p->>'budget_cents')::int, coalesce(nullif(p->>'color',''), '#FF4D2E'))
      returning * into c;
  end if;
  perform wls.save_questions(c.id, p->'questions');
  if coalesce((p->>'submit')::boolean, false) then
    if c.video_url is null then raise exception 'Bitte lade zuerst den Spot hoch.'; end if;
    if (select count(*) from wls.questions where campaign_id = c.id) < 3 then raise exception 'Mindestens 3 Fragen, besser 5 bis 10.'; end if;
    update wls.campaigns set status = 'review' where id = c.id returning * into c;
  end if;
  return wls.campaign_json(c, true);
end $$;

create or replace function public.wls_pause_campaign(p_token text, p_id uuid, p_pause boolean) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token); c wls.campaigns;
begin
  select * into c from wls.campaigns where id = p_id and advertiser_id = a.id for update;
  if c.id is null then raise exception 'Kampagne nicht gefunden.'; end if;
  if p_pause and c.status = 'live' then update wls.campaigns set status = 'paused' where id = c.id returning * into c;
  elsif not p_pause and c.status = 'paused' then update wls.campaigns set status = 'review' where id = c.id returning * into c;
  else raise exception 'Das geht in diesem Status nicht.'; end if;
  return wls.campaign_json(c, true);
end $$;

-- Für die Edge Function wls-upload (nur mit Service-Rolle aufrufbar)
create or replace function public.wls_upload_account(p_token text) returns uuid
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token);
begin
  if a.role <> 'advertiser' then raise exception 'Nur für Werbetreibende.'; end if;
  return a.id;
end $$;

-- ---------- Admin ----------
create or replace function public.wls_admin(p_token text) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token);
begin
  if not wls.is_admin(a) then raise exception 'Kein Zugriff.'; end if;
  return jsonb_build_object(
    'totals', (select jsonb_build_object(
        'viewers', (select count(*) from wls.accounts where role='viewer'),
        'advertisers', (select count(*) from wls.accounts where role='advertiser'),
        'views', (select count(*) from wls.views where finished_at is not null),
        'verified', (select count(*) from wls.views where verified),
        'revenue_cents', (select coalesce(sum(price_cents),0) from wls.views),
        'points_open', (select coalesce(sum(points),0) from wls.accounts))),
    'campaigns', coalesce((select jsonb_agg(wls.campaign_json(c, true) || jsonb_build_object('company', c.brand,
        'contact', (select email from wls.accounts where id = c.advertiser_id)) order by (c.status='review') desc, c.created_at desc)
        from wls.campaigns c where not c.is_demo), '[]'),
    'payouts', coalesce((select jsonb_agg(jsonb_build_object('id', p.id, 'points', p.points, 'kind', p.kind, 'status', p.status,
        'at', p.created_at, 'email', acc.email, 'name', acc.name) order by (p.status='offen') desc, p.created_at desc)
        from wls.payouts p join wls.accounts acc on acc.id = p.account_id), '[]'));
end $$;

create or replace function public.wls_admin_campaign(p_token text, p_id uuid, p_status text, p_note text default null) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token);
begin
  if not wls.is_admin(a) then raise exception 'Kein Zugriff.'; end if;
  if p_status not in ('live','rejected','paused') then raise exception 'Unbekannter Status.'; end if;
  update wls.campaigns set status = p_status, note = p_note where id = p_id and not is_demo;
  return public.wls_admin(p_token);
end $$;

create or replace function public.wls_admin_payout(p_token text, p_id bigint, p_status text) returns jsonb
language plpgsql security definer set search_path = wls, extensions, public as $$
declare a wls.accounts := wls.auth(p_token); p wls.payouts;
begin
  if not wls.is_admin(a) then raise exception 'Kein Zugriff.'; end if;
  select * into p from wls.payouts where id = p_id and status = 'offen' for update;
  if p.id is null then raise exception 'Auszahlung nicht offen.'; end if;
  if p_status = 'abgelehnt' then
    update wls.accounts set points = points + p.points where id = p.account_id;
    insert into wls.ledger(account_id, delta, reason) values (p.account_id, p.points, 'Einlösung abgelehnt, Punkte zurück');
  elsif p_status <> 'erledigt' then raise exception 'Unbekannter Status.'; end if;
  update wls.payouts set status = p_status where id = p.id;
  return public.wls_admin(p_token);
end $$;

-- Öffentliche Zahlen für die Startseite
create or replace function public.wls_public_stats() returns jsonb
language sql security definer set search_path = wls as $$
  select jsonb_build_object('spots', (select count(*) from wls.campaigns where status='live'),
    'viewers', (select count(*) from wls.accounts where role='viewer'),
    'verified', (select count(*) from wls.views where verified))
$$;

-- Rechte: alles zu, dann gezielt öffnen
revoke all on all functions in schema wls from public, anon, authenticated;
do $$ declare f record; begin
  for f in select p.oid::regprocedure sig, p.proname from pg_proc p join pg_namespace n on n.oid = p.pronamespace
           where n.nspname = 'public' and p.proname like 'wls\_%' loop
    execute format('revoke all on function %s from public, anon, authenticated', f.sig);
    if f.proname <> 'wls_upload_account' then
      execute format('grant execute on function %s to anon, authenticated', f.sig);
    end if;
  end loop;
end $$;

-- Öffentlicher Bucket für hochgeladene Spots (Upload nur über die Edge Function wls-upload)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('wls-spots', 'wls-spots', true, 52428800, array['video/mp4','video/webm','video/quicktime'])
on conflict (id) do nothing;
