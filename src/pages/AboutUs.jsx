import React from "react";
import circle from "../assets/circle.png";
import mount from "../assets/mount.png";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";

const AboutUs = () => {
  return (
    <div className="w-full  pt-[70px] min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-16  relative overflow-hidden">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <h2 className="text-[#0F3255] text-2xl sm:text-3xl md:text-4xl font-halant font-semibold">
          A montage of familiar faces and names.
        </h2>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-md font-halant leading-relaxed text-center">
          Some stories come from the biggest names. <br />
          Others begin with bold, rising voices. <br />
          We've been fortunate to walk alongside both – listening, creating,
          and building stories that matter.
        </p>

        {/* Stats Frames */}
   <div className="relative flex justify-center md:justify-start mt-6">
  {/* Frame 1 */}
  <div className="transform -rotate-6 z-30 -mt-4">
    <img
      src={frame1}
      alt="Projects"
      className="w-[100px] sm:w-[120px] md:w-[200px]"
    />
  </div>

  {/* Frame 2 */}
  <div className="transform rotate-3 -ml-12 sm:-ml-14 md:-ml-20 -mt-6 z-20">
    <img
      src={frame2}
      alt="Clients"
      className="w-[100px] sm:w-[120px] md:w-[200px]"
    />
  </div>

  {/* Frame 3 */}
  <div className="transform rotate-[8deg] -ml-12 sm:-ml-14 md:-ml-20 -mt-8 z-10">
    <img
      src={frame3}
      alt="Team"
      className="w-[100px] sm:w-[120px] md:w-[200px]"
    />
  </div>
</div>


      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0 flex flex-col items-center relative">
        {/* Handwritten Text */}
        <p className="text-[#0F3255] text-[18px] sm:text-[20px] md:text-5xl word-spacing: 4px;
 italic font-island text-center leading-relaxed mb-10 px-2">
          Every project is more than just a brief - <br />
          it's a new chapter waiting to be written. <br />
          Together, we've crafted tales that inspire, <br />
          connect, and endure.
        </p>

        {/* Circle & Mountain */}
        <div className="relative flex items-center justify-center">
          <img
            src={circle}
            alt="Circle Design"
            className="w-[280px] sm:w-[340px] md:w-[420px] opacity-90"
          />
          <img
            src={mount}
            alt="Mountain"
            className="absolute bottom-0 w-[200px] sm:w-[260px] md:w-[320px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
