import Link from "next/link";

interface Country {
  name: string;
  countryCode: string;
}

interface CountryListProps {
  countries: Country[];
}

export default function CountryList({ countries }: CountryListProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {countries.map((country) => (
        <li key={country.countryCode} className="p-6 border rounded-lg shadow hover:shadow-xl transition-shadow">
          <Link href={`/country/${country.countryCode}`} className="text-lg font-semibold text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition">
            {country.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
