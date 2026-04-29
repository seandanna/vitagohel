import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import BrandWall from "./components/BrandWall";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bone">
      <Nav />

      {/* Hero — base layer, pinned */}
      <div className="sticky top-0" style={{ zIndex: 1 }}>
        <Hero />
      </div>

      {/* About — rises over Hero, pins while next section covers it */}
      <div
        className="sticky top-0 rounded-t-[2rem] overflow-hidden"
        style={{
          zIndex: 2,
          boxShadow: "0 -20px 60px rgba(0,0,0,0.10)",
        }}
      >
        <About />
      </div>

      {/* Work — rises over About, pins */}
      <div
        className="sticky top-0 rounded-t-[2rem] overflow-hidden"
        style={{
          zIndex: 3,
          boxShadow: "0 -20px 60px rgba(0,0,0,0.14)",
        }}
      >
        <Work />
      </div>

      {/* Experience — too long to pin; card treatment only, scrolls normally */}
      <div
        className="relative rounded-t-[2rem] overflow-hidden -mt-8"
        style={{
          zIndex: 4,
          boxShadow: "0 -20px 60px rgba(0,0,0,0.10)",
        }}
      >
        <Experience />
      </div>

      {/* BrandWall — rises and pins over Experience */}
      <div
        className="sticky top-0 rounded-t-[2rem] overflow-hidden"
        style={{
          zIndex: 5,
          boxShadow: "0 -20px 60px rgba(0,0,0,0.18)",
        }}
      >
        <BrandWall />
      </div>

      {/* Gallery — too long to pin; card treatment only, scrolls normally */}
      <div
        className="relative rounded-t-[2rem] overflow-hidden -mt-8"
        style={{
          zIndex: 6,
          boxShadow: "0 -20px 60px rgba(0,0,0,0.10)",
        }}
      >
        <Gallery />
      </div>

      {/* Contact — rises and pins over Gallery */}
      <div
        className="sticky top-0 rounded-t-[2rem] overflow-hidden"
        style={{
          zIndex: 7,
          boxShadow: "0 -20px 60px rgba(0,0,0,0.18)",
        }}
      >
        <Contact />
      </div>
    </main>
  );
}
