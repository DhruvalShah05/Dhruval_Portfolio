import React from 'react';
import Navbar from './Components/Navbar';
import MobileMenu from './Components/Section/MobileMenu';
import Home from './Components/Section/Home';
import About from './Components/Section/About';
import LoadingScreen from './Components/LoadingScreen';
import Projects from './Components/Section/Projects';
import Contact from './Components/Section/Contact';
import Footer from './Components/Footer';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="flex flex-col transition-opacity duration-700">
          {/* Fixed top navigation */}
          <div className="fixed top-0 w-full z-50">
            <Navbar menuOpen={menuOpen} setmenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setmenuOpen={setMenuOpen} />
          </div>

          {/* Content wrapper with responsive spacing */}
          <div className="pt-5 px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
