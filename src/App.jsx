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
      <div id="landscape-warning" class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 hidden">
    <div class="text-center text-white flex flex-col items-center">
      <img src="https://media3.giphy.com/media/NU0xjazlhpBd0DeuNK/giphy.gif?cid=6c09b9522zx4zbmrl86gg0yd9ncqq002kntemy1gu32k6loi&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" width="200" alt="Switch to portrait please" class="mb-4" />
      <p class="text-lg">Please rotate your device to portrait mode for the best experience.</p>
    </div>
  </div>
    </div>
    
  );
}
function handleOrientationChange() {
  const warning = document.getElementById('landscape-warning');
  if (window.innerHeight < window.innerWidth) {
    // If the device is in landscape mode
    warning.style.display = 'flex';
  } else {
    // If the device is in portrait mode
    warning.style.display = 'none';
  }
}


window.addEventListener('load', handleOrientationChange);


window.addEventListener('orientationchange', handleOrientationChange);
window.addEventListener('resize', handleOrientationChange);

export default App;
