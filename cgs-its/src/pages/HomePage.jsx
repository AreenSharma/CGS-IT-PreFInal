import React from "react";

import Threads from "../components/Threads";
const HomePage = () => {
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#000", position: "relative" }}>
      {/* Threads Background */}
      <Threads amplitude={1} distance={0} enableMouseInteraction={true} />

      {/* Content (optional, can be removed) */}
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
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Welcome to CGS IT</h1>
        <p style={{ fontSize: "1.5rem" }}>Innovating the future of IT solutions</p>
      </div>
    </div>
  );
};

export default HomePage;
