import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function ReturnOfTheKingPage() {
  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  const volume = volumes[volumeIndex];

  return (
    <div>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={`/the-return-of-the-king.png`}
        width={140}
        height={230}
        alt={volume.title}
      />

      <div>
        {volumeIndex > 0 && (
          <Link href={`/volumes/${volumes[volumeIndex - 1].slug}`}>
            ← Previous Volume
          </Link>
        )}
        {volumeIndex < volumes.length - 1 && (
          <Link href={`/volumes/${volumes[volumeIndex + 1].slug}`}>
            Next Volume →
          </Link>
        )}
      </div>
    </div>
  );
}
