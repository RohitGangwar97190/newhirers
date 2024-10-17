import React, { useState } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Desktop4 = () => {
  const uid = localStorage.getItem("uid"); // Retrieving token from localStorage
  const navigate = useNavigate(); // Initialize navigate
  const type = localStorage.getItem("type");
  const [formData, setFormData] = useState({
    uid,
    companyName: "HIRERS",
    yourName: "John Doe",
    resume: null, // Default value for resume
    govtId: null, // Default value for govtId
    video: null, // Default value for video
    companyAddress: "123 GoatStreet", // Default value for company email
    designation: "CEO", // Default value for designation
    mobileNumber: Number("1234567890"), // Default value for mobile number
    email: "abc@gmail.com", // Default value for email
    selectedState: "Andhra Pradesh", // Default value for state
    selectedCity: "Visakhapatnam", // Default value for city
    pincode: "123456", // Default value for pincode
    jobTitle: "Software Developer", // Default value for job title
    jobLocation: "Bangalore", // Default value for job location
    educationQualification: "B.Tech", // Default value for education qualification
    communicationSkill: "English", // Default value for communication skill
    workType: "Full Time", // Default value for work type
    workingHours: "8", // Default value for working hours
    salary: "20000", // Default value for salary
    experienceLevel: "2", // Default value for experience level
    interviewProcess: "2", // Default value for interview process
    interviewLocation: "Bangalore", // Default value for interview location
    interviewTiming: "7", // Default value for interview timing
    profile: null, // Default value for logo
    Description: "Software Developer", // Default value for job description
    PostedDate: "2022-10-06", // Default value for date
    ExpiryDate: "2022-10-11",
    status: "waiting", // Default value for expiry date
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a local URL for the selected file
      const imageUrl = URL.createObjectURL(file);
      console.log("Image URL:", imageUrl);
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0], // Only one file
      });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value);
      }
    });
    try {
      console.log("Form data:", formData);
      const response = await axios.post(
        "http://localhost:5000/postjob",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(" is submitted");
      if (response.status === 200) {
        console.log("Form submitted successfully!");
        // console.log(response.data);
        navigate("/Frame-18"); // Navigate to Section-3
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting the form.");
    }
  };

  return (
    <div className="w-screen overflow-x-hidden ">
      {type === "employee" && (
        <div>
          <div className="bg-blue-700 h-[4vh] w-full flex items-center justify-center font-bold overflow-hidden">
            <h2 className="text-white text-sm xs:text-lg md:text-xl whitespace-nowrap">
              "POST A JOB IN 3 EASY STEPS"{" "}
            </h2>
          </div>
          <div className="hidden sm:flex bg-blue-700 h-[8vh] w-full flex-row justify-evenly items-center overflow-hidden">
            <div className="h-[8vh] w-[18vw] text-white font-bold text-xs sm:text-sm md:text-base flex items-center justify-center whitespace-nowrap">
              1: Submit Job Details{" "}
            </div>
            <div className="h-[8vh] w-[18vw] flex items-center justify-center">
              <img src="/Arrow1.png" className="h-[5vh] w-[10vw]" />
            </div>
            <div className="h-[8vh] w-[18vw] text-white font-bold text-xs sm:text-sm md:text-base flex items-center justify-center whitespace-nowrap">
              2: Select Payment Methods
            </div>
            <div className="h-[8vh] w-[18vw] flex items-center justify-center">
              <img src="/Arrow1.png" className="h-[5vh] w-[10vw]" />
            </div>
            <div className="h-[8vh] w-[18vw] text-white font-bold text-xs sm:text-sm md:text-base flex items-center justify-center whitespace-nowrap">
              3: Job will be Posted after Verification
            </div>
          </div>

          {/* Form to submit data */}
          <div className="  w-full flex mb-10 ">
            <div className="w-full md:w-[65%]   rounded-3xl bg-gray-100">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap bg-white">
                  {/* Company Name */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 bg-purple-200 block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-2xl"
                      placeholder="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Your Name */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Your Name"
                      name="yourName"
                      value={formData.yourName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Company Address */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Company Address"
                      name="companyAddress"
                      value={formData.companyAddress}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Designation */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="tel"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Mobile Number"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="email"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* State */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="State"
                      name="selectedState"
                      value={formData.selectedState}
                      onChange={handleChange}
                    />
                  </div>

                  {/* City */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="City"
                      name="selectedCity"
                      value={formData.selectedCity}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Pincode */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Job Title */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Job Title"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Job Location */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Job Location"
                      name="jobLocation"
                      value={formData.jobLocation}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Education Qualification */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Education Qualification"
                      name="educationQualification"
                      value={formData.educationQualification}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Communication Skill */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Communication Skill"
                      name="communicationSkill"
                      value={formData.communicationSkill}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Work Type */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Work Type"
                      name="workType"
                      value={formData.workType}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Working Hours */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Working Hours"
                      name="workingHours"
                      value={formData.workingHours}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Salary */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Salary"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Experience Level */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Experience Level"
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Interview Process */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Interview Process"
                      name="interviewProcess"
                      value={formData.interviewProcess}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Interview Location */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="text"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Interview Location"
                      name="interviewLocation"
                      value={formData.interviewLocation}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Logo */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="file"
                      name="profile"
                      // className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      onChange={handleFileChange}
                    />
                  </div>

                  {/* Description */}
                  <div className="w-full p-2">
                    <textarea
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Description"
                      name="Description"
                      value={formData.Description}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Posted Date */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="date"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      name="PostedDate"
                      value={formData.PostedDate}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Expiry Date */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="date"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      name="ExpiryDate"
                      value={formData.ExpiryDate}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Status */}
                  <div className="w-full sm:w-1/2 p-2">
                    <input
                      type="hidden"
                      className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                      placeholder="Status"
                      name="status"
                      value="waiting"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit button */}
                  <div className="w-full p-2">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden sm:block md:w-fit">
              <img
                src="/jobform.png"
                alt="Placeholder"
                className="w-full h-[75%] mt-20 "
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Desktop4;
