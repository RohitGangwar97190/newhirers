import React from "react";

const Navbar2 = ({ value }) => {
  return (
    <div
      className=" text-white flex justify-between items-center mx-auto"
      style={{
        width: "100%",
        height: "59px",
        backgroundColor: "rgba(57, 50, 133, 0.9333)",
      }}
    >
      <div className="flex items-center ">
        <img
          src="https://s3-alpha-sig.figma.com/img/02aa/cbce/8d3d4b9f72f47e199d6e8d096a898f7e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FuKbw2ZjfH5US2hwfpXXvZWGmKhLtXPgZRtSATfYo4XlSnGNQ8EAac992~fe9swXy-Zvo3P6~BWpL4Op681uK78JDL840hV3Rn2whqQIkAQG5u9tI5zKpqXuxzBEppOsHEGfi~c934t0V9ynSRtOgbVxTJFnwSs3Rz-Ly-nZFZOjrtbjDAeIQ7CCz3ZgMfnd3uCyXZHhdE1lr2uEjEsro-1iKEmNWtJ4gUkIWv1UraCOqT8RNqK1em5hXWk460E9xNWQEFuQrzfm3kvKAcyf71Wf0CLZYyNxiTVL8oLpvO-y-loIlYtXX0E8xLiilE4TxLRqJrZx7acPpwiadzAIYQ__"
          alt="logo"
          style={{
            width: "58px",
            height: "58px",
            gap: "0px",
            borderRadius: "10px 0px 0px 0px",
            opacity: "0px",
            border: "1px solid rgba(0, 0, 0, 1)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        />
      </div>

      {value === "hire" && (
        <div className="flex flex-col top-4 pr-4 text-right font-semibold">
          <span>Looking for hiring?</span>
          <span className="text-left text-black">Click Here</span>
        </div>
      )}

      {value === "job" && (
        <div className="flex flex-col top-4 pr-4 text-right font-semibold">
          <span>Looking for a job?</span>
          <span className="text-left text-black">Click Here</span>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
