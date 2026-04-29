"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone/90 backdrop-blur-md py-4 border-b border-ink/5"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl md:text-2xl tracking-tight text-ink"
          style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 24" }}
        >
          Vita <em className="font-light">Gohel</em>
        </a>

        <div className="hidden md:flex items-center gap-10 text-[0.7rem] uppercase tracking-widest2 text-ink/70">
          <a href="#about" className="hover:text-ink transition-colors">
            About
          </a>
          <a href="#work" className="hover:text-ink transition-colors">
            Work
          </a>
          <a href="#experience" className="hover:text-ink transition-colors">
            Career
          </a>
          <a href="#contact" className="hover:text-ink transition-colors">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="md:hidden text-[0.65rem] uppercase tracking-widest2 text-ink/80 border border-ink/20 px-3 py-1.5"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
