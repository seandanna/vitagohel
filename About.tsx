"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-40 border-t border-ink/10"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <div className="flex items-center gap-4">
              <span className="section-index text-ink/50">01 — About</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2
              className="font-display leading-[0.95] tracking-[-0.02em] text-ink"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                fontVariationSettings: "'SOFT' 50, 'opsz' 96",
              }}
            >
              Fifteen years of building <em className="font-light">brands</em>
              <br />
              that move the market.
            </h2>
          </div>
        </div>

        {/* Body copy in editorial two-column */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 md:col-start-4 space-y-6 text-lg md:text-xl leading-[1.6] text-ink/85 font-light"
          >
            <p>
              Vita Gohel is a creative and brand leader specializing in scaling
              future-forward beauty brands and building high-performing creative
              teams that deliver measurable business results.
            </p>
            <p>
              She leads end-to-end creative strategy, brand identity, and
              multi-channel execution across digital, social, eCommerce, product
              launches, packaging, and experiential campaigns — partnering
              closely with executive leadership and cross-functional teams to
              blend brand storytelling with performance marketing.
            </p>
            <p>
              Known for elevating brands in fast-paced, high-growth environments,
              Vita designs cohesive brand systems and ensures consistent brand
              expression across every touchpoint. She is passionate about
              mentoring teams, optimizing creative operations, and implementing
              AI-driven workflows that unlock speed, quality, and sustainable
              growth.
            </p>
          </motion.div>
        </div>

        {/* Numbers as a refined editorial moment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-24 md:mt-40 pt-16 border-t border-ink/10"
        >
          {[
            { number: "15+", label: "Years in beauty & consumer brands" },
            { number: "10", label: "Brands led across her career" },
            { number: "176%", label: "Social audience growth at LORAC" },
            { number: "150%", label: "Sales-over-goal at peak launch" },
          ].map((stat, i) => (
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
