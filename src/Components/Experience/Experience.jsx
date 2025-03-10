import React from 'react'
import m1 from "../../assets/ppp.gif"
import m2 from "../../assets/eli.png"

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 md:-mt-10">
    <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
    <div className="flex flex-wrap items-start justify-between gap-0 md:gap-0 p-10 md:p-24 w-fill"> 
      <div className="flex flex-col w-full md:w-3/6 gap-4 bg-slate-950 bg-opacity-20 rounded-xl p-4 items-center shadow-lg shadow-slate-900 md:mt-14">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
          <img className="w-16 md:w-20" src={m1} alt="Profile" />
          <div className="text-white w-full text-leftr md:text-left ">
            <h2 className="leading-tight font-bold hyphens-auto"><b className='text-lg'>BSM Pvt. Ltd.</b>, <i>WordPress Developer Intern</i></h2>
            <p className="text-lg leading-tight font-thin">Jun 2024 - Aug 2024</p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
  <div className="text-sm hyphens-auto w-full">
    <p className="font-bold">Key Takeaways:</p>
    <ul className="list-none ml-1 font-semibold">
      <li className="flex items-center">
        → Web-Development using WordPress
      </li>
      <li className="flex items-center">
        <span className="mr-2">→</span> Web Hosting
      </li>
      <li className="flex items-center">
        <span className="mr-2">→</span> Managing websites
      </li>
      <li className="flex items-center">
        <span className="mr-2">→</span> SEO
      </li>
    </ul>
  </div>
</div>
      </div>
        </div>
      </div>
      <div className="hidden md:flex flex-wrap md:w-2/5 w-full gap-4 p-6 text-white items-center justify-center bg-black shadow-lg shadow-slate-900 bg-opacity-20 rounded-2xl md:mt-6 hyphens-auto font-semibold">
    <p>During my internship at <b>Big Social Media Pvt. Ltd.</b>, I developed skills in professional communication, teamwork, time management, problem-solving, adaptability, networking, attention to detail, and conflict resolution.</p>
    <div className="text-md hyphens-auto w-full hyphens-auto">
    <h2 className="font-bold">Projects I worked on:</h2>
    <ul className="list-none ml-1">
    <li className="flex items-center relative">
  <span className="mr-2">→</span> 
  <a href='https://bigsocialmedia.in/' target='_blank' className="hover-text">bigsocialmedia.in🔗</a>
  <div className="hover-image absolute hidden">
    <img src="https://i.postimg.cc/rmjQkF8f/Screenshot-661.png" alt="Description of image" />
  </div>
</li>

<li className="flex items-center relative">
  <span className="mr-2">→</span> 
  <a href='https://selfpublishingindia.co.in/' target='_blank' className="hover-text">selfpublishingindia.in🔗</a>
  <div className="hover-image absolute hidden">
    <img src="https://i.postimg.cc/NjR8tfDR/Screenshot-663.png" alt="Description of image" />
  </div>
</li>

    </ul>
  </div>
      </div>
      <div className="flex flex-col w-full md:w-3/6 gap-4 bg-slate-950 bg-opacity-20 rounded-xl p-4 items-center shadow-lg shadow-slate-900 md:mt-20">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
          <img className="w-16 md:w-24" src={m2} alt="Profile" />
          <div className="text-white w-full text-leftr md:text-left ">
            <h2 className="leading-tight font-bold hyphens-auto"><b className='text-lg'>Elixir Techne</b>, <i>Software Developer Intern</i></h2>
            <p className="text-lg leading-tight font-thin">Jan 2025 - Present</p>
  
      </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Experience
