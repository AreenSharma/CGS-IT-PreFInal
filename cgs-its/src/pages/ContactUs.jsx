import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ fullName: '', email: '', company: '', message: '' });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Section - Contact Info */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in">
                Let's Connect
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed animate-fade-in-delay">
                Ready to transform your technology team? Get in touch with our expert 
                recruiters and consultants today. We specialize in IT consulting, recruiting, 
                and software development services nationwide from our Tampa, Florida base.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="group relative p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Backlit glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                
                {/* Sliding light beam */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                
                <div className="relative flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-blue-600 group-hover:bg-blue-400 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-500 ease-in-out group-hover:scale-110 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">Email</h3>
                    <div className="relative h-6 overflow-hidden">
                      <p className="absolute text-gray-300 group-hover:text-white transition-all duration-500 ease-in-out group-hover:-translate-y-6 group-hover:opacity-0 text-sm truncate w-full">
                        Recruiter@cgs-its.com
                      </p>
                      <p className="absolute text-blue-300 font-medium translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-sm truncate w-full">
                        💼 Ready to recruit top talent
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group relative p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-green-500/50 hover:bg-gray-800/50 transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                {/* Backlit glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-green-600/20 to-green-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                
                {/* Sliding light beam */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                
                <div className="relative flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-green-600 group-hover:bg-green-400 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-12 flex-shrink-0">
                    <Phone className="w-6 h-6 text-white group-hover:animate-bounce" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold group-hover:text-green-300 transition-colors duration-300">Phone</h3>
                    <div className="relative h-6 overflow-hidden">
                      <p className="absolute text-gray-300 group-hover:text-white transition-all duration-500 ease-in-out group-hover:-translate-y-6 group-hover:opacity-0 text-sm truncate w-full">
                        844-496-5437
                      </p>
                      <p className="absolute text-green-300 font-medium translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-sm truncate w-full">
                        📞 Let's talk solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="group relative p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Backlit glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                
                {/* Sliding light beam */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                
                {/* Pulsing border effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-purple-500/0 group-hover:border-purple-500/30 group-hover:animate-pulse transition-all duration-500"></div>
                
                <div className="relative flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-purple-600 group-hover:bg-purple-400 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-rotate-12 flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-white group-hover:animate-ping" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold group-hover:text-purple-300 transition-colors duration-300">Address</h3>
                    <div className="relative h-16 overflow-hidden">
                      <div className="absolute text-gray-300 group-hover:text-white transition-all duration-500 ease-in-out group-hover:-translate-y-16 group-hover:opacity-0 text-sm leading-tight w-full">
                        <div>8270 Woodland Center Boulevard</div>
                        <div>Tampa, FL 33614</div>
                        <div className="text-xs opacity-75 mt-1">Serving clients nationwide</div>
                      </div>
                      <div className="absolute text-purple-300 font-medium translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-sm leading-tight w-full">
                        <div>🌎 Nationwide Excellence</div>
                        <div>🚀 From Tampa to everywhere</div>
                        <div className="text-xs text-purple-200 mt-1">Technology solutions delivered</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Particle effect overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-2 right-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700" style={{animationDelay: '0.2s'}}></div>
                  <div className="absolute top-1/2 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-600" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300">
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg flex items-center space-x-3 animate-pulse">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">Message sent successfully!</span>
              </div>
            )}

            <div className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/70"
                    required
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    focusedField === 'fullName' ? 'w-full' : 'w-0'
                  }`} />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/70"
                    required
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    focusedField === 'email' ? 'w-full' : 'w-0'
                  }`} />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Company</label>
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your company name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/70"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    focusedField === 'company' ? 'w-full' : 'w-0'
                  }`} />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your project or requirements..."
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-800/70 resize-none"
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    focusedField === 'message' ? 'w-full' : 'w-0'
                  }`} />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="group w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-900/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-900/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Animations CSS */}
        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
          
          .animate-fade-in-delay {
            animation: fade-in 0.8s ease-out 0.2s both;
          }
        `}</style>
      </div>

      {/* Footer placed outside main container */}
      <Footer />
    </>
  );
}