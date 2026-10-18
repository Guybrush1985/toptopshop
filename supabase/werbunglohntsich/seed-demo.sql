-- Demo-Spots (fiktive Marken). Erzeugt von scripts/werbunglohntsich-spots.mjs
delete from wls.campaigns where is_demo;
with c as (insert into wls.campaigns(brand, title, claim, duration, video_url, status, is_demo, color)
  values ('Bohnenglück', 'Frisch geröstet', 'Kaffeerösterei aus Bremen', 15, 'spots/bohnenglueck.mp4', 'live', true, '#C2410C') returning id)
insert into wls.questions(campaign_id, question, answers, correct) select c.id, x.q, x.a, 0 from c, (values
  ('Wo wird Bohnenglück geröstet?', array['Bremen', 'Hamburg', 'Kiel', 'Lübeck']),
  ('Seit wann gibt es Bohnenglück?', array['1998', '2008', '1989', '2018']),
  ('Wie lautet der Rabattcode?', array['GLÜCK20', 'BOHNE10', 'KAFFEE20', 'GLÜCK10']),
  ('Welche Zutat wurde nicht genannt?', array['Zucker', 'Feuer', 'Geduld', 'Bohnen']),
  ('Wie viel Rabatt gibt es?', array['20 %', '10 %', '15 %', '25 %'])
) as x(q, a);
with c as (insert into wls.campaigns(brand, title, claim, duration, video_url, status, is_demo, color)
  values ('VeloVolt', '120 km mit einer Ladung', 'E-Bikes für die Stadt', 30, 'spots/velovolt.mp4', 'live', true, '#2563EB') returning id)
insert into wls.questions(campaign_id, question, answers, correct) select c.id, x.q, x.a, 0 from c, (values
  ('Wie weit kommt das VeloVolt mit einer Akkuladung?', array['120 km', '80 km', '150 km', '100 km']),
  ('Wie schwer ist das E-Bike?', array['19 kg', '23 kg', '15 kg', '27 kg']),
  ('Wie lange dauert es, den Akku voll zu laden?', array['3 Stunden', '5 Stunden', '2 Stunden', '6 Stunden']),
  ('Wie lange gilt die Garantie auf den Rahmen?', array['5 Jahre', '2 Jahre', '3 Jahre', '10 Jahre']),
  ('In wie vielen Städten gibt es Probefahrten?', array['40', '20', '60', '12'])
) as x(q, a);
with c as (insert into wls.campaigns(brand, title, claim, duration, video_url, status, is_demo, color)
  values ('Nordquelle', 'Prickelnd aus der Heide', 'Mineralwasser', 15, 'spots/nordquelle.mp4', 'live', true, '#0D9488') returning id)
insert into wls.questions(campaign_id, question, answers, correct) select c.id, x.q, x.a, 0 from c, (values
  ('Woher kommt das Wasser von Nordquelle?', array['Lüneburger Heide', 'Eifel', 'Harz', 'Schwarzwald']),
  ('In welcher Flasche gibt es Nordquelle?', array['Glas-Mehrweg', 'PET-Einweg', 'Dose', 'Karton']),
  ('Welche Eigenschaft wurde genannt?', array['Natriumarm', 'Mit Koffein', 'Mit Zucker', 'Basisch']),
  ('Wie heißt die Marke?', array['Nordquelle', 'Nordbrunnen', 'Heidequell', 'Seequelle'])
) as x(q, a);
with c as (insert into wls.campaigns(brand, title, claim, duration, video_url, status, is_demo, color)
  values ('Pfotenliebe', 'Futter für glückliche Hunde', 'Hundefutter im Abo', 30, 'spots/pfotenliebe.mp4', 'live', true, '#DB2777') returning id)
insert into wls.questions(campaign_id, question, answers, correct) select c.id, x.q, x.a, 0 from c, (values
  ('Wie hoch ist der Fleischanteil?', array['85 %', '70 %', '60 %', '95 %']),
  ('Wo wird Pfotenliebe hergestellt?', array['Bayern', 'Sachsen', 'Hessen', 'Österreich']),
  ('Wie oft wird geliefert?', array['Alle 4 Wochen', 'Alle 2 Wochen', 'Jede Woche', 'Alle 8 Wochen']),
  ('Was ist im Futter nicht enthalten?', array['Getreide', 'Fleisch', 'Wasser', 'Vitamine']),
  ('Was gibt es für die erste Box?', array['Sie ist gratis', '50 % Rabatt', 'Ein Spielzeug', 'Gratis-Versand'])
) as x(q, a);
with c as (insert into wls.campaigns(brand, title, claim, duration, video_url, status, is_demo, color)
  values ('Sonnenfeld Solar', 'Strom vom eigenen Dach', 'Solaranlagen', 60, 'spots/sonnenfeld.mp4', 'live', true, '#CA8A04') returning id)
insert into wls.questions(campaign_id, question, answers, correct) select c.id, x.q, x.a, 0 from c, (values
  ('Wie lange dauert die Installation?', array['1 Tag', '3 Tage', '1 Woche', '2 Wochen']),
  ('Wie viel Stromkosten spart man laut Spot bis zu?', array['70 %', '50 %', '30 %', '90 %']),
  ('Wie lange gilt die Leistungsgarantie?', array['25 Jahre', '10 Jahre', '15 Jahre', '30 Jahre']),
  ('Wie groß ist der Speicher?', array['10 kWh', '5 kWh', '15 kWh', '20 kWh']),
  ('Auf wie vielen Dächern ist Sonnenfeld schon?', array['Über 8.000', 'Über 3.000', 'Über 12.000', 'Über 800'])
) as x(q, a);
