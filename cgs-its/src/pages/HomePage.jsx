
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OverviewSection from "../components/OverviewSection";
import Footer from "../components/Footer";

import {
  AboutSection,
  ServicesSection,
  IndustriesSection,

} from "../components/HomePageSections";

const MiniSection = () => (
  <div
    style={{
      height: "50vh",            // adjust this to push the footer down
      backgroundColor: "transparent",
    }}
  />
);

const HomePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Fixed Navbar */}
      <Navbar />

      {/* Scroll‐snap container */}
      <div
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "auto",
          height: "100vh",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
          paddingTop: "4rem", // match your Navbar height
        }}
      >
        <style>
          {`
            /* Hide WebKit scrollbar */
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Hero */}
        <section style={{ scrollSnapAlign: "start", height: "100vh" }}>
          <Hero />
        </section>

        {/* Overview */}
        <section style={{ scrollSnapAlign: "start", height: "100vh" }}>
          <OverviewSection />
        </section>

        {/* New Modular Sections */}
        <ServicesSection />
        
        
        <IndustriesSection />
       

        {/* Mini spacer (no snap) */}
        

        {/* Footer (snaps into full view) */}
        <section style={{ scrollSnapAlign: "start", height: "100vh" }}>
        <AboutSection />
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
