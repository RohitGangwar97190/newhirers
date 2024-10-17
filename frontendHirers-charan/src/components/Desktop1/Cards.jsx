import React from "react";

const Cards = () => {
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center w-full">
          <h1 className="text-4xl pt-10 text-purple-700 font-bold text-center">
            How to start with Hirers!
          </h1>
        </div>
        <div className="flex  justify-center items-center xl:flex-row flex-col">
          <div className="h-fit xl:w-[22vw] sm:w-[75vw]  bg-[rgba(191,194,228,255)] m-6 rounded-2xl  ">
            <div className="flex justify-center items-center mt-10 ">
              <img src="/jobsearch.png" className="h-[200%] w-[55%] " />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-[190%]  font-bold text-purple-600">
                Post/Search a Job
              </p>
            </div>

            <p className="text-[120%] text-black font-bold pl-3 mt-4">
              For Job seekers:
            </p>
            <p className="pl-2 text-[120%]  mt-2">
              Look around the verified listing jobs at our platform
            </p>
            <p className="text-[120%] font-bold text-black mt-4 pl-3">
              For Employee:
            </p>
            <p className="pl-2 text-[120%] mt-2">
              Fill your required details for Candidates in 2-3 minuts
            </p>
          </div>
          <div className="h-fit xl:w-[22vw] sm:w-[75vw]  bg-[rgba(191,194,228,255)] m-6 rounded-2xl  ">
            <div className="flex justify-center items-center mt-10 ">
              <img src="/verified.png" className="h-[120px]" />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-[190%]  font-bold text-purple-600">
                Post/Search a Job
              </p>
            </div>

            <p className="text-[120%] text-black font-bold pl-3 mt-4">
              For Job seekers:
            </p>
            <p className="pl-2 text-[120%]  mt-2">
              Look around the verified listing jobs at our platform
            </p>
            <p className="text-[120%] font-bold text-black mt-4 pl-3">
              For Employee:
            </p>
            <p className="pl-2 text-[120%] mt-2">
              Fill your required details for Candidates in 2-3 minuts
            </p>
          </div>
          <div className="h-fit xl:w-[22vw] sm:w-[75vw]  bg-[rgba(191,194,228,255)]  ml-6 mr-6 rounded-2xl">
            <div className="flex justify-center items-center mt-10  ">
              <img src="/result.png" className="h-[200%] w-[55%] " />
            </div>
            <div className="flex justify-center items-center">
              <p className="text-[190%]  font-bold text-purple-600">
                Post/Search a Job
              </p>
            </div>

            <p className="text-[120%] text-black font-bold pl-3 mt-4">
              For Job seekers:
            </p>
            <p className="pl-2 text-[120%]  mt-2">
              Get connect to HR's directly.
            </p>
            <p className="text-[120%] font-bold text-black mt-4 pl-3">
              For Employee:
            </p>
            <p className="pl-2 text-[120%] mt-2">
              Get calls from relevant candidates or Call them directly from our
              candidates database.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
