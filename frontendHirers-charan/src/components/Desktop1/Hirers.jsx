import React from 'react'

const Hirers = () => {
  return (
    <div>
      <div className='bg-blue-800 w-screen h-full py-2 pb-6'>
        <div>
          <h1 className='font-bold text-center text-white sm:text-2xl md:text-3xl lg:text-4xl'>"Why HIRERS?"</h1>
        </div>

       
        <div className='hidden sm:flex sm:flex-row mt-10 flex-col justify-evenly'>
        
          <div className='sm:px-4 lg:text-3xl sm:text-1xl text-white w-fit h-fit sm:w-[15vw] sm:h-[100vh]'>
            <div className='text-center text-1xl lg:text-2xl sm:text-1xl'>
              <center>
                <img className="h-[18vh] sm:rounded-none rounded-full" src="/job listing.png" alt="Verified Job Listings" />
              </center>
              Verified Job Listings
            </div>
            <div className='text-1xl text-white lg:text-[50%] md:text-[90%] sm:text-[80%] p-3 sm:block hidden'>
              At Hirers, we prioritize authenticity. All job postings on our platform are thoroughly verified, ensuring that job seekers have access to legitimate and high-quality opportunities within the BPO sector.
            </div>
          </div>

          <div>
            <img className="sm:w-[10vw] mt-32" src="/jobListing_white-arrow.png" alt="Arrow" />
          </div>

          <div className='sm:px-4 lg:text-3xl sm:text-1xl text-white w-fit h-fit sm:w-[15vw] sm:h-[100vh] flex flex-col sm:justify-start justify-end'>
            <div className='text-center text-1xl lg:text-2xl sm:text-1xl'>
              <img className="h-[18vh]" src="/candidate screening.png" alt="Candidate Screening" />
              Rigorous Candidate Screening
            </div>
            <div className='text-1xl text-white lg:text-[50%] md:text-[90%] sm:text-[80%] p-3 sm:block hidden'>
            Our rigorous candidate screening process incorporates advanced AI-powered assessments to evaluate communication skills and other relevant competencies. This ensures employers receive only the most qualified candidates, making the recruitment process more efficient
            </div>
          </div>

          <div className="sm:w-[10vw] mt-32">
            <img src="/jobListing_white-arrow.png" alt="Arrow" />
          </div>

          <div className='sm:px-4 lg:text-3xl sm:text-1xl text-white w-fit h-fit sm:w-[15vw] sm:h-[100vh]'>
            <div className='text-center text-1xl lg:text-2xl sm:text-1xl'>
              <center>
                <img className="h-[18vh] sm:rounded-none rounded-full" src="/job placement.png" alt="Job Placement" />
              </center>
              Swift Job Placement
            </div>
            <div className='text-1xl text-white lg:text-[50%] md:text-[90%] sm:text-[80%] p-3 sm:block hidden'>
            Hirers is dedicated to making job placement swift and hassle-free. Our streamlined processes and intelligent matching algorithm connect job seekers with suitable employers quickly, reducing the time and effort typically associated with job searches and hiring.
            </div>
          </div>

          <div className="sm:w-[10vw] mt-32">
            <img src="/jobListing_white-arrow.png" alt="Arrow" />
          </div>

          <div className='sm:px-4 lg:text-3xl sm:text-1xl text-white w-fit h-fit sm:w-[15vw] sm:h-[100vh]'>
            <div className='text-center text-1xl lg:text-2xl sm:text-1xl'>
              <center>
                <img className="h-[18vh] sm:rounded-none rounded-full" src="/customer suport.png" alt="Customer Care" />
              </center>
              Responsive Customer Care Team
            </div>
            <div className='text-1xl text-white lg:text-[50%] md:text-[90%] sm:text-[80%] p-3 sm:block hidden'>
            Our dedicated customer care team is always ready to assist both job seekers and employers. Whether you need help with the application process, have questions about job postings, or require support in any aspect of recruitment, our responsive team ensures a smooth and positive experience on our platform.
            </div>
          </div>
        </div>

       
        <div className='sm:hidden relative w-[90vw] h-[90vw] mx-auto mt-10'>
        
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <img className="h-[10vh] w-[10vh] rounded-full" src="/job listing.png" alt="Verified Job Listings" />
            <p className='text-center text-white text-[1.5vw]'>Verified Job Listings</p>
          </div>
         

          <div className="absolute top-1/4 left-3/4">
            <img className="h-[10vh] w-[10vh] rounded-full" src="/candidate screening.png" alt="Candidate Screening" />
            <p className='text-center text-white text-[1.5vw]'>Rigorous Candidate Screening</p>
          </div>
         

          <div className="absolute bottom-1/4 transform -translate-x-1/2" style={{ left: '20%',  bottom:'40%'}} >
            <img className="h-[10vh] w-[10vh] rounded-full" src="/job placement.png" alt="Job Placement" />
            <p className='text-center text-white text-[1.5vw]'>Swift Job Placement</p>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2" style={{ right: "9%"}} >
            <img className="h-[10vh] w-[10vh] rounded-full" src="/customer suport.png" alt="Customer Care" />
            <p className='text-center text-white  text-[1.5vw]'>Responsive Customer Care Team</p>
          </div>

          
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 rotate-[0deg]">
            <img className="h-[7vh] w-[10vw]" src="/jobListing_white-arrow.png" alt="Arrow" />
          </div>
          <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 rotate-[10deg] mb-10">
            <img className="h-[7vh] w-[10vw]" src="/jobListing_white-arrow.png" alt="Arrow" />
          </div>
          <div className="absolute bottom-1/4 left-3/4  mt-10  transform -translate-x-1/2 rotate-[120deg]">
            <img className="h-[7vh] w-[10vw]" src="/jobListing_white-arrow.png" alt="Arrow" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 rotate-[280deg]">
            <img className="h-[7vh] w-[10vw]" src="/jobListing_white-arrow.png" alt="Arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hirers

