import React from "react";
import Threads from "../components/Threads";

const Hero = () => {
  return (
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
          top: "-7.70rem",
          left: "2rem",
          height: "15rem",
          maxWidth: "12rem",
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
  );
};

export default Hero;
