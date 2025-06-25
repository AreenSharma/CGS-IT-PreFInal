import React from 'react';
import { Building2, Heart, Phone, Newspaper, ShoppingCart, Rocket } from 'lucide-react';

// IndustryCard Component
const IndustryCard = ({ icon: Icon, title, description, keyAreas }) => {
  return (
    <div className="group relative bg-gray-900 border border-gray-800 rounded-xl p-6 cursor-pointer transition-all duration-700 ease-out hover:bg-gray-800 hover:border-gray-600 hover:shadow-xl hover:shadow-white/25 hover:scale-105 hover:-translate-y-6 hover:rotate-2 hover:z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <Icon className="w-8 h-8 text-white mr-3 transition-all duration-500 group-hover:scale-125 group-hover:text-gray-100 group-hover:rotate-12" />
          <h3 className="text-xl font-semibold text-white transition-all duration-500 group-hover:text-gray-100 group-hover:scale-105">{title}</h3>
        </div>
        <p className="text-gray-300 mb-4 leading-relaxed transition-all duration-500 group-hover:text-gray-100">{description}</p>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide transition-all duration-500 group-hover:text-gray-200">Key Areas</h4>
          <ul className="space-y-1">
            {keyAreas.map((area, index) => (
              <li key={index} className="text-gray-300 text-sm flex items-center transition-all duration-500 group-hover:text-gray-100 group-hover:translate-x-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 transition-all duration-500 group-hover:bg-gray-100 group-hover:scale-150"></span>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// IndustriesGrid Component
const IndustriesGrid = () => {
  const industries = [
    {
      icon: Building2,
      title: "Financial Services & Banking",
      description: "Supporting financial institutions with secure, scalable technology solutions and compliance-focused talent acquisition.",
      keyAreas: [
        "Digital Banking Platforms",
        "Risk Management Systems",
        "Regulatory Compliance",
        "Payment Processing",
        "Fintech Innovation"
      ]
    },
    {
      icon: Heart,
      title: "Healthcare Technology",
      description: "Delivering specialized talent for healthcare organizations focused on improving patient outcomes through technology.",
      keyAreas: [
        "Electronic Health Records",
        "Telemedicine Platforms",
        "Medical Device Software",
        "Healthcare Analytics",
        "HIPAA Compliance"
      ]
    },
    {
      icon: Phone,
      title: "Telecommunications & Infrastructure",
      description: "Connecting telecom companies with experts who build and maintain the networks that power our connected world.",
      keyAreas: [
        "Network Architecture",
        "5G Implementation",
        "Cloud Infrastructure",
        "IoT Solutions",
        "Network Security"
      ]
    },
    {
      icon: Newspaper,
      title: "Media & Digital Publishing",
      description: "Empowering media companies with talent that drives digital transformation and content innovation.",
      keyAreas: [
        "Content Management Systems",
        "Digital Publishing Platforms",
        "Streaming Technologies",
        "Data Analytics",
        "User Experience Design"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-Commerce",
      description: "Helping retail organizations build seamless omnichannel experiences and optimize their digital presence.",
      keyAreas: [
        "E-commerce Platforms",
        "Inventory Management",
        "Customer Analytics",
        "Mobile Applications",
        "Supply Chain Technology"
      ]
    },
    {
      icon: Rocket,
      title: "Technology Startups",
      description: "Partnering with innovative startups to scale their technical teams and accelerate growth through strategic hiring.",
      keyAreas: [
        "MVP Development",
        "Scalable Architecture",
        "Product Development",
        "DevOps & Infrastructure",
        "Technical Leadership"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300 cursor-default">Industries We Serve</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our clients span multiple domains, and we have successfully staffed hundreds of positions 
            with a high retention and satisfaction rate across diverse industry sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              keyAreas={industry.keyAreas}
            />
          ))}
        </div>




      </div>
    </div>
  );
};

export default IndustriesGrid;