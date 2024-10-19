import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading, mutate } = useSWR(
    id ? `https://swapi.py4e.com/api/people/${id}` : null,
    fetcher
  );
  if (isLoading) return <div>Loading Characters</div>;
  if (error) return <div> Fehler {error.message}</div>;
  if (!data) return null;
  console.log(data);
  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
