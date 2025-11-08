import React from 'react'
import underline from '../assets/underline.svg'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import borderb from '../assets/borderb.png'
import tape from '../assets/tape.png'
import { useNavigate } from 'react-router-dom'


const Services = () => {
  const navigate = useNavigate()
  return (
    <div className="relative pt-[70px] w-full overflow-hidden  ">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-[#1e1e1e] text-[22px] md:text-[26px] font-halant mb-3">
          The storyboard reveals the breadth of our craft.
        </h2>
        <div className="flex justify-center">
          <img
            src={underline}
            alt="underline"
            className="w-[180px] md:w-[350px] -mt-2"
          />
        </div>
      </div>

      {/* Image Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 px-6 md:px-20">
        {/* Card 1 */}
        <div className="relative transform -rotate-6 hover:rotate-0 transition-transform duration-300"
        onClick={() => navigate('/film-production')}
        
        >
          {/* Tape */}
            <img
              src={tape}
              alt="tape"
              className="absolute  -top-10 -left-15 w-[190px] rotate-[-15deg] opacity-90 z-50"
            />
          <div className="bg-white shadow-lg rounded-md overflow-hidden w-[220px] md:w-[270px] relative">
            
        
            {/* Image */}
            <img src={pic1} alt="Film Production" className="w-full" />

            {/* Text */}
            <p className="text-center text-[#1e1e1e] text-[15px] md:text-[16px] py-3 font-halant">
              Film Production
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-300"
         onClick={() => navigate('/branding')}
        >
           {/* Tape */}
            <img
              src={tape}
              alt="tape"
              className="absolute  -top-10 -left-15 w-[190px] rotate-[-15deg] opacity-90 z-50"
            />
          <div className="bg-white shadow-lg rounded-md overflow-hidden w-[220px] md:w-[270px] relative">
            

            {/* Image */}
            <img src={pic2} alt="Branding" className="w-full" />

            {/* Text */}
            <p className="text-center text-[#1e1e1e] text-[15px] md:text-[16px] py-3 font-halant">
              Branding
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-300"
         onClick={() => navigate('/art-curation')}
        >
           {/* Tape */}
            <img
              src={tape}
              alt="tape"
              className="absolute  -top-10 -left-15 w-[190px] rotate-[-15deg] opacity-90 z-50"
            />
          <div className="bg-white shadow-lg rounded-md overflow-hidden w-[220px] md:w-[270px] relative">
            

            {/* Image */}
            <img src={pic3} alt="Art Curation" className="w-full" />

            {/* Text */}
            <p className="text-center text-[#1e1e1e] text-[15px] md:text-[16px] py-3 font-halant">
              Art Curation
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="mt-10 bottom-0 left-0 w-full">
        <img src={borderb} alt="border design" className="w-full" />
      </div>
    </div>
  )
}

export default Services
