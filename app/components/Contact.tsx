"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-deepink text-bone py-24 md:py-40 overflow-hidden"
    >
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section index */}
        <div className="mb-12 md:mb-16">
          <span className="section-index text-bone/50">06 — Contact</span>
        </div>

        {/* Massive type */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24"
        >
          <h2
            className="font-display leading-[0.9] tracking-[-0.02em]"
            style={{
              fontSize: "clamp(3rem, 10vw, 11rem)",
              fontVariationSettings: "'SOFT' 50, 'opsz' 144",
            }}
          >
            Let&apos;s build
            <br />
            <em className="font-light pl-[10vw] block">something beautiful.</em>
          </h2>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-12 gap-6 md:gap-8 mb-20 md:mb-32"
        >
          <a
            href="mailto:vita.gohel@gmail.com"
            className="md:col-span-6 group relative flex items-center justify-between gap-4 border border-bone/20 hover:border-bone/60 transition-all duration-500 px-6 md:px-10 py-8 md:py-12 hover:bg-bone/[0.03]"
          >
            <div className="flex items-center gap-5">
              <Mail className="w-5 h-5 text-bone/60 group-hover:text-bone transition-colors" strokeWidth={1.25} />
              <div>
                <p className="text-[0.65rem] uppercase tracking-widest2 text-bone/50 mb-1">
                  Email
                </p>
                <p
                  className="font-display text-2xl md:text-3xl text-bone"
                  style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 48" }}
                >
                  vita.gohel<em className="font-light">@gmail.com</em>
                </p>
              </div>
            </div>
            <ArrowUpRight
              className="w-6 h-6 text-bone/40 group-hover:text-bone group-hover:rotate-12 transition-all duration-500 shrink-0"
              strokeWidth={1.25}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/vita-gohel/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-6 group relative flex items-center justify-between gap-4 border border-bone/20 hover:border-bone/60 transition-all duration-500 px-6 md:px-10 py-8 md:py-12 hover:bg-bone/[0.03]"
          >
            <div className="flex items-center gap-5">
              <Linkedin className="w-5 h-5 text-bone/60 group-hover:text-bone transition-colors" strokeWidth={1.25} />
              <div>
                <p className="text-[0.65rem] uppercase tracking-widest2 text-bone/50 mb-1">
                  LinkedIn
                </p>
                <p
                  className="font-display text-2xl md:text-3xl text-bone"
                  style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 48" }}
                >
                  <em className="font-light">in/</em>vita-gohel
                </p>
              </div>
            </div>
            <ArrowUpRight
              className="w-6 h-6 text-bone/40 group-hover:text-bone group-hover:rotate-12 transition-all duration-500 shrink-0"
              strokeWidth={1.25}
            />
          </a>
        </motion.div>

        {/* Footer */}
        <div className="grid md:grid-cols-12 gap-8 pt-12 md:pt-16 border-t border-bone/15 items-end">
          <div className="md:col-span-6">
            <p className="font-display text-xl md:text-2xl italic font-light text-bone/85 leading-snug">
              Currently shaping the visual story at
              <br />
              LBLA Beauty — open to conversations.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-9 text-[0.65rem] uppercase tracking-widest2 text-bone/45 leading-relaxed">
            <p className="mb-1">Based in Los Angeles</p>
            <p>Working globally</p>
          </div>
          <div className="md:col-span-3 text-[0.65rem] uppercase tracking-widest2 text-bone/40 md:text-right">
            <p>© {new Date().getFullYear()} Vita Gohel</p>
            <p className="mt-1">All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
