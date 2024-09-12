import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import ThemeToggle from "./Components/ThemeToggle";



function App() {
  return (
    <div className="h-auto w-full overflow-hidden">
      <ThemeToggle />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
    
  );
}

export default App;
