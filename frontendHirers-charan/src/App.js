import React from "react";

import Temp from "./temp";
// Desktop 3 component
import Desktop3 from "./components/Desktop-3";
import Desktop4 from "./components/Desktop4";

import Frame3 from "./components/Frames/Frame-3";
import Frame10 from "./components/Frames/Frame-10";
import Frame11 from "./components/Frames/Frame-11";
import Frame12 from "./components/Frames/Frame-12";
import Frame18 from "./components/Frames/Frame-18";

import Section2 from "./components/Sections/section2";
import Section3 from "./components/Sections/section3";
import Section4 from "./components/Sections/section4";
import Section5 from "./components/Sections/section5";
import Section6 from "./components/Sections/section6";

import PhoneAuth from "./PhoneAuth";
// on going trying to merge section 5 and 51 into one component
// import Section from "./components/section";

// import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards2 from "./components/Desktop1/Cards2"; // Import the Cards2 component

const App = () => {
  return (
    <Router>
      {/* Task -1 */}
      <Routes>
        <Route path="/PhoneAuth" element={<PhoneAuth />} />
        <Route path="/Desktop-1" element={<Cards2 />} />{" "}
        {/* Cards2 as the main component */}
        <Route path="/Desktop-3" element={<Desktop3 />} />{" "}
        {/* Desktop-3 component */}
        <Route path="/Desktop-4" element={<Desktop4 />} />{" "}
        {/* Desktop-4 component */}
        <Route path="/Frame-10" element={<Frame10 />} />{" "}
        {/* Frame-10 component */}
        <Route path="/Frame-11" element={<Frame11 />} />{" "}
        {/* Frame-11 component */}
        <Route path="/Frame-12" element={<Frame12 />} />{" "}
        {/* Frame-12 component */}
        <Route path="/Frame-18" element={<Frame18 />} />{" "}
        {/* Frame-18 component */}
        <Route path="/Section-2" element={<Section2 />} />{" "}
        {/* Section-2 component */}
        <Route path="/Section-3" element={<Section3 />} />{" "}
        {/* Section-3 component */}
        <Route path="/Section-4" element={<Section4 />} />{" "}
        {/* Section-4 component */}
        <Route path="/Section-5" element={<Section5 />} />{" "}
        <Route path="/Section-6" element={<Section6 />} />{" "}
        {/* Section-5 component */}
        <Route path="/Frame-12/:jobId" element={<Frame12 />} />
        <Route path="/Frame-3" element={<Frame3 />} />
        <Route path="/Section-3/:jobId" element={<Section3 />} />
        <Route path="/Section-2/:jobId" element={<Section2 />} />
        <Route path="/" element={<Temp />} />
        {/* Section-5 component */}
      </Routes>
      {/*Frame 4 companys scroll */}
      {/* <HorizontalScroll data="Our Customers" /> */}

      {/* on going process trying to merge section 5 and 51 into one component */}
      {/* <Section /> */}
      {/* <Section type="ADMIN-APPROVALS" />
        <Section type="BPO CUSTOMER CARE - JOB TITLE" /> */}
    </Router>
  );
};

export default App;
