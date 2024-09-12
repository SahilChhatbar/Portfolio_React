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
        image="https://i.postimg.cc/pddC03cs/cine-min.png" 
        demoLink="https://i.postimg.cc/pddC03cs/cine-min.png"
        githubLink="https://github.com/SahilChhatbar/CineScope-ReactJs"
      />
      <ProjectCard 
        title="NearBees" 
        main="A Flower recognition system made using CNN model, YOLO and Flask. Other technologies include React Js and Bootstrap." 
        image="https://i.postimg.cc/L6YqBmG8/near.png" 
        demoLink="https://imgur.com/a/KQZGUDr"
        githubLink="https://github.com/SahilChhatbar/NearBees--Flower-Recognition-System-"
      />

    </div>
  </div>
  )
}
 
export default Projects
