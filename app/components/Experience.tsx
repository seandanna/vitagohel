"use client";

import { motion } from "framer-motion";

type Role = {
  company: string;
  title: string;
  years: string;
  location?: string;
  body: string;
};

const roles: Role[] = [
  {
    company: "LBLA Beauty",
    title: "Head of Creative & Marketing",
    years: "2022 — Present",
    location: "Hybrid",
    body:
      "Shapes and executes global creative strategy for a tree-to-beauty brand, ensuring every visual and story reflects its power, purity, and purpose. Leads designers, writers, photographers, videographers, and content creators across digital, retail, influencer, and experiential channels — directing photography and post-production, refining brand identity across packaging and social, and shaping the creative vision for product launches and immersive brand events.",
  },
  {
    company: "LBLA Beauty",
    title: "Creative Director",
    years: "2018 — Present",
    location: "Los Angeles",
    body:
      "Founded the creative function and built it into a full in-house engine, anticipating shifts in design, beauty, wellness, and digital culture to keep the brand at the forefront of innovation.",
  },
  {
    company: "Alterna Haircare",
    title: "Senior Designer",
    years: "2018",
    location: "Culver City",
    body:
      "Brought creative direction to one of professional haircare's most respected names, contributing to brand expression across product, retail, and digital touchpoints.",
  },
  {
    company: "NYX Professional Makeup",
    title: "Senior Visual Brand Designer",
    years: "2017 — 2018",
    location: "El Segundo",
    body:
      "Played a central role in rebranding US merchandising and retail design across major partners — Macy's, Target, ULTA, Bloomingdale's. Led brainstorming through final approvals on gondolas, kiosks, and POPs, optimizing brand storytelling and product communication for every retail format. Managed freelance teams in a high-velocity environment while collaborating cross-functionally to align senior leadership behind upcoming launches.",
  },
  {
    company: "LORAC Cosmetics",
    title: "Senior Graphic Designer — Digital & Print",
    years: "2013 — 2016",
    location: "Los Angeles",
    body:
      "Helped lift LORAC into the top 20 in product market share nationwide. Conceived and executed visually impactful digital design for Mega Pro Palettes, Pro Contour, Alter Ego Lipsticks, and Pro Palettes — directing multimedia campaigns and collateral that earned strong reviews, national awards, and product launches that exceeded sales goals by up to 150%. Grew social audience from 434K to 1.2M in twelve months.",
  },
  {
    company: "Temptu Cosmetics",
    title: "Senior Designer / Associate Art Director — Digital",
    years: "2012 — 2013",
    location: "El Segundo",
    body:
      "Helped contemporize the brand by leveraging digital channels — social, mobile, eCommerce, and emerging technologies — to empower representatives and engage consumers. Redesigned the website from scratch, rebuilding wireframes and improving UI/UX across mobile and web, more than doubling page views.",
  },
  {
    company: "Napoleon Perdis Cosmetics",
    title: "Senior Graphic Designer",
    years: "2011 — 2012",
    location: "Los Angeles",
    body:
      "Developed national advertising campaigns for a worldwide beauty leader — print, online, retail displays, packaging, and buyer presentations for Nordstrom, Von Maur, Dillards, and ULTA. Redefined development workflow for marketing and product development, and led the repackaging and merchandising of NPSET at Target. Lash Bar, Bronze Patrol, and The Luxe Holiday Collection drove a 35% sales lift.",
  },
  {
    company: "Herbalife",
    title: "Graphic Artist",
    years: "2005 — 2010",
    location: "Los Angeles",
    body:
      "Created marketing and sales literature, product packaging, and sports advertising for a global network marketing company with $3.8B in retail sales. Led production on ads, flyers, posters, web banners, presentations, and tradeshow graphics while managing staff workflow and project assignments.",
  },
  {
    company: "OPI Products",
    title: "Graphic Designer",
    years: "2005",
    location: "North Hollywood",
    body:
      "Developed print, web, and packaging design for advertising campaigns and new product launches across the Chicago, Feets, and Brights nail polish lines. Set strategic direction for packaging, merchandising, and print under the Creative Director, and collaborated on photo shoots for beauty campaigns and product photography.",
  },
  {
    company: "Neutrogena",
    title: "Junior Designer",
    years: "2004 — 2005",
    location: "Los Angeles",
    body:
      "Created store displays for Advance Solutions, Norwegian Formula, and Triple Moisture across Target, Wal-Mart, and Costco. Implemented marketing collateral across sun care, cosmetics, hair care, and facial lines while collaborating with Creative, Production, and Marketing on outside-vendor merchandising.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-bone py-24 md:py-40"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
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

        {/* Roles */}
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-12 md:col-start-1">
            <div className="space-y-0 border-t border-ink/10">
              {roles.map((role, i) => (
                <RoleEntry key={i} role={role} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleEntry({ role, index }: { role: Role; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.04 }}
      className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 border-b border-ink/10 transition-colors hover:bg-bonelight/40"
    >
      <div className="md:col-span-1">
        <span className="section-index text-ink/40 block">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="md:col-span-2 text-[0.7rem] uppercase tracking-widest2 text-ink/55">
        {role.years}
        {role.location && (
          <div className="mt-1 text-ink/40">{role.location}</div>
        )}
      </div>

      <div className="md:col-span-3">
        <h3
          className="font-display text-2xl md:text-3xl leading-[1.1] text-ink"
          style={{ fontVariationSettings: "'SOFT' 50, 'opsz' 48" }}
        >
          {role.company}
        </h3>
        <p className="mt-1 text-[0.75rem] uppercase tracking-widest2 text-ink/60">
          {role.title}
        </p>
      </div>

      <div className="md:col-span-6">
        <p className="text-base md:text-lg leading-[1.65] text-ink/80 font-light">
          {role.body}
        </p>
      </div>
    </motion.article>
  );
}
