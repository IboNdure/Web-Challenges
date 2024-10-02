import "./Card.css";

export default function Card({ name, color }) {
  const cardstyle = {
    backgroundColor: color,
  };

  return (
    <div className="card" style={cardstyle}>
      <p>{name}</p>
    </div>
  );
}
