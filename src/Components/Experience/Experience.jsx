import React from 'react'
import m1 from "../../assets/ppp.gif"


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 md:-mt-10">
    <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
    <div className="flex flex-wrap items-start justify-between gap-0 md:gap-0 p-10 md:p-24 w-fill"> 
      <div className="flex flex-col w-full md:w-3/6 gap-4 bg-slate-950 bg-opacity-20 rounded-xl p-4 items-center shadow-lg shadow-slate-900 md:mt-14">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full">
          <img className="w-16 md:w-20" src={m1} alt="Profile" />
          <div className="text-white w-full text-leftr md:text-left ">
            <h2 className="leading-tight font-bold hyphens-auto">BSM Pvt. Ltd., WordPress Developer Intern</h2>
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
      <div className="hidden md:flex flex-wrap md:w-2/5 w-full gap-4 p-6 text-white items-center justify-center bg-black shadow-lg shadow-slate-900 bg-opacity-20 rounded-2xl md:mt-0 hyphens-auto font-semibold">
    <p>During my internship at <b>Big Social Media Pvt. Ltd.</b>, I developed skills in professional communication, teamwork, time management, problem-solving, adaptability, networking, attention to detail, and conflict resolution. For more details, see my <u><a href='https://drive.google.com/file/d/1WerwTylARhCtG5FP6plnniBLaA7PpiNA/view?usp=sharing' target='_blank'>certificate</a></u> and <u className="hyphens-auto"><a href='https://drive.google.com/file/d/1VAqmT_Ak8RvZyAz00PuvjRX5HRPulSlU/view?usp=sharing' target='_blank'>letter of recommendation</a></u>.</p>
    <div className="text-md hyphens-auto w-full hyphens-auto">
    <h2 className="font-bold">Projects I worked on:</h2>
    <ul className="list-none ml-1">
    <li className="flex items-center relative">
  <span className="mr-2">→</span> 
  <a href='https://bigsocialmedia.in/' target='_blank' className="hover-text">bigsocialmedia.in🔗</a>
  <div className="hover-image absolute hidden">
    <img src="https://i.postimg.cc/9MqvGVzJ/Screenshot-655.png" alt="Description of image" />
  </div>
</li>

<li className="flex items-center relative">
  <span className="mr-2">→</span> 
  <a href='https://selfpublishingindia.co.in/' target='_blank' className="hover-text">selfpublishingindia.in🔗</a>
  <div className="hover-image absolute hidden">
    <img src="https://i.postimg.cc/ZnJzZ2KH/Screenshot-656.png" alt="Description of image" />
  </div>
</li>

    </ul>
  </div>
      </div>
    </div>
  </div>
  
  )
}

export default Experience
