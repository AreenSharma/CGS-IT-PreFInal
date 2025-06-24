import React from "react";
import Threads from "../components/Threads";

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
        }}
      >
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Section 1 - Background with Logo */}
        <section
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
            backgroundColor: "#000",
            scrollSnapAlign: "start",
          }}
        >
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
          <img
            src="/logo.svg"
            alt="CGS IT Logo"
            style={{
              position: "absolute",
              top: "-1rem", // Adjusted top to -1rem
              left: "2rem",
              height: "9rem", // Set height to 9rem
              maxWidth: "12rem", // Ensure responsiveness
              filter: "brightness(0) invert(1)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>CGS IT</h1>
            <p style={{ fontSize: "1.5rem", marginTop: "0.5rem" }}>
              Innovating the future of IT solutions
            </p>
          </div>
        </section>

        {/* Additional Sections */}
        <section
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#000",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapAlign: "start",
          }}
        >
          <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Part 2 Description dena
          </h2>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
