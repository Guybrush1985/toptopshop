import { requireMember } from "@/lib/auth";
import { db } from "@/lib/db";
import { cancelSpot, createSpots } from "@/app/actions/portal";
import { Field, Notice } from "@/components/ui";
import { dateKey, day, time } from "@/lib/format";

export default async function SpotsPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ error?: string; created?: string }> }) {
  const { id } = await params;
  const { error, created } = await searchParams;
  await requireMember(id, ["OWNER", "MANAGER"]);
  const spots = await db.spot.findMany({
    where: { restaurantId: id, endsAt: { gt: new Date() } },
    orderBy: { startsAt: "asc" },
    include: { bookings: { where: { status: { in: ["BOOKED", "CHECKED_IN"] } }, select: { partySize: true } } },
  });
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_24rem]">
      <section className="space-y-3">
        <h2 className="text-xl font-bold">Kommende Angebote</h2>
        <Notice success={created ? `${created} ${created === "1" ? "Angebot" : "Angebote"} ausgeschrieben.` : undefined} />
        {spots.length === 0 && <p className="card text-stone-600">Noch nichts ausgeschrieben.</p>}
        <ul className="space-y-2">
          {spots.map((s) => {
            const taken = s.bookings.reduce((n, b) => n + b.partySize, 0);
            return (
              <li key={s.id} className={`card flex flex-wrap items-center gap-3 py-3 ${s.status === "CANCELLED" ? "opacity-50" : ""}`}>
                <div className="flex-1">
                  <p className="font-semibold">{day(s.startsAt)}, {time(s.startsAt)}–{time(s.endsAt)} Uhr</p>
                  <p className="text-sm text-stone-600">−{s.discountPercent} %{s.freebie ? ` + ${s.freebie}` : ""} · max. {s.maxGroupSize} pro Buchung</p>
                </div>
                <span className="chip">{s.status === "CANCELLED" ? "Abgesagt" : `${taken}/${s.seats} gebucht`}</span>
                {s.status === "OPEN" && (
                  <form action={cancelSpot}>
                    <input type="hidden" name="spotId" value={s.id} />
                    <button className="btn-danger" title={taken ? "Gebuchte Gäste werden storniert" : undefined}>Absagen</button>
                  </form>
                )}
              </li>
            );
          })}
        </ul>
        <p className="text-xs text-stone-500">Absagen kurz vor Beginn verärgern gebuchte Gäste und senken später dein Ranking. Lieber das Kontingent knapp planen.</p>
      </section>

      <form action={createSpots} className="card h-fit space-y-3">
        <h2 className="text-lg font-bold">Neues Angebot</h2>
        <Notice error={error} />
        <input type="hidden" name="restaurantId" value={id} />
        <Field label="Datum"><input className="input" type="date" name="date" defaultValue={dateKey(new Date())} required /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Von"><input className="input" type="time" name="start" defaultValue="17:30" required /></Field>
          <Field label="Bis" hint="Bis dahin gilt der Rabatt."><input className="input" type="time" name="end" defaultValue="19:00" required /></Field>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Plätze"><input className="input" type="number" name="seats" min={1} max={100} defaultValue={8} required /></Field>
          <Field label="Max. pro Buchung"><input className="input" type="number" name="maxGroupSize" min={1} max={8} defaultValue={4} /></Field>
        </div>
        <Field label="Rabatt">
          <select className="input" name="discountPercent" defaultValue={50}>
            {[50, 40, 30, 25, 20, 0].map((d) => <option key={d} value={d}>{d ? `${d} % auf die ganze Karte` : "kein Rabatt"}</option>)}
          </select>
        </Field>
        <Field label="Gratis dazu"><input className="input" name="freebie" defaultValue="1 Getränk pro Person" /></Field>
        <Field label="Bedingungen" hint="z. B. ein Hauptgericht pro Person, Spirituosen ausgenommen"><input className="input" name="conditions" /></Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Wiederholen" hint="Gleicher Wochentag">
            <select className="input" name="repeatWeeks" defaultValue={1}>
              {[1, 2, 4, 8, 12].map((w) => <option key={w} value={w}>{w === 1 ? "einmalig" : `${w} Wochen`}</option>)}
            </select>
          </Field>
          <Field label="Buchbar bis" hint="Minuten vor Beginn"><input className="input" type="number" name="bookingCutoffMin" min={0} defaultValue={30} /></Field>
        </div>
        <button className="btn w-full">Ausschreiben</button>
      </form>
    </div>
  );
}
