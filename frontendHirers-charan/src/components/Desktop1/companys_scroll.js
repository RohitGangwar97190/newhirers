import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlayMethods({ data }) {
  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow: 5, // Display 5 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  // Array of image logos
  const logos = [
    "companies logo/ambar skytech.png",
    "companies logo/Bharti_Airtel.png",
    "companies logo/daikin.png",
    "companies logo/paytm.png",
    "companies logo/policybazaar.jpeg",
    "companies logo/rapido.png",
    "companies logo/samsung.png",
    "companies logo/swiggy.png",
    "companies logo/techmahindra.png",
    "companies logo/tp.png",
    "companies logo/webvi.png",
    "companies logo/Zivame-Logo.png",
    "companies logo/Zomato_logo.png",
  ];

  return (
    <div className="slider-container md:block">
      <h2
        className="text-3xl text-center font-semibold md:text-5xl"
        style={{ color: "#393285" }}
      >
        {data}
      </h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <img
              className="px-2 w-96 h-52 object-contain"
              src={process.env.PUBLIC_URL + "/" + logo}
              alt={`Company logo ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlayMethods;
