import React from "react";
import video from "../assets/video.png";
import desgin2 from "../assets/design2.png";
import paperButton from "../assets/paperButton.png";
import arrow from "../assets/parrow.png";
import cam from "../assets/Camera.svg";

const Portfolio = () => {
  return (
    <div className="w-full  pt-[70px] h-screen px-4    overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <h1 className="font-halant text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          The Highlight Reel
        </h1>
        <p className="font-instrument text-sm sm:text-base md:text-lg text-gray-700">
          Watch the magic we’ve captured.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative flex items-center justify-center mt-10 md:mt-20">
        {/* Left camera icon */}
        <img
          src={cam}
          alt="camera"
          className=" lg:top-0  top-60 md:block absolute left-4 md:left-10 lg:left-20 w-[70px] md:w-[110px] lg:w-[150px]"
        />

        {/* Main video container */}
        <div className="relative flex items-center justify-center w-[92%] sm:w-[85%] md:w-[70%] lg:w-[680px]">
          {/* Left arrow button */}
          <div className="absolute lg:left-12 md:left-10 sm:left-10 left-7 -translate-x-1/2 flex items-center justify-center">
            <div className="relative w-[35px] sm:w-[50px] md:w-[50px] lg:w-[60px]">
              <img src={paperButton} alt="paper" className="w-full" />
              <img
                src={arrow}
                alt="arrow"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 sm:w-[30px] md:w-[35px]"
              />
            </div>
          </div>

          {/* Main video image */}
          <img
            src={video}
            alt="videoimage"
            className="w-full rounded-lg shadow-lg"
          />

          {/* Right arrow button */}
          <div className="absolute lg:right-12 md:right-10 sm:right-10 right-7  translate-x-1/2 flex items-center justify-center">
            <div className="relative w-[35px] sm:w-[50px] md:w-[50px] lg:w-[60px]">
              <img src={paperButton} alt="paper" className="w-full" />
              <img
                src={arrow}
                alt="arrow"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 sm:w-[30px] md:w-[35px] rotate-180"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Design */}
      <div className=" absolute flex bottom-0 place-self-end">
        <img
          src={desgin2}
          alt="design"
          className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
        />
      </div>
    </div>
  );
};

export default Portfolio;
