import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Laptop2,
  BrainCircuit,
  Code2,
  Users,
} from "lucide-react";

export const OverviewSection = () => {
  const slides = [
    {
      title: "Our Services 🛠️",
      icon: <Laptop2 className="w-10 h-10 text-blue-400" />,
      content:
        "Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.",
    },
    {
      title: "IT Consulting 🧠",
      icon: <BrainCircuit className="w-10 h-10 text-purple-400" />,
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
      icon: <Code2 className="w-10 h-10 text-green-400" />,
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
      icon: <Users className="w-10 h-10 text-yellow-400" />,
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

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft")
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
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
    if (containerRef.current.offsetX > 50)
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    if (containerRef.current.offsetX < -50) handleNext();
    containerRef.current.startX = 0;
    containerRef.current.offsetX = 0;
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
    <section className="h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="max-w-5xl w-full px-6 py-16 text-left"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="flex items-center space-x-4 mb-4">
          {icon}
          <h2 className="text-5xl font-bold">{title}</h2>
        </div>

        <p className="text-xl text-gray-300 mb-6 leading-relaxed">{content}</p>

        {items && (
          <ul className="list-disc text-lg list-inside text-gray-400 space-y-2 mb-6">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        <button
          onClick={() => navigate("/AboutUs")}
          className="mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg text-xl transition"
        >
          Read More
        </button>
      </div>
    </section>
  );
};
