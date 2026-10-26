"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          Jayp<span>.</span>
        </a>


        <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#platforms" onClick={closeMenu}>
            Platforms
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#case-studies" onClick={closeMenu}>
            Projects
          </a>

          <a href="#performance" onClick={closeMenu}>
            Achievements
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </div>


        <a
          href="#contact"
          className="btn btn-primary navbar-contact"
        >
          Let&apos;s Talk
        </a>


        <button
          className={`mobile-menu-button ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </nav>
  );
}