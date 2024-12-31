import { Switch, Route } from "wouter";
import { Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { Home } from "@/components/sections/Home";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import "./lib/i18n";

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route>404 - Not Found</Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
