import Link from "next/link";

interface Country {
  commonName: string;
  countryCode: string; 
}

interface BorderCountriesProps {
  borderCountries: Country[];
}

export default function BorderCountries({ borderCountries }: BorderCountriesProps) {
  if (borderCountries.length === 0) {
    return <p className="text-center text-gray-500">No border countries available.</p>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Border Countries:</h2>
      <ul className="flex flex-wrap gap-4">
        {borderCountries.map((country) => (
          <li key={country.countryCode} className="p-3 border rounded-lg bg-gray-100 dark:bg-gray-700">
            <Link href={`/country/${country.countryCode}`} className="text-blue-500 hover:underline">
              {country.commonName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
