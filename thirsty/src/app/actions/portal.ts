"use server";

import { mkdir, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { randomBytes } from "node:crypto";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";
import { requireMember, requireUser } from "@/lib/auth";
import { recordEvent } from "@/lib/reliability";
import { berlinDate, slugify } from "@/lib/format";

const str = (f: FormData, k: string) => {
  const v = String(f.get(k) ?? "").trim();
  return v || null;
};
const int = (f: FormData, k: string, d = 0) => {
  const v = Number(f.get(k));
  return Number.isFinite(v) ? Math.round(v) : d;
};
const fail = (p: string, msg: string): never => redirect(`${p}?error=${encodeURIComponent(msg)}`);

async function uniqueSlug(name: string, ignoreId?: string) {
  const base = slugify(name) || "restaurant";
  for (let i = 0; ; i++) {
    const slug = i ? `${base}-${i + 1}` : base;
    const hit = await db.restaurant.findUnique({ where: { slug } });
    if (!hit || hit.id === ignoreId) return slug;
  }
}

async function geocode(street: string | null, postalCode: string | null, city: string | null) {
  const q = [street, postalCode, city].filter(Boolean).join(", ");
  if (!q) return null;
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(q)}`, {
      headers: { "User-Agent": "Thirsty/0.1 (Restaurant-Portal)" },
      signal: AbortSignal.timeout(4000),
    });
    const [hit] = (await res.json()) as { lat: string; lon: string }[];
    return hit ? { lat: Number(hit.lat), lng: Number(hit.lon) } : null;
  } catch {
    return null;
  }
}

export async function createRestaurant(form: FormData) {
  const user = await requireUser("/portal/new");
  const name = str(form, "name");
  if (!name) fail("/portal/new", "Bitte gib den Namen des Restaurants an.");
  const restaurant = await db.restaurant.create({
    data: {
      name: name!,
      slug: await uniqueSlug(name!),
      city: str(form, "city"),
      members: { create: { userId: user.id, role: "OWNER" } },
    },
  });
  if (user.role !== "OWNER") await db.user.update({ where: { id: user.id }, data: { role: "OWNER" } });
  redirect(`/portal/${restaurant.id}/profil`);
}

export async function updateRestaurant(form: FormData) {
  const id = String(form.get("restaurantId"));
  await requireMember(id, ["OWNER", "MANAGER"]);
  const name = str(form, "name");
  if (!name) fail(`/portal/${id}/profil`, "Der Name darf nicht leer sein.");
  const street = str(form, "street"), postalCode = str(form, "postalCode"), city = str(form, "city");
  let lat = form.get("lat") ? Number(form.get("lat")) : null;
  let lng = form.get("lng") ? Number(form.get("lng")) : null;
  const before = await db.restaurant.findUniqueOrThrow({ where: { id } });
  const addressChanged = street !== before.street || postalCode !== before.postalCode || city !== before.city;
  if ((lat == null || lng == null || (addressChanged && lat === before.lat && lng === before.lng)) && (street || city)) {
    const geo = await geocode(street, postalCode, city);
    if (geo) ({ lat, lng } = geo);
  }
  await db.restaurant.update({
    where: { id },
    data: {
      name: name!,
      slug: name === before.name ? before.slug : await uniqueSlug(name!, id),
      tagline: str(form, "tagline"),
      description: str(form, "description"),
      cuisine: str(form, "cuisine"),
      priceLevel: Math.min(4, Math.max(1, int(form, "priceLevel", 2))),
      street, postalCode, city, lat, lng,
      directions: str(form, "directions"),
      phone: str(form, "phone"),
      email: str(form, "email"),
      website: str(form, "website"),
      instagram: str(form, "instagram"),
      seatsInside: Math.max(0, int(form, "seatsInside")),
      seatsOutside: Math.max(0, int(form, "seatsOutside")),
      features: form.getAll("features").map(String).join(","),
      legalName: str(form, "legalName"),
      vatId: str(form, "vatId"),
    },
  });
  revalidatePath(`/portal/${id}`);
  redirect(`/portal/${id}/profil?saved=1`);
}

export async function setOpeningHours(form: FormData) {
  const id = String(form.get("restaurantId"));
  await requireMember(id, ["OWNER", "MANAGER"]);
  const rows = [];
  for (let d = 0; d < 7; d++) {
    for (const slot of [0, 1]) {
      const opens = str(form, `opens-${d}-${slot}`);
      const closes = str(form, `closes-${d}-${slot}`);
      if (opens && closes) rows.push({ restaurantId: id, weekday: d, opens, closes });
    }
  }
  await db.$transaction([
    db.openingHours.deleteMany({ where: { restaurantId: id } }),
    db.openingHours.createMany({ data: rows }),
  ]);
  redirect(`/portal/${id}/profil?saved=1#oeffnungszeiten`);
}

export async function setStatus(form: FormData) {
  const id = String(form.get("restaurantId"));
  await requireMember(id, ["OWNER", "MANAGER"]);
  const status = String(form.get("status"));
  if (!["DRAFT", "ACTIVE", "PAUSED"].includes(status)) redirect(`/portal/${id}`);
  if (status === "ACTIVE") {
    const r = await db.restaurant.findUniqueOrThrow({ where: { id }, include: { photos: true } });
    if (!r.street || !r.city || !r.description) fail(`/portal/${id}`, "Zum Veröffentlichen brauchst du mindestens Adresse und Beschreibung.");
  }
  await db.restaurant.update({ where: { id }, data: { status } });
  redirect(`/portal/${id}`);
}

const UPLOAD_ROOT = path.join(process.cwd(), "uploads");
const TYPES: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp" };

export async function uploadPhoto(form: FormData) {
  const id = String(form.get("restaurantId"));
  await requireMember(id, ["OWNER", "MANAGER"]);
  const kind = String(form.get("kind") ?? "GALLERY");
  const back = `/portal/${id}/medien`;
  const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
  if (!files.length) fail(back, "Bitte wähle mindestens ein Bild aus.");
  await mkdir(path.join(UPLOAD_ROOT, id), { recursive: true });
  let position = await db.photo.count({ where: { restaurantId: id } });
  for (const file of files) {
    const ext = TYPES[file.type];
    if (!ext) fail(back, "Erlaubt sind JPG, PNG und WebP.");
    if (file.size > 5 * 1024 * 1024) fail(back, "Ein Bild darf höchstens 5 MB groß sein.");
    const name = `${randomBytes(8).toString("hex")}.${ext}`;
    await writeFile(path.join(UPLOAD_ROOT, id, name), Buffer.from(await file.arrayBuffer()));
    if (kind === "LOGO" || kind === "COVER") {
      await db.photo.deleteMany({ where: { restaurantId: id, kind } });
    }
    await db.photo.create({ data: { restaurantId: id, url: `/uploads/${id}/${name}`, kind, position: position++ } });
  }
  redirect(back);
}

export async function deletePhoto(form: FormData) {
  const photo = await db.photo.findUnique({ where: { id: String(form.get("photoId")) } });
  if (!photo) redirect("/portal");
  await requireMember(photo.restaurantId, ["OWNER", "MANAGER"]);
  await db.photo.delete({ where: { id: photo.id } });
  await unlink(path.join(process.cwd(), photo.url.slice(1))).catch(() => {});
  redirect(`/portal/${photo.restaurantId}/medien`);
}

export async function addMenuItem(form: FormData) {
  const id = String(form.get("restaurantId"));
  await requireMember(id, ["OWNER", "MANAGER"]);
  const back = `/portal/${id}/karte`;
  const name = str(form, "name");
  const price = Number(String(form.get("price") ?? "").replace(",", "."));
  if (!name || !Number.isFinite(price) || price < 0) fail(back, "Bitte Name und Preis angeben.");
  await db.menuItem.create({
    data: {
      restaurantId: id,
      category: str(form, "category") ?? "Speisen",
      name: name!,
      description: str(form, "description"),
      priceCents: Math.round(price * 100),
      tags: form.getAll("tags").map(String).join(","),
      allergens: str(form, "allergens"),
      position: await db.menuItem.count({ where: { restaurantId: id } }),
    },
  });
  redirect(back);
}

export async function deleteMenuItem(form: FormData) {
  const item = await db.menuItem.findUnique({ where: { id: String(form.get("itemId")) } });
  if (!item) redirect("/portal");
  await requireMember(item.restaurantId, ["OWNER", "MANAGER"]);
  await db.menuItem.delete({ where: { id: item.id } });
  redirect(`/portal/${item.restaurantId}/karte`);
}

export async function createSpots(form: FormData) {
  const id = String(form.get("restaurantId"));
  await requireMember(id, ["OWNER", "MANAGER"]);
  const back = `/portal/${id}/spots`;
  const date = String(form.get("date") ?? "");
  const start = String(form.get("start") ?? "");
  const end = String(form.get("end") ?? "");
  const repeatWeeks = Math.min(12, Math.max(1, int(form, "repeatWeeks", 1)));
  const seats = int(form, "seats", 0);
  const discount = int(form, "discountPercent", 50);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(start) || !/^\d{2}:\d{2}$/.test(end)) fail(back, "Bitte Datum und Uhrzeiten angeben.");
  if (seats < 1 || seats > 100) fail(back, "Das Kontingent muss zwischen 1 und 100 Plätzen liegen.");
  if (discount < 0 || discount > 70) fail(back, "Der Rabatt muss zwischen 0 und 70 % liegen.");
  const firstStart = berlinDate(date, start);
  const firstEnd = berlinDate(date, end);
  if (firstEnd <= firstStart) fail(back, "Das Ende muss nach dem Beginn liegen.");
  if (firstStart < new Date()) fail(back, "Der Beginn liegt in der Vergangenheit.");
  const data = Array.from({ length: repeatWeeks }, (_, w) => ({
    restaurantId: id,
    startsAt: new Date(firstStart.getTime() + w * 7 * 864e5),
    endsAt: new Date(firstEnd.getTime() + w * 7 * 864e5),
    seats,
    maxGroupSize: Math.min(8, Math.max(1, int(form, "maxGroupSize", 4))),
    discountPercent: discount,
    freebie: str(form, "freebie"),
    conditions: str(form, "conditions"),
    bookingCutoffMin: Math.max(0, int(form, "bookingCutoffMin", 30)),
  }));
  await db.spot.createMany({ data });
  redirect(`${back}?created=${data.length}`);
}

export async function cancelSpot(form: FormData) {
  const spot = await db.spot.findUnique({ where: { id: String(form.get("spotId")) } });
  if (!spot) redirect("/portal");
  await requireMember(spot.restaurantId, ["OWNER", "MANAGER"]);
  await db.$transaction([
    db.spot.update({ where: { id: spot.id }, data: { status: "CANCELLED" } }),
    db.booking.updateMany({ where: { spotId: spot.id, status: "BOOKED" }, data: { status: "CANCELLED", cancelledAt: new Date() } }),
  ]);
  redirect(`/portal/${spot.restaurantId}/spots`);
}

/** Check-in per Code oder QR-Inhalt. Gilt ab 60 Minuten vor Beginn bis zum Ende des Zeitfensters. */
export async function checkIn(form: FormData) {
  const id = String(form.get("restaurantId"));
  await requireMember(id);
  const back = `/portal/${id}/checkin`;
  const raw = String(form.get("code") ?? "");
  const code = raw.replace(/^THIRSTY:/i, "").replace(/\D/g, "");
  const booking = await db.booking.findUnique({ where: { code }, include: { spot: true } });
  if (!booking || booking.spot.restaurantId !== id) return fail(back, `Code ${code || raw} gehört zu keiner Buchung in diesem Restaurant.`);
  if (booking.status === "CHECKED_IN") return redirect(`${back}?ok=${booking.id}&again=1`);
  if (booking.status !== "BOOKED" && booking.status !== "NO_SHOW") return fail(back, "Diese Buchung wurde storniert.");
  const now = Date.now();
  if (now < booking.spot.startsAt.getTime() - 3600_000) return fail(back, "Diese Buchung gilt erst später.");
  if (now > booking.spot.endsAt.getTime()) return fail(back, "Das Zeitfenster dieser Buchung ist vorbei.");
  if (booking.status === "NO_SHOW") {
    // Gast kam doch noch: No-Show-Malus zurücknehmen.
    await db.reliabilityEvent.deleteMany({ where: { bookingId: booking.id, kind: "NO_SHOW" } });
  }
  await db.booking.update({ where: { id: booking.id }, data: { status: "CHECKED_IN", checkedInAt: new Date() } });
  await recordEvent(booking.userId, "ATTENDED", booking.id);
  redirect(`${back}?ok=${booking.id}`);
}

/** No-Show melden: frühestens 15 Minuten nach Beginn. */
export async function markNoShow(form: FormData) {
  const booking = await db.booking.findUnique({ where: { id: String(form.get("bookingId")) }, include: { spot: true } });
  if (!booking) redirect("/portal");
  const id = booking.spot.restaurantId;
  await requireMember(id);
  if (booking.status !== "BOOKED") redirect(`/portal/${id}`);
  if (Date.now() < booking.spot.startsAt.getTime() + 15 * 60_000) fail(`/portal/${id}`, "Ein No-Show kann erst 15 Minuten nach Beginn gemeldet werden.");
  await db.booking.update({ where: { id: booking.id }, data: { status: "NO_SHOW" } });
  await recordEvent(booking.userId, "NO_SHOW", booking.id);
  redirect(`/portal/${id}`);
}

export async function giveFeedback(form: FormData) {
  const booking = await db.booking.findUnique({ where: { id: String(form.get("bookingId")) }, include: { spot: true, feedback: true } });
  if (!booking) redirect("/portal");
  const id = booking.spot.restaurantId;
  await requireMember(id);
  if (booking.status !== "CHECKED_IN" || booking.feedback) redirect(`/portal/${id}`);
  const positive = form.get("positive") === "yes";
  const tags = form.getAll("tags").map(String);
  await db.guestFeedback.create({ data: { bookingId: booking.id, positive, tags: tags.join(",") } });
  if (!positive) await recordEvent(booking.userId, "THUMBS_DOWN", booking.id);
  if (tags.includes("zu spät")) await recordEvent(booking.userId, "LATE_ARRIVAL", booking.id);
  redirect(`/portal/${id}`);
}

export async function replyToReview(form: FormData) {
  const review = await db.review.findUnique({ where: { id: String(form.get("reviewId")) }, include: { booking: { include: { spot: true } } } });
  if (!review) redirect("/portal");
  const id = review.booking.spot.restaurantId;
  await requireMember(id, ["OWNER", "MANAGER"]);
  await db.review.update({ where: { id: review.id }, data: { reply: str(form, "reply") } });
  redirect(`/portal/${id}/bewertungen`);
}

export async function addMember(form: FormData) {
  const id = String(form.get("restaurantId"));
  await requireMember(id, ["OWNER"]);
  const back = `/portal/${id}/team`;
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const role = String(form.get("role"));
  if (!["MANAGER", "STAFF"].includes(role)) fail(back, "Unbekannte Rolle.");
  const user = await db.user.findUnique({ where: { email } });
  if (!user) fail(back, "Zu dieser E-Mail gibt es noch kein Thirsty-Konto. Die Person muss sich zuerst registrieren.");
  await db.restaurantMember.upsert({
    where: { userId_restaurantId: { userId: user!.id, restaurantId: id } },
    create: { userId: user!.id, restaurantId: id, role },
    update: { role },
  });
  redirect(back);
}

export async function removeMember(form: FormData) {
  const id = String(form.get("restaurantId"));
  const { user } = await requireMember(id, ["OWNER"]);
  const memberId = String(form.get("memberId"));
  const m = await db.restaurantMember.findUnique({ where: { id: memberId } });
  if (m && m.restaurantId === id && m.userId !== user.id) await db.restaurantMember.delete({ where: { id: memberId } });
  redirect(`/portal/${id}/team`);
}
