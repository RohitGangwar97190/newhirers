import React from "react";
import axios from "axios"; // Assuming you'll use Axios for the backend call
// import exp from "constants";

// const stateCityData = {
//   "Andhra Pradesh": ["Amaravati", "Visakhapatnam", "Vijayawada", "Tirupati"],
//   "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tezpur"],
//   Assam: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat"],
//   Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
//   Chhattisgarh: ["Raipur", "Bilaspur", "Durg", "Korba"],
//   Goa: ["Panaji", "Margao", "Mapusa", "Ponda"],
//   Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
//   Haryana: ["Chandigarh", "Gurugram", "Faridabad", "Hisar"],
//   "Himachal Pradesh": ["Shimla", "Dharamshala", "Kullu", "Manali"],
//   Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
//   Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore"],
//   Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam"],
//   "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
//   Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
//   Manipur: ["Imphal", "Thoubal", "Churachandpur", "Kakching"],
//   Meghalaya: ["Shillong", "Tura", "Jowai", "Nongpoh"],
//   Mizoram: ["Aizawl", "Lunglei", "Champhai", "Khawzawl"],
//   Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Wokha"],
//   Odisha: ["Bhubaneswar", "Cuttack", "Berhampur", "Rourkela"],
//   Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
//   Rajasthan: ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
//   Sikkim: ["Gangtok", "Namchi", "Pakyong", "Mangan"],
//   "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
//   Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Khammam"],
//   Tripura: ["Agartala", "Udaipur", "Dharmanagar", "Ambassa"],
//   "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
//   Uttarakhand: ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
//   "West Bengal": ["Kolkata", "Siliguri", "Durgapur", "Howrah"],
//   "Andaman and Nicobar Islands": ["Port Blair", "Havelock", "Neil Island"],
//   Chandigarh: ["Chandigarh"],
//   "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu"],
//   Lakshadweep: ["Kavaratti", "Minicoy", "Amini"],
//   Delhi: ["New Delhi", "Dwarka", "Saket"],
//   Puducherry: ["Puducherry", "Karaikal", "Mahe"],
//   "Jammu and Kashmir": ["Srinagar", "Jammu", "Rajouri", "Anantnag"],
//   Ladakh: ["Leh", "Kargil"],
// };

const Desktop4 = () => {
  const uid = localStorage.getItem("uid");
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const currentDate = new Date().toISOString().split("T")[0]; // Define currentDate

    const formData = {
      uid: uid,
      companyNameAndAddress: "Teja Solutions Inc., Tech Innovators LLC",
      jobTitle: "Software Engineer",
      jobLocation: {
        state: "New York",
        city: "Brooklyn",
        pincode: "11201",
      },
      educationQualification: "M.S. in Computer Science",
      experienceFresher: "3 years", // You might want to check how you define this
      interviewLocation: {
        state: "New York",
        city: "Brooklyn",
        pincode: "11201",
      },
      nameAndDesignation: "Alice Johnson, Recruitment Specialist",
      mobileNumber: "9876543210",
      email: "alice.johnson@techinnovators.com",
      workType: "Remote",
      languagesKnown: "English", // Ensure you have valid data for this
      salary: 80000,
      workingHours: "10am - 6pm",
      jobDescription:
        "Looking for a passionate software engineer to develop innovative solutions.",
      appliedDate: "2024-10-06",
      companyName: "Teja Solutions Inc.",
      organizationName: "Tech Innovators LLC",
      yourName: "Alice Johnson",
      designation: "Recruitment Specialist",
      contactNumber: "9876543210",
      organizationAddress: {
        state: "New York",
        city: "New York City",
        pincode: "10001",
      },
      companyNameHiringFor: "NextGen Tech",
      communicationSkills: "Excellent",
      experienceLevel: "3 years",
      interviewProcess: "In-person",
      interviewTimings: "2pm - 4pm",
      stauts: "waiting",
      posteddate: "2024-10-06",
      expirydate: "2022-10-11",
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/postjob",
        formData
      );
      console.log(response.data); // Handle the response
    } catch (error) {
      console.error("There was an error sending the data!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Desktop4;
