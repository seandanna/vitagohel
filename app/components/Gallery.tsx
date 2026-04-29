"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=85&auto=format&fit=crop",
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1610552050890-fe99536c2615?w=1000&q=85&auto=format&fit=crop",
    span: "md:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1000&q=85&auto=format&fit=crop",
    span: "md:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=85&auto=format&fit=crop",
    span: "md:col-span-6",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=85&auto=format&fit=crop",
    span: "md:col-span-6",
    aspect: "aspect-[3/4]",
  },
];

export default function Gallery() {
  return (
    <section className="relative py-24 md:py-40 border-t border-ink/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <span className="section-index text-ink/50">05 — Aesthetic</span>
          </div>
          <div className="md:col-span-9">
            <h2
              className="font-display leading-[0.95] tracking-[-0.02em] text-ink"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                fontVariationSettings: "'SOFT' 50, 'opsz' 96",
              }}
            >
              A point of view rooted in <em className="font-light">beauty.</em>
            </h2>
          </div>
        </div>

        {/* Mosaic */}
        <div className="grid md:grid-cols-12 gap-3 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className={`${img.span} ${img.aspect} relative overflow-hidden bg-bonelight group`}
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
