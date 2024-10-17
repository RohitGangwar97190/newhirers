import React, { useEffect, useState } from "react";
import Navbar1 from "./Navbar-3&5/navbar1";
import axios from "axios";
import { useParams } from "react-router-dom";

const CandidateCard = ({
  id,
  name,
  resume,
  dob,
  profile,
  gender,
  mobileNumber,
  email,
  currentAddress,
  education,
  language,
  video,
  pastjobexperience,
  // work_experience,
  skills,
  logo,
  // appliedDate,
  status,
  updateJobStatus,
  selectedCity,
}) => (
  <div
    className="p-4 rounded-2xl shadow-md mb-4 bg-[#DFDCF7]"
    style={{ backgroundColor: "#DFDCF7" }}
  >
    <div className="relative flex flex-col md:flex-row items-start  ">
     
      
      <img
        src={profile ? profile : "/profile.jpg"} // Adjusted fallback path
        alt="Profile"
        className="rounded-2xl mb-4 md:mr-4 h-16 w-16 object-fill"
      />
      <div className="flex  w-full  justify-between">
        <div className=" sm:flex-row flex-col flex justify-between  w-[40vw]">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg"> */}
          <div className="space-y-2 ">
            <p>{name}</p>
            <p>{`${dob} years old, ${gender}`}</p>
            
           
            <p>{currentAddress}</p>
            <p>{education}</p>
            <p>{selectedCity}</p>
            {/* <p>{experience_fresher}</p> */}
            <p>{skills}</p>
          </div>
          <div className="space-y-2 ">
            {/* <p>{logo}</p> */}
            <a href={resume} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
            <p>{mobileNumber}</p>

            <p>{language}</p>
            <p></p>
            <p>{pastjobexperience}</p>
          </div>
          <div className="space-y-2 ">
            <p>{email}</p>
            <a href={video} target="_blank" rel="noopener noreferrer">
              Intro Video
            </a>{" "}
          </div>
        {/* </div> */}
        </div>
      
        <div className="flex flex-col gap-5 lg:mr-24 md:mr-10">
  {/* Shortlist Button */}
  {status !== "shortlisted" && (
    <button
      className="bg-green-500  hover:bg-green-300  font-bold py-1 px-4 rounded-2xl h-9 w-full md:w-36 sm:w-28 transition-all duration-300 ease-in-out"
      onClick={() => updateJobStatus(id, "shortlisted")}
    >
      Shortlist
    </button>
  )}
  {status === "shortlisted" && (
    <button className="bg-green-300  font-bold py-1 px-4 rounded-2xl h-9 w-full md:w-36 sm:w-28 cursor-not-allowed">
      Shortlisted
    </button>
  )}
  
  {/* Reject Button */}
  {status !== "rejected" && (
    <button
      className="bg-red-600 hover:bg-red-300 text-black font-bold py-1 px-4 rounded-2xl h-9 w-full md:w-36 sm:w-28 transition-all duration-300 ease-in-out"
      onClick={() => updateJobStatus(id, "rejected")}
    >
      Reject
    </button>
  )}
  {status === "rejected" && (
    <button className="bg-red-300 text-red-700 font-bold py-1 px-4 rounded-2xl h-9 w-full md:w-36 sm:w-28 cursor-not-allowed">
      Rejected
    </button>
  )}
</div>

</div>

    </div>
    {/* <p className="text-gray-500 text-sm text-right mt-4">{appliedDate}</p> */}
  </div>
);

const Section3 = () => {
  const type = localStorage.getItem("type");
  const [candidatesData, setCandidatesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCandidates, setFilteredCandidates] = useState(candidatesData);
  const { jobId } = useParams();

  const handleShowAll = () => {
    setFilteredCandidates(candidatesData);
  };

  const handleShowApproved = () => {
    const approvedCandidates = candidatesData.filter(
      (candidate) => candidate.status === "shortlisted"
    );
    setFilteredCandidates(approvedCandidates);
  };

  const handleShowRejected = () => {
    const rejectedCandidates = candidatesData.filter(
      (candidate) => candidate.status === "rejected"
    );
    setFilteredCandidates(rejectedCandidates);
  };

  useEffect(() => {
    setFilteredCandidates(candidatesData); // Update state when candidates change
  }, [candidatesData]);

  const updateJobStatus = (candidateId, status) => {
    axios
      .patch(`http://localhost:5000/profileReview/${jobId}/${candidateId}`, {
        status,
      })
      .then((response) => {
        console.log(response.data);
        setCandidatesData(
          candidatesData.map((candidate) =>
            candidate.id === candidateId ? { ...candidate, status } : candidate
          )
        );
      })
      .catch((error) => {
        console.error("Error updating job status:", error);
        setError(
          error.response
            ? error.response.data.error
            : "Failed to update job status."
        );
      });
  };

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/getApplicants",
          {
            jobId, // Replace with the actual jobId
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Applicants data:", response.data);
        setCandidatesData(response.data); // Assuming you have a state to hold applicants data
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [jobId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const approvedCount = candidatesData.filter(
    (candidate) => candidate.status === "shortlisted"
  ).length;
  const rejectedCount = candidatesData.filter(
    (candidate) => candidate.status === "rejected"
  ).length;

  return (
    <>
      {type === "employee" && (
        <div>
          <Navbar1 />
          <div className="p-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <button className="text-xl mb-4 hidden md:block">
                &larr; Back
              </button>
              <h1
                className="text-3xl flex-grow text-center"
                style={{
                  color: "rgba(57, 50, 133, 1)",
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "28px",
                  lineHeight: "33.89px",
                }}
              >
                BPO CUSTOMER CARE - JOB TITLE
              </h1>
              <div className="w-16"></div>
            </div>
            <div className="mx-4 md:mx-24">
              <div
                className="flex flex-wrap text-xl my-4 text-black-400 py-1 rounded-full leading-6 justify-around"
                style={{
                  backgroundColor: "#DFDCF7",
                  borderRadius: "15px",
                  fontFamily: "ABeeZee",
                }}
              >
                <button
                  className="bg-white py-1 px-4 rounded-2xl leading-8 hidden md:block"
                  onClick={handleShowAll}
                >
                  All Candidates({candidatesData.length})
                </button>

                <button
                  className="bg-white py-1 px-4 rounded-2xl leading-8"
                  onClick={handleShowApproved}
                >
                  Shortlisted({approvedCount})
                </button>
                <button
                  className="bg-white py-1 px-4 rounded-2xl leading-8"
                  onClick={handleShowRejected}
                >
                  Rejected({rejectedCount})
                </button>
              </div>
              <div className="grid grid-cols-1 gap-6 mt-6">
                {filteredCandidates.map((candidate) => (
                  <CandidateCard
                    key={candidate.id}
                    {...candidate}
                    updateJobStatus={updateJobStatus}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Section3;
