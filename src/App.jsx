import { useRef } from "react";
import "./App.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";

import Hero from "./components/sidebar/hero/Hero";
import Services from "./components/sidebar/services/Services";

function App() {
  const contactRef = useRef(null);
  const latestRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLatest = () => {
    latestRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero
          scrollToLatest={scrollToLatest}
          scrollToContact={scrollToContact}
        />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <div ref={latestRef}>
        <Portfolio />
      </div>
      <section id="Contact" ref={contactRef}>
        <Contact />
      </section>
    </>
  );
}

export default App;
