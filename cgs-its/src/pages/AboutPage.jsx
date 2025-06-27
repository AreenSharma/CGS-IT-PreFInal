import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function AboutUs() {
  const features = [
    'Nationwide Coverage',
    'Expert Screening Process',
    'Rapid Deployment',
    '24/7 Support'
  ];

  return (
    <>
      <section className="min-h-screen bg-black text-white pt-40   overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 sm:px-8 gap-12 px-4 overflow-hidden">
          
          {/* Left column: main content */}
          <div className="space-y-12">
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

            {/* <div>
              <Link to="/GetQuote">
                <button className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-black font-medium rounded-lg transition">
                  Get a Quote
                </button>
              </Link>
            </div> */}
          </div>

          {/* Right column: image instead of carousel */}
          <div className="flex items-center justify-center">
            <img
              src="/Images/Image.png"
              alt="About us visual"
              className="w-full h-auto max-h-[500px] rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="h-[15vh] bg-black w-full px-4 sm:px-8 max-w-6xl mx-auto"></div>
      </section>
      <Footer />
    </>
  );
}
