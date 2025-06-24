import React from "react";
import Hero from "../components/Hero";
import OverviewSection from "../components/OverviewSection";

const HomePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "auto",
          height: "100vh",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "smooth",
        }}
      >
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Hero Section */}
        <Hero />

        {/* Overview Section */}
        <OverviewSection />
      </div>
    </div>
  );
};

export default HomePage;
