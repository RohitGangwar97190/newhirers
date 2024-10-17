import React from "react";
import HorizontalScroll from "../Desktop1/companys_scroll";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const CompanySection = () => {
  const navigate = useNavigate();
  const jobSeekersData = [
    {
      name: "Divyakant7 Guatam",
      company: "Curefoods",
      location: "Noida sec64",
      image: "/job_seekers.png",
    },
    {
      name: "Divyakant8 Guatam",
      company: "Curefoods",
      location: "Noida sec64",
      image: "/job_seekers.png",
    },
    {
      name: "Divyakant9 Guatam",
      company: "Curefoods",
      location: "Noida sec64",
      image: "/job_seekers.png",
    },
  ];

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Sign-In successful: ", user);
      localStorage.setItem("uid", user.uid);
      localStorage.setItem("type", "user");
      navigate("/Section-4");
      // Section3
    } catch (error) {
      console.error("Error during Google Sign-In: ", error);
      // window.location.href = "/desktop-4";
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      console.log("User Info from Facebook:", user);

      // Accessing additional user details
      console.log("User Display Name:", user.displayName);
      console.log("User Email:", user.email);
      console.log("User Profile Photo URL:", user.photoURL);
    } catch (error) {
      console.error("Error during Facebook login:", error.message);
    }
  };

  return (
    <div>
      <div
        className="flex flex-col bg-white mt-16 mx-5 lg:mx-20 h-auto "
        style={{ fontFamily: "Inter" }}
      >
        {/* Job Section */}
        <div className="flex flex-col md:flex-row justify-between mb-11">
          <div className="text-left flex flex-col justify-between md:pl-14 pt-5">
            <div style={{ color: "#393285" }}>
              <h1 className="text-4xl md:text-7xl font-bold">
                Get Your Job In
              </h1>
              <h1 className="text-4xl md:text-7xl font-bold">48 Hours!!</h1>
              <p className="text-md md:text-lg mt-2 text-black font-semibold">
                Log in now and get your job with Hirers.
              </p>
            </div>

            {/* Desktop View: Looking for hiring? Section */}
            <div className="text-md md:text-lg font-semibold md:block hidden">
              <p>Looking for hiring?</p>
              <button className="text-blue-700" onClick={() => {}}>
                Click Here
              </button>
            </div>
          </div>

          {/* Candidate LogIn Section */}
          <div className="flex justify-center w-full  md:w-1/3 md:h-2/3 md:mt-0 mr-20 mt-14 h-72 order-3">
            <div
              className=" rounded-2xl shadow-lg w-full md:p-12 p-6"
              style={{ background: "#DFDCF7" }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Candidate LogIn/SignUp
              </h2>
              <form className="space-y-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="+91"
                    className="border p-2 rounded-lg w-16 font-semibold md:h-14 text-2xl"
                  />
                  <input
                    type="text"
                    placeholder="Mobile number"
                    className="border p-2 rounded-lg w-full font-semibold md:h-14 text-2xl"
                  />
                </div>
                <button
                  className="text-white p-2 w-full rounded-lg md:h-16 text-3xl"
                  style={{ background: "#393285" }}
                >
                  LogIn
                </button>
              </form>
              <p className="text-center mt-4 font-semibold md:text-xl">
                Click here to login using Google/FB account
              </p>
              <div className="flex justify-center space-x-2 mt-2">
                <img
                  src="/google.png"
                  alt="Google"
                  className="w-8"
                  onClick={handleGoogleSignIn}
                />
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="w-8"
                  onClick={handleFacebookSignIn}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View: Looking for hiring? Section */}
        <div className="text-xl md:hidden font-semibold">
          <p>Looking for hiring?</p>
          <button
            className="text-blue-700"
            onClick={() => alert("Button clicked!")}
          >
            Click Here
          </button>
        </div>

        {/* Selected Candidates Section */}
        <div className="text-center mb-6 hidden md:block">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800">
            Our selected candidates
          </h2>
        </div>

        {/* Cards for Job Seekers */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 pl-4 mt-10 hidden md:grid">
          {jobSeekersData.map((seeker, index) => (
            <div className="relative" key={index}>
              {/* Card with text content */}
              <div
                className="text-xs space-y-4 text-right h-52 w-full pr-3 mt-10 rounded-3xl font-semibold md:text-2xl flex flex-col justify-start pt-8 relative"
                style={{
                  background: "#DFDCF7",
                }}
              >
                <p>{seeker.name}</p>
                <p>{seeker.company}</p>
                <p>{seeker.location}</p>
              </div>

              {/* Image aligned to the left of the text */}
              <img
                src={seeker.image}
                alt="jobseeker"
                className="h-72 md:h-72 w-40 md:w-64 transform absolute -top-12 -left-16"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <HorizontalScroll data="Companies that hire from us" />
      </div>
    </div>
  );
};

export default CompanySection;
