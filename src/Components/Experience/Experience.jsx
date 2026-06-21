import React from "react";
import m1 from "../../assets/ppp.gif";
import m2 from "../../assets/Lamda_Logo.svg";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-10 md:-mt-10">
      <h1 className="text-2xl md:text-4xl text-white px-12 font-bold">Experience</h1>
      <div className="flex flex-wrap items-start justify-between gap-0 md:gap-0 p-10 w-fill">
       <div className="flex flex-col w-full md:w-2/5 gap-4 bg-slate-950 bg-opacity-20 rounded-xl p-4 items-center shadow-lg shadow-slate-900 md:mt-20">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
            <img className="w-16 md:w-24" src={m2} alt="Profile" />
            <div className="text-white w-full text-leftr md:text-left ">
              <h2 className="leading-tight font-bold hyphens-auto">
                <b className="text-lg">Lamda Logs (formerly Elixir Techne)</b>,{" "}
                <i>Software Developer Intern</i>
              </h2>
              <p className="text-lg leading-tight font-thin">
                 Jan 2025 - May 2025
              </p>
            </div>
          </div>
        </div>
          <div className="hidden md:flex flex-wrap md:w-3/6 w-full gap-4 p-6 text-white items-center justify-center bg-black shadow-lg shadow-slate-900 bg-opacity-20 rounded-2xl md:mt-6 hyphens-auto font-semibold">
          <p>
         During my internship at <b>Lamda Logs</b>, I worked with React, TypeScript, Redux, Tailwind CSS, Git, and APIs, while collaborating using Figma and React UI libraries like ShadCN and Mantine. I contributed to the company’s internal <b>PMS</b>—a dashboard for project, HR, and employee management. Alongside technical growth, I strengthened soft skills such as communication, teamwork, time management, adaptability, and collaboration.
          </p>
        </div>
       <div className="flex flex-col w-full md:w-2/5 gap-4 bg-slate-950 bg-opacity-20 rounded-xl p-4 items-center shadow-lg shadow-slate-900 md:mt-10">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
            <img className="w-16 md:w-24" src={m2} alt="Profile" />
            <div className="text-white w-full text-leftr md:text-left ">
              <h2 className="leading-tight font-bold hyphens-auto">
                    <b className="text-lg">Lamda Logs (formerly Elixir Techne)</b>,{" "}
                <i>Software Developer</i>
              </h2>
              <p className="text-lg leading-tight font-thin">
                 Jun 2025 - Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
