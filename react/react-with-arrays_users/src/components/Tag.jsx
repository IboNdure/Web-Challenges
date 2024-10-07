import "./Tag.css";

export default function Tag({ tag }) {
  const highlightClass = tag === "admin" ? "tag--highlight" : "";
  return <li className={`tag ${highlightClass}`}>{tag}</li>;
}
