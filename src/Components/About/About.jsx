import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import {SiWordpress} from "react-icons/si"
import { SiMongodb } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiPython } from "react-icons/si";

const About = () => {
  return (
    <div id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-lg shadow-slate-900 mx-0 md:mx-20 md:my-10 bg-opacity-25 rounded-2xl p-12 md:p-20">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold ">About</h2>
        
        <div className="flex flex-col gap-12 md:flex-row items-center mt-10">
        
        <div className="flex flex-col items-center w-full gap-4 p-5 text-white bg-black shadow-lg shadow-slate-900 bg-opacity-20 rounded-2xl md:w-4/6 md:mt-0 glow-effect">
  <h2 className="md:text-2xl font-bold">
    I Specialize in
  </h2>

  <div className="flex flex-wrap w-full gap-2 items-center justify-center">
    <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
      <FaHtml5 color="#E34F26" size={50} />
    </span>
    <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
      <FaCss3 color="#1572b5" size={50} />
    </span>
    <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
      <FaReact color="61dafb" size={50} />
    </span>
    <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
      <FaJs color="#f7df16" size={50} />
    </span>
    <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
      <SiMongodb color="47a248" size={50} />
    </span>
    <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
      <SiNodedotjs color="47a248" size={50} />
    </span>
    <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
      <SiWordpress color="#ffff" size={50} />
    </span>
    <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
      <SiTailwindcss color="#00bfff" size={50} />
    </span>
    <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
      <SiBootstrap color="#b100cd" size={50} />
    </span>
    <span className="p-2 bg-zinc-950 flex items-center rounded-2xl">
      <SiPython color="#ffd343" size={50} />
    </span>
  </div>
</div>
    <div className="flex flex-col ">
      <ul className="space-y-4">
        <li className="flex gap-3 items-start">
          <div className="flex-grow">
           <h2 className="hidden md:block text-lg md:text-2xl leading-tight hyphens-auto text-center font-semibold">
            Get to know me!</h2>
          </div>
        </li>
        <li className="flex gap-3 items-start">
          <div className="flex-grow">
          <p className="text-sm md:text-lg leading-tight hyphens-auto font-semibold">
          I'm an aspiring Web Developer and WordPress Developer, specializing in building and managing websites. Check out my work in the Projects section.</p>
          </div>
        </li>
        <li className="flex gap-3 items-start">
          <div className="flex-grow">
           <p className="text-sm md:text-lg leading-tight hyphens-auto font-semibold">
            I regularly share valuable insights and content related to Web Development on <a href="https://www.linkedin.com/in/sahil-chhatbar-2b888523a/" target="_blank"><u>LinkedIn</u></a> to contribute to the developer community.</p>
          </div>
        </li>
        <li className="flex gap-3 items-start ">
          <div className="flex-grow">
           <p className="text-sm md:text-lg leading-tight hyphens-auto font-semibold">
            I am open to job opportunities where I can contribute, learn, and grow. If you have a relevant opportunity or would like to view my resume, feel free to contact me.</p>
          </div>
        </li>
       <div className="flex flex gap-1 md:gap-6 justify-center"><button className="button-gradient text-#94a3b8 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#673ab7] text-center">
          <a href="#Footer">Contact Me</a>
          </button>
          <button className="button-gradient text-#94a3b8 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#673ab7] text-center">
          <a href="https://drive.google.com/file/d/1hnuQrM2vhnu6cFSxTtVU6X6c1P5kGdGb/view?usp=sharing" target="_blank">My Résumé</a>
          </button></div>
      </ul>
    </div>
  </div></div>
    </div>
  );
};

export default About;
