import { Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { Home } from "@/components/sections/Home";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import "./lib/i18n";

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <main className="scroll-smooth">
          <section id="home">
            <Home />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="gallery">
            <Gallery />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;