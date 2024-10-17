import React, { useEffect, useState } from "react";
import axios from "axios";

// Example Navbar1 component
const Navbar1 = () => (
  <nav className="bg-[#393285] p-4 text-white">
    <h1 className="text-lg">Navbar</h1>
  </nav>
);

const CandidateCard = ({
  id,
  companyName,
  companyAddress,
  jobTitle,
  jobLocation,
  educationQualification,
  experienceFresher,
  interviewLocation,
  nameAndDesignation,
  mobileNumber,
  email,
  workType,
  languagesKnown,
  salary,
  workingHours,
  jobDescription,
  appliedDate,
  status,
  updateJobStatus,
  profile, // Pass updateJobStatus as a prop
}) => (
  <div className="p-4 rounded-2xl shadow-md mb-4 bg-[#DFDCF7]">
    <div className="relative flex flex-col md:flex-row items-start">
      <img
        src={profile ? profile : "/profile.jpg"} // Adjusted fallback path
        alt="Profile"
        className="rounded-2xl mb-4 md:mr-4 h-12 w-12 md:h-16 md:w-16"
      />
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
          <div className="space-y-2">
            <p>
              {companyName},{companyAddress}
            </p>
            <p>{jobTitle}</p>
            <p>{jobLocation}</p>
            <p>{educationQualification}</p>
            <p>{experienceFresher}</p>
            <p>{interviewLocation}</p>
          </div>
          <div className="space-y-2">
            <p>{nameAndDesignation}</p>
            <p>{mobileNumber}</p>
            <p>{workType}</p>
            <p>{languagesKnown}</p>
            <p>{salary}</p>
          </div>
          <div className="space-y-2">
            <p>{email}</p>
            <p>{workingHours}</p>
            <p>{jobDescription}</p>
          </div>
        </div>
      </div>
      <div className="absolute right-2 md:top-1 top-52 flex flex-col items-end space-y-2 mt-4 md:mt-0 md:ml-4">
        {status !== "accepted" && (
          <button
            className="bg-white hover:bg-green-300 text-green-700 font-bold py-1 px-4 rounded-2xl h-9 w-36 md:py-1 md:px-4 md:h-9 md:w-36 sm:py-0.5 sm:px-2 sm:h-8 sm:w-28"
            onClick={() => updateJobStatus(id, "accepted")}
          >
            Accept
          </button>
        )}
        {status === "accepted" && (
          <button className="bg-green-300 text-green-700 font-bold py-1 px-4 rounded-2xl h-9 w-36 md:py-1 md:px-4 md:h-9 md:w-36 sm:py-0.5 sm:px-2 sm:h-8 sm:w-28 cursor-not-allowed">
            Accepted
          </button>
        )}
        {status !== "rejected" && (
          <button
            className="bg-white hover:bg-red-300 text-red-700 font-bold py-1 px-4 rounded-2xl h-9 w-36 md:py-1 md:px-4 md:h-9 md:w-36 sm:py-0.5 sm:px-2 sm:h-8 sm:w-28"
            onClick={() => updateJobStatus(id, "rejected")}
          >
            Reject
          </button>
        )}
        {status === "rejected" && (
          <button className="bg-red-300  text-red-700 font-bold py-1 px-4 rounded-2xl h-9 w-36 md:py-1 md:px-4 md:h-9 md:w-36 sm:py-0.5 sm:px-2 sm:h-8 sm:w-28 cursor-not-allowed">
            Rejected
          </button>
        )}
        <button
          className={`bg-white ${
            status === "accepted"
              ? "text-green-700 hover:bg-green-300"
              : status === "rejected"
              ? "text-red-700 hover:bg-red-300"
              : "text-yellow-700 hover:bg-yellow-300"
          } font-bold py-2 px-4 rounded-2xl h-9 w-36 md:py-2 md:px-4 md:h-9 md:w-36 sm:py-0.5 sm:px-2 sm:h-8 sm:w-28`}
          disabled={status === "accepted" || status === "rejected"}
        >
          Edit
        </button>
      </div>
    </div>
    <p className="text-gray-500 text-sm text-right mt-4">{appliedDate}</p>
  </div>
);

const Section5 = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);

  const handleShowAll = () => {
    setFilteredCandidates(candidates);
  };

  const handleShowApproved = () => {
    const approvedCandidates = candidates.filter(
      (candidate) => candidate.status === "accepted"
    );
    setFilteredCandidates(approvedCandidates);
  };

  const handleShowRejected = () => {
    const rejectedCandidates = candidates.filter(
      (candidate) => candidate.status === "rejected"
    );
    setFilteredCandidates(rejectedCandidates);
  };

  useEffect(() => {
    setFilteredCandidates(candidates); // Update state when candidates change
  }, [candidates]);

  useEffect(() => {
    const fetchCandidates = () => {
      axios
        .post("http://localhost:5000/getJobs")
        .then((response) => {
          console.log("Candidates fetched:", response.data);
          setCandidates(response.data);
        })
        .catch((err) => {
          console.error("Error fetching candidates:", err);
          setError(
            err.response
              ? err.response.data.error
              : "Failed to fetch candidates."
          );
        })
        .finally(() => setLoading(false));
    };

    fetchCandidates();
  }, []);

  const updateJobStatus = (jobId, status) => {
    axios
      .patch(`http://localhost:5000/updateJob/${jobId}`, { status })
      .then((response) => {
        console.log(response.data);
        setCandidates(
          candidates.map((candidate) =>
            candidate.id === jobId ? { ...candidate, status } : candidate
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

  if (loading) {
    return <div>Loading...</div>; // You can also use a spinner component here
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  const approvedCount = candidates.filter(
    (candidate) => candidate.status === "accepted"
  ).length;
  const rejectedCount = candidates.filter(
    (candidate) => candidate.status === "rejected"
  ).length;

  return (
    <>
      <Navbar1 />
      <div className="p-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <button className="text-xl mb-4 hidden md:block">&larr; Back</button>
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
            ADMIN-APPROVALS
          </h1>
          <div className="w-16"></div> {/* Spacer div to balance the layout */}
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
              All Jobs({candidates.length})
            </button>
            <button
              className="bg-white py-1 px-4 rounded-2xl leading-8"
              onClick={handleShowApproved}
            >
              Approved({approvedCount})
            </button>
            <button
              className="bg-white py-1 px-4 rounded-2xl leading-8"
              onClick={handleShowRejected}
            >
              Rejected({rejectedCount})
            </button>
          </div>
          <div className="flex flex-row justify-between items-center mt-4">
            <div className="text-center text-xl font-light">
              <span>Show</span>
              <span className="mx-2 rounded-2xl py-1 px-3 bg-[#DFDCF7]">
                00&rarr;
              </span>
              <span>per page</span>
            </div>

            <div className="flex items-center text-black-600">
              <button className="font-bold text-xl">&larr;</button>
              <span className="mx-2 rounded-2xl py-1 px-5 h-8 w-12 bg-[#DFDCF7]">
                1
              </span>
              <button className="font-bold text-xl">&rarr;</button>
            </div>
          </div>
          <div>
            {filteredCandidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                {...candidate}
                updateJobStatus={updateJobStatus}
              />
            ))}
          </div>
          <div className="flex flex-row justify-between items-center mt-4">
            <div className="text-center text-xl font-light">
              <span>Show</span>
              <span className="mx-2 rounded-2xl py-1 px-3 bg-[#DFDCF7]">
                00&rarr;
              </span>
              <span>per page</span>
            </div>

            <div className="flex items-center text-black-600">
              <button className="font-bold text-xl">&larr;</button>
              <span className="mx-2 rounded-2xl py-1 px-5 h-8 w-12 bg-[#DFDCF7]">
                1
              </span>
              <button className="font-bold text-xl">&rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
