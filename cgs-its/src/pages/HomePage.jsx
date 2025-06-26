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

const HomePage = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#000",
        position: "relative",
      }}
    >
      {/* Fixed Navbar */}
      <Navbar />

      {/* Normal scroll container */}
      <div
        style={{
          overflowY: "auto",
          paddingTop: "4rem", // ensure space for fixed navbar
        }}
      >
        {/* Hero */}
        <section>
          <Hero />
        </section>

        {/* Overview */}
        <section>
          <OverviewSection />
        </section>

        {/* New Modular Sections */}
        {/* <section>
          <ServicesSection />
        </section> */}

        <section>
          <IndustriesSection />
        </section>

        <section>
          <AboutSection />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
