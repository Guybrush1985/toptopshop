// Demo-Daten: zwei Restaurants, ein Betreiber, ein Gast, Angebote für die nächsten Tage.
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const db = new PrismaClient();
const hash = await bcrypt.hash("thirsty123", 10);

await db.restaurant.deleteMany({ where: { slug: { in: ["trattoria-sole", "pho-viet-kitchen"] } } });
await db.user.deleteMany({ where: { email: { in: ["wirt@thirsty.test", "gast@thirsty.test"] } } });

const owner = await db.user.create({ data: { email: "wirt@thirsty.test", name: "Maria Rossi", role: "OWNER", passwordHash: hash } });
await db.user.create({ data: { email: "gast@thirsty.test", name: "Jonas Gast", role: "GUEST", passwordHash: hash, phone: "0151 0000000" } });

// Berliner Datum + Uhrzeit, "daysAhead" Tage nach dem heutigen Berliner Tag
const at = (daysAhead, hhmm) => {
  const day = new Date(Date.now() + daysAhead * 864e5).toLocaleDateString("sv-SE", { timeZone: "Europe/Berlin" });
  const guess = new Date(`${day}T${hhmm}:00Z`);
  const offset = new Date(guess.toLocaleString("en-US", { timeZone: "Europe/Berlin" })) - new Date(guess.toLocaleString("en-US", { timeZone: "UTC" }));
  return new Date(guess.getTime() - offset);
};

const restaurants = [
  {
    slug: "trattoria-sole", name: "Trattoria Sole", cuisine: "Italienisch", priceLevel: 2,
    tagline: "Hausgemachte Pasta und Terrasse in der Abendsonne",
    description: "Familiengeführte Trattoria mit frischer Pasta, Holzofenpizza und einer großen Terrasse zur Westseite.",
    street: "Schanzenstraße 12", postalCode: "20357", city: "Hamburg", lat: 53.5627, lng: 9.9629,
    phone: "040 1234567", seatsInside: 40, seatsOutside: 24, features: "terrasse,kinder,wlan",
    menu: [
      ["Vorspeisen", "Bruschetta al pomodoro", 790, "vegetarisch"],
      ["Vorspeisen", "Vitello tonnato", 1290, ""],
      ["Hauptgerichte", "Tagliatelle al ragù", 1590, ""],
      ["Hauptgerichte", "Pizza Margherita", 1190, "vegetarisch"],
      ["Desserts", "Tiramisù", 750, "vegetarisch"],
    ],
  },
  {
    slug: "pho-viet-kitchen", name: "Pho Viet Kitchen", cuisine: "Vietnamesisch", priceLevel: 1,
    tagline: "Pho, Bánh mì und frische Sommerrollen",
    description: "Kleine vietnamesische Küche mit Brühen, die zwölf Stunden ziehen.",
    street: "Bahrenfelder Straße 80", postalCode: "22765", city: "Hamburg", lat: 53.5552, lng: 9.9306,
    seatsInside: 28, seatsOutside: 8, features: "vegan",
    menu: [
      ["Vorspeisen", "Sommerrollen mit Tofu", 650, "vegan"],
      ["Hauptgerichte", "Pho Bo", 1390, "scharf"],
      ["Hauptgerichte", "Bún chay", 1290, "vegan"],
    ],
  },
];

for (const r of restaurants) {
  const { menu, ...data } = r;
  await db.restaurant.create({
    data: {
      ...data,
      status: "ACTIVE",
      members: { create: { userId: owner.id, role: "OWNER" } },
      openingHours: { create: [1, 2, 3, 4, 5, 6].map((weekday) => ({ weekday, opens: "17:00", closes: "23:00" })) },
      menuItems: { create: menu.map(([category, name, priceCents, tags], position) => ({ category, name, priceCents, tags, position })) },
      spots: {
        create: [0, 1, 2, 3].map((d) => ({
          // Das erste Angebot startet in 45 Minuten, damit Buchung und Check-in sofort testbar sind.
          startsAt: d === 0 ? new Date(Date.now() + 45 * 60_000) : at(d, "17:30"),
          endsAt: d === 0 ? new Date(Date.now() + 165 * 60_000) : at(d, "19:00"),
          seats: 8,
          discountPercent: 50,
          freebie: "1 Getränk pro Person",
          conditions: "Ein Hauptgericht pro Person.",
        })),
      },
    },
  });
}

console.log("Demo-Daten angelegt. Logins (Passwort thirsty123): wirt@thirsty.test, gast@thirsty.test");
await db.$disconnect();
