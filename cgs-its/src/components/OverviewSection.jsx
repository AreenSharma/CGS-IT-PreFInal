import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OverviewSection = () => {
  const slides = [
    {
      title: "Our Services",
      content:
        "Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.",
    },
    {
      title: "Information Technology Consulting",
      content:
        "Strategic IT guidance to transform your business operations and drive digital innovation.",
      items: [
        "IT Strategy & Planning",
        "Technology Assessments",
        "Digital Transformation Guidance",
        "Infrastructure Optimization",
      ],
    },
    {
      title: "Software Development",
      content:
        "Custom software solutions built with cutting-edge technologies to meet your unique business needs.",
      items: [
        "Custom Application Development",
        "Web & Mobile Solutions",
        "Software Modernization",
        "API Integration",
      ],
    },
    {
      title: "IT Staffing & Recruiting",
      content:
        "Connect with top-tier IT professionals who can drive your projects to success.",
      items: [
        "Contract Staffing",
        "Permanent Placement",
        "Contract-to-Hire",
        "Direct Sourcing",
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
  };

  const handleDragStart = (e) => {
    containerRef.current.startX = e.clientX || e.touches[0].clientX;
  };

  const handleDragMove = (e) => {
    if (!containerRef.current.startX) return;
    containerRef.current.offsetX =
      (e.clientX || e.touches[0].clientX) - containerRef.current.startX;
  };

  const handleDragEnd = () => {
    if (containerRef.current.offsetX > 50) handlePrev();
    if (containerRef.current.offsetX < -50) handleNext();
    containerRef.current.startX = 0;
    containerRef.current.offsetX = 0;
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 7000); // Auto-slide every 7 seconds
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-black text-white flex items-center justify-center"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Content */}
      <div
        ref={containerRef}
        className="max-w-5xl px-10 py-8 text-left"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <h2 className="text-6xl font-bold mb-6">{slides[currentSlide].title}</h2>
        <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
          {slides[currentSlide].content}
        </p>
        {slides[currentSlide].items && (
          <ul className="list-disc text-xl list-inside text-gray-400 space-y-3 mb-6">
            {slides[currentSlide].items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        <button
          onClick={() => navigate("/AboutUs")}
          className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg text-2xl transition"
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default OverviewSection;
