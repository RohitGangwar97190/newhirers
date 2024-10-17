import React from "react";
import background from "./background.png";
import { useNavigate } from "react-router-dom"; // Import the hook
import Hirers from "./Hirers";
import Cards from "./Cards";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HorizontalScroll from "./companys_scroll";
import Contact from "./Contact";
import Frame3 from "../Frames/Frame-3";
const Cards2 = () => {
  const navigate = useNavigate(); // Initialize the hook

  return (
    <div>
      <Navbar />
      <div
        className="h-screen w-full flex flex-row justify-center items-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <div className="p-2 w-[80%] h-screen ">
          <div className="p-2 flex flex-col justify-center items-center w-full h-1/5 mr-10">
            <h1 className="flex flex-col md:flex-row justify-center items-center font-bold text-purple-800 capitalize text-lg md:text-xl">
              find, apply, and secure
            </h1>
            <h1 className="flex flex-col md:flex-row justify-center items-center font-bold text-purple-800 capitalize text-lg md:text-xl">
              your dream job with <span>hirers in just 2 days!</span>
            </h1>
            <h3 className="capitalize hidden md:block text-lg">
              experience the accelerated journey to your dream career with us
            </h3>
          </div>

          <div className="flex items-center flex-col-reverse lg:flex-row justify-evenly p-6  mb-20 lg:mb-20 lg:h-auto  ">
            {/* Job Seekers Card */}
            <div className="flex flex-col justify-center items-center gap-2 mt-14 lg:mt-0">
              <div className="bg-purple-100 border w-fit h-fit max-h-72 max-w-72 rounded p-2 flex">
                <div className="relative">
                  <img
                    className="relative lg:right-16 lg:bottom-14 xs:bottom-14 xs:right-14 right-8 bottom-8"
                    src="/employer.png"
                    alt="Job seeker"
                    style={{ width: "300px", height: "355px" }}
                  />
                </div>

                <div>
                  <div className="p-1 relative">
                    <h2 className="font-bold text-purple-800 capitalize text-1xl relative lg:right-16">
                      for Employers
                    </h2>
                    <p className="capitalize flex flex-col relative">
                      <span className="relative lg:right-16">
                        Find verified
                      </span>
                      <span className="relative lg:right-16">
                        Hire from a large pool
                      </span>
                      <span className="relative lg:right-16">
                        of filtered candidates!!
                      </span>
                    </p>
                  </div>
                  <div>
                    <picture>
                      <img
                        className="block mr-10 mb-14"
                        src="/Arrow.png"
                        alt="Arrow down"
                        style={{ width: "150px", height: "100px" }}
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <button
                className="flex justify-center items-center w-32 rounded-md px-1 py-1.5 text-white capitalize bg-purple-900"
                onClick={() => navigate("/Desktop-3")} // Navigate to Desktop-3 component
              >
                search job
              </button>
            </div>

            {/* Employers Card */}
            <div className="flex flex-col justify-center items-center gap-2 lg:mt-0 mt-12">
              <div className="bg-purple-100 w-fit h-fit max-h-72 max-w-72 rounded p-2 flex">
                <div>
                  <div className="p-1 relative lg:left-8 left-8">
                    <h2 className="font-bold text-purple-800 capitalize text-xl relative lg:left-16 xs:left-0 overflow-hidden text-ellipsis whitespace-normal break-words">
                      for Job Seekers
                    </h2>
                    <p className="capitalize flex flex-col relative whitespace-normal break-words">
                      <span className="relative lg:left-16 xs:left-0">
                        Get 100% verified
                      </span>
                      <span className="relative lg:left-16 xs:left-0">
                        Job at no cost!!
                      </span>
                    </p>
                  </div>

                  <div>
                    <picture>
                      <img
                        className="ml-10"
                        src="/Arrowupdate1.png"
                        alt="Arrow down"
                        style={{ width: "180px", height: "100px" }}
                      />
                    </picture>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="relative lg:left-20 left-12 xs:mr-10 bottom-20 w-[30%]"
                    src="/jobseekers.png"
                    alt="Employer"
                    style={{ width: "350px", height: "355px" }}
                  />
                </div>
              </div>
              <button
                className="flex justify-center items-center w-32 rounded-md px-1 py-1.5 text-white capitalize bg-purple-900"
                onClick={() => navigate("/Frame-11")} // Navigate to Frame-11 component
              >
                post job
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-[10%] h-[48%] flex flex-col items-start justify-center space-y-4 xs:mb-80 mb-36">
          <img src="/instagramLogo.png" alt="Instagram Logo" />
          <img src="/facebook_logo.png" alt="Facebook Logo" />
          <img src="/instagramLogo.png" alt="Instagram Logo" />
          <img src="/linkedinLogo.png" alt="LinkedIn Logo" />
        </div>
      </div>
      <Frame3 />
      <Cards />
      <Hirers />
      <div></div>
      {/* <AutoPlayMethods /> */}
      <HorizontalScroll data="Our Customers" />
      <Footer />
      <Contact />
    </div>
  );
};

export default Cards2;
