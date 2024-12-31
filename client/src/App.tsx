import { Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { Home } from "@/components/sections/Home";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { SectionContainer } from "@/components/SectionContainer";
import "./lib/i18n";

const sections = [
  {
    id: "home",
    Component: Home,
    background: "https://images.unsplash.com/photo-1536094919012-f5c6ecb4f64b",
  },
  {
    id: "services",
    Component: Services,
    background: "https://images.unsplash.com/photo-1581550945194-c2f7322e0577",
  },
  {
    id: "about",
    Component: About,
    background: "https://images.unsplash.com/photo-1498887960847-2a5e46312788",
  },
  {
    id: "testimonials",
    Component: Testimonials,
    background: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    id: "gallery",
    Component: Gallery,
    background: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    id: "contact",
    Component: Contact,
    background: "https://images.unsplash.com/photo-1527853787696-f7be74f2e39a",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <main className="scroll-smooth pb-16"> {/* Added padding to account for footer */}
          {sections.map(({ id, Component, background }) => (
            <SectionContainer key={id} id={id} background={background}>
              <Component />
            </SectionContainer>
          ))}
        </main>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;