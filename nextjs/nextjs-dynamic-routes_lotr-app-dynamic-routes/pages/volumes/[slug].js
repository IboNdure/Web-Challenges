import { useRouter } from "next/router";
import { volumes } from "/lib/data";
import Image from "next/image";
import Link from "next/link";
const VolumeDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === router.query.slug
  );
  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  const { title, description, cover, books } = volume;
  if (!volume) {
    return <p>Volume not found</p>;
  }

  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      <div>
        {previousVolume ? (
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        ) : null}
      </div>
      <div>
        {nextVolume ? (
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default VolumeDetail;
