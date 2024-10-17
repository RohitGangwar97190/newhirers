import React from "react";

const HorizontalScroll = ({ logos }) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-6 py-4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            className="w-24 h-24 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
