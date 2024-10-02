import "./styles.css";

function Greeting({ name }) {
  const greetingMessage =
    name === "Coach" ? "Hello, Coach!" : `Hello, ${name}!`;

  return <h1>{greetingMessage}</h1>;
  // return <h1>Hello, {name}!</h1>;
}

export default function App() {
  return (
    <div>
      <Greeting name="Ibo" />
      <Greeting name="Coach" />
    </div>
  );
}
