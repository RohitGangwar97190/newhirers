import React from 'react';
import { FaAngleRight } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="bg-[rgba(61,53,133,255)] overflow-x-hidden ">
  

<div className="container flex justify-between items-center ">
  <div>
  <img className='sm:h-[11vh] h-[5vh] rounded-xl' src="/hirersLogo.png"></img>
  </div>

  <div className='flex gap-2 items-center'>
    <div className='text-white text-1xl sm:text-3xl px-2 sm:px-10'>Search Job</div>
    <div className="bg-white text-black text-[1.5vw] h-[4vh] sm:h-[5vh]  flex items-center px-4 py-2">
      Your Profile
      <FaAngleRight className="ml-2" />
    </div>
    <div>
      <img className='sm:w-[4vw] sm:h-[6vh]  h-[3vh] rounded-2xl mr-4' src='/profile-img.webp' alt='Profile' />
      </div>
  </div>
</div>

     
    </nav>
  );
}

export default Navbar;

