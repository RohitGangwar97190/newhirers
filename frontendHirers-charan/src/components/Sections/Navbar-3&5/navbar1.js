import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar1 = () => {
  const navigate = useNavigate();
  const handleProf = () => {
    navigate("/Desktop-4");
  };
  const frame18 = () => {
    navigate("/Frame-18");
  };
  return (
    <div
      className="text-white flex justify-between items-center mx-auto"
      style={{
        width: "100%",
        height: "99px",
        border: "1px solid #393285",
        boxShadow: "inset 0 0 1px 1px rgba(34, 59, 201, 0.1)",
        backgroundColor: "rgba(57, 50, 133, 0.9333)",
      }}
    >
      <div className="flex items-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/02aa/cbce/8d3d4b9f72f47e199d6e8d096a898f7e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FuKbw2ZjfH5US2hwfpXXvZWGmKhLtXPgZRtSATfYo4XlSnGNQ8EAac992~fe9swXy-Zvo3P6~BWpL4Op681uK78JDL840hV3Rn2whqQIkAQG5u9tI5zKpqXuxzBEppOsHEGfi~c934t0V9ynSRtOgbVxTJFnwSs3Rz-Ly-nZFZOjrtbjDAeIQ7CCz3ZgMfnd3uCyXZHhdE1lr2uEjEsro-1iKEmNWtJ4gUkIWv1UraCOqT8RNqK1em5hXWk460E9xNWQEFuQrzfm3kvKAcyf71Wf0CLZYyNxiTVL8oLpvO-y-loIlYtXX0E8xLiilE4TxLRqJrZx7acPpwiadzAIYQ__"
          alt="logo"
          style={{
            width: "98px",
            height: "99px",
            borderRadius: "10px 0px 0px 0px",
            border: "1px solid rgba(0, 0, 0, 1)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        />
      </div>
      <div className="flex pr-3">
        <span
          className="md:w-44 md:h-10 md:pr-3 pt-2"
          style={{
            fontFamily: "ABeeZee, sans-serif",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "37.82px",
            color: "#FFFFFF",
          }}
          onClick={frame18}
        >
          Dashboard
        </span>

        <span className="md:hidden flex md:pr-3 pt-1">
          <img
            src="/menu.png" // Corrected path to the image in the public folder
            alt="menu icon"
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </span>

        {/* Post Job */}
        <span
          className="hidden md:block pr-3 pt-1"
          style={{
            width: "141px",
            height: "45px",
            fontFamily: "ABeeZee, sans-serif",
            fontWeight: 400,
            fontSize: "32px",
            color: "#FFFFFF",
          }}
          onClick={handleProf}
        >
          Post Job
        </span>

        {/* Your Profile */}
        <div
          className="hidden md:flex items-center "
          style={{
            width: "220px",
            height: "49px",
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <span
            style={{
              height: "25px",
              fontFamily: "ABeeZee, sans-serif",
              fontWeight: 400,
              fontSize: "32px",
              lineHeight: "35.82px",
              color: "#393285",
              paddingLeft: "20px",
            }}
          >
            Your Profile &gt;
          </span>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/7b36/94d1/8e40d769c6323dd74deb6ea7ed04a7f5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UW~VpmMynyZ7RE9ROuHSWWPitCs8pQE7TPgLbUemV5gB5xQczlDheJZIIFolnw66~ldLk2alX5lbCwQDCy2p8h3-I12MCR0UC7kVdAANSKeYL5~uoClwEez8TBNRLDqZGCpoXNYTuKec40hz8JULQNPsvCfGIH5yxBn3mN-5rZ0-jugxU3mWX2Wk5WYyXl8XsPNtWWCxeF~3ShfXYvn~loF8l0au3BSdkaKWBv0WGmgWj7M9pG1Z9kY92H~KMmw262brYSYmuenGKEIWERAE9FyLBbqFfr37f4U9DQo~wRatVchRkeSGnhjFZUVjU-0L6oHJK1qE9VM9Q6sP534egA__"
          alt="profile icon"
          className="hidden md:flex mx-3"
          style={{
            width: "55px",
            height: "49px",
            borderRadius: "20px",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar1;
