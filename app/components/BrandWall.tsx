"use client";

const brands = [
  "LBLA Beauty",
  "Neutrogena",
  "OPI Products",
  "Alterna Haircare",
  "Napoleon Perdis",
  "LORAC Cosmetics",
  "Jouer Cosmetics",
  "Anastasia Beverly Hills",
  "NYX Professional Makeup",
  "Murad",
];

const separator = <span className="text-bone/25 not-italic mx-6 md:mx-10 select-none" aria-hidden>✦</span>;

export default function BrandWall() {
  const looped = [...brands, ...brands];

  return (
    <section className="relative bg-deepink text-bone py-20 md:py-28 overflow-hidden">
      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-12 md:mb-16">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-3">
            <span className="section-index text-bone/50">04 — Brands</span>
          </div>
          <div className="md:col-span-9">
            <h2
              className="font-display leading-[0.95] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                fontVariationSettings: "'SOFT' 50, 'opsz' 96",
              }}
            >
              In good <em className="font-light">company.</em>
            </h2>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-container relative py-4 md:py-6">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 z-10 bg-gradient-to-r from-deepink to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 z-10 bg-gradient-to-l from-deepink to-transparent pointer-events-none" />

        <div className="marquee-track-large">
          {looped.map((brand, i) => (
            <span
              key={i}
              className="font-display italic font-light inline-flex items-center text-bone/90 whitespace-nowrap"
              style={{
                fontSize: "clamp(4rem, 10vw, 11rem)",
                fontVariationSettings: "'SOFT' 100, 'WONK' 1, 'opsz' 144",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {brand}
              {separator}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
