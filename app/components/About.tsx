"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "15+", label: "Years in beauty & consumer brands" },
  { number: "10", label: "Brands led across her career" },
  { number: "176%", label: "Social audience growth at LORAC" },
  { number: "150%", label: "Sales-over-goal at peak launch" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-bone">
      {/* Full-bleed editorial image, top half */}
      <div className="relative w-full overflow-hidden" style={{ height: "65vh" }}>
        <motion.img
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=2400&q=85&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Bottom gradient to merge into the stats below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bone" />
        {/* Section index overlay */}
        <div className="absolute top-8 left-6 md:left-12">
          <span className="section-index text-bone/70">01 — About</span>
        </div>
      </div>

      {/* Headline + stats below image */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-10 pb-20 md:pb-32">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display leading-[0.95] tracking-[-0.02em] text-ink mb-16 md:mb-24"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            fontVariationSettings: "'SOFT' 50, 'opsz' 96",
          }}
        >
          Fifteen years of building <em className="font-light">brands</em>
          <br />
          that move the market.
        </motion.h2>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-ink/10"
        >
          {stats.map((stat, i) => (
            <div key={i} className="space-y-3">
              <div
                className="font-display text-ink leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontVariationSettings: "'SOFT' 50, 'opsz' 96",
                }}
              >
                {stat.number}
              </div>
              <p className="text-[0.7rem] uppercase tracking-widest2 text-ink/55 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
