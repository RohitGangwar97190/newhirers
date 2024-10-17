import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar1 from "../Sections/Navbar-3&5/navbar1";
// import Section3 from "../Sections/section3";
import Swal from "sweetalert2"
import axios from "axios";
const Frame18 = () => {
  function handleSubmitButton() {

    Swal.fire({
      title: 'Success',
      text: "Thanks for applying on the hirings",
      icon: 'success',
      confirmButtonText: 'OK'
    }).then((result) => {
      
      if (result.isConfirmed) {
        window.location.href = "/Desktop-4";       }
    });
  }
  const type = localStorage.getItem("type");
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [activeJobsCount, setActiveJobsCount] = useState(0);

  // Fetch job data from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Assuming the JWT token is stored in localStorage or from a context provider
        const token = localStorage.getItem("uid");
        console.log("Token:", token);

        const response = await axios.post(
          "http://localhost:5000/getJobById",
          {
            uid: token,
          },
          {
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${token}`, // If token is required for Authorization
            },
          }
        );

        console.log("Response:", response.data);
        const jobs = response.data;
        setJobs(jobs);

        // Handle the response as needed
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const [selectedJobId, setSelectedJobId] = useState(null); // State to hold the selected job ID

  // Function to decode the UID from the JWT token
  // const getUIDFromToken = (token) => {
  //   const payload = JSON.parse(atob(token.split(".")[1]));
  //   return payload.uid; // Assuming 'uid' is stored in the JWT payload
  // };

  const handleCheckResponses = (documentId) => {
    console.log("Check responses for job:", documentId);
     navigate(`/Section-3/${documentId}`); // Navigate to Section3 with jobId
    // Implement API call if needed or navigate to another page
  };

  return (
    <>
      {type === "employee" && (
        <div className="">
          <Navbar1 />
          <div className="bg-white rounded-lg p-3 mt-1 max-h-full">
            {/* Job summary */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-5">
              {/* Manage Job Posting */}
              <div
                className=" flex flex-row justify-between items-center md:flex-row text-center md:text-left px-4 py-4 md:py-0 md:px-8 bg-[#DFDCF7] rounded-lg mt-6 md:mt-0 
                     order-1 md:order-2 md:w-2/3 md:h-28"
                style={{
                  background: "#DFDCF7",
                  borderRadius: "20px",
                }}
              >
                <div>
                  <h2 className="text-lg md:text-3xl font-semibold">
                    Manage Job Posting
                  </h2>
                  <div className="flex flex-row space-x-2 md:space-x-8 md:flex-row mt-4">
                    <div className="text-xs font-semibold md:text-3xl">
                      Your Name
                    </div>
                    <div className="text-xs font-semibold md:text-3xl">
                      Designation
                    </div>
                  </div>
                </div>
                <button
                  className="text-xl md:text-3xl font-semibold m-4 md:mt-0 py-2 px-4 bg-white rounded-lg w-fit"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                  onClick={() => {
                    handleSubmitButton(); 
                    
                  }}
                  
                >
                  
                  Post New Job
                </button>
                
              </div>

              {/* Job Counts */}
              <div
                className="flex space-x-4 w-full md:w-auto justify-center md:justify-start 
                        order-2 md:order-1 mt-6 md:mt-0"
              >
                {/* Jobs Posted */}
                <div className="text-center flex md:block">
                  <div
                    className="text-4xl flex items-center justify-center mx-auto md:ml-9 order-2 md:order-1"
                    style={{
                      width: "87px",
                      height: "63px",
                      background: "#DFDCF7",
                      borderRadius: "20px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {jobs.length}
                  </div>
                  <div className="text-black font-inter text-xl md:text-3xl font-semibold order-1 md:order-2">
                    Jobs Posted
                  </div>
                </div>
                {/* Jobs Active */}
                <div className="text-center pl-4 md:pl-24 text-xl md:text-3xl flex md:block ">
                  <div
                    className="flex items-center justify-center text-4xl mx-auto order-2 md:order-1"
                    style={{
                      width: "87px",
                      height: "63px",
                      background: "#DFDCF7",
                      borderRadius: "20px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {activeJobsCount}
                  </div>
                  <div className="text-black text-left order-1 md:order-2">
                    Jobs Active
                  </div>
                </div>
              </div>
            </div>

            {/* Sort By */}
            <div className="flex flex-row">
            <div
              className="mt-10 font-normal text-xl md:text-2xl md:text-left  w-[80vw]"
              style={{
                fontFamily: "ABeeZee, sans-serif",
                color: "#000000",
              }}
            >
              Sort By:&nbsp;&nbsp;
              <span className="bg-[#DFDCF7] px-2 py-1 rounded-2xl">
                Posted Date &gt;
              </span>
            </div>
            <div className=" flex justify-center w-[20vw]">
  <button className="bg-blue-500 text-white rounded-lg h-[5vh]">Edit Profile</button>
</div>
            </div>

            {/* Job Listings */}
            <div className="w-screen h-full bg-pink-100 ">
              <div>
            {jobs && jobs.length > 0 ? (
  jobs.map((job, index) => (
    <div key={index} className="rounded-2xl flex flex-col md:flex-row justify-between items-left p-4 relative">
      <div className="flex flex-row">
      <div className="space-y-4 md:space-y-8 text-left md:text-left  w-[60vw]">
        <div className="text-2xl font-semibold" style={{ color: "#393285", fontFamily: "Inter, sans-serif" }}>
          {job.companyName}
        </div>
        <div className="flex flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-16 text-black font-normal text-lg md:text-xl">
          <div>Posted on: {job.postedDate || "N/A"}</div>
          <div>Expire on: {job.expiryDate || "N/A"}</div>
          <div>Job Status: {job.status || "N/A"}</div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center space-y-9 font-normal mt-5   gap-6 w-[30vw]">
        <div className="absolute sm:static right-6 bottom-20 text-center">
          <div className="text-lg px-8">Status</div>
          <div className="text-black text-xl bg-white rounded-2xl py-1 px-4">
            {job.status || "N/A"}
          </div>
        </div>
        <button
          className="absolute sm:static right-4 bottom-1 bg-white text-black px-4 py-2 mb-20 rounded-2xl text-xl text-center"
          onClick={() => handleCheckResponses(job.documentId)}
        >
          Check Responses
        </button>
      </div>
    </div>
    </div>
  ))
) : (
  <div>No jobs available</div>
)}

</div>
</div>

          </div>
        </div>
      )}
    </>
  );
};

export default Frame18;
