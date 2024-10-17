import React, { useState } from "react";
import Form3state from "./Form3";
const stateCityData = {
  "Andhra Pradesh": ["Amaravati", "Visakhapatnam", "Vijayawada", "Tirupati"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tezpur"],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
  Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai", "Khawzawl"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Wokha"],
  Odisha: ["Bhubaneswar", "Cuttack", "Berhampur", "Rourkela"],
  Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
  Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
  Sikkim: ["Gangtok", "Namchi", "Pakyong", "Mangan"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Khammam"],
  Tripura: ["Agartala", "Udaipur", "Dharmanagar", "Ambassa"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
  Uttarakhand: ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
};
const Desktop4 = () => {
  // const [logo, setLogo] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [fileName, setFileName] = useState("update logo image");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("logo");
    }
  };
  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(stateCityData[state] || []);
  };
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };
  return (
    <div className="w-screen overflow-x-hidden ">
      <div className="bg-blue-700 h-[4vh] w-full flex items-center justify-center font-bold overflow-hidden">
        <h2 className="text-white text-sm xs:text-lg md:text-xl whitespace-nowrap">
          "POST A JOB IN 3 EASY STEPS"{" "}
        </h2>
      </div>
      <div className="hidden sm:flex bg-blue-700 h-[8vh]  w-full flex-row justify-evenly items-center overflow-hidden">
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
      
      <div className="  w-full flex mb-10 ">
        <div className="w-full md:w-[65%]   rounded-3xl bg-gray-100">
          <h2 className="text-2xl font-bold ">fill Job Detail</h2>
          <form>
            <div className="flex flex-wrap bg-white">
              <div className="w-full sm:w-1/2 p-2 ">
                <label className="block text-sm font-medium text-blue-700 "></label>
                <input
                  type="text"
                  className="mt-1 bg-purple-200  block w-full px-3 py-2 border border-gray-300 shadow-sm rounded-2xl "
                  placeholder="Company Name"
                  value="HIRERS"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700"></label>
                <input
                  type="text"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder=" Your Name"
                  value="John Doe"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="email"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="Company address"
                  value="dfsd@g.co"
                />{" "}
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="text"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="Designation"
                  value="CEO"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="Number"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="Mobile Number"
                  value="1234567890"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="email"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="Email"
                  value="abc@gmail.com"
                />{" "}
              </div>
              <div className="w-full flex">
                <div className="w-full sm:w-1/2 p-2">
                  <select
                    className="mt-1 block w-full bg-purple-200  px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                    value={selectedState}
                    onChange={handleStateChange}
                  >
                    <option value="">Select State</option>
                    {Object.keys(stateCityData).map((state) => (
                      <option key={state} value={state}>
                        {state}{" "}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full sm:w-1/2 p-2">
                  <select
                    className="mt-1 block w-full bg-purple-200  px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                    disabled={!selectedState}
                    placeholder="Select City"
                  >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>{" "}
                </div>{" "}
              </div>
              <div className="sm:w-1/2  w-full p-2">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="text"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="Pincode"
                  value="123456"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700"></label>
                <input
                  type="text"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="job title"
                  value="Software Developer"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700"></label>{" "}
                <input
                  type="text"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="job location"
                  value="Bangalore"
                />
              </div>
              <div className="sm:hidden flex">
                <input
                  type="checkbox"
                  className=""
                  placeholder="same as above"
                />
                same as above
              </div>
              <Form3state />
              {/* <div className="sm:w-1/2  sm:hidden flex w-full p-2">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="text"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="Pincode"
                  value="123456"
                />{" "}
              </div> */}
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="textt"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="Education qualification required"
                  value="B.Tech"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700"></label>
                <input
                  type="text"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="Required commincation skill"
                  value="English"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="text"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="Work Type"
                  value="Full Time"
                />{" "}
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="number"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="working hours"
                  value="8"
                />{" "}
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700"></label>
                <input
                  type="number"
                  className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="salary"
                  value="20000"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="number"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="experience level"
                  value="2"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2 sm:hidden flex">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="number"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="interview Process"
                  value="2"
                />{" "}
              </div>
              <div className="w-full sm:w-1/2 p-2 sm:hidden flex">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="text"
                  className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="interview location"
                  value="Bangalore"
                />{" "}
              </div>
              <div className="sm:hidden flex">
                <input
                  type="checkbox"
                  className=""
                  placeholder="same as above"
                  value="Bangalore"
                />
                same as Job location{" "}
              </div>
              <div className="w-full sm:w-1/2 p-2 hidden sm:flex">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="text"
                  placeholder="interview location"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  value="Bangalore"
                />
              </div>
              <div className="w-full sm:w-1/2 p-2 sm:hidden flex">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <input
                  type="text"
                  placeholder="interview timing"
                  className="mt-1 block bg-purple-200 w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                />{" "}
              </div>
              <Form3state />
              <div className="sm:w-1/2  sm:hidden flex w-full p-2">
                <label className="block text-sm font-medium text-gray-700"></label>
                <input
                  type="text"
                  className="mt-1 block bg-purple-200  w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
                  placeholder="Pincode"
                />
              </div>
              {/* upload image */}
              {/* <div className="w-full sm:w-1/2 p-2">
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                </label>
                <div className="relative mt-1">
                  <label
                    className="block w-full bg-purple-200 px-3 py-2 border border-gray-300 rounded-2xl shadow-sm text-gray-500 cursor-pointer"
                    htmlFor="fileUpload"
                  >
                    {fileName}
                  </label>
                  <input
                    id="fileUpload"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                    placeholder="logo image"
                  />
                </div>
              </div> */}
              <div className="w-full ">
                <label></label>
                <textarea
                  className="min-h-24 w-full bg-purple-200"
                  placeholder="Job description"
                  value="Job description"
                />{" "}
              </div>{" "}
            </div>
            <div className="w-full p-2 flex flex-row">
              <div className=" w-[30vw] sm:flex hidden">
                <p>Need Help? Contact Us</p>
              </div>
              <div className="w-[30vw] flex justify-end">
                <button
                  className="w-[50vw] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  onClick="()=>{}"
                >
                  Submit
                </button>
              </div>{" "}
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
  );
};
export default Desktop4;
