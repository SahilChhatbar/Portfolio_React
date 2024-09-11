import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react'
import me1 from "../../assets/11.jpg";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  const handleMenuToggle = () => {
    openMenu(!menu);
    setShowmenu(!showMenu);
  };

  return (
    <nav id= "#Nav" className="flex flex-wrap justify-between md:items-center text-#f5f5f5 px-10 pt-6 md:px-20">
     <span className="flex gap-3 items-center text-2xl md:text-3xl font-bold tracking-wide md:mr-40"><span className="ml-4"><img className="card w-10 md:w-12 md:ml-0 md:mt-1" src={me1} alt="pic"/></span>Sahil Chhatbar</span>
      <ul className={`${menu ? "block" : "hidden"} ma-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 md:ml-auto`}>
        <a href='#About'><li className="text-xl transition-all duration-300 p-1 md:p-0">About</li></a>
        <a href='#Experience'><li className="text-xl transition-all duration-300 p-1 md:p-0">Experience</li></a>
        <a href='#Projects'><li className="text-xl transition-all duration-300 p-1 md:p-0">Projects</li></a>
        <a href='#Footer'><li className="text-xl transition-all duration-300 p-1 md:p-0">Contact</li></a>
      </ul>
      {showMenu ? (
        <span><RiMenu2Line 
          size={30} 
          className="md:hidden absolute right-10 top-6 transition-all duration-300" 
          onClick={handleMenuToggle}
        /></span>
      ) : (
       <span> <RiCloseLine 
          size={30} 
          className="md:hidden absolute right-10 top-6 transition-all duration-300" 
          onClick={handleMenuToggle}
        /></span>
      )}
    </nav>
  )
}

export default Navbar;
