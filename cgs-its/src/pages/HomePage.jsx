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
    <div className="bg-black text-white w-full h-screen overflow-hidden relative">
      <Navbar />

      {/* Optional: Dot Navigation */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
        {Object.keys(sections).map((key, index) => (
          <button
            key={key}
            onClick={() => scrollToSection(key)}
            className="w-3 h-3 rounded-full bg-gray-500 hover:bg-blue-500 transition"
            title={`Go to ${key}`}
          ></button>
        ))}
      </div>

      {/* Scrollable Container */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section ref={sections.hero} className="snap-start">
          <Hero />
        </section>

        <section ref={sections.overview} className="snap-start">
          <OverviewSection />
        </section>

        <section ref={sections.services} className="snap-start">
          <ServicesSection />
        </section>

        <section ref={sections.industries} className="snap-start">
          <IndustriesSection />
        </section>

        <section ref={sections.about} className="snap-start">
          <AboutSection />
        </section>

        <section ref={sections.footer} className="snap-start">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
