"use client";

export default function Navbar() {

  return (

    <header className="navbar">

      <div className="navbar-container">


        <a href="#home" className="logo">
          Jayp<span>.</span>
        </a>



        <nav className="nav-links">

          <a href="#about">
            About
          </a>


          <a href="#experience">
            Experience
          </a>


          <a href="#platforms">
            Platforms
          </a>


          <a href="#skills">
            Skills
          </a>


          <a href="#case-studies">
            Projects
          </a>


          <a href="#performance">
            Achievements
          </a>


          <a href="#contact">
            Contact
          </a>


        </nav>



        <a 
          href="#contact" 
          className="btn btn-primary"
        >
          Let&apos;s Talk
        </a>


      </div>


    </header>

  );

}
