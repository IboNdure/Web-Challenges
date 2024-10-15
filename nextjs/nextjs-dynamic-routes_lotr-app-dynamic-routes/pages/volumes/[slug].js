import { useRouter } from "next/router";
import { volumes } from "/lib/data";

const VolumeDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const volume = volumes.find((vol) => vol.slug === slug);

  if (!volume) {
    return <p>Volume not found</p>;
  }

  return (
    <div>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
    </div>
  );
};

export default VolumeDetail;
