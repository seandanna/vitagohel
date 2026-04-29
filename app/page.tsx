"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import BrandWall from "./components/BrandWall";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import StickyCard from "./components/StickyCard";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bone">
      <Nav />

      {/* Hero — base layer */}
      <StickyCard zIndex={1} shadow="none">
        <Hero />
      </StickyCard>

      {/* About — rises over Hero */}
      <StickyCard zIndex={2} shadow="0 -20px 60px rgba(0,0,0,0.10)">
        <About />
      </StickyCard>

      {/* Work — rises over About */}
      <StickyCard zIndex={3} shadow="0 -20px 60px rgba(0,0,0,0.14)">
        <Work />
      </StickyCard>

      {/* Experience — rises over Work */}
      <StickyCard zIndex={4} shadow="0 -20px 60px rgba(0,0,0,0.10)">
        <Experience />
      </StickyCard>

      {/* BrandWall — rises over Experience */}
      <StickyCard zIndex={5} shadow="0 -20px 60px rgba(0,0,0,0.18)">
        <BrandWall />
      </StickyCard>

      {/* Gallery — rises over BrandWall */}
      <StickyCard zIndex={6} shadow="0 -20px 60px rgba(0,0,0,0.10)">
        <Gallery />
      </StickyCard>

      {/* Contact — rises over Gallery */}
      <StickyCard zIndex={7} shadow="0 -20px 60px rgba(0,0,0,0.18)">
        <Contact />
      </StickyCard>
    </main>
  );
}
