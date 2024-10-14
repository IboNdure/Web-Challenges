import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function theTwoTo() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");

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
        src={"/the-two-towers.png"}
        width={140}
        height={230}
        alt={volume.title}
      />
    </div>
  );
}
