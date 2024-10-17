import React from "react";

const Frame3 = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-violet-700">
      <div
        className="relative h-[75vh] w-[70vw]  bg-cover bg-center md:h-[65vh] md:w-[65vw] sm:h-[55vh] sm:w-[55vw] p-6 md:p-4 sm:p-2"
        style={{
          backgroundImage: `url(${require("./backgroundremove.png")})`, // Assuming backgroundremove.png is located here
          backgroundSize: "cover", // To ensure the image covers the entire div
          backgroundPosition: "center", // To center the image
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-6 p-4 sm:space-y-4 sm:p-2 overflow-y-auto h-full w-full">
          <div className="overflow-y-auto  overflow-x-auto max-h-[100%] p-2 ">
            <div>
              <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-center">
                About Us
              </h1>
            </div>
            <div>
              <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold text-center">
                Empowering Careers, Connecting Futures!!
              </h1>
            </div>
            <div>
              <p className="text-lg md:text-base sm:text-sm text-center m-3">
                Welcome to Hirers, a dynamic platform committed to reshaping the
                employment landscape in India. At Hirers, we believe in the
                transformative power of meaningful employment, where careers are
                not just jobs but paths to personal and professional
                fulfillment.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-3xl md:text-2xl sm:text-xl text-center m-1">
                #Our Mission
              </h2>
            </div>
            <div>
              <p className="text-lg md:text-base sm:text-sm text-center m-3">
                "To revolutionize the job search and recruitment process in
                India by connecting job seekers with employers, fostering
                inclusive growth, and contributing to sustainable development."
              </p>
            </div>
            <div>
              <h2 className="font-bold text-3xl md:text-2xl sm:text-xl text-center m-1">
                #Our Vision
              </h2>
            </div>
            <div>
              <p className="text-lg md:text-base sm:text-sm text-center m-3">
                "To create a future where every individual, regardless of
                background, has access to meaningful employment and to be a
                catalyst for positive change and development in India."
              </p>
            </div>
            <div className="text-center">
              <p className="text-lg md:text-base sm:text-sm">
                Hirers is more than a job portal; it's a movement dedicated to
                building careers, fostering sustainability, and contributing to
                the revolution of a prosperous India. Whether you are a job
                seeker ready to embark on a new journey or an employer seeking
                exceptional talent, Hirers is your gateway to opportunities that
                matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
