import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Desktop1/Navbar";

const Temp = () => {
  const [formData, setFormData] = useState({
    name: "sf",
    salary: "33",
    profileImage: null,
    resumePdf: null,
    video: null,
    govtId: null,
    email: "33@c.d",
    gender: "23",
    mobileNumber: "88",
    companyAddress: "123 GoatStreet",
    selectedState: "Andhra Pradesh",
    selectedCity: "Visakhapatnam",
    dob: "",
    workexperience: "2",
    pincode: "123456",
    educationQualification: "B.Tech",
    pastjobexperience: "2",
    language: "English",
    skills: "React, Node, Express",
    status: "waiting",
  });

  // Handle input changes for text, number, and date
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file changes for image, pdf, video, and govtId
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0], // Only one file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    console.log("Form submitted!", formData);
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(
        `Form submitted successfully! \nProfile Image URL: ${
          response.data.profileImageUrl || "Not Uploaded"
        } \nResume URL: ${
          response.data.resumePdfUrl || "Not Uploaded"
        } \nVideo URL: ${
          response.data.videoUrl || "Not Uploaded"
        } \nGovernment ID URL: ${response.data.govtIdUrl || "Not Uploaded"}`
      );
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold mb-4 sm:m-0 ml-3 text-blue-700">
          Fill Your Details to Apply for Job Directly
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="" />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Company Address:</label>
          <input
            type="text"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>State:</label>
          <input
            type="text"
            name="selectedState"
            value={formData.selectedState}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>City:</label>
          <input
            type="text"
            name="selectedCity"
            value={formData.selectedCity}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Work Experience (in years):</label>
          <input
            type="number"
            name="workexperience"
            value={formData.workexperience}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Education Qualification:</label>
          <input
            type="text"
            name="educationQualification"
            value={formData.educationQualification}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Past Job Experience (in years):</label>
          <input
            type="number"
            name="pastjobexperience"
            value={formData.pastjobexperience}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Language:</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Skills:</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Profile Image (Optional):</label>
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <label>Resume (PDF) (Optional):</label>
          <input
            type="file"
            name="resumePdf"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <label>Video (Optional):</label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <label>Government ID (Optional):</label>
          <input
            type="file"
            name="govtId"
            accept="application/pdf,image/*"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Temp;
