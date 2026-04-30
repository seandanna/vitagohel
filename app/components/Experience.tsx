"use client";

import { motion } from "framer-motion";

type Role = {
  company: string;
  title: string;
  years: string;
};

const roles: Role[] = [
  { company: "LBLA Beauty", title: "Head of Creative & Marketing", years: "2022 — Present" },
  { company: "LBLA Beauty", title: "Creative Director", years: "2018 — 2022" },
  { company: "Alterna Haircare", title: "Senior Designer", years: "2018" },
  { company: "NYX Professional Makeup", title: "Senior Visual Brand Designer", years: "2017 — 2018" },
  { company: "LORAC Cosmetics", title: "Senior Graphic Designer", years: "2013 — 2016" },
  { company: "Temptu Cosmetics", title: "Sr. Designer / Assoc. Art Director", years: "2012 — 2013" },
  { company: "Napoleon Perdis Cosmetics", title: "Senior Graphic Designer", years: "2011 — 2012" },
  { company: "Herbalife", title: "Graphic Artist", years: "2005 — 2010" },
  { company: "OPI Products", title: "Graphic Designer", years: "2005" },
  { company: "Neutrogena", title: "Junior Designer", years: "2004 — 2005" },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-bone py-24 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="md:col-span-3">
            <span className="section-index text-ink/50">03 — Career</span>
          </div>
          <div className="md:col-span-9">
            <h2
              className="font-display leading-[0.95] tracking-[-0.02em] text-ink"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                fontVariationSettings: "'SOFT' 50, 'opsz' 96",
              }}
            >
              A career built across <em className="font-light">color,</em>
              <br />
              care, and <em className="font-light">consumer.</em>
            </h2>
          </div>
        </div>

        {/* Role list — compact, no body copy */}
        <div className="border-t border-ink/10">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.03 }}
              className="group grid grid-cols-12 items-center gap-4 md:gap-8 py-6 md:py-7 border-b border-ink/10 hover:bg-bonelight/50 transition-colors duration-300 px-0"
            >
              {/* Index */}
              <div className="col-span-1 hidden md:block">
                <span className="section-index text-ink/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Years */}
              <div className="col-span-4 md:col-span-2">
                <span className="text-[0.7rem] uppercase tracking-widest2 text-ink/50">
                  {role.years}
                </span>
              </div>

              {/* Company */}
              <div className="col-span-8 md:col-span-5">
                <h3
                  className="font-display text-xl md:text-2xl text-ink leading-tight group-hover:text-ink/70 transition-colors"
                  style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 48" }}
                >
                  {role.company}
                </h3>
              </div>

              {/* Title */}
              <div className="col-span-12 md:col-span-4 md:text-right">
                <span className="text-[0.7rem] uppercase tracking-widest2 text-ink/50">
                  {role.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
