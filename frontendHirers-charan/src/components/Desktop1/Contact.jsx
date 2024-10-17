import React from 'react'

const Contact = () => {
  return (
    <div className=' flex sm:flex-row w-[100vw] h-[100vh] mx  flex-col'>
       <div className='sm:w-[40vw] w-[100vw] h-[100vh] mx-auto my-auto'>
        <div>
            <h1 className='text-blue-700 sm:text-[200%] text-[300%]  mt-7 text-center font-bold'>Contact Us!!</h1>
            <center>
            <img className="flex justify-center h-[55vh]" src="/contact.png"></img>
            </center>
           
        </div>
        <div className='text-black sm:text-[150%] text-[100%]  sm:mt-5 m-5'>
            we're here to help! give us a call or send us an email.we strive to respond to all inquiries within 24 hours on business days.we're happy to assist you with any questions you may have.
        </div>
       </div>
       <div className='bg-purple-200 sm:w-[40vw] sm:h-[80vh] h-[80vh]  mx-auto my-auto w-screen '>
        <h1 className=' mt-6 font-bold  text-[200%] text-blue-600 text-center '>Request a Call Back</h1>
        <form className='flex flex-col items-center justify-center'>
    <input className="m-6 rounded-3xl sm:w-[25vw] w-[60vw] h-[5vh] text-2xl text-black font-semibold p-5" type="text" placeholder="Your name" />
    <input className="m-6 rounded-3xl sm:w-[25vw] w-[60vw]  h-[5vh] text-2xl  text-black font-semibold p-5" type="number" placeholder="Mobile" />
    <input  className="m-6 rounded-3xl sm:w-[25vw] w-[60vw]  h-[5vh] text-2xl  text-black font-semibold p-5" type="email"  placeholder="Email" /> 
    <textarea  className=" mx-6 sm:w-[25vw] w-[60vw]  rounded-3xl  min-h-[18vh]  text-black font-semibold text-2xl p-5" placeholder="Write your queries here.."></textarea>
    
        <button className='bg-blue-900 m-6 text-white sm:text-[150%] text-[120%] rounded-3xl px-6 py-2' type="submit">Send Message</button>
    
</form>


       </div>
        
    </div>
  )
}

export default Contact