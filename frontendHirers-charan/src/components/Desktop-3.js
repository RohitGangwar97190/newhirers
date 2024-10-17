import React from "react";
// import { useState, useEffect } from "react";
import HorizontalScroll from "./Desktop1/companys_scroll";
import { auth, googleProvider, facebookProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Desktop3 = () => {
  const companies = [
    "Zomato_logo.png",
    "swiggy.png",
    "rapido.png",
    "paytm.png",
    "Zivame-Logo.png",
    "samsung.png",
    "techmahindra.png",
    "daikin.png",
    "tp.png",
    "policybazaar.jpeg",
    "Bharti_Airtel.png",
    "webvi.png",
  ];
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Sign-In successful: ", user);
      localStorage.setItem("uid", user.uid);
      localStorage.setItem("type", "employee");
      navigate("/Frame-18");
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
        className="flex flex-col bg-white mt-16 mx-5 lg:mx-20 h-auto"
        style={{ fontFamily: "Inter" }}
      >
        {/* Login/SignUp Page */}
        <div className="flex flex-col md:flex-row justify-between mb-11">
          <div className="text-left flex flex-col justify-between">
            <div style={{ color: "#393285" }}>
              <h1 className="text-5xl md:text-7xl font-semibold">
                Powering Your
              </h1>
              <h1 className="text-5xl md:text-7xl font-semibold">
                Hiring Success!!
              </h1>
              <p className="text-xl md:text-2xl mt-2 text-black font-semibold">
                Log in now and experience the future of hiring with Hirers.
              </p>
            </div>

            <div className="text-xl md:text-2xl font-semibold md:block hidden">
              <p>Looking for a Job?</p>
              <button
                className="text-blue-700"
                onClick={() => alert("Button clicked!")}
              >
                Click Here
              </button>
            </div>
          </div>

          {/* Employer LogIn Section */}
          <div className="flex justify-center w-full  md:w-1/3 md:h-2/3 md:mt-0 mr-20 mt-14 h-72 order-3">
            <div
              className=" rounded-2xl shadow-lg w-full md:p-12 p-6"
              style={{ background: "#DFDCF7" }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Employer LogIn/SignUp
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

        {/* for mobile responsive duplicate added where employeer login section is hidden and it will display  */}
        <div className="text-xl md:hidden font-semibold ">
          <p>Looking for a Job?</p>
          <button
            className="text-blue-700"
            onClick={() => alert("Button clicked!")}
          >
            Click Here
          </button>
        </div>

        {/* Companies that hire from us */}
        <div className="text-center mb-6 hidden md:block">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800">
            Companies that hire from us
          </h2>
        </div>
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-center">
          {companies.map((logo, idx) => (
            <div
              key={idx}
              className="w-24 h-24 md:w-32 md:h-32 flex justify-center items-center"
            >
              <img
                src={`/companies logo/${logo}`}
                alt={logo}
                className="object-contain w-full h-full"
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

export default Desktop3;
