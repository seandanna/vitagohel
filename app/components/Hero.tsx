"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden pb-16 md:pb-24 pt-32"
    >
      {/* Portrait — full bleed, face centred */}
      <div className="absolute inset-0 -z-10">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=2000&q=90&auto=format"
          alt="Vita Gohel — Creative Director"
          className="w-full h-full object-cover object-[50%_38%]"
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto w-full px-6 md:px-12">

        {/* Massive name */}
        <div className="mb-8 md:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-display text-bone leading-[0.85] tracking-[-0.02em]"
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
            transition={{ duration: 1.2, delay: 0.7 }}
            className="font-display text-bone leading-[0.85] tracking-[-0.02em] italic font-light pl-[8vw] md:pl-[12vw] -mt-2 md:-mt-4"
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
          transition={{ duration: 1, delay: 1.1 }}
          className="grid md:grid-cols-12 gap-8 items-end mt-12"
        >
          <div className="md:col-span-7 lg:col-span-6">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-bone/90 leading-[1.25] tracking-tight">
              <em className="font-light">Creative & Brand Leader</em> shaping
              the next generation of beauty and consumer brands.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 text-[0.7rem] uppercase tracking-widest2 text-bone/70 leading-relaxed">
            <p className="mb-2">
              Currently — Head of Creative & Marketing
            </p>
            <p className="text-bone font-medium">LBLA Beauty</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
