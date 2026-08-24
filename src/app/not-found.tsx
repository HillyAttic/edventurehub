import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="text-6xl">🔍</p>
      <h1 className="mt-4 font-heading text-3xl font-bold text-ink">Page not found</h1>
      <Link href="/" className="btn-gradient mt-6 px-6 py-3 text-sm font-semibold">
        Back to Home
      </Link>
    </div>
  );
}
