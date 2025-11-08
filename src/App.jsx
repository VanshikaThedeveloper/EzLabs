import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutUs from "./pages/AboutUs";
import AboutTeam from "./pages/AboutTeam";
import ArtCuration from "./pages/ArtCuration";
import Branding from "./pages/Branding";
import Contact from "./pages/Contact";
import FilmProduction from "./pages/FilmProduction";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

// Import all pages


export default function App() {
  return (
    <div className="font-sans">
      {/* Common Navbar on all pages */}
      <Navbar />

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-team" element={<AboutTeam />} />
        <Route path="/art-curation" element={<ArtCuration />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/film-production" element={<FilmProduction />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}
