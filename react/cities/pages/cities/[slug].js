import { cities } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CityPage() {
  const router = useRouter();
  const { slug } = router.query;

  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return <h1>Stadt nicht gefunden</h1>;
  }

  return (
    <>
      <div>
        <h1>{city.name}</h1>
        <h2>{city.country}</h2>
        <p>{city.description} </p>
        <p>{city.population}</p>
      </div>
      <footer>
        <Link href={"/cities"}>Back to all Cities</Link>
      </footer>
    </>
  );
}
