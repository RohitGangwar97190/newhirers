import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { useParams } from "react-router-dom";
import Navbar from "../Desktop1/Navbar";
import axios from "axios";
function Section4() {
  const token = localStorage.getItem("uid");
  const type = localStorage.getItem("type");

  const [formData, setFormData] = useState({
    uid: token,
    name: "",
    profile: null,
    email: "",
    gender: "",
    mobileNumber: Number(""),
    currentAddress: "",
    selectedState: "",
    selectedCity: "",
    dob: "",
    workexperience: Number(""),
    pincode: Number(""),
    education: "B.Tech",
    pastjobexperience: Number("2"),
    language: "English",
    status: "waiting",
  });
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/updateprofiledata",
          {
            uid: token,
          },
          {
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${token}`, // Uncomment if authorization is needed
            },
          }
        );

        console.log("Response:", response.data);

        const profileData = response.data;
        if (!response.data.message) {
          setFormData(profileData); // Update the form data state
        }
      } catch (err) {
        console.log("Error fetching profile data:", err);
      }
    };

    if (token) {
      fetchProfileData(); // Call the function once the token is available
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a local URL for the selected file
      const imageUrl = URL.createObjectURL(file);
      console.log("Image URL:", imageUrl);
      // setFormData((prevData) => ({
      //   ...prevData,
      //   profile: imageUrl, // Update the profile image URL
      // }));
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0], // Only one file
      });
    }
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
          response.data.profileUrl || "Not Uploaded"
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
      {type === "user" && (
        <div>
          <Navbar />
          <div className="flex justify-center">
            <h2 className="text-4xl font-bold mb-4 sm:m-0 ml-3 text-blue-700">
              Fill Your Details to Apply for Job Directly
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row mt-5">
              <div className="relative w-full sm:w-1/4 flex justify-center sm:justify-end p-7">
                <div>
                  <img
                    className="h-[15vh] w-[15vh] sm:h-[20vh] sm:w-[20vh] rounded-full object-cover"
                    src={formData.profile ? formData.profile : "/profile.jpg"} // Adjusted fallback path
                    alt="Company Logo"
                    name="profile"
                  />
                  <input
                    type="file"
                    name="profile"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="w-full sm:w-3/4 ">
                <div className="flex flex-col sm:flex-row sm:justify-start sm:items-start gap-8 mb-2 justify-center items-center">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
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
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[15%]"
                    required
                  >
                    <option value="" disabled>
                      Select Gender*
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-start sm:items-start gap-8 mb-2 justify-center items-center">
                  <input
                    type="number"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Mobile Number*"
                    className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[15%]"
                    required
                    minLength="10"
                    maxLength="10"
                    pattern="\d{10}"
                  />
                  <input
                    type="text"
                    name="currentAddress"
                    value={formData.currentAddress}
                    onChange={handleChange}
                    placeholder="Current Address"
                    className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[35%]"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-start sm:items-start gap-8 mb-2 justify-center items-center">
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="Date of Birth*"
                    className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[15%]"
                    required
                  />
                  <input
                    type="text"
                    name="selectedState"
                    value={formData.selectedState}
                    onChange={handleChange}
                    placeholder="State*"
                    className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[15%]"
                    required
                  />
                  <input
                    type="text"
                    name="selectedCity"
                    value={formData.selectedCity}
                    onChange={handleChange}
                    placeholder="City*"
                    className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[15%]"
                    required
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-start sm:items-start gap-8 mb-2 justify-center items-center">
                  <input
                    type="text"
                    name="workexperience"
                    value={formData.workexperience}
                    onChange={handleChange}
                    placeholder="Work Experience"
                    className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[15%]"
                  />
                  <input
                    type="number"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[15%]"
                  />

                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    placeholder="Education Qualification"
                    className="placeholder-black bg-[rgba(191,194,228,255)] font-bold text-1xl text-center text-black border rounded-full py-2 w-[60%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[15%]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-full py-2 px-4"
                 
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Section4;
