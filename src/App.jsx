import { useState } from "react";
import Navbar from "./Components/Layout/Navbar";
import MobileMenu from "./Components/Layout/MobileMenu";
import Footer from "./Components/Layout/Footer";
import { THEME } from "./theme";
import Hero from "./Components/Sections/Hero";
import About from "./Components/Sections/About";
import Projects from "./Components/Sections/Projects";
import Experience from "./Components/Sections/Experience";
import Contact from "./Components/Sections/Contact";
import Skills from "./Components/Sections/Skills";



function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen ${THEME.bgBase} ${THEME.textPrimary}`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
