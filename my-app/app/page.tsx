import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Country Info App</h1>
      <p className="text-lg mb-4 text-center">
        Explore information about different countries, including population, borders, and flags.
      </p>
      <Link href="/countries" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        View Country List
      </Link>
    </div>
  );
}
