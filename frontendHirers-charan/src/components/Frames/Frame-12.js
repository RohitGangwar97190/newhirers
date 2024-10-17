import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Frame12() {
  const type = localStorage.getItem("type");
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handledoc = (jobId) => {
    console.log("Check responses for job:", jobId);
    alert("Applied Successfully", jobId);
    navigate(`/Section-2/${jobId}`); // Navigate to Section3 with jobId
  };
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/jobs/${jobId}`);
        console.log("asdkf"); // Ensure this URL is correct
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        data.id = jobId;
        setJobData(data);
        console.log("jobMala", jobData);
      } catch (err) {
        console.error("Error fetching job data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobData();
  }, [jobId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!jobData) return <div>No job data available.</div>;

  return (
    <>
      {type === "user" && (
        <div className="h-screen bg-white overflow-hidden flex flex-col">
          {/* Header Section */}
          <div className="bg-blue-800 text-white p-4 flex-1 md:flex-none md:py-6 md:px-8 flex flex-row">
            <div className="w-[80vw]">
            <h2 className="text-xl md:text-2xl font-bold">
              {jobData.jobTitle}
            </h2>
            <p className="mt-1 text-sm md:text-base">{jobData.companyName}</p>
            <p className="mt-1 text-sm md:text-base">{jobData.jobLocation}</p>
            <p className="mt-1 text-sm md:text-base">{jobData.salary}</p>
            <p className="mt-1 text-sm md:text-base">{jobData.id}</p>
            </div>
           
            <div className=" flex items-start justify-end w-[20vw]">
            <button
              className="bg-white text-indigo-900 mt-4 py-2 px-4 rounded text-sm md:text-base"
              onClick={() => handledoc(jobData.id)}
            >
              Apply Now
            </button>
            </div>
          </div>

          <div className="p-4 flex-1 md:flex-2 md:px-8 md:py-6 flex flex-col justify-around">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex-1 mb-4 md:mb-0">
                <div className=" w-[35vw]">
                <h3 className="font-bold  text-lg md:text-2xl ">
                  Job Details
                </h3>
                </div>
                
                <div className="  grid grid-cols-2 gap-2 text-xs md:text-sm mt-2 w-[65vw]">
                  <div className="">
                  <div className="m-2 text-1xl">Education</div>
                  <div className="m-2 font-semibold text-2xl xs:text-1xl">{jobData.educationQualification}</div> {/* Updated */}
                  <div className="m-2 text-1xl">Experience</div>
                  <div className="m-2 font-semibold text-2xl">{jobData.experienceLevel}</div> {/* Updated */}
                  <div className="m-2 text-1xl">Address</div>
                  <div className="m-2 font-semibold text-lg md:text-xl lg:text-2xl ">{jobData.companyAddress}</div> {/* Updated */}
                  </div>
                  <div className="">
                  <div className="m-2 text-1xl">Gender</div>
                  <div className="m-2 font-semibold text-lg md:text-xl lg:text-2xl ">{jobData.Gender}Not mentioned in employee </div>{" "}
                  {/* Ensure this key exists */}
                  
                  <div className="m-2 text-1xl">Communication Skills</div>
                  <div className="m-2 font-semibold text-2xl">{jobData.communicationSkill}</div> {/* Updated */}
                  </div>
                  
                </div>
              </div>

              <div className="flex-1 ">
                <h3 className="font-bold text-gray-700 text-lg md:text-xl text-center">
                  Similar Jobs
                </h3>
                <div className="mt-2 text-xs md:text-sm text-gray-500 space-y-2 text-center">
      
  <div>
  <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
  {jobData.similarJobs?.length > 0 ? (
                    jobData.similarJobs.map((job, index) => (
                      <div key={index} className="flex justify-between">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                          {job}
                        </button>
        <span>&gt;</span>
      </div>
    ))
  ) : (
    <div>No similar jobs found</div>
  )}
  </button>
</div>
  
</div>
              </div>
            </div>

            <div className="">
              <h3 className="font-bold text-gray-700 text-lg md:text-xl">
                Job Description
              </h3>
              <p className="mt-2 text-xs md:text-sm text-gray-600">
                {jobData.Description || "No description available."}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Frame12;
