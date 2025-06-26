import React, { useRef } from "react";
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
  const sections = {
    hero: useRef(null),
    overview: useRef(null),
    services: useRef(null),
    industries: useRef(null),
    about: useRef(null),
    footer: useRef(null),
  };

  const scrollToSection = (sectionKey) => {
    const section = sections[sectionKey]?.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-black text-white w-full min-h-screen overflow-x-hidden relative">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Scrollable Page Content */}
      <div className="pt-16 overflow-y-auto">
        <section ref={sections.hero}>
          <Hero />
        </section>

        <section ref={sections.overview}>
          <OverviewSection />
        </section>

        {/* Uncomment this if you want Services back */}
        {/* <section ref={sections.services}>
          <ServicesSection />
        </section> */}

        <section ref={sections.industries}>
          <IndustriesSection />
        </section>

        <section ref={sections.about}>
          <AboutSection />
        </section>

        <section ref={sections.footer}>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
