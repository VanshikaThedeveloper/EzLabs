import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import navicon from "../assets/Navicon.png";
import navicon2 from "../assets/open.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="flex w-full fixed items-center justify-between px-5 py-3  z-10">
      {/* Left Logo */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Toggle Icon */}
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="cursor-pointer w-7 h-7 flex items-center justify-center"
      >
        <img
          src={menuOpen ? navicon2 : navicon}
          alt="Menu Icon"
          className="w-7 h-7 object-contain transition-all duration-200"
        />
      </div>

      {/* Menu */}
      <div
        className={`absolute top-12 right-2 w-[300px] bg-[#ffffff90] shadow-md flex flex-col items-center justify-center space-y-5 py-6 transition-all duration-300 ease-in-out z-50 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 text-sm font-medium text-gray-800">

          <li
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
            className="hover:text-orange-500 cursor-pointer"
          >
            Home
          </li>

          <li
            onClick={() => {
              navigate("/services");
              setMenuOpen(false);
            }}
            className="hover:text-orange-500 cursor-pointer"
          >
            Services
          </li>
          <li 
          
          onClick={() => {
             alert("coming soon ......😊")
            }}
          className="hover:text-orange-500 cursor-pointer">Their Stories</li>
          <li
          onClick={() => {
             alert("coming soon ......😊")
            }}
          className="hover:text-orange-500 cursor-pointer">Our Story</li>
          <li 
          onClick={() => {
             alert("coming soon ......😊")
            }}
          className="hover:text-orange-500 cursor-pointer">Varnan</li>
        </ul>

        <button
          onClick={() => {
            navigate("/contact");
            setMenuOpen(false);
          }}
          className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
        >
          Let's Talk ✉️
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
