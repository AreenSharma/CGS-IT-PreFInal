import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function ContactUsPage() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/GetQuote'); // Replace with your actual route
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 overflow-hidden pt-24">
      {/* Added 'pt-24' for padding to prevent overlap with the fixed Navbar */}
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="block text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text">
              Get in Touch
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Ready to transform your technology team? Reach out to us today.
          </p>
        </div>

        {/* Contact Form and Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <div className="space-y-6">
            <form className="space-y-6 animate-fade-in-up">
              <div>
                <label className="block text-gray-300 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-4 rounded-lg bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-lg bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your message"
                  className="w-full p-4 rounded-lg bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold rounded-lg hover:from-red-600 hover:to-red-800 transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8 animate-fade-in-up delay-300">
            <div className="text-gray-300 space-y-3">
              <h2 className="text-xl font-semibold">Our Address</h2>
              <p>CGS IT LLC</p>
              <p>123 Example Street</p>
              <p>Newark, Delaware, USA</p>
            </div>
            <div className="text-gray-300 space-y-3">
              <h2 className="text-xl font-semibold">Phone</h2>
              <p>+1 302-123-4567</p>
            </div>
            <div className="text-gray-300 space-y-3">
              <h2 className="text-xl font-semibold">Email</h2>
              <p>info@cgs-its.com</p>
            </div>

            {/* Redirect Button */}
            <button
              onClick={handleRedirect}
              className="py-4 px-8 bg-gradient-to-r from-gray-800 to-gray-600 text-white font-bold rounded-lg hover:from-gray-700 hover:to-gray-500 transition-all"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-900 to-transparent rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-gray-800 to-transparent rounded-full blur-3xl opacity-15 animate-pulse-slow delay-1000"></div>
      </div>

      <div style={{ height: '15vh', backgroundColor: 'black', width: '100vw' }}></div>
      <Footer />
    </div>
  );
}
