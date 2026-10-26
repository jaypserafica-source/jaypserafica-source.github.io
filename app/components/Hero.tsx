"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    let ticking = false;

    const updateParallax = () => {
      const movement = Math.min(window.scrollY * 0.4, 160);

      hero.style.setProperty(
        "--hero-parallax",
        `${movement}px`
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" id="home">
      <div className="hero-glow"></div>

      <div className="hero-orb orb-one"></div>
      <div className="hero-orb orb-two"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-tag">
            Digital Marketing Specialist | PPC Specialist | Marketplace Growth |
            E-Commerce & Q-Commerce Performance Scaling
          </p>

          <h1>
            Hi, I&apos;m John Paul Serafica.
            <br />
            <span>
              I Grow Brands Through
              <br />
              Data Driven Advertising
            </span>
          </h1>

          <p className="hero-description">
  Marketplace advertising and growth strategy across Amazon, Noon, and Talabat.
  Combining PPC, performance analytics, and commercial thinking to scale brands efficiently.
</p>

        </div>

        <div className="hero-visual">
          <img
            src="/hero-visual.png"
            alt="Ecommerce advertising and performance marketing analytics"
          />
        </div>
      </div>
    </section>
  );
}