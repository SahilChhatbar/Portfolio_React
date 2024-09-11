import React from 'react';
import bannerImg from "../../assets/111.png";

const ProjectCard = ({ title, main, image, demoLink, githubLink }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-full md:w-11/12 h-auto bg-black bg-opacity-30 shadow-lg shadow-slate-900 rounded-2xl">
      <img className="w-full h-auto object-cover rounded-t-lg" src={image} alt={title} />
      <div className="flex flex-col w-full p-4">
        <h3 className="text-xl md:text-2xl font-bold leading-normal hyphens-auto">
          {title}
        </h3>
        <p className="text-sm md:text-md leading-tight py-2 hyphens-auto">{main}</p>
        <div className="mt-2 flex flex-wrap gap-2 md:gap-6 justify-center">
         
            <button className="button-gradient mt-5 md:mt-10  text-#94a3b8 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#673ab7]">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">  Demo</a>
            </button>
            <button className="button-gradient mt-5 md:mt-10 text-#94a3b8 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#673ab7]">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub </a>
            </button>
         
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
