import React from "react";
import paper from "../assets/paper.png";
import team from "../assets/team.svg";
import gate from "../assets/gate.svg";
import vector1 from "../assets/vector.svg";
import vector2 from "../assets/vector2.svg";
import vector3 from "../assets/vector3.svg";
import { useNavigate } from 'react-router-dom'

const AboutTeam = () => {
  const navigate = useNavigate()
  return (
    <div className="relative pt-[70px] w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 md:px-16 py-12">
      {/* Sticky Note */}
      <div className="absolute top-6 left-4 sm:top-10 sm:left-10 md:left-16 transform -rotate-3 z-30">
        <img
          src={paper}
          alt="Note paper"
          className="w-[140px] sm:w-[220px] md:w-[360px] lg:w-[420px] drop-shadow-md"
        />
      </div>

      {/* India Gate */}
      <div className="absolute left-2 bottom-6 sm:left-6 sm:bottom-10 md:left-16 md:bottom-20 z-0 opacity-90">
        <img
          src={gate}
          alt="India Gate"
          className="w-[150px] sm:w-[220px] md:w-[300px] lg:w-[380px]"
        />
      </div>

      {/* Team Section */}
      <div className="flex flex-col items-center md:items-end w-full md:w-[60%] mt-32 md:mt-20 z-40">
        <div className="relative flex justify-center md:justify-end w-full">
          <img
            src={team}
            alt="Team Silhouettes"
            className="w-[320px] sm:w-[400px] md:w-[480px] lg:w-[550px] object-contain transition-all duration-300"
          />

          {/* Labels + Arrows */}
          {/* Film Makers */}
          <div className="absolute -top-20 sm:-top-24 md:-top-20 left-[25%] sm:left-[30%] md:left-[35%] text-start">
            <p className="text-[23px] sm:text-[27px] md:text-2xl italic text-[#0F3255] font-island">
              Film Makers
            </p>
            <img
              src={vector3}
              alt="Arrow"
              className="w-[60px] sm:w-[90px] md:w-[120px] mx-auto"
            />
          </div>

          {/* Branding Experts */}
          <div className="absolute top-30 sm:top-32 md:top-36 -left-3 sm:left-0 md:-left-30  lg:-left-25 xl:left-20 text-start">
            <img
              src={vector1}
              alt="Arrow"
              className="w-[50px] sm:w-[90px] md:w-[120px] mx-auto"
            />
            <p className="text-[23px] sm:text-[27px] md:text-2xl italic text-[#0F3255] font-island whitespace-nowrap">
              Branding Experts
            </p>
          </div>

          {/* Art Curators */}
          <div className="absolute -top-15 sm:-top-8 md:-top-10 right-0 sm:right-4 md:-right-30 text-end">
            <p className="text-[23px] sm:text-[27px] md:text-2xl italic text-[#0F3255] font-island whitespace-nowrap">
              Art Curators
            </p>
            <img
              src={vector2}
              alt="Arrow"
              className="w-10 sm:w-[60px] md:w-[100px] mx-auto"
            />
          </div>
        </div>

        {/* Bottom Text + Button */}
        <div className="text-center mt-10 md:mt-14">
          <p className="text-[15px] sm:text-[17px] md:text-[19px] text-[#1e1e1e] italic mb-4 font-halant max-w-[320px] sm:max-w-[400px] md:max-w-[500px]">
            Take a closer look at the stories V bring to life.
          </p>
          <button
            onClick={() => {
              navigate("/portfolio");
            }}
            className="bg-[#e45a2c] hover:bg-[#cf4d1f] text-white px-5 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition font-halant"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
