import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Laptop2,
  BrainCircuit,
  Code2,
  Users,
} from "lucide-react";

const OverviewSection = () => {
  const slides = [
    {
      title: "Our Services 🛠️",
      icon: <Laptop2 className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />,
      content:
        "Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.",
    },
    {
      title: "IT Consulting 🧠",
      icon: <BrainCircuit className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />,
      content:
        "Strategic IT guidance to transform your business operations and drive digital innovation.",
      items: [
        "🧩 IT Strategy & Planning",
        "📊 Technology Assessments",
        "⚙️ Digital Transformation Guidance",
        "🔌 Infrastructure Optimization",
      ],
    },
    {
      title: "Software Development 💻",
      icon: <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />,
      content:
        "Custom software solutions built with cutting-edge technologies to meet your unique business needs.",
      items: [
        "🛠️ Custom Application Development",
        "📱 Web & Mobile Solutions",
        "🔄 Software Modernization",
        "🔗 API Integration",
      ],
    },
    {
      title: "IT Staffing 👥",
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />,
      content:
        "Connect with top-tier IT professionals who can drive your projects to success.",
      items: [
        "🧑‍💻 Contract Staffing",
        "🏢 Permanent Placement",
        "🔁 Contract-to-Hire",
        "🗂️ Direct Sourcing",
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const containerRef = useRef({});

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

  const handleTouchStart = (e) => {
    containerRef.current.startX = e.touches[0].clientX;
    containerRef.current.startY = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current.startX) return;
    
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    
    const diffX = currentX - containerRef.current.startX;
    const diffY = currentY - containerRef.current.startY;
    
    // Only handle horizontal swipes (ignore vertical scrolling)
    if (Math.abs(diffX) > Math.abs(diffY)) {
      e.preventDefault();
      containerRef.current.offsetX = diffX;
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(containerRef.current.offsetX) > 50) {
      if (containerRef.current.offsetX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    containerRef.current.startX = 0;
    containerRef.current.startY = 0;
    containerRef.current.offsetX = 0;
  };

  const handleMouseStart = (e) => {
    containerRef.current.startX = e.clientX;
    containerRef.current.isMouseDown = true;
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current.isMouseDown || !containerRef.current.startX) return;
    containerRef.current.offsetX = e.clientX - containerRef.current.startX;
  };

  const handleMouseEnd = () => {
    if (!containerRef.current.isMouseDown) return;
    
    if (Math.abs(containerRef.current.offsetX) > 50) {
      if (containerRef.current.offsetX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    
    containerRef.current.startX = 0;
    containerRef.current.offsetX = 0;
    containerRef.current.isMouseDown = false;
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 8000);
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const { icon, title, content, items } = slides[currentSlide];

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="max-w-5xl w-full px-4 sm:px-6 py-8 sm:py-16 text-left select-none"
        onMouseDown={handleMouseStart}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseEnd}
        onMouseLeave={handleMouseEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header with icon and title */}
        <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
          {icon}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {title}
          </h2>
        </div>

        {/* Content description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed">
          {content}
        </p>

        {/* Items list (if present) */}
        {items && (
          <ul className="text-sm sm:text-base md:text-lg text-gray-400 space-y-2 mb-6 sm:mb-8">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Navigation dots - only visible on small screens */}
        <div className="flex sm:hidden justify-center space-x-2 mb-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Read More button */}
        <div className="flex justify-center sm:justify-start">
          <button
            onClick={() => navigate("/AboutUs")}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg shadow-lg text-base sm:text-lg md:text-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            Read More
          </button>
        </div>

        {/* Swipe indicator for mobile */}
        <div className="block sm:hidden mt-6 text-center">
          <p className="text-xs text-gray-500">
            Swipe left or right to navigate
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;