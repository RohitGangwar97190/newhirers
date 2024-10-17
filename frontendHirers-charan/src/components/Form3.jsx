import React, { useState } from "react";

const Form3state = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const stateCityData = {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Dallas", "Austin"],
    "New York": ["New York City", "Buffalo", "Albany"],
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
    <div className="w-full sm:hidden flex">
      <div className="w-full sm:w-1/2 p-2">
        <select
          className="mt-1 block w-full bg-purple-200 px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="">Select State</option>
          {Object.keys(stateCityData).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full sm:w-1/2 p-2">
        <select
          className="mt-1 block w-full bg-purple-200 px-3 py-2 border border-gray-300 rounded-2xl shadow-sm"
          value={selectedCity}
          onChange={handleCityChange}
          disabled={!selectedState}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Form3state;
