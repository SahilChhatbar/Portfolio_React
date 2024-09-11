import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div id="Home" className="text-#94a3b8 flex flex-col md:flex-row w-full justify-between items-center p-5 md:p-20">
      <div className="md:w-4/5 text-center md:text-left md:pt-10">
        <h1 className="animated-text md:ml-40">
          <span>Hi, I'm Sahil</span>
        </h1>
        <p className="text-sm md:text-xl tracking-tight mt-4 md:ml-40 md:w-full hyphens-auto">
        A Result-Oriented Web Developer specializing in building and managing websites and web applications to deliver innovative solutions and enhanced user experiences. Leveraging modern technologies and best practices to create efficient, scalable, and visually appealing digital solutions.</p>
          <button className="button-gradient mt-5 md:mt-10 md:ml-40 text-#94a3b8 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#673ab7]">
          <a href="#Projects">My Projects</a>
          </button>
          <div className="scroll-downs hidden md:block">
            <div className="mousey glow-effect">
              <div className="scroller"></div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
