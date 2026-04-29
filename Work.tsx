"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 6, y: y * -6 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section
      id="work"
      className="relative bg-deepink text-bone py-24 md:py-40 overflow-hidden"
    >
      {/* Subtle grain on dark */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <div className="flex items-center gap-4">
              <span className="section-index text-bone/50">02 — Selected Work</span>
            </div>
          </div>
          <div className="md:col-span-9">
            <h2
              className="font-display leading-[0.95] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                fontVariationSettings: "'SOFT' 50, 'opsz' 96",
              }}
            >
              Designed to <em className="font-light">scroll.</em>
              <br />
              Built to <em className="font-light">convert.</em>
            </h2>
          </div>
        </div>

        {/* Device mockup composition */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative mx-auto"
          style={{ perspective: "1800px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid md:grid-cols-12 gap-6 md:gap-12 items-center"
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Laptop */}
            <div className="md:col-span-9 relative">
              <LaptopMockup />
            </div>

            {/* Phone overlapping */}
            <div className="md:col-span-3 relative md:-ml-32 md:-mt-12 z-10">
              <PhoneMockup />
            </div>
          </motion.div>
        </div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-12 gap-8 mt-16 md:mt-24"
        >
          <div className="md:col-span-3">
            <p className="text-[0.7rem] uppercase tracking-widest2 text-bone/50">
              Featured
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-xl md:text-2xl font-display font-light text-bone/90 leading-snug">
              Multi-channel campaigns and digital experiences spanning
              eCommerce, social, packaging, and experiential — for some of
              beauty&apos;s most recognizable names.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LaptopMockup() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "16/10.5" }}>
      {/* Laptop body */}
      <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-b from-[#2a2520] to-[#1a1612] p-2 md:p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
        {/* Camera notch */}
        <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 h-1 w-2 rounded-full bg-bone/20" />

        {/* Screen */}
        <div className="relative w-full h-full rounded-t-lg overflow-hidden bg-bone">
          {/* Browser chrome */}
          <div className="h-7 md:h-8 bg-[#f0ebe3] flex items-center px-3 md:px-4 gap-1.5 border-b border-ink/10">
            <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
            <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
            <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
            <div className="ml-3 md:ml-6 flex-1 max-w-md">
              <div className="h-4 md:h-5 rounded bg-bone/70 border border-ink/5 flex items-center px-3">
                <span className="text-[0.55rem] md:text-[0.65rem] text-ink/40 tracking-wide">
                  lblabeauty.com
                </span>
              </div>
            </div>
          </div>

          {/* Scrolling page content */}
          <div className="relative h-[calc(100%-1.75rem)] md:h-[calc(100%-2rem)] overflow-hidden">
            <div className="scrolling-screen">
              {/* Page section 1: Hero */}
              <div className="relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1600&q=85&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-deepink/20 via-transparent to-deepink/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-bone">
                  <p className="text-[0.55rem] md:text-[0.65rem] uppercase tracking-widest2 mb-2 opacity-70">
                    The Collection
                  </p>
                  <h3
                    className="font-display text-3xl md:text-5xl leading-[0.95]"
                    style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 96" }}
                  >
                    Tree to <em className="font-light">Beauty.</em>
                  </h3>
                </div>
              </div>

              {/* Page section 2: Product grid */}
              <div className="relative h-full bg-bone p-6 md:p-10 grid grid-cols-3 gap-3 md:gap-4">
                {[
                  "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80",
                  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
                  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
                  "https://images.unsplash.com/photo-1610552050890-fe99536c2615?w=600&q=80",
                  "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80",
                  "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&q=80",
                ].map((src, i) => (
                  <div key={i} className="bg-bonelight aspect-square overflow-hidden">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Page section 3: Editorial */}
              <div className="relative h-full grid grid-cols-2">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1631214540242-3cd8c4b0b3b8?w=1200&q=85&auto=format&fit=crop"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#1a1612] flex flex-col justify-center p-6 md:p-12 text-bone">
                  <p className="text-[0.55rem] md:text-[0.65rem] uppercase tracking-widest2 mb-3 opacity-50">
                    Behind the Brand
                  </p>
                  <h3
                    className="font-display text-2xl md:text-4xl leading-tight italic font-light"
                    style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 96" }}
                  >
                    The story behind every formula.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop base */}
      <div className="absolute -bottom-[1.5%] left-[-3%] right-[-3%] h-[2.5%] rounded-b-2xl bg-gradient-to-b from-[#2a2520] to-[#1a1612] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[40%] rounded-b-lg bg-[#0e0b08]" />
      </div>

      <style jsx>{`
        .scrolling-screen {
          display: flex;
          flex-direction: column;
          animation: scrollReel 18s ease-in-out infinite;
        }
        .scrolling-screen > div {
          flex: 0 0 100%;
        }
        @keyframes scrollReel {
          0%, 18% { transform: translateY(0); }
          28%, 46% { transform: translateY(-100%); }
          56%, 74% { transform: translateY(-200%); }
          84%, 100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[220px] mx-auto" style={{ aspectRatio: "9/19" }}>
      {/* Phone body */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-[#2a2520] to-[#1a1612] p-1.5 shadow-[0_30px_60px_-10px_rgba(0,0,0,0.7)]">
        {/* Screen */}
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-bone">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-16 rounded-full bg-[#0e0b08] z-20" />

          {/* Mobile content */}
          <div className="relative h-full">
            <div className="phone-scroll">
              <div className="relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=85&auto=format&fit=crop"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepink/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-bone">
                  <p className="text-[0.5rem] uppercase tracking-widest2 mb-1 opacity-70">
                    New
                  </p>
                  <p
                    className="font-display text-xl leading-tight"
                    style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 48" }}
                  >
                    Pure <em className="font-light">Botanicals</em>
                  </p>
                </div>
              </div>
              <div className="relative h-full bg-bonelight p-4 flex flex-col gap-2">
                {[
                  "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80",
                  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
                ].map((src, i) => (
                  <div key={i} className="relative bg-bone overflow-hidden flex-1 rounded">
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .phone-scroll {
          display: flex;
          flex-direction: column;
          height: 100%;
          animation: phoneReel 14s ease-in-out infinite;
        }
        .phone-scroll > div {
          flex: 0 0 100%;
        }
        @keyframes phoneReel {
          0%, 30% { transform: translateY(0); }
          50%, 80% { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
