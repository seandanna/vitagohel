"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden pb-16 md:pb-24 pt-32"
    >
      {/* Background editorial photo, low opacity */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1631214540242-3cd8c4b0b3b8?w=2000&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bone/60 via-bone/20 to-bone" />
      </div>

      {/* Portrait — full bleed on mobile, right panel on desktop */}
      <div className="absolute inset-0 md:inset-y-0 md:right-0 md:left-auto md:w-[38%] -z-[5]">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=85&auto=format&fit=crop&crop=faces,top"
            alt="Vita Gohel — Creative Director"
            className="w-full h-full object-cover object-top"
          />
          {/* Mobile only: strong bone wash so dark text stays legible */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-b from-bone/55 via-bone/35 to-bone" />
          {/* Desktop only: left edge fade into page background */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-bone via-bone/10 to-transparent" />
          {/* Both: bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-bone via-bone/40 to-transparent" />
        </motion.div>
      </div>

      <div className="relative max-w-[1600px] mx-auto w-full px-6 md:px-12">
        {/* Index/eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-8 md:mb-12"
        >
          <span className="h-px w-10 bg-ink/30" />
          <span className="section-index text-ink/60">
            Portfolio · Est. 2026
          </span>
        </motion.div>

        {/* Massive name */}
        <div className="mb-8 md:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-display text-ink leading-[0.85] tracking-[-0.02em]"
            style={{
              fontSize: "clamp(4.5rem, 16vw, 18rem)",
              fontVariationSettings: "'SOFT' 50, 'WONK' 0, 'opsz' 144",
            }}
          >
            Vita
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="font-display text-ink leading-[0.85] tracking-[-0.02em] italic font-light pl-[8vw] md:pl-[12vw] -mt-2 md:-mt-4"
            style={{
              fontSize: "clamp(4.5rem, 16vw, 18rem)",
              fontVariationSettings: "'SOFT' 100, 'WONK' 1, 'opsz' 144",
            }}
          >
            Gohel
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="grid md:grid-cols-12 gap-8 items-end mt-12"
        >
          <div className="md:col-span-7 lg:col-span-6">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-ink/85 leading-[1.25] tracking-tight">
              <em className="font-light">Creative & Brand Leader</em> shaping
              the next generation of beauty and consumer brands.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 text-[0.7rem] uppercase tracking-widest2 text-ink/60 leading-relaxed">
            <p className="mb-2">
              Currently — Head of Creative & Marketing
            </p>
            <p className="text-ink/85 font-medium">LBLA Beauty</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
