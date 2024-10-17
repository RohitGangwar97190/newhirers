import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[rgba(61,53,133,255)] md:h-[40vh] h-auto w-full'>
      <div className='w-full sm:h-[16vh] h-[10vh] flex flex-row items-center px-4'>
        <div className='sm:flex sm:flex-col items-center text-white hidden md:block'>
          <img className="sm:h-[11vh] h-[8vh] w-[8vw] mx-4" src="hirersLogo.png" alt="Logo" />
        </div>
        <div>
          <p className='text-white sm:text-[2.5vw] text-[4vw]'>HIRERS</p>
          <div className='flex flex-row space-x-4'>
            <img className='w-[4vw] h-[4vh] hidden md:block' src="linkedinLogo.png" alt="LinkedIn" />
            <img className='w-[4vw] h-[4vh] hidden md:block' src="facebook_logo.png" alt="Facebook" />
            <img className='w-[4vw] h-[4vh] hidden md:block' src="instagramLogo.png" alt="Instagram" />
          </div>
        </div>

        <div className='flex justify-end w-full pr-6'>
          <p className='text-white md:text-[2.5vw] text-[3vw] sm:font-semibold font-bold text-right'>"Aapke Career ka Perfect Partner!"</p>
        </div>
      </div>

      <hr />

      <div className='flex md:flex-row flex-col text-white w-full '>
        <div className='flex flex-row  w-[50%] justify-evenly'>
          <div className='m-4'>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className='m-4'>
            <p>Post Job</p>
            <p>Search Job</p>
          </div>
          <div className='m-4'>
            <p>For Queries-:</p>
            <p>hirers.co.in@gmail.com</p>
          </div>
        </div>

        <div className='flex flex-row w-[50%] justify-evenly'>
          <div className='m-4'>
            <p>Mobile-:</p>
            <p>+917424947309</p>
            <p>+919306238429</p>
            <p>+919545653199</p>
          </div>
          <div className='m-4'>
            <p>Follow On-:</p>
            <div className='flex '>
              <img className='w-[3vw] h-[4vh]' src="instagramLogo.png" alt="Instagram" />
              <img className='w-[3vw] h-[4vh]' src="facebook_logo.png" alt="Facebook" />
              <img className='w-[3vw] h-[4vh]' src="linkedinLogo.png" alt="LinkedIn" />
            </div>
          </div>
          <div className='m-4'>
            <p>Address-:</p>
            <p>DTU (formerly known as DCE),</p>
            <p>New Delhi 110042</p>
          </div>
        </div>
      </div>

      <div className='flex justify-end w-full mt-6 px-6'>
        <p className='text-white text-[1vw]'>2023 by Hirers - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer;
