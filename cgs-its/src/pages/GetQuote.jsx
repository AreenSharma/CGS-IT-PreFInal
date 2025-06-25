import React from 'react';

export default function GetQuotePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pt-24">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Request Your Quote
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        {/* Quote Form */}
        <form className="space-y-8 animate-fade-in-up delay-200">
          {/* Company & Contact */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-gray-300 font-medium mb-2">
                Company Name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Your Company"
                className="w-full p-4 bg-gray-800 text-gray-200 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-gray-300 font-medium mb-2">
                Contact Name
              </label>
              <input
                id="contact"
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-gray-800 text-gray-200 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="w-full p-4 bg-gray-800 text-gray-200 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(123) 456-7890"
                className="w-full p-4 bg-gray-800 text-gray-200 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="details" className="block text-gray-300 font-medium mb-2">
              Project Details
            </label>
            <textarea
              id="details"
              rows={6}
              placeholder="Tell us about your needs..."
              className="w-full p-4 bg-gray-800 text-gray-200 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Budget & Timeline */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="budget" className="block text-gray-300 font-medium mb-2">
                Estimated Budget
              </label>
              <input
                id="budget"
                type="text"
                placeholder="$5,000 - $10,000"
                className="w-full p-4 bg-gray-800 text-gray-200 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="timeline" className="block text-gray-300 font-medium mb-2">
                Desired Timeline
              </label>
              <input
                id="timeline"
                type="text"
                placeholder="e.g. 3 months"
                className="w-full p-4 bg-gray-800 text-gray-200 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>

          {/* Services Checkbox */}
          <div>
            <span className="block text-gray-300 font-medium mb-2">
              Services Interested In
            </span>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                'Staff Augmentation',
                'Project Consulting',
                'Managed Services',
                'Direct Hire',
                'On-Site Support',
                'Remote Support'
              ].map(service => (
                <label key={service} className="flex items-center space-x-2">
                  <input type="checkbox" className="w-5 h-5 text-red-500 bg-gray-800 border-gray-600 rounded focus:ring-red-400" />
                  <span className="text-gray-200">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label htmlFor="file" className="block text-gray-300 font-medium mb-2">
              Upload Supporting Documents
            </label>
            <input
              id="file"
              type="file"
              className="w-full text-gray-200 bg-gray-800 border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-red-500 to-red-700 font-bold rounded-lg text-white hover:from-red-600 hover:to-red-800 transition-all"
          >
            Submit Quote Request
          </button>
        </form>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-900 to-transparent rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-gray-800 to-transparent rounded-full blur-3xl opacity-15 animate-pulse-slow delay-1000"></div>
      </div>

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0);  }
        }
        @keyframes pulse-slow {
          0%,100% { opacity: 0.1; }
          50%     { opacity: 0.3; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .delay-200 { animation-delay: 200ms; }
      `}</style>
    </div>
  );
}
