import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const TextCarousel = ({ slides, interval = 5000 }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className="border border-gray-600 rounded-md p-6 h-full flex items-center justify-center">
      <p
        key={idx}
        className="text-gray-200 text-lg md:text-xl transition-opacity duration-700"
        style={{ opacity: 1 }}
      >
        {slides[idx]}
      </p>
    </div>
  );
};

export default function AboutUs() {
  const features = [
    'Nationwide Coverage',
    'Expert Screening Process',
    'Rapid Deployment',
    '24/7 Support'
  ];

  const carouselSlides = [
    "Let's Connect",
    'Ready to transform your technology team? Get in touch with our expert recruiters and consultants today.',
    '📧 Email\nRecruiter@cgs-its.com',
    '📞 Phone\n888-885-5368',
    '📍 Address\n1212 N. Orange St.\nWilmington, DE 19801'
  ];

  return (
    <section className="min-h-screen bg-black text-white pt-40 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left column: main content */}
        <div className="space-y-12">
          {/* Header */}
          <header className="space-y-6 text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Leading IT Staffing Excellence Since{' '}
              <span className="text-gray-100">Day One</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg">
              CGS IT LLC is a premier IT staffing and consulting company based in Delaware,
              serving clients across the United States. We specialize in connecting exceptional
              technology talent with innovative organizations looking to accelerate their digital
              transformation journey.
            </p>

            <p className="text-gray-300 text-base md:text-lg">
              Our deep understanding of the technology landscape, combined with our extensive
              network of skilled professionals, enables us to deliver tailored solutions that
              drive business success. From Fortune 500 companies to emerging startups, we partner
              with organizations of all sizes to build world-class technology teams.
            </p>
          </header>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feat) => (
              <div
                key={feat}
                className="flex items-center space-x-3 bg-gray-800 p-4 rounded-md"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-black" />
                </div>
                <span className="text-white font-medium">{feat}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div>
            <Link to="/GetQuote">
              <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-black font-medium rounded-lg transition">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>

        {/* Right column: text carousel */}
        <TextCarousel slides={carouselSlides} interval={5000} />
      </div>
      <div style={{ height: '5vh', backgroundColor: 'black', width: '100vw' }}></div>
      <Footer/>
    </section>

  
  );
}
