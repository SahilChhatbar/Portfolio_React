import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div id='Footer' className="relative flex justify-around bg-black bg-opacity-30 text-white p-10 md:p-12 items-center shadow-lg shadow-slate-900">
      <div>
        <h1 className="text-2xl md:text-6xl font-font">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">Feel Free to Reach Out!</h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl md:text-3xl text-center">Socials</p>
        <ul className="text-xs md:text-xl flex flex-row gap-2 items-center">
          <li>
            <a href="mailto:sahilchhabar7@gmail.com" target='_blank'>
              <MdEmail className="text-base sm:text-lg md:text-2xl"  />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sahil-chhatbar-2b888523a/" target='_blank'>
              <CiLinkedin className="text-base sm:text-lg md:text-3xl" />
            </a>
          </li>
          <li>
            <a href='https://github.com/SahilChhatbar' target='_blank'>
              <FaGithub className="text-base sm:text-lg md:text-2xl" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_sahil0703?igsh=OXQ4eHBxd3F1MGRx" target='_blank'>
              <FaInstagram className="text-base sm:text-lg md:text-2xl" />
            </a>
          </li>
        </ul>
        </div>
        <button
          className="button-gradient hidden md:block absolute bottom-4 right-4 p-3 bg-white text-black rounded-3xl shadow-lg hover:opacity-85 duration-300 hover:scale-105 md:text-xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
        <a href='#'>🢁</a>  
        </button>
      </div>
  )
}

export default Footer
