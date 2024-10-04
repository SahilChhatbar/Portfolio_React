import React, { useEffect, useState } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    function checkOrientation() {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      const isLandscape = window.innerHeight < window.innerWidth;

      if (isMobile && isLandscape) {
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }
    }

    
    checkOrientation();


    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);


    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return (
    <div className="h-auto w-full overflow-hidden">
      <ThemeToggle />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
      {showWarning && (
        <div id="landscape-warning" className="fixed inset-0 bg-slate-600 bg-opacity-95 flex items-center justify-center z-50">
          <div className="text-center text-white flex flex-col items-center">
            <img 
              src='src\assets\rotatephone.gif' 
              width="200" 
              alt="Switch to portrait please" 
              className="mb-4" 
            />
            <p className="text-lg">Please rotate your device to portrait mode for the best experience.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
