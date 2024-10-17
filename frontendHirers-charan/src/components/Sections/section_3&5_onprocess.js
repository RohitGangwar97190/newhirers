import React from "react";
import candidatesData from "../../key5.json"; // Adjust the path if necessary

const CandidateCard = ({
  type,
  companyNameAndAddress,
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
  name,
  ageGender,
  address,
  education,
  languages,
  introduction,
  experience,
  workExperience,
  otherSkills,
  viewProfile,
}) => (
  <div
    className="p-4 rounded-2xl shadow-md mb-4 h-72"
    style={{ backgroundColor: "#DFDCF7" }}
  >
    <div className="flex items-start pt-8">
      <img
        src="https://s3-alpha-sig.figma.com/img/ebd2/a8e3/83846d5f61629ed4c42db137d91a99b6?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RnCjn5CC4qxPz0XXMq3r6xHpaYrWGTv3x~rcupOYSlbGHe2X3tFznfKfOEKWUNpNOysybfCysKWzYeuPgpAtZ14Ev6C0M62Mnoa7ufm49c~gdRzujt-09PvQ9q5JYpksWF3ox4dDcsraqDLSmlKMyG25HMiU9PAPBjRxVW66UjmyS24wjPM~iE80pjG094fYc~iZDJrleUeX~a5FhjxwpavbvHgDpDimlplKfBCO8DTeyBPmL0XZxUNSLgFzBx-BzWtb90eMwmUe9w7iUPWde-WQNfyUsJXyyyT9JaBhq8V8nVOACFPWFRY-gaxb-SEubAuT4dAWUMRXWBAQtiunsg__"
        alt="Profile"
        className="rounded-2xl mr-4 h-16 w-16"
      />
      <div className="flex-grow">
        {type === "ADMIN-APPROVALS" ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg">
            <div>
              <p>{companyNameAndAddress}</p>
              <p>{jobTitle}</p>
              <p>{jobLocation}</p>
              <p>{educationQualification}</p>
              <p>{experienceFresher}</p>
              <p>{interviewLocation}</p>
            </div>
            <div>
              <p>{nameAndDesignation}</p>
              <p>{mobileNumber}</p>
              <p>{workType}</p>
              <p>{languagesKnown}</p>
              <p>{salary}</p>
            </div>
            <div>
              <p>{email}</p>
              <p>{workingHours}</p>
              <p>{jobDescription}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg">
            <div>
              <p>{name}</p>
              <p>{ageGender}</p>
              <p>{address}</p>
              <p>{education}</p>
              <p>{experience}</p>
              <p>{otherSkills}</p>
            </div>
            <div>
              <p>{viewProfile}</p>
              <p>{mobileNumber}</p>
              <div className="h-4"></div>
              <p>{languages}</p>
              <p>{workExperience}</p>
            </div>
            <div>
              <div className="h-4"></div>
              <p>{email}</p>
              <div className="h-4"></div>
              <p>{introduction}</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-end ml-4">
        {type === "ADMIN-APPROVALS" ? (
          <>
            <button className="bg-white hover:bg-green-300 text-green-700 font-bold py-1 px-4 rounded-2xl mb-2 h-9 w-36">
              Accept
            </button>
            <button className="bg-white hover:bg-red-300 text-red-700 font-bold py-2 px-4 rounded-2xl h-9 w-36">
              Reject
            </button>
            <button className="bg-white hover:bg-yellow-300 text-yellow-700 font-bold py-2 px-4 rounded-2xl h-9 w-36">
              Edit
            </button>
          </>
        ) : (
          <>
            <button className="bg-white hover:bg-green-300 text-green-700 font-bold py-1 px-4 rounded-2xl mb-2 h-9 w-36">
              Shortlist
            </button>
            <button className="bg-white hover:bg-red-300 text-red-700 font-bold py-2 px-4 rounded-2xl h-9 w-36">
              Reject
            </button>
          </>
        )}
      </div>
    </div>
    <p className="text-gray-500 text-sm text-right mt-9">{appliedDate}</p>
  </div>
);

const Section = ({ type }) => {
  return (
    <div className="p-4 mx-auto">
      <div className="flex items-center justify-between">
        <button className="text-2xl">&larr; Back</button>
        <h1
          className="text-3xl text- from-neutral-600 flex-grow text-center"
          style={{
            color: "rgba(57, 50, 133, 1)",
            fontFamily: "Inter",
            fontWeight: "600",
            fontSize: "28px",
            lineHeight: "33.89px",
          }}
        >
          {type}
        </h1>
        <div className="w-16"></div> {/* Spacer div to balance the layout */}
      </div>
      <div className="mx-24">
        <div
          className="flex text-xl my-4 text-black-400 py-1 rounded-full leading-6 justify-around"
          style={{
            backgroundColor: "#DFDCF7",
            borderRadius: "15px",
            fontFamily: "ABeeZee",
          }}
        >
          <button className="bg-white py-1 px-4 rounded-2xl leading-8">
            All Candidates(00)
          </button>
          <button className="bg-white py-1 px-4 rounded-2xl leading-8">
            Shortlisted(00)
          </button>
          <button className="bg-white py-1 px-4 rounded-2xl leading-8">
            Rejected(00)
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-6">
          {candidatesData.map((candidate, index) => (
            <CandidateCard key={index} type={type} {...candidate} />
          ))}
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex-grow text-center text-xl font-light">
            <span>Show</span>
            <span
              className="mx-2 rounded-2xl py-1 px-3"
              style={{ backgroundColor: "#DFDCF7" }}
            >
              00&rarr;
            </span>
            <span>per page</span>
          </div>

          <div className="flex items-center text-black-600 ">
            <button className=" font-bold text-xl">&larr;</button>
            <span
              className="mx-2  rounded-2xl py-1 px-5 h-8 w-12"
              style={{ backgroundColor: "#DFDCF7" }}
            >
              1
            </span>
            <button className=" font-bold text-xl">&rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
