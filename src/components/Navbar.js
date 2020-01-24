import React from "react";
import logoEndless from "../assets/logo-endless.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logoEndless} alt="Endless" />
    </nav>
  );
}
