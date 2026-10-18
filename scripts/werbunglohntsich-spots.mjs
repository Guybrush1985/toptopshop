// Erzeugt die Demo-Spots für /werbunglohntsich/ (fiktive Marken) und das passende Seed-SQL.
// Aufruf: node scripts/werbunglohntsich-spots.mjs   (braucht ffmpeg)
// Ausgabe: src/static/werbunglohntsich/spots/*.mp4 und supabase/werbunglohntsich/seed-demo.sql
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

const FONT = process.env.SPOT_FONT || "/usr/share/fonts/opentype/inter/InterDisplay-Black.otf";
const OUT = "src/static/werbunglohntsich/spots";
mkdirSync(OUT, { recursive: true });

export const spots = [
  {
    file: "bohnenglueck.mp4", brand: "Bohnenglück", title: "Frisch geröstet", duration: 15, color: "#C2410C",
    claim: "Kaffeerösterei aus Bremen", bg: ["0x2B1408", "0x7C2D12", "0x2B1408", "0xC2410C", "0x1C0A04"],
    scenes: ["BOHNENGLÜCK", "Frisch geröstet\nin Bremen", "Seit 1998", "Nur 3 Zutaten:\nBohnen, Feuer, Geduld", "20 % Rabatt\nCode GLÜCK20"],
    questions: [
      ["Wo wird Bohnenglück geröstet?", ["Bremen", "Hamburg", "Kiel", "Lübeck"]],
      ["Seit wann gibt es Bohnenglück?", ["1998", "2008", "1989", "2018"]],
      ["Wie lautet der Rabattcode?", ["GLÜCK20", "BOHNE10", "KAFFEE20", "GLÜCK10"]],
      ["Welche Zutat wurde nicht genannt?", ["Zucker", "Feuer", "Geduld", "Bohnen"]],
      ["Wie viel Rabatt gibt es?", ["20 %", "10 %", "15 %", "25 %"]],
    ],
  },
  {
    file: "velovolt.mp4", brand: "VeloVolt", title: "120 km mit einer Ladung", duration: 30, color: "#2563EB",
    claim: "E-Bikes für die Stadt", bg: ["0x0B1640", "0x1D4ED8", "0x0B1640", "0x2563EB", "0x111827", "0x1E3A8A", "0x0B1640", "0x2563EB"],
    scenes: ["VELOVOLT", "Das E-Bike\nfür die Stadt", "120 km\nReichweite", "Akku voll\nin 3 Stunden", "Nur 19 kg\nleicht", "5 Jahre Garantie\nauf den Rahmen", "Probefahrt\nin 40 Städten", "velovolt\nfahr los"],
    questions: [
      ["Wie weit kommt das VeloVolt mit einer Akkuladung?", ["120 km", "80 km", "150 km", "100 km"]],
      ["Wie schwer ist das E-Bike?", ["19 kg", "23 kg", "15 kg", "27 kg"]],
      ["Wie lange dauert es, den Akku voll zu laden?", ["3 Stunden", "5 Stunden", "2 Stunden", "6 Stunden"]],
      ["Wie lange gilt die Garantie auf den Rahmen?", ["5 Jahre", "2 Jahre", "3 Jahre", "10 Jahre"]],
      ["In wie vielen Städten gibt es Probefahrten?", ["40", "20", "60", "12"]],
    ],
  },
  {
    file: "nordquelle.mp4", brand: "Nordquelle", title: "Prickelnd aus der Heide", duration: 15, color: "#0D9488",
    claim: "Mineralwasser", bg: ["0x042F2E", "0x0F766E", "0x064E3B", "0x0D9488", "0x042F2E"],
    scenes: ["NORDQUELLE", "Mineralwasser aus der\nLüneburger Heide", "Natriumarm", "In der Glas-\nMehrwegflasche", "Prickelnd\nfrisch"],
    questions: [
      ["Woher kommt das Wasser von Nordquelle?", ["Lüneburger Heide", "Eifel", "Harz", "Schwarzwald"]],
      ["In welcher Flasche gibt es Nordquelle?", ["Glas-Mehrweg", "PET-Einweg", "Dose", "Karton"]],
      ["Welche Eigenschaft wurde genannt?", ["Natriumarm", "Mit Koffein", "Mit Zucker", "Basisch"]],
      ["Wie heißt die Marke?", ["Nordquelle", "Nordbrunnen", "Heidequell", "Seequelle"]],
    ],
  },
  {
    file: "pfotenliebe.mp4", brand: "Pfotenliebe", title: "Futter für glückliche Hunde", duration: 30, color: "#DB2777",
    claim: "Hundefutter im Abo", bg: ["0x3B0A24", "0xBE185D", "0x500724", "0xDB2777", "0x3B0A24", "0x9D174D", "0x500724"],
    scenes: ["PFOTENLIEBE", "Futter für\nglückliche Hunde", "85 %\nFleischanteil", "Ohne\nGetreide", "Hergestellt\nin Bayern", "Lieferung alle\n4 Wochen", "Erste Box\ngratis"],
    questions: [
      ["Wie hoch ist der Fleischanteil?", ["85 %", "70 %", "60 %", "95 %"]],
      ["Wo wird Pfotenliebe hergestellt?", ["Bayern", "Sachsen", "Hessen", "Österreich"]],
      ["Wie oft wird geliefert?", ["Alle 4 Wochen", "Alle 2 Wochen", "Jede Woche", "Alle 8 Wochen"]],
      ["Was ist im Futter nicht enthalten?", ["Getreide", "Fleisch", "Wasser", "Vitamine"]],
      ["Was gibt es für die erste Box?", ["Sie ist gratis", "50 % Rabatt", "Ein Spielzeug", "Gratis-Versand"]],
    ],
  },
  {
    file: "sonnenfeld.mp4", brand: "Sonnenfeld Solar", title: "Strom vom eigenen Dach", duration: 60, color: "#CA8A04",
    claim: "Solaranlagen", bg: ["0x1C1402", "0xA16207", "0x422006", "0xCA8A04", "0x1C1402", "0x854D0E", "0x422006", "0xA16207", "0x1C1402", "0xCA8A04", "0x422006", "0x854D0E"],
    scenes: ["SONNENFELD\nSOLAR", "Strom vom\neigenen Dach", "Installation\nin 1 Tag", "Bis zu 70 %\nweniger Stromkosten", "25 Jahre\nLeistungsgarantie", "Speicher\nmit 10 kWh", "Die App zeigt\nden Ertrag live", "Über 8.000 Dächer\nin Norddeutschland", "Kostenloser\nDach-Check", "Finanzierung\nab 0 % Zins", "Made in\nEurope", "Jetzt Dach-Check\nbuchen"],
    questions: [
      ["Wie lange dauert die Installation?", ["1 Tag", "3 Tage", "1 Woche", "2 Wochen"]],
      ["Wie viel Stromkosten spart man laut Spot bis zu?", ["70 %", "50 %", "30 %", "90 %"]],
      ["Wie lange gilt die Leistungsgarantie?", ["25 Jahre", "10 Jahre", "15 Jahre", "30 Jahre"]],
      ["Wie groß ist der Speicher?", ["10 kWh", "5 kWh", "15 kWh", "20 kWh"]],
      ["Auf wie vielen Dächern ist Sonnenfeld schon?", ["Über 8.000", "Über 3.000", "Über 12.000", "Über 800"]],
    ],
  },
];

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/:/g, "\\:").replace(/'/g, "\u2019");

for (const s of spots) {
  const per = s.duration / s.scenes.length;
  const inputs = [];
  const parts = [];
  s.scenes.forEach((text, i) => {
    inputs.push("-f", "lavfi", "-t", String(per), "-i", `color=c=${s.bg[i % s.bg.length]}:s=960x540:r=25`);
    const lines = text.split("\n");
    const size = i === 0 ? 104 : 76;
    let f = `[${i}:v]`;
    const chain = lines.map((ln, li) => {
      const y = `(h-${lines.length * size * 1.15})/2+${li * size * 1.15}`;
      // Text gleitet von links herein
      return `drawtext=fontfile=${FONT}:text='${esc(ln)}':fontsize=${size}:fontcolor=white:expansion=none:x='(w-tw)/2-max(0,(0.35-t)*900)':y=${y}`;
    });
    chain.push(`drawtext=fontfile=${FONT}:text='${esc(s.brand.toUpperCase())}  ·  DEMO-SPOT':fontsize=22:fontcolor=white@0.7:x=40:y=h-56`);
    chain.push(`drawbox=x=0:y=ih-8:w=iw*${(i + 1) / s.scenes.length}:h=8:color=white@0.85:t=fill`);
    parts.push(`${f}${chain.join(",")}[v${i}]`);
  });
  const concat = s.scenes.map((_, i) => `[v${i}]`).join("") + `concat=n=${s.scenes.length}:v=1:a=0,format=yuv420p[out]`;
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", ...inputs, "-filter_complex", parts.join(";") + ";" + concat,
    "-map", "[out]", "-c:v", "libx264", "-preset", "slow", "-crf", "30", "-movflags", "+faststart", `${OUT}/${s.file}`]);
  console.log("✓", s.file);
}

// Seed-SQL (richtige Antwort steht immer an Position 0, die Plattform mischt beim Ausspielen)
const q = (t) => `'${t.replace(/'/g, "''")}'`;
let sql = "-- Demo-Spots (fiktive Marken). Erzeugt von scripts/werbunglohntsich-spots.mjs\n";
sql += "delete from wls.campaigns where is_demo;\n";
for (const s of spots) {
  sql += `with c as (insert into wls.campaigns(brand, title, claim, duration, video_url, status, is_demo, color)
  values (${q(s.brand)}, ${q(s.title)}, ${q(s.claim)}, ${s.duration}, ${q("spots/" + s.file)}, 'live', true, ${q(s.color)}) returning id)
insert into wls.questions(campaign_id, question, answers, correct) select c.id, x.q, x.a, 0 from c, (values
${s.questions.map(([qq, a]) => `  (${q(qq)}, array[${a.map(q).join(", ")}])`).join(",\n")}
) as x(q, a);\n`;
}
writeFileSync("supabase/werbunglohntsich/seed-demo.sql", sql);
console.log("✓ seed-demo.sql");
