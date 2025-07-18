import React from "react";

import { BriefcaseMedical, Banknote, Cpu, Factory, ShieldCheck, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export const AboutSection = () => (
  <section className="h-auto mt-[10vh] bg-black text-white flex items-center justify-center px-6 py-16">
    <div className="max-w-5xl w-full text-left space-y-6">
      <h2 className="text-4xl font-bold">About CGS IT</h2>
      <p className="text-lg text-gray-300">
        At CGS IT, we specialize in delivering world-class IT staffing and consulting services.
        Our mission is to empower organizations with tailored technology solutions that drive
        innovation and efficiency, ensuring they stay ahead in today's competitive landscape.
      </p>
      <a
        href="/AboutUs"
        className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
      >
        Learn More About Us
      </a>
    </div>
  </section>
);

export const ServicesSection = () => (
  <section className="snap-start h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center space-y-6">
    <h2 className="text-4xl font-bold">Our Services</h2>
    <p className="text-lg max-w-3xl text-gray-300">
      CGS IT provides a range of IT solutions to help your organization achieve its goals. Whether you need expert staffing, bespoke software solutions, or complete project management, we are here to empower your business.
    </p>
    <ul className="text-gray-300 space-y-3 max-w-3xl">
      <li>• Tailored IT staffing solutions to match your business requirements</li>
      <li>• Custom software development for web and mobile platforms</li>
      <li>• Comprehensive cloud migration and infrastructure optimization</li>
      <li>• Cybersecurity solutions to protect your digital assets</li>
      <li>• End-to-end project management and business transformation support</li>
    </ul>
    <a
      href="/Services"
      className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
    >
      Explore Our Services
    </a>
  </section>
);

// export const IndustriesSection = () => (
//   <section className="snap-start h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center space-y-6">
//     <h2 className="text-4xl font-bold">Industries We Serve</h2>
//     <p className="text-lg max-w-3xl text-gray-300">
//       With years of experience across multiple industries, CGS IT offers specialized solutions tailored to meet the unique challenges of each sector. We work closely with our partners to deliver meaningful results.
//     </p>
//     <ul className="text-gray-300 space-y-3 max-w-3xl">
//       <li>• Healthcare: Optimizing patient care with robust IT solutions</li>
//       <li>• Financial Services: Ensuring security and efficiency in operations</li>
//       <li>• Technology: Delivering innovation for growth and scalability</li>
//       <li>• Manufacturing: Enhancing processes through automation and insights</li>
//       <li>• Government: Providing reliable and secure IT infrastructure</li>
//       <li>• Retail & E-Commerce: Boosting customer experience with smart solutions</li>
//     </ul>
//     <a
//       href="/Industries"
//       className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
//     >
//       Discover Our Industries
//     </a>
//   </section>
// );



export const IndustriesSection = () => {
  const navigate = useNavigate();

  const industries = [
    { icon: <BriefcaseMedical className="w-5 h-5 text-blue-500" />, text: 'Healthcare: Optimizing patient care with robust IT solutions' },
    { icon: <Banknote className="w-5 h-5 text-green-400" />, text: 'Financial Services: Ensuring security and efficiency in operations' },
    { icon: <Cpu className="w-5 h-5 text-purple-400" />, text: 'Technology: Delivering innovation for growth and scalability' },
    { icon: <Factory className="w-5 h-5 text-yellow-400" />, text: 'Manufacturing: Enhancing processes through automation and insights' },
    { icon: <ShieldCheck className="w-5 h-5 text-red-400" />, text: 'Government: Providing reliable and secure IT infrastructure' },
    { icon: <ShoppingCart className="w-5 h-5 text-pink-400" />, text: 'Retail & E-Commerce: Boosting customer experience with smart solutions' },
  ];

  return (
    <section className="h-auto mt-[10vh] bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full text-left space-y-6">
        <h2 className="text-4xl font-bold">Industries We Serve</h2>
        <p className="text-lg text-gray-300">
          With years of experience across multiple industries, CGS IT offers specialized
          solutions tailored to meet the unique challenges of each sector. We work
          closely with our partners to deliver meaningful results.
        </p>
        <ul className="space-y-4">
          {industries.map(({ icon, text }, idx) => (
            <li key={idx} className="flex items-start space-x-3 text-gray-300">
              <span>{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={() => navigate("/Industries")}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
        >
          Discover Our Industries
        </button>
      </div>
    </section>
  );
};
