"use client"; 

import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import { useRouter } from "next/navigation";

interface Country {
  name: string;
  countryCode: string;
}

export default function CountryListPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/countries`);
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    }
    fetchCountries();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container">
      <button
        className="mt-4 mb-6 px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-full hover:bg-secondary-light dark:hover:bg-secondary-dark transition-all shadow-lg"
        onClick={() => router.push("/")}
      >
        ← Back to Home
      </button>

      <h1 className="text-center text-4xl font-bold mb-8">Explore Countries</h1>
      <CountryList countries={countries} />
    </div>
  );
}
