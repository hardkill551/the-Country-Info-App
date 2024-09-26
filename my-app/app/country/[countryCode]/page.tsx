"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BorderCountries from "../../components/BorderCountries";
import PopulationChart from "../../components/PopulationChart";
import Image from "next/image";

interface CountryInfo {
  name: string;
  flagUrl: string;
  borderCountries: {
    commonName: string;
    countryCode: string;
  }[];
  populationData: {
    country: string;
    code: string;
    iso3: string;
    populationCounts: { year: number; value: number }[];
  } | undefined;
}

export default function CountryInfoPage() {
  const { countryCode } = useParams();
  const router = useRouter();
  const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCountryInfo() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/countries/${countryCode}`
        );
        const data = await response.json();
        setCountryInfo(data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    }
    if (countryCode) {
      fetchCountryInfo();
    }
  }, [countryCode]);

  return (
    <div className="container">
      <button
        className="mt-4 mb-6 px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-full hover:bg-secondary-light dark:hover:bg-secondary-dark transition-all shadow-lg"
        onClick={() => router.back()}
      >
        ← Back
      </button>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : countryInfo ? (
        <div>
          <h1 className="text-center text-4xl font-bold mb-6">{countryInfo.name}</h1>
          <div className="flex flex-col items-center">
            <Image src={countryInfo.flagUrl} alt={`Flag of ${countryInfo.name}`} width={250} className="mb-6 shadow-lg" />
            <BorderCountries borderCountries={countryInfo.borderCountries} />
            <PopulationChart populationData={countryInfo.populationData} />
          </div>
        </div>
      ) : (
        <div className="text-center">Country not found</div>
      )}
    </div>
  );
}
