import React, { useState } from "react";
import Navbar from "../Desktop1/Navbar";
import { useParams } from "react-router-dom";
const Section2 = () => {
  // Define initial form data
  const { jobId } = useParams();
  const token = localStorage.getItem("uid");
  console.log(token);
  const [formData, setFormData] = useState({
    id: jobId, // You might want to set this dynamically
    companyName: "HIRERS",
    yourName: "John Doe",
    companyAddress: "123 GoatStreet",
    designation: "CEO",
    mobileNumber: "1234567890",
    email: "abc@gmail.com",
    selectedState: "Andhra Pradesh",
    selectedCity: "Visakhapatnam",
    pincode: "123456",
    jobTitle: "Software Developer",
    jobLocation: "Bangalore",
    educationQualification: "B.Tech",
    communicationSkill: "English",
    workType: "Full Time",
    workingHours: "8",
    salary: "20000",
    experienceLevel: "2",
    interviewProcess: "2",
    interviewLocation: "Bangalore",
    interviewTiming: "7",
    logo: "https://www.example.com/logo.png",
    Description: "Software Developer",
    PostedDate: "2022-10-06",
    ExpiryDate: "2022-10-11",
    status: "waiting",
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!", formData);

    // Here you can collect form data or send it to your API
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold mb-4 sm:m-0 ml-3 text-blue-700">
          Fill Your Details to Apply for Job Directly
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row mt-5">
        <div className="relative w-full sm:w-1/4 flex justify-center sm:justify-end p-7">
          <div>
            <img
              className="h-[15vh] w-[15vh] sm:h-[20vh] sm:w-[20vh] rounded-full object-cover"
              src={formData.logo}
              alt="Company Logo"
            />
          </div>
        </div>
        <div className="w-full sm:w-3/4 ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row sm:justify-start sm:items-start gap-8 mb-6 justify-center items-center">
              <input
                type="text"
                name="yourName"
                value={formData.yourName}
                onChange={handleChange}
                placeholder="Your Full name*"
                className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[15%]"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID*"
                className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[15%]"
                required
              />
              <select
                name="selectedState"
                value={formData.selectedState}
                onChange={handleChange}
                className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[15%]"
                required
              >
                <option value="" disabled>
                  State*
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-start sm:items-start gap-8 mb-6 justify-center items-center">
              <input
                type="number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="Mobile Number*"
                className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[15%]"
                required
              />
              <input
                type="text"
                name="companyAddress"
                value={formData.companyAddress}
                onChange={handleChange}
                placeholder="Company Address"
                className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%]"
              />
            </div>
            {/* Add more input fields as needed */}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full py-2 px-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Section2;
