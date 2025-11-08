import React from "react";
import brand from "../assets/brand.png";
import underline from "../assets/underline.svg";
import nextarrow from "../assets/nextarrow.png";
import brandicon1 from "../assets/BrandingVector1.svg";
import brandicon2 from "../assets/BrandingVector2.svg";
import brandicon3 from "../assets/BrandingVector3.svg";
import brandicon4 from "../assets/BrandingVector4.svg";
import { useNavigate } from "react-router-dom";



const Branding = () => {
   const navigate = useNavigate()
  return (
    <div className="min-h-screen  pt-[70px] text-[#1f1f1f] font-serif px-8 py-12 relative overflow-hidden">
      {/* Quote Section */}
      <div className="text-center mb-10">
        <p className="text-lg md:text-xl italic">
          "A brand is a voice, and a product is a souvenir." - Lisa Gansky"
          <span className="not-italic"> – Robert Altman</span>
        </p>
        <img src={underline} alt="underline" className="mx-auto mt-2 w-180" />
      </div>

      {/* Back Button */}
      <button className="absolute md:top-30 top-35 left-6 border border-[#e25b37] text-[#e25b37] px-4 py-1 rounded-full text-sm hover:bg-[#e25b37] hover:text-white transition-all duration-200">
        &lt; Back
      </button>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-6">
        {/* Left Image Section */}
        <div className="bg-white shadow-lg p-3 w-[300px] md:w-[350px]">
          <img
            src={brand}
            alt="Film Production"
            className="w-full h-auto object-cover"
          />
          <p className="text-center mt-2 text-[17px]">Film Production</p>
        </div>

        {/* Right Text Section */}
        <div className="max-w-md leading-relaxed text-[17px] text-[#2b2b2b]">
          <p className="mb-3">
            A brand isn’t just what you see - it’s what you remember, what you
            carry home, and what you trust. We shape brands that people
            remember, return to, and fall in love with.
          </p>
          <p className="mb-2 font-semibold">V crafts:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
          </ul>

          {/* Explore Button */}
          <div 
          onClick={()=>navigate('/contact')}
          className="mt-8 flex items-center gap-2 cursor-pointer group">
            <span className="text-[16px] text-[#e25b37] font-medium group-hover:underline">
              Explore Now
            </span>
            <img
              src={nextarrow}
              alt="arrow"
              className="w-10 h-auto transition-transform duration-300 group-hover:translate-x-2"
            />
          </div>
        </div>
      </div>

      {/* Decorative Background Icons */}
      {/* <div className="absolute bottom-2 sm:bottom-8 left-10 opacity-70">
        <i className="text-[#2b2b2b] text-5xl">📷</i>
      </div> */}
      <img src={brandicon1} alt="" className="absolute bottom-0 sm:bottom-8 left-10 w-14 opacity-70" />

       <img src={brandicon2} alt="" className="absolute sm:top-1/3 hidden sm:block  left-10 opacity-70 w-14 " />

       <img src={brandicon3} alt="" className="absolute sm:top-1/3 hidden sm:block  right-10 opacity-70 w-14" />

       <img src={brandicon4} alt="" className="absolute bottom-10 right-1/3 opacity-70 w-14 " />


     
      
    </div>
  );
};

export default Branding;
