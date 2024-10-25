import Link from "next/link";
import { cities } from "@/lib/data";

export default function CitiesList() {
  return (
    <div>
      <h1>Städte Liste</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.slug}>
            <Link href={`/cities/${city.slug}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
