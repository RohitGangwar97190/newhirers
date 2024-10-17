import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaFilter } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import Arrow from "../../assets/white-arrow.png";
import { useNavigate } from "react-router-dom";

const Frame10 = ({ applied }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("uid");
  const type = localStorage.getItem("type");
  console.log("af", type);
  const [jobs, setJobs] = useState([]); // State to store jobs
  const [error, setError] = useState(null); // State for error handling
  console.log(applied, "jflk");
  if (applied !== "true") {
    applied = "false";
  }
  useEffect(() => {
    let isMounted = true; // Track if the component is mounted
    const getJobs = async () => {
      try {
        console.log("app", applied);
        const response = await fetch("http://localhost:5000/allJobs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uid: token, apply: applied }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (isMounted) {
          setJobs(data); // Update the state with fetched jobs
        }
      } catch (error) {
        setError("Error fetching jobs.");
        console.error("Error fetching jobs:", error);
      }
    };

    getJobs();

    return () => {
      isMounted = false; // Cleanup on unmount
    };
  }, [token]); // Fetch jobs when the component mounts or token changes

  const handleresponses = (documentId) => {
    console.log("Check responses for job:", documentId);
    navigate(`/Frame-12/${documentId}`); // Navigate to Section3 with jobId
  };

  return (
    <>
      {type === "user" && (
        <div className="container mx-auto p-4">
          {applied === "false" && (
            <div className="text-center text-white bg-[#393285] p-4 rounded-lg mb-8">
              <h2 className="text-2xl font-bold">GET HIRED IN 3 EASY STEPS</h2>
              <div className="flex justify-center items-baseline mt-4">
                <div className="flex flex-col items-center relative">
                  <span>1) Select Job</span>
                </div>
                <div>
                  <img src={Arrow} alt="Arrow" />
                </div>
                <div className="flex flex-col items-center relative">
                  <span>2) Apply by filling basic details</span>
                </div>
                <div>
                  <img src={Arrow} alt="Arrow" />
                </div>
                <div className="flex flex-col items-center">
                  <span>3) Give interview and get hired easily</span>
                </div>
              </div>
            </div>
          )}

          {error && <div className="text-red-500">{error}</div>}

          {applied === "false" && (
            <div className="flex justify-start mb-8 flex-wrap">
              <button className="flex items-center bg-gray-200 text-[#393285] px-4 py-2 rounded-lg mr-2 mb-2">
                <FaFilter /> All categories
              </button>
              <button className="flex items-center bg-gray-200 text-[#393285] px-4 py-2 rounded-lg mr-2 mb-2">
                Location <RiArrowDownSLine />
              </button>
              <button className="flex items-center bg-gray-200 text-[#393285] px-4 py-2 rounded-lg mr-2 mb-2">
                Education <RiArrowDownSLine />
              </button>
              <button className="flex items-center bg-gray-200 text-[#393285] px-4 py-2 rounded-lg mb-2">
                Salary <RiArrowDownSLine />
              </button>
            </div>
          )}

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <div
                key={job.id} // Ensure docid exists
                className="bg-purple-100 p-4 rounded-lg shadow-md w-full"
                onClick={() => handleresponses(job.id)}
              >
                <div className="flex  items-center mb-4">
                  <img
                    className=" h-10 w-10"
                    src={job.profile ? job.profile : "/profile.jpg"}
                    alt="Company Logo"
                    name="profile"
                  />
                  <h3 className=" pl-3 font-semibold text-lg text-[#393285]">
                    {job.designation} &gt;
                    <br />
                    {job.companyName}
                  </h3>
                </div>
                <div className="text-[#393285]">
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 mb-4 h-7 w-7" />
                    {job.jobLocation}
                    {/* Ensure this matches casing in your data */}
                  </p>
                  <p className="flex items-center">
                    <FaRupeeSign className="mr-2 mb-4 h-7 w-7" />
                    {job.salary}
                  </p>
                  <button className="mt-2 bg-white text-[#393285] rounded-full px-3 py-1 border border-[#393285]">
                    {job.Description} {/* Ensure casing matches */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Frame10;
