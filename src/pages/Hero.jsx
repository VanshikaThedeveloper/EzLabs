import React from "react";
import bg from "../assets/BG.png"; // background texture
import mandala from "../assets/HeroMandalaa.png"; // mandala behind logo
import logo from "../assets/logo.png"; // main logo
import AboutTeam from "./AboutTeam";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Portfolio from "./Portfolio";
import FilmProduction from "./FilmProduction";
import Branding from "./Branding";
import ArtCuration from "./ArtCuration";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className="  "
    style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="min-h-screen pt-[70px] w-full  bg-cover bg-center flex flex-col lg:flex-row justify-center gap-10 items-center text-center relative px-4 border-b-2 border-gray-100 "
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Mandala + Logo Container */}
        <div className="relative flex justify-center items-center mb-10 lg:mb-0">
          {/* Mandala Image */}
          <img
            src={mandala}
            alt="Mandala Design"
            className="w-[250px] sm:w-[320px] lg:w-[380px] opacity-90"
          />

          {/* Logo on Mandala */}
          <img
            src={logo}
            alt="Logo"
            className="absolute w-[180px] sm:w-[220px] lg:w-[250px]"
          />
        </div>

        {/* Text Section */}
        <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
          <p className="text-[40px] sm:text-[50px] lg:text-[60px] italic text-[#0F3255] font-island leading-tight text-center">
            Varnan is where stories find their voice and form
          </p>

          <p className="text-lg text-orange-500 font-halant mt-4 tracking-wide place-self-center">
            Films · Brands · Art
          </p>

          <p className="text-[15px] sm:text-base text-gray-800 mt-6 leading-relaxed font-halant px-2 text-center">
            Since 2009, V’s been telling stories — stories of people, their
            journeys, and the places that shape them. Some begin in polished
            boardrooms, others in humble village squares. But every story starts
            the same way — by listening with intention. V believes it takes
            trust, patience, and an eye for the unseen to capture what truly
            matters. <br />
            V doesn’t just tell stories — V honors them.
          </p>
        </div>
      </div>

      <AboutTeam />


      <AboutUs />


      {/* <Services /> */}


      {/* <Portfolio />

      <FilmProduction />

      <Branding />

      <ArtCuration /> */}

      {/* <Contact /> */}
    </div>
  );
};

export default Hero;
