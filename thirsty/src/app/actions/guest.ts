"use server";

import { randomInt } from "node:crypto";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { recordEvent, reliabilityOf } from "@/lib/reliability";
import { dateKey } from "@/lib/format";

const ACTIVE = ["BOOKED", "CHECKED_IN"];
const fail = (path: string, msg: string): never => redirect(`${path}?error=${encodeURIComponent(msg)}`);

async function uniqueCode() {
  for (;;) {
    const code = String(randomInt(100000, 1000000));
    if (!(await db.booking.findUnique({ where: { code } }))) return code;
  }
}

export async function bookSpot(form: FormData) {
  const spotId = String(form.get("spotId"));
  const partySize = Number(form.get("partySize") ?? 1);
  const spot = await db.spot.findUnique({ where: { id: spotId }, include: { restaurant: true } });
  if (!spot) return fail("/", "Dieses Angebot gibt es nicht mehr.");
  const back = `/r/${spot.restaurant.slug}`;
  const user = await requireUser(back);

  if (spot.status !== "OPEN" || spot.restaurant.status !== "ACTIVE") return fail(back, "Dieses Angebot ist nicht mehr buchbar.");
  if (Date.now() > spot.startsAt.getTime() - spot.bookingCutoffMin * 60_000) return fail(back, "Die Buchungsfrist ist abgelaufen.");
  if (!Number.isInteger(partySize) || partySize < 1 || partySize > spot.maxGroupSize) {
    return fail(back, `Pro Buchung sind 1 bis ${spot.maxGroupSize} Personen möglich.`);
  }

  const rel = await reliabilityOf(user.id);
  if (rel.tier === "BLOCKED") return fail(back, "Dein Konto ist wegen mehrerer No-Shows vorübergehend gesperrt.");
  if (rel.tier === "DEPOSIT") return fail(back, "Mit deinem Zuverlässigkeitswert ist eine Buchung nur mit Kaution möglich. Diese Funktion kommt bald.");

  const mine = await db.booking.findMany({
    where: { userId: user.id, status: { in: ACTIVE } },
    include: { spot: true },
  });
  if (mine.some((b) => b.spotId === spot.id)) return fail(back, "Du hast dieses Angebot schon gebucht.");
  const openOnes = mine.filter((b) => b.status === "BOOKED" && b.spot.endsAt > new Date());
  if (rel.tier === "PROBATION" && openOnes.length > 0) {
    return fail(back, "Auf Bewährung kannst du nur eine offene Buchung haben.");
  }
  if (openOnes.some((b) => dateKey(b.spot.startsAt) === dateKey(spot.startsAt))) {
    return fail(back, "Du hast an diesem Tag schon eine Buchung.");
  }
  const weekAgo = new Date(spot.startsAt.getTime() - 7 * 864e5);
  const weekAhead = new Date(spot.startsAt.getTime() + 7 * 864e5);
  if (mine.some((b) => b.spot.restaurantId === spot.restaurantId && b.spot.startsAt > weekAgo && b.spot.startsAt < weekAhead)) {
    return fail(back, "Pro Restaurant ist eine Buchung pro Woche möglich.");
  }

  const code = await uniqueCode();
  // Transaktion: Restplätze prüfen und buchen, damit nicht überbucht wird.
  const booking = await db.$transaction(async (tx) => {
    const taken = await tx.booking.aggregate({
      where: { spotId: spot.id, status: { in: ACTIVE } },
      _sum: { partySize: true },
    });
    if ((taken._sum.partySize ?? 0) + partySize > spot.seats) return null;
    return tx.booking.create({ data: { spotId: spot.id, userId: user.id, partySize, code } });
  });
  if (!booking) return fail(back, "Leider sind nicht mehr genug Plätze frei.");
  redirect(`/me/bookings/${booking.id}?new=1`);
}

export async function cancelBooking(form: FormData) {
  const user = await requireUser("/me");
  const booking = await db.booking.findUnique({ where: { id: String(form.get("bookingId")) }, include: { spot: true } });
  if (!booking || booking.userId !== user.id || booking.status !== "BOOKED") redirect("/me");
  const late = booking.spot.startsAt.getTime() - Date.now() < 2 * 3600_000;
  await db.booking.update({
    where: { id: booking.id },
    data: { status: late ? "LATE_CANCELLED" : "CANCELLED", cancelledAt: new Date() },
  });
  if (late) await recordEvent(user.id, "LATE_CANCEL", booking.id);
  revalidatePath("/me");
  redirect(`/me/bookings/${booking.id}`);
}

export async function submitReview(form: FormData) {
  const user = await requireUser("/me");
  const bookingId = String(form.get("bookingId"));
  const booking = await db.booking.findUnique({ where: { id: bookingId }, include: { review: true } });
  if (!booking || booking.userId !== user.id || booking.status !== "CHECKED_IN" || booking.review) redirect(`/me/bookings/${bookingId}`);
  const n = (k: string) => {
    const v = Number(form.get(k));
    return v >= 1 && v <= 5 ? v : null;
  };
  const rating = n("rating");
  if (!rating) fail(`/me/bookings/${bookingId}`, "Bitte vergib 1 bis 5 Sterne.");
  await db.review.create({
    data: {
      bookingId,
      rating: rating!,
      food: n("food"),
      service: n("service"),
      ambience: n("ambience"),
      asPromised: form.get("asPromised") !== "no",
      text: String(form.get("text") ?? "").trim() || null,
    },
  });
  redirect(`/me/bookings/${bookingId}`);
}

export async function updateProfile(form: FormData) {
  const user = await requireUser("/me");
  await db.user.update({
    where: { id: user.id },
    data: {
      name: String(form.get("name") ?? user.name).trim() || user.name,
      phone: String(form.get("phone") ?? "").trim() || null,
      dietaryNotes: String(form.get("dietaryNotes") ?? "").trim() || null,
    },
  });
  redirect("/me?saved=1");
}

export async function toggleFavorite(form: FormData) {
  const restaurantId = String(form.get("restaurantId"));
  const slug = String(form.get("slug"));
  const user = await requireUser(`/r/${slug}`);
  const key = { userId_restaurantId: { userId: user.id, restaurantId } };
  if (await db.favorite.findUnique({ where: key })) await db.favorite.delete({ where: key });
  else await db.favorite.create({ data: { userId: user.id, restaurantId } });
  revalidatePath(`/r/${slug}`);
}
