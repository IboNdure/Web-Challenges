import React from "react";
import Header from "./components/Header";
// import avatar from "./img/avatar.jpg";
// import logo from "./img/logo.jpg";
import Navigation from "./components/Navigation";
export default function App() {
  return (
    <div>
      <Header />
      <Navigation>
        <a className="navigation__link" href="#home">
          Home
        </a>
        <a className="navigation__link" href="#about">
          About
        </a>
        <a className="navigation__link" href="#impressum">
          Impressum
        </a>
      </Navigation>
      <main>
        <h1>Welcome to My Website</h1>
        <p>This is the main content area.</p>
      </main>
    </div>
  );
}
