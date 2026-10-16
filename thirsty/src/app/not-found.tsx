import Link from "next/link";

export default function NotFound() {
  return (
    <div className="card mx-auto max-w-md text-center">
      <h1 className="text-2xl font-bold">Seite nicht gefunden</h1>
      <p className="mt-2 text-stone-600"><Link href="/" className="underline">Zu den freien Plätzen</Link></p>
    </div>
  );
}
