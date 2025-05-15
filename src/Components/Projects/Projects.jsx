import React from 'react'
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 md:pt-0 text-white md:-mt-20 -mt-8">
    <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
    <div className="py-12 px-8 flex flex-wrap gap-8 justify-center mt-0 md:mt-10">
       <ProjectCard 
        title="CineScope" 
        main="A movie information website that contains movie lists, such as popular, upcoming, and top rated. It utilized real-time data using API calls. Also contains movie details page complete with a unique chatbot." 
        image="https://i.postimg.cc/8CtJMwSs/Screenshot-859.png" 
        demoLink="https://cinescope-gamma.vercel.app/"
        githubLink="https://github.com/SahilChhatbar/cine-scope"
      />
    <ProjectCard 
        title="SamacharSetu" 
        main="A real-time news website with a translation feature, completely responsive. It utilizes the Google translate API. Developed using React and Bootstrap." 
        image="https://i.postimg.cc/dtGVMCjz/Screenshot-674-1-1.png" 
        demoLink="https://samacharsetu.vercel.app/"
        githubLink="https://github.com/SahilChhatbar/SamacharSetu"
      />
      <ProjectCard 
        title="NearBees" 
        main="A Flower recognition system made using CNN model, YOLO and Flask. Other technologies include React Js and Bootstrap." 
        image="https://i.postimg.cc/XNTsXrK4/near.jpg" 
        demoLink="https://imgur.com/a/KQZGUDr"
        githubLink="https://github.com/SahilChhatbar/NearBees--Flower-Recognition-System-"
      />
     
    </div>
  </div>
  )
}
 
export default Projects
