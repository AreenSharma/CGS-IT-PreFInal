import React from "react";
import { useNavigate } from "react-router-dom";

const OverviewSection = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
        scrollSnapAlign: "start",
        position: "relative",
      }}
    >
      <div
        style={{
          zIndex: 1,
          maxWidth: "800px",
          animation: "fadeIn 1.5s ease-in-out",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            letterSpacing: "0.1em",
            color: "#ff4500",
          }}
        >
          Welcome to CGS-IT
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            lineHeight: "1.8",
            color: "#ddd",
          }}
        >
          We specialize in IT Consulting, Recruiting, and Software Development.
          Gain access to strategic staffing solutions, cutting-edge technology
          services, and tailored outsourcing to drive your business forward.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <button
            onClick={() => navigate("/Services")}
            style={{
              padding: "0.8rem 2rem",
              backgroundColor: "#ff4500",
              color: "white",
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 4px 6px rgba(255, 69, 0, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 12px rgba(255, 69, 0, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 6px rgba(255, 69, 0, 0.3)";
            }}
          >
            Explore Services
          </button>
          <button
            onClick={() => navigate("/AboutUs")}
            style={{
              padding: "0.8rem 2rem",
              backgroundColor: "#222",
              color: "#fff",
              fontSize: "1rem",
              border: "2px solid #ff4500",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: "0 4px 6px rgba(255, 69, 0, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 12px rgba(255, 69, 0, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 6px rgba(255, 69, 0, 0.3)";
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default OverviewSection;
