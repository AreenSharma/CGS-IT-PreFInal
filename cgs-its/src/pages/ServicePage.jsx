import React, { useState } from 'react';
import { Code, Users, Cog, TrendingUp, Clock, Award, Globe, Shield, Database, Server, Smartphone, CheckCircle } from 'lucide-react';

const ServiceCard = ({ service, index, activeService, setActiveService }) => {
  return (
    <div
      className={`group relative p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
        activeService === service.id ? 'ring-2 ring-orange-500' : ''
      }`}
      onMouseEnter={() => setActiveService(service.id)}
      onMouseLeave={() => setActiveService(null)}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
      
      <div className="relative z-10">
        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
          {service.icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-200">
              <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-8">
          <button className="text-orange-400 font-semibold hover:text-orange-300 transition-colors flex items-center group">
            Learn More
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Information Technology Consulting",
      icon: <Cog className="w-12 h-12" />,
      description: "Strategic IT guidance to transform your business operations and drive digital innovation.",
      features: [
        "IT Strategy & Planning",
        "Technology Assessments",
        "Digital Transformation Guidance",
        "Infrastructure Optimization"
      ],
      color: "from-blue-600 to-blue-800"
    },
    {
      id: 2,
      title: "Software Development",
      icon: <Code className="w-12 h-12" />,
      description: "Custom software solutions built with cutting-edge technologies to meet your unique business needs.",
      features: [
        "Custom Application Development",
        "Web & Mobile Solutions",
        "Software Modernization",
        "API Integration"
      ],
      color: "from-orange-600 to-orange-800"
    },
    {
      id: 3,
      title: "IT Staffing & Recruiting",
      icon: <Users className="w-12 h-12" />,
      description: "Connect with top-tier IT professionals who can drive your projects to success.",
      features: [
        "Contract Staffing",
        "Permanent Placement",
        "Contract-to-Hire",
        "Direct Sourcing"
      ],
      color: "from-emerald-600 to-emerald-800"
    },
    {
      id: 4,
      title: "Business Solutions",
      icon: <TrendingUp className="w-12 h-12" />,
      description: "Comprehensive business optimization services to streamline operations and maximize efficiency.",
      features: [
        "Project Management",
        "Business Analysis",
        "Process Optimization",
        "Change Management"
      ],
      color: "from-purple-600 to-purple-800"
    }
  ];

  const industries = [
    { name: "Healthcare & Life Sciences", icon: <Shield className="w-8 h-8" /> },
    { name: "Financial Services", icon: <Database className="w-8 h-8" /> },
    { name: "Technology & Software", icon: <Server className="w-8 h-8" /> },
    { name: "Manufacturing", icon: <Cog className="w-8 h-8" /> },
    { name: "Government & Public Sector", icon: <Globe className="w-8 h-8" /> },
    { name: "Retail & E-commerce", icon: <Smartphone className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-25 pb-25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                activeService={activeService}
                setActiveService={setActiveService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose CGS-IT?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What separates CGS from the others is that we take the time to understand our consultants' and clients' needs in order to deliver a solution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">24-Hour Promise</h3>
              <p className="text-gray-300">Rapid response for urgent staffing needs with qualified professionals ready to deploy.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">24-Month Commitment</h3>
              <p className="text-gray-300">Long-term partnership options ensuring continuity and sustained success for your projects.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Atlanta-Based, National Reach</h3>
              <p className="text-gray-300">Local expertise with the capability to serve clients across the United States.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering specialized solutions across diverse sectors with deep industry knowledge and expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-gray-800 hover:border-gray-600 text-center transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-orange-500 mb-4 flex justify-center group-hover:text-orange-400 transition-colors">
                  {industry.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our comprehensive IT services can drive your organization forward. 
            Get in touch with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesGrid;